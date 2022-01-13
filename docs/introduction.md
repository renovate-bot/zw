---
id: intro
title: 🎉 Introduction
sidebar_position: 1
image: /img/logo/501x501.png
description: A Swiss Army Knife for Zsh - Unix shell
keywords: [introduction, zsh, z-shell, zi]
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

![zi-git-logo](/img/zi-git.png)

## Quick overview

<Tabs>
  <TabItem value="gems" label="RubyGems">

- Install [RubyGems](https://rubygems.org) 
- [$GEM_HOME](https://guides.rubygems.org/command-reference/#gem-environment) automatically set.
    
[Annex Bin-Gem-Node](ecosystem/annexes/bin-gem-node) | [Package Any Gem](https://github.com/z-shell/any-gem)

  </TabItem>
  <TabItem value="node" label="Node">

- Install [Node](https://www.npmjs.com) modules
- [$NODE_PATH](https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders) automatically set.
    
[Annex Bin-Gem-Node](ecosystem/annexes/bin-gem-node) | [Package Any Node](https://github.com/z-shell/any-node)

  </TabItem>
  <TabItem value="pip" label="Python">
    
- Install [Python](https://python.org) modules
- [$VIRTUALENV](https://docs.python.org/3/tutorial/venv.html) automatically set.
    
[Annex Bin-Gem-Node](ecosystem/annexes/bin-gem-node)

  </TabItem>
  <TabItem value="rust" label="Rust packages">

- Install [Rust packages](https://crates.io) with [rust annex](ecosystem/annexes/rust)

  </TabItem>
  <TabItem value="github" label="GitHub" default>

- Install almost everything from [GitHub](https://github.com):

[Annexes](ecosystem/annexes) | [Packages](ecosystem/packages) | [Meta Plugins](ecosystem/annexes/meta-plugins) | [Gallery of Invocations](gallery/collection)

</TabItem>
</Tabs>

- The [meta plugins](ecosystem/annexes/meta-plugins) allow to install groups of plugins via a single, friendly label. 

- The [packages](ecosystem/packages) offload the user from providing long and complex commands.

- The [annexes](ecosystem/annexes) allow to extend the plugin manager with new commands.

- Supports [Oh My Zsh](getting_started/overview#oh-my-zsh-prezto) and [Prezto](getting_started/overview#oh-my-zsh-prezto) plugins and libraries. [Migration guide](getting_started/migration).

- Docker [playground](https://github.com/z-shell/playground) for the configurations.

- Preview at [asciinema.org](https://asciinema.org/a/459358)
