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

必要であれば `-b <tag>` または `-b <branch>` を追加してください。 e.g:

```shell
sh -c "$(curl -fsSL https://git.io/get-zi)" -- -i skip -b v1.0.0
```

:::

Following commands installs ZI and modifies `.zshrc` with the chosen option unless the `.zshrc` file contains command `zi` - then will be skipped.

```shell
# 最小限の設定でインストールしたい場合.
sh -c "$(curl -fsSL https://git.io/get-zi)" --

# 非対話形式。リポジトリのクローンとアップデートのみ.
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

### Manual install {#manual-install}

リポジトリをクローン:

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

## Post install

Reload the shell with `exec zsh` and compile ZI with `zi self-update`.
