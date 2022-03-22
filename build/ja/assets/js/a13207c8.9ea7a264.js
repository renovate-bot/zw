"use strict";(self.webpackChunkzw=self.webpackChunkzw||[]).push([[9887],{9613:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var i=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(t),u=a,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return t?i.createElement(h,o(o({ref:n},d),{},{components:t})):i.createElement(h,o({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=c;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var p=2;p<l;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1042:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return m}});var i=t(2182),a=t(9028),l=(t(9496),t(9613)),o=["components"],r={id:"zsh-nav-tools",title:"\u2699\ufe0f Navigation Tools",image:"zw/logo/320x320.png",description:"Multi-word history searcher, `n-cd` \u2013 directory bookmark manager, `n-kill` \u2013\xa0`htop` like kill utility, and more.",keywords:["zsh-navigation-tools","zsh-plugin"]},s=void 0,p={unversionedId:"ecosystem/plugins/zsh-nav-tools",id:"ecosystem/plugins/zsh-nav-tools",title:"\u2699\ufe0f Navigation Tools",description:"Multi-word history searcher, `n-cd` \u2013 directory bookmark manager, `n-kill` \u2013\xa0`htop` like kill utility, and more.",source:"@site/docs/ecosystem/plugins/03_zsh_nav_tools.md",sourceDirName:"ecosystem/plugins",slug:"/ecosystem/plugins/zsh-nav-tools",permalink:"/ja/docs/ecosystem/plugins/zsh-nav-tools",editUrl:"https://digitalclouds.crowdin.com/z-shell/ja",tags:[],version:"current",lastUpdatedBy:"Salvydas Lukosius",lastUpdatedAt:1647090928,formattedLastUpdatedAt:"2022/3/12",sidebarPosition:3,frontMatter:{id:"zsh-nav-tools",title:"\u2699\ufe0f Navigation Tools",image:"zw/logo/320x320.png",description:"Multi-word history searcher, `n-cd` \u2013 directory bookmark manager, `n-kill` \u2013\xa0`htop` like kill utility, and more.",keywords:["zsh-navigation-tools","zsh-plugin"]},sidebar:"autoSideBar_1",previous:{title:"\u2699\ufe0f Command Architect",permalink:"/ja/docs/ecosystem/plugins/zca"},next:{title:"\u2699\ufe0f Unique ID",permalink:"/ja/docs/ecosystem/plugins/zsh-unique-id"}},d={},m=[{value:"Zsh Navigation Tools",id:"zsh-navigation-tools",level:2},{value:"Install ZNT",id:"install-znt",level:3},{value:"With ZI",id:"with-zi",level:4},{value:"Installation With Zgen",id:"installation-with-zgen",level:4},{value:"Installation With Antigen",id:"installation-with-antigen",level:4},{value:"Single File Manual Installation",id:"single-file-manual-installation",level:4},{value:"Manual Installation",id:"manual-installation",level:4},{value:"Truly Manual Installation",id:"truly-manual-installation",level:3},{value:"History Widget",id:"history-widget",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Programming",id:"programming",level:3},{value:"Performance",id:"performance",level:3},{value:"Fixing tmux, screen and linux vt",id:"fixing-tmux-screen-and-linux-vt",level:3}],c={toc:m};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/z-shell/zsh-navigation-tools"},"z-shell/zsh-navigation-tools"))),(0,l.kt)("h2",{id:"zsh-navigation-tools"},"Zsh Navigation Tools"),(0,l.kt)("p",null,"The available tools"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n-aliases")," - browses aliases, relegates editing to ",(0,l.kt)("inlineCode",{parentName:"li"},"vared")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n-cd")," - browses dirstack and bookmarked directories, allows to enter selected directory"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n-functions")," - browses functions, relegates editing to ",(0,l.kt)("inlineCode",{parentName:"li"},"zed")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"vared")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n-history")," - browses history, allows to edit and run commands from it"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n-kill")," - browses processes list, allows to send signal to selected process"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n-env")," - browses environment, relegates editing to ",(0,l.kt)("inlineCode",{parentName:"li"},"vared")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n-options")," - browses options, allows to toggle their state"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n-panelize")," - loads output of given command into the list for browsing")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"All tools support horizontal scroll with ",(0,l.kt)("inlineCode",{parentName:"p"},"<"),",",(0,l.kt)("inlineCode",{parentName:"p"},">"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"{"),",",(0,l.kt)("inlineCode",{parentName:"p"},"}"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"h"),",",(0,l.kt)("inlineCode",{parentName:"p"},"l")," or left and right cursors. Other keys are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"H"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"?")," (from n-history) - run n-help"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl-R")," - start n-history, the incremental, multi-keyword history searcher (Zsh binding)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl-A")," - rotate entered words (1+2+3 -> 3+1+2)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl-F")," - fix mode (approximate matching)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl-L")," - redraw of whole display"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl-T")," - browse themes (next theme)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl-G")," - browse themes (previous theme)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl-U")," - half page up"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl-D")," - half page down"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl-P")," - previous element (also done with vim's k)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl-N")," - next element (also done with vim's j)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"["),", ",(0,l.kt)("inlineCode",{parentName:"li"},"]")," - jump directory bookmarks in n-cd and typical signals in n-kill"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"g"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"G")," - beginning and end of the list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/")," - show incremental search"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"F3")," - show/hide incremental search"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Esc")," - exit incremental search, clearing filter"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl-W")," (in incremental search) - delete whole word"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl-K")," (in incremental search) - delete whole line"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl-O"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"o")," - enter uniq mode (no duplicate lines)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl-E"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"e")," - edit private history (when in private history view)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"F1")," - (in n-history) - switch view"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"F2"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl-X"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl-/")," - search predefined keywords (defined in config files)")),(0,l.kt)("p",null,"Set of tools like ",(0,l.kt)("inlineCode",{parentName:"p"},"n-history")," \u2013\xa0multi-word history searcher, ",(0,l.kt)("inlineCode",{parentName:"p"},"n-cd")," \u2013 directory bookmark manager, ",(0,l.kt)("inlineCode",{parentName:"p"},"n-kill")," \u2013\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"htop")," like\nkill utility, and more."),(0,l.kt)("p",null,"Based on ",(0,l.kt)("inlineCode",{parentName:"p"},"n-list"),", a tool generating selectable curses-based list of elements that has access to current ",(0,l.kt)("inlineCode",{parentName:"p"},"Zsh")," session,\ni.e. has broad capabilities to work together with it."),(0,l.kt)("p",null,"Feature highlights include incremental multi-word searching, approximate matching, ANSI coloring, themes, unique mode,\nhorizontal scroll, grepping, advanced history management and various integrations with ",(0,l.kt)("inlineCode",{parentName:"p"},"Zsh"),"."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"install-znt"},"Install ZNT"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'sh -c "$(curl -fsSL https://raw.githubusercontent.com/z-shell/zsh-navigation-tools/main/doc/install.sh)"\n')),(0,l.kt)("p",null,"To update run the command again."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ZNT")," will be installed at ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.config/znt/zsh-navigation-tools"),", config files will be copied to ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.config/znt"),".\n",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc")," will be updated with only ",(0,l.kt)("inlineCode",{parentName:"p"},"8")," lines of code, which will be added at the bottom."),(0,l.kt)("p",null,"After installing and reloading shell give ",(0,l.kt)("inlineCode",{parentName:"p"},"ZNT")," a quick try with ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-R")," \u2013 this keyboard shortcut will open\n",(0,l.kt)("inlineCode",{parentName:"p"},"n-history"),"."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"with-zi"},"With ",(0,l.kt)("a",{parentName:"h4",href:"https://github.com/z-shell/zi"},"ZI")),(0,l.kt)("p",null,"Add ",(0,l.kt)("inlineCode",{parentName:"p"},"zi load z-shell/zsh-navigation-tools")," to ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc"),". The config files will be in ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.config/znt"),"."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"installation-with-zgen"},"Installation With Zgen"),(0,l.kt)("p",null,"Add ",(0,l.kt)("inlineCode",{parentName:"p"},"zgen load z-shell/zsh-navigation-tools")," to ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc")," and issue a ",(0,l.kt)("inlineCode",{parentName:"p"},"zgen reset")," (this assumes that there is a proper\n",(0,l.kt)("inlineCode",{parentName:"p"},"zgen save")," construct in ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc"),")."),(0,l.kt)("p",null,"The config files will be available in ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.config/znt"),"."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"installation-with-antigen"},"Installation With Antigen"),(0,l.kt)("p",null,"Add ",(0,l.kt)("inlineCode",{parentName:"p"},"antigen bundle z-shell/zsh-navigation-tools")," to ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc"),". There also should be ",(0,l.kt)("inlineCode",{parentName:"p"},"antigen apply"),"."),(0,l.kt)("p",null,"The config files will be in ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.config/znt"),"."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"single-file-manual-installation"},"Single File Manual Installation"),(0,l.kt)("p",null,"Running script ",(0,l.kt)("inlineCode",{parentName:"p"},"doc/generate_single_file")," will create single-file version of ",(0,l.kt)("inlineCode",{parentName:"p"},"ZNT"),". It can be sourced from ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc"),"."),(0,l.kt)("p",null,"Don't forget about configuration files as described above."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"manual-installation"},"Manual Installation"),(0,l.kt)("p",null,"After extracting ",(0,l.kt)("inlineCode",{parentName:"p"},"ZNT")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"{some-directory}")," add following two lines to ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.zshrc"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'fpath+=( {some-directory} )\nsource "{some-directory}/zsh-navigation-tools.plugin.zsh"\n')),(0,l.kt)("p",null,"As you can see, no plugin manager is needed to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"*.plugin.zsh")," file."),(0,l.kt)("p",null,"The above two lines of code are all that almost ",(0,l.kt)("strong",{parentName:"p"},"all")," plugin managers do. In fact, what's actually needed is only:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'source "{some-directory}/zsh-navigation-tools.plugin.zsh"\n')),(0,l.kt)("p",null,"because ",(0,l.kt)("inlineCode",{parentName:"p"},"ZNT")," detects if it is used by ",(0,l.kt)("strong",{parentName:"p"},"any")," plugin manager and can handle ",(0,l.kt)("inlineCode",{parentName:"p"},"$fpath")," update by itself."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"truly-manual-installation"},"Truly Manual Installation"),(0,l.kt)("p",null,"Copy (or link) all ",(0,l.kt)("inlineCode",{parentName:"p"},"n-*")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"znt-*")," files to ",(0,l.kt)("strong",{parentName:"p"},"/usr/share/zsh/site-functions/")," (or\n",(0,l.kt)("strong",{parentName:"p"},"/usr/local/share/zsh/site-functions/"),", check with ",(0,l.kt)("inlineCode",{parentName:"p"},"echo $fpath[1]"),") and then add:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"autoload n-list n-cd n-env n-kill n-panelize n-options n-aliases n-functions n-history n-help")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.zshrc"),"."),(0,l.kt)("p",null,'Create aliases to avoid typing of the minus sign "-":'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"alias naliases=n-aliases ncd=n-cd nenv=n-env nfunctions=n-functions nhistory=n-history\nalias nkill=n-kill noptions=n-options npanelize=n-panelize nhelp=n-help\n")),(0,l.kt)("p",null,"Don't forget to copy ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/z-shell/zsh-navigation-tools/tree/main/.config/znt"},"configuration files"),"."),(0,l.kt)("p",null,"They should go to ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.config/znt"),". Moreover, ",(0,l.kt)("inlineCode",{parentName:"p"},"n-cd")," works together with option ",(0,l.kt)("inlineCode",{parentName:"p"},"AUTO_PUSHD")," and you should have:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"setopt AUTO_PUSHD\n")),(0,l.kt)("p",null,"in ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc")," (also recommend ",(0,l.kt)("inlineCode",{parentName:"p"},"PUSHD_IGNORE_DUPS"),"). Without the option ",(0,l.kt)("inlineCode",{parentName:"p"},"n-cd")," will just work as incremental searcher of\ndirectory bookmarks."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"history-widget"},"History Widget"),(0,l.kt)("p",null,"To have ",(0,l.kt)("inlineCode",{parentName:"p"},"n-history")," as the incremental searcher bound to ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-R")," copy ",(0,l.kt)("inlineCode",{parentName:"p"},"znt-*")," files into the ",(0,l.kt)("inlineCode",{parentName:"p"},"*/site-functions")," dir\n(unless you do single file install) and add:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'autoload znt-history-widget\nzle -N znt-history-widget\nbindkey "^R" znt-history-widget\n')),(0,l.kt)("p",null,"to ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc"),". This is done automatically when using the installer, zgen, antigen or single file install. Two other\nwidgets exist, ",(0,l.kt)("inlineCode",{parentName:"p"},"znt-cd-widget")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"znt-kill-widget"),", they too can be assigned to key combinations (",(0,l.kt)("inlineCode",{parentName:"p"},"autoload")," is done\nin ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc")," so no need of it):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'zle -N znt-cd-widget\nbindkey "^B" znt-cd-widget\nzle -N znt-kill-widget\nbindkey "^Y" znt-kill-widget\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ZNT")," has configuration files located in ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.config/znt"),". The files are:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"n - aliases.conf;\nn - cd.conf;\nn - env.conf;\nn - functions.conf;\nn - history.conf;\nn - kill.conf;\nn - list.conf;\nn - options.conf;\nn - panelize.conf;\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"n-list.conf")," contains main configuration variables:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# Should the list (text, borders) be drawn in bold\nlocal bold=0\n\n# Main color pair (foreground/background)\nlocal colorpair="white/black"\n\n# Should draw the border?\nlocal border=1\n\n# Combinations of colors to try out with Ctrl-T and Ctrl-G\n# The last number is the bold option, 0 or 1\nlocal -a themes\nthemes=( "white/black/1" "green/black/0" "green/black/1" "white/blue/0" "white/blue/1"\n         "magenta/black/0" "magenta/black/1" )\n')),(0,l.kt)("p",null,"Read remaining configuration files to see what's in them. Nevertheless, configuration can be also set from ",(0,l.kt)("inlineCode",{parentName:"p"},"zshrc"),"."),(0,l.kt)("p",null,"There are ",(0,l.kt)("inlineCode",{parentName:"p"},"5")," standard ",(0,l.kt)("inlineCode",{parentName:"p"},"zshrc")," configuration variables:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'znt_history_active_text - underline or reverse - how should be active element highlighted\nznt_history_nlist_coloring_pattern - pattern that can be used to colorize elements\nznt_history_nlist_coloring_color - color with which to colorize\nznt_history_nlist_coloring_match_multiple - should multiple matches be colorized (0 or 1)\nznt_history_keywords (array) - search keywords activated with `Ctrl-X`, `F2` or `Ctrl-/`, e.g. ( "git" "vim" )\n')),(0,l.kt)("p",null,"Above variables will work for ",(0,l.kt)("inlineCode",{parentName:"p"},"n-history")," tool. For other tools, change ",(0,l.kt)("inlineCode",{parentName:"p"},"_history_")," to e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"_cd_"),", for the ",(0,l.kt)("inlineCode",{parentName:"p"},"n-cd")," tool."),(0,l.kt)("p",null,"The same works for all ",(0,l.kt)("inlineCode",{parentName:"p"},"8")," tools."),(0,l.kt)("p",null,"Common configuration of the tools uses variables with ",(0,l.kt)("inlineCode",{parentName:"p"},"_list_")," in them:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'znt_list_bold - should draw text in bold (0 or 1)\nznt_list_colorpair - main pair of colors to be used, e.g "green/black"\nznt_list_border - should draw borders around windows (0 or 1)\nznt_list_themes (array) - list of themes to try out with Ctrl-T, e.g. ( "white/black/1" "green/black/0" )\nznt_list_instant_select - should pressing enter in search mode leave tool (0 or 1)\n')),(0,l.kt)("p",null,"If you used ",(0,l.kt)("inlineCode",{parentName:"p"},"ZNT")," before ",(0,l.kt)("inlineCode",{parentName:"p"},"v2.1.12"),", remove old configuration files ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.config/znt/*.conf")," so that ",(0,l.kt)("inlineCode",{parentName:"p"},"ZNT")," can update them\nto the latest versions that support integration with ",(0,l.kt)("inlineCode",{parentName:"p"},"Zshrc"),"."),(0,l.kt)("p",null,"If you used installer then run it again (after the remove of configuration files)."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"programming"},"Programming"),(0,l.kt)("p",null,"The function ",(0,l.kt)("inlineCode",{parentName:"p"},"n-list")," is used as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"n-list {element1} [element2] ... [elementN]\n")),(0,l.kt)("p",null,"This is all that is needed to be done to have the features like ANSI coloring, incremental multi-word search, unique\nmode, horizontal scroll, non-selectable elements (grepping is done outside ",(0,l.kt)("inlineCode",{parentName:"p"},"n-list"),", see the tools for how it can be\ndone)."),(0,l.kt)("p",null,"To set up non-selectable entries add their indices into array ",(0,l.kt)("inlineCode",{parentName:"p"},"NLIST_NONSELECTABLE_ELEMENTS"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"typeset -a NLIST_NONSELECTABLE_ELEMENTS\nNLIST_NONSELECTABLE_ELEMENTS=( 1 )\n")),(0,l.kt)("p",null,"Result is stored as ",(0,l.kt)("inlineCode",{parentName:"p"},"$reply[REPLY]")," (",(0,l.kt)("inlineCode",{parentName:"p"},"$")," isn't needed before ",(0,l.kt)("inlineCode",{parentName:"p"},"REPLY")," because of arithmetic context inside ",(0,l.kt)("inlineCode",{parentName:"p"},"[]"),")."),(0,l.kt)("p",null,"The returned array might be different from input arguments as ",(0,l.kt)("inlineCode",{parentName:"p"},"n-list")," can process them via incremental search or uniq\nmode."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"$REPLY")," is the index in that possibly processed array. If ",(0,l.kt)("inlineCode",{parentName:"p"},"$REPLY")," equals ",(0,l.kt)("inlineCode",{parentName:"p"},"-1")," it means that no selection have been\nmade (user quitted via ",(0,l.kt)("inlineCode",{parentName:"p"},"q")," key)."),(0,l.kt)("p",null,"To set up entries that can be jumped to with ",(0,l.kt)("inlineCode",{parentName:"p"},"["),",",(0,l.kt)("inlineCode",{parentName:"p"},"]")," keys add their indices to ",(0,l.kt)("inlineCode",{parentName:"p"},"NLIST_HOP_INDEXES")," array:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"typeset -a NLIST_HOP_INDEXES\nNLIST_HOP_INDEXES=( 1 10 )\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"n-list")," can automatically colorize entries according to a ",(0,l.kt)("inlineCode",{parentName:"p"},"Zsh")," pattern. Following example will colorize all numbers\nwith blue:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'local NLIST_COLORING_PATTERN="[0-9]##"\nlocal NLIST_COLORING_COLOR=$\'\\x1b[00;34m\'\nlocal NLIST_COLORING_END_COLOR=$\'\\x1b[0m\'\nlocal NLIST_COLORING_MATCH_MULTIPLE=1\n\nn-list "This is a number 123" "This line too has a number: 456"\n')),(0,l.kt)("p",null,"Blue is the default color, it doesn't have to be set. See ",(0,l.kt)("inlineCode",{parentName:"p"},"zshexpn")," man page for more information on ",(0,l.kt)("inlineCode",{parentName:"p"},"Zsh")," patterns."),(0,l.kt)("p",null,"Briefly, comparing to regular expressions, ",(0,l.kt)("inlineCode",{parentName:"p"},"(#s)")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"^"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"(#e)")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"$"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"#")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"##")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"+"),"."),(0,l.kt)("p",null,"Alternative will work when in parenthesis, i.e. ",(0,l.kt)("inlineCode",{parentName:"p"},"(a|b)"),". BTW by using this method you can colorize output of the tools,\nvia their config files (check out e.g. n-cd.conf, it is using this)."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"performance"},"Performance"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ZNT")," are fastest with ",(0,l.kt)("inlineCode",{parentName:"p"},"Zsh")," before ",(0,l.kt)("inlineCode",{parentName:"p"},"5.0.6")," and starting from ",(0,l.kt)("inlineCode",{parentName:"p"},"5.2")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},'Zsh plugins may look scary, as they seem to have some "architecture". In fact, what a plugin really is, is that:'),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"It has its directory added to ",(0,l.kt)("inlineCode",{parentName:"li"},"fpath")),(0,l.kt)("li",{parentName:"ol"},"It has any first ",(0,l.kt)("inlineCode",{parentName:"li"},"*.plugin.zsh")," file sourced")),(0,l.kt)("p",{parentName:"div"},"That's it. When one contributes to Oh-My-Zsh or creates a plugin for any plugin manager, he only needs to account for\nthis."),(0,l.kt)("p",{parentName:"div"},"The same with doing any non-typical Zsh Navigation Tools installation."))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Be aware of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/z-shell/zsh-navigation-tools/blob/f49f910d239ae5bc6e1a5bb34930307b4f4e3ffe/zsh-navigation-tools.plugin.zsh#L35-L49"},"this")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"fixing-tmux-screen-and-linux-vt"},"Fixing tmux, screen and linux vt"),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"TERM=screen-256color")," (often a case for ",(0,l.kt)("inlineCode",{parentName:"p"},"tmux")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"screen")," sessions) then ",(0,l.kt)("inlineCode",{parentName:"p"},"ncv")," terminfo capability will have ",(0,l.kt)("inlineCode",{parentName:"p"},"2"),"nd\nbit set."),(0,l.kt)("p",null,"This in general means that underline won't work. To fix this by creating your own ",(0,l.kt)("inlineCode",{parentName:"p"},"ncv=0"),"-equipped terminfo file, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"{ infocmp -x screen-256color; printf '\\t%s\\n' 'ncv@,'; } > /tmp/t && tic -x /tmp/t\n")),(0,l.kt)("p",null,"A file will be created in directory ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.terminfo")," and will be automatically used, ",(0,l.kt)("inlineCode",{parentName:"p"},"tmux")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"screen")," will work. Similar\nis for Linux virtual terminal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"{ infocmp -x linux; printf '\\t%s\\n' 'ncv@,'; } > /tmp/t && tic -x /tmp/t\n")),(0,l.kt)("p",null,"It will not display underline properly, but will instead highlight by a color, which is quite nice."),(0,l.kt)("p",null,"The same will not work for FreeBSD's vt, ",(0,l.kt)("inlineCode",{parentName:"p"},"ZNT")," will detect if that vt is used and will revert to highlighting elements\nvia ",(0,l.kt)("inlineCode",{parentName:"p"},"reverse")," mode."))}u.isMDXComponent=!0}}]);