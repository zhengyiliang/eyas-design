(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{"++Tv":function(e,t,a){"use strict";a.r(t);var n=a("0gua"),l=a("xwgP"),r=a.n(l),c=a("2YZa"),o=c["B"].TabPane,i=5,m={textAlign:"center",marginTop:20},u=[...new Array(i)].map(((e,t)=>({title:"Tab ".concat(t+1),key:"key".concat(t+1),content:"".concat(t+1)})));function b(){var e=Object(l["useState"])(u),t=Object(n["a"])(e,2),a=t[0],b=t[1],E=Object(l["useState"])("key2"),y=Object(n["a"])(E,2),s=y[0],g=y[1],T=()=>{var e={title:"New Tab".concat(++i),key:"new key".concat(i),content:"".concat(i)};b([...a,e]),g(e.key)},p=e=>{var t=a.findIndex((t=>t.key===e)),n=a.slice(0,t).concat(a.slice(t+1));e===s&&t>-1&&n.length&&g(n[t]?n[t].key:n[t-1].key),t>-1&&b(n)};return r.a.createElement(c["B"],{editable:!0,type:"card-gutter",activeTab:s,onAddTab:T,onDeleteTab:p,onChange:g},a.map(((e,t)=>r.a.createElement(o,{destroyOnHide:!0,key:e.key,title:e.title},r.a.createElement(c["F"].Paragraph,{style:m},"Content of Tab Panel ".concat(e.content))))))}t["default"]=b},"27fE":function(e,t,a){"use strict";a.r(t);var n=a("xwgP"),l=a.n(n),r=a("2YZa"),c=r["B"].TabPane,o={textAlign:"center",marginTop:20},i=()=>l.a.createElement(r["B"],{defaultActiveTab:"1"},l.a.createElement(c,{key:"1",title:"Tab 1"},l.a.createElement(r["F"].Paragraph,{style:o},"Content of Tab Panel 1")),l.a.createElement(c,{key:"2",title:"Tab 2",disabled:!0},l.a.createElement(r["F"].Paragraph,{style:o},"Content of Tab Panel 2")),l.a.createElement(c,{key:"3",title:"Tab 3"},l.a.createElement(r["F"].Paragraph,{style:o},"Content of Tab Panel 3")));t["default"]=i},"3GEv":function(e,t,a){"use strict";a.r(t);var n=a("0gua"),l=a("xwgP"),r=a.n(l),c=a("2YZa"),o=c["B"].TabPane,i={width:"100%",height:50,padding:"24px 0",color:"#939aa3"},m=[...new Array(30)].map(((e,t)=>({title:"\u6807\u7b7e".concat(t+1),key:"key".concat(t+1),content:"\u6807\u7b7e".concat(t+1,"\u5185\u5bb9")})));function u(){var e=Object(l["useState"])("horizontal"),t=Object(n["a"])(e,2),a=t[0],u=t[1];return r.a.createElement("div",null,r.a.createElement(c["t"].Group,{type:"button",name:"direction",value:a,onChange:u,style:{marginBottom:40},options:["horizontal","vertical"]}),r.a.createElement(c["B"],{defaultActiveTab:"key1",direction:a,style:{height:200}},m.map(((e,t)=>r.a.createElement(o,{destroyOnHide:!0,key:e.key,title:e.title},r.a.createElement("div",{style:i},"\u8fd9\u91cc\u662f".concat(e.content)))))))}t["default"]=u},"46V0":function(e,t,a){"use strict";a.r(t);var n=a("0gua"),l=a("xwgP"),r=a.n(l),c=a("2YZa"),o=c["B"].TabPane,i={textAlign:"center",marginTop:20};function m(){var e=Object(l["useState"])("top"),t=Object(n["a"])(e,2),a=t[0],m=t[1];return r.a.createElement("div",null,r.a.createElement(c["t"].Group,{type:"button",name:"position",value:a,onChange:m,style:{marginBottom:40},options:["left","top","bottom","right"]}),r.a.createElement(c["B"],{key:"card",tabPosition:a},r.a.createElement(o,{key:"1",title:"Tab 1"},r.a.createElement(c["F"].Paragraph,{style:i},"Content of Tab Panel 1")),r.a.createElement(o,{key:"2",title:"Tab 2"},r.a.createElement(c["F"].Paragraph,{style:i},"Content of Tab Panel 2")),r.a.createElement(o,{key:"3",title:"Tab 3"},r.a.createElement(c["F"].Paragraph,{style:i},"Content of Tab Panel 3"))))}t["default"]=m},"7Vph":function(e,t,a){"use strict";a.r(t);var n=a("xwgP"),l=a.n(n),r=a("2YZa"),c=r["B"].TabPane,o={textAlign:"center",marginTop:20},i=()=>l.a.createElement(r["B"],{defaultActiveTab:"1",extra:l.a.createElement(r["d"],{size:"small",type:"secondary"},"Action")},l.a.createElement(c,{key:"1",title:"Tab 1"},l.a.createElement(r["F"].Paragraph,{style:o},"Content of Tab Panel 1")),l.a.createElement(c,{key:"2",title:"Tab 2",disabled:!0},l.a.createElement(r["F"].Paragraph,{style:o},"Content of Tab Panel 2")),l.a.createElement(c,{key:"3",title:"Tab 3"},l.a.createElement(r["F"].Paragraph,{style:o},"Content of Tab Panel 3")));t["default"]=i},A9OF:function(e,t,a){"use strict";a.r(t);var n=a("q2e5"),l=a("kZID"),r=a("xwgP"),c=a.n(r),o=a("2YZa"),i=a("4yxy"),m=o["B"].TabPane,u={textAlign:"center",marginTop:20},b=()=>c.a.createElement(i["StickyContainer"],null,c.a.createElement(o["B"],{defaultActiveTab:"3",renderTabHeader:(e,t)=>c.a.createElement(i["Sticky"],{topOffset:-52},(a=>{var r=a.style,o=a.isSticky;return c.a.createElement(t,Object(n["a"])({},e,{style:Object(l["a"])(Object(l["a"])({},r),{},{top:o?52:0,background:"var(--color-bg-2)"})}))}))},c.a.createElement(m,{key:"1",title:"Tab 1",style:{height:300}},c.a.createElement(o["F"].Paragraph,{style:u},"Content of Tab Panel 1")),c.a.createElement(m,{key:"2",title:"Tab 2"},c.a.createElement(o["F"].Paragraph,{style:u},"Content of Tab Panel 2")),c.a.createElement(m,{key:"3",title:"Tab 3"},c.a.createElement(o["F"].Paragraph,{style:u},"Content of Tab Panel 3"))));t["default"]=b},JCsd:function(e,t,a){"use strict";a.r(t);var n=a("0gua"),l=a("xwgP"),r=a.n(l),c=a("2YZa"),o=c["B"].TabPane,i={textAlign:"center",marginTop:20};function m(){var e=Object(l["useState"])("line"),t=Object(n["a"])(e,2),a=t[0],m=t[1],u=Object(l["useState"])("default"),b=Object(n["a"])(u,2),E=b[0],y=b[1];return r.a.createElement("div",null,r.a.createElement("span",{style:{marginRight:20}},"Size:"),r.a.createElement(c["t"].Group,{name:"size",value:E,onChange:y,style:{marginBottom:24}},r.a.createElement(c["t"],{value:"mini"},"mini"),r.a.createElement(c["t"],{value:"small"},"small"),r.a.createElement(c["t"],{value:"default"},"default"),r.a.createElement(c["t"],{value:"large"},"large")),r.a.createElement("br",null),r.a.createElement("span",{style:{marginRight:20}},"Type:"),r.a.createElement(c["t"].Group,{name:"type",value:a,onChange:m,style:{marginBottom:40}},r.a.createElement(c["t"],{value:"line"},"line"),r.a.createElement(c["t"],{value:"card"},"card"),r.a.createElement(c["t"],{value:"card-gutter"},"card-gutter"),r.a.createElement(c["t"],{value:"text"},"text"),r.a.createElement(c["t"],{value:"rounded"},"rounded"),r.a.createElement(c["t"],{value:"capsule"},"capsule")),r.a.createElement(c["B"],{type:a,size:E},r.a.createElement(o,{key:"1",title:"Tab 1"},r.a.createElement(c["F"].Paragraph,{style:i},"Content of Tab Panel 1")),r.a.createElement(o,{key:"2",title:"Tab 2",disabled:!0},r.a.createElement(c["F"].Paragraph,{style:i},"Content of Tab Panel 2")),r.a.createElement(o,{key:"3",title:"Tab 3"},r.a.createElement(c["F"].Paragraph,{style:i},"Content of Tab Panel 3")),r.a.createElement(o,{key:"4",title:"Tab 4"},r.a.createElement(c["F"].Paragraph,{style:i},"Content of Tab Panel 4"))))}t["default"]=m},UH74:function(e,t,a){"use strict";a.r(t);var n=a("0gua"),l=a("xwgP"),r=a.n(l),c=a("2YZa"),o=c["B"].TabPane,i={textAlign:"center",marginTop:20};function m(){var e=Object(l["useState"])("1"),t=Object(n["a"])(e,2),a=t[0],m=t[1];return r.a.createElement(c["B"],{activeTab:a,onChange:m},r.a.createElement(o,{key:"1",title:"Tab 1"},r.a.createElement(c["F"].Paragraph,{style:i},"Content of Tab Panel 1")),r.a.createElement(o,{key:"2",title:"Tab 2"},r.a.createElement(c["F"].Paragraph,{style:i},"Content of Tab Panel 2")),r.a.createElement(o,{key:"3",title:"Tab 3"},r.a.createElement(c["F"].Paragraph,{style:i},"Content of Tab Panel 3")))}t["default"]=m},XDTP:function(e,t,a){"use strict";a.r(t);var n=a("0gua"),l=a("xwgP"),r=a.n(l),c=a("2YZa"),o=c["B"].TabPane,i={width:"100%",height:50,padding:"24px 0",color:"#939aa3"},m=[...new Array(30)].map(((e,t)=>({title:"\u6807\u7b7e".concat(t+1),key:"key".concat(t+1),content:"\u6807\u7b7e".concat(t+1,"\u5185\u5bb9")})));function u(){var e=Object(l["useState"])("horizontal"),t=Object(n["a"])(e,2),a=t[0],u=t[1],b=Object(l["useState"])("auto"),E=Object(n["a"])(b,2),y=E[0],s=E[1];return r.a.createElement("div",null,r.a.createElement(c["y"],{direction:"vertical",style:{marginBottom:40}},r.a.createElement(c["t"].Group,{type:"button",name:"direction",value:a,onChange:u,options:["horizontal","vertical"]}),r.a.createElement(c["t"].Group,{type:"button",name:"direction",value:y,onChange:s,options:["auto","start","end","center"]})),r.a.createElement(c["B"],{defaultActiveTab:"key1",direction:a,style:{height:200},scrollPosition:y},m.map(((e,t)=>r.a.createElement(o,{destroyOnHide:!0,key:e.key,title:e.title},r.a.createElement("div",{style:i},"\u8fd9\u91cc\u662f".concat(e.content)))))))}t["default"]=u},bttS:function(e,t,a){"use strict";a.r(t);var n=a("xwgP"),l=a.n(n),r=a("2YZa"),c=a("giIU"),o=a("18Dv"),i=a("41/6"),m=r["B"].TabPane,u={textAlign:"center",marginTop:20},b=()=>l.a.createElement(r["B"],{defaultActiveTab:"1"},l.a.createElement(m,{key:"1",title:l.a.createElement("span",null,l.a.createElement(c["a"],{style:{marginRight:6}}),"Tab 1")},l.a.createElement(r["F"].Paragraph,{style:u},"Content of Tab Panel 1")),l.a.createElement(m,{key:"2",title:l.a.createElement("span",null,l.a.createElement(o["a"],{style:{marginRight:6}}),"Tab 2"),disabled:!0},l.a.createElement(r["F"].Paragraph,{style:u},"Content of Tab Panel 2")),l.a.createElement(m,{key:"3",title:l.a.createElement("span",null,l.a.createElement(i["a"],{style:{marginRight:6}}),"Tab 3")},l.a.createElement(r["F"].Paragraph,{style:u},"Content of Tab Panel 3")));t["default"]=b},lUtY:function(e,t,a){"use strict";a.r(t);var n=a("xwgP"),l=a.n(n),r=a("2YZa"),c=r["B"].TabPane,o={textAlign:"center",marginTop:20},i=()=>l.a.createElement(r["B"],{tabPosition:"left"},l.a.createElement(c,{key:"tab1",title:"Tab 1"},l.a.createElement("div",null,l.a.createElement(r["B"],null,l.a.createElement(c,{key:"tab1",title:"Tab 1"},l.a.createElement(r["F"].Paragraph,{style:o},"Content of Tab Panel 1")),l.a.createElement(c,{key:"tab2",title:"Tab 2"},l.a.createElement(r["F"].Paragraph,{style:o},"Content of Tab Panel 2")),l.a.createElement(c,{key:"tab3",title:"Tab 3"},l.a.createElement(r["F"].Paragraph,{style:o},"Content of Tab Panel 3"))))),l.a.createElement(c,{key:"tab2",title:"Tab 2"},l.a.createElement(r["F"].Paragraph,null,"Content of Tab Panel 2")),l.a.createElement(c,{key:"tab3",title:"Tab 3"},l.a.createElement(r["F"].Paragraph,null,"Content of Tab Panel 3")));t["default"]=i},tV6j:function(e,t,a){"use strict";a.r(t);var n=a("0gua"),l=a("xwgP"),r=a.n(l),c=a("2YZa"),o=c["B"].TabPane,i={textAlign:"center",marginTop:20};function m(){var e=Object(l["useState"])("line"),t=Object(n["a"])(e,2),a=t[0],m=t[1];return r.a.createElement("div",null,r.a.createElement(c["t"].Group,{name:"type",value:a,onChange:m,style:{marginBottom:40}},r.a.createElement(c["t"],{value:"line"},"line"),r.a.createElement(c["t"],{value:"card"},"card"),r.a.createElement(c["t"],{value:"card-gutter"},"card-gutter"),r.a.createElement(c["t"],{value:"text"},"text"),r.a.createElement(c["t"],{value:"rounded"},"rounded"),r.a.createElement(c["t"],{value:"capsule"},"capsule")),r.a.createElement(c["B"],{type:a},r.a.createElement(o,{key:"1",title:"Tab 1"},r.a.createElement(c["F"].Paragraph,{style:i},"Content of Tab Panel 1")),r.a.createElement(o,{key:"2",title:"Tab 2",disabled:!0},r.a.createElement(c["F"].Paragraph,{style:i},"Content of Tab Panel 2")),r.a.createElement(o,{key:"3",title:"Tab 3"},r.a.createElement(c["F"].Paragraph,{style:i},"Content of Tab Panel 3")),r.a.createElement(o,{key:"4",title:"Tab 4"},r.a.createElement(c["F"].Paragraph,{style:i},"Content of Tab Panel 4"))))}t["default"]=m}}]);