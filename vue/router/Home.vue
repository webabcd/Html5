<!--注：rollup 中需要通过 rollup-plugin-vue 处理 .vue 文件-->

<template>
    <div>
        {{msg}}
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: "我是 home 页"
            }
        }
    }
</script>
