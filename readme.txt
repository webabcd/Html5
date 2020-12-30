01、安装 webstorm


02、安装 nodejs 会自动装好 npm
https://nodejs.org/en/download/


03、安装这些模块
npm i rollup -g
npm install rollup-plugin-babel --save-dev
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
npm install @rollup/plugin-node-resolve --save-dev
npm install --save-dev rollup-plugin-commonjs
npm install uglify-js --save-dev
npm install @rollup/plugin-json --save-dev
npm install --save-dev rollup-plugin-postcss
npm install --save-dev autoprefixer
npm install --save-dev clean-css-cli
npm install --save core-js@^3
注：上面这些除了 npm i rollup -g 需要手动安装外，其他的模块配置好 package.json 后，执行 npm install 就都安装了，不用一个一个地安装


04、模块说明
rollup: 支持 es6 模块，支持 tree-shaking
babel-present-env: 转换 es6 的新语法，如箭头函数等。但是不会转换 es6 的新 api，如 Array.include() 等
babel-polyfill: 转换 es6 的新 api（比如：Array.include() 等）以及兼容不同浏览器
    babel-polyfill 的核心是 core-js，core-js 是 commonjs 的，需要使用 rollup-plugin-commonjs 将 commonjs 转换为 es6
uglify-js: 压缩 js 或 css（参见 build/minify.js 脚本，其用于通过 uglify-js 压缩代码，通过 node build/minify.js 执行）
@rollup/plugin-node-resolve: 用于解决类似 Unresolved dependencies 或者 'xxx' is imported by ***.js, but could not be resolved – treating it as an external dependency 之类的警告
rollup-plugin-commonjs: 用于将 commonjs 转换为 es6
rollup-plugin-postcss: 编译 css 用的
autoprefixer: 是 postcss 的插件，用于自动添加 -webkit-, -ms- 之类的前缀
clean-css-cli: 是压缩 css 文件用的（用法示例：cleancss dist/video-js.css -o dist/video-js.min.css）


05、命令说明
uninstall 是卸载
i 是 install 的简写
-g 是 --global 的简写
-S 是 --save 的简写
-D 是 --save-dev 的简写
npm install -g 用于全局安装
npm install module-name -save 会自动把模块和版本号添加到 dependencies 部分
npm install module-name -save-dev 会自动把模块和版本号添加到 devDependencies 部分


06、配置说明（package.json）
{
  "name": "Html5",
  "version": "1.0.0",
  "scripts": {
    // 可以通过 npm run build 来运行
    // -c 通过配置文件打包（config）
    // -w 监控文件的变化，实时打包（watch）
    "build": "rollup -c -w",
    // 可以通过 npm run minify 来运行
    // 通过 build/minify.js 脚本压缩代码
    "minify": "node build/minify.js"
  },
  // dependencies 是生产环境
  "dependencies": {
    "@babel/polyfill": "^7.8.7",
    "core-js": "^3.6.5"
  },
  // devDependencies 是开发环境（像 webpack, babel 这种负责打包编译的，我们就应该装在开发环境）
  "devDependencies": {
    "@babel/cli": "^7.8.4",
    "@babel/core": "^7.9.0",
    "@babel/preset-env": "^7.9.5",
    "@rollup/plugin-node-resolve": "^8.1.0",
    "autoprefixer": "^9.8.5",
    "rollup-plugin-babel": "^4.4.0",
    "rollup-plugin-commonjs": "^10.1.0",
    "rollup-plugin-postcss": "^3.1.2",
    "uglify-js": "^3.6.0"
  },
  // postcss 会读取此配置，以便生成符合条件的代码
  "browserslist": [
    "defaults",         // 默认值（> 0.5%, last 2 versions, Firefox ESR, not dead）
    "> 1%",             // 全球超过 1% 人使用的浏览器
    "last 2 versions",  // 所有浏览器兼容到最后两个版本
    "not ie <= 9",      // IE 浏览器版本大于 9
    "safari >= 7"       // safari 浏览器版本大于等于 7
  ]
}


07、配置说明（.babelrc）
这部分也是可以在 rollup.config.js 中的 plugins 的 babel 中直接配置的，但是那样编译时会出现“Circular dependencies”警告，不知道为啥
.babelrc 中的 rc 的意思是命令脚本（因为早期的 unix 中的 runcom 是命令脚本）
{
  "presets": [
    [
      "@babel/env",
      {
        "modules": false, // 不将 es6 module 转为 CommonJs
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1",
          "ie": "11"
        }, // 指定转换后的 js 可以支持各浏览器或系统的最低版本
        "useBuiltIns": "usage", // 用到 es6 新 api 时，自动使用 babel-polyfill
        "corejs": "3" // 使用 core-js 3 版本
      }
    ]
  ]
}


08、配置说明（.editorconfig）
root = true
[*]
indent_style = space                # 缩进符
indent_size = 2                     # 缩进时使用 2 个 indent_style 指定的缩进符（本例的缩进就是 2 个空格）
end_of_line = lf                    # 换行符（win用crlf, linux/unix用lf, mac用cr）。另外：在 win 下只用 lf 也是可以的
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true






99、其它
npm i --save-dev postcss-cli
npm install
// https://www.cnblogs.com/tugenhua0707/p/8179686.html
// https://segmentfault.com/a/1190000010628352
package-lock.json 用于保存当前项目需要用到的各种模块，各种模块的源代码会保存在 node_modules 文件夹

.editorconfig 的作用
