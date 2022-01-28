
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','268'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/contributing-guidlines-update',
    component: ComponentCreator('/blog/contributing-guidlines-update','731'),
    exact: true
  },
  {
    path: '/blog/swiss-army-knife-for-zsh',
    component: ComponentCreator('/blog/swiss-army-knife-for-zsh','f9a'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/codenewbie',
    component: ComponentCreator('/blog/tags/codenewbie','3a8'),
    exact: true
  },
  {
    path: '/blog/tags/github',
    component: ComponentCreator('/blog/tags/github','42c'),
    exact: true
  },
  {
    path: '/blog/tags/opensource',
    component: ComponentCreator('/blog/tags/opensource','37d'),
    exact: true
  },
  {
    path: '/blog/tags/productivity',
    component: ComponentCreator('/blog/tags/productivity','a9c'),
    exact: true
  },
  {
    path: '/blog/tags/zsh',
    component: ComponentCreator('/blog/tags/zsh','2e2'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search','79a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','76b'),
    routes: [
      {
        path: '/docs/code',
        component: ComponentCreator('/docs/code','7cd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ecosystem/annexes',
        component: ComponentCreator('/docs/ecosystem/annexes','012'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ecosystem/annexes/bin-gem-node',
        component: ComponentCreator('/docs/ecosystem/annexes/bin-gem-node','fcf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ecosystem/annexes/default-ice',
        component: ComponentCreator('/docs/ecosystem/annexes/default-ice','c58'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ecosystem/annexes/meta-plugins',
        component: ComponentCreator('/docs/ecosystem/annexes/meta-plugins','520'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ecosystem/annexes/patch-dl',
        component: ComponentCreator('/docs/ecosystem/annexes/patch-dl','ff3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ecosystem/annexes/readurl',
        component: ComponentCreator('/docs/ecosystem/annexes/readurl','7ad'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ecosystem/annexes/rust',
        component: ComponentCreator('/docs/ecosystem/annexes/rust','70f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ecosystem/annexes/submods',
        component: ComponentCreator('/docs/ecosystem/annexes/submods','124'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ecosystem/annexes/test',
        component: ComponentCreator('/docs/ecosystem/annexes/test','328'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ecosystem/annexes/unscope',
        component: ComponentCreator('/docs/ecosystem/annexes/unscope','624'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ecosystem/packages',
        component: ComponentCreator('/docs/ecosystem/packages','0f8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ecosystem/plugins/modules',
        component: ComponentCreator('/docs/ecosystem/plugins/modules','f71'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ecosystem/plugins/startify',
        component: ComponentCreator('/docs/ecosystem/plugins/startify','bae'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ecosystem/plugins/zconvey',
        component: ComponentCreator('/docs/ecosystem/plugins/zconvey','104'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/gallery/collection',
        component: ComponentCreator('/docs/gallery/collection','ac8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/gallery/collection/completions',
        component: ComponentCreator('/docs/gallery/collection/completions','62b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/gallery/collection/plugins',
        component: ComponentCreator('/docs/gallery/collection/plugins','269'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/gallery/collection/programs',
        component: ComponentCreator('/docs/gallery/collection/programs','1fd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/gallery/collection/services',
        component: ComponentCreator('/docs/gallery/collection/services','576'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/gallery/collection/snippets',
        component: ComponentCreator('/docs/gallery/collection/snippets','64f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/gallery/collection/themes',
        component: ComponentCreator('/docs/gallery/collection/themes','d5d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/getting_started/installation',
        component: ComponentCreator('/docs/getting_started/installation','bfe'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/getting_started/migration',
        component: ComponentCreator('/docs/getting_started/migration','801'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/getting_started/overview',
        component: ComponentCreator('/docs/getting_started/overview','6f9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/getting_started/useage',
        component: ComponentCreator('/docs/getting_started/useage','ad3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/guides/benchmark',
        component: ComponentCreator('/docs/guides/benchmark','a9e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/guides/commands',
        component: ComponentCreator('/docs/guides/commands','5da'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/guides/customization',
        component: ComponentCreator('/docs/guides/customization','7f1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/guides/ice',
        component: ComponentCreator('/docs/guides/ice','043'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/guides/ice-modifiers',
        component: ComponentCreator('/docs/guides/ice-modifiers','1d3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/guides/syntax',
        component: ComponentCreator('/docs/guides/syntax','3a5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','0d3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
