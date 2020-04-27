import babel from 'rollup-plugin-babel';

export default {
    input: './js/main.js',
    output: {
        file: './dist/js/main.js',
        format: 'iife'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**' // 不转换 node_modules 中的代码
        })
    ]
}