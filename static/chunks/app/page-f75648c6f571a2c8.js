(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9037:function(e,r,t){Promise.resolve().then(t.bind(t,2132))},2132:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return o}});var n=t(7437),l=t(2265),s=e=>{(0,l.useEffect)(()=>{},[]);let[r,t]=(0,l.useState)("");return(0,n.jsx)("div",{children:(0,n.jsx)("button",{className:"w-4/5 h-20 ",onClick:()=>{""===r&&("player1"===e.player?(t("X"),e.setSquares(r=>{let t=[...r];return t[e.index]="player1",console.log(t),t})):"player2"===e.player&&(t("O"),e.setSquares(r=>{let t=[...r];return t[e.index]="player2",console.log(t),t})),e.changePlayer())},children:r})})},a=()=>{let[e,r]=(0,l.useState)("player1"),[t,a]=(0,l.useState)(Array(9).fill(null)),o=()=>{"player1"===e?r("player2"):"player2"===e&&r("player1")};return(0,l.useEffect)(()=>{!function(){let e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let r=0;r<e.length;r++){let[n,l,s]=e[r];if(t[n]&&t[n]===t[l]&&t[n]===t[s])return alert(t[n]+"winner"),t[n]}t.every(e=>e)&&alert("Draw")}()},[t]),(0,n.jsx)("div",{className:" w-60 grid grid-cols-3 grid-rows-3",children:t.map((r,l)=>(0,n.jsx)("div",{className:"w-20 h-20 border-2",children:(0,n.jsx)(s,{player:e,index:l,setSquares:a,squares:t,changePlayer:o})},l))})};function o(){return(0,l.useEffect)(()=>{},[]),(0,n.jsx)(a,{})}},622:function(e,r,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=t(2265),l=Symbol.for("react.element"),s=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};r.jsx=function(e,r,t){var n,u={},i=null,c=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(c=r.ref),r)s.call(r,n)&&!o.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===u[n]&&(u[n]=r[n]);return{$$typeof:l,type:e,key:i,ref:c,props:u,_owner:a.current}}},7437:function(e,r,t){"use strict";e.exports=t(622)}},function(e){e.O(0,[971,864,744],function(){return e(e.s=9037)}),_N_E=e.O()}]);