---
id: intro
title: 🎉 Introduction
sidebar_position: 1
image: /img/logo/501x501.png
description: Introduction to a Swiss Army Knife for Zsh.
keywords: [introduction, zsh, z-shell, zi]
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem'

<Tabs>
  <TabItem value="gems" label="RubyGems">

Install [RubyGems](https://rubygems.org), [$GEM_HOME](https://guides.rubygems.org/command-reference/#gem-environment) automatically set.

[Annex Bin-Gem-Node](ecosystem/annexes/bin-gem-node) | [Package Any Gem](https://github.com/z-shell/any-gem)

  </TabItem>
  <TabItem value="node" label="Node">

Install [Node](https://www.npmjs.com) modules, [$NODE_PATH](https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders) automatically set.

[Annex Bin-Gem-Node](ecosystem/annexes/bin-gem-node) | [Package Any Node](https://github.com/z-shell/any-node)

  </TabItem>
  <TabItem value="pip" label="Python">

Install [Python](https://python.org) modules, [$VIRTUALENV](https://docs.python.org/3/tutorial/venv.html) automatically set.

[Annex Bin-Gem-Node](ecosystem/annexes/bin-gem-node)

  </TabItem>
  <TabItem value="rust" label="Rust">

Install [Rust](https://crates.io) packages with [rust annex](ecosystem/annexes/rust).

  </TabItem>
  <TabItem value="github" label="GitHub" default>

Install almost everything from [GitHub](https://github.com):

[Annexes](ecosystem/annexes) | [Packages](ecosystem/packages) | [Meta Plugins](ecosystem/annexes/meta-plugins) | [Gallery of Invocations](gallery/collection)

</TabItem>
</Tabs>

---

- [Turbo mode](getting_started/overview#turbo-mode-zsh--53) that yields **50-80%** faster Zsh startup.

- [Meta plugins](/search?q=meta+plugins) allow installing groups of plugins via a single, friendly label.

- [Packages](/search?q=packages) offload the user from providing long and complex commands.

- [Annexes](/search?q=annexes) allow to extend the plugin manager with new commands.

- Supports [Oh My Zsh](getting_started/overview#oh-my-zsh-prezto) and [Prezto](getting_started/overview#oh-my-zsh-prezto) plugins and libraries ([migration](getting_started/migration)).

- Does not use `$FPATH`, loading multiple plugins doesn't clutter `$FPATH` with the same number of entries (e.g. 10, 15, or more).
- Code is immune to `KSH_ARRAYS` and other options typically causing compatibility problems.
- Do not require `sudo`, and provide many workarounds (e.g: setting so-called **shims** locally).

Provides reports and statistics about:

- What **aliases**, **functions**, **bindkeys**, **Zle widgets**, **zstyles**, **completions**, **variables**, `$PATH`, and `$FPATH` elements a plugin has set up.
- Allows to quickly familiarize oneself with a new plugin and provides rich and easy-to-digest information that might be helpful on various occasions.
- Supports the unloading of plugins and the ability to list, (un)install, and selectively disable, enable plugin's completions.
- Provides functionality to create your plugins (locally/remote).

---

- Docker [playground](https://github.com/z-shell/playground) for the configurations.
- Preview ZI at [asciinema.org](https://asciinema.org/a/459358)- [Turbo mode](getting_started/overview#turbo-mode-zsh--53) that yields **50-80%** faster Zsh startup.

- [Meta plugins](/search?q=meta+plugins) allow installing groups of plugins via a single, friendly label.

- [Packages](/search?q=packages) offload the user from providing long and complex commands.

- [Annexes](/search?q=annexes) allow to extend the plugin manager with new commands.

- Supports [Oh My Zsh](getting_started/overview#oh-my-zsh-prezto) and [Prezto](getting_started/overview#oh-my-zsh-prezto) plugins and libraries ([migration](getting_started/migration)).

- Does not use `$FPATH`, loading multiple plugins doesn't clutter `$FPATH` with the same number of entries (e.g. 10, 15, or more).
- Code is immune to `KSH_ARRAYS` and other options typically causing compatibility problems.
- Do not require `sudo`, and provide many workarounds (e.g: setting so-called **shims** locally).

Provides reports and statistics about:

- What **aliases**, **functions**, **bindkeys**, **Zle widgets**, **zstyles**, **completions**, **variables**, `$PATH`, and `$FPATH` elements a plugin has set up.
- Allows to quickly familiarize oneself with a new plugin and provides rich and easy-to-digest information that might be helpful on various occasions.
- Supports the unloading of plugins and the ability to list, (un)install, and selectively disable, enable plugin's completions.
- Provides functionality to create your plugins (locally/remote).
- Docker [playground](https://github.com/z-shell/playground) for the configurations.
- Preview ZI at [asciinema.org](https://asciinema.org/a/459358)

<div align ="center">

## ✨ Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/lunarxlark"><img src="https://avatars.githubusercontent.com/u/18758150?v=4?s=80" width="80px;" alt=""/><br /><sub><b>lunarxlark</b></sub></a><br /><a href="#translation-lunarxlark" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/the-ryujin"><img src="https://avatars.githubusercontent.com/u/98503588?v=4?s=80" width="80px;" alt=""/><br /><sub><b>竜神信仰</b></sub></a><br /><a href="#maintenance-the-ryujin" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
  
</div>
