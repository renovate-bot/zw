---
id: commands
title: '🛠コマンド'
image: /img/logo/501x501.png
description: ZI コマンド
keywords:
  - コマンド
  - zsh
  - z-shell
  - zi
---

import APITable from '@site/src/components/APITable';

## で使用可能なコマンド <kbd>^ TAB</kbd> 完了 {#commands-available-with-tab-completion}

```shell title="zi ^TAB"
self-update          -- "Updates and Compile ❮ ZI ❯"
update               -- "Git update plugin (or all plugins and snippets if --all passed)"
zstatus              -- "Checks ❮ ZI ❯ Status"
report               -- "Show plugin's report (or all plugins' if --all passed)"
add-fpath            -- "Add plugin folder to $fpath"
bindkeys             -- "Lists bindkeys set up by each plugin"
cclear               -- "Clear stray and improper completions"
cd                   -- "Go into plugin's directory"
cdclear              -- "Clear compdef replay list"
cdisable             -- "Disable completion"
cdlist               -- "Show compdef replay list"
cdreplay             -- "Replay compdefs (to be done after compinit)"
cenable              -- "Enable completion"
changes              -- "View plugin's git log"
compile              -- "Compile plugin (or all plugins if --all passed)"
compiled             -- "Show which plugins are compiled"
compinit             -- "Refresh installed completions"
completions   clist  -- "List completions in use"
create               -- "Create plugin (also together with Github repository)"
creinstall           -- "Install completions for plugin"
csearch              -- "Search for available completions from any plugin"
cuninstall           -- "Uninstall completions for plugin"
dclear               -- "Clear report of what was going on in session"
delete               -- "Delete plugin"
dreport              -- "Report what was going on in session"
dstart        dtrace -- "Start tracking what's going on in session"
dstop                -- "Stop tracking what's going on in session"
dunload              -- "Revert changes recorded between dstart and dstop"
edit                 -- "Edit plugin's file with $EDITOR"
glance               -- "Look at plugin's source (pygmentize, {,source-}highlight)"
load                 -- "Load plugin"
loaded        list   -- "Show what plugins are loaded"
ls                   -- "List snippets in formatted and colorized manner"
module               -- "Manage binary Zsh module shipped with ❮ ZI ❯, see `zi module help'"
recall               -- "Fetch saved ice modifiers and construct `zi ice ……' command"
recently             -- "Show plugins that changed recently, argument is e.g. 1 month 2 days"
run                  -- "Execute code inside plugin's folder"
snippet              -- "Source (or add to PATH with --command) local or remote file"
srv                  -- "Control a service, command can be: stop,start,restart,next,quit;"
status               -- "Git status for plugin (or all plugins if --all passed)"
stress               -- "Test plugin for compatibility with set of options"
times                -- "Statistics on plugin loading times"
uncompile            -- "Remove compiled version of plugin (or of all plugins if --all passed)"
unload               -- "Unload plugin"
env-whitelist        -- "Allows to specify names (also patterns) of variables left unchanged during"
analytics            -- "Show ❮ ZI ❯ Analytics"
control              -- "❮ ZI ❯ Control commands"
man                  -- "Manpage"
help                 -- "Usage Information"
```

## ZIとプラグインの更新

ZI を更新するには、コマンドラインで `zi self-update` を発行します。

すべてのプラグインとスニペットを更新するには、 `zi update`を発行します。

<div align="center"><img src="/img/include/update.png" alt="Update" /></div>

プラグイン/スニペットを 1 つだけ更新したい場合は、 `zi update NAME_OF_PLUGIN`を発行します。 コミットのリストがあれば表示されます。

Some plugins require performing an action each time they're updated. One way you can do this is by using the `atpull` ice modifier. For example, writing `zi ice atpull'./configure'` before loading a plugin will execute `./configure` after a successful update. Refer to [Ice Modifiers](/search/?q=ice-modifiers) for more information.

The ice modifiers for any plugin or snippet are stored in their directory in a `._zi` subdirectory, hence the plugin doesn't have to be loaded to be correctly updated. There's one other file created there, `.zi_lstupd` – it holds the log of the new commits pulled-in in the last update.

## ターボモードなしで `compinit` を呼び出す {#calling-compinit-without-turbo-mode}

With no Turbo mode in use, compinit can be called normally, i.e.: as `autoload compinit; compinit`. This should be done after loading of all plugins and before possibly calling `zi cdreplay`.

The `cdreplay` subcommand is provided to re-play all caught `compdef` calls. The `compdef` calls are used to define a completion for a command. For example, `compdef _git git` defines that the `git` command should be completed by a `_git` function.

The `compdef` function is provided by `compinit` call. As it should be called later, after loading all of the plugins, ZI provides its own `compdef` function that catches (i.e.: records in an array) the arguments of the call, so that the loaded plugins can freely call `compdef`. Then, the `cdreplay` (compdef-replay) can be used, after `compinit` will be called (and the original `compdef` function will become available), to execute all detected `compdef` calls. To summarize:

```shell title=~/.zshrc
source ~/.zi/bin/zi.zsh

