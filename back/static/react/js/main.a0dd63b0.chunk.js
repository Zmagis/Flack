(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{34:function(e,t,a){e.exports=a(76)},39:function(e,t,a){},70:function(e,t){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(33),s=a.n(c),o=(a(39),a(6)),r=a(1),u=a(4),m=a.n(u),i=(a(73),a(74),a(75),function(e){return l.a.createElement("div",{className:"login-background"},l.a.createElement("div",{className:"modal"},e.children))}),g=function(e){return l.a.createElement("button",{type:"submit",onClick:e.submitHandler},e.submitText)},d=function(e){return l.a.createElement("form",{className:"login"},l.a.createElement("label",{styles:{color:"black"}},e.label),l.a.createElement("input",{placeholder:e.placeholder,type:"text",value:e.value,onChange:e.changeHandler}),e.error?l.a.createElement("p",{className:"error"},e.errorMessage):null,l.a.createElement(g,{submitText:e.submitText,submitHandler:e.submitHandler}))},b=function(e){var t=e.setLogedIn,a=Object(n.useState)(""),c=Object(r.a)(a,2),s=c[0],o=c[1];return l.a.createElement(i,null,l.a.createElement(d,{label:"Please enter your user name:",placeholder:"Username",value:s,changeHandler:function(e){o(e.target.value)},submitHandler:function(e){e.preventDefault(),localStorage.clear(),null===localStorage.getItem("username")&&(localStorage.setItem("username",s),t(!0)),console.log(localStorage.getItem("username"))},submitText:"Log In"}))},h=m()(),f=function(e){var t=e.channels,a=e.active,c=e.setActive,s=Object(n.useState)(""),o=Object(r.a)(s,2),u=o[0],m=o[1],g=Object(n.useState)(!1),b=Object(r.a)(g,2),f=b[0],E=b[1],v=Object(n.useState)(!1),j=Object(r.a)(v,2),O=j[0],p=j[1],S=Object(n.useState)(""),I=Object(r.a)(S,2),N=I[0],y=I[1],w=Object(n.useState)(!1),k=Object(r.a)(w,2),x=k[0],H=k[1],C=function(e){m(e.target.value)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"channels glass"},l.a.createElement("div",{className:"user"},l.a.createElement("h1",null,localStorage.getItem("username"))),l.a.createElement("h3",null,"Channels","   ",l.a.createElement("button",{className:"channel-buttons",onClick:function(){E(!f)}},"+"),l.a.createElement("button",{type:"submit",className:"channel-buttons",onClick:function(){console.log("delete"),H(!0)}},"-")),l.a.createElement("ul",{id:"messsges"},t.map((function(e){return l.a.createElement("li",{id:e,key:e,className:a===e?"active":null,onClick:function(){return t=e,console.log(t),c(t),void localStorage.setItem("channel",t);var t}},e)})))),f?l.a.createElement(i,null,l.a.createElement(d,{label:"Please Enter new channel title",placeholder:"Title",value:u,changeHandler:C,error:O,errorMessage:N,submitHandler:function(e){e.preventDefault(),t.includes(u)?(p(!0),y("Channel already exists"),console.log("already there")):""===u.trim()?(p(!0),y("Please enter new channel title")):(p(!1),E(!1),console.log(u),h.emit("add channel",{title:u})),m("")},submitText:"Add"})):null,x?l.a.createElement(i,{hide:function(){E(!1)}},l.a.createElement(d,{label:"Enter channel you want to delete",placeholder:"Title",value:u,changeHandler:C,error:O,errorMessage:N,submitHandler:function(e){e.preventDefault(),console.log("deleted"),console.log(u),t.includes(u)?(p(!1),console.log("contains"),h.emit("delete channel",{title:u}),H(!1)):(p(!0),y("Can't delete channel that don't exist")),m("")},submitText:"Delete"})):null)},E=function(e){var t=e.messages,a=Object(n.useState)(!1),c=Object(r.a)(a,2);c[0],c[1];return l.a.createElement("div",{className:"messages-list"},l.a.createElement("div",{className:"ul"},t?t.map((function(e){return l.a.createElement("div",{className:e.author===localStorage.getItem("username")?"li myMessage":"li"},l.a.createElement("div",null,e.message,l.a.createElement("br",null),l.a.createElement("span",{className:"author"},e.author," ",e.date)))})):l.a.createElement("span",null,"No messages yet")))},v=m.a.connect(),j=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1];return l.a.createElement("div",{className:"send-message"},l.a.createElement("input",{type:"text",placeholder:"New Message",value:a,onChange:function(e){c(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(""===a.trim()?console.log("no message"):v.emit("send message",{channel:localStorage.getItem("channel"),message:a,author:localStorage.getItem("username"),date:(new Date).toLocaleTimeString()}),c(""))}}),l.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),""===a.trim()?console.log("no message"):v.emit("send message",{channel:localStorage.getItem("channel"),message:a,author:localStorage.getItem("username"),date:(new Date).toLocaleTimeString()}),c("")}},"Send"))},O=function(e){var t=e.messages;return l.a.createElement("div",{className:"messages"},l.a.createElement(E,{messages:t}),l.a.createElement(j,null))},p=m.a.connect();var S=function(){var e=Object(n.useState)(!0),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),u=Object(r.a)(s,2),m=u[0],i=u[1],g=Object(n.useState)([]),d=Object(r.a)(g,2),h=d[0],E=d[1],v=Object(n.useState)("General"),j=Object(r.a)(v,2),S=j[0],I=j[1];return Object(n.useEffect)((function(){console.log(localStorage.getItem("username")),null===localStorage.getItem("username")&&(console.log("user is not loged in"),c(!1))}),[]),Object(n.useEffect)((function(){p.emit("get channels","HI"),p.emit("get messeges",S),I(localStorage.getItem("channel"))}),[]),Object(n.useEffect)((function(){p.emit("get messeges",S)}),[S]),p.on("channels",(function(e){i(Object(o.a)(e))})),p.on("messeges",(function(e){E(Object(o.a)(e))})),p.on("channel added",(function(e){var t=e.channel;i([].concat(Object(o.a)(m),[t]))})),p.on("channel deleted",(function(e){var t=e.channel,a=m.filter((function(e){return e!==t}));i(a)})),p.on("send",(function(e){e.channel;var t=e.author,a=e.message,n=e.date;E([].concat(Object(o.a)(h),[{message:a,author:t,date:n}]))})),l.a.createElement("div",{className:"App"},l.a.createElement(O,{messages:h,active:S}),l.a.createElement(f,{channels:m,active:S,setActive:I}),a?null:l.a.createElement(b,{setLogedIn:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.a0dd63b0.chunk.js.map