---
id: installation
title: Installation
sidebar_position: 1
image: /img/logo/501x501.png
description: ZI installation guide
keywords: [installation, zsh, z-shell, zi]
---

:::info Available installer links

[![⚙️ Install Library](https://github.com/z-shell/zi-src/actions/workflows/check-sh.yml/badge.svg?branch=main)](https://github.com/z-shell/zi-src/actions/workflows/check-sh.yml)

- [Git.io](https://git.io/get-zi): `https://git.io/get-zi`
- [GitHub](https:z-shell.pages.dev/i-hub): `https:z-shell.pages.dev/i-hub`
- [GitLab Mirror](https:z-shell.pages.dev/i-lab): `https:z-shell.pages.dev/i-lab`
- [Direct](https://raw.githubusercontent.com/z-shell/zi-src/main/lib/sh/install.sh): `https://raw.githubusercontent.com/z-shell/zi-src/main/lib/sh/install.sh`

> Report an [issue](https://github.com/z-shell/zi/issues/new/choose)

:::

## Quick install {#quick-install}

:::tip

If required append `-b <tag>` or `-b <branch>` e.g:

```shell
sh -c "$(curl -fsSL https://git.io/get-zi)" -- -i skip -b v1.0.0
```

:::

Following commands installs ZI and modifies `.zshrc` with the chosen option unless the `.zshrc` file contains command `zi` - then will be skipped.

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

## Manual install {#manual-install}

Clone repository:

```shell
zi_home="${HOME}/.zi" && mkdir -p $zi_home
git clone https://github.com/z-shell/zi.git "${zi_home}/bin"
```

Source `zi.zsh` from your `.zshrc`:

```shell
zi_home="${HOME}/.zi"
source "${zi_home}/bin/zi.zsh"
# Next two lines must be below the above two
autoload -Uz _zi
(( ${+_comps} )) && _comps[zi]=_zi
```

## Post install

Reload the shell with `exec zsh` and compile ZI with `zi self-update`.
