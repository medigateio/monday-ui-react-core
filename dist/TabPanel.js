!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["monday-style"]=t():e["monday-style"]=t()}(this,(function(){return(()=>{"use strict";var e={59347:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.refs,r=void 0===t?[]:t;return(0,n.useMemo)((function(){return r.every((function(e){return null===e}))?null:function(e){r.forEach((function(t){t&&function(e,t){if(null===e)return;if("function"==typeof e)return void e(t);try{e.current=t}catch(r){throw console.error(r),new Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}}(t,e)}))}}),[r])};var n=r(16689)},31836:(e,t,r)=>{r.r(t)},59003:e=>{e.exports=require("classnames")},580:e=>{e.exports=require("prop-types")},16689:e=>{e.exports=require("react")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n](u,u.exports,r),u.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{var e=n;function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==t(e)&&"function"!=typeof e)return{default:e};var n=l(r);if(n&&n.has(e))return n.get(e);var o={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var f=u?Object.getOwnPropertyDescriptor(e,a):null;f&&(f.get||f.set)?Object.defineProperty(o,a,f):o[a]=e[a]}o.default=e,n&&n.set(e,o);return o}(r(16689)),u=i(r(580)),a=i(r(59003)),f=i(r(59347));function i(e){return e&&e.__esModule?e:{default:e}}function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}r(31836);var c=(0,o.forwardRef)((function(e,t){var r=e.className,n=e.id,u=e.children,i=e.index,l=(0,o.useRef)(null),c=(0,f.default)({refs:[t,l]});return o.default.createElement("div",{key:"".concat(n,"_").concat(i),ref:c,className:(0,a.default)("tab-panel--wrapper",r),id:n,role:"tabpanel"},u)}));c.propTypes={className:u.default.string,id:u.default.string},c.defaultProps={className:"",id:""},c.__docgenInfo={description:"",methods:[],displayName:"TabPanel",props:{className:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:""},id:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:""}}};var p=c;e.default=p})(),n})()}));