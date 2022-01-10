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

## Search tags table

| Tag name | Install target | Method |
| -------- | -------------- | :----: |
| GH-R     | GitHub release |        |
| SC       | Script         |        |
| B        | Build          |        |
| MPA      | Meta plugin    |        |
| RA       | Rust           |        |
| GH-R-FOR | GitHub release | `for`  |
| B-FOR    | Build          | `for`  |
| SC-FOR   | Script         | `for`  |
| RA-FOR   | Rust           | `for`  |
| MPA-FOR  | Meta plugin    | `for`  |

## Without [`for`](../../guides/syntax#the-for-syntax) syntax {#without-for-syntax}

### Type: GitHub releases

#### 1-GH-R: [dandavison/delta](https://github.com/dandavison/delta)

```shell
zi ice wait lucid as'program' from'gh-r' sbin'**/delta -> delta'
zi light dandavison/delta
```

#### 2-GH-R: [denisidoro/navi](https://github.com/denisidoro/navi)

```shell
zi ice lucid wait as'program' from"gh-r" has'fzf'
zi light denisidoro/navi
```

#### 3-GH-R: [junegunn/fzf](https://github.com/junegunn/fzf)

```shell
zi ice from"gh-r" as'program'
zi light @junegunn/fzf
```

#### 4-GH-R: [sharkdp/fd](https://github.com/sharkdp/fd)

```shell
zi ice as"command" from"gh-r" mv"fd* fd" sbin"**/fd(.exe|) -> fd"
zi light @sharkdp/fd
```

#### 5-GH-R: [sharkdp/bat](https://github.com/sharkdp/bat)

```shell
zi ice as"command" from"gh-r" mv"bat* bat" sbin"**/bat(.exe|) -> bat"
zi light @sharkdp/bat
```

#### 6-GH-R: [sharkdp/hexyl](https://github.com/sharkdp/hexyl)

```shell
zi ice as"command" from"gh-r" mv"hexyl* hexyl" sbin"**/hexyl(.exe|) -> hexyl"
zi light @sharkdp/hexyl
```

#### 7-GH-R: [sharkdp/hyperfine](https://github.com/sharkdp/hyperfine)

```shell
zi ice as"command" from"gh-r" mv"hyperfine* hyperfine" sbin"**/hyperfine(.exe|) -> hyperfine"
zi light @sharkdp/hyperfine
```

#### 8-GH-R: [sharkdp/vivid](https://github.com/sharkdp/vivid)

```shell
zi ice as"command" from"gh-r" mv"vivid* vivid" sbin"**/vivid(.exe|) -> vivid"
zi light @sharkdp/vivid
```

#### 9-GH-R: [ogham/exa](https://github.com/ogham/exa)

```shell
zi ice as'program' from'gh-r' sbin'**/exa -> exa' atclone'cp -vf completions/exa.zsh _exa'
zi light ogham/exa
```

#### 10-GH-R: [docker/compose](https://github.com/docker/compose)

```shell
zi ice from"gh-r" as'program' mv'docker* -> docker-compose'
zi light docker/compose
```

#### 11-GH-R: [neovim/neovim](https://github.com/neovim/neovim)

```shell
zi ice as'program' bpick'\${bpick}' from'gh-r' sbin'**/bin/nvim -> nvim'
zi light neovim/neovim
```

#### 12-GH-R: [direnv/direnv](https://github.com/direnv/direnv)

```shell
zi ice as'program' from'gh-r' mv'direnv* -> direnv'
zi light direnv/direnv
```

#### 13-GH-R: [mvdan/sh](https://github.com/mvdan/sh)

```shell
zi ice as'program' from'gh-r' mv'shfmt* -> shfmt'
zi light mvdan/sh
```

#### 14-GH-R: [b4b4r07/gotcha](https://github.com/b4b4r07/gotcha)

