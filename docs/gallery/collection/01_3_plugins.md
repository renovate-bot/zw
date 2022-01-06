---
id: plugins
title: Plugins
sidebar_position: 3
description: Plugins Collection
keywords: [collection, plugins, zsh, z-shell, zi]
---

### [dandavison/delta](https://github.com/dandavison/delta) {#dandavisondelta}

```shell
zi ice lucid from"gh-r" sbin"**/delta -> delta"
zi light dandavison/delta
```

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

### [molovo/revolver](https://github.com/molovo/revolver) {#molovorevolver}

```shell
zi ice wait lucid as"program" pick"revolver"
zi light molovo/revolver
```

### [zunit-zsh/zunit](https://github.com/zunit-zsh/zunit) {#zunit-zshzunit}

```shell
zi ice wait lucid as"program" pick"zunit" atclone"./build.zsh" atpull"%atclone"
zi load @zunit-zsh/zunit
```

### Install revolver and zunit using for syntax {#install-revolver-and-zunit-using-for-syntax}

```shell
zi for \
  as"program" atclone"ln -sfv revolver.zsh-completion _revolver" \
  atpull"%atclone" pick"revolver" \
    @molovo/revolver \
  as"completion" atclone"./build.zsh; ln -sfv zunit.zsh-completion _zunit" \
  atpull"%atclone" sbin"zunit" \
    @zunit-zsh/zunit
```

### [tj/git-extras](https://github.com/tj/git-extras) {#tjgit-extras}

```shell
zi ice as"program" pick"$ZPFX/bin/git-*" make"PREFIX=$ZPFX" nocompile
zi light tj/git-extras
```

### [Osse/git-scripts/git-unique](https://github.com/Osse/git-scripts/blob/master/git-unique) {#ossegit-scriptsgit-unique}

```shell
zi ice as"program" id-as"git-unique" pick"git-unique"
zi snippet https://github.com/Osse/git-scripts/blob/master/git-unique
```

### [k4rthik/git-cal](https://github.com/k4rthik/git-cal) {#k4rthikgit-cal}

```shell
zi ice as"program" atclone"perl Makefile.PL PREFIX=$ZPFX" \
  atpull"%atclone" make"install" pick"$ZPFX/bin/git-cal"
zi light k4rthik/git-cal
```

### [mfaerevaag/wd](https://github.com/mfaerevaag/wd) {#mfaerevaagwd}

```shell
zi ice as"program" cp"wd.sh -> wd" mv"_wd.sh -> _wd" \
    atpull'!git reset --hard' pick"wd"
zi light mfaerevaag/wd
```

### [obihann/archey-osx](https://github.com/obihann/archey-osx) {#obihannarchey-osx}

```shell
zi ice as"program" pick"bin/archey"
zi light obihann/archey-osx
```

### [stedolan/jq](https://github.com/stedolan/jq) {#stedolanjq}

```shell
zi for atclone"autoreconf -fi \
&& ./configure --with-oniguruma=builtin && make && ln -sfv $PWD/jq.1 $ZPFX/man/man1" \
  as"null" if"(( ! ${+commands[jq]} ))" lucid \
  sbin"jq" wait \
    stedolan/jq
```

### [ahmetb/kubectx](https://github.com/ahmetb/kubectx) {#ahmetbkubectx}

```shell
zi for bpick"kubectx;kubens" from"gh-r" light-mode \
  sbin"kubectx;kubens" wait \
    ahmetb/kubectx
```

### [github/git-sizer](https://github.com/github/git-sizer) {#githubgit-sizer}

```shell
# Compute various size metrics for a Git repository, flagging those that might cause problems.
zi for as"command" bpick"${bpick}" from"gh-r" \
  sbin"git-sizer" \
    @github/git-sizer
```

### [pemistahl/grex](https://github.com/pemistahl/grex) {#pemistahlgrex}

```shell
# A command-line tool and library for generating regular expressions from user-provided test cases.
zi for as"command" from"gh-r" sbin"grex" \
    pemistahl/grex
```

### [paoloantinori/hhighlighter](https://github.com/paoloantinori/hhighlighter) {#paoloantinorihhighlighter}

```shell
zi ice pick"h.sh"
zi light paoloantinori/hhighlighter
```

### [wfxr/forgit](https://github.com/wfxr/forgit) {#wfxrforgit}

```shell
zi ice wait lucid
zi load wfxr/forgit
```

### [z-shell/zsh-diff-so-fancy](https://github.com/z-shell/zsh-diff-so-fancy) {#z-shellzsh-diff-so-fancy}

```shell
zi ice wait lucid as"program" pick"bin/git-dsf"
zi load z-shell/zsh-diff-so-fancy
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

### [urbainvaes/fzf-marks](https://github.com/urbainvaes/fzf-marks) {#urbainvaesfzf-marks}

```shell
zi ice wait lucid
zi load urbainvaes/fzf-marks
```

### [hlissner/zsh-autopair](https://github.com/hlissner/zsh-autopair) {#hlissnerzsh-autopair}

```shell
zi ice wait lucid
zi load hlissner/zsh-autopair
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

### [voronkovich/gitignore.plugin.zsh](https://github.com/voronkovich/gitignore.plugin.zsh) {#voronkovichgitignorepluginzsh}

```shell
zi ice wait lucid
zi load voronkovich/gitignore.plugin.zsh
```

### [Autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) & [fast-syntax-highlighting](https://github.com/z-shell/F-Sy-H) {#autosuggestions--fast-syntax-highlighting}

```shell
zi ice wait lucid atinit"ZI[COMPINIT_OPTS]=-C; zpcompinit; zpcdreplay"
zi light z-shell/F-Sy-H

zi ice wait lucid atload"!_zsh_autosuggest_start"
zi load zsh-users/zsh-autosuggestions
```

### [z-shell/zredis](https://github.com/z-shell/zredis) {#z-shellzredis}

```shell
# zredis together with some binding/tying – defines the variable $rdhash
zstyle ":plugin:zredis" configure_opts "--without-tcsetpgrp"
zstyle ":plugin:zredis" cflags "-Wall -O2 -g -Wno-unused-but-set-variable"
zi ice wait lucid \
  atload"ztie -d db/redis -a 127.0.0.1:4815/5 -zSL main rdhash"
zi load z-shell/zredis
```

### [z-shell/zsh-github-issues](https://github.com/z-shell/zsh-github-issues) {#z-shellzsh-github-issues}

```shell
# Github-Issue-Tracker – the notifier thread
zi ice lucid id-as"GitHub-notify" \
  on-update-of"~/.cache/zsh-github-issues/new_titles.log" \
  notify"New issue: $NOTIFY_MESSAGE"
zi light z-shell/zsh-github-issues
```
