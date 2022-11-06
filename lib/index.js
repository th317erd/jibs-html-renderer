import { DOMRenderer, Utils, Renderers } from 'jibs-dom-renderer';
export * from 'jibs-dom-renderer';

const {
  NativeElement,
  TextElement,
  PortalElement,
} = Renderers;

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
      'elementIDMap': {
        writable:     false,
        enumerable:   false,
        configurable: false,
        value:        new Map(),
      },
    });
  }

  getDocument(context) {
    let options = this.options;
    if (options.document)
      return options.document;

    return (typeof document !== 'undefined') ? document : undefined;
  }

  getElementFromCache(elementOrID) {
    let virtualElement = (elementOrID && this.elementIDMap.get(elementOrID.id)) || this.elementIDMap.get(elementOrID);
    if (!virtualElement && (elementOrID instanceof Node))
      return { element: elementOrID };

    return virtualElement;
  }

  addElementToCache(virtualElement) {
    if (!virtualElement)
      return;

    if (virtualElement.element)
      this.elementIDMap.set(virtualElement.element, virtualElement);

    if (virtualElement.id)
      this.elementIDMap.set(virtualElement.id, virtualElement);
  }

  removeElementFromCache(virtualElement) {
    if (!virtualElement)
      return;

    if (virtualElement.element)
      this.elementIDMap.delete(virtualElement.element);

    if (virtualElement.id)
      this.elementIDMap.delete(virtualElement.id);
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

  bindEventMethod(context, element, propName, _extraArgs, eventCallback, props) {
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

    let bindingContext = {
      callback: (event) => eventCallback.call(element, { target: element, propName, event, props }),
      eventName,
      extraArgs,
    };

    currentBindings.set(eventName, bindingContext);

    element.addEventListener(eventName, bindingContext.callback, ...extraArgs);
  }

  createNativeElement(context, type) {
    return this.getDocument(context).createElement(type);
  }

  findNativeElement(context, selector) {
    return this.getDocument(context).querySelector(selector);
  }

  applyElementStyle(context, element, elementStyle, propName, _propValue, updatedStyles) {
    let propValue = _propValue;
    if (propValue == null || propValue === false || propValue === true || Object.is(propValue, Infinity) || Object.is(propValue, NaN))
      propValue = 'unset';

    if (typeof propValue === 'number' || typeof propValue === 'bigint' || (propValue instanceof Number))
      propValue = `${propValue}px`;

    if (elementStyle[propName] !== propValue) {
      updatedStyles[propName] = { previous: elementStyle[propName], current: propValue };
      elementStyle[propName] = propValue;
    }
  }

  applyElementStyles(context, element, styleObj, updatedProps) {
    if (!element || !styleObj)
      return;

    let styleProps = Object.keys(styleObj).sort((a, b) => {
      if (a.length !== b.length)
        return Math.sign(a.length - b.length);

      if (a === b)
        return 0;

      return (a < b) ? -1 : 1;
    });

    let updatedStyles = {};
    let elementStyle  = element.style;

    for (let i = 0, il = styleProps.length; i < il; i++) {
      let propName = styleProps[i];
      if (!(propName in elementStyle))
        continue;

      let propValue = styleObj[propName];
      this.applyElementStyle(context, element, elementStyle, propName, propValue, updatedStyles);
    }

    let updatedStylesKeys = Object.keys(updatedStyles);
    if (updatedStylesKeys.length > 0) {
      let stylePropUpdateOld  = {};
      let stylePropUpdateNew  = {};

      for (let i = 0, il = updatedStylesKeys.length; i < il; i++) {
        let propName    = updatedStylesKeys[i];
        let updateValue = updatedStyles[propName];

        stylePropUpdateOld[propName] = updateValue.previous;
        stylePropUpdateNew[propName] = updateValue.current;
      }

      updatedProps['style'] = { previous: stylePropUpdateOld, current: stylePropUpdateNew };
    }
  }

  formatElementProps(context, element, props) {
    return props || {};
  }

  handleElementProperty(context, element, propName, propValue, updatedProps) {
    if (!(propName in element))
      return false;

    if (!(/^(scrollLeft|scrollTop|value|checked|disabled|max|min|maxLength|minLength|multiple|pattern|readonly|required)$/).test(propName))
      return false;

    let attributeValue = element[propName];
    if (attributeValue !== propValue) {
      updatedProps[propName] = { previous: attributeValue, current: propValue };
      element[propName] = propValue;
    }

    return true;
  }

  formatToAttributeName(name) {
    let result = name.replace(/([a-z0-9]|^)([A-Z])/g, (m, p1, p2) => {
      return `${p1}-${p2}`;
    }).toLowerCase();

    return result;
  }

  formatFromAttributeName(name) {
    let result = name.replace(/-[a-z]/g, (m) => {
      return m.substring(1).toUpperCase();
    });

    return result;
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
      let propName = this.formatFromAttributeName(attributeName);

      if (!Object.prototype.hasOwnProperty.call(props, propName)) {
        namesToDelete.push(attributeName);
        updatedProps[propName] = { previous: currentAttributeValue, current: undefined };
      }

      attributes[propName] = currentAttributeValue;
      return attributes;
    }, {});

    for (let i = 0, il = propNames.length; i < il; i++) {
      let propName  = propNames[i];
      if ((/^on[A-Z].*ExtraArgs$/).test(propName))
        continue;

      if ((/^(outerHTML)$/).test(propName))
        continue;

      let propValue = props[propName];

      if (propValue instanceof Boolean || propValue instanceof Number || propValue instanceof String)
        propValue = propValue.valueOf();

      if (propName === 'style') {
        this.applyElementStyles(context, element, propValue, updatedProps);
        continue;
      }

      if (propName === 'innerHTML') {
        element.innerHTML = (propValue == null) ? '' : propValue.toString();
        continue;
      } else if (this.handleElementProperty(context, element, propName, propValue, updatedProps)) {
        continue;
      }

      let typeOf = typeof propValue;
      if (typeOf === 'symbol') {
        propValue = propValue.toString();
      } else if (typeOf === 'boolean' || typeOf === 'number' || typeOf === 'string' || typeOf === 'bigint') {
        propValue = '' + propValue;
      } else if (typeOf === 'function' && (/^on[A-Z]/).test(propName)) {
        this.bindEventMethod(context, element, propName, props[`${propName}ExtraArgs`], propValue, props);
        continue;
      } else if (propValue != null) {
        continue;
      }

      let attributeValue = attributes[propName];
      if (attributeValue !== propValue)
        updatedProps[propName] = { previous: attributeValue, current: propValue };
      else
        continue;

      if (propValue == null)
        element.removeAttribute(this.formatToAttributeName(propName));
      else
        element.setAttribute(this.formatToAttributeName(propName), propValue);
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

  buildIncomingElements(context, renderResult) {
    return Utils.flattenArray(renderResult).filter((virtualElement) => {
      if (virtualElement == null || Object.is(virtualElement, NaN) || Object.is(virtualElement, Infinity))
        return false;

      return true;
    }).map((virtualElement) => {
      let elementID             = virtualElement.id;
      let cachedVirtualElement  = (elementID != null) ? this.getElementFromCache(virtualElement) : null;
      if (cachedVirtualElement)
        return cachedVirtualElement;

      let element;
      if (virtualElement.type === NativeElement.TYPE)
        element = this.createNativeElement(context, virtualElement.value);
      else if (virtualElement.type === TextElement.TYPE)
        element = this.createTextElement(context, virtualElement.value);
      else if (virtualElement.type === PortalElement.TYPE)
        element = this.findNativeElement(context, virtualElement.value);
      else
        throw new TypeError(`HTMLRenderer::updateElementChildren: Unsupported virtual element type detected: ${virtualElement}`);

      return { ...virtualElement, element };
    });
  }

  updateElementChildren(context, parentVirtualElement, _renderResult, renderStartTime) {
    let renderResult                = _renderResult;
    let { element: parentElement }  = (this.getElementFromCache(parentVirtualElement) || {});
    if (!parentElement) {
      if (!parentVirtualElement)
        return false;

      let [ result ] = this.buildIncomingElements(context, [ parentVirtualElement ]);
      parentElement = (result && result.element);

      if (parentElement)
        this.addElementToCache(result);
    }

    try {
      const emitAddToDOMEvent = (element) => {
        if (element && typeof element.dispatchEvent === 'function')
          element.dispatchEvent(new Event('addtodom'));
      };

      const emitRemoveFromDOMEvent = (element) => {
        if (element && typeof element.dispatchEvent === 'function')
          element.dispatchEvent(new Event('removefromdom'));
      };

      if (renderResult == null || Object.is(renderResult, NaN) || Object.is(renderResult, Infinity))
        renderResult = [];
      else if (!Array.isArray(renderResult))
        renderResult = [ renderResult ];

      let currentChildElements  = Array.from(parentElement.childNodes || []);
      let newChildElements      = this.buildIncomingElements(context, renderResult);
      let changed               = false;
      let childNodesMap         = new Map();
      let newNodesMap           = new Map();

      for (let i = 0, il = currentChildElements.length; i < il; i++) {
        let element         = currentChildElements[i];
        let virtualElement  = this.getElementFromCache(element);

        childNodesMap.set(virtualElement.element, virtualElement);
      }

      for (let i = 0, il = newChildElements.length; i < il; i++) {
        let virtualElement = newChildElements[i];
        newNodesMap.set(virtualElement.element, virtualElement);
      }

      // Remove children
      for (let [ element, virtualElement ] of childNodesMap) {
        if (!newNodesMap.has(element)) {
          changed = true;

          this.destroyNativeElement(context, element, virtualElement);
          this.removeElementFromCache(virtualElement);

          if (virtualElement.props && typeof virtualElement.props.ref === 'function')
            virtualElement.props.ref.call(virtualElement.element, null, virtualElement.element);

          emitRemoveFromDOMEvent(element);
        }
      }

      // Add children
      for (let [ element, virtualElement ] of newNodesMap) {
        if (!childNodesMap.has(element)) {
          changed = true;

          parentElement.appendChild(element);
          this.addElementToCache(virtualElement);

          // Force a reflow on the element
          element.offsetWidth;

          if (element.nodeType === Element.ELEMENT_NODE)
            this.updateElementAttributes(context, element, virtualElement.props);

          if (virtualElement.props && typeof virtualElement.props.ref === 'function')
            virtualElement.props.ref.call(virtualElement.element, virtualElement.element, null);

          emitAddToDOMEvent(element);
        } else if (element.nodeType === Element.ELEMENT_NODE) {
          let didUpdated = this.updateElementAttributes(context, element, virtualElement.props);
          if (didUpdated && !changed && Object.keys(didUpdated).length > 0)
            changed = true;
        } else if (element.nodeType === Element.TEXT_NODE) {
          this.updateTextElement(context, element, virtualElement.value);
        }
      }

      return changed;
    } catch (error) {
      console.error(error);
    }
  }
}

export * from './resource-loader.js';
