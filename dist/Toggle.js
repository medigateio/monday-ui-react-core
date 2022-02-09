!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["monday-style"]=t():e["monday-style"]=t()}(this,(function(){return(()=>{"use strict";var e={42498:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BASE_TOGGLE_CLASS_NAME=void 0;t.BASE_TOGGLE_CLASS_NAME="monday-style-toggle"},88860:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=r(16689))&&a.__esModule?a:{default:a},i=r(42498);var l=function(e){var t=e.children;return n.default.createElement("span",{className:"".concat(i.BASE_TOGGLE_CLASS_NAME,"_text")},t)};l.__docgenInfo={description:"",methods:[],displayName:"ToggleText"};var o=l;t.default=o},34066:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.backwardCompatibilityForProperties=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=e.find((function(e){return void 0!==e}));return r||t}},47507:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BEMClass=function(e){return function(t){var r=t.element,a=t.state,n=e;return r&&(n="".concat(n,"_").concat(r)),a&&(n="".concat(n,"--").concat(a)),n}}},59214:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useToggle=void 0;var a=r(16689),n=r(9041),i=r(56206),l=r(73888);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.useToggle=function(e){var t=e.id,r=e.isDefaultSelected,o=e.isSelected,u=e.onChange,s=e.value,c=e.name,f=e.isDisabled,p=e.ariaLabel,v=e.ariaControls,m=(0,a.useRef)(),b=(0,l.useFocusRing)(),g=b.isFocusVisible,y=b.focusProps,O=(0,n.useToggleState)({defaultSelected:r,isSelected:o,onChange:u}),S=(0,i.useSwitch)({id:t,defaultSelected:r,isSelected:o,onChange:u,value:s,name:c,isDisabled:f,"aria-label":p,"aria-controls":v},O,m).inputProps;return{isChecked:S.checked,isFocusVisible:g,inputProps:d(d({},S),y)}}},80129:(e,t,r)=>{r.r(t)},73888:e=>{e.exports=require("@react-aria/focus")},56206:e=>{e.exports=require("@react-aria/switch")},9041:e=>{e.exports=require("@react-stately/toggle")},59003:e=>{e.exports=require("classnames")},87553:e=>{e.exports=require("lodash/noop")},580:e=>{e.exports=require("prop-types")},16689:e=>{e.exports=require("react")}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,r),i.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{var e=a;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=f(r(16689)),n=f(r(580)),i=f(r(59003)),l=f(r(87553)),o=r(42498),d=f(r(88860));r(80129);var u=r(59214),s=r(47507),c=r(34066);function f(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},p.apply(this,arguments)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=(0,s.BEMClass)(o.BASE_TOGGLE_CLASS_NAME),b=function(e){var r,a=e.id,n=e.componentClassName,l=e.className,o=e.isDefaultSelected,s=e.isSelected,f=e.onChange,b=e.value,g=e.name,y=e.disabled,O=e.isDisabled,S=e.ariaLabel,_=e.ariaControls,h=e.areLabelsHidden,P=e.onOverrideText,j=e.offOverrideText,C=(0,c.backwardCompatibilityForProperties)([l,n]),x=(0,c.backwardCompatibilityForProperties)([y,O],!1),E=(0,u.useToggle)({id:a,isDefaultSelected:o,isSelected:s,onChange:f,value:b,name:g,isDisabled:x,ariaLabel:S,ariaControls:_}),T=E.inputProps,q=E.isChecked;return t.default.createElement("label",{htmlFor:a,className:(0,i.default)(m({element:"wrapper"}),v({},m({element:"wrapper",state:"disabled"}),x))},h?null:t.default.createElement(d.default,null,j),t.default.createElement("input",p({},T,{className:m({element:"input"})})),t.default.createElement("div",{className:(0,i.default)(m({element:"toggle"}),C,(r={},v(r,m({element:"toggle",state:"selected"}),q),v(r,m({element:"toggle",state:"not-selected"}),!q),r)),"aria-hidden":"true"}),h?null:t.default.createElement(d.default,null,P))};b.propTypes={id:n.default.string,className:n.default.string,isDefaultSelected:n.default.bool,isSelected:n.default.bool,onChange:n.default.func,value:n.default.string,name:n.default.string,disabled:n.default.bool,areLabelsHidden:n.default.bool,onOverrideText:n.default.string,offOverrideText:n.default.string,ariaLabel:n.default.string,ariaControls:n.default.string},b.defaultProps={id:void 0,className:void 0,isDefaultSelected:!0,isSelected:void 0,onChange:l.default,value:void 0,name:void 0,disabled:void 0,areLabelsHidden:!1,ariaLabel:void 0,ariaControls:void 0,onOverrideText:"On",offOverrideText:"Off"},b.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{id:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""},isDefaultSelected:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},isSelected:{defaultValue:{value:"undefined",computed:!0},type:{name:"bool"},required:!1,description:""},onChange:{defaultValue:{value:"NOOP",computed:!0},type:{name:"func"},required:!1,description:""},value:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""},name:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""},disabled:{defaultValue:{value:"undefined",computed:!0},type:{name:"bool"},required:!1,description:""},areLabelsHidden:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},ariaLabel:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""},ariaControls:{defaultValue:{value:"undefined",computed:!0},type:{name:"string"},required:!1,description:""},onOverrideText:{defaultValue:{value:'"On"',computed:!1},type:{name:"string"},required:!1,description:""},offOverrideText:{defaultValue:{value:'"Off"',computed:!1},type:{name:"string"},required:!1,description:""}}};var g=b;e.default=g})(),a})()}));