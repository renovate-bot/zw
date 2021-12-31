---
sidebar_position: 1
id: intro
title: Introduction
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="gems" label="RubyGems">

Install [RubyGems](https://rubygems.org):

[Annex Bin-Gem-Node](https://github.com/z-shell/zi/wiki/z-a-bin-gem-node) | [Package Any Gem](https://github.com/z-shell/any-gem)

  </TabItem>
  <TabItem value="node" label="Node modules">

Install [Node modules](https://www.npmjs.com):

[Annex Bin-Gem-Node](https://github.com/z-shell/zi/wiki/z-a-bin-gem-node) | [Package Any Node](https://github.com/z-shell/any-node)

  </TabItem>
  <TabItem value="rust" label="Rust packages">

Install [Rust packages](https://crates.io):

[Annex Rust](https://github.com/z-shell/zi/wiki/z-a-rust)

  </TabItem>
  <TabItem value="github" label="GitHub" default>

Install almost everything from [GitHub](https://github.com):

[Annexes](https://github.com/z-shell/zi/wiki/Annexes) | [Packages](https://github.com/z-shell/zi/wiki/Packages) | [Annex Meta Plugins](https://github.com/z-shell/zi/wiki/z-a-meta-plugins) | [Gallery of Invocations](https://github.com/z-shell/zi/wiki/Gallery)

</TabItem>
</Tabs>

---

## Installation

### Quick install

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

### Manual install

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
