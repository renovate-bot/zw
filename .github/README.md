<h1 align="center">
  <a href="https://github.com/z-shell/zi">
    <img src="https://github.com/z-shell/zi/raw/main/docs/images/logo.svg" alt="Logo" width="80" height="80">
  </a>
❮ ZI ❯ Wiki Pages
</h1><div align="center">

[![Tweet][twitter-badge]][twitter-link] [![Visual Studio Code](https://img.shields.io/badge/--007ACC?logo=visual%20studio%20code&logoColor=ffffff)](https://open.vscode.dev/z-shell/z-shell.pages.dev)

<a href="https://github.com/z-shell/zi/issues/new?assignees=&labels=bug+%F0%9F%90%9E&template=01_bug_report.yml&title=bug%3A+">《 Report an issue 》</a>
· <a href="https://github.com/z-shell/z-shell.pages.dev/issues/new?assignees=&labels=documentation+%F0%9F%92%A1&template=01_request_documentation.yml&title=feat%3A+">《 Request a documentation 》</a>
· <a href="https://github.com/z-shell/zi/discussions">《 Ask a Question 》</a>
</div>

## Deployments

Cloudflare's global network: [z-shell.pages.dev](https://z-shell.pages.dev)
  - Preview branches (`<hash>.z-shell.pages.dev`): **All non-Production branches**
  - Production branch: **main**
  
Aliased to the above (improved SEO): [z.digitalclouds.dev](https://z.digitalclouds.dev)
  - Preview deployments: **develop**
  - Production branch: **main**
  
<!-- Github pages: [zw.digitalclouds.dev](https://zw.digitalclouds.dev)
  - Preview, develop, test branch: **gh-pages**
  - Deploy with: `yarn deploy` -->

## 🥇 Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/lunarxlark"><img src="https://avatars.githubusercontent.com/u/18758150?v=4?s=80" width="80px;" alt=""/><br /><sub><b>lunarxlark</b></sub></a><br /><a href="#translation-lunarxlark" title="Translation">🌍</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any kind of contributions you make will benefit everybody else and are greatly appreciated!

## Development

### Guidelines

> General [contributing guidelines](https://github.com/z-shell/zi/blob/main/docs/CONTRIBUTING.md) for the [Z-Shell](https://github.com/z-shell) organization.

#### [1]: Any changes made will be crawled `every day at 01:10 am (UTC)` and reflected in the search.

When referring to something that might need additional information - it has to be linked to a search or a specific place in a wiki e.g:

**Files under** `docs/`: 

- `[load plugin](/search/?q=load+plugin)` - result: [load plugin](https://z-shell.pages.dev/search/?q=load+plugin)), 

**Files under** `i18/[locale]/docusaurus-plugin-content-docs/current`:

- `[ice コマンドは](/ja/search?q=ice+コマンドは)` - result: [ice コマンドは](https://z-shell.pages.dev/ja/search?q=ice+%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%81%AF)), 

  - It is required at least once for the first mentioning on a page.
  - If the link of the first mentioning exists, then it can be ignored.
  - If there is no additional information, when it has to be created and documented.

#### Translations

- [Tutorial](https://docusaurus.io/docs/i18n/tutorial)
- [Crowdin](https://docusaurus.io/docs/2.0.0-beta.14/i18n/crowdin)
- [i18n](https://docusaurus.io/docs/i18n/introduction)

### Installation

```shell
yarn
```

### Local Development

For all available commands please see: [docusaurus cli commands](https://docusaurus.io/docs/cli#docusaurus-cli-commands)

```shell
yarn start

# Specify available locale
yarn start --locale ja
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```shell
yarn build
```

### Serve built directory

```shell
yarn serve
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### [Cloudflare Pages](https://developers.cloudflare.com/pages/)

ZI Wiki is powered by Cloudflare Pages.
Pages are super fast, always up-to-date, and deployed directly from GitHub account.

#### Redirects

Customize where your visitors get routed when a request is made. Easily define temporary or permanent redirect rules using a `static/_redirects` file. Any changes to this file will be applied to the next deployment.

Creating redirects example:

```
/home301  /  301
/home302  /  302
/querystrings  /?query=string  301
```

Format:

```
[source] [destination] [code?]
```

#### Headers

Define outgoing HTTP response headers for static or dynamic URLs within a `static/_headers` file.
Any changes to this file will be applied to the next deployment.

Attaching headers example:

```
/secure/page
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: no-referrer

/static/*
  Access-Control-Allow-Origin: *
  X-Robots-Tag: nosnippet

https://z-shell.pages.dev/*
  X-Robots-Tag: noindex
```

Format:
```
[url]
  [name]: [value]
```

[twitter-badge]: https://badgen.net/badge/icon/twitter?icon=twitter&label
[twitter-acc]: https://twitter.com/zshell_zi
[twitter-link]: https://twitter.com/intent/tweet?text=A%20Swiss%20Army%20Knife%20for%20Zsh%20-%20Unix%20shell%20%20@zshell_zi&url=https://github.com/z-shell/zi&hashtags=zsh,zi,zshell
