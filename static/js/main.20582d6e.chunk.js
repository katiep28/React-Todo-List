(this["webpackJsonpreact-todo-application"]=this["webpackJsonpreact-todo-application"]||[]).push([[0],{19:function(e,t,a){e.exports=a(50)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},30:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(17),l=a.n(s),o=a(2),r=a(3),i=a(5),u=a(4),m=a(6),d=(a(24),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).handleCompleteTick=function(){a.props.updateTaskFunc(a.props.id,"C")},a.handleDeleteTick=function(){a.props.updateTaskFunc(a.props.id,"D")},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"row padditemrow"},c.a.createElement("div",{className:"col-1 col-lg-1 align=left"},c.a.createElement("i",{className:"fa fa-trash fa-1x",onClick:this.handleDeleteTick})),c.a.createElement("div",{className:"col-6  col-lg-7 col-blue"},c.a.createElement("div",null,c.a.createElement("li",null,this.props.text))),c.a.createElement("div",{className:"col-4 col-lg-3 col-blue"},c.a.createElement("div",{align:"right"},this.props.date)),c.a.createElement("div",{className:"col-1 col-lg-1 justify-right"},c.a.createElement("i",{className:"fa fa-check",onClick:this.handleCompleteTick})))}}]),t}(c.a.Component)),p=(a(25),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).handleTick=function(){a.props.itemsToRemoveFunc(a.props.id)},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-10 col-yell col-lg-10"},c.a.createElement("li",null,this.props.text)),c.a.createElement("div",{className:"col-2 col-lg-2justify-right"},c.a.createElement("input",{className:"form-check-input paddleft",type:"checkbox",id:"defaultCheck4",value:"option1",onClick:this.handleTick})))}}]),t}(c.a.Component)),h=(a(26),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).handleTick=function(){a.props.itemsToRemoveFunc(a.props.id)},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-10 col-red col-lg-10"},c.a.createElement("li",null,this.props.text)),c.a.createElement("div",{className:"col-2 col-lg-2"},c.a.createElement("input",{className:"form-check-input paddleft",type:"checkbox",id:"defaultCheck5",value:"option1",onClick:this.handleTick})))}}]),t}(c.a.Component)),v=(a(27),function(e){function t(){var e,n;Object(o.a)(this,t);for(var c=arguments.length,s=new Array(c),l=0;l<c;l++)s[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={newTaskText:"",newTaskDate:""},n.updateTaskText=function(e){n.setState({newTaskText:e.target.value})},n.updateTaskDate=function(e){n.setState({newTaskDate:e.target.value})},n.handleClick=function(){var e=a(28)().format("YYYY-MM-DD");""===n.state.newTaskText&&alert("ERROR: You must enter some text before pressing the ADD button"),""!==n.state.newTaskDate?n.state.newTaskDate<=e?alert("ERROR: The date must not be earlier than today"):(n.props.addTaskFunc(n.state.newTaskText,n.state.newTaskDate),n.setState({newTaskText:"",newTaskDate:""})):alert("ERROR: You must enter a date before pressing the ADD button")},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-3 col-lg-3"},c.a.createElement("h5",{align:"center"}," What do you need to do?")),c.a.createElement("div",{className:"col-9 col-lg-9"},c.a.createElement("input",{id:"addItemInput",type:"text",className:"form-control",placeholder:"E.g. take out bins",value:this.state.newTaskText,onChange:this.updateTaskText}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-3 col-lg-3"},c.a.createElement("h5",{align:"center"}," When do you need it by?")),c.a.createElement("div",{className:"col-9 col-lg-9"},c.a.createElement("input",{id:"addDateInput",type:"date",className:"duedate",value:this.state.newTaskDate,onChange:this.updateTaskDate}))),c.a.createElement("div",{className:"row paddingbelow "},c.a.createElement("div",{className:"col-3 col-lg-3"}),c.a.createElement("div",{className:"col-9 col-lg-9"},c.a.createElement("div",null,c.a.createElement("button",{className:"btn btn-warning",onClick:this.handleClick},"Add")))))}}]),t}(c.a.Component)),f=(a(30),a(18)),k=a.n(f),E=a(7),g=a.n(E),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={tasks:[],removeTaskArray:[]},a.addTask=function(e,t){var n={text:e,status:"N",date:t,id:k.a};g.a.post("https://9dcour1we6.execute-api.eu-west-2.amazonaws.com/dev/tasks",n).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));var c=a.state.tasks.slice();c.push(n),a.setState({tasks:c})},a.updateTask=function(e,t){var n=a.state.tasks.map((function(a){return a.id===e&&(a.status=t,g.a.put("https://9dcour1we6.execute-api.eu-west-2.amazonaws.com/dev/tasks/"+e+"/"+t).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))),a}));a.setState({tasks:n})},a.itemsToRemove=function(e){var t=a.state.removeTaskArray.slice();t.push(e),a.setState({removeTaskArray:t})},a.handleRemove=function(){if(window.confirm("Are you sure you want to permenantly remove these item?")){a.state.removeTaskArray.forEach((function(e){g.a.delete("https://9dcour1we6.execute-api.eu-west-2.amazonaws.com/dev/tasks/"+e).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}));var e=a.state.tasks.filter((function(e){return"R"!==e.status}));a.setState({tasks:e})}else for(var t=document.getElementsByTagName("input"),n=0;n<t.length;n++)"checkbox"===t[n].type&&(t[n].checked=!1);a.setState({removeTaskArray:[]})},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://9dcour1we6.execute-api.eu-west-2.amazonaws.com/dev/tasks").then((function(t){e.setState({tasks:t.data.tasks})})).catch((function(e){console.log(e)}))}},{key:"componentDidUpdate",value:function(e){var t=this;g.a.get("https://9dcour1we6.execute-api.eu-west-2.amazonaws.com/dev/tasks").then((function(e){t.setState({tasks:e.data.tasks})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.tasks.sort((function(e,t){return e.date<t.date?-1:e.date>t.date?1:0})).filter((function(e){return"N"===e.status})),a=this.state.tasks.filter((function(e){return"C"===e.status})),n=this.state.tasks.filter((function(e){return"D"===e.status}));return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row paddingbelow"},c.a.createElement("div",{className:"col-8"},c.a.createElement("h2",{align:"right"},"Lists Lists Lists (L3)")),c.a.createElement("div",{className:"col-4 align=right"},c.a.createElement("h4",null,(new Date).toDateString()))),c.a.createElement("div",null,c.a.createElement(v,{addTaskFunc:this.addTask})),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-1 col-lg-1"},c.a.createElement("p",{align:"right"},"Delete")),c.a.createElement("div",{className:"col-10 col-lg-6"},c.a.createElement("h3",{align:"center"},t.length," Things To Do")),c.a.createElement("div",{className:"col-1 col-lg-1"},c.a.createElement("p",{align:"center"},"Complete"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 col-lg-8"},c.a.createElement("ol",null,t.map((function(t){return c.a.createElement(d,{updateTaskFunc:e.updateTask,text:t.text,status:t.status,date:t.date.substring(0,10),id:t.id,key:t.id})})))),c.a.createElement("div",{className:"col-12 col-lg-4 border border-secondary border-thick"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("h4",null," Completed Tasks")),c.a.createElement("ol",null,a.map((function(t){return c.a.createElement(p,{itemsToRemoveFunc:e.itemsToRemove,text:t.text,status:t.status,date:t.date,id:t.id,key:t.id})}))),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("h4",null," Deleted Tasks")),c.a.createElement("ol",null,n.map((function(t){return c.a.createElement(h,{itemsToRemoveFunc:e.itemsToRemove,text:t.text,status:t.status,date:t.date,id:t.id,key:t.id})}))),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("h4",null,"Select Items to Remove")),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:this.handleRemove},"Remove")))),c.a.createElement("footer",{className:"container-fluid"},c.a.createElement("p",null,"Website created by KP Creations")))}}]),t}(c.a.Component);l.a.render(c.a.createElement(T,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.20582d6e.chunk.js.map