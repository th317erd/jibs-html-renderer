/******/ var __webpack_modules__ = ({

/***/ "../jibs-dom-renderer/dist/index.js":
/*!******************************************!*\
  !*** ../jibs-dom-renderer/dist/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ A),
/* harmony export */   "Component": () => (/* binding */ I),
/* harmony export */   "Components": () => (/* binding */ R),
/* harmony export */   "DOMRenderer": () => (/* binding */ k),
/* harmony export */   "Jibs": () => (/* binding */ M),
/* harmony export */   "Renderers": () => (/* binding */ F),
/* harmony export */   "Utils": () => (/* binding */ U),
/* harmony export */   "deadbeef": () => (/* binding */ J),
/* harmony export */   "factory": () => (/* binding */ Y)
/* harmony export */ });
var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{$:()=>o,wA:()=>s,z8:()=>a,q$:()=>DOMRenderer,El:()=>l,pv:()=>c,cQ:()=>u,Be:()=>d,d5:()=>h});var r={711:function(e,t,r){const n=("undefined"!=typeof window?window:r.g)||this,i=Symbol.for("@@deadbeefRefMap"),o=Symbol.for("@@deadbeefUniqueID"),s=n[i]?n[i]:new WeakMap,a=[];n[i]||(n[i]=s);let l=0n;function anythingToID(e,t){let r=e;(r instanceof Number||r instanceof String||r instanceof Boolean)&&(r=r.valueOf());let n=typeof r;if("number"===n&&0===r)return Object.is(r,-0)?"number:-0":"number:+0";if("symbol"===n)return`symbol:${r.toString()}`;if(null==r||"number"===n||"boolean"===n||"string"===n||"bigint"===n)return"number"===n?r<0?`number:${r}`:`number:+${r}`:"bigint"===n&&0n===r?"bigint:+0":`${n}:${r}`;let i=a.length>0&&function getHelperForValue(e){for(let t=0,r=a.length;t<r;t++){let{helper:r,generator:n}=a[t];if(r(e))return n}}(r);if(i)return anythingToID(i(r));if(o in r&&"function"==typeof r[o]&&(!t||!t.has(r))){let e=t||new Set;return e.add(r),anythingToID(r[o](),e)}if(!s.has(r)){let e=`${typeof r}:${++l}`;return s.set(r,e),e}return s.get(r)}function deadbeef(){let e=[arguments.length];for(let t=0,r=arguments.length;t<r;t++)e.push(anythingToID(arguments[t]));return e.join(":")}Object.defineProperties(deadbeef,{idSym:{writable:!0,enumerable:!1,configurable:!0,value:o},sorted:{writable:!0,enumerable:!1,configurable:!0,value:function deadbeefSorted(){let e=[arguments.length];for(let t=0,r=arguments.length;t<r;t++)e.push(anythingToID(arguments[t]));return e.sort().join(":")}},generateIDFor:{writable:!0,enumerable:!1,configurable:!0,value:function generateIDFor(e,t){a.push({helper:e,generator:t})}},removeIDGenerator:{writable:!0,enumerable:!1,configurable:!0,value:function removeIDGenerator(e){let t=a.findIndex((t=>t.helper===e));t<0||a.splice(t,1)}}}),e.exports=deadbeef}},n={};function __nested_webpack_require_1712__(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return r[e].call(i.exports,i,i.exports,__nested_webpack_require_1712__),i.exports}__nested_webpack_require_1712__.d=(e,t)=>{for(var r in t)__nested_webpack_require_1712__.o(t,r)&&!__nested_webpack_require_1712__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__nested_webpack_require_1712__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__nested_webpack_require_1712__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__nested_webpack_require_1712__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{__nested_webpack_require_1712__.d(i,{$:()=>d,wA:()=>Component,z8:()=>S,El:()=>_,pv:()=>C,cQ:()=>e,Be:()=>t,d5:()=>factory});var e={};__nested_webpack_require_1712__.r(e),__nested_webpack_require_1712__.d(e,{bindMethods:()=>bindMethods,childrenDiffer:()=>childrenDiffer,fetchDeepProperty:()=>fetchDeepProperty,flattenArray:()=>flattenArray,generateUUID:()=>generateUUID,instanceOf:()=>instanceOf,isEmpty:()=>isEmpty,isIterableChild:()=>isIterableChild,isNotEmpty:()=>isNotEmpty,isValidChild:()=>isValidChild,iterate:()=>s,now:()=>now,propsDiffer:()=>propsDiffer,sizeOf:()=>sizeOf});var t=__nested_webpack_require_1712__(711);const r=Symbol.for("@jibsIterateStop"),n="undefined"!=typeof global?global:"undefined"!=typeof window?window:void 0;let o=1e6;function instanceOf(e){function testType(e,t){let r=t,i=typeof e;return r===n.String?r="string":r===n.Number?r="number":r===n.Boolean?r="boolean":r===n.Function?r="function":r===n.Array?r="array":r===n.Object?r="object":r===n.Promise?r="promise":r===n.BigInt?r="bigint":r===n.Map?r="map":r===n.WeakMap?r="weakmap":r===n.Set?r="set":r===n.Symbol?r="symbol":r===n.Buffer&&(r="buffer"),!("buffer"!==r||!n.Buffer||!n.Buffer.isBuffer(e))||("number"===r&&("number"===i||e instanceof Number||e.constructor&&"Number"===e.constructor.name)?!!isFinite(e):"object"!==r&&r===i||("object"===r?!!(e.constructor===Object.prototype.constructor||e.constructor&&"Object"===e.constructor.name)||"object"===i&&!e.constructor:!("array"!==r||!(Array.isArray(e)||e instanceof Array||e.constructor&&"Array"===e.constructor.name))||!("promise"!==r&&"deferred"!==r||!function isDeferredType(e){return!!(e instanceof Promise||e.constructor&&"Promise"===e.constructor.name)||"function"==typeof e.then&&"function"==typeof e.catch}(e))||!("string"!==r||!(e instanceof n.String||e.constructor&&"String"===e.constructor.name))||!("boolean"!==r||!(e instanceof n.Boolean||e.constructor&&"Boolean"===e.constructor.name))||!("map"!==r||!(e instanceof n.Map||e.constructor&&"Map"===e.constructor.name))||!("weakmap"!==r||!(e instanceof n.WeakMap||e.constructor&&"WeakMap"===e.constructor.name))||!("set"!==r||!(e instanceof n.Set||e.constructor&&"Set"===e.constructor.name))||"function"===r&&"function"===i||"function"==typeof r&&e instanceof r||!("string"!=typeof r||!e.constructor||e.constructor.name!==r)))}if(null==e)return!1;for(var t=1,r=arguments.length;t<r;t++)if(!0===testType(e,arguments[t]))return!0;return!1}function propsDiffer(e,t,r){if(e===t)return!1;if(typeof e!=typeof t)return!0;if(!e&&t)return!0;if(e&&!t)return!0;if(!e&&!t&&e!=e)return!0;let n=Object.keys(e).concat(Object.getOwnPropertySymbols(e)),i=Object.keys(t).concat(Object.getOwnPropertySymbols(t));if(n.length!==i.length)return!0;for(let o=0,s=n.length;o<s;o++){let s=n[o];if(r&&r.indexOf(s)>=0)continue;if(e[s]!==t[s])return!0;let a=i[o];if(!(r&&r.indexOf(a)||s===a||e[a]===t[a]))return!0}return!1}function sizeOf(e){return e?Object.is(1/0)?0:"number"==typeof e.length?e.length:Object.keys(e).length:0}function _iterate(e,t){if(!e||Object.is(1/0))return[];let n,i=[],o={collection:e,STOP:r};if(Array.isArray(e)){o.type="Array";for(let s=0,a=e.length;s<a&&(o.value=e[s],o.index=o.key=s,n=t.call(this,o),n!==r);s++)i.push(n)}else if("function"==typeof e.entries)if(e instanceof Set||"Set"===e.constructor.name){o.type="Set";let s=0;for(let a of e.values()){if(o.value=a,o.key=a,o.index=s++,n=t.call(this,o),n===r)break;i.push(n)}}else{o.type=e.constructor.name;let s=0;for(let[a,l]of e.entries()){if(o.value=l,o.key=a,o.index=s++,n=t.call(this,o),n===r)break;i.push(n)}}else{if(instanceOf(e,"boolean","number","bigint","function"))return;o.type=e.constructor?e.constructor.name:"Object";let s=Object.keys(e);for(let a=0,l=s.length;a<l;a++){let l=s[a],c=e[l];if(o.value=c,o.key=l,o.index=a,n=t.call(this,o),n===r)break;i.push(n)}}return i}Object.defineProperties(_iterate,{STOP:{writable:!1,enumerable:!1,configurable:!1,value:r}});const s=_iterate;function childrenDiffer(e,r){let n=Array.isArray(e)?e:[e],i=Array.isArray(r)?r:[r];return t(...n)!==t(...i)}function fetchDeepProperty(e,t,r,n){if(null==e||Object.is(NaN,e)||Object.is(1/0,e))return n?[r,null]:r;if(null==t||Object.is(NaN,t)||Object.is(1/0,t))return n?[r,null]:r;let i;if(Array.isArray(t))i=t;else if("symbol"==typeof t)i=[t];else{let e=""+t,r=0,n=0;for(i=[];;){let t=e.indexOf(".",r);if(t<0){i.push(e.substring(n));break}"\\"!==e.charAt(t-1)?(i.push(e.substring(n,t)),n=r=t+1):r=t+1}}let o=i[i.length-1];if(0===i.length)return n?[r,o]:r;let s=e;for(let e=0,t=i.length;e<t;e++)if(s=s[i[e]],null==s)return n?[r,o]:r;return n?[s,o]:s}function bindMethods(e,t){let r=e,n=new Set;for(;r;){let e=Object.getOwnPropertyDescriptors(r),i=Object.keys(e).concat(Object.getOwnPropertySymbols(e));for(let e=0,t=i.length;e<t;e++){let t=i[e];if("constructor"===t)continue;if(n.has(t))continue;n.add(t);let o=r[t];Object.prototype.hasOwnProperty(t)&&Object.prototype[t]===o||"function"==typeof o&&(this[t]=o.bind(this))}if(r=Object.getPrototypeOf(r),r===Object.prototype)break;if(t&&t.indexOf(r)>=0)break}}function isEmpty(e){return!(null!=e&&(Object.is(e,1/0)||!Object.is(e,NaN)&&(instanceOf(e,"string")?/\S/.test(e):instanceOf(e,"number")&&isFinite(e)||instanceOf(e,"boolean","bigint","function")||0!==sizeOf(e))))}function isNotEmpty(e){return!isEmpty.call(this,e)}function flattenArray(e){if(!Array.isArray(e))return e;let t=[];for(let r=0,n=e.length;r<n;r++){let n=e[r];Array.isArray(n)?t=t.concat(flattenArray(n)):t.push(n)}return t}function isValidChild(e){return null!=e&&"boolean"!=typeof e&&!Object.is(e,1/0)&&!Object.is(e,NaN)}function isIterableChild(e){return null!=e&&!Object.is(e,NaN)&&!Object.is(e,1/0)&&(Array.isArray(e)||"object"==typeof e&&!instanceOf(e,"boolean","number","string"))}function now(){return"undefined"!=typeof performance&&"function"==typeof performance.now?performance.now():Date.now()}function generateUUID(){return o>9999999&&(o=1e6),`${Date.now()}.${o++}${Math.round(1e7*Math.random()).toString().padStart(20,"0")}`}class Jib{constructor(e,t,r){let n=e&&e.props?e.props:{};Object.defineProperties(this,{Type:{writable:!0,enumerable:!0,configurable:!0,value:e},props:{writable:!0,enumerable:!0,configurable:!0,value:{...n,...t||{}}},children:{writable:!0,enumerable:!0,configurable:!0,value:flattenArray(r)}})}}const a=Symbol.for("@jibs.barren"),l=Symbol.for("@jibs.proxy"),c=Symbol.for("@jibs.rawText"),u=Symbol.for("@jibs.jib");function factory(e){return function $(r,n={}){if(isJibish(r))throw new TypeError("Received a jib but expected a component.");let i=null==r?l:r;function barren(...r){let o=r;function jib(){return instanceOf(i,"promise")||o.some((e=>instanceOf(e,"promise")))?Promise.all([i].concat(o)).then((t=>(i=t[0],o=t.slice(1),new e(i,n,o)))):new e(i,n,o)}return Object.defineProperties(jib,{[u]:{writable:!1,enumerable:!1,configurable:!1,value:!0},[t.idSym]:{writable:!1,enumerable:!1,configurable:!1,value:()=>i}}),jib}return Object.defineProperties(barren,{[a]:{writable:!1,enumerable:!1,configurable:!1,value:!0},[t.idSym]:{writable:!1,enumerable:!1,configurable:!1,value:()=>i}}),barren}}const d=factory(Jib);function isJibish(e){return!("function"!=typeof e||!e[a]&&!e[u])||e instanceof Jib}function constructJib(e){if(e instanceof Jib)return e;if("function"==typeof e){if(e[a])return e()();if(e[u])return e()}throw new TypeError("constructJib: Provided value is not a Jib.")}async function resolveChildren(e){let t=e;instanceOf(t,"promise")&&(t=await t),(this.isIterableChild||isIterableChild).call(this,t)||!isJibish(t)&&!(this.isValidChild||isValidChild).call(this,t)||(t=[t]);let r=s(t,(async({value:e})=>{let t=instanceOf(e,"promise")?await e:e;return isJibish(t)?await constructJib(t):t}));return await Promise.all(r)}const h=Symbol.for("@jibs/events/listeners");class EventEmitter{constructor(){Object.defineProperties(this,{[h]:{writable:!1,enumerable:!1,configurable:!1,value:new Map}})}addListener(e,t){if("function"!=typeof t)throw new TypeError("Event listener must be a method");let r=this[h],n=r.get(e);return n||(n=[],r.set(e,n)),n.push(t),this}removeListener(e,t){if("function"!=typeof t)throw new TypeError("Event listener must be a method");let r=this[h].get(e);if(!r)return this;let n=r.indexOf(t);return n>=0&&r.splice(n,1),this}removeAllListeners(e){let t=this[h];return t.has(e)?(t.set(e,[]),this):this}emit(e,...t){let r=this[h].get(e);if(!r||0===r.length)return!1;for(let e=0,n=r.length;e<n;e++)r[e].apply(this,t);return!0}once(e,t){let func=(...r)=>(this.off(e,func),t(...r));return this.on(e,func)}on(e,t){return this.addListener(e,t)}off(e,t){return this.removeListener(e,t)}eventNames(){return Array.from(this[h].keys())}listenerCount(e){let t=this[h].get(e);return t?t.length:0}listeners(e){let t=this[h].get(e);return t?t.slice():[]}}const f="@jibs/component/event/update",p=Symbol.for("@jibs/component/queueUpdate"),b=Symbol.for("@jibs/component/flushUpdate"),m=Symbol.for("@jibs/component/__init"),y=Symbol.for("@jibs/component/skipStateUpdates"),g=Symbol.for("@jibs/component/pendingStateUpdate"),w=Symbol.for("@jibs/component/lastRenderTime"),N=Symbol.for("@jibs/component/previousState"),O=Symbol.for("@jibs/component/previousState"),v=new WeakMap;function isValidStateObject(e){if(null==e)return!1;if(Object.is(e,NaN))return!1;if(Object.is(e,1/0))return!1;if(e instanceof Boolean||e instanceof Number||e instanceof String)return!1;let t=typeof e;return!("string"===t||"number"===t||"boolean"===t||Array.isArray(e)||"undefined"!=typeof Buffer&&Buffer.isBuffer(e))}class Component extends EventEmitter{static UPDATE_EVENT=f;[p](){this[g]||(this[g]=Promise.resolve(),this[g].then(this[b].bind(this)))}[b](){this[g]&&(this.emit(f),this[g]=null)}[m](){this[y]=!1}constructor(e){super(),bindMethods.call(this,this.constructor.prototype);let t=e||{},r=Object.assign(Object.create(null),t.props||{}),n=(()=>{let e=Object.create(null);return new Proxy(e,{get:(e,t)=>e[t],set:(e,t,r)=>{let n=e[t];return n===r||(this[y]||this[p](),e[t]=r,this.onStateUpdated(t,r,n)),!0}})})();Object.defineProperties(this,{[y]:{writable:!0,enumerable:!1,configurable:!0,value:!0},[g]:{writable:!0,enumerable:!1,configurable:!0,value:Promise.resolve()},[w]:{writable:!0,enumerable:!1,configurable:!0,value:now()},[O]:{writable:!0,enumerable:!1,configurable:!0,value:{}},id:{writable:!1,enumerable:!1,configurable:!1,value:t.id},props:{writable:!0,enumerable:!1,configurable:!0,value:r},children:{writable:!0,enumerable:!1,configurable:!0,value:t.children||[]},context:{writable:!0,enumerable:!1,configurable:!0,value:t.context||Object.create(null)},state:{enumerable:!1,configurable:!0,get:()=>n,set:e=>{if(!isValidStateObject(e))throw new TypeError(`Invalid value for "this.state": "${e}". Provided "state" must be an iterable object.`);Object.assign(n,e)}}})}resolveChildren(e){return resolveChildren.call(this,e)}isJib(e){return isJibish(e)}constructJib(e){return constructJib(e)}pushRender(e){this.emit(f,e)}onPropUpdated(e,t,r){}onStateUpdated(e,t,r){}captureReference(e,t){let r=this[O][e];return r||(r=(r,n)=>{let i=r;"function"==typeof t&&(i=t.call(this,i,n)),Object.defineProperties(this,{[e]:{writable:!0,enumerable:!1,configurable:!0,value:i}})},"function"!=typeof t&&(this[O]=r),r)}forceUpdate(){this[p]()}getState(e,t){let r=this.state;if(0===arguments.length)return r;if(instanceOf(e,"object")){let t=Object.keys(e).concat(Object.getOwnPropertySymbols(e)),n={};for(let i=0,o=t.length;i<o;i++){let o=t[i],[s,a]=fetchDeepProperty(r,o,e[o],!0);null!=a&&(n[a]=s)}return n}return fetchDeepProperty(r,e,t)}setState(e){if(!isValidStateObject(e))throw new TypeError(`Invalid value for "this.setState": "${e}". Provided "state" must be an iterable object.`);Object.assign(this.state,e)}setStatePassive(e){if(!isValidStateObject(e))throw new TypeError(`Invalid value for "this.setStatePassive": "${e}". Provided "state" must be an iterable object.`);try{this[y]=!0,Object.assign(this.state,e)}finally{this[y]=!1}}shouldUpdate(){return!0}destroy(){delete this.state,delete this.props,delete this.context,delete this[O],this.clearAllDebounces()}renderWaiting(){}render(e){return e}updated(){}combineWith(e,...t){let r=new Set;for(let n=0,i=t.length;n<i;n++){let i=t[n];if(i)if(instanceOf(i,"string")){let t=i.split(e).filter(isNotEmpty);for(let e=0,n=t.length;e<n;e++){let n=t[e];r.add(n)}}else if(Array.isArray(i)){let e=i.filter((e=>!!e&&!!instanceOf(e,"string")&&isNotEmpty(e)));for(let t=0,n=e.length;t<n;t++){let n=e[t];r.add(n)}}else if(instanceOf(i,"object")){let e=Object.keys(i);for(let t=0,n=e.length;t<n;t++){let n=e[t];i[n]?r.add(n):r.delete(n)}}}return Array.from(r).join(e||"")}classes(...e){return this.combineWith(" ",...e)}extractChildren(e,t){let r={},n=e,i=Array.isArray(n);return r.remainingChildren=t.filter((e=>!(e=>{let t=e.Type;if(instanceOf(t,"string")&&(t=t.toLowerCase()),i)for(let i=0,o=n.length;i<o;i++){let o=n[i];if(instanceOf(o,"string")&&(o=o.toLowerCase()),t===o)return r[o]=e,!0}else{let i=Object.keys(n);for(let o=0,s=i.length;o<s;o++){let s,a=i[o],l=n[a];if(s=instanceOf(l,RegExp)?l.test(t):instanceOf(l,"string")?l.toLowerCase()===t:l===t,s)return r[a]=e,!0}}return!1})(e))),r}debounce(e,t,r){const clearPendingTimeout=()=>{i&&i.timeout&&(clearTimeout(i.timeout),i.timeout=null)};var n=r||""+e;this.debounceTimers||Object.defineProperty(this,"debounceTimers",{writable:!0,enumerable:!1,configurable:!0,value:{}});var i=this.debounceTimers[n];i||(i=this.debounceTimers[n]={}),i.func=e,clearPendingTimeout();var o=i.promise;if(!o||!o.pending()){let e,t="pending";(o=i.promise=new Promise((t=>{e=t}))).resolve=()=>{if("pending"===t)if(t="fulfilled",clearPendingTimeout(),this.debounceTimers[n]=null,"function"==typeof i.func){var r=i.func.call(this);r instanceof Promise||r&&"function"==typeof r.then?r.then((t=>e(t))):e(r)}else e()},o.cancel=()=>{t="rejected",clearPendingTimeout(),this.debounceTimers[n]=null,o.resolve()},o.isPending=()=>"pending"===t}return i.timeout=setTimeout(o.resolve,null==t?250:t),o}clearDebounce(e){var t=this.debounceTimers[e];null!=t&&(t.timeout&&clearTimeout(t.timeout),t.promise&&t.promise.cancel())}clearAllDebounces(){let e=this.debounceTimers||{},t=Object.keys(e);for(let e=0,r=t.length;e<r;e++)this.clearDebounce(t[e])}getElementData(e){let t=v.get(e);return t||(t={},v.set(e,t)),t}memoize(e){let r,n;return function(...i){let o=t(...i);if(o!==r){let t=e.apply(this,i);r=o,n=t}return n}}}const T=Symbol.for("@jibs/node/contextID");class RootNode{static CONTEXT_ID=T;constructor(e,t,r,n){let i=null;(e||this.createContext)&&(i=(e||this).createContext(r,this.onContextUpdate?this.onContextUpdate:void 0,this)),Object.defineProperties(this,{TYPE:{enumerable:!1,configurable:!1,get:()=>this.constructor.TYPE,set:()=>{}},id:{writable:!1,enumerable:!1,configurable:!1,value:generateUUID()},renderer:{writable:!0,enumerable:!1,configurable:!0,value:e},parentNode:{writable:!0,enumerable:!1,configurable:!0,value:t},childNodes:{writable:!0,enumerable:!1,configurable:!0,value:new Map},context:{enumerable:!1,configurable:!0,get:()=>i,set:()=>{}},destroying:{writable:!0,enumerable:!1,configurable:!0,value:!1},renderPromise:{writable:!0,enumerable:!1,configurable:!0,value:null},renderFrame:{writable:!0,enumerable:!1,configurable:!0,value:0},jib:{writable:!0,enumerable:!1,configurable:!0,value:n},nativeElement:{writable:!0,enumerable:!1,configurable:!0,value:null}})}resolveChildren(e){return resolveChildren.call(this,e)}getCacheKey(){let{Type:e,props:r}=this.jib||{};return t(e,r.key)}updateJib(e){this.jib=e}removeChild(e){let t=e.getCacheKey();this.childNodes.delete(t)}addChild(e){let t=e.getCacheKey();this.childNodes.set(t,e)}getChild(e){return this.childNodes.get(e)}getThisNodeOrChildNodes(){return this}getChildrenNodes(){let e=[];for(let t of this.childNodes.values())e=e.concat(t.getThisNodeOrChildNodes());return e.filter(Boolean)}async destroy(e){if(!e&&this.destroying)return;this.destroying=!0,this.renderPromise&&await this.renderPromise,await this.destroyFromDOM(this.context,this);let t=[];for(let e of this.childNodes.values())t.push(e.destroy());this.childNodes.clear(),await Promise.all(t),this.nativeElement=null,this.parentNode=null,this.context=null,this.jib=null}isValidChild(e){return isValidChild(e)}isIterableChild(e){return isIterableChild(e)}propsDiffer(e,t,r){return propsDiffer(e,t,r)}childrenDiffer(e,t){return childrenDiffer(e,t)}async render(e,t){if(this.destroying)return;this.renderFrame++;let r=this.renderFrame;return"function"==typeof this._render?this.renderPromise=this._render(e,t).then((async e=>(this.renderPromise=null,r>=this.renderFrame&&await this.syncDOM(this.context,this),e))).catch((e=>{throw this.renderPromise=null,e})):await this.syncDOM(this.context,this),this.renderPromise}getParentID(){if(this.parentNode)return this.parentNode.id}async destroyFromDOM(){if(this.renderer)return await this.renderer.destroyFromDOM(this.context,this)}async syncDOM(){if(this.renderer)return await this.renderer.syncDOM(this.context,this)}}const P=1n;let j=P;const E=Symbol.for("@jibsForceReflow"),_={JIB_BARREN:a,JIB_PROXY:l,JIB_RAW_TEXT:c,JIB:u,Jib,isJibish,constructJib,resolveChildren},S={UPDATE_EVENT:f,QUEUE_UPDATE_METHOD:p,FLUSH_UPDATE_METHOD:b,INIT_METHOD:m,SKIP_STATE_UPDATES:y,PENDING_STATE_UPDATE:g,LAST_RENDER_TIME:w,PREVIOUS_STATE:N},C={CONTEXT_ID:RootNode.CONTEXT_ID,FORCE_REFLOW:E,RootNode,Renderer:class Renderer extends RootNode{static RootNode=RootNode;constructor(){super(null,null,null),this.renderer=this}createContext(e,t,r){let n=Object.create(null),i=e?e[T]:P;return new Proxy(n,{get:(t,r)=>{if(r===T){let t=e?e[T]:P;return t>i?t:i}return Object.prototype.hasOwnProperty.call(t,r)?t[r]:e?e[r]:void 0},set:(e,n,o)=>(n===T||e[n]===o||(i=++j,e[n]=o,"function"==typeof t&&t.call(r,r)),!0)})}}}})();var o=i.$,s=i.wA,a=i.z8,l=i.El,c=i.pv,u=i.cQ,d=i.Be,h=i.d5;const{isJibish:f,constructJib:p,JIB_PROXY:b,JIB_RAW_TEXT:m}=l,{RootNode:y}=c;class FragmentNode extends y{static TYPE=11;getThisNodeOrChildNodes(){return this.getChildrenNodes()}async _render(){let e=new Map,t=this.renderFrame,{children:r}=this.jib||{};if(u.instanceOf(r,"promise")&&(r=await r),this.destroying||t<this.renderFrame)return;this.isIterableChild(r)||!f(r)&&!this.isValidChild(r)||(r=[r]);const getIndexForType=t=>{let r=(e.get(t)||0)+1;return e.set(t,r),r};let n=!1,i=u.iterate(r,(({value:e,key:r,index:i,STOP:o})=>n||this.destroying||t<this.renderFrame?o:(async()=>{let o=u.instanceOf(e,"promise")?await e:e;if(u.isEmpty(o)||Object.is(o,NaN)||Object.is(o,1/0))return;let s,a,l=f(o);if(!l&&this.isIterableChild(o)?a={Type:b,children:o,props:{key:`@jib/internal_fragment_${getIndexForType(b)}`}}:!l&&this.isValidChild(o)?(o="function"==typeof o.valueOf?o.valueOf():o,a={Type:m,children:o,props:{key:`@jib/internal_text_${getIndexForType(m)}`}}):l&&(a=p(o),u.instanceOf(a,"promise")&&(a=await a)),this.destroying||t<this.renderFrame)return void(n=!0);let c,{Type:h,props:y}=a;c=i!==r?r:null==y.key||Object.is(y.key,NaN)||Object.is(y.key,1/0)?`@jib/internal_key_${getIndexForType(h)}`:y.key,y.key=c,a.props=y;let g=d(h,y.key),w=this.getChild(g);return w?(s=!1,w.updateJib(a)):(s=!0,w=this.renderer.constructNodeFromJib(a,this,this.context)),await w.render(),{node:w,cacheKey:g,created:s}})())),o=await Promise.all(i);o=o.filter((e=>!!e));let s=[];if(this.destroying||t<this.renderFrame){for(let e=0,t=o.length;e<t;e++){let t=o[e],{node:r,created:n}=t;n&&r&&s.push(r.destroy())}return void(s.length>0&&await Promise.all(s))}let a=new Map;for(let e of o){let{node:t,cacheKey:r}=e;a.set(r,e),this.addChild(t)}for(let[e,t]of this.childNodes){a.has(e)||(s.push(t.destroy()),this.removeChild(t))}a.clear(),s.length>0&&await Promise.all(s)}async destroyFromDOM(){if(this.parentNode)return await this.parentNode.destroyFromDOM(this.parentNode.context,this.parentNode)}async syncDOM(){if(this.parentNode)return await this.parentNode.syncDOM(this.parentNode.context,this.parentNode)}}const{RootNode:g}=c;class TextNode extends g{static TYPE=3}const{JIB_PROXY:w}=l,{RootNode:N}=c;class NativeNode extends N{static TYPE=1;constructor(...e){super(...e),Object.defineProperties(this,{fragmentNode:{writable:!0,enumerable:!1,configurable:!0,value:null}})}async destroy(){if(!this.destroying)return this.destroying=!0,await this.destroyFragmentNode(),await super.destroy(!0)}async destroyFragmentNode(){this.fragmentNode&&(this.removeChild(this.fragmentNode),await this.fragmentNode.destroy(),this.fragmentNode=null)}async _render(){let{Type:e,props:t,children:r}=this.jib||{};if(e)if(Object.prototype.hasOwnProperty.call(t,"innerHTML"))await this.destroyFragmentNode();else{let e={Type:w,props:{},children:r},t=this.fragmentNode;t?this.fragmentNode.updateJib(e):(t=this.fragmentNode=this.renderer.constructNodeFromJib(e,this,this.context),this.addChild(t)),await t.render()}}}class PortalNode extends NativeNode{static TYPE=15}const{JIB_PROXY:O}=l,{CONTEXT_ID:v,RootNode:T}=c,{INIT_METHOD:P,UPDATE_EVENT:j,PENDING_STATE_UPDATE:E,LAST_RENDER_TIME:_,SKIP_STATE_UPDATES:S}=a;class ComponentNode extends T{static TYPE=20;constructor(...e){super(...e),Object.defineProperties(this,{fragmentNode:{writable:!0,enumerable:!1,configurable:!0,value:null},component:{writable:!0,enumerable:!1,configurable:!0,value:null},pendingContextUpdate:{writable:!0,enumerable:!1,configurable:!0,value:null},previousState:{writable:!0,enumerable:!1,configurable:!0,value:{}},lastContextID:{writable:!0,enumerable:!1,configurable:!0,value:this.context[v]||1n},cachedRenderResult:{writable:!0,enumerable:!1,configurable:!0,value:null}})}getThisNodeOrChildNodes(){if(this.fragmentNode)return this.fragmentNode.getChildrenNodes()}mergeComponentProps(e,t){return Object.assign(Object.create(null),e||{},t)}firePropUpdates(e,t){let r=t||{},n=new Set(Object.keys(r).concat(Object.getOwnPropertySymbols(r))),i=e||{},o=Object.keys(i).concat(Object.getOwnPropertySymbols(i));for(let e=0,t=o.length;e<t;e++)n.add(o[e]);for(let e of n){let t=i[e],n=r[e];t!==n&&this.component.onPropUpdated(e,n,t)}}shouldRender(e,t){let r=this.component;if(!r)return!0;if(this.lastContextID<this.context[v])return this.lastContextID=this.context[v],this.previousState=Object.assign({},r.state),this.firePropUpdates(r.props,e),r.props=this.mergeComponentProps(r.props,e),!0;if(this.childrenDiffer(r.children,t))return this.previousState=Object.assign({},r.state),this.firePropUpdates(r.props,e),r.props=this.mergeComponentProps(r.props,e),!0;let n=this.previousState||{};return this.propsDiffer(r.props,e,["ref","key"],!0)&&r.shouldUpdate(e,n)?(this.previousState=Object.assign({},r.state),this.firePropUpdates(r.props,e),r.props=this.mergeComponentProps(r.props,e),!0):!(!this.propsDiffer(n,r.state)||!r.shouldUpdate(e,n))&&(this.previousState=Object.assign({},r.state),!0)}async destroy(){if(!this.destroying)return this.destroying=!0,this.component&&(this.jib&&this.jib.props&&"function"==typeof this.jib.props.ref&&this.jib.props.ref.call(this.component,null,this.component),await this.component.destroy(),this.component=null),this.fragmentNode&&(this.removeChild(this.fragmentNode),await this.fragmentNode.destroy(),this.fragmentNode=null),this.cachedRenderResult=null,this.previousState=null,await super.destroy(!0)}onContextUpdate(){if(this.component&&!this.component[E])return this.pendingContextUpdate||(this.pendingContextUpdate=Promise.resolve().then((()=>{this.destroying||!this.component||this.component[E]||(this.pendingContextUpdate=null,this.render())}))),this.pendingContextUpdate}async _render(){let e=this.renderFrame,{Type:t,props:r,children:n}=this.jib||{};if(!t)return;n=this.jib.children=await this.resolveChildren(n);const finalizeRender=async(e,t)=>{if(this.destroying||t<this.renderFrame||!this.component)return;this.cachedRenderResult=e,this.component[_]=u.now();let r=this.fragmentNode,n={Type:O,props:{},children:e};r?r.updateJib(n):(r=this.fragmentNode=this.renderer.constructNodeFromJib(n,this,this.context),this.addChild(r)),await r.render()},handleRenderError=t=>{if(this.destroying||e<this.renderFrame)return;let r;console.error(t),this.component&&(this.component[_]=u.now());try{r=this.component&&"function"==typeof this.component.renderErrorState?this.component.renderErrorState(t):[`${t.message}\n${t.stack}`]}catch(e){r=[`${t.message}\n${t.stack}`]}return finalizeRender(r,e)};if(!(this.destroying||e<this.renderFrame))try{if(this.component&&!this.shouldRender(r,n))return;let i=this.component;i||(i=this.component=new t({...this.jib||{},props:this.mergeComponentProps(null,r),context:this.context,id:this.id}),"function"==typeof i[P]&&i[P](),i.on(j,(e=>{e?(this.renderFrame++,finalizeRender(e,this.renderFrame)):this.render()})),r&&"function"==typeof r.ref&&r.ref.call(i,i,null)),this.component[E]&&(this.component[E]=null);let o=this.component.render(n);if(u.instanceOf(o,"promise")){let t=this.component.renderWaiting(this.cachedRenderResult),r=!1,n=setTimeout((async()=>{n=null,u.instanceOf(t,"promise")&&(t=await t),r||await finalizeRender(t,e)}),5);await o.then((async t=>{r=!0,n&&(clearTimeout(n),n=null),await finalizeRender(t,e)})).catch(handleRenderError)}else await finalizeRender(o,e)}catch(e){await handleRenderError(e)}}async destroyFromDOM(){if(this.parentNode)return await this.parentNode.destroyFromDOM(this.parentNode.context,this.parentNode)}async syncDOM(){if(this.parentNode)return await this.parentNode.syncDOM(this.parentNode.context,this.parentNode)}}const{Renderer:C}=c,{JIB_PROXY:D,JIB_RAW_TEXT:x}=l;class DOMRenderer extends C{static TYPE=9;static FragmentNode=FragmentNode;static TextNode=TextNode;static NativeNode=NativeNode;static PortalNode=PortalNode;static ComponentNode=ComponentNode;constructor(e,t){super(),Object.defineProperties(this,{options:{writable:!1,enumerable:!1,configurable:!1,value:t||{}},rootNode:{writable:!0,enumerable:!1,configurable:!0,value:null},jib:{writable:!0,enumerable:!1,configurable:!0,value:{Type:e,props:{},children:[]}}})}isPortalNode(e){return/[^a-zA-Z0-9:]/.test(e)}constructNodeFromJib(e,t,r){let{Type:n}=e;return"function"==typeof n?new this.constructor.ComponentNode(this,t,r,e):"string"==typeof n?this.isPortalNode(n)?new this.constructor.PortalNode(this,t,r,e):new this.constructor.NativeNode(this,t,r,e):null==n||n===D?new this.constructor.FragmentNode(this,t,r,e):n===x?new this.constructor.TextNode(this,t,r,e):void 0}async destroy(){if(!this.destroying)return this.destroying=!0,this.rootNode&&(await this.rootNode.destroy(),this.rootNode=null),await super.destroy(!0)}async render(e){if(!e)throw new TypeError(`${this.constructor.name}::render: A jib must be provided.`);return this.updateJib({...this.jib,children:e}),super.render()}async _render(){let e=this.renderFrame,t=this.rootNode,r={Type:D,props:{},children:this.jib};t?t.updateJib(r):t=this.rootNode=this.constructNodeFromJib(this.jib,this,this.context),await t.render(),e>=this.renderFrame&&this.syncDOM(this.context,this.rootNode)}async destroyFromDOM(e,t){return!!t&&(t===this?!!this.rootNode&&await this.destroyNode(e,this.rootNode):await this.destroyNode(e,t))}async syncDOM(e,t){return!!t&&(t===this?!!this.rootNode&&await this.syncNode(e,this.rootNode):await this.syncNode(e,t))}async addNode(e,t){if(!t)return!1;await this.attachChildren(e,t);let r=this.parentNode;return r&&await this.attachChildren(e,r,true),!0}async constructNativeElementFromNode(e,t){if(!t)return!1;if(t.TYPE===NativeNode.TYPE)return await this.createNativeElement(e,t);if(t.TYPE===TextNode.TYPE)return await this.createTextElement(e,t);if(t.TYPE===PortalNode.TYPE||t.TYPE===DOMRenderer.TYPE)return await this.createPortalElement(e,t);throw new TypeError(`${this.constructor.name}::constructNativeElementFromNode: Unsupported virtual element type detected: ${t.TYPE}`)}async updateNode(e,t){if(!t)return!1;let r;if(t.TYPE===NativeNode.TYPE)r=await this.updateNativeElement(e,t);else if(t.TYPE===TextNode.TYPE)r=await this.updateTextElement(e,t);else{if(t.TYPE!==PortalNode.TYPE&&t.TYPE!==DOMRenderer.TYPE)throw new TypeError(`${this.constructor.name}::syncNode: Unsupported virtual element type detected: ${t.TYPE}`);r=await this.updatePortalElement(e,t)}return await this.attachChildren(e,t),r}async syncNode(e,t){if(!t)return!1;let r=t&&t.nativeElement;return r?t?await this.updateNode(e,t):void 0:(r=await this.constructNativeElementFromNode(e,t),t.jib&&t.jib.props&&"function"==typeof t.jib.props.ref&&t.jib.props.ref.call(t,r,null),t.nativeElement=r,await this.addNode(e,t))}async destroyNode(e,t){if(!t)return!1;let r=!1;return t&&t.nativeElement&&(t.TYPE===NativeNode.TYPE?r=await this.destroyNativeElement(e,t):t.TYPE===TextNode.TYPE?r=await this.destroyTextElement(e,t):t.TYPE===PortalNode.TYPE||t.TYPE===DOMRenderer.TYPE?r=await this.destroyPortalElement(e,t):new TypeError(`${this.constructor.name}::syncNode: Unsupported virtual element type detected: ${t.TYPE}`)),t&&await this.detachChildren(e,t),r}findNativeElement(e,t){}createNativeElement(e,t){return{type:"element",value:t.value}}updateNativeElement(e,t){}createTextElement(e,t){return{type:"text",value:t.value}}updateTextElement(e,t){return!1}createPortalElement(e,t){return{type:"portal",value:t.value}}updatePortalElement(e,t){return!1}destroyNativeElement(e,t){}destroyTextElement(e,t){}destroyPortalElement(e,t){}forceNativeElementReflow(e,t,r){}async attachChildren(e,t,r){let n=t&&t.nativeElement;if(!n)return!1;let i=Array.from(n.childNodes),o=0,s=!0;for(let a of t.getChildrenNodes()){let t=a.nativeElement;if(t){if(!0!==r&&await this.updateNode(e,a),s){if(i[o++]===t)continue;s=!1}await n.appendChild(t),this.forceNativeElementReflow(e,a,t)}}return!0}async detachChildren(e,t){if(!(t&&t.nativeElement))return!1;let r=[];for(let n of t.getChildrenNodes())r.push(this.destroyNode(e,n));return await Promise.all(r),!0}}var A=t.$,I=t.wA,R=t.z8,k=t.q$,M=t.El,F=t.pv,U=t.cQ,J=t.Be,Y=t.d5;
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
  return eval(`(import('${resourcePath.replace(/'/g, '\\\'')}'))`);
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

