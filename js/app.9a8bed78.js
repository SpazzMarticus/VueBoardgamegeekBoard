(function(e){function t(t){for(var a,c,o=t[0],u=t[1],s=t[2],b=0,m=[];b<o.length;b++)c=o[b],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&m.push(r[c][0]),r[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);i&&i(t);while(m.length)m.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(l.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},l=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/VueBoardgamegeekBoard/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var i=u;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1130:function(e,t,n){},"3f26":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={key:0},l=Object(a["g"])(" BoardGameGeek - Username"),c=Object(a["f"])("br",null,null,-1),o=Object(a["f"])("small",null,[Object(a["g"])(" Enter your BGG username and submit. "),Object(a["f"])("br")],-1),u=["disabled"],s={key:1,class:"flex"},i=["href"];function b(e,t,n,b,m,f){var d=Object(a["o"])("Board");return Object(a["j"])(),Object(a["e"])(a["a"],null,[m.showForm?(Object(a["j"])(),Object(a["e"])("div",r,[Object(a["f"])("label",null,[l,c,Object(a["t"])(Object(a["f"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return m.username=e}),onKeyup:t[1]||(t[1]=Object(a["u"])((function(){return f.submit&&f.submit.apply(f,arguments)}),["enter"])),autocorrect:"off",autocapitalize:"off",spellcheck:"false"},null,544),[[a["r"],m.username]]),o]),Object(a["f"])("label",null,[Object(a["f"])("button",{type:"button",onClick:t[2]||(t[2]=function(){return f.submit&&f.submit.apply(f,arguments)}),disabled:!m.username}," Submit ",8,u)])])):(Object(a["j"])(),Object(a["e"])("div",s,[f.permalink?(Object(a["j"])(),Object(a["e"])("a",{key:0,class:"button",href:f.permalink},"Permalink",8,i)):Object(a["d"])("",!0),Object(a["f"])("button",{type:"button",onClick:t[3]||(t[3]=function(){return f.reset&&f.reset.apply(f,arguments)})},"Reset")])),m.submittedUsername?(Object(a["j"])(),Object(a["c"])(d,{key:2,username:m.submittedUsername},null,8,["username"])):Object(a["d"])("",!0)],64)}n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("ac1f"),n("841c"),n("2b3d"),n("b0c0");var m=n("5c46"),f=n.n(m),d=function(e){return Object(a["l"])("data-v-12f14776"),e=e(),Object(a["k"])(),e},j={key:0,class:"loading"},p=Object(a["g"])(" Loading board for "),y=Object(a["g"])("... "),O={key:1,class:"board"},g={key:0},h={key:0,class:"random"},v=d((function(){return Object(a["f"])("img",{class:"icon",src:f.a},null,-1)})),k=[v],w={class:"center select"},P=["value"],B={class:"shelf"},A={key:1},C=d((function(){return Object(a["f"])("h1",null,"Whoops!",-1)})),x=d((function(){return Object(a["f"])("p",null,"You don't have any games in your collection.",-1)})),L=[C,x];function S(e,t,n,r,l,c){var o=Object(a["o"])("Game");return Object(a["j"])(),Object(a["e"])("div",null,[l.loaded?Object(a["d"])("",!0):(Object(a["j"])(),Object(a["e"])("div",j,[p,Object(a["f"])("i",null,Object(a["p"])(n.username),1),y])),l.loaded?(Object(a["j"])(),Object(a["e"])("div",O,[l.collection.length>0?(Object(a["j"])(),Object(a["e"])("div",g,[l.randomLeastPlayed?(Object(a["j"])(),Object(a["e"])("div",h,[Object(a["h"])(o,{class:"game",game:l.randomLeastPlayed},{button:Object(a["s"])((function(){return[Object(a["f"])("button",{onClick:t[0]||(t[0]=function(){return c.reroll&&c.reroll.apply(c,arguments)})},k)]})),_:1},8,["game"])])):Object(a["d"])("",!0),Object(a["f"])("div",w,[Object(a["t"])(Object(a["f"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.sortBy=e})},[(Object(a["j"])(!0),Object(a["e"])(a["a"],null,Object(a["m"])(l.sortOptions,(function(e,t){return Object(a["j"])(),Object(a["e"])("option",{key:t,value:e},Object(a["p"])(e.name),9,P)})),128))],512),[[a["q"],l.sortBy]])]),Object(a["f"])("div",B,[(Object(a["j"])(!0),Object(a["e"])(a["a"],null,Object(a["m"])(c.collectionSorted,(function(e){return Object(a["j"])(),Object(a["c"])(o,{class:"game",key:e.id,game:e},null,8,["game"])})),128))])])):(Object(a["j"])(),Object(a["e"])("div",A,L))])):Object(a["d"])("",!0)])}n("4de4"),n("4e82"),n("fb6a");var T=n("3835"),M=n("1da1"),Y=(n("96cf"),n("159b"),n("a630"),n("99af"),n("4fad"),n("07ac"),n("5a0c")),_=n.n(Y),E=100,U="https://www.boardgamegeek.com/xmlapi2/",N="https://boardgamegeek.com/boardgame/",G=_()(),F={xml:function(e){var t=arguments,n=this;return Object(M["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t.length>1&&void 0!==t[1]?t[1]:null,r||(r=E),a.abrupt("return",fetch(e).then((function(t){if(200===t.status)return t.text();if(202===t.status){var a=new Promise((function(t){setTimeout((function(){t(n.xml(e,r))}),r)}));return r*=2,a}})).then((function(e){return e instanceof Document?e:(new window.DOMParser).parseFromString(e,"text/xml")})));case 3:case"end":return a.stop()}}),a)})))()},collection:function(e){return this.xml("".concat(U,"collection?username=").concat(e,"&own=1&subtype=boardgame&excludesubtype=boardgameexpansion")).then((function(e){var t={};return Array.from(e.getElementsByTagName("item")).forEach((function(e){var n=e.getAttribute("objectid"),a=null;e.getElementsByTagName("thumbnail")[0]&&(a=e.getElementsByTagName("thumbnail")[0].innerHTML),t[n]={id:n,name:e.getElementsByTagName("name")[0].innerHTML,uri:"".concat(N).concat(n),thumbnail:a,playCount:0,lastPlay:null,lastPlayAgo:null,plays:[]}})),t}))},plays:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(r){t.xml("".concat(U,"plays?username=").concat(e,"&own=1&page=").concat(n)).then((function(l){Array.from(l.getElementsByTagName("play")).forEach((function(e){var t=e.getElementsByTagName("item")[0],n=t.getAttribute("objectid");a[n]||(a[n]=[]),a[n].push({date:e.getAttribute("date"),count:parseInt(e.getAttribute("quantity"))})})),l.getElementsByTagName("plays")[0].getAttribute("total")/100-n>0?t.plays(e,n+1,a).then((function(){r(a)})):r(a)}))}))},fetch:function(e){return Promise.all([this.collection(e),this.plays(e)]).then((function(e){var t,n,a=Object(T["a"])(e,2);t=a[0],n=a[1];for(var r=function(){var e=Object(T["a"])(c[l],2),n=e[0],a=e[1],r=t[n];r&&(r.playsByYear={},r.playCount=a.reduce((function(e,t){var n=t.date.substr(0,4);return r.playsByYear[n]?r.playsByYear[n]+=t.count:r.playsByYear[n]=t.count,e+t.count}),0),r.lastPlay=_()(a[0].date),r.lastPlayAgo=G.diff(r.lastPlay,"day"),r.plays=a)},l=0,c=Object.entries(n);l<c.length;l++)r();return Object.values(t)}))}},I=function(e){return Object(a["l"])("data-v-b7e72d12"),e=e(),Object(a["k"])(),e},R={class:"thumbnail-container"},q=["src"],V={class:"content-container"},z={key:0,class:"ago"},D={key:0},H={key:1},J=Object(a["g"])(" days ago "),K={class:"flex"},W=["href"],$={key:0,class:"secondary"},Q=I((function(){return Object(a["f"])("br",null,null,-1)})),X={key:1,class:"plays"},Z=I((function(){return Object(a["f"])("br",null,null,-1)})),ee=Object(a["g"])(" this year "),te=I((function(){return Object(a["f"])("br",null,null,-1)})),ne=Object(a["g"])(" last year "),ae=I((function(){return Object(a["f"])("br",null,null,-1)})),re=Object(a["g"])(" total "),le={key:2,class:"plays-none"},ce=I((function(){return Object(a["f"])("small",null," no plays logged ",-1)})),oe=[ce];function ue(e,t,n,r,l,c){return Object(a["j"])(),Object(a["e"])("div",{class:Object(a["i"])(["game",c.classNames])},[Object(a["f"])("div",R,[Object(a["f"])("img",{src:n.game.thumbnail,class:"thumbnail"},null,8,q)]),Object(a["f"])("div",V,[n.game.playCount?(Object(a["j"])(),Object(a["e"])("div",z,[0===n.game.lastPlayAgo?(Object(a["j"])(),Object(a["e"])("span",D," played today ")):(Object(a["j"])(),Object(a["e"])("span",H,[Object(a["f"])("strong",null,Object(a["p"])(n.game.lastPlayAgo),1),J]))])):Object(a["d"])("",!0),Object(a["f"])("div",K,[Object(a["f"])("a",{class:Object(a["i"])(["name",{long:c.nameIsLong}]),href:n.game.uri,target:"_blank",rel:"nofollow noopener"},[Object(a["g"])(Object(a["p"])(c.nameMain)+" ",1),c.nameSecondary?(Object(a["j"])(),Object(a["e"])("span",$,[Q,Object(a["g"])(Object(a["p"])(c.nameSecondary),1)])):Object(a["d"])("",!0)],10,W),Object(a["n"])(e.$slots,"button",{},void 0,!0)]),n.game.playCount?(Object(a["j"])(),Object(a["e"])("div",X,[Object(a["f"])("div",null,[Object(a["f"])("strong",null,Object(a["p"])(c.gameCountThisYear),1),Z,ee]),Object(a["f"])("div",null,[Object(a["f"])("strong",null,Object(a["p"])(c.gameCountLastYear),1),te,ne]),Object(a["f"])("div",null,[Object(a["f"])("strong",null,Object(a["p"])(n.game.playCount),1),ae,re])])):(Object(a["j"])(),Object(a["e"])("div",le,oe))])],2)}n("1276");var se=(new Date).getFullYear(),ie=function(e,t){var n,a=e.split(/:/);return null!==(n=a[t])&&void 0!==n?n:null},be={name:"Game",props:{game:{required:!0,type:Object}},data:function(){return{}},computed:{nameMain:function(){return ie(this.game.name,0)},nameSecondary:function(){return ie(this.game.name,1)},nameIsLong:function(){return this.nameMain.length>25},classNames:function(){var e=[];return null===this.game.lastPlayAgo?e.push("last-played-never"):this.game.lastPlayAgo<=7?e.push("last-played-week"):this.game.lastPlayAgo<=30?e.push("last-played-month"):this.game.lastPlayAgo<=356&&e.push("last-played-year"),e},gameCountThisYear:function(){var e;return null!==(e=this.game.playsByYear[se])&&void 0!==e?e:"-"},gameCountLastYear:function(){var e;return null!==(e=this.game.playsByYear[se-1])&&void 0!==e?e:"-"}}},me=(n("643d"),n("6b0d")),fe=n.n(me);const de=fe()(be,[["render",ue],["__scopeId","data-v-b7e72d12"]]);var je=de,pe=[{name:"latest plays",sort:function(e,t){return null===e.lastPlayAgo&&null===t.lastPlayAgo?0:null===e.lastPlayAgo?1:null===t.lastPlayAgo||e.lastPlayAgo<=t.lastPlayAgo?-1:1}},{name:"most plays",sort:function(e,t){return null===e.playCount&&null===t.playCount?0:null===e.playCount?1:null===t.playCount||e.playCount>=t.playCount?-1:1}}],ye={name:"Board",components:{Game:je},props:{username:{type:String,required:!0}},data:function(){return{loaded:!1,collection:null,sortOptions:pe,sortBy:pe[0],randomLeastPlayed:null}},mounted:function(){var e=this;F.fetch(this.username).then((function(t){e.collection=t,e.reroll(),e.loaded=!0}))},methods:{pickLeastPlayed:function(){var e=0;this.collection.reduce((function(e,t){t.playCount<e&&(e=t.playCount)}),e);var t=this.collection.filter((function(t){return t.playCount===e}));this.randomLeastPlayed=t[Math.floor(Math.random()*t.length)]},reroll:function(){this.pickLeastPlayed()}},computed:{collectionSorted:function(){return this.collection.slice().sort(this.sortBy.sort)}}};n("c0cd");const Oe=fe()(ye,[["render",S],["__scopeId","data-v-12f14776"]]);var ge=Oe,he=null,ve=new URLSearchParams(window.location.search);ve.has("username")&&(he=ve.get("username"));var ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=new URL(window.location),n="username";e?t.searchParams.set(n,e):t.searchParams.delete(n),window.history.pushState({},"",t)},we={name:"App",components:{Board:ge},data:function(){var e;return{username:he,showForm:!he,submittedUsername:null!==(e=he)&&void 0!==e?e:null}},computed:{permalink:function(){return this.username?"https://spazzmarticus.github.io/VueBoardgamegeekBoard/?username=".concat(this.username):null}},methods:{reset:function(){this.showForm=!0,this.submittedUsername=null,ke()},submit:function(){this.showForm=!1,this.submittedUsername=this.username,ke(this.username)}}};n("b29f");const Pe=fe()(we,[["render",b]]);var Be=Pe;Object(a["b"])(Be).mount("#app")},"5c46":function(e,t,n){e.exports=n.p+"img/cycle.9ad5701b.svg"},"643d":function(e,t,n){"use strict";n("3f26")},"7e30":function(e,t,n){},b29f:function(e,t,n){"use strict";n("7e30")},c0cd:function(e,t,n){"use strict";n("1130")}});
//# sourceMappingURL=app.9a8bed78.js.map