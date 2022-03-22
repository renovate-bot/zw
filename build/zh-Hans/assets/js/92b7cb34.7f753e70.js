"use strict";(self.webpackChunkzw=self.webpackChunkzw||[]).push([[8210],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),h=l,c=m["".concat(u,".").concat(h)]||m[h]||d[h]||a;return n?i.createElement(c,r(r({ref:t},p),{},{components:n})):i.createElement(c,r({ref:t},p))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2610:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var i=n(2182),l=n(9028),a=(n(9496),n(9613)),r=["components"],o={id:"zsh-unique-id",title:"\u2699\ufe0f Unique ID",image:"zw/logo/320x320.png",description:"Provides a **unique number** that identifies a **running** Zshell session",keywords:["zsh-unique-id","unique-id"]},u=void 0,s={unversionedId:"ecosystem/plugins/zsh-unique-id",id:"ecosystem/plugins/zsh-unique-id",title:"\u2699\ufe0f Unique ID",description:"Provides a **unique number** that identifies a **running** Zshell session",source:"@site/docs/ecosystem/plugins/04_zsh_unique_id.md",sourceDirName:"ecosystem/plugins",slug:"/ecosystem/plugins/zsh-unique-id",permalink:"/zh-Hans/docs/ecosystem/plugins/zsh-unique-id",editUrl:"https://digitalclouds.crowdin.com/z-shell/zh-Hans",tags:[],version:"current",lastUpdatedBy:"Salvydas Lukosius",lastUpdatedAt:1645956898,formattedLastUpdatedAt:"2022/2/27",sidebarPosition:4,frontMatter:{id:"zsh-unique-id",title:"\u2699\ufe0f Unique ID",image:"zw/logo/320x320.png",description:"Provides a **unique number** that identifies a **running** Zshell session",keywords:["zsh-unique-id","unique-id"]},sidebar:"autoSideBar_1",previous:{title:"\u2699\ufe0f Navigation Tools",permalink:"/zh-Hans/docs/ecosystem/plugins/zsh-nav-tools"},next:{title:"\u2699\ufe0f ZZComplete",permalink:"/zh-Hans/docs/ecosystem/plugins/zzcomplete"}},p={},d=[{value:"Install Zsh Unique ID",id:"install-zsh-unique-id",level:2},{value:"With ZI",id:"with-zi",level:2},{value:"With Antigen",id:"with-antigen",level:2},{value:"With Oh-My-Zsh",id:"with-oh-my-zsh",level:2},{value:"With Zgen",id:"with-zgen",level:2}],m={toc:d};function h(e){var t=e.components,n=(0,l.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/z-shell/zsh-unique-id"},"z-shell/zsh-unique-id"))),(0,a.kt)("p",null,"This plugin provides a ",(0,a.kt)("strong",{parentName:"p"},"unique number")," that identifies a ",(0,a.kt)("strong",{parentName:"p"},"running")," Zshell session, in its shell variable ",(0,a.kt)("inlineCode",{parentName:"p"},"$ZUID_ID"),"."),(0,a.kt)("p",null,"Besides this unique number, also a unique ",(0,a.kt)("em",{parentName:"p"},"codename")," is provided, in shell variable ",(0,a.kt)("inlineCode",{parentName:"p"},"$ZUID_CODENAME"),"."),(0,a.kt)("p",null,"Once you load this plugin, the two parameters will be set, and their values will not be available to other Zshell\nsessions (being thus ",(0,a.kt)("em",{parentName:"p"},"unique"),")."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ZUID_ID")," is a progressing number starting from ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"$ZUID_CODENAME")," is chosen from a list of predefined codenames,\nsee the default list below."),(0,a.kt)("p",null,"An example use case is to hold logs in files ",(0,a.kt)("inlineCode",{parentName:"p"},".../mylog-${ZUID_CODENAME}.log"),", so that two different Zshells will not\nwrite to the same file at the same time."),(0,a.kt)("p",null,"Default codenames are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"atlantis (for ",(0,a.kt)("inlineCode",{parentName:"li"},"ZUID_ID")," == ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),")"),(0,a.kt)("li",{parentName:"ul"},"echelon (for ",(0,a.kt)("inlineCode",{parentName:"li"},"ZUID_ID")," == ",(0,a.kt)("inlineCode",{parentName:"li"},"2"),")"),(0,a.kt)("li",{parentName:"ul"},"quantum (etc.)"),(0,a.kt)("li",{parentName:"ul"},"ion"),(0,a.kt)("li",{parentName:"ul"},"proxima"),(0,a.kt)("li",{parentName:"ul"},"polaris"),(0,a.kt)("li",{parentName:"ul"},"solar"),(0,a.kt)("li",{parentName:"ul"},"momentum"),(0,a.kt)("li",{parentName:"ul"},"hyper"),(0,a.kt)("li",{parentName:"ul"},"gloom"),(0,a.kt)("li",{parentName:"ul"},"velocity"),(0,a.kt)("li",{parentName:"ul"},"future"),(0,a.kt)("li",{parentName:"ul"},"enigma"),(0,a.kt)("li",{parentName:"ul"},"andromeda"),(0,a.kt)("li",{parentName:"ul"},"saturn"),(0,a.kt)("li",{parentName:"ul"},"jupiter"),(0,a.kt)("li",{parentName:"ul"},"aslan"),(0,a.kt)("li",{parentName:"ul"},"commodore"),(0,a.kt)("li",{parentName:"ul"},"falcon"),(0,a.kt)("li",{parentName:"ul"},"persepolis"),(0,a.kt)("li",{parentName:"ul"},"dharma"),(0,a.kt)("li",{parentName:"ul"},"samsara"),(0,a.kt)("li",{parentName:"ul"},"prodigy"),(0,a.kt)("li",{parentName:"ul"},"ethereal"),(0,a.kt)("li",{parentName:"ul"},"epiphany"),(0,a.kt)("li",{parentName:"ul"},"aurora"),(0,a.kt)("li",{parentName:"ul"},"oblivion")),(0,a.kt)("p",null,"Zstyle configuration allows to customize the codenames:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"zstyle :plugin:zuid codenames paper metal wood plastic # first 4 shells will have those codenames\n")),(0,a.kt)("h2",{id:"install-zsh-unique-id"},"Install Zsh Unique ID"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'The plugin is "standalone"'),", which means that only sourcing it is needed (without using a plugin manager). So to\ninstall, unpack ",(0,a.kt)("inlineCode",{parentName:"p"},"zsh-unique-id")," somewhere and add:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"source {where-zsh-unique-id-is}/zsh-unique-id.plugin.zsh\n")),(0,a.kt)("p",null,"to ",(0,a.kt)("inlineCode",{parentName:"p"},"zshrc"),"."),(0,a.kt)("p",null,"Sourcing is recommended, because it can be done early, at top of zshrc, without a plugin manager \u2013 to acquire the unique\nidentification as early as possible."),(0,a.kt)("h2",{id:"with-zi"},"With ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/z-shell/zi"},"ZI")),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"zi load z-shell/zsh-unique-id")," to your ",(0,a.kt)("inlineCode",{parentName:"p"},".zshrc")," file. ZI will clone the plugin the next time you start zsh. To\nupdate issue ",(0,a.kt)("inlineCode",{parentName:"p"},"zi update z-shell/zsh-unique-id"),"."),(0,a.kt)("h2",{id:"with-antigen"},"With Antigen"),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"antigen bundle z-shell/zsh-unique-id")," to your ",(0,a.kt)("inlineCode",{parentName:"p"},".zshrc")," file. Antigen will handle cloning the plugin for you\nautomatically the next time you start zsh."),(0,a.kt)("h2",{id:"with-oh-my-zsh"},"With Oh-My-Zsh"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"cd ~/.oh-my-zsh/custom/plugins")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git clone git@github.com:z-shell/zsh-unique-id.git")),(0,a.kt)("li",{parentName:"ol"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"zsh-unique-id")," to your plugin list")),(0,a.kt)("h2",{id:"with-zgen"},"With Zgen"),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"zgen load z-shell/zsh-unique-id")," to your .zshrc file in the same place you're doing your other ",(0,a.kt)("inlineCode",{parentName:"p"},"zgen load")," calls\nin."))}h.isMDXComponent=!0}}]);