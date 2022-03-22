"use strict";(self.webpackChunkzw=self.webpackChunkzw||[]).push([[5775],{9613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6852:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(2182),r=n(9028),l=(n(9496),n(9613)),i=["components"],o={id:"patch-dl",title:"\ud83d\udca0 Patch DL",image:"zw/logo/320x320.png",description:"Annex - Patch DL documentation",keywords:["annex","patch-dl"]},c=void 0,p={unversionedId:"ecosystem/annexes/patch-dl",id:"ecosystem/annexes/patch-dl",title:"\ud83d\udca0 Patch DL",description:"Annex - Patch DL documentation",source:"@site/docs/ecosystem/annexes/01_4_patch-dl.md",sourceDirName:"ecosystem/annexes",slug:"/ecosystem/annexes/patch-dl",permalink:"/ja/docs/ecosystem/annexes/patch-dl",editUrl:"https://digitalclouds.crowdin.com/z-shell/ja",tags:[],version:"current",lastUpdatedBy:"Salvydas Lukosius",lastUpdatedAt:1645956898,formattedLastUpdatedAt:"2022/2/27",frontMatter:{id:"patch-dl",title:"\ud83d\udca0 Patch DL",image:"zw/logo/320x320.png",description:"Annex - Patch DL documentation",keywords:["annex","patch-dl"]},sidebar:"autoSideBar_1",previous:{title:"\ud83d\udca0 Default Ice",permalink:"/ja/docs/ecosystem/annexes/default-ice"},next:{title:"\ud83d\udca0 Read URL",permalink:"/ja/docs/ecosystem/annexes/readurl"}},s={},u=[{value:"Install Patch DL",id:"install-patch-dl",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/z-shell/z-a-patch-dl"},"z-shell/z-a-patch-dl")," annex downloads files and applies patches and adds two\nice modifiers:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"zi ice dl'{URL} [-> {optional-output-file-name}]; \u2026' \u2026\n")),(0,l.kt)("p",null,"and"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"zi ice patch'{file-name-with-the-patch-to-apply}; \u2026' \u2026\n")),(0,l.kt)("p",null,"The annex (i.e. ZI extension) will download the given ",(0,l.kt)("inlineCode",{parentName:"p"},"{URL}")," under the path ",(0,l.kt)("inlineCode",{parentName:"p"},"{optional-output-file-name}")," (if no file\nname given, then it is taken from last segment of the URL) in case of the ",(0,l.kt)("inlineCode",{parentName:"p"},"dl''")," ice modifier, and apply a patch given\nby the ",(0,l.kt)("inlineCode",{parentName:"p"},"{file-name-with-the-patch-to-apply}")," in case of the ",(0,l.kt)("inlineCode",{parentName:"p"},"patch''")," ice-mod."),(0,l.kt)("p",null,"You can use this functionality to download and apply patches. For example, to install ",(0,l.kt)("inlineCode",{parentName:"p"},"fbterm"),", two patches are being\nneeded, one to fix the operation, the other one to fix the build:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'zi ice \\\n    as"command" pick"$ZPFX/bin/fbterm" \\\n    dl"https://bugs.archlinux.org/task/46860?getfile=13513 -> ins.patch" \\\n    dl"https://aur.archlinux.org/cgit/aur.git/plain/0001-Fix-build-with-gcc-6.patch?h=fbterm-git" \\\n    patch"ins.patch; 0001-Fix-build-with-gcc-6.patch" \\\n    atclone"./configure --prefix=$ZPFX" \\\n    atpull"%atclone" \\\n    make"install" reset\nzi load izmntuk/fbterm\n')),(0,l.kt)("p",null,"This command will result in:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/z-shell/z-a-patch-dl/main/images/fbterm-ex.png",alt:"fbterm example"})),(0,l.kt)("h2",{id:"install-patch-dl"},"Install Patch DL"),(0,l.kt)("p",null,"Simply load like a plugin, i.e. the following will add the annex to ZI:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"zi light z-shell/z-a-patch-dl\n")),(0,l.kt)("p",null,"After executing this command you can then use the ",(0,l.kt)("inlineCode",{parentName:"p"},"dl''")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"patch''")," ice-mods."))}m.isMDXComponent=!0}}]);