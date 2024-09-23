(function (Vue, VueRouter) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);
    var VueRouter__default = /*#__PURE__*/_interopDefaultLegacy(VueRouter);

    var script$2 = {
            data () {
                return {
                    msg: "我是全局页"
                }
            }
        };

    function render$2(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_router_link = Vue.resolveComponent("router-link");
      const _component_router_view = Vue.resolveComponent("router-view");

      return (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createElementVNode("h1", null, Vue.toDisplayString($data.msg), 1 /* TEXT */),
        Vue.createElementVNode("p", null, [
          Vue.createCommentVNode("\r\n            通过 router-link 组件做导航，通过它的 to 属性指定链接\r\n            router-link 会被编译为类似这样 <a href=\"#/about\">go to about</a>\r\n        "),
          Vue.createVNode(_component_router_link, { to: "/" }, {
            default: Vue.withCtx(() => _cache[0] || (_cache[0] = [
              Vue.createTextVNode("go to home")
            ])),
            _: 1 /* STABLE */
          }),
          _cache[3] || (_cache[3] = Vue.createElementVNode("br", null, null, -1 /* HOISTED */)),
          Vue.createVNode(_component_router_link, { to: "/about" }, {
            default: Vue.withCtx(() => _cache[1] || (_cache[1] = [
              Vue.createTextVNode("go to about")
            ])),
            _: 1 /* STABLE */
          }),
          _cache[4] || (_cache[4] = Vue.createElementVNode("br", null, null, -1 /* HOISTED */)),
          Vue.createVNode(_component_router_link, { to: "/login" }, {
            default: Vue.withCtx(() => _cache[2] || (_cache[2] = [
              Vue.createTextVNode("go to login")
            ])),
            _: 1 /* STABLE */
          })
        ]),
        Vue.createCommentVNode("\r\n        路由匹配到的组件会在 router-view 中渲染\r\n    "),
        Vue.createVNode(_component_router_view)
      ], 64 /* STABLE_FRAGMENT */))
    }

    script$2.render = render$2;
    script$2.__file = "vue/router/App.vue";

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

    var script = {
            data () {
                return {
                    msg: "我是 about 页"
                }
            }
        };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (Vue.openBlock(), Vue.createElementBlock("div", null, Vue.toDisplayString($data.msg), 1 /* TEXT */))
    }

    script.render = render;
    script.__file = "vue/router/About.vue";

    const Login = { template: '<div>我是 login 页</div>' };

    // 配置路由规则
    const routes = [
        { path: '/', component: script$1 },
        { path: '/about', component: script },
        { path: '/login', component: Login },
    ];

    // 创建路由实例
    const router = VueRouter__default["default"].createRouter({
        history: VueRouter__default["default"].createWebHashHistory(), // 指定 history 的实现方式
        routes, // 指定路由规则（这种写法是 es6 支持的简写法，写全了其实是 routes: routes）
    });

    const app = Vue__default["default"].createApp({
        router,                 // 指定路由规则（这种写法是 es6 支持的简写法，写全了其实是 router: router）
        components: { App: script$2 },    // 组件
        template: '<app/>'      // 模板（页面上会显示 <app/> 然后被 App 组件渲染）
    });
    app.use(router); // 使用指定的路由规则
    app.mount('#root');

})(Vue, VueRouter);
