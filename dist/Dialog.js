!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["monday-style"]=t():e["monday-style"]=t()}(this,(function(){return(()=>{"use strict";var e={18733:(e,t,n)=>{function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.DialogContent=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(16689)),i=c(n(59003)),a=n(84466),l=c(n(7601)),u=n(59105);n(75926);var s=c(n(37960)),d=n(94433);function c(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f.apply(this,arguments)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h={},y=function(){},v={},g=["Esc","Escape"],b=r.default.forwardRef((function(e,t){var n,o=e.onEsc,c=void 0===o?y:o,p=e.children,b=e.position,O=e.wrapperClassName,E=e.isOpen,w=void 0!==E&&E,D=e.startingEdge,S=e.animationType,k=void 0===S?"expand":S,T=e.onMouseEnter,C=void 0===T?y:T,_=e.onMouseLeave,M=void 0===_?y:_,P=e.onClickOutside,j=void 0===P?y:P,N=e.onClick,A=void 0===N?y:N,I=e.showDelay,L=e.styleObject,q=void 0===L?v:L,V=e.isReferenceHidden,R=e.hasTooltip,H=void 0!==R&&R,x=(0,r.useRef)(null),F=(0,r.useCallback)((function(e){if(w)return j(e,d.HIDE_SHOW_EVENTS.CLICK_OUTSIDE)}),[w,j]);return(0,s.default)({keys:g,callback:c}),(0,l.default)({callback:F,ref:x}),k&&(h.classNames="monday-style-animation-".concat(k)),r.default.createElement("span",{className:(0,i.default)("monday-style-dialog-content-wrapper",O),ref:t,style:q,onClickCapture:A,"data-popper-reference-hidden":V},r.default.createElement(a.CSSTransition,f({},h,{in:w,appear:!!k,timeout:I}),r.default.createElement("div",{className:(0,i.default)("monday-style-dialog-content-component",b,(n={},m(n,"edge-".concat(D),D),m(n,"has-tooltip",H),n)),ref:x},r.default.Children.toArray(p).map((function(e){return(0,r.cloneElement)(e,{onMouseEnter:(0,u.chainFunctions)([e.props.onMouseEnter,C]),onMouseLeave:(0,u.chainFunctions)([e.props.onMouseLeave,M])})})))))}));t.DialogContent=b,b.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{onEsc:{defaultValue:{value:"() => {}",computed:!1},required:!1},isOpen:{defaultValue:{value:"false",computed:!1},required:!1},animationType:{defaultValue:{value:'"expand"',computed:!1},required:!1},onMouseEnter:{defaultValue:{value:"() => {}",computed:!1},required:!1},onMouseLeave:{defaultValue:{value:"() => {}",computed:!1},required:!1},onClickOutside:{defaultValue:{value:"() => {}",computed:!1},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1},styleObject:{defaultValue:{value:"{}",computed:!1},required:!1},hasTooltip:{defaultValue:{value:"false",computed:!1},required:!1}}}},94433:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HIDE_SHOW_EVENTS=void 0;t.HIDE_SHOW_EVENTS={CLICK:"click",CLICK_OUTSIDE:"clickoutside",ESCAPE_KEY:"esckey",TAB_KEY:"tab",MOUSE_ENTER:"mouseenter",MOUSE_LEAVE:"mouseleave",ENTER:"enter",MOUSE_DOWN:"mousedown",FOCUS:"focus",BLUR:"blur",CONTENT_CLICK:"onContentClick"}},6993:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Refable=void 0;var o,r=(o=n(16689))&&o.__esModule?o:{default:o},i=n(59105),a=["children"];function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.default.forwardRef((function(e,t){var n=e.children,o=c(e,a);return r.default.Children.map(n,(function(e){return r.default.isValidElement(e)?"string"!=typeof e.type?r.default.createElement("span",l({ref:t},o),r.default.cloneElement(e,s({},e.props))):r.default.cloneElement(e,s(s(s({},o),e.props),{},{onClick:f("onClick",e.props,o),onBlur:f("onBlur",e.props,o),onMouseEnter:f("onMouseEnter",e.props,o),onMouseLeave:f("onMouseLeave",e.props,o),onMouseDown:f("onMouseDown",e.props,o),onFocus:f("onFocus",e.props,o),ref:(0,i.chainRefFunctions)([e.ref,t])})):null}))}));function f(e,t,n){return(0,i.chainFunctions)([t[e],n[e]],!0)}t.Refable=p,p.__docgenInfo={description:"",methods:[],displayName:"Refable"}},5959:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DIALOG_ANIMATION_TYPES=void 0;t.DIALOG_ANIMATION_TYPES={OPACITY_AND_SLIDE:"opacity-and-slide",EXPAND:"expand"}},59705:(e,t)=>{function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.SIZES=t.PASCAL_BASE_SIZE=t.DialogPositions=t.BASE_SIZES=void 0;var r=Object.freeze({SMALL:"Small",MEDIUM:"Medium",LARGE:"Large"});t.PASCAL_BASE_SIZE=r;var i=Object.freeze({SMALL:"small",MEDIUM:"medium",LARGE:"large"});t.BASE_SIZES=i;var a=Object.freeze(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({XXS:"xxs",XS:"xs"},i));t.SIZES=a;var l=Object.freeze({LEFT:"left",LEFT_START:"left-start",LEFT_END:"left-end",RIGHT:"right",RIGHT_START:"right-start",RIGHT_END:"right-end",TOP:"top",TOP_START:"top-start",TOP_END:"top-end",BOTTOM:"bottom",BOTTOM_START:"bottom-start",BOTTOM_END:"bottom-end"});t.DialogPositions=l},7601:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.ref,n=e.callback,o=(0,r.useCallback)((function(e){t&&t.current&&!t.current.contains(e.target)&&n(e)}),[t,n]),a=(0,r.useRef)(document);(0,i.default)({eventName:"click",ref:a,callback:o,capture:!0}),(0,i.default)({eventName:"touchend",ref:a,callback:o,capture:!0})};var o,r=n(16689),i=(o=n(67167))&&o.__esModule?o:{default:o}},67167:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.eventName,n=e.callback,r=e.ref,i=e.capture,a=void 0!==i&&i;(0,o.useEffect)((function(){var e=r&&r.current;if(e){var o={capture:a};return e.addEventListener(t,n,o),function(){e.removeEventListener(t,n,o)}}}),[t,r,n,a])};var o=n(16689)},37960:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var o,r=n(16689),i=(o=n(67167))&&o.__esModule?o:{default:o};var a="ctrlOrMetaKey";function l(e){var t,n=e.keys,o=void 0===n?[]:n,l=e.modifier,u=e.ref,s=e.callback,d=e.ignoreDocumentFallback,c=void 0!==d&&d,p=e.capture,f=void 0!==p&&p,m=e.preventDefault,h=void 0!==m&&m,y=e.stopPropagation,v=void 0!==y&&y,g=e.keyEventName,b=void 0===g?"keydown":g,O=(0,r.useRef)(document),E=(0,r.useCallback)((function(e){var t=e.key;o.includes(t)&&(l&&!function(e,t){return!!e[t]||t===a&&(e.ctrlKey||e.metaKey)}(e,l)||(h&&e.preventDefault(),v&&e.stopPropagation(),s(e)))}),[s,o,h,v,l]);t=u||(c?null:O),(0,i.default)({eventName:b,callback:E,ref:t,capture:f})}l.modifiers={ALT:"altKey",META:"metaKey",CTRL:"ctrlKey",SHIFT:"shiftKey",CTRL_OR_META:a}},4450:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isInsideClass=function(e,t){if(!t)return!1;var n;n=Array.isArray(t)?t.map((function(e){return".".concat(e)})).join(","):".".concat(t);return!!e.parentElement.closest(n)}},59105:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NOOP=function(){},t.chainFunctions=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){for(var o=0;o<e.length;o++){var r=e[o];try{if(!1===(r&&r(n))&&t)return}catch(e){return void console.error(e)}}}},t.chainRefFunctions=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){for(var o=0;o<e.length;o++){var i=e[o];try{var a=void 0;if((0,r.default)(i)?a=i(n):i&&(i.current=n),!1===a&&t)return}catch(e){return void console.error(e)}}}},t.convertToArray=function(e){return(0,o.default)(e)?e:[e]};var o=i(n(35599)),r=i(n(25716));function i(e){return e&&e.__esModule?e:{default:e}}},12106:(e,t,n)=>{n.r(t)},75926:(e,t,n)=>{n.r(t)},59003:e=>{e.exports=require("classnames")},35599:e=>{e.exports=require("lodash/isArray")},25716:e=>{e.exports=require("lodash/isFunction")},580:e=>{e.exports=require("prop-types")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},42932:e=>{e.exports=require("react-popper")},84466:e=>{e.exports=require("react-transition-group")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{var e=o;function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==t(e)&&"function"!=typeof e)return{default:e};var o=g(n);if(o&&o.has(e))return o.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,o&&o.set(e,r);return r}(n(16689)),i=n(66405),a=v(n(580)),l=n(42932),u=v(n(59003)),s=v(n(25716)),d=n(59105),c=n(18733),p=n(4450);n(12106);var f=n(6993),m=n(94433),h=n(59705),y=n(5959);function v(e){return e&&e.__esModule?e:{default:e}}function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}function b(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=T(e);if(t){var r=T(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return S(this,n)}}function S(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return k(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var C=function(){},_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(h,e);var t,n,o,a=D(h);function h(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),(t=a.call(this,e)).state={shouldUseDerivedStateFromProps:e.useDerivedStateFromProps,isOpen:e.shouldShowOnMount},t.onMouseEnter=t.onMouseEnter.bind(k(t)),t.onMouseLeave=t.onMouseLeave.bind(k(t)),t.onMouseDown=t.onMouseDown.bind(k(t)),t.onClick=t.onClick.bind(k(t)),t.onFocus=t.onFocus.bind(k(t)),t.onBlur=t.onBlur.bind(k(t)),t.isShown=t.isShown.bind(k(t)),t.onEsc=t.onEsc.bind(k(t)),t.onClickOutside=t.onClickOutside.bind(k(t)),t.onDialogEnter=t.onDialogEnter.bind(k(t)),t.onDialogLeave=t.onDialogLeave.bind(k(t)),t.getContainer=t.getContainer.bind(k(t)),t.onContentClick=t.onContentClick.bind(k(t)),t.onKeyDown=t.onKeyDown.bind(k(t)),t.closeDialogOnEscape=t.closeDialogOnEscape.bind(k(t)),t.hideTimeout=null,t.showTimeout=null,t}return t=h,n=[{key:"closeDialogOnEscape",value:function(e){if(this.state.isOpen)switch(e.key){case"Escape":this.hideDialogIfNeeded(e,m.HIDE_SHOW_EVENTS.ESCAPE_KEY);break;case"Tab":this.handleEvent(m.HIDE_SHOW_EVENTS.TAB_KEY,e);break;case"Enter":this.handleEvent(m.HIDE_SHOW_EVENTS.ENTER,e)}}},{key:"componentDidMount",value:function(){var e=this.props,t=e.shoudlCallbackOnMount,n=e.onDialogDidShow,o=this.state.isOpen;document.addEventListener("keyup",this.closeDialogOnEscape),t&&o&&n&&n()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.closeDialogOnEscape)}},{key:"getContainer",value:function(){var e=this.props.containerSelector;return e&&document.querySelector(e)||document.body}},{key:"showDialog",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.props,o=n.showDelay,r=n.instantShowAndHide,i=n.getDynamicShowDelay,a=o,l=t.preventAnimation;if(i){var u=i();a=u.showDelay||0,l=l||u.preventAnimation}r?(this.onShowDialog(t),this.setState({isOpen:!0,preventAnimation:l}),this.showTimeout=null):this.showTimeout=setTimeout((function(){e.onShowDialog(t),e.showTimeout=null,e.setState({isOpen:!0,preventAnimation:l})}),a)}},{key:"onShowDialog",value:function(){this.isShown()||(0,this.props.onDialogDidShow)()}},{key:"showDialogIfNeeded",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.props.disable;t||(this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null),this.showTimeout||this.showDialog(e))}},{key:"hideDialog",value:function(e,t){var n=this,o=this.props,r=o.hideDelay;o.instantShowAndHide?(this.onHideDialog(e,t),this.setState({isOpen:!1}),this.hideTimeout=null):this.hideTimeout=setTimeout((function(){n.onHideDialog(e,t),n.setState({isOpen:!1}),n.hideTimeout=null}),r)}},{key:"onHideDialog",value:function(e,t){var n=this.props.onDialogDidHide;n&&n(e,t)}},{key:"hideDialogIfNeeded",value:function(e,t){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null),this.hideTimeout||this.hideDialog(e,t)}},{key:"handleEvent",value:function(e,t,n){var o=this.props,r=o.showTriggerIgnoreClass,i=o.hideTriggerIgnoreClass;return!this.isShowTrigger(e)||this.isShown()||(0,p.isInsideClass)(t,r)?this.isHideTrigger(e)&&!(0,p.isInsideClass)(t,i)?this.hideDialogIfNeeded(n,e):void 0:this.showDialogIfNeeded()}},{key:"isShown",value:function(){var e=this.state.isOpen,t=this.props.open;return e||t}},{key:"isShowTrigger",value:function(e){var t=this.props.showTrigger;return(0,d.convertToArray)(t).indexOf(e)>-1}},{key:"isHideTrigger",value:function(e){var t=this.props.hideTrigger;return(0,d.convertToArray)(t).indexOf(e)>-1}},{key:"onMouseEnter",value:function(e){this.handleEvent("mouseenter",e.target,e)}},{key:"onMouseLeave",value:function(e){this.handleEvent("mouseleave",e.target,e)}},{key:"onClick",value:function(e){e.button||this.handleEvent("click",e.target,e)}},{key:"onKeyDown",value:function(e){"Enter"===e.key&&this.handleEvent("enter",e.target,e),"Tab"===e.key&&this.handleEvent("tab",e.target,e)}},{key:"onMouseDown",value:function(e){e.button||this.handleEvent("mousedown",e.target,e)}},{key:"onFocus",value:function(e){this.handleEvent("focus",e.target,e)}},{key:"onBlur",value:function(e){this.handleEvent("blur",e.relatedTarget,e)}},{key:"onEsc",value:function(e){this.handleEvent("esckey",e.target,e)}},{key:"onClickOutside",value:function(e){var t=this.props.onClickOutside;this.handleEvent("clickoutside",e.target,e),t(e)}},{key:"onDialogEnter",value:function(){this.props.showOnDialogEnter&&this.showDialogIfNeeded()}},{key:"onDialogLeave",value:function(e){this.props.showOnDialogEnter&&this.hideDialogIfNeeded(e,"DialogLeave")}},{key:"onContentClick",value:function(e){var t=this.props.onContentClick;this.handleEvent("onContentClick",e.target,e),t()}},{key:"render",value:function(){var e=this,t=this.props,n=t.wrapperClassName,o=t.content,a=t.startingEdge,d=t.children,p=t.preventAnimationOnMount,m=t.animationType,h=t.position,y=t.showDelay,v=t.moveBy,g=t.modifiers,O=t.tooltip,E=t.tooltipClassName,w=t.referenceWrapperClassName,D=t.zIndex,S=t.hideWhenReferenceHidden,k=this.state.preventAnimation,T=!this.isHideTrigger("clickoutside"),C=!p&&!k&&m,_=(0,s.default)(o)?o():o;return _?r.default.createElement(l.Manager,null,r.default.createElement(l.Reference,null,(function(t){var n=t.ref;return r.default.createElement(f.Refable,{className:w,ref:n,onBlur:M("onBlur",e,e.props),onKeyDown:M("onKeyDown",e,e.props),onClick:M("onClick",e,e.props),onFocus:M("onFocus",e,e.props),onMouseDown:M("onMouseDown",e,e.props),onMouseEnter:M("onMouseEnter",e,e.props),onMouseLeave:M("onMouseLeave",e,e.props)},d)})),(0,i.createPortal)(r.default.createElement(l.Popper,{placement:h,modifiers:[{name:"offset",options:{offset:[v.secondary,v.main]}},{name:"zIndex",enabled:!0,phase:"write",fn:function(e){var t=e.state;return D&&(t.styles.popper.zIndex=D),t}},{name:"rotator",enabled:!0,phase:"write",fn:function(e){var t=e.state;return t.styles.arrow?(t.styles.arrow.transform="".concat(t.styles.arrow.transform," rotate(45deg)"),t):t}}].concat(b(g))},(function(t){var o=t.placement,i=t.style,l=t.ref,s=t.arrowProps,d=t.isReferenceHidden;if(!e.isShown()&&o)return null;if(S&&d){var p=new CustomEvent("onReferenceHidden");e.hideDialog(p,"onReferenceHidden")}return r.default.createElement(c.DialogContent,{isReferenceHidden:S&&d,onMouseEnter:e.onDialogEnter,onMouseLeave:e.onDialogLeave,disableOnClickOutside:T,onClickOutside:e.onClickOutside,onEscKey:e.onEsc,animationType:C,position:o,wrapperClassName:n,startingEdge:a,isOpen:e.isShown(),showDelay:y,styleObject:i,ref:l,onClick:e.onContentClick,hasTooltip:!!O},_,O&&r.default.createElement("div",{style:s.style,ref:s.ref,className:(0,u.default)("monday-style-tooltip-arrow",E),"data-placement":o}))})),this.getContainer())):d}}],o=[{key:"getDerivedStateFromProps",value:function(e,t){return t.shouldUseDerivedStateFromProps?{isOpen:e.isOpen}:null}}],n&&E(t.prototype,n),o&&E(t,o),Object.defineProperty(t,"prototype",{writable:!1}),h}(r.PureComponent);function M(e,t,n){return(0,d.chainFunctions)([n[e],t[e]],!0)}e.default=_,_.hideShowTriggers=m.HIDE_SHOW_EVENTS,_.positions=h.DialogPositions,_.animationTypes=y.DIALOG_ANIMATION_TYPES,_.propTypes={referenceWrapperClassName:a.default.string,position:a.default.oneOf(b(Object.values(_.positions))),modifiers:a.default.array,startingEdge:a.default.string,moveBy:a.default.shape({main:a.default.number,secondary:a.default.number}),showDelay:a.default.number,hideDelay:a.default.number,showTrigger:a.default.any,hideTrigger:a.default.any,showOnDialogEnter:a.default.bool,shouldShowOnMount:a.default.bool,disable:a.default.bool,open:a.default.bool,showTriggerIgnoreClass:a.default.oneOfType([a.default.string,a.default.array]),hideTriggerIgnoreClass:a.default.oneOfType([a.default.string,a.default.array]),animationType:a.default.oneOf([_.animationTypes.EXPAND,_.animationTypes.OPACITY_AND_SLIDE]),wrapperClassName:a.default.string,preventAnimationOnMount:a.default.bool,containerSelector:a.default.string,tooltip:a.default.bool,tooltipClassName:a.default.string,onDialogDidShow:a.default.func,onDialogDidHide:a.default.func,onClickOutside:a.default.func,onContentClick:a.default.func,zIndex:a.default.number,useDerivedStateFromProps:a.default.bool,hideWhenReferenceHidden:a.default.bool,shoudlCallbackOnMount:a.default.bool},_.defaultProps={referenceWrapperClassName:"",position:"top",modifiers:[],startingEdge:"",moveBy:{main:0,secondary:0},showDelay:100,hideDelay:100,showTrigger:_.hideShowTriggers.MOUSE_ENTER,hideTrigger:_.hideShowTriggers.MOUSE_LEAVE,showOnDialogEnter:!1,shouldShowOnMount:!1,disable:!1,open:!1,showTriggerIgnoreClass:null,hideTriggerIgnoreClass:null,animationType:_.animationTypes.EXPAND,wrapperClassName:null,preventAnimationOnMount:!1,containerSelector:"body",tooltip:!1,tooltipClassName:"",onDialogDidShow:C,onDialogDidHide:C,onClickOutside:C,onContentClick:C,zIndex:null,useDerivedStateFromProps:!1,hideWhenReferenceHidden:!1,shoudlCallbackOnMount:!1},_.__docgenInfo={description:"",methods:[{name:"closeDialogOnEscape",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null},{name:"getContainer",docblock:null,modifiers:[],params:[],returns:null},{name:"showDialog",docblock:null,modifiers:[],params:[{name:"options",type:null}],returns:null},{name:"onShowDialog",docblock:null,modifiers:[],params:[],returns:null},{name:"showDialogIfNeeded",docblock:null,modifiers:[],params:[{name:"options",type:null}],returns:null},{name:"hideDialog",docblock:null,modifiers:[],params:[{name:"event",type:null},{name:"eventName",type:null}],returns:null},{name:"onHideDialog",docblock:null,modifiers:[],params:[{name:"event",type:null},{name:"eventName",type:null}],returns:null},{name:"hideDialogIfNeeded",docblock:null,modifiers:[],params:[{name:"event",type:null},{name:"eventName",type:null}],returns:null},{name:"handleEvent",docblock:null,modifiers:[],params:[{name:"eventName",type:null},{name:"target",type:null},{name:"event",type:null}],returns:null},{name:"isShown",docblock:null,modifiers:[],params:[],returns:null},{name:"isShowTrigger",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null},{name:"isHideTrigger",docblock:null,modifiers:[],params:[{name:"eventName",type:null}],returns:null},{name:"onMouseEnter",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"onMouseLeave",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"onClick",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"onKeyDown",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null},{name:"onMouseDown",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"onFocus",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"onBlur",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"onEsc",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"onClickOutside",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null},{name:"onDialogEnter",docblock:null,modifiers:[],params:[],returns:null},{name:"onDialogLeave",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null},{name:"onContentClick",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null}],displayName:"Dialog",props:{referenceWrapperClassName:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:"A Classname to be added to <spam> element which wraps the children"},position:{defaultValue:{value:'"top"',computed:!1},type:{name:"enum",value:[{value:"...Object.values(Dialog.positions)",computed:!0}]},required:!1,description:"Where the dialog should be in reference to the children,\nTop, Left, Right, Bottom ..."},modifiers:{defaultValue:{value:"[]",computed:!1},type:{name:"array"},required:!1,description:"PopperJS Modifiers type\nhttps://popper.js.org/docs/v2/modifiers/"},startingEdge:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:""},moveBy:{defaultValue:{value:"{ main: 0, secondary: 0 }",computed:!1},type:{name:"shape",value:{main:{name:"number",required:!1},secondary:{name:"number",required:!1}}},required:!1,description:"How much to move the dialog in relative to children\nmain is the axis in which the position is aligned to\nsecondary is the vertical axes to the position"},showDelay:{defaultValue:{value:"100",computed:!1},type:{name:"number"},required:!1,description:"how much delay should the Dialog wait until it should trigger the show in MS"},hideDelay:{defaultValue:{value:"100",computed:!1},type:{name:"number"},required:!1,description:"how much delay should the Dialog wait until it should trigger the hide in MS"},showTrigger:{defaultValue:{value:"Dialog.hideShowTriggers.MOUSE_ENTER",computed:!0},type:{name:"any"},required:!1,description:"an array of hide/show trigger -\nDialog.hideShowTriggers"},hideTrigger:{defaultValue:{value:"Dialog.hideShowTriggers.MOUSE_LEAVE",computed:!0},type:{name:"any"},required:!1,description:"an array of hide/show trigger -\nDialog.hideShowTriggers"},showOnDialogEnter:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},shouldShowOnMount:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Show the Dialog when the children is mounting"},disable:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"disable the opening of the dialog"},open:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"open is a controlled prop to open the dialog"},showTriggerIgnoreClass:{defaultValue:{value:"null",computed:!1},type:{name:"union",value:[{name:"string"},{name:"array"}]},required:!1,description:"if this class exists on the children the show trigger will be ignored"},hideTriggerIgnoreClass:{defaultValue:{value:"null",computed:!1},type:{name:"union",value:[{name:"string"},{name:"array"}]},required:!1,description:"if this class exists on the children the hide trigger will be ignored"},animationType:{defaultValue:{value:"Dialog.animationTypes.EXPAND",computed:!0},type:{name:"enum",value:[{value:"Dialog.animationTypes.EXPAND",computed:!0},{value:"Dialog.animationTypes.OPACITY_AND_SLIDE",computed:!0}]},required:!1,description:"Dialog animation type"},wrapperClassName:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:"Classname to be added to the content container"},preventAnimationOnMount:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Prevent Animation"},containerSelector:{defaultValue:{value:'"body"',computed:!1},type:{name:"string"},required:!1,description:'the container selector in which to append the dialog\nfor examples: "body" , ".my-class", "#my-id"'},tooltip:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"should position the tooltip element\nhttps://popper.js.org/docs/v2/modifiers/arrow/"},tooltipClassName:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:"class name to add to the tooltip element"},onDialogDidShow:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"callback to be called when the dialog is shown"},onDialogDidHide:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"callback to be called when the dialog is hidden"},onClickOutside:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"callback to be called when click outside is being triggered"},onContentClick:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"callback to be called when click on the content is being triggered"},zIndex:{defaultValue:{value:"null",computed:!1},type:{name:"number"},required:!1,description:"z-index to add to the dialog"},useDerivedStateFromProps:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},hideWhenReferenceHidden:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},shoudlCallbackOnMount:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""}}}})(),o})()}));