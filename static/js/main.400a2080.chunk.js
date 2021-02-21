(this["webpackJsonpwhere-in-the-world"]=this["webpackJsonpwhere-in-the-world"]||[]).push([[0],{36:function(n,e,t){},44:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t(1),o=t.n(i),c=t(27),a=t.n(c),s=(t(36),t(7)),d=t(13),u=t(5),m=t(3),l=t(4);function p(){var n=Object(l.a)(["\n  body, #root {\n    background: ",";\n    margin: 0;\n    padding: 0;\n  }\n"]);return p=function(){return n},n}var x=Object(m.c)(p(),(function(n){return n.theme.background})),h="#292929",b="#ffffff",f={name:"light",text:h,background:"#f2f2f2",elements:b,hover:"#fcfcfc"},j={name:"dark",text:b,background:h,elements:"#383838",hover:"#525252"};function g(){var n=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px 30px;\n   \n    background: ",";\n    box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);\n\n    @media (min-width: 1200px) {\n        padding: 30px 100px;\n    }\n\n    h1 {\n        font-size: 20px;\n        color: ",";\n        font-weight bold;\n\n        @media (min-width: 600px) {\n            font-size: 25px;\n        }\n\n    }\n\n    button {\n        display: flex;\n        font-size: 15px;\n        justify-content: space-around;\n        align-items: center;\n        border: none;\n        outline: none;\n        cursor: pointer;\n        margin-right: 0;  \n        background: ",";\n\n        span {\n            display: none;\n\n            @media (min-width: 600px) {\n                display: block;\n                color: ",";\n            }\n   \n            \n        }\n\n        svg {\n            color: ",";\n\n            @media (min-width: 600px) { \n                margin-right: 10px;\n            }\n        }\n\n    }\n\n"]);return g=function(){return n},n}var O=m.d.header(g(),(function(n){return n.theme.elements}),(function(n){return n.theme.text}),(function(n){return n.theme.elements}),(function(n){return n.theme.text}),(function(n){return n.theme.text})),v=t(12),w=t(14),y=function(n){var e=n.toggleThemes,t=Object(i.useContext)(m.a).name;return Object(r.jsxs)(O,{children:[Object(r.jsx)(d.b,{to:"countries_info",style:{textDecoration:"none"},children:Object(r.jsx)("h1",{children:"Where in the world?"})}),Object(r.jsx)("button",{onClick:e,children:"light"===t?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(v.a,{icon:w.e})," ",Object(r.jsx)("span",{children:"Light Mode"})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(v.a,{icon:w.c})," ",Object(r.jsx)("span",{children:"Dark Mode"})]})})]})},k=t(10),C=t.n(k),S=t(16);function z(){var n=Object(l.a)(["\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    padding: 20px;\n\n    @media (min-width: 600px) {\n        padding: 15px;\n    }\n\n    h3 {\n        padding-bottom: 10px;\n    }\n\n    span {\n        margin: 4px 0;\n    }\n\n    strong {\n        margin-right: 5px;\n    }\n"]);return z=function(){return n},n}function D(){var n=Object(l.a)(["\n    background-color: ","; \n    display: flex;\n    flex-direction: column;\n    margin-bottom: 30px;\n    border-radius: 5px;\n    cursor: pointer;\n    box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);\n    color: ",";\n    height: 100%;\n\n    @media (min-width: 600px) {\n        max-width: 220px;\n    }\n\n    @media (min-width: 1200px) {\n        max-width: 285px;\n    }\n\n    img {\n        max-width: 100%; \n        object-fit: cover;\n        flex: 1;\n\n        @media (min-width: 600px) {\n            height: 150px;\n        }\n    \n        @media (min-width: 1200px) {\n            height: 200px;\n        }\n\n        \n    }\n\n"]);return D=function(){return n},n}var L=m.d.div(D(),(function(n){return n.theme.elements}),(function(n){return n.theme.text})),A=m.d.div(z()),E=function(n){var e=n.country;return Object(r.jsx)(L,{children:Object(r.jsxs)(d.b,{to:e.name,children:[Object(r.jsx)("img",{src:e.flag,className:"country__flag",alt:"flag"}),Object(r.jsxs)(A,{children:[Object(r.jsx)("h3",{children:e.name}),Object(r.jsxs)("span",{children:[Object(r.jsx)("strong",{children:"Population:"}),e.population]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("strong",{children:"Region:"}),e.region]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("strong",{children:"Capital:"}),e.capital]})]})]})})};function T(){var n=Object(l.a)(["\n    background-color: ",";\n    color: ",";\n    border: 0;\n    padding: 15px 15px 15px 40px;\n    border-radius: 4px;\n    width: 100%; \n    outline: none;\n    background-color: ","; \n    \n    &:focus-within {\n        &::placeholder {\n           color: transparent;\n        }\n    }  \n\n"]);return T=function(){return n},n}function B(){var n=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    background-color: ",";\n    color: ",";\n    border: none;\n    border-radius: 5px;\n    overflow: hidden;\n    box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);\n    position: relative;\n    margin-bottom: 30px;\n\n    @media (min-width: 600px) {\n        margin-bottom: 0;\n        flex: 0.4;\n    }\n\n    svg {\n        position: absolute;\n        color: ",";\n        padding: 15px;\n    } \n\n    span {\n        position: absolute;\n        right: 1em;\n        top: 0;\n        bottom: 0;\n        line-height: 40px;\n        cursor: pointer\n    }\n    \n    \n"]);return B=function(){return n},n}var I=m.d.div(B(),(function(n){return n.theme.elements}),(function(n){return n.theme.text}),(function(n){return n.theme.text})),M=m.d.input(T(),(function(n){return n.theme.elements}),(function(n){return n.theme.text}),(function(n){return n.theme.elements})),R=function(n){var e=n.input,t=n.onChange,i=n.onClick;return Object(r.jsxs)(I,{children:[Object(r.jsx)(v.a,{icon:w.d,size:"xs"}),Object(r.jsx)(M,{type:"text",placeholder:"Search for a country...",value:e,onChange:function(n){return t(n.target.value)}}),Object(r.jsx)("span",{onClick:function(n){return i(n.target.value)},children:"\xd7"})]})};function N(){var n=Object(l.a)(["\n        list-style: none;\n        padding: 5px 0;\n        width: 100%;\n        border: none;\n        position: absolute;\n        box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);\n        margin-top: 1px;\n\n        button {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            background-color: ",";\n            color: ",";\n            border: none;\n            overflow: hidden;\n            outline: none;\n            cursor: pointer;\n            width: 100%;\n            padding: 15px;\n            border-radius: 0;\n            transition: all 0.3s ease 0s;    \n\n            &:hover {\n                background: ",";\n                \n            }\n        }\n"]);return N=function(){return n},n}function _(){var n=Object(l.a)(["\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center; \n    position: relative;\n    display: inline-block;\n\n    @media (min-width: 600px) {\n        flex: .4;\n    }\n\n    @media (min-width: 1200px) {\n        flex: .2;\n    }\n\n    button {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        background-color: ",";\n        color: ",";\n        border-radius: 5px;\n        border: none;\n        overflow: hidden;\n        outline: none;\n        cursor: pointer;\n        box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);\n        width: 100%;\n        padding: 15px;\n    }\n"]);return _=function(){return n},n}var F=m.d.div(_(),(function(n){return n.theme.elements}),(function(n){return n.theme.text})),Z=m.d.ul(N(),(function(n){return n.theme.elements}),(function(n){return n.theme.text}),(function(n){return n.theme.hover})),J=function(n){var e=n.filterByRegion,t=Object(i.useState)(""),o=Object(s.a)(t,2),c=o[0],a=o[1],d=Object(i.useState)(!1),u=Object(s.a)(d,2),m=u[0],l=u[1];return Object(r.jsxs)(F,{children:[Object(r.jsxs)("button",{type:"button",onClick:function(){l(!m)},children:[""!==c?Object(r.jsx)("span",{children:c}):Object(r.jsx)("span",{children:"Filter by Region"}),Object(r.jsx)(v.a,{icon:w.b,size:"xs"})]}),Object(r.jsx)(Z,{style:{display:m?"block":"none"},children:["All","Africa","Americas","Asia","Europe","Oceania"].map((function(n){return Object(r.jsx)("li",{children:Object(r.jsx)("button",{type:"button",onClick:function(){return function(n){a(n),e(n),l(!1)}(n)},children:Object(r.jsx)("span",{style:{fontWeight:c===n&&"bold"},children:n})})},n)}))})]})};function P(){var n=Object(l.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    padding: 30px;\n\n    @media (min-width: 600px) {\n        justify-content: space-between;\n    }\n\n    @media (min-width: 1200px) {\n        padding: 30px 100px;\n    }\n  \n    a {\n        text-decoration: none;\n        margin-bottom: 30px;        \n    }\n\n"]);return P=function(){return n},n}function W(){var n=Object(l.a)(["\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    padding: 20px 30px;\n\n    @media (min-width: 1200px) {\n        flex-wrap: no-wrap;\n        padding: 50px 100px 20px 100px;\n    }\n        \n"]);return W=function(){return n},n}function q(){var n=Object(l.a)(["\n    background-color: ",";\n    display: flex;\n    flex-direction: column;\n"]);return q=function(){return n},n}var G=m.d.div(q(),(function(n){return n.theme.backgroundColor})),H=m.d.div(W()),K=m.d.div(P());function Q(){var n=Object(l.a)(["\n    color: ",";\n    font-size: 90px;\n    text-indent: -9999em;\n    overflow: hidden;\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;\n    margin: 72px auto;\n    position: relative;\n    -webkit-transform: translateZ(0);\n    -ms-transform: translateZ(0);\n    transform: translateZ(0);\n    -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n    animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n\n    @-webkit-keyframes load6 {\n        0% {\n          box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n        }\n        5%,\n        95% {\n          box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n        }\n        10%,\n        59% {\n          box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n        }\n        20% {\n          box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n        }\n        38% {\n          box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n        }\n        100% {\n          box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n        }\n      }\n      @keyframes load6 {\n        0% {\n          box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n        }\n        5%,\n        95% {\n          box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n        }\n        10%,\n        59% {\n          box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n        }\n        20% {\n          box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n        }\n        38% {\n          box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n        }\n        100% {\n          box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n        }\n      }\n      @-webkit-keyframes round {\n        0% {\n          -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n        }\n        100% {\n          -webkit-transform: rotate(360deg);\n          transform: rotate(360deg);\n        }\n      }\n      @keyframes round {\n        0% {\n          -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n        }\n        100% {\n          -webkit-transform: rotate(360deg);\n          transform: rotate(360deg);\n        }\n      }\n      \n"]);return Q=function(){return n},n}var U=m.d.div(Q(),(function(n){return n.theme.text})),V=function(){return Object(r.jsx)(U,{children:"Loading..."})},X=function(){var n=Object(i.useState)(""),e=Object(s.a)(n,2),t=e[0],o=e[1],c=Object(i.useState)([]),a=Object(s.a)(c,2),d=a[0],u=a[1],m=Object(i.useState)([]),l=Object(s.a)(m,2),p=l[0],x=l[1],h=Object(i.useState)(!0),b=Object(s.a)(h,2),f=b[0],j=b[1],g=function(){var n=Object(S.a)(C.a.mark((function n(){return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://restcountries.eu/rest/v2/all").then((function(n){return n.json()})).then((function(n){j(!1),u(n),console.log(n[1]),x(n),o("")}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();Object(i.useEffect)((function(){g()}),[]);var O=function(){var n=Object(S.a)(C.a.mark((function n(e){return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("All"!==e){n.next=2;break}return n.abrupt("return",g());case 2:return n.next=4,fetch("https://restcountries.eu/rest/v2/region/".concat(e)).then((function(n){return n.json()})).then((function(n){u(n),o("")}));case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=Object(S.a)(C.a.mark((function n(e){var t;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=p.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})),o(e),u(t);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),w=function(){var n=Object(S.a)(C.a.mark((function n(){return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o(""),u(p);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),y=Object(r.jsx)(K,{children:d?d.map((function(n){return Object(r.jsx)(E,{country:n},n.alpha3Code)})):Object(r.jsx)("div",{children:"Something went wrong... Try again!"})});return Object(r.jsxs)(G,{children:[Object(r.jsxs)(H,{children:[Object(r.jsx)(R,{input:t,onChange:v,onClick:w}),Object(r.jsx)(J,{filterByRegion:O})]}),f?Object(r.jsx)(V,{}):y]})};function Y(){var n=Object(l.a)(["\n    margin-top: 40px;\n    display: flex;\n    flex-flow: row wrap;\n\n    @media (min-width: 600px) { \n        margin-top: 50px;   \n    }\n  \n\n    strong {\n        flex: 1 1 100%;\n        margin-bottom: 15px;\n    }\n\n    div {\n        display: flex;\n        justify-content: flex-start;\n        flex-wrap: wrap;\n   \n        a {\n            padding: 10px;\n            font-size: 17px;\n            border-radius: 5px;\n            margin: 5px 5px 5px 0;\n            background: ",";\n            color: ",";\n            text-decoration: none;\n            cursor: pointer;\n            box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);\n            transition: all 0.3s ease 0s;\n\n            &:hover {\n                background: ",";\n                \n            }\n        }\n    }        \n                \n"]);return Y=function(){return n},n}function $(){var n=Object(l.a)(["\n    margin-top: 10px;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(4, 1fr);\n    column-gap: 10px;\n    row-gap: 10px;\n\n    @media (min-width: 600px) { \n        margin-top: 40px;   \n    }\n\n    strong {\n        margin-right: 5px;\n    }\n\n"]);return $=function(){return n},n}function nn(){var n=Object(l.a)(["\n   display: flex;\n   flex: 1;\n   flex-direction: column;  \n   padding: 0;\n   margin-top: 30px;\n\n\n   @media (min-width: 600px) { \n     padding: 50px;   \n     font-size: 25px;\n   }\n\n   @media (min-width: 1200px) { \n      padding: 30px 10px; \n      font-size: 17px;\n   }   \n\n    \n"]);return nn=function(){return n},n}function en(){var n=Object(l.a)(["\n   display: flex;\n   flex-direction: column;\n\n   @media (min-width: 1200px) { \n       flex: 1;  \n   }\n   \n   img {\n        margin-top: 30px;\n        object-fit: cover;\n        max-width: 100%;\n        width: 350px;\n        height: 180px;\n        \n\n        @media (min-width: 600px) { \n            width: 720px;\n            height: 420px;\n            \n        }\n\n        @media (min-width: 1024px) { \n            width: 850px;\n            height: 600px;\n            \n        }\n        \n\n        @media (min-width: 1200px) { \n            width: 550px;\n            height: 350px;\n        } \n   }\n\n   button {\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        background-color: ",";\n        color: ",";\n        border: none;\n        overflow: hidden;\n        outline: none;\n        cursor: pointer;\n        box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);\n        padding: 10px;\n        width: 32%;\n        font-size: 12px;\n        border-radius: 4px;\n        transition: all 0.3s ease 0s;\n\n        &:hover {\n            background: ",";\n            \n        }\n\n        @media (min-width: 600px) { \n            width: 13%;\n            font-size: 15px;\n        }\n\n        @media (min-width: 1200px) { \n            width: 17%;\n        } \n\n\n   }\n\n"]);return en=function(){return n},n}function tn(){var n=Object(l.a)(["\n   display: flex;\n   justify-content: center;\n   padding: 50px;\n   color: ",";\n   flex-wrap: wrap;\n\n        @media (min-width: 600px) { \n            flex-wrap: no-wrap;\n            \n        } \n\n        @media (min-width: 1200px) { \n          padding: 30px 100px;\n          justify-content: space-between;\n\n        }  \n"]);return tn=function(){return n},n}var rn=m.d.div(tn(),(function(n){return n.theme.text})),on=m.d.div(en(),(function(n){return n.theme.elements}),(function(n){return n.theme.text}),(function(n){return n.theme.hover})),cn=m.d.div(nn()),an=m.d.div($()),sn=m.d.div(Y(),(function(n){return n.theme.elements}),(function(n){return n.theme.text}),(function(n){return n.theme.hover})),dn=function(){var n,e,t=Object(i.useState)([]),o=Object(s.a)(t,2),c=o[0],a=o[1],m=Object(i.useState)(!0),l=Object(s.a)(m,2),p=l[0],x=l[1],h=Object(u.f)().name,b=function(){var n=Object(S.a)(C.a.mark((function n(){return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(h.length<4)){n.next=6;break}return n.next=3,fetch("https://restcountries.eu/rest/v2/alpha/".concat(h)).then((function(n){return n.json()})).then((function(n){x(!1),a(n),console.log("DETAIL >>>>",n)})).catch((function(n){return console.log(n)}));case 3:return n.abrupt("return",n.sent);case 6:return n.next=8,fetch("https://restcountries.eu/rest/v2/name/".concat(h)).then((function(n){return n.json()})).then((function(n){x(!1),a(n[0]),console.log("DETAIL >>>>",n)})).catch((function(n){return console.log(n)}));case 8:return n.abrupt("return",n.sent);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(i.useEffect)((function(){b()}),[]),Object(i.useEffect)((function(){b()}),[h]),p?Object(r.jsx)(V,{}):Object(r.jsxs)(rn,{children:[Object(r.jsxs)(on,{children:[Object(r.jsx)(d.b,{to:"/",style:{textDecoration:"none"},children:Object(r.jsxs)("button",{type:"button",children:[Object(r.jsx)(v.a,{icon:w.a}),"Back"]})}),Object(r.jsx)("img",{src:null===c||void 0===c?void 0:c.flag,alt:"flag"})]}),Object(r.jsxs)(cn,{children:[Object(r.jsx)("h3",{children:Object(r.jsx)("strong",{children:null===c||void 0===c?void 0:c.name})}),Object(r.jsxs)(an,{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("strong",{children:"Native Name: "}),null===c||void 0===c?void 0:c.nativeName]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("strong",{children:"Capital: "}),null===c||void 0===c?void 0:c.capital]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("strong",{children:"Region: "}),null===c||void 0===c?void 0:c.region]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("strong",{children:"Subregion: "}),null===c||void 0===c?void 0:c.subregion]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("strong",{children:"Population: "}),null===c||void 0===c?void 0:c.population]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("strong",{children:"Top Level Domain: "}),null===c||void 0===c?void 0:c.topLevelDomain]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("strong",{children:"Languages: "}),null===c||void 0===c||null===(n=c.languages)||void 0===n?void 0:n.map((function(n){return n.name})).join(", ")]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("strong",{children:"Currencies: "}),null===c||void 0===c||null===(e=c.currencies)||void 0===e?void 0:e.map((function(n){return n.symbol})).join(", ")]})]}),(null===c||void 0===c?void 0:c.borders)&&(null===c||void 0===c?void 0:c.borders.length)>0?Object(r.jsxs)(sn,{children:[Object(r.jsx)("strong",{children:"Border Countries:"}),Object(r.jsx)("div",{children:null===c||void 0===c?void 0:c.borders.map((function(n){return Object(r.jsx)(d.b,{to:"/"+n,children:n},n)}))})]}):Object(r.jsx)("div",{})]})]})};var un=function(){var n=localStorage.getItem("isDarkMode"),e=Object(i.useState)("true"===n),t=Object(s.a)(e,2),o=t[0],c=t[1];return Object(r.jsxs)(m.b,{theme:o?j:f,children:[Object(r.jsx)(x,{}),Object(r.jsxs)(d.a,{children:[Object(r.jsx)(y,{toggleThemes:function(){c(!o),localStorage.setItem("isDarkMode",!o)}}),Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{exact:!0,path:"/countries_info",component:X}),Object(r.jsx)(u.a,{path:"/:name",component:dn})]})]})]})};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(un,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.400a2080.chunk.js.map