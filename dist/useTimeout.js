!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["monday-style"]=t():e["monday-style"]=t()}(this,(function(){return(()=>{"use strict";var e={87553:e=>{e.exports=require("lodash/noop")},16689:e=>{e.exports=require("react")}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var u=t[o]={exports:{}};return e[o](u,u.exports,r),u.exports}var o={};return(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){var t=e.time,r=void 0===t?0:t,o=e.callback,i=e.ignoreZeroTime,c=void 0!==i&&i,f=0===r&&c,a=(0,n.useRef)(null),s=(0,n.useCallback)((function(){a.current&&clearTimeout(a.current)}),[a]);if((0,n.useEffect)((function(){return f?function(){}:(a.current=setTimeout(o,r),function(){clearTimeout(a.current)})}),[o,r,a,f]),f)return[u.default];return[s]};var t,n=r(16689),u=(t=r(87553))&&t.__esModule?t:{default:t}})(),o})()}));