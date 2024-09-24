# Html5 Demo


```
css 项目演示
1、npm run build:css
2、点击 vsc 左侧的 Run and Debug 按钮，然后选择 run css 并运行（相关配置参见 .vscode/launch.json）
```

```
js 项目演示
1、点击 vsc 左侧的 Run and Debug 按钮，然后选择 run js 并运行（相关配置参见 .vscode/launch.json）
```

```
dom 项目演示
1、点击 vsc 左侧的 Run and Debug 按钮，然后选择 run dom 并运行（相关配置参见 .vscode/launch.json）
```

```
h5 项目演示
1、点击 vsc 左侧的 Run and Debug 按钮，然后选择 run h5 并运行（相关配置参见 .vscode/launch.json）
```

```
vue.js 项目演示
1、npm run build:vue
2、点击 vsc 左侧的 Run and Debug 按钮，然后选择 run vue 并运行（相关配置参见 .vscode/launch.json）
```

```
es6 项目演示
1、npm run build:es6
2、点击 vsc 左侧的 Run and Debug 按钮，然后选择 run es6 并运行（相关配置参见 .vscode/launch.json）
3、如果需要压缩编译后的脚本，则执行 npm run minify:es6 即可
```


#### css
1. float 布局: 基础
- css/src/layout/float/demo1.html
2. float 布局: 通过 float 布局实现 3 栏式布局
- css/src/layout/float/demo2.html
3. flex 布局: flex-direction, flex-wrap, flex-flow
- css/src/layout/flex/demo1.html
4. flex 布局: justify-content, align-items, align-content, align-self
- css/src/layout/flex/demo2.html
5. flex 布局: order, flex-grow, flex-shrink, flex-basis, flex
- css/src/layout/flex/demo3.html
6. position 布局: 定位（static, relative, absolute, fixed）
- css/src/layout/position.html
7. overflow 布局: 内容溢出时的样式
- css/src/layout/overflow.html
8. selector 选择器: 基础，通配符选择器，元素选择器，id 选择器，类选择器
- css/src/selector/demo1.html
9. selector 选择器: 属性选择器（attribute selector）
- css/src/selector/demo2.html
10. selector 选择器: 后代选择器，子选择器，相邻兄弟选择器，兄弟选择器
- css/src/selector/demo3.html
11. selector 选择器: 伪类（pseudo class）
- css/src/selector/demo4.html
12. selector 选择器: 伪元素（pseudo element）
- css/src/selector/demo5.html
13. counter 计数器
- css/src/counter.html
14. 字体图标
- css/src/iconfont.html
15. 单位 px/em/pt
- css/src/unit.html
16. 通过 postcss 编译 css
- css/src/index.html
- css/src/index.js
- css/src/css1.css
- css/src/css2.css
- css/rollup.config.js

#### js
1. js 的严格模式 use strict
- js/strict.html
2. js 的闭包
- js/closure.html
3. js 的 jsonp
- js/jsonp.html
- WebApi/WebApi/ApiController.cs
4. js 的 setTimeout
- js/setTimeout.html
5. js 的 setInterval
- js/setInterval.html
6. js 的跨域请求 XMLHttpRequest
- js/XMLHttpRequest.html
- WebApi/WebApi/ApiController.cs

#### dom
1. DOM 获取元素，修改元素的样式
- dom/demo1.html
2. DOM 常用方法和属性
- dom/demo2.html
3. DOM 事件
- dom/demo3.html
4. DOM scroll
- dom/demo4.html

#### h5
1. h5 base64 图片
- h5/image.html
2. h5 drag 和 drop
- h5/dragdrop.html
3. h5 localStorage 和 sessionStorage
- h5/storage.html
4. h5 viewport
- h5/mobile/viewport.html
5. h5 网络状态
- h5/mobile/networkStatus.html
6. h5 IndexedDB: 基本的增删改查的示例
- h5/indexedDB/demo1.html
7. h5 IndexedDB: IDBKeyRange 的使用（按照指定的主键范围获取数据或删除数据）
- h5/indexedDB/demo2.html
8. h5 IndexedDB: 保存二进制数据
- h5/indexedDB/demo3.html
9. h5 通过 web worker 实现多线程
- h5/webWorker/worker.html
- h5/webWorker/worker.js
10. h5 通过 web worker 实现多线程（演示如何转移数据的所有权）
- h5/webWorker/worker_transferable.html
- h5/webWorker/worker_transferable.js
11. h5 通过 Service Worker 拦截和处理网络请求（可以实现网络资源的缓存）
- h5/serviceWorker/worker.html
- h5/serviceWorker/worker.js
- h5/serviceWorker/js.js

#### vue.js
1. vue 模板语法基础（MVVM, 插值, 指令等）
- vue/basic.html
2. vue 组件选项（data, methods, computed, watch, created, mounted）
- vue/option.html
3. vue 指令（v-if, v-show, v-for）
- vue/directive/vif_vfor.html
4. vue 指令（v-model 双向绑定）
- vue/directive/vmodel.html
5. vue 指令（v-on 事件处理）
- vue/directive/von.html
6. vue 指令（自定义指令）
- vue/directive/vcustom.html
7. vue 组件 1
- vue/component/sample1.html
8. vue 组件 2
- vue/component/sample2.html
9. vue 路由基础
- vue/router/sample1.html
- vue/router/router.js
- vue/router/main.js
- vue/router/App.vue
- vue/router/Home.vue
- vue/router/About.vue
- vue/router/rollup.config.js

### es6 基础
1. var, let, const
- es6/src/basic/var_let_const.js
2. null, undefined
- es6/src/basic/null_undefined.js
3. boolean
- es6/src/basic/boolean.js
4. number
- es6/src/basic/number.js
5. string
- es6/src/basic/string.js
6. symbol
- es6/src/basic/symbol.js
7. array
- es6/src/basic/array.js
8. set
- es6/src/basic/set.js
9. map
- es6/src/basic/map.js

### es6 类
1. object
- es6/src/class/object.js
2. prototype
- es6/src/class/prototype.js
3. function
- es6/src/class/function.js
4. class
- es6/src/class/main.js
- es6/src/class/a.js
- es6/src/class/b.js
- es6/src/class/c.js
5. 模块
- es6/src/module/main.js
- es6/src/module/a.js
- es6/src/module/b.js
- es6/src/module/c.js
- es6/src/module/d.js
- es6/src/module/e.js
- es6/src/module/f.js
- es6/src/module/g.js
- es6/src/module/h.js
- es6/src/module/i.js

### es6 进阶
1. ArrayBuffer
- es6/src/advanced/arrayBuffer.js
2. promise
- es6/src/advanced/promise.js
3. async/await
- es6/src/advanced/async_await.js
4. fetch
- es6/src/advanced/fetch.js
- WebApi/WebApi/ApiController.cs
5. iterator, generator
- es6/src/advanced/iterator_generator.js
6. proxy, reflect
- es6/src/advanced/proxy_reflect.js
7. 编译和压缩
- es6/src/index.html
- es6/src/index.js
- es6/rollup.config.js
- es6/minify.js