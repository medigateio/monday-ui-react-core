!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["monday-style"]=t():e["monday-style"]=t()}(this,(function(){return(()=>{"use strict";var e={59347:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.refs,r=void 0===t?[]:t;return(0,n.useMemo)((function(){return r.every((function(e){return null===e}))?null:function(e){r.forEach((function(t){t&&function(e,t){if(null===e)return;if("function"==typeof e)return void e(t);try{e.current=t}catch(r){throw console.error(r),new Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}}(t,e)}))}}),[r])};var n=r(16689)},82020:(e,t,r)=>{r.r(t)},59003:e=>{e.exports=require("classnames")},580:e=>{e.exports=require("prop-types")},16689:e=>{e.exports=require("react")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n](u,u.exports,r),u.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{var e=n;function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==t(e)&&"function"!=typeof e)return{default:e};var n=f(r);if(n&&n.has(e))return n.get(e);var o={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=u?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}o.default=e,n&&n.set(e,o);return o}(r(16689)),u=i(r(580)),a=i(r(59003)),l=i(r(59347));function i(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,u=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return u}(e,t)||m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r(82020);var v=(0,o.forwardRef)((function(e,t){var r=e.children,n=e.allowMultiple,u=e.defaultIndex,i=e.className,f=e.id,c=(0,o.useRef)(null),p=(0,l.default)({refs:[t,c]}),m=y((0,o.useState)(u),2),b=m[0],v=m[1],O=(0,o.useMemo)((function(){return o.default.Children.toArray(r)}),[r]),h=(0,o.useCallback)((function(e){return b.includes(e)}),[b]),j=(0,o.useCallback)((function(e){if(n){var t=s(b);if(h(e)){var r=t.indexOf(e);r>-1&&t.splice(r,1)}else t.push(e);v(t)}else v([e])}),[h,b,n]),g=(0,o.useMemo)((function(){return o.default.Children.map(O,(function(e,t){return o.default.cloneElement(e,d(d({},null==e?void 0:e.props),{},{onClickAccordionCallback:function(){j(t)},open:h(t)}))}))}),[h,j,O]);return o.default.createElement("div",{ref:p,className:(0,a.default)("accordion",i),id:f},O&&g)}));v.propTypes={className:u.default.string,id:u.default.string,allowMultiple:u.default.bool,defaultIndex:u.default.array,children:u.default.oneOfType([u.default.arrayOf(u.default.node),u.default.node])},v.defaultProps={className:"",id:void 0,allowMultiple:!1,children:null,defaultIndex:[]},v.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{className:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:"class name to be add to the wrapper"},id:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:"id to be add to the wrapper"},allowMultiple:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"is allowed multiple opened accordion items"},children:{defaultValue:{value:"null",computed:!1},type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!1,description:"The value of the expandable section"},defaultIndex:{defaultValue:{value:"[]",computed:!1},type:{name:"array"},required:!1,description:"Array of initial expanded indexes"}}};var O=v;e.default=O})(),n})()}));