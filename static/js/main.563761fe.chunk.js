(this.webpackJsonpecomm=this.webpackJsonpecomm||[]).push([[0],{34:function(e,A,t){},35:function(e,A,t){},46:function(e,A,t){},47:function(e,A,t){},48:function(e,A,t){},49:function(e,A,t){},51:function(e,A,t){},52:function(e,A,t){},53:function(e,A,t){},55:function(e,A,t){"use strict";t.r(A);var i=t(1),c=t.n(i),s=t(17),E=t.n(s),a=(t(34),t(4)),n=(t(35),t(26)),r=t.n(n),l=t(27),j=t.n(l),b=t(7),R=t(0),x=Object(i.createContext)(),o=function(e){var A=e.reducer,t=e.initialState,c=e.children;return Object(R.jsx)(x.Provider,{value:Object(i.useReducer)(A,t),children:c})},m=function(){return Object(i.useContext)(x)};var I=function(){var e=m(),A=Object(a.a)(e,2),t=A[0].basket;return A[1],Object(R.jsxs)("div",{className:"header",children:[Object(R.jsx)(b.b,{to:"/",children:Object(R.jsx)("img",{className:"header__logo",src:"",alt:"E-commerce logo"})}),Object(R.jsxs)("div",{className:"header__search",children:[Object(R.jsx)("input",{className:"header__searchInput",type:"text"}),Object(R.jsx)(r.a,{className:"header__searchIcon"})]}),Object(R.jsxs)("div",{className:"header__nav",children:[Object(R.jsx)(b.b,{to:"/login",children:Object(R.jsxs)("div",{className:"header__option",children:[Object(R.jsx)("span",{className:"header__optionLineOne",children:"Hello Guest"}),Object(R.jsx)("span",{className:"header__optionLineTwo",children:"Sign In"})]})}),Object(R.jsxs)("div",{className:"header__option",children:[Object(R.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(R.jsx)("span",{className:"header__optionLineTwo",children:"Orders"})]}),Object(R.jsx)(b.b,{to:"/checkout",children:Object(R.jsxs)("div",{className:"header__option",children:[Object(R.jsx)("span",{className:"header__optionLineOne",children:"Your "}),Object(R.jsx)("span",{className:"header__optionLineTwo",children:"Carts"})]})}),Object(R.jsx)(b.b,{to:"/checkout",children:Object(R.jsxs)("div",{className:"header__optionBasket",children:[Object(R.jsx)(j.a,{}),Object(R.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===t||void 0===t?void 0:t.length})]})})]})]})};t(46);var B=function(e){var A=e.id,t=e.title,i=e.image,c=e.price,s=e.rating,E=m(),n=Object(a.a)(E,2),r=n[0].basket,l=n[1];return console.log("this is the basket >>>",r),Object(R.jsxs)("div",{className:"product",children:[Object(R.jsxs)("div",{className:"info",children:[Object(R.jsx)("p",{children:t}),Object(R.jsxs)("p",{className:"price",children:[Object(R.jsx)("small",{children:"Rs."}),Object(R.jsx)("strong",{children:c})]}),Object(R.jsx)("div",{className:"rating",children:Array(s).fill().map((function(e,A){return Object(R.jsx)("p",{children:"\ud83c\udf1f"})}))})]}),Object(R.jsx)("img",{src:i,alt:""}),Object(R.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:A,title:t,image:i,price:c,rating:s}})},children:"Add to Basket"})]})};t(47);var d=function(){return Object(R.jsx)("div",{className:"home",children:Object(R.jsxs)("div",{className:"container",children:[Object(R.jsx)("img",{className:"image",src:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/iQoo/GW/June2nd/D23951818_WLM_iQOO_Z3_Launch_GW_Design_SIM_TallHero_1500x600._CB667161456_.jpg",alt:""}),Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)(B,{id:"1",title:"Home Theatres",price:5e3,image:"data:image/jpeg;base64,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",rating:5}),Object(R.jsx)(B,{id:"2",title:"Cricket Bat",price:399,image:"data:image/jpeg;base64,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",rating:4})]}),Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)(B,{id:"3",title:"OPPO F11 Pro 128GB (Thunder Black, 6GB RAM)",price:12500,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf23JSil6W61LMNgRp8EubC23VeRQ6HLAoDIIth0BZCdeyxwlWKIfYgcdR&usqp=CAc",rating:5}),Object(R.jsx)(B,{id:"4",title:"Bata Shoe",price:699,image:"https://rukminim1.flixcart.com/image/580/696/jmjhifk0/shoe/g/2/z/8592579-10-bata-grey-original-imaf9ezu5ajj8wwe.jpeg?q=50",rating:3}),Object(R.jsx)(B,{id:"5",title:"Dumbell",price:399,image:"data:image/jpeg;base64,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",rating:3})]}),Object(R.jsx)("div",{className:"row",children:Object(R.jsx)(B,{id:"6",title:"Apple Watch Series 6 GPS",price:8e3,image:"data:image/jpeg;base64,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",rating:4})})]})})},u=t(3),O=(t(48),t(49),t(28)),h=t.n(O),g=t(15),N=t(13),Q=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,A){return A.price+e}),0)},p=function(e,A){switch(console.log(A),A.type){case"ADD_TO_BASKET":return Object(N.a)(Object(N.a)({},e),{},{basket:[].concat(Object(g.a)(e.basket),[A.item])});case"EMPTY_BASKET":return Object(N.a)(Object(N.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var t=e.basket.findIndex((function(e){return e.id===A.id})),i=Object(g.a)(e.basket);return t>=0?i.splice(t,1):console.warn("Cant remove product (id: ".concat(A.id,") as its not in basket!")),Object(N.a)(Object(N.a)({},e),{},{basket:i});case"SET_USER":return Object(N.a)(Object(N.a)({},e),{},{user:A.user});default:return e}};var D=function(){var e=Object(u.f)(),A=m(),t=Object(a.a)(A,2),i=t[0].basket;return t[1],Object(R.jsxs)("div",{className:"subtotal",children:[Object(R.jsx)(h.a,{renderText:function(e){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)("p",{children:["Subtotal (",i.length," items): ",Object(R.jsx)("strong",{children:e})]}),Object(R.jsxs)("small",{className:"subtotal__gift",children:[Object(R.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:Q(i),displayType:"text",thousandSeparator:!0,prefix:"Rs."}),Object(R.jsx)("button",{onClick:function(A){return e.push("/payment")},children:"Proceed to Checkout"})]})};t(51);var U=function(e){var A=e.id,t=e.image,i=e.title,c=e.price,s=e.rating,E=e.hideButton,n=m(),r=Object(a.a)(n,2),l=(r[0].basket,r[1]);return Object(R.jsxs)("div",{className:"checkoutProduct",children:[Object(R.jsx)("img",{className:"checkoutProduct__image",src:t}),Object(R.jsxs)("div",{className:"checkoutProduct__info",children:[Object(R.jsx)("p",{className:"checkoutProduct__title",children:i}),Object(R.jsxs)("p",{className:"checkoutProduct__price",children:[Object(R.jsx)("small",{children:"Rs."}),Object(R.jsx)("strong",{children:c})]}),Object(R.jsx)("div",{className:"checkoutProduct__rating",children:Array(s).fill().map((function(e,A){return Object(R.jsx)("p",{children:"\ud83c\udf1f"})}))}),!E&&Object(R.jsx)("button",{onClick:function(){l({type:"REMOVE_FROM_BASKET",id:A})},children:"Remove from Basket"})]})]})};var z=function(){var e=m(),A=Object(a.a)(e,2),t=A[0],i=t.basket;return t.user,A[1],Object(R.jsxs)("div",{className:"checkout",children:[Object(R.jsxs)("div",{children:[Object(R.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"}),i.map((function(e){return Object(R.jsx)(U,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]}),Object(R.jsx)("div",{className:"checkout__right",children:Object(R.jsx)(D,{})})]})};t(52);var M=function(){var e=Object(i.useState)(""),A=Object(a.a)(e,2),t=A[0],c=A[1],s=Object(i.useState)(""),E=Object(a.a)(s,2),n=E[0],r=E[1];return Object(R.jsxs)("div",{className:"login",children:[Object(R.jsx)(b.b,{to:"/",children:Object(R.jsx)("img",{className:"login__logo",src:"https://dynamic.brandcrowd.com/preview/logodraft/bfdad516-0e2b-46b2-8255-52ccce727428/image/large.pngs"})}),Object(R.jsxs)("div",{className:"login__container",children:[Object(R.jsx)("h1",{children:"Sign-in"}),Object(R.jsxs)("form",{children:[Object(R.jsx)("h5",{children:"E-mail"}),Object(R.jsx)("input",{type:"text",value:t,onChange:function(e){return c(e.target.value)}}),Object(R.jsx)("h5",{children:"Password"}),Object(R.jsx)("input",{type:"password",value:n,onChange:function(e){return r(e.target.value)}}),Object(R.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault()},className:"login__signInButton",children:"Sign In"})]}),Object(R.jsx)("p",{children:"By signing-in you agree to the ECOMMERCE Conditions of Use & Sale."}),Object(R.jsx)("button",{onClick:function(e){e.preventDefault()},className:"login__registerButton",children:"Create your Amazon Account"})]})]})};t(53);var f=function(){var e=m(),A=Object(a.a)(e,2),t=A[0],i=t.basket,c=t.user;return A[1],Object(R.jsx)("div",{className:"payment",children:Object(R.jsxs)("div",{className:"payment__container",children:[Object(R.jsxs)("h1",{children:["Checkout ",Object(R.jsxs)(b.b,{to:"/checkout",children:[null===i||void 0===i?void 0:i.length," items "]})]}),Object(R.jsxs)("div",{className:"payment__section",children:[Object(R.jsx)("div",{className:"payment__title",children:Object(R.jsx)("h3",{children:"Delivery Address"})}),Object(R.jsxs)("div",{className:"payment__adress",children:[Object(R.jsx)("p",{children:null===c||void 0===c?void 0:c.email}),Object(R.jsx)("p",{children:"Street 34"}),Object(R.jsx)("p",{children:"Durg,Chhattisgarh"})]})]}),Object(R.jsx)("div",{className:"payment__section",children:Object(R.jsxs)("div",{className:"payment__title",children:[Object(R.jsx)("h3",{children:"Review items and delivery"}),Object(R.jsx)("div",{className:"payment__items",children:i.map((function(e){return Object(R.jsx)(U,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]})}),Object(R.jsxs)("div",{className:"payment__section",children:[Object(R.jsx)("div",{className:"payment__title",children:Object(R.jsx)("h3",{children:"Payment Method"})}),Object(R.jsxs)("div",{className:"payment__details",children:[Object(R.jsx)("p",{children:"Credit Card"}),Object(R.jsx)("p",{children:"Debit Card"}),Object(R.jsx)("p",{children:"Netbanking"})]})]})]})})};var P=function(){return Object(R.jsx)(b.a,{children:Object(R.jsx)("div",{className:"app",children:Object(R.jsxs)(u.c,{children:[Object(R.jsxs)(u.a,{path:"/login",children:[Object(R.jsx)(I,{}),Object(R.jsx)(M,{})]}),Object(R.jsxs)(u.a,{path:"/checkout",children:[Object(R.jsx)(I,{}),Object(R.jsx)(z,{})]}),Object(R.jsxs)(u.a,{path:"/payment",children:[Object(R.jsx)(I,{}),Object(R.jsx)(f,{})]}),Object(R.jsxs)(u.a,{path:"/",children:[Object(R.jsx)(I,{}),Object(R.jsx)(d,{})]})]})})})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,67)).then((function(A){var t=A.getCLS,i=A.getFID,c=A.getFCP,s=A.getLCP,E=A.getTTFB;t(e),i(e),c(e),s(e),E(e)}))};E.a.render(Object(R.jsx)(c.a.StrictMode,{children:Object(R.jsx)(o,{initialState:{basket:[],user:null},reducer:p,children:Object(R.jsx)(P,{})})}),document.getElementById("root")),v()}},[[55,1,2]]]);
//# sourceMappingURL=main.563761fe.chunk.js.map