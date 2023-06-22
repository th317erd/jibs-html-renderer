/******/ var __webpack_modules__ = ({

/***/ "../jibs-dom-renderer/dist/index.js":
/*!******************************************!*\
  !*** ../jibs-dom-renderer/dist/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ J),
/* harmony export */   "Component": () => (/* binding */ k),
/* harmony export */   "Components": () => (/* binding */ F),
/* harmony export */   "DOMRenderer": () => (/* binding */ M),
/* harmony export */   "Jibs": () => (/* binding */ U),
/* harmony export */   "Renderers": () => (/* binding */ Y),
/* harmony export */   "Term": () => (/* binding */ B),
/* harmony export */   "Utils": () => (/* binding */ L),
/* harmony export */   "deadbeef": () => (/* binding */ V),
/* harmony export */   "factory": () => (/* binding */ X)
/* harmony export */ });
var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{$:()=>o,wA:()=>s,z8:()=>a,q$:()=>DOMRenderer,El:()=>l,pv:()=>c,Rh:()=>u,cQ:()=>d,Be:()=>h,d5:()=>f});var r={711:function(e,t,r){const n=("undefined"!=typeof window?window:r.g)||this,i=Symbol.for("@@deadbeefRefMap"),o=Symbol.for("@@deadbeefUniqueID"),s=n[i]?n[i]:new WeakMap,a=[];n[i]||(n[i]=s);let l=0n;function anythingToID(e,t){let r=e;(r instanceof Number||r instanceof String||r instanceof Boolean)&&(r=r.valueOf());let n=typeof r;if("number"===n&&0===r)return Object.is(r,-0)?"number:-0":"number:+0";if("symbol"===n)return`symbol:${r.toString()}`;if(null==r||"number"===n||"boolean"===n||"string"===n||"bigint"===n)return"number"===n?r<0?`number:${r}`:`number:+${r}`:"bigint"===n&&0n===r?"bigint:+0":`${n}:${r}`;let i=a.length>0&&function getHelperForValue(e){for(let t=0,r=a.length;t<r;t++){let{helper:r,generator:n}=a[t];if(r(e))return n}}(r);if(i)return anythingToID(i(r));if(o in r&&"function"==typeof r[o]&&(!t||!t.has(r))){let e=t||new Set;return e.add(r),anythingToID(r[o](),e)}if(!s.has(r)){let e=`${typeof r}:${++l}`;return s.set(r,e),e}return s.get(r)}function deadbeef(){let e=[arguments.length];for(let t=0,r=arguments.length;t<r;t++)e.push(anythingToID(arguments[t]));return e.join(":")}Object.defineProperties(deadbeef,{idSym:{writable:!0,enumerable:!1,configurable:!0,value:o},sorted:{writable:!0,enumerable:!1,configurable:!0,value:function deadbeefSorted(){let e=[arguments.length];for(let t=0,r=arguments.length;t<r;t++)e.push(anythingToID(arguments[t]));return e.sort().join(":")}},generateIDFor:{writable:!0,enumerable:!1,configurable:!0,value:function generateIDFor(e,t){a.push({helper:e,generator:t})}},removeIDGenerator:{writable:!0,enumerable:!1,configurable:!0,value:function removeIDGenerator(e){let t=a.findIndex((t=>t.helper===e));t<0||a.splice(t,1)}}}),e.exports=deadbeef}},n={};function __nested_webpack_require_1712__(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return r[e].call(i.exports,i,i.exports,__nested_webpack_require_1712__),i.exports}__nested_webpack_require_1712__.d=(e,t)=>{for(var r in t)__nested_webpack_require_1712__.o(t,r)&&!__nested_webpack_require_1712__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__nested_webpack_require_1712__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__nested_webpack_require_1712__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__nested_webpack_require_1712__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{__nested_webpack_require_1712__.d(i,{$:()=>h,wA:()=>Component,z8:()=>D,El:()=>S,pv:()=>x,Rh:()=>Term,cQ:()=>e,Be:()=>t,d5:()=>factory});var e={};__nested_webpack_require_1712__.r(e),__nested_webpack_require_1712__.d(e,{bindMethods:()=>bindMethods,childrenDiffer:()=>childrenDiffer,fetchDeepProperty:()=>fetchDeepProperty,flattenArray:()=>flattenArray,generateUUID:()=>generateUUID,instanceOf:()=>instanceOf,isEmpty:()=>isEmpty,isIterableChild:()=>isIterableChild,isNotEmpty:()=>isNotEmpty,isValidChild:()=>isValidChild,iterate:()=>s,now:()=>now,propsDiffer:()=>propsDiffer,sizeOf:()=>sizeOf});var t=__nested_webpack_require_1712__(711);const r=Symbol.for("@jibsIterateStop"),n="undefined"!=typeof global?global:"undefined"!=typeof window?window:void 0;let o=1e6;function instanceOf(e){function testType(e,t){let r=t,i=typeof e;return r===n.String?r="string":r===n.Number?r="number":r===n.Boolean?r="boolean":r===n.Function?r="function":r===n.Array?r="array":r===n.Object?r="object":r===n.Promise?r="promise":r===n.BigInt?r="bigint":r===n.Map?r="map":r===n.WeakMap?r="weakmap":r===n.Set?r="set":r===n.Symbol?r="symbol":r===n.Buffer&&(r="buffer"),!("buffer"!==r||!n.Buffer||!n.Buffer.isBuffer(e))||("number"===r&&("number"===i||e instanceof Number||e.constructor&&"Number"===e.constructor.name)?!!isFinite(e):"object"!==r&&r===i||("object"===r?!!(e.constructor===Object.prototype.constructor||e.constructor&&"Object"===e.constructor.name)||"object"===i&&!e.constructor:!("array"!==r||!(Array.isArray(e)||e instanceof Array||e.constructor&&"Array"===e.constructor.name))||!("promise"!==r&&"deferred"!==r||!function isDeferredType(e){return!!(e instanceof Promise||e.constructor&&"Promise"===e.constructor.name)||"function"==typeof e.then&&"function"==typeof e.catch}(e))||!("string"!==r||!(e instanceof n.String||e.constructor&&"String"===e.constructor.name))||!("boolean"!==r||!(e instanceof n.Boolean||e.constructor&&"Boolean"===e.constructor.name))||!("map"!==r||!(e instanceof n.Map||e.constructor&&"Map"===e.constructor.name))||!("weakmap"!==r||!(e instanceof n.WeakMap||e.constructor&&"WeakMap"===e.constructor.name))||!("set"!==r||!(e instanceof n.Set||e.constructor&&"Set"===e.constructor.name))||"function"===r&&"function"===i||"function"==typeof r&&e instanceof r||!("string"!=typeof r||!e.constructor||e.constructor.name!==r)))}if(null==e)return!1;for(var t=1,r=arguments.length;t<r;t++)if(!0===testType(e,arguments[t]))return!0;return!1}function propsDiffer(e,t,r){if(e===t)return!1;if(typeof e!=typeof t)return!0;if(!e&&t)return!0;if(e&&!t)return!0;if(!e&&!t&&e!=e)return!0;let n=Object.keys(e).concat(Object.getOwnPropertySymbols(e)),i=Object.keys(t).concat(Object.getOwnPropertySymbols(t));if(n.length!==i.length)return!0;for(let o=0,s=n.length;o<s;o++){let s=n[o];if(r&&r.indexOf(s)>=0)continue;if(e[s]!==t[s])return!0;let a=i[o];if(!(r&&r.indexOf(a)||s===a||e[a]===t[a]))return!0}return!1}function sizeOf(e){return e?Object.is(1/0)?0:"number"==typeof e.length?e.length:Object.keys(e).length:0}function _iterate(e,t){if(!e||Object.is(1/0))return[];let n,i=[],o={collection:e,STOP:r};if(Array.isArray(e)){o.type="Array";for(let s=0,a=e.length;s<a&&(o.value=e[s],o.index=o.key=s,n=t.call(this,o),n!==r);s++)i.push(n)}else if("function"==typeof e.entries)if(e instanceof Set||"Set"===e.constructor.name){o.type="Set";let s=0;for(let a of e.values()){if(o.value=a,o.key=a,o.index=s++,n=t.call(this,o),n===r)break;i.push(n)}}else{o.type=e.constructor.name;let s=0;for(let[a,l]of e.entries()){if(o.value=l,o.key=a,o.index=s++,n=t.call(this,o),n===r)break;i.push(n)}}else{if(instanceOf(e,"boolean","number","bigint","function"))return;o.type=e.constructor?e.constructor.name:"Object";let s=Object.keys(e);for(let a=0,l=s.length;a<l;a++){let l=s[a],c=e[l];if(o.value=c,o.key=l,o.index=a,n=t.call(this,o),n===r)break;i.push(n)}}return i}Object.defineProperties(_iterate,{STOP:{writable:!1,enumerable:!1,configurable:!1,value:r}});const s=_iterate;function childrenDiffer(e,r){return e!==r&&(Array.isArray(e)?t(...e):t(e))!==(Array.isArray(r)?t(...r):t(r))}function fetchDeepProperty(e,t,r,n){if(null==e||Object.is(NaN,e)||Object.is(1/0,e))return n?[r,null]:r;if(null==t||Object.is(NaN,t)||Object.is(1/0,t))return n?[r,null]:r;let i;if(Array.isArray(t))i=t;else if("symbol"==typeof t)i=[t];else{let e=""+t,r=0,n=0;for(i=[];;){let t=e.indexOf(".",r);if(t<0){i.push(e.substring(n));break}"\\"!==e.charAt(t-1)?(i.push(e.substring(n,t)),n=r=t+1):r=t+1}}let o=i[i.length-1];if(0===i.length)return n?[r,o]:r;let s=e;for(let e=0,t=i.length;e<t;e++)if(s=s[i[e]],null==s)return n?[r,o]:r;return n?[s,o]:s}function bindMethods(e,t){let r=e,n=new Set;for(;r;){let e=Object.getOwnPropertyDescriptors(r),i=Object.keys(e).concat(Object.getOwnPropertySymbols(e));for(let e=0,t=i.length;e<t;e++){let t=i[e];if("constructor"===t)continue;if(n.has(t))continue;n.add(t);let o=r[t];Object.prototype.hasOwnProperty(t)&&Object.prototype[t]===o||"function"==typeof o&&(this[t]=o.bind(this))}if(r=Object.getPrototypeOf(r),r===Object.prototype)break;if(t&&t.indexOf(r)>=0)break}}function isEmpty(e){return!(null!=e&&(Object.is(e,1/0)||!Object.is(e,NaN)&&(instanceOf(e,"string")?/\S/.test(e):instanceOf(e,"number")&&isFinite(e)||instanceOf(e,"boolean","bigint","function")||0!==sizeOf(e))))}function isNotEmpty(e){return!isEmpty.call(this,e)}function flattenArray(e){if(!Array.isArray(e))return e;let t=[];for(let r=0,n=e.length;r<n;r++){let n=e[r];Array.isArray(n)?t=t.concat(flattenArray(n)):t.push(n)}return t}function isValidChild(e){return null!=e&&"boolean"!=typeof e&&!Object.is(e,1/0)&&!Object.is(e,NaN)}function isIterableChild(e){return null!=e&&!Object.is(e,NaN)&&!Object.is(e,1/0)&&(Array.isArray(e)||"object"==typeof e&&!instanceOf(e,"boolean","number","string"))}function now(){return"undefined"!=typeof performance&&"function"==typeof performance.now?performance.now():Date.now()}function generateUUID(){return o>9999999&&(o=1e6),`${Date.now()}.${o++}${Math.round(1e7*Math.random()).toString().padStart(20,"0")}`}class Jib{constructor(e,t,r){let n=e&&e.props?e.props:{};Object.defineProperties(this,{Type:{writable:!0,enumerable:!0,configurable:!0,value:e},props:{writable:!0,enumerable:!0,configurable:!0,value:{[d]:0,...n,...t||{}}},children:{writable:!0,enumerable:!0,configurable:!0,value:flattenArray(r)}})}}const a=Symbol.for("@jibs.barren"),l=Symbol.for("@jibs.proxy"),c=Symbol.for("@jibs.rawText"),u=Symbol.for("@jibs.jib"),d=Symbol.for("@jibs.childIndexProp");function factory(e){function $(r,n={}){if(isJibish(r))throw new TypeError("Received a jib but expected a component.");let i=null==r?l:r;function barren(...r){let o=r;function jib(){return instanceOf(i,"promise")||o.some((e=>instanceOf(e,"promise")))?Promise.all([i].concat(o)).then((t=>(i=t[0],o=t.slice(1),new e(i,n,o)))):new e(i,n,o)}return Object.defineProperties(jib,{[u]:{writable:!1,enumerable:!1,configurable:!1,value:!0},[t.idSym]:{writable:!1,enumerable:!1,configurable:!1,value:()=>i}}),jib}return Object.defineProperties(barren,{[a]:{writable:!1,enumerable:!1,configurable:!1,value:!0},[t.idSym]:{writable:!1,enumerable:!1,configurable:!1,value:()=>i}}),barren}return Object.defineProperties($,{remap:{writable:!1,enumerable:!1,configurable:!1,value:(e,t)=>{let r=e;if(null==r||Object.is(r,1/0)||Object.is(r,NaN))return r;isJibish(r)&&(r=constructJib(r));const finalizeMap=e=>{let t=e;return isJibish(t)?(t=constructJib(t),$(t.Type,t.props)(...t.children||[])):t};let n=t(r);return instanceOf(n,"promise")?n.then(finalizeMap):finalizeMap(n)}}}),$}const h=factory(Jib);function isJibish(e){return!("function"!=typeof e||!e[a]&&!e[u])||e instanceof Jib}function constructJib(e){if(e instanceof Jib)return e;if("function"==typeof e){if(e[a])return e()();if(e[u])return e()}throw new TypeError("constructJib: Provided value is not a Jib.")}async function resolveChildren(e){let t=e;instanceOf(t,"promise")&&(t=await t),(this.isIterableChild||isIterableChild).call(this,t)||!isJibish(t)&&!(this.isValidChild||isValidChild).call(this,t)||(t=[t]);let r=s(t,(async({value:e})=>{let t=instanceOf(e,"promise")?await e:e;return isJibish(t)?await constructJib(t):t}));return await Promise.all(r)}const f=Symbol.for("@jibs/events/listeners");class EventEmitter{constructor(){Object.defineProperties(this,{[f]:{writable:!1,enumerable:!1,configurable:!1,value:new Map}})}addListener(e,t){if("function"!=typeof t)throw new TypeError("Event listener must be a method");let r=this[f],n=r.get(e);return n||(n=[],r.set(e,n)),n.push(t),this}removeListener(e,t){if("function"!=typeof t)throw new TypeError("Event listener must be a method");let r=this[f].get(e);if(!r)return this;let n=r.indexOf(t);return n>=0&&r.splice(n,1),this}removeAllListeners(e){let t=this[f];return t.has(e)?(t.set(e,[]),this):this}emit(e,...t){let r=this[f].get(e);if(!r||0===r.length)return!1;for(let e=0,n=r.length;e<n;e++)r[e].apply(this,t);return!0}once(e,t){let func=(...r)=>(this.off(e,func),t(...r));return this.on(e,func)}on(e,t){return this.addListener(e,t)}off(e,t){return this.removeListener(e,t)}eventNames(){return Array.from(this[f].keys())}listenerCount(e){let t=this[f].get(e);return t?t.length:0}listeners(e){let t=this[f].get(e);return t?t.slice():[]}}const p="@jibs/component/event/update",b=Symbol.for("@jibs/component/queueUpdate"),m=Symbol.for("@jibs/component/flushUpdate"),y=Symbol.for("@jibs/component/__init"),g=Symbol.for("@jibs/component/skipStateUpdates"),w=Symbol.for("@jibs/component/pendingStateUpdate"),N=Symbol.for("@jibs/component/lastRenderTime"),O=Symbol.for("@jibs/component/previousState"),v=Symbol.for("@jibs/component/previousState"),T=new WeakMap;function isValidStateObject(e){if(null==e)return!1;if(Object.is(e,NaN))return!1;if(Object.is(e,1/0))return!1;if(e instanceof Boolean||e instanceof Number||e instanceof String)return!1;let t=typeof e;return!("string"===t||"number"===t||"boolean"===t||Array.isArray(e)||"undefined"!=typeof Buffer&&Buffer.isBuffer(e))}class Component extends EventEmitter{static UPDATE_EVENT=p;[b](){this[w]||(this[w]=Promise.resolve(),this[w].then(this[m].bind(this)))}[m](){this[w]&&(this.emit(p),this[w]=null)}[y](){this[g]=!1}constructor(e){super(),bindMethods.call(this,this.constructor.prototype);let t=e||{},r=Object.assign(Object.create(null),t.props||{}),n=(()=>{let e=Object.create(null);return new Proxy(e,{get:(e,t)=>e[t],set:(e,t,r)=>{let n=e[t];return n===r||(this[g]||this[b](),e[t]=r,this.onStateUpdated(t,r,n)),!0}})})();Object.defineProperties(this,{[g]:{writable:!0,enumerable:!1,configurable:!0,value:!0},[w]:{writable:!0,enumerable:!1,configurable:!0,value:Promise.resolve()},[N]:{writable:!0,enumerable:!1,configurable:!0,value:now()},[v]:{writable:!0,enumerable:!1,configurable:!0,value:{}},id:{writable:!1,enumerable:!1,configurable:!1,value:t.id},props:{writable:!0,enumerable:!1,configurable:!0,value:r},children:{writable:!0,enumerable:!1,configurable:!0,value:t.children||[]},context:{writable:!0,enumerable:!1,configurable:!0,value:t.context||Object.create(null)},state:{enumerable:!1,configurable:!0,get:()=>n,set:e=>{if(!isValidStateObject(e))throw new TypeError(`Invalid value for "this.state": "${e}". Provided "state" must be an iterable object.`);Object.assign(n,e)}}})}resolveChildren(e){return resolveChildren.call(this,e)}isJib(e){return isJibish(e)}constructJib(e){return constructJib(e)}pushRender(e){this.emit(p,e)}onPropUpdated(e,t,r){}onStateUpdated(e,t,r){}captureReference(e,t){let r=this[v][e];return r||(r=(r,n)=>{let i=r;"function"==typeof t&&(i=t.call(this,i,n)),Object.defineProperties(this,{[e]:{writable:!0,enumerable:!1,configurable:!0,value:i}})},"function"!=typeof t&&(this[v]=r),r)}forceUpdate(){this[b]()}getState(e,t){let r=this.state;if(0===arguments.length)return r;if(instanceOf(e,"object")){let t=Object.keys(e).concat(Object.getOwnPropertySymbols(e)),n={};for(let i=0,o=t.length;i<o;i++){let o=t[i],[s,a]=fetchDeepProperty(r,o,e[o],!0);null!=a&&(n[a]=s)}return n}return fetchDeepProperty(r,e,t)}setState(e){if(!isValidStateObject(e))throw new TypeError(`Invalid value for "this.setState": "${e}". Provided "state" must be an iterable object.`);Object.assign(this.state,e)}setStatePassive(e){if(!isValidStateObject(e))throw new TypeError(`Invalid value for "this.setStatePassive": "${e}". Provided "state" must be an iterable object.`);try{this[g]=!0,Object.assign(this.state,e)}finally{this[g]=!1}}shouldUpdate(){return!0}destroy(){delete this.state,delete this.props,delete this.context,delete this[v],this.clearAllDebounces()}renderWaiting(){}render(e){return e}updated(){}combineWith(e,...t){let r=new Set;for(let n=0,i=t.length;n<i;n++){let i=t[n];if(i)if(instanceOf(i,"string")){let t=i.split(e).filter(isNotEmpty);for(let e=0,n=t.length;e<n;e++){let n=t[e];r.add(n)}}else if(Array.isArray(i)){let e=i.filter((e=>!!e&&!!instanceOf(e,"string")&&isNotEmpty(e)));for(let t=0,n=e.length;t<n;t++){let n=e[t];r.add(n)}}else if(instanceOf(i,"object")){let e=Object.keys(i);for(let t=0,n=e.length;t<n;t++){let n=e[t];i[n]?r.add(n):r.delete(n)}}}return Array.from(r).join(e||"")}classes(...e){return this.combineWith(" ",...e)}extractChildren(e,t,r){let n=r||{},i={},o=e,s=Array.isArray(o);return i.remainingChildren=t.filter((e=>!(e=>{let t=e.Type;if(instanceOf(t,"string")&&(t=t.toLowerCase()),s)for(let r=0,s=o.length;r<s;r++){let s=o[r];if(instanceOf(s,"string")&&(s=s.toLowerCase()),t===s)return i[s]&&n.multiple?(Array.isArray(i[s])||(i[s]=[i[s]]),i[s].push(e)):i[s]=e,!0}else{let r=Object.keys(o);for(let s=0,a=r.length;s<a;s++){let a,l=r[s],c=o[l];if(a=instanceOf(c,RegExp)?c.test(t):instanceOf(c,"string")?c.toLowerCase()===t:c===t,a)return i[c]&&n.multiple?(Array.isArray(i[c])||(i[c]=[i[c]]),i[c].push(e)):i[c]=e,!0}}return!1})(e))),i}mapChildren(e,t){let r=Array.isArray(t)?t:[t];return r.map((t=>{if(!t)return t;let n=t.Type;if(!instanceOf(n,"string"))return t;n=n.toLowerCase();let i=Object.keys(e);for(let o=0,s=i.length;o<s;o++){let s=i[o];if(s.toLowerCase()!==n)continue;let a=e[s];if(a)return a.call(this,t,o,r)}return t}))}debounce(e,t,r){const clearPendingTimeout=()=>{i&&i.timeout&&(clearTimeout(i.timeout),i.timeout=null)};var n=r||""+e;this.debounceTimers||Object.defineProperty(this,"debounceTimers",{writable:!0,enumerable:!1,configurable:!0,value:{}});var i=this.debounceTimers[n];i||(i=this.debounceTimers[n]={}),i.func=e,clearPendingTimeout();var o=i.promise;if(!o||!o.isPending()){let e,t="pending";(o=i.promise=new Promise((t=>{e=t}))).resolve=()=>{if("pending"===t)if(t="fulfilled",clearPendingTimeout(),this.debounceTimers[n]=null,"function"==typeof i.func){var r=i.func.call(this);r instanceof Promise||r&&"function"==typeof r.then?r.then((t=>e(t))):e(r)}else e()},o.cancel=()=>{t="rejected",clearPendingTimeout(),this.debounceTimers[n]=null,o.resolve()},o.isPending=()=>"pending"===t}return i.timeout=setTimeout(o.resolve,null==t?250:t),o}clearDebounce(e){if(this.debounceTimers){var t=this.debounceTimers[e];null!=t&&(t.timeout&&clearTimeout(t.timeout),t.promise&&t.promise.cancel())}}clearAllDebounces(){let e=this.debounceTimers||{},t=Object.keys(e);for(let e=0,r=t.length;e<r;e++)this.clearDebounce(t[e])}getElementData(e){let t=T.get(e);return t||(t={},T.set(e,t)),t}memoize(e){let r,n;return function(...i){let o=t(...i);if(o!==r){let t=e.apply(this,i);r=o,n=t}return n}}toTerm(e){if(isJibish(e)){let t=constructJib(e);return t.Type===Term||t.Type&&t.Type[P]?e:h(Term,t.props)(...t.children)}return"string"==typeof e?h(Term)(e):e}}const P=Symbol.for("@jibs/isTerm");class Term extends Component{resolveTerm(e){let t=this.context._termResolver;if("function"==typeof t)return t.call(this,e);let r=e.children||[];return r[r.length-1]||""}render(e){let t=this.resolveTerm({children:e,props:this.props});return h("SPAN",this.props)(t)}}Term[P]=!0;const _=Symbol.for("@jibs/node/contextID");class RootNode{static CONTEXT_ID=_;constructor(e,t,r,n){let i=null;!1!==this.constructor.HAS_CONTEXT&&(e||this.createContext)&&(i=(e||this).createContext(r,this.onContextUpdate?this.onContextUpdate:void 0,this)),Object.defineProperties(this,{TYPE:{enumerable:!1,configurable:!1,get:()=>this.constructor.TYPE,set:()=>{}},id:{writable:!1,enumerable:!1,configurable:!1,value:generateUUID()},renderer:{writable:!0,enumerable:!1,configurable:!0,value:e},parentNode:{writable:!0,enumerable:!1,configurable:!0,value:t},childNodes:{writable:!0,enumerable:!1,configurable:!0,value:new Map},context:{enumerable:!1,configurable:!0,get:()=>i,set:()=>{}},destroying:{writable:!0,enumerable:!1,configurable:!0,value:!1},renderPromise:{writable:!0,enumerable:!1,configurable:!0,value:null},renderFrame:{writable:!0,enumerable:!1,configurable:!0,value:0},jib:{writable:!0,enumerable:!1,configurable:!0,value:n},nativeElement:{writable:!0,enumerable:!1,configurable:!0,value:null}})}resolveChildren(e){return resolveChildren.call(this,e)}isJib(e){return isJibish(e)}constructJib(e){return constructJib(e)}getCacheKey(){let{Type:e,props:r}=this.jib||{};return t(e,r.key)}updateJib(e){this.jib=e}clearChildren(){this.childNodes.clear()}removeChild(e){let t=e.getCacheKey();this.childNodes.delete(t)}addChild(e,t){let r=t||e.getCacheKey();this.childNodes.set(r,e)}getChild(e){return this.childNodes.get(e)}getChildren(){return this.childNodes}getThisNodeOrChildNodes(){return this}getChildrenNodes(){let e=[];for(let t of this.childNodes.values())e=e.concat(t.getThisNodeOrChildNodes());return e.filter(Boolean)}async destroy(e){if(!e&&this.destroying)return;this.destroying=!0,this.renderPromise&&await this.renderPromise,await this.destroyFromDOM(this.context,this);let t=[];for(let e of this.childNodes.values())t.push(e.destroy());this.childNodes.clear(),await Promise.all(t),this.nativeElement=null,this.parentNode=null,this.context=null,this.jib=null}isValidChild(e){return isValidChild(e)}isIterableChild(e){return isIterableChild(e)}propsDiffer(e,t,r){return propsDiffer(e,t,r)}childrenDiffer(e,t){return childrenDiffer(e,t)}async render(...e){if(this.destroying)return;this.renderFrame++;let t=this.renderFrame;return"function"==typeof this._render?this.renderPromise=this._render(...e).then((async e=>(t>=this.renderFrame&&await this.syncDOM(this.context,this),this.renderPromise=null,e))).catch((e=>{throw this.renderPromise=null,e})):await this.syncDOM(this.context,this),this.renderPromise}getParentID(){if(this.parentNode)return this.parentNode.id}async destroyFromDOM(e,t){if(this.renderer)return await this.renderer.destroyFromDOM(e,t)}async syncDOM(e,t){if(this.renderer)return await this.renderer.syncDOM(e,t)}}const j=1n;let E=j;const C=Symbol.for("@jibsForceReflow"),S={JIB_BARREN:a,JIB_PROXY:l,JIB_RAW_TEXT:c,JIB:u,JIB_CHILD_INDEX_PROP:d,Jib,isJibish,constructJib,resolveChildren},D={UPDATE_EVENT:p,QUEUE_UPDATE_METHOD:b,FLUSH_UPDATE_METHOD:m,INIT_METHOD:y,SKIP_STATE_UPDATES:g,PENDING_STATE_UPDATE:w,LAST_RENDER_TIME:N,PREVIOUS_STATE:O},x={CONTEXT_ID:RootNode.CONTEXT_ID,FORCE_REFLOW:C,RootNode,Renderer:class Renderer extends RootNode{static RootNode=RootNode;constructor(e){super(null,null,null),Object.defineProperties(this,{options:{writable:!1,enumerable:!1,configurable:!1,value:e||{}}}),this.renderer=this,"function"==typeof e.termResolver&&(this.context._termResolver=e.termResolver)}getOptions(){return this.options}resolveTerm(e){let{termResolver:t}=this.getOptions();if("function"==typeof t)return t.call(this,e);let r=e.children||[];return r[r.length-1]||""}createContext(e,t,r){let n=Object.create(null),i=e?e[_]:j;return new Proxy(n,{get:(t,r)=>{if(r===_){let t=e?e[_]:j;return t>i?t:i}return Object.prototype.hasOwnProperty.call(t,r)?t[r]:e?e[r]:void 0},set:(e,n,o)=>(n===_||e[n]===o||(i=++E,e[n]=o,"function"==typeof t&&t.call(r,r)),!0)})}}}})();var o=i.$,s=i.wA,a=i.z8,l=i.El,c=i.pv,u=i.Rh,d=i.cQ,h=i.Be,f=i.d5;const{isJibish:p,constructJib:b,JIB_PROXY:m,JIB_RAW_TEXT:y,JIB_CHILD_INDEX_PROP:g}=l,{RootNode:w}=c;class FragmentNode extends w{static TYPE=11;getThisNodeOrChildNodes(){return this.getChildrenNodes()}async _render(){let e=new Map,t=this.renderFrame,{children:r}=this.jib||{};if(d.instanceOf(r,"promise")&&(r=await r),this.destroying||t<this.renderFrame)return;this.isIterableChild(r)||!p(r)&&!this.isValidChild(r)||(r=[r]);const getIndexForType=t=>{let r=(e.get(t)||0)+1;return e.set(t,r),r};let n=!1,i=d.iterate(r,(({value:e,key:r,index:i,STOP:o})=>n||this.destroying||t<this.renderFrame?o:(async()=>{let o=d.instanceOf(e,"promise")?await e:e;if(d.isEmpty(o)||Object.is(o,NaN)||Object.is(o,1/0))return;if(this.destroying||t<this.renderFrame)return void(n=!0);let s,a,l=p(o);if(!l&&this.isIterableChild(o)?a={Type:m,children:o,props:{key:`@jib/internal_fragment_${getIndexForType(m)}`}}:!l&&this.isValidChild(o)?(o="function"==typeof o.valueOf?o.valueOf():o,a={Type:y,children:o,props:{key:`@jib/internal_text_${getIndexForType(y)}`}}):l&&(a=b(o),d.instanceOf(a,"promise")&&(a=await a)),this.destroying||t<this.renderFrame)return void(n=!0);let c,{Type:u,props:f}=a;c=i!==r?r:null==f.key||Object.is(f.key,NaN)||Object.is(f.key,1/0)?`@jib/internal_key_${getIndexForType(u)}`:f.key,f[g]=i,f.key=c,a.props=f;let w=h(u,f.key),N=this.getChild(w);return N?(s=!1,N.updateJib(a)):(s=!0,N=this.renderer.constructNodeFromJib(a,this,this.context)),await N.render(),{node:N,cacheKey:w,created:s}})())),o=await Promise.all(i);o=o.filter((e=>!!e));let s=[];if(this.destroying||t<this.renderFrame){for(let e=0,t=o.length;e<t;e++){let t=o[e],{node:r,created:n}=t;n&&r&&s.push(r.destroy())}return void(s.length>0&&await Promise.all(s))}let a=new Map;for(let e of o){let{cacheKey:t,node:r}=e;a.set(t,r)}let l=[];for(let[e,t]of this.getChildren()){a.has(e)||(l.push(t),this.removeChild(t))}this.clearChildren();for(let[e,t]of a)this.addChild(t,e);a.clear();for(let e=0,t=l.length;e<t;e++){let t=l[e];s.push(t.destroy())}s.length>0&&await Promise.all(s)}async destroyFromDOM(e,t){if(t!==this&&this.parentNode)return await this.parentNode.destroyFromDOM(e,t)}async syncDOM(e,t){if(!this.parentNode)return;let r=e,n=t;return n===this&&(r=this.parentNode.context,n=this.parentNode),await this.parentNode.syncDOM(r,n)}}const{RootNode:N}=c;class TextNode extends N{static TYPE=3;static HAS_CONTEXT=!1}const{JIB_PROXY:O}=l,{RootNode:v}=c;class NativeNode extends v{static TYPE=1;constructor(...e){super(...e),Object.defineProperties(this,{fragmentNode:{writable:!0,enumerable:!1,configurable:!0,value:null}})}async destroy(){if(!this.destroying)return this.destroying=!0,await this.destroyFragmentNode(),await super.destroy(!0)}async destroyFragmentNode(){this.fragmentNode&&(this.removeChild(this.fragmentNode),await this.fragmentNode.destroy(),this.fragmentNode=null)}async _render(){if(this.destroying)return;let{Type:e,props:t,children:r}=this.jib||{};if(e)if(Object.prototype.hasOwnProperty.call(t,"innerHTML"))await this.destroyFragmentNode();else{let e={Type:O,props:{},children:r},t=this.fragmentNode;t?this.fragmentNode.updateJib(e):(t=this.fragmentNode=this.renderer.constructNodeFromJib(e,this,this.context),this.addChild(t)),await t.render()}}}class PortalNode extends NativeNode{static TYPE=15}const{JIB_PROXY:T,JIB_CHILD_INDEX_PROP:P}=l,{CONTEXT_ID:_,RootNode:j}=c,{INIT_METHOD:E,UPDATE_EVENT:C,PENDING_STATE_UPDATE:S,LAST_RENDER_TIME:D,SKIP_STATE_UPDATES:x}=a;class ComponentNode extends j{static TYPE=20;constructor(...e){super(...e),Object.defineProperties(this,{fragmentNode:{writable:!0,enumerable:!1,configurable:!0,value:null},component:{writable:!0,enumerable:!1,configurable:!0,value:null},pendingContextUpdate:{writable:!0,enumerable:!1,configurable:!0,value:null},previousState:{writable:!0,enumerable:!1,configurable:!0,value:{}},lastContextID:{writable:!0,enumerable:!1,configurable:!0,value:this.context[_]||1n},cachedRenderResult:{writable:!0,enumerable:!1,configurable:!0,value:null}})}getThisNodeOrChildNodes(){if(this.fragmentNode)return this.fragmentNode.getChildrenNodes()}mergeComponentProps(e,t){return Object.assign(Object.create(null),e||{},t)}firePropUpdates(e,t){let r=t||{},n=new Set(Object.keys(r).concat(Object.getOwnPropertySymbols(r))),i=e||{},o=Object.keys(i).concat(Object.getOwnPropertySymbols(i));for(let e=0,t=o.length;e<t;e++)n.add(o[e]);for(let e of n){let t=i[e],n=r[e];t!==n&&this.component.onPropUpdated(e,n,t)}}shouldRender(e,t){let r=this.component;if(!r)return!0;if(this.lastContextID<this.context[_])return this.lastContextID=this.context[_],this.previousState=Object.assign({},r.state),this.firePropUpdates(r.props,e),r.props=this.mergeComponentProps(r.props,e),!0;if(this.childrenDiffer(r.children,t))return this.component.children=t.slice(),this.previousState=Object.assign({},r.state),this.firePropUpdates(r.props,e),r.props=this.mergeComponentProps(r.props,e),!0;let n=this.previousState||{};return this.propsDiffer(r.props,e,["ref","key",P],!0)&&r.shouldUpdate(e,n)?(this.previousState=Object.assign({},r.state),this.firePropUpdates(r.props,e),r.props=this.mergeComponentProps(r.props,e),!0):!(!this.propsDiffer(n,r.state)||!r.shouldUpdate(e,n))&&(this.previousState=Object.assign({},r.state),!0)}async destroy(){if(!this.destroying)return this.destroying=!0,this.component&&(this.jib&&this.jib.props&&"function"==typeof this.jib.props.ref&&this.jib.props.ref.call(this.component,null,this.component),await this.component.destroy(),this.component=null),this.fragmentNode&&(this.removeChild(this.fragmentNode),await this.fragmentNode.destroy(),this.fragmentNode=null),this.cachedRenderResult=null,this.previousState=null,await super.destroy(!0)}onContextUpdate(){if(this.component&&!this.component[S])return this.pendingContextUpdate||(this.pendingContextUpdate=Promise.resolve().then((()=>{this.destroying||!this.component||this.component[S]||(this.pendingContextUpdate=null,this.render())}))),this.pendingContextUpdate}async _render(e){let t=this.renderFrame,{Type:r,props:n,children:i}=this.jib||{};if(!r)return;i=this.jib.children=await this.resolveChildren(i);const finalizeRender=async(e,t)=>{if(this.destroying||t<this.renderFrame||!this.component)return;this.cachedRenderResult=e,this.component[D]=d.now();let r=this.fragmentNode,n={Type:T,props:{},children:e};r?r.updateJib(n):(r=this.fragmentNode=this.renderer.constructNodeFromJib(n,this,this.context),this.addChild(r)),await r.render()},handleRenderError=e=>{if(this.destroying||t<this.renderFrame)return;let r;console.error(e),this.component&&(this.component[D]=d.now());try{r=this.component&&"function"==typeof this.component.renderErrorState?this.component.renderErrorState(e):[`${e.message}\n${e.stack}`]}catch(t){r=[`${e.message}\n${e.stack}`]}return finalizeRender(r,t)};if(!(this.destroying||t<this.renderFrame))try{if(!0!==e&&this.component&&!this.shouldRender(n,i))return;let o=this.component;o||(o=this.component=new r({...this.jib||{},props:this.mergeComponentProps(null,n),context:this.context,id:this.id}),"function"==typeof o[E]&&o[E](),o.on(C,(e=>{e?(this.renderFrame++,finalizeRender(e,this.renderFrame)):this.render(!0)})),n&&"function"==typeof n.ref&&n.ref.call(o,o,null)),this.component[S]&&(this.component[S]=null);let s=this.component.render(i);if(d.instanceOf(s,"promise")){let e=this.component.renderWaiting(this.cachedRenderResult),r=!1,n=setTimeout((async()=>{n=null,d.instanceOf(e,"promise")&&(e=await e),r||await finalizeRender(e,t)}),5);try{s=await s,r=!0,n&&(clearTimeout(n),n=null),await finalizeRender(s,t)}catch(e){await handleRenderError(e)}}else await finalizeRender(s,t)}catch(e){await handleRenderError(e)}}async destroyFromDOM(e,t){if(!this.parentNode)return;let r=e,n=t;return n===this&&(r=this.parentNode.context,n=this.parentNode),await this.parentNode.destroyFromDOM(r,n)}async syncDOM(e,t){if(!this.parentNode)return;let r=e,n=t;return n===this&&(r=this.parentNode.context,n=this.parentNode),await this.parentNode.syncDOM(r,n)}}const{Renderer:A}=c,{JIB_PROXY:I,JIB_RAW_TEXT:R}=l;class DOMRenderer extends A{static TYPE=9;static FragmentNode=FragmentNode;static TextNode=TextNode;static NativeNode=NativeNode;static PortalNode=PortalNode;static ComponentNode=ComponentNode;constructor(e,t){super(t),Object.defineProperties(this,{rootNode:{writable:!0,enumerable:!1,configurable:!0,value:null},jib:{writable:!0,enumerable:!1,configurable:!0,value:{Type:e,props:{},children:[]}}})}isPortalNode(e){return/[^a-zA-Z0-9:]/.test(e)}constructNodeFromJib(e,t,r){let{Type:n}=e;return"function"==typeof n?new this.constructor.ComponentNode(this,t,r,e):"string"==typeof n?this.isPortalNode(n)?new this.constructor.PortalNode(this,t,r,e):new this.constructor.NativeNode(this,t,r,e):null==n||n===I?new this.constructor.FragmentNode(this,t,r,e):n===R?new this.constructor.TextNode(this,t,r,e):void 0}async destroy(){if(!this.destroying)return this.destroying=!0,this.rootNode&&(await this.rootNode.destroy(),this.rootNode=null),await super.destroy(!0)}async render(e){if(!e)throw new TypeError(`${this.constructor.name}::render: A jib must be provided.`);return this.updateJib({...this.jib,children:e}),super.render()}async _render(){if(this.destroying)return;let e=this.renderFrame,t=this.rootNode,r={Type:I,props:{},children:this.jib};t?t.updateJib(r):t=this.rootNode=this.constructNodeFromJib(this.jib,this,this.context),await t.render(),e>=this.renderFrame&&this.syncDOM(this.context,this.rootNode)}async destroyFromDOM(e,t){return!!t&&(t===this?!!this.rootNode&&await this.destroyNode(e,this.rootNode):await this.destroyNode(e,t))}async syncDOM(e,t){return!!t&&(t===this?!!this.rootNode&&await this.syncNode(e,this.rootNode):await this.syncNode(e,t))}async addNode(e,t){if(!t)return!1;await this.attachChildren(e,t,!1);let r=this.parentNode;return r&&await this.attachChildren(e,r,true),!0}async constructNativeElementFromNode(e,t){if(!t)return!1;if(t.TYPE===NativeNode.TYPE)return await this.createNativeElement(e,t);if(t.TYPE===TextNode.TYPE)return await this.createTextElement(e,t);if(t.TYPE===PortalNode.TYPE||t.TYPE===DOMRenderer.TYPE)return await this.createPortalElement(e,t);throw new TypeError(`${this.constructor.name}::constructNativeElementFromNode: Unsupported virtual element type detected: ${t.TYPE}`)}async updateNode(e,t){if(!t)return!1;let r;if(t.TYPE===NativeNode.TYPE)r=await this.updateNativeElement(e,t);else if(t.TYPE===TextNode.TYPE)r=await this.updateTextElement(e,t);else{if(t.TYPE!==PortalNode.TYPE&&t.TYPE!==DOMRenderer.TYPE)throw new TypeError(`${this.constructor.name}::syncNode: Unsupported virtual element type detected: ${t.TYPE}`);r=await this.updatePortalElement(e,t)}return await this.attachChildren(e,t,!0),r}async syncNode(e,t){if(!t)return!1;let r=t&&t.nativeElement;return r?t?await this.updateNode(e,t):void 0:(r=await this.constructNativeElementFromNode(e,t),t.nativeElement=r,t.jib&&t.jib.props&&"function"==typeof t.jib.props.ref&&t.jib.props.ref.call(t,r,null),await this.addNode(e,t))}async destroyNode(e,t){if(!t)return!1;let r=!1;return t&&t.nativeElement&&(t.TYPE===NativeNode.TYPE?r=await this.destroyNativeElement(e,t):t.TYPE===TextNode.TYPE?r=await this.destroyTextElement(e,t):t.TYPE===PortalNode.TYPE||t.TYPE===DOMRenderer.TYPE?r=await this.destroyPortalElement(e,t):new TypeError(`${this.constructor.name}::syncNode: Unsupported virtual element type detected: ${t.TYPE}`)),t&&await this.detachChildren(e,t),r}findNativeElement(e,t){}createNativeElement(e,t){return{type:"element",value:t.value}}updateNativeElement(e,t){}createTextElement(e,t){return{type:"text",value:t.value}}updateTextElement(e,t){return!1}createPortalElement(e,t){return{type:"portal",value:t.value}}updatePortalElement(e,t){return!1}destroyNativeElement(e,t){}destroyTextElement(e,t){}destroyPortalElement(e,t){}forceNativeElementReflow(e,t,r){}async attachChildren(e,t,r){let n=t&&t.nativeElement;if(!n)return!1;let i=Array.from(n.childNodes),o=0,s=!0;for(let a of t.getChildrenNodes()){let t=a.nativeElement;if(t){if(!0!==r&&await this.updateNode(e,a),s){if(i[o++]===t)continue;s=!1}await n.appendChild(t),this.forceNativeElementReflow(e,a,t)}}return!0}async detachChildren(e,t){if(!(t&&t.nativeElement))return!1;let r=[];for(let n of t.getChildrenNodes())r.push(this.destroyNode(e,n));return await Promise.all(r),!0}}var J=t.$,k=t.wA,F=t.z8,M=t.q$,U=t.El,Y=t.pv,B=t.Rh,L=t.cQ,V=t.Be,X=t.d5;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./lib/resource-loader.js":
/*!********************************!*\
  !*** ./lib/resource-loader.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addResourceHandler": () => (/* binding */ addResourceHandler),
