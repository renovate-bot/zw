"use strict";(self.webpackChunkzw=self.webpackChunkzw||[]).push([[4986],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,c=h["".concat(l,".").concat(d)]||h[d]||m[d]||i;return n?a.createElement(c,o(o({ref:t},u),{},{components:n})):a.createElement(c,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8633:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(2182),r=n(9028),i=(n(9496),n(9613)),o=["components"],s={slug:"swiss-army-knife-for-zsh",title:"Fast and feature-rich plugin manager for Zsh",sidebar_position:1,hide_title:!1,hide_table_of_contents:!0,sidebar_label:"Swiss Arm Knife for Zsh",description:"Introduction to a Swiss Army Knife for Zsh - Unix shell",keywords:["zi","omz","introduction"],tags:["opensource","productivity","github","zsh"],image:"img/logo/501x501.png",authors:[{name:"Salvydas Lukosius",title:"Maintainer",url:"https://ss-o.github.io",image_url:"https://github.com/ss-o.png"}]},l=void 0,p={permalink:"/ja/blog/swiss-army-knife-for-zsh",editUrl:"https://digitalclouds.crowdin.com/z-shell/ja",source:"@site/blog/2022/01/15/swiss_army_knife_for_zsh.md",title:"Fast and feature-rich plugin manager for Zsh",description:"Introduction to a Swiss Army Knife for Zsh - Unix shell",date:"2022-01-15T00:00:00.000Z",formattedDate:"2022\u5e741\u670815\u65e5",tags:[{label:"opensource",permalink:"/ja/blog/tags/opensource"},{label:"productivity",permalink:"/ja/blog/tags/productivity"},{label:"github",permalink:"/ja/blog/tags/github"},{label:"zsh",permalink:"/ja/blog/tags/zsh"}],readingTime:2.6,truncated:!0,authors:[{name:"Salvydas Lukosius",title:"Maintainer",url:"https://ss-o.github.io",image_url:"https://github.com/ss-o.png",imageURL:"https://github.com/ss-o.png"}],frontMatter:{slug:"swiss-army-knife-for-zsh",title:"Fast and feature-rich plugin manager for Zsh",sidebar_position:1,hide_title:!1,hide_table_of_contents:!0,sidebar_label:"Swiss Arm Knife for Zsh",description:"Introduction to a Swiss Army Knife for Zsh - Unix shell",keywords:["zi","omz","introduction"],tags:["opensource","productivity","github","zsh"],image:"img/logo/501x501.png",authors:[{name:"Salvydas Lukosius",title:"Maintainer",url:"https://ss-o.github.io",image_url:"https://github.com/ss-o.png",imageURL:"https://github.com/ss-o.png"}]}},u={authorsImageUrls:[void 0]},m=[{value:"Super fast user experience",id:"super-fast-user-experience",level:3},{value:"Stay flexible",id:"stay-flexible",level:3},{value:"Use what you want - not only what you can",id:"use-what-you-want---not-only-what-you-can",level:3},{value:"Boost performance with integrated tools",id:"boost-performance-with-integrated-tools",level:3},{value:"Keep it clean and consistent",id:"keep-it-clean-and-consistent",level:3},{value:"Focus on What Matters",id:"focus-on-what-matters",level:3},{value:"Documentation",id:"documentation",level:3},{value:"New to Zsh or just need support?",id:"new-to-zsh-or-just-need-support",level:3},{value:"Join the open-source",id:"join-the-open-source",level:3}],h={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zsh.sourceforge.io/"},"Zsh")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Unix_shell"},"Unix shell"),".")))),(0,i.kt)("h3",{id:"super-fast-user-experience"},"Super fast user experience"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://z-shell.pages.dev/docs/getting_started/useage#turbo-mode"},"Turbo mode")," that yields 50-80%\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/z-shell/pm-perf-test"},"faster")," Zsh startup.")),(0,i.kt)("h3",{id:"stay-flexible"},"Stay flexible"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run programs and scripts without adding anything to ",(0,i.kt)("inlineCode",{parentName:"p"},"$PATH"),",")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install and run Ruby ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rubygems/rubygems"},"Gems"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/npm/cli"},"Node"),", and\n",(0,i.kt)("a",{parentName:"p",href:"https://python.org"},"Python")," modules from within a local directory with\n",(0,i.kt)("a",{parentName:"p",href:"https://guides.rubygems.org/command-reference/#gem-environment"},"$GEM_HOME"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders"},"$NODE_PATH"),", and\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/tutorial/venv.html"},"$VIRTUALENV")," automatically set.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run programs, scripts, and functions with automatic ",(0,i.kt)("inlineCode",{parentName:"p"},"cd")," into the plugin or snippet directory, plus also with\nautomatic standard output & standard error redirecting.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Source scripts through an automatically created function with the above ",(0,i.kt)("inlineCode",{parentName:"p"},"$GEM_HOME"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"$NODE_PATH"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"$VIRTUALENV"),", and\n",(0,i.kt)("inlineCode",{parentName:"p"},"cd")," features available.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the so-called ",(0,i.kt)("inlineCode",{parentName:"p"},"shims")," known from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rbenv/rbenv"},"rbenv")," \u2013 the same feature as the first item\nof this enumeration \u2013 of running a program without adding anything to ",(0,i.kt)("inlineCode",{parentName:"p"},"$PATH")," with all of the above features, however\nthrough an automatic ",(0,i.kt)("strong",{parentName:"p"},"script")," created in ",(0,i.kt)("inlineCode",{parentName:"p"},"$ZPFX/bin"),", not a ",(0,i.kt)("strong",{parentName:"p"},"function")," (the first item uses a function-based\nmechanism).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Automatic updates of Ruby gems and Node modules during regular plugin and snippet updates with ",(0,i.kt)("inlineCode",{parentName:"p"},"zi update \u2026"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install almost everything from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/z-shell"},"GitHub"),", and other Git providers."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Detailed information on how it works and how to achieve it is found in the\n",(0,i.kt)("a",{parentName:"li",href:"https://z-shell.pages.dev/docs/ecosystem/annexes"},"wiki"))),(0,i.kt)("h3",{id:"use-what-you-want---not-only-what-you-can"},"Use what you want - not only what you can"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Supports loading ",(0,i.kt)("a",{parentName:"li",href:"https://z-shell.pages.dev/docs/getting_started/overview#oh-my-zsh-prezto"},"Oh My Zsh and Prezto"),"\nplugins and libraries, however, the implementation isn't framework-specific and doesn't bloat the plugin manager with\nsuch code, it allows to use of any framework. See our wiki on how to\n",(0,i.kt)("a",{parentName:"li",href:"https://z-shell.pages.dev/docs/getting_started/migration"},"migrate")," from other plugin managers.")),(0,i.kt)("h3",{id:"boost-performance-with-integrated-tools"},"Boost performance with integrated tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The dedicated ",(0,i.kt)("a",{parentName:"p",href:"https://z-shell.pages.dev/docs/ecosystem/packages"},"packages")," offload the user from providing long and\ncomplex commands. See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/z-shell"},"Z-Shell ZI")," organization for a complete list of packages.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The specialized extensions \u2014 so-called ",(0,i.kt)("a",{parentName:"p",href:"https://z-shell.pages.dev/docs/ecosystem/annexes"},"annexes")," \u2014 expand with new\ncommands, URL per-processors (used by e.g.: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/z-shell/z-a-readurl"},"z-a-readurl")," annex), post-install\nand post-update hooks, and much more."))),(0,i.kt)("h3",{id:"keep-it-clean-and-consistent"},"Keep it clean and consistent"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The system does not use ",(0,i.kt)("inlineCode",{parentName:"li"},"$FPATH"),", loading multiple plugins doesn't clutter ",(0,i.kt)("inlineCode",{parentName:"li"},"$FPATH")," with the same number of entries\n(e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"15"),", or more). Code is immune to ",(0,i.kt)("inlineCode",{parentName:"li"},"KSH_ARRAYS")," and other options typically causing compatibility problems.")),(0,i.kt)("h3",{id:"focus-on-what-matters"},"Focus on What Matters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Provides ",(0,i.kt)("a",{parentName:"p",href:"https://z-shell.pages.dev/docs/guides/commands#reports-and-statistis"},"reports and statistics")," and allows to\nmanage:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"aliases"),", ",(0,i.kt)("strong",{parentName:"p"},"functions"),", ",(0,i.kt)("strong",{parentName:"p"},"bindkeys"),", ",(0,i.kt)("strong",{parentName:"p"},"zle widgets"),", ",(0,i.kt)("strong",{parentName:"p"},"zstyles"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://z-shell.pages.dev/docs/guides/commands#completions-management"},"completions"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"FPATH")," elements.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Allows to quickly ",(0,i.kt)("a",{parentName:"p",href:"https://z-shell.pages.dev/docs/guides/benchmark"},"familiarize")," oneself with a new plugin and\nprovides rich and easy-to-digest information that might be helpful on various occasions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Supports the unloading of plugins and the ability to list, (un)install, and ",(0,i.kt)("strong",{parentName:"p"},"selectively disable"),", ",(0,i.kt)("strong",{parentName:"p"},"enable"),"\nplugin's completions."))),(0,i.kt)("h3",{id:"documentation"},"Documentation"),(0,i.kt)("p",null,"ZI Wiki pages are often improved and updated. Easily find the topic you are looking for with the\n",(0,i.kt)("a",{parentName:"p",href:"https://z-shell.pages.dev/search/"},"wiki search")),(0,i.kt)("h3",{id:"new-to-zsh-or-just-need-support"},"New to Zsh or just need support?"),(0,i.kt)("p",null,"Simply start a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/z-shell/zi/discussions/new?category=q-a"},"discussion")," and we will help. There is no\nsuch thing as a bad question - just ask :)"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://asciinema.org/a/459358"},(0,i.kt)("img",{parentName:"a",src:"https://asciinema.org/a/459358.svg",alt:"asciicast"}))),(0,i.kt)("h3",{id:"join-the-open-source"},"Join the open-source"),(0,i.kt)("p",null,"Friendly for new contributors!"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It's a good place to start with or just to show off your skills as we have almost 100 repositories that require\ndifferent types of developers with different types of experience.")),(0,i.kt)("p",null,"GitHub Org: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/z-shell"},"z-shell")))}d.isMDXComponent=!0}}]);