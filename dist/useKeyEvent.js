!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["monday-style"]=t():e["monday-style"]=t()}(this,(function(){return(()=>{"use strict";var e={67167:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.eventName,r=e.callback,a=e.ref,n=e.capture,u=void 0!==n&&n;(0,o.useEffect)((function(){var e=a&&a.current;if(e){var o={capture:u};return e.addEventListener(t,r,o),function(){e.removeEventListener(t,r,o)}}}),[t,a,r,u])};var o=r(16689)},16689:e=>{e.exports=require("react")}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}var o={};return(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var t,a=r(16689),n=(t=r(67167))&&t.__esModule?t:{default:t};var u="ctrlOrMetaKey";function i(e){var t,r=e.keys,o=void 0===r?[]:r,i=e.modifier,c=e.ref,f=e.callback,d=e.ignoreDocumentFallback,l=void 0!==d&&d,v=e.capture,s=void 0!==v&&v,p=e.preventDefault,y=void 0!==p&&p,m=e.stopPropagation,b=void 0!==m&&m,k=e.keyEventName,x=void 0===k?"keydown":k,_=(0,a.useRef)(document),K=(0,a.useCallback)((function(e){var t=e.key;o.includes(t)&&(i&&!function(e,t){return!!e[t]||t===u&&(e.ctrlKey||e.metaKey)}(e,i)||(y&&e.preventDefault(),b&&e.stopPropagation(),f(e)))}),[f,o,y,b,i]);t=c||(l?null:_),(0,n.default)({eventName:x,callback:K,ref:t,capture:s})}i.modifiers={ALT:"altKey",META:"metaKey",CTRL:"ctrlKey",SHIFT:"shiftKey",CTRL_OR_META:u}})(),o})()}));