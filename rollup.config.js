import fs from 'fs';
import path from 'path';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const isDev = process.env.NODE_ENV !== 'production';

// 公共插件配置
const plugins = [
  vue({
    // 动态注入css, 作为style标签
    css: true,
    // 将template处理为render函数
    compileTemplate: true
  }),
  json(),
  nodeResolve(),
  postcss({
    // 把css插入到style中
    // inject: true
    // 把css放到和js同一个目录
    extract: true
  })
]
// 生产环境执行代码压缩
isDev || plugins.push(terser());

// 处理的根路径
const root = path.resolve(__dirname, 'packages');

// 读取文件夹
module.exports = fs.readdirSync(root)
  // 过滤, 只保留文件夹
  .filter(item => fs.statSync(path.resolve(root, item)).isDirectory())
  // 为每一个文件夹创建对应的配置
  .map(item => {
    // 返回的就是package.json中的json对象
    const pkg = require(path.resolve(root, item, 'package.json'));
    // 每个包对应的rollup配置
    return {
      input: path.resolve(root, item, 'index.js'),
      output: [
        {
          exports: 'auto',
          file: path.resolve(root, item, pkg.main),
          format: 'cjs'
        },
        {
          exports: 'auto',
          file: path.join(root, item, pkg.module),
          format: 'es'
        }
      ],
      plugins: plugins
    }
  })
