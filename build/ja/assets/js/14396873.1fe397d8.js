"use strict";(self.webpackChunkzw=self.webpackChunkzw||[]).push([[2309],{9613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},519:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var a=n(2182),i=n(9028),r=(n(9496),n(9613)),l=["components"],o={id:"readurl",title:"\ud83d\udca0 Read URL",image:"zw/logo/320x320.png",description:"Annex - Read URL documentation",keywords:["annex","readurl"]},s=void 0,p={unversionedId:"ecosystem/annexes/readurl",id:"ecosystem/annexes/readurl",title:"\ud83d\udca0 Read URL",description:"Annex - Read URL documentation",source:"@site/docs/ecosystem/annexes/01_5_readurl.md",sourceDirName:"ecosystem/annexes",slug:"/ecosystem/annexes/readurl",permalink:"/ja/docs/ecosystem/annexes/readurl",editUrl:"https://digitalclouds.crowdin.com/z-shell/ja",tags:[],version:"current",lastUpdatedBy:"Salvydas Lukosius",lastUpdatedAt:1645956898,formattedLastUpdatedAt:"2022/2/27",frontMatter:{id:"readurl",title:"\ud83d\udca0 Read URL",image:"zw/logo/320x320.png",description:"Annex - Read URL documentation",keywords:["annex","readurl"]},sidebar:"autoSideBar_1",previous:{title:"\ud83d\udca0 Patch DL",permalink:"/ja/docs/ecosystem/annexes/patch-dl"},next:{title:"\ud83d\udca0 Submods",permalink:"/ja/docs/ecosystem/annexes/submods"}},d={},m=[{value:"Intermediate Download Page",id:"intermediate-download-page",level:2},{value:"Skipping <code>dlink&#39;&#39;</code> Ice",id:"skipping-dlink-ice",level:2},{value:"Summary",id:"summary",level:2},{value:"Install Read URL",id:"install-read-url",level:2},{value:"Sorting The Matched URLs / Package Versions",id:"sorting-the-matched-urls--package-versions",level:2},{value:"Filtering The Matched URLs",id:"filtering-the-matched-urls",level:2},{value:"Other Examples",id:"other-examples",level:2}],c={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/z-shell/z-a-readurl"},"z-shell/z-a-readurl")," annex allows to automatically download the newest\nversion of a file to which URL is hosted on a webpage.")),(0,r.kt)("p",null,"It works as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Invoke ",(0,r.kt)("inlineCode",{parentName:"li"},"snippet")," (or simply pass the ",(0,r.kt)("inlineCode",{parentName:"li"},"http://\u2026")," address using the ",(0,r.kt)("inlineCode",{parentName:"li"},"for")," syntax) on the web-page that hosts the URL to\nthe file to download,"),(0,r.kt)("li",{parentName:"ul"},"provide ",(0,r.kt)("inlineCode",{parentName:"li"},"dlink''")," ice with the expected file-download URL replacing the version with the ",(0,r.kt)("inlineCode",{parentName:"li"},"%VERSION%")," keyword, also\nprovide ",(0,r.kt)("inlineCode",{parentName:"li"},"as''")," ice with one of the following values:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"readurl"),","),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"readurl|command"),","),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"readurl|completion"),","),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"readurl|null"),".")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The part after the ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," has the same meaning as in the normal ",(0,r.kt)("inlineCode",{parentName:"p"},"as''")," ice."))),(0,r.kt)("p",null,"So, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"zi id-as=fzf as='readurl|command' extract \\\n    dlink='/junegunn/fzf-bin/releases/download/%VERSION%/fzf-%VERSION%-linux_amd64.tgz' \\\n        for https://github.com/junegunn/fzf-bin/releases/\n")),(0,r.kt)("p",null,"The snippet is just an example. The same effect is obtained by loading as ",(0,r.kt)("inlineCode",{parentName:"p"},"junegunn/fzf-bin")," plugin with ",(0,r.kt)("inlineCode",{parentName:"p"},"from'gh-r'"),"\nice."),(0,r.kt)("p",null,"As it can be seen, the ",(0,r.kt)("inlineCode",{parentName:"p"},"dlink''")," can be a relative or an absolute path and also a full URL (i.e.: beginning with the\n",(0,r.kt)("inlineCode",{parentName:"p"},"http://\u2026")," prefix)."),(0,r.kt)("h2",{id:"intermediate-download-page"},"Intermediate Download Page"),(0,r.kt)("p",null,"Sometimes, like it is in case of ",(0,r.kt)("a",{parentName:"p",href:"http://releases.hashicorp.com/terraform"},"terraform")," command, the final download link\nisn't at the download page, but on a page that's listed on it. In such case use the ",(0,r.kt)("inlineCode",{parentName:"p"},"dlink0''")," ice to provide the\npattern for the additional, intermediate download page. For example, in case of ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform"),", the ZI command is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"zi id-as=terraform as='readurl|command' extract \\\n    dlink0='/terraform/%VERSION%/' \\\n    dlink='/terraform/%VERSION%/terraform_%VERSION%_linux_386.zip' \\\n    for \\\n        http://releases.hashicorp.com/terraform/\n")),(0,r.kt)("h2",{id:"skipping-dlink-ice"},"Skipping ",(0,r.kt)("inlineCode",{parentName:"h2"},"dlink''")," Ice"),(0,r.kt)("p",null,"Sometimes the URL of the download page differs from the URL of the archive in just a few ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),"-sections. In such case, it\nis possible to skip the ",(0,r.kt)("inlineCode",{parentName:"p"},"dlink''")," ice by appending a ",(0,r.kt)("inlineCode",{parentName:"p"},"++"),"-separated fragment of the archive URL, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"zi as'readurl|command' extract for \\\n            http://domain.com/download-page++/archive.zip\n")),(0,r.kt)("p",null,"If the archive URL has some different ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),"-sections, then it's possible to strip the conflicting ones from the download\nURL by using ",(0,r.kt)("inlineCode",{parentName:"p"},"+++"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"++++"),", etc. \u2013 the number of the ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),"-section that'll be stripped equals to the number of the ",(0,r.kt)("inlineCode",{parentName:"p"},"+"),"\nminus 2. So, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"zi as'readurl|command' extract for \\\n        http://domain.com/download-page/removed-section+++/archive.zip\n")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"The annex provides:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Two new ices: ",(0,r.kt)("inlineCode",{parentName:"li"},"dlink''")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"dlink0''"),"."),(0,r.kt)("li",{parentName:"ol"},"A handling of the special values of the ",(0,r.kt)("inlineCode",{parentName:"li"},"as''")," ice, i.e.: of ",(0,r.kt)("inlineCode",{parentName:"li"},"as'readurl'"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"as'readurl|command'"),", etc.")),(0,r.kt)("p",null,"The annex works only with snippets, not plugins."),(0,r.kt)("h2",{id:"install-read-url"},"Install Read URL"),(0,r.kt)("p",null,"Simply load like a regular plugin, i.e.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"zi light z-shell/z-a-readurl\n")),(0,r.kt)("p",null,"After executing the above command (possibly via ",(0,r.kt)("inlineCode",{parentName:"p"},"zshrc"),") it's then possible to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"dlink''")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"dlink0''")," ices and\nalso the special ",(0,r.kt)("inlineCode",{parentName:"p"},"as'readurl|\u2026'")," value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"as''")," ice."),(0,r.kt)("h2",{id:"sorting-the-matched-urls--package-versions"},"Sorting The Matched URLs / Package Versions"),(0,r.kt)("p",null,"Sometimes the download page doesn't list the package versions from newest to the oldest, but in some other order. In\nsuch case it's possible to sort the URLs / package versions by prepending the chosen ",(0,r.kt)("inlineCode",{parentName:"p"},"dlink")," ice (",(0,r.kt)("inlineCode",{parentName:"p"},"dlink0''")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"dlink''"),") with the exclamation mark (",(0,r.kt)("inlineCode",{parentName:"p"},"dlink'!\u2026'"),", etc.). See the next section for an example:"),(0,r.kt)("h2",{id:"filtering-the-matched-urls"},"Filtering The Matched URLs"),(0,r.kt)("p",null,"Sometimes there are some unwanted URLs that match the ",(0,r.kt)("inlineCode",{parentName:"p"},"dlink''"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"dlink0''")," regex / pattern. In such case it's possible\nto filter them out by appending a filtering regex to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dlink''")," ice as:\n",(0,r.kt)("inlineCode",{parentName:"p"},"dlink='the-main-regex~%the-unwanted-URLs-regex%'")," (or the same for ",(0,r.kt)("inlineCode",{parentName:"p"},"dlink0''"),"). An example package that can benefit\nfrom this is the ",(0,r.kt)("a",{parentName:"p",href:"https://www.openshift.com/"},"Open Shift")," client, which doesn't sort the URLs from latest to the oldest\n\u2013 hence the exclamation mark (",(0,r.kt)("inlineCode",{parentName:"p"},"!"),") prepend \u2013 and it has special URLs like ",(0,r.kt)("inlineCode",{parentName:"p"},"stable-4.4")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"candidate-4.5")," together with\nthe regular version URLs (like ",(0,r.kt)("inlineCode",{parentName:"p"},"4.5.0-rc.1"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'zi id-as"ocp" as"readurl|command" \\\n    dlink0\'!%VERSION%~%(stable|latest|fast|candidate).*%\' \\\n    dlink"openshift-client-windows-%VERSION%.zip" for \\\n        https://mirror.openshift.com/pub/openshift-v4/clients/ocp/\n')),(0,r.kt)("p",null,"The above snippet of Zsh code / ZI invocation will sort the URLs (",(0,r.kt)("inlineCode",{parentName:"p"},"dlink0'!\u2026'"),") and then filter out the special ones\nfrom the results (via ",(0,r.kt)("inlineCode",{parentName:"p"},"\u2026~%(stable|latest|fast|candidate).*%"),"), this way selecting the latest version of the Open Shift\nclient."),(0,r.kt)("h2",{id:"other-examples"},"Other Examples"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.pulumi.com/"},(0,r.kt)("strong",{parentName:"a"},"Pulumi")),", a tool to create, deploy, and manage modern cloud software."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"zi id-as'pulumi' as'readurl|null' extract'!' \\\n    dlink='https://get.pulumi.com/releases/sdk/pulumi-%VERSION%-linux-x64.tar.gz' \\\n    sbin'pulumi*' for \\\n        https://www.pulumi.com/docs/get-started/install/versions/\n")))}u.isMDXComponent=!0}}]);