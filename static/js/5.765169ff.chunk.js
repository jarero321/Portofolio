(this["webpackJsonpcarlos-jarero"]=this["webpackJsonpcarlos-jarero"]||[]).push([[5],{32:function(n,t,e){"use strict";function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}function r(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var e=[],i=!0,r=!1,a=void 0;try{for(var o,c=n[Symbol.iterator]();!(i=(o=c.next()).done)&&(e.push(o.value),!t||e.length!==t);i=!0);}catch(s){r=!0,a=s}finally{try{i||null==c.return||c.return()}finally{if(r)throw a}}return e}}(n,t)||function(n,t){if(n){if("string"===typeof n)return i(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(n,t):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(t,"a",(function(){return r}))},33:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var i=e(32),r=e(0),a=function(n){var t=Object(r.useState)(!0),e=Object(i.a)(t,2),a=e[0],o=e[1];return Object(r.useEffect)((function(){new IntersectionObserver((function(t){t.forEach((function(t){t.target===n.current&&(t.isIntersecting?o(!0):o(!1))}))}),{threshold:.2}).observe(n.current)}),[n]),a}},34:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return a}));var i={hidden:{opacity:1},visible:{opacity:1,transition:{duration:.5,type:"tween",ease:"easeIn",when:"beforeChildren",staggerChildren:1.5}}},r={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{type:"spring"}}},a={hidden:{opacity:0,x:40},visible:{opacity:1,x:0,transition:{type:"spring"}}}},35:function(n,t,e){"use strict";e.r(t);var i,r,a,o,c,s,l,d=e(0),h=e.n(d),f=e(4),p=e(5),u=e(6),b=e(31),j=p.b.section(i||(i=Object(f.a)(["\n    width: 100vw;\n    height: 100vh;\n"]))),m=Object(p.b)(b.a.div)(r||(r=Object(f.a)(["\n    width:90%;\n    height: 95%;\n    margin: 0 auto;\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n\n"]))),y=Object(p.b)(b.a.h1)(a||(a=Object(f.a)(["\n    color:",';\n    font-size:50px;\n    font-family:"TMC";\n    @media (min-width:768px){\n        font-size:70px;\n    } \n'])),u.a.title),x=p.b.div(o||(o=Object(f.a)(["\n    width:100%;\n    height:100%;\n"]))),v=Object(p.b)(b.a.article)(c||(c=Object(f.a)(['\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    justify-content:space-between;\n    width:100%;\n    height:30%;\n    p{\n        position:relative;\n        width:80%;\n        font-size:20px;\n        margin-top:5%;\n        font-family:"TMC";\n        color:',';\n        line-height:1.5;\n        text-align:justify;\n    }\n    h5{\n        font-size:15px;\n        font-family:"TMC";\n        position:relative;\n        top:10%;\n        color:',"\n\n    }\n    @media (min-width:768px){\n        p{\n            font-size:40px;\n        }\n        h5{\n            font-size:20px;\n        }\n    }\n"])),u.a.letters,u.a.main),g=Object(p.b)(b.a.div)(s||(s=Object(f.a)(["\n    width:80%;\n    height:80%;\n    img{\n        position:relative;\n        top:20%;\n        width:100%;\n        left:10%;\n        border-radius:10%;\n        border: 1px solid ","\n    }\n    @media (min-width:768px){\n        width:75%;\n        height:75%;\n        img{\n            left:17.25%;\n        }\n    }\n"])),u.a.main),O=Object(p.b)(b.a.div)(l||(l=Object(f.a)(['\n    width:95%;\n    display:flex;\n    align-items:center;\n    justify-content:space-around;\n    &:before{\n        content:"";\n        width:15%;\n        height:15%;\n        background-color:',';\n        position: relative;\n        top:0;\n        right:3%;\n        display:inline-block;\n    }\n    span{\n        font-family:"TMC";\n        color:',';\n        font-size:35px;\n    }\n    h3{\n        font-size:30px;\n        font-family:"TMC";\n        color:',"\n    }\n    @media (min-width:768px){\n        width:78%;\n        h3{\n            font-size:50px;\n        }\n        span{\n            font-size:50px;\n        }\n    }\n"])),u.a.main,u.a.main,u.a.letters),w=e.p+"static/media/PokeGame.170b0cf6.svg",z=e(34),C=e(33),T=e(1),A=h.a.forwardRef((function(n,t){var e=Object(C.a)(t);return Object(T.jsx)(d.Fragment,{children:Object(T.jsx)(j,{ref:t,children:e&&Object(T.jsxs)(m,{variants:z.a,initial:"hidden",animate:"visible",children:[Object(T.jsx)(y,{variants:z.b,children:"Projects"}),Object(T.jsxs)(x,{children:[Object(T.jsxs)(v,{initial:{opacity:0,x:"-100px"},animate:{opacity:1,x:"0"},transition:{duration:1,delay:1,type:"tween",ease:"easeIn"},children:[Object(T.jsxs)(O,{children:[Object(T.jsx)("span",{children:"0.1"}),Object(T.jsx)("h3",{children:"Memory Game"})]}),Object(T.jsx)("p",{children:"Application that consumes the pokemon api developed in react, and designed in adobe XD"}),Object(T.jsx)("h5",{children:"Tap in the image to view more"})]}),Object(T.jsx)(g,{variants:z.b,whileTap:{scale:.9},children:Object(T.jsx)("img",{src:w})})]})]})})})}));t.default=A}}]);
//# sourceMappingURL=5.765169ff.chunk.js.map