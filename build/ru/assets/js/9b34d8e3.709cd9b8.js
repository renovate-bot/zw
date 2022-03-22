"use strict";(self.webpackChunkzw=self.webpackChunkzw||[]).push([[1704],{9613:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),i=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=i(e.components);return o.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(t),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||s;return t?o.createElement(f,a(a({ref:n},c),{},{components:t})):o.createElement(f,a({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var i=2;i<s;i++)a[i]=t[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2321:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return d}});var o=t(2182),r=t(9028),s=(t(9496),t(9613)),a=["components"],l={id:"submods",title:"\ud83d\udca0 Submods",image:"zw/logo/320x320.png",description:"Annex - Submods documentation",keywords:["annex","submods"]},u=void 0,i={unversionedId:"ecosystem/annexes/submods",id:"ecosystem/annexes/submods",title:"\ud83d\udca0 Submods",description:"Annex - Submods documentation",source:"@site/docs/ecosystem/annexes/01_6_submods.md",sourceDirName:"ecosystem/annexes",slug:"/ecosystem/annexes/submods",permalink:"/ru/docs/ecosystem/annexes/submods",editUrl:"https://digitalclouds.crowdin.com/z-shell/ru",tags:[],version:"current",lastUpdatedBy:"Salvydas Lukosius",lastUpdatedAt:1645956898,formattedLastUpdatedAt:"27.02.2022",frontMatter:{id:"submods",title:"\ud83d\udca0 Submods",image:"zw/logo/320x320.png",description:"Annex - Submods documentation",keywords:["annex","submods"]},sidebar:"autoSideBar_1",previous:{title:"\ud83d\udca0 Read URL",permalink:"/ru/docs/ecosystem/annexes/readurl"},next:{title:"\ud83d\udca0 Unscope",permalink:"/ru/docs/ecosystem/annexes/unscope"}},c={},d=[{value:"Install Submods",id:"install-submods",level:2}],p={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/z-shell/z-a-submods"},"z-shell/z-a-submods")," annex allows ZI to clone additional submodules when\ninstalling a plugin or snippet. The submodules are then automatically updated on the ",(0,s.kt)("inlineCode",{parentName:"li"},"zi update \u2026")," command.")),(0,s.kt)("p",null,"This annex adds ",(0,s.kt)("inlineCode",{parentName:"p"},"submods''")," ice to ZI which has the following syntax:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"submods'{user}/{plugin} -> {output directory}; \u2026'\n")),(0,s.kt)("p",null,"An example command utilizing the annex and its ice:"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Load zsh-autosuggestions plugin via Prezto module: autosuggestions")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"zi ice svn submods'zsh-users/zsh-autosuggestions -> external'\nzi snippet PZT::modules/autosuggestions\n")),(0,s.kt)("h2",{id:"install-submods"},"Install Submods"),(0,s.kt)("p",null,"Simply load as a plugin. The following command will install the annex within ZI:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"zi light z-shell/z-a-submods\n")),(0,s.kt)("p",null,"After executing this command you can then use the ",(0,s.kt)("inlineCode",{parentName:"p"},"submods''")," ice. The command should be placed in ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.zshrc"),"."))}m.isMDXComponent=!0}}]);