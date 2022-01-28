---
id: packages
slug: /ecosystem/packages
title: '📦 Quick overview'
image: /img/logo/501x501.png
description: Packages documentation
keywords:
  - package
  - zsh
  - z-shell
  - zi
---

## The [any-gem](https://github.com/z-shell/any-gem) and [any-node](https://github.com/z-shell/any-node) packages {#the-any-gem-and-any-node-packages}

They allow to install any Gem(s) or Node module(s) locally in a newly created plugin directory. For example:

```shell
zi pack param='GEM -> rails' for any-gem
zi pack param='MOD -> doctoc' for any-node
```

If installation used in the `.zshrc` file then use `id-as'…'`, then ZI knows that the package is already installed.

:::note

The Unicode arrow is allowed in ZI syntax as in example below.

:::

```shell
zi id-as=jekyll pack param='GEM → jekyll' for any-gem
```

The binaries will be exposed without altering the PATH via shims ([bin-gem-node](../ecosystem/annexes/bin-gem-node) annex is needed). Shims are correctly removed when deleting a plugin with `zi delete ……`

The so-called packages are GitHub repositories holding a `package.json` file with the meta-data in them. This way you don't have to (but still can) specify ices, which might be handy when the ice-mod list is long and complex.

## Motivation behind packages {#motivation-behind-packages}

The motivation for adding such functionality was:

1. ZI is a flexible plugin manager, however, users often feel overwhelmed by its configuration.

2. It has multiple package-manager -like features, such as:

   - it can run `Makefiles`,
   - automatically provide shims (i.e.: forwarder scripts) for the binaries,
   - extend `$PATH` to expose the binaries, and more.

3. In general, ZI has many hooks which allow surprising things, however, their content often evolves to a gradually better and better one and it's hard to keep track of the current version of them.

4. So a solution appeared: why not publish a package at GitHub with the plugin configurations (i.e.: \[ice-modifiers\](../../guides/ice-modifiers lists) stored in a file?

## Introductory Example {#introductory-example}

This way, instead of the following command used to install `fzf`:

```shell
zi lucid as=program pick="$ZPFX/bin/(fzf|fzf-tmux)" \
  atclone="cp shell/completion.zsh _fzf_completion; \
      cp bin/(fzf|fzf-tmux) $ZPFX/bin" \
  make="PREFIX=$ZPFX install" for \
  junegunn/fzf
```

you only need:

```shell
zi pack for fzf
```

to get the complete setup of the fuzzy finder, including:

- the completion,
- the additional executable script `fzf-tmux`.

The installation is real, package-manager -like, because you don't need to invoke ZI anymore once installed to use `fzf` (that's because `fzf` is just a binary program and not e.g.: a shell function).

You can also update the package with `zi update fzf` – it'll cause the project to refresh and rebuild, like with a "normal" package manager such as `apt-get`. However, it'll actually be more like to `emerge` from Gentoo, because the installation will be from the source… unless… the user will pick up a binary installation by profile-argument specified in the `pack''` ice :)

## Pros Of Using ZI Package For Regular Software Installations {#pros-of-using-zi-package-for-regular-software-installations}

Using ZI to install software where one could use a regular package manager has several advantages:

