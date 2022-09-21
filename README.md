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

## 组件单元测试的好处

+ 提供描述组件行为的文档
+ 节省手动测试的时间
+ 减少研发新特性时产生的bug
+ 改进设计
+ 促进重构

## Vue 单元测试依赖

+ Vue Test Utils: Vue提供的组件单元测试官方库
+ Jest: 配置少, 方便, 但是不支持SFC
+ vue-jest: 为Jest服务的预处理, 支持SFC
+ babel-jest: 对测试代码进行降级

> 安装: `yarn add jest @vue/test-utils vue-jest babel-jest -D -W`

## 配置测试工具

```json
"scripts": {
  "test": "jest",
  ...
}
```

> 注意: 如果提示找不到babel, 是由于vue-jest版本过低不支持babel7, 所以需要安装 babel-core@bridge 用于桥接
> 
> `yarn add babel-core@bridge -D -W`
> 
> 27以上版本的jest需要添加执行环境 `yarn add jest-environment-jsdom -D -W`
> 
> 然后在配置中添加 `"testEnvironment": "jsdom"`
> 
> Vue2对应的应该是1.3.0以下版本的@vue/test-utils

## Jest常用API

### 全局函数

Jest提供了三个常用的全局函数, 在测试文件中可以直接使用

+ describe(name, fn) 创建一个代码块, 将一组相关的测试组合在一起
+ test(name, fn) 测试方法, jest会调用这些测试函数, 在测试函数中调用expect
+ expect(value) 断言, 接收一个期望的值, 用于测试自己写的函数或调用的方法的返回值, 将期望的值和下面匹配器中的值进行比较, 如果相等则该测试成功, 如果不等, 则该测试失败, 会有相应的提示

### 匹配器(非常多, 下面只是一部分)

+ toBe(value)  判断值是否相等
+ toEqual(obj) 判断对象是否相等
+ toContain(value) 判断数组或字符串中是否包含

### 快照

第一次调用会把expect中的值存储到一个文本文件中, 以后再运行快照会对比当前expect函数中的值和快照文件中的结果, 如果相同测试通过, 如果不同测试失败

+ toMatchSnapshot()

## Vue Test Utils 常用 Jest常用API

+ mount()
  - 创建一个包含被挂在和渲染的Vue组件的Wrapper(包裹器, 除了记录生成的组件实例以外, 还提供了很多对组件中dom元素操作的方法便于测试组件生成的内容)
+ Wrapper
  - vm  wrapper包裹的组件实例
  - props() 返回Vue组件实例选项中的props对象, 便于测试组件的状态
  - html() 组件生成的HTML标签
  - find() 通过选择器返回匹配到的组件中的DOM元素
  - trigger() 触发DOM原生事件, 自定义事件 wrapper.vm.$emit()
  - ...

常用API如上所示, 还有更多, 可以查阅文档


## Rollup

+ Rollup是一个模块打包器，和webpack类似
+ Rollup 支持 Tree-shaking
+ 打包的结果比webpack较小
+ 开发框架/组件库时使用Rollup更合适

### 安装依赖

```shell
# rollup-plugin-terser压缩代码, rollup-plugin-vue 处理vue的sfc
yarn add rollup rollup-plugin-terser rollup-plugin-vue -D -W

# @rollup/plugin-json 让json文件作为模块加载
# rollup-plugin-postcss css预处理器
# @rollup/plugin-node-resolve 将依赖的第三方包打包进来
yarn add @rollup/plugin-json rollup-plugin-postcss @rollup/plugin-node-resolve -D -W
```

### 配置文件

由于当前项目中管理的所有文件, 打包方式都是一样的, 所以可以为所有包动态生成rollup的配置文件.

这个配置文件本质上是一个node程序, 可以通过执行这个程序为packages下所有的目录创建rollup配置文件

```js

````

