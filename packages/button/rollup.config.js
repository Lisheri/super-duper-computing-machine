import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';

module.exports = [
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/index.js',
        // 构建时模块化方式
        format: 'es'
      }
    ],
    plugins: [
      vue({
        css: true,
        compileTemplate: true
      }),
      terser()
    ]
  }
]
