---
id: customization
title: 環境設定 & カスタマイズ
image: /img/logo/zi/png/501x501.png
description: ユーザプリファレンス & カスタマイズ
keywords:
  - カスタマイズ
  - preferences
  - zsh
  - z-shell
  - zi
---

import APITable from '@site/src/components/APITable';

## パスをカスタマイズする {#customizing-paths}

ZI をソースする前に、次の変数をカスタム値に設定できます。

```shell
declare -A ZI  # initial ZI's hash definition, if configuring before loading ZI, and then:
```

<APITable>

| Hash Field | Description |
| --- | --- |
| `ZI[BIN_DIR]` | Where ZI code resides, e.g: "~/.zi/bin" |
| `ZI[HOME_DIR]` | Where ZI should create all working directories, e.g: "~/.zi" |
| `ZI[PLUGINS_DIR]` | Override single working directory – for plugins, e.g: "/opt/zsh/zi/plugins" |
| `ZI[COMPLETIONS_DIR]` | As above, but for completion files, e.g: "/opt/zsh/zi/root_completions" |
| `ZI[SNIPPETS_DIR]` | As above, but for snippets |
| `ZI[ZMODULES_DIR]` | Override single working directory – for Zsh modules e.g: "/opt/zsh/zi/zmodules" |
| `ZI[ZCOMPDUMP_PATH]` | Path to `.zcompdump` file, with the file included (e.g: its name can be different) |
| `ZI[COMPINIT_OPTS]` | Options for `compinit` call (e.g: done by `zicompinit`), use to pass -C to speed up loading |
| `ZI[MUTE_WARNINGS]` | If set to `1`, then mutes some of the ZI warnings, specifically the `plugin already registered` warning |
| `ZI[OPTIMIZE_OUT_DISK_ACCESSES]` | If set to `1`, then ZI will skip checking if a Turbo-loaded object exists on the disk. By default, ZI skips Turbo for non-existing objects (plugins or snippets) to install them before the first prompt – without any delays, during the normal processing of `zshrc`. This option can give a performance gain of about 10 ms out of 150 ms (e.g: Zsh will start-up in 140 ms instead of 150 ms). |
| `$ZPFX` | set by default to `~/.zi/polaris`, a directory where software with `Makefile`, etc. can be pointed to, by e.g. `atclone'./configure --prefix=$ZPFX'`. |

</APITable>

## GitHub 以外 (ローカル) プラグイン {#non-github-local-plugins}

`create` subcommand with user name `_local` (default) を使用して、プラグインのスケルトンを `$ZI[PLUGINS_DIR]` で作成します。 GitHub リポジトリには接続されません (ユーザ名が `_local`であるため)。 プラグインのディレクトリに入るには、プラグイン名だけで `cd` コマンドを使います ( `_local`は省略可能です)。

ユーザ名が `_local`でない場合、ZI は GitHub にもリポジトリを作成し、正しいリポジトリオリジンをセットアップします。

## Git を拡張する {#extending-git}

いくつかのプロジェクトが git 拡張機能を提供しています。 ZI でインストールすると、次のような多くの利点があります。

- すべてのファイルが `$HOME` 未満です。管理者権限は不要です。
- 宣言的なセットアップ（Chef や Puppet など）- `.zshrc` を別のアカウントにコピーすると、Git 関連の設定も行われます。
- 例による簡単な更新： `zi update --all`。