```shell
zi ice as'program' from'gh-r' mv'gotcha_* -> gotcha'
zi light b4b4r07/gotcha
```

### Type: Scripts

#### 1-SC: [molovo/revolver](https://github.com/molovo/revolver)

```shell
zi ice wait lucid as'program' pick'revolver'
zi light molovo/revolver
```

#### 2-SC: [zunit-zsh/zunit](https://github.com/zunit-zsh/zunit)

```shell
zi ice wait lucid as'program' pick'zunit' atclone'./build.zsh' atpull'%atclone'
zi load @zunit-zsh/zunit
```

#### 3-SC: [Osse/git-scripts/git-unique](https://github.com/Osse/git-scripts/blob/master/git-unique)

```shell
zi ice as'program' id-as'git-unique' pick'git-unique'
zi snippet https://github.com/Osse/git-scripts/blob/master/git-unique
```

#### 4-SC: [mfaerevaag/wd](https://github.com/mfaerevaag/wd)

```shell
zi ice wait lucid as'program' cp'wd.sh -> wd' mv'_wd.sh -> _wd' atpull'!git reset --hard' pick'wd'
zi light mfaerevaag/wd
```

#### 5-SC: [z-shell/zsh-diff-so-fancy](https://github.com/z-shell/zsh-diff-so-fancy)

```shell
zi ice wait lucid as'program' pick'bin/git-dsf'
zi load z-shell/zsh-diff-so-fancy
```

#### 6-SC: [obihann/archey-osx](https://github.com/obihann/archey-osx)

```shell
zi ice wait lucid as'program' pick'bin/archey'
zi light obihann/archey-osx
```

#### 7-SC: [eth-p/bat-extras](https://github.com/eth-p/bat-extras)

```shell
zi ice lucid wait as'program' has'bat' pick'src/*'
zi light eth-p/bat-extras
```

#### 8-SC: [paulirish/git-open](https://github.com/paulirish/git-open)

```shell
zi ice lucid wait as'program' has'git' atclone"cp git-open.1.md $ZPFX/man/man1/git-open.1" atpull'%atclone'
zi light paulirish/git-open
```

#### 9-SC: [LuRsT/hr](https://github.com/LuRsT/hr)

```shell
zi ice lucid wait as'program' atclone"cp hr.1 $ZPFX/man/man1" atpull'%atclone'
zi light LuRsT/hr
```

#### 10-SC: [z-shell/imgur-album-downloader](https://github.com/z-shell/imgur-album-downloader)

```shell
zi ice lucid wait as'program' has'python3' pick'imguralbum.py'
zi light z-shell/imgur-album-downloader
```

#### 11-SC: [Seirdy/stpv](https://github.com/Seirdy/stpv)

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

#### 12-SC: [exiftool/exiftool](https://github.com/exiftool/exiftool)

```shell
zi ice lucid wait as'program' has'perl' has'convert' pick'exiftool'
zi light exiftool/exiftool
```

#### 13-SC: [smxi/inxi](https://github.com/smxi/inxi)

```shell
if [ -z "$SSH_CONNECTION" ]; then
  zi ice lucid wait as'program' has'perl' pick'inxi'
  zi light smxi/inxi
fi
```

#### 14-SC: [dylanaraps/pash](https://github.com/dylanaraps/pash)

```shell
zi ice lucid wait as'program' has'gpg'
zi light dylanaraps/pash
```

#### 15-SC: [hackerb9/lsix](https://github.com/hackerb9/lsix)

```shell
zi ice lucid wait as'program' has'mogrify'
zi light hackerb9/lsix
```

#### 16-SC: [denilsonsa/prettyping](https://github.com/denilsonsa/prettyping)

```shell
zi ice lucid wait as'program' pick'prettyping' has'ping'
zi light denilsonsa/prettyping
```

#### 17-SC: [greymd/tmux-xpanes](https://github.com/greymd/tmux-xpanes)

