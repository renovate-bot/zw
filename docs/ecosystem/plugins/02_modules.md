---
sidebar_position: 2
id: modules
title: Modules
description: Zsh modules documentation
keywords: [modules, zsh, z-shell, zi]
---

## Zsh module [zpmod](https://github.com/z-shell/zpmod) {#zsh-module-zpmod}

[![👾 CodeQL](https://github.com/z-shell/zpmod/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/z-shell/zpmod/actions/workflows/codeql-analysis.yml)

The module is a binary Zsh module (think about `zmodload` Zsh command, it's that topic) which transparently and automatically **compiles sourced scripts**. Many plugin managers do not offer a compilation of plugins, the module is a solution to this. Even if a plugin manager does compile the plugin's main script (like ZI does).

## Installation {#installation}

### Without [ZI](https://github.com/z-shell/zi) {#without-zi}

Install just the **standalone** binary which can be used with any other plugin manager.

:::note

This script can be used with most plugin managers and [ZI](https://github.com/z-shell/zi) is not required.

:::

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/z-shell/zpmod/HEAD/build.sh)
```

This script will display what to add to `~/.zshrc` (2 lines) and show usage instructions.

### With [ZI](https://github.com/z-shell/zi) {#with-zi}

:::tip

[ZI](https://github.com/z-shell/zi) users can build the module by issuing the following command instead of running the above `build.sh` script.

:::

```shell
zi module build
```

This command will compile the module and display instructions on what to add to `~/.zshrc`.

## Measuring Time of sources {#measuring-time-of-sources}

Besides the compilation feature, the module also measures **duration** of each script sourcing. Issue `zpmod source-study` after loading the module at top of `~/.zshrc` to see a list of all sourced files with the time the sourcing took in milliseconds on the left. This feature allows profiling the shell startup. Also, no script can pass through that check and you will obtain a complete list of all loaded scripts, like if Zshell itself was investigating this. The list can be surprising.

## Debugging {#debugging}

To enable debug messages from the module set:

```zsh
typeset -g ZI_MOD_DEBUG=1
```

## [Zgdbm](https://github.com/z-shell/zgdbm) {#zgdbm}

Provides GDBM module as plugin

`zstyles` - The values being set are the defaults. Change the values before loading zgdbm plugin.

```shell
zstyle ":plugin:zgdbm" cppflags "-I/usr/local/include"  # Additional include directory
zstyle ":plugin:zgdbm" cflags "-Wall -O2 -g"            # Additional CFLAGS
zstyle ":plugin:zgdbm" ldflags "-L/usr/local/lib"       # Additional library directory
```
