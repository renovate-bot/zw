---
slug: /gallery/collection
title: 🔺 Collection Guide
sidebar_position: 1
image: /img/z-shell_501x501.png
description: The gallery of invocations
keywords: [collection, zsh, z-shell, zi]
---

import APITable from '@site/src/components/APITable';

:::info

Some installations may require additional functionally, it can be done by installing required annexes as meta plugin:

```shell
zi light-mode for z-shell/z-a-meta-plugins @annexes
```

More info: [ecosystem/annexes](../ecosystem/annexes)

:::

## Header pefixed tags {#header-pefixed-tags}

For the [search](https://z-shell.pages.dev/search/?q=GH-R), prefixed tags helps as minimal description to the visible results.

<APITable>

| Tag name | Install type                            |
| -------- | --------------------------------------- |
| GH-R     | GitHub release                          |
| SC       | Script                                  |
| B        | Build                                   |
| RA       | [Rust Annex](../ecosystem/annexes/rust) |
| THP      | Theme / Prompt                          |
| COMP     | Completion                              |

</APITable>

:::tip Additional installation methods

1. [Meta plugins](../ecosystem/annexes/meta-plugins)
2. [Packages](../ecosystem/packages)

:::

:::note

- [Report issues](https://github.com/z-shell/zi/issues/new/choose)
- [Suggestions](https://github.com/z-shell/zi/discussions/categories/ideas)

Any contributions you make will benefit everybody else and are greatly appreciated.

:::

## Quick overview of invocations {#quick-overview-of-invocations}

### Minimal {#minimal}

#### With [Turbo mode](../getting_started/overview#turbo-mode-zsh--53) (i.e. no `wait` ice) and with [`for`](../guides/syntax#the-for-syntax) syntax: {#with-turbo-mode-ie-no-wait-ice-and-with-for-syntax}

```shell title=~/.zshrc
zi wait lucid light-mode for \
  atinit"zicompinit; zicdreplay" \
    z-shell/F-Sy-H \
  atload"_zsh_autosuggest_start" \
    zsh-users/zsh-autosuggestions \
  blockf atpull'zi creinstall -q .' \
    zsh-users/zsh-completions
```

<APITable>

| Syntax | Description |
| --- | :-- |
| `wait` |  Load 0 seconds (about 5 ms exactly) after prompt ([Turbo mode](../getting_started/overview#turbo-mode-zsh--53)). |
| `lucid` | Silence the under-prompt messages ("`Loaded {name of the plugin}`"). |
| `light-mode` | Load the plugin in `light` mode, in which the tracking of plugin (i.e. activity report gathering, accessible via the `zi report {plugin-name}` subcommand) is being disabled; note that for Turbo mode, the performance gains are almost `0`, so in this mode, you can load all plugins with the tracking, i.e.: the `light-mode` ice can be removed from the command. |
| `atpull'…'` | Execute after updating the plugin – the command in the ice will install any new completions. |
| `atinit'…'` | Execute code before loading plugin. |
| `atload'…'` | Execute code after loading plugin. |
| `zicompinit` | Equals to `autoload compinit; compinit`. |
| `zicdreplay` | Execute `compdef …` calls that plugins did – they were recorded, so that `compinit` can be called later (`compinit` provides the `compdef` function, so it must be ran before issuing the taken-over `compdef`s with `zicdreplay`). |

</APITable>

- syntax-highlighting plugins (like [**F-Sy-H**](https://github.com/z-shell/F-Sy-H) or [**zsh-syntax-highlighting**](https://github.com/zsh-users/zsh-syntax-highlighting)) theoretically expect to be loaded last, even after the completion initialization (i.e. `compinit` function), however, in practice, you just have to ensure that such plugin is loaded after plugins that are issuing `compdef` – which basically means completions that aren't using the underscore-starting function file; the completion initialization still has to be performed before syntax-highlighting plugin, hence the `atinit''` ice, which will load `compinit` right before loading the plugin,
- the syntax-highlighting and suggestions plugins are loaded early for a better user experience.

#### The same setup, but without using [Turbo mode](../getting_started/overview#turbo-mode-zsh--53) (i.e. no `wait` ice) and without [the `for` syntax](../guides/syntax#the-for-syntax): {#the-same-setup-but-without-using-turbo-mode-ie-no-wait-ice-and-without-the-for-syntax}

```shell
zi ice blockf atpull'zi creinstall -q .'
zi light zsh-users/zsh-completions

autoload compinit
compinit

zi light z-shell/F-Sy-H
zi light zsh-users/zsh-autosuggestions
```

Without [Turbo](../getting_started/overview#turbo-mode-zsh--53) the syntax-highlighting plugin can be loaded at the end, as it doesn't make any difference (the prompt will appear after loading all objects, anyway).

### Oh-My-Zsh {#oh-my-zsh}

#### With [Turbo mode](../getting_started/overview#turbo-mode-zsh--53) and [`for` syntax](../guides/syntax#the-for-syntax) {#with-turbo-mode-and-for-syntax}

```shell
# A.
setopt promptsubst

# B.
zi wait lucid for \
  OMZL::git.zsh \
  atload"unalias grv" \
  OMZP::git

PS1="READY >" # provide a simple prompt till the theme loads

# C.
zi wait'!' lucid for \
  OMZL::prompt_info_functions.zsh \
  OMZT::gnzh

# D.
zi wait lucid for \
  atinit"zicompinit; zicdreplay" \
  z-shell/fast-syntax-highlighting \
  OMZP::colored-man-pages \
  as"completion" \
  OMZP::docker/_docker
```

:::info

**A** - Most themes use this option.

**B** - OMZ themes use this library and some other use also the plugin. It provides many aliases – `atload'…'` shows how to disable some of them (e.g.: to use program `rgburke/grv`).

**C** - Set OMZ theme. Loaded separately because the theme needs the `!` passed to the `wait` ice to reset the prompt after loading the snippet in Turbo.

**D** - Some plugins: a) syntax-highlighting, loaded possibly early for a better user experience), b) example functional plugin, c) Docker completion.

:::

Above setup loads everything after prompt, because of preceding `wait` ice. That is called **Turbo mode**, it shortens Zsh startup time by <u>50%-80%</u>, e.g. instead of 200 ms, it'll be getting your shell started up after **40 ms**.

#### Without [Turbo](../getting_started/overview#turbo-mode-zsh--53) and [`for` syntax](../guides/syntax#the-for-syntax) {#without-turbo-and-for-syntax}

The same setup using the classic syntax and without Turbo mode (prompt will be initially set like in typical, normal setup – **you can remove `wait` only from the theme plugin** and its dependencies to have the same effect while still using Turbo for everything remaining):

```shell
# A.
setopt promptsubst

# B.
zi snippet OMZL::git.zsh

# C.
zi ice atload"unalias grv"
zi snippet OMZP::git

# D.
zi for OMZL::prompt_info_functions.zsh OMZT::gnzh

# E.
zi snippet OMZP::colored-man-pages

# F.
zi ice as"completion"
zi snippet OMZP::docker/_docker

# G.
zi ice atinit"zicompinit; zicdreplay"
zi light z-shell/F-Sy-H
```

In general, [Turbo](../getting_started/overview#turbo-mode-zsh--53) can be optionally enabled only for a subset of plugins or for all plugins.

### LS_COLORS {#ls_colors}

A repository [**trapd00r/LS_COLORS**](https://github.com/trapd00r/LS_COLORS) provides a file with color definitions for GNU `ls` command (and also for [**ogham/exa**](https://github.com/ogham/exa).

Typically one does `eval $( dircolors -b $HOME/LS_COLORS)` to process this file and set the environment for `ls`. However this means `dircolors` is run every shell startup.

This costs much time because a fork has to be done and the program (i.e. `dircolors`) binary needs to be loaded and executed, and because `dircolors` loads the colors' definitions and processes them. Following ZI invocation solves this problem:

```shell
zi ice atclone'dircolors -b LS_COLORS > clrs.zsh' \
  atpull'%atclone' pick"clrs.zsh" nocompile'!' \
  atload'zstyle ":completion:*" list-colors “${(s.:.)LS_COLORS}”'
zi light trapd00r/LS_COLORS
```

<APITable>

| Syntax | Description |
| --- | :-- |
| `atclone'…'` | Generate shell script, but instead of passing it to `eval`, save it to file. The `atclone'…'` is being ran on the **installation** while the `atpull'…'` hook is being run on an **update** of the [**trapd00r/LS_COLORS**](https://github.com/trapd00r/LS_COLORS) plugin. |
| `atpull'%atclone'` | Do the same at any update of the plugin the `%atclone` is just a special string that denotes the `atclone'…'` hook and is copied onto the `atpull'…'` hook. |
| `pick"clrs.zsh"` | Source the previously generated file `clrs.zsh`. |
| `nocompile'!'` | Invokes compilation **after** the `atclone'…'` [ice-modifier](../guides/ice-modifiers) (the exclamation mark causes this). |
| `atload'…'` | Additionally sets up the Zsh completion to use the colors provided by the trapd00r package. |

</APITable>

This way, except for the plugin installation and update, `dircolors` isn't ran, just normal sourcing is done. The everyday sourced file (i.e. `clrs.zsh`) is even being compiled to speed up the loading.

### Direnv {#direnv}

The project [**direnv/direnv**](https://github.com/direnv/direnv) registers itself in Z shell to modify the environment on directory change. This registration is most often done by `eval "$(direnv hook zsh)"` added to zshrc.

The drawback of this standard procedure is that the `direnv` binary is run on every shell startup and significantly slows it down. ZI allows to solve this in the following way:

```shell
zi as"program" make'!' atclone'./direnv hook zsh > zhook.zsh' \
  atpull'%atclone' pick"direnv" src"zhook.zsh" for \
    direnv/direnv
```

<APITable>

| Syntax | Description |
| --- | :-- |
| `make'!'` | Compile `direnv` (it's written in Go lang); the exclamation mark means: run the `make` first, before `atclone'…'` and `atpull'…'` hooks. |
| `atclone'…'` | Initially (right after installing the plugin) generate the registration code and save it to `zhook.zsh` (instead of passing to `eval`). |
| `atpull'%atclone'` | Regenerate the registration code also on update. The `atclone'…'` runs on **installation** while `atpull'…'` runs on **update** of the plugin. |
| `src'zhook.zsh'` | Load (`source`) the generated registration code |
| `pick'direnv'` | Ensure `+x` permission on the binary |
| `as'program'` | The plugin is a program, there's no main file to the source. |

</APITable>

This way registration code is generated once every installation and update, to then be simply sourced without running `direnv`.

The project is also available as a binary Github release. This distribution can be installed by:

```shell
zi from"gh-r" as"program" mv"direnv* -> direnv" \
  atclone'./direnv hook zsh > zhook.zsh' atpull'%atclone' \
  pick"direnv" src="zhook.zsh" for \
    direnv/direnv
```

<APITable>

| Syntax | Description |
| --- | :-- |
| `from'gh-r'` | Install from **Github releases**. |
| `mv'direnv* -> direnv'` | After installation, rename `direnv.linux-386` or similar file to `direnv`. |
| `atclone'…'`, `atpull'…'` | As in previous example |
| `pick'direnv'` | As in previous example. |
| `as'program'` | As in previous example |

</APITable>

```shell
zi ice as"program" make'!' atclone'./direnv hook zsh > zhook.zsh' \
  atpull'%atclone' src"zhook.zsh"
zi light direnv/direnv
```

- `make'!'` – execute `make` before `atclone'…'` and before `atpull'…'` (see `make` above),
- `src'zhook.zsh'` – source file `zhook.zsh`.

In general, Direnv works by hooking up to Zsh. The code that does this is provided by program `direnv` (built by `make'…'`). Above `atclone'…'` puts this code into file `zhook.zsh`, `src''` sources it. This way `direnv hook zsh` is executed only on clone and update, and Zsh starts faster.

### Compiling programs {#compiling-programs}

```shell
zi ice as"program" atclone"rm -f src/auto/config.cache; ./configure" \
  atpull"%atclone" make pick"src/vim"
zi light vim/vim
```

<APITable>

| Syntax | Description |
| --- | :-- |
| `as'program'` | Add file selected by `pick'…'` to `$PATH`, and do not source it. |
| `atclone'…'` | Execute code after downloading. |
| `atpull'%atclone'` | Execute the same code `atclone'…'` is given, but after successful update. |
| `make` |  Run `make` after `atclone'…'` and `atpull'…'` (note: `make'!'` will execute before them). |
| `pick'src/vim'` | Set executable flag on `src/vim`, hint that `src/` should be added to `$PATH`. |

</APITable>

The same but with **installation** (i.e. `make install` is being run) under `$ZPFX` (`~/.zi/polaris` by default):

```shell
zi ice as'program' atclone'rm -f src/auto/config.cache; \
  ./configure --prefix=$ZPFX' atpull'%atclone' make'all install' pick'$ZPFX/bin/vim'
zi light vim/vim
```

<APITable>

| Syntax | Description |
| --- | :-- |
| `as'program'` | As above. |
| `atclone'…'` | As above **plus** pass `--prefix=$ZPFX` to `./configure`, to set the installation directory. |
| `atpull'%atclone'` | As above. |
| `make` |  As above, but also run the `install` target. |
| `pick'src/vim'` | as above, but for different path (`$ZPFX/bin/vim`). |

</APITable>
