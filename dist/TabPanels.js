!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["monday-style"]=t():e["monday-style"]=t()}(this,(function(){return(()=>{"use strict";var e={59347:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.refs,r=void 0===t?[]:t;return(0,n.useMemo)((function(){return r.every((function(e){return null===e}))?null:function(e){r.forEach((function(t){t&&function(e,t){if(null===e)return;if("function"==typeof e)return void e(t);try{e.current=t}catch(r){throw console.error(r),new Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}}(t,e)}))}}),[r])};var n=r(16689)},52845:(e,t,r)=>{r.r(t)},59003:e=>{e.exports=require("classnames")},580:e=>{e.exports=require("prop-types")},16689:e=>{e.exports=require("react")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{var e=n;function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==t(e)&&"function"!=typeof e)return{default:e};var n=l(r);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=a?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(o,i,u):o[i]=e[i]}o.default=e,n&&n.set(e,o);return o}(r(16689)),a=c(r(580)),i=c(r(59003)),u=c(r(59347));function c(e){return e&&e.__esModule?e:{default:e}}function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r(52845);var d=(0,o.forwardRef)((function(e,t){var r=e.className,n=e.id,a=e.activeTabId,c=e.animationDirection,l=e.children,f=e.renderOnlyActiveTab,p=(0,o.useRef)(null),d=(0,u.default)({refs:[t,p]}),y=(0,o.useMemo)((function(){return o.default.Children.map(l,(function(e,t){var r=a===t;if(f&&!r)return null;var n=r?"active":"non-active",u=r?"animation-direction-".concat(c):"";return o.default.cloneElement(e,s(s({index:t},e.props),{},{className:(0,i.default)("tab-panel",n,u,e.props.className)}))})).filter(Boolean)}),[l,a,f,c]);return o.default.createElement("div",{ref:d,className:(0,i.default)("tab-panels--wrapper",r),id:n},y)}));d.animationDirections={RTL:"rtl",LTR:"ltr"},d.propTypes={className:a.default.string,id:a.default.string,renderOnlyActiveTab:a.default.bool,activeTabId:a.default.number,animationDirection:a.default.oneOf([d.animationDirections.LTR,d.animationDirections.RTL])},d.defaultProps={className:"",id:"",renderOnlyActiveTab:!1,activeTabId:0,animationDirection:d.animationDirections.RTL},d.isTabPanels=!0,d.__docgenInfo={description:"",methods:[],displayName:"TabPanels",props:{className:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:""},id:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:""},renderOnlyActiveTab:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},activeTabId:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:""},animationDirection:{defaultValue:{value:"TabPanels.animationDirections.RTL",computed:!0},type:{name:"enum",value:[{value:"TabPanels.animationDirections.LTR",computed:!0},{value:"TabPanels.animationDirections.RTL",computed:!0}]},required:!1,description:""}}};var y=d;e.default=y})(),n})()}));