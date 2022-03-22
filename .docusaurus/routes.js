
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/zh-Hans/__docusaurus/debug',
    component: ComponentCreator('/zh-Hans/__docusaurus/debug','228'),
    exact: true
  },
  {
    path: '/zh-Hans/__docusaurus/debug/config',
    component: ComponentCreator('/zh-Hans/__docusaurus/debug/config','49b'),
    exact: true
  },
  {
    path: '/zh-Hans/__docusaurus/debug/content',
    component: ComponentCreator('/zh-Hans/__docusaurus/debug/content','a62'),
    exact: true
  },
  {
    path: '/zh-Hans/__docusaurus/debug/globalData',
    component: ComponentCreator('/zh-Hans/__docusaurus/debug/globalData','0f7'),
    exact: true
  },
  {
    path: '/zh-Hans/__docusaurus/debug/metadata',
    component: ComponentCreator('/zh-Hans/__docusaurus/debug/metadata','6b2'),
    exact: true
  },
  {
    path: '/zh-Hans/__docusaurus/debug/registry',
    component: ComponentCreator('/zh-Hans/__docusaurus/debug/registry','6de'),
    exact: true
  },
  {
    path: '/zh-Hans/__docusaurus/debug/routes',
    component: ComponentCreator('/zh-Hans/__docusaurus/debug/routes','11a'),
    exact: true
  },
  {
    path: '/zh-Hans/blog',
    component: ComponentCreator('/zh-Hans/blog','7c5'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/archive',
    component: ComponentCreator('/zh-Hans/blog/archive','483'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/swiss-army-knife-for-zsh',
    component: ComponentCreator('/zh-Hans/blog/swiss-army-knife-for-zsh','891'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/tags',
    component: ComponentCreator('/zh-Hans/blog/tags','3c0'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/tags/github',
    component: ComponentCreator('/zh-Hans/blog/tags/github','5d0'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/tags/opensource',
    component: ComponentCreator('/zh-Hans/blog/tags/opensource','ac6'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/tags/productivity',
    component: ComponentCreator('/zh-Hans/blog/tags/productivity','671'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/tags/zsh',
    component: ComponentCreator('/zh-Hans/blog/tags/zsh','166'),
    exact: true
  },
  {
    path: '/zh-Hans/legal/privacy_policy',
    component: ComponentCreator('/zh-Hans/legal/privacy_policy','ed0'),
    exact: true
  },
  {
    path: '/zh-Hans/search',
    component: ComponentCreator('/zh-Hans/search','488'),
    exact: true
  },
  {
    path: '/zh-Hans/community',
    component: ComponentCreator('/zh-Hans/community','2a6'),
    routes: [
      {
        path: '/zh-Hans/community/intro',
        component: ComponentCreator('/zh-Hans/community/intro','c92'),
        exact: true,
        sidebar: "autoSideBar_2"
      },
      {
        path: '/zh-Hans/community/zsh_handbook',
        component: ComponentCreator('/zh-Hans/community/zsh_handbook','bb2'),
        exact: true,
        sidebar: "autoSideBar_2"
      },
      {
        path: '/zh-Hans/community/zsh_plugin_standard',
        component: ComponentCreator('/zh-Hans/community/zsh_plugin_standard','1f1'),
        exact: true,
        sidebar: "autoSideBar_2"
      }
    ]
  },
  {
    path: '/zh-Hans/docs',
    component: ComponentCreator('/zh-Hans/docs','ce6'),
    routes: [
      {
        path: '/zh-Hans/docs/code',
        component: ComponentCreator('/zh-Hans/docs/code','277'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/annexes',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/annexes','4a6'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/annexes/bin-gem-node',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/annexes/bin-gem-node','7cc'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/annexes/default-ice',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/annexes/default-ice','617'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/annexes/meta-plugins',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/annexes/meta-plugins','551'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/annexes/patch-dl',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/annexes/patch-dl','963'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/annexes/readurl',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/annexes/readurl','c56'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/annexes/rust',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/annexes/rust','abe'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/annexes/submods',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/annexes/submods','929'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/annexes/test',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/annexes/test','8d5'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/annexes/unscope',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/annexes/unscope','a8c'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/packages/packages',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/packages/packages','db8'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/packages/packages-overview',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/packages/packages-overview','45e'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/plugins/console',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/plugins/console','62e'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/plugins/editing-workbech',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/plugins/editing-workbech','211'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/plugins/modules',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/plugins/modules','357'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/plugins/startify',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/plugins/startify','bfe'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/plugins/zbrowse',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/plugins/zbrowse','db0'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/plugins/zca',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/plugins/zca','941'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/plugins/zconvey',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/plugins/zconvey','f3b'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/plugins/zprompts',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/plugins/zprompts','117'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/plugins/zsh-nav-tools',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/plugins/zsh-nav-tools','502'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/plugins/zsh-select',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/plugins/zsh-select','5b4'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/plugins/zsh-unique-id',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/plugins/zsh-unique-id','8ac'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/plugins/zui',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/plugins/zui','45d'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/ecosystem/plugins/zzcomplete',
        component: ComponentCreator('/zh-Hans/docs/ecosystem/plugins/zzcomplete','539'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/gallery/collection',
        component: ComponentCreator('/zh-Hans/docs/gallery/collection','4ff'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/gallery/collection/completions',
        component: ComponentCreator('/zh-Hans/docs/gallery/collection/completions','914'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/gallery/collection/plugins',
        component: ComponentCreator('/zh-Hans/docs/gallery/collection/plugins','5cc'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/gallery/collection/programs',
        component: ComponentCreator('/zh-Hans/docs/gallery/collection/programs','0bc'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/gallery/collection/services',
        component: ComponentCreator('/zh-Hans/docs/gallery/collection/services','d16'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/gallery/collection/snippets',
        component: ComponentCreator('/zh-Hans/docs/gallery/collection/snippets','e82'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/gallery/collection/themes',
        component: ComponentCreator('/zh-Hans/docs/gallery/collection/themes','af0'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/getting_started/installation',
        component: ComponentCreator('/zh-Hans/docs/getting_started/installation','882'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/getting_started/migration',
        component: ComponentCreator('/zh-Hans/docs/getting_started/migration','866'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/getting_started/overview',
        component: ComponentCreator('/zh-Hans/docs/getting_started/overview','3aa'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/guides/benchmark',
        component: ComponentCreator('/zh-Hans/docs/guides/benchmark','4f4'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/guides/commands',
        component: ComponentCreator('/zh-Hans/docs/guides/commands','a90'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/guides/customization',
        component: ComponentCreator('/zh-Hans/docs/guides/customization','faa'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/guides/syntax/bindkey',
        component: ComponentCreator('/zh-Hans/docs/guides/syntax/bindkey','dfd'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/guides/syntax/common',
        component: ComponentCreator('/zh-Hans/docs/guides/syntax/common','2b4'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/guides/syntax/for',
        component: ComponentCreator('/zh-Hans/docs/guides/syntax/for','785'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/guides/syntax/ice',
        component: ComponentCreator('/zh-Hans/docs/guides/syntax/ice','316'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/guides/syntax/ice-modifiers',
        component: ComponentCreator('/zh-Hans/docs/guides/syntax/ice-modifiers','478'),
        exact: true,
        sidebar: "autoSideBar_1"
      },
      {
        path: '/zh-Hans/docs/intro',
        component: ComponentCreator('/zh-Hans/docs/intro','cf4'),
        exact: true,
        sidebar: "autoSideBar_1"
      }
    ]
  },
  {
    path: '/zh-Hans/',
    component: ComponentCreator('/zh-Hans/','465'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