```shell
zi ice lucid wait as'program' has'tmux' pick'bin/xpanes'
zi light greymd/tmux-xpanes
```

#### 18-SC: [DanielG/dxld-mullvad/blob/master/am-i-mullvad.sh](https://github.com/DanielG/dxld-mullvad/blob/master/am-i-mullvad.sh)

```shell
zi ice lucid wait as'program' has'jq'
zi snippet 'https://github.com/DanielG/dxld-mullvad/blob/master/am-i-mullvad.sh'
```

### Type: Build

#### 1-B: [tj/git-extras](https://github.com/tj/git-extras)

```shell
zi ice wait lucid as'program' pick'$ZPFX/bin/git-*' make'PREFIX=$ZPFX' nocompile
zi light tj/git-extras
```

#### 2-B: [k4rthik/git-cal](https://github.com/k4rthik/git-cal)

```shell
zi ice wait lucid as'program' atclone'perl Makefile.PL PREFIX=$ZPFX' atpull'%atclone' make'install' pick'$ZPFX/bin/git-cal'
zi light k4rthik/git-cal
```

#### 3-B: [aaronNG/reddio](https://gitlab.com/aaronNG/reddio)

```shell
zi ice lucid wait as'program' has'jq' pick'reddio' from'gitlab'
zi light aaronNG/reddio
```

#### 4-B: [TheLocehiliosan/yadm](https://github.com/TheLocehiliosan/yadm)

```shell
zi ice lucid wait as'program' has'git' pick'yadm' atclone"cp yadm.1 $ZPFX/man/man1" atpull'%atclone'
zi light TheLocehiliosan/yadm
```

#### 5-B: [sdushantha/farge](https://github.com/sdushantha/farge)

```shell
if [ -n "$WAYLAND_DISPLAY" ]; then
  zi ice lucid wait as'program' pick'farge'
  zi light 'sdushantha/farge'
fi
```

#### 6-B: [dylanaraps/neofetch](https://github.com/dylanaraps/neofetch)

```shell
zi ice lucid wait as'program' pick'neofetch' atclone"cp neofetch.1 $ZPFX/man/man1" atpull'%atclone'
zi light dylanaraps/neofetch
```

#### 7-B: [vim/vim](https://github.com/vim/vim)

```shell
zi ice as'program' atclone'rm -f src/auto/config.cache; ./configure' \
  atpull'%atclone' make pick'src/vim'
zi light vim/vim
```

#### 8-B: [direnv/direnv](https://github.com/direnv/direnv)

```shell
zi ice as'program' make'!' atclone'./direnv hook zsh > zhook.zsh' atpull'%atclone' src'zhook.zsh'
zi light direnv/direnv
```

#### 9-B: [mptre/yank](https://github.com/mptre/yank)

```shell
zi ice as'program' pick'yank' make
zi light mptre/yank
```

#### 10-B: [pyenv/pyenv](https://github.com/pyenv/pyenv)

```shell
zi ice atclone'PYENV_ROOT="$PWD" ./libexec/pyenv init - > zpyenv.zsh' \
  atinit'export PYENV_ROOT="$PWD"' atpull"%atclone" \
  as'command' pick'bin/pyenv' src"zpyenv.zsh" nocompile'!'
zi light pyenv/pyenv
```

#### 11-B: [sdkman/sdkman-cli](https://github.com/sdkman/sdkman-cli)

```shell
zi ice as'program' pick'$ZPFX/sdkman/bin/sdk' id-as'sdkman' run-atpull \
  atclone'curl -s "https://get.sdkman.io?rcupdate=false" -o scr.sh; SDKMAN_DIR=$ZPFX/sdkman bash scr.sh' \
  atpull'SDKMAN_DIR=$ZPFX/sdkman sdk selfupdate' \
  atinit'export SDKMAN_DIR=$ZPFX/sdkman; source $ZPFX/sdkman/bin/sdkman-init.sh'
zi light z-shell/null
```

