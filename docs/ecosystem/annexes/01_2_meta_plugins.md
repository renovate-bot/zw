---
id: meta-plugins
title: Meta Plugins
description: Annex - meta plugins documentation
keywords: [annex, meta-plugins, zsh, z-shell, zi]
---

import APITable from '@site/src/components/APITable';

- [Meta plugins](https://github.com/z-shell/z-a-meta-plugins) annex have the curated, optimal [ice](../../guides/02_ice.md) lists automatically applied.
- It's possible to create your own group of plugins by requesting it at [annexes](https://github.com/z-shell/zannexes) repository.

:::info

- Before using meta plugins, a meta-plugins annex have to be installed. (`zi light-mode for z-a-meta-plugins`)
- Prefix `@` used to avoid syntax conflicts. Example: `zi light-mode for @<meta-plugin-name>`
- Before installing any plugin visit original repository where available to verify that system is supported and meets other requirements.

:::

## Install meta plugins

:::note

To be able to install meta plugins, the annex of meta plugins itself has to be installed, e.g.:

```shell
# Install meta plugins annex
zi light z-shell/z-a-meta-plugins

# Install meta plugins annex and meta plugins group with the same command.
zi light-mode for z-a-meta-plugins @annexes @ext-git @zsh-users
```

:::

Following commands are examples of how to install meta plugins.

- Install annexes:

```shell
zi light @annexes
```

- Install annexes, zsh-users, console-tools

```shell
zi light-mode for @annexes @zsh-users @console-tools
```

- Same as above, but skip some of the plugins.

```shell
zi light-mode for @annexes skip'zsh-completions' @zsh-users \
skip'vivid exa tig' @console-tools
```

## The list of the currently available meta-plugin groups {#the-list-of-the-currently-available-meta-plugin-groups}

<APITable>

| Meta plugin name | Consisting plugins                                                                 |
|------------------|------------------------------------------------------------------------------------|
| @annexes         | [bin-gem-node][z-a-bin-gem-node], [readurl][z-a-readurl], [patch-dl][z-a-patch-dl], [rust][z-a-rust] |
| @annexes+rec | @annexes + [submods][z-a-submods], [unscope][z-a-unscope] |
| @annexes+add | @annexes+rec + [default-ice][z-a-default-ice], [test][z-a-test] |
| @annexes+con | @annexes + [zi-console][z-shell/zi-console] |
| @z-shell | [F-Sy-H][z-shell/F-Sy-H], [H-S-MW][z-shell/H-S-MW], [zsh-diff-so-fancy][z-shell/zsh-diff-so-fancy] |
| @z-shell2 | [zconvey][z-shell/zconvey], [zui][z-shell/zui], [zflai][z-shell/zflai] |
| @zsh-users | [zsh-syntax-highlighting][zsh-users/zsh-syntax-highlighting], [zsh-autosuggestions][zsh-users/zsh-autosuggestions], [zsh-completions][zsh-users/zsh-completions] |
| @zsh-users+fast | [F-Sy-H][z-shell/F-Sy-H], [zsh-autosuggestions][zsh-users/zsh-autosuggestions], [zsh-completions][zsh-users/zsh-completions] |
| @romkatv | [powerlevel10k][romkatv/powerlevel10k] |
| @molovo | [color][molovo/color], [revolver][molovo/revolver], [zunit][molovo/zunit] |
| @sharkdp | [fd][sharkdp/fd], [bat][sharkdp/bat], [hexyl][sharkdp/hexyl], [hyperfine][sharkdp/hyperfine], [vivid][sharkdp/vivid] |
| @developer-tools | [color][molovo/color], [revolver][molovo/revolver], [zunit][molovo/zunit], [gitignore.plugin.zsh][voronkovich/gitignore.plugin.zsh], [tig][jonas/tig] |
| @console-tools | [dircolors-material][z-shell/dircolors-material], [fd][sharkdp/fd], [bat][sharkdp/bat], [hexyl][sharkdp/hexyl], [hyperfine][sharkdp/hyperfine], [vivid][sharkdp/vivid], [exa][ogham/exa], [ripgrep][BurntSushi/ripgrep], [tig][jonas/tig] |
| @fuzzy | [fzf][z-shell/fzf] (package), [fzy][z-shell/fzy] (package), [skim][lotabout/skim], [peco][peco/peco] |
| @fuzzy-src | fzf-go, [fzy][z-shell/fzy], skim-cargo, peco-go |
| @ext-git | [git-open][paulirish/git-open], [git-recent][paulirish/git-recent], [git-my][davidosomething/git-my], [git-quick-stats][arzzen/git-quick-stats], [git-now][iwata/git-now], [git-extras][tj/git-extras], [forgit][wfxr/forgit] |
| @rust-utils |  rust-toolchain, cargo-extensions |
| @py-utils | [pyenv][z-shell/pyenv] (package) |
| @prezto | PZTM::archive, PZTM::directory, PZTM::utility |

</APITable>

![screenshot](https://raw.githubusercontent.com/z-shell/z-a-meta-plugins/main/images/fuzzy-mplg-ex.png)


It consumes time to:

- Constantly, over and over collect some new interesting plugins to install/load.
- Over and over reconstruct the new findings on the new machines.
- Constantly extend and tweak the ice list of each plugin, so that it's hard on the eyes, especially for an outsider.

## Meta Plugins Annex basics {#meta-plugins-annex-basics}

|                        Problem                        | Solution                                                                                                                                                                                                                                                                           |
|:-----------------------------------------------------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|               (1) _finding new plugins_               | the annex contains a curated, broad list of plugins, e.g.: all the console tools like `fd`, `fzf`, `exa`, `ripgrep`, etc.,                                                                                                                                                         |
| (2) _reconstructing the findings in new environments_ | it's easy to say and memorize e.g.: `zi for console-tools` – one label pulls a group of plugins and also the curated, optimal, default ice lists for each of them,                                                                                                                 |
| (3) _constant increase of complexity of the commands_ | the provided, hopefully, best/optimal ices for each plugin are handled transparently and automatically; care is given to each ice list so that the plugin loads without any glitches (e.g.: without "No files for compilation found." message and other, even such slight issues). |

Other unique benefits of the Meta-Plugins annex:

|                           Benefit                           | Description                                                                                                                                                                                                                                                                                                     |
|:-----------------------------------------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                     Plugin dependencies                     | The meta-plugins implement a dependency mechanism (to some extent), so that e.g.: selecting a from-source built [ogham/exa](https://github.com/ogham/exa) will automatically pull-in also the Rust compiler (available under meta-plugin name: `rust-toolchain`).                                               |
| Flexible disabling of chosen sub-plugins in any meta-plugin | A meta-plugin can contain many sub-plugins and it's possible to skip installing some of them by the **skip'plg-1 plg-2…'** ice, e.g.: `zi skip'ripgrep fd' for console-tools`. This way despite that some of the meta-plugins are broad the user still has control over what's and how much is being installed. |
|               Common from-source meta-plugins               | For the plugins that provide the binary programs it is often the case that a meta-plugin exists that'll build the program from source (e.g.: **fuzzy** meta-plugin and its **fuzzy-src** counterpart). This might be handy e.g.: if there's no binary for our machine.                                          |

[z-a-bin-gem-node]: https://github.com/z-shell/z-a-bin-gem-node
[z-a-readurl]: https://github.com/z-shell/z-a-readurl
[z-a-patch-dl]: https://github.com/z-shell/z-a-patch-dl
[z-a-rust]: https://github.com/z-shell/z-a-rust]
[z-a-submods]: https://github.com/z-shell/z-a-submods
[z-a-unscope]: https://github.com/z-shell/z-a-unscope
[z-a-default-ice]: https://github.com/z-shell/z-a-default-ice
[z-a-test]: https://github.com/z-shell/z-a-test
[z-shell/zi-console]: https://github.com/z-shell/zi-console
[z-shell/F-Sy-H]: https://github.com/z-shell/F-Sy-H
[z-shell/H-S-MW]: https://github.com/z-shell/H-S-MW
[z-shell/zsh-diff-so-fancy]: https://github.com/z-shell/zsh-diff-so-fancy
[z-shell/zconvey]: https://github.com/z-shell/zconvey
[z-shell/zui]: https://github.com/z-shell/zui
[z-shell/zflai]: https://github.com/z-shell/zflai
[zsh-users/zsh-syntax-highlighting]: https://github.com/zsh-users/zsh-syntax-highlighting
[zsh-users/zsh-autosuggestions]: https://github.com/zsh-users/zsh-autosuggestions
[zsh-users/zsh-completions]: https://github.com/zsh-users/zsh-completions
[romkatv/powerlevel10k]: https://github.com/romkatv/powerlevel10k
[molovo/revolver]: https://github.com/molovo/revolver
[molovo/color]: https://github.com/molovo/color
[molovo/zunit]: https://github.com/molovo/zunit
[sharkdp/fd]: https://github.com/sharkdp/fd
[sharkdp/bat]: https://github.com/sharkdp/bat
[sharkdp/hexyl]: https://github.com/sharkdp/hexyl
[sharkdp/hyperfine]: https://github.com/sharkdp/hyperfine
[sharkdp/vivid]: https://github.com/sharkdp/vivid
[voronkovich/gitignore.plugin.zsh]: https://github.com/voronkovich/gitignore.plugin.zsh
[jonas/tig]: https://github.com/jonas/tig
[z-shell/dircolors-material]: https://github.com/z-shell/dircolors-material
[ogham/exa]: https://github.com/ogham/exa
[BurntSushi/ripgrep]: https://github.com/BurntSushi/ripgrep
[z-shell/fzf]: https://github.com/z-shell/fzf
[z-shell/fzy]: https://github.com/z-shell/fzy
[lotabout/skim]: https://github.com/lotabout/skim
[peco/peco]: https://github.com/peco/peco
[paulirish/git-open]: https://github.com/paulirish/git-open
[paulirish/git-recent]: https://github.com/paulirish/git-recent
[davidosomething/git-my]: https://github.com/davidosomething/git-my
[arzzen/git-quick-stats]: https://github.com/arzzen/git-quick-stats
[iwata/git-now]: https://github.com/iwata/git-now
[tj/git-extras]: https://github.com/tj/git-extras
[wfxr/forgit]: https://github.com/wfxr/forgit
[z-shell/pyenv]: https://github.com/z-shell/pyenv