1. **Pro:** The ZI packages typically use the URLs to the official and _latest_ distributions of the software (like e.g.: the [ecs-cli](https://github.com/z-shell/ecs-cli) package, which uses the URL: `https://amazon-ecs-cli.s3.amazonaws.com/ecs-cli-linux-amd64-latest` when installing on Linux).

2. **Pro:** You can influence the installation easily by specifying ZI ice-mods, e.g.:

   ```shell
   zi pack=bgn atclone="cp fzy.1 $ZPFX/man/man1" for fzy
   ```

   to install also the man page for the `fzy` fuzzy finder (this omission in the package will be fixed soon).

3. **Pro:** The installation is much more flexible than a normal package manager. Example available degrees of freedom:

   - to install from Git or from release-tarball, or from a binary-release file,
   - to install via shims or via extending `$PATH`, or by copying to `$ZPFX/bin`,
   - to download files and apply patches to the source by using the `patch-dl` annex features.

4. **Pro:** The installations are located in the user home directory, which doesn't require root access. Also, for Gems and Node modules, they are installed in their plugin directory, which can have advantages (e.g.: isolation allowing e.g: easy removal by `rm -rf …`).

5. **Con:** You're somewhat "on your own", with no support from any package maintainer.

Thus, summing up 1. with 4., it might be nice/convenient too, for example, have the latest ECS CLI binary installed in the home directory, without using root access and always the latest, and – summing up with 2. and 3. – to, for example, have always the latest `README` downloaded by additional ice: `dl'https://raw.githubusercontent.com/aws/amazon-ecs-cli/master/README.md'` (and then to have the `README` converted into a man page by the `remark` Markdown processor or other via an `atclone''` ice, as the tool doesn't have any official man page).

## The `Z-Shell` Organization {#the-z-shell-organization}

The home for the packages is [Z-Shell](https://github.com/z-shell) GitHub organization. You can find the available packages [here](https://github.com/search?q=topic%3Az-packages+org%3Az-shell&type=Repositories), which as of `2021-11-11` include:

- **[any-node](https://github.com/z-shell/any-node)** - Special package – it is designed for easy installing of any Node modules inside the plugin directory.
- **[any-gem](https://github.com/z-shell/any-gem)** – Special package – it is designed for easy installing of any Ruby Gems locally inside the plugin directory.
- **[apr](https://github.com/z-shell/apr)** – Provides [apache/apr](https://github.com/apache/apr) library by compiling and installing it to the `$ZPFX/bin`.
- **[fzf](https://github.com/z-shell/fzf)** - Fuzzy finder via Makefile installation of the [junegunn/fzf](https://github.com/junegunn/fzf) binary under `$ZPFX/bin`.
- **[fzy](https://github.com/z-shell/fzy)** – Fuzzy finder via Makefile-installation of the [jhawthorn/fzy](https://github.com/jhawthorn/fzy) binary under `$ZPFX/bin`.
- **[pyenv](https://github.com/z-shell/pyenv)** – Provides [pyenv/pyenv](https://github.com/pyenv/pyenv)\*\* version manager command by extending `$PATH` to make it point into the bin subdirectory of the plugin.
- **[remark](https://github.com/z-shell/remark)** - Provides the CLI command for [remarkjs/remark](https://github.com/remarkjs/remark) with two plugins:
  - Man,
  - HTML
- **[doctoc](https://github.com/z-shell/doctoc)** – Provides the [thlorenz/doctoc](https://github.com/thlorenz/doctoc) CLI command.
- **[ls_colors](https://github.com/z-shell/ls_colors)** – Provides the [trapd00r/LS_COLORS](https://github.com/trapd00r/LS_COLORS) and setups a zsh-completion system to use the definitions with:
  - GNU 'ls',
  - [ogham/exa](https://github.com/ogham/exa)'
- **[dircolors-material](https://github.com/z-shell/dircolors-material)** – The package provides the [zpm-zsh/dircolors-material](https://github.com/zpm-zsh/dircolors-material) definitions and also setups zsh-completion system to use the definitions with:
  - GNU 'ls',
  - '[ogham/exa](https://github.com/ogham/exa)'
- **[asciidoctor](https://github.com/z-shell/asciidoctor)** – Provides the CLI command for [asciidoctor](https://github.com/asciidoctor/asciidoctor)\*\*.
- **[zsh-system-completions](https://github.com/z-shell/zsh-system-completions)** – A package that brings stock Zsh completions under the control of ZI.
- **[ecs-cli](https://github.com/z-shell/ecs-cli)** – Provides the command for Amazon [ecs-cli](https://github.com/aws/amazon-ecs-cli)\*\* by copying it to `$ZPFX/bin`.
- **[subversion](https://github.com/z-shell/subversion)** – Provides the [apache/subversion](https://github.com/apache/subversion)\*\* revision control system by compiling and installing it to the `$ZPFX/bin`.
- **[github-issues](https://github.com/z-shell/github-issues)** – ZI invocations that'll install z-shell/zsh-github-issues.
- **[github-issues-srv](https://github.com/z-shell/github-issues-srv)** - The package is the puller-thread service for the z-shell/zsh-github-issues plugin. It runs the background service that downloads the new issues from GitHub.
- **[firefox-dev](https://github.com/z-shell/firefox-dev)** - Provides the CLI commands firefox-bin and [firefox](https://www.mozilla.org/en-GB/firefox/developer) by extending the `$PATH/bin`.
- **[zsh](https://github.com/z-shell/zsh)** - Builds and installs the newest [zsh-users/zsh](https://github.com/zsh-users/zsh).

## Adding Your Own Package {#adding-your-own-package}

1. Contact the author to have the repository at the [Z-Shell](https://github.com/z-shell) organization.

2. Populate the `package.json` – I suggest grabbing the one for `fzf` or `doctoc` and doing a few substitutions like `doctoc` → `your-project` and then simply filling the `default` profile in the `zi-ices` object – it's obvious how to do this.

3. The project name in the `package.json` should start with `zsh-`. The prefix will be skipped when specifying it with ZI.

4. Commit and push.
