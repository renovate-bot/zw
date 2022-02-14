---
id: zprompts
title: ⚙️ ZPrompts
image: img/logo/zi/png/501x501.png
description: Zsh themes / prompts that use original Zsh theming subsystem,
keywords: [zsh-theme, prompt, zsh, zinit, zi]
---

import Image from '@theme/IdealImage'; import Asciinema1 from '@site/static/img/assets/asciinema/48122.png';

Zsh themes (prompts) that use original Zsh theming subsystem. To use first load the plugin with (or use a plugin manager):

```shell
source {where-zprompts-is}/zprompts.plugin.zsh
```

and then invoke (to use theme `scala3`) e.g.:

```shell
  promptinit
  prompt scala3
```

Please submit your prompt if you find a time to write the `prompt_NAME_setup` file.

## Help for the prompts

Each prompt has its help available with `prompt -h {name}`, e.g. for the theme `scala`:

```shell
This prompt is themable. You can invoke it in following way:
prompt scala <prompt, default is ":: "> <prompt color> <path color> <vcs info color>
You can provide only N first arguments, N=1..4.
The default invocation is: ":: " cyan cyan magenta
```

## Video

Video showing a feature – information about how old are repository's unstaged changes

<a href="https://asciinema.org/a/48448122">
  <Image className="ScreenView" img={Asciinema1} alt="Zsh-Select view on Asciinema" />
</a>
