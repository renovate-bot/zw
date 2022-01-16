<h2 align="center">
  <a href="https://github.com/z-shell/zi">
    <img src="https://github.com/z-shell/zi/raw/main/docs/images/logo.svg" alt="Logo" width="80" height="80">
  </a>
❮ ZI ❯ Wiki Pages
</h2>

- [https://z-shell.pages.dev](https://z-shell.pages.dev)
- [https://z.digitalclouds.dev](https://z.digitalclouds.dev)

## Development

### Guidelines

When referring to something that might need additional information - it has to be linked to a search or a specific place in a wiki.

- `[load plugin](/search/?q=load+plugin)` which will result: [load plugin](https://z-shell.pages.dev/search/?q=load+plugin)). 
  - It is required at least once for the first mentioning on a page.
  - If the link of the first mentioning exists, then it can be ignored.
  - If there is no additional information, when it has to be created and documented.

#### Translations

- [Tutorial](https://docusaurus.io/docs/i18n/tutorial)
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
