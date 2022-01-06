---
id: programs
title: Programs
sidebar_position: 2
description: Programs Collection
keywords: [collection, programs, zsh, z-shell, zi]
---

### [argoproj/argo-cd](https://github.com/argoproj/argo-cd) {#argoprojargo-cd}

```shell
zi for \
  as'completions' atclone'./argocd* completion zsh > _argocd' \
  atpull'%atclone' from'gh-r' if'[[ "$(uname -m)" == x86_64 ]]' light-mode \
  sbin'argocd* -> argocd' wait \
    argoproj/argo-cd
```

### [junegunn/fzf](https://github.com/junegunn/fzf) {#junegunnfzf}

```shell
# fzf
zi ice from"gh-r" as"program"
zi light @junegunn/fzf

# fzf advanced
zi for \
  atclone'mkdir -p $ZPFX/{bin,man/man1}' atpull'%atclone' \
  from'gh-r' dl'
      https://raw.githubusercontent.com/junegunn/fzf/master/shell/completion.zsh -> _fzf_completion;
      https://raw.githubusercontent.com/junegunn/fzf/master/shell/key-bindings.zsh -> key-bindings.zsh;
      https://raw.githubusercontent.com/junegunn/fzf/master/man/man1/fzf-tmux.1 -> $ZPFX/man/man1/fzf-tmux.1;
      https://raw.githubusercontent.com/junegunn/fzf/master/man/man1/fzf.1 -> $ZPFX/man/man1/fzf.1' \
  id-as'junegunn/fzf' nocompile pick'/dev/null' sbin'fzf' src'key-bindings.zsh' \
    @junegunn/fzf

# Install all fuzzy tools with meta package
zi light-mode for @fuzzy
```

### [sharkdp/fd](https://github.com/sharkdp/fd) {#sharkdpfd}

```shell
zi ice as"command" from"gh-r" mv"fd* fd" sbin"**/fd(.exe|) -> fd"
zi light @sharkdp/fd
```

### [sharkdp/bat](https://github.com/sharkdp/bat) {#sharkdpbat}

```shell
zi ice as"command" from"gh-r" mv"bat* bat" sbin"**/bat(.exe|) -> bat"
zi light @sharkdp/bat
```

### [sharkdp/hexyl](https://github.com/sharkdp/hexyl) {#sharkdphexyl}

```shell
zi ice as"command" from"gh-r" mv"hexyl* hexyl" sbin"**/hexyl(.exe|) -> hexyl"
zi light @sharkdp/hexyl
```

### [sharkdp/hyperfine](https://github.com/sharkdp/hyperfine) {#sharkdphyperfine}

```shell
zi ice as"command" from"gh-r" mv"hyperfine* hyperfine" sbin"**/hyperfine(.exe|) -> hyperfine"
zi light @sharkdp/hyperfine
```

### [sharkdp/vivid](https://github.com/sharkdp/vivid) {#sharkdpvivid}

```shell
zi ice as"command" from"gh-r" mv"vivid* vivid" sbin"**/vivid(.exe|) -> vivid"
zi light @sharkdp/vivid
```

### Install all the above sharkdp plugins {#install-all-the-above-sharkdp-plugins}

```shell
zi light-mode for @sharkdp
```

### [ogham/exa](https://github.com/ogham/exa) {#oghamexa}

```shell
zi ice as"program" from"gh-r" sbin"**/exa -> exa" atclone"cp -vf completions/exa.zsh _exa"
zi light ogham/exa
```

```shell
# Example install sharkdp/fd, sharkdp/bat, gham/exa using the 'for' syntax and z-a-bin-gem-node annex
zi from"gh-r" as"null" for \
  sbin"fzf" junegunn/fzf \
  sbin"**/fd" @sharkdp/fd \
  sbin"**/bat" @sharkdp/bat \
  sbin"**/hyperfine -> hyperfine" @sharkdp/hyperfine \
  sbin"**/exa -> exa" atclone"cp -vf completions/exa.zsh _exa" ogham/exa
```

