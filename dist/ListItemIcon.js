!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["monday-style"]=t():e["monday-style"]=t()}(this,(function(){return(()=>{"use strict";var e={35614:(e,t,r)=>{function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(16689)),a=d(r(580)),l=d(r(59003)),i=d(r(23831)),u=d(r(46830)),c=["className","src","onClick","clickable","ariaLabel","ariaHidden","replaceToCurrentColor","customColor","data-testid"];function d(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},f.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"currentColor";return e.replace(/fill=".*?"/g,'fill="'.concat(t,'"'))}var m=function(e){var t=e.className,r=e.src,o=e.onClick,a=e.clickable,d=e.ariaLabel,s=e.ariaHidden,m=e.replaceToCurrentColor,b=e.customColor,v=e["data-testid"],O=p(e,c),g=(0,u.default)({isClickable:a,label:d,isDecorationOnly:s}),C=(0,n.useCallback)((function(e){return m?y(e,"currentColor"):b?y(e,b):e}),[m,b]);return"string"!=typeof r?null:n.default.createElement(i.default,f({},g,{onClick:o,src:r,className:(0,l.default)("monday-style-custom-svg-icon--wrapper",t),preProcessor:C},O,{"data-testid":v}))};m.propTypes={className:a.default.string,src:a.default.oneOfType([a.default.string,a.default.object]),ariaLabel:a.default.string,ariaHidden:a.default.bool,replaceToCurrentColor:a.default.bool,customColor:a.default.string},m.defaultProps={className:"",src:"",ariaLabel:void 0,ariaHidden:void 0,replaceToCurrentColor:!1,customColor:void 0},m.__docgenInfo={description:"",methods:[],displayName:"CustomSvgIcon",props:{className:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:""},src:{defaultValue:{value:'""',computed:!1},type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},ariaLabel:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""},ariaHidden:{defaultValue:{value:"undefined",computed:!0},type:{name:"bool"},required:!1,description:""},replaceToCurrentColor:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},customColor:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""}}};var b=m;t.default=b},12816:(e,t,r)=>{function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=a?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(n,l,u):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(16689)),l=(n=r(59003))&&n.__esModule?n:{default:n};function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}var u=(0,a.forwardRef)((function(e,t){var r=e.className,o=e.onClick,n=e["aria-label"],i=e.tabIndex,u=e.icon,c=e.role,d=void 0===c?"img":c,s=e["aria-hidden"],f=e["data-testid"],p="function"==typeof u,y=p?"":u;return a.default.createElement("span",{"aria-hidden":s,className:(0,l.default)(r,"fa",y),onClick:o,ref:t,"aria-label":n,tabIndex:i,role:d,"data-testid":f},p&&u())}));u.__docgenInfo={description:"",methods:[],displayName:"FontIcon",props:{role:{defaultValue:{value:'"img"',computed:!1},required:!1}}};var c=u;t.default=c},98396:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==y(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}o.default=e,r&&r.set(e,o);return o}(r(16689)),n=s(r(580)),a=s(r(59003)),l=r(99634),i=s(r(35614)),u=s(r(12816)),c=s(r(57288)),d=s(r(59347));function s(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},p.apply(this,arguments)}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}r(77274);var m=(0,o.forwardRef)((function(e,t){var r=e.onClick,n=e.className,s=e.icon,f=e.clickable,m=e.iconLabel,b=e.iconType,v=e.iconSize,O=e.ignoreFocusStyle,g=e.tabindex,C=e.ariaHidden,S=e.style,_=e.useCurrentColor,k=e.customColor,P=e["data-testid"],j=(0,c.default)({onClick:r,iconLabel:m,clickable:f,className:n,isDecorationOnly:C,ignoreFocusStyle:O,externalTabIndex:g}),h=j.screenReaderAccessProps,N=j.onClickCallback,T=j.computedClassName,w=j.iconRef,I=(0,d.default)({refs:[t,w]});if(!s)return null;var M="function"==typeof s;if(b===l.ICON_TYPES.SVG||M||"object"===y(s)){var E=s;return o.default.createElement(E,p({},h,{ref:M?void 0:I,size:v.toString(),onClick:r,className:T,style:S,"data-testid":P}))}return b===l.ICON_TYPES.SRC?o.default.createElement(i.default,p({src:s},h,{className:(0,a.default)(T),onClick:N,style:S,replaceToCurrentColor:_,customColor:k,"data-testid":P})):o.default.createElement(u.default,p({},h,{className:(0,a.default)(T),onClick:N,ref:I,icon:s,style:S,"data-testid":P}))}));m.type=l.ICON_TYPES,m.propTypes={onClick:n.default.func,className:n.default.string,iconType:n.default.oneOf([m.type.SVG,m.type.ICON_FONT,l.ICON_TYPES.SRC]),icon:n.default.oneOfType([n.default.string,n.default.func]),clickable:n.default.bool,iconLabel:n.default.string,iconSize:n.default.oneOfType([n.default.number,n.default.string]),ignoreFocusStyle:n.default.bool,ariaHidden:n.default.bool,useCurrentColor:n.default.bool,customColor:n.default.string},m.defaultProps={onClick:function(){},className:"",icon:"",clickable:!0,iconLabel:void 0,iconType:l.ICON_TYPES.SVG,iconSize:16,ignoreFocusStyle:!1,ariaHidden:void 0,useCurrentColor:!1,customColor:void 0},m.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:""},className:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:"class name to be added to icon"},icon:{defaultValue:{value:'""',computed:!1},type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:"we support three types of icons - SVG, FONT and SRC (classname) so this prop is either the name of the icon or the component"},clickable:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"is in used for tabIndex"},iconLabel:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:"icon aria label support"},iconType:{defaultValue:{value:"ICON_TYPES.SVG",computed:!0},type:{name:"enum",value:[{value:"Icon.type.SVG",computed:!0},{value:"Icon.type.ICON_FONT",computed:!0},{value:"ICON_TYPES.SRC",computed:!0}]},required:!1,description:"the type of the component - svg, font or custom svg (using react-inlinesvg)"},iconSize:{defaultValue:{value:"16",computed:!1},type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1,description:"size for font icon"},ignoreFocusStyle:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"remove focus style"},ariaHidden:{defaultValue:{value:"undefined",computed:!0},type:{name:"bool"},required:!1,description:""},useCurrentColor:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:'when using svg from src (Icon.type.SRC) this boolean will transform the "fill" property to "currentColor"'},customColor:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:"If you want to override to coloring of currentColor"}}};var b=m;t.default=b},99634:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ICON_TYPES=void 0;t.ICON_TYPES={SVG:"SVG",ICON_FONT:"FA",SRC:"SRC"}},57288:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.onClick,r=e.className,u=e.clickable,d=e.ignoreFocusStyle,f=e.isDecorationOnly,p=e.iconLabel,y=e.externalTabIndex,m=(0,o.useRef)(null),b=(0,o.useCallback)((function(e){document.activeElement===m.current&&t(e)}),[m,t]),v=(0,o.useCallback)((function(e){e.preventDefault()}),[]),O=(0,o.useMemo)((function(){return(0,n.default)("icon_component",r,{"icon_component--clickable":u,"icon_component--no-focus-style":d})}),[u,r,d]);(0,l.default)({eventName:"mousedown",callback:v,ref:m}),(0,i.default)({keys:s,ref:m,callback:b,ignoreDocumentFallback:!0,capture:!0,stopPropagation:!0,preventDefault:!0});var g=(0,o.useCallback)((function(e){(t||a.default)(e)}),[t]),C=(0,c.default)({isClickable:u,label:p,isDecorationOnly:f});return C.tabIndex=null!=y?y:C.tabIndex,{screenReaderAccessProps:C,onClickCallback:g,computedClassName:O,onEnterCallback:b,iconRef:m}};var o=r(16689),n=d(r(59003)),a=d(r(87553)),l=d(r(67167)),i=d(r(37960)),u=r(27324),c=d(r(46830));function d(e){return e&&e.__esModule?e:{default:e}}var s=[u.keyCodes.ENTER,u.keyCodes.SPACE]},27324:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.keyCodes=void 0;t.keyCodes={ENTER:"Enter",SPACE:" "}},10481:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getClickableIconScreenReaderAccessProps=c,t.getClickableScreenReaderAccessProps=u,t.getIconScreenReaderAccessProps=function(e){var t=e.isClickable,r=e.isDecorationOnly,o=e.isKeyboardAccessible,a=e.label,l=(0,n.default)(r)?!t:r;if(t)return c({label:a,isDecorationOnly:l,isKeyboardAccessible:o});return{role:l?void 0:"img","aria-hidden":l,tabIndex:void 0,"aria-label":r?void 0:a}};var o,n=(o=r(86069))&&o.__esModule?o:{default:o};function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){var t=e.isKeyboardAccessible,r=void 0===t||t,o=e.isDecorationOnly;return{role:"button",tabIndex:r?0:-1,"aria-hidden":void 0!==o&&o}}function c(e){var t=e.label,r=e.isDecorationOnly,o=void 0!==r&&r,n=e.isKeyboardAccessible;return l(l({},u({isDecorationOnly:o,isKeyboardAccessible:void 0===n||n})),{},{"aria-label":t})}},67167:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.eventName,r=e.callback,n=e.ref,a=e.capture,l=void 0!==a&&a;(0,o.useEffect)((function(){var e=n&&n.current;if(e){var o={capture:l};return e.addEventListener(t,r,o),function(){e.removeEventListener(t,r,o)}}}),[t,n,r,l])};var o=r(16689)},46830:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.isClickable,r=e.label,a=e.isDecorationOnly;return(0,o.useMemo)((function(){return(0,n.getIconScreenReaderAccessProps)({isClickable:t,label:r,isDecorationOnly:a})}),[t,r,a])};var o=r(16689),n=r(10481)},37960:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var o,n=r(16689),a=(o=r(67167))&&o.__esModule?o:{default:o};var l="ctrlOrMetaKey";function i(e){var t,r=e.keys,o=void 0===r?[]:r,i=e.modifier,u=e.ref,c=e.callback,d=e.ignoreDocumentFallback,s=void 0!==d&&d,f=e.capture,p=void 0!==f&&f,y=e.preventDefault,m=void 0!==y&&y,b=e.stopPropagation,v=void 0!==b&&b,O=e.keyEventName,g=void 0===O?"keydown":O,C=(0,n.useRef)(document),S=(0,n.useCallback)((function(e){var t=e.key;o.includes(t)&&(i&&!function(e,t){return!!e[t]||t===l&&(e.ctrlKey||e.metaKey)}(e,i)||(m&&e.preventDefault(),v&&e.stopPropagation(),c(e)))}),[c,o,m,v,i]);t=u||(s?null:C),(0,a.default)({eventName:g,callback:S,ref:t,capture:p})}i.modifiers={ALT:"altKey",META:"metaKey",CTRL:"ctrlKey",SHIFT:"shiftKey",CTRL_OR_META:l}},59347:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.refs,r=void 0===t?[]:t;return(0,o.useMemo)((function(){return r.every((function(e){return null===e}))?null:function(e){r.forEach((function(t){t&&function(e,t){if(null===e)return;if("function"==typeof e)return void e(t);try{e.current=t}catch(r){throw console.error(r),new Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}}(t,e)}))}}),[r])};var o=r(16689)},77274:(e,t,r)=>{r.r(t)},84653:(e,t,r)=>{r.r(t)},59003:e=>{e.exports=require("classnames")},86069:e=>{e.exports=require("lodash/isNil")},87553:e=>{e.exports=require("lodash/noop")},580:e=>{e.exports=require("prop-types")},16689:e=>{e.exports=require("react")},23831:e=>{e.exports=require("react-inlinesvg")}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{var e=o;function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==t(e)&&"function"!=typeof e)return{default:e};var o=d(r);if(o&&o.has(e))return o.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}n.default=e,o&&o.set(e,n);return n}(r(16689)),a=c(r(580)),l=c(r(59003)),i=c(r(59347));r(84653);var u=c(r(98396));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}var s=(0,n.forwardRef)((function(e,t){var r=e.className,o=e.id,a=e.icon,c=e.margin,d=(0,n.useRef)(null),s=(0,i.default)({refs:[t,d]});return n.default.createElement("div",{ref:s,className:(0,l.default)("list-item-icon",r,"list-item-icon--".concat(c)),id:o,"aria-hidden":"true"},n.default.createElement(u.default,{icon:a,clickable:!1,ignoreFocusStyle:!0,iconSize:18}))}));s.margin={START:"start",END:"end"},s.propTypes={icon:a.default.oneOfType([a.default.string,a.default.func]),className:a.default.string,id:a.default.string,margin:a.default.oneOf([s.margin.START,s.margin.END])},s.defaultProps={icon:void 0,className:"",id:void 0,margin:s.margin.START},s.__docgenInfo={description:"",methods:[],displayName:"ListItemIcon",props:{icon:{defaultValue:{value:"undefined",computed:!0},type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:""},className:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:"Add a classname to the icon wrapper"},id:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:"Add the id  to the icon wrapper"},margin:{defaultValue:{value:"ListItemIcon.margin.START",computed:!0},type:{name:"enum",value:[{value:"ListItemIcon.margin.START",computed:!0},{value:"ListItemIcon.margin.END",computed:!0}]},required:!1,description:"the position of the icon inside the list item (this sets the margins of the icon)"}}};var f=s;e.default=f})(),o})()}));