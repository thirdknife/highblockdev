/*! For license information please see component---src-pages-prismic-pages-uid-js-c30ea90dbe17afa803b4.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[723],{4643:function(e){"use strict";var t=/["'&<>]/;e.exports=function(e){var n,r=""+e,o=t.exec(r);if(!o)return r;var i="",a=0,u=0;for(a=o.index;a<r.length;a++){switch(r.charCodeAt(a)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#39;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}u!==a&&(i+=r.substring(u,a)),u=a+1,i+=n}return u!==a?i+r.substring(u,a):i}},9662:function(e,t,n){var r=n(7854),o=n(614),i=n(6330),a=r.TypeError;e.exports=function(e){if(o(e))return e;throw a(i(e)+" is not a function")}},9670:function(e,t,n){var r=n(7854),o=n(111),i=r.String,a=r.TypeError;e.exports=function(e){if(o(e))return e;throw a(i(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),o=n(1400),i=n(6244),a=function(e){return function(t,n,a){var u,c=r(t),l=i(c),f=o(a,l);if(e&&n!=n){for(;l>f;)if((u=c[f++])!=u)return!0}else for(;l>f;f++)if((e||f in c)&&c[f]===n)return e||f||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},4326:function(e,t,n){var r=n(1702),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},9920:function(e,t,n){var r=n(2597),o=n(3887),i=n(1236),a=n(3070);e.exports=function(e,t,n){for(var u=o(t),c=a.f,l=i.f,f=0;f<u.length;f++){var s=u[f];r(e,s)||n&&r(n,s)||c(e,s,l(t,s))}}},8880:function(e,t,n){var r=n(9781),o=n(3070),i=n(9114);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var r=n(7854),o=n(111),i=r.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,o,i=n(7854),a=n(8113),u=i.process,c=i.Deno,l=u&&u.versions||c&&c.version,f=l&&l.v8;f&&(o=(r=f.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=+r[1]),e.exports=o},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var r=n(7854),o=n(1236).f,i=n(8880),a=n(1320),u=n(3505),c=n(9920),l=n(4705);e.exports=function(e,t){var n,f,s,p,v,y=e.target,d=e.global,m=e.stat;if(n=d?r:m?r[y]||u(y,{}):(r[y]||{}).prototype)for(f in t){if(p=t[f],s=e.noTargetGet?(v=o(n,f))&&v.value:n[f],!l(d?f:y+(m?".":"#")+f,e.forced)&&void 0!==s){if(typeof p==typeof s)continue;c(p,s)}(e.sham||s&&s.sham)&&i(p,"sham",!0),a(n,f,p,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(e,t,n){var r=n(9781),o=n(2597),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,u=o(i,"name"),c=u&&"something"===function(){}.name,l=u&&(!r||r&&a(i,"name").configurable);e.exports={EXISTS:u,PROPER:c,CONFIGURABLE:l}},1702:function(e,t,n){var r=n(4374),o=Function.prototype,i=o.bind,a=o.call,u=r&&i.bind(a,a);e.exports=r?function(e){return e&&u(e)}:function(e){return e&&function(){return a.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),o=n(614),i=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),o=n(7293),i=n(317);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(7854),o=n(1702),i=n(7293),a=n(4326),u=r.Object,c=o("".split);e.exports=i((function(){return!u("z").propertyIsEnumerable(0)}))?function(e){return"String"==a(e)?c(e,""):u(e)}:u},2788:function(e,t,n){var r=n(1702),o=n(614),i=n(5465),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return a(e)}),e.exports=i.inspectSource},9909:function(e,t,n){var r,o,i,a=n(8536),u=n(7854),c=n(1702),l=n(111),f=n(8880),s=n(2597),p=n(5465),v=n(6200),y=n(3501),d="Object already initialized",m=u.TypeError,h=u.WeakMap;if(a||p.state){var b=p.state||(p.state=new h),g=c(b.get),k=c(b.has),x=c(b.set);r=function(e,t){if(k(b,e))throw new m(d);return t.facade=e,x(b,e,t),t},o=function(e){return g(b,e)||{}},i=function(e){return k(b,e)}}else{var O=v("state");y[O]=!0,r=function(e,t){if(s(e,O))throw new m(d);return t.facade=e,f(e,O,t),t},o=function(e){return s(e,O)?e[O]:{}},i=function(e){return s(e,O)}}e.exports={set:r,get:o,has:i,enforce:function(e){return i(e)?o(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!l(t)||(n=o(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}}}},614:function(e){e.exports=function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,a=function(e,t){var n=c[u(e)];return n==f||n!=l&&(o(t)?r(t):!!t)},u=a.normalize=function(e){return String(e).replace(i,".").toLowerCase()},c=a.data={},l=a.NATIVE="N",f=a.POLYFILL="P";e.exports=a},111:function(e,t,n){var r=n(614);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(7854),o=n(5005),i=n(614),a=n(7976),u=n(3307),c=r.Object;e.exports=u?function(e){return"symbol"==typeof e}:function(e){var t=o("Symbol");return i(t)&&a(t.prototype,c(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},133:function(e,t,n){var r=n(7392),o=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(e,t,n){var r=n(7854),o=n(614),i=n(2788),a=r.WeakMap;e.exports=o(a)&&/native code/.test(i(a))},3070:function(e,t,n){var r=n(7854),o=n(9781),i=n(4664),a=n(3353),u=n(9670),c=n(4948),l=r.TypeError,f=Object.defineProperty,s=Object.getOwnPropertyDescriptor,p="enumerable",v="configurable",y="writable";t.f=o?a?function(e,t,n){if(u(e),t=c(t),u(n),"function"==typeof e&&"prototype"===t&&"value"in n&&y in n&&!n.writable){var r=s(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:v in n?n.configurable:r.configurable,enumerable:p in n?n.enumerable:r.enumerable,writable:!1})}return f(e,t,n)}:f:function(e,t,n){if(u(e),t=c(t),u(n),i)try{return f(e,t,n)}catch(r){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),o=n(6916),i=n(5296),a=n(9114),u=n(5656),c=n(4948),l=n(2597),f=n(4664),s=Object.getOwnPropertyDescriptor;t.f=r?s:function(e,t){if(e=u(e),t=c(t),f)try{return s(e,t)}catch(n){}if(l(e,t))return a(!o(i.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),o=n(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),o=n(2597),i=n(5656),a=n(1318).indexOf,u=n(3501),c=r([].push);e.exports=function(e,t){var n,r=i(e),l=0,f=[];for(n in r)!o(u,n)&&o(r,n)&&c(f,n);for(;t.length>l;)o(r,n=t[l++])&&(~a(f,n)||c(f,n));return f}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2140:function(e,t,n){var r=n(7854),o=n(6916),i=n(614),a=n(111),u=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&i(n=e.toString)&&!a(r=o(n,e)))return r;if(i(n=e.valueOf)&&!a(r=o(n,e)))return r;if("string"!==t&&i(n=e.toString)&&!a(r=o(n,e)))return r;throw u("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),o=n(1702),i=n(8006),a=n(5181),u=n(9670),c=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(u(e)),n=a.f;return n?c(t,n(e)):t}},1320:function(e,t,n){var r=n(7854),o=n(614),i=n(2597),a=n(8880),u=n(3505),c=n(2788),l=n(9909),f=n(6530).CONFIGURABLE,s=l.get,p=l.enforce,v=String(String).split("String");(e.exports=function(e,t,n,c){var l,s=!!c&&!!c.unsafe,y=!!c&&!!c.enumerable,d=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:t;o(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(n,"name")||f&&n.name!==m)&&a(n,"name",m),(l=p(n)).source||(l.source=v.join("string"==typeof m?m:""))),e!==r?(s?!d&&e[t]&&(y=!0):delete e[t],y?e[t]=n:a(e,t,n)):y?e[t]=n:u(t,n)})(Function.prototype,"toString",(function(){return o(this)&&s(this).source||c(this)}))},4488:function(e,t,n){var r=n(7854).TypeError;e.exports=function(e){if(null==e)throw r("Can't call method on "+e);return e}},3505:function(e,t,n){var r=n(7854),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},6200:function(e,t,n){var r=n(2309),o=n(9711),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},5465:function(e,t,n){var r=n(7854),o=n(3505),i="__core-js_shared__",a=r[i]||o(i,{});e.exports=a},2309:function(e,t,n){var r=n(1913),o=n(5465);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.20.3",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(e,t,n){var r=n(9303),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},5656:function(e,t,n){var r=n(8361),o=n(4488);e.exports=function(e){return r(o(e))}},9303:function(e){var t=Math.ceil,n=Math.floor;e.exports=function(e){var r=+e;return r!=r||0===r?0:(r>0?n:t)(r)}},7466:function(e,t,n){var r=n(9303),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(7854),o=n(4488),i=r.Object;e.exports=function(e){return i(o(e))}},7593:function(e,t,n){var r=n(7854),o=n(6916),i=n(111),a=n(2190),u=n(8173),c=n(2140),l=n(5112),f=r.TypeError,s=l("toPrimitive");e.exports=function(e,t){if(!i(e)||a(e))return e;var n,r=u(e,s);if(r){if(void 0===t&&(t="default"),n=o(r,e,t),!i(n)||a(n))return n;throw f("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},4948:function(e,t,n){var r=n(7593),o=n(2190);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},6330:function(e,t,n){var r=n(7854).String;e.exports=function(e){try{return r(e)}catch(t){return"Object"}}},9711:function(e,t,n){var r=n(1702),o=0,i=Math.random(),a=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+a(++o+i,36)}},3307:function(e,t,n){var r=n(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),o=n(7293);e.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,n){var r=n(7854),o=n(2309),i=n(2597),a=n(9711),u=n(133),c=n(3307),l=o("wks"),f=r.Symbol,s=f&&f.for,p=c?f:f&&f.withoutSetter||a;e.exports=function(e){if(!i(l,e)||!u&&"string"!=typeof l[e]){var t="Symbol."+e;u&&i(f,e)?l[e]=f[e]:l[e]=c&&s?s(t):p(t)}return l[e]}},5837:function(e,t,n){n(2109)({global:!0},{globalThis:n(7854)})},5743:function(e,t,n){n(5837)},4239:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(5743);var i={heading1:"heading1",heading2:"heading2",heading3:"heading3",heading4:"heading4",heading5:"heading5",heading6:"heading6",paragraph:"paragraph",preformatted:"preformatted",strong:"strong",em:"em",listItem:"list-item",oListItem:"o-list-item",list:"group-list-item",oList:"group-o-list-item",image:"image",embed:"embed",hyperlink:"hyperlink",label:"label",span:"span"},a="Document",u="Media",c="Web";n(4643);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s,p=function(e,t){if(!e)return null;var n,r,o,i,l="link_type"in e?e:f({link_type:a,id:(n=e).id,uid:null!=(r=n.uid)?r:void 0,type:n.type,tags:n.tags,lang:n.lang,url:null!=(o=n.url)?o:void 0,slug:null==(i=n.slugs)?void 0:i[0]},Object.keys(n.data).length>0?{data:n.data}:{});switch(l.link_type){case u:case c:return"url"in l?l.url:null;case a:if("id"in l&&t){var s=t(l);if(null!=s)return s}return"url"in l&&l.url?l.url:null;default:return null}};function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function e(){return(++e.i).toString()};d.i=0;var m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return{key:d(),type:e.type,text:"text"in e?e.text:void 0,node:e,children:t}},h=function(e){return m({type:i.span,text:e,spans:[]})},b=function(e){for(var t=e.slice(0),n=0;n<t.length;n++){var r=t[n];if(r.type===i.listItem||r.type===i.oListItem){for(var o=[r];t[n+1]&&t[n+1].type===r.type;)o.push(t[n+1]),t.splice(n,1);r.type===i.listItem?t[n]={type:i.list,items:o}:t[n]={type:i.oList,items:o}}}return t},g=function e(t){if("text"in t)return m(t,k(t.spans,t));if("items"in t){for(var n=[],r=0;r<t.items.length;r++)n.push(e(t.items[r]));return m(t,n)}return m(t)},k=function e(t,n,r){if(!t.length)return[h(n.text)];var o=t.slice(0);o.sort((function(e,t){return e.start-t.start||t.end-e.end}));for(var i=[],a=0;a<o.length;a++){for(var u=o[a],c=r&&r.start||0,l=u.start-c,f=u.end-c,s=[],p=a;p<o.length;p++){var v=o[p];v!==u&&v.start>=u.start&&v.end<=u.end&&(s.push(v),o.splice(p,1),p--)}0===a&&l>0&&i.push(h(n.text.slice(0,l))),i.push(m(u,e(s,y(y({},n),{},{text:n.text.slice(l,f)}),u))),f<n.text.length&&i.push(h(n.text.slice(f,o[a+1]?o[a+1].start-c:void 0)))}return i},x=function(e,t){return O(function(e){for(var t=b(e),n=[],r=0;r<t.length;r++)n.push(g(t[r]));return{key:d(),children:n}}(e).children,t)},O=function e(t,n){for(var r=[],o=0;o<t.length;o++){var i=t[o],a=n(i.type,i.node,i.text,e(i.children,n),i.key);null!=a&&r.push(a)}return r},j=(o(s={},i.listItem,"listItem"),o(s,i.oListItem,"oListItem"),o(s,i.list,"list"),o(s,i.oList,"oList"),s),w=function(e){return function(t,n,r,o,i){var a=e[j[t]||t];if(a)return a({type:t,node:n,text:r,children:o,key:i})}};function E(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=r.createContext({}),I=function(){return r.useContext(L)||{}};"undefined"==typeof process&&(globalThis.process={env:{}});var T=function(e){var t,n=I(),o=e.linkResolver||n.linkResolver;"href"in e?t=e.href:"document"in e&&e.document?t=p(e.document,o):"field"in e&&e.field&&(t=p(e.field,o));var i=e.target||"field"in e&&e.field&&"target"in e.field&&e.field.target||void 0,a=e.rel||("_blank"===i?"noopener noreferrer":void 0),u=e.internalComponent||n.internalLinkComponent||"a",c=e.externalComponent||n.externalLinkComponent||"a",l=t&&function(e){var t=/^(\/(?!\/)|#)/.test(e),n=!t&&!/^https?:\/\//.test(e);return t&&!n}(t)?u:c,f=Object.assign({},e);return delete f.linkResolver,delete f.internalComponent,delete f.externalComponent,delete f.rel,delete f.target,"field"in f?delete f.field:"document"in f?delete f.document:"href"in f&&delete f.href,t?r.createElement(l,C(C({},f),{},{href:t,target:i,rel:a})):null},_=function(e){var t=I();return r.useMemo((function(){if(e.field){var n=e.linkResolver||t.linkResolver,o=(u={linkResolver:n,internalLinkComponent:e.internalLinkComponent,externalLinkComponent:e.externalLinkComponent},w({heading1:function(e){var t=e.children,n=e.key;return r.createElement("h1",{key:n},t)},heading2:function(e){var t=e.children,n=e.key;return r.createElement("h2",{key:n},t)},heading3:function(e){var t=e.children,n=e.key;return r.createElement("h3",{key:n},t)},heading4:function(e){var t=e.children,n=e.key;return r.createElement("h4",{key:n},t)},heading5:function(e){var t=e.children,n=e.key;return r.createElement("h5",{key:n},t)},heading6:function(e){var t=e.children,n=e.key;return r.createElement("h6",{key:n},t)},paragraph:function(e){var t=e.children,n=e.key;return r.createElement("p",{key:n},t)},preformatted:function(e){var t=e.node,n=e.key;return r.createElement("pre",{key:n},t.text)},strong:function(e){var t=e.children,n=e.key;return r.createElement("strong",{key:n},t)},em:function(e){var t=e.children,n=e.key;return r.createElement("em",{key:n},t)},listItem:function(e){var t=e.children,n=e.key;return r.createElement("li",{key:n},t)},oListItem:function(e){var t=e.children,n=e.key;return r.createElement("li",{key:n},t)},list:function(e){var t=e.children,n=e.key;return r.createElement("ul",{key:n},t)},oList:function(e){var t=e.children,n=e.key;return r.createElement("ol",{key:n},t)},image:function(e){var t,n=e.node,o=e.key,i=r.createElement("img",{src:n.url,alt:null!=(t=n.alt)?t:void 0,"data-copyright":n.copyright?n.copyright:void 0});return r.createElement("p",{key:o,className:"block-img"},n.linkTo?r.createElement(T,{linkResolver:u.linkResolver,internalComponent:u.internalLinkComponent,externalComponent:u.externalLinkComponent,field:n.linkTo},i):i)},embed:function(e){var t,n=e.node,o=e.key;return r.createElement("div",{key:o,"data-oembed":n.oembed.embed_url,"data-oembed-type":n.oembed.type,"data-oembed-provider":n.oembed.provider_name,dangerouslySetInnerHTML:{__html:null!=(t=n.oembed.html)?t:""}})},hyperlink:function(e){var t=e.node,n=e.children,o=e.key;return r.createElement(T,{key:o,field:t.data,linkResolver:u.linkResolver,internalComponent:u.internalLinkComponent,externalComponent:u.externalLinkComponent},n)},label:function(e){var t=e.node,n=e.children,o=e.key;return r.createElement("span",{key:o,className:t.data.label},n)},span:function(e){var t,n=e.text,o=e.key,i=[],a=0,u=E(n.split("\n"));try{for(u.s();!(t=u.n()).done;){var c=t.value;a>0&&i.push(r.createElement("br",{key:"".concat(a,"__break")})),i.push(r.createElement(r.Fragment,{key:"".concat(a,"__line")},c)),a++}}catch(l){u.e(l)}finally{u.f()}return r.createElement(r.Fragment,{key:o},i)}})),i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){for(var e=0;e<t.length;e++){var n=t[e];if(n){var r=n.apply(void 0,arguments);if(null!=r)return r}}}}("object"==typeof e.components?w(e.components):e.components,"object"==typeof t.richTextComponents?w(t.richTextComponents):t.richTextComponents,o),a=x(e.field,i);return r.createElement(r.Fragment,null,a)}return null;var u}),[e.field,e.internalLinkComponent,e.externalLinkComponent,e.components,e.linkResolver,t.linkResolver,t.richTextComponents])},D=n(5127),R=n(3751),M=function(e){return r.createElement(D.Z,null,r.createElement(R.Z,{title:e.data.prismicPages.data.title.text}),r.createElement(_,{field:e.data.prismicPages.data.title.richText}),r.createElement(_,{field:e.data.prismicPages.data.body.richText}))}}}]);
//# sourceMappingURL=component---src-pages-prismic-pages-uid-js-c30ea90dbe17afa803b4.js.map