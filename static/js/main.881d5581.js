/*! For license information please see main.881d5581.js.LICENSE.txt */
(()=>{"use strict";var e={};const t={};function n(r){const a=t[r];if(void 0!==a)return a.exports;const o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.cw=e=>{var t;return()=>{if(e){var n=e;e=0,t={exports:{}},n.call(t.exports,t,t.exports)}return t.exports}},(()=>{const e=Object.getPrototypeOf;let t;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}const o=Object.create(null);n.r(o);const i={};t||=[null,e({}),e([]),e(e)];for(var l=2&a&&r;("object"==typeof l||"function"==typeof l)&&!~t.indexOf(l);l=e(l))Object.getOwnPropertyNames(l).forEach(e=>i[e]=()=>r[e]);return i.default=()=>r,n.d(o,i),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/abdulrahman-portfolio-react/",n.nc=void 0;var r=n.cw(function(e,t){var n=p(),r=c(),a=i();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function s(e){for(var t=e,n=t;n&&!n.alternate;)0!==(4098&(t=n).flags)&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return 3===t.tag?e:null}function u(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function d(e){if(31===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function f(e){if(s(e)!==e)throw Error(o(188))}function h(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=h(e)))return t;e=e.sibling}return null}function m(e,t,n,r,a,o){for(;null!==e;){if((5===e.tag||27===e.tag||6===e.tag)&&n(e,r,a,o)||(22!==e.tag||null===e.memoizedState)&&(t||5!==e.tag&&27!==e.tag)&&m(e.child,t,n,r,a,o))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;null!==e;){if(3===e.tag||5===e.tag||27===e.tag)return e;e=e.return}return null}function v(e){var t=!1;for(e=e.return;null!==e&&(4===e.tag&&(t=!0),3!==e.tag&&5!==e.tag&&27!==e.tag);)e=e.return;return t}function y(e){var t=[null,null],n=g(e);return null===n||b(t,e,n.child,{foundSelf:!1}),t}function b(e,t,n,r){for(;null!==n;){if(n===t)r.foundSelf=!0;else if(5===n.tag||27===n.tag||6===n.tag){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((22!==n.tag||null===n.memoizedState)&&b(e,t,n.child,r))return!0;n=n.sibling}return!1}function x(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(o(559))}}var w=null,k=null;function S(e,t,n){return e===n||e===t&&(w=e,!0)}function j(e,t,n){return e===n?(k=e,!1):e===t&&(null!==k&&(w=e),!0)}function C(e){if(null===e)return null;do{e=null===e?null:e.return}while(e&&5!==e.tag&&27!==e.tag&&3!==e.tag);return e||null}function E(e,t,n){for(var r=0,a=e;a;a=n(a))r++;a=0;for(var o=t;o;o=n(o))a++;for(;0<r-a;)e=n(e),r--;for(;0<a-r;)t=n(t),a--;for(;r--;){if(e===t||null!==t&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var P=Object.assign,T=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),D=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),F=Symbol.for("react.lazy");Symbol.for("react.scope");var U=Symbol.for("react.activity"),H=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var B=Symbol.for("react.memo_cache_sentinel"),W=Symbol.for("react.view_transition"),V=Symbol.for("react.recoverable"),q=Symbol.iterator;function G(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=q&&e[q]||e["@@iterator"])?e:null}var K=Symbol.for("react.client.reference");function Q(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===K?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case z:return"Fragment";case _:return"Profiler";case O:return"StrictMode";case M:return"Suspense";case $:return"SuspenseList";case U:return"Activity";case W:return"ViewTransition"}if("object"===typeof e)switch(e.$$typeof){case N:return"Portal";case D:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case A:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case I:return null!==(t=e.displayName||null)?t:Q(e.type)||"Memo";case F:t=e._payload,e=e._init;try{return Q(e(t))}catch(n){}}return null}var Y=Array.isArray,J=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},ee=[],te=-1;function ne(e){return{current:e}}function re(e){0>te||(e.current=ee[te],ee[te]=null,te--)}function ae(e,t){te++,ee[te]=e.current,e.current=t}var oe,ie,le=ne(null),se=ne(null),ce=ne(null),ue=ne(null);function de(e,t){switch(ae(ce,t),ae(se,e),ae(le,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?$p(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=Ip(t=$p(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}re(le),ae(le,e)}function pe(){re(le),re(se),re(ce)}function fe(e){var t=e.memoizedState;null!==t&&(hh._currentValue=t.memoizedState,ae(ue,e));var n=Ip(t=le.current,e.type);t!==n&&(ae(se,e),ae(le,n))}function he(e){se.current===e&&(re(le),re(se)),ue.current===e&&(re(ue),hh._currentValue=Z)}function me(e){if(void 0===oe)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);oe=t&&t[1]||"",ie=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+oe+e+ie}var ge=!1;function ve(e,t){if(!e||ge)return"";ge=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(o){var r=o}Reflect.construct(e,[],n)}else{try{n.call()}catch(i){r=i}n=!1;try{var a=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(void 0!==a?Object.defineProperty(e.prototype,"props",a):delete e.prototype.props)}}}else{try{throw Error()}catch(l){r=l}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(s){if(s&&r&&"string"===typeof s.stack)return[s.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),i=o[0],l=o[1];if(i&&l){var s=i.split("\n"),c=l.split("\n");for(a=r=0;r<s.length&&!s[r].includes("DetermineComponentFrameRoot");)r++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(r===s.length||a===c.length)for(r=s.length-1,a=c.length-1;1<=r&&0<=a&&s[r]!==c[a];)a--;for(;1<=r&&0<=a;r--,a--)if(s[r]!==c[a]){if(1!==r||1!==a)do{if(r--,0>--a||s[r]!==c[a]){var u="\n"+s[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=a);break}}}finally{ge=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?me(n):""}function ye(e,t){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me("Lazy");case 13:return e.child!==t&&null!==t?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return ve(e.type,!1);case 11:return ve(e.type.render,!1);case 1:return ve(e.type,!0);case 31:return me("Activity");case 30:return me("ViewTransition");default:return""}}function be(e){try{var t="",n=null;do{t+=ye(e,n),n=e,e=e.return}while(e);return t}catch(r){return"\nError generating stack: "+r.message+"\n"+r.stack}}var xe=Object.prototype.hasOwnProperty,we=n.unstable_scheduleCallback,ke=n.unstable_cancelCallback,Se=n.unstable_shouldYield,je=n.unstable_requestPaint,Ce=n.unstable_now,Ee=n.unstable_getCurrentPriorityLevel,Pe=n.unstable_ImmediatePriority,Te=n.unstable_UserBlockingPriority,Le=n.unstable_NormalPriority,Ne=n.unstable_LowPriority,ze=n.unstable_IdlePriority,Oe=n.log,_e=n.unstable_setDisableYieldValue,Re=null,De=null;function Ae(e){if("function"===typeof Oe&&_e(e),De&&"function"===typeof De.setStrictMode)try{De.setStrictMode(Re,e)}catch(t){}}var Me=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-($e(e)/Ie|0)|0},$e=Math.log,Ie=Math.LN2;var Fe=256,Ue=262144,He=4194304;function Be(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return 3932160&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function We(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var a=0,o=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var l=134217727&r;return 0!==l?0!==(r=l&~o)?a=Be(r):0!==(i&=l)?a=Be(i):n||0!==(n=l&~e)&&(a=Be(n)):0!==(l=r&~o)?a=Be(l):0!==i?a=Be(i):n||0!==(n=r&~e)&&(a=Be(n)),0===a?0:0!==t&&t!==a&&0===(t&o)&&((o=a&-a)>=(n=t&-t)||32===o&&0!==(4194048&n))?t:a}function Ve(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function qe(e,t){0!==(8&t)&&(t|=32&t);var n=e.entangledLanes;if(0!==n)for(e=e.entanglements,n&=t;0<n;){var r=31-Me(n),a=1<<r;t|=e[r],n&=~a}return t}function Ge(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Ke(){var e=He;return 0===(62914560&(He<<=1))&&(He=4194304),e}function Qe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ye(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Je(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Me(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|261930&n}function Xe(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Ze(e,t){var n=t&-t;return 0!==((n=0!==(42&n)?1:et(n))&(e.suspendedLanes|t))?0:n}function et(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function tt(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function nt(){var e=X.p;return 0!==e?e:void 0===(e=window.event)?32:Nh(e.type)}function rt(e,t){var n=X.p;try{return X.p=e,t()}finally{X.p=n}}var at=Math.random().toString(36).slice(2),ot="__reactFiber$"+at,it="__reactProps$"+at,lt="__reactContainer$"+at,st="__reactEvents$"+at,ct="__reactListeners$"+at,ut="__reactHandles$"+at,dt="__reactResources$"+at,pt="__reactMarker$"+at,ft="__reactLoad$"+at;function ht(e){delete e[ot],delete e[it],delete e[ct],delete e[ut]}function mt(e){var t;if(t=e[ot])return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[ot]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Rf(e);null!==e;){if(n=e[ot])return n;e=Rf(e)}return t}n=(e=n).parentNode}return null}function gt(e){if(e=e[ot]||e[lt]){var t=e.tag;if(5===t||6===t||13===t||31===t||26===t||27===t||3===t)return e}return null}function vt(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(o(33))}function yt(e){var t=e[dt];return t||(t=e[dt]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function bt(e){e[pt]=!0}function xt(e){e[ft]=void 0}var wt=new Set,kt={};function St(e,t){jt(e,t),jt(e+"Capture",t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)wt.add(t[e])}var Ct=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Et={},Pt={};var Tt=!1;function Lt(){var e=Tt;return Tt=!1,e}function Nt(e,t,n){if(a=t,xe.call(Pt,a)||!xe.call(Et,a)&&(Ct.test(a)?Pt[a]=!0:(Et[a]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,n)}var a}function zt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,n)}}function Ot(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,r)}}function _t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function Rt(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Dt(e){if(!e._valueTracker){var t=Rt(e)?"checked":"value";e._valueTracker=function(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){n=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e,t,""+e[t])}}function At(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rt(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}var Mt=/[\n"\\]/g;function $t(e){return e.replace(Mt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function It(e,t,n,r,a,o,i,l){e.name="",null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i?e.type=i:e.removeAttribute("type"),null!=t?"number"===i?(0===t&&""===e.value||e.value!=t)&&(e.value=""+_t(t)):e.value!==""+_t(t)&&(e.value=""+_t(t)):"submit"!==i&&"reset"!==i||e.removeAttribute("value"),null!=t?"number"===i&&e.value==t?Ut(e,_t(e.value)):Ut(e,_t(t)):null!=n?Ut(e,_t(n)):null!=r&&e.removeAttribute("value"),null==a&&null!=o&&(e.defaultChecked=!!o),null!=a&&(e.checked=a&&"function"!==typeof a&&"symbol"!==typeof a),null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.name=""+_t(l):e.removeAttribute("name")}function Ft(e,t,n,r,a,o,i,l){if(null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.type=o),null!=t||null!=n){if(!("submit"!==o&&"reset"!==o||void 0!==t&&null!==t))return void Dt(e);n=null!=n?""+_t(n):"",t=null!=t?""+_t(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:a)&&"symbol"!==typeof r&&!!r,e.checked=l?e.checked:!!r,e.defaultChecked=!!r,null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.name=i),Dt(e)}function Ut(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Ht(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_t(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function Bt(e,t,n){null==t||((t=""+_t(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+_t(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function Wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(o(92));if(Y(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=_t(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r),Dt(e)}function Vt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var qt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gt(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||qt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Kt(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(o(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="",Tt=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(Gt(e,a,r),Tt=!0)}else for(var i in t)t.hasOwnProperty(i)&&Gt(e,i,t[i])}function Qt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xt(e){return Jt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var en=null;function tn(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var nn=null,rn=null;function an(e){var t=gt(e);if(t&&(e=t.stateNode)){var n=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if(It(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+$t(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[it]||null;if(!a)throw Error(o(90));It(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&At(r)}break e;case"textarea":Bt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&Ht(e,!!n.multiple,t,!1)}}}var on=!1;function ln(e,t,n){if(on)return e(t,n);on=!0;try{return e(t)}finally{if(on=!1,(null!==nn||null!==rn)&&(yd(),nn&&(t=nn,e=rn,rn=nn=null,an(t),e)))for(t=0;t<e.length;t++)an(e[t])}}function sn(e,t){var n=e.stateNode;if(null===n)return null;var r=n[it]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var cn=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),un=!1;if(cn)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){un=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch(tm){un=!1}var pn=null,fn=null,hn=null;function mn(){if(hn)return hn;var e,t,n=fn,r=n.length,a="value"in pn?pn.value:pn.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return hn=a.slice(e,1<t?1-t:void 0)}function gn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function vn(){return!0}function yn(){return!1}function bn(e){function t(t,n,r,a,o){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?vn:yn,this.isPropagationStopped=yn,this}return P(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=vn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=vn)},persist:function(){},isPersistent:vn}),t}var xn,wn,kn,Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jn=bn(Sn),Cn=P({},Sn,{view:0,detail:0}),En=bn(Cn),Pn=P({},Cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$n,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&"mousemove"===e.type?(xn=e.screenX-kn.screenX,wn=e.screenY-kn.screenY):wn=xn=0,kn=e),xn)},movementY:function(e){return"movementY"in e?e.movementY:wn}}),Tn=bn(Pn),Ln=bn(P({},Pn,{dataTransfer:0})),Nn=bn(P({},Cn,{relatedTarget:0})),zn=bn(P({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0})),On=bn(P({},Sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),_n=bn(P({},Sn,{data:0})),Rn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},An={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=An[e])&&!!t[e]}function $n(){return Mn}var In=bn(P({},Cn,{key:function(e){if(e.key){var t=Rn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=gn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Dn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$n,charCode:function(e){return"keypress"===e.type?gn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?gn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),Fn=bn(P({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Un=bn(P({},Sn,{submitter:0})),Hn=bn(P({},Cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$n})),Bn=bn(P({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Wn=bn(P({},Pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Vn=bn(P({},Sn,{newState:0,oldState:0,source:0})),qn=[9,13,27,32],Gn=cn&&"CompositionEvent"in window,Kn=null;cn&&"documentMode"in document&&(Kn=document.documentMode);var Qn=cn&&"TextEvent"in window&&!Kn,Yn=cn&&(!Gn||Kn&&8<Kn&&11>=Kn),Jn=String.fromCharCode(32),Xn=!1;function Zn(e,t){switch(e){case"keyup":return-1!==qn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function er(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var tr=!1;var nr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nr[e.type]:"textarea"===t}function ar(e,t,n,r){nn?rn?rn.push(r):rn=[r]:nn=r,0<(t=Sp(t,"onChange")).length&&(n=new jn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var or=null,ir=null;function lr(e){mp(e,0)}function sr(e){if(At(vt(e)))return e}function cr(e,t){if("change"===e)return t}var ur=!1;if(cn){var dr;if(cn){var pr="oninput"in document;if(!pr){var fr=document.createElement("div");fr.setAttribute("oninput","return;"),pr="function"===typeof fr.oninput}dr=pr}else dr=!1;ur=dr&&(!document.documentMode||9<document.documentMode)}function hr(){or&&(or.detachEvent("onpropertychange",mr),ir=or=null)}function mr(e){if("value"===e.propertyName&&sr(ir)){var t=[];ar(t,ir,e,tn(e)),ln(lr,t)}}function gr(e,t,n){"focusin"===e?(hr(),ir=n,(or=t).attachEvent("onpropertychange",mr)):"focusout"===e&&hr()}function vr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return sr(ir)}function yr(e,t){if("click"===e)return sr(t)}function br(e,t){if("input"===e||"change"===e)return sr(t)}var xr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function wr(e,t){if(xr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!xe.call(t,a)||!xr(e[a],t[a]))return!1}return!0}function kr(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Sr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jr(e,t){var n,r=Sr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Sr(r)}}function Cr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Cr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Er(e){for(var t=kr((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=kr((e=t.contentWindow).document)}return t}function Pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var Tr=cn&&"documentMode"in document&&11>=document.documentMode,Lr=null,Nr=null,zr=null,Or=!1;function _r(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;Or||null==Lr||Lr!==kr(r)||("selectionStart"in(r=Lr)&&Pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},zr&&wr(zr,r)||(zr=r,0<(r=Sp(Nr,"onSelect")).length&&(t=new jn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dr={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionrun:Rr("Transition","TransitionRun"),transitionstart:Rr("Transition","TransitionStart"),transitioncancel:Rr("Transition","TransitionCancel"),transitionend:Rr("Transition","TransitionEnd")},Ar={},Mr={};function $r(e){if(Ar[e])return Ar[e];if(!Dr[e])return e;var t,n=Dr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Mr)return Ar[e]=n[t];return e}cn&&(Mr=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);var Ir=$r("animationend"),Fr=$r("animationiteration"),Ur=$r("animationstart"),Hr=$r("transitionrun"),Br=$r("transitionstart"),Wr=$r("transitioncancel"),Vr=$r("transitionend"),qr=new Map,Gr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kr(e,t){qr.set(e,t),St(t,[e])}Gr.push("scrollEnd");var Qr=0;function Yr(e,t){return null!=e.name&&"auto"!==e.name?e.name:null!==t.autoName?t.autoName:(e="_"+(e=Zu.identifierPrefix)+"t_"+(Qr++).toString(32)+"_",t.autoName=e)}function Jr(e){if(null==e||"string"===typeof e)return e;var t=null,n=ld;if(null!==n)for(var r=0;r<n.length;r++){var a=e[n[r]];if(null!=a){if("none"===a)return"none";t=null==t?a:t+" "+a}}return null==t?e.default:t}function Xr(e,t){return e=Jr(e),null==(t=Jr(t))?"auto"===e?null:e:"auto"===t?null:t}var Zr="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},ea=[],ta=0,na=0;function ra(){for(var e=ta,t=na=ta=0;t<e;){var n=ea[t];ea[t++]=null;var r=ea[t];ea[t++]=null;var a=ea[t];ea[t++]=null;var o=ea[t];if(ea[t++]=null,null!==r&&null!==a){var i=r.pending;null===i?a.next=a:(a.next=i.next,i.next=a),r.pending=a}0!==o&&la(n,a,o)}}function aa(e,t,n,r){ea[ta++]=e,ea[ta++]=t,ea[ta++]=n,ea[ta++]=r,na|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function oa(e,t,n,r){return aa(e,t,n,r),sa(e)}function ia(e,t){return aa(e,null,null,t),sa(e)}function la(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var a=!1,o=e.return;null!==o;)o.childLanes|=n,null!==(r=o.alternate)&&(r.childLanes|=n),22===o.tag&&(null===(e=o.stateNode)||1&e._visibility||(a=!0)),e=o,o=o.return;return 3===e.tag?(o=e.stateNode,a&&null!==t&&(a=31-Me(n),null===(r=(e=o.hiddenUpdates)[a])?e[a]=[t]:r.push(t),t.lane=536870912|n),o):null}function sa(e){if(50<sd)throw sd=0,cd=null,Error(o(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var ca={};function ua(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function da(e,t,n,r){return new ua(e,t,n,r)}function pa(e){return!(!(e=e.prototype)||!e.isReactComponent)}function fa(e,t){var n=e.alternate;return null===n?((n=da(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=1206910976&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ha(e,t){e.flags&=1206910978;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ma(e,t,n,r,a,i){var l=0;if("function"===typeof(r=e))pa(r)&&(l=1);else if("string"===typeof r)l=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,le.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(r){case U:return(e=da(31,n,t,a)).elementType=U,e.lanes=i,e;case z:return ga(n.children,a,i,t);case O:l=8,a|=24;break;case _:return(e=da(12,n,t,2|a)).elementType=_,e.lanes=i,e;case M:return(e=da(13,n,t,a)).elementType=M,e.lanes=i,e;case $:return(e=da(19,n,t,a)).elementType=$,e.lanes=i,e;case H:case W:return(e=da(30,n,t,e=32|a)).elementType=W,e.lanes=i,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if("object"===typeof r&&null!==r)switch(r.$$typeof){case D:l=10;break e;case R:l=9;break e;case A:l=11;break e;case I:l=14;break e;case F:l=16,r=null;break e}l=29,n=Error(o(130,null===e?"null":typeof e,"")),r=null}return(t=da(l,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function ga(e,t,n,r){return(e=da(7,e,r,t)).lanes=n,e}function va(e,t,n){return(e=da(6,e,null,t)).lanes=n,e}function ya(e){var t=da(18,null,null,0);return t.stateNode=e,t}function ba(e,t,n){return(t=da(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xa=new WeakMap;function wa(e,t){if("object"===typeof e&&null!==e){var n=xa.get(e);return void 0!==n?n:(t={value:e,source:t,stack:be(t)},xa.set(e,t),t)}return{value:e,source:t,stack:be(t)}}var ka=[],Sa=0,ja=null,Ca=0,Ea=[],Pa=0,Ta=null,La=1,Na="";function za(e,t){ka[Sa++]=Ca,ka[Sa++]=ja,ja=e,Ca=t}function Oa(e,t,n){Ea[Pa++]=La,Ea[Pa++]=Na,Ea[Pa++]=Ta,Ta=e;var r=La;e=Na;var a=32-Me(r)-1;r&=~(1<<a),n+=1;var o=32-Me(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,La=1<<32-Me(t)+a|n<<a|r,Na=o+e}else La=1<<o|n<<a|r,Na=e}function _a(e){null!==e.return&&(za(e,1),Oa(e,1,0))}function Ra(e){for(;e===ja;)ja=ka[--Sa],ka[Sa]=null,Ca=ka[--Sa],ka[Sa]=null;for(;e===Ta;)Ta=Ea[--Pa],Ea[Pa]=null,Na=Ea[--Pa],Ea[Pa]=null,La=Ea[--Pa],Ea[Pa]=null}function Da(e,t){Ea[Pa++]=La,Ea[Pa++]=Na,Ea[Pa++]=Ta,La=t.id,Na=t.overflow,Ta=e}var Aa=null,Ma=null,$a=!1,Ia=null,Fa=!1,Ua=Error(o(519));function Ha(e){throw Ka(wa(Error(o(418,1<arguments.length&&void 0!==arguments[1]&&arguments[1]?"text":"HTML","")),e)),Ua}function Ba(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ot]=e,t[it]=r,n){case"dialog":gp("cancel",t),gp("close",t);break;case"iframe":case"object":case"embed":gp("load",t);break;case"video":case"audio":for(n=0;n<fp.length;n++)gp(fp[n],t);break;case"source":gp("error",t);break;case"img":case"image":case"link":gp("error",t),gp("load",t);break;case"details":gp("toggle",t);break;case"input":gp("invalid",t),Ft(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":gp("invalid",t);break;case"textarea":gp("invalid",t),Wt(t,r.value,r.defaultValue,r.children)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Lp(t.textContent,n)?(null!=r.popover&&(gp("beforetoggle",t),gp("toggle",t)),null!=r.onScroll&&gp("scroll",t),null!=r.onScrollEnd&&gp("scrollend",t),null!=r.onClick&&(t.onclick=Zt),t=!0):t=!1,t||Ha(e,!0)}function Wa(e){for(Aa=e.return;Aa;)switch(Aa.tag){case 5:case 31:case 13:return void(Fa=!1);case 27:case 3:return void(Fa=!0);default:Aa=Aa.return}}function Va(e){if(e!==Aa)return!1;if(!$a)return Wa(e),$a=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||Up(e.type,e.memoizedProps)),t=!t),t&&Ma&&Ha(e),Wa(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));Ma=_f(e)}else if(31===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));Ma=_f(e)}else 27===n?(n=Ma,Qp(e.type)?(e=Of,Of=null,Ma=e):Ma=n):Ma=Aa?zf(e.stateNode.nextSibling):null;return!0}function qa(){Ma=Aa=null,$a=!1}function Ga(){var e=Ia;return null!==e&&(null===Vu?Vu=e:Vu.push.apply(Vu,e),Ia=null),e}function Ka(e){null===Ia?Ia=[e]:Ia.push(e)}var Qa=ne(null),Ya=null,Ja=null;function Xa(e,t,n){ae(Qa,t._currentValue),t._currentValue=n}function Za(e){e._currentValue=Qa.current,re(Qa)}function eo(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function to(e,t,n,r){var a=e.child;for(null!==a&&(a.return=e);null!==a;){var i=a.dependencies;if(null!==i){var l=a.child;i=i.firstContext;e:for(;null!==i;){var s=i;i=a;for(var c=0;c<t.length;c++)if(s.context===t[c]){i.lanes|=n,null!==(s=i.alternate)&&(s.lanes|=n),eo(i.return,n,e),r||(l=null);break e}i=s.next}}else if(18===a.tag){if(null===(l=a.return))throw Error(o(341));l.lanes|=n,null!==(i=l.alternate)&&(i.lanes|=n),eo(l,n,e),l=null}else 13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated?(a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),eo(a.return,n,e),l=null!==(l=a.child)?l.sibling:null):l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===e){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}}function no(e,t,n,r){e=null;for(var a=t,i=!1;null!==a;){if(!i)if(0!==(524288&a.flags))i=!0;else if(0!==(262144&a.flags))break;if(10===a.tag){var l=a.alternate;if(null===l)throw Error(o(387));if(null!==(l=l.memoizedProps)){var s=a.type;xr(a.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(a===ue.current){if(null===(l=a.alternate))throw Error(o(387));l.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(hh):e=[hh])}a=a.return}return null!==e&&to(t,e,n,r),t.flags|=262144,null!==e}function ro(e){for(e=e.firstContext;null!==e;){if(!xr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ao(e){Ya=e,Ja=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function oo(e){return lo(Ya,e)}function io(e,t){return null===Ya&&ao(e),lo(e,t)}function lo(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===Ja){if(null===e)throw Error(o(308));Ja=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ja=Ja.next=t;return n}var so="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},co=n.unstable_scheduleCallback,uo=n.unstable_NormalPriority,po={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fo(){return{controller:new so,data:new Map,refCount:0}}function ho(e){e.refCount--,0===e.refCount&&co(uo,function(){e.controller.abort()})}function mo(e,t){if(0!==(4194048&e.pendingLanes)){var n=e.transitionTypes;for(null===n&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];-1===n.indexOf(r)&&n.push(r)}}}var go=null;var vo=null,yo=0,bo=0,xo=null;function wo(){if(0===--yo&&(go=null,null!==vo)){null!==xo&&(xo.status="fulfilled");var e=vo;vo=null,bo=0,xo=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var ko=J.S;J.S=function(e,t){if(Ku=Ce(),"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===vo){var n=vo=[];yo=0,bo=cp(),xo={status:"pending",value:void 0,then:function(e){n.push(e)}}}yo++,t.then(wo,wo)}(0,t),null!==go)for(var n=Yd;null!==n;)mo(n,go),n=n.next;if(null!==(n=e.types)){for(var r=Yd;null!==r;)mo(r,n),r=r.next;if(0!==bo){null===(r=go)&&(r=go=[]);for(var a=0;a<n.length;a++){var o=n[a];-1===r.indexOf(o)&&r.push(o)}}}null!==ko&&ko(e,t)};var So=ne(null);function jo(){var e=So.current;return null!==e?e:Lu.pooledCache}function Co(e,t){ae(So,null===t?So.current:t.pool)}function Eo(){var e=jo();return null===e?null:{parent:po._currentValue,pool:e}}var Po=Error(o(460)),To=Error(o(474)),Lo=Error(o(542)),No={then:function(){}};function zo(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Oo(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Zt,Zt),t=n),t.status){case"fulfilled":return t.value;case"rejected":if(Ao(e=t.reason),void 0===e&&!("reason"in t))throw Error(o(600));throw e;default:if("string"===typeof t.status)t.then(Zt,Zt);else{if(null!==(e=Lu)&&100<e.shellSuspendCounter)throw Error(o(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw Ao(e=t.reason),e}throw Ro=t,Po}}function _o(e){try{return(0,e._init)(e._payload)}catch(t){if(null!==t&&"object"===typeof t&&"function"===typeof t.then)throw Ro=t,Po;throw t}}var Ro=null;function Do(){if(null===Ro)throw Error(o(459));var e=Ro;return Ro=null,e}function Ao(e){if(e===Po||e===Lo)throw Error(o(483))}var Mo=null,$o=0;function Io(e){var t=$o;return $o+=1,null===Mo&&(Mo=[]),Oo(Mo,e,t)}function Fo(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Uo(e,t){if(t.$$typeof===T)throw Error(o(525));throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ho(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null===e.key?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return(e=fa(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=134217730,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=134217730),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=va(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function c(e,t,n,r){var o=n.type;return o===z?(Fo(e=d(e,t,n.props.children,r,n.key),n),e):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===F&&_o(o)===t.type)?(Fo(t=a(t,n.props),n),t.return=e,t):(Fo(t=ma(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=ba(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=ga(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=va(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case L:return Fo(n=ma(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case N:return(t=ba(t,e.mode,n)).return=e,t;case F:return p(e,t=_o(t),n)}if(Y(t)||G(t))return(t=ga(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return p(e,Io(t),n);if(t.$$typeof===D)return p(e,io(e,t),n);Uo(e,t)}return null}function f(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case L:return n.key===a?c(e,t,n,r):null;case N:return n.key===a?u(e,t,n,r):null;case F:return f(e,t,n=_o(n),r)}if(Y(n)||G(n))return null!==a?null:d(e,t,n,r,null);if("function"===typeof n.then)return f(e,t,Io(n),r);if(n.$$typeof===D)return f(e,t,io(e,n),r);Uo(e,n)}return null}function h(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case L:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case N:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case F:return h(e,t,n,r=_o(r),a)}if(Y(r)||G(r))return d(t,e=e.get(n)||null,r,a,null);if("function"===typeof r.then)return h(e,t,n,Io(r),a);if(r.$$typeof===D)return h(e,t,n,io(t,r),a);Uo(t,r)}return null}function m(s,c,u,d){if("object"===typeof u&&null!==u&&u.type===z&&null===u.key&&void 0===u.props.ref&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case L:e:{for(var g=u.key;null!==c;){if(c.key===g){if((g=u.type)===z){if(7===c.tag){n(s,c.sibling),Fo(d=a(c,u.props.children),u),d.return=s,s=d;break e}}else if(c.elementType===g||"object"===typeof g&&null!==g&&g.$$typeof===F&&_o(g)===c.type){n(s,c.sibling),Fo(d=a(c,u.props),u),d.return=s,s=d;break e}n(s,c);break}t(s,c),c=c.sibling}u.type===z?(Fo(d=ga(u.props.children,s.mode,d,u.key),u),d.return=s,s=d):(Fo(d=ma(u.type,u.key,u.props,null,s.mode,d),u),d.return=s,s=d)}return l(s);case N:e:{for(g=u.key;null!==c;){if(c.key===g){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(s,c.sibling),(d=a(c,u.children||[])).return=s,s=d;break e}n(s,c);break}t(s,c),c=c.sibling}(d=ba(u,s.mode,d)).return=s,s=d}return l(s);case F:return m(s,c,u=_o(u),d)}if(Y(u))return function(a,o,l,s){for(var c=null,u=null,d=o,m=o=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=f(a,d,l[m],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(a,d),o=i(v,o,m),null===u?c=v:u.sibling=v,u=v,d=g}if(m===l.length)return n(a,d),$a&&za(a,m),c;if(null===d){for(;m<l.length;m++)null!==(d=p(a,l[m],s))&&(o=i(d,o,m),null===u?c=d:u.sibling=d,u=d);return $a&&za(a,m),c}for(d=r(d);m<l.length;m++)null!==(g=h(d,a,m,l[m],s))&&(e&&null!==(v=g.alternate)&&d.delete(null===v.key?m:v.key),o=i(g,o,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(a,e)}),$a&&za(a,m),c}(s,c,u,d);if(G(u)){if("function"!==typeof(g=G(u)))throw Error(o(150));return function(a,l,s,c){if(null==s)throw Error(o(151));for(var u=null,d=null,m=l,g=l=0,v=null,y=s.next();null!==m&&!y.done;g++,y=s.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=f(a,m,y.value,c);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(a,m),l=i(b,l,g),null===d?u=b:d.sibling=b,d=b,m=v}if(y.done)return n(a,m),$a&&za(a,g),u;if(null===m){for(;!y.done;g++,y=s.next())null!==(y=p(a,y.value,c))&&(l=i(y,l,g),null===d?u=y:d.sibling=y,d=y);return $a&&za(a,g),u}for(m=r(m);!y.done;g++,y=s.next())null!==(y=h(m,a,g,y.value,c))&&(e&&null!==(v=y.alternate)&&m.delete(null===v.key?g:v.key),l=i(y,l,g),null===d?u=y:d.sibling=y,d=y);return e&&m.forEach(function(e){return t(a,e)}),$a&&za(a,g),u}(s,c,u=g.call(u),d)}if("function"===typeof u.then)return m(s,c,Io(u),d);if(u.$$typeof===D)return m(s,c,io(s,u),d);Uo(s,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(s,c.sibling),(d=a(c,u)).return=s,s=d):(n(s,c),(d=va(u,s.mode,d)).return=s,s=d),l(s)):n(s,c)}return function(e,t,n,r){try{$o=0;var a=m(e,t,n,r);return Mo=null,a}catch(i){if(i===Po||i===Lo)throw i;var o=da(29,i,null,e.mode);return o.lanes=r,o.return=e,o}}}var Bo=Ho(!0),Wo=Ho(!1),Vo=!1;function qo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Go(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ko(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Qo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Tu)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=sa(e),la(e,null,n),t}return aa(e,r,t,n),sa(e)}function Yo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Xe(e,n)}}function Jo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===o?a=o=i:o=o.next=i,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xo=!1;function Zo(){if(Xo){if(null!==xo)throw xo}}function ei(e,t,n,r){Xo=!1;var a=e.updateQueue;Vo=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,c=s.next;s.next=null,null===i?o=c:i.next=c,i=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==i&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(i=0,u=c=s=null,l=o;;){var p=-536870913&l.lane,f=p!==l.lane;if(f?(zu&p)===p:(r&p)===p){0!==p&&p===bo&&(Xo=!0),null!==u&&(u=u.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var h=e,m=l;p=t;var g=n;switch(m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(g,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=m.payload)?h.call(g,d,p):h)||void 0===p)break e;d=P({},d,p);break e;case 2:Vo=!0}}null!==(p=l.callback)&&(e.flags|=64,f&&(e.flags|=8192),null===(f=a.callbacks)?a.callbacks=[p]:f.push(p))}else f={lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=f,s=d):u=u.next=f,i|=p;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}null===u&&(s=d),a.baseState=s,a.firstBaseUpdate=c,a.lastBaseUpdate=u,null===o&&(a.shared.lanes=0),Iu|=i,e.lanes=i,e.memoizedState=d}}function ti(e,t){if("function"!==typeof e)throw Error(o(191,e));e.call(t)}function ni(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)ti(n[e],t)}var ri=ne(null),ai=ne(0);function oi(e,t){ae(ai,e=Mu),ae(ri,t),Mu=e|t.baseLanes}function ii(){ae(ai,Mu),ae(ri,ri.current)}function li(){Mu=ai.current,re(ri),re(ai)}var si=ne(null),ci=null;function ui(e){var t=e.alternate;ae(mi,1&mi.current),ae(si,e),null===ci&&(null===t||null!==ri.current||null!==t.memoizedState)&&(ci=e)}function di(e){ae(mi,mi.current),ae(si,e),null===ci&&(ci=e)}function pi(e){22===e.tag?(ae(mi,mi.current),ae(si,e),null===ci&&(ci=e)):fi()}function fi(){ae(mi,mi.current),ae(si,si.current)}function hi(e){re(si),ci===e&&(ci=null),re(mi)}var mi=ne(0);function gi(e,t){ae(si,si.current),ae(mi,t)}function vi(e){re(mi),re(si),ci===e&&(ci=null)}function yi(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||Lf(n)||Nf(n)))return t}else if(19===t.tag&&"independent"!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bi=0,xi=null,wi=null,ki=null,Si=!1,ji=!1,Ci=!1,Ei=0,Pi=0,Ti=null,Li=0;function Ni(){throw Error(o(321))}function zi(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xr(e[n],t[n]))return!1;return!0}function Oi(e,t,n,r,a,o){return bi=o,xi=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,J.H=null===e||null===e.memoizedState?Gl:Kl,Ci=!1,o=n(r,a),Ci=!1,ji&&(o=Ri(t,n,r,a)),_i(e),o}function _i(e){J.H=ql;var t=null!==wi&&null!==wi.next;if(bi=0,ki=wi=xi=null,Si=!1,Pi=0,Ti=null,t)throw Error(o(300));null===e||us||null!==(e=e.dependencies)&&ro(e)&&(us=!0)}function Ri(e,t,n,r){xi=e;var a=0;do{if(ji&&(Ti=null),Pi=0,ji=!1,25<=a)throw Error(o(301));if(a+=1,ki=wi=null,null!=e.updateQueue){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,null!=i.memoCache&&(i.memoCache.index=0)}J.H=Ql,i=t(n,r)}while(ji);return i}function Di(){var e=J.H,t=e.useState()[0];return t="function"===typeof t.then?Ui(t):t,e=e.useState()[0],(null!==wi?wi.memoizedState:null)!==e&&(xi.flags|=1024),t}function Ai(){var e=0!==Ei;return Ei=0,e}function Mi(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function $i(e){if(Si){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Si=!1}bi=0,ki=wi=xi=null,ji=!1,Pi=Ei=0,Ti=null}function Ii(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ki?xi.memoizedState=ki=e:ki=ki.next=e,ki}function Fi(){if(null===wi){var e=xi.alternate;e=null!==e?e.memoizedState:null}else e=wi.next;var t=null===ki?xi.memoizedState:ki.next;if(null!==t)ki=t,wi=e;else{if(null===e){if(null===xi.alternate)throw Error(o(467));throw Error(o(310))}e={memoizedState:(wi=e).memoizedState,baseState:wi.baseState,baseQueue:wi.baseQueue,queue:wi.queue,next:null},null===ki?xi.memoizedState=ki=e:ki=ki.next=e}return ki}function Ui(e){var t=Pi;return Pi+=1,null===Ti&&(Ti=[]),e=Oo(Ti,e,t),t=xi,null===(null===ki?t.memoizedState:ki.next)&&(t=t.alternate,J.H=null===t||null===t.memoizedState?Gl:Kl),e}function Hi(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return Ui(e);if(e.$$typeof===V)return;if(e.$$typeof===D)return oo(e)}throw Error(o(438,String(e)))}function Bi(e){var t=null,n=xi.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=xi.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=B;return t.index++,n}function Wi(e,t){return"function"===typeof t?t(e):t}function Vi(e){return qi(Fi(),wi,e)}function qi(e,t,n){var r=e.queue;if(null===r)throw Error(o(311));r.lastRenderedReducer=n;var a=e.baseQueue,i=r.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}t.baseQueue=a=i,r.pending=null}if(i=e.baseState,null===a)e.memoizedState=i;else{var s=l=null,c=null,u=t=a.next,d=!1;do{var p=-536870913&u.lane;if(p!==u.lane?(zu&p)===p:(bi&p)===p){var f=u.revertLane;if(0===f)null!==c&&(c=c.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===bo&&(d=!0);else{if((bi&f)===f){u=u.next,f===bo&&(d=!0);continue}p={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=p,l=i):c=c.next=p,xi.lanes|=f,Iu|=f}p=u.action,Ci&&n(i,p),i=u.hasEagerState?u.eagerState:n(i,p)}else f={lane:p,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=f,l=i):c=c.next=f,xi.lanes|=p,Iu|=p;u=u.next}while(null!==u&&u!==t);if(null===c?l=i:c.next=s,!xr(i,e.memoizedState)&&(us=!0,d&&null!==(n=xo)))throw n;e.memoizedState=i,e.baseState=l,e.baseQueue=c,r.lastRenderedState=i}return null===a&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Gi(e){var t=Fi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);xr(i,t.memoizedState)||(us=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ki(e,t,n){var r=xi,a=Fi(),i=$a;if(i){if(void 0===n)throw Error(o(407));n=n()}else n=t();var l=!xr((wi||a).memoizedState,n);if(l&&(a.memoizedState=n,us=!0),a=a.queue,bl(Ji.bind(null,r,a,e),[e]),hl((e=a.getSnapshot!==t||l||null!==ki&&0!==(1&ki.memoizedState.tag))?9:8,{destroy:void 0},Yi.bind(null,r,a,n,t),null),e){if(r.flags|=2048,null===Lu)throw Error(o(349));i||0!==(127&bi)||Qi(r,t,n)}return n}function Qi(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=xi.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Yi(e,t,n,r){t.value=n,t.getSnapshot=r,Xi(t)&&Zi(e)}function Ji(e,t,n){return n(function(){Xi(t)&&Zi(e)})}function Xi(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xr(e,n)}catch(r){return!0}}function Zi(e){var t=ia(e,2);null!==t&&fd(t,e,2)}function el(e){var t=Ii();if("function"===typeof e){var n=e;if(e=n(),Ci){Ae(!0);try{n()}finally{Ae(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},t}function tl(e,t,n,r){return e.baseState=n,qi(e,wi,"function"===typeof r?r:Wi)}function nl(e,t,n,r,a){if(Bl(e))throw Error(o(485));if(null!==(e=t.action)){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){i.listeners.push(e)}};null!==J.T?n(!0):i.isTransition=!1,r(i),null===(n=t.pending)?(i.next=t.pending=i,rl(t,i)):(i.next=n.next,t.pending=n.next=i)}}function rl(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var o=J.T,i={};i.types=null!==o?o.types:null,J.T=i;try{var l=n(a,r),s=J.S;null!==s&&s(i,l),al(e,t,l)}catch(c){il(e,t,c)}finally{null!==o&&null!==i.types&&(o.types=i.types),J.T=o}}else try{al(e,t,o=n(a,r))}catch(u){il(e,t,u)}}function al(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){ol(e,t,n)},function(n){return il(e,t,n)}):ol(e,t,n)}function ol(e,t,n){t.status="fulfilled",t.value=n,ll(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,rl(e,n)))}function il(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,ll(t),t=t.next}while(t!==r)}e.action=null}function ll(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function sl(e,t){return t}function cl(e,t){if($a){var n=Lu.formState;if(null!==n){e:{var r=xi;if($a){if(Ma){t:{for(var a=Ma,o=Fa;8!==a.nodeType;){if(!o){a=null;break t}if(null===(a=zf(a.nextSibling))){a=null;break t}}a="F!"===(o=a.data)||"F"===o?a:null}if(a){Ma=zf(a.nextSibling),r="F!"===a.data;break e}}Ha(r)}r=!1}r&&(t=n[0])}}return(n=Ii()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sl,lastRenderedState:t},n.queue=r,n=Fl.bind(null,xi,r),r.dispatch=n,r=el(!1),o=Hl.bind(null,xi,!1,r.queue),a={state:t,dispatch:null,action:e,pending:null},(r=Ii()).queue=a,n=nl.bind(null,xi,a,o,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function ul(e){return dl(Fi(),wi,e)}function dl(e,t,n){if(t=qi(e,t,sl)[0],e=Vi(Wi)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=Ui(t)}catch(i){if(i===Po)throw Lo;throw i}else r=t;var a=(t=Fi()).queue,o=a.dispatch;return n!==t.memoizedState&&(xi.flags|=2048,hl(9,{destroy:void 0},pl.bind(null,a,n),null)),[r,o,e]}function pl(e,t){e.action=t}function fl(e){var t=Fi(),n=wi;if(null!==n)return dl(t,n,e);Fi(),t=t.memoizedState;var r=(n=Fi()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function hl(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=xi.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ml(){return Fi().memoizedState}function gl(e,t,n,r){var a=Ii();xi.flags|=e,a.memoizedState=hl(1|t,{destroy:void 0},n,void 0===r?null:r)}function vl(e,t,n,r){var a=Fi();r=void 0===r?null:r;var o=a.memoizedState.inst;null!==wi&&null!==r&&zi(r,wi.memoizedState.deps)?a.memoizedState=hl(t,o,n,r):(xi.flags|=e,a.memoizedState=hl(1|t,o,n,r))}function yl(e,t){gl(8390656,8,e,t)}function bl(e,t){vl(2048,8,e,t)}function xl(e){var t=Fi().memoizedState;return function(e){xi.flags|=4;var t=xi.updateQueue;if(null===t)t={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=t,t.events=[e];else{var n=t.events;null===n?t.events=[e]:n.push(e)}}({ref:t,nextImpl:e}),function(){if(0!==(2&Tu))throw Error(o(440));return t.impl.apply(void 0,arguments)}}function wl(e,t){return vl(4,2,e,t)}function kl(e,t){return vl(4,4,e,t)}function Sl(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function jl(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,vl(4,4,Sl.bind(null,t,e),n)}function Cl(){}function El(e,t){var n=Fi();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&zi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Pl(e,t){var n=Fi();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&zi(t,r[1]))return r[0];if(r=e(),Ci){Ae(!0);try{e()}finally{Ae(!1)}}return n.memoizedState=[r,t],r}function Tl(e,t,n){return void 0===n||0!==(1073741824&bi)&&0===(261930&zu)?e.memoizedState=t:(e.memoizedState=n,e=dd(),xi.lanes|=e,Iu|=e,n)}function Ll(e,t,n,r){return xr(n,t)?n:null!==ri.current?(e=Tl(e,n,r),xr(e,t)||(us=!0),e):0===(106&bi)||0!==(1073741824&bi)&&0===(261930&zu)?(us=!0,e.memoizedState=n):(e=dd(),xi.lanes|=e,Iu|=e,t)}function Nl(e,t,n,r,a){var o=X.p;X.p=0!==o&&8>o?o:8;var i=J.T,l={};l.types=null!==i?i.types:null,J.T=l,Hl(e,!1,t,n);try{var s=a(),c=J.S;if(null!==c&&c(l,s),null!==s&&"object"===typeof s&&"function"===typeof s.then)Ul(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}(s,r),ud());else Ul(e,t,r,ud())}catch(u){Ul(e,t,{then:function(){},status:"rejected",reason:u},ud())}finally{X.p=o,null!==i&&null!==l.types&&(i.types=l.types),J.T=i}}function zl(){}function Ol(e,t,n,r){if(5!==e.tag)throw Error(o(476));var a=_l(e).queue;Nl(e,a,t,Z,null===n?zl:function(){return Rl(e),n(r)})}function _l(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:Z},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function Rl(e){var t=_l(e);null===t.next&&(t=e.alternate.memoizedState),Ul(e,t.next.queue,{},ud())}function Dl(){return oo(hh)}function Al(){return Fi().memoizedState}function Ml(){return Fi().memoizedState}function $l(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=ud(),r=Qo(t,e=Ko(n),n);return null!==r&&(fd(r,t,n),Yo(r,t,n)),t={cache:fo()},void(e.payload=t)}t=t.return}}function Il(e,t,n){var r=ud();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bl(e)?Wl(t,n):null!==(n=oa(e,t,n,r))&&(fd(n,e,r),Vl(n,t,r))}function Fl(e,t,n){Ul(e,t,n,ud())}function Ul(e,t,n,r){var a={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bl(e))Wl(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,n);if(a.hasEagerState=!0,a.eagerState=l,xr(l,i))return aa(e,t,a,0),null===Lu&&ra(),!1}catch(s){}if(null!==(n=oa(e,t,a,r)))return fd(n,e,r),Vl(n,t,r),!0}return!1}function Hl(e,t,n,r){if(r={lane:2,revertLane:cp(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bl(e)){if(t)throw Error(o(479))}else null!==(t=oa(e,n,r,2))&&fd(t,e,2)}function Bl(e){var t=e.alternate;return e===xi||null!==t&&t===xi}function Wl(e,t){ji=Si=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vl(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Xe(e,n)}}var ql={readContext:oo,use:Hi,useCallback:Ni,useContext:Ni,useEffect:Ni,useImperativeHandle:Ni,useLayoutEffect:Ni,useInsertionEffect:Ni,useMemo:Ni,useReducer:Ni,useRef:Ni,useState:Ni,useDebugValue:Ni,useDeferredValue:Ni,useTransition:Ni,useSyncExternalStore:Ni,useId:Ni,useHostTransitionStatus:Ni,useFormState:Ni,useActionState:Ni,useOptimistic:Ni,useMemoCache:Ni,useCacheRefresh:Ni,useEffectEvent:Ni},Gl={readContext:oo,use:Hi,useCallback:function(e,t){return Ii().memoizedState=[e,void 0===t?null:t],e},useContext:oo,useEffect:yl,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,gl(4194308,4,Sl.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gl(4194308,4,e,t)},useInsertionEffect:function(e,t){gl(4,2,e,t)},useMemo:function(e,t){var n=Ii();t=void 0===t?null:t;var r=e();if(Ci){Ae(!0);try{e()}finally{Ae(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ii();if(void 0!==n){var a=n(t);if(Ci){Ae(!0);try{n(t)}finally{Ae(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=Il.bind(null,xi,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Ii().memoizedState=e},useState:function(e){var t=(e=el(e)).queue,n=Fl.bind(null,xi,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Cl,useDeferredValue:function(e,t){return Tl(Ii(),e,t)},useTransition:function(){var e=el(!1);return e=Nl.bind(null,xi,e.queue,!0,!1),Ii().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=xi,a=Ii();if($a){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Lu)throw Error(o(349));0!==(127&zu)||Qi(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,yl(Ji.bind(null,r,i,e),[e]),r.flags|=2048,hl(9,{destroy:void 0},Yi.bind(null,r,i,n,t),null),n},useId:function(){var e=Ii(),t=Lu.identifierPrefix;if($a){var n=Na;t="_"+t+"R_"+(n=(La&~(1<<32-Me(La)-1)).toString(32)+n),0<(n=Ei++)&&(t+="H"+n.toString(32)),t+="_"}else t="_"+t+"r_"+(n=Li++).toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Dl,useFormState:cl,useActionState:cl,useOptimistic:function(e){var t=Ii();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Hl.bind(null,xi,!0,n),n.dispatch=t,[e,t]},useMemoCache:Bi,useCacheRefresh:function(){return Ii().memoizedState=$l.bind(null,xi)},useEffectEvent:function(e){var t=Ii(),n={impl:e};return t.memoizedState=n,function(){if(0!==(2&Tu))throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Kl={readContext:oo,use:Hi,useCallback:El,useContext:oo,useEffect:bl,useImperativeHandle:jl,useInsertionEffect:wl,useLayoutEffect:kl,useMemo:Pl,useReducer:Vi,useRef:ml,useState:function(){return Vi(Wi)},useDebugValue:Cl,useDeferredValue:function(e,t){return Ll(Fi(),wi.memoizedState,e,t)},useTransition:function(){var e=Vi(Wi)[0],t=Fi().memoizedState;return["boolean"===typeof e?e:Ui(e),t]},useSyncExternalStore:Ki,useId:Al,useHostTransitionStatus:Dl,useFormState:ul,useActionState:ul,useOptimistic:function(e,t){return tl(Fi(),0,e,t)},useMemoCache:Bi,useCacheRefresh:Ml,useEffectEvent:xl},Ql={readContext:oo,use:Hi,useCallback:El,useContext:oo,useEffect:bl,useImperativeHandle:jl,useInsertionEffect:wl,useLayoutEffect:kl,useMemo:Pl,useReducer:Gi,useRef:ml,useState:function(){return Gi(Wi)},useDebugValue:Cl,useDeferredValue:function(e,t){var n=Fi();return null===wi?Tl(n,e,t):Ll(n,wi.memoizedState,e,t)},useTransition:function(){var e=Gi(Wi)[0],t=Fi().memoizedState;return["boolean"===typeof e?e:Ui(e),t]},useSyncExternalStore:Ki,useId:Al,useHostTransitionStatus:Dl,useFormState:fl,useActionState:fl,useOptimistic:function(e,t){var n=Fi();return null!==wi?tl(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Bi,useCacheRefresh:Ml,useEffectEvent:xl};function Yl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:P({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var Jl={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ud(),a=Ko(r);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Qo(e,a,r))&&(fd(t,e,r),Yo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ud(),a=Ko(r);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Qo(e,a,r))&&(fd(t,e,r),Yo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ud(),r=Ko(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=Qo(e,r,n))&&(fd(t,e,n),Yo(t,e,n))}};function Xl(e,t,n,r,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!wr(n,r)||!wr(a,o))}function Zl(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Jl.enqueueReplaceState(t,t.state,null)}function es(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var a in n===t&&(n=P({},n)),e)void 0===n[a]&&(n[a]=e[a]);return n}function ts(e){Zr(e)}function ns(e){console.error(e)}function rs(e){Zr(e)}function as(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function os(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function is(e,t,n){return(n=Ko(n)).tag=3,n.payload={element:null},n.callback=function(){as(e,t)},n}function ls(e){return(e=Ko(e)).tag=3,e}function ss(e,t,n,r){var a=n.type.getDerivedStateFromError;if("function"===typeof a){var o=r.value;e.payload=function(){return a(o)},e.callback=function(){os(t,n,r)}}var i=n.stateNode;null!==i&&"function"===typeof i.componentDidCatch&&(e.callback=function(){os(t,n,r),"function"!==typeof a&&(null===Ju?Ju=new Set([this]):Ju.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var cs=Error(o(461)),us=!1;function ds(e,t,n,r){t.child=null===e?Wo(t,null,n,r):Bo(t,e.child,n,r)}function ps(e,t,n,r,a){n=n.render;var o=t.ref;if("ref"in r){var i={};for(var l in r)"ref"!==l&&(i[l]=r[l])}else i=r;return ao(t),r=Oi(e,t,n,i,o,a),l=Ai(),null===e||us?($a&&l&&_a(t),t.flags|=1,ds(e,t,r,a),t.child):(Mi(e,t,a),$s(e,t,a))}function fs(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||pa(o)||void 0!==o.defaultProps||null!==n.compare?((e=ma(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,hs(e,t,o,r,a))}if(o=e.child,!Is(e,a)){var i=o.memoizedProps;if((n=null!==(n=n.compare)?n:wr)(i,r)&&e.ref===t.ref)return $s(e,t,a)}return t.flags|=1,(e=fa(o,r)).ref=t.ref,e.return=t,t.child=e}function hs(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(wr(o,r)&&e.ref===t.ref){if(us=!1,t.pendingProps=r=o,!Is(e,a))return t.lanes=e.lanes,$s(e,t,a);0!==(131072&e.flags)&&(us=!0)}}return ws(e,t,n,r,a)}function ms(e,t,n,r){var a=r.children,o=null!==e?e.memoizedState:null;if(null===e&&null===t.stateNode&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),"hidden"===r.mode){if(0!==(128&t.flags)){if(o=null!==o?o.baseLanes|n:n,null!==e){for(r=t.child=e.child,a=0;null!==r;)a=a|r.lanes|r.childLanes,r=r.sibling;r=a&~o}else r=0,t.child=null;return vs(e,t,o,n,r)}if(0===(536870912&n))return r=t.lanes=536870912,vs(e,t,null!==o?o.baseLanes|n:n,n,r);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Co(0,null!==o?o.cachePool:null),null!==o?oi(t,o):ii(),pi(t)}else null!==o?(Co(0,o.cachePool),oi(t,o),fi(),t.memoizedState=null):(null!==e&&Co(0,null),ii(),fi());return ds(e,t,a,n),t.child}function gs(e,t){return null!==e&&22===e.tag||null!==t.stateNode||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function vs(e,t,n,r,a){var o=jo();return o=null===o?null:{parent:po._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},null!==e&&Co(0,null),ii(),pi(t),null!==e&&no(e,t,r,!0),t.childLanes=a,null}function ys(e,t){return(t=Ns({mode:t.mode,children:t.children},e.mode)).ref=e.ref,e.child=t,t.return=e,t}function bs(e,t,n){return Bo(t,e.child,null,n),(e=ys(t,t.pendingProps)).flags|=2,hi(t),t.memoizedState=null,e}function xs(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(o(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function ws(e,t,n,r,a){return ao(t),n=Oi(e,t,n,r,void 0,a),r=Ai(),null===e||us?($a&&r&&_a(t),t.flags|=1,ds(e,t,n,a),t.child):(Mi(e,t,a),$s(e,t,a))}function ks(e,t,n,r,a,o){return ao(t),t.updateQueue=null,n=Ri(t,r,n,a),_i(e),r=Ai(),null===e||us?($a&&r&&_a(t),t.flags|=1,ds(e,t,n,o),t.child):(Mi(e,t,o),$s(e,t,o))}function Ss(e,t,n,r,a){if(ao(t),null===t.stateNode){var o=ca,i=n.contextType;"object"===typeof i&&null!==i&&(o=oo(i)),o=new n(r,o),t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,o.updater=Jl,t.stateNode=o,o._reactInternals=t,(o=t.stateNode).props=r,o.state=t.memoizedState,o.refs={},qo(t),i=n.contextType,o.context="object"===typeof i&&null!==i?oo(i):ca,o.state=t.memoizedState,"function"===typeof(i=n.getDerivedStateFromProps)&&(Yl(t,n,i,r),o.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(i=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),i!==o.state&&Jl.enqueueReplaceState(o,o.state,null),ei(t,r,o,a),Zo(),o.state=t.memoizedState),"function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){o=t.stateNode;var l=t.memoizedProps,s=es(n,l);o.props=s;var c=o.context,u=n.contextType;i=ca,"object"===typeof u&&null!==u&&(i=oo(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof o.getSnapshotBeforeUpdate,l=t.pendingProps!==l,u||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l||c!==i)&&Zl(t,o,r,i),Vo=!1;var p=t.memoizedState;o.state=p,ei(t,r,o,a),Zo(),c=t.memoizedState,l||p!==c||Vo?("function"===typeof d&&(Yl(t,n,d,r),c=t.memoizedState),(s=Vo||Xl(t,n,s,r,p,c,i))?(u||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=i,r=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Go(e,t),u=es(n,i=t.memoizedProps),o.props=u,d=t.pendingProps,p=o.context,c=n.contextType,s=ca,"object"===typeof c&&null!==c&&(s=oo(c)),(c="function"===typeof(l=n.getDerivedStateFromProps)||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(i!==d||p!==s)&&Zl(t,o,r,s),Vo=!1,p=t.memoizedState,o.state=p,ei(t,r,o,a),Zo();var f=t.memoizedState;i!==d||p!==f||Vo||null!==e&&null!==e.dependencies&&ro(e.dependencies)?("function"===typeof l&&(Yl(t,n,l,r),f=t.memoizedState),(u=Vo||Xl(t,n,u,r,p,f,s)||null!==e&&null!==e.dependencies&&ro(e.dependencies))?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,f,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,f,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),o.props=r,o.state=f,o.context=s,r=u):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return o=r,xs(e,t),r=0!==(128&t.flags),o||r?(o=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:o.render(),t.flags|=1,null!==e&&r?(t.child=Bo(t,e.child,null,a),t.child=Bo(t,null,n,a)):ds(e,t,n,a),t.memoizedState=o.state,e=t.child):e=$s(e,t,a),e}function js(e,t,n,r){return qa(),t.flags|=256,ds(e,t,n,r),t.child}var Cs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Es(e){return{baseLanes:e,cachePool:Eo()}}function Ps(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=Hu),e}function Ts(e,t,n){var r,a=t.pendingProps,i=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&mi.current)),r&&(i=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if($a){if(i?ui(t):fi(),(e=Ma)?null!==(e=null!==(e=Tf(e,Fa))&&"&"!==e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==Ta?{id:La,overflow:Na}:null,retryLane:536870912,hydrationErrors:null},(n=ya(e)).return=t,t.child=n,Aa=t,Ma=null):e=null,null===e)throw Ha(t);return Nf(e)?t.lanes=32:t.lanes=536870912,null}return l=a.children,a=a.fallback,i?(fi(),l=Ns({mode:"hidden",children:l},i=t.mode),a=ga(a,i,n,null),l.return=t,a.return=t,l.sibling=a,t.child=l,(a=t.child).memoizedState=Es(n),a.childLanes=Ps(e,r,n),t.memoizedState=Cs,gs(null,a)):(ui(t),Ls(t,l))}var s=e.memoizedState;if(null!==s){var c=s.dehydrated;if(null!==c)return function(e,t,n,r,a,i,l,s){if(n)return 256&t.flags?(ui(t),t.flags&=-257,zs(e,t,s)):null!==t.memoizedState?(fi(),t.child=e.child,t.flags|=128,null):(fi(),i=a.fallback,l=t.mode,a=Ns({mode:"visible",children:a.children},l),(i=ga(i,l,s,null)).flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,Bo(t,e.child,null,s),(a=t.child).memoizedState=Es(s),a.childLanes=Ps(e,r,s),t.memoizedState=Cs,gs(null,a));if(ui(t),Nf(i)){if(r=i.nextSibling&&i.nextSibling.dataset)var c=r.dgst;return""!==(r=c)&&((a=Error(o(419))).stack="",a.digest=r,Ka({value:a,source:null,stack:null})),zs(e,t,s)}if(us||no(e,t,s,!1),r=0!==(s&e.childLanes),us||r){if(null!==ri.current)return zs(e,t,s);if(null!==(r=Lu)&&(0!==(a=Ze(r,s))&&a!==l.retryLane))throw l.retryLane=a,ia(e,a),fd(r,e,a),cs;return Lf(i)||Cd(),zs(e,t,s)}return Lf(i)?(t.flags|=192,t.child=e.child,null):(e=l.treeContext,Ma=zf(i.nextSibling),Aa=t,$a=!0,Ia=null,Fa=!1,null!==e&&Da(t,e),t=Ls(t,a.children),t.flags|=134221824,t)}(e,t,l,r,a,c,s,n)}return i?(fi(),i=a.fallback,l=t.mode,c=(s=e.child).sibling,(a=fa(s,{mode:"hidden",children:a.children})).subtreeFlags=1206910976&s.subtreeFlags,null!==c?i=fa(c,i):(i=ga(i,l,n,null)).flags|=2,i.return=t,a.return=t,a.sibling=i,t.child=a,gs(null,a),a=t.child,null===(i=e.child.memoizedState)?i=Es(n):(null!==(l=i.cachePool)?(s=po._currentValue,l=l.parent!==s?{parent:s,pool:s}:l):l=Eo(),i={baseLanes:i.baseLanes|n,cachePool:l}),a.memoizedState=i,a.childLanes=Ps(e,r,n),t.memoizedState=Cs,gs(e.child,a)):(ui(t),e=(n=e.child).sibling,(n=fa(n,{mode:"visible",children:a.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Ls(e,t){return(t=Ns({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Ns(e,t){return(e=da(22,e,null,t)).lanes=0,e}function zs(e,t,n){return Bo(t,e.child,null,n),(e=Ls(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Os(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),eo(e.return,t,n)}function _s(e){for(var t=null;null!==e;){var n=e.alternate;null!==n&&null===yi(n)&&(t=e),e=e.sibling}return t}function Rs(e,t,n,r,a,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a,treeForkCount:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a,i.treeForkCount=o)}function Ds(e){var t=e.child;for(e.child=null;null!==t;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function As(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;r=r.children;var i=mi.current;if(128&t.flags)return gi(0,i),null;var l=0!==(2&i);if(l?(i=1&i|2,t.flags|=128):i&=1,gi(0,i),"backwards"===a&&null!==e?(Ds(e),ds(e,t,r,n),Ds(e)):ds(e,t,r,n),r=$a?Ca:0,!l&&null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Os(e,n,t);else if(19===e.tag)Os(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"backwards":null===(n=_s(t.child))?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null,Ds(t)),Rs(t,!0,a,null,o,r);break;case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===yi(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Rs(t,!0,n,null,o,r);break;case"together":Rs(t,!1,null,null,void 0,r);break;case"independent":t.memoizedState=null;break;default:null===(n=_s(t.child))?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Rs(t,!1,a,n,o,r)}return t.child}function Ms(e,t,n){var r=t.pendingProps;return Xa(0,t.type,r.value),ds(e,t,r.children,n),t.child}function $s(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Iu|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(no(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=fa(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=fa(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Is(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!ro(e))}function Fs(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)us=!0;else{if(!Is(e,n)&&0===(128&t.flags))return us=!1,function(e,t,n){switch(t.tag){case 3:de(t,t.stateNode.containerInfo),Xa(0,po,e.memoizedState.cache),qa();break;case 27:case 5:fe(t);break;case 4:de(t,t.stateNode.containerInfo);break;case 10:Xa(0,t.type,t.memoizedProps.value);break;case 31:if(null!==t.memoizedState)return t.flags|=128,di(t),null;break;case 13:var r=t.memoizedState;if(null!==r){if(null!==r.dehydrated)return ui(t),t.flags|=128,null;r=no(e,t,n,!1);var a=t.child.childLanes;return r||0!==(n&a)?Ts(e,t,n):(ui(t),null!==(e=$s(e,t,n))?e.sibling:null)}ui(t);break;case 19:if(128&t.flags)return As(e,t,n);if(a=0!==(128&e.flags),(r=0!==(n&t.childLanes))||(no(e,t,n,!1),r=0!==(n&t.childLanes)),a){if(r)return As(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),gi(0,mi.current),r)break;return null;case 22:return t.lanes=0,ms(e,t,n,t.pendingProps);case 24:Xa(0,po,e.memoizedState.cache)}return $s(e,t,n)}(e,t,n);us=0!==(131072&e.flags)}else us=!1,$a&&0!==(1048576&t.flags)&&Oa(t,Ca,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=_o(t.elementType),t.type=e,"function"!==typeof e){if(void 0!==e&&null!==e){var a=e.$$typeof;if(a===A){t.tag=11,t=ps(null,t,e,r,n);break e}if(a===I){t.tag=14,t=fs(null,t,e,r,n);break e}if(a===D){t.tag=10,t.type=e,t=Ms(null,t,n);break e}}throw t=Q(e)||e,Error(o(306,t,""))}pa(e)?(r=es(e,r),t.tag=1,t=Ss(null,t,e,r,n)):(t.tag=0,t=ws(null,t,e,r,n))}return t;case 0:return ws(e,t,t.type,t.pendingProps,n);case 1:return Ss(e,t,r=t.type,a=es(r,t.pendingProps),n);case 3:e:{if(de(t,t.stateNode.containerInfo),null===e)throw Error(o(387));r=t.pendingProps;var i=t.memoizedState;a=i.element,Go(e,t),ei(t,r,null,n);var l=t.memoizedState;if(r=l.cache,Xa(0,po,r),r!==i.cache&&to(t,[po],n,!0),Zo(),r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=js(e,t,r,n);break e}if(r!==a){Ka(a=wa(Error(o(424)),t)),t=js(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(Ma=zf(e.firstChild),Aa=t,$a=!0,Ia=null,Fa=!0,n=Wo(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|134221824,n=n.sibling}else{if(qa(),r===a){t=$s(e,t,n);break e}ds(e,t,r,n)}t=t.child}return t;case 26:return xs(e,t),null===e?(n=Wf(t.type,null,t.pendingProps,null))?t.memoizedState=n:$a||(t.stateNode=Fp(t.type,t.pendingProps,ce.current,t)):t.memoizedState=Wf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return fe(t),null===e&&$a&&(r=t.stateNode=Df(t.type,t.pendingProps,ce.current),Aa=t,Fa=!0,a=Ma,Qp(t.type)?(Of=a,Ma=zf(r.firstChild)):Ma=a),ds(e,t,t.pendingProps.children,n),xs(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&$a&&((a=r=Ma)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[pt])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(o=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(o!==a.rel||e.getAttribute("href")!==(null==a.href||""===a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((o=e.getAttribute("src"))!==(null==a.src?null:a.src)||e.getAttribute("type")!==(null==a.type?null:a.type)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var o=null==a.name?null:""+a.name;if("hidden"===a.type&&e.getAttribute("name")===o)return e}if(null===(e=zf(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,Fa))?(t.stateNode=r,Aa=t,Ma=zf(r.firstChild),Fa=!1,a=!0):a=!1),a||Ha(t)),fe(t),a=t.type,i=t.pendingProps,l=null!==e?e.memoizedProps:null,r=i.children,Up(a,i)?r=null:null!==l&&Up(a,l)&&(t.flags|=32),null!==t.memoizedState&&(a=Oi(e,t,Di,null,null,n),hh._currentValue=a),xs(e,t),ds(e,t,r,n),t.child;case 6:return null===e&&$a&&((e=n=Ma)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=zf(e.nextSibling)))return null}return e}(n,t.pendingProps,Fa))?(t.stateNode=n,Aa=t,Ma=null,e=!0):e=!1),e||Ha(t)),null;case 13:return Ts(e,t,n);case 4:return de(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Bo(t,null,r,n):ds(e,t,r,n),t.child;case 11:return ps(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,xs(e,t),ds(e,t,r,n),t.child;case 8:case 12:return ds(e,t,t.pendingProps.children,n),t.child;case 10:return Ms(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,ao(t),r=r(a=oo(a)),t.flags|=1,ds(e,t,r,n),t.child;case 14:return fs(e,t,t.type,t.pendingProps,n);case 15:return hs(e,t,t.type,t.pendingProps,n);case 19:return As(e,t,n);case 31:return function(e,t,n){var r=t.pendingProps,a=0!==(128&t.flags);if(t.flags&=-129,null===e){if($a){if("hidden"===r.mode)return e=ys(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},gs(null,e);if(di(t),(e=Ma)?null!==(e=null!==(e=Tf(e,Fa))&&"&"===e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==Ta?{id:La,overflow:Na}:null,retryLane:536870912,hydrationErrors:null},(n=ya(e)).return=t,t.child=n,Aa=t,Ma=null):e=null,null===e)throw Ha(t);return t.lanes=536870912,null}return ys(t,r)}var i=e.memoizedState;if(null!==i){var l=i.dehydrated;if(di(t),a)if(256&t.flags)t.flags&=-257,t=bs(e,t,n);else{if(null===t.memoizedState)throw Error(o(558));t.child=e.child,t.flags|=128,t=null}else if(us||no(e,t,n,!1),a=0!==(n&e.childLanes),us||a){if(null===ri.current){if(null!==(r=Lu)&&0!==(l=Ze(r,n))&&l!==i.retryLane)throw i.retryLane=l,ia(e,l),fd(r,e,l),cs;Cd()}t=bs(e,t,n)}else e=i.treeContext,Ma=zf(l.nextSibling),Aa=t,$a=!0,Ia=null,Fa=!1,null!==e&&Da(t,e),(t=ys(t,r)).flags|=134221824;return t}return(e=fa(e.child,{mode:r.mode,children:r.children})).ref=t.ref,t.child=e,e.return=t,e}(e,t,n);case 22:return ms(e,t,n,t.pendingProps);case 24:return ao(t),r=oo(po),null===e?(null===(a=jo())&&(a=Lu,i=fo(),a.pooledCache=i,i.refCount++,null!==i&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:r,cache:a},qo(t),Xa(0,po,a)):(0!==(e.lanes&n)&&(Go(e,t),ei(t,null,null,n),Zo()),a=e.memoizedState,i=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=a),Xa(0,po,r)):(r=i.cache,Xa(0,po,r),r!==a.cache&&to(t,[po],n,!0))),ds(e,t,t.pendingProps.children,n),t.child;case 30:return null===t.stateNode&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),null!=(r=t.pendingProps).name&&"auto"!==r.name?t.flags|=null===e?18882560:18874368:$a&&_a(t),null!==e&&e.memoizedProps.name!==r.name?t.flags|=4194816:xs(e,t),ds(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Us(e){e.flags|=4}function Hs(e,t,n,r,a){var o;if((o=0!==(32&e.mode))&&(o=null===n?rh(t,r):rh(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),o){if(e.flags|=16777216,(335544128&a)===a)if(e.stateNode.complete)e.flags|=8192;else{if(!kd())throw Ro=No,To;e.flags|=8192}}else e.flags&=-16777217}function Bs(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!ah(t)){if(!kd())throw Ro=No,To;e.flags|=8192}}function Ws(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Ke():536870912,e.lanes|=t,Bu|=t)}function Vs(e,t){if(!$a)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null}}function qs(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=1206910976&a.subtreeFlags,r|=1206910976&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gs(e,t,n){var r=t.pendingProps;switch(Ra(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return qs(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Za(po),pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(Va(t)?Us(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,Ga())),qs(t),null;case 26:var a=t.type,i=t.memoizedState;return null===e?(Us(t),null!==i?(qs(t),Bs(t,i)):(qs(t),Hs(t,a,null,r,n))):i?i!==e.memoizedState?(Us(t),qs(t),Bs(t,i)):(qs(t),t.flags&=-16777217):((e=e.memoizedProps)!==r&&Us(t),qs(t),Hs(t,a,e,r,n)),null;case 27:if(he(t),n=ce.current,a=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Us(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return qs(t),t.subtreeFlags&=-33554433,null}e=le.current,Va(t)?Ba(t):(e=Df(a,r,n),t.stateNode=e,Us(t))}return qs(t),t.subtreeFlags&=-33554433,null;case 5:if(he(t),a=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Us(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return qs(t),t.subtreeFlags&=-33554433,null}if(i=le.current,Va(t))Ba(t);else{var l=Mp(ce.current);switch(i){case 1:i=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":(i=l.createElement("div")).innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i="string"===typeof r.is?l.createElement("select",{is:r.is}):l.createElement("select"),r.multiple?i.multiple=!0:r.size&&(i.size=r.size);break;default:i="string"===typeof r.is?l.createElement(a,{is:r.is}):l.createElement(a)}}i[ot]=t,i[it]=r;e:for(l=t.child;null!==l;){if(5===l.tag||6===l.tag)i.appendChild(l.stateNode);else if(4!==l.tag&&27!==l.tag&&null!==l.child){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;null===l.sibling;){if(null===l.return||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=i;e:switch(Op(i,a,r),a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Us(t)}}return qs(t),t.subtreeFlags&=-33554433,Hs(t,t.type,null===e?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Us(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(e=ce.current,Va(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(a=Aa))switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ot]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Lp(e.nodeValue,n)))||Ha(t,!0)}else(e=Mp(e).createTextNode(r))[ot]=t,t.stateNode=e}return qs(t),null;case 31:if(n=t.memoizedState,null===e||null!==e.memoizedState){if(r=Va(t),null!==n){if(null===e){if(!r)throw Error(o(318));if(!(e=null!==(e=t.memoizedState)?e.dehydrated:null))throw Error(o(557));e[ot]=t}else qa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;qs(t),e=!1}else n=Ga(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return 256&t.flags?(hi(t),t):(hi(t),null);if(0!==(128&t.flags))throw Error(o(558))}return qs(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(a=Va(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[ot]=t}else qa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;qs(t),a=!1}else a=Ga(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return 256&t.flags?(hi(t),t):(hi(t),null)}return hi(t),0!==(128&t.flags)?(t.lanes=n,t):(n=null!==r,e=null!==e&&null!==e.memoizedState,n&&(a=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(a=r.alternate.memoizedState.cachePool.pool),i=null,null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(i=r.memoizedState.cachePool.pool),i!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ws(t,t.updateQueue),qs(t),null);case 4:return pe(),null===e&&bp(t.stateNode.containerInfo),t.flags|=67108864,qs(t),null;case 10:return Za(t.type),qs(t),null;case 19:if(vi(t),null===(r=t.memoizedState))return qs(t),null;if(a=0!==(128&t.flags),null===(i=r.rendering))if(a)Vs(r,!1);else{if(0!==$u||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(i=yi(e))){for(t.flags|=128,Vs(r,!1),e=i.updateQueue,t.updateQueue=e,Ws(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)ha(n,e),n=n.sibling;return gi(0,1&mi.current|2),$a&&za(t,r.treeForkCount),t.child}e=e.sibling}null!==r.tail&&Ce()>Qu&&(t.flags|=128,a=!0,Vs(r,!1),t.lanes=4194304)}else{if(!a)if(null!==(e=yi(i))){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ws(t,e),Vs(r,!0),null===r.tail&&"collapsed"!==r.tailMode&&"visible"!==r.tailMode&&!i.alternate&&!$a)return qs(t),null}else 2*Ce()-r.renderingStartTime>Qu&&536870912!==n&&(t.flags|=128,a=!0,Vs(r,!1),t.lanes=4194304);r.isBackwards?(i.sibling=t.child,t.child=i):(null!==(e=r.last)?e.sibling=i:t.child=i,r.last=i)}if(null!==r.tail){e:{for(n=e=r.tail;null!==n;){if(null!==n.alternate){n=!1;break e}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ce(),e.sibling=null,i=mi.current,i=a?1&i|2:1&i,"visible"===r.tailMode||"collapsed"===r.tailMode||!n||$a?gi(0,i):(n=i,ae(si,t),ae(mi,n),null===ci&&(ci=t)),$a&&za(t,r.treeForkCount),e}return qs(t),null;case 22:case 23:return hi(t),li(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(qs(t),6&t.subtreeFlags&&(t.flags|=8192)):qs(t),null!==(n=t.updateQueue)&&Ws(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&re(So),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Za(po),qs(t),null;case 25:return null;case 30:return t.flags|=33554432,qs(t),null}throw Error(o(156,t.tag))}function Ks(e,t){switch(Ra(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Za(po),pe(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return he(t),null;case 31:if(null!==t.memoizedState){if(hi(t),null===t.alternate)throw Error(o(340));qa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 13:if(hi(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));qa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return vi(t),65536&(e=t.flags)?(t.flags=-65537&e|128,null!==(e=t.memoizedState)&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return pe(),null;case 10:return Za(t.type),null;case 22:case 23:return hi(t),li(),null!==e&&re(So),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return Za(po),null;default:return null}}function Qs(e,t){switch(Ra(t),t.tag){case 3:Za(po),pe();break;case 26:case 27:case 5:he(t);break;case 4:pe();break;case 31:null!==t.memoizedState&&hi(t);break;case 13:hi(t);break;case 19:vi(t);break;case 10:Za(t.type);break;case 22:case 23:hi(t),li(),null!==e&&re(So);break;case 24:Za(po)}}function Ys(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var o=n.create,i=n.inst;r=o(),i.destroy=r}n=n.next}while(n!==a)}}catch(l){Wd(t,t.return,l)}}function Js(e,t,n){try{var r=t.updateQueue,a=null!==r?r.lastEffect:null;if(null!==a){var o=a.next;r=o;do{if((r.tag&e)===e){var i=r.inst,l=i.destroy;if(void 0!==l){i.destroy=void 0,a=t;var s=n,c=l;try{c()}catch(u){Wd(a,s,u)}}}r=r.next}while(r!==o)}}catch(u){Wd(t,t.return,u)}}function Xs(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{ni(t,n)}catch(r){Wd(e,e.return,r)}}}function Zs(e,t,n){n.props=es(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){Wd(e,t,r)}}function ec(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var a=e.stateNode,o=Yr(e.memoizedProps,a);null!==a.ref&&a.ref.name===o||(a.ref=of(o)),r=a.ref;break;case 7:if(null===e.stateNode){var i=new lf(e);m(e.child,!1,Sf,i,void 0,void 0),e.stateNode=i}r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(l){Wd(e,t,l)}}function tc(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(a){Wd(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(o){Wd(e,t,o)}else n.current=null}function nc(e,t){if((5===e.tag||27===e.tag||6===e.tag)&&null===e.alternate&&null!==t)for(var n=0;n<t.length;n++)Cf(e.stateNode,t[n])}function rc(e){for(var t=e.return;null!==t&&(ic(t)&&Cf(e.stateNode,t.stateNode),!oc(t));)t=t.return}function ac(e){for(var t=e.return;null!==t&&(ic(t)&&Ef(e.stateNode,t.stateNode),!oc(t));)t=t.return}function oc(e){return 5===e.tag||3===e.tag||27===e.tag}function ic(e){return e&&7===e.tag&&null!==e.stateNode}function lc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){Wd(e,e.return,a)}}function sc(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,l=null,s=null,c=null,u=null,d=null;for(h in n){var p=n[h];if(n.hasOwnProperty(h)&&null!=p)switch(h){case"checked":case"value":break;case"defaultValue":c=p;default:r.hasOwnProperty(h)||Np(e,t,h,null,r,p)}}for(var f in r){var h=r[f];if(p=n[f],r.hasOwnProperty(f)&&(null!=h||null!=p))switch(f){case"type":h!==p&&(Tt=!0),i=h;break;case"name":h!==p&&(Tt=!0),a=h;break;case"checked":h!==p&&(Tt=!0),u=h;break;case"defaultChecked":h!==p&&(Tt=!0),d=h;break;case"value":h!==p&&(Tt=!0),l=h;break;case"defaultValue":h!==p&&(Tt=!0),s=h;break;case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(o(137,t));break;default:h!==p&&Np(e,t,f,h,r,p)}}return void It(e,l,s,c,u,d,i,a);case"select":for(i in h=l=s=f=null,n)if(c=n[i],n.hasOwnProperty(i)&&null!=c)switch(i){case"value":break;case"multiple":h=c;default:r.hasOwnProperty(i)||Np(e,t,i,null,r,c)}for(a in r)if(i=r[a],c=n[a],r.hasOwnProperty(a)&&(null!=i||null!=c))switch(a){case"value":i!==c&&(Tt=!0),f=i;break;case"defaultValue":i!==c&&(Tt=!0),s=i;break;case"multiple":i!==c&&(Tt=!0),l=i;default:i!==c&&Np(e,t,a,i,r,c)}return t=s,n=l,r=h,void(null!=f?Ht(e,!!n,f,!1):!!r!==!!n&&(null!=t?Ht(e,!!n,t,!0):Ht(e,!!n,n?[]:"",!1)));case"textarea":for(s in h=f=null,n)if(a=n[s],n.hasOwnProperty(s)&&null!=a&&!r.hasOwnProperty(s))switch(s){case"value":case"children":break;default:Np(e,t,s,null,r,a)}for(l in r)if(a=r[l],i=n[l],r.hasOwnProperty(l)&&(null!=a||null!=i))switch(l){case"value":a!==i&&(Tt=!0),f=a;break;case"defaultValue":a!==i&&(Tt=!0),h=a;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=a)throw Error(o(91));break;default:a!==i&&Np(e,t,l,a,r,i)}return void Bt(e,f,h);case"option":for(var m in n)if(f=n[m],n.hasOwnProperty(m)&&null!=f&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else Np(e,t,m,null,r,f);for(c in r)if(f=r[c],h=n[c],r.hasOwnProperty(c)&&f!==h&&(null!=f||null!=h))if("selected"===c)f!==h&&(Tt=!0),e.selected=f&&"function"!==typeof f&&"symbol"!==typeof f;else Np(e,t,c,f,r,h);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)f=n[g],n.hasOwnProperty(g)&&null!=f&&!r.hasOwnProperty(g)&&Np(e,t,g,null,r,f);for(u in r)if(f=r[u],h=n[u],r.hasOwnProperty(u)&&f!==h&&(null!=f||null!=h))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(o(137,t));break;default:Np(e,t,u,f,r,h)}return;default:if(Qt(t)){for(var v in n)f=n[v],n.hasOwnProperty(v)&&void 0!==f&&!r.hasOwnProperty(v)&&zp(e,t,v,void 0,r,f);for(d in r)f=r[d],h=n[d],!r.hasOwnProperty(d)||f===h||void 0===f&&void 0===h||zp(e,t,d,f,r,h);return}}for(var y in n)f=n[y],n.hasOwnProperty(y)&&null!=f&&!r.hasOwnProperty(y)&&Np(e,t,y,null,r,f);for(p in r)f=r[p],h=n[p],!r.hasOwnProperty(p)||f===h||null==f&&null==h||Np(e,t,p,f,r,h)}(r,e.type,n,t),r[it]=t}catch(a){Wd(e,e.return,a)}}function cc(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&Qp(e.type)||4===e.tag}function uc(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||cc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&Qp(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function dc(e,t,n,r){var a=e.tag;if(5===a||6===a)a=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(a,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(a),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zt)),nc(e,r),Tt=!0;else if(4!==a&&(27===a&&(nc(e,r),r=null,Qp(e.type)&&(n=e.stateNode,t=null)),null!==(e=e.child)))for(dc(e,t,n,r),e=e.sibling;null!==e;)dc(e,t,n,r),e=e.sibling}function pc(e,t,n,r){var a=e.tag;if(5===a||6===a)a=e.stateNode,t?n.insertBefore(a,t):n.appendChild(a),nc(e,r),Tt=!0;else if(4!==a&&(27===a&&(nc(e,r),r=null,Qp(e.type)&&(n=e.stateNode)),null!==(e=e.child)))for(pc(e,t,n,r),e=e.sibling;null!==e;)pc(e,t,n,r),e=e.sibling}function fc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Op(t,r,n),t[ot]=e,t[it]=n}catch(o){Wd(e,e.return,o)}}var hc=!1,mc=null;function gc(e){30!==e.tag&&0===(33554432&e.subtreeFlags)||(hc=!0)}var vc=null;function yc(){var e=vc;return vc=null,e}var bc=0;function xc(e,t,n,r,a){return bc=0,wc(e.child,t,n,r,a)}function wc(e,t,n,r,a){for(var o=!1;null!==e;){if(5===e.tag){var i=e.stateNode;if(null!==r){var l=tf(i);r.push(l),l.view&&(o=!0)}else o||tf(i).view&&(o=!0);hc=!0,Xp(i,0===bc?t:t+"_"+bc,n),bc++}else 22===e.tag&&null!==e.memoizedState||30===e.tag&&a||wc(e.child,t,n,r,a)&&(o=!0);e=e.sibling}return o}function kc(e,t){for(;null!==e;)5===e.tag?Zp(e.stateNode,e.memoizedProps):22===e.tag&&null!==e.memoizedState||30===e.tag&&t||kc(e.child,t),e=e.sibling}function Sc(e){if(0!==(18874368&e.subtreeFlags))for(e=e.child;null!==e;){if((22!==e.tag||null===e.memoizedState)&&(Sc(e),30===e.tag&&0!==(18874368&e.flags)&&e.stateNode.paired)){var t=e.memoizedProps;if(null==t.name||"auto"===t.name)throw Error(o(544));var n=t.name;"none"!==(t=Xr(t.default,t.share))&&(xc(e,n,t,null,!1)||kc(e.child,!1))}e=e.sibling}}function jc(e,t){if(30===e.tag){var n=e.stateNode,r=e.memoizedProps,a=Yr(r,n),o=Xr(r.default,n.paired?r.share:r.enter);"none"!==o?xc(e,a,o,null,!1)?(Sc(e),n.paired||t||pd(e,r.onEnter)):kc(e.child,!1):Sc(e)}else if(0!==(33554432&e.subtreeFlags))for(e=e.child;null!==e;)jc(e,t),e=e.sibling;else Sc(e)}function Cc(e){if(null!==mc&&0!==mc.size){var t=mc;if(0!==(18874368&e.subtreeFlags))for(e=e.child;null!==e;){if(22!==e.tag||null===e.memoizedState){if(30===e.tag&&0!==(18874368&e.flags)){var n=e.memoizedProps,r=n.name;if(null!=r&&"auto"!==r){var a=t.get(r);if(void 0!==a){var o=Xr(n.default,n.share);if("none"!==o&&(xc(e,r,o,null,!1)?(o=e.stateNode,a.paired=o,o.paired=a,pd(e,n.onShare)):kc(e.child,!1)),t.delete(r),0===t.size)break}}}Cc(e)}e=e.sibling}}}function Ec(e){if(30===e.tag){var t=e.memoizedProps,n=Yr(t,e.stateNode),r=null!==mc?mc.get(n):void 0,a=Xr(t.default,void 0!==r?t.share:t.exit);"none"!==a&&(xc(e,n,a,null,!1)?void 0!==r?(a=e.stateNode,r.paired=a,a.paired=r,mc.delete(n),pd(e,t.onShare)):pd(e,t.onExit):kc(e.child,!1)),null!==mc&&Cc(e)}else if(0!==(33554432&e.subtreeFlags))for(e=e.child;null!==e;)Ec(e),e=e.sibling;else null!==mc&&Cc(e)}function Pc(e){for(e=e.child;null!==e;){if(30===e.tag){var t=e.memoizedProps,n=Yr(t,e.stateNode);t=Xr(t.default,t.update),e.flags&=-5,"none"!==t&&xc(e,n,t,e.memoizedState=[],!1)}else 0!==(33554432&e.subtreeFlags)&&Pc(e);e=e.sibling}}function Tc(e){if(0!==(18874368&e.subtreeFlags))for(e=e.child;null!==e;){if(22!==e.tag||null===e.memoizedState){if(30===e.tag&&0!==(18874368&e.flags)){var t=e.stateNode;null!==t.paired&&(t.paired=null,kc(e.child,!1))}Tc(e)}e=e.sibling}}function Lc(e){if(30===e.tag)e.stateNode.paired=null,kc(e.child,!1),Tc(e);else if(0!==(33554432&e.subtreeFlags))for(e=e.child;null!==e;)Lc(e),e=e.sibling;else Tc(e)}function Nc(e){for(e=e.child;null!==e;)30===e.tag?kc(e.child,!1):0!==(33554432&e.subtreeFlags)&&Nc(e),e=e.sibling}function zc(e,t,n,r,a,o,i){for(var l=!1;null!==t;){if(5===t.tag){var s=t.stateNode;if(null!==o&&bc<o.length){var c,u=o[bc],d=tf(s);if((u.view||d.view)&&(l=!0),c=0===(4&e.flags))if(d.clip)c=!0;else{c=u.rect;var p=d.rect;c=c.y!==p.y||c.x!==p.x||c.height!==p.height||c.width!==p.width}c&&(e.flags|=4),d.abs?d=!u.abs:(u=u.rect,d=d.rect,d=u.height!==d.height||u.width!==d.width),d&&(e.flags|=32)}else e.flags|=32;0!==(4&e.flags)&&Xp(s,0===bc?n:n+"_"+bc,a),l&&0!==(4&e.flags)||(null===vc&&(vc=[]),vc.push(s,0===bc?r:r+"_"+bc,t.memoizedProps)),bc++}else 22===t.tag&&null!==t.memoizedState||(30===t.tag&&i?e.flags|=32&t.flags:zc(e,t.child,n,r,a,o,i)&&(l=!0));t=t.sibling}return l}function Oc(e,t){for(e=e.child;null!==e;){if(30===e.tag){var n=e.memoizedProps,r=e.stateNode,a=Yr(n,r),o=Xr(n.default,n.update);if(t)var i=null===(r=r.clones)?null:r.map(nf);else i=e.memoizedState,e.memoizedState=null;r=e;var l=e.child;bc=0,a=zc(r,l,a,a,o,i,!1),0!==(4&e.flags)&&a&&(t||pd(e,n.onUpdate))}else 0!==(33554432&e.subtreeFlags)&&Oc(e,t);e=e.sibling}}var _c=!1,Rc=!1,Dc=!1,Ac=!1,Mc="function"===typeof WeakSet?WeakSet:Set,$c=null,Ic=!1,Fc=!1,Uc=!1,Hc=!1;function Bc(e){for(;null!==$c;){var t=$c,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&a)&&null!==r){n=void 0,a=r.memoizedProps,r=r.memoizedState;var i=t.stateNode;try{var l=es(t.type,a);n=i.getSnapshotBeforeUpdate(l,r),i.__reactInternalSnapshotBeforeUpdate=n}catch(s){Wd(t,t.return,s)}}break;case 3:if(0!==(1024&a))if(9===(n=(r=t.stateNode.containerInfo).nodeType))Pf(r);else if(1===n)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Pf(r);break;default:r.textContent=""}break;case 30:n&&null!==r&&(n=Yr(r.memoizedProps,r.stateNode),"none"!==(a=Xr((a=t.memoizedProps).default,a.update))&&xc(r,n,a,r.memoizedState=[],!0));break;default:if(0!==(1024&a))throw Error(o(163))}if(null!==(r=t.sibling)){r.return=t.return,$c=r;break}$c=t.return}}function Wc(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:cu(e,n),4&r&&Ys(5,n);break;case 1:if(cu(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(i){Wd(n,n.return,i)}else{var a=es(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){Wd(n,n.return,l)}}64&r&&Xs(n),512&r&&ec(n,n.return);break;case 3:if(cu(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{ni(e,t)}catch(i){Wd(n,n.return,i)}}break;case 27:null===t&&4&r&&fc(n);case 26:case 5:cu(e,n),null===t&&4&r&&lc(n),512&r&&ec(n,n.return);break;case 12:cu(e,n);break;case 31:cu(e,n),4&r&&Zc(e,n);break;case 13:cu(e,n),4&r&&eu(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$~"===e.data)e._reactRetry=t;else if("$?"!==e.data||"loading"!==n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=Kd.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||_c)){var o=null!==t&&null!==t.memoizedState||Rc;t=_c,a=Rc,_c=r,(Rc=o)&&!a?(r=2,0!==(8772&n.subtreeFlags)&&(r|=1),du(e,n,r)):cu(e,n),_c=t,Rc=a}break;case 30:cu(e,n),512&r&&ec(n,n.return);break;case 7:512&r&&ec(n,n.return);default:cu(e,n)}}function Vc(e,t){for(e=e.child;null!==e;)qc(e,t),e=e.sibling}function qc(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;"function"===typeof r.setProperty?r.setProperty("display","none","important"):r.display="none"}else{var a=e.stateNode,o=e.memoizedProps.style,i=void 0!==o&&null!==o&&o.hasOwnProperty("display")?o.display:null;a.style.display=null==i||"boolean"===typeof i?"":(""+i).trim()}}catch(s){Wd(e,e.return,s)}Gc(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,Tt=!0}catch(s){Wd(e,e.return,s)}break;case 18:try{var l=e.stateNode;t?Jp(l,!0):Jp(e.stateNode,!1)}catch(s){Wd(e,e.return,s)}break;case 22:case 23:null===e.memoizedState&&Vc(e,t);break;default:Vc(e,t)}}function Gc(e,t){if(67108864&e.subtreeFlags)for(e=e.child;null!==e;){e:{var n=e,r=t;switch(n.tag){case 4:qc(n,r);break e;case 22:null===n.memoizedState&&Gc(n,r);break e;default:Gc(n,r)}}e=e.sibling}}function Kc(e){var t=e.alternate;null!==t&&(e.alternate=null,Kc(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&ht(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qc=null,Yc=!1;function Jc(e,t,n){for(n=n.child;null!==n;)Xc(e,t,n),n=n.sibling}function Xc(e,t,n){if(De&&"function"===typeof De.onCommitFiberUnmount)try{De.onCommitFiberUnmount(Re,n)}catch(o){}switch(n.tag){case 26:Rc||tc(n,t),Jc(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Rc&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:Rc||tc(n,t),ac(n);var r=Qc,a=Yc;Qp(n.type)&&(Qc=n.stateNode,Yc=!1),Jc(e,t,n),Af(n.stateNode,n.type,n.memoizedProps),Qc=r,Yc=a;break;case 5:Rc||tc(n,t),ac(n);case 6:if(6===n.tag&&ac(n),r=Qc,a=Yc,Qc=null,Jc(e,t,n),Yc=a,null!==(Qc=r))if(Yc)try{(9===Qc.nodeType?Qc.body:"HTML"===Qc.nodeName?Qc.ownerDocument.body:Qc).removeChild(n.stateNode),Tt=!0}catch(i){Wd(n,t,i)}else try{Qc.removeChild(n.stateNode),Tt=!0}catch(i){Wd(n,t,i)}break;case 18:null!==Qc&&(Yc?(Yp(9===(e=Qc).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Kh(e)):Yp(Qc,n.stateNode));break;case 4:r=Qc,a=Yc,Qc=n.stateNode.containerInfo,Yc=!0,Jc(e,t,n),Qc=r,Yc=a;break;case 0:case 11:case 14:case 15:Js(2,n,t),Rc||Js(4,n,t),Jc(e,t,n);break;case 1:Rc||(tc(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&Zs(n,t,r)),Jc(e,t,n);break;case 21:Jc(e,t,n);break;case 22:Rc=(r=Rc)||null!==n.memoizedState,Jc(e,t,n),Rc=r;break;case 30:tc(n,t),Jc(e,t,n);break;case 7:Rc||tc(n,t),Jc(e,t,n);break;default:Jc(e,t,n)}}function Zc(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&null!==(e=e.memoizedState))){e=e.dehydrated;try{Kh(e)}catch(n){Wd(t,t.return,n)}}}function eu(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Kh(e)}catch(n){Wd(t,t.return,n)}}function tu(e,t){var n=function(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Mc),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Mc),t;default:throw Error(o(435,e.tag))}}(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Qd.bind(null,e,t);t.then(r,r)}})}function nu(e,t,n){var r=t.deletions;if(null!==r)for(var a=0;a<r.length;a++){var i=r[a],l=e,s=t,c=s;e:for(;null!==c;){switch(c.tag){case 27:if(Qp(c.type)){Qc=c.stateNode,Yc=!1;break e}break;case 5:Qc=c.stateNode,Yc=!1;break e;case 3:case 4:Qc=c.stateNode.containerInfo,Yc=!0;break e}c=c.return}if(null===Qc)throw Error(o(160));Xc(l,s,i),Qc=null,Yc=!1,null!==(l=i.alternate)&&(l.return=null),i.return=null}if(13886&t.subtreeFlags)for(t=t.child;null!==t;)au(t,e,n),t=t.sibling}var ru=null;function au(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(4&a&&null!==(r=null!==(r=e.updateQueue)?r.events:null))for(var i=0;i<r.length;i++){var l=r[i];l.ref.impl=l.nextImpl}nu(t,e,n),ou(e),4&a&&(Js(3,e,e.return),Ys(3,e),Js(5,e,e.return));break;case 1:nu(t,e,n),ou(e),512&a&&(Rc||null===r||tc(r,r.return)),64&a&&_c&&(null!==(e=e.updateQueue)&&(null!==(t=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?t:n.concat(t))));break;case 26:if(i=ru,nu(t,e,n),ou(e),512&a&&(Rc||null===r||tc(r,r.return)),4&a)if(a=null!==r?r.memoizedState:null,n=e.memoizedState,null===r)if(null===n)if(null===e.stateNode)if(_c)e.stateNode=Fp(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,a=i.ownerDocument||i;t:switch(t){case"title":(!(r=a.getElementsByTagName("title")[0])||r[pt]||r[ot]||"http://www.w3.org/2000/svg"===r.namespaceURI||r.hasAttribute("itemprop"))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector("head > title"))),Op(r,t,n),r[ot]=e,bt(r),t=r;break e;case"link":if(i=th("link","href",a).get(t+(n.href||"")))for(l=0;l<i.length;l++)if((r=i[l]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&r.getAttribute("rel")===(null==n.rel?null:n.rel)&&r.getAttribute("title")===(null==n.title?null:n.title)&&r.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){i.splice(l,1);break t}Op(r=a.createElement(t),t,n),a.head.appendChild(r);break;case"meta":if(i=th("meta","content",a).get(t+(n.content||"")))for(l=0;l<i.length;l++)if((r=i[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&r.getAttribute("name")===(null==n.name?null:n.name)&&r.getAttribute("property")===(null==n.property?null:n.property)&&r.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&r.getAttribute("charset")===(null==n.charSet?null:n.charSet)){i.splice(l,1);break t}Op(r=a.createElement(t),t,n),a.head.appendChild(r);break;default:throw Error(o(468,t))}r[ot]=e,bt(r),t=r}e.stateNode=t}else _c||nh(i,e.type,e.stateNode);else e.stateNode=Yf(i,n,e.memoizedProps);else a!==n?(null===a?null===(t=r.stateNode)||Rc||t.parentNode.removeChild(t):a.count--,null===n?_c||nh(i,e.type,e.stateNode):Yf(i,n,e.memoizedProps)):null===n&&null!==e.stateNode&&sc(e,e.memoizedProps,r.memoizedProps);break;case 27:nu(t,e,n),ou(e),512&a&&(Rc||null===r||tc(r,r.return)),null!==r&&4&a&&sc(e,e.memoizedProps,r.memoizedProps);break;case 5:if(i=Dc,Dc=!1,nu(t,e,n),Dc=i,ou(e),512&a&&(Rc||null===r||tc(r,r.return)),32&e.flags){t=e.stateNode;try{Vt(t,""),Tt=!0}catch(d){Wd(e,e.return,d)}}4&a&&null!=e.stateNode&&sc(e,t=e.memoizedProps,null!==r?r.memoizedProps:t),1024&a&&(Ac=!0);break;case 6:if(nu(t,e,n),ou(e),4&a){if(null===e.stateNode)throw Error(o(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Tt=!0}catch(d){Wd(e,e.return,d)}}break;case 3:if(Tt=!1,eh=null,i=ru,ru=Ff(t.containerInfo),nu(t,e,n),ru=i,ou(e),4&a&&null!==r&&r.memoizedState.isDehydrated)try{Kh(t.containerInfo)}catch(d){Wd(e,e.return,d)}Ac&&(Ac=!1,iu(e)),Tt=!1;break;case 4:a=Dc,Dc=_c,r=Lt(),i=ru,ru=Ff(e.stateNode.containerInfo),nu(t,e,n),ou(e),ru=i,Tt&&Fc&&(Uc=!0),Tt=r,Dc=a;break;case 12:nu(t,e,n),ou(e);break;case 31:nu(t,e,n),ou(e),4&a&&(null!==(t=e.updateQueue)&&(e.updateQueue=null,tu(e,t)));break;case 13:nu(t,e,n),ou(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==r&&null!==r.memoizedState)&&(Gu=Ce()),4&a&&(null!==(t=e.updateQueue)&&(e.updateQueue=null,tu(e,t)));break;case 22:i=null!==e.memoizedState,l=null!==r&&null!==r.memoizedState;var s=_c,c=Rc,u=Dc;_c=s||i,Dc=u||i,Rc=c||l,nu(t,e,n),Rc=c,Dc=u,_c=s,ou(e),8192&a&&((t=e.stateNode)._visibility=i?-2&t._visibility:1|t._visibility,!i||null===r||l||_c||Rc||(n=_c,r=Rc,_c=i||_c,Rc=t=l||Rc,uu(e,2),_c=n,Rc=r),!i&&Dc||Vc(e,i)),4&a&&(null!==(t=e.updateQueue)&&(null!==(n=t.retryQueue)&&(t.retryQueue=null,tu(e,n))));break;case 19:nu(t,e,n),ou(e),4&a&&(null!==(t=e.updateQueue)&&(e.updateQueue=null,tu(e,t)));break;case 30:512&a&&(Rc||null===r||tc(r,r.return)),a=Lt(),i=Fc,l=(335544064&n)===n,s=e.memoizedProps,Fc=l&&"none"!==Xr(s.default,s.update),nu(t,e,n),ou(e),l&&null!==r&&Tt&&(e.flags|=4),Fc=i,Tt=a;break;case 21:break;case 7:512&a&&(Rc||null===r||tc(r,r.return)),r&&null!==r.stateNode&&(r.stateNode._fragmentFiber=e);default:nu(t,e,n),ou(e)}}function ou(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(cc(r)){n=r;break}r=r.return}r=null;for(var a=e.return;null!==a;){if(ic(a)){var i=a.stateNode;null===r?r=[i]:r.push(i)}if(oc(a))break;a=a.return}var l=r;if(null==n)throw Error(o(160));switch(n.tag){case 27:var s=n.stateNode;pc(e,uc(e),s,l);break;case 5:var c=n.stateNode;32&n.flags&&(Vt(c,""),n.flags&=-33),pc(e,uc(e),c,l);break;case 3:case 4:var u=n.stateNode.containerInfo;dc(e,uc(e),u,l);break;default:throw Error(o(161))}}catch(d){Wd(e,e.return,d)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function iu(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;iu(t),5===t.tag&&1024&t.flags&&(t=t.stateNode,Sh=!0,t.reset(),Sh=!1),e=e.sibling}}function lu(e,t){if(9270&t.subtreeFlags)for(t=t.child;null!==t;)su(t,e),t=t.sibling;else Oc(t,!1)}function su(e,t){var n=e.alternate;if(null===n)jc(e,!1);else switch(e.tag){case 3:if(Hc=Ic=!1,yc(),lu(t,e),!Ic&&!Uc){if(null!==(e=vc))for(var r=0;r<e.length;r+=3){n=e[r];var a=e[r+1];Zp(n,e[r+2]),null!==(n=n.ownerDocument.documentElement)&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}null!==(e=9===(e=t.containerInfo).nodeType?e.documentElement:e.ownerDocument.documentElement)&&""===e.style.viewTransitionName&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Hc=!0}vc=null;break;case 5:default:lu(t,e);break;case 4:r=Ic,Ic=!1,lu(t,e),Ic&&(Uc=!0),Ic=r;break;case 22:null===e.memoizedState&&(null!==n.memoizedState?jc(e,!1):lu(t,e));break;case 30:r=Ic,a=yc(),Ic=!1,lu(t,e),Ic&&(e.flags|=4);var o=e.memoizedProps,i=e.stateNode;t=Yr(o,i),i=Yr(n.memoizedProps,i);var l=Xr(o.default,o.update);"none"===l?t=!1:(o=n.memoizedState,n.memoizedState=null,n=e.child,bc=0,t=zc(e,n,t,i,l,o,!0),bc!==(null===o?0:o.length)&&(e.flags|=32)),0!==(4&e.flags)&&t?(pd(e,e.memoizedProps.onUpdate),vc=a):null!==a&&(a.push.apply(a,vc),vc=a),Ic=0!==(32&e.flags)||r}}function cu(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Wc(e,t.alternate,t),t=t.sibling}function uu(e,t){for(e=e.child;null!==e;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Js(4,n,n.return),uu(n,r);break;case 1:tc(n,n.return);var a=n.stateNode;"function"===typeof a.componentWillUnmount&&Zs(n,n.return,a),uu(n,r);break;case 27:0!==(2&r)&&Af(n.stateNode,n.type,n.memoizedProps);case 5:tc(n,n.return),5!==n.tag&&27!==n.tag||ac(n),uu(n,r);break;case 6:ac(n);break;case 26:tc(n,n.return),a=n.stateNode,null!==n.memoizedState||null===a||Rc||a.parentNode.removeChild(a),uu(n,r);break;case 22:null===n.memoizedState&&uu(n,r);break;case 30:tc(n,n.return),uu(n,r);break;case 7:tc(n,n.return);default:uu(n,r)}e=e.sibling}}function du(e,t,n){for(n=0!==(8772&t.subtreeFlags)?n:-2&n,t=t.child;null!==t;){var r=t.alternate,a=e,o=t,i=o.flags,l=0!==(1&n);switch(o.tag){case 0:case 11:case 15:du(a,o,n),Ys(4,o);break;case 1:if(du(a,o,n),"function"===typeof(a=(r=o).stateNode).componentDidMount)try{a.componentDidMount()}catch(u){Wd(r,r.return,u)}if(null!==(a=(r=o).updateQueue)){var s=r.stateNode;try{var c=a.shared.hiddenCallbacks;if(null!==c)for(a.shared.hiddenCallbacks=null,a=0;a<c.length;a++)ti(c[a],s)}catch(u){Wd(r,r.return,u)}}l&&64&i&&Xs(o),ec(o,o.return);break;case 27:0!==(2&n)&&fc(o);case 5:5!==o.tag&&27!==o.tag||rc(o),du(a,o,n),l&&null===r&&4&i&&lc(o),ec(o,o.return);break;case 6:rc(o);break;case 26:s=o.stateNode,null!==o.memoizedState||null===s||_c||nh(Ff(s.ownerDocument),o.type,s),du(a,o,n),l&&null===r&&4&i&&lc(o),ec(o,o.return);break;case 12:du(a,o,n);break;case 31:du(a,o,n),l&&4&i&&Zc(a,o);break;case 13:du(a,o,n),l&&4&i&&eu(a,o);break;case 22:null===o.memoizedState&&du(a,o,n),ec(o,o.return);break;case 30:du(a,o,n),ec(o,o.return);break;case 7:ec(o,o.return);default:du(a,o,n)}t=t.sibling}}function pu(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&ho(n))}function fu(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&ho(e))}function hu(e,t,n,r){var a=(335544064&n)===n;if(t.subtreeFlags&(a?10262:10256))for(t=t.child;null!==t;)mu(e,t,n,r),t=t.sibling;else a&&Nc(t)}function mu(e,t,n,r){var a=(335544064&n)===n;a&&null===t.alternate&&null!==t.return&&null!==t.return.alternate&&Lc(t);var o=t.flags;switch(t.tag){case 0:case 11:case 15:hu(e,t,n,r),2048&o&&Ys(9,t);break;case 1:case 31:case 13:default:hu(e,t,n,r);break;case 3:hu(e,t,n,r),a&&Hc&&("root"===(e=9===(e=e.containerInfo).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e).style.viewTransitionName&&(e.style.viewTransitionName=""),null!==(e=e.ownerDocument.documentElement)&&"none"===e.style.viewTransitionName&&(e.style.viewTransitionName="")),2048&o&&(o=null,null!==t.alternate&&(o=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==o&&(t.refCount++,null!=o&&ho(o)));break;case 12:if(2048&o){hu(e,t,n,r),o=t.stateNode;try{var i=t.memoizedProps,l=i.id,s=i.onPostCommit;"function"===typeof s&&s(l,null===t.alternate?"mount":"update",o.passiveEffectDuration,-0)}catch(c){Wd(t,t.return,c)}}else hu(e,t,n,r);break;case 23:break;case 22:i=t.stateNode,l=t.alternate,null!==t.memoizedState?(a&&null!==l&&null===l.memoizedState&&Lc(l),2&i._visibility?hu(e,t,n,r):vu(e,t)):(a&&null!==l&&null!==l.memoizedState&&Lc(t),2&i._visibility?hu(e,t,n,r):(i._visibility|=2,gu(e,t,n,r,0!==(10256&t.subtreeFlags)||!1))),2048&o&&pu(l,t);break;case 24:hu(e,t,n,r),2048&o&&fu(t.alternate,t);break;case 30:a&&(null!==(o=t.alternate)&&(kc(o.child,!0),kc(t.child,!0))),hu(e,t,n,r)}}function gu(e,t,n,r,a){for(a=a&&(0!==(10256&t.subtreeFlags)||!1),t=t.child;null!==t;){var o=e,i=t,l=n,s=r,c=i.flags;switch(i.tag){case 0:case 11:case 15:gu(o,i,l,s,a),Ys(8,i);break;case 23:break;case 22:var u=i.stateNode;null!==i.memoizedState?2&u._visibility?gu(o,i,l,s,a):vu(o,i):(u._visibility|=2,gu(o,i,l,s,a)),a&&2048&c&&pu(i.alternate,i);break;case 24:gu(o,i,l,s,a),a&&2048&c&&fu(i.alternate,i);break;default:gu(o,i,l,s,a)}t=t.sibling}}function vu(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:vu(n,r),2048&a&&pu(r.alternate,r);break;case 24:vu(n,r),2048&a&&fu(r.alternate,r);break;default:vu(n,r)}t=t.sibling}}var yu=8192;function bu(e,t,n){if(e.subtreeFlags&yu)for(e=e.child;null!==e;)xu(e,t,n),e=e.sibling}function xu(e,t,n){switch(e.tag){case 26:bu(e,t,n),e.flags&yu&&(null!==e.memoizedState?function(e,t,n,r){if("stylesheet"===n.type&&("string"!==typeof r.media||!1!==matchMedia(r.media).matches)&&0===(4&n.state.loading)){if(null===n.instance){var a=Vf(r.href),o=t.querySelector(qf(a));if(o)return null!==(t=o._p)&&"object"===typeof t&&"function"===typeof t.then&&(e.count++,e=ch.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=o,void bt(o);o=t.ownerDocument||t,r=Gf(r),(a=$f.get(a))&&Xf(r,a),bt(o=o.createElement("link"));var i=o;i._p=new Promise(function(e,t){i.onload=e,i.onerror=t}),Op(o,"link",r),n.instance=o}null===e.stylesheets&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&0===(3&n.state.loading)&&(e.count++,n=ch.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}(n,ru,e.memoizedState,e.memoizedProps):(e=e.stateNode,(335544128&t)===t&&ih(n,e)));break;case 5:bu(e,t,n),e.flags&yu&&(e=e.stateNode,(335544128&t)===t&&ih(n,e));break;case 3:case 4:var r=ru;ru=Ff(e.stateNode.containerInfo),bu(e,t,n),ru=r;break;case 22:null===e.memoizedState&&(null!==(r=e.alternate)&&null!==r.memoizedState?(r=yu,yu=16777216,bu(e,t,n),yu=r):bu(e,t,n));break;case 30:if(0!==(e.flags&yu)&&(null!=(r=e.memoizedProps.name)&&"auto"!==r)){var a=e.stateNode;a.paired=null,null===mc&&(mc=new Map),mc.set(r,a)}bu(e,t,n);break;default:bu(e,t,n)}}function wu(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function ku(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];$c=r,Cu(r,e)}wu(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Su(e),e=e.sibling}function Su(e){switch(e.tag){case 0:case 11:case 15:ku(e),2048&e.flags&&Js(9,e,e.return);break;case 3:case 12:default:ku(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,ju(e)):ku(e)}}function ju(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];$c=r,Cu(r,e)}wu(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:Js(8,t,t.return),ju(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,ju(t));break;default:ju(t)}e=e.sibling}}function Cu(e,t){for(;null!==$c;){var n=$c;switch(n.tag){case 0:case 11:case 15:Js(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:ho(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,$c=r;else e:for(n=e;null!==$c;){var a=(r=$c).sibling,o=r.return;if(Kc(r),r===n){$c=null;break e}if(null!==a){a.return=o,$c=a;break e}$c=o}}}var Eu={getCacheForType:function(e){var t=oo(po),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return oo(po).controller.signal}},Pu="function"===typeof WeakMap?WeakMap:Map,Tu=0,Lu=null,Nu=null,zu=0,Ou=0,_u=null,Ru=!1,Du=!1,Au=!1,Mu=0,$u=0,Iu=0,Fu=0,Uu=0,Hu=0,Bu=0,Wu=null,Vu=null,qu=!1,Gu=0,Ku=0,Qu=1/0,Yu=null,Ju=null,Xu=0,Zu=null,ed=null,td=0,nd=0,rd=null,ad=null,od=null,id=null,ld=null,sd=0,cd=null;function ud(){return 0!==(2&Tu)&&0!==zu?zu&-zu:null!==J.T?cp():nt()}function dd(){if(0===Hu)if(0===(536870912&zu)||$a){var e=Ue;0===(3932160&(Ue<<=1))&&(Ue=262144),Hu=e}else Hu=536870912;return null!==(e=si.current)&&(e.flags|=32),Hu}function pd(e,t){if(null!=t){var n=e.stateNode,r=n.ref;null===r&&(r=n.ref=of(Yr(e.memoizedProps,n))),null===id&&(id=[]),id.push(t.bind(null,r))}}function fd(e,t,n){(e!==Lu||2!==Ou&&9!==Ou)&&null===e.cancelPendingCommit||(xd(e,0),vd(e,zu,Hu,!1)),Ye(e,n),0!==(2&Tu)&&e===Lu||(e===Lu&&(0===(2&Tu)&&(Fu|=n),4===$u&&vd(e,zu,Hu,!1)),np(e))}function hd(e,t,n){if(0!==(6&Tu))throw Error(o(327));for(var r=!n&&0===(127&t)&&0===(t&e.expiredLanes)||Ve(e,t),a=r?function(e,t){var n=Tu;Tu|=2;var r=Sd(),a=jd();Lu!==e||zu!==t?(Yu=null,Qu=Ce()+500,xd(e,t)):Du=Ve(e,t);e:for(;;)try{if(0!==Ou&&null!==Nu){t=Nu;var i=_u;t:switch(Ou){case 1:Ou=0,_u=null,zd(e,t,i,1);break;case 2:case 9:if(zo(i)){Ou=0,_u=null,Nd(t);break}t=function(){2!==Ou&&9!==Ou||Lu!==e||(Ou=7),np(e)},i.then(t,t);break e;case 3:Ou=7;break e;case 4:Ou=5;break e;case 7:zo(i)?(Ou=0,_u=null,Nd(t)):(Ou=0,_u=null,zd(e,t,i,7));break;case 5:var l=null;switch(Nu.tag){case 26:l=Nu.memoizedState;case 5:case 27:var s=Nu;if(l?ah(l):s.stateNode.complete){Ou=0,_u=null;var c=s.sibling;if(null!==c)Nu=c;else{var u=s.return;null!==u?(Nu=u,Od(u)):Nu=null}break t}}Ou=0,_u=null,zd(e,t,i,5);break;case 6:Ou=0,_u=null,zd(e,t,i,6);break;case 8:bd(),$u=6;break e;default:throw Error(o(462))}}Td();break}catch(d){wd(e,d)}return Ja=Ya=null,J.H=r,J.A=a,Tu=n,null!==Nu?0:(Lu=null,zu=0,ra(),$u)}(e,t):Ed(e,t,!0),i=r;;){if(0===a){Du&&!r&&vd(e,t,0,!1);break}if(n=e.current.alternate,!i||gd(n)){if(2===a){if(i=t,e.errorRecoveryDisabledLanes&i)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;a=Wu;var c=s.current.memoizedState.isDehydrated;if(c&&(xd(s,l).flags|=256),2!==(l=Ed(s,l,!1))&&6!==l){if(Au&&!c){s.errorRecoveryDisabledLanes|=i,Fu|=i,a=4;break e}i=Vu,Vu=a,null!==i&&(null===Vu?Vu=i:Vu.push.apply(Vu,i))}a=l}if(i=!1,2!==a)continue}}if(1===a){xd(e,0),vd(e,t,0,!0);break}e:{switch(r=e,i=a){case 0:case 1:throw Error(o(345));case 4:if((4194048&t)!==t&&(62914560&t)!==t)break;case 6:vd(r,t,Hu,!Ru);break e;case 2:Vu=null;break;case 3:case 5:break;default:throw Error(o(329))}if((62914560&t)===t&&10<(a=Gu+300-Ce())){if(vd(r,t,Hu,!Ru),0!==We(r,0,!0))break e;td=t,r.timeoutHandle=Bp(md.bind(null,r,n,Vu,Yu,qu,t,Hu,Fu,Bu,Ru,i,"Throttled",-0,0),a)}else md(r,n,Vu,Yu,qu,t,Hu,Fu,Bu,Ru,i,null,-0,0)}break}a=Ed(e,t,!1),i=!1}np(e)}function md(e,t,n,r,a,o,i,l,s,c,u,d,p,f){e.timeoutHandle=-1;var h,m,g=t.subtreeFlags,v=(335544064&o)===o;if(d=null,(v||8192&g||16785408===(16785408&g))&&(mc=null,xu(t,o,d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt}),v&&(g=d,null!=(v=(9===(v=e.containerInfo).nodeType?v:v.ownerDocument).__reactViewTransition)&&(g.count++,g.waitingForViewTransition=!0,g=ch.bind(g),v.finished.then(g,g))),g=(62914560&o)===o?Gu-Ce():(4194048&o)===o?Ku-Ce():0,m=g,(h=d).stylesheets&&0===h.count&&ph(h,h.stylesheets),null!==(g=0<h.count||0<h.imgCount?function(e){var t=setTimeout(function(){if(h.stylesheets&&ph(h,h.stylesheets),h.unsuspend){var e=h.unsuspend;h.unsuspend=null,e()}},6e4+m);0<h.imgBytes&&0===lh&&(lh=62500*function(){if("function"===typeof performance.getEntriesByType){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var a=n[r],o=a.transferSize,i=a.initiatorType,l=a.duration;if(o&&l&&Rp(i)){for(i=0,l=a.responseEnd,r+=1;r<n.length;r++){var s=n[r],c=s.startTime;if(c>l)break;var u=s.transferSize,d=s.initiatorType;u&&Rp(d)&&(i+=u*((s=s.responseEnd)<l?1:(l-c)/(s-c)))}if(--r,t+=8*(o+i)/(a.duration/1e3),10<++e)break}}if(0<e)return t/e/1e6}return navigator.connection&&"number"===typeof(e=navigator.connection.downlink)?e:5}());var n=setTimeout(function(){if(h.waitingForImages=!1,0===h.count&&(h.stylesheets&&ph(h,h.stylesheets),h.unsuspend)){var e=h.unsuspend;h.unsuspend=null,e()}},(h.imgBytes>lh?50:800)+m);return h.unsuspend=e,function(){h.unsuspend=null,clearTimeout(t),clearTimeout(n)}}:null)))return td=o,e.cancelPendingCommit=g(Rd.bind(null,e,t,o,n,r,a,i,l,s,c,u,d,null,p,f)),void vd(e,o,i,!c);Rd(e,t,o,n,r,a,i,l,s,c,u,d)}function gd(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!xr(o(),a))return!1}catch(i){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vd(e,t,n,r){t=qe(e,t),t&=~Uu,t&=~Fu,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var o=31-Me(a),i=1<<o;r[o]=-1,a&=~i}0!==n&&Je(e,n,t)}function yd(){return 0!==(6&Tu)||(rp(0,!1),!1)}function bd(){if(null!==Nu){if(0===Ou)var e=Nu.return;else Ja=Ya=null,$i(e=Nu),Mo=null,$o=0,e=Nu;for(;null!==e;)Qs(e.alternate,e),e=e.return;Nu=null}}function xd(e,t){var n=e.timeoutHandle;return-1!==n&&(e.timeoutHandle=-1,Wp(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),td=0,bd(),Lu=e,Nu=n=fa(e.current,null),zu=t,Ou=0,_u=null,Ru=!1,Du=Ve(e,t),Au=!1,Bu=Hu=Uu=Fu=Iu=$u=0,Vu=Wu=null,qu=!1,Mu=qe(e,t),ra(),n}function wd(e,t){xi=null,J.H=ql,t===Po||t===Lo?(t=Do(),Ou=3):t===To?(t=Do(),Ou=4):Ou=t===cs?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,_u=t,null===Nu&&($u=1,as(e,wa(t,e.current)))}function kd(){var e=si.current;return null===e||((4194048&zu)===zu?null===ci:((62914560&zu)===zu||0!==(536870912&zu))&&e===ci)}function Sd(){var e=J.H;return J.H=ql,null===e?ql:e}function jd(){var e=J.A;return J.A=Eu,e}function Cd(){$u=4,Ru||(4194048&zu)!==zu&&null!==si.current||(Du=!0),0===(134217727&Iu)&&0===(134217727&Fu)||null===Lu||vd(Lu,zu,Hu,!1)}function Ed(e,t,n){var r=Tu;Tu|=2;var a=Sd(),o=jd();Lu===e&&zu===t||(Yu=null,xd(e,t)),t=!1;var i=$u;e:for(;;)try{if(0!==Ou&&null!==Nu){var l=Nu,s=_u;switch(Ou){case 8:bd(),i=6;break e;case 3:case 2:case 9:case 6:null===si.current&&(t=!0);var c=Ou;if(Ou=0,_u=null,zd(e,l,s,c),n&&Du){i=0;break e}break;default:c=Ou,Ou=0,_u=null,zd(e,l,s,c)}}Pd(),i=$u;break}catch(u){wd(e,u)}return t&&e.shellSuspendCounter++,Ja=Ya=null,Tu=r,J.H=a,J.A=o,null===Nu&&(Lu=null,zu=0,ra()),i}function Pd(){for(;null!==Nu;)Ld(Nu)}function Td(){for(;null!==Nu&&!Se();)Ld(Nu)}function Ld(e){var t=Fs(e.alternate,e,Mu);e.memoizedProps=e.pendingProps,null===t?Od(e):Nu=t}function Nd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ks(n,t,t.pendingProps,t.type,void 0,zu);break;case 11:t=ks(n,t,t.pendingProps,t.type.render,t.ref,zu);break;case 5:$i(t);var r=t;r===Aa&&($a?(Wa(r),5===r.tag&&null!=r.stateNode&&(Ma=r.stateNode)):(Wa(r),$a=!0));default:Qs(n,t),t=Fs(n,t=Nu=ha(t,Mu),Mu)}e.memoizedProps=e.pendingProps,null===t?Od(e):Nu=t}function zd(e,t,n,r){Ja=Ya=null,$i(t),Mo=null,$o=0;var a=t.return;try{if(function(e,t,n,r,a){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&no(t,n,a,!0),null!==(n=si.current)){switch(n.tag){case 31:case 13:case 19:return null===ci?Cd():null===n.alternate&&0===$u&&($u=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===No?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),Vd(e,r,a)),!1;case 22:return n.flags|=65536,r===No?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),Vd(e,r,a)),!1}throw Error(o(435,n.tag))}return Vd(e,r,a),Cd(),!1}if($a)return null!==(t=si.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ua&&Ka(wa(e=Error(o(422),{cause:r}),n))):(r!==Ua&&Ka(wa(t=Error(o(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,a&=-a,e.lanes|=a,r=wa(r,n),Jo(e,a=is(e.stateNode,r,a)),4!==$u&&($u=2)),!1;var i=Error(o(520),{cause:r});if(i=wa(i,n),null===Wu?Wu=[i]:Wu.push(i),4!==$u&&($u=2),null===t)return!0;r=wa(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,Jo(n,e=is(n.stateNode,r,e)),!1;case 1:if(t=n.type,i=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==i&&"function"===typeof i.componentDidCatch&&(null===Ju||!Ju.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,ss(a=ls(a),e,n,r),Jo(n,a),!1;break;case 22:if(null!==n.memoizedState)return n.flags|=65536,!1}n=n.return}while(null!==n);return!1}(e,a,t,n,zu))return $u=1,as(e,wa(n,e.current)),void(Nu=null)}catch(i){if(null!==a)throw Nu=a,i;return $u=1,as(e,wa(n,e.current)),void(Nu=null)}32768&t.flags?($a||1===r?e=!0:Du||0!==(536870912&zu)?e=!1:(Ru=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=si.current)&&13===r.tag&&(r.flags|=16384))),_d(t,e)):Od(t)}function Od(e){var t=e;do{if(0!==(32768&t.flags))return void _d(t,Ru);e=t.return;var n=Gs(t.alternate,t,Mu);if(null!==n)return void(Nu=n);if(null!==(t=t.sibling))return void(Nu=t);Nu=t=e}while(null!==t);0===$u&&($u=5)}function _d(e,t){do{var n=Ks(e.alternate,e);if(null!==n)return n.flags&=32767,void(Nu=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(Nu=e);Nu=e=n}while(null!==e);$u=6,Nu=null}function Rd(e,t,n,r,a,i,l,s,c,u,d,p){e.cancelPendingCommit=null;do{Ud()}while(0!==Xu);if(0!==(6&Tu))throw Error(o(327));if(null!==t){if(t===e.current)throw Error(o(177));e===Lu&&(Nu=Lu=null,zu=0),ed=t,Zu=e,td=n,rd=a,ad=r,function(e,t,n,r,a,o,i){var l=t.lanes|t.childLanes;if(nd=l,function(e,t,n,r,a,o){var i=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,c=e.hiddenUpdates;for(n=i&~n;0<n;){var u=31-Me(n),d=1<<u;l[u]=0,s[u]=-1;var p=c[u];if(null!==p)for(c[u]=null,u=0;u<p.length;u++){var f=p[u];null!==f&&(f.lane&=-536870913)}n&=~d}0!==r&&Je(e,r,0),0!==o&&0===a&&0!==e.tag&&(e.suspendedLanes|=o&~(i&~t))}(e,n,l|=na,r,a,o),id=null,(335544064&n)===n?(ld=function(e){var t=e.transitionTypes;return e.transitionTypes=null,t}(e),r=10262):(ld=null,r=10256),0!==(t.subtreeFlags&r)||0!==(t.flags&r)?(e.callbackNode=null,e.callbackPriority=0,function(e,t){we(e,t)}(Le,function(){return Hd(),null})):(e.callbackNode=null,e.callbackPriority=0),hc=!1,r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=J.T,J.T=null,a=X.p,X.p=2,o=Tu,Tu|=4;try{!function(e,t,n){if(e=e.containerInfo,Dp=Sh,Pr(e=Er(e))){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var a=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(a&&0!==a.rangeCount){r=a.anchorNode;var o=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{r.nodeType,i.nodeType}catch(m){r=null;break e}var l=0,s=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==r||0!==o&&3!==p.nodeType||(s=l+o),p!==i||0!==a&&3!==p.nodeType||(c=l+a),3===p.nodeType&&(l+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===r&&++u===o&&(s=l),f===i&&++d===a&&(c=l),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}r=-1===s||-1===c?null:{start:s,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ap={focusedElem:e,selectionRange:r},Sh=!1,$c=t,t=(n=(335544064&n)===n)?9270:1024;null!==$c;){if(e=$c,n&&null!==(r=e.deletions))for(o=0;o<r.length;o++)n&&Ec(r[o]);if(null===e.alternate&&0!==(2&e.flags))n&&gc(e),Bc(n);else{if(22===e.tag){if(r=e.alternate,null!==e.memoizedState){null!==r&&null===r.memoizedState&&n&&Ec(r),Bc(n);continue}if(null!==r&&null!==r.memoizedState){n&&gc(e),Bc(n);continue}}r=e.child,0!==(e.subtreeFlags&t)&&null!==r?(r.return=e,$c=r):(n&&Pc(e),Bc(n))}}mc=null}(e,t,n)}finally{Tu=o,X.p=a,J.T=r}}Xu=1,hc?od=function(e,t,n,r,a,o,i,l,s){var c=9===t.nodeType?t:t.ownerDocument;try{var u=c.startViewTransition({update:function(){var t=c.defaultView,n=t.navigation&&t.navigation.transition,i=c.fonts.status;r();var l=[];if("loaded"===i&&(function(e){e.documentElement.clientHeight}(c),"loading"===c.fonts.status&&l.push(c.fonts.ready)),i=l.length,null!==e)for(var s=e.suspenseyImages,u=0,d=0;d<s.length;d++){var p=s[d];if(!p.complete){var f=p.getBoundingClientRect();if(0<f.bottom&&0<f.right&&f.top<t.innerHeight&&f.left<t.innerWidth){if((u+=oh(p))>lh){l.length=i;break}p=new Promise(rf.bind(p)),l.push(p)}}}return 0<l.length?(t=Promise.race([Promise.all(l),new Promise(function(e){return setTimeout(e,500)})]).then(a,a),(n?Promise.allSettled([n.finished,t]):t).then(o,o)):(a(),n?n.finished.then(o,o):void o())},types:n});c.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=c.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,a=r.pseudoElement;if(null!=a&&a.startsWith("::view-transition")){d.push(n),n=r.getKeyframes();for(var o=a=void 0,l=!0,s=0;s<n.length;s++){var u=n[s],p=u.width;if(void 0===a)a=p;else if(a!==p){l=!1;break}if(p=u.height,void 0===o)o=p;else if(o!==p){l=!1;break}delete u.width,delete u.height,"none"===u.transform&&delete u.transform}l&&void 0!==a&&void 0!==o&&(r.setKeyframes(n),(l=getComputedStyle(r.target,r.pseudoElement)).width!==a||l.height!==o)&&((l=n[0]).width=a,l.height=o,(l=n[n.length-1]).width=a,l.height=o,r.setKeyframes(n))}}i()},function(e){c.__reactViewTransition===u&&(c.__reactViewTransition=null);try{if("object"===typeof e&&null!==e&&"InvalidStateError"===e.name)"View transition was skipped because document visibility state is hidden."!==e.message&&"Skipping view transition because document visibility state has become hidden."!==e.message&&"Skipping view transition because viewport size changed."!==e.message&&"Transition was aborted because of invalid state"!==e.message||(e=null);null!==e&&s(e)}finally{r(),a(),i()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();c.__reactViewTransition===u&&(c.__reactViewTransition=null),l()}),u}catch(p){return r(),a(),i(),null}}(i,e.containerInfo,ld,Md,$d,Ad,Id,Hd,Dd):(Md(),$d(),Id())}(e,t,n,l,s,c,p)}}function Dd(e){0!==Xu&&(0,Zu.onRecoverableError)(e,{componentStack:null})}function Ad(){3===Xu&&(Xu=0,su(ed,Zu),Xu=4)}function Md(){if(1===Xu){Xu=0;var e=Zu,t=ed,n=td,r=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||r){r=J.T,J.T=null;var a=X.p;X.p=2;var o=Tu;Tu|=4;try{Fc=Uc=!1,au(t,e,n),n=Ap;var i=Er(e.containerInfo),l=n.focusedElem,s=n.selectionRange;if(i!==l&&l&&l.ownerDocument&&Cr(l.ownerDocument.documentElement,l)){if(null!==s&&Pr(l)){var c=s.start,u=s.end;if(void 0===u&&(u=c),"selectionStart"in l)l.selectionStart=c,l.selectionEnd=Math.min(u,l.value.length);else{var d=l.ownerDocument||document,p=d&&d.defaultView||window;if(p.getSelection){var f=p.getSelection(),h=l.textContent.length,m=Math.min(s.start,h),g=void 0===s.end?m:Math.min(s.end,h);!f.extend&&m>g&&(i=g,g=m,m=i);var v=jr(l,m),y=jr(l,g);if(v&&y&&(1!==f.rangeCount||f.anchorNode!==v.node||f.anchorOffset!==v.offset||f.focusNode!==y.node||f.focusOffset!==y.offset)){var b=d.createRange();b.setStart(v.node,v.offset),f.removeAllRanges(),m>g?(f.addRange(b),f.extend(y.node,y.offset)):(b.setEnd(y.node,y.offset),f.addRange(b))}}}}for(d=[],f=l;f=f.parentNode;)1===f.nodeType&&d.push({element:f,left:f.scrollLeft,top:f.scrollTop});for("function"===typeof l.focus&&l.focus(),l=0;l<d.length;l++){var x=d[l];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Sh=!!Dp,Ap=Dp=null}finally{Tu=o,X.p=a,J.T=r}}e.current=t,Xu=2}}function $d(){if(2===Xu){Xu=0;var e=Zu,t=ed,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=J.T,J.T=null;var r=X.p;X.p=2;var a=Tu;Tu|=4;try{Wc(e,t.alternate,t)}finally{Tu=a,X.p=r,J.T=n}}Xu=3}}function Id(){if(4===Xu||3===Xu){Xu=0;var e=od;od=null,je();var t=Zu,n=ed,r=td,a=ad,o=(335544064&r)===r?10262:10256;if(0!==(n.subtreeFlags&o)||0!==(n.flags&o)?Xu=5:(Xu=0,ed=Zu=null,Fd(t,t.pendingLanes)),0===(o=t.pendingLanes)&&(Ju=null),tt(r),n=n.stateNode,De&&"function"===typeof De.onCommitFiberRoot)try{De.onCommitFiberRoot(Re,n,void 0,128===(128&n.current.flags))}catch(c){}if(null!==a){n=J.T,o=X.p,X.p=2,J.T=null;try{for(var i=t.onRecoverableError,l=0;l<a.length;l++){var s=a[l];i(s.value,{componentStack:s.stack})}}finally{J.T=n,X.p=o}}if(i=ld,ld=null,null!==(a=id)&&(id=null,null===i&&(i=[]),null!==e))for(s=0;s<a.length;s++)void 0!==(n=(0,a[s])(i))&&e.finished.finally(n);0!==(3&td)&&Ud(),np(t),o=t.pendingLanes,0!==(261930&r)&&0!==(42&o)?t===cd?sd++:(sd=0,cd=t):(sd=0,cd=null),rp(0,!1)}}function Fd(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,ho(t)))}function Ud(){return null!==od&&(od.skipTransition(),od=null),Md(),$d(),Id(),Hd()}function Hd(){if(5!==Xu)return!1;var e=Zu,t=nd;nd=0;var n=tt(td),r=J.T,a=X.p;try{X.p=32>n?32:n,J.T=null,n=rd,rd=null;var i=Zu,l=td;if(Xu=0,ed=Zu=null,td=0,0!==(6&Tu))throw Error(o(331));var s=Tu;if(Tu|=4,Su(i.current),mu(i,i.current,l,n),Tu=s,rp(0,!1),De&&"function"===typeof De.onPostCommitFiberRoot)try{De.onPostCommitFiberRoot(Re,i)}catch(c){}return!0}finally{X.p=a,J.T=r,Fd(e,t)}}function Bd(e,t,n){t=wa(n,t),null!==(e=Qo(e,t=is(e.stateNode,t,2),2))&&(Ye(e,2),np(e))}function Wd(e,t,n){if(3===e.tag)Bd(e,e,n);else for(;null!==t;){if(3===t.tag){Bd(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ju||!Ju.has(r))){e=wa(n,e),null!==(r=Qo(t,n=ls(2),2))&&(ss(n,r,t,e),Ye(r,2),np(r));break}}t=t.return}}function Vd(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new Pu;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(Au=!0,a.add(n),e=qd.bind(null,e,t,n),t.then(e,e))}function qd(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Lu===e&&(zu&n)===n&&((4===$u||3===$u&&(62914560&zu)===zu&&300>Ce()-Gu)&&0===(2&Tu)?xd(e,0):Uu|=n,Bu===zu&&(Bu=0)),np(e)}function Gd(e,t){0===t&&(t=Ke()),null!==(e=ia(e,t))&&(Ye(e,t),np(e))}function Kd(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Gd(e,n)}function Qd(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(o(314))}null!==r&&r.delete(t),Gd(e,n)}var Yd=null,Jd=null,Xd=!1,Zd=!1,ep=!1,tp=0;function np(e){e!==Jd&&null===e.next&&(null===Jd?Yd=Jd=e:Jd=Jd.next=e),Zd=!0,Xd||(Xd=!0,Gp(function(){0!==(6&Tu)?we(Pe,ap):op()}))}function rp(e,t){if(!ep&&Zd){ep=!0;do{for(var n=!1,r=Yd;null!==r;){if(!t)if(0!==e){var a=r.pendingLanes;if(0===a)var o=0;else{var i=r.suspendedLanes,l=r.pingedLanes;o=(1<<31-Me(42|e)+1)-1,o=201326741&(o&=a&~(i&~l))?201326741&o|1:o?2|o:0}0!==o&&(n=!0,sp(r,o))}else o=zu,0===(3&(o=We(r,r===Lu?o:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||Ve(r,o)||(n=!0,sp(r,o));r=r.next}}while(n);ep=!1}}function ap(){op()}function op(){Zd=Xd=!1;var e=0;0!==tp&&function(){var e=window.event;if(e&&"popstate"===e.type)return e!==Hp&&(Hp=e,!0);return Hp=null,!1}()&&(e=tp);for(var t=Ce(),n=null,r=Yd;null!==r;){var a=r.next,o=ip(r,t);0===o?(r.next=null,null===n?Yd=a:n.next=a,null===a&&(Jd=n)):(n=r,(0!==e||0!==(3&o))&&(Zd=!0)),r=a}0!==Xu&&5!==Xu||rp(e,!1),0!==tp&&(tp=0)}function ip(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=-62914561&e.pendingLanes;0<o;){var i=31-Me(o),l=1<<i,s=a[i];-1===s?0!==(l&n)&&0===(l&r)||(a[i]=Ge(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}if(n=zu,n=We(e,e===(t=Lu)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===Ou||9===Ou)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&ke(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||Ve(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&ke(r),tt(n)){case 2:case 8:n=Te;break;case 32:default:n=Le;break;case 268435456:n=ze}return r=lp.bind(null,e),n=we(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&ke(r),e.callbackPriority=2,e.callbackNode=null,2}function lp(e,t){if(0!==Xu&&5!==Xu)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ud()&&e.callbackNode!==n)return null;var r=zu;return 0===(r=We(e,e===Lu?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(hd(e,r,t),ip(e,Ce()),null!=e.callbackNode&&e.callbackNode===n?lp.bind(null,e):null)}function sp(e,t){if(Ud())return null;hd(e,t,!0)}function cp(){if(0===tp){var e=bo;0===e&&(e=Fe,0===(261888&(Fe<<=1))&&(Fe=256)),tp=e}return tp}function up(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:Xt(e)}for(var dp=0;dp<Gr.length;dp++){var pp=Gr[dp];Kr(pp.toLowerCase(),"on"+(pp[0].toUpperCase()+pp.slice(1)))}Kr(Ir,"onAnimationEnd"),Kr(Fr,"onAnimationIteration"),Kr(Ur,"onAnimationStart"),Kr("dblclick","onDoubleClick"),Kr("focusin","onFocus"),Kr("focusout","onBlur"),Kr(Hr,"onTransitionRun"),Kr(Br,"onTransitionStart"),Kr(Wr,"onTransitionCancel"),Kr(Vr,"onTransitionEnd"),jt("onMouseEnter",["mouseout","mouseover"]),jt("onMouseLeave",["mouseout","mouseover"]),jt("onPointerEnter",["pointerout","pointerover"]),jt("onPointerLeave",["pointerout","pointerover"]),St("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),St("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),St("onBeforeInput",["compositionend","keypress","textInput","paste"]),St("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),St("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),St("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fp="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fp));function mp(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=c;try{o(a)}catch(u){Zr(u)}a.currentTarget=null,o=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,c=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=c;try{o(a)}catch(u){Zr(u)}a.currentTarget=null,o=s}}}}function gp(e,t){var n=t[st];void 0===n&&(n=t[st]=new Set);var r=e+"__bubble";n.has(r)||(xp(t,e,2,!1),n.add(r))}function vp(e,t,n){var r=0;t&&(r|=4),xp(n,e,r,t)}var yp="_reactListening"+Math.random().toString(36).slice(2);function bp(e){if(!e[yp]){e[yp]=!0,wt.forEach(function(t){"selectionchange"!==t&&(hp.has(t)||vp(t,!1,e),vp(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[yp]||(t[yp]=!0,vp("selectionchange",!1,t))}}function xp(e,t,n,r){switch(Nh(t)){case 2:var a=jh;break;case 8:a=Ch;break;default:a=Eh}n=a.bind(null,t,n,e),a=void 0,!un||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function wp(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===a)break;if(4===i)for(i=r.return;null!==i;){var c=i.tag;if((3===c||4===c)&&i.stateNode.containerInfo===a)return;i=i.return}for(;null!==l;){if(null===(i=mt(l)))return;if(5===(c=i.tag)||6===c||26===c||27===c){r=o=i;continue e}l=l.parentNode}}r=r.return}ln(function(){var r=o,a=tn(n),i=[];e:{var l=qr.get(e);if(void 0!==l){var c=jn,u=e;switch(e){case"keypress":if(0===gn(n))break e;case"keydown":case"keyup":c=In;break;case"focusin":u="focus",c=Nn;break;case"focusout":u="blur",c=Nn;break;case"beforeblur":case"afterblur":c=Nn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=Tn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=Ln;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=Hn;break;case Ir:case Fr:case Ur:c=zn;break;case Vr:c=Bn;break;case"scroll":case"scrollend":c=En;break;case"wheel":c=Wn;break;case"copy":case"cut":case"paste":c=On;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=Fn;break;case"submit":c=Un;break;case"toggle":case"beforetoggle":c=Vn}var d=0!==(4&t),p=!d&&("scroll"===e||"scrollend"===e),f=d?null!==l?l+"Capture":null:l;d=[];for(var h,m=r;null!==m;){var g=m;if(h=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===h||null===f||null!=(g=sn(m,f))&&d.push(kp(m,g,h)),p)break;m=m.return}0<d.length&&(l=new c(l,u,null,n,a),i.push({event:l,listeners:d}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(c="mouseover"===e||"pointerover"===e)&&n!==en&&(u=n.relatedTarget||n.fromElement)&&(mt(u)||u[lt])||(l||c)&&(u=a.window===a?a:(c=a.ownerDocument)?c.defaultView||c.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?mt(c):null)&&(p=s(c),d=c.tag,c!==p||5!==d&&27!==d&&6!==d)&&(c=null)):(l=null,c=r),l!==c&&(d=Tn,g="onMouseLeave",f="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=Fn,g="onPointerLeave",f="onPointerEnter",m="pointer"),p=null==l?u:vt(l),h=null==c?u:vt(c),(u=new d(g,m+"leave",l,n,a)).target=p,u.relatedTarget=h,g=null,mt(a)===r&&((d=new d(f,m+"enter",c,n,a)).target=h,d.relatedTarget=p,g=d),p=g,d=l&&c?E(l,c,jp):null,null!==l&&Cp(i,u,l,d,!1),null!==c&&null!==p&&Cp(i,p,c,d,!0))),"select"===(c=(l=r?vt(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===c&&"file"===l.type)var v=cr;else if(rr(l))if(ur)v=br;else{v=vr;var y=gr}else!(c=l.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?r&&Qt(r.elementType)&&(v=cr):v=yr;switch(v&&(v=v(e,r))?ar(i,v,n,a):y&&y(e,l,r),y=r?vt(r):window,e){case"focusin":(rr(y)||"true"===y.contentEditable)&&(Lr=y,Nr=r,zr=null);break;case"focusout":zr=Nr=Lr=null;break;case"mousedown":Or=!0;break;case"contextmenu":case"mouseup":case"dragend":Or=!1,_r(i,n,a);break;case"selectionchange":if(Tr)break;case"keydown":case"keyup":_r(i,n,a)}var b;if(Gn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else tr?Zn(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(Yn&&"ko"!==n.locale&&(tr||"onCompositionStart"!==x?"onCompositionEnd"===x&&tr&&(b=mn()):(fn="value"in(pn=a)?pn.value:pn.textContent,tr=!0)),0<(y=Sp(r,x)).length&&(x=new _n(x,e,null,n,a),i.push({event:x,listeners:y}),b?x.data=b:null!==(b=er(n))&&(x.data=b))),(b=Qn?function(e,t){switch(e){case"compositionend":return er(t);case"keypress":return 32!==t.which?null:(Xn=!0,Jn);case"textInput":return(e=t.data)===Jn&&Xn?null:e;default:return null}}(e,n):function(e,t){if(tr)return"compositionend"===e||!Gn&&Zn(e,t)?(e=mn(),hn=fn=pn=null,tr=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(x=Sp(r,"onBeforeInput")).length&&(y=new _n("onBeforeInput","beforeinput",null,n,a),i.push({event:y,listeners:x}),y.data=b)),function(e,t,n,r,a){if("submit"===t&&n&&n.stateNode===a){var o=up((a[it]||null).action),i=r.submitter;i&&null!==(t=(t=i[it]||null)?up(t.formAction):i.getAttribute("formAction"))&&(o=t,i=null);var l=new jn("action","action",null,r,a);e.push({event:l,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==tp){var e=new FormData(a,i);Ol(n,{pending:!0,data:e,method:a.method,action:o},null,e)}}else"function"===typeof o&&(l.preventDefault(),e=new FormData(a,i),Ol(n,{pending:!0,data:e,method:a.method,action:o},o,e))},currentTarget:a}]})}}(i,e,r,n,a)}mp(i,t)})}function kp(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Sp(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;if(5!==(a=a.tag)&&26!==a&&27!==a||null===o||(null!=(a=sn(e,n))&&r.unshift(kp(e,a,o)),null!=(a=sn(e,t))&&r.push(kp(e,a,o))),3===e.tag)return r;e=e.return}return[]}function jp(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Cp(e,t,n,r,a){for(var o=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(l=l.tag,null!==s&&s===r)break;5!==l&&26!==l&&27!==l||null===c||(s=c,a?null!=(c=sn(n,o))&&i.unshift(kp(n,c,s)):a||null!=(c=sn(n,o))&&i.push(kp(n,c,s))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var Ep=/\r\n?/g,Pp=/\u0000|\uFFFD/g;function Tp(e){return("string"===typeof e?e:""+e).replace(Ep,"\n").replace(Pp,"")}function Lp(e,t){return t=Tp(t),Tp(e)===t}function Np(e,t,n,r,a,i){switch(n){case"children":if("string"===typeof r)"body"===t||"textarea"===t&&""===r||Vt(e,r);else{if("number"!==typeof r&&"bigint"!==typeof r)return;"body"!==t&&Vt(e,""+r)}break;case"className":zt(e,"class",r);break;case"tabIndex":zt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":zt(e,n,r);break;case"style":return void Kt(e,r,i);case"data":if("object"!==t){zt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Xt(r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof i&&("formAction"===n?("input"!==t&&Np(e,t,"name",a.name,a,null),Np(e,t,"formEncType",a.formEncType,a,null),Np(e,t,"formMethod",a.formMethod,a,null),Np(e,t,"formTarget",a.formTarget,a,null)):(Np(e,t,"encType",a.encType,a,null),Np(e,t,"method",a.method,a,null),Np(e,t,"target",a.target,a,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Xt(r),e.setAttribute(n,r);break;case"onClick":return void(null!=r&&(e.onclick=Zt));case"onScroll":return void(null!=r&&gp("scroll",e));case"onScrollEnd":return void(null!=r&&gp("scrollend",e));case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(o(60));(null!=i?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=Xt(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":gp("beforetoggle",e),gp("toggle",e),Nt(e,"popover",r);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Nt(e,"is",r);break;case"innerText":case"textContent":return;default:if(2<n.length&&("o"===n[0]||"O"===n[0])&&("n"===n[1]||"N"===n[1]))return;Nt(e,n=Yt.get(n)||n,r)}Tt=!0}function zp(e,t,n,r,a,i){switch(n){case"style":return void Kt(e,r,i);case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(o(60));(null!=i?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"children":if("string"===typeof r)Vt(e,r);else{if("number"!==typeof r&&"bigint"!==typeof r)return;Vt(e,""+r)}break;case"onScroll":return void(null!=r&&gp("scroll",e));case"onScrollEnd":return void(null!=r&&gp("scrollend",e));case"onClick":return void(null!=r&&(e.onclick=Zt));case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":return;default:return void(kt.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(a=n.endsWith("Capture"),i=n.slice(2,a?n.length-7:void 0),"function"===typeof(t=null!=(t=e[it]||null)?t[n]:null)&&e.removeEventListener(i,t,a),"function"!==typeof r)?(Tt=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,""):Nt(e,n,r)):("function"!==typeof t&&null!==t&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(i,r,a))))}Tt=!0}function Op(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gp("error",e),gp("load",e);var r,a=!1,i=!1;for(r in n)if(n.hasOwnProperty(r)){var l=n[r];if(null!=l)switch(r){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Np(e,t,r,l,n,null)}}return i&&Np(e,t,"srcSet",n.srcSet,n,null),void(a&&Np(e,t,"src",n.src,n,null));case"input":gp("invalid",e);var s=r=l=i=null,c=null,u=null;for(a in n)if(n.hasOwnProperty(a)){var d=n[a];if(null!=d)switch(a){case"name":i=d;break;case"type":l=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(o(137,t));break;default:Np(e,t,a,d,n,null)}}return void Ft(e,r,s,c,u,l,i,!1);case"select":for(i in gp("invalid",e),a=l=r=null,n)if(n.hasOwnProperty(i)&&null!=(s=n[i]))switch(i){case"value":r=s;break;case"defaultValue":l=s;break;case"multiple":a=s;default:Np(e,t,i,s,n,null)}return t=r,n=l,e.multiple=!!a,void(null!=t?Ht(e,!!a,t,!1):null!=n&&Ht(e,!!a,n,!0));case"textarea":for(l in gp("invalid",e),r=i=a=null,n)if(n.hasOwnProperty(l)&&null!=(s=n[l]))switch(l){case"value":a=s;break;case"defaultValue":i=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(o(91));break;default:Np(e,t,l,s,n,null)}return void Wt(e,a,i,r);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(a=n[c]))if("selected"===c)e.selected=a&&"function"!==typeof a&&"symbol"!==typeof a;else Np(e,t,c,a,n,null);return;case"dialog":gp("beforetoggle",e),gp("toggle",e),gp("cancel",e),gp("close",e);break;case"iframe":case"object":gp("load",e);break;case"video":case"audio":for(a=0;a<fp.length;a++)gp(fp[a],e);break;case"image":gp("error",e),gp("load",e);break;case"details":gp("toggle",e);break;case"embed":case"source":case"link":gp("error",e),gp("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(a=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Np(e,t,u,a,n,null)}return;default:if(Qt(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(a=n[d])&&zp(e,t,d,a,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(a=n[s])&&Np(e,t,s,a,n,null))}var _p={};function Rp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}var Dp=null,Ap=null;function Mp(e){return 9===e.nodeType?e:e.ownerDocument}function $p(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ip(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function Fp(e,t,n,r){return(n=Mp(n).createElement(e))[ot]=r,n[it]=t,Op(n,e,t),bt(n),n}function Up(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Hp=null;var Bp="function"===typeof setTimeout?setTimeout:void 0,Wp="function"===typeof clearTimeout?clearTimeout:void 0,Vp="function"===typeof Promise?Promise:void 0,qp="function"===typeof requestAnimationFrame?requestAnimationFrame:Bp,Gp="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Vp?function(e){return Vp.resolve(null).then(e).catch(Kp)}:Bp;function Kp(e){setTimeout(function(){throw e})}function Qp(e){return"head"===e}function Yp(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)||"/&"===n){if(0===r)return e.removeChild(a),void Kh(t);r--}else if("$"===n||"$?"===n||"$~"===n||"$!"===n||"&"===n)r++;else if("html"===n)Mf(e.ownerDocument.documentElement);else if("head"===n){Mf(n=e.ownerDocument.head);for(var o=n.firstChild;o;){var i=o.nextSibling,l=o.nodeName;o[pt]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===o.rel.toLowerCase()||n.removeChild(o),o=i}}else"body"===n&&Mf(e.ownerDocument.body);n=a}while(n);Kh(t)}function Jp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(1===n.nodeType?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",""===n.getAttribute("style")&&n.removeAttribute("style")):3===n.nodeType&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&8===r.nodeType)if("/$"===(n=r.data)){if(0===e)break;e--}else"$"!==n&&"$?"!==n&&"$~"!==n&&"$!"!==n||e++;n=r}while(n)}function Xp(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,null!=n&&(e.style.viewTransitionClass=n),"inline"===(n=getComputedStyle(e)).display){if(1===(t=e.getClientRects()).length)var r=1;else for(var a=r=0;a<t.length;a++){var o=t[a];0<o.width&&0<o.height&&r++}1===r&&((e=e.style).display=1===t.length?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function Zp(e,t){e=e.style;var n=null!=(t=t.style)?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=null==n||"boolean"===typeof n?"":(""+n).trim(),n=null!=t?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=null==n||"boolean"===typeof n?"":(""+n).trim(),"inline-block"===e.display&&(null==t?e.display=e.margin="":(n=t.display,e.display=null==n||"boolean"===typeof n?"":n,null!=(n=t.margin)?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=null==n||"boolean"===typeof n?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=null==t||"boolean"===typeof t?"":t)))}function ef(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:"absolute"===t.position||"fixed"===t.position,clip:"none"!==t.clipPath||"visible"!==t.overflow||"none"!==t.filter||"none"!==t.mask||"none"!==t.mask||"0px"!==t.borderRadius,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function tf(e){return ef(e.getBoundingClientRect(),getComputedStyle(e),e)}function nf(e){var t=e.getBoundingClientRect();return ef(t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height),getComputedStyle(e),e)}function rf(e){this.addEventListener("load",e),this.addEventListener("error",e)}function af(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}function of(e){return{name:e,group:new af("group",e),imagePair:new af("image-pair",e),old:new af("old",e),new:new af("new",e)}}function lf(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}function sf(e,t,n,r){return x(e).addEventListener(t,n,r),!1}function cf(e,t,n,r){return x(e).removeEventListener(t,n,r),!1}function uf(e){return null!=e&&"boolean"!==typeof e&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function df(e){return null==e?"c=0":"boolean"===typeof e?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function pf(e,t,n,r){if(0===e.length)return-1;r=df(r);for(var a=0;a<e.length;a++){var o=e[a];if(o.type===t&&o.listener===n&&df(o.optionsOrUseCapture)===r)return a}return-1}function ff(e,t){return 6!==e.tag&&function(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return r}(e=x(e),t)}function hf(e,t){return t.push(e),!1}function mf(e,t){return 6!==e.tag&&(!((e=x(e))!==t&&!e.contains(t))&&(t.blur(),!0))}function gf(e,t){return 6===e.tag||(e=x(e),t.observe(e)),!1}function vf(e,t){return 6===e.tag||(e=x(e),t.unobserve(e)),!1}af.prototype.animate=function(e,t){return(t="number"===typeof t?{duration:t}:P({},t)).pseudoElement=this._selector,this._scope.animate(e,t)},af.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],a=0;a<n.length;a++){var o=n[a].effect;null!==o&&o.target===e&&o.pseudoElement===t&&r.push(n[a])}return r},af.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)},lf.prototype.addEventListener=function(e,t,n){var r=null,a=null;if(null==n||"boolean"===typeof n||(null===(r=n.signal||null)||!r.aborted)){null===this._eventListeners&&(this._eventListeners=[]);var o=this._eventListeners;if(-1===pf(o,e,t,n)){var i=this,l=t;null!=n&&"boolean"!==typeof n&&!0===n.once&&(l=function(r){i.removeEventListener(e,t,n),"function"===typeof t?t.call(this,r):t.handleEvent(r)}),null!==r&&(a=i.removeEventListener.bind(i,e,t,n),r.addEventListener("abort",a,{once:!0}),a=r.removeEventListener.bind(r,"abort",a)),r=uf(n),o.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:l,cleanup:a}),m(this._fragmentFiber.child,!1,sf,e,l,r)}this._eventListeners=o}},lf.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(null!==r&&-1!==(t=pf(r,e,t,n))){var a=r[t];n=a.attachedListener;var o=a.cleanup;a=uf(a.optionsOrUseCapture),m(this._fragmentFiber.child,!1,cf,e,n,a),r.splice(t,1),null!==o&&o()}},lf.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(null===t)return!0;t=x(t);var n=this._eventListeners;if(null!==n&&0<n.length||!e.bubbles){var r=9===t.nodeType?t.createComment(""):document.createTextNode("");if(n)for(var a=0;a<n.length;a++){var o=n[a];r.addEventListener(o.type,o.attachedListener,uf(o.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(a=0;a<n.length;a++)o=n[a],r.removeEventListener(o.type,o.attachedListener,uf(o.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},lf.prototype.focus=function(e){m(this._fragmentFiber.child,!0,ff,e,void 0,void 0)},lf.prototype.focusLast=function(e){var t=[];m(this._fragmentFiber.child,!0,hf,t,void 0,void 0);for(var n=t.length-1;0<=n&&!ff(t[n],e);n--);},lf.prototype.blur=function(){var e=g(this._fragmentFiber);null!==e&&(null!==(e=Mp(e=x(e)).activeElement)&&m(this._fragmentFiber.child,!1,mf,e,void 0,void 0))},lf.prototype.observeUsing=function(e){null===this._observers&&(this._observers=new Set),this._observers.add(e),m(this._fragmentFiber.child,!1,gf,e,void 0,void 0)},lf.prototype.unobserveUsing=function(e){var t=this._observers;if(null!==t&&t.has(e)){t.delete(e),m(this._fragmentFiber.child,!1,vf,e,void 0,void 0);for(var n=t=0;n<yf.length;n++){var r=yf[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):yf[t++]=r}yf.length=t}};var yf=[],bf=!1;function xf(e,t,n){var r;yf.push({fragmentInstance:e,observer:t,instance:n}),bf||(bf=!0,r=function(){bf=!1;var e=yf;yf=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}},qp(function(){qp(function(e){return r(e)})}))}function wf(e,t){if(6===e.tag){var n=(e=e.stateNode).ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=x(e),t.push.apply(t,e.getClientRects());return!1}function kf(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}function Sf(e,t){return jf(e=x(e),t),!1}function jf(e,t){null==e.reactFragments&&(e.reactFragments=new Set),e.reactFragments.add(t)}function Cf(e,t){var n=t._eventListeners;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];e.addEventListener(a.type,a.attachedListener,uf(a.optionsOrUseCapture))}3!==e.nodeType&&(null!==(n=t._observers)&&n.forEach(function(n){for(var r=0,a=0;a<yf.length;a++){var o=yf[a];o.fragmentInstance===t&&o.observer===n&&o.instance===e||(yf[r++]=o)}yf.length=r,n.observe(e)}),jf(e,t))}function Ef(e,t){var n=t._eventListeners;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];e.removeEventListener(a.type,a.attachedListener,uf(a.optionsOrUseCapture))}3!==e.nodeType&&(null!==(n=t._observers)&&n.forEach(function(n){"string"===typeof n.rootMargin?xf(t,n,e):n.unobserve(e)}),null!=e.reactFragments&&e.reactFragments.delete(t))}function Pf(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Pf(n),ht(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function Tf(e,t){for(;8!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!t)return null;if(null===(e=zf(e.nextSibling)))return null}return e}function Lf(e){return"$?"===e.data||"$~"===e.data}function Nf(e){return"$!"===e.data||"$?"===e.data&&"loading"!==e.ownerDocument.readyState}function zf(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"$~"===t||"&"===t||"F!"===t||"F"===t)break;if("/$"===t||"/&"===t)return null}}return e}lf.prototype.getClientRects=function(){var e=[];return m(this._fragmentFiber.child,!1,wf,e,void 0,void 0),e},lf.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return null===t?this:x(t).getRootNode(e)},lf.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(null===t)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];m(this._fragmentFiber.child,!1,hf,n,void 0,void 0);var r=x(t);if(0===n.length){if(n=r,v(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;null!==t;){if(4===t.tag){t=t.stateNode.containerInfo;break e}if(3===t.tag||5===t.tag||27===t.tag)break;t=t.return}t=null}null!=t&&(n=t)}t=this._fragmentFiber;var a=r=n.compareDocumentPosition(e);return n===e?a=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(null===(n=y(t)[1])?a=Node.DOCUMENT_POSITION_PRECEDING:a=0===(e=x(n).compareDocumentPosition(e))||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING),a|Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=x(n[0]),a=x(n[n.length-1]);var o=v(this._fragmentFiber)?t.parentElement:r;if(null==o)return Node.DOCUMENT_POSITION_DISCONNECTED;r=o.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,o=o.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;var i=t.compareDocumentPosition(e),l=a.compareDocumentPosition(e),s=i&Node.DOCUMENT_POSITION_CONTAINED_BY||l&Node.DOCUMENT_POSITION_CONTAINED_BY;return l=r&&o&&i&Node.DOCUMENT_POSITION_FOLLOWING&&l&Node.DOCUMENT_POSITION_PRECEDING,(t=r&&t===e||o&&a===e||s||l?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!o&&a===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:i)&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||function(e,t,n,r,a){var o=mt(a);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!o)e:{for(;null!==o;){if(7===o.tag&&(o===t||o.alternate===t)){n=!0;break e}o=o.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(null===o)return a===(o=a.ownerDocument)||a===o.documentElement||a===o.body;e:{for(o=t,t=g(t);null!==o;){if(!(5!==o.tag&&3!==o.tag&&27!==o.tag||o!==t&&o.alternate!==t)){o=!0;break e}o=o.return}o=!1}return o}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!o)&&!(t=o===n)&&(null===(t=E(n,o,C))?t=!1:(m(t,!0,S,o,n),o=w,w=null,t=null!==o)),t):!!(e&Node.DOCUMENT_POSITION_FOLLOWING)&&((t=!!o)&&!(t=o===r)&&(null===(t=E(r,o,C))?t=!1:(m(t,!0,j,o,r),o=w,k=w=null,t=null!==o)),t)}(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC},lf.prototype.scrollIntoView=function(e){if("object"===typeof e)throw Error(o(566));var t=[];m(this._fragmentFiber.child,!1,hf,t,void 0,void 0);var n=!1!==e;if(0===t.length){var r=y(this._fragmentFiber);if(null===(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1]))return;if(6===r.tag)return void kf(e=x(r),n);if(9!==(r=x(r)).nodeType){if(11===r.nodeType)return void(null!==(n="host"in r?r.host:null)&&n.scrollIntoView(e));r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];6===a.tag?kf(a=x(a),n):x(a).scrollIntoView(e),r+=n?-1:1}};var Of=null;function _f(e){e=e.nextSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n||"/&"===n){if(0===t)return zf(e.nextSibling);t--}else"$"!==n&&"$!"!==n&&"$?"!==n&&"$~"!==n&&"&"!==n||t++}e=e.nextSibling}return null}function Rf(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n||"$~"===n||"&"===n){if(0===t)return e;t--}else"/$"!==n&&"/&"!==n||t++}e=e.previousSibling}return null}function Df(e,t,n){switch(t=Mp(n),e){case"html":if(!(e=t.documentElement))throw Error(o(452));return e;case"head":if(!(e=t.head))throw Error(o(453));return e;case"body":if(!(e=t.body))throw Error(o(454));return e;default:throw Error(o(451))}}function Af(e,t,n){for(var r in n){var a=n[r];n.hasOwnProperty(r)&&null!=a&&Np(e,t,r,null,_p,a)}null!=n.dangerouslySetInnerHTML&&(e.textContent=""),e.onclick===Zt&&(e.onclick=null),ht(e)}function Mf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ht(e)}var $f=new Map,If=new Set;function Ff(e){if("function"===typeof e.getRootNode){var t=e.getRootNode();if(9===t.nodeType||11===t.nodeType)return t}return 9===e.nodeType?e:e.ownerDocument}var Uf=X.d;X.d={f:function(){var e=Uf.f(),t=yd();return e||t},r:function(e){var t=gt(e);null!==t&&5===t.tag&&"form"===t.type?Rl(t):Uf.r(e)},D:function(e){Uf.D(e),Bf("dns-prefetch",e,null)},C:function(e,t){Uf.C(e,t),Bf("preconnect",e,t)},L:function(e,t,n){Uf.L(e,t,n);var r=Hf;if(r&&e&&t){var a='link[rel="preload"][as="'+$t(t)+'"]';"image"===t&&n&&n.imageSrcSet?(a+='[imagesrcset="'+$t(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(a+='[imagesizes="'+$t(n.imageSizes)+'"]')):a+='[href="'+$t(e)+'"]';var o=a;switch(t){case"style":o=Vf(e);break;case"script":o=Kf(e)}if(!($f.has(o)||(e=P({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),$f.set(o,e),null!==r.querySelector(a)||"style"===t&&r.querySelector(qf(o))||"script"===t&&r.querySelector(Qf(o))))){var i=r.createElement("link");Op(i,"link",e),"style"===t&&(i[ft]=!0,i.onload=i.onerror=function(){xt(i)}),bt(i),r.head.appendChild(i)}}},m:function(e,t){Uf.m(e,t);var n=Hf;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+$t(r)+'"][href="'+$t(e)+'"]',o=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Kf(e)}if(!$f.has(o)&&(e=P({rel:"modulepreload",href:e},t),$f.set(o,e),null===n.querySelector(a))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Qf(o)))return}Op(r=n.createElement("link"),"link",e),bt(r),n.head.appendChild(r)}}},X:function(e,t){Uf.X(e,t);var n=Hf;if(n&&e){var r=yt(n).hoistableScripts,a=Kf(e),o=r.get(a);o||((o=n.querySelector(Qf(a)))||(e=P({src:e,async:!0},t),(t=$f.get(a))&&Zf(e,t),bt(o=n.createElement("script")),Op(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}},S:function(e,t,n){Uf.S(e,t,n);var r=Hf;if(r&&e){var a=yt(r).hoistableStyles,o=Vf(e);t=t||"default";var i=a.get(o);if(!i){var l={loading:0,preload:null};if(i=r.querySelector(qf(o)))l.loading=5;else{e=P({rel:"stylesheet",href:e,"data-precedence":t},n),(n=$f.get(o))&&Xf(e,n);var s=i=r.createElement("link");bt(s),Op(s,"link",e),s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),s.addEventListener("load",function(){l.loading|=1}),s.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Jf(i,t,r)}i={type:"stylesheet",instance:i,count:1,state:l},a.set(o,i)}}},M:function(e,t){Uf.M(e,t);var n=Hf;if(n&&e){var r=yt(n).hoistableScripts,a=Kf(e),o=r.get(a);o||((o=n.querySelector(Qf(a)))||(e=P({src:e,async:!0,type:"module"},t),(t=$f.get(a))&&Zf(e,t),bt(o=n.createElement("script")),Op(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}}};var Hf="undefined"===typeof document?null:document;function Bf(e,t,n){var r=Hf;if(r&&"string"===typeof t&&t){var a=$t(t);a='link[rel="'+e+'"][href="'+a+'"]',"string"===typeof n&&(a+='[crossorigin="'+n+'"]'),If.has(a)||(If.add(a),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(a)&&(Op(t=r.createElement("link"),"link",e),bt(t),r.head.appendChild(t)))}}function Wf(e,t,n,r){var a=(a=ce.current)?Ff(a):null;if(!a)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(n=Vf(n.href),(r=(t=yt(a).hoistableStyles).get(n))||(r={type:"style",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Vf(n.href);var i=yt(a).hoistableStyles,l=i.get(e);if(l||(a=a.ownerDocument||a,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,l),(i=a.querySelector(qf(e)))?i._p||(l.instance=i,l.state.loading=5):((i=$f.get(e))||(i={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},$f.set(e,i)),function(e,t,n,r){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(!0!==t[ft])return void(r.loading=1)}else(t=e.createElement("link"))[ft]=!0,t.onload=t.onerror=xt.bind(null,t),Op(t,"link",n),bt(t),e.head.appendChild(t);r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2})}(a,e,i,l.state))),t&&null===r)throw Error(o(528,""));return l}if(t&&null!==r)throw Error(o(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(n=Kf(n),(r=(t=yt(a).hoistableScripts).get(n))||(r={type:"script",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Vf(e){return'href="'+$t(e)+'"'}function qf(e){return'link[rel="stylesheet"]['+e+"]"}function Gf(e){return P({},e,{"data-precedence":e.precedence,precedence:null})}function Kf(e){return'[src="'+$t(e)+'"]'}function Qf(e){return"script[async]"+e}function Yf(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+$t(n.href)+'"]');if(r)return t.instance=r,bt(r),r;var a=P({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return bt(r=(e.ownerDocument||e).createElement("style")),Op(r,"style",a),Jf(r,n.precedence,e),t.instance=r;case"stylesheet":a=Vf(n.href);var i=e.querySelector(qf(a));if(i)return t.state.loading|=4,t.instance=i,bt(i),i;r=Gf(n),(a=$f.get(a))&&Xf(r,a),bt(i=(e.ownerDocument||e).createElement("link"));var l=i;return l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),Op(i,"link",r),t.state.loading|=4,Jf(i,n.precedence,e),t.instance=i;case"script":return i=Kf(n.src),(a=e.querySelector(Qf(i)))?(t.instance=a,bt(a),a):(r=n,(a=$f.get(i))&&Zf(r=P({},n),a),bt(a=(e=e.ownerDocument||e).createElement("script")),Op(a,"link",r),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(o(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Jf(r,n.precedence,e));return t.instance}function Jf(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,o=a,i=0;i<r.length;i++){var l=r[i];if(l.dataset.precedence===t)o=l;else if(o!==a)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Xf(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Zf(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var eh=null;function th(e,t,n){if(null===eh){var r=new Map,a=eh=new Map;a.set(n,r)}else(r=(a=eh).get(n))||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var o=n[a];if(!(o[pt]||o[ot]||"link"===e&&"stylesheet"===o.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==o.namespaceURI){var i=o.getAttribute(t)||"";i=e+i;var l=r.get(i);l?l.push(o):r.set(i,[o])}}return r}function nh(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function rh(e,t){return"img"===e&&null!=t.src&&""!==t.src&&null==t.onLoad&&"lazy"!==t.loading}function ah(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}function oh(e){return(e.width||100)*(e.height||100)*("number"===typeof devicePixelRatio?devicePixelRatio:1)*.25}function ih(e,t){"function"===typeof t.decode&&(e.imgCount++,t.complete||(e.imgBytes+=oh(t),e.suspenseyImages.push(t)),e=uh.bind(e),t.decode().then(e,e))}var lh=0;function sh(e){if(0===e.count&&(0===e.imgCount||!e.waitingForImages))if(e.stylesheets)ph(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}function ch(){this.count--,sh(this)}function uh(){this.imgCount--,sh(this)}var dh=null;function ph(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,dh=new Map,t.forEach(fh,e),dh=null,ch.call(e))}function fh(e,t){if(!(4&t.state.loading)){var n=dh.get(e);if(n)var r=n.get(null);else{n=new Map,dh.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<a.length;o++){var i=a[o];"LINK"!==i.nodeName&&"not all"===i.getAttribute("media")||(n.set(i.dataset.precedence,i),r=i)}r&&n.set(null,r)}i=(a=t.instance).getAttribute("data-precedence"),(o=n.get(i)||r)===r&&n.set(null,a),n.set(i,a),this.count++,r=ch.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),o?o.parentNode.insertBefore(a,o.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var hh={$$typeof:D,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function mh(e,t,n,r,a,o,i,l,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=o,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.transitionTypes=null,this.incompleteTransitions=new Map}function gh(e,t,n,r,a,o,i,l,s,c,u,d){return e=new mh(e,t,n,i,s,c,u,d,l),t=1,!0===o&&(t|=24),o=da(3,null,null,t),e.current=o,o.stateNode=e,(t=fo()).refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:r,isDehydrated:n,cache:t},qo(o),e}function vh(e){return e?e=ca:ca}function yh(e,t,n,r,a,o){a=vh(a),null===r.context?r.context=a:r.pendingContext=a,(r=Ko(t)).payload={element:n},null!==(o=void 0===o?null:o)&&(r.callback=o),null!==(n=Qo(e,r,t))&&(fd(n,0,t),Yo(n,e,t))}function bh(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function xh(e,t){bh(e,t),(e=e.alternate)&&bh(e,t)}function wh(e){if(13===e.tag||31===e.tag){var t=ia(e,67108864);null!==t&&fd(t,0,67108864),xh(e,67108864)}}function kh(e){if(13===e.tag||31===e.tag){var t=ud(),n=ia(e,t=et(t));null!==n&&fd(n,0,t),xh(e,t)}}var Sh=!0;function jh(e,t,n,r){var a=J.T;J.T=null;var o=X.p;try{X.p=2,Eh(e,t,n,r)}finally{X.p=o,J.T=a}}function Ch(e,t,n,r){var a=J.T;J.T=null;var o=X.p;try{X.p=8,Eh(e,t,n,r)}finally{X.p=o,J.T=a}}function Eh(e,t,n,r){if(Sh){var a=Ph(r);if(null===a)wp(e,t,r,Th,n),Ih(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Oh=Fh(Oh,e,t,n,r,a),!0;case"dragenter":return _h=Fh(_h,e,t,n,r,a),!0;case"mouseover":return Rh=Fh(Rh,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return Dh.set(o,Fh(Dh.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Ah.set(o,Fh(Ah.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Ih(e,r),4&t&&-1<$h.indexOf(e)){for(;null!==a;){var o=gt(a);if(null!==o)switch(o.tag){case 3:if((o=o.stateNode).current.memoizedState.isDehydrated){var i=Be(o.pendingLanes);if(0!==i){var l=o;for(l.pendingLanes|=2,l.entangledLanes|=2;i;){var s=1<<31-Me(i);l.entanglements[1]|=s,i&=~s}np(o),0===(6&Tu)&&(Qu=Ce()+500,rp(0,!1))}}break;case 31:case 13:null!==(l=ia(o,2))&&fd(l,0,2),yd(),xh(o,2)}if(null===(o=Ph(r))&&wp(e,t,r,Th,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else wp(e,t,r,null,n)}}function Ph(e){return Lh(e=tn(e))}var Th=null;function Lh(e){if(Th=null,null!==(e=mt(e))){var t=s(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=u(t)))return e;e=null}else if(31===n){if(null!==(e=d(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Th=e,null}function Nh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ee()){case Pe:return 2;case Te:return 8;case Le:case Ne:return 32;case ze:return 268435456;default:return 32}default:return 32}}var zh=!1,Oh=null,_h=null,Rh=null,Dh=new Map,Ah=new Map,Mh=[],$h="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ih(e,t){switch(e){case"focusin":case"focusout":Oh=null;break;case"dragenter":case"dragleave":_h=null;break;case"mouseover":case"mouseout":Rh=null;break;case"pointerover":case"pointerout":Dh.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ah.delete(t.pointerId)}}function Fh(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=gt(t))&&wh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Uh(e){var t=mt(e.target);if(null!==t){var n=s(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=u(n)))return e.blockedOn=t,void rt(e.priority,function(){kh(n)})}else if(31===t){if(null!==(t=d(n)))return e.blockedOn=t,void rt(e.priority,function(){kh(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Hh(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ph(e.nativeEvent);if(null!==n)return null!==(t=gt(n))&&wh(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);en=r,n.target.dispatchEvent(r),en=null,t.shift()}return!0}function Bh(e,t,n){Hh(e)&&n.delete(t)}function Wh(){zh=!1,null!==Oh&&Hh(Oh)&&(Oh=null),null!==_h&&Hh(_h)&&(_h=null),null!==Rh&&Hh(Rh)&&(Rh=null),Dh.forEach(Bh),Ah.forEach(Bh)}function Vh(e,t){e.blockedOn===t&&(e.blockedOn=null,zh||(zh=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Wh)))}var qh=null;function Gh(e){qh!==e&&(qh=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){qh===e&&(qh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];if("function"!==typeof r){if(null===Lh(r||n))continue;break}var o=gt(n);null!==o&&(e.splice(t,3),t-=3,Ol(o,{pending:!0,data:a,method:n.method,action:r},r,a))}}))}function Kh(e){function t(t){return Vh(t,e)}null!==Oh&&Vh(Oh,e),null!==_h&&Vh(_h,e),null!==Rh&&Vh(Rh,e),Dh.forEach(t),Ah.forEach(t);for(var n=0;n<Mh.length;n++){var r=Mh[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Mh.length&&null===(n=Mh[0]).blockedOn;)Uh(n),null===n.blockedOn&&Mh.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var a=n[r],o=n[r+1],i=a[it]||null;if("function"===typeof o)i||Gh(n);else if(i){var l=null;if(o&&o.hasAttribute("formAction")){if(a=o,i=o[it]||null)l=i.formAction;else if(null!==Lh(a))continue}else l=i.action;"function"===typeof l?n[r+1]=l:(n.splice(r,3),r-=3),Gh(n)}}}function Qh(){function e(e){e.canIntercept&&"react-transition"===e.info&&e.intercept({handler:function(){return new Promise(function(e){return a=e})},focusReset:"manual",scroll:"manual"})}function t(){null!==a&&(a(),a=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&null!=e.url&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}if("object"===typeof navigation){var r=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),null!==a&&(a(),a=null)}}}function Yh(e){this._internalRoot=e}function Jh(e){this._internalRoot=e}Jh.prototype.render=Yh.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));yh(t.current,ud(),e,t,null,null)},Jh.prototype.unmount=Yh.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;yh(e.current,2,null,e,null,null),yd(),t[lt]=null}},Jh.prototype.unstable_scheduleHydration=function(e){if(e){var t=nt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mh.length&&0!==t&&t<Mh[n].priority;n++);Mh.splice(n,0,e),0===n&&Uh(e)}};var Xh=r.version;if("19.3.0"!==Xh)throw Error(o(527,Xh,"19.3.0"));X.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=s(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return f(a),e;if(i===r)return f(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,c=a.child;c;){if(c===n){l=!0,n=a,r=i;break}if(c===r){l=!0,r=a,n=i;break}c=c.sibling}if(!l){for(c=i.child;c;){if(c===n){l=!0,n=i,r=a;break}if(c===r){l=!0,r=i,n=a;break}c=c.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?h(e):null)?null:e.stateNode};var Zh={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:J,reconcilerVersion:"19.3.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var em=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!em.isDisabled&&em.supportsFiber)try{Re=em.inject(Zh),De=em}catch(nm){}}t.createRoot=function(e,t){if(!l(e))throw Error(o(299));var n=!1,r="",a=ts,i=ns,s=rs;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(i=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError)),t=gh(e,1,!1,null,0,n,r,null,a,i,s,Qh),e[lt]=t.current,bp(e),new Yh(t)},t.hydrateRoot=function(e,t,n){if(!l(e))throw Error(o(299));var r=!1,a="",i=ts,s=ns,c=rs,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onUncaughtError&&(i=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.formState&&(u=n.formState)),(t=gh(e,1,!0,t,0,r,a,u,i,s,c,Qh)).context=vh(null),n=t.current,(a=Ko(r=et(r=ud()))).callback=null,Qo(n,a,r),n=r,t.current.lanes=n,Ye(t,n),np(t),e[lt]=t.current,bp(e),new Jh(t)},t.version="19.3.0"}),a=n.cw(function(e,t){var n=c();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var o={d:{f:a,r:function(){throw Error(r(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},i=Symbol.for("react.portal"),l=Symbol.for("react.recoverable"),s=Symbol.for("react.optimistic_key");var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,t.browser=function(e){return{$$typeof:l,_reason:e}},t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(r(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:i,key:null==r?null:r===s?s:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=u.T,n=o.p;try{if(u.T=null,o.p=2,e)return e()}finally{u.T=t,o.p=n,o.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,o.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&o.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=d(n,t.crossOrigin),a="string"===typeof t.integrity?t.integrity:void 0,i="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?o.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:i}):"script"===n&&o.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:i,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=d(t.as,t.crossOrigin);o.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0})}}else null==t&&o.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=d(n,t.crossOrigin);o.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=d(t.as,t.crossOrigin);o.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0})}else o.d.m(e)},t.requestFormReset=function(e){o.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return u.H.useFormState(e,t,n)},t.useFormStatus=function(){return u.H.useHostTransitionStatus()},t.version="19.3.0"}),o=n.cw(function(e,t){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=r()}),i=n.cw(function(e,t){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=a()}),l=n.cw(function(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(e,t,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),"key"in t)for(var o in r={},t)"key"!==o&&(r[o]=t[o]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:a,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=a,t.jsxs=a}),s=n.cw(function(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.for("react.activity"),h=Symbol.for("react.view_transition"),m=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,y={};function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||g}function x(){}function w(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||g}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=b.prototype;var k=w.prototype=new x;k.constructor=w,v(k,b.prototype),k.isPureReactComponent=!0;var S=Array.isArray;function j(){}var C={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function P(e,t,r){var a=r.ref;return{$$typeof:n,type:e,key:t,ref:void 0!==a?a:null,props:r}}function T(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var L=/\/+/g;function N(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function z(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s,c,u=!1;if(null===e)u=!0;else switch(l){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0;break;case p:return z((u=e._init)(e._payload),t,a,o,i)}}if(u)return i=i(e),u=""===o?"."+N(e,0):o,S(i)?(a="",null!=u&&(a=u.replace(L,"$&/")+"/"),z(i,t,a,"",function(e){return e})):null!=i&&(T(i)&&(s=i,c=a+(null==i.key||e&&e.key===i.key?"":(""+i.key).replace(L,"$&/")+"/")+u,i=P(s.type,c,s.props)),t.push(i)),1;u=0;var d,f=""===o?".":o+":";if(S(e))for(var h=0;h<e.length;h++)u+=z(o=e[h],t,a,l=f+N(o,h),i);else if("function"===typeof(h=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=m&&d[m]||d["@@iterator"])?d:null))for(e=h.call(e),h=0;!(o=e.next()).done;)u+=z(o=o.value,t,a,l=f+N(o,h++),i);else if("object"===l){if("function"===typeof e.then)return z(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(j,j):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,a,o,i);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function O(e,t,n){if(null==e)return e;var r=[],a=0;return z(e,r,"","",function(e){return t.call(n,e,a++)}),r}function _(e){if(-1===e._status){var t=(0,e._result)();t.then(function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n,void 0===t.status&&(t.status="fulfilled",t.value=n))},function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n,void 0===t.status&&(t.status="rejected",t.reason=n))}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function D(e){var t=C.T,n={};n.types=null!==t?t.types:null,C.T=n;try{var r=e(),a=C.S;null!==a&&a(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(j,R)}catch(o){R(o)}finally{null!==t&&null!==n.types&&(t.types=n.types),C.T=t}}var A={map:O,forEach:function(e,t,n){O(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return O(e,function(){t++}),t},toArray:function(e){return O(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Activity=f,t.Children=A,t.Component=b,t.Fragment=a,t.Profiler=i,t.PureComponent=w,t.StrictMode=o,t.Suspense=u,t.ViewTransition=h,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},t.addTransitionType=function e(t){var n=C.T;if(null!==n){var r=n.types;null===r?n.types=[t]:-1===r.indexOf(t)&&r.push(t)}else D(e.bind(null,t))},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cacheSignal=function(){return null},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=v({},e.props),a=e.key;if(null!=t)for(o in void 0!==t.key&&(a=""+t.key),t)!E.call(t,o)||"key"===o||"__self"===o||"__source"===o||"ref"===o&&void 0===t.ref||(r[o]=t[o]);var o=arguments.length-2;if(1===o)r.children=n;else if(1<o){for(var i=Array(o),l=0;l<o;l++)i[l]=arguments[l+2];r.children=i}return P(e.type,a,r)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,n){var r,a={},o=null;if(null!=t)for(r in void 0!==t.key&&(o=""+t.key),t)E.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(a[r]=t[r]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===a[r]&&(a[r]=i[r]);return P(e,o,a)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=T,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:_}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=D,t.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},t.use=function(e){return C.H.use(e)},t.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},t.useCallback=function(e,t){return C.H.useCallback(e,t)},t.useContext=function(e){return C.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return C.H.useEffect(e,t)},t.useEffectEvent=function(e){return C.H.useEffectEvent(e)},t.useId=function(){return C.H.useId()},t.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return C.H.useMemo(e,t)},t.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},t.useRef=function(e){return C.H.useRef(e)},t.useState=function(e){return C.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return C.H.useTransition()},t.version="19.3.0"}),c=n.cw(function(e,t){e.exports=s()}),u=n.cw(function(e,t){e.exports=l()}),d=n.cw(function(e,t){function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>o(s,n))c<a&&0>o(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<a&&0>o(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,p=null,f=3,h=!1,m=!1,g=!1,v=!1,y="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(u);null!==t;){if(null===t.callback)a(u);else{if(!(t.startTime<=e))break;a(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function k(e){if(g=!1,w(e),!m)if(null!==r(c))m=!0,j||(j=!0,S());else{var t=r(u);null!==t&&O(k,t.startTime-e)}}var S,j=!1,C=-1,E=5,P=-1;function T(){return!!v||!(t.unstable_now()-P<E)}function L(){if(v=!1,j){var e=t.unstable_now();P=e;var n=!0;try{e:{m=!1,g&&(g=!1,b(C),C=-1),h=!0;var o=f;try{t:{for(w(e),p=r(c);null!==p&&!(p.expirationTime>e&&T());){var i=p.callback;if("function"===typeof i){p.callback=null,f=p.priorityLevel;var l=i(p.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof l){p.callback=l,w(e),n=!0;break t}p===r(c)&&a(c),w(e)}else a(c);p=r(c)}if(null!==p)n=!0;else{var s=r(u);null!==s&&O(k,s.startTime-e),n=!1}}break e}finally{p=null,f=o,h=!1}n=void 0}}finally{n?S():j=!1}}}if("function"===typeof x)S=function(){x(L)};else if("undefined"!==typeof MessageChannel){var N=new MessageChannel,z=N.port2;N.port1.onmessage=L,S=function(){z.postMessage(null)}}else S=function(){y(L,0)};function O(e,n){C=y(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_requestPaint=function(){v=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(u,e),null===r(c)&&e===r(u)&&(g?(b(C),C=-1):g=!0,O(k,o-i))):(e.sortIndex=l,n(c,e),m||h||(m=!0,j||(j=!0,S()))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}}),p=n.cw(function(e,t){e.exports=d()}),f=n.cw(function(e,t){var n=c();var r="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},a=n.useState,o=n.useEffect,i=n.useLayoutEffect,l=n.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!r(e,n)}catch(a){return!0}}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),c=r[0].inst,u=r[1];return i(function(){c.value=n,c.getSnapshot=t,s(c)&&u({inst:c})},[e,n,t]),o(function(){return s(c)&&u({inst:c}),e(function(){s(c)&&u({inst:c})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:u}),h=n.cw(function(e,t){e.exports=f()});c(),i(),o();var m="-ms-",g="-moz-",v="-webkit-",y="comm",b="rule",x="decl",w="@keyframes",k=Math.abs,S=String.fromCharCode,j=Object.assign;function C(e){return e.trim()}function E(e,t){return(e=t.exec(e))?e[0]:e}function P(e,t,n){return e.replace(t,n)}function T(e,t,n){return e.indexOf(t,n)}function L(e,t){return 0|e.charCodeAt(t)}function N(e,t,n){return e.slice(t,n)}function z(e){return e.length}function O(e){return e.length}function _(e,t){return t.push(e),e}function R(e,t){return e.filter(function(e){return!E(e,t)})}var D,A,M=1,$=1,I=0,F=0,U=0,H="";function B(e,t,n,r,a,o,i,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:M,column:$,length:i,return:"",siblings:l}}function W(e,t){return j(B("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function V(e){for(;e.root;)e=W(e.root,{children:[e]});_(e,e.siblings)}function q(){return U=F>0?L(H,--F):0,$--,10===U&&($=1,M--),U}function G(){return U=F<I?L(H,F++):0,$++,10===U&&($=1,M++),U}function K(){return L(H,F)}function Q(){return F}function Y(e,t){return N(H,e,t)}function J(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function X(e){return M=$=1,I=z(H=e),F=0,[]}function Z(e){return H="",e}function ee(e){return C(Y(F-1,re(91===e?e+2:40===e?e+1:e)))}function te(e){for(;(U=K())&&U<33;)G();return J(e)>2||J(U)>3?"":" "}function ne(e,t){for(;--t&&G()&&!(U<48||U>102||U>57&&U<65||U>70&&U<97););return Y(e,Q()+(t<6&&32==K()&&32==G()))}function re(e){for(;G();)switch(U){case e:return F;case 34:case 39:34!==e&&39!==e&&re(U);break;case 40:41===e&&re(e);break;case 92:G()}return F}function ae(e,t){for(;G()&&e+U!==57&&(e+U!==84||47!==K()););return"/*"+Y(t,F-1)+"*"+S(47===e?e:G())}function oe(e){for(;!J(K());)G();return Y(e,F)}function ie(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function le(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case x:return e.return=e.return||e.value;case y:return"";case w:return e.return=e.value+"{"+ie(e.children,r)+"}";case b:if(!z(e.value=e.props.join(",")))return""}return z(n=ie(e.children,r))?e.return=e.value+"{"+n+"}":""}function se(e,t,n){switch(function(e,t){return 45^L(e,0)?(((t<<2^L(e,0))<<2^L(e,1))<<2^L(e,2))<<2^L(e,3):0}(e,t)){case 5103:return v+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return v+e+e;case 4855:return v+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return g+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return v+e+g+e+m+e+e;case 5936:switch(L(e,t+11)){case 114:return v+e+m+P(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return v+e+m+P(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return v+e+m+P(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return v+e+m+e+e;case 6165:return v+e+m+"flex-"+e+e;case 5187:return v+e+P(e,/(\w+).+(:[^]+)/,v+"box-$1$2"+m+"flex-$1$2")+e;case 5443:return v+e+m+"flex-item-"+P(e,/flex-|-self/g,"")+(E(e,/flex-|baseline/)?"":m+"grid-row-"+P(e,/flex-|-self/g,""))+e;case 4675:return v+e+m+"flex-line-pack"+P(e,/align-content|flex-|-self/g,"")+e;case 5548:return v+e+m+P(e,"shrink","negative")+e;case 5292:return v+e+m+P(e,"basis","preferred-size")+e;case 6060:return v+"box-"+P(e,"-grow","")+v+e+m+P(e,"grow","positive")+e;case 4554:return v+P(e,/([^-])(transform)/g,"$1"+v+"$2")+e;case 6187:return P(P(P(e,/(zoom-|grab)/,v+"$1"),/(image-set)/,v+"$1"),e,"")+e;case 5495:case 3959:return P(e,/(image-set\([^]*)/,v+"$1$`$1");case 4968:return P(P(e,/(.+:)(flex-)?(.*)/,v+"box-pack:$3"+m+"flex-pack:$3"),/space-between/,"justify")+v+e+e;case 4200:if(!E(e,/flex-|baseline/))return m+"grid-column-align"+N(e,t)+e;break;case 2592:case 3360:return m+P(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,E(e.props,/grid-\w+-end/)})?~T(e+(n=n[t].value),"span",0)?e:m+P(e,"-start","")+e+m+"grid-row-span:"+(~T(n,"span",0)?E(n,/\d+/):+E(n,/\d+/)-+E(e,/\d+/))+";":m+P(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return E(e.props,/grid-\w+-start/)})?e:m+P(P(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return P(e,/(.+)-inline(.+)/,v+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(z(e)-1-t>6)switch(L(e,t+1)){case 109:if(45!==L(e,t+4))break;case 102:return P(e,/(.+:)(.+)-([^]+)/,"$1"+v+"$2-$3$1"+g+(108==L(e,t+3)?"$3":"$2-$3"))+e;case 115:return~T(e,"stretch",0)?se(P(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return P(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,a,o,i,l){return m+n+":"+r+l+(a?m+n+"-span:"+(o?i:+i-+r)+l:"")+e});case 4949:if(121===L(e,t+6))return P(e,":",":"+v)+e;break;case 6444:switch(L(e,45===L(e,14)?18:11)){case 120:return P(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+v+(45===L(e,14)?"inline-":"")+"box$3$1"+v+"$2$3$1"+m+"$2box$3")+e;case 100:return P(e,":",":"+m)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return P(e,"scroll-","scroll-snap-")+e}return e}function ce(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case x:return void(e.return=se(e.value,e.length,n));case w:return ie([W(e,{value:P(e.value,"@","@"+v)})],r);case b:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(E(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":V(W(e,{props:[P(t,/:(read-\w+)/,":-moz-$1")]})),V(W(e,{props:[t]})),j(e,{props:R(n,r)});break;case"::placeholder":V(W(e,{props:[P(t,/:(plac\w+)/,":"+v+"input-$1")]})),V(W(e,{props:[P(t,/:(plac\w+)/,":-moz-$1")]})),V(W(e,{props:[P(t,/:(plac\w+)/,m+"input-$1")]})),V(W(e,{props:[t]})),j(e,{props:R(n,r)})}return""})}}function ue(e){return Z(de("",null,null,null,[""],e=X(e),0,[0],e))}function de(e,t,n,r,a,o,i,l,s){for(var c=0,u=0,d=i,p=0,f=0,h=0,m=1,g=1,v=1,y=0,b="",x=a,w=o,j=r,C=b;g;)switch(h=y,y=G()){case 40:if(108!=h&&58==L(C,d-1)){-1!=T(C+=P(ee(y),"&","&\f"),"&\f",k(c?l[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:C+=ee(y);break;case 9:case 10:case 13:case 32:C+=te(h);break;case 92:C+=ne(Q()-1,7);continue;case 47:switch(K()){case 42:case 47:_(fe(ae(G(),Q()),t,n,s),s),5!=J(h||1)&&5!=J(K()||1)||!z(C)||" "===N(C,-1,void 0)||(C+=" ");break;default:C+="/"}break;case 123*m:l[c++]=z(C)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==v&&(C=P(C,/\f/g,"")),f>0&&(z(C)-d||0===m&&47===h)&&_(f>32?he(C+";",r,n,d-1,s):he(P(C," ","")+";",r,n,d-2,s),s);break;case 59:C+=";";default:if(_(j=pe(C,t,n,c,u,a,l,b,x=[],w=[],d,o),o),123===y)if(0===u)de(C,t,j,j,x,o,d,l,w);else{switch(p){case 99:if(110===L(C,3))break;case 108:if(97===L(C,2))break;default:u=0;case 100:case 109:case 115:}u?de(e,j,j,r&&_(pe(e,j,j,0,0,a,l,b,a,x=[],d,w),w),a,w,d,l,r?x:w):de(C,j,j,j,[""],w,0,l,w)}}c=u=f=0,m=v=1,b=C="",d=i;break;case 58:d=1+z(C),f=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==q())continue;switch(C+=S(y),y*m){case 38:v=u>0?1:(C+="\f",-1);break;case 44:l[c++]=(z(C)-1)*v,v=1;break;case 64:45===K()&&(C+=ee(G())),p=K(),u=d=z(b=C+=oe(Q())),y++;break;case 45:45===h&&2==z(C)&&(m=0)}}return o}function pe(e,t,n,r,a,o,i,l,s,c,u,d){for(var p=a-1,f=0===a?o:[""],h=O(f),m=0,g=0,v=0;m<r;++m)for(var y=0,x=N(e,p+1,p=k(g=i[m])),w=e;y<h;++y)(w=C(g>0?f[y]+" "+x:P(x,/&\f/g,f[y])))&&(s[v++]=w);return B(e,t,n,0===a?b:l,s,c,u,d)}function fe(e,t,n,r){return B(e,t,n,y,S(U),N(e,2,-2),0,r)}function he(e,t,n,r,a){return B(e,t,n,x,N(e,0,r),N(e,r+1,-1),r,a)}const me="data-styled",ge="active",ve="data-styled-version",ye="6.5.3",be="/*!sc*/\n",xe="undefined"!=typeof window&&"undefined"!=typeof document;function we(e){if("undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/abdulrahman-portfolio-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}){const t={NODE_ENV:"production",PUBLIC_URL:"/abdulrahman-portfolio-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}[e];if(void 0!==t&&""!==t)return"false"!==t}}const ke=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:null!==(A=null!==(D=we("REACT_APP_SC_DISABLE_SPEEDY"))&&void 0!==D?D:we("SC_DISABLE_SPEEDY"))&&void 0!==A?A:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/abdulrahman-portfolio-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&!1),Se="sc-keyframes-",je={};function Ce(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${n.length>0?` Args: ${n.join(", ")}`:""}`)}let Ee=new Map,Pe=new Map,Te=1;const Le=e=>{if(Ee.has(e))return Ee.get(e);for(;Pe.has(Te);)Te++;const t=Te++;return Ee.set(e,t),Pe.set(t,e),t},Ne=e=>Pe.get(e),ze=(e,t)=>{Te=t+1,Ee.set(e,t),Pe.set(t,e)},Oe=(new Set,Object.freeze([])),_e=Object.freeze({});function Re(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_e;return e.theme!==n.theme&&e.theme||t||n.theme}const De=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ae=/(^-|-$)/g;function Me(e){return e.replace(De,"-").replace(Ae,"")}const $e=/(a)(d)/gi,Ie=e=>String.fromCharCode(e+(e>25?39:97));function Fe(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ie(t%52)+n;return(Ie(t%52)+n).replace($e,"$1-$2")}const Ue=5381,He=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},Be=e=>He(Ue,e);function We(e){return Fe(Be(e)>>>0)}function Ve(e){return e.displayName||e.name||"Component"}function qe(e){return"string"==typeof e&&!0}function Ge(e){return qe(e)?`styled.${e}`:`Styled(${Ve(e)})`}const Ke=Symbol.for("react.memo"),Qe=Symbol.for("react.forward_ref"),Ye={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Je={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xe={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ze={[Qe]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Ke]:Xe};function et(e){return("type"in(t=e)&&t.type.$$typeof)===Ke?Xe:"$$typeof"in e?Ze[e.$$typeof]:Ye;var t}const tt=Object.defineProperty,nt=Object.getOwnPropertyNames,rt=Object.getOwnPropertySymbols,at=Object.getOwnPropertyDescriptor,ot=Object.getPrototypeOf,it=Object.prototype;function lt(e,t,n){if("string"!=typeof t){const r=ot(t);r&&r!==it&&lt(e,r,n);const a=nt(t).concat(rt(t)),o=et(e),i=et(t);for(let l=0;l<a.length;++l){const r=a[l];if(!(r in Je||n&&n[r]||i&&r in i||o&&r in o)){const n=at(t,r);try{tt(e,r,n)}catch(e){}}}}return e}function st(e){return"function"==typeof e}const ct=Symbol.for("react.forward_ref");function ut(e){return null!=e&&("object"==typeof e||"function"==typeof e)&&e.$$typeof===ct&&"styledComponentId"in e}function dt(e,t){return e&&t?e+" "+t:e||t||""}function pt(e,t){return e.join(t||"")}function ft(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ht(e,t){if(!(arguments.length>2&&void 0!==arguments[2]&&arguments[2])&&!ft(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=ht(e[n],t[n]);else if(ft(t))for(const n in t)e[n]=ht(e[n],t[n]);return e}function mt(e,t){Object.defineProperty(e,"toString",{value:t})}const gt=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const t=this.groupSizes,n=t.length;let r=n;for(;e>=r;)if(r<<=1,r<0)throw Ce(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let a=0,o=t.length;a<o;a++)this.tag.insertRule(n,t[a])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||0===this.groupSizes[e])return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n;for(let o=r;o<a;o++)t+=this.tag.getRule(o)+be;return t}},vt=`style[${me}][${ve}="${ye}"]`,yt=new RegExp(`^${me}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),bt=e=>"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType,xt=e=>{if(!e)return document;if(bt(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(bt(t))return t}return document},wt=(e,t,n)=>{const r=n.split(",");let a;for(let o=0,i=r.length;o<i;o++)(a=r[o])&&e.registerName(t,a)},kt=(e,t)=>{var n;const r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(be),a=[];for(let o=0,i=r.length;o<i;o++){const t=r[o].trim();if(!t)continue;const n=t.match(yt);if(n){const t=0|parseInt(n[1],10),r=n[2];0!==t&&(ze(r,t),wt(e,r,n[3]),e.getTag().insertRules(t,a)),a.length=0}else a.push(t)}},St=e=>{const t=xt(e.options.target).querySelectorAll(vt);for(let n=0,r=t.length;n<r;n++){const r=t[n];r&&r.getAttribute(me)!==ge&&(kt(e,r),r.parentNode&&r.parentNode.removeChild(r))}};let jt=!1;function Ct(){if(!1!==jt)return jt;if("undefined"!=typeof document){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return jt=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return jt=t.getAttribute("content")||void 0}return jt=n.nc}const Et=(e,t)=>{const n=document.head,r=e||n,a=document.createElement("style"),o=(e=>{const t=Array.from(e.querySelectorAll(`style[${me}]`));return t[t.length-1]})(r),i=void 0!==o?o.nextSibling:null;a.setAttribute(me,ge),a.setAttribute(ve,ye);const l=t||Ct();return l&&a.setAttribute("nonce",l),r.insertBefore(a,i),a},Pt=class{constructor(e,t){this.element=Et(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(e=>{var t;if(e.sheet)return e.sheet;const n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets;for(let r=0,a=n.length;r<a;r++){const t=n[r];if(t.ownerNode===e)return t}throw Ce(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},Tt=class{constructor(e,t){this.element=Et(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Lt=xe;const Nt={isServer:!xe,useCSSOMInjection:!ke};class zt{static registerId(e){return Le(e)}constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;this.options=Object.assign(Object.assign({},Nt),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&xe&&Lt&&(Lt=!1,St(this)),mt(this,()=>(e=>{const t=e.getTag(),{length:n}=t;let r="";for(let a=0;a<n;a++){const n=Ne(a);if(void 0===n)continue;const o=e.names.get(n);if(void 0===o||!o.size)continue;const i=t.getGroup(a);if(0===i.length)continue;const l=me+".g"+a+'[id="'+n+'"]';let s="";for(const e of o)e.length>0&&(s+=e+",");r+=i+l+'{content:"'+s+'"}'+be}return r})(this))}rehydrate(){!this.server&&xe&&St(this)}reconstructWithOptions(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=new zt(Object.assign(Object.assign({},this.options),e),this.gs,t&&this.names||void 0);return n.keyframeIds=new Set(this.keyframeIds),!this.server&&xe&&e.target!==this.options.target&&xt(this.options.target)!==xt(e.target)&&St(n),n}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||(this.tag=(e=(e=>{let{useCSSOMInjection:t,target:n,nonce:r}=e;return t?new Pt(n,r):new Tt(n,r)})(this.options),new gt(e)));var e}hasNameForId(e,t){var n,r;return null!==(r=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==r&&r}registerName(e,t){Le(e),e.startsWith(Se)&&this.keyframeIds.add(e);const n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(Le(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(Le(e)),this.clearNames(e)}clearTag(){this.tag=void 0}}const Ot=new WeakSet,_t={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Rt(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in _t||e.startsWith("--")?String(t).trim():t+"px"}const Dt=47;function At(e){if(45===e.charCodeAt(0)&&45===e.charCodeAt(1))return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const Mt=Symbol.for("sc-keyframes");function $t(e){return st(e)&&!(e.prototype&&e.prototype.isReactComponent)}const It=e=>null==e||!1===e||""===e,Ft=Symbol.for("react.client.reference");function Ut(e){return e.$$typeof===Ft}function Ht(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!It(r)&&(Array.isArray(r)&&Ot.has(r)||st(r)?t.push(At(n)+":",r,";"):ft(r)?(t.push(n+" {"),Ht(r,t),t.push("}")):t.push(At(n)+": "+Rt(n,r)+";"))}}function Bt(e,t,n,r){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];if(It(e))return a;const o=typeof e;if("string"===o)return a.push(e),a;if("function"===o){if(Ut(e))return a;if($t(e)&&t){return Bt(e(t),t,n,r,a)}return a.push(e),a}if(Array.isArray(e)){for(let o=0;o<e.length;o++)Bt(e[o],t,n,r,a);return a}return ut(e)?(a.push(`.${e.styledComponentId}`),a):function(e){return"object"==typeof e&&null!==e&&Mt in e}(e)?(n?(e.inject(n,r),a.push(e.getName(r))):a.push(e),a):Ut(e)?a:ft(e)?e.toString!==Object.prototype.toString?(a.push(e.toString()),a):(Ht(e,a),a):(a.push(e.toString()),a)}const Wt=Be(ye);class Vt{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=He(Wt,t),this.baseStyle=n,zt.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";{let a="";for(let r=0;r<this.rules.length;r++){const o=this.rules[r];if("string"==typeof o)a+=o;else if(o)if($t(o)){const r=o(e);"string"==typeof r?a+=r:null!=r&&!1!==r&&(a+=pt(Bt(r,e,t,n)))}else a+=pt(Bt(o,e,t,n))}if(a){this.dynamicNameCache||(this.dynamicNameCache=new Map);const e=n.hash?n.hash+a:a;let o=this.dynamicNameCache.get(e);if(!o){if(o=Fe(He(He(this.baseHash,n.hash),a)>>>0),this.dynamicNameCache.size>=200){const e=this.dynamicNameCache.keys().next().value;void 0!==e&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,o)}if(!t.hasNameForId(this.componentId,o)){const e=n(a,"."+o,void 0,this.componentId);t.insertRules(this.componentId,o,e)}r=dt(r,o)}}return r}}const qt=/&/g;function Gt(e,t){let n=0;for(;--t>=0&&92===e.charCodeAt(t);)n++;return!(1&~n)}function Kt(e){const t=e.length;let n="",r=0,a=0,o=0,i=!1,l=!1;for(let s=0;s<t;s++){const c=e.charCodeAt(s);if(0!==o||i||c!==Dt||42!==e.charCodeAt(s+1))if(i)42===c&&e.charCodeAt(s+1)===Dt&&(i=!1,s++);else if(34!==c&&39!==c||Gt(e,s)){if(0===o)if(123===c)a++;else if(125===c){if(a--,a<0){l=!0;let n=s+1;for(;n<t;){const t=e.charCodeAt(n);if(59===t||10===t)break;n++}n<t&&59===e.charCodeAt(n)&&n++,a=0,s=n-1,r=n;continue}0===a&&(n+=e.substring(r,s+1),r=s+1)}else 59===c&&0===a&&(n+=e.substring(r,s+1),r=s+1)}else 0===o?o=c:o===c&&(o=0);else i=!0,s++}return l||0!==a||0!==o?(r<t&&0===a&&0===o&&(n+=e.substring(r)),n):e}function Qt(e,t){const n=t+" ",r=","+n;for(let a=0;a<e.length;a++){const o=e[a];if("rule"===o.type){o.value=(n+o.value).replaceAll(",",r);const e=o.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];o.props=t}Array.isArray(o.children)&&"@keyframes"!==o.type&&Qt(o.children,t)}return e}function Yt(){let e,t,n,{options:r=_e,plugins:a=Oe}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e;const o=(n,r,a)=>a.startsWith(t)&&a.endsWith(t)&&a.replaceAll(t,"").length>0?`.${e}`:n,i=a.slice();i.push(e=>{e.type===b&&e.value.includes("&")&&(n||(n=new RegExp(`\\${t}\\b`,"g")),e.props[0]=e.props[0].replace(qt,t).replace(n,o))}),r.prefix&&i.push(ce),i.push(le);let l=[];const s=function(e){var t=O(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}(i.concat((d=e=>l.push(e),function(e){e.root||(e=e.return)&&d(e)}))),c=function(a){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"&",t=o,n=void 0;const c=function(e){const t=-1!==e.indexOf("//"),n=-1!==e.indexOf("}");if(!t&&!n)return e;if(!t)return Kt(e);const r=e.length;let a="",o=0,i=0,l=0,s=0,c=0,u=!1;for(;i<r;){const t=e.charCodeAt(i);if(34!==t&&39!==t||Gt(e,i))if(0===l)if(t===Dt&&i+1<r&&42===e.charCodeAt(i+1)){for(i+=2;i+1<r&&(42!==e.charCodeAt(i)||e.charCodeAt(i+1)!==Dt);)i++;i+=2}else if(40!==t)if(41!==t)if(s>0)i++;else if(42===t&&i+1<r&&e.charCodeAt(i+1)===Dt)a+=e.substring(o,i),i+=2,o=i,u=!0;else if(t===Dt&&i+1<r&&e.charCodeAt(i+1)===Dt){for(a+=e.substring(o,i);i<r&&10!==e.charCodeAt(i);)i++;o=i,u=!0}else 123===t?c++:125===t&&c--,i++;else s>0&&s--,i++;else s++,i++;else i++;else 0===l?l=t:l===t&&(l=0),i++}return u?(o<r&&(a+=e.substring(o)),0===c?a:Kt(a)):0===c?e:Kt(e)}(a);let u=ue(i||o?i+" "+o+" { "+c+" }":c);return r.namespace&&(u=Qt(u,r.namespace)),l=[],ie(u,s),l},u=r;var d;let p=Ue;for(let f=0;f<a.length;f++)a[f].name||Ce(15),p=He(p,a[f].name);return(null==u?void 0:u.namespace)&&(p=He(p,u.namespace)),(null==u?void 0:u.prefix)&&(p=He(p,"p")),c.hash=p!==Ue?p.toString():"",c}const Jt=new zt,Xt=Yt(),Zt=s().createContext({shouldForwardProp:void 0,styleSheet:Jt,stylis:Xt,stylisPlugins:void 0});Zt.Consumer;function en(){return s().useContext(Zt)}const tn=s().createContext(void 0);tn.Consumer;const nn=Object.prototype.hasOwnProperty,rn={};function an(e,t){const n="string"!=typeof e?"sc":Me(e);rn[n]=(rn[n]||0)+1;const r=n+"-"+We(ye+n+rn[n]);return t?t+"-"+r:r}function on(e,t,n){const r=ut(e),a=e,o=!qe(e),{attrs:i=Oe,componentId:l=an(t.displayName,t.parentComponentId),displayName:c=Ge(e)}=t,u=t.displayName&&t.componentId?Me(t.displayName)+"-"+t.componentId:t.componentId||l,d=r&&a.attrs?a.attrs.concat(i).filter(Boolean):i;let{shouldForwardProp:p}=t;if(r&&a.shouldForwardProp){const e=a.shouldForwardProp;if(t.shouldForwardProp){const n=t.shouldForwardProp;p=(t,r)=>e(t,r)&&n(t,r)}else p=e}const f=new Vt(n,u,r?a.componentStyle:void 0);function h(e,t){return function(e,t,n){const{attrs:r,componentStyle:a,defaultProps:o,foldedComponentIds:i,styledComponentId:l,target:c}=e,u=s().useContext(tn),d=en(),p=e.shouldForwardProp||d.shouldForwardProp,f=Re(t,u,o)||_e;let h,m;{const e=s().useRef(null),n=e.current;if(null!==n&&n[1]===f&&n[2]===d.styleSheet&&n[3]===d.stylis&&n[7]===a&&function(e,t,n){const r=e,a=t;let o=0;for(const i in a)if(nn.call(a,i)&&(o++,r[i]!==a[i]))return!1;return o===n}(n[0],t,n[4]))h=n[5],m=n[6];else{h=function(e,t,n){const r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),a=e.length>1;for(let o=0;o<e.length;o++){const n=e[o],i=st(n)?n(a?Object.assign({},r):r):n;for(const e in i)"className"===e?r.className=dt(r.className,i[e]):"style"===e?r.style=Object.assign(Object.assign({},r.style),i[e]):e in t&&void 0===t[e]||(r[e]=i[e])}return"className"in t&&"string"==typeof t.className&&(r.className=dt(r.className,t.className)),r}(r,t,f),m=a.generateAndInjectStyles(h,d.styleSheet,d.stylis);let n=0;for(const e in t)nn.call(t,e)&&n++;e.current=[t,f,d.styleSheet,d.stylis,n,h,m,a]}}const g=h.as||c,v=function(e,t,n,r){const a={};for(const o in e)void 0===e[o]||"$"===o[0]||"as"===o||"theme"===o&&e.theme===n||("forwardedAs"===o?a.as=e.forwardedAs:r&&!r(o,t)||(a[o]=e[o]));return a}(h,g,f,p);let y=dt(i,l);return m&&(y+=" "+m),h.className&&(y+=" "+h.className),v[qe(g)&&g.includes("-")?"class":"className"]=y,n&&(v.ref=n),(0,s().createElement)(g,v)}(m,e,t)}h.displayName=c;let m=s().forwardRef(h);return m.attrs=d,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=p,m.foldedComponentIds=r?dt(a.foldedComponentIds,a.styledComponentId):"",m.styledComponentId=u,m.target=r?a.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(const a of n)ht(e,a,!0);return e}({},a.defaultProps,e):e}}),mt(m,()=>`.${m.styledComponentId}`),o&&lt(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var ln=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function sn(e,t){const n=[e[0]];for(let r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}const cn=e=>(Ot.add(e),e);function un(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(st(e)||ft(e))return cn(Bt(sn(Oe,[e,...n])));const a=e;return 0===n.length&&1===a.length&&"string"==typeof a[0]?Bt(a):cn(Bt(sn(a,n)))}function dn(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_e;if(!t)throw Ce(1,t);const r=function(r){for(var a=arguments.length,o=new Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];return e(t,n,un(r,...o))};return r.attrs=r=>dn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>dn(e,t,Object.assign(Object.assign({},n),r)),r}const pn=e=>dn(on,e),fn=pn;ln.forEach(e=>{fn[e]=pn(e)});class hn{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){const n=e[t];if(st(n)&&!ut(n))return!1}return!0}(e),zt.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){const a=this.componentId;if(this.isStatic){if(n.hasNameForId(a,a+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{const o=this.computeRules(e,t,n,r);n.insertRules(a,o.name,o.rules)}return}const o=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&o){const t=o.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){const a=pt(Bt(this.rules,t,n,r)),o={name:this.componentId+e,rules:r(a,"")};return this.instanceRules.set(e,o),o}rebuildGroup(e){const t=this.componentId;e.clearRules(t);for(const n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}}function mn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const a=un(e,...n),o=`sc-global-${We(JSON.stringify(a))}`,i=new hn(a,o),l=e=>{const t=en(),n=s().useContext(tn);let r;{const e=s().useRef(null);null===e.current&&(e.current=t.styleSheet.allocateGSInstance(o)),r=e.current}t.styleSheet.server&&c(r,e,t.styleSheet,n,t.stylis);{const a=i.isStatic?[r,t.styleSheet,i]:[r,e,t.styleSheet,n,t.stylis,i],l=s().useRef(i);s().useLayoutEffect(()=>{t.styleSheet.server||(l.current!==i&&(t.styleSheet.clearRules(o),l.current=i),c(r,e,t.styleSheet,n,t.stylis))},a),s().useLayoutEffect(()=>()=>{t.styleSheet.server||i.removeStyles(r,t.styleSheet)},[r,t.styleSheet,i])}return t.styleSheet.server&&i.instanceRules.delete(r),null};function c(e,t,n,r,a){if(i.isStatic)i.renderStyles(e,je,n,a);else{const o=Object.assign(Object.assign({},t),{theme:Re(t,r,l.defaultProps)});i.renderStyles(e,o,n,a)}}return s().memo(l)}var gn;class vn{constructor(e,t){var n=this;this[gn]=!0,this.inject=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Xt;const r=n.getName(t);if(!e.hasNameForId(n.id,r)){const a=t(n.rules,r,"@keyframes");e.insertRules(n.id,r,a)}},this.name=e,this.id=Se+e,this.rules=t,Le(this.id),mt(this,()=>{throw Ce(12,String(this.name))})}getName(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xt;return e.hash?this.name+Fe(+e.hash>>>0):this.name}}function yn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const a=pt(un(e,...n)),o=We(a);return new vn(o,a)}gn=Mt;var bn=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,xn=/^[\\/]{2}/;function wn(e,t){return t+e.replace(/\\/g,"/")}var kn="popstate";function Sn(e){return"object"===typeof e&&null!=e&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function jn(){return zn(function(e,t){let n=t.state?.masked,{pathname:r,search:a,hash:o}=n||e.location;return Tn("",{pathname:r,search:a,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default",n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)},function(e,t){return"string"===typeof t?t:Ln(t)},null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function Cn(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function En(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function Pn(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Tn(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?Nn(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10),mask:a}}function Ln(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function Nn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function zn(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:a=document.defaultView,v5Compat:o=!1}=r,i=a.history,l="POP",s=null,c=u();function u(){return(i.state||{idx:null}).idx}function d(){l="POP";let e=u(),t=null==e?null:e-c;c=e,s&&s({action:l,location:f.location,delta:t})}function p(e){return On(a,e)}null==c&&(c=0,i.replaceState({...i.state,idx:c},""));let f={get action(){return l},get location(){return e(a,i)},listen(e){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(kn,d),s=e,()=>{a.removeEventListener(kn,d),s=null}},createHref:e=>t(a,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){l="PUSH";let r=Sn(e)?e:Tn(f.location,e,t);n&&n(r,e),c=u()+1;let d=Pn(r,c),p=f.createHref(r.mask||r);try{i.pushState(d,"",p)}catch(h){if(h instanceof DOMException&&"DataCloneError"===h.name)throw h;a.location.assign(p)}o&&s&&s({action:l,location:f.location,delta:1})},replace:function(e,t){l="REPLACE";let r=Sn(e)?e:Tn(f.location,e,t);n&&n(r,e),c=u();let a=Pn(r,c),d=f.createHref(r.mask||r);i.replaceState(a,"",d),o&&s&&s({action:l,location:f.location,delta:0})},go:e=>i.go(e)};return f}function On(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r="http://localhost";e&&(r="null"!==e.location.origin?e.location.origin:e.location.href),Cn(r,"No window.location.(origin|href) available to create URL");let a="string"===typeof t?t:Ln(t);return a=a.replace(/ $/,"%20"),!n&&xn.test(a)&&(a=r+a),new URL(a,r)}new WeakMap;function _n(e,t){return Rn(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function Rn(e,t,n,r,a){let o=Jn(("string"===typeof t?Nn(t):t).pathname||"/",n);if(null==o)return null;let i=a??Dn(e),l=null,s=Yn(o);for(let c=0;null==l&&c<i.length;++c)l=qn(i[c],s,r);return l}function Dn(e){let t=An(e);return function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(t),t}function An(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=function(e,o){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,l=arguments.length>3?arguments[3]:void 0,s={relativePath:void 0===l?e.path||"":l,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};if(s.relativePath.startsWith("/")){if(!s.relativePath.startsWith(r)&&i)return;Cn(s.relativePath.startsWith(r),`Absolute route path "${s.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(r.length)}let c=ar([r,s.relativePath]),u=n.concat(s);e.children&&e.children.length>0&&(Cn(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),An(e.children,t,u,c,i)),(null!=e.path||e.index)&&t.push({path:c,score:Vn(c,e.index),routesMeta:u.map((e,t)=>{let[n,r]=Qn(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of Mn(e.path))o(e,t,!0,n);else o(e,t)}),t}function Mn(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let i=Mn(r.join("/")),l=[];return l.push(...i.map(e=>""===e?o:[o,e].join("/"))),a&&l.push(...i),l.map(t=>e.startsWith("/")&&""===t?"/":t)}var $n=/^:[\w-]+$/,In=3,Fn=2,Un=1,Hn=10,Bn=-2,Wn=e=>"*"===e;function Vn(e,t){let n=e.split("/"),r=n.length;return n.some(Wn)&&(r+=Bn),t&&(r+=Fn),n.filter(e=>!Wn(e)).reduce((e,t)=>e+($n.test(t)?In:""===t?Un:Hn),r)}function qn(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,a={},o="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,c="/"===o?t:t.slice(o.length)||"/",u={path:e.relativePath,caseSensitive:e.caseSensitive,end:s},d=e.matcher&&e.compiledParams?Kn(u,c,e.matcher,e.compiledParams):Gn(u,c),p=e.route;if(!d&&s&&n&&!r[r.length-1].route.index&&(d=Gn({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!d)return null;Object.assign(a,d.params),i.push({params:a,pathname:ar([o,d.pathname]),pathnameBase:ir(ar([o,d.pathnameBase])),route:p}),"/"!==d.pathnameBase&&(o=ar([o,d.pathnameBase]))}return i}function Gn(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Qn(e.path,e.caseSensitive,e.end);return Kn(e,t,n,r)}function Kn(e,t,n,r){let a=t.match(n);if(!a)return null;let o=a[0],i=or(o,1),l=a.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";i=or(o.slice(0,o.length-e.length),1)}const s=l[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:o,pathnameBase:i,pattern:e}}function Qn(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];En("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n,a,o)=>{if(r.push({paramName:t,isOptional:null!=n}),n){let t=o.charAt(a+e.length);return t&&"/"!==t?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Yn(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return En(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Jn(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function Xn(e,t){let n=or(t).split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}function Zn(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function er(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function tr(e){let t=er(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function nr(e,t,n){let r,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=Nn(e):(r={...e},Cn(!r.pathname||!r.pathname.includes("?"),Zn("?","pathname","search",r)),Cn(!r.pathname||!r.pathname.includes("#"),Zn("#","pathname","hash",r)),Cn(!r.search||!r.search.includes("#"),Zn("#","search","hash",r)));let o,i=""===e||""===r.pathname,l=i?"/":r.pathname;if(null==l)o=n;else{let e=t.length-1;if(!a&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}o=e>=0?t[e]:"/"}let s=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:r,search:a="",hash:o=""}="string"===typeof e?Nn(e):e;return r?(r=rr(r),t=r.startsWith("/")||r.startsWith("\\")?Xn(r.substring(1),"/"):Xn(r,n)):t=n,{pathname:t,search:lr(a),hash:sr(o)}}(r,o),c=l&&"/"!==l&&l.endsWith("/"),u=(i||"."===l)&&n.endsWith("/");return s.pathname.endsWith("/")||!c&&!u||(s.pathname+="/"),s}var rr=e=>e.replace(/[\\/]{2,}/g,"/"),ar=e=>rr(e.join("/"));function or(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e.length;for(;n>t&&47===e.charCodeAt(n-1);)n--;return n===e.length?e:e.slice(0,n)}var ir=e=>or(e).replace(/^\/*/,"/"),lr=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",sr=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";var cr=class{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function ur(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}function dr(e){let t=e.map(e=>e.route.path).filter(Boolean);return ar(t)||"/"}var pr="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;function fr(e,t){let n=e;if("string"!==typeof n||!bn.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,a=!1;if(pr)try{let e=new URL(window.location.href),r=xn.test(n)?new URL(wn(n,e.protocol)):new URL(n),o=Jn(r.pathname,t);r.origin===e.origin&&null!=o?n=o+r.search+r.hash:a=!0}catch(o){En(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:a,to:n}}Symbol("Uninstrumented");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var hr=new URL("http://localhost");function mr(e){if(e.createURL)return e.createURL("/");try{return new URL(e.createHref("/"),hr)}catch{return hr}}function gr(e,t){return e.origin===t.origin&&("null"!==e.origin||e.protocol===t.protocol&&e.host===t.host)}function vr(e,t,n,r){let a=null;try{a=null==e?null:new URL(e,n)}catch{}let o=new URL(t,n),i=null!=a&&!gr(a,n),l=!gr(o,n);if("reject"===r){if(i||l)throw new Error("External navigation is not allowed")}else if(l&&(null==a||!function(e,t){if(e.startsWith("//"))return!0;let n=t.protocol.toLowerCase();return!!e.toLowerCase().startsWith(n)&&(""===t.host||e.slice(n.length).startsWith("//"))}(e,a)||!gr(a,o)))throw new Error("External navigation is not allowed")}var yr=["POST","PUT","PATCH","DELETE"],br=(new Set(yr),["GET",...yr]);new Set(br),Symbol("ResetLoaderData");new WeakMap,new WeakMap,new WeakMap,new WeakMap;var xr=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function wr(e){try{return xr.includes(new URL(e).protocol)}catch{return!1}}var kr=s().createContext(null);kr.displayName="DataRouter";var Sr=s().createContext(null);Sr.displayName="DataRouterState";var jr=s().createContext(!1);function Cr(){return s().useContext(jr)}var Er=s().createContext({isTransitioning:!1});Er.displayName="ViewTransition";var Pr=s().createContext(new Map);Pr.displayName="Fetchers";var Tr=s().createContext(null);Tr.displayName="Await";var Lr=s().createContext(null);Lr.displayName="Navigation";var Nr=s().createContext(null);Nr.displayName="Location";var zr=s().createContext({outlet:null,matches:[],isDataRoute:!1});zr.displayName="Route";var Or=s().createContext(null);Or.displayName="RouteError";var _r="REACT_ROUTER_ERROR";function Rr(){return null!=s().useContext(Nr)}function Dr(){return Cn(Rr(),"useLocation() may be used only in the context of a <Router> component."),s().useContext(Nr).location}var Ar="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Mr(e){s().useContext(Lr).static||s().useLayoutEffect(e)}function $r(){let{isDataRoute:e}=s().useContext(zr);return e?function(){let{router:e}=Yr("useNavigate"),t=Xr("useNavigate"),n=s().useRef(!1);Mr(()=>{n.current=!0});let r=s().useCallback(async function(r){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};En(n.current,Ar),n.current&&("number"===typeof r?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...a}))},[e,t]);return r}():function(){Cn(Rr(),"useNavigate() may be used only in the context of a <Router> component.");let e=s().useContext(kr),{basename:t,navigator:n}=s().useContext(Lr),{matches:r}=s().useContext(zr),{pathname:a}=Dr(),o=JSON.stringify(tr(r)),i=s().useRef(!1);Mr(()=>{i.current=!0});let l=s().useCallback(function(r){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(En(i.current,Ar),!i.current)return;if("number"===typeof r)return void n.go(r);let s=nr(r,JSON.parse(o),a,"path"===l.relative);null==e&&"/"!==t&&(s.pathname="/"===s.pathname?t:ar([t,s.pathname])),vr("string"===typeof r?r:Ln(r),n.createHref(s),mr(n),"reject"),(l.replace?n.replace:n.push)(s,l.state,l)},[t,n,o,a,e]);return l}()}s().createContext(null);function Ir(){let{matches:e}=s().useContext(zr),t=e[e.length-1];return t?.params??{}}function Fr(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:n}=s().useContext(zr),{pathname:r}=Dr(),a=JSON.stringify(tr(n));return s().useMemo(()=>nr(e,JSON.parse(a),r,"path"===t),[e,a,r,t])}function Ur(e,t,n){Cn(Rr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=s().useContext(Lr),{matches:a}=s().useContext(zr),o=a[a.length-1],i=o?o.params:{},l=o?o.pathname:"/",c=o?o.pathnameBase:"/",u=o&&o.route;{let e=u&&u.path||"";ta(l,!u||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let d,p=Dr();if(t){let e="string"===typeof t?Nn(t):t;Cn("/"===c||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=p;let f=d.pathname||"/",h=f;if("/"!==c){let e=c.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(e.length).join("/")}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):_n(e,{pathname:h});En(u||null!=m,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),En(null==m||void 0!==m[m.length-1].route.element||void 0!==m[m.length-1].route.Component||void 0!==m[m.length-1].route.lazy,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=Kr(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},i,e.params),pathname:ar([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:ar([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathnameBase])})),a,n);return t&&g?s().createElement(Nr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...d},navigationType:"POP"}},g):g}function Hr(){let e=Zr(),t=ur(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},i=null;return console.error("Error handled by React Router default ErrorBoundary:",e),i=s().createElement(s().Fragment,null,s().createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),s().createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",s().createElement("code",{style:o},"ErrorBoundary")," or"," ",s().createElement("code",{style:o},"errorElement")," prop on your route.")),s().createElement(s().Fragment,null,s().createElement("h2",null,"Unexpected Application Error!"),s().createElement("h3",{style:{fontStyle:"italic"}},t),n?s().createElement("pre",{style:a},n):null,i)}var Br=s().createElement(Hr,null),Wr=class extends s().Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&"object"===typeof e&&e&&"digest"in e&&"string"===typeof e.digest){const t=function(e){if(e.startsWith(`${_r}:ROUTE_ERROR_RESPONSE:{`))try{let t=JSON.parse(e.slice(40));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText)return new cr(t.status,t.statusText,t.data)}catch{}}(e.digest);t&&(e=t)}let t=void 0!==e?s().createElement(zr.Provider,{value:this.props.routeContext},s().createElement(Or.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?s().createElement(qr,{error:e},t):t}};Wr.contextType=jr;var Vr=new WeakMap;function qr(e){let{children:t,error:n}=e,{basename:r,navigator:a}=s().useContext(Lr);if("object"===typeof n&&n&&"digest"in n&&"string"===typeof n.digest){let e=function(e){if(e.startsWith(`${_r}:REDIRECT:{`))try{let t=JSON.parse(e.slice(28));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText&&"string"===typeof t.location&&"boolean"===typeof t.reloadDocument&&"boolean"===typeof t.replace)return t}catch{}}(n.digest);if(e){let t=Vr.get(n);if(t)throw t;let o=fr(e.location,r),i=o.absoluteURL||o.to;if(vr(e.location,i,mr(a),"allow-explicit"),wr(i))throw new Error("Invalid redirect location");if(pr&&!Vr.get(n)){if(!o.isExternal&&!e.reloadDocument){const t=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:e.replace}));throw Vr.set(n,t),t}window.location.href=i}return s().createElement("meta",{httpEquiv:"refresh",content:`0;url=${i}`})}}return t}function Gr(e){let{routeContext:t,match:n,children:r}=e,a=s().useContext(kr);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),s().createElement(zr.Provider,{value:t},r)}function Kr(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,r=n?.state;if(null==e){if(!r)return null;if(r.errors)e=r.matches;else{if(0!==t.length||r.initialized||!(r.matches.length>0))return null;e=r.matches}}let a=e,o=r?.errors;if(null!=o){let e=a.findIndex(e=>e.route.id&&void 0!==o?.[e.route.id]);Cn(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,e+1))}let i=!1,l=-1;if(n&&r){i=r.renderFallback;for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(l=e),t.route.id){let{loaderData:e,errors:o}=r,s=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!o||void 0===o[t.route.id]);if(t.route.lazy||s){n.isStatic&&(i=!0),a=l>=0?a.slice(0,l+1):[a[0]];break}}}}let c=n?.onError,u=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:dr(r.matches),errorInfo:t})}:void 0;return a.reduceRight((e,n,c)=>{let d,p=!1,f=null,h=null;r&&(d=o&&n.route.id?o[n.route.id]:void 0,f=n.route.errorElement||Br,i&&(l<0&&0===c?(ta("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,h=null):l===c&&(p=!0,h=n.route.hydrateFallbackElement||null)));let m=t.concat(a.slice(0,c+1)),g=()=>{let t;return t=d?f:p?h:n.route.Component?s().createElement(n.route.Component,null):n.route.element?n.route.element:e,s().createElement(Gr,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||0===c)?s().createElement(Wr,{location:r.location,revalidation:r.revalidation,component:f,error:d,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:u}):g()},null)}function Qr(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yr(e){let t=s().useContext(kr);return Cn(t,Qr(e)),t}function Jr(e){let t=s().useContext(Sr);return Cn(t,Qr(e)),t}function Xr(e){let t=function(e){let t=s().useContext(zr);return Cn(t,Qr(e)),t}(e),n=t.matches[t.matches.length-1];return Cn(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Zr(){let e=s().useContext(Or),t=Jr("useRouteError"),n=Xr("useRouteError");return void 0!==e?e:t.errors?.[n]}var ea={};function ta(e,t,n){t||ea[e]||(ea[e]=!0,En(!1,n))}var na={};function ra(e,t){e||na[t]||(na[t]=!0,console.warn(t))}(function e(){return e.c||(e.c=n.t(c(),2))})().useOptimistic;s().memo(aa);function aa(e){let{routes:t,manifest:n,future:r,state:a,isStatic:o,onError:i}=e;return Ur(t,void 0,{manifest:n,state:a,isStatic:o,onError:i,future:r})}function oa(e){Cn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ia(e){let{basename:t="/",children:n=null,location:r,navigationType:a="POP",navigator:o,static:i=!1,useTransitions:l}=e;Cn(!Rr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),u=s().useMemo(()=>({basename:c,navigator:o,static:i,useTransitions:l,future:{}}),[c,o,i,l]);"string"===typeof r&&(r=Nn(r));let{pathname:d="/",search:p="",hash:f="",state:h=null,key:m="default",mask:g}=r,v=s().useMemo(()=>{let e=Jn(d,c);return null==e?null:{location:{pathname:e,search:p,hash:f,state:h,key:m,mask:g},navigationType:a}},[c,d,p,f,h,m,a,g]);return En(null!=v,`<Router basename="${c}"> is not able to match the URL "${d}${p}${f}" because it does not start with the basename, so the <Router> won't render anything.`),null==v?null:s().createElement(Lr.Provider,{value:u},s().createElement(Nr.Provider,{children:n,value:v}))}function la(e){let{children:t,location:n}=e;return Ur(sa(t),n)}s().Component;function sa(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];return s().Children.forEach(e,(e,r)=>{if(!s().isValidElement(e))return;let a=[...t,r];if(e.type===s().Fragment)return void n.push.apply(n,sa(e.props.children,a));Cn(e.type===oa,`[${"string"===typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Cn(!e.props.index||!e.props.children,"An index route cannot have child routes.");let o={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(o.children=sa(e.props.children,a)),n.push(o)}),n}var ca="get",ua="application/x-www-form-urlencoded";function da(e){return"undefined"!==typeof HTMLElement&&e instanceof HTMLElement}var pa=null;var fa=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ha(e){return null==e||fa.has(e)?e:(En(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ua}"`),null)}function ma(e,t){let n,r,a,o,i;if(da(l=e)&&"form"===l.tagName.toLowerCase()){let i=e.getAttribute("action");r=i?Jn(i,t):null,n=e.getAttribute("method")||ca,a=ha(e.getAttribute("enctype"))||ua,o=new FormData(e)}else if(function(e){return da(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return da(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let i=e.form;if(null==i)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||i.getAttribute("action");if(r=l?Jn(l,t):null,n=e.getAttribute("formmethod")||i.getAttribute("method")||ca,a=ha(e.getAttribute("formenctype"))||ha(i.getAttribute("enctype"))||ua,o=new FormData(i,e),!function(){if(null===pa)try{new FormData(document.createElement("form"),0),pa=!1}catch(e){pa=!0}return pa}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";o.append(`${e}x`,"0"),o.append(`${e}y`,"0")}else t&&o.append(t,r)}}else{if(da(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ca,r=null,a=ua,i=e}var l;return o&&"text/plain"===a&&(i=o,o=void 0),{action:r,method:n.toLowerCase(),encType:a,formData:o,body:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ga(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}Symbol("SingleFetchRedirect");function va(e,t,n,r){let a="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return n?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${r}`:a.pathname=`${a.pathname}.${r}`:"/"===a.pathname?a.pathname=`_root.${r}`:t&&"/"===Jn(a.pathname,t)?a.pathname=`${or(t)}/_root.${r}`:a.pathname=`${or(a.pathname)}.${r}`,a}async function ya(e,t){if(e.id in t)return t[e.id];try{let n=await(import(e.module));return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ba(e){return null!=e&&"string"===typeof e.page}function xa(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function wa(e,t,n,r,a,o){let i=(e,t)=>!n[t]||e.route.id!==n[t].route.id,l=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===o?t.filter((e,t)=>i(e,t)||l(e,t)):"data"===o?t.filter((t,o)=>{let s=r.routes[t.route.id];if(!s||!s.hasLoader)return!1;if(i(t,o)||l(t,o))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0}):[]}function ka(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let a=[r.module];return r.clientActionModule&&(a=a.concat(r.clientActionModule)),r.clientLoaderModule&&(a=a.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(a=a.concat(r.hydrateFallbackModule)),r.imports&&(a=a.concat(r.imports)),a}).flat(1),[...new Set(r)];var r}function Sa(e,t){let n=new Set,r=new Set(t);return e.reduce((e,a)=>{if(t&&!ba(a)&&"script"===a.as&&a.href&&r.has(a.href))return e;let o=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(a));return n.has(o)||(n.add(o),e.push({key:o,link:a})),e},[])}function ja(e,t){return"lazy"===e.mode&&!0===t}function Ca(){let e=s().useContext(kr);return ga(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Ea(){let e=s().useContext(Sr);return ga(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Pa=s().createContext(void 0);function Ta(){let e=s().useContext(Pa);return ga(e,"You must render this element inside a <HydratedRouter> element"),e}function La(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Na(e,t,n){if(n&&!Da)return[e[0]];if(t){let n=e.findIndex(e=>void 0!==t[e.route.id]);return e.slice(0,n+1)}return e}Pa.displayName="FrameworkContext";function za(e){let{page:t,...n}=e,r=Cr(),{nonce:a}=Ta(),{router:o}=Ca(),i=s().useMemo(()=>_n(o.routes,t,o.basename),[o.routes,t,o.basename]);return i?(null==n.nonce&&a&&(n={...n,nonce:a}),r?s().createElement(_a,{page:t,matches:i,...n}):s().createElement(Ra,{page:t,matches:i,...n})):null}function Oa(e){let{manifest:t,routeModules:n}=Ta(),[r,a]=s().useState([]);return s().useEffect(()=>{let r=!1;return async function(e,t,n){return Sa((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await ya(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(xa).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(e,t,n).then(e=>{r||a(e)}),()=>{r=!0}},[e,t,n]),r}function _a(e){let{page:t,matches:n,...r}=e,a=Dr(),{future:o}=Ta(),{basename:i}=Ca(),l=s().useMemo(()=>{if(t===a.pathname+a.search+a.hash)return[];let e=va(t,i,o.v8_trailingSlashAwareDataRequests,"rsc"),r=!1,l=[];for(let t of n)"function"===typeof t.route.shouldRevalidate?r=!0:l.push(t.route.id);return r&&l.length>0&&e.searchParams.set("_routes",l.join(",")),[e.pathname+e.search]},[i,o.v8_trailingSlashAwareDataRequests,t,a,n]);return s().createElement(s().Fragment,null,l.map(e=>s().createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...r})))}function Ra(e){let{page:t,matches:n,...r}=e,a=Dr(),{future:o,manifest:i,routeModules:l}=Ta(),{basename:c}=Ca(),{loaderData:u,matches:d}=Ea(),p=s().useMemo(()=>wa(t,n,d,i,a,"data"),[t,n,d,i,a]),f=s().useMemo(()=>wa(t,n,d,i,a,"assets"),[t,n,d,i,a]),h=s().useMemo(()=>{if(t===a.pathname+a.search+a.hash)return[];let e=new Set,r=!1;if(n.forEach(t=>{let n=i.routes[t.route.id];n&&n.hasLoader&&(!p.some(e=>e.route.id===t.route.id)&&t.route.id in u&&l[t.route.id]?.shouldRevalidate||n.hasClientLoader?r=!0:e.add(t.route.id))}),0===e.size)return[];let s=va(t,c,o.v8_trailingSlashAwareDataRequests,"data");return r&&e.size>0&&s.searchParams.set("_routes",n.filter(t=>e.has(t.route.id)).map(e=>e.route.id).join(",")),[s.pathname+s.search]},[c,o.v8_trailingSlashAwareDataRequests,u,a,i,p,n,t,l]),m=s().useMemo(()=>ka(f,i),[f,i]),g=Oa(f);return s().createElement(s().Fragment,null,h.map(e=>s().createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...r})),m.map(e=>s().createElement("link",{key:e,rel:"modulepreload",href:e,...r})),g.map(e=>{let{key:t,link:n}=e;return s().createElement("link",{key:t,nonce:r.nonce,...n,crossOrigin:n.crossOrigin??r.crossOrigin})}))}var Da=!1;function Aa(e){let{manifest:t,serverHandoffString:n,isSpaMode:r,renderMeta:a,routeDiscovery:o,ssr:i,nonce:l}=Ta(),{router:c,static:u,staticContext:d}=Ca(),{matches:p}=Ea(),f=Cr(),h=ja(o,i);null==e.nonce&&l&&(e={...e,nonce:l}),a&&(a.didRenderScripts=!0);let m=Na(p,null,r);s().useEffect(()=>{Da=!0},[]);let g=s().useMemo(()=>{if(f)return null;let r=d?`window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",a=u?`${t.hmr?.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}${h?"":`import ${JSON.stringify(t.url)}`};\n${m.map((e,n)=>{let r=`route${n}`,a=t.routes[e.route.id];ga(a,`Route ${e.route.id} not found in manifest`);let{clientActionModule:o,clientLoaderModule:i,clientMiddlewareModule:l,hydrateFallbackModule:s,module:c}=a,u=[...o?[{module:o,varName:`${r}_clientAction`}]:[],...i?[{module:i,varName:`${r}_clientLoader`}]:[],...l?[{module:l,varName:`${r}_clientMiddleware`}]:[],...s?[{module:s,varName:`${r}_HydrateFallback`}]:[],{module:c,varName:`${r}_main`}];return 1===u.length?`import * as ${r} from ${JSON.stringify(c)};`:[u.map(e=>`import * as ${e.varName} from "${e.module}";`).join("\n"),`const ${r} = {${u.map(e=>`...${e.varName}`).join(",")}};`].join("\n")}).join("\n")}\n  ${h?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,a=new Set(t.state.matches.map(e=>e.route.id)),o=t.state.location.pathname.split("/").filter(Boolean),i=["/"];for(o.pop();o.length>0;)i.push(`/${o.join("/")}`),o.pop();i.forEach(e=>{let n=Rn(t.routes,e,t.basename||"/",!1,t.branches);n&&n.forEach(e=>a.add(e.route.id))});let l=[...a].reduce((e,t)=>Object.assign(e,{[t]:r.routes[t]}),{});return{...r,routes:l,sri:!!n||void 0}}(t,c),null,2)};`:""}\n  window.__reactRouterRouteModules = {${m.map((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`).join(",")}};\n\nimport(${JSON.stringify(t.entry.module)});`:" ";return s().createElement(s().Fragment,null,s().createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:r},type:void 0}),s().createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:a},type:"module",async:!0}))},[]),v=Da||f?[]:[...new Set(t.entry.imports.concat(ka(m,t,{includeHydrateFallback:!0})))],y="object"===typeof t.sri?t.sri:{};return ra(!f,"The <Scripts /> element is a no-op when using RSC and can be safely removed."),Da||f?null:s().createElement(s().Fragment,null,"object"===typeof t.sri?s().createElement("script",{...e,"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:y})}}):null,h?null:s().createElement("link",{rel:"modulepreload",href:t.url,crossOrigin:e.crossOrigin,integrity:y[t.url],nonce:e.nonce,suppressHydrationWarning:!0}),s().createElement("link",{rel:"modulepreload",href:t.entry.module,crossOrigin:e.crossOrigin,integrity:y[t.entry.module],nonce:e.nonce,suppressHydrationWarning:!0}),v.map(t=>s().createElement("link",{key:t,rel:"modulepreload",href:t,crossOrigin:e.crossOrigin,integrity:y[t],nonce:e.nonce,suppressHydrationWarning:!0})),g)}function Ma(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)})}}s().Component;function $a(e){let{error:t,isOutsideRemixApp:n}=e,{nonce:r}=Ta();console.error(t);let a,o=s().createElement("script",{nonce:r,dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      '}});if(ur(t))return s().createElement(Ia,{title:"Unhandled Thrown Response!"},s().createElement("h1",{style:{fontSize:"24px"}},t.status," ",t.statusText),o);if(t instanceof Error)a=t;else{let e=null==t?"Unknown Error":"object"===typeof t&&"toString"in t?t.toString():JSON.stringify(t);a=new Error(e)}return s().createElement(Ia,{title:"Application Error!",isOutsideRemixApp:n},s().createElement("h1",{style:{fontSize:"24px"}},"Application Error"),s().createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},a.stack),o)}function Ia(e){let{title:t,renderScripts:n,isOutsideRemixApp:r,children:a}=e,{routeModules:o}=Ta();return o.root?.Layout&&!r?a:s().createElement("html",{lang:"en"},s().createElement("head",null,s().createElement("meta",{charSet:"utf-8"}),s().createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),s().createElement("title",null,t)),s().createElement("body",null,s().createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},a,n?s().createElement(Aa,null):null)))}var Fa="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{Fa&&(window.__reactRouterVersion="7.18.4")}catch(Wp){}function Ua(e){let{basename:t,children:n,useTransitions:r,window:a}=e,o=s().useRef();null==o.current&&(o.current=jn({window:a,v5Compat:!0}));let i=o.current,[l,c]=s().useState({action:i.action,location:i.location}),u=s().useCallback(e=>{!1===r?c(e):s().startTransition(()=>c(e))},[r]);return s().useLayoutEffect(()=>i.listen(u),[i,u]),s().createElement(ia,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i,useTransitions:r})}var Ha=s().forwardRef(function(e,t){let{onClick:n,discover:r="render",prefetch:a="none",relative:o,reloadDocument:i,replace:l,mask:c,state:u,target:d,to:p,preventScrollReset:f,viewTransition:h,defaultShouldRevalidate:m,...g}=e,{basename:v,navigator:y,useTransitions:b}=s().useContext(Lr),x="string"===typeof p&&bn.test(p),w=fr(p,v);p=w.to;let k=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Cn(Rr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=s().useContext(Lr),{hash:a,pathname:o,search:i}=Fr(e,{relative:t}),l=o;return"/"!==n&&(l="/"===o?n:ar([n,o])),r.createHref({pathname:l,search:i,hash:a})}(p,{relative:o}),S=Dr(),j=null;if(c){let e=nr(c,[],S.mask?S.mask.pathname:"/",!0);"/"!==v&&(e.pathname="/"===e.pathname?v:ar([v,e.pathname])),j=y.createHref(e)}let[C,E,P]=function(e,t){let n=s().useContext(Pa),[r,a]=s().useState(!1),[o,i]=s().useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:p}=t,f=s().useRef(null);s().useEffect(()=>{if("render"===e&&i(!0),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{i(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),s().useEffect(()=>{if(r){let e=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(e)}}},[r]);let h=()=>{a(!0)},m=()=>{a(!1),i(!1)};return n?"intent"!==e?[o,f,{}]:[o,f,{onFocus:La(l,h),onBlur:La(c,m),onMouseEnter:La(u,h),onMouseLeave:La(d,m),onTouchStart:La(p,h)}]:[!1,f,{}]}(a,g),T=function(e){let{target:t,replace:n,mask:r,state:a,preventScrollReset:o,relative:i,viewTransition:l,defaultShouldRevalidate:c,useTransitions:u}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=$r(),p=Dr(),f=Fr(e,{relative:i});return s().useCallback(h=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(h,t)){h.preventDefault();let t=void 0!==n?n:Ln(p)===Ln(f),m=()=>d(e,{replace:t,mask:r,state:a,preventScrollReset:o,relative:i,viewTransition:l,defaultShouldRevalidate:c});u?s().startTransition(()=>m()):m()}},[p,d,f,n,r,a,t,e,o,i,l,c,u])}(p,{replace:l,mask:c,state:u,target:d,preventScrollReset:f,relative:o,viewTransition:h,defaultShouldRevalidate:m,useTransitions:b});let L=!(w.isExternal||i),N=s().createElement("a",{...g,...P,href:(L?j:void 0)||w.absoluteURL||k,onClick:L?function(e){n&&n(e),e.defaultPrevented||T(e)}:n,ref:Ma(t,E),target:d,"data-discover":x||"render"!==r?void 0:"true"});return C&&!x?s().createElement(s().Fragment,null,N,s().createElement(za,{page:k})):N});Ha.displayName="Link";var Ba=s().forwardRef(function(e,t){let{"aria-current":n="page",caseSensitive:r=!1,className:a="",end:o=!1,style:i,to:l,viewTransition:c,children:u,...d}=e,p=Fr(l,{relative:d.relative}),f=Dr(),h=s().useContext(Sr),{navigator:m,basename:g}=s().useContext(Lr),v=null!=h&&function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=s().useContext(Er);Cn(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=qa("useViewTransitionState"),a=Fr(e,{relative:t});if(!n.isTransitioning)return!1;let o=Jn(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=Jn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return null!=Gn(a.pathname,i)||null!=Gn(a.pathname,o)}(p)&&!0===c,y=m.encodeLocation?m.encodeLocation(p).pathname:p.pathname,b=f.pathname,x=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;r||(b=b.toLowerCase(),x=x?x.toLowerCase():null,y=y.toLowerCase()),x&&g&&(x=Jn(x,g)||x);const w="/"!==y&&y.endsWith("/")?y.length-1:y.length;let k,S=b===y||!o&&b.startsWith(y)&&"/"===b.charAt(w),j=null!=x&&(x===y||!o&&x.startsWith(y)&&"/"===x.charAt(y.length)),C={isActive:S,isPending:j,isTransitioning:v},E=S?n:void 0;k="function"===typeof a?a(C):[a,S?"active":null,j?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let P="function"===typeof i?i(C):i;return s().createElement(Ha,{...d,"aria-current":E,className:k,ref:t,style:P,to:l,viewTransition:c},"function"===typeof u?u(C):u)});Ba.displayName="NavLink";var Wa=s().forwardRef((e,t)=>{let{discover:n="render",fetcherKey:r,navigate:a,reloadDocument:o,replace:i,state:l,method:c=ca,action:u,onSubmit:d,relative:p,preventScrollReset:f,viewTransition:h,defaultShouldRevalidate:m,...g}=e,{useTransitions:v}=s().useContext(Lr),y=Qa(),b=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:n}=s().useContext(Lr),r=s().useContext(zr);Cn(r,"useFormAction must be used inside a RouteContext");let[a]=r.matches.slice(-1),o={...Fr(e||".",{relative:t})},i=Dr();if(null==e){o.search=i.search;let e=new URLSearchParams(o.search),t=e.getAll("index");if(t.some(e=>""===e)){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();o.search=n?`?${n}`:""}}e&&"."!==e||!a.route.index||(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index");"/"!==n&&(o.pathname="/"===o.pathname?n:ar([n,o.pathname]));return Ln(o)}(u,{relative:p}),x="get"===c.toLowerCase()?"get":"post",w="string"===typeof u&&bn.test(u);return s().createElement("form",{ref:t,method:x,action:b,onSubmit:o?d:e=>{if(d&&d(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||c,o=()=>y(t||e.currentTarget,{fetcherKey:r,method:n,navigate:a,replace:i,state:l,relative:p,preventScrollReset:f,viewTransition:h,defaultShouldRevalidate:m});v&&!1!==a?s().startTransition(()=>o()):o()},...g,"data-discover":w||"render"!==n?void 0:"true"})});function Va(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qa(e){let t=s().useContext(kr);return Cn(t,Va(e)),t}Wa.displayName="Form";var Ga=0,Ka=()=>`__${String(++Ga)}__`;function Qa(){let{router:e}=qa("useSubmit"),{basename:t}=s().useContext(Lr),n=Xr("useRouteId"),r=e.fetch,a=e.navigate;return s().useCallback(async function(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:i,method:l,encType:s,formData:c,body:u}=ma(e,t);if(!1===o.navigate){let e=o.fetcherKey||Ka();await r(e,n,o.action||i,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:c,body:u,formMethod:o.method||l,formEncType:o.encType||s,flushSync:o.flushSync})}else await a(o.action||i,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:c,body:u,formMethod:o.method||l,formEncType:o.encType||s,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,a,t,n])}const Ya=fn.div`
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--space-md);
`,Ja=fn.section`
  padding: var(--space-4xl) 0;
`,Xa=Ya;h();const Za=(0,s().createContext)();class eo{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}let to;const no=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,ro={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xa9","&#169;":"\xa9","&reg;":"\xae","&#174;":"\xae","&hellip;":"\u2026","&#8230;":"\u2026","&#x2F;":"/","&#47;":"/"},ao=e=>ro[e];let oo={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(no,ao),transDefaultProps:void 0};const io={},lo=(e,t,n,r)=>{po(n)&&io[n]||(po(n)&&(io[n]=new Date),((e,t,n,r)=>{const a=[n,{code:t,...r||{}}];if(e?.services?.logger?.forward)return e.services.logger.forward(a,"warn","react-i18next::",!0);po(a[0])&&(a[0]=`react-i18next:: ${a[0]}`),e?.services?.logger?.warn?e.services.logger.warn(...a):console?.warn&&console.warn(...a)})(e,t,n,r))},so=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}},co=(e,t,n)=>{e.loadNamespaces(t,so(e,n))},uo=(e,t,n,r)=>{if(po(n)&&(n=[n]),e.options.preload&&e.options.preload.indexOf(t)>-1)return co(e,n,r);n.forEach(t=>{e.options.ns.indexOf(t)<0&&e.options.ns.push(t)}),e.loadLanguages(t,so(e,r))},po=e=>"string"===typeof e,fo={t:(e,t)=>{if(po(t))return t;if("object"===typeof(n=t)&&null!==n&&po(t.defaultValue))return t.defaultValue;var n;if("function"===typeof e)return"";if(Array.isArray(e)){const t=e[e.length-1];return"function"===typeof t?"":t}return e},ready:!1},ho=()=>()=>{},mo=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{i18n:n}=t,{i18n:r,defaultNS:a}=(0,s().useContext)(Za)||{},o=n||r||to;o&&!o.reportNamespaces&&(o.reportNamespaces=new eo),o||lo(o,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next or by passing it via props or context. In monorepo setups, make sure there is only one instance of react-i18next.");const i=(0,s().useMemo)(()=>({...oo,...o?.options?.react,...t}),[o,t]),{useSuspense:l,keyPrefix:c}=i,u=e||a||o?.options?.defaultNS,d=po(u)?[u]:u||["translation"],p=(0,s().useMemo)(()=>d,d);o?.reportNamespaces?.addUsedNamespaces?.(p);const h=(0,s().useRef)(0),m=(0,s().useCallback)(e=>{if(!o)return ho;const{bindI18n:t,bindI18nStore:n}=i,r=()=>{h.current+=1,e()};return t&&o.on(t,r),n&&o.store.on(n,r),()=>{t&&t.split(" ").forEach(e=>o.off(e,r)),n&&n.split(" ").forEach(e=>o.store.off(e,r))}},[o,i]),g=(0,s().useRef)(),v=(0,s().useCallback)(()=>{if(!o)return fo;const e=!(!o.isInitialized&&!o.initializedStoreOnce)&&p.every(e=>function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(t,r)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):(lo(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0)}(e,o,i)),n=t.lng||o.language,r=h.current,a=g.current;if(a&&a.ready===e&&a.lng===n&&a.keyPrefix===c&&a.revision===r)return a;const l={t:o.getFixedT(n,"fallback"===i.nsMode?p:p[0],c,{scopeNs:p}),ready:e,lng:n,keyPrefix:c,revision:r};return g.current=l,l},[o,p,c,i,t.lng]),[y,b]=(0,s().useState)(0),{t:x,ready:w}=(0,f().useSyncExternalStore)(m,v,v);(0,s().useEffect)(()=>{if(o&&!w&&!l){const e=()=>b(e=>e+1);t.lng?uo(o,t.lng,p,e):co(o,p,e)}},[o,t.lng,p,w,l,y]);const k=o||{},S=(0,s().useRef)(null),j=(0,s().useRef)(),C=e=>{const t=Object.getOwnPropertyDescriptors(e);t.__original&&delete t.__original;const n=Object.create(Object.getPrototypeOf(e),t);if(!Object.prototype.hasOwnProperty.call(n,"__original"))try{Object.defineProperty(n,"__original",{value:e,writable:!1,enumerable:!1,configurable:!1})}catch(r){}return n},E=(0,s().useMemo)(()=>{const e=k,t=e&&`${(n=e).language}|${n.resolvedLanguage}|${n.languages?.join(",")}`;var n;let r=e;e&&(S.current&&S.current.__original===e?j.current!==t?(r=C(e),S.current=r,j.current=t):r=S.current:(r=C(e),S.current=r,j.current=t));const a=w||l?x:function(){return lo(o,"USE_T_BEFORE_READY","useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t."),x(...arguments)},i=[a,r,w];return i.t=a,i.i18n=r,i.ready=w,i},[x,k,w,k.resolvedLanguage,k.language,k.languages]);if(o&&l&&!w){let e=!1;try{e=!1}catch(Wp){}throw e&&lo(o,"SUSPENDED_WHILE_LOADING","useTranslation: suspended while translations are loading (useSuspense is true by default). Add a <Suspense> boundary above this component, or set react.useSuspense: false in the i18next init options. https://react.i18next.com/latest/usetranslation-hook"),new Promise(e=>{const n=()=>e();t.lng?uo(o,t.lng,p,n):co(o,p,n)})}return E};var go=function(){return go=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},go.apply(this,arguments)};var vo="",yo=null,bo=null,xo=null;function wo(){vo="",null!==yo&&yo.disconnect(),null!==bo&&(window.clearTimeout(bo),bo=null)}function ko(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function So(){var e=null;if("#"===vo)e=document.body;else{var t=vo.replace("#","");null===(e=document.getElementById(t))&&"#top"===vo&&(e=document.body)}if(null!==e){xo(e);var n=e.getAttribute("tabindex");return null!==n||ko(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==n||ko(e)||(e.blur(),e.removeAttribute("tabindex")),wo(),!0}return!1}function jo(e){return s().forwardRef(function(t,n){var r="";"string"===typeof t.to&&t.to.includes("#")?r="#"+t.to.split("#").slice(1).join("#"):"object"===typeof t.to&&"string"===typeof t.to.hash&&(r=t.to.hash);var a={};e===Ba&&(a.isActive=function(e,t){return e&&e.isExact&&t.hash===r});var o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(t,["scroll","smooth","timeout","elementId"]);return s().createElement(e,go({},a,o,{onClick:function(e){var n;wo(),vo=t.elementId?"#"+t.elementId:r,t.onClick&&t.onClick(e),""===vo||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(xo=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},n=t.timeout,window.setTimeout(function(){!1===So()&&(null===yo&&(yo=new MutationObserver(So)),yo.observe(document,{attributes:!0,childList:!0,subtree:!0}),bo=window.setTimeout(function(){wo()},n||1e4))},0))},ref:n}),t.children)})}var Co=jo(Ha);jo(Ba);u();const Eo=fn.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  min-width: 0;
`,Po=fn(Co)`
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
`,To=fn.span`
  display: inline-block;
`,Lo=fn.span`
  color: var(--color-secondary);
  font-size: 1.3em;
  line-height: 1;
`;const No=function(){const{t:e}=mo();return(0,l().jsx)(Eo,{children:(0,l().jsxs)(Po,{to:"/#home",smooth:!0,"aria-label":e("logo.me"),children:[(0,l().jsx)(To,{children:e("logo.me")}),(0,l().jsx)(Lo,{"aria-hidden":"true",children:"."})]})})},zo=(0,s().createContext)(),Oo=e=>{let{children:t}=e;const[n,r]=(0,s().useState)(()=>localStorage.getItem("theme")||"light");(0,s().useEffect)(()=>{document.documentElement.setAttribute("data-theme",n),localStorage.setItem("theme",n)},[n]);return(0,l().jsx)(zo.Provider,{value:{theme:n,toggleTheme:()=>{r(e=>"light"===e?"dark":"light")}},children:t})},_o=fn.div`
  display: inline-flex;
  align-items: center;
  width: max-content;
  max-width: 100%;
  flex-shrink: 0;
`,Ro=fn.button`
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
`,Do=fn.svg`
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
`,Ao=fn.div`
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
`,Mo=fn.button`
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
`,$o=fn.span`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,Io=fn.span`
  font-size: 0.9rem;
  font-weight: 600;
`,Fo=fn.span`
  font-size: 0.78rem;
  color: var(
    --color-text-secondary,
    var(--color-text-light, var(--color-text))
  );
`,Uo=fn.span`
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-primary);
  white-space: nowrap;
`,Ho=e=>{let{mobile:t=!1}=e;const{i18n:n}=mo(),{theme:r,toggleTheme:o}=(0,s().useContext)(zo),[i,c]=(0,s().useState)(!1),[u,d]=(0,s().useState)({top:0,left:0}),p=(0,s().useRef)(null),f=(0,s().useRef)(null),h=(0,s().useId)(),m="dark"===r,g=(n.resolvedLanguage||n.language||"ar").startsWith("ar"),v=(0,s().useCallback)(()=>{var e;const t=p.current;if(!t)return;const n=t.getBoundingClientRect(),r=Math.min(290,window.innerWidth-24),a=g?n.right-r:n.left,o=Math.max(12,Math.min(a,window.innerWidth-r-12)),i=(null===(e=f.current)||void 0===e?void 0:e.offsetHeight)||150,l=window.innerHeight-n.bottom,s=n.top,c=l<i+12&&s>l?Math.max(12,n.top-i-8):Math.min(n.bottom+8,window.innerHeight-12);d({top:c,left:o})},[g]);(0,s().useLayoutEffect)(()=>{i&&v()},[i,v]),(0,s().useEffect)(()=>{if(!i)return;const e=e=>{var t,n;const r=null===(t=p.current)||void 0===t?void 0:t.contains(e.target),a=null===(n=f.current)||void 0===n?void 0:n.contains(e.target);r||a||c(!1)},t=e=>{var t;"Escape"===e.key&&(c(!1),null===(t=p.current)||void 0===t||t.focus())},n=()=>{v()};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",t),window.addEventListener("resize",n),window.addEventListener("scroll",n,!0),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",t),window.removeEventListener("resize",n),window.removeEventListener("scroll",n,!0)}},[i,v]);return(0,l().jsxs)(_o,{"data-mobile":t,children:[(0,l().jsxs)(Ro,{ref:p,type:"button",$open:i,"aria-expanded":i,"aria-controls":i?h:void 0,"aria-haspopup":"true",onClick:()=>c(e=>!e),children:[(0,l().jsx)("span",{children:g?"\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a":"Settings"}),(0,l().jsx)(Do,{$open:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,l().jsx)("path",{d:"m6 9 6 6 6-6"})})]}),i&&(0,a().createPortal)((0,l().jsxs)(Ao,{ref:f,id:h,dir:g?"rtl":"ltr",style:{top:u.top,left:u.left},children:[(0,l().jsxs)(Mo,{type:"button",onClick:async()=>{try{await n.changeLanguage(g?"en":"ar"),c(!1)}catch(e){console.error("Failed to change language:",e)}},children:[(0,l().jsxs)($o,{children:[(0,l().jsx)(Io,{children:g?"\u062a\u063a\u064a\u064a\u0631 \u0627\u0644\u0644\u063a\u0629":"Change language"}),(0,l().jsx)(Fo,{children:g?"\u0627\u0644\u0639\u0631\u0628\u064a\u0629":"English"})]}),(0,l().jsx)(Uo,{children:g?"English":"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"})]}),(0,l().jsxs)(Mo,{type:"button",onClick:()=>{o(),c(!1)},children:[(0,l().jsxs)($o,{children:[(0,l().jsx)(Io,{children:g?"\u062a\u063a\u064a\u064a\u0631 \u0627\u0644\u0645\u0638\u0647\u0631":"Change theme"}),(0,l().jsx)(Fo,{children:m?g?"\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u062f\u0627\u0643\u0646":"Dark mode":g?"\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0641\u0627\u062a\u062d":"Light mode"})]}),(0,l().jsx)(Uo,{children:m?g?"\u0641\u0627\u062a\u062d":"Light":g?"\u062f\u0627\u0643\u0646":"Dark"})]})]}),document.body)]})},Bo=fn.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,Wo=fn.nav`
  display: flex;
  align-items: center;
  gap: clamp(12px, 2vw, 30px);

  @media (max-width: 900px) {
    display: none;
  }
`,Vo=fn(Co)`
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
`,qo=fn.button`
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
`,Go=fn.nav`
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
`,Ko=fn(Co)`
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
`,Qo=fn.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  margin-top: 12px;
  padding: 14px 8px 4px;

  border-top: 1px solid var(--color-border);
`,Yo=(fn.span`
  font-size: 0.85rem;
  font-weight: 600;

  color: var(
    --color-text-secondary,
    var(--color-text)
  );
`,e=>{let{open:t}=e;return(0,l().jsx)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:t?(0,l().jsxs)(l().Fragment,{children:[(0,l().jsx)("path",{d:"M18 6 6 18"}),(0,l().jsx)("path",{d:"M6 6 18 18"})]}):(0,l().jsxs)(l().Fragment,{children:[(0,l().jsx)("path",{d:"M4 6h16"}),(0,l().jsx)("path",{d:"M4 12h16"}),(0,l().jsx)("path",{d:"M4 18h16"})]})})}),Jo=[{id:"home",label:"nav.home",to:"/#home"},{id:"about",label:"nav.about",to:"/about"},{id:"projects",label:"nav.projects",to:"/projects"},{id:"contact",label:"nav.contact",to:"/contact"}];const Xo=function(e){var t,n,r;let{activeLink:a}=e;const{t:o,i18n:i}=mo(),c=Dr(),[u,d]=(0,s().useState)(!1),p=(0,s().useRef)(null),f=null!==(t=null===(n=i.resolvedLanguage)||void 0===n?void 0:n.startsWith("ar"))&&void 0!==t?t:null===(r=i.language)||void 0===r?void 0:r.startsWith("ar");return(0,s().useEffect)(()=>{d(!1)},[c.pathname,c.hash]),(0,s().useEffect)(()=>{if(!u)return;const e=e=>{p.current&&!p.current.contains(e.target)&&d(!1)},t=e=>{"Escape"===e.key&&d(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",t)}},[u]),(0,l().jsxs)(Bo,{ref:p,children:[(0,l().jsx)(Wo,{"aria-label":f?"\u0627\u0644\u062a\u0646\u0642\u0644 \u0627\u0644\u0631\u0626\u064a\u0633\u064a":"Main navigation",children:Jo.map(e=>{const t=a===e.id;return(0,l().jsx)(Vo,{to:e.to,smooth:!0,$active:t,"aria-current":t?"page":void 0,children:o(e.label)},e.id)})}),(0,l().jsx)(qo,{type:"button","aria-label":u?f?"\u0625\u063a\u0644\u0627\u0642 \u0627\u0644\u0642\u0627\u0626\u0645\u0629":"Close menu":f?"\u0641\u062a\u062d \u0627\u0644\u0642\u0627\u0626\u0645\u0629":"Open menu","aria-expanded":u,"aria-controls":"mobile-navigation",onClick:()=>d(e=>!e),children:(0,l().jsx)(Yo,{open:u})}),(0,l().jsxs)(Go,{id:"mobile-navigation",$open:u,"aria-label":f?"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u0648\u0627\u0644":"Mobile navigation",children:[Jo.map(e=>{const t=a===e.id;return(0,l().jsx)(Ko,{to:e.to,smooth:!0,$active:t,"aria-current":t?"page":void 0,onClick:()=>d(!1),children:o(e.label)},e.id)}),(0,l().jsx)(Qo,{children:(0,l().jsx)(Ho,{mobile:!0})})]})]})},Zo=fn.header`
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
`,ei=fn(Xa)`
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
`;const ti=function(){const e=Dr(),[t,n]=(0,s().useState)(!1),r="/"===e.pathname?"home":e.pathname.split("/").filter(Boolean)[0]||"home";return(0,s().useEffect)(()=>{const e=()=>{n(window.scrollY>15)};return e(),window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e)}},[]),(0,l().jsx)(Zo,{$scrolled:t,children:(0,l().jsxs)(ei,{children:[(0,l().jsx)(No,{}),(0,l().jsx)(Xo,{activeLink:r}),(0,l().jsx)(Ho,{})]})})};var ni={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ri=s().createContext&&s().createContext(ni),ai=["attr","size","title"];function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oi.apply(null,arguments)}function ii(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function li(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ii(Object(n),!0).forEach(function(t){si(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ii(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function si(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ci(e){return e&&e.map((e,t)=>s().createElement(e.tag,li({key:t},e.attr),ci(e.child)))}function ui(e){return t=>s().createElement(di,oi({attr:li({},e.attr)},t),ci(e.child))}function di(e){var t=t=>{var n,r=e.attr,a=e.size,o=e.title,i=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,ai),l=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),s().createElement("svg",oi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,i,{className:n,style:li(li({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&s().createElement("title",null,o),e.children)};return void 0!==ri?s().createElement(ri.Consumer,null,e=>t(e)):t(ni)}function pi(e){return ui({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}function fi(e){return ui({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm169.5 338.9c-3.5 8.1-18.1 14-44.8 18.2-1.4 1.9-2.5 9.8-4.3 15.9-1.1 3.7-3.7 5.9-8.1 5.9h-.2c-6.2 0-12.8-2.9-25.8-2.9-17.6 0-23.7 4-37.4 13.7-14.5 10.3-28.4 19.1-49.2 18.2-21 1.6-38.6-11.2-48.5-18.2-13.8-9.7-19.8-13.7-37.4-13.7-12.5 0-20.4 3.1-25.8 3.1-5.4 0-7.5-3.3-8.3-6-1.8-6.1-2.9-14.1-4.3-16-13.8-2.1-44.8-7.5-45.5-21.4-.2-3.6 2.3-6.8 5.9-7.4 46.3-7.6 67.1-55.1 68-57.1 0-.1.1-.2.2-.3 2.5-5 3-9.2 1.6-12.5-3.4-7.9-17.9-10.7-24-13.2-15.8-6.2-18-13.4-17-18.3 1.6-8.5 14.4-13.8 21.9-10.3 5.9 2.8 11.2 4.2 15.7 4.2 3.3 0 5.5-.8 6.6-1.4-1.4-23.9-4.7-58 3.8-77.1C183.1 100 230.7 96 244.7 96c.6 0 6.1-.1 6.7-.1 34.7 0 68 17.8 84.3 54.3 8.5 19.1 5.2 53.1 3.8 77.1 1.1.6 2.9 1.3 5.7 1.4 4.3-.2 9.2-1.6 14.7-4.2 4-1.9 9.6-1.6 13.6 0 6.3 2.3 10.3 6.8 10.4 11.9.1 6.5-5.7 12.1-17.2 16.6-1.4.6-3.1 1.1-4.9 1.7-6.5 2.1-16.4 5.2-19 11.5-1.4 3.3-.8 7.5 1.6 12.5.1.1.1.2.2.3.9 2 21.7 49.5 68 57.1 4 1 7.1 5.5 4.9 10.8z"},child:[]}]})(e)}function hi(e){return ui({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function mi(e){return ui({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function gi(e){return ui({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function vi(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z"},child:[]}]})(e)}function yi(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9"},child:[]},{tag:"circle",attr:{cx:"12",cy:"9",r:"2.5"},child:[]}]})(e)}function bi(e){return ui({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"},child:[]}]})(e)}function xi(e){return ui({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"},child:[]}]})(e)}function wi(e){return ui({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"},child:[]}]})(e)}const ki=fn.footer`
  width: 100%;
  background-color: var(--color-background-secondary);
  color: var(--color-text-primary);
  border-top: 1px solid var(--color-border);
`,Si=fn(Xa)`
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
`,ji=fn.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 18px;
  min-width: 0;

  @media (max-width: 600px) {
    width: 100%;
    gap: 16px;
  }
`,Ci=fn(ji)`
  @media (max-width: 950px) {
    grid-column: 1 / -1;
  }

  @media (max-width: 600px) {
    align-items: center;
    text-align: center;

    padding-bottom: 26px;
    border-bottom: 1px solid var(--color-border);
  }
`,Ei=fn.h2`
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
`,Ti=fn.h3`
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
`,Ni=fn(Co)`
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
`,zi=fn.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 10px;

  @media (max-width: 600px) {
    justify-content: center;
    gap: 9px;
  }
`,Oi=fn.a`
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
`,Ri=fn.div`
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
`,Di=fn.span`
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
`,Ai=fn.span`
  min-width: 0;

  color: var(--color-text-secondary);

  font-size: 0.9rem;
  line-height: 1.8;

  overflow-wrap: anywhere;
`,Mi=fn.a`
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
`,Ii=fn(Xa)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-block: 21px;

  @media (max-width: 600px) {
    padding-block: 19px;
  }
`,Fi=fn.p`
  margin: 0;

  color: var(--color-text-secondary);

  font-size: 0.83rem;
  line-height: 1.8;

  text-align: center;
`,Ui={linkedin:{icon:(0,l().jsx)(hi,{}),color:"var(--color-linkedin, #0A66C2)"},github:{icon:(0,l().jsx)(gi,{}),color:"var(--color-github, var(--color-text-primary))"},whatsapp:{icon:(0,l().jsx)(pi,{}),color:"var(--color-whatsapp, #25D366)"},email:{icon:(0,l().jsx)(wi,{}),color:"var(--color-email, #EA4335)"},instagram:{icon:(0,l().jsx)(mi,{}),color:"var(--color-instgram, #E4405F)"},instgram:{icon:(0,l().jsx)(mi,{}),color:"var(--color-instgram, #E4405F)"},snapchat:{icon:(0,l().jsx)(fi,{}),color:"var(--color-snapchat, #FFCC00)"}},Hi=()=>{const{t:e}=mo(),t=e("home:footer.socialMedia.social",{returnObjects:!0}),n=Array.isArray(t)?t:[],r=e("home:footer.contactInfo.email.value"),a=e("home:footer.contactInfo.tel.value"),o=e("home:footer.contactInfo.location.value"),i=(new Date).getFullYear();return(0,l().jsxs)(ki,{children:[(0,l().jsxs)(Si,{children:[(0,l().jsxs)(Ci,{children:[(0,l().jsx)(Ei,{children:e("home:hero.name")}),(0,l().jsx)(Pi,{children:e("home:hero.introduction")}),(0,l().jsx)(zi,{children:n.map(e=>{const t=Ui[String(e.id).toLowerCase()];return t&&e.href?(0,l().jsx)(Oi,{href:e.href,target:"_blank",rel:"noopener noreferrer","aria-label":e.id,title:e.id,style:{"--social-color":t.color},children:t.icon},e.id):null})})]}),(0,l().jsxs)(ji,{children:[(0,l().jsx)(Ti,{children:e("home:footer.quickLinks.title")}),(0,l().jsx)(Li,{"aria-label":e("home:footer.quickLinks.title"),children:[{id:"home",label:"nav.home",to:"/#home"},{id:"about",label:"nav.about",to:"/about"},{id:"projects",label:"nav.projects",to:"/projects"},{id:"contact",label:"nav.contact",to:"/contact"}].map(t=>(0,l().jsx)(Ni,{to:t.to,smooth:!0,children:e(t.label)},t.id))})]}),(0,l().jsxs)(ji,{children:[(0,l().jsx)(Ti,{children:e("home:footer.contactInfo.title")}),(0,l().jsxs)(_i,{children:[(0,l().jsxs)(Ri,{children:[(0,l().jsx)(Di,{style:{"--icon-color":"var(--color-email, #EA4335)"},children:(0,l().jsx)(vi,{})}),(0,l().jsx)(Ai,{dir:"ltr",children:(0,l().jsx)(Mi,{href:`mailto:${r}`,children:r})})]}),(0,l().jsxs)(Ri,{children:[(0,l().jsx)(Di,{style:{"--icon-color":"var(--color-whatsapp, #25D366)"},children:(0,l().jsx)(bi,{})}),(0,l().jsx)(Ai,{dir:"ltr",children:(0,l().jsx)(Mi,{href:`tel:${a.replace(/[^\d+]/g,"")}`,children:a})})]}),(0,l().jsxs)(Ri,{children:[(0,l().jsx)(Di,{style:{"--icon-color":"var(--color-primary)"},children:(0,l().jsx)(yi,{})}),(0,l().jsx)(Ai,{children:o})]})]})]})]}),(0,l().jsx)($i,{children:(0,l().jsx)(Ii,{children:(0,l().jsxs)(Fi,{children:["\xa9 ",i," ",e("home:footer.copyright")]})})})]})},Bi=()=>{const{pathname:e,hash:t}=Dr();return(0,s().useLayoutEffect)(()=>{t||window.scrollTo({top:0,left:0,behavior:"instant"})},[e,t]),null};function Wi(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(e)}function Vi(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(e)}function qi(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(e)}function Gi(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"8",y1:"21",x2:"16",y2:"21"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12",y2:"21"},child:[]}]})(e)}function Ki(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(e)}function Qi(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(e)}function Yi(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(e)}function Ji(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(e)}function Xi(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(e)}function Zi(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(e)}function el(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(e)}function tl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]},{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"},child:[]}]})(e)}function nl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(e)}function rl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(e)}function al(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(e)}function ol(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"},child:[]}]})(e)}function il(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(e)}function ll(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(e)}function sl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(e)}function cl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"},child:[]}]})(e)}function ul(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(e)}function dl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(e)}function pl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"17",x2:"17",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 7 17 7 17 17"},child:[]}]})(e)}function fl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"17",y1:"17",x2:"7",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 17 7 7 17 7"},child:[]}]})(e)}function hl(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(e)}function ml(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 19 5 12 12 5"},child:[]}]})(e)}const gl=fn.nav`
  width: 100%;
  min-width: 0;
  margin: 0;
  padding: 0;

  background: transparent;
  border: none;
  box-shadow: none;
`,vl=fn(Xa)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  min-width: 0;
`,yl=fn.ol`
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
`,bl=fn.li`
  display: inline-flex;
  align-items: center;
  min-width: 0;
`,xl=fn(Ha)`
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
`,wl=fn.li`
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
`,kl=fn.span`
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
`,Sl=e=>{let{value:t="",projectTitle:n=""}=e;const{t:r,i18n:a}=mo(["common","home","about","projects","contact"]),o=(a.resolvedLanguage||a.language||"ar").startsWith("ar"),i=o?ol:al,s=["home","about","projects","contact"].includes(t)?t:null,c=r(`nav.${t}`,{ns:"common",defaultValue:t}),u="about"===t?r("about:pageTitle",{defaultValue:o?"\u0639\u0646\u064a":"About Me"}):s?r(`${s}:pageTitle`,{defaultValue:c}):c,d="projects"===t&&"string"===typeof n&&n.trim().length>0,p=r("pageTitle",{ns:"projects",defaultValue:o?"\u0645\u0634\u0627\u0631\u064a\u0639\u064a":"My Projects"}),f=r("nav.home",{ns:"common",defaultValue:o?"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629":"Home"});return(0,l().jsx)(gl,{"aria-label":o?"\u0645\u0633\u0627\u0631 \u0627\u0644\u062a\u0646\u0642\u0644":"Breadcrumb navigation",dir:o?"rtl":"ltr",children:(0,l().jsx)(vl,{children:(0,l().jsxs)(yl,{children:[(0,l().jsx)(bl,{children:(0,l().jsxs)(xl,{to:"/",children:[(0,l().jsx)(Qi,{"aria-hidden":"true"}),(0,l().jsx)("span",{children:f})]})}),(0,l().jsx)(wl,{"aria-hidden":"true",children:(0,l().jsx)(i,{})}),d?(0,l().jsxs)(l().Fragment,{children:[(0,l().jsx)(bl,{children:(0,l().jsx)(xl,{to:"/projects",children:p})}),(0,l().jsx)(wl,{"aria-hidden":"true",children:(0,l().jsx)(i,{})}),(0,l().jsx)(bl,{"aria-current":"page",children:(0,l().jsx)(kl,{children:n})})]}):(0,l().jsx)(l().Fragment,{children:(0,l().jsx)(bl,{"aria-current":"page",children:(0,l().jsx)(kl,{children:u})})})]})})})};const jl=fn.a`
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
`,Cl=fn.h1`
  margin: 0;

  color: var(--color-primary);
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  font-weight: 800;
  line-height: 1.4;
  letter-spacing: -0.015em;

  overflow-wrap: anywhere;
`,El=fn.h2`
  margin: 0;

  color: var(--color-secondary);
  font-size: clamp(1.5rem, 3vw, 2.1rem);
  font-weight: 750;
  line-height: 1.5;

  overflow-wrap: anywhere;
`,Pl=fn.h3`
  margin: 0;

  color: var(--color-tertiary);
  font-size: clamp(1.15rem, 2vw, 1.45rem);
  font-weight: 700;
  line-height: 1.6;

  overflow-wrap: anywhere;
`,Tl=fn.p`
  margin: 0;

  color: var(--color-text-primary);
  font-size: var(--size-md);
  line-height: 1.9;

  overflow-wrap: anywhere;
`,Ll=fn.p`
  margin: 0;

  color: var(--color-text-secondary);
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  line-height: 1.95;

  overflow-wrap: anywhere;
`,Nl=(fn.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  gap: clamp(10px, 2vw, 18px);

  text-align: start;
`,e=>{let{value:t}=e;const{t:n}=mo();return(0,l().jsx)(El,{children:n(t)})}),zl=e=>{let{value:t}=e;const{t:n}=mo();return(0,l().jsx)(Ll,{children:n(t)})},Ol=fn.header`
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
`,_l=fn.div`
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
`,Rl=(fn.div`
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
`,e=>Array.isArray(e)?e:[]),Dl=(e,t)=>"string"===typeof e||"number"===typeof e?String(e):e&&"object"===typeof e&&!Array.isArray(e)?String((t?e.ar:e.en)||e.ar||e.en||""):"",Al=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.find(e=>void 0!==e&&null!==e&&""!==e)},Ml=e=>String(null!==e&&void 0!==e?e:"").replace(/[\u0660-\u0669]/g,e=>String("\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669".indexOf(e))).replace(/[\u06f0-\u06f9]/g,e=>String("\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9".indexOf(e))),$l=e=>String(e).padStart(2,"0"),Il=e=>{if(!e||Fl(e))return null;const t=Ml(e).trim();let n,r=1,a=1,o="day",i=t.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})$/);if(i)n=Number(i[1]),r=Number(i[2]),a=Number(i[3]);else if(i=t.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/),i)a=Number(i[1]),r=Number(i[2]),n=Number(i[3]);else if(i=t.match(/^(\d{4})[-/.](\d{1,2})$/),i)n=Number(i[1]),r=Number(i[2]),o="month";else{if(i=t.match(/^(\d{4})$/),!i)return null;n=Number(i[1]),o="year"}const l=new Date(Date.UTC(n,r-1,a));return n<1900||n>2100||l.getUTCFullYear()!==n||l.getUTCMonth()!==r-1||l.getUTCDate()!==a?null:{date:l,year:n,month:r,day:a,precision:o}};function Fl(e){return/present|current|ongoing|now|\u062d\u062a\u0649 \u0627\u0644\u0622\u0646|\u062d\u0627\u0644\u064a\u0627|\u062d\u0627\u0644\u064a\u0627\u064b/i.test(String(e||""))}const Ul=e=>e?"year"===e.precision?String(e.year):"month"===e.precision?`${$l(e.month)}/${e.year}`:`${$l(e.day)}/${$l(e.month)}/${e.year}`:"",Hl=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=Al(e.startDate,e.start),n=Al(e.endDate,e.end),r=!0===e.current||!0===e.ongoing||Fl(n)||Fl(e.date);if(t||n)return{start:Il(t),end:Il(n),current:r,single:null};const a=Ml(Al(e.date,e.period,"")).match(/\d{4}[-/.]\d{1,2}[-/.]\d{1,2}|\d{1,2}[-/.]\d{1,2}[-/.]\d{4}|\d{4}[-/.]\d{1,2}/g);return(null===a||void 0===a?void 0:a.length)>=2?{start:Il(a[0]),end:Il(a[1]),current:r,single:null}:{start:null,end:null,current:r,single:Il(Al(e.issuedDate,e.completionDate,e.date))}},Bl=e=>{const t=Hl(e);if(t.current)return Number.MAX_SAFE_INTEGER;const n=Il(null===e||void 0===e?void 0:e.sortDate)||t.end||t.single||t.start;return n?n.date.getTime():-1/0},Wl=e=>[...Rl(e)].sort((e,t)=>Bl(t)-Bl(e)),Vl=864e5,ql=(e,t)=>{const{years:n,months:r,totalDays:a}=e;if(!a)return t?"\u063a\u064a\u0631 \u0645\u062d\u062f\u062f":"Not specified";const o=[];return n&&(t?o.push(1===n?"\u0633\u0646\u0629":2===n?"\u0633\u0646\u062a\u0627\u0646":`${n} \u0633\u0646\u0648\u0627\u062a`):o.push(`${n} ${1===n?"year":"years"}`)),r&&(t?o.push(1===r?"\u0634\u0647\u0631":2===r?"\u0634\u0647\u0631\u0627\u0646":`${r} \u0623\u0634\u0647\u0631`):o.push(`${r} ${1===r?"month":"months"}`)),o.length?o.join(t?" \u0648":" and "):t?"\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631":"Less than one month"},Gl=(e,t)=>{const n={"full-time":{ar:"\u062f\u0648\u0627\u0645 \u0643\u0627\u0645\u0644",en:"Full-time"},"part-time":{ar:"\u062f\u0648\u0627\u0645 \u062c\u0632\u0626\u064a",en:"Part-time"},seasonal:{ar:"\u0639\u0645\u0644 \u0645\u0648\u0633\u0645\u064a",en:"Seasonal"},contract:{ar:"\u0639\u0645\u0644 \u0628\u0639\u0642\u062f",en:"Contract"},internship:{ar:"\u062a\u062f\u0631\u064a\u0628",en:"Internship"}}[String((null===e||void 0===e?void 0:e.employmentType)||"").toLowerCase()];return n?t?n.ar:n.en:Dl(null===e||void 0===e?void 0:e.employmentType,t)},Kl={diploma:{ar:"\u0648\u062b\u064a\u0642\u0629 \u0627\u0644\u062f\u0628\u0644\u0648\u0645",en:"Diploma Document"},graduation:{ar:"\u0648\u062b\u064a\u0642\u0629 \u0627\u0644\u062a\u062e\u0631\u062c",en:"Graduation Document"},completion:{ar:"\u0634\u0647\u0627\u062f\u0629 \u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u062f\u0648\u0631\u0629",en:"Completion Certificate"},attendance:{ar:"\u0634\u0647\u0627\u062f\u0629 \u062d\u0636\u0648\u0631",en:"Attendance Certificate"},appreciation:{ar:"\u0634\u0647\u0627\u062f\u0629 \u0634\u0643\u0631 \u0648\u062a\u0642\u062f\u064a\u0631",en:"Appreciation Certificate"},participation:{ar:"\u0634\u0647\u0627\u062f\u0629 \u0645\u0634\u0627\u0631\u0643\u0629",en:"Participation Certificate"},experience:{ar:"\u0634\u0647\u0627\u062f\u0629 \u062e\u0628\u0631\u0629",en:"Experience Certificate"},volunteering:{ar:"\u0633\u062c\u0644 \u0627\u0644\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u0629",en:"Volunteer Hours Record"},certificate:{ar:"\u0627\u0644\u0634\u0647\u0627\u062f\u0629",en:"Certificate"},document:{ar:"\u0627\u0644\u0648\u062b\u064a\u0642\u0629",en:"Document"}},Ql=(e,t)=>{const n=Kl[e]||Kl.document;return t?n.ar:n.en},Yl=e=>{const t=String(e||"").split("?")[0].split("#")[0].match(/\.([a-z0-9]+)$/i);return t?t[1].toUpperCase():""},Jl=(e,t)=>Yl(e)||(t?"\u0635\u064a\u063a\u0629 \u063a\u064a\u0631 \u0645\u062d\u062f\u062f\u0629":"Unknown format"),Xl=fn.main`
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
`,Zl=fn(Xa)`
  display: flex;
  flex-direction: column;

  gap: clamp(45px, 6vw, 75px);

  padding-block:
    clamp(35px, 5vw, 60px)
    clamp(65px, 8vw, 100px);

  @media (max-width: 600px) {
    gap: 45px;
  }
`,es=fn.section`
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
`,ts=fn.div`
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
`,ns=fn.article`
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
`,rs=fn.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 15px;
`,as=fn.h1`
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
`,os=fn.p`
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
`,is=fn.div`
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
`,ls=fn.div`
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
`,ss=fn(ns)`
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
`,cs=fn.div`
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
`,us=fn(ns)`
  display: flex;
  flex-direction: column;
  gap: 13px;
`,ds=fn.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 10px;
  }
`,ps=fn.div`
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
`,fs=fn.span`
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
`,hs=fn(fs)`
  flex-shrink: 0;

  .date-text {
    unicode-bidi: isolate;
  }
`,ms=fn.span`
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
`,gs=e=>{let{item:t,isArabic:n}=e;const r=Hl(t),a=Ul(r.start),o=Ul(r.end);if(!a&&!o&&!r.single){const e=((e,t)=>{const{start:n,end:r,current:a,single:o}=Hl(e),i=Ul(n),l=Ul(r);return i&&a?`${i} \u2013 ${t?"\u062d\u062a\u0649 \u0627\u0644\u0622\u0646":"Present"}`:i&&l?`${i} \u2013 ${l}`:i||l||(o?Ul(o):String(Al(null===e||void 0===e?void 0:e.date,null===e||void 0===e?void 0:e.period,"")))})(t,n);return e?(0,l().jsxs)(hs,{children:[(0,l().jsx)(sl,{}),(0,l().jsx)("span",{className:"date-text",dir:"auto",children:e})]}):null}return(0,l().jsxs)(hs,{children:[(0,l().jsx)(sl,{}),(0,l().jsx)("span",{className:"date-text",dir:"ltr",children:a||o||Ul(r.single)}),a&&(o||r.current)&&(0,l().jsxs)(l().Fragment,{children:[(0,l().jsx)("span",{"aria-hidden":"true",children:"\u2013"}),r.current?(0,l().jsxs)(ms,{children:[(0,l().jsx)(ll,{}),n?"\u062d\u062a\u0649 \u0627\u0644\u0622\u0646":"Present"]}):(0,l().jsx)("span",{className:"date-text",dir:"ltr",children:o})]})]})},vs=fn.p`
  margin: 0;

  color: var(--about-muted);

  font-size: 0.91rem;
  line-height: 2;

  overflow-wrap: anywhere;
`,ys=fn.div`
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
`,bs=fn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-top: 3px;
  padding-top: 14px;

  border-top:
    1px solid var(--about-border);
`,xs=fn.button`
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
`,ws=fn.span`
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
`,ks=fn(ns)`
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
`,Ss=fn.div`
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
`,js=fn.div`
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

  &[data-current="true"] ${us} {
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
`,Cs=fn.div`
  display: grid;
  gap: 14px;
`,Es=fn.div`
  min-width: 0;
  overflow: hidden;

  border: 1px solid var(--about-border);
  border-radius: 12px;

  background: var(--about-card);

  &[data-open="true"] {
    border-color:
      var(--about-border-strong);
  }
`,Ps=fn.button`
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
`,Ts=fn.div`
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
`,Ls=fn.div`
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
`,Ns=fn.ul`
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
`,zs=fn(ns)`
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
`,Os=fn(ns)`
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
`,_s=fn(Ha)`
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
`,Rs=fn.div`
  position: fixed;
  inset: 0;

  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: clamp(8px, 2vw, 24px);

  background: rgba(8, 17, 29, 0.82);
`,Ds=fn.div`
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
`,As=fn.div`
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
`,Ms=fn.button`
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
`,$s=fn.div`
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
`,Is=fn.div`
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
`,Fs=fn.div`
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
`,Us=e=>{let{number:t,icon:n,title:r,description:a}=e;return(0,l().jsxs)(ts,{children:[(0,l().jsxs)("span",{className:"number",children:[(0,l().jsx)(n,{}),t]}),(0,l().jsx)("h2",{children:r}),a&&(0,l().jsx)("p",{children:a})]})},Hs=e=>{let{item:t,title:n,fallbackType:r,isArabic:a,onPreview:o}=e;if(null===t||void 0===t||!t.document)return null;const i=t.documentType||r||"document",s=Jl(t.document,a);return(0,l().jsx)(bs,{children:(0,l().jsxs)(xs,{type:"button",onClick:()=>o({path:t.document,title:n,documentType:i}),children:[(0,l().jsx)(el,{}),a?"\u0639\u0631\u0636 ":"View ",Ql(i,a),(0,l().jsx)(ws,{dir:"ltr",children:s})]})})},Bs=e=>{let{item:t,title:n,subtitle:r,description:a,grade:o,gradeLabel:i,employmentType:s,hours:c,fallbackDocumentType:u,isArabic:d,onPreview:p}=e;return(0,l().jsxs)(us,{children:[(0,l().jsxs)(ds,{children:[(0,l().jsxs)(ps,{children:[(0,l().jsx)("h3",{children:Dl(n,d)}),r&&(0,l().jsx)("span",{className:"subtitle",children:Dl(r,d)})]}),(0,l().jsx)(gs,{item:t,isArabic:d})]}),s&&(0,l().jsx)(ys,{children:(0,l().jsxs)(fs,{children:[(0,l().jsx)(cl,{}),s]})}),a&&(0,l().jsx)(vs,{children:Dl(a,d)}),(o||c)&&(0,l().jsxs)(ys,{children:[o&&(0,l().jsxs)(fs,{children:[(0,l().jsx)(dl,{}),i,(0,l().jsx)("span",{className:"grade-value",children:o})]}),c&&(0,l().jsxs)(fs,{children:[(0,l().jsx)(rl,{}),Dl(c,d)]})]}),(null===t||void 0===t?void 0:t.note)&&(0,l().jsx)(ys,{children:(0,l().jsxs)(fs,{children:[(0,l().jsx)(Ki,{}),Dl(t.note,d)]})}),(0,l().jsx)(Hs,{item:t,title:Dl(n,d),fallbackType:u,isArabic:d,onPreview:p})]})},Ws=e=>{let{item:t,onClose:n,isArabic:r}=e;const a=(0,s().useRef)(null),o=(0,s().useId)(),{t:i}=mo("about"),[c,u]=(0,s().useState)(!0),[d,p]=(0,s().useState)(!1);if((0,s().useEffect)(()=>{u(!0),p(!1)},[null===t||void 0===t?void 0:t.path]),(0,s().useEffect)(()=>{var e;if(!t)return;const r=document.body.style.overflow,o=document.activeElement;document.body.style.overflow="hidden",null===(e=a.current)||void 0===e||e.focus();const i=e=>{var t;if("Escape"===e.key)return void n();if("Tab"!==e.key)return;const r=null===(t=a.current)||void 0===t?void 0:t.closest('[role="dialog"]');if(!r)return;const o=[...r.querySelectorAll("button:not([disabled]), a[href], iframe")].filter(e=>e.getClientRects().length>0);if(!o.length)return;const i=o[0],l=o[o.length-1];e.shiftKey&&document.activeElement===i?(e.preventDefault(),l.focus()):e.shiftKey||document.activeElement!==l||(e.preventDefault(),i.focus())};return document.addEventListener("keydown",i),()=>{var e;document.body.style.overflow=r,document.removeEventListener("keydown",i),null===o||void 0===o||null===(e=o.focus)||void 0===e||e.call(o)}},[t,n]),!t)return null;const f=(e=>{if("string"!==typeof e||!e.trim())return"";const t=e.trim();if(/^https?:\/\//i.test(t))return t;if(t.startsWith("//")||/^(javascript|data):/i.test(t))return"";const n=String("/abdulrahman-portfolio-react").replace(/\/+$/,""),r=t.replace(/^\/+/,"");let a="";try{a=new URL(n||"/",window.location.origin).pathname.replace(/^\/+|\/+$/g,"")}catch{a=n.replace(/^\/+|\/+$/g,"")}return a&&(r===a||r.startsWith(`${a}/`))?`/${r}`:`${n}/${r}`})(t.path),h=(e=>{const t=Yl(e);return"PDF"===t?"pdf":["PNG","JPG","JPEG","WEBP","GIF","AVIF"].includes(t)?"image":"other"})(t.path),m=Ql(t.documentType,r),g=Jl(t.path,r);return(0,l().jsx)(Rs,{onMouseDown:e=>{e.target===e.currentTarget&&n()},children:(0,l().jsxs)(Ds,{role:"dialog","aria-modal":"true","aria-labelledby":o,dir:r?"rtl":"ltr",children:[(0,l().jsxs)(As,{children:[(0,l().jsxs)("div",{className:"modal-heading",children:[(0,l().jsx)("h2",{id:o,children:t.title||m}),(0,l().jsxs)("p",{children:[m," \u2014 ",g]})]}),(0,l().jsx)(Ms,{ref:a,type:"button",onClick:n,"aria-label":r?"\u0625\u063a\u0644\u0627\u0642 \u0627\u0644\u0645\u0639\u0627\u064a\u0646\u0629":"Close preview",children:(0,l().jsx)(Wi,{})})]}),(0,l().jsx)($s,{children:f?"image"===h||"pdf"===h?(0,l().jsxs)("div",{style:{width:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",minHeight:240},children:[c&&!d&&(0,l().jsxs)(Fs,{role:"status","aria-live":"polite",children:[(0,l().jsx)("span",{className:"spinner","aria-hidden":"true"}),(0,l().jsx)("p",{children:i("documentPreview.loading")}),(0,l().jsxs)("div",{className:"dots","aria-hidden":"true",children:[(0,l().jsx)("span",{}),(0,l().jsx)("span",{}),(0,l().jsx)("span",{})]})]}),d&&(0,l().jsxs)(Is,{role:"alert",children:[(0,l().jsx)(Zi,{}),(0,l().jsx)("p",{children:i("documentPreview.error")})]}),"image"===h?(0,l().jsx)("img",{src:f,alt:t.title||m,draggable:!1,style:{display:c||d?"none":"block"},onContextMenu:e=>e.preventDefault(),onLoad:()=>u(!1),onError:()=>{u(!1),p(!0)}},f):(0,l().jsx)("iframe",{src:`${f}#toolbar=0&navpanes=0&scrollbar=1`,title:t.title||m,style:{display:c||d?"none":"block"},onLoad:()=>u(!1),onError:()=>{u(!1),p(!0)}},f)]}):(0,l().jsxs)(Is,{children:[(0,l().jsx)(Zi,{}),(0,l().jsx)("p",{children:i("documentPreview.unsupported")})]}):(0,l().jsxs)(Is,{children:[(0,l().jsx)(Zi,{}),(0,l().jsx)("p",{children:i("documentPreview.unavailable")})]})})]})})},Vs=[nl,function(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(e)},function(e){return ui({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(e)},Gi,ul,Vi,Gi],qs=()=>{var e,t,n,r,a,o,i,c,u,d,p,f,h,m,g,v,y,b,x,w,k,S;const{t:j,i18n:C}=mo("about"),E=(C.resolvedLanguage||C.language||"ar").toLowerCase().startsWith("ar"),P=j("pageTitle",{ns:"about",defaultValue:E?"\u0639\u0646\u064a":"About Me"}),T=j("pageDesc",{ns:"about",defaultValue:E?"\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0645\u0624\u0647\u0644\u0627\u062a\u064a \u0627\u0644\u0639\u0644\u0645\u064a\u0629 \u0648\u062e\u0628\u0631\u0627\u062a\u064a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0634\u0647\u0627\u062f\u0627\u062a\u064a \u0648\u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0648\u0645\u0634\u0627\u0631\u0643\u0627\u062a\u064a \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u0629.":"Learn about my education, professional experience, certificates, skills, and volunteer activities."}),L=j("content",{ns:"about",returnObjects:!0}),N=L&&"object"===typeof L&&!Array.isArray(L)?L:{},[z,O]=(0,s().useState)(null),[_,R]=(0,s().useState)(null),D=(0,s().useCallback)(()=>{O(null)},[]),A=Wl(null===(e=N.education)||void 0===e?void 0:e.items),M=Wl(null===(t=N.experience)||void 0===t?void 0:t.items),$=Wl(null===(n=N.certificates)||void 0===n?void 0:n.items),I=Wl(null===(r=N.volunteering)||void 0===r?void 0:r.items),F={title:j("aiSkills.title"),items:["chatgpt","gemini","claude","deepseek"].map(e=>({name:j(`aiSkills.tools.${e}.name`),sources:[j(`aiSkills.tools.${e}.usage`)]}))},U=[...Rl(null===(a=N.skills)||void 0===a?void 0:a.groups),F],H=(null===(o=N.volunteering)||void 0===o?void 0:o.summary)||{},B=JSON.stringify((null===(i=N.experience)||void 0===i?void 0:i.items)||[]),W=(0,s().useMemo)(()=>(e=>{const t=new Date,n=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()),r=Rl(e).map(e=>{var t;const r=Hl(e);if(!r.start)return null;const a=r.start.date.getTime(),o=r.current?n:null===(t=r.end)||void 0===t?void 0:t.date.getTime();return"number"!==typeof o||!Number.isFinite(o)||a>o?null:{start:a,end:Math.min(o,n)}}).filter(Boolean).sort((e,t)=>e.start-t.start);if(!r.length)return{years:0,months:0,days:0,totalDays:0,totalMonths:0};const a=[];r.forEach(e=>{const t=a[a.length-1];t&&e.start<=t.end+Vl?t.end=Math.max(t.end,e.end):a.push({...e})});const o=a.reduce((e,t)=>e+Math.floor((t.end-t.start)/Vl)+1,0),i=Math.floor(o/30.436875);return{years:Math.floor(i/12),months:i%12,days:Math.round(o-30.436875*i),totalDays:o,totalMonths:i}})(M),[B]),V=(e,t)=>e.map((e,n)=>(0,l().jsx)(Bs,{item:e,isArabic:E,onPreview:O,...t(e)},`${n}-${Bl(e)}`));return(0,l().jsxs)(Xl,{dir:E?"rtl":"ltr",children:[(0,l().jsx)(Ol,{children:(0,l().jsxs)(_l,{children:[(0,l().jsx)(Sl,{value:"about"}),(0,l().jsx)(as,{children:P}),(0,l().jsx)(os,{children:T})]})}),(0,l().jsxs)(Zl,{children:[(0,l().jsx)(es,{id:"about-intro",children:(0,l().jsxs)(is,{children:[(0,l().jsxs)(ls,{children:[(0,l().jsx)("h2",{children:(null===(c=N.intro)||void 0===c?void 0:c.title)||(E?"\u0646\u0628\u0630\u0629 \u0639\u0646\u064a":"About Me")}),(null===(u=N.intro)||void 0===u?void 0:u.paragraph1)&&(0,l().jsx)("p",{children:N.intro.paragraph1}),(null===(d=N.intro)||void 0===d?void 0:d.paragraph2)&&(0,l().jsx)("p",{children:N.intro.paragraph2})]}),(0,l().jsxs)(ss,{children:[(0,l().jsxs)("h3",{children:[(0,l().jsx)(qi,{}),N.infoTitle||(E?"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0633\u0631\u064a\u0639\u0629":"Quick Information")]}),Rl(N.profile).map((e,t)=>(0,l().jsxs)(cs,{children:[(0,l().jsx)("span",{children:Dl(e.label,E)}),(0,l().jsx)("strong",{children:Dl(e.value,E)})]},t))]})]})}),(0,l().jsxs)(es,{id:"about-education",className:"alternate",children:[(0,l().jsx)(Us,{number:"01",icon:ul,title:(null===(p=N.education)||void 0===p?void 0:p.title)||(E?"\u0631\u062d\u0644\u062a\u064a \u0627\u0644\u062a\u0639\u0644\u064a\u0645\u064a\u0629":"Education"),description:null===(f=N.education)||void 0===f?void 0:f.description}),(0,l().jsx)(rs,{children:V(A,e=>{var t;return{title:e.degree,subtitle:e.school,description:e.field,grade:e.grade,gradeLabel:(null===(t=N.education)||void 0===t?void 0:t.gradeLabel)||(E?"\u0627\u0644\u0645\u0639\u062f\u0644 \u0627\u0644\u062a\u0631\u0627\u0643\u0645\u064a":"GPA"),fallbackDocumentType:"graduation"}})})]}),(0,l().jsxs)(es,{id:"about-experience",children:[(0,l().jsx)(Us,{number:"02",icon:cl,title:(null===(h=N.experience)||void 0===h?void 0:h.title)||(E?"\u062e\u0628\u0631\u0627\u062a\u064a \u0627\u0644\u0645\u0647\u0646\u064a\u0629":"Professional Experience"),description:null===(m=N.experience)||void 0===m?void 0:m.description}),(0,l().jsxs)(ks,{children:[(0,l().jsx)("div",{className:"summary-icon",children:(0,l().jsx)(rl,{})}),(0,l().jsxs)("div",{className:"summary-content",children:[(0,l().jsx)("span",{className:"summary-label",children:E?"\u0625\u062c\u0645\u0627\u0644\u064a \u0633\u0646\u0648\u0627\u062a \u0627\u0644\u062e\u0628\u0631\u0629 \u0627\u0644\u0645\u0647\u0646\u064a\u0629":"Total Professional Experience"}),(0,l().jsx)("strong",{className:"summary-value",children:ql(W,E)}),(0,l().jsx)("span",{className:"summary-note",children:E?"\u064a\u064f\u062d\u0633\u0628 \u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a \u0645\u0646 \u062c\u0645\u064a\u0639 \u0641\u062a\u0631\u0627\u062a \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0641\u0639\u0644\u064a\u0629 \u062f\u0648\u0646 \u062a\u0643\u0631\u0627\u0631 \u0627\u0644\u0641\u062a\u0631\u0627\u062a \u0627\u0644\u0645\u062a\u062f\u0627\u062e\u0644\u0629\u060c \u0648\u064a\u064f\u062d\u062f\u0651\u064e\u062b \u062a\u0644\u0642\u0627\u0626\u064a\u064b\u0627 \u0644\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0645\u0633\u062a\u0645\u0631\u0629.":"Calculated from actual employment periods without double-counting overlapping dates. Ongoing roles update automatically."})]})]}),(0,l().jsx)(Ss,{children:M.map((e,t)=>{const n=Hl(e);return(0,l().jsx)(js,{"data-current":n.current?"true":"false",children:(0,l().jsx)(Bs,{item:e,title:e.role,subtitle:e.company,description:e.description,employmentType:Gl(e,E),fallbackDocumentType:"experience",isArabic:E,onPreview:O})},`${t}-${Bl(e)}`)})})]}),(0,l().jsxs)(es,{id:"about-certificates",className:"alternate",children:[(0,l().jsx)(Us,{number:"03",icon:dl,title:(null===(g=N.certificates)||void 0===g?void 0:g.title)||(E?"\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0648\u0627\u0644\u062f\u0648\u0631\u0627\u062a \u0627\u0644\u062a\u062f\u0631\u064a\u0628\u064a\u0629":"Certificates and Courses"),description:null===(v=N.certificates)||void 0===v?void 0:v.description}),(0,l().jsx)(rs,{children:V($,e=>({title:e.name,subtitle:e.provider,description:e.description,hours:e.hours,fallbackDocumentType:"certificate"}))})]}),(0,l().jsxs)(es,{id:"about-skills",children:[(0,l().jsx)(Us,{number:"04",icon:nl,title:(null===(y=N.skills)||void 0===y?void 0:y.title)||(E?"\u0645\u0647\u0627\u0631\u0627\u062a\u064a":"My Skills"),description:null===(b=N.skills)||void 0===b?void 0:b.description}),(0,l().jsx)(Cs,{children:U.map((e,t)=>{const n=_===t,r=Vs[t%Vs.length],a=Rl(e.items);return(0,l().jsxs)(Es,{"data-open":n?"true":"false",children:[(0,l().jsxs)(Ps,{type:"button","aria-expanded":n,onClick:()=>(e=>{R(t=>t===e?null:e)})(t),children:[(0,l().jsx)("span",{className:"group-icon",children:(0,l().jsx)(r,{})}),(0,l().jsxs)("span",{className:"group-name",children:[(0,l().jsx)("strong",{children:Dl(e.title,E)}),(0,l().jsxs)("small",{children:[a.length," ",E?"\u0645\u0647\u0627\u0631\u0629":1===a.length?"skill":"skills"]})]}),(0,l().jsx)(il,{className:"chevron"})]}),n&&(0,l().jsx)(Ts,{children:a.map((e,t)=>{const n=((e,t)=>"string"===typeof e?e:Dl(Al(null===e||void 0===e?void 0:e.name,null===e||void 0===e?void 0:e.title,null===e||void 0===e?void 0:e.skill,null===e||void 0===e?void 0:e.label),t))(e,E),r=((e,t)=>{if(!e||"object"!==typeof e)return"";const n=Al(e.level,e.proficiency);if(!n)return"";const r={advanced:{ar:"\u0645\u062a\u0642\u062f\u0645",en:"Advanced"},intermediate:{ar:"\u0645\u062a\u0648\u0633\u0637",en:"Intermediate"},basic:{ar:"\u0623\u0633\u0627\u0633\u064a",en:"Basic"},beginner:{ar:"\u0645\u0628\u062a\u062f\u0626",en:"Beginner"},good:{ar:"\u062c\u064a\u062f",en:"Good"}}[String(n).toLowerCase()];return r?t?r.ar:r.en:Dl(n,t)})(e,E),a=((e,t)=>{if(!e||"object"!==typeof e)return[];const n=Al(e.sources,e.source,e.learnedFrom),r=Array.isArray(n)?n:n?[n]:[];return[...new Set(r.map(e=>Dl(e,t).trim()).filter(Boolean))]})(e,E);return(0,l().jsxs)(Ls,{children:[(0,l().jsxs)("div",{className:"skill-header",children:[(0,l().jsx)("strong",{className:"skill-name",children:n}),r&&(0,l().jsx)("span",{className:"skill-level",children:r})]}),a.length>0&&(0,l().jsxs)(l().Fragment,{children:[(0,l().jsxs)("span",{className:"source-label",children:[(0,l().jsx)(ul,{}),E?"\u0645\u0635\u0627\u062f\u0631 \u0627\u0643\u062a\u0633\u0627\u0628 \u0627\u0644\u0645\u0647\u0627\u0631\u0629":"Skill Sources"]}),(0,l().jsx)(Ns,{children:a.map((e,t)=>(0,l().jsx)("li",{children:e},`${e}-${t}`))})]})]},`${n}-${t}`)})})]},t)})})]}),(0,l().jsxs)(es,{id:"about-volunteering",className:"alternate",children:[(0,l().jsx)(Us,{number:"05",icon:Yi,title:(null===(x=N.volunteering)||void 0===x?void 0:x.title)||(E?"\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0627\u062a \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u0629":"Volunteer Activities"),description:null===(w=N.volunteering)||void 0===w?void 0:w.description}),Object.keys(H).length>0&&(0,l().jsxs)(zs,{children:[(0,l().jsxs)("div",{className:"summary-heading",children:[(0,l().jsx)(Yi,{}),(0,l().jsx)("h3",{children:H.label||(E?"\u0627\u0644\u0633\u062c\u0644 \u0627\u0644\u062a\u0637\u0648\u0639\u064a":"Volunteer Record")})]}),H.value&&(0,l().jsx)("strong",{className:"summary-value",children:H.value}),(0,l().jsxs)("div",{className:"summary-meta",children:[H.opportunities&&(0,l().jsxs)(fs,{children:[(0,l().jsx)(Vi,{}),H.opportunities," ",E?"\u0641\u0631\u0635\u0629 \u062a\u0637\u0648\u0639\u064a\u0629":"Volunteer Opportunities"]}),(0,l().jsx)(gs,{item:H,isArabic:E})]}),H.description&&(0,l().jsx)("p",{className:"summary-description",children:H.description}),(0,l().jsx)(Hs,{item:H,title:H.label||(E?"\u0627\u0644\u0633\u062c\u0644 \u0627\u0644\u062a\u0637\u0648\u0639\u064a":"Volunteer Record"),fallbackType:"volunteering",isArabic:E,onPreview:O})]}),(0,l().jsx)(rs,{children:V(I,e=>({title:e.name,subtitle:e.provider,description:e.description,fallbackDocumentType:"participation"}))})]}),(0,l().jsx)(es,{id:"about-goal",children:(0,l().jsxs)(Os,{children:[(0,l().jsxs)("div",{children:[(0,l().jsx)("h2",{children:(null===(k=N.goal)||void 0===k?void 0:k.title)||(E?"\u062a\u0637\u0644\u0639\u0627\u062a\u064a \u0627\u0644\u0645\u0647\u0646\u064a\u0629":"Career Aspirations")}),(0,l().jsx)("p",{children:null===(S=N.goal)||void 0===S?void 0:S.description})]}),(0,l().jsxs)(_s,{to:"/contact",children:[E?"\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a":"Contact Me",(0,l().jsx)(pl,{})]})]})})]}),(0,l().jsx)(Ws,{item:z,onClose:D,isArabic:E})]})},Gs=fn.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: clamp(10px, 1.5vw, 16px);

  @media (max-width: 480px) {
    justify-content: center;
    gap: 10px;
  }
`,Ks={primary:un`
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
  `},Qs=fn.button`
  ${e=>{let{$variant:t="primary"}=e;return Ks[t]||Ks.primary}}

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
`,Ys=(fn(jl)`
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
`,fn(Qs)`
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
`,Qs),Js=fn.div`
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
`,Xs=fn.div`
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
`,Zs=e=>{let{value:t,duration:n=1200}=e;const[r,a]=(0,s().useState)(0);return(0,s().useEffect)(()=>{var e,r;const o=Math.max(0,Number(t)||0);if("undefined"!==typeof window&&(null===(e=(r=window).matchMedia)||void 0===e?void 0:e.call(r,"(prefers-reduced-motion: reduce)").matches))return void a(o);let i,l=null;const s=e=>{null===l&&(l=e);const t=Math.min((e-l)/Math.max(n,1),1),r=1-Math.pow(1-t,3);a(Math.floor(r*o)),t<1?i=requestAnimationFrame(s):a(o)};return i=requestAnimationFrame(s),()=>cancelAnimationFrame(i)},[t,n]),(0,l().jsxs)("strong",{children:[r,"+"]})},ec=e=>{let{children:t,className:n}=e;return(0,l().jsx)(Js,{className:n,children:t})},tc={React:function(e){return ui({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(e)},JavaScript:function(e){return ui({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"},child:[]}]})(e)},HTML:function(e){return ui({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"},child:[]}]})(e)},CSS:function(e){return ui({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"},child:[]}]})(e)},Git:function(e){return ui({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"},child:[]}]})(e)},SQL:xi,MySQL:xi,"REST API":function(e){return ui({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"},child:[]}]})(e)},"Microsoft 365":function(e){return ui({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"},child:[]}]})(e)}},nc=e=>{let{name:t}=e;const n=tc[t]||nl;return(0,l().jsx)(n,{"aria-hidden":"true",style:{color:"var(--color-primary)",width:"19px",height:"19px"}})},rc=n.p+"static/media/me.93fc188400bffe390923.png",ac=yn`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,oc=yn`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-7px); }
`,ic=yn`
  0%, 100% {
    box-shadow: 0 0 0 0
      color-mix(in srgb, var(--color-primary) 20%, transparent);
  }
  60% {
    box-shadow: 0 0 0 8px transparent;
  }
`,lc=fn(Ja)`
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
`,sc=fn(Xa)`
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
`,cc=fn.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: clamp(18px, 2.5vw, 27px);
  min-width: 0;
  animation: ${ac} 0.8s ease both;

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,uc=fn.div`
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
    animation: ${ic} 2.5s infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before { animation: none; }
  }
`,dc=fn.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`,pc=fn(Cl)`
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
`,fc=fn.div`
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
`,hc=fn.strong`
  display: block;
  animation: ${ac} 0.45s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,mc=fn(Tl)`
  max-width: 620px;
  margin: 0;
  color: var(--color-text-secondary);
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  line-height: 2;
`,gc=fn.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 900px) {
    align-items: center;
  }
`,vc=fn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`,yc=fn.div`
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
`,bc=fn.span`
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
`,xc=fn.span`
  color: var(--color-text-primary);
`,wc=fn(Gs)`
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
`,kc=fn.figure`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 450px;
  min-width: 0;
  margin: 0;
  isolation: isolate;
  animation: ${ac} 1s ease 0.15s both;

  @media (max-width: 480px) {
    max-width: 310px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Sc=fn.div`
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
`,jc=fn.div`
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
  animation: ${oc} 6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Cc=fn.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`,Ec=fn(ec)`
  position: relative;
  width: 100%;
  min-height: 420px;

  @media (max-width: 480px) {
    min-height: 310px;
  }
`,Pc=()=>{const{t:e,i18n:t}=mo(),n=e("home:hero.job_titles",{returnObjects:!0}),r=Array.isArray(n)?n:[],[a,o]=(0,s().useState)(0);return(0,s().useEffect)(()=>{o(0)},[t.language]),(0,s().useEffect)(()=>{var e,t;if(r.length<=1)return;if("undefined"!==typeof window&&(null===(e=(t=window).matchMedia)||void 0===e?void 0:e.call(t,"(prefers-reduced-motion: reduce)").matches))return;const n=setInterval(()=>{o(e=>(e+1)%r.length)},3500);return()=>clearInterval(n)},[r.length,t.language]),r.length?(0,l().jsx)(fc,{"aria-live":"off",children:(0,l().jsx)(hc,{children:r[a%r.length]},`${t.language}-${a}`)}):null},Tc=()=>{const{t:e}=mo(),t=e("home:hero.tech_stack",{returnObjects:!0}),n=Array.isArray(t)?t:[];return(0,l().jsx)(lc,{id:"home",children:(0,l().jsxs)(sc,{children:[(0,l().jsxs)(cc,{children:[(0,l().jsx)(uc,{children:e("home:hero.availability_status")}),(0,l().jsxs)(dc,{children:[(0,l().jsx)(pc,{as:"h1",children:e("home:hero.name")}),(0,l().jsx)(Pc,{})]}),(0,l().jsx)(mc,{children:e("home:hero.introduction")}),(0,l().jsx)(gc,{children:(0,l().jsx)(vc,{children:n.map((e,t)=>(0,l().jsxs)(yc,{children:[(0,l().jsx)(bc,{children:(0,l().jsx)(nc,{name:e.icon})}),(0,l().jsx)(xc,{children:e.text})]},`${e.icon||e.text}-${t}`))})}),(0,l().jsxs)(wc,{children:[(0,l().jsx)(Ys,{as:Ha,to:"/contact",children:e("buttons.contact")}),(0,l().jsx)(Ys,{as:"a",$variant:"secondary",href:"/abdulrahman-portfolio-react/documents/cv.pdf",target:"_blank",rel:"noopener noreferrer",children:e("buttons.cv")})]})]}),(0,l().jsxs)(kc,{children:[(0,l().jsx)(Sc,{}),(0,l().jsxs)(Ec,{children:[(0,l().jsx)(jc,{children:(0,l().jsx)(Cc,{src:rc,alt:e("home:hero.profileAlt"),fetchPriority:"high"})}),(0,l().jsxs)(Xs,{className:"top",children:[(0,l().jsx)(Zs,{value:5}),(0,l().jsx)("span",{children:e("home:hero.statistic.projects")})]}),(0,l().jsxs)(Xs,{className:"left",children:[(0,l().jsx)(Zs,{value:2}),(0,l().jsx)("span",{children:e("home:hero.statistic.years")})]}),(0,l().jsxs)(Xs,{className:"right",children:[(0,l().jsx)(Zs,{value:10}),(0,l().jsx)("span",{children:e("home:hero.statistic.technologies")})]})]})]})]})})},Lc=fn.article`
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
`,Nc=fn.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--space-2xl);
  height: var(--space-2xl);
  font-size: var(--size-3xl);
  color: var(--color-gray);
`,zc=fn(Lc)`
  background-color: var(--color-background);
`,Oc=e=>{let{icon:t,title:n,description:r}=e;const{t:a}=mo();return(0,l().jsxs)(zc,{style:{textAlign:"center"},children:[(0,l().jsx)(Nc,{children:(0,l().jsx)(t,{})}),(0,l().jsx)(Pl,{children:n}),(0,l().jsx)(Tl,{children:r})]})},_c=fn.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,Rc={web:function(e){return ui({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)},technology:function(e){return ui({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"},child:[]}]})(e)},applications:function(e){return ui({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"},child:[]}]})(e)}},Dc=()=>{const{t:e}=mo(),t=e("home:services.items",{returnObjects:!0});return(0,l().jsx)(_c,{children:t.map(e=>(0,l().jsx)(Oc,{icon:Rc[e.icon],title:e.title,description:e.description},e.id))})},Ac=yn`
  from {
    opacity: 0;
    transform: translateY(28px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Mc=yn`
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
`,$c=fn(Ja)`
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
`,Ic=fn(Xa)`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: clamp(35px, 5vw, 65px);
`,Fc=fn.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: clamp(26px, 4vw, 42px);
`,Uc=fn.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 16px;
`,Hc=fn.span`
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
`,Bc=fn.span`
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
`,Wc=fn.div`
  width: 100%;
  height: 1px;
  background: var(--color-border);
`,Vc=fn.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.85fr);

  align-items: center;

  gap: clamp(30px, 5vw, 85px);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 22px;
  }
`,qc=fn.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 18px;
  min-width: 0;
`,Gc=fn.h2`
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
`,Kc=fn.span`
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

  animation: ${Mc} 0.8s ease both;

  [dir="ltr"] & {
    transform-origin: left;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Qc=fn.div`
  display: flex;
  align-items: center;

  padding-inline-start: clamp(0px, 2vw, 30px);

  border-inline-start: 2px solid var(--color-border);

  @media (max-width: 768px) {
    padding-inline-start: 18px;
  }
`,Yc=fn.p`
  margin: 0;
  max-width: 570px;

  color: var(--color-text-secondary);

  font-size: clamp(0.95rem, 1.4vw, 1.08rem);
  font-weight: 400;
  line-height: 2.1;

  text-wrap: pretty;
`,Jc=fn.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 25px;
`,Xc=fn.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;
  flex-wrap: wrap;
`,Zc=fn.span`
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
`,eu=fn.div`
  flex: 1;
  height: 1px;

  background: var(--color-border);
`,tu=fn.div`
  width: 100%;
  min-width: 0;

  opacity: ${e=>{let{$visible:t}=e;return t?1:0}};

  transform: ${e=>{let{$visible:t}=e;return t?"translateY(0)":"translateY(28px)"}};

  animation: ${e=>{let{$visible:t}=e;return t?Ac:"none"}} 0.75s ease both;

  transition:
    opacity 0.75s ease,
    transform 0.75s ease;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    animation: none;
    transition: none;
  }
`,nu=()=>{var e;const{i18n:t}=mo(),n=(0,s().useRef)(null),[r,a]=(0,s().useState)(!1),o=(null===(e=t.language)||void 0===e?void 0:e.toLowerCase().startsWith("ar"))?{index:"01 / SERVICES",label:"\u0645\u0627 \u0623\u0642\u062f\u0645\u0647",title:"\u062d\u0644\u0648\u0644 \u0631\u0642\u0645\u064a\u0629 \u062a\u0635\u0646\u0639 \u0641\u0631\u0642\u064b\u0627.",description:"\u0623\u0642\u062f\u0645 \u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0648\u0627\u0644\u0631\u0642\u0645\u064a\u0629 \u0627\u0644\u062a\u064a \u062a\u062c\u0645\u0639 \u0628\u064a\u0646 \u0627\u0644\u062f\u0642\u0629 \u0648\u0627\u0644\u062a\u0646\u0638\u064a\u0645 \u0648\u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0639\u0635\u0631\u064a\u060c \u0644\u0645\u0633\u0627\u0639\u062f\u062a\u0643 \u0639\u0644\u0649 \u062a\u062d\u0648\u064a\u0644 \u0623\u0641\u0643\u0627\u0631\u0643 \u0648\u0645\u062a\u0637\u0644\u0628\u0627\u062a\u0643 \u0625\u0644\u0649 \u062d\u0644\u0648\u0644 \u0639\u0645\u0644\u064a\u0629 \u0648\u0646\u062a\u0627\u0626\u062c \u0627\u062d\u062a\u0631\u0627\u0641\u064a\u0629.",gridLabel:"\u0627\u0633\u062a\u0643\u0634\u0641 \u0627\u0644\u062e\u062f\u0645\u0627\u062a"}:{index:"01 / SERVICES",label:"What I Offer",title:"Digital solutions that make a difference.",description:"I provide a range of technical and digital services that combine precision, organization, and modern design to transform your ideas and requirements into practical, professional results.",gridLabel:"Explore Services"};return(0,s().useEffect)(()=>{var e,t;const r=n.current;if(!r)return;const o=null===(e=(t=window).matchMedia)||void 0===e?void 0:e.call(t,"(prefers-reduced-motion: reduce)").matches;if("undefined"===typeof IntersectionObserver||o)return void a(!0);const i=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&(a(!0),i.disconnect())},{threshold:.1,rootMargin:"0px 0px -40px 0px"});return i.observe(r),()=>i.disconnect()},[]),(0,l().jsx)($c,{id:"services",ref:n,children:(0,l().jsxs)(Ic,{children:[(0,l().jsxs)(Fc,{children:[(0,l().jsxs)(Uc,{children:[(0,l().jsx)(Hc,{children:o.index}),(0,l().jsx)(Bc,{children:o.label})]}),(0,l().jsx)(Wc,{}),(0,l().jsxs)(Vc,{children:[(0,l().jsxs)(qc,{children:[(0,l().jsx)(Gc,{children:o.title}),(0,l().jsx)(Kc,{})]}),(0,l().jsx)(Qc,{children:(0,l().jsx)(Yc,{children:o.description})})]})]}),(0,l().jsxs)(Jc,{children:[(0,l().jsxs)(Xc,{children:[(0,l().jsx)(Zc,{children:o.gridLabel}),(0,l().jsx)(eu,{})]}),(0,l().jsx)(tu,{$visible:r,children:(0,l().jsx)(Dc,{})})]})]})})},ru=fn.article`
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
`,au=fn.div`
  display: flex;
  align-items: flex-start;
  gap: clamp(14px, 2.5vw, 24px);
`,ou=fn.span`
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
`,iu=fn.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
  min-width: 0;
`,lu=fn.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 7px;
  }
`,su=fn.h3`
  margin: 0;
  color: var(--color-text-primary);
  font-size: clamp(1.15rem, 2vw, 1.45rem);
  font-weight: 800;
  line-height: 1.55;
  overflow-wrap: anywhere;
`,cu=fn.span`
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
`,uu=fn.p`
  margin: 0;
  max-width: 850px;

  color: var(--color-text-secondary);
  font-size: clamp(0.9rem, 1.4vw, 0.98rem);
  line-height: 1.95;
  overflow-wrap: anywhere;
`,du=fn.a`
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
`,pu=e=>{let{content:t}=e;return"string"===typeof t?(0,l().jsx)(uu,{children:t}):Array.isArray(t)?(0,l().jsx)(uu,{children:t.map((e,t)=>{var n,r;return"string"===typeof e?(0,l().jsx)("span",{children:e},t):"link"===(null===e||void 0===e?void 0:e.type)&&e.href?(0,l().jsx)(du,{href:e.href,target:"_blank",rel:"noopener noreferrer",children:e.text},t):(0,l().jsx)("span",{children:null!==(n=null!==(r=null===e||void 0===e?void 0:e.value)&&void 0!==r?r:null===e||void 0===e?void 0:e.text)&&void 0!==n?n:""},t)})}):null},fu=fn.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 9px;

  margin: 0;
  padding: 0;
  list-style: none;
`,hu=fn.li`
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
`,mu=fn.div`
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
`,gu=fn(Ys)`
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
`,vu=fn.span`
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
`,yu=e=>{let{index:t=0,title:n,date:r,description:a,techStack:o,toLink:i,value1:s,value2:c,toHref:u}=e;const d=Array.isArray(o)?o:[],p="string"===typeof u&&u.trim().length>0&&"#"!==u,f=String(t+1).padStart(2,"0");return(0,l().jsxs)(ru,{children:[(0,l().jsxs)(au,{children:[(0,l().jsx)(ou,{"aria-hidden":"true",children:f}),(0,l().jsxs)(iu,{children:[(0,l().jsxs)(lu,{children:[(0,l().jsx)(su,{children:n}),r&&(0,l().jsxs)(cu,{children:[(0,l().jsx)(sl,{"aria-hidden":"true"}),(0,l().jsx)("span",{dir:"auto",children:r})]})]}),(0,l().jsx)(pu,{content:a})]})]}),d.length>0&&(0,l().jsx)(fu,{"aria-label":"Technologies",children:d.map((e,t)=>(0,l().jsx)(hu,{children:e},`${e}-${t}`))}),(0,l().jsxs)(mu,{children:[(0,l().jsxs)(gu,{as:Ha,to:i,children:[s,(0,l().jsxs)(vu,{children:[(0,l().jsx)(fl,{className:"rtl-arrow","aria-hidden":"true"}),(0,l().jsx)(pl,{className:"ltr-arrow","aria-hidden":"true"})]})]}),p&&(0,l().jsxs)(gu,{as:"a",href:u,target:"_blank",rel:"noopener noreferrer",$variant:"secondary",children:[c,(0,l().jsx)(tl,{"aria-hidden":"true"})]})]})]})},bu=fn.div`
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2.5vw, 22px);

  width: 100%;
  min-width: 0;
`,xu=fn.p`
  margin: 0;
  padding: 40px 20px;

  border: 1px solid var(--color-border);
  border-radius: 14px;
  background: var(--color-background-secondary);

  color: var(--color-text-secondary);
  text-align: center;
  line-height: 1.8;
`,wu=()=>{const{t:e,i18n:t}=mo(["home","projects","common"]),n=(t.resolvedLanguage||t.language||"ar").startsWith("ar"),r=e("featuredProjects.items",{ns:"home",returnObjects:!0,defaultValue:[]}),a=Array.isArray(r)?r:[];return 0===a.length?(0,l().jsx)(xu,{children:n?"\u0644\u0627 \u062a\u0648\u062c\u062f \u0645\u0634\u0627\u0631\u064a\u0639 \u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0639\u0631\u0636 \u062d\u0627\u0644\u064a\u064b\u0627.":"No projects available at the moment."}):(0,l().jsx)(bu,{children:a.map((t,r)=>{const a=t.id,o=a?`/projects/${encodeURIComponent(a)}`:"/projects",i=t.shortDescription||t.desc||"";return(0,l().jsx)(yu,{index:r,title:t.title,date:t.date,description:i,techStack:t.tech_stack,toLink:o,toHref:t.link,value1:e("buttons.view_project",{ns:"common",defaultValue:n?"\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639":"Project Details"}),value2:e("buttons.demo",{ns:"common",defaultValue:n?"\u0645\u0639\u0627\u064a\u0646\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639":"Live Preview"})},a||r)})})},ku=fn(Ja)`
  width: 100%;
  min-height: auto;
  padding-block: clamp(70px, 8vw, 110px);
  background: var(--color-background);
  color: var(--color-text-primary);

  @media (max-width: 600px) {
    padding-block: 55px 70px;
  }
`,Su=fn(Xa)`
  display: flex;
  flex-direction: column;
  gap: clamp(30px, 4vw, 45px);
  width: 100%;
  min-width: 0;
`,ju=fn.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 25px;

  @media (max-width: 700px) {
    align-items: flex-start;
  }
`,Cu=fn.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 700px;
`,Eu=fn.span`
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
`,Pu=fn.h2`
  margin: 0;
  color: var(--color-text-primary);
  font-size: clamp(1.85rem, 3.5vw, 2.7rem);
  font-weight: 800;
  line-height: 1.4;
`,Tu=fn.p`
  margin: 0;
  color: var(--color-text-secondary);
  font-size: clamp(0.93rem, 1.5vw, 1.03rem);
  line-height: 1.95;
`,Lu=fn(Ha)`
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
`,Nu=fn(Lu)`
  display: none;

  @media (max-width: 700px) {
    display: inline-flex;
    align-self: center;
  }
`,zu=fn.span`
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
`,Ou=()=>{const{t:e}=mo(),t=e("home:featuredProjects.header.view_projects");return(0,l().jsx)(ku,{id:"featured-projects",children:(0,l().jsxs)(Su,{children:[(0,l().jsxs)(ju,{children:[(0,l().jsxs)(Cu,{children:[(0,l().jsx)(Eu,{children:e("home:featuredProjects.header.label",{defaultValue:"PORTFOLIO"})}),(0,l().jsx)(Pu,{children:e("home:featuredProjects.header.title")}),(0,l().jsx)(Tu,{children:e("home:featuredProjects.header.desc")})]}),(0,l().jsxs)(Lu,{to:"/projects",children:[t,(0,l().jsxs)(zu,{children:[(0,l().jsx)(fl,{className:"arrow-rtl"}),(0,l().jsx)(pl,{className:"arrow-ltr"})]})]})]}),(0,l().jsx)(wu,{}),(0,l().jsxs)(Nu,{to:"/projects",children:[t,(0,l().jsxs)(zu,{children:[(0,l().jsx)(fl,{className:"arrow-rtl"}),(0,l().jsx)(pl,{className:"arrow-ltr"})]})]})]})})},_u=fn(Ja)`
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
`,Ru=fn(Xa)`
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
`,Du=fn(El)`
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
`,Au=fn(Tl)`
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
`,Mu=fn.div`
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
`,$u=fn(Ys)`
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
`,Iu=()=>{const{t:e}=mo();return(0,l().jsx)(_u,{id:"call-to-action",children:(0,l().jsxs)(Ru,{children:[(0,l().jsx)(Du,{as:"h2",children:e("home:callToAction.title")}),(0,l().jsx)(Au,{children:e("home:callToAction.paragraph")}),(0,l().jsxs)(Mu,{children:[(0,l().jsx)($u,{as:Ha,to:"/contact",children:e("buttons.contact")}),(0,l().jsx)($u,{as:Ha,to:"/projects",$variant:"secondary",children:e("buttons.projects")})]})]})})},Fu=()=>(0,l().jsxs)("main",{id:"main-content",children:[(0,l().jsx)(Tc,{}),(0,l().jsx)(nu,{}),(0,l().jsx)(Ou,{}),(0,l().jsx)(Iu,{})]}),Uu=fn.main`
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
`,Hu=fn.div`
  width: 100%;
  padding: 0;
  margin: 0;
`,Bu=fn.h1`
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
`,Wu=fn.p`
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
`,Vu=fn.section`
  width: 100%;

  padding-block:
    clamp(35px, 5vw, 65px)
    clamp(65px, 8vw, 100px);

  background: var(
    --color-background,
    #f4f7fb
  );
`,qu=fn(Xa)`
  display: flex;
  flex-direction: column;
  gap: clamp(24px, 4vw, 35px);
`,Gu=fn.div`
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
`,Ku=fn.span`
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
`,Qu=fn.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: 0;
`,Yu=fn.h2`
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
`,Ju=fn.p`
  margin: 0;

  color: var(
    --color-text-secondary,
    #475569
  );

  font-size: 0.88rem;
  line-height: 1.85;
`,Xu=fn.div`
  width: 100%;
  min-width: 0;

  & > * {
    max-width: 100%;
  }
`,Zu=()=>{const{t:e,i18n:t}=mo(["projects","common"]),n=(t.resolvedLanguage||t.language||"ar").startsWith("ar"),r=e("projects:pageTitle",{defaultValue:n?"\u0645\u0634\u0627\u0631\u064a\u0639\u064a":"My Projects"}),a=e("projects:pageDesc",{defaultValue:n?"\u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062a\u064a \u0642\u0645\u062a \u0628\u062a\u0635\u0645\u064a\u0645\u0647\u0627 \u0648\u062a\u0637\u0648\u064a\u0631\u0647\u0627\u060c \u0648\u062a\u0639\u0643\u0633 \u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0648\u062e\u0628\u0631\u062a\u064a \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0645\u0648\u0627\u0642\u0639 \u0648\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u0648\u064a\u0628.":"A collection of projects I have designed and developed, reflecting my technical skills and experience in building websites and web applications."}),o=e("projects:section.title",{defaultValue:n?"\u0627\u0633\u062a\u0643\u0634\u0641 \u0645\u0634\u0627\u0631\u064a\u0639\u064a":"Explore My Projects"}),i=e("projects:section.description",{defaultValue:n?"\u062a\u0635\u0641\u062d \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0627\u0637\u0644\u0639 \u0639\u0644\u0649 \u062a\u0641\u0627\u0635\u064a\u0644 \u0643\u0644 \u0645\u0634\u0631\u0648\u0639 \u0648\u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0629 \u0641\u064a \u062a\u0637\u0648\u064a\u0631\u0647.":"Browse my projects and explore their details and the technologies used to build them."});return(0,l().jsxs)(Uu,{dir:n?"rtl":"ltr",children:[(0,l().jsxs)(Ol,{children:[(0,l().jsx)(Sl,{value:"projects"}),(0,l().jsx)(_l,{children:(0,l().jsxs)(Hu,{children:[(0,l().jsx)(Bu,{children:r}),(0,l().jsx)(Wu,{children:a})]})})]}),(0,l().jsx)(Vu,{"aria-label":o,children:(0,l().jsxs)(qu,{children:[(0,l().jsxs)(Gu,{children:[(0,l().jsx)(Ku,{"aria-hidden":"true",children:(0,l().jsx)(Ji,{})}),(0,l().jsxs)(Qu,{children:[(0,l().jsx)(Yu,{children:o}),(0,l().jsx)(Ju,{children:i})]})]}),(0,l().jsx)(Xu,{children:(0,l().jsx)(wu,{})})]})})]})},ed={react1:n.p+"static/media/react1.e3bd6953a72d9511b7db.png",anaalmughyir1:n.p+"static/media/anaalmughyir1.068f79c3a22321ddb8b5.png"},td=fn(Xa)`
  padding-top: 50px;
  padding-bottom: 80px;
`,nd=fn.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 36px;
`,rd=fn.h1`
  margin: 0;
  color: var(--color-heading);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  line-height: 1.5;
`,ad=fn.p`
  max-width: 850px;
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 2;
`,od=fn.span`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
`,id=fn.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, 320px), 1fr)
  );
  gap: 20px;
  margin-bottom: 45px;
`,ld=fn.img`
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  background: var(--color-card-background);
  box-shadow: var(--shadow-card);
`,sd=fn.section`
  margin-bottom: 40px;
`,cd=fn.h2`
  margin: 0 0 18px;
  color: var(--color-heading);
  font-size: clamp(1.25rem, 2.5vw, 1.65rem);
  font-weight: 800;
`,ud=fn.ul`
  display: grid;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
`,dd=fn.li`
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
`,pd=fn.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`,fd=fn.li`
  padding: 9px 15px;
  border: 1px solid var(--color-border);
  border-radius: 9px;
  background: var(--color-surface);
  color: var(--color-text-primary);
  font-size: 0.9rem;
  font-weight: 600;
`,hd=fn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 35px;
`,md=fn.a`
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
`,gd=fn(Ha)`
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
`,vd=()=>{const{projectId:e}=Ir(),{t:t,i18n:n}=mo("projects"),r=t("items",{returnObjects:!0,defaultValue:[]}),a=Array.isArray(r)?r.find(t=>t.id===e):void 0,o=(n.resolvedLanguage||n.language||"ar").startsWith("ar")?hl:ml;if(!a)return(0,l().jsxs)(l().Fragment,{children:[(0,l().jsxs)(Ol,{children:[(0,l().jsx)(Sl,{value:"projects"}),(0,l().jsx)(_l,{children:(0,l().jsx)(rd,{children:t("details.notFound")})})]}),(0,l().jsxs)(td,{children:[(0,l().jsx)(ad,{children:t("details.notFoundDescription")}),(0,l().jsxs)(gd,{to:"/projects",children:[(0,l().jsx)(o,{}),t("details.backToProjects")]})]})]});const i=Array.isArray(a.project_img)?a.project_img.map(e=>ed[e]).filter(Boolean):[];return(0,l().jsxs)(l().Fragment,{children:[(0,l().jsxs)(Ol,{children:[(0,l().jsx)(Sl,{value:"projects",projectTitle:a.title}),(0,l().jsxs)(_l,{children:[(0,l().jsx)(rd,{children:a.title}),(0,l().jsx)(ad,{children:a.shortDescription})]})]}),(0,l().jsxs)(td,{children:[(0,l().jsx)(nd,{children:a.date&&(0,l().jsxs)(od,{children:[(0,l().jsx)(sl,{"aria-hidden":"true"}),t("details.date"),":"," ",(0,l().jsx)("span",{dir:"ltr",children:a.date})]})}),i.length>0&&(0,l().jsxs)(sd,{children:[(0,l().jsx)(cd,{children:t("details.gallery")}),(0,l().jsx)(id,{children:i.map((e,t)=>(0,l().jsx)(ld,{src:e,alt:`${a.title} - ${t+1}`,loading:"lazy"},`${a.id}-${t}`))})]}),a.overview&&(0,l().jsxs)(sd,{children:[(0,l().jsx)(cd,{children:t("details.overview")}),(0,l().jsx)(ad,{children:a.overview})]}),Array.isArray(a.features)&&a.features.length>0&&(0,l().jsxs)(sd,{children:[(0,l().jsx)(cd,{children:t("details.features")}),(0,l().jsx)(ud,{children:a.features.map((e,t)=>(0,l().jsxs)(dd,{children:[(0,l().jsx)(ll,{"aria-hidden":"true"}),(0,l().jsx)("span",{children:e})]},t))})]}),Array.isArray(a.tech_stack)&&a.tech_stack.length>0&&(0,l().jsxs)(sd,{children:[(0,l().jsx)(cd,{children:t("details.technologies")}),(0,l().jsx)(pd,{children:a.tech_stack.map(e=>(0,l().jsx)(fd,{children:e},e))})]}),(0,l().jsxs)(hd,{children:[a.demo&&(0,l().jsxs)(md,{href:a.demo,target:"_blank",rel:"noopener noreferrer",children:[t("details.liveDemo"),(0,l().jsx)(tl,{"aria-hidden":"true"})]}),a.github&&(0,l().jsxs)(md,{href:a.github,target:"_blank",rel:"noopener noreferrer",children:[t("details.sourceCode"),(0,l().jsx)(Xi,{"aria-hidden":"true"})]})]}),(0,l().jsxs)(gd,{to:"/projects",children:[(0,l().jsx)(o,{"aria-hidden":"true"}),t("details.backToProjects")]})]})]})},yd=()=>(0,l().jsxs)(Ol,{children:[(0,l().jsx)(Sl,{value:"contact"}),(0,l().jsxs)(_l,{children:[(0,l().jsx)(Nl,{value:"home:services.title"}),(0,l().jsx)(zl,{value:"home:hero.introduction"})]})]}),bd=fn.main`
  padding-top: var(--header-height);
`;const xd=function(){return(0,l().jsxs)(l().Fragment,{children:[(0,l().jsx)(Bi,{}),(0,l().jsx)(ti,{}),(0,l().jsx)(bd,{children:(0,l().jsxs)(la,{children:[(0,l().jsx)(oa,{path:"/",element:(0,l().jsx)(Fu,{})}),(0,l().jsx)(oa,{path:"/about",element:(0,l().jsx)(qs,{})}),(0,l().jsx)(oa,{path:"/projects",element:(0,l().jsx)(Zu,{})}),(0,l().jsx)(oa,{path:"/projects/:projectId",element:(0,l().jsx)(vd,{})}),(0,l().jsx)(oa,{path:"/contact",element:(0,l().jsx)(yd,{})})]})}),(0,l().jsx)(Hi,{})]})},wd=e=>"string"===typeof e,kd=()=>{let e,t;const n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n},Sd=e=>null==e?"":String(e),jd=/###/g,Cd=e=>e&&e.includes("###")?e.replace(jd,"."):e,Ed=e=>!e||wd(e),Pd=(e,t,n)=>{const r=wd(t)?t.split("."):t;let a=0;for(;a<r.length-1;){if(Ed(e))return{};const t=Cd(r[a]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++a}return Ed(e)?{}:{obj:e,k:Cd(r[a])}},Td=(e,t,n)=>{const{obj:r,k:a}=Pd(e,t,Object);if(void 0!==r||1===t.length)return void(r[a]=n);let o=t[t.length-1],i=t.slice(0,t.length-1),l=Pd(e,i,Object);for(;void 0===l.obj&&i.length;)o=`${i[i.length-1]}.${o}`,i=i.slice(0,i.length-1),l=Pd(e,i,Object),l?.obj&&"undefined"!==typeof l.obj[`${l.k}.${o}`]&&(l.obj=void 0);l.obj[`${l.k}.${o}`]=n},Ld=(e,t)=>{const{obj:n,k:r}=Pd(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},Nd=(e,t,n)=>{for(const r in t)"__proto__"!==r&&"constructor"!==r&&(Object.prototype.hasOwnProperty.call(e,r)?wd(e[r])||e[r]instanceof String||wd(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):Nd(e[r],t[r],n):e[r]=t[r]);return e},zd=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),Od={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},_d=e=>wd(e)?e.replace(/[&<>"'\/]/g,e=>Od[e]):e;const Rd=[" ",",","?","!",";"],Dd=new class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(void 0!==t)return t;const n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}}(20),Ad=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(!e)return;if(e[t]){if(!Object.prototype.hasOwnProperty.call(e,t))return;return e[t]}const r=t.split(n);let a=e;for(let o=0;o<r.length;){if(!a||"object"!==typeof a)return;let e,t="";for(let i=o;i<r.length;++i)if(i!==o&&(t+=n),t+=r[i],e=a[t],void 0!==e){if(["string","number","boolean"].includes(typeof e)&&i<r.length-1)continue;o+=i-o+1;break}a=e}return a},Md=e=>e?.replace(/_/g,"-"),$d={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console?.[e]?.apply?.(console,t)}};class Id{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||$d,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,n,r){return r&&!this.debug?null:(e=e.map(e=>wd(e)?e.replace(/[\r\n\x00-\x1F\x7F]/g," "):e),wd(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new Id(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return(e=e||this.options).prefix=e.prefix||this.prefix,new Id(this.logger,e)}}var Fd=new Id;class Ud{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(e=>{this.observers[e]||(this.observers[e]=new Map);const n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)}),this}off(e,t){this.observers[e]&&(t?this.observers[e].delete(t):delete this.observers[e])}once(e,t){var n=this;const r=function(){t(...arguments),n.off(e,r)};return this.on(e,r),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(this.observers[e]){Array.from(this.observers[e].entries()).forEach(e=>{let[t,r]=e;for(let a=0;a<r;a++)t(...n)})}if(this.observers["*"]){Array.from(this.observers["*"].entries()).forEach(t=>{let[r,a]=t;for(let o=0;o<a;o++)r(e,...n)})}}}class Hd extends Ud{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),void 0===this.options.ignoreJSONStructure&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const a=void 0!==r.keySeparator?r.keySeparator:this.options.keySeparator,o=void 0!==r.ignoreJSONStructure?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let i;e.includes(".")?i=e.split("."):(i=[e,t],n&&(Array.isArray(n)?i.push(...n):wd(n)&&a?i.push(...n.split(a)):i.push(n)));const l=Ld(this.data,i);return l||t||n||!e.includes(".")||(e=i[0],t=i[1],n=i.slice(2).join(".")),!l&&o&&wd(n)?Ad(this.data?.[e]?.[t],n,a):l}addResource(e,t,n,r){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1};const o=void 0!==a.keySeparator?a.keySeparator:this.options.keySeparator;let i=[e,t];n&&(i=i.concat(o?n.split(o):n)),e.includes(".")&&(i=e.split("."),r=t,t=i[1]),this.addNamespaces(t),Td(this.data,i,r),a.silent||this.emit("added",e,t,n,r)}addResources(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(const a in n)(wd(n[a])||Array.isArray(n[a]))&&this.addResource(e,t,a,n[a],{silent:!0});r.silent||this.emit("added",e,t,n)}addResourceBundle(e,t,n,r,a){let o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1,skipCopy:!1},i=[e,t];e.includes(".")&&(i=e.split("."),r=n,n=t,t=i[1]),this.addNamespaces(t);let l=Ld(this.data,i)||{};o.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?Nd(l,n,a):l={...l,...n},Td(this.data,i,l),o.silent||this.emit("added",e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return void 0!==this.getResource(e,t)}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>t[e]&&Object.keys(t[e]).length>0)}toJSON(){return this.data}}var Bd={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,a){return e.forEach(e=>{t=this.processors[e]?.process(t,n,r,a)??t}),t}};const Wd=Symbol("i18next/PATH_KEY");function Vd(e,t){const{[Wd]:n}=e(function(){const e=[],t=Object.create(null);let n;return t.get=(r,a)=>(n?.revoke?.(),a===Wd?e:(e.push(a),n=Proxy.revocable(r,t),n.proxy)),Proxy.revocable(Object.create(null),t).proxy}()),r=t?.keySeparator??".",a=t?.nsSeparator??":",o="strict"===t?.enableSelector;if(n.length>1&&a){const e=t?.ns,i=o?Array.isArray(e)?e:e?[e]:null:Array.isArray(e)?e:null;if(i){if((o?i:i.length>1?i.slice(1):[]).includes(n[0]))return`${n[0]}${a}${n.slice(1).join(r)}`}}return n.join(r)}const qd=e=>!wd(e)&&"boolean"!==typeof e&&"number"!==typeof e;class Gd extends Ud{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var n,r;super(),n=e,r=this,["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"].forEach(e=>{n[e]&&(r[e]=n[e])}),this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),this.logger=Fd.create("translator"),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e){const t={...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}}};if(null==e)return!1;const n=this.resolve(e,t);if(void 0===n?.res)return!1;const r=qd(n.res);return!1!==t.returnObjects||!r}extractFromKey(e,t){let n=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===n&&(n=":");const r=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator;let a=t.ns||this.options.defaultNS||[];const o=n&&e.includes(n),i=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!((e,t,n)=>{t=t||"",n=n||"";const r=Rd.filter(e=>!t.includes(e)&&!n.includes(e));if(0===r.length)return!0;const a=Dd.getRegExp(`(${r.map(e=>"?"===e?"\\?":e).join("|")})`);let o=!a.test(e);if(!o){const t=e.indexOf(n);t>0&&!a.test(e.substring(0,t))&&(o=!0)}return o})(e,n,r);if(o&&!i){const t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:wd(a)?[a]:a};const o=e.split(n);(n!==r||n===r&&this.options.ns.includes(o[0]))&&(a=o.shift()),e=o.join(r)}return{key:e,namespaces:wd(a)?[a]:a}}translate(e,t,n){let r="object"===typeof t?{...t}:t;if("object"!==typeof r&&this.options.overloadTranslationOptionHandler&&(r=this.options.overloadTranslationOptionHandler(arguments)),"object"===typeof r&&(r={...r}),r||(r={}),null==e)return"";"function"===typeof e&&(e=Vd(e,{...this.options,...r})),Array.isArray(e)||(e=[String(e)]),e=e.map(e=>"function"===typeof e?Vd(e,{...this.options,...r}):String(e));const a=void 0!==r.returnDetails?r.returnDetails:this.options.returnDetails,o=void 0!==r.keySeparator?r.keySeparator:this.options.keySeparator,{key:i,namespaces:l}=this.extractFromKey(e[e.length-1],r),s=l[l.length-1];let c=void 0!==r.nsSeparator?r.nsSeparator:this.options.nsSeparator;void 0===c&&(c=":");const u=r.lng||this.language,d=r.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if("cimode"===u?.toLowerCase())return d?a?{res:`${s}${c}${i}`,usedKey:i,exactUsedKey:i,usedLng:u,usedNS:s,usedParams:this.getUsedParamsDetails(r)}:`${s}${c}${i}`:a?{res:i,usedKey:i,exactUsedKey:i,usedLng:u,usedNS:s,usedParams:this.getUsedParamsDetails(r)}:i;const p=this.resolve(e,r);let f=p?.res;const h=p?.usedKey||i,m=p?.exactUsedKey||i,g=void 0!==r.joinArrays?r.joinArrays:this.options.joinArrays,v=!this.i18nFormat||this.i18nFormat.handleAsObject,y=void 0!==r.count&&!wd(r.count),b=Gd.hasDefaultValue(r),x=y?this.pluralResolver.getSuffix(u,r.count,r):"",w=r.ordinal&&y?this.pluralResolver.getSuffix(u,r.count,{ordinal:!1}):"",k=y&&!r.ordinal&&0===r.count,S=k&&r[`defaultValue${this.options.pluralSeparator}zero`]||r[`defaultValue${x}`]||r[`defaultValue${w}`]||r.defaultValue;let j=f;v&&!f&&b&&(j=S);const C=qd(j),E=Object.prototype.toString.apply(j);if(!(v&&j&&C)||["[object Number]","[object Function]","[object RegExp]"].includes(E)||wd(g)&&Array.isArray(j))if(v&&wd(g)&&Array.isArray(f))f=f.join(g),f&&(f=this.extendTranslation(f,e,r,n));else{let t=!1,a=!1;!this.isValidLookup(f)&&b&&(t=!0,f=S),this.isValidLookup(f)||(a=!0,f=i);const l=(r.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&a?void 0:f,d=b&&S!==f&&this.options.updateMissing;if(a||t||d){if(this.logger.log(d?"updateKey":"missingKey",u,s,y&&!d?`${i}${this.pluralResolver.getSuffix(u,r.count,r)}`:i,d?S:f),o){const e=this.resolve(i,{...r,keySeparator:!1});e&&e.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let e=[];const t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,r.lng||this.language);if("fallback"===this.options.saveMissingTo&&t&&t[0])for(let r=0;r<t.length;r++)e.push(t[r]);else"all"===this.options.saveMissingTo?e=this.languageUtils.toResolveHierarchy(r.lng||this.language):e.push(r.lng||this.language);const n=(e,t,n)=>{const a=b&&n!==f?n:l;this.options.missingKeyHandler?this.options.missingKeyHandler(e,s,t,a,d,r):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(e,s,t,a,d,r),this.emit("missingKey",e,s,t,f)};this.options.saveMissing&&(this.options.saveMissingPlurals&&y?e.forEach(e=>{const t=this.pluralResolver.getSuffixes(e,r);k&&r[`defaultValue${this.options.pluralSeparator}zero`]&&!t.includes(`${this.options.pluralSeparator}zero`)&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{n([e],i+t,r[`defaultValue${t}`]||S)})}):n(e,i,S))}f=this.extendTranslation(f,e,r,p,n),a&&f===i&&this.options.appendNamespaceToMissingKey&&(f=`${s}${c}${i}`),(a||t)&&this.options.parseMissingKeyHandler&&(f=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${s}${c}${i}`:i,t?f:void 0,r))}else{if(!r.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,j,{...r,ns:l}):`key '${i} (${this.language})' returned an object instead of string.`;return a?(p.res=e,p.usedParams=this.getUsedParamsDetails(r),p):e}if(o){const e=Array.isArray(j),t=e?[]:{},n=e?m:h;for(const a in j)if(Object.prototype.hasOwnProperty.call(j,a)){const e=`${n}${o}${a}`;t[a]=b&&!f?this.translate(e,{...r,defaultValue:qd(S)?S[a]:void 0,joinArrays:!1,ns:l}):this.translate(e,{...r,joinArrays:!1,ns:l}),t[a]===e&&(t[a]=j[a])}f=t}}return a?(p.res=f,p.usedParams=this.getUsedParamsDetails(r),p):f}extendTranslation(e,t,n,r,a){var o=this;if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const i=wd(e)&&(void 0!==n?.interpolation?.skipOnVariables?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let l;if(i){const t=e.match(this.interpolator.nestingRegexp);l=t&&t.length}let s=n.replace&&!wd(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),e=this.interpolator.interpolate(e,s,n.lng||this.language||r.usedLng,n),i){const t=e.match(this.interpolator.nestingRegexp);l<(t&&t.length)&&(n.nest=!1)}!n.lng&&r&&r.res&&(n.lng=this.language||r.usedLng),!1!==n.nest&&(e=this.interpolator.nest(e,function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return a?.[0]!==r[0]||n.context?o.translate(...r,t):(o.logger.warn(`It seems you are nesting recursively key: ${r[0]} in key: ${t[0]}`),null)},n)),n.interpolation&&this.interpolator.reset()}const i=n.postProcess||this.options.postProcess,l=wd(i)?[i]:i;return null!=e&&l?.length&&!1!==n.applyPostProcessor&&(e=Bd.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e){let t,n,r,a,o,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return wd(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(e=>"function"===typeof e?Vd(e,{...this.options,...i}):e)),e.forEach(e=>{if(this.isValidLookup(t))return;const l=this.extractFromKey(e,i),s=l.key;n=s;let c=l.namespaces;this.options.fallbackNS&&(c=c.concat(this.options.fallbackNS));const u=void 0!==i.count&&!wd(i.count),d=u&&!i.ordinal&&0===i.count,p=void 0!==i.context&&(wd(i.context)||"number"===typeof i.context)&&""!==i.context,f=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);c.forEach(e=>{this.isValidLookup(t)||(o=e,this.checkedLoadedFor[`${f[0]}-${e}`]||!this.utils?.hasLoadedNamespace||this.utils?.hasLoadedNamespace(o)||(this.checkedLoadedFor[`${f[0]}-${e}`]=!0,this.logger.warn(`key "${n}" for languages "${f.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),f.forEach(n=>{if(this.isValidLookup(t))return;a=n;const o=[s];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(o,s,n,e,i);else{let e;u&&(e=this.pluralResolver.getSuffix(n,i.count,i));const t=`${this.options.pluralSeparator}zero`,r=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(i.ordinal&&e.startsWith(r)&&o.push(s+e.replace(r,this.options.pluralSeparator)),o.push(s+e),d&&o.push(s+t)),p){const n=`${s}${this.options.contextSeparator||"_"}${i.context}`;o.push(n),u&&(i.ordinal&&e.startsWith(r)&&o.push(n+e.replace(r,this.options.pluralSeparator)),o.push(n+e),d&&o.push(n+t))}}let l;for(;l=o.pop();)this.isValidLookup(t)||(r=l,t=this.getResource(n,e,l,i))}))})}),{res:t,usedKey:n,exactUsedKey:r,usedLng:a,usedNS:o}}isValidLookup(e){return void 0!==e&&!(!this.options.returnNull&&null===e)&&!(!this.options.returnEmptyString&&""===e)}getResource(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=e.replace&&!wd(e.replace);let r=n?e.replace:e;if(n&&"undefined"!==typeof e.count&&(r={...r,count:e.count}),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(const e of t)delete r[e]}return r}static hasDefaultValue(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.startsWith("defaultValue")&&void 0!==e[t])return!0;return!1}}class Kd{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Fd.create("languageUtils"),this.resolveHierarchyCache={}}clearCache(){this.resolveHierarchyCache={}}getScriptPartFromCode(e){if(!(e=Md(e))||!e.includes("-"))return null;const t=e.split("-");return 2===t.length?null:(t.pop(),"x"===t[t.length-1].toLowerCase()?null:this.formatLanguageCode(t.join("-")))}getLanguagePartFromCode(e){if(!(e=Md(e))||!e.includes("-"))return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(wd(e)&&e.includes("-")){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch(Wp){}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;const n=this.formatLanguageCode(e);this.options.supportedLngs&&!this.isSupportedCode(n)||(t=n)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;const n=this.getScriptPartFromCode(e);if(this.isSupportedCode(n))return t=n;const r=this.getLanguagePartFromCode(e);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(e=>e===r||!(!e.includes("-")&&!r.includes("-"))&&(!(!e.includes("-")||r.includes("-")||e.slice(0,e.indexOf("-"))!==r)||!!(e.startsWith(r)&&r.length>1)))}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if("function"===typeof e&&(e=e(t)),wd(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e[this.getLanguagePartFromCode(t)]),n||(n=e.default),n||[]}toResolveHierarchy(e,t){const n=this.options.fallbackLng,r=Array.isArray(n)?n.join("|"):n;r!==this._cachedFallbackLng&&(this.resolveHierarchyCache={},this._cachedFallbackLng=r);const a=void 0===t||!1===t||wd(t),o=void 0===t&&"function"===typeof this.options.fallbackLng;let i=null;if(wd(e)&&a&&!o){let n;n=void 0===t?"undefined":!1===t?"boolean:false":`string:${t}`,i=`${e.length}:${e}|${n}`}if(null!==i){const e=this.resolveHierarchyCache[i];if(void 0!==e)return e.slice()}const l=this.getFallbackCodes((!1===t?[]:t)||this.options.fallbackLng||[],e),s=[],c=e=>{e&&(this.isSupportedCode(e)?s.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return wd(e)&&(e.includes("-")||e.includes("_"))?("languageOnly"!==this.options.load&&c(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&c(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&c(this.getLanguagePartFromCode(e))):wd(e)&&c(this.formatLanguageCode(e)),l.forEach(e=>{s.includes(e)||c(this.formatLanguageCode(e))}),null!==i?(this.resolveHierarchyCache[i]=s,s.slice()):s}}const Qd={zero:0,one:1,two:2,few:3,many:4,other:5},Yd={select:e=>1===e?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Jd{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=Fd.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=Md("dev"===e?"en":e),r=t.ordinal?"ordinal":"cardinal",a=JSON.stringify({cleanedCode:n,type:r});if(a in this.pluralRulesCache)return this.pluralRulesCache[a];let o;try{o=new Intl.PluralRules(n,{type:r})}catch(i){if("undefined"===typeof Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Yd;if(!e.match(/-|_/))return Yd;const n=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(n,t)}return this.pluralRulesCache[a]=o,o}needsPlural(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.getRule(e,t);return n||(n=this.getRule("dev",t)),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(e,n).map(e=>`${t}${e}`)}getSuffixes(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.getRule(e,t);return n||(n=this.getRule("dev",t)),n?n.resolvedOptions().pluralCategories.sort((e,t)=>Qd[e]-Qd[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`):[]}getSuffix(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=this.getRule(e,n);return r?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,n))}}const Xd=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=((e,t,n)=>{const r=Ld(e,n);return void 0!==r?r:Ld(t,n)})(e,t,n);return!o&&a&&wd(n)&&(o=Ad(e,n,r),void 0===o&&(o=Ad(t,n,r))),o},Zd=e=>e.replace(/\$/g,"$$$$");class ep{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=Fd.create("interpolator"),this.options=e,this.format=e?.interpolation?.format||(e=>e),this.init(e)}init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:a,prefixEscaped:o,suffix:i,suffixEscaped:l,formatSeparator:s,unescapeSuffix:c,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:p,nestingSuffix:f,nestingSuffixEscaped:h,nestingOptionsSeparator:m,maxReplaces:g,alwaysFormat:v}=e.interpolation;this.escape=void 0!==t?t:_d,this.escapeValue=void 0===n||n,this.useRawValueToEscape=void 0!==r&&r,this.prefix=a?zd(a):o||"{{",this.suffix=i?zd(i):l||"}}",this.formatSeparator=s||",",this.unescapePrefix=c?"":u?zd(u):"-",this.unescapeSuffix=this.unescapePrefix?"":c?zd(c):"",this.nestingPrefix=d?zd(d):p||zd("$t("),this.nestingSuffix=f?zd(f):h||zd(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=g||1e3,this.alwaysFormat=void 0!==v&&v,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(e,t)=>e?.source===t?(e.lastIndex=0,e):new RegExp(t,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let a,o,i;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},s=e=>{if(!e.includes(this.formatSeparator)){const a=Xd(t,l,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(a,void 0,n,{...r,...t,interpolationkey:e}):a}const a=e.split(this.formatSeparator),o=a.shift().trim(),i=a.join(this.formatSeparator).trim();return this.format(Xd(t,l,o,this.options.keySeparator,this.options.ignoreJSONStructure),i,n,{...r,...t,interpolationkey:o})};this.resetRegExp(),!this.escapeValue&&"string"===typeof e&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn("nesting options string contains interpolated variables with escapeValue: false \u2014 if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.");const c=r?.missingInterpolationHandler||this.options.missingInterpolationHandler,u=void 0!==r?.interpolation?.skipOnVariables?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>e},{regex:this.regexp,safeValue:e=>this.escapeValue?this.escape(e):e}].forEach(t=>{for(i=0;a=t.regex.exec(e);){const n=a[1].trim();if(o=s(n),void 0===o)if("function"===typeof c){const t=c(e,a,r);o=wd(t)?t:""}else if(r&&Object.prototype.hasOwnProperty.call(r,n))o="";else{if(u){o=a[0];continue}this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),o=""}else wd(o)||this.useRawValueToEscape||(o=Sd(o));const l=t.safeValue(o);if(e=e.replace(a[0],Zd(l)),u?(t.regex.lastIndex+=l.length,t.regex.lastIndex-=a[0].length):t.regex.lastIndex=0,i++,i>=this.maxReplaces)break}}),e}nest(e,t){let n,r,a,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=(e,t)=>{const n=this.nestingOptionsSeparator;if(!e.includes(n))return e;const r=e.split(new RegExp(`${zd(n)}[ ]*{`));let o=`{${r[1]}`;e=r[0],o=this.interpolate(o,a);const i=o.match(/'/g),l=o.match(/"/g);((i?.length??0)%2===0&&!l||(l?.length??0)%2!==0)&&(o=o.replace(/'/g,'"'));try{a=JSON.parse(o),t&&(a={...t,...a})}catch(Wp){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,Wp),`${e}${n}${o}`}return a.defaultValue&&a.defaultValue.includes(this.prefix)&&delete a.defaultValue,e};for(;n=this.nestingRegexp.exec(e);){let l=[];a={...o},a=a.replace&&!wd(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;const s=/{.*}/s.test(n[1])?n[1].lastIndexOf("}")+1:n[1].indexOf(this.formatSeparator);if(-1!==s&&(l=n[1].slice(s).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),n[1]=n[1].slice(0,s)),r=t(i.call(this,n[1].trim(),a),a),r&&n[0]===e&&!wd(r))return r;wd(r)||(r=Sd(r)),r||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),r=""),l.length&&(r=l.reduce((e,t)=>this.format(e,t,o.lng,{...o,interpolationkey:n[1].trim()}),r.trim())),e=e.replace(n[0],Zd(Sd(r))),this.regexp.lastIndex=0}return e}}const tp=e=>{const t={};return(n,r,a)=>{let o=a;a&&a.interpolationkey&&a.formatParams&&a.formatParams[a.interpolationkey]&&a[a.interpolationkey]&&(o={...o,[a.interpolationkey]:void 0});const i=r+JSON.stringify(o);let l=t[i];return l||(l=e(Md(r),a),t[i]=l),l(n)}},np=e=>(t,n,r)=>e(Md(n),r)(t);class rp{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=Fd.create("formatter"),this.options=e,this.init(e)}init(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||",";const n=t.cacheInBuiltFormats?tp:np;this.formats={number:n((e,t)=>{const n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)}),currency:n((e,t)=>{const n=new Intl.NumberFormat(e,{...t,style:"currency"});return e=>n.format(e)}),datetime:n((e,t)=>{const n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)}),relativetime:n((e,t)=>{const n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||"day")}),list:n((e,t)=>{const n=new Intl.ListFormat(e,{...t});return e=>n.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=tp(t)}format(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(!t)return e;if(null==e)return e;const a=t.split(this.formatSeparator),o=[];for(let l=0;l<a.length;l++){let e=a[l];for(;e.indexOf("(")>-1&&!e.includes(")")&&l+1<a.length;)e=`${e}${this.formatSeparator}${a[++l]}`;o.push(e)}const i=o.reduce((e,t)=>{const{formatName:a,formatOptions:o}=(e=>{let t=e.toLowerCase().trim();const n={};if(e.includes("(")){const r=e.split("(");t=r[0].toLowerCase().trim();const a=r[1].slice(0,-1);"currency"!==t||a.includes(":")?"relativetime"!==t||a.includes(":")?a.split(";").forEach(e=>{if(e){const[t,...r]=e.split(":"),a=r.join(":").trim().replace(/^'+|'+$/g,""),o=t.trim();n[o]||(n[o]=a),"false"===a&&(n[o]=!1),"true"===a&&(n[o]=!0),isNaN(a)||(n[o]=parseInt(a,10))}}):n.range||(n.range=a.trim()):n.currency||(n.currency=a.trim())}return{formatName:t,formatOptions:n}})(t);if(this.formats[a]){let t=e;try{const i=r?.formatParams?.[r.interpolationkey]||{},l=i.locale||i.lng||r.locale||r.lng||n;t=this.formats[a](e,l,{...o,...r,...i})}catch(i){this.logger.warn(i)}return t}return this.logger.warn(`there was no format function for ${a}`),e},e);return i}}class ap extends Ud{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=Fd.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,r.backend,r)}queueLoad(e,t,n,r){const a={},o={},i={},l={};return e.forEach(e=>{let r=!0;t.forEach(t=>{const i=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[i]=2:this.state[i]<0||(1===this.state[i]?void 0===o[i]&&(o[i]=!0):(this.state[i]=1,r=!1,void 0===o[i]&&(o[i]=!0),void 0===a[i]&&(a[i]=!0),void 0===l[t]&&(l[t]=!0)))}),r||(i[e]=!0)}),(Object.keys(a).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(a),pending:Object.keys(o),toLoadLanguages:Object.keys(i),toLoadNamespaces:Object.keys(l)}}loaded(e,t,n){const r=e.split("|"),a=r[0],o=r[1];t&&this.emit("failedLoading",a,o,t),!t&&n&&this.store.addResourceBundle(a,o,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);const i={};this.queue.forEach(n=>{((e,t,n)=>{const{obj:r,k:a}=Pd(e,t,Object);r[a]=r[a]||[],r[a].push(n)})(n.loaded,[a],o),((e,t)=>{void 0!==e.pending[t]&&(delete e.pending[t],e.pendingCount--)})(n,e),t&&n.errors.push(t),0!==n.pendingCount||n.done||(Object.keys(n.loaded).forEach(e=>{i[e]||(i[e]={});const t=n.loaded[e];t.length&&t.forEach(t=>{void 0===i[e][t]&&(i[e][t]=!0)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit("loaded",i),this.queue=this.queue.filter(e=>!e.done)}read(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads)return void this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:a,callback:o});this.readingCalls++;const i=(i,l)=>{if(this.readingCalls--,this.waitingReads.length>0){const e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}i&&l&&r<this.maxRetries?setTimeout(()=>{this.read(e,t,n,r+1,2*a,o)},a):o(i,l)},l=this.backend[n].bind(this.backend);if(2!==l.length)return l(e,t,i);try{const n=l(e,t);n&&"function"===typeof n.then?n.then(e=>i(null,e)).catch(i):i(null,n)}catch(s){i(s)}}prepareLoading(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();wd(e)&&(e=this.languageUtils.toResolveHierarchy(e)),wd(t)&&(t=[t]);const a=this.queueLoad(e,t,n,r);if(!a.toLoad.length)return a.pending.length||r(),null;a.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=e.split("|"),r=n[0],a=n[1];this.read(r,a,"read",void 0,void 0,(n,o)=>{n&&this.logger.warn(`${t}loading namespace ${a} for language ${r} failed`,n),!n&&o&&this.logger.log(`${t}loaded namespace ${a} for language ${r}`,o),this.loaded(e,n,o)})}saveMissing(e,t,n,r,a){let o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:()=>{};if(!this.services?.utils?.hasLoadedNamespace||this.services?.utils?.hasLoadedNamespace(t)){if(void 0!==n&&null!==n&&""!==n){if(this.backend?.create){const s={...o,isUpdate:a},c=this.backend.create.bind(this.backend);if(c.length<6)try{let a;a=5===c.length?c(e,t,n,r,s):c(e,t,n,r),a&&"function"===typeof a.then?a.then(e=>i(null,e)).catch(i):i(null,a)}catch(l){i(l)}else c(e,t,n,r,i,s)}e&&e[0]&&this.store.addResource(e[0],t,n,r)}}else this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")}}const op=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if("object"===typeof e[1]&&(t=e[1]),wd(e[1])&&(t.defaultValue=e[1]),wd(e[2])&&(t.tDescription=e[2]),"object"===typeof e[2]||"object"===typeof e[3]){const n=e[3]||e[2];Object.keys(n).forEach(e=>{t[e]=n[e]})}return t},interpolation:{escapeValue:!0,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),ip=e=>(wd(e.ns)&&(e.ns=[e.ns]),wd(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),wd(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&!e.supportedLngs.includes("cimode")&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e),lp=()=>{};class sp extends Ud{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;var n;if(super(),this.options=ip(e),this.services={},this.logger=Fd,this.modules={external:[]},n=this,Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach(e=>{"function"===typeof n[e]&&(n[e]=n[e].bind(n))}),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,"function"===typeof t&&(n=t,t={}),null==t.defaultNS&&t.ns&&(wd(t.ns)?t.defaultNS=t.ns:t.ns.includes("translation")||(t.defaultNS=t.ns[0]));const r=op();this.options={...r,...this.options,...ip(t)},this.options.interpolation={...r.interpolation,...this.options.interpolation},void 0!==t.keySeparator&&(this.options.userDefinedKeySeparator=t.keySeparator),void 0!==t.nsSeparator&&(this.options.userDefinedNsSeparator=t.nsSeparator),"function"!==typeof this.options.overloadTranslationOptionHandler&&(this.options.overloadTranslationOptionHandler=r.overloadTranslationOptionHandler);const a=e=>e?"function"===typeof e?new e:e:null;if(!this.options.isClone){let t;this.modules.logger?Fd.init(a(this.modules.logger),this.options):Fd.init(null,this.options),t=this.modules.formatter?this.modules.formatter:rp;const n=new Kd(this.options);this.store=new Hd(this.options.resources,this.options);const r=this.services;r.logger=Fd,r.resourceStore=this.store,r.languageUtils=n,r.pluralResolver=new Jd(n,{prepend:this.options.pluralSeparator}),t&&(r.formatter=a(t),r.formatter.init&&r.formatter.init(r,this.options),this.options.interpolation.format=r.formatter.format.bind(r.formatter)),r.interpolator=new ep(this.options),r.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},r.backendConnector=new ap(a(this.modules.backend),r.resourceStore,r,this.options),r.backendConnector.on("*",function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];e.emit(t,...r)}),this.modules.languageDetector&&(r.languageDetector=a(this.modules.languageDetector),r.languageDetector.init&&r.languageDetector.init(r,this.options.detection,this.options)),this.modules.i18nFormat&&(r.i18nFormat=a(this.modules.i18nFormat),r.i18nFormat.init&&r.i18nFormat.init(this)),this.translator=new Gd(this.services,this.options),this.translator.on("*",function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];e.emit(t,...r)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,n||(n=lp),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&"dev"!==e[0]&&(this.options.lng=e[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(t=>{this[t]=function(){return e.store[t](...arguments)}});["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(t=>{this[t]=function(){return e.store[t](...arguments),e}});const o=kd(),i=()=>{const e=(e,t)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),o.resolve(t),n(e,t)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?i():setTimeout(i,0),o}loadResources(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:lp;const n=wd(e)?e:this.language;if("function"===typeof e&&(t=e),!this.options.resources||this.options.partialBundledLanguages){if("cimode"===n?.toLowerCase()&&(!this.options.preload||0===this.options.preload.length))return t();const e=[],r=t=>{if(!t)return;if("cimode"===t)return;this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{"cimode"!==t&&(e.includes(t)||e.push(t))})};if(n)r(n);else{this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>r(e))}this.options.preload?.forEach?.(e=>r(e)),this.services.backendConnector.load(e,this.options.ns,e=>{e||this.resolvedLanguage||!this.language||this.setResolvedLanguage(this.language),t(e)})}else t(null)}reloadResources(e,t,n){const r=kd();return"function"===typeof e&&(n=e,e=void 0),"function"===typeof t&&(n=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),n||(n=lp),this.services.backendConnector.reload(e,t,e=>{r.resolve(),n(e)}),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&Bd.addPostProcessor(e),"formatter"===e.type&&(this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this}setResolvedLanguage(e){if(e&&this.languages&&!["cimode","dev"].includes(e)){for(let e=0;e<this.languages.length;e++){const t=this.languages[e];if(!["cimode","dev"].includes(t)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}this.resolvedLanguage||this.languages.includes(e)||!this.store.hasLanguageSomeTranslations(e)||(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){var n=this;this.isLanguageChangingTo=e;const r=kd();this.emit("languageChanging",e);const a=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},o=(o,i)=>{i?this.isLanguageChangingTo===e&&(a(i),this.translator.changeLanguage(i),this.isLanguageChangingTo=void 0,this.emit("languageChanged",i),this.logger.log("languageChanged",i)):this.isLanguageChangingTo=void 0,r.resolve(function(){return n.t(...arguments)}),t&&t(o,function(){return n.t(...arguments)})},i=t=>{e||t||!this.services.languageDetector||(t=[]);const n=wd(t)?t:t&&t[0],r=this.store.hasLanguageSomeTranslations(n)?n:this.services.languageUtils.getBestMatchFromCodes(wd(t)?[t]:t);r&&(this.language||a(r),this.translator.language||this.translator.changeLanguage(r),this.services.languageDetector?.cacheUserLanguage?.(r)),this.loadResources(r,e=>{o(e,r)})};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(i):this.services.languageDetector.detect(i):i(e):i(this.services.languageDetector.detect()),r}getFixedT(e,t,n,r){var a=this;const o=r?.scopeNs,i=function(e,t){let r;if("object"!==typeof t){for(var l=arguments.length,s=new Array(l>2?l-2:0),c=2;c<l;c++)s[c-2]=arguments[c];r=a.options.overloadTranslationOptionHandler([e,t].concat(s))}else r={...t};r.lng=r.lng||i.lng,r.lngs=r.lngs||i.lngs;const u=void 0!==r.ns&&null!==r.ns;r.ns=r.ns||i.ns,""!==r.keyPrefix&&(r.keyPrefix=r.keyPrefix||n||i.keyPrefix);const d={...a.options,...r};Array.isArray(o)&&!u&&(d.ns=o),"function"===typeof r.keyPrefix&&(r.keyPrefix=Vd(r.keyPrefix,d));const p=a.options.keySeparator||".";let f;return r.keyPrefix&&Array.isArray(e)?f=e.map(e=>("function"===typeof e&&(e=Vd(e,d)),`${r.keyPrefix}${p}${e}`)):("function"===typeof e&&(e=Vd(e,d)),f=r.keyPrefix?`${r.keyPrefix}${p}${e}`:e),a.t(f,r)};return wd(e)?i.lng=e:i.lngs=e,i.ns=t,i.keyPrefix=n,i}t(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.translator?.translate(...t)}exists(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.translator?.exists(...t)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=t.lng||this.resolvedLanguage||this.languages[0],r=!!this.options&&this.options.fallbackLng,a=this.languages[this.languages.length-1];if("cimode"===n.toLowerCase())return!0;const o=(e,t)=>{const n=this.services.backendConnector.state[`${e}|${t}`];return-1===n||0===n||2===n};if(t.precheck){const e=t.precheck(this,o);if(void 0!==e)return e}return!!this.hasResourceBundle(n,e)||(!(this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages))||!(!o(n,e)||r&&!o(a,e)))}loadNamespaces(e,t){const n=kd();return this.options.ns?(wd(e)&&(e=[e]),e.forEach(e=>{this.options.ns.includes(e)||this.options.ns.push(e)}),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){const n=kd();wd(e)&&(e=[e]);const r=this.options.preload||[],a=e.filter(e=>!r.includes(e)&&this.services.languageUtils.isSupportedCode(e));return a.length?(this.options.preload=r.concat(a),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!e)return"rtl";try{const t=new Intl.Locale(e);if(t&&t.getTextInfo){const e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch(Wp){}const t=this.services?.languageUtils||new Kd(op());return e.toLowerCase().indexOf("-latn")>1?"ltr":["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].includes(t.getLanguagePartFromCode(e))||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){const e=new sp(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0);return e.createInstance=sp.createInstance,e}cloneInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:lp;const n=e.forkResourceStore;n&&delete e.forkResourceStore;const r={...this.options,...e,isClone:!0},a=new sp(r);void 0===e.debug&&void 0===e.prefix||(a.logger=a.logger.clone(e));if(["store","services","language"].forEach(e=>{a[e]=this[e]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},n){const e=Object.keys(this.store.data).reduce((e,t)=>(e[t]={...this.store.data[t]},e[t]=Object.keys(e[t]).reduce((n,r)=>(n[r]={...e[t][r]},n),e[t]),e),{});a.store=new Hd(e,r),a.services.resourceStore=a.store}if(e.interpolation){const t={...op().interpolation,...this.options.interpolation,...e.interpolation},n={...r,interpolation:t};a.services.interpolator=new ep(n)}return a.translator=new Gd(a.services,r),a.translator.on("*",function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];a.emit(e,...n)}),a.init(r,t),a.translator.options=r,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const cp=sp.createInstance(),up=(cp.createInstance,cp.dir,cp.init,cp.loadResources,cp.reloadResources,cp.use,cp.changeLanguage,cp.getFixedT,cp.t,cp.exists,cp.setDefaultNamespace,cp.hasLoadedNamespace,cp.loadNamespaces,cp.loadLanguages,{type:"3rdParty",init(e){!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};oo={...oo,...e}}(e.options.react),(e=>{to=e})(e)}}),{slice:dp,forEach:pp}=[];const fp=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,hp={create(e,t,n,r){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};n&&(a.expires=new Date,a.expires.setTime(a.expires.getTime()+60*n*1e3)),r&&(a.domain=r),document.cookie=function(e,t){const n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{path:"/"};let r=`${e}=${encodeURIComponent(t)}`;if(n.maxAge>0){const e=n.maxAge-0;if(Number.isNaN(e))throw new Error("maxAge should be a Number");r+=`; Max-Age=${Math.floor(e)}`}if(n.domain){if(!fp.test(n.domain))throw new TypeError("option domain is invalid");r+=`; Domain=${n.domain}`}if(n.path){if(!fp.test(n.path))throw new TypeError("option path is invalid");r+=`; Path=${n.path}`}if(n.expires){if("function"!==typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");r+=`; Expires=${n.expires.toUTCString()}`}if(n.httpOnly&&(r+="; HttpOnly"),n.secure&&(r+="; Secure"),n.sameSite)switch("string"===typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return n.partitioned&&(r+="; Partitioned"),r}(e,t,a)},read(e){const t=`${e}=`,n=document.cookie.split(";");for(let r=0;r<n.length;r++){let e=n[r];for(;" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(t))return e.substring(t.length,e.length)}return null},remove(e,t){this.create(e,"",-1,t)}};var mp={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&"undefined"!==typeof document)return hp.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:n,cookieMinutes:r,cookieDomain:a,cookieOptions:o}=t;n&&"undefined"!==typeof document&&hp.create(n,e,r,a,o)}},gp={name:"querystring",lookup(e){let t,{lookupQuerystring:n}=e;if("undefined"!==typeof window){let{search:e}=window.location;!window.location.search&&window.location.hash?.indexOf("?")>-1&&(e=window.location.hash.substring(window.location.hash.indexOf("?")));const r=e.substring(1).split("&");for(let a=0;a<r.length;a++){const e=r[a].indexOf("=");if(e>0){r[a].substring(0,e)===n&&(t=r[a].substring(e+1))}}}return t}},vp={name:"hash",lookup(e){let t,{lookupHash:n,lookupFromHashIndex:r}=e;if("undefined"!==typeof window){const{hash:e}=window.location;if(e&&e.length>2){const a=e.substring(1);if(n){const e=a.split("&");for(let r=0;r<e.length;r++){const a=e[r].indexOf("=");if(a>0){e[r].substring(0,a)===n&&(t=e[r].substring(a+1))}}}if(t)return t;if(!t&&r>-1){const t=e.match(/\/([a-zA-Z-]*)/g);if(!Array.isArray(t))return;const n="number"===typeof r?r:0;return t[n]?.replace("/","")}}}return t}};let yp=null;const bp=()=>{if(null!==yp)return yp;try{if(yp="undefined"!==typeof window&&null!==window.localStorage,!yp)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch(Wp){yp=!1}return yp};var xp={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&bp())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:n}=t;n&&bp()&&window.localStorage.setItem(n,e)}};let wp=null;const kp=()=>{if(null!==wp)return wp;try{if(wp="undefined"!==typeof window&&null!==window.sessionStorage,!wp)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch(Wp){wp=!1}return wp};var Sp={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&kp())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:n}=t;n&&kp()&&window.sessionStorage.setItem(n,e)}},jp={name:"navigator",lookup(e){const t=[];if("undefined"!==typeof navigator){const{languages:e,userLanguage:n,language:r}=navigator;if(e)for(let a=0;a<e.length;a++)t.push(e[a]);n&&t.push(n),r&&t.push(r)}return t.length>0?t:void 0}},Cp={name:"htmlTag",lookup(e){let t,{htmlTag:n}=e;const r=n||("undefined"!==typeof document?document.documentElement:null);return r&&"function"===typeof r.getAttribute&&(t=r.getAttribute("lang")),t}},Ep={name:"path",lookup(e){let{lookupFromPathIndex:t}=e;if("undefined"===typeof window)return;const n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(!Array.isArray(n))return;const r="number"===typeof t?t:0;return n[r]?.replace("/","")}},Pp={name:"subdomain",lookup(e){let{lookupFromSubdomainIndex:t}=e;const n="number"===typeof t?t+1:1,r="undefined"!==typeof window&&window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(r)return r[n]}};let Tp=!1;try{document.cookie,Tp=!0}catch(Wp){}const Lp=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];Tp||Lp.splice(1,1);class Np{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{languageUtils:{}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=function(e){return pp.call(dp.call(arguments,1),t=>{if(t)for(const n in t)void 0===e[n]&&(e[n]=t[n])}),e}(t,this.options||{},{order:Lp,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e}),"string"===typeof this.options.convertDetectedLanguage&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=e=>e.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=n,this.addDetector(mp),this.addDetector(gp),this.addDetector(xp),this.addDetector(Sp),this.addDetector(jp),this.addDetector(Cp),this.addDetector(Ep),this.addDetector(Pp),this.addDetector(vp)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.order,t=[];return e.forEach(e=>{if(this.detectors[e]){let n=this.detectors[e].lookup(this.options);n&&"string"===typeof n&&(n=[n]),n&&(t=t.concat(n))}}),t=t.filter(e=>{return void 0!==e&&null!==e&&!("string"===typeof(t=e)&&[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(e=>e.test(t)));var t}).map(e=>this.options.convertDetectedLanguage(e)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(t=>{this.detectors[t]&&this.detectors[t].cacheUserLanguage(e,this.options)}))}}Np.type="languageDetector";const zp=JSON.parse('{"logo":{"me":"\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646"},"nav":{"home":"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629","about":"\u0639\u0646\u064a","projects":"\u0645\u0634\u0627\u0631\u064a\u0639\u064a","contact":"\u062a\u0648\u0627\u0635\u0644"},"buttons":{"contact":"\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a","view_project":"\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639","demo":"\u0645\u0639\u0627\u064a\u0646\u0629 \u062d\u064a\u0629","cv":"\u0633\u064a\u0631\u062a\u064a \u0627\u0644\u0630\u0627\u062a\u064a\u0629","projects":"\u0627\u0633\u062a\u0639\u0631\u0636 \u0645\u0634\u0627\u0631\u064a\u0639\u064a"},"copyright":"\u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629"}'),Op=JSON.parse('{"hero":{"availability_status":"\u0645\u062a\u0627\u062d \u0644\u0644\u0627\u0646\u062a\u0642\u0627\u0644 \u0627\u0644\u0648\u0638\u064a\u0641\u064a \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0645\u0633\u062a\u0642\u0644\u0629","name":"\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631","job_titles":["\u0641\u0646\u064a \u062f\u0639\u0645 \u0628\u0631\u0627\u0645\u062c","\u0641\u0646\u064a \u062f\u0639\u0645 \u062a\u0642\u0646\u064a\u0629 \u0645\u0639\u0644\u0648\u0645\u0627\u062a","\u0641\u0646\u064a \u062f\u0639\u0645 \u0642\u0648\u0627\u0639\u062f \u0628\u064a\u0627\u0646\u0627\u062a","\u0641\u0646\u064a \u0646\u0638\u0645 \u062d\u0627\u0633\u0628 \u0622\u0644\u064a","\u0645\u062f\u062e\u0644 \u0628\u064a\u0627\u0646\u0627\u062a","\u0645\u0637\u0648\u0631 \u0648\u064a\u0628 \u0645\u062a\u0643\u0627\u0645\u0644","\u0645\u062f\u064a\u0631 \u0645\u0648\u0627\u0642\u0639 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629","\u0645\u0637\u0648\u0631 \u0645\u0648\u0627\u0642\u0639 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629","\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644","\u0645\u0648\u0638\u0641 \u0635\u0646\u062f\u0648\u0642 \u0645\u062d\u0627\u0633\u0628\u0629"],"introduction":"\u062e\u0631\u064a\u062c \u062f\u0628\u0644\u0648\u0645 \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644 \u0645\u0646 \u062c\u0627\u0645\u0639\u0629 \u0637\u064a\u0628\u0629\u060c \u0623\u0645\u062a\u0644\u0643 \u0645\u0647\u0627\u0631\u0627\u062a \u062a\u0642\u0646\u064a\u0629 \u0648\u0625\u062f\u0627\u0631\u064a\u0629 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0648\u0627\u0642\u0639\u060c \u0648\u0627\u0644\u062f\u0639\u0645 \u0627\u0644\u0641\u0646\u064a\u060c \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0631\u0642\u0645\u064a\u0629. \u0623\u0633\u0639\u0649 \u0625\u0644\u0649 \u062a\u0648\u0638\u064a\u0641 \u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0648\u062e\u0628\u0631\u0627\u062a\u064a \u0641\u064a \u0641\u0631\u0635 \u0645\u0647\u0646\u064a\u0629 \u0648\u0645\u0634\u0627\u0631\u064a\u0639 \u062a\u0633\u0627\u0647\u0645 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0648\u062a\u062d\u0633\u064a\u0646 \u0643\u0641\u0627\u0621\u062a\u0647\u0627.","tech_stack":[{"text":"React","icon":"React"},{"text":"JavaScript","icon":"JavaScript"},{"text":"HTML5","icon":"HTML"},{"text":"CSS3","icon":"CSS"},{"text":"Git","icon":"Git"},{"text":"SQL","icon":"SQL"},{"text":"Microsoft 365","icon":"Microsoft 365"}],"statistic":{"projects":"\u0645\u0634\u0627\u0631\u064a\u0639 \u0645\u0646\u062c\u0632\u0629","technologies":"\u062a\u0642\u0646\u064a\u0627\u062a \u0648\u0623\u062f\u0648\u0627\u062a \u0645\u0633\u062a\u062e\u062f\u0645\u0629","years":"\u0633\u0646\u0648\u0627\u062a \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628"},"profileAlt":"\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631 - \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0648\u0627\u0644\u062f\u0639\u0645 \u0627\u0644\u062a\u0642\u0646\u064a \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629"},"services":{"title":"\u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0648\u062e\u062f\u0645\u0627\u062a\u064a","description":"\u0645\u0647\u0627\u0631\u0627\u062a \u0648\u062e\u062f\u0645\u0627\u062a \u062a\u0642\u0646\u064a\u0629 \u0648\u0625\u062f\u0627\u0631\u064a\u0629 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0648\u0627\u0642\u0639\u060c \u0648\u0627\u0644\u062f\u0639\u0645 \u0627\u0644\u0641\u0646\u064a\u060c \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a\u060c \u062a\u0633\u0647\u0645 \u0641\u064a \u062a\u0633\u0647\u064a\u0644 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0648\u0631\u0641\u0639 \u0643\u0641\u0627\u0621\u0629 \u0625\u0646\u062c\u0627\u0632 \u0627\u0644\u0645\u0647\u0627\u0645.","items":[{"id":"1","icon":"web","title":"\u062a\u0637\u0648\u064a\u0631 \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629","description":"\u062a\u0635\u0645\u064a\u0645 \u0648\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0648\u0645\u0648\u0627\u0642\u0639 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629 \u0645\u062a\u062c\u0627\u0648\u0628\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 HTML \u0648CSS \u0648JavaScript \u0648React\u060c \u0645\u0639 \u0627\u0644\u0627\u0647\u062a\u0645\u0627\u0645 \u0628\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0648\u062a\u062d\u0633\u064a\u0646 \u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u062a\u062d\u062f\u064a\u062b\u0627\u062a \u0627\u0644\u0645\u0648\u0627\u0642\u0639."},{"id":"2","icon":"technology","title":"\u0627\u0644\u062f\u0639\u0645 \u0627\u0644\u0641\u0646\u064a \u0648\u062f\u0639\u0645 \u0627\u0644\u0623\u0646\u0638\u0645\u0629","description":"\u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629 \u0641\u064a \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0623\u062c\u0647\u0632\u0629 \u0627\u0644\u062d\u0627\u0633\u0628 \u0648\u0627\u0644\u0628\u0631\u0627\u0645\u062c \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a\u060c \u0648\u062a\u0634\u062e\u064a\u0635 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629\u060c \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0623\u0639\u0637\u0627\u0644 \u0648\u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0625\u0631\u0634\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646."},{"id":"3","icon":"applications","title":"\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u0643\u062a\u0628\u064a\u0629","description":"\u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0645\u0631\u0627\u062c\u0639\u062a\u0647\u0627 \u0648\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0648\u0627\u0644\u0633\u062c\u0644\u0627\u062a\u060c \u0648\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u062a\u0637\u0628\u064a\u0642\u0627\u062a Microsoft 365 \u0644\u0625\u0639\u062f\u0627\u062f \u0627\u0644\u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0648\u0627\u0644\u062c\u062f\u0627\u0648\u0644 \u0648\u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631\u060c \u0645\u0639 \u0627\u0644\u0627\u0647\u062a\u0645\u0627\u0645 \u0628\u0627\u0644\u062f\u0642\u0629 \u0648\u0633\u0631\u064a\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a."}]},"featuredProjects":{"header":{"title":"\u0623\u0628\u0631\u0632 \u0645\u0634\u0627\u0631\u064a\u0639\u064a","desc":"\u0646\u0645\u0627\u0630\u062c \u0645\u0646 \u0623\u0639\u0645\u0627\u0644\u064a \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0648\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0628\u0646\u0627\u0621 \u0648\u0627\u062c\u0647\u0627\u062a \u0631\u0642\u0645\u064a\u0629 \u0633\u0647\u0644\u0629 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645.","view_projects":"\u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639"},"items":[{"id":"React-To-Do-List","date":"2026/08/30","project_img":["react1"],"title":"\u062a\u0637\u0628\u064a\u0642 \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React","desc":[{"type":"text","value":"\u062a\u0637\u0628\u064a\u0642 \u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React \u0648LocalStorage\u060c \u064a\u062a\u064a\u062d \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0639\u0631\u0636\u0647\u0627 \u0648\u062a\u0639\u062f\u064a\u0644\u0647\u0627 \u0648\u062d\u0630\u0641\u0647\u0627 (CRUD)\u060c \u0648\u064a\u0648\u0636\u062d \u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0641\u064a \u0628\u0646\u0627\u0621 \u0648\u0627\u062c\u0647\u0627\u062a \u062a\u0641\u0627\u0639\u0644\u064a\u0629 \u0648\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u062f\u0627\u062e\u0644 \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a. \u0637\u064f\u0648\u0651\u0631 \u0636\u0645\u0646 "},{"type":"link","text":"\u062f\u0648\u0631\u0629 \u062a\u0637\u0648\u064a\u0631 \u062a\u0637\u0628\u064a\u0642\u0627\u062a JavaScript","href":"https://academy.hsoub.com/learn/javascript-application-development/"},{"type":"text","value":" \u0645\u0646 \u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u062d\u0633\u0648\u0628."}],"tech_stack":["React","React Hooks","JavaScript","CRUD","LocalStorage"],"link":"https://dhomlmgyr188.github.io/React-To-Do-List/"},{"id":"Portfolio_v1","date":"2026/05/24","project_img":["anaalmughyir1"],"title":"\u0645\u0648\u0642\u0639 \u0634\u062e\u0635\u064a - \u0627\u0644\u0625\u0635\u062f\u0627\u0631 \u0627\u0644\u0633\u0627\u0628\u0642","desc":[{"type":"text","value":"\u0645\u0648\u0642\u0639 \u0634\u062e\u0635\u064a \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a\u060c \u064a\u062a\u0645\u064a\u0632 \u0628\u062a\u0635\u0645\u064a\u0645 \u0645\u062a\u062c\u0627\u0648\u0628 \u0648\u062a\u0646\u0638\u064a\u0645 \u0648\u0627\u0636\u062d \u0644\u0644\u0645\u062d\u062a\u0648\u0649 \u0648\u0648\u0627\u062c\u0647\u0629 \u0633\u0647\u0644\u0629 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645\u060c \u0648\u064a\u0639\u0643\u0633 \u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0631\u0642\u0645\u064a."}],"tech_stack":["HTML","CSS","Vanilla JavaScript"],"link":"https://dhomlmgyr188.github.io/abdulrahman-portfolio-static/frontend/"}]},"footer":{"quickLinks":{"title":"\u0631\u0648\u0627\u0628\u0637 \u0633\u0631\u064a\u0639\u0629"},"socialMedia":{"title":"\u062d\u0633\u0627\u0628\u0627\u062a\u064a"},"contactInfo":{"title":"\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a","location":{"value":"\u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629\u060c \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629"},"email":{"title":"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a","value":"dhomlmgyr@gmail.com"},"tel":{"title":"\u0631\u0642\u0645 \u0627\u0644\u062c\u0648\u0627\u0644","value":"+966541590819"}},"copyright":"\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0645\u063a\u064a\u0631. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629."},"callToAction":{"title":"\u0647\u0644 \u0644\u062f\u064a\u0643 \u0641\u0631\u0635\u0629 \u0645\u0647\u0646\u064a\u0629 \u0623\u0648 \u0645\u0634\u0631\u0648\u0639 \u0644\u0644\u062a\u0639\u0627\u0648\u0646\u061f","paragraph":"\u0623\u0631\u062d\u0628 \u0628\u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0628\u0634\u0623\u0646 \u0627\u0644\u0641\u0631\u0635 \u0627\u0644\u0648\u0638\u064a\u0641\u064a\u0629 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0645\u0633\u062a\u0642\u0644\u0629 \u0641\u064a \u0627\u0644\u0645\u062c\u0627\u0644\u0627\u062a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0648\u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629."}}'),_p=JSON.parse('{"pageTitle":"\u0639\u0646\u064a","pageDesc":"\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0645\u0624\u0647\u0644\u0627\u062a\u064a \u0627\u0644\u0639\u0644\u0645\u064a\u0629 \u0648\u062e\u0628\u0631\u0627\u062a\u064a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0634\u0647\u0627\u062f\u0627\u062a\u064a \u0648\u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0648\u0645\u0634\u0627\u0631\u0643\u0627\u062a\u064a \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u0629.","content":{"intro":{"title":"\u0646\u0628\u0630\u0629 \u0639\u0646\u064a","paragraph1":"\u0623\u0646\u0627 \u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u063a\u064a\u0631\u060c \u062e\u0631\u064a\u062c \u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644 \u0645\u0646 \u0627\u0644\u0643\u0644\u064a\u0629 \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u064a\u0629 \u0628\u062c\u0627\u0645\u0639\u0629 \u0637\u064a\u0628\u0629 \u0641\u064a \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629. \u0623\u062c\u0645\u0639 \u0628\u064a\u0646 \u0627\u0644\u0645\u0639\u0631\u0641\u0629 \u0628\u062a\u0637\u0648\u064a\u0631 \u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0648\u064a\u0628 \u0648\u0627\u0644\u062e\u0628\u0631\u0629 \u0627\u0644\u0639\u0645\u0644\u064a\u0629 \u0641\u064a \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0631\u0642\u0645\u064a\u0629 \u0648\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062a\u0634\u063a\u064a\u0644\u064a\u0629 \u0648\u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629.","paragraph2":"\u0627\u0643\u062a\u0633\u0628\u062a \u062e\u0628\u0631\u0629 \u0639\u0645\u0644\u064a\u0629 \u0641\u064a \u0627\u0644\u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0627\u0644\u0641\u0646\u062f\u0642\u064a \u0648\u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a \u0648\u0646\u0642\u0627\u0637 \u0627\u0644\u0628\u064a\u0639\u060c \u0625\u0644\u0649 \u062c\u0627\u0646\u0628 \u062a\u0646\u0641\u064a\u0630 \u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u064a\u0628 \u0645\u0633\u062a\u0642\u0644\u0629 \u0648\u062f\u0631\u0627\u0633\u064a\u0629. \u0623\u0647\u062a\u0645 \u0628\u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0648\u0627\u0644\u062f\u0642\u0629 \u0641\u064a \u0627\u0644\u0639\u0645\u0644 \u0648\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0648\u062d\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062a\u060c \u0648\u0623\u0633\u0639\u0649 \u0625\u0644\u0649 \u062a\u0637\u0648\u064a\u0631 \u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0648\u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629 \u0641\u064a \u0628\u064a\u0626\u0629 \u0645\u0647\u0646\u064a\u0629 \u0645\u0646\u062a\u062c\u0629."},"infoTitle":"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0633\u0631\u064a\u0639\u0629","profile":[{"label":"\u0627\u0644\u0645\u0648\u0642\u0639","value":"\u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629\u060c \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629"},{"label":"\u0627\u0644\u0645\u0624\u0647\u0644 \u0627\u0644\u0639\u0644\u0645\u064a","value":"\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637"},{"label":"\u0627\u0644\u062a\u062e\u0635\u0635","value":"\u0645\u0637\u0648\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644"},{"label":"\u0627\u0644\u0644\u063a\u0627\u062a","value":"\u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0648\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629"},{"label":"\u0627\u0644\u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0647\u0646\u064a\u0629","value":"\u0645\u062a\u0627\u062d \u0644\u0644\u0641\u0631\u0635 \u0627\u0644\u0648\u0638\u064a\u0641\u064a\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0645\u0633\u062a\u0642\u0644\u0629"}],"education":{"title":"\u0631\u062d\u0644\u062a\u064a \u0627\u0644\u062a\u0639\u0644\u064a\u0645\u064a\u0629","description":"\u0645\u0624\u0647\u0644\u0627\u062a\u064a \u0627\u0644\u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629\u060c \u0645\u0639 \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062a \u0627\u0644\u062a\u0639\u0644\u064a\u0645\u064a\u0629 \u0648\u0627\u0644\u062a\u062e\u0635\u0635\u0627\u062a \u0648\u062a\u0648\u0627\u0631\u064a\u062e \u0627\u0644\u062a\u062e\u0631\u062c \u0648\u0627\u0644\u0645\u0639\u062f\u0644\u0627\u062a.","gradeLabel":"\u0627\u0644\u0645\u0639\u062f\u0644 \u0627\u0644\u062a\u0631\u0627\u0643\u0645\u064a","items":[{"degree":"\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","school":"\u0627\u0644\u0643\u0644\u064a\u0629 \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u064a\u0629\u060c \u062c\u0627\u0645\u0639\u0629 \u0637\u064a\u0628\u0629 \u2014 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629","field":"\u0627\u0644\u062a\u062e\u0635\u0635: \u0645\u0637\u0648\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644 | \u0627\u0644\u062a\u0642\u062f\u064a\u0631: \u062c\u064a\u062f","date":"2026-01-11","grade":"3.60 / 5","documentType":"diploma","document":"/documents/education/diploma.png"},{"degree":"\u0634\u0647\u0627\u062f\u0629 \u0627\u0644\u062b\u0627\u0646\u0648\u064a\u0629 \u0627\u0644\u0639\u0627\u0645\u0629","school":"\u062b\u0627\u0646\u0648\u064a\u0629 \u0623\u0628\u064a \u0633\u0641\u064a\u0627\u0646 \u0628\u0646 \u062d\u0631\u0628 \u2014 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629","field":"\u0627\u0644\u0645\u0633\u0627\u0631: \u0627\u0644\u0639\u0644\u0648\u0645 \u0627\u0644\u0637\u0628\u064a\u0639\u064a\u0629 | \u0627\u0644\u062a\u0642\u062f\u064a\u0631: \u062c\u064a\u062f \u062c\u062f\u064b\u0627 \u0645\u0631\u062a\u0641\u0639","date":"2022-07-30","grade":"85.39 / 100","documentType":"graduation","document":"/documents/education/secondary-school.png"}]},"experience":{"title":"\u062e\u0628\u0631\u0627\u062a\u064a \u0627\u0644\u0645\u0647\u0646\u064a\u0629","description":"\u0623\u0631\u0628\u0639 \u062a\u062c\u0627\u0631\u0628 \u0639\u0645\u0644 \u0641\u0639\u0644\u064a\u0629 \u0623\u0633\u0647\u0645\u062a \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0641\u064a \u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u0648\u0627\u0644\u0625\u062f\u0627\u0631\u0629 \u0648\u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a \u0648\u0627\u0644\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0631\u0642\u0645\u064a\u0629.","items":[{"role":"\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642","company":"\u0641\u0646\u062f\u0642 \u0645\u0646\u0627\u0632\u0644 \u0627\u0644\u0631\u062d\u0645\u0629 \u2014 \u0634\u0631\u0643\u0629 \u0623\u0628\u0631\u0627\u062c \u0627\u0644\u0633\u0639\u0627\u062f\u0629","employmentType":"full-time","startDate":"2025-07-12","endDate":"Present","description":"\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u064a\u0648\u0645\u064a\u0629 \u0627\u0644\u0645\u062a\u0639\u0644\u0642\u0629 \u0628\u062d\u062c\u0648\u0632\u0627\u062a \u0648\u062a\u0633\u0643\u064a\u0646 \u0648\u0645\u063a\u0627\u062f\u0631\u0629 \u0627\u0644\u0646\u0632\u0644\u0627\u0621 \u0648\u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0627\u062a \u0641\u064a \u0641\u0646\u062f\u0642 \u064a\u0636\u0645 160 \u063a\u0631\u0641\u0629\u060c \u0648\u0625\u0639\u062f\u0627\u062f \u062c\u062f\u0627\u0648\u0644 \u0627\u0644\u062d\u062c\u0648\u0632\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Excel\u060c \u0648\u0625\u0635\u062f\u0627\u0631 \u0627\u0644\u0633\u0646\u062f\u0627\u062a \u0648\u0623\u0631\u0634\u0641\u062a\u0647\u0627\u060c \u0648\u062a\u062c\u0647\u064a\u0632 \u0645\u0633\u062a\u0646\u062f\u0627\u062a Word\u060c \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u062c\u0648\u062f\u0629 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0648\u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0637\u0627\u062a \u0627\u0644\u0635\u062d\u064a\u0629."},{"role":"\u0645\u0646\u062f\u0648\u0628 \u0645\u0628\u064a\u0639\u0627\u062a \u0634\u0631\u0627\u0626\u062d \u0627\u062a\u0635\u0627\u0644\u0627\u062a","company":"\u0645\u0624\u0633\u0633\u0629 \u0633\u062d\u0627\u0628\u0629 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0644\u0644\u0627\u062a\u0635\u0627\u0644\u0627\u062a \u2014 \u0645\u0634\u0631\u0648\u0639 \u0632\u064a\u0646","employmentType":"seasonal","startDate":"2025-04-16","endDate":"2025-05-16","description":"\u062a\u0633\u0648\u064a\u0642 \u0648\u062a\u0641\u0639\u064a\u0644 \u0634\u0631\u0627\u0626\u062d \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0644\u0644\u0632\u0648\u0627\u0631 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0631\u0642\u0645\u064a\u0629 \u0648\u0642\u0627\u0631\u0626\u0627\u062a \u0627\u0644\u0628\u0635\u0645\u0629\u060c \u0648\u0625\u062f\u062e\u0627\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u062a\u0648\u062b\u064a\u0642 \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a. \u062a\u062d\u0642\u064a\u0642 \u0643\u0627\u0645\u0644 \u0627\u0644\u0645\u0633\u062a\u0647\u062f\u0641 \u0627\u0644\u0634\u0647\u0631\u064a \u062e\u0644\u0627\u0644 24 \u064a\u0648\u0645\u064b\u0627\u060c \u0645\u0639 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 40 \u0639\u0645\u0644\u064a\u0629 \u062a\u0641\u0639\u064a\u0644 \u064a\u0648\u0645\u064a\u064b\u0627 \u0641\u064a \u0641\u062a\u0631\u0627\u062a \u0627\u0644\u0630\u0631\u0648\u0629."},{"role":"\u0645\u0635\u0646\u0641 \u0623\u0637\u0639\u0645\u0629 \u0648\u0645\u0634\u0631\u0648\u0628\u0627\u062a (\u0643\u0627\u0634\u064a\u0631)","company":"\u0645\u0637\u0639\u0645 \u0627\u0644\u062a\u062d\u0644\u064a\u0629 \u0644\u0644\u0648\u062c\u0628\u0627\u062a \u0627\u0644\u0633\u0631\u064a\u0639\u0629","employmentType":"full-time","startDate":"2024-01-27","endDate":"2024-04-21","description":"\u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0648\u0645\u0639\u0627\u0644\u062c\u062a\u0647\u0627 \u0639\u0628\u0631 \u0646\u0638\u0627\u0645 \u0646\u0642\u0627\u0637 \u0627\u0644\u0628\u064a\u0639 \u0648\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0648\u0635\u064a\u0644\u060c \u0648\u062a\u062d\u0635\u064a\u0644 \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a \u0648\u0645\u0637\u0627\u0628\u0642\u0629 \u0627\u0644\u0625\u064a\u0631\u0627\u062f\u0627\u062a\u060c \u0648\u0627\u0644\u062a\u0646\u0633\u064a\u0642 \u0645\u0639 \u0641\u0631\u064a\u0642 \u0627\u0644\u0639\u0645\u0644 \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u062c\u0648\u062f\u0629 \u062a\u062c\u0647\u064a\u0632 \u0627\u0644\u0637\u0644\u0628\u0627\u062a.","documentType":"experience","document":"/documents/experience/altahlia-cashier.png"},{"role":"\u0645\u0648\u0638\u0641 \u0635\u0646\u062f\u0648\u0642 \u0645\u062d\u0627\u0633\u0628\u0629 (\u0643\u0627\u0634\u064a\u0631)","company":"\u0639\u0635\u0627\u0626\u0631 \u0641\u0631\u0627\u0648\u0644\u062a\u064a","employmentType":"full-time","startDate":"2022-05-16","endDate":"2022-08-01","description":"\u0625\u062f\u0627\u0631\u0629 \u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u0625\u0635\u062f\u0627\u0631 \u0627\u0644\u0641\u0648\u0627\u062a\u064a\u0631 \u0648\u062a\u062d\u0635\u064a\u0644 \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a \u0627\u0644\u0646\u0642\u062f\u064a\u0629 \u0648\u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629\u060c \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u0637\u0644\u0628\u0627\u062a \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0648\u0635\u064a\u0644 \u0648\u0627\u0644\u062a\u0646\u0633\u064a\u0642 \u0645\u0639 \u0641\u0631\u064a\u0642 \u0627\u0644\u0639\u0645\u0644\u060c \u0648\u0625\u062c\u0631\u0627\u0621 \u0645\u0637\u0627\u0628\u0642\u0629 \u0627\u0644\u0625\u064a\u0631\u0627\u062f\u0627\u062a \u0627\u0644\u064a\u0648\u0645\u064a\u0629.","documentType":"experience","document":"/documents/experience/frawlaty-cashier.png"}]},"certificates":{"title":"\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0648\u0627\u0644\u062f\u0648\u0631\u0627\u062a \u0627\u0644\u062a\u062f\u0631\u064a\u0628\u064a\u0629","description":"\u0634\u0647\u0627\u062f\u0627\u062a \u0648\u062f\u0648\u0631\u0627\u062a \u062a\u062f\u0631\u064a\u0628\u064a\u0629 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0648\u0627\u0644\u0623\u0645\u0646 \u0627\u0644\u0633\u064a\u0628\u0631\u0627\u0646\u064a \u0648\u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629 \u0648\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629\u060c \u0645\u0631\u062a\u0628\u0629 \u0645\u0646 \u0627\u0644\u0623\u062d\u062f\u062b \u0625\u0644\u0649 \u0627\u0644\u0623\u0642\u062f\u0645.","items":[{"name":"\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629 \u0641\u064a \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629","provider":"\u0645\u0639\u0647\u062f \u0645\u0633\u062a\u0642\u0628\u0644\u0646\u0627 \u0644\u0644\u062a\u062f\u0631\u064a\u0628","date":"2026-10-05","hours":"40 \u0633\u0627\u0639\u0629 \u062a\u062f\u0631\u064a\u0628\u064a\u0629 \u2014 10 \u0623\u064a\u0627\u0645","documentType":"certificate","document":"/documents/courses/hr-management-basics.png"},{"name":"\u0645\u0642\u062f\u0645\u0629 \u0641\u064a \u0627\u0644\u0623\u0645\u0646 \u0627\u0644\u0633\u064a\u0628\u0631\u0627\u0646\u064a","provider":"\u0645\u0639\u0647\u062f \u0645\u0633\u062a\u0642\u0628\u0644\u0646\u0627 \u0644\u0644\u062a\u062f\u0631\u064a\u0628","date":"2026-10-03","hours":"50 \u0633\u0627\u0639\u0629 \u062a\u062f\u0631\u064a\u0628\u064a\u0629 \u2014 10 \u0623\u064a\u0627\u0645","documentType":"certificate","document":"/documents/courses/cybersecurity-introduction.png"},{"name":"\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0646\u0627\u0639\u0645\u0629 \u0648\u0641\u0646 \u0627\u0644\u0627\u062a\u0635\u0627\u0644","provider":"\u0635\u0646\u062f\u0648\u0642 \u062a\u0646\u0645\u064a\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629 (\u0647\u062f\u0641)","date":"2026-05-05","hours":"\u0633\u0627\u0639\u0629 \u062a\u062f\u0631\u064a\u0628\u064a\u0629 \u0648\u0627\u062d\u062f\u0629","documentType":"certificate","document":"/documents/courses/soft-skills-communication.png"},{"name":"\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645","provider":"\u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u062d\u0633\u0648\u0628","date":"2026-03-27","documentType":"completion","document":"/documents/courses/hsoub-frontend.png"},{"name":"\u0627\u0644\u062a\u0639\u0631\u064a\u0641 \u0628\u0628\u0631\u0627\u0645\u062c \u0635\u0646\u062f\u0648\u0642 \u062a\u0646\u0645\u064a\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629","provider":"\u0635\u0646\u062f\u0648\u0642 \u062a\u0646\u0645\u064a\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629 (\u0647\u062f\u0641)","date":"2023-07-05","documentType":"certificate","document":"/documents/courses/hr-fund-programs.png"},{"name":"\u0627\u0644\u062a\u0633\u0627\u0645\u062d \u0648\u0627\u0644\u062a\u0639\u0627\u064a\u0634 \u0648\u0627\u0644\u0644\u062d\u0645\u0629 \u0627\u0644\u0648\u0637\u0646\u064a\u0629","provider":"\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0644\u0643 \u0639\u0628\u062f\u0627\u0644\u0639\u0632\u064a\u0632 \u0644\u0644\u062d\u0648\u0627\u0631 \u0627\u0644\u0648\u0637\u0646\u064a \u2014 \u0641\u0631\u0639 \u0646\u062c\u0631\u0627\u0646","date":"2023-05-14","documentType":"certificate","document":"/documents/courses/tolerance-coexistence.png"},{"name":"\u0627\u0644\u0645\u0631\u0648\u0646\u0629 \u0627\u0644\u0646\u0641\u0633\u064a\u0629","provider":"\u062c\u0645\u0639\u064a\u0629 \u0627\u0628\u0646 \u0628\u0627\u0632 \u0644\u0644\u062a\u0646\u0645\u064a\u0629 \u0627\u0644\u0623\u0633\u0631\u064a\u0629","date":"2023-03-23","documentType":"certificate","document":"/documents/courses/psychological-resilience.png"},{"name":"\u0623\u062e\u0644\u0627\u0642\u064a\u0627\u062a \u0627\u0644\u0639\u0645\u0644","provider":"\u0645\u0631\u0643\u0632 \u0637\u0627\u0642\u0627\u062a","date":"2022-09-13","documentType":"certificate","document":"/documents/courses/work-ethics.png"},{"name":"\u062e\u062f\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621","provider":"\u0645\u0631\u0643\u0632 \u0637\u0627\u0642\u0627\u062a","date":"2022-09-08","documentType":"certificate","document":"/documents/courses/customer-service.png"}]},"skills":{"title":"\u0645\u0647\u0627\u0631\u0627\u062a\u064a","description":"\u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0648\u0627\u0644\u0645\u0643\u062a\u0628\u064a\u0629 \u0648\u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0627\u0644\u062a\u064a \u0627\u0643\u062a\u0633\u0628\u062a\u0647\u0627 \u0645\u0646 \u0627\u0644\u062f\u0631\u0627\u0633\u0629 \u0648\u0627\u0644\u062f\u0648\u0631\u0627\u062a \u0627\u0644\u062a\u062f\u0631\u064a\u0628\u064a\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0627\u0644\u062e\u0628\u0631\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0627\u062a \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u0629.","groups":[{"title":"\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0648\u064a\u0628","items":[{"name":"HTML5","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645"]},{"name":"CSS3","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645"]},{"name":"JavaScript","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645"]},{"name":"React.js","sources":["\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645","\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]},{"name":"Sass","sources":["\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645","\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]},{"name":"Bootstrap","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645"]},{"name":"Tailwind CSS","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644"]}]},{"title":"\u0627\u0644\u062e\u0648\u0627\u062f\u0645 \u0648\u0642\u0648\u0627\u0639\u062f \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a","items":[{"name":"PHP","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644"]},{"name":"MySQL","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644"]},{"name":"XAMPP","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644"]},{"name":"REST API","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644"]}]},{"title":"\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u0644\u0645\u0646\u0635\u0627\u062a","items":[{"name":"Git","sources":["\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645","\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]},{"name":"GitHub","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645","\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]},{"name":"WordPress","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644"]},{"name":"CMS","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644"]}]},{"title":"\u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0648\u0627\u0644\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0631\u0642\u0645\u064a\u0629","items":[{"name":"Figma","sources":["\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]},{"name":"Adobe Photoshop","sources":["\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]},{"name":"Canva","sources":["\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]},{"name":"\u0623\u0646\u0638\u0645\u0629 \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u062d\u062a\u0648\u0649","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644"]},{"name":"\u0627\u0644\u0645\u0646\u0635\u0627\u062a \u0627\u0644\u0631\u0642\u0645\u064a\u0629","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629","\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642","\u0645\u0646\u062f\u0648\u0628 \u0645\u0628\u064a\u0639\u0627\u062a \u0634\u0631\u0627\u0626\u062d \u0627\u062a\u0635\u0627\u0644\u0627\u062a","\u0645\u0635\u0646\u0641 \u0623\u0637\u0639\u0645\u0629 \u0648\u0645\u0634\u0631\u0648\u0628\u0627\u062a (\u0643\u0627\u0634\u064a\u0631)","\u0645\u0648\u0638\u0641 \u0635\u0646\u062f\u0648\u0642 \u0645\u062d\u0627\u0633\u0628\u0629 (\u0643\u0627\u0634\u064a\u0631)"]}]},{"title":"\u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u0643\u062a\u0628\u064a\u0629 \u0648\u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629","items":[{"name":"Microsoft Word","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629","\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642"]},{"name":"Microsoft Excel","sources":["\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642"]},{"name":"Microsoft PowerPoint","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]},{"name":"\u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a","sources":["\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642","\u0645\u0646\u062f\u0648\u0628 \u0645\u0628\u064a\u0639\u0627\u062a \u0634\u0631\u0627\u0626\u062d \u0627\u062a\u0635\u0627\u0644\u0627\u062a"]},{"name":"\u0625\u0639\u062f\u0627\u062f \u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629","\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642"]},{"name":"\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0648\u062b\u0627\u0626\u0642 \u0648\u0627\u0644\u0623\u0631\u0634\u0641\u0629","sources":["\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642"]},{"name":"\u0623\u0646\u0638\u0645\u0629 \u0646\u0642\u0627\u0637 \u0627\u0644\u0628\u064a\u0639","sources":["\u0645\u0635\u0646\u0641 \u0623\u0637\u0639\u0645\u0629 \u0648\u0645\u0634\u0631\u0648\u0628\u0627\u062a (\u0643\u0627\u0634\u064a\u0631)","\u0645\u0648\u0638\u0641 \u0635\u0646\u062f\u0648\u0642 \u0645\u062d\u0627\u0633\u0628\u0629 (\u0643\u0627\u0634\u064a\u0631)"]}]},{"title":"\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a","items":[{"name":"ChatGPT","sources":["\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]},{"name":"Google Gemini","sources":["\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]},{"name":"Claude","sources":["\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]},{"name":"DeepSeek","sources":["\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"]}]},{"title":"\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0627\u0644\u0634\u062e\u0635\u064a\u0629","items":[{"name":"\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0648\u0642\u062a","sources":["\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642","\u0645\u0646\u062f\u0648\u0628 \u0645\u0628\u064a\u0639\u0627\u062a \u0634\u0631\u0627\u0626\u062d \u0627\u062a\u0635\u0627\u0644\u0627\u062a","\u0645\u0635\u0646\u0641 \u0623\u0637\u0639\u0645\u0629 \u0648\u0645\u0634\u0631\u0648\u0628\u0627\u062a (\u0643\u0627\u0634\u064a\u0631)","\u0645\u0648\u0638\u0641 \u0635\u0646\u062f\u0648\u0642 \u0645\u062d\u0627\u0633\u0628\u0629 (\u0643\u0627\u0634\u064a\u0631)"]},{"name":"\u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0641\u0639\u0627\u0644","sources":["\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0646\u0627\u0639\u0645\u0629 \u0648\u0641\u0646 \u0627\u0644\u0627\u062a\u0635\u0627\u0644","\u0627\u0644\u0645\u0628\u0627\u0631\u064a\u0627\u062a \u0627\u0644\u062d\u0648\u0627\u0631\u064a\u0629 \u0639\u0644\u0649 \u0645\u0633\u062a\u0648\u0649 \u062a\u0639\u0644\u064a\u0645 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629","\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642","\u0645\u0646\u062f\u0648\u0628 \u0645\u0628\u064a\u0639\u0627\u062a \u0634\u0631\u0627\u0626\u062d \u0627\u062a\u0635\u0627\u0644\u0627\u062a","\u0645\u0635\u0646\u0641 \u0623\u0637\u0639\u0645\u0629 \u0648\u0645\u0634\u0631\u0648\u0628\u0627\u062a (\u0643\u0627\u0634\u064a\u0631)","\u0645\u0648\u0638\u0641 \u0635\u0646\u062f\u0648\u0642 \u0645\u062d\u0627\u0633\u0628\u0629 (\u0643\u0627\u0634\u064a\u0631)"]},{"name":"\u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u062c\u0645\u0627\u0639\u064a","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642","\u0645\u0646\u062f\u0648\u0628 \u0645\u0628\u064a\u0639\u0627\u062a \u0634\u0631\u0627\u0626\u062d \u0627\u062a\u0635\u0627\u0644\u0627\u062a","\u0645\u0635\u0646\u0641 \u0623\u0637\u0639\u0645\u0629 \u0648\u0645\u0634\u0631\u0648\u0628\u0627\u062a (\u0643\u0627\u0634\u064a\u0631)","\u0645\u0648\u0638\u0641 \u0635\u0646\u062f\u0648\u0642 \u0645\u062d\u0627\u0633\u0628\u0629 (\u0643\u0627\u0634\u064a\u0631)","\u0645\u0628\u0627\u062f\u0631\u0629 \u0639\u0648\u0646 \u0627\u0644\u062a\u0642\u0646\u064a \u0628\u0627\u0644\u0645\u0633\u062c\u062f \u0627\u0644\u0646\u0628\u0648\u064a \u0627\u0644\u0634\u0631\u064a\u0641","\u0645\u0639\u0633\u0643\u0631 \u0631\u0633\u0644 \u0627\u0644\u0633\u0644\u0627\u0645 \u0644\u0644\u062a\u0645\u064a\u0632 \u0627\u0644\u0643\u0634\u0641\u064a \u0648\u0627\u0644\u062a\u0642\u0646\u064a 2023"]},{"name":"\u062d\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062a","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642","\u0645\u0639\u0633\u0643\u0631 \u0631\u0633\u0644 \u0627\u0644\u0633\u0644\u0627\u0645 \u0644\u0644\u062a\u0645\u064a\u0632 \u0627\u0644\u0643\u0634\u0641\u064a \u0648\u0627\u0644\u062a\u0642\u0646\u064a 2023"]},{"name":"\u0627\u0644\u062f\u0642\u0629 \u0648\u0627\u0644\u0627\u0646\u062a\u0628\u0627\u0647 \u0644\u0644\u062a\u0641\u0627\u0635\u064a\u0644","sources":["\u062f\u0628\u0644\u0648\u0645 \u0645\u062a\u0648\u0633\u0637 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644","\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642","\u0645\u0646\u062f\u0648\u0628 \u0645\u0628\u064a\u0639\u0627\u062a \u0634\u0631\u0627\u0626\u062d \u0627\u062a\u0635\u0627\u0644\u0627\u062a","\u0645\u0635\u0646\u0641 \u0623\u0637\u0639\u0645\u0629 \u0648\u0645\u0634\u0631\u0648\u0628\u0627\u062a (\u0643\u0627\u0634\u064a\u0631)","\u0645\u0648\u0638\u0641 \u0635\u0646\u062f\u0648\u0642 \u0645\u062d\u0627\u0633\u0628\u0629 (\u0643\u0627\u0634\u064a\u0631)"]},{"name":"\u0627\u0644\u062a\u0643\u064a\u0641 \u0645\u0639 \u0636\u063a\u0648\u0637 \u0627\u0644\u0639\u0645\u0644","sources":["\u0627\u0644\u0645\u0631\u0648\u0646\u0629 \u0627\u0644\u0646\u0641\u0633\u064a\u0629","\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642","\u0645\u0646\u062f\u0648\u0628 \u0645\u0628\u064a\u0639\u0627\u062a \u0634\u0631\u0627\u0626\u062d \u0627\u062a\u0635\u0627\u0644\u0627\u062a","\u0645\u0635\u0646\u0641 \u0623\u0637\u0639\u0645\u0629 \u0648\u0645\u0634\u0631\u0648\u0628\u0627\u062a (\u0643\u0627\u0634\u064a\u0631)","\u0645\u0648\u0638\u0641 \u0635\u0646\u062f\u0648\u0642 \u0645\u062d\u0627\u0633\u0628\u0629 (\u0643\u0627\u0634\u064a\u0631)"]},{"name":"\u062a\u062d\u0645\u0644 \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064a\u0629","sources":["\u0645\u0648\u0638\u0641 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0646\u062f\u0642","\u0645\u0639\u0633\u0643\u0631 \u0631\u0633\u0644 \u0627\u0644\u0633\u0644\u0627\u0645 \u0644\u0644\u062a\u0645\u064a\u0632 \u0627\u0644\u0643\u0634\u0641\u064a \u0648\u0627\u0644\u062a\u0642\u0646\u064a 2023"]}]}]},"volunteering":{"title":"\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0627\u062a \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u0629","description":"\u0645\u0634\u0627\u0631\u0643\u0627\u062a \u0645\u062c\u062a\u0645\u0639\u064a\u0629 \u0648\u062a\u0642\u0646\u064a\u0629 \u0648\u0643\u0634\u0641\u064a\u0629\u060c \u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0633\u062c\u0644 \u0645\u0648\u062b\u0642 \u0628\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u0629.","summary":{"label":"\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u0629 \u0627\u0644\u0645\u0648\u062b\u0642\u0629","value":"189 \u0633\u0627\u0639\u0629","hours":189,"opportunities":14,"startDate":"2022-12-17","endDate":"2023-06-05","description":"\u0625\u062c\u0645\u0627\u0644\u064a 189 \u0633\u0627\u0639\u0629 \u062a\u0637\u0648\u0639\u064a\u0629 \u0645\u0648\u062b\u0642\u0629 \u0639\u0628\u0631 14 \u0641\u0631\u0635\u0629 \u062a\u0637\u0648\u0639\u064a\u0629 \u0645\u0643\u062a\u0645\u0644\u0629 \u0641\u064a \u0627\u0644\u0645\u0646\u0635\u0629 \u0627\u0644\u0648\u0637\u0646\u064a\u0629 \u0644\u0644\u0639\u0645\u0644 \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u060c \u062e\u0644\u0627\u0644 \u0627\u0644\u0641\u062a\u0631\u0629 \u0645\u0646 17/12/2022 \u0625\u0644\u0649 05/06/2023.","documentType":"volunteering","document":"/documents/volunteering/volunteering-189-hours.png"},"items":[{"name":"\u0645\u0639\u0633\u0643\u0631 \u0631\u0633\u0644 \u0627\u0644\u0633\u0644\u0627\u0645 \u0644\u0644\u062a\u0645\u064a\u0632 \u0627\u0644\u0643\u0634\u0641\u064a \u0648\u0627\u0644\u062a\u0642\u0646\u064a 2023","provider":"\u0627\u0644\u0643\u0644\u064a\u0629 \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0628\u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629 \u2014 \u0646\u062c\u0631\u0627\u0646","startDate":"2023-05-14","endDate":"2023-05-18","description":"\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0641\u064a \u0627\u0644\u0645\u0639\u0633\u0643\u0631 \u0627\u0644\u0643\u0634\u0641\u064a \u0648\u0627\u0644\u062a\u0642\u0646\u064a \u0648\u0623\u0646\u0634\u0637\u062a\u0647 \u0648\u0628\u0631\u0627\u0645\u062c\u0647.","documentType":"participation","document":"/documents/volunteering/rusul-alsalam-camp.png"},{"name":"\u0645\u0628\u0627\u062f\u0631\u0629 \u0639\u0648\u0646 \u0627\u0644\u062a\u0642\u0646\u064a \u0628\u0627\u0644\u0645\u0633\u062c\u062f \u0627\u0644\u0646\u0628\u0648\u064a \u0627\u0644\u0634\u0631\u064a\u0641","provider":"\u0627\u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u0644\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u062a\u0642\u0646\u064a \u0648\u0627\u0644\u0645\u0647\u0646\u064a \u0628\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629","startDate":"2023-03-26","endDate":"2023-04-06","description":"\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0641\u064a \u0627\u0644\u0645\u0628\u0627\u062f\u0631\u0629 \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0648\u062e\u062f\u0645\u0629 \u0632\u0648\u0627\u0631 \u0627\u0644\u0645\u0633\u062c\u062f \u0627\u0644\u0646\u0628\u0648\u064a \u0627\u0644\u0634\u0631\u064a\u0641.","documentType":"appreciation","document":"/documents/volunteering/technical-aoun.png"},{"name":"\u0627\u0644\u0645\u0628\u0627\u0631\u064a\u0627\u062a \u0627\u0644\u062d\u0648\u0627\u0631\u064a\u0629 \u0639\u0644\u0649 \u0645\u0633\u062a\u0648\u0649 \u062a\u0639\u0644\u064a\u0645 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629","provider":"\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0644\u0643 \u0639\u0628\u062f\u0627\u0644\u0639\u0632\u064a\u0632 \u0644\u0644\u062d\u0648\u0627\u0631 \u0627\u0644\u0648\u0637\u0646\u064a \u2014 \u0625\u062f\u0627\u0631\u0629 \u062a\u0639\u0644\u064a\u0645 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629","startDate":"2021-10-24","endDate":"2021-11-04","description":"\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0641\u064a \u0627\u0644\u0623\u0646\u0634\u0637\u0629 \u0648\u0627\u0644\u0645\u0633\u0627\u0628\u0642\u0627\u062a \u0627\u0644\u062d\u0648\u0627\u0631\u064a\u0629 \u0648\u062a\u0646\u0645\u064a\u0629 \u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0648\u0627\u0644\u062d\u0648\u0627\u0631.","documentType":"appreciation","document":"/documents/volunteering/dialogue-competition.png"}]},"goal":{"title":"\u062a\u0637\u0644\u0639\u0627\u062a\u064a \u0627\u0644\u0645\u0647\u0646\u064a\u0629","description":"\u0623\u0633\u0639\u0649 \u0625\u0644\u0649 \u0641\u0631\u0635\u0629 \u0645\u0647\u0646\u064a\u0629 \u0645\u0633\u062a\u0642\u0631\u0629 \u0648\u0645\u0633\u062a\u062f\u0627\u0645\u0629 \u0641\u064a \u0645\u062c\u0627\u0644 \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0623\u0648 \u0627\u0644\u062f\u0639\u0645 \u0627\u0644\u062a\u0642\u0646\u064a \u0623\u0648 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0631\u0642\u0645\u064a\u0629 \u0648\u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629\u060c \u0623\u0633\u062a\u062b\u0645\u0631 \u0641\u064a\u0647\u0627 \u0645\u0639\u0631\u0641\u062a\u064a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0648\u062e\u0628\u0631\u0627\u062a\u064a \u0627\u0644\u0639\u0645\u0644\u064a\u0629\u060c \u0648\u0623\u0633\u0627\u0647\u0645 \u0641\u064a \u062a\u062d\u0633\u064a\u0646 \u0643\u0641\u0627\u0621\u0629 \u0627\u0644\u0639\u0645\u0644 \u0648\u0627\u0644\u0625\u0646\u062a\u0627\u062c\u064a\u0629 \u0645\u0639 \u0645\u0648\u0627\u0635\u0644\u0629 \u0627\u0644\u062a\u0639\u0644\u0645 \u0648\u0627\u0644\u062a\u0637\u0648\u0631 \u0627\u0644\u0645\u0647\u0646\u064a."}},"title":"\u0639\u0646\u064a","description":"\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0645\u0624\u0647\u0644\u0627\u062a\u064a \u0627\u0644\u0639\u0644\u0645\u064a\u0629 \u0648\u062e\u0628\u0631\u0627\u062a\u064a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0634\u0647\u0627\u062f\u0627\u062a\u064a \u0648\u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0648\u0645\u0634\u0627\u0631\u0643\u0627\u062a\u064a \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u0629.","breadcrumb":{"title":"\u0639\u0646\u064a","description":"\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0645\u0624\u0647\u0644\u0627\u062a\u064a \u0627\u0644\u0639\u0644\u0645\u064a\u0629 \u0648\u062e\u0628\u0631\u0627\u062a\u064a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0634\u0647\u0627\u062f\u0627\u062a\u064a \u0648\u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0648\u0645\u0634\u0627\u0631\u0643\u0627\u062a\u064a \u0627\u0644\u062a\u0637\u0648\u0639\u064a\u0629."},"documentPreview":{"loading":"\u064a\u0631\u062c\u0649 \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631 \u0642\u0644\u064a\u0644\u064b\u0627\u060c \u062c\u0627\u0631\u064d \u062a\u062c\u0647\u064a\u0632 \u0627\u0644\u0634\u0647\u0627\u062f\u0629 \u0644\u0644\u0639\u0631\u0636...","error":"\u062a\u0639\u0630\u0631 \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0634\u0647\u0627\u062f\u0629. \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649.","unavailable":"\u0631\u0627\u0628\u0637 \u0627\u0644\u0648\u062b\u064a\u0642\u0629 \u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631.","unsupported":"\u0644\u0627 \u064a\u0645\u0643\u0646 \u0645\u0639\u0627\u064a\u0646\u0629 \u0647\u0630\u0647 \u0627\u0644\u0635\u064a\u063a\u0629 \u062f\u0627\u062e\u0644 \u0627\u0644\u0635\u0641\u062d\u0629."},"aiSkills":{"title":"\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a","tools":{"chatgpt":{"name":"ChatGPT","usage":"\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0641\u064a \u0627\u0644\u0628\u0631\u0645\u062c\u0629\u060c \u0648\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062a\u060c \u0648\u0627\u0644\u0628\u062d\u062b\u060c \u0648\u0635\u064a\u0627\u063a\u0629 \u0627\u0644\u0645\u062d\u062a\u0648\u0649."},"gemini":{"name":"Google Gemini","usage":"\u0627\u0644\u0628\u062d\u062b \u0648\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a\u060c \u0648\u062a\u0648\u0644\u064a\u062f \u0627\u0644\u0623\u0641\u0643\u0627\u0631\u060c \u0648\u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629 \u0641\u064a \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u062a\u0642\u0646\u064a\u0629."},"claude":{"name":"Claude","usage":"\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0646\u0635\u0648\u0635 \u0648\u0627\u0644\u0645\u0633\u062a\u0646\u062f\u0627\u062a\u060c \u0648\u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629 \u0641\u064a \u0627\u0644\u0628\u0631\u0645\u062c\u0629 \u0648\u0627\u0644\u0643\u062a\u0627\u0628\u0629."},"deepseek":{"name":"DeepSeek","usage":"\u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629 \u0641\u064a \u0643\u062a\u0627\u0628\u0629 \u0627\u0644\u0623\u0643\u0648\u0627\u062f\u060c \u0648\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0623\u062e\u0637\u0627\u0621\u060c \u0648\u062d\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062a \u0627\u0644\u0628\u0631\u0645\u062c\u064a\u0629."}}}}'),Rp=JSON.parse('{"pageTitle":"\u0645\u0634\u0627\u0631\u064a\u0639\u064a","pageDesc":"\u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u062a\u064a \u0639\u0645\u0644\u062a \u0639\u0644\u0649 \u062a\u0637\u0648\u064a\u0631\u0647\u0627\u060c \u0648\u062a\u0648\u0636\u062d \u0645\u0647\u0627\u0631\u0627\u062a\u064a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0648\u062e\u0628\u0631\u062a\u064a \u0641\u064a \u062a\u0635\u0645\u064a\u0645 \u0648\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0627\u062a \u0648\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0648\u064a\u0628.","details":{"overview":"\u0646\u0628\u0630\u0629 \u0639\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0639","features":"\u0645\u0645\u064a\u0632\u0627\u062a \u0627\u0644\u0645\u0634\u0631\u0648\u0639","technologies":"\u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0629","gallery":"\u0635\u0648\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639","date":"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0625\u0646\u062c\u0627\u0632","liveDemo":"\u0645\u0639\u0627\u064a\u0646\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639","sourceCode":"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u0645\u0635\u062f\u0631\u064a","backToProjects":"\u0627\u0644\u0639\u0648\u062f\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639","notFound":"\u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u063a\u064a\u0631 \u0645\u0648\u062c\u0648\u062f","notFoundDescription":"\u0644\u0645 \u0646\u062a\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0627\u0644\u0645\u0637\u0644\u0648\u0628."},"items":[{"id":"React-To-Do-List","title":"\u062a\u0637\u0628\u064a\u0642 \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React","date":"2026/08/30","shortDescription":"\u062a\u0637\u0628\u064a\u0642 \u062a\u0641\u0627\u0639\u0644\u064a \u0644\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0648\u062a\u0639\u062f\u064a\u0644\u0647\u0627 \u0648\u062d\u0630\u0641\u0647\u0627 \u0648\u062d\u0641\u0638\u0647\u0627 \u0645\u062d\u0644\u064a\u064b\u0627.","overview":"\u062a\u0637\u0628\u064a\u0642 \u0648\u064a\u0628 \u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React \u0648LocalStorage. \u064a\u062a\u064a\u062d \u0644\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0648\u0639\u0631\u0636\u0647\u0627 \u0648\u062a\u0639\u062f\u064a\u0644\u0647\u0627 \u0648\u062d\u0630\u0641\u0647\u0627 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0648\u0627\u062c\u0647\u0629 \u062a\u0641\u0627\u0639\u0644\u064a\u0629\u060c \u0645\u0639 \u062d\u0641\u0638 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u062f\u0627\u062e\u0644 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0648\u0646 \u0627\u0644\u062d\u0627\u062c\u0629 \u0625\u0644\u0649 \u062e\u0627\u062f\u0645 \u062e\u0627\u0631\u062c\u064a. \u0637\u064f\u0648\u0651\u0631 \u0636\u0645\u0646 \u062f\u0648\u0631\u0629 \u062a\u0637\u0648\u064a\u0631 \u062a\u0637\u0628\u064a\u0642\u0627\u062a JavaScript \u0641\u064a \u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u062d\u0633\u0648\u0628.","features":["\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u062c\u062f\u064a\u062f\u0629","\u0639\u0631\u0636 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0648\u0638\u0629","\u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u0645\u0648\u062c\u0648\u062f\u0629","\u062d\u0630\u0641 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a","\u062d\u0641\u0638 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0645\u062d\u0644\u064a\u064b\u0627 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 LocalStorage","\u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0648\u0627\u062c\u0647\u0629 \u062a\u0641\u0627\u0639\u0644\u064a\u064b\u0627 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React"],"tech_stack":["React","React Hooks","JavaScript","CRUD","LocalStorage"],"project_img":["react1"],"demo":"https://dhomlmgyr188.github.io/React-To-Do-List/","github":"https://github.com/dhomlmgyr188/React-To-Do-List"},{"id":"Portfolio_v1","title":"\u0645\u0648\u0642\u0639 \u0634\u062e\u0635\u064a - \u0627\u0644\u0625\u0635\u062f\u0627\u0631 \u0627\u0644\u0633\u0627\u0628\u0642","date":"2026/05/24","shortDescription":"\u0645\u0648\u0642\u0639 \u0634\u062e\u0635\u064a \u0645\u062a\u062c\u0627\u0648\u0628 \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a.","overview":"\u0645\u0648\u0642\u0639 \u0634\u062e\u0635\u064a \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0635\u064f\u0645\u0645 \u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a\u060c \u0645\u0639 \u0627\u0644\u062a\u0631\u0643\u064a\u0632 \u0639\u0644\u0649 \u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u062a\u0646\u0642\u0644 \u0648\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0648\u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0639\u0628\u0631 \u0627\u0644\u0623\u062c\u0647\u0632\u0629 \u0627\u0644\u0645\u062e\u062a\u0644\u0641\u0629.","features":["\u062a\u0635\u0645\u064a\u0645 \u0645\u062a\u062c\u0627\u0648\u0628 \u0645\u0639 \u0645\u062e\u062a\u0644\u0641 \u0623\u062d\u062c\u0627\u0645 \u0627\u0644\u0634\u0627\u0634\u0627\u062a","\u0635\u0641\u062d\u0627\u062a \u0645\u062a\u0639\u062f\u062f\u0629 \u0644\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0645\u062d\u062a\u0648\u0649","\u0639\u0631\u0636 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639","\u062a\u0646\u0642\u0644 \u0648\u0627\u0636\u062d \u0628\u064a\u0646 \u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u0645\u0648\u0642\u0639","\u0627\u0633\u062a\u062e\u062f\u0627\u0645 JavaScript \u0644\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062a\u0641\u0627\u0639\u0644\u0627\u062a"],"tech_stack":["HTML","CSS","Vanilla JavaScript"],"project_img":["anaalmughyir1"],"demo":"https://dhomlmgyr188.github.io/abdulrahman-portfolio-static/frontend/","github":""}]}'),Dp=JSON.parse('{"logo":{"me":"Abdulrahman"},"nav":{"home":"Home","about":"About","projects":"Projects","contact":"Contact"},"buttons":{"contact":"Contact Me","view_project":"Project Details","demo":"Live Preview","cv":"My Resume","projects":"Discover my projects"},"copyright":"All rights reserved"}'),Ap=JSON.parse('{"hero":{"availability_status":"Open to Career Moves & Freelance Projects","name":"Abdulrahman Al-Mughyir","job_titles":["Software Support Technician","IT Support Technician","Database Support Technician","Computer Systems Technician","Data Entry Clerk","Full-Stack Web Developer","Website Administrator","Website Developer","Receptionist","Cashier"],"introduction":"A Full-Stack Web Development diploma graduate from Taibah University, with technical and administrative skills in website development, IT support, data management, and digital systems. I aim to apply my skills and experience to career opportunities and projects that improve business operations and efficiency.","tech_stack":[{"text":"React","icon":"React"},{"text":"JavaScript","icon":"JavaScript"},{"text":"HTML5","icon":"HTML"},{"text":"CSS3","icon":"CSS"},{"text":"Git","icon":"Git"},{"text":"SQL","icon":"SQL"},{"text":"Microsoft 365","icon":"Microsoft 365"}],"profileAlt":"Abdulrahman Al-Mughyir - Web Development, IT Support, and Data Management in Madinah","statistic":{"projects":"Completed Projects","technologies":"Technologies and Tools Used","years":"Years in Web Development"}},"services":{"title":"My Skills & Services","description":"Technical and administrative skills and services in website development, IT support, and data management to streamline workflows and improve efficiency.","items":[{"id":"1","icon":"web","title":"Website Development & Management","description":"Designing and developing responsive websites and interfaces using HTML, CSS, JavaScript, and React, with a focus on content organization, user experience, and website updates."},{"id":"2","icon":"technology","title":"IT Support & Systems Assistance","description":"Assisting users with computers, software, and applications, troubleshooting basic technical issues, following up on reported problems, and providing appropriate user guidance."},{"id":"3","icon":"applications","title":"Data Management & Office Administration","description":"Entering and reviewing data, organizing files and records, and using Microsoft 365 applications to prepare documents, spreadsheets, and reports, with attention to accuracy and information confidentiality."}]},"featuredProjects":{"header":{"title":"Featured Projects","desc":"Selected work in website and application development, data organization, and user-friendly digital interfaces.","view_projects":"All Projects"},"items":[{"id":"React-To-Do-List","date":"2026/08/30","project_img":["react1"],"title":"React Notes Management App","desc":[{"type":"text","value":"A notes management application built with React and LocalStorage, allowing users to create, view, update, and delete data (CRUD). The project demonstrates my ability to build interactive interfaces and organize data within applications. Developed as part of the "},{"type":"link","text":"JavaScript Application Development course","href":"https://academy.hsoub.com/learn/javascript-application-development/"},{"type":"text","value":" at Hsoub Academy."}],"tech_stack":["React","React Hooks","JavaScript","CRUD","LocalStorage"],"link":"https://dhomlmgyr188.github.io/React-To-Do-List/"},{"id":"Portfolio_v1","date":"2026/05/24","project_img":["anaalmughyir1"],"title":"Personal Portfolio - Previous Version","desc":[{"type":"text","value":"A responsive, multi-page personal portfolio website designed to present professional information, projects, and services. It features well-organized content and a user-friendly interface, reflecting my skills in website development and digital content management."}],"tech_stack":["HTML","CSS","Vanilla JavaScript"],"link":"https://dhomlmgyr188.github.io/abdulrahman-portfolio-static/frontend/"}]},"footer":{"quickLinks":{"title":"Quick Links"},"socialMedia":{"title":"Social Profiles"},"contactInfo":{"title":"Contact Me","location":{"value":"Madinah, Saudi Arabia"},"email":{"title":"Email","value":"dhomlmgyr@gmail.com"},"tel":{"title":"Phone","value":"+966541590819"}},"copyright":"Abdulrahman Al-Mughyir. All rights reserved."},"callToAction":{"title":"Have a Career Opportunity or Project in Mind?","paragraph":"I welcome discussions about suitable career opportunities and freelance projects in technical and administrative fields."}}'),Mp=JSON.parse('{"pageTitle":"About Me","pageDesc":"Explore my education, professional experience, certifications, skills, and volunteer activities.","content":{"intro":{"title":"About Me","paragraph1":"I am Abdulrahman Nasser Al-Mughyir, a graduate with an Intermediate Diploma in Full-Stack Web Development from the Applied College at Taibah University in Medina, Saudi Arabia. I combine knowledge of web development with practical experience in digital systems, data organization, and operational and administrative tasks.","paragraph2":"I have gained practical experience in hotel reception, sales, and point-of-sale operations, alongside developing independent and academic web projects. I am interested in technology, accuracy, information organization, and problem-solving. I aim to continuously develop my skills and contribute to a productive professional environment."},"infoTitle":"Quick Information","profile":[{"label":"Location","value":"Medina, Saudi Arabia"},{"label":"Qualification","value":"Intermediate Diploma"},{"label":"Specialization","value":"Full-Stack Web Development"},{"label":"Languages","value":"Arabic and English"},{"label":"Professional Status","value":"Available for job opportunities and freelance projects"}],"education":{"title":"My Educational Journey","description":"My academic qualifications, educational institutions, specializations, graduation dates, and grades.","gradeLabel":"GPA","items":[{"degree":"Intermediate Diploma in Full-Stack Web Development","school":"Applied College, Taibah University \u2014 Medina","field":"Specialization: Full-Stack Web Development | Grade: Good","date":"2026-01-11","grade":"3.60 / 5","documentType":"diploma","document":"/documents/education/diploma.png"},{"degree":"General Secondary Education Certificate","school":"Abi Sufyan bin Harb Secondary School \u2014 Medina","field":"Track: Natural Sciences | Grade: Very Good","date":"2022-07-30","grade":"85.39 / 100","documentType":"graduation","document":"/documents/education/secondary-school.png"}]},"experience":{"title":"Professional Experience","description":"Four professional roles that helped me develop my skills in operations, administration, sales, and digital systems.","items":[{"role":"Hotel Receptionist","company":"Manazil Al-Rahmah Hotel \u2014 Abraj Al-Saadah Company","employmentType":"full-time","startDate":"2025-07-12","endDate":"Present","description":"Managing daily reservations, check-ins, and check-outs for individual guests and groups at a 160-room hotel. Preparing reservation schedules using Excel, issuing and archiving receipts, preparing Word documents, and monitoring service quality and health compliance requirements."},{"role":"Telecommunications SIM Sales Representative","company":"Sahabat Al-Madinah Telecommunications Establishment \u2014 Zain Project","employmentType":"seasonal","startDate":"2025-04-16","endDate":"2025-05-16","description":"Marketing and activating SIM cards for visitors using digital systems and fingerprint readers, entering customer information, and documenting payments. Achieved the full monthly sales target within 24 days, reaching up to 40 activations per day during peak periods."},{"role":"Food and Beverage Cashier","company":"Al-Tahlia Fast Food Restaurant","employmentType":"full-time","startDate":"2024-01-27","endDate":"2024-04-21","description":"Receiving and processing customer orders through point-of-sale systems and delivery applications, collecting payments, reconciling revenue, coordinating with team members, and monitoring order preparation quality.","documentType":"experience","document":"/documents/experience/altahlia-cashier.png"},{"role":"Cashier","company":"Frawlaty Juices","employmentType":"full-time","startDate":"2022-05-16","endDate":"2022-08-01","description":"Managing customer orders, issuing invoices, collecting cash and electronic payments, handling delivery application orders, coordinating with the team, and reconciling daily revenue.","documentType":"experience","document":"/documents/experience/frawlaty-cashier.png"}]},"certificates":{"title":"Certificates and Training Courses","description":"Certificates and training courses in web development, cybersecurity, human resources, and professional skills, listed from newest to oldest.","items":[{"name":"Fundamentals of Human Resource Management","provider":"Our Future Training Institute","date":"2026-10-05","hours":"40 training hours \u2014 10 days","documentType":"certificate","document":"/documents/courses/hr-management-basics.png"},{"name":"Introduction to Cybersecurity","provider":"Our Future Training Institute","date":"2026-10-03","hours":"50 training hours \u2014 10 days","documentType":"certificate","document":"/documents/courses/cybersecurity-introduction.png"},{"name":"Soft Skills and Effective Communication","provider":"Human Resources Development Fund (HRDF)","date":"2026-05-05","hours":"1 training hour","documentType":"certificate","document":"/documents/courses/soft-skills-communication.png"},{"name":"User Interface Development","provider":"Hsoub Academy","date":"2026-03-27","documentType":"completion","document":"/documents/courses/hsoub-frontend.png"},{"name":"Introduction to Human Resources Development Fund Programs","provider":"Human Resources Development Fund (HRDF)","date":"2023-07-05","documentType":"certificate","document":"/documents/courses/hr-fund-programs.png"},{"name":"Tolerance, Coexistence, and National Unity","provider":"King Abdulaziz Center for National Dialogue \u2014 Najran Branch","date":"2023-05-14","documentType":"certificate","document":"/documents/courses/tolerance-coexistence.png"},{"name":"Psychological Resilience","provider":"Ibn Baz Association for Family Development","date":"2023-03-23","documentType":"certificate","document":"/documents/courses/psychological-resilience.png"},{"name":"Work Ethics","provider":"Taqat Center","date":"2022-09-13","documentType":"certificate","document":"/documents/courses/work-ethics.png"},{"name":"Customer Service","provider":"Taqat Center","date":"2022-09-08","documentType":"certificate","document":"/documents/courses/customer-service.png"}]},"skills":{"title":"My Skills","description":"Technical, office, and professional skills acquired through education, training courses, projects, work experience, and volunteering.","groups":[{"title":"Frontend Web Development","items":[{"name":"HTML5","sources":["Intermediate Diploma in Full-Stack Web Development","User Interface Development"]},{"name":"CSS3","sources":["Intermediate Diploma in Full-Stack Web Development","User Interface Development"]},{"name":"JavaScript","sources":["Intermediate Diploma in Full-Stack Web Development","User Interface Development"]},{"name":"React.js","sources":["User Interface Development","Personal Projects"]},{"name":"Sass","sources":["User Interface Development","Personal Projects"]},{"name":"Bootstrap","sources":["Intermediate Diploma in Full-Stack Web Development","User Interface Development"]},{"name":"Tailwind CSS","sources":["Intermediate Diploma in Full-Stack Web Development"]}]},{"title":"Backend and Databases","items":[{"name":"PHP","sources":["Intermediate Diploma in Full-Stack Web Development"]},{"name":"MySQL","sources":["Intermediate Diploma in Full-Stack Web Development"]},{"name":"XAMPP","sources":["Intermediate Diploma in Full-Stack Web Development"]},{"name":"REST API","sources":["Intermediate Diploma in Full-Stack Web Development"]}]},{"title":"Development Tools and Platforms","items":[{"name":"Git","sources":["User Interface Development","Personal Projects"]},{"name":"GitHub","sources":["Intermediate Diploma in Full-Stack Web Development","User Interface Development","Personal Projects"]},{"name":"WordPress","sources":["Intermediate Diploma in Full-Stack Web Development"]},{"name":"CMS","sources":["Intermediate Diploma in Full-Stack Web Development"]}]},{"title":"Design and Digital Tools","items":[{"name":"Figma","sources":["Personal Projects"]},{"name":"Adobe Photoshop","sources":["Personal Projects"]},{"name":"Canva","sources":["Personal Projects"]},{"name":"Content Management Systems","sources":["Intermediate Diploma in Full-Stack Web Development"]},{"name":"Digital Platforms","sources":["Intermediate Diploma in Full-Stack Web Development","Personal Projects","Hotel Receptionist","Telecommunications SIM Sales Representative","Food and Beverage Cashier","Cashier"]}]},{"title":"Office and Administrative Skills","items":[{"name":"Microsoft Word","sources":["Intermediate Diploma in Full-Stack Web Development","Personal Projects","Hotel Receptionist"]},{"name":"Microsoft Excel","sources":["Hotel Receptionist"]},{"name":"Microsoft PowerPoint","sources":["Intermediate Diploma in Full-Stack Web Development","Personal Projects"]},{"name":"Data Entry","sources":["Hotel Receptionist","Telecommunications SIM Sales Representative"]},{"name":"Report Preparation","sources":["Intermediate Diploma in Full-Stack Web Development","Personal Projects","Hotel Receptionist"]},{"name":"Document Organization and Archiving","sources":["Hotel Receptionist"]},{"name":"Point-of-Sale Systems","sources":["Food and Beverage Cashier","Cashier"]}]},{"title":"Artificial Intelligence Tools","items":[{"name":"ChatGPT","sources":["Personal Projects"]},{"name":"Google Gemini","sources":["Personal Projects"]},{"name":"Claude","sources":["Personal Projects"]},{"name":"DeepSeek","sources":["Personal Projects"]}]},{"title":"Professional and Personal Skills","items":[{"name":"Time Management","sources":["Hotel Receptionist","Telecommunications SIM Sales Representative","Food and Beverage Cashier","Cashier"]},{"name":"Effective Communication","sources":["Soft Skills and Effective Communication","Dialogue Competitions at Medina Education Department","Hotel Receptionist","Telecommunications SIM Sales Representative","Food and Beverage Cashier","Cashier"]},{"name":"Teamwork","sources":["Intermediate Diploma in Full-Stack Web Development","Hotel Receptionist","Telecommunications SIM Sales Representative","Food and Beverage Cashier","Cashier","Technical Aoun Initiative at the Prophet\'s Mosque","Peace Messengers Scouting and Technology Excellence Camp 2023"]},{"name":"Problem-Solving","sources":["Intermediate Diploma in Full-Stack Web Development","Hotel Receptionist","Peace Messengers Scouting and Technology Excellence Camp 2023"]},{"name":"Accuracy and Attention to Detail","sources":["Intermediate Diploma in Full-Stack Web Development","Hotel Receptionist","Telecommunications SIM Sales Representative","Food and Beverage Cashier","Cashier"]},{"name":"Adaptability Under Work Pressure","sources":["Psychological Resilience","Hotel Receptionist","Telecommunications SIM Sales Representative","Food and Beverage Cashier","Cashier"]},{"name":"Responsibility","sources":["Hotel Receptionist","Peace Messengers Scouting and Technology Excellence Camp 2023"]}]}]},"volunteering":{"title":"Volunteer Activities","description":"Community, technical, and scouting activities, along with an officially documented record of volunteer hours.","summary":{"label":"Total Documented Volunteer Hours","value":"189 hours","hours":189,"opportunities":14,"startDate":"2022-12-17","endDate":"2023-06-05","description":"A total of 189 documented volunteer hours across 14 completed volunteer opportunities on the National Volunteer Work Platform, from December 17, 2022, to June 5, 2023.","documentType":"volunteering","document":"/documents/volunteering/volunteering-189-hours.png"},"items":[{"name":"Peace Messengers Scouting and Technology Excellence Camp 2023","provider":"Technical College in Medina \u2014 Najran","startDate":"2023-05-14","endDate":"2023-05-18","description":"Participated in the scouting and technology camp, including its activities and programs.","documentType":"participation","document":"/documents/volunteering/rusul-alsalam-camp.png"},{"name":"Technical Aoun Initiative at the Prophet\'s Mosque","provider":"General Directorate of Technical and Vocational Training \u2014 Medina Region","startDate":"2023-03-26","endDate":"2023-04-06","description":"Participated in a technical volunteer initiative serving visitors to the Prophet\'s Mosque.","documentType":"appreciation","document":"/documents/volunteering/technical-aoun.png"},{"name":"Dialogue Competitions at Medina Education Department","provider":"King Abdulaziz Center for National Dialogue \u2014 Medina Education Department","startDate":"2021-10-24","endDate":"2021-11-04","description":"Participated in dialogue activities and competitions, developing communication and dialogue skills.","documentType":"appreciation","document":"/documents/volunteering/dialogue-competition.png"}]},"goal":{"title":"My Career Aspirations","description":"I seek a stable, long-term professional opportunity in web development, technical support, or digital and administrative operations, where I can apply my technical knowledge and practical experience, contribute to improving operational efficiency and productivity, and continue learning and developing professionally."}},"title":"About Me","description":"Explore my education, professional experience, certifications, skills, and volunteer activities.","breadcrumb":{"title":"About Me","description":"Explore my education, professional experience, certifications, skills, and volunteer activities."},"documentPreview":{"loading":"Please wait a moment while we prepare your certificate for viewing...","error":"Unable to load the certificate. Please try again.","unavailable":"The document URL is unavailable.","unsupported":"This file format cannot be previewed on this page."},"aiSkills":{"title":"Artificial Intelligence Tools","tools":{"chatgpt":{"name":"ChatGPT","usage":"Using AI for programming, problem-solving, research, and content writing."},"gemini":{"name":"Google Gemini","usage":"Research, information analysis, idea generation, and technical assistance."},"claude":{"name":"Claude","usage":"Document and text analysis, programming assistance, and writing."},"deepseek":{"name":"DeepSeek","usage":"Code generation, error analysis, and programming problem-solving."}}}}'),$p=JSON.parse('{"pageTitle":"My Projects","pageDesc":"A collection of projects I have developed, showcasing my technical skills and experience in designing and building websites and web interfaces.","details":{"overview":"Project Overview","features":"Key Features","technologies":"Technologies Used","gallery":"Project Gallery","date":"Completion Date","liveDemo":"Live Preview","sourceCode":"Source Code","backToProjects":"Back to Projects","notFound":"Project Not Found","notFoundDescription":"We couldn\'t find the requested project."},"items":[{"id":"React-To-Do-List","title":"React Notes Management App","date":"2026/08/30","shortDescription":"An interactive application for creating, editing, deleting, and locally saving notes.","overview":"A notes management web application built with React and LocalStorage. Users can create, view, edit, and delete notes through an interactive interface, with data stored directly in the browser without requiring an external server. Developed as part of the JavaScript Application Development course at Hsoub Academy.","features":["Create new notes","View saved notes","Edit existing notes","Delete notes","Store data locally using LocalStorage","Update the interface interactively with React"],"tech_stack":["React","React Hooks","JavaScript","CRUD","LocalStorage"],"project_img":["react1"],"demo":"https://dhomlmgyr188.github.io/React-To-Do-List/","github":"https://github.com/dhomlmgyr188/React-To-Do-List"},{"id":"Portfolio_v1","title":"Personal Portfolio - Previous Version","date":"2026/05/24","shortDescription":"A responsive, multi-page personal portfolio showcasing professional information, projects, and services.","overview":"A multi-page personal portfolio website designed to showcase professional information, skills, projects, and services, with an emphasis on intuitive navigation, organized content, and a consistent user experience across different devices.","features":["Responsive design across different screen sizes","Multiple pages for organized content","Professional information and project showcase","Clear navigation between website sections","Interactive functionality using JavaScript"],"tech_stack":["HTML","CSS","Vanilla JavaScript"],"project_img":["anaalmughyir1"],"demo":"https://dhomlmgyr188.github.io/abdulrahman-portfolio-static/frontend/","github":""}]}');cp.use(Np).use(up).init({resources:{ar:{common:zp,home:Op,about:_p,projects:Rp,contact:{}},en:{common:Dp,home:Ap,about:Mp,projects:$p,contact:{}}},ns:["common","home","about","projects","contact"],defaultNS:"common",fallbackLng:"ar",interpolation:{escapeValue:!1}});const Ip=e=>{const t=String(e||"ar");document.documentElement.dir=t.startsWith("ar")?"rtl":"ltr",document.documentElement.lang=t.startsWith("ar")?"ar":"en"};cp.on("languageChanged",Ip),Ip(cp.language);const Fp=n.p+"static/media/saudia-sans-bold.aeaeb29bd75393fdabfc.otf",Up=n.p+"static/media/saudia-sans-regular.9af8db836ec4b5272370.otf",Hp=n.p+"static/media/Barlow-Bold.0cb1ab864072bf9e0991.ttf",Bp=mn`

  /* =====================================
     Fonts
  ===================================== */

  @font-face {
    font-family: "saudia-sans";
    src: url(${Up}) format("opentype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "saudia-sans";
    src: url(${Fp}) format("opentype");
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
    src: url(${Hp}) format("truetype");
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

`;r().createRoot(document.getElementById("root")).render((0,l().jsx)(s().StrictMode,{children:(0,l().jsx)(Ua,{basename:"/abdulrahman-portfolio-react",children:(0,l().jsxs)(Oo,{children:[(0,l().jsx)(Bp,{}),(0,l().jsx)(xd,{})]})})}))})();
//# sourceMappingURL=main.881d5581.js.map