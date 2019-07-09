(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(62)},40:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(32),l=a.n(r),c=a(15),s=a(20),i=a(6),m=a(7),u=a(9),d=a(8),p=a(10),h=a(14),b=a(11),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).getStyle=function(){return{textDecoration:a.props.todo.completed?"line-through":"none",textDecorationColor:a.props.todo.completed?"#000":"none"}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.title;return o.a.createElement("div",{className:"task"}," ",o.a.createElement("div",{className:"task--group",style:this.getStyle()},o.a.createElement("input",{type:"checkbox",className:"task--input",onChange:this.props.markComplete.bind(this,t)}),o.a.createElement("li",{className:"task--item"},a)),o.a.createElement("button",{className:"task--button sr-only material-icons",onClick:this.props.delTodo.bind(this,t)},"delete"))}}]),t}(n.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return o.a.createElement(f,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo})})}}]),t}(n.Component);a(40);var E=function(){return o.a.createElement("header",null,o.a.createElement("nav",{className:"nav"},o.a.createElement("ul",{className:"nav--list"},o.a.createElement("li",{className:"nav--item"},o.a.createElement(h.b,{className:"nav--link",to:"react-todo/"},"Home")),o.a.createElement("li",{className:"nav--item"},o.a.createElement(h.b,{className:"nav--link",to:"react-todo/about"},"About")))))},g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={title:""},a.onSubmit=function(e){e.preventDefault(),a.props.addTodo(a.state.title),a.setState({title:""})},a.onChange=function(e){return a.setState(Object(c.a)({},e.target.name,e.target.value))},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"form",onSubmit:this.onSubmit},o.a.createElement("input",{className:"form--input",type:"text",name:"title",placeholder:"Add Todo...",value:this.state.title,onChange:this.onChange}),o.a.createElement("button",{className:"form--button form--button__submit",type:"submit",value:"submit"},"Submit"))}}]),t}(n.Component);var j=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is a ToDo list app, version 1.0.0 that is part of a crash course."))},y=a(16),k=a.n(y),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[],listTitle:""},a.markComplete=function(e){a.setState({todos:a.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed,t.completed?console.log("item with unique ID of: "+e+" is set to complete"):console.log("item with unique ID of: "+e+" is set to incomplete")),t})})},a.delTodo=function(e){k.a.delete("https://jsonplaceholder.typicode.com/todos/&{id}").then(function(t){return a.setState({todos:Object(s.a)(a.state.todos.filter(function(t){return t.id!==e}))})}),console.log(e)},a.listName=function(e){return a.setState(Object(c.a)({},e.target.name,e.target.value))},a.addTodo=function(e){console.log(e),k.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,complete:!1}).then(function(e){return a.setState({todos:[].concat(Object(s.a)(a.state.todos),[e.data])})})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.a.get("https://jsonplaceholder.typicode.com/todos").then(function(t){return e.setState({todos:t.data})})}},{key:"render",value:function(){var e=this;return o.a.createElement(h.a,null,o.a.createElement("div",{className:"wrapper"},o.a.createElement(E,null),o.a.createElement(b.a,{exact:!0,path:"react-todo/",render:function(t){return o.a.createElement(o.a.Fragment,null," ",o.a.createElement("div",{className:"wrapper--title"},o.a.createElement("input",{type:"text",name:"listTitle",className:"wrapper--input",placeholder:"To-Do List",value:e.state.listTitle,onChange:e.listName}),o.a.createElement("i",{className:"material-icons wrapper--icon"},"edit")),o.a.createElement(g,{addTodo:e.addTodo}),o.a.createElement(v,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo}))}}),o.a.createElement(b.a,{path:"react-todo/about",component:j})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.d9831e81.chunk.js.map