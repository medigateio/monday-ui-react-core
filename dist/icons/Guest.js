!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["monday-style"]=t():e["monday-style"]=t()}(this,(function(){return(()=>{"use strict";var e={580:e=>{e.exports=require("prop-types")},16689:e=>{e.exports=require("react")}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var C=t[o]={exports:{}};return e[o](C,C.exports,r),C.exports}var o={};return(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=i(r(580)),n=i(r(16689)),C=["size"];function i(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},u.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},C=Object.keys(e);for(o=0;o<C.length;o++)r=C[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(e);for(o=0;o<C.length;o++)r=C[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=function(e){var t=e.size,r=l(e,C);return n.default.createElement("svg",u({viewBox:"0 0 20 20",fill:"currentColor",width:t||"20",height:t||"20"},r),n.default.createElement("path",{d:"M10.75 3C10.75 2.58579 10.4142 2.25 10 2.25C9.58579 2.25 9.25 2.58579 9.25 3V4.25H8.53846H3.92308C3.47935 4.25 3.0538 4.42627 2.74003 4.74003C2.42627 5.0538 2.25 5.47935 2.25 5.92308V14.2308C2.25 14.6745 2.42627 15.1 2.74003 15.4138C3.05379 15.7276 3.47935 15.9038 3.92308 15.9038H4.84496L4.84615 15.9038H10.3846L10.3858 15.9038H15.9231C16.3668 15.9038 16.7924 15.7276 17.1061 15.4138C17.4199 15.1 17.5962 14.6745 17.5962 14.2308V5.92308C17.5962 5.47935 17.4199 5.0538 17.1061 4.74003C16.7924 4.42627 16.3668 4.25 15.9231 4.25H10.75V3ZM9.25 5.75V6C9.25 6.41421 9.58579 6.75 10 6.75C10.4142 6.75 10.75 6.41421 10.75 6V5.75H15.9231C15.969 5.75 16.013 5.76823 16.0455 5.80069C16.0779 5.83315 16.0962 5.87717 16.0962 5.92308V14.2308C16.0962 14.2767 16.0779 14.3207 16.0455 14.3532C16.013 14.3856 15.969 14.4038 15.9231 14.4038H11.0538C10.9112 13.7504 10.5841 13.1456 10.1039 12.6654C9.84658 12.4081 9.55356 12.1948 9.23648 12.0302C9.25388 12.0138 9.27104 11.9972 9.28796 11.9803C9.50761 11.7606 9.68184 11.4999 9.80072 11.2129C9.91959 10.9259 9.98077 10.6183 9.98077 10.3077C9.98077 9.99707 9.91959 9.68948 9.80072 9.4025C9.68184 9.11552 9.50761 8.85476 9.28796 8.63511C9.06832 8.41547 8.80756 8.24123 8.52058 8.12236C8.2336 8.00349 7.92601 7.94231 7.61538 7.94231C7.30476 7.94231 6.99717 8.00349 6.71019 8.12236C6.42321 8.24123 6.16245 8.41547 5.94281 8.63511C5.72316 8.85476 5.54893 9.11552 5.43005 9.4025C5.31118 9.68948 5.25 9.99707 5.25 10.3077C5.25 10.6183 5.31118 10.9259 5.43005 11.2129C5.54893 11.4999 5.72316 11.7606 5.94281 11.9803C5.95972 11.9972 5.97689 12.0138 5.99429 12.0302C5.67721 12.1948 5.38419 12.4081 5.12691 12.6654C4.64665 13.1456 4.31953 13.7504 4.17699 14.4038H3.92308C3.87718 14.4038 3.83315 14.3856 3.80069 14.3532C3.76823 14.3207 3.75 14.2767 3.75 14.2308V5.92308C3.75 5.87717 3.76823 5.83315 3.80069 5.80069C3.83315 5.76823 3.87717 5.75 3.92308 5.75H8.53846H9.25ZM9.0432 13.726C9.23843 13.9213 9.38956 14.1524 9.49016 14.4038H5.74061C5.84121 14.1524 5.99234 13.9213 6.18757 13.726C6.56625 13.3474 7.07985 13.1346 7.61538 13.1346C8.15092 13.1346 8.66452 13.3474 9.0432 13.726ZM7.28422 9.50818C7.38921 9.46469 7.50174 9.44231 7.61538 9.44231C7.72903 9.44231 7.84156 9.46469 7.94655 9.50818C8.05155 9.55167 8.14694 9.61541 8.2273 9.69577C8.30766 9.77613 8.37141 9.87153 8.4149 9.97652C8.45839 10.0815 8.48077 10.194 8.48077 10.3077C8.48077 10.4213 8.45839 10.5339 8.4149 10.6389C8.37141 10.7439 8.30766 10.8393 8.2273 10.9196C8.14694 11 8.05155 11.0637 7.94655 11.1072C7.84156 11.1507 7.72903 11.1731 7.61538 11.1731C7.50174 11.1731 7.38921 11.1507 7.28422 11.1072C7.17922 11.0637 7.08382 11 7.00347 10.9196C6.92311 10.8393 6.85936 10.7439 6.81587 10.6389C6.77238 10.5339 6.75 10.4213 6.75 10.3077C6.75 10.194 6.77238 10.0815 6.81587 9.97652C6.85936 9.87153 6.92311 9.77613 7.00347 9.69577C7.08382 9.61541 7.17922 9.55167 7.28422 9.50818Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))};s.displayName="Guest",s.propTypes={size:t.default.string},s.__docgenInfo={description:"",methods:[],displayName:"Guest",props:{size:{type:{name:"string"},required:!1,description:""}}};var p=s;e.default=p})(),o})()}));