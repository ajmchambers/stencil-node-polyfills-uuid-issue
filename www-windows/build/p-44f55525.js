const e="app";let t,n,l=!1;const o="undefined"!=typeof window?window:{},s=o.CSS,a=o.document||{head:{}},r={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},c=(()=>(a.head.attachShadow+"").indexOf("[native")>-1)(),i=e=>Promise.resolve(e),u=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),f=new WeakMap,p=e=>"sc-"+e.o,d=e=>"object"==(e=typeof e)||"function"===e,$="undefined"!=typeof Deno,y=!($||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),m=($&&Deno,y?process:$&&Deno,y?process:$&&Deno,(e,t,...n)=>{let l=null,o=!1,s=!1,a=[];const r=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!d(l))&&(l+=""),o&&s?a[a.length-1].s+=l:a.push(o?w(null,l):l),s=o)};r(n);const c=w(e,null);return c.i=t,a.length>0&&(c.u=a),c}),w=(e,t)=>({t:0,p:e,s:t,$:null,u:null}),h={},b=(e,n,l)=>{let o,s,r=n.u[l],c=0;if(null!==r.s)o=r.$=a.createTextNode(r.s);else if(o=r.$=a.createElement(r.p),null!=t&&o["s-si"]!==t&&o.classList.add(o["s-si"]=t),r.u)for(c=0;c<r.u.length;++c)s=b(e,r,c),s&&o.appendChild(s);return o},g=(e,l)=>{const o=e.m,s=e.h||w(null,null),a=(e=>e&&e.p===h)(l)?l:m(null,null,l);n=o.tagName,a.p=null,a.t|=4,e.h=a,a.$=s.$=o.shadowRoot||o,t=o["s-sc"],((e,t)=>{const l=t.$=e.$,o=t.u,s=t.s;null===s?null!==o&&((e,t,l,o,s,a)=>{let r,c=e;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);s<=a;++s)o[s]&&(r=b(null,l,s),r&&(o[s].$=r,c.insertBefore(r,null)))})(l,0,t,o,0,o.length-1):e.s!==s&&(l.data=s)})(s,a)},_=(e,t)=>{t&&!e.g&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.g=t))},S=(e,t)=>{if(!(4&e.t))return _(e,e._),B(()=>v(e,t));e.t|=512},v=(e,t)=>{const n=e.S;return D(void 0,()=>M(e,n,t))},M=(e,t,n)=>{const l=e.m,o=l["s-rc"];n&&(e=>{const t=e.v,n=e.m,l=t.t,o=((e,t)=>{let n=p(t),l=N.get(n);if(e=11===e.nodeType?e:a,l)if("string"==typeof l){let t,o=f.get(e=e.head||e);o||f.set(e,o=new Set),o.has(n)||(t=a.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(c&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);g(e,k(e,t)),o&&(o.map(e=>e()),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>C(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},k=(e,t)=>{try{t=t.render(),e.t|=2}catch(n){q(n)}return t},C=e=>{const t=e.m,n=e._;64&e.t||(e.t|=64,P(t),e.M(t),n||j()),e.g&&(e.g(),e.g=void 0),512&e.t&&z(()=>S(e,!1)),e.t&=-517},j=()=>{P(a.documentElement),z(()=>(e=>{const t=r.ce("appload",{detail:{namespace:"app"}});return e.dispatchEvent(t),t})(o))},D=(e,t)=>e&&e.then?e.then(t):t(),P=e=>e.classList.add("hydrated"),x=(e,t={})=>{const n=[],l=t.exclude||[],s=o.customElements,i=a.head,f=i.querySelector("meta[charset]"),d=a.createElement("style"),$=[];let y,m=!0;Object.assign(r,t),r.l=new URL(t.resourcesUrl||"./",a.baseURI).href,e.map(e=>e[1].map(t=>{const o={t:t[0],o:t[1],k:t[2],C:t[3]};!c&&1&o.t&&(o.t|=8);const a=o.o,i=class extends HTMLElement{constructor(e){super(e),U(e=this,o),1&o.t&&(c?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){y&&(clearTimeout(y),y=null),m?$.push(this):r.jmp(()=>(e=>{if(0==(1&r.t)){const t=R(e),n=t.v,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){_(t,t._=n);break}}z(()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=L(n)).then){const e=()=>{};o=await o,e()}const e=()=>{};try{new o(t)}catch(r){q(r)}e()}if(o.style){let e=o.style;const t=p(n);if(!N.has(t)){const l=()=>{};8&n.t&&(e=await __sc_import_app("./p-4325c096.js").then(n=>n.scopeCss(e,t,!1))),((e,t,n)=>{let l=N.get(e);u&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,N.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t._,a=()=>S(t,!0);s&&s["s-rc"]?s["s-rc"].push(a):a()})(0,t,n))}l()}})(this))}disconnectedCallback(){r.jmp(()=>{})}forceUpdate(){}componentOnReady(){return R(this).j}};o.D=e[0],l.includes(a)||s.get(a)||(n.push(a),s.define(a,i))})),d.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),i.insertBefore(d,f?f.nextSibling:i.firstChild),m=!1,$.length?$.map(e=>e.connectedCallback()):r.jmp(()=>y=setTimeout(j,30))},E=new WeakMap,R=e=>E.get(e),T=(e,t)=>E.set(t.S=e,t),U=(e,t)=>{const n={t:0,m:e,v:t,P:new Map};return n.j=new Promise(e=>n.M=e),e["s-p"]=[],e["s-rc"]=[],E.set(e,n)},q=e=>console.error(e),A=new Map,L=e=>{const t=e.o.replace(/-/g,"_"),n=e.D,l=A.get(n);return l?l[t]:__sc_import_app(`./${n}.entry.js`).then(e=>(A.set(n,e),e[t]),q)},N=new Map,O=[],W=[],F=(e,t)=>n=>{e.push(n),l||(l=!0,t&&4&r.t?z(V):r.raf(V))},H=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){q(t)}e.length=0},V=()=>{H(O),H(W),(l=O.length>0)&&r.raf(V)},z=e=>i().then(e),B=F(W,!0);export{s as C,e as N,i as a,x as b,a as d,m as h,r as p,T as r,o as w}