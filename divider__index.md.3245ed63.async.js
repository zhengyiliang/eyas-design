(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{"9kvl":function(e,t,n){"use strict";var a=n("FfOG");n.d(t,"a",(function(){return a["b"]}));n("bCY9")},P0G4:function(e,t,n){},Suj0:function(e,t,n){"use strict";var a=n("xwgP"),l=n.n(a),r=n("q3Yw"),c=n.n(r);n("P0G4");function o(e,t){return s(e)||u(e,t)||m(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function u(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(i){o=!0,l=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw l}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=Object(a["useRef"])(),r=Object(a["useState"])(!1),i=o(r,2),m=i[0],d=i[1],u=Object(a["useState"])(!1),s=o(u,2),E=s[0],f=s[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){d(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":m||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E},TOB0:function(e,t,n){"use strict";n.r(t);var a=n("xwgP"),l=n.n(a),r=n("urbB"),c=n("sTYr"),o=n("Suj0"),i=l.a.memo((e=>{var t=e.demos,n=t["__demo__-basics-1"].component,a=t["__demo__-orientation"].component,i=t["__demo__-vertical"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u5206\u5272\u7ebf-divider"},l.a.createElement(r["AnchorLink"],{to:"#\u5206\u5272\u7ebf-divider","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5206\u5272\u7ebf Divider"),l.a.createElement("p",null,"\u5212\u5206\u5185\u5bb9\u533a\u57df\uff0c\u5bf9\u6a21\u5757\u505a\u5206\u9694\u3002"),l.a.createElement("h2",{id:"\u57fa\u672c\u7528\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u672c\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u7528\u6cd5"),l.a.createElement("p",null,"\u5bf9\u4e0d\u540c\u7ae0\u8282\u7684\u6587\u672c\u6bb5\u843d\u8fdb\u884c\u5206\u5272\uff0c\u9ed8\u8ba4\u4e3a\u6c34\u5e73\u5206\u5272\u7ebf\uff0c\u53ef\u5728\u4e2d\u95f4\u52a0\u5165\u6587\u5b57\u3002")),l.a.createElement(c["default"],t["__demo__-basics-1"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u5e26\u6709\u6587\u5b57\u7684\u5206\u5272\u7ebf"},l.a.createElement(r["AnchorLink"],{to:"#\u5e26\u6709\u6587\u5b57\u7684\u5206\u5272\u7ebf","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5e26\u6709\u6587\u5b57\u7684\u5206\u5272\u7ebf"),l.a.createElement("p",null,"\u901a\u8fc7 ",l.a.createElement("code",null,"orientation")," \u6307\u5b9a\u5206\u5272\u7ebf\u6587\u5b57\u7684\u4f4d\u7f6e\u3002")),l.a.createElement(c["default"],t["__demo__-orientation"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u7ad6\u76f4\u5206\u5272\u7ebf"},l.a.createElement(r["AnchorLink"],{to:"#\u7ad6\u76f4\u5206\u5272\u7ebf","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7ad6\u76f4\u5206\u5272\u7ebf"),l.a.createElement("p",null,"\u6307\u5b9a ",l.a.createElement("code",null,"type")," \u4e3a ",l.a.createElement("code",null,"vertical")," \u5373\u53ef\u4f7f\u7528\u7ad6\u76f4\u5206\u5272\u7ebf\u3002\u7ad6\u76f4\u5206\u5272\u7ebf\u4e0d\u80fd\u5e26\u6587\u5b57\u3002")),l.a.createElement(c["default"],t["__demo__-vertical"].previewerProps,l.a.createElement(i,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement("h3",{id:"divider"},l.a.createElement(r["AnchorLink"],{to:"#divider","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Divider"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570\u540d"),l.a.createElement("th",null,"\u63cf\u8ff0"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"orientation"),l.a.createElement("td",null,"\u5206\u5272\u7ebf\u6587\u5b57\u7684\u4f4d\u7f6e"),l.a.createElement("td",null,l.a.createElement("code",null,"left | right | center")),l.a.createElement("td",null,l.a.createElement("code",null,"center"))),l.a.createElement("tr",null,l.a.createElement("td",null,"type"),l.a.createElement("td",null,"\u5206\u5272\u7ebf\u7684\u7c7b\u578b\uff0c\u662f\u6c34\u5e73\u8fd8\u662f\u7ad6\u76f4"),l.a.createElement("td",null,l.a.createElement("code",null,"horizontal | vertical")),l.a.createElement("td",null,l.a.createElement("code",null,"horizontal"))),l.a.createElement("tr",null,l.a.createElement("td",null,"className"),l.a.createElement("td",null,"\u8282\u70b9\u7c7b\u540d"),l.a.createElement("td",null,l.a.createElement("code",null,"string | string[]")),l.a.createElement("td",null,l.a.createElement("code",null,"--"))),l.a.createElement("tr",null,l.a.createElement("td",null,"style"),l.a.createElement("td",null,"\u8282\u70b9\u6837\u5f0f"),l.a.createElement("td",null,l.a.createElement("code",null,"CSSProperties")),l.a.createElement("td",null,l.a.createElement("code",null,"--"))))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:n})}}}]);