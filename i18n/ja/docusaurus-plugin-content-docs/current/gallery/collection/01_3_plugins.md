---
id: plugins
title: Plugins
sidebar_position: 3
description: Plugins Collection
keywords: [collection, plugins, zsh, z-shell, zi]
---

:::info

Related:

1. [Usage: Turbo and Lucid](../../getting_started/useage#turbo-and-lucid)
2. [Syntax: The `for` syntax](../../guides/syntax#the-for-syntax)
3. [Guides: Ice Syntax](../../guides/ice)
4. [Guides: Ice Modifiers](../../guides/ice-modifiers)
5. [Compiling programs](../../gallery/collection#compiling-programs)
6. [Customizing paths](../../guides/customization#customizing-paths)
7. [The Ice modifiers by `bin-gem-node` annex](../../ecosystem/annexes/bin-gem-node#the-ice-modifiers-provided-by-the-annex)

:::

:::tip

Most plugins loaded in turbo mode, adjust loading order by appending e.g:

```shell
zi ice wait'0a' lucid ...
zi light ...

zi ice wait'0b' lucid ...
zi light ...

zi ice wait'0c' lucid ...
zi light ...
```

Create your own syntax e.g:

```shell
# Common ICE modifiers

z_lucid() {
# ver'master' - to select specific versionor branch . Remove it if not required.
zi ice lucid ver'master' "$@"
}

zi0a() {
z_lucid wait'0a' "$@"
}

zi0b() {
z_lucid wait'0b' "$@"
}

zi0c() {
z_lucid wait'0c' "$@"
}
```

Then load as:

```shell
zi0a
zi light ...

zi0b
zi light ...

zi0c
zi light ...
```

:::

## Without [`for`](../../guides/syntax#the-for-syntax) syntax {#without-for-syntax}

### [trapd00r/LS_COLORS](https://github.com/trapd00r/LS_COLORS) {#trapd00rls_colors}

```shell
# ogham/exa also uses the definitions
zi ice wait lucid reset \
  atclone"local P=${${(M)OSTYPE:#*darwin*}:+g}
    \${P}sed -i \
    '/DIR/c\DIR 38;5;63;1' LS_COLORS; \
    \${P}dircolors -b LS_COLORS > c.zsh" \
  atpull'%atclone' pick"c.zsh" nocompile'!' \
  atload'zstyle ":completion:*" list-colors “${(s.:.)LS_COLORS}”'
zi light trapd00r/LS_COLORS
```

### [paoloantinori/hhighlighter](https://github.com/paoloantinori/hhighlighter) {#paoloantinorihhighlighter}

```shell
zi ice wait lucid pick"h.sh"
zi light paoloantinori/hhighlighter
```

### [wfxr/forgit](https://github.com/wfxr/forgit) {#wfxrforgit}

```shell
zi ice wait lucid
zi load wfxr/forgit
```

### [urbainvaes/fzf-marks](https://github.com/urbainvaes/fzf-marks) {#urbainvaesfzf-marks}

```shell
zi ice wait lucid
zi load urbainvaes/fzf-marks
```

### [hlissner/zsh-autopair](https://github.com/hlissner/zsh-autopair) {#hlissnerzsh-autopair}

```shell
zi ice wait lucid pick'autopair.zsh'
zi load hlissner/zsh-autopair
```

### [voronkovich/gitignore.plugin.zsh](https://github.com/voronkovich/gitignore.plugin.zsh) {#voronkovichgitignorepluginzsh}

```shell
zi ice wait lucid
zi load voronkovich/gitignore.plugin.zsh
```

### [xPMo/zsh-toggle-command-prefix](https://github.com/xPMo/zsh-toggle-command-prefix) {#xpmozsh-toggle-command-prefix}

```shell
zi ice wait lucid
zi light xPMo/zsh-toggle-command-prefix
```

### [leonjza/history-here](https://github.com/leonjza/history-here) {#leonjzahistory-here}

```shell
zi ice wait lucid
zi light leonjza/history-here
```

### [hkbakke/bash-insulter](https://github.com/hkbakke/bash-insulter) {#hkbakkebash-insulter}

```shell
zi ice wait lucid pick'src/bash.command-not-found'
zi light hkbakke/bash-insulter
```

### [leophys/zsh-plugin-fzf-finder](https://github.com/leophys/zsh-plugin-fzf-finder) {#leophyszsh-plugin-fzf-finder}

```shell
zi ice wait lucid has'fzf' pick'fzf-finder.plugin.zsh'
zi light leophys/zsh-plugin-fzf-finder
```

### [autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) & [fast-syntax-highlighting](https://github.com/z-shell/F-Sy-H) {#autosuggestions--fast-syntax-highlighting}

```shell
zi ice wait lucid atinit"ZI[COMPINIT_OPTS]=-C; zpcompinit; zpcdreplay"
zi light z-shell/F-Sy-H

zi ice wait lucid atload"!_zsh_autosuggest_start"
zi load zsh-users/zsh-autosuggestions
```

### [z-shell/zsh-github-issues](https://github.com/z-shell/zsh-github-issues) {#z-shellzsh-github-issues}

```shell
# Github-Issue-Tracker – the notifier thread
zi ice lucid id-as"GitHub-notify" on-update-of"~/.cache/zsh-github-issues/new_titles.log" \
  notify"New issue: $NOTIFY_MESSAGE"
zi light z-shell/zsh-github-issues
```

### [zsh-shell/zsh-startify](https://github.com/z-shell/zsh-startify) {#zsh-shellzsh-startify}

```shell
zi ice wait lucid atload"zsh-startify"
zi load z-shell/zsh-startify
```

### [z-shell/declare-zsh](https://github.com/z-shell/declare-zsh) {#z-shelldeclare-zsh}

```shell
zi ice wait lucid
zi load z-shell/declare-zsh
```

### [z-shell/zsh-navigation-tools](https://github.com/z-shell/zsh-navigation-tools) {#z-shellzsh-navigation-tools}

```shell
zi ice wait lucid
zi load z-shell/zsh-navigation-tools
```

### [z-shell/H-S-MW](https://github.com/z-shell/H-S-MW) {#z-shellh-s-mw}

```shell
zstyle ":history-search-multi-word" page-size "11"
zi ice wait lucid
zi load z-shell/H-S-MW
```

### [z-shell/zui](https://github.com/z-shell/zui) & [z-shell/zi-crasis](https://github.com/z-shell/zi-crasis) {#z-shellzui--z-shellzi-crasis}

```shell
zi ice wait lucid
zi load z-shell/zui

zi ice wait"[[ -n ${ZLAST_COMMANDS[(r)cra*]} ]]" lucid
zi load z-shell/zi-crasis
```

### [z-shell/zredis](https://github.com/z-shell/zredis) {#z-shellzredis}

```shell
# zredis together with some binding/tying – defines the variable $rdhash
zstyle ":plugin:zredis" configure_opts "--without-tcsetpgrp"
zstyle ":plugin:zredis" cflags "-Wall -O2 -g -Wno-unused-but-set-variable"

zi ice wait lucid atload"ztie -d db/redis -a 127.0.0.1:4815/5 -zSL main rdhash"
zi load z-shell/zredis
```

## With [`for`](../../guides/syntax#the-for-syntax) syntax {#with-for-syntax}

### [pemistahl/grex](https://github.com/pemistahl/grex) from GitHub releases {#pemistahlgrex-from-github-releases}

```shell
# A command-line tool and library for generating regular expressions from user-provided test cases.
zi wait lucid for as"command" from"gh-r" sbin"grex" \
    pemistahl/grex
```

### [stedolan/jq](https://github.com/stedolan/jq) {#stedolanjq}

```shell
zi wait lucid for atclone"autoreconf -fi \
&& ./configure --with-oniguruma=builtin && make && ln -sfv $PWD/jq.1 $ZPFX/man/man1" \
  as"null" if"(( ! ${+commands[jq]} ))" sbin"jq" \
    stedolan/jq
```

### [ahmetb/kubectx](https://github.com/ahmetb/kubectx) from GitHub releases {#ahmetbkubectx-from-github-releases}

```shell
zi wait lucid for bpick"kubectx;kubens" from"gh-r" \
  sbin"kubectx;kubens" \
    ahmetb/kubectx
```

### [github/git-sizer](https://github.com/github/git-sizer) from GitHub releases {#githubgit-sizer-from-github-releases}

```shell
# Compute various size metrics for a Git repository, flagging those that might cause problems.
zi wait lucid for as"command" bpick"${bpick}" from"gh-r" sbin"git-sizer" \
    @github/git-sizer
```
