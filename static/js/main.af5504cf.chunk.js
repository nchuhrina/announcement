(this.webpackJsonpannouncement=this.webpackJsonpannouncement||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),i=n.n(c),l=(n(14),n(6)),o=n(5),s=n(1),u=n(2),d=n(4),m=n(3),h=(n(15),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={qwery:""},e.searchChange=function(t){var n=t.target.value;e.setState({qwery:n}),e.props.onSearch(n)},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Search"},r.a.createElement("input",{onChange:this.searchChange,placeholder:"search",className:"search",value:this.state.qwery}))}}]),n}(a.Component)),p=function(){return r.a.createElement("h1",null,"Announcements")},E=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",desc:""},e.onChangeTitle=function(t){e.setState({title:t.target.value})},e.onChangeDesc=function(t){e.setState({desc:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.AddAnnounc(e.state.title,e.state.desc),e.setState({title:"",desc:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Add"},r.a.createElement("h2",null,"Add announcement"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("label",null,"Title"),r.a.createElement("input",{type:"text",onChange:this.onChangeTitle,value:this.state.title}),r.a.createElement("br",null),r.a.createElement("label",null,"Description"),r.a.createElement("textarea",{onChange:this.onChangeDesc,value:this.state.desc}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Add")))}}]),n}(a.Component),f=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.announcement,n=e.onDeleted,a=e.onEdit;return r.a.createElement("li",{key:t.date.toString()},r.a.createElement("h4",null,t.title),r.a.createElement("p",null,t.description),r.a.createElement("span",null,t.date)," ",r.a.createElement("br",null),r.a.createElement("button",{className:"edit",onClick:a},"Edit"),r.a.createElement("button",{className:"del",onClick:n},"Delete"))}}]),n}(a.Component),b=function(e){var t=e.announcements,n=e.onDeleted,a=e.onEdit;return r.a.createElement("div",null,r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(f,{announcement:e,onDeleted:function(){return n(e.id)},onEdit:function(){return a(e.id,e.title,e.description,e.date)}})}))))},v=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={id:e.props.data.id,title:"",desc:"",date:""},e.onChangeTitle=function(t){e.setState({title:t.target.value})},e.onChangeDesc=function(t){e.setState({desc:t.target.value})},e.onChangeDate=function(t){e.setState({date:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.setEdited(e.state.id,e.state.title,e.state.desc,e.state.date),e.setState({id:"",title:"",desc:"",date:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Add"},r.a.createElement("h2",null,"Add announcement"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("label",null,"Title"),r.a.createElement("input",{type:"text",onChange:this.onChangeTitle,placeholder:this.props.data.title}),r.a.createElement("br",null),r.a.createElement("label",null,"Description"),r.a.createElement("textarea",{onChange:this.onChangeDesc,placeholder:this.props.data.description}),r.a.createElement("br",null),r.a.createElement("label",null,"Date"),r.a.createElement("input",{type:"date",onChange:this.onChangeDate,placeholder:this.props.data.date}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Edit")))}}]),n}(a.Component),g=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={announcements:[{id:"0000",title:"1",description:"lorem10",date:"1985-01-12"},{id:"0001",title:"11",description:"lorem101111",date:"1985-11-11"}],qwery:"",tempEditing:{id:"",title:"",description:"",date:""}},e.delItem=function(t){e.setState((function(e){return{announcements:e.announcements.filter((function(e){return e.id!==t}))}}))},e.addItem=function(t,n){var a=new Date,r=a.getDate()+".0"+a.getMonth()+"."+a.getFullYear()+"  "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds(),c={id:Date.now(),title:t,description:n,date:r};e.setState((function(e){var t=e.announcements;return{announcements:[].concat(Object(o.a)(t),[c])}}))},e.onEdit=function(t,n,a,r){e.setState((function(e){var c=e.tempEditing;return{tempEditing:Object(l.a)(Object(l.a)({},c),{},{id:t,title:n,description:a,date:r})}})),console.log(e.state.tempEditing)},e.setEdited=function(t,n,a,r){var c={id:t,title:n,description:a,date:r};e.setState((function(e){var n=e.announcements;return{announcements:[].concat(Object(o.a)(n.slice(0,n.indexOf((function(e){return e.id===t})))),[c],Object(o.a)(n.slice(n.indexOf((function(e){return e.id===t}))+1)))}}))},e.search=function(e,t){return 0===t.length?e:e.filter((function(e){return e.title.indexOf(t)>-1}))},e.onSearch=function(t){e.setState({qwery:t})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.search(this.state.announcements,this.state.qwery);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Header"},r.a.createElement(p,null)),r.a.createElement("div",{className:"Search"},r.a.createElement(h,{onSearch:this.onSearch})),r.a.createElement("div",{className:"App"},r.a.createElement(E,{AddAnnounc:this.addItem}),r.a.createElement(b,{announcements:e,onDeleted:this.delItem,onEdit:this.onEdit}),r.a.createElement(v,{data:this.state.tempEditing,setEdited:this.setEdited})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.af5504cf.chunk.js.map