(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(81),a=n.n(o),c=n(645),r=n.n(c),s=n(667),i=n.n(s),d=new URL(n(882),n.b),m=r()(a());m.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;800&display=swap);"]);var l=i()(d);m.push([e.id,":root {\n    --font-color: #eee;\n    --font-color-dark: #aaa;\n    --border-color: #222;\n    --background-light: rgba(0, 0, 0, 0.6);\n    --background-light-hover: rgba(99, 99, 99, 0.4);\n    --background-dark: rgba(0, 0, 0, 0.9);\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    font-size: 50%;\n    line-height: 1.6;\n    overflow-y: scroll;\n}\n\nbody {\n    font-family: 'Montserrat', cursive, sans-serif;\n    font-size: 1.6rem;\n    color: var(--font-color);\n    background-image: url("+l+");\n    background-attachment: fixed;\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\nheader {\n    font-size: 2.4rem;\n}\n\nh1,\nh2,\nh3 {\n    line-height: 1.2;\n}\n\nh2 {\n    margin-bottom: 2rem;\n}\n\na {\n    text-decoration: none;\n    color: var(--font-color);\n}\n\nimg {\n    display: block;\n    width: 100%;\n}\n\nbutton {\n    font-family: inherit;\n    color: inherit;\n    cursor: pointer;\n    border-style: none;\n    outline: none;\n}\n\n/*\n.content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    height: 100vh;\n}\n*/\n\n.header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 2rem;\n    background-color: var(--background-dark);\n    border-bottom: 1px solid var(--border-color);\n}\n\n.restaurant-name {\n    margin-bottom: 1rem;\n    font-family: 'Tangerine', cursive;\n    font-size: 10rem;\n}\n\n.button-nav {\n    padding: 2rem;\n    font-size: 2rem;\n    background-color: transparent;\n    border-bottom: 2px solid transparent;\n    transition: transform 0.3s;\n}\n\n.button-nav.active {\n    border-bottom: 2px solid var(--font-color);\n}\n\n.button-nav:hover {\n    transform: translateY(-10%);\n}\n\n.main,\n.testimonials {\n    max-width: 700px;\n    padding: 4rem;\n    margin: 6rem auto;\n    font-size: 2rem;\n    background-color: var(--background-light);\n    border: 1px solid var(--border-color);\n}\n\n.home {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 325px;\n    width: 618px;\n    animation: fadeIn 1.5s;\n}\n\n.home p {\n    padding: 1rem;\n}\n\n.home img {\n    width: 50%;\n    margin-top: 3rem;\n    margin-bottom: 3rem;\n    opacity: 90%\n}\n\n.testimonials {\n    display: flex;\n    justify-content: space-around;\n}\n\n.quote {\n    width: 209px;\n    height: 150px;\n    animation: fadeIn 1.5s;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nblockquote {\n    font-size: 2rem;\n    font-style: italic;\n}\n\n.menu,\n.contact {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 618px;\n    animation: fadeIn 1.5s;\n}\n\n.menu-item,\n.contact-item {\n    display: flex;\n    margin-top: 3.5rem;\n    margin-bottom: 3.5rem;\n}\n\n.menu h2 {\n    font-size: 4rem;\n}\n\n.item-side img,\n.contact-side img {\n    height: 200px;\n    width: 300px;\n    object-fit: cover;\n}\n\n.item-side,\n.contact-side {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n}\n\n.item-side p {\n    padding: 1rem;\n}\n\n.menu-head {\n    margin-top: 3rem;\n}\n\n.contact-head {\n    font-size: 4rem;\n    text-align: center;\n}\n\n.contact-item {\n    margin-top: 8rem;\n}\n\n.contact-side {\n    width: 100%;\n}\n\nfooter {\n    text-align: center;\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    padding: 1rem;\n    background-color: var(--background-dark);\n}\n\n::-webkit-scrollbar {\n    width: 10px;\n}\n\n::-webkit-scrollbar-track {\n    background-color: #000;\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: #222;\n}\n\n::-webkit-scrollbar-thumb:hover {\n    background-color: #444;\n}",""]);const u=m},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,c){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(r[i]=!0)}for(var d=0;d<e.length;d++){var m=[].concat(e[d]);o&&r[m[0]]||(void 0!==c&&(void 0===m[5]||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=c),n&&(m[2]?(m[1]="@media ".concat(m[2]," {").concat(m[1],"}"),m[2]=n):m[2]=n),a&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=a):m[4]="".concat(a)),t.push(m))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},r=[],s=0;s<e.length;s++){var i=e[s],d=o.base?i[0]+o.base:i[0],m=c[d]||0,l="".concat(d," ").concat(m);c[d]=m+1;var u=n(l),p={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var h=a(p,o);o.byIndex=s,t.splice(s,0,{identifier:l,updater:h,references:1})}r.push(l)}return r}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var c=o(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<c.length;r++){var s=n(c[r]);t[s].references--}for(var i=o(e,a),d=0;d<c.length;d++){var m=n(c[d]);0===t[m].references&&(t[m].updater(),t.splice(m,1))}c=i}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},882:(e,t,n)=>{e.exports=n.p+"bbaa1e39cb8a352f2d44.jpg"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),a=n.n(o),c=n(569),r=n.n(c),s=n(565),i=n.n(s),d=n(216),m=n.n(d),l=n(589),u=n.n(l),p=n(426),h={};h.styleTagTransform=u(),h.setAttributes=i(),h.insert=r().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=m(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const f=function(){const e=document.querySelector(".home-button"),t=document.querySelector(".menu-button"),n=document.querySelector(".contact-button");e.classList.add("active"),t.classList.remove("active"),n.classList.remove("active");const o=document.querySelector(".content"),a=document.createElement("div");a.setAttribute("id","home-page");const c=document.createElement("div");c.classList.add("main");const r=document.createElement("div");r.classList.add("home");const s=document.createElement("h2");s.textContent="Lorem ipsum dolor sit amet.";const i=document.createElement("p");i.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit.";const d=document.createElement("p");d.textContent="Lorem ipsum dolor sit.";const m=document.createElement("div");m.classList.add("testimonials");const l=document.createElement("div");l.classList.add("quote");const u=document.createElement("blockquote");u.textContent='"It\'s better than delivery!"';const p=document.createElement("p");p.textContent="- Jacqueline R.";const h=document.createElement("div");h.classList.add("quote");const f=document.createElement("blockquote");f.textContent='"Dang."';const g=document.createElement("p");g.textContent="- Michael S.",r.append(s),r.append(i),r.append(d),c.append(r),l.append(u),l.append(p),h.append(f),h.append(g),m.append(l),m.append(h),a.append(c),a.append(m),o.append(a)};(function(){const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("header");const n=document.createElement("h1");n.classList.add("restaurant-name"),n.textContent="Ryan's Kitchen";const o=document.createElement("nav"),a=document.createElement("button"),c=document.createElement("button"),r=document.createElement("button");a.textContent="Home",c.textContent="Menu",r.textContent="Contact",a.classList.add("button-nav"),c.classList.add("button-nav"),r.classList.add("button-nav"),a.classList.add("home-button"),c.classList.add("menu-button"),r.classList.add("contact-button"),o.append(a),o.append(c),o.append(r),t.append(n),t.append(o),e.append(t);const s=document.createElement("footer");s.classList.add(".footer");const i=document.createElement("p");i.textContent="Copyright © 2022 Ryan Holland",s.append(i),e.append(s)})(),f();const g=document.querySelector(".home-button"),v=document.querySelector(".menu-button"),b=document.querySelector(".contact-button");g.addEventListener("click",(()=>{const e=document.querySelector(".content");e.removeChild(e.lastChild),f()})),v.addEventListener("click",(()=>{const e=document.querySelector(".content");e.removeChild(e.lastChild),function(){const e=document.querySelector(".home-button"),t=document.querySelector(".menu-button"),n=document.querySelector(".contact-button");e.classList.remove("active"),t.classList.add("active"),n.classList.remove("active");const o=document.querySelector(".content"),a=document.createElement("div");a.setAttribute("id","menu-page");const c=document.createElement("div");c.classList.add("main");const r=document.createElement("div");r.classList.add("menu");const s=document.createElement("h2");s.textContent="Breakfast";const i=document.createElement("h2");i.textContent="Lunch";const d=document.createElement("h2");d.textContent="Dinner";const m=document.createElement("div");m.classList.add("menu-item");const l=document.createElement("div"),u=document.createElement("div");l.classList.add("item-side"),u.classList.add("item-side");const p=document.createElement("img");p.src="images/monte.jpg",p.alt="Monte Cristo";const h=document.createElement("h3");h.textContent="Monte Cristo";const f=document.createElement("p");f.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit tempore earum.",l.append(p),u.append(h),u.append(f),m.append(l),m.append(u);const g=document.createElement("div");g.classList.add("menu-item");const v=document.createElement("div"),b=document.createElement("div");v.classList.add("item-side"),b.classList.add("item-side");const E=document.createElement("img");E.src="images/toast.JPG",E.alt="French Toast";const x=document.createElement("h3");x.textContent="French Toast";const y=document.createElement("p");y.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit tempore earum.",v.append(x),v.append(y),b.append(E),g.append(v),g.append(b);const L=document.createElement("div");L.classList.add("menu-item");const C=document.createElement("div"),k=document.createElement("div");C.classList.add("item-side"),k.classList.add("item-side");const w=document.createElement("img");w.src="images/pizza.jpg",w.alt="Pizza";const S=document.createElement("h3");S.textContent="Chicken Bacon Pesto Pizza";const q=document.createElement("p");q.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit tempore earum.",C.append(w),k.append(S),k.append(q),L.append(C),L.append(k);const j=document.createElement("div");j.classList.add("menu-item");const z=document.createElement("div"),A=document.createElement("div");z.classList.add("item-side"),A.classList.add("item-side");const T=document.createElement("img");T.src="images/burger.jpg",T.alt="Burger";const M=document.createElement("h3");M.textContent="Bison Burger";const I=document.createElement("p");I.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit tempore earum.",z.append(M),z.append(I),A.append(T),j.append(z),j.append(A);const P=document.createElement("div");P.classList.add("menu-item");const R=document.createElement("div"),F=document.createElement("div");R.classList.add("item-side"),F.classList.add("item-side");const B=document.createElement("img");B.src="images/chicken.jpg",B.alt="Chicken Fettuccine";const H=document.createElement("h3");H.textContent="Chicken Fettuccine";const N=document.createElement("p");N.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit tempore earum.",R.append(B),F.append(H),F.append(N),P.append(R),P.append(F);const U=document.createElement("div");U.classList.add("menu-item");const Z=document.createElement("div"),O=document.createElement("div");Z.classList.add("item-side"),O.classList.add("item-side");const $=document.createElement("img");$.src="images/steak.jpg",$.alt="Steak";const _=document.createElement("h3");_.textContent="Steak and Asaparagus";const D=document.createElement("p");D.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit tempore earum.",Z.append(_),Z.append(D),O.append($),U.append(Z),U.append(O),r.append(s),r.append(m),r.append(g),r.append(i),r.append(L),r.append(j),r.append(d),r.append(P),r.append(U),c.append(r),a.append(c),o.append(a)}()})),b.addEventListener("click",(()=>{const e=document.querySelector(".content");e.removeChild(e.lastChild),function(){const e=document.querySelector(".home-button"),t=document.querySelector(".menu-button"),n=document.querySelector(".contact-button");e.classList.remove("active"),t.classList.remove("active"),n.classList.add("active");const o=document.querySelector(".content"),a=document.createElement("div");a.setAttribute("id","menu-page");const c=document.createElement("div");c.classList.add("main");const r=document.createElement("h2");r.classList.add("contact-head"),r.textContent="Contact Us";const s=document.createElement("div");s.classList.add("contact-item");const i=document.createElement("div"),d=document.createElement("div");i.classList.add("contact-side"),d.classList.add("contact-side");const m=document.createElement("img");m.src="images/ryan.jpg",m.alt="Ryan";const l=document.createElement("h3"),u=document.createElement("p"),p=document.createElement("p"),h=document.createElement("p");l.textContent="Ryan",u.textContent="Manager / Head Chef",p.textContent="(555) 555-5555",h.textContent="ryan@ryanskitchen.com",i.append(m),d.append(l),d.append(u),d.append(p),d.append(h),s.append(i),s.append(d);const f=document.createElement("div");f.classList.add("contact-item");const g=document.createElement("div"),v=document.createElement("div");g.classList.add("contact-side"),v.classList.add("contact-side");const b=document.createElement("img");b.src="images/cat.jpg",b.alt="Isaiah";const E=document.createElement("h3"),x=document.createElement("p"),y=document.createElement("p"),L=document.createElement("p");E.textContent="Isaiah",x.textContent="Assistant Chef / Taste Tester",y.textContent="(555) 555-5555",L.textContent="isaiah@ryanskitchen.com",g.append(E),g.append(x),g.append(y),g.append(L),v.append(b),f.append(g),f.append(v),c.append(r),c.append(s),c.append(f),a.append(c),o.append(a)}()}))})()})();