zi load "some/plugin"

(…)

compdef _gnu_generic fd  # this will be intercepted by ZI, because as the compinit
                         # isn't yet loaded, thus there's no such function `compdef'; yet
                         # ZI provides its own `compdef' function which saves the
                         # completion-definition for later possible re-run with `zi
                         # cdreplay' or `zicdreplay' (the second one can be used in hooks
                         # like atload'…', atinit'…', etc.)

(…)

zi load "other/plugin"

autoload -Uz compinit
compinit

zi cdreplay -q      # -q is for quiet; actually, run all the `compdef's saved before
                    #`compinit` call (`compinit' declares the `compdef' function, so
                    # it cannot be used until `compinit' is run; ZI solves this
                    # via intercepting the `compdef'-calls and storing them for later
                    # use with `zi cdreplay')
```

This allows calling compinit once.

:::tip

パフォーマンスの向上は、巨大例えば、シェル起動時間二重である `compinit`： **0.980** 秒と `cdreplay` 及び単 `compinit`： **0.156** 秒。

:::

## ターボモードで `compinit` を呼び出す

If you load completions using `wait'…'` [turbo mode](/search?q=turbo+mode) then you can add `atinit'zicompinit'` to the syntax-highlighting plugin (which should be the last one loaded, as their (2 projects, [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) & [F-Sy-H](https://github.com/z-shell/F-Sy-H)) documentation state), or `atload'zicompinit'` to last completion-related plugin. `zicompinit` is a function that just runs `autoload compinit; compinit`, created for convenience. There's also `zicdreplay` which will replay any caught compdefs so you can also do: `atinit'zicompinit; zicdreplay'`, etc. Basically, the whole topic is the same as normal `compinit` call, but it is done in `atinit` or `atload` hook of the last related plugin with the use of the helper functions (`zicompinit`,`zicdreplay` & `zicdclear` – see below for explanation of the last one).

### `compinit` コールのサマリー: {#summary-of-compinit-call}

```shell {10} title=~/.zshrc
source ~/.zi/bin/zi.zsh

# Load using the for-syntax
zi wait lucid for \
    "some/plugin"

zi wait lucid for \
    "other/plugin"

zi wait lucid atload"zicompinit; zicdreplay" blockf for \
    zsh-users/zsh-completions
```

### compdef を無視する {#ignoring-compdefs}

If you want to ignore compdefs provided by some plugins or snippets, place their load commands before commands loading other plugins or snippets, and issue `zi cdclear` (or `zicdclear`, designed to be used in hooks like `atload'…'`):

```shell title="~/.zshrc"
source ~/.zi/bin/zi.zsh
zi snippet OMZP::git
zi cdclear -q # <- forget completions provided by Git plugin

zi load "some/plugin"

(…)

zi load "other/plugin"

