!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["monday-style"]=t():e["monday-style"]=t()}(this,(function(){return(()=>{"use strict";var e={95468:(e,t,r)=>{function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=b(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(n,u,l):n[u]=e[u]}n.default=e,r&&r.set(e,n);return n}(r(16689)),a=m(r(580)),u=m(r(59003)),l=m(r(55358)),i=m(r(59347));r(58581);var c=r(8744),d=r(59105),s=m(r(98396)),f=m(r(6847)),p=r(59705),y=r(45793);function m(e){return e&&e.__esModule?e:{default:e}}function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(b=function(e){return e?r:t})(e)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var o,n,a=[],u=!0,l=!1;try{for(r=r.call(e);!(u=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);u=!0);}catch(e){l=!0,n=e}finally{try{u||null==r.return||r.return()}finally{if(l)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var S=!!window.MSInputMethodContext&&!!document.documentMode?32:6,T=(0,n.forwardRef)((function(e,t){var r=e.className,o=e.children,a=e.kind,d=e.onClick,m=e.name,b=e.size,g=e.color,T=e.disabled,P=e.rightIcon,_=e.leftIcon,C=e.success,h=e.successText,N=e.successIcon,E=e.style,I=e.loading,M=e.active,k=e.id,R=e.marginRight,j=e.marginLeft,A=e.type,w=e.onMouseDown,B=e.ariaLabel,L=e.rightFlat,D=e.leftFlat,x=e.preventClickAnimation,V=e.noSidePadding,q=e.onFocus,U=e.onBlur,z=e.ariaLabeledBy,F=e.defaultTextColorOnPrimaryColor,Y=e.ariaHasPopup,G=e.ariaExpanded,Z=e.ariaControls,H=e.blurOnMouseUp,K=(0,n.useRef)(null),W=O((0,n.useState)(!1),2),X=W[0],$=W[1],J=(0,n.useMemo)((function(){return function(e){var t=e.borderBoxSize,r=t.blockSize,o=t.inlineSize,n=Math.max(o,S),a=Math.max(r,S);K.current&&(K.current.style.setProperty("--element-width","".concat(n,"px")),K.current.style.setProperty("--element-height","".concat(a,"px")),$(!0))}}),[K]);(0,l.default)({ref:K,callback:J,debounceTime:200}),(0,n.useEffect)((function(){if(g===c.BUTTON_COLORS.ON_PRIMARY_COLOR&&a===c.BUTTON_TYPES.PRIMARY&&K.current){var e=K.current;e.style.color=(0,y.getParentBackgroundColorNotTransparent)(e,F)}}),[a,K,g,F]);var Q=(0,n.useCallback)((function(){var e=K.current;e&&H&&e.blur()}),[K,H]),ee=(0,n.useCallback)((function(e){T||I||C?e.preventDefault():d&&d(e)}),[d,T,I,C]),te=(0,n.useCallback)((function(e){T||I||C?e.preventDefault():w&&w(e)}),[w,T,I,C]),re=(0,n.useMemo)((function(){var e,t=C?c.BUTTON_COLORS.POSITIVE:g;return(0,u.default)(r,"monday-style-button","monday-style-button--size-".concat((0,c.getActualSize)(b)),"monday-style-button--kind-".concat(a),"monday-style-button--color-".concat(t),(v(e={"has-style-size":X,"monday-style-button--loading":I},"monday-style-button--color-".concat(t,"-active"),M),v(e,"monday-style-button--margin-right",R),v(e,"monday-style-button--margin-left",j),v(e,"monday-style-button--right-flat",L),v(e,"monday-style-button--left-flat",D),v(e,"monday-style-button--prevent-click-animation",x),v(e,"monday-style-button--no-side-padding",V),e))}),[b,a,g,r,C,I,M,R,j,V,x,D,L,X]),oe=(0,i.default)({refs:[t,K]}),ne=(0,n.useMemo)((function(){return{disabled:T,ref:oe,type:A,className:re,name:m,onMouseUp:Q,style:E,onClick:ee,id:k,onFocus:q,onBlur:U,onMouseDown:te,"aria-disabled":T,"aria-labelledby":z,"aria-label":B,"aria-busy":I?"true":void 0,"aria-haspopup":Y,"aria-expanded":G,"aria-controls":Z}}),[T,re,m,Q,E,ee,k,A,te,B,I,q,U,oe,z,Z,G,Y]),ae=(0,n.useMemo)((function(){if("function"==typeof _)return b===p.SIZES.SMALL?"20":(p.SIZES.MEDIUM,"24")}),[_,b]),ue=(0,n.useMemo)((function(){if("function"==typeof P)return b===p.SIZES.SMALL?"20":(p.SIZES.MEDIUM,"24")}),[P,b]),le=(0,n.useMemo)((function(){if("function"==typeof N)return b===p.SIZES.SMALL?"20":(p.SIZES.MEDIUM,"24")}),[N,b]);return I?n.default.createElement("button",ne,n.default.createElement("span",{className:"monday-style-button__loader"},n.default.createElement(f.default,{svgClassName:"monday-style-button-loader-svg"}))):C?n.default.createElement("button",ne,N?n.default.createElement(s.default,{iconType:s.default.type.ICON_FONT,clickable:!1,icon:N,iconSize:le,className:(0,u.default)({"monday-style-button--left-icon":!!h}),ignoreFocusStyle:!0}):null,h):n.default.createElement("button",ne,_?n.default.createElement(s.default,{iconType:s.default.type.ICON_FONT,clickable:!1,icon:_,iconSize:ae,className:(0,u.default)({"monday-style-button--left-icon":!!o}),ignoreFocusStyle:!0}):null,o,P?n.default.createElement(s.default,{iconType:s.default.type.ICON_FONT,clickable:!1,icon:P,iconSize:ue,className:(0,u.default)({"monday-style-button--right-icon":!!o}),ignoreFocusStyle:!0}):null)}));T.sizes=p.SIZES,T.colors=c.BUTTON_COLORS,T.kinds=c.BUTTON_TYPES,T.types=c.BUTTON_INPUT_TYPE,T.inputTags=c.BUTTON_INPUT_TYPE,T.propTypes={className:a.default.string,kind:a.default.oneOf([T.kinds.PRIMARY,T.kinds.SECONDARY,T.kinds.TERTIARY]),onClick:a.default.func,onMouseDown:a.default.func,blurOnMouseUp:a.default.bool,name:a.default.string,size:a.default.oneOf([T.sizes.SMALL,T.sizes.MEDIUM,T.sizes.LARGE]),color:a.default.oneOf([T.colors.PRIMARY,T.colors.NEGATIVE,T.colors.POSITIVE,T.colors.ON_PRIMARY_COLOR,T.colors.ON_INVERTED_BACKGROUND]),type:a.default.oneOf([T.inputTags.BUTTON,T.inputTags.SUBMIT,T.inputTags.RESET]),disabled:a.default.bool,rightIcon:a.default.oneOfType([a.default.string,a.default.func]),leftIcon:a.default.oneOfType([a.default.string,a.default.func]),success:a.default.bool,successIcon:a.default.oneOfType([a.default.string,a.default.func]),successText:a.default.string,loading:a.default.bool,style:a.default.object,active:a.default.bool,id:a.default.string,marginRight:a.default.bool,marginLeft:a.default.bool,ariaLabeledBy:a.default.string,ariaLabel:a.default.string,ariaHasPopup:a.default.oneOfType([a.default.string,a.default.bool]),ariaExpanded:a.default.bool,ariaControls:a.default.string,onFocus:a.default.func,onBlur:a.default.func,rightFlat:a.default.bool,leftFlat:a.default.bool,preventClickAnimation:a.default.bool,noSidePadding:a.default.bool,defaultTextColorOnPrimaryColor:a.default.string},T.defaultProps={kind:c.BUTTON_TYPES.PRIMARY,onClick:d.NOOP,onMouseDown:d.NOOP,blurOnMouseUp:!0,name:void 0,style:void 0,size:p.SIZES.MEDIUM,color:c.BUTTON_COLORS.PRIMARY,disabled:!1,className:"",rightIcon:null,leftIcon:null,successIcon:"",successText:"",success:!1,loading:!1,active:!1,id:void 0,marginRight:!1,marginLeft:!1,type:c.BUTTON_INPUT_TYPE.BUTTON,rightFlat:!1,leftFlat:!1,preventClickAnimation:!1,noSidePadding:!1,onFocus:d.NOOP,onBlur:d.NOOP,defaultTextColorOnPrimaryColor:y.TRANSPARENT_COLOR,ariaHasPopup:void 0,ariaExpanded:void 0,ariaControls:void 0,ariaLabel:void 0,ariaLabeledBy:void 0},T.__docgenInfo={description:"",methods:[],displayName:"Button",props:{kind:{defaultValue:{value:"BUTTON_TYPES.PRIMARY",computed:!0},type:{name:"enum",value:[{value:"Button.kinds.PRIMARY",computed:!0},{value:"Button.kinds.SECONDARY",computed:!0},{value:"Button.kinds.TERTIARY",computed:!0}]},required:!1,description:"The kind of a button is exposed on the component"},onClick:{defaultValue:{value:"NOOP",computed:!0},type:{name:"func"},required:!1,description:""},onMouseDown:{defaultValue:{value:"NOOP",computed:!0},type:{name:"func"},required:!1,description:""},blurOnMouseUp:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"Blur on button click"},name:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:"Name of the button - for form submit usages"},style:{defaultValue:{value:"undefined",computed:!0},type:{name:"object"},required:!1,description:""},size:{defaultValue:{value:"SIZES.MEDIUM",computed:!0},type:{name:"enum",value:[{value:"Button.sizes.SMALL",computed:!0},{value:"Button.sizes.MEDIUM",computed:!0},{value:"Button.sizes.LARGE",computed:!0}]},required:!1,description:"The size of a button is exposed on the component"},color:{defaultValue:{value:"BUTTON_COLORS.PRIMARY",computed:!0},type:{name:"enum",value:[{value:"Button.colors.PRIMARY",computed:!0},{value:"Button.colors.NEGATIVE",computed:!0},{value:"Button.colors.POSITIVE",computed:!0},{value:"Button.colors.ON_PRIMARY_COLOR",computed:!0},{value:"Button.colors.ON_INVERTED_BACKGROUND",computed:!0}]},required:!1,description:"The color of a button is exposed on the component"},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Disabled property which causes the button to be disabled"},className:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:""},rightIcon:{defaultValue:{value:"null",computed:!1},type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:"Icon to place on the right"},leftIcon:{defaultValue:{value:"null",computed:!1},type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:"Icon to place on the left"},successIcon:{defaultValue:{value:'""',computed:!1},type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:"Success icon name"},successText:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:"Success text"},success:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"the success props are used when you have async action and wants to display a success message"},loading:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"loading boolean which switches the text to a loader"},active:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"displays the active state"},id:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:"id to pass to the button"},marginRight:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"adds 8px margin to the right"},marginLeft:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"adds 8px margin to the left"},type:{defaultValue:{value:"BUTTON_INPUT_TYPE.BUTTON",computed:!0},type:{name:"enum",value:[{value:"Button.inputTags.BUTTON",computed:!0},{value:"Button.inputTags.SUBMIT",computed:!0},{value:"Button.inputTags.RESET",computed:!0}]},required:!1,description:"The type of a button is exposed on the component"},rightFlat:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},leftFlat:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},preventClickAnimation:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},noSidePadding:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},onFocus:{defaultValue:{value:"NOOP",computed:!0},type:{name:"func"},required:!1,description:"On Button Focus callback"},onBlur:{defaultValue:{value:"NOOP",computed:!0},type:{name:"func"},required:!1,description:"On Button Blur callback"},defaultTextColorOnPrimaryColor:{defaultValue:{value:"TRANSPARENT_COLOR",computed:!0},type:{name:"string"},required:!1,description:"default color for text color in ON_PRIMARY_COLOR kind (should be any type of css color (rbg, var, hex...)"},ariaHasPopup:{defaultValue:{value:"undefined",computed:!0},type:{name:"union",value:[{name:"string"},{name:"bool"}]},required:!1,description:"aria for a button popup"},ariaExpanded:{defaultValue:{value:"undefined",computed:!0},type:{name:"bool"},required:!1,description:"aria to be set if the popup is open"},ariaControls:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:"aria controls - receives id for the controlled region"},ariaLabel:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:"aria label to provide important when providing only Icon"},ariaLabeledBy:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:"element id to describe the button accordingly"}}};var P=T;t.default=P},8744:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getActualSize=t.BUTTON_TYPES=t.BUTTON_KIND_CLASS_NAMES=t.BUTTON_INPUT_TYPE=t.BUTTON_COLORS=void 0;var o=r(59705);t.BUTTON_TYPES={PRIMARY:"primary",SECONDARY:"secondary",TERTIARY:"tertiary"};t.BUTTON_COLORS={PRIMARY:"primary",POSITIVE:"positive",NEGATIVE:"negative",ON_PRIMARY_COLOR:"on-primary-color",ON_INVERTED_BACKGROUND:"on-inverted-background"};var n={sm:o.SIZES.SMALL,md:o.SIZES.MEDIUM,lg:o.SIZES.LARGE};t.getActualSize=function(e){return n[e]||e};t.BUTTON_KIND_CLASS_NAMES={PRIMARY:""};t.BUTTON_INPUT_TYPE={BUTTON:"button",SUBMIT:"submit",RESET:"reset"}},45793:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TRANSPARENT_COLOR=void 0,t.getParentBackgroundColorNotTransparent=function e(t,o){var n=t.parentElement;if(t===t.parentElement)return t?window.getComputedStyle(t).backgroundColor:o;if(!n)return o;var a=window.getComputedStyle(n).backgroundColor;if(!a||a===o)return e(n,o);return a===r?o:a};var r="rgba(0, 0, 0, 0)";t.TRANSPARENT_COLOR=r},35614:(e,t,r)=>{function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(n,u,l):n[u]=e[u]}n.default=e,r&&r.set(e,n);return n}(r(16689)),a=d(r(580)),u=d(r(59003)),l=d(r(23831)),i=d(r(46830)),c=["className","src","onClick","clickable","ariaLabel","ariaHidden","replaceToCurrentColor","customColor","data-testid"];function d(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},f.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"currentColor";return e.replace(/fill=".*?"/g,'fill="'.concat(t,'"'))}var m=function(e){var t=e.className,r=e.src,o=e.onClick,a=e.clickable,d=e.ariaLabel,s=e.ariaHidden,m=e.replaceToCurrentColor,b=e.customColor,v=e["data-testid"],O=p(e,c),g=(0,i.default)({isClickable:a,label:d,isDecorationOnly:s}),S=(0,n.useCallback)((function(e){return m?y(e,"currentColor"):b?y(e,b):e}),[m,b]);return"string"!=typeof r?null:n.default.createElement(l.default,f({},g,{onClick:o,src:r,className:(0,u.default)("monday-style-custom-svg-icon--wrapper",t),preProcessor:S},O,{"data-testid":v}))};m.propTypes={className:a.default.string,src:a.default.oneOfType([a.default.string,a.default.object]),ariaLabel:a.default.string,ariaHidden:a.default.bool,replaceToCurrentColor:a.default.bool,customColor:a.default.string},m.defaultProps={className:"",src:"",ariaLabel:void 0,ariaHidden:void 0,replaceToCurrentColor:!1,customColor:void 0},m.__docgenInfo={description:"",methods:[],displayName:"CustomSvgIcon",props:{className:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:""},src:{defaultValue:{value:'""',computed:!1},type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},ariaLabel:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""},ariaHidden:{defaultValue:{value:"undefined",computed:!0},type:{name:"bool"},required:!1,description:""},replaceToCurrentColor:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},customColor:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""}}};var b=m;t.default=b},12816:(e,t,r)=>{function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}n.default=e,r&&r.set(e,n);return n}(r(16689)),u=(n=r(59003))&&n.__esModule?n:{default:n};function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}var i=(0,a.forwardRef)((function(e,t){var r=e.className,o=e.onClick,n=e["aria-label"],l=e.tabIndex,i=e.icon,c=e.role,d=void 0===c?"img":c,s=e["aria-hidden"],f=e["data-testid"],p="function"==typeof i,y=p?"":i;return a.default.createElement("span",{"aria-hidden":s,className:(0,u.default)(r,"fa",y),onClick:o,ref:t,"aria-label":n,tabIndex:l,role:d,"data-testid":f},p&&i())}));i.__docgenInfo={description:"",methods:[],displayName:"FontIcon",props:{role:{defaultValue:{value:'"img"',computed:!1},required:!1}}};var c=i;t.default=c},98396:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==y(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=n?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}o.default=e,r&&r.set(e,o);return o}(r(16689)),n=s(r(580)),a=s(r(59003)),u=r(99634),l=s(r(35614)),i=s(r(12816)),c=s(r(57288)),d=s(r(59347));function s(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},p.apply(this,arguments)}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}r(77274);var m=(0,o.forwardRef)((function(e,t){var r=e.onClick,n=e.className,s=e.icon,f=e.clickable,m=e.iconLabel,b=e.iconType,v=e.iconSize,O=e.ignoreFocusStyle,g=e.tabindex,S=e.ariaHidden,T=e.style,P=e.useCurrentColor,_=e.customColor,C=e["data-testid"],h=(0,c.default)({onClick:r,iconLabel:m,clickable:f,className:n,isDecorationOnly:S,ignoreFocusStyle:O,externalTabIndex:g}),N=h.screenReaderAccessProps,E=h.onClickCallback,I=h.computedClassName,M=h.iconRef,k=(0,d.default)({refs:[t,M]});if(!s)return null;var R="function"==typeof s;if(b===u.ICON_TYPES.SVG||R||"object"===y(s)){var j=s;return o.default.createElement(j,p({},N,{ref:R?void 0:k,size:v.toString(),onClick:r,className:I,style:T,"data-testid":C}))}return b===u.ICON_TYPES.SRC?o.default.createElement(l.default,p({src:s},N,{className:(0,a.default)(I),onClick:E,style:T,replaceToCurrentColor:P,customColor:_,"data-testid":C})):o.default.createElement(i.default,p({},N,{className:(0,a.default)(I),onClick:E,ref:k,icon:s,style:T,"data-testid":C}))}));m.type=u.ICON_TYPES,m.propTypes={onClick:n.default.func,className:n.default.string,iconType:n.default.oneOf([m.type.SVG,m.type.ICON_FONT,u.ICON_TYPES.SRC]),icon:n.default.oneOfType([n.default.string,n.default.func]),clickable:n.default.bool,iconLabel:n.default.string,iconSize:n.default.oneOfType([n.default.number,n.default.string]),ignoreFocusStyle:n.default.bool,ariaHidden:n.default.bool,useCurrentColor:n.default.bool,customColor:n.default.string},m.defaultProps={onClick:function(){},className:"",icon:"",clickable:!0,iconLabel:void 0,iconType:u.ICON_TYPES.SVG,iconSize:16,ignoreFocusStyle:!1,ariaHidden:void 0,useCurrentColor:!1,customColor:void 0},m.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:""},className:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:"class name to be added to icon"},icon:{defaultValue:{value:'""',computed:!1},type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:"we support three types of icons - SVG, FONT and SRC (classname) so this prop is either the name of the icon or the component"},clickable:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"is in used for tabIndex"},iconLabel:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:"icon aria label support"},iconType:{defaultValue:{value:"ICON_TYPES.SVG",computed:!0},type:{name:"enum",value:[{value:"Icon.type.SVG",computed:!0},{value:"Icon.type.ICON_FONT",computed:!0},{value:"ICON_TYPES.SRC",computed:!0}]},required:!1,description:"the type of the component - svg, font or custom svg (using react-inlinesvg)"},iconSize:{defaultValue:{value:"16",computed:!1},type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1,description:"size for font icon"},ignoreFocusStyle:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"remove focus style"},ariaHidden:{defaultValue:{value:"undefined",computed:!0},type:{name:"bool"},required:!1,description:""},useCurrentColor:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:'when using svg from src (Icon.type.SRC) this boolean will transform the "fill" property to "currentColor"'},customColor:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:"If you want to override to coloring of currentColor"}}};var b=m;t.default=b},99634:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ICON_TYPES=void 0;t.ICON_TYPES={SVG:"SVG",ICON_FONT:"FA",SRC:"SRC"}},57288:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.onClick,r=e.className,i=e.clickable,d=e.ignoreFocusStyle,f=e.isDecorationOnly,p=e.iconLabel,y=e.externalTabIndex,m=(0,o.useRef)(null),b=(0,o.useCallback)((function(e){document.activeElement===m.current&&t(e)}),[m,t]),v=(0,o.useCallback)((function(e){e.preventDefault()}),[]),O=(0,o.useMemo)((function(){return(0,n.default)("icon_component",r,{"icon_component--clickable":i,"icon_component--no-focus-style":d})}),[i,r,d]);(0,u.default)({eventName:"mousedown",callback:v,ref:m}),(0,l.default)({keys:s,ref:m,callback:b,ignoreDocumentFallback:!0,capture:!0,stopPropagation:!0,preventDefault:!0});var g=(0,o.useCallback)((function(e){(t||a.default)(e)}),[t]),S=(0,c.default)({isClickable:i,label:p,isDecorationOnly:f});return S.tabIndex=null!=y?y:S.tabIndex,{screenReaderAccessProps:S,onClickCallback:g,computedClassName:O,onEnterCallback:b,iconRef:m}};var o=r(16689),n=d(r(59003)),a=d(r(87553)),u=d(r(67167)),l=d(r(37960)),i=r(27324),c=d(r(46830));function d(e){return e&&e.__esModule?e:{default:e}}var s=[i.keyCodes.ENTER,i.keyCodes.SPACE]},6847:(e,t,r)=>{function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(n,u,l):n[u]=e[u]}n.default=e,r&&r.set(e,n);return n}(r(16689)),u=(n=r(580))&&n.__esModule?n:{default:n};r(4374);var l=r(34066);function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}var c=(0,a.forwardRef)((function(e,t){var r=e.svgClassName,o=e.className,n=e.size,u=e.id,i=(0,l.backwardCompatibilityForProperties)([o,r],""),c=(0,a.useMemo)((function(){if("number"==typeof n)return{width:n,height:n}}),[n]);return a.default.createElement("div",{className:"monday-loader-component",ref:t,role:"alert",title:"loading",style:c,id:u},a.default.createElement("svg",{className:"circle-loader-spinner ".concat(i),viewBox:"0 0 50 50"},a.default.createElement("circle",{className:"circle-loader-spinner-path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"})))}));c.propTypes={id:u.default.string,className:u.default.string,size:u.default.number},c.defaultProps={id:void 0,className:void 0,size:void 0},c.__docgenInfo={description:"",methods:[],displayName:"Loader",props:{id:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""},size:{defaultValue:{value:"undefined",computed:!0},type:{name:"number"},required:!1,description:"The containing box of the loader"}}};var d=c;t.default=d},27324:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.keyCodes=void 0;t.keyCodes={ENTER:"Enter",SPACE:" "}},59705:(e,t)=>{function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.SIZES=t.PASCAL_BASE_SIZE=t.DialogPositions=t.BASE_SIZES=void 0;var n=Object.freeze({SMALL:"Small",MEDIUM:"Medium",LARGE:"Large"});t.PASCAL_BASE_SIZE=n;var a=Object.freeze({SMALL:"small",MEDIUM:"medium",LARGE:"large"});t.BASE_SIZES=a;var u=Object.freeze(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({XXS:"xxs",XS:"xs"},a));t.SIZES=u;var l=Object.freeze({LEFT:"left",LEFT_START:"left-start",LEFT_END:"left-end",RIGHT:"right",RIGHT_START:"right-start",RIGHT_END:"right-end",TOP:"top",TOP_START:"top-start",TOP_END:"top-end",BOTTOM:"bottom",BOTTOM_START:"bottom-start",BOTTOM_END:"bottom-end"});t.DialogPositions=l},34066:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.backwardCompatibilityForProperties=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=e.find((function(e){return void 0!==e}));return r||t}},10481:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getClickableIconScreenReaderAccessProps=c,t.getClickableScreenReaderAccessProps=i,t.getIconScreenReaderAccessProps=function(e){var t=e.isClickable,r=e.isDecorationOnly,o=e.isKeyboardAccessible,a=e.label,u=(0,n.default)(r)?!t:r;if(t)return c({label:a,isDecorationOnly:u,isKeyboardAccessible:o});return{role:u?void 0:"img","aria-hidden":u,tabIndex:void 0,"aria-label":r?void 0:a}};var o,n=(o=r(86069))&&o.__esModule?o:{default:o};function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){var t=e.isKeyboardAccessible,r=void 0===t||t,o=e.isDecorationOnly;return{role:"button",tabIndex:r?0:-1,"aria-hidden":void 0!==o&&o}}function c(e){var t=e.label,r=e.isDecorationOnly,o=void 0!==r&&r,n=e.isKeyboardAccessible;return u(u({},i({isDecorationOnly:o,isKeyboardAccessible:void 0===n||n})),{},{"aria-label":t})}},67167:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.eventName,r=e.callback,n=e.ref,a=e.capture,u=void 0!==a&&a;(0,o.useEffect)((function(){var e=n&&n.current;if(e){var o={capture:u};return e.addEventListener(t,r,o),function(){e.removeEventListener(t,r,o)}}}),[t,n,r,u])};var o=r(16689)},46830:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.isClickable,r=e.label,a=e.isDecorationOnly;return(0,o.useMemo)((function(){return(0,n.getIconScreenReaderAccessProps)({isClickable:t,label:r,isDecorationOnly:a})}),[t,r,a])};var o=r(16689),n=r(10481)},37960:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var o,n=r(16689),a=(o=r(67167))&&o.__esModule?o:{default:o};var u="ctrlOrMetaKey";function l(e){var t,r=e.keys,o=void 0===r?[]:r,l=e.modifier,i=e.ref,c=e.callback,d=e.ignoreDocumentFallback,s=void 0!==d&&d,f=e.capture,p=void 0!==f&&f,y=e.preventDefault,m=void 0!==y&&y,b=e.stopPropagation,v=void 0!==b&&b,O=e.keyEventName,g=void 0===O?"keydown":O,S=(0,n.useRef)(document),T=(0,n.useCallback)((function(e){var t=e.key;o.includes(t)&&(l&&!function(e,t){return!!e[t]||t===u&&(e.ctrlKey||e.metaKey)}(e,l)||(m&&e.preventDefault(),v&&e.stopPropagation(),c(e)))}),[c,o,m,v,l]);t=i||(s?null:S),(0,a.default)({eventName:g,callback:T,ref:t,capture:p})}l.modifiers={ALT:"altKey",META:"metaKey",CTRL:"ctrlKey",SHIFT:"shiftKey",CTRL_OR_META:u}},59347:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.refs,r=void 0===t?[]:t;return(0,o.useMemo)((function(){return r.every((function(e){return null===e}))?null:function(e){r.forEach((function(t){t&&function(e,t){if(null===e)return;if("function"==typeof e)return void e(t);try{e.current=t}catch(r){throw console.error(r),new Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}}(t,e)}))}}),[r])};var o=r(16689)},55358:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.ref,r=e.callback,o=e.debounceTime,u=void 0===o?200:o,l=(0,n.useMemo)((function(){return 0===u?r:(0,a.default)(r,u)}),[r,u]);(0,n.useEffect)((function(){if(!window.ResizeObserver)return function(){};if(t.current){var e=function(e){return window.requestAnimationFrame((function(){l({borderBoxSize:e})}))},r=null,o=new ResizeObserver((function(t){var o=t[0];if(o&&o.borderBoxSize){var n=o.borderBoxSize.length>0?o.borderBoxSize[0]:o.borderBoxSize;r=e(n)}else{if(!o.contentRect)return function(){};var a,u={blockSize:o.contentRect.height,inlineSize:(null==o||null===(a=o.contentRect)||void 0===a?void 0:a.width)||0};r=e(u)}}));return o.observe(t.current),function(){0!==u&&l.cancel(),r&&window.cancelAnimationFrame(r),o.disconnect()}}}),[t.current,r,u,l])};var o,n=r(16689),a=(o=r(93908))&&o.__esModule?o:{default:o}},59105:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NOOP=function(){},t.chainFunctions=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(r){for(var o=0;o<e.length;o++){var n=e[o];try{if(!1===(n&&n(r))&&t)return}catch(e){return void console.error(e)}}}},t.chainRefFunctions=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(r){for(var o=0;o<e.length;o++){var a=e[o];try{var u=void 0;if((0,n.default)(a)?u=a(r):a&&(a.current=r),!1===u&&t)return}catch(e){return void console.error(e)}}}},t.convertToArray=function(e){return(0,o.default)(e)?e:[e]};var o=a(r(35599)),n=a(r(25716));function a(e){return e&&e.__esModule?e:{default:e}}},69849:(e,t,r)=>{r.r(t)},58581:(e,t,r)=>{r.r(t)},77274:(e,t,r)=>{r.r(t)},4374:(e,t,r)=>{r.r(t)},59003:e=>{e.exports=require("classnames")},93908:e=>{e.exports=require("lodash/debounce")},35599:e=>{e.exports=require("lodash/isArray")},25716:e=>{e.exports=require("lodash/isFunction")},86069:e=>{e.exports=require("lodash/isNil")},87553:e=>{e.exports=require("lodash/noop")},580:e=>{e.exports=require("prop-types")},16689:e=>{e.exports=require("react")},23831:e=>{e.exports=require("react-inlinesvg")}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=i(r(16689)),n=i(r(59003)),a=i(r(580)),u=i(r(95468));r(69849);var l=["marginLeft","isDarkBackground"];function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},f.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var y=function(e){var r=e.marginLeft,o=e.isDarkBackground,a=p(e,l),i=(0,n.default)({"monday-style-alert-banner-button-margin-left":r,"monday-style-alert-banner-button-dark-background":o});return t.default.createElement("div",{className:i},t.default.createElement(u.default,f({},a,{size:u.default.sizes.SMALL,className:"monday-style-alert-banner-button",color:u.default.colors.ON_PRIMARY_COLOR})))};y.isAlertBannerItem=!0;var m=u.default.propTypes,b=(m.size,p(m,["size"]));y.propTypes=d(d({},b),{},{marginLeft:a.default.bool,isDarkBackground:a.default.bool});var v=u.default.defaultProps,O=(v.size,p(v,["size"]));y.defaultProps=d(d({},O),{},{marginLeft:!1,isDarkBackground:!1}),y.__docgenInfo={description:"",methods:[],displayName:"AlertBannerButton",props:{marginLeft:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"adds 8px margin to the left"},isDarkBackground:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""}}};var g=y;e.default=g})(),o})()}));