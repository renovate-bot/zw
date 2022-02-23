---
title: ✍️ Syntax
image: zw/logo/501x501.png
description: ZI Syntax
keywords:
  - syntax
  - how-to-use
---

## The fundamental syntax

```shell
zi …
zi ice …
zi load …
zi light …
zi unload …
zi snippet …
```

## The `for` syntax

The `for` [syntax][1] is a more concise and more optimized.

It is best presented by a real-world example:

```shell
zi as"null" wait"3" lucid for \
  sbin Fakerr/git-recall \
  sbin paulirish/git-open \
  sbin paulirish/git-recent \
  sbin davidosomething/git-my \
  make"PREFIX=$ZPFX install" iwata/git-now \
  make"PREFIX=$ZPFX" tj/git-extras
```

Above single command installs 6 plugins ([git extension][2] packages), with the base ices `as"null" wait"3" lucid` that are common to all of the plugins and 6 plugin-specific add-on ices.

### Use cases of `for` syntax

Load a few useful binary packages from the [GitHub releases][3], utils:

```shell
zi as"null" wait"2" lucid from"gh-r" for \
  mv"exa* -> exa" sbin ogham/exa \
  mv"fd* -> fd" sbin"fd/fd" @sharkdp/fd \
  sbin"fzf" junegunn/fzf
```

:::note

- `sbin'…'` is an [ice][4] added by the [bin-gem-node][5] [annex][6], it provides the command to the command line without altering `$PATH`.
- If the name of the command is the same as the name of the plugin, the ice contents can be skipped.

:::

[Turbo][7] load some plugins, without any plugin-specific ices:

```shell
zi wait lucid for \
  hlissner/zsh-autopair \
  urbainvaes/fzf-marks
```

Load two [Oh My Zsh][8] files as [snippets][9], in turbo mode:

```shell
zi wait lucid for \
  OMZ::lib/git.zsh \
  atload"unalias grv" OMZ::plugins/git/git.plugin.zsh
```

## The `make'…'` syntax

```shell
zi ice as"program" pick"$ZPFX/bin/git-*" make"PREFIX=$ZPFX"
zi light tj/git-extras
```

The `Makefile` of the project above has only 2 tasks:

1. Install the target.
2. Build scripts that is required for installation.

The `Makefile` with 2 tasks, can use:

1. `make"all install PREFIX=…"`,
2. `pick'…'` will `chmod +x` all matching files and add `$ZPFX/bin/` to `$PATH`.

:::info

`$ZPFX` is provided by ZI, it is set to `~/.zi/polaris` by default.

However it can changed by specifying custom `$ZPFX=` target if required.

More information: [guides/customization][10]

:::

## The `bindmap'…'` keybindings

Sometimes plugins call [bindkey][11] to assign keyboard shortucts. This can cause problems, because multiple plugins can bind the same keys.

Also, the user might want a different binding(s), which will require a complicated, additional `bindkey` commands in `.zshrc`.

ZI provides a solution to this problem – the ability to remap the bindkeys with a short [ice-modifier][12] specification with the `bindmap'…'` [ice][13].

### Examples for `bindmap'…'`

Map Ctrl-G instead of Ctrl-R for the history searcher.

```shell
zi bindmap'^R -> ^G' for z-shell/history-search-multi-word

```

Map Ctrl-Shift-Left and …-Right used by URxvt instead of the Xterms' ones. Load with the bindkey-tracking ↔ with light-loading for anything else.

```shell
# Could also separate the bindmaps with a semicolon, i.e.:
# `bindmap'"\\e[1\;6D" -> \\e[1\;5D ; "\\e[1\;6C" -> ^[[1\;5C' \`

zi wait light-mode trackbinds bindmap'"\\e[1\;6D" -> \\e[1\;5D"' \
  bindmap'"\\e[1\;6C" -> ^[[1\;5C' pick'dircycle.zsh' for \
  michaelxmcbride/zsh-dircycle
```

Map space to regular space and Ctrl-Space to the `globalias' widget, which expands the alias entered on the left (provided by OMZ globalias plugin).

```shell
zi bindmap='!" " -> magic-space; !"^ " -> globalias' nocompletions \
  depth=1 pick=plugins/globalias/globalias.plugin.zsh for \
  ohmyzsh/ohmyzsh
```

### Explanation

The `bindmap'…'` ice has two modes of operation: normal and exclamation-mark (`bindmap'!…'`).

In the first mode, the remapping is beind done from-key to-key, i.e.: `bindmap'fromkey -> to-key'`.

The given key is being changed to the second given key in the `bindkey` command that's being actually issued when loading the plugin.

In the second mode, the remapping is being done from-key to-widget, e.g: `bindmap'!from-key -> to-widget'`.

In this mode, the given key is being mapped to the given widget instead of the widget specified in the `bindkey` command e.g.:

Instead of:

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

### Using `bindmap'…'` in light mode

When the investigation mode is on i.e.:

- when the full loading mode is being used (default in the `for` syntax and when `zi load …` is used) – then the `bindmap'…'` ice works normally.

In the non-investigation, i.e.:

- the [light mode][14] – activated when `zi light …` or the `light-mode` ice is being used – the `bindmap'…'` is unavailable, unless the `trackbinds` ice is specified, e.g:

```shell
# With use of the light-mode ice and the for-syntax:
zi light-mode trackbinds bindmap'^R -> ^G' for z-shell/history-search-multi-word

# With use of the classic syntax:
zi trackbinds bindmap'^R -> ^G' for z-shell/history-search-multi-word
zi light z-shell/history-search-multi-word
```

### Using the <kbd>UPAR</kbd> shorthands

There are four special values that can be used on the left side of the bind-map: <kbd>UPAR</kbd>, <kbd>DOWNAR</kbd>, <kbd>LEFTAR</kbd>, <kbd>RIGHTAR</kbd>. They'll match up arrow, down arrow, etc. So that it's possible to do:

```shell
zi bindmap='LEFTAR -> ^F; RIGHTAR -> ^G' …
```

The benefits of using the <kbd>UPAR</kbd>, … shorthands is that they cover multiple possible cursor-key codes for each of the cursor key, so that they'll work regardless of the terminal being used.

[1]: /search/?q=syntax
[2]: /search/?q=git+ext
[3]: /search/?q=GH-R
[4]: /search/?q=ice
[5]: /search/?q=bin+gem+node
[6]: /search/?q=annex
[7]: /search/?q=turbo+mode
[8]: /search/?q=oh+my+zsh
[9]: /search/?q=snippets
[10]: /docs/guides/customization
[11]: /search/?q=binkey
[12]: /search/?q=ice+modifier
[13]: /docs/guides/ice
[14]: /search/?q=light+mode
