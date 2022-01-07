---
id: themes
title: Themes & Prompts
sidebar_position: 4
description: Themes & Prompts Collection
keywords: [collection, themes, prompts, zsh, z-shell, zi]
---

:::info

Related:

1. [Multiple prompts](../../gallery/preferences#multiple-prompts)
2. [Automatic load/unload based on condition](../../getting_started/overview#automatic-loadunload-based-on-condition)
3. [Ice `atclone`, `atpull`, `atinit`, `atload`](../../guides/ice#atclone-atpull-atinit-atload)

:::

:::tip

Zsh tweak - map colours to the nearest colour in the available palette.

```shell
[[ $COLORTERM = *(24bit|truecolor)* ]] || zmodload zsh/nearcolor
```

:::

### [romkatv/powerlevel10k](https://github.com/romkatv/powerlevel10k) {#romkatvpowerlevel10k}

```shell
# Load prompt if terminal has least 256 colors.
if [ "${TERM##*-}" = '256color' ] || [ "${terminfo[colors]:?}" -gt 255 ]; then
zi ice depth=1; zi light romkatv/powerlevel10k
fi
```

```shell
# one-line
zi ice depth=1; zi light romkatv/powerlevel10k
```

```shell
# as meta plugin
# Configuration wizard disbled by default,
# post-install run manually: p10k configure
zi light-mode for @romkatv
```

```shell
# After finishing the configuration wizard for the last question:
# "Apply changes to ~/.zshrc?" choose no - unless you know what you're doing.
zi ice depth'1' atload"[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh" nocd
zi light romkatv/powerlevel10k
```

### [z-shell/zprompts](https://github.com/z-shell/zprompts) {#z-shellzprompts}

```shell
zi lucid atload"!promptinit; typeset -g PSSHORT=0; \
prompt sprint3 yellow red green blue" nocd for \
    z-shell/zprompts
```

### [halfo/lambda-mod-zsh-theme](https://github.com/halfo/lambda-mod-zsh-theme) {#halfolambda-mod-zsh-theme}

```shell
autoload -Uz colors && colors # Load colors if missing
zi lucid nocd for \
    halfo/lambda-mod-zsh-theme
```

### [geometry-zsh/geometry](https://github.com/geometry-zsh/geometry) {#geometry-zshgeometry}

```shell
zi lucid atload"!geometry::prompt" nocd \
atinit"GEOMETRY_COLOR_DIR=63 GEOMETRY_PATH_COLOR=63" for \
    geometry-zsh/geometry
```

### [sindresorhus/pure](https://github.com/sindresorhus/pure) {#sindresorhuspure}

```shell
zi lucid pick"/dev/null" multisrc"{async,pure}.zsh" atload"!prompt_pure_precmd" nocd for \
    sindresorhus/pure
```

```shell
# Install as meta plugin
zi light-mode for @sindresorhus/pure
```

### [agkozak/agkozak-zsh-prompt](https://github.com/agkozak/agkozak-zsh-prompt) {#agkozakagkozak-zsh-prompt}

```shell
zi lucid nocd atinit"AGKOZAK_COLORS_PROMPT_CHAR='magenta' AGKOZAK_MULTILINE=0 \
AGKOZAK_PROMPT_CHAR=( ❯ ❯ ❮ ) AGKOZAK_USER_HOST_DISPLAY=0" for \
    agkozak/agkozak-zsh-prompt
```

```shell
# Install as meta plugin
zi light-mode for @agkozak/agkozak-zsh-prompt
```

### [chauncey-garrett/zsh-prompt-garrett](https://github.com/chauncey-garrett/zsh-prompt-garrett) {#chauncey-garrettzsh-prompt-garrett}

```shell
zi ice atload"fpath+=( \$PWD );"
zi light chauncey-garrett/zsh-prompt-garrett

zi ice svn atload"prompt garrett" silent
zi snippet PZT::modules/prompt
```

### [robobenklein/zinc](https://github.com/robobenklein/zinc) {#robobenkleinzinc}

```shell
zi ice wait'!' lucid nocompletions \
  compile"{zinc_functions/*,segments/*,zinc.zsh}" \
  atload'!prompt_zinc_setup; prompt_zinc_precmd'
zi load robobenklein/zinc

# ZINC git info is already async, but if you want it
# even faster with gitstatus in Turbo mode: https://github.com/romkatv/gitstatus
zi ice wait'1' atload'zinc_optional_depenency_loaded'
zi load romkatv/gitstatus
```
