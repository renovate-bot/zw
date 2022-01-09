---
id: submods
title: Submods
description: Annex - Submods documentation
keywords: [annex, submods, zsh, z-shell, zi]
---

[Submods](https://github.com/z-shell/z-a-submods) annex allows ZI to clone additional submodules when installing a plugin or snippet. The submodules are then automatically updated on the `zi update …` command.

This annex adds `submods''` ice to ZI which has the following syntax:

```shell
submods'{user}/{plugin} -> {output directory}; …'
```

An example command utilizing the annex and its ice:

```shell
# Load zsh-autosuggestions plugin via Prezto module: autosuggestions
zi ice svn submods'zsh-users/zsh-autosuggestions -> external'
zi snippet PZT::modules/autosuggestions
```

## Install Submods {#install-submods}

Simply load as a plugin. The following command will install the annex within ZI:

```shell
zi light z-shell/z-a-submods
```

After executing this command you can then use the `submods''` ice. The command should be placed in `~/.zshrc`.
