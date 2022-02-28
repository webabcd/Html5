import Vue from 'vue'
import App from './App.vue'
import router from './router';

const app = Vue.createApp({
    router,                 // 指定路由规则（这种写法是 es6 支持的简写法，写全了其实是 router: router）
    components: { App },    // 组件
    template: '<app/>'      // 模板（页面上会显示 <app/> 然后被 App 组件渲染）
});
app.use(router); // 使用指定的路由规则
app.mount('#root');
