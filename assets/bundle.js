/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 1.0.7
*/
!function(){"use strict";const t=Object.freeze({left:0,top:0,width:16,height:16}),e=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),n=Object.freeze({...t,...e}),o=Object.freeze({...n,body:"",hidden:!1}),i=Object.freeze({width:null,height:null}),r=Object.freeze({...i,...e});const s=/[\s,]+/;const c={...r,preserveAspectRatio:""};function a(t){const e={...c},n=(e,n)=>t.getAttribute(e)||n;var o;return e.width=n("width",null),e.height=n("height",null),e.rotate=function(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function o(t){for(;t<0;)t+=4;return t%4}if(""===n){const e=parseInt(t);return isNaN(e)?0:o(e)}if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i/=e,i%1==0?o(i):0)}}return e}(n("rotate","")),o=e,n("flip","").split(s).forEach((t=>{switch(t.trim()){case"horizontal":o.hFlip=!0;break;case"vertical":o.vFlip=!0}})),e.preserveAspectRatio=n("preserveAspectRatio",n("preserveaspectratio","")),e}const u=/^[a-z0-9]+(-[a-z0-9]+)*$/,l=(t,e,n,o="")=>{const i=t.split(":");if("@"===t.slice(0,1)){if(i.length<2||i.length>3)return null;o=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){const t=i.pop(),n=i.pop(),r={provider:i.length>0?i[0]:o,prefix:n,name:t};return e&&!f(r)?null:r}const r=i[0],s=r.split("-");if(s.length>1){const t={provider:o,prefix:s.shift(),name:s.join("-")};return e&&!f(t)?null:t}if(n&&""===o){const t={provider:o,prefix:"",name:r};return e&&!f(t,n)?null:t}return null},f=(t,e)=>!!t&&!(""!==t.provider&&!t.provider.match(u)||!(e&&""===t.prefix||t.prefix.match(u))||!t.name.match(u));function d(t,n){const i=function(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const o=((t.rotate||0)+(e.rotate||0))%4;return o&&(n.rotate=o),n}(t,n);for(const r in o)r in e?r in t&&!(r in i)&&(i[r]=e[r]):r in n?i[r]=n[r]:r in t&&(i[r]=t[r]);return i}function h(t,e,n){const o=t.icons,i=t.aliases||Object.create(null);let r={};function s(t){r=d(o[t]||i[t],r)}return s(e),n.forEach(s),d(t,r)}function p(t,e){const n=[];if("object"!=typeof t||"object"!=typeof t.icons)return n;t.not_found instanceof Array&&t.not_found.forEach((t=>{e(t,null),n.push(t)}));const o=function(t,e){const n=t.icons,o=t.aliases||Object.create(null),i=Object.create(null);return(e||Object.keys(n).concat(Object.keys(o))).forEach((function t(e){if(n[e])return i[e]=[];if(!(e in i)){i[e]=null;const n=o[e]&&o[e].parent,r=n&&t(n);r&&(i[e]=[n].concat(r))}return i[e]})),i}(t);for(const i in o){const r=o[i];r&&(e(i,h(t,i,r)),n.push(i))}return n}const g={provider:"",aliases:{},not_found:{},...t};function m(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function b(t){if("object"!=typeof t||null===t)return null;const e=t;if("string"!=typeof e.prefix||!t.icons||"object"!=typeof t.icons)return null;if(!m(t,g))return null;const n=e.icons;for(const t in n){const e=n[t];if(!t.match(u)||"string"!=typeof e.body||!m(e,o))return null}const i=e.aliases||Object.create(null);for(const t in i){const e=i[t],r=e.parent;if(!t.match(u)||"string"!=typeof r||!n[r]&&!i[r]||!m(e,o))return null}return e}const y=Object.create(null);function v(t,e){const n=y[t]||(y[t]=Object.create(null));return n[e]||(n[e]=function(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}(t,e))}function x(t,e){return b(e)?p(e,((e,n)=>{n?t.icons[e]=n:t.missing.add(e)})):[]}function w(t,e){let n=[];return("string"==typeof t?[t]:Object.keys(y)).forEach((t=>{("string"==typeof t&&"string"==typeof e?[e]:Object.keys(y[t]||{})).forEach((e=>{const o=v(t,e);n=n.concat(Object.keys(o.icons).map((n=>(""!==t?"@"+t+":":"")+e+":"+n)))}))})),n}let k=!1;function j(t){return"boolean"==typeof t&&(k=t),k}function A(t){const e="string"==typeof t?l(t,!0,k):t;if(e){const t=v(e.provider,e.prefix),n=e.name;return t.icons[n]||(t.missing.has(n)?null:void 0)}}function _(t,e){const n=l(t,!0,k);if(!n)return!1;return function(t,e,n){try{if("string"==typeof n.body)return t.icons[e]={...n},!0}catch(t){}return!1}(v(n.provider,n.prefix),n.name,e)}function C(t,e){if("object"!=typeof t)return!1;if("string"!=typeof e&&(e=t.provider||""),k&&!e&&!t.prefix){let e=!1;return b(t)&&(t.prefix="",p(t,((t,n)=>{n&&_(t,n)&&(e=!0)}))),e}const n=t.prefix;if(!f({provider:e,prefix:n,name:"a"}))return!1;return!!x(v(e,n),t)}function O(t){return!!A(t)}function S(t){const e=A(t);return e?{...n,...e}:null}function I(t,e){t.forEach((t=>{const n=t.loaderCallbacks;n&&(t.loaderCallbacks=n.filter((t=>t.id!==e)))}))}let E=0;const M=Object.create(null);function T(t,e){M[t]=e}function F(t){return M[t]||M[""]}var N={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function P(t,e,n,o){const i=t.resources.length,r=t.random?Math.floor(Math.random()*i):t.index;let s;if(t.random){let e=t.resources.slice(0);for(s=[];e.length>1;){const t=Math.floor(Math.random()*e.length);s.push(e[t]),e=e.slice(0,t).concat(e.slice(t+1))}s=s.concat(e)}else s=t.resources.slice(r).concat(t.resources.slice(0,r));const c=Date.now();let a,u="pending",l=0,f=null,d=[],h=[];function p(){f&&(clearTimeout(f),f=null)}function g(){"pending"===u&&(u="aborted"),p(),d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function m(t,e){e&&(h=[]),"function"==typeof t&&h.push(t)}function b(){u="failed",h.forEach((t=>{t(void 0,a)}))}function y(){d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function v(){if("pending"!==u)return;p();const o=s.shift();if(void 0===o)return d.length?void(f=setTimeout((()=>{p(),"pending"===u&&(y(),b())}),t.timeout)):void b();const i={status:"pending",resource:o,callback:(e,n)=>{!function(e,n,o){const i="success"!==n;switch(d=d.filter((t=>t!==e)),u){case"pending":break;case"failed":if(i||!t.dataAfterTimeout)return;break;default:return}if("abort"===n)return a=o,void b();if(i)return a=o,void(d.length||(s.length?v():b()));if(p(),y(),!t.random){const n=t.resources.indexOf(e.resource);-1!==n&&n!==t.index&&(t.index=n)}u="completed",h.forEach((t=>{t(o)}))}(i,e,n)}};d.push(i),l++,f=setTimeout(v,t.rotate),n(o,e,i.callback)}return"function"==typeof o&&h.push(o),setTimeout(v),function(){return{startTime:c,payload:e,status:u,queriesSent:l,queriesPending:d.length,subscribe:m,abort:g}}}function R(t){const e={...N,...t};let n=[];function o(){n=n.filter((t=>"pending"===t().status))}return{query:function(t,i,r){const s=P(e,t,i,((t,e)=>{o(),r&&r(t,e)}));return n.push(s),s},find:function(t){return n.find((e=>t(e)))||null},setIndex:t=>{e.index=t},getIndex:()=>e.index,cleanup:o}}function L(t){let e;if("string"==typeof t.resources)e=[t.resources];else if(e=t.resources,!(e instanceof Array&&e.length))return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:!0===t.random,index:t.index||0,dataAfterTimeout:!1!==t.dataAfterTimeout}}const z=Object.create(null),Q=["https://api.simplesvg.com","https://api.unisvg.com"],q=[];for(;Q.length>0;)1===Q.length||Math.random()>.5?q.push(Q.shift()):q.push(Q.pop());function D(t,e){const n=L(e);return null!==n&&(z[t]=n,!0)}function U(t){return z[t]}function J(){return Object.keys(z)}function $(){}z[""]=L({resources:["https://api.iconify.design"].concat(q)});const H=Object.create(null);function B(t,e,n){let o,i;if("string"==typeof t){const e=F(t);if(!e)return n(void 0,424),$;i=e.send;const r=function(t){if(!H[t]){const e=U(t);if(!e)return;const n={config:e,redundancy:R(e)};H[t]=n}return H[t]}(t);r&&(o=r.redundancy)}else{const e=L(t);if(e){o=R(e);const n=F(t.resources?t.resources[0]:"");n&&(i=n.send)}}return o&&i?o.query(e,i,n)().abort:(n(void 0,424),$)}const G="iconify2",V="iconify",K="iconify-count",W="iconify-version",X=36e5;function Y(t,e){try{return t.getItem(e)}catch(t){}}function Z(t,e,n){try{return t.setItem(e,n),!0}catch(t){}}function tt(t,e){try{t.removeItem(e)}catch(t){}}function et(t,e){return Z(t,K,e.toString())}function nt(t){return parseInt(Y(t,K))||0}const ot={local:!0,session:!0},it={local:new Set,session:new Set};let rt=!1;let st="undefined"==typeof window?{}:window;function ct(t){const e=t+"Storage";try{if(st&&st[e]&&"number"==typeof st[e].length)return st[e]}catch(t){}ot[t]=!1}function at(t,e){const n=ct(t);if(!n)return;const o=Y(n,W);if(o!==G){if(o){const t=nt(n);for(let e=0;e<t;e++)tt(n,V+e.toString())}return Z(n,W,G),void et(n,0)}const i=Math.floor(Date.now()/X)-168,r=t=>{const o=V+t.toString(),r=Y(n,o);if("string"==typeof r){try{const n=JSON.parse(r);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>i&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&e(n,t))return!0}catch(t){}tt(n,o)}};let s=nt(n);for(let e=s-1;e>=0;e--)r(e)||(e===s-1?(s--,et(n,s)):it[t].add(e))}function ut(){if(!rt){rt=!0;for(const t in ot)at(t,(t=>{const e=t.data,n=v(t.provider,e.prefix);if(!x(n,e).length)return!1;const o=e.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,o):o,!0}))}}function lt(t,e){function n(n){let o;if(!ot[n]||!(o=ct(n)))return;const i=it[n];let r;if(i.size)i.delete(r=Array.from(i).shift());else if(r=nt(o),!et(o,r+1))return;const s={cached:Math.floor(Date.now()/X),provider:t.provider,data:e};return Z(o,V+r.toString(),JSON.stringify(s))}rt||ut(),e.lastModified&&!function(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const n in ot)at(n,(n=>{const o=n.data;return n.provider!==t.provider||o.prefix!==t.prefix||o.lastModified===e}));return!0}(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&delete(e=Object.assign({},e)).not_found,n("local")||n("session"))}function ft(){}function dt(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout((()=>{t.iconsLoaderFlag=!1,function(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout((()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const o=t.provider,i=t.prefix;e.forEach((e=>{const r=e.icons,s=r.pending.length;r.pending=r.pending.filter((e=>{if(e.prefix!==i)return!0;const s=e.name;if(t.icons[s])r.loaded.push({provider:o,prefix:i,name:s});else{if(!t.missing.has(s))return n=!0,!0;r.missing.push({provider:o,prefix:i,name:s})}return!1})),r.pending.length!==s&&(n||I([t],e.id),e.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),e.abort))}))})))}(t)})))}const ht=(t,e)=>{const n=function(t,e=!0,n=!1){const o=[];return t.forEach((t=>{const i="string"==typeof t?l(t,e,n):t;i&&o.push(i)})),o}(t,!0,j()),o=function(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort(((t,e)=>t.provider!==e.provider?t.provider.localeCompare(e.provider):t.prefix!==e.prefix?t.prefix.localeCompare(e.prefix):t.name.localeCompare(e.name)));let o={provider:"",prefix:"",name:""};return t.forEach((t=>{if(o.name===t.name&&o.prefix===t.prefix&&o.provider===t.provider)return;o=t;const i=t.provider,r=t.prefix,s=t.name,c=n[i]||(n[i]=Object.create(null)),a=c[r]||(c[r]=v(i,r));let u;u=s in a.icons?e.loaded:""===r||a.missing.has(s)?e.missing:e.pending;const l={provider:i,prefix:r,name:s};u.push(l)})),e}(n);if(!o.pending.length){let t=!0;return e&&setTimeout((()=>{t&&e(o.loaded,o.missing,o.pending,ft)})),()=>{t=!1}}const i=Object.create(null),r=[];let s,c;return o.pending.forEach((t=>{const{provider:e,prefix:n}=t;if(n===c&&e===s)return;s=e,c=n,r.push(v(e,n));const o=i[e]||(i[e]=Object.create(null));o[n]||(o[n]=[])})),o.pending.forEach((t=>{const{provider:e,prefix:n,name:o}=t,r=v(e,n),s=r.pendingIcons||(r.pendingIcons=new Set);s.has(o)||(s.add(o),i[e][n].push(o))})),r.forEach((t=>{const{provider:e,prefix:n}=t;i[e][n].length&&function(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout((()=>{t.iconsQueueFlag=!1;const{provider:e,prefix:n}=t,o=t.iconsToLoad;let i;delete t.iconsToLoad,o&&(i=F(e))&&i.prepare(e,n,o).forEach((n=>{B(e,n,(e=>{if("object"!=typeof e)n.icons.forEach((e=>{t.missing.add(e)}));else try{const n=x(t,e);if(!n.length)return;const o=t.pendingIcons;o&&n.forEach((t=>{o.delete(t)})),lt(t,e)}catch(t){console.error(t)}dt(t)}))}))})))}(t,i[e][n])})),e?function(t,e,n){const o=E++,i=I.bind(null,n,o);if(!e.pending.length)return i;const r={id:o,icons:e,callback:t,abort:i};return n.forEach((t=>{(t.loaderCallbacks||(t.loaderCallbacks=[])).push(r)})),i}(e,o,r):ft},pt=t=>new Promise(((e,o)=>{const i="string"==typeof t?l(t,!0):t;i?ht([i||t],(r=>{if(r.length&&i){const t=A(i);if(t)return void e({...n,...t})}o(t)})):o(t)}));function gt(t,e){const n="string"==typeof t?l(t,!0,!0):null;if(!n){const e=function(t){try{const e="string"==typeof t?JSON.parse(t):t;if("string"==typeof e.body)return{...e}}catch(t){}}(t);return{value:t,data:e}}const o=A(n);if(void 0!==o||!n.prefix)return{value:t,name:n,data:o};const i=ht([n],(()=>e(t,n,A(n))));return{value:t,name:n,loading:i}}function mt(t){return t.hasAttribute("inline")}let bt=!1;try{bt=0===navigator.vendor.indexOf("Apple")}catch(t){}const yt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,vt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function xt(t,e,n){if(1===e)return t;if(n=n||100,"number"==typeof t)return Math.ceil(t*e*n)/n;if("string"!=typeof t)return t;const o=t.split(yt);if(null===o||!o.length)return t;const i=[];let r=o.shift(),s=vt.test(r);for(;;){if(s){const t=parseFloat(r);isNaN(t)?i.push(r):i.push(Math.ceil(t*e*n)/n)}else i.push(r);if(r=o.shift(),void 0===r)return i.join("");s=!s}}function wt(t,e){const o={...n,...t},i={...r,...e},s={left:o.left,top:o.top,width:o.width,height:o.height};let c=o.body;[o,i].forEach((t=>{const e=[],n=t.hFlip,o=t.vFlip;let i,r=t.rotate;switch(n?o?r+=2:(e.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),e.push("scale(-1 1)"),s.top=s.left=0):o&&(e.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),e.push("scale(1 -1)"),s.top=s.left=0),r<0&&(r-=4*Math.floor(r/4)),r%=4,r){case 1:i=s.height/2+s.top,e.unshift("rotate(90 "+i.toString()+" "+i.toString()+")");break;case 2:e.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:i=s.width/2+s.left,e.unshift("rotate(-90 "+i.toString()+" "+i.toString()+")")}r%2==1&&(s.left!==s.top&&(i=s.left,s.left=s.top,s.top=i),s.width!==s.height&&(i=s.width,s.width=s.height,s.height=i)),e.length&&(c='<g transform="'+e.join(" ")+'">'+c+"</g>")}));const a=i.width,u=i.height,l=s.width,f=s.height;let d,h;null===a?(h=null===u?"1em":"auto"===u?f:u,d=xt(h,l/f)):(d="auto"===a?l:a,h=null===u?xt(d,f/l):"auto"===u?f:u);const p={},g=(t,e)=>{(t=>"unset"===t||"undefined"===t||"none"===t)(e)||(p[t]=e.toString())};return g("width",d),g("height",h),p.viewBox=s.left.toString()+" "+s.top.toString()+" "+l.toString()+" "+f.toString(),{attributes:p,body:c}}let kt=(()=>{let t;try{if(t=fetch,"function"==typeof t)return t}catch(t){}})();function jt(t){kt=t}function At(){return kt}const _t={prepare:(t,e,n)=>{const o=[],i=function(t,e){const n=U(t);if(!n)return 0;let o;if(n.maxURL){let t=0;n.resources.forEach((e=>{const n=e;t=Math.max(t,n.length)}));const i=e+".json?icons=";o=n.maxURL-t-n.path.length-i.length}else o=0;return o}(t,e),r="icons";let s={type:r,provider:t,prefix:e,icons:[]},c=0;return n.forEach(((n,a)=>{c+=n.length+1,c>=i&&a>0&&(o.push(s),s={type:r,provider:t,prefix:e,icons:[]},c=n.length),s.icons.push(n)})),o.push(s),o},send:(t,e,n)=>{if(!kt)return void n("abort",424);let o=function(t){if("string"==typeof t){const e=U(t);if(e)return e.path}return"/"}(e.provider);switch(e.type){case"icons":{const t=e.prefix,n=e.icons.join(",");o+=t+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const t=e.uri;o+="/"===t.slice(0,1)?t.slice(1):t;break}default:return void n("abort",400)}let i=503;kt(t+o).then((t=>{const e=t.status;if(200===e)return i=501,t.json();setTimeout((()=>{n(function(t){return 404===t}(e)?"abort":"next",e)}))})).then((t=>{"object"==typeof t&&null!==t?setTimeout((()=>{n("success",t)})):setTimeout((()=>{404===t?n("abort",t):n("next",i)}))})).catch((()=>{n("next",i)}))}};function Ct(t,e){switch(t){case"local":case"session":ot[t]=e;break;case"all":for(const t in ot)ot[t]=e}}const Ot="data-style";let St="";function It(t){St=t}function Et(t,e){let n=Array.from(t.childNodes).find((t=>t.hasAttribute&&t.hasAttribute(Ot)));n||(n=document.createElement("style"),n.setAttribute(Ot,Ot),t.appendChild(n)),n.textContent=":host{display:inline-block;vertical-align:"+(e?"-0.125em":"0")+"}span,svg{display:block}"+St}function Mt(t,e){let n=-1===t.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const t in e)n+=" "+t+'="'+e[t]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}const Tt={"background-color":"currentColor"},Ft={"background-color":"transparent"},Nt={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Pt={"-webkit-mask":Tt,mask:Tt,background:Ft};for(const t in Pt){const e=Pt[t];for(const n in Nt)e[t+"-"+n]=Nt[n]}function Rt(t){return t?t+(t.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Lt(t,e){const o=e.icon.data,i=e.customisations,r=wt(o,i);i.preserveAspectRatio&&(r.attributes.preserveAspectRatio=i.preserveAspectRatio);const s=e.renderedMode;let c;if("svg"===s)c=function(t){const e=document.createElement("span"),n=t.attributes;let o="";return n.width||(o="width: inherit;"),n.height||(o+="height: inherit;"),o&&(n.style=o),e.innerHTML=Mt(t.body,n),e.firstChild}(r);else c=function(t,e,n){const o=document.createElement("span");let i=t.body;-1!==i.indexOf("<a")&&(i+="\x3c!-- "+Date.now()+" --\x3e");const r=t.attributes,s='url("data:image/svg+xml,'+(u=Mt(i,{...r,width:e.width+"",height:e.height+""}),u.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")+'")'),c=o.style,a={"--svg":s,width:Rt(r.width),height:Rt(r.height),...n?Tt:Ft};var u;for(const t in a)c.setProperty(t,a[t]);return o}(r,{...n,...o},"mask"===s);const a=Array.from(t.childNodes).find((t=>{const e=t.tagName&&t.tagName.toUpperCase();return"SPAN"===e||"SVG"===e}));a?"SPAN"===c.tagName&&a.tagName===c.tagName?a.setAttribute("style",c.getAttribute("style")):t.replaceChild(c,a):t.appendChild(c)}function zt(t,e,n){return{rendered:!1,inline:e,icon:t,lastRender:n&&(n.rendered?n:n.lastRender)}}!function(t="iconify-icon"){let e,n;try{e=window.customElements,n=window.HTMLElement}catch(t){return}if(!e||!n)return;const o=e.get(t);if(o)return o;const i=["icon","mode","inline","width","height","rotate","flip"],r=class extends n{_shadowRoot;_state;_checkQueued=!1;constructor(){super();const t=this._shadowRoot=this.attachShadow({mode:"open"}),e=mt(this);Et(t,e),this._state=zt({value:""},e),this._queueCheck()}static get observedAttributes(){return i.slice(0)}attributeChangedCallback(t){if("inline"===t){const t=mt(this),e=this._state;t!==e.inline&&(e.inline=t,Et(this._shadowRoot,t))}else this._queueCheck()}get icon(){const t=this.getAttribute("icon");if(t&&"{"===t.slice(0,1))try{return JSON.parse(t)}catch(t){}return t}set icon(t){"object"==typeof t&&(t=JSON.stringify(t)),this.setAttribute("icon",t)}get inline(){return mt(this)}set inline(t){t?this.setAttribute("inline","true"):this.removeAttribute("inline")}restartAnimation(){const t=this._state;if(t.rendered){const e=this._shadowRoot;if("svg"===t.renderedMode)try{return void e.lastChild.setCurrentTime(0)}catch(t){}Lt(e,t)}}get status(){const t=this._state;return t.rendered?"rendered":null===t.icon.data?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout((()=>{this._check()})))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const t=this._state,e=this.getAttribute("icon");if(e!==t.icon.value)return void this._iconChanged(e);if(!t.rendered)return;const n=this.getAttribute("mode"),o=a(this);(t.attrMode!==n||function(t,e){for(const n in c)if(t[n]!==e[n])return!0;return!1}(t.customisations,o))&&this._renderIcon(t.icon,o,n)}_iconChanged(t){const e=gt(t,((t,e,n)=>{const o=this._state;if(o.rendered||this.getAttribute("icon")!==t)return;const i={value:t,name:e,data:n};i.data?this._gotIconData(i):o.icon=i}));e.data?this._gotIconData(e):this._state=zt(e,this._state.inline,this._state)}_gotIconData(t){this._checkQueued=!1,this._renderIcon(t,a(this),this.getAttribute("mode"))}_renderIcon(t,e,n){const o=function(t,e){switch(e){case"svg":case"bg":case"mask":return e}return"style"===e||!bt&&-1!==t.indexOf("<a")?-1===t.indexOf("currentColor")?"bg":"mask":"svg"}(t.data.body,n),i=this._state.inline;Lt(this._shadowRoot,this._state={rendered:!0,icon:t,inline:i,customisations:e,attrMode:n,renderedMode:o})}};i.forEach((t=>{t in r.prototype||Object.defineProperty(r.prototype,t,{get:function(){return this.getAttribute(t)},set:function(e){null!==e?this.setAttribute(t,e):this.removeAttribute(t)}})}));const s=function(){let t;T("",_t),j(!0);try{t=window}catch(t){}if(t){if(ut(),void 0!==t.IconifyPreload){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof e&&null!==e&&(e instanceof Array?e:[e]).forEach((t=>{try{("object"!=typeof t||null===t||t instanceof Array||"object"!=typeof t.icons||"string"!=typeof t.prefix||!C(t))&&console.error(n)}catch(t){console.error(n)}}))}if(void 0!==t.IconifyProviders){const e=t.IconifyProviders;if("object"==typeof e&&null!==e)for(const t in e){const n="IconifyProviders["+t+"] is invalid.";try{const o=e[t];if("object"!=typeof o||!o||void 0===o.resources)continue;D(t,o)||console.error(n)}catch(t){console.error(n)}}}}return{enableCache:t=>Ct(t,!0),disableCache:t=>Ct(t,!1),iconExists:O,getIcon:S,listIcons:w,addIcon:_,addCollection:C,calculateSize:xt,buildIcon:wt,loadIcons:ht,loadIcon:pt,addAPIProvider:D,appendCustomStyle:It,_api:{getAPIConfig:U,setAPIModule:T,sendAPIQuery:B,setFetch:jt,getFetch:At,listAPIProviders:J}}}();for(const t in s)r[t]=r.prototype[t]=s[t];e.define(t,r)}()}();

window.addEventListener('DOMContentLoaded', (event) => {
	document
		.querySelectorAll('.visual-block--bundle .demo-icons')
		.forEach((container) => {
			// Hide child nodes
			const children = container.querySelectorAll('iconify-icon');
			children.forEach((node) => {
				node.style.display = 'none';
			});
			const count = children.length;

			function getNode(index) {
				if (index > count) {
					index -= count;
				}
				if (index < 1) {
					index += count;
				}
				return container.querySelector('iconify-icon:nth-child(' + index + ')');
			}

			// Show on timer
			let index = 0;
			const createTimer = () =>
				window.setInterval(() => {
					index++;
					if (index > count) {
						index -= count;
					}

					// Node to show
					let node = getNode(index);
					if (node) {
						node.classList.remove('fade');
						node.style.display = '';
						try {
							node.restartAnimation();
						} catch (err) {
							//
						}
					}

					// Node to fade
					node = getNode(index + 4);
					if (node) {
						node.classList.add('fade');
					}

					// Node to hide
					node = getNode(index + 1);
					if (node) {
						node.style.display = 'none';
					}
				}, 500);

			// Create timer in few seconds, toggle when window is hidden
			setTimeout(() => {
				let timer = createTimer();
				let hidden = false;
				if (typeof document.hidden === 'boolean') {
					hidden = document.hidden;
					document.addEventListener('visibilitychange', () => {
						hidden = document.hidden;
						if (hidden) {
							if (timer) {
								clearInterval(timer);
								timer = null;
							}
						} else {
							if (!timer) {
								timer = createTimer();
							}
						}
					});
				}
			}, 1500);
		});
});

const restartingAnimations = new Set();

/**
 * Restart animaitons
 */
function restartAnimations(container, timer) {
	if (restartingAnimations.has(container)) {
		return;
	}
	restartingAnimations.add(container);
	setTimeout(() => {
		restartingAnimations.delete(container);
	}, timer || 1000);

	Array.from(container.querySelectorAll('iconify-icon')).forEach((node) => {
		try {
			node.restartAnimation();
		} catch (err) {
			//
		}
	});
}

window.addEventListener('DOMContentLoaded', () => {
	// Animate icons
	Array.from(
		document.querySelectorAll(
			'.content-section h1, .api-icon-name, .docs-short-navigation'
		)
	).forEach((node) => {
		node.addEventListener('mouseenter', () => {
			restartAnimations(node);
		});
	});

	// Animate samples
	Array.from(document.querySelectorAll('.restart-animation')).forEach(
		(node) => {
			const text = document.createElement('small');
			text.textContent = 'Move mouse over icon to restart animation';
			node.appendChild(text);
			node.addEventListener('mouseenter', () => {
				restartAnimations(node);
			});
		}
	);
});

window.addEventListener('DOMContentLoaded', (event) => {
	const baseClass = 'code-block-content';
	const withButtonClass = baseClass + '--with-copy';

	const buttonClass = 'code-block-copy';

	const noticeClass = 'code-block-notice';

	/**
	 * Copy to clipboard
	 */
	function copyCode(node, code) {
		const rawCode = atob(code).trim();

		function fallback() {
			const parentNode = node.parentNode;
			const textarea = document.createElement('textarea');
			textarea.value = rawCode;
			textarea.style.height = 0;
			parentNode.insertBefore(textarea, node);

			textarea.focus();
			textarea.select();

			try {
				// Modern way
				if (!document.execCommand || !document.execCommand('copy')) {
					// Ancient way
					if (window.clipboardData) {
						window.clipboardData.setData('Text', rawCode);
					}
				}
			} catch (err) {}

			// Remove textarea on next tick
			setTimeout(() => {
				parentNode.removeChild(textarea);
			});
		}

		try {
			navigator.clipboard
				.writeText(rawCode)
				.then(() => {
					// Success
				})
				.catch((err) => {
					// Failed: use fallback
					fallback();
				});
		} catch (err) {
			// Failed: use fallback
			fallback();
		}
	}

	// Find all code nodes
	const nodes = document.querySelectorAll('.' + baseClass);
	if (!nodes || !nodes.forEach) {
		// Ignore old browsers
		return;
	}
	nodes.forEach((node) => {
		if (
			!node.classList ||
			!node.classList.contains ||
			node.classList.contains(withButtonClass) ||
			!node.hasAttribute('data-raw-code')
		) {
			// Ignore old browsers and nodes without data
			return;
		}

		// Get raw code
		const code = node.getAttribute('data-raw-code');
		if (!code.length) {
			return;
		}

		// Mark div as parsed and add button
		node.classList.add(withButtonClass);

		// Get trigger node
		let triggerNode = node;
		if (triggerNode.parentElement.classList.contains('code-block')) {
			triggerNode = triggerNode.parentElement;
		}

		// Timer to hide animation and button element
		let cannotHide = null;
		let isHover = false;
		let buttonNode = null;
		let hidingNode = null;

		function removeNode() {
			hidingNode = buttonNode;
			buttonNode = null;
			hidingNode.classList.add(buttonClass + '--hiding');
			setTimeout(() => {
				if (hidingNode) {
					node.removeChild(hidingNode);
					hidingNode = null;
				}
			}, 500);
		}

		function triggerRemoveNode() {
			if (!isHover && !cannotHide) {
				removeNode();
			}
		}

		function addButton() {
			if (cannotHide) {
				// Already exists
				return;
			}

			if (hidingNode) {
				// Already hiding: reuse old node
				buttonNode = hidingNode;
				hidingNode = null;
				buttonNode.classList.remove(buttonClass + '--hiding');
				return;
			}

			// Create button
			buttonNode = document.createElement('a');
			buttonNode.setAttribute('href', '#');
			buttonNode.setAttribute('title', 'Copy to clipboard');
			buttonNode.addEventListener('click', (event) => {
				event.preventDefault();
				copyCode(node, code);

				// Show notice
				const noticeNode = document.createElement('div');
				noticeNode.className = noticeClass;
				noticeNode.innerHTML =
					'<iconify-icon icon="line-md:confirm"></iconify-icon> Copied to clipboard';
				node.appendChild(noticeNode);

				// Remove notice after delay
				setTimeout(() => {
					node.removeChild(noticeNode);
				}, 2000);
			});

			buttonNode.className = buttonClass;
			buttonNode.innerHTML =
				'<iconify-icon icon="line-md:clipboard-arrow"></iconify-icon>';

			node.appendChild(buttonNode);

			// Allow hiding after animation is complete
			cannotHide = setTimeout(() => {
				// Allow hiding
				cannotHide = null;
				if (!isHover) {
					removeNode();
				}
			}, 1500);
		}

		triggerNode.addEventListener('mouseenter', () => {
			isHover = true;
			addButton();
		});

		triggerNode.addEventListener('mouseleave', () => {
			isHover = false;
			triggerRemoveNode();
		});
	});
});

window.addEventListener('DOMContentLoaded', () => {
	// Restart delay-demo
	Array.from(document.querySelectorAll('.delay-demo-wrapper')).forEach(
		(node) => {
			const frame = node.querySelector('iframe');
			if (!frame) {
				return;
			}

			const comment = document.createElement('small');
			comment.textContent = 'Hover demo above to restart it.';
			node.appendChild(comment);

			const html = node.innerHTML;

			// Add event
			let restarting = false;
			node.addEventListener('mouseenter', () => {
				if (restarting) {
					return;
				}
				restarting = true;
				node.classList.add('restarting');
				node.innerHTML = html;
				setTimeout(() => {
					restarting = false;
					node.classList.remove('restarting');
				}, 2000);
			});
		}
	);
});

window.addEventListener('DOMContentLoaded', (event) => {
	const baseClass = 'docs-navigation';
	const noButtonClass = baseClass + '--no-button';
	const hasButtonClass = baseClass + '--has-button';
	const containerVisibleClass = baseClass + '--visible';

	const visibleIcon = 'line-md:menu-unfold-left';
	const hiddenIcon = 'line-md:menu-fold-right';

	const container = document.querySelector('.' + baseClass);
	const buttonsContainer = document.querySelector('.' + baseClass + '-button');

	// Make sure contains are there and classList is supported
	try {
		if (
			!container ||
			!buttonsContainer ||
			!container.classList.contains(noButtonClass)
		) {
			return;
		}
	} catch (err) {
		return;
	}

	// Remove unnecessary classes
	const containerClasses = container.classList;
	containerClasses.remove(noButtonClass);
	containerClasses.remove(containerVisibleClass);
	containerClasses.add(hasButtonClass);

	// Visibility status
	let visible = false;

	// Add link
	buttonsContainer.innerHTML =
		'<a href="#" title="Navigation"><iconify-icon icon="' +
		visibleIcon +
		'"></iconify-icon></a>';

	const linkNode = buttonsContainer.querySelector('a');

	// Create event
	linkNode.addEventListener('click', (event) => {
		event.preventDefault();
		visible = !visible;
		containerClasses.toggle(containerVisibleClass);
		linkNode.innerHTML =
			'<iconify-icon icon="' +
			(visible ? hiddenIcon : visibleIcon) +
			'"></iconify-icon>';
	});

	// Restart animations on hover
	container.addEventListener('mouseenter', () => {
		restartAnimations(container);
	});
});

(function() {
	function add(data) {
		try {
			window.customElements
				.get('iconify-icon')
				.addCollection(data);
			return;
		} catch (err) {}
	}
	add({"prefix":"line-md","icons":{"home-twotone-alt":{"body":"<rect width=\"4\" height=\"8\" x=\"10\" y=\"13\" fill=\"currentColor\" fill-opacity=\"0\"><animate fill=\"freeze\" attributeName=\"fill-opacity\" begin=\"0.9s\" dur=\"0.15s\" values=\"0;0.3\"/></rect><g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke-dasharray=\"15\" stroke-dashoffset=\"15\" d=\"M4.5 21.5h15\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.2s\" values=\"15;0\"/></path><path stroke-dasharray=\"15\" stroke-dashoffset=\"15\" d=\"M4.5 21.5V8M19.5 21.5V8\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.2s\" dur=\"0.2s\" values=\"15;0\"/></path><path stroke-dasharray=\"24\" stroke-dashoffset=\"24\" d=\"M9.5 21.5V12.5H14.5V21.5\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.4s\" dur=\"0.4s\" values=\"24;0\"/></path><path stroke-dasharray=\"30\" stroke-dashoffset=\"30\" stroke-width=\"2\" d=\"M2 10L12 2L22 10\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.5s\" dur=\"0.4s\" values=\"30;0\"/></path></g>"},"github-loop":{"body":"<mask id=\"lineMdGithubLoop0\" width=\"24\" height=\"24\" x=\"0\" y=\"0\"><g fill=\"#fff\"><ellipse cx=\"9.5\" cy=\"9\" rx=\"1.5\" ry=\"1\"/><ellipse cx=\"14.5\" cy=\"9\" rx=\"1.5\" ry=\"1\"/></g></mask><g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path stroke-dasharray=\"30\" stroke-dashoffset=\"30\" d=\"M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.6s\" values=\"30;0\"/></path><path stroke-dasharray=\"10\" stroke-dashoffset=\"10\" d=\"M9 19\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.7s\" dur=\"0.2s\" values=\"10;0\"/><animate attributeName=\"d\" dur=\"3s\" repeatCount=\"indefinite\" values=\"M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5\"/></path></g><rect width=\"8\" height=\"4\" x=\"8\" y=\"11\" fill=\"currentColor\" mask=\"url(#lineMdGithubLoop0)\"><animate attributeName=\"y\" dur=\"10s\" keyTimes=\"0;0.45;0.46;0.54;0.55;1\" repeatCount=\"indefinite\" values=\"11;11;7;7;11;11\"/></rect>"},"document-list":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><g stroke-width=\"2\"><path stroke-dasharray=\"64\" stroke-dashoffset=\"64\" d=\"M13 3L19 9V21H5V3H13\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.6s\" values=\"64;0\"/></path><path stroke-dasharray=\"6\" stroke-dashoffset=\"6\" d=\"M9 13H13\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"1s\" dur=\"0.2s\" values=\"6;0\"/></path><path stroke-dasharray=\"8\" stroke-dashoffset=\"8\" d=\"M9 16H15\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"1.2s\" dur=\"0.2s\" values=\"8;0\"/></path></g><path stroke-dasharray=\"14\" stroke-dashoffset=\"14\" d=\"M12.5 3V8.5H19\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.7s\" dur=\"0.2s\" values=\"14;0\"/></path></g>"},"document-code":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke-dasharray=\"64\" stroke-dashoffset=\"64\" stroke-width=\"2\" d=\"M13 3L19 9V21H5V3H13\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.6s\" values=\"64;0\"/></path><path stroke-dasharray=\"14\" stroke-dashoffset=\"14\" d=\"M12.5 3V8.5H19\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.7s\" dur=\"0.2s\" values=\"14;0\"/></path><g stroke-dasharray=\"8\" stroke-dashoffset=\"8\" stroke-width=\"2\"><path d=\"M10 13L8 15L10 17\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"1s\" dur=\"0.2s\" values=\"8;0\"/></path><path d=\"M14 13L16 15L14 17\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"1.2s\" dur=\"0.2s\" values=\"8;0\"/></path></g></g>"},"image-twotone":{"body":"<g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"none\" stroke-dasharray=\"66\" stroke-dashoffset=\"66\" stroke-width=\"2\" d=\"M3 14V5H21V19H3V14\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.6s\" values=\"66;0\"/></path><path fill=\"currentColor\" fill-opacity=\"0\" stroke-dasharray=\"52\" stroke-dashoffset=\"52\" d=\"M3 16L7 13L10 15L16 10L21 14V19H3Z\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.6s\" dur=\"0.8s\" values=\"52;0\"/><animate fill=\"freeze\" attributeName=\"fill-opacity\" begin=\"1s\" dur=\"0.15s\" values=\"0;0.3\"/></path></g><circle cx=\"7.5\" cy=\"9.5\" r=\"1.5\" fill=\"currentColor\" fill-opacity=\"0\"><animate fill=\"freeze\" attributeName=\"fill-opacity\" begin=\"1s\" dur=\"0.4s\" values=\"0;1\"/></circle>"},"mastodon":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path stroke-dasharray=\"80\" stroke-dashoffset=\"80\" d=\"M15.5 21.5C6 23.5 6.5 16.5 7.5 16.5C11 16.5 21 19 21 12.5V8.5C21 4.5 18.5 3 14 3H10C5.5 3 3 4 3 10V13C3 19 5 24 15.5 21.5Z\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.6s\" values=\"80;160\"/></path><path stroke-dasharray=\"32\" stroke-dashoffset=\"32\" d=\"M7 13.5L7 8C7 8 7.5 6 9.5 6C11.5 6 12 8 12 8L12 10.5L12 8C12 8 12.5 6 14.5 6C16.5 6 17 8 17 8L17 13.5\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.7s\" dur=\"0.4s\" values=\"32;0\"/></path></g>"},"discord":{"body":"<g fill=\"currentColor\" fill-opacity=\"0\"><circle cx=\"9\" cy=\"12\" r=\"1.5\"><animate fill=\"freeze\" attributeName=\"fill-opacity\" begin=\"1.2s\" dur=\"0.4s\" values=\"0;1\"/></circle><circle cx=\"15\" cy=\"12\" r=\"1.5\"><animate fill=\"freeze\" attributeName=\"fill-opacity\" begin=\"1.4s\" dur=\"0.4s\" values=\"0;1\"/></circle></g><g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path stroke-dasharray=\"30\" stroke-dashoffset=\"30\" d=\"M15.5 17.5L16.5 19.5C16.5 19.5 20.671 18.172 22 16C22 15 22.53 7.853 19 5.5C17.5 4.5 15 4 15 4L14 6H12M8.52799 17.5L7.52799 19.5C7.52799 19.5 3.35699 18.172 2.02799 16C2.02799 15 1.49799 7.853 5.02799 5.5C6.52799 4.5 9.02799 4 9.02799 4L10.028 6H12.028\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.6s\" values=\"30;60\"/></path><path stroke-dasharray=\"16\" stroke-dashoffset=\"16\" d=\"M5.5 16C10.5 18.5 13.5 18.5 18.5 16\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.7s\" dur=\"0.4s\" values=\"16;0\"/></path></g>"},"chevron-small-double-left":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-dasharray=\"8\" stroke-dashoffset=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 12L17 7M12 12L17 17\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.3s\" values=\"8;0\"/></path><path d=\"M6 12L11 7M6 12L11 17\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.3s\" dur=\"0.3s\" values=\"8;0\"/></path></g>"},"hash-small":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-dasharray=\"16\" stroke-dashoffset=\"16\" stroke-linecap=\"round\" stroke-width=\"2\"><path d=\"M6 9H19\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.2s\" values=\"16;0\"/></path><path d=\"M5 15H18\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.2s\" dur=\"0.2s\" values=\"16;0\"/></path><path d=\"M10 5L8 19\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.5s\" dur=\"0.2s\" values=\"16;0\"/></path><path d=\"M16 5L14 19\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.7s\" dur=\"0.2s\" values=\"16;0\"/></path></g>"},"clipboard-arrow":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><g stroke-width=\"2\"><path stroke-dasharray=\"16\" stroke-dashoffset=\"16\" d=\"M12 3H19V11\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.2s\" values=\"16;0\"/></path><path stroke-dasharray=\"44\" stroke-dashoffset=\"44\" d=\"M19 17V21H5V3H12\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.2s\" dur=\"0.4s\" values=\"44;0\"/></path><path stroke-dasharray=\"10\" stroke-dashoffset=\"10\" d=\"M21 14H12.5\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"1s\" dur=\"0.2s\" values=\"10;0\"/></path><path stroke-dasharray=\"6\" stroke-dashoffset=\"6\" d=\"M12 14L15 17M12 14L15 11\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"1.2s\" dur=\"0.2s\" values=\"6;0\"/></path></g><path stroke-dasharray=\"12\" stroke-dashoffset=\"12\" d=\"M14.5 3.5V6.5H9.5V3.5\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.7s\" dur=\"0.2s\" values=\"12;0\"/></path></g>"},"confirm":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-dasharray=\"24\" stroke-dashoffset=\"24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 11L11 17L21 7\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.4s\" values=\"24;0\"/></path>"},"alert":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path stroke-dasharray=\"60\" stroke-dashoffset=\"60\" d=\"M12 3L21 20H3L12 3Z\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.5s\" values=\"60;0\"/></path><path stroke-dasharray=\"6\" stroke-dashoffset=\"6\" d=\"M12 10V14\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.6s\" dur=\"0.2s\" values=\"6;0\"/></path></g><circle cx=\"12\" cy=\"17\" r=\"1\" fill=\"currentColor\" fill-opacity=\"0\"><animate fill=\"freeze\" attributeName=\"fill-opacity\" begin=\"0.8s\" dur=\"0.4s\" values=\"0;1\"/></circle>"},"alert-circle":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"2\"><path stroke-dasharray=\"60\" stroke-dashoffset=\"60\" d=\"M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.5s\" values=\"60;0\"/></path><path stroke-dasharray=\"8\" stroke-dashoffset=\"8\" d=\"M12 7V13\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.6s\" dur=\"0.2s\" values=\"8;0\"/></path></g><circle cx=\"12\" cy=\"17\" r=\"1\" fill=\"currentColor\" fill-opacity=\"0\"><animate fill=\"freeze\" attributeName=\"fill-opacity\" begin=\"0.8s\" dur=\"0.4s\" values=\"0;1\"/></circle>"},"construction-twotone":{"body":"<path fill=\"currentColor\" fill-opacity=\"0\" d=\"M21 21H3V19C3 18 4 17 5 17H19C20 17 21 18 21 19V21Z\"><animate fill=\"freeze\" attributeName=\"fill-opacity\" begin=\"1.5s\" dur=\"0.15s\" values=\"0;0.3\"/></path><g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><g stroke-width=\"2\"><path stroke-dasharray=\"44\" stroke-dashoffset=\"44\" d=\"M21 21H3V19C3 18 4 17 5 17H19C20 17 21 18 21 19V21Z\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.4s\" values=\"44;0\"/></path><path stroke-dasharray=\"18\" stroke-dashoffset=\"18\" d=\"M6 17L12 2M18 17L12 2\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.5s\" dur=\"0.3s\" values=\"18;0\"/></path></g><path stroke-dasharray=\"8\" stroke-dashoffset=\"8\" d=\"M8 12L12.5 9.5\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.9s\" dur=\"0.2s\" values=\"8;0\"/></path><path stroke-dasharray=\"10\" stroke-dashoffset=\"10\" d=\"M6 16L13.5 12\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"1.1s\" dur=\"0.2s\" values=\"10;0\"/></path><path stroke-dasharray=\"8\" stroke-dashoffset=\"8\" d=\"M9.5 17L14.5 14.5\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"1.3s\" dur=\"0.2s\" values=\"8;0\"/></path></g>"},"menu-unfold-left":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"2\"><path stroke-dasharray=\"10\" stroke-dashoffset=\"10\" d=\"M21 9L18 12L21 15\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.2s\" values=\"10;0\"/></path><path stroke-dasharray=\"16\" stroke-dashoffset=\"16\" d=\"M19 5H5\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.2s\" dur=\"0.2s\" values=\"16;0\"/></path><path stroke-dasharray=\"12\" stroke-dashoffset=\"12\" d=\"M14 12H5\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.4s\" dur=\"0.2s\" values=\"12;0\"/></path><path stroke-dasharray=\"16\" stroke-dashoffset=\"16\" d=\"M19 19H5\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.6s\" dur=\"0.2s\" values=\"16;0\"/></path></g>"},"menu-fold-right":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"2\"><path stroke-dasharray=\"10\" stroke-dashoffset=\"10\" d=\"M17 9L20 12L17 15\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.6s\" dur=\"0.2s\" values=\"10;0\"/></path><path stroke-dasharray=\"16\" stroke-dashoffset=\"16\" d=\"M5 5H19\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.2s\" values=\"16;0\"/></path><path stroke-dasharray=\"12\" stroke-dashoffset=\"12\" d=\"M5 12H14\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.2s\" dur=\"0.2s\" values=\"12;0\"/></path><path stroke-dasharray=\"16\" stroke-dashoffset=\"16\" d=\"M5 19H19\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.4s\" dur=\"0.2s\" values=\"16;0\"/></path></g>"},"chevron-small-left":{"body":"<path stroke=\"currentColor\" stroke-dasharray=\"8\" stroke-dashoffset=\"8\" stroke-linecap=\"round\" stroke-width=\"2\" d=\"M9 12L14 7M9 12L14 17\" fill=\"currentColor\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.3s\" values=\"8;0\"/></path>"},"github-twotone":{"body":"<path fill=\"currentColor\" fill-opacity=\"0\" d=\"M15 4.5C14.6122 4.39991 13.6683 4 12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98302 13.0822 6 14C7.01698 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18V22H15V18C15 17.3743 15.1506 16.038 14.5 15.5C15.8887 15.3749 16.983 14.9178 18 14C19.017 13.0822 19.5 11.6875 19.5 9.5C19.5 8 19.25 7 18.5 6C18.7863 5.21921 18.8438 4 18.5 3C16.9375 3 15.5255 4.07463 15 4.5Z\"><animate fill=\"freeze\" attributeName=\"fill-opacity\" begin=\"0.6s\" dur=\"0.15s\" values=\"0;0.3\"/></path><g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path stroke-dasharray=\"30\" stroke-dashoffset=\"30\" d=\"M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.6s\" values=\"30;0\"/></path><path stroke-dasharray=\"10\" stroke-dashoffset=\"10\" d=\"M9 19C7.59375 19 6.15625 18.4375 5.3125 17.8125C4.46875 17.1875 4.21875 16.1562 3 15.5\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.7s\" dur=\"0.2s\" values=\"10;0\"/></path></g>"},"cloud-twotone":{"body":"<path fill=\"currentColor\" fill-opacity=\"0\" d=\"M9 7L12 5L15 7L21 15L18 19H6L3 15L9 7Z\"><animate fill=\"freeze\" attributeName=\"fill-opacity\" begin=\"0.8s\" dur=\"0.15s\" values=\"0;0.3\"/></path><g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path stroke-dasharray=\"20\" stroke-dashoffset=\"20\" d=\"M12 19C12 19 9.5 19 7 19C4.5 19 3 17 3 15C3 13 4.5 11 7 11C8 11 8.5 11.5 8.5 11.5M12 19H17C19.5 19 21 17 21 15C21 13 19.5 11 17 11C16 11 15.5 11.5 15.5 11.5\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.4s\" values=\"20;0\"/></path><path stroke-dasharray=\"9\" stroke-dashoffset=\"9\" d=\"M17 11C17 11 17 10.5 17 10C17 7.5 15 5 12 5M7 11V10C7 7.5 9 5 12 5\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.5s\" dur=\"0.3s\" values=\"9;0\"/></path></g>"},"cloud-down-twotone":{"body":"<path fill=\"currentColor\" fill-opacity=\"0\" d=\"M9 6L12 4L15 6L21 14L17 19H7L3 14L9 6Z\"><animate fill=\"freeze\" attributeName=\"fill-opacity\" begin=\"1.3s\" dur=\"0.15s\" values=\"0;0.3\"/></path><g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path stroke-dasharray=\"16\" stroke-dashoffset=\"16\" d=\"M8 18H7C4.5 18 3 16 3 14C3 12 4.5 10 7 10C8 10 8.5 10.5 8.5 10.5M16 18H17C19.5 18 21 16 21 14C21 12 19.5 10 17 10C16 10 15.5 10.5 15.5 10.5\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.4s\" values=\"16;0\"/></path><path stroke-dasharray=\"9\" stroke-dashoffset=\"9\" d=\"M17 10C17 10 17 9.5 17 9C17 6.5 15 4 12 4M7 10V9C7 6.5 9 4 12 4\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.5s\" dur=\"0.3s\" values=\"9;0\"/></path><path stroke-dasharray=\"8\" stroke-dashoffset=\"8\" d=\"M12 15V21\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.9s\" dur=\"0.2s\" values=\"8;0\"/></path><path stroke-dasharray=\"3\" stroke-dashoffset=\"3\" d=\"M12 22L14 20M12 22L10 20\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"1.1s\" dur=\"0.2s\" values=\"3;0\"/></path></g>"},"computer-twotone":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path stroke-dasharray=\"6\" stroke-dashoffset=\"6\" d=\"M12 21H17M12 21H7\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.3s\" values=\"6;0\"/></path><path stroke-dasharray=\"6\" stroke-dashoffset=\"6\" d=\"M12 21V17\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.2s\" values=\"6;0\"/></path><path fill=\"currentColor\" fill-opacity=\"0\" stroke-dasharray=\"64\" stroke-dashoffset=\"64\" d=\"M12 17H3V5H21V17Z\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.3s\" dur=\"0.6s\" values=\"64;0\"/><animate fill=\"freeze\" attributeName=\"fill-opacity\" begin=\"0.9s\" dur=\"0.15s\" values=\"0;0.3\"/></path></g>"},"laptop-twotone":{"body":"<g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path fill=\"currentColor\" fill-opacity=\"0\" stroke-dasharray=\"50\" stroke-dashoffset=\"50\" d=\"M12 17H5V7H19V17Z\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.6s\" values=\"50;0\"/><animate fill=\"freeze\" attributeName=\"fill-opacity\" begin=\"1.0s\" dur=\"0.15s\" values=\"0;0.3\"/></path><path fill=\"none\" stroke-dasharray=\"20\" stroke-dashoffset=\"20\" d=\"M3 19H21\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.7s\" dur=\"0.3s\" values=\"20;0\"/></path></g>"},"navigation-left-up":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path stroke-dasharray=\"26\" stroke-dashoffset=\"26\" d=\"M21 15H12C9.23858 15 7 12.7614 7 10V4\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.4s\" values=\"26;0\"/></path><path stroke-dasharray=\"8\" stroke-dashoffset=\"8\" d=\"M7 3L3 7M7 3L11 7\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.4s\" dur=\"0.2s\" values=\"8;0\"/></path></g>"},"github":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path stroke-dasharray=\"30\" stroke-dashoffset=\"30\" d=\"M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.6s\" values=\"30;0\"/></path><path stroke-dasharray=\"10\" stroke-dashoffset=\"10\" d=\"M9 19C7.59375 19 6.15625 18.4375 5.3125 17.8125C4.46875 17.1875 4.21875 16.1562 3 15.5\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.7s\" dur=\"0.2s\" values=\"10;0\"/></path></g>"}},"lastModified":1672653839,"aliases":{"chevron-small-double-right":{"parent":"chevron-small-double-left","hFlip":true},"chevron-small-down":{"parent":"chevron-small-left","rotate":3},"chevron-small-right":{"parent":"chevron-small-left","hFlip":true}},"width":24,"height":24});
	add({"prefix":"mdi","icons":{"alert":{"body":"<path fill=\"currentColor\" d=\"M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2L1 21Z\"/>"},"home":{"body":"<path fill=\"currentColor\" d=\"M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z\"/>"},"material-design":{"body":"<path fill=\"currentColor\" d=\"M21 12c0-2.03-.67-3.91-2-5.62v11.25c1.33-1.66 2-3.54 2-5.63m-3.37 7H6.38c.68.55 1.57 1 2.67 1.41c1.09.39 2.08.59 2.95.59c.88 0 1.86-.2 2.95-.59c1.1-.41 1.99-.86 2.68-1.41M11 17L7 9v8h4m6-8l-4 8h4V9m-5 5.53L15.75 7h-7.5L12 14.53M17.63 5C15.97 3.67 14.09 3 12 3s-3.97.67-5.62 2h11.25M5 17.63V6.38C3.67 8.09 3 9.97 3 12c0 2.09.67 3.97 2 5.63M23 12c0 3.03-1.06 5.63-3.22 7.78C17.63 21.94 15.03 23 12 23c-3.03 0-5.62-1.06-7.78-3.22C2.06 17.63 1 15.03 1 12c0-3.03 1.06-5.62 3.22-7.78S8.97 1 12 1c3.03 0 5.63 1.06 7.78 3.22C21.94 6.38 23 8.97 23 12Z\"/>"}},"lastModified":1675666860,"width":24,"height":24});
	add({"prefix":"jam","icons":{"info":{"body":"<path fill=\"currentColor\" d=\"M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16zm0-10a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm0-1a1 1 0 1 1 0-2a1 1 0 0 1 0 2z\"/>"}},"lastModified":1656182518,"left":-2,"top":-2,"width":24,"height":24});
	add({"prefix":"cil","icons":{"locomotive":{"body":"<path fill=\"currentColor\" d=\"M328 427.127c0-.175-.012-.347-.013-.522l14.29-.357c0 .294-.022.584-.022.879a52.873 52.873 0 1 0 105.745 0c0-1.051-.04-2.092-.1-3.127H496v-50.9l-24-64v-65.323a47.736 47.736 0 0 0-26.534-42.932L424 190.111V96H312v88h-68.468l-29.059-87.18A47.941 47.941 0 0 0 168.936 64H16v82.832l40 16v50.334l-40 16V432h86.488a52.866 52.866 0 0 0 105.449-2.393l14.372-.36A52.867 52.867 0 0 0 328 427.127ZM395.127 448A20.873 20.873 0 1 1 416 427.127A20.9 20.9 0 0 1 395.127 448Zm-240 0A20.873 20.873 0 1 1 176 427.127A20.9 20.9 0 0 1 155.127 448Zm76.586-51l-32.607.815a52.83 52.83 0 0 0-89.34 2.185H48V250.833l40-16v-93.665l-40-16V96h120.936a15.979 15.979 0 0 1 15.179 10.94L220.468 216H344v-88h48v81.889l39.155 19.577A15.915 15.915 0 0 1 440 243.777V296H96v32h348.912L464 378.9V392h-29.4a52.78 52.78 0 0 0-80.594 1.945l-37.028.926A52.794 52.794 0 0 0 231.713 397Zm43.414 51A20.873 20.873 0 1 1 296 427.127A20.9 20.9 0 0 1 275.127 448Z\"/>"},"paper-plane":{"body":"<path fill=\"currentColor\" d=\"M474.444 19.857a20.336 20.336 0 0 0-21.592-2.781L33.737 213.8v38.066l176.037 70.414L322.69 496h38.074l120.3-455.4a20.342 20.342 0 0 0-6.62-20.743ZM337.257 459.693L240.2 310.37l149.353-163.582l-23.631-21.576L215.4 290.069L70.257 232.012L443.7 56.72Z\"/>"},"truck":{"body":"<path fill=\"currentColor\" d=\"M441.885 141.649A32.028 32.028 0 0 0 415.669 128H336V80a32.036 32.036 0 0 0-32-32H48a32.036 32.036 0 0 0-32 32v328h53.082a67.982 67.982 0 0 0 133.836 0h106.164a67.982 67.982 0 0 0 133.836 0H496V226.522a23.882 23.882 0 0 0-4.338-13.763ZM47.98 80H304v176H48ZM136 432a36 36 0 1 1 36-36a36.04 36.04 0 0 1-36 36Zm240 0a36 36 0 1 1 36-36a36.04 36.04 0 0 1-36 36Zm88-56h-23.006a68 68 0 0 0-129.988 0H200.994a68 68 0 0 0-129.988 0H48v-88h416Zm0-120H336v-96h79.669L464 229.044Z\"/>"}},"lastModified":1656181583,"width":512,"height":512});
	add({"prefix":"fa-regular","icons":{"id-badge":{"body":"<path fill=\"currentColor\" d=\"M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm0 464H48V48h288v416zM144 112h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16zm48 176c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6c-10.8 0-18.7 8-44.8 8c-26.9 0-33.4-8-44.8-8c-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2z\"/>","width":384},"handshake":{"body":"<path fill=\"currentColor\" d=\"m519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8c12.5 10.8 26 15.9 41.1 15.9c18.2 0 35.3-7.4 48.8-24c22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4l-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5l-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3c14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5l108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4l12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0c-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16c0 8.9-7.2 16-16 16z\"/>","width":640}},"lastModified":1656181869,"width":512,"height":512});
	add({"prefix":"ion","icons":{"umbrella-sharp":{"body":"<path fill=\"currentColor\" d=\"m128.93 280l-.26-.3c-.9-.74-1.83-1.43-2.77-2.1Zm254.15 0l2.62-2.12c-.79.58-1.57 1.17-2.34 1.79Z\"/><path fill=\"currentColor\" d=\"M463.14 186.44A224.55 224.55 0 0 0 272 48.57V32h-32v16.57A223.58 223.58 0 0 0 32 272v22.52l12.25-11.21a62.63 62.63 0 0 1 81.43-5.88l.22.17c.94.67 1.87 1.36 2.77 2.1q2.09 1.69 4 3.61L144 294.63l11.31-11.32a62.59 62.59 0 0 1 81.4-5.78L240 280v152a16 16 0 0 1-32 0v-16h-32v16a48 48 0 0 0 96 0V280l3.29-2.47a62.59 62.59 0 0 1 81.4 5.78L368 294.63l11.31-11.32q1.95-1.94 4.05-3.64c.77-.62 1.55-1.21 2.34-1.79l.26-.21c24.63-18.47 60-16.13 81.81 5.64l12.23 11.2V272a223.62 223.62 0 0 0-16.86-85.56Z\"/>"}},"lastModified":1674114832,"width":512,"height":512});
	add({"prefix":"noto","icons":{"paintbrush":{"body":"<path fill=\"none\" d=\"M119.88 54.21c-.12.06-.25.12-.37.19\"/><path fill=\"#F09300\" d=\"M39.85 84.34c-7.99 5.29-19.23.44-27.01 12.41c-1.26 1.94-2.39 5.34-3.84 10.3c-1.14 3.88-7.26 6.61-7.26 6.61s5.27 5.58 10.24 6.65c7.19 1.56 17.52 2.34 24.52-5.29c7.98-8.7 4.41-16.73 11.44-21.56c-.01 0-.1-14.42-8.09-9.12z\"/><path fill=\"#C67100\" d=\"M33.92 86.82c-.8.7-1.01 1.86-.98 2.92c.13 4.03 3.35 7.75 7.32 8.44c1.61.28 3.49.01 4.48-1.29c1.11-1.45.69-3.55-.09-5.2c-.86-1.81-2.09-3.44-3.61-4.74\"/><path fill=\"#1565C0\" d=\"M122.3 6.51s-1.98-2.66-7.05.31c-6.89 4.03-29.19 20.63-55.94 48.19c-6.02 6.2-8.39 9.77-8.39 9.77s-1.49 2.28 4.22 7.99c5.7 5.7 10.99 6.86 10.99 6.86l4.52-4.65c32.26-33.22 48.5-54.52 51.57-61.4c2.38-5.37.08-7.07.08-7.07z\"/><path fill=\"#BDBDBD\" d=\"M58.08 72.66c-5.71-5.55-6.58-8.47-6.58-8.47s-1.71 1.11-2.74 2.43c-1.56 2-1.73 3.44-1.73 3.44l-12.8 16.03s-1.63 3.04 3.25 7.77c4.87 4.73 7.87 3.02 7.87 3.02L61 83.63s1.43-.21 3.39-1.83c1.29-1.07 2.35-2.81 2.35-2.81s-2.95-.79-8.66-6.33z\"/><path fill=\"#EEE\" d=\"M55.13 72.76c-.02.02-.03.04-.05.06c-.35.4-.96.41-1.49.31c-1.92-.37-3.25-1.65-3.94-3.41c-.32-.83-.38-1.79.01-2.59c.71-1.44 1.75-.47 2.55.33a18.37 18.37 0 0 1 2.65 3.38c.18.3.36.62.43.97c.07.33.04.69-.16.95z\"/><path fill=\"#2196F3\" d=\"M61.59 59.56c1.8 4.01 17-11.78 20.85-15.88c1.92-2.04 15.19-13.98 12.19-14.48s-9.83 5.38-12.09 7.18c-4.52 3.59-10.31 9.26-14.78 13.92c-2.19 2.27-6.85 7.75-6.17 9.26z\"/><path fill=\"#EEE\" d=\"M43.73 76.94c.41-.43.9-.9 1.54-.9c.6 0 1.1.42 1.51.82c1.35 1.32 2.6 3.15 1.87 4.8c-.3.67-.88 1.19-1.45 1.69l-6.68 5.9c-1.34 1.18-2.61-.36-3.11-1.54c-.45-1.08-.11-1.94.47-2.89c1.67-2.79 3.59-5.47 5.85-7.88z\"/><path fill=\"#9E9E9E\" d=\"M59.48 82.62c.23.16.48.38.45.65a.6.6 0 0 1-.13.28c-.53.73-1.6.88-2.46.59c-.85-.29-1.54-.92-2.2-1.53c-2.51-2.36-4.99-4.81-6.79-7.75c-.28-.45-1.73-3.06-.73-3.31c.64-.16 2.08 2.16 2.49 2.64a53.64 53.64 0 0 0 5.79 5.69c1.16.96 2.35 1.88 3.58 2.74z\"/><path fill=\"#C67100\" d=\"M36.49 115.02s-9.59 5.38-19.79 3.86c0 0 8.07-1.47 11.49-12.4c0 0-7.77 8.09-14.79 8.64c0 0 6.7-3.49 7.13-14.07c-3.58 6.38-5.93 9.57-11.63 11.5c6.13-6.59 3.9-15.75 3.9-15.75c-1.25 1.95-2.37 5.32-3.81 10.24c-1.14 3.88-7.26 6.61-7.26 6.61s5.27 5.58 10.24 6.65c7.19 1.57 17.53 2.34 24.52-5.28z\"/>"}},"lastModified":1672668145,"width":128,"height":128});
	add({"prefix":"bx","icons":{"home":{"body":"<path fill=\"currentColor\" d=\"M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586l6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z\"/>"},"hourglass":{"body":"<path fill=\"currentColor\" d=\"M15.566 11.021A7.016 7.016 0 0 0 19 5V4h1V2H4v2h1v1a7.016 7.016 0 0 0 3.434 6.021c.354.208.566.545.566.9v.158c0 .354-.212.69-.566.9A7.016 7.016 0 0 0 5 19v1H4v2h16v-2h-1v-1a7.014 7.014 0 0 0-3.433-6.02c-.355-.21-.567-.547-.567-.901v-.158c0-.355.212-.692.566-.9zm-1.015 3.681A5.008 5.008 0 0 1 17 19v1H7v-1a5.01 5.01 0 0 1 2.45-4.299c.971-.573 1.55-1.554 1.55-2.622v-.158c0-1.069-.58-2.051-1.551-2.623A5.008 5.008 0 0 1 7 5V4h10v1c0 1.76-.938 3.406-2.449 4.298C13.58 9.87 13 10.852 13 11.921v.158c0 1.068.579 2.049 1.551 2.623z\"/>"}},"lastModified":1663655035,"aliases":{"bx-home":{"parent":"home"},"bx-hourglass":{"parent":"hourglass"}},"width":24,"height":24});
	add({"prefix":"entypo","icons":{"attachment":{"body":"<path fill=\"currentColor\" d=\"M5.602 19.8c-1.293 0-2.504-.555-3.378-1.44c-1.695-1.716-2.167-4.711.209-7.116l9.748-9.87c.988-1 2.245-1.387 3.448-1.06c1.183.32 2.151 1.301 2.468 2.498c.322 1.22-.059 2.493-1.046 3.493l-9.323 9.44c-.532.539-1.134.858-1.738.922c-.599.064-1.17-.13-1.57-.535c-.724-.736-.828-2.117.378-3.337l6.548-6.63c.269-.272.705-.272.974 0s.269.714 0 .986l-6.549 6.631c-.566.572-.618 1.119-.377 1.364c.106.106.266.155.451.134c.283-.029.606-.216.909-.521l9.323-9.439c.64-.648.885-1.41.69-2.145a2.162 2.162 0 0 0-1.493-1.513c-.726-.197-1.48.052-2.12.7l-9.748 9.87c-1.816 1.839-1.381 3.956-.209 5.143c1.173 1.187 3.262 1.629 5.079-.212l9.748-9.87a.683.683 0 0 1 .974 0a.704.704 0 0 1 0 .987L9.25 18.15c-1.149 1.162-2.436 1.65-3.648 1.65z\"/>"}},"lastModified":1656181803,"width":20,"height":20});
	add({"prefix":"bi","icons":{"check2-circle":{"body":"<g fill=\"currentColor\"><path d=\"M2.5 8a5.5 5.5 0 0 1 8.25-4.764a.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0a5.5 5.5 0 1 1-11 0z\"/><path d=\"M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293L5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z\"/></g>"}},"lastModified":1672651410});
	add({"prefix":"akar-icons","icons":{"bootstrap-fill":{"body":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M4.985 2c-1.37 0-2.383 1.199-2.337 2.498c.043 1.25-.013 2.867-.42 4.186c-.41 1.322-1.1 2.16-2.228 2.268v1.215c1.128.107 1.819.945 2.227 2.268c.408 1.319.464 2.936.42 4.185c-.045 1.3.968 2.499 2.338 2.499h14.032c1.37 0 2.383-1.199 2.337-2.499c-.043-1.249.013-2.866.42-4.185c.409-1.323 1.098-2.16 2.226-2.268v-1.215c-1.128-.108-1.817-.946-2.226-2.268c-.407-1.32-.463-2.937-.42-4.186C21.4 3.198 20.386 2 19.017 2H4.985ZM16.27 13.769c0 1.79-1.335 2.875-3.55 2.875H8.949a.407.407 0 0 1-.407-.407V6.881a.407.407 0 0 1 .407-.406h3.75c1.847 0 3.06 1 3.06 2.537c0 1.078-.816 2.043-1.855 2.213v.056c1.415.155 2.367 1.135 2.367 2.488Zm-3.96-6.005h-2.15v3.038h1.811c1.4 0 2.172-.564 2.172-1.572c0-.944-.664-1.466-1.833-1.466Zm-2.15 4.243v3.347h2.23c1.457 0 2.23-.585 2.23-1.684c0-1.1-.794-1.663-2.324-1.663H10.16Z\" clip-rule=\"evenodd\"/>"}},"lastModified":1672651267,"width":24,"height":24});
	add({"prefix":"carbon","icons":{"carbon":{"body":"<path fill=\"currentColor\" d=\"M13.5 30.815a1.001 1.001 0 0 1-.493-.13l-8.5-4.815A1 1 0 0 1 4 25V15a1 1 0 0 1 .507-.87l8.5-4.815a1.001 1.001 0 0 1 .986 0l8.5 4.815A1 1 0 0 1 23 15v10a1 1 0 0 1-.507.87l-8.5 4.815a1.001 1.001 0 0 1-.493.13ZM6 24.417l7.5 4.248l7.5-4.248v-8.834l-7.5-4.248L6 15.582Z\"/><path fill=\"currentColor\" d=\"M28 17h-2V7.583l-7.5-4.248l-8.007 4.535l-.986-1.74l8.5-4.815a1.001 1.001 0 0 1 .986 0l8.5 4.815A1 1 0 0 1 28 7Z\"/>"}},"lastModified":1674283090,"width":32,"height":32});
	add({"prefix":"tabler","icons":{"brand-tabler":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m8 9l3 3l-3 3m5 0h3\"/><path d=\"M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z\"/></g>"}},"lastModified":1676446922,"width":24,"height":24});
	add({"prefix":"twemoji","icons":{"dizzy":{"body":"<path fill=\"#FDD888\" d=\"M28.865 7.134c7.361 7.359 9.35 17.304 4.443 22.209c-4.907 4.907-14.85 2.918-22.21-4.441c-.25-.25-.478-.51-.716-.766l4.417-4.417c5.724 5.724 13.016 7.714 16.286 4.442c3.271-3.271 1.282-10.563-4.441-16.287l.022.021l-.021-.022C20.104 1.331 11.154-.326 6.657 4.171C4.482 6.346 3.76 9.564 4.319 13.044c-.858-4.083-.15-7.866 2.338-10.353c4.906-4.906 14.849-2.917 22.208 4.443z\"/><path fill=\"#FFAC33\" d=\"M19.403 34c-.252 0-.503-.077-.719-.231l-5.076-3.641l-5.076 3.641c-.433.31-1.013.31-1.443-.005a1.23 1.23 0 0 1-.45-1.369l1.894-6.11l-5.031-3.545a1.236 1.236 0 0 1-.442-1.375a1.236 1.236 0 0 1 1.165-.851l6.147-.012l2.067-5.957a1.233 1.233 0 0 1 2.34 0l1.866 5.957l6.347.012a1.233 1.233 0 0 1 .723 2.226l-5.031 3.545l1.893 6.11A1.23 1.23 0 0 1 19.403 34z\"/>"}},"lastModified":1672668672,"width":36,"height":36});
	add({"prefix":"openmoji","icons":{"face-with-tongue":{"body":"<path fill=\"#FCEA2B\" d=\"M36 13c-12.682 0-23 10.318-23 23s10.318 23 23 23s23-10.318 23-23s-10.318-23-23-23z\"/><path fill=\"#FFF\" d=\"M41.668 46.593c2.018-1.09 3.628-2.752 4.497-4.775c-1.985.985-6.158 1.593-10.574 1.543c-4.055-.047-7.712-.641-9.518-1.543h-.238c.939 2.165 2.718 3.899 4.917 4.973\"/><path fill=\"#EA5A47\" d=\"M41.577 42.818c0 6.075-2.532 11-5.656 11c-3.124 0-5.656-4.925-5.656-11\"/><circle cx=\"36\" cy=\"36\" r=\"23\" fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"2\"/><path fill=\"none\" stroke=\"#000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\" d=\"M30.752 46.79c-2.2-1.073-3.978-2.807-4.917-4.972m20.33 0c-.87 2.023-2.479 3.685-4.497 4.775m-15.595-4.775c1.806.902 5.463 1.496 9.517 1.543c4.417.05 8.59-.558 10.575-1.543\"/><path fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"2\" d=\"M41.66 42.818c0 6.075-2.533 11-5.656 11s-5.657-4.925-5.657-11\"/><path d=\"M30 31a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3m18 0a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3\"/>"}},"lastModified":1673788312,"width":72,"height":72});
	add({"prefix":"assets","icons":{"animation-arrow":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"M191 1L2 9\" class=\"arrow-middle\"/><path d=\"M1 9l5 5.5\" class=\"arrow-sides\"/><path d=\"M1 9l4-6\" class=\"arrow-sides\"/></g>","width":192},"bundle-bg":{"body":"<path d=\"M144 9H239V151H1V9H96\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>","width":240,"height":152},"logo-iconify":{"body":"<mask id=\"mouth-mask2\"><path d=\"M31.7331 30C36.8448 30 41.4909 25.2412 40.9582 24.1898C40.423 23.1334 37.8672 26.8308 31.7331 26.8308C25.5991 26.8308 23.5544 23.1334 23.0432 24.1898C22.5321 25.2462 26.6214 30 31.7331 30Z\" fill=\"white\"/></mask><mask id=\"design-mask2\"><g fill=\"white\"><circle cx=\"74\" cy=\"37\" r=\"1\"/><circle cx=\"108\" cy=\"27\" r=\"1\"/></g><g stroke=\"white\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M80 37a5 5 0 0 0 0-10h-3v10h3Zm15 0h-4c-1 0-2-1-2-2v-6c0-1 1-2 2-2h4m-4 5h3m10-2.5a2.5 2.5 0 1 0-2.5 2.5M99 34.5a2.5 2.5 0 1 0 2.5-2.5m6.5 5v-7\"/><path d=\"M120.999 29c-.151-.18-.29-.361-.463-.535a5.001 5.001 0 1 0 .463 6.537V33H120m5 4V27l7 10V27\"/></g></mask><g data-part=\"code\" fill=\"none\" stroke=\"#979797\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"22\"><path data-part=\"left\" d=\"M8 13l-7 7l7 7\" stroke-dashoffset=\"22\"><animateMotion path=\"M0 0h2z\" dur=\"1.5s\" repeatCount=\"indefinite\"/><animate attributeName=\"stroke-dashoffset\" values=\"22;0\" dur=\"0.3s\" begin=\"1.2s\" fill=\"freeze\"/></path><path data-part=\"right\" d=\"M56 13l7 7l-7 7\" stroke-dashoffset=\"22\"><animateMotion path=\"M0 0h-2z\" dur=\"1.5s\" repeatCount=\"indefinite\"/><animate attributeName=\"stroke-dashoffset\" values=\"22;0\" dur=\"0.3s\" begin=\"1.5s\" fill=\"freeze\"/></path></g><g data-part=\"smile\" fill=\"none\" stroke-linecap=\"round\"><circle cx=\"32\" cy=\"20\" r=\"15\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"100\" stroke-dashoffset=\"100\" transform=\"rotate(-90 32 20)\"><animate attributeName=\"stroke-dashoffset\" values=\"100;0\" dur=\"0.7s\" fill=\"freeze\"/></circle><path data-part=\"left eye stroke\" d=\"M26.5 15.5v2\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"5\" stroke-dashoffset=\"5\"><animate attributeName=\"stroke-dashoffset\" values=\"5;0\" dur=\"0.3s\" begin=\"0.7s\" fill=\"freeze\"/></path><path data-part=\"right eye stroke\" d=\"M37.5 15.5v2\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"5\" stroke-dashoffset=\"5\"><animate attributeName=\"stroke-dashoffset\" values=\"5;0\" dur=\"0.3s\" begin=\"0.9s\" fill=\"freeze\"/></path><circle mask=\"url(#mouth-mask2)\" cx=\"32\" cy=\"24\" r=\"0\" fill=\"currentColor\"><animate attributeName=\"r\" values=\"0;19\" dur=\"0.3s\" begin=\"1.1s\" fill=\"freeze\"/></circle></g><g data-part=\"iconify\" fill=\"none\" stroke-linecap=\"round\" stroke-width=\"3\"><g data-part=\"i\"><circle cx=\"77.5\" cy=\"2.5\" r=\"1.5\" fill=\"#E13E31\" opacity=\"0\"><set attributeName=\"opacity\" to=\"1\" begin=\"0.2s\"/></circle><path d=\"M77.5 7.5V19.5\" stroke=\"#E13E31\" stroke-dasharray=\"22\" stroke-dashoffset=\"22\"><animate attributeName=\"stroke-dashoffset\" values=\"22;0\" dur=\"0.2s\" fill=\"freeze\"/></path></g><path data-part=\"c\" d=\"M94.5962 8.4038C92.0578 5.86539 87.9422 5.86539 85.4038 8.4038C82.8654 10.9422 82.8654 15.0578 85.4038 17.5962C87.9422 20.1346 92.0578 20.1346 94.5962 17.5962\" stroke=\"#E13E31\" stroke-dasharray=\"42\" stroke-dashoffset=\"42\"><animate attributeName=\"stroke-dashoffset\" values=\"42;0\" dur=\"0.3s\" begin=\"0.2s\" fill=\"freeze\"/></path><circle data-part=\"o\" cx=\"106\" cy=\"13\" r=\"6.5\" stroke=\"#E13E31\" stroke-dasharray=\"52\" transform=\"rotate(-180 106 13)\" stroke-dashoffset=\"52\"><animate attributeName=\"stroke-dashoffset\" values=\"52;0\" dur=\"0.3s\" begin=\"0.5s\" fill=\"freeze\"/></circle><path data-part=\"n\" d=\"M129.5 19.5C129.5 16.525 129.5 14.025 129.5 12C129.5 8.96243 127.038 6.5 124 6.5C120.962 6.5 118.5 8.96243 118.5 12C118.5 14.025 118.5 16.525 118.5 19.5\" stroke=\"#E13E31\" stroke-dasharray=\"34\" stroke-dashoffset=\"34\"><animate attributeName=\"stroke-dashoffset\" values=\"34;68\" dur=\"0.3s\" begin=\"0.7s\" fill=\"freeze\"/></path><g data-part=\"i2\"><circle cx=\"135.5\" cy=\"2.5\" r=\"1.5\" fill=\"#AEAEAE\" opacity=\"0\"><set attributeName=\"opacity\" to=\"1\" begin=\"1.2s\"/></circle><path d=\"M135.5 7.5V19.5\" stroke=\"#AEAEAE\" stroke-dasharray=\"22\" stroke-dashoffset=\"22\"><animate attributeName=\"stroke-dashoffset\" values=\"22;0\" dur=\"0.2s\" begin=\"1.0s\" fill=\"freeze\"/></path></g><g data-part=\"f\"><path d=\"M149.5 2.5C147.962 2.5 146.795 2.5 146 2.5C143.5 2.5 141.5 4.5 141.5 7C141.5 8.66667 141.5 12.8333 141.5 19.5\" stroke=\"#AEAEAE\" stroke-dasharray=\"26\" stroke-dashoffset=\"26\"><animate attributeName=\"stroke-dashoffset\" values=\"26;0\" dur=\"0.2s\" begin=\"1.2s\" fill=\"freeze\"/></path><path d=\"M145 11.5h2.5\" stroke=\"#AEAEAE\" stroke-dasharray=\"5\" stroke-dashoffset=\"5\"><animate attributeName=\"stroke-dashoffset\" values=\"5;0\" dur=\"0.1s\" begin=\"1.4s\" fill=\"freeze\"/></path></g><g data-part=\"y\"><path d=\"M153.5 6.5C153.5 8.16667 153.5 9.83333 153.5 11.5C153.5 14 155 15.5 157.5 15.5C157.73 15.5 158.23 15.5 159 15.5\" stroke=\"#AEAEAE\" stroke-dasharray=\"24\" stroke-dashoffset=\"24\"><animate attributeName=\"stroke-dashoffset\" values=\"24;0\" dur=\"0.2s\" begin=\"1.5s\" fill=\"freeze\"/></path><path d=\"M154.5 22.5C156.371 22.5 157.704 22.5 158.5 22.5C160.5 22.5 162.5 20.5 162.5 18.5C162.5 17.1667 162.5 13.1667 162.5 6.5\" stroke=\"#AEAEAE\" stroke-dasharray=\"24\" stroke-dashoffset=\"24\"><animate attributeName=\"stroke-dashoffset\" values=\"24;48\" dur=\"0.2s\" begin=\"1.7s\" fill=\"freeze\"/></path></g></g><rect mask=\"url(#design-mask2)\" x=\"72\" y=\"25\" width=\"62\" height=\"0\" opacity=\"0\" fill=\"currentColor\"><animate attributeName=\"height\" values=\"0;14\" dur=\"0.2s\" begin=\"2.0s\" fill=\"freeze\"/><animate attributeName=\"opacity\" values=\"0;1\" dur=\"0.3s\" begin=\"2.0s\" fill=\"freeze\"/></rect>","width":164,"height":40},"long-arrow":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"M3 8L7 14\"/><path d=\"M3 8L7 2\"/><path d=\"M536 8H4\"/></g>","width":540}},"lastModified":1680158620});
})();
