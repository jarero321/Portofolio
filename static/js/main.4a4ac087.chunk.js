(this["webpackJsonpcarlos-jarero"]=this["webpackJsonpcarlos-jarero"]||[]).push([[0],{25:function(n,e,t){"use strict";t.r(e);var i,c,a,s,o,r,j,b,f,h=t(0),u=t.n(h),d=t(13),l=t.n(d),p=t(15),O=t(2),g=t(3),x=t.p+"static/media/MSGOTHIC.1e0e7fbc.TTF",m=t.p+"static/media/TCM.7b67eec0.TTF",v=Object(g.a)(i||(i=Object(O.a)(['\n  body {\n    @font-face {\n     font-family: "MS Gothic";\n     src: url(',');\n    }\n    @font-face {\n      font-family: "TMC" ;\n      src: url(',");\n    }\n    \n    background-color:#01132A;\n  }\n  *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n"])),x,m),w=t(9),y=t(4),C="#11DFBC",F="#FFFAFA",S=g.b.section(c||(c=Object(O.a)(["\n    width: 100vw;\n    height:100vh;\n\n"]))),M=g.b.div(a||(a=Object(O.a)(['\n    width: 90%;\n    height: 30%;\n    display:flex;\n    justify-content:space-around;\n    align-items:center;\n    position:relative;\n    top:25%;\n    left:5%;\n    h2{\n        font-family:"MS Gothic";\n        color:',';\n        font-size:25px;\n        position:relative;\n        top:6%;\n        font-weight:700;\n    }\n    span {\n        order:3;\n        font-family:"MS Gothic";\n        color:',";\n        font-size:25px;\n        font-weight:700;\n        position:relative;\n        top:6%;\n\n    }\n    img{\n        width:40%;\n        height:40%;\n    }\n    @media (min-width:768px){\n        width: 70%;\n        left:15%;\n        h2{\n            font-size:40px;\n        }\n        span{\n            font-size:40px;\n        }\n        img{\n            width:40%;\n            height:40%;\n        }\n    }\n    @media (min-width:1024px){\n        h2{\n            font-size:50px;\n        }\n        span{\n            font-size:50px;\n            }\n    }\n    @media (min-width:1200px){\n        width:35%;\n        left:27.5%;\n        h2{\n            font-size:35px;\n        }\n        span{\n            font-size:35px;\n        }\n\n    }\n"])),F,C),z=g.b.div(s||(s=Object(O.a)(["\n    width: 100%;\n    height:.5%;\n    background-color:",";\n    position: relative;\n    top:16%;\n    @media(min-width:1200px){\n        top:17%;\n    }\n"])),C),T=t.p+"static/media/MoonLoading.900a21f7.svg",k=t(1),G=function(){var n=Object(h.useRef)(),e=Object(h.useRef)(),t=Object(h.useRef)(),i=Object(h.useRef)();return Object(h.useEffect)((function(){Object(y.a)({targets:[n.current,e.current],opacity:[0,1],duration:1500,delay:1500,easing:"easeOutSine"}),Object(y.a)({targets:t.current,opacity:[0,1],width:["0","100%"],duration:3e3,easing:"easeOutSine"}),Object(y.a)({targets:i.current,opacity:[0,1],translateY:["-400","0"],duration:2e3,easing:"easeOutBounce"})}),[]),Object(k.jsxs)(S,{children:[Object(k.jsxs)(M,{children:[Object(k.jsx)("h2",{ref:n,children:"Carlos"}),Object(k.jsx)("span",{ref:e,children:"Jarero"}),Object(k.jsx)("img",{src:T,ref:i,alt:"Logo luna"})]}),Object(k.jsx)(z,{ref:t})]})},R=function(){return Object(k.jsx)("h2",{children:"Soy el container"})},A=t.p+"static/media/MenuClosed.10bf38e7.svg",B=t.p+"static/media/MenuOpen.607c81a8.svg",E=g.b.nav(o||(o=Object(O.a)(["\n    width:100%;\n    height:10%;\n    display:flex;\n    justify-content:space-between;\n    align-items:center;\n"]))),I=g.b.h2(r||(r=Object(O.a)(['\n    font-size:30px;\n    font-family:"MS Gothic";\n    color:',";\n    letter-spacing:3px;\n"])),F),J=g.b.img(j||(j=Object(O.a)(["\n    width:20%;\n    height:35%;\n"]))),L=function(){var n=Object(h.useRef)(),e=Object(h.useState)(!1),t=Object(w.a)(e,2),i=t[0],c=t[1],a=Object(y.a)({targets:n.current,opacity:[0,1],duration:300,easing:"easeInCubic",autoplay:!0});return Object(h.useEffect)((function(){n.current.onclick=a.play}),[i]),Object(k.jsxs)(E,{children:[Object(k.jsx)(I,{children:"CJ"}),Object(k.jsx)(J,{onClick:function(n){n.preventDefault(),c(!i)},src:i?B:A,ref:n})]})},D=g.b.section(b||(b=Object(O.a)(["\n    width:100vw;\n    height:100vh;\n"]))),P=g.b.div(f||(f=Object(O.a)(["\n    width:90%;\n    height:90%;\n    margin-top:5%;\n    margin-left:5%;\n"]))),H=function(){return Object(k.jsx)(D,{children:Object(k.jsxs)(P,{children:[Object(k.jsx)(L,{}),Object(k.jsx)(R,{})]})})},N=function(){return Object(k.jsx)(h.Fragment,{children:Object(k.jsx)(H,{})})},Y=function(){var n=Object(h.useState)(!0),e=Object(w.a)(n,2),t=e[0],i=e[1];return Object(h.useEffect)((function(){t&&setTimeout((function(){i(!t)}),3500)}),[]),t?Object(k.jsx)(G,{}):Object(k.jsx)(N,{})};var q=function(){return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(p.a,{}),Object(k.jsx)(v,{}),Object(k.jsx)(Y,{})]})},K=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;t(n),i(n),c(n),a(n),s(n)}))};l.a.render(Object(k.jsx)(u.a.StrictMode,{children:Object(k.jsx)(q,{})}),document.getElementById("root")),K()}},[[25,1,2]]]);
//# sourceMappingURL=main.4a4ac087.chunk.js.map