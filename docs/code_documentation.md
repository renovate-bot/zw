---
id: code
title: 🔖 Code documentation
description: The documentation lists all functions, interactions between them, their comments, and features.
keywords: [code, documentation, zsh, z-shell, zi]
---

import APITable from '@site/src/components/APITable';

:::info

Documentation automatically updated every `Thursday 4:30 UTC` at [z-shell/docs](https://github.com/z-shell/docs).

:::

<APITable>

| File | Documentation | Description |
| --- | :-: | --- |
| [zi.zsh][zi.zsh] | [adoc][zi.adoc], [pdf][zi.pdf], [html][zi.html] | The main script which is always loaded, in `.zshrc` |
| [side.zsh][side.zsh] | [adoc][side.adoc], [pdf][install.pdf], [html][install.html] | Functions, loaded by `install.zsh` and `autoload.zsh` scripts |
| [install.zsh][install.zsh] | [adoc][install.adoc], [pdf][install.pdf], [html][install.html] | Functions used only when installing a plugin or snippet |
| [autoload.zsh][autoload.zsh] | [adoc][autoload.pdf], [pdf][autoload.pdf], [html][autoload.html] | Functions used only in interactive `ZI` invocations |
| [additional.zsh][additional.zsh] | [adoc][additional.adoc], [pdf][additional.pdf], [html][additional.html] | Additonal support for functions |

</APITable>

:::info

Documentation updated on changes at [z-shell/docs](https://github.com/z-shell/docs).

:::

<APITable>

| File | Description |
| --- | --- |
| [Zsh Plugin Standart][zsh-plugin-standart.html] | Proposed enhancements and codifications of the definition of a "Zsh the plugin" and the actions of plugin managers – standardization. The document covers the information on how to write a Zsh plugin. |
| [Zsh Native Scripting Handbook][zsh-native-scripting-handbook.html] | Handbook to keep Zsh constructs that are fast, robust, and do not depend on external tools. Such code is similar to Ruby or Perl and less like top-down shell scripts. |

</APITable>

[zi.zsh]: https://github.com/z-shell/zi/blob/main/zi.zsh
[zi.adoc]: https://github.com/z-shell/docs/blob/main/code/zsdoc/asciidoc/zi.zsh.adoc
[zi.pdf]: https://github.com/z-shell/docs/blob/main/code/zsdoc/pdf/zi.zsh.pdf
[zi.html]: https://z-shell.github.io/docs/code/html/zi.zsh.html
[side.zsh]: https://github.com/z-shell/zi/blob/main/lib/zsh/side.zsh
[side.adoc]: https://github.com/z-shell/docs/blob/main/code/zsdoc/asciidoc/side.zsh.adoc
[side.pdf]: https://github.com/z-shell/docs/blob/main/code/zsdoc/pdf/side.zsh.pdf
[side.html]: https://z-shell.github.io/docs/code/html/side.zsh.html
[install.zsh]: https://github.com/z-shell/zi/blob/main/lib/zsh/install.zsh
[install.adoc]: https://github.com/z-shell/docs/blob/main/code/zsdoc/asciidoc/install.zsh.adoc
[install.pdf]: https://github.com/z-shell/docs/blob/main/code/zsdoc/pdf/install.zsh.pdf
[install.html]: https://z-shell.github.io/docs/code/html/install.zsh.html
[autoload.zsh]: https://github.com/z-shell/zi/blob/main/lib/zsh/autoload.zsh
[autoload.adoc]: https://github.com/z-shell/docs/blob/main/code/zsdoc/asciidoc/autoload.zsh.adoc
[autoload.pdf]: https://github.com/z-shell/docs/blob/main/code/zsdoc/pdf/autoload.zsh.pdf
[autoload.html]: https://z-shell.github.io/docs/code/html/autoload.zsh.html
[additional.zsh]: https://github.com/z-shell/zi/blob/main/lib/zsh/additional.zsh
[additional.adoc]: https://github.com/z-shell/docs/blob/main/code/zsdoc/asciidoc/additional.zsh.adoc
[additional.pdf]: https://github.com/z-shell/docs/blob/main/code/zsdoc/pdf/additional.zsh.pdf
[additional.html]: https://z-shell.github.io/docs/code/html/additional.zsh.html
[zsh-plugin-standart.html]: https://z-shell.github.io/docs/zsh/Zsh-Plugin-Standard.html
[zsh-native-scripting-handbook.html]: https://z-shell.github.io/docs/zsh/Zsh-Native-Scripting-Handbook.html
