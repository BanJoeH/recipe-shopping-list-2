(this["webpackJsonprecipeshoppinglist2.0"]=this["webpackJsonprecipeshoppinglist2.0"]||[]).push([[0],{27:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(21),a=n.n(i),s=(n(27),n(8)),l=n(6),d=n(13),o=n(2),b=n(0),j=function(e){var t=e.className,n=e.button,c=e.value,r=e.inner;return Object(b.jsx)("button",{className:"pv1 mb1 ph3 w-90 bg-white hover-bg-near-white center tc ba b--moon-gray br2 shadow-4 ".concat(t),onClick:n,value:c,children:r})};var u=function(e){var t=e.recipe,n=e.button,c=e.buttonText,r=e.ingredientButton,i=e.removeFromRecipes,a=e.className,s=e.recipeIndex;return Object(b.jsxs)("article",{className:"center mw6 br3 w-90 w-80-m w-50-ns ma2 pa2 ph4 hidden shadow-4 ttc ba b--black-10 mv4 ",children:[Object(b.jsxs)("div",{className:"bg-dark-gray ph3 br--bottom flex justify-between items-center",children:[Object(b.jsx)("h2",{className:"white dib mr3",children:t.name}),""===t.link?Object(b.jsx)("div",{}):Object(b.jsx)("a",{className:"link dim white dib mr3",target:"_blank",rel:"noopener noreferrer",href:t.link,children:"Recipe link"}),Object(b.jsx)("button",{href:"#",value:t.id+"-"+s,onClick:function(e){return i(e)},className:" link bn white bg-transparent dib mr3",children:"X"})]}),Object(b.jsx)("div",{className:"pa3 bt b--black-10 flex",children:Object(b.jsxs)("form",{className:"bn ph1 center w-80 ",children:[t.ingredients.map((function(e,n){return Object(b.jsxs)("div",{className:"items-center mb1 bb b--light-silver flex justify-between",children:[Object(b.jsx)("div",{htmlFor:e,className:"lh-copy",children:e}),Object(b.jsx)("button",{className:"mr2 ba ph1 ".concat(a,"  b--moon-gray gray br2  tc bg-white hover-bg-near-white pointer"),onClick:r,name:s,value:e,children:"X"})]},e+t.id)})),t.ingredients.length>0?Object(b.jsx)("button",{className:"pv1 mb1 ph3 w-90 bg-white hover-bg-near-white center tc ba b--moon-gray br2 shadow-4",onClick:n,value:t.id+"-"+s,children:c}):Object(b.jsx)("div",{})]})})]})},h=function(e){var t=e.inputList,n=e.setInputList,r=function(){n([].concat(Object(s.a)(t),[{ingredient:"",ingredientRef:null}]))};return Object(c.useEffect)((function(){t[t.length-1].ingredientRef&&t[t.length-1].ingredientRef.focus()}),[t]),Object(b.jsx)("div",{className:" w-100 center",children:t.map((function(e,c){return Object(b.jsxs)("div",{className:"flex flex-row w-50-ns center ma1 pa1 input-reset ba bg-transparent br2  ",children:[Object(b.jsx)("input",{value:e.ingredient,name:"ingredient",placeholder:"Ingredient",onChange:function(e){return function(e,c){var r=e.target,i=r.name,a=r.value,l=Object(s.a)(t);l[c][i]=a,n(l)}(e,c)},onKeyDown:function(e){"Enter"===e.key&&r()},ref:function(t){return e.ingredientRef=t},className:"w-100 pr-5 flex-grow-2hover-bg-light-gray bn input-reset "}),Object(b.jsxs)("div",{className:"flex",children:[t.length-1===c&&Object(b.jsx)("button",{onClick:r,className:"ba bg-transparent br2 hover-bg-light-gray ",children:"+"}),1!==t.length&&Object(b.jsx)("button",{onClick:function(){return function(e){var c=Object(s.a)(t);c.splice(e,1),n(c)}(c)},className:"ba bg-transparent br2 hover-bg-light-gray ",children:"x"})]})]},c)}))})},p=function(e){var t=e.setOddBits,n=e.oddBits,r=Object(c.useState)([{ingredient:"",ingredientRef:null}]),i=Object(l.a)(r,2),a=i[0],s=i[1];return Object(c.useEffect)((function(){var e=[];if(""===n[0])return[[{ingredient:"",ingredientRef:null}]];e=n.map((function(e){return{ingredient:e,ingredientRef:null}})),s(e);var c=a.map((function(e,t){return e.ingredient}));t(c)}),[a,n]),Object(b.jsxs)("article",{className:"center mw6 br3 ttc hidden shadow-4 ba b--black-10 mv4",children:[Object(b.jsx)("div",{className:"bg-dark-gray ph3 flex br--bottom justify-between items-center",children:Object(b.jsx)("h2",{className:"white dib mr3",children:"Odd Bits"})}),Object(b.jsx)("div",{className:"pa3 bt b--black-10 center flex",children:Object(b.jsx)(h,{inputList:a,setInputList:s})})]})};var m=function(e){var t=e.recipes,n=e.cardButton,c=e.ingredientButton,r=e.oddBits,i=e.setOddBits;return Object(b.jsxs)("div",{className:"center pb6",children:[Object(b.jsx)("h2",{className:"tc",children:"Shopping List"}),Object(b.jsx)(p,{setOddBits:i,oddBits:r}),0===t.length?Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{className:"tc center",children:"No recipes in your shopping list."}),Object(b.jsx)("h4",{className:"tc center",children:"Go to Recipes to add some!"})]}):Object(b.jsx)("div",{className:"flex flex-wrap",children:t.map((function(e,t){return Object(b.jsx)(u,{removeFromRecipes:n,recipe:e,button:n,buttonText:"Done",ingredientButton:c,recipeIndex:t},e+t)}))})]})},g=function(e){var t=e.searchField,n=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"ma1 pa2 w-80-m input-reset ba bg-transparent br2 hover-bg-light-gray w-50-ns w-90",type:"search",placeholder:"Search Recipes",onChange:n,value:t})})};var O=function(e){var t=e.recipes,n=e.cardButton,c=e.removeFromRecipes,r=e.onSearchChange,i=e.searchField;return Object(b.jsxs)("div",{className:"pb6",children:[Object(b.jsx)("h2",{className:"tc",children:"Recipe List"}),Object(b.jsx)("div",{className:"tc w-100",children:Object(b.jsx)("div",{className:"tc center w-50-ns w-100",children:Object(b.jsx)(g,{searchChange:r,searchField:i})})}),t.length>0?Object(b.jsx)("div",{className:"flex flex-wrap",children:t.map((function(e,t){return Object(b.jsx)(u,{recipeIndex:t,removeFromRecipes:c,recipe:e,button:n,buttonText:"Add To Shopping List",className:"dn"},e+t)}))}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{className:"tc center",children:"No recipes in your recipe list."}),Object(b.jsx)("h4",{className:"tc center",children:"Go to Add a recipe to add some!"})]})]})},f=n(10),v=n.n(f);var x=function(e){var t=e.setRecipes,n=e.recipes,r=Object(c.useState)(""),i=Object(l.a)(r,2),a=i[0],d=i[1],o=Object(c.useState)(""),u=Object(l.a)(o,2),p=u[0],m=u[1],g=Object(c.useState)([]),O=Object(l.a)(g,2),v=O[0],x=O[1],N=Object(c.useState)([{ingredient:"",ingredientRef:null}]),w=Object(l.a)(N,2),y=w[0],S=w[1];return Object(c.useEffect)((function(){var e=y.map((function(e,t){return e.ingredient})).filter(Boolean);x(e)}),[y]),Object(b.jsxs)("div",{className:"center pb6",children:[Object(b.jsx)("h2",{className:"tc",children:"New Recipe"}),Object(b.jsxs)("article",{className:"center mw9 mw6-ns shadow-4 br3 hidden ba b--black-10 pa2 mv4",children:[Object(b.jsxs)("div",{className:"tc pa1 ph2-ns w-100 ",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{name:"recipeName",placeholder:"Recipe Name",className:" ma1 pa1 input-reset ba bg-transparent br2 hover-bg-light-gray w-50-ns w-90  ",onChange:function(e){return d(e.target.value)},value:a}),Object(b.jsx)("input",{name:"recipeLink",placeholder:"Link",className:" ma1 pa1 input-reset ba bg-transparent br2 hover-bg-light-gray w-50-ns w-90 ",onChange:function(e){return m(e.target.value)},value:p})]}),Object(b.jsx)(h,{setNewRecipeIngredients:x,inputList:y,setInputList:S})]}),Object(b.jsx)("div",{className:"center w-80",children:Object(b.jsx)(j,{className:" pv2 w-90",value:"AddRecipe",inner:"Add Recipe",button:function(e){e.preventDefault(),t([].concat(Object(s.a)(n),[{id:n.length,name:a,link:p,ingredients:v}])),f.store.addNotification({title:"".concat(a," added to recipes"),message:"Success",type:"success",insert:"bottom",container:"bottom-center",dismiss:{duration:2e3}}),d(""),m(""),x([]),S([{ingredient:"",ingredientRef:null}])}})})]})]})};n(45);function N(){var e=Object(c.useState)(JSON.parse(localStorage.getItem("storedRecipes"))||[]),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(JSON.parse(localStorage.getItem("storedShopping"))||[]),a=Object(l.a)(i,2),j=a[0],u=a[1],h=Object(c.useState)(JSON.parse(localStorage.getItem("storedOdd"))||["cheese"]),p=Object(l.a)(h,2),g=p[0],N=p[1],w=Object(c.useState)(""),y=Object(l.a)(w,2),S=y[0],k=y[1];Object(c.useEffect)((function(){localStorage.setItem("storedRecipes",JSON.stringify(n)),localStorage.setItem("storedShopping",JSON.stringify(j)),localStorage.setItem("storedOdd",JSON.stringify(g))}),[n,j,g]);var R=n.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())}));return Object(b.jsxs)("div",{className:"relative min-h-90",children:[Object(b.jsx)(v.a,{}),Object(b.jsx)(d.a,{children:Object(b.jsxs)("div",{className:"pb-3",children:[Object(b.jsx)("header",{className:"bg-dark-gray w-100 ph3 pv3 pv4-ns ph4-m ph5-l",children:Object(b.jsxs)("nav",{className:"f6 fw6 ttu tracked tc",children:[Object(b.jsx)(d.b,{className:"link dim white pa2 dib mr3",to:"/",children:"Shopping list"}),Object(b.jsx)(d.b,{className:"link dim white pa2 dib mr3",to:"/recipes",children:"Recipes"}),Object(b.jsx)(d.b,{className:"link dim white pa2 dib mr3",to:"/newrecipe",children:"Add a recipe"})]})}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/recipes",children:Object(b.jsx)(O,{recipes:R,cardButton:function(e){e.preventDefault(),JSON.parse(JSON.stringify(R)).forEach((function(t,n){t.id+"-"+n===e.target.value&&(u([].concat(Object(s.a)(j),[t])),f.store.addNotification({title:"".concat(t.name),message:"added to Shopping List",type:"success",insert:"bottom",container:"bottom-center",dismiss:{duration:2e3}}))})),k("")},removeFromRecipes:function(e){if(e.preventDefault(),window.confirm("Are you sure you want to permanently delete this recipe?")){var t=e.target.value.split("-")[0],c=n.filter((function(e){if(e.id!==+t)return e}));r(c),k("")}},onSearchChange:function(e){k(e.target.value)},searchField:S})}),Object(b.jsx)(o.a,{path:"/newrecipe",children:Object(b.jsx)(x,{setRecipes:r,recipes:n})}),Object(b.jsx)(o.a,{path:"/",children:Object(b.jsx)(m,{recipes:j,cardButton:function(e){e.preventDefault();var t=j.filter((function(t,n){if(t.id+"-"+n!==e.target.value)return t}));u(t),k("")},ingredientButton:function(e){e.preventDefault();var t=j.map((function(t,n){if(console.log(e.target),n===+e.target.name){var c=t.ingredients.filter((function(t){if(t!==e.target.value)return t}));return t.ingredients=c,t}return t}));u(t)},oddBits:g,setOddBits:N})})]})]})}),Object(b.jsx)("div",{className:"bg-dark-gray absolute bottom-0 h3 pa3 w-100 tc white",children:"Made by Joe"})]})}n(51);a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.4b8c514b.chunk.js.map