/* harmony export */   "addResourceResolver": () => (/* binding */ addResourceResolver),
/* harmony export */   "cssHandler": () => (/* binding */ cssHandler),
/* harmony export */   "javascriptHandler": () => (/* binding */ javascriptHandler),
/* harmony export */   "load": () => (/* binding */ load),
/* harmony export */   "removeResourceHandler": () => (/* binding */ removeResourceHandler),
/* harmony export */   "removeResourceResolver": () => (/* binding */ removeResourceResolver),
/* harmony export */   "resolveResourcePath": () => (/* binding */ resolveResourcePath)
/* harmony export */ });
const cacheMap          = new Map();
const resourceResolvers = new Set();
const resourceHandlers  = new Set();

function addResourceResolver(callback) {
  resourceResolvers.add(callback);
}

function removeResourceResolver(callback) {
  resourceResolvers.delete(callback);
}

function addResourceHandler(test, callback) {
  let resourceObj = { test, callback };
  resourceHandlers.add(resourceObj);

  return resourceObj;
}

function removeResourceHandler(resourceObj) {
  resourceHandlers.delete(resourceObj);
}

function resolveResourcePath(resourcePath) {
  let currentPath = resourcePath;

  for (let resolver of resourceResolvers)
    currentPath = resolver(currentPath);

  return currentPath;
}

function javascriptHandler(resourcePath) {
  // eslint-disable-next-line no-eval
  return eval(`(import('${resourcePath.replace(/'/g, '\\\'')}')).then((resource) => (resource.default || resource))`);
}

function cssHandler(resourcePath, { media = 'screen' }) {
  return new Promise((resolve, reject) => {
    let linkTag = document.createElement('link');

    linkTag.onload = () => resolve(linkTag);
    linkTag.onerror = (error) => reject(error);

    linkTag.setAttribute('rel', 'stylesheet');
    linkTag.setAttribute('type', 'text/css');
    linkTag.setAttribute('media', media);
    linkTag.setAttribute('href', resourcePath);
    document.head.appendChild(linkTag);
  });
}

function handleResource(resourcePath, _options) {
  let options = _options || {};

  for (let handler of resourceHandlers) {
    let { test, callback } = handler;
    if (!test(resourcePath, options))
      continue;

    let result = callback(resourcePath, options);
    if (result)
      return result;
  }

  throw new Error(`jibs-html-renderer:load: Unknown resource "${resourcePath}". I don't know how to handle this resource type. Please add a resource handler to manage this resource type.`);
}

function load(_resourcePath, _options) {
  let options   = _options || {};
  let cacheName = options.cache;
  if (cacheName && cacheMap.has(cacheName))
    return cacheMap.get(cacheName);

  let resourcePath  = resolveResourcePath(_resourcePath);
  let cache         = cacheMap.get(resourcePath);

  if (cache)
    return cache;

  let promise = handleResource(resourcePath, options);

  // Set promise as cache so
  // all promises from multiple
  // load requests are consistent
  cacheMap.set(resourcePath, promise);
  if (cacheName)
    cacheMap.set(cacheName, promise);

  return promise;
}

Object.defineProperties(load, {
  addResolver: {
    writable:     true,
    enumerable:   false,
    configurable: true,
    value:        addResourceResolver,
  },
  removeResolver: {
    writable:     true,
    enumerable:   false,
    configurable: true,
    value:        removeResourceResolver,
  },
  resolve: {
    writable:     true,
    enumerable:   false,
    configurable: true,
    value:        resolveResourcePath,
  },
  javascriptHandler: {
    writable:     true,
    enumerable:   false,
    configurable: true,
    value:        javascriptHandler,
  },
  cssHandler: {
    writable:     true,
    enumerable:   false,
    configurable: true,
    value:        cssHandler,
  },
  _setResourceCache: {
    writable:     true,
    enumerable:   false,
    configurable: true,
    value:        (_resourcePath, resource) => {
      let resourcePath = resolveResourcePath(_resourcePath);
      cacheMap.set(resourcePath, resource);

      return resource;
    },
  },
});

addResourceHandler((resourcePath, options) => {
  if (options.type === 'javascript')
    return true;

  return (/\.[mc]?js$/i).test(resourcePath);
}, javascriptHandler);

addResourceHandler((resourcePath, options) => {
  if (options.type === 'css')
    return true;

  return (/\.css$/i).test(resourcePath);
}, cssHandler);

// 'https://cdn.jsdelivr.net/npm/jibs-html-renderer@1.1.0/dist/index.js'
addResourceResolver((resourcePath) => {
  if ((/^npm:\/\//i).test(resourcePath)) {
    let resourceID = resourcePath.replace(/^npm:\/\//i, '');
    return `https://cdn.jsdelivr.net/npm/${resourceID}/dist/index.js`;
  }

  return resourcePath;
});




/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* reexport safe */ jibs_dom_renderer__WEBPACK_IMPORTED_MODULE_0__.$),
/* harmony export */   "A": () => (/* binding */ A),
/* harmony export */   "ABBR": () => (/* binding */ ABBR),
/* harmony export */   "ADDRESS": () => (/* binding */ ADDRESS),
/* harmony export */   "AREA": () => (/* binding */ AREA),
/* harmony export */   "ARTICLE": () => (/* binding */ ARTICLE),
/* harmony export */   "ASIDE": () => (/* binding */ ASIDE),
/* harmony export */   "AUDIO": () => (/* binding */ AUDIO),
/* harmony export */   "B": () => (/* binding */ B),
/* harmony export */   "BASE": () => (/* binding */ BASE),
/* harmony export */   "BDI": () => (/* binding */ BDI),
/* harmony export */   "BDO": () => (/* binding */ BDO),
/* harmony export */   "BLOCKQUOTE": () => (/* binding */ BLOCKQUOTE),
/* harmony export */   "BR": () => (/* binding */ BR),
/* harmony export */   "BUTTON": () => (/* binding */ BUTTON),
/* harmony export */   "CANVAS": () => (/* binding */ CANVAS),
/* harmony export */   "CAPTION": () => (/* binding */ CAPTION),
/* harmony export */   "CITE": () => (/* binding */ CITE),
/* harmony export */   "CODE": () => (/* binding */ CODE),
/* harmony export */   "COL": () => (/* binding */ COL),
/* harmony export */   "COLGROUP": () => (/* binding */ COLGROUP),
/* harmony export */   "Component": () => (/* reexport safe */ jibs_dom_renderer__WEBPACK_IMPORTED_MODULE_0__.Component),
/* harmony export */   "Components": () => (/* reexport safe */ jibs_dom_renderer__WEBPACK_IMPORTED_MODULE_0__.Components),
/* harmony export */   "DATA": () => (/* binding */ DATA),
/* harmony export */   "DATALIST": () => (/* binding */ DATALIST),
/* harmony export */   "DD": () => (/* binding */ DD),
/* harmony export */   "DEL": () => (/* binding */ DEL),
/* harmony export */   "DETAILS": () => (/* binding */ DETAILS),
/* harmony export */   "DFN": () => (/* binding */ DFN),
/* harmony export */   "DIALOG": () => (/* binding */ DIALOG),
/* harmony export */   "DIV": () => (/* binding */ DIV),
/* harmony export */   "DL": () => (/* binding */ DL),
/* harmony export */   "DOMRenderer": () => (/* reexport safe */ jibs_dom_renderer__WEBPACK_IMPORTED_MODULE_0__.DOMRenderer),
/* harmony export */   "DT": () => (/* binding */ DT),
/* harmony export */   "EM": () => (/* binding */ EM),
/* harmony export */   "EMBED": () => (/* binding */ EMBED),
/* harmony export */   "FIELDSET": () => (/* binding */ FIELDSET),
/* harmony export */   "FIGCAPTION": () => (/* binding */ FIGCAPTION),
/* harmony export */   "FIGURE": () => (/* binding */ FIGURE),
/* harmony export */   "FOOTER": () => (/* binding */ FOOTER),
/* harmony export */   "FORM": () => (/* binding */ FORM),
/* harmony export */   "H1": () => (/* binding */ H1),
/* harmony export */   "H2": () => (/* binding */ H2),
/* harmony export */   "H3": () => (/* binding */ H3),
/* harmony export */   "H4": () => (/* binding */ H4),
/* harmony export */   "H5": () => (/* binding */ H5),
/* harmony export */   "H6": () => (/* binding */ H6),
/* harmony export */   "HEADER": () => (/* binding */ HEADER),
/* harmony export */   "HGROUP": () => (/* binding */ HGROUP),
/* harmony export */   "HR": () => (/* binding */ HR),
/* harmony export */   "HTMLRenderer": () => (/* binding */ HTMLRenderer),
/* harmony export */   "I": () => (/* binding */ I),
/* harmony export */   "IFRAME": () => (/* binding */ IFRAME),
/* harmony export */   "IMG": () => (/* binding */ IMG),
/* harmony export */   "INPUT": () => (/* binding */ INPUT),
/* harmony export */   "INS": () => (/* binding */ INS),
/* harmony export */   "Jibs": () => (/* reexport safe */ jibs_dom_renderer__WEBPACK_IMPORTED_MODULE_0__.Jibs),
/* harmony export */   "KBD": () => (/* binding */ KBD),
/* harmony export */   "LABEL": () => (/* binding */ LABEL),
/* harmony export */   "LEGEND": () => (/* binding */ LEGEND),
/* harmony export */   "LI": () => (/* binding */ LI),
/* harmony export */   "LINK": () => (/* binding */ LINK),
/* harmony export */   "MAIN": () => (/* binding */ MAIN),
/* harmony export */   "MAP": () => (/* binding */ MAP),
/* harmony export */   "MARK": () => (/* binding */ MARK),
/* harmony export */   "MENU": () => (/* binding */ MENU),
/* harmony export */   "META": () => (/* binding */ META),
/* harmony export */   "METER": () => (/* binding */ METER),
/* harmony export */   "NAV": () => (/* binding */ NAV),
/* harmony export */   "NOSCRIPT": () => (/* binding */ NOSCRIPT),
/* harmony export */   "OBJECT": () => (/* binding */ OBJECT),
/* harmony export */   "OL": () => (/* binding */ OL),
/* harmony export */   "OPTGROUP": () => (/* binding */ OPTGROUP),
/* harmony export */   "OPTION": () => (/* binding */ OPTION),
/* harmony export */   "OUTPUT": () => (/* binding */ OUTPUT),
/* harmony export */   "P": () => (/* binding */ P),
/* harmony export */   "PICTURE": () => (/* binding */ PICTURE),
/* harmony export */   "PRE": () => (/* binding */ PRE),
/* harmony export */   "PROGRESS": () => (/* binding */ PROGRESS),
/* harmony export */   "Q": () => (/* binding */ Q),
/* harmony export */   "RP": () => (/* binding */ RP),
/* harmony export */   "RT": () => (/* binding */ RT),
/* harmony export */   "RUBY": () => (/* binding */ RUBY),
/* harmony export */   "Renderers": () => (/* reexport safe */ jibs_dom_renderer__WEBPACK_IMPORTED_MODULE_0__.Renderers),
/* harmony export */   "S": () => (/* binding */ S),
/* harmony export */   "SAMP": () => (/* binding */ SAMP),
/* harmony export */   "SCRIPT": () => (/* binding */ SCRIPT),
/* harmony export */   "SECTION": () => (/* binding */ SECTION),
/* harmony export */   "SELECT": () => (/* binding */ SELECT),
/* harmony export */   "SLOT": () => (/* binding */ SLOT),
/* harmony export */   "SMALL": () => (/* binding */ SMALL),
/* harmony export */   "SOURCE": () => (/* binding */ SOURCE),
/* harmony export */   "SPAN": () => (/* binding */ SPAN),
/* harmony export */   "STRONG": () => (/* binding */ STRONG),
/* harmony export */   "STYLE": () => (/* binding */ STYLE),
/* harmony export */   "SUB": () => (/* binding */ SUB),
/* harmony export */   "SUMMARY": () => (/* binding */ SUMMARY),
/* harmony export */   "SUP": () => (/* binding */ SUP),
/* harmony export */   "TABLE": () => (/* binding */ TABLE),
/* harmony export */   "TBODY": () => (/* binding */ TBODY),
/* harmony export */   "TD": () => (/* binding */ TD),
/* harmony export */   "TEMPLATE": () => (/* binding */ TEMPLATE),
/* harmony export */   "TERM": () => (/* binding */ TERM),
/* harmony export */   "TEXTAREA": () => (/* binding */ TEXTAREA),
/* harmony export */   "TFOOT": () => (/* binding */ TFOOT),
/* harmony export */   "TH": () => (/* binding */ TH),
/* harmony export */   "THEAD": () => (/* binding */ THEAD),
/* harmony export */   "TIME": () => (/* binding */ TIME),
/* harmony export */   "TITLE": () => (/* binding */ TITLE),
/* harmony export */   "TR": () => (/* binding */ TR),
/* harmony export */   "TRACK": () => (/* binding */ TRACK),
/* harmony export */   "Term": () => (/* reexport safe */ jibs_dom_renderer__WEBPACK_IMPORTED_MODULE_0__.Term),
/* harmony export */   "U": () => (/* binding */ U),
/* harmony export */   "UL": () => (/* binding */ UL),
/* harmony export */   "Utils": () => (/* reexport safe */ jibs_dom_renderer__WEBPACK_IMPORTED_MODULE_0__.Utils),
/* harmony export */   "VAR": () => (/* binding */ VAR),
/* harmony export */   "VIDEO": () => (/* binding */ VIDEO),
/* harmony export */   "WBR": () => (/* binding */ WBR),
/* harmony export */   "addResourceHandler": () => (/* reexport safe */ _resource_loader_js__WEBPACK_IMPORTED_MODULE_1__.addResourceHandler),
/* harmony export */   "addResourceResolver": () => (/* reexport safe */ _resource_loader_js__WEBPACK_IMPORTED_MODULE_1__.addResourceResolver),
/* harmony export */   "cssHandler": () => (/* reexport safe */ _resource_loader_js__WEBPACK_IMPORTED_MODULE_1__.cssHandler),
/* harmony export */   "deadbeef": () => (/* reexport safe */ jibs_dom_renderer__WEBPACK_IMPORTED_MODULE_0__.deadbeef),
/* harmony export */   "factory": () => (/* reexport safe */ jibs_dom_renderer__WEBPACK_IMPORTED_MODULE_0__.factory),
/* harmony export */   "javascriptHandler": () => (/* reexport safe */ _resource_loader_js__WEBPACK_IMPORTED_MODULE_1__.javascriptHandler),
/* harmony export */   "load": () => (/* reexport safe */ _resource_loader_js__WEBPACK_IMPORTED_MODULE_1__.load),
/* harmony export */   "removeResourceHandler": () => (/* reexport safe */ _resource_loader_js__WEBPACK_IMPORTED_MODULE_1__.removeResourceHandler),
/* harmony export */   "removeResourceResolver": () => (/* reexport safe */ _resource_loader_js__WEBPACK_IMPORTED_MODULE_1__.removeResourceResolver),
/* harmony export */   "resolveResourcePath": () => (/* reexport safe */ _resource_loader_js__WEBPACK_IMPORTED_MODULE_1__.resolveResourcePath)
/* harmony export */ });
/* harmony import */ var jibs_dom_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jibs-dom-renderer */ "../jibs-dom-renderer/dist/index.js");
/* harmony import */ var _resource_loader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource-loader.js */ "./lib/resource-loader.js");