#### 12-B: [asciinema/asciinema](https://github.com/asciinema/asciinema)

```shell
zi ice as"command" wait lucid atinit"export PYTHONPATH=$ZPFX/lib/python3.10/site-packages/" \
  atclone"PYTHONPATH=$ZPFX/lib/python3.10/site-packages/ python3 setup.py --quiet install --prefix $ZPFX" \
  atpull"%atclone" test"0" pick"$ZPFX/bin/asciinema"
zi load asciinema/asciinema
```

### Type: [Rust annex:](../../ecosystem/annexes/rust)

#### 1-RA: Rust and [Peltoche/lsd](https://github.com/Peltoche/lsd)

```shell
zi ice rustup cargo"!lsd"
zi load z-shell/null
```

#### 2-RA: Rust and [ogham/exa](https://github.com/ogham/exa)

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

#### 3-RA: Rust and [ogham/exa](https://github.com/ogham/exa), [Peltoche/lsd](https://github.com/Peltoche/lsd)

```shell
zi ice rustup cargo"exa;lsd"
zi load z-shell/null
```

```shell
# exposes their binaries by altering $PATH
zi ice rustup cargo'exa;lsd' as"command" pick"bin/(exa|lsd)"
zi load z-shell/null
```

## With [`for`](../../guides/syntax#the-for-syntax) syntax

### Type: GitHub releases with `for` syntax

#### 1-GH-R-FOR: [argoproj/argo-cd](https://github.com/argoproj/argo-cd)

```shell
zi light-mode for \
  as'completions' atclone'./argocd* completion zsh > _argocd' \
  atpull'%atclone' from'gh-r' if'[[ "$(uname -m)" == x86_64 ]]' \
  sbin'argocd* -> argocd' \
    argoproj/argo-cd
```

#### 2-GH-R-FOR: [junegunn/fzf](https://github.com/junegunn/fzf)

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

#### 3-GH-R-FOR: [junegunn/fzf](https://github.com/junegunn/fzf), [sharkdp/fd](https://github.com/sharkdp/fd), [sharkdp/bat](https://github.com/sharkdp/bat) & [ogham/exa](https://github.com/ogham/exa)

```shell
zi from"gh-r" as"null" for \
  sbin"fzf" junegunn/fzf \
  sbin"**/fd" @sharkdp/fd \
  sbin"**/bat" @sharkdp/bat \
  sbin"**/exa -> exa" atclone"cp -vf completions/exa.zsh _exa" ogham/exa
```

### Type: Scripts with `for` syntax

#### 1-SC-FOR: [molovo/revolver](https://github.com/molovo/revolver) & [zunit-zsh/zunit](https://github.com/zunit-zsh/zunit)

```shell
zi wait lucid for \
  as'program' atclone'ln -sfv revolver.zsh-completion _revolver' \
  atpull'%atclone' pick'revolver' \
    @molovo/revolver \
  as'completion' atclone'./build.zsh; ln -sfv zunit.zsh-completion _zunit' \
  atpull'%atclone' sbin'zunit' \
    @zunit-zsh/zunit
```

### Type: Build with `for` syntax

#### 1-B-FOR: [jarun/nnn](https://github.com/jarun/nnn)

```shell
zi pick"misc/quitcd/quitcd.zsh" sbin make light-mode for jarun/nnn
```

### Type: [Rust annex:](../../ecosystem/annexes/rust) with `for` syntax

#### 1-RA-FOR: Rust compiler environment

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

### Type: Meta plugin with `for` syntax

#### 1-MPA-FOR: [@fuzzy](../../ecosystem/annexes/meta-plugins#@fuzzy)

```shell
zi light-mode for @fuzzy
```

#### 2-MPA-FOR: [@sharkdp](../../ecosystem/annexes/meta-plugins#@sharkdp)

```shell
zi light-mode for @sharkdp
```
