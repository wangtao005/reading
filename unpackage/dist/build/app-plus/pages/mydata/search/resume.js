!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=582)}({0:function(t,e,r){"use strict";function n(t,e,r,n,o,a,i,s,u,l){var c,f="function"==typeof t?t.options:t;if(u){f.components||(f.components={});var p=Object.prototype.hasOwnProperty;for(var h in u)p.call(u,h)&&!p.call(f.components,h)&&(f.components[h]=u[h])}if(l&&((l.beforeCreate||(l.beforeCreate=[])).unshift((function(){this[l.__module]=this})),(f.mixins||(f.mixins=[])).push(l)),e&&(f.render=e,f.staticRenderFns=r,f._compiled=!0),n&&(f.functional=!0),a&&(f._scopeId="data-v-"+a),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},f._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(f.functional){f._injectStyles=c;var d=f.render;f.render=function(t,e){return c.call(e),d(t,e)}}else{var g=f.beforeCreate;f.beforeCreate=g?[].concat(g,c):[c]}return{exports:t,options:f}}r.d(e,"a",(function(){return n}))},1:function(t,e){t.exports={}},155:function(t,e,r){"use strict";var n=r(156),o=r.n(n);e.default=o.a},156:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(r(77)),o=(s(r(46)),r(82)),a=r(583),i=r(79);function s(t){return t&&t.__esModule?t:{default:t}}function u(t,e,r,n,o,a,i){try{var s=t[a](i),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,o)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){u(a,n,o,i,s,"next",t)}function s(t){u(a,n,o,i,s,"throw",t)}i(void 0)}))}}var c={data:function(){return{list:[],info:{},isImageError:!1,resumeInfo:"",readChaptersUrl:""}},onLoad:function(t){this.info=(0,i.getObjectInfo)(t),this.BookResume(t.bookUrl,t.code,t.homeUrl)},methods:{BookResume:function(e,r,o){var i=this;return l(n.default.mark((function s(){var u,l;return n.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u=i,n.next=3,(0,a.getBookResume)(e,r,o);case 3:l=n.sent,t("log",11,l," at pages/mydata/search/resume.nvue:69"),u.isImageError&&(u.info.bookImgUrl=l.editInfo.bookImgUrl),u.resumeInfo=l.editInfo.resumeInfo,u.readChaptersUrl=l.editInfo.readChaptersUrl,u.list=l.listData,u.list.reverse();case 10:case"end":return n.stop()}}),s)})))()},listChapter:function(){var t=(0,i.getStrInfo)(this.info);uni.navigateTo({url:"/pages/mydata/search/bookChapterList"+t})},joinBookShelf:function(){var e=this;return l(n.default.mark((function r(){var a,i,s,u,l,c,f,p,h;return n.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(a=e,i=uni.getStorageSync("list"),s=0,u=0;u<i.length;u++)l=a.info.bookId,c=i[u].bookId,l==c&&((f=a.info.readChaptersUrl).length>0?a.info.readChaptersUrl=f:a.info.readChaptersUrl=a.readChaptersUrl,i.splice(u,1,a.info),s++);return 0==i.length?(i=[],(p=a.info.readChaptersUrl).length>0?a.info.readChaptersUrl=p:a.info.readChaptersUrl=a.readChaptersUrl,i.push(a.info)):0==s&&(a.info.readChaptersUrl=a.readChaptersUrl,i.push(a.info)),r.prev=5,uni.setStorageSync("list",i),uni.showModal({title:"\u63d0\u793a",content:"\u52a0\u5165\u6210\u529f",success:function(t){}}),r.next=10,(0,o.bookChapterList)(a.info.bookUrl,a.info.code,a.info.homeUrl);case 10:h=r.sent;try{uni.setStorageSync(a.info.bookId,h),t("log",a.info.bookName+"\u76ee\u5f55\u52a0\u5165\u7f13\u5b58\u6210\u529f"," at pages/mydata/search/resume.nvue:131")}catch(e){t("log",a.info.bookName+"\u76ee\u5f55\u52a0\u5165\u7f13\u5b58\u5931\u8d25"," at pages/mydata/search/resume.nvue:133")}r.next=18;break;case 14:r.prev=14,r.t0=r.catch(5),t("log","\u5b58\u5165\u672c\u5730 \u6216\u8005\u66f4\u65b0\u672c\u5730\u4fe1\u606f:"+r.t0," at pages/mydata/search/resume.nvue:137"),uni.showModal({title:"\u63d0\u793a",content:"\u52a0\u5165\u5931\u8d25,\u8bf7\u8ddf\u6362\u5176\u4ed6",success:function(t){}});case 18:case"end":return r.stop()}}),r,null,[[5,14]])})))()},myBookShelf:function(){uni.switchTab({url:"/pages/tabBar/component/component"})},clickChapter:function(e){for(var r=this,n=uni.getStorageSync("list"),o=0,a=0;a<n.length;a++){if(n[a].bookId==r.info.bookId){o++;break}}if(0==n.length||n.length>0&&0==o)uni.showModal({title:"\u63d0\u793a",content:"\u662f\u5426\u5c06\u672c\u4e66\u52a0\u5165\u4e66\u67b6?",success:function(e){if(e.confirm)try{(n=0==n.length?[]:n).push(r.info),uni.setStorageSync("list",n),t("log","\u76ee\u5f55\u52a0\u5165\u7f13\u5b58\u6210\u529f"," at pages/mydata/search/resume.nvue:175")}catch(e){t("log","\u76ee\u5f55\u52a0\u5165\u7f13\u5b58\u5931\u8d25"+e," at pages/mydata/search/resume.nvue:177")}},complete:function(t){r.info.readChaptersUrl=e.chapterUrl;var n=(0,i.getStrInfo)(r.info);uni.navigateTo({url:"/pages/mydata/pageInfo/pageInfo"+n})}});else{r.info.readChaptersUrl=e.chapterUrl;var s=(0,i.getStrInfo)(r.info);uni.navigateTo({url:"/pages/mydata/pageInfo/pageInfo"+s})}},imageError:function(e){t("error","image\u53d1\u751ferror\u4e8b\u4ef6\uff0c\u643a\u5e26\u503c\u4e3a"+e.detail.errMsg," at pages/mydata/search/resume.nvue:203"),this.isImageError=!0}}};e.default=c}).call(this,r(16).default)},157:function(t,e){t.exports={view_padding:{paddingTop:"30rpx",paddingRight:"30rpx",paddingBottom:"30rpx",paddingLeft:"30rpx"},"img-view_box":{height:"200rpx",paddingTop:"10rpx"},view_row:{flexDirection:"row"},view_top:{paddingTop:"80rpx"},"img-view":{width:"155rpx",height:"190rpx",backgroundImage:"url(../../../static/bookImg/nocover.jpg)",backgroundSize:"cover"},view_text_box:{height:"200rpx",width:270,paddingLeft:"30rpx"},view_new_chapter:{backgroundColor:"#E1F3D8"},chapter_name_all:{borderBottomWidth:"1rpx",borderBottomStyle:"solid",borderColor:"#C8C7CC",paddingTop:"8rpx",paddingRight:"8rpx",paddingBottom:"8rpx",paddingLeft:"8rpx"},chapter_name_single:{marginLeft:"30rpx"}}},16:function(t,e,r){"use strict";function n(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){return"string"==typeof __channelId__&&__channelId__}Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];console[t].apply(console,r)},e.default=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var a=e.shift();if(o())return e.push(e.pop().replace("at ","uni-app:///")),console[a].apply(console,e);var i=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(e){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var r=n(t).toUpperCase();t="NUMBER"===r||"BOOLEAN"===r?"---BEGIN:"+r+"---"+t+"---END:"+r+"---":String(t)}return t})),s="";if(i.length>1){var u=i.pop();s=i.join("---COMMA---"),0===u.indexOf(" at ")?s+=u:s+="---COMMA---"+u}else s=i[0];console[a](s)}},432:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[r("view",{staticClass:["view_padding"]},[r("view",{staticClass:["view_row"]},[r("view",{staticClass:["img-view_box"]},[r("u-image",{staticClass:["img-view"],attrs:{src:t.info.bookImgUrl,mode:"aspectFit"},on:{error:t.imageError}})],1),r("view",{staticClass:["view_text_box","flex-item"]},[r("u-text",{staticStyle:{fontSize:"45rpx",fontWeight:"bold"}},[t._v(t._s(t.info.bookName))]),r("u-text",[t._v("\u4f5c\u8005: "+t._s(t.info.bookAuthor))]),r("u-text",[t._v("\u66f4\u65b0: "+t._s(t.info.bookUpdate))]),r("u-text",[t._v("\u6700\u65b0: "+t._s(t.info.bookChapter))])])]),r("view",{staticStyle:{marginTop:"30rpx"}},[r("u-text",{staticStyle:{paddingTop:"30rpx"}},[t._v(t._s(t.info.newbookUrl))])]),r("view",{staticClass:["view_row","view_top"]},[r("button",{staticClass:["mini-btn"],attrs:{type:"primary",size:"mini"},on:{click:t.listChapter}},[t._v("\u7ae0\u8282\u5217\u8868 ")]),r("button",{staticClass:["mini-btn"],attrs:{type:"default",size:"mini"},on:{click:t.joinBookShelf}},[t._v("\u52a0\u5165\u4e66\u67b6 ")]),r("button",{staticClass:["mini-btn"],attrs:{type:"warn",size:"mini"},on:{click:t.myBookShelf}},[t._v("\u6211\u7684\u4e66\u67b6 ")])],1),r("view",{staticClass:["view_top"]},[r("u-text",[t._v(" "+t._s(t.resumeInfo))])]),r("view",{staticClass:["view_top"]},[r("u-text",{staticClass:["view_new_chapter"],staticStyle:{paddingLeft:"30rpx"},attrs:{decode:"true"}},[t._v(" \u6700\u65b0\u7ae0\u8282")])]),r("view",{staticStyle:{marginTop:"20rpx"}},t._l(t.list,(function(e,n){return r("view",{key:n,staticClass:["list-item"],on:{click:function(r){t.clickChapter(e)}}},[r("view",{staticClass:["chapter_name_all"]},[r("u-text",{staticStyle:{paddingTop:"20rpx",paddingBottom:"20rpx"}},[t._v(t._s(e.chapterName)+" ")])])])})),0)])])},o=[]},46:function(t,e){var r=/&quot;|&lt;|&gt;|&amp;|&nbsp;|&apos;|&#(\d+);|&#(\d+)/g,n=/\u00a0/g,o={"&quot;":'"',"&apos;":"'","&lt;":"<","&gt;":">","&amp;":"&","&nbsp;":" "};function a(t,e,r){return e||r?String.fromCharCode(e||r):o[t]||t}function i(t){return t?t.replace(r,a).replace(n," "):""}function s(t){if(!(this instanceof s))return new s(t);var e=this._elements=[],r=[],n=this._tagElements={},o=this._idElements={};(t=t||"").replace(/(<([\w-]+)[^>]*(\/)?>)|(<\/([\w-]+)[^>]*>)/g,(function(t,n,o,a,i,s,u){if(o)(a?e:r).push({tagName:o.toUpperCase(),startIndex:u,selfClosing:!!a,tagContent:n});else{var l=function(t,e){for(var r=t.length-1;r>-1;r--)if(t[r].tagName==e)return r;return-1}(r,s.toUpperCase());if(-1!=l){c(r[l],u,i.length);for(var f=r.length-1;f>l;f--)c(r[f],u);r=r.slice(0,l)}}}));for(var a=t.length,u=0,l=r.length;u<l;u++)c(r[u],a);function c(r,n,o){r.endIndex=n+(o||0),r.outerHTML=t.substring(r.startIndex,r.endIndex),r.innerHTML=t.substring(r.startIndex+r.tagContent.length,n),function(t){var e=t.attributes={};/<[\w-]+([^>]+)\/?>/.test(t.tagContent)&&RegExp.$1.replace(/([\w-]+)=((['"])([\w\W]*?)\3|([^\s]*))/g,(function(){e[arguments[1]]=i(arguments[4]||arguments[5])}))}(r),e.push(r)}e.forEach((function(t){var e=t.attributes;e.id&&(t.id=e.id,o[e.id]=t),e.class&&(t.className=e.class.split(/\s+/g));var r=n[t.tagName];r?r.push(t):n[t.tagName]=[t]}))}s.decode=i;var u=s.prototype;u.getElementsByTagName=function(t){return this._tagElements[t&&t.toUpperCase()]||[]},u.getElementsByClassName=function(t,e){var r=[];e=e&&e.toUpperCase();var n=this._tagElements[e];return e||n||(n=this._elements),n&&t&&n.forEach((function(e){e.className&&-1!=e.className.indexOf(t)&&r.push(e)})),r},u.getElementById=function(t){return this._idElements[t]},t.exports=s},499:function(t,e,r){"use strict";r.r(e);var n=r(157),o=r.n(n);for(var a in n)"default"!==a&&function(t){r.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},582:function(t,e,r){"use strict";r.r(e);r(6);var n=r(92);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(r){return e.resolve(t()).then((function(){return r}))}),(function(r){return e.resolve(t()).then((function(){throw r}))}))}),n.default.mpType="page",n.default.route="pages/mydata/search/resume",n.default.el="#root",new Vue(n.default)},583:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getBookResume=void 0;var n,o=(n=r(46))&&n.__esModule?n:{default:n};e.getBookResume=function(t,e,r){return new Promise((function(n,a){var i=[],s={},u={};uni.request({url:t,success:function(t){var a=t.data;new o.default(a);if(1==e){var l=new o.default(a),c=l.getElementById("fmimg"),f=new o.default(c.outerHTML).getElementsByTagName("img")[0].outerHTML.replace(/"/g," ").match(/[a-zA-z]+:\/\/[^\s]*/)[0];s.bookImgUrl=f;var p=l.getElementById("intro"),h=new o.default(p.outerHTML).getElementsByTagName("p")[1];s.resumeInfo=h.innerHTML;for(var d=l.getElementById("list"),g=new o.default(d.outerHTML).getElementsByTagName("dd"),m=/<\/?.+?\/?>/g,v=/href=[^\s]*/,y=g.length<15?0:g.length>=15?g.length-10:0;y<g.length;y++){var _={},b=g[y].outerHTML,w=b.replace(m,""),x=b.match(v)[0].replace("href=","").replace(/'/g,"");_.chapterName=w,_.chapterUrl=r+x,i.push(_)}var k=g[0].outerHTML,C=(k.replace(m,""),k.match(v)[0].replace("href=","").replace(/'/g,""));s.readChaptersUrl=r+C}else if(2==e){var U=new o.default(a),E=U.getElementById("fmimg"),I="http:"+new o.default(E.outerHTML).getElementsByTagName("img")[0].attributes.src;s.bookImgUrl=I;var L=U.getElementById("intro"),T=new o.default(L.outerHTML).getElementsByTagName("p")[0];s.resumeInfo=T.innerHTML;for(var S=U.getElementById("list"),N=new o.default(S.outerHTML).getElementsByTagName("dd"),O=N.length<15?0:N.length>=15?N.length-10:0;O<N.length;O++){var B={},M=N[O].outerHTML,j=new o.default(M).getElementsByTagName("a")[0];B.chapterName=j.innerHTML;var P=j.attributes.href;B.chapterUrl=r+P,i.push(B)}var H=N[15].outerHTML,R=new o.default(H).getElementsByTagName("a")[0].attributes.href;s.readChaptersUrl=r+R}u.listData=i,u.editInfo=s,n(u)},fail:function(t){a(t)}})}))}},6:function(t,e,r){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(r(7).default,Vue.prototype.__$appStyle__)},7:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n);for(var a in n)"default"!==a&&function(t){r.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},77:function(t,e,r){t.exports=r(78)},78:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return U()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=b(i,r);if(s){if(s===c)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===c)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var c={};function f(){}function p(){}function h(){}var d={};d[o]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(C([])));m&&m!==e&&r.call(m,o)&&(d=m);var v=h.prototype=f.prototype=Object.create(d);function y(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,s){var u=l(t[o],t,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(f).then((function(t){c.value=t,i(c)}),(function(t){return n("throw",t,i,s)}))}s(u.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return c;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,c;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,c):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,c)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function C(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:U}}function U(){return{value:void 0,done:!0}}return p.prototype=v.constructor=h,h.constructor=p,p.displayName=s(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,s(t,i,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},y(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(v),s(v,i,"Generator"),v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,c):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),c},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),c}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),c}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},79:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getStrInfo=function(t){return"?bookUrl="+t.bookUrl+"&bookName="+t.bookName+"&code="+t.code+"&homeUrl="+t.homeUrl+"&bookImgUrl="+t.bookImgUrl+"&bookAuthor="+t.bookAuthor+"&newbookUrl="+t.newbookUrl+"&bookChapter="+t.bookChapter+"&bookId="+t.bookId+"&bookUpdate="+t.bookUpdate+"&isUpdate="+t.isUpdate+"&readChaptersUrl="+t.readChaptersUrl},e.getObjectInfo=function(t){return{bookUrl:t.bookUrl,bookName:t.bookName,code:t.code,homeUrl:t.homeUrl,bookImgUrl:t.bookImgUrl,bookAuthor:t.bookAuthor,bookChapter:t.bookChapter,newbookUrl:t.newbookUrl,bookId:t.bookId,bookUpdate:t.bookUpdate,isUpdate:t.isUpdate,readChaptersUrl:t.readChaptersUrl}}},82:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.bookChapterList=void 0;var n,o=(n=r(46))&&n.__esModule?n:{default:n};e.bookChapterList=function(t,e,r){return new Promise((function(n,a){var i=[];uni.request({url:t,success:function(t){var a=t.data,s=new o.default(a);if(1==e)for(var u=s.getElementById("list"),l=new o.default(u.outerHTML).getElementsByTagName("dd"),c=/<\/?.+?\/?>/g,f=/href=[^\s]*/,p=0;p<l.length;p++){var h={},d=l[p].outerHTML,g=d.replace(c,""),m=d.match(f)[0].replace("href=","").replace(/'/g,"");h.chapterName=g,h.chapterUrl=r+m,h.chapterData="",h.isReading=!1,i.push(h)}else if(2==e)for(var v=s.getElementById("list"),y=new o.default(v.outerHTML).getElementsByTagName("dd"),_=/<\/?.+?\/?>/g,b=y.length>30?15:y.length/2;b<y.length;b++){var w={},x=y[b].outerHTML,k=x.replace(_,""),C=new o.default(x).getElementsByTagName("a")[0].attributes.href;w.chapterName=k,w.chapterUrl=r+C,w.chapterData="",w.isReading=!1,i.push(w)}n(i)},fail:function(t){a(t)}})}))}},92:function(t,e,r){"use strict";var n=r(432),o=r(155),a=r(0);var i=Object(a.a)(o.default,n.b,n.c,!1,null,null,"2f7a6f3b",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(r(499).default,this.options.style):Object.assign(this.options.style,r(499).default)}).call(i),e.default=i.exports}});