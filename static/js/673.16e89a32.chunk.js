"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[673],{2673:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});e(2791);var r=e(9434),u=e(1087),i=e(7689),o=e(8190),c=e(6351),a=e(3329);function f(){var n=(0,r.v9)(c.rK),t=(0,r.v9)(c.I_),e=(0,r.I0)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("header",{children:(0,a.jsxs)("nav",{children:[(0,a.jsx)(u.OL,{to:"/",children:(0,a.jsx)("b",{children:"Home "})}),n?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.OL,{to:"/contacts",children:(0,a.jsx)("span",{children:(0,a.jsx)("b",{children:"Contacts"})})}),(0,a.jsx)("p",{children:t}),(0,a.jsx)("button",{onClick:function(){e((0,o.yd)())},children:"Logout"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.OL,{to:"/login ",children:(0,a.jsx)("b",{children:"Login "})}),(0,a.jsx)(u.OL,{to:"/register",children:(0,a.jsx)("b",{children:"Register "})})]})]})}),(0,a.jsx)("main",{children:(0,a.jsx)(i.j3,{})})]})}},6351:function(n,t,e){e.d(t,{Af:function(){return u},I_:function(){return o},rK:function(){return i},vp:function(){return c}});var r=e(6916),u=function(n){return n.contacts.items},i=function(n){return n.auth.token},o=function(n){return n.auth.email},c=(0,r.P1)([u,function(n){return n.filter}],(function(n,t){return n.filter((function(n){return n.name.toLowerCase().trim().includes(t.toLowerCase())}))}))},6916:function(n,t,e){e.d(t,{P1:function(){return a}});var r="NOT_FOUND";var u=function(n,t){return n===t};function i(n,t){var e="object"===typeof t?t:{equalityCheck:t},i=e.equalityCheck,o=void 0===i?u:i,c=e.maxSize,a=void 0===c?1:c,f=e.resultEqualityCheck,l=function(n){return function(t,e){if(null===t||null===e||t.length!==e.length)return!1;for(var r=t.length,u=0;u<r;u++)if(!n(t[u],e[u]))return!1;return!0}}(o),s=1===a?function(n){var t;return{get:function(e){return t&&n(t.key,e)?t.value:r},put:function(n,e){t={key:n,value:e}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(l):function(n,t){var e=[];function u(n){var u=e.findIndex((function(e){return t(n,e.key)}));if(u>-1){var i=e[u];return u>0&&(e.splice(u,1),e.unshift(i)),i.value}return r}return{get:u,put:function(t,i){u(t)===r&&(e.unshift({key:t,value:i}),e.length>n&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(a,l);function p(){var t=s.get(arguments);if(t===r){if(t=n.apply(null,arguments),f){var e=s.getEntries(),u=e.find((function(n){return f(n.value,t)}));u&&(t=u.value)}s.put(arguments,t)}return t}return p.clearCache=function(){return s.clear()},p}function o(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every((function(n){return"function"===typeof n}))){var e=t.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function c(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var u=function(){for(var t=arguments.length,r=new Array(t),u=0;u<t;u++)r[u]=arguments[u];var i,c=0,a={memoizeOptions:void 0},f=r.pop();if("object"===typeof f&&(a=f,f=r.pop()),"function"!==typeof f)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof f+"]");var l=a,s=l.memoizeOptions,p=void 0===s?e:s,h=Array.isArray(p)?p:[p],v=o(r),d=n.apply(void 0,[function(){return c++,f.apply(null,arguments)}].concat(h)),y=n((function(){for(var n=[],t=v.length,e=0;e<t;e++)n.push(v[e].apply(null,arguments));return i=d.apply(null,n)}));return Object.assign(y,{resultFunc:f,memoizedResultFunc:d,dependencies:v,lastResult:function(){return i},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),y};return u}var a=c(i)}}]);
//# sourceMappingURL=673.16e89a32.chunk.js.map