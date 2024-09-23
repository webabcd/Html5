import VueRouter from 'vue-router';
import Home  from './Home.vue';
import About  from './About.vue';

const Login = { template: '<div>我是 login 页</div>' };

// 配置路由规则
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login },
];

// 创建路由实例
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(), // 指定 history 的实现方式
    routes, // 指定路由规则（这种写法是 es6 支持的简写法，写全了其实是 routes: routes）
});

export default router
