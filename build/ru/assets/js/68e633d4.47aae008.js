"use strict";(self.webpackChunkzw=self.webpackChunkzw||[]).push([[1843],{4610:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=a(6984),u=l.__importDefault(a(9496)),n=l.__importDefault(a(2917)),r=l.__importDefault(a(2500)),d=l.__importDefault(a(8558));function i(e){var t=e.to,a=e.children;return u.default.createElement(r.default,{className:d.default.navlink,isNavLink:!0,to:t,exact:!0,activeStyle:{backgroundColor:"#363739"}},a)}t.default=function(e){var t=e.children;return u.default.createElement(u.default.Fragment,null,u.default.createElement(n.default,null,u.default.createElement("html",{lang:"en"}),u.default.createElement("title",null,"Docusaurus debug panel")),u.default.createElement("div",null,u.default.createElement("nav",{className:d.default.nav},u.default.createElement(i,{to:"/__docusaurus/debug"},"Config"),u.default.createElement(i,{to:"/__docusaurus/debug/metadata"},"Metadata"),u.default.createElement(i,{to:"/__docusaurus/debug/registry"},"Registry"),u.default.createElement(i,{to:"/__docusaurus/debug/routes"},"Routes"),u.default.createElement(i,{to:"/__docusaurus/debug/content"},"Content"),u.default.createElement(i,{to:"/__docusaurus/debug/globalData"},"Global data")),u.default.createElement("main",{className:d.default.container},t)))}},7997:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=a(6984),u=l.__importDefault(a(9496)),n=l.__importDefault(a(4610)),r=l.__importDefault(a(6222)),d=l.__importDefault(a(151));t.default=function(){var e=(0,r.default)().siteMetadata;return u.default.createElement(n.default,null,u.default.createElement("h2",null,"Site Metadata"),u.default.createElement("div",null,"Docusaurus Version: ",u.default.createElement("code",null,e.docusaurusVersion)),u.default.createElement("div",null,"Site Version:"," ",u.default.createElement("code",null,e.siteVersion||"No version specified")),u.default.createElement("h3",{className:d.default.sectionTitle},"Plugins and themes"),u.default.createElement("ul",{className:d.default.list},Object.entries(e.pluginVersions).map((function(e){var t=e[0],a=e[1];return u.default.createElement("li",{key:t,className:d.default.listItem},"package"===a.type&&a.version&&u.default.createElement("div",{className:d.default.version},u.default.createElement("code",null,a.version)),u.default.createElement("div",{className:d.default.name},t),u.default.createElement("div",null,"Type: ",a.type))}))))}},8558:function(e,t,a){a.r(t),t.default={container:"container_jSqT",nav:"nav_jGHK",navlink:"navlink_dY3T",active:"active_EA2P"}},151:function(e,t,a){a.r(t),t.default={sectionTitle:"sectionTitle_NTw3",list:"list_NIi5",listItem:"listItem_vikx",version:"version_WXx_",name:"name_jH3t"}}}]);