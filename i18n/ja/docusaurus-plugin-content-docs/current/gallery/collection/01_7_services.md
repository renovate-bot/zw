---
id: services
title: '🔺 Services'
sidebar_position: 7
description: Services Collection
keywords:
  - コレクション
  - services
  - zsh
  - z-shell
  - zi
---

```shell
# a service that runs the redis database, in background, single instance
zi ice wait lucid service"redis"
zi light zservices/redis
```

```shell
# Github-Issue-Tracker – the issue-puller thread
GIT_SLEEP_TIME=700
GIT_PROJECTS=z-shell/zsh-github-issues:z-shell/zi

zi ice wait lucid service"GIT" pick"zsh-github-issues.service.zsh"
zi light z-shell/zsh-github-issues
```
