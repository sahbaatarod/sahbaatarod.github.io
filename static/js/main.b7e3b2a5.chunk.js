(this.webpackJsonpname=this.webpackJsonpname||[]).push([[0],{130:function(e,t,a){e.exports={chat:"Home_chat__1-NLA"}},153:function(e,t,a){e.exports={roller:"Loader_roller__1VTvX",divAfter:"Loader_divAfter__1EYmQ"}},202:function(e,t,a){e.exports={hover:"Card_hover__2wKNI"}},213:function(e,t,a){e.exports=a(331)},228:function(e,t,a){},230:function(e,t,a){e.exports=a.p+"static/media/logo.8a7fc319.svg"},314:function(e,t,a){},315:function(e,t,a){},316:function(e,t,a){},331:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(33),c=a.n(o),l=a(31),i=a(26),s=a(132),u=s.a.initializeApp({apiKey:"AIzaSyDCkByR9z676xctbnJux6f7yl7wIpvGYCc",authDomain:"fir-friendlychat-76733.firebaseapp.com",databaseURL:"https://fir-friendlychat-76733-default-rtdb.firebaseio.com",projectId:"fir-friendlychat-76733",storageBucket:"fir-friendlychat-76733.appspot.com",messagingSenderId:"215750187141",appId:"1:215750187141:web:1182849f28aba25eb031ec",measurementId:"G-HQBWYF90RM"}),d=(u.firestore(),s.a.auth()),m=s.a.database(),f=a(50),p=a(189),g=a(53),h=a(58),b=a.n(h);function y(e){var t=e.right,a=e.left,n=e.type,o=e.center,c=e.mobile,l=e.desktop,s=e.bgColor,u=e.bottom,d=r.a.useState(!1),m=Object(i.a)(d,2),f=m[0],p=m[1],g=function(){"undefined"!==typeof window&&(window.pageYOffset>120&&(f||p(!0)),window.pageYOffset<120&&p(!1))};switch(r.a.useEffect((function(){return"undefined"!==typeof window&&window.addEventListener("scroll",g),function(){"undefined"!==typeof window&&window.removeEventListener("scroll",g)}}),[]),n){case"two":return r.a.createElement("div",{className:f?"".concat(b.a.navbar," ").concat(b.a.navbarSticky):"".concat(b.a.navbar),style:{background:s,boxShadow:"0 0 10px #ccc"}},r.a.createElement("div",{className:"d-flex justify-content-between align-items-center p-4"},r.a.createElement("div",null,a),r.a.createElement("div",null,t)),u);case"three":return r.a.createElement("div",{className:f?"".concat(b.a.navbar," ").concat(b.a.navbarSticky):"".concat(b.a.navbar),style:{background:s,boxShadow:"0 0 10px #ccc"}},r.a.createElement("div",{className:"d-flex justify-content-between p-4"},r.a.createElement("div",null,a),r.a.createElement("div",null,o),r.a.createElement("div",null,t)),u);case"responsive":return r.a.createElement("div",{className:f?"".concat(b.a.navbar," ").concat(b.a.navbarSticky):"".concat(b.a.navbar),style:{background:s,boxShadow:"0 0 10px #ccc"}},r.a.createElement("div",{className:"p-4"},r.a.createElement("span",{className:b.a.mobile},c),r.a.createElement("span",{className:b.a.desktop},l)));default:return r.a.createElement("div",null,"Nothin")}}var E=a(107),v=a(209),x=a(153),w=a.n(x);function k(e){var t=e.color,a=e.style,n=Object(v.a)(Array(8)).map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement("div",{className:w.a.divAfter,style:{background:t}}))}));return r.a.createElement("div",{className:w.a.roller,style:Object(E.a)({},a)},n)}var U=Object(f.b)((function(e){return{loading:e.loading}}),(function(e){return{}}))((function(e){var t=e.background?e.background:"white";return r.a.createElement("div",{style:{background:t,zIndex:1e5,width:"100%",height:"100%",position:"fixed",top:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",opacity:e.loading?"1":"0",transition:"all .3s",visibility:e.loading?"visible":"hidden"}},r.a.createElement(k,null))})),O=a(337),C=a(340),j=a(339),S=a(68);a(225),a(226),a(227),a(228);var N=Object(l.g)((function(e){var t=e.title,o=e.children,c=e.history;r.a.useEffect((function(){console.log("User changed ")}),[d.currentUser]);var l=r.a.createElement(O.a,null,r.a.createElement(O.a.Item,null,r.a.createElement(g.b,{to:"/profile"},"Edit Profile")),r.a.createElement(O.a.Item,null,r.a.createElement(g.b,{to:"/login",onClick:function(){return d.signOut()}},"Logout")));return r.a.createElement(n.Fragment,null,r.a.createElement(p.a,null,r.a.createElement("title",null,t," | ","Firebase Chat App")),r.a.createElement(y,{"data-testid":"header",type:"two",bgColor:"white",left:r.a.createElement(g.b,{style:{color:"inherit",textDecoration:"inherit"},to:"/"},r.a.createElement("div",{title:"Firebase Chat",style:{display:"flex",alignItems:"center"}},r.a.createElement("div",null,r.a.createElement("img",{src:a(230),style:{width:"24px"}})),r.a.createElement("h5",{style:{margin:"0 0 0 10px"}},"Firebase Chat"))),right:d.currentUser?d.currentUser.photoURL?r.a.createElement(C.a,{trigger:["click"],overlay:l,placement:"bottomRight"},r.a.createElement(j.a,{src:d.currentUser.photoURL,size:"large",style:{color:"#f56a00",backgroundColor:"#fde3cf",cursor:"pointer"}})):r.a.createElement(C.a,{trigger:["click"],overlay:l,placement:"bottomRight"},r.a.createElement(j.a,{style:{color:"#f56a00",backgroundColor:"#fde3cf",cursor:"pointer"}},d.currentUser.displayName)):r.a.createElement(S.a,{title:"Login",onClick:function(){return c.push("/login")}},"Login")}),r.a.createElement(U,{background:"rgba(0,0,0,.125)"}),r.a.createElement("div",{style:{paddingTop:"6em"}},o))}));var I=function(e){var t=e.setShow;return r.a.createElement("div",{onClick:function(){t(!0)},title:"Start a Private Chat",style:{position:"fixed",bottom:"40px",right:"40px",background:"#6e90d4",borderRadius:"50%",padding:".5em 1em",boxShadow:"0 0 10px #6e90d4",fontSize:"20px",color:"white",cursor:"pointer"}},"+")};var _=function(){return r.a.createElement("div",{style:{margin:".5em",background:"#f4f4f4",border:"1px solid #ccc",display:"flex",justifyContent:"center",alignItems:"center",height:"130px"}},r.a.createElement("p",{style:{color:"grey"}},"Ads by Google"))},L=a(200),A=a.n(L);var R=function(e){return r.a.createElement(A.a,{onCancel:function(){return e.setShow(!1)},onOk:function(){return e.setShow(!0)},visible:e.show,footer:!!e.footer&&[e.footer],maskClosable:!!e.closeOnMask,centered:!!e.centered,closable:!!e.showCloseIcon,closeIcon:e.closeIcon?e.closeIcon:void 0,keyboard:!!e.closeOnMask,maskStyle:{background:e.overlayColor},width:e.width?e.width:520,title:e.title?e.title:void 0},e.children)},P=a(130),T=a.n(P);var D=Object(f.b)((function(e){return{name:e.name}}),(function(e){return{changeLoad:function(){return e({type:"CHANGE_LOAD"})}}}))(Object(l.g)((function(e){var t=e.history,a=(e.changeLoad,r.a.useState("")),n=Object(i.a)(a,2),o=n[0],c=n[1],l=r.a.useState(!1),s=Object(i.a)(l,2),u=s[0],f=s[1],p=r.a.useState(!0),g=Object(i.a)(p,2),h=(g[0],g[1]),b=r.a.useState([]),y=Object(i.a)(b,2),E=y[0],v=y[1],x=r.a.useState([]),w=Object(i.a)(x,2),k=w[0],U=w[1];return r.a.useEffect((function(){m.ref("users").on("value",(function(e){var t=[];e.forEach((function(e){t.push(e.toJSON())})),v(t)})),m.ref("groupChat").on("value",(function(e){var t=[];e.forEach((function(e){t.push(e.toJSON())})),console.log(t);var a=t.length-1;U(t[a])})),d.currentUser&&m.ref("latestMessages/".concat(d.currentUser.uid)).on("value",(function(e){var t=[];e.forEach((function(e){t.push(e.toJSON())})),c(t),h(!1)}))}),[]),r.a.createElement(N,{title:"Chat"},r.a.createElement(_,null),r.a.createElement(R,{title:"User to Chat with",show:u,setShow:f,showCloseIcon:!0,closeOnMask:!0,centered:!0,overlayColor:"rgba(0,0,0,.2)"},r.a.createElement("div",{style:{height:"400px",overflowY:"scroll"}},E.length>0&&E.map((function(e){if(d.currentUser&&"Anonymous User"!==e.fullname&&e.fullname!==d.currentUser.displayName)return r.a.createElement("div",{onClick:function(){t.push("/chat?id=".concat(e.uid))},className:T.a.chat,style:{display:"flex",marginTop:"1em",borderBottom:"1px solid #ccc",padding:"1em 1em",cursor:"pointer"}},r.a.createElement(j.a,{src:e.profileImgUrl?e.profileImgUrl:"",size:"large",style:{color:"#f56a00",backgroundColor:"#fde3cf"}},e.fullname),r.a.createElement("h5",{style:{textAlign:"left",margin:"0",marginLeft:"1em"}},e.fullname))})))),r.a.createElement("div",{onClick:function(){t.push("/groupchat")},className:T.a.chat,style:{display:"flex",borderBottom:"1px solid #ccc",padding:"1em 1em",cursor:"pointer"}},r.a.createElement(j.a,{src:"https://geo-media.beatport.com/image_size/500x500/a966d7ac-ca64-4d45-bb9c-f1cb98fba122.jpg",size:"large",style:{color:"#f56a00",backgroundColor:"#fde3cf"}}),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",marginLeft:"1em"}},r.a.createElement("h5",{style:{textAlign:"left",margin:"0"}},"Group Chat"),r.a.createElement("div",{style:{textAlign:"left"}},k&&k.message))),o.length>0&&o.map((function(e){var a=e.senderId===d.currentUser.uid?e.recieverId:e.senderId,n=E.find((function(e){return e.uid===a}));return r.a.createElement("div",{onClick:function(){return t.push("chat?id=".concat(n.uid))},className:T.a.chat,style:{display:"flex",borderBottom:"1px solid #ccc",padding:"1em 1em",cursor:"pointer"}},n.profileImgUrl?r.a.createElement(j.a,{src:n.profileImgUrl,size:"large",style:{color:"#f56a00",backgroundColor:"#fde3cf"}}):r.a.createElement(j.a,{src:n.profileImgUrl,size:"large",style:{color:"#f56a00",backgroundColor:"#fde3cf"}},n.fullname),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",marginLeft:"1em"}},r.a.createElement("h5",{style:{textAlign:"left",margin:"0"}},n.fullname),r.a.createElement("div",{style:{textAlign:"left"}},e.text)))})),r.a.createElement(I,{setShow:f}))})));var B=function(){return r.a.createElement(N,{title:"Error"},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",width:"100%",height:"100%",marginTop:"3em"}},r.a.createElement("div",null,"Page Not Found",r.a.createElement(g.b,{to:"/"},"Homepage"))))},z=a(52),H=a.n(z),G=a(77),M=a(202),F=a.n(M);function J(e){var t=e.borderRadius,a=e.boxShadow,n=e.children,o=e.hoverAnim,c=e.width;return r.a.createElement("div",{className:o?F.a.hover:"",style:{borderRadius:t,background:"white",border:"none",padding:"2em",margin:"1em",boxShadow:a,width:c}},n)}var Y=a(338),K=a(56),V=a.n(K),W=a(70),Q=a.n(W),X=a(208),q=(a(314),function(e,t,a,n){X.a.success({placement:e,duration:4,message:t,icon:a,style:n})}),Z=(a(315),function(e,t,a,n){X.a.success({placement:e,duration:4,message:t,icon:a,style:n})});var $=Object(f.b)((function(e){return{loading:e.loading}}),(function(e){return{changeLoad:function(){return e({type:"CHANGE_LOAD"})}}}))(Object(l.g)((function(e){var t=e.changeLoad,a=e.history,n=r.a.useState(""),o=Object(i.a)(n,2),c=o[0],l=o[1],s=r.a.useState(""),u=Object(i.a)(s,2),f=u[0],p=u[1],g=r.a.useState(!1),h=Object(i.a)(g,2),b=h[0],y=h[1];return r.a.useEffect((function(){d.currentUser&&a.push("/")}),[]),r.a.createElement(N,{title:b?"Sign Up":"Login"},r.a.createElement(_,null),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginTop:"2em"}},r.a.createElement(J,{width:"290px",borderRadius:"8px",boxShadow:"0 0 10px #dedede"},r.a.createElement("h4",{style:{textAlign:"center",paddingBottom:"1em"}},b?"Sign Up":"Login"),r.a.createElement(Y.a,{value:c,onChange:function(e){l(e.target.value)},type:"email",placeholder:"Email"}),r.a.createElement(Y.a,{style:{marginTop:".7em"},value:f,type:"password",onChange:function(e){p(e.target.value)},placeholder:"Password"}),r.a.createElement("div",{style:{marginTop:".7em",display:"flex",flexDirection:"column"}},b?r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{onClick:function(){t(),c.length&&f.length?d.createUserWithEmailAndPassword(c,f).then(Object(G.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.currentUser.updateEmail(c);case 2:return e.next=4,d.currentUser.updatePassword(f);case 4:return e.next=6,d.currentUser.updateProfile({displayName:"User",photoURL:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"}).then((function(){m.ref("users/".concat(d.currentUser.uid)).set({fullname:"User",profileImgUrl:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",uid:d.currentUser.uid})})).then((function(){t()}));case 6:case"end":return e.stop()}}),e)})))).catch((function(e){t(),Z("topRight",e.message,r.a.createElement(V.a,{style:{color:"#ff4141"}}))})):(t(),Z("topRight","Please fill in email and password .",r.a.createElement(V.a,{style:{color:"#ff4141"}})))},type:"primary"},"Sign Up")," ",r.a.createElement(S.a,{onClick:function(){return y(!1)},style:{marginTop:".7em"},type:"link"},"Back to Login")):r.a.createElement(S.a,{onClick:function(){c.length<1||f.length<1?Z("topRight","Please Enter Both Email and Password .",r.a.createElement(V.a,{style:{color:"#ff4141"}})):(t(),d.signInWithEmailAndPassword(c,f).then((function(){t(),q("topRight","Logged In !",r.a.createElement(Q.a,{style:{color:"#1cd777"}}))})).catch((function(e){t(),Z("topRight",e.message,r.a.createElement(V.a,{style:{color:"#ff4141"}}))})))},type:"primary"},"Login"),b?null:r.a.createElement(S.a,{style:{marginTop:".7em"},onClick:function(){return y(!0)},type:"primary"},"Sign Up"),r.a.createElement(S.a,{onClick:function(){t(),d.signInAnonymously().then(Object(G.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),console.log(d.currentUser.uid),e.next=4,d.currentUser.updateProfile({displayName:"User"});case 4:m.ref("users/".concat(d.currentUser.uid)).set({fullname:"Anonymous User",profileImgUrl:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",uid:d.currentUser.uid}),q("topRight","Logged In !",r.a.createElement(Q.a,{style:{color:"#1cd777"}}));case 6:case"end":return e.stop()}}),e)})))).catch((function(e){t(),Z("topRight",e.message,r.a.createElement(V.a,{style:{color:"#ff4141"}}))}))},style:{marginTop:".7em"},type:"link"},"Sign up Anonymously")))))}))),ee=a(336),te=a(75),ae=a(342);var ne=Object(f.b)((function(e){return{}}),(function(e){return{changeLoad:function(){return e({type:"CHANGE_LOAD"})}}}))(Object(l.g)((function(e){var t=e.changeLoad,a=e.history,n=r.a.useState(""),o=Object(i.a)(n,2),c=o[0],l=o[1],s=r.a.useState(""),f=Object(i.a)(s,2),p=f[0],g=f[1],h=r.a.useState(""),b=Object(i.a)(h,2),y=b[0],E=b[1],v=r.a.useState(!1),x=Object(i.a)(v,2),w=x[0],k=x[1],U=r.a.useState(""),O=Object(i.a)(U,2),C=O[0],j=O[1],I=r.a.useState(""),L=Object(i.a)(I,2),A=(L[0],L[1]),R=r.a.useState(""),P=Object(i.a)(R,2),T=P[0],D=P[1],B=u.storage().ref("images/".concat(T.name)),z=function(e){return k(!1),j(e)},M=r.a.createElement("div",null,w?r.a.createElement(te.a,null):r.a.createElement(ae.a,null),r.a.createElement("div",{style:{marginTop:8}},"Upload")),F=function(){var e=Object(G.a)(H.a.mark((function e(){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(y.length<1&&p.length<1&&C.length<1&&c.length<1)){e.next=4;break}Z("topRight","Please fill in Inputs .",r.a.createElement(V.a,{style:{color:"#ff4141"}})),e.next=12;break;case 4:if(t(),!T){e.next=10;break}return e.next=8,B.put(T).then(Object(G.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.getDownloadURL("images/".concat(T.name)).then((function(e){var n=d.currentUser;m.ref("users/".concat(n.uid)).set({fullname:y.length?y:n.displayName,uid:n.uid,profileImgUrl:e||"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"}).then(Object(G.a)(H.a.mark((function t(){return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c.length){t.next=3;break}return t.next=3,n.updateEmail(c);case 3:if(!p.length){t.next=6;break}return t.next=6,n.updatePassword(p);case 6:if(!y.length){t.next=9;break}return t.next=9,n.updateProfile({displayName:y});case 9:if(!e){t.next=14;break}return t.next=12,n.updateProfile({photoURL:e});case 12:t.next=16;break;case 14:return t.next=16,n.updateProfile({photoURL:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"});case 16:case"end":return t.stop()}}),t)})))).then((function(){t(),l(""),E(""),j(""),A(""),g(""),q("topRight","Profile Updated Successfully !",r.a.createElement(Q.a,{style:{color:"#1cd777"}})),a.push("/")})).catch((function(e){t(),l(""),j(""),A(""),E(""),g(""),Z("topRight",e.message,r.a.createElement(V.a,{style:{color:"#ff4141"}}))}))}));case 2:case"end":return e.stop()}}),e)})))).catch((function(e){alert(e.message)}));case 8:e.next=12;break;case 10:n=d.currentUser,m.ref("users/".concat(n.uid)).set({fullname:y.length?y:n.displayName,uid:n.uid,profileImgUrl:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"}).then(Object(G.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.length){e.next=3;break}return e.next=3,n.updateEmail(c);case 3:if(!p.length){e.next=6;break}return e.next=6,n.updatePassword(p);case 6:if(!y.length){e.next=9;break}return e.next=9,n.updateProfile({displayName:y,photoURL:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"});case 9:case"end":return e.stop()}}),e)})))).then((function(){t(),l(""),E(""),g(""),j(""),A(""),q("topRight","Profile Updated Successfully !",r.a.createElement(Q.a,{style:{color:"#1cd777"}})),a.push("/")})).catch((function(e){t(),l(""),E(""),g(""),j(""),A(""),Z("topRight",e.message,r.a.createElement(V.a,{style:{color:"#ff4141"}}))}));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(N,{title:"Profile"},r.a.createElement(_,null),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginTop:"2em"}},r.a.createElement(J,{width:"290px",borderRadius:"8px",boxShadow:"0 0 10px #dedede"},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(S.a,{onClick:function(){return a.goBack()}},"<"),r.a.createElement("h4",{style:{textAlign:"center",paddingBottom:"1em"}},"Edit your Profile")),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingBottom:"1em"}},r.a.createElement("div",null,r.a.createElement(ee.a,{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"https://jsonplaceholder.typicode.com/posts/",beforeUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type;t||alert("You can only upload JPG/PNG file!");var a=e.size/1024/1024<2;return a||alert("Image must smaller than 2MB!"),t&&a},onChange:function(e){if("uploading"===e.file.status)return k(!0);"done"===e.file.status&&(D(e.file.originFileObj),function(e,t){var a=new FileReader;a.addEventListener("load",(function(){return t(a.result)})),a.readAsDataURL(e)}(e.file.originFileObj,(function(e){return z(e)})))}},C?r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement("img",{src:C,alt:"avatar",style:{width:"100%",height:"100%"}})):M))),r.a.createElement(Y.a,{value:y,placeholder:d.currentUser.displayName,onChange:function(e){E(e.target.value)},type:"text"}),r.a.createElement(Y.a,{style:{marginTop:".7em"},value:c,placeholder:d.currentUser.email,onChange:function(e){l(e.target.value)},type:"email"}),r.a.createElement(Y.a,{style:{marginTop:".7em"},value:p,type:"password",onChange:function(e){g(e.target.value)},placeholder:"Password"}),r.a.createElement("div",{style:{marginTop:".7em",display:"flex"}},r.a.createElement(S.a,{style:{width:"100%"},onClick:F,type:"primary"},"Update Profile")))))})));a(316);var re=Object(f.b)((function(e){return{}}),(function(e){return{changeLoad:function(){return e({type:"CHANGE_LOAD"})}}}))((function(e){e.changeLoad;var t=r.a.useState(""),a=Object(i.a)(t,2),n=a[0],o=a[1],c=r.a.useState(""),l=Object(i.a)(c,2),s=l[0],u=l[1],f=r.a.useState(!0),p=Object(i.a)(f,2),g=p[0],h=p[1],b=r.a.useRef(null),y=r.a.useRef(null);r.a.useEffect((function(){m.ref("groupChat").orderByChild("timeStamp").on("value",(function(e){var t=[];e.forEach((function(e){t.push(e.toJSON())})),u(t),h(!1)}))}),[]),r.a.useEffect((function(){b.current.scrollIntoView({behavior:"smooth"}),y.current.focus()}),[g]);var E=function(){m.ref("groupChat").push({sender:d.currentUser.displayName||"Anonymous",uid:d.currentUser.uid,profileImgUrl:d.currentUser.photoURL?d.currentUser.photoURL:"",message:n,timeStamp:Date()}).then((function(){o(""),setTimeout((function(){b.current.scrollIntoView({behavior:"smooth"})}),100),y.current.focus()})).catch((function(e){console.log(e.message),o("")}))};return r.a.createElement(N,{title:"Groupchat"},r.a.createElement(_,null),s.length<1&&r.a.createElement("h5",{style:{textAlign:"center",marginTop:"3em"}},"No Messages !"),r.a.createElement("div",{className:"msgs"},s.length>0&&s.map((function(e){var t=e.sender,a=e.message,n=e.profileImgUrl,o=e.uid;return r.a.createElement("div",{className:"msg ".concat(o===d.currentUser.uid?"sent":"received")},r.a.createElement("div",null,n?r.a.createElement("img",{className:"img",src:n,alt:""}):r.a.createElement(j.a,{size:"large",style:{color:"#f56a00",backgroundColor:"#fde3cf"}},t)),r.a.createElement("div",{style:{marginLeft:"10px",paddingRight:"10px"}},r.a.createElement("div",{className:"sender"},t),r.a.createElement("p",{className:"text",style:{margin:"0"}},a)))})),r.a.createElement("div",{ref:b})),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",position:"fixed",bottom:"0",width:"100%",background:"white",borderTop:"1px solid #bfbfbf"}},r.a.createElement("div",{style:{width:"80%",margin:"1em"}},r.a.createElement("input",{ref:y,onKeyDown:function(e){"Enter"===e.key&&E()},style:{width:"100%",height:"100%",border:"1px solid #bfbfbf",outline:"none",background:"#fefefe",borderRadius:"20px",padding:"1em"},value:n,onChange:function(e){return o(e.target.value)},placeholder:"Type your message ...",type:"text"})),r.a.createElement("div",{style:{width:"20%"}},r.a.createElement("button",{disabled:n.length<1,style:{width:"100%",height:"100%",background:"none",color:n.length<1?"#86afff":"#3f80ff",fontWeight:"bold",border:"none",outline:"none",cursor:n.length<1?"not-allowed":"pointer"},onClick:E},"Send"))))})),oe=a(205),ce=a.n(oe),le=a(341);var ie=Object(f.b)((function(e){return{}}),(function(e){return{changeLoad:function(){return e({type:"CHANGE_LOAD"})}}}))(Object(l.g)((function(e){var t=e.history,a=e.changeLoad,n=r.a.useState(""),o=Object(i.a)(n,2),c=o[0],l=o[1],s=r.a.useState(!0),u=Object(i.a)(s,2),f=u[0],p=u[1],g=r.a.useState([]),h=Object(i.a)(g,2),b=h[0],y=h[1],E=r.a.useState(""),v=Object(i.a)(E,2),x=v[0],w=v[1],k=ce.a.parse(t.location.search),U=r.a.useRef(),O=r.a.useRef();r.a.useEffect((function(){m.ref("users").on("value",(function(e){var t=[];e.forEach((function(e){t.push(e.toJSON())})),y(t)})),m.ref("userMessages/".concat(d.currentUser.uid,"/").concat(k.id)).orderByChild("timestamp").on("value",(function(e){var t=[];e.forEach((function(e){t.push(e.toJSON())})),w(t),p(!1)}))}),[]),r.a.useEffect((function(){a(),U.current.scrollIntoView({behavior:"smooth"}),O.current.focus()}),[f]);var C=function(){m.ref("userMessages/".concat(d.currentUser.uid,"/").concat(k.id)).push({id:Object(le.a)(),recieverId:k.id,senderId:d.currentUser.uid,text:c,timeStamp:Date()}).then((function(){m.ref("userMessages/".concat(k.id,"/").concat(d.currentUser.uid)).push({id:Object(le.a)(),recieverId:k.id,senderId:d.currentUser.uid,text:c,timeStamp:Date()})})).then((function(){m.ref("latestMessages/".concat(d.currentUser.uid,"/").concat(k.id)).set({id:Object(le.a)(),recieverId:k.id,senderId:d.currentUser.uid,text:c,timeStamp:Date()})})).then((function(){m.ref("latestMessages/".concat(k.id,"/").concat(d.currentUser.uid)).set({id:Object(le.a)(),recieverId:k.id,senderId:d.currentUser.uid,text:c,timeStamp:Date()})})).then((function(){l(""),setTimeout((function(){U.current.scrollIntoView({behavior:"smooth"})}),100),O.current.focus()}))};return r.a.createElement(N,{title:"Reza"},r.a.createElement(_,null),x.length<1&&r.a.createElement("h5",{style:{textAlign:"center",marginTop:"3em"}},"No Messages !"),r.a.createElement("div",{className:"msgs"},x.length>0&&x.map((function(e){var t=e.senderId,a=(e.recieverId,e.id,e.text),n=b.find((function(e){return e.uid===t}));return console.log(n),r.a.createElement("div",{className:"msg ".concat(t===d.currentUser.uid?"sent":"received")},r.a.createElement("div",null,r.a.createElement(j.a,{size:"large",style:{color:"#f56a00",backgroundColor:"#fde3cf"}},t===n.uid?n.fullname:d.currentUser.displayName)),r.a.createElement("div",{style:{marginLeft:"10px",paddingRight:"10px"}},r.a.createElement("div",{className:"sender"}," ",t===n.uid?n.fullname:d.currentUser.displayName),r.a.createElement("p",{className:"text",style:{margin:"0"}},a)))})),r.a.createElement("div",{ref:U})),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",position:"fixed",bottom:"0",width:"100%",background:"white",borderTop:"1px solid #bfbfbf"}},r.a.createElement("div",{style:{width:"80%",margin:"1em"}},r.a.createElement("input",{ref:O,onKeyDown:function(e){"Enter"===e.key&&C()},style:{width:"100%",height:"100%",border:"1px solid #bfbfbf",outline:"none",background:"#fefefe",borderRadius:"20px",padding:"1em"},value:c,onChange:function(e){return l(e.target.value)},placeholder:"Type your message ...",type:"text"})),r.a.createElement("div",{style:{width:"20%"}},r.a.createElement("button",{disabled:c.length<1,style:{width:"100%",height:"100%",background:"none",color:c.length<1?"#86afff":"#3f80ff",fontWeight:"bold",border:"none",outline:"none",cursor:c.length<1?"not-allowed":"pointer"},onClick:C},"Send"))))})));var se=function(e){return d.currentUser?r.a.createElement(l.b,{exact:!0,component:e.component,path:e.path}):r.a.createElement(l.a,{to:e.redirect})},ue=a(131),de=a.n(ue);de.a.configure({showSpinner:!0});var me=Object(l.g)((function(e){var t=e.history;return Object(n.useEffect)((function(){d.onAuthStateChanged((function(){d.currentUser?t.push("/"):t.push("/login")}))}),[]),Object(n.useEffect)((function(){return t.listen((function(){de.a.start(),de.a.done()}))}),[]),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,component:$,path:"/login"}),r.a.createElement(se,{component:ne,path:"/profile",redirect:"/login"}),r.a.createElement(se,{component:re,path:"/groupchat",redirect:"/login"}),r.a.createElement(se,{component:ie,path:"/chat",redirect:"/login"}),r.a.createElement(se,{component:D,path:"/",redirect:"/login"}),r.a.createElement(l.b,{component:B}))})),fe=a(100),pe={name:"max",loading:!1},ge=a(206),he=Object(fe.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CALL":return console.log("action called"),e;case"CHANGE_LOAD":return Object(E.a)(Object(E.a)({},e),{},{loading:!e.loading});default:return e}}),Object(fe.a)(ge.a));c.a.render(r.a.createElement(f.a,{store:he},r.a.createElement(g.a,null,r.a.createElement(me,null))),document.getElementById("root"))},58:function(e,t,a){e.exports={mobile:"Header_mobile__29DKN",desktop:"Header_desktop__IxNL8",navbar:"Header_navbar__359Kr",navbarSticky:"Header_navbarSticky__5rkAm",moveDown:"Header_moveDown__1LPTs"}}},[[213,1,2]]]);
//# sourceMappingURL=main.b7e3b2a5.chunk.js.map