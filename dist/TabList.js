!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["monday-style"]=t():e["monday-style"]=t()}(this,(function(){return(()=>{"use strict";var e={59347:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.refs,r=void 0===t?[]:t;return(0,n.useMemo)((function(){return r.every((function(e){return null===e}))?null:function(e){r.forEach((function(t){t&&function(e,t){if(null===e)return;if("function"==typeof e)return void e(t);try{e.current=t}catch(r){throw console.error(r),new Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}}(t,e)}))}}),[r])};var n=r(16689)},94571:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,n.useRef)();return(0,n.useLayoutEffect)((function(){t.current=e})),t.current};var n=r(16689)},79449:(e,t,r)=>{r.r(t)},44533:e=>{e.exports=require("@react-aria/interactions")},59003:e=>{e.exports=require("classnames")},580:e=>{e.exports=require("prop-types")},16689:e=>{e.exports=require("react")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n](u,u.exports,r),u.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{var e=n;function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==t(e)&&"function"!=typeof e)return{default:e};var n=s(r);if(n&&n.has(e))return n.get(e);var o={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=u?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(o,a,i):o[a]=e[a]}o.default=e,n&&n.set(e,o);return o}(r(16689)),u=c(r(580)),a=c(r(59003)),i=r(44533),l=c(r(59347)),f=c(r(94571));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);a=!0);}catch(e){i=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return u}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r(79449);var b=(0,o.forwardRef)((function(e,t){var r=e.className,n=e.id,u=e.onTabChange,c=e.activeTabId,s=e.tabType,y=e.size,b=e.children,m=(0,o.useRef)(null),v=(0,l.default)({refs:[t,m]}),h=p((0,o.useState)(c),2),g=h[0],j=h[1],O=p((0,o.useState)(-1),2),S=O[0],T=O[1],w=(0,f.default)(c);(0,o.useEffect)((function(){c!==w&&c!==g&&j(c)}),[c,w,g,j]);var C=(0,o.useMemo)((function(){var e=new Set;return o.default.Children.forEach(b,(function(t,r){t.props.disabled&&e.add(r)})),e}),[b]),x=(0,o.useCallback)((function(e){C.has(e)||(j(e),u&&u(e))}),[u,C]),M=(0,o.useCallback)((function(e,t){C.has(e)||(t&&t(e),x(e),T(-1))}),[x,C,T]);var P=(0,i.useKeyboard)({onKeyDown:function(e){var t,r;t=e.keyCode,r=S,37!==t&&39!==t||r<0&&(r=g),37===t&&r>0?T(r-1):39===t&&r<b.length-1?T(r+1):13!==t&&32!==t||x(S)},onKeyUp:function(e){}}).keyboardProps,_=(0,i.useFocusWithin)({onFocusWithin:function(){T(g)},onBlurWithin:function(){T(-1)}}).focusWithinProps,q=(0,o.useMemo)((function(){return o.default.Children.map(b,(function(e,t){return o.default.cloneElement(e,{value:t,active:g===t,focus:S===t,onClick:function(t){return M(t,e.props.onClick)}})}))}),[M,b,g,S]);return o.default.createElement("div",{ref:v,className:(0,a.default)("tabs--wrapper",r,s),id:n},o.default.createElement("ul",d({tabIndex:0},P,_,{className:(0,a.default)("tabs-list",y),role:"tablist"}),q))}));b.propTypes={className:u.default.string,id:u.default.string,onTabChange:u.default.func,activeTabId:u.default.number,tabType:u.default.string,size:u.default.string},b.defaultProps={className:"",id:"",onTabChange:function(){},activeTabId:0,tabType:"Compact",size:void 0},b.isTabList=!0,b.__docgenInfo={description:"",methods:[],displayName:"TabList",props:{className:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:""},id:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:""},onTabChange:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:""},activeTabId:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:""},tabType:{defaultValue:{value:'"Compact"',computed:!1},type:{name:"string"},required:!1,description:""},size:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""}}};var m=b;e.default=m})(),n})()}));