(function(e){function t(t){for(var a,l,o=t[0],u=t[1],s=t[2],b=0,m=[];b<o.length;b++)l=o[b],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&m.push(r[l][0]),r[l]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);i&&i(t);while(m.length)m.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},c=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/VueBoardgamegeekBoard/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var i=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e70":function(e,t,n){"use strict";n("dd93")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={key:0},c=Object(a["e"])(" BoardGameGeek - Username"),l=Object(a["f"])("br",null,null,-1),o=Object(a["f"])("small",null,[Object(a["e"])(" Enter your BGG username and submit. "),Object(a["f"])("br")],-1),u={key:1,class:"flex"};function s(e,t,n,s,i,b){var m=Object(a["l"])("Board");return Object(a["g"])(),Object(a["c"])(a["a"],null,[i.showForm?(Object(a["g"])(),Object(a["c"])("div",r,[Object(a["f"])("label",null,[c,l,Object(a["p"])(Object(a["f"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.username=e}),onKeyup:t[2]||(t[2]=Object(a["q"])((function(){return b.submit&&b.submit.apply(b,arguments)}),["enter"]))},null,544),[[a["o"],i.username]]),o]),Object(a["f"])("label",null,[Object(a["f"])("button",{type:"button",onClick:t[3]||(t[3]=function(){return b.submit&&b.submit.apply(b,arguments)}),disabled:!i.username}," Submit ",8,["disabled"])])])):(Object(a["g"])(),Object(a["c"])("div",u,[b.permalink?(Object(a["g"])(),Object(a["c"])("a",{key:0,class:"button",href:b.permalink},"Permalink",8,["href"])):Object(a["d"])("",!0),Object(a["f"])("button",{type:"button",onClick:t[4]||(t[4]=function(){return b.reset&&b.reset.apply(b,arguments)})},"Reset")])),i.submittedUsername?(Object(a["g"])(),Object(a["c"])(m,{key:2,username:i.submittedUsername},null,8,["username"])):Object(a["d"])("",!0)],64)}n("2b3d"),n("d3b7"),n("3ca3"),n("ddb0"),n("841c"),n("ac1f"),n("b0c0");var i=n("5c46"),b=n.n(i),m=Object(a["r"])("data-v-88c28440");Object(a["i"])("data-v-88c28440");var d={key:0,class:"loading"},f=Object(a["e"])(" Loading board for "),p=Object(a["e"])("... "),g={key:1,class:"board"},O={key:0},j={key:0,class:"random"},y=Object(a["f"])("img",{class:"icon",src:b.a},null,-1),h={class:"center"},v={class:"shelf"},P={key:1},k=Object(a["f"])("h1",null,"Whoops!",-1),w=Object(a["f"])("p",null,"You don't have any games in your collection.",-1);Object(a["h"])();var x=m((function(e,t,n,r,c,l){var o=Object(a["l"])("Game");return Object(a["g"])(),Object(a["c"])("div",null,[c.loaded?Object(a["d"])("",!0):(Object(a["g"])(),Object(a["c"])("div",d,[f,Object(a["f"])("i",null,Object(a["m"])(n.username),1),p])),c.loaded?(Object(a["g"])(),Object(a["c"])("div",g,[c.collection.length>0?(Object(a["g"])(),Object(a["c"])("div",O,[c.randomLeastPlayed?(Object(a["g"])(),Object(a["c"])("div",j,[Object(a["f"])(o,{class:"game",game:c.randomLeastPlayed},{button:m((function(){return[Object(a["f"])("button",{onClick:t[1]||(t[1]=function(){return l.reroll&&l.reroll.apply(l,arguments)})},[y])]})),_:1},8,["game"])])):Object(a["d"])("",!0),Object(a["f"])("div",h,[Object(a["p"])(Object(a["f"])("select",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.sortBy=e})},[(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["j"])(c.sortOptions,(function(e,t){return Object(a["g"])(),Object(a["c"])("option",{key:t,value:e},Object(a["m"])(e.name),9,["value"])})),128))],512),[[a["n"],c.sortBy]])]),Object(a["f"])("div",v,[(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["j"])(l.collectionSorted,(function(e){return Object(a["g"])(),Object(a["c"])(o,{class:"game",key:e.id,game:e},null,8,["game"])})),128))])])):(Object(a["g"])(),Object(a["c"])("div",P,[k,w]))])):Object(a["d"])("",!0)])})),A=(n("13d5"),n("4de4"),n("fb6a"),n("3835")),B=n("1da1"),C=(n("96cf"),n("159b"),n("a630"),n("4fad"),n("07ac"),n("5a0c")),S=n.n(C),_=100,L="https://www.boardgamegeek.com/xmlapi2/",T="https://boardgamegeek.com/boardgame/",U=S()(),E={xml:function(e){var t=arguments,n=this;return Object(B["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t.length>1&&void 0!==t[1]?t[1]:null,r||(r=_),a.abrupt("return",fetch(e).then((function(t){if(200===t.status)return t.text();if(202===t.status){var a=new Promise((function(t){setTimeout((function(){t(n.xml(e,r))}),r)}));return r*=2,a}})).then((function(e){return e instanceof Document?e:(new window.DOMParser).parseFromString(e,"text/xml")})));case 3:case"end":return a.stop()}}),a)})))()},collection:function(e){return this.xml("".concat(L,"collection?username=").concat(e,"&own=1&subtype=boardgame&excludesubtype=boardgameexpansion")).then((function(e){var t={};return Array.from(e.getElementsByTagName("item")).forEach((function(e){var n=e.getAttribute("objectid"),a=null;e.getElementsByTagName("thumbnail")[0]&&(a=e.getElementsByTagName("thumbnail")[0].innerHTML),t[n]={id:n,name:e.getElementsByTagName("name")[0].innerHTML,uri:"".concat(T).concat(n),thumbnail:a,playCount:0,lastPlay:null,lastPlayAgo:null,plays:[]}})),t}))},plays:function(e){return this.xml("".concat(L,"plays?username=").concat(e,"&own=1")).then((function(e){var t={};return Array.from(e.getElementsByTagName("play")).forEach((function(e){var n=e.getElementsByTagName("item")[0],a=n.getAttribute("objectid");t[a]||(t[a]=[]),t[a].push({date:e.getAttribute("date")})})),t}))},fetch:function(e){return Promise.all([this.collection(e),this.plays(e)]).then((function(e){var t,n,a=Object(A["a"])(e,2);t=a[0],n=a[1];for(var r=0,c=Object.entries(n);r<c.length;r++){var l=Object(A["a"])(c[r],2),o=l[0],u=l[1],s=t[o];s&&(s.playCount=u.length,s.lastPlay=S()(u[0].date),s.lastPlayAgo=U.diff(s.lastPlay,"day"),s.plays=u)}return Object.values(t)}))}},M=Object(a["r"])("data-v-d49397fa");Object(a["i"])("data-v-d49397fa");var N={class:"thumbnail-container"},G={class:"content-container"},F={class:"flex"},R={key:0},V=Object(a["e"])(" plays logged,"),q=Object(a["f"])("br",null,null,-1),z={key:0},D={key:1},H={key:1},I=Object(a["f"])("small",null," no plays logged ",-1);Object(a["h"])();var J=M((function(e,t,n,r,c,l){return Object(a["g"])(),Object(a["c"])("div",{class:["game",l.classNames]},[Object(a["f"])("div",N,[Object(a["f"])("img",{src:n.game.thumbnail,class:"thumbnail"},null,8,["src"])]),Object(a["f"])("div",G,[Object(a["f"])("div",F,[Object(a["f"])("a",{class:"name",href:n.game.uri,target:"_blank",rel:"nofollow noopener"},Object(a["m"])(n.game.name),9,["href"]),Object(a["k"])(e.$slots,"button",{},void 0,!0)]),n.game.playCount?(Object(a["g"])(),Object(a["c"])("div",R,[Object(a["f"])("small",null,[Object(a["f"])("strong",null,Object(a["m"])(n.game.playCount),1),V,q,0===n.game.lastPlayAgo?(Object(a["g"])(),Object(a["c"])("span",z," played today ")):(Object(a["g"])(),Object(a["c"])("span",D," last "+Object(a["m"])(n.game.lastPlayAgo)+" days ago ",1))])])):(Object(a["g"])(),Object(a["c"])("div",H,[I]))])],2)})),K={name:"Game",props:{game:{required:!0,type:Object}},data:function(){return{}},computed:{classNames:function(){var e=[];return null===this.game.lastPlayAgo&&e.push("last-played-never"),this.game.lastPlayAgo<=7?e.push("last-played-week"):this.game.lastPlayAgo<=30?e.push("last-played-month"):this.game.lastPlayAgo<=356&&e.push("last-played-year"),e}}};n("ebbb");K.render=J,K.__scopeId="data-v-d49397fa";var W=K,Y=[{name:"latest plays",sort:function(e,t){return null===e.lastPlayAgo&&null===t.lastPlayAgo?0:null===e.lastPlayAgo?1:null===t.lastPlayAgo||e.lastPlayAgo<=t.lastPlayAgo?-1:1}},{name:"most plays",sort:function(e,t){return null===e.playCount&&null===t.playCount?0:null===e.playCount?1:null===t.playCount||e.playCount>=t.playCount?-1:1}}],$={name:"Board",components:{Game:W},props:{username:{type:String,required:!0}},data:function(){return{loaded:!1,collection:null,sortOptions:Y,sortBy:Y[0],randomLeastPlayed:null}},mounted:function(){var e=this;E.fetch(this.username).then((function(t){e.collection=t,e.reroll(),e.loaded=!0}))},methods:{pickLeastPlayed:function(){var e=0;this.collection.reduce((function(e,t){t.playCount<e&&(e=t.playCount)}),e);var t=this.collection.filter((function(t){return t.playCount===e}));this.randomLeastPlayed=t[Math.floor(Math.random()*t.length)]},reroll:function(){this.pickLeastPlayed()}},computed:{collectionSorted:function(){return this.collection.slice().sort(this.sortBy.sort)}}};n("0e70");$.render=x,$.__scopeId="data-v-88c28440";var Q=$,X=null,Z=new URLSearchParams(window.location.search);Z.has("username")&&(X=Z.get("username"));var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=new URL(window.location),n="username";e?t.searchParams.set(n,e):t.searchParams.delete(n),window.history.pushState({},"",t)},te={name:"App",components:{Board:Q},data:function(){var e;return{username:X,showForm:!X,submittedUsername:null!==(e=X)&&void 0!==e?e:null}},computed:{permalink:function(){return this.username?"https://spazzmarticus.github.io/VueBoardgamegeekBoard/?username=".concat(this.username):null}},methods:{reset:function(){this.showForm=!0,this.submittedUsername=null,ee()},submit:function(){this.showForm=!1,this.submittedUsername=this.username,ee(this.username)}}};n("f0b4");te.render=s;var ne=te;Object(a["b"])(ne).mount("#app")},"5c46":function(e,t,n){e.exports=n.p+"img/cycle.9ad5701b.svg"},6387:function(e,t,n){},"6cf0":function(e,t,n){},dd93:function(e,t,n){},ebbb:function(e,t,n){"use strict";n("6387")},f0b4:function(e,t,n){"use strict";n("6cf0")}});
//# sourceMappingURL=app.1a2acf83.js.map