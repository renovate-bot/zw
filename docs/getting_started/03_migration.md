---
id: migration
title: Migration
sidebar_position: 4
image: /img/logo/zi/png/501x501.png
description: Migration to ZI
keywords: [migration, zsh, z-shell, zi]
---

## Migration from Oh-My-ZSH

### Oh-My-Zsh basics

```shell
zi snippet <URL>        # Raw Syntax with URL
zi snippet OMZ::<PATH>  # Shorthand OMZ/ (http://github.com/ohmyzsh/ohmyzsh/raw/master/)
zi snippet OMZL::<PATH> # Shorthand OMZ/lib/
zi snippet OMZT::<PATH> # Shorthand OMZ/themes/
zi snippet OMZP::<PATH> # Shorthand OMZ/plugins/
```

### Oh-My-Zsh library

Importing the [clipboard](https://github.com/ohmyzsh/ohmyzsh/blob/master/lib/clipboard.zsh) and [termsupport](https://github.com/ohmyzsh/ohmyzsh/blob/master/lib/termsupport.zsh) from the Oh-My-Zsh library Sample:

Raw Syntax:

```shell
zi snippet https://github.com/ohmyzsh/ohmyzsh/blob/master/lib/clipboard.zsh
zi snippet https://github.com/ohmyzsh/ohmyzsh/blob/master/lib/termsupport.zsh
```

OMZ Shorthand Syntax:

```shell
zi snippet OMZ::lib/clipboard.zsh
zi snippet OMZ::lib/termsupport.zsh
```

OMZL Shorthand Syntax:

```shell
zi snippet OMZL::clipboard.zsh
zi snippet OMZL::termsupport.zsh
```

### Oh-My-Zsh themes

Setup with Oh-My-Zsh:

```shell
ZSH_THEME="robbyrussell"
```

ZI:

To use **themes** created for Oh My Zsh it might need:

- `git` library
- `git` plugin
- `setopt promptsubst`

If any of above is missing, the theme will break similar as shown below:

```shell
... $(build_prompt) ...
```

If the `git` library will not be loaded or not loaded in the correct order, then similar to following errors will be appearing:

```shell
........:1: command not found: git_prompt_status
........:1: command not found: git_prompt_short_sha
```

All together it look like this:

```shell
zi snippet OMZL::git.zsh

zi snippet OMZP::git
zi cdclear -q
```

Then load prompt:

```shell
setopt promptsubst
zi snippet OMZT::robbyrussell
```

:::info

External Theme Sample: [NicoSantangelo/Alpharized](https://github.com/nicosantangelo/Alpharized)

:::

Oh-My-Zsh Setting:

```shell
ZSH_THEME="alpharized"
```

ZI Setting:

Must Load OMZ Git library first as mentioned above. As it would be same as Oh-My-Zsh does in the background.

```shell
zi snippet OMZL::git.zsh
```

Load `Git` plugin from Oh-My-Zsh:

```shell
zi snippet OMZP::git
zi cdclear -q

setopt promptsubst

zi light NicoSantangelo/Alpharized
```

### Oh-My-Zsh Plugins

```diff
- plugins=(
-  git
-  dotenv
-  rake
-  rbenv
-  ruby
-)

+ zi snippet OMZP::git
+ zi snippet OMZP::dotenv
+ zi snippet OMZP::rake
+ zi snippet OMZP::rbenv
+ zi snippet OMZP::ruby
```

If it consists of a single file, with ZI you can just load it: `zi snippet <some/path/or/url/undled-snnippets.zsh`

Use `zi ice svn` if multiple files require an entire subdirectory.

- [gitfast](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/gitfast)
- [osx](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/osx)

```shell
zi ice svn
zi snippet OMZP::gitfast

zi ice svn
zi snippet OMZP::osx
```

Use `zi ice as"completion"` to directly add single file completion snippets.

- [docker](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/docker)
- [fd](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/fd)

```shell
zi ice as"completion"
zi snippet OMZP::docker/_docker

zi ice as"completion"
zi snippet OMZP::fd/_fd
```

[You can see an extended explanation of Oh-My-Zsh setup in the Wiki](../guides/customization#oh-my-zsh)

## Migration from Prezto

### Prezto basics

```shell
zi snippet <URL>        # Raw Syntax with URL
zi snippet PZT::<PATH>  # Shorthand PZT/ (https://github.com/sorin-ionescu/prezto/tree/master/)
zi snippet PZTM::<PATH> # Shorthand PZT/modules/
```

### Prezto moduless

Importing the [environment](https://github.com/sorin-ionescu/prezto/tree/master/modules/environment) and [terminal](https://github.com/sorin-ionescu/prezto/tree/master/modules/terminal) Prezto Modules Sample:

Prezto Setting:

```shell
zstyle ':prezto:load' pmodule 'environment' 'terminal'
```

ZI Setting:

> Import raw syntax from URL.

```shell
zi snippet https://github.com/sorin-ionescu/prezto/blob/master/modules/environment/init.zsh
zi snippet https://github.com/sorin-ionescu/prezto/blob/master/modules/terminal/init.zsh
```

PZT Shorthand Syntax:

```shell
zi snippet PZT::modules/environment
zi snippet PZT::modules/terminal
```

PZTM Shorthand Syntax:

```shell
zi snippet PZTM::environment
zi snippet PZTM::terminal
```

Use `zi ice svn` if multiple files require an entire subdirectory.

- [docker](https://github.com/sorin-ionescu/prezto/tree/master/modules/docker)
- [git](https://github.com/sorin-ionescu/prezto/tree/master/modules/git)

```shell
zi ice svn
zi snippet PZTM::docker

zi ice svn
zi snippet PZTM::git
```

Use `zi ice as"null"` if don't exist `*.plugin.zsh`, `init.zsh`, `*.zsh-theme*` files in module.

- [archive](https://github.com/sorin-ionescu/prezto/tree/master/modules/archive):

```shell
zi ice svn as"null"
zi snippet PZTM::archive
```

Use `zi ice atclone"git clone <repo> <location>"` if module have external module.

- [completion](https://github.com/sorin-ionescu/prezto/tree/master/modules/completion):

```shell
zi ice svn blockf \
  atclone"git clone --recursive https://github.com/zsh-users/zsh-completions.git external"
zi snippet PZTM::completion
```

Use `blockf` to prevent any unnecessary additions to fpath, as ZI manages fpath.

:::tip

What is `zstyle`?

- Official (zsh.sourceforge.net): [zstyle](http://zsh.sourceforge.net/Doc/Release/Zsh-Modules.html#The-zsh_002fzutil-Module)
- StackExchange: [What does `zstyle` do?](https://unix.stackexchange.com/questions/214657/what-does-zstyle-do)

:::

## Migration from Zgen

### Load Oh-My-Zsh library

```diff
- zgen oh-my-zsh

+ zi snippet OMZL::<ANY OF THEM>
```

### Load oh-my-zsh plugins

```diff
- zgen oh-my-zsh <PATH>

+ zi snippet OMZP::<PATH>
```

### Load Prezto modules

```diff
- zgen prezto

+ zi snippet PZTM::<ANY FROM LIST BELOW>
```

- environment
- terminal
- editor
- history
- directory
- spectrum
- utility
- completion
- prompt

```diff
- zgen prezto <modulename>

+ zi snippet PZTM::<modulename>
```

Load a repositories as prezto plugins:

```diff
- zgen pmodule <reponame> <branch>

+ zi ice ver"<branch>"
+ zi load <repo/plugin>
```

### Summarized Zgen

:::info

For the `location`: refer [selection of files](../guides/ice#src-pick-multisrc)

:::

```diff
- zgen load <repo> [location] [branch]

+ zi ice ver"[branch]"
+ zi load <repo>
```

## Migration from Zplug

### Zplug basics

```diff
- zplug <repo/plugin>, tag1:<option1>, tag2:<option2>

+ zi ice tag1"<option1>" tag2"<option2>"
+ zi load <repo/plugin>
```

### Tag comparison

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
