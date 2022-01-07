---
id: completions
title: Completions
sidebar_position: 6
description: Completions Collection
keywords: [collection, completions, zsh, z-shell, zi]
---

:::info

Related:

1. [Completions Managment](../../guides/commands#completions-management)
2. [Calling compinit without turbo mode](../../guides/commands#calling-compinit-without-turbo-mode)
3. [Calling compinit with turbo mode](../../guides/commands#calling-compinit-with-turbo-mode)
4. [Ice modifiers/completions](../../guides/ice-modifiers#completions)

:::

:::tip

You can create your own syntax + conditional loading e.g:

```shell
# Common ICE modifiers

z_lucid() {
# ver'master' - to select specific version or branch. Remove it if not required.
zi ice lucid ver'master' "$@"
}

zi0a() {
z_lucid wait'0a' "$@"
}

zi_completion() {
zi0a as'completion' blockf "$@"
}
```

Then load as:

```shell
zi_completion has'...'
zi snippet ...

zi_completion has'...' pick'...' from'...'
zi light ...

zi_completion has'...'
zi snippet ...
```

:::

### [docker/cli](https://github.com/docker/cli) {#dockercli}

```shell
zi ice as"completion"
zi snippet https://github.com/docker/cli/blob/master/contrib/completion/zsh/_docker
```

### [Aloxaf/fzf-tab](https://github.com/Aloxaf/fzf-tab) {#aloxaffzf-tab}

```shell
zi ice lucid wait has'fzf'
zi light Aloxaf/fzf-tab
```

### [x-motemen/ghq](https://github.com/x-motemen/ghq/blob/master/misc/zsh/_ghq) {#x-motemenghq}

```shell
zi ice lucid wait as'completion' blockf has'ghq'
zi snippet https://github.com/x-motemen/ghq/blob/master/misc/zsh/_ghq
```

### [greymd/tmux-xpanes](https://github.com/greymd/tmux-xpanes) {#greymdtmux-xpanes}

```shell
zi ice lucid wait as'completion' blockf has'tmux' pick'completion/zsh'
zi light greymd/tmux-xpanes
```

### [rust-lang/cargo](https://github.com/rust-lang/cargo/blob/master/src/etc/_cargo) {#rust-langcargo}

```shell
zi ice lucid wait as'completion' blockf has'cargo'
zi snippet https://github.com/rust-lang/cargo/blob/master/src/etc/_cargo
```

### [ohmyzsh/rust](https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/rust/_rust) {#ohmyzshrust}

```shell
zi ice lucid wait as'completion' blockf has'rustc'
zi snippet https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/rust/_rust
```

### [BurntSushi/ripgrep/rg](https://github.com/BurntSushi/ripgrep/blob/master/complete/_rg) {#burntsushiripgreprg}

```shell
zi ice lucid wait as'completion' blockf has'rg'
zi snippet https://github.com/BurntSushi/ripgrep/blob/master/complete/_rg
```

### [TheLocehiliosan/yadm](https://github.com/TheLocehiliosan/yadm/blob/master/completion/zsh/_yadm) {#thelocehiliosanyadm}

```shell
zi ice lucid wait as'completion' blockf has'yadm'
zi snippet https://github.com/TheLocehiliosan/yadm/blob/master/completion/zsh/_yadm
```

### [dbrgn/tealdeer](https://github.com/dbrgn/tealdeer/blob/master/zsh_tealdeer) {#dbrgntealdeer}

```shell
zi ice lucid wait as'completion' blockf has'tldr' mv'zsh_tealdeer -> _tldr'
zi snippet https://github.com/dbrgn/tealdeer/blob/master/zsh_tealdeer
```

### [srijanshetty/zsh-pandoc-completion](https://github.com/srijanshetty/zsh-pandoc-completion) {#srijanshettyzsh-pandoc-completion}

```shell
zi ice lucid wait as'completion' blockf has'pandoc'
zi light srijanshetty/zsh-pandoc-completion
```

### [ohmyzsh/fd](https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/fd/_fd) {#ohmyzshfd}

```shell
zi ice lucid wait as'completion' blockf has'fd'
zi snippet https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/fd/_fd
```

### [jarun/Buku](https://github.com/jarun/Buku/blob/master/auto-completion/zsh/_buku) {#jarunbuku}

```shell
zi ice lucid wait as'completion' blockf has'buku'
zi snippet https://github.com/jarun/Buku/blob/master/auto-completion/zsh/_buku
```

### [ytdl-org/youtube-dl](https://github.com/ytdl-org/youtube-dl/blob/master/youtube-dl.plugin.zsh) {#ytdl-orgyoutube-dl}

```shell
zi ice lucid wait as'completion' blockf has'youtube-dl' mv'youtube-dl.zsh -> _youtube-dl'
zi snippet https://github.com/ytdl-org/youtube-dl/blob/master/youtube-dl.plugin.zsh
```

### [mpv-player/mpv](https://github.com/mpv-player/mpv/blob/master/etc/_mpv.zsh) {#mpv-playermpv}

```shell
zi ice lucid wait as'completion' blockf has'mpv'
zi snippet https://github.com/mpv-player/mpv/blob/master/etc/_mpv.zsh
```

### [alacritty/alacritty](https://github.com/alacritty/alacritty/blob/master/extra/completions/_alacritty) {#alacrittyalacritty}

```shell
zi ice lucid wait as'completion' blockf has'alacritty'
zi snippet https://github.com/alacritty/alacritty/blob/master/extra/completions/_alacritty
```

### [bugaevc/wl-clipboard](https://github.com/bugaevc/wl-clipboard/blob/master/completions/zsh/) {#bugaevcwl-clipboard}

```shell
zi ice lucid wait as'completion' blockf has'wl-copy'
zi snippet https://github.com/bugaevc/wl-clipboard/blob/master/completions/zsh/_wl-copy

zi ice lucid wait as'completion' blockf has'wl-paste'
zi snippet https://github.com/bugaevc/wl-clipboard/blob/master/completions/zsh/_wl-paste
```

### [flatpak/flatpak](https://github.com/flatpak/flatpak/blob/master/completion/_flatpak) {#flatpakflatpak}

```shell
zi ice lucid wait as'completion' blockf has'flatpak'
zi light https://github.com/flatpak/flatpak/blob/master/completion/_flatpak
```

### [beetbox/beets](https://github.com/beetbox/beets/blob/master/extra/_beet) {#beetboxbeets}

```shell
zi ice lucid wait as'completion' blockf has'beet'
zi snippet https://github.com/beetbox/beets/blob/master/extra/_beet
```

### [zsh-users/zsh-completions](https://github.com/zsh-users/zsh-completions) {#zsh-userszsh-completions}

```shell
zi ice lucid wait as'completion'
zi light zsh-users/zsh-completions
```

### [zchee/zsh-completions](https://github.com/zchee/zsh-completions) {#zcheezsh-completions}

```shell
zi ice lucid wait as'completion' blockf pick'src/go' src'src/zsh'
zi light zchee/zsh-completions
```

### [git/git](https://github.com/git/git/blob/master/contrib/completion/git-completion.zsh) {#gitgit}

```shell
zi ice lucid wait as'completion' blockf mv'git-completion.zsh -> _git'
zi snippet https://github.com/git/git/blob/master/contrib/completion/git-completion.zsh
```

## Local completions example {#local-completions-example}

```shell
zi ice lucid wait as'completion' blockf has'pip'
zi snippet "$SHELL_COMMON/zsh/completions/_pip"

zi ice lucid wait as'completion' blockf has'poetry'
zi snippet "$SHELL_COMMON/zsh/completions/_poetry"

zi ice lucid wait has'thefuck'
zi snippet "$SHELL_COMMON/zsh/thefuck/thefuck.sh"

zi ice lucid wait
zi snippet "$XDG_CONFIG_HOME/less/less_termcap.sh"

zi ice lucid wait pick'aliases.sh' multisrc'functions_ghq.sh pash.sh functions.sh aliases_private.sh'
zi light "$SHELL_COMMON"

zi ice lucid wait has'broot'
zi snippet "$XDG_CONFIG_HOME/broot/launcher/bash/br"
```
