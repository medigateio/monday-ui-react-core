!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["monday-style"]=t():e["monday-style"]=t()}(this,(function(){return(()=>{"use strict";var e={59347:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.refs,r=void 0===t?[]:t;return(0,n.useMemo)((function(){return r.every((function(e){return null===e}))?null:function(e){r.forEach((function(t){t&&function(e,t){if(null===e)return;if("function"==typeof e)return void e(t);try{e.current=t}catch(r){throw console.error(r),new Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}}(t,e)}))}}),[r])};var n=r(16689)},89237:(e,t,r)=>{r.r(t)},59003:e=>{e.exports=require("classnames")},580:e=>{e.exports=require("prop-types")},16689:e=>{e.exports=require("react")}},t={};function r(n){var u=t[n];if(void 0!==u)return u.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{var e=n;function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==t(e)&&"function"!=typeof e)return{default:e};var n=f(r);if(n&&n.has(e))return n.get(e);var u={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(u,i,l):u[i]=e[i]}u.default=e,n&&n.set(e,u);return u}(r(16689)),o=a(r(580)),i=a(r(59003)),l=a(r(59347));function a(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}r(89237);var c=function(e,t,r){return r?u.default.createElement("em",{className:"highlight-text",key:t},e):u.default.createElement("span",{key:t},e)},s=(0,u.forwardRef)((function(e,t){var r=e.className,n=e.id,o=e.text,a=e.highlightTerm,f=e.limit,s=e.linesToClamp,d=(0,u.useRef)(null),p=(0,l.default)({refs:[t,d]}),m=(0,u.useMemo)((function(){if(!o||!a||0===f)return o;for(var e=o.split(new RegExp("(".concat(a,")"),"i")),t=[],r=0,n=0,u=0;u<e.length;u++)if(e[u]){var i=u%2==1,l=i&&(!f||f<0||r<f);t.push(c(e[u],n++,l)),i&&r++}return t}),[o,a,f]);return(0,u.useEffect)((function(){d.current&&d.current.style.setProperty("-webkit-line-clamp",s)}),[d,s]),u.default.createElement("div",{ref:p,className:(0,i.default)("text-with-highlight--wrapper",r),id:n},m)}));s.propTypes={className:o.default.string,id:o.default.string,text:o.default.string,highlightTerm:o.default.string,limit:o.default.number,linesToClamp:o.default.number},s.defaultProps={className:"",id:void 0,text:"",highlightTerm:null,limit:null,linesToClamp:3},s.__docgenInfo={description:"",methods:[],displayName:"TextWithHighlight",props:{className:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:""},id:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""},text:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:""},highlightTerm:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},limit:{defaultValue:{value:"null",computed:!1},type:{name:"number"},required:!1,description:""},linesToClamp:{defaultValue:{value:"3",computed:!1},type:{name:"number"},required:!1,description:""}}};var d=s;e.default=d})(),n})()}));