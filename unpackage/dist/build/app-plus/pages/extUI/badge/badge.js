!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=663)}({0:function(t,e,n){"use strict";function i(t,e,n,i,o,r,a,s,u,l){var c,d="function"==typeof t?t.options:t;if(u){d.components||(d.components={});var f=Object.prototype.hasOwnProperty;for(var p in u)f.call(u,p)&&!f.call(d.components,p)&&(d.components[p]=u[p])}if(l&&((l.beforeCreate||(l.beforeCreate=[])).unshift((function(){this[l.__module]=this})),(d.mixins||(d.mixins=[])).push(l)),e&&(d.render=e,d.staticRenderFns=n,d._compiled=!0),i&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(d.functional){d._injectStyles=c;var g=d.render;d.render=function(t,e){return c.call(e),g(t,e)}}else{var b=d.beforeCreate;d.beforeCreate=b?[].concat(b,c):[c]}return{exports:t,options:d}}n.d(e,"a",(function(){return i}))},1:function(t,e){t.exports={}},12:function(t,e,n){"use strict";n.r(e);var i=n(4),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a},13:function(t,e,n){"use strict";n.r(e);var i=n(5),o=n(2);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);var a=n(0);var s=Object(a.a)(o.default,i.b,i.c,!1,null,"3a3c9aee","40156b0e",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(12).default,this.options.style):Object.assign(this.options.style,n(12).default)}).call(s),e.default=s.exports},136:function(t,e,n){"use strict";var i=n(406),o=n(376),r=n(0);var a=Object(r.a)(o.default,i.b,i.c,!1,null,null,"cb2907da",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(570).default,this.options.style):Object.assign(this.options.style,n(570).default)}).call(a),e.default=a.exports},18:function(t,e,n){"use strict";n.r(e);var i=n(19),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a},19:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=i},2:function(t,e,n){"use strict";n.r(e);var i=n(3),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a},20:function(t,e){t.exports={"uni-badge":{justifyContent:"center",flexDirection:"row",height:"20",lineHeight:"20",color:"#333333",borderRadius:"100",backgroundColor:"rgba(0,0,0,0)",textAlign:"center",fontFamily:"'Helvetica Neue', Helvetica, sans-serif",fontSize:"12",paddingTop:"0",paddingRight:"6",paddingBottom:"0",paddingLeft:"6"},"uni-badge--inverted":{paddingTop:0,paddingRight:"5",paddingBottom:0,paddingLeft:0,color:"#f1f1f1"},"uni-badge--default":{color:"#333333",backgroundColor:"#f1f1f1"},"uni-badge--default-inverted":{color:"#999999",backgroundColor:"rgba(0,0,0,0)"},"uni-badge--primary":{color:"#ffffff",backgroundColor:"#007aff"},"uni-badge--primary-inverted":{color:"#007aff",backgroundColor:"rgba(0,0,0,0)"},"uni-badge--success":{color:"#ffffff",backgroundColor:"#4cd964"},"uni-badge--success-inverted":{color:"#4cd964",backgroundColor:"rgba(0,0,0,0)"},"uni-badge--warning":{color:"#ffffff",backgroundColor:"#f0ad4e"},"uni-badge--warning-inverted":{color:"#f0ad4e",backgroundColor:"rgba(0,0,0,0)"},"uni-badge--error":{color:"#ffffff",backgroundColor:"#dd524d"},"uni-badge--error-inverted":{color:"#dd524d",backgroundColor:"rgba(0,0,0,0)"},"uni-badge--small":{transform:"scale(0.8)",transformOrigin:"center center"}}},21:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.text?n("u-text",{staticClass:["uni-badge"],class:t.inverted?"uni-badge--"+t.type+" uni-badge--"+t.size+" uni-badge--"+t.type+"-inverted":"uni-badge--"+t.type+" uni-badge--"+t.size,style:t.badgeStyle,on:{click:function(e){t.onClick()}}},[t._v(t._s(t.text))]):t._e()},o=[]},3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},30:function(t,e,n){"use strict";n.r(e);var i=n(20),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a},31:function(t,e,n){"use strict";n.r(e);var i=n(21),o=n(18);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);var a=n(0);var s=Object(a.a)(o.default,i.b,i.c,!1,null,"4d5fd890","5e2ae68a",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(30).default,this.options.style):Object.assign(this.options.style,n(30).default)}).call(s),e.default=s.exports},376:function(t,e,n){"use strict";var i=n(377),o=n.n(i);e.default=o.a},377:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={components:{},data:function(){return{}}}},378:function(t,e){t.exports={example:{paddingTop:0,paddingRight:"15",paddingBottom:0,paddingLeft:"15"},"example-info":{paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",color:"#3b4144",backgroundColor:"#ffffff",fontSize:"14",lineHeight:"20"},"example-info-text":{fontSize:"14",lineHeight:"20",color:"#3b4144"},"example-body":{flexDirection:"row",paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",backgroundColor:"#ffffff",justifyContent:"flex-start"},"word-btn-white":{fontSize:"18",color:"#FFFFFF"},"word-btn":{flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:"6",height:"48",marginTop:"15",marginRight:"15",marginBottom:"15",marginLeft:"15",backgroundColor:"#007AFF"},"word-btn--hover":{backgroundColor:"#4ca2ff"},"uni-badge-left-margin":{marginLeft:"20rpx"}}},4:function(t,e){t.exports={"uni-section":{position:"relative",marginTop:"10",flexDirection:"row",alignItems:"center",paddingTop:0,paddingRight:"10",paddingBottom:0,paddingLeft:"10",height:"50",backgroundColor:"#f8f8f8",borderBottomColor:"#e5e5e5",borderBottomStyle:"solid",borderBottomWidth:"0.5",fontWeight:"normal"},"uni-section__head":{flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:"10"},line:{height:"15",backgroundColor:"#c0c0c0",borderRadius:"5",width:"3"},circle:{width:"8",height:"8",borderTopRightRadius:"50",borderTopLeftRadius:"50",borderBottomLeftRadius:"50",borderBottomRightRadius:"50",backgroundColor:"#c0c0c0"},"uni-section__content":{flexDirection:"column",flex:1,color:"#333333"},"uni-section__content-title":{fontSize:"14",color:"#333333"},distraction:{flexDirection:"row",alignItems:"center"},"uni-section__content-sub":{fontSize:"12",color:"#999999"}}},406:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uniSection:n(13).default,uniBadge:n(31).default},o=function(){var t=this.$createElement,e=this._self._c||t;return e("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[e("view",{staticClass:["page"]},[e("u-text",{staticClass:["example-info"]},[this._v("\u6570\u5b57\u89d2\u6807\u901a\u7528\u6765\u6807\u8bb0\u91cd\u70b9\u4fe1\u606f\u4f7f\u7528\uff0c\u5982\u63a5\u53d7\u5230\u65b0\u6d88\u606f\u3001\u6709\u672a\u8bfb\u6d88\u606f\u7b49")]),e("uni-section",{attrs:{title:"\u6709\u5e95\u8272",type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{text:"1"}}),e("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{text:"2",type:"primary"}}),e("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{text:"34",type:"success"}}),e("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{text:"45",type:"warning"}}),e("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{text:"123",type:"error"}})],1),e("uni-section",{attrs:{title:"\u65e0\u5e95\u8272",type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{inverted:!0,text:"1"}}),e("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{inverted:!0,text:"2",type:"primary"}}),e("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{inverted:!0,text:"34",type:"success"}}),e("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{inverted:!0,text:"45",type:"warning"}}),e("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{inverted:!0,text:"123",type:"error"}})],1),e("uni-section",{attrs:{title:"\u8ff7\u4f60",type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{text:"1",size:"small"}}),e("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{text:"2",type:"primary",size:"small"}}),e("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{text:"34",type:"success",size:"small"}}),e("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{text:"45",type:"warning",size:"small"}}),e("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{text:"123",type:"error",size:"small"}})],1)],1)])},r=[]},5:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:["uni-section"],attrs:{nvue:!0}},[t.type?n("view",{staticClass:["uni-section__head"]},[n("view",{staticClass:["uni-section__head-tag"],class:t.type})]):t._e(),n("view",{staticClass:["uni-section__content"]},[n("u-text",{staticClass:["uni-section__content-title"],class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?n("u-text",{staticClass:["uni-section__content-sub"]},[t._v(t._s(t.subTitle))]):t._e()]),t._t("default")],2)},o=[]},570:function(t,e,n){"use strict";n.r(e);var i=n(378),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a},6:function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(7).default,Vue.prototype.__$appStyle__)},663:function(t,e,n){"use strict";n.r(e);n(6);var i=n(136);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),i.default.mpType="page",i.default.route="pages/extUI/badge/badge",i.default.el="#root",new Vue(i.default)},7:function(t,e,n){"use strict";n.r(e);var i=n(1),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a}});