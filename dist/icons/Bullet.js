!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports["monday-style"]=r():e["monday-style"]=r()}(this,(function(){return(()=>{"use strict";var e={580:e=>{e.exports=require("prop-types")},16689:e=>{e.exports=require("react")}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var i=r[o]={exports:{}};return e[o](i,i.exports,t),i.exports}var o={};return(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(t(580)),n=u(t(16689)),i=["size"];function u(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},l.apply(this,arguments)}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var a=function(e){var r=e.size,t=s(e,i);return n.default.createElement("svg",l({viewBox:"0 0 20 20",fill:"currentColor",width:r||"20",height:r||"20"},t),n.default.createElement("circle",{cx:"10",cy:"10",r:"3",fill:"currentColor"}))};a.displayName="Bullet",a.propTypes={size:r.default.string},a.__docgenInfo={description:"",methods:[],displayName:"Bullet",props:{size:{type:{name:"string"},required:!1,description:""}}};var p=a;e.default=p})(),o})()}));