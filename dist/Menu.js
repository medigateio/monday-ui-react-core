!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["monday-style"]=t():e["monday-style"]=t()}(this,(function(){return(()=>{"use strict";var e={94433:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HIDE_SHOW_EVENTS=void 0;t.HIDE_SHOW_EVENTS={CLICK:"click",CLICK_OUTSIDE:"clickoutside",ESCAPE_KEY:"esckey",TAB_KEY:"tab",MOUSE_ENTER:"mouseenter",MOUSE_LEAVE:"mouseleave",ENTER:"enter",MOUSE_DOWN:"mousedown",FOCUS:"focus",BLUR:"blur",CONTENT_CLICK:"onContentClick"}},46545:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,n,i,c){var f=(0,u.useCallback)((function(r){var u="ArrowLeft"===r.key;if(!u||i){if(e)return!1;t(r),n&&(n(r,u?"ArrowLeft":a.HIDE_SHOW_EVENTS.ESCAPE_KEY),r.preventDefault(),r.stopPropagation())}}),[n,e,t,i]);(0,o.default)({keys:l,callback:f,ref:c?void 0:r})};var n,u=r(16689),o=(n=r(37960))&&n.__esModule?n:{default:n},a=r(94433);var l=["Escape","ArrowLeft"]},52306:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,n,a,i,y){var v=(0,u.useCallback)((function(u){var o;if(e)return!1;if(u===f)for(var a=1;a<=t.length&&(o=(r+a)%t.length,!b(o,t));a++);else if(u===c)for(var l=t.length-1;l>0&&(o=(r+l)%t.length,!b(o,t));l--);(o||0===o)&&n(o)}),[r,t,e,n]),m=(0,u.useCallback)((function(){v(c)}),[v]),O=(0,u.useCallback)((function(){v(f)}),[v]),S=(0,u.useCallback)((function(e){a&&-1===r&&n(0)}),[n,r,a]),M=(0,u.useMemo)((function(){if(!y)return{ref:i,preventDefault:!0,stopPropagation:!0}}),[y,i]);(0,o.default)(l({keys:s,callback:O},M)),(0,o.default)(l({keys:d,callback:m},M)),(0,o.default)(l({keys:p,callback:S},M))};var n,u=r(16689),o=(n=r(37960))&&n.__esModule?n:{default:n};function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c="up",f="down",s=["ArrowDown"],d=["ArrowUp"],p=["Enter"],b=function(e,t){var r=t[e];return r.type.isSelectable&&!r.props.disabled}},30365:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,a){var l=(0,u.default)({ref:r}),i=(0,o.default)(l);return(0,n.useLayoutEffect)((function(){l||l!==i&&(t||(e(),a(-1)))}),[e,r,i,l,t,a]),l};var n=r(16689),u=a(r(62974)),o=a(r(94571));function a(e){return e&&e.__esModule?e:{default:e}}},67340:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){return(0,n.useCallback)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(-1),t(null),r&&r(n)}),[r,t,e])};var n=r(16689)},63602:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=(i=(0,n.useState)(null),c=2,function(e){if(Array.isArray(e))return e}(i)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,u,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){l=!0,u=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw u}}return o}}(i,c)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(i,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),t=e[0],r=e[1],o=t||0===t,a=(0,n.useCallback)((function(e,t){r(t?e:null)}),[r]),l=(0,n.useCallback)((function(){r(null)}),[r]);var i,c;return{setSubMenuIsOpenByIndex:a,hasOpenSubMenu:o,openSubMenuIndex:t,setOpenSubMenuIndex:r,resetOpenSubMenuIndex:l}};var n=r(16689);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},59705:(e,t)=>{function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.SIZES=t.PASCAL_BASE_SIZE=t.DialogPositions=t.BASE_SIZES=void 0;var u=Object.freeze({SMALL:"Small",MEDIUM:"Medium",LARGE:"Large"});t.PASCAL_BASE_SIZE=u;var o=Object.freeze({SMALL:"small",MEDIUM:"medium",LARGE:"large"});t.BASE_SIZES=o;var a=Object.freeze(function(e){for(var t=1;t<arguments.length;t++){var u=null!=arguments[t]?arguments[t]:{};t%2?r(Object(u),!0).forEach((function(t){n(e,t,u[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(u)):r(Object(u)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(u,t))}))}return e}({XXS:"xxs",XS:"xs"},o));t.SIZES=a;var l=Object.freeze({LEFT:"left",LEFT_START:"left-start",LEFT_END:"left-end",RIGHT:"right",RIGHT_START:"right-start",RIGHT_END:"right-end",TOP:"top",TOP_START:"top-start",TOP_END:"top-end",BOTTOM:"bottom",BOTTOM_START:"bottom-start",BOTTOM_END:"bottom-end"});t.DialogPositions=l},34066:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.backwardCompatibilityForProperties=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=e.find((function(e){return void 0!==e}));return r||t}},7601:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.ref,r=e.callback,n=(0,u.useCallback)((function(e){t&&t.current&&!t.current.contains(e.target)&&r(e)}),[t,r]),a=(0,u.useRef)(document);(0,o.default)({eventName:"click",ref:a,callback:n,capture:!0}),(0,o.default)({eventName:"touchend",ref:a,callback:n,capture:!0})};var n,u=r(16689),o=(n=r(67167))&&n.__esModule?n:{default:n}},67167:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.eventName,r=e.callback,u=e.ref,o=e.capture,a=void 0!==o&&o;(0,n.useEffect)((function(){var e=u&&u.current;if(e){var n={capture:a};return e.addEventListener(t,r,n),function(){e.removeEventListener(t,r,n)}}}),[t,u,r,a])};var n=r(16689)},62974:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.ref,r=(f=(0,u.useState)(!1),s=2,function(e){if(Array.isArray(e))return e}(f)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,u,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){l=!0,u=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw u}}return o}}(f,s)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(f,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=r[0],l=r[1],i=(0,u.useCallback)((function(e){var r=t&&t.current,n=e.target===r;l(n)}),[l,t]),c=(0,u.useCallback)((function(){return l(!1)}),[l]);var f,s;return(0,o.default)({eventName:"mouseenter",callback:i,ref:t}),(0,o.default)({eventName:"mouseleave",callback:c,ref:t}),n};var n,u=r(16689),o=(n=r(67167))&&n.__esModule?n:{default:n};function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},37960:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n,u=r(16689),o=(n=r(67167))&&n.__esModule?n:{default:n};var a="ctrlOrMetaKey";function l(e){var t,r=e.keys,n=void 0===r?[]:r,l=e.modifier,i=e.ref,c=e.callback,f=e.ignoreDocumentFallback,s=void 0!==f&&f,d=e.capture,p=void 0!==d&&d,b=e.preventDefault,y=void 0!==b&&b,v=e.stopPropagation,m=void 0!==v&&v,O=e.keyEventName,S=void 0===O?"keydown":O,M=(0,u.useRef)(document),E=(0,u.useCallback)((function(e){var t=e.key;n.includes(t)&&(l&&!function(e,t){return!!e[t]||t===a&&(e.ctrlKey||e.metaKey)}(e,l)||(y&&e.preventDefault(),m&&e.stopPropagation(),c(e)))}),[c,n,y,m,l]);t=i||(s?null:M),(0,o.default)({eventName:S,callback:E,ref:t,capture:p})}l.modifiers={ALT:"altKey",META:"metaKey",CTRL:"ctrlKey",SHIFT:"shiftKey",CTRL_OR_META:a}},59347:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.refs,r=void 0===t?[]:t;return(0,n.useMemo)((function(){return r.every((function(e){return null===e}))?null:function(e){r.forEach((function(t){t&&function(e,t){if(null===e)return;if("function"==typeof e)return void e(t);try{e.current=t}catch(r){throw console.error(r),new Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}}(t,e)}))}}),[r])};var n=r(16689)},94571:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,n.useRef)();return(0,n.useLayoutEffect)((function(){t.current=e})),t.current};var n=r(16689)},90817:(e,t,r)=>{r.r(t)},44533:e=>{e.exports=require("@react-aria/interactions")},59003:e=>{e.exports=require("classnames")},580:e=>{e.exports=require("prop-types")},16689:e=>{e.exports=require("react")}},t={};function r(n){var u=t[n];if(void 0!==u)return u.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{var e=n;function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==t(e)&&"function"!=typeof e)return{default:e};var n=O(r);if(n&&n.has(e))return n.get(e);var u={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(u,a,l):u[a]=e[a]}u.default=e,n&&n.set(e,u);return u}(r(16689)),o=r(44533),a=m(r(580)),l=m(r(59003)),i=m(r(59347)),c=m(r(7601)),f=m(r(63602)),s=m(r(67340)),d=m(r(46545)),p=m(r(52306)),b=m(r(30365)),y=r(59705);r(90817);var v=r(34066);function m(e){return e&&e.__esModule?e:{default:e}}function O(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(O=function(e){return e?r:t})(e)}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,u,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){l=!0,u=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw u}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var _=(0,u.forwardRef)((function(e,t){var r=e.id,n=e.className,a=e.classname,y=e.size,m=e.tabIndex,O=e.ariaLabel,S=e.ariaDescribedBy,E=e.children,g=e.isVisible,_=void 0===g||g,h=e.onClose,j=e.focusOnMount,P=e.focusItemIndex,A=e.focusItemIndexOnMount,w=e.isSubMenu,k=e.useDocumentEventListeners,D=e.shouldScrollMenu,T=(0,u.useRef)(null),x=(0,v.backwardCompatibilityForProperties)([n,a]),C=I((0,u.useState)(P),2),L=C[0],N=C[1],V=I((0,u.useState)(!1),2),R=V[0],q=V[1],B=(0,u.useCallback)((function(e){N(e),q(!1)}),[N,q]);(0,u.useEffect)((function(){-1!==A&&(N(A),q(!0))}),[A,q]);var U=(0,u.useMemo)((function(){return u.default.Children.toArray(E).filter((function(e){return!!e.type.isMenuChild||(console.error("Menu child must be a menuChild item (such as MenuItem, MenuDivider, MenuTitle, etc). This child is not supported: ",e),!1)}))}),[E]),Z=(0,f.default)(),F=Z.setSubMenuIsOpenByIndex,K=Z.hasOpenSubMenu,H=Z.openSubMenuIndex,W=Z.setOpenSubMenuIndex,z=Z.resetOpenSubMenuIndex,G=(0,s.default)(B,W,h);(0,c.default)({ref:T,callback:G}),(0,d.default)(K,G,T,h,w,k),(0,p.default)(K,U,L,B,_,T,k),(0,b.default)(z,K,T,B);var X=(0,u.useCallback)((function(){q(!0)}),[q]);(0,u.useLayoutEffect)((function(){K||k||L>-1&&requestAnimationFrame((function(){T&&T.current&&T.current.focus()}))}),[L,K,k]),(0,u.useLayoutEffect)((function(){j&&!k&&requestAnimationFrame((function(){T&&T.current&&T.current.focus()}))}),[T,j,k]);var Y=(0,i.default)({refs:[T,t]}),$=(0,o.useFocusWithin)({onBlurWithin:function(e){G&&G(e)}}).focusWithinProps;return u.default.createElement("ul",{onFocus:$.onFocus,onBlur:$.onBlur,id:r,className:(0,l.default)("monday-style-menu",x,"monday-style-menu--".concat(y)),ref:Y,tabIndex:m,"aria-label":O,role:"menu","aria-activedescendant":"".concat(r,"-").concat(L),"aria-describedby":S,onMouseOver:X},U&&u.default.Children.map(U,(function(e,t){return u.default.isValidElement(e)?u.default.cloneElement(e,M(M({},null==e?void 0:e.props),{},{activeItemIndex:L,index:t,setActiveItemIndex:N,menuRef:T,resetOpenSubMenuIndex:z,isParentMenuVisible:_,setSubMenuIsOpenByIndex:F,hasOpenSubMenu:t===H,closeMenu:G,menuId:r,useDocumentEventListeners:k,isInitialSelectedState:R,shouldScrollMenu:D})):null})))}));_.isMenu=!0,_.supportFocusOnMount=!0,_.sizes=y.SIZES,_.defaultProps={id:void 0,focusOnMount:!1,className:void 0,size:y.SIZES.MEDIUM,tabIndex:0,ariaLabel:"Menu",ariaDescribedBy:void 0,isVisible:!0,onClose:void 0,focusItemIndex:-1,isSubMenu:!1,useDocumentEventListeners:!1,focusItemIndexOnMount:-1,shouldScrollMenu:!1},_.propTypes={id:a.default.string,className:a.default.string,size:a.default.oneOf([y.SIZES.SMALL,y.SIZES.MEDIUM,y.SIZES.LARGE]),tabIndex:a.default.number,ariaLabel:a.default.string,ariaDescribedBy:a.default.string,focusOnMount:a.default.bool,isVisible:a.default.bool,onClose:a.default.func,focusItemIndex:a.default.number,isSubMenu:a.default.bool,useDocumentEventListeners:a.default.bool,focusItemIndexOnMount:a.default.number,shouldScrollMenu:a.default.bool},_.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{isVisible:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},id:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""},focusOnMount:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},className:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""},size:{defaultValue:{value:"SIZES.MEDIUM",computed:!0},type:{name:"enum",value:[{value:"SIZES.SMALL",computed:!0},{value:"SIZES.MEDIUM",computed:!0},{value:"SIZES.LARGE",computed:!0}]},required:!1,description:""},tabIndex:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:""},ariaLabel:{defaultValue:{value:'"Menu"',computed:!1},type:{name:"string"},required:!1,description:""},ariaDescribedBy:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""},onClose:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:""},focusItemIndex:{defaultValue:{value:"-1",computed:!1},type:{name:"number"},required:!1,description:""},isSubMenu:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},useDocumentEventListeners:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},focusItemIndexOnMount:{defaultValue:{value:"-1",computed:!1},type:{name:"number"},required:!1,description:""},shouldScrollMenu:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""}}};var h=_;e.default=h})(),n})()}));