const {
  FORCE_REFLOW,
} = jibs_dom_renderer__WEBPACK_IMPORTED_MODULE_0__.Renderers;

const TERM_COMPONENT_TYPE_CHECK = Symbol.for('@jibs/isTerm');

class HTMLRenderer extends jibs_dom_renderer__WEBPACK_IMPORTED_MODULE_0__.DOMRenderer {
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
      if (!value || jibs_dom_renderer__WEBPACK_IMPORTED_MODULE_0__.Utils.instanceOf(value, 'number', 'boolean', 'bigint', 'function'))
        continue;

      if (jibs_dom_renderer__WEBPACK_IMPORTED_MODULE_0__.Utils.instanceOf(value, 'string'))
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



const A = 'A';
const ABBR = 'ABBR';
const ADDRESS = 'ADDRESS';
const AREA = 'AREA';
const ARTICLE = 'ARTICLE';
const ASIDE = 'ASIDE';
const AUDIO = 'AUDIO';
const B = 'B';
const BASE = 'BASE';
const BDI = 'BDI';
const BDO = 'BDO';
const BLOCKQUOTE = 'BLOCKQUOTE';
const BR = 'BR';
const BUTTON = 'BUTTON';
const CANVAS = 'CANVAS';
const CAPTION = 'CAPTION';
const CITE = 'CITE';
const CODE = 'CODE';
const COL = 'COL';
const COLGROUP = 'COLGROUP';
const DATA = 'DATA';
const DATALIST = 'DATALIST';
const DD = 'DD';
const DEL = 'DEL';
const DETAILS = 'DETAILS';
const DFN = 'DFN';
const DIALOG = 'DIALOG';
const DIV = 'DIV';
const DL = 'DL';
const DT = 'DT';
const EM = 'EM';
const EMBED = 'EMBED';
const FIELDSET = 'FIELDSET';
const FIGCAPTION = 'FIGCAPTION';
const FIGURE = 'FIGURE';
const FOOTER = 'FOOTER';
const FORM = 'FORM';
const H1 = 'H1';
const H2 = 'H2';
const H3 = 'H3';
const H4 = 'H4';
const H5 = 'H5';
const H6 = 'H6';
const HEADER = 'HEADER';
const HGROUP = 'HGROUP';
const HR = 'HR';
const I = 'I';
const IFRAME = 'IFRAME';
const IMG = 'IMG';
const INPUT = 'INPUT';
const INS = 'INS';
const KBD = 'KBD';
const LABEL = 'LABEL';
const LEGEND = 'LEGEND';
const LI = 'LI';
const LINK = 'LINK';
const MAIN = 'MAIN';
const MAP = 'MAP';
const MARK = 'MARK';
const MENU = 'MENU';
const META = 'META';
const METER = 'METER';
const NAV = 'NAV';
const NOSCRIPT = 'NOSCRIPT';
const OBJECT = 'OBJECT';
const OL = 'OL';
const OPTGROUP = 'OPTGROUP';
const OPTION = 'OPTION';
const OUTPUT = 'OUTPUT';
const P = 'P';
const PICTURE = 'PICTURE';
const PRE = 'PRE';
const PROGRESS = 'PROGRESS';
const Q = 'Q';
const RP = 'RP';
const RT = 'RT';
const RUBY = 'RUBY';
const S = 'S';
const SAMP = 'SAMP';
const SCRIPT = 'SCRIPT';
const SECTION = 'SECTION';
const SELECT = 'SELECT';
const SLOT = 'SLOT';
const SMALL = 'SMALL';
const SOURCE = 'SOURCE';
const SPAN = 'SPAN';
const STRONG = 'STRONG';
const STYLE = 'STYLE';
const SUB = 'SUB';
const SUMMARY = 'SUMMARY';
const SUP = 'SUP';
const TABLE = 'TABLE';
const TBODY = 'TBODY';
const TD = 'TD';
const TEMPLATE = 'TEMPLATE';
const TEXTAREA = 'TEXTAREA';
const TERM = jibs_dom_renderer__WEBPACK_IMPORTED_MODULE_0__.Term;
const TFOOT = 'TFOOT';
const TH = 'TH';
const THEAD = 'THEAD';
const TIME = 'TIME';
const TITLE = 'TITLE';
const TR = 'TR';
const TRACK = 'TRACK';
const U = 'U';
const UL = 'UL';
const VAR = 'VAR';
const VIDEO = 'VIDEO';
const WBR = 'WBR';

})();