Below is a configuration that adds multiple git extensions, loaded in Turbo mode, 1 second after prompt, with use of the [Bin-Gem-Node](https://github.com/z-shell/z-a-bin-gem-node) annex:

```shell
zi as"null" wait"1" lucid for \
    sbin    Fakerr/git-recall \
    sbin    cloneopts paulirish/git-open \
    sbin    paulirish/git-recent \
    sbin    davidosomething/git-my \
    sbin atload"export _MENU_THEME=legacy" \
            arzzen/git-quick-stats \
    sbin    iwata/git-now \
    make"PREFIX=$ZPFX install" \
            tj/git-extras \
    sbin"bin/git-dsf;bin/diff-so-fancy" \
            z-shell/zsh-diff-so-fancy \
    sbin"git-url;git-guclone" make"GITURL_NO_CGITURL=1" \
            z-shell/git-url
```

インストールされるファイルのターゲットディレクトリは `$ZPFX` (既定では`~/.zi/polaris`) です。

With [meta-plugins](https://github.com/z-shell/zi/wiki/z-a-meta-plugins) consisting of:

Annexes:

1. [z-shell/z-a-readurl](https://github.com/z-shell/z-a-readurl),
2. [z-shell/z-a-patch-dl](https://github.com/z-shell/z-a-patch-dl),
3. [z-shell/z-a-rust](https://github.com/z-shell/z-a-rust),
4. [z-shell/z-a-bin-gem-node](https://github.com/z-shell/z-a-bin-gem-node).

Git tools:

1. [paulirish/git-open](https://github.com/paulirish/git-open),
2. [paulirish/git-recent](https://github.com/paulirish/git-recent),
3. [davidosomething/git-my](https://github.com/davidosomething/git-my),
4. [arzzen/git-quick-stats](https://github.com/arzzen/git-quick-stats),
5. [iwata/git-now](https://github.com/iwata/git-now),
6. [tj/git-extras](https://github.com/tj/git-extras),
7. [wfxr/forgit](https://github.com/wfxr/forgit).

just run:

```shell
zi light-mode for z-shell/z-a-meta-plugins @annexes @ext-git
```

## Zsh options `setopt` {#zsh-options-setopt}

オプションは主に名前で参照されます。 これらの名前は大文字と小文字を区別せず、アンダースコアは無視されます。 たとえば、 `allexport` は `a__llExp_ort`に相当します。

オプション名の意味は、その前に `no`をつけることで逆転することがあるので、 `setopt No_Beep` は `unsetopt のビープ音に相当する`。 この反転は一度しかできないので、 `nonobeep` は `beep`の同義語ではありません。 同様に、 `tify` は `nonotify` ( `通知`の反転) のシノニムではありません。

一部のオプションには、1つ以上の1文字の名前もあります。 単一文字のオプションには 2 つのセットがあります。1 つはデフォルトで使用され、もう 1 つは sh/ksh (SH_OPTION_LETTERS オプションが設定されている場合に使われる) をエミュレートするために使われます。 一文字のオプションは、通常の Unix オプションに先行する `-`と同じく、シェルコマンドライン、または組込みコマンド set、setopt、unsetopt とともに使用することができます。

一文字オプションの意味は、 `-`の代わりに `+` を使うことで逆にすることができます。 一文字のオプション名の中には、オプションがオフになっていることを表すものもあり、その場合、その名前の反転はオンになっているオプションを指します。 たとえば、 `+n` は `exec`の短縮名で、 `-n` はその反転の短縮名です。 `noexec`。

起動時にシェルに与えられた 1 文字のオプションの文字列では、末尾の空白は無視されます。たとえば、文字列 `-f` は `-f`として扱われますが、文字列 `-f i` はエラーです。 これは、スクリプトを呼び出すための `#!` メカニズムを実装する多くのシステムが、末尾の空白文字を除去しないためです。

### 履歴の最適化 {#history-optimization}

<APITable>

| Option | Description |
| --- | --- |
| `setopt hist_ignore_all_dups` | Remove older duplicate entries from history. |
| `setopt hist_expire_dups_first` | Expire A Duplicate Event First When Trimming History. |
| `setopt hist_ignore_dups` | Do Not Record An Event That Was Just Recorded Again. |
| `setopt hist_reduce_blanks` | Remove superfluous blanks from history items. |
| `setopt hist_find_no_dups` | Do Not Display A Previously Found Event. |
| `setopt hist_ignore_space` | Do Not Record An Event Starting With A Space. |
| `setopt hist_save_no_dups` | Do Not Write A Duplicate Event To The History File. |
| `setopt hist_verify` | Do Not Execute Immediately Upon History Expansion. |
| `setopt append_history` | Allow multiple terminal sessions to all append to one zsh command history. |
| `setopt extended_history` | Show Timestamp In History. |
| `setopt inc_append_history` | Write To The History File Immediately, Not When The Shell Exits. |
| `setopt share_history` | Share history between different instances of the shell |

</APITable>

### その他の調整 {#other-tweaks}

<APITable>

| Option | Description |
| --- | :-- |
| `setopt bang_hist` | Treat The '!' Character Specially During Expansion. |
| `setopt multios` | Perform implicit tees or cats when multiple redirections are attempted. |
| `setopt interactive_comments` | Allow comments even in interactive shells (especially for Muness). |
| `setopt pushd_ignore_dups` | Don't push multiple copies of the same directory onto the directory stack. |
| `setopt auto_cd` | Use cd by typing directory name if it's not a command. |
| `setopt no_beep` | Don't beep on error. |
| `setopt auto_list` | Automatically list choices on ambiguous completion. |
| `setopt auto_pushd` | Make cd push the old directory onto the directory stack. |
| `setopt pushdminus` | Swapped the meaning of cd +1 and cd -1; we want them to mean the opposite of what they mean. |
| `setopt promptsubst` | Enables the substitution of parameters inside the prompt each time the prompt is drawn. |

</APITable>

## 完了システムのスタイルコントロール `zstyle` {#style-control-for-the-completion-system-zstyle}

`zstyle` は何をしますか？ - [unix.stackexchange.com/questions/214657/what-does-zstyle-do](https://unix.stackexchange.com/questions/214657/what-does-zstyle-do/239980)

`zstyle` は、補完システムの明らかなスタイルコントロールを処理しますが、それだけではありません。 例えば、vcs_info モジュールはプロンプトに git status を表示するためにこれに依存しています。 まず、 `zstyle` セクションの `man zshmodules` にあるいくつかの説明パラグラフを見ることから始めることができます。

### Fuzzy matching of completions for when you mistype them: {#fuzzy-matching-of-completions-for-when-you-mistype-them}

```shell
zstyle ':completion:*' completer _complete _match _approximate
zstyle ':completion:*:match:*' original only
zstyle -e ':completion:*:approximate:*' max-errors 'reply=($((($#PREFIX+$#SUFFIX)/3>7?7:($#PREFIX+$#SUFFIX)/3))numeric)'
```

### Pretty completions {#pretty-completions}

```shell
zstyle ':completion:*:matches' group 'yes'
zstyle ':completion:*:options' description 'yes'
zstyle ':completion:*:options' auto-description '%d'
zstyle ':completion:*:corrections' format ' %F{green}-- %d (errors: %e) --%f'
zstyle ':completion:*:descriptions' format ' %F{yellow}-- %d --%f'
zstyle ':completion:*:messages' format ' %F{purple} -- %d --%f'
zstyle ':completion:*:warnings' format ' %F{red}-- no matches found --%f'
zstyle ':completion:*:default' list-prompt '%S%M matches%s'
zstyle ':completion:*' format ' %F{yellow}-- %d --%f'
zstyle ':completion:*' group-name ''
zstyle ':completion:*' verbose yes
zstyle ':completion:*' matcher-list 'm:{a-zA-Z}={A-Za-z}' 'r:|[._-]=* r:|=*' 'l:|=* r:|=*'
zstyle ':completion:*:functions' ignored-patterns '(_*|pre(cmd|exec))'
zstyle ':completion:*' use-cache true
zstyle ':completion:*' rehash true
```

### Do menu-driven completion. {#do-menu-driven-completion}

```shell
zstyle ':completion:*' menu select
```

### Color completion for [some things](https://linuxshellaccount.blogspot.com/2008/12/color-completion-using-zsh-modules-on.html) {#color-completion-for-some-things}

```shell
zstyle ':completion:*' list-colors ${(s.:.)LS_COLORS}
```

## 無効化システム全体の `compinit` コール（Ubuntuの） {#disabling-system-wide-compinit-call-ubuntu}

Ubuntuでは、 `.zshrc` で `compinit` を呼び出さなかった時など、完了が動作することに驚くかもしれません。 これは、関数が `/etc/zshrc`で呼び出されているためです。 この呼び出しを無効にするには（速度低下を回避するために必要なこと）、ユーザーが完了機能を備えたプラグインをロードする場合、つまりほぼ100％の場合、次の行を `〜/に追加します。 zshenv`：

```shell
# Skip the not helping Ubuntu global compinit
skip_global_compinit=1
```

## 複数のプロンプト {#multiple-prompts}

<APITable>

| Syntax      | Description                                                   |
| ----------- | :------------------------------------------------------------ |
| `load'…'`   | condition that when fulfilled will cause plugin to be loaded. |
| `unload'…'` | as above, but will unload plugin.                             |

</APITable>

:::note

`zi light ……` loads the plugin without tracking it, while `zi load` tracks the plugin. To be able unload the plugin, it has to be loaded with `zi load ……` instead of `zi light ……`.

:::

<APITable>

| Syntax | Description |
| --- | :-- |
| `atload'!…'` | run the `precmd` hooks to make the prompts fully initialized when loaded in the middle of the prompt. |
| `precmd` | hooks are being normally run before each **new** prompt. |

</APITable>

:::info

感嘆符を使用すると、機能の効果が追跡されます。

:::

より良いアンロードを可能にするために、条件は毎秒チェックされます。次のような条件を使用できます。

<APITable>

| Condition | Description |
| --- | :-- |
| `![[ $PWD == *github* ]]` | Change prompt after changing directory to `*github*`. |
| `![[ $MYPROMPT = 1 ]]` | Change prompt when variable `MYPROMPT = 1` is true. |
| `![[ … ]]` | The exclamation mark causes prompt to be reset after loading or unloading the plugin `pick'/dev/null'` – disable sourcing of the default-found file. |
| `multisrc'…'` | Source multiple files. |
| `lucid` | Don't show the under-prompt message that says e.g: `Loaded geometry-zsh/geometry`. |
| `nocd` | Don't cd into the plugin's directory when executing the `atload'…'`. |
| `atload'…'` | This ice can make the path that's displayed by the theme to point to that directory. |

</APITable>

```shell
# Theme no. 1 - zprompts
zi lucid \
  load'![[ $MYPROMPT = 1 ]]' \
  unload'![[ $MYPROMPT != 1 ]]' \
  atload'!promptinit; typeset -g PSSHORT=0; prompt sprint3 yellow red green blue' nocd for \
    z-shell/zprompts
```

```shell
# Theme no. 2 – lambda-mod-zsh-theme
zi lucid load'![[ $MYPROMPT = 2 ]]' unload'![[ $MYPROMPT != 2 ]]' nocd for \
    halfo/lambda-mod-zsh-theme
```

```shell
# Theme no. 3 – lambda-gitster
zi lucid load'![[ $MYPROMPT = 3 ]]' unload'![[ $MYPROMPT != 3 ]]' nocd for \
    ergenekonyigit/lambda-gitster
```

```shell
# Theme no. 4 – geometry
zi lucid load'![[ $MYPROMPT = 4 ]]' unload'![[ $MYPROMPT != 4 ]]' \
  atload'!geometry::prompt' nocd \
  atinit'GEOMETRY_COLOR_DIR=63 GEOMETRY_PATH_COLOR=63' for \
    geometry-zsh/geometry
```

```shell
# Theme no. 5 – pure
zi lucid load'![[ $MYPROMPT = 5 ]]' unload'![[ $MYPROMPT != 5 ]]' \
  pick"/dev/null" multisrc"{async,pure}.zsh" atload'!prompt_pure_precmd' nocd for \
    sindresorhus/pure
```

```shell
# Theme no. 6 - agkozak-zsh-theme
zi lucid load'![[ $MYPROMPT = 6 ]]' unload'![[ $MYPROMPT != 6 ]]' \
  atload'!_agkozak_precmd' nocd atinit'AGKOZAK_FORCE_ASYNC_METHOD=subst-async' for \
    agkozak/agkozak-zsh-theme
```

```shell
# Theme no. 7 - zinc
zi load'![[ $MYPROMPT = 7 ]]' unload'![[ $MYPROMPT != 7 ]]' \
  compile"{zinc_functions/*,segments/*,zinc.zsh}" nocompletions \
  atload'!prompt_zinc_setup; prompt_zinc_precmd' nocd for \
    robobenklein/zinc
```

```shell
# Theme no. 8 - git-prompt
zi lucid load'![[ $MYPROMPT = 8 ]]' unload'![[ $MYPROMPT != 8 ]]' \
  atload'!_zsh_git_prompt_precmd_hook' nocd for \
    woefe/git-prompt.zsh
```
