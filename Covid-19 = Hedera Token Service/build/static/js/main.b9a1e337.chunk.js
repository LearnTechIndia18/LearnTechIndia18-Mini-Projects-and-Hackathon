(this["webpackJsonpcrud-firebase"]=this["webpackJsonpcrud-firebase"]||[]).push([[0],{11:function(e,a,t){},14:function(e,a,t){e.exports=t(36)},19:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),c=t.n(r),o=(t(19),t(11),t(4)),i=t(9),s=t.n(i);s.a.initializeApp({apiKey:"AIzaSyD1KDtf3PPf5PtYmYIfhnubkMTlHDgJTzI",authDomain:"hedera-hash-graph.firebaseapp.com",databaseURL:"https://hedera-hash-graph-default-rtdb.firebaseio.com",projectId:"hedera-hash-graph",storageBucket:"hedera-hash-graph.appspot.com",messagingSenderId:"903673590600",appId:"1:903673590600:web:9118409fb8028cbd56397d",measurementId:"${config.measurementId}"});var m=s.a;function u(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),i=Object(o.a)(c,2),s=i[0],u=i[1],d=Object(n.useState)(""),p=Object(o.a)(d,2),h=p[0],E=p[1],v=Object(n.useState)(""),b=Object(o.a)(v,2),f=b[0],g=b[1],y=Object(n.useState)(""),w=Object(o.a)(y,2),j=w[0],O=w[1],x=Object(n.useState)(""),S=Object(o.a)(x,2),k=S[0],C=S[1];return l.a.createElement("div",null,l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-25"},l.a.createElement("label",{for:"fname"},l.a.createElement("h5",null,"Patient Name"))),l.a.createElement("div",{class:"col-75"},l.a.createElement("input",{type:"text",id:"pname",name:"patientName",onChange:function(e){r(e.target.value)},value:t,placeholder:"Enter your name..",style:{width:"300px"}}))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-25"},l.a.createElement("label",{for:"subject",style:{marginTop:"1rem"}},l.a.createElement("h5",null,"Symptoms"))),l.a.createElement("div",{class:"col-75"},l.a.createElement("textarea",{id:"subject",onChange:function(e){u(e.target.value)},value:s,name:"Symptoms",placeholder:"Write about your symptoms..",style:{height:"100px",width:"300px"}}))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-25"},l.a.createElement("label",{for:"age"},l.a.createElement("h5",null,"Age"))),l.a.createElement("div",{class:"col-75"},l.a.createElement("input",{type:"number",id:"age",name:"age",onKeyDown:function(e){return"e"===e.key&&e.preventDefault()},onChange:function(e){E(e.target.value)},value:h,placeholder:"Enter your Age..",style:{width:"300px"}}))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-25"},l.a.createElement("label",{for:"phone-number",style:{marginTop:"1rem"}},l.a.createElement("h5",null,"Phone Number"))),l.a.createElement("div",{class:"col-75"},l.a.createElement("input",{type:"number",id:"phone-number",onKeyDown:function(e){return"e"===e.key&&e.preventDefault()},name:"number",onChange:function(e){g(e.target.value)},value:f,placeholder:"Enter your Phone Number..",style:{width:"300px"}}))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-25"},l.a.createElement("label",{for:"email",style:{marginTop:"1rem"}},l.a.createElement("h5",null,"Email"))),l.a.createElement("div",{class:"col-75"},l.a.createElement("input",{type:"email",id:"email",name:"email",onChange:function(e){O(e.target.value)},value:j,placeholder:"Enter your Email..",style:{width:"300px"},required:!0}))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-25"},l.a.createElement("label",{for:"location",style:{marginTop:"1rem"}},l.a.createElement("h5",null,"Location"))),l.a.createElement("div",{class:"col-75"},l.a.createElement("input",{type:"url",id:"location",name:"location",onChange:function(e){C(e.target.value)},value:k,placeholder:"Paste Your URL Here..",style:{width:"300px"},required:!0}))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-75"},l.a.createElement("button",{className:"sub",style:{color:"white",width:"300px",height:"40px",borderRadius:"2rem",border:"none",background:"#3366ff",marginTop:"2rem"},onClick:function(){var e=m.database().ref("Covid-19 Patient Details"),a={patientName:t,symptoms:s,age:h,phonenumber:f,email:j,location:k,status:!1};e.push(a),alert("The Patient Details are Successfully Submitted to Hedera")}},"Add Patient"),l.a.createElement("h6",{style:{marginTop:"1rem",fontWeight:"bolder"}},"Click here to submit!"))))}var d=t(13);function p(e){e.todo;return l.a.createElement("div",null)}function h(){var e=Object(n.useState)(),a=Object(o.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){m.database().ref("Covid-19 Patient Details").on("value",(function(e){var a=e.val(),t=[];for(var n in a)t.push(Object(d.a)({id:n},a[n]));r(t)}))}),[]),l.a.createElement("div",null,t?t.map((function(e,a){return l.a.createElement(p,{todo:e,key:a})})):"")}function E(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Hello, Hedera"),l.a.createElement("div",null,l.a.createElement("h1",{class:"line-1 anim-typewriter",style:{marginTop:"2rem",textShadow:"0 0 3px #666699",textTransform:"uppercase"}},"Covid-19 Reporter")),l.a.createElement(u,null),l.a.createElement(h,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.b9a1e337.chunk.js.map