import{a as g,R}from"./index.CaZlGE7t.js";var _={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S;function v(){if(S)return l;S=1;var t=g(),e=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,f=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function m(i,r,u){var n,o={},a=null,p=null;u!==void 0&&(a=""+u),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(p=r.ref);for(n in r)c.call(r,n)&&!y.hasOwnProperty(n)&&(o[n]=r[n]);if(i&&i.defaultProps)for(n in r=i.defaultProps,r)o[n]===void 0&&(o[n]=r[n]);return{$$typeof:e,type:i,key:a,ref:p,props:o,_owner:f.current}}return l.Fragment=s,l.jsx=m,l.jsxs=m,l}var d;function O(){return d||(d=1,_.exports=v()),_.exports}var q=O();const x=t=>{let e;const s=new Set,c=(u,n)=>{const o=typeof u=="function"?u(e):u;if(!Object.is(o,e)){const a=e;e=n??(typeof o!="object"||o===null)?o:Object.assign({},e,o),s.forEach(p=>p(e,a))}},f=()=>e,i={setState:c,getState:f,getInitialState:()=>r,subscribe:u=>(s.add(u),()=>s.delete(u))},r=e=t(c,f,i);return i},j=t=>t?x(t):x,E=t=>t;function I(t,e=E){const s=R.useSyncExternalStore(t.subscribe,()=>e(t.getState()),()=>e(t.getInitialState()));return R.useDebugValue(s),s}const b=t=>{const e=j(t),s=c=>I(e,c);return Object.assign(s,e),s},P=t=>t?b(t):b,k=P(t=>({isPlaying:!1,currentMusic:{playlist:null,songs:[],song:null},volumen:1,setVolumen:e=>t({volumen:e}),setIsPlaying:e=>t({isPlaying:e}),setCurrentmusic:e=>t({currentMusic:e})}));export{q as j,k as u};
