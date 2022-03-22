"use strict";(self.webpackChunkzw=self.webpackChunkzw||[]).push([[568],{9613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=p(n),c=r,u=k["".concat(d,".").concat(c)]||k[c]||m[c]||i;return n?a.createElement(u,l(l({ref:t},s),{},{components:n})):a.createElement(u,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3747:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(9496),r="apiTable_e8hp",i=n(1226);var l=(0,a.forwardRef)((function(e,t){var n=e.name,r=e.children,l=function(e){for(var t=e;(0,a.isValidElement)(t);)t=a.Children.toArray(t.props.children)[0];return t}(r),o=n?n+"-"+l:l,d="#"+o,p=(0,i.k6)();return a.createElement("tr",{id:o,tabIndex:0,ref:p.location.hash===d?t:void 0,onClick:function(){p.push(d)},onKeyDown:function(e){"Enter"===e.key&&p.push(d)}},r.props.children)}));function o(e){var t=e.children,n=e.name,i=a.Children.toArray(t.props.children),o=i[0],d=i[1],p=(0,a.useRef)(null);(0,a.useEffect)((function(){var e;null==(e=p.current)||e.focus()}),[p]);var s=a.Children.map(d.props.children,(function(e){return a.createElement(l,{name:n,ref:p},e)}));return a.createElement("table",{className:r},o,a.createElement("tbody",null,s))}},9871:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return k}});var a=n(2182),r=n(9028),i=(n(9496),n(9613)),l=n(3747),o=["components"],d={id:"common",title:"\ud83d\udd00 Common Syntax",sidebar_position:1,image:"zw/logo/320x320.png",description:"The Fundamental ZI syntax",keywords:["syntax","how-to-use"]},p=void 0,s={unversionedId:"guides/syntax/common",id:"guides/syntax/common",title:"\ud83d\udd00 Common Syntax",description:"The Fundamental ZI syntax",source:"@site/docs/guides/syntax/01_common.md",sourceDirName:"guides/syntax",slug:"/guides/syntax/common",permalink:"/ja/docs/guides/syntax/common",editUrl:"https://digitalclouds.crowdin.com/z-shell/ja",tags:[],version:"current",lastUpdatedBy:"Salvydas Lukosius",lastUpdatedAt:1645990837,formattedLastUpdatedAt:"2022/2/27",sidebarPosition:1,frontMatter:{id:"common",title:"\ud83d\udd00 Common Syntax",sidebar_position:1,image:"zw/logo/320x320.png",description:"The Fundamental ZI syntax",keywords:["syntax","how-to-use"]},sidebar:"autoSideBar_1",previous:{title:"\u267b\ufe0f Migration",permalink:"/ja/docs/getting_started/migration"},next:{title:"\u2728 For Syntax",permalink:"/ja/docs/guides/syntax/for"}},m={},k=[{value:"Standart syntax",id:"standart-syntax",level:2},{value:"The alternative syntaxes",id:"the-alternative-syntaxes",level:2},{value:"Summary",id:"summary",level:3},{value:"The make syntax",id:"the-make-syntax",level:3},{value:"Compiling programs",id:"compiling-programs",level:3},{value:"LS_COLORS",id:"ls_colors",level:3},{value:"Direnv",id:"direnv",level:3},{value:"Glance at the &#39;for&#39; syntax",id:"glance-at-the-for-syntax",level:4}],c={toc:k};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is recommended to familiarize with ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting_started/overview"},"getting_started/oveview")," before this."))),(0,i.kt)("h2",{id:"standart-syntax"},"Standart syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"zi \u2026\nzi ice \u2026\nzi load \u2026\nzi light \u2026\nzi unload \u2026\nzi snippet \u2026\n")),(0,i.kt)("p",null,"The normal way of specifying ices and their values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'zi wait"1" from"gh-r" atload"print Hello World"\nzi load \u2026\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There's no ",(0,i.kt)("inlineCode",{parentName:"p"},"ice")," subcommand - that is currently being fully allowed."))),(0,i.kt)("h2",{id:"the-alternative-syntaxes"},"The alternative syntaxes"),(0,i.kt)("p",null,"However, ZI supports also other syntaxes: the equal (",(0,i.kt)("inlineCode",{parentName:"p"},"="),") syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'zi wait=1 from=gh-r atload="print Hello World"\nzi load \u2026\n')),(0,i.kt)("p",null,"The colon (",(0,i.kt)("inlineCode",{parentName:"p"},":"),") syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'zi wait:1 from:gh-r atload:"print Hello World"\nzi load \u2026\n')),(0,i.kt)("p",null,"And also \u2013 in conjunction with all of the above \u2013 the GNU syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'zi --wait=1 --from=gh-r --atload="print Hello World"\nzi load \u2026\n')),(0,i.kt)("h3",{id:"summary"},"Summary"),(0,i.kt)("p",null,"It's up to the user which syntax to choose."),(0,i.kt)("p",null,"The original motivation behind the standard syntax was: to utilize the syntax highlighting of editors like Vim \u2013 and\nhave the strings following ice names colorized with a distinct color and this way separated from them. However, with the\n","[zi/zi-vim-syntax][11]"," syntax definition this motivation can be superseded with the ZI-specific highlighting, at least\nfor Vim."),(0,i.kt)("h3",{id:"the-make-syntax"},"The make syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'zi ice as"program" pick"$ZPFX/bin/git-*" make"PREFIX=$ZPFX"\nzi light tj/git-extras\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Makefile")," of the project above has only 2 tasks:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install the target."),(0,i.kt)("li",{parentName:"ol"},"Build scripts that are required for installation.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Makefile")," with 2 tasks, can use:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},'make"all install PREFIX=\u2026"'),","),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pick'\u2026'")," will ",(0,i.kt)("inlineCode",{parentName:"li"},"chmod +x")," all matching files and add ",(0,i.kt)("inlineCode",{parentName:"li"},"$ZPFX/bin/")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"$PATH"),".")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"/docs/guides/customization#$ZPFX"},"$ZPFX")," is provided by ZI, it is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.zi/polaris")," by default."),(0,i.kt)("p",{parentName:"div"},"However, it can be changed by specifying the custom ",(0,i.kt)("inlineCode",{parentName:"p"},"$ZPFX=")," target if required."))),(0,i.kt)("h3",{id:"compiling-programs"},"Compiling programs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'zi ice as"program" atclone"rm -f src/auto/config.cache; ./configure" \\\n  atpull"%atclone" make pick"src/vim"\nzi light vim/vim\n')),(0,i.kt)(l.Z,{mdxType:"APITable"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"as'program'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add file selected by ",(0,i.kt)("inlineCode",{parentName:"td"},"pick'\u2026'")," to ",(0,i.kt)("inlineCode",{parentName:"td"},"$PATH"),", and do not source it.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"atclone'\u2026'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Execute code\xa0after downloading.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"atpull'%atclone'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Execute the same code ",(0,i.kt)("inlineCode",{parentName:"td"},"atclone'\u2026'")," is given, but after successful update.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"make")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Run ",(0,i.kt)("inlineCode",{parentName:"td"},"make")," after ",(0,i.kt)("inlineCode",{parentName:"td"},"atclone'\u2026'")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"atpull'\u2026'")," (note: ",(0,i.kt)("inlineCode",{parentName:"td"},"make'!'")," will execute before them).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pick'src/vim'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Set executable flag on ",(0,i.kt)("inlineCode",{parentName:"td"},"src/vim"),", hint that ",(0,i.kt)("inlineCode",{parentName:"td"},"src/")," should be added to ",(0,i.kt)("inlineCode",{parentName:"td"},"$PATH"),"."))))),(0,i.kt)("p",null,"The same but with ",(0,i.kt)("strong",{parentName:"p"},"installation")," (",(0,i.kt)("inlineCode",{parentName:"p"},"make install"),") under ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/customization#$ZPFX"},"$ZPFX")," by default:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"zi ice as'program' atclone'rm -f src/auto/config.cache; \\\n  ./configure --prefix=$ZPFX' atpull'%atclone' make'all install' pick'$ZPFX/bin/vim'\nzi light vim/vim\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"as'program'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"As above.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"atclone'\u2026'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"As above ",(0,i.kt)("strong",{parentName:"td"},"plus")," pass ",(0,i.kt)("inlineCode",{parentName:"td"},"--prefix=$ZPFX")," to ",(0,i.kt)("inlineCode",{parentName:"td"},"./configure"),", to set the installation directory.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"atpull'%atclone'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"As above.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"make")),(0,i.kt)("td",{parentName:"tr",align:"left"},"As above, but also run the ",(0,i.kt)("inlineCode",{parentName:"td"},"install")," target.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pick'src/vim'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"as above, but for different path ",(0,i.kt)("inlineCode",{parentName:"td"},"$ZPFX/bin/vim"),".")))),(0,i.kt)("h3",{id:"ls_colors"},"LS_COLORS"),(0,i.kt)("p",null,"A repository ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/trapd00r/LS_COLORS"},"trapd00r/LS_COLORS")," provides a file with color definitions for GNU ",(0,i.kt)("inlineCode",{parentName:"p"},"ls")," command, and also for\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ogham/exa"},"ogham/exa"),"."),(0,i.kt)("p",null,"Typically one does ",(0,i.kt)("inlineCode",{parentName:"p"},"eval $( dircolors -b $HOME/LS_COLORS)")," to process this file and set the environment for ",(0,i.kt)("inlineCode",{parentName:"p"},"ls"),". This\nmeans ",(0,i.kt)("inlineCode",{parentName:"p"},"dircolors")," is run every shell startup."),(0,i.kt)("p",null,"This costs much time because a fork has to be done and the program, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"dircolors"),", binary needs to be loaded and\nexecuted, and because ",(0,i.kt)("inlineCode",{parentName:"p"},"dircolors")," loads the colors' definitions and processes them. Following ZI invocation solves this\nproblem:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"zi ice atclone'dircolors -b LS_COLORS > clrs.zsh' \\\n  atpull'%atclone' pick\"clrs.zsh\" nocompile'!' \\\n  atload'zstyle \":completion:*\" list-colors \u201c${(s.:.)LS_COLORS}\u201d'\nzi light trapd00r/LS_COLORS\n")),(0,i.kt)(l.Z,{mdxType:"APITable"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"atclone'\u2026'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Generate shell script, but instead of passing it to ",(0,i.kt)("inlineCode",{parentName:"td"},"eval"),". More below: (1)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"atpull'%atclone'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Do the same at any update of the plugin. More below: (2)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'pick"clrs.zsh"')),(0,i.kt)("td",{parentName:"tr",align:"left"},"Source the previously generated file ",(0,i.kt)("inlineCode",{parentName:"td"},"clrs zsh"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"nocompile'!'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Invokes compilation ",(0,i.kt)("strong",{parentName:"td"},"after")," the ",(0,i.kt)("inlineCode",{parentName:"td"},"atclone'\u2026'")," ",(0,i.kt)("a",{parentName:"td",href:"/docs/guides/syntax/ice-modifiers"},"ice-modifier")," and the ",(0,i.kt)("a",{parentName:"td",href:"/search?q=exclamation+mark"},"exclamation mark")," causes this.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"atload'\u2026'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Additionally sets up the Zsh completion to use the colors provided by the trapd00r package."))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(1) Save it to file. The ",(0,i.kt)("inlineCode",{parentName:"li"},"atclone'\u2026'")," is being ran on the ",(0,i.kt)("strong",{parentName:"li"},"installation")," while the ",(0,i.kt)("inlineCode",{parentName:"li"},"atpull'\u2026'")," hook is being run on\nan ",(0,i.kt)("strong",{parentName:"li"},"update")," of the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/trapd00r/LS_COLORS"},(0,i.kt)("strong",{parentName:"a"},"trapd00r/LS_COLORS"))," plugin."),(0,i.kt)("li",{parentName:"ul"},"(2) The ",(0,i.kt)("inlineCode",{parentName:"li"},"%atclone")," is just a special string that denotes the ",(0,i.kt)("inlineCode",{parentName:"li"},"atclone'\u2026'")," hook and is copied onto the ",(0,i.kt)("inlineCode",{parentName:"li"},"atpull'\u2026'"),"\nhook.")),(0,i.kt)("p",null,"This way, except for the plugin installation and update, ",(0,i.kt)("inlineCode",{parentName:"p"},"dircolors")," isn't ran, just normal sourcing is done."),(0,i.kt)("p",null,"The everyday sourced file, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"clrs.zsh"),", is being compiled to speed up the loading."),(0,i.kt)("h3",{id:"direnv"},"Direnv"),(0,i.kt)("p",null,"The project ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/direnv/direnv"},(0,i.kt)("strong",{parentName:"a"},"direnv/direnv"))," registers itself in Z shell to modify the environment on directory change. This\nregistration is most often done by ",(0,i.kt)("inlineCode",{parentName:"p"},'eval "$(direnv hook zsh)"')," added to ",(0,i.kt)("inlineCode",{parentName:"p"},".zshrc"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"zi ice as\"program\" make'!' atclone'./direnv hook zsh > zhook.zsh' \\\n  atpull'%atclone' src\"zhook.zsh\"\nzi light direnv/direnv\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"make'!'")," \u2013 execute ",(0,i.kt)("inlineCode",{parentName:"li"},"make")," before ",(0,i.kt)("inlineCode",{parentName:"li"},"atclone'\u2026'")," and before ",(0,i.kt)("inlineCode",{parentName:"li"},"atpull'\u2026'")," (see ",(0,i.kt)("inlineCode",{parentName:"li"},"make")," above),"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src'zhook.zsh'")," \u2013\xa0source file ",(0,i.kt)("inlineCode",{parentName:"li"},"zhook.zsh"),".")),(0,i.kt)("p",null,"In general, direnv works by hooking up to Zsh."),(0,i.kt)("p",null,"The code that does this is provided by program ",(0,i.kt)("inlineCode",{parentName:"p"},"direnv")," (built by ",(0,i.kt)("inlineCode",{parentName:"p"},"make'\u2026'"),")."),(0,i.kt)("p",null,"Above ",(0,i.kt)("inlineCode",{parentName:"p"},"atclone'\u2026'")," puts this code into file ",(0,i.kt)("inlineCode",{parentName:"p"},"zhook.zsh"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"src''")," sources it."),(0,i.kt)("p",null,"This way ",(0,i.kt)("inlineCode",{parentName:"p"},"direnv hook zsh")," is executed only on clone and update, and Zsh starts faster."),(0,i.kt)("h4",{id:"glance-at-the-for-syntax"},"Glance at the 'for' syntax"),(0,i.kt)("p",null,"The drawback of this standard procedure is that the ",(0,i.kt)("inlineCode",{parentName:"p"},"direnv")," binary is run on every shell startup and significantly\nslows it down. ZI allows to solve this in the following way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"zi as\"program\" make'!' atclone'./direnv hook zsh > zhook.zsh' \\\n  atpull'%atclone' pick\"direnv\" src\"zhook.zsh\" for \\\n    direnv/direnv\n")),(0,i.kt)(l.Z,{mdxType:"APITable"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"make'!'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Compile ",(0,i.kt)("inlineCode",{parentName:"td"},"direnv"),", the exclamation mark means: run the ",(0,i.kt)("inlineCode",{parentName:"td"},"make")," first, before ",(0,i.kt)("inlineCode",{parentName:"td"},"atclone'\u2026'")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"atpull'\u2026'")," hooks.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"atclone'\u2026'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"As soon as plugin installed generate the registration code and save it to ",(0,i.kt)("inlineCode",{parentName:"td"},"zhook.zsh"),", instead of passing to ",(0,i.kt)("inlineCode",{parentName:"td"},"eval"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"atpull'%atclone'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"atclone'\u2026'")," runs on ",(0,i.kt)("strong",{parentName:"td"},"installation")," while ",(0,i.kt)("inlineCode",{parentName:"td"},"atpull'\u2026'")," runs on ",(0,i.kt)("strong",{parentName:"td"},"update")," of the plugin.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"src'zhook.zsh'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Load generated registration code")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pick'direnv'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Ensure ",(0,i.kt)("inlineCode",{parentName:"td"},"+x")," permission on the binary")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"as'program'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The plugin is a program, there's no main file to the source."))))),(0,i.kt)("p",null,"This way registration code is generated once every installation and update, to then be simply sourced without running\n",(0,i.kt)("inlineCode",{parentName:"p"},"direnv"),"."),(0,i.kt)("p",null,"The project is also available as a binary ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/direnv/direnv/releases/"},"Github releases"),". This distribution can be installed by:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'zi from"gh-r" as"program" mv"direnv* -> direnv" \\\n  atclone\'./direnv hook zsh > zhook.zsh\' atpull\'%atclone\' \\\n  pick"direnv" src="zhook.zsh" for \\\n    direnv/direnv\n')),(0,i.kt)(l.Z,{mdxType:"APITable"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"from'gh-r'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Install from ",(0,i.kt)("inlineCode",{parentName:"td"},"direnv")," from ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/direnv/direnv/releases/"},"GitHub releases"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mv'direnv* -> direnv'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"After installation, rename ",(0,i.kt)("inlineCode",{parentName:"td"},"direnv.linux-386")," or similar file to ",(0,i.kt)("inlineCode",{parentName:"td"},"direnv"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"atclone'\u2026'"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"atpull'\u2026'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"As in previous example")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pick'direnv'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"As in previous example.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"as'program'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"As in previous example"))))))}u.isMDXComponent=!0}}]);