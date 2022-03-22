(self.webpackChunkzw=self.webpackChunkzw||[]).push([[8965],{3153:function(e,t,n){e.exports={src:{srcSet:n.p+"assets/ideal-img/48490.9022a37.640.png 640w,"+n.p+"assets/ideal-img/48490.afba598.1030.png 1030w",images:[{path:n.p+"assets/ideal-img/48490.9022a37.640.png",width:640,height:322},{path:n.p+"assets/ideal-img/48490.afba598.1030.png",width:1030,height:519}],src:n.p+"assets/ideal-img/48490.9022a37.640.png",toString:function(){return n.p+"assets/ideal-img/48490.9022a37.640.png"},placeholder:void 0,width:640,height:322},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAcUlEQVQImX3MPQrDMAwFYGFZsmN7Ss7QtZ3ys7SQ0CH3P5BekYdAoXT44ElIj+Z1tfO12/GY7X2723PZbJwmE5FLSsmotYYhZwyakKMgiyKEACK69JmZjYj+6jcxxq/vX3pjrRWllM6zqoKZ4QXOs+8+6K02+hUoURAAAAAASUVORK5CYII=",palette:null}},7255:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return u}});var i=n(2182),a=n(9028),l=(n(9496),n(9613)),s=n(5595),r=n(3153),o=n.n(r),p=["components"],d={id:"zsh-select",title:"\u2699\ufe0f Select",image:"zw/logo/320x320.png",description:"A shell command that will display selection list.",keywords:["zsh-plugin","zsh-select"]},c=void 0,m={unversionedId:"ecosystem/plugins/zsh-select",id:"ecosystem/plugins/zsh-select",title:"\u2699\ufe0f Select",description:"A shell command that will display selection list.",source:"@site/docs/ecosystem/plugins/11_select.md",sourceDirName:"ecosystem/plugins",slug:"/ecosystem/plugins/zsh-select",permalink:"/ja/docs/ecosystem/plugins/zsh-select",editUrl:"https://digitalclouds.crowdin.com/z-shell/ja",tags:[],version:"current",lastUpdatedBy:"Salvydas Lukosius",lastUpdatedAt:1645956898,formattedLastUpdatedAt:"2022/2/27",sidebarPosition:11,frontMatter:{id:"zsh-select",title:"\u2699\ufe0f Select",image:"zw/logo/320x320.png",description:"A shell command that will display selection list.",keywords:["zsh-plugin","zsh-select"]},sidebar:"autoSideBar_1",previous:{title:"\u2699\ufe0f ZConvey",permalink:"/ja/docs/ecosystem/plugins/zconvey"},next:{title:"\u2699\ufe0f Modules",permalink:"/ja/docs/ecosystem/plugins/modules"}},h={},u=[{value:"Install Zsh Select",id:"install-zsh-select",level:2},{value:"Integration with Vim",id:"integration-with-vim",level:2},{value:"Configuring",id:"configuring",level:2},{value:"With plugin managers",id:"with-plugin-managers",level:2},{value:"ZI",id:"zi",level:3},{value:"Zgen",id:"zgen",level:3},{value:"Antigen",id:"antigen",level:3}],g={toc:u};function k(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/z-shell/zsh-select"},"z-shell/zsh-select"))),(0,l.kt)("p",null,"A shell command that will display selection list. It is similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"selecta"),", but uses curses library to do display, and\nwhen compared to ",(0,l.kt)("inlineCode",{parentName:"p"},"fzf"),", the main difference is approximate matching instead of fuzzy matching."),(0,l.kt)("p",null,"It is written in Zshell and has it's capabilities:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Patterns, allowing multi-term searching"),(0,l.kt)("li",{parentName:"ul"},"Curses module"),(0,l.kt)("li",{parentName:"ul"},"Approximate matching (",(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl-F"),")")),(0,l.kt)("p",null,"The file ",(0,l.kt)("inlineCode",{parentName:"p"},"zsh-select")," can be copied to any ",(0,l.kt)("inlineCode",{parentName:"p"},"bin")," directory. ",(0,l.kt)("inlineCode",{parentName:"p"},"Zsh")," will serve as say ",(0,l.kt)("inlineCode",{parentName:"p"},"Ruby"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"zsh-select")," will be a\nregular program available in system."),(0,l.kt)("p",null,"Pressing ",(0,l.kt)("inlineCode",{parentName:"p"},"o")," will make elements uniqe. To search again after pressing enter, press ",(0,l.kt)("inlineCode",{parentName:"p"},"/"),". Approximate matching mode is\nactivated by ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-F"),"."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can resize the video by pressing ",(0,l.kt)("kbd",null,"Ctrl-+")," or ",(0,l.kt)("kbd",null,"CtrlCmd-+"),"."))),(0,l.kt)("a",{href:"https://asciinema.org/a/48490"},(0,l.kt)(s.Z,{className:"ScreenView",img:o(),alt:"Zsh-Select view on Asciinema",mdxType:"Image"})),(0,l.kt)("p",null,"Video: source: ",(0,l.kt)("a",{parentName:"p",href:"https://asciinema.org/a/48490"},"asciinema")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"install-zsh-select"},"Install Zsh Select"),(0,l.kt)("p",null,"Simply copy file ",(0,l.kt)("inlineCode",{parentName:"p"},"zsh-select")," to any ",(0,l.kt)("inlineCode",{parentName:"p"},"bin")," directory such as ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),"."),(0,l.kt)("p",null,"The package is also available as plugin. ",(0,l.kt)("inlineCode",{parentName:"p"},"zsh-select")," will be available in interactive ",(0,l.kt)("inlineCode",{parentName:"p"},"Zsh")," sessions only when using\nthis method. Nevertheless, integration with ",(0,l.kt)("inlineCode",{parentName:"p"},"Vim")," and other uses will simply work when ",(0,l.kt)("inlineCode",{parentName:"p"},"Zsh")," is your main shell."),(0,l.kt)("p",null,"Also, plugin managers often allow easy updates."),(0,l.kt)("h2",{id:"integration-with-vim"},"Integration with Vim"),(0,l.kt)("p",null,"Adding following snippet to ",(0,l.kt)("inlineCode",{parentName:"p"},"vimrc")," will provide ",(0,l.kt)("inlineCode",{parentName:"p"},"\\f")," keyboard shortcut that will run ",(0,l.kt)("inlineCode",{parentName:"p"},"zsh-select")," as file-selector."),(0,l.kt)("p",null,"Multi-term searching and approximate matching (",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-F"),") will be available. The snippet is based on code from ",(0,l.kt)("inlineCode",{parentName:"p"},"selecta"),"\ngithub page (MIT license):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vim"},'" Run a given vim command on the results of fuzzy selecting from a given shell\n" command. See usage below.\nfunction! ZshSelectCommand(choice_command, zshselect_args, vim_command)\n  try\n    let selection = system(a:choice_command . " | zsh-select " . a:zshselect_args)\n  catch /Vim:Interrupt/\n    " Swallow the ^C so that the redraw below happens; otherwise there will be\n    " leftovers from zshselect on the screen\n    redraw!\n    return\n  endtry\n  redraw!\n  exec a:vim_command . " " . selection\nendfunction\n" Find all files in all non-dot directories starting in the working directory.\n" Fuzzy select one of those. Open the selected file with :e.\nnnoremap <leader>f :call ZshSelectCommand("find * -type f 2>/dev/null", "", ":e")<cr>\n')),(0,l.kt)("h2",{id:"configuring"},"Configuring"),(0,l.kt)("p",null,"There are a few environment variables that can be set to alter ",(0,l.kt)("inlineCode",{parentName:"p"},"Zsh-Select")," behavior."),(0,l.kt)("p",null,"Values assigned below are the defaults:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'export ZSHSELECT_BOLD="1"                   # The interface will be drawn in bold font. Use "0" for no bold\nexport ZSHSELECT_COLOR_PAIR="white/black"   # Draw in white foreground, black background. Try e.g.: "white/green"\nexport ZSHSELECT_BORDER="0"                 # No border around interface, Use "1" for the border\nexport ZSHSELECT_ACTIVE_TEXT="reverse"      # Mark current element with reversed text. Use "underline" for marking with underline\nexport ZSHSELECT_START_IN_SEARCH_MODE="1"   # Starts Zsh-Select with searching active. "0" will not invoke searching at start.\n')),(0,l.kt)("h2",{id:"with-plugin-managers"},"With plugin managers"),(0,l.kt)("h3",{id:"zi"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/z-shell/zi"},"ZI")),(0,l.kt)("p",null,"Add ",(0,l.kt)("inlineCode",{parentName:"p"},"zi load z-shell/zsh-select")," to ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc"),". The plugin will be loaded next time you start ",(0,l.kt)("inlineCode",{parentName:"p"},"Zsh"),"."),(0,l.kt)("p",null,"To update issue ",(0,l.kt)("inlineCode",{parentName:"p"},"zi update z-shell/zsh-select")," from command line."),(0,l.kt)("h3",{id:"zgen"},"Zgen"),(0,l.kt)("p",null,"Add ",(0,l.kt)("inlineCode",{parentName:"p"},"zgen load z-shell/zsh-select")," to ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc")," and issue a ",(0,l.kt)("inlineCode",{parentName:"p"},"zgen reset")," (this assumes that there is a proper ",(0,l.kt)("inlineCode",{parentName:"p"},"zgen save"),"\nconstruct in ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc"),")."),(0,l.kt)("h3",{id:"antigen"},"Antigen"),(0,l.kt)("p",null,"Add ",(0,l.kt)("inlineCode",{parentName:"p"},"antigen bundle z-shell/zsh-select")," to ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc"),". There also should be ",(0,l.kt)("inlineCode",{parentName:"p"},"antigen apply"),"."))}k.isMDXComponent=!0}}]);