"use strict";(self.webpackChunkzw=self.webpackChunkzw||[]).push([[1888],{9613:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(9496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),s=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=s(n),m=r,u=p["".concat(d,".").concat(m)]||p[m]||h[m]||o;return n?a.createElement(u,i(i({ref:e},c),{},{components:n})):a.createElement(u,i({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3747:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(9496),r="apiTable_e8hp",o=n(1226);var i=(0,a.forwardRef)((function(t,e){var n=t.name,r=t.children,i=function(t){for(var e=t;(0,a.isValidElement)(e);)e=a.Children.toArray(e.props.children)[0];return e}(r),l=n?n+"-"+i:i,d="#"+l,s=(0,o.k6)();return a.createElement("tr",{id:l,tabIndex:0,ref:s.location.hash===d?e:void 0,onClick:function(){s.push(d)},onKeyDown:function(t){"Enter"===t.key&&s.push(d)}},r.props.children)}));function l(t){var e=t.children,n=t.name,o=a.Children.toArray(e.props.children),l=o[0],d=o[1],s=(0,a.useRef)(null);(0,a.useEffect)((function(){var t;null==(t=s.current)||t.focus()}),[s]);var c=a.Children.map(d.props.children,(function(t){return a.createElement(i,{name:n,ref:s},t)}));return a.createElement("table",{className:r},l,a.createElement("tbody",null,c))}},4808:function(t,e,n){n.r(e),n.d(e,{assets:function(){return h},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return p}});var a=n(2182),r=n(9028),o=(n(9496),n(9613)),i=n(3747),l=["components"],d={id:"code",title:"\ud83d\udd16 Code documentation",description:"The documentation lists all functions, interactions between them, their comments, and features.",keywords:["code","documentation"]},s=void 0,c={unversionedId:"code",id:"code",title:"\ud83d\udd16 Code documentation",description:"The documentation lists all functions, interactions between them, their comments, and features.",source:"@site/docs/zi_code.md",sourceDirName:".",slug:"/code",permalink:"/docs/code",editUrl:"https://github.com/z-shell/zw/tree/main/docs/zi_code.md",tags:[],version:"current",lastUpdatedBy:"Salvydas Lukosius",lastUpdatedAt:1645990837,formattedLastUpdatedAt:"2/27/2022",frontMatter:{id:"code",title:"\ud83d\udd16 Code documentation",description:"The documentation lists all functions, interactions between them, their comments, and features.",keywords:["code","documentation"]},sidebar:"autoSideBar_1",previous:{title:"\u2699\ufe0f ZUI",permalink:"/docs/ecosystem/plugins/zui"}},h={},p=[],m={toc:p};function u(t){var e=t.components,n=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Documentation automatically updated every ",(0,o.kt)("inlineCode",{parentName:"p"},"Thursday 4:30 UTC")," at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/z-shell/docs"},"z-shell/docs"),"."))),(0,o.kt)(i.Z,{mdxType:"APITable"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"File"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Documentation"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/z-shell/zi/blob/main/zi.zsh"},"zi.zsh")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/z-shell/docs/blob/main/code/zsdoc/asciidoc/zi.zsh.adoc"},"adoc"),", ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/z-shell/docs/blob/main/code/zsdoc/pdf/zi.zsh.pdf"},"pdf"),", ",(0,o.kt)("a",{parentName:"td",href:"https://z-shell.github.io/docs/code/html/zi.zsh.html"},"html")),(0,o.kt)("td",{parentName:"tr",align:null},"The main script which is always loaded, in ",(0,o.kt)("inlineCode",{parentName:"td"},".zshrc"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/z-shell/zi/blob/main/lib/zsh/side.zsh"},"side.zsh")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/z-shell/docs/blob/main/code/zsdoc/asciidoc/side.zsh.adoc"},"adoc"),", ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/z-shell/docs/blob/main/code/zsdoc/pdf/side.zsh.pdf"},"pdf"),", ",(0,o.kt)("a",{parentName:"td",href:"https://z-shell.github.io/docs/code/html/side.zsh.html"},"html")),(0,o.kt)("td",{parentName:"tr",align:null},"Functions, loaded by ",(0,o.kt)("inlineCode",{parentName:"td"},"install.zsh")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"autoload.zsh")," scripts")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/z-shell/zi/blob/main/lib/zsh/install.zsh"},"install.zsh")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/z-shell/docs/blob/main/code/zsdoc/asciidoc/install.zsh.adoc"},"adoc"),", ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/z-shell/docs/blob/main/code/zsdoc/pdf/install.zsh.pdf"},"pdf"),", ",(0,o.kt)("a",{parentName:"td",href:"https://z-shell.github.io/docs/code/html/install.zsh.html"},"html")),(0,o.kt)("td",{parentName:"tr",align:null},"Functions used only when installing a plugin or snippet")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/z-shell/zi/blob/main/lib/zsh/autoload.zsh"},"autoload.zsh")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/z-shell/docs/blob/main/code/zsdoc/asciidoc/autoload.zsh.adoc"},"adoc"),", ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/z-shell/docs/blob/main/code/zsdoc/pdf/autoload.zsh.pdf"},"pdf"),", ",(0,o.kt)("a",{parentName:"td",href:"https://z-shell.github.io/docs/code/html/autoload.zsh.html"},"html")),(0,o.kt)("td",{parentName:"tr",align:null},"Functions used only in interactive ",(0,o.kt)("inlineCode",{parentName:"td"},"ZI")," invocations")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/z-shell/zi/blob/main/lib/zsh/additional.zsh"},"additional.zsh")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/z-shell/docs/blob/main/code/zsdoc/asciidoc/additional.zsh.adoc"},"adoc"),", ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/z-shell/docs/blob/main/code/zsdoc/pdf/additional.zsh.pdf"},"pdf"),", ",(0,o.kt)("a",{parentName:"td",href:"https://z-shell.github.io/docs/code/html/additional.zsh.html"},"html")),(0,o.kt)("td",{parentName:"tr",align:null},"Additonal support for functions"))))),(0,o.kt)(i.Z,{mdxType:"APITable"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"File"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://z-shell.github.io/docs/zsh/Zsh-Plugin-Standard.html"},"Zsh Plugin Standart")),(0,o.kt)("td",{parentName:"tr",align:null},'Proposed enhancements and codifications of the definition of a "Zsh the plugin" and the actions of plugin managers \u2013 standardization. The document covers the information on how to write a Zsh plugin.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://z-shell.github.io/docs/zsh/Zsh-Native-Scripting-Handbook.html"},"Zsh Native Scripting Handbook")),(0,o.kt)("td",{parentName:"tr",align:null},"Handbook to keep Zsh constructs that are fast, robust, and do not depend on external tools. Such code is similar to Ruby or Perl and less like top-down shell scripts."))))))}u.isMDXComponent=!0}}]);