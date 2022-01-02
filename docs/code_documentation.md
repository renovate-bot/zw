---
id: code
title: Code documentation
description: The documentation lists all functions, interactions between them, their comments, and features used
keywords: [code, documentation, zsh, z-shell, zi]
---

:::info

Documentation automatically updated every `Thursday 4:30 UTC` at [z-shell/docs](https://github.com/z-shell/docs).

:::

| File                             |                              Documentation                              | Description                                             |
| -------------------------------- | :---------------------------------------------------------------------: | ------------------------------------------------------- |
| [zi.zsh][zi.zsh]                 |             [adoc][zi.adoc], [pdf][zi.pdf], [html][zi.html]             | Always loaded, in `.zshrc`                              |
| [side.zsh][side.zsh]             |       [adoc][side.adoc], [pdf][install.pdf], [html][install.html]       | Functions, loaded by `*install` and `*autoload` scripts |
| [install.zsh][install.zsh]       |     [adoc][install.adoc], [pdf][install.pdf], [html][install.html]      | Functions used only when installing a plugin or snippet |
| [autoload.zsh][autoload.zsh]     |    [adoc][autoload.pdf], [pdf][autoload.pdf], [html][autoload.html]     | Functions used only in interactive `ZI` invocations     |
| [additional.zsh][additional.zsh] | [adoc][additional.adoc], [pdf][additional.pdf], [html][additional.html] | Functions additonal support                             |

[zi.zsh]: https://github.com/z-shell/zi/blob/main/zi.zsh
[zi.adoc]: https://github.com/z-shell/docs/blob/main/code/zsdoc/asciidoc/zi.zsh.adoc
[zi.pdf]: https://github.com/z-shell/docs/blob/main/code/zsdoc/pdf/zi.zsh.pdf
[zi.html]: https://z-shell.github.io/docs/zi.zsh.html

[side.zsh]:https://github.com/z-shell/zi/blob/main/lib/zsh/side.zsh
[side.adoc]: https://github.com/z-shell/docs/blob/main/code/zsdoc/asciidoc/side.zsh.adoc
[side.pdf]: https://github.com/z-shell/docs/blob/main/code/zsdoc/pdf/side.zsh.pdf
[side.html]: https://z-shell.github.io/docs/side.zsh.html

[install.zsh]: https://github.com/z-shell/zi/blob/main/lib/zsh/install.zsh
[install.adoc]: https://github.com/z-shell/docs/blob/main/code/zsdoc/asciidoc/install.zsh.adoc
[install.pdf]: https://github.com/z-shell/docs/blob/main/code/zsdoc/pdf/install.zsh.pdf
[install.html]: https://z-shell.github.io/docs/install.zsh.html

[autoload.zsh]: https://github.com/z-shell/zi/blob/main/lib/zsh/autoload.zsh
[autoload.adoc]: https://github.com/z-shell/docs/blob/main/code/zsdoc/asciidoc/autoload.zsh.adoc
[autoload.pdf]: https://github.com/z-shell/docs/blob/main/code/zsdoc/pdf/autoload.zsh.pdf
[autoload.html]: https://z-shell.github.io/docs/autoload.zsh.html

[additional.zsh]: https://github.com/z-shell/zi/blob/main/lib/zsh/additional.zsh
[additional.adoc]: https://github.com/z-shell/docs/blob/main/code/zsdoc/asciidoc/additional.zsh.adoc
[additional.pdf]: https://github.com/z-shell/docs/blob/main/code/zsdoc/pdf/additional.zsh.pdf
[additional.html]: https://z-shell.github.io/docs/additional.zsh.html
