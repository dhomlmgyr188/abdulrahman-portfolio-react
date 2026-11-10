/*! For license information please see main.bdf49cc5.js.LICENSE.txt */
(()=>{"use strict";var e={};const t={};function n(r){const o=t[r];if(void 0!==o)return o.exports;const a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.cw=e=>{var t;return()=>{if(e){var n=e;e=0,t={exports:{}},n.call(t.exports,t,t.exports)}return t.exports}},(()=>{const e=Object.getPrototypeOf;let t;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}const a=Object.create(null);n.r(a);const i={};t||=[null,e({}),e([]),e(e)];for(var l=2&o&&r;("object"==typeof l||"function"==typeof l)&&!~t.indexOf(l);l=e(l))Object.getOwnPropertyNames(l).forEach(e=>i[e]=()=>r[e]);return i.default=()=>r,n.d(a,i),a}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/abdulrahman-portfolio-react/",n.nc=void 0;var r=n.cw(function(e,t){var n=p(),r=c(),o=i();function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function s(e){for(var t=e,n=t;n&&!n.alternate;)0!==(4098&(t=n).flags)&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return 3===t.tag?e:null}function u(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function d(e){if(31===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function h(e){if(s(e)!==e)throw Error(a(188))}function f(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=f(e)))return t;e=e.sibling}return null}function m(e,t,n,r,o,a){for(;null!==e;){if((5===e.tag||27===e.tag||6===e.tag)&&n(e,r,o,a)||(22!==e.tag||null===e.memoizedState)&&(t||5!==e.tag&&27!==e.tag)&&m(e.child,t,n,r,o,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;null!==e;){if(3===e.tag||5===e.tag||27===e.tag)return e;e=e.return}return null}function v(e){var t=!1;for(e=e.return;null!==e&&(4===e.tag&&(t=!0),3!==e.tag&&5!==e.tag&&27!==e.tag);)e=e.return;return t}function b(e){var t=[null,null],n=g(e);return null===n||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;null!==n;){if(n===t)r.foundSelf=!0;else if(5===n.tag||27===n.tag||6===n.tag){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((22!==n.tag||null===n.memoizedState)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function x(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(a(559))}}var w=null,k=null;function S(e,t,n){return e===n||e===t&&(w=e,!0)}function j(e,t,n){return e===n?(k=e,!1):e===t&&(null!==k&&(w=e),!0)}function E(e){if(null===e)return null;do{e=null===e?null:e.return}while(e&&5!==e.tag&&27!==e.tag&&3!==e.tag);return e||null}function C(e,t,n){for(var r=0,o=e;o;o=n(o))r++;o=0;for(var a=t;a;a=n(a))o++;for(;0<r-o;)e=n(e),r--;for(;0<o-r;)t=n(t),o--;for(;r--;){if(e===t||null!==t&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var T=Object.assign,L=Symbol.for("react.element"),P=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),R=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),F=Symbol.for("react.lazy");Symbol.for("react.scope");var H=Symbol.for("react.activity"),B=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var U=Symbol.for("react.memo_cache_sentinel"),V=Symbol.for("react.view_transition"),W=Symbol.for("react.recoverable"),G=Symbol.iterator;function q(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=G&&e[G]||e["@@iterator"])?e:null}var J=Symbol.for("react.client.reference");function K(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===J?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case N:return"Fragment";case A:return"Profiler";case z:return"StrictMode";case M:return"Suspense";case D:return"SuspenseList";case H:return"Activity";case V:return"ViewTransition"}if("object"===typeof e)switch(e.$$typeof){case _:return"Portal";case R:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case I:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case $:return null!==(t=e.displayName||null)?t:K(e.type)||"Memo";case F:t=e._payload,e=e._init;try{return K(e(t))}catch(n){}}return null}var Y=Array.isArray,Q=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},ee=[],te=-1;function ne(e){return{current:e}}function re(e){0>te||(e.current=ee[te],ee[te]=null,te--)}function oe(e,t){te++,ee[te]=e.current,e.current=t}var ae,ie,le=ne(null),se=ne(null),ce=ne(null),ue=ne(null);function de(e,t){switch(oe(ce,t),oe(se,e),oe(le,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Dp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=$p(t=Dp(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}re(le),oe(le,e)}function pe(){re(le),re(se),re(ce)}function he(e){var t=e.memoizedState;null!==t&&(ff._currentValue=t.memoizedState,oe(ue,e));var n=$p(t=le.current,e.type);t!==n&&(oe(se,e),oe(le,n))}function fe(e){se.current===e&&(re(le),re(se)),ue.current===e&&(re(ue),ff._currentValue=Z)}function me(e){if(void 0===ae)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ae=t&&t[1]||"",ie=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+ae+e+ie}var ge=!1;function ve(e,t){if(!e||ge)return"";ge=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(i){r=i}n=!1;try{var o=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(void 0!==o?Object.defineProperty(e.prototype,"props",o):delete e.prototype.props)}}}else{try{throw Error()}catch(l){r=l}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(s){if(s&&r&&"string"===typeof s.stack)return[s.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=r.DetermineComponentFrameRoot(),i=a[0],l=a[1];if(i&&l){var s=i.split("\n"),c=l.split("\n");for(o=r=0;r<s.length&&!s[r].includes("DetermineComponentFrameRoot");)r++;for(;o<c.length&&!c[o].includes("DetermineComponentFrameRoot");)o++;if(r===s.length||o===c.length)for(r=s.length-1,o=c.length-1;1<=r&&0<=o&&s[r]!==c[o];)o--;for(;1<=r&&0<=o;r--,o--)if(s[r]!==c[o]){if(1!==r||1!==o)do{if(r--,0>--o||s[r]!==c[o]){var u="\n"+s[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=o);break}}}finally{ge=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?me(n):""}function be(e,t){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me("Lazy");case 13:return e.child!==t&&null!==t?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return ve(e.type,!1);case 11:return ve(e.type.render,!1);case 1:return ve(e.type,!0);case 31:return me("Activity");case 30:return me("ViewTransition");default:return""}}function ye(e){try{var t="",n=null;do{t+=be(e,n),n=e,e=e.return}while(e);return t}catch(r){return"\nError generating stack: "+r.message+"\n"+r.stack}}var xe=Object.prototype.hasOwnProperty,we=n.unstable_scheduleCallback,ke=n.unstable_cancelCallback,Se=n.unstable_shouldYield,je=n.unstable_requestPaint,Ee=n.unstable_now,Ce=n.unstable_getCurrentPriorityLevel,Te=n.unstable_ImmediatePriority,Le=n.unstable_UserBlockingPriority,Pe=n.unstable_NormalPriority,_e=n.unstable_LowPriority,Ne=n.unstable_IdlePriority,ze=n.log,Ae=n.unstable_setDisableYieldValue,Oe=null,Re=null;function Ie(e){if("function"===typeof ze&&Ae(e),Re&&"function"===typeof Re.setStrictMode)try{Re.setStrictMode(Oe,e)}catch(t){}}var Me=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(De(e)/$e|0)|0},De=Math.log,$e=Math.LN2;var Fe=256,He=262144,Be=4194304;function Ue(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return 3932160&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ve(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var o=0,a=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var l=134217727&r;return 0!==l?0!==(r=l&~a)?o=Ue(r):0!==(i&=l)?o=Ue(i):n||0!==(n=l&~e)&&(o=Ue(n)):0!==(l=r&~a)?o=Ue(l):0!==i?o=Ue(i):n||0!==(n=r&~e)&&(o=Ue(n)),0===o?0:0!==t&&t!==o&&0===(t&a)&&((a=o&-o)>=(n=t&-t)||32===a&&0!==(4194048&n))?t:o}function We(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function Ge(e,t){0!==(8&t)&&(t|=32&t);var n=e.entangledLanes;if(0!==n)for(e=e.entanglements,n&=t;0<n;){var r=31-Me(n),o=1<<r;t|=e[r],n&=~o}return t}function qe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Je(){var e=Be;return 0===(62914560&(Be<<=1))&&(Be=4194304),e}function Ke(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ye(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qe(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Me(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|261930&n}function Xe(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}function Ze(e,t){var n=t&-t;return 0!==((n=0!==(42&n)?1:et(n))&(e.suspendedLanes|t))?0:n}function et(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function tt(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function nt(){var e=X.p;return 0!==e?e:void 0===(e=window.event)?32:_f(e.type)}function rt(e,t){var n=X.p;try{return X.p=e,t()}finally{X.p=n}}var ot=Math.random().toString(36).slice(2),at="__reactFiber$"+ot,it="__reactProps$"+ot,lt="__reactContainer$"+ot,st="__reactEvents$"+ot,ct="__reactListeners$"+ot,ut="__reactHandles$"+ot,dt="__reactResources$"+ot,pt="__reactMarker$"+ot,ht="__reactLoad$"+ot;function ft(e){delete e[at],delete e[it],delete e[ct],delete e[ut]}function mt(e){var t;if(t=e[at])return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[at]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Ah(e);null!==e;){if(n=e[at])return n;e=Ah(e)}return t}n=(e=n).parentNode}return null}function gt(e){if(e=e[at]||e[lt]){var t=e.tag;if(5===t||6===t||13===t||31===t||26===t||27===t||3===t)return e}return null}function vt(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(a(33))}function bt(e){var t=e[dt];return t||(t=e[dt]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function yt(e){e[pt]=!0}function xt(e){e[ht]=void 0}var wt=new Set,kt={};function St(e,t){jt(e,t),jt(e+"Capture",t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)wt.add(t[e])}var Et=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ct={},Tt={};var Lt=!1;function Pt(){var e=Lt;return Lt=!1,e}function _t(e,t,n){if(o=t,xe.call(Tt,o)||!xe.call(Ct,o)&&(Et.test(o)?Tt[o]=!0:(Ct[o]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,n)}var o}function Nt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,n)}}function zt(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,r)}}function At(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function Ot(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Rt(e){if(!e._valueTracker){var t=Ot(e)?"checked":"value";e._valueTracker=function(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var o=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){n=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e,t,""+e[t])}}function It(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ot(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}var Mt=/[\n"\\]/g;function Dt(e){return e.replace(Mt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function $t(e,t,n,r,o,a,i,l){e.name="",null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i?e.type=i:e.removeAttribute("type"),null!=t?"number"===i?(0===t&&""===e.value||e.value!=t)&&(e.value=""+At(t)):e.value!==""+At(t)&&(e.value=""+At(t)):"submit"!==i&&"reset"!==i||e.removeAttribute("value"),null!=t?"number"===i&&e.value==t?Ht(e,At(e.value)):Ht(e,At(t)):null!=n?Ht(e,At(n)):null!=r&&e.removeAttribute("value"),null==o&&null!=a&&(e.defaultChecked=!!a),null!=o&&(e.checked=o&&"function"!==typeof o&&"symbol"!==typeof o),null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.name=""+At(l):e.removeAttribute("name")}function Ft(e,t,n,r,o,a,i,l){if(null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a&&(e.type=a),null!=t||null!=n){if(!("submit"!==a&&"reset"!==a||void 0!==t&&null!==t))return void Rt(e);n=null!=n?""+At(n):"",t=null!=t?""+At(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:o)&&"symbol"!==typeof r&&!!r,e.checked=l?e.checked:!!r,e.defaultChecked=!!r,null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.name=i),Rt(e)}function Ht(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Bt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+At(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function Ut(e,t,n){null==t||((t=""+At(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+At(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function Vt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(a(92));if(Y(r)){if(1<r.length)throw Error(a(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=At(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r),Rt(e)}function Wt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Gt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qt(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||Gt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Jt(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(a(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="",Lt=!0);for(var o in t)r=t[o],t.hasOwnProperty(o)&&n[o]!==r&&(qt(e,o,r),Lt=!0)}else for(var i in t)t.hasOwnProperty(i)&&qt(e,i,t[i])}function Kt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xt(e){return Qt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var en=null;function tn(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var nn=null,rn=null;function on(e){var t=gt(e);if(t&&(e=t.stateNode)){var n=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if($t(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Dt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=r[it]||null;if(!o)throw Error(a(90));$t(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&It(r)}break e;case"textarea":Ut(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&Bt(e,!!n.multiple,t,!1)}}}var an=!1;function ln(e,t,n){if(an)return e(t,n);an=!0;try{return e(t)}finally{if(an=!1,(null!==nn||null!==rn)&&(bd(),nn&&(t=nn,e=rn,rn=nn=null,on(t),e)))for(t=0;t<e.length;t++)on(e[t])}}function sn(e,t){var n=e.stateNode;if(null===n)return null;var r=n[it]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var cn=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),un=!1;if(cn)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){un=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch(tm){un=!1}var pn=null,hn=null,fn=null;function mn(){if(fn)return fn;var e,t,n=hn,r=n.length,o="value"in pn?pn.value:pn.textContent,a=o.length;for(e=0;e<r&&n[e]===o[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===o[a-t];t++);return fn=o.slice(e,1<t?1-t:void 0)}function gn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function vn(){return!0}function bn(){return!1}function yn(e){function t(t,n,r,o,a){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(o):o[i]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?vn:bn,this.isPropagationStopped=bn,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=vn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=vn)},persist:function(){},isPersistent:vn}),t}var xn,wn,kn,Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jn=yn(Sn),En=T({},Sn,{view:0,detail:0}),Cn=yn(En),Tn=T({},En,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&"mousemove"===e.type?(xn=e.screenX-kn.screenX,wn=e.screenY-kn.screenY):wn=xn=0,kn=e),xn)},movementY:function(e){return"movementY"in e?e.movementY:wn}}),Ln=yn(Tn),Pn=yn(T({},Tn,{dataTransfer:0})),_n=yn(T({},En,{relatedTarget:0})),Nn=yn(T({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0})),zn=yn(T({},Sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),An=yn(T({},Sn,{data:0})),On={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},In={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=In[e])&&!!t[e]}function Dn(){return Mn}var $n=yn(T({},En,{key:function(e){if(e.key){var t=On[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=gn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Rn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dn,charCode:function(e){return"keypress"===e.type?gn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?gn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),Fn=yn(T({},Tn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Hn=yn(T({},Sn,{submitter:0})),Bn=yn(T({},En,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dn})),Un=yn(T({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Vn=yn(T({},Tn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Wn=yn(T({},Sn,{newState:0,oldState:0,source:0})),Gn=[9,13,27,32],qn=cn&&"CompositionEvent"in window,Jn=null;cn&&"documentMode"in document&&(Jn=document.documentMode);var Kn=cn&&"TextEvent"in window&&!Jn,Yn=cn&&(!qn||Jn&&8<Jn&&11>=Jn),Qn=String.fromCharCode(32),Xn=!1;function Zn(e,t){switch(e){case"keyup":return-1!==Gn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function er(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var tr=!1;var nr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nr[e.type]:"textarea"===t}function or(e,t,n,r){nn?rn?rn.push(r):rn=[r]:nn=r,0<(t=Sp(t,"onChange")).length&&(n=new jn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ar=null,ir=null;function lr(e){mp(e,0)}function sr(e){if(It(vt(e)))return e}function cr(e,t){if("change"===e)return t}var ur=!1;if(cn){var dr;if(cn){var pr="oninput"in document;if(!pr){var hr=document.createElement("div");hr.setAttribute("oninput","return;"),pr="function"===typeof hr.oninput}dr=pr}else dr=!1;ur=dr&&(!document.documentMode||9<document.documentMode)}function fr(){ar&&(ar.detachEvent("onpropertychange",mr),ir=ar=null)}function mr(e){if("value"===e.propertyName&&sr(ir)){var t=[];or(t,ir,e,tn(e)),ln(lr,t)}}function gr(e,t,n){"focusin"===e?(fr(),ir=n,(ar=t).attachEvent("onpropertychange",mr)):"focusout"===e&&fr()}function vr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return sr(ir)}function br(e,t){if("click"===e)return sr(t)}function yr(e,t){if("input"===e||"change"===e)return sr(t)}var xr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function wr(e,t){if(xr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!xe.call(t,o)||!xr(e[o],t[o]))return!1}return!0}function kr(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Sr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jr(e,t){var n,r=Sr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Sr(r)}}function Er(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Er(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Cr(e){for(var t=kr((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=kr((e=t.contentWindow).document)}return t}function Tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var Lr=cn&&"documentMode"in document&&11>=document.documentMode,Pr=null,_r=null,Nr=null,zr=!1;function Ar(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;zr||null==Pr||Pr!==kr(r)||("selectionStart"in(r=Pr)&&Tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},Nr&&wr(Nr,r)||(Nr=r,0<(r=Sp(_r,"onSelect")).length&&(t=new jn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pr)))}function Or(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Rr={animationend:Or("Animation","AnimationEnd"),animationiteration:Or("Animation","AnimationIteration"),animationstart:Or("Animation","AnimationStart"),transitionrun:Or("Transition","TransitionRun"),transitionstart:Or("Transition","TransitionStart"),transitioncancel:Or("Transition","TransitionCancel"),transitionend:Or("Transition","TransitionEnd")},Ir={},Mr={};function Dr(e){if(Ir[e])return Ir[e];if(!Rr[e])return e;var t,n=Rr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Mr)return Ir[e]=n[t];return e}cn&&(Mr=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);var $r=Dr("animationend"),Fr=Dr("animationiteration"),Hr=Dr("animationstart"),Br=Dr("transitionrun"),Ur=Dr("transitionstart"),Vr=Dr("transitioncancel"),Wr=Dr("transitionend"),Gr=new Map,qr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jr(e,t){Gr.set(e,t),St(t,[e])}qr.push("scrollEnd");var Kr=0;function Yr(e,t){return null!=e.name&&"auto"!==e.name?e.name:null!==t.autoName?t.autoName:(e="_"+(e=Zu.identifierPrefix)+"t_"+(Kr++).toString(32)+"_",t.autoName=e)}function Qr(e){if(null==e||"string"===typeof e)return e;var t=null,n=ld;if(null!==n)for(var r=0;r<n.length;r++){var o=e[n[r]];if(null!=o){if("none"===o)return"none";t=null==t?o:t+" "+o}}return null==t?e.default:t}function Xr(e,t){return e=Qr(e),null==(t=Qr(t))?"auto"===e?null:e:"auto"===t?null:t}var Zr="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},eo=[],to=0,no=0;function ro(){for(var e=to,t=no=to=0;t<e;){var n=eo[t];eo[t++]=null;var r=eo[t];eo[t++]=null;var o=eo[t];eo[t++]=null;var a=eo[t];if(eo[t++]=null,null!==r&&null!==o){var i=r.pending;null===i?o.next=o:(o.next=i.next,i.next=o),r.pending=o}0!==a&&lo(n,o,a)}}function oo(e,t,n,r){eo[to++]=e,eo[to++]=t,eo[to++]=n,eo[to++]=r,no|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function ao(e,t,n,r){return oo(e,t,n,r),so(e)}function io(e,t){return oo(e,null,null,t),so(e)}function lo(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var o=!1,a=e.return;null!==a;)a.childLanes|=n,null!==(r=a.alternate)&&(r.childLanes|=n),22===a.tag&&(null===(e=a.stateNode)||1&e._visibility||(o=!0)),e=a,a=a.return;return 3===e.tag?(a=e.stateNode,o&&null!==t&&(o=31-Me(n),null===(r=(e=a.hiddenUpdates)[o])?e[o]=[t]:r.push(t),t.lane=536870912|n),a):null}function so(e){if(50<sd)throw sd=0,cd=null,Error(a(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var co={};function uo(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function po(e,t,n,r){return new uo(e,t,n,r)}function ho(e){return!(!(e=e.prototype)||!e.isReactComponent)}function fo(e,t){var n=e.alternate;return null===n?((n=po(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=1206910976&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function mo(e,t){e.flags&=1206910978;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function go(e,t,n,r,o,i){var l=0;if("function"===typeof(r=e))ho(r)&&(l=1);else if("string"===typeof r)l=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,le.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(r){case H:return(e=po(31,n,t,o)).elementType=H,e.lanes=i,e;case N:return vo(n.children,o,i,t);case z:l=8,o|=24;break;case A:return(e=po(12,n,t,2|o)).elementType=A,e.lanes=i,e;case M:return(e=po(13,n,t,o)).elementType=M,e.lanes=i,e;case D:return(e=po(19,n,t,o)).elementType=D,e.lanes=i,e;case B:case V:return(e=po(30,n,t,e=32|o)).elementType=V,e.lanes=i,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if("object"===typeof r&&null!==r)switch(r.$$typeof){case R:l=10;break e;case O:l=9;break e;case I:l=11;break e;case $:l=14;break e;case F:l=16,r=null;break e}l=29,n=Error(a(130,null===e?"null":typeof e,"")),r=null}return(t=po(l,n,t,o)).elementType=e,t.type=r,t.lanes=i,t}function vo(e,t,n,r){return(e=po(7,e,r,t)).lanes=n,e}function bo(e,t,n){return(e=po(6,e,null,t)).lanes=n,e}function yo(e){var t=po(18,null,null,0);return t.stateNode=e,t}function xo(e,t,n){return(t=po(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wo=new WeakMap;function ko(e,t){if("object"===typeof e&&null!==e){var n=wo.get(e);return void 0!==n?n:(t={value:e,source:t,stack:ye(t)},wo.set(e,t),t)}return{value:e,source:t,stack:ye(t)}}var So=[],jo=0,Eo=null,Co=0,To=[],Lo=0,Po=null,_o=1,No="";function zo(e,t){So[jo++]=Co,So[jo++]=Eo,Eo=e,Co=t}function Ao(e,t,n){To[Lo++]=_o,To[Lo++]=No,To[Lo++]=Po,Po=e;var r=_o;e=No;var o=32-Me(r)-1;r&=~(1<<o),n+=1;var a=32-Me(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,_o=1<<32-Me(t)+o|n<<o|r,No=a+e}else _o=1<<a|n<<o|r,No=e}function Oo(e){null!==e.return&&(zo(e,1),Ao(e,1,0))}function Ro(e){for(;e===Eo;)Eo=So[--jo],So[jo]=null,Co=So[--jo],So[jo]=null;for(;e===Po;)Po=To[--Lo],To[Lo]=null,No=To[--Lo],To[Lo]=null,_o=To[--Lo],To[Lo]=null}function Io(e,t){To[Lo++]=_o,To[Lo++]=No,To[Lo++]=Po,_o=t.id,No=t.overflow,Po=e}var Mo=null,Do=null,$o=!1,Fo=null,Ho=!1,Bo=Error(a(519));function Uo(e){throw Ko(ko(Error(a(418,1<arguments.length&&void 0!==arguments[1]&&arguments[1]?"text":"HTML","")),e)),Bo}function Vo(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[at]=e,t[it]=r,n){case"dialog":gp("cancel",t),gp("close",t);break;case"iframe":case"object":case"embed":gp("load",t);break;case"video":case"audio":for(n=0;n<hp.length;n++)gp(hp[n],t);break;case"source":gp("error",t);break;case"img":case"image":case"link":gp("error",t),gp("load",t);break;case"details":gp("toggle",t);break;case"input":gp("invalid",t),Ft(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":gp("invalid",t);break;case"textarea":gp("invalid",t),Vt(t,r.value,r.defaultValue,r.children)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Pp(t.textContent,n)?(null!=r.popover&&(gp("beforetoggle",t),gp("toggle",t)),null!=r.onScroll&&gp("scroll",t),null!=r.onScrollEnd&&gp("scrollend",t),null!=r.onClick&&(t.onclick=Zt),t=!0):t=!1,t||Uo(e,!0)}function Wo(e){for(Mo=e.return;Mo;)switch(Mo.tag){case 5:case 31:case 13:return void(Ho=!1);case 27:case 3:return void(Ho=!0);default:Mo=Mo.return}}function Go(e){if(e!==Mo)return!1;if(!$o)return Wo(e),$o=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||Hp(e.type,e.memoizedProps)),t=!t),t&&Do&&Uo(e),Wo(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));Do=zh(e)}else if(31===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));Do=zh(e)}else 27===n?(n=Do,Kp(e.type)?(e=Nh,Nh=null,Do=e):Do=n):Do=Mo?_h(e.stateNode.nextSibling):null;return!0}function qo(){Do=Mo=null,$o=!1}function Jo(){var e=Fo;return null!==e&&(null===Wu?Wu=e:Wu.push.apply(Wu,e),Fo=null),e}function Ko(e){null===Fo?Fo=[e]:Fo.push(e)}var Yo=ne(null),Qo=null,Xo=null;function Zo(e,t,n){oe(Yo,t._currentValue),t._currentValue=n}function ea(e){e._currentValue=Yo.current,re(Yo)}function ta(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function na(e,t,n,r){var o=e.child;for(null!==o&&(o.return=e);null!==o;){var i=o.dependencies;if(null!==i){var l=o.child;i=i.firstContext;e:for(;null!==i;){var s=i;i=o;for(var c=0;c<t.length;c++)if(s.context===t[c]){i.lanes|=n,null!==(s=i.alternate)&&(s.lanes|=n),ta(i.return,n,e),r||(l=null);break e}i=s.next}}else if(18===o.tag){if(null===(l=o.return))throw Error(a(341));l.lanes|=n,null!==(i=l.alternate)&&(i.lanes|=n),ta(l,n,e),l=null}else 13===o.tag&&null!==o.memoizedState&&null===o.memoizedState.dehydrated?(o.lanes|=n,null!==(l=o.alternate)&&(l.lanes|=n),ta(o.return,n,e),l=null!==(l=o.child)?l.sibling:null):l=o.child;if(null!==l)l.return=o;else for(l=o;null!==l;){if(l===e){l=null;break}if(null!==(o=l.sibling)){o.return=l.return,l=o;break}l=l.return}o=l}}function ra(e,t,n,r){e=null;for(var o=t,i=!1;null!==o;){if(!i)if(0!==(524288&o.flags))i=!0;else if(0!==(262144&o.flags))break;if(10===o.tag){var l=o.alternate;if(null===l)throw Error(a(387));if(null!==(l=l.memoizedProps)){var s=o.type;xr(o.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(o===ue.current){if(null===(l=o.alternate))throw Error(a(387));l.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(null!==e?e.push(ff):e=[ff])}o=o.return}return null!==e&&na(t,e,n,r),t.flags|=262144,null!==e}function oa(e){for(e=e.firstContext;null!==e;){if(!xr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function aa(e){Qo=e,Xo=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function ia(e){return sa(Qo,e)}function la(e,t){return null===Qo&&aa(e),sa(e,t)}function sa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===Xo){if(null===e)throw Error(a(308));Xo=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xo=Xo.next=t;return n}var ca="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ua=n.unstable_scheduleCallback,da=n.unstable_NormalPriority,pa={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ha(){return{controller:new ca,data:new Map,refCount:0}}function fa(e){e.refCount--,0===e.refCount&&ua(da,function(){e.controller.abort()})}function ma(e,t){if(0!==(4194048&e.pendingLanes)){var n=e.transitionTypes;for(null===n&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];-1===n.indexOf(r)&&n.push(r)}}}var ga=null;var va=null,ba=0,ya=0,xa=null;function wa(){if(0===--ba&&(ga=null,null!==va)){null!==xa&&(xa.status="fulfilled");var e=va;va=null,ya=0,xa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var ka=Q.S;Q.S=function(e,t){if(Ju=Ee(),"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===va){var n=va=[];ba=0,ya=cp(),xa={status:"pending",value:void 0,then:function(e){n.push(e)}}}ba++,t.then(wa,wa)}(0,t),null!==ga)for(var n=Yd;null!==n;)ma(n,ga),n=n.next;if(null!==(n=e.types)){for(var r=Yd;null!==r;)ma(r,n),r=r.next;if(0!==ya){null===(r=ga)&&(r=ga=[]);for(var o=0;o<n.length;o++){var a=n[o];-1===r.indexOf(a)&&r.push(a)}}}null!==ka&&ka(e,t)};var Sa=ne(null);function ja(){var e=Sa.current;return null!==e?e:Pu.pooledCache}function Ea(e,t){oe(Sa,null===t?Sa.current:t.pool)}function Ca(){var e=ja();return null===e?null:{parent:pa._currentValue,pool:e}}var Ta=Error(a(460)),La=Error(a(474)),Pa=Error(a(542)),_a={then:function(){}};function Na(e){return"fulfilled"===(e=e.status)||"rejected"===e}function za(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Zt,Zt),t=n),t.status){case"fulfilled":return t.value;case"rejected":if(Ia(e=t.reason),void 0===e&&!("reason"in t))throw Error(a(600));throw e;default:if("string"===typeof t.status)t.then(Zt,Zt);else{if(null!==(e=Pu)&&100<e.shellSuspendCounter)throw Error(a(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw Ia(e=t.reason),e}throw Oa=t,Ta}}function Aa(e){try{return(0,e._init)(e._payload)}catch(t){if(null!==t&&"object"===typeof t&&"function"===typeof t.then)throw Oa=t,Ta;throw t}}var Oa=null;function Ra(){if(null===Oa)throw Error(a(459));var e=Oa;return Oa=null,e}function Ia(e){if(e===Ta||e===Pa)throw Error(a(483))}var Ma=null,Da=0;function $a(e){var t=Da;return Da+=1,null===Ma&&(Ma=[]),za(Ma,e,t)}function Fa(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Ha(e,t){if(t.$$typeof===L)throw Error(a(525));throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ba(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null===e.key?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function o(e,t){return(e=fo(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=134217730,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=134217730),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=bo(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===N?(Fa(e=d(e,t,n.props.children,r,n.key),n),e):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===F&&Aa(a)===t.type)?(Fa(t=o(t,n.props),n),t.return=e,t):(Fa(t=go(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=xo(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=vo(n,e.mode,r,a)).return=e,t):((t=o(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=bo(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case P:return Fa(n=go(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case _:return(t=xo(t,e.mode,n)).return=e,t;case F:return p(e,t=Aa(t),n)}if(Y(t)||q(t))return(t=vo(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return p(e,$a(t),n);if(t.$$typeof===R)return p(e,la(e,t),n);Ha(e,t)}return null}function h(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==o?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case P:return n.key===o?c(e,t,n,r):null;case _:return n.key===o?u(e,t,n,r):null;case F:return h(e,t,n=Aa(n),r)}if(Y(n)||q(n))return null!==o?null:d(e,t,n,r,null);if("function"===typeof n.then)return h(e,t,$a(n),r);if(n.$$typeof===R)return h(e,t,la(e,n),r);Ha(e,n)}return null}function f(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return s(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case P:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case _:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case F:return f(e,t,n,r=Aa(r),o)}if(Y(r)||q(r))return d(t,e=e.get(n)||null,r,o,null);if("function"===typeof r.then)return f(e,t,n,$a(r),o);if(r.$$typeof===R)return f(e,t,n,la(t,r),o);Ha(t,r)}return null}function m(s,c,u,d){if("object"===typeof u&&null!==u&&u.type===N&&null===u.key&&void 0===u.props.ref&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case P:e:{for(var g=u.key;null!==c;){if(c.key===g){if((g=u.type)===N){if(7===c.tag){n(s,c.sibling),Fa(d=o(c,u.props.children),u),d.return=s,s=d;break e}}else if(c.elementType===g||"object"===typeof g&&null!==g&&g.$$typeof===F&&Aa(g)===c.type){n(s,c.sibling),Fa(d=o(c,u.props),u),d.return=s,s=d;break e}n(s,c);break}t(s,c),c=c.sibling}u.type===N?(Fa(d=vo(u.props.children,s.mode,d,u.key),u),d.return=s,s=d):(Fa(d=go(u.type,u.key,u.props,null,s.mode,d),u),d.return=s,s=d)}return l(s);case _:e:{for(g=u.key;null!==c;){if(c.key===g){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(s,c.sibling),(d=o(c,u.children||[])).return=s,s=d;break e}n(s,c);break}t(s,c),c=c.sibling}(d=xo(u,s.mode,d)).return=s,s=d}return l(s);case F:return m(s,c,u=Aa(u),d)}if(Y(u))return function(o,a,l,s){for(var c=null,u=null,d=a,m=a=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=h(o,d,l[m],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(o,d),a=i(v,a,m),null===u?c=v:u.sibling=v,u=v,d=g}if(m===l.length)return n(o,d),$o&&zo(o,m),c;if(null===d){for(;m<l.length;m++)null!==(d=p(o,l[m],s))&&(a=i(d,a,m),null===u?c=d:u.sibling=d,u=d);return $o&&zo(o,m),c}for(d=r(d);m<l.length;m++)null!==(g=f(d,o,m,l[m],s))&&(e&&null!==(v=g.alternate)&&d.delete(null===v.key?m:v.key),a=i(g,a,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(o,e)}),$o&&zo(o,m),c}(s,c,u,d);if(q(u)){if("function"!==typeof(g=q(u)))throw Error(a(150));return function(o,l,s,c){if(null==s)throw Error(a(151));for(var u=null,d=null,m=l,g=l=0,v=null,b=s.next();null!==m&&!b.done;g++,b=s.next()){m.index>g?(v=m,m=null):v=m.sibling;var y=h(o,m,b.value,c);if(null===y){null===m&&(m=v);break}e&&m&&null===y.alternate&&t(o,m),l=i(y,l,g),null===d?u=y:d.sibling=y,d=y,m=v}if(b.done)return n(o,m),$o&&zo(o,g),u;if(null===m){for(;!b.done;g++,b=s.next())null!==(b=p(o,b.value,c))&&(l=i(b,l,g),null===d?u=b:d.sibling=b,d=b);return $o&&zo(o,g),u}for(m=r(m);!b.done;g++,b=s.next())null!==(b=f(m,o,g,b.value,c))&&(e&&null!==(v=b.alternate)&&m.delete(null===v.key?g:v.key),l=i(b,l,g),null===d?u=b:d.sibling=b,d=b);return e&&m.forEach(function(e){return t(o,e)}),$o&&zo(o,g),u}(s,c,u=g.call(u),d)}if("function"===typeof u.then)return m(s,c,$a(u),d);if(u.$$typeof===R)return m(s,c,la(s,u),d);Ha(s,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(s,c.sibling),(d=o(c,u)).return=s,s=d):(n(s,c),(d=bo(u,s.mode,d)).return=s,s=d),l(s)):n(s,c)}return function(e,t,n,r){try{Da=0;var o=m(e,t,n,r);return Ma=null,o}catch(i){if(i===Ta||i===Pa)throw i;var a=po(29,i,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ua=Ba(!0),Va=Ba(!1),Wa=!1;function Ga(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Lu)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,t=so(e),lo(e,null,n),t}return oo(e,r,t,n),so(e)}function Ya(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Xe(e,n)}}function Qa(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===a?o=a=i:a=a.next=i,n=n.next}while(null!==n);null===a?o=a=t:a=a.next=t}else o=a=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xa=!1;function Za(){if(Xa){if(null!==xa)throw xa}}function ei(e,t,n,r){Xa=!1;var o=e.updateQueue;Wa=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(null!==l){o.shared.pending=null;var s=l,c=s.next;s.next=null,null===i?a=c:i.next=c,i=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==i&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==a){var d=o.baseState;for(i=0,u=c=s=null,l=a;;){var p=-536870913&l.lane,h=p!==l.lane;if(h?(Nu&p)===p:(r&p)===p){0!==p&&p===ya&&(Xa=!0),null!==u&&(u=u.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var f=e,m=l;p=t;var g=n;switch(m.tag){case 1:if("function"===typeof(f=m.payload)){d=f.call(g,d,p);break e}d=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null===(p="function"===typeof(f=m.payload)?f.call(g,d,p):f)||void 0===p)break e;d=T({},d,p);break e;case 2:Wa=!0}}null!==(p=l.callback)&&(e.flags|=64,h&&(e.flags|=8192),null===(h=o.callbacks)?o.callbacks=[p]:h.push(p))}else h={lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=h,s=d):u=u.next=h,i|=p;if(null===(l=l.next)){if(null===(l=o.shared.pending))break;l=(h=l).next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}null===u&&(s=d),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=u,null===a&&(o.shared.lanes=0),$u|=i,e.lanes=i,e.memoizedState=d}}function ti(e,t){if("function"!==typeof e)throw Error(a(191,e));e.call(t)}function ni(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)ti(n[e],t)}var ri=ne(null),oi=ne(0);function ai(e,t){oe(oi,e=Mu),oe(ri,t),Mu=e|t.baseLanes}function ii(){oe(oi,Mu),oe(ri,ri.current)}function li(){Mu=oi.current,re(ri),re(oi)}var si=ne(null),ci=null;function ui(e){var t=e.alternate;oe(mi,1&mi.current),oe(si,e),null===ci&&(null===t||null!==ri.current||null!==t.memoizedState)&&(ci=e)}function di(e){oe(mi,mi.current),oe(si,e),null===ci&&(ci=e)}function pi(e){22===e.tag?(oe(mi,mi.current),oe(si,e),null===ci&&(ci=e)):hi()}function hi(){oe(mi,mi.current),oe(si,si.current)}function fi(e){re(si),ci===e&&(ci=null),re(mi)}var mi=ne(0);function gi(e,t){oe(si,si.current),oe(mi,t)}function vi(e){re(mi),re(si),ci===e&&(ci=null)}function bi(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||Lh(n)||Ph(n)))return t}else if(19===t.tag&&"independent"!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yi=0,xi=null,wi=null,ki=null,Si=!1,ji=!1,Ei=!1,Ci=0,Ti=0,Li=null,Pi=0;function _i(){throw Error(a(321))}function Ni(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xr(e[n],t[n]))return!1;return!0}function zi(e,t,n,r,o,a){return yi=a,xi=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Q.H=null===e||null===e.memoizedState?ql:Jl,Ei=!1,a=n(r,o),Ei=!1,ji&&(a=Oi(t,n,r,o)),Ai(e),a}function Ai(e){Q.H=Gl;var t=null!==wi&&null!==wi.next;if(yi=0,ki=wi=xi=null,Si=!1,Ti=0,Li=null,t)throw Error(a(300));null===e||us||null!==(e=e.dependencies)&&oa(e)&&(us=!0)}function Oi(e,t,n,r){xi=e;var o=0;do{if(ji&&(Li=null),Ti=0,ji=!1,25<=o)throw Error(a(301));if(o+=1,ki=wi=null,null!=e.updateQueue){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,null!=i.memoCache&&(i.memoCache.index=0)}Q.H=Kl,i=t(n,r)}while(ji);return i}function Ri(){var e=Q.H,t=e.useState()[0];return t="function"===typeof t.then?Hi(t):t,e=e.useState()[0],(null!==wi?wi.memoizedState:null)!==e&&(xi.flags|=1024),t}function Ii(){var e=0!==Ci;return Ci=0,e}function Mi(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Di(e){if(Si){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Si=!1}yi=0,ki=wi=xi=null,ji=!1,Ti=Ci=0,Li=null}function $i(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ki?xi.memoizedState=ki=e:ki=ki.next=e,ki}function Fi(){if(null===wi){var e=xi.alternate;e=null!==e?e.memoizedState:null}else e=wi.next;var t=null===ki?xi.memoizedState:ki.next;if(null!==t)ki=t,wi=e;else{if(null===e){if(null===xi.alternate)throw Error(a(467));throw Error(a(310))}e={memoizedState:(wi=e).memoizedState,baseState:wi.baseState,baseQueue:wi.baseQueue,queue:wi.queue,next:null},null===ki?xi.memoizedState=ki=e:ki=ki.next=e}return ki}function Hi(e){var t=Ti;return Ti+=1,null===Li&&(Li=[]),e=za(Li,e,t),t=xi,null===(null===ki?t.memoizedState:ki.next)&&(t=t.alternate,Q.H=null===t||null===t.memoizedState?ql:Jl),e}function Bi(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return Hi(e);if(e.$$typeof===W)return;if(e.$$typeof===R)return ia(e)}throw Error(a(438,String(e)))}function Ui(e){var t=null,n=xi.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=xi.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=U;return t.index++,n}function Vi(e,t){return"function"===typeof t?t(e):t}function Wi(e){return Gi(Fi(),wi,e)}function Gi(e,t,n){var r=e.queue;if(null===r)throw Error(a(311));r.lastRenderedReducer=n;var o=e.baseQueue,i=r.pending;if(null!==i){if(null!==o){var l=o.next;o.next=i.next,i.next=l}t.baseQueue=o=i,r.pending=null}if(i=e.baseState,null===o)e.memoizedState=i;else{var s=l=null,c=null,u=t=o.next,d=!1;do{var p=-536870913&u.lane;if(p!==u.lane?(Nu&p)===p:(yi&p)===p){var h=u.revertLane;if(0===h)null!==c&&(c=c.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===ya&&(d=!0);else{if((yi&h)===h){u=u.next,h===ya&&(d=!0);continue}p={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=p,l=i):c=c.next=p,xi.lanes|=h,$u|=h}p=u.action,Ei&&n(i,p),i=u.hasEagerState?u.eagerState:n(i,p)}else h={lane:p,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=h,l=i):c=c.next=h,xi.lanes|=p,$u|=p;u=u.next}while(null!==u&&u!==t);if(null===c?l=i:c.next=s,!xr(i,e.memoizedState)&&(us=!0,d&&null!==(n=xa)))throw n;e.memoizedState=i,e.baseState=l,e.baseQueue=c,r.lastRenderedState=i}return null===o&&(r.lanes=0),[e.memoizedState,r.dispatch]}function qi(e){var t=Fi(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(null!==o){n.pending=null;var l=o=o.next;do{i=e(i,l.action),l=l.next}while(l!==o);xr(i,t.memoizedState)||(us=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ji(e,t,n){var r=xi,o=Fi(),i=$o;if(i){if(void 0===n)throw Error(a(407));n=n()}else n=t();var l=!xr((wi||o).memoizedState,n);if(l&&(o.memoizedState=n,us=!0),o=o.queue,yl(Qi.bind(null,r,o,e),[e]),fl((e=o.getSnapshot!==t||l||null!==ki&&0!==(1&ki.memoizedState.tag))?9:8,{destroy:void 0},Yi.bind(null,r,o,n,t),null),e){if(r.flags|=2048,null===Pu)throw Error(a(349));i||0!==(127&yi)||Ki(r,t,n)}return n}function Ki(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=xi.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Yi(e,t,n,r){t.value=n,t.getSnapshot=r,Xi(t)&&Zi(e)}function Qi(e,t,n){return n(function(){Xi(t)&&Zi(e)})}function Xi(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xr(e,n)}catch(r){return!0}}function Zi(e){var t=io(e,2);null!==t&&hd(t,e,2)}function el(e){var t=$i();if("function"===typeof e){var n=e;if(e=n(),Ei){Ie(!0);try{n()}finally{Ie(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},t}function tl(e,t,n,r){return e.baseState=n,Gi(e,wi,"function"===typeof r?r:Vi)}function nl(e,t,n,r,o){if(Ul(e))throw Error(a(485));if(null!==(e=t.action)){var i={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){i.listeners.push(e)}};null!==Q.T?n(!0):i.isTransition=!1,r(i),null===(n=t.pending)?(i.next=t.pending=i,rl(t,i)):(i.next=n.next,t.pending=n.next=i)}}function rl(e,t){var n=t.action,r=t.payload,o=e.state;if(t.isTransition){var a=Q.T,i={};i.types=null!==a?a.types:null,Q.T=i;try{var l=n(o,r),s=Q.S;null!==s&&s(i,l),ol(e,t,l)}catch(c){il(e,t,c)}finally{null!==a&&null!==i.types&&(a.types=i.types),Q.T=a}}else try{ol(e,t,a=n(o,r))}catch(u){il(e,t,u)}}function ol(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){al(e,t,n)},function(n){return il(e,t,n)}):al(e,t,n)}function al(e,t,n){t.status="fulfilled",t.value=n,ll(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,rl(e,n)))}function il(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,ll(t),t=t.next}while(t!==r)}e.action=null}function ll(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function sl(e,t){return t}function cl(e,t){if($o){var n=Pu.formState;if(null!==n){e:{var r=xi;if($o){if(Do){t:{for(var o=Do,a=Ho;8!==o.nodeType;){if(!a){o=null;break t}if(null===(o=_h(o.nextSibling))){o=null;break t}}o="F!"===(a=o.data)||"F"===a?o:null}if(o){Do=_h(o.nextSibling),r="F!"===o.data;break e}}Uo(r)}r=!1}r&&(t=n[0])}}return(n=$i()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sl,lastRenderedState:t},n.queue=r,n=Fl.bind(null,xi,r),r.dispatch=n,r=el(!1),a=Bl.bind(null,xi,!1,r.queue),o={state:t,dispatch:null,action:e,pending:null},(r=$i()).queue=o,n=nl.bind(null,xi,o,a,n),o.dispatch=n,r.memoizedState=e,[t,n,!1]}function ul(e){return dl(Fi(),wi,e)}function dl(e,t,n){if(t=Gi(e,t,sl)[0],e=Wi(Vi)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=Hi(t)}catch(i){if(i===Ta)throw Pa;throw i}else r=t;var o=(t=Fi()).queue,a=o.dispatch;return n!==t.memoizedState&&(xi.flags|=2048,fl(9,{destroy:void 0},pl.bind(null,o,n),null)),[r,a,e]}function pl(e,t){e.action=t}function hl(e){var t=Fi(),n=wi;if(null!==n)return dl(t,n,e);Fi(),t=t.memoizedState;var r=(n=Fi()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function fl(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=xi.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ml(){return Fi().memoizedState}function gl(e,t,n,r){var o=$i();xi.flags|=e,o.memoizedState=fl(1|t,{destroy:void 0},n,void 0===r?null:r)}function vl(e,t,n,r){var o=Fi();r=void 0===r?null:r;var a=o.memoizedState.inst;null!==wi&&null!==r&&Ni(r,wi.memoizedState.deps)?o.memoizedState=fl(t,a,n,r):(xi.flags|=e,o.memoizedState=fl(1|t,a,n,r))}function bl(e,t){gl(8390656,8,e,t)}function yl(e,t){vl(2048,8,e,t)}function xl(e){var t=Fi().memoizedState;return function(e){xi.flags|=4;var t=xi.updateQueue;if(null===t)t={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=t,t.events=[e];else{var n=t.events;null===n?t.events=[e]:n.push(e)}}({ref:t,nextImpl:e}),function(){if(0!==(2&Lu))throw Error(a(440));return t.impl.apply(void 0,arguments)}}function wl(e,t){return vl(4,2,e,t)}function kl(e,t){return vl(4,4,e,t)}function Sl(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function jl(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,vl(4,4,Sl.bind(null,t,e),n)}function El(){}function Cl(e,t){var n=Fi();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&Ni(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Tl(e,t){var n=Fi();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&Ni(t,r[1]))return r[0];if(r=e(),Ei){Ie(!0);try{e()}finally{Ie(!1)}}return n.memoizedState=[r,t],r}function Ll(e,t,n){return void 0===n||0!==(1073741824&yi)&&0===(261930&Nu)?e.memoizedState=t:(e.memoizedState=n,e=dd(),xi.lanes|=e,$u|=e,n)}function Pl(e,t,n,r){return xr(n,t)?n:null!==ri.current?(e=Ll(e,n,r),xr(e,t)||(us=!0),e):0===(106&yi)||0!==(1073741824&yi)&&0===(261930&Nu)?(us=!0,e.memoizedState=n):(e=dd(),xi.lanes|=e,$u|=e,t)}function _l(e,t,n,r,o){var a=X.p;X.p=0!==a&&8>a?a:8;var i=Q.T,l={};l.types=null!==i?i.types:null,Q.T=l,Bl(e,!1,t,n);try{var s=o(),c=Q.S;if(null!==c&&c(l,s),null!==s&&"object"===typeof s&&"function"===typeof s.then)Hl(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}(s,r),ud());else Hl(e,t,r,ud())}catch(u){Hl(e,t,{then:function(){},status:"rejected",reason:u},ud())}finally{X.p=a,null!==i&&null!==l.types&&(i.types=l.types),Q.T=i}}function Nl(){}function zl(e,t,n,r){if(5!==e.tag)throw Error(a(476));var o=Al(e).queue;_l(e,o,t,Z,null===n?Nl:function(){return Ol(e),n(r)})}function Al(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:Z},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function Ol(e){var t=Al(e);null===t.next&&(t=e.alternate.memoizedState),Hl(e,t.next.queue,{},ud())}function Rl(){return ia(ff)}function Il(){return Fi().memoizedState}function Ml(){return Fi().memoizedState}function Dl(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=ud(),r=Ka(t,e=Ja(n),n);return null!==r&&(hd(r,t,n),Ya(r,t,n)),t={cache:ha()},void(e.payload=t)}t=t.return}}function $l(e,t,n){var r=ud();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ul(e)?Vl(t,n):null!==(n=ao(e,t,n,r))&&(hd(n,e,r),Wl(n,t,r))}function Fl(e,t,n){Hl(e,t,n,ud())}function Hl(e,t,n,r){var o={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ul(e))Vl(t,o);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=a(i,n);if(o.hasEagerState=!0,o.eagerState=l,xr(l,i))return oo(e,t,o,0),null===Pu&&ro(),!1}catch(s){}if(null!==(n=ao(e,t,o,r)))return hd(n,e,r),Wl(n,t,r),!0}return!1}function Bl(e,t,n,r){if(r={lane:2,revertLane:cp(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ul(e)){if(t)throw Error(a(479))}else null!==(t=ao(e,n,r,2))&&hd(t,e,2)}function Ul(e){var t=e.alternate;return e===xi||null!==t&&t===xi}function Vl(e,t){ji=Si=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wl(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Xe(e,n)}}var Gl={readContext:ia,use:Bi,useCallback:_i,useContext:_i,useEffect:_i,useImperativeHandle:_i,useLayoutEffect:_i,useInsertionEffect:_i,useMemo:_i,useReducer:_i,useRef:_i,useState:_i,useDebugValue:_i,useDeferredValue:_i,useTransition:_i,useSyncExternalStore:_i,useId:_i,useHostTransitionStatus:_i,useFormState:_i,useActionState:_i,useOptimistic:_i,useMemoCache:_i,useCacheRefresh:_i,useEffectEvent:_i},ql={readContext:ia,use:Bi,useCallback:function(e,t){return $i().memoizedState=[e,void 0===t?null:t],e},useContext:ia,useEffect:bl,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,gl(4194308,4,Sl.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gl(4194308,4,e,t)},useInsertionEffect:function(e,t){gl(4,2,e,t)},useMemo:function(e,t){var n=$i();t=void 0===t?null:t;var r=e();if(Ei){Ie(!0);try{e()}finally{Ie(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=$i();if(void 0!==n){var o=n(t);if(Ei){Ie(!0);try{n(t)}finally{Ie(!1)}}}else o=t;return r.memoizedState=r.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},r.queue=e,e=e.dispatch=$l.bind(null,xi,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},$i().memoizedState=e},useState:function(e){var t=(e=el(e)).queue,n=Fl.bind(null,xi,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:El,useDeferredValue:function(e,t){return Ll($i(),e,t)},useTransition:function(){var e=el(!1);return e=_l.bind(null,xi,e.queue,!0,!1),$i().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=xi,o=$i();if($o){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===Pu)throw Error(a(349));0!==(127&Nu)||Ki(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,bl(Qi.bind(null,r,i,e),[e]),r.flags|=2048,fl(9,{destroy:void 0},Yi.bind(null,r,i,n,t),null),n},useId:function(){var e=$i(),t=Pu.identifierPrefix;if($o){var n=No;t="_"+t+"R_"+(n=(_o&~(1<<32-Me(_o)-1)).toString(32)+n),0<(n=Ci++)&&(t+="H"+n.toString(32)),t+="_"}else t="_"+t+"r_"+(n=Pi++).toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Rl,useFormState:cl,useActionState:cl,useOptimistic:function(e){var t=$i();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Bl.bind(null,xi,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ui,useCacheRefresh:function(){return $i().memoizedState=Dl.bind(null,xi)},useEffectEvent:function(e){var t=$i(),n={impl:e};return t.memoizedState=n,function(){if(0!==(2&Lu))throw Error(a(440));return n.impl.apply(void 0,arguments)}}},Jl={readContext:ia,use:Bi,useCallback:Cl,useContext:ia,useEffect:yl,useImperativeHandle:jl,useInsertionEffect:wl,useLayoutEffect:kl,useMemo:Tl,useReducer:Wi,useRef:ml,useState:function(){return Wi(Vi)},useDebugValue:El,useDeferredValue:function(e,t){return Pl(Fi(),wi.memoizedState,e,t)},useTransition:function(){var e=Wi(Vi)[0],t=Fi().memoizedState;return["boolean"===typeof e?e:Hi(e),t]},useSyncExternalStore:Ji,useId:Il,useHostTransitionStatus:Rl,useFormState:ul,useActionState:ul,useOptimistic:function(e,t){return tl(Fi(),0,e,t)},useMemoCache:Ui,useCacheRefresh:Ml,useEffectEvent:xl},Kl={readContext:ia,use:Bi,useCallback:Cl,useContext:ia,useEffect:yl,useImperativeHandle:jl,useInsertionEffect:wl,useLayoutEffect:kl,useMemo:Tl,useReducer:qi,useRef:ml,useState:function(){return qi(Vi)},useDebugValue:El,useDeferredValue:function(e,t){var n=Fi();return null===wi?Ll(n,e,t):Pl(n,wi.memoizedState,e,t)},useTransition:function(){var e=qi(Vi)[0],t=Fi().memoizedState;return["boolean"===typeof e?e:Hi(e),t]},useSyncExternalStore:Ji,useId:Il,useHostTransitionStatus:Rl,useFormState:hl,useActionState:hl,useOptimistic:function(e,t){var n=Fi();return null!==wi?tl(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ui,useCacheRefresh:Ml,useEffectEvent:xl};function Yl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:T({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var Ql={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ud(),o=Ja(r);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Ka(e,o,r))&&(hd(t,e,r),Ya(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ud(),o=Ja(r);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Ka(e,o,r))&&(hd(t,e,r),Ya(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ud(),r=Ja(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=Ka(e,r,n))&&(hd(t,e,n),Ya(t,e,n))}};function Xl(e,t,n,r,o,a,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,i):!t.prototype||!t.prototype.isPureReactComponent||(!wr(n,r)||!wr(o,a))}function Zl(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ql.enqueueReplaceState(t,t.state,null)}function es(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var o in n===t&&(n=T({},n)),e)void 0===n[o]&&(n[o]=e[o]);return n}function ts(e){Zr(e)}function ns(e){console.error(e)}function rs(e){Zr(e)}function os(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function as(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function is(e,t,n){return(n=Ja(n)).tag=3,n.payload={element:null},n.callback=function(){os(e,t)},n}function ls(e){return(e=Ja(e)).tag=3,e}function ss(e,t,n,r){var o=n.type.getDerivedStateFromError;if("function"===typeof o){var a=r.value;e.payload=function(){return o(a)},e.callback=function(){as(t,n,r)}}var i=n.stateNode;null!==i&&"function"===typeof i.componentDidCatch&&(e.callback=function(){as(t,n,r),"function"!==typeof o&&(null===Qu?Qu=new Set([this]):Qu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var cs=Error(a(461)),us=!1;function ds(e,t,n,r){t.child=null===e?Va(t,null,n,r):Ua(t,e.child,n,r)}function ps(e,t,n,r,o){n=n.render;var a=t.ref;if("ref"in r){var i={};for(var l in r)"ref"!==l&&(i[l]=r[l])}else i=r;return aa(t),r=zi(e,t,n,i,a,o),l=Ii(),null===e||us?($o&&l&&Oo(t),t.flags|=1,ds(e,t,r,o),t.child):(Mi(e,t,o),Ds(e,t,o))}function hs(e,t,n,r,o){if(null===e){var a=n.type;return"function"!==typeof a||ho(a)||void 0!==a.defaultProps||null!==n.compare?((e=go(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,fs(e,t,a,r,o))}if(a=e.child,!$s(e,o)){var i=a.memoizedProps;if((n=null!==(n=n.compare)?n:wr)(i,r)&&e.ref===t.ref)return Ds(e,t,o)}return t.flags|=1,(e=fo(a,r)).ref=t.ref,e.return=t,t.child=e}function fs(e,t,n,r,o){if(null!==e){var a=e.memoizedProps;if(wr(a,r)&&e.ref===t.ref){if(us=!1,t.pendingProps=r=a,!$s(e,o))return t.lanes=e.lanes,Ds(e,t,o);0!==(131072&e.flags)&&(us=!0)}}return ws(e,t,n,r,o)}function ms(e,t,n,r){var o=r.children,a=null!==e?e.memoizedState:null;if(null===e&&null===t.stateNode&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),"hidden"===r.mode){if(0!==(128&t.flags)){if(a=null!==a?a.baseLanes|n:n,null!==e){for(r=t.child=e.child,o=0;null!==r;)o=o|r.lanes|r.childLanes,r=r.sibling;r=o&~a}else r=0,t.child=null;return vs(e,t,a,n,r)}if(0===(536870912&n))return r=t.lanes=536870912,vs(e,t,null!==a?a.baseLanes|n:n,n,r);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Ea(0,null!==a?a.cachePool:null),null!==a?ai(t,a):ii(),pi(t)}else null!==a?(Ea(0,a.cachePool),ai(t,a),hi(),t.memoizedState=null):(null!==e&&Ea(0,null),ii(),hi());return ds(e,t,o,n),t.child}function gs(e,t){return null!==e&&22===e.tag||null!==t.stateNode||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function vs(e,t,n,r,o){var a=ja();return a=null===a?null:{parent:pa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},null!==e&&Ea(0,null),ii(),pi(t),null!==e&&ra(e,t,r,!0),t.childLanes=o,null}function bs(e,t){return(t=_s({mode:t.mode,children:t.children},e.mode)).ref=e.ref,e.child=t,t.return=e,t}function ys(e,t,n){return Ua(t,e.child,null,n),(e=bs(t,t.pendingProps)).flags|=2,fi(t),t.memoizedState=null,e}function xs(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(a(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function ws(e,t,n,r,o){return aa(t),n=zi(e,t,n,r,void 0,o),r=Ii(),null===e||us?($o&&r&&Oo(t),t.flags|=1,ds(e,t,n,o),t.child):(Mi(e,t,o),Ds(e,t,o))}function ks(e,t,n,r,o,a){return aa(t),t.updateQueue=null,n=Oi(t,r,n,o),Ai(e),r=Ii(),null===e||us?($o&&r&&Oo(t),t.flags|=1,ds(e,t,n,a),t.child):(Mi(e,t,a),Ds(e,t,a))}function Ss(e,t,n,r,o){if(aa(t),null===t.stateNode){var a=co,i=n.contextType;"object"===typeof i&&null!==i&&(a=ia(i)),a=new n(r,a),t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,a.updater=Ql,t.stateNode=a,a._reactInternals=t,(a=t.stateNode).props=r,a.state=t.memoizedState,a.refs={},Ga(t),i=n.contextType,a.context="object"===typeof i&&null!==i?ia(i):co,a.state=t.memoizedState,"function"===typeof(i=n.getDerivedStateFromProps)&&(Yl(t,n,i,r),a.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(i=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),i!==a.state&&Ql.enqueueReplaceState(a,a.state,null),ei(t,r,a,o),Za(),a.state=t.memoizedState),"function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){a=t.stateNode;var l=t.memoizedProps,s=es(n,l);a.props=s;var c=a.context,u=n.contextType;i=co,"object"===typeof u&&null!==u&&(i=ia(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof a.getSnapshotBeforeUpdate,l=t.pendingProps!==l,u||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(l||c!==i)&&Zl(t,a,r,i),Wa=!1;var p=t.memoizedState;a.state=p,ei(t,r,a,o),Za(),c=t.memoizedState,l||p!==c||Wa?("function"===typeof d&&(Yl(t,n,d,r),c=t.memoizedState),(s=Wa||Xl(t,n,s,r,p,c,i))?(u||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=i,r=s):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qa(e,t),u=es(n,i=t.memoizedProps),a.props=u,d=t.pendingProps,p=a.context,c=n.contextType,s=co,"object"===typeof c&&null!==c&&(s=ia(c)),(c="function"===typeof(l=n.getDerivedStateFromProps)||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(i!==d||p!==s)&&Zl(t,a,r,s),Wa=!1,p=t.memoizedState,a.state=p,ei(t,r,a,o),Za();var h=t.memoizedState;i!==d||p!==h||Wa||null!==e&&null!==e.dependencies&&oa(e.dependencies)?("function"===typeof l&&(Yl(t,n,l,r),h=t.memoizedState),(u=Wa||Xl(t,n,u,r,p,h,s)||null!==e&&null!==e.dependencies&&oa(e.dependencies))?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,s),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=s,r=u):("function"!==typeof a.componentDidUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,xs(e,t),r=0!==(128&t.flags),a||r?(a=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:a.render(),t.flags|=1,null!==e&&r?(t.child=Ua(t,e.child,null,o),t.child=Ua(t,null,n,o)):ds(e,t,n,o),t.memoizedState=a.state,e=t.child):e=Ds(e,t,o),e}function js(e,t,n,r){return qo(),t.flags|=256,ds(e,t,n,r),t.child}var Es={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cs(e){return{baseLanes:e,cachePool:Ca()}}function Ts(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=Bu),e}function Ls(e,t,n){var r,o=t.pendingProps,i=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&mi.current)),r&&(i=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if($o){if(i?ui(t):hi(),(e=Do)?null!==(e=null!==(e=Th(e,Ho))&&"&"!==e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==Po?{id:_o,overflow:No}:null,retryLane:536870912,hydrationErrors:null},(n=yo(e)).return=t,t.child=n,Mo=t,Do=null):e=null,null===e)throw Uo(t);return Ph(e)?t.lanes=32:t.lanes=536870912,null}return l=o.children,o=o.fallback,i?(hi(),l=_s({mode:"hidden",children:l},i=t.mode),o=vo(o,i,n,null),l.return=t,o.return=t,l.sibling=o,t.child=l,(o=t.child).memoizedState=Cs(n),o.childLanes=Ts(e,r,n),t.memoizedState=Es,gs(null,o)):(ui(t),Ps(t,l))}var s=e.memoizedState;if(null!==s){var c=s.dehydrated;if(null!==c)return function(e,t,n,r,o,i,l,s){if(n)return 256&t.flags?(ui(t),t.flags&=-257,Ns(e,t,s)):null!==t.memoizedState?(hi(),t.child=e.child,t.flags|=128,null):(hi(),i=o.fallback,l=t.mode,o=_s({mode:"visible",children:o.children},l),(i=vo(i,l,s,null)).flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,Ua(t,e.child,null,s),(o=t.child).memoizedState=Cs(s),o.childLanes=Ts(e,r,s),t.memoizedState=Es,gs(null,o));if(ui(t),Ph(i)){if(r=i.nextSibling&&i.nextSibling.dataset)var c=r.dgst;return""!==(r=c)&&((o=Error(a(419))).stack="",o.digest=r,Ko({value:o,source:null,stack:null})),Ns(e,t,s)}if(us||ra(e,t,s,!1),r=0!==(s&e.childLanes),us||r){if(null!==ri.current)return Ns(e,t,s);if(null!==(r=Pu)&&(0!==(o=Ze(r,s))&&o!==l.retryLane))throw l.retryLane=o,io(e,o),hd(r,e,o),cs;return Lh(i)||Ed(),Ns(e,t,s)}return Lh(i)?(t.flags|=192,t.child=e.child,null):(e=l.treeContext,Do=_h(i.nextSibling),Mo=t,$o=!0,Fo=null,Ho=!1,null!==e&&Io(t,e),t=Ps(t,o.children),t.flags|=134221824,t)}(e,t,l,r,o,c,s,n)}return i?(hi(),i=o.fallback,l=t.mode,c=(s=e.child).sibling,(o=fo(s,{mode:"hidden",children:o.children})).subtreeFlags=1206910976&s.subtreeFlags,null!==c?i=fo(c,i):(i=vo(i,l,n,null)).flags|=2,i.return=t,o.return=t,o.sibling=i,t.child=o,gs(null,o),o=t.child,null===(i=e.child.memoizedState)?i=Cs(n):(null!==(l=i.cachePool)?(s=pa._currentValue,l=l.parent!==s?{parent:s,pool:s}:l):l=Ca(),i={baseLanes:i.baseLanes|n,cachePool:l}),o.memoizedState=i,o.childLanes=Ts(e,r,n),t.memoizedState=Es,gs(e.child,o)):(ui(t),e=(n=e.child).sibling,(n=fo(n,{mode:"visible",children:o.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Ps(e,t){return(t=_s({mode:"visible",children:t},e.mode)).return=e,e.child=t}function _s(e,t){return(e=po(22,e,null,t)).lanes=0,e}function Ns(e,t,n){return Ua(t,e.child,null,n),(e=Ps(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function zs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),ta(e.return,t,n)}function As(e){for(var t=null;null!==e;){var n=e.alternate;null!==n&&null===bi(n)&&(t=e),e=e.sibling}return t}function Os(e,t,n,r,o,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o,treeForkCount:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o,i.treeForkCount=a)}function Rs(e){var t=e.child;for(e.child=null;null!==t;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Is(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;r=r.children;var i=mi.current;if(128&t.flags)return gi(0,i),null;var l=0!==(2&i);if(l?(i=1&i|2,t.flags|=128):i&=1,gi(0,i),"backwards"===o&&null!==e?(Rs(e),ds(e,t,r,n),Rs(e)):ds(e,t,r,n),r=$o?Co:0,!l&&null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&zs(e,n,t);else if(19===e.tag)zs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"backwards":null===(n=As(t.child))?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null,Rs(t)),Os(t,!0,o,null,a,r);break;case"unstable_legacy-backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===bi(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Os(t,!0,n,null,a,r);break;case"together":Os(t,!1,null,null,void 0,r);break;case"independent":t.memoizedState=null;break;default:null===(n=As(t.child))?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Os(t,!1,o,n,a,r)}return t.child}function Ms(e,t,n){var r=t.pendingProps;return Zo(0,t.type,r.value),ds(e,t,r.children,n),t.child}function Ds(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),$u|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(ra(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=fo(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=fo(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function $s(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!oa(e))}function Fs(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)us=!0;else{if(!$s(e,n)&&0===(128&t.flags))return us=!1,function(e,t,n){switch(t.tag){case 3:de(t,t.stateNode.containerInfo),Zo(0,pa,e.memoizedState.cache),qo();break;case 27:case 5:he(t);break;case 4:de(t,t.stateNode.containerInfo);break;case 10:Zo(0,t.type,t.memoizedProps.value);break;case 31:if(null!==t.memoizedState)return t.flags|=128,di(t),null;break;case 13:var r=t.memoizedState;if(null!==r){if(null!==r.dehydrated)return ui(t),t.flags|=128,null;r=ra(e,t,n,!1);var o=t.child.childLanes;return r||0!==(n&o)?Ls(e,t,n):(ui(t),null!==(e=Ds(e,t,n))?e.sibling:null)}ui(t);break;case 19:if(128&t.flags)return Is(e,t,n);if(o=0!==(128&e.flags),(r=0!==(n&t.childLanes))||(ra(e,t,n,!1),r=0!==(n&t.childLanes)),o){if(r)return Is(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),gi(0,mi.current),r)break;return null;case 22:return t.lanes=0,ms(e,t,n,t.pendingProps);case 24:Zo(0,pa,e.memoizedState.cache)}return Ds(e,t,n)}(e,t,n);us=0!==(131072&e.flags)}else us=!1,$o&&0!==(1048576&t.flags)&&Ao(t,Co,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=Aa(t.elementType),t.type=e,"function"!==typeof e){if(void 0!==e&&null!==e){var o=e.$$typeof;if(o===I){t.tag=11,t=ps(null,t,e,r,n);break e}if(o===$){t.tag=14,t=hs(null,t,e,r,n);break e}if(o===R){t.tag=10,t.type=e,t=Ms(null,t,n);break e}}throw t=K(e)||e,Error(a(306,t,""))}ho(e)?(r=es(e,r),t.tag=1,t=Ss(null,t,e,r,n)):(t.tag=0,t=ws(null,t,e,r,n))}return t;case 0:return ws(e,t,t.type,t.pendingProps,n);case 1:return Ss(e,t,r=t.type,o=es(r,t.pendingProps),n);case 3:e:{if(de(t,t.stateNode.containerInfo),null===e)throw Error(a(387));r=t.pendingProps;var i=t.memoizedState;o=i.element,qa(e,t),ei(t,r,null,n);var l=t.memoizedState;if(r=l.cache,Zo(0,pa,r),r!==i.cache&&na(t,[pa],n,!0),Za(),r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=js(e,t,r,n);break e}if(r!==o){Ko(o=ko(Error(a(424)),t)),t=js(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(Do=_h(e.firstChild),Mo=t,$o=!0,Fo=null,Ho=!0,n=Va(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|134221824,n=n.sibling}else{if(qo(),r===o){t=Ds(e,t,n);break e}ds(e,t,r,n)}t=t.child}return t;case 26:return xs(e,t),null===e?(n=Uh(t.type,null,t.pendingProps,null))?t.memoizedState=n:$o||(t.stateNode=Fp(t.type,t.pendingProps,ce.current,t)):t.memoizedState=Uh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return he(t),null===e&&$o&&(r=t.stateNode=Oh(t.type,t.pendingProps,ce.current),Mo=t,Ho=!0,o=Do,Kp(t.type)?(Nh=o,Do=_h(r.firstChild)):Do=o),ds(e,t,t.pendingProps.children,n),xs(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&$o&&((o=r=Do)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[pt])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(a=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(a!==o.rel||e.getAttribute("href")!==(null==o.href||""===o.href?null:o.href)||e.getAttribute("crossorigin")!==(null==o.crossOrigin?null:o.crossOrigin)||e.getAttribute("title")!==(null==o.title?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((a=e.getAttribute("src"))!==(null==o.src?null:o.src)||e.getAttribute("type")!==(null==o.type?null:o.type)||e.getAttribute("crossorigin")!==(null==o.crossOrigin?null:o.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var a=null==o.name?null:""+o.name;if("hidden"===o.type&&e.getAttribute("name")===a)return e}if(null===(e=_h(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,Ho))?(t.stateNode=r,Mo=t,Do=_h(r.firstChild),Ho=!1,o=!0):o=!1),o||Uo(t)),he(t),o=t.type,i=t.pendingProps,l=null!==e?e.memoizedProps:null,r=i.children,Hp(o,i)?r=null:null!==l&&Hp(o,l)&&(t.flags|=32),null!==t.memoizedState&&(o=zi(e,t,Ri,null,null,n),ff._currentValue=o),xs(e,t),ds(e,t,r,n),t.child;case 6:return null===e&&$o&&((e=n=Do)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=_h(e.nextSibling)))return null}return e}(n,t.pendingProps,Ho))?(t.stateNode=n,Mo=t,Do=null,e=!0):e=!1),e||Uo(t)),null;case 13:return Ls(e,t,n);case 4:return de(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Ua(t,null,r,n):ds(e,t,r,n),t.child;case 11:return ps(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,xs(e,t),ds(e,t,r,n),t.child;case 8:case 12:return ds(e,t,t.pendingProps.children,n),t.child;case 10:return Ms(e,t,n);case 9:return o=t.type._context,r=t.pendingProps.children,aa(t),r=r(o=ia(o)),t.flags|=1,ds(e,t,r,n),t.child;case 14:return hs(e,t,t.type,t.pendingProps,n);case 15:return fs(e,t,t.type,t.pendingProps,n);case 19:return Is(e,t,n);case 31:return function(e,t,n){var r=t.pendingProps,o=0!==(128&t.flags);if(t.flags&=-129,null===e){if($o){if("hidden"===r.mode)return e=bs(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},gs(null,e);if(di(t),(e=Do)?null!==(e=null!==(e=Th(e,Ho))&&"&"===e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==Po?{id:_o,overflow:No}:null,retryLane:536870912,hydrationErrors:null},(n=yo(e)).return=t,t.child=n,Mo=t,Do=null):e=null,null===e)throw Uo(t);return t.lanes=536870912,null}return bs(t,r)}var i=e.memoizedState;if(null!==i){var l=i.dehydrated;if(di(t),o)if(256&t.flags)t.flags&=-257,t=ys(e,t,n);else{if(null===t.memoizedState)throw Error(a(558));t.child=e.child,t.flags|=128,t=null}else if(us||ra(e,t,n,!1),o=0!==(n&e.childLanes),us||o){if(null===ri.current){if(null!==(r=Pu)&&0!==(l=Ze(r,n))&&l!==i.retryLane)throw i.retryLane=l,io(e,l),hd(r,e,l),cs;Ed()}t=ys(e,t,n)}else e=i.treeContext,Do=_h(l.nextSibling),Mo=t,$o=!0,Fo=null,Ho=!1,null!==e&&Io(t,e),(t=bs(t,r)).flags|=134221824;return t}return(e=fo(e.child,{mode:r.mode,children:r.children})).ref=t.ref,t.child=e,e.return=t,e}(e,t,n);case 22:return ms(e,t,n,t.pendingProps);case 24:return aa(t),r=ia(pa),null===e?(null===(o=ja())&&(o=Pu,i=ha(),o.pooledCache=i,i.refCount++,null!==i&&(o.pooledCacheLanes|=n),o=i),t.memoizedState={parent:r,cache:o},Ga(t),Zo(0,pa,o)):(0!==(e.lanes&n)&&(qa(e,t),ei(t,null,null,n),Za()),o=e.memoizedState,i=t.memoizedState,o.parent!==r?(o={parent:r,cache:r},t.memoizedState=o,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=o),Zo(0,pa,r)):(r=i.cache,Zo(0,pa,r),r!==o.cache&&na(t,[pa],n,!0))),ds(e,t,t.pendingProps.children,n),t.child;case 30:return null===t.stateNode&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),null!=(r=t.pendingProps).name&&"auto"!==r.name?t.flags|=null===e?18882560:18874368:$o&&Oo(t),null!==e&&e.memoizedProps.name!==r.name?t.flags|=4194816:xs(e,t),ds(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(a(156,t.tag))}function Hs(e){e.flags|=4}function Bs(e,t,n,r,o){var a;if((a=0!==(32&e.mode))&&(a=null===n?nf(t,r):nf(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(335544128&o)===o)if(e.stateNode.complete)e.flags|=8192;else{if(!kd())throw Oa=_a,La;e.flags|=8192}}else e.flags&=-16777217}function Us(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!rf(t)){if(!kd())throw Oa=_a,La;e.flags|=8192}}function Vs(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Je():536870912,e.lanes|=t,Uu|=t)}function Ws(e,t){if(!$o)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null}}function Gs(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=1206910976&o.subtreeFlags,r|=1206910976&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qs(e,t,n){var r=t.pendingProps;switch(Ro(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return Gs(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ea(pa),pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(Go(t)?Hs(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,Jo())),Gs(t),null;case 26:var o=t.type,i=t.memoizedState;return null===e?(Hs(t),null!==i?(Gs(t),Us(t,i)):(Gs(t),Bs(t,o,null,r,n))):i?i!==e.memoizedState?(Hs(t),Gs(t),Us(t,i)):(Gs(t),t.flags&=-16777217):((e=e.memoizedProps)!==r&&Hs(t),Gs(t),Bs(t,o,e,r,n)),null;case 27:if(fe(t),n=ce.current,o=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Hs(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return Gs(t),t.subtreeFlags&=-33554433,null}e=le.current,Go(t)?Vo(t):(e=Oh(o,r,n),t.stateNode=e,Hs(t))}return Gs(t),t.subtreeFlags&=-33554433,null;case 5:if(fe(t),o=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Hs(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return Gs(t),t.subtreeFlags&=-33554433,null}if(i=le.current,Go(t))Vo(t);else{var l=Mp(ce.current);switch(i){case 1:i=l.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=l.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=l.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=l.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":(i=l.createElement("div")).innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i="string"===typeof r.is?l.createElement("select",{is:r.is}):l.createElement("select"),r.multiple?i.multiple=!0:r.size&&(i.size=r.size);break;default:i="string"===typeof r.is?l.createElement(o,{is:r.is}):l.createElement(o)}}i[at]=t,i[it]=r;e:for(l=t.child;null!==l;){if(5===l.tag||6===l.tag)i.appendChild(l.stateNode);else if(4!==l.tag&&27!==l.tag&&null!==l.child){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;null===l.sibling;){if(null===l.return||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=i;e:switch(zp(i,o,r),o){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Hs(t)}}return Gs(t),t.subtreeFlags&=-33554433,Bs(t,t.type,null===e?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Hs(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(e=ce.current,Go(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(o=Mo))switch(o.tag){case 27:case 5:r=o.memoizedProps}e[at]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Pp(e.nodeValue,n)))||Uo(t,!0)}else(e=Mp(e).createTextNode(r))[at]=t,t.stateNode=e}return Gs(t),null;case 31:if(n=t.memoizedState,null===e||null!==e.memoizedState){if(r=Go(t),null!==n){if(null===e){if(!r)throw Error(a(318));if(!(e=null!==(e=t.memoizedState)?e.dehydrated:null))throw Error(a(557));e[at]=t}else qo(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Gs(t),e=!1}else n=Jo(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return 256&t.flags?(fi(t),t):(fi(t),null);if(0!==(128&t.flags))throw Error(a(558))}return Gs(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(o=Go(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(a(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(a(317));o[at]=t}else qo(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Gs(t),o=!1}else o=Jo(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return 256&t.flags?(fi(t),t):(fi(t),null)}return fi(t),0!==(128&t.flags)?(t.lanes=n,t):(n=null!==r,e=null!==e&&null!==e.memoizedState,n&&(o=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(o=r.alternate.memoizedState.cachePool.pool),i=null,null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(i=r.memoizedState.cachePool.pool),i!==o&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Vs(t,t.updateQueue),Gs(t),null);case 4:return pe(),null===e&&yp(t.stateNode.containerInfo),t.flags|=67108864,Gs(t),null;case 10:return ea(t.type),Gs(t),null;case 19:if(vi(t),null===(r=t.memoizedState))return Gs(t),null;if(o=0!==(128&t.flags),null===(i=r.rendering))if(o)Ws(r,!1);else{if(0!==Du||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(i=bi(e))){for(t.flags|=128,Ws(r,!1),e=i.updateQueue,t.updateQueue=e,Vs(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)mo(n,e),n=n.sibling;return gi(0,1&mi.current|2),$o&&zo(t,r.treeForkCount),t.child}e=e.sibling}null!==r.tail&&Ee()>Ku&&(t.flags|=128,o=!0,Ws(r,!1),t.lanes=4194304)}else{if(!o)if(null!==(e=bi(i))){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,Vs(t,e),Ws(r,!0),null===r.tail&&"collapsed"!==r.tailMode&&"visible"!==r.tailMode&&!i.alternate&&!$o)return Gs(t),null}else 2*Ee()-r.renderingStartTime>Ku&&536870912!==n&&(t.flags|=128,o=!0,Ws(r,!1),t.lanes=4194304);r.isBackwards?(i.sibling=t.child,t.child=i):(null!==(e=r.last)?e.sibling=i:t.child=i,r.last=i)}if(null!==r.tail){e:{for(n=e=r.tail;null!==n;){if(null!==n.alternate){n=!1;break e}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ee(),e.sibling=null,i=mi.current,i=o?1&i|2:1&i,"visible"===r.tailMode||"collapsed"===r.tailMode||!n||$o?gi(0,i):(n=i,oe(si,t),oe(mi,n),null===ci&&(ci=t)),$o&&zo(t,r.treeForkCount),e}return Gs(t),null;case 22:case 23:return fi(t),li(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(Gs(t),6&t.subtreeFlags&&(t.flags|=8192)):Gs(t),null!==(n=t.updateQueue)&&Vs(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&re(Sa),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ea(pa),Gs(t),null;case 25:return null;case 30:return t.flags|=33554432,Gs(t),null}throw Error(a(156,t.tag))}function Js(e,t){switch(Ro(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ea(pa),pe(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return fe(t),null;case 31:if(null!==t.memoizedState){if(fi(t),null===t.alternate)throw Error(a(340));qo()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 13:if(fi(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));qo()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return vi(t),65536&(e=t.flags)?(t.flags=-65537&e|128,null!==(e=t.memoizedState)&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return pe(),null;case 10:return ea(t.type),null;case 22:case 23:return fi(t),li(),null!==e&&re(Sa),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return ea(pa),null;default:return null}}function Ks(e,t){switch(Ro(t),t.tag){case 3:ea(pa),pe();break;case 26:case 27:case 5:fe(t);break;case 4:pe();break;case 31:null!==t.memoizedState&&fi(t);break;case 13:fi(t);break;case 19:vi(t);break;case 10:ea(t.type);break;case 22:case 23:fi(t),li(),null!==e&&re(Sa);break;case 24:ea(pa)}}function Ys(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var o=r.next;n=o;do{if((n.tag&e)===e){r=void 0;var a=n.create,i=n.inst;r=a(),i.destroy=r}n=n.next}while(n!==o)}}catch(l){Vd(t,t.return,l)}}function Qs(e,t,n){try{var r=t.updateQueue,o=null!==r?r.lastEffect:null;if(null!==o){var a=o.next;r=a;do{if((r.tag&e)===e){var i=r.inst,l=i.destroy;if(void 0!==l){i.destroy=void 0,o=t;var s=n,c=l;try{c()}catch(u){Vd(o,s,u)}}}r=r.next}while(r!==a)}}catch(u){Vd(t,t.return,u)}}function Xs(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{ni(t,n)}catch(r){Vd(e,e.return,r)}}}function Zs(e,t,n){n.props=es(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){Vd(e,t,r)}}function ec(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var o=e.stateNode,a=Yr(e.memoizedProps,o);null!==o.ref&&o.ref.name===a||(o.ref=ah(a)),r=o.ref;break;case 7:if(null===e.stateNode){var i=new ih(e);m(e.child,!1,kh,i,void 0,void 0),e.stateNode=i}r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(l){Vd(e,t,l)}}function tc(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(o){Vd(e,t,o)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(a){Vd(e,t,a)}else n.current=null}function nc(e,t){if((5===e.tag||27===e.tag||6===e.tag)&&null===e.alternate&&null!==t)for(var n=0;n<t.length;n++)jh(e.stateNode,t[n])}function rc(e){for(var t=e.return;null!==t&&(ic(t)&&jh(e.stateNode,t.stateNode),!ac(t));)t=t.return}function oc(e){for(var t=e.return;null!==t&&(ic(t)&&Eh(e.stateNode,t.stateNode),!ac(t));)t=t.return}function ac(e){return 5===e.tag||3===e.tag||27===e.tag}function ic(e){return e&&7===e.tag&&null!==e.stateNode}function lc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(o){Vd(e,e.return,o)}}function sc(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,i=null,l=null,s=null,c=null,u=null,d=null;for(f in n){var p=n[f];if(n.hasOwnProperty(f)&&null!=p)switch(f){case"checked":case"value":break;case"defaultValue":c=p;default:r.hasOwnProperty(f)||_p(e,t,f,null,r,p)}}for(var h in r){var f=r[h];if(p=n[h],r.hasOwnProperty(h)&&(null!=f||null!=p))switch(h){case"type":f!==p&&(Lt=!0),i=f;break;case"name":f!==p&&(Lt=!0),o=f;break;case"checked":f!==p&&(Lt=!0),u=f;break;case"defaultChecked":f!==p&&(Lt=!0),d=f;break;case"value":f!==p&&(Lt=!0),l=f;break;case"defaultValue":f!==p&&(Lt=!0),s=f;break;case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(a(137,t));break;default:f!==p&&_p(e,t,h,f,r,p)}}return void $t(e,l,s,c,u,d,i,o);case"select":for(i in f=l=s=h=null,n)if(c=n[i],n.hasOwnProperty(i)&&null!=c)switch(i){case"value":break;case"multiple":f=c;default:r.hasOwnProperty(i)||_p(e,t,i,null,r,c)}for(o in r)if(i=r[o],c=n[o],r.hasOwnProperty(o)&&(null!=i||null!=c))switch(o){case"value":i!==c&&(Lt=!0),h=i;break;case"defaultValue":i!==c&&(Lt=!0),s=i;break;case"multiple":i!==c&&(Lt=!0),l=i;default:i!==c&&_p(e,t,o,i,r,c)}return t=s,n=l,r=f,void(null!=h?Bt(e,!!n,h,!1):!!r!==!!n&&(null!=t?Bt(e,!!n,t,!0):Bt(e,!!n,n?[]:"",!1)));case"textarea":for(s in f=h=null,n)if(o=n[s],n.hasOwnProperty(s)&&null!=o&&!r.hasOwnProperty(s))switch(s){case"value":case"children":break;default:_p(e,t,s,null,r,o)}for(l in r)if(o=r[l],i=n[l],r.hasOwnProperty(l)&&(null!=o||null!=i))switch(l){case"value":o!==i&&(Lt=!0),h=o;break;case"defaultValue":o!==i&&(Lt=!0),f=o;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=o)throw Error(a(91));break;default:o!==i&&_p(e,t,l,o,r,i)}return void Ut(e,h,f);case"option":for(var m in n)if(h=n[m],n.hasOwnProperty(m)&&null!=h&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else _p(e,t,m,null,r,h);for(c in r)if(h=r[c],f=n[c],r.hasOwnProperty(c)&&h!==f&&(null!=h||null!=f))if("selected"===c)h!==f&&(Lt=!0),e.selected=h&&"function"!==typeof h&&"symbol"!==typeof h;else _p(e,t,c,h,r,f);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)h=n[g],n.hasOwnProperty(g)&&null!=h&&!r.hasOwnProperty(g)&&_p(e,t,g,null,r,h);for(u in r)if(h=r[u],f=n[u],r.hasOwnProperty(u)&&h!==f&&(null!=h||null!=f))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(a(137,t));break;default:_p(e,t,u,h,r,f)}return;default:if(Kt(t)){for(var v in n)h=n[v],n.hasOwnProperty(v)&&void 0!==h&&!r.hasOwnProperty(v)&&Np(e,t,v,void 0,r,h);for(d in r)h=r[d],f=n[d],!r.hasOwnProperty(d)||h===f||void 0===h&&void 0===f||Np(e,t,d,h,r,f);return}}for(var b in n)h=n[b],n.hasOwnProperty(b)&&null!=h&&!r.hasOwnProperty(b)&&_p(e,t,b,null,r,h);for(p in r)h=r[p],f=n[p],!r.hasOwnProperty(p)||h===f||null==h&&null==f||_p(e,t,p,h,r,f)}(r,e.type,n,t),r[it]=t}catch(o){Vd(e,e.return,o)}}function cc(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&Kp(e.type)||4===e.tag}function uc(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||cc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&Kp(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function dc(e,t,n,r){var o=e.tag;if(5===o||6===o)o=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(o,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(o),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zt)),nc(e,r),Lt=!0;else if(4!==o&&(27===o&&(nc(e,r),r=null,Kp(e.type)&&(n=e.stateNode,t=null)),null!==(e=e.child)))for(dc(e,t,n,r),e=e.sibling;null!==e;)dc(e,t,n,r),e=e.sibling}function pc(e,t,n,r){var o=e.tag;if(5===o||6===o)o=e.stateNode,t?n.insertBefore(o,t):n.appendChild(o),nc(e,r),Lt=!0;else if(4!==o&&(27===o&&(nc(e,r),r=null,Kp(e.type)&&(n=e.stateNode)),null!==(e=e.child)))for(pc(e,t,n,r),e=e.sibling;null!==e;)pc(e,t,n,r),e=e.sibling}function hc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);zp(t,r,n),t[at]=e,t[it]=n}catch(a){Vd(e,e.return,a)}}var fc=!1,mc=null;function gc(e){30!==e.tag&&0===(33554432&e.subtreeFlags)||(fc=!0)}var vc=null;function bc(){var e=vc;return vc=null,e}var yc=0;function xc(e,t,n,r,o){return yc=0,wc(e.child,t,n,r,o)}function wc(e,t,n,r,o){for(var a=!1;null!==e;){if(5===e.tag){var i=e.stateNode;if(null!==r){var l=th(i);r.push(l),l.view&&(a=!0)}else a||th(i).view&&(a=!0);fc=!0,Xp(i,0===yc?t:t+"_"+yc,n),yc++}else 22===e.tag&&null!==e.memoizedState||30===e.tag&&o||wc(e.child,t,n,r,o)&&(a=!0);e=e.sibling}return a}function kc(e,t){for(;null!==e;)5===e.tag?Zp(e.stateNode,e.memoizedProps):22===e.tag&&null!==e.memoizedState||30===e.tag&&t||kc(e.child,t),e=e.sibling}function Sc(e){if(0!==(18874368&e.subtreeFlags))for(e=e.child;null!==e;){if((22!==e.tag||null===e.memoizedState)&&(Sc(e),30===e.tag&&0!==(18874368&e.flags)&&e.stateNode.paired)){var t=e.memoizedProps;if(null==t.name||"auto"===t.name)throw Error(a(544));var n=t.name;"none"!==(t=Xr(t.default,t.share))&&(xc(e,n,t,null,!1)||kc(e.child,!1))}e=e.sibling}}function jc(e,t){if(30===e.tag){var n=e.stateNode,r=e.memoizedProps,o=Yr(r,n),a=Xr(r.default,n.paired?r.share:r.enter);"none"!==a?xc(e,o,a,null,!1)?(Sc(e),n.paired||t||pd(e,r.onEnter)):kc(e.child,!1):Sc(e)}else if(0!==(33554432&e.subtreeFlags))for(e=e.child;null!==e;)jc(e,t),e=e.sibling;else Sc(e)}function Ec(e){if(null!==mc&&0!==mc.size){var t=mc;if(0!==(18874368&e.subtreeFlags))for(e=e.child;null!==e;){if(22!==e.tag||null===e.memoizedState){if(30===e.tag&&0!==(18874368&e.flags)){var n=e.memoizedProps,r=n.name;if(null!=r&&"auto"!==r){var o=t.get(r);if(void 0!==o){var a=Xr(n.default,n.share);if("none"!==a&&(xc(e,r,a,null,!1)?(a=e.stateNode,o.paired=a,a.paired=o,pd(e,n.onShare)):kc(e.child,!1)),t.delete(r),0===t.size)break}}}Ec(e)}e=e.sibling}}}function Cc(e){if(30===e.tag){var t=e.memoizedProps,n=Yr(t,e.stateNode),r=null!==mc?mc.get(n):void 0,o=Xr(t.default,void 0!==r?t.share:t.exit);"none"!==o&&(xc(e,n,o,null,!1)?void 0!==r?(o=e.stateNode,r.paired=o,o.paired=r,mc.delete(n),pd(e,t.onShare)):pd(e,t.onExit):kc(e.child,!1)),null!==mc&&Ec(e)}else if(0!==(33554432&e.subtreeFlags))for(e=e.child;null!==e;)Cc(e),e=e.sibling;else null!==mc&&Ec(e)}function Tc(e){for(e=e.child;null!==e;){if(30===e.tag){var t=e.memoizedProps,n=Yr(t,e.stateNode);t=Xr(t.default,t.update),e.flags&=-5,"none"!==t&&xc(e,n,t,e.memoizedState=[],!1)}else 0!==(33554432&e.subtreeFlags)&&Tc(e);e=e.sibling}}function Lc(e){if(0!==(18874368&e.subtreeFlags))for(e=e.child;null!==e;){if(22!==e.tag||null===e.memoizedState){if(30===e.tag&&0!==(18874368&e.flags)){var t=e.stateNode;null!==t.paired&&(t.paired=null,kc(e.child,!1))}Lc(e)}e=e.sibling}}function Pc(e){if(30===e.tag)e.stateNode.paired=null,kc(e.child,!1),Lc(e);else if(0!==(33554432&e.subtreeFlags))for(e=e.child;null!==e;)Pc(e),e=e.sibling;else Lc(e)}function _c(e){for(e=e.child;null!==e;)30===e.tag?kc(e.child,!1):0!==(33554432&e.subtreeFlags)&&_c(e),e=e.sibling}function Nc(e,t,n,r,o,a,i){for(var l=!1;null!==t;){if(5===t.tag){var s=t.stateNode;if(null!==a&&yc<a.length){var c,u=a[yc],d=th(s);if((u.view||d.view)&&(l=!0),c=0===(4&e.flags))if(d.clip)c=!0;else{c=u.rect;var p=d.rect;c=c.y!==p.y||c.x!==p.x||c.height!==p.height||c.width!==p.width}c&&(e.flags|=4),d.abs?d=!u.abs:(u=u.rect,d=d.rect,d=u.height!==d.height||u.width!==d.width),d&&(e.flags|=32)}else e.flags|=32;0!==(4&e.flags)&&Xp(s,0===yc?n:n+"_"+yc,o),l&&0!==(4&e.flags)||(null===vc&&(vc=[]),vc.push(s,0===yc?r:r+"_"+yc,t.memoizedProps)),yc++}else 22===t.tag&&null!==t.memoizedState||(30===t.tag&&i?e.flags|=32&t.flags:Nc(e,t.child,n,r,o,a,i)&&(l=!0));t=t.sibling}return l}function zc(e,t){for(e=e.child;null!==e;){if(30===e.tag){var n=e.memoizedProps,r=e.stateNode,o=Yr(n,r),a=Xr(n.default,n.update);if(t)var i=null===(r=r.clones)?null:r.map(nh);else i=e.memoizedState,e.memoizedState=null;r=e;var l=e.child;yc=0,o=Nc(r,l,o,o,a,i,!1),0!==(4&e.flags)&&o&&(t||pd(e,n.onUpdate))}else 0!==(33554432&e.subtreeFlags)&&zc(e,t);e=e.sibling}}var Ac=!1,Oc=!1,Rc=!1,Ic=!1,Mc="function"===typeof WeakSet?WeakSet:Set,Dc=null,$c=!1,Fc=!1,Hc=!1,Bc=!1;function Uc(e){for(;null!==Dc;){var t=Dc,n=e,r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&o)&&null!==r){n=void 0,o=r.memoizedProps,r=r.memoizedState;var i=t.stateNode;try{var l=es(t.type,o);n=i.getSnapshotBeforeUpdate(l,r),i.__reactInternalSnapshotBeforeUpdate=n}catch(s){Vd(t,t.return,s)}}break;case 3:if(0!==(1024&o))if(9===(n=(r=t.stateNode.containerInfo).nodeType))Ch(r);else if(1===n)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Ch(r);break;default:r.textContent=""}break;case 30:n&&null!==r&&(n=Yr(r.memoizedProps,r.stateNode),"none"!==(o=Xr((o=t.memoizedProps).default,o.update))&&xc(r,n,o,r.memoizedState=[],!0));break;default:if(0!==(1024&o))throw Error(a(163))}if(null!==(r=t.sibling)){r.return=t.return,Dc=r;break}Dc=t.return}}function Vc(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:cu(e,n),4&r&&Ys(5,n);break;case 1:if(cu(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(i){Vd(n,n.return,i)}else{var o=es(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){Vd(n,n.return,l)}}64&r&&Xs(n),512&r&&ec(n,n.return);break;case 3:if(cu(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{ni(e,t)}catch(i){Vd(n,n.return,i)}}break;case 27:null===t&&4&r&&hc(n);case 26:case 5:cu(e,n),null===t&&4&r&&lc(n),512&r&&ec(n,n.return);break;case 12:cu(e,n);break;case 31:cu(e,n),4&r&&Zc(e,n);break;case 13:cu(e,n),4&r&&eu(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$~"===e.data)e._reactRetry=t;else if("$?"!==e.data||"loading"!==n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=Jd.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||Ac)){var a=null!==t&&null!==t.memoizedState||Oc;t=Ac,o=Oc,Ac=r,(Oc=a)&&!o?(r=2,0!==(8772&n.subtreeFlags)&&(r|=1),du(e,n,r)):cu(e,n),Ac=t,Oc=o}break;case 30:cu(e,n),512&r&&ec(n,n.return);break;case 7:512&r&&ec(n,n.return);default:cu(e,n)}}function Wc(e,t){for(e=e.child;null!==e;)Gc(e,t),e=e.sibling}function Gc(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;"function"===typeof r.setProperty?r.setProperty("display","none","important"):r.display="none"}else{var o=e.stateNode,a=e.memoizedProps.style,i=void 0!==a&&null!==a&&a.hasOwnProperty("display")?a.display:null;o.style.display=null==i||"boolean"===typeof i?"":(""+i).trim()}}catch(s){Vd(e,e.return,s)}qc(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,Lt=!0}catch(s){Vd(e,e.return,s)}break;case 18:try{var l=e.stateNode;t?Qp(l,!0):Qp(e.stateNode,!1)}catch(s){Vd(e,e.return,s)}break;case 22:case 23:null===e.memoizedState&&Wc(e,t);break;default:Wc(e,t)}}function qc(e,t){if(67108864&e.subtreeFlags)for(e=e.child;null!==e;){e:{var n=e,r=t;switch(n.tag){case 4:Gc(n,r);break e;case 22:null===n.memoizedState&&qc(n,r);break e;default:qc(n,r)}}e=e.sibling}}function Jc(e){var t=e.alternate;null!==t&&(e.alternate=null,Jc(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&ft(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Kc=null,Yc=!1;function Qc(e,t,n){for(n=n.child;null!==n;)Xc(e,t,n),n=n.sibling}function Xc(e,t,n){if(Re&&"function"===typeof Re.onCommitFiberUnmount)try{Re.onCommitFiberUnmount(Oe,n)}catch(a){}switch(n.tag){case 26:Oc||tc(n,t),Qc(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Oc&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:Oc||tc(n,t),oc(n);var r=Kc,o=Yc;Kp(n.type)&&(Kc=n.stateNode,Yc=!1),Qc(e,t,n),Rh(n.stateNode,n.type,n.memoizedProps),Kc=r,Yc=o;break;case 5:Oc||tc(n,t),oc(n);case 6:if(6===n.tag&&oc(n),r=Kc,o=Yc,Kc=null,Qc(e,t,n),Yc=o,null!==(Kc=r))if(Yc)try{(9===Kc.nodeType?Kc.body:"HTML"===Kc.nodeName?Kc.ownerDocument.body:Kc).removeChild(n.stateNode),Lt=!0}catch(i){Vd(n,t,i)}else try{Kc.removeChild(n.stateNode),Lt=!0}catch(i){Vd(n,t,i)}break;case 18:null!==Kc&&(Yc?(Yp(9===(e=Kc).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Jf(e)):Yp(Kc,n.stateNode));break;case 4:r=Kc,o=Yc,Kc=n.stateNode.containerInfo,Yc=!0,Qc(e,t,n),Kc=r,Yc=o;break;case 0:case 11:case 14:case 15:Qs(2,n,t),Oc||Qs(4,n,t),Qc(e,t,n);break;case 1:Oc||(tc(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&Zs(n,t,r)),Qc(e,t,n);break;case 21:Qc(e,t,n);break;case 22:Oc=(r=Oc)||null!==n.memoizedState,Qc(e,t,n),Oc=r;break;case 30:tc(n,t),Qc(e,t,n);break;case 7:Oc||tc(n,t),Qc(e,t,n);break;default:Qc(e,t,n)}}function Zc(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&null!==(e=e.memoizedState))){e=e.dehydrated;try{Jf(e)}catch(n){Vd(t,t.return,n)}}}function eu(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Jf(e)}catch(n){Vd(t,t.return,n)}}function tu(e,t){var n=function(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Mc),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Mc),t;default:throw Error(a(435,e.tag))}}(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Kd.bind(null,e,t);t.then(r,r)}})}function nu(e,t,n){var r=t.deletions;if(null!==r)for(var o=0;o<r.length;o++){var i=r[o],l=e,s=t,c=s;e:for(;null!==c;){switch(c.tag){case 27:if(Kp(c.type)){Kc=c.stateNode,Yc=!1;break e}break;case 5:Kc=c.stateNode,Yc=!1;break e;case 3:case 4:Kc=c.stateNode.containerInfo,Yc=!0;break e}c=c.return}if(null===Kc)throw Error(a(160));Xc(l,s,i),Kc=null,Yc=!1,null!==(l=i.alternate)&&(l.return=null),i.return=null}if(13886&t.subtreeFlags)for(t=t.child;null!==t;)ou(t,e,n),t=t.sibling}var ru=null;function ou(e,t,n){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(4&o&&null!==(r=null!==(r=e.updateQueue)?r.events:null))for(var i=0;i<r.length;i++){var l=r[i];l.ref.impl=l.nextImpl}nu(t,e,n),au(e),4&o&&(Qs(3,e,e.return),Ys(3,e),Qs(5,e,e.return));break;case 1:nu(t,e,n),au(e),512&o&&(Oc||null===r||tc(r,r.return)),64&o&&Ac&&(null!==(e=e.updateQueue)&&(null!==(t=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?t:n.concat(t))));break;case 26:if(i=ru,nu(t,e,n),au(e),512&o&&(Oc||null===r||tc(r,r.return)),4&o)if(o=null!==r?r.memoizedState:null,n=e.memoizedState,null===r)if(null===n)if(null===e.stateNode)if(Ac)e.stateNode=Fp(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,o=i.ownerDocument||i;t:switch(t){case"title":(!(r=o.getElementsByTagName("title")[0])||r[pt]||r[at]||"http://www.w3.org/2000/svg"===r.namespaceURI||r.hasAttribute("itemprop"))&&(r=o.createElement(t),o.head.insertBefore(r,o.querySelector("head > title"))),zp(r,t,n),r[at]=e,yt(r),t=r;break e;case"link":if(i=ef("link","href",o).get(t+(n.href||"")))for(l=0;l<i.length;l++)if((r=i[l]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&r.getAttribute("rel")===(null==n.rel?null:n.rel)&&r.getAttribute("title")===(null==n.title?null:n.title)&&r.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){i.splice(l,1);break t}zp(r=o.createElement(t),t,n),o.head.appendChild(r);break;case"meta":if(i=ef("meta","content",o).get(t+(n.content||"")))for(l=0;l<i.length;l++)if((r=i[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&r.getAttribute("name")===(null==n.name?null:n.name)&&r.getAttribute("property")===(null==n.property?null:n.property)&&r.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&r.getAttribute("charset")===(null==n.charSet?null:n.charSet)){i.splice(l,1);break t}zp(r=o.createElement(t),t,n),o.head.appendChild(r);break;default:throw Error(a(468,t))}r[at]=e,yt(r),t=r}e.stateNode=t}else Ac||tf(i,e.type,e.stateNode);else e.stateNode=Kh(i,n,e.memoizedProps);else o!==n?(null===o?null===(t=r.stateNode)||Oc||t.parentNode.removeChild(t):o.count--,null===n?Ac||tf(i,e.type,e.stateNode):Kh(i,n,e.memoizedProps)):null===n&&null!==e.stateNode&&sc(e,e.memoizedProps,r.memoizedProps);break;case 27:nu(t,e,n),au(e),512&o&&(Oc||null===r||tc(r,r.return)),null!==r&&4&o&&sc(e,e.memoizedProps,r.memoizedProps);break;case 5:if(i=Rc,Rc=!1,nu(t,e,n),Rc=i,au(e),512&o&&(Oc||null===r||tc(r,r.return)),32&e.flags){t=e.stateNode;try{Wt(t,""),Lt=!0}catch(d){Vd(e,e.return,d)}}4&o&&null!=e.stateNode&&sc(e,t=e.memoizedProps,null!==r?r.memoizedProps:t),1024&o&&(Ic=!0);break;case 6:if(nu(t,e,n),au(e),4&o){if(null===e.stateNode)throw Error(a(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Lt=!0}catch(d){Vd(e,e.return,d)}}break;case 3:if(Lt=!1,Zh=null,i=ru,ru=$h(t.containerInfo),nu(t,e,n),ru=i,au(e),4&o&&null!==r&&r.memoizedState.isDehydrated)try{Jf(t.containerInfo)}catch(d){Vd(e,e.return,d)}Ic&&(Ic=!1,iu(e)),Lt=!1;break;case 4:o=Rc,Rc=Ac,r=Pt(),i=ru,ru=$h(e.stateNode.containerInfo),nu(t,e,n),au(e),ru=i,Lt&&Fc&&(Hc=!0),Lt=r,Rc=o;break;case 12:nu(t,e,n),au(e);break;case 31:nu(t,e,n),au(e),4&o&&(null!==(t=e.updateQueue)&&(e.updateQueue=null,tu(e,t)));break;case 13:nu(t,e,n),au(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==r&&null!==r.memoizedState)&&(qu=Ee()),4&o&&(null!==(t=e.updateQueue)&&(e.updateQueue=null,tu(e,t)));break;case 22:i=null!==e.memoizedState,l=null!==r&&null!==r.memoizedState;var s=Ac,c=Oc,u=Rc;Ac=s||i,Rc=u||i,Oc=c||l,nu(t,e,n),Oc=c,Rc=u,Ac=s,au(e),8192&o&&((t=e.stateNode)._visibility=i?-2&t._visibility:1|t._visibility,!i||null===r||l||Ac||Oc||(n=Ac,r=Oc,Ac=i||Ac,Oc=t=l||Oc,uu(e,2),Ac=n,Oc=r),!i&&Rc||Wc(e,i)),4&o&&(null!==(t=e.updateQueue)&&(null!==(n=t.retryQueue)&&(t.retryQueue=null,tu(e,n))));break;case 19:nu(t,e,n),au(e),4&o&&(null!==(t=e.updateQueue)&&(e.updateQueue=null,tu(e,t)));break;case 30:512&o&&(Oc||null===r||tc(r,r.return)),o=Pt(),i=Fc,l=(335544064&n)===n,s=e.memoizedProps,Fc=l&&"none"!==Xr(s.default,s.update),nu(t,e,n),au(e),l&&null!==r&&Lt&&(e.flags|=4),Fc=i,Lt=o;break;case 21:break;case 7:512&o&&(Oc||null===r||tc(r,r.return)),r&&null!==r.stateNode&&(r.stateNode._fragmentFiber=e);default:nu(t,e,n),au(e)}}function au(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(cc(r)){n=r;break}r=r.return}r=null;for(var o=e.return;null!==o;){if(ic(o)){var i=o.stateNode;null===r?r=[i]:r.push(i)}if(ac(o))break;o=o.return}var l=r;if(null==n)throw Error(a(160));switch(n.tag){case 27:var s=n.stateNode;pc(e,uc(e),s,l);break;case 5:var c=n.stateNode;32&n.flags&&(Wt(c,""),n.flags&=-33),pc(e,uc(e),c,l);break;case 3:case 4:var u=n.stateNode.containerInfo;dc(e,uc(e),u,l);break;default:throw Error(a(161))}}catch(d){Vd(e,e.return,d)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function iu(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;iu(t),5===t.tag&&1024&t.flags&&(t=t.stateNode,Sf=!0,t.reset(),Sf=!1),e=e.sibling}}function lu(e,t){if(9270&t.subtreeFlags)for(t=t.child;null!==t;)su(t,e),t=t.sibling;else zc(t,!1)}function su(e,t){var n=e.alternate;if(null===n)jc(e,!1);else switch(e.tag){case 3:if(Bc=$c=!1,bc(),lu(t,e),!$c&&!Hc){if(null!==(e=vc))for(var r=0;r<e.length;r+=3){n=e[r];var o=e[r+1];Zp(n,e[r+2]),null!==(n=n.ownerDocument.documentElement)&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+o+")"})}null!==(e=9===(e=t.containerInfo).nodeType?e.documentElement:e.ownerDocument.documentElement)&&""===e.style.viewTransitionName&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Bc=!0}vc=null;break;case 5:default:lu(t,e);break;case 4:r=$c,$c=!1,lu(t,e),$c&&(Hc=!0),$c=r;break;case 22:null===e.memoizedState&&(null!==n.memoizedState?jc(e,!1):lu(t,e));break;case 30:r=$c,o=bc(),$c=!1,lu(t,e),$c&&(e.flags|=4);var a=e.memoizedProps,i=e.stateNode;t=Yr(a,i),i=Yr(n.memoizedProps,i);var l=Xr(a.default,a.update);"none"===l?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,yc=0,t=Nc(e,n,t,i,l,a,!0),yc!==(null===a?0:a.length)&&(e.flags|=32)),0!==(4&e.flags)&&t?(pd(e,e.memoizedProps.onUpdate),vc=o):null!==o&&(o.push.apply(o,vc),vc=o),$c=0!==(32&e.flags)||r}}function cu(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Vc(e,t.alternate,t),t=t.sibling}function uu(e,t){for(e=e.child;null!==e;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Qs(4,n,n.return),uu(n,r);break;case 1:tc(n,n.return);var o=n.stateNode;"function"===typeof o.componentWillUnmount&&Zs(n,n.return,o),uu(n,r);break;case 27:0!==(2&r)&&Rh(n.stateNode,n.type,n.memoizedProps);case 5:tc(n,n.return),5!==n.tag&&27!==n.tag||oc(n),uu(n,r);break;case 6:oc(n);break;case 26:tc(n,n.return),o=n.stateNode,null!==n.memoizedState||null===o||Oc||o.parentNode.removeChild(o),uu(n,r);break;case 22:null===n.memoizedState&&uu(n,r);break;case 30:tc(n,n.return),uu(n,r);break;case 7:tc(n,n.return);default:uu(n,r)}e=e.sibling}}function du(e,t,n){for(n=0!==(8772&t.subtreeFlags)?n:-2&n,t=t.child;null!==t;){var r=t.alternate,o=e,a=t,i=a.flags,l=0!==(1&n);switch(a.tag){case 0:case 11:case 15:du(o,a,n),Ys(4,a);break;case 1:if(du(o,a,n),"function"===typeof(o=(r=a).stateNode).componentDidMount)try{o.componentDidMount()}catch(u){Vd(r,r.return,u)}if(null!==(o=(r=a).updateQueue)){var s=r.stateNode;try{var c=o.shared.hiddenCallbacks;if(null!==c)for(o.shared.hiddenCallbacks=null,o=0;o<c.length;o++)ti(c[o],s)}catch(u){Vd(r,r.return,u)}}l&&64&i&&Xs(a),ec(a,a.return);break;case 27:0!==(2&n)&&hc(a);case 5:5!==a.tag&&27!==a.tag||rc(a),du(o,a,n),l&&null===r&&4&i&&lc(a),ec(a,a.return);break;case 6:rc(a);break;case 26:s=a.stateNode,null!==a.memoizedState||null===s||Ac||tf($h(s.ownerDocument),a.type,s),du(o,a,n),l&&null===r&&4&i&&lc(a),ec(a,a.return);break;case 12:du(o,a,n);break;case 31:du(o,a,n),l&&4&i&&Zc(o,a);break;case 13:du(o,a,n),l&&4&i&&eu(o,a);break;case 22:null===a.memoizedState&&du(o,a,n),ec(a,a.return);break;case 30:du(o,a,n),ec(a,a.return);break;case 7:ec(a,a.return);default:du(o,a,n)}t=t.sibling}}function pu(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&fa(n))}function hu(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&fa(e))}function fu(e,t,n,r){var o=(335544064&n)===n;if(t.subtreeFlags&(o?10262:10256))for(t=t.child;null!==t;)mu(e,t,n,r),t=t.sibling;else o&&_c(t)}function mu(e,t,n,r){var o=(335544064&n)===n;o&&null===t.alternate&&null!==t.return&&null!==t.return.alternate&&Pc(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:fu(e,t,n,r),2048&a&&Ys(9,t);break;case 1:case 31:case 13:default:fu(e,t,n,r);break;case 3:fu(e,t,n,r),o&&Bc&&("root"===(e=9===(e=e.containerInfo).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e).style.viewTransitionName&&(e.style.viewTransitionName=""),null!==(e=e.ownerDocument.documentElement)&&"none"===e.style.viewTransitionName&&(e.style.viewTransitionName="")),2048&a&&(a=null,null!==t.alternate&&(a=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==a&&(t.refCount++,null!=a&&fa(a)));break;case 12:if(2048&a){fu(e,t,n,r),a=t.stateNode;try{var i=t.memoizedProps,l=i.id,s=i.onPostCommit;"function"===typeof s&&s(l,null===t.alternate?"mount":"update",a.passiveEffectDuration,-0)}catch(c){Vd(t,t.return,c)}}else fu(e,t,n,r);break;case 23:break;case 22:i=t.stateNode,l=t.alternate,null!==t.memoizedState?(o&&null!==l&&null===l.memoizedState&&Pc(l),2&i._visibility?fu(e,t,n,r):vu(e,t)):(o&&null!==l&&null!==l.memoizedState&&Pc(t),2&i._visibility?fu(e,t,n,r):(i._visibility|=2,gu(e,t,n,r,0!==(10256&t.subtreeFlags)||!1))),2048&a&&pu(l,t);break;case 24:fu(e,t,n,r),2048&a&&hu(t.alternate,t);break;case 30:o&&(null!==(a=t.alternate)&&(kc(a.child,!0),kc(t.child,!0))),fu(e,t,n,r)}}function gu(e,t,n,r,o){for(o=o&&(0!==(10256&t.subtreeFlags)||!1),t=t.child;null!==t;){var a=e,i=t,l=n,s=r,c=i.flags;switch(i.tag){case 0:case 11:case 15:gu(a,i,l,s,o),Ys(8,i);break;case 23:break;case 22:var u=i.stateNode;null!==i.memoizedState?2&u._visibility?gu(a,i,l,s,o):vu(a,i):(u._visibility|=2,gu(a,i,l,s,o)),o&&2048&c&&pu(i.alternate,i);break;case 24:gu(a,i,l,s,o),o&&2048&c&&hu(i.alternate,i);break;default:gu(a,i,l,s,o)}t=t.sibling}}function vu(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,o=r.flags;switch(r.tag){case 22:vu(n,r),2048&o&&pu(r.alternate,r);break;case 24:vu(n,r),2048&o&&hu(r.alternate,r);break;default:vu(n,r)}t=t.sibling}}var bu=8192;function yu(e,t,n){if(e.subtreeFlags&bu)for(e=e.child;null!==e;)xu(e,t,n),e=e.sibling}function xu(e,t,n){switch(e.tag){case 26:yu(e,t,n),e.flags&bu&&(null!==e.memoizedState?function(e,t,n,r){if("stylesheet"===n.type&&("string"!==typeof r.media||!1!==matchMedia(r.media).matches)&&0===(4&n.state.loading)){if(null===n.instance){var o=Vh(r.href),a=t.querySelector(Wh(o));if(a)return null!==(t=a._p)&&"object"===typeof t&&"function"===typeof t.then&&(e.count++,e=cf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,void yt(a);a=t.ownerDocument||t,r=Gh(r),(o=Mh.get(o))&&Qh(r,o),yt(a=a.createElement("link"));var i=a;i._p=new Promise(function(e,t){i.onload=e,i.onerror=t}),zp(a,"link",r),n.instance=a}null===e.stylesheets&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&0===(3&n.state.loading)&&(e.count++,n=cf.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}(n,ru,e.memoizedState,e.memoizedProps):(e=e.stateNode,(335544128&t)===t&&af(n,e)));break;case 5:yu(e,t,n),e.flags&bu&&(e=e.stateNode,(335544128&t)===t&&af(n,e));break;case 3:case 4:var r=ru;ru=$h(e.stateNode.containerInfo),yu(e,t,n),ru=r;break;case 22:null===e.memoizedState&&(null!==(r=e.alternate)&&null!==r.memoizedState?(r=bu,bu=16777216,yu(e,t,n),bu=r):yu(e,t,n));break;case 30:if(0!==(e.flags&bu)&&(null!=(r=e.memoizedProps.name)&&"auto"!==r)){var o=e.stateNode;o.paired=null,null===mc&&(mc=new Map),mc.set(r,o)}yu(e,t,n);break;default:yu(e,t,n)}}function wu(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function ku(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Dc=r,Eu(r,e)}wu(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Su(e),e=e.sibling}function Su(e){switch(e.tag){case 0:case 11:case 15:ku(e),2048&e.flags&&Qs(9,e,e.return);break;case 3:case 12:default:ku(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,ju(e)):ku(e)}}function ju(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Dc=r,Eu(r,e)}wu(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:Qs(8,t,t.return),ju(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,ju(t));break;default:ju(t)}e=e.sibling}}function Eu(e,t){for(;null!==Dc;){var n=Dc;switch(n.tag){case 0:case 11:case 15:Qs(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:fa(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,Dc=r;else e:for(n=e;null!==Dc;){var o=(r=Dc).sibling,a=r.return;if(Jc(r),r===n){Dc=null;break e}if(null!==o){o.return=a,Dc=o;break e}Dc=a}}}var Cu={getCacheForType:function(e){var t=ia(pa),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ia(pa).controller.signal}},Tu="function"===typeof WeakMap?WeakMap:Map,Lu=0,Pu=null,_u=null,Nu=0,zu=0,Au=null,Ou=!1,Ru=!1,Iu=!1,Mu=0,Du=0,$u=0,Fu=0,Hu=0,Bu=0,Uu=0,Vu=null,Wu=null,Gu=!1,qu=0,Ju=0,Ku=1/0,Yu=null,Qu=null,Xu=0,Zu=null,ed=null,td=0,nd=0,rd=null,od=null,ad=null,id=null,ld=null,sd=0,cd=null;function ud(){return 0!==(2&Lu)&&0!==Nu?Nu&-Nu:null!==Q.T?cp():nt()}function dd(){if(0===Bu)if(0===(536870912&Nu)||$o){var e=He;0===(3932160&(He<<=1))&&(He=262144),Bu=e}else Bu=536870912;return null!==(e=si.current)&&(e.flags|=32),Bu}function pd(e,t){if(null!=t){var n=e.stateNode,r=n.ref;null===r&&(r=n.ref=ah(Yr(e.memoizedProps,n))),null===id&&(id=[]),id.push(t.bind(null,r))}}function hd(e,t,n){(e!==Pu||2!==zu&&9!==zu)&&null===e.cancelPendingCommit||(xd(e,0),vd(e,Nu,Bu,!1)),Ye(e,n),0!==(2&Lu)&&e===Pu||(e===Pu&&(0===(2&Lu)&&(Fu|=n),4===Du&&vd(e,Nu,Bu,!1)),np(e))}function fd(e,t,n){if(0!==(6&Lu))throw Error(a(327));for(var r=!n&&0===(127&t)&&0===(t&e.expiredLanes)||We(e,t),o=r?function(e,t){var n=Lu;Lu|=2;var r=Sd(),o=jd();Pu!==e||Nu!==t?(Yu=null,Ku=Ee()+500,xd(e,t)):Ru=We(e,t);e:for(;;)try{if(0!==zu&&null!==_u){t=_u;var i=Au;t:switch(zu){case 1:zu=0,Au=null,Nd(e,t,i,1);break;case 2:case 9:if(Na(i)){zu=0,Au=null,_d(t);break}t=function(){2!==zu&&9!==zu||Pu!==e||(zu=7),np(e)},i.then(t,t);break e;case 3:zu=7;break e;case 4:zu=5;break e;case 7:Na(i)?(zu=0,Au=null,_d(t)):(zu=0,Au=null,Nd(e,t,i,7));break;case 5:var l=null;switch(_u.tag){case 26:l=_u.memoizedState;case 5:case 27:var s=_u;if(l?rf(l):s.stateNode.complete){zu=0,Au=null;var c=s.sibling;if(null!==c)_u=c;else{var u=s.return;null!==u?(_u=u,zd(u)):_u=null}break t}}zu=0,Au=null,Nd(e,t,i,5);break;case 6:zu=0,Au=null,Nd(e,t,i,6);break;case 8:yd(),Du=6;break e;default:throw Error(a(462))}}Ld();break}catch(d){wd(e,d)}return Xo=Qo=null,Q.H=r,Q.A=o,Lu=n,null!==_u?0:(Pu=null,Nu=0,ro(),Du)}(e,t):Cd(e,t,!0),i=r;;){if(0===o){Ru&&!r&&vd(e,t,0,!1);break}if(n=e.current.alternate,!i||gd(n)){if(2===o){if(i=t,e.errorRecoveryDisabledLanes&i)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;o=Vu;var c=s.current.memoizedState.isDehydrated;if(c&&(xd(s,l).flags|=256),2!==(l=Cd(s,l,!1))&&6!==l){if(Iu&&!c){s.errorRecoveryDisabledLanes|=i,Fu|=i,o=4;break e}i=Wu,Wu=o,null!==i&&(null===Wu?Wu=i:Wu.push.apply(Wu,i))}o=l}if(i=!1,2!==o)continue}}if(1===o){xd(e,0),vd(e,t,0,!0);break}e:{switch(r=e,i=o){case 0:case 1:throw Error(a(345));case 4:if((4194048&t)!==t&&(62914560&t)!==t)break;case 6:vd(r,t,Bu,!Ou);break e;case 2:Wu=null;break;case 3:case 5:break;default:throw Error(a(329))}if((62914560&t)===t&&10<(o=qu+300-Ee())){if(vd(r,t,Bu,!Ou),0!==Ve(r,0,!0))break e;td=t,r.timeoutHandle=Up(md.bind(null,r,n,Wu,Yu,Gu,t,Bu,Fu,Uu,Ou,i,"Throttled",-0,0),o)}else md(r,n,Wu,Yu,Gu,t,Bu,Fu,Uu,Ou,i,null,-0,0)}break}o=Cd(e,t,!1),i=!1}np(e)}function md(e,t,n,r,o,a,i,l,s,c,u,d,p,h){e.timeoutHandle=-1;var f,m,g=t.subtreeFlags,v=(335544064&a)===a;if(d=null,(v||8192&g||16785408===(16785408&g))&&(mc=null,xu(t,a,d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt}),v&&(g=d,null!=(v=(9===(v=e.containerInfo).nodeType?v:v.ownerDocument).__reactViewTransition)&&(g.count++,g.waitingForViewTransition=!0,g=cf.bind(g),v.finished.then(g,g))),g=(62914560&a)===a?qu-Ee():(4194048&a)===a?Ju-Ee():0,m=g,(f=d).stylesheets&&0===f.count&&pf(f,f.stylesheets),null!==(g=0<f.count||0<f.imgCount?function(e){var t=setTimeout(function(){if(f.stylesheets&&pf(f,f.stylesheets),f.unsuspend){var e=f.unsuspend;f.unsuspend=null,e()}},6e4+m);0<f.imgBytes&&0===lf&&(lf=62500*function(){if("function"===typeof performance.getEntriesByType){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var o=n[r],a=o.transferSize,i=o.initiatorType,l=o.duration;if(a&&l&&Op(i)){for(i=0,l=o.responseEnd,r+=1;r<n.length;r++){var s=n[r],c=s.startTime;if(c>l)break;var u=s.transferSize,d=s.initiatorType;u&&Op(d)&&(i+=u*((s=s.responseEnd)<l?1:(l-c)/(s-c)))}if(--r,t+=8*(a+i)/(o.duration/1e3),10<++e)break}}if(0<e)return t/e/1e6}return navigator.connection&&"number"===typeof(e=navigator.connection.downlink)?e:5}());var n=setTimeout(function(){if(f.waitingForImages=!1,0===f.count&&(f.stylesheets&&pf(f,f.stylesheets),f.unsuspend)){var e=f.unsuspend;f.unsuspend=null,e()}},(f.imgBytes>lf?50:800)+m);return f.unsuspend=e,function(){f.unsuspend=null,clearTimeout(t),clearTimeout(n)}}:null)))return td=a,e.cancelPendingCommit=g(Od.bind(null,e,t,a,n,r,o,i,l,s,c,u,d,null,p,h)),void vd(e,a,i,!c);Od(e,t,a,n,r,o,i,l,s,c,u,d)}function gd(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!xr(a(),o))return!1}catch(i){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vd(e,t,n,r){t=Ge(e,t),t&=~Hu,t&=~Fu,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var o=t;0<o;){var a=31-Me(o),i=1<<a;r[a]=-1,o&=~i}0!==n&&Qe(e,n,t)}function bd(){return 0!==(6&Lu)||(rp(0,!1),!1)}function yd(){if(null!==_u){if(0===zu)var e=_u.return;else Xo=Qo=null,Di(e=_u),Ma=null,Da=0,e=_u;for(;null!==e;)Ks(e.alternate,e),e=e.return;_u=null}}function xd(e,t){var n=e.timeoutHandle;return-1!==n&&(e.timeoutHandle=-1,Vp(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),td=0,yd(),Pu=e,_u=n=fo(e.current,null),Nu=t,zu=0,Au=null,Ou=!1,Ru=We(e,t),Iu=!1,Uu=Bu=Hu=Fu=$u=Du=0,Wu=Vu=null,Gu=!1,Mu=Ge(e,t),ro(),n}function wd(e,t){xi=null,Q.H=Gl,t===Ta||t===Pa?(t=Ra(),zu=3):t===La?(t=Ra(),zu=4):zu=t===cs?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,Au=t,null===_u&&(Du=1,os(e,ko(t,e.current)))}function kd(){var e=si.current;return null===e||((4194048&Nu)===Nu?null===ci:((62914560&Nu)===Nu||0!==(536870912&Nu))&&e===ci)}function Sd(){var e=Q.H;return Q.H=Gl,null===e?Gl:e}function jd(){var e=Q.A;return Q.A=Cu,e}function Ed(){Du=4,Ou||(4194048&Nu)!==Nu&&null!==si.current||(Ru=!0),0===(134217727&$u)&&0===(134217727&Fu)||null===Pu||vd(Pu,Nu,Bu,!1)}function Cd(e,t,n){var r=Lu;Lu|=2;var o=Sd(),a=jd();Pu===e&&Nu===t||(Yu=null,xd(e,t)),t=!1;var i=Du;e:for(;;)try{if(0!==zu&&null!==_u){var l=_u,s=Au;switch(zu){case 8:yd(),i=6;break e;case 3:case 2:case 9:case 6:null===si.current&&(t=!0);var c=zu;if(zu=0,Au=null,Nd(e,l,s,c),n&&Ru){i=0;break e}break;default:c=zu,zu=0,Au=null,Nd(e,l,s,c)}}Td(),i=Du;break}catch(u){wd(e,u)}return t&&e.shellSuspendCounter++,Xo=Qo=null,Lu=r,Q.H=o,Q.A=a,null===_u&&(Pu=null,Nu=0,ro()),i}function Td(){for(;null!==_u;)Pd(_u)}function Ld(){for(;null!==_u&&!Se();)Pd(_u)}function Pd(e){var t=Fs(e.alternate,e,Mu);e.memoizedProps=e.pendingProps,null===t?zd(e):_u=t}function _d(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ks(n,t,t.pendingProps,t.type,void 0,Nu);break;case 11:t=ks(n,t,t.pendingProps,t.type.render,t.ref,Nu);break;case 5:Di(t);var r=t;r===Mo&&($o?(Wo(r),5===r.tag&&null!=r.stateNode&&(Do=r.stateNode)):(Wo(r),$o=!0));default:Ks(n,t),t=Fs(n,t=_u=mo(t,Mu),Mu)}e.memoizedProps=e.pendingProps,null===t?zd(e):_u=t}function Nd(e,t,n,r){Xo=Qo=null,Di(t),Ma=null,Da=0;var o=t.return;try{if(function(e,t,n,r,o){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&ra(t,n,o,!0),null!==(n=si.current)){switch(n.tag){case 31:case 13:case 19:return null===ci?Ed():null===n.alternate&&0===Du&&(Du=3),n.flags&=-257,n.flags|=65536,n.lanes=o,r===_a?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),Wd(e,r,o)),!1;case 22:return n.flags|=65536,r===_a?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),Wd(e,r,o)),!1}throw Error(a(435,n.tag))}return Wd(e,r,o),Ed(),!1}if($o)return null!==(t=si.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=o,r!==Bo&&Ko(ko(e=Error(a(422),{cause:r}),n))):(r!==Bo&&Ko(ko(t=Error(a(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,o&=-o,e.lanes|=o,r=ko(r,n),Qa(e,o=is(e.stateNode,r,o)),4!==Du&&(Du=2)),!1;var i=Error(a(520),{cause:r});if(i=ko(i,n),null===Vu?Vu=[i]:Vu.push(i),4!==Du&&(Du=2),null===t)return!0;r=ko(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,Qa(n,e=is(n.stateNode,r,e)),!1;case 1:if(t=n.type,i=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==i&&"function"===typeof i.componentDidCatch&&(null===Qu||!Qu.has(i))))return n.flags|=65536,o&=-o,n.lanes|=o,ss(o=ls(o),e,n,r),Qa(n,o),!1;break;case 22:if(null!==n.memoizedState)return n.flags|=65536,!1}n=n.return}while(null!==n);return!1}(e,o,t,n,Nu))return Du=1,os(e,ko(n,e.current)),void(_u=null)}catch(i){if(null!==o)throw _u=o,i;return Du=1,os(e,ko(n,e.current)),void(_u=null)}32768&t.flags?($o||1===r?e=!0:Ru||0!==(536870912&Nu)?e=!1:(Ou=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=si.current)&&13===r.tag&&(r.flags|=16384))),Ad(t,e)):zd(t)}function zd(e){var t=e;do{if(0!==(32768&t.flags))return void Ad(t,Ou);e=t.return;var n=qs(t.alternate,t,Mu);if(null!==n)return void(_u=n);if(null!==(t=t.sibling))return void(_u=t);_u=t=e}while(null!==t);0===Du&&(Du=5)}function Ad(e,t){do{var n=Js(e.alternate,e);if(null!==n)return n.flags&=32767,void(_u=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(_u=e);_u=e=n}while(null!==e);Du=6,_u=null}function Od(e,t,n,r,o,i,l,s,c,u,d,p){e.cancelPendingCommit=null;do{Hd()}while(0!==Xu);if(0!==(6&Lu))throw Error(a(327));if(null!==t){if(t===e.current)throw Error(a(177));e===Pu&&(_u=Pu=null,Nu=0),ed=t,Zu=e,td=n,rd=o,od=r,function(e,t,n,r,o,a,i){var l=t.lanes|t.childLanes;if(nd=l,function(e,t,n,r,o,a){var i=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,c=e.hiddenUpdates;for(n=i&~n;0<n;){var u=31-Me(n),d=1<<u;l[u]=0,s[u]=-1;var p=c[u];if(null!==p)for(c[u]=null,u=0;u<p.length;u++){var h=p[u];null!==h&&(h.lane&=-536870913)}n&=~d}0!==r&&Qe(e,r,0),0!==a&&0===o&&0!==e.tag&&(e.suspendedLanes|=a&~(i&~t))}(e,n,l|=no,r,o,a),id=null,(335544064&n)===n?(ld=function(e){var t=e.transitionTypes;return e.transitionTypes=null,t}(e),r=10262):(ld=null,r=10256),0!==(t.subtreeFlags&r)||0!==(t.flags&r)?(e.callbackNode=null,e.callbackPriority=0,function(e,t){we(e,t)}(Pe,function(){return Bd(),null})):(e.callbackNode=null,e.callbackPriority=0),fc=!1,r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=Q.T,Q.T=null,o=X.p,X.p=2,a=Lu,Lu|=4;try{!function(e,t,n){if(e=e.containerInfo,Rp=Sf,Tr(e=Cr(e))){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var o=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(o&&0!==o.rangeCount){r=o.anchorNode;var a=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{r.nodeType,i.nodeType}catch(m){r=null;break e}var l=0,s=-1,c=-1,u=0,d=0,p=e,h=null;t:for(;;){for(var f;p!==r||0!==a&&3!==p.nodeType||(s=l+a),p!==i||0!==o&&3!==p.nodeType||(c=l+o),3===p.nodeType&&(l+=p.nodeValue.length),null!==(f=p.firstChild);)h=p,p=f;for(;;){if(p===e)break t;if(h===r&&++u===a&&(s=l),h===i&&++d===o&&(c=l),null!==(f=p.nextSibling))break;h=(p=h).parentNode}p=f}r=-1===s||-1===c?null:{start:s,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ip={focusedElem:e,selectionRange:r},Sf=!1,Dc=t,t=(n=(335544064&n)===n)?9270:1024;null!==Dc;){if(e=Dc,n&&null!==(r=e.deletions))for(a=0;a<r.length;a++)n&&Cc(r[a]);if(null===e.alternate&&0!==(2&e.flags))n&&gc(e),Uc(n);else{if(22===e.tag){if(r=e.alternate,null!==e.memoizedState){null!==r&&null===r.memoizedState&&n&&Cc(r),Uc(n);continue}if(null!==r&&null!==r.memoizedState){n&&gc(e),Uc(n);continue}}r=e.child,0!==(e.subtreeFlags&t)&&null!==r?(r.return=e,Dc=r):(n&&Tc(e),Uc(n))}}mc=null}(e,t,n)}finally{Lu=a,X.p=o,Q.T=r}}Xu=1,fc?ad=function(e,t,n,r,o,a,i,l,s){var c=9===t.nodeType?t:t.ownerDocument;try{var u=c.startViewTransition({update:function(){var t=c.defaultView,n=t.navigation&&t.navigation.transition,i=c.fonts.status;r();var l=[];if("loaded"===i&&(function(e){e.documentElement.clientHeight}(c),"loading"===c.fonts.status&&l.push(c.fonts.ready)),i=l.length,null!==e)for(var s=e.suspenseyImages,u=0,d=0;d<s.length;d++){var p=s[d];if(!p.complete){var h=p.getBoundingClientRect();if(0<h.bottom&&0<h.right&&h.top<t.innerHeight&&h.left<t.innerWidth){if((u+=of(p))>lf){l.length=i;break}p=new Promise(rh.bind(p)),l.push(p)}}}return 0<l.length?(t=Promise.race([Promise.all(l),new Promise(function(e){return setTimeout(e,500)})]).then(o,o),(n?Promise.allSettled([n.finished,t]):t).then(a,a)):(o(),n?n.finished.then(a,a):void a())},types:n});c.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=c.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,o=r.pseudoElement;if(null!=o&&o.startsWith("::view-transition")){d.push(n),n=r.getKeyframes();for(var a=o=void 0,l=!0,s=0;s<n.length;s++){var u=n[s],p=u.width;if(void 0===o)o=p;else if(o!==p){l=!1;break}if(p=u.height,void 0===a)a=p;else if(a!==p){l=!1;break}delete u.width,delete u.height,"none"===u.transform&&delete u.transform}l&&void 0!==o&&void 0!==a&&(r.setKeyframes(n),(l=getComputedStyle(r.target,r.pseudoElement)).width!==o||l.height!==a)&&((l=n[0]).width=o,l.height=a,(l=n[n.length-1]).width=o,l.height=a,r.setKeyframes(n))}}i()},function(e){c.__reactViewTransition===u&&(c.__reactViewTransition=null);try{if("object"===typeof e&&null!==e&&"InvalidStateError"===e.name)"View transition was skipped because document visibility state is hidden."!==e.message&&"Skipping view transition because document visibility state has become hidden."!==e.message&&"Skipping view transition because viewport size changed."!==e.message&&"Transition was aborted because of invalid state"!==e.message||(e=null);null!==e&&s(e)}finally{r(),o(),i()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();c.__reactViewTransition===u&&(c.__reactViewTransition=null),l()}),u}catch(p){return r(),o(),i(),null}}(i,e.containerInfo,ld,Md,Dd,Id,$d,Bd,Rd):(Md(),Dd(),$d())}(e,t,n,l,s,c,p)}}function Rd(e){0!==Xu&&(0,Zu.onRecoverableError)(e,{componentStack:null})}function Id(){3===Xu&&(Xu=0,su(ed,Zu),Xu=4)}function Md(){if(1===Xu){Xu=0;var e=Zu,t=ed,n=td,r=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||r){r=Q.T,Q.T=null;var o=X.p;X.p=2;var a=Lu;Lu|=4;try{Fc=Hc=!1,ou(t,e,n),n=Ip;var i=Cr(e.containerInfo),l=n.focusedElem,s=n.selectionRange;if(i!==l&&l&&l.ownerDocument&&Er(l.ownerDocument.documentElement,l)){if(null!==s&&Tr(l)){var c=s.start,u=s.end;if(void 0===u&&(u=c),"selectionStart"in l)l.selectionStart=c,l.selectionEnd=Math.min(u,l.value.length);else{var d=l.ownerDocument||document,p=d&&d.defaultView||window;if(p.getSelection){var h=p.getSelection(),f=l.textContent.length,m=Math.min(s.start,f),g=void 0===s.end?m:Math.min(s.end,f);!h.extend&&m>g&&(i=g,g=m,m=i);var v=jr(l,m),b=jr(l,g);if(v&&b&&(1!==h.rangeCount||h.anchorNode!==v.node||h.anchorOffset!==v.offset||h.focusNode!==b.node||h.focusOffset!==b.offset)){var y=d.createRange();y.setStart(v.node,v.offset),h.removeAllRanges(),m>g?(h.addRange(y),h.extend(b.node,b.offset)):(y.setEnd(b.node,b.offset),h.addRange(y))}}}}for(d=[],h=l;h=h.parentNode;)1===h.nodeType&&d.push({element:h,left:h.scrollLeft,top:h.scrollTop});for("function"===typeof l.focus&&l.focus(),l=0;l<d.length;l++){var x=d[l];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Sf=!!Rp,Ip=Rp=null}finally{Lu=a,X.p=o,Q.T=r}}e.current=t,Xu=2}}function Dd(){if(2===Xu){Xu=0;var e=Zu,t=ed,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=Q.T,Q.T=null;var r=X.p;X.p=2;var o=Lu;Lu|=4;try{Vc(e,t.alternate,t)}finally{Lu=o,X.p=r,Q.T=n}}Xu=3}}function $d(){if(4===Xu||3===Xu){Xu=0;var e=ad;ad=null,je();var t=Zu,n=ed,r=td,o=od,a=(335544064&r)===r?10262:10256;if(0!==(n.subtreeFlags&a)||0!==(n.flags&a)?Xu=5:(Xu=0,ed=Zu=null,Fd(t,t.pendingLanes)),0===(a=t.pendingLanes)&&(Qu=null),tt(r),n=n.stateNode,Re&&"function"===typeof Re.onCommitFiberRoot)try{Re.onCommitFiberRoot(Oe,n,void 0,128===(128&n.current.flags))}catch(c){}if(null!==o){n=Q.T,a=X.p,X.p=2,Q.T=null;try{for(var i=t.onRecoverableError,l=0;l<o.length;l++){var s=o[l];i(s.value,{componentStack:s.stack})}}finally{Q.T=n,X.p=a}}if(i=ld,ld=null,null!==(o=id)&&(id=null,null===i&&(i=[]),null!==e))for(s=0;s<o.length;s++)void 0!==(n=(0,o[s])(i))&&e.finished.finally(n);0!==(3&td)&&Hd(),np(t),a=t.pendingLanes,0!==(261930&r)&&0!==(42&a)?t===cd?sd++:(sd=0,cd=t):(sd=0,cd=null),rp(0,!1)}}function Fd(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,fa(t)))}function Hd(){return null!==ad&&(ad.skipTransition(),ad=null),Md(),Dd(),$d(),Bd()}function Bd(){if(5!==Xu)return!1;var e=Zu,t=nd;nd=0;var n=tt(td),r=Q.T,o=X.p;try{X.p=32>n?32:n,Q.T=null,n=rd,rd=null;var i=Zu,l=td;if(Xu=0,ed=Zu=null,td=0,0!==(6&Lu))throw Error(a(331));var s=Lu;if(Lu|=4,Su(i.current),mu(i,i.current,l,n),Lu=s,rp(0,!1),Re&&"function"===typeof Re.onPostCommitFiberRoot)try{Re.onPostCommitFiberRoot(Oe,i)}catch(c){}return!0}finally{X.p=o,Q.T=r,Fd(e,t)}}function Ud(e,t,n){t=ko(n,t),null!==(e=Ka(e,t=is(e.stateNode,t,2),2))&&(Ye(e,2),np(e))}function Vd(e,t,n){if(3===e.tag)Ud(e,e,n);else for(;null!==t;){if(3===t.tag){Ud(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Qu||!Qu.has(r))){e=ko(n,e),null!==(r=Ka(t,n=ls(2),2))&&(ss(n,r,t,e),Ye(r,2),np(r));break}}t=t.return}}function Wd(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new Tu;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(Iu=!0,o.add(n),e=Gd.bind(null,e,t,n),t.then(e,e))}function Gd(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Pu===e&&(Nu&n)===n&&((4===Du||3===Du&&(62914560&Nu)===Nu&&300>Ee()-qu)&&0===(2&Lu)?xd(e,0):Hu|=n,Uu===Nu&&(Uu=0)),np(e)}function qd(e,t){0===t&&(t=Je()),null!==(e=io(e,t))&&(Ye(e,t),np(e))}function Jd(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),qd(e,n)}function Kd(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}null!==r&&r.delete(t),qd(e,n)}var Yd=null,Qd=null,Xd=!1,Zd=!1,ep=!1,tp=0;function np(e){e!==Qd&&null===e.next&&(null===Qd?Yd=Qd=e:Qd=Qd.next=e),Zd=!0,Xd||(Xd=!0,qp(function(){0!==(6&Lu)?we(Te,op):ap()}))}function rp(e,t){if(!ep&&Zd){ep=!0;do{for(var n=!1,r=Yd;null!==r;){if(!t)if(0!==e){var o=r.pendingLanes;if(0===o)var a=0;else{var i=r.suspendedLanes,l=r.pingedLanes;a=(1<<31-Me(42|e)+1)-1,a=201326741&(a&=o&~(i&~l))?201326741&a|1:a?2|a:0}0!==a&&(n=!0,sp(r,a))}else a=Nu,0===(3&(a=Ve(r,r===Pu?a:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||We(r,a)||(n=!0,sp(r,a));r=r.next}}while(n);ep=!1}}function op(){ap()}function ap(){Zd=Xd=!1;var e=0;0!==tp&&function(){var e=window.event;if(e&&"popstate"===e.type)return e!==Bp&&(Bp=e,!0);return Bp=null,!1}()&&(e=tp);for(var t=Ee(),n=null,r=Yd;null!==r;){var o=r.next,a=ip(r,t);0===a?(r.next=null,null===n?Yd=o:n.next=o,null===o&&(Qd=n)):(n=r,(0!==e||0!==(3&a))&&(Zd=!0)),r=o}0!==Xu&&5!==Xu||rp(e,!1),0!==tp&&(tp=0)}function ip(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=-62914561&e.pendingLanes;0<a;){var i=31-Me(a),l=1<<i,s=o[i];-1===s?0!==(l&n)&&0===(l&r)||(o[i]=qe(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}if(n=Nu,n=Ve(e,e===(t=Pu)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===zu||9===zu)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&ke(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||We(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&ke(r),tt(n)){case 2:case 8:n=Le;break;case 32:default:n=Pe;break;case 268435456:n=Ne}return r=lp.bind(null,e),n=we(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&ke(r),e.callbackPriority=2,e.callbackNode=null,2}function lp(e,t){if(0!==Xu&&5!==Xu)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hd()&&e.callbackNode!==n)return null;var r=Nu;return 0===(r=Ve(e,e===Pu?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(fd(e,r,t),ip(e,Ee()),null!=e.callbackNode&&e.callbackNode===n?lp.bind(null,e):null)}function sp(e,t){if(Hd())return null;fd(e,t,!0)}function cp(){if(0===tp){var e=ya;0===e&&(e=Fe,0===(261888&(Fe<<=1))&&(Fe=256)),tp=e}return tp}function up(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:Xt(e)}for(var dp=0;dp<qr.length;dp++){var pp=qr[dp];Jr(pp.toLowerCase(),"on"+(pp[0].toUpperCase()+pp.slice(1)))}Jr($r,"onAnimationEnd"),Jr(Fr,"onAnimationIteration"),Jr(Hr,"onAnimationStart"),Jr("dblclick","onDoubleClick"),Jr("focusin","onFocus"),Jr("focusout","onBlur"),Jr(Br,"onTransitionRun"),Jr(Ur,"onTransitionStart"),Jr(Vr,"onTransitionCancel"),Jr(Wr,"onTransitionEnd"),jt("onMouseEnter",["mouseout","mouseover"]),jt("onMouseLeave",["mouseout","mouseover"]),jt("onPointerEnter",["pointerout","pointerover"]),jt("onPointerLeave",["pointerout","pointerover"]),St("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),St("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),St("onBeforeInput",["compositionend","keypress","textInput","paste"]),St("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),St("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),St("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hp="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hp));function mp(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;a=l,o.currentTarget=c;try{a(o)}catch(u){Zr(u)}o.currentTarget=null,a=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,c=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;a=l,o.currentTarget=c;try{a(o)}catch(u){Zr(u)}o.currentTarget=null,a=s}}}}function gp(e,t){var n=t[st];void 0===n&&(n=t[st]=new Set);var r=e+"__bubble";n.has(r)||(xp(t,e,2,!1),n.add(r))}function vp(e,t,n){var r=0;t&&(r|=4),xp(n,e,r,t)}var bp="_reactListening"+Math.random().toString(36).slice(2);function yp(e){if(!e[bp]){e[bp]=!0,wt.forEach(function(t){"selectionchange"!==t&&(fp.has(t)||vp(t,!1,e),vp(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[bp]||(t[bp]=!0,vp("selectionchange",!1,t))}}function xp(e,t,n,r){switch(_f(t)){case 2:var o=jf;break;case 8:o=Ef;break;default:o=Cf}n=o.bind(null,t,n,e),o=void 0,!un||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function wp(e,t,n,r,o){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===o)break;if(4===i)for(i=r.return;null!==i;){var c=i.tag;if((3===c||4===c)&&i.stateNode.containerInfo===o)return;i=i.return}for(;null!==l;){if(null===(i=mt(l)))return;if(5===(c=i.tag)||6===c||26===c||27===c){r=a=i;continue e}l=l.parentNode}}r=r.return}ln(function(){var r=a,o=tn(n),i=[];e:{var l=Gr.get(e);if(void 0!==l){var c=jn,u=e;switch(e){case"keypress":if(0===gn(n))break e;case"keydown":case"keyup":c=$n;break;case"focusin":u="focus",c=_n;break;case"focusout":u="blur",c=_n;break;case"beforeblur":case"afterblur":c=_n;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=Ln;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=Pn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=Bn;break;case $r:case Fr:case Hr:c=Nn;break;case Wr:c=Un;break;case"scroll":case"scrollend":c=Cn;break;case"wheel":c=Vn;break;case"copy":case"cut":case"paste":c=zn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=Fn;break;case"submit":c=Hn;break;case"toggle":case"beforetoggle":c=Wn}var d=0!==(4&t),p=!d&&("scroll"===e||"scrollend"===e),h=d?null!==l?l+"Capture":null:l;d=[];for(var f,m=r;null!==m;){var g=m;if(f=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===f||null===h||null!=(g=sn(m,h))&&d.push(kp(m,g,f)),p)break;m=m.return}0<d.length&&(l=new c(l,u,null,n,o),i.push({event:l,listeners:d}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(c="mouseover"===e||"pointerover"===e)&&n!==en&&(u=n.relatedTarget||n.fromElement)&&(mt(u)||u[lt])||(l||c)&&(u=o.window===o?o:(c=o.ownerDocument)?c.defaultView||c.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?mt(c):null)&&(p=s(c),d=c.tag,c!==p||5!==d&&27!==d&&6!==d)&&(c=null)):(l=null,c=r),l!==c&&(d=Ln,g="onMouseLeave",h="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=Fn,g="onPointerLeave",h="onPointerEnter",m="pointer"),p=null==l?u:vt(l),f=null==c?u:vt(c),(u=new d(g,m+"leave",l,n,o)).target=p,u.relatedTarget=f,g=null,mt(o)===r&&((d=new d(h,m+"enter",c,n,o)).target=f,d.relatedTarget=p,g=d),p=g,d=l&&c?C(l,c,jp):null,null!==l&&Ep(i,u,l,d,!1),null!==c&&null!==p&&Ep(i,p,c,d,!0))),"select"===(c=(l=r?vt(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===c&&"file"===l.type)var v=cr;else if(rr(l))if(ur)v=yr;else{v=vr;var b=gr}else!(c=l.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?r&&Kt(r.elementType)&&(v=cr):v=br;switch(v&&(v=v(e,r))?or(i,v,n,o):b&&b(e,l,r),b=r?vt(r):window,e){case"focusin":(rr(b)||"true"===b.contentEditable)&&(Pr=b,_r=r,Nr=null);break;case"focusout":Nr=_r=Pr=null;break;case"mousedown":zr=!0;break;case"contextmenu":case"mouseup":case"dragend":zr=!1,Ar(i,n,o);break;case"selectionchange":if(Lr)break;case"keydown":case"keyup":Ar(i,n,o)}var y;if(qn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else tr?Zn(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(Yn&&"ko"!==n.locale&&(tr||"onCompositionStart"!==x?"onCompositionEnd"===x&&tr&&(y=mn()):(hn="value"in(pn=o)?pn.value:pn.textContent,tr=!0)),0<(b=Sp(r,x)).length&&(x=new An(x,e,null,n,o),i.push({event:x,listeners:b}),y?x.data=y:null!==(y=er(n))&&(x.data=y))),(y=Kn?function(e,t){switch(e){case"compositionend":return er(t);case"keypress":return 32!==t.which?null:(Xn=!0,Qn);case"textInput":return(e=t.data)===Qn&&Xn?null:e;default:return null}}(e,n):function(e,t){if(tr)return"compositionend"===e||!qn&&Zn(e,t)?(e=mn(),fn=hn=pn=null,tr=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(x=Sp(r,"onBeforeInput")).length&&(b=new An("onBeforeInput","beforeinput",null,n,o),i.push({event:b,listeners:x}),b.data=y)),function(e,t,n,r,o){if("submit"===t&&n&&n.stateNode===o){var a=up((o[it]||null).action),i=r.submitter;i&&null!==(t=(t=i[it]||null)?up(t.formAction):i.getAttribute("formAction"))&&(a=t,i=null);var l=new jn("action","action",null,r,o);e.push({event:l,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==tp){var e=new FormData(o,i);zl(n,{pending:!0,data:e,method:o.method,action:a},null,e)}}else"function"===typeof a&&(l.preventDefault(),e=new FormData(o,i),zl(n,{pending:!0,data:e,method:o.method,action:a},a,e))},currentTarget:o}]})}}(i,e,r,n,o)}mp(i,t)})}function kp(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Sp(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,a=o.stateNode;if(5!==(o=o.tag)&&26!==o&&27!==o||null===a||(null!=(o=sn(e,n))&&r.unshift(kp(e,o,a)),null!=(o=sn(e,t))&&r.push(kp(e,o,a))),3===e.tag)return r;e=e.return}return[]}function jp(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Ep(e,t,n,r,o){for(var a=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(l=l.tag,null!==s&&s===r)break;5!==l&&26!==l&&27!==l||null===c||(s=c,o?null!=(c=sn(n,a))&&i.unshift(kp(n,c,s)):o||null!=(c=sn(n,a))&&i.push(kp(n,c,s))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var Cp=/\r\n?/g,Tp=/\u0000|\uFFFD/g;function Lp(e){return("string"===typeof e?e:""+e).replace(Cp,"\n").replace(Tp,"")}function Pp(e,t){return t=Lp(t),Lp(e)===t}function _p(e,t,n,r,o,i){switch(n){case"children":if("string"===typeof r)"body"===t||"textarea"===t&&""===r||Wt(e,r);else{if("number"!==typeof r&&"bigint"!==typeof r)return;"body"!==t&&Wt(e,""+r)}break;case"className":Nt(e,"class",r);break;case"tabIndex":Nt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Nt(e,n,r);break;case"style":return void Jt(e,r,i);case"data":if("object"!==t){Nt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Xt(r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof i&&("formAction"===n?("input"!==t&&_p(e,t,"name",o.name,o,null),_p(e,t,"formEncType",o.formEncType,o,null),_p(e,t,"formMethod",o.formMethod,o,null),_p(e,t,"formTarget",o.formTarget,o,null)):(_p(e,t,"encType",o.encType,o,null),_p(e,t,"method",o.method,o,null),_p(e,t,"target",o.target,o,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Xt(r),e.setAttribute(n,r);break;case"onClick":return void(null!=r&&(e.onclick=Zt));case"onScroll":return void(null!=r&&gp("scroll",e));case"onScrollEnd":return void(null!=r&&gp("scrollend",e));case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=o.children)throw Error(a(60));(null!=i?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=Xt(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":gp("beforetoggle",e),gp("toggle",e),_t(e,"popover",r);break;case"xlinkActuate":zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":zt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":zt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":zt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":zt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":_t(e,"is",r);break;case"innerText":case"textContent":return;default:if(2<n.length&&("o"===n[0]||"O"===n[0])&&("n"===n[1]||"N"===n[1]))return;_t(e,n=Yt.get(n)||n,r)}Lt=!0}function Np(e,t,n,r,o,i){switch(n){case"style":return void Jt(e,r,i);case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=o.children)throw Error(a(60));(null!=i?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"children":if("string"===typeof r)Wt(e,r);else{if("number"!==typeof r&&"bigint"!==typeof r)return;Wt(e,""+r)}break;case"onScroll":return void(null!=r&&gp("scroll",e));case"onScrollEnd":return void(null!=r&&gp("scrollend",e));case"onClick":return void(null!=r&&(e.onclick=Zt));case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":return;default:return void(kt.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(o=n.endsWith("Capture"),i=n.slice(2,o?n.length-7:void 0),"function"===typeof(t=null!=(t=e[it]||null)?t[n]:null)&&e.removeEventListener(i,t,o),"function"!==typeof r)?(Lt=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,""):_t(e,n,r)):("function"!==typeof t&&null!==t&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(i,r,o))))}Lt=!0}function zp(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gp("error",e),gp("load",e);var r,o=!1,i=!1;for(r in n)if(n.hasOwnProperty(r)){var l=n[r];if(null!=l)switch(r){case"src":o=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:_p(e,t,r,l,n,null)}}return i&&_p(e,t,"srcSet",n.srcSet,n,null),void(o&&_p(e,t,"src",n.src,n,null));case"input":gp("invalid",e);var s=r=l=i=null,c=null,u=null;for(o in n)if(n.hasOwnProperty(o)){var d=n[o];if(null!=d)switch(o){case"name":i=d;break;case"type":l=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(a(137,t));break;default:_p(e,t,o,d,n,null)}}return void Ft(e,r,s,c,u,l,i,!1);case"select":for(i in gp("invalid",e),o=l=r=null,n)if(n.hasOwnProperty(i)&&null!=(s=n[i]))switch(i){case"value":r=s;break;case"defaultValue":l=s;break;case"multiple":o=s;default:_p(e,t,i,s,n,null)}return t=r,n=l,e.multiple=!!o,void(null!=t?Bt(e,!!o,t,!1):null!=n&&Bt(e,!!o,n,!0));case"textarea":for(l in gp("invalid",e),r=i=o=null,n)if(n.hasOwnProperty(l)&&null!=(s=n[l]))switch(l){case"value":o=s;break;case"defaultValue":i=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(a(91));break;default:_p(e,t,l,s,n,null)}return void Vt(e,o,i,r);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(o=n[c]))if("selected"===c)e.selected=o&&"function"!==typeof o&&"symbol"!==typeof o;else _p(e,t,c,o,n,null);return;case"dialog":gp("beforetoggle",e),gp("toggle",e),gp("cancel",e),gp("close",e);break;case"iframe":case"object":gp("load",e);break;case"video":case"audio":for(o=0;o<hp.length;o++)gp(hp[o],e);break;case"image":gp("error",e),gp("load",e);break;case"details":gp("toggle",e);break;case"embed":case"source":case"link":gp("error",e),gp("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(o=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:_p(e,t,u,o,n,null)}return;default:if(Kt(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(o=n[d])&&Np(e,t,d,o,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(o=n[s])&&_p(e,t,s,o,n,null))}var Ap={};function Op(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}var Rp=null,Ip=null;function Mp(e){return 9===e.nodeType?e:e.ownerDocument}function Dp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $p(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function Fp(e,t,n,r){return(n=Mp(n).createElement(e))[at]=r,n[it]=t,zp(n,e,t),yt(n),n}function Hp(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Bp=null;var Up="function"===typeof setTimeout?setTimeout:void 0,Vp="function"===typeof clearTimeout?clearTimeout:void 0,Wp="function"===typeof Promise?Promise:void 0,Gp="function"===typeof requestAnimationFrame?requestAnimationFrame:Up,qp="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Wp?function(e){return Wp.resolve(null).then(e).catch(Jp)}:Up;function Jp(e){setTimeout(function(){throw e})}function Kp(e){return"head"===e}function Yp(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)||"/&"===n){if(0===r)return e.removeChild(o),void Jf(t);r--}else if("$"===n||"$?"===n||"$~"===n||"$!"===n||"&"===n)r++;else if("html"===n)Ih(e.ownerDocument.documentElement);else if("head"===n){Ih(n=e.ownerDocument.head);for(var a=n.firstChild;a;){var i=a.nextSibling,l=a.nodeName;a[pt]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===a.rel.toLowerCase()||n.removeChild(a),a=i}}else"body"===n&&Ih(e.ownerDocument.body);n=o}while(n);Jf(t)}function Qp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(1===n.nodeType?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",""===n.getAttribute("style")&&n.removeAttribute("style")):3===n.nodeType&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&8===r.nodeType)if("/$"===(n=r.data)){if(0===e)break;e--}else"$"!==n&&"$?"!==n&&"$~"!==n&&"$!"!==n||e++;n=r}while(n)}function Xp(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,null!=n&&(e.style.viewTransitionClass=n),"inline"===(n=getComputedStyle(e)).display){if(1===(t=e.getClientRects()).length)var r=1;else for(var o=r=0;o<t.length;o++){var a=t[o];0<a.width&&0<a.height&&r++}1===r&&((e=e.style).display=1===t.length?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function Zp(e,t){e=e.style;var n=null!=(t=t.style)?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=null==n||"boolean"===typeof n?"":(""+n).trim(),n=null!=t?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=null==n||"boolean"===typeof n?"":(""+n).trim(),"inline-block"===e.display&&(null==t?e.display=e.margin="":(n=t.display,e.display=null==n||"boolean"===typeof n?"":n,null!=(n=t.margin)?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=null==n||"boolean"===typeof n?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=null==t||"boolean"===typeof t?"":t)))}function eh(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:"absolute"===t.position||"fixed"===t.position,clip:"none"!==t.clipPath||"visible"!==t.overflow||"none"!==t.filter||"none"!==t.mask||"none"!==t.mask||"0px"!==t.borderRadius,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function th(e){return eh(e.getBoundingClientRect(),getComputedStyle(e),e)}function nh(e){var t=e.getBoundingClientRect();return eh(t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height),getComputedStyle(e),e)}function rh(e){this.addEventListener("load",e),this.addEventListener("error",e)}function oh(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}function ah(e){return{name:e,group:new oh("group",e),imagePair:new oh("image-pair",e),old:new oh("old",e),new:new oh("new",e)}}function ih(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}function lh(e,t,n,r){return x(e).addEventListener(t,n,r),!1}function sh(e,t,n,r){return x(e).removeEventListener(t,n,r),!1}function ch(e){return null!=e&&"boolean"!==typeof e&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function uh(e){return null==e?"c=0":"boolean"===typeof e?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function dh(e,t,n,r){if(0===e.length)return-1;r=uh(r);for(var o=0;o<e.length;o++){var a=e[o];if(a.type===t&&a.listener===n&&uh(a.optionsOrUseCapture)===r)return o}return-1}function ph(e,t){return 6!==e.tag&&function(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return r}(e=x(e),t)}function hh(e,t){return t.push(e),!1}function fh(e,t){return 6!==e.tag&&(!((e=x(e))!==t&&!e.contains(t))&&(t.blur(),!0))}function mh(e,t){return 6===e.tag||(e=x(e),t.observe(e)),!1}function gh(e,t){return 6===e.tag||(e=x(e),t.unobserve(e)),!1}oh.prototype.animate=function(e,t){return(t="number"===typeof t?{duration:t}:T({},t)).pseudoElement=this._selector,this._scope.animate(e,t)},oh.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],o=0;o<n.length;o++){var a=n[o].effect;null!==a&&a.target===e&&a.pseudoElement===t&&r.push(n[o])}return r},oh.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)},ih.prototype.addEventListener=function(e,t,n){var r=null,o=null;if(null==n||"boolean"===typeof n||(null===(r=n.signal||null)||!r.aborted)){null===this._eventListeners&&(this._eventListeners=[]);var a=this._eventListeners;if(-1===dh(a,e,t,n)){var i=this,l=t;null!=n&&"boolean"!==typeof n&&!0===n.once&&(l=function(r){i.removeEventListener(e,t,n),"function"===typeof t?t.call(this,r):t.handleEvent(r)}),null!==r&&(o=i.removeEventListener.bind(i,e,t,n),r.addEventListener("abort",o,{once:!0}),o=r.removeEventListener.bind(r,"abort",o)),r=ch(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:l,cleanup:o}),m(this._fragmentFiber.child,!1,lh,e,l,r)}this._eventListeners=a}},ih.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(null!==r&&-1!==(t=dh(r,e,t,n))){var o=r[t];n=o.attachedListener;var a=o.cleanup;o=ch(o.optionsOrUseCapture),m(this._fragmentFiber.child,!1,sh,e,n,o),r.splice(t,1),null!==a&&a()}},ih.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(null===t)return!0;t=x(t);var n=this._eventListeners;if(null!==n&&0<n.length||!e.bubbles){var r=9===t.nodeType?t.createComment(""):document.createTextNode("");if(n)for(var o=0;o<n.length;o++){var a=n[o];r.addEventListener(a.type,a.attachedListener,ch(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(o=0;o<n.length;o++)a=n[o],r.removeEventListener(a.type,a.attachedListener,ch(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},ih.prototype.focus=function(e){m(this._fragmentFiber.child,!0,ph,e,void 0,void 0)},ih.prototype.focusLast=function(e){var t=[];m(this._fragmentFiber.child,!0,hh,t,void 0,void 0);for(var n=t.length-1;0<=n&&!ph(t[n],e);n--);},ih.prototype.blur=function(){var e=g(this._fragmentFiber);null!==e&&(null!==(e=Mp(e=x(e)).activeElement)&&m(this._fragmentFiber.child,!1,fh,e,void 0,void 0))},ih.prototype.observeUsing=function(e){null===this._observers&&(this._observers=new Set),this._observers.add(e),m(this._fragmentFiber.child,!1,mh,e,void 0,void 0)},ih.prototype.unobserveUsing=function(e){var t=this._observers;if(null!==t&&t.has(e)){t.delete(e),m(this._fragmentFiber.child,!1,gh,e,void 0,void 0);for(var n=t=0;n<vh.length;n++){var r=vh[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):vh[t++]=r}vh.length=t}};var vh=[],bh=!1;function yh(e,t,n){var r;vh.push({fragmentInstance:e,observer:t,instance:n}),bh||(bh=!0,r=function(){bh=!1;var e=vh;vh=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}},Gp(function(){Gp(function(e){return r(e)})}))}function xh(e,t){if(6===e.tag){var n=(e=e.stateNode).ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=x(e),t.push.apply(t,e.getClientRects());return!1}function wh(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}function kh(e,t){return Sh(e=x(e),t),!1}function Sh(e,t){null==e.reactFragments&&(e.reactFragments=new Set),e.reactFragments.add(t)}function jh(e,t){var n=t._eventListeners;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];e.addEventListener(o.type,o.attachedListener,ch(o.optionsOrUseCapture))}3!==e.nodeType&&(null!==(n=t._observers)&&n.forEach(function(n){for(var r=0,o=0;o<vh.length;o++){var a=vh[o];a.fragmentInstance===t&&a.observer===n&&a.instance===e||(vh[r++]=a)}vh.length=r,n.observe(e)}),Sh(e,t))}function Eh(e,t){var n=t._eventListeners;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];e.removeEventListener(o.type,o.attachedListener,ch(o.optionsOrUseCapture))}3!==e.nodeType&&(null!==(n=t._observers)&&n.forEach(function(n){"string"===typeof n.rootMargin?yh(t,n,e):n.unobserve(e)}),null!=e.reactFragments&&e.reactFragments.delete(t))}function Ch(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ch(n),ft(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function Th(e,t){for(;8!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!t)return null;if(null===(e=_h(e.nextSibling)))return null}return e}function Lh(e){return"$?"===e.data||"$~"===e.data}function Ph(e){return"$!"===e.data||"$?"===e.data&&"loading"!==e.ownerDocument.readyState}function _h(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"$~"===t||"&"===t||"F!"===t||"F"===t)break;if("/$"===t||"/&"===t)return null}}return e}ih.prototype.getClientRects=function(){var e=[];return m(this._fragmentFiber.child,!1,xh,e,void 0,void 0),e},ih.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return null===t?this:x(t).getRootNode(e)},ih.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(null===t)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];m(this._fragmentFiber.child,!1,hh,n,void 0,void 0);var r=x(t);if(0===n.length){if(n=r,v(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;null!==t;){if(4===t.tag){t=t.stateNode.containerInfo;break e}if(3===t.tag||5===t.tag||27===t.tag)break;t=t.return}t=null}null!=t&&(n=t)}t=this._fragmentFiber;var o=r=n.compareDocumentPosition(e);return n===e?o=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(null===(n=b(t)[1])?o=Node.DOCUMENT_POSITION_PRECEDING:o=0===(e=x(n).compareDocumentPosition(e))||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING),o|Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=x(n[0]),o=x(n[n.length-1]);var a=v(this._fragmentFiber)?t.parentElement:r;if(null==a)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(o)&Node.DOCUMENT_POSITION_CONTAINED_BY;var i=t.compareDocumentPosition(e),l=o.compareDocumentPosition(e),s=i&Node.DOCUMENT_POSITION_CONTAINED_BY||l&Node.DOCUMENT_POSITION_CONTAINED_BY;return l=r&&a&&i&Node.DOCUMENT_POSITION_FOLLOWING&&l&Node.DOCUMENT_POSITION_PRECEDING,(t=r&&t===e||a&&o===e||s||l?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&o===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:i)&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||function(e,t,n,r,o){var a=mt(o);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)e:{for(;null!==a;){if(7===a.tag&&(a===t||a.alternate===t)){n=!0;break e}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(null===a)return o===(a=o.ownerDocument)||o===a.documentElement||o===a.body;e:{for(a=t,t=g(t);null!==a;){if(!(5!==a.tag&&3!==a.tag&&27!==a.tag||a!==t&&a.alternate!==t)){a=!0;break e}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(null===(t=C(n,a,E))?t=!1:(m(t,!0,S,a,n),a=w,w=null,t=null!==a)),t):!!(e&Node.DOCUMENT_POSITION_FOLLOWING)&&((t=!!a)&&!(t=a===r)&&(null===(t=C(r,a,E))?t=!1:(m(t,!0,j,a,r),a=w,k=w=null,t=null!==a)),t)}(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC},ih.prototype.scrollIntoView=function(e){if("object"===typeof e)throw Error(a(566));var t=[];m(this._fragmentFiber.child,!1,hh,t,void 0,void 0);var n=!1!==e;if(0===t.length){var r=b(this._fragmentFiber);if(null===(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1]))return;if(6===r.tag)return void wh(e=x(r),n);if(9!==(r=x(r)).nodeType){if(11===r.nodeType)return void(null!==(n="host"in r?r.host:null)&&n.scrollIntoView(e));r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var o=t[r];6===o.tag?wh(o=x(o),n):x(o).scrollIntoView(e),r+=n?-1:1}};var Nh=null;function zh(e){e=e.nextSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n||"/&"===n){if(0===t)return _h(e.nextSibling);t--}else"$"!==n&&"$!"!==n&&"$?"!==n&&"$~"!==n&&"&"!==n||t++}e=e.nextSibling}return null}function Ah(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n||"$~"===n||"&"===n){if(0===t)return e;t--}else"/$"!==n&&"/&"!==n||t++}e=e.previousSibling}return null}function Oh(e,t,n){switch(t=Mp(n),e){case"html":if(!(e=t.documentElement))throw Error(a(452));return e;case"head":if(!(e=t.head))throw Error(a(453));return e;case"body":if(!(e=t.body))throw Error(a(454));return e;default:throw Error(a(451))}}function Rh(e,t,n){for(var r in n){var o=n[r];n.hasOwnProperty(r)&&null!=o&&_p(e,t,r,null,Ap,o)}null!=n.dangerouslySetInnerHTML&&(e.textContent=""),e.onclick===Zt&&(e.onclick=null),ft(e)}function Ih(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ft(e)}var Mh=new Map,Dh=new Set;function $h(e){if("function"===typeof e.getRootNode){var t=e.getRootNode();if(9===t.nodeType||11===t.nodeType)return t}return 9===e.nodeType?e:e.ownerDocument}var Fh=X.d;X.d={f:function(){var e=Fh.f(),t=bd();return e||t},r:function(e){var t=gt(e);null!==t&&5===t.tag&&"form"===t.type?Ol(t):Fh.r(e)},D:function(e){Fh.D(e),Bh("dns-prefetch",e,null)},C:function(e,t){Fh.C(e,t),Bh("preconnect",e,t)},L:function(e,t,n){Fh.L(e,t,n);var r=Hh;if(r&&e&&t){var o='link[rel="preload"][as="'+Dt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(o+='[imagesrcset="'+Dt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(o+='[imagesizes="'+Dt(n.imageSizes)+'"]')):o+='[href="'+Dt(e)+'"]';var a=o;switch(t){case"style":a=Vh(e);break;case"script":a=qh(e)}if(!(Mh.has(a)||(e=T({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Mh.set(a,e),null!==r.querySelector(o)||"style"===t&&r.querySelector(Wh(a))||"script"===t&&r.querySelector(Jh(a))))){var i=r.createElement("link");zp(i,"link",e),"style"===t&&(i[ht]=!0,i.onload=i.onerror=function(){xt(i)}),yt(i),r.head.appendChild(i)}}},m:function(e,t){Fh.m(e,t);var n=Hh;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",o='link[rel="modulepreload"][as="'+Dt(r)+'"][href="'+Dt(e)+'"]',a=o;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=qh(e)}if(!Mh.has(a)&&(e=T({rel:"modulepreload",href:e},t),Mh.set(a,e),null===n.querySelector(o))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Jh(a)))return}zp(r=n.createElement("link"),"link",e),yt(r),n.head.appendChild(r)}}},X:function(e,t){Fh.X(e,t);var n=Hh;if(n&&e){var r=bt(n).hoistableScripts,o=qh(e),a=r.get(o);a||((a=n.querySelector(Jh(o)))||(e=T({src:e,async:!0},t),(t=Mh.get(o))&&Xh(e,t),yt(a=n.createElement("script")),zp(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(o,a))}},S:function(e,t,n){Fh.S(e,t,n);var r=Hh;if(r&&e){var o=bt(r).hoistableStyles,a=Vh(e);t=t||"default";var i=o.get(a);if(!i){var l={loading:0,preload:null};if(i=r.querySelector(Wh(a)))l.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Mh.get(a))&&Qh(e,n);var s=i=r.createElement("link");yt(s),zp(s,"link",e),s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),s.addEventListener("load",function(){l.loading|=1}),s.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Yh(i,t,r)}i={type:"stylesheet",instance:i,count:1,state:l},o.set(a,i)}}},M:function(e,t){Fh.M(e,t);var n=Hh;if(n&&e){var r=bt(n).hoistableScripts,o=qh(e),a=r.get(o);a||((a=n.querySelector(Jh(o)))||(e=T({src:e,async:!0,type:"module"},t),(t=Mh.get(o))&&Xh(e,t),yt(a=n.createElement("script")),zp(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(o,a))}}};var Hh="undefined"===typeof document?null:document;function Bh(e,t,n){var r=Hh;if(r&&"string"===typeof t&&t){var o=Dt(t);o='link[rel="'+e+'"][href="'+o+'"]',"string"===typeof n&&(o+='[crossorigin="'+n+'"]'),Dh.has(o)||(Dh.add(o),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(o)&&(zp(t=r.createElement("link"),"link",e),yt(t),r.head.appendChild(t)))}}function Uh(e,t,n,r){var o=(o=ce.current)?$h(o):null;if(!o)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(n=Vh(n.href),(r=(t=bt(o).hoistableStyles).get(n))||(r={type:"style",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Vh(n.href);var i=bt(o).hoistableStyles,l=i.get(e);if(l||(o=o.ownerDocument||o,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,l),(i=o.querySelector(Wh(e)))?i._p||(l.instance=i,l.state.loading=5):((i=Mh.get(e))||(i={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Mh.set(e,i)),function(e,t,n,r){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(!0!==t[ht])return void(r.loading=1)}else(t=e.createElement("link"))[ht]=!0,t.onload=t.onerror=xt.bind(null,t),zp(t,"link",n),yt(t),e.head.appendChild(t);r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2})}(o,e,i,l.state))),t&&null===r)throw Error(a(528,""));return l}if(t&&null!==r)throw Error(a(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(n=qh(n),(r=(t=bt(o).hoistableScripts).get(n))||(r={type:"script",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Vh(e){return'href="'+Dt(e)+'"'}function Wh(e){return'link[rel="stylesheet"]['+e+"]"}function Gh(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function qh(e){return'[src="'+Dt(e)+'"]'}function Jh(e){return"script[async]"+e}function Kh(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+Dt(n.href)+'"]');if(r)return t.instance=r,yt(r),r;var o=T({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return yt(r=(e.ownerDocument||e).createElement("style")),zp(r,"style",o),Yh(r,n.precedence,e),t.instance=r;case"stylesheet":o=Vh(n.href);var i=e.querySelector(Wh(o));if(i)return t.state.loading|=4,t.instance=i,yt(i),i;r=Gh(n),(o=Mh.get(o))&&Qh(r,o),yt(i=(e.ownerDocument||e).createElement("link"));var l=i;return l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),zp(i,"link",r),t.state.loading|=4,Yh(i,n.precedence,e),t.instance=i;case"script":return i=qh(n.src),(o=e.querySelector(Jh(i)))?(t.instance=o,yt(o),o):(r=n,(o=Mh.get(i))&&Xh(r=T({},n),o),yt(o=(e=e.ownerDocument||e).createElement("script")),zp(o,"link",r),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(a(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Yh(r,n.precedence,e));return t.instance}function Yh(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=r.length?r[r.length-1]:null,a=o,i=0;i<r.length;i++){var l=r[i];if(l.dataset.precedence===t)a=l;else if(a!==o)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Qh(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Xh(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Zh=null;function ef(e,t,n){if(null===Zh){var r=new Map,o=Zh=new Map;o.set(n,r)}else(r=(o=Zh).get(n))||(r=new Map,o.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var a=n[o];if(!(a[pt]||a[at]||"link"===e&&"stylesheet"===a.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==a.namespaceURI){var i=a.getAttribute(t)||"";i=e+i;var l=r.get(i);l?l.push(a):r.set(i,[a])}}return r}function tf(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function nf(e,t){return"img"===e&&null!=t.src&&""!==t.src&&null==t.onLoad&&"lazy"!==t.loading}function rf(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}function of(e){return(e.width||100)*(e.height||100)*("number"===typeof devicePixelRatio?devicePixelRatio:1)*.25}function af(e,t){"function"===typeof t.decode&&(e.imgCount++,t.complete||(e.imgBytes+=of(t),e.suspenseyImages.push(t)),e=uf.bind(e),t.decode().then(e,e))}var lf=0;function sf(e){if(0===e.count&&(0===e.imgCount||!e.waitingForImages))if(e.stylesheets)pf(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}function cf(){this.count--,sf(this)}function uf(){this.imgCount--,sf(this)}var df=null;function pf(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,df=new Map,t.forEach(hf,e),df=null,cf.call(e))}function hf(e,t){if(!(4&t.state.loading)){var n=df.get(e);if(n)var r=n.get(null);else{n=new Map,df.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<o.length;a++){var i=o[a];"LINK"!==i.nodeName&&"not all"===i.getAttribute("media")||(n.set(i.dataset.precedence,i),r=i)}r&&n.set(null,r)}i=(o=t.instance).getAttribute("data-precedence"),(a=n.get(i)||r)===r&&n.set(null,o),n.set(i,o),this.count++,r=cf.bind(this),o.addEventListener("load",r),o.addEventListener("error",r),a?a.parentNode.insertBefore(o,a.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(o,e.firstChild),t.state.loading|=4}}var ff={$$typeof:R,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function mf(e,t,n,r,o,a,i,l,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ke(0),this.hiddenUpdates=Ke(null),this.identifierPrefix=r,this.onUncaughtError=o,this.onCaughtError=a,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.transitionTypes=null,this.incompleteTransitions=new Map}function gf(e,t,n,r,o,a,i,l,s,c,u,d){return e=new mf(e,t,n,i,s,c,u,d,l),t=1,!0===a&&(t|=24),a=po(3,null,null,t),e.current=a,a.stateNode=e,(t=ha()).refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ga(a),e}function vf(e){return e?e=co:co}function bf(e,t,n,r,o,a){o=vf(o),null===r.context?r.context=o:r.pendingContext=o,(r=Ja(t)).payload={element:n},null!==(a=void 0===a?null:a)&&(r.callback=a),null!==(n=Ka(e,r,t))&&(hd(n,0,t),Ya(n,e,t))}function yf(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function xf(e,t){yf(e,t),(e=e.alternate)&&yf(e,t)}function wf(e){if(13===e.tag||31===e.tag){var t=io(e,67108864);null!==t&&hd(t,0,67108864),xf(e,67108864)}}function kf(e){if(13===e.tag||31===e.tag){var t=ud(),n=io(e,t=et(t));null!==n&&hd(n,0,t),xf(e,t)}}var Sf=!0;function jf(e,t,n,r){var o=Q.T;Q.T=null;var a=X.p;try{X.p=2,Cf(e,t,n,r)}finally{X.p=a,Q.T=o}}function Ef(e,t,n,r){var o=Q.T;Q.T=null;var a=X.p;try{X.p=8,Cf(e,t,n,r)}finally{X.p=a,Q.T=o}}function Cf(e,t,n,r){if(Sf){var o=Tf(r);if(null===o)wp(e,t,r,Lf,n),$f(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return zf=Ff(zf,e,t,n,r,o),!0;case"dragenter":return Af=Ff(Af,e,t,n,r,o),!0;case"mouseover":return Of=Ff(Of,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Rf.set(a,Ff(Rf.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,If.set(a,Ff(If.get(a)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if($f(e,r),4&t&&-1<Df.indexOf(e)){for(;null!==o;){var a=gt(o);if(null!==a)switch(a.tag){case 3:if((a=a.stateNode).current.memoizedState.isDehydrated){var i=Ue(a.pendingLanes);if(0!==i){var l=a;for(l.pendingLanes|=2,l.entangledLanes|=2;i;){var s=1<<31-Me(i);l.entanglements[1]|=s,i&=~s}np(a),0===(6&Lu)&&(Ku=Ee()+500,rp(0,!1))}}break;case 31:case 13:null!==(l=io(a,2))&&hd(l,0,2),bd(),xf(a,2)}if(null===(a=Tf(r))&&wp(e,t,r,Lf,n),a===o)break;o=a}null!==o&&r.stopPropagation()}else wp(e,t,r,null,n)}}function Tf(e){return Pf(e=tn(e))}var Lf=null;function Pf(e){if(Lf=null,null!==(e=mt(e))){var t=s(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=u(t)))return e;e=null}else if(31===n){if(null!==(e=d(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Lf=e,null}function _f(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ce()){case Te:return 2;case Le:return 8;case Pe:case _e:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var Nf=!1,zf=null,Af=null,Of=null,Rf=new Map,If=new Map,Mf=[],Df="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $f(e,t){switch(e){case"focusin":case"focusout":zf=null;break;case"dragenter":case"dragleave":Af=null;break;case"mouseover":case"mouseout":Of=null;break;case"pointerover":case"pointerout":Rf.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":If.delete(t.pointerId)}}function Ff(e,t,n,r,o,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},null!==t&&(null!==(t=gt(t))&&wf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function Hf(e){var t=mt(e.target);if(null!==t){var n=s(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=u(n)))return e.blockedOn=t,void rt(e.priority,function(){kf(n)})}else if(31===t){if(null!==(t=d(n)))return e.blockedOn=t,void rt(e.priority,function(){kf(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Bf(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Tf(e.nativeEvent);if(null!==n)return null!==(t=gt(n))&&wf(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);en=r,n.target.dispatchEvent(r),en=null,t.shift()}return!0}function Uf(e,t,n){Bf(e)&&n.delete(t)}function Vf(){Nf=!1,null!==zf&&Bf(zf)&&(zf=null),null!==Af&&Bf(Af)&&(Af=null),null!==Of&&Bf(Of)&&(Of=null),Rf.forEach(Uf),If.forEach(Uf)}function Wf(e,t){e.blockedOn===t&&(e.blockedOn=null,Nf||(Nf=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Vf)))}var Gf=null;function qf(e){Gf!==e&&(Gf=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Gf===e&&(Gf=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],o=e[t+2];if("function"!==typeof r){if(null===Pf(r||n))continue;break}var a=gt(n);null!==a&&(e.splice(t,3),t-=3,zl(a,{pending:!0,data:o,method:n.method,action:r},r,o))}}))}function Jf(e){function t(t){return Wf(t,e)}null!==zf&&Wf(zf,e),null!==Af&&Wf(Af,e),null!==Of&&Wf(Of,e),Rf.forEach(t),If.forEach(t);for(var n=0;n<Mf.length;n++){var r=Mf[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Mf.length&&null===(n=Mf[0]).blockedOn;)Hf(n),null===n.blockedOn&&Mf.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var o=n[r],a=n[r+1],i=o[it]||null;if("function"===typeof a)i||qf(n);else if(i){var l=null;if(a&&a.hasAttribute("formAction")){if(o=a,i=a[it]||null)l=i.formAction;else if(null!==Pf(o))continue}else l=i.action;"function"===typeof l?n[r+1]=l:(n.splice(r,3),r-=3),qf(n)}}}function Kf(){function e(e){e.canIntercept&&"react-transition"===e.info&&e.intercept({handler:function(){return new Promise(function(e){return o=e})},focusReset:"manual",scroll:"manual"})}function t(){null!==o&&(o(),o=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&null!=e.url&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}if("object"===typeof navigation){var r=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),null!==o&&(o(),o=null)}}}function Yf(e){this._internalRoot=e}function Qf(e){this._internalRoot=e}Qf.prototype.render=Yf.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));bf(t.current,ud(),e,t,null,null)},Qf.prototype.unmount=Yf.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;bf(e.current,2,null,e,null,null),bd(),t[lt]=null}},Qf.prototype.unstable_scheduleHydration=function(e){if(e){var t=nt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mf.length&&0!==t&&t<Mf[n].priority;n++);Mf.splice(n,0,e),0===n&&Hf(e)}};var Xf=r.version;if("19.3.0"!==Xf)throw Error(a(527,Xf,"19.3.0"));X.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=s(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(r=o.return)){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return h(o),e;if(i===r)return h(o),t;i=i.sibling}throw Error(a(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,c=o.child;c;){if(c===n){l=!0,n=o,r=i;break}if(c===r){l=!0,r=o,n=i;break}c=c.sibling}if(!l){for(c=i.child;c;){if(c===n){l=!0,n=i,r=o;break}if(c===r){l=!0,r=i,n=o;break}c=c.sibling}if(!l)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?f(e):null)?null:e.stateNode};var Zf={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Q,reconcilerVersion:"19.3.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var em=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!em.isDisabled&&em.supportsFiber)try{Oe=em.inject(Zf),Re=em}catch(nm){}}t.createRoot=function(e,t){if(!l(e))throw Error(a(299));var n=!1,r="",o=ts,i=ns,s=rs;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(o=t.onUncaughtError),void 0!==t.onCaughtError&&(i=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError)),t=gf(e,1,!1,null,0,n,r,null,o,i,s,Kf),e[lt]=t.current,yp(e),new Yf(t)},t.hydrateRoot=function(e,t,n){if(!l(e))throw Error(a(299));var r=!1,o="",i=ts,s=ns,c=rs,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onUncaughtError&&(i=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.formState&&(u=n.formState)),(t=gf(e,1,!0,t,0,r,o,u,i,s,c,Kf)).context=vf(null),n=t.current,(o=Ja(r=et(r=ud()))).callback=null,Ka(n,o,r),n=r,t.current.lanes=n,Ye(t,n),np(t),e[lt]=t.current,yp(e),new Qf(t)},t.version="19.3.0"}),o=n.cw(function(e,t){var n=c();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var a={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},i=Symbol.for("react.portal"),l=Symbol.for("react.recoverable"),s=Symbol.for("react.optimistic_key");var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,t.browser=function(e){return{$$typeof:l,_reason:e}},t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(r(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:i,key:null==r?null:r===s?s:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=u.T,n=a.p;try{if(u.T=null,a.p=2,e)return e()}finally{u.T=t,a.p=n,a.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,a.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&a.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=d(n,t.crossOrigin),o="string"===typeof t.integrity?t.integrity:void 0,i="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?a.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:o,fetchPriority:i}):"script"===n&&a.d.X(e,{crossOrigin:r,integrity:o,fetchPriority:i,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=d(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0})}}else null==t&&a.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=d(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=d(t.as,t.crossOrigin);a.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0})}else a.d.m(e)},t.requestFormReset=function(e){a.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return u.H.useFormState(e,t,n)},t.useFormStatus=function(){return u.H.useHostTransitionStatus()},t.version="19.3.0"}),a=n.cw(function(e,t){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=r()}),i=n.cw(function(e,t){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=o()}),l=n.cw(function(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(e,t,r){var o=null;if(void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),"key"in t)for(var a in r={},t)"key"!==a&&(r[a]=t[a]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:o,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=o,t.jsxs=o}),s=n.cw(function(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.for("react.activity"),f=Symbol.for("react.view_transition"),m=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,b={};function y(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||g}function x(){}function w(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=y.prototype;var k=w.prototype=new x;k.constructor=w,v(k,y.prototype),k.isPureReactComponent=!0;var S=Array.isArray;function j(){}var E={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function T(e,t,r){var o=r.ref;return{$$typeof:n,type:e,key:t,ref:void 0!==o?o:null,props:r}}function L(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function _(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function N(e,t,o,a,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s,c,u=!1;if(null===e)u=!0;else switch(l){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0;break;case p:return N((u=e._init)(e._payload),t,o,a,i)}}if(u)return i=i(e),u=""===a?"."+_(e,0):a,S(i)?(o="",null!=u&&(o=u.replace(P,"$&/")+"/"),N(i,t,o,"",function(e){return e})):null!=i&&(L(i)&&(s=i,c=o+(null==i.key||e&&e.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+u,i=T(s.type,c,s.props)),t.push(i)),1;u=0;var d,h=""===a?".":a+":";if(S(e))for(var f=0;f<e.length;f++)u+=N(a=e[f],t,o,l=h+_(a,f),i);else if("function"===typeof(f=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=m&&d[m]||d["@@iterator"])?d:null))for(e=f.call(e),f=0;!(a=e.next()).done;)u+=N(a=a.value,t,o,l=h+_(a,f++),i);else if("object"===l){if("function"===typeof e.then)return N(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(j,j):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,o,a,i);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function z(e,t,n){if(null==e)return e;var r=[],o=0;return N(e,r,"","",function(e){return t.call(n,e,o++)}),r}function A(e){if(-1===e._status){var t=(0,e._result)();t.then(function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n,void 0===t.status&&(t.status="fulfilled",t.value=n))},function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n,void 0===t.status&&(t.status="rejected",t.reason=n))}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function R(e){var t=E.T,n={};n.types=null!==t?t.types:null,E.T=n;try{var r=e(),o=E.S;null!==o&&o(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(j,O)}catch(a){O(a)}finally{null!==t&&null!==n.types&&(t.types=n.types),E.T=t}}var I={map:z,forEach:function(e,t,n){z(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return z(e,function(){t++}),t},toArray:function(e){return z(e,function(e){return e})||[]},only:function(e){if(!L(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Activity=h,t.Children=I,t.Component=y,t.Fragment=o,t.Profiler=i,t.PureComponent=w,t.StrictMode=a,t.Suspense=u,t.ViewTransition=f,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return E.H.useMemoCache(e)}},t.addTransitionType=function e(t){var n=E.T;if(null!==n){var r=n.types;null===r?n.types=[t]:-1===r.indexOf(t)&&r.push(t)}else R(e.bind(null,t))},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cacheSignal=function(){return null},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=v({},e.props),o=e.key;if(null!=t)for(a in void 0!==t.key&&(o=""+t.key),t)!C.call(t,a)||"key"===a||"__self"===a||"__source"===a||"ref"===a&&void 0===t.ref||(r[a]=t[a]);var a=arguments.length-2;if(1===a)r.children=n;else if(1<a){for(var i=Array(a),l=0;l<a;l++)i[l]=arguments[l+2];r.children=i}return T(e.type,o,r)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,n){var r,o={},a=null;if(null!=t)for(r in void 0!==t.key&&(a=""+t.key),t)C.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return T(e,a,o)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=L,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=R,t.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},t.use=function(e){return E.H.use(e)},t.useActionState=function(e,t,n){return E.H.useActionState(e,t,n)},t.useCallback=function(e,t){return E.H.useCallback(e,t)},t.useContext=function(e){return E.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return E.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return E.H.useEffect(e,t)},t.useEffectEvent=function(e){return E.H.useEffectEvent(e)},t.useId=function(){return E.H.useId()},t.useImperativeHandle=function(e,t,n){return E.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return E.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return E.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return E.H.useMemo(e,t)},t.useOptimistic=function(e,t){return E.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return E.H.useReducer(e,t,n)},t.useRef=function(e){return E.H.useRef(e)},t.useState=function(e){return E.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return E.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return E.H.useTransition()},t.version="19.3.0"}),c=n.cw(function(e,t){e.exports=s()}),u=n.cw(function(e,t){e.exports=l()}),d=n.cw(function(e,t){function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<a(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>a(s,n))c<o&&0>a(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<o&&0>a(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,p=null,h=3,f=!1,m=!1,g=!1,v=!1,b="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(u);null!==t;){if(null===t.callback)o(u);else{if(!(t.startTime<=e))break;o(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function k(e){if(g=!1,w(e),!m)if(null!==r(c))m=!0,j||(j=!0,S());else{var t=r(u);null!==t&&z(k,t.startTime-e)}}var S,j=!1,E=-1,C=5,T=-1;function L(){return!!v||!(t.unstable_now()-T<C)}function P(){if(v=!1,j){var e=t.unstable_now();T=e;var n=!0;try{e:{m=!1,g&&(g=!1,y(E),E=-1),f=!0;var a=h;try{t:{for(w(e),p=r(c);null!==p&&!(p.expirationTime>e&&L());){var i=p.callback;if("function"===typeof i){p.callback=null,h=p.priorityLevel;var l=i(p.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof l){p.callback=l,w(e),n=!0;break t}p===r(c)&&o(c),w(e)}else o(c);p=r(c)}if(null!==p)n=!0;else{var s=r(u);null!==s&&z(k,s.startTime-e),n=!1}}break e}finally{p=null,h=a,f=!1}n=void 0}}finally{n?S():j=!1}}}if("function"===typeof x)S=function(){x(P)};else if("undefined"!==typeof MessageChannel){var _=new MessageChannel,N=_.port2;_.port1.onmessage=P,S=function(){N.postMessage(null)}}else S=function(){b(P,0)};function z(e,n){E=b(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_requestPaint=function(){v=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,o,a){var i=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?i+a:i:a=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:a,expirationTime:l=a+l,sortIndex:-1},a>i?(e.sortIndex=a,n(u,e),null===r(c)&&e===r(u)&&(g?(y(E),E=-1):g=!0,z(k,a-i))):(e.sortIndex=l,n(c,e),m||f||(m=!0,j||(j=!0,S()))),e},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}}),p=n.cw(function(e,t){e.exports=d()}),h=n.cw(function(e,t){var n=c();var r="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},o=n.useState,a=n.useEffect,i=n.useLayoutEffect,l=n.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!r(e,n)}catch(o){return!0}}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),c=r[0].inst,u=r[1];return i(function(){c.value=n,c.getSnapshot=t,s(c)&&u({inst:c})},[e,n,t]),a(function(){return s(c)&&u({inst:c}),e(function(){s(c)&&u({inst:c})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:u}),f=n.cw(function(e,t){e.exports=h()});c(),i(),a();var m=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,g=/^[\\/]{2}/;function v(e,t){return t+e.replace(/\\/g,"/")}var b="popstate";function y(e){return"object"===typeof e&&null!=e&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function x(){return T(function(e,t){let n=t.state?.masked,{pathname:r,search:o,hash:a}=n||e.location;return j("",{pathname:r,search:o,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default",n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)},function(e,t){return"string"===typeof t?t:E(t)},null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function w(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function k(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function S(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function j(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?C(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10),mask:o}}function E(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function C(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function T(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:o=document.defaultView,v5Compat:a=!1}=r,i=o.history,l="POP",s=null,c=u();function u(){return(i.state||{idx:null}).idx}function d(){l="POP";let e=u(),t=null==e?null:e-c;c=e,s&&s({action:l,location:h.location,delta:t})}function p(e){return L(o,e)}null==c&&(c=0,i.replaceState({...i.state,idx:c},""));let h={get action(){return l},get location(){return e(o,i)},listen(e){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(b,d),s=e,()=>{o.removeEventListener(b,d),s=null}},createHref:e=>t(o,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){l="PUSH";let r=y(e)?e:j(h.location,e,t);n&&n(r,e),c=u()+1;let d=S(r,c),p=h.createHref(r.mask||r);try{i.pushState(d,"",p)}catch(f){if(f instanceof DOMException&&"DataCloneError"===f.name)throw f;o.location.assign(p)}a&&s&&s({action:l,location:h.location,delta:1})},replace:function(e,t){l="REPLACE";let r=y(e)?e:j(h.location,e,t);n&&n(r,e),c=u();let o=S(r,c),d=h.createHref(r.mask||r);i.replaceState(o,"",d),a&&s&&s({action:l,location:h.location,delta:0})},go:e=>i.go(e)};return h}function L(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r="http://localhost";e&&(r="null"!==e.location.origin?e.location.origin:e.location.href),w(r,"No window.location.(origin|href) available to create URL");let o="string"===typeof t?t:E(t);return o=o.replace(/ $/,"%20"),!n&&g.test(o)&&(o=r+o),new URL(o,r)}new WeakMap;function P(e,t){return _(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function _(e,t,n,r,o){let a=q(("string"===typeof t?C(t):t).pathname||"/",n);if(null==a)return null;let i=o??N(e),l=null,s=G(a);for(let c=0;null==l&&c<i.length;++c)l=B(i[c],s,r);return l}function N(e){let t=z(e);return function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(t),t}function z(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=function(e,a){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,l=arguments.length>3?arguments[3]:void 0,s={relativePath:void 0===l?e.path||"":l,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};if(s.relativePath.startsWith("/")){if(!s.relativePath.startsWith(r)&&i)return;w(s.relativePath.startsWith(r),`Absolute route path "${s.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(r.length)}let c=ee([r,s.relativePath]),u=n.concat(s);e.children&&e.children.length>0&&(w(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),z(e.children,t,u,c,i)),(null!=e.path||e.index)&&t.push({path:c,score:H(c,e.index),routesMeta:u.map((e,t)=>{let[n,r]=W(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of A(e.path))a(e,t,!0,n);else a(e,t)}),t}function A(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return o?[a,""]:[a];let i=A(r.join("/")),l=[];return l.push(...i.map(e=>""===e?a:[a,e].join("/"))),o&&l.push(...i),l.map(t=>e.startsWith("/")&&""===t?"/":t)}var O=/^:[\w-]+$/,R=3,I=2,M=1,D=10,$=-2,F=e=>"*"===e;function H(e,t){let n=e.split("/"),r=n.length;return n.some(F)&&(r+=$),t&&(r+=I),n.filter(e=>!F(e)).reduce((e,t)=>e+(O.test(t)?R:""===t?M:D),r)}function B(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,o={},a="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,c="/"===a?t:t.slice(a.length)||"/",u={path:e.relativePath,caseSensitive:e.caseSensitive,end:s},d=e.matcher&&e.compiledParams?V(u,c,e.matcher,e.compiledParams):U(u,c),p=e.route;if(!d&&s&&n&&!r[r.length-1].route.index&&(d=U({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!d)return null;Object.assign(o,d.params),i.push({params:o,pathname:ee([a,d.pathname]),pathnameBase:ne(ee([a,d.pathnameBase])),route:p}),"/"!==d.pathnameBase&&(a=ee([a,d.pathnameBase]))}return i}function U(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=W(e.path,e.caseSensitive,e.end);return V(e,t,n,r)}function V(e,t,n,r){let o=t.match(n);if(!o)return null;let a=o[0],i=te(a,1),l=o.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=l[n]||"";i=te(a.slice(0,a.length-e.length),1)}const s=l[n];return e[r]=o&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:a,pathnameBase:i,pattern:e}}function W(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];k("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n,o,a)=>{if(r.push({paramName:t,isOptional:null!=n}),n){let t=a.charAt(o+e.length);return t&&"/"!==t?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function G(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return k(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function q(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function J(e,t){let n=te(t).split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}function K(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Y(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function Q(e){let t=Y(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function X(e,t,n){let r,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=C(e):(r={...e},w(!r.pathname||!r.pathname.includes("?"),K("?","pathname","search",r)),w(!r.pathname||!r.pathname.includes("#"),K("#","pathname","hash",r)),w(!r.search||!r.search.includes("#"),K("#","search","hash",r)));let a,i=""===e||""===r.pathname,l=i?"/":r.pathname;if(null==l)a=n;else{let e=t.length-1;if(!o&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}a=e>=0?t[e]:"/"}let s=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:r,search:o="",hash:a=""}="string"===typeof e?C(e):e;return r?(r=Z(r),t=r.startsWith("/")||r.startsWith("\\")?J(r.substring(1),"/"):J(r,n)):t=n,{pathname:t,search:re(o),hash:oe(a)}}(r,a),c=l&&"/"!==l&&l.endsWith("/"),u=(i||"."===l)&&n.endsWith("/");return s.pathname.endsWith("/")||!c&&!u||(s.pathname+="/"),s}var Z=e=>e.replace(/[\\/]{2,}/g,"/"),ee=e=>Z(e.join("/"));function te(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e.length;for(;n>t&&47===e.charCodeAt(n-1);)n--;return n===e.length?e:e.slice(0,n)}var ne=e=>te(e).replace(/^\/*/,"/"),re=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",oe=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";var ae=class{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function ie(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}function le(e){let t=e.map(e=>e.route.path).filter(Boolean);return ee(t)||"/"}var se="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;function ce(e,t){let n=e;if("string"!==typeof n||!m.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,o=!1;if(se)try{let e=new URL(window.location.href),r=g.test(n)?new URL(v(n,e.protocol)):new URL(n),a=q(r.pathname,t);r.origin===e.origin&&null!=a?n=a+r.search+r.hash:o=!0}catch(a){k(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:n}}Symbol("Uninstrumented");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ue=new URL("http://localhost");function de(e){if(e.createURL)return e.createURL("/");try{return new URL(e.createHref("/"),ue)}catch{return ue}}function pe(e,t){return e.origin===t.origin&&("null"!==e.origin||e.protocol===t.protocol&&e.host===t.host)}function he(e,t,n,r){let o=null;try{o=null==e?null:new URL(e,n)}catch{}let a=new URL(t,n),i=null!=o&&!pe(o,n),l=!pe(a,n);if("reject"===r){if(i||l)throw new Error("External navigation is not allowed")}else if(l&&(null==o||!function(e,t){if(e.startsWith("//"))return!0;let n=t.protocol.toLowerCase();return!!e.toLowerCase().startsWith(n)&&(""===t.host||e.slice(n.length).startsWith("//"))}(e,o)||!pe(o,a)))throw new Error("External navigation is not allowed")}var fe=["POST","PUT","PATCH","DELETE"],me=(new Set(fe),["GET",...fe]);new Set(me),Symbol("ResetLoaderData");new WeakMap,new WeakMap,new WeakMap,new WeakMap;var ge=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function ve(e){try{return ge.includes(new URL(e).protocol)}catch{return!1}}var be=s().createContext(null);be.displayName="DataRouter";var ye=s().createContext(null);ye.displayName="DataRouterState";var xe=s().createContext(!1);function we(){return s().useContext(xe)}var ke=s().createContext({isTransitioning:!1});ke.displayName="ViewTransition";var Se=s().createContext(new Map);Se.displayName="Fetchers";var je=s().createContext(null);je.displayName="Await";var Ee=s().createContext(null);Ee.displayName="Navigation";var Ce=s().createContext(null);Ce.displayName="Location";var Te=s().createContext({outlet:null,matches:[],isDataRoute:!1});Te.displayName="Route";var Le=s().createContext(null);Le.displayName="RouteError";var Pe="REACT_ROUTER_ERROR";function _e(){return null!=s().useContext(Ce)}function Ne(){return w(_e(),"useLocation() may be used only in the context of a <Router> component."),s().useContext(Ce).location}var ze="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ae(e){s().useContext(Ee).static||s().useLayoutEffect(e)}function Oe(){let{isDataRoute:e}=s().useContext(Te);return e?function(){let{router:e}=Ge("useNavigate"),t=Je("useNavigate"),n=s().useRef(!1);Ae(()=>{n.current=!0});let r=s().useCallback(async function(r){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};k(n.current,ze),n.current&&("number"===typeof r?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...o}))},[e,t]);return r}():function(){w(_e(),"useNavigate() may be used only in the context of a <Router> component.");let e=s().useContext(be),{basename:t,navigator:n}=s().useContext(Ee),{matches:r}=s().useContext(Te),{pathname:o}=Ne(),a=JSON.stringify(Q(r)),i=s().useRef(!1);Ae(()=>{i.current=!0});let l=s().useCallback(function(r){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(k(i.current,ze),!i.current)return;if("number"===typeof r)return void n.go(r);let s=X(r,JSON.parse(a),o,"path"===l.relative);null==e&&"/"!==t&&(s.pathname="/"===s.pathname?t:ee([t,s.pathname])),he("string"===typeof r?r:E(r),n.createHref(s),de(n),"reject"),(l.replace?n.replace:n.push)(s,l.state,l)},[t,n,a,o,e]);return l}()}s().createContext(null);function Re(){let{matches:e}=s().useContext(Te),t=e[e.length-1];return t?.params??{}}function Ie(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:n}=s().useContext(Te),{pathname:r}=Ne(),o=JSON.stringify(Q(n));return s().useMemo(()=>X(e,JSON.parse(o),r,"path"===t),[e,o,r,t])}function Me(e,t,n){w(_e(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=s().useContext(Ee),{matches:o}=s().useContext(Te),a=o[o.length-1],i=a?a.params:{},l=a?a.pathname:"/",c=a?a.pathnameBase:"/",u=a&&a.route;{let e=u&&u.path||"";Qe(l,!u||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let d,p=Ne();if(t){let e="string"===typeof t?C(t):t;w("/"===c||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=p;let h=d.pathname||"/",f=h;if("/"!==c){let e=c.replace(/^\//,"").split("/");f="/"+h.replace(/^\//,"").split("/").slice(e.length).join("/")}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):P(e,{pathname:f});k(u||null!=m,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),k(null==m||void 0!==m[m.length-1].route.element||void 0!==m[m.length-1].route.Component||void 0!==m[m.length-1].route.lazy,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=Ve(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},i,e.params),pathname:ee([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:ee([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathnameBase])})),o,n);return t&&g?s().createElement(Ce.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...d},navigationType:"POP"}},g):g}function De(){let e=Ke(),t=ie(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},i=null;return console.error("Error handled by React Router default ErrorBoundary:",e),i=s().createElement(s().Fragment,null,s().createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),s().createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",s().createElement("code",{style:a},"ErrorBoundary")," or"," ",s().createElement("code",{style:a},"errorElement")," prop on your route.")),s().createElement(s().Fragment,null,s().createElement("h2",null,"Unexpected Application Error!"),s().createElement("h3",{style:{fontStyle:"italic"}},t),n?s().createElement("pre",{style:o},n):null,i)}var $e=s().createElement(De,null),Fe=class extends s().Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&"object"===typeof e&&e&&"digest"in e&&"string"===typeof e.digest){const t=function(e){if(e.startsWith(`${Pe}:ROUTE_ERROR_RESPONSE:{`))try{let t=JSON.parse(e.slice(40));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText)return new ae(t.status,t.statusText,t.data)}catch{}}(e.digest);t&&(e=t)}let t=void 0!==e?s().createElement(Te.Provider,{value:this.props.routeContext},s().createElement(Le.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?s().createElement(Be,{error:e},t):t}};Fe.contextType=xe;var He=new WeakMap;function Be(e){let{children:t,error:n}=e,{basename:r,navigator:o}=s().useContext(Ee);if("object"===typeof n&&n&&"digest"in n&&"string"===typeof n.digest){let e=function(e){if(e.startsWith(`${Pe}:REDIRECT:{`))try{let t=JSON.parse(e.slice(28));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText&&"string"===typeof t.location&&"boolean"===typeof t.reloadDocument&&"boolean"===typeof t.replace)return t}catch{}}(n.digest);if(e){let t=He.get(n);if(t)throw t;let a=ce(e.location,r),i=a.absoluteURL||a.to;if(he(e.location,i,de(o),"allow-explicit"),ve(i))throw new Error("Invalid redirect location");if(se&&!He.get(n)){if(!a.isExternal&&!e.reloadDocument){const t=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:e.replace}));throw He.set(n,t),t}window.location.href=i}return s().createElement("meta",{httpEquiv:"refresh",content:`0;url=${i}`})}}return t}function Ue(e){let{routeContext:t,match:n,children:r}=e,o=s().useContext(be);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),s().createElement(Te.Provider,{value:t},r)}function Ve(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,r=n?.state;if(null==e){if(!r)return null;if(r.errors)e=r.matches;else{if(0!==t.length||r.initialized||!(r.matches.length>0))return null;e=r.matches}}let o=e,a=r?.errors;if(null!=a){let e=o.findIndex(e=>e.route.id&&void 0!==a?.[e.route.id]);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,e+1))}let i=!1,l=-1;if(n&&r){i=r.renderFallback;for(let e=0;e<o.length;e++){let t=o[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(l=e),t.route.id){let{loaderData:e,errors:a}=r,s=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||void 0===a[t.route.id]);if(t.route.lazy||s){n.isStatic&&(i=!0),o=l>=0?o.slice(0,l+1):[o[0]];break}}}}let c=n?.onError,u=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:le(r.matches),errorInfo:t})}:void 0;return o.reduceRight((e,n,c)=>{let d,p=!1,h=null,f=null;r&&(d=a&&n.route.id?a[n.route.id]:void 0,h=n.route.errorElement||$e,i&&(l<0&&0===c?(Qe("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,f=null):l===c&&(p=!0,f=n.route.hydrateFallbackElement||null)));let m=t.concat(o.slice(0,c+1)),g=()=>{let t;return t=d?h:p?f:n.route.Component?s().createElement(n.route.Component,null):n.route.element?n.route.element:e,s().createElement(Ue,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||0===c)?s().createElement(Fe,{location:r.location,revalidation:r.revalidation,component:h,error:d,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:u}):g()},null)}function We(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ge(e){let t=s().useContext(be);return w(t,We(e)),t}function qe(e){let t=s().useContext(ye);return w(t,We(e)),t}function Je(e){let t=function(e){let t=s().useContext(Te);return w(t,We(e)),t}(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Ke(){let e=s().useContext(Le),t=qe("useRouteError"),n=Je("useRouteError");return void 0!==e?e:t.errors?.[n]}var Ye={};function Qe(e,t,n){t||Ye[e]||(Ye[e]=!0,k(!1,n))}var Xe={};function Ze(e,t){e||Xe[t]||(Xe[t]=!0,console.warn(t))}(function e(){return e.c||(e.c=n.t(c(),2))})().useOptimistic;s().memo(et);function et(e){let{routes:t,manifest:n,future:r,state:o,isStatic:a,onError:i}=e;return Me(t,void 0,{manifest:n,state:o,isStatic:a,onError:i,future:r})}function tt(e){let{to:t,replace:n,state:r,relative:o}=e;w(_e(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a,navigator:i}=s().useContext(Ee);k(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=s().useContext(Te),{pathname:c}=Ne(),u=Oe(),d=X(t,Q(l),c,"path"===o);he("string"===typeof t?t:E(t),i.createHref(d),de(i),"reject");let p=JSON.stringify(d);return s().useEffect(()=>{u(JSON.parse(p),{replace:n,state:r,relative:o})},[u,p,o,n,r]),null}function nt(e){w(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function rt(e){let{basename:t="/",children:n=null,location:r,navigationType:o="POP",navigator:a,static:i=!1,useTransitions:l}=e;w(!_e(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),u=s().useMemo(()=>({basename:c,navigator:a,static:i,useTransitions:l,future:{}}),[c,a,i,l]);"string"===typeof r&&(r=C(r));let{pathname:d="/",search:p="",hash:h="",state:f=null,key:m="default",mask:g}=r,v=s().useMemo(()=>{let e=q(d,c);return null==e?null:{location:{pathname:e,search:p,hash:h,state:f,key:m,mask:g},navigationType:o}},[c,d,p,h,f,m,o,g]);return k(null!=v,`<Router basename="${c}"> is not able to match the URL "${d}${p}${h}" because it does not start with the basename, so the <Router> won't render anything.`),null==v?null:s().createElement(Ee.Provider,{value:u},s().createElement(Ce.Provider,{children:n,value:v}))}function ot(e){let{children:t,location:n}=e;return Me(at(t),n)}s().Component;function at(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];return s().Children.forEach(e,(e,r)=>{if(!s().isValidElement(e))return;let o=[...t,r];if(e.type===s().Fragment)return void n.push.apply(n,at(e.props.children,o));w(e.type===nt,`[${"string"===typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,"An index route cannot have child routes.");let a={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=at(e.props.children,o)),n.push(a)}),n}var it="get",lt="application/x-www-form-urlencoded";function st(e){return"undefined"!==typeof HTMLElement&&e instanceof HTMLElement}var ct=null;var ut=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function dt(e){return null==e||ut.has(e)?e:(k(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lt}"`),null)}function pt(e,t){let n,r,o,a,i;if(st(l=e)&&"form"===l.tagName.toLowerCase()){let i=e.getAttribute("action");r=i?q(i,t):null,n=e.getAttribute("method")||it,o=dt(e.getAttribute("enctype"))||lt,a=new FormData(e)}else if(function(e){return st(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return st(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let i=e.form;if(null==i)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||i.getAttribute("action");if(r=l?q(l,t):null,n=e.getAttribute("formmethod")||i.getAttribute("method")||it,o=dt(e.getAttribute("formenctype"))||dt(i.getAttribute("enctype"))||lt,a=new FormData(i,e),!function(){if(null===ct)try{new FormData(document.createElement("form"),0),ct=!1}catch(e){ct=!0}return ct}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";a.append(`${e}x`,"0"),a.append(`${e}y`,"0")}else t&&a.append(t,r)}}else{if(st(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=it,r=null,o=lt,i=e}var l;return a&&"text/plain"===o&&(i=a,a=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:a,body:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ht(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}Symbol("SingleFetchRedirect");function ft(e,t,n,r){let o="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:"/"===o.pathname?o.pathname=`_root.${r}`:t&&"/"===q(o.pathname,t)?o.pathname=`${te(t)}/_root.${r}`:o.pathname=`${te(o.pathname)}.${r}`,o}async function mt(e,t){if(e.id in t)return t[e.id];try{let n=await(import(e.module));return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function gt(e){return null!=e&&"string"===typeof e.page}function vt(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function bt(e,t,n,r,o,a){let i=(e,t)=>!n[t]||e.route.id!==n[t].route.id,l=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===a?t.filter((e,t)=>i(e,t)||l(e,t)):"data"===a?t.filter((t,a)=>{let s=r.routes[t.route.id];if(!s||!s.hasLoader)return!1;if(i(t,a)||l(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0}):[]}function yt(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let o=[r.module];return r.clientActionModule&&(o=o.concat(r.clientActionModule)),r.clientLoaderModule&&(o=o.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(o=o.concat(r.hydrateFallbackModule)),r.imports&&(o=o.concat(r.imports)),o}).flat(1),[...new Set(r)];var r}function xt(e,t){let n=new Set,r=new Set(t);return e.reduce((e,o)=>{if(t&&!gt(o)&&"script"===o.as&&o.href&&r.has(o.href))return e;let a=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(o));return n.has(a)||(n.add(a),e.push({key:a,link:o})),e},[])}function wt(e,t){return"lazy"===e.mode&&!0===t}function kt(){let e=s().useContext(be);return ht(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function St(){let e=s().useContext(ye);return ht(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var jt=s().createContext(void 0);function Et(){let e=s().useContext(jt);return ht(e,"You must render this element inside a <HydratedRouter> element"),e}function Ct(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Tt(e,t,n){if(n&&!zt)return[e[0]];if(t){let n=e.findIndex(e=>void 0!==t[e.route.id]);return e.slice(0,n+1)}return e}jt.displayName="FrameworkContext";function Lt(e){let{page:t,...n}=e,r=we(),{nonce:o}=Et(),{router:a}=kt(),i=s().useMemo(()=>P(a.routes,t,a.basename),[a.routes,t,a.basename]);return i?(null==n.nonce&&o&&(n={...n,nonce:o}),r?s().createElement(_t,{page:t,matches:i,...n}):s().createElement(Nt,{page:t,matches:i,...n})):null}function Pt(e){let{manifest:t,routeModules:n}=Et(),[r,o]=s().useState([]);return s().useEffect(()=>{let r=!1;return async function(e,t,n){return xt((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await mt(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(vt).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(e,t,n).then(e=>{r||o(e)}),()=>{r=!0}},[e,t,n]),r}function _t(e){let{page:t,matches:n,...r}=e,o=Ne(),{future:a}=Et(),{basename:i}=kt(),l=s().useMemo(()=>{if(t===o.pathname+o.search+o.hash)return[];let e=ft(t,i,a.v8_trailingSlashAwareDataRequests,"rsc"),r=!1,l=[];for(let t of n)"function"===typeof t.route.shouldRevalidate?r=!0:l.push(t.route.id);return r&&l.length>0&&e.searchParams.set("_routes",l.join(",")),[e.pathname+e.search]},[i,a.v8_trailingSlashAwareDataRequests,t,o,n]);return s().createElement(s().Fragment,null,l.map(e=>s().createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...r})))}function Nt(e){let{page:t,matches:n,...r}=e,o=Ne(),{future:a,manifest:i,routeModules:l}=Et(),{basename:c}=kt(),{loaderData:u,matches:d}=St(),p=s().useMemo(()=>bt(t,n,d,i,o,"data"),[t,n,d,i,o]),h=s().useMemo(()=>bt(t,n,d,i,o,"assets"),[t,n,d,i,o]),f=s().useMemo(()=>{if(t===o.pathname+o.search+o.hash)return[];let e=new Set,r=!1;if(n.forEach(t=>{let n=i.routes[t.route.id];n&&n.hasLoader&&(!p.some(e=>e.route.id===t.route.id)&&t.route.id in u&&l[t.route.id]?.shouldRevalidate||n.hasClientLoader?r=!0:e.add(t.route.id))}),0===e.size)return[];let s=ft(t,c,a.v8_trailingSlashAwareDataRequests,"data");return r&&e.size>0&&s.searchParams.set("_routes",n.filter(t=>e.has(t.route.id)).map(e=>e.route.id).join(",")),[s.pathname+s.search]},[c,a.v8_trailingSlashAwareDataRequests,u,o,i,p,n,t,l]),m=s().useMemo(()=>yt(h,i),[h,i]),g=Pt(h);return s().createElement(s().Fragment,null,f.map(e=>s().createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...r})),m.map(e=>s().createElement("link",{key:e,rel:"modulepreload",href:e,...r})),g.map(e=>{let{key:t,link:n}=e;return s().createElement("link",{key:t,nonce:r.nonce,...n,crossOrigin:n.crossOrigin??r.crossOrigin})}))}var zt=!1;function At(e){let{manifest:t,serverHandoffString:n,isSpaMode:r,renderMeta:o,routeDiscovery:a,ssr:i,nonce:l}=Et(),{router:c,static:u,staticContext:d}=kt(),{matches:p}=St(),h=we(),f=wt(a,i);null==e.nonce&&l&&(e={...e,nonce:l}),o&&(o.didRenderScripts=!0);let m=Tt(p,null,r);s().useEffect(()=>{zt=!0},[]);let g=s().useMemo(()=>{if(h)return null;let r=d?`window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",o=u?`${t.hmr?.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}${f?"":`import ${JSON.stringify(t.url)}`};\n${m.map((e,n)=>{let r=`route${n}`,o=t.routes[e.route.id];ht(o,`Route ${e.route.id} not found in manifest`);let{clientActionModule:a,clientLoaderModule:i,clientMiddlewareModule:l,hydrateFallbackModule:s,module:c}=o,u=[...a?[{module:a,varName:`${r}_clientAction`}]:[],...i?[{module:i,varName:`${r}_clientLoader`}]:[],...l?[{module:l,varName:`${r}_clientMiddleware`}]:[],...s?[{module:s,varName:`${r}_HydrateFallback`}]:[],{module:c,varName:`${r}_main`}];return 1===u.length?`import * as ${r} from ${JSON.stringify(c)};`:[u.map(e=>`import * as ${e.varName} from "${e.module}";`).join("\n"),`const ${r} = {${u.map(e=>`...${e.varName}`).join(",")}};`].join("\n")}).join("\n")}\n  ${f?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,o=new Set(t.state.matches.map(e=>e.route.id)),a=t.state.location.pathname.split("/").filter(Boolean),i=["/"];for(a.pop();a.length>0;)i.push(`/${a.join("/")}`),a.pop();i.forEach(e=>{let n=_(t.routes,e,t.basename||"/",!1,t.branches);n&&n.forEach(e=>o.add(e.route.id))});let l=[...o].reduce((e,t)=>Object.assign(e,{[t]:r.routes[t]}),{});return{...r,routes:l,sri:!!n||void 0}}(t,c),null,2)};`:""}\n  window.__reactRouterRouteModules = {${m.map((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`).join(",")}};\n\nimport(${JSON.stringify(t.entry.module)});`:" ";return s().createElement(s().Fragment,null,s().createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:r},type:void 0}),s().createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:o},type:"module",async:!0}))},[]),v=zt||h?[]:[...new Set(t.entry.imports.concat(yt(m,t,{includeHydrateFallback:!0})))],b="object"===typeof t.sri?t.sri:{};return Ze(!h,"The <Scripts /> element is a no-op when using RSC and can be safely removed."),zt||h?null:s().createElement(s().Fragment,null,"object"===typeof t.sri?s().createElement("script",{...e,"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:b})}}):null,f?null:s().createElement("link",{rel:"modulepreload",href:t.url,crossOrigin:e.crossOrigin,integrity:b[t.url],nonce:e.nonce,suppressHydrationWarning:!0}),s().createElement("link",{rel:"modulepreload",href:t.entry.module,crossOrigin:e.crossOrigin,integrity:b[t.entry.module],nonce:e.nonce,suppressHydrationWarning:!0}),v.map(t=>s().createElement("link",{key:t,rel:"modulepreload",href:t,crossOrigin:e.crossOrigin,integrity:b[t],nonce:e.nonce,suppressHydrationWarning:!0})),g)}function Ot(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)})}}s().Component;function Rt(e){let{error:t,isOutsideRemixApp:n}=e,{nonce:r}=Et();console.error(t);let o,a=s().createElement("script",{nonce:r,dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      '}});if(ie(t))return s().createElement(It,{title:"Unhandled Thrown Response!"},s().createElement("h1",{style:{fontSize:"24px"}},t.status," ",t.statusText),a);if(t instanceof Error)o=t;else{let e=null==t?"Unknown Error":"object"===typeof t&&"toString"in t?t.toString():JSON.stringify(t);o=new Error(e)}return s().createElement(It,{title:"Application Error!",isOutsideRemixApp:n},s().createElement("h1",{style:{fontSize:"24px"}},"Application Error"),s().createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},o.stack),a)}function It(e){let{title:t,renderScripts:n,isOutsideRemixApp:r,children:o}=e,{routeModules:a}=Et();return a.root?.Layout&&!r?o:s().createElement("html",{lang:"en"},s().createElement("head",null,s().createElement("meta",{charSet:"utf-8"}),s().createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),s().createElement("title",null,t)),s().createElement("body",null,s().createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},o,n?s().createElement(At,null):null)))}var Mt="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{Mt&&(window.__reactRouterVersion="7.18.4")}catch(Eg){}function Dt(e){let{basename:t,children:n,useTransitions:r,window:o}=e,a=s().useRef();null==a.current&&(a.current=x({window:o,v5Compat:!0}));let i=a.current,[l,c]=s().useState({action:i.action,location:i.location}),u=s().useCallback(e=>{!1===r?c(e):s().startTransition(()=>c(e))},[r]);return s().useLayoutEffect(()=>i.listen(u),[i,u]),s().createElement(rt,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i,useTransitions:r})}var $t=s().forwardRef(function(e,t){let{onClick:n,discover:r="render",prefetch:o="none",relative:a,reloadDocument:i,replace:l,mask:c,state:u,target:d,to:p,preventScrollReset:h,viewTransition:f,defaultShouldRevalidate:g,...v}=e,{basename:b,navigator:y,useTransitions:x}=s().useContext(Ee),k="string"===typeof p&&m.test(p),S=ce(p,b);p=S.to;let j=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};w(_e(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=s().useContext(Ee),{hash:o,pathname:a,search:i}=Ie(e,{relative:t}),l=a;return"/"!==n&&(l="/"===a?n:ee([n,a])),r.createHref({pathname:l,search:i,hash:o})}(p,{relative:a}),C=Ne(),T=null;if(c){let e=X(c,[],C.mask?C.mask.pathname:"/",!0);"/"!==b&&(e.pathname="/"===e.pathname?b:ee([b,e.pathname])),T=y.createHref(e)}let[L,P,_]=function(e,t){let n=s().useContext(jt),[r,o]=s().useState(!1),[a,i]=s().useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:p}=t,h=s().useRef(null);s().useEffect(()=>{if("render"===e&&i(!0),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{i(e.isIntersecting)})},{threshold:.5});return h.current&&e.observe(h.current),()=>{e.disconnect()}}},[e]),s().useEffect(()=>{if(r){let e=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(e)}}},[r]);let f=()=>{o(!0)},m=()=>{o(!1),i(!1)};return n?"intent"!==e?[a,h,{}]:[a,h,{onFocus:Ct(l,f),onBlur:Ct(c,m),onMouseEnter:Ct(u,f),onMouseLeave:Ct(d,m),onTouchStart:Ct(p,f)}]:[!1,h,{}]}(o,v),N=function(e){let{target:t,replace:n,mask:r,state:o,preventScrollReset:a,relative:i,viewTransition:l,defaultShouldRevalidate:c,useTransitions:u}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=Oe(),p=Ne(),h=Ie(e,{relative:i});return s().useCallback(f=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(f,t)){f.preventDefault();let t=void 0!==n?n:E(p)===E(h),m=()=>d(e,{replace:t,mask:r,state:o,preventScrollReset:a,relative:i,viewTransition:l,defaultShouldRevalidate:c});u?s().startTransition(()=>m()):m()}},[p,d,h,n,r,o,t,e,a,i,l,c,u])}(p,{replace:l,mask:c,state:u,target:d,preventScrollReset:h,relative:a,viewTransition:f,defaultShouldRevalidate:g,useTransitions:x});let z=!(S.isExternal||i),A=s().createElement("a",{...v,..._,href:(z?T:void 0)||S.absoluteURL||j,onClick:z?function(e){n&&n(e),e.defaultPrevented||N(e)}:n,ref:Ot(t,P),target:d,"data-discover":k||"render"!==r?void 0:"true"});return L&&!k?s().createElement(s().Fragment,null,A,s().createElement(Lt,{page:j})):A});$t.displayName="Link";var Ft=s().forwardRef(function(e,t){let{"aria-current":n="page",caseSensitive:r=!1,className:o="",end:a=!1,style:i,to:l,viewTransition:c,children:u,...d}=e,p=Ie(l,{relative:d.relative}),h=Ne(),f=s().useContext(ye),{navigator:m,basename:g}=s().useContext(Ee),v=null!=f&&function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=s().useContext(ke);w(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Ut("useViewTransitionState"),o=Ie(e,{relative:t});if(!n.isTransitioning)return!1;let a=q(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=q(n.nextLocation.pathname,r)||n.nextLocation.pathname;return null!=U(o.pathname,i)||null!=U(o.pathname,a)}(p)&&!0===c,b=m.encodeLocation?m.encodeLocation(p).pathname:p.pathname,y=h.pathname,x=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;r||(y=y.toLowerCase(),x=x?x.toLowerCase():null,b=b.toLowerCase()),x&&g&&(x=q(x,g)||x);const k="/"!==b&&b.endsWith("/")?b.length-1:b.length;let S,j=y===b||!a&&y.startsWith(b)&&"/"===y.charAt(k),E=null!=x&&(x===b||!a&&x.startsWith(b)&&"/"===x.charAt(b.length)),C={isActive:j,isPending:E,isTransitioning:v},T=j?n:void 0;S="function"===typeof o?o(C):[o,j?"active":null,E?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let L="function"===typeof i?i(C):i;return s().createElement($t,{...d,"aria-current":T,className:S,ref:t,style:L,to:l,viewTransition:c},"function"===typeof u?u(C):u)});Ft.displayName="NavLink";var Ht=s().forwardRef((e,t)=>{let{discover:n="render",fetcherKey:r,navigate:o,reloadDocument:a,replace:i,state:l,method:c=it,action:u,onSubmit:d,relative:p,preventScrollReset:h,viewTransition:f,defaultShouldRevalidate:g,...v}=e,{useTransitions:b}=s().useContext(Ee),y=Gt(),x=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:n}=s().useContext(Ee),r=s().useContext(Te);w(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),a={...Ie(e||".",{relative:t})},i=Ne();if(null==e){a.search=i.search;let e=new URLSearchParams(a.search),t=e.getAll("index");if(t.some(e=>""===e)){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();a.search=n?`?${n}`:""}}e&&"."!==e||!o.route.index||(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index");"/"!==n&&(a.pathname="/"===a.pathname?n:ee([n,a.pathname]));return E(a)}(u,{relative:p}),k="get"===c.toLowerCase()?"get":"post",S="string"===typeof u&&m.test(u);return s().createElement("form",{ref:t,method:k,action:x,onSubmit:a?d:e=>{if(d&&d(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||c,a=()=>y(t||e.currentTarget,{fetcherKey:r,method:n,navigate:o,replace:i,state:l,relative:p,preventScrollReset:h,viewTransition:f,defaultShouldRevalidate:g});b&&!1!==o?s().startTransition(()=>a()):a()},...v,"data-discover":S||"render"!==n?void 0:"true"})});function Bt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ut(e){let t=s().useContext(be);return w(t,Bt(e)),t}Ht.displayName="Form";var Vt=0,Wt=()=>`__${String(++Vt)}__`;function Gt(){let{router:e}=Ut("useSubmit"),{basename:t}=s().useContext(Ee),n=Je("useRouteId"),r=e.fetch,o=e.navigate;return s().useCallback(async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:i,method:l,encType:s,formData:c,body:u}=pt(e,t);if(!1===a.navigate){let e=a.fetcherKey||Wt();await r(e,n,a.action||i,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||l,formEncType:a.encType||s,flushSync:a.flushSync})}else await o(a.action||i,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||l,formEncType:a.encType||s,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,o,t,n])}var qt="-ms-",Jt="-moz-",Kt="-webkit-",Yt="comm",Qt="rule",Xt="decl",Zt="@keyframes",en=Math.abs,tn=String.fromCharCode,nn=Object.assign;function rn(e){return e.trim()}function on(e,t){return(e=t.exec(e))?e[0]:e}function an(e,t,n){return e.replace(t,n)}function ln(e,t,n){return e.indexOf(t,n)}function sn(e,t){return 0|e.charCodeAt(t)}function cn(e,t,n){return e.slice(t,n)}function un(e){return e.length}function dn(e){return e.length}function pn(e,t){return t.push(e),e}function hn(e,t){return e.filter(function(e){return!on(e,t)})}var fn,mn,gn=1,vn=1,bn=0,yn=0,xn=0,wn="";function kn(e,t,n,r,o,a,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:gn,column:vn,length:i,return:"",siblings:l}}function Sn(e,t){return nn(kn("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function jn(e){for(;e.root;)e=Sn(e.root,{children:[e]});pn(e,e.siblings)}function En(){return xn=yn>0?sn(wn,--yn):0,vn--,10===xn&&(vn=1,gn--),xn}function Cn(){return xn=yn<bn?sn(wn,yn++):0,vn++,10===xn&&(vn=1,gn++),xn}function Tn(){return sn(wn,yn)}function Ln(){return yn}function Pn(e,t){return cn(wn,e,t)}function _n(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Nn(e){return gn=vn=1,bn=un(wn=e),yn=0,[]}function zn(e){return wn="",e}function An(e){return rn(Pn(yn-1,In(91===e?e+2:40===e?e+1:e)))}function On(e){for(;(xn=Tn())&&xn<33;)Cn();return _n(e)>2||_n(xn)>3?"":" "}function Rn(e,t){for(;--t&&Cn()&&!(xn<48||xn>102||xn>57&&xn<65||xn>70&&xn<97););return Pn(e,Ln()+(t<6&&32==Tn()&&32==Cn()))}function In(e){for(;Cn();)switch(xn){case e:return yn;case 34:case 39:34!==e&&39!==e&&In(xn);break;case 40:41===e&&In(e);break;case 92:Cn()}return yn}function Mn(e,t){for(;Cn()&&e+xn!==57&&(e+xn!==84||47!==Tn()););return"/*"+Pn(t,yn-1)+"*"+tn(47===e?e:Cn())}function Dn(e){for(;!_n(Tn());)Cn();return Pn(e,yn)}function $n(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Fn(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case Xt:return e.return=e.return||e.value;case Yt:return"";case Zt:return e.return=e.value+"{"+$n(e.children,r)+"}";case Qt:if(!un(e.value=e.props.join(",")))return""}return un(n=$n(e.children,r))?e.return=e.value+"{"+n+"}":""}function Hn(e,t,n){switch(function(e,t){return 45^sn(e,0)?(((t<<2^sn(e,0))<<2^sn(e,1))<<2^sn(e,2))<<2^sn(e,3):0}(e,t)){case 5103:return Kt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Kt+e+e;case 4855:return Kt+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Jt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Kt+e+Jt+e+qt+e+e;case 5936:switch(sn(e,t+11)){case 114:return Kt+e+qt+an(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Kt+e+qt+an(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Kt+e+qt+an(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Kt+e+qt+e+e;case 6165:return Kt+e+qt+"flex-"+e+e;case 5187:return Kt+e+an(e,/(\w+).+(:[^]+)/,Kt+"box-$1$2"+qt+"flex-$1$2")+e;case 5443:return Kt+e+qt+"flex-item-"+an(e,/flex-|-self/g,"")+(on(e,/flex-|baseline/)?"":qt+"grid-row-"+an(e,/flex-|-self/g,""))+e;case 4675:return Kt+e+qt+"flex-line-pack"+an(e,/align-content|flex-|-self/g,"")+e;case 5548:return Kt+e+qt+an(e,"shrink","negative")+e;case 5292:return Kt+e+qt+an(e,"basis","preferred-size")+e;case 6060:return Kt+"box-"+an(e,"-grow","")+Kt+e+qt+an(e,"grow","positive")+e;case 4554:return Kt+an(e,/([^-])(transform)/g,"$1"+Kt+"$2")+e;case 6187:return an(an(an(e,/(zoom-|grab)/,Kt+"$1"),/(image-set)/,Kt+"$1"),e,"")+e;case 5495:case 3959:return an(e,/(image-set\([^]*)/,Kt+"$1$`$1");case 4968:return an(an(e,/(.+:)(flex-)?(.*)/,Kt+"box-pack:$3"+qt+"flex-pack:$3"),/space-between/,"justify")+Kt+e+e;case 4200:if(!on(e,/flex-|baseline/))return qt+"grid-column-align"+cn(e,t)+e;break;case 2592:case 3360:return qt+an(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,on(e.props,/grid-\w+-end/)})?~ln(e+(n=n[t].value),"span",0)?e:qt+an(e,"-start","")+e+qt+"grid-row-span:"+(~ln(n,"span",0)?on(n,/\d+/):+on(n,/\d+/)-+on(e,/\d+/))+";":qt+an(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return on(e.props,/grid-\w+-start/)})?e:qt+an(an(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return an(e,/(.+)-inline(.+)/,Kt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(un(e)-1-t>6)switch(sn(e,t+1)){case 109:if(45!==sn(e,t+4))break;case 102:return an(e,/(.+:)(.+)-([^]+)/,"$1"+Kt+"$2-$3$1"+Jt+(108==sn(e,t+3)?"$3":"$2-$3"))+e;case 115:return~ln(e,"stretch",0)?Hn(an(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return an(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,o,a,i,l){return qt+n+":"+r+l+(o?qt+n+"-span:"+(a?i:+i-+r)+l:"")+e});case 4949:if(121===sn(e,t+6))return an(e,":",":"+Kt)+e;break;case 6444:switch(sn(e,45===sn(e,14)?18:11)){case 120:return an(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Kt+(45===sn(e,14)?"inline-":"")+"box$3$1"+Kt+"$2$3$1"+qt+"$2box$3")+e;case 100:return an(e,":",":"+qt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return an(e,"scroll-","scroll-snap-")+e}return e}function Bn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Xt:return void(e.return=Hn(e.value,e.length,n));case Zt:return $n([Sn(e,{value:an(e.value,"@","@"+Kt)})],r);case Qt:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(on(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jn(Sn(e,{props:[an(t,/:(read-\w+)/,":-moz-$1")]})),jn(Sn(e,{props:[t]})),nn(e,{props:hn(n,r)});break;case"::placeholder":jn(Sn(e,{props:[an(t,/:(plac\w+)/,":"+Kt+"input-$1")]})),jn(Sn(e,{props:[an(t,/:(plac\w+)/,":-moz-$1")]})),jn(Sn(e,{props:[an(t,/:(plac\w+)/,qt+"input-$1")]})),jn(Sn(e,{props:[t]})),nn(e,{props:hn(n,r)})}return""})}}function Un(e){return zn(Vn("",null,null,null,[""],e=Nn(e),0,[0],e))}function Vn(e,t,n,r,o,a,i,l,s){for(var c=0,u=0,d=i,p=0,h=0,f=0,m=1,g=1,v=1,b=0,y="",x=o,w=a,k=r,S=y;g;)switch(f=b,b=Cn()){case 40:if(108!=f&&58==sn(S,d-1)){-1!=ln(S+=an(An(b),"&","&\f"),"&\f",en(c?l[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:S+=An(b);break;case 9:case 10:case 13:case 32:S+=On(f);break;case 92:S+=Rn(Ln()-1,7);continue;case 47:switch(Tn()){case 42:case 47:pn(Gn(Mn(Cn(),Ln()),t,n,s),s),5!=_n(f||1)&&5!=_n(Tn()||1)||!un(S)||" "===cn(S,-1,void 0)||(S+=" ");break;default:S+="/"}break;case 123*m:l[c++]=un(S)*v;case 125*m:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+u:-1==v&&(S=an(S,/\f/g,"")),h>0&&(un(S)-d||0===m&&47===f)&&pn(h>32?qn(S+";",r,n,d-1,s):qn(an(S," ","")+";",r,n,d-2,s),s);break;case 59:S+=";";default:if(pn(k=Wn(S,t,n,c,u,o,l,y,x=[],w=[],d,a),a),123===b)if(0===u)Vn(S,t,k,k,x,a,d,l,w);else{switch(p){case 99:if(110===sn(S,3))break;case 108:if(97===sn(S,2))break;default:u=0;case 100:case 109:case 115:}u?Vn(e,k,k,r&&pn(Wn(e,k,k,0,0,o,l,y,o,x=[],d,w),w),o,w,d,l,r?x:w):Vn(S,k,k,k,[""],w,0,l,w)}}c=u=h=0,m=v=1,y=S="",d=i;break;case 58:d=1+un(S),h=f;default:if(m<1)if(123==b)--m;else if(125==b&&0==m++&&125==En())continue;switch(S+=tn(b),b*m){case 38:v=u>0?1:(S+="\f",-1);break;case 44:l[c++]=(un(S)-1)*v,v=1;break;case 64:45===Tn()&&(S+=An(Cn())),p=Tn(),u=d=un(y=S+=Dn(Ln())),b++;break;case 45:45===f&&2==un(S)&&(m=0)}}return a}function Wn(e,t,n,r,o,a,i,l,s,c,u,d){for(var p=o-1,h=0===o?a:[""],f=dn(h),m=0,g=0,v=0;m<r;++m)for(var b=0,y=cn(e,p+1,p=en(g=i[m])),x=e;b<f;++b)(x=rn(g>0?h[b]+" "+y:an(y,/&\f/g,h[b])))&&(s[v++]=x);return kn(e,t,n,0===o?Qt:l,s,c,u,d)}function Gn(e,t,n,r){return kn(e,t,n,Yt,tn(xn),cn(e,2,-2),0,r)}function qn(e,t,n,r,o){return kn(e,t,n,Xt,cn(e,0,r),cn(e,r+1,-1),r,o)}const Jn="data-styled",Kn="active",Yn="data-styled-version",Qn="6.5.3",Xn="/*!sc*/\n",Zn="undefined"!=typeof window&&"undefined"!=typeof document;function er(e){if("undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/abdulrahman-portfolio-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}){const t={NODE_ENV:"production",PUBLIC_URL:"/abdulrahman-portfolio-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}[e];if(void 0!==t&&""!==t)return"false"!==t}}const tr=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:null!==(mn=null!==(fn=er("REACT_APP_SC_DISABLE_SPEEDY"))&&void 0!==fn?fn:er("SC_DISABLE_SPEEDY"))&&void 0!==mn?mn:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/abdulrahman-portfolio-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&!1),nr="sc-keyframes-",rr={};function or(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${n.length>0?` Args: ${n.join(", ")}`:""}`)}let ar=new Map,ir=new Map,lr=1;const sr=e=>{if(ar.has(e))return ar.get(e);for(;ir.has(lr);)lr++;const t=lr++;return ar.set(e,t),ir.set(t,e),t},cr=e=>ir.get(e),ur=(e,t)=>{lr=t+1,ar.set(e,t),ir.set(t,e)},dr=(new Set,Object.freeze([])),pr=Object.freeze({});function hr(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:pr;return e.theme!==n.theme&&e.theme||t||n.theme}const fr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,mr=/(^-|-$)/g;function gr(e){return e.replace(fr,"-").replace(mr,"")}const vr=/(a)(d)/gi,br=e=>String.fromCharCode(e+(e>25?39:97));function yr(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=br(t%52)+n;return(br(t%52)+n).replace(vr,"$1-$2")}const xr=5381,wr=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},kr=e=>wr(xr,e);function Sr(e){return yr(kr(e)>>>0)}function jr(e){return e.displayName||e.name||"Component"}function Er(e){return"string"==typeof e&&!0}function Cr(e){return Er(e)?`styled.${e}`:`Styled(${jr(e)})`}const Tr=Symbol.for("react.memo"),Lr=Symbol.for("react.forward_ref"),Pr={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},_r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Nr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zr={[Lr]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Tr]:Nr};function Ar(e){return("type"in(t=e)&&t.type.$$typeof)===Tr?Nr:"$$typeof"in e?zr[e.$$typeof]:Pr;var t}const Or=Object.defineProperty,Rr=Object.getOwnPropertyNames,Ir=Object.getOwnPropertySymbols,Mr=Object.getOwnPropertyDescriptor,Dr=Object.getPrototypeOf,$r=Object.prototype;function Fr(e,t,n){if("string"!=typeof t){const r=Dr(t);r&&r!==$r&&Fr(e,r,n);const o=Rr(t).concat(Ir(t)),a=Ar(e),i=Ar(t);for(let l=0;l<o.length;++l){const r=o[l];if(!(r in _r||n&&n[r]||i&&r in i||a&&r in a)){const n=Mr(t,r);try{Or(e,r,n)}catch(e){}}}}return e}function Hr(e){return"function"==typeof e}const Br=Symbol.for("react.forward_ref");function Ur(e){return null!=e&&("object"==typeof e||"function"==typeof e)&&e.$$typeof===Br&&"styledComponentId"in e}function Vr(e,t){return e&&t?e+" "+t:e||t||""}function Wr(e,t){return e.join(t||"")}function Gr(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function qr(e,t){if(!(arguments.length>2&&void 0!==arguments[2]&&arguments[2])&&!Gr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=qr(e[n],t[n]);else if(Gr(t))for(const n in t)e[n]=qr(e[n],t[n]);return e}function Jr(e,t){Object.defineProperty(e,"toString",{value:t})}const Kr=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const t=this.groupSizes,n=t.length;let r=n;for(;e>=r;)if(r<<=1,r<0)throw or(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let o=0,a=t.length;o<a;o++)this.tag.insertRule(n,t[o])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||0===this.groupSizes[e])return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n;for(let a=r;a<o;a++)t+=this.tag.getRule(a)+Xn;return t}},Yr=`style[${Jn}][${Yn}="${Qn}"]`,Qr=new RegExp(`^${Jn}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Xr=e=>"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType,Zr=e=>{if(!e)return document;if(Xr(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(Xr(t))return t}return document},eo=(e,t,n)=>{const r=n.split(",");let o;for(let a=0,i=r.length;a<i;a++)(o=r[a])&&e.registerName(t,o)},to=(e,t)=>{var n;const r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Xn),o=[];for(let a=0,i=r.length;a<i;a++){const t=r[a].trim();if(!t)continue;const n=t.match(Qr);if(n){const t=0|parseInt(n[1],10),r=n[2];0!==t&&(ur(r,t),eo(e,r,n[3]),e.getTag().insertRules(t,o)),o.length=0}else o.push(t)}},no=e=>{const t=Zr(e.options.target).querySelectorAll(Yr);for(let n=0,r=t.length;n<r;n++){const r=t[n];r&&r.getAttribute(Jn)!==Kn&&(to(e,r),r.parentNode&&r.parentNode.removeChild(r))}};let ro=!1;function oo(){if(!1!==ro)return ro;if("undefined"!=typeof document){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return ro=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return ro=t.getAttribute("content")||void 0}return ro=n.nc}const ao=(e,t)=>{const n=document.head,r=e||n,o=document.createElement("style"),a=(e=>{const t=Array.from(e.querySelectorAll(`style[${Jn}]`));return t[t.length-1]})(r),i=void 0!==a?a.nextSibling:null;o.setAttribute(Jn,Kn),o.setAttribute(Yn,Qn);const l=t||oo();return l&&o.setAttribute("nonce",l),r.insertBefore(o,i),o},io=class{constructor(e,t){this.element=ao(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(e=>{var t;if(e.sheet)return e.sheet;const n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets;for(let r=0,o=n.length;r<o;r++){const t=n[r];if(t.ownerNode===e)return t}throw or(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},lo=class{constructor(e,t){this.element=ao(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let so=Zn;const co={isServer:!Zn,useCSSOMInjection:!tr};class uo{static registerId(e){return sr(e)}constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pr,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;this.options=Object.assign(Object.assign({},co),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Zn&&so&&(so=!1,no(this)),Jr(this,()=>(e=>{const t=e.getTag(),{length:n}=t;let r="";for(let o=0;o<n;o++){const n=cr(o);if(void 0===n)continue;const a=e.names.get(n);if(void 0===a||!a.size)continue;const i=t.getGroup(o);if(0===i.length)continue;const l=Jn+".g"+o+'[id="'+n+'"]';let s="";for(const e of a)e.length>0&&(s+=e+",");r+=i+l+'{content:"'+s+'"}'+Xn}return r})(this))}rehydrate(){!this.server&&Zn&&no(this)}reconstructWithOptions(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=new uo(Object.assign(Object.assign({},this.options),e),this.gs,t&&this.names||void 0);return n.keyframeIds=new Set(this.keyframeIds),!this.server&&Zn&&e.target!==this.options.target&&Zr(this.options.target)!==Zr(e.target)&&no(n),n}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||(this.tag=(e=(e=>{let{useCSSOMInjection:t,target:n,nonce:r}=e;return t?new io(n,r):new lo(n,r)})(this.options),new Kr(e)));var e}hasNameForId(e,t){var n,r;return null!==(r=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==r&&r}registerName(e,t){sr(e),e.startsWith(nr)&&this.keyframeIds.add(e);const n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(sr(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(sr(e)),this.clearNames(e)}clearTag(){this.tag=void 0}}const po=new WeakSet,ho={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function fo(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in ho||e.startsWith("--")?String(t).trim():t+"px"}const mo=47;function go(e){if(45===e.charCodeAt(0)&&45===e.charCodeAt(1))return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const vo=Symbol.for("sc-keyframes");function bo(e){return Hr(e)&&!(e.prototype&&e.prototype.isReactComponent)}const yo=e=>null==e||!1===e||""===e,xo=Symbol.for("react.client.reference");function wo(e){return e.$$typeof===xo}function ko(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!yo(r)&&(Array.isArray(r)&&po.has(r)||Hr(r)?t.push(go(n)+":",r,";"):Gr(r)?(t.push(n+" {"),ko(r,t),t.push("}")):t.push(go(n)+": "+fo(n,r)+";"))}}function So(e,t,n,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];if(yo(e))return o;const a=typeof e;if("string"===a)return o.push(e),o;if("function"===a){if(wo(e))return o;if(bo(e)&&t){return So(e(t),t,n,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let a=0;a<e.length;a++)So(e[a],t,n,r,o);return o}return Ur(e)?(o.push(`.${e.styledComponentId}`),o):function(e){return"object"==typeof e&&null!==e&&vo in e}(e)?(n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o):wo(e)?o:Gr(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(ko(e,o),o):(o.push(e.toString()),o)}const jo=kr(Qn);class Eo{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=wr(jo,t),this.baseStyle=n,uo.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";{let o="";for(let r=0;r<this.rules.length;r++){const a=this.rules[r];if("string"==typeof a)o+=a;else if(a)if(bo(a)){const r=a(e);"string"==typeof r?o+=r:null!=r&&!1!==r&&(o+=Wr(So(r,e,t,n)))}else o+=Wr(So(a,e,t,n))}if(o){this.dynamicNameCache||(this.dynamicNameCache=new Map);const e=n.hash?n.hash+o:o;let a=this.dynamicNameCache.get(e);if(!a){if(a=yr(wr(wr(this.baseHash,n.hash),o)>>>0),this.dynamicNameCache.size>=200){const e=this.dynamicNameCache.keys().next().value;void 0!==e&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){const e=n(o,"."+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Vr(r,a)}}return r}}const Co=/&/g;function To(e,t){let n=0;for(;--t>=0&&92===e.charCodeAt(t);)n++;return!(1&~n)}function Lo(e){const t=e.length;let n="",r=0,o=0,a=0,i=!1,l=!1;for(let s=0;s<t;s++){const c=e.charCodeAt(s);if(0!==a||i||c!==mo||42!==e.charCodeAt(s+1))if(i)42===c&&e.charCodeAt(s+1)===mo&&(i=!1,s++);else if(34!==c&&39!==c||To(e,s)){if(0===a)if(123===c)o++;else if(125===c){if(o--,o<0){l=!0;let n=s+1;for(;n<t;){const t=e.charCodeAt(n);if(59===t||10===t)break;n++}n<t&&59===e.charCodeAt(n)&&n++,o=0,s=n-1,r=n;continue}0===o&&(n+=e.substring(r,s+1),r=s+1)}else 59===c&&0===o&&(n+=e.substring(r,s+1),r=s+1)}else 0===a?a=c:a===c&&(a=0);else i=!0,s++}return l||0!==o||0!==a?(r<t&&0===o&&0===a&&(n+=e.substring(r)),n):e}function Po(e,t){const n=t+" ",r=","+n;for(let o=0;o<e.length;o++){const a=e[o];if("rule"===a.type){a.value=(n+a.value).replaceAll(",",r);const e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&"@keyframes"!==a.type&&Po(a.children,t)}return e}function _o(){let e,t,n,{options:r=pr,plugins:o=dr}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pr;const a=(n,r,o)=>o.startsWith(t)&&o.endsWith(t)&&o.replaceAll(t,"").length>0?`.${e}`:n,i=o.slice();i.push(e=>{e.type===Qt&&e.value.includes("&")&&(n||(n=new RegExp(`\\${t}\\b`,"g")),e.props[0]=e.props[0].replace(Co,t).replace(n,a))}),r.prefix&&i.push(Bn),i.push(Fn);let l=[];const s=function(e){var t=dn(e);return function(n,r,o,a){for(var i="",l=0;l<t;l++)i+=e[l](n,r,o,a)||"";return i}}(i.concat((d=e=>l.push(e),function(e){e.root||(e=e.return)&&d(e)}))),c=function(o){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"&",t=a,n=void 0;const c=function(e){const t=-1!==e.indexOf("//"),n=-1!==e.indexOf("}");if(!t&&!n)return e;if(!t)return Lo(e);const r=e.length;let o="",a=0,i=0,l=0,s=0,c=0,u=!1;for(;i<r;){const t=e.charCodeAt(i);if(34!==t&&39!==t||To(e,i))if(0===l)if(t===mo&&i+1<r&&42===e.charCodeAt(i+1)){for(i+=2;i+1<r&&(42!==e.charCodeAt(i)||e.charCodeAt(i+1)!==mo);)i++;i+=2}else if(40!==t)if(41!==t)if(s>0)i++;else if(42===t&&i+1<r&&e.charCodeAt(i+1)===mo)o+=e.substring(a,i),i+=2,a=i,u=!0;else if(t===mo&&i+1<r&&e.charCodeAt(i+1)===mo){for(o+=e.substring(a,i);i<r&&10!==e.charCodeAt(i);)i++;a=i,u=!0}else 123===t?c++:125===t&&c--,i++;else s>0&&s--,i++;else s++,i++;else i++;else 0===l?l=t:l===t&&(l=0),i++}return u?(a<r&&(o+=e.substring(a)),0===c?o:Lo(o)):0===c?e:Lo(e)}(o);let u=Un(i||a?i+" "+a+" { "+c+" }":c);return r.namespace&&(u=Po(u,r.namespace)),l=[],$n(u,s),l},u=r;var d;let p=xr;for(let h=0;h<o.length;h++)o[h].name||or(15),p=wr(p,o[h].name);return(null==u?void 0:u.namespace)&&(p=wr(p,u.namespace)),(null==u?void 0:u.prefix)&&(p=wr(p,"p")),c.hash=p!==xr?p.toString():"",c}const No=new uo,zo=_o(),Ao=s().createContext({shouldForwardProp:void 0,styleSheet:No,stylis:zo,stylisPlugins:void 0});Ao.Consumer;function Oo(){return s().useContext(Ao)}const Ro=s().createContext(void 0);Ro.Consumer;const Io=Object.prototype.hasOwnProperty,Mo={};function Do(e,t){const n="string"!=typeof e?"sc":gr(e);Mo[n]=(Mo[n]||0)+1;const r=n+"-"+Sr(Qn+n+Mo[n]);return t?t+"-"+r:r}function $o(e,t,n){const r=Ur(e),o=e,a=!Er(e),{attrs:i=dr,componentId:l=Do(t.displayName,t.parentComponentId),displayName:c=Cr(e)}=t,u=t.displayName&&t.componentId?gr(t.displayName)+"-"+t.componentId:t.componentId||l,d=r&&o.attrs?o.attrs.concat(i).filter(Boolean):i;let{shouldForwardProp:p}=t;if(r&&o.shouldForwardProp){const e=o.shouldForwardProp;if(t.shouldForwardProp){const n=t.shouldForwardProp;p=(t,r)=>e(t,r)&&n(t,r)}else p=e}const h=new Eo(n,u,r?o.componentStyle:void 0);function f(e,t){return function(e,t,n){const{attrs:r,componentStyle:o,defaultProps:a,foldedComponentIds:i,styledComponentId:l,target:c}=e,u=s().useContext(Ro),d=Oo(),p=e.shouldForwardProp||d.shouldForwardProp,h=hr(t,u,a)||pr;let f,m;{const e=s().useRef(null),n=e.current;if(null!==n&&n[1]===h&&n[2]===d.styleSheet&&n[3]===d.stylis&&n[7]===o&&function(e,t,n){const r=e,o=t;let a=0;for(const i in o)if(Io.call(o,i)&&(a++,r[i]!==o[i]))return!1;return a===n}(n[0],t,n[4]))f=n[5],m=n[6];else{f=function(e,t,n){const r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),o=e.length>1;for(let a=0;a<e.length;a++){const n=e[a],i=Hr(n)?n(o?Object.assign({},r):r):n;for(const e in i)"className"===e?r.className=Vr(r.className,i[e]):"style"===e?r.style=Object.assign(Object.assign({},r.style),i[e]):e in t&&void 0===t[e]||(r[e]=i[e])}return"className"in t&&"string"==typeof t.className&&(r.className=Vr(r.className,t.className)),r}(r,t,h),m=o.generateAndInjectStyles(f,d.styleSheet,d.stylis);let n=0;for(const e in t)Io.call(t,e)&&n++;e.current=[t,h,d.styleSheet,d.stylis,n,f,m,o]}}const g=f.as||c,v=function(e,t,n,r){const o={};for(const a in e)void 0===e[a]||"$"===a[0]||"as"===a||"theme"===a&&e.theme===n||("forwardedAs"===a?o.as=e.forwardedAs:r&&!r(a,t)||(o[a]=e[a]));return o}(f,g,h,p);let b=Vr(i,l);return m&&(b+=" "+m),f.className&&(b+=" "+f.className),v[Er(g)&&g.includes("-")?"class":"className"]=b,n&&(v.ref=n),(0,s().createElement)(g,v)}(m,e,t)}f.displayName=c;let m=s().forwardRef(f);return m.attrs=d,m.componentStyle=h,m.displayName=c,m.shouldForwardProp=p,m.foldedComponentIds=r?Vr(o.foldedComponentIds,o.styledComponentId):"",m.styledComponentId=u,m.target=r?o.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(const o of n)qr(e,o,!0);return e}({},o.defaultProps,e):e}}),Jr(m,()=>`.${m.styledComponentId}`),a&&Fr(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Fo=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Ho(e,t){const n=[e[0]];for(let r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}const Bo=e=>(po.add(e),e);function Uo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(Hr(e)||Gr(e))return Bo(So(Ho(dr,[e,...n])));const o=e;return 0===n.length&&1===o.length&&"string"==typeof o[0]?So(o):Bo(So(Ho(o,n)))}function Vo(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:pr;if(!t)throw or(1,t);const r=function(r){for(var o=arguments.length,a=new Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];return e(t,n,Uo(r,...a))};return r.attrs=r=>Vo(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Vo(e,t,Object.assign(Object.assign({},n),r)),r}const Wo=e=>Vo($o,e),Go=Wo;Fo.forEach(e=>{Go[e]=Wo(e)});class qo{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){const n=e[t];if(Hr(n)&&!Ur(n))return!1}return!0}(e),uo.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){const o=this.componentId;if(this.isStatic){if(n.hasNameForId(o,o+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{const a=this.computeRules(e,t,n,r);n.insertRules(o,a.name,a.rules)}return}const a=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&a){const t=a.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){const o=Wr(So(this.rules,t,n,r)),a={name:this.componentId+e,rules:r(o,"")};return this.instanceRules.set(e,a),a}rebuildGroup(e){const t=this.componentId;e.clearRules(t);for(const n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}}function Jo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const o=Uo(e,...n),a=`sc-global-${Sr(JSON.stringify(o))}`,i=new qo(o,a),l=e=>{const t=Oo(),n=s().useContext(Ro);let r;{const e=s().useRef(null);null===e.current&&(e.current=t.styleSheet.allocateGSInstance(a)),r=e.current}t.styleSheet.server&&c(r,e,t.styleSheet,n,t.stylis);{const o=i.isStatic?[r,t.styleSheet,i]:[r,e,t.styleSheet,n,t.stylis,i],l=s().useRef(i);s().useLayoutEffect(()=>{t.styleSheet.server||(l.current!==i&&(t.styleSheet.clearRules(a),l.current=i),c(r,e,t.styleSheet,n,t.stylis))},o),s().useLayoutEffect(()=>()=>{t.styleSheet.server||i.removeStyles(r,t.styleSheet)},[r,t.styleSheet,i])}return t.styleSheet.server&&i.instanceRules.delete(r),null};function c(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,rr,n,o);else{const a=Object.assign(Object.assign({},t),{theme:hr(t,r,l.defaultProps)});i.renderStyles(e,a,n,o)}}return s().memo(l)}var Ko;class Yo{constructor(e,t){var n=this;this[Ko]=!0,this.inject=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:zo;const r=n.getName(t);if(!e.hasNameForId(n.id,r)){const o=t(n.rules,r,"@keyframes");e.insertRules(n.id,r,o)}},this.name=e,this.id=nr+e,this.rules=t,sr(this.id),Jr(this,()=>{throw or(12,String(this.name))})}getName(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zo;return e.hash?this.name+yr(+e.hash>>>0):this.name}}function Qo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const o=Wr(Uo(e,...n)),a=Sr(o);return new Yo(a,o)}Ko=vo;f();const Xo=(0,s().createContext)();class Zo{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}let ea;const ta=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,na={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xa9","&#169;":"\xa9","&reg;":"\xae","&#174;":"\xae","&hellip;":"\u2026","&#8230;":"\u2026","&#x2F;":"/","&#47;":"/"},ra=e=>na[e];let oa={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(ta,ra),transDefaultProps:void 0};const aa={},ia=(e,t,n,r)=>{ua(n)&&aa[n]||(ua(n)&&(aa[n]=new Date),((e,t,n,r)=>{const o=[n,{code:t,...r||{}}];if(e?.services?.logger?.forward)return e.services.logger.forward(o,"warn","react-i18next::",!0);ua(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),e?.services?.logger?.warn?e.services.logger.warn(...o):console?.warn&&console.warn(...o)})(e,t,n,r))},la=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}},sa=(e,t,n)=>{e.loadNamespaces(t,la(e,n))},ca=(e,t,n,r)=>{if(ua(n)&&(n=[n]),e.options.preload&&e.options.preload.indexOf(t)>-1)return sa(e,n,r);n.forEach(t=>{e.options.ns.indexOf(t)<0&&e.options.ns.push(t)}),e.loadLanguages(t,la(e,r))},ua=e=>"string"===typeof e,da={t:(e,t)=>{if(ua(t))return t;if("object"===typeof(n=t)&&null!==n&&ua(t.defaultValue))return t.defaultValue;var n;if("function"===typeof e)return"";if(Array.isArray(e)){const t=e[e.length-1];return"function"===typeof t?"":t}return e},ready:!1},pa=()=>()=>{},ha=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{i18n:n}=t,{i18n:r,defaultNS:o}=(0,s().useContext)(Xo)||{},a=n||r||ea;a&&!a.reportNamespaces&&(a.reportNamespaces=new Zo),a||ia(a,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next or by passing it via props or context. In monorepo setups, make sure there is only one instance of react-i18next.");const i=(0,s().useMemo)(()=>({...oa,...a?.options?.react,...t}),[a,t]),{useSuspense:l,keyPrefix:c}=i,u=e||o||a?.options?.defaultNS,d=ua(u)?[u]:u||["translation"],p=(0,s().useMemo)(()=>d,d);a?.reportNamespaces?.addUsedNamespaces?.(p);const f=(0,s().useRef)(0),m=(0,s().useCallback)(e=>{if(!a)return pa;const{bindI18n:t,bindI18nStore:n}=i,r=()=>{f.current+=1,e()};return t&&a.on(t,r),n&&a.store.on(n,r),()=>{t&&t.split(" ").forEach(e=>a.off(e,r)),n&&n.split(" ").forEach(e=>a.store.off(e,r))}},[a,i]),g=(0,s().useRef)(),v=(0,s().useCallback)(()=>{if(!a)return da;const e=!(!a.isInitialized&&!a.initializedStoreOnce)&&p.every(e=>function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(t,r)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):(ia(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0)}(e,a,i)),n=t.lng||a.language,r=f.current,o=g.current;if(o&&o.ready===e&&o.lng===n&&o.keyPrefix===c&&o.revision===r)return o;const l={t:a.getFixedT(n,"fallback"===i.nsMode?p:p[0],c,{scopeNs:p}),ready:e,lng:n,keyPrefix:c,revision:r};return g.current=l,l},[a,p,c,i,t.lng]),[b,y]=(0,s().useState)(0),{t:x,ready:w}=(0,h().useSyncExternalStore)(m,v,v);(0,s().useEffect)(()=>{if(a&&!w&&!l){const e=()=>y(e=>e+1);t.lng?ca(a,t.lng,p,e):sa(a,p,e)}},[a,t.lng,p,w,l,b]);const k=a||{},S=(0,s().useRef)(null),j=(0,s().useRef)(),E=e=>{const t=Object.getOwnPropertyDescriptors(e);t.__original&&delete t.__original;const n=Object.create(Object.getPrototypeOf(e),t);if(!Object.prototype.hasOwnProperty.call(n,"__original"))try{Object.defineProperty(n,"__original",{value:e,writable:!1,enumerable:!1,configurable:!1})}catch(r){}return n},C=(0,s().useMemo)(()=>{const e=k,t=e&&`${(n=e).language}|${n.resolvedLanguage}|${n.languages?.join(",")}`;var n;let r=e;e&&(S.current&&S.current.__original===e?j.current!==t?(r=E(e),S.current=r,j.current=t):r=S.current:(r=E(e),S.current=r,j.current=t));const o=w||l?x:function(){return ia(a,"USE_T_BEFORE_READY","useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t."),x(...arguments)},i=[o,r,w];return i.t=o,i.i18n=r,i.ready=w,i},[x,k,w,k.resolvedLanguage,k.language,k.languages]);if(a&&l&&!w){let e=!1;try{e=!1}catch(Eg){}throw e&&ia(a,"SUSPENDED_WHILE_LOADING","useTranslation: suspended while translations are loading (useSuspense is true by default). Add a <Suspense> boundary above this component, or set react.useSuspense: false in the i18next init options. https://react.i18next.com/latest/usetranslation-hook"),new Promise(e=>{const n=()=>e();t.lng?ca(a,t.lng,p,n):sa(a,p,n)})}return C},fa=Go.div`
  width: 100%;
  max-width: var(--container-width);

  min-width: 0;

  margin-inline: auto;

  padding-inline: var(--container-gutter);

  box-sizing: border-box;
`,ma=Go.section`
  width: 100%;
  min-width: 0;

  position: relative;

  padding-block: var(--section-space);

  box-sizing: border-box;
`,ga=(Go.section`
  width: 100%;
  min-width: 0;

  position: relative;

  padding-block: var(--section-space-sm);

  box-sizing: border-box;
`,Go(fa)`
  position: relative;
`,fa);var va=function(){return va=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},va.apply(this,arguments)};var ba="",ya=null,xa=null,wa=null;function ka(){ba="",null!==ya&&ya.disconnect(),null!==xa&&(window.clearTimeout(xa),xa=null)}function Sa(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function ja(){var e=null;if("#"===ba)e=document.body;else{var t=ba.replace("#","");null===(e=document.getElementById(t))&&"#top"===ba&&(e=document.body)}if(null!==e){wa(e);var n=e.getAttribute("tabindex");return null!==n||Sa(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==n||Sa(e)||(e.blur(),e.removeAttribute("tabindex")),ka(),!0}return!1}function Ea(e){return s().forwardRef(function(t,n){var r="";"string"===typeof t.to&&t.to.includes("#")?r="#"+t.to.split("#").slice(1).join("#"):"object"===typeof t.to&&"string"===typeof t.to.hash&&(r=t.to.hash);var o={};e===Ft&&(o.isActive=function(e,t){return e&&e.isExact&&t.hash===r});var a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(t,["scroll","smooth","timeout","elementId"]);return s().createElement(e,va({},o,a,{onClick:function(e){var n;ka(),ba=t.elementId?"#"+t.elementId:r,t.onClick&&t.onClick(e),""===ba||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(wa=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},n=t.timeout,window.setTimeout(function(){!1===ja()&&(null===ya&&(ya=new MutationObserver(ja)),ya.observe(document,{attributes:!0,childList:!0,subtree:!0}),xa=window.setTimeout(function(){ka()},n||1e4))},0))},ref:n}),t.children)})}var Ca=Ea($t);Ea(Ft);const Ta={origin:"https://dhomlmgyr188.github.io",basePath:"/abdulrahman-portfolio-react",defaultLanguage:"ar",languages:["ar","en"],name:{ar:"\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u063a\u064a\u0631",en:"Abdulrahman Nasser Al-Mughyir"},shortName:{ar:"\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631",en:"Abdulrahman Al-Mughyir"},locale:{ar:"ar_SA",en:"en_US"}},La=Ta.origin+Ta.basePath,Pa=e=>Ta.languages.includes(e),_a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";const t=e.startsWith("/")?e:`/${e}`;return La+t},Na=function(){const e=String((arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/")||"/");return"/"===e?"/":`/${e.replace(/^\/+|\/+$/g,"")}`},za=function(){const e=Na(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/").split("/").filter(Boolean),t=e[0],n=Pa(t),r=n?t:Ta.defaultLanguage,o=n?e.slice(1):e,a=o.length?`/${o.join("/")}`:"/";let i="notFound",l=null;return"/"===a?i="home":"/about"===a?i="about":"/projects"===a?i="projects":"/contact"===a?i="contact":"projects"===o[0]&&2===o.length&&(i="projectDetails",l=o[1]),{language:r,page:i,projectId:l,routePath:a,hasLanguage:n,isValid:"notFound"!==i}},Aa=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";const t=(e=>{const t=String(e||"").toLowerCase().replace("_","-").split("-")[0];return Pa(t)?t:Ta.defaultLanguage})(arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ta.defaultLanguage),n=Na(e);return"/"===n?`/${t}/`:`/${t}${n}/`},Oa=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const r=za(e),o=r.hasLanguage?r.language:"ar";return`${Aa(t,o)}${n}`};u();const Ra=Go.div`
  display: inline-flex;
  align-items: center;

  flex: 0 1 auto;
  flex-shrink: 0;

  width: max-content;
  max-width: 100%;

  min-width: 0;

  box-sizing: border-box;
`,Ia=Go(Ca)`
  display: inline-flex;
  align-items: baseline;
  justify-content: flex-start;

  gap: 2px;

  max-width: 100%;
  min-width: 0;

  padding: 4px 0;

  color:
    var(--color-primary);

  font-size: clamp(
    1.2rem,
    2vw,
    1.65rem
  );

  font-weight: 800;
  line-height: 1.3;

  letter-spacing: -0.02em;

  text-decoration: none;

  white-space: nowrap;

  direction: inherit;

  transition:
    color var(--transition-fast),
    opacity var(--transition-fast),
    transform var(--transition-fast);

  /* -------------------------------------------------------
     HOVER
  ------------------------------------------------------- */

  @media (hover: hover) {
    &:hover {
      color:
        var(--color-primary);

      opacity: 0.88;

      transform: translateY(-1px);
    }
  }

  /* -------------------------------------------------------
     KEYBOARD FOCUS
  ------------------------------------------------------- */

  &:focus-visible {
    outline:
      2px solid var(--focus-ring-color);

    outline-offset: 5px;

    border-radius:
      var(--radius-sm);
  }

  /* -------------------------------------------------------
     TABLET
  ------------------------------------------------------- */

  @media (max-width: 900px) {
    font-size: clamp(
      1.15rem,
      3vw,
      1.45rem
    );
  }

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 480px) {
    font-size: 1.2rem;
    letter-spacing: -0.015em;
  }

  /* -------------------------------------------------------
     SMALL MOBILE
  ------------------------------------------------------- */

  @media (max-width: 360px) {
    font-size: 1.08rem;
  }

  /* -------------------------------------------------------
     REDUCED MOTION
  ------------------------------------------------------- */

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`,Ma=Go.span`
  display: inline-block;

  min-width: 0;

  color: inherit;

  font-weight: inherit;
  line-height: inherit;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Da=Go.span`
  display: inline-block;

  flex-shrink: 0;

  color:
    var(--color-secondary);

  font-size: 1.3em;
  font-weight: 800;
  line-height: 1;

  user-select: none;
`;const $a=function(){const{t:e}=ha(),t=Ne(),n=za(t.pathname),r=n.hasLanguage?n.language:"ar",o=`${Aa("/",r)}#home`,a=e("logo.me");return(0,l().jsx)(Ra,{children:(0,l().jsxs)(Ia,{to:o,smooth:!0,"aria-label":a,title:a,children:[(0,l().jsx)(Ma,{children:a}),(0,l().jsx)(Da,{"aria-hidden":"true",children:"."})]})})},Fa="theme",Ha="light",Ba=Object.freeze({LIGHT:"light",DARK:"dark"}),Ua=e=>e===Ba.LIGHT||e===Ba.DARK,Va=()=>{if("undefined"===typeof window)return Ha;try{const e=window.localStorage.getItem(Fa);return Ua(e)?e:Ha}catch{return Ha}},Wa=(0,s().createContext)(void 0),Ga="undefined"!==typeof window?s().useLayoutEffect:s().useEffect,qa=e=>{let{children:t}=e;const[n,r]=(0,s().useState)(Va);Ga(()=>{(e=>{if("undefined"===typeof document)return;const t=Ua(e)?e:Ha;document.documentElement.setAttribute("data-theme",t),document.documentElement.style.colorScheme=t})(n),(e=>{if("undefined"!==typeof window)try{window.localStorage.setItem(Fa,e)}catch{}})(n)},[n]);const o=(0,s().useCallback)(e=>{Ua(e)&&r(e)},[]),a=(0,s().useCallback)(()=>{r(e=>e===Ba.LIGHT?Ba.DARK:Ba.LIGHT)},[]);(0,s().useEffect)(()=>{if("undefined"===typeof window)return;const e=e=>{if(e.key!==Fa&&null!==e.key)return;if(e.storageArea!==window.localStorage)return;const t=Ua(e.newValue)?e.newValue:Ha;r(t)};return window.addEventListener("storage",e),()=>{window.removeEventListener("storage",e)}},[]);const i=(0,s().useMemo)(()=>({theme:n,setTheme:o,toggleTheme:a}),[n,o,a]);return(0,l().jsx)(Wa.Provider,{value:i,children:t})},Ja=Go.div`
  display: inline-flex;
  align-items: center;

  width: max-content;
  max-width: 100%;

  min-width: 0;
  flex-shrink: 0;
`,Ka=Go.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  min-height: 42px;
  max-width: 100%;

  padding: 9px 13px;

  border: 1px solid
    ${e=>{let{$open:t}=e;return t?"var(--color-border-strong)":"transparent"}};

  border-radius: var(--radius-button);

  background-color: ${e=>{let{$open:t}=e;return t?"var(--color-surface-secondary)":"transparent"}};

  color: var(--color-text-primary);

  font: inherit;
  font-size: 0.94rem;
  font-weight: 600;
  line-height: 1.5;

  white-space: nowrap;

  cursor: pointer;

  transition:
    background-color var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast);

  &:hover {
    color: var(--color-primary);

    background-color:
      var(--color-surface-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Ya=Go.svg`
  width: 17px;
  height: 17px;

  flex-shrink: 0;

  transform: rotate(
    ${e=>{let{$open:t}=e;return t?"180deg":"0deg"}}
  );

  transition:
    transform var(--transition-fast);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Qa=Go.div`
  position: fixed;
  z-index: 2000;

  display: flex;
  flex-direction: column;

  gap: 8px;

  width: min(
    290px,
    calc(100vw - 24px)
  );

  max-height: calc(100dvh - 24px);

  padding: 10px;

  overflow-y: auto;
  overscroll-behavior: contain;

  background-color:
    var(--color-background-secondary);

  border:
    1px solid var(--color-border);

  border-radius:
    var(--radius-card);

  box-shadow:
    var(--shadow-lg);

  box-sizing: border-box;

  animation:
    settingsFadeIn 0.18s ease both;

  @keyframes settingsFadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Xa=Go.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 12px;

  width: 100%;
  min-height: 60px;

  padding: 12px 14px;

  border:
    1px solid var(--color-border);

  border-radius:
    var(--radius-button);

  background-color:
    var(--color-surface-secondary);

  color:
    var(--color-text-primary);

  font: inherit;
  text-align: start;

  cursor: pointer;

  transition:
    background-color var(--transition-fast),
    border-color var(--transition-fast),
    transform var(--transition-fast);

  @media (hover: hover) {
    &:hover {
      background-color:
        var(--color-surface-hover);

      border-color:
        var(--color-border-strong);

      transform: translateY(-1px);
    }
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline:
      2px solid var(--focus-ring-color);

    outline-offset: -3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover,
    &:active {
      transform: none;
    }
  }
`,Za=Go.span`
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  gap: 4px;

  min-width: 0;
`,ei=Go.span`
  color: var(--color-text-primary);

  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.5;
`,ti=Go.span`
  color: var(--color-text-secondary);

  font-size: 0.78rem;
  font-weight: 400;
  line-height: 1.5;
`,ni=Go.span`
  flex-shrink: 0;

  color: var(--color-primary);

  font-size: 0.85rem;
  font-weight: 700;

  white-space: nowrap;
`;const ri=function(e){let{mobile:t=!1}=e;const{i18n:n}=ha(),{theme:r,toggleTheme:a}=(()=>{const e=(0,s().useContext)(Wa);if(void 0===e)throw new Error("useTheme must be used within a ThemeProvider.");return e})(),[i,c]=(0,s().useState)(!1),[u,d]=(0,s().useState)({top:0,left:0}),p=(0,s().useRef)(null),h=(0,s().useRef)(null),f=(0,s().useId)(),m="dark"===r,g=(n.resolvedLanguage||n.language||"ar").startsWith("ar"),v=g?{settings:"\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a",changeLanguage:"\u062a\u063a\u064a\u064a\u0631 \u0627\u0644\u0644\u063a\u0629",changeTheme:"\u062a\u063a\u064a\u064a\u0631 \u0627\u0644\u0645\u0638\u0647\u0631",arabic:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629",english:"English",lightMode:"\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0641\u0627\u062a\u062d",darkMode:"\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u062f\u0627\u0643\u0646",light:"\u0641\u0627\u062a\u062d",dark:"\u062f\u0627\u0643\u0646"}:{settings:"Settings",changeLanguage:"Change language",changeTheme:"Change theme",arabic:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629",english:"English",lightMode:"Light mode",darkMode:"Dark mode",light:"Light",dark:"Dark"},b=(0,s().useCallback)(()=>{var e;const t=p.current;if(!t)return;const n=t.getBoundingClientRect(),r=window.innerWidth,o=window.innerHeight,a=12,i=Math.min(290,r-24),l=g?n.right-i:n.left,s=Math.max(a,Math.min(l,r-i-a)),c=(null===(e=h.current)||void 0===e?void 0:e.offsetHeight)||160,u=o-n.bottom,f=n.top;let m;m=u<c+8+a&&f>u?n.top-c-8:n.bottom+8,m=Math.max(a,Math.min(m,o-c-a)),d(e=>e.top===m&&e.left===s?e:{top:m,left:s})},[g]);(0,s().useLayoutEffect)(()=>{i&&b()},[i,b]),(0,s().useEffect)(()=>{if(!i)return;const e=e=>{var t,n;const r=null===(t=p.current)||void 0===t?void 0:t.contains(e.target),o=null===(n=h.current)||void 0===n?void 0:n.contains(e.target);r||o||c(!1)};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[i]),(0,s().useEffect)(()=>{if(!i)return;const e=e=>{var t,n;if("Escape"===e.key)return e.preventDefault(),e.stopImmediatePropagation(),c(!1),void(null===(n=p.current)||void 0===n||n.focus());if("ArrowDown"!==e.key&&"ArrowUp"!==e.key)return;const r=h.current;if(!r)return;const o=Array.from(r.querySelectorAll("button:not(:disabled)"));if(0===o.length)return;const a=o.indexOf(document.activeElement);let i;i="ArrowDown"===e.key?a<0?0:(a+1)%o.length:a<0?o.length-1:(a-1+o.length)%o.length,e.preventDefault(),null===(t=o[i])||void 0===t||t.focus()};return document.addEventListener("keydown",e,!0),()=>{document.removeEventListener("keydown",e,!0)}},[i]),(0,s().useEffect)(()=>{if(!i)return;const e=()=>{b()};return window.addEventListener("resize",e),window.addEventListener("scroll",e,!0),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",e,!0)}},[i,b]);const y=Ne(),x=Oe();return(0,l().jsxs)(Ja,{"data-mobile":t,children:[(0,l().jsxs)(Ka,{ref:p,type:"button",$open:i,"aria-label":v.settings,"aria-expanded":i,"aria-controls":f,"aria-haspopup":"true",onClick:()=>{c(e=>!e)},children:[(0,l().jsx)("span",{children:v.settings}),(0,l().jsx)(Ya,{$open:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:(0,l().jsx)("path",{d:"m6 9 6 6 6-6"})})]}),i&&(0,o().createPortal)((0,l().jsxs)(Qa,{ref:h,id:f,dir:g?"rtl":"ltr",role:"group","aria-label":v.settings,style:{top:u.top,left:u.left},onPointerDown:e=>{e.stopPropagation()},children:[(0,l().jsxs)(Xa,{type:"button",onClick:async()=>{const e="ar"===za(y.pathname).language?"en":"ar",t=((e,t)=>{const n=za(e);return Aa(n.routePath,t)})(y.pathname,e);try{await n.changeLanguage(e),x(`${t}${y.search}${y.hash}`),c(!1)}catch(r){console.error("Failed to change language:",r)}},"aria-label":g?"\u0627\u0644\u062a\u0628\u062f\u064a\u0644 \u0625\u0644\u0649 \u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629":"Switch to Arabic",children:[(0,l().jsxs)(Za,{children:[(0,l().jsx)(ei,{children:v.changeLanguage}),(0,l().jsx)(ti,{children:g?v.arabic:v.english})]}),(0,l().jsx)(ni,{children:g?v.english:v.arabic})]}),(0,l().jsxs)(Xa,{type:"button",onClick:()=>{a(),c(!1)},"aria-label":m?g?"\u0627\u0644\u062a\u0628\u062f\u064a\u0644 \u0625\u0644\u0649 \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0641\u0627\u062a\u062d":"Switch to light mode":g?"\u0627\u0644\u062a\u0628\u062f\u064a\u0644 \u0625\u0644\u0649 \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u062f\u0627\u0643\u0646":"Switch to dark mode",children:[(0,l().jsxs)(Za,{children:[(0,l().jsx)(ei,{children:v.changeTheme}),(0,l().jsx)(ti,{children:m?v.darkMode:v.lightMode})]}),(0,l().jsx)(ni,{children:m?v.light:v.dark})]})]}),document.body)]})},oi=[{id:"home",label:"nav.home",to:"/#home"},{id:"about",label:"nav.about",to:"/about"},{id:"projects",label:"nav.projects",to:"/projects"},{id:"contact",label:"nav.contact",to:"/contact"}],ai=Go.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 0;

  @media (max-width: 900px) {
    justify-content: flex-end;
  }
`,ii=Go.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: clamp(
    12px,
    2vw,
    28px
  );

  min-width: 0;

  @media (max-width: 900px) {
    display: none;
  }
`,li=Go(Ca)`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 44px;

  padding: 10px 4px;

  color: ${e=>{let{$active:t}=e;return t?"var(--color-primary)":"var(--color-text-primary)"}};

  font-size: 0.95rem;

  font-weight: ${e=>{let{$active:t}=e;return t?700:500}};

  line-height: 1.5;

  text-align: center;
  text-decoration: none;

  white-space: nowrap;

  transition:
    color var(--transition-fast);

  /* -------------------------------------------------------
     ACTIVE UNDERLINE
  ------------------------------------------------------- */

  &::after {
    content: "";

    position: absolute;

    inset-inline-start: 0;
    inset-block-end: 3px;

    width: ${e=>{let{$active:t}=e;return t?"100%":"0"}};

    height: 3px;

    border-radius: var(--radius-full);

    background-color:
      var(--color-primary);

    transition:
      width var(--transition-fast);
  }

  /* -------------------------------------------------------
     HOVER
  ------------------------------------------------------- */

  &:hover {
    color: var(--color-primary);
  }

  &:hover::after {
    width: 100%;
  }

  /* -------------------------------------------------------
     FOCUS
  ------------------------------------------------------- */

  &:focus-visible {
    outline:
      2px solid var(--focus-ring-color);

    outline-offset: 4px;

    border-radius: var(--radius-sm);
  }

  /* -------------------------------------------------------
     REDUCED MOTION
  ------------------------------------------------------- */

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::after {
      transition: none;
    }
  }
`,si=Go.button`
  display: none;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  width: 44px;
  height: 44px;

  min-width: 44px;
  min-height: 44px;

  padding: 0;

  border:
    1px solid var(--color-border);

  border-radius:
    var(--radius-button);

  background-color:
    var(--color-surface-secondary);

  color:
    var(--color-text-primary);

  cursor: pointer;

  transition:
    background-color var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast),
    transform var(--transition-fast);

  /* -------------------------------------------------------
     OPEN STATE
  ------------------------------------------------------- */

  &[aria-expanded="true"] {
    background-color:
      var(--color-primary-soft);

    color:
      var(--color-primary);

    border-color:
      var(--color-border-strong);
  }

  /* -------------------------------------------------------
     HOVER
  ------------------------------------------------------- */

  @media (hover: hover) {
    &:hover {
      background-color:
        var(--color-surface-hover);

      color:
        var(--color-primary);

      border-color:
        var(--color-border-strong);

      transform: translateY(-1px);
    }
  }

  /* -------------------------------------------------------
     FOCUS
  ------------------------------------------------------- */

  &:focus-visible {
    outline:
      2px solid var(--focus-ring-color);

    outline-offset: 3px;
  }

  /* -------------------------------------------------------
     MOBILE VISIBILITY
  ------------------------------------------------------- */

  @media (max-width: 900px) {
    display: inline-flex;
  }

  /* -------------------------------------------------------
     REDUCED MOTION
  ------------------------------------------------------- */

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`,ci=e=>{let{open:t}=e;return(0,l().jsx)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:t?(0,l().jsxs)(l().Fragment,{children:[(0,l().jsx)("path",{d:"M18 6 6 18"}),(0,l().jsx)("path",{d:"M6 6 18 18"})]}):(0,l().jsxs)(l().Fragment,{children:[(0,l().jsx)("path",{d:"M4 6h16"}),(0,l().jsx)("path",{d:"M4 12h16"}),(0,l().jsx)("path",{d:"M4 18h16"})]})})},ui=Go.nav`
  display: none;

  @media (max-width: 900px) {
    position: absolute;

    inset-block-start: 100%;
    inset-inline: 0;

    z-index: 1000;

    display: ${e=>{let{$open:t}=e;return t?"flex":"none"}};

    flex-direction: column;

    width: 100%;

    gap: 6px;

    padding:
      18px
      var(--container-gutter)
      24px;

    max-height: calc(
      100dvh - var(--header-height)
    );

    overflow-y: auto;
    overscroll-behavior: contain;

    background-color:
      var(--color-background-secondary);

    border-bottom:
      1px solid var(--color-border);

    box-shadow:
      var(--shadow-md);

    box-sizing: border-box;
  }

  @media (max-width: 480px) {
    padding-block:
      12px
      20px;

    gap: 4px;
  }
`,di=Go(Ca)`
  display: flex;
  align-items: center;

  width: 100%;

  min-height: 46px;

  padding: 12px 16px;

  border:
    1px solid
    ${e=>{let{$active:t}=e;return t?"var(--color-border)":"transparent"}};

  border-radius:
    var(--radius-button);

  background-color: ${e=>{let{$active:t}=e;return t?"var(--color-primary-soft)":"transparent"}};

  color: ${e=>{let{$active:t}=e;return t?"var(--color-primary)":"var(--color-text-primary)"}};

  font-size: 0.95rem;

  font-weight: ${e=>{let{$active:t}=e;return t?700:500}};

  line-height: 1.6;

  text-align: start;
  text-decoration: none;

  transition:
    background-color var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast);

  /* -------------------------------------------------------
     HOVER
  ------------------------------------------------------- */

  &:hover {
    background-color:
      var(--color-surface-hover);

    color:
      var(--color-primary);

    text-decoration: none;
  }

  /* -------------------------------------------------------
     FOCUS
  ------------------------------------------------------- */

  &:focus-visible {
    outline:
      2px solid var(--focus-ring-color);

    outline-offset: -2px;
  }

  /* -------------------------------------------------------
     REDUCED MOTION
  ------------------------------------------------------- */

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,pi=Go.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;

  margin-block-start: 12px;

  padding:
    14px
    8px
    4px;

  border-top:
    1px solid var(--color-border);
`;const hi=function(e){let{activeLink:t}=e;const{t:n,i18n:r}=ha(),o=Ne(),a=za(o.pathname),i=a.hasLanguage?a.language:"ar",c="projectDetails"===a.page?"projects":"notFound"===a.page?null:a.page,u=e=>"home"===e.id?`${Aa("/",i)}#home`:Aa(e.to,i),[d,p]=(0,s().useState)(!1),h=(0,s().useRef)(null),f=(0,s().useRef)(null),m=(0,s().useRef)(null),g=`mobile-navigation-${(0,s().useId)().replace(/:/g,"")}`,v=r.resolvedLanguage||r.language||"ar",b=v.startsWith("ar"),y=b?"\u0627\u0644\u062a\u0646\u0642\u0644 \u0627\u0644\u0631\u0626\u064a\u0633\u064a":"Main navigation",x=b?"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u0648\u0627\u0644":"Mobile navigation",w=b?"\u0641\u062a\u062d \u0627\u0644\u0642\u0627\u0626\u0645\u0629":"Open menu",k=b?"\u0625\u063a\u0644\u0627\u0642 \u0627\u0644\u0642\u0627\u0626\u0645\u0629":"Close menu";(0,s().useEffect)(()=>{p(!1)},[o.pathname,o.hash]),(0,s().useEffect)(()=>{p(!1)},[v]),(0,s().useEffect)(()=>{if(!d)return;const e=e=>{const t=h.current;t&&!t.contains(e.target)&&p(!1)},t=e=>{var t;"Escape"===e.key&&(p(!1),null===(t=f.current)||void 0===t||t.focus())};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",t)}},[d]),(0,s().useEffect)(()=>{const e=window.matchMedia("(min-width: 901px)"),t=e=>{e.matches&&p(!1)};return e.addEventListener?e.addEventListener("change",t):e.addListener(t),()=>{e.removeEventListener?e.removeEventListener("change",t):e.removeListener(t)}},[]),(0,s().useEffect)(()=>{if(!d)return;const e=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}},[d]);const S=()=>{p(!1)};return(0,l().jsxs)(ai,{ref:h,children:[(0,l().jsx)(ii,{"aria-label":y,children:oi.map(e=>{const t=c===e.id;return(0,l().jsx)(li,{to:u(e),smooth:!0,$active:t,"aria-current":t?"page":void 0,children:n(e.label)},e.id)})}),(0,l().jsx)(si,{ref:f,type:"button","aria-label":d?k:w,"aria-expanded":d,"aria-controls":g,onClick:()=>{p(e=>!e)},children:(0,l().jsx)(ci,{open:d})}),(0,l().jsxs)(ui,{ref:m,id:g,$open:d,"aria-label":x,children:[oi.map(e=>{const t=c===e.id;return(0,l().jsx)(di,{to:u(e),smooth:!0,$active:t,"aria-current":t?"page":void 0,onClick:S,children:n(e.label)},e.id)}),(0,l().jsx)(pi,{children:(0,l().jsx)(ri,{mobile:!0})})]})]})},fi=Go.header`
  position: fixed;

  inset-block-start: 0;
  inset-inline: 0;

  z-index: 999;

  display: flex;
  align-items: center;

  width: 100%;

  height: var(--header-height);
  min-height: var(--header-height);

  background-color: ${e=>{let{$scrolled:t}=e;return t?"var(--color-background-secondary)":"var(--color-background)"}};

  border-bottom: 1px solid
    ${e=>{let{$scrolled:t}=e;return t?"var(--color-border)":"transparent"}};

  box-shadow: ${e=>{let{$scrolled:t}=e;return t?"var(--shadow-sm)":"none"}};

  transition:
    background-color var(--transition-normal),
    border-color var(--transition-normal),
    box-shadow var(--transition-normal);

  box-sizing: border-box;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,mi=Go(ga)`
  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    auto
    minmax(0, 1fr);

  align-items: center;

  width: 100%;

  height: 100%;
  min-height: var(--header-height);

  gap: clamp(
    12px,
    2vw,
    24px
  );

  /* -------------------------------------------------------
     LOGO
  ------------------------------------------------------- */

  > :first-child {
    justify-self: start;

    min-width: 0;
  }

  /* -------------------------------------------------------
     NAVIGATION
  ------------------------------------------------------- */

  > :nth-child(2) {
    justify-self: center;

    min-width: 0;
  }

  /* -------------------------------------------------------
     SETTINGS
  ------------------------------------------------------- */

  > :last-child {
    justify-self: end;

    min-width: 0;
  }

  /* -------------------------------------------------------
     TABLET & MOBILE
  ------------------------------------------------------- */

  @media (max-width: 900px) {
    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 12px;

    > :first-child {
      flex: 0 1 auto;
      min-width: 0;
    }

    > :nth-child(2) {
      flex: 0 0 auto;
      margin-inline-start: auto;
    }

    /*
      Hide desktop settings.

      Navigation.js already renders
      <Settings mobile /> inside the
      mobile menu.
    */

    > :last-child {
      display: none;
    }
  }

  /* -------------------------------------------------------
     SMALL MOBILE
  ------------------------------------------------------- */

  @media (max-width: 480px) {
    gap: 8px;
  }
`,gi=Go.a`
  position: fixed;

  inset-block-start: 12px;
  inset-inline-start: 12px;

  z-index: 1001;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 42px;

  padding: 10px 16px;

  border-radius: var(--button-radius);

  background-color:
    var(--button-primary-bg);

  color:
    var(--button-primary-text);

  font-size: 0.9rem;
  font-weight: 700;

  text-decoration: none;

  transform: translateY(-160%);

  transition:
    transform var(--transition-fast);

  &:focus,
  &:focus-visible {
    transform: translateY(0);

    outline:
      2px solid var(--focus-ring-color);

    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;const vi=function(){const e=Ne(),{i18n:t}=ha(),[n,r]=(0,s().useState)(!1),o=(t.resolvedLanguage||t.language||"ar").startsWith("ar"),a="/"===e.pathname?"home":e.pathname.split("/").filter(Boolean)[0]||"home";return(0,s().useEffect)(()=>{const e=()=>{r(window.scrollY>15)};return e(),window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e)}},[]),(0,l().jsxs)(l().Fragment,{children:[(0,l().jsx)(gi,{href:"#main-content",children:o?"\u062a\u062e\u0637\u064a \u0625\u0644\u0649 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0631\u0626\u064a\u0633\u064a":"Skip to main content"}),(0,l().jsx)(fi,{$scrolled:n,children:(0,l().jsxs)(mi,{children:[(0,l().jsx)($a,{}),(0,l().jsx)(hi,{activeLink:a}),(0,l().jsx)(ri,{})]})})]})};var bi={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},yi=s().createContext&&s().createContext(bi),xi=["attr","size","title"];function wi(){return wi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wi.apply(null,arguments)}function ki(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Si(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ki(Object(n),!0).forEach(function(t){ji(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ki(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ji(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ei(e){return e&&e.map((e,t)=>s().createElement(e.tag,Si({key:t},e.attr),Ei(e.child)))}function Ci(e){return t=>s().createElement(Ti,wi({attr:Si({},e.attr)},t),Ei(e.child))}function Ti(e){var t=t=>{var n,r=e.attr,o=e.size,a=e.title,i=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,xi),l=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),s().createElement("svg",wi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,i,{className:n,style:Si(Si({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&s().createElement("title",null,a),e.children)};return void 0!==yi?s().createElement(yi.Consumer,null,e=>t(e)):t(bi)}function Li(e){return Ci({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}function Pi(e){return Ci({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm169.5 338.9c-3.5 8.1-18.1 14-44.8 18.2-1.4 1.9-2.5 9.8-4.3 15.9-1.1 3.7-3.7 5.9-8.1 5.9h-.2c-6.2 0-12.8-2.9-25.8-2.9-17.6 0-23.7 4-37.4 13.7-14.5 10.3-28.4 19.1-49.2 18.2-21 1.6-38.6-11.2-48.5-18.2-13.8-9.7-19.8-13.7-37.4-13.7-12.5 0-20.4 3.1-25.8 3.1-5.4 0-7.5-3.3-8.3-6-1.8-6.1-2.9-14.1-4.3-16-13.8-2.1-44.8-7.5-45.5-21.4-.2-3.6 2.3-6.8 5.9-7.4 46.3-7.6 67.1-55.1 68-57.1 0-.1.1-.2.2-.3 2.5-5 3-9.2 1.6-12.5-3.4-7.9-17.9-10.7-24-13.2-15.8-6.2-18-13.4-17-18.3 1.6-8.5 14.4-13.8 21.9-10.3 5.9 2.8 11.2 4.2 15.7 4.2 3.3 0 5.5-.8 6.6-1.4-1.4-23.9-4.7-58 3.8-77.1C183.1 100 230.7 96 244.7 96c.6 0 6.1-.1 6.7-.1 34.7 0 68 17.8 84.3 54.3 8.5 19.1 5.2 53.1 3.8 77.1 1.1.6 2.9 1.3 5.7 1.4 4.3-.2 9.2-1.6 14.7-4.2 4-1.9 9.6-1.6 13.6 0 6.3 2.3 10.3 6.8 10.4 11.9.1 6.5-5.7 12.1-17.2 16.6-1.4.6-3.1 1.1-4.9 1.7-6.5 2.1-16.4 5.2-19 11.5-1.4 3.3-.8 7.5 1.6 12.5.1.1.1.2.2.3.9 2 21.7 49.5 68 57.1 4 1 7.1 5.5 4.9 10.8z"},child:[]}]})(e)}function _i(e){return Ci({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function Ni(e){return Ci({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function zi(e){return Ci({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function Ai(e){return Ci({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"},child:[]}]})(e)}function Oi(e){return Ci({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(e)}function Ri(e){return Ci({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)}function Ii(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z"},child:[]}]})(e)}function Mi(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9"},child:[]},{tag:"circle",attr:{cx:"12",cy:"9",r:"2.5"},child:[]}]})(e)}function Di(e){return Ci({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"},child:[]}]})(e)}function $i(e){return Ci({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"},child:[]}]})(e)}const Fi=Go.footer`
  width: 100%;
  min-width: 0;

  margin-block-start: auto;

  background-color:
    var(--color-background-secondary);

  color:
    var(--color-text-primary);

  border-top:
    1px solid var(--color-border);
`,Hi=Go(ga)`
  display: grid;

  grid-template-columns:
    minmax(0, 1.2fr)
    minmax(140px, 0.7fr)
    minmax(0, 1.1fr);

  align-items: start;

  gap: clamp(28px, 4vw, 56px);

  padding-block:
    clamp(42px, 5vw, 64px);

  @media (max-width: 950px) {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));

    gap: 32px;
  }

  @media (max-width: 600px) {
    grid-template-columns:
      minmax(0, 1fr);

    gap: 28px;

    padding-block: 36px 30px;
  }
`,Bi=Go.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 16px;

  min-width: 0;

  @media (max-width: 600px) {
    width: 100%;
    gap: 14px;
  }
`,Ui=Go(Bi)`
  @media (max-width: 950px) {
    grid-column: 1 / -1;
  }

  @media (max-width: 600px) {
    align-items: center;
    text-align: center;

    padding-block-end: 24px;

    border-bottom:
      1px solid var(--color-border);
  }
`,Vi=Go.h2`
  margin: 0;

  color: var(--color-heading);

  font-size: clamp(
    1.4rem,
    2.2vw,
    1.8rem
  );

  font-weight: 800;
  line-height: 1.4;

  overflow-wrap: break-word;
  text-wrap: balance;
`,Wi=Go.p`
  margin: 0;

  max-width: 380px;

  color: var(--color-text-secondary);

  font-size: 0.92rem;
  line-height: 1.9;

  overflow-wrap: break-word;
  text-wrap: pretty;

  @media (max-width: 600px) {
    max-width: 340px;
    font-size: 0.88rem;
  }
`,Gi=Go.h3`
  margin: 0;

  color: var(--color-heading);

  font-size: 1.04rem;
  font-weight: 700;
  line-height: 1.5;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`,qi=Go.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 12px;

  width: 100%;

  @media (max-width: 600px) {
    display: grid;

    grid-template-columns:
      repeat(2, minmax(0, 1fr));

    column-gap: 18px;
    row-gap: 14px;

    justify-items: start;
  }
`,Ji=Go(Ca)`
  position: relative;

  display: inline-block;

  width: fit-content;
  max-width: 100%;

  padding: 3px 0;

  color: var(--color-text-secondary);

  font-size: 0.93rem;
  font-weight: 500;
  line-height: 1.7;

  text-decoration: none;

  transition:
    color var(--transition-fast);

  &::after {
    content: "";

    position: absolute;

    inset-inline-start: 0;
    inset-block-end: 0;

    width: 100%;
    height: 1px;

    background-color:
      var(--color-primary);

    transform: scaleX(0);

    transform-origin: center;

    transition:
      transform var(--transition-fast);
  }

  &:hover {
    color: var(--color-primary);
  }

  &:hover::after,
  &:focus-visible::after {
    transform: scaleX(1);
  }

  &:focus-visible {
    outline:
      2px solid var(--focus-ring-color);

    outline-offset: 4px;
  }

  @media (max-width: 600px) {
    min-height: 32px;
    font-size: 0.91rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::after {
      transition: none;
    }
  }
`,Ki=Go.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 10px;

  @media (max-width: 600px) {
    justify-content: center;
    gap: 9px;
  }
`,Yi=Go.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  width: 44px;
  height: 44px;

  border:
    1px solid var(--color-border);

  border-radius:
    var(--radius-button);

  background-color:
    var(--color-card-background);

  color:
    var(--social-color, var(--color-primary));

  text-decoration: none;

  transition:
    transform var(--transition-fast),
    background-color var(--transition-fast),
    border-color var(--transition-fast),
    box-shadow var(--transition-fast);

  svg {
    display: block;

    width: 21px;
    height: 21px;

    fill: currentColor;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);

      background-color:
        var(--color-surface-hover);

      border-color:
        var(--color-border-strong);

      box-shadow:
        var(--shadow-sm);
    }
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline:
      2px solid var(--focus-ring-color);

    outline-offset: 3px;
  }

  @media (max-width: 600px) {
    width: 42px;
    height: 42px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover,
    &:active {
      transform: none;
    }
  }
`,Qi=Go.div`
  display: flex;
  flex-direction: column;

  gap: 12px;

  width: 100%;

  @media (max-width: 600px) {
    gap: 0;

    padding: 6px 14px;

    background-color:
      var(--color-card-background);

    border:
      1px solid var(--color-border);

    border-radius:
      var(--radius-card);
  }
`,Xi=Go.div`
  display: flex;
  align-items: center;

  gap: 12px;

  min-width: 0;

  @media (max-width: 600px) {
    min-height: 60px;

    padding-block: 10px;

    &:not(:last-child) {
      border-bottom:
        1px solid var(--color-border);
    }
  }
`,Zi=Go.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  width: 38px;
  height: 38px;

  border-radius: 11px;

  background-color:
    var(--color-surface-secondary);

  color:
    var(--icon-color, var(--color-primary));

  svg {
    display: block;

    width: 19px;
    height: 19px;
  }
`,el=Go.span`
  min-width: 0;

  color: var(--color-text-secondary);

  font-size: 0.9rem;
  line-height: 1.8;

  overflow-wrap: anywhere;
`,tl=Go.a`
  color: inherit;

  text-decoration: none;
  text-underline-offset: 4px;

  transition:
    color var(--transition-fast);

  &:hover {
    color: var(--color-primary);
    text-decoration: underline;
  }

  &:focus-visible {
    outline:
      2px solid var(--focus-ring-color);

    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,nl=Go.div`
  border-top:
    1px solid var(--color-border);
`,rl=Go(ga)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-block: 20px;

  @media (max-width: 600px) {
    padding-block: 18px;
  }
`,ol=Go.p`
  margin: 0;

  color: var(--color-text-secondary);

  font-size: 0.83rem;
  line-height: 1.8;

  text-align: center;
`,al={linkedin:{icon:(0,l().jsx)(_i,{}),color:"var(--color-linkedin, #0A66C2)",label:"LinkedIn"},github:{icon:(0,l().jsx)(zi,{}),color:"var(--color-github, var(--color-text-primary))",label:"GitHub"},whatsapp:{icon:(0,l().jsx)(Li,{}),color:"var(--color-whatsapp, #25D366)",label:"WhatsApp"},email:{icon:(0,l().jsx)($i,{}),color:"var(--color-email, #EA4335)",label:"Email"},instagram:{icon:(0,l().jsx)(Ni,{}),color:"var(--color-instgram, #E4405F)",label:"Instagram"},instgram:{icon:(0,l().jsx)(Ni,{}),color:"var(--color-instgram, #E4405F)",label:"Instagram"},snapchat:{icon:(0,l().jsx)(Pi,{}),color:"var(--color-snapchat, #FFCC00)",label:"Snapchat"}};const il=function(){const{t:e}=ha(),t=Ne(),n=e("home:footer.socialMedia.social",{returnObjects:!0}),r=Array.isArray(n)?n:[],o=e("home:footer.contactInfo.email.value"),a=e("home:footer.contactInfo.tel.value"),i=e("home:footer.contactInfo.location.value"),s=(new Date).getFullYear();return(0,l().jsxs)(Fi,{children:[(0,l().jsxs)(Hi,{children:[(0,l().jsxs)(Ui,{children:[(0,l().jsx)(Vi,{children:e("home:hero.name")}),(0,l().jsx)(Wi,{children:e("home:hero.introduction")}),(0,l().jsx)(Ki,{children:r.map(e=>{const t=al[String(e.id).toLowerCase()];return t&&e.href?(0,l().jsx)(Yi,{href:e.href,target:"_blank",rel:"noopener noreferrer","aria-label":t.label,title:t.label,style:{"--social-color":t.color},children:t.icon},e.id):null})})]}),(0,l().jsxs)(Bi,{children:[(0,l().jsx)(Gi,{children:e("home:footer.quickLinks.title")}),(0,l().jsx)(qi,{"aria-label":e("home:footer.quickLinks.title"),children:[{id:"home",label:"nav.home",to:"/#home"},{id:"about",label:"nav.about",to:"/about"},{id:"projects",label:"nav.projects",to:"/projects"},{id:"contact",label:"nav.contact",to:"/contact"}].map(n=>(0,l().jsx)(Ji,{to:"home"===n.id?Oa(t.pathname,"/","#home"):Oa(t.pathname,n.to),smooth:!0,children:e(n.label)},n.id))})]}),(0,l().jsxs)(Bi,{children:[(0,l().jsx)(Gi,{children:e("home:footer.contactInfo.title")}),(0,l().jsxs)(Qi,{children:[(0,l().jsxs)(Xi,{children:[(0,l().jsx)(Zi,{"aria-hidden":"true",style:{"--icon-color":"var(--color-email, #EA4335)"},children:(0,l().jsx)(Ii,{})}),(0,l().jsx)(el,{dir:"ltr",children:(0,l().jsx)(tl,{href:`mailto:${o}`,children:o})})]}),(0,l().jsxs)(Xi,{children:[(0,l().jsx)(Zi,{"aria-hidden":"true",style:{"--icon-color":"var(--color-whatsapp, #25D366)"},children:(0,l().jsx)(Di,{})}),(0,l().jsx)(el,{dir:"ltr",children:(0,l().jsx)(tl,{href:`tel:${a.replace(/[^\d+]/g,"")}`,children:a})})]}),(0,l().jsxs)(Xi,{children:[(0,l().jsx)(Zi,{"aria-hidden":"true",style:{"--icon-color":"var(--color-primary)"},children:(0,l().jsx)(Mi,{})}),(0,l().jsx)(el,{children:i})]})]})]})]}),(0,l().jsx)(nl,{children:(0,l().jsx)(rl,{children:(0,l().jsxs)(ol,{children:["\xa9 ",s," ",e("home:footer.copyright")]})})})]})},ll=new Map,sl=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;window.scrollTo({top:e,left:0,behavior:"instant"})},cl=()=>{const{pathname:e,search:t,hash:n,key:r}=Ne(),o=s().useContext(Ce).navigationType,a=(0,s().useRef)(null);return(0,s().useLayoutEffect)(()=>{const i={pathname:e,search:t,hash:n,key:r},l=a.current;l&&l.key!==r&&ll.set(l.key,window.scrollY),a.current=i,n||("POP"===o&&ll.has(r)?sl(ll.get(r)):sl(0))},[e,t,n,r,o]),null};const ul=Go.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  max-width: 100%;

  color: var(--color-link);

  font-weight: 600;
  line-height: 1.7;

  text-decoration: none;
  text-underline-offset: 4px;
  text-decoration-thickness: 1px;

  overflow-wrap: anywhere;

  transition:
    color var(--transition-fast),
    opacity var(--transition-fast);

  &:hover {
    color: var(--color-link-hover);
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 4px;

    border-radius: var(--radius-sm);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,dl=Go.h1`
  margin: 0;

  max-width: 100%;

  color: var(--color-heading);

  font-size: clamp(
    2rem,
    4.5vw,
    3.2rem
  );

  font-weight: 800;
  line-height: 1.4;

  letter-spacing: -0.015em;

  overflow-wrap: break-word;
  text-wrap: balance;

  @media (max-width: 768px) {
    font-size: clamp(
      1.85rem,
      6vw,
      2.5rem
    );
  }

  @media (max-width: 480px) {
    font-size: clamp(
      1.75rem,
      7vw,
      2.15rem
    );
  }
`,pl=Go.h2`
  margin: 0;

  max-width: 100%;

  color: var(--color-heading);

  font-size: clamp(
    1.5rem,
    3vw,
    2.1rem
  );

  font-weight: 700;
  line-height: 1.5;

  letter-spacing: -0.01em;

  overflow-wrap: break-word;
  text-wrap: balance;

  @media (max-width: 480px) {
    font-size: clamp(
      1.4rem,
      5.5vw,
      1.75rem
    );
  }
`,hl=Go.h3`
  margin: 0;

  max-width: 100%;

  color: var(--color-text-primary);

  font-size: clamp(
    1.15rem,
    2vw,
    1.45rem
  );

  font-weight: 700;
  line-height: 1.55;

  overflow-wrap: break-word;
  text-wrap: balance;

  @media (max-width: 480px) {
    font-size: 1.15rem;
  }
`,fl=Go.p`
  margin: 0;

  max-width: 100%;

  color: var(--color-text-primary);

  font-size: var(--size-md);
  font-weight: 400;
  line-height: 1.9;

  overflow-wrap: break-word;
  text-wrap: pretty;
`,ml=(Go.p`
  margin: 0;

  max-width: 100%;

  color: var(--color-text-secondary);

  font-size: clamp(
    0.9rem,
    1.5vw,
    1rem
  );

  font-weight: 400;
  line-height: 1.95;

  overflow-wrap: break-word;
  text-wrap: pretty;

  @media (max-width: 480px) {
    font-size: 0.92rem;
    line-height: 1.85;
  }
`,Go.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  min-width: 0;

  gap: clamp(
    10px,
    1.5vw,
    16px
  );

  text-align: start;

  > p {
    max-width: var(--text-measure);
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`,Go.header`
  position: relative;
  isolation: isolate;

  display: flex;
  flex-direction: column;

  align-items: stretch;
  justify-content: center;

  width: 100%;
  min-width: 0;

  gap: clamp(
    16px,
    2.5vw,
    24px
  );

  padding-block:
    clamp(24px, 3vw, 36px)
    clamp(28px, 4vw, 48px);

  background-color:
    var(--color-background-breadcrumb);

  border-bottom:
    1px solid var(--color-border);

  box-sizing: border-box;

  /*
     Breadcrumb styling

     Keep the breadcrumb visually integrated
     with the page header.
  */

  > nav {
    width: 100%;
    min-width: 0;

    margin: 0;
    padding: 0;

    background: transparent;
    background-image: none;

    border: 0;
    box-shadow: none;
  }

  /*
     Page-specific heading styles.

     These rules apply only inside PageHeader.
  */

  h1,
  h2 {
    margin: 0;

    color: var(--color-heading);

    font-size: clamp(
      1.9rem,
      4vw,
      2.8rem
    );

    font-weight: 800;
    line-height: 1.4;

    letter-spacing: -0.015em;

    overflow-wrap: break-word;
    text-wrap: balance;
  }

  /*
     Page description
  */

  p {
    margin: 0;

    color: var(--color-text-secondary);

    font-size: clamp(
      0.92rem,
      1.5vw,
      1rem
    );

    line-height: 1.9;

    overflow-wrap: break-word;
    text-wrap: pretty;
  }

  @media (max-width: 768px) {
    padding-block:
      24px
      36px;

    h1,
    h2 {
      font-size: clamp(
        1.8rem,
        5vw,
        2.3rem
      );
    }
  }

  @media (max-width: 480px) {
    padding-block:
      20px
      30px;

    h1,
    h2 {
      font-size: clamp(
        1.7rem,
        7vw,
        2.1rem
      );
    }

    p {
      font-size: 0.92rem;
      line-height: 1.85;
    }
  }

  /* =====================================================
     COMPACT BREADCRUMB

     Reduce vertical padding only when
     the header contains Breadcrumb alone.

     All original colors, backgrounds,
     typography and other styles are preserved.
  ===================================================== */

  &:has(> nav:only-child) {
    padding-block: 12px;
  }

  @media (max-width: 768px) {
    &:has(> nav:only-child) {
      padding-block: 10px;
    }
  }

  @media (max-width: 480px) {
    &:has(> nav:only-child) {
      padding-block: 8px;
    }
  }
`),gl=(Go.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  width: 100%;
  max-width: var(--container-width);
  min-width: 0;

  margin-inline: auto;

  padding-inline:
    var(--container-gutter);

  gap: clamp(
    10px,
    1.5vw,
    15px
  );

  text-align: start;

  box-sizing: border-box;

  > p {
    max-width: 760px;
  }

  @media (max-width: 600px) {
    gap: 10px;
  }
`,Go.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  flex-wrap: wrap;

  width: 100%;
  min-width: 0;

  gap: clamp(
    8px,
    1.5vw,
    12px
  );

  @media (max-width: 480px) {
    gap: 8px;
  }
`,Go.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  max-width: 100%;
  min-height: 36px;

  padding: 7px 12px;

  border:
    1px solid var(--color-border);

  border-radius: 9px;

  background-color:
    var(--color-surface-secondary);

  color:
    var(--color-text-primary);

  font-size: var(--size-sm);
  font-weight: 600;
  line-height: 1.5;

  overflow-wrap: break-word;

  cursor: default;

  transition:
    border-color var(--transition-fast),
    background-color var(--transition-fast),
    transform var(--transition-fast);

  svg {
    width: 17px;
    height: 17px;

    flex-shrink: 0;
  }

  @media (hover: hover) {
    &:hover {
      border-color:
        var(--color-border-strong);

      background-color:
        var(--color-surface-hover);

      transform: translateY(-2px);
    }
  }

  @media (max-width: 480px) {
    min-height: 34px;

    padding: 6px 10px;

    font-size: 0.8rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Go.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;

  width: 100%;
  min-width: 0;

  gap: var(--space-md);
`,Go.div`
  position: relative;

  width: 100%;
  min-width: 0;

  border:
    1px solid var(--color-border);

  border-radius:
    var(--radius-card);

  background-color:
    var(--color-card-background);

  overflow: hidden;

  box-shadow:
    var(--shadow-card);

  box-sizing: border-box;

  @media (max-width: 480px) {
    border-radius: 12px;
  }
`,Go.div`
  width: 100%;
  min-width: 0;

  overflow-x: auto;
  overflow-y: hidden;

  -webkit-overflow-scrolling: touch;
  overscroll-behavior-inline: contain;

  scrollbar-width: thin;

  scrollbar-color:
    var(--color-scrollbar-thumb)
    transparent;

  &::-webkit-scrollbar {
    height: 7px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background:
      var(--color-scrollbar-thumb);

    border-radius: var(--radius-full);
  }

  &::-webkit-scrollbar-thumb:hover {
    background:
      var(--color-border-strong);
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 13px 16px;

    border:
      1px solid var(--color-border);

    text-align: start;
    vertical-align: middle;

    overflow-wrap: break-word;
  }

  th {
    background-color:
      var(--color-background-tertiary);

    color:
      var(--color-text-primary);

    font-weight: 700;
  }

  td {
    background-color:
      var(--color-card-background);

    color:
      var(--color-text-primary);
  }

  tbody tr:hover td {
    background-color:
      var(--color-card-background-hover);
  }

  @media (max-width: 768px) {
    table {
      min-width: 620px;
    }

    th,
    td {
      padding: 11px 13px;
    }
  }

  @media (max-width: 480px) {
    th,
    td {
      padding: 10px 12px;

      font-size: 0.88rem;
    }
  }
`,Go.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: flex-start;

  width: 100%;
  min-width: 0;

  gap: clamp(
    10px,
    1.5vw,
    16px
  );

  @media (max-width: 480px) {
    gap: 10px;

    justify-content: flex-start;
  }
`),vl={primary:Uo`
    --button-bg:
      var(--button-primary-bg);

    --button-text:
      var(--button-primary-text);

    --button-border:
      var(--button-primary-border);

    --button-hover-bg:
      var(--button-primary-hover-bg);

    --button-hover-text:
      var(--button-primary-hover-text);

    --button-hover-border:
      var(--button-primary-hover-border);

    --button-shadow:
      var(--shadow-sm);
  `,secondary:Uo`
    --button-bg:
      var(--button-secondary-bg);

    --button-text:
      var(--button-secondary-text);

    --button-border:
      var(--button-secondary-border);

    --button-hover-bg:
      var(--button-secondary-hover-bg);

    --button-hover-text:
      var(--button-secondary-hover-text);

    --button-hover-border:
      var(--button-secondary-hover-border);

    --button-shadow: none;
  `,tertiary:Uo`
    --button-bg:
      var(--button-tertiary-bg);

    --button-text:
      var(--button-tertiary-text);

    --button-border:
      var(--button-tertiary-border);

    --button-hover-bg:
      var(--button-tertiary-hover-bg);

    --button-hover-text:
      var(--button-tertiary-hover-text);

    --button-hover-border:
      var(--button-tertiary-hover-border);

    --button-shadow: none;
  `,ghost:Uo`
    --button-bg:
      var(--button-ghost-bg);

    --button-text:
      var(--button-ghost-text);

    --button-border:
      var(--button-ghost-border);

    --button-hover-bg:
      var(--button-ghost-hover-bg);

    --button-hover-text:
      var(--button-ghost-hover-text);

    --button-hover-border:
      var(--button-ghost-border);

    --button-shadow: none;
  `},bl={sm:Uo`
    min-height: 38px;

    padding: 8px 14px;

    font-size: 0.85rem;

    gap: 7px;

    svg,
    img {
      width: 16px;
      height: 16px;
    }
  `,md:Uo`
    min-height: var(--button-height);

    padding:
      var(--button-padding-block)
      var(--button-padding-inline);

    font-size: var(--button-font-size);

    gap: 10px;
  `,lg:Uo`
    min-height: 52px;

    padding: 13px 26px;

    font-size: 1rem;

    gap: 10px;

    svg,
    img {
      width: 20px;
      height: 20px;
    }
  `},yl=Go.button`

  /* -------------------------------------------------------
     VARIANT
  ------------------------------------------------------- */

  ${e=>{let{$variant:t="primary"}=e;return vl[t]||vl.primary}}

  /* -------------------------------------------------------
     LAYOUT
  ------------------------------------------------------- */

  display: inline-flex;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  position: relative;

  width: auto;
  max-width: 100%;

  min-width: 0;

  gap: 10px;

  /* -------------------------------------------------------
     SIZE
  ------------------------------------------------------- */

  ${e=>{let{$size:t="md"}=e;return bl[t]||bl.md}}

  /* -------------------------------------------------------
     APPEARANCE
  ------------------------------------------------------- */

  border:
    1px solid var(--button-border);

  border-radius:
    var(--button-radius);

  background-color:
    var(--button-bg);

  color:
    var(--button-text);

  box-shadow:
    var(--button-shadow);

  /* -------------------------------------------------------
     TYPOGRAPHY
  ------------------------------------------------------- */

  font: inherit;

  font-weight:
    var(--button-font-weight);

  line-height: 1.45;

  text-align: center;
  text-decoration: none;

  white-space: normal;
  overflow-wrap: break-word;

  /* -------------------------------------------------------
     INTERACTION
  ------------------------------------------------------- */

  cursor: pointer;

  user-select: none;

  -webkit-tap-highlight-color: transparent;

  transition:
    transform var(--transition-fast),
    background-color var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast),
    box-shadow var(--transition-fast);

  /* -------------------------------------------------------
     ICONS
  ------------------------------------------------------- */

  svg,
  img {
    display: block;

    width: 18px;
    height: 18px;

    flex-shrink: 0;

    object-fit: contain;

    transition:
      transform var(--transition-fast);
  }

  /* -------------------------------------------------------
     HOVER
  ------------------------------------------------------- */

  @media (hover: hover) {

    &:hover:not(:disabled):not([aria-disabled="true"]) {
      transform: translateY(-2px);

      background-color:
        var(--button-hover-bg);

      color:
        var(--button-hover-text);

      border-color:
        var(--button-hover-border);

      box-shadow:
        var(--shadow-sm);

      text-decoration: none;
    }

    &:hover:not(:disabled):not([aria-disabled="true"]) svg {
      transform: translateY(-1px);
    }

  }

  /* -------------------------------------------------------
     ACTIVE
  ------------------------------------------------------- */

  &:active:not(:disabled):not([aria-disabled="true"]) {
    transform: translateY(0);

    box-shadow: none;
  }

  /* -------------------------------------------------------
     FOCUS
  ------------------------------------------------------- */

  &:focus-visible {
    outline:
      2px solid var(--focus-ring-color);

    outline-offset: 4px;
  }

  /* -------------------------------------------------------
     DISABLED
  ------------------------------------------------------- */

  &:disabled,
  &[aria-disabled="true"] {
    opacity: 0.55;

    cursor: not-allowed;
    pointer-events: none;

    box-shadow: none;
    transform: none;
  }

  /* -------------------------------------------------------
     ACTIVE CLASS

     Preserved for compatibility with
     existing components.
  ------------------------------------------------------- */

  &.active {
    --button-bg:
      var(--button-primary-bg);

    --button-text:
      var(--button-primary-text);

    --button-border:
      var(--button-primary-border);

    --button-hover-bg:
      var(--button-primary-hover-bg);

    --button-hover-text:
      var(--button-primary-hover-text);

    --button-hover-border:
      var(--button-primary-hover-border);
  }

  /* -------------------------------------------------------
     FULL WIDTH

     Optional prop:
     $fullWidth
  ------------------------------------------------------- */

  ${e=>{let{$fullWidth:t}=e;return t&&Uo`
      width: 100%;
    `}}

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 480px) {

    ${e=>{let{$size:t="md"}=e;return"md"===t&&Uo`
        min-height: 44px;

        padding: 10px 16px;

        font-size: 0.875rem;
      `}}

  }

  /* -------------------------------------------------------
     REDUCED MOTION
  ------------------------------------------------------- */

  @media (prefers-reduced-motion: reduce) {

    transition: none;

    svg,
    img {
      transition: none;
    }

    &:hover,
    &:active {
      transform: none !important;
    }

    &:hover svg,
    &:hover img {
      transform: none !important;
    }

  }

`,xl=(Go(ul)`
  position: relative;

  display: inline-flex;

  align-items: center;
  justify-content: center;

  min-height: 40px;

  padding: 9px 13px;

  gap: 7px;

  border:
    1px solid transparent;

  border-radius: 10px;

  background-color: transparent;

  color:
    var(--color-text-primary);

  font-size: 0.94rem;
  font-weight: 500;

  line-height: 1.5;

  text-decoration: none;

  transition:
    color var(--transition-fast),
    background-color var(--transition-fast),
    border-color var(--transition-fast);

  /* -------------------------------------------------------
     HOVER
  ------------------------------------------------------- */

  &:hover {
    color: var(--color-primary);

    background-color:
      var(--color-surface-hover);

    border-color:
      var(--color-border);

    text-decoration: none;

    opacity: 1;
  }

  /* -------------------------------------------------------
     CURRENT PAGE
  ------------------------------------------------------- */

  &.active,
  &[aria-current="page"] {
    color:
      var(--color-primary);

    font-weight: 700;

    background-color:
      var(--color-primary-soft);

    border-color:
      var(--color-border);
  }

  /* -------------------------------------------------------
     FOCUS
  ------------------------------------------------------- */

  &:focus-visible {
    outline:
      2px solid var(--focus-ring-color);

    outline-offset: 3px;
  }

  /* -------------------------------------------------------
     REDUCED MOTION
  ------------------------------------------------------- */

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Go(yl)`

  /* -------------------------------------------------------
     DEFAULT COLORS

     Uses the secondary button palette
     unless a different $variant is passed.
  ------------------------------------------------------- */

  ${e=>{let{$variant:t="secondary"}=e;return vl[t]||vl.secondary}}

  /* -------------------------------------------------------
     DEFAULT DIMENSIONS
  ------------------------------------------------------- */

  width: 44px;
  height: 44px;

  min-width: 44px;
  min-height: 44px;

  padding: 0;

  flex-shrink: 0;

  gap: 0;

  border-radius:
    var(--radius-button);

  /* -------------------------------------------------------
     ICON DIMENSIONS
  ------------------------------------------------------- */

  svg,
  img {
    width: 20px;
    height: 20px;
  }

  /* -------------------------------------------------------
     HOVER
  ------------------------------------------------------- */

  @media (hover: hover) {

    &:hover:not(:disabled):not([aria-disabled="true"]) {
      transform: translateY(-2px);

      box-shadow:
        var(--shadow-sm);
    }

    &:hover:not(:disabled):not([aria-disabled="true"]) svg,
    &:hover:not(:disabled):not([aria-disabled="true"]) img {
      transform: scale(1.08);
    }

  }

  /* -------------------------------------------------------
     ACTIVE
  ------------------------------------------------------- */

  &:active:not(:disabled):not([aria-disabled="true"]) {
    transform: scale(0.96);
  }

  /* -------------------------------------------------------
     SMALL SIZE
  ------------------------------------------------------- */

  ${e=>{let{$size:t}=e;return"sm"===t&&Uo`
      width: 36px;
      height: 36px;

      min-width: 36px;
      min-height: 36px;

      border-radius: 10px;

      svg,
      img {
        width: 17px;
        height: 17px;
      }
    `}}

  /* -------------------------------------------------------
     LARGE SIZE
  ------------------------------------------------------- */

  ${e=>{let{$size:t}=e;return"lg"===t&&Uo`
      width: 52px;
      height: 52px;

      min-width: 52px;
      min-height: 52px;

      border-radius: 15px;

      svg,
      img {
        width: 24px;
        height: 24px;
      }
    `}}

  /* -------------------------------------------------------
     CIRCULAR VARIANT

     Applied last so it overrides
     small and large corner radii.
  ------------------------------------------------------- */

  ${e=>{let{$rounded:t}=e;return t&&Uo`
      border-radius: 50%;
    `}}

  /* -------------------------------------------------------
     REDUCED MOTION
  ------------------------------------------------------- */

  @media (prefers-reduced-motion: reduce) {

    &:hover,
    &:active {
      transform: none !important;
    }

    &:hover svg,
    &:hover img {
      transform: none !important;
    }

  }

`,yl),wl=Go.div`
  position: relative;
  isolation: isolate;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 0;

  min-height: 420px;

  box-sizing: border-box;

  /* -------------------------------------------------------
     TABLET

     Matches the Hero.js layout.
  ------------------------------------------------------- */

  @media (max-width: 900px) {
    min-height: 370px;
  }

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 480px) {
    min-height: 310px;
  }

  /* -------------------------------------------------------
     SMALL MOBILE
  ------------------------------------------------------- */

  @media (max-width: 360px) {
    min-height: 290px;
  }
`,kl=Go.div`
  position: absolute;
  z-index: 3;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 5px;

  min-width: 105px;
  max-width: 155px;

  padding: 14px 17px;

  background-color:
    var(--color-background-secondary);

  color:
    var(--color-text-primary);

  border:
    1px solid var(--color-border);

  border-radius:
    var(--radius-card, 15px);

  box-shadow:
    var(--shadow-sm);

  text-align: center;

  box-sizing: border-box;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;

  /* -------------------------------------------------------
     HOVER
  ------------------------------------------------------- */

  @media (hover: hover) {
    &:hover {
      transform: translateY(-4px);

      box-shadow:
        var(--shadow-md);

      border-color:
        var(--color-primary);
    }
  }

  /* -------------------------------------------------------
     ANIMATED NUMBER
  ------------------------------------------------------- */

  strong {
    display: block;

    color:
      var(--color-text-primary);

    font-size: clamp(
      1.35rem,
      2.5vw,
      1.8rem
    );

    font-weight: 800;
    line-height: 1.3;

    font-variant-numeric:
      tabular-nums;

    white-space: nowrap;
  }

  /* -------------------------------------------------------
     STATISTIC LABEL
  ------------------------------------------------------- */

  span {
    display: block;

    color:
      var(--color-text-secondary);

    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.5;

    overflow-wrap: anywhere;
  }

  /* =====================================================
     03 — DESKTOP POSITIONS
  ===================================================== */

  /* -------------------------------------------------------
     TOP CARD

     Projects
  ------------------------------------------------------- */

  &.top {
    top: 6%;
    inset-inline-end: 3%;
  }

  /* -------------------------------------------------------
     START CARD

     Years of experience
  ------------------------------------------------------- */

  &.left {
    bottom: 19%;
    inset-inline-start: 0;
  }

  /* -------------------------------------------------------
     END CARD

     Technologies
  ------------------------------------------------------- */

  &.right {
    bottom: 5%;
    inset-inline-end: 0;
  }

  /* =====================================================
     04 — TABLET
  ===================================================== */

  @media (max-width: 900px) {
    min-width: 95px;
    max-width: 130px;

    padding: 12px 14px;

    &.top {
      top: 4%;
      inset-inline-end: 2%;
    }

    &.left {
      bottom: 16%;
      inset-inline-start: 0;
    }

    &.right {
      bottom: 3%;
      inset-inline-end: 0;
    }
  }

  /* =====================================================
     05 — MOBILE
  ===================================================== */

  @media (max-width: 480px) {
    min-width: 76px;
    max-width: 108px;

    padding: 9px 10px;

    gap: 3px;

    border-radius: 11px;

    strong {
      font-size: 1.16rem;
    }

    span {
      font-size: 0.68rem;
      line-height: 1.45;
    }

    &.top {
      top: 2%;
      inset-inline-end: 0;
    }

    &.left {
      bottom: 15%;
      inset-inline-start: 0;
    }

    &.right {
      bottom: 1%;
      inset-inline-end: 0;
    }
  }

  /* =====================================================
     06 — SMALL MOBILE
  ===================================================== */

  @media (max-width: 360px) {
    min-width: 70px;
    max-width: 96px;

    padding: 8px;

    strong {
      font-size: 1.05rem;
    }

    span {
      font-size: 0.63rem;
    }

    &.top {
      top: 3%;
    }

    &.left {
      bottom: 17%;
    }

    &.right {
      bottom: 2%;
    }
  }

  /* =====================================================
     07 — REDUCED MOTION
  ===================================================== */

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;function Sl(e){let{value:t,duration:n=1200}=e;const r=Number(t),o=Number.isFinite(r)?Math.max(0,r):0,a=Number.isFinite(Number(n))?Math.max(1,Number(n)):1200,[i,c]=(0,s().useState)(0);return(0,s().useEffect)(()=>{var e,t;if("undefined"!==typeof window&&(null===(e=(t=window).matchMedia)||void 0===e?void 0:e.call(t,"(prefers-reduced-motion: reduce)").matches))return void c(o);let n,r=null;c(0);const i=e=>{null===r&&(r=e);const t=Math.min((e-r)/a,1),l=1-Math.pow(1-t,3),s=Math.floor(l*o);c(s),t<1?n=window.requestAnimationFrame(i):c(o)};return n=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(n)}},[o,a]),(0,l().jsxs)("strong",{children:[i,"+"]})}const jl=function(e){let{children:t,className:n}=e;return(0,l().jsx)(wl,{className:n,children:t})};function El(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]},{tag:"line",attr:{x1:"11",y1:"8",x2:"11",y2:"14"},child:[]},{tag:"line",attr:{x1:"8",y1:"11",x2:"14",y2:"11"},child:[]}]})(e)}function Cl(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(e)}function Tl(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(e)}function Ll(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(e)}function Pl(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(e)}function _l(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(e)}function Nl(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"},child:[]}]})(e)}function zl(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"8",y1:"21",x2:"16",y2:"21"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12",y2:"21"},child:[]}]})(e)}function Al(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(e)}function Ol(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(e)}function Rl(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(e)}function Il(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"8.5",r:"1.5"},child:[]},{tag:"polyline",attr:{points:"21 15 16 10 5 21"},child:[]}]})(e)}function Ml(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(e)}function Dl(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(e)}function $l(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(e)}function Fl(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(e)}function Hl(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(e)}function Bl(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]},{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"},child:[]}]})(e)}function Ul(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(e)}function Vl(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(e)}function Wl(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"},child:[]},{tag:"rect",attr:{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"},child:[]}]})(e)}function Gl(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(e)}function ql(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"},child:[]}]})(e)}function Jl(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(e)}function Kl(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(e)}function Yl(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(e)}function Ql(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"},child:[]}]})(e)}function Xl(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(e)}function Zl(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(e)}function es(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"17",x2:"17",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 7 17 7 17 17"},child:[]}]})(e)}function ts(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"17",y1:"17",x2:"7",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 17 7 7 17 7"},child:[]}]})(e)}function ns(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(e)}function rs(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 19 5 12 12 5"},child:[]}]})(e)}function os(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(e)}const as={HTML:function(e){return Ci({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"},child:[]}]})(e)},CSS:function(e){return Ci({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"},child:[]}]})(e)},JavaScript:function(e){return Ci({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"},child:[]}]})(e)},React:function(e){return Ci({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(e)},PHP:function(e){return Ci({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"},child:[]}]})(e)},MySQL:Oi,REST:function(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 13h5"},child:[]},{tag:"path",attr:{d:"M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3"},child:[]},{tag:"path",attr:{d:"M20 8v8"},child:[]},{tag:"path",attr:{d:"M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5"},child:[]}]})(e)},VC:function(e){return Ci({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"},child:[]}]})(e)}},is=Go.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  min-width: 0;
  min-height: 0;

  color:
    var(--color-primary);

  line-height: 1;

  flex-shrink: 0;

  svg {
    display: block;

    width: 19px;
    height: 19px;

    max-width: 100%;
    max-height: 100%;

    color: inherit;

    flex-shrink: 0;
  }

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 480px) {
    svg {
      width: 18px;
      height: 18px;
    }
  }

  /* -------------------------------------------------------
     SMALL MOBILE
  ------------------------------------------------------- */

  @media (max-width: 360px) {
    svg {
      width: 17px;
      height: 17px;
    }
  }
`;const ls=function(e){let{name:t}=e;const n=as[t]||Ul;return(0,l().jsx)(is,{"aria-hidden":"true",children:(0,l().jsx)(n,{"aria-hidden":"true",focusable:"false"})})},ss=n.p+"static/media/me.93fc188400bffe390923.png",cs=Qo`
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`,us=Qo`
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-6px);
  }
`,ds=Qo`
  0%,
  100% {
    box-shadow:
      0 0 0 0
      color-mix(
        in srgb,
        var(--color-primary) 20%,
        transparent
      );
  }

  60% {
    box-shadow:
      0 0 0 8px transparent;
  }
`,ps=Go(ma)`
  position: relative;
  isolation: isolate;

  display: flex;
  align-items: center;

  width: 100%;
  min-width: 0;

  min-height: min(740px, 90svh);

  padding-block:
    clamp(56px, 7vw, 92px);

  overflow: hidden;

  background-color:
    var(--color-background);

  color:
    var(--color-text-primary);

  box-sizing: border-box;

  /* -------------------------------------------------------
     SUBTLE BACKGROUND ACCENT
  ------------------------------------------------------- */

  &::before {
    content: "";

    position: absolute;

    z-index: -1;

    inset-block-start: -25%;
    inset-inline-end: -12%;

    width: clamp(
      260px,
      40vw,
      560px
    );

    aspect-ratio: 1;

    border-radius: 50%;

    background-color:
      var(--color-background-secondary);

    opacity: 0.45;

    filter: blur(80px);

    pointer-events: none;
  }

  /* -------------------------------------------------------
     TABLET
  ------------------------------------------------------- */

  @media (max-width: 900px) {
    min-height: auto;

    padding-block:
      42px 64px;
  }

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 480px) {
    padding-block:
      30px 50px;
  }
`,hs=Go(ga)`
  display: grid;

  grid-template-columns:
    minmax(0, 1.15fr)
    minmax(0, 1fr);

  align-items: center;

  gap: clamp(
    28px,
    4vw,
    64px
  );

  width: 100%;
  min-width: 0;

  /* -------------------------------------------------------
     TABLET & MOBILE
  ------------------------------------------------------- */

  @media (max-width: 900px) {
    grid-template-columns:
      minmax(0, 1fr);

    justify-items: center;

    gap: 24px;

    > :first-child {
      order: 2;
    }

    > :last-child {
      order: 1;
    }
  }
`,fs=Go.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: clamp(
    16px,
    2vw,
    24px
  );

  width: 100%;
  min-width: 0;

  animation:
    ${cs} 0.75s ease both;

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;

    max-width: 680px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,ms=Go.div`
  display: inline-flex;
  align-items: center;

  gap: 10px;

  max-width: 100%;

  padding: 8px 14px;

  border:
    1px solid var(--color-border);

  border-radius: 999px;

  background-color:
    var(--color-background-secondary);

  color:
    var(--color-text-primary);

  font-size: 0.82rem;
  font-weight: 600;
  line-height: 1.6;

  text-align: start;

  /* -------------------------------------------------------
     STATUS DOT
  ------------------------------------------------------- */

  &::before {
    content: "";

    width: 9px;
    height: 9px;

    flex-shrink: 0;

    border-radius: 50%;

    background-color:
      var(--color-primary);

    animation:
      ${ds} 2.5s infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }
`,gs=Go.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  width: 100%;
  min-width: 0;
`,vs=Go(dl)`
  margin: 0;

  color:
    var(--color-text-primary);

  font-size: clamp(
    2.3rem,
    4.7vw,
    4.3rem
  );

  font-weight: 800;
  line-height: 1.25;

  letter-spacing: -0.025em;

  overflow-wrap: break-word;
  text-wrap: balance;

  @media (max-width: 480px) {
    font-size: clamp(
      2rem,
      8.5vw,
      2.8rem
    );
  }
`,bs=Go.div`
  display: flex;
  align-items: center;

  min-height: 2.7rem;
  min-width: 0;

  color:
    var(--color-primary);

  font-size: clamp(
    1.1rem,
    2.3vw,
    1.55rem
  );

  font-weight: 700;
  line-height: 1.5;

  @media (max-width: 900px) {
    justify-content: center;
  }
`,ys=Go.strong`
  display: block;

  font-weight: inherit;

  overflow-wrap: break-word;

  animation:
    ${cs} 0.4s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,xs=Go(fl)`
  max-width: 620px;

  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: clamp(
    0.95rem,
    1.4vw,
    1.04rem
  );

  line-height: 1.95;

  overflow-wrap: break-word;

  @media (max-width: 480px) {
    line-height: 1.85;
  }
`,ws=Go.div`
  display: flex;
  flex-direction: column;

  gap: 12px;

  width: 100%;

  @media (max-width: 900px) {
    align-items: center;
  }
`,ks=Go.div`
  display: flex;
  flex-wrap: wrap;

  gap: 9px;

  width: 100%;

  @media (max-width: 900px) {
    justify-content: center;
  }
`,Ss=Go.div`
  display: inline-flex;
  align-items: center;

  gap: 9px;

  min-height: 42px;

  padding:
    6px 11px;

  border:
    1px solid var(--color-border);

  border-radius:
    10px;

  background-color:
    var(--color-background-secondary);

  color:
    var(--color-text-primary);

  font-size: 0.83rem;
  font-weight: 600;
  line-height: 1.5;

  box-sizing: border-box;

  transition:
    transform 0.2s ease,
    border-color 0.2s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);

      border-color:
        var(--color-primary);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`,js=Go.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 29px;
  height: 29px;

  flex-shrink: 0;

  border-radius: 8px;

  background-color:
    var(--color-background);

  color:
    var(--color-primary);

  svg {
    display: block;

    width: 18px;
    height: 18px;
  }
`,Es=Go.span`
  color:
    var(--color-text-primary);

  white-space: nowrap;
`,Cs=Go(gl)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 12px;

  width: 100%;

  margin-block-start: 4px;

  @media (max-width: 900px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 10px;

    > * {
      flex: 1 1 140px;
      min-width: 0;
    }
  }
`,Ts=Go.figure`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 450px;

  min-width: 0;

  margin: 0;

  isolation: isolate;

  animation:
    ${cs} 0.9s ease 0.1s both;

  @media (max-width: 900px) {
    max-width: 390px;
  }

  @media (max-width: 480px) {
    max-width: 310px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Ls=Go.div`
  position: absolute;

  z-index: -1;

  width: 85%;

  aspect-ratio: 1;

  border-radius: 50%;

  background-color:
    var(--color-background-secondary);

  border:
    1px solid var(--color-border);

  box-shadow:
    var(--shadow-sm);

  pointer-events: none;

  &::after {
    content: "";

    position: absolute;

    inset: -14px;

    border-radius: 50%;

    border:
      1px dashed var(--color-border);

    opacity: 0.7;
  }
`,Ps=Go.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 68%;

  aspect-ratio: 1;

  border-radius: 50%;

  overflow: hidden;

  background-color:
    var(--color-background-secondary);

  border:
    5px solid var(--color-background);

  box-shadow:
    var(--shadow-md);

  animation:
    ${us} 6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,_s=Go.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`,Ns=Go(jl)`
  position: relative;

  width: 100%;
  min-height: 420px;

  @media (max-width: 900px) {
    min-height: 370px;
  }

  @media (max-width: 480px) {
    min-height: 310px;
  }
`;function zs(){const{t:e,i18n:t}=ha(),n=e("home:hero.job_titles",{returnObjects:!0}),r=Array.isArray(n)?n:[],[o,a]=(0,s().useState)(0),i=t.resolvedLanguage||t.language||"ar";return(0,s().useEffect)(()=>{a(0)},[i]),(0,s().useEffect)(()=>{if(r.length<=1)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const e=window.setInterval(()=>{a(e=>(e+1)%r.length)},3500);return()=>{window.clearInterval(e)}},[r.length,i]),0===r.length?null:(0,l().jsx)(bs,{"aria-live":"off",children:(0,l().jsx)(ys,{children:r[o%r.length]},`${i}-${o}`)})}const As=function(){const e=Ne(),{t:t}=ha(),n=t("home:hero.tech_stack",{returnObjects:!0}),r=Array.isArray(n)?n:[];return(0,l().jsx)(ps,{id:"home",children:(0,l().jsxs)(hs,{children:[(0,l().jsxs)(fs,{children:[(0,l().jsx)(ms,{children:t("home:hero.availability_status")}),(0,l().jsxs)(gs,{children:[(0,l().jsx)(vs,{as:"h1",children:t("home:hero.name")}),(0,l().jsx)(zs,{})]}),(0,l().jsx)(xs,{children:t("home:hero.introduction")}),(0,l().jsx)(ws,{children:(0,l().jsx)(ks,{children:r.map((e,t)=>(0,l().jsxs)(Ss,{children:[(0,l().jsx)(js,{"aria-hidden":"true",children:(0,l().jsx)(ls,{name:e.icon})}),(0,l().jsx)(Es,{children:e.text})]},`${e.icon||e.text}-${t}`))})}),(0,l().jsxs)(Cs,{children:[(0,l().jsx)(xl,{as:$t,to:Oa(e.pathname,"/contact"),$variant:"primary",$size:"lg",children:t("buttons.contact")}),(0,l().jsx)(xl,{as:"a",href:"/abdulrahman-portfolio-react/documents/cv.pdf",target:"_blank",rel:"noopener noreferrer",$variant:"secondary",$size:"lg",children:t("buttons.cv")})]})]}),(0,l().jsxs)(Ts,{children:[(0,l().jsx)(Ls,{"aria-hidden":"true"}),(0,l().jsxs)(Ns,{children:[(0,l().jsx)(Ps,{children:(0,l().jsx)(_s,{src:ss,alt:t("home:hero.profileAlt"),fetchPriority:"high",decoding:"async"})}),(0,l().jsxs)(kl,{className:"top",children:[(0,l().jsx)(Sl,{value:9}),(0,l().jsx)("span",{children:t("home:hero.statistic.projects")})]}),(0,l().jsxs)(kl,{className:"left",children:[(0,l().jsx)(Sl,{value:3}),(0,l().jsx)("span",{children:t("home:hero.statistic.years")})]}),(0,l().jsxs)(kl,{className:"right",children:[(0,l().jsx)(Sl,{value:20}),(0,l().jsx)("span",{children:t("home:hero.statistic.technologies")})]})]})]})]})})},Os=Go.article`
  /* -------------------------------------------------------
     LAYOUT
  ------------------------------------------------------- */

  position: relative;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;

  gap: var(--space-md, 16px);

  /* -------------------------------------------------------
     DIMENSIONS
  ------------------------------------------------------- */

  width: 100%;
  min-width: 0;

  padding: var(--space-lg, 24px);

  box-sizing: border-box;

  /* -------------------------------------------------------
     THEME COLORS
  ------------------------------------------------------- */

  background-color:
    var(--color-card-background, var(--color-background));

  color:
    var(--color-text-primary);

  /* -------------------------------------------------------
     BORDERS
  ------------------------------------------------------- */

  border:
    1px solid var(--color-border);

  border-radius:
    var(--radius-card, var(--radius-md, 14px));

  /* -------------------------------------------------------
     SHADOW
  ------------------------------------------------------- */

  box-shadow:
    var(--shadow-sm, none);

  /* -------------------------------------------------------
     CONTENT
  ------------------------------------------------------- */

  overflow-wrap: anywhere;

  /* -------------------------------------------------------
     TRANSITIONS
  ------------------------------------------------------- */

  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;

  /* -------------------------------------------------------
     CHILD ELEMENTS
  ------------------------------------------------------- */

  > * {
    min-width: 0;
  }

  /* -------------------------------------------------------
     HOVER

     Only apply on devices that
     support hover interactions.
  ------------------------------------------------------- */

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      box-shadow:
        var(--shadow-md);
    }
  }

  /* -------------------------------------------------------
     TABLET
  ------------------------------------------------------- */

  @media (max-width: 900px) {
    padding: var(--space-lg, 22px);
  }

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 600px) {
    gap: var(--space-md, 14px);

    padding: var(--space-md, 18px);
  }

  /* -------------------------------------------------------
     SMALL MOBILE
  ------------------------------------------------------- */

  @media (max-width: 360px) {
    padding: 16px;
  }

  /* -------------------------------------------------------
     REDUCED MOTION
  ------------------------------------------------------- */

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Rs=Go(Os)`
  position: relative;
  isolation: isolate;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;

  gap: 16px;

  width: 100%;
  min-width: 0;
  height: 100%;

  padding:
    clamp(24px, 3vw, 36px);

  overflow: hidden;

  background-color:
    var(--color-background);

  color:
    var(--color-text-primary);

  border:
    1px solid var(--color-border);

  border-radius:
    var(--radius-card, 16px);

  box-shadow:
    var(--shadow-sm);

  text-align: center;

  box-sizing: border-box;

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  /* -------------------------------------------------------
     TOP ACCENT
  ------------------------------------------------------- */

  &::before {
    content: "";

    position: absolute;

    inset-block-start: 0;
    inset-inline-start: 0;
    inset-inline-end: 0;

    height: 3px;

    background-color:
      var(--color-primary);

    opacity: 0;

    transition:
      opacity 0.25s ease;

    pointer-events: none;
  }

  /* -------------------------------------------------------
     HOVER

     Apply hover effects only on
     devices with a real pointer.
  ------------------------------------------------------- */

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-4px);

      border-color:
        var(--color-primary);

      box-shadow:
        var(--shadow-md);
    }

    &:hover::before {
      opacity: 1;
    }
  }

  /* -------------------------------------------------------
     TABLET
  ------------------------------------------------------- */

  @media (max-width: 900px) {
    padding: 28px 24px;
  }

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 600px) {
    gap: 14px;

    padding: 26px 22px;
  }

  /* -------------------------------------------------------
     SMALL MOBILE
  ------------------------------------------------------- */

  @media (max-width: 360px) {
    padding: 22px 18px;
  }

  /* -------------------------------------------------------
     REDUCED MOTION
  ------------------------------------------------------- */

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::before {
      transition: none;
    }

    &:hover {
      transform: none;
    }
  }
`,Is=Go.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 66px;
  height: 66px;

  flex-shrink: 0;

  background-color:
    var(
      --color-surface-secondary,
      var(--color-background-secondary)
    );

  color:
    var(--color-primary);

  border:
    1px solid var(--color-border);

  border-radius: 18px;

  box-sizing: border-box;

  transition:
    background-color 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease;

  svg {
    display: block;

    width: 29px;
    height: 29px;

    flex-shrink: 0;
  }

  /* -------------------------------------------------------
     HOVER
  ------------------------------------------------------- */

  @media (hover: hover) and (pointer: fine) {
    ${Rs}:hover & {
      border-color:
        var(--color-primary);

      background-color:
        var(
          --color-surface-hover,
          var(--color-background-secondary)
        );
    }
  }

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 600px) {
    width: 60px;
    height: 60px;

    border-radius: 16px;

    svg {
      width: 26px;
      height: 26px;
    }
  }

  /* -------------------------------------------------------
     REDUCED MOTION
  ------------------------------------------------------- */

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Ms=Go.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 12px;

  width: 100%;
  min-width: 0;

  text-align: center;
`,Ds=Go(hl)`
  margin: 0;

  width: 100%;

  color:
    var(--color-text-primary);

  font-size: clamp(
    1.12rem,
    1.8vw,
    1.3rem
  );

  font-weight: 800;
  line-height: 1.5;

  overflow-wrap: break-word;
  text-wrap: balance;
`,$s=Go(fl)`
  margin: 0;

  width: 100%;
  max-width: 340px;

  color:
    var(--color-text-secondary);

  font-size: clamp(
    0.9rem,
    1.3vw,
    0.97rem
  );

  font-weight: 400;
  line-height: 1.9;

  overflow-wrap: break-word;
  text-wrap: pretty;
`;const Fs=function(e){let{icon:t,title:n,description:r}=e;const o=t||Ul;return(0,l().jsxs)(Rs,{children:[(0,l().jsx)(Is,{"aria-hidden":"true",children:(0,l().jsx)(o,{"aria-hidden":"true",focusable:"false"})}),(0,l().jsxs)(Ms,{children:[(0,l().jsx)(Ds,{children:n}),(0,l().jsx)($s,{children:r})]})]})},Hs={landing:Ai,business:function(e){return Ci({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"},child:[]}]})(e)},custom:function(e){return Ci({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"},child:[]}]})(e)},management:function(e){return Ci({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(e)},support:function(e){return Ci({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"},child:[]}]})(e)},data:Oi,design:function(e){return Ci({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)},web:Ri,technology:Ai,applications:function(e){return Ci({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"},child:[]}]})(e)}},Bs=Go.div`
  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  align-items: stretch;

  gap: clamp(16px, 2vw, 24px);

  width: 100%;
  min-width: 0;

  box-sizing: border-box;

  > * {
    min-width: 0;
    height: 100%;
  }

  /* Center the seventh card on desktop */

  > :last-child:nth-child(7) {
    grid-column: 2;
  }

  /* Tablet: two columns */

  @media (max-width: 900px) {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));

    > :last-child:nth-child(7) {
      grid-column: 1 / -1;

      width: calc((100% - clamp(16px, 2vw, 24px)) / 2);
      justify-self: center;
    }
  }

  /* Mobile: one column */

  @media (max-width: 600px) {
    grid-template-columns:
      minmax(0, 1fr);

    gap: 16px;

    > :last-child:nth-child(7) {
      grid-column: 1;

      width: 100%;
      justify-self: stretch;
    }
  }
`,Us=Go.p`
  margin: 0;

  padding: 32px 20px;

  border: 1px solid var(--color-border);

  border-radius:
    var(--radius-card, 14px);

  background-color:
    var(--color-background);

  color:
    var(--color-text-secondary);

  font-size: 0.95rem;
  line-height: 1.8;

  text-align: center;
`;const Vs=function(){const{t:e}=ha(),t=e("home:services.items",{returnObjects:!0,defaultValue:[]}),n=Array.isArray(t)?t:[],r=e("home:services.empty",{defaultValue:""});return 0===n.length?(0,l().jsx)(Us,{role:"status",children:r}):(0,l().jsx)(Bs,{children:n.map((e,t)=>{var n;const r=Hs[e.icon]||Ri,o=null!==(n=e.id)&&void 0!==n?n:`${e.icon||"service"}-${t}`;return(0,l().jsx)(Fs,{icon:r,title:e.title,description:e.description},o)})})},Ws=Qo`
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
`,Gs=Go(ma)`
  position: relative;
  isolation: isolate;

  width: 100%;
  min-width: 0;

  padding-block: clamp(64px, 8vw, 108px);

  overflow: hidden;

  background-color:
    var(--color-background-secondary);

  color: var(--color-text-primary);

  border-block:
    1px solid var(--color-border);

  box-sizing: border-box;

  &::before {
    content: "";

    position: absolute;
    z-index: -1;

    width: 420px;
    height: 420px;

    inset-block-start: -210px;
    inset-inline-end: -180px;

    border-radius: 50%;

    background-color: var(
      --color-secondary-soft,
      var(--color-background)
    );

    filter: blur(90px);
    opacity: 0.4;

    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding-block: 60px 76px;

    &::before {
      width: 280px;
      height: 280px;
      opacity: 0.25;
    }
  }

  @media (max-width: 480px) {
    padding-block: 50px 64px;
  }
`,qs=Go(ga)`
  display: flex;
  flex-direction: column;

  gap: clamp(30px, 4vw, 48px);

  width: 100%;
  min-width: 0;
`,Js=Go.div`
  display: flex;
  flex-direction: column;

  gap: clamp(22px, 3vw, 34px);

  width: 100%;
  min-width: 0;
`,Ks=Go.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;
  gap: 14px;

  width: 100%;
`,Ys=Go.span`
  display: inline-flex;
  align-items: center;

  gap: 10px;

  color: var(--color-text-secondary);

  font-size: 0.75rem;
  font-weight: 800;
  line-height: 1.5;
  letter-spacing: 1.5px;

  direction: ltr;

  &::before {
    content: "";

    display: block;

    width: 24px;
    height: 1px;

    background-color: var(--color-primary);
  }
`,Qs=Go.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 34px;

  padding: 7px 14px;

  border: 1px solid var(--color-border);

  border-radius:
    var(--radius-full, 999px);

  background-color:
    var(--color-background);

  color:
    var(--color-text-secondary);

  font-size: 0.76rem;
  font-weight: 700;
  line-height: 1.5;

  text-align: center;
`,Xs=Go.div`
  width: 100%;
  height: 1px;

  background-color: var(--color-border);
`,Zs=Go.div`
  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    minmax(0, 0.9fr);

  align-items: center;

  gap: clamp(24px, 4vw, 64px);

  width: 100%;
  min-width: 0;

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
  }
`,ec=Go.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 16px;

  min-width: 0;
`,tc=Go.h2`
  margin: 0;

  max-width: 650px;

  color: var(--color-text-primary);

  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.35;

  letter-spacing: -0.025em;

  overflow-wrap: break-word;
  text-wrap: balance;

  @media (max-width: 768px) {
    font-size: clamp(1.9rem, 6vw, 2.8rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(1.75rem, 7vw, 2.3rem);
  }
`,nc=Go.span`
  display: block;

  width: 82px;
  height: 3px;

  border-radius:
    var(--radius-full, 999px);

  background: linear-gradient(
    90deg,
    var(--color-primary),
    var(
      --color-secondary-light,
      var(--color-secondary)
    )
  );

  transform-origin: right;

  animation: ${Ws} 0.7s ease both;

  [dir="ltr"] & {
    transform-origin: left;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,rc=Go.div`
  display: flex;
  align-items: center;

  min-width: 0;

  padding-inline-start:
    clamp(16px, 2vw, 26px);

  border-inline-start:
    2px solid var(--color-border);
`,oc=Go.p`
  margin: 0;

  max-width: 570px;

  color: var(--color-text-secondary);

  font-size: clamp(
    0.94rem,
    1.4vw,
    1.04rem
  );

  font-weight: 400;
  line-height: 2;

  overflow-wrap: break-word;
  text-wrap: pretty;

  @media (max-width: 480px) {
    line-height: 1.9;
  }
`,ac=Go.div`
  display: flex;
  flex-direction: column;

  gap: 24px;

  width: 100%;
  min-width: 0;
`,ic=Go.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 16px;

  width: 100%;
  min-width: 0;
`,lc=Go.span`
  display: inline-flex;
  align-items: center;

  gap: 10px;

  flex-shrink: 0;

  color: var(--color-text-secondary);

  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1.5;

  &::before {
    content: "";

    width: 8px;
    height: 8px;

    flex-shrink: 0;

    border-radius: 50%;

    background-color:
      var(--color-secondary);
  }
`,sc=Go.div`
  flex: 1;

  height: 1px;

  background-color: var(--color-border);
`,cc=Go.div`
  width: 100%;
  min-width: 0;

  opacity: ${e=>{let{$visible:t}=e;return t?1:0}};

  transform: ${e=>{let{$visible:t}=e;return t?"translateY(0)":"translateY(22px)"}};

  transition:
    opacity 0.7s ease,
    transform 0.7s ease;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;const uc=function(){const{t:e}=ha(),t=(0,s().useRef)(null),[n,r]=(0,s().useState)(!1),o={index:e("home:services.index",{defaultValue:"SERVICES"}),label:e("home:services.label",{defaultValue:""}),title:e("home:services.title",{defaultValue:""}),description:e("home:services.description",{defaultValue:""}),gridLabel:e("home:services.gridLabel",{defaultValue:""})};return(0,s().useEffect)(()=>{var e,n;const o=t.current;if(!o)return;const a="undefined"!==typeof window&&(null===(e=(n=window).matchMedia)||void 0===e?void 0:e.call(n,"(prefers-reduced-motion: reduce)").matches);if("undefined"===typeof IntersectionObserver||a)return void r(!0);const i=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&(r(!0),i.disconnect())},{threshold:.1,rootMargin:"0px 0px -40px 0px"});return i.observe(o),()=>{i.disconnect()}},[]),(0,l().jsx)(Gs,{id:"services",ref:t,children:(0,l().jsxs)(qs,{children:[(0,l().jsxs)(Js,{children:[(0,l().jsxs)(Ks,{children:[(0,l().jsx)(Ys,{children:o.index}),(0,l().jsx)(Qs,{children:o.label})]}),(0,l().jsx)(Xs,{"aria-hidden":"true"}),(0,l().jsxs)(Zs,{children:[(0,l().jsxs)(ec,{children:[(0,l().jsx)(tc,{children:o.title}),(0,l().jsx)(nc,{"aria-hidden":"true"})]}),(0,l().jsx)(rc,{children:(0,l().jsx)(oc,{children:o.description})})]})]}),(0,l().jsxs)(ac,{children:[(0,l().jsxs)(ic,{children:[(0,l().jsx)(lc,{children:o.gridLabel}),(0,l().jsx)(sc,{"aria-hidden":"true"})]}),(0,l().jsx)(cc,{$visible:n,children:(0,l().jsx)(Vs,{})})]})]})})},dc=Go.article`
  display: flex;
  flex-direction: column;
  gap: clamp(18px, 2.5vw, 26px);

  width: 100%;
  min-width: 0;
  padding: clamp(18px, 3vw, 30px);

  background: var(--color-background-secondary);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card, 18px);

  box-sizing: border-box;

  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: var(--color-primary);
      box-shadow: var(--shadow-md);
      transform: translateY(-3px);
    }
  }

  @media (max-width: 600px) {
    padding: 16px;
    gap: 18px;
    border-radius: 14px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`,pc=Go.div`
  display: grid;
  grid-template-columns:
    minmax(0, 36%) minmax(0, 1fr);

  align-items: start;
  gap: clamp(18px, 2.5vw, 28px);

  width: 100%;
  min-width: 0;

  @media (max-width: 900px) {
    grid-template-columns:
      minmax(0, 40%) minmax(0, 1fr);

    gap: 18px;
  }

  @media (max-width: 600px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,hc=Go.div`
  width: 100%;
  min-width: 0;
`,fc=Go.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;

  overflow: hidden;

  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 14px;

  @media (max-width: 900px) {
    aspect-ratio: 4 / 3;
  }

  @media (max-width: 600px) {
    aspect-ratio: 16 / 9;
    border-radius: 11px;
  }
`,mc=Go.img`
  display: block;
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;

  transition: transform 0.35s ease;

  @media (hover: hover) and (pointer: fine) {
    ${fc}:hover & {
      transform: scale(1.025);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,gc=Go.span`
  position: absolute;
  inset-inline-end: 12px;
  bottom: 12px;

  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 6px 10px;
  border-radius: 8px;

  background: rgba(15, 23, 42, 0.82);
  color: #ffffff;

  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1.4;

  svg {
    width: 15px;
    height: 15px;
  }
`,vc=Go.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  width: 100%;
  min-width: 0;
`,bc=Go.div`
  display: flex;
  align-items: flex-start;
  gap: clamp(12px, 2vw, 18px);

  width: 100%;
  min-width: 0;
`,yc=Go.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 44px;
  height: 44px;

  background: var(--color-background);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
  border-radius: 11px;

  font-size: 0.95rem;
  font-weight: 800;
  font-variant-numeric: tabular-nums;

  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
  }
`,xc=Go.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  flex: 1;
  min-width: 0;
`,wc=Go.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px 16px;
`,kc=Go.h3`
  margin: 0;

  color: var(--color-text-primary);

  font-size: clamp(1.1rem, 2vw, 1.4rem);
  font-weight: 800;
  line-height: 1.55;

  overflow-wrap: anywhere;
  text-wrap: balance;
`,Sc=Go.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  flex-shrink: 0;

  color: var(--color-text-secondary);
  font-size: 0.82rem;
  line-height: 1.5;

  svg {
    width: 15px;
    height: 15px;
  }
`,jc=Go.p`
  margin: 0;

  color: var(--color-text-secondary);
  font-size: clamp(0.9rem, 1.4vw, 0.98rem);
  line-height: 1.95;

  overflow-wrap: anywhere;
`,Ec=Go.a`
  color: var(--color-primary);
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 4px;

  &:hover {
    color: var(
      --color-primary-dark,
      var(--color-primary)
    );
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }
`;function Cc(e){let{content:t}=e;return"string"===typeof t?(0,l().jsx)(jc,{children:t}):Array.isArray(t)?(0,l().jsx)(jc,{children:t.map((e,t)=>{var n,r;return"string"===typeof e?(0,l().jsx)("span",{children:e},t):"link"===(null===e||void 0===e?void 0:e.type)&&e.href?(0,l().jsx)(Ec,{href:e.href,target:"_blank",rel:"noopener noreferrer",children:e.text||e.value||e.href},t):(0,l().jsx)("span",{children:null!==(n=null!==(r=null===e||void 0===e?void 0:e.value)&&void 0!==r?r:null===e||void 0===e?void 0:e.text)&&void 0!==n?n:""},t)})}):null}const Tc=Go.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  width: 100%;
  min-width: 0;

  padding: 12px 14px;

  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 10px;

  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 11px 12px;
    gap: 9px;
  }
`,Lc=Go.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 32px;
  height: 32px;

  color: var(--color-primary);

  background: var(--color-background-secondary);
  border: 1px solid var(--color-border);
  border-radius: 8px;

  svg {
    width: 16px;
    height: 16px;
  }
`,Pc=Go.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  flex: 1;
  min-width: 0;
`,_c=Go.span`
  color: var(--color-text-secondary);

  font-size: 0.76rem;
  font-weight: 600;
  line-height: 1.5;
`,Nc=Go.span`
  color: var(--color-text-primary);

  font-size: 0.88rem;
  font-weight: 700;
  line-height: 1.7;

  overflow-wrap: anywhere;
`,zc=Go.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;

  margin: 0;
  padding: 0;
  list-style: none;
`,Ac=Go.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 32px;
  padding: 6px 12px;

  background: var(--color-background);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
  border-radius: 8px;

  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1.4;

  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  @media (hover: hover) {
    &:hover {
      border-color: var(--color-primary);
      color: var(--color-text-primary);
    }
  }
`,Oc=Go.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;

  margin-top: auto;
  padding-top: 18px;
  border-top: 1px solid var(--color-border);

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`,Rc=Go(xl)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  min-width: 160px;
  min-height: 46px;

  svg {
    width: 17px;
    height: 17px;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    min-width: 0;
  }
`,Ic=Go.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  .ltr-arrow {
    display: none;
  }

  [dir="ltr"] & .rtl-arrow {
    display: none;
  }

  [dir="ltr"] & .ltr-arrow {
    display: block;
  }
`;const Mc=function(e){let{index:t=0,title:n,date:r,description:o,developmentArea:a,developmentAreaLabel:i,techStack:s,toLink:c,value1:u,value2:d,toHref:p,image:h,images:f,imageAlt:m}=e;const g=Ne(),v=c||Oa(g.pathname,"/projects"),b=Array.isArray(s)?s:[],y=Array.isArray(f)&&f.length>0?f.filter(Boolean):h?[h]:[],x=y[0]||null,w="string"===typeof p&&p.trim().length>0&&"#"!==p.trim(),k="string"===typeof a&&a.trim().length>0,S=String(t+1).padStart(2,"0");return(0,l().jsxs)(dc,{children:[(0,l().jsxs)(pc,{children:[x&&(0,l().jsx)(hc,{children:(0,l().jsxs)(fc,{children:[(0,l().jsx)(mc,{src:x,alt:m||n||"",loading:"lazy",decoding:"async"}),y.length>1&&(0,l().jsxs)(gc,{"aria-label":`${y.length} images`,title:`${y.length} images`,children:[(0,l().jsx)(Il,{"aria-hidden":"true"}),y.length]})]})}),(0,l().jsxs)(vc,{children:[(0,l().jsxs)(bc,{children:[(0,l().jsx)(yc,{"aria-hidden":"true",children:S}),(0,l().jsxs)(xc,{children:[(0,l().jsxs)(wc,{children:[(0,l().jsx)(kc,{children:n}),r&&(0,l().jsxs)(Sc,{children:[(0,l().jsx)(Yl,{"aria-hidden":"true"}),(0,l().jsx)("span",{dir:"auto",children:r})]})]}),(0,l().jsx)(Cc,{content:o})]})]}),k&&(0,l().jsxs)(Tc,{children:[(0,l().jsx)(Lc,{"aria-hidden":"true",children:(0,l().jsx)(Ol,{})}),(0,l().jsxs)(Pc,{children:[(0,l().jsx)(_c,{children:i}),(0,l().jsx)(Nc,{children:a})]})]}),b.length>0&&(0,l().jsx)(zc,{children:b.map((e,t)=>(0,l().jsx)(Ac,{children:e},`${e}-${t}`))})]})]}),(0,l().jsxs)(Oc,{children:[(0,l().jsxs)(Rc,{as:$t,to:v,$variant:"primary",$size:"md",children:[u,(0,l().jsxs)(Ic,{children:[(0,l().jsx)(ts,{className:"rtl-arrow","aria-hidden":"true"}),(0,l().jsx)(es,{className:"ltr-arrow","aria-hidden":"true"})]})]}),w&&(0,l().jsxs)(Rc,{as:"a",href:p,target:"_blank",rel:"noopener noreferrer",$variant:"secondary",$size:"md",children:[d,(0,l().jsx)(Bl,{"aria-hidden":"true"})]})]})]})},Dc=n.p+"static/media/\u0627\u0636\u0627\u0641\u0629 \u0645\u0634\u0631\u0648\u0639 - \u0627\u0644\u0639\u0645\u064a\u0644.203cce8370b68f35e332.png",$c=n.p+"static/media/\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629 .2045d44bc2482f1147a3.png",Fc=n.p+"static/media/\u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0645\u0633\u062a\u0642\u0644\u064a\u0646 - \u0627\u0644\u0639\u0645\u064a\u0644.9218c806d21e59622485.png",Hc=n.p+"static/media/\u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a - \u0627\u0644\u0627\u062f\u0645\u0646.06fcda950b2e66c57cb2.png",Bc=n.p+"static/media/\u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a - \u0627\u0644\u0639\u0645\u064a\u0644.c63edef8bcf808d1eea3.png",Uc=n.p+"static/media/\u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0639\u0644\u0649 \u0627\u0644\u062d\u0627\u0644 - \u0627\u0644\u0627\u062f\u0645\u0646.c8d4aa4526a361f07c27.png",Vc=n.p+"static/media/\u062a\u0633\u062c\u064a\u0644 \u062c\u062f\u064a\u062f.f6e4dcb2d4bff8f5eaa2.png",Wc=n.p+"static/media/\u062a\u0635\u0641\u062d \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 - \u0645\u0633\u062a\u0642\u0644.9674ed0287408172ab04.png",Gc=n.p+"static/media/\u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062e\u0635\u064a - \u0627\u0644\u0639\u0645\u064a\u0644.d95e1a16589889793af0.png",qc=n.p+"static/media/\u062c\u062f\u0627\u0648\u0644 \u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a mysql.124c14b046c7067a59e3.png",Jc=n.p+"static/media/\u0639\u0631\u0636 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062e\u0635\u064a - \u0627\u0644\u0639\u0645\u064a\u0644.a556a04ac43f2b9679c9.png",Kc=n.p+"static/media/\u0639\u0631\u0648\u0636\u064a - \u0645\u0633\u062a\u0642\u0644.9529e85f51456ea84da8.png",Yc=n.p+"static/media/\u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 - \u0627\u0644\u0645\u062f\u064a\u0631.bef8ad766d3572e3d1fe.png",Qc=n.p+"static/media/\u0645\u0634\u0627\u0631\u064a\u0639\u064a - \u0627\u0644\u0639\u0645\u064a\u0644.eac212abaf650103239e.png",Xc=n.p+"static/media/\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629.c1a9a2a399971c90550e.png",Zc=n.p+"static/media/\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646.199f281833bd1034b518.png",eu=n.p+"static/media/\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062a \u0627\u0644\u0645\u0646\u0634\u0648\u0631\u0629 \u0639\u0644\u0649 \u0648\u0648\u0631\u062f\u0628\u0631\u064a\u0633.40bf803b907a44b2a5f1.png",tu=n.p+"static/media/\u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062a.3e6d82ba018f6b8da7b3.png",nu=n.p+"static/media/\u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645.9d48bb0304a8b8b8cda0.png",ru=n.p+"static/media/\u0646\u0634\u0631 \u0645\u0642\u0627\u0644\u0629 \u062c\u062f\u064a\u062f\u0629.7c7eb9d6d4944b78bc0a.png",ou=n.p+"static/media/\u0627\u0644\u0628\u062d\u062b \u0627\u0644\u0645\u062a\u0642\u062f\u0645.7bc75fbd13699e009b57.png",au=n.p+"static/media/\u0627\u0644\u062a\u0648\u0627\u0635\u0644.ad0472c6a7adeea1d760.png",iu=n.p+"static/media/\u0627\u0644\u062f\u0641\u0639.90740e87795e59f65a1e.png",lu=n.p+"static/media/\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629 \u062c\u0648\u0627\u0644.8787f7dd658dee689db8.png",su=n.p+"static/media/\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629.7e16097df42938acdc20.png",cu=n.p+"static/media/\u0639\u0631\u0628\u0629 \u0627\u0644\u0634\u0631\u0627\u0621.941d3c02df8545fc963b.png",uu=n.p+"static/media/\u0648\u0635\u0641 \u0627\u0644\u0645\u0646\u062a\u062c \u062c\u0648\u0627\u0644.b4b11ad024b42432cff1.png",du=n.p+"static/media/\u0648\u0635\u0641 \u0627\u0644\u0645\u0646\u062a\u062c.40d1a9d6a6660dd7783b.png",pu=n.p+"static/media/\u0627\u062d\u0635\u0627\u0626\u064a\u0627\u062a \u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a.e661897cd1b952993013.png",hu=n.p+"static/media/\u0627\u0636\u0627\u0641\u0629 \u0645\u0646\u062a\u062c.e374e49de93150009340.png",fu=n.p+"static/media/\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629 - \u0627\u0644\u062c\u0648\u0627\u0644.6f0e1dacf350125d1c26.png",mu=n.p+"static/media/\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629 \u0644\u0648\u062d\u0629 \u062a\u062d\u0643\u0645.a89437fb49163b6ac6fe.png",gu=n.p+"static/media/\u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a.a4f3434d54552aeafe12.png",vu=n.p+"static/media/\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646.3fe04ec84928861f8161.png",bu=n.p+"static/media/\u0627\u0636\u0627\u0641\u0629 \u0645\u0633\u062a\u062e\u062f\u0645.4751da809f88631a3ee6.png",yu=n.p+"static/media/\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u06291.e90abce1d156ce58025e.png",xu=n.p+"static/media/\u062a\u0633\u062c\u064a\u0644 \u062c\u062f\u064a\u062f - \u0627\u0644\u062c\u0648\u0627\u0644.0e1d8ff45c619efc494a.png",wu=n.p+"static/media/\u0645\u0644\u0641 \u0627\u0644\u0637\u0627\u0644\u0628 \u0627\u0644\u0645\u062a\u0641\u0648\u0642.0a6c7a4aab77dd1f4030.png",ku=n.p+"static/media/\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629 - \u0635\u0641\u062d\u0629 \u062a\u0639\u0631\u064a\u0641\u064a \u0639\u0646\u064a v1.0bd41a9c5fb319dd8944.png",Su=n.p+"static/media/\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a - \u062c\u0648\u0627\u0644.c3bd0555d3c560813faf.png",ju=n.p+"static/media/\u0645\u0639\u0631\u0636 \u0627\u0644\u0627\u0639\u0645\u0627\u0644.e3d9e705900c15a4e17f.png",Eu=n.p+"static/media/\u0627\u062e\u0631 \u0627\u0644\u0627\u0639\u0645\u0627\u0644 \u0627\u0644\u062c\u0648\u0627\u0644.1f1b00f7d901c663a7c9.png",Cu=n.p+"static/media/\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629 - \u0645\u0648\u0642\u0639 \u0634\u062e\u0635\u064a \u0639\u0646\u064a v2.80c21a1674baf0b7df13.png",Tu=n.p+"static/media/\u0634\u0631\u0648\u0637 \u0627\u0644\u062e\u062f\u0645\u0629.ad3d32f3d9db038baa41.png",Lu=n.p+"static/media/\u0639\u0631\u0648\u0636\u064a .4e221dbbf056caa57f31.png",Pu=n.p+"static/media/\u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0648\u0627\u0635\u0644.f37ff4b349a3e42e9706.png",_u=n.p+"static/media/\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629.42c03cfc37ab14f2c8a9.png",Nu=n.p+"static/media/\u0645\u0634\u0627\u0631\u064a\u0639\u064a.4dc2eb3595b060789e99.png",zu=n.p+"static/media/\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639.a2428451186c62da5370.png",Au=n.p+"static/media/\u0639\u0646\u064a.3330694149af33eb8e25.png",Ou=n.p+"static/media/\u0627\u0644\u062a\u0648\u0627\u0635\u0644.dafbf27042522a74f1e3.png",Ru=n.p+"static/media/\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629 \u062f\u0627\u0643\u0646.82cbd3edd98b473d4bf3.png",Iu=n.p+"static/media/\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629 \u062c\u0648\u0627\u0644.4c078608e5b02db8762b.png",Mu=n.p+"static/media/\u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u062a\u062c\u0627\u0648\u0628\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0648\u0627\u0644.1984a22d23843b39e229.png",Du=n.p+"static/media/\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629 \u0627\u0646\u062c\u0644\u064a\u0632\u064a.42ad710abab7017af4e7.png",$u=n.p+"static/media/\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629.e2f390ead0b946401503.png",Fu=n.p+"static/media/\u0639\u0631\u0636 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a.67821ea194bfac52e5c6.png",Hu=n.p+"static/media/\u0627\u0636\u0627\u0641\u0629 \u0645\u0644\u0627\u062d\u0638\u0629.072beaaa17420a55f0af.png",Bu=n.p+"static/media/\u062a\u0639\u062f\u064a\u0644 \u0645\u0644\u0627\u062d\u0638\u0629.7513cd4658bf4cd8e95d.png",Uu=Object.freeze({freelancer_hub1:Dc,freelancer_hub2:$c,freelancer_hub3:Fc,freelancer_hub4:Hc,freelancer_hub5:Bc,freelancer_hub6:Uc,freelancer_hub7:Vc,freelancer_hub8:Wc,freelancer_hub9:Gc,freelancer_hub10:qc,freelancer_hub11:Jc,freelancer_hub12:Kc,freelancer_hub13:Yc,freelancer_hub14:Qc,rest_api_wordpress1:Xc,rest_api_wordpress2:Zc,rest_api_wordpress3:eu,rest_api_wordpress4:tu,rest_api_wordpress5:nu,rest_api_wordpress6:ru,online_store1:ou,online_store2:au,online_store3:iu,online_store4:lu,online_store5:su,online_store6:cu,online_store7:uu,online_store8:du,control_panel1:pu,control_panel2:hu,control_panel3:fu,control_panel4:mu,control_panel5:gu,control_panel6:vu,control_panel7:bu,almni_school1:yu,almni_school2:xu,almni_school3:wu,portfolio_v1_1:ku,portfolio_v1_2:Su,portfolio_v1_3:ju,portfolio_v2_1:Eu,portfolio_v2_2:Cu,portfolio_v2_3:Tu,portfolio_v2_4:Lu,portfolio_v2_5:Pu,portfolio_v3_1:_u,portfolio_v3_2:Nu,portfolio_v3_3:zu,portfolio_v3_4:Au,portfolio_v3_5:Ou,portfolio_v3_6:Ru,portfolio_v3_7:Iu,portfolio_v3_8:Mu,portfolio_v3_9:Du,to_do_list1:$u,to_do_list2:Fu,to_do_list3:Hu,to_do_list4:Bu}),Vu=Go.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: stretch;

  gap: clamp(16px, 2.5vw, 24px);

  width: 100%;
  min-width: 0;
  box-sizing: border-box;

  > * {
    min-width: 0;
  }

  @media (max-width: 600px) {
    gap: 16px;
  }
`,Wu=Go.p`
  margin: 0;
  padding: clamp(28px, 4vw, 40px) 20px;

  background: var(--color-background-secondary);
  color: var(--color-text-secondary);

  border: 1px solid var(--color-border);
  border-radius: var(--radius-card, 14px);

  font-size: 0.95rem;
  line-height: 1.8;
  text-align: center;
`;const Gu=function(e){let{source:t="auto"}=e;const{t:n,i18n:r}=ha(["home","projects","common"]),o=Ne(),a=(r.resolvedLanguage||r.language||"ar").toLowerCase().startsWith("ar"),i=o.pathname.replace(/\/+$/,""),s="/projects"===i||i.endsWith("/projects"),c="home"===t||"projects"===t?t:s?"projects":"home",u=n("items",{ns:"projects",returnObjects:!0,defaultValue:[]}),d=Array.isArray(u)?u:[],p=n("featuredProjects.items",{ns:"home",returnObjects:!0,defaultValue:[]}),h=Array.isArray(p)?p.map(e=>"string"===typeof e?e:e&&"object"===typeof e?e.id:null).filter(e=>"string"===typeof e&&""!==e.trim()):[],f=new Map(d.filter(e=>e&&"string"===typeof e.id&&""!==e.id.trim()).map(e=>[e.id,e])),m="projects"===c?d:h.map(e=>f.get(e)).filter(Boolean),g=n("buttons.view_project",{ns:"common",defaultValue:a?"\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639":"Project Details"}),v=n("buttons.demo",{ns:"common",defaultValue:a?"\u0645\u0639\u0627\u064a\u0646\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639":"Live Preview"}),b=n("details.developmentArea",{ns:"projects",defaultValue:a?"\u0645\u062c\u0627\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639":"Development Area"});return 0===m.length?(0,l().jsx)(Wu,{role:"status",children:a?"\u0644\u0627 \u062a\u0648\u062c\u062f \u0645\u0634\u0627\u0631\u064a\u0639 \u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0639\u0631\u0636 \u062d\u0627\u0644\u064a\u064b\u0627.":"No projects available at the moment."}):(0,l().jsx)(Vu,{children:m.map((e,t)=>{const n=e.id,r=n?((e,t)=>Oa(e,`/projects/${encodeURIComponent(t)}`))(o.pathname,n):Oa(o.pathname,"/projects"),a=e.shortDescription||e.desc||"",i="string"===typeof e.developmentArea?e.developmentArea.trim():"",s=Array.isArray(e.tech_stack)?e.tech_stack:[],c=(u=e.project_img,(Array.isArray(u)?u:"string"===typeof u?[u]:[]).map(e=>"string"!==typeof e?null:Object.prototype.hasOwnProperty.call(Uu,e)?Uu[e]:/^https?:\/\//i.test(e)?e:null).filter(Boolean));var u;const d=c.length>0?c[0]:null,p="string"===typeof e.demo&&e.demo.trim()?e.demo.trim():"string"===typeof e.link&&e.link.trim()?e.link.trim():void 0,h=n||`project-${t}`;return(0,l().jsx)(Mc,{index:t,title:e.title,date:e.date,description:a,developmentArea:i,developmentAreaLabel:b,techStack:s,toLink:r,toHref:p,value1:g,value2:v,image:d,images:c,imageAlt:e.title},h)})})},qu=Go(ma)`
  position: relative;

  width: 100%;
  min-width: 0;

  padding-block:
    clamp(64px, 8vw, 104px);

  background-color:
    var(--color-background);

  color:
    var(--color-text-primary);

  box-sizing: border-box;

  @media (max-width: 600px) {
    padding-block: 52px 68px;
  }
`,Ju=Go(ga)`
  display: flex;
  flex-direction: column;

  gap: clamp(
    28px,
    4vw,
    42px
  );

  width: 100%;
  min-width: 0;
`,Ku=Go.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  gap: 24px;

  width: 100%;
  min-width: 0;

  @media (max-width: 700px) {
    align-items: flex-start;
  }
`,Yu=Go.div`
  display: flex;
  flex-direction: column;

  gap: 12px;

  flex: 1;

  max-width: 700px;
  min-width: 0;
`,Qu=Go.span`
  display: inline-flex;
  align-items: center;

  gap: 10px;

  width: fit-content;

  color:
    var(--color-primary);

  font-size: 0.79rem;
  font-weight: 700;
  line-height: 1.5;

  letter-spacing: 0.04em;

  &::before {
    content: "";

    width: 24px;
    height: 2px;

    flex-shrink: 0;

    border-radius: 2px;

    background-color:
      currentColor;
  }
`,Xu=Go.h2`
  margin: 0;

  color:
    var(--color-text-primary);

  font-size: clamp(
    1.85rem,
    3.5vw,
    2.65rem
  );

  font-weight: 800;
  line-height: 1.4;

  letter-spacing: -0.025em;

  overflow-wrap: break-word;
  text-wrap: balance;

  @media (max-width: 480px) {
    font-size: clamp(
      1.75rem,
      7vw,
      2.2rem
    );
  }
`,Zu=Go.p`
  margin: 0;

  max-width: 640px;

  color:
    var(--color-text-secondary);

  font-size: clamp(
    0.93rem,
    1.5vw,
    1.02rem
  );

  font-weight: 400;
  line-height: 1.95;

  overflow-wrap: break-word;
  text-wrap: pretty;
`,ed=Go(xl)`
  flex-shrink: 0;

  gap: 10px;

  white-space: nowrap;

  svg {
    display: block;

    width: 17px;
    height: 17px;

    flex-shrink: 0;
  }

  @media (max-width: 700px) {
    display: none;
  }
`,td=Go(xl)`
  display: none;

  gap: 10px;

  svg {
    display: block;

    width: 17px;
    height: 17px;

    flex-shrink: 0;
  }

  @media (max-width: 700px) {
    display: inline-flex;

    align-self: center;

    max-width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,nd=Go.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  svg {
    display: block;

    width: 17px;
    height: 17px;
  }
`,rd=Go.div`
  width: 100%;
  min-width: 0;

  > * {
    min-width: 0;
  }
`;const od=function(){const e=Ne(),{t:t,i18n:n}=ha(),r=(n.resolvedLanguage||n.language||"ar").toLowerCase().startsWith("ar"),o=t("home:featuredProjects.header.view_projects"),a=t("home:featuredProjects.header.label",{defaultValue:"PORTFOLIO"}),i=t("home:featuredProjects.header.title"),s=t("home:featuredProjects.header.desc"),c=r?ts:es;return(0,l().jsx)(qu,{id:"featured-projects","aria-labelledby":"featured-projects-title",children:(0,l().jsxs)(Ju,{children:[(0,l().jsxs)(Ku,{children:[(0,l().jsxs)(Yu,{children:[(0,l().jsx)(Qu,{children:a}),(0,l().jsx)(Xu,{id:"featured-projects-title",children:i}),(0,l().jsx)(Zu,{children:s})]}),(0,l().jsxs)(ed,{as:$t,to:Oa(e.pathname,"/projects"),$variant:"secondary",$size:"md",children:[o,(0,l().jsx)(nd,{"aria-hidden":"true",children:(0,l().jsx)(c,{})})]})]}),(0,l().jsx)(rd,{children:(0,l().jsx)(Gu,{})}),(0,l().jsxs)(td,{as:$t,to:Oa(e.pathname,"/projects"),$variant:"secondary",$size:"md",children:[o,(0,l().jsx)(nd,{"aria-hidden":"true",children:(0,l().jsx)(c,{})})]})]})})},ad=Go(ma)`
  position: relative;
  isolation: isolate;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 0;

  padding-block:
    clamp(68px, 8vw, 108px);

  overflow: hidden;

  background-color:
    var(--color-background-secondary);

  color:
    var(--color-text-primary);

  border-top:
    1px solid var(--color-border);

  box-sizing: border-box;

  /* -------------------------------------------------------
     SUBTLE DECORATIVE CIRCLES
  ------------------------------------------------------- */

  &::before,
  &::after {
    content: "";

    position: absolute;
    z-index: -1;

    width: 240px;
    height: 240px;

    border:
      1px solid var(--color-border);

    border-radius: 50%;

    opacity: 0.55;

    pointer-events: none;
  }

  &::before {
    inset-block-start: -165px;
    inset-inline-start: -100px;
  }

  &::after {
    inset-block-end: -170px;
    inset-inline-end: -100px;
  }

  /* -------------------------------------------------------
     TABLET
  ------------------------------------------------------- */

  @media (max-width: 768px) {
    padding-block: 64px;

    &::before,
    &::after {
      width: 190px;
      height: 190px;
    }
  }

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 480px) {
    padding-block: 54px;

    &::before,
    &::after {
      opacity: 0.35;
    }
  }
`,id=Go(ga)`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: clamp(
    16px,
    2vw,
    23px
  );

  width: 100%;
  max-width: 900px;
  min-width: 0;

  text-align: center;

  box-sizing: border-box;
`,ld=Go(pl)`
  margin: 0;

  max-width: 760px;

  color:
    var(--color-text-primary);

  font-size: clamp(
    1.75rem,
    3.5vw,
    2.65rem
  );

  font-weight: 800;
  line-height: 1.45;

  letter-spacing: -0.02em;

  overflow-wrap: break-word;
  text-wrap: balance;

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 480px) {
    font-size: clamp(
      1.5rem,
      6.5vw,
      1.95rem
    );

    line-height: 1.5;
  }
`,sd=Go(fl)`
  margin: 0;

  width: 100%;
  max-width: 650px;

  color:
    var(--color-text-secondary);

  font-size: clamp(
    0.95rem,
    1.5vw,
    1.04rem
  );

  font-weight: 400;
  line-height: 1.95;

  overflow-wrap: break-word;
  text-wrap: pretty;

  @media (max-width: 480px) {
    font-size: 0.93rem;
    line-height: 1.9;
  }
`,cd=Go(gl)`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;

  gap: 12px;

  width: 100%;

  margin-block-start: 12px;

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;

    gap: 10px;

    max-width: 360px;

    > * {
      width: 100%;
    }
  }
`;const ud=function(){const e=Ne(),{t:t}=ha(),n=t("home:callToAction.title"),r=t("home:callToAction.paragraph"),o=t("buttons.contact"),a=t("buttons.projects");return(0,l().jsx)(ad,{id:"call-to-action","aria-labelledby":"cta-title",children:(0,l().jsxs)(id,{children:[(0,l().jsx)(ld,{as:"h2",id:"cta-title",children:n}),(0,l().jsx)(sd,{children:r}),(0,l().jsxs)(cd,{children:[(0,l().jsx)(xl,{as:$t,to:Oa(e.pathname,"/contact"),$variant:"primary",$size:"lg",children:o}),(0,l().jsx)(xl,{as:$t,to:Oa(e.pathname,"/projects"),$variant:"secondary",$size:"lg",children:a})]})]})})},dd=Go.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 0;

  flex: 1 0 auto;

  margin: 0;
  padding: 0;

  background-color:
    var(--color-background);

  color:
    var(--color-text-primary);

  box-sizing: border-box;

  /* -------------------------------------------------------
     PREVENT FLEX CHILD OVERFLOW
  ------------------------------------------------------- */

  > * {
    min-width: 0;
  }

  /* -------------------------------------------------------
     RESPONSIVE BEHAVIOR

     Individual sections manage their
     own internal grids and spacing.
  ------------------------------------------------------- */

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    min-width: 0;
  }
`;const pd=function(){return(0,l().jsxs)(dd,{"aria-label":"Home",children:[(0,l().jsx)(As,{}),(0,l().jsx)(uc,{}),(0,l().jsx)(od,{}),(0,l().jsx)(ud,{})]})},hd=Go.nav`
  width: 100%;
  min-width: 0;

  margin: 0;
  padding: 0;

  background: transparent;

  border: none;
  box-shadow: none;

  box-sizing: border-box;
`,fd=Go(ga)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  min-width: 0;
`,md=Go.ol`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  flex-wrap: wrap;

  column-gap: 10px;
  row-gap: 6px;

  width: fit-content;
  max-width: 100%;
  min-width: 0;

  margin: 0;
  padding: 0;

  list-style: none;

  box-sizing: border-box;

  @media (max-width: 480px) {
    column-gap: 7px;
    row-gap: 4px;
  }
`,gd=Go.li`
  display: inline-flex;
  align-items: center;

  min-width: 0;
  max-width: 100%;
`,vd=Go($t)`
  display: inline-flex;
  align-items: center;

  gap: 7px;

  min-height: 34px;

  padding: 3px 0;

  color:
    var(
      --color-text-secondary,
      var(--color-text-primary)
    );

  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1.6;

  text-decoration: none;

  transition:
    color 0.2s ease;

  svg {
    display: block;

    width: 16px;
    height: 16px;

    flex-shrink: 0;

    color: var(--color-primary);
  }

  &:hover {
    color: var(--color-primary);
    text-decoration: none;
  }

  &:focus-visible {
    outline:
      2px solid
      var(
        --focus-ring-color,
        var(--color-primary)
      );

    outline-offset: 4px;

    border-radius:
      var(--radius-sm, 4px);
  }

  @media (max-width: 480px) {
    gap: 5px;

    font-size: 0.8rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,bd=Go.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  color:
    var(
      --color-text-secondary,
      var(--color-text-primary)
    );

  opacity: 0.65;

  svg {
    display: block;

    width: 15px;
    height: 15px;
  }

  @media (max-width: 480px) {
    svg {
      width: 13px;
      height: 13px;
    }
  }
`,yd=Go.span`
  display: inline-flex;
  align-items: center;

  min-width: 0;
  max-width: 100%;

  min-height: 34px;

  padding: 3px 0;

  color: var(--color-primary);

  font-size: 0.85rem;
  font-weight: 700;
  line-height: 1.6;

  overflow-wrap: anywhere;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;const xd=function(e){let{value:t="",projectTitle:n=""}=e;const r=Ne(),o=Oa(r.pathname,"/"),a=Oa(r.pathname,"/projects"),{t:i,i18n:s}=ha(["common","home","about","projects","contact"]),c=(s.resolvedLanguage||s.language||"ar").startsWith("ar"),u=c?ql:Gl,d=["home","about","projects","contact"].includes(t)?t:null,p=i(`nav.${t}`,{ns:"common",defaultValue:t}),h="about"===t?i("about:pageTitle",{defaultValue:c?"\u0639\u0646\u064a":"About Me"}):d?i(`${d}:pageTitle`,{defaultValue:p}):p,f="projects"===t&&"string"===typeof n&&n.trim().length>0,m=i("pageTitle",{ns:"projects",defaultValue:c?"\u0645\u0634\u0627\u0631\u064a\u0639\u064a":"My Projects"}),g=i("nav.home",{ns:"common",defaultValue:c?"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629":"Home"}),v=c?"\u0645\u0633\u0627\u0631 \u0627\u0644\u062a\u0646\u0642\u0644":"Breadcrumb navigation";return(0,l().jsx)(hd,{"aria-label":v,dir:c?"rtl":"ltr",children:(0,l().jsx)(fd,{children:(0,l().jsxs)(md,{children:[(0,l().jsx)(gd,{children:(0,l().jsxs)(vd,{to:o,children:[(0,l().jsx)(Ml,{"aria-hidden":"true",focusable:"false"}),(0,l().jsx)("span",{children:g})]})}),(0,l().jsx)(bd,{"aria-hidden":"true",children:(0,l().jsx)(u,{})}),f?(0,l().jsxs)(l().Fragment,{children:[(0,l().jsx)(gd,{children:(0,l().jsx)(vd,{to:a,children:m})}),(0,l().jsx)(bd,{"aria-hidden":"true",children:(0,l().jsx)(u,{})}),(0,l().jsx)(gd,{"aria-current":"page",children:(0,l().jsx)(yd,{children:n})})]}):(0,l().jsx)(l().Fragment,{children:(0,l().jsx)(gd,{"aria-current":"page",children:(0,l().jsx)(yd,{children:h})})})]})})})};function wd(e){return Ci({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"},child:[]}]})(e)}const kd=Go.div`
  position: fixed;
  inset: 0;

  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;

  padding: clamp(12px, 3vw, 28px);

  background-color: rgba(0, 0, 0, 0.78);

  box-sizing: border-box;

  overflow-y: auto;
  overscroll-behavior: contain;

  animation: modalFadeIn 0.2s ease both;

  @keyframes modalFadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Sd=Go.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: min(100%, 1000px);
  min-width: 0;

  max-height: calc(100dvh - 32px);

  margin: auto;

  background-color:
    var(--color-background);

  color:
    var(--color-text-primary);

  border:
    1px solid var(--color-border);

  border-radius:
    var(--radius-card, 16px);

  box-shadow:
    var(--shadow-md);

  overflow: hidden;

  box-sizing: border-box;

  animation: modalEnter 0.25s ease both;

  @keyframes modalEnter {
    from {
      opacity: 0;
      transform: translateY(12px) scale(0.985);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 600px) {
    width: 100%;

    max-height: calc(100dvh - 24px);

    border-radius: 12px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,jd=Go.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 12px;

  min-height: 60px;

  padding: 12px 18px;

  background-color:
    var(
      --color-background-tertiary,
      var(--color-background-secondary)
    );

  border-block-end:
    1px solid var(--color-border);

  box-sizing: border-box;

  @media (max-width: 600px) {
    min-height: 54px;

    padding: 10px 12px;
  }
`,Ed=Go.h2`
  margin: 0;

  min-width: 0;

  color:
    var(--color-text-primary);

  font-size: clamp(0.9rem, 1.5vw, 1rem);
  font-weight: 700;
  line-height: 1.6;

  overflow-wrap: anywhere;
`,Cd=Go.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;

  flex-shrink: 0;

  padding: 0;

  background-color:
    var(--color-background);

  color:
    var(--color-text-primary);

  border:
    1px solid var(--color-border);

  border-radius: 10px;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;

  svg {
    width: 21px;
    height: 21px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color:
        var(--color-primary);

      color: #ffffff;

      border-color:
        var(--color-primary);
    }
  }

  &:focus-visible {
    outline:
      2px solid var(--color-primary);

    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Td=Go.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 0;
  min-height: 0;

  padding: clamp(12px, 2vw, 24px);

  overflow: auto;

  background-color:
    var(--color-background);

  box-sizing: border-box;

  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;

  img {
    display: block;

    width: auto;
    height: auto;

    max-width: 100%;
    max-height: calc(100dvh - 150px);

    object-fit: contain;
    object-position: center;
  }

  @media (max-width: 600px) {
    padding: 10px;

    img {
      max-height: calc(100dvh - 115px);
    }
  }
`,Ld=e=>{let{ImgSource:t,ImgAlt:n="",isOpen:r=!1,onClose:a}=e;const i=(0,s().useRef)(null),c=(0,s().useRef)(null),u=(0,s().useRef)(null);if((0,s().useEffect)(()=>{var e;if(!r)return;const t=document.body.style.overflow;u.current=document.activeElement,document.body.style.overflow="hidden";const n=e=>{if("Escape"===e.key)return e.preventDefault(),void("function"===typeof a&&a());if("Tab"===e.key){const t=c.current;if(!t)return;const n=t.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'),r=Array.from(n);if(0===r.length)return e.preventDefault(),void t.focus();const o=r[0],a=r[r.length-1];e.shiftKey&&document.activeElement===o?(e.preventDefault(),a.focus()):e.shiftKey||document.activeElement!==a||(e.preventDefault(),o.focus())}};return document.addEventListener("keydown",n),null===(e=i.current)||void 0===e||e.focus(),()=>{document.body.style.overflow=t,document.removeEventListener("keydown",n);const e=u.current;e&&"function"===typeof e.focus&&e.focus()}},[r,a]),!r)return null;const d="string"===typeof n?n.trim():"",p=d||"Image Preview";return(0,o().createPortal)((0,l().jsx)(kd,{onClick:e=>{e.target===e.currentTarget&&"function"===typeof a&&a()},children:(0,l().jsxs)(Sd,{ref:c,role:"dialog","aria-modal":"true","aria-label":p,tabIndex:-1,children:[(0,l().jsxs)(jd,{children:[(0,l().jsx)(Ed,{children:d}),(0,l().jsx)(Cd,{ref:i,type:"button",onClick:a,"aria-label":"Close image preview",children:(0,l().jsx)(wd,{"aria-hidden":"true"})})]}),(0,l().jsx)(Td,{children:t&&(0,l().jsx)("img",{src:t,alt:n,decoding:"async",draggable:!1,onContextMenu:e=>{e.preventDefault()},onDragStart:e=>{e.preventDefault()}})})]})}),document.body)},Pd=e=>Array.isArray(e)?e:[],_d=(e,t)=>"string"===typeof e||"number"===typeof e?String(e):e&&"object"===typeof e&&!Array.isArray(e)?String((t?e.ar:e.en)||e.ar||e.en||""):"",Nd=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.find(e=>void 0!==e&&null!==e&&""!==e)},zd=e=>String(null!==e&&void 0!==e?e:"").replace(/[\u0660-\u0669]/g,e=>String("\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669".indexOf(e))).replace(/[\u06f0-\u06f9]/g,e=>String("\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9".indexOf(e))),Ad=e=>String(e).padStart(2,"0"),Od=e=>/present|current|ongoing|now|\u062d\u062a\u0649 \u0627\u0644\u0622\u0646|\u062d\u0627\u0644\u064a\u0627|\u062d\u0627\u0644\u064a\u0627\u064b/i.test(String(e||"")),Rd=e=>{if(!e||Od(e))return null;const t=zd(e).trim();let n,r=1,o=1,a="day",i=t.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})$/);if(i)n=Number(i[1]),r=Number(i[2]),o=Number(i[3]);else if(i=t.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/),i)o=Number(i[1]),r=Number(i[2]),n=Number(i[3]);else if(i=t.match(/^(\d{4})[-/.](\d{1,2})$/),i)n=Number(i[1]),r=Number(i[2]),a="month";else{if(i=t.match(/^(\d{4})$/),!i)return null;n=Number(i[1]),a="year"}const l=new Date(Date.UTC(n,r-1,o));return n<1900||n>2100||l.getUTCFullYear()!==n||l.getUTCMonth()!==r-1||l.getUTCDate()!==o?null:{date:l,year:n,month:r,day:o,precision:a}},Id=e=>e?"year"===e.precision?String(e.year):"month"===e.precision?`${Ad(e.month)}/${e.year}`:`${Ad(e.day)}/${Ad(e.month)}/${e.year}`:"",Md=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=Nd(e.startDate,e.start),n=Nd(e.endDate,e.end),r=!0===e.current||!0===e.ongoing||Od(n)||Od(e.date);if(t||n)return{start:Rd(t),end:Rd(n),current:r,single:null};const o=zd(Nd(e.date,e.period,"")).match(/\d{4}[-/.]\d{1,2}[-/.]\d{1,2}|\d{1,2}[-/.]\d{1,2}[-/.]\d{4}|\d{4}[-/.]\d{1,2}/g);return(null===o||void 0===o?void 0:o.length)>=2?{start:Rd(o[0]),end:Rd(o[1]),current:r,single:null}:{start:null,end:null,current:r,single:Rd(Nd(e.issuedDate,e.completionDate,e.date))}},Dd=e=>{const t=Md(e);if(t.current)return Number.MAX_SAFE_INTEGER;const n=Rd(null===e||void 0===e?void 0:e.sortDate)||t.end||t.single||t.start;return n?n.date.getTime():-1/0},$d=e=>[...Pd(e)].sort((e,t)=>Dd(t)-Dd(e)),Fd=e=>{if("string"!==typeof e||!e.trim())return"";const t=e.trim();if(/^https?:\/\//i.test(t))return t;if(t.startsWith("//")||/^[a-z][a-z\d+.-]*:/i.test(t))return"";const n=String("/abdulrahman-portfolio-react").replace(/\/+$/,""),r=t.replace(/^\/+/,"");let o="";try{o=new URL(n||"/",window.location.origin).pathname.replace(/^\/+|\/+$/g,"")}catch{o=n.replace(/^\/+|\/+$/g,"")}return o&&(r===o||r.startsWith(`${o}/`))?`/${r}`:`${n}/${r}`},Hd=e=>{var t,n;return(null===(t=String(e||"").split("?")[0].split("#")[0].match(/\.([a-z0-9]+)$/i))||void 0===t||null===(n=t[1])||void 0===n?void 0:n.toUpperCase())||""},Bd=Go.main`
  --about-bg:
    var(--color-background, #f4f7fb);

  --about-card:
    var(--color-card-background, #ffffff);

  --about-section:
    var(--color-background-secondary, #edf3f9);

  --about-border:
    var(--color-border, #d5e0eb);

  --about-border-strong:
    var(--color-border-strong, #bfcfdf);

  --about-text:
    var(--color-text-primary, #172435);

  --about-muted:
    var(--color-text-secondary, #475569);

  --about-primary:
    var(--color-primary, #287c98);

  width: 100%;
  min-width: 0;
  overflow-x: clip;

  background: var(--about-bg);
  color: var(--about-text);

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`,Ud=Go(ga)`
  display: flex;
  flex-direction: column;

  gap: clamp(48px, 7vw, 80px);

  padding-block:
    clamp(40px, 6vw, 70px)
    clamp(70px, 9vw, 110px);
`,Vd=Go.section`
  min-width: 0;

  scroll-margin-top:
    calc(var(--header-height, 70px) + 20px);

  &.alternate {
    padding: clamp(18px, 3vw, 34px);

    border: 1px solid var(--about-border);
    border-radius: var(--radius-card, 16px);

    background: var(--about-section);
  }

  @media (max-width: 600px) {
    &.alternate {
      padding: 18px 13px;
    }
  }
`,Wd=Go.div`
  margin-bottom: 26px;

  .number {
    display: inline-flex;
    align-items: center;
    gap: 9px;

    margin-bottom: 10px;

    color: var(--about-primary);

    font-size: 0.84rem;
    font-weight: 800;
  }

  h2 {
    position: relative;

    margin: 0 0 12px;
    padding-inline-start: 16px;

    color: var(--about-text);

    font-size:
      clamp(1.45rem, 3vw, 2rem);

    line-height: 1.5;
  }

  h2::before {
    content: "";

    position: absolute;
    inset-inline-start: 0;
    inset-block: 12%;

    width: 4px;
    border-radius: 4px;

    background: var(--about-primary);
  }

  p {
    max-width: 850px;
    margin: 0;

    color: var(--about-muted);

    font-size: 0.93rem;
    line-height: 1.95;
  }
`,Gd=Go.article`
  min-width: 0;

  padding: clamp(18px, 2.5vw, 26px);

  border: 1px solid var(--about-border);
  border-radius: var(--radius-card, 13px);

  background: var(--about-card);
  box-shadow: var(--shadow-sm, none);

  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color:
        var(--about-border-strong);

      box-shadow: var(--shadow-md, none);
    }
  }
`,qd=Go.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 16px;
`,Jd=Go.div`
  display: grid;

  grid-template-columns:
    minmax(0, 1.35fr)
    minmax(270px, 0.8fr);

  gap: clamp(24px, 4vw, 42px);
  align-items: start;

  @media (max-width: 850px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,Kd=Go.div`
  h2 {
    margin: 0 0 18px;

    color: var(--about-text);

    font-size:
      clamp(1.5rem, 3vw, 2.2rem);

    line-height: 1.5;
  }

  p {
    margin: 0 0 17px;

    color: var(--about-muted);

    font-size: 0.96rem;
    line-height: 2.05;
  }

  p:last-child {
    margin-bottom: 0;
  }
`,Yd=Go(Gd)`
  h3 {
    display: flex;
    align-items: center;
    gap: 10px;

    margin: 0 0 12px;

    color: var(--about-text);
    font-size: 1.08rem;
  }

  h3 svg {
    color: var(--about-primary);
  }
`,Qd=Go.div`
  padding-block: 12px;

  border-bottom:
    1px solid var(--about-border);

  &:last-child {
    border: 0;
    padding-bottom: 0;
  }

  span {
    display: block;
    margin-bottom: 5px;

    color: var(--about-muted);
    font-size: 0.81rem;
  }

  strong {
    display: block;

    color: var(--about-text);

    font-size: 0.92rem;
    line-height: 1.8;

    overflow-wrap: anywhere;
  }
`,Xd=Go(Gd)`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,Zd=Go.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 10px;
  }
`,ep=Go.div`
  min-width: 0;
  flex: 1;

  h3 {
    margin: 0 0 7px;

    color: var(--about-text);

    font-size: 1.08rem;
    line-height: 1.7;
  }

  .subtitle {
    display: block;

    color: var(--about-muted);

    font-size: 0.9rem;
    line-height: 1.8;
  }
`,tp=Go.p`
  margin: 0;

  color: var(--about-muted);

  font-size: 0.93rem;
  line-height: 2;

  overflow-wrap: anywhere;
`,np=Go.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  .grade-value {
    direction: ltr;
    unicode-bidi: isolate;

    color: var(--about-primary);
    font-weight: 800;
  }
`,rp=Go.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  max-width: 100%;
  padding: 8px 12px;

  border: 1px solid var(--about-border);
  border-radius: 9px;

  background: var(--about-section);
  color: var(--about-text);

  font-size: 0.82rem;
  font-weight: 650;
  line-height: 1.6;

  overflow-wrap: anywhere;

  svg {
    flex-shrink: 0;
    color: var(--about-primary);
  }
`,op=Go(rp)`
  flex-shrink: 0;

  .date-text {
    unicode-bidi: isolate;
  }
`,ap=Go.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 3px 8px;

  border: 1px solid #16a34a;
  border-radius: 6px;

  background: rgba(22, 163, 74, 0.1);
  color: #15803d;

  font-size: 0.76rem;
  font-weight: 800;

  white-space: nowrap;
`,ip=Go.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-top: 3px;
  padding-top: 14px;

  border-top:
    1px solid var(--about-border);

  @media (max-width: 500px) {
    & > * {
      width: 100%;
    }
  }
`,lp=Go.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 3px 7px;

  border: 1px solid currentColor;
  border-radius: 5px;

  font-size: 0.72rem;
  font-weight: 800;

  opacity: 0.85;
`,sp=Go.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding-inline-start: 35px;

  &::before {
    content: "";

    position: absolute;
    inset-inline-start: 11px;
    top: 17px;
    bottom: 17px;

    width: 2px;

    background: var(--about-border-strong);
  }

  @media (max-width: 600px) {
    padding-inline-start: 27px;

    &::before {
      inset-inline-start: 8px;
    }
  }
`,cp=Go.div`
  position: relative;
  min-width: 0;

  &::before {
    content: "";

    position: absolute;
    inset-inline-start: -31px;
    top: 24px;

    width: 13px;
    height: 13px;

    border: 3px solid var(--about-primary);
    border-radius: 50%;

    background: var(--about-card);
    z-index: 1;
  }

  &[data-current="true"]::before {
    border-color: #16a34a;
    background: #16a34a;
  }

  @media (max-width: 600px) {
    &::before {
      inset-inline-start: -25px;
      width: 12px;
      height: 12px;
    }
  }
`,up=Go.div`
  display: grid;
  gap: 14px;
`,dp=Go.div`
  min-width: 0;
  overflow: hidden;

  border: 1px solid var(--about-border);
  border-radius: 13px;

  background: var(--about-card);

  &[data-open="true"] {
    border-color: var(--about-primary);
  }
`,pp=Go.button`
  display: flex;
  align-items: center;
  gap: 13px;

  width: 100%;
  padding: 18px 20px;

  border: 0;
  background: transparent;

  color: var(--about-text);

  font: inherit;
  text-align: start;

  cursor: pointer;

  &:focus-visible {
    outline: 2px solid var(--about-primary);
    outline-offset: -3px;
  }

  .group-icon {
    display: grid;
    place-items: center;

    flex-shrink: 0;

    width: 42px;
    height: 42px;

    border: 1px solid var(--about-border);
    border-radius: 10px;

    background: var(--about-section);
    color: var(--about-primary);
  }

  .group-name {
    flex: 1;
    min-width: 0;
  }

  .group-name strong {
    display: block;

    font-size: 1rem;
    line-height: 1.6;
  }

  .group-name small {
    display: block;
    margin-top: 4px;

    color: var(--about-muted);
    font-size: 0.8rem;
  }

  .chevron {
    flex-shrink: 0;

    color: var(--about-primary);

    transition: transform 0.2s ease;
  }

  &[aria-expanded="true"] .chevron {
    transform: rotate(180deg);
  }
`,hp=Go.div`
  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 12px;
  padding: 18px;

  border-top:
    1px solid var(--about-border);

  background: var(--about-section);

  @media (max-width: 1000px) {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 650px) {
    grid-template-columns: minmax(0, 1fr);
    padding: 13px;
  }
`,fp=Go.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  min-width: 0;
  padding: 16px;

  border: 1px solid var(--about-border);
  border-radius: 10px;

  background: var(--about-card);

  .skill-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
  }

  .skill-name {
    color: var(--about-text);

    font-size: 0.94rem;
    font-weight: 750;
  }

  .skill-level {
    color: var(--about-primary);

    font-size: 0.77rem;
    font-weight: 700;
  }

  .source-label {
    display: flex;
    align-items: center;
    gap: 7px;

    padding-top: 10px;

    border-top:
      1px solid var(--about-border);

    color: var(--about-muted);

    font-size: 0.8rem;
    font-weight: 700;
  }
`,mp=Go.ul`
  display: grid;
  gap: 6px;

  margin: 0;
  padding-inline-start: 18px;

  color: var(--about-muted);

  font-size: 0.82rem;
  line-height: 1.8;

  li::marker {
    color: var(--about-primary);
  }
`,gp=Go(Gd)`
  margin-bottom: 20px;


  .heading {
    display: flex;
    align-items: center;
    gap: 12px;

    margin-bottom: 16px;
  }

  .heading svg {
    flex-shrink: 0;

    color: var(--about-primary);
    font-size: 1.4rem;
  }

  .heading h3 {
    margin: 0;

    color: var(--about-text);
    font-size: 1.08rem;
    line-height: 1.7;
  }

  .value {
    display: block;

    margin-bottom: 20px;

    color: var(--about-primary);

    font-size: 1.55rem;
    font-weight: 800;
    line-height: 1.6;
  }

  .meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    gap: 14px;

    margin-bottom: 22px;
  }

  ${ip} {
    margin-top: 0;
    padding-top: 20px;

    border-top: 1px solid var(--about-border);
  }

  @media (max-width: 600px) {
    .heading {
      align-items: flex-start;
    }

    .meta {
      flex-direction: column;
      align-items: flex-start;

      gap: 12px;
      margin-bottom: 24px;
    }

    ${ip} {
      padding-top: 18px;
    }
  }
`,vp=Go(Gd)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 26px;

  padding: clamp(22px, 4vw, 36px);

  border-color: var(--about-primary);

  h2 {
    margin: 0 0 12px;

    color: var(--about-text);

    font-size:
      clamp(1.4rem, 3vw, 1.9rem);
  }

  p {
    max-width: 750px;
    margin: 0;

    color: var(--about-muted);

    font-size: 0.95rem;
    line-height: 2;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: stretch;

    & > a {
      align-self: flex-start;
    }
  }

  @media (max-width: 480px) {
    & > a {
      width: 100%;
    }
  }
`,bp=e=>{let{number:t,icon:n,title:r,description:o}=e;return(0,l().jsxs)(Wd,{children:[(0,l().jsxs)("span",{className:"number",children:[(0,l().jsx)(n,{"aria-hidden":"true"}),t]}),(0,l().jsx)("h2",{children:r}),o&&(0,l().jsx)("p",{children:o})]})},yp=e=>{let{item:t,labels:n={}}=e;const r=Md(t),o=Id(r.start),a=Id(r.end),i=Id(r.single);if(!o&&!a&&!i){const e=Nd(null===t||void 0===t?void 0:t.date,null===t||void 0===t?void 0:t.period);return e?(0,l().jsxs)(op,{children:[(0,l().jsx)(Yl,{"aria-hidden":"true"}),(0,l().jsx)("span",{className:"date-text",dir:"auto",children:e})]}):null}return(0,l().jsxs)(op,{children:[(0,l().jsx)(Yl,{"aria-hidden":"true"}),(0,l().jsx)("span",{className:"date-text",dir:"ltr",children:o||a||i}),o&&(a||r.current)&&(0,l().jsxs)(l().Fragment,{children:[(0,l().jsx)("span",{"aria-hidden":"true",children:"\u2013"}),r.current?(0,l().jsxs)(ap,{children:[(0,l().jsx)(Kl,{"aria-hidden":"true"}),n.present]}):(0,l().jsx)("span",{className:"date-text",dir:"ltr",children:a})]})]})},xp=e=>{let{item:t,title:n,labels:r={},onPreview:o}=e;if(null===t||void 0===t||!t.document)return null;const a=t.documentType||"document",i=r.documentTypes||{},s=i[a]||i.document||"",c=Hd(t.document),u=(d=t.document,["PNG","JPG","JPEG","WEBP","GIF","AVIF"].includes(Hd(d)));var d;return(0,l().jsx)(ip,{children:(0,l().jsxs)(xl,{type:"button",$variant:"secondary",disabled:!u,title:u?void 0:r.unsupportedDocument,onClick:()=>{u&&o({path:t.document,title:n,documentType:a})},children:[(0,l().jsx)(Hl,{"aria-hidden":"true"}),r.viewDocument," ",s,c&&(0,l().jsx)(lp,{dir:"ltr",children:c})]})})},wp=e=>{let{item:t,title:n,subtitle:r,description:o,field:a,grade:i,gradeLabel:s,honors:c,honorsLabel:u,employmentType:d,hours:p,labels:h={},isArabic:f,onPreview:m}=e;const g=_d(n,f),v=_d(r,f),b=_d(o,f),y=_d(a,f);return(0,l().jsxs)(Xd,{children:[(0,l().jsxs)(Zd,{children:[(0,l().jsxs)(ep,{children:[(0,l().jsx)("h3",{children:g}),v&&(0,l().jsx)("span",{className:"subtitle",children:v})]}),(0,l().jsx)(yp,{item:t,labels:h})]}),d&&(0,l().jsx)(np,{children:(0,l().jsxs)(rp,{children:[(0,l().jsx)(Ql,{"aria-hidden":"true"}),d]})}),y&&(0,l().jsx)(tp,{children:y}),b&&(0,l().jsx)(tp,{children:b}),(c||i||p)&&(0,l().jsxs)(np,{children:[c&&(0,l().jsxs)(rp,{children:[(0,l().jsx)(Zl,{"aria-hidden":"true"}),(0,l().jsxs)("span",{children:[u,":"," ",_d(c,f)]})]}),i&&(0,l().jsxs)(rp,{children:[(0,l().jsx)(Zl,{"aria-hidden":"true"}),(0,l().jsxs)("span",{children:[s,":"]}),(0,l().jsx)("span",{className:"grade-value",children:i})]}),p&&(0,l().jsxs)(rp,{children:[(0,l().jsx)(Vl,{"aria-hidden":"true"}),_d(p,f)]})]}),(null===t||void 0===t?void 0:t.note)&&(0,l().jsx)(np,{children:(0,l().jsxs)(rp,{children:[(0,l().jsx)(Rl,{"aria-hidden":"true"}),_d(t.note,f)]})}),(0,l().jsx)(xp,{item:t,title:g,labels:h,onPreview:m})]})},kp=[Ul,Ol,function(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(e)},zl,Xl,Tl,zl],Sp=()=>{var e,t,n,r,o,a,i,c,u,d,p,h,f,m,g,v,b,y,x,w,k;const S=Ne(),{t:j,i18n:E}=ha("about"),C=(E.resolvedLanguage||E.language||"ar").toLowerCase().startsWith("ar"),[T,L]=(0,s().useState)(null),[P,_]=(0,s().useState)(null),N=(0,s().useCallback)(()=>{L(null)},[]),z=j("content",{returnObjects:!0}),A=z&&"object"===typeof z&&!Array.isArray(z)?z:{},O=j("ui",{returnObjects:!0,defaultValue:{}}),R=O&&"object"===typeof O&&!Array.isArray(O)?O:{},I=$d(null===(e=A.education)||void 0===e?void 0:e.items),M=$d(null===(t=A.experience)||void 0===t?void 0:t.items),D=$d(null===(n=A.certificates)||void 0===n?void 0:n.items),$=$d(null===(r=A.volunteering)||void 0===r?void 0:r.items),F=Pd(null===(o=A.skills)||void 0===o?void 0:o.groups),H=(null===(a=A.volunteering)||void 0===a?void 0:a.summary)||{},B=(e,t)=>e.map((e,n)=>(0,l().jsx)(wp,{item:e,labels:R,isArabic:C,onPreview:L,...t(e)},`${n}-${Dd(e)}`)),U=e=>{var t;const n=String((null===e||void 0===e?void 0:e.employmentType)||"").toLowerCase();return(null===(t=R.employmentTypes)||void 0===t?void 0:t[n])||_d(null===e||void 0===e?void 0:e.employmentType,C)};return(0,l().jsxs)(Bd,{dir:C?"rtl":"ltr",children:[(0,l().jsx)(ml,{children:(0,l().jsx)(xd,{value:"about"})}),(0,l().jsxs)(Ud,{children:[(0,l().jsx)(Vd,{id:"about-intro",children:(0,l().jsxs)(Jd,{children:[(0,l().jsxs)(Kd,{children:[(0,l().jsx)("h2",{children:null===(i=A.intro)||void 0===i?void 0:i.title}),(null===(c=A.intro)||void 0===c?void 0:c.paragraph1)&&(0,l().jsx)("p",{children:A.intro.paragraph1}),(null===(u=A.intro)||void 0===u?void 0:u.paragraph2)&&(0,l().jsx)("p",{children:A.intro.paragraph2})]}),(0,l().jsxs)(Yd,{children:[(0,l().jsxs)("h3",{children:[(0,l().jsx)(Ll,{"aria-hidden":"true"}),A.infoTitle]}),Pd(A.profile).map((e,t)=>(0,l().jsxs)(Qd,{children:[(0,l().jsx)("span",{children:_d(e.label,C)}),(0,l().jsx)("strong",{children:_d(e.value,C)})]},t))]})]})}),(0,l().jsxs)(Vd,{id:"about-education",className:"alternate",children:[(0,l().jsx)(bp,{number:"01",icon:Xl,title:null===(d=A.education)||void 0===d?void 0:d.title,description:null===(p=A.education)||void 0===p?void 0:p.description}),(0,l().jsx)(qd,{children:B(I,e=>{var t,n,r;return{title:e.degree,subtitle:e.school,field:e.field,honors:e.honors,honorsLabel:null===(t=A.education)||void 0===t?void 0:t.honorsLabel,grade:e.grade,gradeLabel:e.gradeLabel||("diploma"===e.documentType?null===(n=A.education)||void 0===n?void 0:n.gradeLabel:null===(r=A.education)||void 0===r?void 0:r.percentageLabel)}})})]}),(0,l().jsxs)(Vd,{id:"about-experience",children:[(0,l().jsx)(bp,{number:"02",icon:Ql,title:null===(h=A.experience)||void 0===h?void 0:h.title,description:null===(f=A.experience)||void 0===f?void 0:f.description}),(0,l().jsx)(sp,{children:M.map((e,t)=>{const n=Md(e);return(0,l().jsx)(cp,{"data-current":n.current?"true":"false",children:(0,l().jsx)(wp,{item:e,title:e.role,subtitle:e.company,description:e.description,employmentType:U(e),labels:R,isArabic:C,onPreview:L})},`${t}-${Dd(e)}`)})})]}),(0,l().jsxs)(Vd,{id:"about-certificates",className:"alternate",children:[(0,l().jsx)(bp,{number:"03",icon:Zl,title:null===(m=A.certificates)||void 0===m?void 0:m.title,description:null===(g=A.certificates)||void 0===g?void 0:g.description}),(0,l().jsx)(qd,{children:B(D,e=>({title:e.name,subtitle:e.provider,description:e.description,hours:e.hours}))})]}),(0,l().jsxs)(Vd,{id:"about-skills",children:[(0,l().jsx)(bp,{number:"04",icon:Ul,title:null===(v=A.skills)||void 0===v?void 0:v.title,description:null===(b=A.skills)||void 0===b?void 0:b.description}),(0,l().jsx)(up,{children:F.map((e,t)=>{const n=P===t,r=kp[t%kp.length],o=Pd(e.items);return(0,l().jsxs)(dp,{"data-open":n?"true":"false",children:[(0,l().jsxs)(pp,{type:"button","aria-expanded":n,"aria-controls":`about-skill-group-${t}`,onClick:()=>_(n?null:t),children:[(0,l().jsx)("span",{className:"group-icon",children:(0,l().jsx)(r,{"aria-hidden":"true"})}),(0,l().jsxs)("span",{className:"group-name",children:[(0,l().jsx)("strong",{children:_d(e.title,C)}),(0,l().jsxs)("small",{children:[o.length," ",1===o.length?R.skillSingular:R.skillPlural]})]}),(0,l().jsx)(Jl,{className:"chevron","aria-hidden":"true"})]}),n&&(0,l().jsx)(hp,{id:`about-skill-group-${t}`,children:o.map((e,t)=>{const n=((e,t)=>"string"===typeof e?e:_d(Nd(null===e||void 0===e?void 0:e.name,null===e||void 0===e?void 0:e.title,null===e||void 0===e?void 0:e.skill,null===e||void 0===e?void 0:e.label),t))(e,C),r=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=Nd(null===e||void 0===e?void 0:e.level,null===e||void 0===e?void 0:e.proficiency);return r?n[String(r).toLowerCase()]||_d(r,t):""}(e,C,R.skillLevels),o=((e,t)=>{if(!e||"object"!==typeof e)return[];const n=Nd(e.sources,e.source,e.learnedFrom),r=Array.isArray(n)?n:n?[n]:[];return[...new Set(r.map(e=>_d(e,t).trim()).filter(Boolean))]})(e,C);return(0,l().jsxs)(fp,{children:[(0,l().jsxs)("div",{className:"skill-header",children:[(0,l().jsx)("strong",{className:"skill-name",children:n}),r&&(0,l().jsx)("span",{className:"skill-level",children:r})]}),o.length>0&&(0,l().jsxs)(l().Fragment,{children:[(0,l().jsxs)("span",{className:"source-label",children:[(0,l().jsx)(Xl,{"aria-hidden":"true"}),R.skillSourcesLabel]}),(0,l().jsx)(mp,{children:o.map((e,t)=>(0,l().jsx)("li",{children:e},`${e}-${t}`))})]})]},`${n}-${t}`)})})]},t)})})]}),(0,l().jsxs)(Vd,{id:"about-volunteering",className:"alternate",children:[(0,l().jsx)(bp,{number:"05",icon:Dl,title:null===(y=A.volunteering)||void 0===y?void 0:y.title,description:null===(x=A.volunteering)||void 0===x?void 0:x.description}),Object.keys(H).length>0&&(0,l().jsxs)(gp,{children:[(0,l().jsx)("div",{className:"heading",children:(0,l().jsx)("h3",{children:H.label})}),H.value&&(0,l().jsx)("strong",{className:"value",children:H.value}),(0,l().jsxs)("div",{className:"meta",children:[H.opportunities&&(0,l().jsxs)(rp,{children:[(0,l().jsx)(Tl,{"aria-hidden":"true"}),H.opportunities," ",R.volunteerOpportunitiesLabel]}),(0,l().jsx)(yp,{item:H,labels:R})]}),H.description&&(0,l().jsx)(tp,{children:H.description}),(0,l().jsx)(xp,{item:H,title:H.label,labels:R,onPreview:L})]}),(0,l().jsx)(qd,{children:B($,e=>({title:e.name,subtitle:e.provider,description:e.description}))})]}),(0,l().jsx)(Vd,{id:"about-goal",children:(0,l().jsxs)(vp,{children:[(0,l().jsxs)("div",{children:[(0,l().jsx)("h2",{children:null===(w=A.goal)||void 0===w?void 0:w.title}),(null===(k=A.goal)||void 0===k?void 0:k.description)&&(0,l().jsx)("p",{children:A.goal.description})]}),(0,l().jsxs)(xl,{as:$t,to:Oa(S.pathname,"/contact"),$variant:"primary",children:[R.contactButton,(0,l().jsx)(es,{"aria-hidden":"true"})]})]})})]}),(0,l().jsx)(Ld,{isOpen:Boolean(T),ImgSource:T?Fd(T.path):"",ImgAlt:(null===T||void 0===T?void 0:T.title)||"",onClose:N})]})},jp=Go.main`
  width: 100%;
  min-width: 0;
  overflow-x: clip;

  background: var(--color-background, #f4f7fb);
  color: var(--color-text-primary, #172435);
`,Ep=Go.section`
  width: 100%;

  padding-block:
    clamp(35px, 5vw, 65px)
    clamp(65px, 8vw, 100px);

  background: var(--color-background, #f4f7fb);
`,Cp=Go(ga)`
  display: flex;
  flex-direction: column;
  gap: clamp(24px, 4vw, 35px);

  min-width: 0;
`,Tp=Go.div`
  display: flex;
  align-items: center;
  gap: 14px;

  width: 100%;
  padding-bottom: 20px;

  border-bottom: 1px solid
    var(--color-border, #d5e0eb);

  text-align: start;

  @media (max-width: 600px) {
    gap: 11px;
    padding-bottom: 15px;
  }
`,Lp=Go.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;

  width: 46px;
  height: 46px;

  border: 1px solid
    var(--color-border, #d5e0eb);
  border-radius: 10px;

  background: var(
    --color-card-background,
    #ffffff
  );

  color: var(--color-primary, #0065a8);
  font-size: 1.3rem;

  @media (max-width: 600px) {
    width: 42px;
    height: 42px;
    font-size: 1.15rem;
  }
`,Pp=Go.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,_p=Go.h1`
  margin: 0;

  color: var(--color-text-primary, #172435);

  font-size: clamp(1.25rem, 2.5vw, 1.65rem);
  font-weight: 800;
  line-height: 1.5;
`,Np=Go.p`
  margin: 0;

  color: var(--color-text-secondary, #475569);

  font-size: 0.88rem;
  line-height: 1.85;
`,zp=Go.div`
  width: 100%;
  min-width: 0;

  & > * {
    max-width: 100%;
  }
`,Ap=()=>{const{t:e,i18n:t}=ha(["projects","common"]),n=(t.resolvedLanguage||t.language||"ar").startsWith("ar"),r=e("projects:section.title",{defaultValue:n?"\u0645\u0634\u0627\u0631\u064a\u0639\u064a":"My Projects"}),o=e("projects:section.description",{defaultValue:n?"\u0627\u0633\u062a\u0639\u0631\u0636 \u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0646 \u0645\u0634\u0627\u0631\u064a\u0639\u064a \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628\u060c \u0648\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0623\u0647\u062f\u0627\u0641 \u0643\u0644 \u0645\u0634\u0631\u0648\u0639 \u0648\u0645\u0645\u064a\u0632\u0627\u062a\u0647 \u0648\u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0629 \u0641\u064a \u062a\u0637\u0648\u064a\u0631\u0647 \u0648\u062f\u0648\u0631\u064a \u0641\u064a \u062a\u0646\u0641\u064a\u0630\u0647.":"Explore my web development projects, including their objectives, key features, technologies, and my contributions to their development."});return(0,l().jsxs)(jp,{dir:n?"rtl":"ltr",children:[(0,l().jsx)(ml,{children:(0,l().jsx)(xd,{value:"projects"})}),(0,l().jsx)(Ep,{"aria-labelledby":"projects-title",children:(0,l().jsxs)(Cp,{children:[(0,l().jsxs)(Tp,{children:[(0,l().jsx)(Lp,{"aria-hidden":"true",children:(0,l().jsx)($l,{})}),(0,l().jsxs)(Pp,{children:[(0,l().jsx)(_p,{id:"projects-title",children:r}),(0,l().jsx)(Np,{children:o})]})]}),(0,l().jsx)(zp,{children:(0,l().jsx)(Gu,{})})]})})]})},Op=Go.main`
  width: 100%;
  min-width: 0;
  overflow-x: clip;
  background: var(--color-background);
  color: var(--color-text-primary);
`,Rp=Go(ga)`
  display: flex;
  flex-direction: column;
  gap: clamp(24px, 3.5vw, 38px);

  padding-block:
    clamp(36px, 5vw, 60px)
    clamp(70px, 8vw, 110px);
`,Ip=Go.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 0;
`,Mp=Go.h1`
  margin: 0;
  color: var(--color-heading, var(--color-text-primary));
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.45;
  overflow-wrap: anywhere;
`,Dp=Go.p`
  max-width: 950px;
  margin: 0;
  color: var(--color-text-secondary);
  font-size: clamp(0.95rem, 1.4vw, 1.05rem);
  line-height: 2;
  overflow-wrap: anywhere;
  white-space: pre-line;
`,$p=Go.section`
  display: flex;
  flex-direction: column;
  gap: 22px;

  width: 100%;
  min-width: 0;

  padding: clamp(20px, 3vw, 32px);

  background: var(
    --color-card-background,
    var(--color-background-secondary)
  );

  border: 1px solid var(--color-border);
  border-radius: 18px;
  box-shadow: var(--shadow-sm, none);

  @media (max-width: 600px) {
    gap: 18px;
    padding: 20px 16px;
    border-radius: 14px;
  }
`,Fp=Go.section`
  width: 100%;
  min-width: 0;
`,Hp=Go.div`
  display: flex;
  align-items: center;
  gap: 14px;

  min-width: 0;
  padding-block-end: 18px;
  border-bottom: 1px solid var(--color-border);

  @media (max-width: 600px) {
    gap: 11px;
    padding-block-end: 15px;
  }
`,Bp=Go.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 44px;
  height: 44px;

  color: var(--color-primary);
  background: var(--color-background-secondary);

  border: 1px solid var(--color-border);
  border-radius: 12px;

  svg {
    width: 21px;
    height: 21px;
  }

  @media (max-width: 600px) {
    width: 38px;
    height: 38px;

    svg {
      width: 19px;
      height: 19px;
    }
  }
`,Up=Go.h2`
  margin: 0;
  min-width: 0;

  color: var(--color-heading, var(--color-text-primary));
  font-size: clamp(1.2rem, 2.4vw, 1.55rem);
  font-weight: 800;
  line-height: 1.55;
  overflow-wrap: anywhere;
`,Vp=Go.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;
`,Wp=Go.p`
  margin: 0;

  color: var(--color-text-primary);
  font-size: clamp(0.95rem, 1.4vw, 1.025rem);
  font-weight: 400;
  line-height: 2.05;

  overflow-wrap: anywhere;
  white-space: pre-line;
`,Gp=Go.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`,qp=Go.span`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 9px 13px;

  color: var(--color-text-secondary);

  background: var(
    --color-card-background,
    var(--color-background-secondary)
  );

  border: 1px solid var(--color-border);
  border-radius: 10px;
  font-size: 0.9rem;

  svg {
    flex-shrink: 0;
    color: var(--color-primary);
  }
`,Jp=Go.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`,Kp=Go.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;

  background: var(
    --color-card-background,
    var(--color-background-secondary)
  );

  border: 1px solid var(--color-border);
  border-radius: 12px;
`,Yp=Go.span`
  color: var(--color-text-secondary);
  font-size: 0.88rem;
  font-weight: 600;
`,Qp=Go.span`
  color: var(--color-text-primary);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.8;
  overflow-wrap: anywhere;
`,Xp=Go.div`
  display: grid;
  grid-template-columns:
    minmax(0, 1fr) minmax(0, 3fr);
  grid-template-areas: "thumbs main";

  gap: clamp(12px, 2vw, 20px);
  width: 100%;
  min-width: 0;
  direction: ltr;

  @media (max-width: 700px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      "main"
      "thumbs";
  }
`,Zp=Go.div`
  grid-area: main;
  min-width: 0;
`,eh=Go.div`
  grid-area: thumbs;
  display: flex;
  flex-direction: column;
  gap: 12px;

  min-width: 0;
  max-height: 520px;
  overflow-y: auto;
  scrollbar-width: thin;

  @media (max-width: 700px) {
    flex-direction: row;
    max-height: none;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 5px;
  }
`,th=Go.button`
  position: relative;
  display: block;
  width: 100%;
  min-width: 0;
  padding: 0;
  overflow: hidden;

  background: var(
    --color-card-background,
    var(--color-background-secondary)
  );

  border: 1px solid var(--color-border);
  border-radius: var(--radius-card, 14px);
  box-shadow: var(--shadow-sm, none);
  box-sizing: border-box;

  cursor: ${e=>{let{$main:t}=e;return t?"zoom-in":"pointer"}};

  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: var(--color-primary);
      box-shadow: var(--shadow-md);
      transform: translateY(-2px);
    }
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`,nh=Go(th)`
  aspect-ratio: 16 / 10;
`,rh=Go(th)`
  flex: 0 0 auto;
  aspect-ratio: 16 / 10;

  @media (max-width: 700px) {
    width: 125px;
  }

  @media (max-width: 420px) {
    width: 105px;
  }
`,oh=Go.img`
  display: block;
  width: 100%;
  height: 100%;

  padding: ${e=>{let{$small:t}=e;return t?"6px":"12px"}};

  object-fit: contain;
  object-position: center;

  background: var(--color-background-secondary);
  box-sizing: border-box;
`,ah=Go.span`
  position: absolute;
  inset-block-end: 12px;
  inset-inline-end: 12px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 34px;
  height: 34px;

  background: var(--color-background);
  color: var(--color-primary);

  border: 1px solid var(--color-border);
  border-radius: 9px;

  svg {
    width: 17px;
    height: 17px;
  }
`,ih=Go.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
`,lh=Go.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  min-width: 0;
  padding-block: 23px;

  border-bottom: 1px solid var(--color-border);

  &:first-child {
    padding-block-start: 0;
  }

  &:last-child {
    padding-block-end: 0;
    border-bottom: none;
  }
`,sh=Go.h3`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  margin: 0;
  padding-inline-start: 13px;

  color: var(--color-heading, var(--color-text-primary));
  border-inline-start: 3px solid var(--color-primary);

  font-size: clamp(1rem, 1.8vw, 1.12rem);
  font-weight: 800;
  line-height: 1.7;
  overflow-wrap: anywhere;
`,ch=Go.ul`
  display: flex;
  flex-direction: column;
  gap: 11px;

  margin: 0;
  padding: 0;
  list-style: none;
`,uh=Go.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;

  min-width: 0;

  color: var(--color-text-primary);
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.95;
  overflow-wrap: anywhere;

  svg {
    flex-shrink: 0;
    width: 17px;
    height: 17px;
    margin-block-start: 8px;
    color: var(--color-primary);
  }

  > span {
    flex: 1;
    min-width: 0;
  }
`,dh=Go.span`
  display: inline-flex;
  align-items: center;

  padding: 4px 9px;

  color: var(--color-primary);
  background: var(--color-background-secondary);

  border: 1px solid var(--color-border);
  border-radius: 7px;

  font-size: 0.76rem;
  font-weight: 700;
  line-height: 1.5;
`,ph=Go.ol`
  display: flex;
  flex-direction: column;
  gap: 0;

  margin: 0;
  padding: 0;
  list-style: none;

  counter-reset: responsibility;
`,hh=Go.li`
  display: grid;
  grid-template-columns: 36px minmax(0, 1fr);
  align-items: start;
  gap: 15px;

  min-width: 0;
  padding-block: 16px;

  border-bottom: 1px solid var(--color-border);
  counter-increment: responsibility;

  &:first-child {
    padding-block-start: 0;
  }

  &:last-child {
    padding-block-end: 0;
    border-bottom: none;
  }

  &::before {
    content: counter(
      responsibility,
      decimal-leading-zero
    );

    display: flex;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;

    color: var(--color-primary);
    background: var(--color-background-secondary);

    border: 1px solid var(--color-border);
    border-radius: 10px;

    font-size: 0.82rem;
    font-weight: 800;
    font-variant-numeric: tabular-nums;
    direction: ltr;
  }

  > span {
    min-width: 0;
    padding-block-start: 3px;

    color: var(--color-text-primary);
    font-size: 0.95rem;
    line-height: 1.95;
    overflow-wrap: anywhere;
  }

  @media (max-width: 600px) {
    grid-template-columns: 32px minmax(0, 1fr);
    gap: 11px;

    &::before {
      width: 32px;
      height: 32px;
    }
  }
`,fh=Go.p`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  margin: 0;
  padding: 14px 16px;

  color: var(--color-text-secondary);
  background: var(--color-background-secondary);

  border: 1px solid var(--color-border);
  border-radius: 10px;

  font-size: 0.9rem;
  line-height: 1.9;
  overflow-wrap: anywhere;

  svg {
    flex-shrink: 0;
    width: 17px;
    height: 17px;
    margin-block-start: 5px;
    color: var(--color-primary);
  }
`,mh=Go.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 11px;

  margin: 0;
  padding: 0;
  list-style: none;
`,gh=Go.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 40px;
  padding: 9px 15px;

  color: var(--color-text-primary);
  background: var(--color-background-secondary);

  border: 1px solid var(--color-border);
  border-radius: 10px;

  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.5;

  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: var(--color-primary);
      color: var(--color-primary);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,vh=Go(gl)`
  margin-block-start: 4px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;

    > * {
      width: 100%;
    }
  }
`,bh=Go.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  svg {
    width: 17px;
    height: 17px;
    flex-shrink: 0;
  }
`,yh=Go($t)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  align-self: flex-start;
  min-height: 44px;

  color: var(--color-primary);
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
    border-radius: 4px;
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`,xh=e=>{let{title:t,icon:n,children:r}=e;return(0,l().jsxs)($p,{"aria-label":t,children:[(0,l().jsxs)(Hp,{children:[(0,l().jsx)(Bp,{"aria-hidden":"true",children:(0,l().jsx)(n,{})}),(0,l().jsx)(Up,{children:t})]}),(0,l().jsx)(Vp,{children:r})]})},wh=e=>{let{images:t,projectTitle:n,enlargeLabel:r,onEnlarge:o}=e;const[a,i]=(0,s().useState)(()=>t.map((e,t)=>t)),c=JSON.stringify(t);if((0,s().useEffect)(()=>{const e=JSON.parse(c);i(e.map((e,t)=>t))},[c]),0===t.length)return null;const u=a[0],d=t[u];return(0,l().jsxs)(Xp,{children:[a.length>1&&(0,l().jsx)(eh,{children:a.slice(1).map((e,r)=>{const o=r+1;return(0,l().jsx)(rh,{type:"button",onClick:()=>{return e=o,void i(t=>{const n=[...t];return[n[0],n[e]]=[n[e],n[0]],n});var e},"aria-label":`${n} - ${e+1}`,children:(0,l().jsx)(oh,{$small:!0,src:t[e],alt:`${n} - ${e+1}`,loading:"lazy",decoding:"async"})},`thumbnail-slot-${o}`)})}),(0,l().jsx)(Zp,{children:(0,l().jsxs)(nh,{$main:!0,type:"button",onClick:()=>o({src:d,alt:`${n} - ${u+1}`}),"aria-label":`${r}: ${n}`,children:[(0,l().jsx)(oh,{src:d,alt:`${n} - ${u+1}`,decoding:"async"}),(0,l().jsx)(ah,{"aria-hidden":"true",children:(0,l().jsx)(El,{})})]})})]})},kh=e=>{let{items:t,projectId:n,prefix:r}=e;return Array.isArray(t)&&0!==t.length?(0,l().jsx)(ch,{children:t.map((e,t)=>(0,l().jsxs)(uh,{children:[(0,l().jsx)(Kl,{"aria-hidden":"true"}),(0,l().jsx)("span",{children:"string"===typeof e?e:(null===e||void 0===e?void 0:e.text)||(null===e||void 0===e?void 0:e.description)||""})]},`${n}-${r}-${t}`))}):null},Sh=e=>{let{items:t,projectId:n}=e;return Array.isArray(t)&&0!==t.length?(0,l().jsx)(ph,{children:t.map((e,t)=>(0,l().jsx)(hh,{children:(0,l().jsx)("span",{children:"string"===typeof e?e:(null===e||void 0===e?void 0:e.text)||(null===e||void 0===e?void 0:e.description)||""})},`${n}-responsibility-${t}`))}):null},jh=()=>{const e=Ne(),t=Oa(e.pathname,"/projects"),{projectId:n}=Re(),{t:r,i18n:o}=ha("projects"),[a,i]=(0,s().useState)(null),c=(o.resolvedLanguage||o.language||"ar").toLowerCase().startsWith("ar"),u=c?ns:rs,d=r("items",{returnObjects:!0,defaultValue:[]}),p=Array.isArray(d)?d.find(e=>e.id===n):void 0,h={notFound:r("details.notFound",{defaultValue:c?"\u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u063a\u064a\u0631 \u0645\u0648\u062c\u0648\u062f":"Project Not Found"}),notFoundDescription:r("details.notFoundDescription",{defaultValue:c?"\u062a\u0639\u0630\u0631 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0627\u0644\u0645\u0637\u0644\u0648\u0628.":"The requested project could not be found."}),back:r("details.backToProjects",{defaultValue:c?"\u0627\u0644\u0639\u0648\u062f\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639":"Back to Projects"}),projectName:r("details.projectName",{defaultValue:c?"\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639":"Project Name"}),projectType:r("details.projectType",{defaultValue:c?"\u0646\u0648\u0639 \u0627\u0644\u0645\u0634\u0631\u0648\u0639":"Project Type"}),developedBy:r("details.developedBy",{defaultValue:c?"\u0645\u0637\u0648\u0631\u0648 \u0627\u0644\u0645\u0634\u0631\u0648\u0639":"Developed By"}),developmentArea:r("details.developmentArea",{defaultValue:c?"\u0645\u062c\u0627\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639":"Development Area"}),date:r("details.date",{defaultValue:c?"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0625\u0646\u062c\u0627\u0632":"Completion Date"}),overview:r("details.overview",{defaultValue:c?"\u0648\u0635\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639":"Project Overview"}),features:r("details.features",{defaultValue:c?"\u0645\u0645\u064a\u0632\u0627\u062a \u0627\u0644\u0645\u0634\u0631\u0648\u0639":"Key Features"}),responsibilities:r("details.responsibilities",{defaultValue:c?"\u0645\u0633\u0624\u0648\u0644\u064a\u0627\u062a\u064a \u0641\u064a \u0627\u0644\u0645\u0634\u0631\u0648\u0639":"My Responsibilities"}),technologies:r("details.technologies",{defaultValue:c?"\u062a\u0642\u0646\u064a\u0627\u062a \u0648\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u062a\u0637\u0648\u064a\u0631":"Technologies and Tools"}),liveDemo:r("details.liveDemo",{defaultValue:c?"\u0645\u0639\u0627\u064a\u0646\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639":"Live Preview"}),sourceCode:r("details.sourceCode",{defaultValue:c?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u0645\u0635\u062f\u0631\u064a":"Source Code"}),enlarge:r("details.enlargeImage",{defaultValue:c?"\u062a\u0643\u0628\u064a\u0631 \u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639":"Enlarge Project Image"}),planned:r("details.plannedFeature",{defaultValue:c?"\u0636\u0645\u0646 \u062e\u0637\u0629 \u0627\u0644\u062a\u0637\u0648\u064a\u0631":"Planned Development"})};if(!p)return(0,l().jsxs)(Op,{dir:c?"rtl":"ltr",children:[(0,l().jsx)(ml,{children:(0,l().jsx)(xd,{value:"projects"})}),(0,l().jsxs)(Rp,{children:[(0,l().jsxs)(Ip,{children:[(0,l().jsx)(Mp,{children:h.notFound}),(0,l().jsx)(Dp,{children:h.notFoundDescription})]}),(0,l().jsxs)(yh,{to:t,children:[(0,l().jsx)(u,{"aria-hidden":"true"}),h.back]})]})]});const f=(m=p.project_img,(Array.isArray(m)?m:"string"===typeof m?[m]:[]).map(e=>"string"!==typeof e?null:Object.prototype.hasOwnProperty.call(Uu,e)?Uu[e]:/^https?:\/\//i.test(e)?e:null).filter(Boolean));var m;const g=Array.isArray(p.developedBy)?p.developedBy.join(c?"\u060c ":", "):p.developedBy,v=[{label:h.projectName,value:p.title},{label:h.projectType,value:p.projectType},{label:h.developedBy,value:g},{label:h.developmentArea,value:p.developmentArea}].filter(e=>e.value),b=Array.isArray(p.features)?p.features:[],y=Array.isArray(p.responsibilities)?p.responsibilities:[],x=Array.isArray(p.tech_stack)?p.tech_stack:[],w="string"===typeof p.demo?p.demo.trim():"",k="string"===typeof p.github?p.github.trim():"";return(0,l().jsxs)(Op,{dir:c?"rtl":"ltr",children:[(0,l().jsx)(ml,{children:(0,l().jsx)(xd,{value:"projects",projectTitle:p.title})}),(0,l().jsxs)(Rp,{children:[f.length>0&&(0,l().jsx)(Fp,{children:(0,l().jsx)(wh,{images:f,projectTitle:p.title,enlargeLabel:h.enlarge,onEnlarge:i},p.id)}),p.date&&(0,l().jsx)(Gp,{children:(0,l().jsxs)(qp,{children:[(0,l().jsx)(Yl,{"aria-hidden":"true"}),(0,l().jsxs)("span",{children:[h.date,":"]}),(0,l().jsx)("span",{dir:"ltr",children:p.date})]})}),v.length>0&&(0,l().jsx)(Jp,{children:v.map(e=>(0,l().jsxs)(Kp,{children:[(0,l().jsx)(Yp,{children:e.label}),(0,l().jsx)(Qp,{children:e.value})]},e.label))}),p.overview&&(0,l().jsx)(xh,{title:h.overview,icon:Xl,children:(0,l().jsx)(Wp,{children:p.overview})}),b.length>0&&(0,l().jsx)(xh,{title:h.features,icon:Ol,children:(0,l().jsx)(ih,{children:b.map((e,t)=>"string"===typeof e?(0,l().jsx)(lh,{children:(0,l().jsx)(kh,{projectId:p.id,prefix:`single-${t}`,items:[e]})},`${p.id}-feature-${t}`):e&&"object"===typeof e?(0,l().jsxs)(lh,{children:[e.title&&(0,l().jsxs)(sh,{children:[e.title,"planned"===e.status&&(0,l().jsx)(dh,{children:h.planned})]}),(0,l().jsx)(kh,{items:e.items,projectId:p.id,prefix:`group-${t}`}),e.note&&(0,l().jsxs)(fh,{children:[(0,l().jsx)(Rl,{"aria-hidden":"true"}),(0,l().jsx)("span",{children:e.note})]}),"planned"===e.status&&!e.note&&(0,l().jsxs)(fh,{children:[(0,l().jsx)(Rl,{"aria-hidden":"true"}),(0,l().jsx)("span",{children:h.planned})]})]},`${p.id}-group-${t}`):null)})}),(p.responsibilitiesIntro||y.length>0)&&(0,l().jsxs)(xh,{title:h.responsibilities,icon:Wl,children:[p.responsibilitiesIntro&&(0,l().jsx)(Wp,{children:p.responsibilitiesIntro}),(0,l().jsx)(Sh,{items:y,projectId:p.id})]}),x.length>0&&(0,l().jsx)(xh,{title:h.technologies,icon:Ul,children:(0,l().jsx)(mh,{children:x.map((e,t)=>(0,l().jsx)(gh,{children:e},`${e}-${t}`))})}),(w||k)&&(0,l().jsxs)(vh,{children:[w&&(0,l().jsx)(xl,{as:"a",href:w,target:"_blank",rel:"noopener noreferrer",$variant:"primary",children:(0,l().jsxs)(bh,{children:[h.liveDemo,(0,l().jsx)(Bl,{"aria-hidden":"true"})]})}),k&&(0,l().jsx)(xl,{as:"a",href:k,target:"_blank",rel:"noopener noreferrer",$variant:"secondary",children:(0,l().jsxs)(bh,{children:[h.sourceCode,(0,l().jsx)(Fl,{"aria-hidden":"true"})]})})]}),(0,l().jsxs)(yh,{to:t,children:[(0,l().jsx)(u,{"aria-hidden":"true"}),h.back]})]}),(0,l().jsx)(Ld,{ImgSource:null===a||void 0===a?void 0:a.src,ImgAlt:(null===a||void 0===a?void 0:a.alt)||"",isOpen:Boolean(a),onClose:()=>i(null)})]})};var Eh=(0,s().forwardRef)((e,t)=>{let{as:n="div",...r}=e;return(0,l().jsx)(n,{...r,ref:t})});const Ch="onloadTurnstileCallback",Th=e=>!!document.getElementById(e),Lh={normal:{width:300,height:65},compact:{width:150,height:140},invisible:{width:0,height:0,overflow:"hidden"},flexible:{minWidth:300,width:"100%",height:65}};function Ph(e){if("invisible"!==e)return e}let _h,Nh="unloaded";const zh=new Promise((e,t)=>{_h={resolve:e,reject:t},"ready"===Nh&&e(void 0)}),Ah=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ch;return"unloaded"===Nh&&(Nh="loading",window[e]=()=>{_h.resolve(),Nh="ready",delete window[e]}),zh},Oh=(0,s().forwardRef)((e,t)=>{let{scriptOptions:n,options:r={},siteKey:o,onWidgetLoad:a,onSuccess:i,onExpire:c,onError:u,onBeforeInteractive:d,onAfterInteractive:p,onUnsupported:h,onTimeout:f,onLoadScript:m,id:g,style:v,as:b="div",injectScript:y=!0,rerenderOnCallbackChange:x=!1,...w}=e,k=r.size,S=(0,s().useMemo)(()=>{if(void 0===k)return{};let e=Lh[k];return"interaction-only"===r.appearance?{...e,height:"auto"}:e},[k,r.appearance]),j="execute"===r.execution?Lh.invisible:S,[E,C]=(0,s().useState)(j),T=(0,s().useRef)(null),[L,P]=(0,s().useState)(!1),_=(0,s().useRef)(void 0),N=(0,s().useRef)(!1),z=g||"cf-turnstile",A=(0,s().useRef)({onSuccess:i,onError:u,onExpire:c,onBeforeInteractive:d,onAfterInteractive:p,onUnsupported:h,onTimeout:f});(0,s().useEffect)(()=>{x||(A.current={onSuccess:i,onError:u,onExpire:c,onBeforeInteractive:d,onAfterInteractive:p,onUnsupported:h,onTimeout:f})});let O=n?.id||"cf-turnstile-script",R=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cf-turnstile-script",[t,n]=(0,s().useState)(!1);return(0,s().useEffect)(()=>{let t=()=>{Th(e)&&n(!0)},r=new MutationObserver(t);return r.observe(document,{childList:!0,subtree:!0}),t(),()=>{r.disconnect()}},[e]),t}(O),I=n?.onLoadCallbackName||"onloadTurnstileCallback",M=(0,s().useMemo)(()=>({sitekey:o,action:r.action,cData:r.cData,theme:r.theme||"auto",language:r.language||"auto",tabindex:r.tabIndex,"response-field":r.responseField,"response-field-name":r.responseFieldName,size:Ph(k),retry:r.retry||"auto","retry-interval":r.retryInterval||8e3,"refresh-expired":r.refreshExpired||"auto","refresh-timeout":r.refreshTimeout||"auto",execution:r.execution||"render",appearance:r.appearance||"always","feedback-enabled":r.feedbackEnabled??!0,"offlabel-show-privacy":r.offlabelShowPrivacy??!0,"offlabel-show-help":r.offlabelShowHelp??!0,callback:e=>{N.current=!0,x?i?.(e):A.current.onSuccess?.(e)},"error-callback":x?u:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return A.current.onError?.(...t)},"expired-callback":x?c:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return A.current.onExpire?.(...t)},"before-interactive-callback":x?d:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return A.current.onBeforeInteractive?.(...t)},"after-interactive-callback":x?p:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return A.current.onAfterInteractive?.(...t)},"unsupported-callback":x?h:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return A.current.onUnsupported?.(...t)},"timeout-callback":x?f:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return A.current.onTimeout?.(...t)}}),[r.action,r.appearance,r.cData,r.execution,r.language,r.refreshExpired,r.responseField,r.responseFieldName,r.retry,r.retryInterval,r.tabIndex,r.theme,r.feedbackEnabled,r.offlabelShowPrivacy,r.offlabelShowHelp,r.refreshTimeout,o,k,x,x?i:null,x?u:null,x?c:null,x?d:null,x?p:null,x?h:null,x?f:null]),D=(0,s().useCallback)(()=>typeof window<"u"&&!!window.turnstile,[]),$=(0,s().useCallback)((e,t)=>{try{return window.turnstile.render(e,t)}catch(e){let t=x?u:A.current.onError;return void(t?t(e instanceof Error?e.message:String(e)):console.error(e))}},[x,x?u:null]);return(0,s().useEffect)(function(){y&&!L&&(Ah(I),(e=>{let{render:t="explicit",onLoadCallbackName:n=Ch,scriptOptions:{nonce:r="",defer:o=!0,async:a=!0,id:i="",appendTo:l,onError:s,crossOrigin:c=""}={}}=e,u=i||"cf-turnstile-script";if(Th(u))return;let d=document.createElement("script");d.id=u,d.src=`https://challenges.cloudflare.com/turnstile/v0/api.js?onload=${n}&render=${t}`,!document.querySelector(`script[src="${d.src}"]`)&&(d.defer=!!o,d.async=!!a,r&&d.setAttribute("nonce",r),c&&(d.crossOrigin=c),s&&(d.onerror=()=>{delete window[n],s()}),("body"===l?document.body:document.getElementsByTagName("head")[0]).appendChild(d))})({onLoadCallbackName:I,scriptOptions:{...n,id:O}}))},[y,L,n,O,I]),(0,s().useEffect)(function(){"ready"!==Nh&&Ah(I).then(()=>P(!0)).catch(console.error)},[I]),(0,s().useEffect)(function(){if(!T.current||!L)return;let e=!1;return(async()=>{if(e||!T.current)return;let t=$(T.current,M);_.current=t,C(j),_.current&&a?.(_.current)})(),()=>{e=!0,_.current&&(window.turnstile.remove(_.current),N.current=!1)}},[z,L,M,j,$]),(0,s().useImperativeHandle)(t,()=>{let{turnstile:e}=window;return{getResponse(){if(e?.getResponse&&_.current&&D())return e.getResponse(_.current);console.warn("Turnstile has not been loaded")},async getResponsePromise(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e4,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return new Promise((n,r)=>{let o,a=async()=>{if(N.current&&window.turnstile&&_.current)try{let e=window.turnstile.getResponse(_.current);return o&&clearTimeout(o),e?n(e):r(Error("No response received"))}catch(e){return o&&clearTimeout(o),console.warn("Failed to get response",e),r(Error("Failed to get response"))}o||=setTimeout(()=>{o&&clearTimeout(o),r(Error("Timeout"))},e),await new Promise(e=>setTimeout(e,t)),await a()};a()})},reset(){if(e?.reset&&_.current&&D()){C(j);try{N.current=!1,e.reset(_.current)}catch(e){console.warn(`Failed to reset Turnstile widget ${_.current}`,e)}}else console.warn("Turnstile has not been loaded")},remove(){e?.remove&&_.current&&D()?(C(Lh.invisible),N.current=!1,e.remove(_.current),_.current=null):console.warn("Turnstile has not been loaded")},render(){if(!e?.render||!T.current||!D()||_.current)return void console.warn("Turnstile has not been loaded or container not found");let t=$(T.current,M);return _.current=t,_.current&&a?.(_.current),C(j),t},execute(){"execute"===r.execution?e?.execute&&T.current&&_.current&&D()?(e.execute(T.current),C(S)):console.warn("Turnstile has not been loaded or container not found"):console.warn('Execution mode is not set to "execute"')},isExpired:()=>e?.isExpired&&_.current&&D()?e.isExpired(_.current):(console.warn("Turnstile has not been loaded"),!1)}},[_,r.execution,M,T,D,$,L,a,j,S]),(0,s().useEffect)(()=>{if(L||!R)return;if(window.turnstile)return void P(!0);let e=setInterval(()=>{window.turnstile&&(P(!0),clearInterval(e))},50);return()=>{clearInterval(e)}},[L,R]),(0,s().useEffect)(()=>{C(j)},[j]),(0,s().useEffect)(()=>{R&&"function"==typeof m&&m()},[R]),(0,l().jsx)(Eh,{ref:T,as:b,id:z,style:{...E,...v},...w})});Oh.displayName="Turnstile";const Rh="abdulrahman-contact-draft-v2",Ih=5242880,Mh=15728640,Dh={"image/jpeg":[".jpg",".jpeg"],"image/png":[".png"],"image/webp":[".webp"],"application/pdf":[".pdf"],"application/msword":[".doc"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[".docx"],"text/plain":[".txt"],"text/csv":[".csv"],"application/vnd.ms-excel":[".xls"],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"],"application/vnd.ms-powerpoint":[".ppt"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[".pptx"],"application/zip":[".zip"],"application/x-zip-compressed":[".zip"]},$h=[...new Set(Object.values(Dh).flat())],Fh={mail:Al,phone:function(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(e)},whatsapp:Li,linkedin:function(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(e)},github:Fl,instagram:function(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"},child:[]},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"},child:[]},{tag:"line",attr:{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"},child:[]}]})(e)},snapchat:function(e){return Ci({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M510.846 392.673c-5.211 12.157-27.239 21.089-67.36 27.318-2.064 2.786-3.775 14.686-6.507 23.956-1.625 5.566-5.623 8.869-12.128 8.869l-.297-.005c-9.395 0-19.203-4.323-38.852-4.323-26.521 0-35.662 6.043-56.254 20.588-21.832 15.438-42.771 28.764-74.027 27.399-31.646 2.334-58.025-16.908-72.871-27.404-20.714-14.643-29.828-20.582-56.241-20.582-18.864 0-30.736 4.72-38.852 4.72-8.073 0-11.213-4.922-12.422-9.04-2.703-9.189-4.404-21.263-6.523-24.13-20.679-3.209-67.31-11.344-68.498-32.15a10.627 10.627 0 0 1 8.877-11.069c69.583-11.455 100.924-82.901 102.227-85.934.074-.176.155-.344.237-.515 3.713-7.537 4.544-13.849 2.463-18.753-5.05-11.896-26.872-16.164-36.053-19.796-23.715-9.366-27.015-20.128-25.612-27.504 2.437-12.836 21.725-20.735 33.002-15.453 8.919 4.181 16.843 6.297 23.547 6.297 5.022 0 8.212-1.204 9.96-2.171-2.043-35.936-7.101-87.29 5.687-115.969C158.122 21.304 229.705 15.42 250.826 15.42c.944 0 9.141-.089 10.11-.089 52.148 0 102.254 26.78 126.723 81.643 12.777 28.65 7.749 79.792 5.695 116.009 1.582.872 4.357 1.942 8.599 2.139 6.397-.286 13.815-2.389 22.069-6.257 6.085-2.846 14.406-2.461 20.48.058l.029.01c9.476 3.385 15.439 10.215 15.589 17.87.184 9.747-8.522 18.165-25.878 25.018-2.118.835-4.694 1.655-7.434 2.525-9.797 3.106-24.6 7.805-28.616 17.271-2.079 4.904-1.256 11.211 2.46 18.748.087.168.166.342.239.515 1.301 3.03 32.615 74.46 102.23 85.934 6.427 1.058 11.163 7.877 7.725 15.859z"},child:[]}]})(e)}},Hh=["general","question","suggestion","feedback","collaboration","employment","project","other"],Bh={firstName:"",lastName:"",email:"",phone:"",topic:"",customTopic:"",message:"",botcheck:""},Uh=e=>e.trim().replace(/[\s()-]/g,""),Vh=e=>{const t=e.lastIndexOf(".");return-1===t?"":e.slice(t).toLowerCase()},Wh=e=>`${(e/1048576).toFixed(2)} MB`,Gh=()=>{try{const e=sessionStorage.getItem(Rh)||sessionStorage.getItem("abdulrahman-contact-draft-v1");if(!e)return{...Bh};const t=JSON.parse(e);return t&&"object"===typeof t?{...Bh,firstName:String(t.firstName||"").slice(0,80),lastName:String(t.lastName||"").slice(0,80),email:String(t.email||"").slice(0,254),phone:String(t.phone||"").slice(0,25),topic:Hh.includes(t.topic)?t.topic:"",customTopic:String(t.customTopic||"").slice(0,120),message:String(t.message||"").slice(0,5e3),botcheck:""}:{...Bh}}catch{return{...Bh}}},qh=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Hh;const n={},r=e.firstName.trim(),o=e.lastName.trim(),a=e.email.trim(),i=e.phone.trim(),l=e.customTopic.trim(),s=e.message.trim();return(!r||r.length>80)&&(n.firstName=!0),(!o||o.length>80)&&(n.lastName=!0),(e=>{const t=e.trim();return t.length<=254&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)})(a)||(n.email=!0),i&&!(e=>!e.trim()||/^\+[1-9]\d{7,14}$/.test(Uh(e)))(i)&&(n.phone=!0),t.includes(e.topic)||(n.topic=!0),"other"===e.topic&&(!l||l.length>120)&&(n.customTopic=!0),(s.length<10||s.length>5e3)&&(n.message=!0),n},Jh=Qo`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,Kh=Go.main`
  --contact-bg: var(--color-background);
  --contact-panel-bg: var(--color-surface);
  --contact-input-bg: var(--color-input-background);
  --contact-text: var(--color-text-primary);
  --contact-muted: var(--color-text-secondary);
  --contact-border: var(--color-border);
  --contact-accent: var(--color-primary);
  --contact-soft: var(--color-primary-soft);
  --contact-focus: var(--color-border-focus);
  --contact-error-border: var(--color-danger);
  --contact-error-focus: var(--color-danger);

  width: 100%;
  min-width: 0;

  background-color: var(--contact-bg);
  color: var(--contact-text);

  transition:
    background-color 0.3s ease,
    color 0.3s ease;
`,Yh=Go.div`
  width: min(
    calc(100% - 40px),
    var(--container-width, 1200px)
  );

  max-width: 100%;
  min-width: 0;
  margin-inline: auto;
`,Qh=Go.section`
  width: 100%;
  min-width: 0;

  padding: 35px 0 90px;

  background-color: var(--contact-bg);
  color: var(--contact-text);

  @media (max-width: 768px) {
    padding: 24px 0 60px;
  }
`,Xh=Go.div`
  display: grid;

  grid-template-columns:
    minmax(0, 1.4fr)
    minmax(300px, 0.8fr);

  gap: 35px;
  align-items: start;

  width: 100%;
  min-width: 0;

  > * {
    min-width: 0;
    max-width: 100%;
  }

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,Zh=Go.div`
  min-width: 0;
  padding: 32px;

  background-color: var(--contact-panel-bg);
  color: var(--contact-text);

  border: 1px solid var(--contact-border);
  border-radius: 18px;

  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;

  @media (max-width: 600px) {
    padding: 22px 18px;
  }
`,ef=Go.h2`
  margin: 0 0 24px;

  font-size: clamp(21px, 2.5vw, 27px);
  font-weight: 700;

  color: var(--contact-text);
`,tf=Go.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
`,nf=Go.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,rf=Go.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  min-width: 0;
`,of=Go.label`
  font-size: 14px;
  font-weight: 600;
  color: var(--contact-text);
`,af=Go.span`
  color: var(--color-danger);
  margin-inline-start: 3px;
`,lf=Uo`
  width: 100%;
  min-width: 0;
  min-height: 49px;

  padding: 12px 15px;

  border: 1px solid var(--contact-border);
  border-radius: 9px;

  background-color: var(--contact-input-bg);
  color: var(--contact-text);

  font-family: inherit;
  font-size: 14px;

  outline: none;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.3s ease,
    color 0.3s ease;

  &::placeholder {
    color: var(--color-input-placeholder);
    opacity: 1;
  }

  &:focus {
    border-color: var(--contact-focus);
    outline: none;
    box-shadow: 0 0 0 2px
      color-mix(
        in srgb,
        var(--contact-focus) 15%,
        transparent
      );
  }

  &[aria-invalid="true"] {
    border-color: var(--contact-error-border);
  }

  &[aria-invalid="true"]:focus {
    border-color: var(--contact-error-focus);

    box-shadow: 0 0 0 2px
      color-mix(
        in srgb,
        var(--contact-error-focus) 12%,
        transparent
      );
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`,sf=Go.input`
  ${lf}
`,cf=Go.textarea`
  ${lf}

  min-height: 155px;
  resize: vertical;
  line-height: 1.8;
`,uf=Go.div`
  position: relative;

  svg {
    position: absolute;
    inset-inline-end: 15px;
    top: 50%;

    transform: translateY(-50%);

    pointer-events: none;
    color: var(--contact-muted);
  }
`,df=Go.select`
  ${lf}

  appearance: none;
  cursor: pointer;
  padding-inline-end: 40px;

  option {
    color: var(--contact-text);
    background-color: var(--contact-input-bg);
  }
`,pf=Go.p`
  margin: -5px 0 0;

  font-size: 12px;
  line-height: 1.8;
  color: var(--contact-muted);
`,hf=Go.div`
  position: absolute;

  width: 1px;
  height: 1px;

  padding: 0;
  margin: 0;

  overflow: hidden;
  clip-path: inset(50%);

  white-space: nowrap;
  border: 0;
  pointer-events: none;
`,ff=Go.div`
  padding: 25px 20px;

  border: 1px dashed var(--contact-border);
  border-radius: 12px;

  background-color: var(--contact-input-bg);
  color: var(--contact-text);

  text-align: center;

  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    border-color: var(--contact-focus);
  }
`,mf=Go(function(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 16 12 12 8 16"},child:[]},{tag:"line",attr:{x1:"12",y1:"12",x2:"12",y2:"21"},child:[]},{tag:"path",attr:{d:"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"},child:[]},{tag:"polyline",attr:{points:"16 16 12 12 8 16"},child:[]}]})(e)})`
  display: block;
  margin: 0 auto 12px;

  font-size: 30px;
  color: var(--contact-accent);
`,gf=Go.p`
  margin: 0 0 6px;

  font-size: 14px;
  font-weight: 600;
  color: var(--contact-text);
`,vf=Go.p`
  margin: 0 0 14px;

  font-size: 12px;
  line-height: 1.8;
  color: var(--contact-muted);
`,bf=Go.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 10px 16px;

  border: 1px solid var(--contact-border);
  border-radius: 8px;

  background-color: var(--contact-panel-bg);
  color: var(--contact-text);

  font: inherit;
  font-size: 13px;
  font-weight: 600;

  cursor: pointer;

  &:hover:not(:disabled) {
    border-color: var(--contact-focus);
    background-color: var(--contact-soft);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,yf=Go.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  margin-top: 12px;
`,xf=Go.div`
  display: flex;
  align-items: center;
  gap: 11px;

  min-width: 0;
  padding: 11px 13px;

  border: 1px solid var(--contact-border);
  border-radius: 9px;

  background-color: var(--contact-input-bg);
`,wf=Go(function(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(e)})`
  flex-shrink: 0;
  font-size: 21px;
  color: var(--contact-accent);
`,kf=Go.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  min-width: 0;
  flex: 1;

  strong {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-size: 12px;
    font-weight: 600;
    color: var(--contact-text);
  }

  small {
    font-size: 11px;
    color: var(--contact-muted);
  }
`,Sf=Go.button`
  display: grid;
  place-items: center;

  width: 30px;
  height: 30px;
  flex-shrink: 0;

  border: none;
  border-radius: 7px;

  background-color: transparent;
  color: var(--color-danger);

  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: var(--color-danger-soft);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,jf=Go.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;

  font-size: 12px;
  color: var(--contact-muted);
`,Ef=Go.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  min-width: 0;
  overflow: hidden;
`,Cf=Go.div`
  max-width: 100%;
  min-height: 65px;
  overflow: hidden;
`,Tf=Go.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  align-self: flex-start;

  padding: 7px 11px;

  border: 1px solid var(--contact-border);
  border-radius: 7px;

  background-color: transparent;
  color: var(--contact-text);

  font: inherit;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: var(--contact-soft);
  }
`,Lf=Go.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 11px;

  width: 100%;
  min-height: 52px;
  padding: 13px 22px;

  border: 1px solid var(--color-primary);
  border-radius: 9px;

  background-color: var(--color-button-background);
  color: var(--color-button-text);

  font-family: inherit;
  font-size: 15px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease,
    opacity 0.2s ease;

  &:hover:not(:disabled) {
    background-color: var(--color-button-hover);
    border-color: var(--color-button-hover);
    color: var(--color-on-primary);
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    flex-shrink: 0;
    font-size: 18px;
    color: currentColor;
    stroke: currentColor;
  }
`,Pf=Go(function(e){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"6"},child:[]},{tag:"line",attr:{x1:"12",y1:"18",x2:"12",y2:"22"},child:[]},{tag:"line",attr:{x1:"4.93",y1:"4.93",x2:"7.76",y2:"7.76"},child:[]},{tag:"line",attr:{x1:"16.24",y1:"16.24",x2:"19.07",y2:"19.07"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"6",y2:"12"},child:[]},{tag:"line",attr:{x1:"18",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.93",y1:"19.07",x2:"7.76",y2:"16.24"},child:[]},{tag:"line",attr:{x1:"16.24",y1:"7.76",x2:"19.07",y2:"4.93"},child:[]}]})(e)})`
  animation: ${Jh} 1s linear infinite;
`,_f=Go.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;

  padding: 16px;
  border-radius: 11px;

  background-color: ${e=>{let{$success:t}=e;return t?"rgba(22, 163, 74, 0.08)":"var(--color-danger-soft)"}};

  color: ${e=>{let{$success:t}=e;return t?"#16a34a":"var(--color-danger)"}};

  > svg {
    flex-shrink: 0;
    font-size: 22px;
    margin-top: 2px;
  }

  strong {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    color: inherit;
  }

  p {
    margin: 0;
    font-size: 13px;
    line-height: 1.9;
    color: inherit;
  }
`,Nf=Go.aside`
  display: flex;
  flex-direction: column;
  gap: 22px;

  min-width: 0;
`,zf=Go.a`
  display: flex;
  align-items: center;
  gap: 15px;

  padding: 16px 0;

  color: var(--contact-text);
  text-decoration: none;

  border-bottom: 1px solid var(--contact-border);

  transition: color 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: var(--contact-accent);
  }
`,Af=Go.span`
  width: 45px;
  height: 45px;

  flex-shrink: 0;

  display: grid;
  place-items: center;

  border-radius: 11px;

  color: var(--contact-accent);
  background-color: var(--contact-soft);

  font-size: 20px;
`,Of=Go.span`
  display: flex;
  flex-direction: column;
  gap: 5px;

  min-width: 0;
  flex: 1;

  strong {
    font-size: 14px;
    font-weight: 600;
    color: var(--contact-text);
  }

  small {
    font-size: 13px;
    font-weight: 400;
    color: var(--contact-muted);
    overflow-wrap: anywhere;
  }
`,Rf=Go(es)`
  flex-shrink: 0;
  color: var(--contact-muted);
`,If=Go.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;

  padding: 18px;
  border-radius: 12px;

  background-color: var(--contact-soft);

  > svg {
    font-size: 24px;
    flex-shrink: 0;
    color: var(--contact-accent);
  }

  strong {
    display: block;
    margin-bottom: 6px;

    font-size: 14px;
    color: var(--contact-text);
  }

  p {
    margin: 0;

    font-size: 13px;
    line-height: 1.9;
    color: var(--contact-muted);
  }
`,Mf=Go.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-top: 18px;
`,Df=Go.a`
  width: 42px;
  height: 42px;

  display: grid;
  place-items: center;

  border: 1px solid var(--contact-border);
  border-radius: 10px;

  background-color: var(--contact-panel-bg);
  color: var(--contact-text);

  font-size: 19px;
  text-decoration: none;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  svg {
    color: currentColor;
  }

  &:hover,
  &:focus-visible {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    color: var(--color-on-primary);
    transform: translateY(-2px);
  }
`,$f=()=>{var e;const{t:t,i18n:n}=ha("contact"),r=null===(e=n.language)||void 0===e?void 0:e.startsWith("ar"),o=t("contactData",{returnObjects:!0}),a=t("topicOptions",{returnObjects:!0}),i=t("contactMethods",{returnObjects:!0}),c=t("socialMedia",{returnObjects:!0}),u=Array.isArray(a)?a:Hh,d=Array.isArray(i)?i:[],p=Array.isArray(c)?c:[],h=e=>"email"===e?`mailto:${o.email}`:"phone"===e?`tel:+${o.phone}`:o[e]||"#",f=d.map(e=>({id:e.id,icon:Fh[e.icon]||Al,title:t(e.titleKey),value:"phone"===e.id?`+${o.phone}`:t(e.valueKey),href:h(e.id)})),m=p.map(e=>({id:e.id,title:e.title,icon:Fh[e.icon]||Al,href:h(e.id)})),[g,v]=(0,s().useState)(Gh),[b,y]=(0,s().useState)([]),[x,w]=(0,s().useState)(""),[k,S]=(0,s().useState)("loading"),[j,E]=(0,s().useState)("idle"),[C,T]=(0,s().useState)(""),[L,P]=(0,s().useState)("email"),[_,N]=(0,s().useState)(!1),z=(0,s().useRef)(!1),A=(0,s().useRef)(null),O=(0,s().useRef)(null),R=(0,s().useRef)(!1),I="loading"===j,M=_?qh(g,u):{},D=e=>Boolean(M[e]);(0,s().useEffect)(()=>{R.current?R.current=!1:(e=>{try{const{firstName:t,lastName:n,email:r,phone:o,topic:a,customTopic:i,message:l}=e;sessionStorage.setItem(Rh,JSON.stringify({firstName:t,lastName:n,email:r,phone:o,topic:a,customTopic:i,message:l}))}catch{}})(g)},[g]);const $=e=>{T(e),E("error")},F=()=>{w(""),S("loading");try{var e;null===(e=O.current)||void 0===e||e.reset()}catch{S("error")}},H=e=>{const{name:t,value:n}=e.target;v(e=>({...e,[t]:n,..."topic"===t&&"other"!==n?{customTopic:""}:{}})),I||"idle"===j||(E("idle"),T(""))},B=b.reduce((e,t)=>e+t.size,0);return(0,l().jsxs)(Kh,{dir:r?"rtl":"ltr",children:[(0,l().jsx)(ml,{children:(0,l().jsx)(xd,{value:"contact"})}),(0,l().jsx)(Qh,{children:(0,l().jsx)(Yh,{children:(0,l().jsxs)(Xh,{children:[(0,l().jsxs)(Zh,{children:[(0,l().jsx)(ef,{children:t("form.title")}),(0,l().jsxs)(tf,{onSubmit:async e=>{if(e.preventDefault(),z.current)return;N(!0);const n=qh(g,u);if(Object.keys(n).length>0){E("invalid"),T("");const e=Object.keys(n)[0];return void requestAnimationFrame(()=>{var t;null===(t=document.getElementById(e))||void 0===t||t.focus()})}const r=g.firstName.trim(),o=g.lastName.trim(),a=g.email.trim(),i=Uh(g.phone),l=g.message.trim(),s="other"===g.topic?g.customTopic.trim():t(`topics.${g.topic}`);if(g.botcheck)$(t("status.botcheck"));else{if(!x)return $(t("status.turnstileRequired")),void("error"!==k&&"expired"!==k||F());z.current=!0,E("loading"),T("");try{const e=new FormData;e.append("firstName",r),e.append("lastName",o),e.append("email",a),e.append("phone",i),e.append("preferredContact",i?"whatsapp":"email"),e.append("topic",s),e.append("message",l),e.append("botcheck",g.botcheck),e.append("turnstileToken",x),b.forEach(t=>{e.append("files",t,t.name)});const n=await fetch("https://odjamyrqnamvqyzzqiow.supabase.co/functions/v1/upload-contact-attachment",{method:"POST",body:e,headers:{Accept:"application/json"}}),c=await n.json().catch(()=>null);if(!n.ok||!0!==(null===c||void 0===c?void 0:c.success)){if(429===n.status)throw new Error(t("status.rateLimit"));if(413===n.status)throw new Error(t("status.requestTooLarge"));if(403===n.status)throw new Error(t("status.securityError"));if(503===n.status)throw new Error(t("status.serviceUnavailable"));throw new Error(t("status.error"))}P(i?"whatsapp":"email"),R.current=!0,(()=>{try{sessionStorage.removeItem(Rh),sessionStorage.removeItem("abdulrahman-contact-draft-v1")}catch{}})(),v({...Bh}),y([]),N(!1),E("success"),T(""),A.current&&(A.current.value="")}catch(c){console.error("Contact form error:",c),$(c.message||t("status.unexpected"))}finally{z.current=!1,F()}}},noValidate:!0,children:[(0,l().jsxs)(nf,{children:[(0,l().jsxs)(rf,{children:[(0,l().jsxs)(of,{htmlFor:"firstName",children:[t("form.firstName"),(0,l().jsx)(af,{children:"*"})]}),(0,l().jsx)(sf,{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",maxLength:80,value:g.firstName,onChange:H,placeholder:t("form.firstNamePlaceholder"),disabled:I,required:!0,"aria-invalid":D("firstName")})]}),(0,l().jsxs)(rf,{children:[(0,l().jsxs)(of,{htmlFor:"lastName",children:[t("form.lastName"),(0,l().jsx)(af,{children:"*"})]}),(0,l().jsx)(sf,{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",maxLength:80,value:g.lastName,onChange:H,placeholder:t("form.lastNamePlaceholder"),disabled:I,required:!0,"aria-invalid":D("lastName")})]})]}),(0,l().jsxs)(rf,{children:[(0,l().jsxs)(of,{htmlFor:"email",children:[t("form.email"),(0,l().jsx)(af,{children:"*"})]}),(0,l().jsx)(sf,{id:"email",name:"email",type:"email",dir:"ltr",autoComplete:"email",maxLength:254,value:g.email,onChange:H,placeholder:t("form.emailPlaceholder"),disabled:I,required:!0,"aria-invalid":D("email")})]}),(0,l().jsxs)(rf,{children:[(0,l().jsx)(of,{htmlFor:"phone",children:t("form.phone")}),(0,l().jsx)(sf,{id:"phone",name:"phone",type:"tel",dir:"ltr",inputMode:"tel",autoComplete:"tel",maxLength:25,value:g.phone,onChange:H,placeholder:t("form.phonePlaceholder"),disabled:I,"aria-invalid":D("phone")})]}),(0,l().jsxs)(rf,{children:[(0,l().jsxs)(of,{htmlFor:"topic",children:[t("form.topic"),(0,l().jsx)(af,{children:"*"})]}),(0,l().jsxs)(uf,{children:[(0,l().jsxs)(df,{id:"topic",name:"topic",value:g.topic,onChange:H,disabled:I,required:!0,"aria-invalid":D("topic"),children:[(0,l().jsx)("option",{value:"",children:t("form.selectTopic")}),u.map(e=>(0,l().jsx)("option",{value:e,children:t(`topics.${e}`)},e))]}),(0,l().jsx)(Jl,{"aria-hidden":"true"})]})]}),"other"===g.topic&&(0,l().jsxs)(rf,{children:[(0,l().jsxs)(of,{htmlFor:"customTopic",children:[t("form.customTopic"),(0,l().jsx)(af,{children:"*"})]}),(0,l().jsx)(sf,{id:"customTopic",name:"customTopic",type:"text",maxLength:120,value:g.customTopic,onChange:H,placeholder:t("form.customTopicPlaceholder"),disabled:I,required:!0,"aria-invalid":D("customTopic")})]}),(0,l().jsxs)(rf,{children:[(0,l().jsxs)(of,{htmlFor:"message",children:[t("form.message"),(0,l().jsx)(af,{children:"*"})]}),(0,l().jsx)(cf,{id:"message",name:"message",rows:6,minLength:10,maxLength:5e3,value:g.message,onChange:H,placeholder:t("form.messagePlaceholder"),disabled:I,required:!0,"aria-invalid":D("message")}),(0,l().jsxs)(jf,{children:[(0,l().jsx)("span",{}),(0,l().jsxs)("span",{dir:"ltr",children:[g.message.length," / 5000"]})]})]}),(0,l().jsxs)(hf,{"aria-hidden":"true",children:[(0,l().jsx)("label",{htmlFor:"botcheck",children:t("form.honeypot")}),(0,l().jsx)("input",{id:"botcheck",name:"botcheck",type:"text",value:g.botcheck,onChange:H,tabIndex:-1,autoComplete:"off"})]}),(0,l().jsxs)(rf,{children:[(0,l().jsx)(of,{htmlFor:"contactFiles",children:t("form.attachments")}),(0,l().jsxs)(ff,{children:[(0,l().jsx)(mf,{"aria-hidden":"true"}),(0,l().jsx)(gf,{children:t("form.uploadTitle")}),(0,l().jsx)(vf,{children:t("form.uploadDescription")}),(0,l().jsx)("input",{ref:A,id:"contactFiles",type:"file",multiple:!0,accept:$h.join(","),onChange:e=>{const n=Array.from(e.target.files||[]);if(e.target.value="",!n.length||I)return;const r=[...b,...n];if(r.length>3)return void $(t("status.maxFiles",{max:3}));for(const a of n){var o;if(0===a.size||a.size>Ih)return void $(t("status.invalidFileSize",{name:a.name,max:5}));const e=Vh(a.name);if(!$h.includes(e)||null===(o=Dh[a.type])||void 0===o||!o.includes(e))return void $(t("status.invalidFileType",{name:a.name}))}r.reduce((e,t)=>e+t.size,0)>Mh?$(t("status.totalSize",{max:15})):(y(r),E("idle"),T(""))},disabled:I,style:{display:"none"}}),(0,l().jsxs)(bf,{type:"button",disabled:I||b.length>=3,onClick:()=>{var e;return null===(e=A.current)||void 0===e?void 0:e.click()},children:[(0,l().jsx)(Nl,{}),t("form.chooseFiles")]})]}),b.length>0&&(0,l().jsx)(yf,{children:b.map((e,n)=>(0,l().jsxs)(xf,{children:[(0,l().jsx)(wf,{"aria-hidden":"true"}),(0,l().jsxs)(kf,{children:[(0,l().jsx)("strong",{title:e.name,children:e.name}),(0,l().jsx)("small",{children:Wh(e.size)})]}),(0,l().jsx)(Sf,{type:"button",onClick:()=>(e=>{I||(y(t=>t.filter((t,n)=>n!==e)),E("idle"),T(""))})(n),disabled:I,"aria-label":t("form.removeFile"),children:(0,l().jsx)(Cl,{})})]},`${e.name}-${e.size}-${n}`))}),(0,l().jsxs)(jf,{children:[(0,l().jsx)("span",{children:t("form.filesCount",{count:b.length,max:3})}),(0,l().jsxs)("span",{dir:"ltr",children:[Wh(B)," / 15 MB"]})]})]}),(0,l().jsxs)(Ef,{children:[(0,l().jsxs)(of,{children:[t("form.securityTitle"),(0,l().jsx)(af,{children:"*"})]}),(0,l().jsx)(Cf,{children:(0,l().jsx)(Oh,{ref:O,siteKey:"0x4AAAAAAFryCxCaPlh1qRrw",options:{theme:"auto",language:r?"ar":"en",retry:"auto","retry-interval":2e3,"refresh-expired":"auto","refresh-timeout":"auto"},onSuccess:e=>{w(e),S("success")},onExpire:()=>{w(""),S("expired")},onError:()=>{w(""),S("error")}})}),"success"===k&&(0,l().jsxs)(pf,{style:{color:"#16a34a"},children:[(0,l().jsx)(Kl,{style:{display:"inline",verticalAlign:"middle",marginInlineEnd:5}}),t("form.securitySuccess")]}),("error"===k||"expired"===k)&&(0,l().jsxs)(l().Fragment,{children:[(0,l().jsx)(pf,{children:t("form.securityFailed")}),(0,l().jsxs)(Tf,{type:"button",onClick:F,children:[(0,l().jsx)(_l,{}),t("form.retryVerification")]})]})]}),"success"===j&&(0,l().jsxs)(_f,{$success:!0,role:"status","aria-live":"polite",children:[(0,l().jsx)(Kl,{}),(0,l().jsxs)("div",{children:[(0,l().jsx)("strong",{children:t("status.successTitle")}),(0,l().jsx)("p",{children:t("status.successDescription")}),(0,l().jsx)("p",{style:{marginTop:8},children:t("whatsapp"===L?"status.successWhatsapp":"status.successEmail")})]})]}),"invalid"===j&&(0,l().jsxs)(_f,{role:"alert",children:[(0,l().jsx)(os,{}),(0,l().jsxs)("div",{children:[(0,l().jsx)("strong",{children:t("status.invalidTitle")}),(0,l().jsx)("p",{children:t("status.invalidDescription")})]})]}),"error"===j&&(0,l().jsxs)(_f,{role:"alert",children:[(0,l().jsx)(os,{}),(0,l().jsxs)("div",{children:[(0,l().jsx)("strong",{children:t("status.errorTitle")}),(0,l().jsx)("p",{children:C})]})]}),(0,l().jsx)(Lf,{type:"submit",disabled:I,children:I?(0,l().jsxs)(l().Fragment,{children:[(0,l().jsx)(Pf,{}),t("form.sending")]}):(0,l().jsxs)(l().Fragment,{children:[(0,l().jsx)(Pl,{}),t("form.submit")]})})]})]}),(0,l().jsxs)(Nf,{children:[(0,l().jsxs)(Zh,{children:[(0,l().jsx)(ef,{children:t("info.title")}),f.map(e=>{const t=e.icon;return(0,l().jsxs)(zf,{href:e.href,target:"whatsapp"===e.id?"_blank":void 0,rel:"whatsapp"===e.id?"noopener noreferrer":void 0,children:[(0,l().jsx)(Af,{children:(0,l().jsx)(t,{})}),(0,l().jsxs)(Of,{children:[(0,l().jsx)("strong",{children:e.title}),(0,l().jsx)("small",{children:e.value})]}),(0,l().jsx)(Rf,{})]},e.id)})]}),(0,l().jsx)(Zh,{children:(0,l().jsxs)(If,{children:[(0,l().jsx)(Vl,{}),(0,l().jsxs)("div",{children:[(0,l().jsx)("strong",{children:t("availability.title")}),(0,l().jsx)("p",{children:t("availability.description")})]})]})}),(0,l().jsxs)(Zh,{children:[(0,l().jsx)(ef,{children:t("social.title")}),(0,l().jsx)(Mf,{children:m.map(e=>{const t=e.icon;return(0,l().jsx)(Df,{href:e.href,title:e.title,"aria-label":e.title,target:"email"===e.id?void 0:"_blank",rel:"email"===e.id?void 0:"noopener noreferrer",children:(0,l().jsx)(t,{})},e.id)})})]})]})]})})})]})},Ff=JSON.parse('{"pageTitle":"\u0645\u0634\u0627\u0631\u064a\u0639\u064a","pageDesc":"\u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u062a\u064a \u0639\u0645\u0644\u062a \u0639\u0644\u0649 \u062a\u0637\u0648\u064a\u0631\u0647\u0627\u060c \u0648\u062a\u0648\u0636\u062d \u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0648\u062e\u0628\u0631\u062a\u064a \u0641\u064a \u062a\u0635\u0645\u064a\u0645 \u0648\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0648\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0648\u064a\u0628.","section":{"title":"\u0645\u0634\u0627\u0631\u064a\u0639\u064a","description":"\u0627\u0633\u062a\u0639\u0631\u0636 \u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0646 \u0645\u0634\u0627\u0631\u064a\u0639\u064a \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628\u060c \u0648\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0623\u0647\u062f\u0627\u0641 \u0643\u0644 \u0645\u0634\u0631\u0648\u0639 \u0648\u0645\u0645\u064a\u0632\u0627\u062a\u0647 \u0648\u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0629 \u0641\u064a \u062a\u0637\u0648\u064a\u0631\u0647 \u0648\u062f\u0648\u0631\u064a \u0641\u064a \u062a\u0646\u0641\u064a\u0630\u0647."},"details":{"gallery":"\u0635\u0648\u0631 \u062a\u0648\u0636\u064a\u062d\u064a\u0629 \u0644\u0644\u0645\u0634\u0631\u0648\u0639","projectName":"\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639","projectType":"\u0646\u0648\u0639 \u0627\u0644\u0645\u0634\u0631\u0648\u0639","developedBy":"\u0645\u0637\u0648\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639","developmentArea":"\u0645\u062c\u0627\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639","date":"\u062a\u0627\u0631\u064a\u062e \u0625\u0646\u062c\u0627\u0632 \u0627\u0644\u0645\u0634\u0631\u0648\u0639","overview":"\u0648\u0635\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639","features":"\u0645\u0645\u064a\u0632\u0627\u062a \u0627\u0644\u0645\u0634\u0631\u0648\u0639","responsibilities":"\u0645\u0633\u0624\u0648\u0644\u064a\u0627\u062a\u064a \u0641\u064a \u0627\u0644\u0645\u0634\u0631\u0648\u0639","technologies":"\u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0648\u0627\u0644\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0629 \u0641\u064a \u0627\u0644\u0645\u0634\u0631\u0648\u0639","liveDemo":"\u0645\u0639\u0627\u064a\u0646\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639","sourceCode":"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u0645\u0635\u062f\u0631\u064a \u0644\u0644\u0645\u0634\u0631\u0648\u0639","backToProjects":"\u0627\u0644\u0639\u0648\u062f\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639","notFound":"\u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u063a\u064a\u0631 \u0645\u0648\u062c\u0648\u062f","notFoundDescription":"\u0644\u0645 \u0646\u062a\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0627\u0644\u0645\u0637\u0644\u0648\u0628.","enlargeImage":"\u062a\u0643\u0628\u064a\u0631 \u0627\u0644\u0635\u0648\u0631\u0629","closeImage":"\u0625\u063a\u0644\u0627\u0642 \u0627\u0644\u0635\u0648\u0631\u0629","previousImage":"\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629","nextImage":"\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u062a\u0627\u0644\u064a\u0629","noImages":"\u0644\u0627 \u062a\u062a\u0648\u0641\u0631 \u0635\u0648\u0631 \u0644\u0644\u0645\u0634\u0631\u0648\u0639 \u062d\u0627\u0644\u064a\u064b\u0627","plannedFeature":"\u0636\u0645\u0646 \u062e\u0637\u0629 \u0627\u0644\u062a\u0637\u0648\u064a\u0631"},"items":[{"id":"Portfolio_v3","title":"\u0645\u0648\u0642\u0639\u064a \u0627\u0644\u0634\u062e\u0635\u064a \u2013 \u0627\u0644\u0625\u0635\u062f\u0627\u0631 \u0627\u0644\u062b\u0627\u0644\u062b","projectType":"\u0645\u0648\u0642\u0639 \u0634\u062e\u0635\u064a \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u2013 \u0645\u0634\u0631\u0648\u0639 \u0645\u0633\u062a\u0642\u0644","developedBy":["\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631"],"developmentArea":"\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0623\u0645\u0627\u0645\u064a\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React","date":"","shortDescription":"\u0645\u0648\u0642\u0639 \u0634\u062e\u0635\u064a \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React\u060c \u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639\u060c \u0645\u0639 \u062f\u0639\u0645 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0648\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0648\u0627\u0644\u0645\u0638\u0647\u0631\u064a\u0646 \u0627\u0644\u0641\u0627\u062a\u062d \u0648\u0627\u0644\u062f\u0627\u0643\u0646 \u0648\u0646\u0645\u0648\u0630\u062c \u062a\u0648\u0627\u0635\u0644 \u0645\u062a\u0642\u062f\u0645.","overview":"\u0627\u0644\u0625\u0635\u062f\u0627\u0631 \u0627\u0644\u062b\u0627\u0644\u062b \u0648\u0627\u0644\u062d\u0627\u0644\u064a \u0645\u0646 \u0645\u0648\u0642\u0639\u064a \u0627\u0644\u0634\u062e\u0635\u064a\u060c \u0637\u0648\u0631\u062a\u0647 \u0628\u0647\u062f\u0641 \u062a\u0642\u062f\u064a\u0645 \u0647\u0648\u064a\u062a\u064a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0639\u0631\u0636 \u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0648\u0645\u0634\u0627\u0631\u064a\u0639\u064a \u0623\u0645\u0627\u0645 \u0645\u0633\u0624\u0648\u0644\u064a \u0627\u0644\u062a\u0648\u0638\u064a\u0641 \u0648\u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0645\u062d\u062a\u0645\u0644\u064a\u0646. \u064a\u0639\u062a\u0645\u062f \u0627\u0644\u0645\u0648\u0642\u0639 \u0639\u0644\u0649 React \u0644\u0628\u0646\u0627\u0621 \u0648\u0627\u062c\u0647\u0627\u062a \u0642\u0627\u0626\u0645\u0629 \u0639\u0644\u0649 \u0645\u0643\u0648\u0646\u0627\u062a \u0642\u0627\u0628\u0644\u0629 \u0644\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645\u060c \u0645\u0639 \u0627\u0644\u062a\u0646\u0642\u0644 \u0628\u064a\u0646 \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u062f\u0648\u0646 \u0625\u0639\u0627\u062f\u0629 \u062a\u062d\u0645\u064a\u0644\u0647\u0627\u060c \u0648\u062f\u0639\u0645 \u0627\u0644\u0644\u063a\u062a\u064a\u0646 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0648\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0648\u0627\u0644\u0645\u0638\u0647\u0631\u064a\u0646 \u0627\u0644\u0641\u0627\u062a\u062d \u0648\u0627\u0644\u062f\u0627\u0643\u0646. \u064a\u062a\u0636\u0645\u0646 \u0627\u0644\u0645\u0648\u0642\u0639 \u0635\u0641\u062d\u0627\u062a \u0631\u0626\u064a\u0633\u064a\u0629 \u0644\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u062a\u0641\u0627\u0635\u064a\u0644\u0647\u0627 \u0648\u0627\u0644\u062a\u0648\u0627\u0635\u0644\u060c \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0646\u0645\u0648\u0630\u062c \u062a\u0648\u0627\u0635\u0644 \u064a\u062f\u0639\u0645 \u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062a \u0648\u0627\u0644\u062a\u062d\u0642\u0642 \u0627\u0644\u0623\u0645\u0646\u064a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Cloudflare Turnstile \u0648\u0627\u0644\u062a\u0643\u0627\u0645\u0644 \u0645\u0639 Supabase. \u0648\u0636\u0639\u062a \u0647\u064a\u0643\u0644 \u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u0645\u062a\u0637\u0644\u0628\u0627\u062a\u0647 \u0648\u0637\u0648\u0631\u062a \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0645\u0639 \u0627\u0644\u0627\u0633\u062a\u0639\u0627\u0646\u0629 \u0628\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0644\u062a\u062d\u0633\u064a\u0646 \u0627\u0644\u0634\u064a\u0641\u0631\u0629 \u0648\u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0648\u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u060c \u0645\u0639 \u0627\u0644\u062d\u0631\u0635 \u0639\u0644\u0649 \u062a\u0648\u062d\u064a\u062f \u0627\u0644\u0647\u0648\u064a\u0629 \u0627\u0644\u0628\u0635\u0631\u064a\u0629 \u0648\u0627\u0644\u062a\u062c\u0627\u0648\u0628 \u0645\u0639 \u0645\u062e\u062a\u0644\u0641 \u0627\u0644\u0623\u062c\u0647\u0632\u0629.","features":["\u0645\u0648\u0642\u0639 \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u064a\u0639\u0631\u0636 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u062a\u0641\u0627\u0635\u064a\u0644\u0647\u0627.","\u0635\u0641\u062d\u0629 \u0631\u0626\u064a\u0633\u064a\u0629 \u062a\u062a\u0636\u0645\u0646 \u0627\u0644\u062a\u0639\u0631\u064a\u0641 \u0627\u0644\u0634\u062e\u0635\u064a \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0648\u0623\u0628\u0631\u0632 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u062f\u0639\u0648\u0627\u062a \u0644\u0627\u062a\u062e\u0627\u0630 \u0625\u062c\u0631\u0627\u0621.","\u062f\u0639\u0645 \u0627\u0644\u0644\u063a\u062a\u064a\u0646 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0648\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0645\u0639 \u0645\u0631\u0627\u0639\u0627\u0629 \u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0646\u0635\u0648\u0635 RTL \u0648LTR.","\u0627\u0644\u062a\u0628\u062f\u064a\u0644 \u0628\u064a\u0646 \u0627\u0644\u0645\u0638\u0647\u0631\u064a\u0646 \u0627\u0644\u0641\u0627\u062a\u062d \u0648\u0627\u0644\u062f\u0627\u0643\u0646 \u0645\u0639 \u062a\u0648\u062d\u064a\u062f \u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0648\u0627\u0644\u062a\u0646\u0633\u064a\u0642\u0627\u062a.","\u062a\u0635\u0645\u064a\u0645 \u0645\u062a\u062c\u0627\u0648\u0628 \u0645\u0639 \u0627\u0644\u0647\u0648\u0627\u062a\u0641 \u0648\u0627\u0644\u0623\u062c\u0647\u0632\u0629 \u0627\u0644\u0644\u0648\u062d\u064a\u0629 \u0648\u0627\u0644\u062d\u0648\u0627\u0633\u064a\u0628.","\u062a\u0646\u0642\u0644 \u0633\u0644\u0633 \u0628\u064a\u0646 \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React Router \u062f\u0648\u0646 \u0625\u0639\u0627\u062f\u0629 \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0635\u0641\u062d\u0629.","\u0635\u0641\u062d\u0627\u062a \u062a\u0641\u0635\u064a\u0644\u064a\u0629 \u0644\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u062a\u0639\u0631\u0636 \u0648\u0635\u0641\u0647\u0627 \u0648\u0645\u0645\u064a\u0632\u0627\u062a\u0647\u0627 \u0648\u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0629 \u0648\u0631\u0648\u0627\u0628\u0637\u0647\u0627.","\u0646\u0645\u0648\u0630\u062c \u062a\u0648\u0627\u0635\u0644 \u064a\u062f\u0639\u0645 \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u0645\u062f\u062e\u0644\u0627\u062a \u0648\u0625\u0631\u0641\u0627\u0642 \u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0648\u0627\u0644\u062a\u0643\u0627\u0645\u0644 \u0645\u0639 Supabase \u0648Cloudflare Turnstile."],"responsibilitiesIntro":"\u062a\u0648\u0644\u064a\u062a \u062a\u062e\u0637\u064a\u0637 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0634\u062e\u0635\u064a \u0648\u062a\u062d\u062f\u064a\u062f \u0623\u0647\u062f\u0627\u0641\u0647 \u0648\u0647\u064a\u0643\u0644 \u0635\u0641\u062d\u0627\u062a\u0647 \u0648\u0645\u0643\u0648\u0646\u0627\u062a\u0647 \u0648\u062a\u0646\u0638\u064a\u0645 \u0645\u062d\u062a\u0648\u0627\u0647\u060c \u0645\u0639 \u0627\u0644\u0627\u0633\u062a\u0639\u0627\u0646\u0629 \u0628\u0640 ChatGPT \u0641\u064a \u062a\u0648\u0644\u064a\u062f \u0627\u0644\u0634\u064a\u0641\u0631\u0629 \u0627\u0644\u0628\u0631\u0645\u062c\u064a\u0629 \u0648\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a \u0648\u062a\u062d\u0633\u064a\u0646\u0647\u0627. \u0648\u0631\u0643\u0632\u062a \u0639\u0644\u0649 \u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0648\u0627\u0644\u0646\u062a\u064a\u062c\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064a\u0629 \u0648\u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0648\u062a\u0648\u062d\u064a\u062f \u0627\u0644\u0647\u0648\u064a\u0629 \u0627\u0644\u0628\u0635\u0631\u064a\u0629.","responsibilities":["\u062a\u062d\u062f\u064a\u062f \u0641\u0643\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u0623\u0647\u062f\u0627\u0641\u0647 \u0648\u0627\u0644\u062c\u0645\u0647\u0648\u0631 \u0627\u0644\u0645\u0633\u062a\u0647\u062f\u0641 \u0645\u0646 \u0645\u0633\u0624\u0648\u0644\u064a \u0627\u0644\u062a\u0648\u0638\u064a\u0641 \u0648\u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0645\u062d\u062a\u0645\u0644\u064a\u0646.","\u062a\u062e\u0637\u064a\u0637 \u0647\u064a\u0643\u0644 \u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u0635\u0641\u062d\u0627\u062a\u0647 \u0648\u0623\u0642\u0633\u0627\u0645\u0647 \u0648\u062a\u062d\u062f\u064a\u062f \u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0648\u0627\u0644\u0648\u0638\u0627\u0626\u0641.","\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0645\u0647\u0646\u064a \u0648\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u062a\u0641\u0627\u0635\u064a\u0644\u0647\u0627 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 JSON.","\u062a\u0648\u062c\u064a\u0647 \u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a React \u0648\u0645\u0643\u0648\u0646\u0627\u062a\u0647\u0627 \u0628\u0627\u0644\u0627\u0633\u062a\u0639\u0627\u0646\u0629 \u0628\u0640 ChatGPT.","\u062a\u062d\u062f\u064a\u062f \u0645\u062a\u0637\u0644\u0628\u0627\u062a \u062a\u0639\u062f\u062f \u0627\u0644\u0644\u063a\u0627\u062a \u0648\u0627\u0644\u0645\u0638\u0647\u0631\u064a\u0646 \u0627\u0644\u0641\u0627\u062a\u062d \u0648\u0627\u0644\u062f\u0627\u0643\u0646 \u0648\u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0645\u062a\u062c\u0627\u0648\u0628.","\u062a\u062d\u062f\u064a\u062f \u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0648\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062a \u0648\u0627\u0644\u062a\u062d\u0642\u0642 \u0627\u0644\u0623\u0645\u0646\u064a \u0648\u0627\u0644\u062a\u0643\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u062e\u0627\u0631\u062c\u064a\u0629.","\u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0648\u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0638\u0627\u0647\u0631\u0629 \u0648\u062a\u0648\u062c\u064a\u0647 \u0627\u0644\u062a\u062d\u0633\u064a\u0646\u0627\u062a \u0644\u062a\u062d\u0642\u064a\u0642 \u062a\u062c\u0631\u0628\u0629 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u062a\u0646\u0627\u0633\u0642\u0629.","\u0625\u062f\u0627\u0631\u0629 \u0645\u0644\u0641\u0627\u062a \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Git \u0648GitHub \u0648\u0646\u0634\u0631 \u0627\u0644\u0645\u0648\u0642\u0639 \u0639\u0628\u0631 GitHub Pages."],"tech_stack":["HTML5","CSS3","JavaScript","React","React Router","Styled Components","i18next","JSON","React Icons","Supabase","Supabase Edge Functions","Cloudflare Turnstile","npm","Git","GitHub","GitHub Pages"],"project_img":["portfolio_v3_1","portfolio_v3_2","portfolio_v3_3","portfolio_v3_4","portfolio_v3_5","portfolio_v3_6","portfolio_v3_7","portfolio_v3_8","portfolio_v3_9"],"demo":"https://dhomlmgyr188.github.io/abdulrahman-portfolio-react/","github":"https://github.com/dhomlmgyr188/abdulrahman-portfolio-react"},{"id":"freelancer-hub","title":"\u0645\u0646\u0635\u0629 \u0627\u0644\u0641\u0631\u064a\u0644\u0627\u0646\u0633\u0631\u0632","projectType":"\u0645\u0634\u0631\u0648\u0639 \u062a\u062e\u0631\u062c \u0623\u0643\u0627\u062f\u064a\u0645\u064a \u2013 \u0645\u0646\u0635\u0629 \u0644\u0644\u0639\u0645\u0644 \u0627\u0644\u062d\u0631","developedBy":["\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631","\u062d\u0627\u062a\u0645 \u0627\u0644\u062c\u0647\u0646\u064a","\u0647\u0634\u0627\u0645 \u0627\u0644\u062d\u0631\u0628\u064a","\u0639\u0645\u0627\u062f \u0627\u0644\u062c\u0647\u0646\u064a","\u0645\u062d\u0645\u062f \u062c\u0628\u0644\u0627\u0648\u064a","\u0639\u0645\u0631 \u0627\u0644\u0628\u0644\u0648\u064a"],"developmentArea":"\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","date":"2026/01/19","shortDescription":"\u0645\u0646\u0635\u0629 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629 \u0644\u0644\u0639\u0645\u0644 \u0627\u0644\u062d\u0631 \u062a\u0631\u0628\u0637 \u0627\u0644\u0645\u0633\u062a\u0642\u0644\u064a\u0646 \u0628\u0623\u0635\u062d\u0627\u0628 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639\u060c \u0648\u062a\u0648\u0641\u0631 \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u062d\u0633\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629\u060c \u0645\u0639 \u0644\u0648\u062d\u0629 \u062a\u062d\u0643\u0645 \u0625\u062f\u0627\u0631\u064a\u0629 \u0648\u0635\u0644\u0627\u062d\u064a\u0627\u062a \u0645\u062a\u0639\u062f\u062f\u0629.","overview":"\u0645\u0634\u0631\u0648\u0639 \u062a\u062e\u0631\u062c \u062c\u0645\u0627\u0639\u064a \u0636\u0645\u0646 \u062f\u0628\u0644\u0648\u0645 \u0645\u0637\u0648\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644 \u0628\u0627\u0644\u0643\u0644\u064a\u0629 \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u064a\u0629 \u0641\u064a \u062c\u0627\u0645\u0639\u0629 \u0637\u064a\u0628\u0629\u060c \u064a\u0647\u062f\u0641 \u0625\u0644\u0649 \u062a\u0637\u0648\u064a\u0631 \u0645\u0646\u0635\u0629 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629 \u062a\u0631\u0628\u0637 \u0627\u0644\u0645\u0633\u062a\u0642\u0644\u064a\u0646 \u0628\u0623\u0635\u062d\u0627\u0628 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639. \u062a\u062f\u0639\u0645 \u0627\u0644\u0645\u0646\u0635\u0629 \u062b\u0644\u0627\u062b\u0629 \u0623\u0646\u0648\u0627\u0639 \u0645\u0646 \u0627\u0644\u062d\u0633\u0627\u0628\u0627\u062a: \u0627\u0644\u0645\u0633\u062a\u0642\u0644 \u0648\u0635\u0627\u062d\u0628 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0648\u0627\u0644\u0645\u0633\u0624\u0648\u0644\u060c \u0645\u0639 \u0635\u0644\u0627\u062d\u064a\u0627\u062a \u0645\u062e\u062a\u0644\u0641\u0629 \u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0627\u0644\u0634\u062e\u0635\u064a\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0627\u0644\u0628\u062d\u062b \u0648\u0627\u0644\u062a\u0635\u0641\u064a\u0629. \u0643\u0645\u0627 \u062a\u062a\u0636\u0645\u0646 \u0644\u0648\u062d\u0629 \u062a\u062d\u0643\u0645 \u0625\u062f\u0627\u0631\u064a\u0629 \u0644\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0625\u062d\u0635\u0627\u0626\u064a\u0627\u062a \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0627\u0644\u062a\u0635\u0646\u064a\u0641\u0627\u062a \u0648\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a\u060c \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0645\u0631\u0627\u062c\u0639\u0629 \u0637\u0644\u0628\u0627\u062a \u0646\u0634\u0631 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0633\u062c\u0644\u0627\u062a \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062a. \u062a\u0645 \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 HTML \u0648CSS \u0648JavaScript \u0648PHP \u0648MySQL\u060c \u0645\u0639 \u0648\u062c\u0648\u062f \u0648\u0638\u0627\u0626\u0641 \u0645\u062e\u0637\u0637 \u0644\u0627\u0633\u062a\u0643\u0645\u0627\u0644\u0647\u0627 \u0645\u0633\u062a\u0642\u0628\u0644\u064b\u0627\u060c \u0623\u0628\u0631\u0632\u0647\u0627 \u0646\u0638\u0627\u0645 \u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0639\u0631\u0648\u0636.","features":[{"title":"\u0627\u0644\u062d\u0633\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0627\u0644\u0634\u062e\u0635\u064a\u0629","items":["\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062d\u0633\u0627\u0628\u0627\u062a \u0648\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0628\u0635\u0644\u0627\u062d\u064a\u0627\u062a \u0645\u062e\u062a\u0644\u0641\u0629 \u0644\u0644\u0645\u0633\u062a\u0642\u0644\u064a\u0646 \u0648\u0623\u0635\u062d\u0627\u0628 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0627\u0644\u0645\u0633\u0624\u0648\u0644.","\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0644\u0644\u0645\u0633\u062a\u0642\u0644\u064a\u0646 \u0648\u0639\u0631\u0636 \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0648\u0627\u0644\u062e\u0628\u0631\u0627\u062a \u0648\u0646\u0645\u0627\u0630\u062c \u0627\u0644\u0623\u0639\u0645\u0627\u0644."]},{"title":"\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0627\u0644\u0628\u062d\u062b","items":["\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0639\u0631\u0636\u0647\u0627 \u0648\u062a\u0639\u062f\u064a\u0644\u0647\u0627 \u0648\u062d\u0630\u0641\u0647\u0627 \u0645\u0646 \u062d\u0633\u0627\u0628 \u0635\u0627\u062d\u0628 \u0627\u0644\u0645\u0634\u0631\u0648\u0639.","\u0627\u0644\u0628\u062d\u062b \u0639\u0646 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u062a\u0635\u0641\u064a\u062a\u0647\u0627\u060c \u0648\u0627\u0644\u0628\u062d\u062b \u0639\u0646 \u0627\u0644\u0645\u0633\u062a\u0642\u0644\u064a\u0646 \u0628\u0627\u0644\u0627\u0633\u0645 \u0623\u0648 \u0627\u0644\u0645\u0647\u0627\u0631\u0629."]},{"title":"\u0644\u0648\u062d\u0629 \u062a\u062d\u0643\u0645 \u0627\u0644\u0645\u0633\u0624\u0648\u0644","items":["\u0639\u0631\u0636 \u0625\u062d\u0635\u0627\u0626\u064a\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062a.","\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0627\u0644\u062a\u0635\u0646\u064a\u0641\u0627\u062a \u0648\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a.","\u0645\u0631\u0627\u062c\u0639\u0629 \u0637\u0644\u0628\u0627\u062a \u0646\u0634\u0631 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0639\u0644\u064a\u0647\u0627 \u0623\u0648 \u0631\u0641\u0636\u0647\u0627."]},{"title":"\u0633\u062c\u0644\u0627\u062a \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062a","items":["\u0639\u0631\u0636 \u0633\u062c\u0644\u0627\u062a \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0648\u062d\u0627\u0644\u0627\u062a\u0647\u0627 \u0648\u0641\u0642 \u0635\u0644\u0627\u062d\u064a\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645."],"note":"\u0633\u062c\u0644\u0627\u062a \u062f\u0627\u062e\u0644 \u0627\u0644\u0646\u0638\u0627\u0645 \u062f\u0648\u0646 \u062a\u0646\u0641\u064a\u0630 \u0645\u062f\u0641\u0648\u0639\u0627\u062a \u0645\u0627\u0644\u064a\u0629 \u0641\u0639\u0644\u064a\u0629."},{"title":"\u0646\u0638\u0627\u0645 \u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0639\u0631\u0648\u0636 \u2013 \u062a\u0637\u0648\u064a\u0631 \u0645\u0633\u062a\u0642\u0628\u0644\u064a","status":"planned","items":["\u062a\u0642\u062f\u064a\u0645 \u0639\u0631\u0648\u0636 \u0639\u0644\u0649 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0625\u062f\u0627\u0631\u0629 \u062d\u0627\u0644\u0627\u062a\u0647\u0627."],"note":"\u062a\u062a\u0648\u0641\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0648\u0628\u0646\u064a\u0629 \u0628\u064a\u0627\u0646\u0627\u062a \u0645\u0631\u062a\u0628\u0637\u0629 \u0628\u0627\u0644\u0646\u0638\u0627\u0645\u060c \u0644\u0643\u0646 \u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u062a\u0634\u063a\u064a\u0644\u064a\u0629 \u0644\u0645 \u062a\u0643\u062a\u0645\u0644."}],"responsibilitiesIntro":"\u0634\u0627\u0631\u0643\u062a \u0636\u0645\u0646 \u0641\u0631\u064a\u0642 \u0645\u0643\u0648\u0646 \u0645\u0646 \u0633\u062a\u0629 \u0623\u0639\u0636\u0627\u0621 \u0641\u064a \u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0648\u062a\u0637\u0648\u064a\u0631\u0647\u060c \u0645\u0639 \u0627\u0644\u062a\u0631\u0643\u064a\u0632 \u0639\u0644\u0649 \u0628\u0646\u0627\u0621 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0623\u0645\u0627\u0645\u064a\u0629 \u0648\u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629 \u0641\u064a \u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u062e\u0644\u0641\u064a\u0629 \u0648\u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0631\u0628\u0637 \u0645\u0643\u0648\u0646\u0627\u062a \u0627\u0644\u0646\u0638\u0627\u0645 \u0648\u0627\u062e\u062a\u0628\u0627\u0631\u0647\u0627.","responsibilities":["\u062f\u0631\u0627\u0633\u0629 \u0627\u0644\u0645\u0646\u0635\u0627\u062a \u0627\u0644\u0645\u0646\u0627\u0641\u0633\u0629 \u0648\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0648\u0625\u0639\u062f\u0627\u062f \u0648\u062a\u0646\u0633\u064a\u0642 \u0648\u062b\u0627\u0626\u0642 \u0627\u0644\u0645\u0634\u0631\u0648\u0639.","\u062a\u0637\u0648\u064a\u0631 \u0623\u062c\u0632\u0627\u0621 \u0648\u0627\u0633\u0639\u0629 \u0645\u0646 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0623\u0645\u0627\u0645\u064a\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 HTML \u0648CSS \u0648JavaScript.","\u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0648\u0638\u0627\u0626\u0641 PHP \u0648\u0631\u0628\u0637\u0647\u0627 \u0628\u0642\u0627\u0639\u062f\u0629 \u0628\u064a\u0627\u0646\u0627\u062a MySQL.","\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0641\u064a \u062a\u0635\u0645\u064a\u0645 \u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u062a\u0646\u0641\u064a\u0630 \u0639\u0645\u0644\u064a\u0627\u062a CRUD \u0648\u0625\u062f\u0627\u0631\u0629 \u062c\u0644\u0633\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646.","\u0631\u0628\u0637 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a \u0628\u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u062e\u0644\u0641\u064a\u0629 \u0648\u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u062a\u062f\u0641\u0642 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a.","\u0627\u062e\u062a\u0628\u0627\u0631 \u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0646\u0638\u0627\u0645 \u0648\u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0623\u062e\u0637\u0627\u0621 \u0648\u0627\u0644\u062a\u0639\u0627\u0648\u0646 \u0645\u0639 \u0623\u0639\u0636\u0627\u0621 \u0627\u0644\u0641\u0631\u064a\u0642 \u0641\u064a \u062f\u0645\u062c \u0627\u0644\u0623\u0639\u0645\u0627\u0644."],"tech_stack":["HTML5","CSS3","JavaScript","PHP","MySQL","AJAX","PHP Sessions","Swiper.js","Animate.css","Font Awesome","Apache","XAMPP","phpMyAdmin"],"project_img":["freelancer_hub2","freelancer_hub7","freelancer_hub8","freelancer_hub14","freelancer_hub1","freelancer_hub3","freelancer_hub11","freelancer_hub9","freelancer_hub5","freelancer_hub13","freelancer_hub4","freelancer_hub6","freelancer_hub10","freelancer_hub12"],"demo":"","github":"https://github.com/dhomlmgyr188/freelancer-hub"},{"id":"rest-api-wordpress","title":"\u0644\u0648\u062d\u0629 \u0625\u062f\u0627\u0631\u0629 WordPress \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 REST API","projectType":"\u0645\u0634\u0631\u0648\u0639 \u0623\u0643\u0627\u062f\u064a\u0645\u064a \u2013 \u0623\u0646\u0638\u0645\u0629 \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u062d\u062a\u0648\u0649","developedBy":["\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631","\u0647\u0634\u0627\u0645 \u0627\u0644\u0634\u0631\u064a\u0641","\u0648\u0644\u064a\u062f \u0627\u0644\u0639\u0645\u0631\u064a","\u0647\u0634\u0627\u0645 \u0627\u0644\u062d\u0631\u0628\u064a","\u0635\u0627\u0644\u062d \u0633\u0627\u0644\u0645"],"developmentArea":"\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0648\u062a\u0643\u0627\u0645\u0644 \u0648\u0627\u062c\u0647\u0627\u062a API","date":"2026/01/19","shortDescription":"\u0644\u0648\u062d\u0629 \u062a\u062d\u0643\u0645 \u0644\u0625\u062f\u0627\u0631\u0629 \u0645\u0633\u062a\u062e\u062f\u0645\u064a \u0648\u0645\u0642\u0627\u0644\u0627\u062a WordPress \u0639\u0628\u0631 REST API\u060c \u062a\u062a\u064a\u062d \u0639\u0631\u0636 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0625\u0636\u0627\u0641\u062a\u0647\u0627 \u0648\u062a\u0639\u062f\u064a\u0644\u0647\u0627 \u0648\u062d\u0630\u0641\u0647\u0627\u060c \u0645\u0639 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0643\u0644\u0645\u0627\u062a \u0645\u0631\u0648\u0631 \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a.","overview":"\u0645\u0634\u0631\u0648\u0639 \u0623\u0643\u0627\u062f\u064a\u0645\u064a \u062c\u0645\u0627\u0639\u064a \u0636\u0645\u0646 \u0645\u0642\u0631\u0631 \u0623\u0646\u0638\u0645\u0629 \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0628\u062c\u0627\u0645\u0639\u0629 \u0637\u064a\u0628\u0629\u060c \u064a\u0647\u062f\u0641 \u0625\u0644\u0649 \u062a\u0637\u0648\u064a\u0631 \u0644\u0648\u062d\u0629 \u062a\u062d\u0643\u0645 \u062e\u0627\u0631\u062c\u064a\u0629 \u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0648\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062a \u0641\u064a WordPress \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 REST API. \u062a\u062a\u064a\u062d \u0627\u0644\u0644\u0648\u062d\u0629 \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0628\u0645\u0648\u0642\u0639 WordPress \u0639\u0628\u0631 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f \u0648\u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u060c \u0648\u062a\u0646\u0641\u064a\u0630 \u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0648\u0627\u0644\u0639\u0631\u0636 \u0648\u0627\u0644\u062a\u0639\u062f\u064a\u0644 \u0648\u0627\u0644\u062d\u0630\u0641 (CRUD)\u060c \u0645\u0639 \u0625\u062f\u0627\u0631\u0629 \u0623\u062f\u0648\u0627\u0631 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0648\u062d\u0627\u0644\u0627\u062a \u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062a \u0648\u0639\u0631\u0636 \u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0646\u062c\u0627\u062d \u0648\u0627\u0644\u062e\u0637\u0623. \u062a\u0645 \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 JavaScript \u0648Fetch API\u060c \u0648\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 HTML \u0648Tailwind CSS. \u0643\u0645\u0627 \u0634\u0645\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0625\u0639\u062f\u0627\u062f \u062a\u0648\u062b\u064a\u0642 \u0623\u0643\u0627\u062f\u064a\u0645\u064a \u0648\u0639\u0631\u0636 \u062a\u0642\u062f\u064a\u0645\u064a\u060c \u0648\u062d\u0635\u0644 \u0627\u0644\u0641\u0631\u064a\u0642 \u0639\u0644\u0649 \u0627\u0644\u062f\u0631\u062c\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629.","features":["\u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0628\u0645\u0648\u0642\u0639 WordPress \u0648\u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062f\u062e\u0648\u0644 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Application Passwords.","\u0644\u0648\u062d\u0629 \u062a\u062d\u0643\u0645 \u0628\u0623\u0642\u0633\u0627\u0645 \u0645\u0633\u062a\u0642\u0644\u0629 \u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0648\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062a.","\u0639\u0631\u0636 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0648\u0625\u0636\u0627\u0641\u062a\u0647\u0645 \u0648\u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a\u0647\u0645 \u0648\u062d\u0630\u0641\u0647\u0645 \u0645\u0639 \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0623\u062f\u0648\u0627\u0631 \u0648\u062a\u0635\u0641\u064a\u062a\u0647\u0627.","\u0639\u0631\u0636 \u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062a \u0648\u0625\u0646\u0634\u0627\u0624\u0647\u0627 \u0648\u062a\u0639\u062f\u064a\u0644\u0647\u0627 \u0648\u062d\u0630\u0641\u0647\u0627 \u0645\u0639 \u062a\u0635\u0641\u064a\u062a\u0647\u0627 \u062d\u0633\u0628 \u062d\u0627\u0644\u0629 \u0627\u0644\u0646\u0634\u0631.","\u062a\u0646\u0641\u064a\u0630 \u0639\u0645\u0644\u064a\u0627\u062a CRUD \u0639\u0628\u0631 WordPress REST API \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Fetch API.","\u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u062d\u0627\u0644\u0629 \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0648\u0625\u0638\u0647\u0627\u0631 \u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0646\u062c\u0627\u062d \u0648\u0627\u0644\u062e\u0637\u0623 \u0648\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u062a\u0648\u062c\u064a\u0647 \u0639\u0646\u062f \u063a\u064a\u0627\u0628 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0627\u062a\u0635\u0627\u0644."],"responsibilitiesIntro":"\u0634\u0627\u0631\u0643\u062a \u0636\u0645\u0646 \u0641\u0631\u064a\u0642 \u0645\u0643\u0648\u0646 \u0645\u0646 \u062e\u0645\u0633\u0629 \u0623\u0639\u0636\u0627\u0621 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639\u060c \u0648\u062a\u0648\u0644\u064a\u062a \u062c\u0627\u0646\u0628\u064b\u0627 \u0631\u0626\u064a\u0633\u064a\u064b\u0627 \u0645\u0646 \u0628\u0631\u0645\u062c\u0629 \u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0648\u0627\u0644\u062a\u0643\u0627\u0645\u0644 \u0645\u0639 WordPress REST API\u060c \u0625\u0644\u0649 \u062c\u0627\u0646\u0628 \u0625\u0639\u062f\u0627\u062f \u0648\u062a\u0646\u0633\u064a\u0642 \u0627\u0644\u062a\u0648\u062b\u064a\u0642 \u0627\u0644\u0623\u0643\u0627\u062f\u064a\u0645\u064a \u0648\u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062a\u0642\u062f\u064a\u0645\u064a\u060c \u0628\u0627\u0644\u062a\u0639\u0627\u0648\u0646 \u0645\u0639 \u0623\u0639\u0636\u0627\u0621 \u0627\u0644\u0641\u0631\u064a\u0642.","responsibilities":["\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0623\u0643\u0648\u0627\u062f \u0627\u0644\u0648\u0638\u064a\u0641\u064a\u0629 \u0644\u0631\u0628\u0637 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0628\u0640 WordPress REST API \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 JavaScript \u0648Fetch API.","\u062a\u0646\u0641\u064a\u0630 \u0639\u0645\u0644\u064a\u0627\u062a \u0639\u0631\u0636 \u0648\u0625\u0636\u0627\u0641\u0629 \u0648\u062a\u0639\u062f\u064a\u0644 \u0648\u062d\u0630\u0641 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0648\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062a (CRUD).","\u0628\u0631\u0645\u062c\u0629 \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Application Passwords \u0648\u0627\u0644\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0633\u062a\u062c\u0627\u0628\u0627\u062a API \u0648\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0623\u062e\u0637\u0627\u0621.","\u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629 \u0641\u064a \u062f\u0645\u062c \u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0628\u0631\u0645\u062c\u064a\u0629 \u0645\u0639 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u062a\u064a \u0635\u0645\u0645\u0647\u0627 \u0623\u062d\u062f \u0623\u0639\u0636\u0627\u0621 \u0627\u0644\u0641\u0631\u064a\u0642 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Tailwind CSS.","\u0625\u0639\u062f\u0627\u062f \u0648\u062a\u0646\u0633\u064a\u0642 \u0645\u0633\u062a\u0646\u062f \u062a\u0648\u062b\u064a\u0642 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Word \u0648\u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062a\u0642\u062f\u064a\u0645\u064a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 PowerPoint.","\u0627\u062e\u062a\u0628\u0627\u0631 \u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0648\u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062a \u0628\u0627\u0644\u062a\u0639\u0627\u0648\u0646 \u0645\u0639 \u0627\u0644\u0641\u0631\u064a\u0642 \u062d\u062a\u0649 \u0627\u0643\u062a\u0645\u0627\u0644\u0647."],"tech_stack":["HTML5","CSS3","JavaScript","Tailwind CSS","WordPress","WordPress REST API","Fetch API","JSON","HTTP Basic Authentication","Application Passwords"],"project_img":["rest_api_wordpress1","rest_api_wordpress5","rest_api_wordpress2","rest_api_wordpress4","rest_api_wordpress3","rest_api_wordpress6"],"demo":"","github":"https://github.com/dhomlmgyr188/rest-api-wordpress-project"},{"id":"Ecommerce_Admin_Dashboard","title":"\u0644\u0648\u062d\u0629 \u062a\u062d\u0643\u0645 \u0645\u062a\u062c\u0631 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a","projectType":"\u0645\u0634\u0631\u0648\u0639 \u062a\u062f\u0631\u064a\u0628\u064a \u2013 \u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u062d\u0633\u0648\u0628","developedBy":["\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631"],"developmentArea":"\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0623\u0645\u0627\u0645\u064a\u0629","date":"2026/03/31","shortDescription":"\u0644\u0648\u062d\u0629 \u062a\u062d\u0643\u0645 \u0645\u062a\u0639\u062f\u062f\u0629 \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0644\u0645\u062a\u062c\u0631 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u060c \u062a\u0639\u0631\u0636 \u0625\u062d\u0635\u0627\u0626\u064a\u0627\u062a \u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a \u0648\u0648\u0627\u062c\u0647\u0627\u062a \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0648\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646\u060c \u0637\u064f\u0648\u0631\u062a \u0636\u0645\u0646 \u0645\u0634\u0631\u0648\u0639 \u062a\u062f\u0631\u064a\u0628\u064a \u0645\u0646 \u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u062d\u0633\u0648\u0628.","overview":"\u0645\u0634\u0631\u0648\u0639 \u062a\u062f\u0631\u064a\u0628\u064a \u0644\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u0623\u0645\u0627\u0645\u064a\u0629 \u0644\u0644\u0648\u062d\u0629 \u062a\u062d\u0643\u0645 \u0645\u062a\u062c\u0631 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u060c \u0646\u0641\u0630\u062a\u0647 \u0628\u0646\u0641\u0633\u064a \u0628\u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0645\u0639 \u0645\u062f\u0631\u0628 \u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u062d\u0633\u0648\u0628. \u064a\u062a\u0636\u0645\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0635\u0641\u062d\u0627\u062a \u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0648\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0648\u0646\u0645\u0627\u0630\u062c \u0625\u0636\u0627\u0641\u0629 \u0639\u0646\u0627\u0635\u0631 \u062c\u062f\u064a\u062f\u0629\u060c \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0644\u0648\u062d\u0629 \u0631\u0626\u064a\u0633\u064a\u0629 \u062a\u0639\u0631\u0636 \u0625\u062d\u0635\u0627\u0626\u064a\u0627\u062a \u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a \u0648\u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u064a\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Chart.js. \u062a\u0645 \u0628\u0646\u0627\u0621 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a \u0628\u0645\u0643\u0648\u0646\u0627\u062a \u0642\u0627\u0628\u0644\u0629 \u0644\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Handlebars\u060c \u0648\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u062a\u0646\u0633\u064a\u0642\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Sass \u0648\u0645\u0646\u0647\u062c\u064a\u062a\u064a BEM \u0648ITCSS\u060c \u0645\u0639 \u0627\u0639\u062a\u0645\u0627\u062f Vite \u0644\u0625\u062f\u0627\u0631\u0629 \u0628\u064a\u0626\u0629 \u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0648\u0628\u0646\u0627\u0621 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0648\u062a\u0635\u0645\u064a\u0645 \u0645\u062a\u062c\u0627\u0648\u0628 \u0644\u0645\u062e\u062a\u0644\u0641 \u0627\u0644\u0623\u062c\u0647\u0632\u0629.","features":["\u0644\u0648\u062d\u0629 \u0631\u0626\u064a\u0633\u064a\u0629 \u062a\u0639\u0631\u0636 \u0625\u062d\u0635\u0627\u0626\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062c\u0631 \u0648\u0645\u0624\u0634\u0631\u0627\u062a \u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a \u0628\u0631\u0633\u0648\u0645 \u0628\u064a\u0627\u0646\u064a\u0629 \u062a\u0641\u0627\u0639\u0644\u064a\u0629.","\u0635\u0641\u062d\u0627\u062a \u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0648\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0648\u0646\u0645\u0627\u0630\u062c \u0644\u0625\u0636\u0627\u0641\u0629 \u0639\u0646\u0627\u0635\u0631 \u062c\u062f\u064a\u062f\u0629.","\u062a\u0646\u0642\u0644 \u0645\u0646\u0638\u0645 \u0628\u064a\u0646 \u0635\u0641\u062d\u0627\u062a \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0648\u0623\u0642\u0633\u0627\u0645\u0647\u0627.","\u062a\u0635\u0645\u064a\u0645 \u0645\u062a\u062c\u0627\u0648\u0628 \u0645\u0639 \u0627\u0644\u0647\u0648\u0627\u062a\u0641 \u0648\u0627\u0644\u0623\u062c\u0647\u0632\u0629 \u0627\u0644\u0644\u0648\u062d\u064a\u0629 \u0648\u0627\u0644\u062d\u0648\u0627\u0633\u064a\u0628.","\u0645\u0643\u0648\u0646\u0627\u062a \u0648\u0627\u062c\u0647\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Handlebars.","\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u062a\u0646\u0633\u064a\u0642\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Sass \u0648\u0645\u0646\u0647\u062c\u064a\u062a\u064a BEM \u0648ITCSS."],"responsibilitiesIntro":"\u0646\u0641\u0630\u062a \u0627\u0644\u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u0623\u0645\u0627\u0645\u064a\u0629 \u0644\u0644\u0645\u0634\u0631\u0648\u0639 \u0628\u0646\u0641\u0633\u064a \u0636\u0645\u0646 \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u0639\u0645\u0644\u064a \u0645\u0639 \u0645\u062f\u0631\u0628 \u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u062d\u0633\u0648\u0628\u060c \u0628\u062f\u0621\u064b\u0627 \u0645\u0646 \u0628\u0646\u0627\u0621 \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0648\u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062a \u0648\u062d\u062a\u0649 \u062a\u062c\u0647\u064a\u0632 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0648\u0646\u0634\u0631\u0647.","responsibilities":["\u0628\u0646\u0627\u0621 \u0635\u0641\u062d\u0627\u062a \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0648\u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0648\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0648\u0646\u0645\u0627\u0630\u062c \u0627\u0644\u0625\u0636\u0627\u0641\u0629.","\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u064a\u0629 \u0648\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u062a\u0641\u0627\u0639\u0644 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Chart.js \u0648JavaScript.","\u062a\u0642\u0633\u064a\u0645 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a \u0625\u0644\u0649 \u0645\u0643\u0648\u0646\u0627\u062a \u0642\u0627\u0628\u0644\u0629 \u0644\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Handlebars.","\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u062a\u0646\u0633\u064a\u0642\u0627\u062a \u0627\u0644\u0645\u062a\u062c\u0627\u0648\u0628\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Sass \u0648\u062a\u0637\u0628\u064a\u0642 \u0645\u0646\u0647\u062c\u064a\u062a\u064a BEM \u0648ITCSS.","\u0625\u0639\u062f\u0627\u062f \u0628\u064a\u0626\u0629 \u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Vite \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u062d\u0632\u0645 \u0639\u0628\u0631 npm.","\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0634\u064a\u0641\u0631\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Git \u0648GitHub \u0648\u0646\u0634\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0639\u0628\u0631 GitHub Pages."],"tech_stack":["HTML5","CSS3","JavaScript","Sass (SCSS)","Handlebars","Chart.js","BEM","ITCSS","Normalize.css","PostCSS","Vite","npm","Git","GitHub","GitHub Pages"],"project_img":["control_panel4","control_panel1","control_panel5","control_panel2","control_panel6","control_panel7","control_panel3"],"demo":"https://dhomlmgyr188.github.io/control-panel-vite-project/","github":"https://github.com/dhomlmgyr188/control-panel-vite-project/"},{"id":"Ecommerce_Frontend","title":"\u0645\u062a\u062c\u0631 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a","projectType":"\u0645\u0634\u0631\u0648\u0639 \u062a\u062f\u0631\u064a\u0628\u064a \u2013 \u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u062d\u0633\u0648\u0628","developedBy":["\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631"],"developmentArea":"\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0623\u0645\u0627\u0645\u064a\u0629","date":"2026/03/31","shortDescription":"\u0645\u0648\u0642\u0639 \u0645\u062a\u062c\u0631 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0635\u0641\u062d\u0627\u062a\u060c \u0628\u0648\u0627\u062c\u0647\u0627\u062a \u062a\u0641\u0627\u0639\u0644\u064a\u0629 \u0648\u062a\u0635\u0645\u064a\u0645 \u0645\u062a\u062c\u0627\u0648\u0628\u060c \u062a\u0645 \u062a\u0637\u0648\u064a\u0631\u0647 \u0636\u0645\u0646 \u0645\u0634\u0631\u0648\u0639 \u062a\u062f\u0631\u064a\u0628\u064a \u0645\u0646 \u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u062d\u0633\u0648\u0628 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Bootstrap \u0648Sass \u0648JavaScript \u0648Webpack.","overview":"\u0645\u0634\u0631\u0648\u0639 \u062a\u062f\u0631\u064a\u0628\u064a \u0644\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u0623\u0645\u0627\u0645\u064a\u0629 \u0644\u0645\u062a\u062c\u0631 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0635\u0641\u062d\u0627\u062a\u060c \u0646\u0641\u0630\u062a\u0647 \u0628\u0646\u0641\u0633\u064a \u0628\u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0645\u0639 \u0645\u062f\u0631\u0628 \u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u062d\u0633\u0648\u0628. \u064a\u0647\u062f\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0625\u0644\u0649 \u0628\u0646\u0627\u0621 \u0648\u0627\u062c\u0647\u0627\u062a \u0645\u062a\u062c\u0631 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0645\u0646\u0638\u0645\u0629 \u0648\u0645\u062a\u062c\u0627\u0648\u0628\u0629 \u0645\u0639 \u0645\u062e\u062a\u0644\u0641 \u0627\u0644\u0623\u062c\u0647\u0632\u0629\u060c \u0645\u0639 \u062a\u0648\u0641\u064a\u0631 \u0639\u0646\u0627\u0635\u0631 \u062a\u0641\u0627\u0639\u0644\u064a\u0629 \u062a\u0633\u0647\u0651\u0644 \u0627\u0644\u062a\u0646\u0642\u0644 \u0648\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645. \u062a\u0645 \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 HTML \u0648CSS \u0648JavaScript\u060c \u0648\u0627\u0644\u0627\u0633\u062a\u0641\u0627\u062f\u0629 \u0645\u0646 Bootstrap \u0641\u064a \u0628\u0646\u0627\u0621 \u0627\u0644\u062a\u062e\u0637\u064a\u0637\u0627\u062a \u0648\u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062a\u060c \u0648Sass \u0644\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u062a\u0646\u0633\u064a\u0642\u0627\u062a \u0648\u062a\u062e\u0635\u064a\u0635\u0647\u0627\u060c \u0625\u0644\u0649 \u062c\u0627\u0646\u0628 Webpack \u0644\u0625\u062f\u0627\u0631\u0629 \u0645\u0644\u0641\u0627\u062a \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0648\u062a\u062c\u0645\u064a\u0639\u0647\u0627 \u0648\u062a\u062d\u0633\u064a\u0646\u0647\u0627.","features":["\u0645\u0648\u0642\u0639 \u0645\u062a\u062c\u0631 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0628\u0648\u0627\u062c\u0647\u0627\u062a \u0645\u0646\u0638\u0645\u0629 \u0648\u0633\u0647\u0644\u0629 \u0627\u0644\u062a\u0646\u0642\u0644.","\u062a\u0635\u0645\u064a\u0645 \u0645\u062a\u062c\u0627\u0648\u0628 \u0645\u0639 \u0627\u0644\u0647\u0648\u0627\u062a\u0641 \u0648\u0627\u0644\u0623\u062c\u0647\u0632\u0629 \u0627\u0644\u0644\u0648\u062d\u064a\u0629 \u0648\u0627\u0644\u062d\u0648\u0627\u0633\u064a\u0628.","\u062a\u062e\u0637\u064a\u0637\u0627\u062a \u0648\u0645\u0643\u0648\u0646\u0627\u062a \u062a\u0641\u0627\u0639\u0644\u064a\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Bootstrap \u0648JavaScript.","\u062a\u0646\u0633\u064a\u0642\u0627\u062a \u0645\u062e\u0635\u0635\u0629 \u0648\u0645\u0646\u0638\u0645\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Sass (SCSS).","\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Font Awesome \u0644\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0623\u064a\u0642\u0648\u0646\u0627\u062a \u0625\u0644\u0649 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a.","\u062a\u0646\u0638\u064a\u0645 \u0645\u0644\u0641\u0627\u062a \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0648\u062a\u062c\u0645\u064a\u0639\u0647\u0627 \u0648\u062a\u062d\u0633\u064a\u0646\u0647\u0627 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Webpack.","\u062f\u0639\u0645 \u062a\u0646\u0633\u064a\u0642\u0627\u062a \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0645\u0646 \u0627\u0644\u064a\u0645\u064a\u0646 \u0625\u0644\u0649 \u0627\u0644\u064a\u0633\u0627\u0631 (RTL)."],"responsibilitiesIntro":"\u0646\u0641\u0630\u062a \u0627\u0644\u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u0623\u0645\u0627\u0645\u064a\u0629 \u0644\u0644\u0645\u0634\u0631\u0648\u0639 \u0628\u0646\u0641\u0633\u064a \u0636\u0645\u0646 \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u0639\u0645\u0644\u064a \u0645\u0639 \u0645\u062f\u0631\u0628 \u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u062d\u0633\u0648\u0628\u060c \u0628\u062f\u0621\u064b\u0627 \u0645\u0646 \u0628\u0646\u0627\u0621 \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0648\u062a\u0646\u0633\u064a\u0642\u0647\u0627 \u0648\u062d\u062a\u0649 \u0627\u062e\u062a\u0628\u0627\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0648\u062a\u062c\u0647\u064a\u0632\u0647 \u0644\u0644\u0646\u0634\u0631.","responsibilities":["\u0628\u0646\u0627\u0621 \u0635\u0641\u062d\u0627\u062a \u0627\u0644\u0645\u062a\u062c\u0631 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 HTML5 \u0648CSS3 \u0648JavaScript.","\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0645\u062a\u062c\u0627\u0648\u0628\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Bootstrap \u0648\u0646\u0638\u0627\u0645 Grid.","\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u062a\u0646\u0633\u064a\u0642\u0627\u062a \u0648\u062a\u062e\u0635\u064a\u0635\u0647\u0627 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Sass (SCSS).","\u062a\u0646\u0641\u064a\u0630 \u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u062a\u0641\u0627\u0639\u0644 \u0648\u062a\u062d\u0633\u064a\u0646 \u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 JavaScript.","\u0625\u0639\u062f\u0627\u062f Webpack \u0644\u0645\u0639\u0627\u0644\u062c\u0629 \u0645\u0644\u0641\u0627\u062a HTML \u0648CSS \u0648SCSS \u0648\u062a\u062c\u0645\u064a\u0639\u0647\u0627 \u0648\u062a\u062d\u0633\u064a\u0646\u0647\u0627.","\u0627\u062e\u062a\u0628\u0627\u0631 \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0648\u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0645\u062a\u062c\u0627\u0648\u0628 \u0648\u0645\u0639\u0627\u0644\u062c\u0629 \u0645\u0634\u0643\u0644\u0627\u062a \u0627\u0644\u0648\u0627\u062c\u0647\u0629 \u0623\u062b\u0646\u0627\u0621 \u0627\u0644\u062a\u0637\u0648\u064a\u0631."],"tech_stack":["HTML5","CSS3","JavaScript","Bootstrap","Sass (SCSS)","Font Awesome","Webpack","RTL CSS","npm","GitHub","GitHub Pages"],"project_img":["online_store5","online_store1","online_store2","online_store6","online_store3","online_store8","online_store4","online_store7"],"demo":"https://dhomlmgyr188.github.io/online-store-project/","github":"https://github.com/dhomlmgyr188/online-store-project/"},{"id":"almni-school","title":"\u0645\u0648\u0642\u0639 \u0645\u062f\u0631\u0633\u0629 \u0639\u0644\u0645\u0646\u064a","projectType":"\u0645\u0634\u0631\u0648\u0639 \u0646\u0647\u0627\u0626\u064a \u2013 \u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u062d\u0633\u0648\u0628","developedBy":["\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631"],"developmentArea":"\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0623\u0645\u0627\u0645\u064a\u0629","date":"2026/03/31","shortDescription":"\u0645\u0648\u0642\u0639 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0644\u0645\u062f\u0631\u0633\u0629 \u0627\u0628\u062a\u062f\u0627\u0626\u064a\u0629\u060c \u062a\u0645 \u062a\u0637\u0648\u064a\u0631\u0647 \u0645\u0646 \u0627\u0644\u0635\u0641\u0631 \u0643\u0645\u0634\u0631\u0648\u0639 \u0646\u0647\u0627\u0626\u064a \u0644\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0634\u0647\u0627\u062f\u0629 \u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0645\u0646 \u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u062d\u0633\u0648\u0628\u060c \u0648\u0627\u062c\u062a\u064a\u0627\u0632\u0647 \u0628\u0646\u062c\u0627\u062d.","overview":"\u064a\u0647\u062f\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0625\u0644\u0649 \u0625\u0646\u0634\u0627\u0621 \u0645\u0648\u0642\u0639 \u062a\u0639\u0631\u064a\u0641\u064a \u0645\u062a\u0643\u0627\u0645\u0644 \u0644\u0645\u062f\u0631\u0633\u0629 \u0639\u0644\u0645\u0646\u064a \u0627\u0644\u0627\u0628\u062a\u062f\u0627\u0626\u064a\u0629\u060c \u064a\u0639\u0631\u0636 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u062f\u0631\u0633\u0629 \u0648\u0623\u0646\u0634\u0637\u062a\u0647\u0627 \u0648\u0637\u0644\u0627\u0628\u0647\u0627 \u0648\u0627\u0644\u0645\u062a\u0641\u0648\u0642\u064a\u0646 \u0641\u064a\u0647\u0627\u060c \u0645\u0639 \u0635\u0641\u062d\u0627\u062a \u0645\u0633\u062a\u0642\u0644\u0629 \u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0637\u0644\u0627\u0628 \u0648\u0646\u0645\u0627\u0630\u062c \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0648\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062d\u0633\u0627\u0628. \u062a\u0645 \u062a\u0646\u0641\u064a\u0630 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0628\u0634\u0643\u0644 \u0641\u0631\u062f\u064a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u062a\u0642\u0646\u064a\u0627\u062a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0623\u0645\u0627\u0645\u064a\u0629\u060c \u0645\u0639 \u0627\u0644\u0627\u0647\u062a\u0645\u0627\u0645 \u0628\u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0645\u062a\u062c\u0627\u0648\u0628 \u0648\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0648\u062a\u062d\u0633\u064a\u0646 \u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645. \u0648\u0642\u062f \u062a\u0645 \u0627\u062c\u062a\u064a\u0627\u0632 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0627\u0644\u0646\u0647\u0627\u0626\u064a \u0628\u0646\u062c\u0627\u062d \u0648\u0627\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0634\u0647\u0627\u062f\u0629 \u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0645\u0646 \u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u062d\u0633\u0648\u0628.","features":["\u0635\u0641\u062d\u0629 \u0631\u0626\u064a\u0633\u064a\u0629 \u062a\u0639\u0631\u0636 \u0627\u0644\u0645\u062f\u0631\u0633\u0629 \u0648\u0623\u0646\u0634\u0637\u062a\u0647\u0627 \u0648\u0637\u0644\u0627\u0628\u0647\u0627 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0639\u0631\u0648\u0636 \u0635\u0648\u0631 \u062a\u0641\u0627\u0639\u0644\u064a\u0629.","\u0635\u0641\u062d\u062a\u0627\u0646 \u0645\u0633\u062a\u0642\u0644\u062a\u0627\u0646 \u0644\u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u0645\u062a\u0641\u0648\u0642\u064a\u0646 \u062a\u062a\u0636\u0645\u0646\u0627\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0634\u062e\u0635\u064a\u0629 \u0648\u0627\u0644\u062f\u0631\u062c\u0627\u062a \u0648\u0627\u0644\u0646\u0635\u0627\u0626\u062d.","\u0635\u0641\u062d\u062a\u0627 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0648\u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628 \u062c\u062f\u064a\u062f \u0645\u0639 \u062d\u0642\u0648\u0644 \u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a.","\u0642\u0633\u0645 \u0644\u0644\u062a\u0648\u0627\u0635\u0644 \u064a\u0639\u0631\u0636 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0648\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u062c\u063a\u0631\u0627\u0641\u064a.","\u062a\u0635\u0645\u064a\u0645 \u0645\u062a\u062c\u0627\u0648\u0628 \u064a\u062f\u0639\u0645 \u0645\u062e\u062a\u0644\u0641 \u0623\u062d\u062c\u0627\u0645 \u0627\u0644\u0634\u0627\u0634\u0627\u062a \u0648\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0639\u0631\u0636 \u0645\u0646 \u0627\u0644\u064a\u0645\u064a\u0646 \u0625\u0644\u0649 \u0627\u0644\u064a\u0633\u0627\u0631 (RTL)."],"responsibilitiesIntro":"\u062a\u0648\u0644\u064a\u062a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0628\u0634\u0643\u0644 \u0641\u0631\u062f\u064a \u0645\u0646 \u0627\u0644\u0635\u0641\u0631\u060c \u0628\u062f\u0621\u064b\u0627 \u0645\u0646 \u0628\u0646\u0627\u0621 \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0648\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a \u0648\u062d\u062a\u0649 \u062a\u062c\u0647\u064a\u0632 \u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u0646\u0634\u0631\u0647.","responsibilities":["\u0628\u0646\u0627\u0621 \u0635\u0641\u062d\u0627\u062a \u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u0647\u064a\u0643\u0644\u062a\u0647\u0627 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 HTML \u0648JavaScript.","\u062a\u0635\u0645\u064a\u0645 \u0648\u062a\u0646\u0633\u064a\u0642 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 CSS \u0648SCSS \u0648Bootstrap.","\u062a\u0646\u0641\u064a\u0630 \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062a \u0627\u0644\u062a\u0641\u0627\u0639\u0644\u064a\u0629 \u0648\u0646\u0645\u0627\u0630\u062c \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0648\u0639\u0631\u0648\u0636 \u0627\u0644\u0635\u0648\u0631.","\u0625\u0639\u062f\u0627\u062f Webpack \u0644\u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0648\u062a\u062c\u0645\u064a\u0639\u0647\u0627 \u0648\u062a\u062d\u0633\u064a\u0646 \u0645\u062e\u0631\u062c\u0627\u062a \u0627\u0644\u0628\u0646\u0627\u0621.","\u0625\u062f\u0627\u0631\u0629 \u0625\u0635\u062f\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Git \u0648GitHub \u0648\u0646\u0634\u0631 \u0627\u0644\u0645\u0648\u0642\u0639 \u0639\u0628\u0631 GitHub Pages."],"tech_stack":["HTML5","CSS3","SCSS","JavaScript","Bootstrap","Webpack","PostCSS","Autoprefixer","RTL CSS","Git","GitHub","GitHub Pages"],"project_img":["almni_school1","almni_school3","almni_school2"],"demo":"https://dhomlmgyr188.github.io/almni-school-project/","github":"https://github.com/dhomlmgyr188/almni-school-project/"},{"id":"React_Notes_App","title":"\u062a\u0637\u0628\u064a\u0642 \u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React","projectType":"\u062a\u0637\u0628\u064a\u0642 \u0648\u064a\u0628 \u062a\u0641\u0627\u0639\u0644\u064a \u2013 \u0645\u0634\u0631\u0648\u0639 \u062a\u062f\u0631\u064a\u0628\u064a","developedBy":["\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631"],"developmentArea":"\u062a\u0637\u0648\u064a\u0631 \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u0648\u064a\u0628 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React \u0648JavaScript","date":"2026/08/30","shortDescription":"\u062a\u0637\u0628\u064a\u0642 \u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React\u060c \u064a\u062a\u064a\u062d \u0625\u0636\u0627\u0641\u062a\u0647\u0627 \u0648\u0639\u0631\u0636\u0647\u0627 \u0648\u062a\u0639\u062f\u064a\u0644\u0647\u0627 \u0648\u062d\u0630\u0641\u0647\u0627\u060c \u0645\u0639 \u062d\u0641\u0638 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0645\u062d\u0644\u064a\u064b\u0627 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Local Storage \u062f\u0648\u0646 \u0627\u0644\u062d\u0627\u062c\u0629 \u0625\u0644\u0649 \u0642\u0627\u0639\u062f\u0629 \u0628\u064a\u0627\u0646\u0627\u062a.","overview":"\u0645\u0634\u0631\u0648\u0639 \u062a\u062f\u0631\u064a\u0628\u064a \u0646\u064f\u0641\u0630 \u0636\u0645\u0646 \u0642\u0633\u0645 \u0623\u0633\u0627\u0633\u064a\u0627\u062a React.js \u0641\u064a \u062f\u0648\u0631\u0629 \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 JavaScript \u0645\u0646 \u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u062d\u0633\u0648\u0628\u060c \u0645\u0646 \u062e\u0644\u0627\u0644 \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u0639\u0645\u0644\u064a \u0645\u0639 \u0627\u0644\u0645\u062f\u0631\u0628 \u0628\u062f\u0621\u064b\u0627 \u0645\u0646 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0648\u062d\u062a\u0649 \u0627\u0643\u062a\u0645\u0627\u0644\u0647. \u064a\u0647\u062f\u0641 \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0625\u0644\u0649 \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0645\u0646 \u062e\u0644\u0627\u0644 \u0648\u0627\u062c\u0647\u0629 \u062a\u0641\u0627\u0639\u0644\u064a\u0629 \u062a\u062a\u064a\u062d \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0648\u0639\u0631\u0636 \u0645\u062d\u062a\u0648\u0627\u0647\u0627 \u0648\u062a\u0639\u062f\u064a\u0644\u0647\u0627 \u0648\u062d\u0630\u0641\u0647\u0627\u060c \u0645\u0639 \u0627\u0644\u0627\u062d\u062a\u0641\u0627\u0638 \u0628\u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0639\u0644\u0649 \u062c\u0647\u0627\u0632 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Local Storage \u062d\u062a\u0649 \u0628\u0639\u062f \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0635\u0641\u062d\u0629\u060c \u062f\u0648\u0646 \u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f \u0639\u0644\u0649 \u0642\u0627\u0639\u062f\u0629 \u0628\u064a\u0627\u0646\u0627\u062a \u062e\u0627\u0631\u062c\u064a\u0629. \u0633\u0627\u0639\u062f\u0646\u064a \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0639\u0644\u0649 \u0641\u0647\u0645 \u0623\u0633\u0627\u0633\u064a\u0627\u062a React\u060c \u0648\u0627\u0644\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062a \u0648\u0627\u0644\u062e\u0637\u0627\u0641\u0627\u062a \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u062d\u0627\u0644\u0629\u060c \u0648\u0643\u0627\u0646 \u0645\u0646 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u062a\u0639\u0644\u064a\u0645\u064a\u0629 \u0627\u0644\u062a\u064a \u0627\u0633\u062a\u0641\u062f\u062a \u0645\u0646\u0647\u0627 \u0644\u0627\u062d\u0642\u064b\u0627 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0645\u0648\u0642\u0639\u064a \u0627\u0644\u0634\u062e\u0635\u064a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React.","features":["\u0625\u0636\u0627\u0641\u0629 \u0645\u0644\u0627\u062d\u0638\u0627\u062a \u062c\u062f\u064a\u062f\u0629 \u062a\u062d\u062a\u0648\u064a \u0639\u0644\u0649 \u0639\u0646\u0648\u0627\u0646 \u0648\u0645\u062d\u062a\u0648\u0649 \u0646\u0635\u064a.","\u0639\u0631\u0636 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0648\u0627\u062e\u062a\u064a\u0627\u0631 \u0645\u0644\u0627\u062d\u0638\u0629 \u0644\u0627\u0633\u062a\u0639\u0631\u0627\u0636 \u0645\u062d\u062a\u0648\u0627\u0647\u0627.","\u062a\u0639\u062f\u064a\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0629 \u0648\u0645\u062d\u062a\u0648\u0627\u0647\u0627 \u0648\u062d\u0641\u0638 \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a.","\u062d\u0630\u0641 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629.","\u062d\u0641\u0638 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0645\u062d\u0644\u064a\u064b\u0627 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Local Storage \u062f\u0648\u0646 \u0642\u0627\u0639\u062f\u0629 \u0628\u064a\u0627\u0646\u0627\u062a \u062e\u0627\u0631\u062c\u064a\u0629.","\u0627\u0633\u062a\u0631\u062c\u0627\u0639 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0648\u0638\u0629 \u0639\u0646\u062f \u0625\u0639\u0627\u062f\u0629 \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0635\u0641\u062d\u0629.","\u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0625\u062f\u062e\u0627\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0629 \u0648\u0645\u062d\u062a\u0648\u0627\u0647\u0627 \u0642\u0628\u0644 \u0627\u0644\u062d\u0641\u0638 \u0623\u0648 \u0627\u0644\u062a\u0639\u062f\u064a\u0644.","\u0625\u0638\u0647\u0627\u0631 \u0631\u0633\u0627\u0626\u0644 \u062a\u0646\u0628\u064a\u0647 \u0639\u0646\u062f \u0648\u062c\u0648\u062f \u062d\u0642\u0648\u0644 \u0645\u0637\u0644\u0648\u0628\u0629 \u063a\u064a\u0631 \u0645\u0643\u062a\u0645\u0644\u0629.","\u062a\u0646\u0638\u064a\u0645 \u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u0643\u0648\u0646\u0627\u062a React \u0645\u0646\u0641\u0635\u0644\u0629."],"responsibilitiesIntro":"\u0646\u0641\u0630\u062a \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0628\u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u0639\u0645\u0644\u064a \u0645\u0639 \u0645\u062f\u0631\u0628 \u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u062d\u0633\u0648\u0628 \u0636\u0645\u0646 \u0642\u0633\u0645 \u0623\u0633\u0627\u0633\u064a\u0627\u062a React.js\u060c \u0648\u0634\u0627\u0631\u0643\u062a \u0641\u064a \u0628\u0646\u0627\u0621 \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u062a\u062f\u0631\u064a\u062c\u064a\u064b\u0627 \u0645\u0646 \u0627\u0644\u0628\u062f\u0627\u064a\u0629 \u062d\u062a\u0649 \u0627\u0643\u062a\u0645\u0627\u0644\u0647\u060c \u0628\u0647\u062f\u0641 \u0627\u0643\u062a\u0633\u0627\u0628 \u0627\u0644\u062e\u0628\u0631\u0629 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0641\u0627\u0639\u0644\u064a\u0629 \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React.","responsibilities":["\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u0645\u0631\u0627\u062d\u0644 \u062a\u0637\u0648\u064a\u0631\u0647 \u0639\u0645\u0644\u064a\u064b\u0627 \u0645\u0639 \u0627\u0644\u0645\u062f\u0631\u0628 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React.","\u0627\u0644\u062a\u062f\u0631\u0628 \u0639\u0644\u0649 \u062a\u0642\u0633\u064a\u0645 \u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0625\u0644\u0649 \u0645\u0643\u0648\u0646\u0627\u062a \u0645\u0633\u062a\u0642\u0644\u0629 \u0648\u0625\u0639\u0627\u062f\u0629 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0647\u0627 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Components \u0648Props.","\u062a\u0637\u0628\u064a\u0642 \u062e\u0637\u0627\u0641\u0627\u062a React \u0645\u062b\u0644 useState \u0644\u0625\u062f\u0627\u0631\u0629 \u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0648\u0627\u0644\u0645\u062f\u062e\u0644\u0627\u062a\u060c \u0648useEffect \u0644\u062a\u0646\u0641\u064a\u0630 \u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u0645\u0631\u062a\u0628\u0637\u0629 \u0628\u062f\u0648\u0631\u0629 \u062d\u064a\u0627\u0629 \u0627\u0644\u0645\u0643\u0648\u0646.","\u0627\u0644\u062a\u062f\u0631\u0628 \u0639\u0644\u0649 \u0627\u0644\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0623\u062d\u062f\u0627\u062b \u0648\u0625\u062f\u0627\u0631\u0629 \u062d\u0642\u0648\u0644 \u0627\u0644\u0625\u062f\u062e\u0627\u0644 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 JavaScript \u0648React.","\u062a\u0637\u0628\u064a\u0642 \u0639\u0645\u0644\u064a\u0627\u062a \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0648\u0639\u0631\u0636\u0647\u0627 \u0648\u062a\u0639\u062f\u064a\u0644\u0647\u0627 \u0648\u062d\u0630\u0641\u0647\u0627.","\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Local Storage \u0644\u062d\u0641\u0638 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0645\u062d\u0644\u064a\u064b\u0627 \u0648\u0627\u0633\u062a\u0631\u062c\u0627\u0639\u0647\u0627 \u0628\u0639\u062f \u0625\u0639\u0627\u062f\u0629 \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0635\u0641\u062d\u0629.","\u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u0645\u062f\u062e\u0644\u0627\u062a \u0648\u0639\u0631\u0636 \u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u0646\u0628\u064a\u0647 \u0639\u0646\u062f \u0648\u062c\u0648\u062f \u0623\u062e\u0637\u0627\u0621.","\u0627\u0644\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u062a\u0646\u0633\u064a\u0642\u0627\u062a CSS \u0648\u0623\u064a\u0642\u0648\u0646\u0627\u062a Font Awesome \u0636\u0645\u0646 \u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u062a\u0637\u0628\u064a\u0642.","\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Git \u0644\u0625\u062f\u0627\u0631\u0629 \u0625\u0635\u062f\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0648\u062a\u062a\u0628\u0639 \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a\u060c \u0648GitHub \u0644\u0627\u0633\u062a\u0636\u0627\u0641\u0629 \u0645\u0633\u062a\u0648\u062f\u0639 \u0627\u0644\u0634\u064a\u0641\u0631\u0629 \u0627\u0644\u0645\u0635\u062f\u0631\u064a\u0629 \u0648\u0625\u062f\u0627\u0631\u0629 \u062a\u062d\u062f\u064a\u062b\u0627\u062a\u0647.","\u0625\u0639\u062f\u0627\u062f \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0644\u0644\u0646\u0634\u0631 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 gh-pages \u0648\u0627\u0633\u062a\u0636\u0627\u0641\u062a\u0647 \u0639\u0644\u0649 GitHub Pages."],"tech_stack":["HTML5","CSS3","JavaScript","React","React Hooks","React Components","Local Storage","Font Awesome","Create React App","npm","Git","GitHub","GitHub Pages","gh-pages"],"project_img":["to_do_list1","to_do_list2","to_do_list3","to_do_list4"],"demo":"https://dhomlmgyr188.github.io/React-To-Do-List/","github":"https://github.com/dhomlmgyr188/React-To-Do-List"},{"id":"Portfolio_v2","title":"\u0645\u0648\u0642\u0639\u064a \u0627\u0644\u0634\u062e\u0635\u064a - \u0627\u0644\u0625\u0635\u062f\u0627\u0631 \u0627\u0644\u062b\u0627\u0646\u064a","projectType":"\u0645\u0648\u0642\u0639 \u0648\u064a\u0628 \u0634\u062e\u0635\u064a \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0635\u0641\u062d\u0627\u062a","developedBy":["\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631"],"developmentArea":"\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0623\u0645\u0627\u0645\u064a\u0629","date":"2026/05/24","shortDescription":"\u0645\u0648\u0642\u0639 \u0634\u062e\u0635\u064a \u0645\u062a\u062c\u0627\u0648\u0628 \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a.","overview":"\u0645\u0648\u0642\u0639 \u0634\u062e\u0635\u064a \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0635\u064f\u0645\u0645 \u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a\u060c \u0645\u0639 \u0627\u0644\u062a\u0631\u0643\u064a\u0632 \u0639\u0644\u0649 \u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u062a\u0646\u0642\u0644 \u0648\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0648\u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0639\u0628\u0631 \u0627\u0644\u0623\u062c\u0647\u0632\u0629 \u0627\u0644\u0645\u062e\u062a\u0644\u0641\u0629.","features":["\u062a\u0635\u0645\u064a\u0645 \u0645\u062a\u062c\u0627\u0648\u0628 \u0645\u0639 \u0645\u062e\u062a\u0644\u0641 \u0623\u062d\u062c\u0627\u0645 \u0627\u0644\u0634\u0627\u0634\u0627\u062a","\u0635\u0641\u062d\u0627\u062a \u0645\u062a\u0639\u062f\u062f\u0629 \u0644\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0645\u062d\u062a\u0648\u0649","\u0639\u0631\u0636 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639","\u062a\u0646\u0642\u0644 \u0648\u0627\u0636\u062d \u0628\u064a\u0646 \u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u0645\u0648\u0642\u0639","\u0627\u0633\u062a\u062e\u062f\u0627\u0645 JavaScript \u0644\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062a\u0641\u0627\u0639\u0644\u0627\u062a"],"responsibilitiesIntro":"\u062a\u0648\u0644\u064a\u062a \u062a\u062e\u0637\u064a\u0637 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0634\u062e\u0635\u064a \u0648\u062a\u062d\u062f\u064a\u062f \u0623\u0647\u062f\u0627\u0641\u0647 \u0648\u0647\u064a\u0643\u0644 \u0635\u0641\u062d\u0627\u062a\u0647 \u0648\u0645\u0643\u0648\u0646\u0627\u062a\u0647 \u0648\u062a\u0646\u0638\u064a\u0645 \u0645\u062d\u062a\u0648\u0627\u0647\u060c \u0645\u0639 \u0627\u0644\u0627\u0633\u062a\u0639\u0627\u0646\u0629 \u0628\u0640 ChatGPT \u0641\u064a \u062a\u0648\u0644\u064a\u062f \u0627\u0644\u0634\u064a\u0641\u0631\u0629 \u0627\u0644\u0628\u0631\u0645\u062c\u064a\u0629 \u0648\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a \u0648\u062a\u062d\u0633\u064a\u0646\u0647\u0627. \u0648\u0631\u0643\u0632\u062a \u0639\u0644\u0649 \u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0648\u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0635\u062d\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0648\u062f\u0642\u062a\u0647\u0627\u060c \u0648\u062a\u0642\u064a\u064a\u0645 \u0627\u0644\u0645\u0638\u0647\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064a \u0648\u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0648\u062a\u0648\u062d\u064a\u062f \u0627\u0644\u0647\u0648\u064a\u0629 \u0627\u0644\u0628\u0635\u0631\u064a\u0629.","responsibilities":["\u062a\u062d\u062f\u064a\u062f \u0623\u0647\u062f\u0627\u0641 \u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u0627\u0644\u062c\u0645\u0647\u0648\u0631 \u0627\u0644\u0645\u0633\u062a\u0647\u062f\u0641\u060c \u0648\u062a\u062e\u0637\u064a\u0637 \u0647\u064a\u0643\u0644 \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0648\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0648\u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062a \u0648\u062a\u0646\u0638\u064a\u0645 \u0645\u062d\u062a\u0648\u0627\u0647\u0627.","\u062a\u0648\u062c\u064a\u0647 \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0648\u0642\u0639 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React \u0648\u062a\u0642\u0633\u064a\u0645\u0647 \u0625\u0644\u0649 \u0645\u0643\u0648\u0646\u0627\u062a \u0642\u0627\u0628\u0644\u0629 \u0644\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645\u060c \u0645\u0639 \u0627\u0644\u0627\u0633\u062a\u0639\u0627\u0646\u0629 \u0628\u0640 ChatGPT \u0641\u064a \u062a\u0648\u0644\u064a\u062f \u0627\u0644\u0634\u064a\u0641\u0631\u0629 \u0627\u0644\u0628\u0631\u0645\u062c\u064a\u0629 \u0648\u062a\u062d\u0633\u064a\u0646 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a.","\u062a\u062d\u062f\u064a\u062f \u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u062a\u0646\u0642\u0644 \u0628\u064a\u0646 \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React Router\u060c \u0648\u062f\u0639\u0645 \u0627\u0644\u0644\u063a\u062a\u064a\u0646 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0648\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 i18next.","\u062a\u062d\u062f\u064a\u062f \u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0645\u0638\u0647\u0631\u064a\u0646 \u0627\u0644\u0641\u0627\u062a\u062d \u0648\u0627\u0644\u062f\u0627\u0643\u0646 \u0648\u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0645\u062a\u062c\u0627\u0648\u0628\u060c \u0645\u0639 \u062a\u0648\u062d\u064a\u062f \u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0648\u0627\u0644\u062e\u0637\u0648\u0637 \u0648\u0627\u0644\u0623\u0632\u0631\u0627\u0631 \u0648\u0627\u0644\u062a\u0646\u0633\u064a\u0642\u0627\u062a \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u0644\u0645\u0648\u0642\u0639.","\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u062a\u0641\u0627\u0635\u064a\u0644\u0647\u0627 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 JSON\u060c \u0648\u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0648\u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0635\u062d\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0648\u062f\u0642\u062a\u0647\u0627 \u0648\u0648\u0636\u0648\u062d\u0647\u0627.","\u062a\u062d\u062f\u064a\u062f \u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0648\u0625\u0631\u0641\u0627\u0642 \u0627\u0644\u0645\u0644\u0641\u0627\u062a\u060c \u0648\u062a\u0648\u062c\u064a\u0647 \u062a\u0643\u0627\u0645\u0644\u0647 \u0645\u0639 Supabase \u0648Cloudflare Turnstile \u0644\u0644\u062a\u062d\u0642\u0642 \u0627\u0644\u0623\u0645\u0646\u064a.","\u062a\u0642\u064a\u064a\u0645 \u0627\u0644\u0645\u0638\u0647\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064a \u0644\u0644\u0645\u0648\u0642\u0639 \u0648\u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u060c \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u062a\u062d\u0633\u064a\u0646 \u0639\u0631\u0636 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0648\u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u062a\u0646\u0642\u0644 \u0648\u062a\u0646\u0627\u0633\u0642 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a.","\u0625\u062f\u0627\u0631\u0629 \u0645\u0644\u0641\u0627\u062a \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Git \u0648GitHub \u0648\u0646\u0634\u0631 \u0627\u0644\u0645\u0648\u0642\u0639 \u0639\u0628\u0631 GitHub Pages \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 gh-pages."],"tech_stack":["HTML5","CSS3","JavaScript","AOS","Font Awesome","Fetch API","JSON","BEM","Vite","npm","Git","GitHub","GitHub Pages","gh-pages","Render"],"project_img":["portfolio_v2_2","portfolio_v2_4","portfolio_v2_3","portfolio_v2_5","portfolio_v2_1"],"demo":"https://dhomlmgyr188.github.io/abdulrahman-portfolio-static/","github":"https://github.com/dhomlmgyr188/abdulrahman-portfolio-static/"},{"id":"Portfolio_v1","title":"\u0645\u0648\u0642\u0639\u064a \u0627\u0644\u0634\u062e\u0635\u064a \u2013 \u0627\u0644\u0625\u0635\u062f\u0627\u0631 \u0627\u0644\u0623\u0648\u0644","projectType":"\u0645\u0648\u0642\u0639 \u0634\u062e\u0635\u064a \u0645\u0633\u062a\u0642\u0644","developedBy":["\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631"],"developmentArea":"\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0623\u0645\u0627\u0645\u064a\u0629","date":"2026/04/15","shortDescription":"\u0627\u0644\u0625\u0635\u062f\u0627\u0631 \u0627\u0644\u0623\u0648\u0644 \u0645\u0646 \u0645\u0648\u0642\u0639\u064a \u0627\u0644\u0634\u062e\u0635\u064a\u060c \u0637\u0648\u0631\u062a\u0647 \u0628\u0634\u0643\u0644 \u0645\u0633\u062a\u0642\u0644 \u0645\u0646 \u0627\u0644\u0635\u0641\u0631 \u0644\u0639\u0631\u0636 \u0645\u0639\u0644\u0648\u0645\u0627\u062a\u064a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0648\u0645\u0634\u0627\u0631\u064a\u0639\u064a\u060c \u0628\u062a\u0635\u0645\u064a\u0645 \u0623\u062d\u0627\u062f\u064a \u0627\u0644\u0635\u0641\u062d\u0629 \u0648\u0645\u062a\u062c\u0627\u0648\u0628 \u0645\u0639 \u0645\u062e\u062a\u0644\u0641 \u0627\u0644\u0623\u062c\u0647\u0632\u0629.","overview":"\u0645\u0634\u0631\u0648\u0639 \u0634\u062e\u0635\u064a \u0645\u0633\u062a\u0642\u0644 \u0637\u0648\u0631\u062a\u0647 \u0645\u0646 \u0627\u0644\u0635\u0641\u0631 \u0628\u0647\u062f\u0641 \u0639\u0631\u0636 \u0645\u0639\u0644\u0648\u0645\u0627\u062a\u064a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0648\u0645\u0634\u0627\u0631\u064a\u0639\u064a\u060c \u0648\u062a\u0637\u0628\u064a\u0642 \u0645\u0647\u0627\u0631\u0627\u062a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0623\u0645\u0627\u0645\u064a\u0629 \u0639\u0645\u0644\u064a\u064b\u0627. \u064a\u0639\u062a\u0645\u062f \u0627\u0644\u0645\u0648\u0642\u0639 \u0639\u0644\u0649 \u062a\u0635\u0645\u064a\u0645 \u0623\u062d\u0627\u062f\u064a \u0627\u0644\u0635\u0641\u062d\u0629 \u064a\u062a\u064a\u062d \u0627\u0644\u062a\u0646\u0642\u0644 \u0628\u064a\u0646 \u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0628\u0633\u0644\u0627\u0633\u0629\u060c \u0645\u0639 \u0648\u0627\u062c\u0647\u0627\u062a \u0645\u062a\u062c\u0627\u0648\u0628\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Bootstrap \u0648\u062a\u0641\u0627\u0639\u0644\u0627\u062a JavaScript. \u062a\u0645 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 Handlebars \u0644\u0628\u0646\u0627\u0621 \u0645\u0643\u0648\u0646\u0627\u062a \u0642\u0627\u0628\u0644\u0629 \u0644\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645\u060c \u0648Sass \u0644\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u062a\u0646\u0633\u064a\u0642\u0627\u062a \u0648\u0641\u0642 \u0645\u0646\u0647\u062c\u064a\u062a\u064a BEM \u0648ITCSS\u060c \u0625\u0644\u0649 \u062c\u0627\u0646\u0628 Vite \u0644\u0625\u062f\u0627\u0631\u0629 \u0628\u064a\u0626\u0629 \u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0648\u0628\u0646\u0627\u0621 \u0627\u0644\u0645\u0634\u0631\u0648\u0639.","features":["\u0635\u0641\u062d\u0629 \u0634\u062e\u0635\u064a\u0629 \u062a\u0639\u0631\u0636 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639.","\u062a\u0635\u0645\u064a\u0645 \u0645\u062a\u062c\u0627\u0648\u0628 \u0645\u0639 \u0627\u0644\u0647\u0648\u0627\u062a\u0641 \u0648\u0627\u0644\u0623\u062c\u0647\u0632\u0629 \u0627\u0644\u0644\u0648\u062d\u064a\u0629 \u0648\u0627\u0644\u062d\u0648\u0627\u0633\u064a\u0628.","\u062a\u0646\u0642\u0644 \u0633\u0644\u0633 \u0628\u064a\u0646 \u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u0635\u0641\u062d\u0629 \u0648\u0639\u0646\u0627\u0635\u0631 \u062a\u0641\u0627\u0639\u0644\u064a\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 JavaScript \u0648Bootstrap.","\u0646\u0645\u0648\u0630\u062c \u062a\u0648\u0627\u0635\u0644 \u0645\u0631\u062a\u0628\u0637 \u0628\u062e\u062f\u0645\u0629 Formspree \u0644\u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0626\u0644.","\u0645\u0643\u0648\u0646\u0627\u062a \u0642\u0627\u0628\u0644\u0629 \u0644\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Handlebars.","\u062a\u0646\u0633\u064a\u0642\u0627\u062a \u0645\u0646\u0638\u0645\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Sass \u0648\u0645\u0646\u0647\u062c\u064a\u062a\u064a BEM \u0648ITCSS."],"responsibilitiesIntro":"\u062a\u0648\u0644\u064a\u062a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0648\u0642\u0639 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0628\u0634\u0643\u0644 \u0645\u0633\u062a\u0642\u0644 \u0645\u0646 \u0627\u0644\u0635\u0641\u0631\u060c \u0628\u062f\u0621\u064b\u0627 \u0645\u0646 \u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a \u0648\u0628\u0646\u0627\u0621 \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062a \u0648\u062d\u062a\u0649 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062a\u0641\u0627\u0639\u0644\u0627\u062a \u0648\u0627\u062e\u062a\u0628\u0627\u0631 \u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u0646\u0634\u0631\u0647.","responsibilities":["\u0628\u0646\u0627\u0621 \u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u0647\u064a\u0643\u0644\u0629 \u0623\u0642\u0633\u0627\u0645\u0647 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 HTML5 \u0648JavaScript.","\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0645\u062a\u062c\u0627\u0648\u0628\u0629 \u0648\u0645\u0643\u0648\u0646\u0627\u062a \u062a\u0641\u0627\u0639\u0644\u064a\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Bootstrap.","\u0625\u0646\u0634\u0627\u0621 \u0645\u0643\u0648\u0646\u0627\u062a \u0645\u0634\u062a\u0631\u0643\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Handlebars.","\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u062a\u0646\u0633\u064a\u0642\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Sass \u0648\u062a\u0637\u0628\u064a\u0642 \u0645\u0646\u0647\u062c\u064a\u062a\u064a BEM \u0648ITCSS.","\u0631\u0628\u0637 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0628\u062e\u062f\u0645\u0629 Formspree \u0644\u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0626\u0644.","\u0625\u0639\u062f\u0627\u062f \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Vite \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0634\u064a\u0641\u0631\u0629 \u0639\u0628\u0631 Git \u0648GitHub \u0648\u0646\u0634\u0631 \u0627\u0644\u0645\u0648\u0642\u0639 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Vercel."],"tech_stack":["HTML5","CSS3","JavaScript","Bootstrap","Sass (SCSS)","Handlebars","BEM","ITCSS","Font Awesome","Formspree","Vite","npm","Git","GitHub","Vercel"],"project_img":["portfolio_v1_1","portfolio_v1_3","portfolio_v1_2"],"demo":"https://abdulrahman-portfolio-dusky.vercel.app/","github":"https://github.com/dhomlmgyr188/abdulrahman-portfolio/"}]}'),Hf=JSON.parse('{"pageTitle":"My Projects","pageDesc":"A collection of projects I have worked on, showcasing my technical skills and experience in designing and developing websites and web interfaces.","section":{"title":"My Projects","description":"Explore my web development projects and learn about each project\u2019s goals, features, technologies, and my role in its development."},"details":{"gallery":"Project Gallery","projectName":"Project Name","projectType":"Project Type","developedBy":"Developed By","developmentArea":"Development Area","date":"Completion Date","overview":"Project Overview","features":"Project Features","responsibilities":"My Responsibilities","technologies":"Technologies and Tools Used","liveDemo":"Live Demo","sourceCode":"Source Code","backToProjects":"Back to Projects","notFound":"Project Not Found","notFoundDescription":"The requested project could not be found.","enlargeImage":"Enlarge Image","closeImage":"Close Image","previousImage":"Previous Image","nextImage":"Next Image","noImages":"No project images are currently available","plannedFeature":"Planned Feature"},"items":[{"id":"Portfolio_v3","title":"My Personal Portfolio \u2013 Version 3","projectType":"Multi-page Personal Website \u2013 Independent Project","developedBy":["Abdulrahman Al-Mughyir"],"developmentArea":"Front-End Development with React","date":"","shortDescription":"A multi-page personal portfolio built with React to showcase my professional background, skills, and projects, featuring Arabic and English support, light and dark themes, and an advanced contact form.","overview":"The third and current version of my personal portfolio, created to present my professional identity and showcase my skills and projects to recruiters and potential clients. The website uses React to build reusable components and enables navigation between pages without full page reloads. It supports Arabic and English, as well as light and dark themes. It includes pages for my professional profile, projects, project details, and contact information, along with a contact form that supports file attachments, Cloudflare Turnstile security verification, and Supabase integration. I planned the website structure and requirements and developed the project with the assistance of AI tools to improve the code, design, and user experience, while maintaining a consistent visual identity and responsiveness across devices.","features":["A multi-page website presenting my professional background, skills, projects, and project details.","A homepage featuring an introduction, services, featured projects, and calls to action.","Arabic and English language support with RTL and LTR layouts.","Light and dark theme switching with consistent colors and styling.","Responsive design for phones, tablets, and desktop computers.","Seamless navigation using React Router without full page reloads.","Dedicated project detail pages displaying descriptions, features, technologies, and links.","A contact form with input validation, file attachments, Supabase integration, and Cloudflare Turnstile verification."],"responsibilitiesIntro":"I planned the portfolio website, defined its goals, page structure, components, and content, and used ChatGPT to assist with code generation, interface development, and improvements. I focused on reviewing the content, final results, user experience, and visual consistency.","responsibilities":["Defined the website concept, objectives, and target audience of recruiters and potential clients.","Planned the website structure, pages, sections, design requirements, and functionality.","Organized professional content and project information using JSON.","Guided the development of React interfaces and components with ChatGPT assistance.","Specified multilingual support, light and dark themes, and responsive design requirements.","Defined requirements for the contact form, attachments, security verification, and external service integrations.","Reviewed the displayed content and interfaces and guided improvements for a consistent user experience.","Managed project files using Git and GitHub and deployed the website through GitHub Pages."],"tech_stack":["HTML5","CSS3","JavaScript","React","React Router","Styled Components","i18next","JSON","React Icons","Supabase","Supabase Edge Functions","Cloudflare Turnstile","npm","Git","GitHub","GitHub Pages"],"project_img":["portfolio_v3_1","portfolio_v3_2","portfolio_v3_3","portfolio_v3_4","portfolio_v3_5","portfolio_v3_6","portfolio_v3_7","portfolio_v3_8"],"demo":"https://dhomlmgyr188.github.io/abdulrahman-portfolio-react/","github":"https://github.com/dhomlmgyr188/abdulrahman-portfolio-react"},{"id":"freelancer-hub","title":"Freelancer Hub","projectType":"Academic Graduation Project \u2013 Freelance Marketplace","developedBy":["Abdulrahman Al-Mughyir","Hatem Al-Juhani","Hisham Al-Harbi","Imad Al-Juhani","Mohammed Jablawi","Omar Al-Balawi"],"developmentArea":"Full-Stack Web Development","date":"2026/01/19","shortDescription":"A freelance marketplace connecting freelancers with project owners, offering account, project, and professional profile management, along with an administrative dashboard and role-based permissions.","overview":"A team graduation project completed as part of the Full-Stack Web Development diploma at the Applied College, Taibah University. The platform aims to connect freelancers with project owners. It supports three account types\u2014freelancer, project owner, and administrator\u2014with different permissions for managing profiles, projects, searching, and filtering. An administrative dashboard provides statistics and tools to manage users, projects, categories, and skills, review project publication requests, and view transaction records. The project was developed using HTML, CSS, JavaScript, PHP, and MySQL. Some features are planned for future completion, particularly the bidding system.","features":[{"title":"Accounts and Profiles","items":["Register and sign in with different permissions for freelancers, project owners, and administrators.","Manage freelancer professional profiles and display skills, experience, and portfolio samples."]},{"title":"Project Management and Search","items":["Create, view, edit, and delete projects from a project owner account.","Search and filter projects, and search for freelancers by name or skill."]},{"title":"Administrator Dashboard","items":["View user, project, and transaction statistics.","Manage users, projects, categories, and skills.","Review project publication requests and approve or reject them."]},{"title":"Transaction Records","items":["View transaction records and statuses according to user permissions."],"note":"Records within the system only; no actual financial payments are processed."},{"title":"Bidding System \u2013 Future Development","status":"planned","items":["Submit bids on projects and manage their statuses."],"note":"Related interfaces and database structures exist, but the operational features have not been completed."}],"responsibilitiesIntro":"I worked with a six-member team on project analysis and development, focusing on front-end interfaces while contributing to back-end functionality, database work, component integration, and testing.","responsibilities":["Researched competing platforms, analyzed requirements, and prepared and formatted project documentation.","Developed substantial portions of the front-end interfaces using HTML, CSS, and JavaScript.","Contributed to PHP functionality and its integration with the MySQL database.","Participated in database design, CRUD operations, and user session management.","Connected front-end interfaces to back-end functionality and verified data flow.","Tested system features, fixed issues, and collaborated with teammates to integrate their work."],"tech_stack":["HTML5","CSS3","JavaScript","PHP","MySQL","AJAX","PHP Sessions","Swiper.js","Animate.css","Font Awesome","Apache","XAMPP","phpMyAdmin"],"project_img":["freelancer_hub2","freelancer_hub7","freelancer_hub8","freelancer_hub14","freelancer_hub1","freelancer_hub3","freelancer_hub11","freelancer_hub9","freelancer_hub5","freelancer_hub13","freelancer_hub4","freelancer_hub6","freelancer_hub10","freelancer_hub12"],"demo":"","github":"https://github.com/dhomlmgyr188/freelancer-hub"},{"id":"rest-api-wordpress","title":"WordPress Management Dashboard with REST API","projectType":"Academic Project \u2013 Content Management Systems","developedBy":["Abdulrahman Al-Mughyir","Hisham Al-Sharif","Waleed Al-Omari","Hisham Al-Harbi","Saleh Salem"],"developmentArea":"Web Development and API Integration","date":"2026/01/19","shortDescription":"A dashboard for managing WordPress users and posts through the REST API, supporting viewing, creating, editing, and deleting records, with authentication using application passwords.","overview":"A team academic project for the Content Management Systems course at Taibah University. The project involved building an external dashboard to manage WordPress users and posts through the REST API. The dashboard connects to a WordPress site using credentials and an application password, performs CRUD operations, manages user roles and post statuses, and displays success and error messages. Functionality was developed using JavaScript and the Fetch API, while interfaces were styled with HTML and Tailwind CSS. The team also prepared academic documentation and a presentation and received full marks.","features":["Connect to a WordPress site and validate credentials using Application Passwords.","A dashboard with separate sections for managing users and posts.","View, create, edit, and delete users, with role management and filtering.","View, create, edit, and delete posts, with filtering by publication status.","Perform CRUD operations through the WordPress REST API using the Fetch API.","Check connection status, display success and error messages, and redirect when connection details are missing."],"responsibilitiesIntro":"I worked in a five-member team and took a major role in programming the functionality and integrating the WordPress REST API. I also prepared and formatted the academic documentation and presentation in collaboration with the team.","responsibilities":["Developed the functional code connecting the dashboard to the WordPress REST API using JavaScript and the Fetch API.","Implemented CRUD operations for users and posts.","Programmed authentication using Application Passwords and handled API responses and errors.","Helped integrate the functionality with interfaces designed by a teammate using Tailwind CSS.","Prepared and formatted the project documentation in Word and the presentation in PowerPoint.","Tested project functionality and resolved issues in collaboration with the team."],"tech_stack":["HTML5","CSS3","JavaScript","Tailwind CSS","WordPress","WordPress REST API","Fetch API","JSON","HTTP Basic Authentication","Application Passwords"],"project_img":["rest_api_wordpress1","rest_api_wordpress5","rest_api_wordpress2","rest_api_wordpress4","rest_api_wordpress3","rest_api_wordpress6"],"demo":"","github":"https://github.com/dhomlmgyr188/rest-api-wordpress-project"},{"id":"Ecommerce_Admin_Dashboard","title":"E-Commerce Admin Dashboard","projectType":"Training Project \u2013 Hsoub Academy","developedBy":["Abdulrahman Al-Mughyir"],"developmentArea":"Front-End Development","date":"2026/03/31","shortDescription":"A multi-page e-commerce administration dashboard featuring sales statistics and product and user management interfaces, developed as part of a Hsoub Academy training project.","overview":"A training project focused on building the front-end interface of an e-commerce admin dashboard, which I implemented through hands-on practice alongside a Hsoub Academy instructor. The project includes product and user listing pages, forms for adding new items, and a main dashboard with sales statistics and charts built with Chart.js. The interfaces use reusable Handlebars components, Sass styles organized according to BEM and ITCSS, and Vite for development and builds, with responsive layouts for different devices.","features":["A main dashboard displaying store statistics and sales indicators with interactive charts.","Pages for products and users, with forms for adding new records.","Organized navigation between dashboard pages and sections.","Responsive design for phones, tablets, and desktop computers.","Reusable interface components built with Handlebars.","Sass styles organized using BEM and ITCSS methodologies."],"responsibilitiesIntro":"I implemented the project\u2019s front-end through hands-on practice with a Hsoub Academy instructor, from building pages and components to preparing and deploying the project.","responsibilities":["Built dashboard pages, product and user interfaces, and add-item forms.","Developed charts and interactive elements using Chart.js and JavaScript.","Split interfaces into reusable components with Handlebars.","Created responsive styles with Sass and applied BEM and ITCSS methodologies.","Configured the development environment using Vite and managed packages with npm.","Managed source code using Git and GitHub and deployed the project to GitHub Pages."],"tech_stack":["HTML5","CSS3","JavaScript","Sass (SCSS)","Handlebars","Chart.js","BEM","ITCSS","Normalize.css","PostCSS","Vite","npm","Git","GitHub","GitHub Pages"],"project_img":["control_panel4","control_panel1","control_panel5","control_panel2","control_panel6","control_panel7","control_panel3"],"demo":"https://dhomlmgyr188.github.io/control-panel-vite-project/","github":"https://github.com/dhomlmgyr188/control-panel-vite-project/"},{"id":"Ecommerce_Frontend","title":"E-Commerce Storefront","projectType":"Training Project \u2013 Hsoub Academy","developedBy":["Abdulrahman Al-Mughyir"],"developmentArea":"Front-End Development","date":"2026/03/31","shortDescription":"A responsive, interactive multi-page e-commerce storefront developed during a Hsoub Academy training project using Bootstrap, Sass, JavaScript, and Webpack.","overview":"A front-end training project for a multi-page e-commerce store, completed through hands-on practice with a Hsoub Academy instructor. The goal was to create organized, responsive storefront interfaces with interactive elements that make navigation and use easier. The pages were developed using HTML, CSS, and JavaScript, with Bootstrap for layouts and components, Sass for organizing and customizing styles, and Webpack for managing, bundling, and optimizing project files.","features":["A multi-page e-commerce website with organized, easy-to-navigate interfaces.","Responsive design for phones, tablets, and desktop computers.","Interactive layouts and components built with Bootstrap and JavaScript.","Custom, organized styling with Sass (SCSS).","Font Awesome icons integrated into the interfaces.","Project files bundled and optimized with Webpack.","Support for right-to-left (RTL) styling."],"responsibilitiesIntro":"I implemented the project\u2019s front-end through hands-on practice with a Hsoub Academy instructor, from building and styling pages to testing and preparing the project for deployment.","responsibilities":["Built storefront pages using HTML5, CSS3, and JavaScript.","Developed responsive interfaces using Bootstrap and its grid system.","Organized and customized styles using Sass (SCSS).","Implemented interactive elements and improved the user experience with JavaScript.","Configured Webpack to process, bundle, and optimize HTML, CSS, and SCSS files.","Tested pages and responsive layouts and resolved interface issues during development."],"tech_stack":["HTML5","CSS3","JavaScript","Bootstrap","Sass (SCSS)","Font Awesome","Webpack","RTL CSS","npm","GitHub","GitHub Pages"],"project_img":["online_store5","online_store1","online_store2","online_store6","online_store3","online_store8","online_store4","online_store7"],"demo":"https://dhomlmgyr188.github.io/online-store-project/","github":"https://github.com/dhomlmgyr188/online-store-project/"},{"id":"almni-school","title":"Almni Elementary School Website","projectType":"Final Project \u2013 Hsoub Academy","developedBy":["Abdulrahman Al-Mughyir"],"developmentArea":"Front-End Development","date":"2026/03/31","shortDescription":"A multi-page website for an elementary school, independently developed from scratch as the final project for Hsoub Academy\u2019s Front-End Development certificate, which I successfully passed.","overview":"This project aimed to build a complete informational website for Almni Elementary School, featuring school information, activities, students, and high achievers, as well as individual student detail pages and login and registration forms. I independently developed the project from scratch using front-end technologies, with a focus on responsive design, file organization, and user experience. I successfully passed the final project and earned Hsoub Academy\u2019s Front-End Development certificate.","features":["A homepage featuring the school, its activities, and students through interactive image sliders.","Two dedicated pages for high-achieving students, including personal information, grades, and advice.","Login and account registration pages with input forms.","A contact section with contact details and location information.","Responsive design supporting various screen sizes and right-to-left (RTL) layouts."],"responsibilitiesIntro":"I independently developed the entire project from scratch, from building pages and designing interfaces to preparing and deploying the website.","responsibilities":["Built and structured website pages using HTML and JavaScript.","Designed and styled interfaces using CSS, SCSS, and Bootstrap.","Implemented interactive components, user forms, and image sliders.","Configured Webpack to process, bundle, and optimize build outputs.","Managed project versions using Git and GitHub and deployed the website to GitHub Pages."],"tech_stack":["HTML5","CSS3","SCSS","JavaScript","Bootstrap","Webpack","PostCSS","Autoprefixer","RTL CSS","Git","GitHub","GitHub Pages"],"project_img":["almni_school1","almni_school3","almni_school2"],"demo":"https://dhomlmgyr188.github.io/almni-school-project/","github":"https://github.com/dhomlmgyr188/almni-school-project/"},{"id":"React_Notes_App","title":"Notes App with React","projectType":"Interactive Web Application \u2013 Training Project","developedBy":["Abdulrahman Al-Mughyir"],"developmentArea":"Web Application Development with React and JavaScript","date":"2026/08/30","shortDescription":"A React notes management app that lets users create, view, edit, and delete notes, storing data locally with Local Storage without requiring a database.","overview":"A training project completed as part of the React.js Fundamentals section of Hsoub Academy\u2019s JavaScript Application Development course, through hands-on practice with the instructor from project setup to completion. The app allows users to create, view, edit, and delete notes, and stores their data on the user\u2019s device with Local Storage so it persists after refreshing the page, without an external database. The project helped me understand React fundamentals, components, hooks, and state management, and provided knowledge I later applied when developing my React portfolio.","features":["Create new notes with a title and text content.","Display a list of notes and select a note to view its contents.","Edit note titles and contents and save changes.","Delete notes from the list.","Store notes locally with Local Storage without an external database.","Restore saved notes after reloading the page.","Validate note titles and contents before saving or updating.","Display alerts when required fields are incomplete.","Organize the application interface into separate React components."],"responsibilitiesIntro":"I implemented the project through hands-on practice with a Hsoub Academy instructor as part of the React.js Fundamentals section, building the app step by step to gain experience with interactive React applications and data management.","responsibilities":["Set up the project and followed its development stages through hands-on practice with the instructor using React.","Practiced dividing the interface into independent, reusable components using Components and Props.","Applied React hooks such as useState for managing notes and input state, and useEffect for component lifecycle-related operations.","Practiced handling events and input fields with JavaScript and React.","Implemented note creation, viewing, editing, and deletion.","Used Local Storage to save and restore data after page reloads.","Implemented input validation and alerts for errors.","Worked with CSS styling and Font Awesome icons in the application interface.","Used Git for version control and tracking changes, and GitHub for hosting the source repository and managing updates.","Prepared the project for deployment using gh-pages and hosted it on GitHub Pages."],"tech_stack":["HTML5","CSS3","JavaScript","React","React Hooks","React Components","Local Storage","Font Awesome","Create React App","npm","Git","GitHub","GitHub Pages","gh-pages"],"project_img":["to_do_list1","to_do_list2","to_do_list3","to_do_list4"],"demo":"https://dhomlmgyr188.github.io/React-To-Do-List/","github":"https://github.com/dhomlmgyr188/React-To-Do-List"},{"id":"Portfolio_v2","title":"My Personal Portfolio \u2013 Version 2","projectType":"Multi-page Personal Website","developedBy":["Abdulrahman Al-Mughyir"],"developmentArea":"Front-End Development","date":"2026/05/24","shortDescription":"A responsive, multi-page personal website showcasing professional information, projects, and services.","overview":"A multi-page personal website designed to present professional information, skills, projects, and services, with an emphasis on intuitive navigation, well-organized content, and user experience across different devices.","features":["Responsive design across different screen sizes.","Multiple pages for organizing content.","Presentation of professional information and projects.","Clear navigation between website sections.","Interactive functionality implemented with JavaScript."],"responsibilitiesIntro":"I planned the personal website, defined its goals, page structure, components, and content, and used ChatGPT to assist with code generation, interface development, and improvements. I focused on reviewing content accuracy, evaluating the final design and user experience, and maintaining a consistent visual identity.","responsibilities":["Defined website objectives and target audience, and planned the pages, sections, components, and content structure.","Guided React development and reusable component architecture, using ChatGPT to assist with code generation and interface improvements.","Specified navigation requirements using React Router and bilingual Arabic-English support using i18next.","Defined light and dark themes and responsive design requirements, including consistent colors, fonts, buttons, and global styles.","Organized professional information and project details using JSON, and reviewed the content for accuracy and clarity.","Specified contact form and file attachment requirements, and guided integration with Supabase and Cloudflare Turnstile for security verification.","Evaluated the final appearance and user experience, and guided improvements to content presentation, navigation, and interface consistency.","Managed project files with Git and GitHub and deployed the website to GitHub Pages using gh-pages."],"tech_stack":["HTML5","CSS3","JavaScript","AOS","Font Awesome","Fetch API","JSON","BEM","Vite","npm","Git","GitHub","GitHub Pages","gh-pages","Render"],"project_img":["portfolio_v2_2","portfolio_v2_4","portfolio_v2_3","portfolio_v2_5","portfolio_v2_1"],"demo":"https://dhomlmgyr188.github.io/abdulrahman-portfolio-static/","github":"https://github.com/dhomlmgyr188/abdulrahman-portfolio-static/"},{"id":"Portfolio_v1","title":"My Personal Portfolio \u2013 Version 1","projectType":"Independent Personal Website","developedBy":["Abdulrahman Al-Mughyir"],"developmentArea":"Front-End Development","date":"2026/04/15","shortDescription":"The first version of my personal portfolio, independently developed from scratch to showcase my professional information, skills, and projects in a responsive single-page layout.","overview":"An independent personal project I developed from scratch to present my professional information, skills, and projects and apply my front-end development skills in practice. The website uses a single-page design with smooth navigation between sections, responsive Bootstrap layouts, and JavaScript interactions. Handlebars was used to create reusable components, Sass to organize styles according to BEM and ITCSS, and Vite for development and builds.","features":["A personal webpage presenting professional information, skills, and projects.","Responsive design for phones, tablets, and desktop computers.","Smooth navigation between page sections and interactive elements using JavaScript and Bootstrap.","A contact form integrated with Formspree to receive messages.","Reusable components built with Handlebars.","Styles organized with Sass and BEM and ITCSS methodologies."],"responsibilitiesIntro":"I independently developed the entire website from scratch, from interface design and component development to adding interactions, testing, and deployment.","responsibilities":["Built and structured website sections using HTML5 and JavaScript.","Developed responsive interfaces and interactive components with Bootstrap.","Created reusable shared components using Handlebars.","Organized styles using Sass and applied BEM and ITCSS methodologies.","Integrated the contact form with Formspree to receive messages.","Configured the project with Vite, managed source code using Git and GitHub, and deployed the website to Vercel."],"tech_stack":["HTML5","CSS3","JavaScript","Bootstrap","Sass (SCSS)","Handlebars","BEM","ITCSS","Font Awesome","Formspree","Vite","npm","Git","GitHub","Vercel"],"project_img":["portfolio_v1_1","portfolio_v1_3","portfolio_v1_2"],"demo":"https://abdulrahman-portfolio-dusky.vercel.app/","github":"https://github.com/dhomlmgyr188/abdulrahman-portfolio/"}]}'),Bf={ar:{home:{title:"\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u063a\u064a\u0631 | \u0645\u0637\u0648\u0631 \u0648\u064a\u0628 \u2013 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0634\u062e\u0635\u064a",description:"\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0634\u062e\u0635\u064a \u0644\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u063a\u064a\u0631\u060c \u062e\u0631\u064a\u062c \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644 \u0645\u0646 \u062c\u0627\u0645\u0639\u0629 \u0637\u064a\u0628\u0629. \u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0645\u0647\u0627\u0631\u0627\u062a\u0647 \u0648\u062e\u0628\u0631\u0627\u062a\u0647 \u0648\u0645\u0634\u0627\u0631\u064a\u0639\u0647 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0648\u0627\u0644\u062d\u0644\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064a\u0629."},about:{title:"\u0639\u0646 \u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631 | \u0627\u0644\u0645\u0624\u0647\u0644\u0627\u062a \u0648\u0627\u0644\u062e\u0628\u0631\u0627\u062a",description:"\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u063a\u064a\u0631\u060c \u0645\u0624\u0647\u0644\u0627\u062a\u0647 \u0627\u0644\u0639\u0644\u0645\u064a\u0629 \u0648\u062e\u0628\u0631\u0627\u062a\u0647 \u0627\u0644\u0639\u0645\u0644\u064a\u0629 \u0648\u0645\u0647\u0627\u0631\u0627\u062a\u0647 \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0648\u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629 \u0648\u0634\u0647\u0627\u062f\u0627\u062a\u0647 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0648\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a."},projects:{title:"\u0645\u0634\u0627\u0631\u064a\u0639 \u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631 | \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628",description:"\u0627\u0633\u062a\u0639\u0631\u0636 \u0645\u0634\u0627\u0631\u064a\u0639 \u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628\u060c \u0628\u0645\u0627 \u0641\u064a\u0647\u0627 \u0645\u0648\u0627\u0642\u0639 React \u0648\u0627\u0644\u0645\u062a\u0627\u062c\u0631 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629 \u0648\u0644\u0648\u062d\u0627\u062a \u0627\u0644\u062a\u062d\u0643\u0645 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629."},contact:{title:"\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631 | \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0634\u062e\u0635\u064a",description:"\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u063a\u064a\u0631 \u0644\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631\u0627\u062a \u0648\u0627\u0644\u0641\u0631\u0635 \u0627\u0644\u0648\u0638\u064a\u0641\u064a\u0629 \u0648\u0627\u0644\u062a\u0639\u0627\u0648\u0646 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0631\u0642\u0645\u064a\u0629."},notFound:{title:"\u0627\u0644\u0635\u0641\u062d\u0629 \u063a\u064a\u0631 \u0645\u0648\u062c\u0648\u062f\u0629 | \u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631",description:"\u062a\u0639\u0630\u0631 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629."}},en:{home:{title:"Abdulrahman Nasser Al-Mughyir | Web Developer",description:"The personal portfolio of Abdulrahman Nasser Al-Mughyir, a Full-Stack Web Development diploma graduate from Taibah University. Explore his skills, experience, and web projects."},about:{title:"About Abdulrahman Al-Mughyir | Skills & Experience",description:"Learn about Abdulrahman Nasser Al-Mughyir, his education, professional experience, technical skills, and qualifications in web development and IT."},projects:{title:"Projects | Abdulrahman Al-Mughyir",description:"Explore web development projects by Abdulrahman Al-Mughyir, including React websites, e-commerce interfaces, dashboards, and academic projects."},contact:{title:"Contact Abdulrahman Al-Mughyir",description:"Contact Abdulrahman Nasser Al-Mughyir about career opportunities, collaborations, web development projects, and general inquiries."},notFound:{title:"Page Not Found | Abdulrahman Al-Mughyir",description:"The requested page could not be found."}}},Uf={ar:Ff.items||[],en:Hf.items||[]},Vf=e=>{let{page:t,language:n="ar",projectId:r=null}=e;const o="en"===n?"en":"ar";if("projectDetails"===t){const e=((e,t)=>(Uf[t]||[]).find(t=>t.id===e))(r,o);if(!e)return{...Bf[o].notFound,robots:"noindex, follow"};const t=e.shortDescription||e.overview||Bf[o].projects.description;return{title:`${e.title} | ${Ta.shortName[o]}`,description:t,robots:"index, follow"}}return{...Bf[o][t]||Bf[o].notFound,robots:"notFound"===t?"noindex, follow":"index, follow"}},Wf=(e,t,n)=>{let r=document.head.querySelector(`meta[${e}="${t}"]`);r||(r=document.createElement("meta"),r.setAttribute(e,t),document.head.appendChild(r)),r.setAttribute("content",n)},Gf=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const r=n?`link[rel="${e}"][hreflang="${n}"]`:`link[rel="${e}"]`;let o=document.head.querySelector(r);o||(o=document.createElement("link"),o.setAttribute("rel",e),n&&o.setAttribute("hreflang",n),document.head.appendChild(o)),o.setAttribute("href",t)};const qf=function(){const e=Ne(),{i18n:t}=ha(),n=za(e.pathname),r=n.language;return(0,s().useEffect)(()=>{if(!n.hasLanguage)return;(t.resolvedLanguage||t.language||"").split("-")[0]!==r&&t.changeLanguage(r),document.documentElement.lang=r,document.documentElement.dir="ar"===r?"rtl":"ltr"},[r,n.hasLanguage,t]),(0,s().useEffect)(()=>{if(!n.hasLanguage)return;const t=Vf({page:n.page,language:r,projectId:n.projectId}),o=((e,t)=>{const n=za(e);return _a(Aa(n.routePath,t||n.language))})(e.pathname,r),a=(e=>{const t=za(e);return{ar:_a(Aa(t.routePath,"ar")),en:_a(Aa(t.routePath,"en"))}})(e.pathname);document.title=t.title,Wf("name","description",t.description),Wf("name","robots",t.robots),Wf("property","og:type","website"),Wf("property","og:title",t.title),Wf("property","og:description",t.description),Wf("property","og:url",o),Wf("property","og:locale",Ta.locale[r]),Wf("property","og:site_name",Ta.shortName[r]),Wf("name","twitter:card","summary"),Wf("name","twitter:title",t.title),Wf("name","twitter:description",t.description),Gf("canonical",o),n.isValid?(Gf("alternate",a.ar,"ar"),Gf("alternate",a.en,"en"),Gf("alternate",a.ar,"x-default")):document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach(e=>e.remove());const i=`${La}/#person`,l=`${La}/#website`,s=[{"@type":"Person","@id":i,name:Ta.name[r],alternateName:[Ta.name.ar,Ta.shortName.ar,Ta.name.en,Ta.shortName.en],url:`${La}/ar/`,jobTitle:"ar"===r?"\u0645\u0637\u0648\u0631 \u0648\u064a\u0628":"Web Developer",knowsLanguage:["ar","en"]},{"@type":"WebSite","@id":l,url:`${La}/ar/`,name:Ta.shortName[r],inLanguage:["ar","en"],publisher:{"@id":i}}];n.isValid&&s.push({"@type":"WebPage","@id":`${o}#webpage`,url:o,name:t.title,description:t.description,inLanguage:r,isPartOf:{"@id":l},about:{"@id":i}}),(e=>{const t="portfolio-structured-data";let n=document.getElementById(t);n||(n=document.createElement("script"),n.id=t,n.type="application/ld+json",document.head.appendChild(n)),n.textContent=JSON.stringify(e)})({"@context":"https://schema.org","@graph":s})},[e.pathname,r,n.page,n.projectId,n.hasLanguage,n.isValid]),null},Jf=Go.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 0;

  min-height: 100vh;
  min-height: 100dvh;

  background-color: var(--color-background);
  color: var(--color-text-primary);

  box-sizing: border-box;
`,Kf=Go.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;

  width: 100%;
  min-width: 0;

  padding-top: var(--header-height);

  box-sizing: border-box;

  > * {
    min-width: 0;
  }
`;function Yf(e){let{to:t}=e;const n=Ne();return(0,l().jsx)(tt,{replace:!0,to:`${t}${n.search}${n.hash}`})}function Qf(){const e=Ne(),t=za(e.pathname);return t.isValid?(0,l().jsx)(Yf,{to:Aa(t.routePath,"ar")}):(0,l().jsx)("div",{role:"status",children:"\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u063a\u064a\u0631 \u0645\u0648\u062c\u0648\u062f\u0629."})}function Xf(){const{lang:e}=Re(),t=Ne();if(!Pa(e)){const e=za(t.pathname);return(0,l().jsx)(Yf,{to:Aa(e.routePath,"ar")})}return(0,l().jsxs)(ot,{children:[(0,l().jsx)(nt,{index:!0,element:(0,l().jsx)(pd,{})}),(0,l().jsx)(nt,{path:"about",element:(0,l().jsx)(Sp,{})}),(0,l().jsx)(nt,{path:"projects",element:(0,l().jsx)(Ap,{})}),(0,l().jsx)(nt,{path:"projects/:projectId",element:(0,l().jsx)(jh,{})}),(0,l().jsx)(nt,{path:"contact",element:(0,l().jsx)($f,{})}),(0,l().jsx)(nt,{path:"*",element:(0,l().jsx)("div",{role:"status",children:"ar"===e?"\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u063a\u064a\u0631 \u0645\u0648\u062c\u0648\u062f\u0629.":"Page not found."})})]})}function Zf(){return(0,l().jsxs)(ot,{children:[(0,l().jsx)(nt,{path:"/:lang/*",element:(0,l().jsx)(Xf,{})}),(0,l().jsx)(nt,{path:"/",element:(0,l().jsx)(Qf,{})}),(0,l().jsx)(nt,{path:"/about",element:(0,l().jsx)(Qf,{})}),(0,l().jsx)(nt,{path:"/projects",element:(0,l().jsx)(Qf,{})}),(0,l().jsx)(nt,{path:"/projects/:projectId",element:(0,l().jsx)(Qf,{})}),(0,l().jsx)(nt,{path:"/contact",element:(0,l().jsx)(Qf,{})}),(0,l().jsx)(nt,{path:"*",element:(0,l().jsx)("div",{role:"status",children:"\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u063a\u064a\u0631 \u0645\u0648\u062c\u0648\u062f\u0629."})})]})}const em=function(){return(0,l().jsxs)(Jf,{children:[(0,l().jsx)(qf,{}),(0,l().jsx)(cl,{}),(0,l().jsx)(vi,{}),(0,l().jsx)(Kf,{id:"main-content",children:(0,l().jsx)(Zf,{})}),(0,l().jsx)(il,{})]})},tm=e=>"string"===typeof e,nm=()=>{let e,t;const n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n},rm=e=>null==e?"":String(e),om=/###/g,am=e=>e&&e.includes("###")?e.replace(om,"."):e,im=e=>!e||tm(e),lm=(e,t,n)=>{const r=tm(t)?t.split("."):t;let o=0;for(;o<r.length-1;){if(im(e))return{};const t=am(r[o]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++o}return im(e)?{}:{obj:e,k:am(r[o])}},sm=(e,t,n)=>{const{obj:r,k:o}=lm(e,t,Object);if(void 0!==r||1===t.length)return void(r[o]=n);let a=t[t.length-1],i=t.slice(0,t.length-1),l=lm(e,i,Object);for(;void 0===l.obj&&i.length;)a=`${i[i.length-1]}.${a}`,i=i.slice(0,i.length-1),l=lm(e,i,Object),l?.obj&&"undefined"!==typeof l.obj[`${l.k}.${a}`]&&(l.obj=void 0);l.obj[`${l.k}.${a}`]=n},cm=(e,t)=>{const{obj:n,k:r}=lm(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},um=(e,t,n)=>{for(const r in t)"__proto__"!==r&&"constructor"!==r&&(Object.prototype.hasOwnProperty.call(e,r)?tm(e[r])||e[r]instanceof String||tm(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):um(e[r],t[r],n):e[r]=t[r]);return e},dm=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),pm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},hm=e=>tm(e)?e.replace(/[&<>"'\/]/g,e=>pm[e]):e;const fm=[" ",",","?","!",";"],mm=new class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(void 0!==t)return t;const n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}}(20),gm=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(!e)return;if(e[t]){if(!Object.prototype.hasOwnProperty.call(e,t))return;return e[t]}const r=t.split(n);let o=e;for(let a=0;a<r.length;){if(!o||"object"!==typeof o)return;let e,t="";for(let i=a;i<r.length;++i)if(i!==a&&(t+=n),t+=r[i],e=o[t],void 0!==e){if(["string","number","boolean"].includes(typeof e)&&i<r.length-1)continue;a+=i-a+1;break}o=e}return o},vm=e=>e?.replace(/_/g,"-"),bm={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console?.[e]?.apply?.(console,t)}};class ym{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||bm,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,n,r){return r&&!this.debug?null:(e=e.map(e=>tm(e)?e.replace(/[\r\n\x00-\x1F\x7F]/g," "):e),tm(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new ym(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return(e=e||this.options).prefix=e.prefix||this.prefix,new ym(this.logger,e)}}var xm=new ym;class wm{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(e=>{this.observers[e]||(this.observers[e]=new Map);const n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)}),this}off(e,t){this.observers[e]&&(t?this.observers[e].delete(t):delete this.observers[e])}once(e,t){var n=this;const r=function(){t(...arguments),n.off(e,r)};return this.on(e,r),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(this.observers[e]){Array.from(this.observers[e].entries()).forEach(e=>{let[t,r]=e;for(let o=0;o<r;o++)t(...n)})}if(this.observers["*"]){Array.from(this.observers["*"].entries()).forEach(t=>{let[r,o]=t;for(let a=0;a<o;a++)r(e,...n)})}}}class km extends wm{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),void 0===this.options.ignoreJSONStructure&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const o=void 0!==r.keySeparator?r.keySeparator:this.options.keySeparator,a=void 0!==r.ignoreJSONStructure?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let i;e.includes(".")?i=e.split("."):(i=[e,t],n&&(Array.isArray(n)?i.push(...n):tm(n)&&o?i.push(...n.split(o)):i.push(n)));const l=cm(this.data,i);return l||t||n||!e.includes(".")||(e=i[0],t=i[1],n=i.slice(2).join(".")),!l&&a&&tm(n)?gm(this.data?.[e]?.[t],n,o):l}addResource(e,t,n,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1};const a=void 0!==o.keySeparator?o.keySeparator:this.options.keySeparator;let i=[e,t];n&&(i=i.concat(a?n.split(a):n)),e.includes(".")&&(i=e.split("."),r=t,t=i[1]),this.addNamespaces(t),sm(this.data,i,r),o.silent||this.emit("added",e,t,n,r)}addResources(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(const o in n)(tm(n[o])||Array.isArray(n[o]))&&this.addResource(e,t,o,n[o],{silent:!0});r.silent||this.emit("added",e,t,n)}addResourceBundle(e,t,n,r,o){let a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1,skipCopy:!1},i=[e,t];e.includes(".")&&(i=e.split("."),r=n,n=t,t=i[1]),this.addNamespaces(t);let l=cm(this.data,i)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?um(l,n,o):l={...l,...n},sm(this.data,i,l),a.silent||this.emit("added",e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return void 0!==this.getResource(e,t)}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>t[e]&&Object.keys(t[e]).length>0)}toJSON(){return this.data}}var Sm={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,o){return e.forEach(e=>{t=this.processors[e]?.process(t,n,r,o)??t}),t}};const jm=Symbol("i18next/PATH_KEY");function Em(e,t){const{[jm]:n}=e(function(){const e=[],t=Object.create(null);let n;return t.get=(r,o)=>(n?.revoke?.(),o===jm?e:(e.push(o),n=Proxy.revocable(r,t),n.proxy)),Proxy.revocable(Object.create(null),t).proxy}()),r=t?.keySeparator??".",o=t?.nsSeparator??":",a="strict"===t?.enableSelector;if(n.length>1&&o){const e=t?.ns,i=a?Array.isArray(e)?e:e?[e]:null:Array.isArray(e)?e:null;if(i){if((a?i:i.length>1?i.slice(1):[]).includes(n[0]))return`${n[0]}${o}${n.slice(1).join(r)}`}}return n.join(r)}const Cm=e=>!tm(e)&&"boolean"!==typeof e&&"number"!==typeof e;class Tm extends wm{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var n,r;super(),n=e,r=this,["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"].forEach(e=>{n[e]&&(r[e]=n[e])}),this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),this.logger=xm.create("translator"),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e){const t={...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}}};if(null==e)return!1;const n=this.resolve(e,t);if(void 0===n?.res)return!1;const r=Cm(n.res);return!1!==t.returnObjects||!r}extractFromKey(e,t){let n=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===n&&(n=":");const r=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator;let o=t.ns||this.options.defaultNS||[];const a=n&&e.includes(n),i=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!((e,t,n)=>{t=t||"",n=n||"";const r=fm.filter(e=>!t.includes(e)&&!n.includes(e));if(0===r.length)return!0;const o=mm.getRegExp(`(${r.map(e=>"?"===e?"\\?":e).join("|")})`);let a=!o.test(e);if(!a){const t=e.indexOf(n);t>0&&!o.test(e.substring(0,t))&&(a=!0)}return a})(e,n,r);if(a&&!i){const t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:tm(o)?[o]:o};const a=e.split(n);(n!==r||n===r&&this.options.ns.includes(a[0]))&&(o=a.shift()),e=a.join(r)}return{key:e,namespaces:tm(o)?[o]:o}}translate(e,t,n){let r="object"===typeof t?{...t}:t;if("object"!==typeof r&&this.options.overloadTranslationOptionHandler&&(r=this.options.overloadTranslationOptionHandler(arguments)),"object"===typeof r&&(r={...r}),r||(r={}),null==e)return"";"function"===typeof e&&(e=Em(e,{...this.options,...r})),Array.isArray(e)||(e=[String(e)]),e=e.map(e=>"function"===typeof e?Em(e,{...this.options,...r}):String(e));const o=void 0!==r.returnDetails?r.returnDetails:this.options.returnDetails,a=void 0!==r.keySeparator?r.keySeparator:this.options.keySeparator,{key:i,namespaces:l}=this.extractFromKey(e[e.length-1],r),s=l[l.length-1];let c=void 0!==r.nsSeparator?r.nsSeparator:this.options.nsSeparator;void 0===c&&(c=":");const u=r.lng||this.language,d=r.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if("cimode"===u?.toLowerCase())return d?o?{res:`${s}${c}${i}`,usedKey:i,exactUsedKey:i,usedLng:u,usedNS:s,usedParams:this.getUsedParamsDetails(r)}:`${s}${c}${i}`:o?{res:i,usedKey:i,exactUsedKey:i,usedLng:u,usedNS:s,usedParams:this.getUsedParamsDetails(r)}:i;const p=this.resolve(e,r);let h=p?.res;const f=p?.usedKey||i,m=p?.exactUsedKey||i,g=void 0!==r.joinArrays?r.joinArrays:this.options.joinArrays,v=!this.i18nFormat||this.i18nFormat.handleAsObject,b=void 0!==r.count&&!tm(r.count),y=Tm.hasDefaultValue(r),x=b?this.pluralResolver.getSuffix(u,r.count,r):"",w=r.ordinal&&b?this.pluralResolver.getSuffix(u,r.count,{ordinal:!1}):"",k=b&&!r.ordinal&&0===r.count,S=k&&r[`defaultValue${this.options.pluralSeparator}zero`]||r[`defaultValue${x}`]||r[`defaultValue${w}`]||r.defaultValue;let j=h;v&&!h&&y&&(j=S);const E=Cm(j),C=Object.prototype.toString.apply(j);if(!(v&&j&&E)||["[object Number]","[object Function]","[object RegExp]"].includes(C)||tm(g)&&Array.isArray(j))if(v&&tm(g)&&Array.isArray(h))h=h.join(g),h&&(h=this.extendTranslation(h,e,r,n));else{let t=!1,o=!1;!this.isValidLookup(h)&&y&&(t=!0,h=S),this.isValidLookup(h)||(o=!0,h=i);const l=(r.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&o?void 0:h,d=y&&S!==h&&this.options.updateMissing;if(o||t||d){if(this.logger.log(d?"updateKey":"missingKey",u,s,b&&!d?`${i}${this.pluralResolver.getSuffix(u,r.count,r)}`:i,d?S:h),a){const e=this.resolve(i,{...r,keySeparator:!1});e&&e.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let e=[];const t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,r.lng||this.language);if("fallback"===this.options.saveMissingTo&&t&&t[0])for(let r=0;r<t.length;r++)e.push(t[r]);else"all"===this.options.saveMissingTo?e=this.languageUtils.toResolveHierarchy(r.lng||this.language):e.push(r.lng||this.language);const n=(e,t,n)=>{const o=y&&n!==h?n:l;this.options.missingKeyHandler?this.options.missingKeyHandler(e,s,t,o,d,r):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(e,s,t,o,d,r),this.emit("missingKey",e,s,t,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?e.forEach(e=>{const t=this.pluralResolver.getSuffixes(e,r);k&&r[`defaultValue${this.options.pluralSeparator}zero`]&&!t.includes(`${this.options.pluralSeparator}zero`)&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{n([e],i+t,r[`defaultValue${t}`]||S)})}):n(e,i,S))}h=this.extendTranslation(h,e,r,p,n),o&&h===i&&this.options.appendNamespaceToMissingKey&&(h=`${s}${c}${i}`),(o||t)&&this.options.parseMissingKeyHandler&&(h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${s}${c}${i}`:i,t?h:void 0,r))}else{if(!r.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(f,j,{...r,ns:l}):`key '${i} (${this.language})' returned an object instead of string.`;return o?(p.res=e,p.usedParams=this.getUsedParamsDetails(r),p):e}if(a){const e=Array.isArray(j),t=e?[]:{},n=e?m:f;for(const o in j)if(Object.prototype.hasOwnProperty.call(j,o)){const e=`${n}${a}${o}`;t[o]=y&&!h?this.translate(e,{...r,defaultValue:Cm(S)?S[o]:void 0,joinArrays:!1,ns:l}):this.translate(e,{...r,joinArrays:!1,ns:l}),t[o]===e&&(t[o]=j[o])}h=t}}return o?(p.res=h,p.usedParams=this.getUsedParamsDetails(r),p):h}extendTranslation(e,t,n,r,o){var a=this;if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const i=tm(e)&&(void 0!==n?.interpolation?.skipOnVariables?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let l;if(i){const t=e.match(this.interpolator.nestingRegexp);l=t&&t.length}let s=n.replace&&!tm(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),e=this.interpolator.interpolate(e,s,n.lng||this.language||r.usedLng,n),i){const t=e.match(this.interpolator.nestingRegexp);l<(t&&t.length)&&(n.nest=!1)}!n.lng&&r&&r.res&&(n.lng=this.language||r.usedLng),!1!==n.nest&&(e=this.interpolator.nest(e,function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return o?.[0]!==r[0]||n.context?a.translate(...r,t):(a.logger.warn(`It seems you are nesting recursively key: ${r[0]} in key: ${t[0]}`),null)},n)),n.interpolation&&this.interpolator.reset()}const i=n.postProcess||this.options.postProcess,l=tm(i)?[i]:i;return null!=e&&l?.length&&!1!==n.applyPostProcessor&&(e=Sm.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e){let t,n,r,o,a,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return tm(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(e=>"function"===typeof e?Em(e,{...this.options,...i}):e)),e.forEach(e=>{if(this.isValidLookup(t))return;const l=this.extractFromKey(e,i),s=l.key;n=s;let c=l.namespaces;this.options.fallbackNS&&(c=c.concat(this.options.fallbackNS));const u=void 0!==i.count&&!tm(i.count),d=u&&!i.ordinal&&0===i.count,p=void 0!==i.context&&(tm(i.context)||"number"===typeof i.context)&&""!==i.context,h=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);c.forEach(e=>{this.isValidLookup(t)||(a=e,this.checkedLoadedFor[`${h[0]}-${e}`]||!this.utils?.hasLoadedNamespace||this.utils?.hasLoadedNamespace(a)||(this.checkedLoadedFor[`${h[0]}-${e}`]=!0,this.logger.warn(`key "${n}" for languages "${h.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),h.forEach(n=>{if(this.isValidLookup(t))return;o=n;const a=[s];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(a,s,n,e,i);else{let e;u&&(e=this.pluralResolver.getSuffix(n,i.count,i));const t=`${this.options.pluralSeparator}zero`,r=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(i.ordinal&&e.startsWith(r)&&a.push(s+e.replace(r,this.options.pluralSeparator)),a.push(s+e),d&&a.push(s+t)),p){const n=`${s}${this.options.contextSeparator||"_"}${i.context}`;a.push(n),u&&(i.ordinal&&e.startsWith(r)&&a.push(n+e.replace(r,this.options.pluralSeparator)),a.push(n+e),d&&a.push(n+t))}}let l;for(;l=a.pop();)this.isValidLookup(t)||(r=l,t=this.getResource(n,e,l,i))}))})}),{res:t,usedKey:n,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(e){return void 0!==e&&!(!this.options.returnNull&&null===e)&&!(!this.options.returnEmptyString&&""===e)}getResource(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=e.replace&&!tm(e.replace);let r=n?e.replace:e;if(n&&"undefined"!==typeof e.count&&(r={...r,count:e.count}),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(const e of t)delete r[e]}return r}static hasDefaultValue(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.startsWith("defaultValue")&&void 0!==e[t])return!0;return!1}}class Lm{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=xm.create("languageUtils"),this.resolveHierarchyCache={}}clearCache(){this.resolveHierarchyCache={}}getScriptPartFromCode(e){if(!(e=vm(e))||!e.includes("-"))return null;const t=e.split("-");return 2===t.length?null:(t.pop(),"x"===t[t.length-1].toLowerCase()?null:this.formatLanguageCode(t.join("-")))}getLanguagePartFromCode(e){if(!(e=vm(e))||!e.includes("-"))return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(tm(e)&&e.includes("-")){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch(Eg){}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;const n=this.formatLanguageCode(e);this.options.supportedLngs&&!this.isSupportedCode(n)||(t=n)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;const n=this.getScriptPartFromCode(e);if(this.isSupportedCode(n))return t=n;const r=this.getLanguagePartFromCode(e);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(e=>e===r||!(!e.includes("-")&&!r.includes("-"))&&(!(!e.includes("-")||r.includes("-")||e.slice(0,e.indexOf("-"))!==r)||!!(e.startsWith(r)&&r.length>1)))}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if("function"===typeof e&&(e=e(t)),tm(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e[this.getLanguagePartFromCode(t)]),n||(n=e.default),n||[]}toResolveHierarchy(e,t){const n=this.options.fallbackLng,r=Array.isArray(n)?n.join("|"):n;r!==this._cachedFallbackLng&&(this.resolveHierarchyCache={},this._cachedFallbackLng=r);const o=void 0===t||!1===t||tm(t),a=void 0===t&&"function"===typeof this.options.fallbackLng;let i=null;if(tm(e)&&o&&!a){let n;n=void 0===t?"undefined":!1===t?"boolean:false":`string:${t}`,i=`${e.length}:${e}|${n}`}if(null!==i){const e=this.resolveHierarchyCache[i];if(void 0!==e)return e.slice()}const l=this.getFallbackCodes((!1===t?[]:t)||this.options.fallbackLng||[],e),s=[],c=e=>{e&&(this.isSupportedCode(e)?s.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return tm(e)&&(e.includes("-")||e.includes("_"))?("languageOnly"!==this.options.load&&c(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&c(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&c(this.getLanguagePartFromCode(e))):tm(e)&&c(this.formatLanguageCode(e)),l.forEach(e=>{s.includes(e)||c(this.formatLanguageCode(e))}),null!==i?(this.resolveHierarchyCache[i]=s,s.slice()):s}}const Pm={zero:0,one:1,two:2,few:3,many:4,other:5},_m={select:e=>1===e?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Nm{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=xm.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=vm("dev"===e?"en":e),r=t.ordinal?"ordinal":"cardinal",o=JSON.stringify({cleanedCode:n,type:r});if(o in this.pluralRulesCache)return this.pluralRulesCache[o];let a;try{a=new Intl.PluralRules(n,{type:r})}catch(i){if("undefined"===typeof Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),_m;if(!e.match(/-|_/))return _m;const n=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(n,t)}return this.pluralRulesCache[o]=a,a}needsPlural(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.getRule(e,t);return n||(n=this.getRule("dev",t)),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(e,n).map(e=>`${t}${e}`)}getSuffixes(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.getRule(e,t);return n||(n=this.getRule("dev",t)),n?n.resolvedOptions().pluralCategories.sort((e,t)=>Pm[e]-Pm[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`):[]}getSuffix(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=this.getRule(e,n);return r?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,n))}}const zm=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=((e,t,n)=>{const r=cm(e,n);return void 0!==r?r:cm(t,n)})(e,t,n);return!a&&o&&tm(n)&&(a=gm(e,n,r),void 0===a&&(a=gm(t,n,r))),a},Am=e=>e.replace(/\$/g,"$$$$");class Om{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=xm.create("interpolator"),this.options=e,this.format=e?.interpolation?.format||(e=>e),this.init(e)}init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:o,prefixEscaped:a,suffix:i,suffixEscaped:l,formatSeparator:s,unescapeSuffix:c,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:p,nestingSuffix:h,nestingSuffixEscaped:f,nestingOptionsSeparator:m,maxReplaces:g,alwaysFormat:v}=e.interpolation;this.escape=void 0!==t?t:hm,this.escapeValue=void 0===n||n,this.useRawValueToEscape=void 0!==r&&r,this.prefix=o?dm(o):a||"{{",this.suffix=i?dm(i):l||"}}",this.formatSeparator=s||",",this.unescapePrefix=c?"":u?dm(u):"-",this.unescapeSuffix=this.unescapePrefix?"":c?dm(c):"",this.nestingPrefix=d?dm(d):p||dm("$t("),this.nestingSuffix=h?dm(h):f||dm(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=g||1e3,this.alwaysFormat=void 0!==v&&v,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(e,t)=>e?.source===t?(e.lastIndex=0,e):new RegExp(t,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let o,a,i;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},s=e=>{if(!e.includes(this.formatSeparator)){const o=zm(t,l,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(o,void 0,n,{...r,...t,interpolationkey:e}):o}const o=e.split(this.formatSeparator),a=o.shift().trim(),i=o.join(this.formatSeparator).trim();return this.format(zm(t,l,a,this.options.keySeparator,this.options.ignoreJSONStructure),i,n,{...r,...t,interpolationkey:a})};this.resetRegExp(),!this.escapeValue&&"string"===typeof e&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn("nesting options string contains interpolated variables with escapeValue: false \u2014 if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.");const c=r?.missingInterpolationHandler||this.options.missingInterpolationHandler,u=void 0!==r?.interpolation?.skipOnVariables?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>e},{regex:this.regexp,safeValue:e=>this.escapeValue?this.escape(e):e}].forEach(t=>{for(i=0;o=t.regex.exec(e);){const n=o[1].trim();if(a=s(n),void 0===a)if("function"===typeof c){const t=c(e,o,r);a=tm(t)?t:""}else if(r&&Object.prototype.hasOwnProperty.call(r,n))a="";else{if(u){a=o[0];continue}this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),a=""}else tm(a)||this.useRawValueToEscape||(a=rm(a));const l=t.safeValue(a);if(e=e.replace(o[0],Am(l)),u?(t.regex.lastIndex+=l.length,t.regex.lastIndex-=o[0].length):t.regex.lastIndex=0,i++,i>=this.maxReplaces)break}}),e}nest(e,t){let n,r,o,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=(e,t)=>{const n=this.nestingOptionsSeparator;if(!e.includes(n))return e;const r=e.split(new RegExp(`${dm(n)}[ ]*{`));let a=`{${r[1]}`;e=r[0],a=this.interpolate(a,o);const i=a.match(/'/g),l=a.match(/"/g);((i?.length??0)%2===0&&!l||(l?.length??0)%2!==0)&&(a=a.replace(/'/g,'"'));try{o=JSON.parse(a),t&&(o={...t,...o})}catch(Eg){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,Eg),`${e}${n}${a}`}return o.defaultValue&&o.defaultValue.includes(this.prefix)&&delete o.defaultValue,e};for(;n=this.nestingRegexp.exec(e);){let l=[];o={...a},o=o.replace&&!tm(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;const s=/{.*}/s.test(n[1])?n[1].lastIndexOf("}")+1:n[1].indexOf(this.formatSeparator);if(-1!==s&&(l=n[1].slice(s).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),n[1]=n[1].slice(0,s)),r=t(i.call(this,n[1].trim(),o),o),r&&n[0]===e&&!tm(r))return r;tm(r)||(r=rm(r)),r||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),r=""),l.length&&(r=l.reduce((e,t)=>this.format(e,t,a.lng,{...a,interpolationkey:n[1].trim()}),r.trim())),e=e.replace(n[0],Am(rm(r))),this.regexp.lastIndex=0}return e}}const Rm=e=>{const t={};return(n,r,o)=>{let a=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(a={...a,[o.interpolationkey]:void 0});const i=r+JSON.stringify(a);let l=t[i];return l||(l=e(vm(r),o),t[i]=l),l(n)}},Im=e=>(t,n,r)=>e(vm(n),r)(t);class Mm{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=xm.create("formatter"),this.options=e,this.init(e)}init(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||",";const n=t.cacheInBuiltFormats?Rm:Im;this.formats={number:n((e,t)=>{const n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)}),currency:n((e,t)=>{const n=new Intl.NumberFormat(e,{...t,style:"currency"});return e=>n.format(e)}),datetime:n((e,t)=>{const n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)}),relativetime:n((e,t)=>{const n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||"day")}),list:n((e,t)=>{const n=new Intl.ListFormat(e,{...t});return e=>n.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Rm(t)}format(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(!t)return e;if(null==e)return e;const o=t.split(this.formatSeparator),a=[];for(let l=0;l<o.length;l++){let e=o[l];for(;e.indexOf("(")>-1&&!e.includes(")")&&l+1<o.length;)e=`${e}${this.formatSeparator}${o[++l]}`;a.push(e)}const i=a.reduce((e,t)=>{const{formatName:o,formatOptions:a}=(e=>{let t=e.toLowerCase().trim();const n={};if(e.includes("(")){const r=e.split("(");t=r[0].toLowerCase().trim();const o=r[1].slice(0,-1);"currency"!==t||o.includes(":")?"relativetime"!==t||o.includes(":")?o.split(";").forEach(e=>{if(e){const[t,...r]=e.split(":"),o=r.join(":").trim().replace(/^'+|'+$/g,""),a=t.trim();n[a]||(n[a]=o),"false"===o&&(n[a]=!1),"true"===o&&(n[a]=!0),isNaN(o)||(n[a]=parseInt(o,10))}}):n.range||(n.range=o.trim()):n.currency||(n.currency=o.trim())}return{formatName:t,formatOptions:n}})(t);if(this.formats[o]){let t=e;try{const i=r?.formatParams?.[r.interpolationkey]||{},l=i.locale||i.lng||r.locale||r.lng||n;t=this.formats[o](e,l,{...a,...r,...i})}catch(i){this.logger.warn(i)}return t}return this.logger.warn(`there was no format function for ${o}`),e},e);return i}}class Dm extends wm{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=xm.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,r.backend,r)}queueLoad(e,t,n,r){const o={},a={},i={},l={};return e.forEach(e=>{let r=!0;t.forEach(t=>{const i=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[i]=2:this.state[i]<0||(1===this.state[i]?void 0===a[i]&&(a[i]=!0):(this.state[i]=1,r=!1,void 0===a[i]&&(a[i]=!0),void 0===o[i]&&(o[i]=!0),void 0===l[t]&&(l[t]=!0)))}),r||(i[e]=!0)}),(Object.keys(o).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(o),pending:Object.keys(a),toLoadLanguages:Object.keys(i),toLoadNamespaces:Object.keys(l)}}loaded(e,t,n){const r=e.split("|"),o=r[0],a=r[1];t&&this.emit("failedLoading",o,a,t),!t&&n&&this.store.addResourceBundle(o,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);const i={};this.queue.forEach(n=>{((e,t,n)=>{const{obj:r,k:o}=lm(e,t,Object);r[o]=r[o]||[],r[o].push(n)})(n.loaded,[o],a),((e,t)=>{void 0!==e.pending[t]&&(delete e.pending[t],e.pendingCount--)})(n,e),t&&n.errors.push(t),0!==n.pendingCount||n.done||(Object.keys(n.loaded).forEach(e=>{i[e]||(i[e]={});const t=n.loaded[e];t.length&&t.forEach(t=>{void 0===i[e][t]&&(i[e][t]=!0)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit("loaded",i),this.queue=this.queue.filter(e=>!e.done)}read(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads)return void this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:o,callback:a});this.readingCalls++;const i=(i,l)=>{if(this.readingCalls--,this.waitingReads.length>0){const e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}i&&l&&r<this.maxRetries?setTimeout(()=>{this.read(e,t,n,r+1,2*o,a)},o):a(i,l)},l=this.backend[n].bind(this.backend);if(2!==l.length)return l(e,t,i);try{const n=l(e,t);n&&"function"===typeof n.then?n.then(e=>i(null,e)).catch(i):i(null,n)}catch(s){i(s)}}prepareLoading(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();tm(e)&&(e=this.languageUtils.toResolveHierarchy(e)),tm(t)&&(t=[t]);const o=this.queueLoad(e,t,n,r);if(!o.toLoad.length)return o.pending.length||r(),null;o.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=e.split("|"),r=n[0],o=n[1];this.read(r,o,"read",void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${o} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${o} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,t,n,r,o){let a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:()=>{};if(!this.services?.utils?.hasLoadedNamespace||this.services?.utils?.hasLoadedNamespace(t)){if(void 0!==n&&null!==n&&""!==n){if(this.backend?.create){const s={...a,isUpdate:o},c=this.backend.create.bind(this.backend);if(c.length<6)try{let o;o=5===c.length?c(e,t,n,r,s):c(e,t,n,r),o&&"function"===typeof o.then?o.then(e=>i(null,e)).catch(i):i(null,o)}catch(l){i(l)}else c(e,t,n,r,i,s)}e&&e[0]&&this.store.addResource(e[0],t,n,r)}}else this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")}}const $m=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if("object"===typeof e[1]&&(t=e[1]),tm(e[1])&&(t.defaultValue=e[1]),tm(e[2])&&(t.tDescription=e[2]),"object"===typeof e[2]||"object"===typeof e[3]){const n=e[3]||e[2];Object.keys(n).forEach(e=>{t[e]=n[e]})}return t},interpolation:{escapeValue:!0,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Fm=e=>(tm(e.ns)&&(e.ns=[e.ns]),tm(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),tm(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&!e.supportedLngs.includes("cimode")&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e),Hm=()=>{};class Bm extends wm{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;var n;if(super(),this.options=Fm(e),this.services={},this.logger=xm,this.modules={external:[]},n=this,Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach(e=>{"function"===typeof n[e]&&(n[e]=n[e].bind(n))}),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,"function"===typeof t&&(n=t,t={}),null==t.defaultNS&&t.ns&&(tm(t.ns)?t.defaultNS=t.ns:t.ns.includes("translation")||(t.defaultNS=t.ns[0]));const r=$m();this.options={...r,...this.options,...Fm(t)},this.options.interpolation={...r.interpolation,...this.options.interpolation},void 0!==t.keySeparator&&(this.options.userDefinedKeySeparator=t.keySeparator),void 0!==t.nsSeparator&&(this.options.userDefinedNsSeparator=t.nsSeparator),"function"!==typeof this.options.overloadTranslationOptionHandler&&(this.options.overloadTranslationOptionHandler=r.overloadTranslationOptionHandler);const o=e=>e?"function"===typeof e?new e:e:null;if(!this.options.isClone){let t;this.modules.logger?xm.init(o(this.modules.logger),this.options):xm.init(null,this.options),t=this.modules.formatter?this.modules.formatter:Mm;const n=new Lm(this.options);this.store=new km(this.options.resources,this.options);const r=this.services;r.logger=xm,r.resourceStore=this.store,r.languageUtils=n,r.pluralResolver=new Nm(n,{prepend:this.options.pluralSeparator}),t&&(r.formatter=o(t),r.formatter.init&&r.formatter.init(r,this.options),this.options.interpolation.format=r.formatter.format.bind(r.formatter)),r.interpolator=new Om(this.options),r.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},r.backendConnector=new Dm(o(this.modules.backend),r.resourceStore,r,this.options),r.backendConnector.on("*",function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e.emit(t,...r)}),this.modules.languageDetector&&(r.languageDetector=o(this.modules.languageDetector),r.languageDetector.init&&r.languageDetector.init(r,this.options.detection,this.options)),this.modules.i18nFormat&&(r.i18nFormat=o(this.modules.i18nFormat),r.i18nFormat.init&&r.i18nFormat.init(this)),this.translator=new Tm(this.services,this.options),this.translator.on("*",function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e.emit(t,...r)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,n||(n=Hm),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&"dev"!==e[0]&&(this.options.lng=e[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(t=>{this[t]=function(){return e.store[t](...arguments)}});["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(t=>{this[t]=function(){return e.store[t](...arguments),e}});const a=nm(),i=()=>{const e=(e,t)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),a.resolve(t),n(e,t)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?i():setTimeout(i,0),a}loadResources(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Hm;const n=tm(e)?e:this.language;if("function"===typeof e&&(t=e),!this.options.resources||this.options.partialBundledLanguages){if("cimode"===n?.toLowerCase()&&(!this.options.preload||0===this.options.preload.length))return t();const e=[],r=t=>{if(!t)return;if("cimode"===t)return;this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{"cimode"!==t&&(e.includes(t)||e.push(t))})};if(n)r(n);else{this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>r(e))}this.options.preload?.forEach?.(e=>r(e)),this.services.backendConnector.load(e,this.options.ns,e=>{e||this.resolvedLanguage||!this.language||this.setResolvedLanguage(this.language),t(e)})}else t(null)}reloadResources(e,t,n){const r=nm();return"function"===typeof e&&(n=e,e=void 0),"function"===typeof t&&(n=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),n||(n=Hm),this.services.backendConnector.reload(e,t,e=>{r.resolve(),n(e)}),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&Sm.addPostProcessor(e),"formatter"===e.type&&(this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this}setResolvedLanguage(e){if(e&&this.languages&&!["cimode","dev"].includes(e)){for(let e=0;e<this.languages.length;e++){const t=this.languages[e];if(!["cimode","dev"].includes(t)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}this.resolvedLanguage||this.languages.includes(e)||!this.store.hasLanguageSomeTranslations(e)||(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){var n=this;this.isLanguageChangingTo=e;const r=nm();this.emit("languageChanging",e);const o=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},a=(a,i)=>{i?this.isLanguageChangingTo===e&&(o(i),this.translator.changeLanguage(i),this.isLanguageChangingTo=void 0,this.emit("languageChanged",i),this.logger.log("languageChanged",i)):this.isLanguageChangingTo=void 0,r.resolve(function(){return n.t(...arguments)}),t&&t(a,function(){return n.t(...arguments)})},i=t=>{e||t||!this.services.languageDetector||(t=[]);const n=tm(t)?t:t&&t[0],r=this.store.hasLanguageSomeTranslations(n)?n:this.services.languageUtils.getBestMatchFromCodes(tm(t)?[t]:t);r&&(this.language||o(r),this.translator.language||this.translator.changeLanguage(r),this.services.languageDetector?.cacheUserLanguage?.(r)),this.loadResources(r,e=>{a(e,r)})};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(i):this.services.languageDetector.detect(i):i(e):i(this.services.languageDetector.detect()),r}getFixedT(e,t,n,r){var o=this;const a=r?.scopeNs,i=function(e,t){let r;if("object"!==typeof t){for(var l=arguments.length,s=new Array(l>2?l-2:0),c=2;c<l;c++)s[c-2]=arguments[c];r=o.options.overloadTranslationOptionHandler([e,t].concat(s))}else r={...t};r.lng=r.lng||i.lng,r.lngs=r.lngs||i.lngs;const u=void 0!==r.ns&&null!==r.ns;r.ns=r.ns||i.ns,""!==r.keyPrefix&&(r.keyPrefix=r.keyPrefix||n||i.keyPrefix);const d={...o.options,...r};Array.isArray(a)&&!u&&(d.ns=a),"function"===typeof r.keyPrefix&&(r.keyPrefix=Em(r.keyPrefix,d));const p=o.options.keySeparator||".";let h;return r.keyPrefix&&Array.isArray(e)?h=e.map(e=>("function"===typeof e&&(e=Em(e,d)),`${r.keyPrefix}${p}${e}`)):("function"===typeof e&&(e=Em(e,d)),h=r.keyPrefix?`${r.keyPrefix}${p}${e}`:e),o.t(h,r)};return tm(e)?i.lng=e:i.lngs=e,i.ns=t,i.keyPrefix=n,i}t(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.translator?.translate(...t)}exists(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.translator?.exists(...t)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=t.lng||this.resolvedLanguage||this.languages[0],r=!!this.options&&this.options.fallbackLng,o=this.languages[this.languages.length-1];if("cimode"===n.toLowerCase())return!0;const a=(e,t)=>{const n=this.services.backendConnector.state[`${e}|${t}`];return-1===n||0===n||2===n};if(t.precheck){const e=t.precheck(this,a);if(void 0!==e)return e}return!!this.hasResourceBundle(n,e)||(!(this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages))||!(!a(n,e)||r&&!a(o,e)))}loadNamespaces(e,t){const n=nm();return this.options.ns?(tm(e)&&(e=[e]),e.forEach(e=>{this.options.ns.includes(e)||this.options.ns.push(e)}),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){const n=nm();tm(e)&&(e=[e]);const r=this.options.preload||[],o=e.filter(e=>!r.includes(e)&&this.services.languageUtils.isSupportedCode(e));return o.length?(this.options.preload=r.concat(o),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!e)return"rtl";try{const t=new Intl.Locale(e);if(t&&t.getTextInfo){const e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch(Eg){}const t=this.services?.languageUtils||new Lm($m());return e.toLowerCase().indexOf("-latn")>1?"ltr":["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].includes(t.getLanguagePartFromCode(e))||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){const e=new Bm(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0);return e.createInstance=Bm.createInstance,e}cloneInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Hm;const n=e.forkResourceStore;n&&delete e.forkResourceStore;const r={...this.options,...e,isClone:!0},o=new Bm(r);void 0===e.debug&&void 0===e.prefix||(o.logger=o.logger.clone(e));if(["store","services","language"].forEach(e=>{o[e]=this[e]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},n){const e=Object.keys(this.store.data).reduce((e,t)=>(e[t]={...this.store.data[t]},e[t]=Object.keys(e[t]).reduce((n,r)=>(n[r]={...e[t][r]},n),e[t]),e),{});o.store=new km(e,r),o.services.resourceStore=o.store}if(e.interpolation){const t={...$m().interpolation,...this.options.interpolation,...e.interpolation},n={...r,interpolation:t};o.services.interpolator=new Om(n)}return o.translator=new Tm(o.services,r),o.translator.on("*",function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];o.emit(e,...n)}),o.init(r,t),o.translator.options=r,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Um=Bm.createInstance(),Vm=(Um.createInstance,Um.dir,Um.init,Um.loadResources,Um.reloadResources,Um.use,Um.changeLanguage,Um.getFixedT,Um.t,Um.exists,Um.setDefaultNamespace,Um.hasLoadedNamespace,Um.loadNamespaces,Um.loadLanguages,{type:"3rdParty",init(e){!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};oa={...oa,...e}}(e.options.react),(e=>{ea=e})(e)}}),{slice:Wm,forEach:Gm}=[];const qm=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Jm={create(e,t,n,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};n&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+60*n*1e3)),r&&(o.domain=r),document.cookie=function(e,t){const n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{path:"/"};let r=`${e}=${encodeURIComponent(t)}`;if(n.maxAge>0){const e=n.maxAge-0;if(Number.isNaN(e))throw new Error("maxAge should be a Number");r+=`; Max-Age=${Math.floor(e)}`}if(n.domain){if(!qm.test(n.domain))throw new TypeError("option domain is invalid");r+=`; Domain=${n.domain}`}if(n.path){if(!qm.test(n.path))throw new TypeError("option path is invalid");r+=`; Path=${n.path}`}if(n.expires){if("function"!==typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");r+=`; Expires=${n.expires.toUTCString()}`}if(n.httpOnly&&(r+="; HttpOnly"),n.secure&&(r+="; Secure"),n.sameSite)switch("string"===typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return n.partitioned&&(r+="; Partitioned"),r}(e,t,o)},read(e){const t=`${e}=`,n=document.cookie.split(";");for(let r=0;r<n.length;r++){let e=n[r];for(;" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(t))return e.substring(t.length,e.length)}return null},remove(e,t){this.create(e,"",-1,t)}};var Km={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&"undefined"!==typeof document)return Jm.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:n,cookieMinutes:r,cookieDomain:o,cookieOptions:a}=t;n&&"undefined"!==typeof document&&Jm.create(n,e,r,o,a)}},Ym={name:"querystring",lookup(e){let t,{lookupQuerystring:n}=e;if("undefined"!==typeof window){let{search:e}=window.location;!window.location.search&&window.location.hash?.indexOf("?")>-1&&(e=window.location.hash.substring(window.location.hash.indexOf("?")));const r=e.substring(1).split("&");for(let o=0;o<r.length;o++){const e=r[o].indexOf("=");if(e>0){r[o].substring(0,e)===n&&(t=r[o].substring(e+1))}}}return t}},Qm={name:"hash",lookup(e){let t,{lookupHash:n,lookupFromHashIndex:r}=e;if("undefined"!==typeof window){const{hash:e}=window.location;if(e&&e.length>2){const o=e.substring(1);if(n){const e=o.split("&");for(let r=0;r<e.length;r++){const o=e[r].indexOf("=");if(o>0){e[r].substring(0,o)===n&&(t=e[r].substring(o+1))}}}if(t)return t;if(!t&&r>-1){const t=e.match(/\/([a-zA-Z-]*)/g);if(!Array.isArray(t))return;const n="number"===typeof r?r:0;return t[n]?.replace("/","")}}}return t}};let Xm=null;const Zm=()=>{if(null!==Xm)return Xm;try{if(Xm="undefined"!==typeof window&&null!==window.localStorage,!Xm)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch(Eg){Xm=!1}return Xm};var eg={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&Zm())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:n}=t;n&&Zm()&&window.localStorage.setItem(n,e)}};let tg=null;const ng=()=>{if(null!==tg)return tg;try{if(tg="undefined"!==typeof window&&null!==window.sessionStorage,!tg)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch(Eg){tg=!1}return tg};var rg={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&ng())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:n}=t;n&&ng()&&window.sessionStorage.setItem(n,e)}},og={name:"navigator",lookup(e){const t=[];if("undefined"!==typeof navigator){const{languages:e,userLanguage:n,language:r}=navigator;if(e)for(let o=0;o<e.length;o++)t.push(e[o]);n&&t.push(n),r&&t.push(r)}return t.length>0?t:void 0}},ag={name:"htmlTag",lookup(e){let t,{htmlTag:n}=e;const r=n||("undefined"!==typeof document?document.documentElement:null);return r&&"function"===typeof r.getAttribute&&(t=r.getAttribute("lang")),t}},ig={name:"path",lookup(e){let{lookupFromPathIndex:t}=e;if("undefined"===typeof window)return;const n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(!Array.isArray(n))return;const r="number"===typeof t?t:0;return n[r]?.replace("/","")}},lg={name:"subdomain",lookup(e){let{lookupFromSubdomainIndex:t}=e;const n="number"===typeof t?t+1:1,r="undefined"!==typeof window&&window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(r)return r[n]}};let sg=!1;try{document.cookie,sg=!0}catch(Eg){}const cg=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];sg||cg.splice(1,1);class ug{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{languageUtils:{}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=function(e){return Gm.call(Wm.call(arguments,1),t=>{if(t)for(const n in t)void 0===e[n]&&(e[n]=t[n])}),e}(t,this.options||{},{order:cg,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e}),"string"===typeof this.options.convertDetectedLanguage&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=e=>e.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=n,this.addDetector(Km),this.addDetector(Ym),this.addDetector(eg),this.addDetector(rg),this.addDetector(og),this.addDetector(ag),this.addDetector(ig),this.addDetector(lg),this.addDetector(Qm)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.order,t=[];return e.forEach(e=>{if(this.detectors[e]){let n=this.detectors[e].lookup(this.options);n&&"string"===typeof n&&(n=[n]),n&&(t=t.concat(n))}}),t=t.filter(e=>{return void 0!==e&&null!==e&&!("string"===typeof(t=e)&&[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(e=>e.test(t)));var t}).map(e=>this.options.convertDetectedLanguage(e)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(t=>{this.detectors[t]&&this.detectors[t].cacheUserLanguage(e,this.options)}))}}ug.type="languageDetector";const dg="ar",pg=["ar","en"],hg=["common","home","about","projects","contact"],fg={ar:{common:JSON.parse('{"logo":{"me":"\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646"},"nav":{"home":"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629","about":"\u0639\u0646\u064a","projects":"\u0645\u0634\u0627\u0631\u064a\u0639\u064a","contact":"\u062a\u0648\u0627\u0635\u0644"},"buttons":{"contact":"\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a","view_project":"\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639","demo":"\u0645\u0639\u0627\u064a\u0646\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639","cv":"\u0627\u0644\u0633\u064a\u0631\u0629 \u0627\u0644\u0630\u0627\u062a\u064a\u0629","projects":"\u0639\u0631\u0636 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639"},"copyright":"\u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629"}'),home:JSON.parse('{"hero":{"availability_status":"\u0645\u0648\u0638\u0641 \u062d\u0627\u0644\u064a\u064b\u0627\u060c \u0648\u0645\u0646\u0641\u062a\u062d \u0639\u0644\u0649 \u0641\u0631\u0635 \u0648\u0638\u064a\u0641\u064a\u0629 \u0623\u0641\u0636\u0644 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0645\u0633\u062a\u0642\u0644\u0629.","name":"\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631","job_titles":["\u0645\u0637\u0648\u0631 \u0648\u064a\u0628 \u0645\u062a\u0643\u0627\u0645\u0644","\u0645\u0637\u0648\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0623\u0645\u0627\u0645\u064a\u0629","\u0645\u0637\u0648\u0631 \u0645\u0648\u0627\u0642\u0639 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629","\u0645\u062f\u064a\u0631 \u0645\u0648\u0627\u0642\u0639 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629","\u0641\u0646\u064a \u062f\u0639\u0645 \u0628\u0631\u0627\u0645\u062c","\u0641\u0646\u064a \u062f\u0639\u0645 \u062a\u0642\u0646\u064a\u0629 \u0645\u0639\u0644\u0648\u0645\u0627\u062a","\u0641\u0646\u064a \u062f\u0639\u0645 \u0642\u0648\u0627\u0639\u062f \u0628\u064a\u0627\u0646\u0627\u062a","\u0641\u0646\u064a \u0646\u0638\u0645 \u062d\u0627\u0633\u0628 \u0622\u0644\u064a","\u0645\u062f\u062e\u0644 \u0628\u064a\u0627\u0646\u0627\u062a"],"introduction":"\u062e\u0631\u064a\u062c \u062f\u0628\u0644\u0648\u0645 \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644 \u0645\u0646 \u062c\u0627\u0645\u0639\u0629 \u0637\u064a\u0628\u0629\u060c \u0623\u0645\u062a\u0644\u0643 \u0645\u0647\u0627\u0631\u0627\u062a \u062a\u0642\u0646\u064a\u0629 \u0648\u0625\u062f\u0627\u0631\u064a\u0629 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0648\u0627\u0642\u0639\u060c \u0648\u0627\u0644\u062f\u0639\u0645 \u0627\u0644\u0641\u0646\u064a\u060c \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0631\u0642\u0645\u064a\u0629. \u0623\u0633\u0639\u0649 \u0625\u0644\u0649 \u062a\u0648\u0638\u064a\u0641 \u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0641\u064a \u0641\u0631\u0635 \u0645\u0647\u0646\u064a\u0629 \u0648\u0645\u0634\u0627\u0631\u064a\u0639 \u062a\u0633\u0647\u0645 \u0641\u064a \u062a\u062d\u0633\u064a\u0646 \u0643\u0641\u0627\u0621\u0629 \u0627\u0644\u0623\u0639\u0645\u0627\u0644.","tech_stack":[{"text":"HTML5","icon":"HTML"},{"text":"CSS3","icon":"CSS"},{"text":"JavaScript","icon":"JavaScript"},{"text":"React.js","icon":"React"},{"text":"PHP","icon":"PHP"},{"text":"MySQL","icon":"MySQL"},{"text":"REST API","icon":"REST"},{"text":"Git & GitHub","icon":"VC"}],"statistic":{"projects":"\u0645\u0634\u0627\u0631\u064a\u0639 \u0645\u0646\u062c\u0632\u0629","technologies":"\u062a\u0642\u0646\u064a\u0627\u062a \u0648\u0623\u062f\u0648\u0627\u062a \u0645\u0633\u062a\u062e\u062f\u0645\u0629","years":"\u0633\u0646\u0648\u0627\u062a \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628"},"profileAlt":"\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631 - \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0648\u0627\u0644\u062f\u0639\u0645 \u0627\u0644\u062a\u0642\u0646\u064a \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629"},"services":{"index":"SERVICES","label":"\u0645\u0627 \u0623\u0642\u062f\u0645\u0647","title":"\u062e\u062f\u0645\u0627\u062a\u064a","description":"\u0623\u0642\u062f\u0645 \u062e\u062f\u0645\u0627\u062a \u062a\u0642\u0646\u064a\u0629 \u0648\u0631\u0642\u0645\u064a\u0629 \u062a\u0634\u0645\u0644 \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629 \u0648\u0625\u062f\u0627\u0631\u062a\u0647\u0627\u060c \u0648\u0627\u0644\u062f\u0639\u0645 \u0627\u0644\u0641\u0646\u064a\u060c \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a\u060c \u0628\u0645\u0627 \u064a\u062a\u0646\u0627\u0633\u0628 \u0645\u0639 \u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a \u0627\u0644\u0623\u0641\u0631\u0627\u062f \u0648\u0627\u0644\u0645\u0646\u0634\u0622\u062a.","gridLabel":"\u0627\u0633\u062a\u0643\u0634\u0641 \u0627\u0644\u062e\u062f\u0645\u0627\u062a","empty":"\u0644\u0627 \u062a\u0648\u062c\u062f \u062e\u062f\u0645\u0627\u062a \u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0639\u0631\u0636 \u062d\u0627\u0644\u064a\u064b\u0627.","items":[{"id":"1","icon":"landing","title":"\u0628\u0627\u0642\u0629 \u0627\u0644\u0647\u0628\u0648\u0637 \u0648\u0627\u0644\u062a\u0639\u0631\u064a\u0641","description":"\u062a\u0635\u0645\u064a\u0645 \u0648\u062a\u0637\u0648\u064a\u0631 \u0635\u0641\u062d\u0629 \u062a\u0639\u0631\u064a\u0641\u064a\u0629 \u0645\u062a\u062c\u0627\u0648\u0628\u0629 \u0644\u0639\u0631\u0636 \u0645\u0646\u062a\u062c \u0623\u0648 \u062e\u062f\u0645\u0629 \u0623\u0648 \u0645\u0634\u0631\u0648\u0639 \u0646\u0627\u0634\u0626\u060c \u0645\u0639 \u0627\u0644\u0627\u0644\u062a\u0632\u0627\u0645 \u0628\u0627\u0644\u0647\u0648\u064a\u0629 \u0627\u0644\u0628\u0635\u0631\u064a\u0629\u060c \u0648\u0625\u0636\u0627\u0641\u0629 \u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0648\u0627\u0644\u062a\u0647\u064a\u0626\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629 \u0644\u0645\u062d\u0631\u0643\u0627\u062a \u0627\u0644\u0628\u062d\u062b."},{"id":"2","icon":"business","title":"\u0628\u0627\u0642\u0629 \u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0623\u0639\u0645\u0627\u0644","description":"\u062a\u0637\u0648\u064a\u0631 \u0645\u0648\u0627\u0642\u0639 \u0627\u062d\u062a\u0631\u0627\u0641\u064a\u0629 \u0644\u0644\u0634\u0631\u0643\u0627\u062a \u0648\u0627\u0644\u0645\u0646\u0634\u0622\u062a \u0645\u0646 \u0635\u0641\u062d\u062a\u064a\u0646 \u0625\u0644\u0649 \u062e\u0645\u0633 \u0635\u0641\u062d\u0627\u062a\u060c \u0645\u0639 \u062a\u0635\u0645\u064a\u0645 \u0645\u062a\u062c\u0627\u0648\u0628 \u0648\u0646\u0645\u0627\u0630\u062c \u062a\u0648\u0627\u0635\u0644 \u0645\u062a\u0642\u062f\u0645\u0629 \u0648\u0631\u0628\u0637 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u062e\u0627\u0631\u062c\u064a\u0629 \u0648\u062a\u0647\u064a\u0626\u0629 \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0644\u0645\u062d\u0631\u0643\u0627\u062a \u0627\u0644\u0628\u062d\u062b."},{"id":"3","icon":"custom","title":"\u0628\u0627\u0642\u0629 \u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u062e\u0635\u0635","description":"\u062a\u0637\u0648\u064a\u0631 \u062d\u0644\u0648\u0644 \u0648\u064a\u0628 \u0645\u062e\u0635\u0635\u0629 \u0648\u0641\u0642 \u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0645\u0634\u0631\u0648\u0639\u060c \u062a\u0634\u0645\u0644 \u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u062a\u0641\u0627\u0639\u0644\u064a\u0629 \u0648\u0644\u0648\u062d\u0627\u062a \u0627\u0644\u062a\u062d\u0643\u0645 \u0648\u0642\u0648\u0627\u0639\u062f \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a\u060c \u0645\u0639 \u0625\u0645\u0643\u0627\u0646\u064a\u0629 \u0627\u0644\u0639\u0645\u0644 \u0639\u0644\u0649 WordPress \u0648\u0645\u0646\u0635\u0627\u062a \u0627\u0644\u062a\u062c\u0627\u0631\u0629 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629."},{"id":"4","icon":"management","title":"\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629","description":"\u0625\u062f\u0627\u0631\u0629 \u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0648\u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0648\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a\u060c \u0648\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0631\u0642\u0645\u064a\u0629\u060c \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u0623\u062f\u0627\u0621 \u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062a \u0627\u0644\u062a\u0634\u063a\u064a\u0644\u064a\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629."},{"id":"5","icon":"support","title":"\u0627\u0644\u062f\u0639\u0645 \u0627\u0644\u0641\u0646\u064a \u0648\u062f\u0639\u0645 \u0627\u0644\u0623\u0646\u0638\u0645\u0629","description":"\u062f\u0639\u0645 \u0645\u0633\u062a\u062e\u062f\u0645\u064a \u0627\u0644\u062d\u0627\u0633\u0628 \u0648\u0627\u0644\u0628\u0631\u0627\u0645\u062c \u0648\u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0631\u0642\u0645\u064a\u0629\u060c \u0648\u062a\u0634\u062e\u064a\u0635 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629\u060c \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0623\u0639\u0637\u0627\u0644 \u0648\u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0625\u0631\u0634\u0627\u062f\u0627\u062a \u0648\u0627\u0644\u062d\u0644\u0648\u0644 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629."},{"id":"6","icon":"data","title":"\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u0643\u062a\u0628\u064a\u0629","description":"\u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0645\u0631\u0627\u062c\u0639\u062a\u0647\u0627 \u0648\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0648\u0627\u0644\u0633\u062c\u0644\u0627\u062a\u060c \u0648\u0625\u0639\u062f\u0627\u062f \u0627\u0644\u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0648\u0627\u0644\u062c\u062f\u0627\u0648\u0644 \u0648\u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u062a\u0637\u0628\u064a\u0642\u0627\u062a Microsoft 365 \u0628\u062f\u0642\u0629 \u0648\u0633\u0631\u064a\u0629."}]},"featuredProjects":{"header":{"title":"\u0623\u0628\u0631\u0632 \u0645\u0634\u0627\u0631\u064a\u0639\u064a","desc":"\u0645\u0634\u0627\u0631\u064a\u0639 \u0645\u062a\u0646\u0648\u0639\u0629 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u062d\u062f\u064a\u062b\u0629.","view_projects":"\u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639"},"items":[{"id":"Portfolio_v3"},{"id":"freelancer-hub"},{"id":"rest-api-wordpress"},{"id":"Ecommerce_Admin_Dashboard"}]},"footer":{"quickLinks":{"title":"\u0631\u0648\u0627\u0628\u0637 \u0633\u0631\u064a\u0639\u0629"},"socialMedia":{"title":"\u062d\u0633\u0627\u0628\u0627\u062a\u064a"},"contactInfo":{"title":"\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a","location":{"value":"\u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629\u060c \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629"},"email":{"title":"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a","value":"dhomlmgyr@gmail.com"},"tel":{"title":"\u0631\u0642\u0645 \u0627\u0644\u062c\u0648\u0627\u0644","value":"+966541590819"}},"copyright":"\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629."},"callToAction":{"title":"\u0644\u062f\u064a\u0643 \u0641\u0631\u0635\u0629 \u0648\u0638\u064a\u0641\u064a\u0629 \u0623\u0648 \u0645\u0634\u0631\u0648\u0639\u061f","paragraph":"\u064a\u0633\u0639\u062f\u0646\u064a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0628\u0634\u0623\u0646 \u0627\u0644\u0641\u0631\u0635 \u0627\u0644\u0648\u0638\u064a\u0641\u064a\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0648\u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629."}}'),about:JSON.parse('{"ui":{"present":"\u062d\u062a\u0649 \u0627\u0644\u0622\u0646","employmentTypes":{"full-time":"\u062f\u0648\u0627\u0645 \u0643\u0627\u0645\u0644","part-time":"\u062f\u0648\u0627\u0645 \u062c\u0632\u0626\u064a","seasonal":"\u0639\u0645\u0644 \u0645\u0648\u0633\u0645\u064a","contract":"\u0639\u0645\u0644 \u0628\u0639\u0642\u062f","internship":"\u062a\u062f\u0631\u064a\u0628"},"viewDocument":"\u0639\u0631\u0636","unsupportedDocument":"\u0647\u0630\u0627 \u0627\u0644\u0646\u0648\u0639 \u0645\u0646 \u0627\u0644\u0645\u0644\u0641\u0627\u062a \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645 \u0644\u0644\u0645\u0639\u0627\u064a\u0646\u0629","documentTypes":{"diploma":"\u0648\u062b\u064a\u0642\u0629 \u0627\u0644\u062f\u0628\u0644\u0648\u0645","graduation":"\u0648\u062b\u064a\u0642\u0629 \u0627\u0644\u062a\u062e\u0631\u062c","completion":"\u0634\u0647\u0627\u062f\u0629 \u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u062f\u0648\u0631\u0629","attendance":"\u0634\u0647\u0627\u062f\u0629 \u062d\u0636\u0648\u0631","appreciation":"\u0634\u0647\u0627\u062f\u0629 \u0634\u0643\u0631 \u0648\u062a\u0642\u062f\u064a\u0631","participation":"\u0634\u0647\u0627\u062f\u0629 \u0645\u0634\u0627\u0631\u0643\u0629","experience":"\u0634\u0647\u0627\u062f\u0629 \u062e\u0628\u0631\u0629","volunteering":"\u0633\u062c\u0644 \u0627\u0644\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u0629","certificate":"\u0627\u0644\u0634\u0647\u0627\u062f\u0629","document":"\u0627\u0644\u0648\u062b\u064a\u0642\u0629"},"skillSingular":"\u0645\u0647\u0627\u0631\u0629","skillPlural":"\u0645\u0647\u0627\u0631\u0627\u062a","volunteerOpportunitiesLabel":"\u0641\u0631\u0635\u0629 \u062a\u0637\u0648\u0639\u064a\u0629","contactButton":"\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a"},"content":{"intro":{"title":"\u0646\u0628\u0630\u0629 \u0639\u0646\u064a","paragraph1":"\u0623\u0646\u0627 \u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u063a\u064a\u0631\u060c \u062e\u0631\u064a\u062c \u062f\u0628\u0644\u0648\u0645 \u0645\u0637\u0648\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644 \u0645\u0646 \u062c\u0627\u0645\u0639\u0629 \u0637\u064a\u0628\u0629\u060c \u0623\u0645\u062a\u0644\u0643 \u0645\u0639\u0631\u0641\u0629 \u062a\u0642\u0646\u064a\u0629 \u0648\u0645\u0647\u0627\u0631\u0627\u062a \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629\u060c \u0648\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u062d\u0627\u0633\u0628 \u0648\u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0631\u0642\u0645\u064a\u0629\u060c \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a\u060c \u0648\u0625\u0639\u062f\u0627\u062f \u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631 \u0648\u0627\u0644\u0648\u062b\u0627\u0626\u0642\u060c \u0648\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u064a\u0648\u0645\u064a\u0629 \u0628\u0643\u0641\u0627\u0621\u0629 \u0648\u062f\u0642\u0629.","paragraph2":"\u0623\u0645\u062a\u0644\u0643 \u062e\u0628\u0631\u0629 \u0639\u0645\u0644\u064a\u0629 \u0641\u064a \u0627\u0644\u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0627\u0644\u0641\u0646\u062f\u0642\u064a \u0648\u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629 \u0636\u0645\u0646 \u0628\u064a\u0626\u0627\u062a \u0639\u0645\u0644 \u0645\u062a\u0646\u0648\u0639\u0629\u060c \u0648\u0623\u0633\u0639\u0649 \u0625\u0644\u0649 \u0641\u0631\u0635 \u0648\u0638\u064a\u0641\u064a\u0629 \u0645\u0633\u062a\u0642\u0631\u0629 \u062a\u062a\u0646\u0627\u0633\u0628 \u0645\u0639 \u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0648\u062a\u062a\u064a\u062d \u0644\u064a \u0627\u0644\u062a\u0637\u0648\u0631 \u0627\u0644\u0645\u0647\u0646\u064a \u0648\u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629 \u0641\u064a \u0631\u0641\u0639 \u0643\u0641\u0627\u0621\u0629 \u0627\u0644\u0623\u0639\u0645\u0627\u0644. \u0643\u0645\u0627 \u0623\u0642\u062f\u0645 \u062e\u062f\u0645\u0627\u062a \u0645\u0633\u062a\u0642\u0644\u0629 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0648\u0627\u0644\u062d\u0644\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064a\u0629\u060c \u0645\u0639 \u0627\u0647\u062a\u0645\u0627\u0645 \u0645\u0633\u062a\u0645\u0631 \u0628\u0627\u0644\u062a\u0639\u0644\u0645 \u0648\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0648\u062d\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062a."},"infoTitle":"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0633\u0631\u064a\u0639\u0629","profile":[{"label":"\u0627\u0644\u0645\u0648\u0642\u0639","value":"\u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629\u060c \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629"},{"label":"\u0627\u0644\u0645\u0624\u0647\u0644 \u0627\u0644\u0639\u0644\u0645\u064a","value":"\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637"},{"label":"\u0627\u0644\u062a\u062e\u0635\u0635","value":"\u0645\u0637\u0648\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644"},{"label":"\u0627\u0644\u0644\u063a\u0627\u062a","value":"\u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0648\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629"},{"label":"\u0627\u0644\u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0647\u0646\u064a\u0629","value":"\u0645\u0648\u0638\u0641 \u062d\u0627\u0644\u064a\u064b\u0627\u060c \u0648\u0645\u0646\u0641\u062a\u062d \u0639\u0644\u0649 \u0641\u0631\u0635 \u0648\u0638\u064a\u0641\u064a\u0629 \u062c\u062f\u064a\u062f\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0645\u0633\u062a\u0642\u0644\u0629"}],"education":{"title":"\u0627\u0644\u062a\u0639\u0644\u064a\u0645","gradeLabel":"\u0627\u0644\u0645\u0639\u062f\u0644 \u0627\u0644\u062a\u0631\u0627\u0643\u0645\u064a","honorsLabel":"\u0627\u0644\u062a\u0642\u062f\u064a\u0631","percentageLabel":"\u0627\u0644\u0646\u0633\u0628\u0629","items":[{"degree":"\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","school":"\u0627\u0644\u0643\u0644\u064a\u0629 \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u064a\u0629\u060c \u062c\u0627\u0645\u0639\u0629 \u0637\u064a\u0628\u0629 \u2014 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629","field":"\u0627\u0644\u062a\u062e\u0635\u0635: \u0645\u0637\u0648\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","honors":"\u062c\u064a\u062f","date":"2026-01-11","grade":"3.60 / 5","documentType":"diploma","document":"/documents/education/diploma.png"},{"degree":"\u0634\u0647\u0627\u062f\u0629 \u0627\u0644\u062b\u0627\u0646\u0648\u064a\u0629 \u0627\u0644\u0639\u0627\u0645\u0629","school":"\u062b\u0627\u0646\u0648\u064a\u0629 \u0623\u0628\u064a \u0633\u0641\u064a\u0627\u0646 \u0628\u0646 \u062d\u0631\u0628 \u2014 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629","field":"\u0627\u0644\u0645\u0633\u0627\u0631: \u0627\u0644\u0639\u0644\u0648\u0645 \u0627\u0644\u0637\u0628\u064a\u0639\u064a\u0629","honors":"\u062c\u064a\u062f \u062c\u062f\u064b\u0627 \u0645\u0631\u062a\u0641\u0639","date":"2022-07-30","grade":"85.39 / 100","documentType":"graduation","document":"/documents/education/secondary-school.png"}]},"experience":{"title":"\u0627\u0644\u062e\u0628\u0631\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629","items":[{"role":"\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642","company":"\u0641\u0646\u062f\u0642 \u0645\u0646\u0627\u0632\u0644 \u0627\u0644\u0631\u062d\u0645\u0629 \u2014 \u0634\u0631\u0643\u0629 \u0623\u0628\u0631\u0627\u062c \u0627\u0644\u0633\u0639\u0627\u062f\u0629","employmentType":"full-time","startDate":"2025-07-12","endDate":"Present","description":"\u0625\u062f\u0627\u0631\u0629 \u062d\u062c\u0648\u0632\u0627\u062a \u0648\u062a\u0633\u0643\u064a\u0646 \u0648\u0645\u063a\u0627\u062f\u0631\u0629 \u0627\u0644\u0646\u0632\u0644\u0627\u0621 \u0641\u064a \u0641\u0646\u062f\u0642 \u064a\u0636\u0645 160 \u063a\u0631\u0641\u0629\u060c \u0648\u0625\u0639\u062f\u0627\u062f \u0627\u0644\u062c\u062f\u0627\u0648\u0644 \u0648\u0627\u0644\u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0648\u0623\u0631\u0634\u0641\u0629 \u0627\u0644\u0633\u062c\u0644\u0627\u062a \u0648\u0627\u0644\u062a\u0646\u0633\u064a\u0642 \u0628\u064a\u0646 \u0627\u0644\u0623\u0642\u0633\u0627\u0645."},{"role":"\u0645\u0646\u062f\u0648\u0628 \u0645\u0628\u064a\u0639\u0627\u062a","company":"\u0645\u0624\u0633\u0633\u0629 \u0633\u062d\u0627\u0628\u0629 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0644\u0644\u0627\u062a\u0635\u0627\u0644\u0627\u062a (\u0634\u0631\u0643\u0629 \u0632\u064a\u0646 \u0644\u0644\u0627\u062a\u0635\u0627\u0644\u0627\u062a \u0627\u0644\u0645\u062a\u0646\u0642\u0644\u0629)","employmentType":"seasonal","startDate":"2025-04-16","endDate":"2025-05-16","description":"\u0628\u064a\u0639 \u0648\u062a\u0641\u0639\u064a\u0644 \u0634\u0631\u0627\u0626\u062d \u0627\u0644\u0627\u062a\u0635\u0627\u0644\u060c \u0648\u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u062a\u0648\u062b\u064a\u0642 \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a. \u062a\u062d\u0642\u064a\u0642 \u0627\u0644\u0645\u0633\u062a\u0647\u062f\u0641 \u0627\u0644\u0634\u0647\u0631\u064a \u062e\u0644\u0627\u0644 24 \u064a\u0648\u0645\u064b\u0627."},{"role":"\u0645\u0635\u0646\u0641 \u0623\u0637\u0639\u0645\u0629 \u0648\u0645\u0634\u0631\u0648\u0628\u0627\u062a (\u0643\u0627\u0634\u064a\u0631)","company":"\u0645\u0637\u0639\u0645 \u0627\u0644\u062a\u062d\u0644\u064a\u0629 \u0644\u0644\u0648\u062c\u0628\u0627\u062a \u0627\u0644\u0633\u0631\u064a\u0639\u0629","employmentType":"full-time","startDate":"2024-01-27","endDate":"2024-04-21","description":"\u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0648\u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a\u060c \u0648\u0625\u062f\u0627\u0631\u0629 \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0648\u0635\u064a\u0644 \u0648\u0645\u0637\u0627\u0628\u0642\u0629 \u0627\u0644\u0625\u064a\u0631\u0627\u062f\u0627\u062a \u0648\u0627\u0644\u062a\u0646\u0633\u064a\u0642 \u0645\u0639 \u0641\u0631\u064a\u0642 \u0627\u0644\u0639\u0645\u0644.","documentType":"experience","document":"/documents/experience/altahlia-cashier.png"},{"role":"\u0645\u0648\u0638\u0641 \u0635\u0646\u062f\u0648\u0642 \u0645\u062d\u0627\u0633\u0628\u0629 (\u0643\u0627\u0634\u064a\u0631)","company":"\u0639\u0635\u0627\u0626\u0631 \u0641\u0631\u0627\u0648\u0644\u062a\u064a","employmentType":"full-time","startDate":"2022-05-16","endDate":"2022-08-01","description":"\u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0648\u0625\u0635\u062f\u0627\u0631 \u0627\u0644\u0641\u0648\u0627\u062a\u064a\u0631 \u0648\u062a\u062d\u0635\u064a\u0644 \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0648\u0635\u064a\u0644 \u0648\u0645\u0637\u0627\u0628\u0642\u0629 \u0627\u0644\u0625\u064a\u0631\u0627\u062f\u0627\u062a \u0627\u0644\u064a\u0648\u0645\u064a\u0629.","documentType":"experience","document":"/documents/experience/frawlaty-cashier.png"}]},"certificates":{"title":"\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0648\u0627\u0644\u062f\u0648\u0631\u0627\u062a","items":[{"name":"\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629 \u0641\u064a \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629","provider":"\u0645\u0639\u0647\u062f \u0645\u0633\u062a\u0642\u0628\u0644\u0646\u0627 \u0644\u0644\u062a\u062f\u0631\u064a\u0628","date":"2026-10-05","hours":"40 \u0633\u0627\u0639\u0629 \u062a\u062f\u0631\u064a\u0628\u064a\u0629 \u2014 10 \u0623\u064a\u0627\u0645","documentType":"certificate","document":"/documents/courses/hr-management-basics.png"},{"name":"\u0645\u0642\u062f\u0645\u0629 \u0641\u064a \u0627\u0644\u0623\u0645\u0646 \u0627\u0644\u0633\u064a\u0628\u0631\u0627\u0646\u064a","provider":"\u0645\u0639\u0647\u062f \u0645\u0633\u062a\u0642\u0628\u0644\u0646\u0627 \u0644\u0644\u062a\u062f\u0631\u064a\u0628","date":"2026-10-03","hours":"50 \u0633\u0627\u0639\u0629 \u062a\u062f\u0631\u064a\u0628\u064a\u0629 \u2014 10 \u0623\u064a\u0627\u0645","documentType":"certificate","document":"/documents/courses/cybersecurity-introduction.png"},{"name":"\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0646\u0627\u0639\u0645\u0629 \u0648\u0641\u0646 \u0627\u0644\u0627\u062a\u0635\u0627\u0644","provider":"\u0635\u0646\u062f\u0648\u0642 \u062a\u0646\u0645\u064a\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629","date":"2026-05-05","hours":"\u0633\u0627\u0639\u0629 \u062a\u062f\u0631\u064a\u0628\u064a\u0629 \u0648\u0627\u062d\u062f\u0629","documentType":"certificate","document":"/documents/courses/soft-skills-communication.png"},{"name":"\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645","provider":"\u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u062d\u0633\u0648\u0628","date":"2026-03-27","documentType":"completion","document":"/documents/courses/hsoub-frontend.png"},{"name":"\u0627\u0644\u062a\u0639\u0631\u064a\u0641 \u0628\u0628\u0631\u0627\u0645\u062c \u0635\u0646\u062f\u0648\u0642 \u062a\u0646\u0645\u064a\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629","provider":"\u0635\u0646\u062f\u0648\u0642 \u062a\u0646\u0645\u064a\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629 (\u0647\u062f\u0641)","date":"2023-07-05","documentType":"certificate","document":"/documents/courses/hr-fund-programs.png"},{"name":"\u0627\u0644\u062a\u0633\u0627\u0645\u062d \u0648\u0627\u0644\u062a\u0639\u0627\u064a\u0634 \u0648\u0627\u0644\u0644\u062d\u0645\u0629 \u0627\u0644\u0648\u0637\u0646\u064a\u0629","provider":"\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0644\u0643 \u0639\u0628\u062f\u0627\u0644\u0639\u0632\u064a\u0632 \u0644\u0644\u062d\u0648\u0627\u0631 \u0627\u0644\u0648\u0637\u0646\u064a \u2014 \u0641\u0631\u0639 \u0646\u062c\u0631\u0627\u0646","date":"2023-05-14","documentType":"certificate","document":"/documents/courses/tolerance-coexistence.png"},{"name":"\u0627\u0644\u0645\u0631\u0648\u0646\u0629 \u0627\u0644\u0646\u0641\u0633\u064a\u0629","provider":"\u062c\u0645\u0639\u064a\u0629 \u0627\u0628\u0646 \u0628\u0627\u0632 \u0644\u0644\u062a\u0646\u0645\u064a\u0629 \u0627\u0644\u0623\u0633\u0631\u064a\u0629","date":"2023-03-23","documentType":"certificate","document":"/documents/courses/psychological-resilience.png"},{"name":"\u0623\u062e\u0644\u0627\u0642\u064a\u0627\u062a \u0627\u0644\u0639\u0645\u0644","provider":"\u0645\u0631\u0643\u0632 \u0637\u0627\u0642\u0627\u062a","date":"2022-09-13","documentType":"certificate","document":"/documents/courses/work-ethics.png"},{"name":"\u062e\u062f\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621","provider":"\u0645\u0631\u0643\u0632 \u0637\u0627\u0642\u0627\u062a","date":"2022-09-08","documentType":"certificate","document":"/documents/courses/customer-service.png"}]},"skills":{"title":"\u0645\u0647\u0627\u0631\u0627\u062a\u064a","groups":[{"title":"\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0648\u064a\u0628","items":[{"name":"HTML5"},{"name":"CSS3"},{"name":"JavaScript"},{"name":"React.js"},{"name":"Sass"},{"name":"Bootstrap"},{"name":"Tailwind CSS"}]},{"title":"\u0627\u0644\u062e\u0648\u0627\u062f\u0645 \u0648\u0642\u0648\u0627\u0639\u062f \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a","items":[{"name":"PHP"},{"name":"MySQL"},{"name":"XAMPP"},{"name":"REST API"}]},{"title":"\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u0644\u0645\u0646\u0635\u0627\u062a","items":[{"name":"Git"},{"name":"GitHub"},{"name":"WordPress"},{"name":"CMS"}]},{"title":"\u0627\u0644\u062a\u0635\u0645\u064a\u0645","items":[{"name":"Figma"},{"name":"Adobe Photoshop"},{"name":"Canva"}]},{"title":"\u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u0643\u062a\u0628\u064a\u0629 \u0648\u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629","items":[{"name":"Microsoft Word"},{"name":"Microsoft Excel"},{"name":"Microsoft PowerPoint"},{"name":"\u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a"},{"name":"\u0625\u0639\u062f\u0627\u062f \u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631"},{"name":"\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0648\u062b\u0627\u0626\u0642 \u0648\u0627\u0644\u0623\u0631\u0634\u0641\u0629"},{"name":"\u0623\u0646\u0638\u0645\u0629 \u0646\u0642\u0627\u0637 \u0627\u0644\u0628\u064a\u0639"}]},{"title":"\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a","items":[{"name":"ChatGPT"},{"name":"Google Gemini"},{"name":"Claude"},{"name":"DeepSeek"}]},{"title":"\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0627\u0644\u0634\u062e\u0635\u064a\u0629","items":[{"name":"\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0648\u0642\u062a"},{"name":"\u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0641\u0639\u0627\u0644"},{"name":"\u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u062c\u0645\u0627\u0639\u064a"},{"name":"\u062d\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062a"},{"name":"\u0627\u0644\u062f\u0642\u0629 \u0648\u0627\u0644\u0627\u0646\u062a\u0628\u0627\u0647 \u0644\u0644\u062a\u0641\u0627\u0635\u064a\u0644"},{"name":"\u0627\u0644\u062a\u0643\u064a\u0641 \u0645\u0639 \u0636\u063a\u0648\u0637 \u0627\u0644\u0639\u0645\u0644"},{"name":"\u062a\u062d\u0645\u0644 \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064a\u0629"}]}]},"volunteering":{"title":"\u0627\u0644\u062a\u0637\u0648\u0639","summary":{"label":"\u0627\u0644\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u0629 \u0627\u0644\u0645\u0648\u062b\u0642\u0629","value":"189 \u0633\u0627\u0639\u0629","hours":189,"opportunities":14,"startDate":"2022-12-17","endDate":"2023-06-05","documentType":"volunteering","document":"/documents/volunteering/volunteering-189-hours.png"},"items":[{"name":"\u0645\u0639\u0633\u0643\u0631 \u0631\u0633\u0644 \u0627\u0644\u0633\u0644\u0627\u0645 \u0644\u0644\u062a\u0645\u064a\u0632 \u0627\u0644\u0643\u0634\u0641\u064a \u0648\u0627\u0644\u062a\u0642\u0646\u064a 2023","provider":"\u0627\u0644\u0643\u0644\u064a\u0629 \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0628\u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629 \u2014 \u0646\u062c\u0631\u0627\u0646","startDate":"2023-05-14","endDate":"2023-05-18","documentType":"participation","document":"/documents/volunteering/rusul-alsalam-camp.png"},{"name":"\u0645\u0628\u0627\u062f\u0631\u0629 \u0639\u0648\u0646 \u0627\u0644\u062a\u0642\u0646\u064a \u0628\u0627\u0644\u0645\u0633\u062c\u062f \u0627\u0644\u0646\u0628\u0648\u064a \u0627\u0644\u0634\u0631\u064a\u0641","provider":"\u0627\u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u0644\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u062a\u0642\u0646\u064a \u0648\u0627\u0644\u0645\u0647\u0646\u064a \u0628\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629","startDate":"2023-03-26","endDate":"2023-04-06","documentType":"appreciation","document":"/documents/volunteering/technical-aoun.png"},{"name":"\u0627\u0644\u0645\u0628\u0627\u0631\u064a\u0627\u062a \u0627\u0644\u062d\u0648\u0627\u0631\u064a\u0629 \u0639\u0644\u0649 \u0645\u0633\u062a\u0648\u0649 \u062a\u0639\u0644\u064a\u0645 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629","provider":"\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0644\u0643 \u0639\u0628\u062f\u0627\u0644\u0639\u0632\u064a\u0632 \u0644\u0644\u062d\u0648\u0627\u0631 \u0627\u0644\u0648\u0637\u0646\u064a \u2014 \u0625\u062f\u0627\u0631\u0629 \u062a\u0639\u0644\u064a\u0645 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629","startDate":"2021-10-24","endDate":"2021-11-04","documentType":"appreciation","document":"/documents/volunteering/dialogue-competition.png"}]},"goal":{"title":"\u062a\u0637\u0644\u0639\u0627\u062a\u064a \u0627\u0644\u0645\u0647\u0646\u064a\u0629","description":"\u0623\u0633\u0639\u0649 \u0625\u0644\u0649 \u0641\u0631\u0635\u0629 \u0645\u0647\u0646\u064a\u0629 \u0645\u0633\u062a\u0642\u0631\u0629 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0623\u0648 \u0627\u0644\u062f\u0639\u0645 \u0627\u0644\u062a\u0642\u0646\u064a \u0623\u0648 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629\u060c \u0623\u0633\u0627\u0647\u0645 \u0641\u064a\u0647\u0627 \u0628\u062e\u0628\u0631\u0627\u062a\u064a \u0648\u0623\u0648\u0627\u0635\u0644 \u062a\u0637\u0648\u064a\u0631 \u0645\u0647\u0627\u0631\u0627\u062a\u064a."}},"breadcrumb":{"title":"\u0639\u0646\u064a"}}'),projects:Ff,contact:JSON.parse('{"form":{"title":"\u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0648\u0627\u0635\u0644","description":"\u064a\u0633\u0639\u062f\u0646\u064a \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0631\u0633\u0627\u0644\u062a\u0643.","firstName":"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0644","lastName":"\u0627\u0633\u0645 \u0627\u0644\u0639\u0627\u0626\u0644\u0629","firstNamePlaceholder":"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0644","lastNamePlaceholder":"\u0627\u0633\u0645 \u0627\u0644\u0639\u0627\u0626\u0644\u0629","email":"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a","emailPlaceholder":"example@email.com","phone":"\u0631\u0642\u0645 \u0627\u0644\u062c\u0648\u0627\u0644","phonePlaceholder":"+966541234567","topic":"\u0645\u0648\u0636\u0648\u0639 \u0627\u0644\u0631\u0633\u0627\u0644\u0629","selectTopic":"\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0648\u0636\u0648\u0639","customTopic":"\u0645\u0648\u0636\u0648\u0639 \u0622\u062e\u0631","customTopicPlaceholder":"\u0627\u0643\u062a\u0628 \u0645\u0648\u0636\u0648\u0639 \u0627\u0644\u0631\u0633\u0627\u0644\u0629","message":"\u0627\u0644\u0631\u0633\u0627\u0644\u0629","messagePlaceholder":"\u0627\u0643\u062a\u0628 \u0631\u0633\u0627\u0644\u062a\u0643 \u0647\u0646\u0627...","messageNote":"10 \u0623\u062d\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644.","attachments":"\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062a","uploadTitle":"\u0625\u0631\u0641\u0627\u0642 \u0645\u0644\u0641\u0627\u062a \u0645\u0639 \u0627\u0644\u0631\u0633\u0627\u0644\u0629","uploadDescription":"\u062d\u062a\u0649 3 \u0645\u0644\u0641\u0627\u062a\u060c 5 MB \u0644\u0643\u0644 \u0645\u0644\u0641 \u064815 MB \u0625\u062c\u0645\u0627\u0644\u064b\u0627.","chooseFiles":"\u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0645\u0644\u0641\u0627\u062a","removeFile":"\u062d\u0630\u0641 \u0627\u0644\u0645\u0644\u0641","filesCount":"{{count}} \u0645\u0646 {{max}} \u0645\u0644\u0641\u0627\u062a","securityTitle":"\u0627\u0644\u062a\u062d\u0642\u0642 \u0627\u0644\u0623\u0645\u0646\u064a","securitySuccess":"\u062a\u0645 \u0627\u0644\u062a\u062d\u0642\u0642 \u0628\u0646\u062c\u0627\u062d.","securityFailed":"\u062a\u0639\u0630\u0631 \u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u062a\u062d\u0642\u0642 \u0623\u0648 \u0627\u0646\u062a\u0647\u062a \u0635\u0644\u0627\u062d\u064a\u062a\u0647.","retryVerification":"\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u062a\u062d\u0642\u0642","submit":"\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629","sending":"\u062c\u0627\u0631\u064d \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629...","honeypot":"\u0627\u062a\u0631\u0643 \u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0641\u0627\u0631\u063a\u064b\u0627"},"topics":{"general":"\u062a\u0648\u0627\u0635\u0644 \u0639\u0627\u0645","question":"\u0627\u0633\u062a\u0641\u0633\u0627\u0631","suggestion":"\u0627\u0642\u062a\u0631\u0627\u062d","feedback":"\u0645\u0644\u0627\u062d\u0638\u0627\u062a","collaboration":"\u062a\u0639\u0627\u0648\u0646 \u0623\u0648 \u0634\u0631\u0627\u0643\u0629","employment":"\u0641\u0631\u0635\u0629 \u0648\u0638\u064a\u0641\u064a\u0629","project":"\u0645\u0634\u0631\u0648\u0639 \u0623\u0648 \u062e\u062f\u0645\u0629","other":"\u0623\u062e\u0631\u0649"},"topicOptions":["general","question","suggestion","feedback","collaboration","employment","project","other"],"status":{"successTitle":"\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u062a\u0643 \u0628\u0646\u062c\u0627\u062d!","successDescription":"\u0634\u0643\u0631\u064b\u0627 \u0644\u062a\u0648\u0627\u0635\u0644\u0643. \u0633\u0623\u0631\u0627\u062c\u0639 \u0631\u0633\u0627\u0644\u062a\u0643 \u0648\u0623\u0631\u062f \u0639\u0644\u064a\u0643 \u0641\u064a \u0623\u0642\u0631\u0628 \u0648\u0642\u062a \u0645\u0645\u0643\u0646\u060c \u0639\u0627\u062f\u0629\u064b \u062e\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629.","successWhatsapp":"\u0642\u062f \u0623\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628 \u0639\u0644\u0649 \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0630\u064a \u0623\u0631\u0641\u0642\u062a\u0647.","successEmail":"\u0633\u064a\u0643\u0648\u0646 \u0627\u0644\u0631\u062f \u0639\u0628\u0631 \u0628\u0631\u064a\u062f\u0643 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a.","invalidTitle":"\u064a\u0631\u062c\u0649 \u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a","invalidDescription":"\u0635\u062d\u062d \u0627\u0644\u062d\u0642\u0648\u0644 \u0627\u0644\u0645\u062d\u062f\u062f\u0629 \u0628\u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0623\u062d\u0645\u0631 \u062b\u0645 \u062d\u0627\u0648\u0644 \u0627\u0644\u0625\u0631\u0633\u0627\u0644.","errorTitle":"\u062a\u0639\u0630\u0631 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629","error":"\u062a\u0639\u0630\u0631 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629. \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649.","unexpected":"\u062d\u062f\u062b \u062e\u0637\u0623 \u063a\u064a\u0631 \u0645\u062a\u0648\u0642\u0639.","botcheck":"\u062a\u0639\u0630\u0631 \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u0637\u0644\u0628.","turnstileRequired":"\u064a\u0631\u062c\u0649 \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631 \u062d\u062a\u0649 \u064a\u0643\u062a\u0645\u0644 \u0627\u0644\u062a\u062d\u0642\u0642 \u0627\u0644\u0623\u0645\u0646\u064a\u060c \u062b\u0645 \u062d\u0627\u0648\u0644 \u0627\u0644\u0625\u0631\u0633\u0627\u0644 \u0645\u062c\u062f\u062f\u064b\u0627.","rateLimit":"\u062a\u0645 \u062a\u062c\u0627\u0648\u0632 \u0627\u0644\u062d\u062f \u0627\u0644\u0645\u0633\u0645\u0648\u062d \u0645\u0646 \u0627\u0644\u0631\u0633\u0627\u0626\u0644. \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0644\u0627\u062d\u0642\u064b\u0627.","requestTooLarge":"\u062d\u062c\u0645 \u0627\u0644\u0637\u0644\u0628 \u0643\u0628\u064a\u0631 \u062c\u062f\u064b\u0627. \u062d\u0627\u0648\u0644 \u0625\u0631\u0633\u0627\u0644 \u0645\u0644\u0641\u0627\u062a \u0623\u0635\u063a\u0631.","securityError":"\u0641\u0634\u0644 \u0627\u0644\u062a\u062d\u0642\u0642 \u0627\u0644\u0623\u0645\u0646\u064a \u0623\u0648 \u0627\u0646\u062a\u0647\u062a \u0635\u0644\u0627\u062d\u064a\u062a\u0647. \u064a\u0631\u062c\u0649 \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629.","serviceUnavailable":"\u062e\u062f\u0645\u0629 \u0627\u0644\u0625\u0631\u0633\u0627\u0644 \u063a\u064a\u0631 \u0645\u062a\u0627\u062d\u0629 \u0645\u0624\u0642\u062a\u064b\u0627. \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0644\u0627\u062d\u0642\u064b\u0627.","maxFiles":"\u064a\u0645\u0643\u0646\u0643 \u0625\u0631\u0641\u0627\u0642 {{max}} \u0645\u0644\u0641\u0627\u062a \u0643\u062d\u062f \u0623\u0642\u0635\u0649.","invalidFileSize":"\u062d\u062c\u0645 \u0627\u0644\u0645\u0644\u0641 \\"{{name}}\\" \u063a\u064a\u0631 \u0645\u0633\u0645\u0648\u062d. \u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649 {{max}} MB \u0644\u0643\u0644 \u0645\u0644\u0641.","invalidFileType":"\u0646\u0648\u0639 \u0627\u0644\u0645\u0644\u0641 \\"{{name}}\\" \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645.","totalSize":"\u0625\u062c\u0645\u0627\u0644\u064a \u062d\u062c\u0645 \u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062a \u064a\u062c\u0628 \u0623\u0644\u0627 \u064a\u062a\u062c\u0627\u0648\u0632 {{max}} MB."},"info":{"title":"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644"},"methods":{"email":"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a","whatsapp":"\u0648\u0627\u062a\u0633\u0627\u0628","whatsappValue":"\u062a\u0648\u0627\u0635\u0644 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628","phone":"\u0627\u062a\u0635\u0627\u0644 \u0647\u0627\u062a\u0641\u064a"},"availability":{"title":"\u0648\u0642\u062a \u0627\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u0627\u0644\u0645\u062a\u0648\u0642\u0639","description":"\u0639\u0627\u062f\u0629\u064b \u0645\u0627 \u0623\u0631\u062f \u0639\u0644\u0649 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u062e\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629\u060c \u0648\u0642\u062f \u064a\u062e\u062a\u0644\u0641 \u0648\u0642\u062a \u0627\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u062d\u0633\u0628 \u0627\u0644\u0638\u0631\u0648\u0641."},"social":{"title":"\u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a"},"contactData":{"email":"dhomlmgyr@gmail.com","phone":"966541590819","whatsapp":"https://wa.me/966541590819","linkedin":"https://linkedin.com/in/dhomlmgyr","github":"https://github.com/dhomlmgyr188","instagram":"https://www.instagram.com/dhunr1","snapchat":"https://www.snapchat.com/t/0jbJpmvk"},"contactMethods":[{"id":"email","icon":"mail","titleKey":"methods.email","valueKey":"contactData.email","linkType":"mailto"},{"id":"whatsapp","icon":"whatsapp","titleKey":"methods.whatsapp","valueKey":"methods.whatsappValue","linkType":"whatsapp"},{"id":"phone","icon":"phone","titleKey":"methods.phone","valueKey":"contactData.phone","linkType":"tel"}],"socialMedia":[{"id":"linkedin","title":"LinkedIn","icon":"linkedin"},{"id":"github","title":"GitHub","icon":"github"},{"id":"whatsapp","title":"WhatsApp","icon":"whatsapp"},{"id":"email","title":"Email","icon":"mail"},{"id":"instagram","title":"Instagram","icon":"instagram"},{"id":"snapchat","title":"Snapchat","icon":"snapchat"}]}')},en:{common:JSON.parse('{"logo":{"me":"Abdulrahman"},"nav":{"home":"Home","about":"About","projects":"Projects","contact":"Contact"},"buttons":{"contact":"Contact Me","view_project":"Project Details","demo":"Project Preview","cv":"Resume","projects":"View Projects"},"copyright":"All rights reserved"}'),home:JSON.parse('{"hero":{"availability_status":"Currently employed and open to better career opportunities and freelance projects.","name":"Abdulrahman Al-Mughyir","job_titles":["Full-Stack Web Developer","Front-End Developer","Website Developer","Website Administrator","Software Support Technician","IT Support Technician","Database Support Technician","Computer Systems Technician","Data Entry Clerk"],"introduction":"A graduate of the Full-Stack Web Development Diploma program at Taibah University, with technical and administrative skills in website development, technical support, data management, and digital systems. I aim to apply my skills to professional opportunities and projects that contribute to improving business efficiency.","tech_stack":[{"text":"HTML5","icon":"HTML"},{"text":"CSS3","icon":"CSS"},{"text":"JavaScript","icon":"JavaScript"},{"text":"React.js","icon":"React"},{"text":"PHP","icon":"PHP"},{"text":"MySQL","icon":"MySQL"},{"text":"REST API","icon":"REST"},{"text":"Git & GitHub","icon":"VC"}],"statistic":{"projects":"Completed Projects","technologies":"Technologies & Tools Used","years":"Years in Web Development"},"profileAlt":"Abdulrahman Al-Mughyir - Web Development, Technical Support, and Data Management in Madinah"},"services":{"index":"SERVICES","label":"What I Offer","title":"My Services","description":"I provide technical and digital services, including website development and management, technical support, and data administration, tailored to the needs of individuals and businesses.","gridLabel":"Explore Services","empty":"No services are currently available.","items":[{"id":"1","icon":"landing","title":"Landing & Introductory Page Package","description":"Designing and developing a responsive introductory page for a product, service, or startup, aligned with its visual identity and featuring contact options and basic search engine optimization (SEO)."},{"id":"2","icon":"business","title":"Business Website Package","description":"Developing professional websites for companies and businesses with two to five pages, responsive design, advanced contact forms, external service integrations, and search engine optimization for individual pages."},{"id":"3","icon":"custom","title":"Custom Web Development Package","description":"Developing tailored web solutions based on project requirements, including interactive interfaces, dashboards, and databases, with options for WordPress and e-commerce platforms."},{"id":"4","icon":"management","title":"Website Management","description":"Managing website content, updating pages and information, organizing digital data, monitoring website performance, and resolving basic operational issues."},{"id":"5","icon":"support","title":"Technical & Systems Support","description":"Supporting users of computers, software, and digital systems, diagnosing basic technical issues, tracking incidents, and providing appropriate guidance and solutions."},{"id":"6","icon":"data","title":"Data & Office Administration","description":"Entering and reviewing data, organizing files and records, and preparing documents, spreadsheets, and reports using Microsoft 365 applications with accuracy and confidentiality."}]},"featuredProjects":{"header":{"title":"Featured Projects","desc":"A variety of website development projects built using modern web technologies.","view_projects":"All Projects"},"items":[{"id":"Portfolio_v3"},{"id":"freelancer-hub"},{"id":"rest-api-wordpress"},{"id":"Ecommerce_Admin_Dashboard"}]},"footer":{"quickLinks":{"title":"Quick Links"},"socialMedia":{"title":"My Social Accounts"},"contactInfo":{"title":"Contact Me","location":{"value":"Madinah, Saudi Arabia"},"email":{"title":"Email Address","value":"dhomlmgyr@gmail.com"},"tel":{"title":"Mobile Number","value":"+966541590819"}},"copyright":"Abdulrahman Al-Mughyir. All rights reserved."},"callToAction":{"title":"Have a Job Opportunity or a Project?","paragraph":"I\'d be happy to connect regarding career opportunities and technical or administrative projects."}}'),about:JSON.parse('{"ui":{"present":"Present","employmentTypes":{"full-time":"Full-time","part-time":"Part-time","seasonal":"Seasonal","contract":"Contract","internship":"Internship"},"viewDocument":"View","unsupportedDocument":"Preview is not supported for this file type","documentTypes":{"diploma":"Diploma Document","graduation":"Graduation Document","completion":"Completion Certificate","attendance":"Attendance Certificate","appreciation":"Appreciation Certificate","participation":"Participation Certificate","experience":"Experience Certificate","volunteering":"Volunteer Hours Record","certificate":"Certificate","document":"Document"},"skillSingular":"skill","skillPlural":"skills","volunteerOpportunitiesLabel":"Volunteer Opportunities","contactButton":"Contact Me"},"content":{"intro":{"title":"About Me","paragraph1":"I am Abdulrahman Nasser Al-Mughyir, a graduate of the Full-Stack Web Development Diploma program at Taibah University. I have technical knowledge and skills in website development, computer applications, digital systems, data management, report and document preparation, and efficient daily task organization.","paragraph2":"I have practical experience in hotel reception, sales, and administrative work across diverse work environments. I seek stable career opportunities that align with my skills, support my professional growth, and allow me to contribute to business efficiency. I also provide freelance website development and digital solutions, with a continuous interest in learning, skill development, and problem-solving."},"infoTitle":"Quick Information","profile":[{"label":"Location","value":"Madinah, Saudi Arabia"},{"label":"Qualification","value":"Intermediate Diploma"},{"label":"Specialization","value":"Full-Stack Web Development"},{"label":"Languages","value":"Arabic and English"},{"label":"Professional Status","value":"Currently employed and open to new career opportunities and freelance projects"}],"education":{"title":"Education","gradeLabel":"GPA","honorsLabel":"Grade","percentageLabel":"Percentage","items":[{"degree":"Intermediate Diploma in Full-Stack Web Development","school":"Applied College, Taibah University \u2014 Madinah","field":"Major: Full-Stack Web Development","honors":"Good","date":"2026-01-11","grade":"3.60 / 5","documentType":"diploma","document":"/documents/education/diploma.png"},{"degree":"General Secondary School Certificate","school":"Abi Sufyan bin Harb Secondary School \u2014 Madinah","field":"Track: Natural Sciences","honors":"Very Good (High)","date":"2022-07-30","grade":"85.39 / 100","documentType":"graduation","document":"/documents/education/secondary-school.png"}]},"experience":{"title":"Work Experience","items":[{"role":"Hotel Receptionist","company":"Manazil Al-Rahmah Hotel \u2014 Abraj Al-Saadah Company","employmentType":"full-time","startDate":"2025-07-12","endDate":"Present","description":"Managing guest reservations, check-ins, and check-outs at a 160-room hotel, preparing schedules and documents, archiving records, and coordinating between departments."},{"role":"Telecommunications Sales Representative","company":"Sahabat Al-Madinah Telecommunications Establishment (Zain Telecommunications)","employmentType":"seasonal","startDate":"2025-04-16","endDate":"2025-05-16","description":"Selling and activating SIM cards, verifying customer information, and recording payments. Achieved the monthly sales target within 24 days."},{"role":"Food and Beverage Sorter (Cashier)","company":"Al-Tahlia Fast Food Restaurant","employmentType":"full-time","startDate":"2024-01-27","endDate":"2024-04-21","description":"Processing orders and payments, managing delivery applications, reconciling revenue, and coordinating with the team.","documentType":"experience","document":"/documents/experience/altahlia-cashier.png"},{"role":"Cash Register Clerk (Cashier)","company":"Frawlaty Juices","employmentType":"full-time","startDate":"2022-05-16","endDate":"2022-08-01","description":"Handling customer orders, issuing invoices, collecting payments, managing delivery applications, and reconciling daily revenue.","documentType":"experience","document":"/documents/experience/frawlaty-cashier.png"}]},"certificates":{"title":"Certificates & Courses","items":[{"name":"Fundamentals of Human Resource Management","provider":"Our Future Training Institute","date":"2026-10-05","hours":"40 training hours \u2014 10 days","documentType":"certificate","document":"/documents/courses/hr-management-basics.png"},{"name":"Introduction to Cybersecurity","provider":"Our Future Training Institute","date":"2026-10-03","hours":"50 training hours \u2014 10 days","documentType":"certificate","document":"/documents/courses/cybersecurity-introduction.png"},{"name":"Soft Skills and Effective Communication","provider":"Human Resources Development Fund (HRDF)","date":"2026-05-05","hours":"1 training hour","documentType":"certificate","document":"/documents/courses/soft-skills-communication.png"},{"name":"User Interface Development","provider":"Hsoub Academy","date":"2026-03-27","documentType":"completion","document":"/documents/courses/hsoub-frontend.png"},{"name":"Introduction to Human Resources Development Fund Programs","provider":"Human Resources Development Fund (HRDF)","date":"2023-07-05","documentType":"certificate","document":"/documents/courses/hr-fund-programs.png"},{"name":"Tolerance, Coexistence, and National Unity","provider":"King Abdulaziz Center for National Dialogue \u2014 Najran Branch","date":"2023-05-14","documentType":"certificate","document":"/documents/courses/tolerance-coexistence.png"},{"name":"Psychological Resilience","provider":"Ibn Baz Association for Family Development","date":"2023-03-23","documentType":"certificate","document":"/documents/courses/psychological-resilience.png"},{"name":"Work Ethics","provider":"Taqat Center","date":"2022-09-13","documentType":"certificate","document":"/documents/courses/work-ethics.png"},{"name":"Customer Service","provider":"Taqat Center","date":"2022-09-08","documentType":"certificate","document":"/documents/courses/customer-service.png"}]},"skills":{"title":"Skills","groups":[{"title":"Frontend Development","items":[{"name":"HTML5"},{"name":"CSS3"},{"name":"JavaScript"},{"name":"React.js"},{"name":"Sass"},{"name":"Bootstrap"},{"name":"Tailwind CSS"}]},{"title":"Backend & Databases","items":[{"name":"PHP"},{"name":"MySQL"},{"name":"XAMPP"},{"name":"REST API"}]},{"title":"Development Tools & Platforms","items":[{"name":"Git"},{"name":"GitHub"},{"name":"WordPress"},{"name":"CMS"}]},{"title":"Design","items":[{"name":"Figma"},{"name":"Adobe Photoshop"},{"name":"Canva"}]},{"title":"Office & Administration","items":[{"name":"Microsoft Word"},{"name":"Microsoft Excel"},{"name":"Microsoft PowerPoint"},{"name":"Data Entry"},{"name":"Report Preparation"},{"name":"Document Organization and Archiving"},{"name":"Point-of-Sale Systems"}]},{"title":"AI Tools","items":[{"name":"ChatGPT"},{"name":"Google Gemini"},{"name":"Claude"},{"name":"DeepSeek"}]},{"title":"Professional & Personal Skills","items":[{"name":"Time Management"},{"name":"Effective Communication"},{"name":"Teamwork"},{"name":"Problem-Solving"},{"name":"Accuracy and Attention to Detail"},{"name":"Adaptability Under Work Pressure"},{"name":"Responsibility"}]}]},"volunteering":{"title":"Volunteering","summary":{"label":"Documented Volunteer Hours","value":"189 hours","hours":189,"opportunities":14,"startDate":"2022-12-17","endDate":"2023-06-05","documentType":"volunteering","document":"/documents/volunteering/volunteering-189-hours.png"},"items":[{"name":"Peace Messengers Scouting and Technology Excellence Camp 2023","provider":"Technical College in Madinah \u2014 Najran","startDate":"2023-05-14","endDate":"2023-05-18","documentType":"participation","document":"/documents/volunteering/rusul-alsalam-camp.png"},{"name":"Technical Aoun Initiative at the Prophet\'s Mosque","provider":"General Directorate of Technical and Vocational Training \u2014 Madinah Region","startDate":"2023-03-26","endDate":"2023-04-06","documentType":"appreciation","document":"/documents/volunteering/technical-aoun.png"},{"name":"Dialogue Competitions at Madinah Education Department","provider":"King Abdulaziz Center for National Dialogue \u2014 Madinah Education Department","startDate":"2021-10-24","endDate":"2021-11-04","documentType":"appreciation","document":"/documents/volunteering/dialogue-competition.png"}]},"goal":{"title":"Career Aspirations","description":"I seek a stable career opportunity in web development, IT support, or administrative work where I can contribute my experience and continue developing my skills."}},"breadcrumb":{"title":"About Me"}}'),projects:Hf,contact:JSON.parse('{"form":{"title":"Contact Form","description":"I\'d be happy to receive your message.","firstName":"First Name","lastName":"Last Name","firstNamePlaceholder":"First name","lastNamePlaceholder":"Last name","email":"Email Address","emailPlaceholder":"example@email.com","phone":"Mobile Number","phonePlaceholder":"+966541234567","topic":"Message Subject","selectTopic":"Select a subject","customTopic":"Other Subject","customTopicPlaceholder":"Enter your message subject","message":"Message","messagePlaceholder":"Write your message here...","messageNote":"At least 10 characters.","attachments":"Attachments","uploadTitle":"Attach files to your message","uploadDescription":"Up to 3 files, 5 MB each and 15 MB total.","chooseFiles":"Choose Files","removeFile":"Remove file","filesCount":"{{count}} of {{max}} files","securityTitle":"Security Verification","securitySuccess":"Verification completed successfully.","securityFailed":"Verification failed or expired.","retryVerification":"Retry Verification","submit":"Send Message","sending":"Sending Message...","honeypot":"Leave this field empty"},"topics":{"general":"General Contact","question":"Inquiry","suggestion":"Suggestion","feedback":"Feedback","collaboration":"Collaboration or Partnership","employment":"Job Opportunity","project":"Project or Service","other":"Other"},"topicOptions":["general","question","suggestion","feedback","collaboration","employment","project","other"],"status":{"successTitle":"Your message was sent successfully!","successDescription":"Thank you for reaching out. I\'ll review your message and respond as soon as possible, usually within 24 hours.","successWhatsapp":"I may contact you via WhatsApp at the number provided.","successEmail":"I\'ll reply via email.","invalidTitle":"Please review your details","invalidDescription":"Correct the fields outlined in red, then try again.","errorTitle":"Message not sent","error":"Unable to send your message. Please try again.","unexpected":"An unexpected error occurred.","botcheck":"Unable to validate the request.","turnstileRequired":"Please wait for security verification to complete, then try again.","rateLimit":"Too many messages. Please try again later.","requestTooLarge":"The request is too large. Try smaller files.","securityError":"Security verification failed or expired. Please retry.","serviceUnavailable":"The submission service is temporarily unavailable. Please try later.","maxFiles":"You can attach up to {{max}} files.","invalidFileSize":"Invalid size for \\"{{name}}\\". Maximum {{max}} MB per file.","invalidFileType":"Unsupported file type: \\"{{name}}\\".","totalSize":"Total attachment size must not exceed {{max}} MB."},"info":{"title":"Contact Information"},"methods":{"email":"Email Address","whatsapp":"WhatsApp","whatsappValue":"Contact via WhatsApp","phone":"Phone Call"},"availability":{"title":"Expected Response Time","description":"I usually respond within 24 hours, although response times may vary."},"social":{"title":"Social Profiles"},"contactData":{"email":"dhomlmgyr@gmail.com","phone":"966541590819","whatsapp":"https://wa.me/966541590819","linkedin":"https://linkedin.com/in/dhomlmgyr","github":"https://github.com/dhomlmgyr188","instagram":"https://www.instagram.com/dhunr1","snapchat":"https://www.snapchat.com/t/0jbJpmvk"},"contactMethods":[{"id":"email","icon":"mail","titleKey":"methods.email","valueKey":"contactData.email","linkType":"mailto"},{"id":"whatsapp","icon":"whatsapp","titleKey":"methods.whatsapp","valueKey":"methods.whatsappValue","linkType":"whatsapp"},{"id":"phone","icon":"phone","titleKey":"methods.phone","valueKey":"contactData.phone","linkType":"tel"}],"socialMedia":[{"id":"linkedin","title":"LinkedIn","icon":"linkedin"},{"id":"github","title":"GitHub","icon":"github"},{"id":"whatsapp","title":"WhatsApp","icon":"whatsapp"},{"id":"email","title":"Email","icon":"mail"},{"id":"instagram","title":"Instagram","icon":"instagram"},{"id":"snapchat","title":"Snapchat","icon":"snapchat"}]}')}},mg=e=>{const t=String(e||"").trim().toLowerCase().replace(/_/g,"-").split("-")[0];return pg.includes(t)?t:dg},gg=()=>{if("undefined"===typeof window)return dg;const e="/abdulrahman-portfolio-react",t=window.location.pathname,n=(t.startsWith(`${e}/`)?t.slice(28):t).split("/").filter(Boolean)[0];return pg.includes(n)?n:dg},vg=e=>{if("undefined"===typeof document)return;const t=mg(e),n="ar"===t?"rtl":"ltr",r=document.documentElement;r.setAttribute("lang",t),r.setAttribute("dir",n)};Um.isInitialized||Um.use(ug).use(Vm).init({resources:fg,lng:gg(),supportedLngs:pg,fallbackLng:dg,load:"languageOnly",nonExplicitSupportedLngs:!0,ns:hg,defaultNS:"common",fallbackNS:"common",detection:{order:["localStorage"],lookupLocalStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:mg},interpolation:{escapeValue:!1},returnNull:!1,returnEmptyString:!1,react:{useSuspense:!1},debug:!1});const bg=e=>{vg(e)},yg="__portfolioDocumentLanguageListener";Um[yg]&&Um.off("languageChanged",Um[yg]),Um.on("languageChanged",bg),Um[yg]=bg,vg(Um.resolvedLanguage||Um.language||dg);const xg=n.p+"static/media/saudia-sans-bold.aeaeb29bd75393fdabfc.otf",wg=n.p+"static/media/saudia-sans-regular.9af8db836ec4b5272370.otf",kg=n.p+"static/media/Barlow-Bold.0cb1ab864072bf9e0991.ttf",Sg=Jo`

  /* =====================================
     01 — FONT FACES
  ===================================== */

  @font-face {
    font-family: "saudia-sans";
    src: url(${wg}) format("opentype");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "saudia-sans";
    src: url(${xg}) format("opentype");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: "Barlow";
    src: url(${n.p+"static/media/Barlow-Medium.d4afdc134fc10b739bab.ttf"}) format("truetype");
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: "Barlow";
    src: url(${kg}) format("truetype");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

  /* =====================================
     02 — GLOBAL RESET
  ===================================== */

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  /* =====================================
     03 — DOCUMENT
  ===================================== */

  html {
    scroll-behavior: smooth;

    scroll-padding-top: calc(
      var(--header-height) + 16px
    );

    text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;

    -webkit-tap-highlight-color: transparent;
  }

  /* =====================================
     04 — BODY
  ===================================== */

  body {
    min-width: 320px;
    min-height: 100vh;
    min-height: 100dvh;

    font-size: var(--size-md);
    font-weight: 400;
    line-height: var(--line-height-body);

    color: var(--color-text-primary);
    background-color: var(--color-background);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    overflow-wrap: break-word;

    transition:
      background-color var(--transition-normal),
      color var(--transition-normal);
  }

  /* =====================================
     05 — LANGUAGE & DIRECTION
  ===================================== */

  html[lang="ar"] body {
    font-family:
      "saudia-sans",
      Tahoma,
      Arial,
      sans-serif;

    line-height: 1.85;
  }

  html[lang="en"] body {
    font-family:
      "Barlow",
      Arial,
      sans-serif;

    line-height: 1.65;
  }

  /*
    The application manages the document's
    lang and dir attributes through i18n.

    We do not force direction globally.
  */

  html[dir="rtl"] {
    direction: rtl;
  }

  html[dir="ltr"] {
    direction: ltr;
  }

  /* =====================================
     06 — APPLICATION ROOT
  ===================================== */

  #root {
    min-height: 100vh;
    min-height: 100dvh;

    isolation: isolate;
  }

  /* =====================================
     07 — TYPOGRAPHY
  ===================================== */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--color-heading);

    font-weight: 700;
    line-height: var(--heading-line-height);

    overflow-wrap: break-word;
    text-wrap: balance;
  }

  h1 {
    font-size: clamp(
      2rem,
      4.5vw,
      var(--size-4xl)
    );
  }

  h2 {
    font-size: clamp(
      1.5rem,
      3.5vw,
      var(--size-3xl)
    );
  }

  h3 {
    font-size: clamp(
      1.2rem,
      2.5vw,
      var(--size-2xl)
    );
  }

  h4 {
    font-size: var(--size-lg);
  }

  h5 {
    font-size: var(--size-ml);
  }

  h6 {
    font-size: var(--size-md);
  }

  /* =====================================
     08 — PARAGRAPHS & TEXT
  ===================================== */

  p {
    color: inherit;
    line-height: inherit;
  }

  small {
    font-size: var(--size-sm);
    color: var(--color-text-secondary);
  }

  strong,
  b {
    font-weight: 700;
  }

  em,
  i {
    font-style: italic;
  }

  /*
    Preserve whitespace in code blocks,
    but prevent long content from
    overflowing the viewport.
  */

  pre {
    max-width: 100%;
    overflow-x: auto;
  }

  code,
  pre,
  kbd,
  samp {
    font-family:
      "Consolas",
      "Courier New",
      monospace;
  }

  /* =====================================
     09 — LINKS
  ===================================== */

  a {
    color: inherit;
    text-decoration: none;

    transition:
      color var(--transition-fast),
      opacity var(--transition-fast);
  }

  a:focus-visible {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 3px;
    border-radius: var(--radius-sm);
  }

  /* =====================================
     10 — BUTTONS
  ===================================== */

  /*
    Button appearance belongs to:
    Components/ui/Button/Button.js

    Global styles only provide basic
    browser normalization.
  */

  button {
    font: inherit;
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }

  button:focus-visible {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 3px;
  }

  /* =====================================
     11 — FORM CONTROLS
  ===================================== */

  input,
  textarea,
  select {
    font: inherit;

    max-width: 100%;
    min-width: 0;

    color: var(--color-input-text);
    background-color: var(--color-input-background);

    border-color: var(--color-border);
    border-radius: var(--radius-input);
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--color-input-placeholder);
    opacity: 1;
  }

  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  input:disabled,
  textarea:disabled,
  select:disabled {
    cursor: not-allowed;
  }

  textarea {
    resize: vertical;
  }

  /*
    Keep checkbox and radio controls
    consistent with the active theme.
  */

  input[type="checkbox"],
  input[type="radio"] {
    accent-color: var(--color-primary);
  }

  /*
    File inputs retain their native
    functionality and accessibility.
  */

  input[type="file"] {
    max-width: 100%;
  }

  /* =====================================
     12 — LISTS
  ===================================== */

  ul,
  ol {
    list-style: none;
  }

  /* =====================================
     13 — IMAGES & MEDIA
  ===================================== */

  img,
  picture,
  video,
  canvas {
    display: block;
    max-width: 100%;
  }

  img {
    height: auto;
  }

  svg {
    vertical-align: middle;
    flex-shrink: 0;
  }

  iframe {
    max-width: 100%;
  }

  /* =====================================
     14 — SECTIONS & ANCHORS
  ===================================== */

  section,
  [id] {
    scroll-margin-top: calc(
      var(--header-height) + 16px
    );
  }

  /* =====================================
     15 — TABLES
  ===================================== */

  table {
    width: 100%;

    border-collapse: collapse;
    border-spacing: 0;

    text-align: center;
    table-layout: auto;
  }

  th,
  td {
    padding: 12px 16px;

    border: 1px solid var(--color-border);

    vertical-align: middle;
    overflow-wrap: anywhere;
  }

  th {
    color: var(--color-text-primary);
    background-color: var(
      --color-background-tertiary
    );

    font-weight: 700;
  }

  td {
    color: var(--color-text-primary);
    background-color: var(--color-background);
  }

  tbody tr {
    transition:
      background-color var(--transition-fast);
  }

  tbody tr:hover td {
    background-color: var(
      --color-background-tertiary
    );
  }

  /* =====================================
     16 — HORIZONTAL RULE
  ===================================== */

  hr {
    border: 0;
    border-top: 1px solid var(--color-divider);
  }

  /* =====================================
     17 — FOCUS & ACCESSIBILITY
  ===================================== */

  :focus-visible {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 3px;
  }

  /*
    Accessible screen-reader-only utility.
  */

  .sr-only {
    position: absolute !important;

    width: 1px !important;
    height: 1px !important;

    padding: 0 !important;
    margin: -1px !important;

    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;

    white-space: nowrap !important;
    border: 0 !important;
  }

  /*
    Skip link for keyboard navigation.
    It becomes visible when focused.
  */

  .skip-link {
    position: fixed;
    inset-block-start: 12px;
    inset-inline-start: 12px;

    z-index: 10000;

    padding: 12px 18px;

    color: var(--color-on-primary);
    background-color: var(--color-primary);

    border-radius: var(--radius-button);

    transform: translateY(-160%);

    transition:
      transform var(--transition-fast);
  }

  .skip-link:focus {
    transform: translateY(0);
  }

  /* =====================================
     18 — RESPONSIVE
  ===================================== */

  @media (max-width: 768px) {

    body {
      font-size: var(--size-md);
    }

    h1 {
      font-size: clamp(
        2rem,
        7vw,
        2.5rem
      );
    }

    h2 {
      font-size: clamp(
        1.5rem,
        5.5vw,
        2rem
      );
    }

    h3 {
      font-size: var(--size-lg);
    }

    h4 {
      font-size: var(--size-ml);
    }

    h5 {
      font-size: var(--size-md);
    }

    h6 {
      font-size: var(--size-sm);
    }

    th,
    td {
      padding: 10px 12px;
    }

  }

  /* =====================================
     19 — SMALL MOBILE DEVICES
  ===================================== */

  @media (max-width: 480px) {

    body {
      min-width: 320px;
    }

    h1 {
      font-size: clamp(
        1.85rem,
        8vw,
        2.2rem
      );
    }

    h2 {
      font-size: clamp(
        1.4rem,
        6vw,
        1.8rem
      );
    }

    h3 {
      font-size: clamp(
        1.15rem,
        5vw,
        1.35rem
      );
    }

  }

  /* =====================================
     20 — REDUCED MOTION
  ===================================== */

  @media (prefers-reduced-motion: reduce) {

    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      scroll-behavior: auto !important;

      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;

      transition-duration: 0.01ms !important;
    }

  }

`,jg=document.getElementById("root");if(!jg)throw new Error('React initialization failed: the element with id="root" was not found.');r().createRoot(jg).render((0,l().jsx)(s().StrictMode,{children:(0,l().jsx)(Dt,{basename:"/abdulrahman-portfolio-react",children:(0,l().jsxs)(qa,{children:[(0,l().jsx)(Sg,{}),(0,l().jsx)(em,{})]})})}))})();