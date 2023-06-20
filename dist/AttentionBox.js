!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["monday-style"]=t():e["monday-style"]=t()}(this,(function(){return(()=>{"use strict";var e={26070:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.compactClassName=t.closeClassName=t.baseClassName=t.ATTENTION_BOX_TYPES=void 0;t.baseClassName="monday-style-attention-box-component";t.closeClassName="with-close";t.compactClassName="compact";t.ATTENTION_BOX_TYPES={PRIMARY:"primary",SUCCESS:"success",DANGER:"danger",DARK:"dark"}},35614:(e,t,o)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var o=d(t);if(o&&o.has(e))return o.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}n.default=e,o&&o.set(e,n);return n}(o(16689)),a=s(o(580)),l=s(o(59003)),i=s(o(23831)),u=s(o(46830)),c=["className","src","onClick","clickable","ariaLabel","ariaHidden","replaceToCurrentColor","customColor","data-testid"];function s(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(d=function(e){return e?o:t})(e)}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},f.apply(this,arguments)}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"currentColor";return e.replace(/fill=".*?"/g,'fill="'.concat(t,'"'))}var m=function(e){var t=e.className,o=e.src,r=e.onClick,a=e.clickable,s=e.ariaLabel,d=e.ariaHidden,m=e.replaceToCurrentColor,b=e.customColor,v=e["data-testid"],C=p(e,c),O=(0,u.default)({isClickable:a,label:s,isDecorationOnly:d}),_=(0,n.useCallback)((function(e){return m?y(e,"currentColor"):b?y(e,b):e}),[m,b]);return"string"!=typeof o?null:n.default.createElement(i.default,f({},O,{onClick:r,src:o,className:(0,l.default)("monday-style-custom-svg-icon--wrapper",t),preProcessor:_},C,{"data-testid":v}))};m.propTypes={className:a.default.string,src:a.default.oneOfType([a.default.string,a.default.object]),ariaLabel:a.default.string,ariaHidden:a.default.bool,replaceToCurrentColor:a.default.bool,customColor:a.default.string},m.defaultProps={className:"",src:"",ariaLabel:void 0,ariaHidden:void 0,replaceToCurrentColor:!1,customColor:void 0},m.__docgenInfo={description:"",methods:[],displayName:"CustomSvgIcon",props:{className:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:""},src:{defaultValue:{value:'""',computed:!1},type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},ariaLabel:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""},ariaHidden:{defaultValue:{value:"undefined",computed:!0},type:{name:"bool"},required:!1,description:""},replaceToCurrentColor:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},customColor:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""}}};var b=m;t.default=b},12816:(e,t,o)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var o=i(t);if(o&&o.has(e))return o.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=a?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(n,l,u):n[l]=e[l]}n.default=e,o&&o.set(e,n);return n}(o(16689)),l=(n=o(59003))&&n.__esModule?n:{default:n};function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(i=function(e){return e?o:t})(e)}var u=(0,a.forwardRef)((function(e,t){var o=e.className,r=e.onClick,n=e["aria-label"],i=e.tabIndex,u=e.icon,c=e.role,s=void 0===c?"img":c,d=e["aria-hidden"],f=e["data-testid"],p="function"==typeof u,y=p?"":u;return a.default.createElement("span",{"aria-hidden":d,className:(0,l.default)(o,"fa",y),onClick:r,ref:t,"aria-label":n,tabIndex:i,role:s,"data-testid":f},p&&u())}));u.__docgenInfo={description:"",methods:[],displayName:"FontIcon",props:{role:{defaultValue:{value:'"img"',computed:!1},required:!1}}};var c=u;t.default=c},98396:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==y(e)&&"function"!=typeof e)return{default:e};var o=f(t);if(o&&o.has(e))return o.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,o&&o.set(e,r);return r}(o(16689)),n=d(o(580)),a=d(o(59003)),l=o(99634),i=d(o(35614)),u=d(o(12816)),c=d(o(57288)),s=d(o(59347));function d(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(f=function(e){return e?o:t})(e)}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},p.apply(this,arguments)}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}o(77274);var m=(0,r.forwardRef)((function(e,t){var o=e.onClick,n=e.className,d=e.icon,f=e.clickable,m=e.iconLabel,b=e.iconType,v=e.iconSize,C=e.ignoreFocusStyle,O=e.tabindex,_=e.ariaHidden,g=e.style,S=e.useCurrentColor,N=e.customColor,T=e["data-testid"],P=(0,c.default)({onClick:o,iconLabel:m,clickable:f,className:n,isDecorationOnly:_,ignoreFocusStyle:C,externalTabIndex:O}),E=P.screenReaderAccessProps,h=P.onClickCallback,j=P.computedClassName,I=P.iconRef,k=(0,s.default)({refs:[t,I]});if(!d)return null;var w="function"==typeof d;if(b===l.ICON_TYPES.SVG||w||"object"===y(d)){var M=d;return r.default.createElement(M,p({},E,{ref:w?void 0:k,size:v.toString(),onClick:o,className:j,style:g,"data-testid":T}))}return b===l.ICON_TYPES.SRC?r.default.createElement(i.default,p({src:d},E,{className:(0,a.default)(j),onClick:h,style:g,replaceToCurrentColor:S,customColor:N,"data-testid":T})):r.default.createElement(u.default,p({},E,{className:(0,a.default)(j),onClick:h,ref:k,icon:d,style:g,"data-testid":T}))}));m.type=l.ICON_TYPES,m.propTypes={onClick:n.default.func,className:n.default.string,iconType:n.default.oneOf([m.type.SVG,m.type.ICON_FONT,l.ICON_TYPES.SRC]),icon:n.default.oneOfType([n.default.string,n.default.func]),clickable:n.default.bool,iconLabel:n.default.string,iconSize:n.default.oneOfType([n.default.number,n.default.string]),ignoreFocusStyle:n.default.bool,ariaHidden:n.default.bool,useCurrentColor:n.default.bool,customColor:n.default.string},m.defaultProps={onClick:function(){},className:"",icon:"",clickable:!0,iconLabel:void 0,iconType:l.ICON_TYPES.SVG,iconSize:16,ignoreFocusStyle:!1,ariaHidden:void 0,useCurrentColor:!1,customColor:void 0},m.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:""},className:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:"class name to be added to icon"},icon:{defaultValue:{value:'""',computed:!1},type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:"we support three types of icons - SVG, FONT and SRC (classname) so this prop is either the name of the icon or the component"},clickable:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"is in used for tabIndex"},iconLabel:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:"icon aria label support"},iconType:{defaultValue:{value:"ICON_TYPES.SVG",computed:!0},type:{name:"enum",value:[{value:"Icon.type.SVG",computed:!0},{value:"Icon.type.ICON_FONT",computed:!0},{value:"ICON_TYPES.SRC",computed:!0}]},required:!1,description:"the type of the component - svg, font or custom svg (using react-inlinesvg)"},iconSize:{defaultValue:{value:"16",computed:!1},type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1,description:"size for font icon"},ignoreFocusStyle:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"remove focus style"},ariaHidden:{defaultValue:{value:"undefined",computed:!0},type:{name:"bool"},required:!1,description:""},useCurrentColor:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:'when using svg from src (Icon.type.SRC) this boolean will transform the "fill" property to "currentColor"'},customColor:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:"If you want to override to coloring of currentColor"}}};var b=m;t.default=b},99634:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ICON_TYPES=void 0;t.ICON_TYPES={SVG:"SVG",ICON_FONT:"FA",SRC:"SRC"}},30181:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(o(580)),n=l(o(16689)),a=["size"];function l(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=function(e){var t=e.size,o=u(e,a);return n.default.createElement("svg",i({viewBox:"0 0 20 20",fill:"currentColor",width:t||"20",height:t||"20"},o),n.default.createElement("path",{d:"M10 2.10596C9.661 2.10596 9.32868 2.20028 9.04023 2.37836C8.75177 2.55645 8.51855 2.81128 8.36665 3.11435L8.36633 3.11498L2.44277 14.9621L2.44269 14.9623C2.30353 15.2407 2.23784 15.5502 2.25185 15.8612C2.26586 16.1721 2.3591 16.4744 2.52272 16.7392C2.68635 17.0041 2.91493 17.2227 3.18678 17.3744C3.45863 17.5261 3.76473 17.6058 4.07604 17.606H4.07644H15.9236H15.924C16.2353 17.6058 16.5414 17.5261 16.8132 17.3744C17.0851 17.2227 17.3137 17.0041 17.4773 16.7392C17.6409 16.4744 17.7341 16.1721 17.7481 15.8612C17.7622 15.5502 17.6965 15.2407 17.5573 14.9623L17.5572 14.9621L11.6337 3.11498L11.6333 3.11435C11.4815 2.81128 11.2482 2.55645 10.9598 2.37836C10.6713 2.20028 10.339 2.10596 10 2.10596ZM9.82821 3.65471C9.87984 3.62284 9.93932 3.60596 10 3.60596C10.0607 3.60596 10.1202 3.62284 10.1718 3.65471C10.2233 3.68654 10.265 3.73207 10.2922 3.78622L10.2923 3.78645L16.2155 15.6328L16.2156 15.6329C16.2404 15.6827 16.2522 15.7381 16.2497 15.7937C16.2472 15.8493 16.2305 15.9034 16.2012 15.9508C16.1719 15.9982 16.131 16.0374 16.0823 16.0645C16.0337 16.0917 15.9789 16.1059 15.9232 16.106H4.07684C4.02112 16.1059 3.96633 16.0917 3.91767 16.0645C3.86901 16.0374 3.8281 15.9982 3.79881 15.9508C3.76953 15.9034 3.75284 15.8493 3.75033 15.7937C3.74783 15.7381 3.75956 15.6827 3.78441 15.6329L3.78449 15.6328L9.70765 3.78645L9.70777 3.7862C9.73496 3.73206 9.77666 3.68654 9.82821 3.65471ZM10 6.95135C10.4142 6.95135 10.75 7.28714 10.75 7.70135V10.9324C10.75 11.3466 10.4142 11.6824 10 11.6824C9.58579 11.6824 9.25 11.3466 9.25 10.9324V7.70135C9.25 7.28714 9.58579 6.95135 10 6.95135ZM9.2303 13.3937C9.43444 13.1896 9.7113 13.0749 9.99999 13.0749C10.2887 13.0749 10.5655 13.1896 10.7697 13.3937C10.9738 13.5979 11.0885 13.8747 11.0885 14.1634C11.0885 14.4521 10.9738 14.729 10.7697 14.9331C10.5655 15.1372 10.2887 15.2519 9.99999 15.2519C9.7113 15.2519 9.43444 15.1372 9.2303 14.9331C9.02617 14.729 8.91149 14.4521 8.91149 14.1634C8.91149 13.8747 9.02617 13.5979 9.2303 13.3937ZM9.99999 14.1749C10.003 14.1749 10.006 14.1737 10.0081 14.1715C10.0103 14.1694 10.0115 14.1665 10.0115 14.1634C10.0115 14.1604 10.0103 14.1574 10.0081 14.1553C10.006 14.1531 10.003 14.1519 9.99999 14.1519C9.99695 14.1519 9.99402 14.1531 9.99187 14.1553C9.98971 14.1574 9.9885 14.1604 9.9885 14.1634C9.9885 14.1665 9.98971 14.1694 9.99187 14.1715C9.99402 14.1737 9.99695 14.1749 9.99999 14.1749Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))};c.displayName="Alert",c.propTypes={size:r.default.string},c.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{size:{type:{name:"string"},required:!1,description:""}}};var s=c;t.default=s},70956:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(o(580)),n=l(o(16689)),a=["size"];function l(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=function(e){var t=e.size,o=u(e,a);return n.default.createElement("svg",i({viewBox:"0 0 20 20",fill:"currentColor",width:t||"20",height:t||"20"},o),n.default.createElement("path",{d:"M6.53033 5.46967C6.23744 5.17678 5.76256 5.17678 5.46967 5.46967C5.17678 5.76256 5.17678 6.23744 5.46967 6.53033L8.62562 9.68628L5.47045 12.8415C5.17756 13.1343 5.17756 13.6092 5.47045 13.9021C5.76334 14.195 6.23822 14.195 6.53111 13.9021L9.68628 10.7469L12.8415 13.9021C13.1343 14.195 13.6092 14.195 13.9021 13.9021C14.195 13.6092 14.195 13.1343 13.9021 12.8415L10.7469 9.68628L13.9029 6.53033C14.1958 6.23744 14.1958 5.76256 13.9029 5.46967C13.61 5.17678 13.1351 5.17678 12.8422 5.46967L9.68628 8.62562L6.53033 5.46967Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))};c.displayName="CloseSmall",c.propTypes={size:r.default.string},c.__docgenInfo={description:"",methods:[],displayName:"CloseSmall",props:{size:{type:{name:"string"},required:!1,description:""}}};var s=c;t.default=s},57288:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.onClick,o=e.className,u=e.clickable,s=e.ignoreFocusStyle,f=e.isDecorationOnly,p=e.iconLabel,y=e.externalTabIndex,m=(0,r.useRef)(null),b=(0,r.useCallback)((function(e){document.activeElement===m.current&&t(e)}),[m,t]),v=(0,r.useCallback)((function(e){e.preventDefault()}),[]),C=(0,r.useMemo)((function(){return(0,n.default)("icon_component",o,{"icon_component--clickable":u,"icon_component--no-focus-style":s})}),[u,o,s]);(0,l.default)({eventName:"mousedown",callback:v,ref:m}),(0,i.default)({keys:d,ref:m,callback:b,ignoreDocumentFallback:!0,capture:!0,stopPropagation:!0,preventDefault:!0});var O=(0,r.useCallback)((function(e){(t||a.default)(e)}),[t]),_=(0,c.default)({isClickable:u,label:p,isDecorationOnly:f});return _.tabIndex=null!=y?y:_.tabIndex,{screenReaderAccessProps:_,onClickCallback:O,computedClassName:C,onEnterCallback:b,iconRef:m}};var r=o(16689),n=s(o(59003)),a=s(o(87553)),l=s(o(67167)),i=s(o(37960)),u=o(27324),c=s(o(46830));function s(e){return e&&e.__esModule?e:{default:e}}var d=[u.keyCodes.ENTER,u.keyCodes.SPACE]},27324:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.keyCodes=void 0;t.keyCodes={ENTER:"Enter",SPACE:" "}},34066:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.backwardCompatibilityForProperties=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,o=e.find((function(e){return void 0!==e}));return o||t}},10481:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getClickableIconScreenReaderAccessProps=c,t.getClickableScreenReaderAccessProps=u,t.getIconScreenReaderAccessProps=function(e){var t=e.isClickable,o=e.isDecorationOnly,r=e.isKeyboardAccessible,a=e.label,l=(0,n.default)(o)?!t:o;if(t)return c({label:a,isDecorationOnly:l,isKeyboardAccessible:r});return{role:l?void 0:"img","aria-hidden":l,tabIndex:void 0,"aria-label":o?void 0:a}};var r,n=(r=o(86069))&&r.__esModule?r:{default:r};function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(e){var t=e.isKeyboardAccessible,o=void 0===t||t,r=e.isDecorationOnly;return{role:"button",tabIndex:o?0:-1,"aria-hidden":void 0!==r&&r}}function c(e){var t=e.label,o=e.isDecorationOnly,r=void 0!==o&&o,n=e.isKeyboardAccessible;return l(l({},u({isDecorationOnly:r,isKeyboardAccessible:void 0===n||n})),{},{"aria-label":t})}},67167:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.eventName,o=e.callback,n=e.ref,a=e.capture,l=void 0!==a&&a;(0,r.useEffect)((function(){var e=n&&n.current;if(e){var r={capture:l};return e.addEventListener(t,o,r),function(){e.removeEventListener(t,o,r)}}}),[t,n,o,l])};var r=o(16689)},46830:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.isClickable,o=e.label,a=e.isDecorationOnly;return(0,r.useMemo)((function(){return(0,n.getIconScreenReaderAccessProps)({isClickable:t,label:o,isDecorationOnly:a})}),[t,o,a])};var r=o(16689),n=o(10481)},37960:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r,n=o(16689),a=(r=o(67167))&&r.__esModule?r:{default:r};var l="ctrlOrMetaKey";function i(e){var t,o=e.keys,r=void 0===o?[]:o,i=e.modifier,u=e.ref,c=e.callback,s=e.ignoreDocumentFallback,d=void 0!==s&&s,f=e.capture,p=void 0!==f&&f,y=e.preventDefault,m=void 0!==y&&y,b=e.stopPropagation,v=void 0!==b&&b,C=e.keyEventName,O=void 0===C?"keydown":C,_=(0,n.useRef)(document),g=(0,n.useCallback)((function(e){var t=e.key;r.includes(t)&&(i&&!function(e,t){return!!e[t]||t===l&&(e.ctrlKey||e.metaKey)}(e,i)||(m&&e.preventDefault(),v&&e.stopPropagation(),c(e)))}),[c,r,m,v,i]);t=u||(d?null:_),(0,a.default)({eventName:O,callback:g,ref:t,capture:p})}i.modifiers={ALT:"altKey",META:"metaKey",CTRL:"ctrlKey",SHIFT:"shiftKey",CTRL_OR_META:l}},59347:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.refs,o=void 0===t?[]:t;return(0,r.useMemo)((function(){return o.every((function(e){return null===e}))?null:function(e){o.forEach((function(t){t&&function(e,t){if(null===e)return;if("function"==typeof e)return void e(t);try{e.current=t}catch(o){throw console.error(o),new Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}}(t,e)}))}}),[o])};var r=o(16689)},52127:(e,t,o)=>{o.r(t)},77274:(e,t,o)=>{o.r(t)},59003:e=>{e.exports=require("classnames")},86069:e=>{e.exports=require("lodash/isNil")},87553:e=>{e.exports=require("lodash/noop")},580:e=>{e.exports=require("prop-types")},16689:e=>{e.exports=require("react")},23831:e=>{e.exports=require("react-inlinesvg")}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,o),a.exports}o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{var e=r;function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(e,o){if(!o&&e&&e.__esModule)return e;if(null===e||"object"!==t(e)&&"function"!=typeof e)return{default:e};var r=y(o);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(o(16689)),a=p(o(580)),l=p(o(59003)),i=p(o(98396)),u=p(o(70956)),c=p(o(30181)),s=o(26070);o(52127);var d=o(34066),f=o(99634);function p(e){return e&&e.__esModule?e:{default:e}}function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(y=function(e){return e?o:t})(e)}function m(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var b=function(e){var t=e.className,o=e.componentClassName,r=e.withIconWithoutHeader,a=e.type,c=e.icon,f=e.iconType,p=e.title,y=e.text,b=e.withoutIcon,v=e.onClose,C=e.compact,O=(0,n.useMemo)((function(){return a===s.ATTENTION_BOX_TYPES.DANGER?"alert":a===s.ATTENTION_BOX_TYPES.SUCCESS?"success":"attention"}),[a]),_=(0,d.backwardCompatibilityForProperties)([t,o]),g="".concat(s.baseClassName,"--type-").concat(a);return n.default.createElement("aside",{className:(0,l.default)(s.baseClassName,g,m({},s.compactClassName,C),m({},s.closeClassName,v),_),role:"alert"},p&&n.default.createElement("h2",{className:(0,l.default)("".concat(s.baseClassName,"__title-container"),"".concat(g,"__title-container"))},!b&&n.default.createElement(i.default,{iconType:f,ariaHidden:!0,clickable:!1,icon:c,className:(0,l.default)("".concat(s.baseClassName,"__title-container__icon"),"".concat(g,"__title-container__icon")),ignoreFocusStyle:!0,iconSize:"24",iconLabel:O}),n.default.createElement("span",{className:(0,l.default)("".concat(s.baseClassName,"__title-container__title"),"".concat(g,"__title-container__title"))},p)),n.default.createElement("div",{className:(0,l.default)("".concat(s.baseClassName,"__text"),"".concat(g,"__text"),m({},"".concat(s.baseClassName,"_text--compact"),C))},!p&&C&&!b&&r&&n.default.createElement(i.default,{iconType:f,iconSize:18,ariaHidden:!0,clickable:!1,icon:c,className:(0,l.default)("".concat(s.baseClassName,"__title-container__icon"),"".concat(g,"__title-container__icon")),ignoreFocusStyle:!0,iconLabel:O}),y),v&&n.default.createElement(i.default,{iconType:i.default.type.SVG,iconLabel:"Close",icon:u.default,className:(0,l.default)("".concat(s.baseClassName,"__close-icon"),m({},s.compactClassName,C)),ignoreFocusStyle:!0,onClick:v,iconSize:"24"}))};b.types=s.ATTENTION_BOX_TYPES,b.iconTypes=f.ICON_TYPES,b.propTypes={className:a.default.string,type:a.default.oneOf([s.ATTENTION_BOX_TYPES.PRIMARY,s.ATTENTION_BOX_TYPES.SUCCESS,s.ATTENTION_BOX_TYPES.DANGER,s.ATTENTION_BOX_TYPES.DARK]),iconType:a.default.oneOf([i.default.type.SVG,i.default.type.ICON_FONT]),icon:a.default.oneOfType([a.default.string,a.default.func]),title:a.default.string,text:a.default.any,withIconWithoutHeader:a.default.bool,withoutIcon:a.default.bool,compact:a.default.bool,onClose:a.default.func},b.defaultProps={className:void 0,type:s.ATTENTION_BOX_TYPES.PRIMARY,icon:c.default,iconType:i.default.type.SVG,title:"",text:"",withoutIcon:!1,withIconWithoutHeader:!1,compact:!1,onClose:void 0},b.__docgenInfo={description:"",methods:[],displayName:"AttentionBox",props:{className:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""},type:{defaultValue:{value:"ATTENTION_BOX_TYPES.PRIMARY",computed:!0},type:{name:"enum",value:[{value:"ATTENTION_BOX_TYPES.PRIMARY",computed:!0},{value:"ATTENTION_BOX_TYPES.SUCCESS",computed:!0},{value:"ATTENTION_BOX_TYPES.DANGER",computed:!0},{value:"ATTENTION_BOX_TYPES.DARK",computed:!0}]},required:!1,description:"we support 4 types of attention boxes"},icon:{defaultValue:{value:"AlertIcon",computed:!0},type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:"Icon classname for icon font or SVG Icon Component for SVG Type"},iconType:{defaultValue:{value:"Icon.type.SVG",computed:!0},type:{name:"enum",value:[{value:"Icon.type.SVG",computed:!0},{value:"Icon.type.ICON_FONT",computed:!0}]},required:!1,description:"We support two types of icons, SVG and Icon font (please see Icon component for more information)"},title:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:""},text:{defaultValue:{value:'""',computed:!1},type:{name:"any"},required:!1,description:""},withoutIcon:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},withIconWithoutHeader:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},compact:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},onClose:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:""}}};var v=b;e.default=v})(),r})()}));