(this.webpackJsonpannouncement=this.webpackJsonpannouncement||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),c=n.n(l),i=(n(14),n(5)),o=n(8),u=n(1),s=n(2),d=n(4),m=n(3),h=(n(15),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Search"},r.a.createElement("input",{placeholder:"search",className:"search"}))}}]),n}(a.Component)),p=function(){return r.a.createElement("h1",null,"Announcements")},E=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={title:"",desc:""},e.onChangeTitle=function(t){e.setState({title:t.target.value})},e.onChangeDesc=function(t){e.setState({desc:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.AddAnnounc(e.state.title,e.state.desc),e.setState({title:"",desc:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Add"},r.a.createElement("h2",null,"Add announcement"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("label",null,"Title"),r.a.createElement("input",{type:"text",onChange:this.onChangeTitle,value:this.state.title}),r.a.createElement("br",null),r.a.createElement("label",null,"Description"),r.a.createElement("textarea",{onChange:this.onChangeDesc,value:this.state.desc}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Add")))}}]),n}(a.Component),f=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.announcement,n=e.onDeleted,a=e.onEdit;return r.a.createElement("li",{key:t.date.toString()},r.a.createElement("h4",null,t.title),r.a.createElement("p",null,t.description),r.a.createElement("span",null,t.date)," ",r.a.createElement("br",null),r.a.createElement("button",{className:"edit",onClick:a},"Edit"),r.a.createElement("button",{className:"del",onClick:n},"Delete"))}}]),n}(a.Component),b=function(e){var t=e.announcements,n=e.onDeleted,a=e.onEdit;return r.a.createElement("div",null,r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(f,{announcement:e,onDeleted:function(){return n(e.id)},onEdit:function(){return a(e.id,e.title,e.description,e.date)}})}))))},v=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={id:e.props.data.id,title:e.props.data.title,desc:e.props.data.description,date:e.props.data.date},e.onChangeTitle=function(t){e.setState({title:t.target.value})},e.onChangeDesc=function(t){e.setState({desc:t.target.value})},e.onChangeDate=function(t){e.setState({date:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.setEdited(e.state.id,e.state.title,e.state.desc,e.state.date),e.setState({id:"",title:"",desc:"",date:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Add"},r.a.createElement("h2",null,"Add announcement"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("label",null,"Title"),r.a.createElement("input",{type:"text",onChange:this.onChangeTitle,value:this.state.title}),r.a.createElement("br",null),r.a.createElement("label",null,"Description"),r.a.createElement("textarea",{onChange:this.onChangeDesc,value:this.state.title}),r.a.createElement("br",null),r.a.createElement("label",null,"Date"),r.a.createElement("input",{type:"date",onChange:this.onChangeDate,value:this.state.date}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Edit")))}}]),n}(a.Component),g=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={announcements:[{id:"0000",title:"1",description:"lorem10",date:"22.10.1985"},{id:"0001",title:"11",description:"lorem101111",date:"22.09.1985"}],tempEditing:{id:"1",title:"11",description:"11",date:"2011-11-11"}},e.delItem=function(t){e.setState((function(e){return{announcements:e.announcements.filter((function(e){return e.id!==t}))}}))},e.addItem=function(t,n){var a=new Date,r=a.getDate()+".0"+a.getMonth()+"."+a.getFullYear()+"  "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds(),l={id:Date.now(),title:t,description:n,date:r};e.setState((function(e){var t=e.announcements;return{announcements:[].concat(Object(o.a)(t),[l])}}))},e.onEdit=function(t,n,a,r){e.setState((function(e){var l=e.tempEditing;return{tempEditing:Object(i.a)(Object(i.a)({},l),{},{id:t,title:n,description:a,date:r})}})),console.log(e.state.tempEditing)},e.setEdited=function(t,n,a,r){e.setState((function(e){return{announcements:e.announcements.filter((function(e){return e.id!==t}))}}))},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Header"},r.a.createElement(p,null)),r.a.createElement("div",{className:"Search"},r.a.createElement(h,null)),r.a.createElement("div",{className:"App"},r.a.createElement(E,{AddAnnounc:this.addItem}),r.a.createElement(b,{announcements:this.state.announcements,onDeleted:this.delItem,onEdit:this.onEdit}),r.a.createElement(v,{data:this.state.tempEditing,setEdited:this.setEdited})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.5d8d2951.chunk.js.map