(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),l=n.n(r),c=n(6),i=n(7),u=n(5),s=n(1),m=n(2),f=n(4),d=n(3),h=(n(16),function(e){var t=e.todo,n=e.end;return o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement("h1",null,"My ToDo list"),o.a.createElement("h2",null,t," to do, ",n," finished"))}),b=(n(17),function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={term:""},e.onSearchChange=function(t){var n=t.target.value;e.setState({term:n}),e.props.onSearchChange(n)},e}return Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"search",value:this.state.term,onChange:this.onSearchChange})}}]),n}(a.Component)),g=(n(18),function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],e}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.buttons.map((function(t){var n=t.name,a=t.label,r=e.props,l=r.filter,c=r.onFilterChange,i=l===n?"btn-primary":"btn-outline-secondary";return o.a.createElement("button",{type:"button",className:"btn ".concat(i),key:n,onClick:function(){return c(n)}},a)}));return o.a.createElement("div",{className:"btn-group"},t)}}]),n}(a.Component)),p=n(10),v=(n(19),function(e){var t=e.value,n=e.onDeleted,a=e.onToggleDone,r=e.onToggleImportant,l="todo-list-item";return e.done&&(l+=" done"),e.important&&(l+=" important"),o.a.createElement("span",{className:l},o.a.createElement("span",{className:"todo-list-item-label",onClick:a},t),o.a.createElement("button",{type:"button",onClick:r,className:"btn btn-outline-danger btn-sm float-right"},o.a.createElement("i",{className:"fa fa-flag","aria-hidden":"true"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-dark btn-sm float-right",onClick:n},o.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"})))}),D=(n(20),function(e){var t=e.todos,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,l=t.map((function(e){var t=e.id,l=Object(p.a)(e,["id"]);return o.a.createElement("li",{className:"list-group-item",key:t},o.a.createElement(v,Object.assign({},l,{onDeleted:function(){return n(t)},onToggleDone:function(){return r(t)},onToggleImportant:function(){return a(t)}})))}));return o.a.createElement("ul",{className:"list-group todo-list"},l)}),y=(n(21),n(22),function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={label:""},e.onLabelChange=function(t){e.setState({label:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.addItem(e.state.label),e.setState({label:""}),localStorage.setItem("last-item",e.state.label)},e}return Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{className:"add-item-form d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{className:"form-control",type:"text",placeholder:"What to do",onChange:this.onLabelChange,value:this.state.label}),o.a.createElement("button",{className:"btn btn-dark"},"Add"))}}]),n}(a.Component)),E=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).keyId=100,e.state={toDoData:[e.createToDoItem("Drink tea"),e.createToDoItem("Learn React!"),e.createToDoItem("Build awesome React Apps")],term:"",filter:"all"},e.deleteItem=function(t){e.setState((function(e){var n=e.toDoData.findIndex((function(e){return e.id===t}));return{toDoData:[].concat(Object(u.a)(e.toDoData.slice(0,n)),Object(u.a)(e.toDoData.slice(n+1)))}}))},e.addItem=function(t){var n=e.createToDoItem(t);e.setState((function(t){return{toDoData:[].concat(Object(u.a)(e.state.toDoData),[n])}}))},e.onToggleImportant=function(t){e.setState((function(n){var a=n.toDoData;return{toDoData:e.toggleProperty(a,t,"important")}}))},e.onToggleDone=function(t){e.setState((function(n){var a=n.toDoData;return{toDoData:e.toggleProperty(a,t,"done")}}))},e.onSearchChange=function(t){e.setState({term:t})},e.onFilterChange=function(t){e.setState({filter:t})},e}return Object(m.a)(n,[{key:"createToDoItem",value:function(e){return{id:this.keyId++,value:e,important:!1,done:!1}}},{key:"toggleProperty",value:function(e,t,n){var a=e.findIndex((function(e){return e.id===t})),o=e[a],r=Object(i.a)(Object(i.a)({},o),{},Object(c.a)({},n,!o[n]));return[].concat(Object(u.a)(e.slice(0,a)),[r],Object(u.a)(e.slice(a+1)))}},{key:"search",value:function(e,t){return 0===t.length?e:e.filter((function(e){return e.value.toLowerCase().indexOf(t.toLowerCase())>-1}))}},{key:"filter",value:function(e,t){switch(t){case"all":return e;case"active":return this.state.toDoData.filter((function(e){return!e.done}));case"done":return this.state.toDoData.filter((function(e){return e.done}));default:return e}}},{key:"render",value:function(){var e=this.state,t=e.toDoData,n=e.term,a=e.filter,r=t.filter((function(e){return e.done})).length,l=t.length-r,c=this.filter(this.search(t,n),a);return o.a.createElement("div",{className:"todo-app"},o.a.createElement(h,{todo:l,end:r}),o.a.createElement("div",{className:"top-panel d-flex"},o.a.createElement(b,{onSearchChange:this.onSearchChange}),o.a.createElement(g,{filter:a,onFilterChange:this.onFilterChange})),o.a.createElement(D,{todos:c,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),o.a.createElement(y,{addItem:this.addItem}))}}]),n}(a.Component);l.a.render(o.a.createElement(E,null),document.getElementById("root")),window.addEventListener("message",(function(e){alert(e.data)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.2a7ed4e9.chunk.js.map