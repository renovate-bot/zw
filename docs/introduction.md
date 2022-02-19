---
id: intro
title: 🎉 Introduction
sidebar_position: 1
image: img/logo/zi/png/501x501.png
description: Introduction to a Swiss Army Knife for Zsh, formely known as zplugin, zinit.
keywords:
  - introduction
  - zsh
  - zinit
  - zi
  - oh-my-zsh
  - ohmyzsh
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem'; import Image from '@theme/IdealImage'; import ZGitImg from '@site/static/img/logo/zi/png/z_git.png';

<Image className="ZGitLogo" img={ZGitImg} alt="Install almost everything from GitHub" />

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

[Annexes](ecosystem/annexes) | [Packages](ecosystem/packages/packages-overview) | [Meta Plugins](ecosystem/annexes/meta-plugins) | [Gallery of Invocations](gallery/collection)

</TabItem>
</Tabs>

## ⚡️ Fast and feature-rich

- [Turbo mode](getting_started/overview#turbo-mode-zsh--53) that yields **50-80%** faster Zsh startup.
- [Meta plugins](/search?q=meta+plugins) allow installing groups of plugins via a single, friendly label.
- [Packages](/search?q=packages) offload the user from providing long and complex commands.
- [Annexes](/search?q=annexes) allow to extend the plugin manager with new commands.

## ☑️ Neat and flexible

- [Customize paths](guides/customization#customizing-paths), use [multiple prompts](guides/customization#multiple-prompts) or create [your own](guides/customization#non-github-local-plugins) plugins.
- Supports [Oh My Zsh](getting_started/overview#oh-my-zsh-prezto) and [Prezto](getting_started/overview#oh-my-zsh-prezto) plugins and libraries ([migration](getting_started/migration)).
- Does not use `$FPATH`, loading multiple plugins doesn't clutter `$FPATH` with the same number of entries (e.g. 10, 15, or more).
- Code is immune to `KSH_ARRAYS` and other options typically causing compatibility problems.
- Do not require `sudo`, and provide many workarounds (e.g: setting so-called **shims** locally).

## 📈 Familiarize and control

- Visualise **aliases**, **functions**, **bindkeys**, **Zle widgets**, **zstyles**, **completions**, **variables**, `$PATH`, and `$FPATH` elements a plugin has set up.
- Quickly familiarize oneself with a new plugin and provides rich and easy-to-digest information that might be helpful on various occasions.
- [Load or unload](guides/commands#loading-and-unloading) plugins, use the ability to [manage](guides/commands#completions-management) completions.

- Docker [playground](https://github.com/z-shell/playground) to test or propose configurations.
- Preview ZI at [asciinema.org](https://asciinema.org/a/459358).

## 🥇 Our Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/lunarxlark"><img src="https://avatars.githubusercontent.com/u/18758150?v=4?s=80" width="80px;" alt=""/><br /><sub><b>lunarxlark</b></sub></a><br /><a href="#translation-lunarxlark" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/the-ryujin"><img src="https://avatars.githubusercontent.com/u/98503588?v=4?s=80" width="80px;" alt=""/><br /><sub><b>竜神信仰</b></sub></a><br /><a href="#maintenance-the-ryujin" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/wicoop"><img src="https://avatars.githubusercontent.com/u/60315017?v=4?s=80" width="80px;" alt=""/><br /><sub><b>William Cooper</b></sub></a><br /><a href="#maintenance-wicoop" title="Maintenance">🚧</a> <a href="#security-wicoop" title="Security">🛡️</a></td>
    <td align="center"><a href="https://github.com/borley1211"><img src="https://avatars.githubusercontent.com/u/47778507?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Borley</b></sub></a><br /><a href="#translation-borley1211" title="Translation">🌍</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

---

<div align="center">

[**GitHub**](https://github.com/z-shell) - [**Twitter**](https://twitter.com/zshell_zi) - [**Join the team**](https://github.com/z-shell/community/issues/new?assignees=&labels=%F0%9F%91%A5+member&template=membership.yml&title=team%3A+)

</div>
