"use strict";(self.webpackChunkstudentscape=self.webpackChunkstudentscape||[]).push([[284],{342:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(294),l=n(454);const o=({color:e,onClick:t,children:n})=>{const[o,c]=(0,r.useState)(!1);return r.createElement(l.Z,{type:"button",color:e,disabled:o,onClick:()=>{return e=void 0,n=void 0,l=function*(){c(!0),yield t(),c(!1)},new((r=void 0)||(r=Promise))((function(t,o){function c(e){try{i(l.next(e))}catch(e){o(e)}}function a(e){try{i(l.throw(e))}catch(e){o(e)}}function i(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(c,a)}i((l=l.apply(e,n||[])).next())}));var e,n,r,l}},o?r.createElement("span",{className:"animate-spin h-5 w-5 rounded-full border-4 border-l-transparent border-neutral-100"}):r.createElement(r.Fragment,null,n))}},454:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(294);const l={blue:"bg-blue-600 hover:bg-blue-800 disabled:bg-blue-400",red:"bg-red-600 hover:bg-red-800 disabled:bg-red-400"},o=e=>{var{color:t,children:n}=e,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n}(e,["color","children"]);return t||(t="blue"),r.createElement("button",Object.assign({},o,{className:`rounded-md w-full p-2 font-semibold text-white flex justify-center ${l[t]}`}),r.createElement(r.Fragment,null,n))}},249:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(294);const l=({error:e})=>r.createElement("div",{className:"bg-red-100 border-l-4 border-r-4 text-center border-red-500 text-red-700 p-2",role:"alert"},r.createElement("p",null,e))},692:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(294);const l=({children:e})=>r.createElement("div",{className:"bg-blue-100 border-l-4 border-r-4 border-blue-500 text-blue-700 text-center p-4 mb-3",role:"alert"},e)},284:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r,l=n(59),o=n(294),c=n(342),a=n(249),i=n(692),u=n(617),d=function(e,t,n,r){return new(n||(n=Promise))((function(l,o){function c(e){try{i(r.next(e))}catch(e){o(e)}}function a(e){try{i(r.throw(e))}catch(e){o(e)}}function i(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}i((r=r.apply(e,t||[])).next())}))};!function(e){e.SendEmail="SEND EMAIL",e.EmailSent="EMAIL SENT"}(r||(r={}));const s=()=>{const[e,t]=(0,o.useState)(r.SendEmail),[n,s]=(0,o.useState)();return(0,o.useEffect)((()=>{console.log(u.I8.currentUser)}),[]),o.createElement("div",{className:"space-y-4 flex-auto"},e===r.SendEmail&&o.createElement(o.Fragment,null,n&&o.createElement(a.Z,{error:n}),o.createElement(i.Z,null,o.createElement("p",null,"Please verify your email ID:"," ",o.createElement("span",{className:"font-bold"},u.I8.currentUser.email))),o.createElement(c.Z,{onClick:()=>d(void 0,void 0,void 0,(function*(){try{yield(0,l.w$)(u.I8.currentUser),t(r.EmailSent)}catch(e){s(e.code)}}))},"Send Verification Email"),o.createElement(c.Z,{color:"red",onClick:()=>d(void 0,void 0,void 0,(function*(){try{yield u.I8.signOut()}catch(e){s(e.code)}}))},"Sign Out")),e===r.EmailSent&&o.createElement(o.Fragment,null,n&&o.createElement(a.Z,{error:n}),o.createElement(i.Z,null,o.createElement("p",null,"Verification Email is sent successfully !")),o.createElement(c.Z,{onClick:()=>d(void 0,void 0,void 0,(function*(){window.location.reload()}))},"Reload")))}}}]);