(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[51],{"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},P0G4:function(e,t,a){},Suj0:function(e,t,a){"use strict";var n=a("xwgP"),l=a.n(n),r=a("q3Yw"),c=a.n(r);a("P0G4");function m(e,t){return E(e)||i(e,t)||d(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function i(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],c=!0,m=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(o){m=!0,l=o}finally{try{c||null==a["return"]||a["return"]()}finally{if(m)throw l}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,a=Object(n["useRef"])(),r=Object(n["useState"])(!1),o=m(r,2),d=o[0],u=o[1],i=Object(n["useState"])(!1),E=m(i,2),s=E[0],g=E[1];return Object(n["useEffect"])((function(){var e=a.current,t=c()((function(){u(e.scrollLeft>0),g(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":d||void 0,"data-right-folded":s||void 0},l.a.createElement("table",null,t)))};t["a"]=s},x8z3:function(e,t,a){"use strict";a.r(t);var n=a("xwgP"),l=a.n(n),r=a("urbB"),c=a("sTYr"),m=a("Suj0"),o=l.a.memo((e=>{var t=e.demos,a=t["__demo__-basic-9"].component,n=t["__demo__-type"].component,o=t["__demo__-icon-4"].component,d=t["__demo__-update_message"].component,u=t["__demo__-position-1"].component,i=t["__demo__-update_duration"].component,E=t["__demo__-hide-1"].component,s=t["__demo__-closeable"].component,g=t["__demo__-usemessage"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u5168\u5c40\u63d0\u793a-message"},l.a.createElement(r["AnchorLink"],{to:"#\u5168\u5c40\u63d0\u793a-message","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5168\u5c40\u63d0\u793a Message"),l.a.createElement("p",null,"\u7531\u7528\u6237\u7684\u64cd\u4f5c\u89e6\u53d1\u7684\u8f7b\u91cf\u7ea7\u5168\u5c40\u53cd\u9988\u3002"),l.a.createElement("h2",{id:"\u57fa\u7840\u7528\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5"),l.a.createElement("p",null,"\u6700\u7b80\u5355\u7684\u4f8b\u5b50\u3002")),l.a.createElement(c["default"],t["__demo__-basic-9"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u4e0d\u540c\u7c7b\u578b"},l.a.createElement(r["AnchorLink"],{to:"#\u4e0d\u540c\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4e0d\u540c\u7c7b\u578b"),l.a.createElement("p",null,"\u5168\u5c40\u63d0\u793a\u6709 5 \u79cd\u4e0d\u540c\u7684\u7c7b\u578b\uff0c\u5206\u522b\u4e3a\uff1a",l.a.createElement("code",null,"info"),", ",l.a.createElement("code",null,"success"),", ",l.a.createElement("code",null,"warning"),", ",l.a.createElement("code",null,"error"),", ",l.a.createElement("code",null,"normal"),"\u3002")),l.a.createElement(c["default"],t["__demo__-type"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u81ea\u5b9a\u4e49\u56fe\u6807"},l.a.createElement(r["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u56fe\u6807","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u56fe\u6807"),l.a.createElement("p",null,"\u8bbe\u7f6e ",l.a.createElement("code",null,"icon")," \u6765\u81ea\u5b9a\u4e49\u56fe\u6807\u3002")),l.a.createElement(c["default"],t["__demo__-icon-4"].previewerProps,l.a.createElement(o,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u66f4\u65b0\u5168\u5c40\u63d0\u9192\u5185\u5bb9"},l.a.createElement(r["AnchorLink"],{to:"#\u66f4\u65b0\u5168\u5c40\u63d0\u9192\u5185\u5bb9","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u66f4\u65b0\u5168\u5c40\u63d0\u9192\u5185\u5bb9"),l.a.createElement("p",null,"\u901a\u8fc7\u6307\u5b9a ",l.a.createElement("code",null,"id"),"\uff0c\u53ef\u4ee5\u66f4\u65b0\u5df2\u7ecf\u5b58\u5728\u7684\u5168\u5c40\u63d0\u793a\u3002")),l.a.createElement(c["default"],t["__demo__-update_message"].previewerProps,l.a.createElement(d,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u5168\u5c40\u63d0\u793a\u7684\u4f4d\u7f6e"},l.a.createElement(r["AnchorLink"],{to:"#\u5168\u5c40\u63d0\u793a\u7684\u4f4d\u7f6e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5168\u5c40\u63d0\u793a\u7684\u4f4d\u7f6e"),l.a.createElement("p",null,"\u5168\u5c40\u63d0\u793a\u6709 2 \u79cd\u4e0d\u540c\u7684\u5f39\u51fa\u4f4d\u7f6e\uff0c\u5206\u522b\u4e3a\u9876\u90e8\u548c\u5e95\u90e8\u3002")),l.a.createElement(c["default"],t["__demo__-position-1"].previewerProps,l.a.createElement(u,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u66f4\u65b0\u5ef6\u65f6"},l.a.createElement(r["AnchorLink"],{to:"#\u66f4\u65b0\u5ef6\u65f6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u66f4\u65b0\u5ef6\u65f6"),l.a.createElement("p",null,"\u901a\u8fc7\u6307\u5b9a ",l.a.createElement("code",null,"id"),"\uff0c\u53ef\u4ee5\u66f4\u65b0\u5df2\u7ecf\u5b58\u5728\u7684\u5168\u5c40\u63d0\u793a\u7684",l.a.createElement("code",null,"duration")," \u5c5e\u6027\u3002")),l.a.createElement(c["default"],t["__demo__-update_duration"].previewerProps,l.a.createElement(i,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u624b\u52a8\u63a7\u5236\u5173\u95ed"},l.a.createElement(r["AnchorLink"],{to:"#\u624b\u52a8\u63a7\u5236\u5173\u95ed","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u624b\u52a8\u63a7\u5236\u5173\u95ed"),l.a.createElement("p",null,l.a.createElement("code",null,"Message.xxx()")," \u4f1a\u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\uff0c\u8c03\u7528\u6b64\u51fd\u6570\u80fd\u624b\u52a8\u5173\u95ed\u901a\u77e5\u3002")),l.a.createElement(c["default"],t["__demo__-hide-1"].previewerProps,l.a.createElement(E,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u663e\u793a\u5173\u95ed\u6309\u94ae"},l.a.createElement(r["AnchorLink"],{to:"#\u663e\u793a\u5173\u95ed\u6309\u94ae","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u663e\u793a\u5173\u95ed\u6309\u94ae"),l.a.createElement("p",null,"\u8bbe\u7f6e ",l.a.createElement("code",null,"closable")," \u6765\u663e\u793a\u5173\u95ed\u6309\u94ae\u3002")),l.a.createElement(c["default"],t["__demo__-closeable"].previewerProps,l.a.createElement(s,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"hooks-\u7528\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#hooks-\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Hooks-\u7528\u6cd5"),l.a.createElement("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",l.a.createElement("code",null,"useMessage")," \u53bb\u521b\u5efa\u53ef\u4ee5\u8bfb\u53d6 context \u7684\u5bf9\u8bdd\u6846\u3002"),l.a.createElement("p",null,"\u4f46\u662f\u901a\u8fc7 ",l.a.createElement("code",null,"useMessage")," \u6e32\u67d3\u7684 ",l.a.createElement("code",null,"message")," \u6302\u8f7d\u5728 ",l.a.createElement("code",null,"contextHolder")," \u6240\u5728\u4f4d\u7f6e\u3002\u65e0\u6cd5\u901a\u8fc7 ",l.a.createElement("code",null,"getContainer()")," \u4fee\u6539\u5bb9\u5668\u3002")),l.a.createElement(c["default"],t["__demo__-usemessage"].previewerProps,l.a.createElement(g,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement("h3",{id:"message"},l.a.createElement(r["AnchorLink"],{to:"#message","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Message"),l.a.createElement(m["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570\u540d"),l.a.createElement("th",null,"\u63cf\u8ff0"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"closable"),l.a.createElement("td",null,"\u662f\u5426\u663e\u793a\u5173\u95ed\u6309\u94ae"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"-"))),l.a.createElement("tr",null,l.a.createElement("td",null,"showIcon"),l.a.createElement("td",null,"\u662f\u5426\u663e\u793a\u56fe\u6807"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"true"))),l.a.createElement("tr",null,l.a.createElement("td",null,"duration"),l.a.createElement("td",null,"\u81ea\u52a8\u5173\u95ed\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a ",l.a.createElement("code",null,"ms")),l.a.createElement("td",null,l.a.createElement("code",null,"number")),l.a.createElement("td",null,l.a.createElement("code",null,"3000"))),l.a.createElement("tr",null,l.a.createElement("td",null,"id"),l.a.createElement("td",null,"\u5f53\u524d\u6d88\u606f\u7684\u552f\u4e00\u6807\u8bc6\uff0c\u53ef\u4ee5\u7528\u6765\u66f4\u65b0\u6d88\u606f"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,l.a.createElement("code",null,"-"))),l.a.createElement("tr",null,l.a.createElement("td",null,"transitionClassNames"),l.a.createElement("td",null,"\u6d88\u606f\u5f39\u51fa\u52a8\u753b\u7684\u7c7b\u540d\uff0c\u89c1 react-transition-group \u7684 ",l.a.createElement("code",null,"classNames")),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,l.a.createElement("code",null,"-"))),l.a.createElement("tr",null,l.a.createElement("td",null,"position"),l.a.createElement("td",null,"\u6d88\u606f\u7684\u4f4d\u7f6e\uff0c\u5206\u4e3a ",l.a.createElement("code",null,"top")," \u4e0a\u65b9\u548c ",l.a.createElement("code",null,"bottom")," \u4e0b\u65b9"),l.a.createElement("td",null,l.a.createElement("code",null,"top | bottom")),l.a.createElement("td",null,l.a.createElement("code",null,"-"))),l.a.createElement("tr",null,l.a.createElement("td",null,"icon"),l.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u56fe\u6807"),l.a.createElement("td",null,l.a.createElement("code",null,"ReactNode")),l.a.createElement("td",null,l.a.createElement("code",null,"-"))),l.a.createElement("tr",null,l.a.createElement("td",null,"className"),l.a.createElement("td",null,"\u8282\u70b9\u7c7b\u540d"),l.a.createElement("td",null,l.a.createElement("code",null,"string | string[]")),l.a.createElement("td",null,l.a.createElement("code",null,"-"))),l.a.createElement("tr",null,l.a.createElement("td",null,"content"),l.a.createElement("td",null,"\u6d88\u606f\u5185\u5bb9"),l.a.createElement("td",null,l.a.createElement("code",null,"ReactNode | string")," ",l.a.createElement("strong",null,"(\u5fc5\u586b)")),l.a.createElement("td",null,l.a.createElement("code",null,"-"))),l.a.createElement("tr",null,l.a.createElement("td",null,"style"),l.a.createElement("td",null,"\u8282\u70b9\u6837\u5f0f"),l.a.createElement("td",null,l.a.createElement("code",null,"CSSProperties")),l.a.createElement("td",null,l.a.createElement("code",null,"-"))),l.a.createElement("tr",null,l.a.createElement("td",null,"onClose"),l.a.createElement("td",null,"\u5173\u95ed\u65f6\u7684\u56de\u8c03"),l.a.createElement("td",null,l.a.createElement("code",null,"() => void")),l.a.createElement("td",null,l.a.createElement("code",null,"-"))))),l.a.createElement("h3",{id:"\u4f7f\u7528\u65b9\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u4f7f\u7528\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528\u65b9\u6cd5"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"Message.info(content: String)")," / ",l.a.createElement("code",null,"Message.info(config: Object)")),l.a.createElement("li",null,l.a.createElement("code",null,"Message.success(content: String)")," / ",l.a.createElement("code",null,"Message.success(config: Object)")),l.a.createElement("li",null,l.a.createElement("code",null,"Message.warning(content: String)")," / ",l.a.createElement("code",null,"Message.warning(config: Object)")),l.a.createElement("li",null,l.a.createElement("code",null,"Message.error(content: String)")," / ",l.a.createElement("code",null,"Message.error(config: Object)")),l.a.createElement("li",null,l.a.createElement("code",null,"Message.normal(content: String)")," / ",l.a.createElement("code",null,"Message.normal(config: Object)")),l.a.createElement("li",null,l.a.createElement("code",null,"Message.loading(content: String)")," / ",l.a.createElement("code",null,"Message.loading(config: Object)")),l.a.createElement("li",null,l.a.createElement("code",null,"Message.clear()"))),l.a.createElement("h3",{id:"\u5168\u5c40\u8bbe\u7f6e"},l.a.createElement(r["AnchorLink"],{to:"#\u5168\u5c40\u8bbe\u7f6e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5168\u5c40\u8bbe\u7f6e"),l.a.createElement("p",null,l.a.createElement("code",null,"Message.config(options)")),l.a.createElement(m["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570\u540d"),l.a.createElement("th",{align:"center"},"\u63cf\u8ff0"),l.a.createElement("th",{align:"center"},"\u7c7b\u578b"),l.a.createElement("th",{align:"right"},"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"maxCount"),l.a.createElement("td",{align:"center"},"\u6700\u5927\u901a\u77e5\u6570\u91cf"),l.a.createElement("td",{align:"center"},l.a.createElement("code",null,"number")),l.a.createElement("td",{align:"right"},l.a.createElement("code",null,"-"))),l.a.createElement("tr",null,l.a.createElement("td",null,"getContainer"),l.a.createElement("td",{align:"center"},"\u653e\u7f6e\u901a\u77e5\u7684\u5bb9\u5668"),l.a.createElement("td",{align:"center"},l.a.createElement("code",null,"() => HTMLElement")),l.a.createElement("td",{align:"right"},l.a.createElement("code",null,"() => document.body"))),l.a.createElement("tr",null,l.a.createElement("td",null,"duration"),l.a.createElement("td",{align:"center"},"\u901a\u77e5\u81ea\u52a8\u5173\u95ed\u7684\u65f6\u95f4"),l.a.createElement("td",{align:"center"},l.a.createElement("code",null,"number")),l.a.createElement("td",{align:"right"},l.a.createElement("code",null,"3000"))),l.a.createElement("tr",null,l.a.createElement("td",null,"prefixCls"),l.a.createElement("td",{align:"center"},"\u7c7b\u540d\u524d\u7f00"),l.a.createElement("td",{align:"center"},l.a.createElement("code",null,"string")),l.a.createElement("td",{align:"right"},l.a.createElement("code",null,"eyas"))))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(o,{demos:a})}}}]);