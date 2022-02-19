---
id: console
title: '⚙️ Console'
image: img/logo/zi/png/501x501.png
description: A console based on the `zsh/zcurses` Zshell module.
keywords:
  - console
  - zsh-plugin
  - zi-console
  - zinit
  - zi
---

A console for [ZI](https://github.com/z-shell/zi) – based on the `zsh/zcurses` Zshell module allows the user to:

- View the currently loaded plugins in a colorful list, in one of 3 different display modes,
- Unload and load plugins,
- Delete the plugins and snippets from the disk.

> Prerequisities: [ZUI](https://github.com/z-shell/zui) library.

## Usage

Start the console by <kbd>Ctrl-O</kbd> <kbd>Ctrl-J</kbd> keyboard shortcut, or by running `ziconsole` function in the shell. Then, in the console:

| Key(s)                   | Description                                                      |
| ------------------------ | ---------------------------------------------------------------- |
| `Ctrl-U`,`Ctrl-D`        | Half page up; half page down                                     |
| `Ctrl-P`,`Ctrl-N`        | Previous line, centered; next line, centered                     |
| `Ctrl-L`                 | Redraw of whole display                                          |
| `[`, `]`                 | Jump to next and previous section (e.g.: next plugin or snippet) |
| `g`, `G`                 | Jump to beginning and end of whole interface                     |
| `<`,`>` or `{`,`}` | Horizontal scroll (i.e.: left or right)                          |
| `/`                      | Show incremental search                                          |
| `F1`                     | Jump to result (in incremental search) and back                  |
| `Esc`                    | Exit incremental search, clearing query                          |
| `Ctrl-W`                 | Delete whole word (in incremental search)                        |
| `Ctrl-K`                 | Delete whole line (in incremental search)                        |

## Screencast

[![asciicast](https://asciinema.org/a/272994.svg)](https://asciinema.org/a/272994)

## Install console

Load like any other normal plugin, e.g.:

with use of [Turbo mode](https://z-shell.pages.dev/docs/getting_started/overview#turbo-mode-zsh--53) and the [for-syntax](https://z-shell.pages.dev/docs/guides/syntax#the-for-syntax):

```shell
zi wait lucid for z-shell/zi-console
```

The plugin needs `zsh/curses` Zsh module. You can check if it's available to your Zsh by executing:

```shell
zmodload zsh/curses
```

If the call will return an error, then the `zsh/curses` module isn't available.

### Solving The Lack Of `zsh/curses` Module With ZI

You can build the `zsh/curses`-equipped Zshell with ZI by the following command:

```shell
zi ice id-as"zsh" atclone"./.preconfig
        CFLAGS='-I/usr/include -I/usr/local/include -g -O2 -Wall' \
        LDFLAGS='-L/usr/lib -L/usr/local/lib' ./configure --prefix='$ZPFX'" \
    atpull"%atclone" run-atpull make"install" pick"/dev/null"
zi load zsh-users/zsh
```

The command will build a custom `zsh` and install it under `$ZPFX` (`~/.zi/polaris` by default). The path `$ZPFX/bin` is already added to `$PATH` by ZI at first position, so starting `zsh` will run the new Zshell.

When on Gentoo, and possibly other systems, the `zsh` can still not have the ncurses library linked. To address this, utilize the [z-a-patch-dl](https://github.com/z-shell/z-a-patch-dl) annex and automatically patch the source first:

```shell
zi light z-shell/z-a-patch-dl
zi ice id-as"zsh" atclone"./.preconfig
        CFLAGS='-I/usr/include -I/usr/local/include -g -O2 -Wall' \
        LDFLAGS='-L/usr/lib -L/usr/local/lib' ./configure --prefix='$ZPFX'" \
    dl"https://gist.githubusercontent.com/z-shell/2373494c71cb6d1529344a2ed1a64b03/raw -> curses.patch" \
    patch'curses.patch' atpull"%atclone" reset \
    run-atpull make"install" pick"/dev/null"
zi load zsh-users/zsh
```

Then, to update, rebuild and reinstall the `zsh`, you can do `zi update zsh`. The binary can be safely copied over `/bin/zsh` as it has paths to all needed directories built-in.
