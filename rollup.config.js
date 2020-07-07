import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: './js/main.js',
    output: {
        file: './dist/main.js',
        format: 'iife'
    },
    plugins: [
        // 用于解决类似 “Unresolved dependencies”, “Treating [module] as external dependency” 之类的错误
        nodeResolve(),
        // 用于将 commonjs 转换为 es6
        commonjs({
            sourceMap: false // 不用生成源映射
        }),
        babel({
            exclude: 'node_modules/**' // 不转换 node_modules 中的代码
        })
    ]
}
