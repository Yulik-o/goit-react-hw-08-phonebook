/*! For license information please see 61.363c0c1d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[61],{3061:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(2791),o=n(9434),i=n(7689),a=n(27);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var l=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],s=["aria-current","caseSensitive","className","end","style","to","children"];var f="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,v=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,p=r.forwardRef((function(e,t){var n,o=e.onClick,s=e.relative,p=e.reloadDocument,d=e.replace,h=e.state,g=e.target,m=e.to,y=e.preventScrollReset,w=c(e,l),j=r.useContext(i.Us).basename,x=!1;if("string"===typeof m&&v.test(m)&&(n=m,f)){var k=new URL(window.location.href),C=m.startsWith("//")?new URL(k.protocol+m):new URL(m),b=(0,a.Zn)(C.pathname,j);C.origin===k.origin&&null!=b?m=b+C.search+C.hash:x=!0}var R=(0,i.oQ)(m,{relative:s}),S=function(e,t){var n=void 0===t?{}:t,o=n.target,u=n.replace,c=n.state,l=n.preventScrollReset,s=n.relative,f=(0,i.s0)(),v=(0,i.TH)(),p=(0,i.WU)(e,{relative:s});return r.useCallback((function(t){if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,o)){t.preventDefault();var n=void 0!==u?u:(0,a.Ep)(v)===(0,a.Ep)(p);f(e,{replace:n,state:c,preventScrollReset:l,relative:s})}}),[v,f,p,u,c,o,e,l,s])}(m,{replace:d,state:h,target:g,preventScrollReset:y,relative:s});return r.createElement("a",u({},w,{href:n||R,onClick:x||p?o:function(e){o&&o(e),e.defaultPrevented||S(e)},ref:t,target:g}))}));var d=r.forwardRef((function(e,t){var n=e["aria-current"],o=void 0===n?"page":n,a=e.caseSensitive,l=void 0!==a&&a,f=e.className,v=void 0===f?"":f,d=e.end,h=void 0!==d&&d,g=e.style,m=e.to,y=e.children,w=c(e,s),j=(0,i.WU)(m,{relative:w.relative}),x=(0,i.TH)(),k=r.useContext(i.FR),C=r.useContext(i.Us).navigator,b=C.encodeLocation?C.encodeLocation(j).pathname:j.pathname,R=x.pathname,S=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;l||(R=R.toLowerCase(),S=S?S.toLowerCase():null,b=b.toLowerCase());var U,A=R===b||!h&&R.startsWith(b)&&"/"===R.charAt(b.length),L=null!=S&&(S===b||!h&&S.startsWith(b)&&"/"===S.charAt(b.length)),E=A?o:void 0;U="function"===typeof v?v({isActive:A,isPending:L}):[v,A?"active":null,L?"pending":null].filter(Boolean).join(" ");var F="function"===typeof g?g({isActive:A,isPending:L}):g;return r.createElement(p,u({},w,{"aria-current":E,className:U,ref:t,style:F,to:m}),"function"===typeof y?y({isActive:A,isPending:L}):y)}));var h,g;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(h||(h={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(g||(g={}));var m=n(8190),y=n(6351),w=n(3329);function j(){var e=(0,o.v9)(y.rK),t=(0,o.v9)(y.I_),n=(0,o.I0)();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("header",{children:(0,w.jsxs)("nav",{children:[(0,w.jsx)(d,{to:"/",children:"Home"}),e?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d,{to:"/contacts",children:"Contacts"}),(0,w.jsx)("p",{children:t}),(0,w.jsx)("button",{onClick:function(){n((0,m.yd)())},children:"Logout"})]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d,{to:"/login ",children:"Login"}),(0,w.jsx)(d,{to:"/register",children:"Register"})]})]})}),(0,w.jsx)("main",{children:(0,w.jsx)(i.j3,{})})]})}},6351:function(e,t,n){n.d(t,{Af:function(){return o},I_:function(){return a},rK:function(){return i},vp:function(){return u}});var r=n(6916),o=function(e){return e.contacts.items},i=function(e){return e.auth.token},a=function(e){return e.auth.email},u=(0,r.P1)([o,function(e){return e.filter}],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().trim().includes(t.toLowerCase())}))}))},6916:function(e,t,n){n.d(t,{P1:function(){return c}});var r="NOT_FOUND";var o=function(e,t){return e===t};function i(e,t){var n="object"===typeof t?t:{equalityCheck:t},i=n.equalityCheck,a=void 0===i?o:i,u=n.maxSize,c=void 0===u?1:u,l=n.resultEqualityCheck,s=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}}(a),f=1===c?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:r},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(s):function(e,t){var n=[];function o(e){var o=n.findIndex((function(n){return t(e,n.key)}));if(o>-1){var i=n[o];return o>0&&(n.splice(o,1),n.unshift(i)),i.value}return r}return{get:o,put:function(t,i){o(t)===r&&(n.unshift({key:t,value:i}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(c,s);function v(){var t=f.get(arguments);if(t===r){if(t=e.apply(null,arguments),l){var n=f.getEntries(),o=n.find((function(e){return l(e.value,t)}));o&&(t=o.value)}f.put(arguments,t)}return t}return v.clearCache=function(){return f.clear()},v}function a(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function u(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var i,u=0,c={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(c=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var s=c,f=s.memoizeOptions,v=void 0===f?n:f,p=Array.isArray(v)?v:[v],d=a(r),h=e.apply(void 0,[function(){return u++,l.apply(null,arguments)}].concat(p)),g=e((function(){for(var e=[],t=d.length,n=0;n<t;n++)e.push(d[n].apply(null,arguments));return i=h.apply(null,e)}));return Object.assign(g,{resultFunc:l,memoizedResultFunc:h,dependencies:d,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),g};return o}var c=u(i)}}]);
//# sourceMappingURL=61.363c0c1d.chunk.js.map