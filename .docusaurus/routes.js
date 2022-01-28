
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ja/blog',
    component: ComponentCreator('/ja/blog','9d5'),
    exact: true
  },
  {
    path: '/ja/blog/archive',
    component: ComponentCreator('/ja/blog/archive','708'),
    exact: true
  },
  {
    path: '/ja/blog/contributing-guidlines-update',
    component: ComponentCreator('/ja/blog/contributing-guidlines-update','c16'),
    exact: true
  },
  {
    path: '/ja/blog/swiss-army-knife-for-zsh',
    component: ComponentCreator('/ja/blog/swiss-army-knife-for-zsh','c28'),
    exact: true
  },
  {
    path: '/ja/blog/tags',
    component: ComponentCreator('/ja/blog/tags','b17'),
    exact: true
  },
  {
    path: '/ja/blog/tags/codenewbie',
    component: ComponentCreator('/ja/blog/tags/codenewbie','84e'),
    exact: true
  },
  {
    path: '/ja/blog/tags/github',
    component: ComponentCreator('/ja/blog/tags/github','836'),
    exact: true
  },
  {
    path: '/ja/blog/tags/opensource',
    component: ComponentCreator('/ja/blog/tags/opensource','26a'),
    exact: true
  },
  {
    path: '/ja/blog/tags/productivity',
    component: ComponentCreator('/ja/blog/tags/productivity','c90'),
    exact: true
  },
  {
    path: '/ja/blog/tags/zsh',
    component: ComponentCreator('/ja/blog/tags/zsh','374'),
    exact: true
  },
  {
    path: '/ja/search',
    component: ComponentCreator('/ja/search','4b9'),
    exact: true
  },
  {
    path: '/ja/docs',
    component: ComponentCreator('/ja/docs','bb4'),
    routes: [
      {
        path: '/ja/docs/code',
        component: ComponentCreator('/ja/docs/code','53d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/ecosystem/annexes',
        component: ComponentCreator('/ja/docs/ecosystem/annexes','d57'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/ecosystem/annexes/bin-gem-node',
        component: ComponentCreator('/ja/docs/ecosystem/annexes/bin-gem-node','97d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/ecosystem/annexes/default-ice',
        component: ComponentCreator('/ja/docs/ecosystem/annexes/default-ice','c4a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/ecosystem/annexes/meta-plugins',
        component: ComponentCreator('/ja/docs/ecosystem/annexes/meta-plugins','0e5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/ecosystem/annexes/patch-dl',
        component: ComponentCreator('/ja/docs/ecosystem/annexes/patch-dl','b5b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/ecosystem/annexes/readurl',
        component: ComponentCreator('/ja/docs/ecosystem/annexes/readurl','0e3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/ecosystem/annexes/rust',
        component: ComponentCreator('/ja/docs/ecosystem/annexes/rust','9f9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/ecosystem/annexes/submods',
        component: ComponentCreator('/ja/docs/ecosystem/annexes/submods','809'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/ecosystem/annexes/test',
        component: ComponentCreator('/ja/docs/ecosystem/annexes/test','55d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/ecosystem/annexes/unscope',
        component: ComponentCreator('/ja/docs/ecosystem/annexes/unscope','1c3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/ecosystem/packages',
        component: ComponentCreator('/ja/docs/ecosystem/packages','9ab'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/ecosystem/plugins/modules',
        component: ComponentCreator('/ja/docs/ecosystem/plugins/modules','f82'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/ecosystem/plugins/startify',
        component: ComponentCreator('/ja/docs/ecosystem/plugins/startify','6b4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/ecosystem/plugins/zconvey',
        component: ComponentCreator('/ja/docs/ecosystem/plugins/zconvey','0e5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/gallery/collection',
        component: ComponentCreator('/ja/docs/gallery/collection','956'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/gallery/collection/completions',
        component: ComponentCreator('/ja/docs/gallery/collection/completions','556'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/gallery/collection/plugins',
        component: ComponentCreator('/ja/docs/gallery/collection/plugins','703'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/gallery/collection/programs',
        component: ComponentCreator('/ja/docs/gallery/collection/programs','b89'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/gallery/collection/services',
        component: ComponentCreator('/ja/docs/gallery/collection/services','c79'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/gallery/collection/snippets',
        component: ComponentCreator('/ja/docs/gallery/collection/snippets','10d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/gallery/collection/themes',
        component: ComponentCreator('/ja/docs/gallery/collection/themes','026'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/getting_started/installation',
        component: ComponentCreator('/ja/docs/getting_started/installation','cdf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/getting_started/migration',
        component: ComponentCreator('/ja/docs/getting_started/migration','c32'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/getting_started/overview',
        component: ComponentCreator('/ja/docs/getting_started/overview','df3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/getting_started/useage',
        component: ComponentCreator('/ja/docs/getting_started/useage','f89'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/guides/benchmark',
        component: ComponentCreator('/ja/docs/guides/benchmark','cf4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/guides/commands',
        component: ComponentCreator('/ja/docs/guides/commands','b99'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/guides/customization',
        component: ComponentCreator('/ja/docs/guides/customization','6df'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/guides/ice',
        component: ComponentCreator('/ja/docs/guides/ice','278'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/guides/ice-modifiers',
        component: ComponentCreator('/ja/docs/guides/ice-modifiers','1ef'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/guides/syntax',
        component: ComponentCreator('/ja/docs/guides/syntax','944'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ja/docs/intro',
        component: ComponentCreator('/ja/docs/intro','012'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/ja/',
    component: ComponentCreator('/ja/','4c9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
