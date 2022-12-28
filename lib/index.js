import { DOMRenderer, Utils, Renderers } from 'jibs-dom-renderer';
export * from 'jibs-dom-renderer';

const {
  NativeElement,
  TextElement,
  PortalElement,
  FORCE_REFLOW,
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

  getWindow(context) {
    let document = this.getDocument(context);
    if (document) {
      let window = (document.parentWindow || document.defaultView);
      if (window)
        return window;
    }

    return (typeof window !== 'undefined') ? window : undefined;
  }

  getElementFromCache(context, elementOrID) {
    let window          = this.getWindow(context);
    let virtualElement  = (elementOrID && this.elementIDMap.get(elementOrID.id)) || this.elementIDMap.get(elementOrID);
    if (!virtualElement && (elementOrID instanceof window.Node))
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

  createNativeElement(context, _type) {
    let isTerm  = (/^term$/i).test(_type);
    let type    = (isTerm) ? 'span' : _type;
    let element = this.getDocument(context).createElement(type);
    return element;
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

  handleElementProperty(context, element, propName, propValue, updatedProps) {
    if (!(propName in element))
      return false;

    if (!(/^(scrollLeft|scrollTop|value|checked|disabled|max|min|maxLength|minLength|multiple|pattern|readonly|required|autofocus|open)$/).test(propName))
      return false;

    let attributeValue = element[propName];
    if (attributeValue !== propValue) {
      if (element.nodeName === 'DIALOG' && propName === 'open' && typeof element.showModal === 'function') {
        try {
          if (propValue)
            element.showModal();
          else
            element.close();
        } catch (error) {
          setTimeout(() => {
            if (element[propName] !== attributeValue)
              return;

            if (propValue)
              element.showModal();
            else
              element.close();
          }, 5);
        }
      }

      updatedProps[propName] = { previous: attributeValue, current: propValue };
      element[propName] = propValue;
    }

    return true;
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
      let propName = propNames[i];
      if (typeof propName === 'symbol')
        continue;

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
      if (propValue === true) {
        propValue = propName;
      } else if (propValue === false) {
        propValue = null;
      } else if (typeOf === 'symbol') {
        propValue = propValue.toString();
      } else if (typeOf === 'number' || typeOf === 'string' || typeOf === 'bigint') {
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

    for (let i = 0, il = namesToDelete.length; i < il; i++) {
      let propName = namesToDelete[i];
      element.removeAttribute(propName);
    }

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
      let cachedVirtualElement  = (elementID != null) ? this.getElementFromCache(context, virtualElement) : null;
      if (cachedVirtualElement)
        return { ...cachedVirtualElement, ...virtualElement };

      let element;
      if (virtualElement.type === NativeElement.TYPE) {
        let type = virtualElement.value;
        element = this.createNativeElement(context, type);
      } else if (virtualElement.type === TextElement.TYPE) {
        element = this.createTextElement(context, virtualElement.value);
      } else if (virtualElement.type === PortalElement.TYPE) {
        element = this.findNativeElement(context, virtualElement.value);
      } else {
        throw new TypeError(`HTMLRenderer::updateElementChildren: Unsupported virtual element type detected: ${virtualElement}`);
      }

      return { ...virtualElement, element };
    });
  }

  getNativeElementAttributes(context, element, helperCallback) {
    let attributeNames  = element.getAttributeNames();
    let props           = {};

    for (let i = 0, il = attributeNames.length; i < il; i++) {
      let attributeName = attributeNames[i];
      let value         = element.getAttribute(attributeName);

      if (typeof helperCallback === 'function') {
        let result = helperCallback(attributeName, value);
        if (result != null)
          props = { ...props, ...result };
      } else {
        props[this.formatFromAttributeName(attributeName)] = value;
      }
    }

    return props;
  }

  updateElementChildren(context, _parentVirtualElement, _renderResult, renderFrame) {
    let window                = this.getWindow(context);
    let renderResult          = _renderResult;
    let parentVirtualElement  = this.getElementFromCache(context, _parentVirtualElement) || _parentVirtualElement;
    let parentElement         = (parentVirtualElement && parentVirtualElement.element);

    if (!parentElement) {
      if (!_parentVirtualElement)
        return false;

      let [ result ] = this.buildIncomingElements(context, [ _parentVirtualElement ]);
      parentElement = (result && result.element);

      if (parentElement)
        this.addElementToCache(result);
    }

    // If this is a "term" element, then pipe it
    // through "fetchTermKey"
    if (parentVirtualElement && parentVirtualElement.type === NativeElement.TYPE && (/^term$/i).test(parentVirtualElement.value)) {
      let term = this.fetchTermKey(context, { ...(parentVirtualElement.props || {}) });
      if (term) {
        parentElement.innerHTML = term || '';
        return true;
      }
    }

    try {
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
        let virtualElement  = this.getElementFromCache(context, element);

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
        }
      }

      // Add children
      for (let [ element, virtualElement ] of newNodesMap) {
        if (!childNodesMap.has(element)) {
          changed = true;

          parentElement.appendChild(element);
          this.addElementToCache(virtualElement);

          if (virtualElement.props && virtualElement.props[FORCE_REFLOW]) {
            // Force a reflow on the element
            element.offsetWidth;
          }

          if (element.nodeType === window.Element.ELEMENT_NODE)
            this.updateElementAttributes(context, element, virtualElement.props);

          if (virtualElement.props && typeof virtualElement.props.ref === 'function')
            virtualElement.props.ref.call(virtualElement.element, virtualElement.element, null);
        } else if (element.nodeType === window.Element.ELEMENT_NODE) {
          let didUpdated = this.updateElementAttributes(context, element, virtualElement.props);
          if (didUpdated && !changed && Object.keys(didUpdated).length > 0)
            changed = true;
        } else if (element.nodeType === window.Element.TEXT_NODE) {
          this.updateTextElement(context, element, virtualElement.value);
        }
      }

      return changed;
    } catch (error) {
      console.error(error);
    }
  }

  // eslint-disable-next-line no-unused-vars
  fetchTermKey(context, props) {
    // Return nothing means fallback
    // to standard children
  }
}

