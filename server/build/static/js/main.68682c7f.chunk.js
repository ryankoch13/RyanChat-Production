(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{113:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},136:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var s,c=n(0),a=n(1),r=n(66),i=n.n(r),o=n(17),j=n(2),l=n(8),m=(n(77),function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),j=i[0],m=i[1];return Object(c.jsx)("div",{className:"joinOuterContainer",children:Object(c.jsxs)("div",{className:"joinInnerContainer",children:[Object(c.jsx)("h1",{className:"heading",children:"RyanChat"}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return s(e.target.value)}})}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return m(e.target.value)}})}),Object(c.jsx)(o.b,{onClick:function(e){return n&&j?null:e.preventDefault()},to:"./chat?name=".concat(n,"&room=").concat(j),children:Object(c.jsx)("button",{className:"button mt-20",type:"submit",children:"Join"})})]})})}),u=n(71),b=n(68),h=n.n(b),O=n(69),d=n.n(O),x=(n(113),n(114),function(e){var t=e.room;return Object(c.jsxs)("div",{className:"infoBar",children:[Object(c.jsx)("div",{className:"leftInnerContainer",children:Object(c.jsxs)("h3",{className:"roomHeader",children:[t," room"]})}),Object(c.jsx)("div",{className:"rightInnerContainer",children:Object(c.jsx)("a",{href:"/",children:Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII=",alt:"close"})})})]})}),A=(n(115),function(e){var t=e.message,n=e.setMessage,s=e.sendMessage;return Object(c.jsxs)("form",{className:"form",children:[Object(c.jsx)("input",{className:"input",type:"text",placeholder:"Type a message...",value:t,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?s(e):null}}),Object(c.jsx)("button",{className:"sendButton",onClick:function(e){return s(e)},children:"Send"})]})}),f=n(70),g=n.n(f),v=(n(136),n(43)),p=n.n(v),N=n(44),C=n.n(N),I=(n(138),function(e){var t=e.message,n=t.user,s=t.text,a=t.time,r=!1,i=e.name.trim().toLowerCase();return n===i&&(r=!0),r?Object(c.jsxs)("div",{className:"messageContainer sentByUser",children:[Object(c.jsx)("p",{className:"sentTime",children:Object(c.jsx)(C.a,{format:"HH:mm",children:a})}),Object(c.jsx)("div",{className:"messageBox backgroundBlue",children:Object(c.jsx)("p",{className:"messageText colorWhite",children:p.a.emojify(s)})}),Object(c.jsx)("p",{className:"sentText",children:i})]}):Object(c.jsxs)("div",{className:"messageContainer sentByOther",children:[Object(c.jsx)("p",{className:"sentText sentByOther",children:n}),Object(c.jsx)("div",{className:"messageBox sentByOther",children:Object(c.jsx)("p",{className:"messageText sentByOther",children:p.a.emojify(s)})}),Object(c.jsx)("p",{className:"sentTime",children:Object(c.jsx)(C.a,{format:"HH:mm",children:a})})]})}),S=function(e){var t=e.messages,n=e.name;return Object(c.jsx)(g.a,{className:"messages",children:t.map((function(e,t){return Object(c.jsx)("div",{children:Object(c.jsx)(I,{message:e,name:n},t)})}))})},y=(n(139),function(e){var t=e.users;return Object(c.jsxs)("div",{className:"textContainer",children:[Object(c.jsxs)("div",{className:"headerText",children:[Object(c.jsx)("h1",{children:"RyanChat"}),Object(c.jsx)("h2",{children:"Real-Time Chat App"}),Object(c.jsx)("h2",{children:"Built with React, Express, Node, and Socket.io"})]}),t?Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"People in This Room:"}),Object(c.jsx)("div",{className:"activeContainer",children:Object(c.jsx)("h2",{children:t.map((function(e){var t=e.name;return Object(c.jsxs)("div",{className:"activeItem",children:[t,Object(c.jsx)("img",{alt:"Online icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="})]},t)}))})})]}):null]})}),R=(n(140),function(e){var t=e.name,n=e.rooms,s=e.setRoom;return Object(c.jsx)("div",{className:"textContainer",children:n?Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Rooms with Active Users:"}),Object(c.jsx)("div",{className:"roomContainer",children:Object(c.jsx)("h2",{children:n.map((function(e){return Object(c.jsxs)("div",{className:"activeItem",children:[e,Object(c.jsx)(o.b,{to:"./chat?name=".concat(t,"&room=").concat(e),onClick:function(){return s()},children:Object(c.jsx)("button",{className:"join-button",type:"submit",children:"Join"})})]},e)}))})})]}):null})}),B=function(e){var t=e.location,n=Object(a.useState)(""),r=Object(l.a)(n,2),i=r[0],o=r[1],j=Object(a.useState)(""),m=Object(l.a)(j,2),b=m[0],O=m[1],f=Object(a.useState)(""),g=Object(l.a)(f,2),v=g[0],p=g[1],N=Object(a.useState)(""),C=Object(l.a)(N,2),I=C[0],B=C[1],U=Object(a.useState)(""),w=Object(l.a)(U,2),E=w[0],M=w[1],T=Object(a.useState)([]),k=Object(l.a)(T,2),J=k[0],Q=k[1],Y="localhost:5000";Object(a.useEffect)((function(){var e=h.a.parse(t.search),n=e.name,c=e.room;return s=d()(Y),O(c),o(n),console.log(s),s.emit("join",{name:n,room:c},(function(e){e&&alert(e)}),[Y,t.search]),function(){s.disconnect(),s.off()}}),[Y,t.search]),Object(a.useEffect)((function(){return s.on("message",(function(e){Q((function(t){return[].concat(Object(u.a)(t),[e])}))})),s.on("roomData",(function(e){var t=e.users;p(t)})),s.on("allRooms",(function(e){var t=e.rooms;B(t),console.log(t)})),function(){s.off()}}),[b]);return Object(c.jsxs)("div",{className:"outerContainer",children:[Object(c.jsx)(R,{name:i,rooms:I,setRoom:O}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(x,{room:b}),Object(c.jsx)(S,{messages:J,name:i}),Object(c.jsx)(A,{message:E,setMessage:M,sendMessage:function(e){e.preventDefault(),E&&s.emit("sendMessage",{message:E},(function(){return M("")}))}})]}),Object(c.jsx)(y,{users:v})]})},U=function(){return Object(c.jsxs)(o.a,{children:[Object(c.jsx)(j.a,{path:"/",exact:!0,component:m}),Object(c.jsx)(j.a,{path:"/chat",component:B})]})};i.a.render(Object(c.jsx)(U,{}),document.querySelector("#root"))},77:function(e,t,n){}},[[141,1,2]]]);
//# sourceMappingURL=main.68682c7f.chunk.js.map