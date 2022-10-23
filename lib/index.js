import { DOMRenderer } from 'jibs-dom-renderer';

export class HTMLRenderer extends DOMRenderer {
  constructor(rootElement, _options) {
    super(rootElement);

    let options = {
      document: (this.rootElement && this.rootElement.ownerDocument),
      ...(_options || {}),
    }

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

  getDocument() {
    let options = this.options;
    if (options.document)
      return options.document;

    return (typeof document !== 'undefined') ? document : undefined;
  }

  bindEventMethod(element, propName, _extraArgs, eventCallback) {
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

  createNativeElement(type) {
    return this.getDocument().createElement(type);
  }

  findNativeElement(selector) {
    return this.getDocument().querySelector(selector);
  }

  updateElementAttributes(element, props) {
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
      if ((/^on[A-Z].*ExtraArgs/).test(propName))
        continue;

      let propValue = props[propName];

      if (propValue instanceof Boolean || propValue instanceof Number || propValue instanceof String)
        propValue = propValue.valueOf();

      let typeOf = typeof propValue;
      if (propValue == null)
        propValue = '';
      else if (typeOf === 'symbol')
        propValue = propValue.toString();
      else if (typeOf === 'boolean' || typeOf === 'number' || typeOf === 'string' || typeOf === 'bigint')
        propValue = '' + propValue;
      else if (typeOf === 'function' && (/^on[A-Z]/).test(propName))
        this.bindEventMethod(element, propName, props[`${propName}ExtraArgs`], propValue);
      else
        continue;

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

  destroyNativeElement(element) {
    if (!element.parentNode)
      return false;

    element.parentNode.removeChild(element);

    return true;
  }

  createTextElement(text) {
    return this.getDocument().createTextNode(('' + text));
  }

  updateTextElement(element, _text) {
    let text        = ('' + _text);
    let currentText = element.nodeValue;
    if (currentText === text)
      return false;

    element.nodeValue = text;

    return { previous: currentText, current: text };
  }

  destroyTextElement(element) {
    if (!element.parentNode)
      return false;

    element.parentNode.removeChild(element);

    return true;
  }
}
