!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["monday-style"]=o():e["monday-style"]=o()}(this,(function(){return(()=>{"use strict";var e={50057:(e,o,r)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.AvatarBadge=void 0;var t=d(r(16689)),a=d(r(580)),n=d(r(59003)),l=r(47507),i=r(11478);r(73393);var c=d(r(35614)),u=["src","ariaLabel","tabIndex","className","size"];function d(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},s.apply(this,arguments)}function p(e,o){if(null==e)return{};var r,t,a=function(e,o){if(null==e)return{};var r,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||(a[r]=e[r]);return a}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var f="monday-style-avatar-badge",y=(0,l.BEMClass)(f),m=function(e){var o=e.src,r=e.ariaLabel,a=e.tabIndex,l=e.className,i=e.size,d=p(e,u);return o?t.default.createElement(c.default,s({src:o,ariaLabel:r,className:(0,n.default)(f,y({state:i}),l),clickable:-1===a},d)):null};o.AvatarBadge=m,m.sizes=i.AVATAR_SIZES,m.propTypes={src:a.default.any.isRequired,ariaLabel:a.default.string,tabIndex:a.default.oneOfType([a.default.string,a.default.number]),className:a.default.string,size:a.default.oneOf([i.AVATAR_SIZES.LARGE,i.AVATAR_SIZES.MEDIUM,i.AVATAR_SIZES.SMALL])},m.defaultProps={ariaLabel:void 0,tabIndex:0,className:"",size:i.AVATAR_SIZES.LARGE},m.__docgenInfo={description:"",methods:[],displayName:"AvatarBadge",props:{ariaLabel:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""},tabIndex:{defaultValue:{value:"0",computed:!1},type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1,description:""},className:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:""},size:{defaultValue:{value:"AVATAR_SIZES.LARGE",computed:!0},type:{name:"enum",value:[{value:"AVATAR_SIZES.LARGE",computed:!0},{value:"AVATAR_SIZES.MEDIUM",computed:!0},{value:"AVATAR_SIZES.SMALL",computed:!0}]},required:!1,description:""},src:{type:{name:"any"},required:!0,description:""}}}},11478:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.AVATAR_TYPES=o.AVATAR_SIZES=o.AVATAR_ALLOWED_TYPES=o.AVATAR_ALLOWED_SIZES=void 0;var r={IMG:"img",ICON:"icon",TEXT:"text"};o.AVATAR_TYPES=r;var t=Object.keys(r);o.AVATAR_ALLOWED_TYPES=t;var a={SMALL:"small",MEDIUM:"medium",LARGE:"large"};o.AVATAR_SIZES=a;var n=Object.keys(a);o.AVATAR_ALLOWED_SIZES=n},81499:(e,o,r)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.AvatarContent=void 0;var t=u(r(16689)),a=u(r(59003)),n=u(r(580)),l=r(47507),i=u(r(98396)),c=r(11478);function u(e){return e&&e.__esModule?e:{default:e}}r(52817);var d=(0,l.BEMClass)("monday-style-avatar-content"),s=function(e){var o=e.type,r=e.src,n=e.icon,l=e.text,u=e.ariaLabel,s=e.role,p=e.size,f=(0,a.default)(d({element:o}),d({element:o,state:p}));switch(o){case c.AVATAR_TYPES.IMG:return t.default.createElement("img",{role:s,alt:u,src:r,className:f});case c.AVATAR_TYPES.ICON:return t.default.createElement(i.default,{icon:n,"aria-label":u,role:s,clickable:!1,className:f,ariaHidden:!1});case c.AVATAR_TYPES.TEXT:return t.default.createElement("span",{"aria-label":u,role:s,className:f},l);default:return null}};o.AvatarContent=s,s.types=c.AVATAR_TYPES,s.sizes=c.AVATAR_SIZES,s.propTypes={src:n.default.oneOfType([n.default.string,n.default.object]),type:n.default.oneOf([s.types.TEXT,s.types.ICON,s.types.IMG]),size:n.default.oneOf([s.sizes.SMALL,s.sizes.MEDIUM,s.sizes.LARGE]),role:n.default.string,ariaLabel:n.default.string,icon:n.default.oneOfType([n.default.string,n.default.func]),text:n.default.string},s.defaultProps={src:void 0,icon:void 0,type:c.AVATAR_TYPES.TEXT,role:void 0,ariaLabel:void 0,size:c.AVATAR_SIZES.LARGE,text:void 0},s.__docgenInfo={description:"",methods:[],displayName:"AvatarContent",props:{src:{defaultValue:{value:"undefined",computed:!0},type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},icon:{defaultValue:{value:"undefined",computed:!0},type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:"we support two types of icons - SVG and FONT (classname) so this prop is either the name of the icon or the component"},type:{defaultValue:{value:"AVATAR_TYPES.TEXT",computed:!0},type:{name:"enum",value:[{value:"AvatarContent.types.TEXT",computed:!0},{value:"AvatarContent.types.ICON",computed:!0},{value:"AvatarContent.types.IMG",computed:!0}]},required:!1,description:""},role:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""},ariaLabel:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""},size:{defaultValue:{value:"AVATAR_SIZES.LARGE",computed:!0},type:{name:"enum",value:[{value:"AvatarContent.sizes.SMALL",computed:!0},{value:"AvatarContent.sizes.MEDIUM",computed:!0},{value:"AvatarContent.sizes.LARGE",computed:!0}]},required:!1,description:""},text:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""}}}},35614:(e,o,r)=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=function(e,o){if(!o&&e&&e.__esModule)return e;if(null===e||"object"!==t(e)&&"function"!=typeof e)return{default:e};var r=s(o);if(r&&r.has(e))return r.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=n?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}a.default=e,r&&r.set(e,a);return a}(r(16689)),n=d(r(580)),l=d(r(59003)),i=d(r(23831)),c=d(r(46830)),u=["className","src","onClick","clickable","ariaLabel","ariaHidden","replaceToCurrentColor","customColor","data-testid"];function d(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var o=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:o})(e)}function p(){return p=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},p.apply(this,arguments)}function f(e,o){if(null==e)return{};var r,t,a=function(e,o){if(null==e)return{};var r,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||(a[r]=e[r]);return a}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function y(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"currentColor";return e.replace(/fill=".*?"/g,'fill="'.concat(o,'"'))}var m=function(e){var o=e.className,r=e.src,t=e.onClick,n=e.clickable,d=e.ariaLabel,s=e.ariaHidden,m=e.replaceToCurrentColor,b=e.customColor,v=e["data-testid"],g=f(e,u),_=(0,c.default)({isClickable:n,label:d,isDecorationOnly:s}),A=(0,a.useCallback)((function(e){return m?y(e,"currentColor"):b?y(e,b):e}),[m,b]);return"string"!=typeof r?null:a.default.createElement(i.default,p({},_,{onClick:t,src:r,className:(0,l.default)("monday-style-custom-svg-icon--wrapper",o),preProcessor:A},g,{"data-testid":v}))};m.propTypes={className:n.default.string,src:n.default.oneOfType([n.default.string,n.default.object]),ariaLabel:n.default.string,ariaHidden:n.default.bool,replaceToCurrentColor:n.default.bool,customColor:n.default.string},m.defaultProps={className:"",src:"",ariaLabel:void 0,ariaHidden:void 0,replaceToCurrentColor:!1,customColor:void 0},m.__docgenInfo={description:"",methods:[],displayName:"CustomSvgIcon",props:{className:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:""},src:{defaultValue:{value:'""',computed:!1},type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},ariaLabel:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""},ariaHidden:{defaultValue:{value:"undefined",computed:!0},type:{name:"bool"},required:!1,description:""},replaceToCurrentColor:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},customColor:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""}}};var b=m;o.default=b},12816:(e,o,r)=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a,n=function(e,o){if(!o&&e&&e.__esModule)return e;if(null===e||"object"!==t(e)&&"function"!=typeof e)return{default:e};var r=i(o);if(r&&r.has(e))return r.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var c=n?Object.getOwnPropertyDescriptor(e,l):null;c&&(c.get||c.set)?Object.defineProperty(a,l,c):a[l]=e[l]}a.default=e,r&&r.set(e,a);return a}(r(16689)),l=(a=r(59003))&&a.__esModule?a:{default:a};function i(e){if("function"!=typeof WeakMap)return null;var o=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:o})(e)}var c=(0,n.forwardRef)((function(e,o){var r=e.className,t=e.onClick,a=e["aria-label"],i=e.tabIndex,c=e.icon,u=e.role,d=void 0===u?"img":u,s=e["aria-hidden"],p=e["data-testid"],f="function"==typeof c,y=f?"":c;return n.default.createElement("span",{"aria-hidden":s,className:(0,l.default)(r,"fa",y),onClick:t,ref:o,"aria-label":a,tabIndex:i,role:d,"data-testid":p},f&&c())}));c.__docgenInfo={description:"",methods:[],displayName:"FontIcon",props:{role:{defaultValue:{value:'"img"',computed:!1},required:!1}}};var u=c;o.default=u},98396:(e,o,r)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t=function(e,o){if(!o&&e&&e.__esModule)return e;if(null===e||"object"!==y(e)&&"function"!=typeof e)return{default:e};var r=p(o);if(r&&r.has(e))return r.get(e);var t={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var l=a?Object.getOwnPropertyDescriptor(e,n):null;l&&(l.get||l.set)?Object.defineProperty(t,n,l):t[n]=e[n]}t.default=e,r&&r.set(e,t);return t}(r(16689)),a=s(r(580)),n=s(r(59003)),l=r(99634),i=s(r(35614)),c=s(r(12816)),u=s(r(57288)),d=s(r(59347));function s(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var o=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:o})(e)}function f(){return f=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},f.apply(this,arguments)}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}r(77274);var m=(0,t.forwardRef)((function(e,o){var r=e.onClick,a=e.className,s=e.icon,p=e.clickable,m=e.iconLabel,b=e.iconType,v=e.iconSize,g=e.ignoreFocusStyle,_=e.tabindex,A=e.ariaHidden,h=e.style,O=e.useCurrentColor,E=e.customColor,k=e["data-testid"],S=(0,u.default)({onClick:r,iconLabel:m,clickable:p,className:a,isDecorationOnly:A,ignoreFocusStyle:g,externalTabIndex:_}),C=S.screenReaderAccessProps,T=S.onClickCallback,P=S.computedClassName,I=S.iconRef,R=(0,d.default)({refs:[o,I]});if(!s)return null;var j="function"==typeof s;if(b===l.ICON_TYPES.SVG||j||"object"===y(s)){var L=s;return t.default.createElement(L,f({},C,{ref:j?void 0:R,size:v.toString(),onClick:r,className:P,style:h,"data-testid":k}))}return b===l.ICON_TYPES.SRC?t.default.createElement(i.default,f({src:s},C,{className:(0,n.default)(P),onClick:T,style:h,replaceToCurrentColor:O,customColor:E,"data-testid":k})):t.default.createElement(c.default,f({},C,{className:(0,n.default)(P),onClick:T,ref:R,icon:s,style:h,"data-testid":k}))}));m.type=l.ICON_TYPES,m.propTypes={onClick:a.default.func,className:a.default.string,iconType:a.default.oneOf([m.type.SVG,m.type.ICON_FONT,l.ICON_TYPES.SRC]),icon:a.default.oneOfType([a.default.string,a.default.func]),clickable:a.default.bool,iconLabel:a.default.string,iconSize:a.default.oneOfType([a.default.number,a.default.string]),ignoreFocusStyle:a.default.bool,ariaHidden:a.default.bool,useCurrentColor:a.default.bool,customColor:a.default.string},m.defaultProps={onClick:function(){},className:"",icon:"",clickable:!0,iconLabel:void 0,iconType:l.ICON_TYPES.SVG,iconSize:16,ignoreFocusStyle:!1,ariaHidden:void 0,useCurrentColor:!1,customColor:void 0},m.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:""},className:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:"class name to be added to icon"},icon:{defaultValue:{value:'""',computed:!1},type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:"we support three types of icons - SVG, FONT and SRC (classname) so this prop is either the name of the icon or the component"},clickable:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"is in used for tabIndex"},iconLabel:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:"icon aria label support"},iconType:{defaultValue:{value:"ICON_TYPES.SVG",computed:!0},type:{name:"enum",value:[{value:"Icon.type.SVG",computed:!0},{value:"Icon.type.ICON_FONT",computed:!0},{value:"ICON_TYPES.SRC",computed:!0}]},required:!1,description:"the type of the component - svg, font or custom svg (using react-inlinesvg)"},iconSize:{defaultValue:{value:"16",computed:!1},type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1,description:"size for font icon"},ignoreFocusStyle:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"remove focus style"},ariaHidden:{defaultValue:{value:"undefined",computed:!0},type:{name:"bool"},required:!1,description:""},useCurrentColor:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:'when using svg from src (Icon.type.SRC) this boolean will transform the "fill" property to "currentColor"'},customColor:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:"If you want to override to coloring of currentColor"}}};var b=m;o.default=b},99634:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.ICON_TYPES=void 0;o.ICON_TYPES={SVG:"SVG",ICON_FONT:"FA",SRC:"SRC"}},57288:(e,o,r)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){var o=e.onClick,r=e.className,c=e.clickable,d=e.ignoreFocusStyle,p=e.isDecorationOnly,f=e.iconLabel,y=e.externalTabIndex,m=(0,t.useRef)(null),b=(0,t.useCallback)((function(e){document.activeElement===m.current&&o(e)}),[m,o]),v=(0,t.useCallback)((function(e){e.preventDefault()}),[]),g=(0,t.useMemo)((function(){return(0,a.default)("icon_component",r,{"icon_component--clickable":c,"icon_component--no-focus-style":d})}),[c,r,d]);(0,l.default)({eventName:"mousedown",callback:v,ref:m}),(0,i.default)({keys:s,ref:m,callback:b,ignoreDocumentFallback:!0,capture:!0,stopPropagation:!0,preventDefault:!0});var _=(0,t.useCallback)((function(e){(o||n.default)(e)}),[o]),A=(0,u.default)({isClickable:c,label:f,isDecorationOnly:p});return A.tabIndex=null!=y?y:A.tabIndex,{screenReaderAccessProps:A,onClickCallback:_,computedClassName:g,onEnterCallback:b,iconRef:m}};var t=r(16689),a=d(r(59003)),n=d(r(87553)),l=d(r(67167)),i=d(r(37960)),c=r(27324),u=d(r(46830));function d(e){return e&&e.__esModule?e:{default:e}}var s=[c.keyCodes.ENTER,c.keyCodes.SPACE]},27324:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.keyCodes=void 0;o.keyCodes={ENTER:"Enter",SPACE:" "}},34066:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.backwardCompatibilityForProperties=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0,r=e.find((function(e){return void 0!==e}));return r||o}},47507:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.BEMClass=function(e){return function(o){var r=o.element,t=o.state,a=e;return r&&(a="".concat(a,"_").concat(r)),t&&(a="".concat(a,"--").concat(t)),a}}},10481:(e,o,r)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.getClickableIconScreenReaderAccessProps=u,o.getClickableScreenReaderAccessProps=c,o.getIconScreenReaderAccessProps=function(e){var o=e.isClickable,r=e.isDecorationOnly,t=e.isKeyboardAccessible,n=e.label,l=(0,a.default)(r)?!o:r;if(o)return u({label:n,isDecorationOnly:l,isKeyboardAccessible:t});return{role:l?void 0:"img","aria-hidden":l,tabIndex:void 0,"aria-label":r?void 0:n}};var t,a=(t=r(86069))&&t.__esModule?t:{default:t};function n(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?n(Object(r),!0).forEach((function(o){i(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function i(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function c(e){var o=e.isKeyboardAccessible,r=void 0===o||o,t=e.isDecorationOnly;return{role:"button",tabIndex:r?0:-1,"aria-hidden":void 0!==t&&t}}function u(e){var o=e.label,r=e.isDecorationOnly,t=void 0!==r&&r,a=e.isKeyboardAccessible;return l(l({},c({isDecorationOnly:t,isKeyboardAccessible:void 0===a||a})),{},{"aria-label":o})}},67167:(e,o,r)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){var o=e.eventName,r=e.callback,a=e.ref,n=e.capture,l=void 0!==n&&n;(0,t.useEffect)((function(){var e=a&&a.current;if(e){var t={capture:l};return e.addEventListener(o,r,t),function(){e.removeEventListener(o,r,t)}}}),[o,a,r,l])};var t=r(16689)},46830:(e,o,r)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){var o=e.isClickable,r=e.label,n=e.isDecorationOnly;return(0,t.useMemo)((function(){return(0,a.getIconScreenReaderAccessProps)({isClickable:o,label:r,isDecorationOnly:n})}),[o,r,n])};var t=r(16689),a=r(10481)},37960:(e,o,r)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.default=i;var t,a=r(16689),n=(t=r(67167))&&t.__esModule?t:{default:t};var l="ctrlOrMetaKey";function i(e){var o,r=e.keys,t=void 0===r?[]:r,i=e.modifier,c=e.ref,u=e.callback,d=e.ignoreDocumentFallback,s=void 0!==d&&d,p=e.capture,f=void 0!==p&&p,y=e.preventDefault,m=void 0!==y&&y,b=e.stopPropagation,v=void 0!==b&&b,g=e.keyEventName,_=void 0===g?"keydown":g,A=(0,a.useRef)(document),h=(0,a.useCallback)((function(e){var o=e.key;t.includes(o)&&(i&&!function(e,o){return!!e[o]||o===l&&(e.ctrlKey||e.metaKey)}(e,i)||(m&&e.preventDefault(),v&&e.stopPropagation(),u(e)))}),[u,t,m,v,i]);o=c||(s?null:A),(0,n.default)({eventName:_,callback:h,ref:o,capture:f})}i.modifiers={ALT:"altKey",META:"metaKey",CTRL:"ctrlKey",SHIFT:"shiftKey",CTRL_OR_META:l}},59347:(e,o,r)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){var o=e.refs,r=void 0===o?[]:o;return(0,t.useMemo)((function(){return r.every((function(e){return null===e}))?null:function(e){r.forEach((function(o){o&&function(e,o){if(null===e)return;if("function"==typeof e)return void e(o);try{e.current=o}catch(r){throw console.error(r),new Error("Cannot assign value '".concat(o,"' to ref '").concat(e,"'"))}}(o,e)}))}}),[r])};var t=r(16689)},43313:(e,o)=>{function r(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,o){if(!e)return;if("string"==typeof e)return t(e,o);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,o)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,o){(null==o||o>e.length)&&(o=e.length);for(var r=0,t=new Array(o);r<o;r++)t[r]=e[r];return t}Object.defineProperty(o,"__esModule",{value:!0}),o.stateSelectedColors=o.getElementColor=o.elementColorsNames=o.elementAllowedColors=o.contentColorsByName=o.contentColors=o.colorsMap=o.colorsHashMap=o.allMondayColors=o.COLOR_STYLES=void 0;var a=[{color:"--primary-color",description:"Use this to emphasise main ui components"},{color:"--primary-on-secondary-color",description:"Use this to emphasise main ui components on secondary background color"},{color:"--primary-hover-color",description:"Use only as a hover on primary color"},{color:"--primary-hover-on-secondary-color",description:"Use only as a hover on primary color on secondary background color"},{color:"--primary-selected-color",description:"Use this to indicate selected state of primary items"},{color:"--primary-selected-on-secondary-color",description:"Use this to indicate selected state of primary items on secondary background color"},{color:"--primary-text-color",description:"Use for default text color"},{color:"--primary-text-on-secondary-color",description:"Use for default text color on secondary background color"},{color:"--secondary-text-color",description:"Use when you need text with lesser importance"},{color:"--secondary-text-on-secondary-color",description:"Use when you need text with lesser importance (on secondary background color)"},{color:"--primary-background-hover-color",description:"Use as hover color"},{color:"--primary-background-hover-on-secondary-color",description:"Use as hover color on secondary color"},{color:"--inverted-color-background",description:"Inverted background color (opposite of primary background color)"},{color:"--text-color-on-inverted",description:"Inverted text color (opposite of primary text color)"},{color:"--text-color-on-primary",description:"Use for text on primary color"},{color:"--positive-color",description:"Use when you want to indicate sometime positive (success, completion of something...)"},{color:"--positive-color-hover",description:"Use only as hover color on positive color"},{color:"--positive-color-selected",description:"Use only as selected indication for a positive colors"},{color:"--negative-color",description:"Use when you want to indicate a negative action/state (delete, failed action..., error)"},{color:"--negative-color-hover",description:"Use only as hover color on negative color"},{color:"--negative-color-selected",description:"Use as selected indication for negative colors"},{color:"--private-color",description:"Use when you want to indicate that something is private (board, icons...)"},{color:"--shareable-color",description:"Use when you want to indicate that something is shareable (board, dashboard...)"},{color:"--ui-border-color",description:"Border color for ui elements and components (Button, Input...)"},{color:"--ui-border-on-secondary-color",description:"Border color for ui elements on secondary color"},{color:"--layout-border-color",description:"Border color for general layout and separators (Leftpane, Menu Divider...)"},{color:"--layout-border-on-secondary-color",description:"Border color for general layout on secondary background color"},{color:"--placeholder-color",description:"Use for placeholder text in inputs fields"},{color:"--placeholder-on-secondary-color",description:"Use for placeholder text in inputs fields on secondary background color"},{color:"--icon-color",description:"Default color for icons"},{color:"--icon-on-secondary-color",description:"Default color for icons on secondary background color"},{color:"--disabled-background-color",description:"Use as background for disabled elements (ui hovers or elements)"},{color:"--disabled-text-color",description:"Use as text in disabled components"},{color:"--disabled-background-on-secondary-color",description:"Use as background for disabled elements on secondary background"},{color:"--disabled-text-on-secondary-color",description:"Use as text in disabled components on secondary background color"},{color:"--link-color",description:"Use only for links"},{color:"--link-on-secondary-color",description:"Use only for links on secondary colors"},{color:"--primary-background-color",description:"Primary background color"},{color:"--secondary-background-color",description:"Secondary background color"},{color:"--grey-background-color",description:"Grey background color "}];o.colorsMap=a;var n=a.reduce((function(e,o){var r=o.color.substring(2);return e.set(r,o.description),e}),new Map);o.colorsHashMap=n;o.contentColors=["grass_green","done-green","bright-green","saladish","egg_yolk","working_orange","dark-orange","peach","sunset","stuck-red","dark-red","sofia_pink","lipstick","bubble","purple","dark_purple","berry","dark_indigo","indigo","navy","bright-blue","dark-blue","aquamarine","chili-blue","river","winter","explosive","american_gray","blackish","brown","orchid","tan","sky","coffee","royal","teal","lavender","steel","lilac","pecan"];o.COLOR_STYLES={REGULAR:"regular",HOVER:"hover",SELECTED:"selected"};var l={GRASS_GREEN:"grass_green",DONE_GREEN:"done-green",BRIGHT_GREEN:"bright-green",SALADISH:"saladish",EGG_YOLK:"egg_yolk",WORKING_ORANGE:"working_orange",DARK_ORANGE:"dark-orange",PEACH:"peach",SUNSET:"sunset",STUCK_RED:"stuck-red",DARK_RED:"dark-red",SOFIA_PINK:"sofia_pink",LIPSTICK:"lipstick",BUBBLE:"bubble",PURPLE:"purple",DARK_PURPLE:"dark_purple",BERRY:"berry",DARK_INDIGO:"dark_indigo",INDIGO:"indigo",NAVY:"navy",BRIGHT_BLUE:"bright-blue",DARK_BLUE:"dark-blue",AQUAMARINE:"aquamarine",CHILI_BLUE:"chili-blue",RIVER:"river",WINTER:"winter",EXPLOSIVE:"explosive",AMERICAN_GRAY:"american_gray",BLACKISH:"blackish",BROWN:"brown",ORCHID:"orchid",TAN:"tan",SKY:"sky",COFFEE:"coffee",ROYAL:"royal",TEAL:"teal",LAVENDER:"lavender",STEEL:"steel",LILAC:"lilac",PECAN:"pecan"};o.contentColorsByName=l;var i={POSITIVE:"--positive-color-selected",NEGATIVE:"--negative-color-selected",PRIMARY:"--primary-selected-color"};o.stateSelectedColors=i;var c=[].concat(r(Object.keys(l)),r(Object.keys(i)));o.elementAllowedColors=c;var u=c.reduce((function(e,o){return e[o]=o,e}),{});o.elementColorsNames=u;o.getElementColor=function(e){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return l[e]?"var(--color-".concat(l[e]).concat(o?"-selected":""):i[e]&&o?"var(".concat(i[e],")"):e};o.allMondayColors=["--color-asphalt","--color-light_blue","--color-basic_blue","--color-basic_light_blue","--color-dark_blue","--color-link_color","--color-snow_white","--color-success","--color-success-hover","--color-success-highlight","--color-purple","--color-error","--color-error-hover","--color-error-highlight","--color-placholder_gray","--color-wolf_gray","--color-mud_black","--color-jaco_gray","--color-black","--color-dark_purple","--color-blue_links","--color-bazooka","--color-dark_marble","--color-marble","--color-gainsboro","--color-grass_green","--color-jeans","--color-egg_yolk","--color-saladish","--color-lipstick","--color-working_orange","--color-aqua","--color-brown","--color-blackish","--color-explosive","--color-american_gray","--color-highlight_blue","--color-pulse_text_color","--color-highlight","--color-placeholder_light_gray","--color-scrollbar_gray","--color-timeline_grid_blue","--color-timeline_blue","--color-default_group_color","--color-very_light_gray","--color-pulse_bg","--color-jade","--color-form_purple","--color-form_btn_hover","--color-board_views_grey","--color-board_views_blue","--color-board_views_grey_hover","--color-board_views_blue_secondary","--color-brand-blue","--color-brand-charcoal","--color-brand-gold","--color-brand-green","--color-brand-iris","--color-brand-light-blue","--color-brand-malachite","--color-brand-purple","--color-brand-red","--color-public","--color-private","--color-word-blue","--color-ppt-orange","--color-excel-green","--color-pdf-red","--color-zip-orange","--color-media-blue","--color-surface","--color-burned_eggplant","--color-live_blue","--color-extra_light_gray","--color-glitter","--color-ultra_light_gray","--color-red_shadow","--color-green_shadow","--color-storm_gray","--color-riverstone_gray","--color-ui_grey","--color-border_light_gray","--color-like_red","--color-lime-green","--color-mustered","--color-dark_red","--color-dark-red","--color-trolley-grey","--color-dark-purple","--color-dark-orange","--color-sofia_pink","--color-dark-pink","--color-turquoise","--color-light-pink","--color-red-shadow","--color-orange","--color-yellow","--color-green-shadow","--color-grass-green","--color-blue-links","--color-bright-blue","--color-amethyst","--color-green-haze","--color-sunset","--color-bubble","--color-peach","--color-berry","--color-winter","--color-river","--color-navy","--color-aquamarine","--color-indigo","--color-dark_indigo"]},41384:(e,o,r)=>{r.r(o)},73393:(e,o,r)=>{r.r(o)},52817:(e,o,r)=>{r.r(o)},77274:(e,o,r)=>{r.r(o)},59003:e=>{e.exports=require("classnames")},86069:e=>{e.exports=require("lodash/isNil")},87553:e=>{e.exports=require("lodash/noop")},580:e=>{e.exports=require("prop-types")},16689:e=>{e.exports=require("react")},23831:e=>{e.exports=require("react-inlinesvg")}},o={};function r(t){var a=o[t];if(void 0!==a)return a.exports;var n=o[t]={exports:{}};return e[t](n,n.exports,r),n.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t={};return(()=>{var e=t;function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var t=m(r);if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=n?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}a.default=e,t&&t.set(e,a);return a}(r(16689)),n=y(r(86069)),l=y(r(580)),i=y(r(59003)),c=r(47507),u=r(11478),d=r(43313),s=r(50057),p=r(81499);r(41384);var f=r(34066);function y(e){return e&&e.__esModule?e:{default:e}}function m(e){if("function"!=typeof WeakMap)return null;var o=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:o})(e)}function b(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function v(){return v=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},v.apply(this,arguments)}var g="monday-style-avatar",_=(0,c.BEMClass)(g),A=function(e){var o,r=e.type,t=e.className,l=e.size,c=e.src,u=e.icon,y=e.text,m=e.role,A=e.ariaLabel,h=e.backgroundColor,O=e.square,E=e.disabled,k=e.isSquare,S=e.isDisabled,C=e.tabIndex,T=e.ariaHidden,P=e.topLeftBadgeProps,I=e.topRightBadgeProps,R=e.bottomLeftBadgeProps,j=e.bottomRightBadgeProps,L=(0,f.backwardCompatibilityForProperties)([O,k]),N=(0,f.backwardCompatibilityForProperties)([E,S],!1),M=(0,a.useMemo)((function(){return c?void 0:{backgroundColor:(0,d.getElementColor)(h)}}),[c,h]),V=(0,a.useMemo)((function(){var e=[];return(0,n.default)(P)||e.push(a.default.createElement("div",{key:"top-left-badge",className:(0,i.default)(_({element:"badge"}),_({element:"badge",state:"top-left"}))},a.default.createElement(s.AvatarBadge,v({size:l},P)))),(0,n.default)(I)||e.push(a.default.createElement("div",{key:"top-right-badge",className:(0,i.default)(_({element:"badge"}),_({element:"badge",state:"top-right"}))},a.default.createElement(s.AvatarBadge,v({size:l},I)))),(0,n.default)(R)||e.push(a.default.createElement("div",{key:"bottom-left-badge",className:(0,i.default)(_({element:"badge"}),_({element:"badge",state:"bottom-left"}))},a.default.createElement(s.AvatarBadge,v({size:l},R)))),(0,n.default)(j)||e.push(a.default.createElement("div",{key:"bottom-right-bade",className:(0,i.default)(_({element:"badge"}),_({element:"badge",state:"bottom-right"}))},a.default.createElement(s.AvatarBadge,v({size:l},j)))),e.length>0?a.default.createElement("div",{className:(0,i.default)(_({element:"badges"}))},e):null}),[l,P,I,R,j]);return a.default.createElement("div",{className:(0,i.default)(g,t)},a.default.createElement("div",{className:(0,i.default)(_({element:"circle"}),_({element:"circle",state:r}),_({element:"circle",state:l}),(o={},b(o,_({element:"circle",state:"is-disabled"}),N),b(o,_({element:"circle",state:"is-square"}),L),o)),"aria-hidden":T,tabIndex:C,style:M},a.default.createElement(p.AvatarContent,{type:r,size:l,src:c,icon:u,text:y,ariaLabel:A,role:m})),V)};A.types=u.AVATAR_TYPES,A.sizes=u.AVATAR_SIZES,A.colors=d.elementColorsNames,A.backgroundColors=d.elementColorsNames,A.propTypes={src:l.default.oneOfType([l.default.string,l.default.object]),text:l.default.string,icon:l.default.oneOfType([l.default.string,l.default.func]),type:l.default.oneOf([A.types.TEXT,A.types.ICON,A.types.IMG]),className:l.default.string,backgroundColor:l.default.oneOf(Object.values(A.colors)),role:l.default.string,ariaLabel:l.default.string,size:l.default.oneOf([A.sizes.LARGE,A.sizes.MEDIUM,A.sizes.SMALL]),tabIndex:l.default.oneOfType([l.default.number,l.default.string]),ariaHidden:l.default.bool,disabled:l.default.bool,square:l.default.bool,topLeftBadgeProps:l.default.object,topRightBadgeProps:l.default.object,bottomLeftBadgeProps:l.default.object,bottomRightBadgeProps:l.default.object},A.defaultProps={src:void 0,className:"",icon:void 0,text:void 0,type:u.AVATAR_TYPES.TEXT,backgroundColor:d.elementColorsNames.CHILI_BLUE,role:void 0,ariaLabel:void 0,size:u.AVATAR_SIZES.LARGE,tabIndex:0,ariaHidden:!1,disabled:void 0,square:void 0,topLeftBadgeProps:void 0,topRightBadgeProps:void 0,bottomLeftBadgeProps:void 0,bottomRightBadgeProps:void 0},A.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{defaultValue:{value:"undefined",computed:!0},type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},className:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:""},icon:{defaultValue:{value:"undefined",computed:!0},type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:""},text:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""},type:{defaultValue:{value:"AVATAR_TYPES.TEXT",computed:!0},type:{name:"enum",value:[{value:"Avatar.types.TEXT",computed:!0},{value:"Avatar.types.ICON",computed:!0},{value:"Avatar.types.IMG",computed:!0}]},required:!1,description:""},backgroundColor:{defaultValue:{value:"elementColorsNames.CHILI_BLUE",computed:!0},type:{name:"enum",computed:!0,value:"Object.values(Avatar.colors)"},required:!1,description:""},role:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""},ariaLabel:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""},size:{defaultValue:{value:"AVATAR_SIZES.LARGE",computed:!0},type:{name:"enum",value:[{value:"Avatar.sizes.LARGE",computed:!0},{value:"Avatar.sizes.MEDIUM",computed:!0},{value:"Avatar.sizes.SMALL",computed:!0}]},required:!1,description:""},tabIndex:{defaultValue:{value:"0",computed:!1},type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1,description:""},ariaHidden:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},disabled:{defaultValue:{value:"undefined",computed:!0},type:{name:"bool"},required:!1,description:""},square:{defaultValue:{value:"undefined",computed:!0},type:{name:"bool"},required:!1,description:""},topLeftBadgeProps:{defaultValue:{value:"undefined",computed:!0},type:{name:"object"},required:!1,description:""},topRightBadgeProps:{defaultValue:{value:"undefined",computed:!0},type:{name:"object"},required:!1,description:""},bottomLeftBadgeProps:{defaultValue:{value:"undefined",computed:!0},type:{name:"object"},required:!1,description:""},bottomRightBadgeProps:{defaultValue:{value:"undefined",computed:!0},type:{name:"object"},required:!1,description:""}}};var h=A;e.default=h})(),t})()}));