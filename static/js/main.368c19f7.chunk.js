(this["webpackJsonprecipeshoppinglist2.0"]=this["webpackJsonprecipeshoppinglist2.0"]||[]).push([[0],{27:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(21),s=n.n(r),a=(n(27),n(8)),l=n(7),o=n(13),d=n(2),b=n(0),j=function(e){var t=e.className,n=e.button,c=e.value,i=e.inner;return Object(b.jsx)("button",{className:"pv1 mb1 ph3 w-90 bg-white hover-bg-near-white center tc ba b--moon-gray br2 shadow-4 ".concat(t),onClick:n,value:c,children:i})};var u=function(e){var t=e.recipe,n=e.button,c=e.buttonText,i=e.ingredientButton,r=e.removeFromRecipes,s=e.className,a=e.recipeIndex;return Object(b.jsxs)("article",{className:"center mw6 br3 hidden shadow-4 ttc ba b--black-10 mv4 ",children:[Object(b.jsxs)("div",{className:"bg-dark-gray ph3 br--bottom flex justify-between items-center",children:[Object(b.jsx)("h2",{className:"white dib mr3",children:t.name}),""===t.link?Object(b.jsx)("div",{}):Object(b.jsx)("a",{className:"link dim white dib mr3",target:"_blank",rel:"noopener noreferrer",href:t.link,children:"Recipe link"}),Object(b.jsx)("button",{href:"#",value:t.id+a,onClick:function(e){return r(e)},className:" link bn white bg-transparent dib mr3",children:"Delete"})]}),Object(b.jsx)("div",{className:"pa3 bt b--black-10 flex",children:Object(b.jsxs)("form",{className:"bn ph1 center w-80 ",children:[t.ingredients.map((function(e,n){return Object(b.jsxs)("div",{className:"items-center mb1 bb b--light-silver flex justify-between",children:[Object(b.jsx)("div",{htmlFor:e,className:"lh-copy",children:e}),Object(b.jsx)("button",{className:"mr2 ba ph1 ".concat(s,"  b--moon-gray gray br2  tc bg-white hover-bg-near-white pointer"),onClick:i,name:a,value:e,children:"X"})]},e+t.id)})),t.ingredients.length>0?Object(b.jsx)("button",{className:"pv1 mb1 ph3 w-90 bg-white hover-bg-near-white center tc ba b--moon-gray br2 shadow-4",onClick:n,value:t.id+a,children:c}):Object(b.jsx)("div",{})]})})]})},p=function(e){var t=e.inputList,n=e.setInputList,i=function(){n([].concat(Object(a.a)(t),[{ingredient:"",ingredientRef:null}]))};return Object(c.useEffect)((function(){t[t.length-1].ingredientRef&&t[t.length-1].ingredientRef.focus()}),[t.length]),Object(b.jsx)("div",{className:" w-100 center",children:t.map((function(e,c){return Object(b.jsxs)("div",{className:"flex flex-row w-50-ns center ma1 pa1 input-reset ba bg-transparent br2  ",children:[Object(b.jsx)("input",{value:e.ingredient,name:"ingredient",placeholder:"Ingredient",onChange:function(e){return function(e,c){var i=e.target,r=i.name,s=i.value,l=Object(a.a)(t);l[c][r]=s,n(l)}(e,c)},onKeyDown:function(e){"Enter"===e.key&&i()},ref:function(t){return e.ingredientRef=t},className:"w-100 pr-5 flex-grow-2hover-bg-light-gray bn input-reset "}),Object(b.jsxs)("div",{className:"flex",children:[t.length-1===c&&Object(b.jsx)("button",{onClick:i,className:"ba bg-transparent br2 hover-bg-light-gray ",children:"+"}),1!==t.length&&Object(b.jsx)("button",{onClick:function(){return function(e){var c=Object(a.a)(t);c.splice(e,1),n(c)}(c)},className:"ba bg-transparent br2 hover-bg-light-gray ",children:"x"})]})]},c)}))})},h=function(e){var t=e.setOddBits,n=e.oddBits,i=Object(c.useState)(n.map((function(e){return{ingredient:e,ingredientRef:null}}))||[{ingredient:"",ingredientRef:null}]),r=Object(l.a)(i,2),s=r[0],a=r[1];return Object(c.useEffect)((function(){var e=s.map((function(e,t){return e.ingredient}));t(e)}),[s]),Object(b.jsxs)("article",{className:"center mw6 br3 ttc hidden shadow-4 ba b--black-10 mv4",children:[Object(b.jsx)("div",{className:"bg-dark-gray ph3 flex br--bottom justify-between items-center",children:Object(b.jsx)("h2",{className:"white dib mr3",children:"Odd Bits"})}),Object(b.jsx)("div",{className:"pa3 bt b--black-10 center flex",children:Object(b.jsx)(p,{inputList:s,setInputList:a})})]})};var m=function(e){var t=e.recipes,n=e.cardButton,c=e.ingredientButton,i=e.oddBits,r=e.setOddBits;return Object(b.jsxs)("div",{className:"center pb6",children:[Object(b.jsx)("h2",{className:"tc",children:"Shopping List"}),Object(b.jsx)(h,{setOddBits:r,oddBits:i}),0===t.length?Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{className:"tc center",children:"No recipes in your shopping list."}),Object(b.jsx)("h4",{className:"tc center",children:"Go to Recipes to add some!"})]}):t.map((function(e,t){return Object(b.jsx)(u,{removeFromRecipes:n,recipe:e,button:n,buttonText:"Done",ingredientButton:c,recipeIndex:t},e+t)}))]})};var g=function(e){var t=e.recipes,n=e.cardButton,c=e.removeFromRecipes;return Object(b.jsxs)("div",{className:"pb6",children:[Object(b.jsx)("h2",{className:"tc",children:"Recipe List"}),t.length>0?t.map((function(e,t){return Object(b.jsx)(u,{recipeIndex:t,removeFromRecipes:c,recipe:e,button:n,buttonText:"Add To Shopping List",className:"dn"},e+t)})):Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{className:"tc center",children:"No recipes in your recipe list."}),Object(b.jsx)("h4",{className:"tc center",children:"Go to Add a recipe to add some!"})]})]})},O=n(10),f=n.n(O);var v=function(e){var t=e.setRecipes,n=e.recipes,i=Object(c.useState)(""),r=Object(l.a)(i,2),s=r[0],o=r[1],d=Object(c.useState)(""),u=Object(l.a)(d,2),h=u[0],m=u[1],g=Object(c.useState)([]),f=Object(l.a)(g,2),v=f[0],x=f[1],N=Object(c.useState)([{ingredient:"",ingredientRef:null}]),w=Object(l.a)(N,2),k=w[0],S=w[1];return Object(c.useEffect)((function(){var e=k.map((function(e,t){return e.ingredient})).filter(Boolean);x(e)}),[k]),Object(b.jsxs)("div",{className:"center pb6",children:[Object(b.jsx)("h2",{className:"tc",children:"New Recipe"}),Object(b.jsxs)("article",{className:"center mw9 mw6-ns shadow-4 br3 hidden ba b--black-10 pa2 mv4",children:[Object(b.jsxs)("div",{className:"tc pa1 ph2-ns w-100 ",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{name:"recipeName",placeholder:"Recipe Name",className:" ma1 pa1 input-reset ba bg-transparent br2 hover-bg-light-gray w-50-ns w-90  ",onChange:function(e){return o(e.target.value)},value:s}),Object(b.jsx)("input",{name:"recipeLink",placeholder:"Link",className:" ma1 pa1 input-reset ba bg-transparent br2 hover-bg-light-gray w-50-ns w-90 ",onChange:function(e){return m(e.target.value)},value:h})]}),Object(b.jsx)(p,{setNewRecipeIngredients:x,inputList:k,setInputList:S})]}),Object(b.jsx)("div",{className:"center w-80",children:Object(b.jsx)(j,{className:" pv2 w-90",value:"AddRecipe",inner:"Add Recipe",button:function(e){e.preventDefault(),t([].concat(Object(a.a)(n),[{id:n.length,name:s,link:h,ingredients:v}])),O.store.addNotification({title:"".concat(s," added to recipes"),message:"Success",type:"success",insert:"bottom",container:"bottom-center",dismiss:{duration:2e3}}),o(""),m(""),x([]),S([{ingredient:"",ingredientRef:null}])}})})]})]})};n(45);function x(){var e=Object(c.useState)(JSON.parse(localStorage.getItem("storedRecipes"))||[]),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(JSON.parse(localStorage.getItem("storedShopping"))||[]),s=Object(l.a)(r,2),j=s[0],u=s[1],p=Object(c.useState)(JSON.parse(localStorage.getItem("storedOdd"))||[]),h=Object(l.a)(p,2),x=h[0],N=h[1];Object(c.useEffect)((function(){localStorage.setItem("storedRecipes",JSON.stringify(n)),localStorage.setItem("storedShopping",JSON.stringify(j)),localStorage.setItem("storedOdd",JSON.stringify(x))}),[n,j,x]);return Object(b.jsxs)("div",{className:"relative min-h-90",children:[Object(b.jsx)(f.a,{}),Object(b.jsx)(o.a,{children:Object(b.jsxs)("div",{className:"pb-3",children:[Object(b.jsx)("header",{className:"bg-dark-gray w-100 ph3 pv3 pv4-ns ph4-m ph5-l",children:Object(b.jsxs)("nav",{className:"f6 fw6 ttu tracked tc",children:[Object(b.jsx)(o.b,{className:"link dim white pa2 dib mr3",to:"/",children:"Shopping list"}),Object(b.jsx)(o.b,{className:"link dim white pa2 dib mr3",to:"/recipes",children:"Recipes"}),Object(b.jsx)(o.b,{className:"link dim white pa2 dib mr3",to:"/newrecipe",children:"Add a recipe"})]})}),Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{path:"/recipes",children:Object(b.jsx)(g,{recipes:n,cardButton:function(e){e.preventDefault(),JSON.parse(JSON.stringify(n)).forEach((function(t,n){t.id+n===+e.target.value&&(u([].concat(Object(a.a)(j),[t])),O.store.addNotification({title:"".concat(t.name),message:"added to Shopping List",type:"success",insert:"bottom",container:"bottom-center",dismiss:{duration:2e3}}))}))},removeFromRecipes:function(e){e.preventDefault();var t=n.filter((function(t,n){if(t.id+n!==+e.target.value)return t}));i(t)}})}),Object(b.jsx)(d.a,{path:"/newrecipe",children:Object(b.jsx)(v,{setRecipes:i,recipes:n})}),Object(b.jsx)(d.a,{path:"/",children:Object(b.jsx)(m,{recipes:j,cardButton:function(e){e.preventDefault();var t=j.filter((function(t,n){if(t.id+n!==+e.target.value)return t}));u(t)},ingredientButton:function(e){e.preventDefault();var t=j.map((function(t,n){if(console.log(e.target),n===+e.target.name){var c=t.ingredients.filter((function(t){if(t!==e.target.value)return t}));return t.ingredients=c,t}return t}));u(t)},oddBits:x,setOddBits:N})})]})]})}),Object(b.jsx)("div",{className:"bg-dark-gray absolute bottom-0 h3 pa3 w-100 tc white",children:"Made by Joe"})]})}n(51);s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.368c19f7.chunk.js.map