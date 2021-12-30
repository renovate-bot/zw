// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '❮ ZI ❯',
  tagline: 'A Swiss Army Knife for Zsh - Unix shell.',
  url: 'https://z-shell.pages.dev',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.svg',
  deploymentBranch: 'cloudflare',
  organizationName: 'z-shell',
  projectName: 'zi',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/z-shell/z-shell.pages.dev/tree/main',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/z-shell/z-shell.pages.dev/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
    metadata: [{name: 'twitter:card', content: 'summary'}],
	announcementBar: {
		id: 'announcementBar-2',
		content: `⭐️ If you like Z-Shell ZI, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/z-shell/zi">GitHub</a>`,
    },
	algolia: {
		appId: '9MWZG6YTZH',
        apiKey: '25296a50114a93564278103ec825b069',
        indexName: 'dev-z-shell',
        contextualSearch: true,
    },
    hideableSidebar: false,
    colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
	},
	navbar: {
        title: '❮ ZI ❯',
        logo: {
          alt: 'ZI Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Wiki',
          }
//          {to: '/blog', label: 'Blog', position: 'left'},
//          {
//            href: 'https://github.com/z-shell/zi',
//            label: 'GitHub',
//            position: 'right',
//          },
        ],

	  },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Knowledge base:',
            items: [
              {
                label: 'ZI Wiki',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github Discussions',
                href: 'https://github.com/z-shell/zi/discussions',
              },
            ],
          },
          {
            title: 'More',
            items: [
//             {
//                label: 'Blog',
//                to: '/blog',
//              },
              {
                label: 'GitHub',
                href: 'https://github.com/z-shell/zi',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Z-Shell ZI, Community.`,
      },
	  plugins: [
		[
		'@docusaurus/plugin-sitemap',
		{
		  changefreq: 'weekly',
		  priority: 0.5,
		  trailingSlash: false,
		},
		],
	  ],
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