autoload -Uz compinit
compinit
zi cdreplay -q # <- execute compdefs provided by rest of plugins
zi cdlist # look at gathered compdefs
```

The `cdreplay` is important if you use plugins like `OMZP::kubectl` or `asdf-vm/asdf`, because these plugins call `compdef`.

Following commands are passed to `zi …` to obtain described effects.

## ロードとアンロード {#loading-and-unloading}

<APITable>

| Command | Description |
| :-: | --- |
| `load` `'…'` | Load plugin, can also receive absolute local path. |
| `light` `-b` `'…'` | Light plugin load, without reporting/investigating. `-b` – investigate `bindkey`-calls only. There's also `light-mode` ice which can be used to induce the no-investigating (i.e.: _light_) loading, regardless of the command used. |
| `unload` `-q` `'…'` | Unload plugin loaded with `zi load …`. `-q` – quiet. |
| `snippet` `-f` `URL` | Source local or remote file (by direct URL). `-f` – don't use cache (force redownload). The URL can use the following shorthands: `PZT::` (Prezto), `PZTM::` (Prezto module), `OMZ::` (Oh My Zsh), `OMZP::` (OMZ plugin), `OMZL::` (OMZ library), `OMZT::` (OMZ theme), e.g.: `PZTM::environment`, `OMZP::git`, etc. |

</APITable>

## 完了管理 {#completions-management}

<APITable>

| Command | Description |
| :-: | --- |
| `clist` `columns` or `completions` `columns` | List completions in use, with `columns` completions per line. `zi clist 5` will for example print 5 completions per line. Default is 3. |
| `cdisable` `'…'` | Disable completion. |
| `cenable` `'…'` | Enable completion. |
| `creinstall` `-q` `-Q` `'…'` | Install completions for plugin, can also receive absolute local path. `-q` – quiet. `-Q` - quiet all. |
| `cuninstall '…'` | Uninstall completions for plugin. |
| `csearch` | Search for available completions from any plugin. |
| `compinit` | Refresh installed completions. |
| `cclear` | Clear stray and improper completions. |
| `cdlist` | Show compdef replay list. |
| `cdreplay` `-q` | Replay compdefs (to be done after compinit). `-q` – quiet. |
| `cdclear` `-q` | Clear compdef replay list. `-q` – quiet. |

</APITable>

## アクティブセッションのトラッキング {#tracking-of-the-active-session}

<APITable>

|     Command      | Description                                       |
| :--------------: | ------------------------------------------------- |
| `dtrace, dstart` | Start investigating what's going on in session.   |
|     `dstop`      | Stop investigating what's going on in session.    |
|    `dunload`     | Revert changes recorded between dstart and dstop. |
|    `dreport`     | Report what was going on in session.              |
|     `dclear`     | Clear report of what was going on in session.     |

</APITable>

## レポートと統計 {#reports-and-statistics}

<APITable>

| Command | Description |
| :-: | --- |
| `times` `-s` `-m` `-a` | Statistics on plugin load times, sorted in order of loading. `-s` – use seconds instead of milliseconds. `-m` – show plugin loading moments and `-a` both. |
| `zstatus` | Overall ZI status. |
| `report` `'…'` `--all` | Show plugin report. `--all` – do it for all plugins. |
| `loaded` | Show loaded plugins |
| `list` `keyword` | Filter loaded plugins with only 'keyword' |
| `ls` | List snippets in formatted and colorized manner. Requires **tree** program. |
| `status` `'…'` or `URL` `--all` | Git status for plugin or svn status for snippet. `--all` – do it for all plugins and snippets. |
| `recently` `time-spec` | Show plugins that changed recently, argument is e.g. 1 month 2 days. |
| `bindkeys` | Lists bindkeys set up by each plugin. |

</APITable>

## コンパイル中

<APITable>

| Command | Description |
| :-: | --- |
| `compile` `'…'` `--all` | Compile plugin. `--all` – compile all plugins. |
| `uncompile` `'…'` `--all` | Remove compiled version of plugin. `--all` – do it for all plugins. |
| `compiled` | List plugins that are compiled. |

</APITable>

## その他のコマンド {#other-commands}

<APITable>

| Command | Description |
| :-: | --- |
| `self-update` | Updates and compiles ZI. |
| `update` `-q` `-r` `'…'` or `--all` | Update all plugins and snippets with `--all` – for quiet `-q` – execute `git reset --hard` or `svn revert` before pulling changes with `-r`. |
| `ice '…'` | Add ice to next command, argument e.g.: from"gitlab". |
| `delete` `'…'` or `--clean` `--all` | Remove plugin or snippet from disk (good to forget wrongly passed ice-modifiers) `--all` – delete plugins and snippets that are not loaded with `--clean`. |
| `cd '…'` | Jump into plugin's directory. Also support snippets if fed with URL. |
| `edit '…'` | Edit plugin's file with set \$EDITOR. |
| `glance '…'` | Look at plugin's source (pygmentize, {,source-}highlight). |
| `stress '…'` | Test plugin for compatibility with set of options. |
| `changes '…'` | View plugin's git log. |
| `create '…'` | Create plugin (also together with GitHub repository). |
| `srv` `service-id` `{command}` | Control a service, command can be: stop,start,restart,next,quit; `next` moves the service to another Zshell. |
| `recall '…'` `URL` | Fetch saved ice modifiers and construct `zi ice '…'` command. |
| `env-whitelist` `-v` `-h` `{env..}` | Allows to specify names or patterns of variables left unchanged during an unload – verbose `-v` – help `-h`. |
| `module` | Manage binary Zsh module shipped with ZI, see `zi module help`. |
| `add-fpath` `fpath` `-f` `--front` `'…'` `sub-directory` | Adds given plugin (not yet snippet) directory to `$fpath`. If the second argument is given, it is appended to the directory path. If the option `-f` or `--front` is given, the directory path is prepended instead of appended to `$fpath`. The `'…'` can be absolute path, i.e.: it's possible to also add regular directories. |
| `run` `-l` `plugin` `{command}` | Runs the given command in the given plugin's directory. If the option `-l` will be given then the plugin should be skipped – the option will cause the previous plugin to be reused. |

</APITable>

## ヘルプ & マニュアル {#help--manual}

<APITable>

|  Command   | Description        |
| :--------: | ------------------ |
| `-h, help` | Usage information. |
|   `man`    | Manual.            |

</APITable>
