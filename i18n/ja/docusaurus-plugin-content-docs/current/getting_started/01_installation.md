---
id: installation
title: Installation
sidebar_position: 1
image: /img/logo/zi/png/501x501.png
description: ZI Installation Guide
keywords:
  - install
  - setup
  - zsh
  - zinit
  - zi
  - oh-my-zsh
  - ohmyzsh
---

:::info Available installer links

[![⚙️ Install Library][1]][2]

- [Git.io][3]: `https://git.io/get-zi`
- [GitHub][4]: `https://z-shell.pages.dev/i-hub`
- [GitLab Mirror][5]: `https://z-shell.pages.dev/i-lab`
- [Direct][6]: `https://raw.githubusercontent.com/z-shell/zi-src/main/lib/sh/install.sh`

> - Please report an [issue][7] if you have any problems installing.

:::

## Quick installation

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

# Non interactive. リポジトリのクローンとアップデートのみ.
sh -c "$(curl -fsSL https://git.io/get-zi)" -- -i skip

# 最低限の設定 + annexes.
sh -c "$(curl -fsSL https://git.io/get-zi)" -- -a annex

# 最低限の設定 + annexes + zunit.
sh -c "$(curl -fsSL https://git.io/get-zi)" -- -a zunit

# 最低限の設定 with loader
sh -c "$(curl -fsSL https://git.io/get-zi)" -- -a loader

# あなたの .zshrc の設定を教えてください
# https://github.com/z-shell/playground
sh -c "$(curl -fsSL https://git.io/get-zi)" -- -a ???
```

## Manual installation

Clone repository:

```shell
zi_home="${HOME}/.zi" && mkdir -p $zi_home
git clone https://github.com/z-shell/zi.git "${zi_home}/bin"
```

`.zshrc` から`zi.zsh` を読み込む:

```shell
zi_home="${HOME}/.zi"
source "${zi_home}/bin/zi.zsh"
# 下記2行は上記2行より後に記述しなければいけない
autoload -Uz _zi
(( ${+_comps} )) && _comps[zi]=_zi
```

## Post-installation

Reload the shell with `exec zsh` and compile ZI with `zi self-update`.

---

> - Support required: [Gitee.com/z-shell](https://gitee.com/z-shell).
> - Join [/r/gitee](https://www.reddit.com/r/gitee/) or start a [discussion](https://github.com/z-shell/zi/discussions/new) on GitHub.

[1]: https://github.com/z-shell/zi-src/actions/workflows/check-sh.yml/badge.svg?branch=main
[2]: https://github.com/z-shell/zi-src/actions/workflows/check-sh.yml
[3]: https://git.io/get-zi
[4]: https://z-shell.pages.dev/i-hub
[5]: https://z-shell.pages.dev/i-lab
[6]: https://raw.githubusercontent.com/z-shell/zi-src/main/lib/sh/install.sh
[7]: https://github.com/z-shell/zi/issues/new/choose