### [docker/compose](https://github.com/docker/compose) {#dockercompose}

```shell
zi ice from"gh-r" as"program" mv"docker* -> docker-compose"
zi light docker/compose
```

### [jarun/nnn](https://github.com/jarun/nnn) {#jarunnnn}

```shell
zi pick"misc/quitcd/quitcd.zsh" sbin make light-mode for jarun/nnn
```

### [vim/vim](https://github.com/vim/vim) {#vimvim}

```shell
zi ice as"program" atclone"rm -f src/auto/config.cache; ./configure" \
  atpull"%atclone" make pick"src/vim"
zi light vim/vim
```

### [neovim/neovim](https://github.com/neovim/neovim) {#neovimneovim}

```shell
zi ice as"program" bpick"${bpick}" from"gh-r" sbin"**/bin/nvim -> nvim"
zi light neovim/neovim
```

### [direnv/direnv](https://github.com/direnv/direnv) {#direnvdirenv}

```shell
# Get binary
zi ice as"program" from"gh-r" mv"direnv* -> direnv"
zi light direnv/direnv
# Build using make
zi ice as"program" make"!" atclone"./direnv hook zsh > zhook.zsh" atpull"%atclone" src"zhook.zsh"
zi light direnv/direnv
```

### [mvdan/sh](https://github.com/mvdan/sh) {#mvdansh}

```shell
zi ice as"program" from"gh-r" mv"shfmt* -> shfmt"
zi light mvdan/sh
```

### [b4b4r07/gotcha](https://github.com/b4b4r07/gotcha) {#b4b4r07gotcha}

```shell
zi ice as"program" from"gh-r" mv"gotcha_* -> gotcha"
zi light b4b4r07/gotcha
```

### [mptre/yank](https://github.com/mptre/yank) {#mptreyank}

```shell
zi ice as"program" pick"yank" make
zi light mptre/yank
```

### [pyenv/pyenv](https://github.com/pyenv/pyenv) {#pyenvpyenv}

```shell
zi ice atclone'PYENV_ROOT="$PWD" ./libexec/pyenv init - > zpyenv.zsh' \
  atinit'export PYENV_ROOT="$PWD"' atpull"%atclone" \
  as'command' pick'bin/pyenv' src"zpyenv.zsh" nocompile'!'
zi light pyenv/pyenv
```

### [sdkman/sdkman-cli](https://github.com/sdkman/sdkman-cli) {#sdkmansdkman-cli}

```shell
zi ice as"program" pick"$ZPFX/sdkman/bin/sdk" id-as'sdkman' run-atpull \
  atclone"wget https://get.sdkman.io/?rcupdate=false -O scr.sh; SDKMAN_DIR=$ZPFX/sdkman bash scr.sh" \
  atpull"SDKMAN_DIR=$ZPFX/sdkman sdk selfupdate" \
  atinit"export SDKMAN_DIR=$ZPFX/sdkman; source $ZPFX/sdkman/bin/sdkman-init.sh"
zi light z-shell/null
```

### [asciinema/asciinema](https://github.com/asciinema/asciinema) {#asciinemaasciinema}

```shell
zi ice as"command" wait lucid atinit"export PYTHONPATH=$ZPFX/lib/python3.10/site-packages/" \
  atclone"PYTHONPATH=$ZPFX/lib/python3.10/site-packages/ python3 setup.py --quiet install --prefix $ZPFX" \
  atpull"%atclone" test"0" pick"$ZPFX/bin/asciinema"
zi load asciinema/asciinema
```

### [rust-lang/rustup](https://github.com/rust-lang/rustup) {#rust-langrustup}

```shell
# Installation of Rust compiler environment via the z-a-rust annex
zi id-as"rust" wait=1 as=null sbin="bin/*" lucid rustup \
  atload="[[ ! -f ${ZI[COMPLETIONS_DIR]}/_cargo ]] && zi creinstall -q rust; \
export CARGO_HOME=\$PWD; export RUSTUP_HOME=\$PWD/rustup" for \
  z-shell/null
```
