(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{"8zdg":function(e,t,a){"use strict";a.r(t);var l=a("xwgP"),n=a.n(l),c=a("2YZa"),r=()=>n.a.createElement("div",null,n.a.createElement(c["e"],null,"Checkbox"));t["default"]=r},BxPL:function(e,t,a){"use strict";a.r(t);var l=a("0gua"),n=a("xwgP"),c=a.n(n),r=a("2YZa"),i=r["j"].Col,o=r["j"].Row;function u(){var e=Object(n["useState"])(["Option 1","Option 2"]),t=Object(l["a"])(e,2),a=t[0],u=t[1];return c.a.createElement(r["e"].Group,{value:a,onChange:u},c.a.createElement(o,null,c.a.createElement(i,{span:8,style:{marginBottom:12}},c.a.createElement(r["e"],{value:"Option 1"},"Option 1")),c.a.createElement(i,{span:8,style:{marginBottom:12}},c.a.createElement(r["e"],{disabled:!0,value:"Option 2"},"Option 2")),c.a.createElement(i,{span:8,style:{marginBottom:12}},c.a.createElement(r["e"],{value:"Option 3"},"Option 3")),c.a.createElement(i,{span:8},c.a.createElement(r["e"],{value:"Option 4"},"Option 4")),c.a.createElement(i,{span:8},c.a.createElement(r["e"],{value:"Option 5"},"Option 5"))))}t["default"]=u},EL0r:function(e,t,a){},HyYJ:function(e,t,a){"use strict";a.r(t);var l=a("xwgP"),n=a.n(l),c=a("2YZa"),r=()=>n.a.createElement("div",null,n.a.createElement(c["e"],{disabled:!0},"disabled Checkbox"));t["default"]=r},Nkh5:function(e,t,a){"use strict";a.r(t);var l=a("0gua"),n=a("xwgP"),c=a.n(n),r=a("2YZa"),i=r["e"].Group,o=["Option 1","Option 2","Option 3"];function u(){var e=Object(n["useState"])(!0),t=Object(l["a"])(e,2),a=t[0],u=t[1],m=Object(n["useState"])(!1),s=Object(l["a"])(m,2),d=s[0],p=s[1],v=Object(n["useState"])([0,1]),E=Object(l["a"])(v,2),h=E[0],g=E[1];function k(e){e?(u(!1),p(!0),g([0,1,2])):(u(!1),p(!1),g([]))}function b(e){u(!(!e.length||e.length===o.length)),p(!(e.length!==o.length)),g(e)}return c.a.createElement("div",null,c.a.createElement("div",{style:{marginBottom:16}},c.a.createElement(r["e"],{onChange:k,checked:d,indeterminate:a},d?"unCheck All":"Check All")),c.a.createElement(i,{value:h,options:o.map(((e,t)=>({label:e,value:t}))),onChange:b}))}t["default"]=u},OnuU:function(e,t,a){"use strict";a.r(t);var l=a("xwgP"),n=a.n(l),c=a("2YZa"),r=(a("EL0r"),()=>n.a.createElement("div",null,n.a.createElement("div",{style:{marginBottom:20}},n.a.createElement(c["e"].Group,{defaultValue:["Beijing"]},["Beijing","Shanghai","Guangzhou"].map((e=>n.a.createElement(c["e"],{key:e,value:e},(t=>{var a=t.checked;return n.a.createElement(c["C"],{key:e,color:a?"eyasblue":""},e)})))))),n.a.createElement(c["e"].Group,null,[1,2].map((e=>n.a.createElement(c["e"],{key:e,value:e},(t=>{var a=t.checked;return n.a.createElement(c["y"],{align:"start",className:"custom-checkbox-card ".concat(a?"custom-checkbox-card-checked":"")},n.a.createElement("div",{className:"custom-checkbox-card-mask"},n.a.createElement("div",{className:"custom-checkbox-card-mask-dot"})),n.a.createElement("div",null,n.a.createElement("div",{className:"custom-checkbox-card-title"},"Checkbox Card ",e),n.a.createElement(c["F"].Text,{type:"secondary"},"this is a text")))})))))));t["default"]=r},jdMb:function(e,t,a){"use strict";a.r(t);var l=a("0gua"),n=a("xwgP"),c=a.n(n),r=a("2YZa");function i(){var e=c.a.useState(!1),t=Object(l["a"])(e,2),a=t[0],n=t[1];return c.a.createElement("div",null,c.a.createElement(r["y"],{size:40},c.a.createElement(r["e"],{checked:a},"Checkbox"),c.a.createElement(r["e"],{checked:a,disabled:!0},"disabled Checkbox")),c.a.createElement("div",{style:{marginTop:30}},c.a.createElement(r["d"],{type:"primary",onClick:()=>{n(!a)}},a?"unCheck":"Check")))}t["default"]=i},"k/II":function(e,t,a){"use strict";a.r(t);var l=a("xwgP"),n=a.n(l),c=a("2YZa"),r=c["e"].Group,i=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",disabled:!0},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"}],o=()=>n.a.createElement("div",null,n.a.createElement(r,{options:["Option A","Option B","Option C"],style:{display:"block",marginBottom:16}}),n.a.createElement(r,{options:i,defaultValue:["1","3"],style:{display:"block",marginBottom:20}}),n.a.createElement(r,{direction:"vertical",options:["Option A","Option B","Option C"]}));t["default"]=o},yGTr:function(e,t,a){"use strict";a.r(t);var l=a("xwgP"),n=a.n(l),c=a("2YZa"),r=c["e"].Group,i=c["e"].useCheckbox,o=[...Array(6)].map(((e,t)=>({label:"Option ".concat(t),value:t})));function u(){var e=i(o.map((e=>e.value)),[1,2]),t=e.selected,a=e.selectAll,l=e.setSelected,u=e.unSelectAll,m=e.isAllSelected,s=e.isPartialSelected,d=e.toggle;return n.a.createElement("div",null,n.a.createElement("div",{style:{marginBottom:16}},n.a.createElement(c["e"],{onChange:e=>{e?a():u()},checked:m(),indeterminate:s()},"Check All"),n.a.createElement(c["d"],{size:"small",type:"primary",style:{margin:"0 16px"},onClick:()=>{d()}},"Inverse Check")),n.a.createElement(r,{value:t,options:o,onChange:l}))}function m(){var e=c["e"].useCheckbox(o.map((e=>e.value)),[1,2]),t=e.selectAll,a=e.isSelected,l=e.unSelectAll,r=e.isAllSelected,i=e.isPartialSelected,u=e.toggle,m=e.setValueSelected;return n.a.createElement("div",null,n.a.createElement("div",{style:{marginBottom:16}},n.a.createElement(c["e"],{onChange:e=>{e?t():l()},checked:r(),indeterminate:i()},"Check All"),n.a.createElement(c["d"],{size:"small",type:"primary",style:{margin:"0 16px"},onClick:()=>{u()}},"Inverse Check")),o.map((e=>n.a.createElement(c["e"],{key:e.value,style:{margin:"0 16px"},checked:a(e.value),value:e.value,onChange:t=>{m(e.value,t)}},e.label))))}function s(){var e=o.map(((e,t)=>({value:e.value,label:"Option"+e.value,disabled:!(t%2)}))),t=c["e"].useCheckbox(e.map((e=>e.value)),[1,2]),a=t.selected,l=t.setSelected;return n.a.createElement("div",null,n.a.createElement("div",{style:{margin:"16px 0"}},n.a.createElement(c["d"],{size:"small",type:"primary",onClick:()=>{l(e.filter((e=>!e.disabled)).map((e=>e.value)))}},"Check undisabled Options")),n.a.createElement(r,{value:a,onChange:l,options:e}))}var d=()=>n.a.createElement("div",null,n.a.createElement(c["F"].Paragraph,{style:{margin:"20px 0"}},"Checkbox group"),n.a.createElement(u,null),n.a.createElement(c["f"],null),n.a.createElement(c["F"].Paragraph,{style:{margin:"20px 0"}},"Checkbox"),n.a.createElement(m,null),n.a.createElement(c["f"],null),n.a.createElement(c["F"].Paragraph,null,"Checkbox group with disabled items"),n.a.createElement(s,null));t["default"]=d}}]);