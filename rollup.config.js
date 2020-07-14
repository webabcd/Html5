import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import { resolve as pathResolve } from 'path'

export default {
    input: './src/index.js', // 需要编译的 js 的入口文件
    output: {
        name: 'html5', // 这个名字要写，不然有的时候编译会有警告
        file: './dist/index.js', // 编译后的 js 文件的保存地址
        format: 'iife' // 编译格式，另外还有 umd，cjs, es 之类的
    },
    plugins: [
        // 用于解决类似 Unresolved dependencies 或者 'xxx' is imported by ***.js, but could not be resolved – treating it as an external dependency 之类的警告
        nodeResolve(),
        // 用于将 json 转换为 es6
        json(),
        // 用于将 commonjs 转换为 es6
        commonjs({
            sourceMap: false // 不用生成源映射（源映射用于保存源代码与编译后代码的映射关系，从而方便定位代码）
        }),
        // 更多配置参见 .babelrc 文件
        babel({
            exclude: 'node_modules/**' // 不转换 node_modules 中的代码
        }),
        // 用于编译 css（需要支持的浏览器会从 package.json 中的 browserslist 配置读取）
        // 注：input 的 js 文件中的 import 的 css 会被此处的 postcss 编译
        postcss({
            plugins: [autoprefixer], // 启用 postcss 的 autoprefixer 插件
            minimize: true, // 压缩 css
            extract: pathResolve(__dirname, `./dist/css.min.css`) // 编译后的 css 的保存路径
        })
    ]
}
