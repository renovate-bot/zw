---
sidebar_position: 1
id: syntax
title: Syntax
image: /img/z-shell_501x501.png
description: Syntax documentation for Z-Shell ZI
keywords: [syntax, zsh, z-shell, zi]
---

```shell
zi ice …
zi load … # or zi light, zi snippet
```

:::info

It is a fundamental ZI syntax. However, a more concise, optimized syntax, called _for-syntax_, is also available.

:::

It is best presented by a real-world example:

## The `for''` syntax {#the-for-syntax}

```shell
zi as"null" wait"3" lucid for \
  sbin Fakerr/git-recall \
  sbin paulirish/git-open \
  sbin paulirish/git-recent \
  sbin davidosomething/git-my \
  make"PREFIX=$ZPFX install" iwata/git-now \
  make"PREFIX=$ZPFX" tj/git-extras
```

Above single command installs 6 plugins (Git extension packages), with the base ices `as"null" wait"3" lucid` that are common to all of the plugins and 6 plugin-specific add-on ices.

:::info

Examples of `for''` syntax

:::

Load a few useful binary (i.e.: binary packages from the GitHub Releases) utils:

```shell
zi as"null" wait"2" lucid from"gh-r" for \
  mv"exa* -> exa" sbin ogham/exa \
  mv"fd* -> fd" sbin"fd/fd" @sharkdp/fd \
  sbin"fzf" junegunn/fzf-bin
```

:::note

- `sbin''` is an ice added by the [z-a-bin-gem-node](https://github.com/z-shell/z-a-bin-gem-node) annex, it provides the command to the command line without altering `$PATH`.

- If the name of the command is the same as the name of the plugin, the ice contents can be skipped.

:::

Turbo load some plugins, without any plugin-specific ices:

```shell
zi wait lucid for \
  hlissner/zsh-autopair \
  urbainvaes/fzf-marks
```

Load two Oh My Zsh files as snippets, in Turbo:

```shell
zi wait lucid for \
  OMZ::lib/git.zsh \
  atload"unalias grv" OMZ::plugins/git/git.plugin.zsh
```

## The `make''` syntax {#the-make-syntax}

```shell
zi ice as"program" pick"$ZPFX/bin/git-*" make"PREFIX=$ZPFX"
zi light tj/git-extras
```

- `Makefile` of this project has only 2 tasks:

  1. Install the target.
  2. Build scripts that is required for installation.

- `Makefile` with 2 tasks, can use:
  1. `make"all install PREFIX=…"`,
  2. `pick'…'` will `chmod +x` all matching files and add `$ZPFX/bin/` to `$PATH`.

:::info

`$ZPFX` is provided by ZI, it is set to `~/.zi/polaris` by default. However it can changed by specifying custom `$ZPFX=` target if required.

:::

## The `bindmap''` keybindings {#the-bindmap-keybindings}

Sometimes plugins call `bindkey` to assign keyboard shortucts. This can cause problems, because multiple plugins can bind the same keys. Also, the user might want a different binding(s), which will require a complicated, additional `bindkey` commands in `.zshrc`.

ZI provides a solution to this problem – the ability to remap the bindkeys with a short ice-modifier specification with the `bindmap''` ice.

### Examples of `bindmap''` {#examples-of-bindmap}

```shell
# Map Ctrl-G instead of Ctrl-R for the history searcher.
zi bindmap'^R -> ^G' for z-shell/history-search-multi-word

# Map Ctrl-Shift-Left and …-Right used by URxvt instead of the Xterms' ones.
#
# Load with the bindkey-tracking ↔ with light-loading for anything else.
#
# Could also separate the bindmaps with a semicolon, i.e.:
# bindmap'"\\e[1\;6D" -> \\e[1\;5D ; "\\e[1\;6C" -> ^[[1\;5C' \
zi wait light-mode trackbinds bindmap'"\\e[1\;6D" -> \\e[1\;5D"' \
  bindmap'"\\e[1\;6C" -> ^[[1\;5C' pick'dircycle.zsh' for \
  michaelxmcbride/zsh-dircycle

# Map space to regular space and Ctrl-Space to the `globalias' widget, which
# expands the alias entered on the left (provided by OMZ globalias plugin).
zi bindmap='!" " -> magic-space; !"^ " -> globalias' nocompletions \
  depth=1 pick=plugins/globalias/globalias.plugin.zsh for \
  ohmyzsh/ohmyzsh
```

### Explanation {#explanation}

The `bindmap''` ice has two modes of operation: normal and exclamation-mark (`bindmap'!…'`). In the first mode, the remapping is beind done from-key to-key, i.e.: `bindmap'fromkey -> to-key'`. The given key is being changed to the second given key in the `bindkey` command that's being actually issued when loading the plugin.

In the second mode, the remapping is being done from-key to-widget, i.e.: `bindmap'!from-key -> to-widget'`. In this mode, the given key is being mapped to the given widget instead of the widget specified in the `bindkey` command,

i.e.: instead of:

```shell
bindkey "^ " magic-space
bindkey " " globalias
```

the actual call that'll be done will be:

```shell
bindkey "^ " globalias
bindkey " " magic-space
```

(for the `bindmap='!" " -> magic-space; !"^ " -> globalias'` ice).

### Using `bindmap''` In Light Mode {#using-bindmap-in-light-mode}

When the investigation mode is on – i.e.: when the full loading mode is being used (default in the `for` syntax and when `zi load …` is used) – then the `bindmap''` ice works normally. In the non-investigation, i.e.: the light mode – activated when `zi light …` or the `light-mode` ice is being used – the `bindmap''` is unavailable, unless the `trackbinds` ice is specified, i.e.:

```shell
# With use of the light-mode ice and the for-syntax:
zi light-mode trackbinds bindmap'^R -> ^G' for z-shell/history-search-multi-word

# With use of the classic syntax:
zi trackbinds bindmap'^R -> ^G' for z-shell/history-search-multi-word
zi light z-shell/history-search-multi-word
```

### Using The `UPAR`, Etc. Shorthands {#using-the-upar-etc-shorthands}

There are four special values that can be used on the left side of the bind-map: `UPAR`, `DOWNAR`, `LEFTAR`, `RIGHTAR`. They'll match up arrow, down arrow, etc. So that it's possible to do:

```shell
zi bindmap='LEFTAR -> ^F; RIGHTAR -> ^G' …
```

The benefits of using the `UPAR`, … shorthands is that they cover multiple possible cursor-key codes for each of the cursor key, so that they'll work regardless of the terminal being used.
