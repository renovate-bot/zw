"use strict";(self.webpackChunkzw=self.webpackChunkzw||[]).push([[8132],{9613:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return h}});var a=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(t),h=i,u=c["".concat(d,".").concat(h)]||c[h]||m[h]||l;return t?a.createElement(u,r(r({ref:n},s),{},{components:t})):a.createElement(u,r({ref:n},s))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=c;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3747:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(9496),i="apiTable_e8hp",l=t(1226);var r=(0,a.forwardRef)((function(e,n){var t=e.name,i=e.children,r=function(e){for(var n=e;(0,a.isValidElement)(n);)n=a.Children.toArray(n.props.children)[0];return n}(i),o=t?t+"-"+r:r,d="#"+o,p=(0,l.k6)();return a.createElement("tr",{id:o,tabIndex:0,ref:p.location.hash===d?n:void 0,onClick:function(){p.push(d)},onKeyDown:function(e){"Enter"===e.key&&p.push(d)}},i.props.children)}));function o(e){var n=e.children,t=e.name,l=a.Children.toArray(n.props.children),o=l[0],d=l[1],p=(0,a.useRef)(null);(0,a.useEffect)((function(){var e;null==(e=p.current)||e.focus()}),[p]);var s=a.Children.map(d.props.children,(function(e){return a.createElement(r,{name:t,ref:p},e)}));return a.createElement("table",{className:i},o,a.createElement("tbody",null,s))}},7851:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return c}});var a=t(2182),i=t(9028),l=(t(9496),t(9613)),r=t(3747),o=["components"],d={id:"bin-gem-node",title:"\ud83d\udca0 Bin Gem Node",image:"zw/logo/320x320.png",description:"Annex - Bin Gem Node documentation",keywords:["annex","bin-gem-node"]},p=void 0,s={unversionedId:"ecosystem/annexes/bin-gem-node",id:"ecosystem/annexes/bin-gem-node",title:"\ud83d\udca0 Bin Gem Node",description:"Annex - Bin Gem Node documentation",source:"@site/docs/ecosystem/annexes/01_1_bin_gem_node.md",sourceDirName:"ecosystem/annexes",slug:"/ecosystem/annexes/bin-gem-node",permalink:"/ru/docs/ecosystem/annexes/bin-gem-node",editUrl:"https://digitalclouds.crowdin.com/z-shell/ru",tags:[],version:"current",lastUpdatedBy:"Salvydas Lukosius",lastUpdatedAt:1647243319,formattedLastUpdatedAt:"14.03.2022",frontMatter:{id:"bin-gem-node",title:"\ud83d\udca0 Bin Gem Node",image:"zw/logo/320x320.png",description:"Annex - Bin Gem Node documentation",keywords:["annex","bin-gem-node"]},sidebar:"autoSideBar_1",previous:{title:"\ud83d\udca0 Quick overview",permalink:"/ru/docs/ecosystem/annexes"},next:{title:"\ud83d\udca0 Meta Plugins",permalink:"/ru/docs/ecosystem/annexes/meta-plugins"}},m={},c=[{value:"Install bin-gem-node",id:"install-bin-gem-node",level:2},{value:"How it works \u2013 bird&#39;s-eye view",id:"how-it-works--birds-eye-view",level:3},{value:"How it works",id:"how-it-works",level:3},{value:"The Ice Modifiers Provided By The Annex",id:"the-ice-modifiers-provided-by-the-annex",level:2},{value:"The Ice Modifiers by the Annex",id:"the-ice-modifiers-by-the-annex",level:3},{value:"<code>SBIN&#39;&#39;</code>",id:"sbin",level:4},{value:"<code>FBIN&#39;&#39;</code>",id:"fbin",level:4},{value:"<code>GEM&#39;&#39;</code>",id:"gem",level:4},{value:"<code>NODE&#39;&#39;</code>",id:"node",level:4},{value:"<code>PIP&#39;&#39;</code>",id:"pip",level:4},{value:"<code>FMOD&#39;&#39;</code>",id:"fmod",level:4},{value:"<code>FSCR&#39;&#39;</code>",id:"fscr",level:4},{value:"<code>FERC&#39;&#39;</code>",id:"ferc",level:4},{value:"Additional ZI commands",id:"additional-zi-commands",level:2},{value:"Cygwin Support",id:"cygwin-support",level:2}],h={toc:c};function u(e){var n=e.components,t=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/z-shell/z-a-bin-gem-node"},"z-shell/z-a-bin-gem-node")," annex provides functionality, which allows to:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Run programs and scripts without adding anything to ",(0,l.kt)("inlineCode",{parentName:"li"},"$PATH"),","),(0,l.kt)("li",{parentName:"ol"},"Install and run Ruby ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rubygems/rubygems"},"Gems"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/npm/cli"},"Node"),", and\n",(0,l.kt)("a",{parentName:"li",href:"https://python.org"},"Python")," modules from within a local directory with\n",(0,l.kt)("a",{parentName:"li",href:"https://guides.rubygems.org/command-reference/#gem-environment"},"$GEM_HOME"),",\n",(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders"},"$NODE_PATH"),", and\n",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/tutorial/venv.html"},"$VIRTUALENV")," automatically set,"),(0,l.kt)("li",{parentName:"ol"},"Run programs, scripts, and functions with automatic ",(0,l.kt)("inlineCode",{parentName:"li"},"cd")," into the plugin or snippet directory, plus also with\nautomatic standard output & standard error redirecting."),(0,l.kt)("li",{parentName:"ol"},"Source scripts through an automatically created function with the above ",(0,l.kt)("inlineCode",{parentName:"li"},"$GEM_HOME"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"$NODE_PATH"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"$VIRTUALENV"),", and\n",(0,l.kt)("inlineCode",{parentName:"li"},"cd")," features available,"),(0,l.kt)("li",{parentName:"ol"},"Create the so-called ",(0,l.kt)("inlineCode",{parentName:"li"},"shims")," known from ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rbenv/rbenv"},"rbenv")," \u2013 the same feature as the first item\nof this enumeration \u2013 of running a program without adding anything to ",(0,l.kt)("inlineCode",{parentName:"li"},"$PATH")," with all of the above features, however\nthrough an automatic ",(0,l.kt)("strong",{parentName:"li"},"script")," created in ",(0,l.kt)("inlineCode",{parentName:"li"},"$ZPFX/bin"),", not a ",(0,l.kt)("strong",{parentName:"li"},"function")," (the first item uses a function-based\nmechanism),"),(0,l.kt)("li",{parentName:"ol"},"Automatic updates of Ruby gems and Node modules during regular plugin and snippet updates with ",(0,l.kt)("inlineCode",{parentName:"li"},"zi update \u2026"),".")),(0,l.kt)("h2",{id:"install-bin-gem-node"},"Install bin-gem-node"),(0,l.kt)("p",null,"Simply load like a regular plugin, i.e.:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"zi light z-shell/z-a-bin-gem-node\n")),(0,l.kt)("p",null,"After executing this command you can then use the dl'' and patch'' ice-mods."),(0,l.kt)("h3",{id:"how-it-works--birds-eye-view"},"How it works \u2013 bird's-eye view"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"sbin''")," ice that creates forwarder-scripts instead of forwarder-functions (created by the ",(0,l.kt)("inlineCode",{parentName:"p"},"fbin''")," ice and\nelaborated in this ",(0,l.kt)("inlineCode",{parentName:"p"},"How it works \u2026")," section) turned out to be the proper, best method for exposing binary programs and\nscripts. You can jump to the ",(0,l.kt)("inlineCode",{parentName:"p"},"sbin''")," ice ",(0,l.kt)("a",{parentName:"p",href:"#5-sbingncneopath-to-binary---name-of-the-script-"},"section")," if you want."),(0,l.kt)("p",null,"This way there is no need to add anything to ",(0,l.kt)("inlineCode",{parentName:"p"},"$PATH")," \u2013 ",(0,l.kt)("inlineCode",{parentName:"p"},"z-a-bin-gem-node")," will automatically create a function that will\nwrap the binary and provide it on the command line like if it was being placed in the ",(0,l.kt)("inlineCode",{parentName:"p"},"$PATH"),"."),(0,l.kt)("p",null,"Also, like mentioned in the enumeration, the function can automatically export ",(0,l.kt)("inlineCode",{parentName:"p"},"$GEM_HOME"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"$NODE_PATH"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"$VIRTUALENV"),"\nshell variables and also automatically cd into the plugin or snippet directory right before executing the binary and\nthen cd back to the original directory after the execution is finished."),(0,l.kt)("p",null,"Also, like already mentioned, instead of the function an automatically created script \u2013 so called ",(0,l.kt)("inlineCode",{parentName:"p"},"shim")," \u2013 can be used\nfor the same purpose and with the same functionality, so that the command is being accessible practically fully normally\n\u2013 not only in the live Zsh session (only within which the functions created by ",(0,l.kt)("inlineCode",{parentName:"p"},"fbin''")," exist), but also from any Zsh\nscript."),(0,l.kt)("h3",{id:"how-it-works"},"How it works"),(0,l.kt)("p",null,"Suppose that you would want to install ",(0,l.kt)("inlineCode",{parentName:"p"},"junegunn/fzf")," plugin from GitHub Releases, which contains only single file \u2013 the\n",(0,l.kt)("inlineCode",{parentName:"p"},"fzf")," binary for the selected architecture. It is possible to do it in the standard way \u2013 by adding the plugin's\ndirectory to the ",(0,l.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'zi ice as"command" from"gh-r"\nzi load junegunn/fzf\n')),(0,l.kt)("p",null,"After this command, the ",(0,l.kt)("inlineCode",{parentName:"p"},"$PATH")," variable will contain e.g.:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"% print $PATH\n/home/sg/.zi/plugins/junegunn---fzf:/bin:/usr/bin:/usr/sbin:/sbin\n")),(0,l.kt)("p",null,"For many such programs loaded as plugins the PATH can become quite cluttered. I've had 26 entries before switching to\n",(0,l.kt)("inlineCode",{parentName:"p"},"z-a-bin-gem-node"),". To solve this, load with use of ",(0,l.kt)("inlineCode",{parentName:"p"},"sbin''")," ice provided and handled by ",(0,l.kt)("inlineCode",{parentName:"p"},"z-a-bin-gem-node"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'zi ice from"gh-r" sbin"fzf"\nzi load junegunn/fzf\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"$PATH")," will remain unchanged and a ",(0,l.kt)("inlineCode",{parentName:"p"},"fzf")," forwarder-script, so called ",(0,l.kt)("em",{parentName:"p"},"shim")," will be created in ",(0,l.kt)("inlineCode",{parentName:"p"},"$ZPFX/bin"),"\n(",(0,l.kt)("inlineCode",{parentName:"p"},"~/.zi/polaris/bin")," by default), which is being already added to the ",(0,l.kt)("inlineCode",{parentName:"p"},"$PATH")," by ZI when it is being sourced:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'% cat $ZPFX/bin/fzf\n#!/usr/bin/env zsh\n\nfunction fzf {\n    local bindir="/home/sg/.zi/plugins/junegunn---fzf"\n    "$bindir"/"fzf" "$@"\n}\n\nfzf "$@"\n')),(0,l.kt)("p",null,"Running the script will forward the call to the program accessed through an embedded path to it. Thus, no ",(0,l.kt)("inlineCode",{parentName:"p"},"$PATH"),"\nchanges are needed!"),(0,l.kt)("h2",{id:"the-ice-modifiers-provided-by-the-annex"},"The Ice Modifiers Provided By The Annex"),(0,l.kt)("p",null,"There are 7 ice modifiers provided and handled by the annex:"),(0,l.kt)(r.Z,{mdxType:"APITable"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Ice modifier"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#sbin"},(0,l.kt)("inlineCode",{parentName:"a"},"sbin''"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Creates ",(0,l.kt)("inlineCode",{parentName:"td"},"shims")," for binaries and scripts.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#fbin"},(0,l.kt)("inlineCode",{parentName:"a"},"fbin''"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Creates functions for binaries and scripts.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#gem"},(0,l.kt)("inlineCode",{parentName:"a"},"gem''"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Installs and updates gems + creates functions for gems' binaries.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#node"},(0,l.kt)("inlineCode",{parentName:"a"},"node''"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Installs and updates node_modules + creates functions for binaries of the modules.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#pip"},(0,l.kt)("inlineCode",{parentName:"a"},"pip''"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Installs and updates python packages into a virtualenv + creates functions for binaries of the packages.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#fmod"},(0,l.kt)("inlineCode",{parentName:"a"},"fmod''"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Creates wrapping functions for other functions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#fsrc"},(0,l.kt)("inlineCode",{parentName:"a"},"fsrc''"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Creates functions that source given scripts.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#ferc"},(0,l.kt)("inlineCode",{parentName:"a"},"ferc''"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The same as ",(0,l.kt)("a",{parentName:"td",href:"#fscr"},(0,l.kt)("inlineCode",{parentName:"a"},"fsrc''")),", but using an alternate script-loading method."))))),(0,l.kt)("h3",{id:"the-ice-modifiers-by-the-annex"},"The Ice Modifiers by the Annex"),(0,l.kt)("h4",{id:"sbin"},(0,l.kt)("inlineCode",{parentName:"h4"},"SBIN''")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sbin'[{g|n|c|N|E|O}:]{path-to-binary}[ -> {name-of-the-script}]; \u2026'")),(0,l.kt)("p",null,"It creates the so called ",(0,l.kt)("inlineCode",{parentName:"p"},"shim")," known from ",(0,l.kt)("inlineCode",{parentName:"p"},"rbenv")," \u2013 a wrapper script that forwards the call to the actual binary."),(0,l.kt)("p",null,"The script is created always under the same, standard and single ",(0,l.kt)("inlineCode",{parentName:"p"},"$PATH")," entry: ",(0,l.kt)("inlineCode",{parentName:"p"},"$ZPFX/bin")," (which is\n",(0,l.kt)("inlineCode",{parentName:"p"},"~/.zi/polaris/bin")," by default)."),(0,l.kt)("p",null,"The flags have the same meaning as with ",(0,l.kt)("inlineCode",{parentName:"p"},"fbin''")," ice."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'% zi delete junegunn/fzf\nDelete /home/sg/.zi/plugins/junegunn---fzf?\n[yY/n\u2026]\ny\nDone (action executed, exit code: 0)\n% zi ice from"gh-r" sbin"fzf"\n% zi load junegunn/fzf\n\u2026installation messages\u2026\n% cat $ZPFX/bin/fzf\n#!/usr/bin/env zsh\n\nfunction fzf {\n    local bindir="/home/sg/.zi/plugins/junegunn---fzf"\n    "$bindir"/"fzf" "$@"\n}\n\nfzf "$@"\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The ice can be empty"),". It will then try to create the shim for:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"trailing component of the ",(0,l.kt)("inlineCode",{parentName:"li"},"id_as")," ice, e.g.: ",(0,l.kt)("inlineCode",{parentName:"li"},"id_as'exts/git-my'")," \u2192 it'll check if a file ",(0,l.kt)("inlineCode",{parentName:"li"},"git-my")," exists and if yes,\ncreate the shim ",(0,l.kt)("inlineCode",{parentName:"li"},"git-my"),","),(0,l.kt)("li",{parentName:"ul"},"the plugin name, e.g.: for ",(0,l.kt)("inlineCode",{parentName:"li"},"paulirish/git-open")," it'll check if a file ",(0,l.kt)("inlineCode",{parentName:"li"},"git-open")," exists and if yes, create the shim\n",(0,l.kt)("inlineCode",{parentName:"li"},"git-open"),","),(0,l.kt)("li",{parentName:"ul"},"trailing component of the snippet URL,"),(0,l.kt)("li",{parentName:"ul"},"for any alphabetically first executable file.")),(0,l.kt)("h4",{id:"fbin"},(0,l.kt)("inlineCode",{parentName:"h4"},"FBIN''")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fbin'[{g|n|c|N|E|O}:]{path-to-binary}[ -> {name-of-the-function}]; \u2026'")),(0,l.kt)("p",null,"Creates a wrapper function of the name the same as the last segment of the path or as ",(0,l.kt)("inlineCode",{parentName:"p"},"{name-of-the-function}"),"."),(0,l.kt)(r.Z,{mdxType:"APITable"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Flag"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"g")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set ",(0,l.kt)("inlineCode",{parentName:"td"},"$GEM_HOME")," variable to ",(0,l.kt)("inlineCode",{parentName:"td"},"{plugin-dir}"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"n")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set ",(0,l.kt)("inlineCode",{parentName:"td"},"$NODE_PATH")," variable to ",(0,l.kt)("inlineCode",{parentName:"td"},"{plugin-dir}/node_modules"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"p")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set ",(0,l.kt)("inlineCode",{parentName:"td"},"$VIRTUALENV")," variable to ",(0,l.kt)("inlineCode",{parentName:"td"},"{plugin-dir}/venv"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"c")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"cd")," to the plugin's directory before running the program and then cd back after it has been run.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"N")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Append ",(0,l.kt)("inlineCode",{parentName:"td"},"&>/dev/null")," to the call of the binary, i.e. redirect both standard output and standard error to ",(0,l.kt)("inlineCode",{parentName:"td"},"/dev/null"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"E")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Append ",(0,l.kt)("inlineCode",{parentName:"td"},"2>/dev/null")," to the call of the binary, i.e. redirect standard error to ",(0,l.kt)("inlineCode",{parentName:"td"},"/dev/null"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"O")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Append ",(0,l.kt)("inlineCode",{parentName:"td"},">/dev/null")," to the call of the binary, i.e. redirect standard output to ",(0,l.kt)("inlineCode",{parentName:"td"},"/dev/null"),"."))))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'% zi ice from"gh-r" fbin"g:fzf -> myfzf"\n% zi load junegunn/fzf\n% which myfzf\nmyfzf () {\n        local bindir="/home/sg/.zi/plugins/junegunn---fzf"\n        local -x GEM_HOME="/home/sg/.zi/plugins/junegunn---fzf"\n        "$bindir"/"fzf" "$@"\n}\n')),(0,l.kt)("p",null,"The ice can be empty. It will then try to create the function for:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"trailing component of the ",(0,l.kt)("inlineCode",{parentName:"li"},"id_as")," ice, e.g.: ",(0,l.kt)("inlineCode",{parentName:"li"},"id_as'exts/git-my'")," \u2192 it'll check if a file ",(0,l.kt)("inlineCode",{parentName:"li"},"git-my")," exists and if yes,\ncreate the function ",(0,l.kt)("inlineCode",{parentName:"li"},"git-my"),","),(0,l.kt)("li",{parentName:"ul"},"the plugin name, e.g.: for ",(0,l.kt)("inlineCode",{parentName:"li"},"paulirish/git-open")," it'll check if a file ",(0,l.kt)("inlineCode",{parentName:"li"},"git-open")," exists and if yes, create the\nfunction ",(0,l.kt)("inlineCode",{parentName:"li"},"git-open"),","),(0,l.kt)("li",{parentName:"ul"},"trailing component of the snippet URL,"),(0,l.kt)("li",{parentName:"ul"},"for any alphabetically first executable file.")),(0,l.kt)("h4",{id:"gem"},(0,l.kt)("inlineCode",{parentName:"h4"},"GEM''")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gem'{gem-name}; \u2026'")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"gem'[{path-to-binary} <-] !{gem-name} [-> {name-of-the-function}]; \u2026'"))),(0,l.kt)("p",null,"Installs the gem of name ",(0,l.kt)("inlineCode",{parentName:"p"},"{gem-name}")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"$GEM_HOME")," set to the plugin's or snippet's directory. In other words, the\ngem and its dependencies will be installed locally in that directory."),(0,l.kt)("p",null,"In the second form it also creates a wrapper function identical to the one created with ",(0,l.kt)("inlineCode",{parentName:"p"},"fbin''")," ice."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'% zi ice gem\'!asciidoctor\'\n% zi load z-shell/null\n% which asciidoctor\nasciidoctor () {\n        local bindir="/home/sg/.zi/plugins/z-shell---null/bin"\n        local -x GEM_HOME="/home/sg/.zi/plugins/z-shell---null"\n        "$bindir"/"asciidoctor" "$@"\n}\n')),(0,l.kt)("h4",{id:"node"},(0,l.kt)("inlineCode",{parentName:"h4"},"NODE''")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"node'{node-module}; \u2026'")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"node'[{path-to-binary} <-] !{node-module} [-> {name-of-the-function}]; \u2026'"))),(0,l.kt)("p",null,"Installs the node module of name ",(0,l.kt)("inlineCode",{parentName:"p"},"{node-module}")," inside the plugin's or snippet's directory."),(0,l.kt)("p",null,"In the second form it also creates a wrapper function identical to the one created with ",(0,l.kt)("inlineCode",{parentName:"p"},"fbin''")," ice."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'% zi delete z-shell/null\nDelete /home/sg/.zi/plugins/z-shell---null?\n[yY/n\u2026]\ny\nDone (action executed, exit code: 0)\n% zi ice node\'remark <- !remark-cli -> remark; remark-man\'\n% zi load z-shell/null\n\u2026installation messages\u2026\n% which remark\nremark () {\n        local bindir="/home/sg/.zi/plugins/z-shell---null/node_modules/.bin"\n        local -x NODE_PATH="/home/sg/.zi/plugins/z-shell---null"/node_modules\n        "$bindir"/"remark" "$@"\n}\n')),(0,l.kt)("p",null,"In this case the name of the binary program provided by the node module is different from its name, hence the second\nform with the ",(0,l.kt)("inlineCode",{parentName:"p"},"b <- a -> c")," syntax has been used."),(0,l.kt)("h4",{id:"pip"},(0,l.kt)("inlineCode",{parentName:"h4"},"PIP''")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pip'{pip-package}; \u2026'")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"node'[{path-to-binary} <-] !{pip-package} [-> {name-of-the-function}]; \u2026'"))),(0,l.kt)("p",null,"Installs the node module of name ",(0,l.kt)("inlineCode",{parentName:"p"},"{pip-package}")," inside the plugin's or snippet's directory."),(0,l.kt)("p",null,"In the second form it also creates a wrapper function identical to the one created with ",(0,l.kt)("inlineCode",{parentName:"p"},"fbin''")," ice."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'% zi delete z-shell/null\nDelete /home/sg/.zi/plugins/z-shell---null?\n[yY/n\u2026]\ny\nDone (action executed, exit code: 0)\n% zi ice node\'ansible <- !ansible -> ansible; ansible-lint\'\n% zi load z-shell/null\n\u2026installation messages\u2026\n% which remark\nansible () {\n        local bindir="/home/sg/.zi/plugins/z-shell---null/venv/bin"\n        local -x VIRTUALENV="/home/sg/.zi/plugins/z-shell---null"/venv\n        "$bindir"/"ansible" "$@"\n}\n')),(0,l.kt)("p",null,"In this case the name of the binary program provided by the node module is different from its name, hence the second\nform with the ",(0,l.kt)("inlineCode",{parentName:"p"},"b <- a -> c")," syntax has been used."),(0,l.kt)("h4",{id:"fmod"},(0,l.kt)("inlineCode",{parentName:"h4"},"FMOD''")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fmod'[{g|n|c|N|E|O}:]{function-name}; \u2026'")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"fmod'[{g|n|c|N|E|O}:]{function-name} -> {wrapping-function-name}; \u2026'"))),(0,l.kt)("p",null,"It wraps given function with the ability to set ",(0,l.kt)("inlineCode",{parentName:"p"},"$GEM_HOME"),", etc. \u2013 the meaning of the ",(0,l.kt)("inlineCode",{parentName:"p"},"g"),",",(0,l.kt)("inlineCode",{parentName:"p"},"n")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"c")," flags is the same\nas in the ",(0,l.kt)("inlineCode",{parentName:"p"},"fbin''")," ice."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'% myfun() { pwd; ls -1 }\n% zi ice fmod\'cgn:myfun\'\n% zi load z-shell/null\n% which myfun\nmyfun () {\n        local -x GEM_HOME="/home/sg/.zi/plugins/z-shell---null"\n        local -x NODE_PATH="/home/sg/.zi/plugins/z-shell---null"/node_modules\n        local oldpwd="/home/sg/.zi/plugins/zi---z-a-bin-gem-node"\n        () {\n                setopt localoptions noautopushd\n                builtin cd -q "/home/sg/.zi/plugins/z-shell---null"\n        }\n        "myfun--za-bgn-orig" "$@"\n        () {\n                setopt localoptions noautopushd\n                builtin cd -q "$oldpwd"\n        }\n}\n% myfun\n/home/sg/.zi/plugins/z-shell---null\nLICENSE\nREADME.md\n')),(0,l.kt)("h4",{id:"fscr"},(0,l.kt)("inlineCode",{parentName:"h4"},"FSCR''")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fsrc'[{g|n|c|N|E|O}:]{path-to-script}[ -> {name-of-the-function}]; \u2026'")),(0,l.kt)("h4",{id:"ferc"},(0,l.kt)("inlineCode",{parentName:"h4"},"FERC''")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ferc'[{g|n|c|N|E|O}:]{path-to-script}[ -> {name-of-the-function}]; \u2026'")),(0,l.kt)("p",null,"Creates a wrapper function that at each invocation sources the given file. The second ice, ",(0,l.kt)("inlineCode",{parentName:"p"},"ferc''")," works the same with\nthe single difference that it uses ",(0,l.kt)("inlineCode",{parentName:"p"},'eval "$(<{path-to-script})"')," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},'source "{path-to-script}"')," to load the\nscript."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'% zi ice fsrc"myscript -> myfunc" ferc"myscript"\n% zi load z-shell/null\n% which myfunc\nmyfunc () {\n        local bindir="/home/sg/.zi/plugins/z-shell---null"\n        () {\n                source "$bindir"/"myscript"\n        } "$@"\n}\n% which myscript\nmyscript () {\n        local bindir="/home/sg/.zi/snippets/OMZ::plugins--git/git.plugin.zsh"\n        () {\n                eval "$(<"$bindir"/"myscript")"\n        } "$@"\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The ices can be empty"),". They will then try to create the function for trailing component of the ",(0,l.kt)("inlineCode",{parentName:"p"},"id-as")," ice and the\nother cases, in the same way as with the ",(0,l.kt)("inlineCode",{parentName:"p"},"fbin")," ice."),(0,l.kt)("h2",{id:"additional-zi-commands"},"Additional ZI commands"),(0,l.kt)("p",null,"There's an additional ZI command that's provided by this annex \u2013",(0,l.kt)("inlineCode",{parentName:"p"},"shim-list"),". It searches for and displays any shims that\nare being currently stored under ",(0,l.kt)("inlineCode",{parentName:"p"},"$ZPFX/bin"),". Example invocation:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/z-shell/z-a-bin-gem-node/raw/7f9ed8918d15bc0b2fad4329bc867b022856f4e5/docs/images/shim-list.png",alt:"shim-list invocation"})),(0,l.kt)("p",null,"Available flags are:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"zi shim-list [-h/--help] [-t|--this-dir] [-i|--from-ices] \\\n      [-o|--one-line] [-s|--short] [-c|--cat]\n")),(0,l.kt)(r.Z,{mdxType:"APITable"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Flag"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"-h")," ",(0,l.kt)("inlineCode",{parentName:"td"},"--help")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Shows a usage information.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"-t")," ",(0,l.kt)("inlineCode",{parentName:"td"},"--this-dir")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Istructs ZI to look for shims in the current directory instead of ",(0,l.kt)("inlineCode",{parentName:"td"},"$ZPFX/bin"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"-i")," ",(0,l.kt)("inlineCode",{parentName:"td"},"--from-ices")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Normally the code looks for the shim files by examining their contents (",(0,l.kt)("strong",{parentName:"td"},"more info below ","[!]"),").")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"-o")," ",(0,l.kt)("inlineCode",{parentName:"td"},"--one-line")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Display the list of shim files without line breaks, in single line, after spaces.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"-s")," ",(0,l.kt)("inlineCode",{parentName:"td"},"--short")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Don't show the plugin/snippet that the shim belongs to.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"-c")," ",(0,l.kt)("inlineCode",{parentName:"td"},"--cat")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Displays contents of each of the found shim (unimplemented yet)."))))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"[!]"," shims created by BGN annex have a fixed structure, this option instructs ZI to show the list of shims that results\nfrom the ",(0,l.kt)("inlineCode",{parentName:"p"},"sbin''")," ice of the loaded plugins. If a plugin has ",(0,l.kt)("inlineCode",{parentName:"p"},"sbin'git-open'"),", for example, then this means that there\nhas to be such shim already created.")),(0,l.kt)("h2",{id:"cygwin-support"},"Cygwin Support"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"sbin''")," ice has an explicit Cygwin support \u2013 it creates additional, ",(0,l.kt)("strong",{parentName:"p"},"extra shim files")," \u2013 Windows batch scripts\nthat allow to run the shielded applications from e.g.: Windows run dialog \u2013 if the ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.zi/polaris/bin")," directory is\nbeing added to the Windows ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable, for example (it is a good idea to do so, IMHO). The Windows\nshims have the same name as the standard ones (which are also being created, normally) plus the ",(0,l.kt)("inlineCode",{parentName:"p"},".cmd")," extension. You\ncan test the feature by e.g.: installing Firefox from the ZI package via:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"zi pack=bgn for firefox\n")))}u.isMDXComponent=!0}}]);