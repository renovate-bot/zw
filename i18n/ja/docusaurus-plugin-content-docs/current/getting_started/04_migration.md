---
id: migration
title: Migration
sidebar_position: 4
image: /img/logo/zi/png/501x501.png
description: Migration to ZI
keywords:
  - migration
  - zsh
  - z-shell
  - zi
---

## Migration from Oh-My-ZSH {#migration-from-oh-my-zsh}

### Oh-My-Zsh basics {#oh-my-zsh-basics}

```shell
zi snippet <URL>        # Raw Syntax with URL
zi snippet OMZ::<PATH>  # Shorthand OMZ/ (http://github.com/ohmyzsh/ohmyzsh/raw/master/)
zi snippet OMZL::<PATH> # Shorthand OMZ/lib/
zi snippet OMZT::<PATH> # Shorthand OMZ/themes/
zi snippet OMZP::<PATH> # Shorthand OMZ/plugins/
```

### Oh-My-Zsh library {#oh-my-zsh-library}

Importing the [clipboard](https://github.com/ohmyzsh/ohmyzsh/blob/master/lib/clipboard.zsh) and [termsupport](https://github.com/ohmyzsh/ohmyzsh/blob/master/lib/termsupport.zsh) from the Oh-My-Zsh library Sample:

```shell
# Raw Syntax
zi snippet https://github.com/ohmyzsh/ohmyzsh/blob/master/lib/clipboard.zsh
zi snippet https://github.com/ohmyzsh/ohmyzsh/blob/master/lib/termsupport.zsh

# OMZ Shorthand Syntax
zi snippet OMZ::lib/clipboard.zsh
zi snippet OMZ::lib/termsupport.zsh

# OMZL Shorthand Syntax
zi snippet OMZL::clipboard.zsh
zi snippet OMZL::termsupport.zsh
```

### Oh-My-Zsh Themes {#oh-my-zsh-themes}

:::tip

To use **themes** created for Oh My Zsh you might want to first source the `git` library there.

:::

Then you can use the themes as snippets (`zi snippet <file path or GitHub URL>`). Some themes require not only Oh My Zsh's Git **library**, but also Git **plugin** (error about `current_branch` may appear). Load this Git-plugin as single-file snippet directly from OMZ.

Most themes require the `promptsubst` option (`setopt promptsubst` in `zshrc`), if it isn't set, then prompt will appear as something like: `... $(build_prompt) ...`.

You might want to suppress completions provided by the git plugin by issuing `zi cdclear -q` (`-q` is for quiet) – see below **Ignoring Compdefs**.

To summarize:

```shell
## Oh My Zsh Setting
ZSH_THEME="robbyrussell"

## ZI Setting
# Must Load OMZ Git library
zi snippet OMZL::git.zsh

# Load Git plugin from OMZ
zi snippet OMZP::git
zi cdclear -q # <- forget completions provided up to this moment

setopt promptsubst

# Load Prompt
zi snippet OMZT::robbyrussell
```

External Theme Sample: [NicoSantangelo/Alpharized](https://github.com/nicosantangelo/Alpharized)

```shell
## Oh My Zsh Setting
ZSH_THEME="alpharized"

## ZI Setting
# Must Load OMZ Git library

zi snippet OMZL::git.zsh

# Load Git plugin from OMZ
zi snippet OMZP::git
zi cdclear -q # <- forget completions provided up to this moment

setopt promptsubst

# Load Prompt
zi light NicoSantangelo/Alpharized
```

:::info

If the `git` library will not be loaded, then similar to following errors will be appearing:

```shell
........:1: command not found: git_prompt_status
........:1: command not found: git_prompt_short_sha
```

:::

### Oh-My-Zsh Plugins {#oh-my-zsh-plugins}

If it consists of a single file, you can just load it.

```shell
## Oh-My-Zsh Setting
plugins=(
  git
  dotenv
  rake
  rbenv
  ruby
)

## ZI Setting
zi snippet OMZP::git
zi snippet OMZP::dotenv
zi snippet OMZP::rake
zi snippet OMZP::rbenv
zi snippet OMZP::ruby
```

Use `zi ice svn` if multiple files require an entire subdirectory. Like [gitfast](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/gitfast), [osx](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/osx):

```shell
zi ice svn
zi snippet OMZP::gitfast

zi ice svn
zi snippet OMZP::osx
```

Use `zi ice as"completion"` to directly add single file completion snippets. Like [docker](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/docker), [fd](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/fd):

```shell
zi ice as"completion"
zi snippet OMZP::docker/_docker

zi ice as"completion"
zi snippet OMZP::fd/_fd
```

[You can see an extended explanation of Oh-My-Zsh setup in the Wiki](../guides/customization#oh-my-zsh)

## Migration from Prezto {#migration-from-prezto}

### Prezto basics {#prezto-basics}

```shell
zi snippet <URL>        # Raw Syntax with URL
zi snippet PZT::<PATH>  # Shorthand PZT/ (https://github.com/sorin-ionescu/prezto/tree/master/)
zi snippet PZTM::<PATH> # Shorthand PZT/modules/
```

### Prezto moduless {#prezto-moduless}

Importing the [environment](https://github.com/sorin-ionescu/prezto/tree/master/modules/environment) and [terminal](https://github.com/sorin-ionescu/prezto/tree/master/modules/terminal) Prezto Modules Sample:

```shell
## Prezto Setting
zstyle ':prezto:load' pmodule 'environment' 'terminal'

## ZI Setting
# Raw Syntax
zi snippet https://github.com/sorin-ionescu/prezto/blob/master/modules/environment/init.zsh
zi snippet https://github.com/sorin-ionescu/prezto/blob/master/modules/terminal/init.zsh

# PZT Shorthand Syntax
zi snippet PZT::modules/environment
zi snippet PZT::modules/terminal

# PZTM Shorthand Syntax
zi snippet PZTM::environment
zi snippet PZTM::terminal
```

Use `zi ice svn` if multiple files require an entire subdirectory. Like [docker](https://github.com/sorin-ionescu/prezto/tree/master/modules/docker), [git](https://github.com/sorin-ionescu/prezto/tree/master/modules/git):

```shell
zi ice svn
zi snippet PZTM::docker

zi ice svn
zi snippet PZTM::git
```

Use `zi ice as"null"` if don't exist `*.plugin.zsh`, `init.zsh`, `*.zsh-theme*` files in module. Like [archive](https://github.com/sorin-ionescu/prezto/tree/master/modules/archive):

```shell
zi ice svn as"null"
zi snippet PZTM::archive
```

Use `zi ice atclone"git clone <repo> <location>"` if module have external module. Like [completion](https://github.com/sorin-ionescu/prezto/tree/master/modules/completion):

```shell
zi ice svn blockf \ # use blockf to prevent any unnecessary additions to fpath, as zi manages fpath
  atclone"git clone --recursive https://github.com/zsh-users/zsh-completions.git external"
zi snippet PZTM::completion
```

:::tip

What is `zstyle`?

Read [zstyle](http://zsh.sourceforge.net/Doc/Release/Zsh-Modules.html#The-zsh_002fzutil-Module) doc (more: [What does `zstyle` do?](https://unix.stackexchange.com/questions/214657/what-does-zstyle-do)).

:::

## Migration from Zgen {#migration-from-zgen}

### Oh-My-Zsh difference {#oh-my-zsh-difference}

:::note

More reference: check [Migration from Oh-My-ZSH](#migration-from-oh-my-zsh)

:::

```shell
# Load ohmyzsh base
zgen oh-my-zsh
zi snippet OMZL::<ALL OF THEM>

# Load ohmyzsh plugins
zgen oh-my-zsh <PATH>
zi snippet OMZ::<PATH>
```

### Prezto difference {#prezto-difference}

:::note

More reference: check [Migration from Prezto](#migration-from-prezto)

:::

```shell
# Load Prezto
zgen prezto
zi snippet PZTM::<COMMENT's List> # environment terminal editor history directory spectrum utility completion prompt

# Load prezto plugins
zgen prezto <modulename>
zi snippet PZTM::<modulename>

# Load a repo as Prezto plugins
zgen pmodule <reponame> <branch>
zi ice ver"<branch>"
zi load <repo/plugin>

# Set prezto options
zgen prezto <modulename> <option> <value(s)>
zstyle ':prezto:<modulename>:' <option> <values(s)> # Set original prezto style
```

### General {#general}

:::info

`location`: refer [Selection of Files](../guides/ice#src-pick-multisrc)

:::

```shell
zgen load <repo> [location] [branch]

zi ice ver"[branch]"
zi load <repo>
```

## Migration from Zplug {#migration-from-zplug}

### Zplug basics {#zplug-basics}

```shell
zplug <repo/plugin>, tag1:<option1>, tag2:<option2>

zi ice tag1"<option1>" tag2"<option2>"
zi load <repo/plugin>
```

### Tag comparison {#tag-comparison}

- `as` => `as`
- `use` => `pick`, `src`, `multisrc`
- `ignore` => None
- `from` => `from`
- `at` => `ver`
- `rename-to` => `mv`, `cp`
- `dir` => Selection(`pick`, ...) with rename
- `if` => `if`
- `hook-build` => `atclone`, `atpull`
- `hook-load` => `atload`
- `frozen` => None
- `on` => None
- `defer` => `wait`
- `lazy` => `autoload`
- `depth` => `depth`
