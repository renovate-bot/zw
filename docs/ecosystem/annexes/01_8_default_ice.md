---
id: default-ice
title: Default Ice
description: Annex - Default Ice documentation
keywords: [annex, default-ice, zsh, z-shell, zi]
---

[Default Ice](https://github.com/z-shell/z-a-default-ice) annex allows setting **default ices** for the next `zi` command.

It adds subcommand: **default-ice** which has the following synopsis:

```shell
—— default-ice --help/-h --clear/-c --show/-s --get/-g --quiet/-q --stats/-t
—— default-ice ice1'value1' ice2'value2' ⋯

 Description:
 --help/-h	→      this message
 --show/-s	→      show the currently set default ices
 --clear/-c	→      reset the default ices
 --get/-g	→      return the current ices in Reply hash
 --quiet/-q	→      hide all messages
 --stats/-t	→      show some statistics
```

## Install Default Ice

Simply load like a regular plugin, i.e.:

```zsh
zi light z-shell/z-a-default-ice
```

## Usage with [ZI](https://github.com/z-shell/zi) {#usage-with-zi}

```shell
zi default-ice lucid from"gh-r"

# Will download from gh-r and also use the lucid ice by default.
zi wait for \
  sbin        junegunn/fzf-bin \
  sbin"**/pk" peco/peco
```

Currently the `wait''` ice cannot be made default by using this new subcommand.
