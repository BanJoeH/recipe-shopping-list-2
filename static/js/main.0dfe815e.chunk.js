(this["webpackJsonprecipeshoppinglist2.0"]=this["webpackJsonprecipeshoppinglist2.0"]||[]).push([[0],{29:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),c=n(23),a=n.n(c),s=(n(29),n(8)),l=n(4),o=n(15),d=n(2),b=n(0);var u=function(e){var t=e.recipe,n=e.button,i=e.buttonText,r=e.ingredientButton,c=e.removeFromRecipes,a=e.recipeIndex,s=e.editRecipe,l=window.location.pathname;return Object(b.jsxs)("article",{className:"center mw6 br3 bg-nearwhite w-90 w-80-m w-50-ns ma2 hidden shadow-4 ttc ba b--black-10 mv4 ",children:[Object(b.jsxs)("div",{className:"bg-dark-gray ph4 br3 flex justify-between items-center",children:[Object(b.jsx)("h2",{className:"white dib mr3",children:t.name}),""===t.link?null:Object(b.jsx)("a",{className:"link dim white dib mr3",target:"_blank",rel:"noopener noreferrer",href:t.link,children:"Recipe link"}),Object(b.jsxs)("div",{children:["/recipes"===l?Object(b.jsx)("button",{value:t.id,onClick:function(e){return s(e)},className:"link bn white pointer bg-transparent dib mr3",children:"Edit"}):null,Object(b.jsx)("button",{href:"#",value:t.id+"-"+a,onClick:function(e){return c(e)},className:" link bn white pointer bg-transparent dib mr3",children:"X"})]})]}),Object(b.jsx)("div",{className:"pa3 bt b--black-10 flex",children:Object(b.jsxs)("form",{className:"bn ph1 tc center w-80 ",children:[t.ingredients.map((function(e,n){return Object(b.jsxs)("div",{className:"items-center mb1 bb b--light-silver flex justify-between",children:[Object(b.jsx)("div",{htmlFor:e,className:"lh-copy",children:e}),"/"===l?Object(b.jsx)("button",{className:"mr2 ba ph1   b--moon-gray gray br2  tc bg-white hover-bg-near-white pointer",onClick:r,name:a,value:e+n,children:"X"}):null]},"".concat(e,"-").concat(t.id,"-").concat(n))})),t.ingredients.length>0?Object(b.jsx)("button",{className:"pv2 mb1 ph3 w-100 bg-white pointer hover-bg-near-white center tc ba b--moon-gray br2 shadow-4",onClick:n,value:t.id+"-"+a,children:i}):null]})})]})},p=function(e){var t=e.inputList,n=e.setInputList,r=function(){n([].concat(Object(s.a)(t),[{ingredient:"",ingredientRef:null}]))};return Object(i.useEffect)((function(){t[t.length-1].ingredientRef&&t[t.length-1].ingredientRef.focus()}),[t.length]),t.map((function(e,i){return Object(b.jsxs)("div",{className:"flex flex-row w-50-ns mv1 w-90 center b--gray ba bg-transparent br2  ",children:[Object(b.jsx)("input",{value:e.ingredient,name:"ingredient",placeholder:"Ingredient",onChange:function(e){return function(e,i){var r=e.target,c=r.name,a=r.value,l=Object(s.a)(t);l[i][c]=a,n(l)}(e,i)},onKeyDown:function(e){"Enter"===e.key&&r()},ref:function(t){return e.ingredientRef=t},className:"w-100 pr-5 pv2 br2 ph1 flex-grow-2hover-bg-light-gray bn input-reset ",autoComplete:"off"}),Object(b.jsxs)("div",{className:"flex",children:[t.length-1===i&&Object(b.jsx)("button",{onClick:r,className:"ba bg-transparent pointer b--light-silver br2 hover-bg-light-gray ",children:"+"}),1!==t.length&&Object(b.jsx)("button",{onClick:function(){return function(e){var i=Object(s.a)(t);i.splice(e,1),n(i)}(i)},className:"ba bg-transparent pointer b--light-silver br2 hover-bg-light-gray ",children:"x"})]})]},i)}))},h=function(e){var t=e.setOddBits,n=e.oddBits,r=Object(i.useState)(n.map((function(e){return{ingredient:e,ingredientRef:null}}))),c=Object(l.a)(r,2),a=c[0],s=c[1];return Object(i.useEffect)((function(){var e=a.map((function(e,t){return e.ingredient}));t(e)}),[a]),Object(b.jsxs)("article",{className:"center mw6 br3 ttc bg-nearwhite w-90 w-80-m w-50-ns hidden shadow-4 ba b--black-10 mv4",children:[Object(b.jsx)("div",{className:"bg-dark-gray ph4 br3 flex br--bottom justify-between items-center",children:Object(b.jsx)("h2",{className:"white dib mr3",children:"Odd Bits"})}),Object(b.jsx)("div",{className:"pa3 bt flex flex-column b--black-10 center flex",children:Object(b.jsx)(p,{inputList:a,setInputList:s})})]})},j=function(e){var t=e.className,n=e.button,i=e.value,r=e.inner;return Object(b.jsx)("button",{className:"pv1 mb1 ph3 w-100 pointer bg-white hover-bg-near-white center tc ba b--moon-gray br2 shadow-4 ".concat(t),onClick:n,value:i,children:r})},m=n(9),g=n.n(m);var f=function(e){var t=e.recipes,n=e.cardButton,i=e.ingredientButton,r=e.oddBits,c=e.setOddBits,a=e.sortShopping,s=t.map((function(e){return e.id}));return Object(b.jsx)("div",{className:"center pb6",children:Object(b.jsxs)(g.a,{children:[Object(b.jsx)("h2",{className:"tc w-90 w-80-m w-50-ns mw6 center pv3 bg-nearwhite shadow-4 br3",children:"Shopping List"}),s.includes("sort")||0===t.length?null:Object(b.jsx)("div",{className:"tc w-90 w-80-m w-50-ns mw6 center",children:Object(b.jsx)(j,{className:" pointer pv3",value:"AddRecipe",inner:"Sort shopping list",button:a})}),Object(b.jsx)(h,{setOddBits:c,oddBits:r}),0===t.length?Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{className:"tc center",children:"No recipes in your shopping list."}),Object(b.jsx)("h4",{className:"tc center",children:"Go to Recipes to add some!"})]}):Object(b.jsx)(g.a,{children:Object(b.jsx)("div",{className:"flex flex-wrap",children:t.map((function(e,t){return Object(b.jsx)(u,{removeFromRecipes:n,recipe:e,button:n,buttonText:"Done",ingredientButton:i,recipeIndex:t},e+t)}))})})]})})},O=n(17),v=n(14),w=function(e){var t=e.searchField,n=e.searchChange;return Object(b.jsx)("div",{className:"pa2 tc w-100 center pv2  bg-nearwhite shadow-4 br3",children:Object(b.jsx)("input",{className:"ma1 pa2 w-80-m input-reset ba bg-transparent br2 hover-bg-light-gray w-50-ns w-90",type:"search",placeholder:"Search Recipes",onChange:n,value:t})})};var x=function(e){var t=e.recipes,n=e.cardButton,r=e.removeFromRecipes,c=e.onSearchChange,a=e.searchField,s=e.setRecipes,o=Object(i.useState)({id:"",name:"",link:"",ingredients:[]}),d=Object(l.a)(o,2),h=d[0],m=d[1],f=Object(i.useState)([{ingredient:"",ingredientRef:null}]),x=Object(l.a)(f,2),N=x[0],S=x[1],k=function(e){m((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(O.a)({},e.target.name,e.target.value))}))},y=function(e){e.preventDefault();var n=t.find((function(t){return t.id===e.target.value}));m(n)};return Object(i.useEffect)((function(){m((function(e){return Object(v.a)(Object(v.a)({},e),{},{ingredients:N.map((function(e){return e.ingredient})).filter(Boolean)})}))}),[N]),Object(i.useEffect)((function(){var e=[];if(""===h.id)return[{ingredient:"",ingredientRef:null}];e=h.ingredients.map((function(e){return{ingredient:e,ingredientRef:null}})),S(e)}),[h.ingredients.length]),Object(b.jsx)("div",{className:"pb6",children:Object(b.jsxs)(g.a,{children:[Object(b.jsx)("h2",{className:"tc w-90 w-80-m w-50-ns mw6 center pv3 bg-nearwhite shadow-4 br3",children:"Recipe List"}),""===h.id?null:Object(b.jsxs)("article",{className:"center w-90 w-80-m w-50-ns mw6 bg-nearwhite shadow-4 br3 hidden ba b--black-10 pa2 mv4",children:[Object(b.jsx)("h2",{className:"tc w-90 w-80-m w-50-ns mw6 center mv1",children:"Edit Recipe"}),Object(b.jsxs)("div",{className:"tc pa1 ph2-ns w-100 ",children:[Object(b.jsxs)("div",{className:"ph2",children:[Object(b.jsx)("input",{name:"name",placeholder:"Recipe Name",className:" ma1 ph1 pv2 input-reset ba bg-transparent br2 hover-bg-light-gray w-50-ns w-90  ",onChange:k,value:h.name,autoComplete:"off"}),Object(b.jsx)("input",{name:"link",placeholder:"Link",className:" ma1 ph1 pv2 input-reset ba bg-transparent br2 hover-bg-light-gray w-50-ns w-90 ",onChange:k,value:h.link,autoComplete:"off"})]}),Object(b.jsx)(p,{inputList:N,setInputList:S})]}),Object(b.jsx)("div",{className:"center ph1 tc w-50-ns w-90",children:Object(b.jsx)(j,{className:"pv3 w-90",value:"editRecipe",inner:"Done",button:function(e){e.preventDefault(),s(t.map((function(e){return h.id===e.id?h:e}))),m({id:"",name:"",link:"",ingredients:[]}),S([{ingredient:"",ingredientRef:null}])}})})]}),Object(b.jsx)("div",{className:"center mw6 br3 bg-nearwhite w-90 w-80-m w-50-ns ma2 hidden shadow-4 ttc ba b--black-10 mv4",children:Object(b.jsx)("div",{className:"",children:Object(b.jsx)(w,{searchChange:c,searchField:a})})}),t.length>0?Object(b.jsx)("div",{className:"flex flex-wrap",children:t.map((function(e,t){return Object(b.jsx)(u,{recipeIndex:t,removeFromRecipes:r,recipe:e,button:n,buttonText:"Add To Shopping List",editRecipe:y},e+t)}))}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{className:"tc center",children:"No recipes in your recipe list."}),Object(b.jsx)("h4",{className:"tc center",children:"Go to Add a recipe to add some!"})]})]})})},N=n(11),S=n.n(N);var k=function(e){var t=e.setRecipes,n=e.recipes,r=Object(i.useState)(""),c=Object(l.a)(r,2),a=c[0],o=c[1],d=Object(i.useState)(""),u=Object(l.a)(d,2),h=u[0],m=u[1],f=Object(i.useState)([]),O=Object(l.a)(f,2),v=O[0],w=O[1],x=Object(i.useState)([{ingredient:"",ingredientRef:null}]),S=Object(l.a)(x,2),k=S[0],y=S[1];return Object(i.useEffect)((function(){var e=k.map((function(e,t){return e.ingredient.toLowerCase()})).filter(Boolean);w(e)}),[k]),Object(b.jsx)("div",{className:"center pb6",children:Object(b.jsxs)(g.a,{children:[Object(b.jsx)("h1",{className:"tc mw9 mw6-ns center pv3  bg-nearwhite shadow-4 br3",children:"New Recipe"}),Object(b.jsxs)("article",{className:"center mw9 mw6-ns bg-nearwhite shadow-4 br3 hidden ba b--black-10 pa2 mv4",children:[Object(b.jsxs)("div",{className:"tc pa1 ph2-ns w-100 ",children:[Object(b.jsxs)("div",{className:"ph2",children:[Object(b.jsx)("input",{name:"recipeName",placeholder:"Recipe Name",className:" ma1 ph1 pv2 input-reset ba bg-transparent br2 hover-bg-light-gray w-50-ns w-90  ",onChange:function(e){return o(e.target.value)},value:a,autoComplete:"off"}),Object(b.jsx)("input",{name:"recipeLink",placeholder:"Link",className:" ma1 ph1 pv2 input-reset ba bg-transparent br2 hover-bg-light-gray w-50-ns w-90 ",onChange:function(e){return m(e.target.value)},value:h,autoComplete:"off"})]}),Object(b.jsx)(p,{inputList:k,setInputList:y})]}),Object(b.jsx)("div",{className:"center ph1 tc w-50-ns w-90",children:Object(b.jsx)(j,{className:"pv3 w-90",value:"AddRecipe",inner:"Add Recipe",button:function(e){e.preventDefault(),t([].concat(Object(s.a)(n),[{id:Math.random().toString(36).substr(2,9),name:a.toLowerCase(),link:h.toLowerCase(),ingredients:v}])),N.store.addNotification({title:"".concat(a," added to recipes"),message:"Success",type:"success",insert:"bottom",container:"bottom-center",dismiss:{duration:2e3}}),o(""),m(""),w([]),y([{ingredient:"",ingredientRef:null}])}})})]})]})})};n(48);function y(){var e=Object(i.useState)(JSON.parse(localStorage.getItem("storedRecipes"))||[]),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)(JSON.parse(localStorage.getItem("storedShopping"))||[]),a=Object(l.a)(c,2),u=a[0],p=a[1],h=Object(i.useState)(JSON.parse(localStorage.getItem("storedOdd"))||[""]),j=Object(l.a)(h,2),m=j[0],O=j[1],v=Object(i.useState)(""),w=Object(l.a)(v,2),y=w[0],R=w[1];Object(i.useEffect)((function(){localStorage.setItem("storedRecipes",JSON.stringify(n)),localStorage.setItem("storedShopping",JSON.stringify(u)),localStorage.setItem("storedOdd",JSON.stringify(m))}),[n,u,m]);var C=n.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())}));return Object(b.jsx)(g.a,{transitionDuration:"1000",children:Object(b.jsxs)("div",{className:"flex flex-column justify-between min-vh-100 bg",children:[Object(b.jsx)(S.a,{}),Object(b.jsx)(o.a,{children:Object(b.jsxs)("div",{className:"pb-3",children:[Object(b.jsx)("header",{className:"bg-dark-gray w-100 ph3 pv3 pv4-ns ph4-m ph5-l",children:Object(b.jsxs)("nav",{className:"f6 fw6 ttu tracked tc",children:[Object(b.jsx)(o.b,{className:"link dim white pa2 dib mr3",to:"/",children:"Shopping list"}),Object(b.jsx)(o.b,{className:"link dim white pa2 dib mr3",to:"/recipes",children:"Recipes"}),Object(b.jsx)(o.b,{className:"link dim white pa2 dib mr3",to:"/newrecipe",children:"Add a recipe"})]})}),Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{path:"/recipes",children:Object(b.jsx)(x,{recipes:C,cardButton:function(e){e.preventDefault(),JSON.parse(JSON.stringify(C)).forEach((function(t,n){t.id+"-"+n===e.target.value&&(p([].concat(Object(s.a)(u),[t])),N.store.addNotification({title:"".concat(t.name),message:"added to Shopping List",type:"success",insert:"bottom",container:"bottom-center",dismiss:{duration:2e3}}))})),R("")},removeFromRecipes:function(e){if(e.preventDefault(),window.confirm("Are you sure you want to permanently delete this recipe?")){var t=e.target.value.split("-")[0],i=n.filter((function(e){return e.id!==t}));r(i),R("")}},onSearchChange:function(e){R(e.target.value)},searchField:y,setRecipes:r})}),Object(b.jsx)(d.a,{path:"/newrecipe",children:Object(b.jsx)(k,{setRecipes:r,recipes:n})}),Object(b.jsx)(d.a,{path:"/",children:Object(b.jsx)(f,{sortShopping:function(e){e.preventDefault();var t=u.map((function(e,t){return e.ingredients})).flat().sort(),n=Object(s.a)(new Set(t)).map((function(e){return[e,t.filter((function(t){return t===e})).length]})).map((function(e,t){return[e[0]+"  X"+e[1]]}));p([{id:"sort",name:"Shopping List",ingredients:n,link:""}].concat(Object(s.a)(u)))},recipes:u,cardButton:function(e){e.preventDefault();var t=u.filter((function(t,n){return t.id+"-"+n!==e.target.value}));p(t),R("")},ingredientButton:function(e){e.preventDefault();var t=u.map((function(t,n){if(n===+e.target.name){var i=t.ingredients.filter((function(t,n){return t+n!==e.target.value}));return t.ingredients=i,t}return t}));p(t)},oddBits:m,setOddBits:O})})]})]})}),Object(b.jsx)("div",{className:"bg-dark-gray h3 pa3 w-100 tc white",children:"Made by Joe"})]})})}n(57);a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.0dfe815e.chunk.js.map