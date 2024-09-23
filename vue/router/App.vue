<!--注：rollup 中需要通过 rollup-plugin-vue 处理 .vue 文件-->

<template>
    <h1>{{ msg }}</h1>
    <p>
        <!--
            通过 router-link 组件做导航，通过它的 to 属性指定链接
            router-link 会被编译为类似这样 <a href="#/about">go to about</a>
        -->
        <router-link to="/">go to home</router-link>
        <br>
        <router-link to="/about">go to about</router-link>
        <br>
        <router-link to="/login">go to login</router-link>
    </p>
    <!--
        路由匹配到的组件会在 router-view 中渲染
    -->
    <router-view></router-view>
</template>

<script>
    export default {
        data () {
            return {
                msg: "我是全局页"
            }
        }
    }
</script>
