(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{15:function(t,e,o){},17:function(t,e,o){"use strict";o.r(e);var n=o(2),c=o.n(n),i=o(8),a=o.n(i),r=(o.p,o(15),o(3)),s=o(1);var u=function(t){var e=Object(n.useState)(t.edit?t.edit.value:""),o=Object(r.a)(e,2),c=o[0],i=o[1],a=Object(n.useRef)(null);Object(n.useEffect)((function(){a.current.focus()}));var u=function(t){i(t.target.value)},d=function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:c}),i("")};return Object(s.jsx)("form",{onSubmit:d,className:"todo-form",children:t.edit?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{placeholder:"Posodobi",value:c,onChange:u,name:"text",ref:a,className:"todo-input edit"}),Object(s.jsx)("button",{onClick:d,className:"todo-button edit",children:"Posodobi"})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{placeholder:"Novo opravilo",value:c,onChange:u,name:"text",className:"todo-input",ref:a}),Object(s.jsx)("button",{onClick:d,className:"todo-button",children:"Dodaj"})]})})},d=o(6),l=o(9),j=o(10),b=function(t){var e=t.todos,o=t.completeTodo,c=t.removeTodo,i=t.updateTodo,a=Object(n.useState)({id:null,value:""}),d=Object(r.a)(a,2),b=d[0],m=d[1];return b.id?Object(s.jsx)(u,{edit:b,onSubmit:function(t){i(b.id,t),m({id:null,value:""})}}):e.map((function(t,e){return Object(s.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(s.jsx)("div",{onClick:function(){return o(t.id)},children:t.text},t.id),Object(s.jsxs)("div",{className:"icons",children:[Object(s.jsx)(l.a,{onClick:function(){return c(t.id)},className:"delete-icon"}),Object(s.jsx)(j.a,{onClick:function(){return m({id:t.id,value:t.text})},className:"edit-icon"})]})]},e)}))};var m=function(){var t=Object(n.useState)([]),e=Object(r.a)(t,2),o=e[0],c=e[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"Opravila"}),Object(s.jsx)(u,{onSubmit:function(t){var e;if(t.text&&!/^\s*$/.test(t.text)){var n=[t].concat(Object(d.a)(o));c(n),(e=console).log.apply(e,Object(d.a)(o))}}}),Object(s.jsx)(b,{todos:o,completeTodo:function(t){var e=o.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));c(e)},removeTodo:function(t){var e=Object(d.a)(o).filter((function(e){return e.id!==t}));c(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&c((function(o){return o.map((function(o){return o.id===t?e:o}))}))}})]})};var f=function(){return Object(s.jsx)("div",{className:"todo-app",children:Object(s.jsx)(m,{})})};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.07f0f797.chunk.js.map