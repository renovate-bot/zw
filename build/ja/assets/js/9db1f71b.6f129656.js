"use strict";(self.webpackChunkzw=self.webpackChunkzw||[]).push([[9567],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var l=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?l.createElement(h,o(o({ref:t},u),{},{components:n})):l.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5231:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var l=n(2182),a=n(9028),r=(n(9496),n(9613)),o=["components"],i={id:"console",title:"\u2699\ufe0f Console",image:"zw/logo/320x320.png",description:"A console based on the `zsh/zcurses` Zshell module.",keywords:["console","zsh-plugin","zi-console"]},s=void 0,p={unversionedId:"ecosystem/plugins/console",id:"ecosystem/plugins/console",title:"\u2699\ufe0f Console",description:"A console based on the `zsh/zcurses` Zshell module.",source:"@site/docs/ecosystem/plugins/08_console.md",sourceDirName:"ecosystem/plugins",slug:"/ecosystem/plugins/console",permalink:"/ja/docs/ecosystem/plugins/console",editUrl:"https://digitalclouds.crowdin.com/z-shell/ja",tags:[],version:"current",lastUpdatedBy:"Salvydas Lukosius",lastUpdatedAt:1645977796,formattedLastUpdatedAt:"2022/2/27",sidebarPosition:8,frontMatter:{id:"console",title:"\u2699\ufe0f Console",image:"zw/logo/320x320.png",description:"A console based on the `zsh/zcurses` Zshell module.",keywords:["console","zsh-plugin","zi-console"]},sidebar:"autoSideBar_1",previous:{title:"\u2699\ufe0f ZPrompts",permalink:"/ja/docs/ecosystem/plugins/zprompts"},next:{title:"\u2699\ufe0f ZBrowse",permalink:"/ja/docs/ecosystem/plugins/zbrowse"}},u={},c=[{value:"ZI console usage",id:"zi-console-usage",level:2},{value:"Screencast",id:"screencast",level:2},{value:"Install console",id:"install-console",level:2},{value:"Solving The Lack Of <code>zsh/curses</code> Module With ZI",id:"solving-the-lack-of-zshcurses-module-with-zi",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/z-shell/zi-console"},"z-shell/zi-console"))),(0,r.kt)("p",null,"A console for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/z-shell/zi"},"ZI")," \u2013 based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"zsh/zcurses")," Zshell module allows the user to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"View the currently loaded plugins in a colorful list, in one of 3 different display modes,"),(0,r.kt)("li",{parentName:"ul"},"Unload and load plugins,"),(0,r.kt)("li",{parentName:"ul"},"Delete the plugins and snippets from the disk.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Prerequisities: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/z-shell/zui"},"ZUI")," library.")),(0,r.kt)("h2",{id:"zi-console-usage"},"ZI console usage"),(0,r.kt)("p",null,"Start the console by ",(0,r.kt)("kbd",null,"Ctrl-O")," ",(0,r.kt)("kbd",null,"Ctrl-J")," keyboard shortcut, or by running ",(0,r.kt)("inlineCode",{parentName:"p"},"ziconsole")," function in the\nshell. Then, in the console:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key(s)"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Ctrl-U"),",",(0,r.kt)("inlineCode",{parentName:"td"},"Ctrl-D")),(0,r.kt)("td",{parentName:"tr",align:null},"Half page up; half page down")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Ctrl-P"),",",(0,r.kt)("inlineCode",{parentName:"td"},"Ctrl-N")),(0,r.kt)("td",{parentName:"tr",align:null},"Previous line, centered; next line, centered")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Ctrl-L")),(0,r.kt)("td",{parentName:"tr",align:null},"Redraw of whole display")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"["),", ",(0,r.kt)("inlineCode",{parentName:"td"},"]")),(0,r.kt)("td",{parentName:"tr",align:null},"Jump to next and previous section (e.g.: next plugin or snippet)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"g"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"G")),(0,r.kt)("td",{parentName:"tr",align:null},"Jump to beginning and end of whole interface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<"),",",(0,r.kt)("inlineCode",{parentName:"td"},">")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"{"),",",(0,r.kt)("inlineCode",{parentName:"td"},"}")),(0,r.kt)("td",{parentName:"tr",align:null},"Horizontal scroll (i.e.: left or right)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/")),(0,r.kt)("td",{parentName:"tr",align:null},"Show incremental search")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"F1")),(0,r.kt)("td",{parentName:"tr",align:null},"Jump to result (in incremental search) and back")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Esc")),(0,r.kt)("td",{parentName:"tr",align:null},"Exit incremental search, clearing query")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Ctrl-W")),(0,r.kt)("td",{parentName:"tr",align:null},"Delete whole word (in incremental search)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Ctrl-K")),(0,r.kt)("td",{parentName:"tr",align:null},"Delete whole line (in incremental search)")))),(0,r.kt)("h2",{id:"screencast"},"Screencast"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://asciinema.org/a/272994"},(0,r.kt)("img",{parentName:"a",src:"https://asciinema.org/a/272994.svg",alt:"asciicast"}))),(0,r.kt)("h2",{id:"install-console"},"Install console"),(0,r.kt)("p",null,"Load like any other normal plugin, e.g.:"),(0,r.kt)("p",null,"with use of ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting_started/overview#turbo-mode-zsh--53"},"turbo mode")," and the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/syntax/for"},"for")," syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"zi wait lucid for z-shell/zi-console\n")),(0,r.kt)("p",null,"The plugin needs ",(0,r.kt)("inlineCode",{parentName:"p"},"zsh/curses")," Zsh module. You can check if it's available to your Zsh by executing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"zmodload zsh/curses\n")),(0,r.kt)("p",null,"If the call will return an error, then the ",(0,r.kt)("inlineCode",{parentName:"p"},"zsh/curses")," module isn't available."),(0,r.kt)("h3",{id:"solving-the-lack-of-zshcurses-module-with-zi"},"Solving The Lack Of ",(0,r.kt)("inlineCode",{parentName:"h3"},"zsh/curses")," Module With ZI"),(0,r.kt)("p",null,"You can build the ",(0,r.kt)("inlineCode",{parentName:"p"},"zsh/curses"),"-equipped Zshell with ZI by the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'zi ice id-as"zsh" atclone"./.preconfig\n        CFLAGS=\'-I/usr/include -I/usr/local/include -g -O2 -Wall\' \\\n        LDFLAGS=\'-L/usr/lib -L/usr/local/lib\' ./configure --prefix=\'$ZPFX\'" \\\n    atpull"%atclone" run-atpull make"install" pick"/dev/null"\nzi load zsh-users/zsh\n')),(0,r.kt)("p",null,"The command will build a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"zsh")," and install it under ",(0,r.kt)("inlineCode",{parentName:"p"},"$ZPFX")," (",(0,r.kt)("inlineCode",{parentName:"p"},"~/.zi/polaris")," by default). The path ",(0,r.kt)("inlineCode",{parentName:"p"},"$ZPFX/bin")," is\nalready added to ",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH")," by ZI at first position, so starting ",(0,r.kt)("inlineCode",{parentName:"p"},"zsh")," will run the new Zshell."),(0,r.kt)("p",null,"When on Gentoo, and possibly other systems, the ",(0,r.kt)("inlineCode",{parentName:"p"},"zsh")," can still not have the ncurses library linked. To address this,\nutilize the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/z-shell/z-a-patch-dl"},"z-a-patch-dl")," annex and automatically patch the source first:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'zi light z-shell/z-a-patch-dl\nzi ice id-as"zsh" atclone"./.preconfig\n        CFLAGS=\'-I/usr/include -I/usr/local/include -g -O2 -Wall\' \\\n        LDFLAGS=\'-L/usr/lib -L/usr/local/lib\' ./configure --prefix=\'$ZPFX\'" \\\n    dl"https://gist.githubusercontent.com/z-shell/2373494c71cb6d1529344a2ed1a64b03/raw -> curses.patch" \\\n    patch\'curses.patch\' atpull"%atclone" reset \\\n    run-atpull make"install" pick"/dev/null"\nzi load zsh-users/zsh\n')),(0,r.kt)("p",null,"Then, to update, rebuild and reinstall the ",(0,r.kt)("inlineCode",{parentName:"p"},"zsh"),", you can do ",(0,r.kt)("inlineCode",{parentName:"p"},"zi update zsh"),". The binary can be safely copied over\n",(0,r.kt)("inlineCode",{parentName:"p"},"/bin/zsh")," as it has paths to all needed directories built-in."))}m.isMDXComponent=!0}}]);