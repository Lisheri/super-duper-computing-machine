# yarn workspace 设置

## private: true

目的是防止提交根目录到npm或其他任意私有仓库

## workspace

管理的包的路径, 支持通配符

## Lerna 介绍

> Lerna是babel自己用于维护自己的monorepo并开源出的一个项目

+ Lerna是一个优化使用git和npm管理多包仓库的工作流工具
+ 用于管理具有多个包的JavaScript项目
+ 它可以一键把代码提交到git和npm仓库

可以自由选择使用npm还是yarn管理依赖, 可以自由配置, 如果使用yarn, 可以同时使用yarn的workspaces

一般是结合使用yarn workspaces和lerna, lerna用于发布, yarn workspaces管理包的依赖
