System.register(["./p-e3f6cd08.system.js"],(function(t){"use strict";var r,e;return{setters:[function(t){r=t.r;e=t.h}],execute:function(){var n=typeof crypto!=="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!=="undefined"&&typeof msCrypto.getRandomValues==="function"&&msCrypto.getRandomValues.bind(msCrypto);var o=new Uint8Array(16);function a(){if(!n){throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported")}return n(o)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function u(t){return typeof t==="string"&&i.test(t)}var f=[];for(var s=0;s<256;++s){f.push((s+256).toString(16).substr(1))}function p(t){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var e=(f[t[r+0]]+f[t[r+1]]+f[t[r+2]]+f[t[r+3]]+"-"+f[t[r+4]]+f[t[r+5]]+"-"+f[t[r+6]]+f[t[r+7]]+"-"+f[t[r+8]]+f[t[r+9]]+"-"+f[t[r+10]]+f[t[r+11]]+f[t[r+12]]+f[t[r+13]]+f[t[r+14]]+f[t[r+15]]).toLowerCase();if(!u(e)){throw TypeError("Stringified UUID is invalid")}return e}function d(t,r,e){t=t||{};var n=t.random||(t.rng||a)();n[6]=n[6]&15|64;n[8]=n[8]&63|128;if(r){e=e||0;for(var o=0;o<16;++o){r[e+o]=n[o]}return r}return p(n)}var l="header{background:#5851ff;color:white;height:56px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26);box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26)}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}";var c=t("app_root",function(){function t(t){r(this,t)}t.prototype.render=function(){return e("div",null,e("header",null,e("h1",null,"Stencil App Starter")),e("main",null,e("h2",null,"UUID below:"),d()))};return t}());c.style=l}}}));