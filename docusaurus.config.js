// @ts-nocheck
const math = require("remark-math");
const katex = require("rehype-katex");
/*const npm2yarn = require("@docusaurus/remark-plugin-npm2yarn");*/
const TwitterSvg =
	'<svg style="fill: #1DA1F2; vertical-align: middle;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';
/** For easier Crowdin distribution Widget should be added on a CDN level, needs some additional checks */
/**const CrowdinWidget = `<script type="text/javascript" src="https://crowdin.com/js/crowdjet/crowdjet.js"></script><div id="crowdjet-container" data-project-id="494115" style="bottom: 90px; left: 20px;"></div><div id="crowdjet-expand-container" style="bottom: 10px; left: 20px;"></div>`;*/
/** @type {import('@docusaurus/types').Config} */
const config = {
	url: "https://z-shell.pages.dev",
	title: "❮ ZI ❯",
	tagline: "A Swiss Army Knife for Zsh - Unix shell",
	baseUrl: "/",
	titleDelimiter: "|",
	organizationName: "z-shell",
	projectName: "zw",
	trailingSlash: false,
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.svg",
	staticDirectories: ["static"],
	themes: ["live-codeblock"],
	plugins: [
		[
			"@docusaurus/plugin-pwa",
			{
				debug: true,
				offlineModeActivationStrategies: [
					"appInstalled",
					"standalone",
					"queryString",
				],
				pwaHead: [
					{
						tagName: "link",
						rel: "icon",
						href: "img/logo.png",
					},
					{
						tagName: "link",
						rel: "manifest",
						href: "manifest.json",
					},
					{
						tagName: "meta",
						name: "theme-color",
						content: "rgb(34, 195, 142)",
					},
					{
						tagName: "meta",
						name: "apple-mobile-web-app-capable",
						content: "yes",
					},
					{
						tagName: "meta",
						name: "apple-mobile-web-app-status-bar-style",
						content: "#000",
					},
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'img/logo.png',
            color: 'rgb(46, 184, 138)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'img/logo.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
				],
			},
		],
	],
	i18n: {
		defaultLocale: "en",
		locales: ["en", "ja"],
	},
	scripts: [],
	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
				debug: true,
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					editUrl: ({locale, versionDocsDirPath, docPath}) => {
						if (locale !== "en") {
							return `https://crowdin.com/project/z-shell-zi/${locale}`;
						}
						return `https://github.com/z-shell/zw/tree/main/${versionDocsDirPath}/${docPath}`;
					},
					editLocalizedFiles: false,
					showLastUpdateTime: true,
					showLastUpdateAuthor: true,
					remarkPlugins: [math],
					rehypePlugins: [katex],
				},
				pages: {},
				blog: {
					editUrl: ({locale, blogDirPath, blogPath}) => {
						if (locale !== "en") {
							return `https://crowdin.com/project/z-shell-zi/${locale}`;
						}
						return `https://github.com/z-shell/zw/tree/main/${blogDirPath}/${blogPath}`;
					},
					editLocalizedFiles: false,
					blogTitle: "❮ ZI ❯ Blog",
					blogDescription: "News, Changes & Updates",
					postsPerPage: "ALL",
					blogSidebarTitle: "All our posts",
				},
				sitemap: {
					changefreq: "weekly",
				},
				gtag: {
					trackingID: "G-JMKV9V825Z",
					anonymizeIP: true,
				},
			}),
		],
	],
	stylesheets: [
		{
			href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
			type: "text/css",
			integrity:
				"sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
			crossorigin: "anonymous",
		},
	],
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			announcementBar: {
				id: "announcemnt",
				content: `If you like ❮ ZI ❯, give it a ⭐️ on <a target="_blank" rel="noopener noreferrer" href="https://github.com/z-shell/zi">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/zshell_zi" >Twitter</a> ${TwitterSvg}`,
				backgroundColor: "#193C47",
				textColor: "#F5F6F7",
				isCloseable: true,
			},
			image: "img/logo/501x501.png",
			metadata: [
				{
					name: "twitter:card", content: "summary_large_image",
					name: "twitter:url", content: "https://z.digitalclouds.dev/",
					name: "twitter:title", content: "❮ ZI ❯",
					name: "twitter:description", content: "A Swiss Army Knife for Zsh - Unix shell",
					name: "twitter:image", content: "img/logo/501x501.png",
				}
			],
			autoCollapseSidebarCategories: true,
			hideableSidebar: true,
			colorMode: {
				defaultMode: "dark",
				disableSwitch: false,
				respectPrefersColorScheme: true,
				switchConfig: {
					darkIcon: "🌙",
					lightIcon: "\u2600",
					darkIconStyle: {
						marginLeft: "1px",
					},
					lightIconStyle: {
						marginLeft: "1px",
					},
				},
			},
			algolia: {
				appId: "4FTAL4NR6O",
				apiKey: "9ec9227571a8499464ac9389f1ab1616",
				indexName: "dev-z-shell",
				contextualSearch: true,
			},
			prism: {
				theme: require("prism-react-renderer/themes/github"),
				darkTheme: require("prism-react-renderer/themes/dracula"),
				defaultLanguage: "shell",
			},
			liveCodeBlock: {
				playgroundPosition: "bottom",
			},
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 6,
			},
			navbar: {
				hideOnScroll: true,
				title: "❮ ZI ❯",
				logo: {
					alt: "ZI Logo",
					src: "img/logo.svg",
					width: 32,
					height: 32,
				},
				items: [
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "Docs",
					},
					{
						type: "localeDropdown",
						position: "right",
						dropdownItemsAfter: [
							{
								href: "https://github.com/z-shell/zw/discussions/73",
								label: "Help Us Translate",
							},
						],
					},
					{
						href: "https://github.com/z-shell/zi",
						position: "right",
						className: "header-github-link",
						"aria-label": "GitHub repository",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "More",
						items: [
							{
								label: "Introduction",
								to: "docs/intro",
							},
							{
								label: "News & Blog",
								to: "blog",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "Github Discussions",
								href: "https://github.com/z-shell/zi/discussions",
							},
							{
								label: "Crowdin Translations",
								href: "https://crowdin.com/project/z-shell-zi/discussions",
							},
						],
					},
					{
						title: "Social",
						items: [
							{
								label: "GitHub",
								href: "https://github.com/z-shell",
							},
							{
								label: "Twitter",
								href: "https://twitter.com/zshell_zi",
							},
							/**{ html: ``, },*/
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Z-Shell ZI, Community.`,
			},
		}),
};

module.exports = config;
