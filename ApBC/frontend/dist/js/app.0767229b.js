(function(t){function e(e){for(var r,a,u=e[0],c=e[1],l=e[2],s=0,f=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function u(t){return c.p+"js/"+({Home:"Home",about:"about",baby:"baby",difficulty:"difficulty",spel:"spel"}[t]||t)+"."+{Home:"725acdb2",about:"784a14fa",baby:"c0c60903",difficulty:"f3cab94e",spel:"0eed012e"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={Home:1,about:1,baby:1,difficulty:1,spel:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({Home:"Home",about:"about",baby:"baby",difficulty:"difficulty",spel:"spel"}[t]||t)+"."+{Home:"9ff8f864",about:"015512eb",baby:"82e7158f",difficulty:"50eb76cb",spel:"e716d37a"}[t]+".css",o=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var l=i[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return e()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===r||s===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],p.parentNode.removeChild(p),n(i)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=u(t);var f=new Error;l=function(e){s.onerror=s.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var p=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2e2b":function(t,e,n){},"39b5":function(t,e,n){"use strict";var r=n("dca4"),a=n.n(r);e["default"]=a.a},"4e68":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("div",{staticClass:"gameScreen"},[t._m(0),r("div",{staticClass:"button"},[r("router-link",{attrs:{to:"/difficulty"}},[r("img",{staticClass:"down",attrs:{alt:"Next",src:n("f5f9")}})])],1),r("router-link",{attrs:{to:"/about"}},[r("div",{staticClass:"about",attrs:{id:"info"}},[r("div",{staticClass:"pin-text"},[r("h3",[t._v("Om Oss")])])])])],1)])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"img_intro"},[r("img",{staticClass:"intro",attrs:{alt:"Hej från Po",src:n("d34c")}})])}]},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("5c0b"),n("2877")),u={},c=Object(i["a"])(u,a,o,!1,null,null,null),l=c.exports,s=(n("d3b7"),n("8c4f")),f=n("bb51");r["a"].use(s["a"]);var p=[{path:"/",name:"Home",component:f["default"]},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/spel",name:"spel",component:function(){return n.e("spel").then(n.bind(null,"e38b"))}},{path:"/difficulty",name:"Difficulty",component:function(){return n.e("difficulty").then(n.bind(null,"9c26"))}},{path:"/baby",name:"baby",component:function(){return n.e("baby").then(n.bind(null,"d9a8"))}},{path:"/Home",name:"Home",component:function(){return n.e("Home").then(n.bind(null,"bb51"))}},{path:"/big",name:"big",component:function(){return n.e("Home").then(n.bind(null,"29c0"))}}],d=new s["a"]({routes:p}),b=d,m=n("2f62");r["a"].use(m["a"]);var h=new m["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:b,store:h,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(t,e,n){},"9f2f":function(t,e,n){t.exports=n.p+"img/apbcb.4baee895.png"},a380:function(t,e,n){"use strict";var r=n("4e68"),a=n("39b5"),o=(n("a436"),n("2877")),i=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,"8b36e4b6",null);e["default"]=i.exports},a436:function(t,e,n){"use strict";var r=n("2e2b"),a=n.n(r);a.a},bb51:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"ApBC",src:n("9f2f")}}),r("Intro",{attrs:{msg:"Hej på dig, min lille vän!"}})],1)},a=[],o=n("a380"),i={name:"Home",components:{Intro:o["default"]}},u=i,c=n("2877"),l=Object(c["a"])(u,r,a,!1,null,null,null);e["default"]=l.exports},d34c:function(t,e,n){t.exports=n.p+"img/intro.7abdb058.png"},dca4:function(t,e){},f5f9:function(t,e,n){t.exports=n.p+"img/go.864d672b.png"}});
//# sourceMappingURL=app.0767229b.js.map