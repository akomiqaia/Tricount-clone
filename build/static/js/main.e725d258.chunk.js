(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(47)},47:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(22),l=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(5),s=a(6),o=a(8),m=a(7),u=a(9),d=a(10),h=a(11),y=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"ui fluid two item pointing menu"},i.a.createElement(h.b,{to:"/expenses",className:"item",key:"exp1"},"Expenses"),i.a.createElement(h.b,{to:"/debts",className:"item",key:"debts1"},"Debts"))}}]),t}(n.Component),p=a(29),v=a(27),f=a.n(v),E=a(28),b=a.n(E),k=function(e){return i.a.createElement("div",{key:e.id},i.a.createElement("input",{key:e.id,onChange:e.handleCheck,type:"checkbox",checked:e.isChecked,value:e.value}),i.a.createElement("label",null,e.value),i.a.createElement("span",{style:{float:"right",marginRright:"0.25em"}},e.dynamicMoney),i.a.createElement("div",{className:"ui divider"}))},C="ADD_EXPENSE",O="DELETE_EXPENSE";var g=Object(p.a)(function(e,t){if(t.type===C){var a={id:b.a.v4(),text:t.text,timestamp:f()().format("Do of MMM"),payedBy:t.payedBy,amountPayed:t.amount};return{listOfExpenses:e.listOfExpenses.concat(a)}}return t.type===O?{listOfExpenses:e.listOfExpenses.filter(function(e){return e.id!==t.id})}:e},{listOfExpenses:[]}),j=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.subscribe(function(){return e.forceUpdate()})}},{key:"render",value:function(){var e=g.getState().listOfExpenses;return i.a.createElement("div",{className:"ui centered segment"},i.a.createElement(M,{listOfExpenses:e}),i.a.createElement(N,null))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={isOpen:!1,title:"",amount:"",payedBy:"Andrea",forWhom:[{id:1,value:"Andrea",isChecked:!1,dynamicMoney:0},{id:2,value:"Ariann",isChecked:!1,dynamicMoney:0},{id:3,value:"Ako",isChecked:!1,dynamicMoney:0},{id:4,value:"Evie",isChecked:!1,dynamicMoney:0},{id:5,value:"Camilla",isChecked:!1,dynamicMoney:0},{id:6,value:"Max",isChecked:!1,dynamicMoney:0},{id:7,value:"Molly",isChecked:!1,dynamicMoney:0}]},a.handleFormOpen=function(){a.setState({isOpen:!0})},a.handleFormcClose=function(){a.setState({isOpen:!1})},a.onChange=function(e){"title"===e.target.name?a.setState({title:e.target.value}):"amount"===e.target.name?a.setState({amount:e.target.value}):"select"===e.target.name&&a.setState({payedBy:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),g.dispatch({type:C,text:a.state.title,amount:a.state.amount,payedBy:a.state.payedBy}),a.setState({isOpen:!1,title:"",amount:"",payedBy:"Andrea",forWhom:[{id:1,value:"Andrea",isChecked:!1,dynamicMoney:0},{id:2,value:"Ariann",isChecked:!1,dynamicMoney:0},{id:3,value:"Ako",isChecked:!1,dynamicMoney:0},{id:4,value:"Evie",isChecked:!1,dynamicMoney:0},{id:5,value:"Camilla",isChecked:!1,dynamicMoney:0},{id:6,value:"Max",isChecked:!1,dynamicMoney:0},{id:7,value:"Molly",isChecked:!1,dynamicMoney:0}]})},a.handleCheck=function(e){var t=a.state.forWhom,n=a.state.amount;t.forEach(function(a){if(a.value===e.target.value){a.isChecked=e.target.checked;var i=t.filter(function(e){return e.isChecked}),c=n/i.length;a.isChecked||(a.dynamicMoney=0),i.forEach(function(e){e.dynamicMoney=c})}}),a.setState({forWhom:t})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.state.isOpen?i.a.createElement("form",{className:"ui form"},i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Title"),i.a.createElement("input",{onChange:this.onChange,value:this.state.title,type:"text",name:"title"})),i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Amount"),i.a.createElement("input",{type:"number",name:"amount",onChange:this.onChange,value:this.state.amount})),i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Paid by:"),i.a.createElement("select",{name:"select",className:"ui fluid dropdown",onChange:this.onChange},this.state.forWhom.map(function(e){return i.a.createElement("option",{key:e.id,value:e.value},e.value)}))),i.a.createElement("div",{className:"ui divider"}),i.a.createElement("div",{className:"field"},this.state.forWhom.map(function(t){return i.a.createElement(k,Object.assign({dynamicMoney:e.state.forWhom.dynamicMoney,key:t.id,handleCheck:e.handleCheck},t))})),i.a.createElement("button",{onClick:this.handleSubmit,className:"ui primary button",type:"submit"},"Submit"),i.a.createElement("button",{onClick:this.handleFormcClose,className:"ui secondary button",type:"submit"},"Cancel")):i.a.createElement("div",{className:"ui basic content center aligned segment"},i.a.createElement("button",{className:"ui basic button icon",onClick:this.handleFormOpen},i.a.createElement("i",{className:"plus icon"})))}}]),t}(i.a.Component),M=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).handleClick=function(e){g.dispatch({type:O,id:e})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.listOfExpenses.map(function(t,a){return i.a.createElement("div",{className:"item",key:a,onClick:function(){return e.handleClick(t.id)}},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.text),i.a.createElement("div",{className:"ui right floated header"},"".concat(t.amountPayed," \xa3")),i.a.createElement("div",{className:"meta"},i.a.createElement("span",null,"Payed by: ",i.a.createElement("strong",null,t.payedBy)),i.a.createElement("span",{className:"ui right floated"},t.timestamp))))});return i.a.createElement("div",{className:"ui divided link items"},t)}}]),t}(i.a.Component),x=j,w=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"ui centered segment"},"Hello")}}]),t}(n.Component),S=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"ui four column centered grid"},i.a.createElement("div",{className:"column"},i.a.createElement("div",null,i.a.createElement(y,null)),i.a.createElement("div",null,i.a.createElement(d.c,null,i.a.createElement(d.a,{path:"/expenses",component:x}),i.a.createElement(d.a,{path:"/debts",component:w})))))}}]),t}(n.Component);l.a.render(i.a.createElement(h.a,null,i.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.e725d258.chunk.js.map