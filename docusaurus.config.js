// @ts-nocheck
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const TwitterSvg =
  '<svg style="fill: #1DA1F2; vertical-align: middle;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '❮ ZI ❯',
  tagline: 'A Swiss Army Knife for Zsh Unix shell',
  url: 'https://z.digitalclouds.dev',
  baseUrl: '/',
  titleDelimiter: '|',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/zw/favicon.ico',
  projectName: 'zw',
  organizationName: 'z-shell',
  staticDirectories: ['static'],
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        /* https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-pwa#configuration */
        debug: false,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/zw/logo.svg',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/zw/manifest.json',
          },
          {
            tagName: 'link',
            rel: 'browserconfig',
            href: '/zw/browserconfig.xml',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(34, 195, 142)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/zw/logo.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/zw/logo.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
    [
      /** @type {import("@docusaurus/plugin-content-docs").ContentDocsPluginOptions} */
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        editUrl: ({locale, versionDocsDirPath, docPath}) => {
          if (locale !== 'en') {
            return `https://digitalclouds.crowdin.com/z-shell/${locale}`;
          } /* If locale NOT en (English), then redirect to translation files (Crowdin) */
          return `https://github.com/z-shell/zw/tree/main/${versionDocsDirPath}/${docPath}`;
        },
        sidebarPath: require.resolve('./lib/js/sidebars_2.js'),
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image#configuration
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and maxm (inclusive)
        disableInDev: false,
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'ja', 'ko'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        debug: true,
        docs: {
          path: 'docs',
          breadcrumbs: true,
          sidebarPath: require.resolve('./lib/js/sidebars_1.js'),
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            if (locale !== 'en') {
              return `https://digitalclouds.crowdin.com/z-shell/${locale}`;
            } /* If locale NOT en (English), then redirect to translation files (Crowdin) */
            return `https://github.com/z-shell/zw/tree/main/${versionDocsDirPath}/${docPath}`;
          },
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: ({locale, blogDirPath, blogPath, permalink}) => {
            if (locale !== 'en') {
              return `https://digitalclouds.crowdin.com/z-shell/${locale}`;
            } /* If locale NOT en (English), then redirect to translation files (Crowdin) */
            return `https://github.com/z-shell/zw/tree/main/${blogDirPath}/${blogPath}`;
          } /* If locale IS en (English), then redirect to latest source files. (GitHub) */,
        },
        pages: {
          /* https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-pages#configuration */
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
        },
        gtag: {
          trackingID: 'G-MT10GVL59X',
          anonymizeIP: true,
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'zw/logo/320x320.png',
      announcementBar: {
        id: 'announcemnt',
        content: `If you like ❮ ZI ❯, give it a ⭐️ on <a target="_blank" rel="noopener noreferrer" href="https://github.com/z-shell/zi">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" className='TwitterSvg' href="https://twitter.com/zshell_zi" >Twitter</a> ${TwitterSvg}`,
        backgroundColor: '#193C47',
        textColor: '#F5F6F7',
        isCloseable: true,
      },
      algolia: {
        appId: '4FTAL4NR6O',
        apiKey: '9ec9227571a8499464ac9389f1ab1616',
        indexName: 'dev-z-shell',
        contextualSearch: true,
      },
      metadata: [{name: 'twitter:card', content: 'summary'}],
      autoCollapseSidebarCategories: true,
      hideableSidebar: true,
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
        switchConfig: {
          darkIcon: '🌙',
        },
      },
      navbar: {
        hideOnScroll: true,
        title: '❮ ZI ❯',
        logo: {
          alt: '❮ ZI ❯ Logo',
          src: 'zw/logo.svg',
          target: '_self',
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},*/
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                href: 'https://digitalclouds.crowdin.com/z-shell',
                label: 'Help Us Translate',
              },
            ],
          },
          /**{
              type: 'docsVersionDropdown',
              position: 'right',
          },*/
          {
            href: 'https://github.com/z-shell/',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Community',
                to: '/community/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/z-shell/community/discussions',
              },
              {
                label: 'Matrix.org',
                href: 'https://matrix.to/#/#zi:matrix.org',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/zshell_zi/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/z-shell/',
              },
              {
                label: 'Crowdin',
                href: 'https://digitalclouds.crowdin.com/z-shell/',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy Policy',
                to: 'legal/privacy_policy/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Digital Clouds, Z-Shell ❮ ZI ❯ Community.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
    }),
};

module.exports = config;
