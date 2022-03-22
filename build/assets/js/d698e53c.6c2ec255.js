"use strict";(self.webpackChunkzw=self.webpackChunkzw||[]).push([[5154],{9613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3747:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(9496),i="apiTable_e8hp",r=n(1226);var o=(0,a.forwardRef)((function(e,t){var n=e.name,i=e.children,o=function(e){for(var t=e;(0,a.isValidElement)(t);)t=a.Children.toArray(t.props.children)[0];return t}(i),l=n?n+"-"+o:o,s="#"+l,p=(0,r.k6)();return a.createElement("tr",{id:l,tabIndex:0,ref:p.location.hash===s?t:void 0,onClick:function(){p.push(s)},onKeyDown:function(e){"Enter"===e.key&&p.push(s)}},i.props.children)}));function l(e){var t=e.children,n=e.name,r=a.Children.toArray(t.props.children),l=r[0],s=r[1],p=(0,a.useRef)(null);(0,a.useEffect)((function(){var e;null==(e=p.current)||e.focus()}),[p]);var d=a.Children.map(s.props.children,(function(e){return a.createElement(o,{name:n,ref:p},e)}));return a.createElement("table",{className:i},l,a.createElement("tbody",null,d))}},1499:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var a=n(2182),i=n(9028),r=(n(9496),n(9613)),o=n(3747),l=["components"],s={id:"for",title:"\u2728 For Syntax",image:"zw/logo/320x320.png",description:"The For Syntax documentation",keywords:["syntax","how-to-use"]},p=void 0,d={unversionedId:"guides/syntax/for",id:"guides/syntax/for",title:"\u2728 For Syntax",description:"The For Syntax documentation",source:"@site/docs/guides/syntax/02_for.md",sourceDirName:"guides/syntax",slug:"/guides/syntax/for",permalink:"/docs/guides/syntax/for",editUrl:"https://github.com/z-shell/zw/tree/main/docs/guides/syntax/02_for.md",tags:[],version:"current",lastUpdatedBy:"Salvydas Lukosius",lastUpdatedAt:1645990837,formattedLastUpdatedAt:"2/27/2022",sidebarPosition:2,frontMatter:{id:"for",title:"\u2728 For Syntax",image:"zw/logo/320x320.png",description:"The For Syntax documentation",keywords:["syntax","how-to-use"]},sidebar:"autoSideBar_1",previous:{title:"\ud83d\udd00 Common Syntax",permalink:"/docs/guides/syntax/common"},next:{title:"\ud83e\uddca Ice Syntax",permalink:"/docs/guides/syntax/ice"}},m={},c=[{value:"Use cases of <code>for</code> syntax",id:"use-cases-of-for-syntax",level:3},{value:"With turbo mode and the for syntax",id:"with-turbo-mode-and-the-for-syntax",level:3},{value:"Summarized",id:"summarized",level:4},{value:"Oh-My-Zsh",id:"oh-my-zsh",level:3},{value:"With turbo mode and for syntax",id:"with-turbo-mode-and-for-syntax",level:4}],u={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," syntax is more concise and more optimized."),(0,r.kt)("p",null,"It is best presented by a real-world example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'zi as"null" wait"3" lucid for \\\n  sbin Fakerr/git-recall \\\n  sbin paulirish/git-open \\\n  sbin paulirish/git-recent \\\n  sbin davidosomething/git-my \\\n  make"PREFIX=$ZPFX install" iwata/git-now \\\n  make"PREFIX=$ZPFX" tj/git-extras\n')),(0,r.kt)("p",null,"Above single command installs 6 plugins (",(0,r.kt)("a",{parentName:"p",href:"/search/?q=git+ext"},"git extension")," packages), with the base ices ",(0,r.kt)("inlineCode",{parentName:"p"},'as"null" wait"3" lucid')," that\nare common to all of the plugins and 6 plugin-specific add-on ices."),(0,r.kt)("h3",{id:"use-cases-of-for-syntax"},"Use cases of ",(0,r.kt)("inlineCode",{parentName:"h3"},"for")," syntax"),(0,r.kt)("p",null,"Load a few useful binary packages from the ",(0,r.kt)("a",{parentName:"p",href:"/search/?q=GH-R"},"GitHub releases"),", utils:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'zi as"null" wait"2" lucid from"gh-r" for \\\n  mv"exa* -> exa" sbin ogham/exa \\\n  mv"fd* -> fd" sbin"fd/fd" @sharkdp/fd \\\n  sbin"fzf" junegunn/fzf\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sbin'\u2026'")," is an ",(0,r.kt)("a",{parentName:"li",href:"/search/?q=ice"},"ice")," added by the ",(0,r.kt)("a",{parentName:"li",href:"/search/?q=bin+gem+node"},"bin-gem-node")," ",(0,r.kt)("a",{parentName:"li",href:"/search/?q=annex"},"annex"),", it provides the command to the command line\nwithout altering ",(0,r.kt)("inlineCode",{parentName:"li"},"$PATH"),"."),(0,r.kt)("li",{parentName:"ul"},"If the name of the command is the same as the name of the plugin, the ice contents can be skipped.")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/search/?q=turbo+mode"},"Turbo")," load some plugins, without any plugin-specific ices:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"zi wait lucid for \\\n  hlissner/zsh-autopair \\\n  urbainvaes/fzf-marks\n")),(0,r.kt)("p",null,"Load two ",(0,r.kt)("a",{parentName:"p",href:"/search/?q=oh+my+zsh"},"Oh My Zsh")," files as ",(0,r.kt)("a",{parentName:"p",href:"/search/?q=snippets"},"snippets"),", in turbo mode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'zi wait lucid for \\\n  OMZ::lib/git.zsh \\\n  atload"unalias grv" OMZ::plugins/git/git.plugin.zsh\n')),(0,r.kt)("h3",{id:"with-turbo-mode-and-the-for-syntax"},"With ",(0,r.kt)("a",{parentName:"h3",href:"/search/?q=turbo+mode"},"turbo mode")," and the ",(0,r.kt)("a",{parentName:"h3",href:"/search/?q=oh+my+zsh"},"for")," syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},'zi wait lucid light-mode for \\\n  atinit"zicompinit; zicdreplay" \\\n    z-shell/F-Sy-H \\\n  atload"_zsh_autosuggest_start" \\\n    zsh-users/zsh-autosuggestions \\\n  blockf atpull\'zi creinstall -q .\' \\\n    zsh-users/zsh-completions\n')),(0,r.kt)(o.Z,{mdxType:"APITable"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"wait")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Load 0 seconds (about 5 ms exactly) after prompt (",(0,r.kt)("a",{parentName:"td",href:"/search/?q=turbo+mode"},"turbo mode"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lucid")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Silence the under-prompt messages ("',(0,r.kt)("inlineCode",{parentName:"td"},"Loaded {name of the plugin}"),'").')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"light-mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Load the plugin in ",(0,r.kt)("inlineCode",{parentName:"td"},"light")," mode. More below (1).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"atpull'\u2026'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Execute after updating the plugin \u2013 the command in the ice will install any new completions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"atinit'\u2026'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Execute code before loading plugin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"atload'\u2026'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Execute code after loading plugin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zicompinit")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Equals to\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"autoload compinit; compinit"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zicdreplay")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Execute ",(0,r.kt)("inlineCode",{parentName:"td"},"compdef \u2026")," calls that plugins did. More below (2)."))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"(1) Then the tracking of plugin, activity report gathering, accessible via the ",(0,r.kt)("inlineCode",{parentName:"li"},"zi report {plugin-name}")," subcommand)\nis being disabled. Note that for turbo mode, the performance gains are almost ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", so in this mode, you can load all\nplugins with the tracking and the ",(0,r.kt)("inlineCode",{parentName:"li"},"light-mode")," ice can be removed from the command."),(0,r.kt)("li",{parentName:"ul"},"(2) They were recorded and ",(0,r.kt)("inlineCode",{parentName:"li"},"compinit")," can be called later. ",(0,r.kt)("inlineCode",{parentName:"li"},"compinit")," provides the ",(0,r.kt)("inlineCode",{parentName:"li"},"compdef")," function, so it must be\nran before issuing the taken-over ",(0,r.kt)("inlineCode",{parentName:"li"},"compdef"),"s with ",(0,r.kt)("inlineCode",{parentName:"li"},"zicdreplay"),".")),(0,r.kt)("h4",{id:"summarized"},"Summarized"),(0,r.kt)("p",null,"Syntax-highlighting plugins, like ",(0,r.kt)("a",{parentName:"p",href:"/search/?q=snippets"},"F-Sy-H")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zsh-users/zsh-syntax-highlighting"},"zsh-syntax-highlighting"),", theoretically expect to be loaded last,\neven after the completion initialization as ",(0,r.kt)("inlineCode",{parentName:"p"},"compinit")," function. However in practice, you just have to ensure that such\nplugin is loaded after plugins that are issuing ",(0,r.kt)("inlineCode",{parentName:"p"},"compdef")," \u2013 which basically means completions that aren't using the\nunderscore-starting function file; the completion initialization still has to be performed before syntax-highlighting\nplugin, hence the ",(0,r.kt)("inlineCode",{parentName:"p"},"atinit'\u2026'")," ice, which will load ",(0,r.kt)("inlineCode",{parentName:"p"},"compinit")," right before loading the plugin, the syntax-highlighting\nand suggestions plugins are loaded early for a better user experience."),(0,r.kt)("h3",{id:"oh-my-zsh"},"Oh-My-Zsh"),(0,r.kt)("h4",{id:"with-turbo-mode-and-for-syntax"},"With ",(0,r.kt)("a",{parentName:"h4",href:"/search/?q=turbo+mode"},"turbo mode")," and ",(0,r.kt)("a",{parentName:"h4",href:"/search/?q=oh+my+zsh"},"for")," syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# A.\nsetopt promptsubst\n\n# B.\nzi wait lucid for \\\n  OMZL::git.zsh \\\n  atload"unalias grv" \\\n  OMZP::git\n\nPS1="READY >" # provide a simple prompt till the theme loads\n\n# C.\nzi wait\'!\' lucid for \\\n  OMZL::prompt_info_functions.zsh \\\n  OMZT::gnzh\n\n# D.\nzi wait lucid for \\\n    atinit"zicompinit; zicdreplay" \\\n    z-shell/fast-syntax-highlighting \\\n  OMZP::colored-man-pages \\\n    as"completion" \\\n  OMZP::docker/_docker\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"A")," - Most themes use this option."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"B")," - OMZ themes use this library and some other use also the plugin. It provides many aliases \u2013 ",(0,r.kt)("inlineCode",{parentName:"p"},"atload'\u2026'")," shows how\nto disable some of them (e.g.: to use program ",(0,r.kt)("inlineCode",{parentName:"p"},"rgburke/grv"),")."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"C")," - Set OMZ theme. Loaded separately because the theme needs the ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"wait")," ice to reset the prompt\nafter loading the snippet in Turbo."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"D")," - Some plugins: a) syntax-highlighting, loaded possibly early for a better user experience), b) example functional\nplugin, c) Docker completion."))),(0,r.kt)("p",null,"Above setup loads everything after prompt, because of preceding ",(0,r.kt)("inlineCode",{parentName:"p"},"wait")," ice. That is called ",(0,r.kt)("strong",{parentName:"p"},"turbo mode"),", it shortens\nZsh startup time by ",(0,r.kt)("u",null,"50%-80%"),", e.g. instead of 200 ms, it'll be getting your shell started up after ",(0,r.kt)("strong",{parentName:"p"},"40 ms"),"."),(0,r.kt)("p",null,"With normal setup \u2013 ",(0,r.kt)("strong",{parentName:"p"},"you can remove ",(0,r.kt)("inlineCode",{parentName:"strong"},"wait")," only from the theme plugin")," and its dependencies to have the same effect\nwhile still using turbo mode for everything remaining:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# A.\nsetopt promptsubst\n\n# B.\nzi snippet OMZL::git.zsh\n\n# C.\nzi ice atload"unalias grv"\nzi snippet OMZP::git\n\n# D.\nzi for OMZL::prompt_info_functions.zsh OMZT::gnzh\n\n# E.\nzi snippet OMZP::colored-man-pages\n\n# F.\nzi ice as"completion"\nzi snippet OMZP::docker/_docker\n\n# G.\nzi ice atinit"zicompinit; zicdreplay"\nzi light z-shell/F-Sy-H\n')),(0,r.kt)("p",null,"In general, ",(0,r.kt)("a",{parentName:"p",href:"/search/?q=turbo+mode"},"turbo mode")," can be optionally enabled only for a subset of plugins or for all plugins."))}h.isMDXComponent=!0}}]);