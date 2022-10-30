/* eslint-disable max-classes-per-file */
/* eslint-disable no-magic-numbers */

/* global describe, beforeEach, expect, spyOn, it */

import { JSDOM }        from 'jsdom';
import { HTMLRenderer } from '../../lib/index.js';
import { $, Component } from 'jibs';

describe('HTMLRenderer', () => {
  let window;
  let dom;
  let document;
  let rootNode;
  let renderer;

  beforeEach(() => {
    dom = new JSDOM('<!DOCTYPE html><html><head></head><body><div id="root"></div></body></html>');
    window = dom.window;
    document = window.document;
    rootNode = document.getElementById('root');
    renderer = new HTMLRenderer(rootNode, { document });
  });

  it('can parse style strings', () => {
    let result = renderer._parseCSSStyleString({}, 'background-color: "red"; color: blue;padding-left:0px;margin-right:0');
    expect(result).toEqual({
      backgroundColor:  'red',
      color:            'blue',
      paddingLeft:      '0px',
      marginRight:      '0',
    });
  });

  it('can flatten styles', () => {
    let result = renderer._flattenStyles({}, [
      'background-color: "red"; color: blue;padding-left:0px;margin-right:0',
      [ 'color: green', { paddingRight: 10 } ],
      [ [ false, null, 0, true, { backgroundImage: 'test.png' } ] ],
      { display: 'none' },
    ]);

    expect(result).toEqual({
      backgroundColor:  'red',
      color:            'green',
      paddingLeft:      '0px',
      marginRight:      '0',
      paddingRight:     10,
      backgroundImage:  'test.png',
      display:          'none',
    });
  });

  it('can create text elements', async () => {
    const jib = $()(
      'Hello world!',
    );

    await renderer.render(jib);

    expect(rootNode.innerHTML).toEqual('Hello world!');
  });

  it('can create other elements', async () => {
    const jib = $()(
      $('span', { id: 'hello' })(
        'Hello world!',
        $('br'),
        'Wow!',
      ),
    );

    await renderer.render(jib);

    expect(rootNode.innerHTML).toEqual('<span id="hello">Hello world!<br>Wow!</span>');
  });

  it('can re-render', async () => {
    const jib = $()(
      $('span', { id: 'hello' })(
        'Hello world!',
        $('br'),
        'Wow!',
      ),
    );

    await renderer.render(jib);
    expect(rootNode.innerHTML).toEqual('<span id="hello">Hello world!<br>Wow!</span>');

    spyOn(renderer, 'destroyNativeElement').and.callThrough();
    spyOn(renderer, 'destroyTextElement').and.callThrough();

    const jib2 = $()(
      $('span', { id: 'hello' })(
        'Stuff!',
        $('hr'),
        $('div')('Test!'),
      ),
    );

    await renderer.render(jib2);
    expect(rootNode.innerHTML).toEqual('<span id="hello">Stuff!<hr><div>Test!</div></span>');
    expect(renderer.destroyNativeElement.calls.count()).toEqual(1);
    expect(renderer.destroyNativeElement.calls.argsFor(0)[1].nodeName).toEqual('BR');
    expect(renderer.destroyTextElement.calls.count()).toEqual(1);
    expect(renderer.destroyTextElement.calls.argsFor(0)[1].nodeValue).toEqual('Wow!');
  });

  it('can render a component', async () => {
    let resolve;

    let promise = new Promise((_resolve) => {
      resolve = _resolve;
    });

    let results = [];

    class TestComponent extends Component {
      constructor(...args) {
        super(...args);

        this.state = {
          count: 0,
        };

        this.interval = setInterval(() => {
          this.state.count = this.state.count + 1;

          if (this.state.count >= 5) {
            clearInterval(this.interval);
            this.interval = null;
          }
        }, 1);
      }

      render() {
        return $('div', { id: 'test' })(
          $('span', { id: 'count' })(
            ...this.children,
            this.state.count,
          ),
        );
      }
    }

    const jib = $()(
      $('span', { id: 'hello' })(
        'Hello world!',
        $(TestComponent)('Count: '),
        'Wow!',
      ),
    );

    await renderer.render(jib);
    results.push(rootNode.innerHTML);

    renderer.on('updated', (event) => {
      if (event.action === 'deleted')
        return;

      Promise.resolve().then(() => {
        results.push(rootNode.innerHTML);
        if (results.length > 5)
          resolve();
      });
    });

    await promise;

    expect(results).toEqual([
      '<span id="hello">Hello world!<div id="test"><span id="count">Count: 0</span></div>Wow!</span>',
      '<span id="hello">Hello world!<div id="test"><span id="count">Count: 1</span></div>Wow!</span>',
      '<span id="hello">Hello world!<div id="test"><span id="count">Count: 2</span></div>Wow!</span>',
      '<span id="hello">Hello world!<div id="test"><span id="count">Count: 3</span></div>Wow!</span>',
      '<span id="hello">Hello world!<div id="test"><span id="count">Count: 4</span></div>Wow!</span>',
      '<span id="hello">Hello world!<div id="test"><span id="count">Count: 5</span></div>Wow!</span>',
    ]);
  });

  it('can use context', async () => {
    let results = [];

    class TestRenderer extends Component {
      render() {
        return $()(
          $('span', { id: 'number' })(this.context.caption),
        );
      }
    }

    class TestContextProvider extends Component {
      constructor(...args) {
        super(...args);

        this.context.caption = 'Cool Beans!';
      }

      render() {
        return $('div', { id: 'test' })(
          $('span', { id: 'count' })(
            ...this.children,
            $(TestRenderer),
          ),
        );
      }
    }

    const jib = $()(
      $('span', { id: 'hello' })(
        'Hello world!',
        $(TestContextProvider)('Count: '),
        'Wow!',
      ),
    );

    await renderer.render(jib);
    results.push(rootNode.innerHTML);

    expect(results).toEqual([
      '<span id="hello">Hello world!<div id="test"><span id="count">Count: <span id="number">Cool Beans!</span></span></div>Wow!</span>',
    ]);
  });

  it('will re-render children when the context changes', async () => {
    let resolve;

    let promise = new Promise((_resolve) => {
      resolve = _resolve;
    });

    let results = [];

    class Output2 extends Component {
      render() {
        return $()(
          $('span', { id: 'output2' })(this.context.test),
        );
      }
    }

    class Output extends Component {
      render() {
        this.context.test = 'context2';
        return $()(
          $('span', { id: 'output' })(
            this.context.number,
            $(Output2),
          ),
        );
      }
    }

    class TestComponent extends Component {
      constructor(...args) {
        super(...args);

        this.context.number = 0;
        this.context.test = 'context1';

        this.interval = setInterval(() => {
          this.context.number = (this.context.number || 0) + 1;

          if (this.context.number >= 5) {
            clearInterval(this.interval);
            this.interval = null;
          }
        }, 1);
      }

      render() {
        return $('div', { id: 'test' })(
          $('span', { id: 'count' })(
            ...this.children,
            $(Output),
            this.context.test,
          ),
        );
      }
    }

    const jib = $()(
      $('span', { id: 'hello' })(
        'Hello world!',
        $(TestComponent)('Count: '),
        'Wow!',
      ),
    );

    await renderer.render(jib);
    results.push(rootNode.innerHTML);

    renderer.on('updated', (event) => {
      if (event.action === 'deleted')
        return;

      Promise.resolve().then(() => {
        results.push(rootNode.innerHTML);
        if (results.length > 5)
          resolve();
      });
    });

    await promise;

    expect(results).toEqual([
      '<span id="hello">Hello world!<div id="test"><span id="count">Count: <span id="output">0<span id="output2">context2</span></span>context1</span></div>Wow!</span>',
      '<span id="hello">Hello world!<div id="test"><span id="count">Count: <span id="output">1<span id="output2">context2</span></span>context1</span></div>Wow!</span>',
      '<span id="hello">Hello world!<div id="test"><span id="count">Count: <span id="output">2<span id="output2">context2</span></span>context1</span></div>Wow!</span>',
      '<span id="hello">Hello world!<div id="test"><span id="count">Count: <span id="output">3<span id="output2">context2</span></span>context1</span></div>Wow!</span>',
      '<span id="hello">Hello world!<div id="test"><span id="count">Count: <span id="output">4<span id="output2">context2</span></span>context1</span></div>Wow!</span>',
      '<span id="hello">Hello world!<div id="test"><span id="count">Count: <span id="output">5<span id="output2">context2</span></span>context1</span></div>Wow!</span>',
    ]);
  });

  it('can capture references', async () => {
    let resolve;

    let promise = new Promise((_resolve) => {
      resolve = _resolve;
    });

    let results       = [];
    let output2Refs   = [];
    let spanRefs      = [];
    let capturedRefs  = [];

    class Output2 extends Component {
      getContextTest() {
        return this.context.test;
      }

      render() {
        return $()(
          $('span', { id: 'output2' })(this.context.test),
        );
      }
    }

    class Output extends Component {
      constructor(...args) {
        super(...args);

        this.context.test = 'context2';
      }

      render() {
        if (this.output2Ref)
          results.push(`${this.output2Ref.getContextTest()}:${this.context.number}`);

        capturedRefs.push(this.span);

        return $()(
          $('span', { id: 'output', ref: this.captureReference('span') })(
            this.context.number,
            $(Output2, { ref: (ref) => {
              this.output2Ref = ref;
              output2Refs.push(ref);
            }}),
          ),
        );
      }
    }

    class TestComponent extends Component {
      constructor(...args) {
        super(...args);

        this.context.number = 0;
        this.context.test = 'context1';

        this.interval = setInterval(() => {
          this.context.number = (this.context.number || 0) + 1;

          if (this.context.number > 4) {
            clearInterval(this.interval);
            this.interval = null;

            setTimeout(resolve, 10);
          }
        }, 1);
      }

      render() {
        return $('div', { id: 'test' })(
          $('span', { id: 'count', ref: (ref) => (spanRefs.push(ref)) })(
            ...this.children,
            $(Output),
            this.context.test,
          ),
        );
      }
    }

    const jib = $()(
      $('span', { id: 'hello' })(
        'Hello world!',
        $(TestComponent)('Count: '),
        'Wow!',
      ),
    );

    await renderer.render(jib);

    await promise;

    // This should destroy all component instances
    await renderer.render(null);

    expect(results).toEqual([
      'context2:1',
      'context2:2',
      'context2:3',
      'context2:4',
      'context2:5',
    ]);

    expect(spanRefs.length).toEqual(2);
    expect(spanRefs[0]).toBeTruthy();
    expect(spanRefs[1]).toBe(null);

    expect(output2Refs.length).toEqual(2);
    expect(output2Refs[0]).toBeTruthy();
    expect(output2Refs[1]).toBe(null);

    expect(capturedRefs.length).toEqual(6);
    expect(capturedRefs[0]).toBe(undefined);
    expect(capturedRefs[1]).toBeTruthy();
    expect(capturedRefs[2]).toBeTruthy();
    expect(capturedRefs[3]).toBeTruthy();
    expect(capturedRefs[4]).toBeTruthy();
    expect(capturedRefs[5]).toBeTruthy();
  });

  it('can bind events', async () => {
    let resolve;

    let promise = new Promise((_resolve) => {
      resolve = _resolve;
    });

    let clickHappened = false;

    class TestComponent extends Component {
      render() {
        return $('span', {
          ref:      this.captureReference('span', (ref) => {
            if (!ref)
              return;

            setTimeout(() => {
              let event = new window.MouseEvent('click', {
                bubbles:    true,
                cancelable: true,
                view:       window,
              });

              ref.dispatchEvent(event);
            }, 10);
          }),
          id:       'test',
          onClick:  () => {
            clickHappened = true;
            resolve();
          },
        })(
          'Hello world!',
        );
      }
    }

    const jib = $()(
      $('span', { id: 'hello' })(
        $(TestComponent),
      ),
    );

    renderer.render(jib);

    await promise;

    // This should destroy all component instances
    await renderer.render(null);

    expect(clickHappened).toEqual(true);
  });
});
