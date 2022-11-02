import { DOMRenderer, Utils } from 'jibs-dom-renderer';
export * from 'jibs-dom-renderer';

export class HTMLRenderer extends DOMRenderer {
  constructor(rootElement, _options) {
    super(rootElement);

    let options = {
      document: (this.rootElement && this.rootElement.ownerDocument),
      ...(_options || {}),
    };

    Object.defineProperties(this, {
      'options': {
        writable:     false,
        enumerable:   false,
        configurable: false,
        value:        options || {},
      },
      'eventBindings': {
        writable:     false,
        enumerable:   false,
        configurable: false,
        value:        new WeakMap(),
      },
    });
  }

  getDocument(context) {
    let options = this.options;
    if (options.document)
      return options.document;

    return (typeof document !== 'undefined') ? document : undefined;
  }

  _flattenAndFilterStyles(context, styles) {
    if (!styles || styles === true || Object.is(styles, Infinity) || Object.is(styles, NaN))
      return;

    if (Array.isArray(styles)) {
      let finalStyles = [];
      for (let i = 0, il = styles.length; i < il; i++) {
        let value = styles[i];
        if (!value)
          continue;

        value = this._flattenAndFilterStyles(context, styles[i]);
        if (!value)
          continue;

        if (Array.isArray(value))
          finalStyles = finalStyles.concat(value);
        else
          finalStyles.push(value);
      }

      return finalStyles;
    }

    return styles;
  }