export * from './resource-loader.js';

export const A = 'A';
export const ABBR = 'ABBR';
export const ADDRESS = 'ADDRESS';
export const AREA = 'AREA';
export const ARTICLE = 'ARTICLE';
export const ASIDE = 'ASIDE';
export const AUDIO = 'AUDIO';
export const B = 'B';
export const BASE = 'BASE';
export const BDI = 'BDI';
export const BDO = 'BDO';
export const BLOCKQUOTE = 'BLOCKQUOTE';
export const BR = 'BR';
export const BUTTON = 'BUTTON';
export const CANVAS = 'CANVAS';
export const CAPTION = 'CAPTION';
export const CITE = 'CITE';
export const CODE = 'CODE';
export const COL = 'COL';
export const COLGROUP = 'COLGROUP';
export const DATA = 'DATA';
export const DATALIST = 'DATALIST';
export const DD = 'DD';
export const DEL = 'DEL';
export const DETAILS = 'DETAILS';
export const DFN = 'DFN';
export const DIALOG = 'DIALOG';
export const DIV = 'DIV';
export const DL = 'DL';
export const DT = 'DT';
export const EM = 'EM';
export const EMBED = 'EMBED';
export const FIELDSET = 'FIELDSET';
export const FIGCAPTION = 'FIGCAPTION';
export const FIGURE = 'FIGURE';
export const FOOTER = 'FOOTER';
export const FORM = 'FORM';
export const H1 = 'H1';
export const H2 = 'H2';
export const H3 = 'H3';
export const H4 = 'H4';
export const H5 = 'H5';
export const H6 = 'H6';
export const HEADER = 'HEADER';
export const HGROUP = 'HGROUP';
export const HR = 'HR';
export const I = 'I';
export const IFRAME = 'IFRAME';
export const IMG = 'IMG';
export const INPUT = 'INPUT';
export const INS = 'INS';
export const KBD = 'KBD';
export const LABEL = 'LABEL';
export const LEGEND = 'LEGEND';
export const LI = 'LI';
export const LINK = 'LINK';
export const MAIN = 'MAIN';
export const MAP = 'MAP';
export const MARK = 'MARK';
export const MENU = 'MENU';
export const META = 'META';
export const METER = 'METER';
export const NAV = 'NAV';
export const NOSCRIPT = 'NOSCRIPT';
export const OBJECT = 'OBJECT';
export const OL = 'OL';
export const OPTGROUP = 'OPTGROUP';
export const OPTION = 'OPTION';
export const OUTPUT = 'OUTPUT';
export const P = 'P';
export const PICTURE = 'PICTURE';
export const PRE = 'PRE';
export const PROGRESS = 'PROGRESS';
export const Q = 'Q';
export const RP = 'RP';
export const RT = 'RT';
export const RUBY = 'RUBY';
export const S = 'S';
export const SAMP = 'SAMP';
export const SCRIPT = 'SCRIPT';
export const SECTION = 'SECTION';
export const SELECT = 'SELECT';
export const SLOT = 'SLOT';
export const SMALL = 'SMALL';
export const SOURCE = 'SOURCE';
export const SPAN = 'SPAN';
export const STRONG = 'STRONG';
export const STYLE = 'STYLE';
export const SUB = 'SUB';
export const SUMMARY = 'SUMMARY';
export const SUP = 'SUP';
export const TABLE = 'TABLE';
export const TBODY = 'TBODY';
export const TD = 'TD';
export const TEMPLATE = 'TEMPLATE';
export const TEXTAREA = 'TEXTAREA';
export const TERM = 'TERM';
export const TFOOT = 'TFOOT';
export const TH = 'TH';
export const THEAD = 'THEAD';
export const TIME = 'TIME';
export const TITLE = 'TITLE';
export const TR = 'TR';
export const TRACK = 'TRACK';
export const U = 'U';
export const UL = 'UL';
export const VAR = 'VAR';
export const VIDEO = 'VIDEO';
export const WBR = 'WBR';
