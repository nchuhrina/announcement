(this.webpackJsonpannouncement=this.webpackJsonpannouncement||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(6),c=n.n(r),u=(n(12),n(13),n(1)),o=n(2),i=n(4),m=n(3),E=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"Search"},l.a.createElement("label",null,"Search",l.a.createElement("input",{placeholder:"search"})))}}]),n}(l.a.Component),s=function(){return l.a.createElement("h1",null,"Announcements")},p=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"Add"},l.a.createElement("form",null,l.a.createElement("label",null,"Title",l.a.createElement("input",{type:"text"})),l.a.createElement("br",null),l.a.createElement("label",null,"Description",l.a.createElement("input",{type:"text"})),l.a.createElement("br",null),l.a.createElement("label",null,"Date",l.a.createElement("input",{type:"date"})),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Add")))}}]),n}(l.a.Component),d=function(e){var t=e.announcement;return l.a.createElement("li",null,l.a.createElement("h4",null,t.title),l.a.createElement("p",null,t.description),l.a.createElement("span",null,t.date))},b=function(e){var t=e.announcements;return l.a.createElement("div",{className:"Add"},l.a.createElement("ul",null,t.map((function(e){return l.a.createElement(d,{announcement:e,key:e.data.toString()})}))))},v=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"Edit"},l.a.createElement("form",null,l.a.createElement("label",null,"Title",l.a.createElement("input",{type:"text"})),l.a.createElement("br",null),l.a.createElement("label",null,"Description",l.a.createElement("input",{type:"text"})),l.a.createElement("br",null),l.a.createElement("label",null,"Date",l.a.createElement("input",{type:"date"})),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Edit")))}}]),n}(l.a.Component),f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null),l.a.createElement(E,null),l.a.createElement("div",{className:"App"},l.a.createElement("div",null,l.a.createElement(p,null)),l.a.createElement("div",null,l.a.createElement(b,{announcements:[{title:"1",description:"lorem10",date:"22.10.1985"},{title:"11",description:"lorem101111",date:"22.09.1985"}]})),l.a.createElement("div",null,l.a.createElement(v,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.a74df16e.chunk.js.map