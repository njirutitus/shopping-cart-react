(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(n,e,t){n.exports=t(32)},32:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t(4),i=t(20),o=t(8),c=t(0),u=t.n(c),p=t(14),l=t.n(p),s=t(2),m=[{name:"Kiwi",price:19.99,quantity:1,inCart:!1,src:"https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},{name:"Watermelon",price:14.99,quantity:1,inCart:!1,src:"https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},{name:"Cherry",price:8.99,quantity:1,inCart:!1,src:"https://images.pexels.com/photos/109274/pexels-photo-109274.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},{name:"Avacado",price:6.99,quantity:1,inCart:!1,src:"https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},{name:"Apple",price:5.99,quantity:1,inCart:!1,src:"https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},{name:"Strawberry",price:11.99,quantity:1,inCart:!1,src:"https://images.pexels.com/photos/934066/pexels-photo-934066.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},{name:"Orange",price:3.99,quantity:1,inCart:!1,src:"https://images.pexels.com/photos/42059/citrus-diet-food-fresh-42059.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}];function f(){var n=Object(r.a)(["\n  user-select: none;\n  border-radius: 10px;\n  border: none;\n  font-size: 15px;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  background-color: ",";\n  padding: 10px 16px;\n  color: white;\n\n  margin: 5px;\n  &:hover {\n    opacity: 0.9;\n    cursor: pointer;\n  }\n  transition: opacity 0.3s;\n"]);return f=function(){return n},n}var d=s.b.button(f(),function(n){return n.backgroundColor||"green"});function b(){var n=Object(r.a)(["\n  font-weight: 900;\n  font-size: 18px;\n  padding: 2px 8px;\n"]);return b=function(){return n},n}var x=Object(s.b)(d).attrs(function(){return{backgroundColor:"darkGray"}})(b()),g=function(n){var e=Object.assign({},n);return u.a.createElement(x,e,"+")},v=function(n){var e=Object.assign({},n);return u.a.createElement(x,e," \u2012")};function h(){var n=Object(r.a)(["\n  margin: 0;\n  padding: 4px 0;\n"]);return h=function(){return n},n}var j=s.b.p(h());function y(){var n=Object(r.a)(['\n * {\n   font-family: Times, serif;\n  margin: 0;\n}\n body { \n  background-size: cover;\n  background-attachment: fixed;\n  background-image: url("https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");\n }\n']);return y=function(){return n},n}var O=Object(s.a)(y());function C(){var n=Object(r.a)(["\n  padding: 5px 0;\n  font-size: 18px;\n"]);return C=function(){return n},n}function E(){var n=Object(r.a)(["\n  padding: 10px;\n  width: 150px;\n  height: 150px;\n  object-fit: cover;\n"]);return E=function(){return n},n}function w(){var n=Object(r.a)(["\n  max-width: 1100px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: flex-start;\n"]);return w=function(){return n},n}function k(){var n=Object(r.a)(["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  border: 0.5px solid #999999;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  padding: 12px 20px;\n  border-radius: 10px;\n  margin: 8px;\n  background-color: ",";\n"]);return k=function(){return n},n}var q=function(n){var e=n.items,t=n.increaseCount,r=n.decreaseCount,a=n.addToCart;return u.a.createElement(Q,null,e.map(function(n,e){return u.a.createElement(z,{key:n.name},u.a.createElement(I,null,n.name),u.a.createElement(j,null,"$",n.price),!n.inCart&&u.a.createElement("div",null,u.a.createElement(g,{onClick:function(){return t(e)}}),u.a.createElement("span",null,n.quantity),u.a.createElement(v,{onClick:function(){return r(e)}})),u.a.createElement(F,{src:n.src,alt:n.name}),!n.inCart&&u.a.createElement(d,{onClick:function(){return a(e)}},"Add to Cart"),n.inCart&&u.a.createElement(j,null,"Added!"))}))},z=s.b.article(k(),"#f2f2f2"),Q=s.b.div(w()),F=s.b.img(E()),I=s.b.h4(C()),T=t(18),A=t(19);function S(){var n=Object(r.a)(["\n  position: relative;\n"]);return S=function(){return n},n}function $(){var n=Object(r.a)(["\n  text-align: center;\n  font-size: 14px;\n  width: 15px;\n  color: white;\n  position: absolute;\n  top: 4px;\n  right: 7px;\n"]);return $=function(){return n},n}function J(){var n=Object(r.a)(["\n  cursor: pointer;\n  position: fixed;\n  text-align: center;\n  z-index: 25;\n  top: 0;\n  right: 0;\n  padding: 0 10px 10px 10px;\n  background-color: ",";\n  border-radius: 0 0 0 20px;\n"]);return J=function(){return n},n}var X=function(n){var e=n.cartItems,t=n.onOpen;return u.a.createElement(B,{onClick:t},u.a.createElement(j,null,"Cart"),u.a.createElement(K,null,u.a.createElement(T.a,{size:"2x",icon:A.a}),u.a.createElement(G,null,e||0)))},B=s.b.div(J(),"#f2f2f2"),G=s.b.div($()),K=s.b.div(S());function N(){var n=Object(r.a)(["\n  padding: 5px 8px;\n  font-size: 14px;\n  margin: 2px;\n"]);return N=function(){return n},n}var P=Object(s.b)(d)(N()),R=function(n){var e=Object.assign({},n);return u.a.createElement(P,Object.assign({backgroundColor:"darkred"},e),"X")},W=function(n){return Number.isInteger(n)?n:n.toFixed(2)};function D(){var n=Object(r.a)(["\n  margin: 0 2px;\n"]);return D=function(){return n},n}var H=s.b.span(D()),L=function(){return u.a.createElement(H,null,"|")};function M(){var n=Object(r.a)(["\n  padding: 4px 0;\n  font-size: 18px;\n  border-bottom: 1px dashed black;\n"]);return M=function(){return n},n}var U=function(n){var e=n.cart,t=n.cartCountTotal,r=e.reduce(function(n,e){return n+e.price*e.quantity},0);return u.a.createElement(V,null,"Items: ",t," ",u.a.createElement(L,null)," Total Price: $",W(r))},V=s.b.h2(M());function Y(){var n=Object(r.a)(["\n  font-size: 26px;\n  position: relative;\n  top: 2px;\n"]);return Y=function(){return n},n}var Z=s.b.span(Y()),_=function(){return u.a.createElement(Z,null,"\u2192")};function nn(){var n=Object(r.a)(["\n  padding: 5px 10px;\n"]);return nn=function(){return n},n}var en=function(n){var e=n.increaseQ,t=n.decreaseQ,r=n.removeFromCart;return u.a.createElement("div",null,u.a.createElement(g,{onClick:e}),u.a.createElement(v,{onClick:t}),u.a.createElement(tn,{onClick:r},"Remove"))},tn=Object(s.b)(d)(nn());function rn(){var n=Object(r.a)(["\n  margin-top: 15px;\n  margin-bottom: 15px;\n"]);return rn=function(){return n},n}function an(){var n=Object(r.a)(["\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n  padding: 5px 0;\n  width: 95%;\n  border-bottom: 1px solid black;\n"]);return an=function(){return n},n}var on=function(n){var e=n.cart,t=n.increaseQ,r=n.decreaseQ,a=n.removeFromCart;return u.a.createElement(u.a.Fragment,null,e.map(function(n,e){return u.a.createElement(cn,{key:n.name},u.a.createElement(j,null,n.name," ",u.a.createElement(L,null)," ",n.quantity," x $",n.price," ",u.a.createElement(_,null)," ","$",W(n.price*n.quantity)),u.a.createElement(en,{increaseQ:function(){return t(e)},decreaseQ:function(){return r(e)},removeFromCart:function(){return a(e)}}))}),u.a.createElement(un,null,"Checkout"))},cn=s.b.div(an()),un=Object(s.b)(d).attrs(function(){return{backgroundColor:"darkblue"}})(rn());function pn(){var n=Object(r.a)(["\n  padding: 5px 15px;\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n"]);return pn=function(){return n},n}function ln(){var n=Object(r.a)(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 134;\n  background-color: ",";\n  width: 320px;\n  transform: translateX(",");\n  transition: transform 0.5s;\n  max-height: 99%;\n  min-height: 75px;\n  overflow-y: auto;\n  border-radius: 0 0 0 20px;\n  box-sizing: border-box;\n"]);return ln=function(){return n},n}var sn=function(n){var e=n.cart,t=n.increaseQ,r=n.decreaseQ,a=n.cartCountTotal,i=n.removeFromCart,o=n.open,c=n.onClose;return u.a.createElement(mn,{open:o},u.a.createElement(R,{onClick:c}),u.a.createElement(fn,null,!e.length&&u.a.createElement(j,null,"Cart is empty"),!!e.length&&u.a.createElement(u.a.Fragment,null,u.a.createElement(U,{cart:e,cartCountTotal:a}),u.a.createElement(on,{cart:e,increaseQ:t,decreaseQ:r,removeFromCart:i}))))},mn=s.b.div(ln(),"#f2f2f2",function(n){return n.open?"0px":"320px"}),fn=s.b.div(pn());function dn(){var n=Object(r.a)(["\n  background-color: rgba(128, 128, 128, 0.5);\n  position: fixed;\n  z-index: 2;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  display: ",";\n"]);return dn=function(){return n},n}var bn=s.b.div(dn(),function(n){return n.open?"block":"none"});function xn(){var n=Object(r.a)(["\n  padding: 0 10px 50px 10px;\n  text-align: center;\n  color: ",";\n"]);return xn=function(){return n},n}function gn(){var n=Object(r.a)(["\n  padding: 75px 0;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n"]);return gn=function(){return n},n}function vn(){var n=Object(c.useState)([]),e=Object(o.a)(n,2),t=e[0],r=e[1],p=Object(c.useState)(m),l=Object(o.a)(p,2),s=l[0],f=l[1],d=Object(c.useState)(!1),b=Object(o.a)(d,2),x=b[0],g=b[1],v={inCart:function(n){r(function(e){return e.map(function(e,t){return n===t&&e.quantity<10?Object(a.a)(Object(a.a)({},e),{},{quantity:e.quantity+1}):e})})},inItems:function(n){f(function(e){return e.map(function(e,t){return t===n&&e.quantity<10?Object(a.a)(Object(a.a)({},e),{},{quantity:e.quantity+1}):e})})}},h={inCart:function(n){r(function(e){return e.map(function(e,t){return n===t&&e.quantity>1?Object(a.a)(Object(a.a)({},e),{},{quantity:e.quantity-1}):e})})},inItems:function(n){f(function(e){return e.map(function(e,t){return n===t&&e.quantity>1?Object(a.a)(Object(a.a)({},e),{},{quantity:e.quantity-1}):e})})}},j=t.reduce(function(n,e){return n+e.quantity},0);return u.a.createElement(u.a.Fragment,null,u.a.createElement(O,null),u.a.createElement(sn,{open:x,onClose:function(){return g(!1)},cart:t,increaseQ:v.inCart,decreaseQ:h.inCart,cartCountTotal:j,removeFromCart:function(n){var e,i;for(i=0;i<t.length;){if(i===n){e=t[i].name;break}i++}r(function(n){return n.filter(function(n){return e!==n.name})}),f(function(n){return n.map(function(n){return n.name===e?Object(a.a)(Object(a.a)({},n),{},{inCart:!1,quantity:1}):n})})}}),u.a.createElement(X,{onOpen:function(){return g(!0)},cartItems:j}),u.a.createElement(bn,{onClick:function(){return g(!1)},open:x}),u.a.createElement(hn,null,u.a.createElement(jn,null,"Shopping Cart App"),u.a.createElement(q,{items:s,increaseCount:v.inItems,decreaseCount:h.inItems,addToCart:function(n){f(function(e){return e.map(function(e,o){return n===o?(r([].concat(Object(i.a)(t),[{name:e.name,price:e.price,quantity:e.quantity}])),Object(a.a)(Object(a.a)({},e),{},{inCart:!0})):e})})}})))}var hn=s.b.div(gn()),jn=s.b.h1(xn(),"#f2f2f2"),yn=document.getElementById("root");l.a.render(u.a.createElement(vn,null),yn)}},[[22,1,2]]]);
//# sourceMappingURL=main.44ea6fc2.chunk.js.map