(this.webpackJsonpannouncement=this.webpackJsonpannouncement||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n.n(c),o=(n(14),n(6)),i=n(5),u=n(1),s=n(2),m=n(4),d=n(3),E=(n(15),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Search"},r.a.createElement("input",{placeholder:"search",className:"search"}))}}]),n}(a.Component)),h=function(){return r.a.createElement("h1",null,"Announcements")},b=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",desc:""},e.onChangeTitle=function(t){e.setState({title:t.target.value})},e.onChangeDesc=function(t){e.setState({desc:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.AddAnnounc(e.state.title,e.state.desc),e.setState({title:"",desc:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Add"},r.a.createElement("h2",null,"Add announcement"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("label",null,"Title"),r.a.createElement("input",{type:"text",onChange:this.onChangeTitle,value:this.state.title}),r.a.createElement("br",null),r.a.createElement("label",null,"Description"),r.a.createElement("textarea",{onChange:this.onChangeDesc,value:this.state.desc}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Add")))}}]),n}(a.Component),f=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.announcement,n=e.onDeleted,a=e.onEdit;return r.a.createElement("li",{key:t.date.toString()},r.a.createElement("h4",null,t.title),r.a.createElement("p",null,t.description),r.a.createElement("span",null,t.date)," ",r.a.createElement("br",null),r.a.createElement("button",{className:"edit",onClick:a},"Edit"),r.a.createElement("button",{className:"del",onClick:n},"Delete"))}}]),n}(a.Component),p=function(e){var t=e.announcements,n=e.onDeleted,a=e.onEdit;return r.a.createElement("div",null,r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(f,{announcement:e,onDeleted:function(){return n(e.id)},onEdit:function(){return a(e.id)}})}))))},v=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Edit"},r.a.createElement("h2",null,"Edit announcement"),r.a.createElement("form",null,r.a.createElement("label",null,"Title"),r.a.createElement("input",{type:"text"}),r.a.createElement("br",null),r.a.createElement("label",null,"Description"),r.a.createElement("textarea",null),r.a.createElement("br",null),r.a.createElement("label",null,"Date"),r.a.createElement("input",{type:"date"}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Edit")))}}]),n}(a.Component),j=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={announcements:[{id:"0000",title:"1",description:"lorem10",date:"22.10.1985"},{id:"0001",title:"11",description:"lorem101111",date:"22.09.1985"}]},e.delItem=function(t){e.setState((function(e){return{announcements:e.announcements.filter((function(e){return e.id!==t}))}}))},e.addItem=function(t,n){var a=new Date,r=a.getDate()+".0"+a.getMonth()+"."+a.getFullYear()+"  "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds(),c={id:Date.now(),title:t,description:n,date:r};e.setState((function(e){var t=e.announcements;return{announcements:[].concat(Object(i.a)(t),[c])}}))},e.editItem=function(t){e.setState((function(e){var n=e.announcements,a=n.findIndex((function(e){return e.id===t})),r=n[a],c=Object(o.a)(Object(o.a)({},r),{},{title:"Yell",description:"jdsanfjednSMAQdjIaebfugwriugQ"});return{announcements:[].concat(Object(i.a)(n.slice(0,a)),[c],Object(i.a)(n.slice(a+1)))}}))},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Header"},r.a.createElement(h,null)),r.a.createElement("div",{className:"Search"},r.a.createElement(E,null)),r.a.createElement("div",{className:"App"},r.a.createElement(b,{AddAnnounc:this.addItem}),r.a.createElement(p,{announcements:this.state.announcements,onDeleted:this.delItem,onEdit:this.editItem}),r.a.createElement(v,null)))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.9b48e8ea.chunk.js.map