"use strict";(self.webpackChunkzi_wiki_pages=self.webpackChunkzi_wiki_pages||[]).push([[7688],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),l=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||s;return t?o.createElement(b,a(a({ref:n},c),{},{components:t})):o.createElement(b,a({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6479:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var o=t(7462),r=t(3366),s=(t(7294),t(3905)),a=["components"],i={id:"submods",title:"\ud83d\udca0 Submods",description:"Annex - Submods documentation",keywords:["annex","submods","zsh","z-shell","zi"]},u=void 0,l={unversionedId:"ecosystem/annexes/submods",id:"ecosystem/annexes/submods",title:"\ud83d\udca0 Submods",description:"Annex - Submods documentation",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/ecosystem/annexes/01_6_submods.md",sourceDirName:"ecosystem/annexes",slug:"/ecosystem/annexes/submods",permalink:"/ja/docs/ecosystem/annexes/submods",editUrl:"https://github.com/z-shell/zw/tree/main/i18n/ja/docusaurus-plugin-content-docs/current/ecosystem/annexes/01_6_submods.md",tags:[],version:"current",lastUpdatedBy:"Salvydas Lukosius",lastUpdatedAt:1642322710,formattedLastUpdatedAt:"2022/1/16",frontMatter:{id:"submods",title:"\ud83d\udca0 Submods",description:"Annex - Submods documentation",keywords:["annex","submods","zsh","z-shell","zi"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udca0 Read URL",permalink:"/ja/docs/ecosystem/annexes/readurl"},next:{title:"\ud83d\udca0 Unscope",permalink:"/ja/docs/ecosystem/annexes/unscope"}},c=[{value:"Install Submods",id:"install-submods",children:[],level:2}],d={toc:c};function p(e){var n=e.components,t=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/z-shell/z-a-submods"},"Submods")," annex allows ZI to clone additional submodules when installing a plugin or snippet. The submodules are then automatically updated on the ",(0,s.kt)("inlineCode",{parentName:"p"},"zi update \u2026")," command."),(0,s.kt)("p",null,"This annex adds ",(0,s.kt)("inlineCode",{parentName:"p"},"submods''")," ice to ZI which has the following syntax:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"submods'{user}/{plugin} -> {output directory}; \u2026'\n")),(0,s.kt)("p",null,"An example command utilizing the annex and its ice:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# Load zsh-autosuggestions plugin via Prezto module: autosuggestions\nzi ice svn submods'zsh-users/zsh-autosuggestions -> external'\nzi snippet PZT::modules/autosuggestions\n")),(0,s.kt)("h2",{id:"install-submods"},"Install Submods"),(0,s.kt)("p",null,"Simply load as a plugin. The following command will install the annex within ZI:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"zi light z-shell/z-a-submods\n")),(0,s.kt)("p",null,"After executing this command you can then use the ",(0,s.kt)("inlineCode",{parentName:"p"},"submods''")," ice. The command should be placed in ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.zshrc"),"."))}p.isMDXComponent=!0}}]);