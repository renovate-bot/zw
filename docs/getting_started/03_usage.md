---
sidebar_position: 3
id: useage
title: Usage
image: https://github.com/z-shell/zi/raw/main/docs/images/logo.png
description: Usage examples for Z-Shell ZI
keywords: [usage, zsh, z-shell, zi]
---

## Plugins and snippets {#plugins-and-snippets}

Plugins can be loaded using `load` or `light`.

```shell
zi load  <repo/plugin> # Load with reporting/investigating.
zi light <repo/plugin> # Load without reporting/investigating.
```

If you want to source local or remote files (using direct URL), you can do so with `snippet`.

```shell
zi snippet <URL>
```

Such lines should be added to `.zshrc`. Snippets are cached locally, use `-f` option to download a fresh version of a snippet, or `zi update {URL}`. Can also use `zi update --all` to update all snippets (and plugins).

**Example**

```shell
# Plugin history-search-multi-word loaded with investigating.
zi load z-shell/H-S-MW

# Two regular plugins loaded without investigating.
zi light zsh-users/zsh-autosuggestions
zi light z-shell/F-Sy-H

# Snippet
zi snippet https://gist.githubusercontent.com/hightemp/5071909/raw/
```

**Prompt(Theme) Example**

This is [powerlevel10k](https://github.com/romkatv/powerlevel10k), [pure](https://github.com/sindresorhus/pure), [starship](https://github.com/starship/starship) sample:

```shell
# Load powerlevel10k theme
zi ice depth"1" # git clone depth
zi light romkatv/powerlevel10k

# Load pure theme
zi ice pick"async.zsh" src"pure.zsh" # with the zsh-async library that's bundled with it.
zi light sindresorhus/pure

# Load starship theme
zi ice as"command" from"gh-r" \ # `starship` binary as command, from github release
  atclone"./starship init zsh > init.zsh; ./starship completions zsh > _starship" \ # starship setup at clone(create init.zsh, completion)
  atpull"%atclone" src"init.zsh" # pull behavior same as clone, source init.zsh
zi light starship/starship
```

## Upgrade ZI and plugins {#upgrade-zi-and-plugins}

ZI can be updated to `self-update` and plugins to `update`.

```shell
# Self-update
zi self-update
# Plugin update
zi update
# Plugin parallel update
zi update --parallel
# Increase the number of jobs in a concurrent set to 40
zi update --parallel 40
```

## Turbo and lucid {#turbo-and-lucid}

Turbo and lucid are the most used options.

### Turbo Mode {#turbo-mode}

Turbo mode is the key to performance. It can be loaded asynchronously, which makes a huge difference when the amount of plugins increases.

Usually used as `zi ice wait"<SECONDS>"`, let's use the previous example:

```shell
zi ice wait    # wait is same wait"0"
zi load z-shell/history-search-multi-word

zi ice wait"2" # load after 2 seconds
zi load z-shell/history-search-multi-word

zi ice wait    # also be used in `light` and `snippet`
zi snippet https://gist.githubusercontent.com/hightemp/5071909/raw/
```

### Lucid {#lucid}

Turbo mode is verbose, so you need an option for quiet.

You can use with `lucid`:

```shell
zi ice wait lucid
zi load z-shell/history-search-multi-word
```

**_F&A:_** What is `ice`?

`ice` is Zi's options command. The option melts like ice and is used only once. (more: [Ice Modifiers](../guides/ice-modifiers)).

## More Examples {#more-examples}

After installing ZI you can start adding some actions (load some plugins) to `~/.zshrc`, at the bottom. Some examples:

```shell
# Load the pure theme, with the zsh-async library that's bundled with it.
zi ice pick"async.zsh" src"pure.zsh"
zi light sindresorhus/pure

# A glance at the new for-syntax – load all of the above
# plugins with a single command. For more information see:
# https://github.com/z-shell/zi/wiki/Syntax/
zi for \
  light-mode  zsh-users/zsh-autosuggestions \
  light-mode  z-shell/fast-syntax-highlighting \
              z-shell/history-search-multi-word \
  light-mode pick"async.zsh" src"pure.zsh" \
    sindresorhus/pure

# Binary release in the archive, from GitHub-releases page.
# After automatic unpacking it provides program "fzf".
zi ice from"gh-r" as"program"
zi light junegunn/fzf

# One other binary release, needs renaming from `docker-compose-Linux-x86_64`.
# This is done by ice-mod `mv'{from} -> {to}'. There are multiple packages per
# single version, for OS X, Linux, and Windows – so ice-mod `bpick' is used to
# select Linux package – in this case, this is not needed, ZI will
# grep operating system name and architecture automatically when there's no `bpick'.
zi ice from"gh-r" as"program" mv"docker* -> docker-compose" bpick"*linux*"
zi load docker/compose

# Vim repository on GitHub – a typical source code that needs compilation – ZI
# can manage it for you if you like, run `./configure` and other `make`, etc. stuff.
# Ice-mod `pick` selects a binary program to add to $PATH. You could also install the
# package under the path $ZPFX, see: https://github.com/z-shell/zi/wiki/Compiling-programs
zi ice as"program" atclone"rm -f src/auto/config.cache; ./configure" \
  atpull"%atclone" make pick"src/vim"
zi light vim/vim

# Scripts that are built at install (there's single default make target, "install",
# and it constructs scripts by `cat'ing a few files). The make'' ice could also be:
# `make"install PREFIX=$ZPFX"`, if "install" wouldn't be the only, default target.
zi ice as"program" pick"$ZPFX/bin/git-*" make"PREFIX=$ZPFX"
zi light tj/git-extras

# Handle completions without loading any plugin, see "clist" command.
# This one is to be run just once, in an interactive session.
zi creinstall %HOME/my_completions
```

```shell
# For GNU ls (the binaries can be gls, gdircolors, e.g. on OS X when installing the
# coreutils package from Homebrew; you can also use https://github.com/ogham/exa)
zi ice atclone"dircolors -b LS_COLORS > c.zsh" atpull'%atclone' pick"c.zsh" nocompile'!'
zi light trapd00r/LS_COLORS
```

```shell
# make'!...' -> run make before atclone & atpull
zi ice as"program" make'!' atclone'./direnv hook zsh > zhook.zsh' atpull'%atclone' src"zhook.zsh"
zi light direnv/direnv
```

If you're interested in more examples then check out the [playground repository](https://github.com/z-shell/playground) where users have uploaded their `~/.zshrc` and ZI configurations. Feel free to [submit](https://github.com/z-shell/playground/issues/new?template=request-to-add-zshrc-to-the-zi-configs-repo.md) your `~/.zshrc` there if it contains ZI commands.

For some additional examples you can also check out the:

- [Minimal Setup](../gallery/preferences#minimal-setup),
- [Collection](../gallery/collection),
- [Oh-My-Zsh](../gallery/ohmyzsh).
