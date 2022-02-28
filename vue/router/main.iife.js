(function (Vue, VueRouter) {
    'use strict';

    var Vue__default = 'default' in Vue ? Vue['default'] : Vue;
    VueRouter = VueRouter && VueRouter.hasOwnProperty('default') ? VueRouter['default'] : VueRouter;

    var script = {
            data () {
                return {
                    msg: "我是全局页"
                }
            }
        };

    const _hoisted_1 = /*#__PURE__*/Vue.createTextVNode("go to home");
    const _hoisted_2 = /*#__PURE__*/Vue.createElementVNode("br", null, null, -1 /* HOISTED */);
    const _hoisted_3 = /*#__PURE__*/Vue.createTextVNode("go to about");
    const _hoisted_4 = /*#__PURE__*/Vue.createElementVNode("br", null, null, -1 /* HOISTED */);
    const _hoisted_5 = /*#__PURE__*/Vue.createTextVNode("go to login");

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_router_link = Vue.resolveComponent("router-link");
      const _component_router_view = Vue.resolveComponent("router-view");

      return (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createElementVNode("h1", null, Vue.toDisplayString($data.msg), 1 /* TEXT */),
        Vue.createElementVNode("p", null, [
          Vue.createCommentVNode("\r\n            通过 router-link 组件做导航，通过它的 to 属性指定链接\r\n            router-link 会被编译为类似这样 <a href=\"#/about\">go to about</a>\r\n        "),
          Vue.createVNode(_component_router_link, { to: "/" }, {
            default: Vue.withCtx(() => [
              _hoisted_1
            ]),
            _: 1 /* STABLE */
          }),
          _hoisted_2,
          Vue.createVNode(_component_router_link, { to: "/about" }, {
            default: Vue.withCtx(() => [
              _hoisted_3
            ]),
            _: 1 /* STABLE */
          }),
          _hoisted_4,
          Vue.createVNode(_component_router_link, { to: "/login" }, {
            default: Vue.withCtx(() => [
              _hoisted_5
            ]),
            _: 1 /* STABLE */
          })
        ]),
        Vue.createCommentVNode("\r\n        路由匹配到的组件会在 router-view 中渲染\r\n    "),
        Vue.createVNode(_component_router_view)
      ], 64 /* STABLE_FRAGMENT */))
    }

    script.render = render;
    script.__file = "vue/router/App.vue";

    var script$1 = {
            data () {
                return {
                    msg: "我是 home 页"
                }
            }
        };

    function render$1(_ctx, _cache, $props, $setup, $data, $options) {
      return (Vue.openBlock(), Vue.createElementBlock("div", null, Vue.toDisplayString($data.msg), 1 /* TEXT */))
    }

    script$1.render = render$1;
    script$1.__file = "vue/router/Home.vue";

    var script$2 = {
            data () {
                return {
                    msg: "我是 about 页"
                }
            }
        };

    function render$2(_ctx, _cache, $props, $setup, $data, $options) {
      return (Vue.openBlock(), Vue.createElementBlock("div", null, Vue.toDisplayString($data.msg), 1 /* TEXT */))
    }

    script$2.render = render$2;
    script$2.__file = "vue/router/About.vue";

    const Login = { template: '<div>我是 login 页</div>' };

    // 配置路由规则
    const routes = [
        { path: '/', component: script$1 },
        { path: '/about', component: script$2 },
        { path: '/login', component: Login },
    ];

    // 创建路由实例
    const router = VueRouter.createRouter({
        history: VueRouter.createWebHashHistory(), // 指定 history 的实现方式
        routes, // 指定路由规则（这种写法是 es6 支持的简写法，写全了其实是 routes: routes）
    });

    const app = Vue__default.createApp({
        router,                 // 指定路由规则（这种写法是 es6 支持的简写法，写全了其实是 router: router）
        components: { App: script },    // 组件
        template: '<app/>'      // 模板（页面上会显示 <app/> 然后被 App 组件渲染）
    });
    app.use(router); // 使用指定的路由规则
    app.mount('#root');

}(Vue, VueRouter));
