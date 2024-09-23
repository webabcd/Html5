import vue from 'rollup-plugin-vue';

export default {
    input: './vue/router/main.js',
    output: {
        name: 'VueRouterSample',
        file: './vue/router/main.iife.js',
        format: 'iife',
        globals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter'
        }
    },
    plugins: [
        vue(), // 处理 .vue 文件
    ],
}
