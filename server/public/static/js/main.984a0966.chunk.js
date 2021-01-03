(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{120:function(e,t,a){e.exports=a(236)},131:function(e,t,a){},212:function(e,t,a){},219:function(e,t,a){},236:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),l=a(113),s=a(36),i=a(37);function u(){var e=Object(s.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n          transform: rotate(360deg);\n    }\n  }\n"]);return u=function(){return e},e}function p(){var e=Object(s.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return p=function(){return e},e}var E=i.a.div(p()),m=i.a.div(u()),d=function(e){return function(t){var a=t.isLoading,n=Object(l.a)(t,["isLoading"]);return a?r.a.createElement(E,null,r.a.createElement(m,null)):r.a.createElement(e,n)}},T=a(23),f=a(26),S=a(16),b=a(21),O=a(55),_=a(40);function y(e){return Object(_.last)(Object(O.a)(e.matchAll(/^(\[[^\]\[]+]\s*)*(.*)/g))[0])}function v(e){var t=e.match(/^(\[[^\]\[]+]\s*)*/g);if(0===t.length)return[];var a=t[0],n=Object(O.a)(a.matchAll(/\[([^\[\]]*)]/g));return Object(_.compact)(n.map((function(e){return e[1]})))}var h=a(69),A=a(264),P=a(265),C=a(266),g=a(267);function j(){var e=Object(s.a)(["\n  flex-grow: 1;\n"]);return j=function(){return e},e}var x=["pin","hidden"];function L(e){return x.includes(Object(_.lowerCase)(e))?null:r.a.createElement("span",{className:"badge badge-light"},e)}var w=function(e){var t=e.posts.filter((function(e){return!v(e.title).map(_.lowerCase).includes("hidden")})).sort((function(e){return v(e.title).map(_.lowerCase).includes("pin")?-1:0}));return r.a.createElement(A.a,null,r.a.createElement(P.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1},t.map((function(e){var t=e._id,a=e.title;return r.a.createElement(P.a,{item:!0,xs:12,md:6},r.a.createElement(U,null,r.a.createElement(b.b,{key:t,to:"/post/".concat(t)},r.a.createElement(C.a,{square:!0},r.a.createElement(g.a,null,r.a.createElement(h.a,{component:"h5",variant:"body2"},function(e){var t=v(e),a=y(e);return r.a.createElement(h.a,{color:"textPrimary"},t.map(L)," ",r.a.createElement("br",null)," ",a)}(a)))))))}))))},U=i.a.div(j()),R=a(108),D=a.n(R),k=["Frontend Developer at Faire","University of Waterloo Alumnus","Big Fan of Algorithms, Data Structures"],F=Object(f.b)((function(e){return{posts:e.post.posts}}))((function(e){var t=e.posts;return r.a.createElement(A.a,null,r.a.createElement(h.a,{className:"mt-5",align:"center",variant:"h3",color:"textPrimary",component:"h1"},"JUDE GAO"),r.a.createElement("p",{className:"text-center"},r.a.createElement("code",null,r.a.createElement(D.a,{strings:k,typeSpeed:60,backSpeed:20,loop:!0}))),r.a.createElement(w,{posts:t}),r.a.createElement("p",{className:"text-center text-uppercase font-weight-bold text-secondary mt-5"},r.a.createElement(b.b,{to:"/maintain",className:"nav-link",href:"#"},r.a.createElement(h.a,{color:"textSecondary"},"Manage Contents"))))}));function I(){var e=Object(s.a)(["\n    text-align: center;\n"]);return I=function(){return e},e}function H(){var e=Object(s.a)(["\n    border: 1px red solid;\n    width: 100%;\n"]);return H=function(){return e},e}var M=i.a.div(H()),N=i.a.p(I()),J=function(e){var t=e.message;return r.a.createElement(M,null,r.a.createElement(N,null,t))},W=(a(131),a(109)),B=a.n(W),G=a(268),q=a(269),z=a(270),K=a(271),Q=Object(f.b)((function(e,t){var a=t.match.params.postID;return{post:e.post.posts.find((function(e){return e._id===a}))}}))((function(e){var t=e.post;return Object(n.useEffect)((function(){window.MathJax.typeset()}),[t]),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{color:"primary",variant:"elevation",position:"sticky"},r.a.createElement(q.a,null,r.a.createElement(b.b,{to:"/"},r.a.createElement(z.a,null,r.a.createElement(K.a,{style:{color:"white"}}))),r.a.createElement(h.a,{variant:"body2",align:"center"},y(t.title)))),r.a.createElement(A.a,null,r.a.createElement("div",{className:"markdown-body mt-5"},r.a.createElement(B.a,{source:t.body})))):r.a.createElement(J,{message:"Please check the URL, since the post is not found in the database."})})),V=a(67),X=a(10),Y=a.n(X),Z=a(78),$=a(64),ee=a(14),te={FETCH_ALL_POSTS_START:"FETCH_ALL_POSTS_START",FETCH_ALL_POSTS_SUCCESS:"FETCH_ALL_POSTS_SUCCESS",FETCH_ALL_POSTS_FAILURE:"FETCH_ALL_POSTS_FAILURE",UPDATE_POST_START:"UPDATE_POST_START",UPDATE_POST_SUCCESS:"UPDATE_POST_SUCCESS",UPDATE_POST_FAILURE:"UPDATE_POST_FAILURE",CREATE_POST_START:"CREATE_POST_START",CREATE_POST_SUCCESS:"CREATE_POST_SUCCESS",CREATE_POST_FAILURE:"CREATE_POST_FAILURE",DELETE_POST_START:"DELETE_POST_START",DELETE_POST_SUCCESS:"DELETE_POST_SUCCESS",DELETE_POST_FAILURE:"DELETE_POST_FAILURE"},ae=function(e,t){return{type:te.UPDATE_POST_SUCCESS,payload:{postID:e,post:t}}},ne=a(110),re=(a(212),a(272)),ce=a(281),oe=a(280),le=a(273),se=a(237);a(42),a(213),a(216);var ie=Object(f.b)((function(e,t){var a=t.match.params.id;return{post:e.post.posts.find((function(e){return e._id===a})),id:a}}),(function(e){return{updatePost:function(t,a){return e(function(e,t){return{type:te.UPDATE_POST_START,payload:{postID:e,post:t}}}(t,a))},createPost:function(t,a){return e(function(e,t){return{type:te.CREATE_POST_START,payload:{title:e,body:t}}}(t,a))},deletePost:function(t){return e(function(e){return{type:te.DELETE_POST_START,payload:e}}(t))}}}))((function(e){var t=e.post,a=e.updatePost,c=e.createPost,o=e.deletePost,l=e.id,s=Object(n.useState)({title:"",body:""}),i=Object(V.a)(s,2),u=i[0],p=i[1];Object(n.useEffect)((function(){t&&p(t)}),[t]);var E=function(e){p(Object(ee.a)(Object(ee.a)({},u),{},{body:e}))},m=u.title,d=u.body,T=function(){var e=Object(Z.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l?a(l,u):c(m,d);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(A.a,{style:{display:"flex",marginTop:10,flexDirection:"column"}},r.a.createElement(re.a,{fullWidth:!0,variant:"outlined",style:{display:"flex",flexDirection:"row"}},r.a.createElement(ce.a,{htmlFor:"outlined-adornment-amount"},"Title"),r.a.createElement(oe.a,{id:"outlined-adornment-amount",value:m,onChange:function(e){var t=e.target,a=t.name,n=t.value;p(Object(ee.a)(Object(ee.a)({},u),{},Object($.a)({},a,n)))},labelWidth:40,name:"title",style:{flexGrow:1}}),r.a.createElement(le.a,{variant:"contained"},r.a.createElement(se.a,{onClick:T},l?"Update":"Create"),l?r.a.createElement(se.a,{color:"primary",onClick:Object(Z.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.confirm("Do you want to delete this post-page?")&&o(l);case 1:case"end":return e.stop()}}),e)})))},"Delete"):null)),r.a.createElement(P.a,{item:!0},r.a.createElement(ne.Controlled,{value:d,options:{mode:"markdown",lineNumbers:!0,theme:"idea",extraKeys:{Enter:"newlineAndIndentContinueMarkdownList"},lineWrapping:!0},name:"body",onBeforeChange:function(e,t,a){E(a)},onChange:function(e,t,a){E(a)}})))})),ue=a(279),pe=a(274),Ee=a(275),me=a(276),de=a(277),Te=function(e){var t=e.posts,a=e.open,n=e.close;return r.a.createElement(ue.a,{open:a,anchor:"left",onClick:n},r.a.createElement(A.a,{style:{padding:10}},r.a.createElement("div",{style:{display:"flex",flexFlow:"row-reverse"}},r.a.createElement(se.a,{size:"large",color:"primary"},"Close")),r.a.createElement(pe.a,null,r.a.createElement(b.b,{to:"/"},r.a.createElement(Ee.a,{button:!0},r.a.createElement(me.a,null,r.a.createElement(h.a,{color:"primary"},"Go to Home Page")))),r.a.createElement(b.b,{to:"/maintain/posts/create"},r.a.createElement(Ee.a,{button:!0},r.a.createElement(me.a,null,r.a.createElement(h.a,{color:"primary"},"New Document")))),r.a.createElement(de.a,null),t.map((function(e){var t=e._id,a=e.title;return r.a.createElement(b.b,{key:t,to:"/maintain/posts/edit/".concat(t)},r.a.createElement(Ee.a,{button:!0},r.a.createElement(me.a,null,r.a.createElement(h.a,{color:"textSecondary"},y(a)))))})))))},fe=a(115),Se=a(278),be=Object(T.d)(Object(f.b)((function(e){return{posts:e.post.posts}})),S.e)((function(e){var t=e.posts,a=Object(n.useState)(!1),c=Object(V.a)(a,2),o=c[0],l=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{color:"primary",position:"sticky"},r.a.createElement(q.a,null,r.a.createElement(z.a,{onClick:function(){return l(!0)}},r.a.createElement(Se.a,{style:{color:"white"}})),r.a.createElement(h.a,{variant:"body2",align:"center"},"Jude's Content Manager"))),r.a.createElement(Te,{posts:t,open:o,close:function(){return l(!1)}}),r.a.createElement("div",null,r.a.createElement(S.a,{path:"/maintain",exact:!0},r.a.createElement(A.a,{style:{marginTop:40}},r.a.createElement(fe.a,{style:{padding:40}},r.a.createElement(h.a,{align:"center",variant:"h4",color:"textPrimary",component:"h1",gutterBottom:!0},"Welcome to Jude's Content Manager"),r.a.createElement(h.a,{variant:"body1",color:"textSecondary"},"Click the top left icon to open up the menu, where you can"," ",r.a.createElement("strong",null,"create a post"),","," ",r.a.createElement("strong",null,"edit the existent posts"),", or even"," ",r.a.createElement("strong",null,"go back to the home page"),"!")))),r.a.createElement(S.a,{path:"/maintain/posts/create",component:ie}),r.a.createElement(S.a,{path:"/maintain/posts/edit/:id",component:ie})))})),Oe=Object(T.d)(Object(f.b)((function(e){return{isLoading:!e.post.errorMessage&&!1===e.post.synced,errorMessage:e.post.errorMessage}})),d)((function(e){var t=e.errorMessage;return t?r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("p",null,"App is not in a normal state. Please refresh."),r.a.createElement("p",null,"Jude Gao")):r.a.createElement("div",null,r.a.createElement(S.a,{path:"/",exact:!0,component:F}),r.a.createElement(S.a,{path:"/post/:postID",component:Q}),r.a.createElement(S.a,{path:"/maintain",component:be}))})),_e=(a(219),{posts:[],synced:!1,errorMessage:null}),ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te.FETCH_ALL_POSTS_SUCCESS:return Object(ee.a)(Object(ee.a)({},e),{},{posts:t.payload,synced:!0});case te.UPDATE_POST_START:return Object(ee.a)(Object(ee.a)({},e),{},{synced:!1});case te.UPDATE_POST_SUCCESS:return Object(ee.a)(Object(ee.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload.postID?t.payload.post:e})),synced:!0});case te.CREATE_POST_START:return Object(ee.a)(Object(ee.a)({},e),{},{synced:!1});case te.CREATE_POST_SUCCESS:return Object(ee.a)(Object(ee.a)({},e),{},{synced:!0,posts:[t.payload].concat(Object(O.a)(e.posts))});case te.DELETE_POST_START:return Object(ee.a)(Object(ee.a)({},e),{},{synced:!1});case te.DELETE_POST_SUCCESS:return Object(ee.a)(Object(ee.a)({},e),{},{synced:!0,posts:e.posts.filter((function(e){return e._id!==t.payload}))});case te.FETCH_ALL_POSTS_FAILURE:case te.UPDATE_POST_FAILURE:case te.CREATE_POST_FAILURE:case te.DELETE_POST_FAILURE:return Object(ee.a)(Object(ee.a)({},e),{},{errorMessage:t.payload});default:return e}},ve=Object(T.c)({post:ye}),he=a(111),Ae=a(112),Pe=a(20),Ce=a(56),ge=a.n(Ce),je=Y.a.mark(He),xe=Y.a.mark(Me),Le=Y.a.mark(Ne),we=Y.a.mark(Je),Ue=Y.a.mark(We),Re=Y.a.mark(Be),De=Y.a.mark(Ge),ke=Y.a.mark(qe),Fe="post",Ie=function(e){return"post/".concat(e)};function He(){var e,t;return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,ge.a.get("".concat("","/").concat(Fe));case 3:return e=a.sent,t=e.data,a.next=7,Object(Pe.b)((r=t.reverse(),{type:te.FETCH_ALL_POSTS_SUCCESS,payload:r}));case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(0),a.next=13,Object(Pe.b)((n=a.t0.message,{type:te.FETCH_ALL_POSTS_FAILURE,payload:n}));case 13:case"end":return a.stop()}var n,r}),je,null,[[0,9]])}function Me(e){var t,a,n,r,c;return Y.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,a=t.postID,n=t.post,o.prev=1,o.next=4,ge.a.post("".concat("","/").concat(Ie(a)),n);case 4:return r=o.sent,c=r.data,o.next=8,Object(Pe.b)(ae(a,c));case 8:o.next=14;break;case 10:return o.prev=10,o.t0=o.catch(1),o.next=14,Object(Pe.b)((l=o.t0.message,{type:te.UPDATE_POST_FAILURE,payload:l}));case 14:case"end":return o.stop()}var l}),xe,null,[[1,10]])}function Ne(e){var t,a,n,r,c;return Y.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,a=t.title,n=t.body,o.prev=1,o.next=4,ge.a.post("".concat("","/").concat(Fe),{title:a,body:n});case 4:return r=o.sent,c=r.data,o.next=8,Object(Pe.b)({type:te.CREATE_POST_SUCCESS,payload:c});case 8:o.next=14;break;case 10:return o.prev=10,o.t0=o.catch(1),o.next=14,Object(Pe.b)((l=o.t0.message,{type:te.CREATE_POST_FAILURE,payload:l}));case 14:case"end":return o.stop()}var l}),Le,null,[[1,10]])}function Je(e){var t;return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,ge.a.delete("".concat("","/").concat(Ie(t)));case 4:return a.next=6,Object(Pe.b)({type:te.DELETE_POST_SUCCESS,payload:t});case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(1),a.next=12,Object(Pe.b)((n=a.t0.message,{type:te.DELETE_POST_FAILURE,payload:n}));case 12:case"end":return a.stop()}var n}),we,null,[[1,8]])}function We(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Pe.c)(te.UPDATE_POST_START,Me);case 2:case"end":return e.stop()}}),Ue)}function Be(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Pe.c)(te.CREATE_POST_START,Ne);case 2:case"end":return e.stop()}}),Re)}function Ge(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Pe.c)(te.DELETE_POST_START,Je);case 2:case"end":return e.stop()}}),De)}function qe(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Pe.a)([He(),We(),Be(),Ge()]);case 2:case"end":return e.stop()}}),ke)}var ze=Y.a.mark(Ke);function Ke(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Pe.a)([qe()]);case 2:case"end":return e.stop()}}),ze)}var Qe=Object(Ae.a)(),Ve=Object(T.e)(ve,Object(T.a)(he.logger,Qe));Qe.run(Ke);var Xe=Ve;o.a.render(r.a.createElement(f.a,{store:Xe},r.a.createElement(b.a,null,r.a.createElement(Oe,null))),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.984a0966.chunk.js.map