  _parseCSSStyleString(context, styleStr) {
    const nameToPropertyName = (name) => {
      return name.replace(/^[^a-zA-Z]+/, '').replace(/[^a-zA-Z0-9]([a-zA-Z0-9-])/g, (m, p) => {
        return p.toUpperCase();
      });
    };

    let styleObj = {};

    (styleStr + '').replace(/([a-zA-Z0-9-]+)\s*:\s*([^;]+)/g, (m, name, value) => {
      styleObj[nameToPropertyName(name)] = value.replace(/^['"]/, '').replace(/['"]$/, '');
    });

    return styleObj;
  }

  _parseStyles(context, styles) {
    if (!styles)
      return {};

    let finalStyleObj = {};
    for (let i = 0, il = styles.length; i < il; i++) {
      let value = styles[i];
      if (!value || Utils.instanceOf(value, 'number', 'boolean', 'bigint', 'function'))
        continue;

      if (Utils.instanceOf(value, 'string'))
        finalStyleObj = Object.assign(finalStyleObj, this._parseCSSStyleString(context, value));
      else
        finalStyleObj = Object.assign(finalStyleObj, value);
    }

    return finalStyleObj;
  }

  _flattenStyles(context, _styles) {
    let styles = this._flattenAndFilterStyles(context, _styles);
    if (!styles)
      return {};

    if (!Array.isArray(styles))
      styles = [ styles ];

    return this._parseStyles(context, styles);
  }

  bindEventMethod(context, element, propName, _extraArgs, eventCallback) {
    let extraArgs       = _extraArgs || [];
    let eventName       = propName.substring(2).toLowerCase();
    let currentBindings = this.eventBindings.get(element);
    if (currentBindings) {
      let eventBinding = currentBindings.get(eventName);
      if (eventBinding) {
        element.removeEventListener(eventName, eventBinding.callback);
        currentBindings.delete(eventName);
      }
    } else {
      currentBindings = new Map();
      this.eventBindings.set(element, currentBindings);
    }

    currentBindings.set(eventName, {
      callback: eventCallback,
      eventName,
      extraArgs,
    });

    element.addEventListener(eventName, eventCallback, ...extraArgs);
  }

  createNativeElement(context, type) {
    return this.getDocument(context).createElement(type);
  }

  findNativeElement(context, selector) {
    return this.getDocument(context).querySelector(selector);
  }

  applyElementStyle(context, element, elementStyle, propName, _propValue) {
    let propValue = _propValue;
    if (typeof propValue === 'number' || typeof propValue === 'bigint' || (propValue instanceof Number))
      propValue = `${propValue}px`;

    elementStyle[propName] = propValue;
  }

  applyElementStyles(context, element, styleObj) {
    if (!element || !styleObj)
      return;

    let styleProps = Object.keys(styleObj).sort((a, b) => {
      if (a.length !== b.length)
        return Math.sign(a.length - b.length);

      if (a === b)
        return 0;

      return (a < b) ? -1 : 1;
    });

    let elementStyle = element.style;
    for (let i = 0, il = styleProps.length; i < il; i++) {
      let propName = styleProps[i];
      if (!(propName in elementStyle))
        continue;

      let propValue = styleObj[propName];
      if (propValue == null || propValue === false || propValue === true || Object.is(propValue, Infinity) || Object.is(propValue, NaN))
        continue;

      this.applyElementStyle(context, element, elementStyle, propName, propValue);
    }
  }

  formatElementProps(context, element, props) {
    return props || {};
  }

  updateElementAttributes(context, element, _props) {
    let props = Object.assign({}, (_props || {}));
    if (Object.prototype.hasOwnProperty.call(props, 'style'))
      props.style = this._flattenStyles(context, props.style);
    else
      props.style = {};

    props = this.formatElementProps(context, element, props);

    let updatedProps  = {};
    let namesToDelete = [];
    let propNames     = Object.keys(props);
    let attributes    = element.getAttributeNames().reduce((attributes, attributeName) => {
      let currentAttributeValue = element.getAttribute(attributeName);
      if (!Object.prototype.hasOwnProperty.call(props, attributeName)) {
        namesToDelete.push(attributeName);
        updatedProps[attributeName] = { previous: currentAttributeValue, current: undefined };
      }

      attributes[attributeName] = currentAttributeValue;
      return attributes;
    }, {});

    for (let i = 0, il = propNames.length; i < il; i++) {
      let propName  = propNames[i];
      if ((/^on[A-Z].*ExtraArgs$/).test(propName))
        continue;

      let propValue = props[propName];

      if (propValue instanceof Boolean || propValue instanceof Number || propValue instanceof String)
        propValue = propValue.valueOf();

      if (propName === 'style') {
        this.applyElementStyles(context, element, propValue);
        continue;
      }

      let typeOf = typeof propValue;
      if (propValue == null) {
        propValue = '';
      } else if (typeOf === 'symbol') {
        propValue = propValue.toString();
      } else if (typeOf === 'boolean' || typeOf === 'number' || typeOf === 'string' || typeOf === 'bigint') {
        propValue = '' + propValue;
      } else if (typeOf === 'function' && (/^on[A-Z]/).test(propName)) {
        this.bindEventMethod(context, element, propName, props[`${propName}ExtraArgs`], propValue);
        continue;
      } else {
        continue;
      }

      if (Object.prototype.hasOwnProperty.call(attributes, propName)) {
        let attributeValue = attributes[propName];

        // eslint-disable-next-line eqeqeq
        if (attributeValue != propValue) {
          updatedProps[propName] = { previous: attributeValue, current: propValue };
          element.setAttribute(propName, propValue);
        }
      } else {
        updatedProps[propName] = { previous: undefined, current: propValue };
        element.setAttribute(propName, propValue);
      }
    }

    for (let i = 0, il = namesToDelete.length; i < il; i++)
      element.removeAttribute(namesToDelete[i]);

    return updatedProps;
  }

  destroyNativeElement(context, element) {
    if (!element.parentNode)
      return false;

    element.parentNode.removeChild(element);

    return true;
  }

  createTextElement(context, text) {
    return this.getDocument(context).createTextNode(('' + text));
  }

  updateTextElement(context, element, _text) {
    let text        = ('' + _text);
    let currentText = element.nodeValue;
    if (currentText === text)
      return false;

    element.nodeValue = text;

    return { previous: currentText, current: text };
  }

  destroyTextElement(context, element) {
    if (!element.parentNode)
      return false;

    element.parentNode.removeChild(element);

    return true;
  }

  updateElementChildren(context, element, renderResult, renderStartTime) {
    try {
      if (this.destroying || renderStartTime < this.renderStartTime)
        return false;

      if (!element)
        return false;

      if (!renderResult) {
        if (element.childNodes.length === 0)
          return false;

        element.replaceChildren('');
      } else if (Array.isArray(renderResult)) {
        let newNodes    = Utils.flattenArray(renderResult);
        let childNodes  = element.childNodes;

        if (newNodes.length === 0) {
          if (childNodes.length === 0)
            return false;

          element.replaceChildren('');

          return true;
        }

        if (childNodes.length === newNodes.length) {
          let hasDiff = false;
          for (let i = 0, il = childNodes.length; i < il; i++) {
            let childNode = childNodes[i];
            if (childNode !== newNodes[i]) {
              hasDiff = true;
              break;
            }
          }

          if (!hasDiff)
            return false;
        }

        element.replaceChildren(...newNodes);
      } else {
        if (element.childNodes[0] === renderResult)
          return false;

        element.replaceChildren(renderResult);
      }

      return true;
    } catch (error) {
      console.error(error);
    }
  }
}
