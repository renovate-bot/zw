"use strict";(self.webpackChunkzw=self.webpackChunkzw||[]).push([[1922],{9613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1205:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(2182),a=n(9028),i=(n(9496),n(9613)),o=["components"],l={id:"benchmark",title:"\u23f2 Benchmarking",image:"zw/logo/320x320.png",description:"Benchmarking, Profiling & Statistics",keywords:["statistics","benchmark","profiling"]},p=void 0,s={unversionedId:"guides/benchmark",id:"guides/benchmark",title:"\u23f2 Benchmarking",description:"Benchmarking, Profiling & Statistics",source:"@site/docs/guides/06_benchmark.md",sourceDirName:"guides",slug:"/guides/benchmark",permalink:"/docs/guides/benchmark",editUrl:"https://github.com/z-shell/zw/tree/main/docs/guides/06_benchmark.md",tags:[],version:"current",lastUpdatedBy:"Salvydas Lukosius",lastUpdatedAt:1647243319,formattedLastUpdatedAt:"3/14/2022",sidebarPosition:6,frontMatter:{id:"benchmark",title:"\u23f2 Benchmarking",image:"zw/logo/320x320.png",description:"Benchmarking, Profiling & Statistics",keywords:["statistics","benchmark","profiling"]},sidebar:"autoSideBar_1",previous:{title:"\ud83c\udfd7 Preferences & Configuration",permalink:"/docs/guides/customization"},next:{title:"\ud83d\udd3a Quick Introduction",permalink:"/docs/gallery/collection"}},c={},d=[{value:"Profile plugins",id:"profile-plugins",level:2},{value:"Profile <code>.zshrc</code> startup",id:"profile-zshrc-startup",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"profile-plugins"},"Profile plugins"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="~/.zshrc"',title:'"~/.zshrc"'},"zi ice atinit'zmodload zsh/zprof' \\\n  atload'zprof | head -n 20; zmodload -u zsh/zprof'\nzi light z-shell/F-Sy-H\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"atinit'\u2026'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"loads ",(0,i.kt)("inlineCode",{parentName:"td"},"zsh/zprof")," module, shipped with Zsh, before loading the plugin \u2013 this starts the profiling.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"atload'\u2026'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"works after loading the plugin \u2013\xa0shows profiling results ",(0,i.kt)("inlineCode",{parentName:"td"},"zprof / head"),", unloads ",(0,i.kt)("inlineCode",{parentName:"td"},"zsh/zprof")," - this stops the profiling.")))),(0,i.kt)("p",null,"While in effect, only a single plugin, in this case ",(0,i.kt)("inlineCode",{parentName:"p"},"z-shell/F-Sy-H"),", will be profiled."),(0,i.kt)("p",null,"The rest plugins will go on completely normally, as when plugins are loaded with ",(0,i.kt)("inlineCode",{parentName:"p"},"light")," - reporting is disabled."),(0,i.kt)("p",null,"Less code is being run in the background, the automatic data gathering, during loading of a plugin, for the reports and\nthe possibility to unload the plugin, will be activated and the functions will not appear in the ",(0,i.kt)("inlineCode",{parentName:"p"},"zprof")," report."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example ",(0,i.kt)("inlineCode",{parentName:"li"},"zprof")," report:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'{3} title="zprof"',"{3}":!0,title:'"zprof"'},"num calls    time                self                 name\n---------------------------------------------------------------------------\n 1)  1 57,76 57,76 57,91%  57,76 57,76 57,91% _zsh_highlight_bind_widgets\n 2)  1 25,81 25,81 25,88%  25,81 25,81 25,88% compinit\n 3)  4 10,71  2,68 10,74%   8,71  2,18  8,73% --zi-shadow-autoload\n 4) 43  2,06  0,05  2,07%   2,06  0,05  2,07% -zi-add-report\n 5)  8  1,98  0,25  1,98%   1,98  0,25  1,98% compdef\n 6)  1  2,85  2,85  2,85%   0,87  0,87  0,87% -zi-compdef-replay\n 7)  1  0,68  0,68  0,68%   0,68  0,68  0,68% -zi-shadow-off\n 8)  1  0,79  0,79  0,79%   0,49  0,49  0,49% add-zsh-hook\n 9)  1  0,47  0,47  0,47%   0,47  0,47  0,47% -zi-shadow-on\n1)   3  0,34  0,11  0,35%   0,34  0,11  0,35% (anon)\n2)   4 10,91  2,73 10,94%   0,20  0,05  0,20% autoload\n3)   1  0,19  0,19  0,19%   0,19  0,19  0,19% -fast-highlight-fill-option-variables\n4)   1 25,98 25,98 26,05%   0,17  0,17  0,17% zpcompinit\n5)   1  2,88  2,88  2,89%   0,03  0,03  0,03% zpcdreplay\n6)   1  0,00  0,00  0,00%   0,00  0,00  0,00% -zi-load-plugin\n-----------------------------------------------------------------------------------\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The first column is the time is in milliseconds;"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It denotes the amount of time spent in a function in total."),(0,i.kt)("li",{parentName:"ul"},"For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"--zi-shadow-autoload")," consumed 10.71 ms of the execution time,"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The fourth column is also a time in milliseconds, but it denotes the amount of time spent on executing only of\nfunction's ",(0,i.kt)("strong",{parentName:"p"},"own code"),", it doesn't count the time spent in ",(0,i.kt)("strong",{parentName:"p"},"descendant functions")," that are called from the\nfunction;"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"--zi-shadow-autoload")," spent 8.71 ms on executing only its own code."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The table is sorted on the ",(0,i.kt)("strong",{parentName:"p"},"self-time")," column."))),(0,i.kt)("h2",{id:"profile-zshrc-startup"},"Profile ",(0,i.kt)("inlineCode",{parentName:"h2"},".zshrc")," startup"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"PROFILE_STARTUP=true")," to enable profiling.")),(0,i.kt)("p",null,"Place snippet below at the top of ",(0,i.kt)("inlineCode",{parentName:"p"},".zshrc"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="~/.zshrc"',title:'"~/.zshrc"'},"PROFILE_STARTUP=false\n\nif [[ \"$PROFILE_STARTUP\" == true ]]; then\n  zmodload zsh/zprof\n  PS4=$'%D{%M%S%.} %N:%i> '\n  exec 3>&2 2>$HOME/startlog.$$\n  setopt xtrace prompt_subst\nfi\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"PS4 Prompt Expansion")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Zsh Sourceforge docs: ",(0,i.kt)("a",{parentName:"p",href:"https://zsh.sourceforge.net/Doc/Release/Prompt-Expansion.html"},"Prompt Exapansion")))),(0,i.kt)("p",null,"Place at the bottom of ",(0,i.kt)("inlineCode",{parentName:"p"},".zshrc")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="~/.zshrc"',title:'"~/.zshrc"'},"if [[\"$PROFILE_STARTUP\" == true]]; then unsetopt xtrace exec 2>&3 3>&- zprof > ~/zshprofile$(date +'%s') fi\n")),(0,i.kt)("p",null,"The next time your ",(0,i.kt)("inlineCode",{parentName:"p"},".zshrc")," is sourced it will generate 2 files in the ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME")," directory."))}m.isMDXComponent=!0}}]);