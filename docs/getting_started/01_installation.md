---
sidebar_position: 1
id: installation
title: Installation
---

### Quick install {#quick-install}

:::tip

Append `-b <tag>` or `-b <branch>` e.g:

`sh -c "$(curl -fsSL https://git.io/get-zi)" -- -i skip -b v1.0.0`

:::

```shell
# Will add minimal configuration
sh -c "$(curl -fsSL https://git.io/get-zi)" --

# Non interactive. Just clone or update repository.
sh -c "$(curl -fsSL https://git.io/get-zi)" -- -i skip

# Minimal configuration + annexes.
sh -c "$(curl -fsSL https://git.io/get-zi)" -- -a annex

# Minimal configuration + annexes + zunit.
sh -c "$(curl -fsSL https://git.io/get-zi)" -- -a zunit

# Minimal configuration with loader
sh -c "$(curl -fsSL https://git.io/get-zi)" -- -a loader

# Suggest your .zshrc configuration to:
# https://github.com/z-shell/playground
sh -c "$(curl -fsSL https://git.io/get-zi)" -- -a ???
```

### Manual install {#manual-install}

Clone repository:

```shell
zi_home="${HOME}/.zi" && command mkdir -p $zi_home
command git clone https://github.com/z-shell/zi.git "${zi_home}/bin"
```

Source `zi.zsh` from your `.zshrc`:

```shell
zi_home="${HOME}/.zi"
source "${zi_home}/bin/zi.zsh"
# Next two lines must be below the above two
autoload -Uz _zi
(( ${+_comps} )) && _comps[zi]=_zi
```
