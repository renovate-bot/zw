(self.webpackChunkzw=self.webpackChunkzw||[]).push([[9671],{9293:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/z_git.71cfce7.640.png 640w,"+a.p+"assets/ideal-img/z_git.8b9472a.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/z_git.71cfce7.640.png",width:640,height:132},{path:a.p+"assets/ideal-img/z_git.8b9472a.1030.png",width:1030,height:213}],src:a.p+"assets/ideal-img/z_git.71cfce7.640.png",toString:function(){return a.p+"assets/ideal-img/z_git.71cfce7.640.png"},placeholder:void 0,width:640,height:132},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAACCAYAAABhYU3QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAXUlEQVQImQFSAK3/AFrgmD1By6IXKoLcDyWtzCEFtrkbALamHBatuB8ApP8J7k8nF/VRHTAAX+KWMki0uxsVS/8Oa4XMGLOnex/Jt3MkpqCEIBqU/xHMVUwi+FAaOYW4In/MSXGIAAAAAElFTkSuQmCC",palette:null}},3804:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return N},contentTitle:function(){return v},default:function(){return z},frontMatter:function(){return b},metadata:function(){return y},toc:function(){return w}});var n=a(2182),r=a(9028),i=a(9496),l=a(9613),o=a(8894),s=a(6676),u=a(1626),m="tabItem_Ta1K";function p(e){var t,a,r,l=e.lazy,o=e.block,p=e.defaultValue,c=e.values,d=e.groupId,h=e.className,g=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=c?c:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=g[0])?void 0:r.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,s.UB)(),y=v.tabGroupChoices,N=v.setTabGroupChoices,w=(0,i.useState)(b),A=w[0],z=w[1],T=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var I=y[d];null!=I&&I!==A&&f.some((function(e){return e.value===I}))&&z(I)}var S=function(e){var t=e.currentTarget,a=T.indexOf(t),n=f[a].value;n!==A&&(x(t),z(n),null!=d&&N(d,n))},_=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;a=T[n]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;a=T[r]||T[T.length-1]}null==(t=a)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},h)},f.map((function(e){var t=e.value,a=e.label,r=e.attributes;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return T.push(e)},onKeyDown:_,onFocus:S,onClick:S},r,{className:(0,u.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":A===t})}),null!=a?a:t)}))),l?(0,i.cloneElement)(g.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function c(e){var t=(0,o.Z)();return i.createElement(p,(0,n.Z)({key:String(t)},e))}function d(e){var t=e.children,a=e.hidden,n=e.className;return i.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}var h=a(5595),g=a(9293),f=a.n(g),k=["components"],b={id:"intro",title:"\ud83c\udf89 Introduction",sidebar_position:1,image:"zw/logo/320x320.png",description:"Introduction to a Swiss Army Knife for Zsh, formely known as zplugin, zinit.",keywords:["introduction"]},v=void 0,y={unversionedId:"intro",id:"intro",title:"\ud83c\udf89 Introduction",description:"Introduction to a Swiss Army Knife for Zsh, formely known as zplugin, zinit.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/z-shell/zw/tree/main/docs/intro.md",tags:[],version:"current",lastUpdatedBy:"Salvydas Lukosius",lastUpdatedAt:1647979815,formattedLastUpdatedAt:"3/22/2022",sidebarPosition:1,frontMatter:{id:"intro",title:"\ud83c\udf89 Introduction",sidebar_position:1,image:"zw/logo/320x320.png",description:"Introduction to a Swiss Army Knife for Zsh, formely known as zplugin, zinit.",keywords:["introduction"]},sidebar:"autoSideBar_1",next:{title:"\u26a1\ufe0f Installation",permalink:"/docs/getting_started/installation"}},N={},w=[{value:"\u26a1\ufe0f Fast and feature-rich",id:"\ufe0f-fast-and-feature-rich",level:2},{value:"\u2611\ufe0f Neat and flexible",id:"\ufe0f-neat-and-flexible",level:2},{value:"\ud83d\udcc8 Familiarize and control",id:"-familiarize-and-control",level:2},{value:"\ud83d\udce2 Summary",id:"-summary",level:2}],A={toc:w};function z(e){var t=e.components,a=(0,r.Z)(e,k);return(0,l.kt)("wrapper",(0,n.Z)({},A,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(h.Z,{className:"ScreenView",img:f(),alt:"Install almost everything from GitHub",mdxType:"Image"}),(0,l.kt)("a",{href:"https://github.com/z-shell"},(0,l.kt)("img",{className:"ScreenView",src:"https://raw.githubusercontent.com/z-shell/.github/main/metrics/plugin.svg",alt:"Z-Shell Organization"})),(0,l.kt)(c,{mdxType:"Tabs"},(0,l.kt)(d,{value:"gems",label:"RubyGems",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://rubygems.org"},"RubyGems")," and ",(0,l.kt)("a",{parentName:"p",href:"https://guides.rubygems.org/command-reference/#gem-environment"},"$GEM_HOME")," are\nautomatically managed by the ",(0,l.kt)("a",{parentName:"p",href:"/docs/ecosystem/annexes/bin-gem-node"},"bin-gem-node")," annex or installed by the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/z-shell/any-gem"},"any-gem")," package.")),(0,l.kt)(d,{value:"node",label:"Node",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com"},"Node")," modules and\n",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders"},"$NODE_PATH")," are automatically managed by\nthe ",(0,l.kt)("a",{parentName:"p",href:"/docs/ecosystem/annexes/bin-gem-node"},"bin-gem-node")," annex or installed by the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/z-shell/any-node"},"any-node")," package.")),(0,l.kt)(d,{value:"pip",label:"Python",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://python.org"},"Python")," modules, ",(0,l.kt)("a",{parentName:"p",href:"https://docs.python.org/3/tutorial/venv.html"},"$VIRTUALENV")," are automatically\nmanaged by the ",(0,l.kt)("a",{parentName:"p",href:"/docs/ecosystem/annexes/bin-gem-node"},"bin-gem-node")," annex.")),(0,l.kt)(d,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://crates.io"},"Rust")," packages are managed by the ",(0,l.kt)("a",{parentName:"p",href:"/docs/ecosystem/annexes/rust"},"rust annex"),".")),(0,l.kt)(d,{value:"github",label:"GitHub",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Install and control almost everything from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com"},"GitHub"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/ecosystem/annexes"},"Annexes"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/ecosystem/packages/packages-overview"},"Packages"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/gallery/collection"},"Gallery of\nInvocations"),"."))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\ufe0f-fast-and-feature-rich"},"\u26a1\ufe0f Fast and feature-rich"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/search?q=meta+plugins"},"Meta plugins")," allow installing groups of plugins via a single, friendly label."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ecosystem/packages/packages-overview"},"Packages")," offload the user from providing long and complex commands."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ecosystem/annexes"},"Annexes")," allow to extend the plugin manager with new commands."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/getting_started/overview#turbo-mode-zsh--53"},"Turbo")," mode yields ",(0,l.kt)("strong",{parentName:"li"},"50-80%")," faster Zsh startup.")),(0,l.kt)("h2",{id:"\ufe0f-neat-and-flexible"},"\u2611\ufe0f Neat and flexible"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/guides/customization#customizing-paths"},"Customize paths"),", use ",(0,l.kt)("a",{parentName:"li",href:"/docs/guides/customization#multiple-prompts"},"multiple prompts")," or create ",(0,l.kt)("a",{parentName:"li",href:"/docs/guides/customization#non-github-local-plugins"},"your own")," plugins."),(0,l.kt)("li",{parentName:"ul"},"Supports ",(0,l.kt)("a",{parentName:"li",href:"/docs/getting_started/overview#oh-my-zsh-prezto"},"Oh My Zsh")," and ",(0,l.kt)("a",{parentName:"li",href:"/docs/getting_started/overview#oh-my-zsh-prezto"},"Prezto")," plugins and libraries. (",(0,l.kt)("a",{parentName:"li",href:"/docs/getting_started/migration"},"migration"),")."),(0,l.kt)("li",{parentName:"ul"},"Does not use ",(0,l.kt)("inlineCode",{parentName:"li"},"$FPATH"),", loading multiple plugins doesn't clutter ",(0,l.kt)("inlineCode",{parentName:"li"},"$FPATH")," with the same number of entries, e.g: 10, 15,\nor more."),(0,l.kt)("li",{parentName:"ul"},"Code is immune to ",(0,l.kt)("inlineCode",{parentName:"li"},"KSH_ARRAYS")," and other options typically causing compatibility problems."),(0,l.kt)("li",{parentName:"ul"},"Do not require ",(0,l.kt)("inlineCode",{parentName:"li"},"sudo"),", and provide many workarounds e.g: setting so-called ",(0,l.kt)("strong",{parentName:"li"},"shims")," locally.")),(0,l.kt)("h2",{id:"-familiarize-and-control"},"\ud83d\udcc8 Familiarize and control"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Visualise data: ",(0,l.kt)("strong",{parentName:"p"},"aliases"),", ",(0,l.kt)("strong",{parentName:"p"},"functions"),", ",(0,l.kt)("strong",{parentName:"p"},"bindkeys"),", ",(0,l.kt)("strong",{parentName:"p"},"Zle widgets"),", ",(0,l.kt)("strong",{parentName:"p"},"zstyles"),", ",(0,l.kt)("strong",{parentName:"p"},"completions"),",\n",(0,l.kt)("strong",{parentName:"p"},"variables"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"$PATH"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"$FPATH")," elements a plugin has set up.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Quickly familiarize oneself with a new plugin and provides rich and easy-to-digest information that might be helpful\non various occasions.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/docs/guides/commands#loading-and-unloading"},"Load or unload")," plugins, use the ability to ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/commands#completions-management"},"manage")," completions.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Docker ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/z-shell/playground"},"playground"),", test or propose configurations, preview at\n",(0,l.kt)("a",{parentName:"p",href:"https://asciinema.org/a/459358"},"asciinema.org"),"."))),(0,l.kt)("h2",{id:"-summary"},"\ud83d\udce2 Summary"),(0,l.kt)("a",{href:"https://github.com/orgs/z-shell/projects"},(0,l.kt)("img",{className:"ScreenView",src:"https://raw.githubusercontent.com/z-shell/.github/main/metrics/plugin.projects.svg",alt:"Z-Shell Projects"})),(0,l.kt)("a",{href:"https://github.com/orgs/z-shell/projects"},(0,l.kt)("img",{className:"ScreenView",src:"https://raw.githubusercontent.com/z-shell/.github/main/metrics/plugin.followup.indepth.svg",alt:"Z-Shell Indepth"})),(0,l.kt)("a",{href:"https://github.com/z-shell/zw"},(0,l.kt)("img",{className:"ScreenView",src:"https://raw.githubusercontent.com/z-shell/.github/main/metrics/plugin.pagespeed.detailed.svg",alt:"ZW PageSpeed"})))}z.isMDXComponent=!0}}]);