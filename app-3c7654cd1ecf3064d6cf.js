webpackJsonp([0xd2a57dc1d883],{81:function(n,e,t){"use strict";function o(n,e,t){var o=r.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function a(n,e,t){return r.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=a;var r=[{plugin:t(379),options:{plugins:[],trackingId:"UA-73379983-2"}},{plugin:t(381),options:{plugins:[]}},{plugin:t(378),options:{plugins:[]}}]},215:function(n,e,t){"use strict";var o;e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(341),"component---src-templates-post-template-jsx":t(350),"component---src-templates-tag-template-jsx":t(351),"component---src-templates-category-template-jsx":t(348),"component---src-templates-page-template-jsx":t(349),"component---src-pages-404-jsx":t(343),"component---src-pages-categories-jsx":t(344),"component---src-pages-index-jsx":t(345),"component---src-pages-publications-jsx":t(346),"component---src-pages-tags-jsx":t(347)},e.json=(o={"layout-index.json":t(6),"offline-plugin-app-shell-fallback.json":t(361)},o["layout-index.json"]=t(6),o["posts-asru-2017.json"]=t(363),o["layout-index.json"]=t(6),o["tags-dialogue.json"]=t(370),o["layout-index.json"]=t(6),o["tags-nlu.json"]=t(374),o["layout-index.json"]=t(6),o["tags-attention.json"]=t(369),o["layout-index.json"]=t(6),o["categories-nlu.json"]=t(357),o["layout-index.json"]=t(6),o["posts-humane-typography-in-the-digital-age.json"]=t(364),o["layout-index.json"]=t(6),o["about.json"]=t(354),o["layout-index.json"]=t(6),o["contact.json"]=t(359),o["layout-index.json"]=t(6),o["posts-naacl-2018-nlg.json"]=t(365),o["layout-index.json"]=t(6),o["tags-nlg.json"]=t(373),o["layout-index.json"]=t(6),o["tags-hierarchical-decoding.json"]=t(372),o["layout-index.json"]=t(6),o["tags-seq-2-seq.json"]=t(376),o["layout-index.json"]=t(6),o["categories-nlg.json"]=t(356),o["layout-index.json"]=t(6),o["posts-naacl-2018-nlu.json"]=t(366),o["layout-index.json"]=t(6),o["posts-acl-2018-ddq.json"]=t(362),o["layout-index.json"]=t(6),o["tags-dialogue-policy.json"]=t(371),o["layout-index.json"]=t(6),o["tags-reinforcement-learning.json"]=t(375),o["layout-index.json"]=t(6),o["categories-rl.json"]=t(358),o["layout-index.json"]=t(6),o["404.json"]=t(352),o["layout-index.json"]=t(6),o["categories.json"]=t(355),o["layout-index.json"]=t(6),o["index.json"]=t(360),o["layout-index.json"]=t(6),o["publications.json"]=t(367),o["layout-index.json"]=t(6),o["tags.json"]=t(368),o["layout-index.json"]=t(6),o["404-html.json"]=t(353),o),e.layouts={"layout---index":t(342)}},216:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},i=t(1),c=o(i),l=t(9),p=o(l),f=t(145),d=o(f),m=t(58),g=o(m),h=t(81),y=t(566),x=o(y),j=function(n){var e=n.children;return c.default.createElement("div",null,e())},v=function(n){function e(t){a(this,e);var o=r(this,n.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=s({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=s({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;g.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,x.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,h.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:j,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);v.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=v,n.exports=e.default},58:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(456),r=o(a),u=(0,r.default)();n.exports=u},217:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(80),r=t(146),u=o(r),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),r=(0,u.default)(o,e);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r.split("?").length>1&&(r=r.split("?").slice(0,-1).join("")),s[r])return s[r];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,a.matchPath)(r,{path:n.path})||(0,a.matchPath)(r,{path:n.matchPath}))return i=n,s[r]=n,!0}else{if((0,a.matchPath)(r,{path:n.path,exact:!0}))return i=n,s[r]=n,!0;if((0,a.matchPath)(r,{path:n.path+"index.html"}))return i=n,s[r]=n,!0}return!1}),i}}},218:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(107),r=o(a),u=t(81),s=(0,u.apiRunner)("replaceHistory"),i=s[0],c=i||(0,r.default)();n.exports=c},353:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(388)})})}},352:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(389)})})}},354:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf927f8900006,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(390)})})}},356:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf3d0aa7c81b6,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(391)})})}},357:function(n,e,t){t(3),n.exports=function(n){return t.e(0x7d665f08333e,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(392)})})}},358:function(n,e,t){t(3),n.exports=function(n){return t.e(0xd3449d119e97,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(393)})})}},355:function(n,e,t){t(3),n.exports=function(n){return t.e(30875753179511,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(394)})})}},359:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa7f31e1aeaea,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(395)})})}},360:function(n,e,t){t(3),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(396)})})}},6:function(n,e,t){t(3),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(110)})})}},361:function(n,e,t){t(3),n.exports=function(n){return t.e(0xbf4c176e203a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(397)})})}},362:function(n,e,t){t(3),n.exports=function(n){return t.e(0xd7a5fcb8385c,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(398)})})}},363:function(n,e,t){t(3),n.exports=function(n){return t.e(61146879493754,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(399)})})}},364:function(n,e,t){t(3),n.exports=function(n){return t.e(27289334676535,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(400)})})}},365:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe8ea88d02ba,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(401)})})}},366:function(n,e,t){t(3),n.exports=function(n){return t.e(64587682213437,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(402)})})}},367:function(n,e,t){t(3),n.exports=function(n){return t.e(21913033840098,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(403)})})}},369:function(n,e,t){t(3),n.exports=function(n){return t.e(0xfe7f43af37fb,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(404)})})}},371:function(n,e,t){t(3),n.exports=function(n){return t.e(0xd91f31caede8,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(405)})})}},370:function(n,e,t){t(3),n.exports=function(n){return t.e(47018759736853,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(406)})})}},372:function(n,e,t){t(3),n.exports=function(n){return t.e(38300951096,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(407)})})}},373:function(n,e,t){t(3),n.exports=function(n){return t.e(0xba1d22e2ecc9,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(408)})})}},374:function(n,e,t){t(3),n.exports=function(n){return t.e(20651798338990,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(409)})})}},375:function(n,e,t){t(3),n.exports=function(n){return t.e(64963323250495,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(410)})})}},376:function(n,e,t){t(3),n.exports=function(n){return t.e(47470170262363,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(411)})})}},368:function(n,e,t){t(3),n.exports=function(n){return t.e(55702396619907,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(412)})})}},342:function(n,e,t){t(3),n.exports=function(n){return t.e(79611799117203,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(219)})})}},145:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var a=t(1),r=(o(a),t(217)),u=o(r),s=t(58),i=o(s),c=t(146),l=o(c),p=void 0,f={},d={},m={},g={},h={},y=[],x=[],j={},v="",C=[],N={},R=function(n){return n&&n.default||n},b=void 0,k=!0,w=[],_={},P={},E=5;b=t(220)({getNextQueuedResources:function(){return C.slice(-1)[0]},createResourceDownload:function(n){T(n,function(){C=C.filter(function(e){return e!==n}),b.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){b.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){b.onPostLoadPageResources(n)});var L=function(n,e){return N[n]>N[e]?1:N[n]<N[e]?-1:0},O=function(n,e){return j[n]>j[e]?1:j[n]<j[e]?-1:0},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[e])n.nextTick(function(){t(null,g[e])});else{var o=void 0;o="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],o(function(n,o){g[e]=o,w.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),w=w.slice(-E),t(n,o)})}},S=function(e,t){h[e]?n.nextTick(function(){t(null,h[e])}):P[e]?n.nextTick(function(){t(P[e])}):T(e,function(n,o){if(n)t(n);else{var a=R(o());h[e]=a,t(n,a)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=w.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),_[n]||(_[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},q=1,U={empty:function(){x=[],j={},N={},C=[],y=[],v=""},addPagesArray:function(n){y=n,v="",p=(0,u.default)(n,v)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return x.pop()},enqueue:function(n){var e=(0,l.default)(n,v);if(!y.some(function(n){return n.path===e}))return!1;var t=1/q;q+=1,j[e]?j[e]+=1:j[e]=1,U.has(e)||x.unshift(e),x.sort(O);var o=p(e);return o.jsonName&&(N[o.jsonName]?N[o.jsonName]+=1+t:N[o.jsonName]=1+t,C.indexOf(o.jsonName)!==-1||g[o.jsonName]||C.unshift(o.jsonName)),o.componentChunkName&&(N[o.componentChunkName]?N[o.componentChunkName]+=1+t:N[o.componentChunkName]=1+t,C.indexOf(o.componentChunkName)!==-1||g[o.jsonName]||C.unshift(o.componentChunkName)),C.sort(L),b.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:C,resourcesCount:N}},getPages:function(){return{pathArray:x,pathCount:j}},getPage:function(n){return p(n)},has:function(n){return x.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};k&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var a;if(t){if(o>=e.length)break;a=e[o++]}else{if(o=e.next(),o.done)break;a=o.value}var r=a;r.unregister()}window.location.reload()}})),k=!1;if(_[e])return D(e,'Previously detected load failure for "'+e+'"'),t();var o=p(e);if(!o)return D(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var a=void 0,r=void 0,u=void 0,s=function(){if(a&&r&&(!o.layoutComponentChunkName||u)){m[e]={component:a,json:r,layout:u,page:o};var n={component:a,json:r,layout:u,page:o};t(n),i.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return S(o.componentChunkName,function(n,e){n&&D(o.path,"Loading the component for "+o.path+" failed"),a=e,s()}),S(o.jsonName,function(n,e){n&&D(o.path,"Loading the JSON for "+o.path+" failed"),r=e,s()}),void(o.layoutComponentChunkName&&S(o.layout,function(n,e){n&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=e,s()}))},peek:function(n){return x.slice(-1)[0]},length:function(){return x.length},indexOf:function(n){return x.length-x.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:U.getResourcesForPathname};e.default=U}).call(e,t(125))},413:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-asru-2017.json",path:"/posts/asru2017/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-dialogue.json",path:"/tags/dialogue/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-nlu.json",path:"/tags/nlu/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-attention.json",path:"/tags/attention/"},{componentChunkName:"component---src-templates-category-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-nlu.json",path:"/categories/nlu/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-humane-typography-in-the-digital-age.json",path:"/posts/humane-typography-in-the-digital-age/"},{componentChunkName:"component---src-templates-page-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"about.json",path:"/about"},{componentChunkName:"component---src-templates-page-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"contact.json",path:"/contact"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-naacl-2018-nlg.json",path:"/posts/naacl2018-nlg/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-nlg.json",path:"/tags/nlg/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-hierarchical-decoding.json",path:"/tags/hierarchical-decoding/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-seq-2-seq.json",path:"/tags/seq-2-seq/"},{componentChunkName:"component---src-templates-category-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-nlg.json",path:"/categories/nlg/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-naacl-2018-nlu.json",path:"/posts/naacl2018-nlu/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-acl-2018-ddq.json",path:"/posts/acl2018-ddq/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-dialogue-policy.json",path:"/tags/dialogue-policy/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-reinforcement-learning.json",path:"/tags/reinforcement-learning/"},{componentChunkName:"component---src-templates-category-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-rl.json",path:"/categories/rl/"},{componentChunkName:"component---src-pages-404-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-categories-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories.json",path:"/categories/"},{componentChunkName:"component---src-pages-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-publications-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"publications.json",path:"/publications/"},{componentChunkName:"component---src-pages-tags-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags.json",path:"/tags/"},{componentChunkName:"component---src-pages-404-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404-html.json",path:"/404.html"}]},220:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],a=[],r=function(){var n=e();n&&(a.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":a=a.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===o.length&&r()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:a}},empty:function(){o=[],a=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},r=t(81),u=t(1),s=o(u),i=t(184),c=o(i),l=t(80),p=t(385),f=t(325),d=o(f),m=t(109),g=t(218),h=o(g),y=t(58),x=o(y),j=t(413),v=o(j),C=t(414),N=o(C),R=t(216),b=o(R),k=t(215),w=o(k),_=t(145),P=o(_);t(248),window.___history=h.default,window.___emitter=x.default,P.default.addPagesArray(v.default),P.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=N.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),L=function(n){var e=E[n];return null!=e&&(h.default.replace(e.toPath),!0)};L(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){L(n.pathname)||setTimeout(function(){(0,r.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var a=n.location.pathname;if(a===t)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&t(221);var o=function(n){function e(n){n.page.path===P.default.getPage(o).path&&(x.default.off("onPostLoadPageResources",e),clearTimeout(u),window.___history.push(t))}var t=(0,m.createLocation)(n,null,null,h.default.location),o=t.pathname,a=E[o];a&&(o=a.toPath);var r=window.location;if(r.pathname!==t.pathname||r.search!==t.search||r.hash!==t.hash){var u=setTimeout(function(){x.default.off("onPostLoadPageResources",e),x.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(t)},1e3);P.default.getResourcesForPathname(o)?(clearTimeout(u),window.___history.push(t)):x.default.on("onPostLoadPageResources",e)}};window.___navigateTo=o,(0,r.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var i=!1,f=(0,r.apiRunner)("replaceRouterComponent",{history:h.default})[0],g=function(n){var e=n.children;return s.default.createElement(l.Router,{history:h.default},e)},y=(0,l.withRouter)(b.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(f?f:g,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(y,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,u.createElement)(b.default,a({page:!0},o)):(0,u.createElement)(b.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,r.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return c.default.render(s.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},414:function(n,e){n.exports=[]},221:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(58),r=o(a),u="/";u="/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},146:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},325:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,a="DOMContentLoaded",r=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return r||t.addEventListener(a,n=function(){for(t.removeEventListener(a,n),r=1;n=e.shift();)n()}),function(n){r?setTimeout(n,0):e.push(n)}})},3:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),a=t.e,r=t.s;t.e=function(o,u){var s=!1,i=!0,c=function(n){u&&(u(t,n),u=null)};return!r&&e&&e[o]?void c(!0):(a(o,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,r?r[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},377:function(n,e,t){"use strict";var o=t(19);n.exports=function(n,e){n.addEventListener("click",function(n){if(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)return!0;for(var t=null,a=n.target;a.parentNode;a=a.parentNode)if("A"===a.nodeName){t=a;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.hash)return!0;if(""===t.pathname)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var r=document.createElement("a");r.href=t.href;var u=document.createElement("a");if(u.href=window.location.href,r.host!==u.host)return!0;var s=new RegExp("^"+u.host+(0,o.withPrefix)("/"));return!s.test(""+r.host+r.pathname)||(n.preventDefault(),e(t.getAttribute("href")),!1)})}},378:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(19),r=t(377),u=o(r);e.onClientEntry=function(){(0,u.default)(window,function(n){(0,a.navigateTo)(n)})}},379:function(n,e,t){"use strict";e.onRouteUpdate=function(n){var e=n.location;"function"==typeof ga&&(window.ga("set","page",e?e.pathname+e.search+e.hash:void 0),window.ga("send","pageview"))}},341:function(n,e,t){t(3),n.exports=function(n){return t.e(99219681209289,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(380)})})}},381:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},456:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},125:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function r(n){if(p===clearTimeout)return clearTimeout(n);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function u(){g&&d&&(g=!1,d.length?m=d.concat(m):h=-1,m.length&&s())}function s(){if(!g){var n=a(u);g=!0;for(var e=m.length;e;){for(d=m,m=[];++h<e;)d&&d[h].run();h=-1,e=m.length}d=null,g=!1,r(n)}}function i(n,e){this.fun=n,this.array=e}function c(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(n){p=o}}();var d,m=[],g=!1,h=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];m.push(new i(n,e)),1!==m.length||g||a(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},566:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},343:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa6bc690a59e9,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(230)})})}},344:function(n,e,t){t(3),n.exports=function(n){return t.e(0x81a450a7cd7a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(231)})})}},345:function(n,e,t){t(3),n.exports=function(n){return t.e(0xc23565d713b7,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(232)})})}},346:function(n,e,t){t(3),n.exports=function(n){return t.e(0x8c36443a908b,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(233)})})}},347:function(n,e,t){t(3),n.exports=function(n){return t.e(36530248567819,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(234)})})}},348:function(n,e,t){t(3),n.exports=function(n){return t.e(90179704293519,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(235)})})}},349:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa485d5bf544,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(236)})})}},350:function(n,e,t){t(3),n.exports=function(n){return t.e(0x623bdfc73907,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(237)})})}},351:function(n,e,t){t(3),n.exports=function(n){return t.e(2638498282051,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(238)})})}}});
//# sourceMappingURL=app-3c7654cd1ecf3064d6cf.js.map