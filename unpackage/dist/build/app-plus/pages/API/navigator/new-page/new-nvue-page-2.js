!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=590)}({0:function(t,e,n){"use strict";function o(t,e,n,o,r,i,a,s,c,u){var p,f="function"==typeof t?t.options:t;if(c){f.components||(f.components={});var l=Object.prototype.hasOwnProperty;for(var d in c)l.call(c,d)&&!l.call(f.components,d)&&(f.components[d]=c[d])}if(u&&((u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(f.mixins||(f.mixins=[])).push(u)),e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),o&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),a?(p=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=p):r&&(p=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),p)if(f.functional){f._injectStyles=p;var h=f.render;f.render=function(t,e){return p.call(e),h(t,e)}}else{var m=f.beforeCreate;f.beforeCreate=m?[].concat(m,p):[p]}return{exports:t,options:f}}n.d(e,"a",(function(){return o}))},1:function(t,e){t.exports={}},166:function(t,e,n){"use strict";var o=n(167),r=n.n(o);e.default=r.a},167:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(480);function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={data:function(){return{}},computed:i({},(0,o.mapState)(["colorIndex","colorList"]),{},(0,o.mapGetters)(["currentColor"])),methods:i({},(0,o.mapMutations)(["setColorIndex"]))};e.default=s},168:function(t,e){t.exports={"new-page__text":{fontSize:"14",color:"#666666"},root:{flexDirection:"column"},"page-body":{flex:1,flexDirection:"column",justifyContent:"flex-start",alignItems:"center",paddingTop:"50"},"new-page__text-box":{paddingTop:"20",paddingRight:"20",paddingBottom:"20",paddingLeft:"20"},"new-page__color":{width:"200",height:"100",justifyContent:"center",alignItems:"center"},"new-page__color-text":{fontSize:"14",color:"#FFFFFF",lineHeight:"30",textAlign:"center"},"new-page__button-item":{marginTop:"15",width:"300"}}},403:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[n("view",{staticClass:["root"]},[n("view",{staticClass:["page-body"]},[n("view",{staticClass:["new-page__color"],style:{backgroundColor:t.currentColor},on:{click:function(e){t.setColorIndex(t.colorIndex>1?0:t.colorIndex+1)}}},[n("u-text",{staticClass:["new-page__color-text"]},[t._v("\u70b9\u51fb\u6539\u53d8\u989c\u8272")])]),n("view",{staticClass:["new-page__text-box"]},[n("u-text",{staticClass:["new-page__text"]},[t._v("\u70b9\u51fb\u4e0a\u65b9\u8272\u5757\u4f7f\u7528vuex\u5728\u9875\u9762\u4e4b\u95f4\u8fdb\u884c\u901a\u8baf")])])])])])},r=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}))},480:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.install=v,e.default=e.createNamespacedHelpers=e.mapActions=e.mapGetters=e.mapMutations=e.mapState=e.Store=void 0;var o="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function r(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}var i=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},a={namespaced:{configurable:!0}};a.namespaced.get=function(){return!!this._rawModule.namespaced},i.prototype.addChild=function(t,e){this._children[t]=e},i.prototype.removeChild=function(t){delete this._children[t]},i.prototype.getChild=function(t){return this._children[t]},i.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},i.prototype.forEachChild=function(t){r(this._children,t)},i.prototype.forEachGetter=function(t){this._rawModule.getters&&r(this._rawModule.getters,t)},i.prototype.forEachAction=function(t){this._rawModule.actions&&r(this._rawModule.actions,t)},i.prototype.forEachMutation=function(t){this._rawModule.mutations&&r(this._rawModule.mutations,t)},Object.defineProperties(i.prototype,a);var s=function(t){this.register([],t,!1)};s.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},s.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")}),"")},s.prototype.update=function(t){!function t(e,n,o){0;if(n.update(o),o.modules)for(var r in o.modules){if(!n.getChild(r))return void 0;t(e.concat(r),n.getChild(r),o.modules[r])}}([],this.root,t)},s.prototype.register=function(t,e,n){var o=this;void 0===n&&(n=!0);var a=new i(e,n);0===t.length?this.root=a:this.get(t.slice(0,-1)).addChild(t[t.length-1],a);e.modules&&r(e.modules,(function(e,r){o.register(t.concat(r),e,n)}))},s.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var c;var u=function(t){var e=this;void 0===t&&(t={}),!c&&"undefined"!=typeof window&&window.Vue&&v(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var i=t.state;void 0===i&&(i={}),"function"==typeof i&&(i=i()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new s(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new c;var a=this,u=this.dispatch,p=this.commit;this.dispatch=function(t,e){return u.call(a,t,e)},this.commit=function(t,e,n){return p.call(a,t,e,n)},this.strict=r,h(this,i,[],this._modules.root),d(this,i),n.forEach((function(t){return t(e)})),c.config.devtools&&function(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){o.emit("vuex:mutation",t,e)})))}(this)};e.Store=u;var p={state:{configurable:!0}};function f(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function l(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;h(t,n,[],t._modules.root,!0),d(t,n,e)}function d(t,e,n){var o=t._vm;t.getters={};var i=t._wrappedGetters,a={};r(i,(function(e,n){a[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var s=c.config.silent;c.config.silent=!0,t._vm=new c({data:{$$state:e},computed:a}),c.config.silent=s,t.strict&&function(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}(t),o&&(n&&t._withCommit((function(){o._data.$$state=null})),c.nextTick((function(){return o.$destroy()})))}function h(t,e,n,o,r){var i=!n.length,a=t._modules.getNamespace(n);if(o.namespaced&&(t._modulesNamespaceMap[a]=o),!i&&!r){var s=m(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit((function(){c.set(s,u,o.state)}))}var p=o.context=function(t,e,n){var o=""===e,r={dispatch:o?t.dispatch:function(n,o,r){var i=_(n,o,r),a=i.payload,s=i.options,c=i.type;return s&&s.root||(c=e+c),t.dispatch(c,a)},commit:o?t.commit:function(n,o,r){var i=_(n,o,r),a=i.payload,s=i.options,c=i.type;s&&s.root||(c=e+c),t.commit(c,a,s)}};return Object.defineProperties(r,{getters:{get:o?function(){return t.getters}:function(){return function(t,e){var n={},o=e.length;return Object.keys(t.getters).forEach((function(r){if(r.slice(0,o)===e){var i=r.slice(o);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}})),n}(t,e)}},state:{get:function(){return m(t.state,n)}}}),r}(t,a,n);o.forEachMutation((function(e,n){!function(t,e,n,o){(t._mutations[e]||(t._mutations[e]=[])).push((function(e){n.call(t,o.state,e)}))}(t,a+n,e,p)})),o.forEachAction((function(e,n){var o=e.root?n:a+n,r=e.handler||e;!function(t,e,n,o){(t._actions[e]||(t._actions[e]=[])).push((function(e,r){var i,a=n.call(t,{dispatch:o.dispatch,commit:o.commit,getters:o.getters,state:o.state,rootGetters:t.getters,rootState:t.state},e,r);return(i=a)&&"function"==typeof i.then||(a=Promise.resolve(a)),t._devtoolHook?a.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):a}))}(t,o,r,p)})),o.forEachGetter((function(e,n){!function(t,e,n,o){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return n(o.state,o.getters,t.state,t.getters)}}(t,a+n,e,p)})),o.forEachChild((function(o,i){h(t,e,n.concat(i),o,r)}))}function m(t,e){return e.length?e.reduce((function(t,e){return t[e]}),t):t}function _(t,e,n){var o;return null!==(o=t)&&"object"==typeof o&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function v(t){c&&t===c||function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}(c=t)}p.state.get=function(){return this._vm._data.$$state},p.state.set=function(t){0},u.prototype.commit=function(t,e,n){var o=this,r=_(t,e,n),i=r.type,a=r.payload,s=(r.options,{type:i,payload:a}),c=this._mutations[i];c&&(this._withCommit((function(){c.forEach((function(t){t(a)}))})),this._subscribers.forEach((function(t){return t(s,o.state)})))},u.prototype.dispatch=function(t,e){var n=this,o=_(t,e),r=o.type,i=o.payload,a={type:r,payload:i},s=this._actions[r];if(s)return this._actionSubscribers.forEach((function(t){return t(a,n.state)})),s.length>1?Promise.all(s.map((function(t){return t(i)}))):s[0](i)},u.prototype.subscribe=function(t){return f(t,this._subscribers)},u.prototype.subscribeAction=function(t){return f(t,this._actionSubscribers)},u.prototype.watch=function(t,e,n){var o=this;return this._watcherVM.$watch((function(){return t(o.state,o.getters)}),e,n)},u.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},u.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),h(this,this.state,t,this._modules.get(t),n.preserveState),d(this,this.state)},u.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=m(e.state,t.slice(0,-1));c.delete(n,t[t.length-1])})),l(this)},u.prototype.hotUpdate=function(t){this._modules.update(t),l(this,!0)},u.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(u.prototype,p);var y=j((function(t,e){var n={};return x(e).forEach((function(e){var o=e.key,r=e.val;n[o]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var o=C(this.$store,"mapState",t);if(!o)return;e=o.context.state,n=o.context.getters}return"function"==typeof r?r.call(this,e,n):e[r]},n[o].vuex=!0})),n}));e.mapState=y;var g=j((function(t,e){var n={};return x(e).forEach((function(e){var o=e.key,r=e.val;n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=this.$store.commit;if(t){var i=C(this.$store,"mapMutations",t);if(!i)return;o=i.context.commit}return"function"==typeof r?r.apply(this,[o].concat(e)):o.apply(this.$store,[r].concat(e))}})),n}));e.mapMutations=g;var b=j((function(t,e){var n={};return x(e).forEach((function(e){var o=e.key,r=e.val;r=t+r,n[o]=function(){if(!t||C(this.$store,"mapGetters",t))return this.$store.getters[r]},n[o].vuex=!0})),n}));e.mapGetters=b;var w=j((function(t,e){var n={};return x(e).forEach((function(e){var o=e.key,r=e.val;n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=this.$store.dispatch;if(t){var i=C(this.$store,"mapActions",t);if(!i)return;o=i.context.dispatch}return"function"==typeof r?r.apply(this,[o].concat(e)):o.apply(this.$store,[r].concat(e))}})),n}));e.mapActions=w;var O=function(t){return{mapState:y.bind(null,t),mapGetters:b.bind(null,t),mapMutations:g.bind(null,t),mapActions:w.bind(null,t)}};function x(t){return Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}}))}function j(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function C(t,e,n){return t._modulesNamespaceMap[n]}e.createNamespacedHelpers=O;var $={Store:u,install:v,version:"3.0.1",mapState:y,mapMutations:g,mapGetters:b,mapActions:w,createNamespacedHelpers:O};e.default=$},499:function(t,e,n){"use strict";n.r(e);var o=n(168),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e.default=r.a},590:function(t,e,n){"use strict";n.r(e);n(6);var o=n(74);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),o.default.mpType="page",o.default.route="pages/API/navigator/new-page/new-nvue-page-2",o.default.el="#root",new Vue(o.default)},6:function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(7).default,Vue.prototype.__$appStyle__)},7:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e.default=r.a},74:function(t,e,n){"use strict";var o=n(403),r=n(166),i=n(0);var a=Object(i.a)(r.default,o.b,o.c,!1,null,null,"31fa5873",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(499).default,this.options.style):Object.assign(this.options.style,n(499).default)}).call(a),e.default=a.exports}});