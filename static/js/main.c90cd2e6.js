/*! For license information please see main.c90cd2e6.js.LICENSE.txt */
(()=>{"use strict";var e={};const t={};function n(r){const o=t[r];if(void 0!==o)return o.exports;const a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.cw=e=>{var t;return()=>{if(e){var n=e;e=0,t={exports:{}},n.call(t.exports,t,t.exports)}return t.exports}},(()=>{const e=Object.getPrototypeOf;let t;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}const a=Object.create(null);n.r(a);const i={};t||=[null,e({}),e([]),e(e)];for(var l=2&o&&r;("object"==typeof l||"function"==typeof l)&&!~t.indexOf(l);l=e(l))Object.getOwnPropertyNames(l).forEach(e=>i[e]=()=>r[e]);return i.default=()=>r,n.d(a,i),a}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/abdulrahman-portfolio-react/",n.nc=void 0;var r=n.cw(function(e,t){var n=p(),r=c(),o=i();function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function s(e){for(var t=e,n=t;n&&!n.alternate;)0!==(4098&(t=n).flags)&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return 3===t.tag?e:null}function u(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function d(e){if(31===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function f(e){if(s(e)!==e)throw Error(a(188))}function h(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=h(e)))return t;e=e.sibling}return null}function m(e,t,n,r,o,a){for(;null!==e;){if((5===e.tag||27===e.tag||6===e.tag)&&n(e,r,o,a)||(22!==e.tag||null===e.memoizedState)&&(t||5!==e.tag&&27!==e.tag)&&m(e.child,t,n,r,o,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;null!==e;){if(3===e.tag||5===e.tag||27===e.tag)return e;e=e.return}return null}function v(e){var t=!1;for(e=e.return;null!==e&&(4===e.tag&&(t=!0),3!==e.tag&&5!==e.tag&&27!==e.tag);)e=e.return;return t}function y(e){var t=[null,null],n=g(e);return null===n||b(t,e,n.child,{foundSelf:!1}),t}function b(e,t,n,r){for(;null!==n;){if(n===t)r.foundSelf=!0;else if(5===n.tag||27===n.tag||6===n.tag){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((22!==n.tag||null===n.memoizedState)&&b(e,t,n.child,r))return!0;n=n.sibling}return!1}function x(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(a(559))}}var w=null,k=null;function S(e,t,n){return e===n||e===t&&(w=e,!0)}function j(e,t,n){return e===n?(k=e,!1):e===t&&(null!==k&&(w=e),!0)}function C(e){if(null===e)return null;do{e=null===e?null:e.return}while(e&&5!==e.tag&&27!==e.tag&&3!==e.tag);return e||null}function E(e,t,n){for(var r=0,o=e;o;o=n(o))r++;o=0;for(var a=t;a;a=n(a))o++;for(;0<r-o;)e=n(e),r--;for(;0<o-r;)t=n(t),o--;for(;r--;){if(e===t||null!==t&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var T=Object.assign,P=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),_=Symbol.for("react.consumer"),D=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),F=Symbol.for("react.lazy");Symbol.for("react.scope");var U=Symbol.for("react.activity"),H=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var B=Symbol.for("react.memo_cache_sentinel"),W=Symbol.for("react.view_transition"),V=Symbol.for("react.recoverable"),q=Symbol.iterator;function G(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=q&&e[q]||e["@@iterator"])?e:null}var Y=Symbol.for("react.client.reference");function K(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===Y?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case z:return"Fragment";case R:return"Profiler";case O:return"StrictMode";case M:return"Suspense";case I:return"SuspenseList";case U:return"Activity";case W:return"ViewTransition"}if("object"===typeof e)switch(e.$$typeof){case L:return"Portal";case D:return e.displayName||"Context";case _:return(e._context.displayName||"Context")+".Consumer";case A:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case $:return null!==(t=e.displayName||null)?t:K(e.type)||"Memo";case F:t=e._payload,e=e._init;try{return K(e(t))}catch(n){}}return null}var Q=Array.isArray,J=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},ee=[],te=-1;function ne(e){return{current:e}}function re(e){0>te||(e.current=ee[te],ee[te]=null,te--)}function oe(e,t){te++,ee[te]=e.current,e.current=t}var ae,ie,le=ne(null),se=ne(null),ce=ne(null),ue=ne(null);function de(e,t){switch(oe(ce,t),oe(se,e),oe(le,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ip(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=$p(t=Ip(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}re(le),oe(le,e)}function pe(){re(le),re(se),re(ce)}function fe(e){var t=e.memoizedState;null!==t&&(hh._currentValue=t.memoizedState,oe(ue,e));var n=$p(t=le.current,e.type);t!==n&&(oe(se,e),oe(le,n))}function he(e){se.current===e&&(re(le),re(se)),ue.current===e&&(re(ue),hh._currentValue=Z)}function me(e){if(void 0===ae)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ae=t&&t[1]||"",ie=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+ae+e+ie}var ge=!1;function ve(e,t){if(!e||ge)return"";ge=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(i){r=i}n=!1;try{var o=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(void 0!==o?Object.defineProperty(e.prototype,"props",o):delete e.prototype.props)}}}else{try{throw Error()}catch(l){r=l}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(s){if(s&&r&&"string"===typeof s.stack)return[s.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=r.DetermineComponentFrameRoot(),i=a[0],l=a[1];if(i&&l){var s=i.split("\n"),c=l.split("\n");for(o=r=0;r<s.length&&!s[r].includes("DetermineComponentFrameRoot");)r++;for(;o<c.length&&!c[o].includes("DetermineComponentFrameRoot");)o++;if(r===s.length||o===c.length)for(r=s.length-1,o=c.length-1;1<=r&&0<=o&&s[r]!==c[o];)o--;for(;1<=r&&0<=o;r--,o--)if(s[r]!==c[o]){if(1!==r||1!==o)do{if(r--,0>--o||s[r]!==c[o]){var u="\n"+s[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=o);break}}}finally{ge=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?me(n):""}function ye(e,t){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me("Lazy");case 13:return e.child!==t&&null!==t?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return ve(e.type,!1);case 11:return ve(e.type.render,!1);case 1:return ve(e.type,!0);case 31:return me("Activity");case 30:return me("ViewTransition");default:return""}}function be(e){try{var t="",n=null;do{t+=ye(e,n),n=e,e=e.return}while(e);return t}catch(r){return"\nError generating stack: "+r.message+"\n"+r.stack}}var xe=Object.prototype.hasOwnProperty,we=n.unstable_scheduleCallback,ke=n.unstable_cancelCallback,Se=n.unstable_shouldYield,je=n.unstable_requestPaint,Ce=n.unstable_now,Ee=n.unstable_getCurrentPriorityLevel,Te=n.unstable_ImmediatePriority,Pe=n.unstable_UserBlockingPriority,Ne=n.unstable_NormalPriority,Le=n.unstable_LowPriority,ze=n.unstable_IdlePriority,Oe=n.log,Re=n.unstable_setDisableYieldValue,_e=null,De=null;function Ae(e){if("function"===typeof Oe&&Re(e),De&&"function"===typeof De.setStrictMode)try{De.setStrictMode(_e,e)}catch(t){}}var Me=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(Ie(e)/$e|0)|0},Ie=Math.log,$e=Math.LN2;var Fe=256,Ue=262144,He=4194304;function Be(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return 3932160&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function We(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var o=0,a=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var l=134217727&r;return 0!==l?0!==(r=l&~a)?o=Be(r):0!==(i&=l)?o=Be(i):n||0!==(n=l&~e)&&(o=Be(n)):0!==(l=r&~a)?o=Be(l):0!==i?o=Be(i):n||0!==(n=r&~e)&&(o=Be(n)),0===o?0:0!==t&&t!==o&&0===(t&a)&&((a=o&-o)>=(n=t&-t)||32===a&&0!==(4194048&n))?t:o}function Ve(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function qe(e,t){0!==(8&t)&&(t|=32&t);var n=e.entangledLanes;if(0!==n)for(e=e.entanglements,n&=t;0<n;){var r=31-Me(n),o=1<<r;t|=e[r],n&=~o}return t}function Ge(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Ye(){var e=He;return 0===(62914560&(He<<=1))&&(He=4194304),e}function Ke(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qe(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Je(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Me(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|261930&n}function Xe(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}function Ze(e,t){var n=t&-t;return 0!==((n=0!==(42&n)?1:et(n))&(e.suspendedLanes|t))?0:n}function et(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function tt(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function nt(){var e=X.p;return 0!==e?e:void 0===(e=window.event)?32:Lh(e.type)}function rt(e,t){var n=X.p;try{return X.p=e,t()}finally{X.p=n}}var ot=Math.random().toString(36).slice(2),at="__reactFiber$"+ot,it="__reactProps$"+ot,lt="__reactContainer$"+ot,st="__reactEvents$"+ot,ct="__reactListeners$"+ot,ut="__reactHandles$"+ot,dt="__reactResources$"+ot,pt="__reactMarker$"+ot,ft="__reactLoad$"+ot;function ht(e){delete e[at],delete e[it],delete e[ct],delete e[ut]}function mt(e){var t;if(t=e[at])return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[at]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=_f(e);null!==e;){if(n=e[at])return n;e=_f(e)}return t}n=(e=n).parentNode}return null}function gt(e){if(e=e[at]||e[lt]){var t=e.tag;if(5===t||6===t||13===t||31===t||26===t||27===t||3===t)return e}return null}function vt(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(a(33))}function yt(e){var t=e[dt];return t||(t=e[dt]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function bt(e){e[pt]=!0}function xt(e){e[ft]=void 0}var wt=new Set,kt={};function St(e,t){jt(e,t),jt(e+"Capture",t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)wt.add(t[e])}var Ct=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Et={},Tt={};var Pt=!1;function Nt(){var e=Pt;return Pt=!1,e}function Lt(e,t,n){if(o=t,xe.call(Tt,o)||!xe.call(Et,o)&&(Ct.test(o)?Tt[o]=!0:(Et[o]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,n)}var o}function zt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,n)}}function Ot(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,r)}}function Rt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function _t(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Dt(e){if(!e._valueTracker){var t=_t(e)?"checked":"value";e._valueTracker=function(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var o=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){n=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e,t,""+e[t])}}function At(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_t(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}var Mt=/[\n"\\]/g;function It(e){return e.replace(Mt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function $t(e,t,n,r,o,a,i,l){e.name="",null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i?e.type=i:e.removeAttribute("type"),null!=t?"number"===i?(0===t&&""===e.value||e.value!=t)&&(e.value=""+Rt(t)):e.value!==""+Rt(t)&&(e.value=""+Rt(t)):"submit"!==i&&"reset"!==i||e.removeAttribute("value"),null!=t?"number"===i&&e.value==t?Ut(e,Rt(e.value)):Ut(e,Rt(t)):null!=n?Ut(e,Rt(n)):null!=r&&e.removeAttribute("value"),null==o&&null!=a&&(e.defaultChecked=!!a),null!=o&&(e.checked=o&&"function"!==typeof o&&"symbol"!==typeof o),null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.name=""+Rt(l):e.removeAttribute("name")}function Ft(e,t,n,r,o,a,i,l){if(null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a&&(e.type=a),null!=t||null!=n){if(!("submit"!==a&&"reset"!==a||void 0!==t&&null!==t))return void Dt(e);n=null!=n?""+Rt(n):"",t=null!=t?""+Rt(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:o)&&"symbol"!==typeof r&&!!r,e.checked=l?e.checked:!!r,e.defaultChecked=!!r,null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.name=i),Dt(e)}function Ut(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Ht(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function Bt(e,t,n){null==t||((t=""+Rt(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+Rt(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function Wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(a(92));if(Q(r)){if(1<r.length)throw Error(a(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=Rt(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r),Dt(e)}function Vt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var qt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gt(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||qt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Yt(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(a(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="",Pt=!0);for(var o in t)r=t[o],t.hasOwnProperty(o)&&n[o]!==r&&(Gt(e,o,r),Pt=!0)}else for(var i in t)t.hasOwnProperty(i)&&Gt(e,i,t[i])}function Kt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xt(e){return Jt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var en=null;function tn(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var nn=null,rn=null;function on(e){var t=gt(e);if(t&&(e=t.stateNode)){var n=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if($t(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+It(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=r[it]||null;if(!o)throw Error(a(90));$t(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&At(r)}break e;case"textarea":Bt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&Ht(e,!!n.multiple,t,!1)}}}var an=!1;function ln(e,t,n){if(an)return e(t,n);an=!0;try{return e(t)}finally{if(an=!1,(null!==nn||null!==rn)&&(yd(),nn&&(t=nn,e=rn,rn=nn=null,on(t),e)))for(t=0;t<e.length;t++)on(e[t])}}function sn(e,t){var n=e.stateNode;if(null===n)return null;var r=n[it]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var cn=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),un=!1;if(cn)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){un=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch(tm){un=!1}var pn=null,fn=null,hn=null;function mn(){if(hn)return hn;var e,t,n=fn,r=n.length,o="value"in pn?pn.value:pn.textContent,a=o.length;for(e=0;e<r&&n[e]===o[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===o[a-t];t++);return hn=o.slice(e,1<t?1-t:void 0)}function gn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function vn(){return!0}function yn(){return!1}function bn(e){function t(t,n,r,o,a){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(o):o[i]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?vn:yn,this.isPropagationStopped=yn,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=vn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=vn)},persist:function(){},isPersistent:vn}),t}var xn,wn,kn,Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jn=bn(Sn),Cn=T({},Sn,{view:0,detail:0}),En=bn(Cn),Tn=T({},Cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:In,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&"mousemove"===e.type?(xn=e.screenX-kn.screenX,wn=e.screenY-kn.screenY):wn=xn=0,kn=e),xn)},movementY:function(e){return"movementY"in e?e.movementY:wn}}),Pn=bn(Tn),Nn=bn(T({},Tn,{dataTransfer:0})),Ln=bn(T({},Cn,{relatedTarget:0})),zn=bn(T({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0})),On=bn(T({},Sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),Rn=bn(T({},Sn,{data:0})),_n={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},An={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=An[e])&&!!t[e]}function In(){return Mn}var $n=bn(T({},Cn,{key:function(e){if(e.key){var t=_n[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=gn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Dn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:In,charCode:function(e){return"keypress"===e.type?gn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?gn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),Fn=bn(T({},Tn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Un=bn(T({},Sn,{submitter:0})),Hn=bn(T({},Cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:In})),Bn=bn(T({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Wn=bn(T({},Tn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Vn=bn(T({},Sn,{newState:0,oldState:0,source:0})),qn=[9,13,27,32],Gn=cn&&"CompositionEvent"in window,Yn=null;cn&&"documentMode"in document&&(Yn=document.documentMode);var Kn=cn&&"TextEvent"in window&&!Yn,Qn=cn&&(!Gn||Yn&&8<Yn&&11>=Yn),Jn=String.fromCharCode(32),Xn=!1;function Zn(e,t){switch(e){case"keyup":return-1!==qn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function er(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var tr=!1;var nr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nr[e.type]:"textarea"===t}function or(e,t,n,r){nn?rn?rn.push(r):rn=[r]:nn=r,0<(t=Sp(t,"onChange")).length&&(n=new jn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ar=null,ir=null;function lr(e){mp(e,0)}function sr(e){if(At(vt(e)))return e}function cr(e,t){if("change"===e)return t}var ur=!1;if(cn){var dr;if(cn){var pr="oninput"in document;if(!pr){var fr=document.createElement("div");fr.setAttribute("oninput","return;"),pr="function"===typeof fr.oninput}dr=pr}else dr=!1;ur=dr&&(!document.documentMode||9<document.documentMode)}function hr(){ar&&(ar.detachEvent("onpropertychange",mr),ir=ar=null)}function mr(e){if("value"===e.propertyName&&sr(ir)){var t=[];or(t,ir,e,tn(e)),ln(lr,t)}}function gr(e,t,n){"focusin"===e?(hr(),ir=n,(ar=t).attachEvent("onpropertychange",mr)):"focusout"===e&&hr()}function vr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return sr(ir)}function yr(e,t){if("click"===e)return sr(t)}function br(e,t){if("input"===e||"change"===e)return sr(t)}var xr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function wr(e,t){if(xr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!xe.call(t,o)||!xr(e[o],t[o]))return!1}return!0}function kr(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Sr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jr(e,t){var n,r=Sr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Sr(r)}}function Cr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Cr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Er(e){for(var t=kr((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=kr((e=t.contentWindow).document)}return t}function Tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var Pr=cn&&"documentMode"in document&&11>=document.documentMode,Nr=null,Lr=null,zr=null,Or=!1;function Rr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;Or||null==Nr||Nr!==kr(r)||("selectionStart"in(r=Nr)&&Tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},zr&&wr(zr,r)||(zr=r,0<(r=Sp(Lr,"onSelect")).length&&(t=new jn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nr)))}function _r(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dr={animationend:_r("Animation","AnimationEnd"),animationiteration:_r("Animation","AnimationIteration"),animationstart:_r("Animation","AnimationStart"),transitionrun:_r("Transition","TransitionRun"),transitionstart:_r("Transition","TransitionStart"),transitioncancel:_r("Transition","TransitionCancel"),transitionend:_r("Transition","TransitionEnd")},Ar={},Mr={};function Ir(e){if(Ar[e])return Ar[e];if(!Dr[e])return e;var t,n=Dr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Mr)return Ar[e]=n[t];return e}cn&&(Mr=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);var $r=Ir("animationend"),Fr=Ir("animationiteration"),Ur=Ir("animationstart"),Hr=Ir("transitionrun"),Br=Ir("transitionstart"),Wr=Ir("transitioncancel"),Vr=Ir("transitionend"),qr=new Map,Gr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(e,t){qr.set(e,t),St(t,[e])}Gr.push("scrollEnd");var Kr=0;function Qr(e,t){return null!=e.name&&"auto"!==e.name?e.name:null!==t.autoName?t.autoName:(e="_"+(e=Zu.identifierPrefix)+"t_"+(Kr++).toString(32)+"_",t.autoName=e)}function Jr(e){if(null==e||"string"===typeof e)return e;var t=null,n=ld;if(null!==n)for(var r=0;r<n.length;r++){var o=e[n[r]];if(null!=o){if("none"===o)return"none";t=null==t?o:t+" "+o}}return null==t?e.default:t}function Xr(e,t){return e=Jr(e),null==(t=Jr(t))?"auto"===e?null:e:"auto"===t?null:t}var Zr="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},eo=[],to=0,no=0;function ro(){for(var e=to,t=no=to=0;t<e;){var n=eo[t];eo[t++]=null;var r=eo[t];eo[t++]=null;var o=eo[t];eo[t++]=null;var a=eo[t];if(eo[t++]=null,null!==r&&null!==o){var i=r.pending;null===i?o.next=o:(o.next=i.next,i.next=o),r.pending=o}0!==a&&lo(n,o,a)}}function oo(e,t,n,r){eo[to++]=e,eo[to++]=t,eo[to++]=n,eo[to++]=r,no|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function ao(e,t,n,r){return oo(e,t,n,r),so(e)}function io(e,t){return oo(e,null,null,t),so(e)}function lo(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var o=!1,a=e.return;null!==a;)a.childLanes|=n,null!==(r=a.alternate)&&(r.childLanes|=n),22===a.tag&&(null===(e=a.stateNode)||1&e._visibility||(o=!0)),e=a,a=a.return;return 3===e.tag?(a=e.stateNode,o&&null!==t&&(o=31-Me(n),null===(r=(e=a.hiddenUpdates)[o])?e[o]=[t]:r.push(t),t.lane=536870912|n),a):null}function so(e){if(50<sd)throw sd=0,cd=null,Error(a(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var co={};function uo(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function po(e,t,n,r){return new uo(e,t,n,r)}function fo(e){return!(!(e=e.prototype)||!e.isReactComponent)}function ho(e,t){var n=e.alternate;return null===n?((n=po(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=1206910976&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function mo(e,t){e.flags&=1206910978;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function go(e,t,n,r,o,i){var l=0;if("function"===typeof(r=e))fo(r)&&(l=1);else if("string"===typeof r)l=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,le.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(r){case U:return(e=po(31,n,t,o)).elementType=U,e.lanes=i,e;case z:return vo(n.children,o,i,t);case O:l=8,o|=24;break;case R:return(e=po(12,n,t,2|o)).elementType=R,e.lanes=i,e;case M:return(e=po(13,n,t,o)).elementType=M,e.lanes=i,e;case I:return(e=po(19,n,t,o)).elementType=I,e.lanes=i,e;case H:case W:return(e=po(30,n,t,e=32|o)).elementType=W,e.lanes=i,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if("object"===typeof r&&null!==r)switch(r.$$typeof){case D:l=10;break e;case _:l=9;break e;case A:l=11;break e;case $:l=14;break e;case F:l=16,r=null;break e}l=29,n=Error(a(130,null===e?"null":typeof e,"")),r=null}return(t=po(l,n,t,o)).elementType=e,t.type=r,t.lanes=i,t}function vo(e,t,n,r){return(e=po(7,e,r,t)).lanes=n,e}function yo(e,t,n){return(e=po(6,e,null,t)).lanes=n,e}function bo(e){var t=po(18,null,null,0);return t.stateNode=e,t}function xo(e,t,n){return(t=po(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wo=new WeakMap;function ko(e,t){if("object"===typeof e&&null!==e){var n=wo.get(e);return void 0!==n?n:(t={value:e,source:t,stack:be(t)},wo.set(e,t),t)}return{value:e,source:t,stack:be(t)}}var So=[],jo=0,Co=null,Eo=0,To=[],Po=0,No=null,Lo=1,zo="";function Oo(e,t){So[jo++]=Eo,So[jo++]=Co,Co=e,Eo=t}function Ro(e,t,n){To[Po++]=Lo,To[Po++]=zo,To[Po++]=No,No=e;var r=Lo;e=zo;var o=32-Me(r)-1;r&=~(1<<o),n+=1;var a=32-Me(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Lo=1<<32-Me(t)+o|n<<o|r,zo=a+e}else Lo=1<<a|n<<o|r,zo=e}function _o(e){null!==e.return&&(Oo(e,1),Ro(e,1,0))}function Do(e){for(;e===Co;)Co=So[--jo],So[jo]=null,Eo=So[--jo],So[jo]=null;for(;e===No;)No=To[--Po],To[Po]=null,zo=To[--Po],To[Po]=null,Lo=To[--Po],To[Po]=null}function Ao(e,t){To[Po++]=Lo,To[Po++]=zo,To[Po++]=No,Lo=t.id,zo=t.overflow,No=e}var Mo=null,Io=null,$o=!1,Fo=null,Uo=!1,Ho=Error(a(519));function Bo(e){throw Ko(ko(Error(a(418,1<arguments.length&&void 0!==arguments[1]&&arguments[1]?"text":"HTML","")),e)),Ho}function Wo(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[at]=e,t[it]=r,n){case"dialog":gp("cancel",t),gp("close",t);break;case"iframe":case"object":case"embed":gp("load",t);break;case"video":case"audio":for(n=0;n<fp.length;n++)gp(fp[n],t);break;case"source":gp("error",t);break;case"img":case"image":case"link":gp("error",t),gp("load",t);break;case"details":gp("toggle",t);break;case"input":gp("invalid",t),Ft(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":gp("invalid",t);break;case"textarea":gp("invalid",t),Wt(t,r.value,r.defaultValue,r.children)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Np(t.textContent,n)?(null!=r.popover&&(gp("beforetoggle",t),gp("toggle",t)),null!=r.onScroll&&gp("scroll",t),null!=r.onScrollEnd&&gp("scrollend",t),null!=r.onClick&&(t.onclick=Zt),t=!0):t=!1,t||Bo(e,!0)}function Vo(e){for(Mo=e.return;Mo;)switch(Mo.tag){case 5:case 31:case 13:return void(Uo=!1);case 27:case 3:return void(Uo=!0);default:Mo=Mo.return}}function qo(e){if(e!==Mo)return!1;if(!$o)return Vo(e),$o=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||Up(e.type,e.memoizedProps)),t=!t),t&&Io&&Bo(e),Vo(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));Io=Rf(e)}else if(31===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));Io=Rf(e)}else 27===n?(n=Io,Kp(e.type)?(e=Of,Of=null,Io=e):Io=n):Io=Mo?zf(e.stateNode.nextSibling):null;return!0}function Go(){Io=Mo=null,$o=!1}function Yo(){var e=Fo;return null!==e&&(null===Vu?Vu=e:Vu.push.apply(Vu,e),Fo=null),e}function Ko(e){null===Fo?Fo=[e]:Fo.push(e)}var Qo=ne(null),Jo=null,Xo=null;function Zo(e,t,n){oe(Qo,t._currentValue),t._currentValue=n}function ea(e){e._currentValue=Qo.current,re(Qo)}function ta(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function na(e,t,n,r){var o=e.child;for(null!==o&&(o.return=e);null!==o;){var i=o.dependencies;if(null!==i){var l=o.child;i=i.firstContext;e:for(;null!==i;){var s=i;i=o;for(var c=0;c<t.length;c++)if(s.context===t[c]){i.lanes|=n,null!==(s=i.alternate)&&(s.lanes|=n),ta(i.return,n,e),r||(l=null);break e}i=s.next}}else if(18===o.tag){if(null===(l=o.return))throw Error(a(341));l.lanes|=n,null!==(i=l.alternate)&&(i.lanes|=n),ta(l,n,e),l=null}else 13===o.tag&&null!==o.memoizedState&&null===o.memoizedState.dehydrated?(o.lanes|=n,null!==(l=o.alternate)&&(l.lanes|=n),ta(o.return,n,e),l=null!==(l=o.child)?l.sibling:null):l=o.child;if(null!==l)l.return=o;else for(l=o;null!==l;){if(l===e){l=null;break}if(null!==(o=l.sibling)){o.return=l.return,l=o;break}l=l.return}o=l}}function ra(e,t,n,r){e=null;for(var o=t,i=!1;null!==o;){if(!i)if(0!==(524288&o.flags))i=!0;else if(0!==(262144&o.flags))break;if(10===o.tag){var l=o.alternate;if(null===l)throw Error(a(387));if(null!==(l=l.memoizedProps)){var s=o.type;xr(o.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(o===ue.current){if(null===(l=o.alternate))throw Error(a(387));l.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(null!==e?e.push(hh):e=[hh])}o=o.return}return null!==e&&na(t,e,n,r),t.flags|=262144,null!==e}function oa(e){for(e=e.firstContext;null!==e;){if(!xr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function aa(e){Jo=e,Xo=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function ia(e){return sa(Jo,e)}function la(e,t){return null===Jo&&aa(e),sa(e,t)}function sa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===Xo){if(null===e)throw Error(a(308));Xo=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xo=Xo.next=t;return n}var ca="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ua=n.unstable_scheduleCallback,da=n.unstable_NormalPriority,pa={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fa(){return{controller:new ca,data:new Map,refCount:0}}function ha(e){e.refCount--,0===e.refCount&&ua(da,function(){e.controller.abort()})}function ma(e,t){if(0!==(4194048&e.pendingLanes)){var n=e.transitionTypes;for(null===n&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];-1===n.indexOf(r)&&n.push(r)}}}var ga=null;var va=null,ya=0,ba=0,xa=null;function wa(){if(0===--ya&&(ga=null,null!==va)){null!==xa&&(xa.status="fulfilled");var e=va;va=null,ba=0,xa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var ka=J.S;J.S=function(e,t){if(Yu=Ce(),"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===va){var n=va=[];ya=0,ba=cp(),xa={status:"pending",value:void 0,then:function(e){n.push(e)}}}ya++,t.then(wa,wa)}(0,t),null!==ga)for(var n=Qd;null!==n;)ma(n,ga),n=n.next;if(null!==(n=e.types)){for(var r=Qd;null!==r;)ma(r,n),r=r.next;if(0!==ba){null===(r=ga)&&(r=ga=[]);for(var o=0;o<n.length;o++){var a=n[o];-1===r.indexOf(a)&&r.push(a)}}}null!==ka&&ka(e,t)};var Sa=ne(null);function ja(){var e=Sa.current;return null!==e?e:Nu.pooledCache}function Ca(e,t){oe(Sa,null===t?Sa.current:t.pool)}function Ea(){var e=ja();return null===e?null:{parent:pa._currentValue,pool:e}}var Ta=Error(a(460)),Pa=Error(a(474)),Na=Error(a(542)),La={then:function(){}};function za(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Oa(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Zt,Zt),t=n),t.status){case"fulfilled":return t.value;case"rejected":if(Aa(e=t.reason),void 0===e&&!("reason"in t))throw Error(a(600));throw e;default:if("string"===typeof t.status)t.then(Zt,Zt);else{if(null!==(e=Nu)&&100<e.shellSuspendCounter)throw Error(a(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw Aa(e=t.reason),e}throw _a=t,Ta}}function Ra(e){try{return(0,e._init)(e._payload)}catch(t){if(null!==t&&"object"===typeof t&&"function"===typeof t.then)throw _a=t,Ta;throw t}}var _a=null;function Da(){if(null===_a)throw Error(a(459));var e=_a;return _a=null,e}function Aa(e){if(e===Ta||e===Na)throw Error(a(483))}var Ma=null,Ia=0;function $a(e){var t=Ia;return Ia+=1,null===Ma&&(Ma=[]),Oa(Ma,e,t)}function Fa(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Ua(e,t){if(t.$$typeof===P)throw Error(a(525));throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ha(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null===e.key?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function o(e,t){return(e=ho(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=134217730,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=134217730),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=yo(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===z?(Fa(e=d(e,t,n.props.children,r,n.key),n),e):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===F&&Ra(a)===t.type)?(Fa(t=o(t,n.props),n),t.return=e,t):(Fa(t=go(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=xo(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=vo(n,e.mode,r,a)).return=e,t):((t=o(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=yo(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case N:return Fa(n=go(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case L:return(t=xo(t,e.mode,n)).return=e,t;case F:return p(e,t=Ra(t),n)}if(Q(t)||G(t))return(t=vo(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return p(e,$a(t),n);if(t.$$typeof===D)return p(e,la(e,t),n);Ua(e,t)}return null}function f(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==o?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case N:return n.key===o?c(e,t,n,r):null;case L:return n.key===o?u(e,t,n,r):null;case F:return f(e,t,n=Ra(n),r)}if(Q(n)||G(n))return null!==o?null:d(e,t,n,r,null);if("function"===typeof n.then)return f(e,t,$a(n),r);if(n.$$typeof===D)return f(e,t,la(e,n),r);Ua(e,n)}return null}function h(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return s(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case N:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case L:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case F:return h(e,t,n,r=Ra(r),o)}if(Q(r)||G(r))return d(t,e=e.get(n)||null,r,o,null);if("function"===typeof r.then)return h(e,t,n,$a(r),o);if(r.$$typeof===D)return h(e,t,n,la(t,r),o);Ua(t,r)}return null}function m(s,c,u,d){if("object"===typeof u&&null!==u&&u.type===z&&null===u.key&&void 0===u.props.ref&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case N:e:{for(var g=u.key;null!==c;){if(c.key===g){if((g=u.type)===z){if(7===c.tag){n(s,c.sibling),Fa(d=o(c,u.props.children),u),d.return=s,s=d;break e}}else if(c.elementType===g||"object"===typeof g&&null!==g&&g.$$typeof===F&&Ra(g)===c.type){n(s,c.sibling),Fa(d=o(c,u.props),u),d.return=s,s=d;break e}n(s,c);break}t(s,c),c=c.sibling}u.type===z?(Fa(d=vo(u.props.children,s.mode,d,u.key),u),d.return=s,s=d):(Fa(d=go(u.type,u.key,u.props,null,s.mode,d),u),d.return=s,s=d)}return l(s);case L:e:{for(g=u.key;null!==c;){if(c.key===g){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(s,c.sibling),(d=o(c,u.children||[])).return=s,s=d;break e}n(s,c);break}t(s,c),c=c.sibling}(d=xo(u,s.mode,d)).return=s,s=d}return l(s);case F:return m(s,c,u=Ra(u),d)}if(Q(u))return function(o,a,l,s){for(var c=null,u=null,d=a,m=a=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=f(o,d,l[m],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(o,d),a=i(v,a,m),null===u?c=v:u.sibling=v,u=v,d=g}if(m===l.length)return n(o,d),$o&&Oo(o,m),c;if(null===d){for(;m<l.length;m++)null!==(d=p(o,l[m],s))&&(a=i(d,a,m),null===u?c=d:u.sibling=d,u=d);return $o&&Oo(o,m),c}for(d=r(d);m<l.length;m++)null!==(g=h(d,o,m,l[m],s))&&(e&&null!==(v=g.alternate)&&d.delete(null===v.key?m:v.key),a=i(g,a,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(o,e)}),$o&&Oo(o,m),c}(s,c,u,d);if(G(u)){if("function"!==typeof(g=G(u)))throw Error(a(150));return function(o,l,s,c){if(null==s)throw Error(a(151));for(var u=null,d=null,m=l,g=l=0,v=null,y=s.next();null!==m&&!y.done;g++,y=s.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=f(o,m,y.value,c);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(o,m),l=i(b,l,g),null===d?u=b:d.sibling=b,d=b,m=v}if(y.done)return n(o,m),$o&&Oo(o,g),u;if(null===m){for(;!y.done;g++,y=s.next())null!==(y=p(o,y.value,c))&&(l=i(y,l,g),null===d?u=y:d.sibling=y,d=y);return $o&&Oo(o,g),u}for(m=r(m);!y.done;g++,y=s.next())null!==(y=h(m,o,g,y.value,c))&&(e&&null!==(v=y.alternate)&&m.delete(null===v.key?g:v.key),l=i(y,l,g),null===d?u=y:d.sibling=y,d=y);return e&&m.forEach(function(e){return t(o,e)}),$o&&Oo(o,g),u}(s,c,u=g.call(u),d)}if("function"===typeof u.then)return m(s,c,$a(u),d);if(u.$$typeof===D)return m(s,c,la(s,u),d);Ua(s,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(s,c.sibling),(d=o(c,u)).return=s,s=d):(n(s,c),(d=yo(u,s.mode,d)).return=s,s=d),l(s)):n(s,c)}return function(e,t,n,r){try{Ia=0;var o=m(e,t,n,r);return Ma=null,o}catch(i){if(i===Ta||i===Na)throw i;var a=po(29,i,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ba=Ha(!0),Wa=Ha(!1),Va=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ga(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Pu)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,t=so(e),lo(e,null,n),t}return oo(e,r,t,n),so(e)}function Qa(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Xe(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===a?o=a=i:a=a.next=i,n=n.next}while(null!==n);null===a?o=a=t:a=a.next=t}else o=a=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xa=!1;function Za(){if(Xa){if(null!==xa)throw xa}}function ei(e,t,n,r){Xa=!1;var o=e.updateQueue;Va=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(null!==l){o.shared.pending=null;var s=l,c=s.next;s.next=null,null===i?a=c:i.next=c,i=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==i&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==a){var d=o.baseState;for(i=0,u=c=s=null,l=a;;){var p=-536870913&l.lane,f=p!==l.lane;if(f?(zu&p)===p:(r&p)===p){0!==p&&p===ba&&(Xa=!0),null!==u&&(u=u.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var h=e,m=l;p=t;var g=n;switch(m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(g,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=m.payload)?h.call(g,d,p):h)||void 0===p)break e;d=T({},d,p);break e;case 2:Va=!0}}null!==(p=l.callback)&&(e.flags|=64,f&&(e.flags|=8192),null===(f=o.callbacks)?o.callbacks=[p]:f.push(p))}else f={lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=f,s=d):u=u.next=f,i|=p;if(null===(l=l.next)){if(null===(l=o.shared.pending))break;l=(f=l).next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}null===u&&(s=d),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=u,null===a&&(o.shared.lanes=0),$u|=i,e.lanes=i,e.memoizedState=d}}function ti(e,t){if("function"!==typeof e)throw Error(a(191,e));e.call(t)}function ni(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)ti(n[e],t)}var ri=ne(null),oi=ne(0);function ai(e,t){oe(oi,e=Mu),oe(ri,t),Mu=e|t.baseLanes}function ii(){oe(oi,Mu),oe(ri,ri.current)}function li(){Mu=oi.current,re(ri),re(oi)}var si=ne(null),ci=null;function ui(e){var t=e.alternate;oe(mi,1&mi.current),oe(si,e),null===ci&&(null===t||null!==ri.current||null!==t.memoizedState)&&(ci=e)}function di(e){oe(mi,mi.current),oe(si,e),null===ci&&(ci=e)}function pi(e){22===e.tag?(oe(mi,mi.current),oe(si,e),null===ci&&(ci=e)):fi()}function fi(){oe(mi,mi.current),oe(si,si.current)}function hi(e){re(si),ci===e&&(ci=null),re(mi)}var mi=ne(0);function gi(e,t){oe(si,si.current),oe(mi,t)}function vi(e){re(mi),re(si),ci===e&&(ci=null)}function yi(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||Nf(n)||Lf(n)))return t}else if(19===t.tag&&"independent"!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bi=0,xi=null,wi=null,ki=null,Si=!1,ji=!1,Ci=!1,Ei=0,Ti=0,Pi=null,Ni=0;function Li(){throw Error(a(321))}function zi(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xr(e[n],t[n]))return!1;return!0}function Oi(e,t,n,r,o,a){return bi=a,xi=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,J.H=null===e||null===e.memoizedState?Gl:Yl,Ci=!1,a=n(r,o),Ci=!1,ji&&(a=_i(t,n,r,o)),Ri(e),a}function Ri(e){J.H=ql;var t=null!==wi&&null!==wi.next;if(bi=0,ki=wi=xi=null,Si=!1,Ti=0,Pi=null,t)throw Error(a(300));null===e||us||null!==(e=e.dependencies)&&oa(e)&&(us=!0)}function _i(e,t,n,r){xi=e;var o=0;do{if(ji&&(Pi=null),Ti=0,ji=!1,25<=o)throw Error(a(301));if(o+=1,ki=wi=null,null!=e.updateQueue){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,null!=i.memoCache&&(i.memoCache.index=0)}J.H=Kl,i=t(n,r)}while(ji);return i}function Di(){var e=J.H,t=e.useState()[0];return t="function"===typeof t.then?Ui(t):t,e=e.useState()[0],(null!==wi?wi.memoizedState:null)!==e&&(xi.flags|=1024),t}function Ai(){var e=0!==Ei;return Ei=0,e}function Mi(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ii(e){if(Si){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Si=!1}bi=0,ki=wi=xi=null,ji=!1,Ti=Ei=0,Pi=null}function $i(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ki?xi.memoizedState=ki=e:ki=ki.next=e,ki}function Fi(){if(null===wi){var e=xi.alternate;e=null!==e?e.memoizedState:null}else e=wi.next;var t=null===ki?xi.memoizedState:ki.next;if(null!==t)ki=t,wi=e;else{if(null===e){if(null===xi.alternate)throw Error(a(467));throw Error(a(310))}e={memoizedState:(wi=e).memoizedState,baseState:wi.baseState,baseQueue:wi.baseQueue,queue:wi.queue,next:null},null===ki?xi.memoizedState=ki=e:ki=ki.next=e}return ki}function Ui(e){var t=Ti;return Ti+=1,null===Pi&&(Pi=[]),e=Oa(Pi,e,t),t=xi,null===(null===ki?t.memoizedState:ki.next)&&(t=t.alternate,J.H=null===t||null===t.memoizedState?Gl:Yl),e}function Hi(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return Ui(e);if(e.$$typeof===V)return;if(e.$$typeof===D)return ia(e)}throw Error(a(438,String(e)))}function Bi(e){var t=null,n=xi.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=xi.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=B;return t.index++,n}function Wi(e,t){return"function"===typeof t?t(e):t}function Vi(e){return qi(Fi(),wi,e)}function qi(e,t,n){var r=e.queue;if(null===r)throw Error(a(311));r.lastRenderedReducer=n;var o=e.baseQueue,i=r.pending;if(null!==i){if(null!==o){var l=o.next;o.next=i.next,i.next=l}t.baseQueue=o=i,r.pending=null}if(i=e.baseState,null===o)e.memoizedState=i;else{var s=l=null,c=null,u=t=o.next,d=!1;do{var p=-536870913&u.lane;if(p!==u.lane?(zu&p)===p:(bi&p)===p){var f=u.revertLane;if(0===f)null!==c&&(c=c.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===ba&&(d=!0);else{if((bi&f)===f){u=u.next,f===ba&&(d=!0);continue}p={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=p,l=i):c=c.next=p,xi.lanes|=f,$u|=f}p=u.action,Ci&&n(i,p),i=u.hasEagerState?u.eagerState:n(i,p)}else f={lane:p,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=f,l=i):c=c.next=f,xi.lanes|=p,$u|=p;u=u.next}while(null!==u&&u!==t);if(null===c?l=i:c.next=s,!xr(i,e.memoizedState)&&(us=!0,d&&null!==(n=xa)))throw n;e.memoizedState=i,e.baseState=l,e.baseQueue=c,r.lastRenderedState=i}return null===o&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Gi(e){var t=Fi(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(null!==o){n.pending=null;var l=o=o.next;do{i=e(i,l.action),l=l.next}while(l!==o);xr(i,t.memoizedState)||(us=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Yi(e,t,n){var r=xi,o=Fi(),i=$o;if(i){if(void 0===n)throw Error(a(407));n=n()}else n=t();var l=!xr((wi||o).memoizedState,n);if(l&&(o.memoizedState=n,us=!0),o=o.queue,bl(Ji.bind(null,r,o,e),[e]),hl((e=o.getSnapshot!==t||l||null!==ki&&0!==(1&ki.memoizedState.tag))?9:8,{destroy:void 0},Qi.bind(null,r,o,n,t),null),e){if(r.flags|=2048,null===Nu)throw Error(a(349));i||0!==(127&bi)||Ki(r,t,n)}return n}function Ki(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=xi.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Qi(e,t,n,r){t.value=n,t.getSnapshot=r,Xi(t)&&Zi(e)}function Ji(e,t,n){return n(function(){Xi(t)&&Zi(e)})}function Xi(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xr(e,n)}catch(r){return!0}}function Zi(e){var t=io(e,2);null!==t&&fd(t,e,2)}function el(e){var t=$i();if("function"===typeof e){var n=e;if(e=n(),Ci){Ae(!0);try{n()}finally{Ae(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},t}function tl(e,t,n,r){return e.baseState=n,qi(e,wi,"function"===typeof r?r:Wi)}function nl(e,t,n,r,o){if(Bl(e))throw Error(a(485));if(null!==(e=t.action)){var i={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){i.listeners.push(e)}};null!==J.T?n(!0):i.isTransition=!1,r(i),null===(n=t.pending)?(i.next=t.pending=i,rl(t,i)):(i.next=n.next,t.pending=n.next=i)}}function rl(e,t){var n=t.action,r=t.payload,o=e.state;if(t.isTransition){var a=J.T,i={};i.types=null!==a?a.types:null,J.T=i;try{var l=n(o,r),s=J.S;null!==s&&s(i,l),ol(e,t,l)}catch(c){il(e,t,c)}finally{null!==a&&null!==i.types&&(a.types=i.types),J.T=a}}else try{ol(e,t,a=n(o,r))}catch(u){il(e,t,u)}}function ol(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){al(e,t,n)},function(n){return il(e,t,n)}):al(e,t,n)}function al(e,t,n){t.status="fulfilled",t.value=n,ll(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,rl(e,n)))}function il(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,ll(t),t=t.next}while(t!==r)}e.action=null}function ll(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function sl(e,t){return t}function cl(e,t){if($o){var n=Nu.formState;if(null!==n){e:{var r=xi;if($o){if(Io){t:{for(var o=Io,a=Uo;8!==o.nodeType;){if(!a){o=null;break t}if(null===(o=zf(o.nextSibling))){o=null;break t}}o="F!"===(a=o.data)||"F"===a?o:null}if(o){Io=zf(o.nextSibling),r="F!"===o.data;break e}}Bo(r)}r=!1}r&&(t=n[0])}}return(n=$i()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sl,lastRenderedState:t},n.queue=r,n=Fl.bind(null,xi,r),r.dispatch=n,r=el(!1),a=Hl.bind(null,xi,!1,r.queue),o={state:t,dispatch:null,action:e,pending:null},(r=$i()).queue=o,n=nl.bind(null,xi,o,a,n),o.dispatch=n,r.memoizedState=e,[t,n,!1]}function ul(e){return dl(Fi(),wi,e)}function dl(e,t,n){if(t=qi(e,t,sl)[0],e=Vi(Wi)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=Ui(t)}catch(i){if(i===Ta)throw Na;throw i}else r=t;var o=(t=Fi()).queue,a=o.dispatch;return n!==t.memoizedState&&(xi.flags|=2048,hl(9,{destroy:void 0},pl.bind(null,o,n),null)),[r,a,e]}function pl(e,t){e.action=t}function fl(e){var t=Fi(),n=wi;if(null!==n)return dl(t,n,e);Fi(),t=t.memoizedState;var r=(n=Fi()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function hl(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=xi.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ml(){return Fi().memoizedState}function gl(e,t,n,r){var o=$i();xi.flags|=e,o.memoizedState=hl(1|t,{destroy:void 0},n,void 0===r?null:r)}function vl(e,t,n,r){var o=Fi();r=void 0===r?null:r;var a=o.memoizedState.inst;null!==wi&&null!==r&&zi(r,wi.memoizedState.deps)?o.memoizedState=hl(t,a,n,r):(xi.flags|=e,o.memoizedState=hl(1|t,a,n,r))}function yl(e,t){gl(8390656,8,e,t)}function bl(e,t){vl(2048,8,e,t)}function xl(e){var t=Fi().memoizedState;return function(e){xi.flags|=4;var t=xi.updateQueue;if(null===t)t={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=t,t.events=[e];else{var n=t.events;null===n?t.events=[e]:n.push(e)}}({ref:t,nextImpl:e}),function(){if(0!==(2&Pu))throw Error(a(440));return t.impl.apply(void 0,arguments)}}function wl(e,t){return vl(4,2,e,t)}function kl(e,t){return vl(4,4,e,t)}function Sl(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function jl(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,vl(4,4,Sl.bind(null,t,e),n)}function Cl(){}function El(e,t){var n=Fi();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&zi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Tl(e,t){var n=Fi();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&zi(t,r[1]))return r[0];if(r=e(),Ci){Ae(!0);try{e()}finally{Ae(!1)}}return n.memoizedState=[r,t],r}function Pl(e,t,n){return void 0===n||0!==(1073741824&bi)&&0===(261930&zu)?e.memoizedState=t:(e.memoizedState=n,e=dd(),xi.lanes|=e,$u|=e,n)}function Nl(e,t,n,r){return xr(n,t)?n:null!==ri.current?(e=Pl(e,n,r),xr(e,t)||(us=!0),e):0===(106&bi)||0!==(1073741824&bi)&&0===(261930&zu)?(us=!0,e.memoizedState=n):(e=dd(),xi.lanes|=e,$u|=e,t)}function Ll(e,t,n,r,o){var a=X.p;X.p=0!==a&&8>a?a:8;var i=J.T,l={};l.types=null!==i?i.types:null,J.T=l,Hl(e,!1,t,n);try{var s=o(),c=J.S;if(null!==c&&c(l,s),null!==s&&"object"===typeof s&&"function"===typeof s.then)Ul(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}(s,r),ud());else Ul(e,t,r,ud())}catch(u){Ul(e,t,{then:function(){},status:"rejected",reason:u},ud())}finally{X.p=a,null!==i&&null!==l.types&&(i.types=l.types),J.T=i}}function zl(){}function Ol(e,t,n,r){if(5!==e.tag)throw Error(a(476));var o=Rl(e).queue;Ll(e,o,t,Z,null===n?zl:function(){return _l(e),n(r)})}function Rl(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:Z},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function _l(e){var t=Rl(e);null===t.next&&(t=e.alternate.memoizedState),Ul(e,t.next.queue,{},ud())}function Dl(){return ia(hh)}function Al(){return Fi().memoizedState}function Ml(){return Fi().memoizedState}function Il(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=ud(),r=Ka(t,e=Ya(n),n);return null!==r&&(fd(r,t,n),Qa(r,t,n)),t={cache:fa()},void(e.payload=t)}t=t.return}}function $l(e,t,n){var r=ud();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bl(e)?Wl(t,n):null!==(n=ao(e,t,n,r))&&(fd(n,e,r),Vl(n,t,r))}function Fl(e,t,n){Ul(e,t,n,ud())}function Ul(e,t,n,r){var o={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bl(e))Wl(t,o);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=a(i,n);if(o.hasEagerState=!0,o.eagerState=l,xr(l,i))return oo(e,t,o,0),null===Nu&&ro(),!1}catch(s){}if(null!==(n=ao(e,t,o,r)))return fd(n,e,r),Vl(n,t,r),!0}return!1}function Hl(e,t,n,r){if(r={lane:2,revertLane:cp(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bl(e)){if(t)throw Error(a(479))}else null!==(t=ao(e,n,r,2))&&fd(t,e,2)}function Bl(e){var t=e.alternate;return e===xi||null!==t&&t===xi}function Wl(e,t){ji=Si=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vl(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Xe(e,n)}}var ql={readContext:ia,use:Hi,useCallback:Li,useContext:Li,useEffect:Li,useImperativeHandle:Li,useLayoutEffect:Li,useInsertionEffect:Li,useMemo:Li,useReducer:Li,useRef:Li,useState:Li,useDebugValue:Li,useDeferredValue:Li,useTransition:Li,useSyncExternalStore:Li,useId:Li,useHostTransitionStatus:Li,useFormState:Li,useActionState:Li,useOptimistic:Li,useMemoCache:Li,useCacheRefresh:Li,useEffectEvent:Li},Gl={readContext:ia,use:Hi,useCallback:function(e,t){return $i().memoizedState=[e,void 0===t?null:t],e},useContext:ia,useEffect:yl,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,gl(4194308,4,Sl.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gl(4194308,4,e,t)},useInsertionEffect:function(e,t){gl(4,2,e,t)},useMemo:function(e,t){var n=$i();t=void 0===t?null:t;var r=e();if(Ci){Ae(!0);try{e()}finally{Ae(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=$i();if(void 0!==n){var o=n(t);if(Ci){Ae(!0);try{n(t)}finally{Ae(!1)}}}else o=t;return r.memoizedState=r.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},r.queue=e,e=e.dispatch=$l.bind(null,xi,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},$i().memoizedState=e},useState:function(e){var t=(e=el(e)).queue,n=Fl.bind(null,xi,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Cl,useDeferredValue:function(e,t){return Pl($i(),e,t)},useTransition:function(){var e=el(!1);return e=Ll.bind(null,xi,e.queue,!0,!1),$i().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=xi,o=$i();if($o){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===Nu)throw Error(a(349));0!==(127&zu)||Ki(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,yl(Ji.bind(null,r,i,e),[e]),r.flags|=2048,hl(9,{destroy:void 0},Qi.bind(null,r,i,n,t),null),n},useId:function(){var e=$i(),t=Nu.identifierPrefix;if($o){var n=zo;t="_"+t+"R_"+(n=(Lo&~(1<<32-Me(Lo)-1)).toString(32)+n),0<(n=Ei++)&&(t+="H"+n.toString(32)),t+="_"}else t="_"+t+"r_"+(n=Ni++).toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Dl,useFormState:cl,useActionState:cl,useOptimistic:function(e){var t=$i();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Hl.bind(null,xi,!0,n),n.dispatch=t,[e,t]},useMemoCache:Bi,useCacheRefresh:function(){return $i().memoizedState=Il.bind(null,xi)},useEffectEvent:function(e){var t=$i(),n={impl:e};return t.memoizedState=n,function(){if(0!==(2&Pu))throw Error(a(440));return n.impl.apply(void 0,arguments)}}},Yl={readContext:ia,use:Hi,useCallback:El,useContext:ia,useEffect:bl,useImperativeHandle:jl,useInsertionEffect:wl,useLayoutEffect:kl,useMemo:Tl,useReducer:Vi,useRef:ml,useState:function(){return Vi(Wi)},useDebugValue:Cl,useDeferredValue:function(e,t){return Nl(Fi(),wi.memoizedState,e,t)},useTransition:function(){var e=Vi(Wi)[0],t=Fi().memoizedState;return["boolean"===typeof e?e:Ui(e),t]},useSyncExternalStore:Yi,useId:Al,useHostTransitionStatus:Dl,useFormState:ul,useActionState:ul,useOptimistic:function(e,t){return tl(Fi(),0,e,t)},useMemoCache:Bi,useCacheRefresh:Ml,useEffectEvent:xl},Kl={readContext:ia,use:Hi,useCallback:El,useContext:ia,useEffect:bl,useImperativeHandle:jl,useInsertionEffect:wl,useLayoutEffect:kl,useMemo:Tl,useReducer:Gi,useRef:ml,useState:function(){return Gi(Wi)},useDebugValue:Cl,useDeferredValue:function(e,t){var n=Fi();return null===wi?Pl(n,e,t):Nl(n,wi.memoizedState,e,t)},useTransition:function(){var e=Gi(Wi)[0],t=Fi().memoizedState;return["boolean"===typeof e?e:Ui(e),t]},useSyncExternalStore:Yi,useId:Al,useHostTransitionStatus:Dl,useFormState:fl,useActionState:fl,useOptimistic:function(e,t){var n=Fi();return null!==wi?tl(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Bi,useCacheRefresh:Ml,useEffectEvent:xl};function Ql(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:T({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var Jl={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ud(),o=Ya(r);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Ka(e,o,r))&&(fd(t,e,r),Qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ud(),o=Ya(r);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Ka(e,o,r))&&(fd(t,e,r),Qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ud(),r=Ya(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=Ka(e,r,n))&&(fd(t,e,n),Qa(t,e,n))}};function Xl(e,t,n,r,o,a,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,i):!t.prototype||!t.prototype.isPureReactComponent||(!wr(n,r)||!wr(o,a))}function Zl(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Jl.enqueueReplaceState(t,t.state,null)}function es(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var o in n===t&&(n=T({},n)),e)void 0===n[o]&&(n[o]=e[o]);return n}function ts(e){Zr(e)}function ns(e){console.error(e)}function rs(e){Zr(e)}function os(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function as(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function is(e,t,n){return(n=Ya(n)).tag=3,n.payload={element:null},n.callback=function(){os(e,t)},n}function ls(e){return(e=Ya(e)).tag=3,e}function ss(e,t,n,r){var o=n.type.getDerivedStateFromError;if("function"===typeof o){var a=r.value;e.payload=function(){return o(a)},e.callback=function(){as(t,n,r)}}var i=n.stateNode;null!==i&&"function"===typeof i.componentDidCatch&&(e.callback=function(){as(t,n,r),"function"!==typeof o&&(null===Ju?Ju=new Set([this]):Ju.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var cs=Error(a(461)),us=!1;function ds(e,t,n,r){t.child=null===e?Wa(t,null,n,r):Ba(t,e.child,n,r)}function ps(e,t,n,r,o){n=n.render;var a=t.ref;if("ref"in r){var i={};for(var l in r)"ref"!==l&&(i[l]=r[l])}else i=r;return aa(t),r=Oi(e,t,n,i,a,o),l=Ai(),null===e||us?($o&&l&&_o(t),t.flags|=1,ds(e,t,r,o),t.child):(Mi(e,t,o),Is(e,t,o))}function fs(e,t,n,r,o){if(null===e){var a=n.type;return"function"!==typeof a||fo(a)||void 0!==a.defaultProps||null!==n.compare?((e=go(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,hs(e,t,a,r,o))}if(a=e.child,!$s(e,o)){var i=a.memoizedProps;if((n=null!==(n=n.compare)?n:wr)(i,r)&&e.ref===t.ref)return Is(e,t,o)}return t.flags|=1,(e=ho(a,r)).ref=t.ref,e.return=t,t.child=e}function hs(e,t,n,r,o){if(null!==e){var a=e.memoizedProps;if(wr(a,r)&&e.ref===t.ref){if(us=!1,t.pendingProps=r=a,!$s(e,o))return t.lanes=e.lanes,Is(e,t,o);0!==(131072&e.flags)&&(us=!0)}}return ws(e,t,n,r,o)}function ms(e,t,n,r){var o=r.children,a=null!==e?e.memoizedState:null;if(null===e&&null===t.stateNode&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),"hidden"===r.mode){if(0!==(128&t.flags)){if(a=null!==a?a.baseLanes|n:n,null!==e){for(r=t.child=e.child,o=0;null!==r;)o=o|r.lanes|r.childLanes,r=r.sibling;r=o&~a}else r=0,t.child=null;return vs(e,t,a,n,r)}if(0===(536870912&n))return r=t.lanes=536870912,vs(e,t,null!==a?a.baseLanes|n:n,n,r);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Ca(0,null!==a?a.cachePool:null),null!==a?ai(t,a):ii(),pi(t)}else null!==a?(Ca(0,a.cachePool),ai(t,a),fi(),t.memoizedState=null):(null!==e&&Ca(0,null),ii(),fi());return ds(e,t,o,n),t.child}function gs(e,t){return null!==e&&22===e.tag||null!==t.stateNode||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function vs(e,t,n,r,o){var a=ja();return a=null===a?null:{parent:pa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},null!==e&&Ca(0,null),ii(),pi(t),null!==e&&ra(e,t,r,!0),t.childLanes=o,null}function ys(e,t){return(t=Ls({mode:t.mode,children:t.children},e.mode)).ref=e.ref,e.child=t,t.return=e,t}function bs(e,t,n){return Ba(t,e.child,null,n),(e=ys(t,t.pendingProps)).flags|=2,hi(t),t.memoizedState=null,e}function xs(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(a(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function ws(e,t,n,r,o){return aa(t),n=Oi(e,t,n,r,void 0,o),r=Ai(),null===e||us?($o&&r&&_o(t),t.flags|=1,ds(e,t,n,o),t.child):(Mi(e,t,o),Is(e,t,o))}function ks(e,t,n,r,o,a){return aa(t),t.updateQueue=null,n=_i(t,r,n,o),Ri(e),r=Ai(),null===e||us?($o&&r&&_o(t),t.flags|=1,ds(e,t,n,a),t.child):(Mi(e,t,a),Is(e,t,a))}function Ss(e,t,n,r,o){if(aa(t),null===t.stateNode){var a=co,i=n.contextType;"object"===typeof i&&null!==i&&(a=ia(i)),a=new n(r,a),t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,a.updater=Jl,t.stateNode=a,a._reactInternals=t,(a=t.stateNode).props=r,a.state=t.memoizedState,a.refs={},qa(t),i=n.contextType,a.context="object"===typeof i&&null!==i?ia(i):co,a.state=t.memoizedState,"function"===typeof(i=n.getDerivedStateFromProps)&&(Ql(t,n,i,r),a.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(i=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),i!==a.state&&Jl.enqueueReplaceState(a,a.state,null),ei(t,r,a,o),Za(),a.state=t.memoizedState),"function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){a=t.stateNode;var l=t.memoizedProps,s=es(n,l);a.props=s;var c=a.context,u=n.contextType;i=co,"object"===typeof u&&null!==u&&(i=ia(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof a.getSnapshotBeforeUpdate,l=t.pendingProps!==l,u||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(l||c!==i)&&Zl(t,a,r,i),Va=!1;var p=t.memoizedState;a.state=p,ei(t,r,a,o),Za(),c=t.memoizedState,l||p!==c||Va?("function"===typeof d&&(Ql(t,n,d,r),c=t.memoizedState),(s=Va||Xl(t,n,s,r,p,c,i))?(u||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=i,r=s):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ga(e,t),u=es(n,i=t.memoizedProps),a.props=u,d=t.pendingProps,p=a.context,c=n.contextType,s=co,"object"===typeof c&&null!==c&&(s=ia(c)),(c="function"===typeof(l=n.getDerivedStateFromProps)||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(i!==d||p!==s)&&Zl(t,a,r,s),Va=!1,p=t.memoizedState,a.state=p,ei(t,r,a,o),Za();var f=t.memoizedState;i!==d||p!==f||Va||null!==e&&null!==e.dependencies&&oa(e.dependencies)?("function"===typeof l&&(Ql(t,n,l,r),f=t.memoizedState),(u=Va||Xl(t,n,u,r,p,f,s)||null!==e&&null!==e.dependencies&&oa(e.dependencies))?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,f,s),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,f,s)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),a.props=r,a.state=f,a.context=s,r=u):("function"!==typeof a.componentDidUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,xs(e,t),r=0!==(128&t.flags),a||r?(a=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:a.render(),t.flags|=1,null!==e&&r?(t.child=Ba(t,e.child,null,o),t.child=Ba(t,null,n,o)):ds(e,t,n,o),t.memoizedState=a.state,e=t.child):e=Is(e,t,o),e}function js(e,t,n,r){return Go(),t.flags|=256,ds(e,t,n,r),t.child}var Cs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Es(e){return{baseLanes:e,cachePool:Ea()}}function Ts(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=Hu),e}function Ps(e,t,n){var r,o=t.pendingProps,i=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&mi.current)),r&&(i=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if($o){if(i?ui(t):fi(),(e=Io)?null!==(e=null!==(e=Pf(e,Uo))&&"&"!==e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==No?{id:Lo,overflow:zo}:null,retryLane:536870912,hydrationErrors:null},(n=bo(e)).return=t,t.child=n,Mo=t,Io=null):e=null,null===e)throw Bo(t);return Lf(e)?t.lanes=32:t.lanes=536870912,null}return l=o.children,o=o.fallback,i?(fi(),l=Ls({mode:"hidden",children:l},i=t.mode),o=vo(o,i,n,null),l.return=t,o.return=t,l.sibling=o,t.child=l,(o=t.child).memoizedState=Es(n),o.childLanes=Ts(e,r,n),t.memoizedState=Cs,gs(null,o)):(ui(t),Ns(t,l))}var s=e.memoizedState;if(null!==s){var c=s.dehydrated;if(null!==c)return function(e,t,n,r,o,i,l,s){if(n)return 256&t.flags?(ui(t),t.flags&=-257,zs(e,t,s)):null!==t.memoizedState?(fi(),t.child=e.child,t.flags|=128,null):(fi(),i=o.fallback,l=t.mode,o=Ls({mode:"visible",children:o.children},l),(i=vo(i,l,s,null)).flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,Ba(t,e.child,null,s),(o=t.child).memoizedState=Es(s),o.childLanes=Ts(e,r,s),t.memoizedState=Cs,gs(null,o));if(ui(t),Lf(i)){if(r=i.nextSibling&&i.nextSibling.dataset)var c=r.dgst;return""!==(r=c)&&((o=Error(a(419))).stack="",o.digest=r,Ko({value:o,source:null,stack:null})),zs(e,t,s)}if(us||ra(e,t,s,!1),r=0!==(s&e.childLanes),us||r){if(null!==ri.current)return zs(e,t,s);if(null!==(r=Nu)&&(0!==(o=Ze(r,s))&&o!==l.retryLane))throw l.retryLane=o,io(e,o),fd(r,e,o),cs;return Nf(i)||Cd(),zs(e,t,s)}return Nf(i)?(t.flags|=192,t.child=e.child,null):(e=l.treeContext,Io=zf(i.nextSibling),Mo=t,$o=!0,Fo=null,Uo=!1,null!==e&&Ao(t,e),t=Ns(t,o.children),t.flags|=134221824,t)}(e,t,l,r,o,c,s,n)}return i?(fi(),i=o.fallback,l=t.mode,c=(s=e.child).sibling,(o=ho(s,{mode:"hidden",children:o.children})).subtreeFlags=1206910976&s.subtreeFlags,null!==c?i=ho(c,i):(i=vo(i,l,n,null)).flags|=2,i.return=t,o.return=t,o.sibling=i,t.child=o,gs(null,o),o=t.child,null===(i=e.child.memoizedState)?i=Es(n):(null!==(l=i.cachePool)?(s=pa._currentValue,l=l.parent!==s?{parent:s,pool:s}:l):l=Ea(),i={baseLanes:i.baseLanes|n,cachePool:l}),o.memoizedState=i,o.childLanes=Ts(e,r,n),t.memoizedState=Cs,gs(e.child,o)):(ui(t),e=(n=e.child).sibling,(n=ho(n,{mode:"visible",children:o.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Ns(e,t){return(t=Ls({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Ls(e,t){return(e=po(22,e,null,t)).lanes=0,e}function zs(e,t,n){return Ba(t,e.child,null,n),(e=Ns(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Os(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),ta(e.return,t,n)}function Rs(e){for(var t=null;null!==e;){var n=e.alternate;null!==n&&null===yi(n)&&(t=e),e=e.sibling}return t}function _s(e,t,n,r,o,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o,treeForkCount:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o,i.treeForkCount=a)}function Ds(e){var t=e.child;for(e.child=null;null!==t;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function As(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;r=r.children;var i=mi.current;if(128&t.flags)return gi(0,i),null;var l=0!==(2&i);if(l?(i=1&i|2,t.flags|=128):i&=1,gi(0,i),"backwards"===o&&null!==e?(Ds(e),ds(e,t,r,n),Ds(e)):ds(e,t,r,n),r=$o?Eo:0,!l&&null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Os(e,n,t);else if(19===e.tag)Os(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"backwards":null===(n=Rs(t.child))?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null,Ds(t)),_s(t,!0,o,null,a,r);break;case"unstable_legacy-backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===yi(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}_s(t,!0,n,null,a,r);break;case"together":_s(t,!1,null,null,void 0,r);break;case"independent":t.memoizedState=null;break;default:null===(n=Rs(t.child))?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),_s(t,!1,o,n,a,r)}return t.child}function Ms(e,t,n){var r=t.pendingProps;return Zo(0,t.type,r.value),ds(e,t,r.children,n),t.child}function Is(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),$u|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(ra(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=ho(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=ho(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function $s(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!oa(e))}function Fs(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)us=!0;else{if(!$s(e,n)&&0===(128&t.flags))return us=!1,function(e,t,n){switch(t.tag){case 3:de(t,t.stateNode.containerInfo),Zo(0,pa,e.memoizedState.cache),Go();break;case 27:case 5:fe(t);break;case 4:de(t,t.stateNode.containerInfo);break;case 10:Zo(0,t.type,t.memoizedProps.value);break;case 31:if(null!==t.memoizedState)return t.flags|=128,di(t),null;break;case 13:var r=t.memoizedState;if(null!==r){if(null!==r.dehydrated)return ui(t),t.flags|=128,null;r=ra(e,t,n,!1);var o=t.child.childLanes;return r||0!==(n&o)?Ps(e,t,n):(ui(t),null!==(e=Is(e,t,n))?e.sibling:null)}ui(t);break;case 19:if(128&t.flags)return As(e,t,n);if(o=0!==(128&e.flags),(r=0!==(n&t.childLanes))||(ra(e,t,n,!1),r=0!==(n&t.childLanes)),o){if(r)return As(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),gi(0,mi.current),r)break;return null;case 22:return t.lanes=0,ms(e,t,n,t.pendingProps);case 24:Zo(0,pa,e.memoizedState.cache)}return Is(e,t,n)}(e,t,n);us=0!==(131072&e.flags)}else us=!1,$o&&0!==(1048576&t.flags)&&Ro(t,Eo,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=Ra(t.elementType),t.type=e,"function"!==typeof e){if(void 0!==e&&null!==e){var o=e.$$typeof;if(o===A){t.tag=11,t=ps(null,t,e,r,n);break e}if(o===$){t.tag=14,t=fs(null,t,e,r,n);break e}if(o===D){t.tag=10,t.type=e,t=Ms(null,t,n);break e}}throw t=K(e)||e,Error(a(306,t,""))}fo(e)?(r=es(e,r),t.tag=1,t=Ss(null,t,e,r,n)):(t.tag=0,t=ws(null,t,e,r,n))}return t;case 0:return ws(e,t,t.type,t.pendingProps,n);case 1:return Ss(e,t,r=t.type,o=es(r,t.pendingProps),n);case 3:e:{if(de(t,t.stateNode.containerInfo),null===e)throw Error(a(387));r=t.pendingProps;var i=t.memoizedState;o=i.element,Ga(e,t),ei(t,r,null,n);var l=t.memoizedState;if(r=l.cache,Zo(0,pa,r),r!==i.cache&&na(t,[pa],n,!0),Za(),r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=js(e,t,r,n);break e}if(r!==o){Ko(o=ko(Error(a(424)),t)),t=js(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(Io=zf(e.firstChild),Mo=t,$o=!0,Fo=null,Uo=!0,n=Wa(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|134221824,n=n.sibling}else{if(Go(),r===o){t=Is(e,t,n);break e}ds(e,t,r,n)}t=t.child}return t;case 26:return xs(e,t),null===e?(n=Wf(t.type,null,t.pendingProps,null))?t.memoizedState=n:$o||(t.stateNode=Fp(t.type,t.pendingProps,ce.current,t)):t.memoizedState=Wf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return fe(t),null===e&&$o&&(r=t.stateNode=Df(t.type,t.pendingProps,ce.current),Mo=t,Uo=!0,o=Io,Kp(t.type)?(Of=o,Io=zf(r.firstChild)):Io=o),ds(e,t,t.pendingProps.children,n),xs(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&$o&&((o=r=Io)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[pt])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(a=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(a!==o.rel||e.getAttribute("href")!==(null==o.href||""===o.href?null:o.href)||e.getAttribute("crossorigin")!==(null==o.crossOrigin?null:o.crossOrigin)||e.getAttribute("title")!==(null==o.title?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((a=e.getAttribute("src"))!==(null==o.src?null:o.src)||e.getAttribute("type")!==(null==o.type?null:o.type)||e.getAttribute("crossorigin")!==(null==o.crossOrigin?null:o.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var a=null==o.name?null:""+o.name;if("hidden"===o.type&&e.getAttribute("name")===a)return e}if(null===(e=zf(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,Uo))?(t.stateNode=r,Mo=t,Io=zf(r.firstChild),Uo=!1,o=!0):o=!1),o||Bo(t)),fe(t),o=t.type,i=t.pendingProps,l=null!==e?e.memoizedProps:null,r=i.children,Up(o,i)?r=null:null!==l&&Up(o,l)&&(t.flags|=32),null!==t.memoizedState&&(o=Oi(e,t,Di,null,null,n),hh._currentValue=o),xs(e,t),ds(e,t,r,n),t.child;case 6:return null===e&&$o&&((e=n=Io)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=zf(e.nextSibling)))return null}return e}(n,t.pendingProps,Uo))?(t.stateNode=n,Mo=t,Io=null,e=!0):e=!1),e||Bo(t)),null;case 13:return Ps(e,t,n);case 4:return de(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Ba(t,null,r,n):ds(e,t,r,n),t.child;case 11:return ps(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,xs(e,t),ds(e,t,r,n),t.child;case 8:case 12:return ds(e,t,t.pendingProps.children,n),t.child;case 10:return Ms(e,t,n);case 9:return o=t.type._context,r=t.pendingProps.children,aa(t),r=r(o=ia(o)),t.flags|=1,ds(e,t,r,n),t.child;case 14:return fs(e,t,t.type,t.pendingProps,n);case 15:return hs(e,t,t.type,t.pendingProps,n);case 19:return As(e,t,n);case 31:return function(e,t,n){var r=t.pendingProps,o=0!==(128&t.flags);if(t.flags&=-129,null===e){if($o){if("hidden"===r.mode)return e=ys(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},gs(null,e);if(di(t),(e=Io)?null!==(e=null!==(e=Pf(e,Uo))&&"&"===e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==No?{id:Lo,overflow:zo}:null,retryLane:536870912,hydrationErrors:null},(n=bo(e)).return=t,t.child=n,Mo=t,Io=null):e=null,null===e)throw Bo(t);return t.lanes=536870912,null}return ys(t,r)}var i=e.memoizedState;if(null!==i){var l=i.dehydrated;if(di(t),o)if(256&t.flags)t.flags&=-257,t=bs(e,t,n);else{if(null===t.memoizedState)throw Error(a(558));t.child=e.child,t.flags|=128,t=null}else if(us||ra(e,t,n,!1),o=0!==(n&e.childLanes),us||o){if(null===ri.current){if(null!==(r=Nu)&&0!==(l=Ze(r,n))&&l!==i.retryLane)throw i.retryLane=l,io(e,l),fd(r,e,l),cs;Cd()}t=bs(e,t,n)}else e=i.treeContext,Io=zf(l.nextSibling),Mo=t,$o=!0,Fo=null,Uo=!1,null!==e&&Ao(t,e),(t=ys(t,r)).flags|=134221824;return t}return(e=ho(e.child,{mode:r.mode,children:r.children})).ref=t.ref,t.child=e,e.return=t,e}(e,t,n);case 22:return ms(e,t,n,t.pendingProps);case 24:return aa(t),r=ia(pa),null===e?(null===(o=ja())&&(o=Nu,i=fa(),o.pooledCache=i,i.refCount++,null!==i&&(o.pooledCacheLanes|=n),o=i),t.memoizedState={parent:r,cache:o},qa(t),Zo(0,pa,o)):(0!==(e.lanes&n)&&(Ga(e,t),ei(t,null,null,n),Za()),o=e.memoizedState,i=t.memoizedState,o.parent!==r?(o={parent:r,cache:r},t.memoizedState=o,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=o),Zo(0,pa,r)):(r=i.cache,Zo(0,pa,r),r!==o.cache&&na(t,[pa],n,!0))),ds(e,t,t.pendingProps.children,n),t.child;case 30:return null===t.stateNode&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),null!=(r=t.pendingProps).name&&"auto"!==r.name?t.flags|=null===e?18882560:18874368:$o&&_o(t),null!==e&&e.memoizedProps.name!==r.name?t.flags|=4194816:xs(e,t),ds(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(a(156,t.tag))}function Us(e){e.flags|=4}function Hs(e,t,n,r,o){var a;if((a=0!==(32&e.mode))&&(a=null===n?rh(t,r):rh(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(335544128&o)===o)if(e.stateNode.complete)e.flags|=8192;else{if(!kd())throw _a=La,Pa;e.flags|=8192}}else e.flags&=-16777217}function Bs(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!oh(t)){if(!kd())throw _a=La,Pa;e.flags|=8192}}function Ws(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Ye():536870912,e.lanes|=t,Bu|=t)}function Vs(e,t){if(!$o)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null}}function qs(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=1206910976&o.subtreeFlags,r|=1206910976&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gs(e,t,n){var r=t.pendingProps;switch(Do(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return qs(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ea(pa),pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(qo(t)?Us(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,Yo())),qs(t),null;case 26:var o=t.type,i=t.memoizedState;return null===e?(Us(t),null!==i?(qs(t),Bs(t,i)):(qs(t),Hs(t,o,null,r,n))):i?i!==e.memoizedState?(Us(t),qs(t),Bs(t,i)):(qs(t),t.flags&=-16777217):((e=e.memoizedProps)!==r&&Us(t),qs(t),Hs(t,o,e,r,n)),null;case 27:if(he(t),n=ce.current,o=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Us(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return qs(t),t.subtreeFlags&=-33554433,null}e=le.current,qo(t)?Wo(t):(e=Df(o,r,n),t.stateNode=e,Us(t))}return qs(t),t.subtreeFlags&=-33554433,null;case 5:if(he(t),o=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Us(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return qs(t),t.subtreeFlags&=-33554433,null}if(i=le.current,qo(t))Wo(t);else{var l=Mp(ce.current);switch(i){case 1:i=l.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=l.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=l.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=l.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":(i=l.createElement("div")).innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i="string"===typeof r.is?l.createElement("select",{is:r.is}):l.createElement("select"),r.multiple?i.multiple=!0:r.size&&(i.size=r.size);break;default:i="string"===typeof r.is?l.createElement(o,{is:r.is}):l.createElement(o)}}i[at]=t,i[it]=r;e:for(l=t.child;null!==l;){if(5===l.tag||6===l.tag)i.appendChild(l.stateNode);else if(4!==l.tag&&27!==l.tag&&null!==l.child){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;null===l.sibling;){if(null===l.return||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=i;e:switch(Op(i,o,r),o){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Us(t)}}return qs(t),t.subtreeFlags&=-33554433,Hs(t,t.type,null===e?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Us(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(e=ce.current,qo(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(o=Mo))switch(o.tag){case 27:case 5:r=o.memoizedProps}e[at]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Np(e.nodeValue,n)))||Bo(t,!0)}else(e=Mp(e).createTextNode(r))[at]=t,t.stateNode=e}return qs(t),null;case 31:if(n=t.memoizedState,null===e||null!==e.memoizedState){if(r=qo(t),null!==n){if(null===e){if(!r)throw Error(a(318));if(!(e=null!==(e=t.memoizedState)?e.dehydrated:null))throw Error(a(557));e[at]=t}else Go(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;qs(t),e=!1}else n=Yo(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return 256&t.flags?(hi(t),t):(hi(t),null);if(0!==(128&t.flags))throw Error(a(558))}return qs(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(o=qo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(a(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(a(317));o[at]=t}else Go(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;qs(t),o=!1}else o=Yo(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return 256&t.flags?(hi(t),t):(hi(t),null)}return hi(t),0!==(128&t.flags)?(t.lanes=n,t):(n=null!==r,e=null!==e&&null!==e.memoizedState,n&&(o=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(o=r.alternate.memoizedState.cachePool.pool),i=null,null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(i=r.memoizedState.cachePool.pool),i!==o&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ws(t,t.updateQueue),qs(t),null);case 4:return pe(),null===e&&bp(t.stateNode.containerInfo),t.flags|=67108864,qs(t),null;case 10:return ea(t.type),qs(t),null;case 19:if(vi(t),null===(r=t.memoizedState))return qs(t),null;if(o=0!==(128&t.flags),null===(i=r.rendering))if(o)Vs(r,!1);else{if(0!==Iu||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(i=yi(e))){for(t.flags|=128,Vs(r,!1),e=i.updateQueue,t.updateQueue=e,Ws(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)mo(n,e),n=n.sibling;return gi(0,1&mi.current|2),$o&&Oo(t,r.treeForkCount),t.child}e=e.sibling}null!==r.tail&&Ce()>Ku&&(t.flags|=128,o=!0,Vs(r,!1),t.lanes=4194304)}else{if(!o)if(null!==(e=yi(i))){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,Ws(t,e),Vs(r,!0),null===r.tail&&"collapsed"!==r.tailMode&&"visible"!==r.tailMode&&!i.alternate&&!$o)return qs(t),null}else 2*Ce()-r.renderingStartTime>Ku&&536870912!==n&&(t.flags|=128,o=!0,Vs(r,!1),t.lanes=4194304);r.isBackwards?(i.sibling=t.child,t.child=i):(null!==(e=r.last)?e.sibling=i:t.child=i,r.last=i)}if(null!==r.tail){e:{for(n=e=r.tail;null!==n;){if(null!==n.alternate){n=!1;break e}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ce(),e.sibling=null,i=mi.current,i=o?1&i|2:1&i,"visible"===r.tailMode||"collapsed"===r.tailMode||!n||$o?gi(0,i):(n=i,oe(si,t),oe(mi,n),null===ci&&(ci=t)),$o&&Oo(t,r.treeForkCount),e}return qs(t),null;case 22:case 23:return hi(t),li(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(qs(t),6&t.subtreeFlags&&(t.flags|=8192)):qs(t),null!==(n=t.updateQueue)&&Ws(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&re(Sa),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ea(pa),qs(t),null;case 25:return null;case 30:return t.flags|=33554432,qs(t),null}throw Error(a(156,t.tag))}function Ys(e,t){switch(Do(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ea(pa),pe(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return he(t),null;case 31:if(null!==t.memoizedState){if(hi(t),null===t.alternate)throw Error(a(340));Go()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 13:if(hi(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));Go()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return vi(t),65536&(e=t.flags)?(t.flags=-65537&e|128,null!==(e=t.memoizedState)&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return pe(),null;case 10:return ea(t.type),null;case 22:case 23:return hi(t),li(),null!==e&&re(Sa),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return ea(pa),null;default:return null}}function Ks(e,t){switch(Do(t),t.tag){case 3:ea(pa),pe();break;case 26:case 27:case 5:he(t);break;case 4:pe();break;case 31:null!==t.memoizedState&&hi(t);break;case 13:hi(t);break;case 19:vi(t);break;case 10:ea(t.type);break;case 22:case 23:hi(t),li(),null!==e&&re(Sa);break;case 24:ea(pa)}}function Qs(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var o=r.next;n=o;do{if((n.tag&e)===e){r=void 0;var a=n.create,i=n.inst;r=a(),i.destroy=r}n=n.next}while(n!==o)}}catch(l){Wd(t,t.return,l)}}function Js(e,t,n){try{var r=t.updateQueue,o=null!==r?r.lastEffect:null;if(null!==o){var a=o.next;r=a;do{if((r.tag&e)===e){var i=r.inst,l=i.destroy;if(void 0!==l){i.destroy=void 0,o=t;var s=n,c=l;try{c()}catch(u){Wd(o,s,u)}}}r=r.next}while(r!==a)}}catch(u){Wd(t,t.return,u)}}function Xs(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{ni(t,n)}catch(r){Wd(e,e.return,r)}}}function Zs(e,t,n){n.props=es(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){Wd(e,t,r)}}function ec(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var o=e.stateNode,a=Qr(e.memoizedProps,o);null!==o.ref&&o.ref.name===a||(o.ref=af(a)),r=o.ref;break;case 7:if(null===e.stateNode){var i=new lf(e);m(e.child,!1,Sf,i,void 0,void 0),e.stateNode=i}r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(l){Wd(e,t,l)}}function tc(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(o){Wd(e,t,o)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(a){Wd(e,t,a)}else n.current=null}function nc(e,t){if((5===e.tag||27===e.tag||6===e.tag)&&null===e.alternate&&null!==t)for(var n=0;n<t.length;n++)Cf(e.stateNode,t[n])}function rc(e){for(var t=e.return;null!==t&&(ic(t)&&Cf(e.stateNode,t.stateNode),!ac(t));)t=t.return}function oc(e){for(var t=e.return;null!==t&&(ic(t)&&Ef(e.stateNode,t.stateNode),!ac(t));)t=t.return}function ac(e){return 5===e.tag||3===e.tag||27===e.tag}function ic(e){return e&&7===e.tag&&null!==e.stateNode}function lc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(o){Wd(e,e.return,o)}}function sc(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,i=null,l=null,s=null,c=null,u=null,d=null;for(h in n){var p=n[h];if(n.hasOwnProperty(h)&&null!=p)switch(h){case"checked":case"value":break;case"defaultValue":c=p;default:r.hasOwnProperty(h)||Lp(e,t,h,null,r,p)}}for(var f in r){var h=r[f];if(p=n[f],r.hasOwnProperty(f)&&(null!=h||null!=p))switch(f){case"type":h!==p&&(Pt=!0),i=h;break;case"name":h!==p&&(Pt=!0),o=h;break;case"checked":h!==p&&(Pt=!0),u=h;break;case"defaultChecked":h!==p&&(Pt=!0),d=h;break;case"value":h!==p&&(Pt=!0),l=h;break;case"defaultValue":h!==p&&(Pt=!0),s=h;break;case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(a(137,t));break;default:h!==p&&Lp(e,t,f,h,r,p)}}return void $t(e,l,s,c,u,d,i,o);case"select":for(i in h=l=s=f=null,n)if(c=n[i],n.hasOwnProperty(i)&&null!=c)switch(i){case"value":break;case"multiple":h=c;default:r.hasOwnProperty(i)||Lp(e,t,i,null,r,c)}for(o in r)if(i=r[o],c=n[o],r.hasOwnProperty(o)&&(null!=i||null!=c))switch(o){case"value":i!==c&&(Pt=!0),f=i;break;case"defaultValue":i!==c&&(Pt=!0),s=i;break;case"multiple":i!==c&&(Pt=!0),l=i;default:i!==c&&Lp(e,t,o,i,r,c)}return t=s,n=l,r=h,void(null!=f?Ht(e,!!n,f,!1):!!r!==!!n&&(null!=t?Ht(e,!!n,t,!0):Ht(e,!!n,n?[]:"",!1)));case"textarea":for(s in h=f=null,n)if(o=n[s],n.hasOwnProperty(s)&&null!=o&&!r.hasOwnProperty(s))switch(s){case"value":case"children":break;default:Lp(e,t,s,null,r,o)}for(l in r)if(o=r[l],i=n[l],r.hasOwnProperty(l)&&(null!=o||null!=i))switch(l){case"value":o!==i&&(Pt=!0),f=o;break;case"defaultValue":o!==i&&(Pt=!0),h=o;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=o)throw Error(a(91));break;default:o!==i&&Lp(e,t,l,o,r,i)}return void Bt(e,f,h);case"option":for(var m in n)if(f=n[m],n.hasOwnProperty(m)&&null!=f&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else Lp(e,t,m,null,r,f);for(c in r)if(f=r[c],h=n[c],r.hasOwnProperty(c)&&f!==h&&(null!=f||null!=h))if("selected"===c)f!==h&&(Pt=!0),e.selected=f&&"function"!==typeof f&&"symbol"!==typeof f;else Lp(e,t,c,f,r,h);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)f=n[g],n.hasOwnProperty(g)&&null!=f&&!r.hasOwnProperty(g)&&Lp(e,t,g,null,r,f);for(u in r)if(f=r[u],h=n[u],r.hasOwnProperty(u)&&f!==h&&(null!=f||null!=h))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(a(137,t));break;default:Lp(e,t,u,f,r,h)}return;default:if(Kt(t)){for(var v in n)f=n[v],n.hasOwnProperty(v)&&void 0!==f&&!r.hasOwnProperty(v)&&zp(e,t,v,void 0,r,f);for(d in r)f=r[d],h=n[d],!r.hasOwnProperty(d)||f===h||void 0===f&&void 0===h||zp(e,t,d,f,r,h);return}}for(var y in n)f=n[y],n.hasOwnProperty(y)&&null!=f&&!r.hasOwnProperty(y)&&Lp(e,t,y,null,r,f);for(p in r)f=r[p],h=n[p],!r.hasOwnProperty(p)||f===h||null==f&&null==h||Lp(e,t,p,f,r,h)}(r,e.type,n,t),r[it]=t}catch(o){Wd(e,e.return,o)}}function cc(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&Kp(e.type)||4===e.tag}function uc(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||cc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&Kp(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function dc(e,t,n,r){var o=e.tag;if(5===o||6===o)o=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(o,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(o),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zt)),nc(e,r),Pt=!0;else if(4!==o&&(27===o&&(nc(e,r),r=null,Kp(e.type)&&(n=e.stateNode,t=null)),null!==(e=e.child)))for(dc(e,t,n,r),e=e.sibling;null!==e;)dc(e,t,n,r),e=e.sibling}function pc(e,t,n,r){var o=e.tag;if(5===o||6===o)o=e.stateNode,t?n.insertBefore(o,t):n.appendChild(o),nc(e,r),Pt=!0;else if(4!==o&&(27===o&&(nc(e,r),r=null,Kp(e.type)&&(n=e.stateNode)),null!==(e=e.child)))for(pc(e,t,n,r),e=e.sibling;null!==e;)pc(e,t,n,r),e=e.sibling}function fc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);Op(t,r,n),t[at]=e,t[it]=n}catch(a){Wd(e,e.return,a)}}var hc=!1,mc=null;function gc(e){30!==e.tag&&0===(33554432&e.subtreeFlags)||(hc=!0)}var vc=null;function yc(){var e=vc;return vc=null,e}var bc=0;function xc(e,t,n,r,o){return bc=0,wc(e.child,t,n,r,o)}function wc(e,t,n,r,o){for(var a=!1;null!==e;){if(5===e.tag){var i=e.stateNode;if(null!==r){var l=tf(i);r.push(l),l.view&&(a=!0)}else a||tf(i).view&&(a=!0);hc=!0,Xp(i,0===bc?t:t+"_"+bc,n),bc++}else 22===e.tag&&null!==e.memoizedState||30===e.tag&&o||wc(e.child,t,n,r,o)&&(a=!0);e=e.sibling}return a}function kc(e,t){for(;null!==e;)5===e.tag?Zp(e.stateNode,e.memoizedProps):22===e.tag&&null!==e.memoizedState||30===e.tag&&t||kc(e.child,t),e=e.sibling}function Sc(e){if(0!==(18874368&e.subtreeFlags))for(e=e.child;null!==e;){if((22!==e.tag||null===e.memoizedState)&&(Sc(e),30===e.tag&&0!==(18874368&e.flags)&&e.stateNode.paired)){var t=e.memoizedProps;if(null==t.name||"auto"===t.name)throw Error(a(544));var n=t.name;"none"!==(t=Xr(t.default,t.share))&&(xc(e,n,t,null,!1)||kc(e.child,!1))}e=e.sibling}}function jc(e,t){if(30===e.tag){var n=e.stateNode,r=e.memoizedProps,o=Qr(r,n),a=Xr(r.default,n.paired?r.share:r.enter);"none"!==a?xc(e,o,a,null,!1)?(Sc(e),n.paired||t||pd(e,r.onEnter)):kc(e.child,!1):Sc(e)}else if(0!==(33554432&e.subtreeFlags))for(e=e.child;null!==e;)jc(e,t),e=e.sibling;else Sc(e)}function Cc(e){if(null!==mc&&0!==mc.size){var t=mc;if(0!==(18874368&e.subtreeFlags))for(e=e.child;null!==e;){if(22!==e.tag||null===e.memoizedState){if(30===e.tag&&0!==(18874368&e.flags)){var n=e.memoizedProps,r=n.name;if(null!=r&&"auto"!==r){var o=t.get(r);if(void 0!==o){var a=Xr(n.default,n.share);if("none"!==a&&(xc(e,r,a,null,!1)?(a=e.stateNode,o.paired=a,a.paired=o,pd(e,n.onShare)):kc(e.child,!1)),t.delete(r),0===t.size)break}}}Cc(e)}e=e.sibling}}}function Ec(e){if(30===e.tag){var t=e.memoizedProps,n=Qr(t,e.stateNode),r=null!==mc?mc.get(n):void 0,o=Xr(t.default,void 0!==r?t.share:t.exit);"none"!==o&&(xc(e,n,o,null,!1)?void 0!==r?(o=e.stateNode,r.paired=o,o.paired=r,mc.delete(n),pd(e,t.onShare)):pd(e,t.onExit):kc(e.child,!1)),null!==mc&&Cc(e)}else if(0!==(33554432&e.subtreeFlags))for(e=e.child;null!==e;)Ec(e),e=e.sibling;else null!==mc&&Cc(e)}function Tc(e){for(e=e.child;null!==e;){if(30===e.tag){var t=e.memoizedProps,n=Qr(t,e.stateNode);t=Xr(t.default,t.update),e.flags&=-5,"none"!==t&&xc(e,n,t,e.memoizedState=[],!1)}else 0!==(33554432&e.subtreeFlags)&&Tc(e);e=e.sibling}}function Pc(e){if(0!==(18874368&e.subtreeFlags))for(e=e.child;null!==e;){if(22!==e.tag||null===e.memoizedState){if(30===e.tag&&0!==(18874368&e.flags)){var t=e.stateNode;null!==t.paired&&(t.paired=null,kc(e.child,!1))}Pc(e)}e=e.sibling}}function Nc(e){if(30===e.tag)e.stateNode.paired=null,kc(e.child,!1),Pc(e);else if(0!==(33554432&e.subtreeFlags))for(e=e.child;null!==e;)Nc(e),e=e.sibling;else Pc(e)}function Lc(e){for(e=e.child;null!==e;)30===e.tag?kc(e.child,!1):0!==(33554432&e.subtreeFlags)&&Lc(e),e=e.sibling}function zc(e,t,n,r,o,a,i){for(var l=!1;null!==t;){if(5===t.tag){var s=t.stateNode;if(null!==a&&bc<a.length){var c,u=a[bc],d=tf(s);if((u.view||d.view)&&(l=!0),c=0===(4&e.flags))if(d.clip)c=!0;else{c=u.rect;var p=d.rect;c=c.y!==p.y||c.x!==p.x||c.height!==p.height||c.width!==p.width}c&&(e.flags|=4),d.abs?d=!u.abs:(u=u.rect,d=d.rect,d=u.height!==d.height||u.width!==d.width),d&&(e.flags|=32)}else e.flags|=32;0!==(4&e.flags)&&Xp(s,0===bc?n:n+"_"+bc,o),l&&0!==(4&e.flags)||(null===vc&&(vc=[]),vc.push(s,0===bc?r:r+"_"+bc,t.memoizedProps)),bc++}else 22===t.tag&&null!==t.memoizedState||(30===t.tag&&i?e.flags|=32&t.flags:zc(e,t.child,n,r,o,a,i)&&(l=!0));t=t.sibling}return l}function Oc(e,t){for(e=e.child;null!==e;){if(30===e.tag){var n=e.memoizedProps,r=e.stateNode,o=Qr(n,r),a=Xr(n.default,n.update);if(t)var i=null===(r=r.clones)?null:r.map(nf);else i=e.memoizedState,e.memoizedState=null;r=e;var l=e.child;bc=0,o=zc(r,l,o,o,a,i,!1),0!==(4&e.flags)&&o&&(t||pd(e,n.onUpdate))}else 0!==(33554432&e.subtreeFlags)&&Oc(e,t);e=e.sibling}}var Rc=!1,_c=!1,Dc=!1,Ac=!1,Mc="function"===typeof WeakSet?WeakSet:Set,Ic=null,$c=!1,Fc=!1,Uc=!1,Hc=!1;function Bc(e){for(;null!==Ic;){var t=Ic,n=e,r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&o)&&null!==r){n=void 0,o=r.memoizedProps,r=r.memoizedState;var i=t.stateNode;try{var l=es(t.type,o);n=i.getSnapshotBeforeUpdate(l,r),i.__reactInternalSnapshotBeforeUpdate=n}catch(s){Wd(t,t.return,s)}}break;case 3:if(0!==(1024&o))if(9===(n=(r=t.stateNode.containerInfo).nodeType))Tf(r);else if(1===n)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Tf(r);break;default:r.textContent=""}break;case 30:n&&null!==r&&(n=Qr(r.memoizedProps,r.stateNode),"none"!==(o=Xr((o=t.memoizedProps).default,o.update))&&xc(r,n,o,r.memoizedState=[],!0));break;default:if(0!==(1024&o))throw Error(a(163))}if(null!==(r=t.sibling)){r.return=t.return,Ic=r;break}Ic=t.return}}function Wc(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:cu(e,n),4&r&&Qs(5,n);break;case 1:if(cu(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(i){Wd(n,n.return,i)}else{var o=es(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){Wd(n,n.return,l)}}64&r&&Xs(n),512&r&&ec(n,n.return);break;case 3:if(cu(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{ni(e,t)}catch(i){Wd(n,n.return,i)}}break;case 27:null===t&&4&r&&fc(n);case 26:case 5:cu(e,n),null===t&&4&r&&lc(n),512&r&&ec(n,n.return);break;case 12:cu(e,n);break;case 31:cu(e,n),4&r&&Zc(e,n);break;case 13:cu(e,n),4&r&&eu(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$~"===e.data)e._reactRetry=t;else if("$?"!==e.data||"loading"!==n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=Yd.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||Rc)){var a=null!==t&&null!==t.memoizedState||_c;t=Rc,o=_c,Rc=r,(_c=a)&&!o?(r=2,0!==(8772&n.subtreeFlags)&&(r|=1),du(e,n,r)):cu(e,n),Rc=t,_c=o}break;case 30:cu(e,n),512&r&&ec(n,n.return);break;case 7:512&r&&ec(n,n.return);default:cu(e,n)}}function Vc(e,t){for(e=e.child;null!==e;)qc(e,t),e=e.sibling}function qc(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;"function"===typeof r.setProperty?r.setProperty("display","none","important"):r.display="none"}else{var o=e.stateNode,a=e.memoizedProps.style,i=void 0!==a&&null!==a&&a.hasOwnProperty("display")?a.display:null;o.style.display=null==i||"boolean"===typeof i?"":(""+i).trim()}}catch(s){Wd(e,e.return,s)}Gc(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,Pt=!0}catch(s){Wd(e,e.return,s)}break;case 18:try{var l=e.stateNode;t?Jp(l,!0):Jp(e.stateNode,!1)}catch(s){Wd(e,e.return,s)}break;case 22:case 23:null===e.memoizedState&&Vc(e,t);break;default:Vc(e,t)}}function Gc(e,t){if(67108864&e.subtreeFlags)for(e=e.child;null!==e;){e:{var n=e,r=t;switch(n.tag){case 4:qc(n,r);break e;case 22:null===n.memoizedState&&Gc(n,r);break e;default:Gc(n,r)}}e=e.sibling}}function Yc(e){var t=e.alternate;null!==t&&(e.alternate=null,Yc(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&ht(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Kc=null,Qc=!1;function Jc(e,t,n){for(n=n.child;null!==n;)Xc(e,t,n),n=n.sibling}function Xc(e,t,n){if(De&&"function"===typeof De.onCommitFiberUnmount)try{De.onCommitFiberUnmount(_e,n)}catch(a){}switch(n.tag){case 26:_c||tc(n,t),Jc(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!_c&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:_c||tc(n,t),oc(n);var r=Kc,o=Qc;Kp(n.type)&&(Kc=n.stateNode,Qc=!1),Jc(e,t,n),Af(n.stateNode,n.type,n.memoizedProps),Kc=r,Qc=o;break;case 5:_c||tc(n,t),oc(n);case 6:if(6===n.tag&&oc(n),r=Kc,o=Qc,Kc=null,Jc(e,t,n),Qc=o,null!==(Kc=r))if(Qc)try{(9===Kc.nodeType?Kc.body:"HTML"===Kc.nodeName?Kc.ownerDocument.body:Kc).removeChild(n.stateNode),Pt=!0}catch(i){Wd(n,t,i)}else try{Kc.removeChild(n.stateNode),Pt=!0}catch(i){Wd(n,t,i)}break;case 18:null!==Kc&&(Qc?(Qp(9===(e=Kc).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Yh(e)):Qp(Kc,n.stateNode));break;case 4:r=Kc,o=Qc,Kc=n.stateNode.containerInfo,Qc=!0,Jc(e,t,n),Kc=r,Qc=o;break;case 0:case 11:case 14:case 15:Js(2,n,t),_c||Js(4,n,t),Jc(e,t,n);break;case 1:_c||(tc(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&Zs(n,t,r)),Jc(e,t,n);break;case 21:Jc(e,t,n);break;case 22:_c=(r=_c)||null!==n.memoizedState,Jc(e,t,n),_c=r;break;case 30:tc(n,t),Jc(e,t,n);break;case 7:_c||tc(n,t),Jc(e,t,n);break;default:Jc(e,t,n)}}function Zc(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&null!==(e=e.memoizedState))){e=e.dehydrated;try{Yh(e)}catch(n){Wd(t,t.return,n)}}}function eu(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Yh(e)}catch(n){Wd(t,t.return,n)}}function tu(e,t){var n=function(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Mc),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Mc),t;default:throw Error(a(435,e.tag))}}(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Kd.bind(null,e,t);t.then(r,r)}})}function nu(e,t,n){var r=t.deletions;if(null!==r)for(var o=0;o<r.length;o++){var i=r[o],l=e,s=t,c=s;e:for(;null!==c;){switch(c.tag){case 27:if(Kp(c.type)){Kc=c.stateNode,Qc=!1;break e}break;case 5:Kc=c.stateNode,Qc=!1;break e;case 3:case 4:Kc=c.stateNode.containerInfo,Qc=!0;break e}c=c.return}if(null===Kc)throw Error(a(160));Xc(l,s,i),Kc=null,Qc=!1,null!==(l=i.alternate)&&(l.return=null),i.return=null}if(13886&t.subtreeFlags)for(t=t.child;null!==t;)ou(t,e,n),t=t.sibling}var ru=null;function ou(e,t,n){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(4&o&&null!==(r=null!==(r=e.updateQueue)?r.events:null))for(var i=0;i<r.length;i++){var l=r[i];l.ref.impl=l.nextImpl}nu(t,e,n),au(e),4&o&&(Js(3,e,e.return),Qs(3,e),Js(5,e,e.return));break;case 1:nu(t,e,n),au(e),512&o&&(_c||null===r||tc(r,r.return)),64&o&&Rc&&(null!==(e=e.updateQueue)&&(null!==(t=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?t:n.concat(t))));break;case 26:if(i=ru,nu(t,e,n),au(e),512&o&&(_c||null===r||tc(r,r.return)),4&o)if(o=null!==r?r.memoizedState:null,n=e.memoizedState,null===r)if(null===n)if(null===e.stateNode)if(Rc)e.stateNode=Fp(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,o=i.ownerDocument||i;t:switch(t){case"title":(!(r=o.getElementsByTagName("title")[0])||r[pt]||r[at]||"http://www.w3.org/2000/svg"===r.namespaceURI||r.hasAttribute("itemprop"))&&(r=o.createElement(t),o.head.insertBefore(r,o.querySelector("head > title"))),Op(r,t,n),r[at]=e,bt(r),t=r;break e;case"link":if(i=th("link","href",o).get(t+(n.href||"")))for(l=0;l<i.length;l++)if((r=i[l]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&r.getAttribute("rel")===(null==n.rel?null:n.rel)&&r.getAttribute("title")===(null==n.title?null:n.title)&&r.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){i.splice(l,1);break t}Op(r=o.createElement(t),t,n),o.head.appendChild(r);break;case"meta":if(i=th("meta","content",o).get(t+(n.content||"")))for(l=0;l<i.length;l++)if((r=i[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&r.getAttribute("name")===(null==n.name?null:n.name)&&r.getAttribute("property")===(null==n.property?null:n.property)&&r.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&r.getAttribute("charset")===(null==n.charSet?null:n.charSet)){i.splice(l,1);break t}Op(r=o.createElement(t),t,n),o.head.appendChild(r);break;default:throw Error(a(468,t))}r[at]=e,bt(r),t=r}e.stateNode=t}else Rc||nh(i,e.type,e.stateNode);else e.stateNode=Qf(i,n,e.memoizedProps);else o!==n?(null===o?null===(t=r.stateNode)||_c||t.parentNode.removeChild(t):o.count--,null===n?Rc||nh(i,e.type,e.stateNode):Qf(i,n,e.memoizedProps)):null===n&&null!==e.stateNode&&sc(e,e.memoizedProps,r.memoizedProps);break;case 27:nu(t,e,n),au(e),512&o&&(_c||null===r||tc(r,r.return)),null!==r&&4&o&&sc(e,e.memoizedProps,r.memoizedProps);break;case 5:if(i=Dc,Dc=!1,nu(t,e,n),Dc=i,au(e),512&o&&(_c||null===r||tc(r,r.return)),32&e.flags){t=e.stateNode;try{Vt(t,""),Pt=!0}catch(d){Wd(e,e.return,d)}}4&o&&null!=e.stateNode&&sc(e,t=e.memoizedProps,null!==r?r.memoizedProps:t),1024&o&&(Ac=!0);break;case 6:if(nu(t,e,n),au(e),4&o){if(null===e.stateNode)throw Error(a(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Pt=!0}catch(d){Wd(e,e.return,d)}}break;case 3:if(Pt=!1,eh=null,i=ru,ru=Ff(t.containerInfo),nu(t,e,n),ru=i,au(e),4&o&&null!==r&&r.memoizedState.isDehydrated)try{Yh(t.containerInfo)}catch(d){Wd(e,e.return,d)}Ac&&(Ac=!1,iu(e)),Pt=!1;break;case 4:o=Dc,Dc=Rc,r=Nt(),i=ru,ru=Ff(e.stateNode.containerInfo),nu(t,e,n),au(e),ru=i,Pt&&Fc&&(Uc=!0),Pt=r,Dc=o;break;case 12:nu(t,e,n),au(e);break;case 31:nu(t,e,n),au(e),4&o&&(null!==(t=e.updateQueue)&&(e.updateQueue=null,tu(e,t)));break;case 13:nu(t,e,n),au(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==r&&null!==r.memoizedState)&&(Gu=Ce()),4&o&&(null!==(t=e.updateQueue)&&(e.updateQueue=null,tu(e,t)));break;case 22:i=null!==e.memoizedState,l=null!==r&&null!==r.memoizedState;var s=Rc,c=_c,u=Dc;Rc=s||i,Dc=u||i,_c=c||l,nu(t,e,n),_c=c,Dc=u,Rc=s,au(e),8192&o&&((t=e.stateNode)._visibility=i?-2&t._visibility:1|t._visibility,!i||null===r||l||Rc||_c||(n=Rc,r=_c,Rc=i||Rc,_c=t=l||_c,uu(e,2),Rc=n,_c=r),!i&&Dc||Vc(e,i)),4&o&&(null!==(t=e.updateQueue)&&(null!==(n=t.retryQueue)&&(t.retryQueue=null,tu(e,n))));break;case 19:nu(t,e,n),au(e),4&o&&(null!==(t=e.updateQueue)&&(e.updateQueue=null,tu(e,t)));break;case 30:512&o&&(_c||null===r||tc(r,r.return)),o=Nt(),i=Fc,l=(335544064&n)===n,s=e.memoizedProps,Fc=l&&"none"!==Xr(s.default,s.update),nu(t,e,n),au(e),l&&null!==r&&Pt&&(e.flags|=4),Fc=i,Pt=o;break;case 21:break;case 7:512&o&&(_c||null===r||tc(r,r.return)),r&&null!==r.stateNode&&(r.stateNode._fragmentFiber=e);default:nu(t,e,n),au(e)}}function au(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(cc(r)){n=r;break}r=r.return}r=null;for(var o=e.return;null!==o;){if(ic(o)){var i=o.stateNode;null===r?r=[i]:r.push(i)}if(ac(o))break;o=o.return}var l=r;if(null==n)throw Error(a(160));switch(n.tag){case 27:var s=n.stateNode;pc(e,uc(e),s,l);break;case 5:var c=n.stateNode;32&n.flags&&(Vt(c,""),n.flags&=-33),pc(e,uc(e),c,l);break;case 3:case 4:var u=n.stateNode.containerInfo;dc(e,uc(e),u,l);break;default:throw Error(a(161))}}catch(d){Wd(e,e.return,d)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function iu(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;iu(t),5===t.tag&&1024&t.flags&&(t=t.stateNode,Sh=!0,t.reset(),Sh=!1),e=e.sibling}}function lu(e,t){if(9270&t.subtreeFlags)for(t=t.child;null!==t;)su(t,e),t=t.sibling;else Oc(t,!1)}function su(e,t){var n=e.alternate;if(null===n)jc(e,!1);else switch(e.tag){case 3:if(Hc=$c=!1,yc(),lu(t,e),!$c&&!Uc){if(null!==(e=vc))for(var r=0;r<e.length;r+=3){n=e[r];var o=e[r+1];Zp(n,e[r+2]),null!==(n=n.ownerDocument.documentElement)&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+o+")"})}null!==(e=9===(e=t.containerInfo).nodeType?e.documentElement:e.ownerDocument.documentElement)&&""===e.style.viewTransitionName&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Hc=!0}vc=null;break;case 5:default:lu(t,e);break;case 4:r=$c,$c=!1,lu(t,e),$c&&(Uc=!0),$c=r;break;case 22:null===e.memoizedState&&(null!==n.memoizedState?jc(e,!1):lu(t,e));break;case 30:r=$c,o=yc(),$c=!1,lu(t,e),$c&&(e.flags|=4);var a=e.memoizedProps,i=e.stateNode;t=Qr(a,i),i=Qr(n.memoizedProps,i);var l=Xr(a.default,a.update);"none"===l?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,bc=0,t=zc(e,n,t,i,l,a,!0),bc!==(null===a?0:a.length)&&(e.flags|=32)),0!==(4&e.flags)&&t?(pd(e,e.memoizedProps.onUpdate),vc=o):null!==o&&(o.push.apply(o,vc),vc=o),$c=0!==(32&e.flags)||r}}function cu(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Wc(e,t.alternate,t),t=t.sibling}function uu(e,t){for(e=e.child;null!==e;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Js(4,n,n.return),uu(n,r);break;case 1:tc(n,n.return);var o=n.stateNode;"function"===typeof o.componentWillUnmount&&Zs(n,n.return,o),uu(n,r);break;case 27:0!==(2&r)&&Af(n.stateNode,n.type,n.memoizedProps);case 5:tc(n,n.return),5!==n.tag&&27!==n.tag||oc(n),uu(n,r);break;case 6:oc(n);break;case 26:tc(n,n.return),o=n.stateNode,null!==n.memoizedState||null===o||_c||o.parentNode.removeChild(o),uu(n,r);break;case 22:null===n.memoizedState&&uu(n,r);break;case 30:tc(n,n.return),uu(n,r);break;case 7:tc(n,n.return);default:uu(n,r)}e=e.sibling}}function du(e,t,n){for(n=0!==(8772&t.subtreeFlags)?n:-2&n,t=t.child;null!==t;){var r=t.alternate,o=e,a=t,i=a.flags,l=0!==(1&n);switch(a.tag){case 0:case 11:case 15:du(o,a,n),Qs(4,a);break;case 1:if(du(o,a,n),"function"===typeof(o=(r=a).stateNode).componentDidMount)try{o.componentDidMount()}catch(u){Wd(r,r.return,u)}if(null!==(o=(r=a).updateQueue)){var s=r.stateNode;try{var c=o.shared.hiddenCallbacks;if(null!==c)for(o.shared.hiddenCallbacks=null,o=0;o<c.length;o++)ti(c[o],s)}catch(u){Wd(r,r.return,u)}}l&&64&i&&Xs(a),ec(a,a.return);break;case 27:0!==(2&n)&&fc(a);case 5:5!==a.tag&&27!==a.tag||rc(a),du(o,a,n),l&&null===r&&4&i&&lc(a),ec(a,a.return);break;case 6:rc(a);break;case 26:s=a.stateNode,null!==a.memoizedState||null===s||Rc||nh(Ff(s.ownerDocument),a.type,s),du(o,a,n),l&&null===r&&4&i&&lc(a),ec(a,a.return);break;case 12:du(o,a,n);break;case 31:du(o,a,n),l&&4&i&&Zc(o,a);break;case 13:du(o,a,n),l&&4&i&&eu(o,a);break;case 22:null===a.memoizedState&&du(o,a,n),ec(a,a.return);break;case 30:du(o,a,n),ec(a,a.return);break;case 7:ec(a,a.return);default:du(o,a,n)}t=t.sibling}}function pu(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&ha(n))}function fu(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&ha(e))}function hu(e,t,n,r){var o=(335544064&n)===n;if(t.subtreeFlags&(o?10262:10256))for(t=t.child;null!==t;)mu(e,t,n,r),t=t.sibling;else o&&Lc(t)}function mu(e,t,n,r){var o=(335544064&n)===n;o&&null===t.alternate&&null!==t.return&&null!==t.return.alternate&&Nc(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:hu(e,t,n,r),2048&a&&Qs(9,t);break;case 1:case 31:case 13:default:hu(e,t,n,r);break;case 3:hu(e,t,n,r),o&&Hc&&("root"===(e=9===(e=e.containerInfo).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e).style.viewTransitionName&&(e.style.viewTransitionName=""),null!==(e=e.ownerDocument.documentElement)&&"none"===e.style.viewTransitionName&&(e.style.viewTransitionName="")),2048&a&&(a=null,null!==t.alternate&&(a=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==a&&(t.refCount++,null!=a&&ha(a)));break;case 12:if(2048&a){hu(e,t,n,r),a=t.stateNode;try{var i=t.memoizedProps,l=i.id,s=i.onPostCommit;"function"===typeof s&&s(l,null===t.alternate?"mount":"update",a.passiveEffectDuration,-0)}catch(c){Wd(t,t.return,c)}}else hu(e,t,n,r);break;case 23:break;case 22:i=t.stateNode,l=t.alternate,null!==t.memoizedState?(o&&null!==l&&null===l.memoizedState&&Nc(l),2&i._visibility?hu(e,t,n,r):vu(e,t)):(o&&null!==l&&null!==l.memoizedState&&Nc(t),2&i._visibility?hu(e,t,n,r):(i._visibility|=2,gu(e,t,n,r,0!==(10256&t.subtreeFlags)||!1))),2048&a&&pu(l,t);break;case 24:hu(e,t,n,r),2048&a&&fu(t.alternate,t);break;case 30:o&&(null!==(a=t.alternate)&&(kc(a.child,!0),kc(t.child,!0))),hu(e,t,n,r)}}function gu(e,t,n,r,o){for(o=o&&(0!==(10256&t.subtreeFlags)||!1),t=t.child;null!==t;){var a=e,i=t,l=n,s=r,c=i.flags;switch(i.tag){case 0:case 11:case 15:gu(a,i,l,s,o),Qs(8,i);break;case 23:break;case 22:var u=i.stateNode;null!==i.memoizedState?2&u._visibility?gu(a,i,l,s,o):vu(a,i):(u._visibility|=2,gu(a,i,l,s,o)),o&&2048&c&&pu(i.alternate,i);break;case 24:gu(a,i,l,s,o),o&&2048&c&&fu(i.alternate,i);break;default:gu(a,i,l,s,o)}t=t.sibling}}function vu(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,o=r.flags;switch(r.tag){case 22:vu(n,r),2048&o&&pu(r.alternate,r);break;case 24:vu(n,r),2048&o&&fu(r.alternate,r);break;default:vu(n,r)}t=t.sibling}}var yu=8192;function bu(e,t,n){if(e.subtreeFlags&yu)for(e=e.child;null!==e;)xu(e,t,n),e=e.sibling}function xu(e,t,n){switch(e.tag){case 26:bu(e,t,n),e.flags&yu&&(null!==e.memoizedState?function(e,t,n,r){if("stylesheet"===n.type&&("string"!==typeof r.media||!1!==matchMedia(r.media).matches)&&0===(4&n.state.loading)){if(null===n.instance){var o=Vf(r.href),a=t.querySelector(qf(o));if(a)return null!==(t=a._p)&&"object"===typeof t&&"function"===typeof t.then&&(e.count++,e=ch.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,void bt(a);a=t.ownerDocument||t,r=Gf(r),(o=If.get(o))&&Xf(r,o),bt(a=a.createElement("link"));var i=a;i._p=new Promise(function(e,t){i.onload=e,i.onerror=t}),Op(a,"link",r),n.instance=a}null===e.stylesheets&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&0===(3&n.state.loading)&&(e.count++,n=ch.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}(n,ru,e.memoizedState,e.memoizedProps):(e=e.stateNode,(335544128&t)===t&&ih(n,e)));break;case 5:bu(e,t,n),e.flags&yu&&(e=e.stateNode,(335544128&t)===t&&ih(n,e));break;case 3:case 4:var r=ru;ru=Ff(e.stateNode.containerInfo),bu(e,t,n),ru=r;break;case 22:null===e.memoizedState&&(null!==(r=e.alternate)&&null!==r.memoizedState?(r=yu,yu=16777216,bu(e,t,n),yu=r):bu(e,t,n));break;case 30:if(0!==(e.flags&yu)&&(null!=(r=e.memoizedProps.name)&&"auto"!==r)){var o=e.stateNode;o.paired=null,null===mc&&(mc=new Map),mc.set(r,o)}bu(e,t,n);break;default:bu(e,t,n)}}function wu(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function ku(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Ic=r,Cu(r,e)}wu(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Su(e),e=e.sibling}function Su(e){switch(e.tag){case 0:case 11:case 15:ku(e),2048&e.flags&&Js(9,e,e.return);break;case 3:case 12:default:ku(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,ju(e)):ku(e)}}function ju(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Ic=r,Cu(r,e)}wu(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:Js(8,t,t.return),ju(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,ju(t));break;default:ju(t)}e=e.sibling}}function Cu(e,t){for(;null!==Ic;){var n=Ic;switch(n.tag){case 0:case 11:case 15:Js(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:ha(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,Ic=r;else e:for(n=e;null!==Ic;){var o=(r=Ic).sibling,a=r.return;if(Yc(r),r===n){Ic=null;break e}if(null!==o){o.return=a,Ic=o;break e}Ic=a}}}var Eu={getCacheForType:function(e){var t=ia(pa),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ia(pa).controller.signal}},Tu="function"===typeof WeakMap?WeakMap:Map,Pu=0,Nu=null,Lu=null,zu=0,Ou=0,Ru=null,_u=!1,Du=!1,Au=!1,Mu=0,Iu=0,$u=0,Fu=0,Uu=0,Hu=0,Bu=0,Wu=null,Vu=null,qu=!1,Gu=0,Yu=0,Ku=1/0,Qu=null,Ju=null,Xu=0,Zu=null,ed=null,td=0,nd=0,rd=null,od=null,ad=null,id=null,ld=null,sd=0,cd=null;function ud(){return 0!==(2&Pu)&&0!==zu?zu&-zu:null!==J.T?cp():nt()}function dd(){if(0===Hu)if(0===(536870912&zu)||$o){var e=Ue;0===(3932160&(Ue<<=1))&&(Ue=262144),Hu=e}else Hu=536870912;return null!==(e=si.current)&&(e.flags|=32),Hu}function pd(e,t){if(null!=t){var n=e.stateNode,r=n.ref;null===r&&(r=n.ref=af(Qr(e.memoizedProps,n))),null===id&&(id=[]),id.push(t.bind(null,r))}}function fd(e,t,n){(e!==Nu||2!==Ou&&9!==Ou)&&null===e.cancelPendingCommit||(xd(e,0),vd(e,zu,Hu,!1)),Qe(e,n),0!==(2&Pu)&&e===Nu||(e===Nu&&(0===(2&Pu)&&(Fu|=n),4===Iu&&vd(e,zu,Hu,!1)),np(e))}function hd(e,t,n){if(0!==(6&Pu))throw Error(a(327));for(var r=!n&&0===(127&t)&&0===(t&e.expiredLanes)||Ve(e,t),o=r?function(e,t){var n=Pu;Pu|=2;var r=Sd(),o=jd();Nu!==e||zu!==t?(Qu=null,Ku=Ce()+500,xd(e,t)):Du=Ve(e,t);e:for(;;)try{if(0!==Ou&&null!==Lu){t=Lu;var i=Ru;t:switch(Ou){case 1:Ou=0,Ru=null,zd(e,t,i,1);break;case 2:case 9:if(za(i)){Ou=0,Ru=null,Ld(t);break}t=function(){2!==Ou&&9!==Ou||Nu!==e||(Ou=7),np(e)},i.then(t,t);break e;case 3:Ou=7;break e;case 4:Ou=5;break e;case 7:za(i)?(Ou=0,Ru=null,Ld(t)):(Ou=0,Ru=null,zd(e,t,i,7));break;case 5:var l=null;switch(Lu.tag){case 26:l=Lu.memoizedState;case 5:case 27:var s=Lu;if(l?oh(l):s.stateNode.complete){Ou=0,Ru=null;var c=s.sibling;if(null!==c)Lu=c;else{var u=s.return;null!==u?(Lu=u,Od(u)):Lu=null}break t}}Ou=0,Ru=null,zd(e,t,i,5);break;case 6:Ou=0,Ru=null,zd(e,t,i,6);break;case 8:bd(),Iu=6;break e;default:throw Error(a(462))}}Pd();break}catch(d){wd(e,d)}return Xo=Jo=null,J.H=r,J.A=o,Pu=n,null!==Lu?0:(Nu=null,zu=0,ro(),Iu)}(e,t):Ed(e,t,!0),i=r;;){if(0===o){Du&&!r&&vd(e,t,0,!1);break}if(n=e.current.alternate,!i||gd(n)){if(2===o){if(i=t,e.errorRecoveryDisabledLanes&i)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;o=Wu;var c=s.current.memoizedState.isDehydrated;if(c&&(xd(s,l).flags|=256),2!==(l=Ed(s,l,!1))&&6!==l){if(Au&&!c){s.errorRecoveryDisabledLanes|=i,Fu|=i,o=4;break e}i=Vu,Vu=o,null!==i&&(null===Vu?Vu=i:Vu.push.apply(Vu,i))}o=l}if(i=!1,2!==o)continue}}if(1===o){xd(e,0),vd(e,t,0,!0);break}e:{switch(r=e,i=o){case 0:case 1:throw Error(a(345));case 4:if((4194048&t)!==t&&(62914560&t)!==t)break;case 6:vd(r,t,Hu,!_u);break e;case 2:Vu=null;break;case 3:case 5:break;default:throw Error(a(329))}if((62914560&t)===t&&10<(o=Gu+300-Ce())){if(vd(r,t,Hu,!_u),0!==We(r,0,!0))break e;td=t,r.timeoutHandle=Bp(md.bind(null,r,n,Vu,Qu,qu,t,Hu,Fu,Bu,_u,i,"Throttled",-0,0),o)}else md(r,n,Vu,Qu,qu,t,Hu,Fu,Bu,_u,i,null,-0,0)}break}o=Ed(e,t,!1),i=!1}np(e)}function md(e,t,n,r,o,a,i,l,s,c,u,d,p,f){e.timeoutHandle=-1;var h,m,g=t.subtreeFlags,v=(335544064&a)===a;if(d=null,(v||8192&g||16785408===(16785408&g))&&(mc=null,xu(t,a,d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt}),v&&(g=d,null!=(v=(9===(v=e.containerInfo).nodeType?v:v.ownerDocument).__reactViewTransition)&&(g.count++,g.waitingForViewTransition=!0,g=ch.bind(g),v.finished.then(g,g))),g=(62914560&a)===a?Gu-Ce():(4194048&a)===a?Yu-Ce():0,m=g,(h=d).stylesheets&&0===h.count&&ph(h,h.stylesheets),null!==(g=0<h.count||0<h.imgCount?function(e){var t=setTimeout(function(){if(h.stylesheets&&ph(h,h.stylesheets),h.unsuspend){var e=h.unsuspend;h.unsuspend=null,e()}},6e4+m);0<h.imgBytes&&0===lh&&(lh=62500*function(){if("function"===typeof performance.getEntriesByType){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var o=n[r],a=o.transferSize,i=o.initiatorType,l=o.duration;if(a&&l&&_p(i)){for(i=0,l=o.responseEnd,r+=1;r<n.length;r++){var s=n[r],c=s.startTime;if(c>l)break;var u=s.transferSize,d=s.initiatorType;u&&_p(d)&&(i+=u*((s=s.responseEnd)<l?1:(l-c)/(s-c)))}if(--r,t+=8*(a+i)/(o.duration/1e3),10<++e)break}}if(0<e)return t/e/1e6}return navigator.connection&&"number"===typeof(e=navigator.connection.downlink)?e:5}());var n=setTimeout(function(){if(h.waitingForImages=!1,0===h.count&&(h.stylesheets&&ph(h,h.stylesheets),h.unsuspend)){var e=h.unsuspend;h.unsuspend=null,e()}},(h.imgBytes>lh?50:800)+m);return h.unsuspend=e,function(){h.unsuspend=null,clearTimeout(t),clearTimeout(n)}}:null)))return td=a,e.cancelPendingCommit=g(_d.bind(null,e,t,a,n,r,o,i,l,s,c,u,d,null,p,f)),void vd(e,a,i,!c);_d(e,t,a,n,r,o,i,l,s,c,u,d)}function gd(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!xr(a(),o))return!1}catch(i){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vd(e,t,n,r){t=qe(e,t),t&=~Uu,t&=~Fu,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var o=t;0<o;){var a=31-Me(o),i=1<<a;r[a]=-1,o&=~i}0!==n&&Je(e,n,t)}function yd(){return 0!==(6&Pu)||(rp(0,!1),!1)}function bd(){if(null!==Lu){if(0===Ou)var e=Lu.return;else Xo=Jo=null,Ii(e=Lu),Ma=null,Ia=0,e=Lu;for(;null!==e;)Ks(e.alternate,e),e=e.return;Lu=null}}function xd(e,t){var n=e.timeoutHandle;return-1!==n&&(e.timeoutHandle=-1,Wp(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),td=0,bd(),Nu=e,Lu=n=ho(e.current,null),zu=t,Ou=0,Ru=null,_u=!1,Du=Ve(e,t),Au=!1,Bu=Hu=Uu=Fu=$u=Iu=0,Vu=Wu=null,qu=!1,Mu=qe(e,t),ro(),n}function wd(e,t){xi=null,J.H=ql,t===Ta||t===Na?(t=Da(),Ou=3):t===Pa?(t=Da(),Ou=4):Ou=t===cs?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,Ru=t,null===Lu&&(Iu=1,os(e,ko(t,e.current)))}function kd(){var e=si.current;return null===e||((4194048&zu)===zu?null===ci:((62914560&zu)===zu||0!==(536870912&zu))&&e===ci)}function Sd(){var e=J.H;return J.H=ql,null===e?ql:e}function jd(){var e=J.A;return J.A=Eu,e}function Cd(){Iu=4,_u||(4194048&zu)!==zu&&null!==si.current||(Du=!0),0===(134217727&$u)&&0===(134217727&Fu)||null===Nu||vd(Nu,zu,Hu,!1)}function Ed(e,t,n){var r=Pu;Pu|=2;var o=Sd(),a=jd();Nu===e&&zu===t||(Qu=null,xd(e,t)),t=!1;var i=Iu;e:for(;;)try{if(0!==Ou&&null!==Lu){var l=Lu,s=Ru;switch(Ou){case 8:bd(),i=6;break e;case 3:case 2:case 9:case 6:null===si.current&&(t=!0);var c=Ou;if(Ou=0,Ru=null,zd(e,l,s,c),n&&Du){i=0;break e}break;default:c=Ou,Ou=0,Ru=null,zd(e,l,s,c)}}Td(),i=Iu;break}catch(u){wd(e,u)}return t&&e.shellSuspendCounter++,Xo=Jo=null,Pu=r,J.H=o,J.A=a,null===Lu&&(Nu=null,zu=0,ro()),i}function Td(){for(;null!==Lu;)Nd(Lu)}function Pd(){for(;null!==Lu&&!Se();)Nd(Lu)}function Nd(e){var t=Fs(e.alternate,e,Mu);e.memoizedProps=e.pendingProps,null===t?Od(e):Lu=t}function Ld(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ks(n,t,t.pendingProps,t.type,void 0,zu);break;case 11:t=ks(n,t,t.pendingProps,t.type.render,t.ref,zu);break;case 5:Ii(t);var r=t;r===Mo&&($o?(Vo(r),5===r.tag&&null!=r.stateNode&&(Io=r.stateNode)):(Vo(r),$o=!0));default:Ks(n,t),t=Fs(n,t=Lu=mo(t,Mu),Mu)}e.memoizedProps=e.pendingProps,null===t?Od(e):Lu=t}function zd(e,t,n,r){Xo=Jo=null,Ii(t),Ma=null,Ia=0;var o=t.return;try{if(function(e,t,n,r,o){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&ra(t,n,o,!0),null!==(n=si.current)){switch(n.tag){case 31:case 13:case 19:return null===ci?Cd():null===n.alternate&&0===Iu&&(Iu=3),n.flags&=-257,n.flags|=65536,n.lanes=o,r===La?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),Vd(e,r,o)),!1;case 22:return n.flags|=65536,r===La?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),Vd(e,r,o)),!1}throw Error(a(435,n.tag))}return Vd(e,r,o),Cd(),!1}if($o)return null!==(t=si.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=o,r!==Ho&&Ko(ko(e=Error(a(422),{cause:r}),n))):(r!==Ho&&Ko(ko(t=Error(a(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,o&=-o,e.lanes|=o,r=ko(r,n),Ja(e,o=is(e.stateNode,r,o)),4!==Iu&&(Iu=2)),!1;var i=Error(a(520),{cause:r});if(i=ko(i,n),null===Wu?Wu=[i]:Wu.push(i),4!==Iu&&(Iu=2),null===t)return!0;r=ko(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,Ja(n,e=is(n.stateNode,r,e)),!1;case 1:if(t=n.type,i=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==i&&"function"===typeof i.componentDidCatch&&(null===Ju||!Ju.has(i))))return n.flags|=65536,o&=-o,n.lanes|=o,ss(o=ls(o),e,n,r),Ja(n,o),!1;break;case 22:if(null!==n.memoizedState)return n.flags|=65536,!1}n=n.return}while(null!==n);return!1}(e,o,t,n,zu))return Iu=1,os(e,ko(n,e.current)),void(Lu=null)}catch(i){if(null!==o)throw Lu=o,i;return Iu=1,os(e,ko(n,e.current)),void(Lu=null)}32768&t.flags?($o||1===r?e=!0:Du||0!==(536870912&zu)?e=!1:(_u=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=si.current)&&13===r.tag&&(r.flags|=16384))),Rd(t,e)):Od(t)}function Od(e){var t=e;do{if(0!==(32768&t.flags))return void Rd(t,_u);e=t.return;var n=Gs(t.alternate,t,Mu);if(null!==n)return void(Lu=n);if(null!==(t=t.sibling))return void(Lu=t);Lu=t=e}while(null!==t);0===Iu&&(Iu=5)}function Rd(e,t){do{var n=Ys(e.alternate,e);if(null!==n)return n.flags&=32767,void(Lu=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(Lu=e);Lu=e=n}while(null!==e);Iu=6,Lu=null}function _d(e,t,n,r,o,i,l,s,c,u,d,p){e.cancelPendingCommit=null;do{Ud()}while(0!==Xu);if(0!==(6&Pu))throw Error(a(327));if(null!==t){if(t===e.current)throw Error(a(177));e===Nu&&(Lu=Nu=null,zu=0),ed=t,Zu=e,td=n,rd=o,od=r,function(e,t,n,r,o,a,i){var l=t.lanes|t.childLanes;if(nd=l,function(e,t,n,r,o,a){var i=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,c=e.hiddenUpdates;for(n=i&~n;0<n;){var u=31-Me(n),d=1<<u;l[u]=0,s[u]=-1;var p=c[u];if(null!==p)for(c[u]=null,u=0;u<p.length;u++){var f=p[u];null!==f&&(f.lane&=-536870913)}n&=~d}0!==r&&Je(e,r,0),0!==a&&0===o&&0!==e.tag&&(e.suspendedLanes|=a&~(i&~t))}(e,n,l|=no,r,o,a),id=null,(335544064&n)===n?(ld=function(e){var t=e.transitionTypes;return e.transitionTypes=null,t}(e),r=10262):(ld=null,r=10256),0!==(t.subtreeFlags&r)||0!==(t.flags&r)?(e.callbackNode=null,e.callbackPriority=0,function(e,t){we(e,t)}(Ne,function(){return Hd(),null})):(e.callbackNode=null,e.callbackPriority=0),hc=!1,r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=J.T,J.T=null,o=X.p,X.p=2,a=Pu,Pu|=4;try{!function(e,t,n){if(e=e.containerInfo,Dp=Sh,Tr(e=Er(e))){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var o=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(o&&0!==o.rangeCount){r=o.anchorNode;var a=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{r.nodeType,i.nodeType}catch(m){r=null;break e}var l=0,s=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==r||0!==a&&3!==p.nodeType||(s=l+a),p!==i||0!==o&&3!==p.nodeType||(c=l+o),3===p.nodeType&&(l+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===r&&++u===a&&(s=l),f===i&&++d===o&&(c=l),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}r=-1===s||-1===c?null:{start:s,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ap={focusedElem:e,selectionRange:r},Sh=!1,Ic=t,t=(n=(335544064&n)===n)?9270:1024;null!==Ic;){if(e=Ic,n&&null!==(r=e.deletions))for(a=0;a<r.length;a++)n&&Ec(r[a]);if(null===e.alternate&&0!==(2&e.flags))n&&gc(e),Bc(n);else{if(22===e.tag){if(r=e.alternate,null!==e.memoizedState){null!==r&&null===r.memoizedState&&n&&Ec(r),Bc(n);continue}if(null!==r&&null!==r.memoizedState){n&&gc(e),Bc(n);continue}}r=e.child,0!==(e.subtreeFlags&t)&&null!==r?(r.return=e,Ic=r):(n&&Tc(e),Bc(n))}}mc=null}(e,t,n)}finally{Pu=a,X.p=o,J.T=r}}Xu=1,hc?ad=function(e,t,n,r,o,a,i,l,s){var c=9===t.nodeType?t:t.ownerDocument;try{var u=c.startViewTransition({update:function(){var t=c.defaultView,n=t.navigation&&t.navigation.transition,i=c.fonts.status;r();var l=[];if("loaded"===i&&(function(e){e.documentElement.clientHeight}(c),"loading"===c.fonts.status&&l.push(c.fonts.ready)),i=l.length,null!==e)for(var s=e.suspenseyImages,u=0,d=0;d<s.length;d++){var p=s[d];if(!p.complete){var f=p.getBoundingClientRect();if(0<f.bottom&&0<f.right&&f.top<t.innerHeight&&f.left<t.innerWidth){if((u+=ah(p))>lh){l.length=i;break}p=new Promise(rf.bind(p)),l.push(p)}}}return 0<l.length?(t=Promise.race([Promise.all(l),new Promise(function(e){return setTimeout(e,500)})]).then(o,o),(n?Promise.allSettled([n.finished,t]):t).then(a,a)):(o(),n?n.finished.then(a,a):void a())},types:n});c.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=c.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,o=r.pseudoElement;if(null!=o&&o.startsWith("::view-transition")){d.push(n),n=r.getKeyframes();for(var a=o=void 0,l=!0,s=0;s<n.length;s++){var u=n[s],p=u.width;if(void 0===o)o=p;else if(o!==p){l=!1;break}if(p=u.height,void 0===a)a=p;else if(a!==p){l=!1;break}delete u.width,delete u.height,"none"===u.transform&&delete u.transform}l&&void 0!==o&&void 0!==a&&(r.setKeyframes(n),(l=getComputedStyle(r.target,r.pseudoElement)).width!==o||l.height!==a)&&((l=n[0]).width=o,l.height=a,(l=n[n.length-1]).width=o,l.height=a,r.setKeyframes(n))}}i()},function(e){c.__reactViewTransition===u&&(c.__reactViewTransition=null);try{if("object"===typeof e&&null!==e&&"InvalidStateError"===e.name)"View transition was skipped because document visibility state is hidden."!==e.message&&"Skipping view transition because document visibility state has become hidden."!==e.message&&"Skipping view transition because viewport size changed."!==e.message&&"Transition was aborted because of invalid state"!==e.message||(e=null);null!==e&&s(e)}finally{r(),o(),i()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();c.__reactViewTransition===u&&(c.__reactViewTransition=null),l()}),u}catch(p){return r(),o(),i(),null}}(i,e.containerInfo,ld,Md,Id,Ad,$d,Hd,Dd):(Md(),Id(),$d())}(e,t,n,l,s,c,p)}}function Dd(e){0!==Xu&&(0,Zu.onRecoverableError)(e,{componentStack:null})}function Ad(){3===Xu&&(Xu=0,su(ed,Zu),Xu=4)}function Md(){if(1===Xu){Xu=0;var e=Zu,t=ed,n=td,r=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||r){r=J.T,J.T=null;var o=X.p;X.p=2;var a=Pu;Pu|=4;try{Fc=Uc=!1,ou(t,e,n),n=Ap;var i=Er(e.containerInfo),l=n.focusedElem,s=n.selectionRange;if(i!==l&&l&&l.ownerDocument&&Cr(l.ownerDocument.documentElement,l)){if(null!==s&&Tr(l)){var c=s.start,u=s.end;if(void 0===u&&(u=c),"selectionStart"in l)l.selectionStart=c,l.selectionEnd=Math.min(u,l.value.length);else{var d=l.ownerDocument||document,p=d&&d.defaultView||window;if(p.getSelection){var f=p.getSelection(),h=l.textContent.length,m=Math.min(s.start,h),g=void 0===s.end?m:Math.min(s.end,h);!f.extend&&m>g&&(i=g,g=m,m=i);var v=jr(l,m),y=jr(l,g);if(v&&y&&(1!==f.rangeCount||f.anchorNode!==v.node||f.anchorOffset!==v.offset||f.focusNode!==y.node||f.focusOffset!==y.offset)){var b=d.createRange();b.setStart(v.node,v.offset),f.removeAllRanges(),m>g?(f.addRange(b),f.extend(y.node,y.offset)):(b.setEnd(y.node,y.offset),f.addRange(b))}}}}for(d=[],f=l;f=f.parentNode;)1===f.nodeType&&d.push({element:f,left:f.scrollLeft,top:f.scrollTop});for("function"===typeof l.focus&&l.focus(),l=0;l<d.length;l++){var x=d[l];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Sh=!!Dp,Ap=Dp=null}finally{Pu=a,X.p=o,J.T=r}}e.current=t,Xu=2}}function Id(){if(2===Xu){Xu=0;var e=Zu,t=ed,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=J.T,J.T=null;var r=X.p;X.p=2;var o=Pu;Pu|=4;try{Wc(e,t.alternate,t)}finally{Pu=o,X.p=r,J.T=n}}Xu=3}}function $d(){if(4===Xu||3===Xu){Xu=0;var e=ad;ad=null,je();var t=Zu,n=ed,r=td,o=od,a=(335544064&r)===r?10262:10256;if(0!==(n.subtreeFlags&a)||0!==(n.flags&a)?Xu=5:(Xu=0,ed=Zu=null,Fd(t,t.pendingLanes)),0===(a=t.pendingLanes)&&(Ju=null),tt(r),n=n.stateNode,De&&"function"===typeof De.onCommitFiberRoot)try{De.onCommitFiberRoot(_e,n,void 0,128===(128&n.current.flags))}catch(c){}if(null!==o){n=J.T,a=X.p,X.p=2,J.T=null;try{for(var i=t.onRecoverableError,l=0;l<o.length;l++){var s=o[l];i(s.value,{componentStack:s.stack})}}finally{J.T=n,X.p=a}}if(i=ld,ld=null,null!==(o=id)&&(id=null,null===i&&(i=[]),null!==e))for(s=0;s<o.length;s++)void 0!==(n=(0,o[s])(i))&&e.finished.finally(n);0!==(3&td)&&Ud(),np(t),a=t.pendingLanes,0!==(261930&r)&&0!==(42&a)?t===cd?sd++:(sd=0,cd=t):(sd=0,cd=null),rp(0,!1)}}function Fd(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,ha(t)))}function Ud(){return null!==ad&&(ad.skipTransition(),ad=null),Md(),Id(),$d(),Hd()}function Hd(){if(5!==Xu)return!1;var e=Zu,t=nd;nd=0;var n=tt(td),r=J.T,o=X.p;try{X.p=32>n?32:n,J.T=null,n=rd,rd=null;var i=Zu,l=td;if(Xu=0,ed=Zu=null,td=0,0!==(6&Pu))throw Error(a(331));var s=Pu;if(Pu|=4,Su(i.current),mu(i,i.current,l,n),Pu=s,rp(0,!1),De&&"function"===typeof De.onPostCommitFiberRoot)try{De.onPostCommitFiberRoot(_e,i)}catch(c){}return!0}finally{X.p=o,J.T=r,Fd(e,t)}}function Bd(e,t,n){t=ko(n,t),null!==(e=Ka(e,t=is(e.stateNode,t,2),2))&&(Qe(e,2),np(e))}function Wd(e,t,n){if(3===e.tag)Bd(e,e,n);else for(;null!==t;){if(3===t.tag){Bd(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ju||!Ju.has(r))){e=ko(n,e),null!==(r=Ka(t,n=ls(2),2))&&(ss(n,r,t,e),Qe(r,2),np(r));break}}t=t.return}}function Vd(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new Tu;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(Au=!0,o.add(n),e=qd.bind(null,e,t,n),t.then(e,e))}function qd(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Nu===e&&(zu&n)===n&&((4===Iu||3===Iu&&(62914560&zu)===zu&&300>Ce()-Gu)&&0===(2&Pu)?xd(e,0):Uu|=n,Bu===zu&&(Bu=0)),np(e)}function Gd(e,t){0===t&&(t=Ye()),null!==(e=io(e,t))&&(Qe(e,t),np(e))}function Yd(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Gd(e,n)}function Kd(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}null!==r&&r.delete(t),Gd(e,n)}var Qd=null,Jd=null,Xd=!1,Zd=!1,ep=!1,tp=0;function np(e){e!==Jd&&null===e.next&&(null===Jd?Qd=Jd=e:Jd=Jd.next=e),Zd=!0,Xd||(Xd=!0,Gp(function(){0!==(6&Pu)?we(Te,op):ap()}))}function rp(e,t){if(!ep&&Zd){ep=!0;do{for(var n=!1,r=Qd;null!==r;){if(!t)if(0!==e){var o=r.pendingLanes;if(0===o)var a=0;else{var i=r.suspendedLanes,l=r.pingedLanes;a=(1<<31-Me(42|e)+1)-1,a=201326741&(a&=o&~(i&~l))?201326741&a|1:a?2|a:0}0!==a&&(n=!0,sp(r,a))}else a=zu,0===(3&(a=We(r,r===Nu?a:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||Ve(r,a)||(n=!0,sp(r,a));r=r.next}}while(n);ep=!1}}function op(){ap()}function ap(){Zd=Xd=!1;var e=0;0!==tp&&function(){var e=window.event;if(e&&"popstate"===e.type)return e!==Hp&&(Hp=e,!0);return Hp=null,!1}()&&(e=tp);for(var t=Ce(),n=null,r=Qd;null!==r;){var o=r.next,a=ip(r,t);0===a?(r.next=null,null===n?Qd=o:n.next=o,null===o&&(Jd=n)):(n=r,(0!==e||0!==(3&a))&&(Zd=!0)),r=o}0!==Xu&&5!==Xu||rp(e,!1),0!==tp&&(tp=0)}function ip(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=-62914561&e.pendingLanes;0<a;){var i=31-Me(a),l=1<<i,s=o[i];-1===s?0!==(l&n)&&0===(l&r)||(o[i]=Ge(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}if(n=zu,n=We(e,e===(t=Nu)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===Ou||9===Ou)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&ke(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||Ve(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&ke(r),tt(n)){case 2:case 8:n=Pe;break;case 32:default:n=Ne;break;case 268435456:n=ze}return r=lp.bind(null,e),n=we(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&ke(r),e.callbackPriority=2,e.callbackNode=null,2}function lp(e,t){if(0!==Xu&&5!==Xu)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ud()&&e.callbackNode!==n)return null;var r=zu;return 0===(r=We(e,e===Nu?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(hd(e,r,t),ip(e,Ce()),null!=e.callbackNode&&e.callbackNode===n?lp.bind(null,e):null)}function sp(e,t){if(Ud())return null;hd(e,t,!0)}function cp(){if(0===tp){var e=ba;0===e&&(e=Fe,0===(261888&(Fe<<=1))&&(Fe=256)),tp=e}return tp}function up(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:Xt(e)}for(var dp=0;dp<Gr.length;dp++){var pp=Gr[dp];Yr(pp.toLowerCase(),"on"+(pp[0].toUpperCase()+pp.slice(1)))}Yr($r,"onAnimationEnd"),Yr(Fr,"onAnimationIteration"),Yr(Ur,"onAnimationStart"),Yr("dblclick","onDoubleClick"),Yr("focusin","onFocus"),Yr("focusout","onBlur"),Yr(Hr,"onTransitionRun"),Yr(Br,"onTransitionStart"),Yr(Wr,"onTransitionCancel"),Yr(Vr,"onTransitionEnd"),jt("onMouseEnter",["mouseout","mouseover"]),jt("onMouseLeave",["mouseout","mouseover"]),jt("onPointerEnter",["pointerout","pointerover"]),jt("onPointerLeave",["pointerout","pointerover"]),St("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),St("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),St("onBeforeInput",["compositionend","keypress","textInput","paste"]),St("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),St("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),St("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fp="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fp));function mp(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;a=l,o.currentTarget=c;try{a(o)}catch(u){Zr(u)}o.currentTarget=null,a=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,c=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;a=l,o.currentTarget=c;try{a(o)}catch(u){Zr(u)}o.currentTarget=null,a=s}}}}function gp(e,t){var n=t[st];void 0===n&&(n=t[st]=new Set);var r=e+"__bubble";n.has(r)||(xp(t,e,2,!1),n.add(r))}function vp(e,t,n){var r=0;t&&(r|=4),xp(n,e,r,t)}var yp="_reactListening"+Math.random().toString(36).slice(2);function bp(e){if(!e[yp]){e[yp]=!0,wt.forEach(function(t){"selectionchange"!==t&&(hp.has(t)||vp(t,!1,e),vp(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[yp]||(t[yp]=!0,vp("selectionchange",!1,t))}}function xp(e,t,n,r){switch(Lh(t)){case 2:var o=jh;break;case 8:o=Ch;break;default:o=Eh}n=o.bind(null,t,n,e),o=void 0,!un||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function wp(e,t,n,r,o){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===o)break;if(4===i)for(i=r.return;null!==i;){var c=i.tag;if((3===c||4===c)&&i.stateNode.containerInfo===o)return;i=i.return}for(;null!==l;){if(null===(i=mt(l)))return;if(5===(c=i.tag)||6===c||26===c||27===c){r=a=i;continue e}l=l.parentNode}}r=r.return}ln(function(){var r=a,o=tn(n),i=[];e:{var l=qr.get(e);if(void 0!==l){var c=jn,u=e;switch(e){case"keypress":if(0===gn(n))break e;case"keydown":case"keyup":c=$n;break;case"focusin":u="focus",c=Ln;break;case"focusout":u="blur",c=Ln;break;case"beforeblur":case"afterblur":c=Ln;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=Pn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=Nn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=Hn;break;case $r:case Fr:case Ur:c=zn;break;case Vr:c=Bn;break;case"scroll":case"scrollend":c=En;break;case"wheel":c=Wn;break;case"copy":case"cut":case"paste":c=On;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=Fn;break;case"submit":c=Un;break;case"toggle":case"beforetoggle":c=Vn}var d=0!==(4&t),p=!d&&("scroll"===e||"scrollend"===e),f=d?null!==l?l+"Capture":null:l;d=[];for(var h,m=r;null!==m;){var g=m;if(h=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===h||null===f||null!=(g=sn(m,f))&&d.push(kp(m,g,h)),p)break;m=m.return}0<d.length&&(l=new c(l,u,null,n,o),i.push({event:l,listeners:d}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(c="mouseover"===e||"pointerover"===e)&&n!==en&&(u=n.relatedTarget||n.fromElement)&&(mt(u)||u[lt])||(l||c)&&(u=o.window===o?o:(c=o.ownerDocument)?c.defaultView||c.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?mt(c):null)&&(p=s(c),d=c.tag,c!==p||5!==d&&27!==d&&6!==d)&&(c=null)):(l=null,c=r),l!==c&&(d=Pn,g="onMouseLeave",f="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=Fn,g="onPointerLeave",f="onPointerEnter",m="pointer"),p=null==l?u:vt(l),h=null==c?u:vt(c),(u=new d(g,m+"leave",l,n,o)).target=p,u.relatedTarget=h,g=null,mt(o)===r&&((d=new d(f,m+"enter",c,n,o)).target=h,d.relatedTarget=p,g=d),p=g,d=l&&c?E(l,c,jp):null,null!==l&&Cp(i,u,l,d,!1),null!==c&&null!==p&&Cp(i,p,c,d,!0))),"select"===(c=(l=r?vt(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===c&&"file"===l.type)var v=cr;else if(rr(l))if(ur)v=br;else{v=vr;var y=gr}else!(c=l.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?r&&Kt(r.elementType)&&(v=cr):v=yr;switch(v&&(v=v(e,r))?or(i,v,n,o):y&&y(e,l,r),y=r?vt(r):window,e){case"focusin":(rr(y)||"true"===y.contentEditable)&&(Nr=y,Lr=r,zr=null);break;case"focusout":zr=Lr=Nr=null;break;case"mousedown":Or=!0;break;case"contextmenu":case"mouseup":case"dragend":Or=!1,Rr(i,n,o);break;case"selectionchange":if(Pr)break;case"keydown":case"keyup":Rr(i,n,o)}var b;if(Gn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else tr?Zn(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(Qn&&"ko"!==n.locale&&(tr||"onCompositionStart"!==x?"onCompositionEnd"===x&&tr&&(b=mn()):(fn="value"in(pn=o)?pn.value:pn.textContent,tr=!0)),0<(y=Sp(r,x)).length&&(x=new Rn(x,e,null,n,o),i.push({event:x,listeners:y}),b?x.data=b:null!==(b=er(n))&&(x.data=b))),(b=Kn?function(e,t){switch(e){case"compositionend":return er(t);case"keypress":return 32!==t.which?null:(Xn=!0,Jn);case"textInput":return(e=t.data)===Jn&&Xn?null:e;default:return null}}(e,n):function(e,t){if(tr)return"compositionend"===e||!Gn&&Zn(e,t)?(e=mn(),hn=fn=pn=null,tr=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(x=Sp(r,"onBeforeInput")).length&&(y=new Rn("onBeforeInput","beforeinput",null,n,o),i.push({event:y,listeners:x}),y.data=b)),function(e,t,n,r,o){if("submit"===t&&n&&n.stateNode===o){var a=up((o[it]||null).action),i=r.submitter;i&&null!==(t=(t=i[it]||null)?up(t.formAction):i.getAttribute("formAction"))&&(a=t,i=null);var l=new jn("action","action",null,r,o);e.push({event:l,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==tp){var e=new FormData(o,i);Ol(n,{pending:!0,data:e,method:o.method,action:a},null,e)}}else"function"===typeof a&&(l.preventDefault(),e=new FormData(o,i),Ol(n,{pending:!0,data:e,method:o.method,action:a},a,e))},currentTarget:o}]})}}(i,e,r,n,o)}mp(i,t)})}function kp(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Sp(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,a=o.stateNode;if(5!==(o=o.tag)&&26!==o&&27!==o||null===a||(null!=(o=sn(e,n))&&r.unshift(kp(e,o,a)),null!=(o=sn(e,t))&&r.push(kp(e,o,a))),3===e.tag)return r;e=e.return}return[]}function jp(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Cp(e,t,n,r,o){for(var a=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(l=l.tag,null!==s&&s===r)break;5!==l&&26!==l&&27!==l||null===c||(s=c,o?null!=(c=sn(n,a))&&i.unshift(kp(n,c,s)):o||null!=(c=sn(n,a))&&i.push(kp(n,c,s))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var Ep=/\r\n?/g,Tp=/\u0000|\uFFFD/g;function Pp(e){return("string"===typeof e?e:""+e).replace(Ep,"\n").replace(Tp,"")}function Np(e,t){return t=Pp(t),Pp(e)===t}function Lp(e,t,n,r,o,i){switch(n){case"children":if("string"===typeof r)"body"===t||"textarea"===t&&""===r||Vt(e,r);else{if("number"!==typeof r&&"bigint"!==typeof r)return;"body"!==t&&Vt(e,""+r)}break;case"className":zt(e,"class",r);break;case"tabIndex":zt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":zt(e,n,r);break;case"style":return void Yt(e,r,i);case"data":if("object"!==t){zt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Xt(r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof i&&("formAction"===n?("input"!==t&&Lp(e,t,"name",o.name,o,null),Lp(e,t,"formEncType",o.formEncType,o,null),Lp(e,t,"formMethod",o.formMethod,o,null),Lp(e,t,"formTarget",o.formTarget,o,null)):(Lp(e,t,"encType",o.encType,o,null),Lp(e,t,"method",o.method,o,null),Lp(e,t,"target",o.target,o,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Xt(r),e.setAttribute(n,r);break;case"onClick":return void(null!=r&&(e.onclick=Zt));case"onScroll":return void(null!=r&&gp("scroll",e));case"onScrollEnd":return void(null!=r&&gp("scrollend",e));case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=o.children)throw Error(a(60));(null!=i?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=Xt(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":gp("beforetoggle",e),gp("toggle",e),Lt(e,"popover",r);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Lt(e,"is",r);break;case"innerText":case"textContent":return;default:if(2<n.length&&("o"===n[0]||"O"===n[0])&&("n"===n[1]||"N"===n[1]))return;Lt(e,n=Qt.get(n)||n,r)}Pt=!0}function zp(e,t,n,r,o,i){switch(n){case"style":return void Yt(e,r,i);case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=o.children)throw Error(a(60));(null!=i?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"children":if("string"===typeof r)Vt(e,r);else{if("number"!==typeof r&&"bigint"!==typeof r)return;Vt(e,""+r)}break;case"onScroll":return void(null!=r&&gp("scroll",e));case"onScrollEnd":return void(null!=r&&gp("scrollend",e));case"onClick":return void(null!=r&&(e.onclick=Zt));case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":return;default:return void(kt.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(o=n.endsWith("Capture"),i=n.slice(2,o?n.length-7:void 0),"function"===typeof(t=null!=(t=e[it]||null)?t[n]:null)&&e.removeEventListener(i,t,o),"function"!==typeof r)?(Pt=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,""):Lt(e,n,r)):("function"!==typeof t&&null!==t&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(i,r,o))))}Pt=!0}function Op(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gp("error",e),gp("load",e);var r,o=!1,i=!1;for(r in n)if(n.hasOwnProperty(r)){var l=n[r];if(null!=l)switch(r){case"src":o=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:Lp(e,t,r,l,n,null)}}return i&&Lp(e,t,"srcSet",n.srcSet,n,null),void(o&&Lp(e,t,"src",n.src,n,null));case"input":gp("invalid",e);var s=r=l=i=null,c=null,u=null;for(o in n)if(n.hasOwnProperty(o)){var d=n[o];if(null!=d)switch(o){case"name":i=d;break;case"type":l=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(a(137,t));break;default:Lp(e,t,o,d,n,null)}}return void Ft(e,r,s,c,u,l,i,!1);case"select":for(i in gp("invalid",e),o=l=r=null,n)if(n.hasOwnProperty(i)&&null!=(s=n[i]))switch(i){case"value":r=s;break;case"defaultValue":l=s;break;case"multiple":o=s;default:Lp(e,t,i,s,n,null)}return t=r,n=l,e.multiple=!!o,void(null!=t?Ht(e,!!o,t,!1):null!=n&&Ht(e,!!o,n,!0));case"textarea":for(l in gp("invalid",e),r=i=o=null,n)if(n.hasOwnProperty(l)&&null!=(s=n[l]))switch(l){case"value":o=s;break;case"defaultValue":i=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(a(91));break;default:Lp(e,t,l,s,n,null)}return void Wt(e,o,i,r);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(o=n[c]))if("selected"===c)e.selected=o&&"function"!==typeof o&&"symbol"!==typeof o;else Lp(e,t,c,o,n,null);return;case"dialog":gp("beforetoggle",e),gp("toggle",e),gp("cancel",e),gp("close",e);break;case"iframe":case"object":gp("load",e);break;case"video":case"audio":for(o=0;o<fp.length;o++)gp(fp[o],e);break;case"image":gp("error",e),gp("load",e);break;case"details":gp("toggle",e);break;case"embed":case"source":case"link":gp("error",e),gp("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(o=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:Lp(e,t,u,o,n,null)}return;default:if(Kt(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(o=n[d])&&zp(e,t,d,o,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(o=n[s])&&Lp(e,t,s,o,n,null))}var Rp={};function _p(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}var Dp=null,Ap=null;function Mp(e){return 9===e.nodeType?e:e.ownerDocument}function Ip(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $p(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function Fp(e,t,n,r){return(n=Mp(n).createElement(e))[at]=r,n[it]=t,Op(n,e,t),bt(n),n}function Up(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Hp=null;var Bp="function"===typeof setTimeout?setTimeout:void 0,Wp="function"===typeof clearTimeout?clearTimeout:void 0,Vp="function"===typeof Promise?Promise:void 0,qp="function"===typeof requestAnimationFrame?requestAnimationFrame:Bp,Gp="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Vp?function(e){return Vp.resolve(null).then(e).catch(Yp)}:Bp;function Yp(e){setTimeout(function(){throw e})}function Kp(e){return"head"===e}function Qp(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)||"/&"===n){if(0===r)return e.removeChild(o),void Yh(t);r--}else if("$"===n||"$?"===n||"$~"===n||"$!"===n||"&"===n)r++;else if("html"===n)Mf(e.ownerDocument.documentElement);else if("head"===n){Mf(n=e.ownerDocument.head);for(var a=n.firstChild;a;){var i=a.nextSibling,l=a.nodeName;a[pt]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===a.rel.toLowerCase()||n.removeChild(a),a=i}}else"body"===n&&Mf(e.ownerDocument.body);n=o}while(n);Yh(t)}function Jp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(1===n.nodeType?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",""===n.getAttribute("style")&&n.removeAttribute("style")):3===n.nodeType&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&8===r.nodeType)if("/$"===(n=r.data)){if(0===e)break;e--}else"$"!==n&&"$?"!==n&&"$~"!==n&&"$!"!==n||e++;n=r}while(n)}function Xp(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,null!=n&&(e.style.viewTransitionClass=n),"inline"===(n=getComputedStyle(e)).display){if(1===(t=e.getClientRects()).length)var r=1;else for(var o=r=0;o<t.length;o++){var a=t[o];0<a.width&&0<a.height&&r++}1===r&&((e=e.style).display=1===t.length?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function Zp(e,t){e=e.style;var n=null!=(t=t.style)?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=null==n||"boolean"===typeof n?"":(""+n).trim(),n=null!=t?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=null==n||"boolean"===typeof n?"":(""+n).trim(),"inline-block"===e.display&&(null==t?e.display=e.margin="":(n=t.display,e.display=null==n||"boolean"===typeof n?"":n,null!=(n=t.margin)?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=null==n||"boolean"===typeof n?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=null==t||"boolean"===typeof t?"":t)))}function ef(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:"absolute"===t.position||"fixed"===t.position,clip:"none"!==t.clipPath||"visible"!==t.overflow||"none"!==t.filter||"none"!==t.mask||"none"!==t.mask||"0px"!==t.borderRadius,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function tf(e){return ef(e.getBoundingClientRect(),getComputedStyle(e),e)}function nf(e){var t=e.getBoundingClientRect();return ef(t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height),getComputedStyle(e),e)}function rf(e){this.addEventListener("load",e),this.addEventListener("error",e)}function of(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}function af(e){return{name:e,group:new of("group",e),imagePair:new of("image-pair",e),old:new of("old",e),new:new of("new",e)}}function lf(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}function sf(e,t,n,r){return x(e).addEventListener(t,n,r),!1}function cf(e,t,n,r){return x(e).removeEventListener(t,n,r),!1}function uf(e){return null!=e&&"boolean"!==typeof e&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function df(e){return null==e?"c=0":"boolean"===typeof e?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function pf(e,t,n,r){if(0===e.length)return-1;r=df(r);for(var o=0;o<e.length;o++){var a=e[o];if(a.type===t&&a.listener===n&&df(a.optionsOrUseCapture)===r)return o}return-1}function ff(e,t){return 6!==e.tag&&function(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return r}(e=x(e),t)}function hf(e,t){return t.push(e),!1}function mf(e,t){return 6!==e.tag&&(!((e=x(e))!==t&&!e.contains(t))&&(t.blur(),!0))}function gf(e,t){return 6===e.tag||(e=x(e),t.observe(e)),!1}function vf(e,t){return 6===e.tag||(e=x(e),t.unobserve(e)),!1}of.prototype.animate=function(e,t){return(t="number"===typeof t?{duration:t}:T({},t)).pseudoElement=this._selector,this._scope.animate(e,t)},of.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],o=0;o<n.length;o++){var a=n[o].effect;null!==a&&a.target===e&&a.pseudoElement===t&&r.push(n[o])}return r},of.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)},lf.prototype.addEventListener=function(e,t,n){var r=null,o=null;if(null==n||"boolean"===typeof n||(null===(r=n.signal||null)||!r.aborted)){null===this._eventListeners&&(this._eventListeners=[]);var a=this._eventListeners;if(-1===pf(a,e,t,n)){var i=this,l=t;null!=n&&"boolean"!==typeof n&&!0===n.once&&(l=function(r){i.removeEventListener(e,t,n),"function"===typeof t?t.call(this,r):t.handleEvent(r)}),null!==r&&(o=i.removeEventListener.bind(i,e,t,n),r.addEventListener("abort",o,{once:!0}),o=r.removeEventListener.bind(r,"abort",o)),r=uf(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:l,cleanup:o}),m(this._fragmentFiber.child,!1,sf,e,l,r)}this._eventListeners=a}},lf.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(null!==r&&-1!==(t=pf(r,e,t,n))){var o=r[t];n=o.attachedListener;var a=o.cleanup;o=uf(o.optionsOrUseCapture),m(this._fragmentFiber.child,!1,cf,e,n,o),r.splice(t,1),null!==a&&a()}},lf.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(null===t)return!0;t=x(t);var n=this._eventListeners;if(null!==n&&0<n.length||!e.bubbles){var r=9===t.nodeType?t.createComment(""):document.createTextNode("");if(n)for(var o=0;o<n.length;o++){var a=n[o];r.addEventListener(a.type,a.attachedListener,uf(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(o=0;o<n.length;o++)a=n[o],r.removeEventListener(a.type,a.attachedListener,uf(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},lf.prototype.focus=function(e){m(this._fragmentFiber.child,!0,ff,e,void 0,void 0)},lf.prototype.focusLast=function(e){var t=[];m(this._fragmentFiber.child,!0,hf,t,void 0,void 0);for(var n=t.length-1;0<=n&&!ff(t[n],e);n--);},lf.prototype.blur=function(){var e=g(this._fragmentFiber);null!==e&&(null!==(e=Mp(e=x(e)).activeElement)&&m(this._fragmentFiber.child,!1,mf,e,void 0,void 0))},lf.prototype.observeUsing=function(e){null===this._observers&&(this._observers=new Set),this._observers.add(e),m(this._fragmentFiber.child,!1,gf,e,void 0,void 0)},lf.prototype.unobserveUsing=function(e){var t=this._observers;if(null!==t&&t.has(e)){t.delete(e),m(this._fragmentFiber.child,!1,vf,e,void 0,void 0);for(var n=t=0;n<yf.length;n++){var r=yf[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):yf[t++]=r}yf.length=t}};var yf=[],bf=!1;function xf(e,t,n){var r;yf.push({fragmentInstance:e,observer:t,instance:n}),bf||(bf=!0,r=function(){bf=!1;var e=yf;yf=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}},qp(function(){qp(function(e){return r(e)})}))}function wf(e,t){if(6===e.tag){var n=(e=e.stateNode).ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=x(e),t.push.apply(t,e.getClientRects());return!1}function kf(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}function Sf(e,t){return jf(e=x(e),t),!1}function jf(e,t){null==e.reactFragments&&(e.reactFragments=new Set),e.reactFragments.add(t)}function Cf(e,t){var n=t._eventListeners;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];e.addEventListener(o.type,o.attachedListener,uf(o.optionsOrUseCapture))}3!==e.nodeType&&(null!==(n=t._observers)&&n.forEach(function(n){for(var r=0,o=0;o<yf.length;o++){var a=yf[o];a.fragmentInstance===t&&a.observer===n&&a.instance===e||(yf[r++]=a)}yf.length=r,n.observe(e)}),jf(e,t))}function Ef(e,t){var n=t._eventListeners;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];e.removeEventListener(o.type,o.attachedListener,uf(o.optionsOrUseCapture))}3!==e.nodeType&&(null!==(n=t._observers)&&n.forEach(function(n){"string"===typeof n.rootMargin?xf(t,n,e):n.unobserve(e)}),null!=e.reactFragments&&e.reactFragments.delete(t))}function Tf(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Tf(n),ht(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function Pf(e,t){for(;8!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!t)return null;if(null===(e=zf(e.nextSibling)))return null}return e}function Nf(e){return"$?"===e.data||"$~"===e.data}function Lf(e){return"$!"===e.data||"$?"===e.data&&"loading"!==e.ownerDocument.readyState}function zf(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"$~"===t||"&"===t||"F!"===t||"F"===t)break;if("/$"===t||"/&"===t)return null}}return e}lf.prototype.getClientRects=function(){var e=[];return m(this._fragmentFiber.child,!1,wf,e,void 0,void 0),e},lf.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return null===t?this:x(t).getRootNode(e)},lf.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(null===t)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];m(this._fragmentFiber.child,!1,hf,n,void 0,void 0);var r=x(t);if(0===n.length){if(n=r,v(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;null!==t;){if(4===t.tag){t=t.stateNode.containerInfo;break e}if(3===t.tag||5===t.tag||27===t.tag)break;t=t.return}t=null}null!=t&&(n=t)}t=this._fragmentFiber;var o=r=n.compareDocumentPosition(e);return n===e?o=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(null===(n=y(t)[1])?o=Node.DOCUMENT_POSITION_PRECEDING:o=0===(e=x(n).compareDocumentPosition(e))||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING),o|Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=x(n[0]),o=x(n[n.length-1]);var a=v(this._fragmentFiber)?t.parentElement:r;if(null==a)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(o)&Node.DOCUMENT_POSITION_CONTAINED_BY;var i=t.compareDocumentPosition(e),l=o.compareDocumentPosition(e),s=i&Node.DOCUMENT_POSITION_CONTAINED_BY||l&Node.DOCUMENT_POSITION_CONTAINED_BY;return l=r&&a&&i&Node.DOCUMENT_POSITION_FOLLOWING&&l&Node.DOCUMENT_POSITION_PRECEDING,(t=r&&t===e||a&&o===e||s||l?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&o===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:i)&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||function(e,t,n,r,o){var a=mt(o);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)e:{for(;null!==a;){if(7===a.tag&&(a===t||a.alternate===t)){n=!0;break e}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(null===a)return o===(a=o.ownerDocument)||o===a.documentElement||o===a.body;e:{for(a=t,t=g(t);null!==a;){if(!(5!==a.tag&&3!==a.tag&&27!==a.tag||a!==t&&a.alternate!==t)){a=!0;break e}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(null===(t=E(n,a,C))?t=!1:(m(t,!0,S,a,n),a=w,w=null,t=null!==a)),t):!!(e&Node.DOCUMENT_POSITION_FOLLOWING)&&((t=!!a)&&!(t=a===r)&&(null===(t=E(r,a,C))?t=!1:(m(t,!0,j,a,r),a=w,k=w=null,t=null!==a)),t)}(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC},lf.prototype.scrollIntoView=function(e){if("object"===typeof e)throw Error(a(566));var t=[];m(this._fragmentFiber.child,!1,hf,t,void 0,void 0);var n=!1!==e;if(0===t.length){var r=y(this._fragmentFiber);if(null===(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1]))return;if(6===r.tag)return void kf(e=x(r),n);if(9!==(r=x(r)).nodeType){if(11===r.nodeType)return void(null!==(n="host"in r?r.host:null)&&n.scrollIntoView(e));r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var o=t[r];6===o.tag?kf(o=x(o),n):x(o).scrollIntoView(e),r+=n?-1:1}};var Of=null;function Rf(e){e=e.nextSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n||"/&"===n){if(0===t)return zf(e.nextSibling);t--}else"$"!==n&&"$!"!==n&&"$?"!==n&&"$~"!==n&&"&"!==n||t++}e=e.nextSibling}return null}function _f(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n||"$~"===n||"&"===n){if(0===t)return e;t--}else"/$"!==n&&"/&"!==n||t++}e=e.previousSibling}return null}function Df(e,t,n){switch(t=Mp(n),e){case"html":if(!(e=t.documentElement))throw Error(a(452));return e;case"head":if(!(e=t.head))throw Error(a(453));return e;case"body":if(!(e=t.body))throw Error(a(454));return e;default:throw Error(a(451))}}function Af(e,t,n){for(var r in n){var o=n[r];n.hasOwnProperty(r)&&null!=o&&Lp(e,t,r,null,Rp,o)}null!=n.dangerouslySetInnerHTML&&(e.textContent=""),e.onclick===Zt&&(e.onclick=null),ht(e)}function Mf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ht(e)}var If=new Map,$f=new Set;function Ff(e){if("function"===typeof e.getRootNode){var t=e.getRootNode();if(9===t.nodeType||11===t.nodeType)return t}return 9===e.nodeType?e:e.ownerDocument}var Uf=X.d;X.d={f:function(){var e=Uf.f(),t=yd();return e||t},r:function(e){var t=gt(e);null!==t&&5===t.tag&&"form"===t.type?_l(t):Uf.r(e)},D:function(e){Uf.D(e),Bf("dns-prefetch",e,null)},C:function(e,t){Uf.C(e,t),Bf("preconnect",e,t)},L:function(e,t,n){Uf.L(e,t,n);var r=Hf;if(r&&e&&t){var o='link[rel="preload"][as="'+It(t)+'"]';"image"===t&&n&&n.imageSrcSet?(o+='[imagesrcset="'+It(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(o+='[imagesizes="'+It(n.imageSizes)+'"]')):o+='[href="'+It(e)+'"]';var a=o;switch(t){case"style":a=Vf(e);break;case"script":a=Yf(e)}if(!(If.has(a)||(e=T({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),If.set(a,e),null!==r.querySelector(o)||"style"===t&&r.querySelector(qf(a))||"script"===t&&r.querySelector(Kf(a))))){var i=r.createElement("link");Op(i,"link",e),"style"===t&&(i[ft]=!0,i.onload=i.onerror=function(){xt(i)}),bt(i),r.head.appendChild(i)}}},m:function(e,t){Uf.m(e,t);var n=Hf;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",o='link[rel="modulepreload"][as="'+It(r)+'"][href="'+It(e)+'"]',a=o;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Yf(e)}if(!If.has(a)&&(e=T({rel:"modulepreload",href:e},t),If.set(a,e),null===n.querySelector(o))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Kf(a)))return}Op(r=n.createElement("link"),"link",e),bt(r),n.head.appendChild(r)}}},X:function(e,t){Uf.X(e,t);var n=Hf;if(n&&e){var r=yt(n).hoistableScripts,o=Yf(e),a=r.get(o);a||((a=n.querySelector(Kf(o)))||(e=T({src:e,async:!0},t),(t=If.get(o))&&Zf(e,t),bt(a=n.createElement("script")),Op(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(o,a))}},S:function(e,t,n){Uf.S(e,t,n);var r=Hf;if(r&&e){var o=yt(r).hoistableStyles,a=Vf(e);t=t||"default";var i=o.get(a);if(!i){var l={loading:0,preload:null};if(i=r.querySelector(qf(a)))l.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":t},n),(n=If.get(a))&&Xf(e,n);var s=i=r.createElement("link");bt(s),Op(s,"link",e),s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),s.addEventListener("load",function(){l.loading|=1}),s.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Jf(i,t,r)}i={type:"stylesheet",instance:i,count:1,state:l},o.set(a,i)}}},M:function(e,t){Uf.M(e,t);var n=Hf;if(n&&e){var r=yt(n).hoistableScripts,o=Yf(e),a=r.get(o);a||((a=n.querySelector(Kf(o)))||(e=T({src:e,async:!0,type:"module"},t),(t=If.get(o))&&Zf(e,t),bt(a=n.createElement("script")),Op(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(o,a))}}};var Hf="undefined"===typeof document?null:document;function Bf(e,t,n){var r=Hf;if(r&&"string"===typeof t&&t){var o=It(t);o='link[rel="'+e+'"][href="'+o+'"]',"string"===typeof n&&(o+='[crossorigin="'+n+'"]'),$f.has(o)||($f.add(o),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(o)&&(Op(t=r.createElement("link"),"link",e),bt(t),r.head.appendChild(t)))}}function Wf(e,t,n,r){var o=(o=ce.current)?Ff(o):null;if(!o)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(n=Vf(n.href),(r=(t=yt(o).hoistableStyles).get(n))||(r={type:"style",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Vf(n.href);var i=yt(o).hoistableStyles,l=i.get(e);if(l||(o=o.ownerDocument||o,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,l),(i=o.querySelector(qf(e)))?i._p||(l.instance=i,l.state.loading=5):((i=If.get(e))||(i={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},If.set(e,i)),function(e,t,n,r){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(!0!==t[ft])return void(r.loading=1)}else(t=e.createElement("link"))[ft]=!0,t.onload=t.onerror=xt.bind(null,t),Op(t,"link",n),bt(t),e.head.appendChild(t);r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2})}(o,e,i,l.state))),t&&null===r)throw Error(a(528,""));return l}if(t&&null!==r)throw Error(a(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(n=Yf(n),(r=(t=yt(o).hoistableScripts).get(n))||(r={type:"script",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Vf(e){return'href="'+It(e)+'"'}function qf(e){return'link[rel="stylesheet"]['+e+"]"}function Gf(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Yf(e){return'[src="'+It(e)+'"]'}function Kf(e){return"script[async]"+e}function Qf(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+It(n.href)+'"]');if(r)return t.instance=r,bt(r),r;var o=T({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return bt(r=(e.ownerDocument||e).createElement("style")),Op(r,"style",o),Jf(r,n.precedence,e),t.instance=r;case"stylesheet":o=Vf(n.href);var i=e.querySelector(qf(o));if(i)return t.state.loading|=4,t.instance=i,bt(i),i;r=Gf(n),(o=If.get(o))&&Xf(r,o),bt(i=(e.ownerDocument||e).createElement("link"));var l=i;return l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),Op(i,"link",r),t.state.loading|=4,Jf(i,n.precedence,e),t.instance=i;case"script":return i=Yf(n.src),(o=e.querySelector(Kf(i)))?(t.instance=o,bt(o),o):(r=n,(o=If.get(i))&&Zf(r=T({},n),o),bt(o=(e=e.ownerDocument||e).createElement("script")),Op(o,"link",r),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(a(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Jf(r,n.precedence,e));return t.instance}function Jf(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=r.length?r[r.length-1]:null,a=o,i=0;i<r.length;i++){var l=r[i];if(l.dataset.precedence===t)a=l;else if(a!==o)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Xf(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Zf(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var eh=null;function th(e,t,n){if(null===eh){var r=new Map,o=eh=new Map;o.set(n,r)}else(r=(o=eh).get(n))||(r=new Map,o.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var a=n[o];if(!(a[pt]||a[at]||"link"===e&&"stylesheet"===a.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==a.namespaceURI){var i=a.getAttribute(t)||"";i=e+i;var l=r.get(i);l?l.push(a):r.set(i,[a])}}return r}function nh(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function rh(e,t){return"img"===e&&null!=t.src&&""!==t.src&&null==t.onLoad&&"lazy"!==t.loading}function oh(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}function ah(e){return(e.width||100)*(e.height||100)*("number"===typeof devicePixelRatio?devicePixelRatio:1)*.25}function ih(e,t){"function"===typeof t.decode&&(e.imgCount++,t.complete||(e.imgBytes+=ah(t),e.suspenseyImages.push(t)),e=uh.bind(e),t.decode().then(e,e))}var lh=0;function sh(e){if(0===e.count&&(0===e.imgCount||!e.waitingForImages))if(e.stylesheets)ph(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}function ch(){this.count--,sh(this)}function uh(){this.imgCount--,sh(this)}var dh=null;function ph(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,dh=new Map,t.forEach(fh,e),dh=null,ch.call(e))}function fh(e,t){if(!(4&t.state.loading)){var n=dh.get(e);if(n)var r=n.get(null);else{n=new Map,dh.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<o.length;a++){var i=o[a];"LINK"!==i.nodeName&&"not all"===i.getAttribute("media")||(n.set(i.dataset.precedence,i),r=i)}r&&n.set(null,r)}i=(o=t.instance).getAttribute("data-precedence"),(a=n.get(i)||r)===r&&n.set(null,o),n.set(i,o),this.count++,r=ch.bind(this),o.addEventListener("load",r),o.addEventListener("error",r),a?a.parentNode.insertBefore(o,a.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(o,e.firstChild),t.state.loading|=4}}var hh={$$typeof:D,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function mh(e,t,n,r,o,a,i,l,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ke(0),this.hiddenUpdates=Ke(null),this.identifierPrefix=r,this.onUncaughtError=o,this.onCaughtError=a,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.transitionTypes=null,this.incompleteTransitions=new Map}function gh(e,t,n,r,o,a,i,l,s,c,u,d){return e=new mh(e,t,n,i,s,c,u,d,l),t=1,!0===a&&(t|=24),a=po(3,null,null,t),e.current=a,a.stateNode=e,(t=fa()).refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},qa(a),e}function vh(e){return e?e=co:co}function yh(e,t,n,r,o,a){o=vh(o),null===r.context?r.context=o:r.pendingContext=o,(r=Ya(t)).payload={element:n},null!==(a=void 0===a?null:a)&&(r.callback=a),null!==(n=Ka(e,r,t))&&(fd(n,0,t),Qa(n,e,t))}function bh(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function xh(e,t){bh(e,t),(e=e.alternate)&&bh(e,t)}function wh(e){if(13===e.tag||31===e.tag){var t=io(e,67108864);null!==t&&fd(t,0,67108864),xh(e,67108864)}}function kh(e){if(13===e.tag||31===e.tag){var t=ud(),n=io(e,t=et(t));null!==n&&fd(n,0,t),xh(e,t)}}var Sh=!0;function jh(e,t,n,r){var o=J.T;J.T=null;var a=X.p;try{X.p=2,Eh(e,t,n,r)}finally{X.p=a,J.T=o}}function Ch(e,t,n,r){var o=J.T;J.T=null;var a=X.p;try{X.p=8,Eh(e,t,n,r)}finally{X.p=a,J.T=o}}function Eh(e,t,n,r){if(Sh){var o=Th(r);if(null===o)wp(e,t,r,Ph,n),$h(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return Oh=Fh(Oh,e,t,n,r,o),!0;case"dragenter":return Rh=Fh(Rh,e,t,n,r,o),!0;case"mouseover":return _h=Fh(_h,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Dh.set(a,Fh(Dh.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Ah.set(a,Fh(Ah.get(a)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if($h(e,r),4&t&&-1<Ih.indexOf(e)){for(;null!==o;){var a=gt(o);if(null!==a)switch(a.tag){case 3:if((a=a.stateNode).current.memoizedState.isDehydrated){var i=Be(a.pendingLanes);if(0!==i){var l=a;for(l.pendingLanes|=2,l.entangledLanes|=2;i;){var s=1<<31-Me(i);l.entanglements[1]|=s,i&=~s}np(a),0===(6&Pu)&&(Ku=Ce()+500,rp(0,!1))}}break;case 31:case 13:null!==(l=io(a,2))&&fd(l,0,2),yd(),xh(a,2)}if(null===(a=Th(r))&&wp(e,t,r,Ph,n),a===o)break;o=a}null!==o&&r.stopPropagation()}else wp(e,t,r,null,n)}}function Th(e){return Nh(e=tn(e))}var Ph=null;function Nh(e){if(Ph=null,null!==(e=mt(e))){var t=s(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=u(t)))return e;e=null}else if(31===n){if(null!==(e=d(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ph=e,null}function Lh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ee()){case Te:return 2;case Pe:return 8;case Ne:case Le:return 32;case ze:return 268435456;default:return 32}default:return 32}}var zh=!1,Oh=null,Rh=null,_h=null,Dh=new Map,Ah=new Map,Mh=[],Ih="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $h(e,t){switch(e){case"focusin":case"focusout":Oh=null;break;case"dragenter":case"dragleave":Rh=null;break;case"mouseover":case"mouseout":_h=null;break;case"pointerover":case"pointerout":Dh.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ah.delete(t.pointerId)}}function Fh(e,t,n,r,o,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},null!==t&&(null!==(t=gt(t))&&wh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function Uh(e){var t=mt(e.target);if(null!==t){var n=s(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=u(n)))return e.blockedOn=t,void rt(e.priority,function(){kh(n)})}else if(31===t){if(null!==(t=d(n)))return e.blockedOn=t,void rt(e.priority,function(){kh(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Hh(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Th(e.nativeEvent);if(null!==n)return null!==(t=gt(n))&&wh(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);en=r,n.target.dispatchEvent(r),en=null,t.shift()}return!0}function Bh(e,t,n){Hh(e)&&n.delete(t)}function Wh(){zh=!1,null!==Oh&&Hh(Oh)&&(Oh=null),null!==Rh&&Hh(Rh)&&(Rh=null),null!==_h&&Hh(_h)&&(_h=null),Dh.forEach(Bh),Ah.forEach(Bh)}function Vh(e,t){e.blockedOn===t&&(e.blockedOn=null,zh||(zh=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Wh)))}var qh=null;function Gh(e){qh!==e&&(qh=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){qh===e&&(qh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],o=e[t+2];if("function"!==typeof r){if(null===Nh(r||n))continue;break}var a=gt(n);null!==a&&(e.splice(t,3),t-=3,Ol(a,{pending:!0,data:o,method:n.method,action:r},r,o))}}))}function Yh(e){function t(t){return Vh(t,e)}null!==Oh&&Vh(Oh,e),null!==Rh&&Vh(Rh,e),null!==_h&&Vh(_h,e),Dh.forEach(t),Ah.forEach(t);for(var n=0;n<Mh.length;n++){var r=Mh[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Mh.length&&null===(n=Mh[0]).blockedOn;)Uh(n),null===n.blockedOn&&Mh.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var o=n[r],a=n[r+1],i=o[it]||null;if("function"===typeof a)i||Gh(n);else if(i){var l=null;if(a&&a.hasAttribute("formAction")){if(o=a,i=a[it]||null)l=i.formAction;else if(null!==Nh(o))continue}else l=i.action;"function"===typeof l?n[r+1]=l:(n.splice(r,3),r-=3),Gh(n)}}}function Kh(){function e(e){e.canIntercept&&"react-transition"===e.info&&e.intercept({handler:function(){return new Promise(function(e){return o=e})},focusReset:"manual",scroll:"manual"})}function t(){null!==o&&(o(),o=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&null!=e.url&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}if("object"===typeof navigation){var r=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),null!==o&&(o(),o=null)}}}function Qh(e){this._internalRoot=e}function Jh(e){this._internalRoot=e}Jh.prototype.render=Qh.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));yh(t.current,ud(),e,t,null,null)},Jh.prototype.unmount=Qh.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;yh(e.current,2,null,e,null,null),yd(),t[lt]=null}},Jh.prototype.unstable_scheduleHydration=function(e){if(e){var t=nt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mh.length&&0!==t&&t<Mh[n].priority;n++);Mh.splice(n,0,e),0===n&&Uh(e)}};var Xh=r.version;if("19.3.0"!==Xh)throw Error(a(527,Xh,"19.3.0"));X.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=s(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(r=o.return)){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return f(o),e;if(i===r)return f(o),t;i=i.sibling}throw Error(a(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,c=o.child;c;){if(c===n){l=!0,n=o,r=i;break}if(c===r){l=!0,r=o,n=i;break}c=c.sibling}if(!l){for(c=i.child;c;){if(c===n){l=!0,n=i,r=o;break}if(c===r){l=!0,r=i,n=o;break}c=c.sibling}if(!l)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?h(e):null)?null:e.stateNode};var Zh={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:J,reconcilerVersion:"19.3.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var em=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!em.isDisabled&&em.supportsFiber)try{_e=em.inject(Zh),De=em}catch(nm){}}t.createRoot=function(e,t){if(!l(e))throw Error(a(299));var n=!1,r="",o=ts,i=ns,s=rs;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(o=t.onUncaughtError),void 0!==t.onCaughtError&&(i=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError)),t=gh(e,1,!1,null,0,n,r,null,o,i,s,Kh),e[lt]=t.current,bp(e),new Qh(t)},t.hydrateRoot=function(e,t,n){if(!l(e))throw Error(a(299));var r=!1,o="",i=ts,s=ns,c=rs,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onUncaughtError&&(i=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.formState&&(u=n.formState)),(t=gh(e,1,!0,t,0,r,o,u,i,s,c,Kh)).context=vh(null),n=t.current,(o=Ya(r=et(r=ud()))).callback=null,Ka(n,o,r),n=r,t.current.lanes=n,Qe(t,n),np(t),e[lt]=t.current,bp(e),new Jh(t)},t.version="19.3.0"}),o=n.cw(function(e,t){var n=c();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var a={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},i=Symbol.for("react.portal"),l=Symbol.for("react.recoverable"),s=Symbol.for("react.optimistic_key");var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,t.browser=function(e){return{$$typeof:l,_reason:e}},t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(r(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:i,key:null==r?null:r===s?s:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=u.T,n=a.p;try{if(u.T=null,a.p=2,e)return e()}finally{u.T=t,a.p=n,a.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,a.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&a.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=d(n,t.crossOrigin),o="string"===typeof t.integrity?t.integrity:void 0,i="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?a.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:o,fetchPriority:i}):"script"===n&&a.d.X(e,{crossOrigin:r,integrity:o,fetchPriority:i,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=d(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0})}}else null==t&&a.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=d(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=d(t.as,t.crossOrigin);a.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0})}else a.d.m(e)},t.requestFormReset=function(e){a.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return u.H.useFormState(e,t,n)},t.useFormStatus=function(){return u.H.useHostTransitionStatus()},t.version="19.3.0"}),a=n.cw(function(e,t){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=r()}),i=n.cw(function(e,t){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=o()}),l=n.cw(function(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(e,t,r){var o=null;if(void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),"key"in t)for(var a in r={},t)"key"!==a&&(r[a]=t[a]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:o,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=o,t.jsxs=o}),s=n.cw(function(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.for("react.activity"),h=Symbol.for("react.view_transition"),m=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,y={};function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||g}function x(){}function w(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||g}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=b.prototype;var k=w.prototype=new x;k.constructor=w,v(k,b.prototype),k.isPureReactComponent=!0;var S=Array.isArray;function j(){}var C={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function T(e,t,r){var o=r.ref;return{$$typeof:n,type:e,key:t,ref:void 0!==o?o:null,props:r}}function P(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var N=/\/+/g;function L(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function z(e,t,o,a,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s,c,u=!1;if(null===e)u=!0;else switch(l){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0;break;case p:return z((u=e._init)(e._payload),t,o,a,i)}}if(u)return i=i(e),u=""===a?"."+L(e,0):a,S(i)?(o="",null!=u&&(o=u.replace(N,"$&/")+"/"),z(i,t,o,"",function(e){return e})):null!=i&&(P(i)&&(s=i,c=o+(null==i.key||e&&e.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+u,i=T(s.type,c,s.props)),t.push(i)),1;u=0;var d,f=""===a?".":a+":";if(S(e))for(var h=0;h<e.length;h++)u+=z(a=e[h],t,o,l=f+L(a,h),i);else if("function"===typeof(h=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=m&&d[m]||d["@@iterator"])?d:null))for(e=h.call(e),h=0;!(a=e.next()).done;)u+=z(a=a.value,t,o,l=f+L(a,h++),i);else if("object"===l){if("function"===typeof e.then)return z(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(j,j):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,o,a,i);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function O(e,t,n){if(null==e)return e;var r=[],o=0;return z(e,r,"","",function(e){return t.call(n,e,o++)}),r}function R(e){if(-1===e._status){var t=(0,e._result)();t.then(function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n,void 0===t.status&&(t.status="fulfilled",t.value=n))},function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n,void 0===t.status&&(t.status="rejected",t.reason=n))}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var _="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function D(e){var t=C.T,n={};n.types=null!==t?t.types:null,C.T=n;try{var r=e(),o=C.S;null!==o&&o(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(j,_)}catch(a){_(a)}finally{null!==t&&null!==n.types&&(t.types=n.types),C.T=t}}var A={map:O,forEach:function(e,t,n){O(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return O(e,function(){t++}),t},toArray:function(e){return O(e,function(e){return e})||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Activity=f,t.Children=A,t.Component=b,t.Fragment=o,t.Profiler=i,t.PureComponent=w,t.StrictMode=a,t.Suspense=u,t.ViewTransition=h,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},t.addTransitionType=function e(t){var n=C.T;if(null!==n){var r=n.types;null===r?n.types=[t]:-1===r.indexOf(t)&&r.push(t)}else D(e.bind(null,t))},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cacheSignal=function(){return null},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=v({},e.props),o=e.key;if(null!=t)for(a in void 0!==t.key&&(o=""+t.key),t)!E.call(t,a)||"key"===a||"__self"===a||"__source"===a||"ref"===a&&void 0===t.ref||(r[a]=t[a]);var a=arguments.length-2;if(1===a)r.children=n;else if(1<a){for(var i=Array(a),l=0;l<a;l++)i[l]=arguments[l+2];r.children=i}return T(e.type,o,r)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,n){var r,o={},a=null;if(null!=t)for(r in void 0!==t.key&&(a=""+t.key),t)E.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return T(e,a,o)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=D,t.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},t.use=function(e){return C.H.use(e)},t.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},t.useCallback=function(e,t){return C.H.useCallback(e,t)},t.useContext=function(e){return C.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return C.H.useEffect(e,t)},t.useEffectEvent=function(e){return C.H.useEffectEvent(e)},t.useId=function(){return C.H.useId()},t.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return C.H.useMemo(e,t)},t.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},t.useRef=function(e){return C.H.useRef(e)},t.useState=function(e){return C.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return C.H.useTransition()},t.version="19.3.0"}),c=n.cw(function(e,t){e.exports=s()}),u=n.cw(function(e,t){e.exports=l()}),d=n.cw(function(e,t){function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<a(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>a(s,n))c<o&&0>a(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<o&&0>a(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,p=null,f=3,h=!1,m=!1,g=!1,v=!1,y="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(u);null!==t;){if(null===t.callback)o(u);else{if(!(t.startTime<=e))break;o(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function k(e){if(g=!1,w(e),!m)if(null!==r(c))m=!0,j||(j=!0,S());else{var t=r(u);null!==t&&O(k,t.startTime-e)}}var S,j=!1,C=-1,E=5,T=-1;function P(){return!!v||!(t.unstable_now()-T<E)}function N(){if(v=!1,j){var e=t.unstable_now();T=e;var n=!0;try{e:{m=!1,g&&(g=!1,b(C),C=-1),h=!0;var a=f;try{t:{for(w(e),p=r(c);null!==p&&!(p.expirationTime>e&&P());){var i=p.callback;if("function"===typeof i){p.callback=null,f=p.priorityLevel;var l=i(p.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof l){p.callback=l,w(e),n=!0;break t}p===r(c)&&o(c),w(e)}else o(c);p=r(c)}if(null!==p)n=!0;else{var s=r(u);null!==s&&O(k,s.startTime-e),n=!1}}break e}finally{p=null,f=a,h=!1}n=void 0}}finally{n?S():j=!1}}}if("function"===typeof x)S=function(){x(N)};else if("undefined"!==typeof MessageChannel){var L=new MessageChannel,z=L.port2;L.port1.onmessage=N,S=function(){z.postMessage(null)}}else S=function(){y(N,0)};function O(e,n){C=y(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_requestPaint=function(){v=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,o,a){var i=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?i+a:i:a=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:a,expirationTime:l=a+l,sortIndex:-1},a>i?(e.sortIndex=a,n(u,e),null===r(c)&&e===r(u)&&(g?(b(C),C=-1):g=!0,O(k,a-i))):(e.sortIndex=l,n(c,e),m||h||(m=!0,j||(j=!0,S()))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}}),p=n.cw(function(e,t){e.exports=d()}),f=n.cw(function(e,t){var n=c();var r="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},o=n.useState,a=n.useEffect,i=n.useLayoutEffect,l=n.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!r(e,n)}catch(o){return!0}}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),c=r[0].inst,u=r[1];return i(function(){c.value=n,c.getSnapshot=t,s(c)&&u({inst:c})},[e,n,t]),a(function(){return s(c)&&u({inst:c}),e(function(){s(c)&&u({inst:c})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:u}),h=n.cw(function(e,t){e.exports=f()});c(),i(),a();var m="-ms-",g="-moz-",v="-webkit-",y="comm",b="rule",x="decl",w="@keyframes",k=Math.abs,S=String.fromCharCode,j=Object.assign;function C(e){return e.trim()}function E(e,t){return(e=t.exec(e))?e[0]:e}function T(e,t,n){return e.replace(t,n)}function P(e,t,n){return e.indexOf(t,n)}function N(e,t){return 0|e.charCodeAt(t)}function L(e,t,n){return e.slice(t,n)}function z(e){return e.length}function O(e){return e.length}function R(e,t){return t.push(e),e}function _(e,t){return e.filter(function(e){return!E(e,t)})}var D,A,M=1,I=1,$=0,F=0,U=0,H="";function B(e,t,n,r,o,a,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:M,column:I,length:i,return:"",siblings:l}}function W(e,t){return j(B("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function V(e){for(;e.root;)e=W(e.root,{children:[e]});R(e,e.siblings)}function q(){return U=F>0?N(H,--F):0,I--,10===U&&(I=1,M--),U}function G(){return U=F<$?N(H,F++):0,I++,10===U&&(I=1,M++),U}function Y(){return N(H,F)}function K(){return F}function Q(e,t){return L(H,e,t)}function J(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function X(e){return M=I=1,$=z(H=e),F=0,[]}function Z(e){return H="",e}function ee(e){return C(Q(F-1,re(91===e?e+2:40===e?e+1:e)))}function te(e){for(;(U=Y())&&U<33;)G();return J(e)>2||J(U)>3?"":" "}function ne(e,t){for(;--t&&G()&&!(U<48||U>102||U>57&&U<65||U>70&&U<97););return Q(e,K()+(t<6&&32==Y()&&32==G()))}function re(e){for(;G();)switch(U){case e:return F;case 34:case 39:34!==e&&39!==e&&re(U);break;case 40:41===e&&re(e);break;case 92:G()}return F}function oe(e,t){for(;G()&&e+U!==57&&(e+U!==84||47!==Y()););return"/*"+Q(t,F-1)+"*"+S(47===e?e:G())}function ae(e){for(;!J(Y());)G();return Q(e,F)}function ie(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function le(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case x:return e.return=e.return||e.value;case y:return"";case w:return e.return=e.value+"{"+ie(e.children,r)+"}";case b:if(!z(e.value=e.props.join(",")))return""}return z(n=ie(e.children,r))?e.return=e.value+"{"+n+"}":""}function se(e,t,n){switch(function(e,t){return 45^N(e,0)?(((t<<2^N(e,0))<<2^N(e,1))<<2^N(e,2))<<2^N(e,3):0}(e,t)){case 5103:return v+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return v+e+e;case 4855:return v+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return g+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return v+e+g+e+m+e+e;case 5936:switch(N(e,t+11)){case 114:return v+e+m+T(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return v+e+m+T(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return v+e+m+T(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return v+e+m+e+e;case 6165:return v+e+m+"flex-"+e+e;case 5187:return v+e+T(e,/(\w+).+(:[^]+)/,v+"box-$1$2"+m+"flex-$1$2")+e;case 5443:return v+e+m+"flex-item-"+T(e,/flex-|-self/g,"")+(E(e,/flex-|baseline/)?"":m+"grid-row-"+T(e,/flex-|-self/g,""))+e;case 4675:return v+e+m+"flex-line-pack"+T(e,/align-content|flex-|-self/g,"")+e;case 5548:return v+e+m+T(e,"shrink","negative")+e;case 5292:return v+e+m+T(e,"basis","preferred-size")+e;case 6060:return v+"box-"+T(e,"-grow","")+v+e+m+T(e,"grow","positive")+e;case 4554:return v+T(e,/([^-])(transform)/g,"$1"+v+"$2")+e;case 6187:return T(T(T(e,/(zoom-|grab)/,v+"$1"),/(image-set)/,v+"$1"),e,"")+e;case 5495:case 3959:return T(e,/(image-set\([^]*)/,v+"$1$`$1");case 4968:return T(T(e,/(.+:)(flex-)?(.*)/,v+"box-pack:$3"+m+"flex-pack:$3"),/space-between/,"justify")+v+e+e;case 4200:if(!E(e,/flex-|baseline/))return m+"grid-column-align"+L(e,t)+e;break;case 2592:case 3360:return m+T(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,E(e.props,/grid-\w+-end/)})?~P(e+(n=n[t].value),"span",0)?e:m+T(e,"-start","")+e+m+"grid-row-span:"+(~P(n,"span",0)?E(n,/\d+/):+E(n,/\d+/)-+E(e,/\d+/))+";":m+T(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return E(e.props,/grid-\w+-start/)})?e:m+T(T(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return T(e,/(.+)-inline(.+)/,v+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(z(e)-1-t>6)switch(N(e,t+1)){case 109:if(45!==N(e,t+4))break;case 102:return T(e,/(.+:)(.+)-([^]+)/,"$1"+v+"$2-$3$1"+g+(108==N(e,t+3)?"$3":"$2-$3"))+e;case 115:return~P(e,"stretch",0)?se(T(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return T(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,o,a,i,l){return m+n+":"+r+l+(o?m+n+"-span:"+(a?i:+i-+r)+l:"")+e});case 4949:if(121===N(e,t+6))return T(e,":",":"+v)+e;break;case 6444:switch(N(e,45===N(e,14)?18:11)){case 120:return T(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+v+(45===N(e,14)?"inline-":"")+"box$3$1"+v+"$2$3$1"+m+"$2box$3")+e;case 100:return T(e,":",":"+m)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return T(e,"scroll-","scroll-snap-")+e}return e}function ce(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case x:return void(e.return=se(e.value,e.length,n));case w:return ie([W(e,{value:T(e.value,"@","@"+v)})],r);case b:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(E(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":V(W(e,{props:[T(t,/:(read-\w+)/,":-moz-$1")]})),V(W(e,{props:[t]})),j(e,{props:_(n,r)});break;case"::placeholder":V(W(e,{props:[T(t,/:(plac\w+)/,":"+v+"input-$1")]})),V(W(e,{props:[T(t,/:(plac\w+)/,":-moz-$1")]})),V(W(e,{props:[T(t,/:(plac\w+)/,m+"input-$1")]})),V(W(e,{props:[t]})),j(e,{props:_(n,r)})}return""})}}function ue(e){return Z(de("",null,null,null,[""],e=X(e),0,[0],e))}function de(e,t,n,r,o,a,i,l,s){for(var c=0,u=0,d=i,p=0,f=0,h=0,m=1,g=1,v=1,y=0,b="",x=o,w=a,j=r,C=b;g;)switch(h=y,y=G()){case 40:if(108!=h&&58==N(C,d-1)){-1!=P(C+=T(ee(y),"&","&\f"),"&\f",k(c?l[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:C+=ee(y);break;case 9:case 10:case 13:case 32:C+=te(h);break;case 92:C+=ne(K()-1,7);continue;case 47:switch(Y()){case 42:case 47:R(fe(oe(G(),K()),t,n,s),s),5!=J(h||1)&&5!=J(Y()||1)||!z(C)||" "===L(C,-1,void 0)||(C+=" ");break;default:C+="/"}break;case 123*m:l[c++]=z(C)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==v&&(C=T(C,/\f/g,"")),f>0&&(z(C)-d||0===m&&47===h)&&R(f>32?he(C+";",r,n,d-1,s):he(T(C," ","")+";",r,n,d-2,s),s);break;case 59:C+=";";default:if(R(j=pe(C,t,n,c,u,o,l,b,x=[],w=[],d,a),a),123===y)if(0===u)de(C,t,j,j,x,a,d,l,w);else{switch(p){case 99:if(110===N(C,3))break;case 108:if(97===N(C,2))break;default:u=0;case 100:case 109:case 115:}u?de(e,j,j,r&&R(pe(e,j,j,0,0,o,l,b,o,x=[],d,w),w),o,w,d,l,r?x:w):de(C,j,j,j,[""],w,0,l,w)}}c=u=f=0,m=v=1,b=C="",d=i;break;case 58:d=1+z(C),f=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==q())continue;switch(C+=S(y),y*m){case 38:v=u>0?1:(C+="\f",-1);break;case 44:l[c++]=(z(C)-1)*v,v=1;break;case 64:45===Y()&&(C+=ee(G())),p=Y(),u=d=z(b=C+=ae(K())),y++;break;case 45:45===h&&2==z(C)&&(m=0)}}return a}function pe(e,t,n,r,o,a,i,l,s,c,u,d){for(var p=o-1,f=0===o?a:[""],h=O(f),m=0,g=0,v=0;m<r;++m)for(var y=0,x=L(e,p+1,p=k(g=i[m])),w=e;y<h;++y)(w=C(g>0?f[y]+" "+x:T(x,/&\f/g,f[y])))&&(s[v++]=w);return B(e,t,n,0===o?b:l,s,c,u,d)}function fe(e,t,n,r){return B(e,t,n,y,S(U),L(e,2,-2),0,r)}function he(e,t,n,r,o){return B(e,t,n,x,L(e,0,r),L(e,r+1,-1),r,o)}const me="data-styled",ge="active",ve="data-styled-version",ye="6.5.3",be="/*!sc*/\n",xe="undefined"!=typeof window&&"undefined"!=typeof document;function we(e){if("undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/abdulrahman-portfolio-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}){const t={NODE_ENV:"production",PUBLIC_URL:"/abdulrahman-portfolio-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}[e];if(void 0!==t&&""!==t)return"false"!==t}}const ke=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:null!==(A=null!==(D=we("REACT_APP_SC_DISABLE_SPEEDY"))&&void 0!==D?D:we("SC_DISABLE_SPEEDY"))&&void 0!==A?A:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/abdulrahman-portfolio-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&!1),Se="sc-keyframes-",je={};function Ce(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${n.length>0?` Args: ${n.join(", ")}`:""}`)}let Ee=new Map,Te=new Map,Pe=1;const Ne=e=>{if(Ee.has(e))return Ee.get(e);for(;Te.has(Pe);)Pe++;const t=Pe++;return Ee.set(e,t),Te.set(t,e),t},Le=e=>Te.get(e),ze=(e,t)=>{Pe=t+1,Ee.set(e,t),Te.set(t,e)},Oe=(new Set,Object.freeze([])),Re=Object.freeze({});function _e(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Re;return e.theme!==n.theme&&e.theme||t||n.theme}const De=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ae=/(^-|-$)/g;function Me(e){return e.replace(De,"-").replace(Ae,"")}const Ie=/(a)(d)/gi,$e=e=>String.fromCharCode(e+(e>25?39:97));function Fe(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=$e(t%52)+n;return($e(t%52)+n).replace(Ie,"$1-$2")}const Ue=5381,He=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},Be=e=>He(Ue,e);function We(e){return Fe(Be(e)>>>0)}function Ve(e){return e.displayName||e.name||"Component"}function qe(e){return"string"==typeof e&&!0}function Ge(e){return qe(e)?`styled.${e}`:`Styled(${Ve(e)})`}const Ye=Symbol.for("react.memo"),Ke=Symbol.for("react.forward_ref"),Qe={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Je={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xe={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ze={[Ke]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Ye]:Xe};function et(e){return("type"in(t=e)&&t.type.$$typeof)===Ye?Xe:"$$typeof"in e?Ze[e.$$typeof]:Qe;var t}const tt=Object.defineProperty,nt=Object.getOwnPropertyNames,rt=Object.getOwnPropertySymbols,ot=Object.getOwnPropertyDescriptor,at=Object.getPrototypeOf,it=Object.prototype;function lt(e,t,n){if("string"!=typeof t){const r=at(t);r&&r!==it&&lt(e,r,n);const o=nt(t).concat(rt(t)),a=et(e),i=et(t);for(let l=0;l<o.length;++l){const r=o[l];if(!(r in Je||n&&n[r]||i&&r in i||a&&r in a)){const n=ot(t,r);try{tt(e,r,n)}catch(e){}}}}return e}function st(e){return"function"==typeof e}const ct=Symbol.for("react.forward_ref");function ut(e){return null!=e&&("object"==typeof e||"function"==typeof e)&&e.$$typeof===ct&&"styledComponentId"in e}function dt(e,t){return e&&t?e+" "+t:e||t||""}function pt(e,t){return e.join(t||"")}function ft(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ht(e,t){if(!(arguments.length>2&&void 0!==arguments[2]&&arguments[2])&&!ft(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=ht(e[n],t[n]);else if(ft(t))for(const n in t)e[n]=ht(e[n],t[n]);return e}function mt(e,t){Object.defineProperty(e,"toString",{value:t})}const gt=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const t=this.groupSizes,n=t.length;let r=n;for(;e>=r;)if(r<<=1,r<0)throw Ce(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let o=0,a=t.length;o<a;o++)this.tag.insertRule(n,t[o])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||0===this.groupSizes[e])return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n;for(let a=r;a<o;a++)t+=this.tag.getRule(a)+be;return t}},vt=`style[${me}][${ve}="${ye}"]`,yt=new RegExp(`^${me}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),bt=e=>"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType,xt=e=>{if(!e)return document;if(bt(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(bt(t))return t}return document},wt=(e,t,n)=>{const r=n.split(",");let o;for(let a=0,i=r.length;a<i;a++)(o=r[a])&&e.registerName(t,o)},kt=(e,t)=>{var n;const r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(be),o=[];for(let a=0,i=r.length;a<i;a++){const t=r[a].trim();if(!t)continue;const n=t.match(yt);if(n){const t=0|parseInt(n[1],10),r=n[2];0!==t&&(ze(r,t),wt(e,r,n[3]),e.getTag().insertRules(t,o)),o.length=0}else o.push(t)}},St=e=>{const t=xt(e.options.target).querySelectorAll(vt);for(let n=0,r=t.length;n<r;n++){const r=t[n];r&&r.getAttribute(me)!==ge&&(kt(e,r),r.parentNode&&r.parentNode.removeChild(r))}};let jt=!1;function Ct(){if(!1!==jt)return jt;if("undefined"!=typeof document){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return jt=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return jt=t.getAttribute("content")||void 0}return jt=n.nc}const Et=(e,t)=>{const n=document.head,r=e||n,o=document.createElement("style"),a=(e=>{const t=Array.from(e.querySelectorAll(`style[${me}]`));return t[t.length-1]})(r),i=void 0!==a?a.nextSibling:null;o.setAttribute(me,ge),o.setAttribute(ve,ye);const l=t||Ct();return l&&o.setAttribute("nonce",l),r.insertBefore(o,i),o},Tt=class{constructor(e,t){this.element=Et(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(e=>{var t;if(e.sheet)return e.sheet;const n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets;for(let r=0,o=n.length;r<o;r++){const t=n[r];if(t.ownerNode===e)return t}throw Ce(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},Pt=class{constructor(e,t){this.element=Et(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Nt=xe;const Lt={isServer:!xe,useCSSOMInjection:!ke};class zt{static registerId(e){return Ne(e)}constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;this.options=Object.assign(Object.assign({},Lt),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&xe&&Nt&&(Nt=!1,St(this)),mt(this,()=>(e=>{const t=e.getTag(),{length:n}=t;let r="";for(let o=0;o<n;o++){const n=Le(o);if(void 0===n)continue;const a=e.names.get(n);if(void 0===a||!a.size)continue;const i=t.getGroup(o);if(0===i.length)continue;const l=me+".g"+o+'[id="'+n+'"]';let s="";for(const e of a)e.length>0&&(s+=e+",");r+=i+l+'{content:"'+s+'"}'+be}return r})(this))}rehydrate(){!this.server&&xe&&St(this)}reconstructWithOptions(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=new zt(Object.assign(Object.assign({},this.options),e),this.gs,t&&this.names||void 0);return n.keyframeIds=new Set(this.keyframeIds),!this.server&&xe&&e.target!==this.options.target&&xt(this.options.target)!==xt(e.target)&&St(n),n}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||(this.tag=(e=(e=>{let{useCSSOMInjection:t,target:n,nonce:r}=e;return t?new Tt(n,r):new Pt(n,r)})(this.options),new gt(e)));var e}hasNameForId(e,t){var n,r;return null!==(r=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==r&&r}registerName(e,t){Ne(e),e.startsWith(Se)&&this.keyframeIds.add(e);const n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(Ne(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(Ne(e)),this.clearNames(e)}clearTag(){this.tag=void 0}}const Ot=new WeakSet,Rt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function _t(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in Rt||e.startsWith("--")?String(t).trim():t+"px"}const Dt=47;function At(e){if(45===e.charCodeAt(0)&&45===e.charCodeAt(1))return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const Mt=Symbol.for("sc-keyframes");function It(e){return st(e)&&!(e.prototype&&e.prototype.isReactComponent)}const $t=e=>null==e||!1===e||""===e,Ft=Symbol.for("react.client.reference");function Ut(e){return e.$$typeof===Ft}function Ht(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!$t(r)&&(Array.isArray(r)&&Ot.has(r)||st(r)?t.push(At(n)+":",r,";"):ft(r)?(t.push(n+" {"),Ht(r,t),t.push("}")):t.push(At(n)+": "+_t(n,r)+";"))}}function Bt(e,t,n,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];if($t(e))return o;const a=typeof e;if("string"===a)return o.push(e),o;if("function"===a){if(Ut(e))return o;if(It(e)&&t){return Bt(e(t),t,n,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let a=0;a<e.length;a++)Bt(e[a],t,n,r,o);return o}return ut(e)?(o.push(`.${e.styledComponentId}`),o):function(e){return"object"==typeof e&&null!==e&&Mt in e}(e)?(n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o):Ut(e)?o:ft(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(Ht(e,o),o):(o.push(e.toString()),o)}const Wt=Be(ye);class Vt{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=He(Wt,t),this.baseStyle=n,zt.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";{let o="";for(let r=0;r<this.rules.length;r++){const a=this.rules[r];if("string"==typeof a)o+=a;else if(a)if(It(a)){const r=a(e);"string"==typeof r?o+=r:null!=r&&!1!==r&&(o+=pt(Bt(r,e,t,n)))}else o+=pt(Bt(a,e,t,n))}if(o){this.dynamicNameCache||(this.dynamicNameCache=new Map);const e=n.hash?n.hash+o:o;let a=this.dynamicNameCache.get(e);if(!a){if(a=Fe(He(He(this.baseHash,n.hash),o)>>>0),this.dynamicNameCache.size>=200){const e=this.dynamicNameCache.keys().next().value;void 0!==e&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){const e=n(o,"."+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=dt(r,a)}}return r}}const qt=/&/g;function Gt(e,t){let n=0;for(;--t>=0&&92===e.charCodeAt(t);)n++;return!(1&~n)}function Yt(e){const t=e.length;let n="",r=0,o=0,a=0,i=!1,l=!1;for(let s=0;s<t;s++){const c=e.charCodeAt(s);if(0!==a||i||c!==Dt||42!==e.charCodeAt(s+1))if(i)42===c&&e.charCodeAt(s+1)===Dt&&(i=!1,s++);else if(34!==c&&39!==c||Gt(e,s)){if(0===a)if(123===c)o++;else if(125===c){if(o--,o<0){l=!0;let n=s+1;for(;n<t;){const t=e.charCodeAt(n);if(59===t||10===t)break;n++}n<t&&59===e.charCodeAt(n)&&n++,o=0,s=n-1,r=n;continue}0===o&&(n+=e.substring(r,s+1),r=s+1)}else 59===c&&0===o&&(n+=e.substring(r,s+1),r=s+1)}else 0===a?a=c:a===c&&(a=0);else i=!0,s++}return l||0!==o||0!==a?(r<t&&0===o&&0===a&&(n+=e.substring(r)),n):e}function Kt(e,t){const n=t+" ",r=","+n;for(let o=0;o<e.length;o++){const a=e[o];if("rule"===a.type){a.value=(n+a.value).replaceAll(",",r);const e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&"@keyframes"!==a.type&&Kt(a.children,t)}return e}function Qt(){let e,t,n,{options:r=Re,plugins:o=Oe}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re;const a=(n,r,o)=>o.startsWith(t)&&o.endsWith(t)&&o.replaceAll(t,"").length>0?`.${e}`:n,i=o.slice();i.push(e=>{e.type===b&&e.value.includes("&")&&(n||(n=new RegExp(`\\${t}\\b`,"g")),e.props[0]=e.props[0].replace(qt,t).replace(n,a))}),r.prefix&&i.push(ce),i.push(le);let l=[];const s=function(e){var t=O(e);return function(n,r,o,a){for(var i="",l=0;l<t;l++)i+=e[l](n,r,o,a)||"";return i}}(i.concat((d=e=>l.push(e),function(e){e.root||(e=e.return)&&d(e)}))),c=function(o){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"&",t=a,n=void 0;const c=function(e){const t=-1!==e.indexOf("//"),n=-1!==e.indexOf("}");if(!t&&!n)return e;if(!t)return Yt(e);const r=e.length;let o="",a=0,i=0,l=0,s=0,c=0,u=!1;for(;i<r;){const t=e.charCodeAt(i);if(34!==t&&39!==t||Gt(e,i))if(0===l)if(t===Dt&&i+1<r&&42===e.charCodeAt(i+1)){for(i+=2;i+1<r&&(42!==e.charCodeAt(i)||e.charCodeAt(i+1)!==Dt);)i++;i+=2}else if(40!==t)if(41!==t)if(s>0)i++;else if(42===t&&i+1<r&&e.charCodeAt(i+1)===Dt)o+=e.substring(a,i),i+=2,a=i,u=!0;else if(t===Dt&&i+1<r&&e.charCodeAt(i+1)===Dt){for(o+=e.substring(a,i);i<r&&10!==e.charCodeAt(i);)i++;a=i,u=!0}else 123===t?c++:125===t&&c--,i++;else s>0&&s--,i++;else s++,i++;else i++;else 0===l?l=t:l===t&&(l=0),i++}return u?(a<r&&(o+=e.substring(a)),0===c?o:Yt(o)):0===c?e:Yt(e)}(o);let u=ue(i||a?i+" "+a+" { "+c+" }":c);return r.namespace&&(u=Kt(u,r.namespace)),l=[],ie(u,s),l},u=r;var d;let p=Ue;for(let f=0;f<o.length;f++)o[f].name||Ce(15),p=He(p,o[f].name);return(null==u?void 0:u.namespace)&&(p=He(p,u.namespace)),(null==u?void 0:u.prefix)&&(p=He(p,"p")),c.hash=p!==Ue?p.toString():"",c}const Jt=new zt,Xt=Qt(),Zt=s().createContext({shouldForwardProp:void 0,styleSheet:Jt,stylis:Xt,stylisPlugins:void 0});Zt.Consumer;function en(){return s().useContext(Zt)}const tn=s().createContext(void 0);tn.Consumer;const nn=Object.prototype.hasOwnProperty,rn={};function on(e,t){const n="string"!=typeof e?"sc":Me(e);rn[n]=(rn[n]||0)+1;const r=n+"-"+We(ye+n+rn[n]);return t?t+"-"+r:r}function an(e,t,n){const r=ut(e),o=e,a=!qe(e),{attrs:i=Oe,componentId:l=on(t.displayName,t.parentComponentId),displayName:c=Ge(e)}=t,u=t.displayName&&t.componentId?Me(t.displayName)+"-"+t.componentId:t.componentId||l,d=r&&o.attrs?o.attrs.concat(i).filter(Boolean):i;let{shouldForwardProp:p}=t;if(r&&o.shouldForwardProp){const e=o.shouldForwardProp;if(t.shouldForwardProp){const n=t.shouldForwardProp;p=(t,r)=>e(t,r)&&n(t,r)}else p=e}const f=new Vt(n,u,r?o.componentStyle:void 0);function h(e,t){return function(e,t,n){const{attrs:r,componentStyle:o,defaultProps:a,foldedComponentIds:i,styledComponentId:l,target:c}=e,u=s().useContext(tn),d=en(),p=e.shouldForwardProp||d.shouldForwardProp,f=_e(t,u,a)||Re;let h,m;{const e=s().useRef(null),n=e.current;if(null!==n&&n[1]===f&&n[2]===d.styleSheet&&n[3]===d.stylis&&n[7]===o&&function(e,t,n){const r=e,o=t;let a=0;for(const i in o)if(nn.call(o,i)&&(a++,r[i]!==o[i]))return!1;return a===n}(n[0],t,n[4]))h=n[5],m=n[6];else{h=function(e,t,n){const r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),o=e.length>1;for(let a=0;a<e.length;a++){const n=e[a],i=st(n)?n(o?Object.assign({},r):r):n;for(const e in i)"className"===e?r.className=dt(r.className,i[e]):"style"===e?r.style=Object.assign(Object.assign({},r.style),i[e]):e in t&&void 0===t[e]||(r[e]=i[e])}return"className"in t&&"string"==typeof t.className&&(r.className=dt(r.className,t.className)),r}(r,t,f),m=o.generateAndInjectStyles(h,d.styleSheet,d.stylis);let n=0;for(const e in t)nn.call(t,e)&&n++;e.current=[t,f,d.styleSheet,d.stylis,n,h,m,o]}}const g=h.as||c,v=function(e,t,n,r){const o={};for(const a in e)void 0===e[a]||"$"===a[0]||"as"===a||"theme"===a&&e.theme===n||("forwardedAs"===a?o.as=e.forwardedAs:r&&!r(a,t)||(o[a]=e[a]));return o}(h,g,f,p);let y=dt(i,l);return m&&(y+=" "+m),h.className&&(y+=" "+h.className),v[qe(g)&&g.includes("-")?"class":"className"]=y,n&&(v.ref=n),(0,s().createElement)(g,v)}(m,e,t)}h.displayName=c;let m=s().forwardRef(h);return m.attrs=d,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=p,m.foldedComponentIds=r?dt(o.foldedComponentIds,o.styledComponentId):"",m.styledComponentId=u,m.target=r?o.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(const o of n)ht(e,o,!0);return e}({},o.defaultProps,e):e}}),mt(m,()=>`.${m.styledComponentId}`),a&&lt(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var ln=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function sn(e,t){const n=[e[0]];for(let r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}const cn=e=>(Ot.add(e),e);function un(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(st(e)||ft(e))return cn(Bt(sn(Oe,[e,...n])));const o=e;return 0===n.length&&1===o.length&&"string"==typeof o[0]?Bt(o):cn(Bt(sn(o,n)))}function dn(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Re;if(!t)throw Ce(1,t);const r=function(r){for(var o=arguments.length,a=new Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];return e(t,n,un(r,...a))};return r.attrs=r=>dn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>dn(e,t,Object.assign(Object.assign({},n),r)),r}const pn=e=>dn(an,e),fn=pn;ln.forEach(e=>{fn[e]=pn(e)});class hn{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){const n=e[t];if(st(n)&&!ut(n))return!1}return!0}(e),zt.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){const o=this.componentId;if(this.isStatic){if(n.hasNameForId(o,o+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{const a=this.computeRules(e,t,n,r);n.insertRules(o,a.name,a.rules)}return}const a=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&a){const t=a.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){const o=pt(Bt(this.rules,t,n,r)),a={name:this.componentId+e,rules:r(o,"")};return this.instanceRules.set(e,a),a}rebuildGroup(e){const t=this.componentId;e.clearRules(t);for(const n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}}function mn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const o=un(e,...n),a=`sc-global-${We(JSON.stringify(o))}`,i=new hn(o,a),l=e=>{const t=en(),n=s().useContext(tn);let r;{const e=s().useRef(null);null===e.current&&(e.current=t.styleSheet.allocateGSInstance(a)),r=e.current}t.styleSheet.server&&c(r,e,t.styleSheet,n,t.stylis);{const o=i.isStatic?[r,t.styleSheet,i]:[r,e,t.styleSheet,n,t.stylis,i],l=s().useRef(i);s().useLayoutEffect(()=>{t.styleSheet.server||(l.current!==i&&(t.styleSheet.clearRules(a),l.current=i),c(r,e,t.styleSheet,n,t.stylis))},o),s().useLayoutEffect(()=>()=>{t.styleSheet.server||i.removeStyles(r,t.styleSheet)},[r,t.styleSheet,i])}return t.styleSheet.server&&i.instanceRules.delete(r),null};function c(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,je,n,o);else{const a=Object.assign(Object.assign({},t),{theme:_e(t,r,l.defaultProps)});i.renderStyles(e,a,n,o)}}return s().memo(l)}var gn;class vn{constructor(e,t){var n=this;this[gn]=!0,this.inject=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Xt;const r=n.getName(t);if(!e.hasNameForId(n.id,r)){const o=t(n.rules,r,"@keyframes");e.insertRules(n.id,r,o)}},this.name=e,this.id=Se+e,this.rules=t,Ne(this.id),mt(this,()=>{throw Ce(12,String(this.name))})}getName(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xt;return e.hash?this.name+Fe(+e.hash>>>0):this.name}}function yn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const o=pt(un(e,...n)),a=We(o);return new vn(a,o)}gn=Mt;var bn=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,xn=/^[\\/]{2}/;function wn(e,t){return t+e.replace(/\\/g,"/")}var kn="popstate";function Sn(e){return"object"===typeof e&&null!=e&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function jn(){return zn(function(e,t){let n=t.state?.masked,{pathname:r,search:o,hash:a}=n||e.location;return Pn("",{pathname:r,search:o,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default",n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)},function(e,t){return"string"===typeof t?t:Nn(t)},null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function Cn(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function En(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function Tn(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Pn(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?Ln(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10),mask:o}}function Nn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function Ln(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function zn(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:o=document.defaultView,v5Compat:a=!1}=r,i=o.history,l="POP",s=null,c=u();function u(){return(i.state||{idx:null}).idx}function d(){l="POP";let e=u(),t=null==e?null:e-c;c=e,s&&s({action:l,location:f.location,delta:t})}function p(e){return On(o,e)}null==c&&(c=0,i.replaceState({...i.state,idx:c},""));let f={get action(){return l},get location(){return e(o,i)},listen(e){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(kn,d),s=e,()=>{o.removeEventListener(kn,d),s=null}},createHref:e=>t(o,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){l="PUSH";let r=Sn(e)?e:Pn(f.location,e,t);n&&n(r,e),c=u()+1;let d=Tn(r,c),p=f.createHref(r.mask||r);try{i.pushState(d,"",p)}catch(h){if(h instanceof DOMException&&"DataCloneError"===h.name)throw h;o.location.assign(p)}a&&s&&s({action:l,location:f.location,delta:1})},replace:function(e,t){l="REPLACE";let r=Sn(e)?e:Pn(f.location,e,t);n&&n(r,e),c=u();let o=Tn(r,c),d=f.createHref(r.mask||r);i.replaceState(o,"",d),a&&s&&s({action:l,location:f.location,delta:0})},go:e=>i.go(e)};return f}function On(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r="http://localhost";e&&(r="null"!==e.location.origin?e.location.origin:e.location.href),Cn(r,"No window.location.(origin|href) available to create URL");let o="string"===typeof t?t:Nn(t);return o=o.replace(/ $/,"%20"),!n&&xn.test(o)&&(o=r+o),new URL(o,r)}new WeakMap;function Rn(e,t){return _n(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function _n(e,t,n,r,o){let a=Jn(("string"===typeof t?Ln(t):t).pathname||"/",n);if(null==a)return null;let i=o??Dn(e),l=null,s=Qn(a);for(let c=0;null==l&&c<i.length;++c)l=qn(i[c],s,r);return l}function Dn(e){let t=An(e);return function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(t),t}function An(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=function(e,a){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,l=arguments.length>3?arguments[3]:void 0,s={relativePath:void 0===l?e.path||"":l,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};if(s.relativePath.startsWith("/")){if(!s.relativePath.startsWith(r)&&i)return;Cn(s.relativePath.startsWith(r),`Absolute route path "${s.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(r.length)}let c=or([r,s.relativePath]),u=n.concat(s);e.children&&e.children.length>0&&(Cn(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),An(e.children,t,u,c,i)),(null!=e.path||e.index)&&t.push({path:c,score:Vn(c,e.index),routesMeta:u.map((e,t)=>{let[n,r]=Kn(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of Mn(e.path))a(e,t,!0,n);else a(e,t)}),t}function Mn(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return o?[a,""]:[a];let i=Mn(r.join("/")),l=[];return l.push(...i.map(e=>""===e?a:[a,e].join("/"))),o&&l.push(...i),l.map(t=>e.startsWith("/")&&""===t?"/":t)}var In=/^:[\w-]+$/,$n=3,Fn=2,Un=1,Hn=10,Bn=-2,Wn=e=>"*"===e;function Vn(e,t){let n=e.split("/"),r=n.length;return n.some(Wn)&&(r+=Bn),t&&(r+=Fn),n.filter(e=>!Wn(e)).reduce((e,t)=>e+(In.test(t)?$n:""===t?Un:Hn),r)}function qn(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,o={},a="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,c="/"===a?t:t.slice(a.length)||"/",u={path:e.relativePath,caseSensitive:e.caseSensitive,end:s},d=e.matcher&&e.compiledParams?Yn(u,c,e.matcher,e.compiledParams):Gn(u,c),p=e.route;if(!d&&s&&n&&!r[r.length-1].route.index&&(d=Gn({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!d)return null;Object.assign(o,d.params),i.push({params:o,pathname:or([a,d.pathname]),pathnameBase:ir(or([a,d.pathnameBase])),route:p}),"/"!==d.pathnameBase&&(a=or([a,d.pathnameBase]))}return i}function Gn(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Kn(e.path,e.caseSensitive,e.end);return Yn(e,t,n,r)}function Yn(e,t,n,r){let o=t.match(n);if(!o)return null;let a=o[0],i=ar(a,1),l=o.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=l[n]||"";i=ar(a.slice(0,a.length-e.length),1)}const s=l[n];return e[r]=o&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:a,pathnameBase:i,pattern:e}}function Kn(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];En("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n,o,a)=>{if(r.push({paramName:t,isOptional:null!=n}),n){let t=a.charAt(o+e.length);return t&&"/"!==t?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Qn(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return En(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Jn(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function Xn(e,t){let n=ar(t).split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}function Zn(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function er(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function tr(e){let t=er(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function nr(e,t,n){let r,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=Ln(e):(r={...e},Cn(!r.pathname||!r.pathname.includes("?"),Zn("?","pathname","search",r)),Cn(!r.pathname||!r.pathname.includes("#"),Zn("#","pathname","hash",r)),Cn(!r.search||!r.search.includes("#"),Zn("#","search","hash",r)));let a,i=""===e||""===r.pathname,l=i?"/":r.pathname;if(null==l)a=n;else{let e=t.length-1;if(!o&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}a=e>=0?t[e]:"/"}let s=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:r,search:o="",hash:a=""}="string"===typeof e?Ln(e):e;return r?(r=rr(r),t=r.startsWith("/")||r.startsWith("\\")?Xn(r.substring(1),"/"):Xn(r,n)):t=n,{pathname:t,search:lr(o),hash:sr(a)}}(r,a),c=l&&"/"!==l&&l.endsWith("/"),u=(i||"."===l)&&n.endsWith("/");return s.pathname.endsWith("/")||!c&&!u||(s.pathname+="/"),s}var rr=e=>e.replace(/[\\/]{2,}/g,"/"),or=e=>rr(e.join("/"));function ar(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e.length;for(;n>t&&47===e.charCodeAt(n-1);)n--;return n===e.length?e:e.slice(0,n)}var ir=e=>ar(e).replace(/^\/*/,"/"),lr=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",sr=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";var cr=class{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function ur(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}function dr(e){let t=e.map(e=>e.route.path).filter(Boolean);return or(t)||"/"}var pr="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;function fr(e,t){let n=e;if("string"!==typeof n||!bn.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,o=!1;if(pr)try{let e=new URL(window.location.href),r=xn.test(n)?new URL(wn(n,e.protocol)):new URL(n),a=Jn(r.pathname,t);r.origin===e.origin&&null!=a?n=a+r.search+r.hash:o=!0}catch(a){En(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:n}}Symbol("Uninstrumented");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var hr=new URL("http://localhost");function mr(e){if(e.createURL)return e.createURL("/");try{return new URL(e.createHref("/"),hr)}catch{return hr}}function gr(e,t){return e.origin===t.origin&&("null"!==e.origin||e.protocol===t.protocol&&e.host===t.host)}function vr(e,t,n,r){let o=null;try{o=null==e?null:new URL(e,n)}catch{}let a=new URL(t,n),i=null!=o&&!gr(o,n),l=!gr(a,n);if("reject"===r){if(i||l)throw new Error("External navigation is not allowed")}else if(l&&(null==o||!function(e,t){if(e.startsWith("//"))return!0;let n=t.protocol.toLowerCase();return!!e.toLowerCase().startsWith(n)&&(""===t.host||e.slice(n.length).startsWith("//"))}(e,o)||!gr(o,a)))throw new Error("External navigation is not allowed")}var yr=["POST","PUT","PATCH","DELETE"],br=(new Set(yr),["GET",...yr]);new Set(br),Symbol("ResetLoaderData");new WeakMap,new WeakMap,new WeakMap,new WeakMap;var xr=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function wr(e){try{return xr.includes(new URL(e).protocol)}catch{return!1}}var kr=s().createContext(null);kr.displayName="DataRouter";var Sr=s().createContext(null);Sr.displayName="DataRouterState";var jr=s().createContext(!1);function Cr(){return s().useContext(jr)}var Er=s().createContext({isTransitioning:!1});Er.displayName="ViewTransition";var Tr=s().createContext(new Map);Tr.displayName="Fetchers";var Pr=s().createContext(null);Pr.displayName="Await";var Nr=s().createContext(null);Nr.displayName="Navigation";var Lr=s().createContext(null);Lr.displayName="Location";var zr=s().createContext({outlet:null,matches:[],isDataRoute:!1});zr.displayName="Route";var Or=s().createContext(null);Or.displayName="RouteError";var Rr="REACT_ROUTER_ERROR";function _r(){return null!=s().useContext(Lr)}function Dr(){return Cn(_r(),"useLocation() may be used only in the context of a <Router> component."),s().useContext(Lr).location}var Ar="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Mr(e){s().useContext(Nr).static||s().useLayoutEffect(e)}function Ir(){let{isDataRoute:e}=s().useContext(zr);return e?function(){let{router:e}=Qr("useNavigate"),t=Xr("useNavigate"),n=s().useRef(!1);Mr(()=>{n.current=!0});let r=s().useCallback(async function(r){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};En(n.current,Ar),n.current&&("number"===typeof r?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...o}))},[e,t]);return r}():function(){Cn(_r(),"useNavigate() may be used only in the context of a <Router> component.");let e=s().useContext(kr),{basename:t,navigator:n}=s().useContext(Nr),{matches:r}=s().useContext(zr),{pathname:o}=Dr(),a=JSON.stringify(tr(r)),i=s().useRef(!1);Mr(()=>{i.current=!0});let l=s().useCallback(function(r){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(En(i.current,Ar),!i.current)return;if("number"===typeof r)return void n.go(r);let s=nr(r,JSON.parse(a),o,"path"===l.relative);null==e&&"/"!==t&&(s.pathname="/"===s.pathname?t:or([t,s.pathname])),vr("string"===typeof r?r:Nn(r),n.createHref(s),mr(n),"reject"),(l.replace?n.replace:n.push)(s,l.state,l)},[t,n,a,o,e]);return l}()}s().createContext(null);function $r(){let{matches:e}=s().useContext(zr),t=e[e.length-1];return t?.params??{}}function Fr(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:n}=s().useContext(zr),{pathname:r}=Dr(),o=JSON.stringify(tr(n));return s().useMemo(()=>nr(e,JSON.parse(o),r,"path"===t),[e,o,r,t])}function Ur(e,t,n){Cn(_r(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=s().useContext(Nr),{matches:o}=s().useContext(zr),a=o[o.length-1],i=a?a.params:{},l=a?a.pathname:"/",c=a?a.pathnameBase:"/",u=a&&a.route;{let e=u&&u.path||"";to(l,!u||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let d,p=Dr();if(t){let e="string"===typeof t?Ln(t):t;Cn("/"===c||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=p;let f=d.pathname||"/",h=f;if("/"!==c){let e=c.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(e.length).join("/")}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):Rn(e,{pathname:h});En(u||null!=m,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),En(null==m||void 0!==m[m.length-1].route.element||void 0!==m[m.length-1].route.Component||void 0!==m[m.length-1].route.lazy,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=Yr(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},i,e.params),pathname:or([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:or([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathnameBase])})),o,n);return t&&g?s().createElement(Lr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...d},navigationType:"POP"}},g):g}function Hr(){let e=Zr(),t=ur(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},i=null;return console.error("Error handled by React Router default ErrorBoundary:",e),i=s().createElement(s().Fragment,null,s().createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),s().createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",s().createElement("code",{style:a},"ErrorBoundary")," or"," ",s().createElement("code",{style:a},"errorElement")," prop on your route.")),s().createElement(s().Fragment,null,s().createElement("h2",null,"Unexpected Application Error!"),s().createElement("h3",{style:{fontStyle:"italic"}},t),n?s().createElement("pre",{style:o},n):null,i)}var Br=s().createElement(Hr,null),Wr=class extends s().Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&"object"===typeof e&&e&&"digest"in e&&"string"===typeof e.digest){const t=function(e){if(e.startsWith(`${Rr}:ROUTE_ERROR_RESPONSE:{`))try{let t=JSON.parse(e.slice(40));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText)return new cr(t.status,t.statusText,t.data)}catch{}}(e.digest);t&&(e=t)}let t=void 0!==e?s().createElement(zr.Provider,{value:this.props.routeContext},s().createElement(Or.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?s().createElement(qr,{error:e},t):t}};Wr.contextType=jr;var Vr=new WeakMap;function qr(e){let{children:t,error:n}=e,{basename:r,navigator:o}=s().useContext(Nr);if("object"===typeof n&&n&&"digest"in n&&"string"===typeof n.digest){let e=function(e){if(e.startsWith(`${Rr}:REDIRECT:{`))try{let t=JSON.parse(e.slice(28));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText&&"string"===typeof t.location&&"boolean"===typeof t.reloadDocument&&"boolean"===typeof t.replace)return t}catch{}}(n.digest);if(e){let t=Vr.get(n);if(t)throw t;let a=fr(e.location,r),i=a.absoluteURL||a.to;if(vr(e.location,i,mr(o),"allow-explicit"),wr(i))throw new Error("Invalid redirect location");if(pr&&!Vr.get(n)){if(!a.isExternal&&!e.reloadDocument){const t=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:e.replace}));throw Vr.set(n,t),t}window.location.href=i}return s().createElement("meta",{httpEquiv:"refresh",content:`0;url=${i}`})}}return t}function Gr(e){let{routeContext:t,match:n,children:r}=e,o=s().useContext(kr);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),s().createElement(zr.Provider,{value:t},r)}function Yr(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,r=n?.state;if(null==e){if(!r)return null;if(r.errors)e=r.matches;else{if(0!==t.length||r.initialized||!(r.matches.length>0))return null;e=r.matches}}let o=e,a=r?.errors;if(null!=a){let e=o.findIndex(e=>e.route.id&&void 0!==a?.[e.route.id]);Cn(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,e+1))}let i=!1,l=-1;if(n&&r){i=r.renderFallback;for(let e=0;e<o.length;e++){let t=o[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(l=e),t.route.id){let{loaderData:e,errors:a}=r,s=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||void 0===a[t.route.id]);if(t.route.lazy||s){n.isStatic&&(i=!0),o=l>=0?o.slice(0,l+1):[o[0]];break}}}}let c=n?.onError,u=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:dr(r.matches),errorInfo:t})}:void 0;return o.reduceRight((e,n,c)=>{let d,p=!1,f=null,h=null;r&&(d=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Br,i&&(l<0&&0===c?(to("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,h=null):l===c&&(p=!0,h=n.route.hydrateFallbackElement||null)));let m=t.concat(o.slice(0,c+1)),g=()=>{let t;return t=d?f:p?h:n.route.Component?s().createElement(n.route.Component,null):n.route.element?n.route.element:e,s().createElement(Gr,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||0===c)?s().createElement(Wr,{location:r.location,revalidation:r.revalidation,component:f,error:d,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:u}):g()},null)}function Kr(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Qr(e){let t=s().useContext(kr);return Cn(t,Kr(e)),t}function Jr(e){let t=s().useContext(Sr);return Cn(t,Kr(e)),t}function Xr(e){let t=function(e){let t=s().useContext(zr);return Cn(t,Kr(e)),t}(e),n=t.matches[t.matches.length-1];return Cn(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Zr(){let e=s().useContext(Or),t=Jr("useRouteError"),n=Xr("useRouteError");return void 0!==e?e:t.errors?.[n]}var eo={};function to(e,t,n){t||eo[e]||(eo[e]=!0,En(!1,n))}var no={};function ro(e,t){e||no[t]||(no[t]=!0,console.warn(t))}(function e(){return e.c||(e.c=n.t(c(),2))})().useOptimistic;s().memo(oo);function oo(e){let{routes:t,manifest:n,future:r,state:o,isStatic:a,onError:i}=e;return Ur(t,void 0,{manifest:n,state:o,isStatic:a,onError:i,future:r})}function ao(e){Cn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function io(e){let{basename:t="/",children:n=null,location:r,navigationType:o="POP",navigator:a,static:i=!1,useTransitions:l}=e;Cn(!_r(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),u=s().useMemo(()=>({basename:c,navigator:a,static:i,useTransitions:l,future:{}}),[c,a,i,l]);"string"===typeof r&&(r=Ln(r));let{pathname:d="/",search:p="",hash:f="",state:h=null,key:m="default",mask:g}=r,v=s().useMemo(()=>{let e=Jn(d,c);return null==e?null:{location:{pathname:e,search:p,hash:f,state:h,key:m,mask:g},navigationType:o}},[c,d,p,f,h,m,o,g]);return En(null!=v,`<Router basename="${c}"> is not able to match the URL "${d}${p}${f}" because it does not start with the basename, so the <Router> won't render anything.`),null==v?null:s().createElement(Nr.Provider,{value:u},s().createElement(Lr.Provider,{children:n,value:v}))}function lo(e){let{children:t,location:n}=e;return Ur(so(t),n)}s().Component;function so(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];return s().Children.forEach(e,(e,r)=>{if(!s().isValidElement(e))return;let o=[...t,r];if(e.type===s().Fragment)return void n.push.apply(n,so(e.props.children,o));Cn(e.type===ao,`[${"string"===typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Cn(!e.props.index||!e.props.children,"An index route cannot have child routes.");let a={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=so(e.props.children,o)),n.push(a)}),n}var co="get",uo="application/x-www-form-urlencoded";function po(e){return"undefined"!==typeof HTMLElement&&e instanceof HTMLElement}var fo=null;var ho=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function mo(e){return null==e||ho.has(e)?e:(En(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${uo}"`),null)}function go(e,t){let n,r,o,a,i;if(po(l=e)&&"form"===l.tagName.toLowerCase()){let i=e.getAttribute("action");r=i?Jn(i,t):null,n=e.getAttribute("method")||co,o=mo(e.getAttribute("enctype"))||uo,a=new FormData(e)}else if(function(e){return po(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return po(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let i=e.form;if(null==i)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||i.getAttribute("action");if(r=l?Jn(l,t):null,n=e.getAttribute("formmethod")||i.getAttribute("method")||co,o=mo(e.getAttribute("formenctype"))||mo(i.getAttribute("enctype"))||uo,a=new FormData(i,e),!function(){if(null===fo)try{new FormData(document.createElement("form"),0),fo=!1}catch(e){fo=!0}return fo}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";a.append(`${e}x`,"0"),a.append(`${e}y`,"0")}else t&&a.append(t,r)}}else{if(po(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=co,r=null,o=uo,i=e}var l;return a&&"text/plain"===o&&(i=a,a=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:a,body:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vo(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}Symbol("SingleFetchRedirect");function yo(e,t,n,r){let o="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:"/"===o.pathname?o.pathname=`_root.${r}`:t&&"/"===Jn(o.pathname,t)?o.pathname=`${ar(t)}/_root.${r}`:o.pathname=`${ar(o.pathname)}.${r}`,o}async function bo(e,t){if(e.id in t)return t[e.id];try{let n=await(import(e.module));return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xo(e){return null!=e&&"string"===typeof e.page}function wo(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function ko(e,t,n,r,o,a){let i=(e,t)=>!n[t]||e.route.id!==n[t].route.id,l=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===a?t.filter((e,t)=>i(e,t)||l(e,t)):"data"===a?t.filter((t,a)=>{let s=r.routes[t.route.id];if(!s||!s.hasLoader)return!1;if(i(t,a)||l(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0}):[]}function So(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let o=[r.module];return r.clientActionModule&&(o=o.concat(r.clientActionModule)),r.clientLoaderModule&&(o=o.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(o=o.concat(r.hydrateFallbackModule)),r.imports&&(o=o.concat(r.imports)),o}).flat(1),[...new Set(r)];var r}function jo(e,t){let n=new Set,r=new Set(t);return e.reduce((e,o)=>{if(t&&!xo(o)&&"script"===o.as&&o.href&&r.has(o.href))return e;let a=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(o));return n.has(a)||(n.add(a),e.push({key:a,link:o})),e},[])}function Co(e,t){return"lazy"===e.mode&&!0===t}function Eo(){let e=s().useContext(kr);return vo(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function To(){let e=s().useContext(Sr);return vo(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Po=s().createContext(void 0);function No(){let e=s().useContext(Po);return vo(e,"You must render this element inside a <HydratedRouter> element"),e}function Lo(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function zo(e,t,n){if(n&&!Ao)return[e[0]];if(t){let n=e.findIndex(e=>void 0!==t[e.route.id]);return e.slice(0,n+1)}return e}Po.displayName="FrameworkContext";function Oo(e){let{page:t,...n}=e,r=Cr(),{nonce:o}=No(),{router:a}=Eo(),i=s().useMemo(()=>Rn(a.routes,t,a.basename),[a.routes,t,a.basename]);return i?(null==n.nonce&&o&&(n={...n,nonce:o}),r?s().createElement(_o,{page:t,matches:i,...n}):s().createElement(Do,{page:t,matches:i,...n})):null}function Ro(e){let{manifest:t,routeModules:n}=No(),[r,o]=s().useState([]);return s().useEffect(()=>{let r=!1;return async function(e,t,n){return jo((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await bo(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(wo).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(e,t,n).then(e=>{r||o(e)}),()=>{r=!0}},[e,t,n]),r}function _o(e){let{page:t,matches:n,...r}=e,o=Dr(),{future:a}=No(),{basename:i}=Eo(),l=s().useMemo(()=>{if(t===o.pathname+o.search+o.hash)return[];let e=yo(t,i,a.v8_trailingSlashAwareDataRequests,"rsc"),r=!1,l=[];for(let t of n)"function"===typeof t.route.shouldRevalidate?r=!0:l.push(t.route.id);return r&&l.length>0&&e.searchParams.set("_routes",l.join(",")),[e.pathname+e.search]},[i,a.v8_trailingSlashAwareDataRequests,t,o,n]);return s().createElement(s().Fragment,null,l.map(e=>s().createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...r})))}function Do(e){let{page:t,matches:n,...r}=e,o=Dr(),{future:a,manifest:i,routeModules:l}=No(),{basename:c}=Eo(),{loaderData:u,matches:d}=To(),p=s().useMemo(()=>ko(t,n,d,i,o,"data"),[t,n,d,i,o]),f=s().useMemo(()=>ko(t,n,d,i,o,"assets"),[t,n,d,i,o]),h=s().useMemo(()=>{if(t===o.pathname+o.search+o.hash)return[];let e=new Set,r=!1;if(n.forEach(t=>{let n=i.routes[t.route.id];n&&n.hasLoader&&(!p.some(e=>e.route.id===t.route.id)&&t.route.id in u&&l[t.route.id]?.shouldRevalidate||n.hasClientLoader?r=!0:e.add(t.route.id))}),0===e.size)return[];let s=yo(t,c,a.v8_trailingSlashAwareDataRequests,"data");return r&&e.size>0&&s.searchParams.set("_routes",n.filter(t=>e.has(t.route.id)).map(e=>e.route.id).join(",")),[s.pathname+s.search]},[c,a.v8_trailingSlashAwareDataRequests,u,o,i,p,n,t,l]),m=s().useMemo(()=>So(f,i),[f,i]),g=Ro(f);return s().createElement(s().Fragment,null,h.map(e=>s().createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...r})),m.map(e=>s().createElement("link",{key:e,rel:"modulepreload",href:e,...r})),g.map(e=>{let{key:t,link:n}=e;return s().createElement("link",{key:t,nonce:r.nonce,...n,crossOrigin:n.crossOrigin??r.crossOrigin})}))}var Ao=!1;function Mo(e){let{manifest:t,serverHandoffString:n,isSpaMode:r,renderMeta:o,routeDiscovery:a,ssr:i,nonce:l}=No(),{router:c,static:u,staticContext:d}=Eo(),{matches:p}=To(),f=Cr(),h=Co(a,i);null==e.nonce&&l&&(e={...e,nonce:l}),o&&(o.didRenderScripts=!0);let m=zo(p,null,r);s().useEffect(()=>{Ao=!0},[]);let g=s().useMemo(()=>{if(f)return null;let r=d?`window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",o=u?`${t.hmr?.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}${h?"":`import ${JSON.stringify(t.url)}`};\n${m.map((e,n)=>{let r=`route${n}`,o=t.routes[e.route.id];vo(o,`Route ${e.route.id} not found in manifest`);let{clientActionModule:a,clientLoaderModule:i,clientMiddlewareModule:l,hydrateFallbackModule:s,module:c}=o,u=[...a?[{module:a,varName:`${r}_clientAction`}]:[],...i?[{module:i,varName:`${r}_clientLoader`}]:[],...l?[{module:l,varName:`${r}_clientMiddleware`}]:[],...s?[{module:s,varName:`${r}_HydrateFallback`}]:[],{module:c,varName:`${r}_main`}];return 1===u.length?`import * as ${r} from ${JSON.stringify(c)};`:[u.map(e=>`import * as ${e.varName} from "${e.module}";`).join("\n"),`const ${r} = {${u.map(e=>`...${e.varName}`).join(",")}};`].join("\n")}).join("\n")}\n  ${h?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,o=new Set(t.state.matches.map(e=>e.route.id)),a=t.state.location.pathname.split("/").filter(Boolean),i=["/"];for(a.pop();a.length>0;)i.push(`/${a.join("/")}`),a.pop();i.forEach(e=>{let n=_n(t.routes,e,t.basename||"/",!1,t.branches);n&&n.forEach(e=>o.add(e.route.id))});let l=[...o].reduce((e,t)=>Object.assign(e,{[t]:r.routes[t]}),{});return{...r,routes:l,sri:!!n||void 0}}(t,c),null,2)};`:""}\n  window.__reactRouterRouteModules = {${m.map((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`).join(",")}};\n\nimport(${JSON.stringify(t.entry.module)});`:" ";return s().createElement(s().Fragment,null,s().createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:r},type:void 0}),s().createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:o},type:"module",async:!0}))},[]),v=Ao||f?[]:[...new Set(t.entry.imports.concat(So(m,t,{includeHydrateFallback:!0})))],y="object"===typeof t.sri?t.sri:{};return ro(!f,"The <Scripts /> element is a no-op when using RSC and can be safely removed."),Ao||f?null:s().createElement(s().Fragment,null,"object"===typeof t.sri?s().createElement("script",{...e,"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:y})}}):null,h?null:s().createElement("link",{rel:"modulepreload",href:t.url,crossOrigin:e.crossOrigin,integrity:y[t.url],nonce:e.nonce,suppressHydrationWarning:!0}),s().createElement("link",{rel:"modulepreload",href:t.entry.module,crossOrigin:e.crossOrigin,integrity:y[t.entry.module],nonce:e.nonce,suppressHydrationWarning:!0}),v.map(t=>s().createElement("link",{key:t,rel:"modulepreload",href:t,crossOrigin:e.crossOrigin,integrity:y[t],nonce:e.nonce,suppressHydrationWarning:!0})),g)}function Io(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)})}}s().Component;function $o(e){let{error:t,isOutsideRemixApp:n}=e,{nonce:r}=No();console.error(t);let o,a=s().createElement("script",{nonce:r,dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      '}});if(ur(t))return s().createElement(Fo,{title:"Unhandled Thrown Response!"},s().createElement("h1",{style:{fontSize:"24px"}},t.status," ",t.statusText),a);if(t instanceof Error)o=t;else{let e=null==t?"Unknown Error":"object"===typeof t&&"toString"in t?t.toString():JSON.stringify(t);o=new Error(e)}return s().createElement(Fo,{title:"Application Error!",isOutsideRemixApp:n},s().createElement("h1",{style:{fontSize:"24px"}},"Application Error"),s().createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},o.stack),a)}function Fo(e){let{title:t,renderScripts:n,isOutsideRemixApp:r,children:o}=e,{routeModules:a}=No();return a.root?.Layout&&!r?o:s().createElement("html",{lang:"en"},s().createElement("head",null,s().createElement("meta",{charSet:"utf-8"}),s().createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),s().createElement("title",null,t)),s().createElement("body",null,s().createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},o,n?s().createElement(Mo,null):null)))}var Uo="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{Uo&&(window.__reactRouterVersion="7.18.4")}catch(bh){}function Ho(e){let{basename:t,children:n,useTransitions:r,window:o}=e,a=s().useRef();null==a.current&&(a.current=jn({window:o,v5Compat:!0}));let i=a.current,[l,c]=s().useState({action:i.action,location:i.location}),u=s().useCallback(e=>{!1===r?c(e):s().startTransition(()=>c(e))},[r]);return s().useLayoutEffect(()=>i.listen(u),[i,u]),s().createElement(io,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i,useTransitions:r})}var Bo=s().forwardRef(function(e,t){let{onClick:n,discover:r="render",prefetch:o="none",relative:a,reloadDocument:i,replace:l,mask:c,state:u,target:d,to:p,preventScrollReset:f,viewTransition:h,defaultShouldRevalidate:m,...g}=e,{basename:v,navigator:y,useTransitions:b}=s().useContext(Nr),x="string"===typeof p&&bn.test(p),w=fr(p,v);p=w.to;let k=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Cn(_r(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=s().useContext(Nr),{hash:o,pathname:a,search:i}=Fr(e,{relative:t}),l=a;return"/"!==n&&(l="/"===a?n:or([n,a])),r.createHref({pathname:l,search:i,hash:o})}(p,{relative:a}),S=Dr(),j=null;if(c){let e=nr(c,[],S.mask?S.mask.pathname:"/",!0);"/"!==v&&(e.pathname="/"===e.pathname?v:or([v,e.pathname])),j=y.createHref(e)}let[C,E,T]=function(e,t){let n=s().useContext(Po),[r,o]=s().useState(!1),[a,i]=s().useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:p}=t,f=s().useRef(null);s().useEffect(()=>{if("render"===e&&i(!0),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{i(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),s().useEffect(()=>{if(r){let e=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(e)}}},[r]);let h=()=>{o(!0)},m=()=>{o(!1),i(!1)};return n?"intent"!==e?[a,f,{}]:[a,f,{onFocus:Lo(l,h),onBlur:Lo(c,m),onMouseEnter:Lo(u,h),onMouseLeave:Lo(d,m),onTouchStart:Lo(p,h)}]:[!1,f,{}]}(o,g),P=function(e){let{target:t,replace:n,mask:r,state:o,preventScrollReset:a,relative:i,viewTransition:l,defaultShouldRevalidate:c,useTransitions:u}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=Ir(),p=Dr(),f=Fr(e,{relative:i});return s().useCallback(h=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(h,t)){h.preventDefault();let t=void 0!==n?n:Nn(p)===Nn(f),m=()=>d(e,{replace:t,mask:r,state:o,preventScrollReset:a,relative:i,viewTransition:l,defaultShouldRevalidate:c});u?s().startTransition(()=>m()):m()}},[p,d,f,n,r,o,t,e,a,i,l,c,u])}(p,{replace:l,mask:c,state:u,target:d,preventScrollReset:f,relative:a,viewTransition:h,defaultShouldRevalidate:m,useTransitions:b});let N=!(w.isExternal||i),L=s().createElement("a",{...g,...T,href:(N?j:void 0)||w.absoluteURL||k,onClick:N?function(e){n&&n(e),e.defaultPrevented||P(e)}:n,ref:Io(t,E),target:d,"data-discover":x||"render"!==r?void 0:"true"});return C&&!x?s().createElement(s().Fragment,null,L,s().createElement(Oo,{page:k})):L});Bo.displayName="Link";var Wo=s().forwardRef(function(e,t){let{"aria-current":n="page",caseSensitive:r=!1,className:o="",end:a=!1,style:i,to:l,viewTransition:c,children:u,...d}=e,p=Fr(l,{relative:d.relative}),f=Dr(),h=s().useContext(Sr),{navigator:m,basename:g}=s().useContext(Nr),v=null!=h&&function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=s().useContext(Er);Cn(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Go("useViewTransitionState"),o=Fr(e,{relative:t});if(!n.isTransitioning)return!1;let a=Jn(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=Jn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return null!=Gn(o.pathname,i)||null!=Gn(o.pathname,a)}(p)&&!0===c,y=m.encodeLocation?m.encodeLocation(p).pathname:p.pathname,b=f.pathname,x=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;r||(b=b.toLowerCase(),x=x?x.toLowerCase():null,y=y.toLowerCase()),x&&g&&(x=Jn(x,g)||x);const w="/"!==y&&y.endsWith("/")?y.length-1:y.length;let k,S=b===y||!a&&b.startsWith(y)&&"/"===b.charAt(w),j=null!=x&&(x===y||!a&&x.startsWith(y)&&"/"===x.charAt(y.length)),C={isActive:S,isPending:j,isTransitioning:v},E=S?n:void 0;k="function"===typeof o?o(C):[o,S?"active":null,j?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let T="function"===typeof i?i(C):i;return s().createElement(Bo,{...d,"aria-current":E,className:k,ref:t,style:T,to:l,viewTransition:c},"function"===typeof u?u(C):u)});Wo.displayName="NavLink";var Vo=s().forwardRef((e,t)=>{let{discover:n="render",fetcherKey:r,navigate:o,reloadDocument:a,replace:i,state:l,method:c=co,action:u,onSubmit:d,relative:p,preventScrollReset:f,viewTransition:h,defaultShouldRevalidate:m,...g}=e,{useTransitions:v}=s().useContext(Nr),y=Qo(),b=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:n}=s().useContext(Nr),r=s().useContext(zr);Cn(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),a={...Fr(e||".",{relative:t})},i=Dr();if(null==e){a.search=i.search;let e=new URLSearchParams(a.search),t=e.getAll("index");if(t.some(e=>""===e)){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();a.search=n?`?${n}`:""}}e&&"."!==e||!o.route.index||(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index");"/"!==n&&(a.pathname="/"===a.pathname?n:or([n,a.pathname]));return Nn(a)}(u,{relative:p}),x="get"===c.toLowerCase()?"get":"post",w="string"===typeof u&&bn.test(u);return s().createElement("form",{ref:t,method:x,action:b,onSubmit:a?d:e=>{if(d&&d(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||c,a=()=>y(t||e.currentTarget,{fetcherKey:r,method:n,navigate:o,replace:i,state:l,relative:p,preventScrollReset:f,viewTransition:h,defaultShouldRevalidate:m});v&&!1!==o?s().startTransition(()=>a()):a()},...g,"data-discover":w||"render"!==n?void 0:"true"})});function qo(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Go(e){let t=s().useContext(kr);return Cn(t,qo(e)),t}Vo.displayName="Form";var Yo=0,Ko=()=>`__${String(++Yo)}__`;function Qo(){let{router:e}=Go("useSubmit"),{basename:t}=s().useContext(Nr),n=Xr("useRouteId"),r=e.fetch,o=e.navigate;return s().useCallback(async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:i,method:l,encType:s,formData:c,body:u}=go(e,t);if(!1===a.navigate){let e=a.fetcherKey||Ko();await r(e,n,a.action||i,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||l,formEncType:a.encType||s,flushSync:a.flushSync})}else await o(a.action||i,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||l,formEncType:a.encType||s,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,o,t,n])}const Jo=fn.div`
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--space-md);
`,Xo=fn.section`
  padding: var(--space-4xl) 0;
`,Zo=Jo;h();const ea=(0,s().createContext)();class ta{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}let na;const ra=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,oa={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xa9","&#169;":"\xa9","&reg;":"\xae","&#174;":"\xae","&hellip;":"\u2026","&#8230;":"\u2026","&#x2F;":"/","&#47;":"/"},aa=e=>oa[e];let ia={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(ra,aa),transDefaultProps:void 0};const la={},sa=(e,t,n,r)=>{pa(n)&&la[n]||(pa(n)&&(la[n]=new Date),((e,t,n,r)=>{const o=[n,{code:t,...r||{}}];if(e?.services?.logger?.forward)return e.services.logger.forward(o,"warn","react-i18next::",!0);pa(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),e?.services?.logger?.warn?e.services.logger.warn(...o):console?.warn&&console.warn(...o)})(e,t,n,r))},ca=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}},ua=(e,t,n)=>{e.loadNamespaces(t,ca(e,n))},da=(e,t,n,r)=>{if(pa(n)&&(n=[n]),e.options.preload&&e.options.preload.indexOf(t)>-1)return ua(e,n,r);n.forEach(t=>{e.options.ns.indexOf(t)<0&&e.options.ns.push(t)}),e.loadLanguages(t,ca(e,r))},pa=e=>"string"===typeof e,fa={t:(e,t)=>{if(pa(t))return t;if("object"===typeof(n=t)&&null!==n&&pa(t.defaultValue))return t.defaultValue;var n;if("function"===typeof e)return"";if(Array.isArray(e)){const t=e[e.length-1];return"function"===typeof t?"":t}return e},ready:!1},ha=()=>()=>{},ma=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{i18n:n}=t,{i18n:r,defaultNS:o}=(0,s().useContext)(ea)||{},a=n||r||na;a&&!a.reportNamespaces&&(a.reportNamespaces=new ta),a||sa(a,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next or by passing it via props or context. In monorepo setups, make sure there is only one instance of react-i18next.");const i=(0,s().useMemo)(()=>({...ia,...a?.options?.react,...t}),[a,t]),{useSuspense:l,keyPrefix:c}=i,u=e||o||a?.options?.defaultNS,d=pa(u)?[u]:u||["translation"],p=(0,s().useMemo)(()=>d,d);a?.reportNamespaces?.addUsedNamespaces?.(p);const h=(0,s().useRef)(0),m=(0,s().useCallback)(e=>{if(!a)return ha;const{bindI18n:t,bindI18nStore:n}=i,r=()=>{h.current+=1,e()};return t&&a.on(t,r),n&&a.store.on(n,r),()=>{t&&t.split(" ").forEach(e=>a.off(e,r)),n&&n.split(" ").forEach(e=>a.store.off(e,r))}},[a,i]),g=(0,s().useRef)(),v=(0,s().useCallback)(()=>{if(!a)return fa;const e=!(!a.isInitialized&&!a.initializedStoreOnce)&&p.every(e=>function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(t,r)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):(sa(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0)}(e,a,i)),n=t.lng||a.language,r=h.current,o=g.current;if(o&&o.ready===e&&o.lng===n&&o.keyPrefix===c&&o.revision===r)return o;const l={t:a.getFixedT(n,"fallback"===i.nsMode?p:p[0],c,{scopeNs:p}),ready:e,lng:n,keyPrefix:c,revision:r};return g.current=l,l},[a,p,c,i,t.lng]),[y,b]=(0,s().useState)(0),{t:x,ready:w}=(0,f().useSyncExternalStore)(m,v,v);(0,s().useEffect)(()=>{if(a&&!w&&!l){const e=()=>b(e=>e+1);t.lng?da(a,t.lng,p,e):ua(a,p,e)}},[a,t.lng,p,w,l,y]);const k=a||{},S=(0,s().useRef)(null),j=(0,s().useRef)(),C=e=>{const t=Object.getOwnPropertyDescriptors(e);t.__original&&delete t.__original;const n=Object.create(Object.getPrototypeOf(e),t);if(!Object.prototype.hasOwnProperty.call(n,"__original"))try{Object.defineProperty(n,"__original",{value:e,writable:!1,enumerable:!1,configurable:!1})}catch(r){}return n},E=(0,s().useMemo)(()=>{const e=k,t=e&&`${(n=e).language}|${n.resolvedLanguage}|${n.languages?.join(",")}`;var n;let r=e;e&&(S.current&&S.current.__original===e?j.current!==t?(r=C(e),S.current=r,j.current=t):r=S.current:(r=C(e),S.current=r,j.current=t));const o=w||l?x:function(){return sa(a,"USE_T_BEFORE_READY","useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t."),x(...arguments)},i=[o,r,w];return i.t=o,i.i18n=r,i.ready=w,i},[x,k,w,k.resolvedLanguage,k.language,k.languages]);if(a&&l&&!w){let e=!1;try{e=!1}catch(bh){}throw e&&sa(a,"SUSPENDED_WHILE_LOADING","useTranslation: suspended while translations are loading (useSuspense is true by default). Add a <Suspense> boundary above this component, or set react.useSuspense: false in the i18next init options. https://react.i18next.com/latest/usetranslation-hook"),new Promise(e=>{const n=()=>e();t.lng?da(a,t.lng,p,n):ua(a,p,n)})}return E};var ga=function(){return ga=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},ga.apply(this,arguments)};var va="",ya=null,ba=null,xa=null;function wa(){va="",null!==ya&&ya.disconnect(),null!==ba&&(window.clearTimeout(ba),ba=null)}function ka(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function Sa(){var e=null;if("#"===va)e=document.body;else{var t=va.replace("#","");null===(e=document.getElementById(t))&&"#top"===va&&(e=document.body)}if(null!==e){xa(e);var n=e.getAttribute("tabindex");return null!==n||ka(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==n||ka(e)||(e.blur(),e.removeAttribute("tabindex")),wa(),!0}return!1}function ja(e){return s().forwardRef(function(t,n){var r="";"string"===typeof t.to&&t.to.includes("#")?r="#"+t.to.split("#").slice(1).join("#"):"object"===typeof t.to&&"string"===typeof t.to.hash&&(r=t.to.hash);var o={};e===Wo&&(o.isActive=function(e,t){return e&&e.isExact&&t.hash===r});var a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(t,["scroll","smooth","timeout","elementId"]);return s().createElement(e,ga({},o,a,{onClick:function(e){var n;wa(),va=t.elementId?"#"+t.elementId:r,t.onClick&&t.onClick(e),""===va||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(xa=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},n=t.timeout,window.setTimeout(function(){!1===Sa()&&(null===ya&&(ya=new MutationObserver(Sa)),ya.observe(document,{attributes:!0,childList:!0,subtree:!0}),ba=window.setTimeout(function(){wa()},n||1e4))},0))},ref:n}),t.children)})}var Ca=ja(Bo);ja(Wo);u();const Ea=fn.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  min-width: 0;
`,Ta=fn(Ca)`
  display: inline-flex;
  align-items: center;
  gap: 3px;

  white-space: nowrap;
  text-decoration: none;
  direction: inherit;

  font-size: clamp(1.25rem, 2vw, 1.65rem);
  font-weight: 800;
  line-height: 1.3;
  letter-spacing: -0.025em;

  color: var(--color-primary);

  transition:
    transform 0.25s ease,
    opacity 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 5px;
    border-radius: 4px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`,Pa=fn.span`
  display: inline-block;
`,Na=fn.span`
  color: var(--color-secondary);
  font-size: 1.3em;
  line-height: 1;
`;const La=function(){const{t:e}=ma();return(0,l().jsx)(Ea,{children:(0,l().jsxs)(Ta,{to:"/#home",smooth:!0,"aria-label":e("logo.me"),children:[(0,l().jsx)(Pa,{children:e("logo.me")}),(0,l().jsx)(Na,{"aria-hidden":"true",children:"."})]})})},za=(0,s().createContext)(),Oa=e=>{let{children:t}=e;const[n,r]=(0,s().useState)(()=>localStorage.getItem("theme")||"light");(0,s().useEffect)(()=>{document.documentElement.setAttribute("data-theme",n),localStorage.setItem("theme",n)},[n]);return(0,l().jsx)(za.Provider,{value:{theme:n,toggleTheme:()=>{r(e=>"light"===e?"dark":"light")}},children:t})},Ra=fn.div`
  display: inline-flex;
  align-items: center;
  width: max-content;
  max-width: 100%;
  flex-shrink: 0;
`,_a=fn.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  width: max-content;
  min-height: 40px;
  padding: 8px 12px;

  border: 1px solid
    ${e=>{let{$open:t}=e;return t?"var(--color-primary)":"transparent"}};

  border-radius: 10px;

  background: ${e=>{let{$open:t}=e;return t?"var(--color-background-secondary)":"transparent"}};

  color: var(--color-text-primary, var(--color-text));

  font: inherit;
  font-size: 0.95rem;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;

  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    color: var(--color-primary);
    background: var(--color-background-secondary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }
`,Da=fn.svg`
  width: 17px;
  height: 17px;
  flex-shrink: 0;

  transform: rotate(
    ${e=>{let{$open:t}=e;return t?"180deg":"0deg"}}
  );

  transition: transform 0.25s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Aa=fn.div`
  position: fixed;
  z-index: 2000;

  display: flex;
  flex-direction: column;
  gap: 8px;

  width: min(290px, calc(100vw - 24px));
  padding: 10px;

  max-height: calc(100dvh - 24px);
  overflow-y: auto;

  background: var(--color-background-tertiary);
  border: 1px solid var(--color-border);
  border-radius: 14px;

  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.14);

  animation: settingsFadeIn 0.18s ease both;

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
`,Ma=fn.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  width: 100%;
  min-height: 58px;
  padding: 12px 14px;

  border: 1px solid transparent;
  border-radius: 10px;

  background: var(--color-background-secondary);
  color: var(--color-text-primary, var(--color-text));

  font: inherit;
  text-align: start;
  cursor: pointer;

  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: var(--color-primary);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: -2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Ia=fn.span`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,$a=fn.span`
  font-size: 0.9rem;
  font-weight: 600;
`,Fa=fn.span`
  font-size: 0.78rem;
  color: var(
    --color-text-secondary,
    var(--color-text-light, var(--color-text))
  );
`,Ua=fn.span`
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-primary);
  white-space: nowrap;
`,Ha=e=>{let{mobile:t=!1}=e;const{i18n:n}=ma(),{theme:r,toggleTheme:a}=(0,s().useContext)(za),[i,c]=(0,s().useState)(!1),[u,d]=(0,s().useState)({top:0,left:0}),p=(0,s().useRef)(null),f=(0,s().useRef)(null),h=(0,s().useId)(),m="dark"===r,g=(n.resolvedLanguage||n.language||"ar").startsWith("ar"),v=(0,s().useCallback)(()=>{var e;const t=p.current;if(!t)return;const n=t.getBoundingClientRect(),r=Math.min(290,window.innerWidth-24),o=g?n.right-r:n.left,a=Math.max(12,Math.min(o,window.innerWidth-r-12)),i=(null===(e=f.current)||void 0===e?void 0:e.offsetHeight)||150,l=window.innerHeight-n.bottom,s=n.top,c=l<i+12&&s>l?Math.max(12,n.top-i-8):Math.min(n.bottom+8,window.innerHeight-12);d({top:c,left:a})},[g]);(0,s().useLayoutEffect)(()=>{i&&v()},[i,v]),(0,s().useEffect)(()=>{if(!i)return;const e=e=>{var t,n;const r=null===(t=p.current)||void 0===t?void 0:t.contains(e.target),o=null===(n=f.current)||void 0===n?void 0:n.contains(e.target);r||o||c(!1)},t=e=>{var t;"Escape"===e.key&&(c(!1),null===(t=p.current)||void 0===t||t.focus())},n=()=>{v()};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",t),window.addEventListener("resize",n),window.addEventListener("scroll",n,!0),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",t),window.removeEventListener("resize",n),window.removeEventListener("scroll",n,!0)}},[i,v]);return(0,l().jsxs)(Ra,{"data-mobile":t,children:[(0,l().jsxs)(_a,{ref:p,type:"button",$open:i,"aria-expanded":i,"aria-controls":i?h:void 0,"aria-haspopup":"true",onClick:()=>c(e=>!e),children:[(0,l().jsx)("span",{children:g?"\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a":"Settings"}),(0,l().jsx)(Da,{$open:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,l().jsx)("path",{d:"m6 9 6 6 6-6"})})]}),i&&(0,o().createPortal)((0,l().jsxs)(Aa,{ref:f,id:h,dir:g?"rtl":"ltr",style:{top:u.top,left:u.left},children:[(0,l().jsxs)(Ma,{type:"button",onClick:async()=>{try{await n.changeLanguage(g?"en":"ar"),c(!1)}catch(e){console.error("Failed to change language:",e)}},children:[(0,l().jsxs)(Ia,{children:[(0,l().jsx)($a,{children:g?"\u062a\u063a\u064a\u064a\u0631 \u0627\u0644\u0644\u063a\u0629":"Change language"}),(0,l().jsx)(Fa,{children:g?"\u0627\u0644\u0639\u0631\u0628\u064a\u0629":"English"})]}),(0,l().jsx)(Ua,{children:g?"English":"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"})]}),(0,l().jsxs)(Ma,{type:"button",onClick:()=>{a(),c(!1)},children:[(0,l().jsxs)(Ia,{children:[(0,l().jsx)($a,{children:g?"\u062a\u063a\u064a\u064a\u0631 \u0627\u0644\u0645\u0638\u0647\u0631":"Change theme"}),(0,l().jsx)(Fa,{children:m?g?"\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u062f\u0627\u0643\u0646":"Dark mode":g?"\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0641\u0627\u062a\u062d":"Light mode"})]}),(0,l().jsx)(Ua,{children:m?g?"\u0641\u0627\u062a\u062d":"Light":g?"\u062f\u0627\u0643\u0646":"Dark"})]})]}),document.body)]})},Ba=fn.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,Wa=fn.nav`
  display: flex;
  align-items: center;
  gap: clamp(12px, 2vw, 30px);

  @media (max-width: 900px) {
    display: none;
  }
`,Va=fn(Ca)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px 4px;
  white-space: nowrap;
  text-decoration: none;

  color: ${e=>{let{$active:t}=e;return t?"var(--color-primary)":"var(--color-text-primary, var(--color-text))"}};

  font-size: 0.95rem;
  font-weight: ${e=>{let{$active:t}=e;return t?700:500}};

  transition: color 0.25s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: 3px;
    inset-inline-start: 0;

    width: ${e=>{let{$active:t}=e;return t?"100%":"0"}};
    height: 3px;
    border-radius: 4px;

    background: var(--color-primary);
    transition: width 0.25s ease;
  }

  &:hover {
    color: var(--color-primary);
  }

  &:hover::after {
    width: 100%;
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
    border-radius: 4px;
  }
`,qa=fn.button`
  display: none;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;
  flex-shrink: 0;

  border: 1px solid var(--color-border);
  border-radius: 12px;

  background: var(--color-background-secondary);
  color: var(--color-primary);

  cursor: pointer;

  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;

  &:hover {
    border-color: var(--color-primary);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }

  @media (max-width: 900px) {
    display: inline-flex;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Ga=fn.nav`
  display: none;

  @media (max-width: 900px) {
    position: absolute;
    top: 100%;
    inset-inline: 0;
    z-index: 1000;

    display: ${e=>{let{$open:t}=e;return t?"flex":"none"}};
    flex-direction: column;

    gap: 6px;
    padding: 18px clamp(16px, 5vw, 35px) 24px;

    max-height: calc(100dvh - var(--header-height));
    overflow-y: auto;

    background: var(--color-background-tertiary);
    border-bottom: 1px solid var(--color-border);
    box-shadow: var(--shadow-sm);
  }
`,Ya=fn(Ca)`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 13px 16px;

  border-radius: 10px;
  text-decoration: none;

  font-size: 0.95rem;
  font-weight: ${e=>{let{$active:t}=e;return t?700:500}};

  color: ${e=>{let{$active:t}=e;return t?"var(--color-primary)":"var(--color-text-primary, var(--color-text))"}};

  background: ${e=>{let{$active:t}=e;return t?"var(--color-background-secondary)":"transparent"}};

  transition:
    background-color 0.25s ease,
    color 0.25s ease;

  &:hover {
    background: var(--color-background-secondary);
    color: var(--color-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: -2px;
  }
`,Ka=fn.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  margin-top: 12px;
  padding: 14px 8px 4px;

  border-top: 1px solid var(--color-border);
`,Qa=(fn.span`
  font-size: 0.85rem;
  font-weight: 600;

  color: var(
    --color-text-secondary,
    var(--color-text)
  );
`,e=>{let{open:t}=e;return(0,l().jsx)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:t?(0,l().jsxs)(l().Fragment,{children:[(0,l().jsx)("path",{d:"M18 6 6 18"}),(0,l().jsx)("path",{d:"M6 6 18 18"})]}):(0,l().jsxs)(l().Fragment,{children:[(0,l().jsx)("path",{d:"M4 6h16"}),(0,l().jsx)("path",{d:"M4 12h16"}),(0,l().jsx)("path",{d:"M4 18h16"})]})})}),Ja=[{id:"home",label:"nav.home",to:"/#home"},{id:"about",label:"nav.about",to:"/about"},{id:"projects",label:"nav.projects",to:"/projects"},{id:"contact",label:"nav.contact",to:"/contact"}];const Xa=function(e){var t,n,r;let{activeLink:o}=e;const{t:a,i18n:i}=ma(),c=Dr(),[u,d]=(0,s().useState)(!1),p=(0,s().useRef)(null),f=null!==(t=null===(n=i.resolvedLanguage)||void 0===n?void 0:n.startsWith("ar"))&&void 0!==t?t:null===(r=i.language)||void 0===r?void 0:r.startsWith("ar");return(0,s().useEffect)(()=>{d(!1)},[c.pathname,c.hash]),(0,s().useEffect)(()=>{if(!u)return;const e=e=>{p.current&&!p.current.contains(e.target)&&d(!1)},t=e=>{"Escape"===e.key&&d(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",t)}},[u]),(0,l().jsxs)(Ba,{ref:p,children:[(0,l().jsx)(Wa,{"aria-label":f?"\u0627\u0644\u062a\u0646\u0642\u0644 \u0627\u0644\u0631\u0626\u064a\u0633\u064a":"Main navigation",children:Ja.map(e=>{const t=o===e.id;return(0,l().jsx)(Va,{to:e.to,smooth:!0,$active:t,"aria-current":t?"page":void 0,children:a(e.label)},e.id)})}),(0,l().jsx)(qa,{type:"button","aria-label":u?f?"\u0625\u063a\u0644\u0627\u0642 \u0627\u0644\u0642\u0627\u0626\u0645\u0629":"Close menu":f?"\u0641\u062a\u062d \u0627\u0644\u0642\u0627\u0626\u0645\u0629":"Open menu","aria-expanded":u,"aria-controls":"mobile-navigation",onClick:()=>d(e=>!e),children:(0,l().jsx)(Qa,{open:u})}),(0,l().jsxs)(Ga,{id:"mobile-navigation",$open:u,"aria-label":f?"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u0648\u0627\u0644":"Mobile navigation",children:[Ja.map(e=>{const t=o===e.id;return(0,l().jsx)(Ya,{to:e.to,smooth:!0,$active:t,"aria-current":t?"page":void 0,onClick:()=>d(!1),children:a(e.label)},e.id)}),(0,l().jsx)(Ka,{children:(0,l().jsx)(Ha,{mobile:!0})})]})]})},Za=fn.header`
  position: fixed;
  inset-block-start: 0;
  inset-inline: 0;

  z-index: 999;
  display: flex;
  align-items: center;

  width: 100%;
  min-height: var(--header-height);

  background-color: ${e=>{let{$scrolled:t}=e;return t?"var(--color-background-tertiary)":"var(--color-background)"}};

  border-bottom: 1px solid
    ${e=>{let{$scrolled:t}=e;return t?"var(--color-border)":"transparent"}};

  box-shadow: ${e=>{let{$scrolled:t}=e;return t?"var(--shadow-sm)":"none"}};

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  @media (max-width: 768px) {
    min-height: var(--header-height);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,ei=fn(Zo)`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 20px;
  width: 100%;
  min-height: var(--header-height);

  & > :first-child {
    justify-self: start;
  }

  & > :nth-child(2) {
    justify-self: center;
  }

  & > :last-child {
    justify-self: end;
  }

  @media (max-width: 900px) {
    display: flex;
    justify-content: space-between;
    gap: 12px;

    & > :last-child {
      display: none;
    }
  }
`;const ti=function(){const e=Dr(),[t,n]=(0,s().useState)(!1),r="/"===e.pathname?"home":e.pathname.split("/").filter(Boolean)[0]||"home";return(0,s().useEffect)(()=>{const e=()=>{n(window.scrollY>15)};return e(),window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e)}},[]),(0,l().jsx)(Za,{$scrolled:t,children:(0,l().jsxs)(ei,{children:[(0,l().jsx)(La,{}),(0,l().jsx)(Xa,{activeLink:r}),(0,l().jsx)(Ha,{})]})})};var ni={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ri=s().createContext&&s().createContext(ni),oi=["attr","size","title"];function ai(){return ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ai.apply(null,arguments)}function ii(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function li(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ii(Object(n),!0).forEach(function(t){si(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ii(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function si(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ci(e){return e&&e.map((e,t)=>s().createElement(e.tag,li({key:t},e.attr),ci(e.child)))}function ui(e){return t=>s().createElement(di,ai({attr:li({},e.attr)},t),ci(e.child))}function di(e){var t=t=>{var n,r=e.attr,o=e.size,a=e.title,i=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,oi),l=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),s().createElement("svg",ai({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,i,{className:n,style:li(li({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&s().createElement("title",null,a),e.children)};return void 0!==ri?s().createElement(ri.Consumer,null,e=>t(e)):t(ni)}function pi(e){return ui({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}function fi(e){return ui({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm169.5 338.9c-3.5 8.1-18.1 14-44.8 18.2-1.4 1.9-2.5 9.8-4.3 15.9-1.1 3.7-3.7 5.9-8.1 5.9h-.2c-6.2 0-12.8-2.9-25.8-2.9-17.6 0-23.7 4-37.4 13.7-14.5 10.3-28.4 19.1-49.2 18.2-21 1.6-38.6-11.2-48.5-18.2-13.8-9.7-19.8-13.7-37.4-13.7-12.5 0-20.4 3.1-25.8 3.1-5.4 0-7.5-3.3-8.3-6-1.8-6.1-2.9-14.1-4.3-16-13.8-2.1-44.8-7.5-45.5-21.4-.2-3.6 2.3-6.8 5.9-7.4 46.3-7.6 67.1-55.1 68-57.1 0-.1.1-.2.2-.3 2.5-5 3-9.2 1.6-12.5-3.4-7.9-17.9-10.7-24-13.2-15.8-6.2-18-13.4-17-18.3 1.6-8.5 14.4-13.8 21.9-10.3 5.9 2.8 11.2 4.2 15.7 4.2 3.3 0 5.5-.8 6.6-1.4-1.4-23.9-4.7-58 3.8-77.1C183.1 100 230.7 96 244.7 96c.6 0 6.1-.1 6.7-.1 34.7 0 68 17.8 84.3 54.3 8.5 19.1 5.2 53.1 3.8 77.1 1.1.6 2.9 1.3 5.7 1.4 4.3-.2 9.2-1.6 14.7-4.2 4-1.9 9.6-1.6 13.6 0 6.3 2.3 10.3 6.8 10.4 11.9.1 6.5-5.7 12.1-17.2 16.6-1.4.6-3.1 1.1-4.9 1.7-6.5 2.1-16.4 5.2-19 11.5-1.4 3.3-.8 7.5 1.6 12.5.1.1.1.2.2.3.9 2 21.7 49.5 68 57.1 4 1 7.1 5.5 4.9 10.8z"},child:[]}]})(e)}function hi(e){return ui({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M510.846 392.673c-5.211 12.157-27.239 21.089-67.36 27.318-2.064 2.786-3.775 14.686-6.507 23.956-1.625 5.566-5.623 8.869-12.128 8.869l-.297-.005c-9.395 0-19.203-4.323-38.852-4.323-26.521 0-35.662 6.043-56.254 20.588-21.832 15.438-42.771 28.764-74.027 27.399-31.646 2.334-58.025-16.908-72.871-27.404-20.714-14.643-29.828-20.582-56.241-20.582-18.864 0-30.736 4.72-38.852 4.72-8.073 0-11.213-4.922-12.422-9.04-2.703-9.189-4.404-21.263-6.523-24.13-20.679-3.209-67.31-11.344-68.498-32.15a10.627 10.627 0 0 1 8.877-11.069c69.583-11.455 100.924-82.901 102.227-85.934.074-.176.155-.344.237-.515 3.713-7.537 4.544-13.849 2.463-18.753-5.05-11.896-26.872-16.164-36.053-19.796-23.715-9.366-27.015-20.128-25.612-27.504 2.437-12.836 21.725-20.735 33.002-15.453 8.919 4.181 16.843 6.297 23.547 6.297 5.022 0 8.212-1.204 9.96-2.171-2.043-35.936-7.101-87.29 5.687-115.969C158.122 21.304 229.705 15.42 250.826 15.42c.944 0 9.141-.089 10.11-.089 52.148 0 102.254 26.78 126.723 81.643 12.777 28.65 7.749 79.792 5.695 116.009 1.582.872 4.357 1.942 8.599 2.139 6.397-.286 13.815-2.389 22.069-6.257 6.085-2.846 14.406-2.461 20.48.058l.029.01c9.476 3.385 15.439 10.215 15.589 17.87.184 9.747-8.522 18.165-25.878 25.018-2.118.835-4.694 1.655-7.434 2.525-9.797 3.106-24.6 7.805-28.616 17.271-2.079 4.904-1.256 11.211 2.46 18.748.087.168.166.342.239.515 1.301 3.03 32.615 74.46 102.23 85.934 6.427 1.058 11.163 7.877 7.725 15.859z"},child:[]}]})(e)}function mi(e){return ui({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function gi(e){return ui({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function vi(e){return ui({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function yi(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z"},child:[]}]})(e)}function bi(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9"},child:[]},{tag:"circle",attr:{cx:"12",cy:"9",r:"2.5"},child:[]}]})(e)}function xi(e){return ui({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"},child:[]}]})(e)}function wi(e){return ui({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"},child:[]}]})(e)}function ki(e){return ui({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"},child:[]}]})(e)}const Si=fn.footer`
  width: 100%;
  background-color: var(--color-background-secondary);
  color: var(--color-text-primary);
  border-top: 1px solid var(--color-border);
`,ji=fn(Zo)`
  display: grid;
  grid-template-columns:
    minmax(0, 1.2fr)
    minmax(150px, 0.7fr)
    minmax(0, 1.1fr);

  align-items: start;
  gap: clamp(30px, 4vw, 65px);

  padding-block: clamp(48px, 6vw, 72px);

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 36px;
  }

  @media (max-width: 600px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 30px;

    padding-block: 38px 32px;
  }
`,Ci=fn.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 18px;
  min-width: 0;

  @media (max-width: 600px) {
    width: 100%;
    gap: 16px;
  }
`,Ei=fn(Ci)`
  @media (max-width: 950px) {
    grid-column: 1 / -1;
  }

  @media (max-width: 600px) {
    align-items: center;
    text-align: center;

    padding-bottom: 26px;
    border-bottom: 1px solid var(--color-border);
  }
`,Ti=fn.h2`
  margin: 0;

  color: var(--color-primary);

  font-size: clamp(1.45rem, 2.2vw, 1.85rem);
  font-weight: 700;
  line-height: 1.4;
`,Pi=fn.p`
  margin: 0;
  max-width: 360px;

  color: var(--color-text-secondary);

  font-size: 0.92rem;
  line-height: 1.9;

  @media (max-width: 600px) {
    max-width: 320px;
    font-size: 0.88rem;
  }
`,Ni=fn.h3`
  margin: 0;

  color: var(--color-text-primary);

  font-size: 1.04rem;
  font-weight: 700;
  line-height: 1.5;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`,Li=fn.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 12px;
  width: 100%;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    column-gap: 20px;
    row-gap: 16px;

    justify-items: start;
  }
`,zi=fn(Ca)`
  position: relative;

  display: inline-block;
  width: fit-content;

  padding: 2px 0;

  color: var(--color-text-secondary);
  background: transparent;

  border: none;
  border-radius: 0;

  font-size: 0.94rem;
  font-weight: 500;
  line-height: 1.7;

  text-decoration: none;

  transition: color 0.25s ease;

  &::after {
    content: "";

    position: absolute;
    inset-inline-start: 0;
    bottom: 0;

    width: 100%;
    height: 1px;

    background-color: var(--color-primary);

    transform: scaleX(0);
    transform-origin: right;

    transition: transform 0.25s ease;
  }

  &:hover {
    color: var(--color-primary);
    background: transparent;
  }

  &:hover::after,
  &:focus-visible::after {
    transform: scaleX(1);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
  }

  @media (max-width: 600px) {
    font-size: 0.92rem;
    min-height: 32px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::after {
      transition: none;
    }
  }
`,Oi=fn.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 10px;

  @media (max-width: 600px) {
    justify-content: center;
    gap: 9px;
  }
`,Ri=fn.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;

  flex-shrink: 0;

  border: 1px solid var(--color-border);
  border-radius: 12px;

  background-color: var(--color-background);

  /* Original brand color */
  color: var(--social-color, var(--color-primary));

  text-decoration: none;

  transition:
    transform 0.25s ease,
    background-color 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  & svg {
    display: block;

    width: 21px;
    height: 21px;

    fill: currentColor;
  }

  &:hover {
    transform: translateY(-3px);

    background-color: color-mix(
      in srgb,
      var(--social-color, var(--color-primary)) 8%,
      var(--color-background)
    );

    border-color: color-mix(
      in srgb,
      var(--social-color, var(--color-primary)) 35%,
      var(--color-border)
    );

    box-shadow: var(--shadow-sm);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }

  @media (max-width: 600px) {
    width: 42px;
    height: 42px;

    & svg {
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
`,_i=fn.div`
  display: flex;
  flex-direction: column;

  gap: 12px;
  width: 100%;

  @media (max-width: 600px) {
    gap: 0;

    padding: 6px 14px;

    background: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: 16px;
  }
`,Di=fn.div`
  display: flex;
  align-items: center;

  gap: 12px;
  min-width: 0;

  @media (max-width: 600px) {
    min-height: 60px;
    padding-block: 10px;

    &:not(:last-child) {
      border-bottom: 1px solid var(--color-border);
    }
  }
`,Ai=fn.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;

  flex-shrink: 0;

  border-radius: 11px;

  background-color: color-mix(
    in srgb,
    var(--icon-color, var(--color-primary)) 9%,
    var(--color-background)
  );

  color: var(--icon-color, var(--color-primary));

  & svg {
    display: block;
    width: 19px;
    height: 19px;
  }
`,Mi=fn.span`
  min-width: 0;

  color: var(--color-text-secondary);

  font-size: 0.9rem;
  line-height: 1.8;

  overflow-wrap: anywhere;
`,Ii=fn.a`
  color: inherit;
  text-decoration: none;

  transition: color 0.25s ease;

  &:hover {
    color: var(--color-primary);
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }
`,$i=fn.div`
  border-top: 1px solid var(--color-border);
`,Fi=fn(Zo)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-block: 21px;

  @media (max-width: 600px) {
    padding-block: 19px;
  }
`,Ui=fn.p`
  margin: 0;

  color: var(--color-text-secondary);

  font-size: 0.83rem;
  line-height: 1.8;

  text-align: center;
`,Hi={linkedin:{icon:(0,l().jsx)(mi,{}),color:"var(--color-linkedin, #0A66C2)"},github:{icon:(0,l().jsx)(vi,{}),color:"var(--color-github, var(--color-text-primary))"},whatsapp:{icon:(0,l().jsx)(pi,{}),color:"var(--color-whatsapp, #25D366)"},email:{icon:(0,l().jsx)(ki,{}),color:"var(--color-email, #EA4335)"},instagram:{icon:(0,l().jsx)(gi,{}),color:"var(--color-instgram, #E4405F)"},instgram:{icon:(0,l().jsx)(gi,{}),color:"var(--color-instgram, #E4405F)"},snapchat:{icon:(0,l().jsx)(fi,{}),color:"var(--color-snapchat, #FFCC00)"}},Bi=()=>{const{t:e}=ma(),t=e("home:footer.socialMedia.social",{returnObjects:!0}),n=Array.isArray(t)?t:[],r=e("home:footer.contactInfo.email.value"),o=e("home:footer.contactInfo.tel.value"),a=e("home:footer.contactInfo.location.value"),i=(new Date).getFullYear();return(0,l().jsxs)(Si,{children:[(0,l().jsxs)(ji,{children:[(0,l().jsxs)(Ei,{children:[(0,l().jsx)(Ti,{children:e("home:hero.name")}),(0,l().jsx)(Pi,{children:e("home:hero.introduction")}),(0,l().jsx)(Oi,{children:n.map(e=>{const t=Hi[String(e.id).toLowerCase()];return t&&e.href?(0,l().jsx)(Ri,{href:e.href,target:"_blank",rel:"noopener noreferrer","aria-label":e.id,title:e.id,style:{"--social-color":t.color},children:t.icon},e.id):null})})]}),(0,l().jsxs)(Ci,{children:[(0,l().jsx)(Ni,{children:e("home:footer.quickLinks.title")}),(0,l().jsx)(Li,{"aria-label":e("home:footer.quickLinks.title"),children:[{id:"home",label:"nav.home",to:"/#home"},{id:"about",label:"nav.about",to:"/about"},{id:"projects",label:"nav.projects",to:"/projects"},{id:"contact",label:"nav.contact",to:"/contact"}].map(t=>(0,l().jsx)(zi,{to:t.to,smooth:!0,children:e(t.label)},t.id))})]}),(0,l().jsxs)(Ci,{children:[(0,l().jsx)(Ni,{children:e("home:footer.contactInfo.title")}),(0,l().jsxs)(_i,{children:[(0,l().jsxs)(Di,{children:[(0,l().jsx)(Ai,{style:{"--icon-color":"var(--color-email, #EA4335)"},children:(0,l().jsx)(yi,{})}),(0,l().jsx)(Mi,{dir:"ltr",children:(0,l().jsx)(Ii,{href:`mailto:${r}`,children:r})})]}),(0,l().jsxs)(Di,{children:[(0,l().jsx)(Ai,{style:{"--icon-color":"var(--color-whatsapp, #25D366)"},children:(0,l().jsx)(xi,{})}),(0,l().jsx)(Mi,{dir:"ltr",children:(0,l().jsx)(Ii,{href:`tel:${o.replace(/[^\d+]/g,"")}`,children:o})})]}),(0,l().jsxs)(Di,{children:[(0,l().jsx)(Ai,{style:{"--icon-color":"var(--color-primary)"},children:(0,l().jsx)(bi,{})}),(0,l().jsx)(Mi,{children:a})]})]})]})]}),(0,l().jsx)($i,{children:(0,l().jsx)(Fi,{children:(0,l().jsxs)(Ui,{children:["\xa9 ",i," ",e("home:footer.copyright")]})})})]})},Wi=()=>{const{pathname:e,hash:t}=Dr();return(0,s().useLayoutEffect)(()=>{t||window.scrollTo({top:0,left:0,behavior:"instant"})},[e,t]),null};function Vi(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(e)}function qi(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(e)}function Gi(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(e)}function Yi(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(e)}function Ki(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(e)}function Qi(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(e)}function Ji(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"},child:[]}]})(e)}function Xi(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"8",y1:"21",x2:"16",y2:"21"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12",y2:"21"},child:[]}]})(e)}function Zi(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(e)}function el(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(e)}function tl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"},child:[]},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"},child:[]},{tag:"line",attr:{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"},child:[]}]})(e)}function nl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(e)}function rl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(e)}function ol(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(e)}function al(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(e)}function il(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(e)}function ll(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(e)}function sl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(e)}function cl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]},{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"},child:[]}]})(e)}function ul(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(e)}function dl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(e)}function pl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(e)}function fl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"},child:[]}]})(e)}function hl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(e)}function ml(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(e)}function gl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(e)}function vl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"},child:[]}]})(e)}function yl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(e)}function bl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(e)}function xl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"17",x2:"17",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 7 17 7 17 17"},child:[]}]})(e)}function wl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"17",y1:"17",x2:"7",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 17 7 7 17 7"},child:[]}]})(e)}function kl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(e)}function Sl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 19 5 12 12 5"},child:[]}]})(e)}function jl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(e)}const Cl=fn.nav`
  width: 100%;
  min-width: 0;
  margin: 0;
  padding: 0;

  background: transparent;
  border: none;
  box-shadow: none;
`,El=fn(Zo)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  min-width: 0;
`,Tl=fn.ol`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;

  width: fit-content;
  max-width: 100%;
  min-width: 0;

  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 480px) {
    gap: 7px;
  }
`,Pl=fn.li`
  display: inline-flex;
  align-items: center;
  min-width: 0;
`,Nl=fn(Bo)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 32px;

  color: var(--color-text-secondary);
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1.6;
  text-decoration: none;

  transition: color 0.2s ease;

  svg {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    color: var(--color-primary);
  }

  &:hover {
    color: var(--color-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
    border-radius: 4px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Ll=fn.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  color: var(--color-text-light);
  opacity: 0.65;

  svg {
    width: 15px;
    height: 15px;
  }
`,zl=fn.span`
  display: inline-flex;
  align-items: center;

  min-width: 0;
  min-height: 32px;

  color: var(--color-primary);
  font-size: 0.85rem;
  font-weight: 700;
  line-height: 1.6;
  overflow-wrap: anywhere;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,Ol=e=>{let{value:t="",projectTitle:n=""}=e;const{t:r,i18n:o}=ma(["common","home","about","projects","contact"]),a=(o.resolvedLanguage||o.language||"ar").startsWith("ar"),i=a?fl:pl,s=["home","about","projects","contact"].includes(t)?t:null,c=r(`nav.${t}`,{ns:"common",defaultValue:t}),u="about"===t?r("about:pageTitle",{defaultValue:a?"\u0639\u0646\u064a":"About Me"}):s?r(`${s}:pageTitle`,{defaultValue:c}):c,d="projects"===t&&"string"===typeof n&&n.trim().length>0,p=r("pageTitle",{ns:"projects",defaultValue:a?"\u0645\u0634\u0627\u0631\u064a\u0639\u064a":"My Projects"}),f=r("nav.home",{ns:"common",defaultValue:a?"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629":"Home"});return(0,l().jsx)(Cl,{"aria-label":a?"\u0645\u0633\u0627\u0631 \u0627\u0644\u062a\u0646\u0642\u0644":"Breadcrumb navigation",dir:a?"rtl":"ltr",children:(0,l().jsx)(El,{children:(0,l().jsxs)(Tl,{children:[(0,l().jsx)(Pl,{children:(0,l().jsxs)(Nl,{to:"/",children:[(0,l().jsx)(rl,{"aria-hidden":"true"}),(0,l().jsx)("span",{children:f})]})}),(0,l().jsx)(Ll,{"aria-hidden":"true",children:(0,l().jsx)(i,{})}),d?(0,l().jsxs)(l().Fragment,{children:[(0,l().jsx)(Pl,{children:(0,l().jsx)(Nl,{to:"/projects",children:p})}),(0,l().jsx)(Ll,{"aria-hidden":"true",children:(0,l().jsx)(i,{})}),(0,l().jsx)(Pl,{"aria-current":"page",children:(0,l().jsx)(zl,{children:n})})]}):(0,l().jsx)(l().Fragment,{children:(0,l().jsx)(Pl,{"aria-current":"page",children:(0,l().jsx)(zl,{children:u})})})]})})})};const Rl=fn.a`
  color: var(--color-link);
  text-decoration: none;
  text-underline-offset: 4px;

  transition:
    color var(--transition-fast),
    opacity var(--transition-fast);

  &:hover {
    opacity: 0.85;
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
    border-radius: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,_l=fn.h1`
  margin: 0;

  color: var(--color-primary);
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  font-weight: 800;
  line-height: 1.4;
  letter-spacing: -0.015em;

  overflow-wrap: anywhere;
`,Dl=fn.h2`
  margin: 0;

  color: var(--color-secondary);
  font-size: clamp(1.5rem, 3vw, 2.1rem);
  font-weight: 750;
  line-height: 1.5;

  overflow-wrap: anywhere;
`,Al=fn.h3`
  margin: 0;

  color: var(--color-tertiary);
  font-size: clamp(1.15rem, 2vw, 1.45rem);
  font-weight: 700;
  line-height: 1.6;

  overflow-wrap: anywhere;
`,Ml=fn.p`
  margin: 0;

  color: var(--color-text-primary);
  font-size: var(--size-md);
  line-height: 1.9;

  overflow-wrap: anywhere;
`,Il=fn.p`
  margin: 0;

  color: var(--color-text-secondary);
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  line-height: 1.95;

  overflow-wrap: anywhere;
`,$l=(fn.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  gap: clamp(10px, 2vw, 18px);

  text-align: start;
`,e=>{let{value:t}=e;const{t:n}=ma();return(0,l().jsx)(Dl,{children:n(t)})}),Fl=e=>{let{value:t}=e;const{t:n}=ma();return(0,l().jsx)(Il,{children:n(t)})},Ul=fn.header`
  position: relative;
  isolation: isolate;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  width: 100%;
  min-width: 0;

  gap: clamp(24px, 3.5vw, 38px);

  padding-block:
    clamp(25px, 4vw, 42px)
    clamp(48px, 6vw, 78px);

  background: var(--color-background-secondary);
  border-bottom: 1px solid var(--color-border);

  /*
   * Ensure the Breadcrumb shares the exact
   * same background as the title and description.
   */

  > nav {
    width: 100%;
    margin: 0;
    padding: 0;

    background: transparent;
    background-image: none;

    border: 0;
    box-shadow: none;
  }

  /*
   * Page-specific typography.
   * This does not change headings elsewhere.
   */

  h1,
  h2 {
    margin: 0;

    color: var(--color-text-primary);
    font-size: clamp(2rem, 4.2vw, 3.1rem);
    font-weight: 800;
    line-height: 1.4;

    letter-spacing: -0.015em;
  }

  p {
    margin: 0;

    color: var(--color-text-secondary);
    font-size: clamp(0.92rem, 1.5vw, 1.04rem);
    line-height: 1.95;
  }

  @media (max-width: 768px) {
    gap: 26px;

    padding-block:
      25px
      52px;
  }

  @media (max-width: 480px) {
    gap: 22px;

    padding-block:
      20px
      43px;

    h1,
    h2 {
      font-size: clamp(1.8rem, 7vw, 2.2rem);
    }

    p {
      font-size: 0.9rem;
      line-height: 1.9;
    }
  }
`,Hl=fn.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  max-width: var(--container-width);
  min-width: 0;

  margin-inline: auto;
  padding-inline: clamp(16px, 4vw, 32px);

  gap: clamp(10px, 1.5vw, 15px);

  text-align: start;

  /*
   * Keep title and description together
   * and prevent overly long text lines.
   */

  > p {
    max-width: 760px;
  }

  @media (max-width: 600px) {
    gap: 10px;
    padding-inline: 16px;
  }
`,Bl=(fn.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  min-width: 0;

  gap: clamp(8px, 1.5vw, 13px);

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`,fn.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  max-width: 100%;
  min-height: 36px;

  padding: 7px 12px;

  border: 1px solid var(--color-border);
  border-radius: 9px;

  background: var(--color-background-secondary);
  color: var(--color-text-primary);

  font-size: var(--size-sm);
  font-weight: 500;
  line-height: 1.5;

  overflow-wrap: anywhere;
  cursor: default;

  transition:
    border-color var(--transition-fast),
    background-color var(--transition-fast),
    transform var(--transition-fast);

  svg {
    flex-shrink: 0;
    width: 17px;
    height: 17px;
  }

  @media (hover: hover) {
    &:hover {
      border-color: var(--color-primary);
      background: var(--color-background-tertiary);
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
`,fn.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 100%;
  min-width: 0;

  gap: var(--space-md);
`,fn.div`
  position: relative;

  width: 100%;
  min-width: 0;

  /*
   * Subtle edge indicators on smaller screens.
   * They do not block touch or mouse interaction.
   */

  @media (max-width: 768px) {
    &::before,
    &::after {
      content: "";

      position: absolute;
      top: 0;
      bottom: 0;

      width: 18px;

      pointer-events: none;
      z-index: 1;
    }

    &::before {
      inset-inline-start: 0;

      background: linear-gradient(
        to right,
        var(--color-background-secondary),
        transparent
      );
    }

    &::after {
      inset-inline-end: 0;

      background: linear-gradient(
        to left,
        var(--color-background-secondary),
        transparent
      );
    }

    &[dir="rtl"]::before {
      background: linear-gradient(
        to left,
        var(--color-background-secondary),
        transparent
      );
    }

    &[dir="rtl"]::after {
      background: linear-gradient(
        to right,
        var(--color-background-secondary),
        transparent
      );
    }
  }
`,fn.div`
  width: 100%;
  min-width: 0;

  overflow-x: auto;
  overflow-y: hidden;

  -webkit-overflow-scrolling: touch;
  overscroll-behavior-inline: contain;

  /*
   * Keep the scrollbar visible enough to indicate
   * that horizontal scrolling is available.
   */

  scrollbar-width: thin;
  scrollbar-color:
    var(--color-border)
    transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: 999px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  @media (max-width: 768px) {
    table {
      min-width: 620px;
    }
  }
`,e=>Array.isArray(e)?e:[]),Wl=(e,t)=>"string"===typeof e||"number"===typeof e?String(e):e&&"object"===typeof e&&!Array.isArray(e)?String((t?e.ar:e.en)||e.ar||e.en||""):"",Vl=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.find(e=>void 0!==e&&null!==e&&""!==e)},ql=e=>String(null!==e&&void 0!==e?e:"").replace(/[\u0660-\u0669]/g,e=>String("\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669".indexOf(e))).replace(/[\u06f0-\u06f9]/g,e=>String("\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9".indexOf(e))),Gl=e=>String(e).padStart(2,"0"),Yl=e=>{if(!e||Kl(e))return null;const t=ql(e).trim();let n,r=1,o=1,a="day",i=t.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})$/);if(i)n=Number(i[1]),r=Number(i[2]),o=Number(i[3]);else if(i=t.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/),i)o=Number(i[1]),r=Number(i[2]),n=Number(i[3]);else if(i=t.match(/^(\d{4})[-/.](\d{1,2})$/),i)n=Number(i[1]),r=Number(i[2]),a="month";else{if(i=t.match(/^(\d{4})$/),!i)return null;n=Number(i[1]),a="year"}const l=new Date(Date.UTC(n,r-1,o));return n<1900||n>2100||l.getUTCFullYear()!==n||l.getUTCMonth()!==r-1||l.getUTCDate()!==o?null:{date:l,year:n,month:r,day:o,precision:a}};function Kl(e){return/present|current|ongoing|now|\u062d\u062a\u0649 \u0627\u0644\u0622\u0646|\u062d\u0627\u0644\u064a\u0627|\u062d\u0627\u0644\u064a\u0627\u064b/i.test(String(e||""))}const Ql=e=>e?"year"===e.precision?String(e.year):"month"===e.precision?`${Gl(e.month)}/${e.year}`:`${Gl(e.day)}/${Gl(e.month)}/${e.year}`:"",Jl=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=Vl(e.startDate,e.start),n=Vl(e.endDate,e.end),r=!0===e.current||!0===e.ongoing||Kl(n)||Kl(e.date);if(t||n)return{start:Yl(t),end:Yl(n),current:r,single:null};const o=ql(Vl(e.date,e.period,"")).match(/\d{4}[-/.]\d{1,2}[-/.]\d{1,2}|\d{1,2}[-/.]\d{1,2}[-/.]\d{4}|\d{4}[-/.]\d{1,2}/g);return(null===o||void 0===o?void 0:o.length)>=2?{start:Yl(o[0]),end:Yl(o[1]),current:r,single:null}:{start:null,end:null,current:r,single:Yl(Vl(e.issuedDate,e.completionDate,e.date))}},Xl=e=>{const t=Jl(e);if(t.current)return Number.MAX_SAFE_INTEGER;const n=Yl(null===e||void 0===e?void 0:e.sortDate)||t.end||t.single||t.start;return n?n.date.getTime():-1/0},Zl=e=>[...Bl(e)].sort((e,t)=>Xl(t)-Xl(e)),es=864e5,ts=(e,t)=>{const{years:n,months:r,totalDays:o}=e;if(!o)return t?"\u063a\u064a\u0631 \u0645\u062d\u062f\u062f":"Not specified";const a=[];return n&&(t?a.push(1===n?"\u0633\u0646\u0629":2===n?"\u0633\u0646\u062a\u0627\u0646":`${n} \u0633\u0646\u0648\u0627\u062a`):a.push(`${n} ${1===n?"year":"years"}`)),r&&(t?a.push(1===r?"\u0634\u0647\u0631":2===r?"\u0634\u0647\u0631\u0627\u0646":`${r} \u0623\u0634\u0647\u0631`):a.push(`${r} ${1===r?"month":"months"}`)),a.length?a.join(t?" \u0648":" and "):t?"\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631":"Less than one month"},ns=(e,t)=>{const n={"full-time":{ar:"\u062f\u0648\u0627\u0645 \u0643\u0627\u0645\u0644",en:"Full-time"},"part-time":{ar:"\u062f\u0648\u0627\u0645 \u062c\u0632\u0626\u064a",en:"Part-time"},seasonal:{ar:"\u0639\u0645\u0644 \u0645\u0648\u0633\u0645\u064a",en:"Seasonal"},contract:{ar:"\u0639\u0645\u0644 \u0628\u0639\u0642\u062f",en:"Contract"},internship:{ar:"\u062a\u062f\u0631\u064a\u0628",en:"Internship"}}[String((null===e||void 0===e?void 0:e.employmentType)||"").toLowerCase()];return n?t?n.ar:n.en:Wl(null===e||void 0===e?void 0:e.employmentType,t)},rs={diploma:{ar:"\u0648\u062b\u064a\u0642\u0629 \u0627\u0644\u062f\u0628\u0644\u0648\u0645",en:"Diploma Document"},graduation:{ar:"\u0648\u062b\u064a\u0642\u0629 \u0627\u0644\u062a\u062e\u0631\u062c",en:"Graduation Document"},completion:{ar:"\u0634\u0647\u0627\u062f\u0629 \u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u062f\u0648\u0631\u0629",en:"Completion Certificate"},attendance:{ar:"\u0634\u0647\u0627\u062f\u0629 \u062d\u0636\u0648\u0631",en:"Attendance Certificate"},appreciation:{ar:"\u0634\u0647\u0627\u062f\u0629 \u0634\u0643\u0631 \u0648\u062a\u0642\u062f\u064a\u0631",en:"Appreciation Certificate"},participation:{ar:"\u0634\u0647\u0627\u062f\u0629 \u0645\u0634\u0627\u0631\u0643\u0629",en:"Participation Certificate"},experience:{ar:"\u0634\u0647\u0627\u062f\u0629 \u062e\u0628\u0631\u0629",en:"Experience Certificate"},volunteering:{ar:"\u0633\u062c\u0644 \u0627\u0644\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u0629",en:"Volunteer Hours Record"},certificate:{ar:"\u0627\u0644\u0634\u0647\u0627\u062f\u0629",en:"Certificate"},document:{ar:"\u0627\u0644\u0648\u062b\u064a\u0642\u0629",en:"Document"}},os=(e,t)=>{const n=rs[e]||rs.document;return t?n.ar:n.en},as=e=>{const t=String(e||"").split("?")[0].split("#")[0].match(/\.([a-z0-9]+)$/i);return t?t[1].toUpperCase():""},is=(e,t)=>as(e)||(t?"\u0635\u064a\u063a\u0629 \u063a\u064a\u0631 \u0645\u062d\u062f\u062f\u0629":"Unknown format"),ls=fn.main`
  --about-bg:
    var(--color-background, #f4f7fb);

  --about-card:
    var(--color-card-background, #ffffff);

  --about-section:
    var(--color-section-background, #edf3f9);

  --about-neutral:
    var(--color-card-background, #ffffff);

  --about-border:
    var(--color-border, #d5e0eb);

  --about-border-strong:
    var(--color-border-strong, #bfcfdf);

  --about-text:
    var(--color-text-primary, #172435);

  --about-muted:
    var(--color-text-secondary, #475569);

  --about-primary:
    var(--color-primary, #0065a8);

  --about-on-primary: #ffffff;

  width: 100%;
  min-width: 0;
  overflow-x: clip;

  background: var(--about-bg);
  color: var(--about-text);

  &,
  & * {
    box-shadow: none !important;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`,ss=fn(Zo)`
  display: flex;
  flex-direction: column;

  gap: clamp(45px, 6vw, 75px);

  padding-block:
    clamp(35px, 5vw, 60px)
    clamp(65px, 8vw, 100px);

  @media (max-width: 600px) {
    gap: 45px;
  }
`,cs=fn.section`
  min-width: 0;

  scroll-margin-top:
    calc(var(--header-height, 70px) + 20px);

  &.alternate {
    padding: clamp(18px, 3vw, 34px);

    border: 1px solid var(--about-border);
    border-radius: 15px;

    background: var(--about-section);
  }

  @media (max-width: 600px) {
    &.alternate {
      padding: 17px 12px;
    }
  }
`,us=fn.div`
  margin-bottom: 24px;

  .number {
    display: inline-flex;
    align-items: center;
    gap: 9px;

    margin-bottom: 9px;

    color: var(--about-primary);

    font-size: 0.83rem;
    font-weight: 800;
  }

  h2 {
    position: relative;

    margin: 0 0 12px;
    padding-inline-start: 16px;

    color: var(--about-text);

    font-size: clamp(
      1.45rem,
      3vw,
      2rem
    );

    line-height: 1.5;
  }

  h2::before {
    content: "";

    position: absolute;

    inset-inline-start: 0;
    top: 12%;
    bottom: 12%;

    width: 4px;
    border-radius: 4px;

    background: var(--about-primary);
  }

  p {
    max-width: 850px;
    margin: 0;

    color: var(--about-muted);

    font-size: 0.92rem;
    line-height: 1.95;
  }
`,ds=fn.article`
  min-width: 0;

  padding: clamp(
    18px,
    2.5vw,
    25px
  );

  border: 1px solid var(--about-border);
  border-radius: 12px;

  background: var(--about-card);

  transition: border-color 0.2s ease;

  &:hover {
    border-color:
      var(--about-border-strong);
  }
`,ps=fn.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 15px;
`,fs=fn.h1`
  display: block;
  visibility: visible;
  opacity: 1;

  width: 100%;

  margin: 18px 0 10px;
  padding: 0;

  color: var(--about-text);

  font-size: clamp(
    2rem,
    4vw,
    3rem
  );

  font-weight: 800;
  line-height: 1.45;
  text-align: start;
`,hs=fn.p`
  display: block;
  visibility: visible;
  opacity: 1;

  max-width: 850px;
  margin: 0;
  padding: 0;

  color: var(--about-muted);

  font-size: 1rem;
  font-weight: 400;
  line-height: 2;
  text-align: start;
`,ms=fn.div`
  display: grid;

  grid-template-columns:
    minmax(0, 1.35fr)
    minmax(270px, 0.8fr);

  gap: clamp(
    22px,
    4vw,
    40px
  );

  align-items: start;

  @media (max-width: 850px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,gs=fn.div`
  h2 {
    margin: 0 0 17px;

    color: var(--about-text);

    font-size: clamp(
      1.6rem,
      3vw,
      2.2rem
    );

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
`,vs=fn(ds)`
  h3 {
    display: flex;
    align-items: center;
    gap: 10px;

    margin: 0 0 12px;

    font-size: 1.08rem;
  }

  h3 svg {
    color: var(--about-primary);
  }
`,ys=fn.div`
  padding-block: 12px;

  border-bottom:
    1px solid var(--about-border);

  &:last-child {
    border-bottom: 0;
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

    font-size: 0.91rem;
    font-weight: 650;
    line-height: 1.8;

    overflow-wrap: anywhere;
  }
`,bs=fn(ds)`
  display: flex;
  flex-direction: column;
  gap: 13px;
`,xs=fn.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 10px;
  }
`,ws=fn.div`
  min-width: 0;
  flex: 1;

  h3 {
    margin: 0 0 7px;

    color: var(--about-text);

    font-size: 1.06rem;
    line-height: 1.75;
  }

  .subtitle {
    display: block;

    color: var(--about-muted);

    font-size: 0.89rem;
    line-height: 1.85;
  }
`,ks=fn.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  align-self: flex-start;

  padding: 8px 12px;

  border: 1px solid
    var(--about-border-strong);

  border-radius: 7px;

  background: var(--about-neutral);
  color: var(--about-text);

  font-size: 0.82rem;
  font-weight: 650;
  line-height: 1.65;

  svg {
    flex-shrink: 0;
    color: var(--about-primary);
  }
`,Ss=fn(ks)`
  flex-shrink: 0;

  .date-text {
    unicode-bidi: isolate;
  }
`,js=fn.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 3px 9px;

  border: 1px solid #16a34a;
  border-radius: 6px;

  background: rgba(22, 163, 74, 0.09);
  color: #15803d;

  font-size: 0.78rem;
  font-weight: 800;
  white-space: nowrap;

  svg {
    color: currentColor;
  }
`,Cs=e=>{let{item:t,isArabic:n}=e;const r=Jl(t),o=Ql(r.start),a=Ql(r.end);if(!o&&!a&&!r.single){const e=((e,t)=>{const{start:n,end:r,current:o,single:a}=Jl(e),i=Ql(n),l=Ql(r);return i&&o?`${i} \u2013 ${t?"\u062d\u062a\u0649 \u0627\u0644\u0622\u0646":"Present"}`:i&&l?`${i} \u2013 ${l}`:i||l||(a?Ql(a):String(Vl(null===e||void 0===e?void 0:e.date,null===e||void 0===e?void 0:e.period,"")))})(t,n);return e?(0,l().jsxs)(Ss,{children:[(0,l().jsx)(gl,{}),(0,l().jsx)("span",{className:"date-text",dir:"auto",children:e})]}):null}return(0,l().jsxs)(Ss,{children:[(0,l().jsx)(gl,{}),(0,l().jsx)("span",{className:"date-text",dir:"ltr",children:o||a||Ql(r.single)}),o&&(a||r.current)&&(0,l().jsxs)(l().Fragment,{children:[(0,l().jsx)("span",{"aria-hidden":"true",children:"\u2013"}),r.current?(0,l().jsxs)(js,{children:[(0,l().jsx)(ml,{}),n?"\u062d\u062a\u0649 \u0627\u0644\u0622\u0646":"Present"]}):(0,l().jsx)("span",{className:"date-text",dir:"ltr",children:a})]})]})},Es=fn.p`
  margin: 0;

  color: var(--about-muted);

  font-size: 0.91rem;
  line-height: 2;

  overflow-wrap: anywhere;
`,Ts=fn.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  .grade-value {
    direction: ltr;
    unicode-bidi: isolate;

    color: var(--about-primary);
    font-weight: 750;
  }
`,Ps=fn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-top: 3px;
  padding-top: 14px;

  border-top:
    1px solid var(--about-border);
`,Ns=fn.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  min-height: 43px;
  padding: 10px 16px;

  border: 1px solid
    var(--about-border-strong);

  border-radius: 7px;

  background: var(--about-neutral);
  color: var(--about-text);

  font: inherit;
  font-size: 0.86rem;
  font-weight: 700;

  cursor: pointer;

  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  svg {
    color: var(--about-primary);
  }

  &:hover {
    border-color: var(--about-primary);
    color: var(--about-primary);
  }

  &:focus-visible {
    outline:
      2px solid var(--about-primary);

    outline-offset: 3px;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`,Ls=fn.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 3px 7px;

  border: 1px solid
    var(--about-border-strong);

  border-radius: 5px;

  color: var(--about-primary);

  font-size: 0.72rem;
  font-weight: 800;
  line-height: 1.4;
`,zs=fn(ds)`
  display: flex;
  align-items: center;
  gap: 17px;

  margin-bottom: 25px;

  border-color: var(--about-primary);

  .summary-icon {
    display: grid;
    place-items: center;

    flex-shrink: 0;

    width: 53px;
    height: 53px;

    border-radius: 12px;

    background: var(--about-section);
    color: var(--about-primary);

    font-size: 1.5rem;
  }

  .summary-content {
    min-width: 0;
  }

  .summary-label {
    display: block;

    margin-bottom: 5px;

    color: var(--about-muted);

    font-size: 0.86rem;
  }

  .summary-value {
    display: block;

    color: var(--about-primary);

    font-size: clamp(
      1.15rem,
      2.5vw,
      1.55rem
    );

    font-weight: 800;
    line-height: 1.7;
  }

  .summary-note {
    display: block;
    margin-top: 5px;

    color: var(--about-muted);

    font-size: 0.79rem;
    line-height: 1.8;
  }

  @media (max-width: 500px) {
    align-items: flex-start;
    gap: 12px;
    padding: 16px;

    .summary-icon {
      width: 44px;
      height: 44px;
    }
  }
`,Os=fn.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 19px;

  padding-inline-start: 35px;

  &::before {
    content: "";

    position: absolute;

    inset-inline-start: 11px;
    top: 17px;
    bottom: 17px;

    width: 2px;

    background:
      var(--about-border-strong);
  }

  @media (max-width: 600px) {
    padding-inline-start: 27px;

    &::before {
      inset-inline-start: 8px;
    }
  }
`,Rs=fn.div`
  position: relative;
  min-width: 0;

  &::before {
    content: "";

    position: absolute;

    inset-inline-start: -31px;
    top: 24px;

    width: 13px;
    height: 13px;

    border: 3px solid
      var(--about-primary);

    border-radius: 50%;

    background: var(--about-card);

    z-index: 1;
  }

  &[data-current="true"]::before {
    border-color: #16a34a;
    background: #16a34a;
  }

  &[data-current="true"] ${bs} {
    border-color: rgba(
      22,
      163,
      74,
      0.45
    );
  }

  @media (max-width: 600px) {
    &::before {
      inset-inline-start: -25px;
      width: 12px;
      height: 12px;
    }
  }
`,_s=fn.div`
  display: grid;
  gap: 14px;
`,Ds=fn.div`
  min-width: 0;
  overflow: hidden;

  border: 1px solid var(--about-border);
  border-radius: 12px;

  background: var(--about-card);

  &[data-open="true"] {
    border-color:
      var(--about-border-strong);
  }
`,As=fn.button`
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
    outline:
      2px solid var(--about-primary);

    outline-offset: -3px;
  }

  .group-icon {
    display: grid;
    place-items: center;

    flex-shrink: 0;

    width: 41px;
    height: 41px;

    border: 1px solid var(--about-border);
    border-radius: 8px;

    background: var(--about-neutral);
    color: var(--about-primary);
  }

  .group-name {
    flex: 1;
    min-width: 0;
  }

  .group-name strong {
    display: block;

    font-size: 1rem;
    line-height: 1.65;
  }

  .group-name small {
    display: block;
    margin-top: 3px;

    color: var(--about-muted);
    font-size: 0.79rem;
  }

  .chevron {
    flex-shrink: 0;

    color: var(--about-primary);

    transition: transform 0.2s ease;
  }

  &[aria-expanded="true"] .chevron {
    transform: rotate(180deg);
  }
`,Ms=fn.div`
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
    grid-template-columns:
      minmax(0, 1fr);

    padding: 13px;
  }
`,Is=fn.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  min-width: 0;
  padding: 16px;

  border: 1px solid var(--about-border);
  border-radius: 9px;

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

    font-size: 0.93rem;
    font-weight: 750;
    line-height: 1.7;
  }

  .skill-level {
    color: var(--about-primary);

    font-size: 0.76rem;
    font-weight: 650;
  }

  .source-label {
    display: flex;
    align-items: center;
    gap: 7px;

    padding-top: 10px;

    border-top:
      1px solid var(--about-border);

    color: var(--about-muted);

    font-size: 0.78rem;
    font-weight: 700;
  }

  .source-label svg {
    color: var(--about-primary);
  }
`,$s=fn.ul`
  display: flex;
  flex-direction: column;
  gap: 7px;

  margin: 0;
  padding-inline-start: 18px;

  color: var(--about-muted);

  font-size: 0.8rem;
  line-height: 1.8;

  li::marker {
    color: var(--about-primary);
  }
`,Fs=fn(ds)`
  margin-bottom: 17px;

  border-color: var(--about-primary);

  .summary-heading {
    display: flex;
    align-items: center;
    gap: 12px;

    margin-bottom: 14px;
  }

  .summary-heading svg {
    flex-shrink: 0;

    color: var(--about-primary);
    font-size: 1.4rem;
  }

  .summary-heading h3 {
    margin: 0;

    color: var(--about-text);

    font-size: 1.08rem;
  }

  .summary-value {
    display: block;

    margin-bottom: 10px;

    color: var(--about-primary);

    font-size: 1.55rem;
    font-weight: 800;
  }

  .summary-description {
    margin: 0 0 15px;

    color: var(--about-muted);

    font-size: 0.9rem;
    line-height: 1.95;
  }

  .summary-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    margin-bottom: 12px;
  }
`,Us=fn(ds)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;

  padding: clamp(
    22px,
    4vw,
    35px
  );

  border-color: var(--about-primary);

  h2 {
    margin: 0 0 12px;

    color: var(--about-text);

    font-size: clamp(
      1.4rem,
      3vw,
      1.9rem
    );
  }

  p {
    max-width: 750px;
    margin: 0;

    color: var(--about-muted);

    font-size: 0.94rem;
    line-height: 2;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: stretch;
  }
`,Hs=fn(Bo)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  flex-shrink: 0;

  min-height: 46px;
  padding: 12px 20px;

  border-radius: 8px;

  background: var(--about-primary);
  color: var(--about-on-primary);

  font-size: 0.9rem;
  font-weight: 750;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }

  &:focus-visible {
    outline: 2px solid
      var(--about-primary);

    outline-offset: 3px;
  }
`,Bs=fn.div`
  position: fixed;
  inset: 0;

  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: clamp(8px, 2vw, 24px);

  background: rgba(8, 17, 29, 0.82);
`,Ws=fn.div`
  display: flex;
  flex-direction: column;

  width: min(100%, 1100px);
  max-height: 94vh;
  max-height: 94dvh;

  overflow: hidden;

  border: 1px solid var(--about-border);
  border-radius: 13px;

  background: var(--about-card);
  color: var(--about-text);

  @media (max-width: 600px) {
    width: 100%;
    max-height: 96vh;
    max-height: 96dvh;

    border-radius: 9px;
  }
`,Vs=fn.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;

  flex-shrink: 0;

  padding: 15px 19px;

  border-bottom:
    1px solid var(--about-border);

  .modal-heading {
    min-width: 0;
  }

  h2 {
    margin: 0 0 5px;

    color: var(--about-text);

    font-size: 1.02rem;
    line-height: 1.7;

    overflow-wrap: anywhere;
  }

  p {
    margin: 0;

    color: var(--about-muted);

    font-size: 0.8rem;
    line-height: 1.7;
  }

  @media (max-width: 600px) {
    padding: 12px;

    h2 {
      font-size: 0.92rem;
    }
  }
`,qs=fn.button`
  display: grid;
  place-items: center;

  flex-shrink: 0;

  width: 39px;
  height: 39px;

  border: 1px solid var(--about-border);
  border-radius: 8px;

  background: var(--about-neutral);
  color: var(--about-text);

  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    border-color: var(--about-primary);
    color: var(--about-primary);
  }

  &:focus-visible {
    outline: 2px solid
      var(--about-primary);

    outline-offset: 2px;
  }
`,Gs=fn.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
  min-height: 0;
  overflow: auto;

  padding: 14px;

  background: var(--about-section);

  img {
    display: block;

    max-width: 100%;
    max-height: 74vh;
    max-height: 74dvh;

    width: auto;
    height: auto;

    object-fit: contain;

    user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
  }

  iframe {
    display: block;

    width: 100%;
    height: 72vh;
    height: 72dvh;

    border: 0;
    background: #ffffff;
  }

  @media (max-width: 600px) {
    padding: 8px;

    img {
      max-height: 78vh;
      max-height: 78dvh;
    }

    iframe {
      height: 76vh;
      height: 76dvh;
    }
  }
`,Ys=fn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  min-height: 220px;
  padding: 25px;

  color: var(--about-muted);
  text-align: center;

  svg {
    color: var(--about-primary);
    font-size: 2rem;
  }

  p {
    margin: 0;
    line-height: 1.9;
  }
`,Ks=fn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  min-height: 240px;
  width: 100%;
  padding: 30px 16px;
  color: var(--about-muted);
  text-align: center;

  .spinner {
    width: 46px;
    height: 46px;
    border: 4px solid var(--about-border);
    border-top-color: var(--about-primary);
    border-radius: 50%;
    animation: about-spin 0.85s linear infinite;
  }

  p { margin: 0; font-size: 0.95rem; line-height: 1.9; }

  .dots { display: flex; gap: 7px; }
  .dots span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--about-primary);
    animation: about-pulse 1.2s ease-in-out infinite;
  }
  .dots span:nth-child(2) { animation-delay: 0.15s; }
  .dots span:nth-child(3) { animation-delay: 0.3s; }

  @keyframes about-spin { to { transform: rotate(360deg); } }
  @keyframes about-pulse {
    0%, 70%, 100% { opacity: 0.3; transform: translateY(0); }
    35% { opacity: 1; transform: translateY(-6px); }
  }

  @media (prefers-reduced-motion: reduce) {
    .spinner, .dots span { animation: none; }
  }
`,Qs=e=>{let{number:t,icon:n,title:r,description:o}=e;return(0,l().jsxs)(us,{children:[(0,l().jsxs)("span",{className:"number",children:[(0,l().jsx)(n,{}),t]}),(0,l().jsx)("h2",{children:r}),o&&(0,l().jsx)("p",{children:o})]})},Js=e=>{let{item:t,title:n,fallbackType:r,isArabic:o,onPreview:a}=e;if(null===t||void 0===t||!t.document)return null;const i=t.documentType||r||"document",s=is(t.document,o);return(0,l().jsx)(Ps,{children:(0,l().jsxs)(Ns,{type:"button",onClick:()=>a({path:t.document,title:n,documentType:i}),children:[(0,l().jsx)(sl,{}),o?"\u0639\u0631\u0636 ":"View ",os(i,o),(0,l().jsx)(Ls,{dir:"ltr",children:s})]})})},Xs=e=>{let{item:t,title:n,subtitle:r,description:o,grade:a,gradeLabel:i,employmentType:s,hours:c,fallbackDocumentType:u,isArabic:d,onPreview:p}=e;return(0,l().jsxs)(bs,{children:[(0,l().jsxs)(xs,{children:[(0,l().jsxs)(ws,{children:[(0,l().jsx)("h3",{children:Wl(n,d)}),r&&(0,l().jsx)("span",{className:"subtitle",children:Wl(r,d)})]}),(0,l().jsx)(Cs,{item:t,isArabic:d})]}),s&&(0,l().jsx)(Ts,{children:(0,l().jsxs)(ks,{children:[(0,l().jsx)(vl,{}),s]})}),o&&(0,l().jsx)(Es,{children:Wl(o,d)}),(a||c)&&(0,l().jsxs)(Ts,{children:[a&&(0,l().jsxs)(ks,{children:[(0,l().jsx)(bl,{}),i,(0,l().jsx)("span",{className:"grade-value",children:a})]}),c&&(0,l().jsxs)(ks,{children:[(0,l().jsx)(dl,{}),Wl(c,d)]})]}),(null===t||void 0===t?void 0:t.note)&&(0,l().jsx)(Ts,{children:(0,l().jsxs)(ks,{children:[(0,l().jsx)(nl,{}),Wl(t.note,d)]})}),(0,l().jsx)(Js,{item:t,title:Wl(n,d),fallbackType:u,isArabic:d,onPreview:p})]})},Zs=e=>{let{item:t,onClose:n,isArabic:r}=e;const o=(0,s().useRef)(null),a=(0,s().useId)(),{t:i}=ma("about"),[c,u]=(0,s().useState)(!0),[d,p]=(0,s().useState)(!1);if((0,s().useEffect)(()=>{u(!0),p(!1)},[null===t||void 0===t?void 0:t.path]),(0,s().useEffect)(()=>{var e;if(!t)return;const r=document.body.style.overflow,a=document.activeElement;document.body.style.overflow="hidden",null===(e=o.current)||void 0===e||e.focus();const i=e=>{var t;if("Escape"===e.key)return void n();if("Tab"!==e.key)return;const r=null===(t=o.current)||void 0===t?void 0:t.closest('[role="dialog"]');if(!r)return;const a=[...r.querySelectorAll("button:not([disabled]), a[href], iframe")].filter(e=>e.getClientRects().length>0);if(!a.length)return;const i=a[0],l=a[a.length-1];e.shiftKey&&document.activeElement===i?(e.preventDefault(),l.focus()):e.shiftKey||document.activeElement!==l||(e.preventDefault(),i.focus())};return document.addEventListener("keydown",i),()=>{var e;document.body.style.overflow=r,document.removeEventListener("keydown",i),null===a||void 0===a||null===(e=a.focus)||void 0===e||e.call(a)}},[t,n]),!t)return null;const f=(e=>{if("string"!==typeof e||!e.trim())return"";const t=e.trim();if(/^https?:\/\//i.test(t))return t;if(t.startsWith("//")||/^(javascript|data):/i.test(t))return"";const n=String("/abdulrahman-portfolio-react").replace(/\/+$/,""),r=t.replace(/^\/+/,"");let o="";try{o=new URL(n||"/",window.location.origin).pathname.replace(/^\/+|\/+$/g,"")}catch{o=n.replace(/^\/+|\/+$/g,"")}return o&&(r===o||r.startsWith(`${o}/`))?`/${r}`:`${n}/${r}`})(t.path),h=(e=>{const t=as(e);return"PDF"===t?"pdf":["PNG","JPG","JPEG","WEBP","GIF","AVIF"].includes(t)?"image":"other"})(t.path),m=os(t.documentType,r),g=is(t.path,r);return(0,l().jsx)(Bs,{onMouseDown:e=>{e.target===e.currentTarget&&n()},children:(0,l().jsxs)(Ws,{role:"dialog","aria-modal":"true","aria-labelledby":a,dir:r?"rtl":"ltr",children:[(0,l().jsxs)(Vs,{children:[(0,l().jsxs)("div",{className:"modal-heading",children:[(0,l().jsx)("h2",{id:a,children:t.title||m}),(0,l().jsxs)("p",{children:[m," \u2014 ",g]})]}),(0,l().jsx)(qs,{ref:o,type:"button",onClick:n,"aria-label":r?"\u0625\u063a\u0644\u0627\u0642 \u0627\u0644\u0645\u0639\u0627\u064a\u0646\u0629":"Close preview",children:(0,l().jsx)(Vi,{})})]}),(0,l().jsx)(Gs,{children:f?"image"===h||"pdf"===h?(0,l().jsxs)("div",{style:{width:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",minHeight:240},children:[c&&!d&&(0,l().jsxs)(Ks,{role:"status","aria-live":"polite",children:[(0,l().jsx)("span",{className:"spinner","aria-hidden":"true"}),(0,l().jsx)("p",{children:i("documentPreview.loading")}),(0,l().jsxs)("div",{className:"dots","aria-hidden":"true",children:[(0,l().jsx)("span",{}),(0,l().jsx)("span",{}),(0,l().jsx)("span",{})]})]}),d&&(0,l().jsxs)(Ys,{role:"alert",children:[(0,l().jsx)(ll,{}),(0,l().jsx)("p",{children:i("documentPreview.error")})]}),"image"===h?(0,l().jsx)("img",{src:f,alt:t.title||m,draggable:!1,style:{display:c||d?"none":"block"},onContextMenu:e=>e.preventDefault(),onLoad:()=>u(!1),onError:()=>{u(!1),p(!0)}},f):(0,l().jsx)("iframe",{src:`${f}#toolbar=0&navpanes=0&scrollbar=1`,title:t.title||m,style:{display:c||d?"none":"block"},onLoad:()=>u(!1),onError:()=>{u(!1),p(!0)}},f)]}):(0,l().jsxs)(Ys,{children:[(0,l().jsx)(ll,{}),(0,l().jsx)("p",{children:i("documentPreview.unsupported")})]}):(0,l().jsxs)(Ys,{children:[(0,l().jsx)(ll,{}),(0,l().jsx)("p",{children:i("documentPreview.unavailable")})]})})]})})},ec=[ul,function(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(e)},function(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(e)},Xi,yl,qi,Xi],tc=()=>{var e,t,n,r,o,a,i,c,u,d,p,f,h,m,g,v,y,b,x,w,k,S;const{t:j,i18n:C}=ma("about"),E=(C.resolvedLanguage||C.language||"ar").toLowerCase().startsWith("ar"),T=j("pageTitle",{ns:"about",defaultValue:E?"\u0639\u0646\u064a":"About Me"}),P=j("pageDesc",{ns:"about",defaultValue:E?"\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0645\u0624\u0647\u0644\u0627\u062a\u064a \u0627\u0644\u0639\u0644\u0645\u064a\u0629 \u0648\u062e\u0628\u0631\u0627\u062a\u064a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0634\u0647\u0627\u062f\u0627\u062a\u064a \u0648\u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0648\u0645\u0634\u0627\u0631\u0643\u0627\u062a\u064a \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u0629.":"Learn about my education, professional experience, certificates, skills, and volunteer activities."}),N=j("content",{ns:"about",returnObjects:!0}),L=N&&"object"===typeof N&&!Array.isArray(N)?N:{},[z,O]=(0,s().useState)(null),[R,_]=(0,s().useState)(null),D=(0,s().useCallback)(()=>{O(null)},[]),A=Zl(null===(e=L.education)||void 0===e?void 0:e.items),M=Zl(null===(t=L.experience)||void 0===t?void 0:t.items),I=Zl(null===(n=L.certificates)||void 0===n?void 0:n.items),$=Zl(null===(r=L.volunteering)||void 0===r?void 0:r.items),F={title:j("aiSkills.title"),items:["chatgpt","gemini","claude","deepseek"].map(e=>({name:j(`aiSkills.tools.${e}.name`),sources:[j(`aiSkills.tools.${e}.usage`)]}))},U=[...Bl(null===(o=L.skills)||void 0===o?void 0:o.groups),F],H=(null===(a=L.volunteering)||void 0===a?void 0:a.summary)||{},B=JSON.stringify((null===(i=L.experience)||void 0===i?void 0:i.items)||[]),W=(0,s().useMemo)(()=>(e=>{const t=new Date,n=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()),r=Bl(e).map(e=>{var t;const r=Jl(e);if(!r.start)return null;const o=r.start.date.getTime(),a=r.current?n:null===(t=r.end)||void 0===t?void 0:t.date.getTime();return"number"!==typeof a||!Number.isFinite(a)||o>a?null:{start:o,end:Math.min(a,n)}}).filter(Boolean).sort((e,t)=>e.start-t.start);if(!r.length)return{years:0,months:0,days:0,totalDays:0,totalMonths:0};const o=[];r.forEach(e=>{const t=o[o.length-1];t&&e.start<=t.end+es?t.end=Math.max(t.end,e.end):o.push({...e})});const a=o.reduce((e,t)=>e+Math.floor((t.end-t.start)/es)+1,0),i=Math.floor(a/30.436875);return{years:Math.floor(i/12),months:i%12,days:Math.round(a-30.436875*i),totalDays:a,totalMonths:i}})(M),[B]),V=(e,t)=>e.map((e,n)=>(0,l().jsx)(Xs,{item:e,isArabic:E,onPreview:O,...t(e)},`${n}-${Xl(e)}`));return(0,l().jsxs)(ls,{dir:E?"rtl":"ltr",children:[(0,l().jsx)(Ul,{children:(0,l().jsxs)(Hl,{children:[(0,l().jsx)(Ol,{value:"about"}),(0,l().jsx)(fs,{children:T}),(0,l().jsx)(hs,{children:P})]})}),(0,l().jsxs)(ss,{children:[(0,l().jsx)(cs,{id:"about-intro",children:(0,l().jsxs)(ms,{children:[(0,l().jsxs)(gs,{children:[(0,l().jsx)("h2",{children:(null===(c=L.intro)||void 0===c?void 0:c.title)||(E?"\u0646\u0628\u0630\u0629 \u0639\u0646\u064a":"About Me")}),(null===(u=L.intro)||void 0===u?void 0:u.paragraph1)&&(0,l().jsx)("p",{children:L.intro.paragraph1}),(null===(d=L.intro)||void 0===d?void 0:d.paragraph2)&&(0,l().jsx)("p",{children:L.intro.paragraph2})]}),(0,l().jsxs)(vs,{children:[(0,l().jsxs)("h3",{children:[(0,l().jsx)(Gi,{}),L.infoTitle||(E?"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0633\u0631\u064a\u0639\u0629":"Quick Information")]}),Bl(L.profile).map((e,t)=>(0,l().jsxs)(ys,{children:[(0,l().jsx)("span",{children:Wl(e.label,E)}),(0,l().jsx)("strong",{children:Wl(e.value,E)})]},t))]})]})}),(0,l().jsxs)(cs,{id:"about-education",className:"alternate",children:[(0,l().jsx)(Qs,{number:"01",icon:yl,title:(null===(p=L.education)||void 0===p?void 0:p.title)||(E?"\u0631\u062d\u0644\u062a\u064a \u0627\u0644\u062a\u0639\u0644\u064a\u0645\u064a\u0629":"Education"),description:null===(f=L.education)||void 0===f?void 0:f.description}),(0,l().jsx)(ps,{children:V(A,e=>{var t;return{title:e.degree,subtitle:e.school,description:e.field,grade:e.grade,gradeLabel:(null===(t=L.education)||void 0===t?void 0:t.gradeLabel)||(E?"\u0627\u0644\u0645\u0639\u062f\u0644 \u0627\u0644\u062a\u0631\u0627\u0643\u0645\u064a":"GPA"),fallbackDocumentType:"graduation"}})})]}),(0,l().jsxs)(cs,{id:"about-experience",children:[(0,l().jsx)(Qs,{number:"02",icon:vl,title:(null===(h=L.experience)||void 0===h?void 0:h.title)||(E?"\u062e\u0628\u0631\u0627\u062a\u064a \u0627\u0644\u0645\u0647\u0646\u064a\u0629":"Professional Experience"),description:null===(m=L.experience)||void 0===m?void 0:m.description}),(0,l().jsxs)(zs,{children:[(0,l().jsx)("div",{className:"summary-icon",children:(0,l().jsx)(dl,{})}),(0,l().jsxs)("div",{className:"summary-content",children:[(0,l().jsx)("span",{className:"summary-label",children:E?"\u0625\u062c\u0645\u0627\u0644\u064a \u0633\u0646\u0648\u0627\u062a \u0627\u0644\u062e\u0628\u0631\u0629 \u0627\u0644\u0645\u0647\u0646\u064a\u0629":"Total Professional Experience"}),(0,l().jsx)("strong",{className:"summary-value",children:ts(W,E)}),(0,l().jsx)("span",{className:"summary-note",children:E?"\u064a\u064f\u062d\u0633\u0628 \u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a \u0645\u0646 \u062c\u0645\u064a\u0639 \u0641\u062a\u0631\u0627\u062a \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0641\u0639\u0644\u064a\u0629 \u062f\u0648\u0646 \u062a\u0643\u0631\u0627\u0631 \u0627\u0644\u0641\u062a\u0631\u0627\u062a \u0627\u0644\u0645\u062a\u062f\u0627\u062e\u0644\u0629\u060c \u0648\u064a\u064f\u062d\u062f\u0651\u064e\u062b \u062a\u0644\u0642\u0627\u0626\u064a\u064b\u0627 \u0644\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0645\u0633\u062a\u0645\u0631\u0629.":"Calculated from actual employment periods without double-counting overlapping dates. Ongoing roles update automatically."})]})]}),(0,l().jsx)(Os,{children:M.map((e,t)=>{const n=Jl(e);return(0,l().jsx)(Rs,{"data-current":n.current?"true":"false",children:(0,l().jsx)(Xs,{item:e,title:e.role,subtitle:e.company,description:e.description,employmentType:ns(e,E),fallbackDocumentType:"experience",isArabic:E,onPreview:O})},`${t}-${Xl(e)}`)})})]}),(0,l().jsxs)(cs,{id:"about-certificates",className:"alternate",children:[(0,l().jsx)(Qs,{number:"03",icon:bl,title:(null===(g=L.certificates)||void 0===g?void 0:g.title)||(E?"\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0648\u0627\u0644\u062f\u0648\u0631\u0627\u062a \u0627\u0644\u062a\u062f\u0631\u064a\u0628\u064a\u0629":"Certificates and Courses"),description:null===(v=L.certificates)||void 0===v?void 0:v.description}),(0,l().jsx)(ps,{children:V(I,e=>({title:e.name,subtitle:e.provider,description:e.description,hours:e.hours,fallbackDocumentType:"certificate"}))})]}),(0,l().jsxs)(cs,{id:"about-skills",children:[(0,l().jsx)(Qs,{number:"04",icon:ul,title:(null===(y=L.skills)||void 0===y?void 0:y.title)||(E?"\u0645\u0647\u0627\u0631\u0627\u062a\u064a":"My Skills"),description:null===(b=L.skills)||void 0===b?void 0:b.description}),(0,l().jsx)(_s,{children:U.map((e,t)=>{const n=R===t,r=ec[t%ec.length],o=Bl(e.items);return(0,l().jsxs)(Ds,{"data-open":n?"true":"false",children:[(0,l().jsxs)(As,{type:"button","aria-expanded":n,onClick:()=>(e=>{_(t=>t===e?null:e)})(t),children:[(0,l().jsx)("span",{className:"group-icon",children:(0,l().jsx)(r,{})}),(0,l().jsxs)("span",{className:"group-name",children:[(0,l().jsx)("strong",{children:Wl(e.title,E)}),(0,l().jsxs)("small",{children:[o.length," ",E?"\u0645\u0647\u0627\u0631\u0629":1===o.length?"skill":"skills"]})]}),(0,l().jsx)(hl,{className:"chevron"})]}),n&&(0,l().jsx)(Ms,{children:o.map((e,t)=>{const n=((e,t)=>"string"===typeof e?e:Wl(Vl(null===e||void 0===e?void 0:e.name,null===e||void 0===e?void 0:e.title,null===e||void 0===e?void 0:e.skill,null===e||void 0===e?void 0:e.label),t))(e,E),r=((e,t)=>{if(!e||"object"!==typeof e)return"";const n=Vl(e.level,e.proficiency);if(!n)return"";const r={advanced:{ar:"\u0645\u062a\u0642\u062f\u0645",en:"Advanced"},intermediate:{ar:"\u0645\u062a\u0648\u0633\u0637",en:"Intermediate"},basic:{ar:"\u0623\u0633\u0627\u0633\u064a",en:"Basic"},beginner:{ar:"\u0645\u0628\u062a\u062f\u0626",en:"Beginner"},good:{ar:"\u062c\u064a\u062f",en:"Good"}}[String(n).toLowerCase()];return r?t?r.ar:r.en:Wl(n,t)})(e,E),o=((e,t)=>{if(!e||"object"!==typeof e)return[];const n=Vl(e.sources,e.source,e.learnedFrom),r=Array.isArray(n)?n:n?[n]:[];return[...new Set(r.map(e=>Wl(e,t).trim()).filter(Boolean))]})(e,E);return(0,l().jsxs)(Is,{children:[(0,l().jsxs)("div",{className:"skill-header",children:[(0,l().jsx)("strong",{className:"skill-name",children:n}),r&&(0,l().jsx)("span",{className:"skill-level",children:r})]}),o.length>0&&(0,l().jsxs)(l().Fragment,{children:[(0,l().jsxs)("span",{className:"source-label",children:[(0,l().jsx)(yl,{}),E?"\u0645\u0635\u0627\u062f\u0631 \u0627\u0643\u062a\u0633\u0627\u0628 \u0627\u0644\u0645\u0647\u0627\u0631\u0629":"Skill Sources"]}),(0,l().jsx)($s,{children:o.map((e,t)=>(0,l().jsx)("li",{children:e},`${e}-${t}`))})]})]},`${n}-${t}`)})})]},t)})})]}),(0,l().jsxs)(cs,{id:"about-volunteering",className:"alternate",children:[(0,l().jsx)(Qs,{number:"05",icon:ol,title:(null===(x=L.volunteering)||void 0===x?void 0:x.title)||(E?"\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0627\u062a \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u0629":"Volunteer Activities"),description:null===(w=L.volunteering)||void 0===w?void 0:w.description}),Object.keys(H).length>0&&(0,l().jsxs)(Fs,{children:[(0,l().jsxs)("div",{className:"summary-heading",children:[(0,l().jsx)(ol,{}),(0,l().jsx)("h3",{children:H.label||(E?"\u0627\u0644\u0633\u062c\u0644 \u0627\u0644\u062a\u0637\u0648\u0639\u064a":"Volunteer Record")})]}),H.value&&(0,l().jsx)("strong",{className:"summary-value",children:H.value}),(0,l().jsxs)("div",{className:"summary-meta",children:[H.opportunities&&(0,l().jsxs)(ks,{children:[(0,l().jsx)(qi,{}),H.opportunities," ",E?"\u0641\u0631\u0635\u0629 \u062a\u0637\u0648\u0639\u064a\u0629":"Volunteer Opportunities"]}),(0,l().jsx)(Cs,{item:H,isArabic:E})]}),H.description&&(0,l().jsx)("p",{className:"summary-description",children:H.description}),(0,l().jsx)(Js,{item:H,title:H.label||(E?"\u0627\u0644\u0633\u062c\u0644 \u0627\u0644\u062a\u0637\u0648\u0639\u064a":"Volunteer Record"),fallbackType:"volunteering",isArabic:E,onPreview:O})]}),(0,l().jsx)(ps,{children:V($,e=>({title:e.name,subtitle:e.provider,description:e.description,fallbackDocumentType:"participation"}))})]}),(0,l().jsx)(cs,{id:"about-goal",children:(0,l().jsxs)(Us,{children:[(0,l().jsxs)("div",{children:[(0,l().jsx)("h2",{children:(null===(k=L.goal)||void 0===k?void 0:k.title)||(E?"\u062a\u0637\u0644\u0639\u0627\u062a\u064a \u0627\u0644\u0645\u0647\u0646\u064a\u0629":"Career Aspirations")}),(0,l().jsx)("p",{children:null===(S=L.goal)||void 0===S?void 0:S.description})]}),(0,l().jsxs)(Hs,{to:"/contact",children:[E?"\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a":"Contact Me",(0,l().jsx)(xl,{})]})]})})]}),(0,l().jsx)(Zs,{item:z,onClose:D,isArabic:E})]})},nc=fn.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: clamp(10px, 1.5vw, 16px);

  @media (max-width: 480px) {
    justify-content: center;
    gap: 10px;
  }
`,rc={primary:un`
    --button-bg: var(--color-primary);
    --button-text: var(--color-background);
    --button-border: var(--color-primary);

    --button-hover-bg: var(--color-primary-dark);
    --button-hover-text: var(--color-white);
    --button-hover-border: var(--color-primary-dark);

    --button-shadow: 0 4px 12px
      color-mix(
        in srgb,
        var(--color-primary) 18%,
        transparent
      );
  `,secondary:un`
    --button-bg: var(--color-background);
    --button-text: var(--color-primary);
    --button-border: color-mix(
      in srgb,
      var(--color-primary) 22%,
      var(--color-border)
    );

    --button-hover-bg: var(--color-background-secondary);
    --button-hover-text: var(--color-primary);
    --button-hover-border: var(--color-primary);

    --button-shadow: none;
  `,tertiary:un`
    --button-bg: var(--color-tertiary);
    --button-text: var(--color-background);
    --button-border: var(--color-tertiary);

    --button-hover-bg: var(--color-tertiary-dark);
    --button-hover-text: var(--color-white);
    --button-hover-border: var(--color-tertiary-dark);

    --button-shadow: 0 4px 12px
      color-mix(
        in srgb,
        var(--color-tertiary) 15%,
        transparent
      );
  `,ghost:un`
    --button-bg: transparent;
    --button-text: var(--color-text-primary);
    --button-border: transparent;

    --button-hover-bg: var(--color-background-secondary);
    --button-hover-text: var(--color-primary);
    --button-hover-border: transparent;

    --button-shadow: none;
  `},oc=fn.button`
  ${e=>{let{$variant:t="primary"}=e;return rc[t]||rc.primary}}

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  min-height: 46px;
  padding: 11px 22px;

  border: 1px solid var(--button-border);
  border-radius: 12px;

  background-color: var(--button-bg);
  color: var(--button-text);

  font: inherit;
  font-size: 0.94rem;
  font-weight: 700;
  line-height: 1.45;

  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  box-shadow: var(--button-shadow);

  transition:
    transform var(--transition-fast),
    background-color var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast),
    box-shadow var(--transition-fast);

  & svg,
  & img {
    display: block;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    object-fit: contain;

    transition: transform var(--transition-fast);
  }

  &:hover:not(:disabled):not([aria-disabled="true"]) {
    transform: translateY(-2px);

    background-color: var(--button-hover-bg);
    color: var(--button-hover-text);
    border-color: var(--button-hover-border);

    box-shadow: var(--shadow-md);
  }

  &:hover:not(:disabled):not([aria-disabled="true"]) svg {
    transform: translateY(-1px);
  }

  &:active:not(:disabled):not([aria-disabled="true"]) {
    transform: translateY(0);
    box-shadow: none;
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
  }

  &:disabled,
  &[aria-disabled="true"] {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
    box-shadow: none;
    transform: none;
  }

  &.active {
    --button-bg: var(--color-secondary);
    --button-border: var(--color-secondary);
    --button-text: var(--color-background);

    --button-hover-bg: var(--color-secondary-dark);
    --button-hover-border: var(--color-secondary-dark);
    --button-hover-text: var(--color-white);
  }

  @media (max-width: 480px) {
    min-height: 44px;
    padding: 10px 16px;
    font-size: 0.875rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    & svg,
    & img {
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
`,ac=(fn(Rl)`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 40px;
  padding: 9px 13px;

  border: 1px solid transparent;
  border-radius: 10px;

  color: var(--color-text-primary);

  font-size: 0.94rem;
  font-weight: 500;
  text-decoration: none;

  transition:
    color var(--transition-fast),
    background-color var(--transition-fast),
    border-color var(--transition-fast);

  &:hover {
    color: var(--color-primary);

    background-color: var(--color-background-secondary);
    border-color: var(--color-border);

    opacity: 1;
  }

  &.active,
  &[aria-current="page"] {
    color: var(--color-primary);
    font-weight: 700;

    background-color: color-mix(
      in srgb,
      var(--color-primary) 7%,
      var(--color-background)
    );

    border-color: color-mix(
      in srgb,
      var(--color-primary) 12%,
      transparent
    );
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }
`,fn(oc)`
  --button-bg: var(--color-background-secondary);
  --button-text: var(--color-primary);
  --button-border: var(--color-border);

  --button-hover-bg: var(--color-background-tertiary);
  --button-hover-text: var(--color-primary);
  --button-hover-border: var(--color-primary);

  --button-shadow: none;

  width: 44px;
  height: 44px;
  min-height: 44px;

  padding: 0;
  flex-shrink: 0;

  border-radius: 12px;

  & svg,
  & img {
    width: 20px;
    height: 20px;
  }

  &:hover:not(:disabled):not([aria-disabled="true"]) {
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
  }

  &:hover:not(:disabled):not([aria-disabled="true"]) svg,
  &:hover:not(:disabled):not([aria-disabled="true"]) img {
    transform: scale(1.08);
  }

  &:active:not(:disabled):not([aria-disabled="true"]) {
    transform: scale(0.96);
  }

  /* Circular variant */
  ${e=>{let{$rounded:t}=e;return t&&un`
      border-radius: 50%;
    `}}

  /* Small size */
  ${e=>{let{$size:t}=e;return"sm"===t&&un`
      width: 36px;
      height: 36px;
      min-height: 36px;

      border-radius: 10px;

      & svg,
      & img {
        width: 17px;
        height: 17px;
      }
    `}}

  /* Large size */
  ${e=>{let{$size:t}=e;return"lg"===t&&un`
      width: 52px;
      height: 52px;
      min-height: 52px;

      border-radius: 15px;

      & svg,
      & img {
        width: 24px;
        height: 24px;
      }
    `}}

  ${e=>{let{$rounded:t}=e;return t&&un`
      border-radius: 50%;
    `}}
`,oc),ic=fn.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 420px;
  isolation: isolate;

  @media (max-width: 768px) {
    min-height: 350px;
  }

  @media (max-width: 480px) {
    min-height: 300px;
  }
`,lc=fn.div`
  position: absolute;
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  min-width: 105px;
  max-width: 155px;
  padding: 15px 18px;

  background: var(--color-background-secondary);
  border: 1px solid var(--color-border);
  border-radius: 15px;
  box-shadow: var(--shadow-sm);
  text-align: center;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
    border-color: var(--color-primary);
  }

  strong {
    display: block;
    color: var(--color-text-primary);
    font-size: clamp(1.35rem, 2.5vw, 1.8rem);
    font-weight: 800;
    line-height: 1.3;
    font-variant-numeric: tabular-nums;
  }

  span {
    display: block;
    color: var(--color-text-secondary);
    font-size: 0.8rem;
    line-height: 1.5;
    overflow-wrap: anywhere;
  }

  &.top {
    top: 6%;
    inset-inline-end: 3%;
  }

  &.left {
    bottom: 19%;
    inset-inline-start: 0;
  }

  &.right {
    bottom: 5%;
    inset-inline-end: 0;
  }

  @media (max-width: 768px) {
    min-width: 95px;
    max-width: 125px;
    padding: 12px 14px;

    &.top {
      top: 4%;
      inset-inline-end: 2%;
    }

    &.left {
      bottom: 16%;
    }

    &.right {
      bottom: 2%;
    }
  }

  @media (max-width: 480px) {
    min-width: 75px;
    max-width: 105px;
    padding: 9px 10px;
    gap: 3px;
    border-radius: 11px;

    strong {
      font-size: 1.15rem;
    }

    span {
      font-size: 0.68rem;
    }

    &.top {
      top: 2%;
      inset-inline-end: 0;
    }

    &.left {
      bottom: 15%;
    }

    &.right {
      bottom: 1%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`,sc=e=>{let{value:t,duration:n=1200}=e;const[r,o]=(0,s().useState)(0);return(0,s().useEffect)(()=>{var e,r;const a=Math.max(0,Number(t)||0);if("undefined"!==typeof window&&(null===(e=(r=window).matchMedia)||void 0===e?void 0:e.call(r,"(prefers-reduced-motion: reduce)").matches))return void o(a);let i,l=null;const s=e=>{null===l&&(l=e);const t=Math.min((e-l)/Math.max(n,1),1),r=1-Math.pow(1-t,3);o(Math.floor(r*a)),t<1?i=requestAnimationFrame(s):o(a)};return i=requestAnimationFrame(s),()=>cancelAnimationFrame(i)},[t,n]),(0,l().jsxs)("strong",{children:[r,"+"]})},cc=e=>{let{children:t,className:n}=e;return(0,l().jsx)(ic,{className:n,children:t})},uc={React:function(e){return ui({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(e)},JavaScript:function(e){return ui({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"},child:[]}]})(e)},HTML:function(e){return ui({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"},child:[]}]})(e)},CSS:function(e){return ui({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"},child:[]}]})(e)},Git:function(e){return ui({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"},child:[]}]})(e)},SQL:wi,MySQL:wi,"REST API":function(e){return ui({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"},child:[]}]})(e)},"Microsoft 365":function(e){return ui({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"},child:[]}]})(e)}},dc=e=>{let{name:t}=e;const n=uc[t]||ul;return(0,l().jsx)(n,{"aria-hidden":"true",style:{color:"var(--color-primary)",width:"19px",height:"19px"}})},pc=n.p+"static/media/me.93fc188400bffe390923.png",fc=yn`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,hc=yn`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-7px); }
`,mc=yn`
  0%, 100% {
    box-shadow: 0 0 0 0
      color-mix(in srgb, var(--color-primary) 20%, transparent);
  }
  60% {
    box-shadow: 0 0 0 8px transparent;
  }
`,gc=fn(Xo)`
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: min(790px, 95svh);
  padding-block: clamp(65px, 8vw, 110px);
  overflow: hidden;
  background: var(--color-background);
  color: var(--color-text-primary);

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: clamp(280px, 42vw, 620px);
    aspect-ratio: 1;
    inset-inline-end: -15%;
    top: -30%;
    border-radius: 50%;
    background: var(--color-background-secondary);
    opacity: 0.55;
    filter: blur(80px);
    pointer-events: none;
  }

  @media (max-width: 900px) {
    min-height: auto;
    padding-block: 48px 72px;
  }

  @media (max-width: 480px) {
    padding-block: 35px 55px;
  }
`,vc=fn(Zo)`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(36px, 5vw, 80px);
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    justify-items: center;
    gap: 20px;

    & > :first-child { order: 2; }
    & > :last-child { order: 1; }
  }
`,yc=fn.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: clamp(18px, 2.5vw, 27px);
  min-width: 0;
  animation: ${fc} 0.8s ease both;

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,bc=fn.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 9px 15px;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-background-secondary);
  color: var(--color-text-primary);
  font-size: 0.82rem;
  font-weight: 600;
  line-height: 1.6;

  &::before {
    content: "";
    width: 9px;
    height: 9px;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--color-primary);
    animation: ${mc} 2.5s infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before { animation: none; }
  }
`,xc=fn.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`,wc=fn(_l)`
  margin: 0;
  color: var(--color-text-primary);
  font-size: clamp(2.4rem, 5vw, 4.6rem);
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -0.025em;
  text-wrap: balance;

  @media (max-width: 480px) {
    font-size: clamp(2rem, 9vw, 3rem);
  }
`,kc=fn.div`
  display: flex;
  align-items: center;
  min-height: 2.7rem;
  color: var(--color-primary);
  font-size: clamp(1.15rem, 2.5vw, 1.65rem);
  font-weight: 700;
  line-height: 1.5;

  @media (max-width: 900px) {
    justify-content: center;
  }
`,Sc=fn.strong`
  display: block;
  animation: ${fc} 0.45s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,jc=fn(Ml)`
  max-width: 620px;
  margin: 0;
  color: var(--color-text-secondary);
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  line-height: 2;
`,Cc=fn.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 900px) {
    align-items: center;
  }
`,Ec=fn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`,Tc=fn.div`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  min-height: 44px;
  padding: 6px 12px 6px 7px;
  border: 1px solid var(--color-border);
  border-radius: 11px;
  background: var(--color-background-secondary);
  color: var(--color-text-primary);
  font-size: 0.84rem;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: var(--shadow-sm, 0 3px 12px rgba(0,0,0,0.04));
  transition: transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: var(--color-primary);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover { transform: none; }
  }
`,Pc=fn.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 31px;
  height: 31px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--color-background);
  color: var(--color-primary);

  & svg {
    width: 19px;
    height: 19px;
  }
`,Nc=fn.span`
  color: var(--color-text-primary);
`,Lc=fn(nc)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 8px;

  & > * {
    min-height: 48px;
    min-width: 155px;
    padding: 12px 22px;
    border-radius: 11px;
    font-weight: 700;
    text-align: center;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;

    & > * {
      flex: 1 1 140px;
      min-width: 0;
    }
  }
`,zc=fn.figure`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 450px;
  min-width: 0;
  margin: 0;
  isolation: isolate;
  animation: ${fc} 1s ease 0.15s both;

  @media (max-width: 480px) {
    max-width: 310px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Oc=fn.div`
  position: absolute;
  z-index: -1;
  width: 85%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--color-background-secondary);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);

  &::after {
    content: "";
    position: absolute;
    inset: -15px;
    border-radius: 50%;
    border: 1px dashed var(--color-border);
    opacity: 0.8;
  }
`,Rc=fn.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 68%;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  background: var(--color-background-secondary);
  border: 5px solid var(--color-background);
  box-shadow: var(--shadow-md);
  animation: ${hc} 6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,_c=fn.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`,Dc=fn(cc)`
  position: relative;
  width: 100%;
  min-height: 420px;

  @media (max-width: 480px) {
    min-height: 310px;
  }
`,Ac=()=>{const{t:e,i18n:t}=ma(),n=e("home:hero.job_titles",{returnObjects:!0}),r=Array.isArray(n)?n:[],[o,a]=(0,s().useState)(0);return(0,s().useEffect)(()=>{a(0)},[t.language]),(0,s().useEffect)(()=>{var e,t;if(r.length<=1)return;if("undefined"!==typeof window&&(null===(e=(t=window).matchMedia)||void 0===e?void 0:e.call(t,"(prefers-reduced-motion: reduce)").matches))return;const n=setInterval(()=>{a(e=>(e+1)%r.length)},3500);return()=>clearInterval(n)},[r.length,t.language]),r.length?(0,l().jsx)(kc,{"aria-live":"off",children:(0,l().jsx)(Sc,{children:r[o%r.length]},`${t.language}-${o}`)}):null},Mc=()=>{const{t:e}=ma(),t=e("home:hero.tech_stack",{returnObjects:!0}),n=Array.isArray(t)?t:[];return(0,l().jsx)(gc,{id:"home",children:(0,l().jsxs)(vc,{children:[(0,l().jsxs)(yc,{children:[(0,l().jsx)(bc,{children:e("home:hero.availability_status")}),(0,l().jsxs)(xc,{children:[(0,l().jsx)(wc,{as:"h1",children:e("home:hero.name")}),(0,l().jsx)(Ac,{})]}),(0,l().jsx)(jc,{children:e("home:hero.introduction")}),(0,l().jsx)(Cc,{children:(0,l().jsx)(Ec,{children:n.map((e,t)=>(0,l().jsxs)(Tc,{children:[(0,l().jsx)(Pc,{children:(0,l().jsx)(dc,{name:e.icon})}),(0,l().jsx)(Nc,{children:e.text})]},`${e.icon||e.text}-${t}`))})}),(0,l().jsxs)(Lc,{children:[(0,l().jsx)(ac,{as:Bo,to:"/contact",children:e("buttons.contact")}),(0,l().jsx)(ac,{as:"a",$variant:"secondary",href:"/abdulrahman-portfolio-react/documents/cv.pdf",target:"_blank",rel:"noopener noreferrer",children:e("buttons.cv")})]})]}),(0,l().jsxs)(zc,{children:[(0,l().jsx)(Oc,{}),(0,l().jsxs)(Dc,{children:[(0,l().jsx)(Rc,{children:(0,l().jsx)(_c,{src:pc,alt:e("home:hero.profileAlt"),fetchPriority:"high"})}),(0,l().jsxs)(lc,{className:"top",children:[(0,l().jsx)(sc,{value:5}),(0,l().jsx)("span",{children:e("home:hero.statistic.projects")})]}),(0,l().jsxs)(lc,{className:"left",children:[(0,l().jsx)(sc,{value:2}),(0,l().jsx)("span",{children:e("home:hero.statistic.years")})]}),(0,l().jsxs)(lc,{className:"right",children:[(0,l().jsx)(sc,{value:10}),(0,l().jsx)("span",{children:e("home:hero.statistic.technologies")})]})]})]})]})})},Ic=fn.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-lg);
  gap: var(--space-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: var(--transition-fast);

  &:hover {
    box-shadow: var(--shadow-md);
  }
`,$c=fn.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--space-2xl);
  height: var(--space-2xl);
  font-size: var(--size-3xl);
  color: var(--color-gray);
`,Fc=fn(Ic)`
  background-color: var(--color-background);
`,Uc=e=>{let{icon:t,title:n,description:r}=e;const{t:o}=ma();return(0,l().jsxs)(Fc,{style:{textAlign:"center"},children:[(0,l().jsx)($c,{children:(0,l().jsx)(t,{})}),(0,l().jsx)(Al,{children:n}),(0,l().jsx)(Ml,{children:r})]})},Hc=fn.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,Bc={web:function(e){return ui({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)},technology:function(e){return ui({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"},child:[]}]})(e)},applications:function(e){return ui({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"},child:[]}]})(e)}},Wc=()=>{const{t:e}=ma(),t=e("home:services.items",{returnObjects:!0});return(0,l().jsx)(Hc,{children:t.map(e=>(0,l().jsx)(Uc,{icon:Bc[e.icon],title:e.title,description:e.description},e.id))})},Vc=yn`
  from {
    opacity: 0;
    transform: translateY(28px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`,qc=yn`
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
`,Gc=fn(Xo)`
  position: relative;
  isolation: isolate;

  width: 100%;
  min-height: auto;

  padding-block: clamp(85px, 10vw, 145px);

  overflow: hidden;

  background: var(--color-background-secondary);

  border-block: 1px solid var(--color-border);

  &::before {
    content: "";
    position: absolute;

    width: 460px;
    height: 460px;

    inset-block-start: -230px;
    inset-inline-end: -200px;

    border-radius: 50%;

    background: var(--color-secondary-soft);

    filter: blur(100px);
    opacity: 0.55;

    pointer-events: none;
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding-block: 75px 95px;

    &::before {
      width: 300px;
      height: 300px;
      opacity: 0.3;
    }
  }
`,Yc=fn(Zo)`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: clamp(35px, 5vw, 65px);
`,Kc=fn.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: clamp(26px, 4vw, 42px);
`,Qc=fn.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 16px;
`,Jc=fn.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;

  color: var(--color-text-secondary);

  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 2px;

  direction: ltr;

  &::before {
    content: "";
    display: block;

    width: 26px;
    height: 1px;

    background: var(--color-primary);
  }
`,Xc=fn.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 34px;
  padding: 7px 16px;

  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);

  background: var(--color-background);

  color: var(--color-text-secondary);

  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.3px;
`,Zc=fn.div`
  width: 100%;
  height: 1px;
  background: var(--color-border);
`,eu=fn.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.85fr);

  align-items: center;

  gap: clamp(30px, 5vw, 85px);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 22px;
  }
`,tu=fn.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 18px;
  min-width: 0;
`,nu=fn.h2`
  position: relative;

  margin: 0;
  max-width: 650px;

  color: var(--color-text-primary);

  font-size: clamp(2.1rem, 4.5vw, 4rem);
  font-weight: 850;
  line-height: 1.35;

  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 7vw, 3rem);
  }
`,ru=fn.span`
  display: block;

  width: 95px;
  height: 4px;

  border-radius: var(--radius-full);

  background: linear-gradient(
    90deg,
    var(--color-primary),
    var(--color-secondary-light)
  );

  transform-origin: right;

  animation: ${qc} 0.8s ease both;

  [dir="ltr"] & {
    transform-origin: left;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,ou=fn.div`
  display: flex;
  align-items: center;

  padding-inline-start: clamp(0px, 2vw, 30px);

  border-inline-start: 2px solid var(--color-border);

  @media (max-width: 768px) {
    padding-inline-start: 18px;
  }
`,au=fn.p`
  margin: 0;
  max-width: 570px;

  color: var(--color-text-secondary);

  font-size: clamp(0.95rem, 1.4vw, 1.08rem);
  font-weight: 400;
  line-height: 2.1;

  text-wrap: pretty;
`,iu=fn.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 25px;
`,lu=fn.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;
  flex-wrap: wrap;
`,su=fn.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;

  color: var(--color-text-secondary);

  font-size: 0.78rem;
  font-weight: 700;

  &::before {
    content: "";

    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: var(--color-secondary);
  }
`,cu=fn.div`
  flex: 1;
  height: 1px;

  background: var(--color-border);
`,uu=fn.div`
  width: 100%;
  min-width: 0;

  opacity: ${e=>{let{$visible:t}=e;return t?1:0}};

  transform: ${e=>{let{$visible:t}=e;return t?"translateY(0)":"translateY(28px)"}};

  animation: ${e=>{let{$visible:t}=e;return t?Vc:"none"}} 0.75s ease both;

  transition:
    opacity 0.75s ease,
    transform 0.75s ease;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    animation: none;
    transition: none;
  }
`,du=()=>{var e;const{i18n:t}=ma(),n=(0,s().useRef)(null),[r,o]=(0,s().useState)(!1),a=(null===(e=t.language)||void 0===e?void 0:e.toLowerCase().startsWith("ar"))?{index:"01 / SERVICES",label:"\u0645\u0627 \u0623\u0642\u062f\u0645\u0647",title:"\u062d\u0644\u0648\u0644 \u0631\u0642\u0645\u064a\u0629 \u062a\u0635\u0646\u0639 \u0641\u0631\u0642\u064b\u0627.",description:"\u0623\u0642\u062f\u0645 \u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0648\u0627\u0644\u0631\u0642\u0645\u064a\u0629 \u0627\u0644\u062a\u064a \u062a\u062c\u0645\u0639 \u0628\u064a\u0646 \u0627\u0644\u062f\u0642\u0629 \u0648\u0627\u0644\u062a\u0646\u0638\u064a\u0645 \u0648\u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0639\u0635\u0631\u064a\u060c \u0644\u0645\u0633\u0627\u0639\u062f\u062a\u0643 \u0639\u0644\u0649 \u062a\u062d\u0648\u064a\u0644 \u0623\u0641\u0643\u0627\u0631\u0643 \u0648\u0645\u062a\u0637\u0644\u0628\u0627\u062a\u0643 \u0625\u0644\u0649 \u062d\u0644\u0648\u0644 \u0639\u0645\u0644\u064a\u0629 \u0648\u0646\u062a\u0627\u0626\u062c \u0627\u062d\u062a\u0631\u0627\u0641\u064a\u0629.",gridLabel:"\u0627\u0633\u062a\u0643\u0634\u0641 \u0627\u0644\u062e\u062f\u0645\u0627\u062a"}:{index:"01 / SERVICES",label:"What I Offer",title:"Digital solutions that make a difference.",description:"I provide a range of technical and digital services that combine precision, organization, and modern design to transform your ideas and requirements into practical, professional results.",gridLabel:"Explore Services"};return(0,s().useEffect)(()=>{var e,t;const r=n.current;if(!r)return;const a=null===(e=(t=window).matchMedia)||void 0===e?void 0:e.call(t,"(prefers-reduced-motion: reduce)").matches;if("undefined"===typeof IntersectionObserver||a)return void o(!0);const i=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&(o(!0),i.disconnect())},{threshold:.1,rootMargin:"0px 0px -40px 0px"});return i.observe(r),()=>i.disconnect()},[]),(0,l().jsx)(Gc,{id:"services",ref:n,children:(0,l().jsxs)(Yc,{children:[(0,l().jsxs)(Kc,{children:[(0,l().jsxs)(Qc,{children:[(0,l().jsx)(Jc,{children:a.index}),(0,l().jsx)(Xc,{children:a.label})]}),(0,l().jsx)(Zc,{}),(0,l().jsxs)(eu,{children:[(0,l().jsxs)(tu,{children:[(0,l().jsx)(nu,{children:a.title}),(0,l().jsx)(ru,{})]}),(0,l().jsx)(ou,{children:(0,l().jsx)(au,{children:a.description})})]})]}),(0,l().jsxs)(iu,{children:[(0,l().jsxs)(lu,{children:[(0,l().jsx)(su,{children:a.gridLabel}),(0,l().jsx)(cu,{})]}),(0,l().jsx)(uu,{$visible:r,children:(0,l().jsx)(Wc,{})})]})]})})},pu=fn.article`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 27px);

  width: 100%;
  min-width: 0;
  padding: clamp(22px, 3.5vw, 36px);

  background: var(--color-background-secondary);
  border: 1px solid var(--color-border);
  border-radius: 18px;

  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;

  @media (hover: hover) {
    &:hover {
      border-color: var(--color-primary);
      box-shadow: var(--shadow-md);
      transform: translateY(-3px);
    }
  }

  @media (max-width: 600px) {
    padding: 21px 19px;
    border-radius: 14px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`,fu=fn.div`
  display: flex;
  align-items: flex-start;
  gap: clamp(14px, 2.5vw, 24px);
`,hu=fn.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;

  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: var(--color-background);

  color: var(--color-text-secondary);
  font-size: 1rem;
  font-weight: 800;
  font-variant-numeric: tabular-nums;

  @media (max-width: 480px) {
    width: 41px;
    height: 41px;
    border-radius: 10px;
  }
`,mu=fn.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
  min-width: 0;
`,gu=fn.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 7px;
  }
`,vu=fn.h3`
  margin: 0;
  color: var(--color-text-primary);
  font-size: clamp(1.15rem, 2vw, 1.45rem);
  font-weight: 800;
  line-height: 1.55;
  overflow-wrap: anywhere;
`,yu=fn.span`
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
`,bu=fn.p`
  margin: 0;
  max-width: 850px;

  color: var(--color-text-secondary);
  font-size: clamp(0.9rem, 1.4vw, 0.98rem);
  line-height: 1.95;
  overflow-wrap: anywhere;
`,xu=fn.a`
  color: var(--color-primary);
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 4px;

  &:hover {
    color: var(--color-primary-dark);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }
`,wu=e=>{let{content:t}=e;return"string"===typeof t?(0,l().jsx)(bu,{children:t}):Array.isArray(t)?(0,l().jsx)(bu,{children:t.map((e,t)=>{var n,r;return"string"===typeof e?(0,l().jsx)("span",{children:e},t):"link"===(null===e||void 0===e?void 0:e.type)&&e.href?(0,l().jsx)(xu,{href:e.href,target:"_blank",rel:"noopener noreferrer",children:e.text},t):(0,l().jsx)("span",{children:null!==(n=null!==(r=null===e||void 0===e?void 0:e.value)&&void 0!==r?r:null===e||void 0===e?void 0:e.text)&&void 0!==n?n:""},t)})}):null},ku=fn.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 9px;

  margin: 0;
  padding: 0;
  list-style: none;
`,Su=fn.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 32px;
  padding: 6px 12px;

  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-background);

  color: var(--color-text-secondary);
  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1.4;

  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-text-primary);
  }
`,ju=fn.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 12px;

  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid var(--color-border);

  @media (max-width: 480px) {
    gap: 10px;
  }
`,Cu=fn(ac)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  min-width: 170px;
  min-height: 48px;
  padding: 12px 24px;

  border-radius: 12px;

  font-size: 0.96rem;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;

  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;

  /*
    Secondary button:
    Transparent live preview
  */

  ${e=>{let{$variant:t}=e;return"secondary"===t&&"\n      background: transparent;\n      color: var(--color-text-primary);\n      border: 1px solid var(--color-border);\n\n      &:hover {\n        background: var(--color-background-tertiary);\n        color: var(--color-text-primary);\n        border-color: var(--color-primary);\n      }\n\n      &:active {\n        background: var(--color-background-tertiary);\n      }\n    "}}

  & svg {
    width: 17px;
    height: 17px;
    flex-shrink: 0;
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 3px;
  }

  @media (max-width: 480px) {
    flex: 1 1 140px;
    min-width: 0;
    min-height: 48px;
    padding: 12px 16px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Eu=fn.span`
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
`,Tu=e=>{let{index:t=0,title:n,date:r,description:o,techStack:a,toLink:i,value1:s,value2:c,toHref:u}=e;const d=Array.isArray(a)?a:[],p="string"===typeof u&&u.trim().length>0&&"#"!==u,f=String(t+1).padStart(2,"0");return(0,l().jsxs)(pu,{children:[(0,l().jsxs)(fu,{children:[(0,l().jsx)(hu,{"aria-hidden":"true",children:f}),(0,l().jsxs)(mu,{children:[(0,l().jsxs)(gu,{children:[(0,l().jsx)(vu,{children:n}),r&&(0,l().jsxs)(yu,{children:[(0,l().jsx)(gl,{"aria-hidden":"true"}),(0,l().jsx)("span",{dir:"auto",children:r})]})]}),(0,l().jsx)(wu,{content:o})]})]}),d.length>0&&(0,l().jsx)(ku,{"aria-label":"Technologies",children:d.map((e,t)=>(0,l().jsx)(Su,{children:e},`${e}-${t}`))}),(0,l().jsxs)(ju,{children:[(0,l().jsxs)(Cu,{as:Bo,to:i,children:[s,(0,l().jsxs)(Eu,{children:[(0,l().jsx)(wl,{className:"rtl-arrow","aria-hidden":"true"}),(0,l().jsx)(xl,{className:"ltr-arrow","aria-hidden":"true"})]})]}),p&&(0,l().jsxs)(Cu,{as:"a",href:u,target:"_blank",rel:"noopener noreferrer",$variant:"secondary",children:[c,(0,l().jsx)(cl,{"aria-hidden":"true"})]})]})]})},Pu=fn.div`
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2.5vw, 22px);

  width: 100%;
  min-width: 0;
`,Nu=fn.p`
  margin: 0;
  padding: 40px 20px;

  border: 1px solid var(--color-border);
  border-radius: 14px;
  background: var(--color-background-secondary);

  color: var(--color-text-secondary);
  text-align: center;
  line-height: 1.8;
`,Lu=()=>{const{t:e,i18n:t}=ma(["home","projects","common"]),n=(t.resolvedLanguage||t.language||"ar").startsWith("ar"),r=e("featuredProjects.items",{ns:"home",returnObjects:!0,defaultValue:[]}),o=Array.isArray(r)?r:[];return 0===o.length?(0,l().jsx)(Nu,{children:n?"\u0644\u0627 \u062a\u0648\u062c\u062f \u0645\u0634\u0627\u0631\u064a\u0639 \u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0639\u0631\u0636 \u062d\u0627\u0644\u064a\u064b\u0627.":"No projects available at the moment."}):(0,l().jsx)(Pu,{children:o.map((t,r)=>{const o=t.id,a=o?`/projects/${encodeURIComponent(o)}`:"/projects",i=t.shortDescription||t.desc||"";return(0,l().jsx)(Tu,{index:r,title:t.title,date:t.date,description:i,techStack:t.tech_stack,toLink:a,toHref:t.link,value1:e("buttons.view_project",{ns:"common",defaultValue:n?"\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639":"Project Details"}),value2:e("buttons.demo",{ns:"common",defaultValue:n?"\u0645\u0639\u0627\u064a\u0646\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639":"Live Preview"})},o||r)})})},zu=fn(Xo)`
  width: 100%;
  min-height: auto;
  padding-block: clamp(70px, 8vw, 110px);
  background: var(--color-background);
  color: var(--color-text-primary);

  @media (max-width: 600px) {
    padding-block: 55px 70px;
  }
`,Ou=fn(Zo)`
  display: flex;
  flex-direction: column;
  gap: clamp(30px, 4vw, 45px);
  width: 100%;
  min-width: 0;
`,Ru=fn.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 25px;

  @media (max-width: 700px) {
    align-items: flex-start;
  }
`,_u=fn.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 700px;
`,Du=fn.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--color-primary);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;

  &::before {
    content: "";
    width: 24px;
    height: 2px;
    background: currentColor;
    border-radius: 2px;
  }
`,Au=fn.h2`
  margin: 0;
  color: var(--color-text-primary);
  font-size: clamp(1.85rem, 3.5vw, 2.7rem);
  font-weight: 800;
  line-height: 1.4;
`,Mu=fn.p`
  margin: 0;
  color: var(--color-text-secondary);
  font-size: clamp(0.93rem, 1.5vw, 1.03rem);
  line-height: 1.95;
`,Iu=fn(Bo)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-shrink: 0;
  min-height: 45px;
  padding: 10px 16px;

  border: 1px solid var(--color-border);
  border-radius: 10px;
  background: var(--color-background-secondary);
  color: var(--color-text-primary);

  font-size: 0.87rem;
  font-weight: 700;
  text-decoration: none;

  transition:
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    border-color: var(--color-primary);
    background: var(--color-background-tertiary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }

  svg {
    width: 17px;
    height: 17px;
  }

  @media (max-width: 700px) {
    display: none;
  }
`,$u=fn(Iu)`
  display: none;

  @media (max-width: 700px) {
    display: inline-flex;
    align-self: center;
  }
`,Fu=fn.span`
  display: inline-flex;

  .arrow-ltr {
    display: none;
  }

  [dir="ltr"] & .arrow-rtl {
    display: none;
  }

  [dir="ltr"] & .arrow-ltr {
    display: block;
  }
`,Uu=()=>{const{t:e}=ma(),t=e("home:featuredProjects.header.view_projects");return(0,l().jsx)(zu,{id:"featured-projects",children:(0,l().jsxs)(Ou,{children:[(0,l().jsxs)(Ru,{children:[(0,l().jsxs)(_u,{children:[(0,l().jsx)(Du,{children:e("home:featuredProjects.header.label",{defaultValue:"PORTFOLIO"})}),(0,l().jsx)(Au,{children:e("home:featuredProjects.header.title")}),(0,l().jsx)(Mu,{children:e("home:featuredProjects.header.desc")})]}),(0,l().jsxs)(Iu,{to:"/projects",children:[t,(0,l().jsxs)(Fu,{children:[(0,l().jsx)(wl,{className:"arrow-rtl"}),(0,l().jsx)(xl,{className:"arrow-ltr"})]})]})]}),(0,l().jsx)(Lu,{}),(0,l().jsxs)($u,{to:"/projects",children:[t,(0,l().jsxs)(Fu,{children:[(0,l().jsx)(wl,{className:"arrow-rtl"}),(0,l().jsx)(xl,{className:"arrow-ltr"})]})]})]})})},Hu=fn(Xo)`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: auto;
  padding-block: clamp(80px, 9vw, 125px);

  background: var(--color-background-secondary);
  border-top: 1px solid var(--color-border);

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    border: 1px solid var(--color-border);
    pointer-events: none;
    opacity: 0.6;
  }

  &::before {
    top: -170px;
    inset-inline-start: -100px;
  }

  &::after {
    bottom: -180px;
    inset-inline-end: -100px;
  }

  @media (max-width: 768px) {
    padding-block: 70px;
  }

  @media (max-width: 480px) {
    padding-block: 58px;
  }
`,Bu=fn(Zo)`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 900px;
  gap: clamp(17px, 2vw, 25px);
  text-align: center;
`,Wu=fn(Dl)`
  margin: 0;
  max-width: 770px;

  color: var(--color-text-primary);
  font-size: clamp(1.75rem, 3.5vw, 2.8rem);
  font-weight: 800;
  line-height: 1.5;
  text-wrap: balance;

  @media (max-width: 480px) {
    font-size: clamp(1.5rem, 6vw, 1.95rem);
  }
`,Vu=fn(Ml)`
  margin: 0;
  width: 100%;
  max-width: 650px;

  color: var(--color-text-secondary);
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  line-height: 2;
  text-wrap: pretty;

  @media (max-width: 480px) {
    font-size: 0.93rem;
    line-height: 1.9;
  }
`,qu=fn.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 100%;
  margin-top: 14px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    max-width: 360px;
    gap: 12px;
  }
`,Gu=fn(ac)`
  min-width: 180px;
  min-height: 49px;
  padding: 12px 25px;
  border-radius: 11px;
  font-size: 0.95rem;
  font-weight: 700;

  @media (max-width: 480px) {
    width: 100%;
    min-width: 0;
  }
`,Yu=()=>{const{t:e}=ma();return(0,l().jsx)(Hu,{id:"call-to-action",children:(0,l().jsxs)(Bu,{children:[(0,l().jsx)(Wu,{as:"h2",children:e("home:callToAction.title")}),(0,l().jsx)(Vu,{children:e("home:callToAction.paragraph")}),(0,l().jsxs)(qu,{children:[(0,l().jsx)(Gu,{as:Bo,to:"/contact",children:e("buttons.contact")}),(0,l().jsx)(Gu,{as:Bo,to:"/projects",$variant:"secondary",children:e("buttons.projects")})]})]})})},Ku=()=>(0,l().jsxs)("main",{id:"main-content",children:[(0,l().jsx)(Mc,{}),(0,l().jsx)(du,{}),(0,l().jsx)(Uu,{}),(0,l().jsx)(Yu,{})]}),Qu=fn.main`
  width: 100%;
  min-width: 0;
  overflow-x: clip;

  background: var(
    --color-background,
    #f4f7fb
  );

  color: var(
    --color-text-primary,
    #172435
  );
`,Ju=fn.div`
  width: 100%;
  padding: 0;
  margin: 0;
`,Xu=fn.h1`
  display: flex;
  align-items: center;
  gap: 12px;

  margin: 0 0 14px;

  color: var(
    --color-text-primary,
    #172435
  );

  font-size: clamp(
    2rem,
    4vw,
    3rem
  );

  font-weight: 800;
  line-height: 1.45;
  text-align: start;

  svg {
    flex-shrink: 0;

    color: var(
      --color-primary,
      #0065a8
    );

    font-size: 0.8em;
  }

  @media (max-width: 600px) {
    gap: 10px;
  }
`,Zu=fn.p`
  max-width: 850px;
  margin: 0;

  color: var(
    --color-text-secondary,
    #475569
  );

  font-size: clamp(
    0.92rem,
    1.5vw,
    1rem
  );

  font-weight: 400;
  line-height: 2;
  text-align: start;
`,ed=fn.section`
  width: 100%;

  padding-block:
    clamp(35px, 5vw, 65px)
    clamp(65px, 8vw, 100px);

  background: var(
    --color-background,
    #f4f7fb
  );
`,td=fn(Zo)`
  display: flex;
  flex-direction: column;
  gap: clamp(24px, 4vw, 35px);
`,nd=fn.div`
  display: flex;
  align-items: center;
  gap: 14px;

  width: 100%;

  padding-bottom: 20px;

  border-bottom: 1px solid
    var(
      --color-border,
      #d5e0eb
    );

  text-align: start;

  @media (max-width: 600px) {
    gap: 11px;
    padding-bottom: 15px;
  }
`,rd=fn.span`
  display: grid;
  place-items: center;

  flex-shrink: 0;

  width: 46px;
  height: 46px;

  border: 1px solid
    var(
      --color-border,
      #d5e0eb
    );

  border-radius: 10px;

  background: var(
    --color-card-background,
    #ffffff
  );

  color: var(
    --color-primary,
    #0065a8
  );

  font-size: 1.3rem;

  @media (max-width: 600px) {
    width: 42px;
    height: 42px;
    font-size: 1.15rem;
  }
`,od=fn.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: 0;
`,ad=fn.h2`
  margin: 0;

  color: var(
    --color-text-primary,
    #172435
  );

  font-size: clamp(
    1.25rem,
    2.5vw,
    1.65rem
  );

  font-weight: 800;
  line-height: 1.5;
`,id=fn.p`
  margin: 0;

  color: var(
    --color-text-secondary,
    #475569
  );

  font-size: 0.88rem;
  line-height: 1.85;
`,ld=fn.div`
  width: 100%;
  min-width: 0;

  & > * {
    max-width: 100%;
  }
`,sd=()=>{const{t:e,i18n:t}=ma(["projects","common"]),n=(t.resolvedLanguage||t.language||"ar").startsWith("ar"),r=e("projects:pageTitle",{defaultValue:n?"\u0645\u0634\u0627\u0631\u064a\u0639\u064a":"My Projects"}),o=e("projects:pageDesc",{defaultValue:n?"\u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062a\u064a \u0642\u0645\u062a \u0628\u062a\u0635\u0645\u064a\u0645\u0647\u0627 \u0648\u062a\u0637\u0648\u064a\u0631\u0647\u0627\u060c \u0648\u062a\u0639\u0643\u0633 \u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0648\u062e\u0628\u0631\u062a\u064a \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0645\u0648\u0627\u0642\u0639 \u0648\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u0648\u064a\u0628.":"A collection of projects I have designed and developed, reflecting my technical skills and experience in building websites and web applications."}),a=e("projects:section.title",{defaultValue:n?"\u0627\u0633\u062a\u0643\u0634\u0641 \u0645\u0634\u0627\u0631\u064a\u0639\u064a":"Explore My Projects"}),i=e("projects:section.description",{defaultValue:n?"\u062a\u0635\u0641\u062d \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0627\u0637\u0644\u0639 \u0639\u0644\u0649 \u062a\u0641\u0627\u0635\u064a\u0644 \u0643\u0644 \u0645\u0634\u0631\u0648\u0639 \u0648\u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0629 \u0641\u064a \u062a\u0637\u0648\u064a\u0631\u0647.":"Browse my projects and explore their details and the technologies used to build them."});return(0,l().jsxs)(Qu,{dir:n?"rtl":"ltr",children:[(0,l().jsxs)(Ul,{children:[(0,l().jsx)(Ol,{value:"projects"}),(0,l().jsx)(Hl,{children:(0,l().jsxs)(Ju,{children:[(0,l().jsx)(Xu,{children:r}),(0,l().jsx)(Zu,{children:o})]})})]}),(0,l().jsx)(ed,{"aria-label":a,children:(0,l().jsxs)(td,{children:[(0,l().jsxs)(nd,{children:[(0,l().jsx)(rd,{"aria-hidden":"true",children:(0,l().jsx)(al,{})}),(0,l().jsxs)(od,{children:[(0,l().jsx)(ad,{children:a}),(0,l().jsx)(id,{children:i})]})]}),(0,l().jsx)(ld,{children:(0,l().jsx)(Lu,{})})]})})]})},cd={react1:n.p+"static/media/react1.e3bd6953a72d9511b7db.png",anaalmughyir1:n.p+"static/media/anaalmughyir1.068f79c3a22321ddb8b5.png"},ud=fn(Zo)`
  padding-top: 50px;
  padding-bottom: 80px;
`,dd=fn.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 36px;
`,pd=fn.h1`
  margin: 0;
  color: var(--color-heading);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  line-height: 1.5;
`,fd=fn.p`
  max-width: 850px;
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 2;
`,hd=fn.span`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
`,md=fn.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, 320px), 1fr)
  );
  gap: 20px;
  margin-bottom: 45px;
`,gd=fn.img`
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  background: var(--color-card-background);
  box-shadow: var(--shadow-card);
`,vd=fn.section`
  margin-bottom: 40px;
`,yd=fn.h2`
  margin: 0 0 18px;
  color: var(--color-heading);
  font-size: clamp(1.25rem, 2.5vw, 1.65rem);
  font-weight: 800;
`,bd=fn.ul`
  display: grid;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
`,xd=fn.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: var(--color-text-secondary);
  line-height: 1.8;

  svg {
    flex-shrink: 0;
    margin-top: 5px;
    color: var(--color-primary);
  }
`,wd=fn.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`,kd=fn.li`
  padding: 9px 15px;
  border: 1px solid var(--color-border);
  border-radius: 9px;
  background: var(--color-surface);
  color: var(--color-text-primary);
  font-size: 0.9rem;
  font-weight: 600;
`,Sd=fn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 35px;
`,jd=fn.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  padding: 12px 22px;
  border: 1px solid var(--color-primary);
  border-radius: 12px;
  background: var(--color-button-background);
  color: var(--color-button-text);
  font-weight: 700;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
    color: var(--color-button-text);
  }
`,Cd=fn(Bo)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  color: var(--color-primary);
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,Ed=()=>{const{projectId:e}=$r(),{t:t,i18n:n}=ma("projects"),r=t("items",{returnObjects:!0,defaultValue:[]}),o=Array.isArray(r)?r.find(t=>t.id===e):void 0,a=(n.resolvedLanguage||n.language||"ar").startsWith("ar")?kl:Sl;if(!o)return(0,l().jsxs)(l().Fragment,{children:[(0,l().jsxs)(Ul,{children:[(0,l().jsx)(Ol,{value:"projects"}),(0,l().jsx)(Hl,{children:(0,l().jsx)(pd,{children:t("details.notFound")})})]}),(0,l().jsxs)(ud,{children:[(0,l().jsx)(fd,{children:t("details.notFoundDescription")}),(0,l().jsxs)(Cd,{to:"/projects",children:[(0,l().jsx)(a,{}),t("details.backToProjects")]})]})]});const i=Array.isArray(o.project_img)?o.project_img.map(e=>cd[e]).filter(Boolean):[];return(0,l().jsxs)(l().Fragment,{children:[(0,l().jsxs)(Ul,{children:[(0,l().jsx)(Ol,{value:"projects",projectTitle:o.title}),(0,l().jsxs)(Hl,{children:[(0,l().jsx)(pd,{children:o.title}),(0,l().jsx)(fd,{children:o.shortDescription})]})]}),(0,l().jsxs)(ud,{children:[(0,l().jsx)(dd,{children:o.date&&(0,l().jsxs)(hd,{children:[(0,l().jsx)(gl,{"aria-hidden":"true"}),t("details.date"),":"," ",(0,l().jsx)("span",{dir:"ltr",children:o.date})]})}),i.length>0&&(0,l().jsxs)(vd,{children:[(0,l().jsx)(yd,{children:t("details.gallery")}),(0,l().jsx)(md,{children:i.map((e,t)=>(0,l().jsx)(gd,{src:e,alt:`${o.title} - ${t+1}`,loading:"lazy"},`${o.id}-${t}`))})]}),o.overview&&(0,l().jsxs)(vd,{children:[(0,l().jsx)(yd,{children:t("details.overview")}),(0,l().jsx)(fd,{children:o.overview})]}),Array.isArray(o.features)&&o.features.length>0&&(0,l().jsxs)(vd,{children:[(0,l().jsx)(yd,{children:t("details.features")}),(0,l().jsx)(bd,{children:o.features.map((e,t)=>(0,l().jsxs)(xd,{children:[(0,l().jsx)(ml,{"aria-hidden":"true"}),(0,l().jsx)("span",{children:e})]},t))})]}),Array.isArray(o.tech_stack)&&o.tech_stack.length>0&&(0,l().jsxs)(vd,{children:[(0,l().jsx)(yd,{children:t("details.technologies")}),(0,l().jsx)(wd,{children:o.tech_stack.map(e=>(0,l().jsx)(kd,{children:e},e))})]}),(0,l().jsxs)(Sd,{children:[o.demo&&(0,l().jsxs)(jd,{href:o.demo,target:"_blank",rel:"noopener noreferrer",children:[t("details.liveDemo"),(0,l().jsx)(cl,{"aria-hidden":"true"})]}),o.github&&(0,l().jsxs)(jd,{href:o.github,target:"_blank",rel:"noopener noreferrer",children:[t("details.sourceCode"),(0,l().jsx)(il,{"aria-hidden":"true"})]})]}),(0,l().jsxs)(Cd,{to:"/projects",children:[(0,l().jsx)(a,{"aria-hidden":"true"}),t("details.backToProjects")]})]})]})};var Td=(0,s().forwardRef)((e,t)=>{let{as:n="div",...r}=e;return(0,l().jsx)(n,{...r,ref:t})});const Pd="onloadTurnstileCallback",Nd=e=>!!document.getElementById(e),Ld={normal:{width:300,height:65},compact:{width:150,height:140},invisible:{width:0,height:0,overflow:"hidden"},flexible:{minWidth:300,width:"100%",height:65}};function zd(e){if("invisible"!==e)return e}let Od,Rd="unloaded";const _d=new Promise((e,t)=>{Od={resolve:e,reject:t},"ready"===Rd&&e(void 0)}),Dd=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pd;return"unloaded"===Rd&&(Rd="loading",window[e]=()=>{Od.resolve(),Rd="ready",delete window[e]}),_d},Ad=(0,s().forwardRef)((e,t)=>{let{scriptOptions:n,options:r={},siteKey:o,onWidgetLoad:a,onSuccess:i,onExpire:c,onError:u,onBeforeInteractive:d,onAfterInteractive:p,onUnsupported:f,onTimeout:h,onLoadScript:m,id:g,style:v,as:y="div",injectScript:b=!0,rerenderOnCallbackChange:x=!1,...w}=e,k=r.size,S=(0,s().useMemo)(()=>{if(void 0===k)return{};let e=Ld[k];return"interaction-only"===r.appearance?{...e,height:"auto"}:e},[k,r.appearance]),j="execute"===r.execution?Ld.invisible:S,[C,E]=(0,s().useState)(j),T=(0,s().useRef)(null),[P,N]=(0,s().useState)(!1),L=(0,s().useRef)(void 0),z=(0,s().useRef)(!1),O=g||"cf-turnstile",R=(0,s().useRef)({onSuccess:i,onError:u,onExpire:c,onBeforeInteractive:d,onAfterInteractive:p,onUnsupported:f,onTimeout:h});(0,s().useEffect)(()=>{x||(R.current={onSuccess:i,onError:u,onExpire:c,onBeforeInteractive:d,onAfterInteractive:p,onUnsupported:f,onTimeout:h})});let _=n?.id||"cf-turnstile-script",D=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cf-turnstile-script",[t,n]=(0,s().useState)(!1);return(0,s().useEffect)(()=>{let t=()=>{Nd(e)&&n(!0)},r=new MutationObserver(t);return r.observe(document,{childList:!0,subtree:!0}),t(),()=>{r.disconnect()}},[e]),t}(_),A=n?.onLoadCallbackName||"onloadTurnstileCallback",M=(0,s().useMemo)(()=>({sitekey:o,action:r.action,cData:r.cData,theme:r.theme||"auto",language:r.language||"auto",tabindex:r.tabIndex,"response-field":r.responseField,"response-field-name":r.responseFieldName,size:zd(k),retry:r.retry||"auto","retry-interval":r.retryInterval||8e3,"refresh-expired":r.refreshExpired||"auto","refresh-timeout":r.refreshTimeout||"auto",execution:r.execution||"render",appearance:r.appearance||"always","feedback-enabled":r.feedbackEnabled??!0,"offlabel-show-privacy":r.offlabelShowPrivacy??!0,"offlabel-show-help":r.offlabelShowHelp??!0,callback:e=>{z.current=!0,x?i?.(e):R.current.onSuccess?.(e)},"error-callback":x?u:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return R.current.onError?.(...t)},"expired-callback":x?c:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return R.current.onExpire?.(...t)},"before-interactive-callback":x?d:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return R.current.onBeforeInteractive?.(...t)},"after-interactive-callback":x?p:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return R.current.onAfterInteractive?.(...t)},"unsupported-callback":x?f:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return R.current.onUnsupported?.(...t)},"timeout-callback":x?h:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return R.current.onTimeout?.(...t)}}),[r.action,r.appearance,r.cData,r.execution,r.language,r.refreshExpired,r.responseField,r.responseFieldName,r.retry,r.retryInterval,r.tabIndex,r.theme,r.feedbackEnabled,r.offlabelShowPrivacy,r.offlabelShowHelp,r.refreshTimeout,o,k,x,x?i:null,x?u:null,x?c:null,x?d:null,x?p:null,x?f:null,x?h:null]),I=(0,s().useCallback)(()=>typeof window<"u"&&!!window.turnstile,[]),$=(0,s().useCallback)((e,t)=>{try{return window.turnstile.render(e,t)}catch(e){let t=x?u:R.current.onError;return void(t?t(e instanceof Error?e.message:String(e)):console.error(e))}},[x,x?u:null]);return(0,s().useEffect)(function(){b&&!P&&(Dd(A),(e=>{let{render:t="explicit",onLoadCallbackName:n=Pd,scriptOptions:{nonce:r="",defer:o=!0,async:a=!0,id:i="",appendTo:l,onError:s,crossOrigin:c=""}={}}=e,u=i||"cf-turnstile-script";if(Nd(u))return;let d=document.createElement("script");d.id=u,d.src=`https://challenges.cloudflare.com/turnstile/v0/api.js?onload=${n}&render=${t}`,!document.querySelector(`script[src="${d.src}"]`)&&(d.defer=!!o,d.async=!!a,r&&d.setAttribute("nonce",r),c&&(d.crossOrigin=c),s&&(d.onerror=()=>{delete window[n],s()}),("body"===l?document.body:document.getElementsByTagName("head")[0]).appendChild(d))})({onLoadCallbackName:A,scriptOptions:{...n,id:_}}))},[b,P,n,_,A]),(0,s().useEffect)(function(){"ready"!==Rd&&Dd(A).then(()=>N(!0)).catch(console.error)},[A]),(0,s().useEffect)(function(){if(!T.current||!P)return;let e=!1;return(async()=>{if(e||!T.current)return;let t=$(T.current,M);L.current=t,E(j),L.current&&a?.(L.current)})(),()=>{e=!0,L.current&&(window.turnstile.remove(L.current),z.current=!1)}},[O,P,M,j,$]),(0,s().useImperativeHandle)(t,()=>{let{turnstile:e}=window;return{getResponse(){if(e?.getResponse&&L.current&&I())return e.getResponse(L.current);console.warn("Turnstile has not been loaded")},async getResponsePromise(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e4,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return new Promise((n,r)=>{let o,a=async()=>{if(z.current&&window.turnstile&&L.current)try{let e=window.turnstile.getResponse(L.current);return o&&clearTimeout(o),e?n(e):r(Error("No response received"))}catch(e){return o&&clearTimeout(o),console.warn("Failed to get response",e),r(Error("Failed to get response"))}o||=setTimeout(()=>{o&&clearTimeout(o),r(Error("Timeout"))},e),await new Promise(e=>setTimeout(e,t)),await a()};a()})},reset(){if(e?.reset&&L.current&&I()){E(j);try{z.current=!1,e.reset(L.current)}catch(e){console.warn(`Failed to reset Turnstile widget ${L.current}`,e)}}else console.warn("Turnstile has not been loaded")},remove(){e?.remove&&L.current&&I()?(E(Ld.invisible),z.current=!1,e.remove(L.current),L.current=null):console.warn("Turnstile has not been loaded")},render(){if(!e?.render||!T.current||!I()||L.current)return void console.warn("Turnstile has not been loaded or container not found");let t=$(T.current,M);return L.current=t,L.current&&a?.(L.current),E(j),t},execute(){"execute"===r.execution?e?.execute&&T.current&&L.current&&I()?(e.execute(T.current),E(S)):console.warn("Turnstile has not been loaded or container not found"):console.warn('Execution mode is not set to "execute"')},isExpired:()=>e?.isExpired&&L.current&&I()?e.isExpired(L.current):(console.warn("Turnstile has not been loaded"),!1)}},[L,r.execution,M,T,I,$,P,a,j,S]),(0,s().useEffect)(()=>{if(P||!D)return;if(window.turnstile)return void N(!0);let e=setInterval(()=>{window.turnstile&&(N(!0),clearInterval(e))},50);return()=>{clearInterval(e)}},[P,D]),(0,s().useEffect)(()=>{E(j)},[j]),(0,s().useEffect)(()=>{D&&"function"==typeof m&&m()},[D]),(0,l().jsx)(Td,{ref:T,as:y,id:O,style:{...C,...v},...w})});Ad.displayName="Turnstile";const Md="abdulrahman-contact-draft-v2",Id={"image/jpeg":[".jpg",".jpeg"],"image/png":[".png"],"image/webp":[".webp"],"application/pdf":[".pdf"],"application/msword":[".doc"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[".docx"],"text/plain":[".txt"],"text/csv":[".csv"],"application/vnd.ms-excel":[".xls"],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"],"application/vnd.ms-powerpoint":[".ppt"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[".pptx"],"application/zip":[".zip"],"application/x-zip-compressed":[".zip"]},$d=[...new Set(Object.values(Id).flat())],Fd="dhomlmgyr@gmail.com",Ud="966541590819",Hd="https://wa.me/966541590819",Bd="https://linkedin.com/in/dhomlmgyr",Wd="https://github.com/dhomlmgyr188",Vd="https://www.instagram.com/dhomlmgyr",qd="https://www.snapchat.com/t/0jbJpmvk",Gd=["general","question","suggestion","feedback","collaboration","employment","project","other"],Yd={firstName:"",lastName:"",email:"",phone:"",topic:"",customTopic:"",message:"",botcheck:""},Kd=e=>e.trim().replace(/[\s()-]/g,""),Qd=e=>{const t=e.lastIndexOf(".");return-1===t?"":e.slice(t).toLowerCase()},Jd=e=>`${(e/1048576).toFixed(2)} MB`,Xd=()=>{try{const e=sessionStorage.getItem(Md)||sessionStorage.getItem("abdulrahman-contact-draft-v1");if(!e)return{...Yd};const t=JSON.parse(e);return t&&"object"===typeof t?{...Yd,firstName:String(t.firstName||"").slice(0,80),lastName:String(t.lastName||"").slice(0,80),email:String(t.email||"").slice(0,254),phone:String(t.phone||"").slice(0,25),topic:Gd.includes(t.topic)?t.topic:"",customTopic:String(t.customTopic||"").slice(0,120),message:String(t.message||"").slice(0,5e3),botcheck:""}:{...Yd}}catch{return{...Yd}}},Zd=yn`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,ep=fn.main`
  --contact-bg: var(--color-background);
  --contact-panel-bg: var(--color-surface);
  --contact-input-bg: var(--color-input-background);
  --contact-text: var(--color-text-primary);
  --contact-muted: var(--color-text-secondary);
  --contact-border: var(--color-border);
  --contact-accent: var(--color-primary);
  --contact-accent-text: var(--color-on-primary);
  --contact-soft: var(--color-primary-soft);
  --contact-focus: var(--color-border-focus);

  width: 100%;
  min-width: 0;

  background-color: var(--contact-bg);
  color: var(--contact-text);

  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  /*
    Uses the site's actual theme variables.
    Dark section background remains black.
  */

  [data-theme="dark"] & {
    --contact-bg: var(--color-background);
    --contact-panel-bg: var(--color-surface);
    --contact-input-bg: var(--color-input-background);
    --contact-text: var(--color-text-primary);
    --contact-muted: var(--color-text-secondary);
    --contact-border: var(--color-border);
    --contact-accent: var(--color-primary);
    --contact-accent-text: var(--color-on-primary);
    --contact-soft: var(--color-primary-soft);
    --contact-focus: var(--color-border-focus);
  }
`,tp=fn.div`
  width: min(
    calc(100% - 40px),
    var(--container-width, 1200px)
  );

  max-width: 100%;
  min-width: 0;

  margin-inline: auto;
`,np=fn.section`
  width: 100%;
  min-width: 0;

  padding: 60px 0 90px;

  background-color: var(--contact-bg);
  color: var(--contact-text);

  @media (max-width: 768px) {
    padding: 35px 0 60px;
  }
`,rp=fn.div`
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
`,op=fn.div`
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
`,ap=fn.h2`
  margin: 0 0 10px;

  font-size: clamp(21px, 2.5vw, 27px);
  font-weight: 700;

  color: var(--contact-text);
`,ip=fn.p`
  margin: 0 0 28px;

  font-size: 14px;
  line-height: 1.9;

  color: var(--contact-muted);
`,lp=fn.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
`,sp=fn.div`
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 18px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,cp=fn.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  min-width: 0;
`,up=fn.label`
  font-size: 14px;
  font-weight: 600;

  color: var(--contact-text);
`,dp=fn.span`
  color: var(--color-danger);
  margin-inline-start: 3px;
`,pp="\n  width: 100%;\n  min-width: 0;\n  min-height: 49px;\n\n  padding: 12px 15px;\n\n  border: 1px solid var(--contact-border);\n  border-radius: 9px;\n\n  background-color: var(--contact-input-bg);\n  color: var(--contact-text);\n\n  font-family: inherit;\n  font-size: 14px;\n\n  outline: none;\n\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background-color 0.3s ease,\n    color 0.3s ease;\n\n  &::placeholder {\n    color: var(--color-input-placeholder);\n    opacity: 1;\n  }\n\n  &:focus {\n    border-color: var(--contact-focus);\n    box-shadow: 0 0 0 3px\n      color-mix(\n        in srgb,\n        var(--contact-focus) 15%,\n        transparent\n      );\n  }\n\n  &:disabled {\n    opacity: 0.65;\n    cursor: not-allowed;\n  }\n",fp=fn.input`
  ${pp}
`,hp=fn.textarea`
  ${pp}

  min-height: 155px;
  resize: vertical;
  line-height: 1.8;
`,mp=fn.div`
  position: relative;

  svg {
    position: absolute;
    inset-inline-end: 15px;
    top: 50%;

    transform: translateY(-50%);

    pointer-events: none;
    color: var(--contact-muted);
  }
`,gp=fn.select`
  ${pp}

  appearance: none;
  cursor: pointer;
  padding-inline-end: 40px;

  option {
    color: var(--contact-text);
    background-color: var(--contact-input-bg);
  }
`,vp=fn.p`
  margin: -5px 0 0;

  font-size: 12px;
  line-height: 1.8;

  color: var(--contact-muted);
`,yp=fn.div`
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
`,bp=fn.div`
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
`,xp=fn(function(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 16 12 12 8 16"},child:[]},{tag:"line",attr:{x1:"12",y1:"12",x2:"12",y2:"21"},child:[]},{tag:"path",attr:{d:"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"},child:[]},{tag:"polyline",attr:{points:"16 16 12 12 8 16"},child:[]}]})(e)})`
  display: block;
  margin: 0 auto 12px;

  font-size: 30px;
  color: var(--contact-accent);
`,wp=fn.p`
  margin: 0 0 6px;

  font-size: 14px;
  font-weight: 600;

  color: var(--contact-text);
`,kp=fn.p`
  margin: 0 0 14px;

  font-size: 12px;
  line-height: 1.8;

  color: var(--contact-muted);
`,Sp=fn.button`
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
    color: var(--contact-text);
    background-color: var(--contact-soft);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,jp=fn.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  margin-top: 12px;
`,Cp=fn.div`
  display: flex;
  align-items: center;
  gap: 11px;

  min-width: 0;
  padding: 11px 13px;

  border: 1px solid var(--contact-border);
  border-radius: 9px;

  background-color: var(--contact-input-bg);
`,Ep=fn(ll)`
  flex-shrink: 0;
  font-size: 21px;
  color: var(--contact-accent);
`,Tp=fn.div`
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
`,Pp=fn.button`
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
`,Np=fn.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;

  font-size: 12px;
  color: var(--contact-muted);
`,Lp=fn.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  min-width: 0;
  overflow: hidden;
`,zp=fn.div`
  max-width: 100%;
  min-height: 65px;
  overflow: hidden;
`,Op=fn.button`
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
`,Rp=fn.button`
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
`,_p=fn(function(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"6"},child:[]},{tag:"line",attr:{x1:"12",y1:"18",x2:"12",y2:"22"},child:[]},{tag:"line",attr:{x1:"4.93",y1:"4.93",x2:"7.76",y2:"7.76"},child:[]},{tag:"line",attr:{x1:"16.24",y1:"16.24",x2:"19.07",y2:"19.07"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"6",y2:"12"},child:[]},{tag:"line",attr:{x1:"18",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.93",y1:"19.07",x2:"7.76",y2:"16.24"},child:[]},{tag:"line",attr:{x1:"16.24",y1:"7.76",x2:"19.07",y2:"4.93"},child:[]}]})(e)})`
  animation: ${Zd} 1s linear infinite;
`,Dp=fn.div`
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
`,Ap=fn.aside`
  display: flex;
  flex-direction: column;
  gap: 22px;

  min-width: 0;
`,Mp=fn.a`
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
`,Ip=fn.span`
  width: 45px;
  height: 45px;

  flex-shrink: 0;

  display: grid;
  place-items: center;

  border-radius: 11px;

  color: var(--contact-accent);
  background-color: var(--contact-soft);

  font-size: 20px;
`,$p=fn.span`
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
`,Fp=fn(xl)`
  flex-shrink: 0;
  color: var(--contact-muted);
`,Up=fn.div`
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
`,Hp=fn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-top: 18px;
`,Bp=fn.a`
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

  &:hover svg,
  &:focus-visible svg {
    color: currentColor;
  }
`,Wp=()=>{var e;const{t:t,i18n:n}=ma("contact"),r=null===(e=n.language)||void 0===e?void 0:e.startsWith("ar"),o=(e,t)=>r?e:t,[a,i]=(0,s().useState)(Xd),[c,u]=(0,s().useState)([]),[d,p]=(0,s().useState)(""),[f,h]=(0,s().useState)("loading"),[m,g]=(0,s().useState)("idle"),[v,y]=(0,s().useState)(""),[b,x]=(0,s().useState)("email"),w=(0,s().useRef)(!1),k=(0,s().useRef)(null),S=(0,s().useRef)(null),j=(0,s().useRef)(!1),C="loading"===m;(0,s().useEffect)(()=>{j.current?j.current=!1:(e=>{try{const{firstName:t,lastName:n,email:r,phone:o,topic:a,customTopic:i,message:l}=e;sessionStorage.setItem(Md,JSON.stringify({firstName:t,lastName:n,email:r,phone:o,topic:a,customTopic:i,message:l}))}catch{}})(a)},[a]);const E=e=>{y(e),g("error")},T=()=>{p(""),h("loading");try{var e;null===(e=S.current)||void 0===e||e.reset()}catch{h("error")}},P=e=>{const{name:t,value:n}=e.target;i(e=>({...e,[t]:n,..."topic"===t&&"other"!==n?{customTopic:""}:{}})),C||"idle"===m||(g("idle"),y(""))},N=c.reduce((e,t)=>e+t.size,0),L=[{id:"email",icon:Zi,title:t("methods.email"),value:Fd,href:`mailto:${Fd}`},{id:"whatsapp",icon:pi,title:t("methods.whatsapp"),value:t("methods.whatsappValue"),href:Hd},{id:"phone",icon:Qi,title:t("methods.phone"),value:`+${Ud}`,href:`tel:+${Ud}`}],z=[{id:"linkedin",title:"LinkedIn",icon:el,href:Bd},{id:"github",title:"GitHub",icon:il,href:Wd},{id:"whatsapp",title:"WhatsApp",icon:pi,href:Hd},{id:"email",title:"Email",icon:Zi,href:`mailto:${Fd}`},{id:"instagram",title:"Instagram",icon:tl,href:Vd},{id:"snapchat",title:"Snapchat",icon:hi,href:qd}];return(0,l().jsxs)(ep,{dir:r?"rtl":"ltr",children:[(0,l().jsxs)(Ul,{children:[(0,l().jsx)(Ol,{value:"contact"}),(0,l().jsxs)(Hl,{children:[(0,l().jsx)($l,{value:"contact:page.title"}),(0,l().jsx)(Fl,{value:"contact:page.description"})]})]}),(0,l().jsx)(np,{children:(0,l().jsx)(tp,{children:(0,l().jsxs)(rp,{children:[(0,l().jsxs)(op,{children:[(0,l().jsx)(ap,{children:t("form.title")}),(0,l().jsx)(ip,{children:t("form.description")}),(0,l().jsxs)(lp,{onSubmit:async e=>{if(e.preventDefault(),w.current)return;const n=a.firstName.trim(),r=a.lastName.trim(),l=a.email.trim(),s=Kd(a.phone),p=a.message.trim(),h="other"===a.topic?a.customTopic.trim():a.topic?t(`topics.${a.topic}`):"";if(!n||n.length>80||!r||r.length>80||!(e=>{const t=e.trim();return t.length<=254&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)})(l)||!(e=>!e.trim()||/^\+[1-9]\d{7,14}$/.test(Kd(e)))(s)||!h||h.length>120||p.length<10||p.length>5e3)return g("invalid"),void y("");if(a.botcheck)E(o("\u062a\u0639\u0630\u0631 \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u0637\u0644\u0628.","Unable to validate the request."));else{if(!d)return E(o("\u064a\u0631\u062c\u0649 \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631 \u062d\u062a\u0649 \u064a\u0643\u062a\u0645\u0644 \u0627\u0644\u062a\u062d\u0642\u0642 \u0627\u0644\u0623\u0645\u0646\u064a\u060c \u062b\u0645 \u062d\u0627\u0648\u0644 \u0627\u0644\u0625\u0631\u0633\u0627\u0644 \u0645\u062c\u062f\u062f\u064b\u0627.","Please wait for security verification to complete, then try again.")),void("error"!==f&&"expired"!==f||T());w.current=!0,g("loading"),y("");try{const e=new FormData;e.append("firstName",n),e.append("lastName",r),e.append("email",l),e.append("phone",s),e.append("preferredContact",s?"whatsapp":"email"),e.append("topic",h),e.append("message",p),e.append("botcheck",a.botcheck),e.append("turnstileToken",d),c.forEach(t=>{e.append("files",t,t.name)});const t=await fetch("https://odjamyrqnamvqyzzqiow.supabase.co/functions/v1/upload-contact-attachment",{method:"POST",body:e,headers:{Accept:"application/json"}}),f=await t.json().catch(()=>null);if(!t.ok||!0!==(null===f||void 0===f?void 0:f.success)){if(429===t.status)throw new Error(o("\u062a\u0645 \u062a\u062c\u0627\u0648\u0632 \u0627\u0644\u062d\u062f \u0627\u0644\u0645\u0633\u0645\u0648\u062d \u0645\u0646 \u0627\u0644\u0631\u0633\u0627\u0626\u0644. \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0644\u0627\u062d\u0642\u064b\u0627.","Too many messages. Please try again later."));if(413===t.status)throw new Error(o("\u062d\u062c\u0645 \u0627\u0644\u0637\u0644\u0628 \u0643\u0628\u064a\u0631 \u062c\u062f\u064b\u0627. \u062d\u0627\u0648\u0644 \u0625\u0631\u0633\u0627\u0644 \u0645\u0644\u0641\u0627\u062a \u0623\u0635\u063a\u0631.","The request is too large. Try smaller files."));if(403===t.status)throw new Error(o("\u0641\u0634\u0644 \u0627\u0644\u062a\u062d\u0642\u0642 \u0627\u0644\u0623\u0645\u0646\u064a \u0623\u0648 \u0627\u0646\u062a\u0647\u062a \u0635\u0644\u0627\u062d\u064a\u062a\u0647. \u064a\u0631\u062c\u0649 \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629.","Security verification failed or expired. Please retry."));if(503===t.status)throw new Error(o("\u062e\u062f\u0645\u0629 \u0627\u0644\u0625\u0631\u0633\u0627\u0644 \u063a\u064a\u0631 \u0645\u062a\u0627\u062d\u0629 \u0645\u0624\u0642\u062a\u064b\u0627. \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0644\u0627\u062d\u0642\u064b\u0627.","The submission service is temporarily unavailable. Please try later."));throw new Error(o("\u062a\u0639\u0630\u0631 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629. \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649.","Unable to send your message. Please try again."))}x(s?"whatsapp":"email"),j.current=!0,(()=>{try{sessionStorage.removeItem(Md),sessionStorage.removeItem("abdulrahman-contact-draft-v1")}catch{}})(),i({...Yd}),u([]),g("success"),y(""),k.current&&(k.current.value="")}catch(m){console.error("Contact form error:",m),E(m.message||o("\u062d\u062f\u062b \u062e\u0637\u0623 \u063a\u064a\u0631 \u0645\u062a\u0648\u0642\u0639.","An unexpected error occurred."))}finally{w.current=!1,T()}}},children:[(0,l().jsxs)(sp,{children:[(0,l().jsxs)(cp,{children:[(0,l().jsxs)(up,{htmlFor:"firstName",children:[t("form.firstName"),(0,l().jsx)(dp,{children:"*"})]}),(0,l().jsx)(fp,{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",maxLength:80,value:a.firstName,onChange:P,placeholder:t("form.firstNamePlaceholder"),disabled:C,required:!0})]}),(0,l().jsxs)(cp,{children:[(0,l().jsxs)(up,{htmlFor:"lastName",children:[t("form.lastName"),(0,l().jsx)(dp,{children:"*"})]}),(0,l().jsx)(fp,{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",maxLength:80,value:a.lastName,onChange:P,placeholder:t("form.lastNamePlaceholder"),disabled:C,required:!0})]})]}),(0,l().jsxs)(cp,{children:[(0,l().jsxs)(up,{htmlFor:"email",children:[t("form.email"),(0,l().jsx)(dp,{children:"*"})]}),(0,l().jsx)(fp,{id:"email",name:"email",type:"email",dir:"ltr",autoComplete:"email",maxLength:254,value:a.email,onChange:P,placeholder:"example@email.com",disabled:C,required:!0}),(0,l().jsx)(vp,{children:o("\u064a\u0631\u062c\u0649 \u0625\u062f\u062e\u0627\u0644 \u0628\u0631\u064a\u062f \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0635\u062d\u064a\u062d\u060c \u0641\u0642\u062f \u0646\u0633\u062a\u062e\u062f\u0645\u0647 \u0644\u0644\u0631\u062f \u0639\u0644\u0649 \u0631\u0633\u0627\u0644\u062a\u0643.","Please enter a valid email address, as we may use it to reply to your message.")})]}),(0,l().jsxs)(cp,{children:[(0,l().jsx)(up,{htmlFor:"phone",children:o("\u0631\u0642\u0645 \u0627\u0644\u062c\u0648\u0627\u0644","Mobile Number")}),(0,l().jsx)(fp,{id:"phone",name:"phone",type:"tel",dir:"ltr",inputMode:"tel",autoComplete:"tel",maxLength:25,value:a.phone,onChange:P,placeholder:"+966541234567",disabled:C,"aria-describedby":"phoneHint"}),(0,l().jsx)(vp,{id:"phoneHint",children:o("\u064a\u0631\u062c\u0649 \u0625\u062f\u062e\u0627\u0644 \u0631\u0642\u0645 \u062c\u0648\u0627\u0644 \u0635\u062d\u064a\u062d \u0645\u0639 \u0645\u0641\u062a\u0627\u062d \u0627\u0644\u062f\u0648\u0644\u0629\u060c \u0641\u0642\u062f \u0646\u0633\u062a\u062e\u062f\u0645\u0647 \u0644\u0644\u0631\u062f \u0639\u0644\u0649 \u0631\u0633\u0627\u0644\u062a\u0643 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628.","Please enter a valid mobile number with the country code, as we may use it to reply to your message via WhatsApp.")})]}),(0,l().jsxs)(cp,{children:[(0,l().jsxs)(up,{htmlFor:"topic",children:[t("form.topic"),(0,l().jsx)(dp,{children:"*"})]}),(0,l().jsxs)(mp,{children:[(0,l().jsxs)(gp,{id:"topic",name:"topic",value:a.topic,onChange:P,disabled:C,required:!0,children:[(0,l().jsx)("option",{value:"",children:t("form.selectTopic")}),Gd.map(e=>(0,l().jsx)("option",{value:e,children:t(`topics.${e}`)},e))]}),(0,l().jsx)(hl,{})]})]}),"other"===a.topic&&(0,l().jsxs)(cp,{children:[(0,l().jsxs)(up,{htmlFor:"customTopic",children:[t("form.customTopic"),(0,l().jsx)(dp,{children:"*"})]}),(0,l().jsx)(fp,{id:"customTopic",name:"customTopic",type:"text",maxLength:120,value:a.customTopic,onChange:P,placeholder:t("form.customTopicPlaceholder"),disabled:C,required:!0})]}),(0,l().jsxs)(cp,{children:[(0,l().jsxs)(up,{htmlFor:"message",children:[t("form.message"),(0,l().jsx)(dp,{children:"*"})]}),(0,l().jsx)(hp,{id:"message",name:"message",rows:6,minLength:10,maxLength:5e3,value:a.message,onChange:P,placeholder:t("form.messagePlaceholder"),disabled:C,required:!0}),(0,l().jsxs)(Np,{children:[(0,l().jsx)("span",{}),(0,l().jsxs)("span",{dir:"ltr",children:[a.message.length," / ","5000"]})]})]}),(0,l().jsxs)(yp,{"aria-hidden":"true",children:[(0,l().jsx)("label",{htmlFor:"botcheck",children:"Leave this field empty"}),(0,l().jsx)("input",{id:"botcheck",name:"botcheck",type:"text",value:a.botcheck,onChange:P,tabIndex:-1,autoComplete:"off"})]}),(0,l().jsxs)(cp,{children:[(0,l().jsx)(up,{htmlFor:"contactFiles",children:o("\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062a","Attachments")}),(0,l().jsxs)(bp,{children:[(0,l().jsx)(xp,{}),(0,l().jsx)(wp,{children:o("\u0625\u0631\u0641\u0627\u0642 \u0645\u0644\u0641\u0627\u062a \u0645\u0639 \u0627\u0644\u0631\u0633\u0627\u0644\u0629","Attach files to your message")}),(0,l().jsx)(kp,{children:o("\u064a\u0645\u0643\u0646\u0643 \u0625\u0631\u0641\u0627\u0642 3 \u0645\u0644\u0641\u0627\u062a \u0628\u062d\u062f \u0623\u0642\u0635\u0649\u060c 5 MB \u0644\u0643\u0644 \u0645\u0644\u0641 \u064815 MB \u0625\u062c\u0645\u0627\u0644\u064b\u0627.","Up to 3 files, 5 MB per file and 15 MB total.")}),(0,l().jsx)("input",{ref:k,id:"contactFiles",type:"file",multiple:!0,accept:$d.join(","),onChange:e=>{const t=Array.from(e.target.files||[]);if(e.target.value="",!t.length||C)return;const n=[...c,...t];if(n.length>3)return void E(o("\u064a\u0645\u0643\u0646\u0643 \u0625\u0631\u0641\u0627\u0642 3 \u0645\u0644\u0641\u0627\u062a \u0643\u062d\u062f \u0623\u0642\u0635\u0649.","You can attach up to 3 files."));for(const a of t){var r;if(0===a.size||a.size>5242880)return void E(o(`\u062d\u062c\u0645 \u0627\u0644\u0645\u0644\u0641 "${a.name}" \u063a\u064a\u0631 \u0645\u0633\u0645\u0648\u062d. \u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649 5 MB \u0644\u0643\u0644 \u0645\u0644\u0641.`,`Invalid size for "${a.name}". Maximum 5 MB per file.`));const e=Qd(a.name);if(!$d.includes(e)||null===(r=Id[a.type])||void 0===r||!r.includes(e))return void E(o(`\u0646\u0648\u0639 \u0627\u0644\u0645\u0644\u0641 "${a.name}" \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645.`,`Unsupported file type: "${a.name}".`))}n.reduce((e,t)=>e+t.size,0)>15728640?E(o("\u0625\u062c\u0645\u0627\u0644\u064a \u062d\u062c\u0645 \u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062a \u064a\u062c\u0628 \u0623\u0644\u0627 \u064a\u062a\u062c\u0627\u0648\u0632 15 MB.","Total attachment size must not exceed 15 MB.")):(u(n),g("idle"),y(""))},disabled:C,style:{display:"none"}}),(0,l().jsxs)(Sp,{type:"button",disabled:C||c.length>=3,onClick:()=>{var e;return null===(e=k.current)||void 0===e?void 0:e.click()},children:[(0,l().jsx)(Ji,{}),o("\u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0645\u0644\u0641\u0627\u062a","Choose Files")]})]}),c.length>0&&(0,l().jsx)(jp,{children:c.map((e,t)=>(0,l().jsxs)(Cp,{children:[(0,l().jsx)(Ep,{}),(0,l().jsxs)(Tp,{children:[(0,l().jsx)("strong",{title:e.name,children:e.name}),(0,l().jsx)("small",{children:Jd(e.size)})]}),(0,l().jsx)(Pp,{type:"button",onClick:()=>(e=>{C||(u(t=>t.filter((t,n)=>n!==e)),g("idle"),y(""))})(t),disabled:C,"aria-label":o("\u062d\u0630\u0641 \u0627\u0644\u0645\u0644\u0641","Remove file"),children:(0,l().jsx)(Vi,{})})]},`${e.name}-${e.size}-${t}`))}),(0,l().jsxs)(Np,{children:[(0,l().jsx)("span",{children:o(`${c.length} \u0645\u0646 3 \u0645\u0644\u0641\u0627\u062a`,`${c.length} of 3 files`)}),(0,l().jsxs)("span",{dir:"ltr",children:[Jd(N)," / ","15 MB"]})]}),(0,l().jsx)(vp,{children:o("\u062a\u064f\u062d\u0641\u0638 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0646\u0645\u0648\u0630\u062c \u0639\u0646\u062f \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0635\u0641\u062d\u0629\u060c \u0648\u0644\u0643\u0646 \u064a\u062c\u0628 \u0625\u0639\u0627\u062f\u0629 \u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062a.","Your form details are preserved on refresh, but attachments must be selected again.")})]}),(0,l().jsxs)(Lp,{children:[(0,l().jsxs)(up,{children:[o("\u0627\u0644\u062a\u062d\u0642\u0642 \u0627\u0644\u0623\u0645\u0646\u064a","Security Verification"),(0,l().jsx)(dp,{children:"*"})]}),(0,l().jsx)(zp,{children:(0,l().jsx)(Ad,{ref:S,siteKey:"0x4AAAAAAFryCxCaPlh1qRrw",options:{theme:"auto",language:r?"ar":"en",retry:"auto","retry-interval":2e3,"refresh-expired":"auto","refresh-timeout":"auto"},onSuccess:e=>{p(e),h("success")},onExpire:()=>{p(""),h("expired")},onError:()=>{p(""),h("error")}})}),"success"===f&&(0,l().jsxs)(vp,{style:{color:"#16a34a"},children:[(0,l().jsx)(ml,{style:{display:"inline",verticalAlign:"middle",marginInlineEnd:5}}),o("\u062a\u0645 \u0627\u0644\u062a\u062d\u0642\u0642 \u0628\u0646\u062c\u0627\u062d.","Verification completed successfully.")]}),("error"===f||"expired"===f)&&(0,l().jsxs)(l().Fragment,{children:[(0,l().jsx)(vp,{children:o("\u062a\u0639\u0630\u0631 \u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u062a\u062d\u0642\u0642 \u0623\u0648 \u0627\u0646\u062a\u0647\u062a \u0635\u0644\u0627\u062d\u064a\u062a\u0647. \u064a\u0645\u0643\u0646\u0643 \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u062f\u0648\u0646 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0635\u0641\u062d\u0629.","Verification failed or expired. You can retry without refreshing the page.")}),(0,l().jsxs)(Op,{type:"button",onClick:T,children:[(0,l().jsx)(Ki,{}),o("\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u062a\u062d\u0642\u0642","Retry Verification")]})]})]}),"success"===m&&(0,l().jsxs)(Dp,{$success:!0,role:"status","aria-live":"polite",children:[(0,l().jsx)(ml,{}),(0,l().jsxs)("div",{children:[(0,l().jsx)("strong",{children:o("\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u062a\u0643 \u0628\u0646\u062c\u0627\u062d!","Your message was sent successfully!")}),(0,l().jsx)("p",{children:o("\u0634\u0643\u0631\u064b\u0627 \u0644\u062a\u0648\u0627\u0635\u0644\u0643. \u0633\u0623\u0631\u0627\u062c\u0639 \u0631\u0633\u0627\u0644\u062a\u0643 \u0648\u0623\u0631\u062f \u0639\u0644\u064a\u0643 \u0641\u064a \u0623\u0642\u0631\u0628 \u0648\u0642\u062a \u0645\u0645\u0643\u0646\u060c \u0639\u0627\u062f\u0629\u064b \u062e\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629.","Thank you for reaching out. I'll review your message and respond as soon as possible, usually within 24 hours.")}),(0,l().jsx)("p",{style:{marginTop:8},children:"whatsapp"===b?o("\u0642\u062f \u0623\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628 \u0639\u0644\u0649 \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0630\u064a \u0623\u0631\u0641\u0642\u062a\u0647\u060c \u0644\u0630\u0627 \u064a\u064f\u0631\u062c\u0649 \u0627\u0644\u062a\u0623\u0643\u062f \u0645\u0646 \u0635\u062d\u062a\u0647.","I may contact you via WhatsApp at the number you provided, so please make sure it is correct."):o("\u0633\u064a\u0643\u0648\u0646 \u0627\u0644\u0631\u062f \u0639\u0628\u0631 \u0628\u0631\u064a\u062f\u0643 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a. \u064a\u064f\u0631\u062c\u0649 \u0645\u062a\u0627\u0628\u0639\u0629 \u0635\u0646\u062f\u0648\u0642 \u0627\u0644\u0648\u0627\u0631\u062f \u0648\u0627\u0644\u0628\u0631\u064a\u062f \u063a\u064a\u0631 \u0627\u0644\u0645\u0631\u063a\u0648\u0628 \u0641\u064a\u0647.","I'll reply via email. Please check your inbox and spam folder.")})]})]}),"invalid"===m&&(0,l().jsxs)(Dp,{role:"alert",children:[(0,l().jsx)(jl,{}),(0,l().jsxs)("div",{children:[(0,l().jsx)("strong",{children:o("\u064a\u0631\u062c\u0649 \u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a","Please review your details")}),(0,l().jsx)("p",{children:o("\u062a\u0623\u0643\u062f \u0645\u0646 \u062a\u0639\u0628\u0626\u0629 \u0627\u0644\u062d\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d\u060c \u0648\u0623\u0646 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0644\u0627 \u062a\u0642\u0644 \u0639\u0646 10 \u0623\u062d\u0631\u0641. \u0625\u0630\u0627 \u0623\u062f\u062e\u0644\u062a \u0631\u0642\u0645 \u062c\u0648\u0627\u0644\u060c \u0641\u062a\u0623\u0643\u062f \u0645\u0646 \u0643\u062a\u0627\u0628\u062a\u0647 \u0628\u0635\u064a\u063a\u0629 \u062f\u0648\u0644\u064a\u0629 \u062a\u0628\u062f\u0623 \u0628\u0639\u0644\u0627\u0645\u0629 + \u0648\u0645\u0641\u062a\u0627\u062d \u0627\u0644\u062f\u0648\u0644\u0629.","Complete the required fields correctly and enter at least 10 characters. If you provide a mobile number, use international format starting with + and the country code.")})]})]}),"error"===m&&(0,l().jsxs)(Dp,{role:"alert",children:[(0,l().jsx)(jl,{}),(0,l().jsxs)("div",{children:[(0,l().jsx)("strong",{children:o("\u062a\u0639\u0630\u0631 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629","Message not sent")}),(0,l().jsx)("p",{children:v})]})]}),(0,l().jsx)(Rp,{type:"submit",disabled:C,children:C?(0,l().jsxs)(l().Fragment,{children:[(0,l().jsx)(_p,{}),o("\u062c\u0627\u0631\u064d \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629...","Sending Message...")]}):(0,l().jsxs)(l().Fragment,{children:[(0,l().jsx)(Yi,{}),o("\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629","Send Message")]})})]})]}),(0,l().jsxs)(Ap,{children:[(0,l().jsxs)(op,{children:[(0,l().jsx)(ap,{children:o("\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644","Contact Information")}),(0,l().jsx)(ip,{children:o("\u064a\u0645\u0643\u0646\u0643 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a \u0645\u0628\u0627\u0634\u0631\u0629 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0627\u0644\u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u0627\u0644\u064a\u0629.","You can contact me directly using the following methods.")}),L.map(e=>{const t=e.icon;return(0,l().jsxs)(Mp,{href:e.href,target:"whatsapp"===e.id?"_blank":void 0,rel:"whatsapp"===e.id?"noopener noreferrer":void 0,children:[(0,l().jsx)(Ip,{children:(0,l().jsx)(t,{})}),(0,l().jsxs)($p,{children:[(0,l().jsx)("strong",{children:e.title}),(0,l().jsx)("small",{children:e.value})]}),(0,l().jsx)(Fp,{})]},e.id)})]}),(0,l().jsx)(op,{children:(0,l().jsxs)(Up,{children:[(0,l().jsx)(dl,{}),(0,l().jsxs)("div",{children:[(0,l().jsx)("strong",{children:o("\u0648\u0642\u062a \u0627\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u0627\u0644\u0645\u062a\u0648\u0642\u0639","Expected Response Time")}),(0,l().jsx)("p",{children:o("\u0639\u0627\u062f\u0629\u064b \u0645\u0627 \u0623\u0631\u062f \u0639\u0644\u0649 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u062e\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629\u060c \u0648\u0642\u062f \u064a\u062e\u062a\u0644\u0641 \u0648\u0642\u062a \u0627\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u062d\u0633\u0628 \u0627\u0644\u0638\u0631\u0648\u0641.","I usually respond to messages within 24 hours, although response times may vary depending on circumstances.")})]})]})}),(0,l().jsxs)(op,{children:[(0,l().jsx)(ap,{children:o("\u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a","Social Profiles")}),(0,l().jsx)(ip,{children:o("\u062a\u0627\u0628\u0639 \u062d\u0633\u0627\u0628\u0627\u062a\u064a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0623\u0648 \u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a \u0639\u0628\u0631 \u0645\u0646\u0635\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a.","Explore my professional profiles or connect with me on social media.")}),(0,l().jsx)(Hp,{children:z.map(e=>{const t=e.icon;return(0,l().jsx)(Bp,{href:e.href,title:e.title,"aria-label":e.title,target:"email"===e.id?void 0:"_blank",rel:"email"===e.id?void 0:"noopener noreferrer",children:(0,l().jsx)(t,{})},e.id)})})]})]})]})})})]})},Vp=fn.main`
  padding-top: var(--header-height);
`;const qp=function(){return(0,l().jsxs)(l().Fragment,{children:[(0,l().jsx)(Wi,{}),(0,l().jsx)(ti,{}),(0,l().jsx)(Vp,{children:(0,l().jsxs)(lo,{children:[(0,l().jsx)(ao,{path:"/",element:(0,l().jsx)(Ku,{})}),(0,l().jsx)(ao,{path:"/about",element:(0,l().jsx)(tc,{})}),(0,l().jsx)(ao,{path:"/projects",element:(0,l().jsx)(sd,{})}),(0,l().jsx)(ao,{path:"/projects/:projectId",element:(0,l().jsx)(Ed,{})}),(0,l().jsx)(ao,{path:"/contact",element:(0,l().jsx)(Wp,{})})]})}),(0,l().jsx)(Bi,{})]})},Gp=e=>"string"===typeof e,Yp=()=>{let e,t;const n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n},Kp=e=>null==e?"":String(e),Qp=/###/g,Jp=e=>e&&e.includes("###")?e.replace(Qp,"."):e,Xp=e=>!e||Gp(e),Zp=(e,t,n)=>{const r=Gp(t)?t.split("."):t;let o=0;for(;o<r.length-1;){if(Xp(e))return{};const t=Jp(r[o]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++o}return Xp(e)?{}:{obj:e,k:Jp(r[o])}},ef=(e,t,n)=>{const{obj:r,k:o}=Zp(e,t,Object);if(void 0!==r||1===t.length)return void(r[o]=n);let a=t[t.length-1],i=t.slice(0,t.length-1),l=Zp(e,i,Object);for(;void 0===l.obj&&i.length;)a=`${i[i.length-1]}.${a}`,i=i.slice(0,i.length-1),l=Zp(e,i,Object),l?.obj&&"undefined"!==typeof l.obj[`${l.k}.${a}`]&&(l.obj=void 0);l.obj[`${l.k}.${a}`]=n},tf=(e,t)=>{const{obj:n,k:r}=Zp(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},nf=(e,t,n)=>{for(const r in t)"__proto__"!==r&&"constructor"!==r&&(Object.prototype.hasOwnProperty.call(e,r)?Gp(e[r])||e[r]instanceof String||Gp(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):nf(e[r],t[r],n):e[r]=t[r]);return e},rf=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),of={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},af=e=>Gp(e)?e.replace(/[&<>"'\/]/g,e=>of[e]):e;const lf=[" ",",","?","!",";"],sf=new class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(void 0!==t)return t;const n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}}(20),cf=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(!e)return;if(e[t]){if(!Object.prototype.hasOwnProperty.call(e,t))return;return e[t]}const r=t.split(n);let o=e;for(let a=0;a<r.length;){if(!o||"object"!==typeof o)return;let e,t="";for(let i=a;i<r.length;++i)if(i!==a&&(t+=n),t+=r[i],e=o[t],void 0!==e){if(["string","number","boolean"].includes(typeof e)&&i<r.length-1)continue;a+=i-a+1;break}o=e}return o},uf=e=>e?.replace(/_/g,"-"),df={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console?.[e]?.apply?.(console,t)}};class pf{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||df,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,n,r){return r&&!this.debug?null:(e=e.map(e=>Gp(e)?e.replace(/[\r\n\x00-\x1F\x7F]/g," "):e),Gp(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new pf(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return(e=e||this.options).prefix=e.prefix||this.prefix,new pf(this.logger,e)}}var ff=new pf;class hf{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(e=>{this.observers[e]||(this.observers[e]=new Map);const n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)}),this}off(e,t){this.observers[e]&&(t?this.observers[e].delete(t):delete this.observers[e])}once(e,t){var n=this;const r=function(){t(...arguments),n.off(e,r)};return this.on(e,r),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(this.observers[e]){Array.from(this.observers[e].entries()).forEach(e=>{let[t,r]=e;for(let o=0;o<r;o++)t(...n)})}if(this.observers["*"]){Array.from(this.observers["*"].entries()).forEach(t=>{let[r,o]=t;for(let a=0;a<o;a++)r(e,...n)})}}}class mf extends hf{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),void 0===this.options.ignoreJSONStructure&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const o=void 0!==r.keySeparator?r.keySeparator:this.options.keySeparator,a=void 0!==r.ignoreJSONStructure?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let i;e.includes(".")?i=e.split("."):(i=[e,t],n&&(Array.isArray(n)?i.push(...n):Gp(n)&&o?i.push(...n.split(o)):i.push(n)));const l=tf(this.data,i);return l||t||n||!e.includes(".")||(e=i[0],t=i[1],n=i.slice(2).join(".")),!l&&a&&Gp(n)?cf(this.data?.[e]?.[t],n,o):l}addResource(e,t,n,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1};const a=void 0!==o.keySeparator?o.keySeparator:this.options.keySeparator;let i=[e,t];n&&(i=i.concat(a?n.split(a):n)),e.includes(".")&&(i=e.split("."),r=t,t=i[1]),this.addNamespaces(t),ef(this.data,i,r),o.silent||this.emit("added",e,t,n,r)}addResources(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(const o in n)(Gp(n[o])||Array.isArray(n[o]))&&this.addResource(e,t,o,n[o],{silent:!0});r.silent||this.emit("added",e,t,n)}addResourceBundle(e,t,n,r,o){let a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1,skipCopy:!1},i=[e,t];e.includes(".")&&(i=e.split("."),r=n,n=t,t=i[1]),this.addNamespaces(t);let l=tf(this.data,i)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?nf(l,n,o):l={...l,...n},ef(this.data,i,l),a.silent||this.emit("added",e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return void 0!==this.getResource(e,t)}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>t[e]&&Object.keys(t[e]).length>0)}toJSON(){return this.data}}var gf={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,o){return e.forEach(e=>{t=this.processors[e]?.process(t,n,r,o)??t}),t}};const vf=Symbol("i18next/PATH_KEY");function yf(e,t){const{[vf]:n}=e(function(){const e=[],t=Object.create(null);let n;return t.get=(r,o)=>(n?.revoke?.(),o===vf?e:(e.push(o),n=Proxy.revocable(r,t),n.proxy)),Proxy.revocable(Object.create(null),t).proxy}()),r=t?.keySeparator??".",o=t?.nsSeparator??":",a="strict"===t?.enableSelector;if(n.length>1&&o){const e=t?.ns,i=a?Array.isArray(e)?e:e?[e]:null:Array.isArray(e)?e:null;if(i){if((a?i:i.length>1?i.slice(1):[]).includes(n[0]))return`${n[0]}${o}${n.slice(1).join(r)}`}}return n.join(r)}const bf=e=>!Gp(e)&&"boolean"!==typeof e&&"number"!==typeof e;class xf extends hf{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var n,r;super(),n=e,r=this,["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"].forEach(e=>{n[e]&&(r[e]=n[e])}),this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),this.logger=ff.create("translator"),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e){const t={...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}}};if(null==e)return!1;const n=this.resolve(e,t);if(void 0===n?.res)return!1;const r=bf(n.res);return!1!==t.returnObjects||!r}extractFromKey(e,t){let n=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===n&&(n=":");const r=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator;let o=t.ns||this.options.defaultNS||[];const a=n&&e.includes(n),i=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!((e,t,n)=>{t=t||"",n=n||"";const r=lf.filter(e=>!t.includes(e)&&!n.includes(e));if(0===r.length)return!0;const o=sf.getRegExp(`(${r.map(e=>"?"===e?"\\?":e).join("|")})`);let a=!o.test(e);if(!a){const t=e.indexOf(n);t>0&&!o.test(e.substring(0,t))&&(a=!0)}return a})(e,n,r);if(a&&!i){const t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:Gp(o)?[o]:o};const a=e.split(n);(n!==r||n===r&&this.options.ns.includes(a[0]))&&(o=a.shift()),e=a.join(r)}return{key:e,namespaces:Gp(o)?[o]:o}}translate(e,t,n){let r="object"===typeof t?{...t}:t;if("object"!==typeof r&&this.options.overloadTranslationOptionHandler&&(r=this.options.overloadTranslationOptionHandler(arguments)),"object"===typeof r&&(r={...r}),r||(r={}),null==e)return"";"function"===typeof e&&(e=yf(e,{...this.options,...r})),Array.isArray(e)||(e=[String(e)]),e=e.map(e=>"function"===typeof e?yf(e,{...this.options,...r}):String(e));const o=void 0!==r.returnDetails?r.returnDetails:this.options.returnDetails,a=void 0!==r.keySeparator?r.keySeparator:this.options.keySeparator,{key:i,namespaces:l}=this.extractFromKey(e[e.length-1],r),s=l[l.length-1];let c=void 0!==r.nsSeparator?r.nsSeparator:this.options.nsSeparator;void 0===c&&(c=":");const u=r.lng||this.language,d=r.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if("cimode"===u?.toLowerCase())return d?o?{res:`${s}${c}${i}`,usedKey:i,exactUsedKey:i,usedLng:u,usedNS:s,usedParams:this.getUsedParamsDetails(r)}:`${s}${c}${i}`:o?{res:i,usedKey:i,exactUsedKey:i,usedLng:u,usedNS:s,usedParams:this.getUsedParamsDetails(r)}:i;const p=this.resolve(e,r);let f=p?.res;const h=p?.usedKey||i,m=p?.exactUsedKey||i,g=void 0!==r.joinArrays?r.joinArrays:this.options.joinArrays,v=!this.i18nFormat||this.i18nFormat.handleAsObject,y=void 0!==r.count&&!Gp(r.count),b=xf.hasDefaultValue(r),x=y?this.pluralResolver.getSuffix(u,r.count,r):"",w=r.ordinal&&y?this.pluralResolver.getSuffix(u,r.count,{ordinal:!1}):"",k=y&&!r.ordinal&&0===r.count,S=k&&r[`defaultValue${this.options.pluralSeparator}zero`]||r[`defaultValue${x}`]||r[`defaultValue${w}`]||r.defaultValue;let j=f;v&&!f&&b&&(j=S);const C=bf(j),E=Object.prototype.toString.apply(j);if(!(v&&j&&C)||["[object Number]","[object Function]","[object RegExp]"].includes(E)||Gp(g)&&Array.isArray(j))if(v&&Gp(g)&&Array.isArray(f))f=f.join(g),f&&(f=this.extendTranslation(f,e,r,n));else{let t=!1,o=!1;!this.isValidLookup(f)&&b&&(t=!0,f=S),this.isValidLookup(f)||(o=!0,f=i);const l=(r.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&o?void 0:f,d=b&&S!==f&&this.options.updateMissing;if(o||t||d){if(this.logger.log(d?"updateKey":"missingKey",u,s,y&&!d?`${i}${this.pluralResolver.getSuffix(u,r.count,r)}`:i,d?S:f),a){const e=this.resolve(i,{...r,keySeparator:!1});e&&e.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let e=[];const t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,r.lng||this.language);if("fallback"===this.options.saveMissingTo&&t&&t[0])for(let r=0;r<t.length;r++)e.push(t[r]);else"all"===this.options.saveMissingTo?e=this.languageUtils.toResolveHierarchy(r.lng||this.language):e.push(r.lng||this.language);const n=(e,t,n)=>{const o=b&&n!==f?n:l;this.options.missingKeyHandler?this.options.missingKeyHandler(e,s,t,o,d,r):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(e,s,t,o,d,r),this.emit("missingKey",e,s,t,f)};this.options.saveMissing&&(this.options.saveMissingPlurals&&y?e.forEach(e=>{const t=this.pluralResolver.getSuffixes(e,r);k&&r[`defaultValue${this.options.pluralSeparator}zero`]&&!t.includes(`${this.options.pluralSeparator}zero`)&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{n([e],i+t,r[`defaultValue${t}`]||S)})}):n(e,i,S))}f=this.extendTranslation(f,e,r,p,n),o&&f===i&&this.options.appendNamespaceToMissingKey&&(f=`${s}${c}${i}`),(o||t)&&this.options.parseMissingKeyHandler&&(f=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${s}${c}${i}`:i,t?f:void 0,r))}else{if(!r.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,j,{...r,ns:l}):`key '${i} (${this.language})' returned an object instead of string.`;return o?(p.res=e,p.usedParams=this.getUsedParamsDetails(r),p):e}if(a){const e=Array.isArray(j),t=e?[]:{},n=e?m:h;for(const o in j)if(Object.prototype.hasOwnProperty.call(j,o)){const e=`${n}${a}${o}`;t[o]=b&&!f?this.translate(e,{...r,defaultValue:bf(S)?S[o]:void 0,joinArrays:!1,ns:l}):this.translate(e,{...r,joinArrays:!1,ns:l}),t[o]===e&&(t[o]=j[o])}f=t}}return o?(p.res=f,p.usedParams=this.getUsedParamsDetails(r),p):f}extendTranslation(e,t,n,r,o){var a=this;if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const i=Gp(e)&&(void 0!==n?.interpolation?.skipOnVariables?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let l;if(i){const t=e.match(this.interpolator.nestingRegexp);l=t&&t.length}let s=n.replace&&!Gp(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),e=this.interpolator.interpolate(e,s,n.lng||this.language||r.usedLng,n),i){const t=e.match(this.interpolator.nestingRegexp);l<(t&&t.length)&&(n.nest=!1)}!n.lng&&r&&r.res&&(n.lng=this.language||r.usedLng),!1!==n.nest&&(e=this.interpolator.nest(e,function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return o?.[0]!==r[0]||n.context?a.translate(...r,t):(a.logger.warn(`It seems you are nesting recursively key: ${r[0]} in key: ${t[0]}`),null)},n)),n.interpolation&&this.interpolator.reset()}const i=n.postProcess||this.options.postProcess,l=Gp(i)?[i]:i;return null!=e&&l?.length&&!1!==n.applyPostProcessor&&(e=gf.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e){let t,n,r,o,a,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Gp(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(e=>"function"===typeof e?yf(e,{...this.options,...i}):e)),e.forEach(e=>{if(this.isValidLookup(t))return;const l=this.extractFromKey(e,i),s=l.key;n=s;let c=l.namespaces;this.options.fallbackNS&&(c=c.concat(this.options.fallbackNS));const u=void 0!==i.count&&!Gp(i.count),d=u&&!i.ordinal&&0===i.count,p=void 0!==i.context&&(Gp(i.context)||"number"===typeof i.context)&&""!==i.context,f=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);c.forEach(e=>{this.isValidLookup(t)||(a=e,this.checkedLoadedFor[`${f[0]}-${e}`]||!this.utils?.hasLoadedNamespace||this.utils?.hasLoadedNamespace(a)||(this.checkedLoadedFor[`${f[0]}-${e}`]=!0,this.logger.warn(`key "${n}" for languages "${f.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),f.forEach(n=>{if(this.isValidLookup(t))return;o=n;const a=[s];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(a,s,n,e,i);else{let e;u&&(e=this.pluralResolver.getSuffix(n,i.count,i));const t=`${this.options.pluralSeparator}zero`,r=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(i.ordinal&&e.startsWith(r)&&a.push(s+e.replace(r,this.options.pluralSeparator)),a.push(s+e),d&&a.push(s+t)),p){const n=`${s}${this.options.contextSeparator||"_"}${i.context}`;a.push(n),u&&(i.ordinal&&e.startsWith(r)&&a.push(n+e.replace(r,this.options.pluralSeparator)),a.push(n+e),d&&a.push(n+t))}}let l;for(;l=a.pop();)this.isValidLookup(t)||(r=l,t=this.getResource(n,e,l,i))}))})}),{res:t,usedKey:n,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(e){return void 0!==e&&!(!this.options.returnNull&&null===e)&&!(!this.options.returnEmptyString&&""===e)}getResource(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=e.replace&&!Gp(e.replace);let r=n?e.replace:e;if(n&&"undefined"!==typeof e.count&&(r={...r,count:e.count}),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(const e of t)delete r[e]}return r}static hasDefaultValue(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.startsWith("defaultValue")&&void 0!==e[t])return!0;return!1}}class wf{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=ff.create("languageUtils"),this.resolveHierarchyCache={}}clearCache(){this.resolveHierarchyCache={}}getScriptPartFromCode(e){if(!(e=uf(e))||!e.includes("-"))return null;const t=e.split("-");return 2===t.length?null:(t.pop(),"x"===t[t.length-1].toLowerCase()?null:this.formatLanguageCode(t.join("-")))}getLanguagePartFromCode(e){if(!(e=uf(e))||!e.includes("-"))return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(Gp(e)&&e.includes("-")){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch(bh){}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;const n=this.formatLanguageCode(e);this.options.supportedLngs&&!this.isSupportedCode(n)||(t=n)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;const n=this.getScriptPartFromCode(e);if(this.isSupportedCode(n))return t=n;const r=this.getLanguagePartFromCode(e);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(e=>e===r||!(!e.includes("-")&&!r.includes("-"))&&(!(!e.includes("-")||r.includes("-")||e.slice(0,e.indexOf("-"))!==r)||!!(e.startsWith(r)&&r.length>1)))}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if("function"===typeof e&&(e=e(t)),Gp(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e[this.getLanguagePartFromCode(t)]),n||(n=e.default),n||[]}toResolveHierarchy(e,t){const n=this.options.fallbackLng,r=Array.isArray(n)?n.join("|"):n;r!==this._cachedFallbackLng&&(this.resolveHierarchyCache={},this._cachedFallbackLng=r);const o=void 0===t||!1===t||Gp(t),a=void 0===t&&"function"===typeof this.options.fallbackLng;let i=null;if(Gp(e)&&o&&!a){let n;n=void 0===t?"undefined":!1===t?"boolean:false":`string:${t}`,i=`${e.length}:${e}|${n}`}if(null!==i){const e=this.resolveHierarchyCache[i];if(void 0!==e)return e.slice()}const l=this.getFallbackCodes((!1===t?[]:t)||this.options.fallbackLng||[],e),s=[],c=e=>{e&&(this.isSupportedCode(e)?s.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return Gp(e)&&(e.includes("-")||e.includes("_"))?("languageOnly"!==this.options.load&&c(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&c(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&c(this.getLanguagePartFromCode(e))):Gp(e)&&c(this.formatLanguageCode(e)),l.forEach(e=>{s.includes(e)||c(this.formatLanguageCode(e))}),null!==i?(this.resolveHierarchyCache[i]=s,s.slice()):s}}const kf={zero:0,one:1,two:2,few:3,many:4,other:5},Sf={select:e=>1===e?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class jf{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=ff.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=uf("dev"===e?"en":e),r=t.ordinal?"ordinal":"cardinal",o=JSON.stringify({cleanedCode:n,type:r});if(o in this.pluralRulesCache)return this.pluralRulesCache[o];let a;try{a=new Intl.PluralRules(n,{type:r})}catch(i){if("undefined"===typeof Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Sf;if(!e.match(/-|_/))return Sf;const n=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(n,t)}return this.pluralRulesCache[o]=a,a}needsPlural(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.getRule(e,t);return n||(n=this.getRule("dev",t)),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(e,n).map(e=>`${t}${e}`)}getSuffixes(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.getRule(e,t);return n||(n=this.getRule("dev",t)),n?n.resolvedOptions().pluralCategories.sort((e,t)=>kf[e]-kf[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`):[]}getSuffix(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=this.getRule(e,n);return r?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,n))}}const Cf=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=((e,t,n)=>{const r=tf(e,n);return void 0!==r?r:tf(t,n)})(e,t,n);return!a&&o&&Gp(n)&&(a=cf(e,n,r),void 0===a&&(a=cf(t,n,r))),a},Ef=e=>e.replace(/\$/g,"$$$$");class Tf{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=ff.create("interpolator"),this.options=e,this.format=e?.interpolation?.format||(e=>e),this.init(e)}init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:o,prefixEscaped:a,suffix:i,suffixEscaped:l,formatSeparator:s,unescapeSuffix:c,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:p,nestingSuffix:f,nestingSuffixEscaped:h,nestingOptionsSeparator:m,maxReplaces:g,alwaysFormat:v}=e.interpolation;this.escape=void 0!==t?t:af,this.escapeValue=void 0===n||n,this.useRawValueToEscape=void 0!==r&&r,this.prefix=o?rf(o):a||"{{",this.suffix=i?rf(i):l||"}}",this.formatSeparator=s||",",this.unescapePrefix=c?"":u?rf(u):"-",this.unescapeSuffix=this.unescapePrefix?"":c?rf(c):"",this.nestingPrefix=d?rf(d):p||rf("$t("),this.nestingSuffix=f?rf(f):h||rf(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=g||1e3,this.alwaysFormat=void 0!==v&&v,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(e,t)=>e?.source===t?(e.lastIndex=0,e):new RegExp(t,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let o,a,i;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},s=e=>{if(!e.includes(this.formatSeparator)){const o=Cf(t,l,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(o,void 0,n,{...r,...t,interpolationkey:e}):o}const o=e.split(this.formatSeparator),a=o.shift().trim(),i=o.join(this.formatSeparator).trim();return this.format(Cf(t,l,a,this.options.keySeparator,this.options.ignoreJSONStructure),i,n,{...r,...t,interpolationkey:a})};this.resetRegExp(),!this.escapeValue&&"string"===typeof e&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn("nesting options string contains interpolated variables with escapeValue: false \u2014 if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.");const c=r?.missingInterpolationHandler||this.options.missingInterpolationHandler,u=void 0!==r?.interpolation?.skipOnVariables?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>e},{regex:this.regexp,safeValue:e=>this.escapeValue?this.escape(e):e}].forEach(t=>{for(i=0;o=t.regex.exec(e);){const n=o[1].trim();if(a=s(n),void 0===a)if("function"===typeof c){const t=c(e,o,r);a=Gp(t)?t:""}else if(r&&Object.prototype.hasOwnProperty.call(r,n))a="";else{if(u){a=o[0];continue}this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),a=""}else Gp(a)||this.useRawValueToEscape||(a=Kp(a));const l=t.safeValue(a);if(e=e.replace(o[0],Ef(l)),u?(t.regex.lastIndex+=l.length,t.regex.lastIndex-=o[0].length):t.regex.lastIndex=0,i++,i>=this.maxReplaces)break}}),e}nest(e,t){let n,r,o,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=(e,t)=>{const n=this.nestingOptionsSeparator;if(!e.includes(n))return e;const r=e.split(new RegExp(`${rf(n)}[ ]*{`));let a=`{${r[1]}`;e=r[0],a=this.interpolate(a,o);const i=a.match(/'/g),l=a.match(/"/g);((i?.length??0)%2===0&&!l||(l?.length??0)%2!==0)&&(a=a.replace(/'/g,'"'));try{o=JSON.parse(a),t&&(o={...t,...o})}catch(bh){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,bh),`${e}${n}${a}`}return o.defaultValue&&o.defaultValue.includes(this.prefix)&&delete o.defaultValue,e};for(;n=this.nestingRegexp.exec(e);){let l=[];o={...a},o=o.replace&&!Gp(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;const s=/{.*}/s.test(n[1])?n[1].lastIndexOf("}")+1:n[1].indexOf(this.formatSeparator);if(-1!==s&&(l=n[1].slice(s).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),n[1]=n[1].slice(0,s)),r=t(i.call(this,n[1].trim(),o),o),r&&n[0]===e&&!Gp(r))return r;Gp(r)||(r=Kp(r)),r||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),r=""),l.length&&(r=l.reduce((e,t)=>this.format(e,t,a.lng,{...a,interpolationkey:n[1].trim()}),r.trim())),e=e.replace(n[0],Ef(Kp(r))),this.regexp.lastIndex=0}return e}}const Pf=e=>{const t={};return(n,r,o)=>{let a=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(a={...a,[o.interpolationkey]:void 0});const i=r+JSON.stringify(a);let l=t[i];return l||(l=e(uf(r),o),t[i]=l),l(n)}},Nf=e=>(t,n,r)=>e(uf(n),r)(t);class Lf{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=ff.create("formatter"),this.options=e,this.init(e)}init(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||",";const n=t.cacheInBuiltFormats?Pf:Nf;this.formats={number:n((e,t)=>{const n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)}),currency:n((e,t)=>{const n=new Intl.NumberFormat(e,{...t,style:"currency"});return e=>n.format(e)}),datetime:n((e,t)=>{const n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)}),relativetime:n((e,t)=>{const n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||"day")}),list:n((e,t)=>{const n=new Intl.ListFormat(e,{...t});return e=>n.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Pf(t)}format(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(!t)return e;if(null==e)return e;const o=t.split(this.formatSeparator),a=[];for(let l=0;l<o.length;l++){let e=o[l];for(;e.indexOf("(")>-1&&!e.includes(")")&&l+1<o.length;)e=`${e}${this.formatSeparator}${o[++l]}`;a.push(e)}const i=a.reduce((e,t)=>{const{formatName:o,formatOptions:a}=(e=>{let t=e.toLowerCase().trim();const n={};if(e.includes("(")){const r=e.split("(");t=r[0].toLowerCase().trim();const o=r[1].slice(0,-1);"currency"!==t||o.includes(":")?"relativetime"!==t||o.includes(":")?o.split(";").forEach(e=>{if(e){const[t,...r]=e.split(":"),o=r.join(":").trim().replace(/^'+|'+$/g,""),a=t.trim();n[a]||(n[a]=o),"false"===o&&(n[a]=!1),"true"===o&&(n[a]=!0),isNaN(o)||(n[a]=parseInt(o,10))}}):n.range||(n.range=o.trim()):n.currency||(n.currency=o.trim())}return{formatName:t,formatOptions:n}})(t);if(this.formats[o]){let t=e;try{const i=r?.formatParams?.[r.interpolationkey]||{},l=i.locale||i.lng||r.locale||r.lng||n;t=this.formats[o](e,l,{...a,...r,...i})}catch(i){this.logger.warn(i)}return t}return this.logger.warn(`there was no format function for ${o}`),e},e);return i}}class zf extends hf{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=ff.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,r.backend,r)}queueLoad(e,t,n,r){const o={},a={},i={},l={};return e.forEach(e=>{let r=!0;t.forEach(t=>{const i=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[i]=2:this.state[i]<0||(1===this.state[i]?void 0===a[i]&&(a[i]=!0):(this.state[i]=1,r=!1,void 0===a[i]&&(a[i]=!0),void 0===o[i]&&(o[i]=!0),void 0===l[t]&&(l[t]=!0)))}),r||(i[e]=!0)}),(Object.keys(o).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(o),pending:Object.keys(a),toLoadLanguages:Object.keys(i),toLoadNamespaces:Object.keys(l)}}loaded(e,t,n){const r=e.split("|"),o=r[0],a=r[1];t&&this.emit("failedLoading",o,a,t),!t&&n&&this.store.addResourceBundle(o,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);const i={};this.queue.forEach(n=>{((e,t,n)=>{const{obj:r,k:o}=Zp(e,t,Object);r[o]=r[o]||[],r[o].push(n)})(n.loaded,[o],a),((e,t)=>{void 0!==e.pending[t]&&(delete e.pending[t],e.pendingCount--)})(n,e),t&&n.errors.push(t),0!==n.pendingCount||n.done||(Object.keys(n.loaded).forEach(e=>{i[e]||(i[e]={});const t=n.loaded[e];t.length&&t.forEach(t=>{void 0===i[e][t]&&(i[e][t]=!0)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit("loaded",i),this.queue=this.queue.filter(e=>!e.done)}read(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads)return void this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:o,callback:a});this.readingCalls++;const i=(i,l)=>{if(this.readingCalls--,this.waitingReads.length>0){const e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}i&&l&&r<this.maxRetries?setTimeout(()=>{this.read(e,t,n,r+1,2*o,a)},o):a(i,l)},l=this.backend[n].bind(this.backend);if(2!==l.length)return l(e,t,i);try{const n=l(e,t);n&&"function"===typeof n.then?n.then(e=>i(null,e)).catch(i):i(null,n)}catch(s){i(s)}}prepareLoading(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();Gp(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Gp(t)&&(t=[t]);const o=this.queueLoad(e,t,n,r);if(!o.toLoad.length)return o.pending.length||r(),null;o.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=e.split("|"),r=n[0],o=n[1];this.read(r,o,"read",void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${o} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${o} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,t,n,r,o){let a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:()=>{};if(!this.services?.utils?.hasLoadedNamespace||this.services?.utils?.hasLoadedNamespace(t)){if(void 0!==n&&null!==n&&""!==n){if(this.backend?.create){const s={...a,isUpdate:o},c=this.backend.create.bind(this.backend);if(c.length<6)try{let o;o=5===c.length?c(e,t,n,r,s):c(e,t,n,r),o&&"function"===typeof o.then?o.then(e=>i(null,e)).catch(i):i(null,o)}catch(l){i(l)}else c(e,t,n,r,i,s)}e&&e[0]&&this.store.addResource(e[0],t,n,r)}}else this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")}}const Of=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if("object"===typeof e[1]&&(t=e[1]),Gp(e[1])&&(t.defaultValue=e[1]),Gp(e[2])&&(t.tDescription=e[2]),"object"===typeof e[2]||"object"===typeof e[3]){const n=e[3]||e[2];Object.keys(n).forEach(e=>{t[e]=n[e]})}return t},interpolation:{escapeValue:!0,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Rf=e=>(Gp(e.ns)&&(e.ns=[e.ns]),Gp(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),Gp(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&!e.supportedLngs.includes("cimode")&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e),_f=()=>{};class Df extends hf{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;var n;if(super(),this.options=Rf(e),this.services={},this.logger=ff,this.modules={external:[]},n=this,Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach(e=>{"function"===typeof n[e]&&(n[e]=n[e].bind(n))}),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,"function"===typeof t&&(n=t,t={}),null==t.defaultNS&&t.ns&&(Gp(t.ns)?t.defaultNS=t.ns:t.ns.includes("translation")||(t.defaultNS=t.ns[0]));const r=Of();this.options={...r,...this.options,...Rf(t)},this.options.interpolation={...r.interpolation,...this.options.interpolation},void 0!==t.keySeparator&&(this.options.userDefinedKeySeparator=t.keySeparator),void 0!==t.nsSeparator&&(this.options.userDefinedNsSeparator=t.nsSeparator),"function"!==typeof this.options.overloadTranslationOptionHandler&&(this.options.overloadTranslationOptionHandler=r.overloadTranslationOptionHandler);const o=e=>e?"function"===typeof e?new e:e:null;if(!this.options.isClone){let t;this.modules.logger?ff.init(o(this.modules.logger),this.options):ff.init(null,this.options),t=this.modules.formatter?this.modules.formatter:Lf;const n=new wf(this.options);this.store=new mf(this.options.resources,this.options);const r=this.services;r.logger=ff,r.resourceStore=this.store,r.languageUtils=n,r.pluralResolver=new jf(n,{prepend:this.options.pluralSeparator}),t&&(r.formatter=o(t),r.formatter.init&&r.formatter.init(r,this.options),this.options.interpolation.format=r.formatter.format.bind(r.formatter)),r.interpolator=new Tf(this.options),r.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},r.backendConnector=new zf(o(this.modules.backend),r.resourceStore,r,this.options),r.backendConnector.on("*",function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e.emit(t,...r)}),this.modules.languageDetector&&(r.languageDetector=o(this.modules.languageDetector),r.languageDetector.init&&r.languageDetector.init(r,this.options.detection,this.options)),this.modules.i18nFormat&&(r.i18nFormat=o(this.modules.i18nFormat),r.i18nFormat.init&&r.i18nFormat.init(this)),this.translator=new xf(this.services,this.options),this.translator.on("*",function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e.emit(t,...r)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,n||(n=_f),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&"dev"!==e[0]&&(this.options.lng=e[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(t=>{this[t]=function(){return e.store[t](...arguments)}});["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(t=>{this[t]=function(){return e.store[t](...arguments),e}});const a=Yp(),i=()=>{const e=(e,t)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),a.resolve(t),n(e,t)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?i():setTimeout(i,0),a}loadResources(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_f;const n=Gp(e)?e:this.language;if("function"===typeof e&&(t=e),!this.options.resources||this.options.partialBundledLanguages){if("cimode"===n?.toLowerCase()&&(!this.options.preload||0===this.options.preload.length))return t();const e=[],r=t=>{if(!t)return;if("cimode"===t)return;this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{"cimode"!==t&&(e.includes(t)||e.push(t))})};if(n)r(n);else{this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>r(e))}this.options.preload?.forEach?.(e=>r(e)),this.services.backendConnector.load(e,this.options.ns,e=>{e||this.resolvedLanguage||!this.language||this.setResolvedLanguage(this.language),t(e)})}else t(null)}reloadResources(e,t,n){const r=Yp();return"function"===typeof e&&(n=e,e=void 0),"function"===typeof t&&(n=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),n||(n=_f),this.services.backendConnector.reload(e,t,e=>{r.resolve(),n(e)}),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&gf.addPostProcessor(e),"formatter"===e.type&&(this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this}setResolvedLanguage(e){if(e&&this.languages&&!["cimode","dev"].includes(e)){for(let e=0;e<this.languages.length;e++){const t=this.languages[e];if(!["cimode","dev"].includes(t)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}this.resolvedLanguage||this.languages.includes(e)||!this.store.hasLanguageSomeTranslations(e)||(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){var n=this;this.isLanguageChangingTo=e;const r=Yp();this.emit("languageChanging",e);const o=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},a=(a,i)=>{i?this.isLanguageChangingTo===e&&(o(i),this.translator.changeLanguage(i),this.isLanguageChangingTo=void 0,this.emit("languageChanged",i),this.logger.log("languageChanged",i)):this.isLanguageChangingTo=void 0,r.resolve(function(){return n.t(...arguments)}),t&&t(a,function(){return n.t(...arguments)})},i=t=>{e||t||!this.services.languageDetector||(t=[]);const n=Gp(t)?t:t&&t[0],r=this.store.hasLanguageSomeTranslations(n)?n:this.services.languageUtils.getBestMatchFromCodes(Gp(t)?[t]:t);r&&(this.language||o(r),this.translator.language||this.translator.changeLanguage(r),this.services.languageDetector?.cacheUserLanguage?.(r)),this.loadResources(r,e=>{a(e,r)})};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(i):this.services.languageDetector.detect(i):i(e):i(this.services.languageDetector.detect()),r}getFixedT(e,t,n,r){var o=this;const a=r?.scopeNs,i=function(e,t){let r;if("object"!==typeof t){for(var l=arguments.length,s=new Array(l>2?l-2:0),c=2;c<l;c++)s[c-2]=arguments[c];r=o.options.overloadTranslationOptionHandler([e,t].concat(s))}else r={...t};r.lng=r.lng||i.lng,r.lngs=r.lngs||i.lngs;const u=void 0!==r.ns&&null!==r.ns;r.ns=r.ns||i.ns,""!==r.keyPrefix&&(r.keyPrefix=r.keyPrefix||n||i.keyPrefix);const d={...o.options,...r};Array.isArray(a)&&!u&&(d.ns=a),"function"===typeof r.keyPrefix&&(r.keyPrefix=yf(r.keyPrefix,d));const p=o.options.keySeparator||".";let f;return r.keyPrefix&&Array.isArray(e)?f=e.map(e=>("function"===typeof e&&(e=yf(e,d)),`${r.keyPrefix}${p}${e}`)):("function"===typeof e&&(e=yf(e,d)),f=r.keyPrefix?`${r.keyPrefix}${p}${e}`:e),o.t(f,r)};return Gp(e)?i.lng=e:i.lngs=e,i.ns=t,i.keyPrefix=n,i}t(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.translator?.translate(...t)}exists(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.translator?.exists(...t)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=t.lng||this.resolvedLanguage||this.languages[0],r=!!this.options&&this.options.fallbackLng,o=this.languages[this.languages.length-1];if("cimode"===n.toLowerCase())return!0;const a=(e,t)=>{const n=this.services.backendConnector.state[`${e}|${t}`];return-1===n||0===n||2===n};if(t.precheck){const e=t.precheck(this,a);if(void 0!==e)return e}return!!this.hasResourceBundle(n,e)||(!(this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages))||!(!a(n,e)||r&&!a(o,e)))}loadNamespaces(e,t){const n=Yp();return this.options.ns?(Gp(e)&&(e=[e]),e.forEach(e=>{this.options.ns.includes(e)||this.options.ns.push(e)}),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){const n=Yp();Gp(e)&&(e=[e]);const r=this.options.preload||[],o=e.filter(e=>!r.includes(e)&&this.services.languageUtils.isSupportedCode(e));return o.length?(this.options.preload=r.concat(o),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!e)return"rtl";try{const t=new Intl.Locale(e);if(t&&t.getTextInfo){const e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch(bh){}const t=this.services?.languageUtils||new wf(Of());return e.toLowerCase().indexOf("-latn")>1?"ltr":["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].includes(t.getLanguagePartFromCode(e))||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){const e=new Df(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0);return e.createInstance=Df.createInstance,e}cloneInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_f;const n=e.forkResourceStore;n&&delete e.forkResourceStore;const r={...this.options,...e,isClone:!0},o=new Df(r);void 0===e.debug&&void 0===e.prefix||(o.logger=o.logger.clone(e));if(["store","services","language"].forEach(e=>{o[e]=this[e]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},n){const e=Object.keys(this.store.data).reduce((e,t)=>(e[t]={...this.store.data[t]},e[t]=Object.keys(e[t]).reduce((n,r)=>(n[r]={...e[t][r]},n),e[t]),e),{});o.store=new mf(e,r),o.services.resourceStore=o.store}if(e.interpolation){const t={...Of().interpolation,...this.options.interpolation,...e.interpolation},n={...r,interpolation:t};o.services.interpolator=new Tf(n)}return o.translator=new xf(o.services,r),o.translator.on("*",function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];o.emit(e,...n)}),o.init(r,t),o.translator.options=r,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Af=Df.createInstance(),Mf=(Af.createInstance,Af.dir,Af.init,Af.loadResources,Af.reloadResources,Af.use,Af.changeLanguage,Af.getFixedT,Af.t,Af.exists,Af.setDefaultNamespace,Af.hasLoadedNamespace,Af.loadNamespaces,Af.loadLanguages,{type:"3rdParty",init(e){!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};ia={...ia,...e}}(e.options.react),(e=>{na=e})(e)}}),{slice:If,forEach:$f}=[];const Ff=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Uf={create(e,t,n,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};n&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+60*n*1e3)),r&&(o.domain=r),document.cookie=function(e,t){const n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{path:"/"};let r=`${e}=${encodeURIComponent(t)}`;if(n.maxAge>0){const e=n.maxAge-0;if(Number.isNaN(e))throw new Error("maxAge should be a Number");r+=`; Max-Age=${Math.floor(e)}`}if(n.domain){if(!Ff.test(n.domain))throw new TypeError("option domain is invalid");r+=`; Domain=${n.domain}`}if(n.path){if(!Ff.test(n.path))throw new TypeError("option path is invalid");r+=`; Path=${n.path}`}if(n.expires){if("function"!==typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");r+=`; Expires=${n.expires.toUTCString()}`}if(n.httpOnly&&(r+="; HttpOnly"),n.secure&&(r+="; Secure"),n.sameSite)switch("string"===typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return n.partitioned&&(r+="; Partitioned"),r}(e,t,o)},read(e){const t=`${e}=`,n=document.cookie.split(";");for(let r=0;r<n.length;r++){let e=n[r];for(;" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(t))return e.substring(t.length,e.length)}return null},remove(e,t){this.create(e,"",-1,t)}};var Hf={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&"undefined"!==typeof document)return Uf.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:n,cookieMinutes:r,cookieDomain:o,cookieOptions:a}=t;n&&"undefined"!==typeof document&&Uf.create(n,e,r,o,a)}},Bf={name:"querystring",lookup(e){let t,{lookupQuerystring:n}=e;if("undefined"!==typeof window){let{search:e}=window.location;!window.location.search&&window.location.hash?.indexOf("?")>-1&&(e=window.location.hash.substring(window.location.hash.indexOf("?")));const r=e.substring(1).split("&");for(let o=0;o<r.length;o++){const e=r[o].indexOf("=");if(e>0){r[o].substring(0,e)===n&&(t=r[o].substring(e+1))}}}return t}},Wf={name:"hash",lookup(e){let t,{lookupHash:n,lookupFromHashIndex:r}=e;if("undefined"!==typeof window){const{hash:e}=window.location;if(e&&e.length>2){const o=e.substring(1);if(n){const e=o.split("&");for(let r=0;r<e.length;r++){const o=e[r].indexOf("=");if(o>0){e[r].substring(0,o)===n&&(t=e[r].substring(o+1))}}}if(t)return t;if(!t&&r>-1){const t=e.match(/\/([a-zA-Z-]*)/g);if(!Array.isArray(t))return;const n="number"===typeof r?r:0;return t[n]?.replace("/","")}}}return t}};let Vf=null;const qf=()=>{if(null!==Vf)return Vf;try{if(Vf="undefined"!==typeof window&&null!==window.localStorage,!Vf)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch(bh){Vf=!1}return Vf};var Gf={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&qf())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:n}=t;n&&qf()&&window.localStorage.setItem(n,e)}};let Yf=null;const Kf=()=>{if(null!==Yf)return Yf;try{if(Yf="undefined"!==typeof window&&null!==window.sessionStorage,!Yf)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch(bh){Yf=!1}return Yf};var Qf={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&Kf())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:n}=t;n&&Kf()&&window.sessionStorage.setItem(n,e)}},Jf={name:"navigator",lookup(e){const t=[];if("undefined"!==typeof navigator){const{languages:e,userLanguage:n,language:r}=navigator;if(e)for(let o=0;o<e.length;o++)t.push(e[o]);n&&t.push(n),r&&t.push(r)}return t.length>0?t:void 0}},Xf={name:"htmlTag",lookup(e){let t,{htmlTag:n}=e;const r=n||("undefined"!==typeof document?document.documentElement:null);return r&&"function"===typeof r.getAttribute&&(t=r.getAttribute("lang")),t}},Zf={name:"path",lookup(e){let{lookupFromPathIndex:t}=e;if("undefined"===typeof window)return;const n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(!Array.isArray(n))return;const r="number"===typeof t?t:0;return n[r]?.replace("/","")}},eh={name:"subdomain",lookup(e){let{lookupFromSubdomainIndex:t}=e;const n="number"===typeof t?t+1:1,r="undefined"!==typeof window&&window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(r)return r[n]}};let th=!1;try{document.cookie,th=!0}catch(bh){}const nh=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];th||nh.splice(1,1);class rh{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{languageUtils:{}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=function(e){return $f.call(If.call(arguments,1),t=>{if(t)for(const n in t)void 0===e[n]&&(e[n]=t[n])}),e}(t,this.options||{},{order:nh,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e}),"string"===typeof this.options.convertDetectedLanguage&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=e=>e.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=n,this.addDetector(Hf),this.addDetector(Bf),this.addDetector(Gf),this.addDetector(Qf),this.addDetector(Jf),this.addDetector(Xf),this.addDetector(Zf),this.addDetector(eh),this.addDetector(Wf)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.order,t=[];return e.forEach(e=>{if(this.detectors[e]){let n=this.detectors[e].lookup(this.options);n&&"string"===typeof n&&(n=[n]),n&&(t=t.concat(n))}}),t=t.filter(e=>{return void 0!==e&&null!==e&&!("string"===typeof(t=e)&&[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(e=>e.test(t)));var t}).map(e=>this.options.convertDetectedLanguage(e)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(t=>{this.detectors[t]&&this.detectors[t].cacheUserLanguage(e,this.options)}))}}rh.type="languageDetector";const oh=JSON.parse('{"logo":{"me":"\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646"},"nav":{"home":"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629","about":"\u0639\u0646\u064a","projects":"\u0645\u0634\u0627\u0631\u064a\u0639\u064a","contact":"\u062a\u0648\u0627\u0635\u0644"},"buttons":{"contact":"\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a","view_project":"\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639","demo":"\u0645\u0639\u0627\u064a\u0646\u0629 \u062d\u064a\u0629","cv":"\u0633\u064a\u0631\u062a\u064a \u0627\u0644\u0630\u0627\u062a\u064a\u0629","projects":"\u0627\u0633\u062a\u0639\u0631\u0636 \u0645\u0634\u0627\u0631\u064a\u0639\u064a"},"copyright":"\u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629"}'),ah=JSON.parse('{"hero":{"availability_status":"\u0645\u062a\u0627\u062d \u0644\u0644\u0627\u0646\u062a\u0642\u0627\u0644 \u0627\u0644\u0648\u0638\u064a\u0641\u064a \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0645\u0633\u062a\u0642\u0644\u0629","name":"\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631","job_titles":["\u0641\u0646\u064a \u062f\u0639\u0645 \u0628\u0631\u0627\u0645\u062c","\u0641\u0646\u064a \u062f\u0639\u0645 \u062a\u0642\u0646\u064a\u0629 \u0645\u0639\u0644\u0648\u0645\u0627\u062a","\u0641\u0646\u064a \u062f\u0639\u0645 \u0642\u0648\u0627\u0639\u062f \u0628\u064a\u0627\u0646\u0627\u062a","\u0641\u0646\u064a \u0646\u0638\u0645 \u062d\u0627\u0633\u0628 \u0622\u0644\u064a","\u0645\u062f\u062e\u0644 \u0628\u064a\u0627\u0646\u0627\u062a","\u0645\u0637\u0648\u0631 \u0648\u064a\u0628 \u0645\u062a\u0643\u0627\u0645\u0644","\u0645\u062f\u064a\u0631 \u0645\u0648\u0627\u0642\u0639 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629","\u0645\u0637\u0648\u0631 \u0645\u0648\u0627\u0642\u0639 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629","\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644","\u0645\u0648\u0638\u0641 \u0635\u0646\u062f\u0648\u0642 \u0645\u062d\u0627\u0633\u0628\u0629"],"introduction":"\u062e\u0631\u064a\u062c \u062f\u0628\u0644\u0648\u0645 \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644 \u0645\u0646 \u062c\u0627\u0645\u0639\u0629 \u0637\u064a\u0628\u0629\u060c \u0623\u0645\u062a\u0644\u0643 \u0645\u0647\u0627\u0631\u0627\u062a \u062a\u0642\u0646\u064a\u0629 \u0648\u0625\u062f\u0627\u0631\u064a\u0629 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0648\u0627\u0642\u0639\u060c \u0648\u0627\u0644\u062f\u0639\u0645 \u0627\u0644\u0641\u0646\u064a\u060c \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0631\u0642\u0645\u064a\u0629. \u0623\u0633\u0639\u0649 \u0625\u0644\u0649 \u062a\u0648\u0638\u064a\u0641 \u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0648\u062e\u0628\u0631\u0627\u062a\u064a \u0641\u064a \u0641\u0631\u0635 \u0645\u0647\u0646\u064a\u0629 \u0648\u0645\u0634\u0627\u0631\u064a\u0639 \u062a\u0633\u0627\u0647\u0645 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0648\u062a\u062d\u0633\u064a\u0646 \u0643\u0641\u0627\u0621\u062a\u0647\u0627.","tech_stack":[{"text":"React","icon":"React"},{"text":"JavaScript","icon":"JavaScript"},{"text":"HTML5","icon":"HTML"},{"text":"CSS3","icon":"CSS"},{"text":"Git","icon":"Git"},{"text":"SQL","icon":"SQL"},{"text":"Microsoft 365","icon":"Microsoft 365"}],"statistic":{"projects":"\u0645\u0634\u0627\u0631\u064a\u0639 \u0645\u0646\u062c\u0632\u0629","technologies":"\u062a\u0642\u0646\u064a\u0627\u062a \u0648\u0623\u062f\u0648\u0627\u062a \u0645\u0633\u062a\u062e\u062f\u0645\u0629","years":"\u0633\u0646\u0648\u0627\u062a \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628"},"profileAlt":"\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631 - \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0648\u0627\u0644\u062f\u0639\u0645 \u0627\u0644\u062a\u0642\u0646\u064a \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629"},"services":{"title":"\u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0648\u062e\u062f\u0645\u0627\u062a\u064a","description":"\u0645\u0647\u0627\u0631\u0627\u062a \u0648\u062e\u062f\u0645\u0627\u062a \u062a\u0642\u0646\u064a\u0629 \u0648\u0625\u062f\u0627\u0631\u064a\u0629 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0648\u0627\u0642\u0639\u060c \u0648\u0627\u0644\u062f\u0639\u0645 \u0627\u0644\u0641\u0646\u064a\u060c \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a\u060c \u062a\u0633\u0647\u0645 \u0641\u064a \u062a\u0633\u0647\u064a\u0644 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0648\u0631\u0641\u0639 \u0643\u0641\u0627\u0621\u0629 \u0625\u0646\u062c\u0627\u0632 \u0627\u0644\u0645\u0647\u0627\u0645.","items":[{"id":"1","icon":"web","title":"\u062a\u0637\u0648\u064a\u0631 \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629","description":"\u062a\u0635\u0645\u064a\u0645 \u0648\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0648\u0645\u0648\u0627\u0642\u0639 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629 \u0645\u062a\u062c\u0627\u0648\u0628\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 HTML \u0648CSS \u0648JavaScript \u0648React\u060c \u0645\u0639 \u0627\u0644\u0627\u0647\u062a\u0645\u0627\u0645 \u0628\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0648\u062a\u062d\u0633\u064a\u0646 \u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u062a\u062d\u062f\u064a\u062b\u0627\u062a \u0627\u0644\u0645\u0648\u0627\u0642\u0639."},{"id":"2","icon":"technology","title":"\u0627\u0644\u062f\u0639\u0645 \u0627\u0644\u0641\u0646\u064a \u0648\u062f\u0639\u0645 \u0627\u0644\u0623\u0646\u0638\u0645\u0629","description":"\u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629 \u0641\u064a \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0623\u062c\u0647\u0632\u0629 \u0627\u0644\u062d\u0627\u0633\u0628 \u0648\u0627\u0644\u0628\u0631\u0627\u0645\u062c \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a\u060c \u0648\u062a\u0634\u062e\u064a\u0635 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629\u060c \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0623\u0639\u0637\u0627\u0644 \u0648\u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0625\u0631\u0634\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646."},{"id":"3","icon":"applications","title":"\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u0643\u062a\u0628\u064a\u0629","description":"\u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0645\u0631\u0627\u062c\u0639\u062a\u0647\u0627 \u0648\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0648\u0627\u0644\u0633\u062c\u0644\u0627\u062a\u060c \u0648\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u062a\u0637\u0628\u064a\u0642\u0627\u062a Microsoft 365 \u0644\u0625\u0639\u062f\u0627\u062f \u0627\u0644\u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0648\u0627\u0644\u062c\u062f\u0627\u0648\u0644 \u0648\u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631\u060c \u0645\u0639 \u0627\u0644\u0627\u0647\u062a\u0645\u0627\u0645 \u0628\u0627\u0644\u062f\u0642\u0629 \u0648\u0633\u0631\u064a\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a."}]},"featuredProjects":{"header":{"title":"\u0623\u0628\u0631\u0632 \u0645\u0634\u0627\u0631\u064a\u0639\u064a","desc":"\u0646\u0645\u0627\u0630\u062c \u0645\u0646 \u0623\u0639\u0645\u0627\u0644\u064a \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0648\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0628\u0646\u0627\u0621 \u0648\u0627\u062c\u0647\u0627\u062a \u0631\u0642\u0645\u064a\u0629 \u0633\u0647\u0644\u0629 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645.","view_projects":"\u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639"},"items":[{"id":"React-To-Do-List","date":"2026/08/30","project_img":["react1"],"title":"\u062a\u0637\u0628\u064a\u0642 \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React","desc":[{"type":"text","value":"\u062a\u0637\u0628\u064a\u0642 \u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React \u0648LocalStorage\u060c \u064a\u062a\u064a\u062d \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0639\u0631\u0636\u0647\u0627 \u0648\u062a\u0639\u062f\u064a\u0644\u0647\u0627 \u0648\u062d\u0630\u0641\u0647\u0627 (CRUD)\u060c \u0648\u064a\u0648\u0636\u062d \u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0641\u064a \u0628\u0646\u0627\u0621 \u0648\u0627\u062c\u0647\u0627\u062a \u062a\u0641\u0627\u0639\u0644\u064a\u0629 \u0648\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u062f\u0627\u062e\u0644 \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a. \u0637\u064f\u0648\u0651\u0631 \u0636\u0645\u0646 "},{"type":"link","text":"\u062f\u0648\u0631\u0629 \u062a\u0637\u0648\u064a\u0631 \u062a\u0637\u0628\u064a\u0642\u0627\u062a JavaScript","href":"https://academy.hsoub.com/learn/javascript-application-development/"},{"type":"text","value":" \u0645\u0646 \u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u062d\u0633\u0648\u0628."}],"tech_stack":["React","React Hooks","JavaScript","CRUD","LocalStorage"],"link":"https://dhomlmgyr188.github.io/React-To-Do-List/"},{"id":"Portfolio_v1","date":"2026/05/24","project_img":["anaalmughyir1"],"title":"\u0645\u0648\u0642\u0639 \u0634\u062e\u0635\u064a - \u0627\u0644\u0625\u0635\u062f\u0627\u0631 \u0627\u0644\u0633\u0627\u0628\u0642","desc":[{"type":"text","value":"\u0645\u0648\u0642\u0639 \u0634\u062e\u0635\u064a \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a\u060c \u064a\u062a\u0645\u064a\u0632 \u0628\u062a\u0635\u0645\u064a\u0645 \u0645\u062a\u062c\u0627\u0648\u0628 \u0648\u062a\u0646\u0638\u064a\u0645 \u0648\u0627\u0636\u062d \u0644\u0644\u0645\u062d\u062a\u0648\u0649 \u0648\u0648\u0627\u062c\u0647\u0629 \u0633\u0647\u0644\u0629 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645\u060c \u0648\u064a\u0639\u0643\u0633 \u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0631\u0642\u0645\u064a."}],"tech_stack":["HTML","CSS","Vanilla JavaScript"],"link":"https://dhomlmgyr188.github.io/abdulrahman-portfolio-static/frontend/"}]},"footer":{"quickLinks":{"title":"\u0631\u0648\u0627\u0628\u0637 \u0633\u0631\u064a\u0639\u0629"},"socialMedia":{"title":"\u062d\u0633\u0627\u0628\u0627\u062a\u064a"},"contactInfo":{"title":"\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a","location":{"value":"\u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629\u060c \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629"},"email":{"title":"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a","value":"dhomlmgyr@gmail.com"},"tel":{"title":"\u0631\u0642\u0645 \u0627\u0644\u062c\u0648\u0627\u0644","value":"+966541590819"}},"copyright":"\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629."},"callToAction":{"title":"\u0647\u0644 \u0644\u062f\u064a\u0643 \u0641\u0631\u0635\u0629 \u0645\u0647\u0646\u064a\u0629 \u0623\u0648 \u0645\u0634\u0631\u0648\u0639 \u0644\u0644\u062a\u0639\u0627\u0648\u0646\u061f","paragraph":"\u0623\u0631\u062d\u0628 \u0628\u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0628\u0634\u0623\u0646 \u0627\u0644\u0641\u0631\u0635 \u0627\u0644\u0648\u0638\u064a\u0641\u064a\u0629 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0645\u0633\u062a\u0642\u0644\u0629 \u0641\u064a \u0627\u0644\u0645\u062c\u0627\u0644\u0627\u062a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0648\u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629."}}'),ih=JSON.parse('{"pageTitle":"\u0639\u0646\u064a","pageDesc":"\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0645\u0624\u0647\u0644\u0627\u062a\u064a \u0627\u0644\u0639\u0644\u0645\u064a\u0629 \u0648\u062e\u0628\u0631\u0627\u062a\u064a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0634\u0647\u0627\u062f\u0627\u062a\u064a \u0648\u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0648\u0645\u0634\u0627\u0631\u0643\u0627\u062a\u064a \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u0629.","content":{"intro":{"title":"\u0646\u0628\u0630\u0629 \u0639\u0646\u064a","paragraph1":"\u0623\u0646\u0627 \u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u063a\u064a\u0631\u060c \u062e\u0631\u064a\u062c \u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644 \u0645\u0646 \u0627\u0644\u0643\u0644\u064a\u0629 \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u064a\u0629 \u0628\u062c\u0627\u0645\u0639\u0629 \u0637\u064a\u0628\u0629 \u0641\u064a \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629. \u0623\u062c\u0645\u0639 \u0628\u064a\u0646 \u0627\u0644\u0645\u0639\u0631\u0641\u0629 \u0628\u062a\u0637\u0648\u064a\u0631 \u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0648\u064a\u0628 \u0648\u0627\u0644\u062e\u0628\u0631\u0629 \u0627\u0644\u0639\u0645\u0644\u064a\u0629 \u0641\u064a \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0631\u0642\u0645\u064a\u0629 \u0648\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062a\u0634\u063a\u064a\u0644\u064a\u0629 \u0648\u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629.","paragraph2":"\u0627\u0643\u062a\u0633\u0628\u062a \u062e\u0628\u0631\u0629 \u0639\u0645\u0644\u064a\u0629 \u0641\u064a \u0627\u0644\u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0627\u0644\u0641\u0646\u062f\u0642\u064a \u0648\u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a \u0648\u0646\u0642\u0627\u0637 \u0627\u0644\u0628\u064a\u0639\u060c \u0625\u0644\u0649 \u062c\u0627\u0646\u0628 \u062a\u0646\u0641\u064a\u0630 \u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u064a\u0628 \u0645\u0633\u062a\u0642\u0644\u0629 \u0648\u062f\u0631\u0627\u0633\u064a\u0629. \u0623\u0647\u062a\u0645 \u0628\u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0648\u0627\u0644\u062f\u0642\u0629 \u0641\u064a \u0627\u0644\u0639\u0645\u0644 \u0648\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0648\u062d\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062a\u060c \u0648\u0623\u0633\u0639\u0649 \u0625\u0644\u0649 \u062a\u0637\u0648\u064a\u0631 \u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0648\u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629 \u0641\u064a \u0628\u064a\u0626\u0629 \u0645\u0647\u0646\u064a\u0629 \u0645\u0646\u062a\u062c\u0629."},"infoTitle":"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0633\u0631\u064a\u0639\u0629","profile":[{"label":"\u0627\u0644\u0645\u0648\u0642\u0639","value":"\u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629\u060c \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629"},{"label":"\u0627\u0644\u0645\u0624\u0647\u0644 \u0627\u0644\u0639\u0644\u0645\u064a","value":"\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637"},{"label":"\u0627\u0644\u062a\u062e\u0635\u0635","value":"\u0645\u0637\u0648\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644"},{"label":"\u0627\u0644\u0644\u063a\u0627\u062a","value":"\u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0648\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629"},{"label":"\u0627\u0644\u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0647\u0646\u064a\u0629","value":"\u0645\u062a\u0627\u062d \u0644\u0644\u0641\u0631\u0635 \u0627\u0644\u0648\u0638\u064a\u0641\u064a\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0645\u0633\u062a\u0642\u0644\u0629"}],"education":{"title":"\u0631\u062d\u0644\u062a\u064a \u0627\u0644\u062a\u0639\u0644\u064a\u0645\u064a\u0629","description":"\u0645\u0624\u0647\u0644\u0627\u062a\u064a \u0627\u0644\u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629\u060c \u0645\u0639 \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062a \u0627\u0644\u062a\u0639\u0644\u064a\u0645\u064a\u0629 \u0648\u0627\u0644\u062a\u062e\u0635\u0635\u0627\u062a \u0648\u062a\u0648\u0627\u0631\u064a\u062e \u0627\u0644\u062a\u062e\u0631\u062c \u0648\u0627\u0644\u0645\u0639\u062f\u0644\u0627\u062a.","gradeLabel":"\u0627\u0644\u0645\u0639\u062f\u0644 \u0627\u0644\u062a\u0631\u0627\u0643\u0645\u064a","items":[{"degree":"\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","school":"\u0627\u0644\u0643\u0644\u064a\u0629 \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u064a\u0629\u060c \u062c\u0627\u0645\u0639\u0629 \u0637\u064a\u0628\u0629 \u2014 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629","field":"\u0627\u0644\u062a\u062e\u0635\u0635: \u0645\u0637\u0648\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644 | \u0627\u0644\u062a\u0642\u062f\u064a\u0631: \u062c\u064a\u062f","date":"2026-01-11","grade":"3.60 / 5","documentType":"diploma","document":"/documents/education/diploma.png"},{"degree":"\u0634\u0647\u0627\u062f\u0629 \u0627\u0644\u062b\u0627\u0646\u0648\u064a\u0629 \u0627\u0644\u0639\u0627\u0645\u0629","school":"\u062b\u0627\u0646\u0648\u064a\u0629 \u0623\u0628\u064a \u0633\u0641\u064a\u0627\u0646 \u0628\u0646 \u062d\u0631\u0628 \u2014 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629","field":"\u0627\u0644\u0645\u0633\u0627\u0631: \u0627\u0644\u0639\u0644\u0648\u0645 \u0627\u0644\u0637\u0628\u064a\u0639\u064a\u0629 | \u0627\u0644\u062a\u0642\u062f\u064a\u0631: \u062c\u064a\u062f \u062c\u062f\u064b\u0627 \u0645\u0631\u062a\u0641\u0639","date":"2022-07-30","grade":"85.39 / 100","documentType":"graduation","document":"/documents/education/secondary-school.png"}]},"experience":{"title":"\u062e\u0628\u0631\u0627\u062a\u064a \u0627\u0644\u0645\u0647\u0646\u064a\u0629","description":"\u0623\u0631\u0628\u0639 \u062a\u062c\u0627\u0631\u0628 \u0639\u0645\u0644 \u0641\u0639\u0644\u064a\u0629 \u0623\u0633\u0647\u0645\u062a \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0641\u064a \u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u0648\u0627\u0644\u0625\u062f\u0627\u0631\u0629 \u0648\u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a \u0648\u0627\u0644\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0631\u0642\u0645\u064a\u0629.","items":[{"role":"\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642","company":"\u0641\u0646\u062f\u0642 \u0645\u0646\u0627\u0632\u0644 \u0627\u0644\u0631\u062d\u0645\u0629 \u2014 \u0634\u0631\u0643\u0629 \u0623\u0628\u0631\u0627\u062c \u0627\u0644\u0633\u0639\u0627\u062f\u0629","employmentType":"full-time","startDate":"2025-07-12","endDate":"Present","description":"\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u064a\u0648\u0645\u064a\u0629 \u0627\u0644\u0645\u062a\u0639\u0644\u0642\u0629 \u0628\u062d\u062c\u0648\u0632\u0627\u062a \u0648\u062a\u0633\u0643\u064a\u0646 \u0648\u0645\u063a\u0627\u062f\u0631\u0629 \u0627\u0644\u0646\u0632\u0644\u0627\u0621 \u0648\u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0627\u062a \u0641\u064a \u0641\u0646\u062f\u0642 \u064a\u0636\u0645 160 \u063a\u0631\u0641\u0629\u060c \u0648\u0625\u0639\u062f\u0627\u062f \u062c\u062f\u0627\u0648\u0644 \u0627\u0644\u062d\u062c\u0648\u0632\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Excel\u060c \u0648\u0625\u0635\u062f\u0627\u0631 \u0627\u0644\u0633\u0646\u062f\u0627\u062a \u0648\u0623\u0631\u0634\u0641\u062a\u0647\u0627\u060c \u0648\u062a\u062c\u0647\u064a\u0632 \u0645\u0633\u062a\u0646\u062f\u0627\u062a Word\u060c \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u062c\u0648\u062f\u0629 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0648\u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0637\u0627\u062a \u0627\u0644\u0635\u062d\u064a\u0629."},{"role":"\u0645\u0646\u062f\u0648\u0628 \u0645\u0628\u064a\u0639\u0627\u062a \u0634\u0631\u0627\u0626\u062d \u0627\u062a\u0635\u0627\u0644\u0627\u062a","company":"\u0645\u0624\u0633\u0633\u0629 \u0633\u062d\u0627\u0628\u0629 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0644\u0644\u0627\u062a\u0635\u0627\u0644\u0627\u062a \u2014 \u0645\u0634\u0631\u0648\u0639 \u0632\u064a\u0646","employmentType":"seasonal","startDate":"2025-04-16","endDate":"2025-05-16","description":"\u062a\u0633\u0648\u064a\u0642 \u0648\u062a\u0641\u0639\u064a\u0644 \u0634\u0631\u0627\u0626\u062d \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0644\u0644\u0632\u0648\u0627\u0631 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0631\u0642\u0645\u064a\u0629 \u0648\u0642\u0627\u0631\u0626\u0627\u062a \u0627\u0644\u0628\u0635\u0645\u0629\u060c \u0648\u0625\u062f\u062e\u0627\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u062a\u0648\u062b\u064a\u0642 \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a. \u062a\u062d\u0642\u064a\u0642 \u0643\u0627\u0645\u0644 \u0627\u0644\u0645\u0633\u062a\u0647\u062f\u0641 \u0627\u0644\u0634\u0647\u0631\u064a \u062e\u0644\u0627\u0644 24 \u064a\u0648\u0645\u064b\u0627\u060c \u0645\u0639 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 40 \u0639\u0645\u0644\u064a\u0629 \u062a\u0641\u0639\u064a\u0644 \u064a\u0648\u0645\u064a\u064b\u0627 \u0641\u064a \u0641\u062a\u0631\u0627\u062a \u0627\u0644\u0630\u0631\u0648\u0629."},{"role":"\u0645\u0635\u0646\u0641 \u0623\u0637\u0639\u0645\u0629 \u0648\u0645\u0634\u0631\u0648\u0628\u0627\u062a (\u0643\u0627\u0634\u064a\u0631)","company":"\u0645\u0637\u0639\u0645 \u0627\u0644\u062a\u062d\u0644\u064a\u0629 \u0644\u0644\u0648\u062c\u0628\u0627\u062a \u0627\u0644\u0633\u0631\u064a\u0639\u0629","employmentType":"full-time","startDate":"2024-01-27","endDate":"2024-04-21","description":"\u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0648\u0645\u0639\u0627\u0644\u062c\u062a\u0647\u0627 \u0639\u0628\u0631 \u0646\u0638\u0627\u0645 \u0646\u0642\u0627\u0637 \u0627\u0644\u0628\u064a\u0639 \u0648\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0648\u0635\u064a\u0644\u060c \u0648\u062a\u062d\u0635\u064a\u0644 \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a \u0648\u0645\u0637\u0627\u0628\u0642\u0629 \u0627\u0644\u0625\u064a\u0631\u0627\u062f\u0627\u062a\u060c \u0648\u0627\u0644\u062a\u0646\u0633\u064a\u0642 \u0645\u0639 \u0641\u0631\u064a\u0642 \u0627\u0644\u0639\u0645\u0644 \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u062c\u0648\u062f\u0629 \u062a\u062c\u0647\u064a\u0632 \u0627\u0644\u0637\u0644\u0628\u0627\u062a.","documentType":"experience","document":"/documents/experience/altahlia-cashier.png"},{"role":"\u0645\u0648\u0638\u0641 \u0635\u0646\u062f\u0648\u0642 \u0645\u062d\u0627\u0633\u0628\u0629 (\u0643\u0627\u0634\u064a\u0631)","company":"\u0639\u0635\u0627\u0626\u0631 \u0641\u0631\u0627\u0648\u0644\u062a\u064a","employmentType":"full-time","startDate":"2022-05-16","endDate":"2022-08-01","description":"\u0625\u062f\u0627\u0631\u0629 \u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u0625\u0635\u062f\u0627\u0631 \u0627\u0644\u0641\u0648\u0627\u062a\u064a\u0631 \u0648\u062a\u062d\u0635\u064a\u0644 \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a \u0627\u0644\u0646\u0642\u062f\u064a\u0629 \u0648\u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629\u060c \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u0637\u0644\u0628\u0627\u062a \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0648\u0635\u064a\u0644 \u0648\u0627\u0644\u062a\u0646\u0633\u064a\u0642 \u0645\u0639 \u0641\u0631\u064a\u0642 \u0627\u0644\u0639\u0645\u0644\u060c \u0648\u0625\u062c\u0631\u0627\u0621 \u0645\u0637\u0627\u0628\u0642\u0629 \u0627\u0644\u0625\u064a\u0631\u0627\u062f\u0627\u062a \u0627\u0644\u064a\u0648\u0645\u064a\u0629.","documentType":"experience","document":"/documents/experience/frawlaty-cashier.png"}]},"certificates":{"title":"\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0648\u0627\u0644\u062f\u0648\u0631\u0627\u062a \u0627\u0644\u062a\u062f\u0631\u064a\u0628\u064a\u0629","description":"\u0634\u0647\u0627\u062f\u0627\u062a \u0648\u062f\u0648\u0631\u0627\u062a \u062a\u062f\u0631\u064a\u0628\u064a\u0629 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0648\u0627\u0644\u0623\u0645\u0646 \u0627\u0644\u0633\u064a\u0628\u0631\u0627\u0646\u064a \u0648\u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629 \u0648\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629\u060c \u0645\u0631\u062a\u0628\u0629 \u0645\u0646 \u0627\u0644\u0623\u062d\u062f\u062b \u0625\u0644\u0649 \u0627\u0644\u0623\u0642\u062f\u0645.","items":[{"name":"\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629 \u0641\u064a \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629","provider":"\u0645\u0639\u0647\u062f \u0645\u0633\u062a\u0642\u0628\u0644\u0646\u0627 \u0644\u0644\u062a\u062f\u0631\u064a\u0628","date":"2026-10-05","hours":"40 \u0633\u0627\u0639\u0629 \u062a\u062f\u0631\u064a\u0628\u064a\u0629 \u2014 10 \u0623\u064a\u0627\u0645","documentType":"certificate","document":"/documents/courses/hr-management-basics.png"},{"name":"\u0645\u0642\u062f\u0645\u0629 \u0641\u064a \u0627\u0644\u0623\u0645\u0646 \u0627\u0644\u0633\u064a\u0628\u0631\u0627\u0646\u064a","provider":"\u0645\u0639\u0647\u062f \u0645\u0633\u062a\u0642\u0628\u0644\u0646\u0627 \u0644\u0644\u062a\u062f\u0631\u064a\u0628","date":"2026-10-03","hours":"50 \u0633\u0627\u0639\u0629 \u062a\u062f\u0631\u064a\u0628\u064a\u0629 \u2014 10 \u0623\u064a\u0627\u0645","documentType":"certificate","document":"/documents/courses/cybersecurity-introduction.png"},{"name":"\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0646\u0627\u0639\u0645\u0629 \u0648\u0641\u0646 \u0627\u0644\u0627\u062a\u0635\u0627\u0644","provider":"\u0635\u0646\u062f\u0648\u0642 \u062a\u0646\u0645\u064a\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629 (\u0647\u062f\u0641)","date":"2026-05-05","hours":"\u0633\u0627\u0639\u0629 \u062a\u062f\u0631\u064a\u0628\u064a\u0629 \u0648\u0627\u062d\u062f\u0629","documentType":"certificate","document":"/documents/courses/soft-skills-communication.png"},{"name":"\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645","provider":"\u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u062d\u0633\u0648\u0628","date":"2026-03-27","documentType":"completion","document":"/documents/courses/hsoub-frontend.png"},{"name":"\u0627\u0644\u062a\u0639\u0631\u064a\u0641 \u0628\u0628\u0631\u0627\u0645\u062c \u0635\u0646\u062f\u0648\u0642 \u062a\u0646\u0645\u064a\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629","provider":"\u0635\u0646\u062f\u0648\u0642 \u062a\u0646\u0645\u064a\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629 (\u0647\u062f\u0641)","date":"2023-07-05","documentType":"certificate","document":"/documents/courses/hr-fund-programs.png"},{"name":"\u0627\u0644\u062a\u0633\u0627\u0645\u062d \u0648\u0627\u0644\u062a\u0639\u0627\u064a\u0634 \u0648\u0627\u0644\u0644\u062d\u0645\u0629 \u0627\u0644\u0648\u0637\u0646\u064a\u0629","provider":"\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0644\u0643 \u0639\u0628\u062f\u0627\u0644\u0639\u0632\u064a\u0632 \u0644\u0644\u062d\u0648\u0627\u0631 \u0627\u0644\u0648\u0637\u0646\u064a \u2014 \u0641\u0631\u0639 \u0646\u062c\u0631\u0627\u0646","date":"2023-05-14","documentType":"certificate","document":"/documents/courses/tolerance-coexistence.png"},{"name":"\u0627\u0644\u0645\u0631\u0648\u0646\u0629 \u0627\u0644\u0646\u0641\u0633\u064a\u0629","provider":"\u062c\u0645\u0639\u064a\u0629 \u0627\u0628\u0646 \u0628\u0627\u0632 \u0644\u0644\u062a\u0646\u0645\u064a\u0629 \u0627\u0644\u0623\u0633\u0631\u064a\u0629","date":"2023-03-23","documentType":"certificate","document":"/documents/courses/psychological-resilience.png"},{"name":"\u0623\u062e\u0644\u0627\u0642\u064a\u0627\u062a \u0627\u0644\u0639\u0645\u0644","provider":"\u0645\u0631\u0643\u0632 \u0637\u0627\u0642\u0627\u062a","date":"2022-09-13","documentType":"certificate","document":"/documents/courses/work-ethics.png"},{"name":"\u062e\u062f\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621","provider":"\u0645\u0631\u0643\u0632 \u0637\u0627\u0642\u0627\u062a","date":"2022-09-08","documentType":"certificate","document":"/documents/courses/customer-service.png"}]},"skills":{"title":"\u0645\u0647\u0627\u0631\u0627\u062a\u064a","description":"\u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0648\u0627\u0644\u0645\u0643\u062a\u0628\u064a\u0629 \u0648\u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0627\u0644\u062a\u064a \u0627\u0643\u062a\u0633\u0628\u062a\u0647\u0627 \u0645\u0646 \u0627\u0644\u062f\u0631\u0627\u0633\u0629 \u0648\u0627\u0644\u062f\u0648\u0631\u0627\u062a \u0627\u0644\u062a\u062f\u0631\u064a\u0628\u064a\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0627\u0644\u062e\u0628\u0631\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0627\u062a \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u0629.","groups":[{"title":"\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0648\u064a\u0628","items":[{"name":"HTML5","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645"]},{"name":"CSS3","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645"]},{"name":"JavaScript","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645"]},{"name":"React.js","sources":["\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645","\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]},{"name":"Sass","sources":["\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645","\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]},{"name":"Bootstrap","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645"]},{"name":"Tailwind CSS","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644"]}]},{"title":"\u0627\u0644\u062e\u0648\u0627\u062f\u0645 \u0648\u0642\u0648\u0627\u0639\u062f \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a","items":[{"name":"PHP","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644"]},{"name":"MySQL","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644"]},{"name":"XAMPP","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644"]},{"name":"REST API","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644"]}]},{"title":"\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u0644\u0645\u0646\u0635\u0627\u062a","items":[{"name":"Git","sources":["\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645","\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]},{"name":"GitHub","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645","\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]},{"name":"WordPress","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644"]},{"name":"CMS","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644"]}]},{"title":"\u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0648\u0627\u0644\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0631\u0642\u0645\u064a\u0629","items":[{"name":"Figma","sources":["\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]},{"name":"Adobe Photoshop","sources":["\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]},{"name":"Canva","sources":["\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]},{"name":"\u0623\u0646\u0638\u0645\u0629 \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u062d\u062a\u0648\u0649","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644"]},{"name":"\u0627\u0644\u0645\u0646\u0635\u0627\u062a \u0627\u0644\u0631\u0642\u0645\u064a\u0629","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629","\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642","\u0645\u0646\u062f\u0648\u0628 \u0645\u0628\u064a\u0639\u0627\u062a \u0634\u0631\u0627\u0626\u062d \u0627\u062a\u0635\u0627\u0644\u0627\u062a","\u0645\u0635\u0646\u0641 \u0623\u0637\u0639\u0645\u0629 \u0648\u0645\u0634\u0631\u0648\u0628\u0627\u062a (\u0643\u0627\u0634\u064a\u0631)","\u0645\u0648\u0638\u0641 \u0635\u0646\u062f\u0648\u0642 \u0645\u062d\u0627\u0633\u0628\u0629 (\u0643\u0627\u0634\u064a\u0631)"]}]},{"title":"\u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u0643\u062a\u0628\u064a\u0629 \u0648\u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629","items":[{"name":"Microsoft Word","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629","\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642"]},{"name":"Microsoft Excel","sources":["\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642"]},{"name":"Microsoft PowerPoint","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]},{"name":"\u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a","sources":["\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642","\u0645\u0646\u062f\u0648\u0628 \u0645\u0628\u064a\u0639\u0627\u062a \u0634\u0631\u0627\u0626\u062d \u0627\u062a\u0635\u0627\u0644\u0627\u062a"]},{"name":"\u0625\u0639\u062f\u0627\u062f \u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629","\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642"]},{"name":"\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0648\u062b\u0627\u0626\u0642 \u0648\u0627\u0644\u0623\u0631\u0634\u0641\u0629","sources":["\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642"]},{"name":"\u0623\u0646\u0638\u0645\u0629 \u0646\u0642\u0627\u0637 \u0627\u0644\u0628\u064a\u0639","sources":["\u0645\u0635\u0646\u0641 \u0623\u0637\u0639\u0645\u0629 \u0648\u0645\u0634\u0631\u0648\u0628\u0627\u062a (\u0643\u0627\u0634\u064a\u0631)","\u0645\u0648\u0638\u0641 \u0635\u0646\u062f\u0648\u0642 \u0645\u062d\u0627\u0633\u0628\u0629 (\u0643\u0627\u0634\u064a\u0631)"]}]},{"title":"\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a","items":[{"name":"ChatGPT","sources":["\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]},{"name":"Google Gemini","sources":["\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]},{"name":"Claude","sources":["\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]},{"name":"DeepSeek","sources":["\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]}]},{"title":"\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0627\u0644\u0634\u062e\u0635\u064a\u0629","items":[{"name":"\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0648\u0642\u062a","sources":["\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642","\u0645\u0646\u062f\u0648\u0628 \u0645\u0628\u064a\u0639\u0627\u062a \u0634\u0631\u0627\u0626\u062d \u0627\u062a\u0635\u0627\u0644\u0627\u062a","\u0645\u0635\u0646\u0641 \u0623\u0637\u0639\u0645\u0629 \u0648\u0645\u0634\u0631\u0648\u0628\u0627\u062a (\u0643\u0627\u0634\u064a\u0631)","\u0645\u0648\u0638\u0641 \u0635\u0646\u062f\u0648\u0642 \u0645\u062d\u0627\u0633\u0628\u0629 (\u0643\u0627\u0634\u064a\u0631)"]},{"name":"\u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0641\u0639\u0627\u0644","sources":["\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0646\u0627\u0639\u0645\u0629 \u0648\u0641\u0646 \u0627\u0644\u0627\u062a\u0635\u0627\u0644","\u0627\u0644\u0645\u0628\u0627\u0631\u064a\u0627\u062a \u0627\u0644\u062d\u0648\u0627\u0631\u064a\u0629 \u0639\u0644\u0649 \u0645\u0633\u062a\u0648\u0649 \u062a\u0639\u0644\u064a\u0645 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629","\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642","\u0645\u0646\u062f\u0648\u0628 \u0645\u0628\u064a\u0639\u0627\u062a \u0634\u0631\u0627\u0626\u062d \u0627\u062a\u0635\u0627\u0644\u0627\u062a","\u0645\u0635\u0646\u0641 \u0623\u0637\u0639\u0645\u0629 \u0648\u0645\u0634\u0631\u0648\u0628\u0627\u062a (\u0643\u0627\u0634\u064a\u0631)","\u0645\u0648\u0638\u0641 \u0635\u0646\u062f\u0648\u0642 \u0645\u062d\u0627\u0633\u0628\u0629 (\u0643\u0627\u0634\u064a\u0631)"]},{"name":"\u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u062c\u0645\u0627\u0639\u064a","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642","\u0645\u0646\u062f\u0648\u0628 \u0645\u0628\u064a\u0639\u0627\u062a \u0634\u0631\u0627\u0626\u062d \u0627\u062a\u0635\u0627\u0644\u0627\u062a","\u0645\u0635\u0646\u0641 \u0623\u0637\u0639\u0645\u0629 \u0648\u0645\u0634\u0631\u0648\u0628\u0627\u062a (\u0643\u0627\u0634\u064a\u0631)","\u0645\u0648\u0638\u0641 \u0635\u0646\u062f\u0648\u0642 \u0645\u062d\u0627\u0633\u0628\u0629 (\u0643\u0627\u0634\u064a\u0631)","\u0645\u0628\u0627\u062f\u0631\u0629 \u0639\u0648\u0646 \u0627\u0644\u062a\u0642\u0646\u064a \u0628\u0627\u0644\u0645\u0633\u062c\u062f \u0627\u0644\u0646\u0628\u0648\u064a \u0627\u0644\u0634\u0631\u064a\u0641","\u0645\u0639\u0633\u0643\u0631 \u0631\u0633\u0644 \u0627\u0644\u0633\u0644\u0627\u0645 \u0644\u0644\u062a\u0645\u064a\u0632 \u0627\u0644\u0643\u0634\u0641\u064a \u0648\u0627\u0644\u062a\u0642\u0646\u064a 2023"]},{"name":"\u062d\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062a","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642","\u0645\u0639\u0633\u0643\u0631 \u0631\u0633\u0644 \u0627\u0644\u0633\u0644\u0627\u0645 \u0644\u0644\u062a\u0645\u064a\u0632 \u0627\u0644\u0643\u0634\u0641\u064a \u0648\u0627\u0644\u062a\u0642\u0646\u064a 2023"]},{"name":"\u0627\u0644\u062f\u0642\u0629 \u0648\u0627\u0644\u0627\u0646\u062a\u0628\u0627\u0647 \u0644\u0644\u062a\u0641\u0627\u0635\u064a\u0644","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642","\u0645\u0646\u062f\u0648\u0628 \u0645\u0628\u064a\u0639\u0627\u062a \u0634\u0631\u0627\u0626\u062d \u0627\u062a\u0635\u0627\u0644\u0627\u062a","\u0645\u0635\u0646\u0641 \u0623\u0637\u0639\u0645\u0629 \u0648\u0645\u0634\u0631\u0648\u0628\u0627\u062a (\u0643\u0627\u0634\u064a\u0631)","\u0645\u0648\u0638\u0641 \u0635\u0646\u062f\u0648\u0642 \u0645\u062d\u0627\u0633\u0628\u0629 (\u0643\u0627\u0634\u064a\u0631)"]},{"name":"\u0627\u0644\u062a\u0643\u064a\u0641 \u0645\u0639 \u0636\u063a\u0648\u0637 \u0627\u0644\u0639\u0645\u0644","sources":["\u0627\u0644\u0645\u0631\u0648\u0646\u0629 \u0627\u0644\u0646\u0641\u0633\u064a\u0629","\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642","\u0645\u0646\u062f\u0648\u0628 \u0645\u0628\u064a\u0639\u0627\u062a \u0634\u0631\u0627\u0626\u062d \u0627\u062a\u0635\u0627\u0644\u0627\u062a","\u0645\u0635\u0646\u0641 \u0623\u0637\u0639\u0645\u0629 \u0648\u0645\u0634\u0631\u0648\u0628\u0627\u062a (\u0643\u0627\u0634\u064a\u0631)","\u0645\u0648\u0638\u0641 \u0635\u0646\u062f\u0648\u0642 \u0645\u062d\u0627\u0633\u0628\u0629 (\u0643\u0627\u0634\u064a\u0631)"]},{"name":"\u062a\u062d\u0645\u0644 \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064a\u0629","sources":["\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642","\u0645\u0639\u0633\u0643\u0631 \u0631\u0633\u0644 \u0627\u0644\u0633\u0644\u0627\u0645 \u0644\u0644\u062a\u0645\u064a\u0632 \u0627\u0644\u0643\u0634\u0641\u064a \u0648\u0627\u0644\u062a\u0642\u0646\u064a 2023"]}]}]},"volunteering":{"title":"\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0627\u062a \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u0629","description":"\u0645\u0634\u0627\u0631\u0643\u0627\u062a \u0645\u062c\u062a\u0645\u0639\u064a\u0629 \u0648\u062a\u0642\u0646\u064a\u0629 \u0648\u0643\u0634\u0641\u064a\u0629\u060c \u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0633\u062c\u0644 \u0645\u0648\u062b\u0642 \u0628\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u0629.","summary":{"label":"\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u0629 \u0627\u0644\u0645\u0648\u062b\u0642\u0629","value":"189 \u0633\u0627\u0639\u0629","hours":189,"opportunities":14,"startDate":"2022-12-17","endDate":"2023-06-05","description":"\u0625\u062c\u0645\u0627\u0644\u064a 189 \u0633\u0627\u0639\u0629 \u062a\u0637\u0648\u0639\u064a\u0629 \u0645\u0648\u062b\u0642\u0629 \u0639\u0628\u0631 14 \u0641\u0631\u0635\u0629 \u062a\u0637\u0648\u0639\u064a\u0629 \u0645\u0643\u062a\u0645\u0644\u0629 \u0641\u064a \u0627\u0644\u0645\u0646\u0635\u0629 \u0627\u0644\u0648\u0637\u0646\u064a\u0629 \u0644\u0644\u0639\u0645\u0644 \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u060c \u062e\u0644\u0627\u0644 \u0627\u0644\u0641\u062a\u0631\u0629 \u0645\u0646 17/12/2022 \u0625\u0644\u0649 05/06/2023.","documentType":"volunteering","document":"/documents/volunteering/volunteering-189-hours.png"},"items":[{"name":"\u0645\u0639\u0633\u0643\u0631 \u0631\u0633\u0644 \u0627\u0644\u0633\u0644\u0627\u0645 \u0644\u0644\u062a\u0645\u064a\u0632 \u0627\u0644\u0643\u0634\u0641\u064a \u0648\u0627\u0644\u062a\u0642\u0646\u064a 2023","provider":"\u0627\u0644\u0643\u0644\u064a\u0629 \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0628\u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629 \u2014 \u0646\u062c\u0631\u0627\u0646","startDate":"2023-05-14","endDate":"2023-05-18","description":"\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0641\u064a \u0627\u0644\u0645\u0639\u0633\u0643\u0631 \u0627\u0644\u0643\u0634\u0641\u064a \u0648\u0627\u0644\u062a\u0642\u0646\u064a \u0648\u0623\u0646\u0634\u0637\u062a\u0647 \u0648\u0628\u0631\u0627\u0645\u062c\u0647.","documentType":"participation","document":"/documents/volunteering/rusul-alsalam-camp.png"},{"name":"\u0645\u0628\u0627\u062f\u0631\u0629 \u0639\u0648\u0646 \u0627\u0644\u062a\u0642\u0646\u064a \u0628\u0627\u0644\u0645\u0633\u062c\u062f \u0627\u0644\u0646\u0628\u0648\u064a \u0627\u0644\u0634\u0631\u064a\u0641","provider":"\u0627\u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u0644\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u062a\u0642\u0646\u064a \u0648\u0627\u0644\u0645\u0647\u0646\u064a \u0628\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629","startDate":"2023-03-26","endDate":"2023-04-06","description":"\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0641\u064a \u0627\u0644\u0645\u0628\u0627\u062f\u0631\u0629 \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0648\u062e\u062f\u0645\u0629 \u0632\u0648\u0627\u0631 \u0627\u0644\u0645\u0633\u062c\u062f \u0627\u0644\u0646\u0628\u0648\u064a \u0627\u0644\u0634\u0631\u064a\u0641.","documentType":"appreciation","document":"/documents/volunteering/technical-aoun.png"},{"name":"\u0627\u0644\u0645\u0628\u0627\u0631\u064a\u0627\u062a \u0627\u0644\u062d\u0648\u0627\u0631\u064a\u0629 \u0639\u0644\u0649 \u0645\u0633\u062a\u0648\u0649 \u062a\u0639\u0644\u064a\u0645 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629","provider":"\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0644\u0643 \u0639\u0628\u062f\u0627\u0644\u0639\u0632\u064a\u0632 \u0644\u0644\u062d\u0648\u0627\u0631 \u0627\u0644\u0648\u0637\u0646\u064a \u2014 \u0625\u062f\u0627\u0631\u0629 \u062a\u0639\u0644\u064a\u0645 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629","startDate":"2021-10-24","endDate":"2021-11-04","description":"\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0641\u064a \u0627\u0644\u0623\u0646\u0634\u0637\u0629 \u0648\u0627\u0644\u0645\u0633\u0627\u0628\u0642\u0627\u062a \u0627\u0644\u062d\u0648\u0627\u0631\u064a\u0629 \u0648\u062a\u0646\u0645\u064a\u0629 \u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0648\u0627\u0644\u062d\u0648\u0627\u0631.","documentType":"appreciation","document":"/documents/volunteering/dialogue-competition.png"}]},"goal":{"title":"\u062a\u0637\u0644\u0639\u0627\u062a\u064a \u0627\u0644\u0645\u0647\u0646\u064a\u0629","description":"\u0623\u0633\u0639\u0649 \u0625\u0644\u0649 \u0641\u0631\u0635\u0629 \u0645\u0647\u0646\u064a\u0629 \u0645\u0633\u062a\u0642\u0631\u0629 \u0648\u0645\u0633\u062a\u062f\u0627\u0645\u0629 \u0641\u064a \u0645\u062c\u0627\u0644 \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0623\u0648 \u0627\u0644\u062f\u0639\u0645 \u0627\u0644\u062a\u0642\u0646\u064a \u0623\u0648 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0631\u0642\u0645\u064a\u0629 \u0648\u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629\u060c \u0623\u0633\u062a\u062b\u0645\u0631 \u0641\u064a\u0647\u0627 \u0645\u0639\u0631\u0641\u062a\u064a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0648\u062e\u0628\u0631\u0627\u062a\u064a \u0627\u0644\u0639\u0645\u0644\u064a\u0629\u060c \u0648\u0623\u0633\u0627\u0647\u0645 \u0641\u064a \u062a\u062d\u0633\u064a\u0646 \u0643\u0641\u0627\u0621\u0629 \u0627\u0644\u0639\u0645\u0644 \u0648\u0627\u0644\u0625\u0646\u062a\u0627\u062c\u064a\u0629 \u0645\u0639 \u0645\u0648\u0627\u0635\u0644\u0629 \u0627\u0644\u062a\u0639\u0644\u0645 \u0648\u0627\u0644\u062a\u0637\u0648\u0631 \u0627\u0644\u0645\u0647\u0646\u064a."}},"title":"\u0639\u0646\u064a","description":"\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0645\u0624\u0647\u0644\u0627\u062a\u064a \u0627\u0644\u0639\u0644\u0645\u064a\u0629 \u0648\u062e\u0628\u0631\u0627\u062a\u064a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0634\u0647\u0627\u062f\u0627\u062a\u064a \u0648\u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0648\u0645\u0634\u0627\u0631\u0643\u0627\u062a\u064a \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u0629.","breadcrumb":{"title":"\u0639\u0646\u064a","description":"\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0645\u0624\u0647\u0644\u0627\u062a\u064a \u0627\u0644\u0639\u0644\u0645\u064a\u0629 \u0648\u062e\u0628\u0631\u0627\u062a\u064a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0634\u0647\u0627\u062f\u0627\u062a\u064a \u0648\u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0648\u0645\u0634\u0627\u0631\u0643\u0627\u062a\u064a \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u0629."},"documentPreview":{"loading":"\u064a\u0631\u062c\u0649 \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631 \u0642\u0644\u064a\u0644\u064b\u0627\u060c \u062c\u0627\u0631\u064d \u062a\u062c\u0647\u064a\u0632 \u0627\u0644\u0634\u0647\u0627\u062f\u0629 \u0644\u0644\u0639\u0631\u0636...","error":"\u062a\u0639\u0630\u0631 \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0634\u0647\u0627\u062f\u0629. \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649.","unavailable":"\u0631\u0627\u0628\u0637 \u0627\u0644\u0648\u062b\u064a\u0642\u0629 \u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631.","unsupported":"\u0644\u0627 \u064a\u0645\u0643\u0646 \u0645\u0639\u0627\u064a\u0646\u0629 \u0647\u0630\u0647 \u0627\u0644\u0635\u064a\u063a\u0629 \u062f\u0627\u062e\u0644 \u0627\u0644\u0635\u0641\u062d\u0629."},"aiSkills":{"title":"\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a","tools":{"chatgpt":{"name":"ChatGPT","usage":"\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0641\u064a \u0627\u0644\u0628\u0631\u0645\u062c\u0629\u060c \u0648\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062a\u060c \u0648\u0627\u0644\u0628\u062d\u062b\u060c \u0648\u0635\u064a\u0627\u063a\u0629 \u0627\u0644\u0645\u062d\u062a\u0648\u0649."},"gemini":{"name":"Google Gemini","usage":"\u0627\u0644\u0628\u062d\u062b \u0648\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a\u060c \u0648\u062a\u0648\u0644\u064a\u062f \u0627\u0644\u0623\u0641\u0643\u0627\u0631\u060c \u0648\u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629 \u0641\u064a \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u062a\u0642\u0646\u064a\u0629."},"claude":{"name":"Claude","usage":"\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0646\u0635\u0648\u0635 \u0648\u0627\u0644\u0645\u0633\u062a\u0646\u062f\u0627\u062a\u060c \u0648\u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629 \u0641\u064a \u0627\u0644\u0628\u0631\u0645\u062c\u0629 \u0648\u0627\u0644\u0643\u062a\u0627\u0628\u0629."},"deepseek":{"name":"DeepSeek","usage":"\u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629 \u0641\u064a \u0643\u062a\u0627\u0628\u0629 \u0627\u0644\u0623\u0643\u0648\u0627\u062f\u060c \u0648\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0623\u062e\u0637\u0627\u0621\u060c \u0648\u062d\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062a \u0627\u0644\u0628\u0631\u0645\u062c\u064a\u0629."}}}}'),lh=JSON.parse('{"pageTitle":"\u0645\u0634\u0627\u0631\u064a\u0639\u064a","pageDesc":"\u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u062a\u064a \u0639\u0645\u0644\u062a \u0639\u0644\u0649 \u062a\u0637\u0648\u064a\u0631\u0647\u0627\u060c \u0648\u062a\u0648\u0636\u062d \u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0648\u062e\u0628\u0631\u062a\u064a \u0641\u064a \u062a\u0635\u0645\u064a\u0645 \u0648\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0648\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0648\u064a\u0628.","details":{"overview":"\u0646\u0628\u0630\u0629 \u0639\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0639","features":"\u0645\u0645\u064a\u0632\u0627\u062a \u0627\u0644\u0645\u0634\u0631\u0648\u0639","technologies":"\u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0629","gallery":"\u0635\u0648\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639","date":"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0625\u0646\u062c\u0627\u0632","liveDemo":"\u0645\u0639\u0627\u064a\u0646\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639","sourceCode":"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u0645\u0635\u062f\u0631\u064a","backToProjects":"\u0627\u0644\u0639\u0648\u062f\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639","notFound":"\u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u063a\u064a\u0631 \u0645\u0648\u062c\u0648\u062f","notFoundDescription":"\u0644\u0645 \u0646\u062a\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0627\u0644\u0645\u0637\u0644\u0648\u0628."},"items":[{"id":"React-To-Do-List","title":"\u062a\u0637\u0628\u064a\u0642 \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React","date":"2026/08/30","shortDescription":"\u062a\u0637\u0628\u064a\u0642 \u062a\u0641\u0627\u0639\u0644\u064a \u0644\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0648\u062a\u0639\u062f\u064a\u0644\u0647\u0627 \u0648\u062d\u0630\u0641\u0647\u0627 \u0648\u062d\u0641\u0638\u0647\u0627 \u0645\u062d\u0644\u064a\u064b\u0627.","overview":"\u062a\u0637\u0628\u064a\u0642 \u0648\u064a\u0628 \u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React \u0648LocalStorage. \u064a\u062a\u064a\u062d \u0644\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0648\u0639\u0631\u0636\u0647\u0627 \u0648\u062a\u0639\u062f\u064a\u0644\u0647\u0627 \u0648\u062d\u0630\u0641\u0647\u0627 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0648\u0627\u062c\u0647\u0629 \u062a\u0641\u0627\u0639\u0644\u064a\u0629\u060c \u0645\u0639 \u062d\u0641\u0638 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u062f\u0627\u062e\u0644 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0648\u0646 \u0627\u0644\u062d\u0627\u062c\u0629 \u0625\u0644\u0649 \u062e\u0627\u062f\u0645 \u062e\u0627\u0631\u062c\u064a. \u0637\u064f\u0648\u0651\u0631 \u0636\u0645\u0646 \u062f\u0648\u0631\u0629 \u062a\u0637\u0648\u064a\u0631 \u062a\u0637\u0628\u064a\u0642\u0627\u062a JavaScript \u0641\u064a \u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u062d\u0633\u0648\u0628.","features":["\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u062c\u062f\u064a\u062f\u0629","\u0639\u0631\u0636 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0648\u0638\u0629","\u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u0645\u0648\u062c\u0648\u062f\u0629","\u062d\u0630\u0641 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a","\u062d\u0641\u0638 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0645\u062d\u0644\u064a\u064b\u0627 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 LocalStorage","\u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0648\u0627\u062c\u0647\u0629 \u062a\u0641\u0627\u0639\u0644\u064a\u064b\u0627 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React"],"tech_stack":["React","React Hooks","JavaScript","CRUD","LocalStorage"],"project_img":["react1"],"demo":"https://dhomlmgyr188.github.io/React-To-Do-List/","github":"https://github.com/dhomlmgyr188/React-To-Do-List"},{"id":"Portfolio_v1","title":"\u0645\u0648\u0642\u0639 \u0634\u062e\u0635\u064a - \u0627\u0644\u0625\u0635\u062f\u0627\u0631 \u0627\u0644\u0633\u0627\u0628\u0642","date":"2026/05/24","shortDescription":"\u0645\u0648\u0642\u0639 \u0634\u062e\u0635\u064a \u0645\u062a\u062c\u0627\u0648\u0628 \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a.","overview":"\u0645\u0648\u0642\u0639 \u0634\u062e\u0635\u064a \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0635\u064f\u0645\u0645 \u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a\u060c \u0645\u0639 \u0627\u0644\u062a\u0631\u0643\u064a\u0632 \u0639\u0644\u0649 \u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u062a\u0646\u0642\u0644 \u0648\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0648\u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0639\u0628\u0631 \u0627\u0644\u0623\u062c\u0647\u0632\u0629 \u0627\u0644\u0645\u062e\u062a\u0644\u0641\u0629.","features":["\u062a\u0635\u0645\u064a\u0645 \u0645\u062a\u062c\u0627\u0648\u0628 \u0645\u0639 \u0645\u062e\u062a\u0644\u0641 \u0623\u062d\u062c\u0627\u0645 \u0627\u0644\u0634\u0627\u0634\u0627\u062a","\u0635\u0641\u062d\u0627\u062a \u0645\u062a\u0639\u062f\u062f\u0629 \u0644\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0645\u062d\u062a\u0648\u0649","\u0639\u0631\u0636 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639","\u062a\u0646\u0642\u0644 \u0648\u0627\u0636\u062d \u0628\u064a\u0646 \u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u0645\u0648\u0642\u0639","\u0627\u0633\u062a\u062e\u062f\u0627\u0645 JavaScript \u0644\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062a\u0641\u0627\u0639\u0644\u0627\u062a"],"tech_stack":["HTML","CSS","Vanilla JavaScript"],"project_img":["anaalmughyir1"],"demo":"https://dhomlmgyr188.github.io/abdulrahman-portfolio-static/frontend/","github":""}]}'),sh=JSON.parse('{"page":{"title":"\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a","description":"\u064a\u0633\u0639\u062f\u0646\u064a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0648\u0627\u0644\u0627\u0633\u062a\u0645\u0627\u0639 \u0625\u0644\u0649 \u0627\u0633\u062a\u0641\u0633\u0627\u0631\u0627\u062a\u0643 \u0648\u0623\u0641\u0643\u0627\u0631\u0643 \u0648\u0627\u0642\u062a\u0631\u0627\u062d\u0627\u062a\u0643. \u064a\u0645\u0643\u0646\u0643 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u062a\u0643 \u0639\u0628\u0631 \u0627\u0644\u0646\u0645\u0648\u0630\u062c \u0623\u0648 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a \u0645\u0628\u0627\u0634\u0631\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0625\u062d\u062f\u0649 \u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0645\u062a\u0627\u062d\u0629."},"form":{"title":"\u0623\u0631\u0633\u0644 \u0631\u0633\u0627\u0644\u0629","description":"\u064a\u0645\u0643\u0646\u0643 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a \u0644\u0623\u064a \u063a\u0631\u0636\u060c \u0633\u0648\u0627\u0621 \u0643\u0627\u0646 \u0627\u0633\u062a\u0641\u0633\u0627\u0631\u064b\u0627 \u0639\u0627\u0645\u064b\u0627 \u0623\u0648 \u0627\u0642\u062a\u0631\u0627\u062d\u064b\u0627 \u0623\u0648 \u0641\u0631\u0635\u0629 \u0644\u0644\u062a\u0639\u0627\u0648\u0646 \u0623\u0648 \u0623\u064a \u0645\u0648\u0636\u0648\u0639 \u0622\u062e\u0631. \u0627\u0645\u0644\u0623 \u0627\u0644\u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0627\u0644\u064a\u060c \u0648\u0633\u062a\u064f\u0631\u0633\u0644 \u0631\u0633\u0627\u0644\u062a\u0643 \u0645\u0628\u0627\u0634\u0631\u0629 \u0625\u0644\u0649 \u0628\u0631\u064a\u062f\u064a \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a.","firstName":"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0644","lastName":"\u0627\u0633\u0645 \u0627\u0644\u0639\u0627\u0626\u0644\u0629","firstNamePlaceholder":"\u0623\u062f\u062e\u0644 \u0627\u0633\u0645\u0643 \u0627\u0644\u0623\u0648\u0644","lastNamePlaceholder":"\u0623\u062f\u062e\u0644 \u0627\u0633\u0645 \u0627\u0644\u0639\u0627\u0626\u0644\u0629","email":"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a","emailNote":"\u064a\u0631\u062c\u0649 \u0625\u062f\u062e\u0627\u0644 \u0628\u0631\u064a\u062f \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0635\u062d\u064a\u062d \u062d\u062a\u0649 \u0623\u062a\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u0631\u062f \u0639\u0644\u064a\u0643.","topic":"\u0645\u0648\u0636\u0648\u0639 \u0627\u0644\u062a\u0648\u0627\u0635\u0644","selectTopic":"\u0627\u062e\u062a\u0631 \u0645\u0648\u0636\u0648\u0639 \u0627\u0644\u0631\u0633\u0627\u0644\u0629","customTopic":"\u0627\u0643\u062a\u0628 \u0645\u0648\u0636\u0648\u0639 \u0627\u0644\u0631\u0633\u0627\u0644\u0629","customTopicPlaceholder":"\u0623\u062f\u062e\u0644 \u0645\u0648\u0636\u0648\u0639\u0643 \u0627\u0644\u062e\u0627\u0635","message":"\u0646\u0635 \u0627\u0644\u0631\u0633\u0627\u0644\u0629","messagePlaceholder":"\u0627\u0643\u062a\u0628 \u0631\u0633\u0627\u0644\u062a\u0643 \u0647\u0646\u0627\u060c \u0648\u064a\u0633\u0639\u062f\u0646\u064a \u0627\u0644\u0627\u0637\u0644\u0627\u0639 \u0639\u0644\u064a\u0647\u0627 \u0648\u0627\u0644\u0631\u062f \u0639\u0644\u064a\u0643...","messageNote":"\u064a\u0631\u062c\u0649 \u0643\u062a\u0627\u0628\u0629 \u0631\u0633\u0627\u0644\u0629 \u0648\u0627\u0636\u062d\u0629 \u0644\u0627 \u062a\u0642\u0644 \u0639\u0646 10 \u0623\u062d\u0631\u0641.","submit":"\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629","sending":"\u062c\u0627\u0631\u064d \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629...","privacyNote":"\u0633\u062a\u064f\u0631\u0633\u0644 \u0631\u0633\u0627\u0644\u062a\u0643 \u0639\u0628\u0631 \u062e\u062f\u0645\u0629 Web3Forms \u0625\u0644\u0649 \u0628\u0631\u064a\u062f\u064a \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a. \u064a\u0631\u062c\u0649 \u0639\u062f\u0645 \u062a\u0636\u0645\u064a\u0646 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u062d\u0633\u0627\u0633\u0629 \u0623\u0648 \u0633\u0631\u064a\u0629."},"topics":{"general":"\u062a\u0648\u0627\u0635\u0644 \u0639\u0627\u0645","question":"\u0633\u0624\u0627\u0644 \u0623\u0648 \u0627\u0633\u062a\u0641\u0633\u0627\u0631","suggestion":"\u0627\u0642\u062a\u0631\u0627\u062d \u0623\u0648 \u0641\u0643\u0631\u0629","feedback":"\u0645\u0644\u0627\u062d\u0638\u0629 \u0623\u0648 \u062a\u0639\u0644\u064a\u0642","collaboration":"\u062a\u0639\u0627\u0648\u0646 \u0623\u0648 \u0634\u0631\u0627\u0643\u0629","employment":"\u0641\u0631\u0635\u0629 \u0648\u0638\u064a\u0641\u064a\u0629","project":"\u0645\u0634\u0631\u0648\u0639 \u0623\u0648 \u062e\u062f\u0645\u0629","other":"\u0623\u062e\u0631\u0649 - \u062a\u062d\u062f\u064a\u062f \u0645\u0648\u0636\u0648\u0639 \u0645\u062e\u0635\u0635"},"status":{"success":"\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u062a\u0643 \u0628\u0646\u062c\u0627\u062d! \u0634\u0643\u0631\u064b\u0627 \u0644\u062a\u0648\u0627\u0635\u0644\u0643\u060c \u0633\u0623\u062d\u0631\u0635 \u0639\u0644\u0649 \u0645\u0631\u0627\u062c\u0639\u062a\u0647\u0627 \u0648\u0627\u0644\u0631\u062f \u0639\u0644\u064a\u0643 \u0641\u064a \u0623\u0642\u0631\u0628 \u0648\u0642\u062a \u0645\u0645\u0643\u0646.","error":"\u062a\u0639\u0630\u0631 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u062d\u0627\u0644\u064a\u064b\u0627. \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649 \u0623\u0648 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a \u0645\u0628\u0627\u0634\u0631\u0629 \u0639\u0628\u0631 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a.","invalid":"\u064a\u0631\u062c\u0649 \u0627\u0644\u062a\u0623\u0643\u062f \u0645\u0646 \u062a\u0639\u0628\u0626\u0629 \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d.","configError":"\u062e\u062f\u0645\u0629 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u063a\u064a\u0631 \u0645\u0647\u064a\u0623\u0629 \u062d\u0627\u0644\u064a\u064b\u0627. \u064a\u0631\u062c\u0649 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0628\u0627\u0634\u0631\u0629 \u0639\u0628\u0631 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a."},"info":{"title":"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644","description":"\u064a\u0645\u0643\u0646\u0643 \u0623\u064a\u0636\u064b\u0627 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a \u0645\u0628\u0627\u0634\u0631\u0629 \u0639\u0628\u0631 \u0627\u0644\u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u0627\u0644\u064a\u0629\u060c \u0648\u0633\u064a\u0633\u0639\u062f\u0646\u064a \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0631\u0633\u0627\u0644\u062a\u0643."},"methods":{"email":"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a","whatsapp":"\u0648\u0627\u062a\u0633\u0627\u0628","whatsappValue":"\u0645\u062d\u0627\u062f\u062b\u0629 \u0645\u0628\u0627\u0634\u0631\u0629 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628","phone":"\u0627\u062a\u0635\u0627\u0644 \u0647\u0627\u062a\u0641\u064a"},"availability":{"title":"\u0627\u0644\u062a\u0648\u0641\u0631 \u0648\u0633\u0631\u0639\u0629 \u0627\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629","heading":"\u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0639\u0644\u0649 \u0645\u062f\u0627\u0631 \u0627\u0644\u0633\u0627\u0639\u0629","description":"\u064a\u0645\u0643\u0646\u0643 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u062a\u0643 \u0641\u064a \u0623\u064a \u0648\u0642\u062a\u060c \u0639\u0644\u0649 \u0645\u062f\u0627\u0631 24 \u0633\u0627\u0639\u0629 \u0637\u0648\u0627\u0644 \u0623\u064a\u0627\u0645 \u0627\u0644\u0623\u0633\u0628\u0648\u0639. \u0623\u062d\u0631\u0635 \u0639\u0644\u0649 \u0645\u062a\u0627\u0628\u0639\u0629 \u0628\u0631\u064a\u062f\u064a \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0628\u0627\u0633\u062a\u0645\u0631\u0627\u0631\u060c \u0648\u0639\u0627\u062f\u0629\u064b \u0645\u0627 \u064a\u0633\u062a\u063a\u0631\u0642 \u0627\u0644\u0631\u062f \u062e\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629\u060c \u0648\u0642\u062f \u062a\u062e\u062a\u0644\u0641 \u0627\u0644\u0645\u062f\u0629 \u0628\u062d\u0633\u0628 \u0627\u0644\u0638\u0631\u0648\u0641."},"social":{"title":"\u062d\u0633\u0627\u0628\u0627\u062a\u064a \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a\u0629","description":"\u064a\u0645\u0643\u0646\u0643 \u0632\u064a\u0627\u0631\u0629 \u062d\u0633\u0627\u0628\u0627\u062a\u064a \u0639\u0644\u0649 \u0645\u0646\u0635\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a \u0648\u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a \u0645\u0646 \u062e\u0644\u0627\u0644\u0647\u0627."}}'),ch=JSON.parse('{"logo":{"me":"Abdulrahman"},"nav":{"home":"Home","about":"About","projects":"Projects","contact":"Contact"},"buttons":{"contact":"Contact Me","view_project":"Project Details","demo":"Live Preview","cv":"My Resume","projects":"Discover my projects"},"copyright":"All rights reserved"}'),uh=JSON.parse('{"hero":{"availability_status":"Open to Career Moves & Freelance Projects","name":"Abdulrahman Al-Mughyir","job_titles":["Software Support Technician","IT Support Technician","Database Support Technician","Computer Systems Technician","Data Entry Clerk","Full-Stack Web Developer","Website Administrator","Website Developer","Receptionist","Cashier"],"introduction":"A Full-Stack Web Development diploma graduate from Taibah University, with technical and administrative skills in website development, IT support, data management, and digital systems. I aim to apply my skills and experience to career opportunities and projects that improve business operations and efficiency.","tech_stack":[{"text":"React","icon":"React"},{"text":"JavaScript","icon":"JavaScript"},{"text":"HTML5","icon":"HTML"},{"text":"CSS3","icon":"CSS"},{"text":"Git","icon":"Git"},{"text":"SQL","icon":"SQL"},{"text":"Microsoft 365","icon":"Microsoft 365"}],"profileAlt":"Abdulrahman Al-Mughyir - Web Development, IT Support, and Data Management in Madinah","statistic":{"projects":"Completed Projects","technologies":"Technologies and Tools Used","years":"Years in Web Development"}},"services":{"title":"My Skills & Services","description":"Technical and administrative skills and services in website development, IT support, and data management to streamline workflows and improve efficiency.","items":[{"id":"1","icon":"web","title":"Website Development & Management","description":"Designing and developing responsive websites and interfaces using HTML, CSS, JavaScript, and React, with a focus on content organization, user experience, and website updates."},{"id":"2","icon":"technology","title":"IT Support & Systems Assistance","description":"Assisting users with computers, software, and applications, troubleshooting basic technical issues, following up on reported problems, and providing appropriate user guidance."},{"id":"3","icon":"applications","title":"Data Management & Office Administration","description":"Entering and reviewing data, organizing files and records, and using Microsoft 365 applications to prepare documents, spreadsheets, and reports, with attention to accuracy and information confidentiality."}]},"featuredProjects":{"header":{"title":"Featured Projects","desc":"Selected work in website and application development, data organization, and user-friendly digital interfaces.","view_projects":"All Projects"},"items":[{"id":"React-To-Do-List","date":"2026/08/30","project_img":["react1"],"title":"React Notes Management App","desc":[{"type":"text","value":"A notes management application built with React and LocalStorage, allowing users to create, view, update, and delete data (CRUD). The project demonstrates my ability to build interactive interfaces and organize data within applications. Developed as part of the "},{"type":"link","text":"JavaScript Application Development course","href":"https://academy.hsoub.com/learn/javascript-application-development/"},{"type":"text","value":" at Hsoub Academy."}],"tech_stack":["React","React Hooks","JavaScript","CRUD","LocalStorage"],"link":"https://dhomlmgyr188.github.io/React-To-Do-List/"},{"id":"Portfolio_v1","date":"2026/05/24","project_img":["anaalmughyir1"],"title":"Personal Portfolio - Previous Version","desc":[{"type":"text","value":"A responsive, multi-page personal portfolio website designed to present professional information, projects, and services. It features well-organized content and a user-friendly interface, reflecting my skills in website development and digital content management."}],"tech_stack":["HTML","CSS","Vanilla JavaScript"],"link":"https://dhomlmgyr188.github.io/abdulrahman-portfolio-static/frontend/"}]},"footer":{"quickLinks":{"title":"Quick Links"},"socialMedia":{"title":"Social Profiles"},"contactInfo":{"title":"Contact Me","location":{"value":"Madinah, Saudi Arabia"},"email":{"title":"Email","value":"dhomlmgyr@gmail.com"},"tel":{"title":"Phone","value":"+966541590819"}},"copyright":"Abdulrahman Al-Mughyir. All rights reserved."},"callToAction":{"title":"Have a Career Opportunity or Project in Mind?","paragraph":"I welcome discussions about suitable career opportunities and freelance projects in technical and administrative fields."}}'),dh=JSON.parse('{"pageTitle":"About Me","pageDesc":"Explore my education, professional experience, certifications, skills, and volunteer activities.","content":{"intro":{"title":"About Me","paragraph1":"I am Abdulrahman Nasser Al-Mughyir, a graduate with an Intermediate Diploma in Full-Stack Web Development from the Applied College at Taibah University in Medina, Saudi Arabia. I combine knowledge of web development with practical experience in digital systems, data organization, and operational and administrative tasks.","paragraph2":"I have gained practical experience in hotel reception, sales, and point-of-sale operations, alongside developing independent and academic web projects. I am interested in technology, accuracy, information organization, and problem-solving. I aim to continuously develop my skills and contribute to a productive professional environment."},"infoTitle":"Quick Information","profile":[{"label":"Location","value":"Medina, Saudi Arabia"},{"label":"Qualification","value":"Intermediate Diploma"},{"label":"Specialization","value":"Full-Stack Web Development"},{"label":"Languages","value":"Arabic and English"},{"label":"Professional Status","value":"Available for job opportunities and freelance projects"}],"education":{"title":"My Educational Journey","description":"My academic qualifications, educational institutions, specializations, graduation dates, and grades.","gradeLabel":"GPA","items":[{"degree":"Intermediate Diploma in Full-Stack Web Development","school":"Applied College, Taibah University \u2014 Medina","field":"Specialization: Full-Stack Web Development | Grade: Good","date":"2026-01-11","grade":"3.60 / 5","documentType":"diploma","document":"/documents/education/diploma.png"},{"degree":"General Secondary Education Certificate","school":"Abi Sufyan bin Harb Secondary School \u2014 Medina","field":"Track: Natural Sciences | Grade: Very Good","date":"2022-07-30","grade":"85.39 / 100","documentType":"graduation","document":"/documents/education/secondary-school.png"}]},"experience":{"title":"Professional Experience","description":"Four professional roles that helped me develop my skills in operations, administration, sales, and digital systems.","items":[{"role":"Hotel Receptionist","company":"Manazil Al-Rahmah Hotel \u2014 Abraj Al-Saadah Company","employmentType":"full-time","startDate":"2025-07-12","endDate":"Present","description":"Managing daily reservations, check-ins, and check-outs for individual guests and groups at a 160-room hotel. Preparing reservation schedules using Excel, issuing and archiving receipts, preparing Word documents, and monitoring service quality and health compliance requirements."},{"role":"Telecommunications SIM Sales Representative","company":"Sahabat Al-Madinah Telecommunications Establishment \u2014 Zain Project","employmentType":"seasonal","startDate":"2025-04-16","endDate":"2025-05-16","description":"Marketing and activating SIM cards for visitors using digital systems and fingerprint readers, entering customer information, and documenting payments. Achieved the full monthly sales target within 24 days, reaching up to 40 activations per day during peak periods."},{"role":"Food and Beverage Cashier","company":"Al-Tahlia Fast Food Restaurant","employmentType":"full-time","startDate":"2024-01-27","endDate":"2024-04-21","description":"Receiving and processing customer orders through point-of-sale systems and delivery applications, collecting payments, reconciling revenue, coordinating with team members, and monitoring order preparation quality.","documentType":"experience","document":"/documents/experience/altahlia-cashier.png"},{"role":"Cashier","company":"Frawlaty Juices","employmentType":"full-time","startDate":"2022-05-16","endDate":"2022-08-01","description":"Managing customer orders, issuing invoices, collecting cash and electronic payments, handling delivery application orders, coordinating with the team, and reconciling daily revenue.","documentType":"experience","document":"/documents/experience/frawlaty-cashier.png"}]},"certificates":{"title":"Certificates and Training Courses","description":"Certificates and training courses in web development, cybersecurity, human resources, and professional skills, listed from newest to oldest.","items":[{"name":"Fundamentals of Human Resource Management","provider":"Our Future Training Institute","date":"2026-10-05","hours":"40 training hours \u2014 10 days","documentType":"certificate","document":"/documents/courses/hr-management-basics.png"},{"name":"Introduction to Cybersecurity","provider":"Our Future Training Institute","date":"2026-10-03","hours":"50 training hours \u2014 10 days","documentType":"certificate","document":"/documents/courses/cybersecurity-introduction.png"},{"name":"Soft Skills and Effective Communication","provider":"Human Resources Development Fund (HRDF)","date":"2026-05-05","hours":"1 training hour","documentType":"certificate","document":"/documents/courses/soft-skills-communication.png"},{"name":"User Interface Development","provider":"Hsoub Academy","date":"2026-03-27","documentType":"completion","document":"/documents/courses/hsoub-frontend.png"},{"name":"Introduction to Human Resources Development Fund Programs","provider":"Human Resources Development Fund (HRDF)","date":"2023-07-05","documentType":"certificate","document":"/documents/courses/hr-fund-programs.png"},{"name":"Tolerance, Coexistence, and National Unity","provider":"King Abdulaziz Center for National Dialogue \u2014 Najran Branch","date":"2023-05-14","documentType":"certificate","document":"/documents/courses/tolerance-coexistence.png"},{"name":"Psychological Resilience","provider":"Ibn Baz Association for Family Development","date":"2023-03-23","documentType":"certificate","document":"/documents/courses/psychological-resilience.png"},{"name":"Work Ethics","provider":"Taqat Center","date":"2022-09-13","documentType":"certificate","document":"/documents/courses/work-ethics.png"},{"name":"Customer Service","provider":"Taqat Center","date":"2022-09-08","documentType":"certificate","document":"/documents/courses/customer-service.png"}]},"skills":{"title":"My Skills","description":"Technical, office, and professional skills acquired through education, training courses, projects, work experience, and volunteering.","groups":[{"title":"Frontend Web Development","items":[{"name":"HTML5","sources":["Intermediate Diploma in Full-Stack Web Development","User Interface Development"]},{"name":"CSS3","sources":["Intermediate Diploma in Full-Stack Web Development","User Interface Development"]},{"name":"JavaScript","sources":["Intermediate Diploma in Full-Stack Web Development","User Interface Development"]},{"name":"React.js","sources":["User Interface Development","Personal Projects"]},{"name":"Sass","sources":["User Interface Development","Personal Projects"]},{"name":"Bootstrap","sources":["Intermediate Diploma in Full-Stack Web Development","User Interface Development"]},{"name":"Tailwind CSS","sources":["Intermediate Diploma in Full-Stack Web Development"]}]},{"title":"Backend and Databases","items":[{"name":"PHP","sources":["Intermediate Diploma in Full-Stack Web Development"]},{"name":"MySQL","sources":["Intermediate Diploma in Full-Stack Web Development"]},{"name":"XAMPP","sources":["Intermediate Diploma in Full-Stack Web Development"]},{"name":"REST API","sources":["Intermediate Diploma in Full-Stack Web Development"]}]},{"title":"Development Tools and Platforms","items":[{"name":"Git","sources":["User Interface Development","Personal Projects"]},{"name":"GitHub","sources":["Intermediate Diploma in Full-Stack Web Development","User Interface Development","Personal Projects"]},{"name":"WordPress","sources":["Intermediate Diploma in Full-Stack Web Development"]},{"name":"CMS","sources":["Intermediate Diploma in Full-Stack Web Development"]}]},{"title":"Design and Digital Tools","items":[{"name":"Figma","sources":["Personal Projects"]},{"name":"Adobe Photoshop","sources":["Personal Projects"]},{"name":"Canva","sources":["Personal Projects"]},{"name":"Content Management Systems","sources":["Intermediate Diploma in Full-Stack Web Development"]},{"name":"Digital Platforms","sources":["Intermediate Diploma in Full-Stack Web Development","Personal Projects","Hotel Receptionist","Telecommunications SIM Sales Representative","Food and Beverage Cashier","Cashier"]}]},{"title":"Office and Administrative Skills","items":[{"name":"Microsoft Word","sources":["Intermediate Diploma in Full-Stack Web Development","Personal Projects","Hotel Receptionist"]},{"name":"Microsoft Excel","sources":["Hotel Receptionist"]},{"name":"Microsoft PowerPoint","sources":["Intermediate Diploma in Full-Stack Web Development","Personal Projects"]},{"name":"Data Entry","sources":["Hotel Receptionist","Telecommunications SIM Sales Representative"]},{"name":"Report Preparation","sources":["Intermediate Diploma in Full-Stack Web Development","Personal Projects","Hotel Receptionist"]},{"name":"Document Organization and Archiving","sources":["Hotel Receptionist"]},{"name":"Point-of-Sale Systems","sources":["Food and Beverage Cashier","Cashier"]}]},{"title":"Artificial Intelligence Tools","items":[{"name":"ChatGPT","sources":["Personal Projects"]},{"name":"Google Gemini","sources":["Personal Projects"]},{"name":"Claude","sources":["Personal Projects"]},{"name":"DeepSeek","sources":["Personal Projects"]}]},{"title":"Professional and Personal Skills","items":[{"name":"Time Management","sources":["Hotel Receptionist","Telecommunications SIM Sales Representative","Food and Beverage Cashier","Cashier"]},{"name":"Effective Communication","sources":["Soft Skills and Effective Communication","Dialogue Competitions at Medina Education Department","Hotel Receptionist","Telecommunications SIM Sales Representative","Food and Beverage Cashier","Cashier"]},{"name":"Teamwork","sources":["Intermediate Diploma in Full-Stack Web Development","Hotel Receptionist","Telecommunications SIM Sales Representative","Food and Beverage Cashier","Cashier","Technical Aoun Initiative at the Prophet\'s Mosque","Peace Messengers Scouting and Technology Excellence Camp 2023"]},{"name":"Problem-Solving","sources":["Intermediate Diploma in Full-Stack Web Development","Hotel Receptionist","Peace Messengers Scouting and Technology Excellence Camp 2023"]},{"name":"Accuracy and Attention to Detail","sources":["Intermediate Diploma in Full-Stack Web Development","Hotel Receptionist","Telecommunications SIM Sales Representative","Food and Beverage Cashier","Cashier"]},{"name":"Adaptability Under Work Pressure","sources":["Psychological Resilience","Hotel Receptionist","Telecommunications SIM Sales Representative","Food and Beverage Cashier","Cashier"]},{"name":"Responsibility","sources":["Hotel Receptionist","Peace Messengers Scouting and Technology Excellence Camp 2023"]}]}]},"volunteering":{"title":"Volunteer Activities","description":"Community, technical, and scouting activities, along with an officially documented record of volunteer hours.","summary":{"label":"Total Documented Volunteer Hours","value":"189 hours","hours":189,"opportunities":14,"startDate":"2022-12-17","endDate":"2023-06-05","description":"A total of 189 documented volunteer hours across 14 completed volunteer opportunities on the National Volunteer Work Platform, from December 17, 2022, to June 5, 2023.","documentType":"volunteering","document":"/documents/volunteering/volunteering-189-hours.png"},"items":[{"name":"Peace Messengers Scouting and Technology Excellence Camp 2023","provider":"Technical College in Medina \u2014 Najran","startDate":"2023-05-14","endDate":"2023-05-18","description":"Participated in the scouting and technology camp, including its activities and programs.","documentType":"participation","document":"/documents/volunteering/rusul-alsalam-camp.png"},{"name":"Technical Aoun Initiative at the Prophet\'s Mosque","provider":"General Directorate of Technical and Vocational Training \u2014 Medina Region","startDate":"2023-03-26","endDate":"2023-04-06","description":"Participated in a technical volunteer initiative serving visitors to the Prophet\'s Mosque.","documentType":"appreciation","document":"/documents/volunteering/technical-aoun.png"},{"name":"Dialogue Competitions at Medina Education Department","provider":"King Abdulaziz Center for National Dialogue \u2014 Medina Education Department","startDate":"2021-10-24","endDate":"2021-11-04","description":"Participated in dialogue activities and competitions, developing communication and dialogue skills.","documentType":"appreciation","document":"/documents/volunteering/dialogue-competition.png"}]},"goal":{"title":"My Career Aspirations","description":"I seek a stable, long-term professional opportunity in web development, technical support, or digital and administrative operations, where I can apply my technical knowledge and practical experience, contribute to improving operational efficiency and productivity, and continue learning and developing professionally."}},"title":"About Me","description":"Explore my education, professional experience, certifications, skills, and volunteer activities.","breadcrumb":{"title":"About Me","description":"Explore my education, professional experience, certifications, skills, and volunteer activities."},"documentPreview":{"loading":"Please wait a moment while we prepare your certificate for viewing...","error":"Unable to load the certificate. Please try again.","unavailable":"The document URL is unavailable.","unsupported":"This file format cannot be previewed on this page."},"aiSkills":{"title":"Artificial Intelligence Tools","tools":{"chatgpt":{"name":"ChatGPT","usage":"Using AI for programming, problem-solving, research, and content writing."},"gemini":{"name":"Google Gemini","usage":"Research, information analysis, idea generation, and technical assistance."},"claude":{"name":"Claude","usage":"Document and text analysis, programming assistance, and writing."},"deepseek":{"name":"DeepSeek","usage":"Code generation, error analysis, and programming problem-solving."}}}}'),ph=JSON.parse('{"pageTitle":"My Projects","pageDesc":"A collection of projects I have developed, showcasing my technical skills and experience in designing and building websites and web interfaces.","details":{"overview":"Project Overview","features":"Key Features","technologies":"Technologies Used","gallery":"Project Gallery","date":"Completion Date","liveDemo":"Live Preview","sourceCode":"Source Code","backToProjects":"Back to Projects","notFound":"Project Not Found","notFoundDescription":"We couldn\'t find the requested project."},"items":[{"id":"React-To-Do-List","title":"React Notes Management App","date":"2026/08/30","shortDescription":"An interactive application for creating, editing, deleting, and locally saving notes.","overview":"A notes management web application built with React and LocalStorage. Users can create, view, edit, and delete notes through an interactive interface, with data stored directly in the browser without requiring an external server. Developed as part of the JavaScript Application Development course at Hsoub Academy.","features":["Create new notes","View saved notes","Edit existing notes","Delete notes","Store data locally using LocalStorage","Update the interface interactively with React"],"tech_stack":["React","React Hooks","JavaScript","CRUD","LocalStorage"],"project_img":["react1"],"demo":"https://dhomlmgyr188.github.io/React-To-Do-List/","github":"https://github.com/dhomlmgyr188/React-To-Do-List"},{"id":"Portfolio_v1","title":"Personal Portfolio - Previous Version","date":"2026/05/24","shortDescription":"A responsive, multi-page personal portfolio showcasing professional information, projects, and services.","overview":"A multi-page personal portfolio website designed to showcase professional information, skills, projects, and services, with an emphasis on intuitive navigation, organized content, and a consistent user experience across different devices.","features":["Responsive design across different screen sizes","Multiple pages for organized content","Professional information and project showcase","Clear navigation between website sections","Interactive functionality using JavaScript"],"tech_stack":["HTML","CSS","Vanilla JavaScript"],"project_img":["anaalmughyir1"],"demo":"https://dhomlmgyr188.github.io/abdulrahman-portfolio-static/frontend/","github":""}]}'),fh=JSON.parse('{"page":{"title":"Get in Touch","description":"I\'d be happy to hear from you, answer your questions, and explore your ideas and suggestions. Send me a message using the contact form or reach out directly through any of the available channels."},"form":{"title":"Send a Message","description":"Feel free to contact me for any reason, whether it\'s a general inquiry, suggestion, collaboration opportunity, or something else. Fill out the form below and your message will be delivered directly to my email inbox.","firstName":"First Name","lastName":"Last Name","firstNamePlaceholder":"Enter your first name","lastNamePlaceholder":"Enter your last name","email":"Email Address","emailNote":"Please enter a valid email address so I can reply to you.","topic":"Contact Subject","selectTopic":"Select a subject","customTopic":"Custom Subject","customTopicPlaceholder":"Enter your subject","message":"Your Message","messagePlaceholder":"Write your message here. I\'ll be happy to read it and get back to you...","messageNote":"Please write a clear message of at least 10 characters.","submit":"Send Message","sending":"Sending your message...","privacyNote":"Your message will be delivered to my email through Web3Forms. Please avoid including sensitive or confidential information."},"topics":{"general":"General Contact","question":"Question or Inquiry","suggestion":"Suggestion or Idea","feedback":"Feedback or Comment","collaboration":"Collaboration or Partnership","employment":"Job Opportunity","project":"Project or Service","other":"Other - Specify Your Subject"},"status":{"success":"Your message has been sent successfully! Thank you for reaching out. I\'ll review it and respond as soon as possible.","error":"Unable to send your message right now. Please try again or contact me directly by email.","invalid":"Please complete all required fields correctly.","configError":"The contact form is not configured yet. Please contact me directly by email."},"info":{"title":"Contact Information","description":"You can also reach me directly through the following contact channels."},"methods":{"email":"Email Address","whatsapp":"WhatsApp","whatsappValue":"Chat directly on WhatsApp","phone":"Phone Call"},"availability":{"title":"Availability & Response Time","heading":"Messages Welcome 24/7","description":"You can send your message anytime, 24 hours a day, 7 days a week. I regularly check my inbox and typically respond within 24 hours, although response times may vary."},"social":{"title":"Social Media","description":"Explore my social media profiles and feel free to connect with me."}}');Af.use(rh).use(Mf).init({resources:{ar:{common:oh,home:ah,about:ih,projects:lh,contact:sh},en:{common:ch,home:uh,about:dh,projects:ph,contact:fh}},ns:["common","home","about","projects","contact"],defaultNS:"common",fallbackLng:"ar",interpolation:{escapeValue:!1}});const hh=e=>{const t=String(e||"ar");document.documentElement.dir=t.startsWith("ar")?"rtl":"ltr",document.documentElement.lang=t.startsWith("ar")?"ar":"en"};Af.on("languageChanged",hh),hh(Af.language);const mh=n.p+"static/media/saudia-sans-bold.aeaeb29bd75393fdabfc.otf",gh=n.p+"static/media/saudia-sans-regular.9af8db836ec4b5272370.otf",vh=n.p+"static/media/Barlow-Bold.0cb1ab864072bf9e0991.ttf",yh=mn`

  /* =====================================
     Fonts
  ===================================== */

  @font-face {
    font-family: "saudia-sans";
    src: url(${gh}) format("opentype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "saudia-sans";
    src: url(${mh}) format("opentype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Barlow";
    src: url(${n.p+"static/media/Barlow-Medium.d4afdc134fc10b739bab.ttf"}) format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Barlow";
    src: url(${vh}) format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  /* =====================================
     Global Reset
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
     HTML
  ===================================== */

  html {
    scroll-behavior: smooth;
    scroll-padding-top: calc(
      var(--header-height) + 20px
    );

    text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  /* =====================================
     Body
  ===================================== */

  body {
    min-width: 320px;
    min-height: 100vh;
    min-height: 100dvh;

    font-size: var(--size-md);
    font-weight: 400;
    line-height: 1.75;

    color: var(--color-text);
    background-color: var(--color-background);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    overflow-wrap: break-word;

    transition:
      background-color var(--transition-normal),
      color var(--transition-normal);
  }

  /* =====================================
     Language & Typography
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

  /* =====================================
     Root Application
  ===================================== */

  #root {
    min-height: 100vh;
    min-height: 100dvh;
    isolation: isolate;
  }

  /* =====================================
     Headings
  ===================================== */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--color-text-primary);
    font-weight: 700;
    line-height: 1.3;
    text-wrap: balance;
  }

  h1 {
    font-size: clamp(
      var(--size-2xl),
      4.5vw,
      var(--size-4xl)
    );
  }

  h2 {
    font-size: clamp(
      var(--size-xl),
      3.5vw,
      var(--size-3xl)
    );
  }

  h3 {
    font-size: clamp(
      var(--size-ml),
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
     Paragraphs & Text
  ===================================== */

  p {
    line-height: inherit;
    color: inherit;
  }

  small {
    font-size: var(--size-sm);
  }

  strong,
  b {
    font-weight: 700;
  }

  /* =====================================
     Links
  ===================================== */

  a {
    color: inherit;
    text-decoration: none;

    transition:
      color var(--transition-fast),
      opacity var(--transition-fast);
  }

  a:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
    border-radius: var(--radius-sm);
  }

  /* =====================================
     Buttons & Form Elements
  ===================================== */

  button,
  input,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  button:disabled,
  input:disabled,
  textarea:disabled,
  select:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }

  input,
  textarea,
  select {
    max-width: 100%;
  }

  textarea {
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--color-text-light);
    opacity: 0.85;
  }

  /* =====================================
     Lists
  ===================================== */

  ul,
  ol {
    list-style: none;
  }

  /* =====================================
     Images & Media
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
  }

  /* =====================================
     Sections & Anchors
  ===================================== */

  section {
    scroll-margin-top: calc(
      var(--header-height) + 20px
    );
  }

  [id] {
    scroll-margin-top: calc(
      var(--header-height) + 20px
    );
  }

  /* =====================================
     Tables
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
    background-color: var(
      --color-background-tertiary
    );

    color: var(--color-text-primary);
    font-weight: 700;
  }

  td {
    background-color: var(
      --color-background
    );

    color: var(--color-text);
  }

  tbody tr {
    transition:
      background-color var(--transition-fast);
  }

  tbody tr:hover td {
    background-color: var(
      --color-background-secondary
    );
  }

  /* =====================================
     Text Selection
  ===================================== */

  ::selection {
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  [data-theme="dark"] ::selection {
    background-color: var(--color-primary);
    color: var(--color-black);
  }

  /* =====================================
     Scrollbar
  ===================================== */

  html {
    scrollbar-color:
      var(--color-border)
      var(--color-background);
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-background);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: var(--radius-full);
    border: 2px solid var(--color-background);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-text-light);
  }

  /* =====================================
     Accessibility
  ===================================== */

  :focus-visible {
    outline-color: var(--color-primary);
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* =====================================
     Responsive
  ===================================== */

  @media (max-width: 768px) {
    body {
      font-size: var(--size-md);
    }

    h1 {
      font-size: clamp(2rem, 7vw, 2.5rem);
    }

    h2 {
      font-size: clamp(1.5rem, 5.5vw, 2rem);
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

`;r().createRoot(document.getElementById("root")).render((0,l().jsx)(s().StrictMode,{children:(0,l().jsx)(Ho,{basename:"/abdulrahman-portfolio-react",children:(0,l().jsxs)(Oa,{children:[(0,l().jsx)(yh,{}),(0,l().jsx)(qp,{})]})})}))})();
//# sourceMappingURL=main.c90cd2e6.js.map