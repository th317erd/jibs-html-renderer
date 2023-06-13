import { DOMRenderer, Utils, Renderers, Term } from 'jibs-dom-renderer';
export * from 'jibs-dom-renderer';

const {
  FORCE_REFLOW,
} = Renderers;

const TERM_COMPONENT_TYPE_CHECK = Symbol.for('@jibs/isTerm');

export class HTMLRenderer extends DOMRenderer {
  constructor(rootElement, _options) {
    let options = {
      document: (rootElement && rootElement.ownerDocument),
      ...(_options || {}),
    };

    super(rootElement, options);

    Object.defineProperties(this, {
      'eventBindings': {
        writable:     false,
        enumerable:   false,
        configurable: false,
        value:        new WeakMap(),
      },
    });
  }

  // eslint-disable-next-line no-unused-vars
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

  setElementAttribute(context, element, propName, _propValue) {
    let propValue = _propValue;
    if (propValue == null)
      element.removeAttribute(this.formatToAttributeName(propName));
    else
      element.setAttribute(this.formatToAttributeName(propName), propValue);
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

  updateElementAttributes(context, node) {
    let nativeElement = node.nativeElement;
    let _props = node.jib.props || {};
    let props = Object.assign({}, (_props || {}));
    if (Object.prototype.hasOwnProperty.call(props, 'style'))
      props.style = this._flattenStyles(context, props.style);
    else
      props.style = {};

    props = this.formatElementProps(context, nativeElement, props);
    props['data-jib-id'] = node.id;

    let updatedProps  = {};
    let namesToDelete = [];
    let propNames     = Object.keys(props);
    let attributes    = nativeElement.getAttributeNames().reduce((attributes, attributeName) => {
      let currentAttributeValue = nativeElement.getAttribute(attributeName);
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
      if (propName === 'key')
        continue;

      if (typeof propName === 'symbol')
        continue;

      if ((/^on[A-Z].*ExtraArgs$/).test(propName))
        continue;

      if ((/^(outerHTML)$/).test(propName))
        continue;

      let propValue = props[propName];

      if (propValue instanceof Boolean || propValue instanceof Number || propValue instanceof String)
        propValue = propValue.valueOf();

      if (this.isJib(propValue)) {
        propValue = this.constructJib(propValue);

        let isTerm = ((propValue.Type && propValue.Type[TERM_COMPONENT_TYPE_CHECK]) || (/^term$/i).test(propValue.Type));
        if (isTerm)
          propValue = this.resolveTerm(propValue);
        else
          continue;
      }

      if (propName === 'style') {
        this.applyElementStyles(context, nativeElement, propValue, updatedProps);
        continue;
      }

      if (propName === 'innerHTML') {
        nativeElement.innerHTML = (propValue == null) ? '' : propValue.toString();
        continue;
      } else if (this.handleElementProperty(context, nativeElement, propName, propValue, updatedProps)) {
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
        this.bindEventMethod(context, nativeElement, propName, props[`${propName}ExtraArgs`], propValue, props);
        continue;
      } else if (propValue != null) {
        continue;
      }

      let attributeValue = attributes[propName];
      if (attributeValue !== propValue)
        updatedProps[propName] = { previous: attributeValue, current: propValue };
      else
        continue;

      this.setElementAttribute(context, nativeElement, propName, propValue);
    }

    for (let i = 0, il = namesToDelete.length; i < il; i++) {
      let propName = namesToDelete[i];
      nativeElement.removeAttribute(propName);
    }

    // this.setElementAttribute(context, nativeElement, 'jibs-element-id', node.id);

    return (Object.keys(updatedProps).length > 0) ? true : false;
  }

  async destroyNativeElement(context, node) {
    let nativeElement = node.nativeElement;
    if (!nativeElement)
      return false;

    if (nativeElement.parentNode)
      nativeElement.parentNode.removeChild(nativeElement);

    return true;
  }

  async destroyTextElement(context, node) {
    return this.destroyNativeElement(context, node);
  }

  async destroyPortalElement(context, node) {
    // We don't want to destroy portals.
    // We let the owner of the portal destroy itself
    // instead.
  }

  async findNativeElement(context, node) {
    if (!node || !node.jib || !node.jib.Type)
      return;

    return this.getDocument(context).querySelector(node.jib.Type);
  }

  async createNativeElement(context, node) {
    if (!node || !node.jib || !node.jib.Type)
      return;

    let type    = node.jib.Type;
    let element = this.getDocument(context).createElement(type);

    return element;
  }

  forceNativeElementReflow(context, node, nativeElement) {
    if (node.props && node.props[FORCE_REFLOW])
      nativeElement.offsetWidth;
  }

  async updateNativeElement(context, node) {
    return this.updateElementAttributes(context, node);
  }

  async createTextElement(context, node) {
    if (!node || !node.jib)
      return;

    let text = node.jib.children;
    if (text == null || Object.is(text, NaN) || Object.is(text, Infinity))
      text = '';

    return this.getDocument(context).createTextNode(('' + text));
  }

  async updateTextElement(context, node) {
    if (!node || !node.jib)
      return;

    let nativeElement = node.nativeElement;
    if (!nativeElement)
      return;

    let text = node.jib.children;
    if (text == null || Object.is(text, NaN) || Object.is(text, Infinity))
      text = '';

    let currentText = nativeElement.nodeValue;
    if (currentText === text)
      return false;

    nativeElement.nodeValue = text;

    return true;
  }

  async createPortalElement(context, node) {
    return this.findNativeElement(context, node);
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
export const TERM = Term;
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
