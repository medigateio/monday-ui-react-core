!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["monday-style"]=t():e["monday-style"]=t()}(this,(function(){return(()=>{"use strict";var e={59347:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.refs,r=void 0===t?[]:t;return(0,n.useMemo)((function(){return r.every((function(e){return null===e}))?null:function(e){r.forEach((function(t){t&&function(e,t){if(null===e)return;if("function"==typeof e)return void e(t);try{e.current=t}catch(r){throw console.error(r),new Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}}(t,e)}))}}),[r])};var n=r(16689)},62489:(e,t,r)=>{r.r(t)},59003:e=>{e.exports=require("classnames")},580:e=>{e.exports=require("prop-types")},16689:e=>{e.exports=require("react")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n](u,u.exports,r),u.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{var e=n;function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==t(e)&&"function"!=typeof e)return{default:e};var n=l(r);if(n&&n.has(e))return n.get(e);var o={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=u?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(o,a,i):o[a]=e[a]}o.default=e,n&&n.set(e,o);return o}(r(16689)),u=f(r(580)),a=f(r(59003)),i=f(r(59347));function f(e){return e&&e.__esModule?e:{default:e}}function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}r(62489);var d=(0,o.forwardRef)((function(e,t){var r=e.className,n=e.text,u=e.id,f=(0,o.useRef)(null),l=(0,i.default)({refs:[t,f]});return o.default.createElement("span",{ref:l,id:u,className:(0,a.default)("hidden-text--wrapper",r)},n)}));d.propTypes={className:u.default.string,id:u.default.string,text:u.default.string.isRequired},d.defaultProps={className:"",id:"hiddenText"},d.__docgenInfo={description:"",methods:[],displayName:"HiddenText",props:{className:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:"For overriding default styles."},id:{defaultValue:{value:'"hiddenText"',computed:!1},type:{name:"string"},required:!1,description:"So that it can be used for aria-labelledby values."},text:{type:{name:"string"},required:!0,description:""}}};var s=d;e.default=s})(),n})()}));