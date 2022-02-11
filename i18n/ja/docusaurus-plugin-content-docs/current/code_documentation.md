---
id: code
title: '🔖 Code documentation'
description: The documentation lists all functions, interactions between them, their comments, and features.
keywords:
  - code
  - documentation
  - zsh
  - zinit
  - zi
  - oh-my-zsh
  - ohmyzsh
---

import APITable from '@site/src/components/APITable';

:::info

Documentation automatically updated every `Thursday 4:30 UTC` at [z-shell/docs](https://github.com/z-shell/docs).

:::

<APITable>

| File | Documentation | Description |
| --- | :-: | --- |
| [zi.zsh](https://github.com/z-shell/zi/blob/main/zi.zsh) | [adoc](https://github.com/z-shell/docs/blob/main/code/zsdoc/asciidoc/zi.zsh.adoc), [pdf](https://github.com/z-shell/docs/blob/main/code/zsdoc/pdf/zi.zsh.pdf), [html](https://z-shell.github.io/docs/code/html/zi.zsh.html) | The main script which is always loaded, in `.zshrc` |
| [side.zsh](https://github.com/z-shell/zi/blob/main/lib/zsh/side.zsh) | [adoc](https://github.com/z-shell/docs/blob/main/code/zsdoc/asciidoc/side.zsh.adoc), [pdf](https://github.com/z-shell/docs/blob/main/code/zsdoc/pdf/side.zsh.pdf), [html](https://z-shell.github.io/docs/code/html/side.zsh.html) | Functions, loaded by `install.zsh` and `autoload.zsh` scripts |
| [install.zsh](https://github.com/z-shell/zi/blob/main/lib/zsh/install.zsh) | [adoc](https://github.com/z-shell/docs/blob/main/code/zsdoc/asciidoc/install.zsh.adoc), [pdf](https://github.com/z-shell/docs/blob/main/code/zsdoc/pdf/install.zsh.pdf), [html](https://z-shell.github.io/docs/code/html/install.zsh.html) | Functions used only when installing a plugin or snippet |
| [autoload.zsh](https://github.com/z-shell/zi/blob/main/lib/zsh/autoload.zsh) | [adoc](https://github.com/z-shell/docs/blob/main/code/zsdoc/asciidoc/autoload.zsh.adoc), [pdf](https://github.com/z-shell/docs/blob/main/code/zsdoc/pdf/autoload.zsh.pdf), [html](https://z-shell.github.io/docs/code/html/autoload.zsh.html) | Functions used only in interactive `ZI` invocations |
| [additional.zsh](https://github.com/z-shell/zi/blob/main/lib/zsh/additional.zsh) | [adoc](https://github.com/z-shell/docs/blob/main/code/zsdoc/asciidoc/additional.zsh.adoc), [pdf](https://github.com/z-shell/docs/blob/main/code/zsdoc/pdf/additional.zsh.pdf), [html](https://z-shell.github.io/docs/code/html/additional.zsh.html) | Additonal support for functions |

</APITable>

:::info

Documentation updated on changes at [z-shell/docs](https://github.com/z-shell/docs).

:::

<APITable>

| File | Description |
| --- | --- |
| [Zsh Plugin Standart](https://z-shell.github.io/docs/zsh/Zsh-Plugin-Standard.html) | Proposed enhancements and codifications of the definition of a "Zsh the plugin" and the actions of plugin managers – standardization. The document covers the information on how to write a Zsh plugin. |
| [Zsh Native Scripting Handbook](https://z-shell.github.io/docs/zsh/Zsh-Native-Scripting-Handbook.html) | Handbook to keep Zsh constructs that are fast, robust, and do not depend on external tools. Such code is similar to Ruby or Perl and less like top-down shell scripts. |

</APITable>
