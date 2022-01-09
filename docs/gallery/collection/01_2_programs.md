---
id: programs
title: Programs
sidebar_position: 2
description: Programs Collection
keywords: [collection, programs, zsh, z-shell, zi]
---

:::info

Related:

1. [Overview: as'program'](../../getting_started/overview#asprogram)
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

You can create your own syntax e.g:

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

### GitHub releases: [dandavison/delta](https://github.com/dandavison/delta) {#github-releases-dandavisondelta}

```shell
zi ice wait lucid as'program' from'gh-r' sbin'**/delta -> delta'
zi light dandavison/delta
```

### Script: [molovo/revolver](https://github.com/molovo/revolver) {#script-molovorevolver}

```shell
zi ice wait lucid as'program' pick'revolver'
zi light molovo/revolver
```

### Script: [zunit-zsh/zunit](https://github.com/zunit-zsh/zunit) {#script-zunit-zshzunit}

```shell
zi ice wait lucid as'program' pick'zunit' atclone'./build.zsh' atpull'%atclone'
zi load @zunit-zsh/zunit
```

### Build: [tj/git-extras](https://github.com/tj/git-extras) {#build-tjgit-extras}

```shell
zi ice wait lucid as'program' pick'$ZPFX/bin/git-*' make'PREFIX=$ZPFX' nocompile
zi light tj/git-extras
```

### Script: [Osse/git-scripts/git-unique](https://github.com/Osse/git-scripts/blob/master/git-unique) {#script-ossegit-scriptsgit-unique}

```shell
zi ice as'program' id-as'git-unique' pick'git-unique'
zi snippet https://github.com/Osse/git-scripts/blob/master/git-unique
```

### Build: [k4rthik/git-cal](https://github.com/k4rthik/git-cal) {#k4rthikgit-cal}

```shell
zi ice wait lucid as'program' atclone'perl Makefile.PL PREFIX=$ZPFX' atpull'%atclone' make'install' pick'$ZPFX/bin/git-cal'
zi light k4rthik/git-cal
```

### Script: [mfaerevaag/wd](https://github.com/mfaerevaag/wd) {#script-mfaerevaagwd}

```shell
zi ice wait lucid as'program' cp'wd.sh -> wd' mv'_wd.sh -> _wd' atpull'!git reset --hard' pick'wd'
zi light mfaerevaag/wd
```

### Script: [z-shell/zsh-diff-so-fancy](https://github.com/z-shell/zsh-diff-so-fancy) {#script-z-shellzsh-diff-so-fancy}

```shell
zi ice wait lucid as'program' pick'bin/git-dsf'
zi load z-shell/zsh-diff-so-fancy
```

### Script: [obihann/archey-osx](https://github.com/obihann/archey-osx) {#script-obihannarchey-osx}

```shell
zi ice wait lucid as'program' pick'bin/archey'
zi light obihann/archey-osx
```

### Script: [eth-p/bat-extras](https://github.com/eth-p/bat-extras) {#script-eth-pbat-extras}

```shell
zi ice lucid wait as'program' has'bat' pick'src/*'
zi light eth-p/bat-extras
```

### Script: [paulirish/git-open](https://github.com/paulirish/git-open) {#script-paulirishgit-open}

```shell
zi ice lucid wait as'program' has'git' atclone"cp git-open.1.md $ZPFX/man/man1/git-open.1" atpull'%atclone'
zi light paulirish/git-open
```

### Script: [LuRsT/hr](https://github.com/LuRsT/hr) {#script-lursthr}

```shell
zi ice lucid wait as'program' atclone"cp hr.1 $ZPFX/man/man1" atpull'%atclone'
zi light LuRsT/hr
```

### Script: [z-shell/imgur-album-downloader](https://github.com/z-shell/imgur-album-downloader) {#z-shellimgur-album-downloader}

```shell
zi ice lucid wait as'program' has'python3' pick'imguralbum.py'
zi light z-shell/imgur-album-downloader
```

### Script: [Seirdy/stpv](https://github.com/Seirdy/stpv) {#script-seirdystpv}

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

### Script: [exiftool/exiftool](https://github.com/exiftool/exiftool) {#script-exiftoolexiftool}

```shell
zi ice lucid wait as'program' has'perl' has'convert' pick'exiftool'
zi light exiftool/exiftool
```

### Script: [smxi/inxi](https://github.com/smxi/inxi) {#script-smxiinxi}

```shell
if [ -z "$SSH_CONNECTION" ]; then
  zi ice lucid wait as'program' has'perl' pick'inxi'
  zi light smxi/inxi
fi
```

### Script: [dylanaraps/pash](https://github.com/dylanaraps/pash) {#dylanarapspash}

```shell
zi ice lucid wait as'program' has'gpg'
zi light dylanaraps/pash
```

### Build: [aaronNG/reddio](https://gitlab.com/aaronNG/reddio) {#aaronngreddio}

```shell
zi ice lucid wait as'program' has'jq' pick'reddio' from'gitlab'
zi light aaronNG/reddio
```

### Script: [hackerb9/lsix](https://github.com/hackerb9/lsix) {#script-hackerb9lsix}

```shell
zi ice lucid wait as'program' has'mogrify'
zi light hackerb9/lsix
```

### Snippet: [denilsonsa/prettyping](https://github.com/denilsonsa/prettyping) {#snippet-denilsonsaprettyping}

```shell
zi ice lucid wait as'program' pick'prettyping' has'ping'
zi light denilsonsa/prettyping
```

### Build: [TheLocehiliosan/yadm](https://github.com/TheLocehiliosan/yadm) {#build-thelocehiliosanyadm}

```shell
zi ice lucid wait as'program' has'git' pick'yadm' atclone"cp yadm.1 $ZPFX/man/man1" atpull'%atclone'
zi light TheLocehiliosan/yadm
```

### Snippet: [greymd/tmux-xpanes](https://github.com/greymd/tmux-xpanes) {#snippet-greymdtmux-xpanes}

```shell
zi ice lucid wait as'program' has'tmux' pick'bin/xpanes'
zi light greymd/tmux-xpanes
```

### Snippet: [DanielG/dxld-mullvad/blob/master/am-i-mullvad.sh](https://github.com/DanielG/dxld-mullvad/blob/master/am-i-mullvad.sh) {#snippet-danielgdxld-mullvadblobmasteram-i-mullvadsh}

```shell
zi ice lucid wait as'program' has'jq'
zi snippet 'https://github.com/DanielG/dxld-mullvad/blob/master/am-i-mullvad.sh'
```

### Build: [sdushantha/farge](https://github.com/sdushantha/farge) {#build-sdushanthafarge}

```shell
if [ -n "$WAYLAND_DISPLAY" ]; then
  zi ice lucid wait as'program' pick'farge'
  zi light 'sdushantha/farge'
fi
```

### GitHub releases: [denisidoro/navi](https://github.com/denisidoro/navi) {#github-releases-denisidoronavi}

```shell
zi ice lucid wait as'program' from"gh-r" has'fzf'
zi light denisidoro/navi
```

### Build: [dylanaraps/neofetch](https://github.com/dylanaraps/neofetch) {#build-dylanarapsneofetch}

```shell
zi ice lucid wait as'program' pick'neofetch' atclone"cp neofetch.1 $ZPFX/man/man1" atpull'%atclone'
zi light dylanaraps/neofetch
```

### GitHub releases: [junegunn/fzf](https://github.com/junegunn/fzf) {#github-releases-junegunnfzf}

```shell
zi ice from"gh-r" as'program'
zi light @junegunn/fzf
```

### GitHub releases: [sharkdp/fd](https://github.com/sharkdp/fd) {#github-releases-sharkdpfd}

```shell
zi ice as"command" from"gh-r" mv"fd* fd" sbin"**/fd(.exe|) -> fd"
zi light @sharkdp/fd
```

### GitHub releases: [sharkdp/bat](https://github.com/sharkdp/bat) {#github-releases-sharkdpbat}

```shell
zi ice as"command" from"gh-r" mv"bat* bat" sbin"**/bat(.exe|) -> bat"
zi light @sharkdp/bat
```

### GitHub releases: [sharkdp/hexyl](https://github.com/sharkdp/hexyl) {#github-releases-sharkdphexyl}

```shell
zi ice as"command" from"gh-r" mv"hexyl* hexyl" sbin"**/hexyl(.exe|) -> hexyl"
zi light @sharkdp/hexyl
```

### GitHub releases: [sharkdp/hyperfine](https://github.com/sharkdp/hyperfine) {#github-releases-sharkdphyperfine}

```shell
zi ice as"command" from"gh-r" mv"hyperfine* hyperfine" sbin"**/hyperfine(.exe|) -> hyperfine"
zi light @sharkdp/hyperfine
```

### GitHub releases: [sharkdp/vivid](https://github.com/sharkdp/vivid) {#github-releases-sharkdpvivid}

```shell
zi ice as"command" from"gh-r" mv"vivid* vivid" sbin"**/vivid(.exe|) -> vivid"
zi light @sharkdp/vivid
```

### [Peltoche/lsd](https://github.com/Peltoche/lsd) {#peltochelsd}

#### [Rust annex:](../../ecosystem/annexes/rust) rust and [Peltoche/lsd](https://github.com/Peltoche/lsd) {#rust-annex-rust-and-peltochelsd}

```shell
zi ice rustup cargo"!lsd"
zi load z-shell/null
```

### GitHub releases: [ogham/exa](https://github.com/ogham/exa) {#github-releases-oghamexa}

```shell
zi ice as'program' from'gh-r' sbin'**/exa -> exa' atclone'cp -vf completions/exa.zsh _exa'
zi light ogham/exa
```

#### [Rust annex:](../../ecosystem/annexes/rust) rust and [ogham/exa](https://github.com/ogham/exa) {#rust-annex-rust-and-oghamexa}

```shell
# the `ls' shim exposing the `exa' binary
zi ice rustup cargo"!exa -> ls"
zi load z-shell/null
```

```shell
# shim with standard error redirected to /dev/null
zi ice rustup cargo"!E:exa"
zi load z-shell/null
```

### [Rust annex:](../../ecosystem/annexes/rust) rust and [ogham/exa](https://github.com/ogham/exa), [Peltoche/lsd](https://github.com/Peltoche/lsd) {#rust-annex-rust-and-oghamexa-peltochelsd}

```shell
zi ice rustup cargo"exa;lsd"
zi load z-shell/null
```

```shell
# exposes their binaries by altering $PATH
zi ice rustup cargo'exa;lsd' as"command" pick"bin/(exa|lsd)"
zi load z-shell/null
```

### GitHub releases: [docker/compose](https://github.com/docker/compose) {#github-releases-dockercompose}

```shell
zi ice from"gh-r" as'program' mv'docker* -> docker-compose'
zi light docker/compose
```

### Build: [vim/vim](https://github.com/vim/vim) {#build-vimvim}

```shell
zi ice as'program' atclone'rm -f src/auto/config.cache; ./configure' \
  atpull'%atclone' make pick'src/vim'
zi light vim/vim
```

### GitHub releases: [neovim/neovim](https://github.com/neovim/neovim) {#github-releases-neovimneovim}

```shell
zi ice as'program' bpick'\${bpick}' from'gh-r' sbin'**/bin/nvim -> nvim'
zi light neovim/neovim
```

### GitHub releases: [direnv/direnv](https://github.com/direnv/direnv) {#github-releases-direnvdirenv}

```shell
zi ice as'program' from'gh-r' mv'direnv* -> direnv'
zi light direnv/direnv
```

### Build: [direnv/direnv](https://github.com/direnv/direnv) {#build-direnvdirenv}

```shell
zi ice as'program' make'!' atclone'./direnv hook zsh > zhook.zsh' atpull'%atclone' src'zhook.zsh'
zi light direnv/direnv
```

### GitHub releases: [mvdan/sh](https://github.com/mvdan/sh) {#github-releases-mvdansh}

```shell
zi ice as'program' from'gh-r' mv'shfmt* -> shfmt'
zi light mvdan/sh
```

### GitHub releases: [b4b4r07/gotcha](https://github.com/b4b4r07/gotcha) {#github-releases-b4b4r07gotcha}

```shell
zi ice as'program' from'gh-r' mv'gotcha_* -> gotcha'
zi light b4b4r07/gotcha
```

### Build: [mptre/yank](https://github.com/mptre/yank) {#build-mptreyank}

```shell
zi ice as'program' pick'yank' make
zi light mptre/yank
```

### Build: [pyenv/pyenv](https://github.com/pyenv/pyenv) {#build-pyenvpyenv}

```shell
zi ice atclone'PYENV_ROOT="$PWD" ./libexec/pyenv init - > zpyenv.zsh' \
  atinit'export PYENV_ROOT="$PWD"' atpull"%atclone" \
  as'command' pick'bin/pyenv' src"zpyenv.zsh" nocompile'!'
zi light pyenv/pyenv
```

### Build: [sdkman/sdkman-cli](https://github.com/sdkman/sdkman-cli) {#build-sdkmansdkman-cli}

```shell
zi ice as'program' pick'$ZPFX/sdkman/bin/sdk' id-as'sdkman' run-atpull \
  atclone'curl -s "https://get.sdkman.io?rcupdate=false" -o scr.sh; SDKMAN_DIR=$ZPFX/sdkman bash scr.sh' \
  atpull'SDKMAN_DIR=$ZPFX/sdkman sdk selfupdate' \
  atinit'export SDKMAN_DIR=$ZPFX/sdkman; source $ZPFX/sdkman/bin/sdkman-init.sh'
zi light z-shell/null
```

### Build: [asciinema/asciinema](https://github.com/asciinema/asciinema) {#build-asciinemaasciinema}

```shell
zi ice as"command" wait lucid atinit"export PYTHONPATH=$ZPFX/lib/python3.10/site-packages/" \
  atclone"PYTHONPATH=$ZPFX/lib/python3.10/site-packages/ python3 setup.py --quiet install --prefix $ZPFX" \
  atpull"%atclone" test"0" pick"$ZPFX/bin/asciinema"
zi load asciinema/asciinema
```

## With [`for`](../../guides/syntax#the-for-syntax) syntax {#with-for-syntax}

### GitHub releases: [argoproj/argo-cd](https://github.com/argoproj/argo-cd) {#github-releases-argoprojargo-cd}

```shell
zi light-mode for \
  as'completions' atclone'./argocd* completion zsh > _argocd' \
  atpull'%atclone' from'gh-r' if'[[ "$(uname -m)" == x86_64 ]]' \
  sbin'argocd* -> argocd' \
    argoproj/argo-cd
```

### Build: [molovo/revolver](https://github.com/molovo/revolver) & [zunit-zsh/zunit](https://github.com/zunit-zsh/zunit) {#build-molovorevolver--zunit-zshzunit}

```shell
zi wait lucid for \
  as'program' atclone'ln -sfv revolver.zsh-completion _revolver' \
  atpull'%atclone' pick'revolver' \
    @molovo/revolver \
  as'completion' atclone'./build.zsh; ln -sfv zunit.zsh-completion _zunit' \
  atpull'%atclone' sbin'zunit' \
    @zunit-zsh/zunit
```

### [Rust annex:](../../ecosystem/annexes/rust) rust compiler environment {#rust-annex-rust-compiler-environment}

```shell
# Just install rust and make it available globally in the system
zi ice id-as"rust" wait"0" lucid rustup as"command" pick"bin/rustc" atload="export \
CARGO_HOME=\$PWD RUSTUP_HOME=\$PWD/rustup"
zi load z-shell/null
```

```shell
# More complex installation.
zi id-as"rust" wait=1 as=null sbin="bin/*" lucid rustup \
  atload="[[ ! -f ${ZI[COMPLETIONS_DIR]}/_cargo ]] && zi creinstall -q rust; \
export CARGO_HOME=\$PWD; export RUSTUP_HOME=\$PWD/rustup" for \
  z-shell/null
```

### Build: [jarun/nnn](https://github.com/jarun/nnn) {#build-jarunnnn}

```shell
zi pick"misc/quitcd/quitcd.zsh" sbin make light-mode for jarun/nnn
```

### More complex [junegunn/fzf](https://github.com/junegunn/fzf) {#more-complex-junegunnfzf}

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

### Meta plugin: [@fuzzy](../../ecosystem/annexes/meta-plugins#@fuzzy) {#meta-plugin-fuzzy}

```shell
zi light-mode for @fuzzy
```

### GitHub releases: [junegunn/fzf](https://github.com/junegunn/fzf), [sharkdp/fd](https://github.com/sharkdp/fd), [sharkdp/bat](https://github.com/sharkdp/bat) & [ogham/exa](https://github.com/ogham/exa) {#github-releases-junegunnfzf-sharkdpfd-sharkdpbat--oghamexa}

```shell
zi from"gh-r" as"null" for \
  sbin"fzf" junegunn/fzf \
  sbin"**/fd" @sharkdp/fd \
  sbin"**/bat" @sharkdp/bat \
  sbin"**/exa -> exa" atclone"cp -vf completions/exa.zsh _exa" ogham/exa
```

### Meta plugin: [@sharkdp](../../ecosystem/annexes/meta-plugins#@sharkdp) {#meta-plugin-sharkdp}

```shell
zi light-mode for @sharkdp
```