function load(_resourcePath, options) {
  let resourcePath  = resolveResourcePath(_resourcePath);
  let cache         = cacheMap.get(resourcePath);

  if (cache)
    return cache;

  let promise = handleResource(resourcePath, options).then((_resource) => {
    let resource = _resource;
    if (resource && resource.default)
      resource = resource.default;

    cacheMap.set(resourcePath, resource);

    return resource;
  });

  // Set promise as cache so
  // all promises from multiple
  // load requests are consistent
  cacheMap.set(resourcePath, promise);

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

    let _type    = node.jib.Type;
    let isTerm  = (/^term$/i).test(_type);
    let type    = (isTerm) ? 'span' : _type;
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
const TERM = 'TERM';
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
export { __webpack_exports__$ as $, __webpack_exports__A as A, __webpack_exports__ABBR as ABBR, __webpack_exports__ADDRESS as ADDRESS, __webpack_exports__AREA as AREA, __webpack_exports__ARTICLE as ARTICLE, __webpack_exports__ASIDE as ASIDE, __webpack_exports__AUDIO as AUDIO, __webpack_exports__B as B, __webpack_exports__BASE as BASE, __webpack_exports__BDI as BDI, __webpack_exports__BDO as BDO, __webpack_exports__BLOCKQUOTE as BLOCKQUOTE, __webpack_exports__BR as BR, __webpack_exports__BUTTON as BUTTON, __webpack_exports__CANVAS as CANVAS, __webpack_exports__CAPTION as CAPTION, __webpack_exports__CITE as CITE, __webpack_exports__CODE as CODE, __webpack_exports__COL as COL, __webpack_exports__COLGROUP as COLGROUP, __webpack_exports__Component as Component, __webpack_exports__Components as Components, __webpack_exports__DATA as DATA, __webpack_exports__DATALIST as DATALIST, __webpack_exports__DD as DD, __webpack_exports__DEL as DEL, __webpack_exports__DETAILS as DETAILS, __webpack_exports__DFN as DFN, __webpack_exports__DIALOG as DIALOG, __webpack_exports__DIV as DIV, __webpack_exports__DL as DL, __webpack_exports__DOMRenderer as DOMRenderer, __webpack_exports__DT as DT, __webpack_exports__EM as EM, __webpack_exports__EMBED as EMBED, __webpack_exports__FIELDSET as FIELDSET, __webpack_exports__FIGCAPTION as FIGCAPTION, __webpack_exports__FIGURE as FIGURE, __webpack_exports__FOOTER as FOOTER, __webpack_exports__FORM as FORM, __webpack_exports__H1 as H1, __webpack_exports__H2 as H2, __webpack_exports__H3 as H3, __webpack_exports__H4 as H4, __webpack_exports__H5 as H5, __webpack_exports__H6 as H6, __webpack_exports__HEADER as HEADER, __webpack_exports__HGROUP as HGROUP, __webpack_exports__HR as HR, __webpack_exports__HTMLRenderer as HTMLRenderer, __webpack_exports__I as I, __webpack_exports__IFRAME as IFRAME, __webpack_exports__IMG as IMG, __webpack_exports__INPUT as INPUT, __webpack_exports__INS as INS, __webpack_exports__Jibs as Jibs, __webpack_exports__KBD as KBD, __webpack_exports__LABEL as LABEL, __webpack_exports__LEGEND as LEGEND, __webpack_exports__LI as LI, __webpack_exports__LINK as LINK, __webpack_exports__MAIN as MAIN, __webpack_exports__MAP as MAP, __webpack_exports__MARK as MARK, __webpack_exports__MENU as MENU, __webpack_exports__META as META, __webpack_exports__METER as METER, __webpack_exports__NAV as NAV, __webpack_exports__NOSCRIPT as NOSCRIPT, __webpack_exports__OBJECT as OBJECT, __webpack_exports__OL as OL, __webpack_exports__OPTGROUP as OPTGROUP, __webpack_exports__OPTION as OPTION, __webpack_exports__OUTPUT as OUTPUT, __webpack_exports__P as P, __webpack_exports__PICTURE as PICTURE, __webpack_exports__PRE as PRE, __webpack_exports__PROGRESS as PROGRESS, __webpack_exports__Q as Q, __webpack_exports__RP as RP, __webpack_exports__RT as RT, __webpack_exports__RUBY as RUBY, __webpack_exports__Renderers as Renderers, __webpack_exports__S as S, __webpack_exports__SAMP as SAMP, __webpack_exports__SCRIPT as SCRIPT, __webpack_exports__SECTION as SECTION, __webpack_exports__SELECT as SELECT, __webpack_exports__SLOT as SLOT, __webpack_exports__SMALL as SMALL, __webpack_exports__SOURCE as SOURCE, __webpack_exports__SPAN as SPAN, __webpack_exports__STRONG as STRONG, __webpack_exports__STYLE as STYLE, __webpack_exports__SUB as SUB, __webpack_exports__SUMMARY as SUMMARY, __webpack_exports__SUP as SUP, __webpack_exports__TABLE as TABLE, __webpack_exports__TBODY as TBODY, __webpack_exports__TD as TD, __webpack_exports__TEMPLATE as TEMPLATE, __webpack_exports__TERM as TERM, __webpack_exports__TEXTAREA as TEXTAREA, __webpack_exports__TFOOT as TFOOT, __webpack_exports__TH as TH, __webpack_exports__THEAD as THEAD, __webpack_exports__TIME as TIME, __webpack_exports__TITLE as TITLE, __webpack_exports__TR as TR, __webpack_exports__TRACK as TRACK, __webpack_exports__U as U, __webpack_exports__UL as UL, __webpack_exports__Utils as Utils, __webpack_exports__VAR as VAR, __webpack_exports__VIDEO as VIDEO, __webpack_exports__WBR as WBR, __webpack_exports__addResourceHandler as addResourceHandler, __webpack_exports__addResourceResolver as addResourceResolver, __webpack_exports__cssHandler as cssHandler, __webpack_exports__deadbeef as deadbeef, __webpack_exports__factory as factory, __webpack_exports__javascriptHandler as javascriptHandler, __webpack_exports__load as load, __webpack_exports__removeResourceHandler as removeResourceHandler, __webpack_exports__removeResourceResolver as removeResourceResolver, __webpack_exports__resolveResourcePath as resolveResourcePath };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUix3RUFBd0UsU0FBUztBQUNqRjtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRXFDOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ppYnMtaHRtbC1yZW5kZXJlci8uLi9qaWJzLWRvbS1yZW5kZXJlci9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL2ppYnMtaHRtbC1yZW5kZXJlci8uL2xpYi9yZXNvdXJjZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vamlicy1odG1sLXJlbmRlcmVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ppYnMtaHRtbC1yZW5kZXJlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamlicy1odG1sLXJlbmRlcmVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamlicy1odG1sLXJlbmRlcmVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamlicy1odG1sLXJlbmRlcmVyLy4vbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBlPXtkOih0LHIpPT57Zm9yKHZhciBuIGluIHIpZS5vKHIsbikmJiFlLm8odCxuKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbix7ZW51bWVyYWJsZTohMCxnZXQ6cltuXX0pfSxvOihlLHQpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sdD17fTtlLmQodCx7JDooKT0+byx3QTooKT0+cyx6ODooKT0+YSxxJDooKT0+RE9NUmVuZGVyZXIsRWw6KCk9PmwscHY6KCk9PmMsY1E6KCk9PnUsQmU6KCk9PmQsZDU6KCk9Pmh9KTt2YXIgcj17NzExOmZ1bmN0aW9uKGUsdCxyKXtjb25zdCBuPShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpyLmcpfHx0aGlzLGk9U3ltYm9sLmZvcihcIkBAZGVhZGJlZWZSZWZNYXBcIiksbz1TeW1ib2wuZm9yKFwiQEBkZWFkYmVlZlVuaXF1ZUlEXCIpLHM9bltpXT9uW2ldOm5ldyBXZWFrTWFwLGE9W107bltpXXx8KG5baV09cyk7bGV0IGw9MG47ZnVuY3Rpb24gYW55dGhpbmdUb0lEKGUsdCl7bGV0IHI9ZTsociBpbnN0YW5jZW9mIE51bWJlcnx8ciBpbnN0YW5jZW9mIFN0cmluZ3x8ciBpbnN0YW5jZW9mIEJvb2xlYW4pJiYocj1yLnZhbHVlT2YoKSk7bGV0IG49dHlwZW9mIHI7aWYoXCJudW1iZXJcIj09PW4mJjA9PT1yKXJldHVybiBPYmplY3QuaXMociwtMCk/XCJudW1iZXI6LTBcIjpcIm51bWJlcjorMFwiO2lmKFwic3ltYm9sXCI9PT1uKXJldHVybmBzeW1ib2w6JHtyLnRvU3RyaW5nKCl9YDtpZihudWxsPT1yfHxcIm51bWJlclwiPT09bnx8XCJib29sZWFuXCI9PT1ufHxcInN0cmluZ1wiPT09bnx8XCJiaWdpbnRcIj09PW4pcmV0dXJuXCJudW1iZXJcIj09PW4/cjwwP2BudW1iZXI6JHtyfWA6YG51bWJlcjorJHtyfWA6XCJiaWdpbnRcIj09PW4mJjBuPT09cj9cImJpZ2ludDorMFwiOmAke259OiR7cn1gO2xldCBpPWEubGVuZ3RoPjAmJmZ1bmN0aW9uIGdldEhlbHBlckZvclZhbHVlKGUpe2ZvcihsZXQgdD0wLHI9YS5sZW5ndGg7dDxyO3QrKyl7bGV0e2hlbHBlcjpyLGdlbmVyYXRvcjpufT1hW3RdO2lmKHIoZSkpcmV0dXJuIG59fShyKTtpZihpKXJldHVybiBhbnl0aGluZ1RvSUQoaShyKSk7aWYobyBpbiByJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByW29dJiYoIXR8fCF0LmhhcyhyKSkpe2xldCBlPXR8fG5ldyBTZXQ7cmV0dXJuIGUuYWRkKHIpLGFueXRoaW5nVG9JRChyW29dKCksZSl9aWYoIXMuaGFzKHIpKXtsZXQgZT1gJHt0eXBlb2Ygcn06JHsrK2x9YDtyZXR1cm4gcy5zZXQocixlKSxlfXJldHVybiBzLmdldChyKX1mdW5jdGlvbiBkZWFkYmVlZigpe2xldCBlPVthcmd1bWVudHMubGVuZ3RoXTtmb3IobGV0IHQ9MCxyPWFyZ3VtZW50cy5sZW5ndGg7dDxyO3QrKyllLnB1c2goYW55dGhpbmdUb0lEKGFyZ3VtZW50c1t0XSkpO3JldHVybiBlLmpvaW4oXCI6XCIpfU9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGRlYWRiZWVmLHtpZFN5bTp7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6b30sc29ydGVkOnt3cml0YWJsZTohMCxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTpmdW5jdGlvbiBkZWFkYmVlZlNvcnRlZCgpe2xldCBlPVthcmd1bWVudHMubGVuZ3RoXTtmb3IobGV0IHQ9MCxyPWFyZ3VtZW50cy5sZW5ndGg7dDxyO3QrKyllLnB1c2goYW55dGhpbmdUb0lEKGFyZ3VtZW50c1t0XSkpO3JldHVybiBlLnNvcnQoKS5qb2luKFwiOlwiKX19LGdlbmVyYXRlSURGb3I6e3dyaXRhYmxlOiEwLGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwLHZhbHVlOmZ1bmN0aW9uIGdlbmVyYXRlSURGb3IoZSx0KXthLnB1c2goe2hlbHBlcjplLGdlbmVyYXRvcjp0fSl9fSxyZW1vdmVJREdlbmVyYXRvcjp7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6ZnVuY3Rpb24gcmVtb3ZlSURHZW5lcmF0b3IoZSl7bGV0IHQ9YS5maW5kSW5kZXgoKHQ9PnQuaGVscGVyPT09ZSkpO3Q8MHx8YS5zcGxpY2UodCwxKX19fSksZS5leHBvcnRzPWRlYWRiZWVmfX0sbj17fTtmdW5jdGlvbiBfX25lc3RlZF93ZWJwYWNrX3JlcXVpcmVfMTcxMl9fKGUpe3ZhciB0PW5bZV07aWYodm9pZCAwIT09dClyZXR1cm4gdC5leHBvcnRzO3ZhciBpPW5bZV09e2V4cG9ydHM6e319O3JldHVybiByW2VdLmNhbGwoaS5leHBvcnRzLGksaS5leHBvcnRzLF9fbmVzdGVkX3dlYnBhY2tfcmVxdWlyZV8xNzEyX18pLGkuZXhwb3J0c31fX25lc3RlZF93ZWJwYWNrX3JlcXVpcmVfMTcxMl9fLmQ9KGUsdCk9Pntmb3IodmFyIHIgaW4gdClfX25lc3RlZF93ZWJwYWNrX3JlcXVpcmVfMTcxMl9fLm8odCxyKSYmIV9fbmVzdGVkX3dlYnBhY2tfcmVxdWlyZV8xNzEyX18ubyhlLHIpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLHtlbnVtZXJhYmxlOiEwLGdldDp0W3JdfSl9LF9fbmVzdGVkX3dlYnBhY2tfcmVxdWlyZV8xNzEyX18uZz1mdW5jdGlvbigpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWxUaGlzKXJldHVybiBnbG9iYWxUaGlzO3RyeXtyZXR1cm4gdGhpc3x8bmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKX1jYXRjaChlKXtpZihcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93KXJldHVybiB3aW5kb3d9fSgpLF9fbmVzdGVkX3dlYnBhY2tfcmVxdWlyZV8xNzEyX18ubz0oZSx0KT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCksX19uZXN0ZWRfd2VicGFja19yZXF1aXJlXzE3MTJfXy5yPWU9PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfTt2YXIgaT17fTsoKCk9PntfX25lc3RlZF93ZWJwYWNrX3JlcXVpcmVfMTcxMl9fLmQoaSx7JDooKT0+ZCx3QTooKT0+Q29tcG9uZW50LHo4OigpPT5TLEVsOigpPT5fLHB2OigpPT5DLGNROigpPT5lLEJlOigpPT50LGQ1OigpPT5mYWN0b3J5fSk7dmFyIGU9e307X19uZXN0ZWRfd2VicGFja19yZXF1aXJlXzE3MTJfXy5yKGUpLF9fbmVzdGVkX3dlYnBhY2tfcmVxdWlyZV8xNzEyX18uZChlLHtiaW5kTWV0aG9kczooKT0+YmluZE1ldGhvZHMsY2hpbGRyZW5EaWZmZXI6KCk9PmNoaWxkcmVuRGlmZmVyLGZldGNoRGVlcFByb3BlcnR5OigpPT5mZXRjaERlZXBQcm9wZXJ0eSxmbGF0dGVuQXJyYXk6KCk9PmZsYXR0ZW5BcnJheSxnZW5lcmF0ZVVVSUQ6KCk9PmdlbmVyYXRlVVVJRCxpbnN0YW5jZU9mOigpPT5pbnN0YW5jZU9mLGlzRW1wdHk6KCk9PmlzRW1wdHksaXNJdGVyYWJsZUNoaWxkOigpPT5pc0l0ZXJhYmxlQ2hpbGQsaXNOb3RFbXB0eTooKT0+aXNOb3RFbXB0eSxpc1ZhbGlkQ2hpbGQ6KCk9PmlzVmFsaWRDaGlsZCxpdGVyYXRlOigpPT5zLG5vdzooKT0+bm93LHByb3BzRGlmZmVyOigpPT5wcm9wc0RpZmZlcixzaXplT2Y6KCk9PnNpemVPZn0pO3ZhciB0PV9fbmVzdGVkX3dlYnBhY2tfcmVxdWlyZV8xNzEyX18oNzExKTtjb25zdCByPVN5bWJvbC5mb3IoXCJAamlic0l0ZXJhdGVTdG9wXCIpLG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dm9pZCAwO2xldCBvPTFlNjtmdW5jdGlvbiBpbnN0YW5jZU9mKGUpe2Z1bmN0aW9uIHRlc3RUeXBlKGUsdCl7bGV0IHI9dCxpPXR5cGVvZiBlO3JldHVybiByPT09bi5TdHJpbmc/cj1cInN0cmluZ1wiOnI9PT1uLk51bWJlcj9yPVwibnVtYmVyXCI6cj09PW4uQm9vbGVhbj9yPVwiYm9vbGVhblwiOnI9PT1uLkZ1bmN0aW9uP3I9XCJmdW5jdGlvblwiOnI9PT1uLkFycmF5P3I9XCJhcnJheVwiOnI9PT1uLk9iamVjdD9yPVwib2JqZWN0XCI6cj09PW4uUHJvbWlzZT9yPVwicHJvbWlzZVwiOnI9PT1uLkJpZ0ludD9yPVwiYmlnaW50XCI6cj09PW4uTWFwP3I9XCJtYXBcIjpyPT09bi5XZWFrTWFwP3I9XCJ3ZWFrbWFwXCI6cj09PW4uU2V0P3I9XCJzZXRcIjpyPT09bi5TeW1ib2w/cj1cInN5bWJvbFwiOnI9PT1uLkJ1ZmZlciYmKHI9XCJidWZmZXJcIiksIShcImJ1ZmZlclwiIT09cnx8IW4uQnVmZmVyfHwhbi5CdWZmZXIuaXNCdWZmZXIoZSkpfHwoXCJudW1iZXJcIj09PXImJihcIm51bWJlclwiPT09aXx8ZSBpbnN0YW5jZW9mIE51bWJlcnx8ZS5jb25zdHJ1Y3RvciYmXCJOdW1iZXJcIj09PWUuY29uc3RydWN0b3IubmFtZSk/ISFpc0Zpbml0ZShlKTpcIm9iamVjdFwiIT09ciYmcj09PWl8fChcIm9iamVjdFwiPT09cj8hIShlLmNvbnN0cnVjdG9yPT09T2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvcnx8ZS5jb25zdHJ1Y3RvciYmXCJPYmplY3RcIj09PWUuY29uc3RydWN0b3IubmFtZSl8fFwib2JqZWN0XCI9PT1pJiYhZS5jb25zdHJ1Y3RvcjohKFwiYXJyYXlcIiE9PXJ8fCEoQXJyYXkuaXNBcnJheShlKXx8ZSBpbnN0YW5jZW9mIEFycmF5fHxlLmNvbnN0cnVjdG9yJiZcIkFycmF5XCI9PT1lLmNvbnN0cnVjdG9yLm5hbWUpKXx8IShcInByb21pc2VcIiE9PXImJlwiZGVmZXJyZWRcIiE9PXJ8fCFmdW5jdGlvbiBpc0RlZmVycmVkVHlwZShlKXtyZXR1cm4hIShlIGluc3RhbmNlb2YgUHJvbWlzZXx8ZS5jb25zdHJ1Y3RvciYmXCJQcm9taXNlXCI9PT1lLmNvbnN0cnVjdG9yLm5hbWUpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnRoZW4mJlwiZnVuY3Rpb25cIj09dHlwZW9mIGUuY2F0Y2h9KGUpKXx8IShcInN0cmluZ1wiIT09cnx8IShlIGluc3RhbmNlb2Ygbi5TdHJpbmd8fGUuY29uc3RydWN0b3ImJlwiU3RyaW5nXCI9PT1lLmNvbnN0cnVjdG9yLm5hbWUpKXx8IShcImJvb2xlYW5cIiE9PXJ8fCEoZSBpbnN0YW5jZW9mIG4uQm9vbGVhbnx8ZS5jb25zdHJ1Y3RvciYmXCJCb29sZWFuXCI9PT1lLmNvbnN0cnVjdG9yLm5hbWUpKXx8IShcIm1hcFwiIT09cnx8IShlIGluc3RhbmNlb2Ygbi5NYXB8fGUuY29uc3RydWN0b3ImJlwiTWFwXCI9PT1lLmNvbnN0cnVjdG9yLm5hbWUpKXx8IShcIndlYWttYXBcIiE9PXJ8fCEoZSBpbnN0YW5jZW9mIG4uV2Vha01hcHx8ZS5jb25zdHJ1Y3RvciYmXCJXZWFrTWFwXCI9PT1lLmNvbnN0cnVjdG9yLm5hbWUpKXx8IShcInNldFwiIT09cnx8IShlIGluc3RhbmNlb2Ygbi5TZXR8fGUuY29uc3RydWN0b3ImJlwiU2V0XCI9PT1lLmNvbnN0cnVjdG9yLm5hbWUpKXx8XCJmdW5jdGlvblwiPT09ciYmXCJmdW5jdGlvblwiPT09aXx8XCJmdW5jdGlvblwiPT10eXBlb2YgciYmZSBpbnN0YW5jZW9mIHJ8fCEoXCJzdHJpbmdcIiE9dHlwZW9mIHJ8fCFlLmNvbnN0cnVjdG9yfHxlLmNvbnN0cnVjdG9yLm5hbWUhPT1yKSkpfWlmKG51bGw9PWUpcmV0dXJuITE7Zm9yKHZhciB0PTEscj1hcmd1bWVudHMubGVuZ3RoO3Q8cjt0KyspaWYoITA9PT10ZXN0VHlwZShlLGFyZ3VtZW50c1t0XSkpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gcHJvcHNEaWZmZXIoZSx0LHIpe2lmKGU9PT10KXJldHVybiExO2lmKHR5cGVvZiBlIT10eXBlb2YgdClyZXR1cm4hMDtpZighZSYmdClyZXR1cm4hMDtpZihlJiYhdClyZXR1cm4hMDtpZighZSYmIXQmJmUhPWUpcmV0dXJuITA7bGV0IG49T2JqZWN0LmtleXMoZSkuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSkpLGk9T2JqZWN0LmtleXModCkuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModCkpO2lmKG4ubGVuZ3RoIT09aS5sZW5ndGgpcmV0dXJuITA7Zm9yKGxldCBvPTAscz1uLmxlbmd0aDtvPHM7bysrKXtsZXQgcz1uW29dO2lmKHImJnIuaW5kZXhPZihzKT49MCljb250aW51ZTtpZihlW3NdIT09dFtzXSlyZXR1cm4hMDtsZXQgYT1pW29dO2lmKCEociYmci5pbmRleE9mKGEpfHxzPT09YXx8ZVthXT09PXRbYV0pKXJldHVybiEwfXJldHVybiExfWZ1bmN0aW9uIHNpemVPZihlKXtyZXR1cm4gZT9PYmplY3QuaXMoMS8wKT8wOlwibnVtYmVyXCI9PXR5cGVvZiBlLmxlbmd0aD9lLmxlbmd0aDpPYmplY3Qua2V5cyhlKS5sZW5ndGg6MH1mdW5jdGlvbiBfaXRlcmF0ZShlLHQpe2lmKCFlfHxPYmplY3QuaXMoMS8wKSlyZXR1cm5bXTtsZXQgbixpPVtdLG89e2NvbGxlY3Rpb246ZSxTVE9QOnJ9O2lmKEFycmF5LmlzQXJyYXkoZSkpe28udHlwZT1cIkFycmF5XCI7Zm9yKGxldCBzPTAsYT1lLmxlbmd0aDtzPGEmJihvLnZhbHVlPWVbc10sby5pbmRleD1vLmtleT1zLG49dC5jYWxsKHRoaXMsbyksbiE9PXIpO3MrKylpLnB1c2gobil9ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmVudHJpZXMpaWYoZSBpbnN0YW5jZW9mIFNldHx8XCJTZXRcIj09PWUuY29uc3RydWN0b3IubmFtZSl7by50eXBlPVwiU2V0XCI7bGV0IHM9MDtmb3IobGV0IGEgb2YgZS52YWx1ZXMoKSl7aWYoby52YWx1ZT1hLG8ua2V5PWEsby5pbmRleD1zKyssbj10LmNhbGwodGhpcyxvKSxuPT09cilicmVhaztpLnB1c2gobil9fWVsc2V7by50eXBlPWUuY29uc3RydWN0b3IubmFtZTtsZXQgcz0wO2ZvcihsZXRbYSxsXW9mIGUuZW50cmllcygpKXtpZihvLnZhbHVlPWwsby5rZXk9YSxvLmluZGV4PXMrKyxuPXQuY2FsbCh0aGlzLG8pLG49PT1yKWJyZWFrO2kucHVzaChuKX19ZWxzZXtpZihpbnN0YW5jZU9mKGUsXCJib29sZWFuXCIsXCJudW1iZXJcIixcImJpZ2ludFwiLFwiZnVuY3Rpb25cIikpcmV0dXJuO28udHlwZT1lLmNvbnN0cnVjdG9yP2UuY29uc3RydWN0b3IubmFtZTpcIk9iamVjdFwiO2xldCBzPU9iamVjdC5rZXlzKGUpO2ZvcihsZXQgYT0wLGw9cy5sZW5ndGg7YTxsO2ErKyl7bGV0IGw9c1thXSxjPWVbbF07aWYoby52YWx1ZT1jLG8ua2V5PWwsby5pbmRleD1hLG49dC5jYWxsKHRoaXMsbyksbj09PXIpYnJlYWs7aS5wdXNoKG4pfX1yZXR1cm4gaX1PYmplY3QuZGVmaW5lUHJvcGVydGllcyhfaXRlcmF0ZSx7U1RPUDp7d3JpdGFibGU6ITEsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITEsdmFsdWU6cn19KTtjb25zdCBzPV9pdGVyYXRlO2Z1bmN0aW9uIGNoaWxkcmVuRGlmZmVyKGUscil7bGV0IG49QXJyYXkuaXNBcnJheShlKT9lOltlXSxpPUFycmF5LmlzQXJyYXkocik/cjpbcl07cmV0dXJuIHQoLi4ubikhPT10KC4uLmkpfWZ1bmN0aW9uIGZldGNoRGVlcFByb3BlcnR5KGUsdCxyLG4pe2lmKG51bGw9PWV8fE9iamVjdC5pcyhOYU4sZSl8fE9iamVjdC5pcygxLzAsZSkpcmV0dXJuIG4/W3IsbnVsbF06cjtpZihudWxsPT10fHxPYmplY3QuaXMoTmFOLHQpfHxPYmplY3QuaXMoMS8wLHQpKXJldHVybiBuP1tyLG51bGxdOnI7bGV0IGk7aWYoQXJyYXkuaXNBcnJheSh0KSlpPXQ7ZWxzZSBpZihcInN5bWJvbFwiPT10eXBlb2YgdClpPVt0XTtlbHNle2xldCBlPVwiXCIrdCxyPTAsbj0wO2ZvcihpPVtdOzspe2xldCB0PWUuaW5kZXhPZihcIi5cIixyKTtpZih0PDApe2kucHVzaChlLnN1YnN0cmluZyhuKSk7YnJlYWt9XCJcXFxcXCIhPT1lLmNoYXJBdCh0LTEpPyhpLnB1c2goZS5zdWJzdHJpbmcobix0KSksbj1yPXQrMSk6cj10KzF9fWxldCBvPWlbaS5sZW5ndGgtMV07aWYoMD09PWkubGVuZ3RoKXJldHVybiBuP1tyLG9dOnI7bGV0IHM9ZTtmb3IobGV0IGU9MCx0PWkubGVuZ3RoO2U8dDtlKyspaWYocz1zW2lbZV1dLG51bGw9PXMpcmV0dXJuIG4/W3Isb106cjtyZXR1cm4gbj9bcyxvXTpzfWZ1bmN0aW9uIGJpbmRNZXRob2RzKGUsdCl7bGV0IHI9ZSxuPW5ldyBTZXQ7Zm9yKDtyOyl7bGV0IGU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMociksaT1PYmplY3Qua2V5cyhlKS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKSk7Zm9yKGxldCBlPTAsdD1pLmxlbmd0aDtlPHQ7ZSsrKXtsZXQgdD1pW2VdO2lmKFwiY29uc3RydWN0b3JcIj09PXQpY29udGludWU7aWYobi5oYXModCkpY29udGludWU7bi5hZGQodCk7bGV0IG89clt0XTtPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KHQpJiZPYmplY3QucHJvdG90eXBlW3RdPT09b3x8XCJmdW5jdGlvblwiPT10eXBlb2YgbyYmKHRoaXNbdF09by5iaW5kKHRoaXMpKX1pZihyPU9iamVjdC5nZXRQcm90b3R5cGVPZihyKSxyPT09T2JqZWN0LnByb3RvdHlwZSlicmVhaztpZih0JiZ0LmluZGV4T2Yocik+PTApYnJlYWt9fWZ1bmN0aW9uIGlzRW1wdHkoZSl7cmV0dXJuIShudWxsIT1lJiYoT2JqZWN0LmlzKGUsMS8wKXx8IU9iamVjdC5pcyhlLE5hTikmJihpbnN0YW5jZU9mKGUsXCJzdHJpbmdcIik/L1xcUy8udGVzdChlKTppbnN0YW5jZU9mKGUsXCJudW1iZXJcIikmJmlzRmluaXRlKGUpfHxpbnN0YW5jZU9mKGUsXCJib29sZWFuXCIsXCJiaWdpbnRcIixcImZ1bmN0aW9uXCIpfHwwIT09c2l6ZU9mKGUpKSkpfWZ1bmN0aW9uIGlzTm90RW1wdHkoZSl7cmV0dXJuIWlzRW1wdHkuY2FsbCh0aGlzLGUpfWZ1bmN0aW9uIGZsYXR0ZW5BcnJheShlKXtpZighQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZTtsZXQgdD1bXTtmb3IobGV0IHI9MCxuPWUubGVuZ3RoO3I8bjtyKyspe2xldCBuPWVbcl07QXJyYXkuaXNBcnJheShuKT90PXQuY29uY2F0KGZsYXR0ZW5BcnJheShuKSk6dC5wdXNoKG4pfXJldHVybiB0fWZ1bmN0aW9uIGlzVmFsaWRDaGlsZChlKXtyZXR1cm4gbnVsbCE9ZSYmXCJib29sZWFuXCIhPXR5cGVvZiBlJiYhT2JqZWN0LmlzKGUsMS8wKSYmIU9iamVjdC5pcyhlLE5hTil9ZnVuY3Rpb24gaXNJdGVyYWJsZUNoaWxkKGUpe3JldHVybiBudWxsIT1lJiYhT2JqZWN0LmlzKGUsTmFOKSYmIU9iamVjdC5pcyhlLDEvMCkmJihBcnJheS5pc0FycmF5KGUpfHxcIm9iamVjdFwiPT10eXBlb2YgZSYmIWluc3RhbmNlT2YoZSxcImJvb2xlYW5cIixcIm51bWJlclwiLFwic3RyaW5nXCIpKX1mdW5jdGlvbiBub3coKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgcGVyZm9ybWFuY2UmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHBlcmZvcm1hbmNlLm5vdz9wZXJmb3JtYW5jZS5ub3coKTpEYXRlLm5vdygpfWZ1bmN0aW9uIGdlbmVyYXRlVVVJRCgpe3JldHVybiBvPjk5OTk5OTkmJihvPTFlNiksYCR7RGF0ZS5ub3coKX0uJHtvKyt9JHtNYXRoLnJvdW5kKDFlNypNYXRoLnJhbmRvbSgpKS50b1N0cmluZygpLnBhZFN0YXJ0KDIwLFwiMFwiKX1gfWNsYXNzIEppYntjb25zdHJ1Y3RvcihlLHQscil7bGV0IG49ZSYmZS5wcm9wcz9lLnByb3BzOnt9O09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMse1R5cGU6e3dyaXRhYmxlOiEwLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHZhbHVlOmV9LHByb3BzOnt3cml0YWJsZTohMCxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTp7Li4ubiwuLi50fHx7fX19LGNoaWxkcmVuOnt3cml0YWJsZTohMCxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTpmbGF0dGVuQXJyYXkocil9fSl9fWNvbnN0IGE9U3ltYm9sLmZvcihcIkBqaWJzLmJhcnJlblwiKSxsPVN5bWJvbC5mb3IoXCJAamlicy5wcm94eVwiKSxjPVN5bWJvbC5mb3IoXCJAamlicy5yYXdUZXh0XCIpLHU9U3ltYm9sLmZvcihcIkBqaWJzLmppYlwiKTtmdW5jdGlvbiBmYWN0b3J5KGUpe3JldHVybiBmdW5jdGlvbiAkKHIsbj17fSl7aWYoaXNKaWJpc2gocikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlJlY2VpdmVkIGEgamliIGJ1dCBleHBlY3RlZCBhIGNvbXBvbmVudC5cIik7bGV0IGk9bnVsbD09cj9sOnI7ZnVuY3Rpb24gYmFycmVuKC4uLnIpe2xldCBvPXI7ZnVuY3Rpb24gamliKCl7cmV0dXJuIGluc3RhbmNlT2YoaSxcInByb21pc2VcIil8fG8uc29tZSgoZT0+aW5zdGFuY2VPZihlLFwicHJvbWlzZVwiKSkpP1Byb21pc2UuYWxsKFtpXS5jb25jYXQobykpLnRoZW4oKHQ9PihpPXRbMF0sbz10LnNsaWNlKDEpLG5ldyBlKGksbixvKSkpKTpuZXcgZShpLG4sbyl9cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGppYix7W3VdOnt3cml0YWJsZTohMSxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMSx2YWx1ZTohMH0sW3QuaWRTeW1dOnt3cml0YWJsZTohMSxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMSx2YWx1ZTooKT0+aX19KSxqaWJ9cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGJhcnJlbix7W2FdOnt3cml0YWJsZTohMSxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMSx2YWx1ZTohMH0sW3QuaWRTeW1dOnt3cml0YWJsZTohMSxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMSx2YWx1ZTooKT0+aX19KSxiYXJyZW59fWNvbnN0IGQ9ZmFjdG9yeShKaWIpO2Z1bmN0aW9uIGlzSmliaXNoKGUpe3JldHVybiEoXCJmdW5jdGlvblwiIT10eXBlb2YgZXx8IWVbYV0mJiFlW3VdKXx8ZSBpbnN0YW5jZW9mIEppYn1mdW5jdGlvbiBjb25zdHJ1Y3RKaWIoZSl7aWYoZSBpbnN0YW5jZW9mIEppYilyZXR1cm4gZTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBlKXtpZihlW2FdKXJldHVybiBlKCkoKTtpZihlW3VdKXJldHVybiBlKCl9dGhyb3cgbmV3IFR5cGVFcnJvcihcImNvbnN0cnVjdEppYjogUHJvdmlkZWQgdmFsdWUgaXMgbm90IGEgSmliLlwiKX1hc3luYyBmdW5jdGlvbiByZXNvbHZlQ2hpbGRyZW4oZSl7bGV0IHQ9ZTtpbnN0YW5jZU9mKHQsXCJwcm9taXNlXCIpJiYodD1hd2FpdCB0KSwodGhpcy5pc0l0ZXJhYmxlQ2hpbGR8fGlzSXRlcmFibGVDaGlsZCkuY2FsbCh0aGlzLHQpfHwhaXNKaWJpc2godCkmJiEodGhpcy5pc1ZhbGlkQ2hpbGR8fGlzVmFsaWRDaGlsZCkuY2FsbCh0aGlzLHQpfHwodD1bdF0pO2xldCByPXModCwoYXN5bmMoe3ZhbHVlOmV9KT0+e2xldCB0PWluc3RhbmNlT2YoZSxcInByb21pc2VcIik/YXdhaXQgZTplO3JldHVybiBpc0ppYmlzaCh0KT9hd2FpdCBjb25zdHJ1Y3RKaWIodCk6dH0pKTtyZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwocil9Y29uc3QgaD1TeW1ib2wuZm9yKFwiQGppYnMvZXZlbnRzL2xpc3RlbmVyc1wiKTtjbGFzcyBFdmVudEVtaXR0ZXJ7Y29uc3RydWN0b3IoKXtPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLHtbaF06e3dyaXRhYmxlOiExLGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiExLHZhbHVlOm5ldyBNYXB9fSl9YWRkTGlzdGVuZXIoZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IG5ldyBUeXBlRXJyb3IoXCJFdmVudCBsaXN0ZW5lciBtdXN0IGJlIGEgbWV0aG9kXCIpO2xldCByPXRoaXNbaF0sbj1yLmdldChlKTtyZXR1cm4gbnx8KG49W10sci5zZXQoZSxuKSksbi5wdXNoKHQpLHRoaXN9cmVtb3ZlTGlzdGVuZXIoZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IG5ldyBUeXBlRXJyb3IoXCJFdmVudCBsaXN0ZW5lciBtdXN0IGJlIGEgbWV0aG9kXCIpO2xldCByPXRoaXNbaF0uZ2V0KGUpO2lmKCFyKXJldHVybiB0aGlzO2xldCBuPXIuaW5kZXhPZih0KTtyZXR1cm4gbj49MCYmci5zcGxpY2UobiwxKSx0aGlzfXJlbW92ZUFsbExpc3RlbmVycyhlKXtsZXQgdD10aGlzW2hdO3JldHVybiB0LmhhcyhlKT8odC5zZXQoZSxbXSksdGhpcyk6dGhpc31lbWl0KGUsLi4udCl7bGV0IHI9dGhpc1toXS5nZXQoZSk7aWYoIXJ8fDA9PT1yLmxlbmd0aClyZXR1cm4hMTtmb3IobGV0IGU9MCxuPXIubGVuZ3RoO2U8bjtlKyspcltlXS5hcHBseSh0aGlzLHQpO3JldHVybiEwfW9uY2UoZSx0KXtsZXQgZnVuYz0oLi4ucik9Pih0aGlzLm9mZihlLGZ1bmMpLHQoLi4ucikpO3JldHVybiB0aGlzLm9uKGUsZnVuYyl9b24oZSx0KXtyZXR1cm4gdGhpcy5hZGRMaXN0ZW5lcihlLHQpfW9mZihlLHQpe3JldHVybiB0aGlzLnJlbW92ZUxpc3RlbmVyKGUsdCl9ZXZlbnROYW1lcygpe3JldHVybiBBcnJheS5mcm9tKHRoaXNbaF0ua2V5cygpKX1saXN0ZW5lckNvdW50KGUpe2xldCB0PXRoaXNbaF0uZ2V0KGUpO3JldHVybiB0P3QubGVuZ3RoOjB9bGlzdGVuZXJzKGUpe2xldCB0PXRoaXNbaF0uZ2V0KGUpO3JldHVybiB0P3Quc2xpY2UoKTpbXX19Y29uc3QgZj1cIkBqaWJzL2NvbXBvbmVudC9ldmVudC91cGRhdGVcIixwPVN5bWJvbC5mb3IoXCJAamlicy9jb21wb25lbnQvcXVldWVVcGRhdGVcIiksYj1TeW1ib2wuZm9yKFwiQGppYnMvY29tcG9uZW50L2ZsdXNoVXBkYXRlXCIpLG09U3ltYm9sLmZvcihcIkBqaWJzL2NvbXBvbmVudC9fX2luaXRcIikseT1TeW1ib2wuZm9yKFwiQGppYnMvY29tcG9uZW50L3NraXBTdGF0ZVVwZGF0ZXNcIiksZz1TeW1ib2wuZm9yKFwiQGppYnMvY29tcG9uZW50L3BlbmRpbmdTdGF0ZVVwZGF0ZVwiKSx3PVN5bWJvbC5mb3IoXCJAamlicy9jb21wb25lbnQvbGFzdFJlbmRlclRpbWVcIiksTj1TeW1ib2wuZm9yKFwiQGppYnMvY29tcG9uZW50L3ByZXZpb3VzU3RhdGVcIiksTz1TeW1ib2wuZm9yKFwiQGppYnMvY29tcG9uZW50L3ByZXZpb3VzU3RhdGVcIiksdj1uZXcgV2Vha01hcDtmdW5jdGlvbiBpc1ZhbGlkU3RhdGVPYmplY3QoZSl7aWYobnVsbD09ZSlyZXR1cm4hMTtpZihPYmplY3QuaXMoZSxOYU4pKXJldHVybiExO2lmKE9iamVjdC5pcyhlLDEvMCkpcmV0dXJuITE7aWYoZSBpbnN0YW5jZW9mIEJvb2xlYW58fGUgaW5zdGFuY2VvZiBOdW1iZXJ8fGUgaW5zdGFuY2VvZiBTdHJpbmcpcmV0dXJuITE7bGV0IHQ9dHlwZW9mIGU7cmV0dXJuIShcInN0cmluZ1wiPT09dHx8XCJudW1iZXJcIj09PXR8fFwiYm9vbGVhblwiPT09dHx8QXJyYXkuaXNBcnJheShlKXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEJ1ZmZlciYmQnVmZmVyLmlzQnVmZmVyKGUpKX1jbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBFdmVudEVtaXR0ZXJ7c3RhdGljIFVQREFURV9FVkVOVD1mO1twXSgpe3RoaXNbZ118fCh0aGlzW2ddPVByb21pc2UucmVzb2x2ZSgpLHRoaXNbZ10udGhlbih0aGlzW2JdLmJpbmQodGhpcykpKX1bYl0oKXt0aGlzW2ddJiYodGhpcy5lbWl0KGYpLHRoaXNbZ109bnVsbCl9W21dKCl7dGhpc1t5XT0hMX1jb25zdHJ1Y3RvcihlKXtzdXBlcigpLGJpbmRNZXRob2RzLmNhbGwodGhpcyx0aGlzLmNvbnN0cnVjdG9yLnByb3RvdHlwZSk7bGV0IHQ9ZXx8e30scj1PYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksdC5wcm9wc3x8e30pLG49KCgpPT57bGV0IGU9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm4gbmV3IFByb3h5KGUse2dldDooZSx0KT0+ZVt0XSxzZXQ6KGUsdCxyKT0+e2xldCBuPWVbdF07cmV0dXJuIG49PT1yfHwodGhpc1t5XXx8dGhpc1twXSgpLGVbdF09cix0aGlzLm9uU3RhdGVVcGRhdGVkKHQscixuKSksITB9fSl9KSgpO09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMse1t5XTp7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6ITB9LFtnXTp7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6UHJvbWlzZS5yZXNvbHZlKCl9LFt3XTp7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6bm93KCl9LFtPXTp7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6e319LGlkOnt3cml0YWJsZTohMSxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMSx2YWx1ZTp0LmlkfSxwcm9wczp7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6cn0sY2hpbGRyZW46e3dyaXRhYmxlOiEwLGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwLHZhbHVlOnQuY2hpbGRyZW58fFtdfSxjb250ZXh0Ont3cml0YWJsZTohMCxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTp0LmNvbnRleHR8fE9iamVjdC5jcmVhdGUobnVsbCl9LHN0YXRlOntlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCxnZXQ6KCk9Pm4sc2V0OmU9PntpZighaXNWYWxpZFN0YXRlT2JqZWN0KGUpKXRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgdmFsdWUgZm9yIFwidGhpcy5zdGF0ZVwiOiBcIiR7ZX1cIi4gUHJvdmlkZWQgXCJzdGF0ZVwiIG11c3QgYmUgYW4gaXRlcmFibGUgb2JqZWN0LmApO09iamVjdC5hc3NpZ24obixlKX19fSl9cmVzb2x2ZUNoaWxkcmVuKGUpe3JldHVybiByZXNvbHZlQ2hpbGRyZW4uY2FsbCh0aGlzLGUpfWlzSmliKGUpe3JldHVybiBpc0ppYmlzaChlKX1jb25zdHJ1Y3RKaWIoZSl7cmV0dXJuIGNvbnN0cnVjdEppYihlKX1wdXNoUmVuZGVyKGUpe3RoaXMuZW1pdChmLGUpfW9uUHJvcFVwZGF0ZWQoZSx0LHIpe31vblN0YXRlVXBkYXRlZChlLHQscil7fWNhcHR1cmVSZWZlcmVuY2UoZSx0KXtsZXQgcj10aGlzW09dW2VdO3JldHVybiByfHwocj0ocixuKT0+e2xldCBpPXI7XCJmdW5jdGlvblwiPT10eXBlb2YgdCYmKGk9dC5jYWxsKHRoaXMsaSxuKSksT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcyx7W2VdOnt3cml0YWJsZTohMCxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTppfX0pfSxcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiYodGhpc1tPXT1yKSxyKX1mb3JjZVVwZGF0ZSgpe3RoaXNbcF0oKX1nZXRTdGF0ZShlLHQpe2xldCByPXRoaXMuc3RhdGU7aWYoMD09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHI7aWYoaW5zdGFuY2VPZihlLFwib2JqZWN0XCIpKXtsZXQgdD1PYmplY3Qua2V5cyhlKS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKSksbj17fTtmb3IobGV0IGk9MCxvPXQubGVuZ3RoO2k8bztpKyspe2xldCBvPXRbaV0sW3MsYV09ZmV0Y2hEZWVwUHJvcGVydHkocixvLGVbb10sITApO251bGwhPWEmJihuW2FdPXMpfXJldHVybiBufXJldHVybiBmZXRjaERlZXBQcm9wZXJ0eShyLGUsdCl9c2V0U3RhdGUoZSl7aWYoIWlzVmFsaWRTdGF0ZU9iamVjdChlKSl0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIHZhbHVlIGZvciBcInRoaXMuc2V0U3RhdGVcIjogXCIke2V9XCIuIFByb3ZpZGVkIFwic3RhdGVcIiBtdXN0IGJlIGFuIGl0ZXJhYmxlIG9iamVjdC5gKTtPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsZSl9c2V0U3RhdGVQYXNzaXZlKGUpe2lmKCFpc1ZhbGlkU3RhdGVPYmplY3QoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCB2YWx1ZSBmb3IgXCJ0aGlzLnNldFN0YXRlUGFzc2l2ZVwiOiBcIiR7ZX1cIi4gUHJvdmlkZWQgXCJzdGF0ZVwiIG11c3QgYmUgYW4gaXRlcmFibGUgb2JqZWN0LmApO3RyeXt0aGlzW3ldPSEwLE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSxlKX1maW5hbGx5e3RoaXNbeV09ITF9fXNob3VsZFVwZGF0ZSgpe3JldHVybiEwfWRlc3Ryb3koKXtkZWxldGUgdGhpcy5zdGF0ZSxkZWxldGUgdGhpcy5wcm9wcyxkZWxldGUgdGhpcy5jb250ZXh0LGRlbGV0ZSB0aGlzW09dLHRoaXMuY2xlYXJBbGxEZWJvdW5jZXMoKX1yZW5kZXJXYWl0aW5nKCl7fXJlbmRlcihlKXtyZXR1cm4gZX11cGRhdGVkKCl7fWNvbWJpbmVXaXRoKGUsLi4udCl7bGV0IHI9bmV3IFNldDtmb3IobGV0IG49MCxpPXQubGVuZ3RoO248aTtuKyspe2xldCBpPXRbbl07aWYoaSlpZihpbnN0YW5jZU9mKGksXCJzdHJpbmdcIikpe2xldCB0PWkuc3BsaXQoZSkuZmlsdGVyKGlzTm90RW1wdHkpO2ZvcihsZXQgZT0wLG49dC5sZW5ndGg7ZTxuO2UrKyl7bGV0IG49dFtlXTtyLmFkZChuKX19ZWxzZSBpZihBcnJheS5pc0FycmF5KGkpKXtsZXQgZT1pLmZpbHRlcigoZT0+ISFlJiYhIWluc3RhbmNlT2YoZSxcInN0cmluZ1wiKSYmaXNOb3RFbXB0eShlKSkpO2ZvcihsZXQgdD0wLG49ZS5sZW5ndGg7dDxuO3QrKyl7bGV0IG49ZVt0XTtyLmFkZChuKX19ZWxzZSBpZihpbnN0YW5jZU9mKGksXCJvYmplY3RcIikpe2xldCBlPU9iamVjdC5rZXlzKGkpO2ZvcihsZXQgdD0wLG49ZS5sZW5ndGg7dDxuO3QrKyl7bGV0IG49ZVt0XTtpW25dP3IuYWRkKG4pOnIuZGVsZXRlKG4pfX19cmV0dXJuIEFycmF5LmZyb20ocikuam9pbihlfHxcIlwiKX1jbGFzc2VzKC4uLmUpe3JldHVybiB0aGlzLmNvbWJpbmVXaXRoKFwiIFwiLC4uLmUpfWV4dHJhY3RDaGlsZHJlbihlLHQpe2xldCByPXt9LG49ZSxpPUFycmF5LmlzQXJyYXkobik7cmV0dXJuIHIucmVtYWluaW5nQ2hpbGRyZW49dC5maWx0ZXIoKGU9PiEoZT0+e2xldCB0PWUuVHlwZTtpZihpbnN0YW5jZU9mKHQsXCJzdHJpbmdcIikmJih0PXQudG9Mb3dlckNhc2UoKSksaSlmb3IobGV0IGk9MCxvPW4ubGVuZ3RoO2k8bztpKyspe2xldCBvPW5baV07aWYoaW5zdGFuY2VPZihvLFwic3RyaW5nXCIpJiYobz1vLnRvTG93ZXJDYXNlKCkpLHQ9PT1vKXJldHVybiByW29dPWUsITB9ZWxzZXtsZXQgaT1PYmplY3Qua2V5cyhuKTtmb3IobGV0IG89MCxzPWkubGVuZ3RoO288cztvKyspe2xldCBzLGE9aVtvXSxsPW5bYV07aWYocz1pbnN0YW5jZU9mKGwsUmVnRXhwKT9sLnRlc3QodCk6aW5zdGFuY2VPZihsLFwic3RyaW5nXCIpP2wudG9Mb3dlckNhc2UoKT09PXQ6bD09PXQscylyZXR1cm4gclthXT1lLCEwfX1yZXR1cm4hMX0pKGUpKSkscn1kZWJvdW5jZShlLHQscil7Y29uc3QgY2xlYXJQZW5kaW5nVGltZW91dD0oKT0+e2kmJmkudGltZW91dCYmKGNsZWFyVGltZW91dChpLnRpbWVvdXQpLGkudGltZW91dD1udWxsKX07dmFyIG49cnx8XCJcIitlO3RoaXMuZGVib3VuY2VUaW1lcnN8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiZGVib3VuY2VUaW1lcnNcIix7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6e319KTt2YXIgaT10aGlzLmRlYm91bmNlVGltZXJzW25dO2l8fChpPXRoaXMuZGVib3VuY2VUaW1lcnNbbl09e30pLGkuZnVuYz1lLGNsZWFyUGVuZGluZ1RpbWVvdXQoKTt2YXIgbz1pLnByb21pc2U7aWYoIW98fCFvLnBlbmRpbmcoKSl7bGV0IGUsdD1cInBlbmRpbmdcIjsobz1pLnByb21pc2U9bmV3IFByb21pc2UoKHQ9PntlPXR9KSkpLnJlc29sdmU9KCk9PntpZihcInBlbmRpbmdcIj09PXQpaWYodD1cImZ1bGZpbGxlZFwiLGNsZWFyUGVuZGluZ1RpbWVvdXQoKSx0aGlzLmRlYm91bmNlVGltZXJzW25dPW51bGwsXCJmdW5jdGlvblwiPT10eXBlb2YgaS5mdW5jKXt2YXIgcj1pLmZ1bmMuY2FsbCh0aGlzKTtyIGluc3RhbmNlb2YgUHJvbWlzZXx8ciYmXCJmdW5jdGlvblwiPT10eXBlb2Ygci50aGVuP3IudGhlbigodD0+ZSh0KSkpOmUocil9ZWxzZSBlKCl9LG8uY2FuY2VsPSgpPT57dD1cInJlamVjdGVkXCIsY2xlYXJQZW5kaW5nVGltZW91dCgpLHRoaXMuZGVib3VuY2VUaW1lcnNbbl09bnVsbCxvLnJlc29sdmUoKX0sby5pc1BlbmRpbmc9KCk9PlwicGVuZGluZ1wiPT09dH1yZXR1cm4gaS50aW1lb3V0PXNldFRpbWVvdXQoby5yZXNvbHZlLG51bGw9PXQ/MjUwOnQpLG99Y2xlYXJEZWJvdW5jZShlKXt2YXIgdD10aGlzLmRlYm91bmNlVGltZXJzW2VdO251bGwhPXQmJih0LnRpbWVvdXQmJmNsZWFyVGltZW91dCh0LnRpbWVvdXQpLHQucHJvbWlzZSYmdC5wcm9taXNlLmNhbmNlbCgpKX1jbGVhckFsbERlYm91bmNlcygpe2xldCBlPXRoaXMuZGVib3VuY2VUaW1lcnN8fHt9LHQ9T2JqZWN0LmtleXMoZSk7Zm9yKGxldCBlPTAscj10Lmxlbmd0aDtlPHI7ZSsrKXRoaXMuY2xlYXJEZWJvdW5jZSh0W2VdKX1nZXRFbGVtZW50RGF0YShlKXtsZXQgdD12LmdldChlKTtyZXR1cm4gdHx8KHQ9e30sdi5zZXQoZSx0KSksdH1tZW1vaXplKGUpe2xldCByLG47cmV0dXJuIGZ1bmN0aW9uKC4uLmkpe2xldCBvPXQoLi4uaSk7aWYobyE9PXIpe2xldCB0PWUuYXBwbHkodGhpcyxpKTtyPW8sbj10fXJldHVybiBufX19Y29uc3QgVD1TeW1ib2wuZm9yKFwiQGppYnMvbm9kZS9jb250ZXh0SURcIik7Y2xhc3MgUm9vdE5vZGV7c3RhdGljIENPTlRFWFRfSUQ9VDtjb25zdHJ1Y3RvcihlLHQscixuKXtsZXQgaT1udWxsOyhlfHx0aGlzLmNyZWF0ZUNvbnRleHQpJiYoaT0oZXx8dGhpcykuY3JlYXRlQ29udGV4dChyLHRoaXMub25Db250ZXh0VXBkYXRlP3RoaXMub25Db250ZXh0VXBkYXRlOnZvaWQgMCx0aGlzKSksT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcyx7VFlQRTp7ZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITEsZ2V0OigpPT50aGlzLmNvbnN0cnVjdG9yLlRZUEUsc2V0OigpPT57fX0saWQ6e3dyaXRhYmxlOiExLGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiExLHZhbHVlOmdlbmVyYXRlVVVJRCgpfSxyZW5kZXJlcjp7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6ZX0scGFyZW50Tm9kZTp7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6dH0sY2hpbGROb2Rlczp7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6bmV3IE1hcH0sY29udGV4dDp7ZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsZ2V0OigpPT5pLHNldDooKT0+e319LGRlc3Ryb3lpbmc6e3dyaXRhYmxlOiEwLGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwLHZhbHVlOiExfSxyZW5kZXJQcm9taXNlOnt3cml0YWJsZTohMCxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTpudWxsfSxyZW5kZXJGcmFtZTp7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6MH0samliOnt3cml0YWJsZTohMCxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTpufSxuYXRpdmVFbGVtZW50Ont3cml0YWJsZTohMCxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTpudWxsfX0pfXJlc29sdmVDaGlsZHJlbihlKXtyZXR1cm4gcmVzb2x2ZUNoaWxkcmVuLmNhbGwodGhpcyxlKX1nZXRDYWNoZUtleSgpe2xldHtUeXBlOmUscHJvcHM6cn09dGhpcy5qaWJ8fHt9O3JldHVybiB0KGUsci5rZXkpfXVwZGF0ZUppYihlKXt0aGlzLmppYj1lfXJlbW92ZUNoaWxkKGUpe2xldCB0PWUuZ2V0Q2FjaGVLZXkoKTt0aGlzLmNoaWxkTm9kZXMuZGVsZXRlKHQpfWFkZENoaWxkKGUpe2xldCB0PWUuZ2V0Q2FjaGVLZXkoKTt0aGlzLmNoaWxkTm9kZXMuc2V0KHQsZSl9Z2V0Q2hpbGQoZSl7cmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5nZXQoZSl9Z2V0VGhpc05vZGVPckNoaWxkTm9kZXMoKXtyZXR1cm4gdGhpc31nZXRDaGlsZHJlbk5vZGVzKCl7bGV0IGU9W107Zm9yKGxldCB0IG9mIHRoaXMuY2hpbGROb2Rlcy52YWx1ZXMoKSllPWUuY29uY2F0KHQuZ2V0VGhpc05vZGVPckNoaWxkTm9kZXMoKSk7cmV0dXJuIGUuZmlsdGVyKEJvb2xlYW4pfWFzeW5jIGRlc3Ryb3koZSl7aWYoIWUmJnRoaXMuZGVzdHJveWluZylyZXR1cm47dGhpcy5kZXN0cm95aW5nPSEwLHRoaXMucmVuZGVyUHJvbWlzZSYmYXdhaXQgdGhpcy5yZW5kZXJQcm9taXNlLGF3YWl0IHRoaXMuZGVzdHJveUZyb21ET00odGhpcy5jb250ZXh0LHRoaXMpO2xldCB0PVtdO2ZvcihsZXQgZSBvZiB0aGlzLmNoaWxkTm9kZXMudmFsdWVzKCkpdC5wdXNoKGUuZGVzdHJveSgpKTt0aGlzLmNoaWxkTm9kZXMuY2xlYXIoKSxhd2FpdCBQcm9taXNlLmFsbCh0KSx0aGlzLm5hdGl2ZUVsZW1lbnQ9bnVsbCx0aGlzLnBhcmVudE5vZGU9bnVsbCx0aGlzLmNvbnRleHQ9bnVsbCx0aGlzLmppYj1udWxsfWlzVmFsaWRDaGlsZChlKXtyZXR1cm4gaXNWYWxpZENoaWxkKGUpfWlzSXRlcmFibGVDaGlsZChlKXtyZXR1cm4gaXNJdGVyYWJsZUNoaWxkKGUpfXByb3BzRGlmZmVyKGUsdCxyKXtyZXR1cm4gcHJvcHNEaWZmZXIoZSx0LHIpfWNoaWxkcmVuRGlmZmVyKGUsdCl7cmV0dXJuIGNoaWxkcmVuRGlmZmVyKGUsdCl9YXN5bmMgcmVuZGVyKGUsdCl7aWYodGhpcy5kZXN0cm95aW5nKXJldHVybjt0aGlzLnJlbmRlckZyYW1lKys7bGV0IHI9dGhpcy5yZW5kZXJGcmFtZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLl9yZW5kZXI/dGhpcy5yZW5kZXJQcm9taXNlPXRoaXMuX3JlbmRlcihlLHQpLnRoZW4oKGFzeW5jIGU9Pih0aGlzLnJlbmRlclByb21pc2U9bnVsbCxyPj10aGlzLnJlbmRlckZyYW1lJiZhd2FpdCB0aGlzLnN5bmNET00odGhpcy5jb250ZXh0LHRoaXMpLGUpKSkuY2F0Y2goKGU9Pnt0aHJvdyB0aGlzLnJlbmRlclByb21pc2U9bnVsbCxlfSkpOmF3YWl0IHRoaXMuc3luY0RPTSh0aGlzLmNvbnRleHQsdGhpcyksdGhpcy5yZW5kZXJQcm9taXNlfWdldFBhcmVudElEKCl7aWYodGhpcy5wYXJlbnROb2RlKXJldHVybiB0aGlzLnBhcmVudE5vZGUuaWR9YXN5bmMgZGVzdHJveUZyb21ET00oKXtpZih0aGlzLnJlbmRlcmVyKXJldHVybiBhd2FpdCB0aGlzLnJlbmRlcmVyLmRlc3Ryb3lGcm9tRE9NKHRoaXMuY29udGV4dCx0aGlzKX1hc3luYyBzeW5jRE9NKCl7aWYodGhpcy5yZW5kZXJlcilyZXR1cm4gYXdhaXQgdGhpcy5yZW5kZXJlci5zeW5jRE9NKHRoaXMuY29udGV4dCx0aGlzKX19Y29uc3QgUD0xbjtsZXQgaj1QO2NvbnN0IEU9U3ltYm9sLmZvcihcIkBqaWJzRm9yY2VSZWZsb3dcIiksXz17SklCX0JBUlJFTjphLEpJQl9QUk9YWTpsLEpJQl9SQVdfVEVYVDpjLEpJQjp1LEppYixpc0ppYmlzaCxjb25zdHJ1Y3RKaWIscmVzb2x2ZUNoaWxkcmVufSxTPXtVUERBVEVfRVZFTlQ6ZixRVUVVRV9VUERBVEVfTUVUSE9EOnAsRkxVU0hfVVBEQVRFX01FVEhPRDpiLElOSVRfTUVUSE9EOm0sU0tJUF9TVEFURV9VUERBVEVTOnksUEVORElOR19TVEFURV9VUERBVEU6ZyxMQVNUX1JFTkRFUl9USU1FOncsUFJFVklPVVNfU1RBVEU6Tn0sQz17Q09OVEVYVF9JRDpSb290Tm9kZS5DT05URVhUX0lELEZPUkNFX1JFRkxPVzpFLFJvb3ROb2RlLFJlbmRlcmVyOmNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgUm9vdE5vZGV7c3RhdGljIFJvb3ROb2RlPVJvb3ROb2RlO2NvbnN0cnVjdG9yKCl7c3VwZXIobnVsbCxudWxsLG51bGwpLHRoaXMucmVuZGVyZXI9dGhpc31jcmVhdGVDb250ZXh0KGUsdCxyKXtsZXQgbj1PYmplY3QuY3JlYXRlKG51bGwpLGk9ZT9lW1RdOlA7cmV0dXJuIG5ldyBQcm94eShuLHtnZXQ6KHQscik9PntpZihyPT09VCl7bGV0IHQ9ZT9lW1RdOlA7cmV0dXJuIHQ+aT90Oml9cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LHIpP3Rbcl06ZT9lW3JdOnZvaWQgMH0sc2V0OihlLG4sbyk9PihuPT09VHx8ZVtuXT09PW98fChpPSsraixlW25dPW8sXCJmdW5jdGlvblwiPT10eXBlb2YgdCYmdC5jYWxsKHIscikpLCEwKX0pfX19fSkoKTt2YXIgbz1pLiQscz1pLndBLGE9aS56OCxsPWkuRWwsYz1pLnB2LHU9aS5jUSxkPWkuQmUsaD1pLmQ1O2NvbnN0e2lzSmliaXNoOmYsY29uc3RydWN0SmliOnAsSklCX1BST1hZOmIsSklCX1JBV19URVhUOm19PWwse1Jvb3ROb2RlOnl9PWM7Y2xhc3MgRnJhZ21lbnROb2RlIGV4dGVuZHMgeXtzdGF0aWMgVFlQRT0xMTtnZXRUaGlzTm9kZU9yQ2hpbGROb2Rlcygpe3JldHVybiB0aGlzLmdldENoaWxkcmVuTm9kZXMoKX1hc3luYyBfcmVuZGVyKCl7bGV0IGU9bmV3IE1hcCx0PXRoaXMucmVuZGVyRnJhbWUse2NoaWxkcmVuOnJ9PXRoaXMuamlifHx7fTtpZih1Lmluc3RhbmNlT2YocixcInByb21pc2VcIikmJihyPWF3YWl0IHIpLHRoaXMuZGVzdHJveWluZ3x8dDx0aGlzLnJlbmRlckZyYW1lKXJldHVybjt0aGlzLmlzSXRlcmFibGVDaGlsZChyKXx8IWYocikmJiF0aGlzLmlzVmFsaWRDaGlsZChyKXx8KHI9W3JdKTtjb25zdCBnZXRJbmRleEZvclR5cGU9dD0+e2xldCByPShlLmdldCh0KXx8MCkrMTtyZXR1cm4gZS5zZXQodCxyKSxyfTtsZXQgbj0hMSxpPXUuaXRlcmF0ZShyLCgoe3ZhbHVlOmUsa2V5OnIsaW5kZXg6aSxTVE9QOm99KT0+bnx8dGhpcy5kZXN0cm95aW5nfHx0PHRoaXMucmVuZGVyRnJhbWU/bzooYXN5bmMoKT0+e2xldCBvPXUuaW5zdGFuY2VPZihlLFwicHJvbWlzZVwiKT9hd2FpdCBlOmU7aWYodS5pc0VtcHR5KG8pfHxPYmplY3QuaXMobyxOYU4pfHxPYmplY3QuaXMobywxLzApKXJldHVybjtsZXQgcyxhLGw9ZihvKTtpZighbCYmdGhpcy5pc0l0ZXJhYmxlQ2hpbGQobyk/YT17VHlwZTpiLGNoaWxkcmVuOm8scHJvcHM6e2tleTpgQGppYi9pbnRlcm5hbF9mcmFnbWVudF8ke2dldEluZGV4Rm9yVHlwZShiKX1gfX06IWwmJnRoaXMuaXNWYWxpZENoaWxkKG8pPyhvPVwiZnVuY3Rpb25cIj09dHlwZW9mIG8udmFsdWVPZj9vLnZhbHVlT2YoKTpvLGE9e1R5cGU6bSxjaGlsZHJlbjpvLHByb3BzOntrZXk6YEBqaWIvaW50ZXJuYWxfdGV4dF8ke2dldEluZGV4Rm9yVHlwZShtKX1gfX0pOmwmJihhPXAobyksdS5pbnN0YW5jZU9mKGEsXCJwcm9taXNlXCIpJiYoYT1hd2FpdCBhKSksdGhpcy5kZXN0cm95aW5nfHx0PHRoaXMucmVuZGVyRnJhbWUpcmV0dXJuIHZvaWQobj0hMCk7bGV0IGMse1R5cGU6aCxwcm9wczp5fT1hO2M9aSE9PXI/cjpudWxsPT15LmtleXx8T2JqZWN0LmlzKHkua2V5LE5hTil8fE9iamVjdC5pcyh5LmtleSwxLzApP2BAamliL2ludGVybmFsX2tleV8ke2dldEluZGV4Rm9yVHlwZShoKX1gOnkua2V5LHkua2V5PWMsYS5wcm9wcz15O2xldCBnPWQoaCx5LmtleSksdz10aGlzLmdldENoaWxkKGcpO3JldHVybiB3PyhzPSExLHcudXBkYXRlSmliKGEpKToocz0hMCx3PXRoaXMucmVuZGVyZXIuY29uc3RydWN0Tm9kZUZyb21KaWIoYSx0aGlzLHRoaXMuY29udGV4dCkpLGF3YWl0IHcucmVuZGVyKCkse25vZGU6dyxjYWNoZUtleTpnLGNyZWF0ZWQ6c319KSgpKSksbz1hd2FpdCBQcm9taXNlLmFsbChpKTtvPW8uZmlsdGVyKChlPT4hIWUpKTtsZXQgcz1bXTtpZih0aGlzLmRlc3Ryb3lpbmd8fHQ8dGhpcy5yZW5kZXJGcmFtZSl7Zm9yKGxldCBlPTAsdD1vLmxlbmd0aDtlPHQ7ZSsrKXtsZXQgdD1vW2VdLHtub2RlOnIsY3JlYXRlZDpufT10O24mJnImJnMucHVzaChyLmRlc3Ryb3koKSl9cmV0dXJuIHZvaWQocy5sZW5ndGg+MCYmYXdhaXQgUHJvbWlzZS5hbGwocykpfWxldCBhPW5ldyBNYXA7Zm9yKGxldCBlIG9mIG8pe2xldHtub2RlOnQsY2FjaGVLZXk6cn09ZTthLnNldChyLGUpLHRoaXMuYWRkQ2hpbGQodCl9Zm9yKGxldFtlLHRdb2YgdGhpcy5jaGlsZE5vZGVzKXthLmhhcyhlKXx8KHMucHVzaCh0LmRlc3Ryb3koKSksdGhpcy5yZW1vdmVDaGlsZCh0KSl9YS5jbGVhcigpLHMubGVuZ3RoPjAmJmF3YWl0IFByb21pc2UuYWxsKHMpfWFzeW5jIGRlc3Ryb3lGcm9tRE9NKCl7aWYodGhpcy5wYXJlbnROb2RlKXJldHVybiBhd2FpdCB0aGlzLnBhcmVudE5vZGUuZGVzdHJveUZyb21ET00odGhpcy5wYXJlbnROb2RlLmNvbnRleHQsdGhpcy5wYXJlbnROb2RlKX1hc3luYyBzeW5jRE9NKCl7aWYodGhpcy5wYXJlbnROb2RlKXJldHVybiBhd2FpdCB0aGlzLnBhcmVudE5vZGUuc3luY0RPTSh0aGlzLnBhcmVudE5vZGUuY29udGV4dCx0aGlzLnBhcmVudE5vZGUpfX1jb25zdHtSb290Tm9kZTpnfT1jO2NsYXNzIFRleHROb2RlIGV4dGVuZHMgZ3tzdGF0aWMgVFlQRT0zfWNvbnN0e0pJQl9QUk9YWTp3fT1sLHtSb290Tm9kZTpOfT1jO2NsYXNzIE5hdGl2ZU5vZGUgZXh0ZW5kcyBOe3N0YXRpYyBUWVBFPTE7Y29uc3RydWN0b3IoLi4uZSl7c3VwZXIoLi4uZSksT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcyx7ZnJhZ21lbnROb2RlOnt3cml0YWJsZTohMCxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTpudWxsfX0pfWFzeW5jIGRlc3Ryb3koKXtpZighdGhpcy5kZXN0cm95aW5nKXJldHVybiB0aGlzLmRlc3Ryb3lpbmc9ITAsYXdhaXQgdGhpcy5kZXN0cm95RnJhZ21lbnROb2RlKCksYXdhaXQgc3VwZXIuZGVzdHJveSghMCl9YXN5bmMgZGVzdHJveUZyYWdtZW50Tm9kZSgpe3RoaXMuZnJhZ21lbnROb2RlJiYodGhpcy5yZW1vdmVDaGlsZCh0aGlzLmZyYWdtZW50Tm9kZSksYXdhaXQgdGhpcy5mcmFnbWVudE5vZGUuZGVzdHJveSgpLHRoaXMuZnJhZ21lbnROb2RlPW51bGwpfWFzeW5jIF9yZW5kZXIoKXtsZXR7VHlwZTplLHByb3BzOnQsY2hpbGRyZW46cn09dGhpcy5qaWJ8fHt9O2lmKGUpaWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsXCJpbm5lckhUTUxcIikpYXdhaXQgdGhpcy5kZXN0cm95RnJhZ21lbnROb2RlKCk7ZWxzZXtsZXQgZT17VHlwZTp3LHByb3BzOnt9LGNoaWxkcmVuOnJ9LHQ9dGhpcy5mcmFnbWVudE5vZGU7dD90aGlzLmZyYWdtZW50Tm9kZS51cGRhdGVKaWIoZSk6KHQ9dGhpcy5mcmFnbWVudE5vZGU9dGhpcy5yZW5kZXJlci5jb25zdHJ1Y3ROb2RlRnJvbUppYihlLHRoaXMsdGhpcy5jb250ZXh0KSx0aGlzLmFkZENoaWxkKHQpKSxhd2FpdCB0LnJlbmRlcigpfX19Y2xhc3MgUG9ydGFsTm9kZSBleHRlbmRzIE5hdGl2ZU5vZGV7c3RhdGljIFRZUEU9MTV9Y29uc3R7SklCX1BST1hZOk99PWwse0NPTlRFWFRfSUQ6dixSb290Tm9kZTpUfT1jLHtJTklUX01FVEhPRDpQLFVQREFURV9FVkVOVDpqLFBFTkRJTkdfU1RBVEVfVVBEQVRFOkUsTEFTVF9SRU5ERVJfVElNRTpfLFNLSVBfU1RBVEVfVVBEQVRFUzpTfT1hO2NsYXNzIENvbXBvbmVudE5vZGUgZXh0ZW5kcyBUe3N0YXRpYyBUWVBFPTIwO2NvbnN0cnVjdG9yKC4uLmUpe3N1cGVyKC4uLmUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMse2ZyYWdtZW50Tm9kZTp7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6bnVsbH0sY29tcG9uZW50Ont3cml0YWJsZTohMCxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTpudWxsfSxwZW5kaW5nQ29udGV4dFVwZGF0ZTp7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6bnVsbH0scHJldmlvdXNTdGF0ZTp7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6e319LGxhc3RDb250ZXh0SUQ6e3dyaXRhYmxlOiEwLGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwLHZhbHVlOnRoaXMuY29udGV4dFt2XXx8MW59LGNhY2hlZFJlbmRlclJlc3VsdDp7d3JpdGFibGU6ITAsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsdmFsdWU6bnVsbH19KX1nZXRUaGlzTm9kZU9yQ2hpbGROb2Rlcygpe2lmKHRoaXMuZnJhZ21lbnROb2RlKXJldHVybiB0aGlzLmZyYWdtZW50Tm9kZS5nZXRDaGlsZHJlbk5vZGVzKCl9bWVyZ2VDb21wb25lbnRQcm9wcyhlLHQpe3JldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksZXx8e30sdCl9ZmlyZVByb3BVcGRhdGVzKGUsdCl7bGV0IHI9dHx8e30sbj1uZXcgU2V0KE9iamVjdC5rZXlzKHIpLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHIpKSksaT1lfHx7fSxvPU9iamVjdC5rZXlzKGkpLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGkpKTtmb3IobGV0IGU9MCx0PW8ubGVuZ3RoO2U8dDtlKyspbi5hZGQob1tlXSk7Zm9yKGxldCBlIG9mIG4pe2xldCB0PWlbZV0sbj1yW2VdO3QhPT1uJiZ0aGlzLmNvbXBvbmVudC5vblByb3BVcGRhdGVkKGUsbix0KX19c2hvdWxkUmVuZGVyKGUsdCl7bGV0IHI9dGhpcy5jb21wb25lbnQ7aWYoIXIpcmV0dXJuITA7aWYodGhpcy5sYXN0Q29udGV4dElEPHRoaXMuY29udGV4dFt2XSlyZXR1cm4gdGhpcy5sYXN0Q29udGV4dElEPXRoaXMuY29udGV4dFt2XSx0aGlzLnByZXZpb3VzU3RhdGU9T2JqZWN0LmFzc2lnbih7fSxyLnN0YXRlKSx0aGlzLmZpcmVQcm9wVXBkYXRlcyhyLnByb3BzLGUpLHIucHJvcHM9dGhpcy5tZXJnZUNvbXBvbmVudFByb3BzKHIucHJvcHMsZSksITA7aWYodGhpcy5jaGlsZHJlbkRpZmZlcihyLmNoaWxkcmVuLHQpKXJldHVybiB0aGlzLnByZXZpb3VzU3RhdGU9T2JqZWN0LmFzc2lnbih7fSxyLnN0YXRlKSx0aGlzLmZpcmVQcm9wVXBkYXRlcyhyLnByb3BzLGUpLHIucHJvcHM9dGhpcy5tZXJnZUNvbXBvbmVudFByb3BzKHIucHJvcHMsZSksITA7bGV0IG49dGhpcy5wcmV2aW91c1N0YXRlfHx7fTtyZXR1cm4gdGhpcy5wcm9wc0RpZmZlcihyLnByb3BzLGUsW1wicmVmXCIsXCJrZXlcIl0sITApJiZyLnNob3VsZFVwZGF0ZShlLG4pPyh0aGlzLnByZXZpb3VzU3RhdGU9T2JqZWN0LmFzc2lnbih7fSxyLnN0YXRlKSx0aGlzLmZpcmVQcm9wVXBkYXRlcyhyLnByb3BzLGUpLHIucHJvcHM9dGhpcy5tZXJnZUNvbXBvbmVudFByb3BzKHIucHJvcHMsZSksITApOiEoIXRoaXMucHJvcHNEaWZmZXIobixyLnN0YXRlKXx8IXIuc2hvdWxkVXBkYXRlKGUsbikpJiYodGhpcy5wcmV2aW91c1N0YXRlPU9iamVjdC5hc3NpZ24oe30sci5zdGF0ZSksITApfWFzeW5jIGRlc3Ryb3koKXtpZighdGhpcy5kZXN0cm95aW5nKXJldHVybiB0aGlzLmRlc3Ryb3lpbmc9ITAsdGhpcy5jb21wb25lbnQmJih0aGlzLmppYiYmdGhpcy5qaWIucHJvcHMmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMuamliLnByb3BzLnJlZiYmdGhpcy5qaWIucHJvcHMucmVmLmNhbGwodGhpcy5jb21wb25lbnQsbnVsbCx0aGlzLmNvbXBvbmVudCksYXdhaXQgdGhpcy5jb21wb25lbnQuZGVzdHJveSgpLHRoaXMuY29tcG9uZW50PW51bGwpLHRoaXMuZnJhZ21lbnROb2RlJiYodGhpcy5yZW1vdmVDaGlsZCh0aGlzLmZyYWdtZW50Tm9kZSksYXdhaXQgdGhpcy5mcmFnbWVudE5vZGUuZGVzdHJveSgpLHRoaXMuZnJhZ21lbnROb2RlPW51bGwpLHRoaXMuY2FjaGVkUmVuZGVyUmVzdWx0PW51bGwsdGhpcy5wcmV2aW91c1N0YXRlPW51bGwsYXdhaXQgc3VwZXIuZGVzdHJveSghMCl9b25Db250ZXh0VXBkYXRlKCl7aWYodGhpcy5jb21wb25lbnQmJiF0aGlzLmNvbXBvbmVudFtFXSlyZXR1cm4gdGhpcy5wZW5kaW5nQ29udGV4dFVwZGF0ZXx8KHRoaXMucGVuZGluZ0NvbnRleHRVcGRhdGU9UHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKCk9Pnt0aGlzLmRlc3Ryb3lpbmd8fCF0aGlzLmNvbXBvbmVudHx8dGhpcy5jb21wb25lbnRbRV18fCh0aGlzLnBlbmRpbmdDb250ZXh0VXBkYXRlPW51bGwsdGhpcy5yZW5kZXIoKSl9KSkpLHRoaXMucGVuZGluZ0NvbnRleHRVcGRhdGV9YXN5bmMgX3JlbmRlcigpe2xldCBlPXRoaXMucmVuZGVyRnJhbWUse1R5cGU6dCxwcm9wczpyLGNoaWxkcmVuOm59PXRoaXMuamlifHx7fTtpZighdClyZXR1cm47bj10aGlzLmppYi5jaGlsZHJlbj1hd2FpdCB0aGlzLnJlc29sdmVDaGlsZHJlbihuKTtjb25zdCBmaW5hbGl6ZVJlbmRlcj1hc3luYyhlLHQpPT57aWYodGhpcy5kZXN0cm95aW5nfHx0PHRoaXMucmVuZGVyRnJhbWV8fCF0aGlzLmNvbXBvbmVudClyZXR1cm47dGhpcy5jYWNoZWRSZW5kZXJSZXN1bHQ9ZSx0aGlzLmNvbXBvbmVudFtfXT11Lm5vdygpO2xldCByPXRoaXMuZnJhZ21lbnROb2RlLG49e1R5cGU6Tyxwcm9wczp7fSxjaGlsZHJlbjplfTtyP3IudXBkYXRlSmliKG4pOihyPXRoaXMuZnJhZ21lbnROb2RlPXRoaXMucmVuZGVyZXIuY29uc3RydWN0Tm9kZUZyb21KaWIobix0aGlzLHRoaXMuY29udGV4dCksdGhpcy5hZGRDaGlsZChyKSksYXdhaXQgci5yZW5kZXIoKX0saGFuZGxlUmVuZGVyRXJyb3I9dD0+e2lmKHRoaXMuZGVzdHJveWluZ3x8ZTx0aGlzLnJlbmRlckZyYW1lKXJldHVybjtsZXQgcjtjb25zb2xlLmVycm9yKHQpLHRoaXMuY29tcG9uZW50JiYodGhpcy5jb21wb25lbnRbX109dS5ub3coKSk7dHJ5e3I9dGhpcy5jb21wb25lbnQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMuY29tcG9uZW50LnJlbmRlckVycm9yU3RhdGU/dGhpcy5jb21wb25lbnQucmVuZGVyRXJyb3JTdGF0ZSh0KTpbYCR7dC5tZXNzYWdlfVxcbiR7dC5zdGFja31gXX1jYXRjaChlKXtyPVtgJHt0Lm1lc3NhZ2V9XFxuJHt0LnN0YWNrfWBdfXJldHVybiBmaW5hbGl6ZVJlbmRlcihyLGUpfTtpZighKHRoaXMuZGVzdHJveWluZ3x8ZTx0aGlzLnJlbmRlckZyYW1lKSl0cnl7aWYodGhpcy5jb21wb25lbnQmJiF0aGlzLnNob3VsZFJlbmRlcihyLG4pKXJldHVybjtsZXQgaT10aGlzLmNvbXBvbmVudDtpfHwoaT10aGlzLmNvbXBvbmVudD1uZXcgdCh7Li4udGhpcy5qaWJ8fHt9LHByb3BzOnRoaXMubWVyZ2VDb21wb25lbnRQcm9wcyhudWxsLHIpLGNvbnRleHQ6dGhpcy5jb250ZXh0LGlkOnRoaXMuaWR9KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBpW1BdJiZpW1BdKCksaS5vbihqLChlPT57ZT8odGhpcy5yZW5kZXJGcmFtZSsrLGZpbmFsaXplUmVuZGVyKGUsdGhpcy5yZW5kZXJGcmFtZSkpOnRoaXMucmVuZGVyKCl9KSksciYmXCJmdW5jdGlvblwiPT10eXBlb2Ygci5yZWYmJnIucmVmLmNhbGwoaSxpLG51bGwpKSx0aGlzLmNvbXBvbmVudFtFXSYmKHRoaXMuY29tcG9uZW50W0VdPW51bGwpO2xldCBvPXRoaXMuY29tcG9uZW50LnJlbmRlcihuKTtpZih1Lmluc3RhbmNlT2YobyxcInByb21pc2VcIikpe2xldCB0PXRoaXMuY29tcG9uZW50LnJlbmRlcldhaXRpbmcodGhpcy5jYWNoZWRSZW5kZXJSZXN1bHQpLHI9ITEsbj1zZXRUaW1lb3V0KChhc3luYygpPT57bj1udWxsLHUuaW5zdGFuY2VPZih0LFwicHJvbWlzZVwiKSYmKHQ9YXdhaXQgdCkscnx8YXdhaXQgZmluYWxpemVSZW5kZXIodCxlKX0pLDUpO2F3YWl0IG8udGhlbigoYXN5bmMgdD0+e3I9ITAsbiYmKGNsZWFyVGltZW91dChuKSxuPW51bGwpLGF3YWl0IGZpbmFsaXplUmVuZGVyKHQsZSl9KSkuY2F0Y2goaGFuZGxlUmVuZGVyRXJyb3IpfWVsc2UgYXdhaXQgZmluYWxpemVSZW5kZXIobyxlKX1jYXRjaChlKXthd2FpdCBoYW5kbGVSZW5kZXJFcnJvcihlKX19YXN5bmMgZGVzdHJveUZyb21ET00oKXtpZih0aGlzLnBhcmVudE5vZGUpcmV0dXJuIGF3YWl0IHRoaXMucGFyZW50Tm9kZS5kZXN0cm95RnJvbURPTSh0aGlzLnBhcmVudE5vZGUuY29udGV4dCx0aGlzLnBhcmVudE5vZGUpfWFzeW5jIHN5bmNET00oKXtpZih0aGlzLnBhcmVudE5vZGUpcmV0dXJuIGF3YWl0IHRoaXMucGFyZW50Tm9kZS5zeW5jRE9NKHRoaXMucGFyZW50Tm9kZS5jb250ZXh0LHRoaXMucGFyZW50Tm9kZSl9fWNvbnN0e1JlbmRlcmVyOkN9PWMse0pJQl9QUk9YWTpELEpJQl9SQVdfVEVYVDp4fT1sO2NsYXNzIERPTVJlbmRlcmVyIGV4dGVuZHMgQ3tzdGF0aWMgVFlQRT05O3N0YXRpYyBGcmFnbWVudE5vZGU9RnJhZ21lbnROb2RlO3N0YXRpYyBUZXh0Tm9kZT1UZXh0Tm9kZTtzdGF0aWMgTmF0aXZlTm9kZT1OYXRpdmVOb2RlO3N0YXRpYyBQb3J0YWxOb2RlPVBvcnRhbE5vZGU7c3RhdGljIENvbXBvbmVudE5vZGU9Q29tcG9uZW50Tm9kZTtjb25zdHJ1Y3RvcihlLHQpe3N1cGVyKCksT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcyx7b3B0aW9uczp7d3JpdGFibGU6ITEsZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITEsdmFsdWU6dHx8e319LHJvb3ROb2RlOnt3cml0YWJsZTohMCxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTpudWxsfSxqaWI6e3dyaXRhYmxlOiEwLGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwLHZhbHVlOntUeXBlOmUscHJvcHM6e30sY2hpbGRyZW46W119fX0pfWlzUG9ydGFsTm9kZShlKXtyZXR1cm4vW15hLXpBLVowLTk6XS8udGVzdChlKX1jb25zdHJ1Y3ROb2RlRnJvbUppYihlLHQscil7bGV0e1R5cGU6bn09ZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP25ldyB0aGlzLmNvbnN0cnVjdG9yLkNvbXBvbmVudE5vZGUodGhpcyx0LHIsZSk6XCJzdHJpbmdcIj09dHlwZW9mIG4/dGhpcy5pc1BvcnRhbE5vZGUobik/bmV3IHRoaXMuY29uc3RydWN0b3IuUG9ydGFsTm9kZSh0aGlzLHQscixlKTpuZXcgdGhpcy5jb25zdHJ1Y3Rvci5OYXRpdmVOb2RlKHRoaXMsdCxyLGUpOm51bGw9PW58fG49PT1EP25ldyB0aGlzLmNvbnN0cnVjdG9yLkZyYWdtZW50Tm9kZSh0aGlzLHQscixlKTpuPT09eD9uZXcgdGhpcy5jb25zdHJ1Y3Rvci5UZXh0Tm9kZSh0aGlzLHQscixlKTp2b2lkIDB9YXN5bmMgZGVzdHJveSgpe2lmKCF0aGlzLmRlc3Ryb3lpbmcpcmV0dXJuIHRoaXMuZGVzdHJveWluZz0hMCx0aGlzLnJvb3ROb2RlJiYoYXdhaXQgdGhpcy5yb290Tm9kZS5kZXN0cm95KCksdGhpcy5yb290Tm9kZT1udWxsKSxhd2FpdCBzdXBlci5kZXN0cm95KCEwKX1hc3luYyByZW5kZXIoZSl7aWYoIWUpdGhyb3cgbmV3IFR5cGVFcnJvcihgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9OjpyZW5kZXI6IEEgamliIG11c3QgYmUgcHJvdmlkZWQuYCk7cmV0dXJuIHRoaXMudXBkYXRlSmliKHsuLi50aGlzLmppYixjaGlsZHJlbjplfSksc3VwZXIucmVuZGVyKCl9YXN5bmMgX3JlbmRlcigpe2xldCBlPXRoaXMucmVuZGVyRnJhbWUsdD10aGlzLnJvb3ROb2RlLHI9e1R5cGU6RCxwcm9wczp7fSxjaGlsZHJlbjp0aGlzLmppYn07dD90LnVwZGF0ZUppYihyKTp0PXRoaXMucm9vdE5vZGU9dGhpcy5jb25zdHJ1Y3ROb2RlRnJvbUppYih0aGlzLmppYix0aGlzLHRoaXMuY29udGV4dCksYXdhaXQgdC5yZW5kZXIoKSxlPj10aGlzLnJlbmRlckZyYW1lJiZ0aGlzLnN5bmNET00odGhpcy5jb250ZXh0LHRoaXMucm9vdE5vZGUpfWFzeW5jIGRlc3Ryb3lGcm9tRE9NKGUsdCl7cmV0dXJuISF0JiYodD09PXRoaXM/ISF0aGlzLnJvb3ROb2RlJiZhd2FpdCB0aGlzLmRlc3Ryb3lOb2RlKGUsdGhpcy5yb290Tm9kZSk6YXdhaXQgdGhpcy5kZXN0cm95Tm9kZShlLHQpKX1hc3luYyBzeW5jRE9NKGUsdCl7cmV0dXJuISF0JiYodD09PXRoaXM/ISF0aGlzLnJvb3ROb2RlJiZhd2FpdCB0aGlzLnN5bmNOb2RlKGUsdGhpcy5yb290Tm9kZSk6YXdhaXQgdGhpcy5zeW5jTm9kZShlLHQpKX1hc3luYyBhZGROb2RlKGUsdCl7aWYoIXQpcmV0dXJuITE7YXdhaXQgdGhpcy5hdHRhY2hDaGlsZHJlbihlLHQpO2xldCByPXRoaXMucGFyZW50Tm9kZTtyZXR1cm4gciYmYXdhaXQgdGhpcy5hdHRhY2hDaGlsZHJlbihlLHIsdHJ1ZSksITB9YXN5bmMgY29uc3RydWN0TmF0aXZlRWxlbWVudEZyb21Ob2RlKGUsdCl7aWYoIXQpcmV0dXJuITE7aWYodC5UWVBFPT09TmF0aXZlTm9kZS5UWVBFKXJldHVybiBhd2FpdCB0aGlzLmNyZWF0ZU5hdGl2ZUVsZW1lbnQoZSx0KTtpZih0LlRZUEU9PT1UZXh0Tm9kZS5UWVBFKXJldHVybiBhd2FpdCB0aGlzLmNyZWF0ZVRleHRFbGVtZW50KGUsdCk7aWYodC5UWVBFPT09UG9ydGFsTm9kZS5UWVBFfHx0LlRZUEU9PT1ET01SZW5kZXJlci5UWVBFKXJldHVybiBhd2FpdCB0aGlzLmNyZWF0ZVBvcnRhbEVsZW1lbnQoZSx0KTt0aHJvdyBuZXcgVHlwZUVycm9yKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX06OmNvbnN0cnVjdE5hdGl2ZUVsZW1lbnRGcm9tTm9kZTogVW5zdXBwb3J0ZWQgdmlydHVhbCBlbGVtZW50IHR5cGUgZGV0ZWN0ZWQ6ICR7dC5UWVBFfWApfWFzeW5jIHVwZGF0ZU5vZGUoZSx0KXtpZighdClyZXR1cm4hMTtsZXQgcjtpZih0LlRZUEU9PT1OYXRpdmVOb2RlLlRZUEUpcj1hd2FpdCB0aGlzLnVwZGF0ZU5hdGl2ZUVsZW1lbnQoZSx0KTtlbHNlIGlmKHQuVFlQRT09PVRleHROb2RlLlRZUEUpcj1hd2FpdCB0aGlzLnVwZGF0ZVRleHRFbGVtZW50KGUsdCk7ZWxzZXtpZih0LlRZUEUhPT1Qb3J0YWxOb2RlLlRZUEUmJnQuVFlQRSE9PURPTVJlbmRlcmVyLlRZUEUpdGhyb3cgbmV3IFR5cGVFcnJvcihgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9OjpzeW5jTm9kZTogVW5zdXBwb3J0ZWQgdmlydHVhbCBlbGVtZW50IHR5cGUgZGV0ZWN0ZWQ6ICR7dC5UWVBFfWApO3I9YXdhaXQgdGhpcy51cGRhdGVQb3J0YWxFbGVtZW50KGUsdCl9cmV0dXJuIGF3YWl0IHRoaXMuYXR0YWNoQ2hpbGRyZW4oZSx0KSxyfWFzeW5jIHN5bmNOb2RlKGUsdCl7aWYoIXQpcmV0dXJuITE7bGV0IHI9dCYmdC5uYXRpdmVFbGVtZW50O3JldHVybiByP3Q/YXdhaXQgdGhpcy51cGRhdGVOb2RlKGUsdCk6dm9pZCAwOihyPWF3YWl0IHRoaXMuY29uc3RydWN0TmF0aXZlRWxlbWVudEZyb21Ob2RlKGUsdCksdC5qaWImJnQuamliLnByb3BzJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmppYi5wcm9wcy5yZWYmJnQuamliLnByb3BzLnJlZi5jYWxsKHQscixudWxsKSx0Lm5hdGl2ZUVsZW1lbnQ9cixhd2FpdCB0aGlzLmFkZE5vZGUoZSx0KSl9YXN5bmMgZGVzdHJveU5vZGUoZSx0KXtpZighdClyZXR1cm4hMTtsZXQgcj0hMTtyZXR1cm4gdCYmdC5uYXRpdmVFbGVtZW50JiYodC5UWVBFPT09TmF0aXZlTm9kZS5UWVBFP3I9YXdhaXQgdGhpcy5kZXN0cm95TmF0aXZlRWxlbWVudChlLHQpOnQuVFlQRT09PVRleHROb2RlLlRZUEU/cj1hd2FpdCB0aGlzLmRlc3Ryb3lUZXh0RWxlbWVudChlLHQpOnQuVFlQRT09PVBvcnRhbE5vZGUuVFlQRXx8dC5UWVBFPT09RE9NUmVuZGVyZXIuVFlQRT9yPWF3YWl0IHRoaXMuZGVzdHJveVBvcnRhbEVsZW1lbnQoZSx0KTpuZXcgVHlwZUVycm9yKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX06OnN5bmNOb2RlOiBVbnN1cHBvcnRlZCB2aXJ0dWFsIGVsZW1lbnQgdHlwZSBkZXRlY3RlZDogJHt0LlRZUEV9YCkpLHQmJmF3YWl0IHRoaXMuZGV0YWNoQ2hpbGRyZW4oZSx0KSxyfWZpbmROYXRpdmVFbGVtZW50KGUsdCl7fWNyZWF0ZU5hdGl2ZUVsZW1lbnQoZSx0KXtyZXR1cm57dHlwZTpcImVsZW1lbnRcIix2YWx1ZTp0LnZhbHVlfX11cGRhdGVOYXRpdmVFbGVtZW50KGUsdCl7fWNyZWF0ZVRleHRFbGVtZW50KGUsdCl7cmV0dXJue3R5cGU6XCJ0ZXh0XCIsdmFsdWU6dC52YWx1ZX19dXBkYXRlVGV4dEVsZW1lbnQoZSx0KXtyZXR1cm4hMX1jcmVhdGVQb3J0YWxFbGVtZW50KGUsdCl7cmV0dXJue3R5cGU6XCJwb3J0YWxcIix2YWx1ZTp0LnZhbHVlfX11cGRhdGVQb3J0YWxFbGVtZW50KGUsdCl7cmV0dXJuITF9ZGVzdHJveU5hdGl2ZUVsZW1lbnQoZSx0KXt9ZGVzdHJveVRleHRFbGVtZW50KGUsdCl7fWRlc3Ryb3lQb3J0YWxFbGVtZW50KGUsdCl7fWZvcmNlTmF0aXZlRWxlbWVudFJlZmxvdyhlLHQscil7fWFzeW5jIGF0dGFjaENoaWxkcmVuKGUsdCxyKXtsZXQgbj10JiZ0Lm5hdGl2ZUVsZW1lbnQ7aWYoIW4pcmV0dXJuITE7bGV0IGk9QXJyYXkuZnJvbShuLmNoaWxkTm9kZXMpLG89MCxzPSEwO2ZvcihsZXQgYSBvZiB0LmdldENoaWxkcmVuTm9kZXMoKSl7bGV0IHQ9YS5uYXRpdmVFbGVtZW50O2lmKHQpe2lmKCEwIT09ciYmYXdhaXQgdGhpcy51cGRhdGVOb2RlKGUsYSkscyl7aWYoaVtvKytdPT09dCljb250aW51ZTtzPSExfWF3YWl0IG4uYXBwZW5kQ2hpbGQodCksdGhpcy5mb3JjZU5hdGl2ZUVsZW1lbnRSZWZsb3coZSxhLHQpfX1yZXR1cm4hMH1hc3luYyBkZXRhY2hDaGlsZHJlbihlLHQpe2lmKCEodCYmdC5uYXRpdmVFbGVtZW50KSlyZXR1cm4hMTtsZXQgcj1bXTtmb3IobGV0IG4gb2YgdC5nZXRDaGlsZHJlbk5vZGVzKCkpci5wdXNoKHRoaXMuZGVzdHJveU5vZGUoZSxuKSk7cmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKHIpLCEwfX12YXIgQT10LiQsST10LndBLFI9dC56OCxrPXQucSQsTT10LkVsLEY9dC5wdixVPXQuY1EsSj10LkJlLFk9dC5kNTtleHBvcnR7QSBhcyAkLEkgYXMgQ29tcG9uZW50LFIgYXMgQ29tcG9uZW50cyxrIGFzIERPTVJlbmRlcmVyLE0gYXMgSmlicyxGIGFzIFJlbmRlcmVycyxVIGFzIFV0aWxzLEogYXMgZGVhZGJlZWYsWSBhcyBmYWN0b3J5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImNvbnN0IGNhY2hlTWFwICAgICAgICAgID0gbmV3IE1hcCgpO1xuY29uc3QgcmVzb3VyY2VSZXNvbHZlcnMgPSBuZXcgU2V0KCk7XG5jb25zdCByZXNvdXJjZUhhbmRsZXJzICA9IG5ldyBTZXQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFJlc291cmNlUmVzb2x2ZXIoY2FsbGJhY2spIHtcbiAgcmVzb3VyY2VSZXNvbHZlcnMuYWRkKGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVJlc291cmNlUmVzb2x2ZXIoY2FsbGJhY2spIHtcbiAgcmVzb3VyY2VSZXNvbHZlcnMuZGVsZXRlKGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFJlc291cmNlSGFuZGxlcih0ZXN0LCBjYWxsYmFjaykge1xuICBsZXQgcmVzb3VyY2VPYmogPSB7IHRlc3QsIGNhbGxiYWNrIH07XG4gIHJlc291cmNlSGFuZGxlcnMuYWRkKHJlc291cmNlT2JqKTtcblxuICByZXR1cm4gcmVzb3VyY2VPYmo7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVSZXNvdXJjZUhhbmRsZXIocmVzb3VyY2VPYmopIHtcbiAgcmVzb3VyY2VIYW5kbGVycy5kZWxldGUocmVzb3VyY2VPYmopO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVJlc291cmNlUGF0aChyZXNvdXJjZVBhdGgpIHtcbiAgbGV0IGN1cnJlbnRQYXRoID0gcmVzb3VyY2VQYXRoO1xuXG4gIGZvciAobGV0IHJlc29sdmVyIG9mIHJlc291cmNlUmVzb2x2ZXJzKVxuICAgIGN1cnJlbnRQYXRoID0gcmVzb2x2ZXIoY3VycmVudFBhdGgpO1xuXG4gIHJldHVybiBjdXJyZW50UGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGphdmFzY3JpcHRIYW5kbGVyKHJlc291cmNlUGF0aCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXZhbFxuICByZXR1cm4gZXZhbChgKGltcG9ydCgnJHtyZXNvdXJjZVBhdGgucmVwbGFjZSgvJy9nLCAnXFxcXFxcJycpfScpKWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3NzSGFuZGxlcihyZXNvdXJjZVBhdGgsIHsgbWVkaWEgPSAnc2NyZWVuJyB9KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGxpbmtUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5cbiAgICBsaW5rVGFnLm9ubG9hZCA9ICgpID0+IHJlc29sdmUobGlua1RhZyk7XG4gICAgbGlua1RhZy5vbmVycm9yID0gKGVycm9yKSA9PiByZWplY3QoZXJyb3IpO1xuXG4gICAgbGlua1RhZy5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XG4gICAgbGlua1RhZy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICBsaW5rVGFnLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gICAgbGlua1RhZy5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCByZXNvdXJjZVBhdGgpO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGlua1RhZyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVSZXNvdXJjZShyZXNvdXJjZVBhdGgsIF9vcHRpb25zKSB7XG4gIGxldCBvcHRpb25zID0gX29wdGlvbnMgfHwge307XG5cbiAgZm9yIChsZXQgaGFuZGxlciBvZiByZXNvdXJjZUhhbmRsZXJzKSB7XG4gICAgbGV0IHsgdGVzdCwgY2FsbGJhY2sgfSA9IGhhbmRsZXI7XG4gICAgaWYgKCF0ZXN0KHJlc291cmNlUGF0aCwgb3B0aW9ucykpXG4gICAgICBjb250aW51ZTtcblxuICAgIGxldCByZXN1bHQgPSBjYWxsYmFjayhyZXNvdXJjZVBhdGgsIG9wdGlvbnMpO1xuICAgIGlmIChyZXN1bHQpXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKGBqaWJzLWh0bWwtcmVuZGVyZXI6bG9hZDogVW5rbm93biByZXNvdXJjZSBcIiR7cmVzb3VyY2VQYXRofVwiLiBJIGRvbid0IGtub3cgaG93IHRvIGhhbmRsZSB0aGlzIHJlc291cmNlIHR5cGUuIFBsZWFzZSBhZGQgYSByZXNvdXJjZSBoYW5kbGVyIHRvIG1hbmFnZSB0aGlzIHJlc291cmNlIHR5cGUuYCk7XG59XG5cbmZ1bmN0aW9uIGxvYWQoX3Jlc291cmNlUGF0aCwgb3B0aW9ucykge1xuICBsZXQgcmVzb3VyY2VQYXRoICA9IHJlc29sdmVSZXNvdXJjZVBhdGgoX3Jlc291cmNlUGF0aCk7XG4gIGxldCBjYWNoZSAgICAgICAgID0gY2FjaGVNYXAuZ2V0KHJlc291cmNlUGF0aCk7XG5cbiAgaWYgKGNhY2hlKVxuICAgIHJldHVybiBjYWNoZTtcblxuICBsZXQgcHJvbWlzZSA9IGhhbmRsZVJlc291cmNlKHJlc291cmNlUGF0aCwgb3B0aW9ucykudGhlbigoX3Jlc291cmNlKSA9PiB7XG4gICAgbGV0IHJlc291cmNlID0gX3Jlc291cmNlO1xuICAgIGlmIChyZXNvdXJjZSAmJiByZXNvdXJjZS5kZWZhdWx0KVxuICAgICAgcmVzb3VyY2UgPSByZXNvdXJjZS5kZWZhdWx0O1xuXG4gICAgY2FjaGVNYXAuc2V0KHJlc291cmNlUGF0aCwgcmVzb3VyY2UpO1xuXG4gICAgcmV0dXJuIHJlc291cmNlO1xuICB9KTtcblxuICAvLyBTZXQgcHJvbWlzZSBhcyBjYWNoZSBzb1xuICAvLyBhbGwgcHJvbWlzZXMgZnJvbSBtdWx0aXBsZVxuICAvLyBsb2FkIHJlcXVlc3RzIGFyZSBjb25zaXN0ZW50XG4gIGNhY2hlTWFwLnNldChyZXNvdXJjZVBhdGgsIHByb21pc2UpO1xuXG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhsb2FkLCB7XG4gIGFkZFJlc29sdmVyOiB7XG4gICAgd3JpdGFibGU6ICAgICB0cnVlLFxuICAgIGVudW1lcmFibGU6ICAgZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiAgICAgICAgYWRkUmVzb3VyY2VSZXNvbHZlcixcbiAgfSxcbiAgcmVtb3ZlUmVzb2x2ZXI6IHtcbiAgICB3cml0YWJsZTogICAgIHRydWUsXG4gICAgZW51bWVyYWJsZTogICBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6ICAgICAgICByZW1vdmVSZXNvdXJjZVJlc29sdmVyLFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgd3JpdGFibGU6ICAgICB0cnVlLFxuICAgIGVudW1lcmFibGU6ICAgZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiAgICAgICAgcmVzb2x2ZVJlc291cmNlUGF0aCxcbiAgfSxcbiAgamF2YXNjcmlwdEhhbmRsZXI6IHtcbiAgICB3cml0YWJsZTogICAgIHRydWUsXG4gICAgZW51bWVyYWJsZTogICBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6ICAgICAgICBqYXZhc2NyaXB0SGFuZGxlcixcbiAgfSxcbiAgY3NzSGFuZGxlcjoge1xuICAgIHdyaXRhYmxlOiAgICAgdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiAgIGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogICAgICAgIGNzc0hhbmRsZXIsXG4gIH0sXG59KTtcblxuYWRkUmVzb3VyY2VIYW5kbGVyKChyZXNvdXJjZVBhdGgsIG9wdGlvbnMpID0+IHtcbiAgaWYgKG9wdGlvbnMudHlwZSA9PT0gJ2phdmFzY3JpcHQnKVxuICAgIHJldHVybiB0cnVlO1xuXG4gIHJldHVybiAoL1xcLlttY10/anMkL2kpLnRlc3QocmVzb3VyY2VQYXRoKTtcbn0sIGphdmFzY3JpcHRIYW5kbGVyKTtcblxuYWRkUmVzb3VyY2VIYW5kbGVyKChyZXNvdXJjZVBhdGgsIG9wdGlvbnMpID0+IHtcbiAgaWYgKG9wdGlvbnMudHlwZSA9PT0gJ2NzcycpXG4gICAgcmV0dXJuIHRydWU7XG5cbiAgcmV0dXJuICgvXFwuY3NzJC9pKS50ZXN0KHJlc291cmNlUGF0aCk7XG59LCBjc3NIYW5kbGVyKTtcblxuZXhwb3J0IHtcbiAgbG9hZCxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IERPTVJlbmRlcmVyLCBVdGlscywgUmVuZGVyZXJzIH0gZnJvbSAnamlicy1kb20tcmVuZGVyZXInO1xuZXhwb3J0ICogZnJvbSAnamlicy1kb20tcmVuZGVyZXInO1xuXG5jb25zdCB7XG4gIEZPUkNFX1JFRkxPVyxcbn0gPSBSZW5kZXJlcnM7XG5cbmV4cG9ydCBjbGFzcyBIVE1MUmVuZGVyZXIgZXh0ZW5kcyBET01SZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHJvb3RFbGVtZW50LCBfb3B0aW9ucykge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgZG9jdW1lbnQ6IChyb290RWxlbWVudCAmJiByb290RWxlbWVudC5vd25lckRvY3VtZW50KSxcbiAgICAgIC4uLihfb3B0aW9ucyB8fCB7fSksXG4gICAgfTtcblxuICAgIHN1cGVyKHJvb3RFbGVtZW50LCBvcHRpb25zKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICdldmVudEJpbmRpbmdzJzoge1xuICAgICAgICB3cml0YWJsZTogICAgIGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiAgIGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICB2YWx1ZTogICAgICAgIG5ldyBXZWFrTWFwKCksXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIGdldERvY3VtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAob3B0aW9ucy5kb2N1bWVudClcbiAgICAgIHJldHVybiBvcHRpb25zLmRvY3VtZW50O1xuXG4gICAgcmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSA/IGRvY3VtZW50IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0V2luZG93KGNvbnRleHQpIHtcbiAgICBsZXQgZG9jdW1lbnQgPSB0aGlzLmdldERvY3VtZW50KGNvbnRleHQpO1xuICAgIGlmIChkb2N1bWVudCkge1xuICAgICAgbGV0IHdpbmRvdyA9IChkb2N1bWVudC5wYXJlbnRXaW5kb3cgfHwgZG9jdW1lbnQuZGVmYXVsdFZpZXcpO1xuICAgICAgaWYgKHdpbmRvdylcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9XG5cbiAgICByZXR1cm4gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIF9mbGF0dGVuQW5kRmlsdGVyU3R5bGVzKGNvbnRleHQsIHN0eWxlcykge1xuICAgIGlmICghc3R5bGVzIHx8IHN0eWxlcyA9PT0gdHJ1ZSB8fCBPYmplY3QuaXMoc3R5bGVzLCBJbmZpbml0eSkgfHwgT2JqZWN0LmlzKHN0eWxlcywgTmFOKSlcbiAgICAgIHJldHVybjtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHN0eWxlcykpIHtcbiAgICAgIGxldCBmaW5hbFN0eWxlcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGlsID0gc3R5bGVzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcbiAgICAgICAgbGV0IHZhbHVlID0gc3R5bGVzW2ldO1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgIHZhbHVlID0gdGhpcy5fZmxhdHRlbkFuZEZpbHRlclN0eWxlcyhjb250ZXh0LCBzdHlsZXNbaV0pO1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSlcbiAgICAgICAgICBmaW5hbFN0eWxlcyA9IGZpbmFsU3R5bGVzLmNvbmNhdCh2YWx1ZSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBmaW5hbFN0eWxlcy5wdXNoKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbmFsU3R5bGVzO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICBfcGFyc2VDU1NTdHlsZVN0cmluZyhjb250ZXh0LCBzdHlsZVN0cikge1xuICAgIGNvbnN0IG5hbWVUb1Byb3BlcnR5TmFtZSA9IChuYW1lKSA9PiB7XG4gICAgICByZXR1cm4gbmFtZS5yZXBsYWNlKC9eW15hLXpBLVpdKy8sICcnKS5yZXBsYWNlKC9bXmEtekEtWjAtOV0oW2EtekEtWjAtOS1dKS9nLCAobSwgcCkgPT4ge1xuICAgICAgICByZXR1cm4gcC50b1VwcGVyQ2FzZSgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGxldCBzdHlsZU9iaiA9IHt9O1xuXG4gICAgKHN0eWxlU3RyICsgJycpLnJlcGxhY2UoLyhbYS16QS1aMC05LV0rKVxccyo6XFxzKihbXjtdKykvZywgKG0sIG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICBzdHlsZU9ialtuYW1lVG9Qcm9wZXJ0eU5hbWUobmFtZSldID0gdmFsdWUucmVwbGFjZSgvXlsnXCJdLywgJycpLnJlcGxhY2UoL1snXCJdJC8sICcnKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdHlsZU9iajtcbiAgfVxuXG4gIF9wYXJzZVN0eWxlcyhjb250ZXh0LCBzdHlsZXMpIHtcbiAgICBpZiAoIXN0eWxlcylcbiAgICAgIHJldHVybiB7fTtcblxuICAgIGxldCBmaW5hbFN0eWxlT2JqID0ge307XG4gICAgZm9yIChsZXQgaSA9IDAsIGlsID0gc3R5bGVzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcbiAgICAgIGxldCB2YWx1ZSA9IHN0eWxlc1tpXTtcbiAgICAgIGlmICghdmFsdWUgfHwgVXRpbHMuaW5zdGFuY2VPZih2YWx1ZSwgJ251bWJlcicsICdib29sZWFuJywgJ2JpZ2ludCcsICdmdW5jdGlvbicpKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgaWYgKFV0aWxzLmluc3RhbmNlT2YodmFsdWUsICdzdHJpbmcnKSlcbiAgICAgICAgZmluYWxTdHlsZU9iaiA9IE9iamVjdC5hc3NpZ24oZmluYWxTdHlsZU9iaiwgdGhpcy5fcGFyc2VDU1NTdHlsZVN0cmluZyhjb250ZXh0LCB2YWx1ZSkpO1xuICAgICAgZWxzZVxuICAgICAgICBmaW5hbFN0eWxlT2JqID0gT2JqZWN0LmFzc2lnbihmaW5hbFN0eWxlT2JqLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbmFsU3R5bGVPYmo7XG4gIH1cblxuICBfZmxhdHRlblN0eWxlcyhjb250ZXh0LCBfc3R5bGVzKSB7XG4gICAgbGV0IHN0eWxlcyA9IHRoaXMuX2ZsYXR0ZW5BbmRGaWx0ZXJTdHlsZXMoY29udGV4dCwgX3N0eWxlcyk7XG4gICAgaWYgKCFzdHlsZXMpXG4gICAgICByZXR1cm4ge307XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3R5bGVzKSlcbiAgICAgIHN0eWxlcyA9IFsgc3R5bGVzIF07XG5cbiAgICByZXR1cm4gdGhpcy5fcGFyc2VTdHlsZXMoY29udGV4dCwgc3R5bGVzKTtcbiAgfVxuXG4gIGJpbmRFdmVudE1ldGhvZChjb250ZXh0LCBlbGVtZW50LCBwcm9wTmFtZSwgX2V4dHJhQXJncywgZXZlbnRDYWxsYmFjaywgcHJvcHMpIHtcbiAgICBsZXQgZXh0cmFBcmdzICAgICAgID0gX2V4dHJhQXJncyB8fCBbXTtcbiAgICBsZXQgZXZlbnROYW1lICAgICAgID0gcHJvcE5hbWUuc3Vic3RyaW5nKDIpLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IGN1cnJlbnRCaW5kaW5ncyA9IHRoaXMuZXZlbnRCaW5kaW5ncy5nZXQoZWxlbWVudCk7XG4gICAgaWYgKGN1cnJlbnRCaW5kaW5ncykge1xuICAgICAgbGV0IGV2ZW50QmluZGluZyA9IGN1cnJlbnRCaW5kaW5ncy5nZXQoZXZlbnROYW1lKTtcbiAgICAgIGlmIChldmVudEJpbmRpbmcpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRCaW5kaW5nLmNhbGxiYWNrKTtcbiAgICAgICAgY3VycmVudEJpbmRpbmdzLmRlbGV0ZShldmVudE5hbWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50QmluZGluZ3MgPSBuZXcgTWFwKCk7XG4gICAgICB0aGlzLmV2ZW50QmluZGluZ3Muc2V0KGVsZW1lbnQsIGN1cnJlbnRCaW5kaW5ncyk7XG4gICAgfVxuXG4gICAgbGV0IGJpbmRpbmdDb250ZXh0ID0ge1xuICAgICAgY2FsbGJhY2s6IChldmVudCkgPT4gZXZlbnRDYWxsYmFjay5jYWxsKGVsZW1lbnQsIHsgdGFyZ2V0OiBlbGVtZW50LCBwcm9wTmFtZSwgZXZlbnQsIHByb3BzIH0pLFxuICAgICAgZXZlbnROYW1lLFxuICAgICAgZXh0cmFBcmdzLFxuICAgIH07XG5cbiAgICBjdXJyZW50QmluZGluZ3Muc2V0KGV2ZW50TmFtZSwgYmluZGluZ0NvbnRleHQpO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgYmluZGluZ0NvbnRleHQuY2FsbGJhY2ssIC4uLmV4dHJhQXJncyk7XG4gIH1cblxuICBhcHBseUVsZW1lbnRTdHlsZShjb250ZXh0LCBlbGVtZW50LCBlbGVtZW50U3R5bGUsIHByb3BOYW1lLCBfcHJvcFZhbHVlLCB1cGRhdGVkU3R5bGVzKSB7XG4gICAgbGV0IHByb3BWYWx1ZSA9IF9wcm9wVmFsdWU7XG4gICAgaWYgKHByb3BWYWx1ZSA9PSBudWxsIHx8IHByb3BWYWx1ZSA9PT0gZmFsc2UgfHwgcHJvcFZhbHVlID09PSB0cnVlIHx8IE9iamVjdC5pcyhwcm9wVmFsdWUsIEluZmluaXR5KSB8fCBPYmplY3QuaXMocHJvcFZhbHVlLCBOYU4pKVxuICAgICAgcHJvcFZhbHVlID0gJ3Vuc2V0JztcblxuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgcHJvcFZhbHVlID09PSAnYmlnaW50JyB8fCAocHJvcFZhbHVlIGluc3RhbmNlb2YgTnVtYmVyKSlcbiAgICAgIHByb3BWYWx1ZSA9IGAke3Byb3BWYWx1ZX1weGA7XG5cbiAgICBpZiAoZWxlbWVudFN0eWxlW3Byb3BOYW1lXSAhPT0gcHJvcFZhbHVlKSB7XG4gICAgICB1cGRhdGVkU3R5bGVzW3Byb3BOYW1lXSA9IHsgcHJldmlvdXM6IGVsZW1lbnRTdHlsZVtwcm9wTmFtZV0sIGN1cnJlbnQ6IHByb3BWYWx1ZSB9O1xuICAgICAgZWxlbWVudFN0eWxlW3Byb3BOYW1lXSA9IHByb3BWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBhcHBseUVsZW1lbnRTdHlsZXMoY29udGV4dCwgZWxlbWVudCwgc3R5bGVPYmosIHVwZGF0ZWRQcm9wcykge1xuICAgIGlmICghZWxlbWVudCB8fCAhc3R5bGVPYmopXG4gICAgICByZXR1cm47XG5cbiAgICBsZXQgc3R5bGVQcm9wcyA9IE9iamVjdC5rZXlzKHN0eWxlT2JqKS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKVxuICAgICAgICByZXR1cm4gTWF0aC5zaWduKGEubGVuZ3RoIC0gYi5sZW5ndGgpO1xuXG4gICAgICBpZiAoYSA9PT0gYilcbiAgICAgICAgcmV0dXJuIDA7XG5cbiAgICAgIHJldHVybiAoYSA8IGIpID8gLTEgOiAxO1xuICAgIH0pO1xuXG4gICAgbGV0IHVwZGF0ZWRTdHlsZXMgPSB7fTtcbiAgICBsZXQgZWxlbWVudFN0eWxlICA9IGVsZW1lbnQuc3R5bGU7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgaWwgPSBzdHlsZVByb3BzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcbiAgICAgIGxldCBwcm9wTmFtZSA9IHN0eWxlUHJvcHNbaV07XG4gICAgICBpZiAoIShwcm9wTmFtZSBpbiBlbGVtZW50U3R5bGUpKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgbGV0IHByb3BWYWx1ZSA9IHN0eWxlT2JqW3Byb3BOYW1lXTtcbiAgICAgIHRoaXMuYXBwbHlFbGVtZW50U3R5bGUoY29udGV4dCwgZWxlbWVudCwgZWxlbWVudFN0eWxlLCBwcm9wTmFtZSwgcHJvcFZhbHVlLCB1cGRhdGVkU3R5bGVzKTtcbiAgICB9XG5cbiAgICBsZXQgdXBkYXRlZFN0eWxlc0tleXMgPSBPYmplY3Qua2V5cyh1cGRhdGVkU3R5bGVzKTtcbiAgICBpZiAodXBkYXRlZFN0eWxlc0tleXMubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IHN0eWxlUHJvcFVwZGF0ZU9sZCAgPSB7fTtcbiAgICAgIGxldCBzdHlsZVByb3BVcGRhdGVOZXcgID0ge307XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBpbCA9IHVwZGF0ZWRTdHlsZXNLZXlzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcbiAgICAgICAgbGV0IHByb3BOYW1lICAgID0gdXBkYXRlZFN0eWxlc0tleXNbaV07XG4gICAgICAgIGxldCB1cGRhdGVWYWx1ZSA9IHVwZGF0ZWRTdHlsZXNbcHJvcE5hbWVdO1xuXG4gICAgICAgIHN0eWxlUHJvcFVwZGF0ZU9sZFtwcm9wTmFtZV0gPSB1cGRhdGVWYWx1ZS5wcmV2aW91cztcbiAgICAgICAgc3R5bGVQcm9wVXBkYXRlTmV3W3Byb3BOYW1lXSA9IHVwZGF0ZVZhbHVlLmN1cnJlbnQ7XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZWRQcm9wc1snc3R5bGUnXSA9IHsgcHJldmlvdXM6IHN0eWxlUHJvcFVwZGF0ZU9sZCwgY3VycmVudDogc3R5bGVQcm9wVXBkYXRlTmV3IH07XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0RWxlbWVudFByb3BzKGNvbnRleHQsIGVsZW1lbnQsIHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzIHx8IHt9O1xuICB9XG5cbiAgZm9ybWF0VG9BdHRyaWJ1dGVOYW1lKG5hbWUpIHtcbiAgICBsZXQgcmVzdWx0ID0gbmFtZS5yZXBsYWNlKC8oW2EtejAtOV18XikoW0EtWl0pL2csIChtLCBwMSwgcDIpID0+IHtcbiAgICAgIHJldHVybiBgJHtwMX0tJHtwMn1gO1xuICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZm9ybWF0RnJvbUF0dHJpYnV0ZU5hbWUobmFtZSkge1xuICAgIGxldCByZXN1bHQgPSBuYW1lLnJlcGxhY2UoLy1bYS16XS9nLCAobSkgPT4ge1xuICAgICAgcmV0dXJuIG0uc3Vic3RyaW5nKDEpLnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaGFuZGxlRWxlbWVudFByb3BlcnR5KGNvbnRleHQsIGVsZW1lbnQsIHByb3BOYW1lLCBwcm9wVmFsdWUsIHVwZGF0ZWRQcm9wcykge1xuICAgIGlmICghKHByb3BOYW1lIGluIGVsZW1lbnQpKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKCEoL14oc2Nyb2xsTGVmdHxzY3JvbGxUb3B8dmFsdWV8Y2hlY2tlZHxkaXNhYmxlZHxtYXh8bWlufG1heExlbmd0aHxtaW5MZW5ndGh8bXVsdGlwbGV8cGF0dGVybnxyZWFkb25seXxyZXF1aXJlZHxhdXRvZm9jdXN8b3BlbikkLykudGVzdChwcm9wTmFtZSkpXG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgYXR0cmlidXRlVmFsdWUgPSBlbGVtZW50W3Byb3BOYW1lXTtcbiAgICBpZiAoYXR0cmlidXRlVmFsdWUgIT09IHByb3BWYWx1ZSkge1xuICAgICAgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdESUFMT0cnICYmIHByb3BOYW1lID09PSAnb3BlbicgJiYgdHlwZW9mIGVsZW1lbnQuc2hvd01vZGFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHByb3BWYWx1ZSlcbiAgICAgICAgICAgIGVsZW1lbnQuc2hvd01vZGFsKCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZWxlbWVudC5jbG9zZSgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnRbcHJvcE5hbWVdICE9PSBhdHRyaWJ1dGVWYWx1ZSlcbiAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiAocHJvcFZhbHVlKVxuICAgICAgICAgICAgICBlbGVtZW50LnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBlbGVtZW50LmNsb3NlKCk7XG4gICAgICAgICAgfSwgNSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdXBkYXRlZFByb3BzW3Byb3BOYW1lXSA9IHsgcHJldmlvdXM6IGF0dHJpYnV0ZVZhbHVlLCBjdXJyZW50OiBwcm9wVmFsdWUgfTtcbiAgICAgIGVsZW1lbnRbcHJvcE5hbWVdID0gcHJvcFZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2V0RWxlbWVudEF0dHJpYnV0ZShjb250ZXh0LCBlbGVtZW50LCBwcm9wTmFtZSwgX3Byb3BWYWx1ZSkge1xuICAgIGxldCBwcm9wVmFsdWUgPSBfcHJvcFZhbHVlO1xuICAgIGlmIChwcm9wVmFsdWUgPT0gbnVsbClcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRoaXMuZm9ybWF0VG9BdHRyaWJ1dGVOYW1lKHByb3BOYW1lKSk7XG4gICAgZWxzZVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5mb3JtYXRUb0F0dHJpYnV0ZU5hbWUocHJvcE5hbWUpLCBwcm9wVmFsdWUpO1xuICB9XG5cbiAgZ2V0TmF0aXZlRWxlbWVudEF0dHJpYnV0ZXMoY29udGV4dCwgZWxlbWVudCwgaGVscGVyQ2FsbGJhY2spIHtcbiAgICBsZXQgYXR0cmlidXRlTmFtZXMgID0gZWxlbWVudC5nZXRBdHRyaWJ1dGVOYW1lcygpO1xuICAgIGxldCBwcm9wcyAgICAgICAgICAgPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBpbCA9IGF0dHJpYnV0ZU5hbWVzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcbiAgICAgIGxldCBhdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlTmFtZXNbaV07XG4gICAgICBsZXQgdmFsdWUgICAgICAgICA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZW9mIGhlbHBlckNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBoZWxwZXJDYWxsYmFjayhhdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XG4gICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbClcbiAgICAgICAgICBwcm9wcyA9IHsgLi4ucHJvcHMsIC4uLnJlc3VsdCB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHNbdGhpcy5mb3JtYXRGcm9tQXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHM7XG4gIH1cblxuICB1cGRhdGVFbGVtZW50QXR0cmlidXRlcyhjb250ZXh0LCBub2RlKSB7XG4gICAgbGV0IG5hdGl2ZUVsZW1lbnQgPSBub2RlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGV0IF9wcm9wcyA9IG5vZGUuamliLnByb3BzIHx8IHt9O1xuICAgIGxldCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIChfcHJvcHMgfHwge30pKTtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCAnc3R5bGUnKSlcbiAgICAgIHByb3BzLnN0eWxlID0gdGhpcy5fZmxhdHRlblN0eWxlcyhjb250ZXh0LCBwcm9wcy5zdHlsZSk7XG4gICAgZWxzZVxuICAgICAgcHJvcHMuc3R5bGUgPSB7fTtcblxuICAgIHByb3BzID0gdGhpcy5mb3JtYXRFbGVtZW50UHJvcHMoY29udGV4dCwgbmF0aXZlRWxlbWVudCwgcHJvcHMpO1xuXG4gICAgbGV0IHVwZGF0ZWRQcm9wcyAgPSB7fTtcbiAgICBsZXQgbmFtZXNUb0RlbGV0ZSA9IFtdO1xuICAgIGxldCBwcm9wTmFtZXMgICAgID0gT2JqZWN0LmtleXMocHJvcHMpO1xuICAgIGxldCBhdHRyaWJ1dGVzICAgID0gbmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGVOYW1lcygpLnJlZHVjZSgoYXR0cmlidXRlcywgYXR0cmlidXRlTmFtZSkgPT4ge1xuICAgICAgbGV0IGN1cnJlbnRBdHRyaWJ1dGVWYWx1ZSA9IG5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgbGV0IHByb3BOYW1lID0gdGhpcy5mb3JtYXRGcm9tQXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKTtcblxuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIHByb3BOYW1lKSkge1xuICAgICAgICBuYW1lc1RvRGVsZXRlLnB1c2goYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIHVwZGF0ZWRQcm9wc1twcm9wTmFtZV0gPSB7IHByZXZpb3VzOiBjdXJyZW50QXR0cmlidXRlVmFsdWUsIGN1cnJlbnQ6IHVuZGVmaW5lZCB9O1xuICAgICAgfVxuXG4gICAgICBhdHRyaWJ1dGVzW3Byb3BOYW1lXSA9IGN1cnJlbnRBdHRyaWJ1dGVWYWx1ZTtcbiAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xuICAgIH0sIHt9KTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBpbCA9IHByb3BOYW1lcy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XG4gICAgICBsZXQgcHJvcE5hbWUgPSBwcm9wTmFtZXNbaV07XG4gICAgICBpZiAocHJvcE5hbWUgPT09ICdrZXknKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgaWYgKHR5cGVvZiBwcm9wTmFtZSA9PT0gJ3N5bWJvbCcpXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoKC9eb25bQS1aXS4qRXh0cmFBcmdzJC8pLnRlc3QocHJvcE5hbWUpKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgaWYgKCgvXihvdXRlckhUTUwpJC8pLnRlc3QocHJvcE5hbWUpKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgbGV0IHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblxuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIEJvb2xlYW4gfHwgcHJvcFZhbHVlIGluc3RhbmNlb2YgTnVtYmVyIHx8IHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN0cmluZylcbiAgICAgICAgcHJvcFZhbHVlID0gcHJvcFZhbHVlLnZhbHVlT2YoKTtcblxuICAgICAgaWYgKHByb3BOYW1lID09PSAnc3R5bGUnKSB7XG4gICAgICAgIHRoaXMuYXBwbHlFbGVtZW50U3R5bGVzKGNvbnRleHQsIG5hdGl2ZUVsZW1lbnQsIHByb3BWYWx1ZSwgdXBkYXRlZFByb3BzKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wTmFtZSA9PT0gJ2lubmVySFRNTCcpIHtcbiAgICAgICAgbmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAocHJvcFZhbHVlID09IG51bGwpID8gJycgOiBwcm9wVmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaGFuZGxlRWxlbWVudFByb3BlcnR5KGNvbnRleHQsIG5hdGl2ZUVsZW1lbnQsIHByb3BOYW1lLCBwcm9wVmFsdWUsIHVwZGF0ZWRQcm9wcykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB0eXBlT2YgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBwcm9wVmFsdWUgPSBwcm9wTmFtZTtcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBwcm9wVmFsdWUgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmICh0eXBlT2YgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgIHByb3BWYWx1ZSA9IHByb3BWYWx1ZS50b1N0cmluZygpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlT2YgPT09ICdudW1iZXInIHx8IHR5cGVPZiA9PT0gJ3N0cmluZycgfHwgdHlwZU9mID09PSAnYmlnaW50Jykge1xuICAgICAgICBwcm9wVmFsdWUgPSAnJyArIHByb3BWYWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZU9mID09PSAnZnVuY3Rpb24nICYmICgvXm9uW0EtWl0vKS50ZXN0KHByb3BOYW1lKSkge1xuICAgICAgICB0aGlzLmJpbmRFdmVudE1ldGhvZChjb250ZXh0LCBuYXRpdmVFbGVtZW50LCBwcm9wTmFtZSwgcHJvcHNbYCR7cHJvcE5hbWV9RXh0cmFBcmdzYF0sIHByb3BWYWx1ZSwgcHJvcHMpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBhdHRyaWJ1dGVWYWx1ZSA9IGF0dHJpYnV0ZXNbcHJvcE5hbWVdO1xuICAgICAgaWYgKGF0dHJpYnV0ZVZhbHVlICE9PSBwcm9wVmFsdWUpXG4gICAgICAgIHVwZGF0ZWRQcm9wc1twcm9wTmFtZV0gPSB7IHByZXZpb3VzOiBhdHRyaWJ1dGVWYWx1ZSwgY3VycmVudDogcHJvcFZhbHVlIH07XG4gICAgICBlbHNlXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICB0aGlzLnNldEVsZW1lbnRBdHRyaWJ1dGUoY29udGV4dCwgbmF0aXZlRWxlbWVudCwgcHJvcE5hbWUsIHByb3BWYWx1ZSk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGlsID0gbmFtZXNUb0RlbGV0ZS5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XG4gICAgICBsZXQgcHJvcE5hbWUgPSBuYW1lc1RvRGVsZXRlW2ldO1xuICAgICAgbmF0aXZlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUocHJvcE5hbWUpO1xuICAgIH1cblxuICAgIC8vIHRoaXMuc2V0RWxlbWVudEF0dHJpYnV0ZShjb250ZXh0LCBuYXRpdmVFbGVtZW50LCAnamlicy1lbGVtZW50LWlkJywgbm9kZS5pZCk7XG5cbiAgICByZXR1cm4gKE9iamVjdC5rZXlzKHVwZGF0ZWRQcm9wcykubGVuZ3RoID4gMCkgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBhc3luYyBkZXN0cm95TmF0aXZlRWxlbWVudChjb250ZXh0LCBub2RlKSB7XG4gICAgbGV0IG5hdGl2ZUVsZW1lbnQgPSBub2RlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKCFuYXRpdmVFbGVtZW50KVxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKG5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZSlcbiAgICAgIG5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuYXRpdmVFbGVtZW50KTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgYXN5bmMgZGVzdHJveVRleHRFbGVtZW50KGNvbnRleHQsIG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5kZXN0cm95TmF0aXZlRWxlbWVudChjb250ZXh0LCBub2RlKTtcbiAgfVxuXG4gIGFzeW5jIGRlc3Ryb3lQb3J0YWxFbGVtZW50KGNvbnRleHQsIG5vZGUpIHtcbiAgICAvLyBXZSBkb24ndCB3YW50IHRvIGRlc3Ryb3kgcG9ydGFscy5cbiAgICAvLyBXZSBsZXQgdGhlIG93bmVyIG9mIHRoZSBwb3J0YWwgZGVzdHJveSBpdHNlbGZcbiAgICAvLyBpbnN0ZWFkLlxuICB9XG5cbiAgYXN5bmMgZmluZE5hdGl2ZUVsZW1lbnQoY29udGV4dCwgbm9kZSkge1xuICAgIGlmICghbm9kZSB8fCAhbm9kZS5qaWIgfHwgIW5vZGUuamliLlR5cGUpXG4gICAgICByZXR1cm47XG5cbiAgICByZXR1cm4gdGhpcy5nZXREb2N1bWVudChjb250ZXh0KS5xdWVyeVNlbGVjdG9yKG5vZGUuamliLlR5cGUpO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlTmF0aXZlRWxlbWVudChjb250ZXh0LCBub2RlKSB7XG4gICAgaWYgKCFub2RlIHx8ICFub2RlLmppYiB8fCAhbm9kZS5qaWIuVHlwZSlcbiAgICAgIHJldHVybjtcblxuICAgIGxldCBfdHlwZSAgICA9IG5vZGUuamliLlR5cGU7XG4gICAgbGV0IGlzVGVybSAgPSAoL150ZXJtJC9pKS50ZXN0KF90eXBlKTtcbiAgICBsZXQgdHlwZSAgICA9IChpc1Rlcm0pID8gJ3NwYW4nIDogX3R5cGU7XG4gICAgbGV0IGVsZW1lbnQgPSB0aGlzLmdldERvY3VtZW50KGNvbnRleHQpLmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBmb3JjZU5hdGl2ZUVsZW1lbnRSZWZsb3coY29udGV4dCwgbm9kZSwgbmF0aXZlRWxlbWVudCkge1xuICAgIGlmIChub2RlLnByb3BzICYmIG5vZGUucHJvcHNbRk9SQ0VfUkVGTE9XXSlcbiAgICAgIG5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIH1cblxuICBhc3luYyB1cGRhdGVOYXRpdmVFbGVtZW50KGNvbnRleHQsIG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy51cGRhdGVFbGVtZW50QXR0cmlidXRlcyhjb250ZXh0LCBub2RlKTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVRleHRFbGVtZW50KGNvbnRleHQsIG5vZGUpIHtcbiAgICBpZiAoIW5vZGUgfHwgIW5vZGUuamliKVxuICAgICAgcmV0dXJuO1xuXG4gICAgbGV0IHRleHQgPSBub2RlLmppYi5jaGlsZHJlbjtcbiAgICBpZiAodGV4dCA9PSBudWxsIHx8IE9iamVjdC5pcyh0ZXh0LCBOYU4pIHx8IE9iamVjdC5pcyh0ZXh0LCBJbmZpbml0eSkpXG4gICAgICB0ZXh0ID0gJyc7XG5cbiAgICByZXR1cm4gdGhpcy5nZXREb2N1bWVudChjb250ZXh0KS5jcmVhdGVUZXh0Tm9kZSgoJycgKyB0ZXh0KSk7XG4gIH1cblxuICBhc3luYyB1cGRhdGVUZXh0RWxlbWVudChjb250ZXh0LCBub2RlKSB7XG4gICAgaWYgKCFub2RlIHx8ICFub2RlLmppYilcbiAgICAgIHJldHVybjtcblxuICAgIGxldCBuYXRpdmVFbGVtZW50ID0gbm9kZS5uYXRpdmVFbGVtZW50O1xuICAgIGlmICghbmF0aXZlRWxlbWVudClcbiAgICAgIHJldHVybjtcblxuICAgIGxldCB0ZXh0ID0gbm9kZS5qaWIuY2hpbGRyZW47XG4gICAgaWYgKHRleHQgPT0gbnVsbCB8fCBPYmplY3QuaXModGV4dCwgTmFOKSB8fCBPYmplY3QuaXModGV4dCwgSW5maW5pdHkpKVxuICAgICAgdGV4dCA9ICcnO1xuXG4gICAgbGV0IGN1cnJlbnRUZXh0ID0gbmF0aXZlRWxlbWVudC5ub2RlVmFsdWU7XG4gICAgaWYgKGN1cnJlbnRUZXh0ID09PSB0ZXh0KVxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgbmF0aXZlRWxlbWVudC5ub2RlVmFsdWUgPSB0ZXh0O1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBhc3luYyBjcmVhdGVQb3J0YWxFbGVtZW50KGNvbnRleHQsIG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5maW5kTmF0aXZlRWxlbWVudChjb250ZXh0LCBub2RlKTtcbiAgfVxufVxuXG5leHBvcnQgKiBmcm9tICcuL3Jlc291cmNlLWxvYWRlci5qcyc7XG5cbmV4cG9ydCBjb25zdCBBID0gJ0EnO1xuZXhwb3J0IGNvbnN0IEFCQlIgPSAnQUJCUic7XG5leHBvcnQgY29uc3QgQUREUkVTUyA9ICdBRERSRVNTJztcbmV4cG9ydCBjb25zdCBBUkVBID0gJ0FSRUEnO1xuZXhwb3J0IGNvbnN0IEFSVElDTEUgPSAnQVJUSUNMRSc7XG5leHBvcnQgY29uc3QgQVNJREUgPSAnQVNJREUnO1xuZXhwb3J0IGNvbnN0IEFVRElPID0gJ0FVRElPJztcbmV4cG9ydCBjb25zdCBCID0gJ0InO1xuZXhwb3J0IGNvbnN0IEJBU0UgPSAnQkFTRSc7XG5leHBvcnQgY29uc3QgQkRJID0gJ0JESSc7XG5leHBvcnQgY29uc3QgQkRPID0gJ0JETyc7XG5leHBvcnQgY29uc3QgQkxPQ0tRVU9URSA9ICdCTE9DS1FVT1RFJztcbmV4cG9ydCBjb25zdCBCUiA9ICdCUic7XG5leHBvcnQgY29uc3QgQlVUVE9OID0gJ0JVVFRPTic7XG5leHBvcnQgY29uc3QgQ0FOVkFTID0gJ0NBTlZBUyc7XG5leHBvcnQgY29uc3QgQ0FQVElPTiA9ICdDQVBUSU9OJztcbmV4cG9ydCBjb25zdCBDSVRFID0gJ0NJVEUnO1xuZXhwb3J0IGNvbnN0IENPREUgPSAnQ09ERSc7XG5leHBvcnQgY29uc3QgQ09MID0gJ0NPTCc7XG5leHBvcnQgY29uc3QgQ09MR1JPVVAgPSAnQ09MR1JPVVAnO1xuZXhwb3J0IGNvbnN0IERBVEEgPSAnREFUQSc7XG5leHBvcnQgY29uc3QgREFUQUxJU1QgPSAnREFUQUxJU1QnO1xuZXhwb3J0IGNvbnN0IEREID0gJ0REJztcbmV4cG9ydCBjb25zdCBERUwgPSAnREVMJztcbmV4cG9ydCBjb25zdCBERVRBSUxTID0gJ0RFVEFJTFMnO1xuZXhwb3J0IGNvbnN0IERGTiA9ICdERk4nO1xuZXhwb3J0IGNvbnN0IERJQUxPRyA9ICdESUFMT0cnO1xuZXhwb3J0IGNvbnN0IERJViA9ICdESVYnO1xuZXhwb3J0IGNvbnN0IERMID0gJ0RMJztcbmV4cG9ydCBjb25zdCBEVCA9ICdEVCc7XG5leHBvcnQgY29uc3QgRU0gPSAnRU0nO1xuZXhwb3J0IGNvbnN0IEVNQkVEID0gJ0VNQkVEJztcbmV4cG9ydCBjb25zdCBGSUVMRFNFVCA9ICdGSUVMRFNFVCc7XG5leHBvcnQgY29uc3QgRklHQ0FQVElPTiA9ICdGSUdDQVBUSU9OJztcbmV4cG9ydCBjb25zdCBGSUdVUkUgPSAnRklHVVJFJztcbmV4cG9ydCBjb25zdCBGT09URVIgPSAnRk9PVEVSJztcbmV4cG9ydCBjb25zdCBGT1JNID0gJ0ZPUk0nO1xuZXhwb3J0IGNvbnN0IEgxID0gJ0gxJztcbmV4cG9ydCBjb25zdCBIMiA9ICdIMic7XG5leHBvcnQgY29uc3QgSDMgPSAnSDMnO1xuZXhwb3J0IGNvbnN0IEg0ID0gJ0g0JztcbmV4cG9ydCBjb25zdCBINSA9ICdINSc7XG5leHBvcnQgY29uc3QgSDYgPSAnSDYnO1xuZXhwb3J0IGNvbnN0IEhFQURFUiA9ICdIRUFERVInO1xuZXhwb3J0IGNvbnN0IEhHUk9VUCA9ICdIR1JPVVAnO1xuZXhwb3J0IGNvbnN0IEhSID0gJ0hSJztcbmV4cG9ydCBjb25zdCBJID0gJ0knO1xuZXhwb3J0IGNvbnN0IElGUkFNRSA9ICdJRlJBTUUnO1xuZXhwb3J0IGNvbnN0IElNRyA9ICdJTUcnO1xuZXhwb3J0IGNvbnN0IElOUFVUID0gJ0lOUFVUJztcbmV4cG9ydCBjb25zdCBJTlMgPSAnSU5TJztcbmV4cG9ydCBjb25zdCBLQkQgPSAnS0JEJztcbmV4cG9ydCBjb25zdCBMQUJFTCA9ICdMQUJFTCc7XG5leHBvcnQgY29uc3QgTEVHRU5EID0gJ0xFR0VORCc7XG5leHBvcnQgY29uc3QgTEkgPSAnTEknO1xuZXhwb3J0IGNvbnN0IExJTksgPSAnTElOSyc7XG5leHBvcnQgY29uc3QgTUFJTiA9ICdNQUlOJztcbmV4cG9ydCBjb25zdCBNQVAgPSAnTUFQJztcbmV4cG9ydCBjb25zdCBNQVJLID0gJ01BUksnO1xuZXhwb3J0IGNvbnN0IE1FTlUgPSAnTUVOVSc7XG5leHBvcnQgY29uc3QgTUVUQSA9ICdNRVRBJztcbmV4cG9ydCBjb25zdCBNRVRFUiA9ICdNRVRFUic7XG5leHBvcnQgY29uc3QgTkFWID0gJ05BVic7XG5leHBvcnQgY29uc3QgTk9TQ1JJUFQgPSAnTk9TQ1JJUFQnO1xuZXhwb3J0IGNvbnN0IE9CSkVDVCA9ICdPQkpFQ1QnO1xuZXhwb3J0IGNvbnN0IE9MID0gJ09MJztcbmV4cG9ydCBjb25zdCBPUFRHUk9VUCA9ICdPUFRHUk9VUCc7XG5leHBvcnQgY29uc3QgT1BUSU9OID0gJ09QVElPTic7XG5leHBvcnQgY29uc3QgT1VUUFVUID0gJ09VVFBVVCc7XG5leHBvcnQgY29uc3QgUCA9ICdQJztcbmV4cG9ydCBjb25zdCBQSUNUVVJFID0gJ1BJQ1RVUkUnO1xuZXhwb3J0IGNvbnN0IFBSRSA9ICdQUkUnO1xuZXhwb3J0IGNvbnN0IFBST0dSRVNTID0gJ1BST0dSRVNTJztcbmV4cG9ydCBjb25zdCBRID0gJ1EnO1xuZXhwb3J0IGNvbnN0IFJQID0gJ1JQJztcbmV4cG9ydCBjb25zdCBSVCA9ICdSVCc7XG5leHBvcnQgY29uc3QgUlVCWSA9ICdSVUJZJztcbmV4cG9ydCBjb25zdCBTID0gJ1MnO1xuZXhwb3J0IGNvbnN0IFNBTVAgPSAnU0FNUCc7XG5leHBvcnQgY29uc3QgU0NSSVBUID0gJ1NDUklQVCc7XG5leHBvcnQgY29uc3QgU0VDVElPTiA9ICdTRUNUSU9OJztcbmV4cG9ydCBjb25zdCBTRUxFQ1QgPSAnU0VMRUNUJztcbmV4cG9ydCBjb25zdCBTTE9UID0gJ1NMT1QnO1xuZXhwb3J0IGNvbnN0IFNNQUxMID0gJ1NNQUxMJztcbmV4cG9ydCBjb25zdCBTT1VSQ0UgPSAnU09VUkNFJztcbmV4cG9ydCBjb25zdCBTUEFOID0gJ1NQQU4nO1xuZXhwb3J0IGNvbnN0IFNUUk9ORyA9ICdTVFJPTkcnO1xuZXhwb3J0IGNvbnN0IFNUWUxFID0gJ1NUWUxFJztcbmV4cG9ydCBjb25zdCBTVUIgPSAnU1VCJztcbmV4cG9ydCBjb25zdCBTVU1NQVJZID0gJ1NVTU1BUlknO1xuZXhwb3J0IGNvbnN0IFNVUCA9ICdTVVAnO1xuZXhwb3J0IGNvbnN0IFRBQkxFID0gJ1RBQkxFJztcbmV4cG9ydCBjb25zdCBUQk9EWSA9ICdUQk9EWSc7XG5leHBvcnQgY29uc3QgVEQgPSAnVEQnO1xuZXhwb3J0IGNvbnN0IFRFTVBMQVRFID0gJ1RFTVBMQVRFJztcbmV4cG9ydCBjb25zdCBURVhUQVJFQSA9ICdURVhUQVJFQSc7XG5leHBvcnQgY29uc3QgVEVSTSA9ICdURVJNJztcbmV4cG9ydCBjb25zdCBURk9PVCA9ICdURk9PVCc7XG5leHBvcnQgY29uc3QgVEggPSAnVEgnO1xuZXhwb3J0IGNvbnN0IFRIRUFEID0gJ1RIRUFEJztcbmV4cG9ydCBjb25zdCBUSU1FID0gJ1RJTUUnO1xuZXhwb3J0IGNvbnN0IFRJVExFID0gJ1RJVExFJztcbmV4cG9ydCBjb25zdCBUUiA9ICdUUic7XG5leHBvcnQgY29uc3QgVFJBQ0sgPSAnVFJBQ0snO1xuZXhwb3J0IGNvbnN0IFUgPSAnVSc7XG5leHBvcnQgY29uc3QgVUwgPSAnVUwnO1xuZXhwb3J0IGNvbnN0IFZBUiA9ICdWQVInO1xuZXhwb3J0IGNvbnN0IFZJREVPID0gJ1ZJREVPJztcbmV4cG9ydCBjb25zdCBXQlIgPSAnV0JSJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==