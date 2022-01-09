---
id: programs
title: Programs
sidebar_position: 2
description: Programs Collection
keywords: [collection, programs, zsh, z-shell, zi]
---

:::info

Related:

1. [Overview: as"program"](../../getting_started/overview#asprogram)
2. [Turbo and Lucid](../../getting_started/useage#turbo-and-lucid)
3. [The `for` syntax](../../guides/syntax#the-for-syntax)
4. [The `make` syntax](../../guides/syntax#the-make-syntax)
5. [Ice Syntax](../../guides/ice)
6. [Ice Modifiers](../../guides/ice-modifiers)
7. [Compiling programs](../../gallery/collection#compiling-programs)
8. [Customizing paths](../../guides/customization#customizing-paths)
9. [The Ice modifiers by `bin-gem-node` annex](../../ecosystem/annexes/bin-gem-node#the-ice-modifiers-provided-by-the-annex)

:::

:::tip

You can create your own syntax + conditional loading e.g:

```shell
# Common ICE modifiers

z_lucid() {
# ver'master' - to select specific version or branch, otherwise remove it if not required.
zi ice lucid ver'master' "$@"
}

zi0a() {
z_lucid wait'0a' "$@"
}

zi_program() {
zi0a as'program' "$@"
}

```

Then load as:

```shell
zi_program has'...'
zi light ...

zi_program has'...' pick'...' from'...'
zi light ...

zi_program has'...'
zi light ...
```

:::

## Without [`for`](../../guides/syntax#the-for-syntax) syntax {#without-for-syntax}

### [eth-p/bat-extras](https://github.com/eth-p/bat-extras) {#eth-pbat-extras}

```shell
zi ice lucid wait as'program' has'bat' pick'src/*'
zi light eth-p/bat-extras
```

### [paulirish/git-open](https://github.com/paulirish/git-open) {#paulirishgit-open}

```shell
zi ice lucid wait as'program' has'git' atclone"cp git-open.1.md $ZPFX/man/man1/git-open.1" atpull'%atclone'
zi light paulirish/git-open
```

### [LuRsT/hr](https://github.com/LuRsT/hr) {#lursthr}

```shell
zi ice lucid wait as'program' atclone"cp hr.1 $ZPFX/man/man1" atpull'%atclone'
zi light LuRsT/hr
```

### [z-shell/imgur-album-downloader](https://github.com/z-shell/imgur-album-downloader) {#z-shellimgur-album-downloader}

```shell
zi ice lucid wait as'program' has'python3' pick'imguralbum.py'
zi light z-shell/imgur-album-downloader
```

### [Seirdy/stpv](https://github.com/Seirdy/stpv) {#seirdystpv}

```shell
zi ice lucid wait as'program' has'fzf' pick'fzfp'
zi light Seirdy/stpv
```

```shell
zi ice lucid wait as'program' has'ueberzug' pick'stpvimg'
zi light Seirdy/stpv
```

```shell
zi ice lucid wait as'program' pick'stpv'
zi light Seirdy/stpv
```

### [exiftool/exiftool](https://github.com/exiftool/exiftool) {#exiftoolexiftool}

```shell
zi ice lucid wait as'program' has'perl' has'convert' pick'exiftool'
zi light exiftool/exiftool
```

### [smxi/inxi](https://github.com/smxi/inxi) {#smxiinxi}

```shell
if [ -z "$SSH_CONNECTION" ]; then
  zi ice lucid wait as'program' has'perl' pick'inxi'
  zi light smxi/inxi
fi
```

### [dylanaraps/pash](https://github.com/dylanaraps/pash) {#dylanarapspash}

```shell
zi ice lucid wait as'program' has'gpg'
zi light dylanaraps/pash
```

### [aaronNG/reddio](https://gitlab.com/aaronNG/reddio) {#aaronngreddio}

```shell
zi ice lucid wait as'program' has'jq' pick'reddio' from'gitlab'
zi light aaronNG/reddio
```

### [hackerb9/lsix](https://github.com/hackerb9/lsix) {#hackerb9lsix}

```shell
zi ice lucid wait as'program' has'mogrify'
zi light hackerb9/lsix
```

### [denilsonsa/prettyping](https://github.com/denilsonsa/prettyping) {#denilsonsaprettyping}

```shell
zi ice lucid wait as'program' pick'prettyping' has'ping'
zi light denilsonsa/prettyping
```

### [TheLocehiliosan/yadm](https://github.com/TheLocehiliosan/yadm) {#thelocehiliosanyadm}

```shell
zi ice lucid wait as'program' has'git' pick'yadm' atclone"cp yadm.1 $ZPFX/man/man1" atpull'%atclone'
zi light TheLocehiliosan/yadm
```

### [greymd/tmux-xpanes](https://github.com/greymd/tmux-xpanes) {#greymdtmux-xpanes}

```shell
zi ice lucid wait as'program' has'tmux' pick'bin/xpanes'
zi light greymd/tmux-xpanes
```

### [DanielG/dxld-mullvad/blob/master/am-i-mullvad.sh](https://github.com/DanielG/dxld-mullvad/blob/master/am-i-mullvad.sh) {#danielgdxld-mullvadblobmasteram-i-mullvadsh}

```shell
zi ice lucid wait as'program' has'jq'
zi snippet 'https://github.com/DanielG/dxld-mullvad/blob/master/am-i-mullvad.sh'
```

### [sdushantha/farge](https://github.com/sdushantha/farge) {#sdushanthafarge}

```shell
if [ -n "$WAYLAND_DISPLAY" ]; then
  zi ice lucid wait as'program' pick'farge'
  zi light 'sdushantha/farge'
fi
```

### [denisidoro/navi](https://github.com/denisidoro/navi) {#denisidoronavi}

```shell
zi ice lucid wait as'program' has'fzf'
zi light denisidoro/navi
```

### [dylanaraps/neofetch](https://github.com/dylanaraps/neofetch) {#dylanarapsneofetch}

```shell
zi ice lucid wait as'program' pick'neofetch' atclone"cp neofetch.1 $ZPFX/man/man1" atpull'%atclone'
zi light dylanaraps/neofetch
```

### [junegunn/fzf](https://github.com/junegunn/fzf) {#junegunnfzf}

```shell
zi ice from"gh-r" as"program"
zi light @junegunn/fzf
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

### [ogham/exa](https://github.com/ogham/exa) {#oghamexa}

```shell
zi ice as"program" from"gh-r" sbin"**/exa -> exa" atclone"cp -vf completions/exa.zsh _exa"
zi light ogham/exa
```

### [docker/compose](https://github.com/docker/compose) {#dockercompose}

```shell
zi ice from"gh-r" as"program" mv"docker* -> docker-compose"
zi light docker/compose
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

## With [`for`](../../guides/syntax#the-for-syntax) syntax {#with-for-syntax}

### [argoproj/argo-cd](https://github.com/argoproj/argo-cd) {#argoprojargo-cd}

```shell
zi light-mode for \
  as'completions' atclone'./argocd* completion zsh > _argocd' \
  atpull'%atclone' from'gh-r' if'[[ "$(uname -m)" == x86_64 ]]' \
  sbin'argocd* -> argocd' \
    argoproj/argo-cd
```

### [rust-lang/rustup](https://github.com/rust-lang/rustup) {#rust-langrustup}

```shell
# Installation of Rust compiler environment via the z-a-rust annex
zi id-as"rust" wait=1 as=null sbin="bin/*" lucid rustup \
  atload="[[ ! -f ${ZI[COMPLETIONS_DIR]}/_cargo ]] && zi creinstall -q rust; \
export CARGO_HOME=\$PWD; export RUSTUP_HOME=\$PWD/rustup" for \
  z-shell/null
```

### [jarun/nnn](https://github.com/jarun/nnn) {#jarunnnn}

```shell
zi pick"misc/quitcd/quitcd.zsh" sbin make light-mode for jarun/nnn
```

### [junegunn/fzf](https://github.com/junegunn/fzf) {#junegunnfzf}

```shell
zi for \
  atclone'mkdir -p $ZPFX/{bin,man/man1}' atpull'%atclone' \
  from'gh-r' dl'
      https://raw.githubusercontent.com/junegunn/fzf/master/shell/completion.zsh -> _fzf_completion;
      https://raw.githubusercontent.com/junegunn/fzf/master/shell/key-bindings.zsh -> key-bindings.zsh;
      https://raw.githubusercontent.com/junegunn/fzf/master/man/man1/fzf-tmux.1 -> $ZPFX/man/man1/fzf-tmux.1;
      https://raw.githubusercontent.com/junegunn/fzf/master/man/man1/fzf.1 -> $ZPFX/man/man1/fzf.1' \
  id-as'junegunn/fzf' nocompile pick'/dev/null' sbin'fzf' src'key-bindings.zsh' \
    @junegunn/fzf
```

### All Fuzzy tools as meta plugin {#all-fuzzy-tools-as-meta-plugin}

```shell
zi light-mode for @fuzzy
```

### [junegunn/fzf](https://github.com/junegunn/fzf), [sharkdp/fd](https://github.com/sharkdp/fd), [sharkdp/bat](https://github.com/sharkdp/bat) & [ogham/exa](https://github.com/ogham/exa) {#junegunnfzf-sharkdpfd-sharkdpbat--oghamexa}

```shell
zi from"gh-r" as"null" for \
  sbin"fzf" junegunn/fzf \
  sbin"**/fd" @sharkdp/fd \
  sbin"**/bat" @sharkdp/bat \
  sbin"**/exa -> exa" atclone"cp -vf completions/exa.zsh _exa" ogham/exa
```

### All [sharkdp](https://github.com/sharkdp) tools as meta plugin {#all-sharkdp-tools-as-meta-plugin}

```shell
zi light-mode for @sharkdp
```
