(this.webpackJsonptodo_app_chakra_ui=this.webpackJsonptodo_app_chakra_ui||[]).push([[0],{109:function(e,t,c){},110:function(e,t,c){},120:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c.n(n),a=c(28),r=c.n(a),i=(c(109),c(14)),j=c(3),d=c(142),s=c(135),l=(c(110),c(140)),u=c(143),b=c(144),x=c(92),O=c(5);var h=function(e){var t=e.addTodo,c=Object(l.a)(),o=Object(n.useState)(""),a=Object(j.a)(o,2),r=a[0],i=a[1];return Object(O.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),""!==r){var n={id:Object(x.a)(),text:r};t(n),i("")}else c({title:"Please enter the text.",status:"warning",duration:2e3,isClosable:!0})},children:Object(O.jsxs)(d.b,{spacing:5,children:[Object(O.jsx)(u.a,{mt:5,value:r,variant:"outline",type:"text",placeholder:"Enter your todo...",onChange:function(e){return i(e.target.value)}}),Object(O.jsx)(b.a,{colorScheme:"teal",type:"submit",children:"Add Todo"})]})})},p=c(77),f=c(133),m=c(134),v=c(139),g=c(136),S=c(137);var C=function(e){var t=e.todos,c=e.deleteTodo,o=e.editTodo,a=Object(n.useState)(""),r=Object(j.a)(a,2),i=(r[0],r[1],Object(n.useState)({})),l=Object(j.a)(i,2),x=l[0],h=l[1],C=Object(n.useState)(!1),y=Object(j.a)(C,2),T=y[0],k=y[1];function w(){k(!1)}function _(e,t){h(Object(p.a)(Object(p.a)({},x),{},{text:e.target.value})),console.log(x,t)}function A(e){e.preventDefault(),o(x.id,x),h(""),k(!1)}return t.length?Object(O.jsx)(d.c,{children:t.map((function(e){return Object(O.jsx)(d.a,{spacing:"24px",w:"320px",children:Object(O.jsxs)(m.a,{p:6,w:"300px",h:"50px",justifyContent:"space-between",children:[Object(O.jsx)(s.a,{children:e.text}),Object(O.jsxs)(m.a,{w:"10px",children:[Object(O.jsx)(g.a,{color:"red.500",mr:"2",onClick:function(){return c(e.id)}}),Object(O.jsx)(S.a,{onClick:function(){return function(e){k(!0),h(e),console.log(e)}(e)}})]}),Object(O.jsxs)(v.a,{isOpen:T,onClose:w,children:[Object(O.jsx)(v.g,{}),Object(O.jsxs)(v.d,{children:[Object(O.jsx)(v.f,{children:"Edit Your Todo"}),Object(O.jsx)(v.c,{}),Object(O.jsxs)("form",{onSubmit:A,children:[Object(O.jsx)(v.b,{children:Object(O.jsx)(u.a,{value:x.text,variant:"outline",type:"text",placeholder:"Update your todo...",onChange:_},x.id)}),Object(O.jsxs)(v.e,{children:[Object(O.jsx)(b.a,{colorScheme:"teal",mr:3,onClick:w,children:"Close"}),Object(O.jsx)(b.a,{type:"submit",colorScheme:"teal",mr:3,children:"Update"})]})]})]})]})]})})}))}):Object(O.jsx)(f.a,{colorScheme:"purple",variant:"outline",borderRadius:"4",p:"4",m:"5",children:"No todos for Today!!"})};var y=function(){var e=Object(n.useState)([{id:1,text:"Buy eggs"},{id:2,text:"Walk the dog"},{id:3,text:"Watch a movie"}]),t=Object(j.a)(e,2),c=t[0],o=t[1];return Object(O.jsxs)(d.c,{p:5,children:[Object(O.jsx)(s.a,{bgGradient:"linear(to-l, #7928CA,#FF0080)",bgClip:"text",fontSize:"6xl",fontWeight:"extrabold",children:"Todo App"}),Object(O.jsx)(C,{todos:c,deleteTodo:function(e){var t=c.filter((function(t){return t.id!==e}));o(t),console.log(t)},editTodo:function(e,t){var n=c.map((function(c){return c.id===e?t:c}));o(n)}}),Object(O.jsx)(h,{addTodo:function(e){o([].concat(Object(i.a)(c),[e]))}})]})},T=c(141);r.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(T.a,{children:Object(O.jsx)(y,{})})}),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.f9f2e9f8.chunk.js.map