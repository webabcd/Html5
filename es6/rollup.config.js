import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import copy from 'rollup-plugin-copy';
import { resolve as pathResolve } from 'path'

// ./ 代表当前目录
// ../ 代表上级目录
// / 代表根目录
// path.resolve() 用于拼接路径，以及将指定的路径解析为绝对路径
console.log("path1", pathResolve("./es6/src/index.js")) // D:\gitroot\Html5\es6\src\index.js
console.log("path2", pathResolve("../Html5/es6/src/index.js")) // D:\gitroot\Html5\es6\src\index.js
console.log("path3", pathResolve("/gitroot/Html5/es6/src/index.js")) // D:\gitroot\Html5\es6\src\index.js
console.log("path4", pathResolve(__dirname)) // D:\gitroot\Html5\es6
console.log("path5", pathResolve(__dirname, `./src/index.js`)) // D:\gitroot\Html5\es6\src\index.js

export default {
    input: './es6/src/index.js', // 需要编译的 js 的入口文件
    output: {
        name: 'html5_es6', // 这个名字要写，不然有的时候编译会有警告
        file: './es6/dist/index.js', // 编译后的 js 文件的保存地址
        format: 'iife', // 编译格式，另外还有 umd，cjs, es 之类的
        sourcemap: true, // 启用源代码映射，以便通过源码调试
    },
    plugins: [
        // 用于解决类似 Unresolved dependencies 或者 'xxx' is imported by ***.js, but could not be resolved – treating it as an external dependency 之类的警告
        nodeResolve(),
        // 用于将 json 转换为 es6
        json(),
        // 用于将 commonjs 转换为 es6（比如，如果你的代码中有 require 的话，那么这是不能在浏览器中运行的，此时就可以用这个插件可转换一下）
        commonjs({
            sourceMap: false // 不用生成源映射（源映射用于保存源代码与编译后代码的映射关系，从而方便定位代码）
        }),
        // 更多配置参见 .babelrc 文件
        babel({
            // * 匹配当前目录下的所有文件和一级子目录，但不包括这些一级子目录下的内容
            // ** 匹配当前目录下的所有子目录和文件，包括任意层级的子目录和文件
            exclude: './node_modules/**' // 不转换 node_modules 中的代码
        }),
        // 用于编译 css（需要支持的浏览器会从 package.json 中的 browserslist 配置读取）
        // 注：input 的 js 文件中的 import 的 css 会被此处的 postcss 编译
        postcss({
            plugins: [autoprefixer], // 启用 postcss 的 autoprefixer 插件
            minimize: false, // 是否压缩 css
            extract: pathResolve(__dirname, `./dist/css.css`) // 编译后的 css 的保存路径
        }),
        // 复制文件
        copy({
            targets: [
                { src: './es6/src/index.html', dest: './es6/dist', ignore: [] }
            ]
        })
    ]
}
