(this["webpackJsonprecipeshoppinglist2.0"]=this["webpackJsonprecipeshoppinglist2.0"]||[]).push([[0],{227:function(e,n,t){},433:function(e,n,t){},438:function(e,n,t){},439:function(e,n,t){},440:function(e,n,t){},441:function(e,n,t){},442:function(e,n,t){},443:function(e,n,t){},444:function(e,n,t){},445:function(e,n,t){},446:function(e,n,t){},447:function(e,n,t){},448:function(e,n,t){},449:function(e,n,t){},450:function(e,n,t){},451:function(e,n,t){"use strict";t.r(n);var i=t(4),c=t(2),r=t.n(c),a=t(94),s=t.n(a),o=(t(227),t(228),t(17)),l=t.n(o),u=t(33),d=t(10),j=t(9),b=t(95),h=t.n(b),f=t(37),p=(t(452),t(253),t(56)),O=t(221),g=t(13),m=Object(O.a)({reducer:{firebase:g.firebaseReducer,firestore:p.firestoreReducer}}),v={userProfile:"users",useFirestoreForProfile:!0,onAuthStateChanged:function(e,n,t){e||t({type:p.actionTypes.CLEAR_DATA})}},x={firebase:f.a,config:v,dispatch:m.dispatch,createFirestoreInstance:p.createFirestoreInstance},N=function(){var e=Object(u.a)(l.a.mark((function e(n,t){var c,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return c=k.doc("users/".concat(n.uid)),e.next=5,c.get();case 5:if(e.sent.exists){e.next=16;break}return r=n.displayName,a=n.email,e.prev=8,e.next=11,c.set(Object(i.a)({displayName:r,email:a},t));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(8),console.log("error creating user",e.t0.message);case 16:return e.abrupt("return",c);case 17:case"end":return e.stop()}}),e,null,[[8,13]])})));return function(n,t){return e.apply(this,arguments)}}();f.a.initializeApp({apiKey:"AIzaSyBBougi-iecxqTOOD2iahFN-yUfG5tKEMo",authDomain:"pantri-128f4.firebaseapp.com",projectId:"pantri-128f4",storageBucket:"pantri-128f4.appspot.com",messagingSenderId:"480125689887",appId:"1:480125689887:web:8603482672c1217834752a",measurementId:"G-5RVBRNC8RQ"});var w=f.a.auth(),k=f.a.firestore(),R=new f.a.auth.GoogleAuthProvider;R.setCustomParameters({prompt:"select_account"});f.a;var y=t(219),C=t.n(y),A=t(6),I=t(97),S=t.n(I),P=function(e,n,t){b.store.addNotification({title:e,message:n,type:t,insert:"bottom",container:"bottom-center",dismiss:{duration:2e3}})},L=t(25),T=(t(433),t(1)),E=function(){var e=Object(d.b)((function(e){return e.firebase.auth})).isEmpty,n=Object(c.useContext)(I.MenuContext).toggleMenu,t=function(){var e=Object(c.useState)({width:void 0,height:void 0}),n=Object(A.a)(e,2),t=n[0],i=n[1];return Object(c.useEffect)((function(){function e(){i({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}(),i=Object(c.useState)(!1),r=Object(A.a)(i,2),a=r[0],s=r[1];return Object(T.jsx)("header",{className:"app-header",children:t.width>575?Object(T.jsxs)("nav",{className:"nav",children:[Object(T.jsx)(L.b,{className:"nav-link",to:"/PANTRI/shoppingList",children:"Shopping list"}),Object(T.jsx)(L.b,{className:"nav-link",to:"/PANTRI/recipes",children:"Recipes"}),Object(T.jsx)(L.b,{className:"nav-link",to:"/PANTRI/newrecipe",children:"Add a recipe"}),e?Object(T.jsx)(L.b,{className:"nav-link",to:"/PANTRI/",children:"Sign In"}):Object(T.jsx)("div",{className:"nav-link",onClick:function(){return w.signOut()},children:"Sign Out"})]}):Object(T.jsx)("div",{className:"small-screen",children:Object(T.jsxs)("div",{class:"burger-container",onClick:function(){s(!a),n()},children:[Object(T.jsx)("div",{class:a?"bar1 change":"bar1"}),Object(T.jsx)("div",{class:a?"bar2 change":"bar2"}),Object(T.jsx)("div",{class:a?"bar3 change":"bar3"})]})})})},F=t(57),B=(t(438),function(e){var n=e.inputList,t=e.setInputList,i=e.lossOfFocus,r=e.label,a=void 0===r?"Ingredient":r,s=function(){t([].concat(Object(F.a)(n),[{ingredient:"",ingredientRef:null}]))};return Object(c.useEffect)((function(){n[n.length-1].ingredientRef&&n[n.length-1].ingredientRef.focus()}),[n.length]),n.map((function(e,c){return Object(T.jsxs)("div",{className:"ingredient-input-group",children:[Object(T.jsxs)("div",{className:"group",children:[Object(T.jsx)("input",{id:e.ingredient+c,name:"ingredient",label:a||"Ingredient",onChange:function(e){return function(e,i){var c=e.target,r=c.name,a=c.value,s=Object(F.a)(n);s[i][r]=a,t(s)}(e,c)},value:e.ingredient,onKeyDown:function(e){"Enter"===e.key&&s()},ref:function(n){return e.ingredientRef=n},autoComplete:"off",className:"form-input",onBlur:i}),a?Object(T.jsx)("label",{htmlFor:e.ingredient+c,className:"".concat(e.ingredient.length?"shrink":""," form-input-label"),children:a}):null]}),Object(T.jsxs)("div",{className:"button-group",children:[n.length-1===c&&Object(T.jsx)("div",{className:"ingredient-button",children:Object(T.jsx)("button",{onClick:s,className:"add",children:"\u2715"})}),1!==n.length&&Object(T.jsx)("button",{onClick:function(){return function(e){var i=Object(F.a)(n);i.splice(e,1),t(i)}(c)},className:"ingredient-button delete",children:"\u2715"})]})]},c)}))}),D=function(e){var n=e.uid,t=Object(d.b)((function(e){return e.firebase.profile.oddBits})),i=Object(g.useFirestore)(),r=Object(c.useState)([{ingredient:"",ingredientRef:null}]),a=Object(A.a)(r,2),s=a[0],o=a[1];Object(c.useEffect)((function(){t&&t.length&&o(t.map((function(e){return{ingredient:e,ingredientRef:null}})))}),[t]);return Object(T.jsxs)("article",{className:"card",children:[Object(T.jsx)("div",{className:"card-header",children:Object(T.jsx)("h2",{className:"card-title",children:"Odd Bits"})}),Object(T.jsx)("div",{className:"card-body ",children:Object(T.jsx)(B,{inputList:s,setInputList:o,lossOfFocus:function(){if(n){var e=s.map((function(e,n){return e.ingredient}));i.collection("users").doc(n).set({oddBits:e},{merge:!0})}},label:"Odd bit"})})]})},M=(t(439),function(e){var n=e.recipeId,t=e.ingredients,i=e.pathname,c=e.ingredientButton;return t?Object(T.jsx)("div",{className:"ingredient-list",children:t.map((function(e,t){return null!==e?Object(T.jsxs)("div",{className:"ingredient",children:[Object(T.jsx)("div",{htmlFor:e,className:"ingredient-text",children:e}),"/PANTRI/shoppingList"===i?Object(T.jsx)("button",{className:"ingredient-button",onClick:c,name:n+"&"+e+"&"+t,children:"\u2715"}):Object(T.jsx)("div",{})]},n+e+t):null}))}):null});t(440);var W=function(e){var n=e.recipe,t=e.button,i=e.ingredientButton,c=e.removeFromRecipes,r=e.editRecipe,a=window.location.pathname;return Object(T.jsxs)("article",{className:"card",children:[Object(T.jsxs)("div",{className:"card-header",children:[Object(T.jsx)("h2",{className:"card-title",children:n.name}),n.link?Object(T.jsx)("a",{className:"title-link",target:"_blank",rel:"noopener noreferrer",href:n.link,children:"Link"}):null,Object(T.jsxs)("div",{className:"card-header-buttons",children:["/PANTRI/recipes"===a?Object(T.jsx)("button",{value:n.id,onClick:r,className:"title-link",children:"Edit"}):null,Object(T.jsx)("button",{href:"#",value:n.id,onClick:function(e){return c(e)},className:" title-link",children:"\u2715"})]})]}),n.ingredients.length?Object(T.jsxs)("div",{className:"card-body",children:[Object(T.jsx)(M,{recipeId:n.id,ingredients:n.ingredients,pathname:a,ingredientButton:i}),Object(T.jsx)("button",{className:"card-button",onClick:t,value:n.id,children:"/PANTRI/shoppingList"===a?"Done":"Add to Shopping List"})]}):null]})},G=t(220),q=t.n(G);t(441);var U=function(e){var n=e.recipes,t=e.removeFromRecipes,i=e.cardButton,c=e.editRecipeCardButton,r=e.ingredientButton,a={default:n.length<3?n.length:3,1400:2,1e3:1};return Object(T.jsx)("div",{className:"card-list fade-in",children:Object(T.jsx)(q.a,{breakpointCols:a,className:"masonry-grid",columnClassName:"masonry-grid_column",children:n.map((function(e){return null!==e?Object(T.jsx)(W,{removeFromRecipes:t,recipe:e,button:i,editRecipe:c,ingredientButton:r},e.id):null}))})})},z=(t(442),function(e){var n=e.onClick,t=e.isGoogleSignIn,i=e.value,c=e.children;return Object(T.jsx)("button",{className:"".concat(t?"google-sign-in":""," custom-button"),onClick:n,value:i,children:c})}),_=function(e){var n=e.recipes,t=Object(c.useState)(!1),r=Object(A.a)(t,2),a=r[0],s=r[1],o=Object(c.useState)({id:"sort",name:"Sorted Shopping List",link:"",ingredients:[]}),l=Object(A.a)(o,2),u=l[0],d=l[1],j=function(){s(!a)};return Object(T.jsx)(T.Fragment,{children:a?Object(T.jsx)(W,{recipe:u,removeFromRecipes:j,button:j,ingredientButton:function(e){e.preventDefault();var n=e.target.name.split("&"),t=Object(A.a)(n,3),c=(t[0],t[1]),r=(t[2],u.ingredients.filter((function(e){return e!==c})));d(Object(i.a)(Object(i.a)({},u),{},{ingredients:r}))}}):Object(T.jsx)(z,{value:"Sort shopping",onClick:function(){if(n){var e=n.map((function(e){return e.ingredients})).flat().sort(),t=Object(F.a)(new Set(e)).map((function(n){return[n,e.filter((function(e){return e===n})).length]})).map((function(e,n){return[e[0]+"  X"+e[1]]})).flat();d((function(e){return Object(i.a)(Object(i.a)({},e),{},{ingredients:t})}))}j()},children:"Sort Shopping"})})};var J=function(){var e=Object(d.b)((function(e){return e.firebase.auth})).uid;Object(g.useFirestoreConnect)({collection:"users/".concat(e,"/shoppingList"),storeAs:"shoppingList"});var n=Object(g.useFirestore)(),t=Object(d.b)((function(e){return e.firestore.ordered.shoppingList})),i=n.collection("users").doc(e).collection("shoppingList"),c=function(e){e.preventDefault();var n=e.target.value;i.doc(n).delete().catch((function(e){console.log("error removing document",e)}))};return Object(T.jsxs)("div",{className:"page fade-in",children:[Object(T.jsxs)("div",{className:"page-header",children:[Object(T.jsx)("h2",{className:"title",children:"Shopping List"}),Object(T.jsx)(D,{uid:e}),t&&t.length?Object(T.jsx)(_,{recipes:t}):null]}),t&&t.length?Object(T.jsx)(U,{recipes:t,removeFromRecipes:c,cardButton:c,ingredientButton:function(e){e.preventDefault();var t=e.target.name.split("&"),c=Object(A.a)(t,3),r=c[0],a=c[1];c[2];i.doc(r).update({ingredients:n.FieldValue.arrayRemove(a)})}}):Object(T.jsxs)("div",{className:"card",children:[Object(T.jsx)("h2",{children:"No recipes in your shopping list."}),Object(T.jsx)("h2",{children:"Go to Recipes to add some!"})]})]})},K=t(32),V=t(222),H=(t(443),function(e){var n=e.handleChange,t=e.label,c=Object(V.a)(e,["handleChange","label"]);return Object(T.jsxs)("div",{className:"group",children:[Object(T.jsx)("input",Object(i.a)(Object(i.a)({onChange:n},c),{},{className:"form-input"})),t?Object(T.jsx)("label",{className:"".concat(c.value.length?"shrink":""," form-input-label"),children:t}):null]})}),Q=(t(444),function(e){var n=e.searchField,t=e.searchChange;return Object(T.jsx)("div",{className:"searchbox",children:Object(T.jsx)(H,{type:"search",label:"Search Recipes",onChange:t,value:n})})}),X=function(){var e=Object(c.useState)({id:"",name:"",link:"",ingredients:[]}),n=Object(A.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)([{ingredient:"",ingredientRef:null}]),s=Object(A.a)(a,2),o=s[0],j=s[1],b=Object(c.useState)(""),h=Object(A.a)(b,2),f=h[0],p=h[1],O=Object(d.b)((function(e){return e.firebase.auth})).uid;Object(g.useFirestoreConnect)({collection:"users/".concat(O,"/recipes"),storeAs:"recipes"});var m=Object(g.useFirestore)(),v=m.collection("users").doc(O).collection("shoppingList"),x=m.collection("users").doc(O).collection("recipes"),N=Object(d.b)((function(e){return e.firestore.ordered.recipes})),w=[];N&&N.length&&(w=N.filter((function(e){if(null!==e)return e.name.toLowerCase().includes(f.toLowerCase())})));var k=function(e){r((function(n){return Object(i.a)(Object(i.a)({},n),{},Object(K.a)({},e.target.name,e.target.value))}))},R=function(){var e=Object(u.a)(l.a.mark((function e(n){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),window.confirm("Are you sure you want to permanently delete this recipe?")&&(t=n.target.value,x.doc(t).delete().then((function(){P("","Deleted","danger")})).catch((function(e){console.log("error removing document",e)})),p(""));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){r((function(e){return Object(i.a)(Object(i.a)({},e),{},{ingredients:o.map((function(e){return e.ingredient})).filter(Boolean)})}))}),[o]),Object(c.useEffect)((function(){var e=[];if(!t.id)return[{ingredient:"",ingredientRef:null}];e=t.ingredients.map((function(e){return{ingredient:e,ingredientRef:null}})),j(e)}),[t.ingredients.length]),Object(T.jsxs)("div",{className:"page fade-in",children:[Object(T.jsxs)("div",{className:"page-header",children:[Object(T.jsx)("h2",{className:"title",children:"Recipe List"}),""===t.id?null:Object(T.jsxs)("article",{className:"card",children:[Object(T.jsx)("h2",{children:"Edit Recipe"}),Object(T.jsxs)("div",{className:"card-body",children:[Object(T.jsx)(H,{name:"name",label:"Recipe Name",handleChange:k,value:t.name,autoComplete:"off"}),Object(T.jsx)(H,{name:"link",label:"Link",handleChange:k,value:t.link,autoComplete:"off"}),Object(T.jsx)(B,{inputList:o,setInputList:j})]}),Object(T.jsx)(z,{value:"editRecipe",onClick:function(e){e.preventDefault(),x.doc(t.id).delete().then((function(){x.add(t).then((function(e){e.update({id:e.id})})).catch((function(e){console.log("error adding replacing with new recipe",e)}))})).catch((function(e){console.log("error removing old recipe",e)})),P(t.name,"edited","info"),r({id:"",name:"",link:"",ingredients:[]}),j([{ingredient:"",ingredientRef:null}])},children:"Done"})]}),Object(T.jsx)(Q,{searchChange:function(e){p(e.target.value)},searchField:f})]}),w&&w.length?Object(T.jsx)(U,{recipes:w,removeFromRecipes:R,cardButton:function(e){e.preventDefault();var n=e.target.value;N.find((function(e){null!==e.id&&e.id===n&&(v.add(e).then((function(e){e.update({id:e.id})})),P(e.name,"Added to your shopping list","success"))})),p("")},editRecipeCardButton:function(e){e.preventDefault();var n=N.find((function(n){return n.id===e.target.value}));r(n)}}):f.length?Object(T.jsx)("div",{className:"card",children:Object(T.jsx)("h2",{children:"Recipe not found."})}):Object(T.jsxs)("div",{className:"card",children:[Object(T.jsx)("h2",{children:"No recipes in your recipe list."}),Object(T.jsx)("h2",{children:"Go to Add a recipe to add some!"})]})]})};var $=function(){var e=Object(c.useState)([{ingredient:"",ingredientRef:null}]),n=Object(A.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)({name:"",link:"",ingredients:[]}),s=Object(A.a)(a,2),o=s[0],l=s[1],u=Object(g.useFirestore)(),j=Object(d.b)((function(e){return e.firebase.auth})).uid,b=function(e){var n=e.target,t=n.name,c=n.value;l(Object(i.a)(Object(i.a)({},o),{},Object(K.a)({},t,c)))};return Object(c.useEffect)((function(){var e=t.map((function(e,n){return e.ingredient.toLowerCase()})).filter(Boolean);l(Object(i.a)(Object(i.a)({},o),{},{ingredients:e}))}),[t]),Object(T.jsx)("div",{className:"page fade-in",children:Object(T.jsxs)("div",{className:"page-header",children:[Object(T.jsx)("h2",{className:"title",children:"New Recipe"}),Object(T.jsxs)("div",{className:"card",children:[Object(T.jsx)("h3",{children:"Add a new recipe here"}),Object(T.jsx)(H,{name:"name",label:"Recipe Name",handleChange:b,value:o.name}),Object(T.jsx)(H,{name:"link",label:"Link",handleChange:b,value:o.link}),Object(T.jsx)(B,{inputList:t,setInputList:r,label:"Ingredient"}),Object(T.jsx)(z,{value:"AddRecipe",onClick:function(e){e.preventDefault(),u.collection("users").doc(j).collection("recipes").add(o).then((function(e){e.update({id:e.id})})),P(o.name,"Added to Recipes","success"),l({id:Math.random().toString(36).substr(2,9),name:"",link:"",ingredients:[]}),r([{ingredient:"",ingredientRef:null}])},children:"Add Recipe"})]}),Object(T.jsx)("div",{className:"center ph1 tc w-50-ns w-90"})]})})},Y=(t(445),function(){var e=Object(g.useFirebase)(),n=Object(j.g)(),t=Object(d.b)((function(e){return e.firebase.auth})).uid,r=Object(c.useState)({email:"",password:"",error:!1,errorMessage:""}),a=Object(A.a)(r,2),s=a[0],o=a[1],b=s.email,h=s.password,f=s.error,p=s.errorMessage,O=function(){var e=Object(u.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),w.signInWithEmailAndPassword(b,h).then((function(){o({email:"",password:"",error:!1})})).catch((function(e){console.log(e),o(Object(i.a)(Object(i.a)({},s),{},{error:!0,errorMessage:"Email or Password incorrect"}))}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(e){var n=e.target,t=n.value,c=n.name;o(Object(i.a)(Object(i.a)({},s),{},Object(K.a)({},c,t)))};return Object(c.useEffect)((function(){t?n.push("/PANTRI/shoppingList"):o((function(e){return Object(i.a)(Object(i.a)({},e),{},{error:!0})}))}),[t,n]),Object(T.jsxs)("div",{className:"sign-in",children:[Object(T.jsx)("h2",{children:"I already have an account"}),Object(T.jsx)("span",{children:"Sign in with your email and password"}),Object(T.jsxs)("form",{className:"sign-in-form",onSubmit:O,children:[Object(T.jsx)(H,{name:"email",type:"email",handleChange:m,value:b,label:"email"}),Object(T.jsx)(H,{name:"password",type:"password",value:h,handleChange:m,label:"password"}),f?Object(T.jsx)("div",{className:"error",children:p}):null,Object(T.jsxs)("div",{className:"button-container",children:[Object(T.jsx)(z,{type:"submit",children:" Sign in "}),Object(T.jsxs)(z,{type:"button",onClick:function(t){t.preventDefault(),e.login({provider:"google",type:"popup"}).then((function(){n.push("/PANTRI/")}))},isGoogleSignIn:!0,children:[" ","Sign in with Google"," "]})]})]}),Object(T.jsx)(L.b,{type:"button",onClick:function(){n.push("/PANTRI/forgotPassword")},children:"Forgot Password?"})]})}),Z=(t(446),function(){var e=Object(c.useState)({displayName:"",email:"",password:"",confirmPassword:"",error:!1,errorMessage:""}),n=Object(A.a)(e,2),t=n[0],r=n[1],a=t.displayName,s=t.email,o=t.password,b=t.confirmPassword,h=t.error,f=t.errorMessage,p=Object(j.g)(),O=Object(d.b)((function(e){return e.firebase.auth})).uid,g=function(){var e=Object(u.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),o===b){e.next=4;break}return r(Object(i.a)(Object(i.a)({},t),{},{error:!0,errorMessage:"Passwords don't match"})),e.abrupt("return");case 4:w.createUserWithEmailAndPassword(s,o).then((function(e){console.log(e),r({displayName:"",email:"",password:"",confirmPassword:"",error:!1,errorMessage:""})})).catch((function(e){r(Object(i.a)(Object(i.a)({},t),{},{error:!0,errorMessage:e.message}))}));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){O&&p.push("/PANTRI/shoppingList")}),[p,O]);var m=function(e){var n=e.target,c=n.name,a=n.value;r(Object(i.a)(Object(i.a)({},t),{},Object(K.a)({},c,a)))};return Object(T.jsxs)("div",{className:"sign-in",children:[Object(T.jsx)("h2",{className:"title",children:"I do not have a account"}),Object(T.jsx)("span",{children:"Sign up with your email and password"}),Object(T.jsxs)("form",{className:"sign-in-form",onSubmit:g,children:[Object(T.jsx)(H,{type:"text",name:"displayName",value:a,onChange:m,label:"Display Name",required:!0}),Object(T.jsx)(H,{type:"email",name:"email",value:s,onChange:m,label:"Email",required:!0}),Object(T.jsx)(H,{type:"password",name:"password",value:o,onChange:m,label:"Password",required:!0}),Object(T.jsx)(H,{type:"password",name:"confirmPassword",value:b,onChange:m,label:"Confirm Password",required:!0}),h?Object(T.jsx)("div",{className:"error",children:f}):null,Object(T.jsx)(z,{type:"submit",children:"Sign up"})]})]})}),ee=(t(447),function(){return Object(T.jsxs)("div",{className:"sign-in-and-sign-up-page",children:[Object(T.jsx)(Y,{}),Object(T.jsx)(Z,{})]})}),ne=(t(448),function(){return Object(T.jsx)("div",{className:"footer",children:"Made by Joe"})}),te=(t(449),function(){var e=Object(c.useState)(""),n=Object(A.a)(e,2),t=n[0],i=n[1],r=Object(c.useState)(!1),a=Object(A.a)(r,2),s=a[0],o=a[1],l=Object(c.useState)({}),u=Object(A.a)(l,2),d=u[0],b=u[1],h=Object(j.g)();return Object(c.useEffect)((function(){"Check your inbox for password reset"===d&&setTimeout((function(){return h.push("/PANTRI/")}),3e3)}),[d,h]),Object(T.jsx)("div",{className:"page",children:Object(T.jsxs)("div",{className:"sign-in",children:[Object(T.jsx)("h2",{children:"Forgotten Password"}),Object(T.jsx)(H,{name:"email",type:"email",handleChange:function(e){var n=e.target.value;i(n)},value:t,label:"email"}),s?Object(T.jsx)("div",{className:"error",children:d}):null,Object(T.jsxs)(z,{type:"button",onClick:function(e){e.preventDefault(),w.sendPasswordResetEmail(t).then((function(){b("Check your inbox for password reset"),o(!0)})).catch((function(e){"auth/user-not-found"===e.code?b("Email not found! Check your spelling"):"auth/invalid-email"===e.code?b("Invalid email"):b(e.message),o(!0)}))},children:[" ","Reset Password"," "]})]})})});function ie(){var e=Object(d.b)((function(e){return e.firebase.auth})).isEmpty;return Object(c.useEffect)((function(){var e=w.onAuthStateChanged(function(){var e=Object(u.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=5;break}return e.next=3,N(n);case 3:e.sent.onSnapshot();case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());return function(){e()}}),[]),Object(T.jsxs)("div",{className:"app fade-in",children:[Object(T.jsx)(h.a,{}),Object(T.jsx)(E,{}),Object(T.jsx)("div",{className:"body",children:Object(T.jsxs)(j.d,{children:[Object(T.jsx)(j.b,{path:"/PANTRI/recipes",children:e?Object(T.jsx)(j.a,{to:"/PANTRI/"}):Object(T.jsx)(X,{})}),Object(T.jsx)(j.b,{path:"/PANTRI/newrecipe",children:e?Object(T.jsx)(j.a,{to:"/PANTRI/"}):Object(T.jsx)($,{})}),Object(T.jsx)(j.b,{path:"/PANTRI/shoppingList",children:e?Object(T.jsx)(j.a,{to:"/PANTRI/"}):Object(T.jsx)(J,{})}),Object(T.jsx)(j.b,{exact:!0,path:"/PANTRI/",children:Object(T.jsx)(ee,{})}),Object(T.jsx)(j.b,{path:"/PANTRI/forgotpassword",children:Object(T.jsx)(te,{})})]})}),Object(T.jsx)(C.a,{location:"bottom",buttonText:"Gimmie dem cookies",style:{padding:"5px"},children:"We use cookies to store your recipes to save data usage!"}),Object(T.jsx)(ne,{})]})}var ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function re(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(450);var ae=function(){var e=Object(d.b)((function(e){return e.firebase.auth})).isEmpty,n=Object(j.g)();return Object(T.jsx)("header",{className:"slide-in-menu",children:Object(T.jsxs)("nav",{className:"slide-in-nav",children:[Object(T.jsx)("div",{className:"nav-link",onClick:function(){n.push("/PANTRI/shoppingList")},children:"Shopping list"}),Object(T.jsx)("div",{className:"nav-link",onClick:function(){n.push("/PANTRI/recipes")},children:"Recipes"}),Object(T.jsx)("div",{className:"nav-link",onClick:function(){n.push("/PANTRI/newrecipe")},children:"Add a recipe"}),e?Object(T.jsx)("div",{className:"nav-link",onClick:function(){n.push("/PANTRI/")},children:"Sign In"}):Object(T.jsx)("div",{className:"nav-link",onClick:function(){return w.signOut()},children:"Sign Out"})]})})};s.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(d.a,{store:m,children:Object(T.jsx)(g.ReactReduxFirebaseProvider,Object(i.a)(Object(i.a)({},x),{},{children:Object(T.jsx)(L.a,{children:Object(T.jsx)(S.a,{MenuComponent:ae,children:Object(T.jsx)(ie,{})})})}))})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/PANTRI",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/PANTRI","/service-worker.js");ce?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):re(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):re(n,e)}))}}()}},[[451,1,2]]]);
//# sourceMappingURL=main.f331a920.chunk.js.map