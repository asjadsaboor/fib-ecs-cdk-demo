(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),o=n(5),a=n.n(o),i=(n(11),n(3)),s=n.n(i),u=n(6),j=n(4),b=n(0);var h=function(){var t=Object(c.useState)(""),e=Object(j.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)(""),a=Object(j.a)(o,2),i=a[0],h=a[1],l=function(){var t=Object(u.a)(s.a.mark((function t(e){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),c=window.location.protocol+"//"+window.location.host,console.log("baserUrl",c),fetch(c+"/generate/".concat(n)).then((function(t){return t.json()})).then((function(t){h(t.output),r("")})).catch((function(t){console.log("Error in fetching weather data")}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h2",{children:"Fibonacci Generator 1.0v"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("form",{onSubmit:l,children:[Object(b.jsx)("label",{children:"Number: "}),Object(b.jsx)("input",{type:"text",onChange:function(t){return r(t.target.value)}}),Object(b.jsx)("button",{type:"submit",children:"Generate"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("h2",{children:["Result: ",i]})]})]})},l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),o(t),a(t)}))};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),l()}},[[14,1,2]]]);
//# sourceMappingURL=main.9c5142f3.chunk.js.map