(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{1002:function(e,t,a){},1008:function(e,t,a){},1016:function(e,t,a){"use strict";a.r(t);a(301),a(313),a(314),a(315),a(316),a(317),a(318),a(319),a(320),a(321),a(322),a(323),a(324),a(325),a(326),a(507),a(508),a(509),a(510),a(511),a(512),a(513),a(514),a(515),a(330),a(516),a(517),a(183),a(518),a(519),a(520),a(521),a(522),a(523),a(524),a(525),a(526),a(527),a(528),a(529),a(530),a(531),a(532),a(534),a(536),a(537),a(339),a(185),a(538),a(539),a(540),a(541),a(542),a(543),a(544),a(545),a(546),a(547),a(548),a(549),a(550),a(551),a(552),a(553),a(344),a(554),a(555),a(556),a(557),a(558),a(559),a(560),a(561),a(562),a(564),a(565),a(567),a(568),a(569),a(570),a(571),a(572),a(573),a(574),a(575),a(576),a(577),a(578),a(579),a(580),a(581),a(582),a(583),a(584),a(585),a(254),a(587),a(588),a(589),a(590),a(591),a(593),a(594),a(595),a(596),a(597),a(598),a(599),a(600),a(601),a(602),a(603),a(356),a(604),a(605),a(256),a(606),a(607),a(608),a(609),a(193),a(610),a(611),a(612),a(613),a(614),a(615),a(616),a(617),a(618),a(619),a(620),a(621),a(622),a(623),a(624),a(625),a(626),a(627),a(628),a(629),a(630),a(631),a(632),a(633),a(634),a(635),a(637),a(638),a(639),a(640),a(641),a(642),a(643),a(644),a(645),a(646),a(647),a(648),a(649),a(650),a(651),a(652),a(653),a(654),a(655),a(656),a(657),a(658),a(659),a(660),a(661),a(662),a(663),a(664),a(665),a(666),a(667),a(668),a(669),a(261),a(670),a(671),a(672),a(673),a(674),a(675),a(676),a(364),a(365),a(366),a(367),a(368),a(369),a(370),a(371),a(372),a(373),a(374),a(375),a(376),a(377),a(378),a(379),a(380),a(679),a(680),a(681),a(682),a(683),a(684),a(685),a(686),a(687),a(688),a(689),a(690),a(691),a(692),a(693),a(694),a(696),a(697),a(698),a(699),a(700),a(701),a(702),a(703),a(704),a(705),a(706),a(382),a(384),a(385),a(386),a(387),a(388),a(389),a(390),a(391),a(392),a(393),a(394),a(395),a(396),a(397),a(398),a(399),a(400),a(707),a(708),a(709),a(711),a(401),a(402),a(403),a(712),a(713),a(714),a(715),a(716),a(717),a(718),a(719),a(405),a(720),a(721),a(722),a(724),a(407),a(725),a(408);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),i=(a(735),a(107)),o=a(40),u=a.n(o);function s(){return{type:"auth_user",payload:u.a.get("".concat("/api/users","/auth")).then((function(e){return e.data}))}}var m=a(55),d=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;function l(l){var c=Object(m.c)((function(e){return e.user})),i=Object(m.b)();return Object(n.useEffect)((function(){i(s()).then((function(e){e.payload.isAuth?(a&&!e.payload.isAdmin||!1===t)&&l.history.push("/"):t&&l.history.push("/login")}))}),[]),r.a.createElement(e,Object.assign({},l,{user:c}))}return l},p=a(59),E=a(97),f=a(22),h=a(75),y=a(1019),b=a(19),g=a(140),v=a(483),O=a.n(v),j=a(1018);var w=function(e){return r.a.createElement("div",null,r.a.createElement(j.a,{autoplay:!0},e.images.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("img",{style:{width:"auto",height:"150px"},src:"http://localhost:5000/".concat(e)}))}))))},x=a(1022),S=a(1028),_=x.a.Panel;var k=function(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),l=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement(x.a,{defaultActiveKey:["0"]},r.a.createElement(_,{header:"Continents",key:"1"},e.list&&e.list.map((function(t,a){return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement(S.a,{onChange:function(){return function(t){var a=l.indexOf(t),n=Object(E.a)(l);-1===a?n.push(t):n.splice(a,1),c(n),e.handleFilters(n)}(t._id)},checked:-1!==l.indexOf(t._id)}),r.a.createElement("span",null,t.name))})))))},I=a(1025),C=x.a.Panel;var N=function(e){var t=Object(n.useState)(0),a=Object(f.a)(t,2),l=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement(x.a,{defaultActiveKey:["0"]},r.a.createElement(C,{header:"Price",key:"1"},r.a.createElement(I.a.Group,{onChange:function(t){c(t.target.value),e.handleFilters(t.target.value)},value:l},e.list&&e.list.map((function(e){return r.a.createElement(I.a,{key:e._id,value:e._id}," ",e.name)}))))))},D=[{_id:1,name:"Africa"},{_id:2,name:"Europe"},{_id:3,name:"Asia"},{_id:4,name:"North America"},{_id:5,name:"South America"},{_id:6,name:"Australia"},{_id:7,name:"Antarctica"}],P=[{_id:0,name:"Any",array:[]},{_id:1,name:"$0 to $199",array:[0,199]},{_id:2,name:"$200 to $249",array:[200,249]},{_id:3,name:"$250 to $279",array:[250,279]},{_id:4,name:"$280 to $299",array:[280,299]},{_id:5,name:"More than $300",array:[300,15e5]}],A=a(1026),q=A.a.Search;var T=function(e){var t=Object(n.useState)(""),a=Object(f.a)(t,2),l=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement(q,{placeholder:"input search text",onChange:function(t){c(t.currentTarget.value),e.refreshFunction(t.currentTarget.value)},style:{width:200},value:l}))};var B=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(0),i=Object(f.a)(c,2),o=i[0],s=i[1],m=Object(n.useState)(4),d=Object(f.a)(m,2),v=d[0],j=(d[1],Object(n.useState)(0)),x=Object(f.a)(j,2),S=x[0],_=x[1],I=Object(n.useState)({continents:[],price:[]}),C=Object(f.a)(I,2),A=C[0],q=C[1],B=Object(n.useState)(""),F=Object(f.a)(B,2),R=(F[0],F[1]);Object(n.useEffect)((function(){$({skip:o,limit:v})}),[]);var $=function(e){u.a.post("/api/product/products",e).then((function(t){t.data.success?(e.loadMore?l([].concat(Object(E.a)(a),Object(E.a)(t.data.productsInfo))):l(t.data.productsInfo),_(t.data.postSize)):alert("\uc0c1\ud488\ub4e4\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")})),s(o+v)},L=a.map((function(e,t){return r.a.createElement(h.a,{lg:6,md:8,xs:24,key:t},r.a.createElement(y.a,{cover:r.a.createElement("a",{href:"/product/".concat(e._id)},r.a.createElement(w,{images:e.images}))},r.a.createElement(O.a,{title:e.title,description:"$".concat(e.price)})))})),M=function(e,t){var a=Object(p.a)({},A);if(a[t]=e,"price"===t){var n=function(e){var t=P,a=[];for(var n in t)t[n]._id===parseInt(e,10)&&(a=t[n].array);return a}(e);a[t]=n}!function(e){$({skip:0,limit:v,filters:e}),s(0+v)}(a),q(a)};return r.a.createElement("div",{style:{width:"75%",margin:"3rem auto"}},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",null,"Let's Travel Anywhere ",r.a.createElement(b.a,{type:"rocket"}))),r.a.createElement(g.a,{gutter:[16,16]},r.a.createElement(h.a,{lg:12,xs:24},r.a.createElement(k,{list:D,handleFilters:function(e){return M(e,"continents")}})),r.a.createElement(h.a,{lg:12,xs:24},r.a.createElement(N,{list:P,handleFilters:function(e){return M(e,"price")}}))),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",margin:"1rem auto"}},r.a.createElement(T,{refreshFunction:function(e){var t={skip:0,limit:v,filters:A,searchTerm:e};s(0),R(e),$(t)}})),r.a.createElement(g.a,{gutter:[16,16]},L),S>=v&&r.a.createElement("div",{style:{justifyContent:"center"}},r.a.createElement("button",{onClick:function(){$({skip:o,limit:v,loadMore:!0,filters:A})}},"\ub354\ubcf4\uae30")))},F=a(231),R=a(70),$=a(1021),L=a(1020),M=a(299),z=$.a.Title;var U=Object(i.f)((function(e){var t=Object(m.b)(),a=!!localStorage.getItem("rememberMe"),l=Object(n.useState)(""),c=Object(f.a)(l,2),i=c[0],o=c[1],s=Object(n.useState)(a),d=Object(f.a)(s,2),p=d[0],E=d[1],h=function(){E(!p)},y=localStorage.getItem("rememberMe")?localStorage.getItem("rememberMe"):"";return r.a.createElement(F.a,{initialValues:{email:y,password:""},validationSchema:R.object().shape({email:R.string().email("Email is invalid").required("Email is required"),password:R.string().min(6,"Password must be at least 6 characters").required("Password is required")}),onSubmit:function(a,n){var r=n.setSubmitting;setTimeout((function(){var n={email:a.email,password:a.password};t(function(e){return{type:"login_user",payload:u.a.post("".concat("/api/users","/login"),e).then((function(e){return e.data}))}}(n)).then((function(t){t.payload.loginSuccess?(window.localStorage.setItem("userId",t.payload.userId),!0===p?window.localStorage.setItem("rememberMe",a.id):localStorage.removeItem("rememberMe"),e.history.push("/")):o("Check out your Account or Password again")})).catch((function(e){o("Check out your Account or Password again"),setTimeout((function(){o("")}),3e3)})),r(!1)}),500)}},(function(e){var t=e.values,a=e.touched,n=e.errors,l=(e.dirty,e.isSubmitting),c=e.handleChange,o=e.handleBlur,u=e.handleSubmit;e.handleReset;return r.a.createElement("div",{className:"app"},r.a.createElement(z,{level:2},"Log In"),r.a.createElement("form",{onSubmit:u,style:{width:"350px"}},r.a.createElement(L.a.Item,{required:!0},r.a.createElement(A.a,{id:"email",prefix:r.a.createElement(b.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your email",type:"email",value:t.email,onChange:c,onBlur:o,className:n.email&&a.email?"text-input error":"text-input"}),n.email&&a.email&&r.a.createElement("div",{className:"input-feedback"},n.email)),r.a.createElement(L.a.Item,{required:!0},r.a.createElement(A.a,{id:"password",prefix:r.a.createElement(b.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your password",type:"password",value:t.password,onChange:c,onBlur:o,className:n.password&&a.password?"text-input error":"text-input"}),n.password&&a.password&&r.a.createElement("div",{className:"input-feedback"},n.password)),i&&r.a.createElement("label",null,r.a.createElement("p",{style:{color:"#ff0000bf",fontSize:"0.7rem",border:"1px solid",padding:"1rem",borderRadius:"10px"}},i)),r.a.createElement(L.a.Item,null,r.a.createElement(S.a,{id:"rememberMe",onChange:h,checked:p},"Remember me"),r.a.createElement("a",{className:"login-form-forgot",href:"/reset_user",style:{float:"right"}},"forgot password"),r.a.createElement("div",null,r.a.createElement(M.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{minWidth:"100%"},disabled:l,onSubmit:u},"Log in")),"Or ",r.a.createElement("a",{href:"/register"},"register now!"))))}))})),W=a(137),X=a.n(W),H={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},V={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};var K=function(e){var t=Object(m.b)();return r.a.createElement(F.a,{initialValues:{email:"",lastName:"",name:"",password:"",confirmPassword:""},validationSchema:R.object().shape({name:R.string().required("Name is required"),lastName:R.string().required("Last Name is required"),email:R.string().email("Email is invalid").required("Email is required"),password:R.string().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:R.string().oneOf([R.ref("password"),null],"Passwords must match").required("Confirm Password is required")}),onSubmit:function(a,n){var r=n.setSubmitting;setTimeout((function(){var n={email:a.email,password:a.password,name:a.name,lastname:a.lastname,image:"http://gravatar.com/avatar/".concat(X()().unix(),"?d=identicon")};t(function(e){return{type:"register_user",payload:u.a.post("".concat("/api/users","/register"),e).then((function(e){return e.data}))}}(n)).then((function(t){t.payload.success?e.history.push("/login"):alert(t.payload.err.errmsg)})),r(!1)}),500)}},(function(e){var t=e.values,a=e.touched,n=e.errors,l=(e.dirty,e.isSubmitting),c=e.handleChange,i=e.handleBlur,o=e.handleSubmit;e.handleReset;return r.a.createElement("div",{className:"app"},r.a.createElement("h2",null,"Sign up"),r.a.createElement(L.a,Object.assign({style:{minWidth:"375px"}},H,{onSubmit:o}),r.a.createElement(L.a.Item,{required:!0,label:"Name"},r.a.createElement(A.a,{id:"name",placeholder:"Enter your name",type:"text",value:t.name,onChange:c,onBlur:i,className:n.name&&a.name?"text-input error":"text-input"}),n.name&&a.name&&r.a.createElement("div",{className:"input-feedback"},n.name)),r.a.createElement(L.a.Item,{required:!0,label:"Last Name"},r.a.createElement(A.a,{id:"lastName",placeholder:"Enter your Last Name",type:"text",value:t.lastName,onChange:c,onBlur:i,className:n.lastName&&a.lastName?"text-input error":"text-input"}),n.lastName&&a.lastName&&r.a.createElement("div",{className:"input-feedback"},n.lastName)),r.a.createElement(L.a.Item,{required:!0,label:"Email",hasFeedback:!0,validateStatus:n.email&&a.email?"error":"success"},r.a.createElement(A.a,{id:"email",placeholder:"Enter your Email",type:"email",value:t.email,onChange:c,onBlur:i,className:n.email&&a.email?"text-input error":"text-input"}),n.email&&a.email&&r.a.createElement("div",{className:"input-feedback"},n.email)),r.a.createElement(L.a.Item,{required:!0,label:"Password",hasFeedback:!0,validateStatus:n.password&&a.password?"error":"success"},r.a.createElement(A.a,{id:"password",placeholder:"Enter your password",type:"password",value:t.password,onChange:c,onBlur:i,className:n.password&&a.password?"text-input error":"text-input"}),n.password&&a.password&&r.a.createElement("div",{className:"input-feedback"},n.password)),r.a.createElement(L.a.Item,{required:!0,label:"Confirm",hasFeedback:!0},r.a.createElement(A.a,{id:"confirmPassword",placeholder:"Enter your confirmPassword",type:"password",value:t.confirmPassword,onChange:c,onBlur:i,className:n.confirmPassword&&a.confirmPassword?"text-input error":"text-input"}),n.confirmPassword&&a.confirmPassword&&r.a.createElement("div",{className:"input-feedback"},n.confirmPassword)),r.a.createElement(L.a.Item,V,r.a.createElement(M.a,{onClick:o,type:"primary",disabled:l},"Submit"))))}))},G=a(1023),J=G.a.SubMenu,Q=G.a.ItemGroup;var Y=function(e){return r.a.createElement(G.a,{mode:e.mode},r.a.createElement(G.a.Item,{key:"mail"},r.a.createElement("a",{href:"/"},"Home")),r.a.createElement(J,{title:r.a.createElement("span",null,"Blogs")},r.a.createElement(Q,{title:"Item 1"},r.a.createElement(G.a.Item,{key:"setting:1"},"Option 1"),r.a.createElement(G.a.Item,{key:"setting:2"},"Option 2")),r.a.createElement(Q,{title:"Item 2"},r.a.createElement(G.a.Item,{key:"setting:3"},"Option 3"),r.a.createElement(G.a.Item,{key:"setting:4"},"Option 4"))))},Z=a(1029);var ee=Object(i.f)((function(e){var t=Object(m.c)((function(e){return e.user}));return t.userData&&!t.userData.isAuth?r.a.createElement(G.a,{mode:e.mode},r.a.createElement(G.a.Item,{key:"mail"},r.a.createElement("a",{href:"/login"},"Signin")),r.a.createElement(G.a.Item,{key:"app"},r.a.createElement("a",{href:"/register"},"Signup"))):r.a.createElement(G.a,{mode:e.mode},r.a.createElement(G.a.Item,{key:"history"},r.a.createElement("a",{href:"/history"},"History")),r.a.createElement(G.a.Item,{key:"upload"},r.a.createElement("a",{href:"/product/upload"},"Upload")),r.a.createElement(G.a.Item,{key:"cart",style:{paddingBottom:3}},r.a.createElement(Z.a,{count:t.userData&&t.userData.cart.length},r.a.createElement("a",{href:"/user/cart",className:"head-example",style:{marginRight:-22,color:"#66777"}},r.a.createElement(b.a,{type:"shopping-cart",style:{fontSize:30,marginBottom:3}})))),r.a.createElement(G.a.Item,{key:"logout"},r.a.createElement("a",{onClick:function(){u.a.get("".concat("/api/users","/logout")).then((function(t){200===t.status?e.history.push("/login"):alert("Log Out Failed")}))}},"Logout")))})),te=a(1024);a(1002);var ae=function(){var e=Object(n.useState)(!1),t=Object(f.a)(e,2),a=t[0],l=t[1];return r.a.createElement("nav",{className:"menu",style:{position:"fixed",zIndex:5,width:"100%"}},r.a.createElement("div",{className:"menu__logo"},r.a.createElement("a",{href:"/"},"Logo")),r.a.createElement("div",{className:"menu__container"},r.a.createElement("div",{className:"menu_left"},r.a.createElement(Y,{mode:"horizontal"})),r.a.createElement("div",{className:"menu_rigth"},r.a.createElement(ee,{mode:"horizontal"})),r.a.createElement(M.a,{className:"menu__mobile-button",type:"primary",onClick:function(){l(!0)}},r.a.createElement(b.a,{type:"align-right"})),r.a.createElement(te.a,{title:"Basic Drawer",placement:"right",className:"menu_drawer",closable:!1,onClose:function(){l(!1)},visible:a},r.a.createElement(Y,{mode:"inline"}),r.a.createElement(ee,{mode:"inline"}))))};var ne=function(){return r.a.createElement("div",{style:{height:"80px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"1rem"}},r.a.createElement("p",null," Happy Coding  ",r.a.createElement(b.a,{type:"smile"})))},re=a(500);var le=function(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),l=a[0],c=a[1];return r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(re.a,{onDrop:function(t){var a=new FormData;a.append("file",t[0]),u.a.post("/api/product/image",a,{header:{"content-type":"multipart/form-data"}}).then((function(t){t.data.success?(c([].concat(Object(E.a)(l),[t.data.filePath])),e.refreshFunction([].concat(Object(E.a)(l),[t.data.filePath]))):alert("\ud30c\uc77c \uc800\uc7a5 \uc2e4\ud328")}))}},(function(e){var t=e.getRootProps,a=e.getInputProps;return r.a.createElement("section",null,r.a.createElement("div",Object.assign({style:{width:300,height:240,border:"1px solid lightgray",display:"flex",alignItems:"center",justifyContent:"center"}},t()),r.a.createElement("input",a()),r.a.createElement(b.a,{type:"plus",style:{fontSize:"3rem"}})))})),r.a.createElement("div",{style:{display:"flex",width:"350px",height:"240px",overflowX:"scroll"}},l.map((function(t,a){return r.a.createElement("div",{onClick:function(){return function(t){var a=l.indexOf(t),n=Object(E.a)(l);n.splice(a,1),c(n),e.refreshFunction(n)}(t)},key:a},r.a.createElement("img",{style:{minWidth:"300px",width:"300px",height:"240px"},src:"http://localhost:5000/".concat(t)}))}))))},ce=A.a.TextArea,ie=[{key:1,value:"Africa"},{key:2,value:"Europe"},{key:3,value:"Asia"},{key:4,value:"North America"},{key:5,value:"South America"},{key:6,value:"Australia"},{key:7,value:"Antartica"}];var oe=function(e){var t=Object(n.useState)(""),a=Object(f.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(""),o=Object(f.a)(i,2),s=o[0],m=o[1],d=Object(n.useState)(0),p=Object(f.a)(d,2),E=p[0],h=p[1],y=Object(n.useState)(1),b=Object(f.a)(y,2),g=b[0],v=b[1],O=Object(n.useState)([]),j=Object(f.a)(O,2),w=j[0],x=j[1];return r.a.createElement("div",{style:{maxWidth:"700px",margin:"2rem auto"}},r.a.createElement("div",{style:{textAlign:"center",marginBottom:"2rem"}},r.a.createElement("h2",null,"\uc5ec\ud589 \uc0c1\ud488 \uc5c5\ub85c\ub4dc")),r.a.createElement(L.a,{onSubmit:function(t){if(t.preventDefault(),!l||!s||!E||!g||!w)return alert("\ubaa8\ub4e0 \uac12\uc744 \ub123\uc5b4\uc8fc\uc138\uc694.");var a={writer:e.user.userData._id,title:l,description:s,price:E,images:w,continents:g};u.a.post("/api/product",a).then((function(t){t.data.success?(alert("\uc5c5\ub85c\ub4dc \uc131\uacf5"),e.history.push("/")):alert("\uc5c5\ub85c\ub4dc \uc2e4\ud328")}))}},r.a.createElement(le,{refreshFunction:function(e){x(e)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"\uc774\ub984"),r.a.createElement(A.a,{onChange:function(e){c(e.currentTarget.value)},value:l}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"\uc124\uba85"),r.a.createElement(ce,{onChange:function(e){m(e.currentTarget.value)},value:s}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"\uac00\uaca9($)"),r.a.createElement(A.a,{type:"number",onChange:function(e){h(e.currentTarget.value)},value:E}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("select",{onChange:function(e){v(e.currentTarget.value)},value:g},ie.map((function(e){return r.a.createElement("option",{key:e.key,value:e.key},e.value)}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"\ud655\uc778")))},ue=a(494),se=a.n(ue);var me=function(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)((function(){if(e.detail.images&&e.detail.images.length>0){var t=[];e.detail.images.map((function(e){t.push({original:"http://localhost:5000/".concat(e),thumbnail:"http://localhost:5000/".concat(e)})})),c(t)}}),[e.detail]),r.a.createElement("div",null,r.a.createElement(se.a,{items:l}))},de=a(1030);var pe=function(e){var t=Object(m.b)();return r.a.createElement("div",null,r.a.createElement(de.a,{title:"Product Info",bordered:!0,column:{xxl:4,xl:3,lg:3,md:3,sm:2,xs:1}},r.a.createElement(de.a.Item,{label:"Price"},e.detail.price),r.a.createElement(de.a.Item,{label:"Sold"},e.detail.sold),r.a.createElement(de.a.Item,{label:"Views"},e.detail.views),r.a.createElement(de.a.Item,{label:"Description"},e.detail.description)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(M.a,{size:"large",shape:"round",type:"danger",onClick:function(){t(function(e){var t={productId:e};return{type:"add_to_cart",payload:u.a.post("".concat("/api/users","/addToCart"),t).then((function(e){return e.data}))}}(e.detail._id))}},"Add to Cart")))};var Ee=function(e){var t=e.match.params.productId,a=Object(n.useState)({}),l=Object(f.a)(a,2),c=l[0],i=l[1];return Object(n.useEffect)((function(){u.a.get("/api/product/products_by_id?id=".concat(t,"&type=single")).then((function(e){i(e.data[0])})).catch((function(e){return alert(e)}))}),[]),r.a.createElement("div",{style:{width:"100%",padding:"3rem 4rem"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("h1",null,c.title)),r.a.createElement("br",null),r.a.createElement(g.a,{gutter:[16,16]},r.a.createElement(h.a,{lg:12,sm:24},r.a.createElement(me,{detail:c})),r.a.createElement(h.a,{lg:12,sm:24},r.a.createElement(pe,{detail:c}))))};a(1008);var fe=function(e){var t=function(e){if(e.length>0){var t=e[0];return"http://localhost:5000/".concat(t)}};return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Product Image"),r.a.createElement("th",null,"Product Quantity"),r.a.createElement("th",null,"Product Price"),r.a.createElement("th",null,"Remove from Cart"))),r.a.createElement("tbody",null,e.products&&e.products.map((function(a,n){return r.a.createElement("tr",{key:n},r.a.createElement("td",null,r.a.createElement("img",{style:{width:"70px"},alt:"product",src:t(a.images)})),r.a.createElement("td",null,a.quantity," EA"),r.a.createElement("td",null,"$ ",a.price),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.removeItem(a._id)}},"Remove")))})))))},he=a(1027),ye=a(141),be=a(495),ge=a(496),ve=a(501),Oe=a(503),je=a(497),we=a.n(je),xe=function(e){Object(Oe.a)(a,e);var t=Object(ve.a)(a);function a(){return Object(be.a)(this,a),t.apply(this,arguments)}return Object(ge.a)(a,[{key:"render",value:function(){var e=this,t=this.props.total;return r.a.createElement(we.a,{env:"sandbox",client:{sandbox:"ATyMJoeLKvrt9tvt81tSnYk7EfegzSEwByUGSy5bWZE9XYwImkRguX2tTvBNE7IKMl33Ru7FhONyQBbU",production:"YOUR-PRODUCTION-APP-ID"},currency:"USD",total:t,onError:function(e){console.log("Error!",e)},onSuccess:function(t){e.props.onSuccess(t)},onCancel:function(e){console.log("The payment was cancelled!",e)},style:{size:"large",color:"blue",shape:"rect",label:"checkout"}})}}]),a}(r.a.Component);var Se=function(e){var t=Object(m.b)(),a=Object(n.useState)(0),l=Object(f.a)(a,2),c=l[0],i=l[1],o=Object(n.useState)(!1),s=Object(f.a)(o,2),d=s[0],p=s[1],E=Object(n.useState)(!1),h=Object(f.a)(E,2),y=h[0],b=h[1];Object(n.useEffect)((function(){var a=[];e.user.userData&&e.user.userData.cart&&e.user.userData.cart.length>0&&(e.user.userData.cart.forEach((function(e){a.push(e.id)})),t(function(e,t){return{type:"get_cart_items",payload:u.a.get("/api/product/products_by_id?id=".concat(e,"&type=array")).then((function(e){return t.forEach((function(t){e.data.forEach((function(a,n){t.id===a._id&&(e.data[n].quantity=t.quantity)}))})),e.data}))}}(a,e.user.userData.cart)).then((function(e){g(e.payload)})))}),[e.user.userData]);var g=function(e){var t=0;e.map((function(e){t+=parseInt(e.price,10)*e.quantity})),i(t),p(!0)};return r.a.createElement("div",{style:{width:"85%",margin:"3rem auto"}},r.a.createElement("h1",null,"My Cart"),r.a.createElement("div",null,r.a.createElement(fe,{products:e.user.cartDetail,removeItem:function(e){t(function(e){return{type:"remove_cart_item",payload:u.a.get("/api/users/removeFromCart?id=".concat(e)).then((function(e){return e.data.cart.forEach((function(t){e.data.productInfo.forEach((function(a,n){t.id===a._id&&(e.data.productInfo[n].quantity=t.quantity)}))})),e.data}))}}(e)).then((function(e){e.payload.productInfo.length<=0&&p(!1)}))}})),d?r.a.createElement("div",{style:{marginTop:"3rem"}},r.a.createElement("h2",null,"Total Amount: $",c)):y?r.a.createElement(he.a,{status:"success",title:"Successfully Purchased Items"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(ye.a,{description:!1})),d&&r.a.createElement(xe,{total:c,onSuccess:function(a){t(function(e){return{type:"on_success_buy",payload:u.a.post("/api/users/successBuy",e).then((function(e){return e.data}))}}({paymentData:a,cartDetail:e.user.cartDetail})).then((function(e){e.payload.success&&(p(!1),b(!0))})).catch((function(e){b(!1)}))}}))};var _e=function(e){return r.a.createElement("div",{style:{width:"80%",margin:"3rem auto"}},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"History")),r.a.createElement("br",null),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Payment Id"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Date of Purchase"))),r.a.createElement("tbody",null,e.user.userData&&e.user.userData.history.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.price),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,e.dateOfPurchase))})))))};var ke=function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(ae,null),r.a.createElement("div",{style:{paddingTop:"69px",minHeight:"calc(100vh - 80px)"}},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:d(B,null)}),r.a.createElement(i.a,{exact:!0,path:"/login",component:d(U,!1)}),r.a.createElement(i.a,{exact:!0,path:"/register",component:d(K,!1)}),r.a.createElement(i.a,{exact:!0,path:"/product/upload",component:d(oe,!0)}),r.a.createElement(i.a,{exact:!0,path:"/product/:productId",component:d(Ee,null)}),r.a.createElement(i.a,{exact:!0,path:"/user/cart",component:d(Se,!0)}),r.a.createElement(i.a,{exact:!0,path:"/history",component:d(_e,!0)}))),r.a.createElement(ne,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ie=a(169),Ce=a(122),Ne=Object(Ce.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"register_user":return Object(p.a)({},e,{register:t.payload});case"login_user":return Object(p.a)({},e,{loginSucces:t.payload});case"auth_user":return Object(p.a)({},e,{userData:t.payload});case"logout_user":return Object(p.a)({},e);case"add_to_cart":return Object(p.a)({},e,{userData:Object(p.a)({},e.userData,{cart:t.payload})});case"get_cart_items":return Object(p.a)({},e,{cartDetail:t.payload});case"remove_cart_item":return Object(p.a)({},e,{cartDetail:t.payload.productInfo,userData:Object(p.a)({},e.userData,{cart:t.payload.cart})});case"on_success_buy":return Object(p.a)({},e,{cartDetail:t.payload.cartDetail,userData:Object(p.a)({},e.userData,{cart:t.payload.cart})});default:return e}}}),De=a(498),Pe=a.n(De),Ae=a(499),qe=Object(Ce.a)(Pe.a,Ae.a)(Ce.d);c.a.render(r.a.createElement(m.a,{store:qe(Ne,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},r.a.createElement(Ie.a,null,r.a.createElement(ke,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},506:function(e,t,a){e.exports=a(1016)},735:function(e,t,a){}},[[506,1,2]]]);
//# sourceMappingURL=main.b58522c0.chunk.js.map