var __webpack_exports__$ = __webpack_exports__.$;
var __webpack_exports__A = __webpack_exports__.A;
var __webpack_exports__ABBR = __webpack_exports__.ABBR;
var __webpack_exports__ADDRESS = __webpack_exports__.ADDRESS;
var __webpack_exports__AREA = __webpack_exports__.AREA;
var __webpack_exports__ARTICLE = __webpack_exports__.ARTICLE;
var __webpack_exports__ASIDE = __webpack_exports__.ASIDE;
var __webpack_exports__AUDIO = __webpack_exports__.AUDIO;
var __webpack_exports__B = __webpack_exports__.B;
var __webpack_exports__BASE = __webpack_exports__.BASE;
var __webpack_exports__BDI = __webpack_exports__.BDI;
var __webpack_exports__BDO = __webpack_exports__.BDO;
var __webpack_exports__BLOCKQUOTE = __webpack_exports__.BLOCKQUOTE;
var __webpack_exports__BR = __webpack_exports__.BR;
var __webpack_exports__BUTTON = __webpack_exports__.BUTTON;
var __webpack_exports__CANVAS = __webpack_exports__.CANVAS;
var __webpack_exports__CAPTION = __webpack_exports__.CAPTION;
var __webpack_exports__CITE = __webpack_exports__.CITE;
var __webpack_exports__CODE = __webpack_exports__.CODE;
var __webpack_exports__COL = __webpack_exports__.COL;
var __webpack_exports__COLGROUP = __webpack_exports__.COLGROUP;
var __webpack_exports__Component = __webpack_exports__.Component;
var __webpack_exports__Components = __webpack_exports__.Components;
var __webpack_exports__DATA = __webpack_exports__.DATA;
var __webpack_exports__DATALIST = __webpack_exports__.DATALIST;
var __webpack_exports__DD = __webpack_exports__.DD;
var __webpack_exports__DEL = __webpack_exports__.DEL;
var __webpack_exports__DETAILS = __webpack_exports__.DETAILS;
var __webpack_exports__DFN = __webpack_exports__.DFN;
var __webpack_exports__DIALOG = __webpack_exports__.DIALOG;
var __webpack_exports__DIV = __webpack_exports__.DIV;
var __webpack_exports__DL = __webpack_exports__.DL;
var __webpack_exports__DOMRenderer = __webpack_exports__.DOMRenderer;
var __webpack_exports__DT = __webpack_exports__.DT;
var __webpack_exports__EM = __webpack_exports__.EM;
var __webpack_exports__EMBED = __webpack_exports__.EMBED;
var __webpack_exports__FIELDSET = __webpack_exports__.FIELDSET;
var __webpack_exports__FIGCAPTION = __webpack_exports__.FIGCAPTION;
var __webpack_exports__FIGURE = __webpack_exports__.FIGURE;
var __webpack_exports__FOOTER = __webpack_exports__.FOOTER;
var __webpack_exports__FORM = __webpack_exports__.FORM;
var __webpack_exports__H1 = __webpack_exports__.H1;
var __webpack_exports__H2 = __webpack_exports__.H2;
var __webpack_exports__H3 = __webpack_exports__.H3;
var __webpack_exports__H4 = __webpack_exports__.H4;
var __webpack_exports__H5 = __webpack_exports__.H5;
var __webpack_exports__H6 = __webpack_exports__.H6;
var __webpack_exports__HEADER = __webpack_exports__.HEADER;
var __webpack_exports__HGROUP = __webpack_exports__.HGROUP;
var __webpack_exports__HR = __webpack_exports__.HR;
var __webpack_exports__HTMLRenderer = __webpack_exports__.HTMLRenderer;
var __webpack_exports__I = __webpack_exports__.I;
var __webpack_exports__IFRAME = __webpack_exports__.IFRAME;
var __webpack_exports__IMG = __webpack_exports__.IMG;
var __webpack_exports__INPUT = __webpack_exports__.INPUT;
var __webpack_exports__INS = __webpack_exports__.INS;
var __webpack_exports__Jibs = __webpack_exports__.Jibs;
var __webpack_exports__KBD = __webpack_exports__.KBD;
var __webpack_exports__LABEL = __webpack_exports__.LABEL;
var __webpack_exports__LEGEND = __webpack_exports__.LEGEND;
var __webpack_exports__LI = __webpack_exports__.LI;
var __webpack_exports__LINK = __webpack_exports__.LINK;
var __webpack_exports__MAIN = __webpack_exports__.MAIN;
var __webpack_exports__MAP = __webpack_exports__.MAP;
var __webpack_exports__MARK = __webpack_exports__.MARK;
var __webpack_exports__MENU = __webpack_exports__.MENU;
var __webpack_exports__META = __webpack_exports__.META;
var __webpack_exports__METER = __webpack_exports__.METER;
var __webpack_exports__NAV = __webpack_exports__.NAV;
var __webpack_exports__NOSCRIPT = __webpack_exports__.NOSCRIPT;
var __webpack_exports__OBJECT = __webpack_exports__.OBJECT;
var __webpack_exports__OL = __webpack_exports__.OL;
var __webpack_exports__OPTGROUP = __webpack_exports__.OPTGROUP;
var __webpack_exports__OPTION = __webpack_exports__.OPTION;
var __webpack_exports__OUTPUT = __webpack_exports__.OUTPUT;
var __webpack_exports__P = __webpack_exports__.P;
var __webpack_exports__PICTURE = __webpack_exports__.PICTURE;
var __webpack_exports__PRE = __webpack_exports__.PRE;
var __webpack_exports__PROGRESS = __webpack_exports__.PROGRESS;
var __webpack_exports__Q = __webpack_exports__.Q;
var __webpack_exports__RP = __webpack_exports__.RP;
var __webpack_exports__RT = __webpack_exports__.RT;
var __webpack_exports__RUBY = __webpack_exports__.RUBY;
var __webpack_exports__Renderers = __webpack_exports__.Renderers;
var __webpack_exports__S = __webpack_exports__.S;
var __webpack_exports__SAMP = __webpack_exports__.SAMP;
var __webpack_exports__SCRIPT = __webpack_exports__.SCRIPT;
var __webpack_exports__SECTION = __webpack_exports__.SECTION;
var __webpack_exports__SELECT = __webpack_exports__.SELECT;
var __webpack_exports__SLOT = __webpack_exports__.SLOT;
var __webpack_exports__SMALL = __webpack_exports__.SMALL;
var __webpack_exports__SOURCE = __webpack_exports__.SOURCE;
var __webpack_exports__SPAN = __webpack_exports__.SPAN;
var __webpack_exports__STRONG = __webpack_exports__.STRONG;
var __webpack_exports__STYLE = __webpack_exports__.STYLE;
var __webpack_exports__SUB = __webpack_exports__.SUB;
var __webpack_exports__SUMMARY = __webpack_exports__.SUMMARY;
var __webpack_exports__SUP = __webpack_exports__.SUP;
var __webpack_exports__TABLE = __webpack_exports__.TABLE;
var __webpack_exports__TBODY = __webpack_exports__.TBODY;
var __webpack_exports__TD = __webpack_exports__.TD;
var __webpack_exports__TEMPLATE = __webpack_exports__.TEMPLATE;
var __webpack_exports__TERM = __webpack_exports__.TERM;
var __webpack_exports__TEXTAREA = __webpack_exports__.TEXTAREA;
var __webpack_exports__TFOOT = __webpack_exports__.TFOOT;
var __webpack_exports__TH = __webpack_exports__.TH;
var __webpack_exports__THEAD = __webpack_exports__.THEAD;
var __webpack_exports__TIME = __webpack_exports__.TIME;
var __webpack_exports__TITLE = __webpack_exports__.TITLE;
var __webpack_exports__TR = __webpack_exports__.TR;
var __webpack_exports__TRACK = __webpack_exports__.TRACK;
var __webpack_exports__Term = __webpack_exports__.Term;
var __webpack_exports__U = __webpack_exports__.U;
var __webpack_exports__UL = __webpack_exports__.UL;
var __webpack_exports__Utils = __webpack_exports__.Utils;
var __webpack_exports__VAR = __webpack_exports__.VAR;
var __webpack_exports__VIDEO = __webpack_exports__.VIDEO;
var __webpack_exports__WBR = __webpack_exports__.WBR;
var __webpack_exports__addResourceHandler = __webpack_exports__.addResourceHandler;
var __webpack_exports__addResourceResolver = __webpack_exports__.addResourceResolver;
var __webpack_exports__cssHandler = __webpack_exports__.cssHandler;
var __webpack_exports__deadbeef = __webpack_exports__.deadbeef;
var __webpack_exports__factory = __webpack_exports__.factory;
var __webpack_exports__javascriptHandler = __webpack_exports__.javascriptHandler;
var __webpack_exports__load = __webpack_exports__.load;
var __webpack_exports__removeResourceHandler = __webpack_exports__.removeResourceHandler;
var __webpack_exports__removeResourceResolver = __webpack_exports__.removeResourceResolver;
var __webpack_exports__resolveResourcePath = __webpack_exports__.resolveResourcePath;
export { __webpack_exports__$ as $, __webpack_exports__A as A, __webpack_exports__ABBR as ABBR, __webpack_exports__ADDRESS as ADDRESS, __webpack_exports__AREA as AREA, __webpack_exports__ARTICLE as ARTICLE, __webpack_exports__ASIDE as ASIDE, __webpack_exports__AUDIO as AUDIO, __webpack_exports__B as B, __webpack_exports__BASE as BASE, __webpack_exports__BDI as BDI, __webpack_exports__BDO as BDO, __webpack_exports__BLOCKQUOTE as BLOCKQUOTE, __webpack_exports__BR as BR, __webpack_exports__BUTTON as BUTTON, __webpack_exports__CANVAS as CANVAS, __webpack_exports__CAPTION as CAPTION, __webpack_exports__CITE as CITE, __webpack_exports__CODE as CODE, __webpack_exports__COL as COL, __webpack_exports__COLGROUP as COLGROUP, __webpack_exports__Component as Component, __webpack_exports__Components as Components, __webpack_exports__DATA as DATA, __webpack_exports__DATALIST as DATALIST, __webpack_exports__DD as DD, __webpack_exports__DEL as DEL, __webpack_exports__DETAILS as DETAILS, __webpack_exports__DFN as DFN, __webpack_exports__DIALOG as DIALOG, __webpack_exports__DIV as DIV, __webpack_exports__DL as DL, __webpack_exports__DOMRenderer as DOMRenderer, __webpack_exports__DT as DT, __webpack_exports__EM as EM, __webpack_exports__EMBED as EMBED, __webpack_exports__FIELDSET as FIELDSET, __webpack_exports__FIGCAPTION as FIGCAPTION, __webpack_exports__FIGURE as FIGURE, __webpack_exports__FOOTER as FOOTER, __webpack_exports__FORM as FORM, __webpack_exports__H1 as H1, __webpack_exports__H2 as H2, __webpack_exports__H3 as H3, __webpack_exports__H4 as H4, __webpack_exports__H5 as H5, __webpack_exports__H6 as H6, __webpack_exports__HEADER as HEADER, __webpack_exports__HGROUP as HGROUP, __webpack_exports__HR as HR, __webpack_exports__HTMLRenderer as HTMLRenderer, __webpack_exports__I as I, __webpack_exports__IFRAME as IFRAME, __webpack_exports__IMG as IMG, __webpack_exports__INPUT as INPUT, __webpack_exports__INS as INS, __webpack_exports__Jibs as Jibs, __webpack_exports__KBD as KBD, __webpack_exports__LABEL as LABEL, __webpack_exports__LEGEND as LEGEND, __webpack_exports__LI as LI, __webpack_exports__LINK as LINK, __webpack_exports__MAIN as MAIN, __webpack_exports__MAP as MAP, __webpack_exports__MARK as MARK, __webpack_exports__MENU as MENU, __webpack_exports__META as META, __webpack_exports__METER as METER, __webpack_exports__NAV as NAV, __webpack_exports__NOSCRIPT as NOSCRIPT, __webpack_exports__OBJECT as OBJECT, __webpack_exports__OL as OL, __webpack_exports__OPTGROUP as OPTGROUP, __webpack_exports__OPTION as OPTION, __webpack_exports__OUTPUT as OUTPUT, __webpack_exports__P as P, __webpack_exports__PICTURE as PICTURE, __webpack_exports__PRE as PRE, __webpack_exports__PROGRESS as PROGRESS, __webpack_exports__Q as Q, __webpack_exports__RP as RP, __webpack_exports__RT as RT, __webpack_exports__RUBY as RUBY, __webpack_exports__Renderers as Renderers, __webpack_exports__S as S, __webpack_exports__SAMP as SAMP, __webpack_exports__SCRIPT as SCRIPT, __webpack_exports__SECTION as SECTION, __webpack_exports__SELECT as SELECT, __webpack_exports__SLOT as SLOT, __webpack_exports__SMALL as SMALL, __webpack_exports__SOURCE as SOURCE, __webpack_exports__SPAN as SPAN, __webpack_exports__STRONG as STRONG, __webpack_exports__STYLE as STYLE, __webpack_exports__SUB as SUB, __webpack_exports__SUMMARY as SUMMARY, __webpack_exports__SUP as SUP, __webpack_exports__TABLE as TABLE, __webpack_exports__TBODY as TBODY, __webpack_exports__TD as TD, __webpack_exports__TEMPLATE as TEMPLATE, __webpack_exports__TERM as TERM, __webpack_exports__TEXTAREA as TEXTAREA, __webpack_exports__TFOOT as TFOOT, __webpack_exports__TH as TH, __webpack_exports__THEAD as THEAD, __webpack_exports__TIME as TIME, __webpack_exports__TITLE as TITLE, __webpack_exports__TR as TR, __webpack_exports__TRACK as TRACK, __webpack_exports__Term as Term, __webpack_exports__U as U, __webpack_exports__UL as UL, __webpack_exports__Utils as Utils, __webpack_exports__VAR as VAR, __webpack_exports__VIDEO as VIDEO, __webpack_exports__WBR as WBR, __webpack_exports__addResourceHandler as addResourceHandler, __webpack_exports__addResourceResolver as addResourceResolver, __webpack_exports__cssHandler as cssHandler, __webpack_exports__deadbeef as deadbeef, __webpack_exports__factory as factory, __webpack_exports__javascriptHandler as javascriptHandler, __webpack_exports__load as load, __webpack_exports__removeResourceHandler as removeResourceHandler, __webpack_exports__removeResourceResolver as removeResourceResolver, __webpack_exports__resolveResourcePath as resolveResourcePath };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUM7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbURBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamlicy1odG1sLXJlbmRlcmVyLy4uL2ppYnMtZG9tLXJlbmRlcmVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamlicy1odG1sLXJlbmRlcmVyLy4vbGliL3Jlc291cmNlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9qaWJzLWh0bWwtcmVuZGVyZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamlicy1odG1sLXJlbmRlcmVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qaWJzLWh0bWwtcmVuZGVyZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qaWJzLWh0bWwtcmVuZGVyZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qaWJzLWh0bWwtcmVuZGVyZXIvLi9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGU9e2Q6KHQscik9Pntmb3IodmFyIG4gaW4gcillLm8ocixuKSYmIWUubyh0LG4pJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHtlbnVtZXJhYmxlOiEwLGdldDpyW25dfSl9LG86KGUsdCk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSx0PXt9O2UuZCh0LHskOigpPT5vLHdBOigpPT5zLHo4OigpPT5hLHEkOigpPT5ET01SZW5kZXJlcixFbDooKT0+bCxwdjooKT0+YyxSaDooKT0+dSxjUTooKT0+ZCxCZTooKT0+aCxkNTooKT0+Zn0pO3ZhciByPXs3MTE6ZnVuY3Rpb24oZSx0LHIpe2NvbnN0IG49KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnIuZyl8fHRoaXMsaT1TeW1ib2wuZm9yKFwiQEBkZWFkYmVlZlJlZk1hcFwiKSxvPVN5bWJvbC5mb3IoXCJAQGRlYWRiZWVmVW5pcXVlSURcIikscz1uW2ldP25baV06bmV3IFdlYWtNYXAsYT1bXTtuW2ldfHwobltpXT1zKTtsZXQgbD0wbjtmdW5jdGlvbiBhbnl0aGluZ1RvSUQoZSx0KXtsZXQgcj1lOyhyIGluc3RhbmNlb2YgTnVtYmVyfHxyIGluc3RhbmNlb2YgU3RyaW5nfHxyIGluc3RhbmNlb2YgQm9vbGVhbikmJihyPXIudmFsdWVPZigpKTtsZXQgbj10eXBlb2YgcjtpZihcIm51bWJlclwiPT09biYmMD09PXIpcmV0dXJuIE9iamVjdC5pcyhyLC0wKT9cIm51bWJlcjotMFwiOlwibnVtYmVyOiswXCI7aWYoXCJzeW1ib2xcIj09PW4pcmV0dXJuYHN5bWJvbDoke3IudG9TdHJpbmcoKX1gO2lmKG51bGw9PXJ8fFwibnVtYmVyXCI9PT1ufHxcImJvb2xlYW5cIj09PW58fFwic3RyaW5nXCI9PT1ufHxcImJpZ2ludFwiPT09bilyZXR1cm5cIm51bWJlclwiPT09bj9yPDA/YG51bWJlcjoke3J9YDpgbnVtYmVyOiske3J9YDpcImJpZ2ludFwiPT09biYmMG49PT1yP1wiYmlnaW50OiswXCI6YCR7bn06JHtyfWA7bGV0IGk9YS5sZW5ndGg+MCYmZnVuY3Rpb24gZ2V0SGVscGVyRm9yVmFsdWUoZSl7Zm9yKGxldCB0PTAscj1hLmxlbmd0aDt0PHI7dCsrKXtsZXR7aGVscGVyOnIsZ2VuZXJhdG9yOm59PWFbdF07aWYocihlKSlyZXR1cm4gbn19KHIpO2lmKGkpcmV0dXJuIGFueXRoaW5nVG9JRChpKHIpKTtpZihvIGluIHImJlwiZnVuY3Rpb25cIj09dHlwZW9mIHJbb10mJighdHx8IXQuaGFzKHIpKSl7bGV0IGU9dHx8bmV3IFNldDtyZXR1cm4gZS5hZGQociksYW55dGhpbmdUb0lEKHJbb10oKSxlKX1pZighcy5oYXMocikpe2xldCBlPWAke3R5cGVvZiByfTokeysrbH1gO3JldHVybiBzLnNldChyLGUpLGV9cmV0dXJuIHMuZ2V0KHIpfWZ1bmN0aW9uIGRlYWRiZWVmKCl7bGV0IGU9W2FyZ3VtZW50cy5sZW5ndGhdO2ZvcihsZXQgdD0wLHI9YXJndW1lbnRzLmxlbmd0aDt0PHI7dCsrKWUucHVzaChhbnl0aGluZ1RvSUQoYXJndW1lbnRzW3RdKSk7cmV0dXJuIGUuam9pbihcIjpcIil9T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZGVhZGJlZWYse2lkU3ltOnt3cml0YWJsZTohMCxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTpvfSxzb3J0ZWQ6e3dyaXRhYmxlOiEwLGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwLHZhbHVlOmZ1bmN0aW9uIGRlYWRiZWVmU29ydGVkKCl7bGV0IGU9W2FyZ3VtZW50cy5sZW5ndGhdO2ZvcihsZXQgdD0wLHI9YXJndW1lbnRzLmxlbmd0aDt0PHI7dCsrKWUucHVzaChhbnl0aGluZ1RvSUQoYXJndW1lbnRzW3RdKSk7cmV0dXJuIGUuc29ydCgpLmpvaW4oXCI6XCIpfX0sZ2VuZXJhdGVJREZvcjp7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6ZnVuY3Rpb24gZ2VuZXJhdGVJREZvcihlLHQpe2EucHVzaCh7aGVscGVyOmUsZ2VuZXJhdG9yOnR9KX19LHJlbW92ZUlER2VuZXJhdG9yOnt3cml0YWJsZTohMCxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTpmdW5jdGlvbiByZW1vdmVJREdlbmVyYXRvcihlKXtsZXQgdD1hLmZpbmRJbmRleCgodD0+dC5oZWxwZXI9PT1lKSk7dDwwfHxhLnNwbGljZSh0LDEpfX19KSxlLmV4cG9ydHM9ZGVhZGJlZWZ9fSxuPXt9O2Z1bmN0aW9uIF9fbmVzdGVkX3dlYnBhY2tfcmVxdWlyZV8xNzEyX18oZSl7dmFyIHQ9bltlXTtpZih2b2lkIDAhPT10KXJldHVybiB0LmV4cG9ydHM7dmFyIGk9bltlXT17ZXhwb3J0czp7fX07cmV0dXJuIHJbZV0uY2FsbChpLmV4cG9ydHMsaSxpLmV4cG9ydHMsX19uZXN0ZWRfd2VicGFja19yZXF1aXJlXzE3MTJfXyksaS5leHBvcnRzfV9fbmVzdGVkX3dlYnBhY2tfcmVxdWlyZV8xNzEyX18uZD0oZSx0KT0+e2Zvcih2YXIgciBpbiB0KV9fbmVzdGVkX3dlYnBhY2tfcmVxdWlyZV8xNzEyX18ubyh0LHIpJiYhX19uZXN0ZWRfd2VicGFja19yZXF1aXJlXzE3MTJfXy5vKGUscikmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIse2VudW1lcmFibGU6ITAsZ2V0OnRbcl19KX0sX19uZXN0ZWRfd2VicGFja19yZXF1aXJlXzE3MTJfXy5nPWZ1bmN0aW9uKCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbFRoaXMpcmV0dXJuIGdsb2JhbFRoaXM7dHJ5e3JldHVybiB0aGlzfHxuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpfWNhdGNoKGUpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cpcmV0dXJuIHdpbmRvd319KCksX19uZXN0ZWRfd2VicGFja19yZXF1aXJlXzE3MTJfXy5vPShlLHQpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KSxfX25lc3RlZF93ZWJwYWNrX3JlcXVpcmVfMTcxMl9fLnI9ZT0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9O3ZhciBpPXt9OygoKT0+e19fbmVzdGVkX3dlYnBhY2tfcmVxdWlyZV8xNzEyX18uZChpLHskOigpPT5oLHdBOigpPT5Db21wb25lbnQsejg6KCk9PkQsRWw6KCk9PlMscHY6KCk9PngsUmg6KCk9PlRlcm0sY1E6KCk9PmUsQmU6KCk9PnQsZDU6KCk9PmZhY3Rvcnl9KTt2YXIgZT17fTtfX25lc3RlZF93ZWJwYWNrX3JlcXVpcmVfMTcxMl9fLnIoZSksX19uZXN0ZWRfd2VicGFja19yZXF1aXJlXzE3MTJfXy5kKGUse2JpbmRNZXRob2RzOigpPT5iaW5kTWV0aG9kcyxjaGlsZHJlbkRpZmZlcjooKT0+Y2hpbGRyZW5EaWZmZXIsZmV0Y2hEZWVwUHJvcGVydHk6KCk9PmZldGNoRGVlcFByb3BlcnR5LGZsYXR0ZW5BcnJheTooKT0+ZmxhdHRlbkFycmF5LGdlbmVyYXRlVVVJRDooKT0+Z2VuZXJhdGVVVUlELGluc3RhbmNlT2Y6KCk9Pmluc3RhbmNlT2YsaXNFbXB0eTooKT0+aXNFbXB0eSxpc0l0ZXJhYmxlQ2hpbGQ6KCk9PmlzSXRlcmFibGVDaGlsZCxpc05vdEVtcHR5OigpPT5pc05vdEVtcHR5LGlzVmFsaWRDaGlsZDooKT0+aXNWYWxpZENoaWxkLGl0ZXJhdGU6KCk9PnMsbm93OigpPT5ub3cscHJvcHNEaWZmZXI6KCk9PnByb3BzRGlmZmVyLHNpemVPZjooKT0+c2l6ZU9mfSk7dmFyIHQ9X19uZXN0ZWRfd2VicGFja19yZXF1aXJlXzE3MTJfXyg3MTEpO2NvbnN0IHI9U3ltYm9sLmZvcihcIkBqaWJzSXRlcmF0ZVN0b3BcIiksbj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp2b2lkIDA7bGV0IG89MWU2O2Z1bmN0aW9uIGluc3RhbmNlT2YoZSl7ZnVuY3Rpb24gdGVzdFR5cGUoZSx0KXtsZXQgcj10LGk9dHlwZW9mIGU7cmV0dXJuIHI9PT1uLlN0cmluZz9yPVwic3RyaW5nXCI6cj09PW4uTnVtYmVyP3I9XCJudW1iZXJcIjpyPT09bi5Cb29sZWFuP3I9XCJib29sZWFuXCI6cj09PW4uRnVuY3Rpb24/cj1cImZ1bmN0aW9uXCI6cj09PW4uQXJyYXk/cj1cImFycmF5XCI6cj09PW4uT2JqZWN0P3I9XCJvYmplY3RcIjpyPT09bi5Qcm9taXNlP3I9XCJwcm9taXNlXCI6cj09PW4uQmlnSW50P3I9XCJiaWdpbnRcIjpyPT09bi5NYXA/cj1cIm1hcFwiOnI9PT1uLldlYWtNYXA/cj1cIndlYWttYXBcIjpyPT09bi5TZXQ/cj1cInNldFwiOnI9PT1uLlN5bWJvbD9yPVwic3ltYm9sXCI6cj09PW4uQnVmZmVyJiYocj1cImJ1ZmZlclwiKSwhKFwiYnVmZmVyXCIhPT1yfHwhbi5CdWZmZXJ8fCFuLkJ1ZmZlci5pc0J1ZmZlcihlKSl8fChcIm51bWJlclwiPT09ciYmKFwibnVtYmVyXCI9PT1pfHxlIGluc3RhbmNlb2YgTnVtYmVyfHxlLmNvbnN0cnVjdG9yJiZcIk51bWJlclwiPT09ZS5jb25zdHJ1Y3Rvci5uYW1lKT8hIWlzRmluaXRlKGUpOlwib2JqZWN0XCIhPT1yJiZyPT09aXx8KFwib2JqZWN0XCI9PT1yPyEhKGUuY29uc3RydWN0b3I9PT1PYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yfHxlLmNvbnN0cnVjdG9yJiZcIk9iamVjdFwiPT09ZS5jb25zdHJ1Y3Rvci5uYW1lKXx8XCJvYmplY3RcIj09PWkmJiFlLmNvbnN0cnVjdG9yOiEoXCJhcnJheVwiIT09cnx8IShBcnJheS5pc0FycmF5KGUpfHxlIGluc3RhbmNlb2YgQXJyYXl8fGUuY29uc3RydWN0b3ImJlwiQXJyYXlcIj09PWUuY29uc3RydWN0b3IubmFtZSkpfHwhKFwicHJvbWlzZVwiIT09ciYmXCJkZWZlcnJlZFwiIT09cnx8IWZ1bmN0aW9uIGlzRGVmZXJyZWRUeXBlKGUpe3JldHVybiEhKGUgaW5zdGFuY2VvZiBQcm9taXNlfHxlLmNvbnN0cnVjdG9yJiZcIlByb21pc2VcIj09PWUuY29uc3RydWN0b3IubmFtZSl8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUudGhlbiYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5jYXRjaH0oZSkpfHwhKFwic3RyaW5nXCIhPT1yfHwhKGUgaW5zdGFuY2VvZiBuLlN0cmluZ3x8ZS5jb25zdHJ1Y3RvciYmXCJTdHJpbmdcIj09PWUuY29uc3RydWN0b3IubmFtZSkpfHwhKFwiYm9vbGVhblwiIT09cnx8IShlIGluc3RhbmNlb2Ygbi5Cb29sZWFufHxlLmNvbnN0cnVjdG9yJiZcIkJvb2xlYW5cIj09PWUuY29uc3RydWN0b3IubmFtZSkpfHwhKFwibWFwXCIhPT1yfHwhKGUgaW5zdGFuY2VvZiBuLk1hcHx8ZS5jb25zdHJ1Y3RvciYmXCJNYXBcIj09PWUuY29uc3RydWN0b3IubmFtZSkpfHwhKFwid2Vha21hcFwiIT09cnx8IShlIGluc3RhbmNlb2Ygbi5XZWFrTWFwfHxlLmNvbnN0cnVjdG9yJiZcIldlYWtNYXBcIj09PWUuY29uc3RydWN0b3IubmFtZSkpfHwhKFwic2V0XCIhPT1yfHwhKGUgaW5zdGFuY2VvZiBuLlNldHx8ZS5jb25zdHJ1Y3RvciYmXCJTZXRcIj09PWUuY29uc3RydWN0b3IubmFtZSkpfHxcImZ1bmN0aW9uXCI9PT1yJiZcImZ1bmN0aW9uXCI9PT1pfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiZlIGluc3RhbmNlb2Ygcnx8IShcInN0cmluZ1wiIT10eXBlb2Ygcnx8IWUuY29uc3RydWN0b3J8fGUuY29uc3RydWN0b3IubmFtZSE9PXIpKSl9aWYobnVsbD09ZSlyZXR1cm4hMTtmb3IodmFyIHQ9MSxyPWFyZ3VtZW50cy5sZW5ndGg7dDxyO3QrKylpZighMD09PXRlc3RUeXBlKGUsYXJndW1lbnRzW3RdKSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBwcm9wc0RpZmZlcihlLHQscil7aWYoZT09PXQpcmV0dXJuITE7aWYodHlwZW9mIGUhPXR5cGVvZiB0KXJldHVybiEwO2lmKCFlJiZ0KXJldHVybiEwO2lmKGUmJiF0KXJldHVybiEwO2lmKCFlJiYhdCYmZSE9ZSlyZXR1cm4hMDtsZXQgbj1PYmplY3Qua2V5cyhlKS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKSksaT1PYmplY3Qua2V5cyh0KS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0KSk7aWYobi5sZW5ndGghPT1pLmxlbmd0aClyZXR1cm4hMDtmb3IobGV0IG89MCxzPW4ubGVuZ3RoO288cztvKyspe2xldCBzPW5bb107aWYociYmci5pbmRleE9mKHMpPj0wKWNvbnRpbnVlO2lmKGVbc10hPT10W3NdKXJldHVybiEwO2xldCBhPWlbb107aWYoIShyJiZyLmluZGV4T2YoYSl8fHM9PT1hfHxlW2FdPT09dFthXSkpcmV0dXJuITB9cmV0dXJuITF9ZnVuY3Rpb24gc2l6ZU9mKGUpe3JldHVybiBlP09iamVjdC5pcygxLzApPzA6XCJudW1iZXJcIj09dHlwZW9mIGUubGVuZ3RoP2UubGVuZ3RoOk9iamVjdC5rZXlzKGUpLmxlbmd0aDowfWZ1bmN0aW9uIF9pdGVyYXRlKGUsdCl7aWYoIWV8fE9iamVjdC5pcygxLzApKXJldHVybltdO2xldCBuLGk9W10sbz17Y29sbGVjdGlvbjplLFNUT1A6cn07aWYoQXJyYXkuaXNBcnJheShlKSl7by50eXBlPVwiQXJyYXlcIjtmb3IobGV0IHM9MCxhPWUubGVuZ3RoO3M8YSYmKG8udmFsdWU9ZVtzXSxvLmluZGV4PW8ua2V5PXMsbj10LmNhbGwodGhpcyxvKSxuIT09cik7cysrKWkucHVzaChuKX1lbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUuZW50cmllcylpZihlIGluc3RhbmNlb2YgU2V0fHxcIlNldFwiPT09ZS5jb25zdHJ1Y3Rvci5uYW1lKXtvLnR5cGU9XCJTZXRcIjtsZXQgcz0wO2ZvcihsZXQgYSBvZiBlLnZhbHVlcygpKXtpZihvLnZhbHVlPWEsby5rZXk9YSxvLmluZGV4PXMrKyxuPXQuY2FsbCh0aGlzLG8pLG49PT1yKWJyZWFrO2kucHVzaChuKX19ZWxzZXtvLnR5cGU9ZS5jb25zdHJ1Y3Rvci5uYW1lO2xldCBzPTA7Zm9yKGxldFthLGxdb2YgZS5lbnRyaWVzKCkpe2lmKG8udmFsdWU9bCxvLmtleT1hLG8uaW5kZXg9cysrLG49dC5jYWxsKHRoaXMsbyksbj09PXIpYnJlYWs7aS5wdXNoKG4pfX1lbHNle2lmKGluc3RhbmNlT2YoZSxcImJvb2xlYW5cIixcIm51bWJlclwiLFwiYmlnaW50XCIsXCJmdW5jdGlvblwiKSlyZXR1cm47by50eXBlPWUuY29uc3RydWN0b3I/ZS5jb25zdHJ1Y3Rvci5uYW1lOlwiT2JqZWN0XCI7bGV0IHM9T2JqZWN0LmtleXMoZSk7Zm9yKGxldCBhPTAsbD1zLmxlbmd0aDthPGw7YSsrKXtsZXQgbD1zW2FdLGM9ZVtsXTtpZihvLnZhbHVlPWMsby5rZXk9bCxvLmluZGV4PWEsbj10LmNhbGwodGhpcyxvKSxuPT09cilicmVhaztpLnB1c2gobil9fXJldHVybiBpfU9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKF9pdGVyYXRlLHtTVE9QOnt3cml0YWJsZTohMSxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMSx2YWx1ZTpyfX0pO2NvbnN0IHM9X2l0ZXJhdGU7ZnVuY3Rpb24gY2hpbGRyZW5EaWZmZXIoZSxyKXtyZXR1cm4gZSE9PXImJihBcnJheS5pc0FycmF5KGUpP3QoLi4uZSk6dChlKSkhPT0oQXJyYXkuaXNBcnJheShyKT90KC4uLnIpOnQocikpfWZ1bmN0aW9uIGZldGNoRGVlcFByb3BlcnR5KGUsdCxyLG4pe2lmKG51bGw9PWV8fE9iamVjdC5pcyhOYU4sZSl8fE9iamVjdC5pcygxLzAsZSkpcmV0dXJuIG4/W3IsbnVsbF06cjtpZihudWxsPT10fHxPYmplY3QuaXMoTmFOLHQpfHxPYmplY3QuaXMoMS8wLHQpKXJldHVybiBuP1tyLG51bGxdOnI7bGV0IGk7aWYoQXJyYXkuaXNBcnJheSh0KSlpPXQ7ZWxzZSBpZihcInN5bWJvbFwiPT10eXBlb2YgdClpPVt0XTtlbHNle2xldCBlPVwiXCIrdCxyPTAsbj0wO2ZvcihpPVtdOzspe2xldCB0PWUuaW5kZXhPZihcIi5cIixyKTtpZih0PDApe2kucHVzaChlLnN1YnN0cmluZyhuKSk7YnJlYWt9XCJcXFxcXCIhPT1lLmNoYXJBdCh0LTEpPyhpLnB1c2goZS5zdWJzdHJpbmcobix0KSksbj1yPXQrMSk6cj10KzF9fWxldCBvPWlbaS5sZW5ndGgtMV07aWYoMD09PWkubGVuZ3RoKXJldHVybiBuP1tyLG9dOnI7bGV0IHM9ZTtmb3IobGV0IGU9MCx0PWkubGVuZ3RoO2U8dDtlKyspaWYocz1zW2lbZV1dLG51bGw9PXMpcmV0dXJuIG4/W3Isb106cjtyZXR1cm4gbj9bcyxvXTpzfWZ1bmN0aW9uIGJpbmRNZXRob2RzKGUsdCl7bGV0IHI9ZSxuPW5ldyBTZXQ7Zm9yKDtyOyl7bGV0IGU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMociksaT1PYmplY3Qua2V5cyhlKS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKSk7Zm9yKGxldCBlPTAsdD1pLmxlbmd0aDtlPHQ7ZSsrKXtsZXQgdD1pW2VdO2lmKFwiY29uc3RydWN0b3JcIj09PXQpY29udGludWU7aWYobi5oYXModCkpY29udGludWU7bi5hZGQodCk7bGV0IG89clt0XTtPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KHQpJiZPYmplY3QucHJvdG90eXBlW3RdPT09b3x8XCJmdW5jdGlvblwiPT10eXBlb2YgbyYmKHRoaXNbdF09by5iaW5kKHRoaXMpKX1pZihyPU9iamVjdC5nZXRQcm90b3R5cGVPZihyKSxyPT09T2JqZWN0LnByb3RvdHlwZSlicmVhaztpZih0JiZ0LmluZGV4T2Yocik+PTApYnJlYWt9fWZ1bmN0aW9uIGlzRW1wdHkoZSl7cmV0dXJuIShudWxsIT1lJiYoT2JqZWN0LmlzKGUsMS8wKXx8IU9iamVjdC5pcyhlLE5hTikmJihpbnN0YW5jZU9mKGUsXCJzdHJpbmdcIik/L1xcUy8udGVzdChlKTppbnN0YW5jZU9mKGUsXCJudW1iZXJcIikmJmlzRmluaXRlKGUpfHxpbnN0YW5jZU9mKGUsXCJib29sZWFuXCIsXCJiaWdpbnRcIixcImZ1bmN0aW9uXCIpfHwwIT09c2l6ZU9mKGUpKSkpfWZ1bmN0aW9uIGlzTm90RW1wdHkoZSl7cmV0dXJuIWlzRW1wdHkuY2FsbCh0aGlzLGUpfWZ1bmN0aW9uIGZsYXR0ZW5BcnJheShlKXtpZighQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZTtsZXQgdD1bXTtmb3IobGV0IHI9MCxuPWUubGVuZ3RoO3I8bjtyKyspe2xldCBuPWVbcl07QXJyYXkuaXNBcnJheShuKT90PXQuY29uY2F0KGZsYXR0ZW5BcnJheShuKSk6dC5wdXNoKG4pfXJldHVybiB0fWZ1bmN0aW9uIGlzVmFsaWRDaGlsZChlKXtyZXR1cm4gbnVsbCE9ZSYmXCJib29sZWFuXCIhPXR5cGVvZiBlJiYhT2JqZWN0LmlzKGUsMS8wKSYmIU9iamVjdC5pcyhlLE5hTil9ZnVuY3Rpb24gaXNJdGVyYWJsZUNoaWxkKGUpe3JldHVybiBudWxsIT1lJiYhT2JqZWN0LmlzKGUsTmFOKSYmIU9iamVjdC5pcyhlLDEvMCkmJihBcnJheS5pc0FycmF5KGUpfHxcIm9iamVjdFwiPT10eXBlb2YgZSYmIWluc3RhbmNlT2YoZSxcImJvb2xlYW5cIixcIm51bWJlclwiLFwic3RyaW5nXCIpKX1mdW5jdGlvbiBub3coKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgcGVyZm9ybWFuY2UmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHBlcmZvcm1hbmNlLm5vdz9wZXJmb3JtYW5jZS5ub3coKTpEYXRlLm5vdygpfWZ1bmN0aW9uIGdlbmVyYXRlVVVJRCgpe3JldHVybiBvPjk5OTk5OTkmJihvPTFlNiksYCR7RGF0ZS5ub3coKX0uJHtvKyt9JHtNYXRoLnJvdW5kKDFlNypNYXRoLnJhbmRvbSgpKS50b1N0cmluZygpLnBhZFN0YXJ0KDIwLFwiMFwiKX1gfWNsYXNzIEppYntjb25zdHJ1Y3RvcihlLHQscil7bGV0IG49ZSYmZS5wcm9wcz9lLnByb3BzOnt9O09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMse1R5cGU6e3dyaXRhYmxlOiEwLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHZhbHVlOmV9LHByb3BzOnt3cml0YWJsZTohMCxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTp7W2RdOjAsLi4ubiwuLi50fHx7fX19LGNoaWxkcmVuOnt3cml0YWJsZTohMCxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTpmbGF0dGVuQXJyYXkocil9fSl9fWNvbnN0IGE9U3ltYm9sLmZvcihcIkBqaWJzLmJhcnJlblwiKSxsPVN5bWJvbC5mb3IoXCJAamlicy5wcm94eVwiKSxjPVN5bWJvbC5mb3IoXCJAamlicy5yYXdUZXh0XCIpLHU9U3ltYm9sLmZvcihcIkBqaWJzLmppYlwiKSxkPVN5bWJvbC5mb3IoXCJAamlicy5jaGlsZEluZGV4UHJvcFwiKTtmdW5jdGlvbiBmYWN0b3J5KGUpe2Z1bmN0aW9uICQocixuPXt9KXtpZihpc0ppYmlzaChyKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiUmVjZWl2ZWQgYSBqaWIgYnV0IGV4cGVjdGVkIGEgY29tcG9uZW50LlwiKTtsZXQgaT1udWxsPT1yP2w6cjtmdW5jdGlvbiBiYXJyZW4oLi4ucil7bGV0IG89cjtmdW5jdGlvbiBqaWIoKXtyZXR1cm4gaW5zdGFuY2VPZihpLFwicHJvbWlzZVwiKXx8by5zb21lKChlPT5pbnN0YW5jZU9mKGUsXCJwcm9taXNlXCIpKSk/UHJvbWlzZS5hbGwoW2ldLmNvbmNhdChvKSkudGhlbigodD0+KGk9dFswXSxvPXQuc2xpY2UoMSksbmV3IGUoaSxuLG8pKSkpOm5ldyBlKGksbixvKX1yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoamliLHtbdV06e3dyaXRhYmxlOiExLGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiExLHZhbHVlOiEwfSxbdC5pZFN5bV06e3dyaXRhYmxlOiExLGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiExLHZhbHVlOigpPT5pfX0pLGppYn1yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoYmFycmVuLHtbYV06e3dyaXRhYmxlOiExLGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiExLHZhbHVlOiEwfSxbdC5pZFN5bV06e3dyaXRhYmxlOiExLGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiExLHZhbHVlOigpPT5pfX0pLGJhcnJlbn1yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoJCx7cmVtYXA6e3dyaXRhYmxlOiExLGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiExLHZhbHVlOihlLHQpPT57bGV0IHI9ZTtpZihudWxsPT1yfHxPYmplY3QuaXMociwxLzApfHxPYmplY3QuaXMocixOYU4pKXJldHVybiByO2lzSmliaXNoKHIpJiYocj1jb25zdHJ1Y3RKaWIocikpO2NvbnN0IGZpbmFsaXplTWFwPWU9PntsZXQgdD1lO3JldHVybiBpc0ppYmlzaCh0KT8odD1jb25zdHJ1Y3RKaWIodCksJCh0LlR5cGUsdC5wcm9wcykoLi4udC5jaGlsZHJlbnx8W10pKTp0fTtsZXQgbj10KHIpO3JldHVybiBpbnN0YW5jZU9mKG4sXCJwcm9taXNlXCIpP24udGhlbihmaW5hbGl6ZU1hcCk6ZmluYWxpemVNYXAobil9fX0pLCR9Y29uc3QgaD1mYWN0b3J5KEppYik7ZnVuY3Rpb24gaXNKaWJpc2goZSl7cmV0dXJuIShcImZ1bmN0aW9uXCIhPXR5cGVvZiBlfHwhZVthXSYmIWVbdV0pfHxlIGluc3RhbmNlb2YgSmlifWZ1bmN0aW9uIGNvbnN0cnVjdEppYihlKXtpZihlIGluc3RhbmNlb2YgSmliKXJldHVybiBlO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpe2lmKGVbYV0pcmV0dXJuIGUoKSgpO2lmKGVbdV0pcmV0dXJuIGUoKX10aHJvdyBuZXcgVHlwZUVycm9yKFwiY29uc3RydWN0SmliOiBQcm92aWRlZCB2YWx1ZSBpcyBub3QgYSBKaWIuXCIpfWFzeW5jIGZ1bmN0aW9uIHJlc29sdmVDaGlsZHJlbihlKXtsZXQgdD1lO2luc3RhbmNlT2YodCxcInByb21pc2VcIikmJih0PWF3YWl0IHQpLCh0aGlzLmlzSXRlcmFibGVDaGlsZHx8aXNJdGVyYWJsZUNoaWxkKS5jYWxsKHRoaXMsdCl8fCFpc0ppYmlzaCh0KSYmISh0aGlzLmlzVmFsaWRDaGlsZHx8aXNWYWxpZENoaWxkKS5jYWxsKHRoaXMsdCl8fCh0PVt0XSk7bGV0IHI9cyh0LChhc3luYyh7dmFsdWU6ZX0pPT57bGV0IHQ9aW5zdGFuY2VPZihlLFwicHJvbWlzZVwiKT9hd2FpdCBlOmU7cmV0dXJuIGlzSmliaXNoKHQpP2F3YWl0IGNvbnN0cnVjdEppYih0KTp0fSkpO3JldHVybiBhd2FpdCBQcm9taXNlLmFsbChyKX1jb25zdCBmPVN5bWJvbC5mb3IoXCJAamlicy9ldmVudHMvbGlzdGVuZXJzXCIpO2NsYXNzIEV2ZW50RW1pdHRlcntjb25zdHJ1Y3Rvcigpe09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMse1tmXTp7d3JpdGFibGU6ITEsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITEsdmFsdWU6bmV3IE1hcH19KX1hZGRMaXN0ZW5lcihlLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV2ZW50IGxpc3RlbmVyIG11c3QgYmUgYSBtZXRob2RcIik7bGV0IHI9dGhpc1tmXSxuPXIuZ2V0KGUpO3JldHVybiBufHwobj1bXSxyLnNldChlLG4pKSxuLnB1c2godCksdGhpc31yZW1vdmVMaXN0ZW5lcihlLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV2ZW50IGxpc3RlbmVyIG11c3QgYmUgYSBtZXRob2RcIik7bGV0IHI9dGhpc1tmXS5nZXQoZSk7aWYoIXIpcmV0dXJuIHRoaXM7bGV0IG49ci5pbmRleE9mKHQpO3JldHVybiBuPj0wJiZyLnNwbGljZShuLDEpLHRoaXN9cmVtb3ZlQWxsTGlzdGVuZXJzKGUpe2xldCB0PXRoaXNbZl07cmV0dXJuIHQuaGFzKGUpPyh0LnNldChlLFtdKSx0aGlzKTp0aGlzfWVtaXQoZSwuLi50KXtsZXQgcj10aGlzW2ZdLmdldChlKTtpZighcnx8MD09PXIubGVuZ3RoKXJldHVybiExO2ZvcihsZXQgZT0wLG49ci5sZW5ndGg7ZTxuO2UrKylyW2VdLmFwcGx5KHRoaXMsdCk7cmV0dXJuITB9b25jZShlLHQpe2xldCBmdW5jPSguLi5yKT0+KHRoaXMub2ZmKGUsZnVuYyksdCguLi5yKSk7cmV0dXJuIHRoaXMub24oZSxmdW5jKX1vbihlLHQpe3JldHVybiB0aGlzLmFkZExpc3RlbmVyKGUsdCl9b2ZmKGUsdCl7cmV0dXJuIHRoaXMucmVtb3ZlTGlzdGVuZXIoZSx0KX1ldmVudE5hbWVzKCl7cmV0dXJuIEFycmF5LmZyb20odGhpc1tmXS5rZXlzKCkpfWxpc3RlbmVyQ291bnQoZSl7bGV0IHQ9dGhpc1tmXS5nZXQoZSk7cmV0dXJuIHQ/dC5sZW5ndGg6MH1saXN0ZW5lcnMoZSl7bGV0IHQ9dGhpc1tmXS5nZXQoZSk7cmV0dXJuIHQ/dC5zbGljZSgpOltdfX1jb25zdCBwPVwiQGppYnMvY29tcG9uZW50L2V2ZW50L3VwZGF0ZVwiLGI9U3ltYm9sLmZvcihcIkBqaWJzL2NvbXBvbmVudC9xdWV1ZVVwZGF0ZVwiKSxtPVN5bWJvbC5mb3IoXCJAamlicy9jb21wb25lbnQvZmx1c2hVcGRhdGVcIikseT1TeW1ib2wuZm9yKFwiQGppYnMvY29tcG9uZW50L19faW5pdFwiKSxnPVN5bWJvbC5mb3IoXCJAamlicy9jb21wb25lbnQvc2tpcFN0YXRlVXBkYXRlc1wiKSx3PVN5bWJvbC5mb3IoXCJAamlicy9jb21wb25lbnQvcGVuZGluZ1N0YXRlVXBkYXRlXCIpLE49U3ltYm9sLmZvcihcIkBqaWJzL2NvbXBvbmVudC9sYXN0UmVuZGVyVGltZVwiKSxPPVN5bWJvbC5mb3IoXCJAamlicy9jb21wb25lbnQvcHJldmlvdXNTdGF0ZVwiKSx2PVN5bWJvbC5mb3IoXCJAamlicy9jb21wb25lbnQvcHJldmlvdXNTdGF0ZVwiKSxUPW5ldyBXZWFrTWFwO2Z1bmN0aW9uIGlzVmFsaWRTdGF0ZU9iamVjdChlKXtpZihudWxsPT1lKXJldHVybiExO2lmKE9iamVjdC5pcyhlLE5hTikpcmV0dXJuITE7aWYoT2JqZWN0LmlzKGUsMS8wKSlyZXR1cm4hMTtpZihlIGluc3RhbmNlb2YgQm9vbGVhbnx8ZSBpbnN0YW5jZW9mIE51bWJlcnx8ZSBpbnN0YW5jZW9mIFN0cmluZylyZXR1cm4hMTtsZXQgdD10eXBlb2YgZTtyZXR1cm4hKFwic3RyaW5nXCI9PT10fHxcIm51bWJlclwiPT09dHx8XCJib29sZWFuXCI9PT10fHxBcnJheS5pc0FycmF5KGUpfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgQnVmZmVyJiZCdWZmZXIuaXNCdWZmZXIoZSkpfWNsYXNzIENvbXBvbmVudCBleHRlbmRzIEV2ZW50RW1pdHRlcntzdGF0aWMgVVBEQVRFX0VWRU5UPXA7W2JdKCl7dGhpc1t3XXx8KHRoaXNbd109UHJvbWlzZS5yZXNvbHZlKCksdGhpc1t3XS50aGVuKHRoaXNbbV0uYmluZCh0aGlzKSkpfVttXSgpe3RoaXNbd10mJih0aGlzLmVtaXQocCksdGhpc1t3XT1udWxsKX1beV0oKXt0aGlzW2ddPSExfWNvbnN0cnVjdG9yKGUpe3N1cGVyKCksYmluZE1ldGhvZHMuY2FsbCh0aGlzLHRoaXMuY29uc3RydWN0b3IucHJvdG90eXBlKTtsZXQgdD1lfHx7fSxyPU9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShudWxsKSx0LnByb3BzfHx7fSksbj0oKCk9PntsZXQgZT1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybiBuZXcgUHJveHkoZSx7Z2V0OihlLHQpPT5lW3RdLHNldDooZSx0LHIpPT57bGV0IG49ZVt0XTtyZXR1cm4gbj09PXJ8fCh0aGlzW2ddfHx0aGlzW2JdKCksZVt0XT1yLHRoaXMub25TdGF0ZVVwZGF0ZWQodCxyLG4pKSwhMH19KX0pKCk7T2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcyx7W2ddOnt3cml0YWJsZTohMCxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTohMH0sW3ddOnt3cml0YWJsZTohMCxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTpQcm9taXNlLnJlc29sdmUoKX0sW05dOnt3cml0YWJsZTohMCxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTpub3coKX0sW3ZdOnt3cml0YWJsZTohMCxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTp7fX0saWQ6e3dyaXRhYmxlOiExLGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiExLHZhbHVlOnQuaWR9LHByb3BzOnt3cml0YWJsZTohMCxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTpyfSxjaGlsZHJlbjp7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6dC5jaGlsZHJlbnx8W119LGNvbnRleHQ6e3dyaXRhYmxlOiEwLGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwLHZhbHVlOnQuY29udGV4dHx8T2JqZWN0LmNyZWF0ZShudWxsKX0sc3RhdGU6e2VudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwLGdldDooKT0+bixzZXQ6ZT0+e2lmKCFpc1ZhbGlkU3RhdGVPYmplY3QoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCB2YWx1ZSBmb3IgXCJ0aGlzLnN0YXRlXCI6IFwiJHtlfVwiLiBQcm92aWRlZCBcInN0YXRlXCIgbXVzdCBiZSBhbiBpdGVyYWJsZSBvYmplY3QuYCk7T2JqZWN0LmFzc2lnbihuLGUpfX19KX1yZXNvbHZlQ2hpbGRyZW4oZSl7cmV0dXJuIHJlc29sdmVDaGlsZHJlbi5jYWxsKHRoaXMsZSl9aXNKaWIoZSl7cmV0dXJuIGlzSmliaXNoKGUpfWNvbnN0cnVjdEppYihlKXtyZXR1cm4gY29uc3RydWN0SmliKGUpfXB1c2hSZW5kZXIoZSl7dGhpcy5lbWl0KHAsZSl9b25Qcm9wVXBkYXRlZChlLHQscil7fW9uU3RhdGVVcGRhdGVkKGUsdCxyKXt9Y2FwdHVyZVJlZmVyZW5jZShlLHQpe2xldCByPXRoaXNbdl1bZV07cmV0dXJuIHJ8fChyPShyLG4pPT57bGV0IGk9cjtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiYoaT10LmNhbGwodGhpcyxpLG4pKSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLHtbZV06e3dyaXRhYmxlOiEwLGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwLHZhbHVlOml9fSl9LFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJih0aGlzW3ZdPXIpLHIpfWZvcmNlVXBkYXRlKCl7dGhpc1tiXSgpfWdldFN0YXRlKGUsdCl7bGV0IHI9dGhpcy5zdGF0ZTtpZigwPT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gcjtpZihpbnN0YW5jZU9mKGUsXCJvYmplY3RcIikpe2xldCB0PU9iamVjdC5rZXlzKGUpLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpKSxuPXt9O2ZvcihsZXQgaT0wLG89dC5sZW5ndGg7aTxvO2krKyl7bGV0IG89dFtpXSxbcyxhXT1mZXRjaERlZXBQcm9wZXJ0eShyLG8sZVtvXSwhMCk7bnVsbCE9YSYmKG5bYV09cyl9cmV0dXJuIG59cmV0dXJuIGZldGNoRGVlcFByb3BlcnR5KHIsZSx0KX1zZXRTdGF0ZShlKXtpZighaXNWYWxpZFN0YXRlT2JqZWN0KGUpKXRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgdmFsdWUgZm9yIFwidGhpcy5zZXRTdGF0ZVwiOiBcIiR7ZX1cIi4gUHJvdmlkZWQgXCJzdGF0ZVwiIG11c3QgYmUgYW4gaXRlcmFibGUgb2JqZWN0LmApO09iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSxlKX1zZXRTdGF0ZVBhc3NpdmUoZSl7aWYoIWlzVmFsaWRTdGF0ZU9iamVjdChlKSl0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIHZhbHVlIGZvciBcInRoaXMuc2V0U3RhdGVQYXNzaXZlXCI6IFwiJHtlfVwiLiBQcm92aWRlZCBcInN0YXRlXCIgbXVzdCBiZSBhbiBpdGVyYWJsZSBvYmplY3QuYCk7dHJ5e3RoaXNbZ109ITAsT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLGUpfWZpbmFsbHl7dGhpc1tnXT0hMX19c2hvdWxkVXBkYXRlKCl7cmV0dXJuITB9ZGVzdHJveSgpe2RlbGV0ZSB0aGlzLnN0YXRlLGRlbGV0ZSB0aGlzLnByb3BzLGRlbGV0ZSB0aGlzLmNvbnRleHQsZGVsZXRlIHRoaXNbdl0sdGhpcy5jbGVhckFsbERlYm91bmNlcygpfXJlbmRlcldhaXRpbmcoKXt9cmVuZGVyKGUpe3JldHVybiBlfXVwZGF0ZWQoKXt9Y29tYmluZVdpdGgoZSwuLi50KXtsZXQgcj1uZXcgU2V0O2ZvcihsZXQgbj0wLGk9dC5sZW5ndGg7bjxpO24rKyl7bGV0IGk9dFtuXTtpZihpKWlmKGluc3RhbmNlT2YoaSxcInN0cmluZ1wiKSl7bGV0IHQ9aS5zcGxpdChlKS5maWx0ZXIoaXNOb3RFbXB0eSk7Zm9yKGxldCBlPTAsbj10Lmxlbmd0aDtlPG47ZSsrKXtsZXQgbj10W2VdO3IuYWRkKG4pfX1lbHNlIGlmKEFycmF5LmlzQXJyYXkoaSkpe2xldCBlPWkuZmlsdGVyKChlPT4hIWUmJiEhaW5zdGFuY2VPZihlLFwic3RyaW5nXCIpJiZpc05vdEVtcHR5KGUpKSk7Zm9yKGxldCB0PTAsbj1lLmxlbmd0aDt0PG47dCsrKXtsZXQgbj1lW3RdO3IuYWRkKG4pfX1lbHNlIGlmKGluc3RhbmNlT2YoaSxcIm9iamVjdFwiKSl7bGV0IGU9T2JqZWN0LmtleXMoaSk7Zm9yKGxldCB0PTAsbj1lLmxlbmd0aDt0PG47dCsrKXtsZXQgbj1lW3RdO2lbbl0/ci5hZGQobik6ci5kZWxldGUobil9fX1yZXR1cm4gQXJyYXkuZnJvbShyKS5qb2luKGV8fFwiXCIpfWNsYXNzZXMoLi4uZSl7cmV0dXJuIHRoaXMuY29tYmluZVdpdGgoXCIgXCIsLi4uZSl9ZXh0cmFjdENoaWxkcmVuKGUsdCxyKXtsZXQgbj1yfHx7fSxpPXt9LG89ZSxzPUFycmF5LmlzQXJyYXkobyk7cmV0dXJuIGkucmVtYWluaW5nQ2hpbGRyZW49dC5maWx0ZXIoKGU9PiEoZT0+e2xldCB0PWUuVHlwZTtpZihpbnN0YW5jZU9mKHQsXCJzdHJpbmdcIikmJih0PXQudG9Mb3dlckNhc2UoKSkscylmb3IobGV0IHI9MCxzPW8ubGVuZ3RoO3I8cztyKyspe2xldCBzPW9bcl07aWYoaW5zdGFuY2VPZihzLFwic3RyaW5nXCIpJiYocz1zLnRvTG93ZXJDYXNlKCkpLHQ9PT1zKXJldHVybiBpW3NdJiZuLm11bHRpcGxlPyhBcnJheS5pc0FycmF5KGlbc10pfHwoaVtzXT1baVtzXV0pLGlbc10ucHVzaChlKSk6aVtzXT1lLCEwfWVsc2V7bGV0IHI9T2JqZWN0LmtleXMobyk7Zm9yKGxldCBzPTAsYT1yLmxlbmd0aDtzPGE7cysrKXtsZXQgYSxsPXJbc10sYz1vW2xdO2lmKGE9aW5zdGFuY2VPZihjLFJlZ0V4cCk/Yy50ZXN0KHQpOmluc3RhbmNlT2YoYyxcInN0cmluZ1wiKT9jLnRvTG93ZXJDYXNlKCk9PT10OmM9PT10LGEpcmV0dXJuIGlbY10mJm4ubXVsdGlwbGU/KEFycmF5LmlzQXJyYXkoaVtjXSl8fChpW2NdPVtpW2NdXSksaVtjXS5wdXNoKGUpKTppW2NdPWUsITB9fXJldHVybiExfSkoZSkpKSxpfW1hcENoaWxkcmVuKGUsdCl7bGV0IHI9QXJyYXkuaXNBcnJheSh0KT90Olt0XTtyZXR1cm4gci5tYXAoKHQ9PntpZighdClyZXR1cm4gdDtsZXQgbj10LlR5cGU7aWYoIWluc3RhbmNlT2YobixcInN0cmluZ1wiKSlyZXR1cm4gdDtuPW4udG9Mb3dlckNhc2UoKTtsZXQgaT1PYmplY3Qua2V5cyhlKTtmb3IobGV0IG89MCxzPWkubGVuZ3RoO288cztvKyspe2xldCBzPWlbb107aWYocy50b0xvd2VyQ2FzZSgpIT09biljb250aW51ZTtsZXQgYT1lW3NdO2lmKGEpcmV0dXJuIGEuY2FsbCh0aGlzLHQsbyxyKX1yZXR1cm4gdH0pKX1kZWJvdW5jZShlLHQscil7Y29uc3QgY2xlYXJQZW5kaW5nVGltZW91dD0oKT0+e2kmJmkudGltZW91dCYmKGNsZWFyVGltZW91dChpLnRpbWVvdXQpLGkudGltZW91dD1udWxsKX07dmFyIG49cnx8XCJcIitlO3RoaXMuZGVib3VuY2VUaW1lcnN8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiZGVib3VuY2VUaW1lcnNcIix7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6e319KTt2YXIgaT10aGlzLmRlYm91bmNlVGltZXJzW25dO2l8fChpPXRoaXMuZGVib3VuY2VUaW1lcnNbbl09e30pLGkuZnVuYz1lLGNsZWFyUGVuZGluZ1RpbWVvdXQoKTt2YXIgbz1pLnByb21pc2U7aWYoIW98fCFvLmlzUGVuZGluZygpKXtsZXQgZSx0PVwicGVuZGluZ1wiOyhvPWkucHJvbWlzZT1uZXcgUHJvbWlzZSgodD0+e2U9dH0pKSkucmVzb2x2ZT0oKT0+e2lmKFwicGVuZGluZ1wiPT09dClpZih0PVwiZnVsZmlsbGVkXCIsY2xlYXJQZW5kaW5nVGltZW91dCgpLHRoaXMuZGVib3VuY2VUaW1lcnNbbl09bnVsbCxcImZ1bmN0aW9uXCI9PXR5cGVvZiBpLmZ1bmMpe3ZhciByPWkuZnVuYy5jYWxsKHRoaXMpO3IgaW5zdGFuY2VvZiBQcm9taXNlfHxyJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByLnRoZW4/ci50aGVuKCh0PT5lKHQpKSk6ZShyKX1lbHNlIGUoKX0sby5jYW5jZWw9KCk9Pnt0PVwicmVqZWN0ZWRcIixjbGVhclBlbmRpbmdUaW1lb3V0KCksdGhpcy5kZWJvdW5jZVRpbWVyc1tuXT1udWxsLG8ucmVzb2x2ZSgpfSxvLmlzUGVuZGluZz0oKT0+XCJwZW5kaW5nXCI9PT10fXJldHVybiBpLnRpbWVvdXQ9c2V0VGltZW91dChvLnJlc29sdmUsbnVsbD09dD8yNTA6dCksb31jbGVhckRlYm91bmNlKGUpe2lmKHRoaXMuZGVib3VuY2VUaW1lcnMpe3ZhciB0PXRoaXMuZGVib3VuY2VUaW1lcnNbZV07bnVsbCE9dCYmKHQudGltZW91dCYmY2xlYXJUaW1lb3V0KHQudGltZW91dCksdC5wcm9taXNlJiZ0LnByb21pc2UuY2FuY2VsKCkpfX1jbGVhckFsbERlYm91bmNlcygpe2xldCBlPXRoaXMuZGVib3VuY2VUaW1lcnN8fHt9LHQ9T2JqZWN0LmtleXMoZSk7Zm9yKGxldCBlPTAscj10Lmxlbmd0aDtlPHI7ZSsrKXRoaXMuY2xlYXJEZWJvdW5jZSh0W2VdKX1nZXRFbGVtZW50RGF0YShlKXtsZXQgdD1ULmdldChlKTtyZXR1cm4gdHx8KHQ9e30sVC5zZXQoZSx0KSksdH1tZW1vaXplKGUpe2xldCByLG47cmV0dXJuIGZ1bmN0aW9uKC4uLmkpe2xldCBvPXQoLi4uaSk7aWYobyE9PXIpe2xldCB0PWUuYXBwbHkodGhpcyxpKTtyPW8sbj10fXJldHVybiBufX10b1Rlcm0oZSl7aWYoaXNKaWJpc2goZSkpe2xldCB0PWNvbnN0cnVjdEppYihlKTtyZXR1cm4gdC5UeXBlPT09VGVybXx8dC5UeXBlJiZ0LlR5cGVbUF0/ZTpoKFRlcm0sdC5wcm9wcykoLi4udC5jaGlsZHJlbil9cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGU/aChUZXJtKShlKTplfX1jb25zdCBQPVN5bWJvbC5mb3IoXCJAamlicy9pc1Rlcm1cIik7Y2xhc3MgVGVybSBleHRlbmRzIENvbXBvbmVudHtyZXNvbHZlVGVybShlKXtsZXQgdD10aGlzLmNvbnRleHQuX3Rlcm1SZXNvbHZlcjtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KXJldHVybiB0LmNhbGwodGhpcyxlKTtsZXQgcj1lLmNoaWxkcmVufHxbXTtyZXR1cm4gcltyLmxlbmd0aC0xXXx8XCJcIn1yZW5kZXIoZSl7bGV0IHQ9dGhpcy5yZXNvbHZlVGVybSh7Y2hpbGRyZW46ZSxwcm9wczp0aGlzLnByb3BzfSk7cmV0dXJuIGgoXCJTUEFOXCIsdGhpcy5wcm9wcykodCl9fVRlcm1bUF09ITA7Y29uc3QgXz1TeW1ib2wuZm9yKFwiQGppYnMvbm9kZS9jb250ZXh0SURcIik7Y2xhc3MgUm9vdE5vZGV7c3RhdGljIENPTlRFWFRfSUQ9Xztjb25zdHJ1Y3RvcihlLHQscixuKXtsZXQgaT1udWxsOyExIT09dGhpcy5jb25zdHJ1Y3Rvci5IQVNfQ09OVEVYVCYmKGV8fHRoaXMuY3JlYXRlQ29udGV4dCkmJihpPShlfHx0aGlzKS5jcmVhdGVDb250ZXh0KHIsdGhpcy5vbkNvbnRleHRVcGRhdGU/dGhpcy5vbkNvbnRleHRVcGRhdGU6dm9pZCAwLHRoaXMpKSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLHtUWVBFOntlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMSxnZXQ6KCk9PnRoaXMuY29uc3RydWN0b3IuVFlQRSxzZXQ6KCk9Pnt9fSxpZDp7d3JpdGFibGU6ITEsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITEsdmFsdWU6Z2VuZXJhdGVVVUlEKCl9LHJlbmRlcmVyOnt3cml0YWJsZTohMCxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTplfSxwYXJlbnROb2RlOnt3cml0YWJsZTohMCxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTp0fSxjaGlsZE5vZGVzOnt3cml0YWJsZTohMCxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTpuZXcgTWFwfSxjb250ZXh0OntlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCxnZXQ6KCk9Pmksc2V0OigpPT57fX0sZGVzdHJveWluZzp7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6ITF9LHJlbmRlclByb21pc2U6e3dyaXRhYmxlOiEwLGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwLHZhbHVlOm51bGx9LHJlbmRlckZyYW1lOnt3cml0YWJsZTohMCxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTowfSxqaWI6e3dyaXRhYmxlOiEwLGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwLHZhbHVlOm59LG5hdGl2ZUVsZW1lbnQ6e3dyaXRhYmxlOiEwLGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwLHZhbHVlOm51bGx9fSl9cmVzb2x2ZUNoaWxkcmVuKGUpe3JldHVybiByZXNvbHZlQ2hpbGRyZW4uY2FsbCh0aGlzLGUpfWlzSmliKGUpe3JldHVybiBpc0ppYmlzaChlKX1jb25zdHJ1Y3RKaWIoZSl7cmV0dXJuIGNvbnN0cnVjdEppYihlKX1nZXRDYWNoZUtleSgpe2xldHtUeXBlOmUscHJvcHM6cn09dGhpcy5qaWJ8fHt9O3JldHVybiB0KGUsci5rZXkpfXVwZGF0ZUppYihlKXt0aGlzLmppYj1lfWNsZWFyQ2hpbGRyZW4oKXt0aGlzLmNoaWxkTm9kZXMuY2xlYXIoKX1yZW1vdmVDaGlsZChlKXtsZXQgdD1lLmdldENhY2hlS2V5KCk7dGhpcy5jaGlsZE5vZGVzLmRlbGV0ZSh0KX1hZGRDaGlsZChlLHQpe2xldCByPXR8fGUuZ2V0Q2FjaGVLZXkoKTt0aGlzLmNoaWxkTm9kZXMuc2V0KHIsZSl9Z2V0Q2hpbGQoZSl7cmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5nZXQoZSl9Z2V0Q2hpbGRyZW4oKXtyZXR1cm4gdGhpcy5jaGlsZE5vZGVzfWdldFRoaXNOb2RlT3JDaGlsZE5vZGVzKCl7cmV0dXJuIHRoaXN9Z2V0Q2hpbGRyZW5Ob2Rlcygpe2xldCBlPVtdO2ZvcihsZXQgdCBvZiB0aGlzLmNoaWxkTm9kZXMudmFsdWVzKCkpZT1lLmNvbmNhdCh0LmdldFRoaXNOb2RlT3JDaGlsZE5vZGVzKCkpO3JldHVybiBlLmZpbHRlcihCb29sZWFuKX1hc3luYyBkZXN0cm95KGUpe2lmKCFlJiZ0aGlzLmRlc3Ryb3lpbmcpcmV0dXJuO3RoaXMuZGVzdHJveWluZz0hMCx0aGlzLnJlbmRlclByb21pc2UmJmF3YWl0IHRoaXMucmVuZGVyUHJvbWlzZSxhd2FpdCB0aGlzLmRlc3Ryb3lGcm9tRE9NKHRoaXMuY29udGV4dCx0aGlzKTtsZXQgdD1bXTtmb3IobGV0IGUgb2YgdGhpcy5jaGlsZE5vZGVzLnZhbHVlcygpKXQucHVzaChlLmRlc3Ryb3koKSk7dGhpcy5jaGlsZE5vZGVzLmNsZWFyKCksYXdhaXQgUHJvbWlzZS5hbGwodCksdGhpcy5uYXRpdmVFbGVtZW50PW51bGwsdGhpcy5wYXJlbnROb2RlPW51bGwsdGhpcy5jb250ZXh0PW51bGwsdGhpcy5qaWI9bnVsbH1pc1ZhbGlkQ2hpbGQoZSl7cmV0dXJuIGlzVmFsaWRDaGlsZChlKX1pc0l0ZXJhYmxlQ2hpbGQoZSl7cmV0dXJuIGlzSXRlcmFibGVDaGlsZChlKX1wcm9wc0RpZmZlcihlLHQscil7cmV0dXJuIHByb3BzRGlmZmVyKGUsdCxyKX1jaGlsZHJlbkRpZmZlcihlLHQpe3JldHVybiBjaGlsZHJlbkRpZmZlcihlLHQpfWFzeW5jIHJlbmRlciguLi5lKXtpZih0aGlzLmRlc3Ryb3lpbmcpcmV0dXJuO3RoaXMucmVuZGVyRnJhbWUrKztsZXQgdD10aGlzLnJlbmRlckZyYW1lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMuX3JlbmRlcj90aGlzLnJlbmRlclByb21pc2U9dGhpcy5fcmVuZGVyKC4uLmUpLnRoZW4oKGFzeW5jIGU9Pih0Pj10aGlzLnJlbmRlckZyYW1lJiZhd2FpdCB0aGlzLnN5bmNET00odGhpcy5jb250ZXh0LHRoaXMpLHRoaXMucmVuZGVyUHJvbWlzZT1udWxsLGUpKSkuY2F0Y2goKGU9Pnt0aHJvdyB0aGlzLnJlbmRlclByb21pc2U9bnVsbCxlfSkpOmF3YWl0IHRoaXMuc3luY0RPTSh0aGlzLmNvbnRleHQsdGhpcyksdGhpcy5yZW5kZXJQcm9taXNlfWdldFBhcmVudElEKCl7aWYodGhpcy5wYXJlbnROb2RlKXJldHVybiB0aGlzLnBhcmVudE5vZGUuaWR9YXN5bmMgZGVzdHJveUZyb21ET00oZSx0KXtpZih0aGlzLnJlbmRlcmVyKXJldHVybiBhd2FpdCB0aGlzLnJlbmRlcmVyLmRlc3Ryb3lGcm9tRE9NKGUsdCl9YXN5bmMgc3luY0RPTShlLHQpe2lmKHRoaXMucmVuZGVyZXIpcmV0dXJuIGF3YWl0IHRoaXMucmVuZGVyZXIuc3luY0RPTShlLHQpfX1jb25zdCBqPTFuO2xldCBFPWo7Y29uc3QgQz1TeW1ib2wuZm9yKFwiQGppYnNGb3JjZVJlZmxvd1wiKSxTPXtKSUJfQkFSUkVOOmEsSklCX1BST1hZOmwsSklCX1JBV19URVhUOmMsSklCOnUsSklCX0NISUxEX0lOREVYX1BST1A6ZCxKaWIsaXNKaWJpc2gsY29uc3RydWN0SmliLHJlc29sdmVDaGlsZHJlbn0sRD17VVBEQVRFX0VWRU5UOnAsUVVFVUVfVVBEQVRFX01FVEhPRDpiLEZMVVNIX1VQREFURV9NRVRIT0Q6bSxJTklUX01FVEhPRDp5LFNLSVBfU1RBVEVfVVBEQVRFUzpnLFBFTkRJTkdfU1RBVEVfVVBEQVRFOncsTEFTVF9SRU5ERVJfVElNRTpOLFBSRVZJT1VTX1NUQVRFOk99LHg9e0NPTlRFWFRfSUQ6Um9vdE5vZGUuQ09OVEVYVF9JRCxGT1JDRV9SRUZMT1c6QyxSb290Tm9kZSxSZW5kZXJlcjpjbGFzcyBSZW5kZXJlciBleHRlbmRzIFJvb3ROb2Rle3N0YXRpYyBSb290Tm9kZT1Sb290Tm9kZTtjb25zdHJ1Y3RvcihlKXtzdXBlcihudWxsLG51bGwsbnVsbCksT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcyx7b3B0aW9uczp7d3JpdGFibGU6ITEsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITEsdmFsdWU6ZXx8e319fSksdGhpcy5yZW5kZXJlcj10aGlzLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUudGVybVJlc29sdmVyJiYodGhpcy5jb250ZXh0Ll90ZXJtUmVzb2x2ZXI9ZS50ZXJtUmVzb2x2ZXIpfWdldE9wdGlvbnMoKXtyZXR1cm4gdGhpcy5vcHRpb25zfXJlc29sdmVUZXJtKGUpe2xldHt0ZXJtUmVzb2x2ZXI6dH09dGhpcy5nZXRPcHRpb25zKCk7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdClyZXR1cm4gdC5jYWxsKHRoaXMsZSk7bGV0IHI9ZS5jaGlsZHJlbnx8W107cmV0dXJuIHJbci5sZW5ndGgtMV18fFwiXCJ9Y3JlYXRlQ29udGV4dChlLHQscil7bGV0IG49T2JqZWN0LmNyZWF0ZShudWxsKSxpPWU/ZVtfXTpqO3JldHVybiBuZXcgUHJveHkobix7Z2V0Oih0LHIpPT57aWYocj09PV8pe2xldCB0PWU/ZVtfXTpqO3JldHVybiB0Pmk/dDppfXJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxyKT90W3JdOmU/ZVtyXTp2b2lkIDB9LHNldDooZSxuLG8pPT4obj09PV98fGVbbl09PT1vfHwoaT0rK0UsZVtuXT1vLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJnQuY2FsbChyLHIpKSwhMCl9KX19fX0pKCk7dmFyIG89aS4kLHM9aS53QSxhPWkuejgsbD1pLkVsLGM9aS5wdix1PWkuUmgsZD1pLmNRLGg9aS5CZSxmPWkuZDU7Y29uc3R7aXNKaWJpc2g6cCxjb25zdHJ1Y3RKaWI6YixKSUJfUFJPWFk6bSxKSUJfUkFXX1RFWFQ6eSxKSUJfQ0hJTERfSU5ERVhfUFJPUDpnfT1sLHtSb290Tm9kZTp3fT1jO2NsYXNzIEZyYWdtZW50Tm9kZSBleHRlbmRzIHd7c3RhdGljIFRZUEU9MTE7Z2V0VGhpc05vZGVPckNoaWxkTm9kZXMoKXtyZXR1cm4gdGhpcy5nZXRDaGlsZHJlbk5vZGVzKCl9YXN5bmMgX3JlbmRlcigpe2xldCBlPW5ldyBNYXAsdD10aGlzLnJlbmRlckZyYW1lLHtjaGlsZHJlbjpyfT10aGlzLmppYnx8e307aWYoZC5pbnN0YW5jZU9mKHIsXCJwcm9taXNlXCIpJiYocj1hd2FpdCByKSx0aGlzLmRlc3Ryb3lpbmd8fHQ8dGhpcy5yZW5kZXJGcmFtZSlyZXR1cm47dGhpcy5pc0l0ZXJhYmxlQ2hpbGQocil8fCFwKHIpJiYhdGhpcy5pc1ZhbGlkQ2hpbGQocil8fChyPVtyXSk7Y29uc3QgZ2V0SW5kZXhGb3JUeXBlPXQ9PntsZXQgcj0oZS5nZXQodCl8fDApKzE7cmV0dXJuIGUuc2V0KHQscikscn07bGV0IG49ITEsaT1kLml0ZXJhdGUociwoKHt2YWx1ZTplLGtleTpyLGluZGV4OmksU1RPUDpvfSk9Pm58fHRoaXMuZGVzdHJveWluZ3x8dDx0aGlzLnJlbmRlckZyYW1lP286KGFzeW5jKCk9PntsZXQgbz1kLmluc3RhbmNlT2YoZSxcInByb21pc2VcIik/YXdhaXQgZTplO2lmKGQuaXNFbXB0eShvKXx8T2JqZWN0LmlzKG8sTmFOKXx8T2JqZWN0LmlzKG8sMS8wKSlyZXR1cm47aWYodGhpcy5kZXN0cm95aW5nfHx0PHRoaXMucmVuZGVyRnJhbWUpcmV0dXJuIHZvaWQobj0hMCk7bGV0IHMsYSxsPXAobyk7aWYoIWwmJnRoaXMuaXNJdGVyYWJsZUNoaWxkKG8pP2E9e1R5cGU6bSxjaGlsZHJlbjpvLHByb3BzOntrZXk6YEBqaWIvaW50ZXJuYWxfZnJhZ21lbnRfJHtnZXRJbmRleEZvclR5cGUobSl9YH19OiFsJiZ0aGlzLmlzVmFsaWRDaGlsZChvKT8obz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBvLnZhbHVlT2Y/by52YWx1ZU9mKCk6byxhPXtUeXBlOnksY2hpbGRyZW46byxwcm9wczp7a2V5OmBAamliL2ludGVybmFsX3RleHRfJHtnZXRJbmRleEZvclR5cGUoeSl9YH19KTpsJiYoYT1iKG8pLGQuaW5zdGFuY2VPZihhLFwicHJvbWlzZVwiKSYmKGE9YXdhaXQgYSkpLHRoaXMuZGVzdHJveWluZ3x8dDx0aGlzLnJlbmRlckZyYW1lKXJldHVybiB2b2lkKG49ITApO2xldCBjLHtUeXBlOnUscHJvcHM6Zn09YTtjPWkhPT1yP3I6bnVsbD09Zi5rZXl8fE9iamVjdC5pcyhmLmtleSxOYU4pfHxPYmplY3QuaXMoZi5rZXksMS8wKT9gQGppYi9pbnRlcm5hbF9rZXlfJHtnZXRJbmRleEZvclR5cGUodSl9YDpmLmtleSxmW2ddPWksZi5rZXk9YyxhLnByb3BzPWY7bGV0IHc9aCh1LGYua2V5KSxOPXRoaXMuZ2V0Q2hpbGQodyk7cmV0dXJuIE4/KHM9ITEsTi51cGRhdGVKaWIoYSkpOihzPSEwLE49dGhpcy5yZW5kZXJlci5jb25zdHJ1Y3ROb2RlRnJvbUppYihhLHRoaXMsdGhpcy5jb250ZXh0KSksYXdhaXQgTi5yZW5kZXIoKSx7bm9kZTpOLGNhY2hlS2V5OncsY3JlYXRlZDpzfX0pKCkpKSxvPWF3YWl0IFByb21pc2UuYWxsKGkpO289by5maWx0ZXIoKGU9PiEhZSkpO2xldCBzPVtdO2lmKHRoaXMuZGVzdHJveWluZ3x8dDx0aGlzLnJlbmRlckZyYW1lKXtmb3IobGV0IGU9MCx0PW8ubGVuZ3RoO2U8dDtlKyspe2xldCB0PW9bZV0se25vZGU6cixjcmVhdGVkOm59PXQ7biYmciYmcy5wdXNoKHIuZGVzdHJveSgpKX1yZXR1cm4gdm9pZChzLmxlbmd0aD4wJiZhd2FpdCBQcm9taXNlLmFsbChzKSl9bGV0IGE9bmV3IE1hcDtmb3IobGV0IGUgb2Ygbyl7bGV0e2NhY2hlS2V5OnQsbm9kZTpyfT1lO2Euc2V0KHQscil9bGV0IGw9W107Zm9yKGxldFtlLHRdb2YgdGhpcy5nZXRDaGlsZHJlbigpKXthLmhhcyhlKXx8KGwucHVzaCh0KSx0aGlzLnJlbW92ZUNoaWxkKHQpKX10aGlzLmNsZWFyQ2hpbGRyZW4oKTtmb3IobGV0W2UsdF1vZiBhKXRoaXMuYWRkQ2hpbGQodCxlKTthLmNsZWFyKCk7Zm9yKGxldCBlPTAsdD1sLmxlbmd0aDtlPHQ7ZSsrKXtsZXQgdD1sW2VdO3MucHVzaCh0LmRlc3Ryb3koKSl9cy5sZW5ndGg+MCYmYXdhaXQgUHJvbWlzZS5hbGwocyl9YXN5bmMgZGVzdHJveUZyb21ET00oZSx0KXtpZih0IT09dGhpcyYmdGhpcy5wYXJlbnROb2RlKXJldHVybiBhd2FpdCB0aGlzLnBhcmVudE5vZGUuZGVzdHJveUZyb21ET00oZSx0KX1hc3luYyBzeW5jRE9NKGUsdCl7aWYoIXRoaXMucGFyZW50Tm9kZSlyZXR1cm47bGV0IHI9ZSxuPXQ7cmV0dXJuIG49PT10aGlzJiYocj10aGlzLnBhcmVudE5vZGUuY29udGV4dCxuPXRoaXMucGFyZW50Tm9kZSksYXdhaXQgdGhpcy5wYXJlbnROb2RlLnN5bmNET00ocixuKX19Y29uc3R7Um9vdE5vZGU6Tn09YztjbGFzcyBUZXh0Tm9kZSBleHRlbmRzIE57c3RhdGljIFRZUEU9MztzdGF0aWMgSEFTX0NPTlRFWFQ9ITF9Y29uc3R7SklCX1BST1hZOk99PWwse1Jvb3ROb2RlOnZ9PWM7Y2xhc3MgTmF0aXZlTm9kZSBleHRlbmRzIHZ7c3RhdGljIFRZUEU9MTtjb25zdHJ1Y3RvciguLi5lKXtzdXBlciguLi5lKSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLHtmcmFnbWVudE5vZGU6e3dyaXRhYmxlOiEwLGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwLHZhbHVlOm51bGx9fSl9YXN5bmMgZGVzdHJveSgpe2lmKCF0aGlzLmRlc3Ryb3lpbmcpcmV0dXJuIHRoaXMuZGVzdHJveWluZz0hMCxhd2FpdCB0aGlzLmRlc3Ryb3lGcmFnbWVudE5vZGUoKSxhd2FpdCBzdXBlci5kZXN0cm95KCEwKX1hc3luYyBkZXN0cm95RnJhZ21lbnROb2RlKCl7dGhpcy5mcmFnbWVudE5vZGUmJih0aGlzLnJlbW92ZUNoaWxkKHRoaXMuZnJhZ21lbnROb2RlKSxhd2FpdCB0aGlzLmZyYWdtZW50Tm9kZS5kZXN0cm95KCksdGhpcy5mcmFnbWVudE5vZGU9bnVsbCl9YXN5bmMgX3JlbmRlcigpe2lmKHRoaXMuZGVzdHJveWluZylyZXR1cm47bGV0e1R5cGU6ZSxwcm9wczp0LGNoaWxkcmVuOnJ9PXRoaXMuamlifHx7fTtpZihlKWlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LFwiaW5uZXJIVE1MXCIpKWF3YWl0IHRoaXMuZGVzdHJveUZyYWdtZW50Tm9kZSgpO2Vsc2V7bGV0IGU9e1R5cGU6Tyxwcm9wczp7fSxjaGlsZHJlbjpyfSx0PXRoaXMuZnJhZ21lbnROb2RlO3Q/dGhpcy5mcmFnbWVudE5vZGUudXBkYXRlSmliKGUpOih0PXRoaXMuZnJhZ21lbnROb2RlPXRoaXMucmVuZGVyZXIuY29uc3RydWN0Tm9kZUZyb21KaWIoZSx0aGlzLHRoaXMuY29udGV4dCksdGhpcy5hZGRDaGlsZCh0KSksYXdhaXQgdC5yZW5kZXIoKX19fWNsYXNzIFBvcnRhbE5vZGUgZXh0ZW5kcyBOYXRpdmVOb2Rle3N0YXRpYyBUWVBFPTE1fWNvbnN0e0pJQl9QUk9YWTpULEpJQl9DSElMRF9JTkRFWF9QUk9QOlB9PWwse0NPTlRFWFRfSUQ6XyxSb290Tm9kZTpqfT1jLHtJTklUX01FVEhPRDpFLFVQREFURV9FVkVOVDpDLFBFTkRJTkdfU1RBVEVfVVBEQVRFOlMsTEFTVF9SRU5ERVJfVElNRTpELFNLSVBfU1RBVEVfVVBEQVRFUzp4fT1hO2NsYXNzIENvbXBvbmVudE5vZGUgZXh0ZW5kcyBqe3N0YXRpYyBUWVBFPTIwO2NvbnN0cnVjdG9yKC4uLmUpe3N1cGVyKC4uLmUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMse2ZyYWdtZW50Tm9kZTp7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6bnVsbH0sY29tcG9uZW50Ont3cml0YWJsZTohMCxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTpudWxsfSxwZW5kaW5nQ29udGV4dFVwZGF0ZTp7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6bnVsbH0scHJldmlvdXNTdGF0ZTp7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6e319LGxhc3RDb250ZXh0SUQ6e3dyaXRhYmxlOiEwLGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwLHZhbHVlOnRoaXMuY29udGV4dFtfXXx8MW59LGNhY2hlZFJlbmRlclJlc3VsdDp7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6bnVsbH19KX1nZXRUaGlzTm9kZU9yQ2hpbGROb2Rlcygpe2lmKHRoaXMuZnJhZ21lbnROb2RlKXJldHVybiB0aGlzLmZyYWdtZW50Tm9kZS5nZXRDaGlsZHJlbk5vZGVzKCl9bWVyZ2VDb21wb25lbnRQcm9wcyhlLHQpe3JldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksZXx8e30sdCl9ZmlyZVByb3BVcGRhdGVzKGUsdCl7bGV0IHI9dHx8e30sbj1uZXcgU2V0KE9iamVjdC5rZXlzKHIpLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHIpKSksaT1lfHx7fSxvPU9iamVjdC5rZXlzKGkpLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGkpKTtmb3IobGV0IGU9MCx0PW8ubGVuZ3RoO2U8dDtlKyspbi5hZGQob1tlXSk7Zm9yKGxldCBlIG9mIG4pe2xldCB0PWlbZV0sbj1yW2VdO3QhPT1uJiZ0aGlzLmNvbXBvbmVudC5vblByb3BVcGRhdGVkKGUsbix0KX19c2hvdWxkUmVuZGVyKGUsdCl7bGV0IHI9dGhpcy5jb21wb25lbnQ7aWYoIXIpcmV0dXJuITA7aWYodGhpcy5sYXN0Q29udGV4dElEPHRoaXMuY29udGV4dFtfXSlyZXR1cm4gdGhpcy5sYXN0Q29udGV4dElEPXRoaXMuY29udGV4dFtfXSx0aGlzLnByZXZpb3VzU3RhdGU9T2JqZWN0LmFzc2lnbih7fSxyLnN0YXRlKSx0aGlzLmZpcmVQcm9wVXBkYXRlcyhyLnByb3BzLGUpLHIucHJvcHM9dGhpcy5tZXJnZUNvbXBvbmVudFByb3BzKHIucHJvcHMsZSksITA7aWYodGhpcy5jaGlsZHJlbkRpZmZlcihyLmNoaWxkcmVuLHQpKXJldHVybiB0aGlzLmNvbXBvbmVudC5jaGlsZHJlbj10LnNsaWNlKCksdGhpcy5wcmV2aW91c1N0YXRlPU9iamVjdC5hc3NpZ24oe30sci5zdGF0ZSksdGhpcy5maXJlUHJvcFVwZGF0ZXMoci5wcm9wcyxlKSxyLnByb3BzPXRoaXMubWVyZ2VDb21wb25lbnRQcm9wcyhyLnByb3BzLGUpLCEwO2xldCBuPXRoaXMucHJldmlvdXNTdGF0ZXx8e307cmV0dXJuIHRoaXMucHJvcHNEaWZmZXIoci5wcm9wcyxlLFtcInJlZlwiLFwia2V5XCIsUF0sITApJiZyLnNob3VsZFVwZGF0ZShlLG4pPyh0aGlzLnByZXZpb3VzU3RhdGU9T2JqZWN0LmFzc2lnbih7fSxyLnN0YXRlKSx0aGlzLmZpcmVQcm9wVXBkYXRlcyhyLnByb3BzLGUpLHIucHJvcHM9dGhpcy5tZXJnZUNvbXBvbmVudFByb3BzKHIucHJvcHMsZSksITApOiEoIXRoaXMucHJvcHNEaWZmZXIobixyLnN0YXRlKXx8IXIuc2hvdWxkVXBkYXRlKGUsbikpJiYodGhpcy5wcmV2aW91c1N0YXRlPU9iamVjdC5hc3NpZ24oe30sci5zdGF0ZSksITApfWFzeW5jIGRlc3Ryb3koKXtpZighdGhpcy5kZXN0cm95aW5nKXJldHVybiB0aGlzLmRlc3Ryb3lpbmc9ITAsdGhpcy5jb21wb25lbnQmJih0aGlzLmppYiYmdGhpcy5qaWIucHJvcHMmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMuamliLnByb3BzLnJlZiYmdGhpcy5qaWIucHJvcHMucmVmLmNhbGwodGhpcy5jb21wb25lbnQsbnVsbCx0aGlzLmNvbXBvbmVudCksYXdhaXQgdGhpcy5jb21wb25lbnQuZGVzdHJveSgpLHRoaXMuY29tcG9uZW50PW51bGwpLHRoaXMuZnJhZ21lbnROb2RlJiYodGhpcy5yZW1vdmVDaGlsZCh0aGlzLmZyYWdtZW50Tm9kZSksYXdhaXQgdGhpcy5mcmFnbWVudE5vZGUuZGVzdHJveSgpLHRoaXMuZnJhZ21lbnROb2RlPW51bGwpLHRoaXMuY2FjaGVkUmVuZGVyUmVzdWx0PW51bGwsdGhpcy5wcmV2aW91c1N0YXRlPW51bGwsYXdhaXQgc3VwZXIuZGVzdHJveSghMCl9b25Db250ZXh0VXBkYXRlKCl7aWYodGhpcy5jb21wb25lbnQmJiF0aGlzLmNvbXBvbmVudFtTXSlyZXR1cm4gdGhpcy5wZW5kaW5nQ29udGV4dFVwZGF0ZXx8KHRoaXMucGVuZGluZ0NvbnRleHRVcGRhdGU9UHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKCk9Pnt0aGlzLmRlc3Ryb3lpbmd8fCF0aGlzLmNvbXBvbmVudHx8dGhpcy5jb21wb25lbnRbU118fCh0aGlzLnBlbmRpbmdDb250ZXh0VXBkYXRlPW51bGwsdGhpcy5yZW5kZXIoKSl9KSkpLHRoaXMucGVuZGluZ0NvbnRleHRVcGRhdGV9YXN5bmMgX3JlbmRlcihlKXtsZXQgdD10aGlzLnJlbmRlckZyYW1lLHtUeXBlOnIscHJvcHM6bixjaGlsZHJlbjppfT10aGlzLmppYnx8e307aWYoIXIpcmV0dXJuO2k9dGhpcy5qaWIuY2hpbGRyZW49YXdhaXQgdGhpcy5yZXNvbHZlQ2hpbGRyZW4oaSk7Y29uc3QgZmluYWxpemVSZW5kZXI9YXN5bmMoZSx0KT0+e2lmKHRoaXMuZGVzdHJveWluZ3x8dDx0aGlzLnJlbmRlckZyYW1lfHwhdGhpcy5jb21wb25lbnQpcmV0dXJuO3RoaXMuY2FjaGVkUmVuZGVyUmVzdWx0PWUsdGhpcy5jb21wb25lbnRbRF09ZC5ub3coKTtsZXQgcj10aGlzLmZyYWdtZW50Tm9kZSxuPXtUeXBlOlQscHJvcHM6e30sY2hpbGRyZW46ZX07cj9yLnVwZGF0ZUppYihuKToocj10aGlzLmZyYWdtZW50Tm9kZT10aGlzLnJlbmRlcmVyLmNvbnN0cnVjdE5vZGVGcm9tSmliKG4sdGhpcyx0aGlzLmNvbnRleHQpLHRoaXMuYWRkQ2hpbGQocikpLGF3YWl0IHIucmVuZGVyKCl9LGhhbmRsZVJlbmRlckVycm9yPWU9PntpZih0aGlzLmRlc3Ryb3lpbmd8fHQ8dGhpcy5yZW5kZXJGcmFtZSlyZXR1cm47bGV0IHI7Y29uc29sZS5lcnJvcihlKSx0aGlzLmNvbXBvbmVudCYmKHRoaXMuY29tcG9uZW50W0RdPWQubm93KCkpO3RyeXtyPXRoaXMuY29tcG9uZW50JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLmNvbXBvbmVudC5yZW5kZXJFcnJvclN0YXRlP3RoaXMuY29tcG9uZW50LnJlbmRlckVycm9yU3RhdGUoZSk6W2Ake2UubWVzc2FnZX1cXG4ke2Uuc3RhY2t9YF19Y2F0Y2godCl7cj1bYCR7ZS5tZXNzYWdlfVxcbiR7ZS5zdGFja31gXX1yZXR1cm4gZmluYWxpemVSZW5kZXIocix0KX07aWYoISh0aGlzLmRlc3Ryb3lpbmd8fHQ8dGhpcy5yZW5kZXJGcmFtZSkpdHJ5e2lmKCEwIT09ZSYmdGhpcy5jb21wb25lbnQmJiF0aGlzLnNob3VsZFJlbmRlcihuLGkpKXJldHVybjtsZXQgbz10aGlzLmNvbXBvbmVudDtvfHwobz10aGlzLmNvbXBvbmVudD1uZXcgcih7Li4udGhpcy5qaWJ8fHt9LHByb3BzOnRoaXMubWVyZ2VDb21wb25lbnRQcm9wcyhudWxsLG4pLGNvbnRleHQ6dGhpcy5jb250ZXh0LGlkOnRoaXMuaWR9KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBvW0VdJiZvW0VdKCksby5vbihDLChlPT57ZT8odGhpcy5yZW5kZXJGcmFtZSsrLGZpbmFsaXplUmVuZGVyKGUsdGhpcy5yZW5kZXJGcmFtZSkpOnRoaXMucmVuZGVyKCEwKX0pKSxuJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnJlZiYmbi5yZWYuY2FsbChvLG8sbnVsbCkpLHRoaXMuY29tcG9uZW50W1NdJiYodGhpcy5jb21wb25lbnRbU109bnVsbCk7bGV0IHM9dGhpcy5jb21wb25lbnQucmVuZGVyKGkpO2lmKGQuaW5zdGFuY2VPZihzLFwicHJvbWlzZVwiKSl7bGV0IGU9dGhpcy5jb21wb25lbnQucmVuZGVyV2FpdGluZyh0aGlzLmNhY2hlZFJlbmRlclJlc3VsdCkscj0hMSxuPXNldFRpbWVvdXQoKGFzeW5jKCk9PntuPW51bGwsZC5pbnN0YW5jZU9mKGUsXCJwcm9taXNlXCIpJiYoZT1hd2FpdCBlKSxyfHxhd2FpdCBmaW5hbGl6ZVJlbmRlcihlLHQpfSksNSk7dHJ5e3M9YXdhaXQgcyxyPSEwLG4mJihjbGVhclRpbWVvdXQobiksbj1udWxsKSxhd2FpdCBmaW5hbGl6ZVJlbmRlcihzLHQpfWNhdGNoKGUpe2F3YWl0IGhhbmRsZVJlbmRlckVycm9yKGUpfX1lbHNlIGF3YWl0IGZpbmFsaXplUmVuZGVyKHMsdCl9Y2F0Y2goZSl7YXdhaXQgaGFuZGxlUmVuZGVyRXJyb3IoZSl9fWFzeW5jIGRlc3Ryb3lGcm9tRE9NKGUsdCl7aWYoIXRoaXMucGFyZW50Tm9kZSlyZXR1cm47bGV0IHI9ZSxuPXQ7cmV0dXJuIG49PT10aGlzJiYocj10aGlzLnBhcmVudE5vZGUuY29udGV4dCxuPXRoaXMucGFyZW50Tm9kZSksYXdhaXQgdGhpcy5wYXJlbnROb2RlLmRlc3Ryb3lGcm9tRE9NKHIsbil9YXN5bmMgc3luY0RPTShlLHQpe2lmKCF0aGlzLnBhcmVudE5vZGUpcmV0dXJuO2xldCByPWUsbj10O3JldHVybiBuPT09dGhpcyYmKHI9dGhpcy5wYXJlbnROb2RlLmNvbnRleHQsbj10aGlzLnBhcmVudE5vZGUpLGF3YWl0IHRoaXMucGFyZW50Tm9kZS5zeW5jRE9NKHIsbil9fWNvbnN0e1JlbmRlcmVyOkF9PWMse0pJQl9QUk9YWTpJLEpJQl9SQVdfVEVYVDpSfT1sO2NsYXNzIERPTVJlbmRlcmVyIGV4dGVuZHMgQXtzdGF0aWMgVFlQRT05O3N0YXRpYyBGcmFnbWVudE5vZGU9RnJhZ21lbnROb2RlO3N0YXRpYyBUZXh0Tm9kZT1UZXh0Tm9kZTtzdGF0aWMgTmF0aXZlTm9kZT1OYXRpdmVOb2RlO3N0YXRpYyBQb3J0YWxOb2RlPVBvcnRhbE5vZGU7c3RhdGljIENvbXBvbmVudE5vZGU9Q29tcG9uZW50Tm9kZTtjb25zdHJ1Y3RvcihlLHQpe3N1cGVyKHQpLE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMse3Jvb3ROb2RlOnt3cml0YWJsZTohMCxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTpudWxsfSxqaWI6e3dyaXRhYmxlOiEwLGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwLHZhbHVlOntUeXBlOmUscHJvcHM6e30sY2hpbGRyZW46W119fX0pfWlzUG9ydGFsTm9kZShlKXtyZXR1cm4vW15hLXpBLVowLTk6XS8udGVzdChlKX1jb25zdHJ1Y3ROb2RlRnJvbUppYihlLHQscil7bGV0e1R5cGU6bn09ZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP25ldyB0aGlzLmNvbnN0cnVjdG9yLkNvbXBvbmVudE5vZGUodGhpcyx0LHIsZSk6XCJzdHJpbmdcIj09dHlwZW9mIG4/dGhpcy5pc1BvcnRhbE5vZGUobik/bmV3IHRoaXMuY29uc3RydWN0b3IuUG9ydGFsTm9kZSh0aGlzLHQscixlKTpuZXcgdGhpcy5jb25zdHJ1Y3Rvci5OYXRpdmVOb2RlKHRoaXMsdCxyLGUpOm51bGw9PW58fG49PT1JP25ldyB0aGlzLmNvbnN0cnVjdG9yLkZyYWdtZW50Tm9kZSh0aGlzLHQscixlKTpuPT09Uj9uZXcgdGhpcy5jb25zdHJ1Y3Rvci5UZXh0Tm9kZSh0aGlzLHQscixlKTp2b2lkIDB9YXN5bmMgZGVzdHJveSgpe2lmKCF0aGlzLmRlc3Ryb3lpbmcpcmV0dXJuIHRoaXMuZGVzdHJveWluZz0hMCx0aGlzLnJvb3ROb2RlJiYoYXdhaXQgdGhpcy5yb290Tm9kZS5kZXN0cm95KCksdGhpcy5yb290Tm9kZT1udWxsKSxhd2FpdCBzdXBlci5kZXN0cm95KCEwKX1hc3luYyByZW5kZXIoZSl7aWYoIWUpdGhyb3cgbmV3IFR5cGVFcnJvcihgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9OjpyZW5kZXI6IEEgamliIG11c3QgYmUgcHJvdmlkZWQuYCk7cmV0dXJuIHRoaXMudXBkYXRlSmliKHsuLi50aGlzLmppYixjaGlsZHJlbjplfSksc3VwZXIucmVuZGVyKCl9YXN5bmMgX3JlbmRlcigpe2lmKHRoaXMuZGVzdHJveWluZylyZXR1cm47bGV0IGU9dGhpcy5yZW5kZXJGcmFtZSx0PXRoaXMucm9vdE5vZGUscj17VHlwZTpJLHByb3BzOnt9LGNoaWxkcmVuOnRoaXMuamlifTt0P3QudXBkYXRlSmliKHIpOnQ9dGhpcy5yb290Tm9kZT10aGlzLmNvbnN0cnVjdE5vZGVGcm9tSmliKHRoaXMuamliLHRoaXMsdGhpcy5jb250ZXh0KSxhd2FpdCB0LnJlbmRlcigpLGU+PXRoaXMucmVuZGVyRnJhbWUmJnRoaXMuc3luY0RPTSh0aGlzLmNvbnRleHQsdGhpcy5yb290Tm9kZSl9YXN5bmMgZGVzdHJveUZyb21ET00oZSx0KXtyZXR1cm4hIXQmJih0PT09dGhpcz8hIXRoaXMucm9vdE5vZGUmJmF3YWl0IHRoaXMuZGVzdHJveU5vZGUoZSx0aGlzLnJvb3ROb2RlKTphd2FpdCB0aGlzLmRlc3Ryb3lOb2RlKGUsdCkpfWFzeW5jIHN5bmNET00oZSx0KXtyZXR1cm4hIXQmJih0PT09dGhpcz8hIXRoaXMucm9vdE5vZGUmJmF3YWl0IHRoaXMuc3luY05vZGUoZSx0aGlzLnJvb3ROb2RlKTphd2FpdCB0aGlzLnN5bmNOb2RlKGUsdCkpfWFzeW5jIGFkZE5vZGUoZSx0KXtpZighdClyZXR1cm4hMTthd2FpdCB0aGlzLmF0dGFjaENoaWxkcmVuKGUsdCwhMSk7bGV0IHI9dGhpcy5wYXJlbnROb2RlO3JldHVybiByJiZhd2FpdCB0aGlzLmF0dGFjaENoaWxkcmVuKGUscix0cnVlKSwhMH1hc3luYyBjb25zdHJ1Y3ROYXRpdmVFbGVtZW50RnJvbU5vZGUoZSx0KXtpZighdClyZXR1cm4hMTtpZih0LlRZUEU9PT1OYXRpdmVOb2RlLlRZUEUpcmV0dXJuIGF3YWl0IHRoaXMuY3JlYXRlTmF0aXZlRWxlbWVudChlLHQpO2lmKHQuVFlQRT09PVRleHROb2RlLlRZUEUpcmV0dXJuIGF3YWl0IHRoaXMuY3JlYXRlVGV4dEVsZW1lbnQoZSx0KTtpZih0LlRZUEU9PT1Qb3J0YWxOb2RlLlRZUEV8fHQuVFlQRT09PURPTVJlbmRlcmVyLlRZUEUpcmV0dXJuIGF3YWl0IHRoaXMuY3JlYXRlUG9ydGFsRWxlbWVudChlLHQpO3Rocm93IG5ldyBUeXBlRXJyb3IoYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfTo6Y29uc3RydWN0TmF0aXZlRWxlbWVudEZyb21Ob2RlOiBVbnN1cHBvcnRlZCB2aXJ0dWFsIGVsZW1lbnQgdHlwZSBkZXRlY3RlZDogJHt0LlRZUEV9YCl9YXN5bmMgdXBkYXRlTm9kZShlLHQpe2lmKCF0KXJldHVybiExO2xldCByO2lmKHQuVFlQRT09PU5hdGl2ZU5vZGUuVFlQRSlyPWF3YWl0IHRoaXMudXBkYXRlTmF0aXZlRWxlbWVudChlLHQpO2Vsc2UgaWYodC5UWVBFPT09VGV4dE5vZGUuVFlQRSlyPWF3YWl0IHRoaXMudXBkYXRlVGV4dEVsZW1lbnQoZSx0KTtlbHNle2lmKHQuVFlQRSE9PVBvcnRhbE5vZGUuVFlQRSYmdC5UWVBFIT09RE9NUmVuZGVyZXIuVFlQRSl0aHJvdyBuZXcgVHlwZUVycm9yKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX06OnN5bmNOb2RlOiBVbnN1cHBvcnRlZCB2aXJ0dWFsIGVsZW1lbnQgdHlwZSBkZXRlY3RlZDogJHt0LlRZUEV9YCk7cj1hd2FpdCB0aGlzLnVwZGF0ZVBvcnRhbEVsZW1lbnQoZSx0KX1yZXR1cm4gYXdhaXQgdGhpcy5hdHRhY2hDaGlsZHJlbihlLHQsITApLHJ9YXN5bmMgc3luY05vZGUoZSx0KXtpZighdClyZXR1cm4hMTtsZXQgcj10JiZ0Lm5hdGl2ZUVsZW1lbnQ7cmV0dXJuIHI/dD9hd2FpdCB0aGlzLnVwZGF0ZU5vZGUoZSx0KTp2b2lkIDA6KHI9YXdhaXQgdGhpcy5jb25zdHJ1Y3ROYXRpdmVFbGVtZW50RnJvbU5vZGUoZSx0KSx0Lm5hdGl2ZUVsZW1lbnQ9cix0LmppYiYmdC5qaWIucHJvcHMmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuamliLnByb3BzLnJlZiYmdC5qaWIucHJvcHMucmVmLmNhbGwodCxyLG51bGwpLGF3YWl0IHRoaXMuYWRkTm9kZShlLHQpKX1hc3luYyBkZXN0cm95Tm9kZShlLHQpe2lmKCF0KXJldHVybiExO2xldCByPSExO3JldHVybiB0JiZ0Lm5hdGl2ZUVsZW1lbnQmJih0LlRZUEU9PT1OYXRpdmVOb2RlLlRZUEU/cj1hd2FpdCB0aGlzLmRlc3Ryb3lOYXRpdmVFbGVtZW50KGUsdCk6dC5UWVBFPT09VGV4dE5vZGUuVFlQRT9yPWF3YWl0IHRoaXMuZGVzdHJveVRleHRFbGVtZW50KGUsdCk6dC5UWVBFPT09UG9ydGFsTm9kZS5UWVBFfHx0LlRZUEU9PT1ET01SZW5kZXJlci5UWVBFP3I9YXdhaXQgdGhpcy5kZXN0cm95UG9ydGFsRWxlbWVudChlLHQpOm5ldyBUeXBlRXJyb3IoYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfTo6c3luY05vZGU6IFVuc3VwcG9ydGVkIHZpcnR1YWwgZWxlbWVudCB0eXBlIGRldGVjdGVkOiAke3QuVFlQRX1gKSksdCYmYXdhaXQgdGhpcy5kZXRhY2hDaGlsZHJlbihlLHQpLHJ9ZmluZE5hdGl2ZUVsZW1lbnQoZSx0KXt9Y3JlYXRlTmF0aXZlRWxlbWVudChlLHQpe3JldHVybnt0eXBlOlwiZWxlbWVudFwiLHZhbHVlOnQudmFsdWV9fXVwZGF0ZU5hdGl2ZUVsZW1lbnQoZSx0KXt9Y3JlYXRlVGV4dEVsZW1lbnQoZSx0KXtyZXR1cm57dHlwZTpcInRleHRcIix2YWx1ZTp0LnZhbHVlfX11cGRhdGVUZXh0RWxlbWVudChlLHQpe3JldHVybiExfWNyZWF0ZVBvcnRhbEVsZW1lbnQoZSx0KXtyZXR1cm57dHlwZTpcInBvcnRhbFwiLHZhbHVlOnQudmFsdWV9fXVwZGF0ZVBvcnRhbEVsZW1lbnQoZSx0KXtyZXR1cm4hMX1kZXN0cm95TmF0aXZlRWxlbWVudChlLHQpe31kZXN0cm95VGV4dEVsZW1lbnQoZSx0KXt9ZGVzdHJveVBvcnRhbEVsZW1lbnQoZSx0KXt9Zm9yY2VOYXRpdmVFbGVtZW50UmVmbG93KGUsdCxyKXt9YXN5bmMgYXR0YWNoQ2hpbGRyZW4oZSx0LHIpe2xldCBuPXQmJnQubmF0aXZlRWxlbWVudDtpZighbilyZXR1cm4hMTtsZXQgaT1BcnJheS5mcm9tKG4uY2hpbGROb2Rlcyksbz0wLHM9ITA7Zm9yKGxldCBhIG9mIHQuZ2V0Q2hpbGRyZW5Ob2RlcygpKXtsZXQgdD1hLm5hdGl2ZUVsZW1lbnQ7aWYodCl7aWYoITAhPT1yJiZhd2FpdCB0aGlzLnVwZGF0ZU5vZGUoZSxhKSxzKXtpZihpW28rK109PT10KWNvbnRpbnVlO3M9ITF9YXdhaXQgbi5hcHBlbmRDaGlsZCh0KSx0aGlzLmZvcmNlTmF0aXZlRWxlbWVudFJlZmxvdyhlLGEsdCl9fXJldHVybiEwfWFzeW5jIGRldGFjaENoaWxkcmVuKGUsdCl7aWYoISh0JiZ0Lm5hdGl2ZUVsZW1lbnQpKXJldHVybiExO2xldCByPVtdO2ZvcihsZXQgbiBvZiB0LmdldENoaWxkcmVuTm9kZXMoKSlyLnB1c2godGhpcy5kZXN0cm95Tm9kZShlLG4pKTtyZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwociksITB9fXZhciBKPXQuJCxrPXQud0EsRj10Lno4LE09dC5xJCxVPXQuRWwsWT10LnB2LEI9dC5SaCxMPXQuY1EsVj10LkJlLFg9dC5kNTtleHBvcnR7SiBhcyAkLGsgYXMgQ29tcG9uZW50LEYgYXMgQ29tcG9uZW50cyxNIGFzIERPTVJlbmRlcmVyLFUgYXMgSmlicyxZIGFzIFJlbmRlcmVycyxCIGFzIFRlcm0sTCBhcyBVdGlscyxWIGFzIGRlYWRiZWVmLFggYXMgZmFjdG9yeX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJjb25zdCBjYWNoZU1hcCAgICAgICAgICA9IG5ldyBNYXAoKTtcbmNvbnN0IHJlc291cmNlUmVzb2x2ZXJzID0gbmV3IFNldCgpO1xuY29uc3QgcmVzb3VyY2VIYW5kbGVycyAgPSBuZXcgU2V0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRSZXNvdXJjZVJlc29sdmVyKGNhbGxiYWNrKSB7XG4gIHJlc291cmNlUmVzb2x2ZXJzLmFkZChjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVSZXNvdXJjZVJlc29sdmVyKGNhbGxiYWNrKSB7XG4gIHJlc291cmNlUmVzb2x2ZXJzLmRlbGV0ZShjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRSZXNvdXJjZUhhbmRsZXIodGVzdCwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc291cmNlT2JqID0geyB0ZXN0LCBjYWxsYmFjayB9O1xuICByZXNvdXJjZUhhbmRsZXJzLmFkZChyZXNvdXJjZU9iaik7XG5cbiAgcmV0dXJuIHJlc291cmNlT2JqO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUmVzb3VyY2VIYW5kbGVyKHJlc291cmNlT2JqKSB7XG4gIHJlc291cmNlSGFuZGxlcnMuZGVsZXRlKHJlc291cmNlT2JqKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVSZXNvdXJjZVBhdGgocmVzb3VyY2VQYXRoKSB7XG4gIGxldCBjdXJyZW50UGF0aCA9IHJlc291cmNlUGF0aDtcblxuICBmb3IgKGxldCByZXNvbHZlciBvZiByZXNvdXJjZVJlc29sdmVycylcbiAgICBjdXJyZW50UGF0aCA9IHJlc29sdmVyKGN1cnJlbnRQYXRoKTtcblxuICByZXR1cm4gY3VycmVudFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqYXZhc2NyaXB0SGFuZGxlcihyZXNvdXJjZVBhdGgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV2YWxcbiAgcmV0dXJuIGV2YWwoYChpbXBvcnQoJyR7cmVzb3VyY2VQYXRoLnJlcGxhY2UoLycvZywgJ1xcXFxcXCcnKX0nKSkudGhlbigocmVzb3VyY2UpID0+IChyZXNvdXJjZS5kZWZhdWx0IHx8IHJlc291cmNlKSlgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNzc0hhbmRsZXIocmVzb3VyY2VQYXRoLCB7IG1lZGlhID0gJ3NjcmVlbicgfSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBsaW5rVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuXG4gICAgbGlua1RhZy5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKGxpbmtUYWcpO1xuICAgIGxpbmtUYWcub25lcnJvciA9IChlcnJvcikgPT4gcmVqZWN0KGVycm9yKTtcblxuICAgIGxpbmtUYWcuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xuICAgIGxpbmtUYWcuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgbGlua1RhZy5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICAgIGxpbmtUYWcuc2V0QXR0cmlidXRlKCdocmVmJywgcmVzb3VyY2VQYXRoKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmtUYWcpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUmVzb3VyY2UocmVzb3VyY2VQYXRoLCBfb3B0aW9ucykge1xuICBsZXQgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xuXG4gIGZvciAobGV0IGhhbmRsZXIgb2YgcmVzb3VyY2VIYW5kbGVycykge1xuICAgIGxldCB7IHRlc3QsIGNhbGxiYWNrIH0gPSBoYW5kbGVyO1xuICAgIGlmICghdGVzdChyZXNvdXJjZVBhdGgsIG9wdGlvbnMpKVxuICAgICAgY29udGludWU7XG5cbiAgICBsZXQgcmVzdWx0ID0gY2FsbGJhY2socmVzb3VyY2VQYXRoLCBvcHRpb25zKTtcbiAgICBpZiAocmVzdWx0KVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihgamlicy1odG1sLXJlbmRlcmVyOmxvYWQ6IFVua25vd24gcmVzb3VyY2UgXCIke3Jlc291cmNlUGF0aH1cIi4gSSBkb24ndCBrbm93IGhvdyB0byBoYW5kbGUgdGhpcyByZXNvdXJjZSB0eXBlLiBQbGVhc2UgYWRkIGEgcmVzb3VyY2UgaGFuZGxlciB0byBtYW5hZ2UgdGhpcyByZXNvdXJjZSB0eXBlLmApO1xufVxuXG5mdW5jdGlvbiBsb2FkKF9yZXNvdXJjZVBhdGgsIF9vcHRpb25zKSB7XG4gIGxldCBvcHRpb25zICAgPSBfb3B0aW9ucyB8fCB7fTtcbiAgbGV0IGNhY2hlTmFtZSA9IG9wdGlvbnMuY2FjaGU7XG4gIGlmIChjYWNoZU5hbWUgJiYgY2FjaGVNYXAuaGFzKGNhY2hlTmFtZSkpXG4gICAgcmV0dXJuIGNhY2hlTWFwLmdldChjYWNoZU5hbWUpO1xuXG4gIGxldCByZXNvdXJjZVBhdGggID0gcmVzb2x2ZVJlc291cmNlUGF0aChfcmVzb3VyY2VQYXRoKTtcbiAgbGV0IGNhY2hlICAgICAgICAgPSBjYWNoZU1hcC5nZXQocmVzb3VyY2VQYXRoKTtcblxuICBpZiAoY2FjaGUpXG4gICAgcmV0dXJuIGNhY2hlO1xuXG4gIGxldCBwcm9taXNlID0gaGFuZGxlUmVzb3VyY2UocmVzb3VyY2VQYXRoLCBvcHRpb25zKTtcblxuICAvLyBTZXQgcHJvbWlzZSBhcyBjYWNoZSBzb1xuICAvLyBhbGwgcHJvbWlzZXMgZnJvbSBtdWx0aXBsZVxuICAvLyBsb2FkIHJlcXVlc3RzIGFyZSBjb25zaXN0ZW50XG4gIGNhY2hlTWFwLnNldChyZXNvdXJjZVBhdGgsIHByb21pc2UpO1xuICBpZiAoY2FjaGVOYW1lKVxuICAgIGNhY2hlTWFwLnNldChjYWNoZU5hbWUsIHByb21pc2UpO1xuXG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhsb2FkLCB7XG4gIGFkZFJlc29sdmVyOiB7XG4gICAgd3JpdGFibGU6ICAgICB0cnVlLFxuICAgIGVudW1lcmFibGU6ICAgZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiAgICAgICAgYWRkUmVzb3VyY2VSZXNvbHZlcixcbiAgfSxcbiAgcmVtb3ZlUmVzb2x2ZXI6IHtcbiAgICB3cml0YWJsZTogICAgIHRydWUsXG4gICAgZW51bWVyYWJsZTogICBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6ICAgICAgICByZW1vdmVSZXNvdXJjZVJlc29sdmVyLFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgd3JpdGFibGU6ICAgICB0cnVlLFxuICAgIGVudW1lcmFibGU6ICAgZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiAgICAgICAgcmVzb2x2ZVJlc291cmNlUGF0aCxcbiAgfSxcbiAgamF2YXNjcmlwdEhhbmRsZXI6IHtcbiAgICB3cml0YWJsZTogICAgIHRydWUsXG4gICAgZW51bWVyYWJsZTogICBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6ICAgICAgICBqYXZhc2NyaXB0SGFuZGxlcixcbiAgfSxcbiAgY3NzSGFuZGxlcjoge1xuICAgIHdyaXRhYmxlOiAgICAgdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiAgIGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogICAgICAgIGNzc0hhbmRsZXIsXG4gIH0sXG4gIF9zZXRSZXNvdXJjZUNhY2hlOiB7XG4gICAgd3JpdGFibGU6ICAgICB0cnVlLFxuICAgIGVudW1lcmFibGU6ICAgZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiAgICAgICAgKF9yZXNvdXJjZVBhdGgsIHJlc291cmNlKSA9PiB7XG4gICAgICBsZXQgcmVzb3VyY2VQYXRoID0gcmVzb2x2ZVJlc291cmNlUGF0aChfcmVzb3VyY2VQYXRoKTtcbiAgICAgIGNhY2hlTWFwLnNldChyZXNvdXJjZVBhdGgsIHJlc291cmNlKTtcblxuICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgIH0sXG4gIH0sXG59KTtcblxuYWRkUmVzb3VyY2VIYW5kbGVyKChyZXNvdXJjZVBhdGgsIG9wdGlvbnMpID0+IHtcbiAgaWYgKG9wdGlvbnMudHlwZSA9PT0gJ2phdmFzY3JpcHQnKVxuICAgIHJldHVybiB0cnVlO1xuXG4gIHJldHVybiAoL1xcLlttY10/anMkL2kpLnRlc3QocmVzb3VyY2VQYXRoKTtcbn0sIGphdmFzY3JpcHRIYW5kbGVyKTtcblxuYWRkUmVzb3VyY2VIYW5kbGVyKChyZXNvdXJjZVBhdGgsIG9wdGlvbnMpID0+IHtcbiAgaWYgKG9wdGlvbnMudHlwZSA9PT0gJ2NzcycpXG4gICAgcmV0dXJuIHRydWU7XG5cbiAgcmV0dXJuICgvXFwuY3NzJC9pKS50ZXN0KHJlc291cmNlUGF0aCk7XG59LCBjc3NIYW5kbGVyKTtcblxuLy8gJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vamlicy1odG1sLXJlbmRlcmVyQDEuMS4wL2Rpc3QvaW5kZXguanMnXG5hZGRSZXNvdXJjZVJlc29sdmVyKChyZXNvdXJjZVBhdGgpID0+IHtcbiAgaWYgKCgvXm5wbTpcXC9cXC8vaSkudGVzdChyZXNvdXJjZVBhdGgpKSB7XG4gICAgbGV0IHJlc291cmNlSUQgPSByZXNvdXJjZVBhdGgucmVwbGFjZSgvXm5wbTpcXC9cXC8vaSwgJycpO1xuICAgIHJldHVybiBgaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS8ke3Jlc291cmNlSUR9L2Rpc3QvaW5kZXguanNgO1xuICB9XG5cbiAgcmV0dXJuIHJlc291cmNlUGF0aDtcbn0pO1xuXG5leHBvcnQge1xuICBsb2FkLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgRE9NUmVuZGVyZXIsIFV0aWxzLCBSZW5kZXJlcnMsIFRlcm0gfSBmcm9tICdqaWJzLWRvbS1yZW5kZXJlcic7XG5leHBvcnQgKiBmcm9tICdqaWJzLWRvbS1yZW5kZXJlcic7XG5cbmNvbnN0IHtcbiAgRk9SQ0VfUkVGTE9XLFxufSA9IFJlbmRlcmVycztcblxuY29uc3QgVEVSTV9DT01QT05FTlRfVFlQRV9DSEVDSyA9IFN5bWJvbC5mb3IoJ0BqaWJzL2lzVGVybScpO1xuXG5leHBvcnQgY2xhc3MgSFRNTFJlbmRlcmVyIGV4dGVuZHMgRE9NUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihyb290RWxlbWVudCwgX29wdGlvbnMpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIGRvY3VtZW50OiAocm9vdEVsZW1lbnQgJiYgcm9vdEVsZW1lbnQub3duZXJEb2N1bWVudCksXG4gICAgICAuLi4oX29wdGlvbnMgfHwge30pLFxuICAgIH07XG5cbiAgICBzdXBlcihyb290RWxlbWVudCwgb3B0aW9ucyk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAnZXZlbnRCaW5kaW5ncyc6IHtcbiAgICAgICAgd3JpdGFibGU6ICAgICBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogICBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6ICAgICAgICBuZXcgV2Vha01hcCgpLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBnZXREb2N1bWVudChjb250ZXh0KSB7XG4gICAgbGV0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYgKG9wdGlvbnMuZG9jdW1lbnQpXG4gICAgICByZXR1cm4gb3B0aW9ucy5kb2N1bWVudDtcblxuICAgIHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykgPyBkb2N1bWVudCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldFdpbmRvdyhjb250ZXh0KSB7XG4gICAgbGV0IGRvY3VtZW50ID0gdGhpcy5nZXREb2N1bWVudChjb250ZXh0KTtcbiAgICBpZiAoZG9jdW1lbnQpIHtcbiAgICAgIGxldCB3aW5kb3cgPSAoZG9jdW1lbnQucGFyZW50V2luZG93IHx8IGRvY3VtZW50LmRlZmF1bHRWaWV3KTtcbiAgICAgIGlmICh3aW5kb3cpXG4gICAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgfVxuXG4gICAgcmV0dXJuICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBfZmxhdHRlbkFuZEZpbHRlclN0eWxlcyhjb250ZXh0LCBzdHlsZXMpIHtcbiAgICBpZiAoIXN0eWxlcyB8fCBzdHlsZXMgPT09IHRydWUgfHwgT2JqZWN0LmlzKHN0eWxlcywgSW5maW5pdHkpIHx8IE9iamVjdC5pcyhzdHlsZXMsIE5hTikpXG4gICAgICByZXR1cm47XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZXMpKSB7XG4gICAgICBsZXQgZmluYWxTdHlsZXMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBpbCA9IHN0eWxlcy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHN0eWxlc1tpXTtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICB2YWx1ZSA9IHRoaXMuX2ZsYXR0ZW5BbmRGaWx0ZXJTdHlsZXMoY29udGV4dCwgc3R5bGVzW2ldKTtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpXG4gICAgICAgICAgZmluYWxTdHlsZXMgPSBmaW5hbFN0eWxlcy5jb25jYXQodmFsdWUpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgZmluYWxTdHlsZXMucHVzaCh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaW5hbFN0eWxlcztcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG5cbiAgX3BhcnNlQ1NTU3R5bGVTdHJpbmcoY29udGV4dCwgc3R5bGVTdHIpIHtcbiAgICBjb25zdCBuYW1lVG9Qcm9wZXJ0eU5hbWUgPSAobmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIG5hbWUucmVwbGFjZSgvXlteYS16QS1aXSsvLCAnJykucmVwbGFjZSgvW15hLXpBLVowLTldKFthLXpBLVowLTktXSkvZywgKG0sIHApID0+IHtcbiAgICAgICAgcmV0dXJuIHAudG9VcHBlckNhc2UoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBsZXQgc3R5bGVPYmogPSB7fTtcblxuICAgIChzdHlsZVN0ciArICcnKS5yZXBsYWNlKC8oW2EtekEtWjAtOS1dKylcXHMqOlxccyooW147XSspL2csIChtLCBuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgc3R5bGVPYmpbbmFtZVRvUHJvcGVydHlOYW1lKG5hbWUpXSA9IHZhbHVlLnJlcGxhY2UoL15bJ1wiXS8sICcnKS5yZXBsYWNlKC9bJ1wiXSQvLCAnJyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3R5bGVPYmo7XG4gIH1cblxuICBfcGFyc2VTdHlsZXMoY29udGV4dCwgc3R5bGVzKSB7XG4gICAgaWYgKCFzdHlsZXMpXG4gICAgICByZXR1cm4ge307XG5cbiAgICBsZXQgZmluYWxTdHlsZU9iaiA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwLCBpbCA9IHN0eWxlcy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XG4gICAgICBsZXQgdmFsdWUgPSBzdHlsZXNbaV07XG4gICAgICBpZiAoIXZhbHVlIHx8IFV0aWxzLmluc3RhbmNlT2YodmFsdWUsICdudW1iZXInLCAnYm9vbGVhbicsICdiaWdpbnQnLCAnZnVuY3Rpb24nKSlcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIGlmIChVdGlscy5pbnN0YW5jZU9mKHZhbHVlLCAnc3RyaW5nJykpXG4gICAgICAgIGZpbmFsU3R5bGVPYmogPSBPYmplY3QuYXNzaWduKGZpbmFsU3R5bGVPYmosIHRoaXMuX3BhcnNlQ1NTU3R5bGVTdHJpbmcoY29udGV4dCwgdmFsdWUpKTtcbiAgICAgIGVsc2VcbiAgICAgICAgZmluYWxTdHlsZU9iaiA9IE9iamVjdC5hc3NpZ24oZmluYWxTdHlsZU9iaiwgdmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBmaW5hbFN0eWxlT2JqO1xuICB9XG5cbiAgX2ZsYXR0ZW5TdHlsZXMoY29udGV4dCwgX3N0eWxlcykge1xuICAgIGxldCBzdHlsZXMgPSB0aGlzLl9mbGF0dGVuQW5kRmlsdGVyU3R5bGVzKGNvbnRleHQsIF9zdHlsZXMpO1xuICAgIGlmICghc3R5bGVzKVxuICAgICAgcmV0dXJuIHt9O1xuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHN0eWxlcykpXG4gICAgICBzdHlsZXMgPSBbIHN0eWxlcyBdO1xuXG4gICAgcmV0dXJuIHRoaXMuX3BhcnNlU3R5bGVzKGNvbnRleHQsIHN0eWxlcyk7XG4gIH1cblxuICBiaW5kRXZlbnRNZXRob2QoY29udGV4dCwgZWxlbWVudCwgcHJvcE5hbWUsIF9leHRyYUFyZ3MsIGV2ZW50Q2FsbGJhY2ssIHByb3BzKSB7XG4gICAgbGV0IGV4dHJhQXJncyAgICAgICA9IF9leHRyYUFyZ3MgfHwgW107XG4gICAgbGV0IGV2ZW50TmFtZSAgICAgICA9IHByb3BOYW1lLnN1YnN0cmluZygyKS50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBjdXJyZW50QmluZGluZ3MgPSB0aGlzLmV2ZW50QmluZGluZ3MuZ2V0KGVsZW1lbnQpO1xuICAgIGlmIChjdXJyZW50QmluZGluZ3MpIHtcbiAgICAgIGxldCBldmVudEJpbmRpbmcgPSBjdXJyZW50QmluZGluZ3MuZ2V0KGV2ZW50TmFtZSk7XG4gICAgICBpZiAoZXZlbnRCaW5kaW5nKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50QmluZGluZy5jYWxsYmFjayk7XG4gICAgICAgIGN1cnJlbnRCaW5kaW5ncy5kZWxldGUoZXZlbnROYW1lKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudEJpbmRpbmdzID0gbmV3IE1hcCgpO1xuICAgICAgdGhpcy5ldmVudEJpbmRpbmdzLnNldChlbGVtZW50LCBjdXJyZW50QmluZGluZ3MpO1xuICAgIH1cblxuICAgIGxldCBiaW5kaW5nQ29udGV4dCA9IHtcbiAgICAgIGNhbGxiYWNrOiAoZXZlbnQpID0+IGV2ZW50Q2FsbGJhY2suY2FsbChlbGVtZW50LCB7IHRhcmdldDogZWxlbWVudCwgcHJvcE5hbWUsIGV2ZW50LCBwcm9wcyB9KSxcbiAgICAgIGV2ZW50TmFtZSxcbiAgICAgIGV4dHJhQXJncyxcbiAgICB9O1xuXG4gICAgY3VycmVudEJpbmRpbmdzLnNldChldmVudE5hbWUsIGJpbmRpbmdDb250ZXh0KTtcblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGJpbmRpbmdDb250ZXh0LmNhbGxiYWNrLCAuLi5leHRyYUFyZ3MpO1xuICB9XG5cbiAgYXBwbHlFbGVtZW50U3R5bGUoY29udGV4dCwgZWxlbWVudCwgZWxlbWVudFN0eWxlLCBwcm9wTmFtZSwgX3Byb3BWYWx1ZSwgdXBkYXRlZFN0eWxlcykge1xuICAgIGxldCBwcm9wVmFsdWUgPSBfcHJvcFZhbHVlO1xuICAgIGlmIChwcm9wVmFsdWUgPT0gbnVsbCB8fCBwcm9wVmFsdWUgPT09IGZhbHNlIHx8IHByb3BWYWx1ZSA9PT0gdHJ1ZSB8fCBPYmplY3QuaXMocHJvcFZhbHVlLCBJbmZpbml0eSkgfHwgT2JqZWN0LmlzKHByb3BWYWx1ZSwgTmFOKSlcbiAgICAgIHByb3BWYWx1ZSA9ICd1bnNldCc7XG5cbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHByb3BWYWx1ZSA9PT0gJ2JpZ2ludCcgfHwgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIE51bWJlcikpXG4gICAgICBwcm9wVmFsdWUgPSBgJHtwcm9wVmFsdWV9cHhgO1xuXG4gICAgaWYgKGVsZW1lbnRTdHlsZVtwcm9wTmFtZV0gIT09IHByb3BWYWx1ZSkge1xuICAgICAgdXBkYXRlZFN0eWxlc1twcm9wTmFtZV0gPSB7IHByZXZpb3VzOiBlbGVtZW50U3R5bGVbcHJvcE5hbWVdLCBjdXJyZW50OiBwcm9wVmFsdWUgfTtcbiAgICAgIGVsZW1lbnRTdHlsZVtwcm9wTmFtZV0gPSBwcm9wVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgYXBwbHlFbGVtZW50U3R5bGVzKGNvbnRleHQsIGVsZW1lbnQsIHN0eWxlT2JqLCB1cGRhdGVkUHJvcHMpIHtcbiAgICBpZiAoIWVsZW1lbnQgfHwgIXN0eWxlT2JqKVxuICAgICAgcmV0dXJuO1xuXG4gICAgbGV0IHN0eWxlUHJvcHMgPSBPYmplY3Qua2V5cyhzdHlsZU9iaikuc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aClcbiAgICAgICAgcmV0dXJuIE1hdGguc2lnbihhLmxlbmd0aCAtIGIubGVuZ3RoKTtcblxuICAgICAgaWYgKGEgPT09IGIpXG4gICAgICAgIHJldHVybiAwO1xuXG4gICAgICByZXR1cm4gKGEgPCBiKSA/IC0xIDogMTtcbiAgICB9KTtcblxuICAgIGxldCB1cGRhdGVkU3R5bGVzID0ge307XG4gICAgbGV0IGVsZW1lbnRTdHlsZSAgPSBlbGVtZW50LnN0eWxlO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGlsID0gc3R5bGVQcm9wcy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XG4gICAgICBsZXQgcHJvcE5hbWUgPSBzdHlsZVByb3BzW2ldO1xuICAgICAgaWYgKCEocHJvcE5hbWUgaW4gZWxlbWVudFN0eWxlKSlcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIGxldCBwcm9wVmFsdWUgPSBzdHlsZU9ialtwcm9wTmFtZV07XG4gICAgICB0aGlzLmFwcGx5RWxlbWVudFN0eWxlKGNvbnRleHQsIGVsZW1lbnQsIGVsZW1lbnRTdHlsZSwgcHJvcE5hbWUsIHByb3BWYWx1ZSwgdXBkYXRlZFN0eWxlcyk7XG4gICAgfVxuXG4gICAgbGV0IHVwZGF0ZWRTdHlsZXNLZXlzID0gT2JqZWN0LmtleXModXBkYXRlZFN0eWxlcyk7XG4gICAgaWYgKHVwZGF0ZWRTdHlsZXNLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCBzdHlsZVByb3BVcGRhdGVPbGQgID0ge307XG4gICAgICBsZXQgc3R5bGVQcm9wVXBkYXRlTmV3ICA9IHt9O1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgaWwgPSB1cGRhdGVkU3R5bGVzS2V5cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XG4gICAgICAgIGxldCBwcm9wTmFtZSAgICA9IHVwZGF0ZWRTdHlsZXNLZXlzW2ldO1xuICAgICAgICBsZXQgdXBkYXRlVmFsdWUgPSB1cGRhdGVkU3R5bGVzW3Byb3BOYW1lXTtcblxuICAgICAgICBzdHlsZVByb3BVcGRhdGVPbGRbcHJvcE5hbWVdID0gdXBkYXRlVmFsdWUucHJldmlvdXM7XG4gICAgICAgIHN0eWxlUHJvcFVwZGF0ZU5ld1twcm9wTmFtZV0gPSB1cGRhdGVWYWx1ZS5jdXJyZW50O1xuICAgICAgfVxuXG4gICAgICB1cGRhdGVkUHJvcHNbJ3N0eWxlJ10gPSB7IHByZXZpb3VzOiBzdHlsZVByb3BVcGRhdGVPbGQsIGN1cnJlbnQ6IHN0eWxlUHJvcFVwZGF0ZU5ldyB9O1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdEVsZW1lbnRQcm9wcyhjb250ZXh0LCBlbGVtZW50LCBwcm9wcykge1xuICAgIHJldHVybiBwcm9wcyB8fCB7fTtcbiAgfVxuXG4gIGZvcm1hdFRvQXR0cmlidXRlTmFtZShuYW1lKSB7XG4gICAgbGV0IHJlc3VsdCA9IG5hbWUucmVwbGFjZSgvKFthLXowLTldfF4pKFtBLVpdKS9nLCAobSwgcDEsIHAyKSA9PiB7XG4gICAgICByZXR1cm4gYCR7cDF9LSR7cDJ9YDtcbiAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZvcm1hdEZyb21BdHRyaWJ1dGVOYW1lKG5hbWUpIHtcbiAgICBsZXQgcmVzdWx0ID0gbmFtZS5yZXBsYWNlKC8tW2Etel0vZywgKG0pID0+IHtcbiAgICAgIHJldHVybiBtLnN1YnN0cmluZygxKS50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGhhbmRsZUVsZW1lbnRQcm9wZXJ0eShjb250ZXh0LCBlbGVtZW50LCBwcm9wTmFtZSwgcHJvcFZhbHVlLCB1cGRhdGVkUHJvcHMpIHtcbiAgICBpZiAoIShwcm9wTmFtZSBpbiBlbGVtZW50KSlcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGlmICghKC9eKHNjcm9sbExlZnR8c2Nyb2xsVG9wfHZhbHVlfGNoZWNrZWR8ZGlzYWJsZWR8bWF4fG1pbnxtYXhMZW5ndGh8bWluTGVuZ3RofG11bHRpcGxlfHBhdHRlcm58cmVhZG9ubHl8cmVxdWlyZWR8YXV0b2ZvY3VzfG9wZW4pJC8pLnRlc3QocHJvcE5hbWUpKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgbGV0IGF0dHJpYnV0ZVZhbHVlID0gZWxlbWVudFtwcm9wTmFtZV07XG4gICAgaWYgKGF0dHJpYnV0ZVZhbHVlICE9PSBwcm9wVmFsdWUpIHtcbiAgICAgIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnRElBTE9HJyAmJiBwcm9wTmFtZSA9PT0gJ29wZW4nICYmIHR5cGVvZiBlbGVtZW50LnNob3dNb2RhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChwcm9wVmFsdWUpXG4gICAgICAgICAgICBlbGVtZW50LnNob3dNb2RhbCgpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGVsZW1lbnQuY2xvc2UoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50W3Byb3BOYW1lXSAhPT0gYXR0cmlidXRlVmFsdWUpXG4gICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKHByb3BWYWx1ZSlcbiAgICAgICAgICAgICAgZWxlbWVudC5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgZWxlbWVudC5jbG9zZSgpO1xuICAgICAgICAgIH0sIDUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZWRQcm9wc1twcm9wTmFtZV0gPSB7IHByZXZpb3VzOiBhdHRyaWJ1dGVWYWx1ZSwgY3VycmVudDogcHJvcFZhbHVlIH07XG4gICAgICBlbGVtZW50W3Byb3BOYW1lXSA9IHByb3BWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNldEVsZW1lbnRBdHRyaWJ1dGUoY29udGV4dCwgZWxlbWVudCwgcHJvcE5hbWUsIF9wcm9wVmFsdWUpIHtcbiAgICBsZXQgcHJvcFZhbHVlID0gX3Byb3BWYWx1ZTtcbiAgICBpZiAocHJvcFZhbHVlID09IG51bGwpXG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmZvcm1hdFRvQXR0cmlidXRlTmFtZShwcm9wTmFtZSkpO1xuICAgIGVsc2VcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMuZm9ybWF0VG9BdHRyaWJ1dGVOYW1lKHByb3BOYW1lKSwgcHJvcFZhbHVlKTtcbiAgfVxuXG4gIGdldE5hdGl2ZUVsZW1lbnRBdHRyaWJ1dGVzKGNvbnRleHQsIGVsZW1lbnQsIGhlbHBlckNhbGxiYWNrKSB7XG4gICAgbGV0IGF0dHJpYnV0ZU5hbWVzICA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlTmFtZXMoKTtcbiAgICBsZXQgcHJvcHMgICAgICAgICAgID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMCwgaWwgPSBhdHRyaWJ1dGVOYW1lcy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XG4gICAgICBsZXQgYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZU5hbWVzW2ldO1xuICAgICAgbGV0IHZhbHVlICAgICAgICAgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVvZiBoZWxwZXJDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gaGVscGVyQ2FsbGJhY2soYXR0cmlidXRlTmFtZSwgdmFsdWUpO1xuICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpXG4gICAgICAgICAgcHJvcHMgPSB7IC4uLnByb3BzLCAuLi5yZXN1bHQgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzW3RoaXMuZm9ybWF0RnJvbUF0dHJpYnV0ZU5hbWUoYXR0cmlidXRlTmFtZSldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BzO1xuICB9XG5cbiAgdXBkYXRlRWxlbWVudEF0dHJpYnV0ZXMoY29udGV4dCwgbm9kZSkge1xuICAgIGxldCBuYXRpdmVFbGVtZW50ID0gbm9kZS5uYXRpdmVFbGVtZW50O1xuICAgIGxldCBfcHJvcHMgPSBub2RlLmppYi5wcm9wcyB8fCB7fTtcbiAgICBsZXQgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCAoX3Byb3BzIHx8IHt9KSk7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywgJ3N0eWxlJykpXG4gICAgICBwcm9wcy5zdHlsZSA9IHRoaXMuX2ZsYXR0ZW5TdHlsZXMoY29udGV4dCwgcHJvcHMuc3R5bGUpO1xuICAgIGVsc2VcbiAgICAgIHByb3BzLnN0eWxlID0ge307XG5cbiAgICBwcm9wcyA9IHRoaXMuZm9ybWF0RWxlbWVudFByb3BzKGNvbnRleHQsIG5hdGl2ZUVsZW1lbnQsIHByb3BzKTtcbiAgICBwcm9wc1snZGF0YS1qaWItaWQnXSA9IG5vZGUuaWQ7XG5cbiAgICBsZXQgdXBkYXRlZFByb3BzICA9IHt9O1xuICAgIGxldCBuYW1lc1RvRGVsZXRlID0gW107XG4gICAgbGV0IHByb3BOYW1lcyAgICAgPSBPYmplY3Qua2V5cyhwcm9wcyk7XG4gICAgbGV0IGF0dHJpYnV0ZXMgICAgPSBuYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZU5hbWVzKCkucmVkdWNlKChhdHRyaWJ1dGVzLCBhdHRyaWJ1dGVOYW1lKSA9PiB7XG4gICAgICBsZXQgY3VycmVudEF0dHJpYnV0ZVZhbHVlID0gbmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICBsZXQgcHJvcE5hbWUgPSB0aGlzLmZvcm1hdEZyb21BdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpO1xuXG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywgcHJvcE5hbWUpKSB7XG4gICAgICAgIG5hbWVzVG9EZWxldGUucHVzaChhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgdXBkYXRlZFByb3BzW3Byb3BOYW1lXSA9IHsgcHJldmlvdXM6IGN1cnJlbnRBdHRyaWJ1dGVWYWx1ZSwgY3VycmVudDogdW5kZWZpbmVkIH07XG4gICAgICB9XG5cbiAgICAgIGF0dHJpYnV0ZXNbcHJvcE5hbWVdID0gY3VycmVudEF0dHJpYnV0ZVZhbHVlO1xuICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XG4gICAgfSwge30pO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGlsID0gcHJvcE5hbWVzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcbiAgICAgIGxldCBwcm9wTmFtZSA9IHByb3BOYW1lc1tpXTtcbiAgICAgIGlmIChwcm9wTmFtZSA9PT0gJ2tleScpXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBpZiAodHlwZW9mIHByb3BOYW1lID09PSAnc3ltYm9sJylcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIGlmICgoL15vbltBLVpdLipFeHRyYUFyZ3MkLykudGVzdChwcm9wTmFtZSkpXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoKC9eKG91dGVySFRNTCkkLykudGVzdChwcm9wTmFtZSkpXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBsZXQgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgQm9vbGVhbiB8fCBwcm9wVmFsdWUgaW5zdGFuY2VvZiBOdW1iZXIgfHwgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKVxuICAgICAgICBwcm9wVmFsdWUgPSBwcm9wVmFsdWUudmFsdWVPZigpO1xuXG4gICAgICBpZiAodGhpcy5pc0ppYihwcm9wVmFsdWUpKSB7XG4gICAgICAgIHByb3BWYWx1ZSA9IHRoaXMuY29uc3RydWN0SmliKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgbGV0IGlzVGVybSA9ICgocHJvcFZhbHVlLlR5cGUgJiYgcHJvcFZhbHVlLlR5cGVbVEVSTV9DT01QT05FTlRfVFlQRV9DSEVDS10pIHx8ICgvXnRlcm0kL2kpLnRlc3QocHJvcFZhbHVlLlR5cGUpKTtcbiAgICAgICAgaWYgKGlzVGVybSlcbiAgICAgICAgICBwcm9wVmFsdWUgPSB0aGlzLnJlc29sdmVUZXJtKHByb3BWYWx1ZSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BOYW1lID09PSAnc3R5bGUnKSB7XG4gICAgICAgIHRoaXMuYXBwbHlFbGVtZW50U3R5bGVzKGNvbnRleHQsIG5hdGl2ZUVsZW1lbnQsIHByb3BWYWx1ZSwgdXBkYXRlZFByb3BzKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wTmFtZSA9PT0gJ2lubmVySFRNTCcpIHtcbiAgICAgICAgbmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAocHJvcFZhbHVlID09IG51bGwpID8gJycgOiBwcm9wVmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaGFuZGxlRWxlbWVudFByb3BlcnR5KGNvbnRleHQsIG5hdGl2ZUVsZW1lbnQsIHByb3BOYW1lLCBwcm9wVmFsdWUsIHVwZGF0ZWRQcm9wcykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB0eXBlT2YgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBwcm9wVmFsdWUgPSBwcm9wTmFtZTtcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBwcm9wVmFsdWUgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmICh0eXBlT2YgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgIHByb3BWYWx1ZSA9IHByb3BWYWx1ZS50b1N0cmluZygpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlT2YgPT09ICdudW1iZXInIHx8IHR5cGVPZiA9PT0gJ3N0cmluZycgfHwgdHlwZU9mID09PSAnYmlnaW50Jykge1xuICAgICAgICBwcm9wVmFsdWUgPSAnJyArIHByb3BWYWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZU9mID09PSAnZnVuY3Rpb24nICYmICgvXm9uW0EtWl0vKS50ZXN0KHByb3BOYW1lKSkge1xuICAgICAgICB0aGlzLmJpbmRFdmVudE1ldGhvZChjb250ZXh0LCBuYXRpdmVFbGVtZW50LCBwcm9wTmFtZSwgcHJvcHNbYCR7cHJvcE5hbWV9RXh0cmFBcmdzYF0sIHByb3BWYWx1ZSwgcHJvcHMpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBhdHRyaWJ1dGVWYWx1ZSA9IGF0dHJpYnV0ZXNbcHJvcE5hbWVdO1xuICAgICAgaWYgKGF0dHJpYnV0ZVZhbHVlICE9PSBwcm9wVmFsdWUpXG4gICAgICAgIHVwZGF0ZWRQcm9wc1twcm9wTmFtZV0gPSB7IHByZXZpb3VzOiBhdHRyaWJ1dGVWYWx1ZSwgY3VycmVudDogcHJvcFZhbHVlIH07XG4gICAgICBlbHNlXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICB0aGlzLnNldEVsZW1lbnRBdHRyaWJ1dGUoY29udGV4dCwgbmF0aXZlRWxlbWVudCwgcHJvcE5hbWUsIHByb3BWYWx1ZSk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGlsID0gbmFtZXNUb0RlbGV0ZS5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XG4gICAgICBsZXQgcHJvcE5hbWUgPSBuYW1lc1RvRGVsZXRlW2ldO1xuICAgICAgbmF0aXZlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUocHJvcE5hbWUpO1xuICAgIH1cblxuICAgIC8vIHRoaXMuc2V0RWxlbWVudEF0dHJpYnV0ZShjb250ZXh0LCBuYXRpdmVFbGVtZW50LCAnamlicy1lbGVtZW50LWlkJywgbm9kZS5pZCk7XG5cbiAgICByZXR1cm4gKE9iamVjdC5rZXlzKHVwZGF0ZWRQcm9wcykubGVuZ3RoID4gMCkgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBhc3luYyBkZXN0cm95TmF0aXZlRWxlbWVudChjb250ZXh0LCBub2RlKSB7XG4gICAgbGV0IG5hdGl2ZUVsZW1lbnQgPSBub2RlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKCFuYXRpdmVFbGVtZW50KVxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKG5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZSlcbiAgICAgIG5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuYXRpdmVFbGVtZW50KTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgYXN5bmMgZGVzdHJveVRleHRFbGVtZW50KGNvbnRleHQsIG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5kZXN0cm95TmF0aXZlRWxlbWVudChjb250ZXh0LCBub2RlKTtcbiAgfVxuXG4gIGFzeW5jIGRlc3Ryb3lQb3J0YWxFbGVtZW50KGNvbnRleHQsIG5vZGUpIHtcbiAgICAvLyBXZSBkb24ndCB3YW50IHRvIGRlc3Ryb3kgcG9ydGFscy5cbiAgICAvLyBXZSBsZXQgdGhlIG93bmVyIG9mIHRoZSBwb3J0YWwgZGVzdHJveSBpdHNlbGZcbiAgICAvLyBpbnN0ZWFkLlxuICB9XG5cbiAgYXN5bmMgZmluZE5hdGl2ZUVsZW1lbnQoY29udGV4dCwgbm9kZSkge1xuICAgIGlmICghbm9kZSB8fCAhbm9kZS5qaWIgfHwgIW5vZGUuamliLlR5cGUpXG4gICAgICByZXR1cm47XG5cbiAgICByZXR1cm4gdGhpcy5nZXREb2N1bWVudChjb250ZXh0KS5xdWVyeVNlbGVjdG9yKG5vZGUuamliLlR5cGUpO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlTmF0aXZlRWxlbWVudChjb250ZXh0LCBub2RlKSB7XG4gICAgaWYgKCFub2RlIHx8ICFub2RlLmppYiB8fCAhbm9kZS5qaWIuVHlwZSlcbiAgICAgIHJldHVybjtcblxuICAgIGxldCB0eXBlICAgID0gbm9kZS5qaWIuVHlwZTtcbiAgICBsZXQgZWxlbWVudCA9IHRoaXMuZ2V0RG9jdW1lbnQoY29udGV4dCkuY3JlYXRlRWxlbWVudCh0eXBlKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgZm9yY2VOYXRpdmVFbGVtZW50UmVmbG93KGNvbnRleHQsIG5vZGUsIG5hdGl2ZUVsZW1lbnQpIHtcbiAgICBpZiAobm9kZS5wcm9wcyAmJiBub2RlLnByb3BzW0ZPUkNFX1JFRkxPV10pXG4gICAgICBuYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlTmF0aXZlRWxlbWVudChjb250ZXh0LCBub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlRWxlbWVudEF0dHJpYnV0ZXMoY29udGV4dCwgbm9kZSk7XG4gIH1cblxuICBhc3luYyBjcmVhdGVUZXh0RWxlbWVudChjb250ZXh0LCBub2RlKSB7XG4gICAgaWYgKCFub2RlIHx8ICFub2RlLmppYilcbiAgICAgIHJldHVybjtcblxuICAgIGxldCB0ZXh0ID0gbm9kZS5qaWIuY2hpbGRyZW47XG4gICAgaWYgKHRleHQgPT0gbnVsbCB8fCBPYmplY3QuaXModGV4dCwgTmFOKSB8fCBPYmplY3QuaXModGV4dCwgSW5maW5pdHkpKVxuICAgICAgdGV4dCA9ICcnO1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0RG9jdW1lbnQoY29udGV4dCkuY3JlYXRlVGV4dE5vZGUoKCcnICsgdGV4dCkpO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlVGV4dEVsZW1lbnQoY29udGV4dCwgbm9kZSkge1xuICAgIGlmICghbm9kZSB8fCAhbm9kZS5qaWIpXG4gICAgICByZXR1cm47XG5cbiAgICBsZXQgbmF0aXZlRWxlbWVudCA9IG5vZGUubmF0aXZlRWxlbWVudDtcbiAgICBpZiAoIW5hdGl2ZUVsZW1lbnQpXG4gICAgICByZXR1cm47XG5cbiAgICBsZXQgdGV4dCA9IG5vZGUuamliLmNoaWxkcmVuO1xuICAgIGlmICh0ZXh0ID09IG51bGwgfHwgT2JqZWN0LmlzKHRleHQsIE5hTikgfHwgT2JqZWN0LmlzKHRleHQsIEluZmluaXR5KSlcbiAgICAgIHRleHQgPSAnJztcblxuICAgIGxldCBjdXJyZW50VGV4dCA9IG5hdGl2ZUVsZW1lbnQubm9kZVZhbHVlO1xuICAgIGlmIChjdXJyZW50VGV4dCA9PT0gdGV4dClcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIG5hdGl2ZUVsZW1lbnQubm9kZVZhbHVlID0gdGV4dDtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlUG9ydGFsRWxlbWVudChjb250ZXh0LCBub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuZmluZE5hdGl2ZUVsZW1lbnQoY29udGV4dCwgbm9kZSk7XG4gIH1cbn1cblxuZXhwb3J0ICogZnJvbSAnLi9yZXNvdXJjZS1sb2FkZXIuanMnO1xuXG5leHBvcnQgY29uc3QgQSA9ICdBJztcbmV4cG9ydCBjb25zdCBBQkJSID0gJ0FCQlInO1xuZXhwb3J0IGNvbnN0IEFERFJFU1MgPSAnQUREUkVTUyc7XG5leHBvcnQgY29uc3QgQVJFQSA9ICdBUkVBJztcbmV4cG9ydCBjb25zdCBBUlRJQ0xFID0gJ0FSVElDTEUnO1xuZXhwb3J0IGNvbnN0IEFTSURFID0gJ0FTSURFJztcbmV4cG9ydCBjb25zdCBBVURJTyA9ICdBVURJTyc7XG5leHBvcnQgY29uc3QgQiA9ICdCJztcbmV4cG9ydCBjb25zdCBCQVNFID0gJ0JBU0UnO1xuZXhwb3J0IGNvbnN0IEJESSA9ICdCREknO1xuZXhwb3J0IGNvbnN0IEJETyA9ICdCRE8nO1xuZXhwb3J0IGNvbnN0IEJMT0NLUVVPVEUgPSAnQkxPQ0tRVU9URSc7XG5leHBvcnQgY29uc3QgQlIgPSAnQlInO1xuZXhwb3J0IGNvbnN0IEJVVFRPTiA9ICdCVVRUT04nO1xuZXhwb3J0IGNvbnN0IENBTlZBUyA9ICdDQU5WQVMnO1xuZXhwb3J0IGNvbnN0IENBUFRJT04gPSAnQ0FQVElPTic7XG5leHBvcnQgY29uc3QgQ0lURSA9ICdDSVRFJztcbmV4cG9ydCBjb25zdCBDT0RFID0gJ0NPREUnO1xuZXhwb3J0IGNvbnN0IENPTCA9ICdDT0wnO1xuZXhwb3J0IGNvbnN0IENPTEdST1VQID0gJ0NPTEdST1VQJztcbmV4cG9ydCBjb25zdCBEQVRBID0gJ0RBVEEnO1xuZXhwb3J0IGNvbnN0IERBVEFMSVNUID0gJ0RBVEFMSVNUJztcbmV4cG9ydCBjb25zdCBERCA9ICdERCc7XG5leHBvcnQgY29uc3QgREVMID0gJ0RFTCc7XG5leHBvcnQgY29uc3QgREVUQUlMUyA9ICdERVRBSUxTJztcbmV4cG9ydCBjb25zdCBERk4gPSAnREZOJztcbmV4cG9ydCBjb25zdCBESUFMT0cgPSAnRElBTE9HJztcbmV4cG9ydCBjb25zdCBESVYgPSAnRElWJztcbmV4cG9ydCBjb25zdCBETCA9ICdETCc7XG5leHBvcnQgY29uc3QgRFQgPSAnRFQnO1xuZXhwb3J0IGNvbnN0IEVNID0gJ0VNJztcbmV4cG9ydCBjb25zdCBFTUJFRCA9ICdFTUJFRCc7XG5leHBvcnQgY29uc3QgRklFTERTRVQgPSAnRklFTERTRVQnO1xuZXhwb3J0IGNvbnN0IEZJR0NBUFRJT04gPSAnRklHQ0FQVElPTic7XG5leHBvcnQgY29uc3QgRklHVVJFID0gJ0ZJR1VSRSc7XG5leHBvcnQgY29uc3QgRk9PVEVSID0gJ0ZPT1RFUic7XG5leHBvcnQgY29uc3QgRk9STSA9ICdGT1JNJztcbmV4cG9ydCBjb25zdCBIMSA9ICdIMSc7XG5leHBvcnQgY29uc3QgSDIgPSAnSDInO1xuZXhwb3J0IGNvbnN0IEgzID0gJ0gzJztcbmV4cG9ydCBjb25zdCBINCA9ICdINCc7XG5leHBvcnQgY29uc3QgSDUgPSAnSDUnO1xuZXhwb3J0IGNvbnN0IEg2ID0gJ0g2JztcbmV4cG9ydCBjb25zdCBIRUFERVIgPSAnSEVBREVSJztcbmV4cG9ydCBjb25zdCBIR1JPVVAgPSAnSEdST1VQJztcbmV4cG9ydCBjb25zdCBIUiA9ICdIUic7XG5leHBvcnQgY29uc3QgSSA9ICdJJztcbmV4cG9ydCBjb25zdCBJRlJBTUUgPSAnSUZSQU1FJztcbmV4cG9ydCBjb25zdCBJTUcgPSAnSU1HJztcbmV4cG9ydCBjb25zdCBJTlBVVCA9ICdJTlBVVCc7XG5leHBvcnQgY29uc3QgSU5TID0gJ0lOUyc7XG5leHBvcnQgY29uc3QgS0JEID0gJ0tCRCc7XG5leHBvcnQgY29uc3QgTEFCRUwgPSAnTEFCRUwnO1xuZXhwb3J0IGNvbnN0IExFR0VORCA9ICdMRUdFTkQnO1xuZXhwb3J0IGNvbnN0IExJID0gJ0xJJztcbmV4cG9ydCBjb25zdCBMSU5LID0gJ0xJTksnO1xuZXhwb3J0IGNvbnN0IE1BSU4gPSAnTUFJTic7XG5leHBvcnQgY29uc3QgTUFQID0gJ01BUCc7XG5leHBvcnQgY29uc3QgTUFSSyA9ICdNQVJLJztcbmV4cG9ydCBjb25zdCBNRU5VID0gJ01FTlUnO1xuZXhwb3J0IGNvbnN0IE1FVEEgPSAnTUVUQSc7XG5leHBvcnQgY29uc3QgTUVURVIgPSAnTUVURVInO1xuZXhwb3J0IGNvbnN0IE5BViA9ICdOQVYnO1xuZXhwb3J0IGNvbnN0IE5PU0NSSVBUID0gJ05PU0NSSVBUJztcbmV4cG9ydCBjb25zdCBPQkpFQ1QgPSAnT0JKRUNUJztcbmV4cG9ydCBjb25zdCBPTCA9ICdPTCc7XG5leHBvcnQgY29uc3QgT1BUR1JPVVAgPSAnT1BUR1JPVVAnO1xuZXhwb3J0IGNvbnN0IE9QVElPTiA9ICdPUFRJT04nO1xuZXhwb3J0IGNvbnN0IE9VVFBVVCA9ICdPVVRQVVQnO1xuZXhwb3J0IGNvbnN0IFAgPSAnUCc7XG5leHBvcnQgY29uc3QgUElDVFVSRSA9ICdQSUNUVVJFJztcbmV4cG9ydCBjb25zdCBQUkUgPSAnUFJFJztcbmV4cG9ydCBjb25zdCBQUk9HUkVTUyA9ICdQUk9HUkVTUyc7XG5leHBvcnQgY29uc3QgUSA9ICdRJztcbmV4cG9ydCBjb25zdCBSUCA9ICdSUCc7XG5leHBvcnQgY29uc3QgUlQgPSAnUlQnO1xuZXhwb3J0IGNvbnN0IFJVQlkgPSAnUlVCWSc7XG5leHBvcnQgY29uc3QgUyA9ICdTJztcbmV4cG9ydCBjb25zdCBTQU1QID0gJ1NBTVAnO1xuZXhwb3J0IGNvbnN0IFNDUklQVCA9ICdTQ1JJUFQnO1xuZXhwb3J0IGNvbnN0IFNFQ1RJT04gPSAnU0VDVElPTic7XG5leHBvcnQgY29uc3QgU0VMRUNUID0gJ1NFTEVDVCc7XG5leHBvcnQgY29uc3QgU0xPVCA9ICdTTE9UJztcbmV4cG9ydCBjb25zdCBTTUFMTCA9ICdTTUFMTCc7XG5leHBvcnQgY29uc3QgU09VUkNFID0gJ1NPVVJDRSc7XG5leHBvcnQgY29uc3QgU1BBTiA9ICdTUEFOJztcbmV4cG9ydCBjb25zdCBTVFJPTkcgPSAnU1RST05HJztcbmV4cG9ydCBjb25zdCBTVFlMRSA9ICdTVFlMRSc7XG5leHBvcnQgY29uc3QgU1VCID0gJ1NVQic7XG5leHBvcnQgY29uc3QgU1VNTUFSWSA9ICdTVU1NQVJZJztcbmV4cG9ydCBjb25zdCBTVVAgPSAnU1VQJztcbmV4cG9ydCBjb25zdCBUQUJMRSA9ICdUQUJMRSc7XG5leHBvcnQgY29uc3QgVEJPRFkgPSAnVEJPRFknO1xuZXhwb3J0IGNvbnN0IFREID0gJ1REJztcbmV4cG9ydCBjb25zdCBURU1QTEFURSA9ICdURU1QTEFURSc7XG5leHBvcnQgY29uc3QgVEVYVEFSRUEgPSAnVEVYVEFSRUEnO1xuZXhwb3J0IGNvbnN0IFRFUk0gPSBUZXJtO1xuZXhwb3J0IGNvbnN0IFRGT09UID0gJ1RGT09UJztcbmV4cG9ydCBjb25zdCBUSCA9ICdUSCc7XG5leHBvcnQgY29uc3QgVEhFQUQgPSAnVEhFQUQnO1xuZXhwb3J0IGNvbnN0IFRJTUUgPSAnVElNRSc7XG5leHBvcnQgY29uc3QgVElUTEUgPSAnVElUTEUnO1xuZXhwb3J0IGNvbnN0IFRSID0gJ1RSJztcbmV4cG9ydCBjb25zdCBUUkFDSyA9ICdUUkFDSyc7XG5leHBvcnQgY29uc3QgVSA9ICdVJztcbmV4cG9ydCBjb25zdCBVTCA9ICdVTCc7XG5leHBvcnQgY29uc3QgVkFSID0gJ1ZBUic7XG5leHBvcnQgY29uc3QgVklERU8gPSAnVklERU8nO1xuZXhwb3J0IGNvbnN0IFdCUiA9ICdXQlInO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9