!function(t){var e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=639)}({0:function(t,e,o){"use strict";function i(t,e,o,i,n,r,s,d,l,a){var c,u="function"==typeof t?t.options:t;if(l){u.components||(u.components={});var f=Object.prototype.hasOwnProperty;for(var p in l)f.call(l,p)&&!f.call(u.components,p)&&(u.components[p]=l[p])}if(a&&((a.beforeCreate||(a.beforeCreate=[])).unshift((function(){this[a.__module]=this})),(u.mixins||(u.mixins=[])).push(a)),e&&(u.render=e,u.staticRenderFns=o,u._compiled=!0),i&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):n&&(c=d?function(){n.call(this,this.$root.$options.shadowRoot)}:n),c)if(u.functional){u._injectStyles=c;var _=u.render;u.render=function(t,e){return c.call(e),_(t,e)}}else{var g=u.beforeCreate;u.beforeCreate=g?[].concat(g,c):[c]}return{exports:t,options:u}}o.d(e,"a",(function(){return i}))},1:function(t,e){t.exports={}},12:function(t,e,o){"use strict";o.r(e);var i=o(4),n=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e.default=n.a},122:function(t,e,o){"use strict";var i=o(421),n=o(307),r=o(0);var s=Object(r.a)(n.default,i.b,i.c,!1,null,null,"2c19e23e",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(547).default,this.options.style):Object.assign(this.options.style,o(547).default)}).call(s),e.default=s.exports},13:function(t,e,o){"use strict";o.r(e);var i=o(5),n=o(2);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);var s=o(0);var d=Object(s.a)(n.default,i.b,i.c,!1,null,"3a3c9aee","40156b0e",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(12).default,this.options.style):Object.assign(this.options.style,o(12).default)}).call(d),e.default=d.exports},2:function(t,e,o){"use strict";o.r(e);var i=o(3),n=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e.default=n.a},3:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},304:function(t,e,o){"use strict";o.r(e);var i=o(305),n=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e.default=n.a},305:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniSwiperDot",props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:8,height:8,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=20,this.dots.height=20):(this.dots.width=8,this.dots.height=8)}},created:function(){"indexes"===this.mode&&(this.dots.width=20,this.dots.height=20),this.dots=Object.assign(this.dots,this.dotsStyles)}};e.default=i},306:function(t,e){t.exports={"uni-swiper__warp":{flex:1,flexDirection:"column",position:"relative",overflow:"hidden"},"uni-swiper__dots-box":{position:"absolute",bottom:"10",left:0,right:0,flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"},"uni-swiper__dots-item":{width:"8",borderRadius:"100",marginLeft:"6",backgroundColor:"rgba(0,0,0,0.4)","marginTop:first-child":0,"marginRight:first-child":0,"marginBottom:first-child":0,"marginLeft:first-child":0},"uni-swiper__dots-default":{borderRadius:"100"},"uni-swiper__dots-long":{borderRadius:"50"},"uni-swiper__dots-bar":{borderRadius:"50"},"uni-swiper__dots-nav":{bottom:"0",height:"40",flex:1,flexDirection:"row",justifyContent:"flex-start",alignItems:"center",backgroundColor:"rgba(0,0,0,0.2)"},"uni-swiper__dots-nav-item":{fontSize:"14",color:"#ffffff",marginTop:0,marginRight:"15",marginBottom:0,marginLeft:"15"},"uni-swiper__dots-indexes":{justifyContent:"center",alignItems:"center"},"uni-swiper__dots-indexes-text":{color:"#ffffff",fontSize:"12"}}},307:function(t,e,o){"use strict";var i=o(308),n=o.n(i);e.default=n.a},308:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={components:{},data:function(){return{info:[{colorClass:"uni-bg-red",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg",content:"\u5185\u5bb9 A"},{colorClass:"uni-bg-green",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg",content:"\u5185\u5bb9 B"},{colorClass:"uni-bg-blue",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg",content:"\u5185\u5bb9 C"}],dotStyle:[{backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",color:"#fff",selectedBackgroundColor:"rgba(0, 0, 0, .9)",selectedBorder:"1px rgba(0, 0, 0, .9) solid"},{backgroundColor:"rgba(255, 90, 95,0.3)",border:"1px rgba(255, 90, 95,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(255, 90, 95,0.9)",selectedBorder:"1px rgba(255, 90, 95,0.9) solid"},{backgroundColor:"rgba(83, 200, 249,0.3)",border:"1px rgba(83, 200, 249,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(83, 200, 249,0.9)",selectedBorder:"1px rgba(83, 200, 249,0.9) solid"}],modeIndex:-1,styleIndex:-1,current:0,mode:"default",dotsStyles:{}}},onLoad:function(){},methods:{change:function(t){this.current=t.detail.current},selectStyle:function(t){this.dotsStyles=this.dotStyle[t],this.styleIndex=t},selectMode:function(t,e){this.mode=t,this.modeIndex=e,this.styleIndex=-1,this.dotsStyles=this.dotStyle[0]}}}},309:function(t,e){t.exports={example:{paddingTop:0,paddingRight:"15",paddingBottom:0,paddingLeft:"15"},"example-info":{paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",color:"#3b4144",backgroundColor:"#ffffff",fontSize:"14",lineHeight:"20"},"example-info-text":{fontSize:"14",lineHeight:"20",color:"#3b4144"},"example-body":{flexDirection:"row",paddingTop:"20rpx",paddingRight:"20rpx",paddingBottom:"20rpx",paddingLeft:"20rpx",backgroundColor:"#ffffff"},"word-btn-white":{fontSize:"18",color:"#FFFFFF"},"word-btn":{flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:"6",height:"48",marginTop:"15",marginRight:"15",marginBottom:"15",marginLeft:"15",backgroundColor:"#007AFF"},"word-btn--hover":{backgroundColor:"#4ca2ff"},"swiper-box":{height:"200"},"swiper-item":{flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#999999",color:"#ffffff"},image:{width:"750rpx"},"uni-bg-red":{backgroundColor:"#ff5a5f"},"uni-bg-green":{backgroundColor:"#09bb07"},"uni-bg-blue":{backgroundColor:"#007aff"},"example-body-item":{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:"15rpx",marginRight:"15rpx",marginBottom:"15rpx",marginLeft:"15rpx",paddingTop:"15rpx",paddingRight:"15rpx",paddingBottom:"15rpx",paddingLeft:"15rpx",height:"60rpx",flex:1,borderColor:"#e5e5e5",borderStyle:"solid",borderWidth:"1",borderRadius:"5"},"example-body-item-text":{fontSize:"28rpx",color:"#333333"},"example-body-dots":{width:"16rpx",height:"16rpx",borderRadius:"50",backgroundColor:"#333333",marginLeft:"10rpx"},active:{borderStyle:"solid",borderColor:"#007aff",borderWidth:"1"}}},4:function(t,e){t.exports={"uni-section":{position:"relative",marginTop:"10",flexDirection:"row",alignItems:"center",paddingTop:0,paddingRight:"10",paddingBottom:0,paddingLeft:"10",height:"50",backgroundColor:"#f8f8f8",borderBottomColor:"#e5e5e5",borderBottomStyle:"solid",borderBottomWidth:"0.5",fontWeight:"normal"},"uni-section__head":{flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:"10"},line:{height:"15",backgroundColor:"#c0c0c0",borderRadius:"5",width:"3"},circle:{width:"8",height:"8",borderTopRightRadius:"50",borderTopLeftRadius:"50",borderBottomLeftRadius:"50",borderBottomRightRadius:"50",backgroundColor:"#c0c0c0"},"uni-section__content":{flexDirection:"column",flex:1,color:"#333333"},"uni-section__content-title":{fontSize:"14",color:"#333333"},distraction:{flexDirection:"row",alignItems:"center"},"uni-section__content-sub":{fontSize:"12",color:"#999999"}}},421:function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return i}));var i={uniSwiperDot:o(640).default,uniSection:o(13).default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[o("view",{staticClass:["content"]},[o("uni-swiper-dot",{attrs:{info:t.info,current:t.current,mode:t.mode,dotsStyles:t.dotsStyles,field:"content"}},[o("swiper",{staticClass:["swiper-box"],on:{change:t.change}},t._l(t.info,(function(t,e){return o("swiper-item",{key:e},[o("view",{staticClass:["swiper-item"],class:t.colorClass},[o("u-image",{staticClass:["image"],attrs:{src:t.url,mode:"aspectFill"}})],1)])})),1)],1),o("uni-section",{attrs:{title:"\u6a21\u5f0f\u9009\u62e9",type:"line"}}),o("view",{staticClass:["example-body"]},[o("view",{staticClass:["example-body-item"],class:{active:0===t.modeIndex},on:{click:function(e){t.selectMode("default",0)}}},[o("u-text",{staticClass:["example-body-item-text"]},[t._v("default")])]),o("view",{staticClass:["example-body-item"],class:{active:1===t.modeIndex},on:{click:function(e){t.selectMode("dot",1)}}},[o("u-text",{staticClass:["example-body-item-text"]},[t._v("dot")])]),o("view",{staticClass:["example-body-item"],class:{active:2===t.modeIndex},on:{click:function(e){t.selectMode("round",2)}}},[o("u-text",{staticClass:["example-body-item-text"]},[t._v("round")])]),o("view",{staticClass:["example-body-item"],class:{active:3===t.modeIndex},on:{click:function(e){t.selectMode("nav",3)}}},[o("u-text",{staticClass:["example-body-item-text"]},[t._v("nav")])]),o("view",{staticClass:["example-body-item"],class:{active:4===t.modeIndex},on:{click:function(e){t.selectMode("indexes",4)}}},[o("u-text",{staticClass:["example-body-item-text"]},[t._v("indexes")])])]),o("uni-section",{attrs:{title:"\u989c\u8272\u6837\u5f0f\u9009\u62e9",type:"line"}}),o("view",{staticClass:["example-body"]},["nav"!==t.mode?t._l(t.dotStyle,(function(e,i){return o("view",{key:i,staticClass:["example-body-item"],class:{active:t.styleIndex===i},on:{click:function(e){t.selectStyle(i)}}},[o("view",{staticClass:["example-body-dots"],style:{"background-color":e.selectedBackgroundColor,border:e.selectedBorder}}),o("view",{staticClass:["example-body-dots"],style:{"background-color":e.backgroundColor,border:e.border}}),o("view",{staticClass:["example-body-dots"],style:{"background-color":e.backgroundColor,border:e.border}})])})):t._e(),"nav"===t.mode?t._l(t.dotStyle,(function(e,i){return o("view",{key:i,staticClass:["example-body-item"],class:{active:t.styleIndex===i},style:{"background-color":e.selectedBackgroundColor},on:{click:function(e){t.selectStyle(i)}}},[o("u-text",{staticClass:["example-body-item-text"],style:{color:e.color}},[t._v("\u5185\u5bb9")])])})):t._e()],2)],1)])},r=[]},464:function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:["uni-swiper__warp"]},[t._t("default"),"default"===t.mode?o("view",{key:"default",staticClass:["uni-swiper__dots-box"],style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,i){return o("view",{key:i,staticClass:["uni-swiper__dots-item","uni-swiper__dots-bar"],style:{width:(i===t.current?2*t.dots.width:t.dots.width)+"px",height:t.dots.width/3+"px","background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,"border-radius":"0px"}})})),0):t._e(),"dot"===t.mode?o("view",{key:"dot",staticClass:["uni-swiper__dots-box"],style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,i){return o("view",{key:i,staticClass:["uni-swiper__dots-item"],style:{width:t.dots.width+"px",height:t.dots.height+"px","background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:i!==t.current?t.dots.border:t.dots.selectedBorder}})})),0):t._e(),"round"===t.mode?o("view",{key:"round",staticClass:["uni-swiper__dots-box"],style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,i){return o("view",{key:i,staticClass:["uni-swiper__dots-item"],class:[i===t.current&&"uni-swiper__dots-long"],style:{width:(i===t.current?3*t.dots.width:t.dots.width)+"px",height:t.dots.height+"px","background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:i!==t.current?t.dots.border:t.dots.selectedBorder}})})),0):t._e(),"nav"===t.mode?o("view",{key:"nav",staticClass:["uni-swiper__dots-box","uni-swiper__dots-nav"],style:{"background-color":t.dotsStyles.backgroundColor,bottom:"0"}},[o("u-text",{staticClass:["uni-swiper__dots-nav-item"],style:{color:t.dotsStyles.color}},[t._v(t._s(t.current+1+"/"+t.info.length+" "+t.info[t.current][t.field]))])]):t._e(),"indexes"===t.mode?o("view",{key:"indexes",staticClass:["uni-swiper__dots-box"],style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,i){return o("view",{key:i,staticClass:["uni-swiper__dots-item","uni-swiper__dots-indexes"],style:{width:t.dots.width+"px",height:t.dots.height+"px",color:i===t.current?t.dots.selectedColor:t.dots.color,"background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:i!==t.current?t.dots.border:t.dots.selectedBorder}},[o("u-text",{staticClass:["uni-swiper__dots-indexes-text"]},[t._v(t._s(i+1))])])})),0):t._e()],2)},n=[]},5:function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:["uni-section"],attrs:{nvue:!0}},[t.type?o("view",{staticClass:["uni-section__head"]},[o("view",{staticClass:["uni-section__head-tag"],class:t.type})]):t._e(),o("view",{staticClass:["uni-section__content"]},[o("u-text",{staticClass:["uni-section__content-title"],class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?o("u-text",{staticClass:["uni-section__content-sub"]},[t._v(t._s(t.subTitle))]):t._e()]),t._t("default")],2)},n=[]},546:function(t,e,o){"use strict";o.r(e);var i=o(306),n=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e.default=n.a},547:function(t,e,o){"use strict";o.r(e);var i=o(309),n=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e.default=n.a},6:function(t,e,o){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(o(7).default,Vue.prototype.__$appStyle__)},639:function(t,e,o){"use strict";o.r(e);o(6);var i=o(122);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(o){return e.resolve(t()).then((function(){return o}))}),(function(o){return e.resolve(t()).then((function(){throw o}))}))}),i.default.mpType="page",i.default.route="pages/extUI/swiper-dot/swiper-dot",i.default.el="#root",new Vue(i.default)},640:function(t,e,o){"use strict";o.r(e);var i=o(464),n=o(304);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);var s=o(0);var d=Object(s.a)(n.default,i.b,i.c,!1,null,"547f0d12","5b4b1c96",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(546).default,this.options.style):Object.assign(this.options.style,o(546).default)}).call(d),e.default=d.exports},7:function(t,e,o){"use strict";o.r(e);var i=o(1),n=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e.default=n.a}});