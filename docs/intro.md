---
id: intro
title: '🎉 Introduction'
sidebar_position: 1
image: zw/logo/320x320.png
description: Introduction to a Swiss Army Knife for Zsh, formely known as zplugin, zinit.
keywords:
  - introduction
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

import Image from '@theme/IdealImage'; import ZGitImg from '@site/static/zw/img/z_git.png';

<Image className="ZGitLogo" img={ZGitImg} alt="Install almost everything from GitHub" />

---

<Tabs>
  <TabItem value="gems" label="RubyGems">

The [RubyGems](https://rubygems.org) and [$GEM_HOME](https://guides.rubygems.org/command-reference/#gem-environment) are
automatically managed by the [bin-gem-node][1] annex or installed by the [any-gem][2] package.

  </TabItem>
  <TabItem value="node" label="Node">

The [Node](https://www.npmjs.com) modules and
[$NODE_PATH](https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders) are automatically managed by
the [bin-gem-node][1] annex or installed by the [any-node][3] package.

  </TabItem>
  <TabItem value="pip" label="Python">

The [Python](https://python.org) modules, [$VIRTUALENV](https://docs.python.org/3/tutorial/venv.html) are automatically
managed by the [bin-gem-node][1] annex.

  </TabItem>
  <TabItem value="rust" label="Rust">

The [Rust](https://crates.io) packages are managed by the [rust annex][4].

  </TabItem>
  <TabItem value="github" label="GitHub" default>

Install and control almost everything from [GitHub](https://github.com): [Annexes][5], [Packages][6], [Gallery of
Invocations][7].

</TabItem>
</Tabs>

---

## ⚡️ Fast and feature-rich

<table><tr><br />

- [Turbo mode][8] that yields **50-80%** faster Zsh startup.
- [Meta plugins](/search?q=meta+plugins) allow installing groups of plugins via a single, friendly label.
- [Packages](/search?q=packages) offload the user from providing long and complex commands.
- [Annexes](/search?q=annexes) allow to extend the plugin manager with new commands.

</tr></table>

## ☑️ Neat and flexible

<table><tr><br />

- [Customize paths][9], use [multiple prompts][10] or create [your own][11] plugins.
- Supports [Oh My Zsh][12] and [Prezto][12] plugins and libraries ([migration][13]).
- Does not use `$FPATH`, loading multiple plugins doesn't clutter `$FPATH` with the same number of entries, e.g: 10, 15,
  or more.
- Code is immune to `KSH_ARRAYS` and other options typically causing compatibility problems.
- Do not require `sudo`, and provide many workarounds e.g: setting so-called **shims** locally.

</tr></table>

## 📈 Familiarize and control

<table><tr><br />

- Visualise data: **aliases**, **functions**, **bindkeys**, **Zle widgets**, **zstyles**, **completions**,
  **variables**, `$PATH`, and `$FPATH` elements a plugin has set up.
- Quickly familiarize oneself with a new plugin and provides rich and easy-to-digest information that might be helpful
  on various occasions.
- [Load or unload][14] plugins, use the ability to [manage][15] completions.

- Docker [playground](https://github.com/z-shell/playground), test or propose configurations, preview at
  [asciinema.org](https://asciinema.org/a/459358).

</tr></table>

## 📢 Summary

<!-- markdownlint-disable -->

<table><tr align="center"><br />
  <a href="https://github.com/z-shell">
    <img align="center" src="https://raw.githubusercontent.com/z-shell/.github/main/metrics/plugin.svg" alt="z-shell/metrics" width="80%" />
    <img align="center" src="https://raw.githubusercontent.com/z-shell/.github/main/metrics/plugin.projects.svg" alt="z-shell/projects" width="80%" />
    <img align="center" src="https://raw.githubusercontent.com/z-shell/.github/main/metrics/plugin.followup.indepth.svg" alt="z-shell/followup" width="80%" />
  </a><a href="https://github.com/z-shell/zw">
    <img align="center" src="https://raw.githubusercontent.com/z-shell/.github/main/metrics/plugin.pagespeed.detailed.svg" alt="z-shell/pagespeed" width="80%" />
  </a><a href="https://github.com/z-shell/community">
    <img align="center" src="https://raw.githubusercontent.com/z-shell/.github/main/metrics/plugin.discussions.svg" alt="z-shell/discussions" width="80%" />
  </a><a href="https://twitter.com/zshell_zi">
    <img align="center" src="https://raw.githubusercontent.com/z-shell/.github/main/metrics/plugin.tweets.svg" alt="z-shell/tweets" width="80%" />
  </a><a href="https://dev.to/tag/zsh">
    <img align="center" src="https://raw.githubusercontent.com/z-shell/.github/main/metrics/plugin.dev.tag.zsh.rss.svg" alt="z-shell/dev.tag.rss" width="80%" />
  </a></tr></table><br />

<!-- markdownlint-restore -->
<!-- END introduction -->

[1]: /docs/ecosystem/annexes/bin-gem-node
[2]: https://github.com/z-shell/any-gem
[3]: https://github.com/z-shell/any-node
[4]: /docs/ecosystem/annexes/rust
[5]: /docs/ecosystem/annexes
[6]: /docs/ecosystem/packages/packages-overview
[7]: /docs/gallery/collection
[8]: /docs/getting_started/overview#turbo-mode-zsh--53
[9]: /docs/guides/customization#customizing-paths
[10]: /docs/guides/customization#multiple-prompts
[11]: /docs/guides/customization#non-github-local-plugins
[12]: /docs/getting_started/overview#oh-my-zsh-prezto
[13]: /docs/getting_started/migration
[14]: /docs/guides/commands#loading-and-unloading
[15]: /docs/guides/commands#completions-management
