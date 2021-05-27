(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{17:function(t,e,n){t.exports={item:"TodoItem_item__1auiu",checkbox:"TodoItem_checkbox__3Xqz5",textInput:"TodoItem_textInput__teX0b"}},38:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),a=n(24),i=n.n(a),s=n(22),r=n(11),l=n(9),u=n(2),j=function(){return Object(u.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(u.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#082345",textAlign:"center"},children:"To-Do List"})})},d=n(15),b=n(16),p=function(t){var e=Object(c.useState)({title:""}),n=Object(l.a)(e,2),o=n[0],a=n[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.title.trim()?(t.addTodoProps(o.title),a({title:""})):alert("Please write item")},className:"form-container",children:[Object(u.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:o.title,name:"title",onChange:function(t){a(Object(r.a)(Object(r.a)({},o),{},Object(d.a)({},t.target.name,t.target.value)))}})," ",Object(u.jsx)("button",{className:"input-submit",children:Object(u.jsx)(b.a,{})})," "]})},h=n(17),x=n.n(h),O=function(t){var e=Object(c.useState)(!1),n=Object(l.a)(e,2),o=n[0],a=n[1],i=t.todo,s=i.completed,r=i.id,j=i.title,d={},p={};return o?d.display="none":p.display="none",Object(c.useEffect)((function(){return function(){console.log("Cleaning up...")}}),[]),Object(u.jsxs)("li",{className:x.a.item,children:[Object(u.jsxs)("div",{onDoubleClick:function(){a(!0)},style:d,children:[Object(u.jsx)("input",{type:"checkbox",className:x.a.checkbox,checked:s,onChange:function(){return t.handleChangeProps(r)}}),Object(u.jsx)("button",{onClick:function(){return t.deleteTodoProps(r)},children:Object(u.jsx)(b.b,{style:{color:"orangered",fontSize:"16px"}})}),Object(u.jsx)("span",{style:s?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:j})]}),Object(u.jsx)("input",{type:"text",style:p,className:x.a.textInput,value:j,onChange:function(e){t.setUpdate(e.target.value,r)},onKeyDown:function(t){"Enter"===t.key&&a(!1)}})]})},m=function(t){return Object(u.jsx)("ul",{children:t.todos.map((function(e){return Object(u.jsx)(O,{todo:e,handleChangeProps:t.handleChangeProps,deleteTodoProps:t.deleteTodoProps,setUpdate:t.setUpdate},e.id)}))})},f=n(41),g=n(3),v=n(8),y=function(){console.log(Object(g.f)());var t=Object(g.f)().slug,e=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was made by Wilson Veterano, a software developer open to freelance gigs or job offers. \nContact - wilsonveterano@gmail.com"}].find((function(e){return e.slug===t})),n=e.title,c=e.description;return Object(u.jsxs)("div",{className:"main__content",children:[Object(u.jsx)("h1",{children:n}),Object(u.jsx)("p",{children:c})]})},N=function(){var t=Object(g.g)(),e=t.url,n=t.path;return Object(u.jsxs)("div",{className:"about__content",children:[Object(u.jsxs)("ul",{className:"about__list",children:[Object(u.jsx)("li",{children:Object(u.jsx)(v.b,{to:"".concat(e,"/about-app"),children:"About App"})}),Object(u.jsx)("li",{children:Object(u.jsx)(v.b,{to:"".concat(e,"/about-author"),children:"About Author"})})]}),Object(u.jsx)(g.a,{path:"".concat(n,"/:slug"),children:Object(u.jsx)(y,{})})]})},k=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h3",{children:"No match for this page"})})},_=n(26),C=n(27),S=function(){var t=Object(c.useState)(!1),e=Object(l.a)(t,2),n=e[0],o=e[1];return Object(u.jsxs)("nav",{className:"navBar",children:[Object(u.jsx)("button",{onClick:function(){o((function(t){return!t}))},children:n?Object(u.jsx)(_.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(u.jsx)(C.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(u.jsx)("ul",{className:"menuNav ".concat(n?" showMenu":""),children:[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}].map((function(t){return Object(u.jsx)("li",{children:Object(u.jsx)(v.c,{to:t.path,activeClassName:"active-link",onClick:function(){o(!1)},exact:!0,children:t.text})},t.id)}))})]})},w=function(){var t=Object(c.useState)(function(){var t=localStorage.getItem("todos");return JSON.parse(t)||[]}()),e=Object(l.a)(t,2),n=e[0],o=e[1];return Object(c.useEffect)((function(){var t=JSON.stringify(n);localStorage.setItem("todos",t)}),[n]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(S,{}),Object(u.jsxs)(g.c,{children:[Object(u.jsx)(g.a,{exact:!0,path:"/",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"inner",children:[Object(u.jsx)(j,{}),Object(u.jsx)(p,{addTodoProps:function(t){var e={id:Object(f.a)(),title:t,completed:!1};o([].concat(Object(s.a)(n),[e]))}}),Object(u.jsx)(m,{todos:n,handleChangeProps:function(t){o((function(e){return e.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{completed:!e.completed}):e}))}))},deleteTodoProps:function(t){o(Object(s.a)(n.filter((function(e){return e.id!==t}))))},setUpdate:function(t,e){o(n.map((function(n){return n.id===e&&(n.title=t),n})))}})]})})}),Object(u.jsx)(g.a,{path:"/about",children:Object(u.jsx)(N,{})}),Object(u.jsx)(g.a,{path:"*",children:Object(u.jsx)(k,{})})]})]})};n(38);i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(v.a,{basename:"/simple-react-todo-app",children:Object(u.jsx)(w,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b363547a.chunk.js.map