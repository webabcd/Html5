01、安装 webstorm


02、安装 nodejs 会自动装好 npm
https://nodejs.org/en/download/


03、安装这些模块
npm i rollup -g
npm install rollup-plugin-babel --save-dev
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill


04、模块说明
rollup: 支持 es6 模块，支持 tree-shaking
babel-present-env: 转换 es6 的新语法，如箭头函数等。但是不会转换 es6 的新 api，如 Array.include() 等
babel-polyfill: 转换 es6 的新 api（比如：Array.include() 等）以及兼容不同浏览器
uglify-js: 压缩 js 或 css（参见 build/minify.js 脚本，其用于通过 uglify-js 压缩代码，通过 node build/minify.js 执行）


05、命令说明
uninstall 是卸载
i 是 install 的简写
-g 是 --global 的简写
-S 是 --save 的简写
-D 是 --save-dev 的简写
npm i module-name -save 自动把模块和版本号添加到 dependencies 部分
npm i module-name -save-dev 自动把模块和版本号添加到 devDependencies 部分


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
    "@babel/polyfill": "^7.8.7"
  },
  // devDependencies 是开发环境（像 webpack, babel 这种负责打包编译的，我们就应该装在开发环境）
  "devDependencies": {
    "@babel/cli": "^7.8.4",
    "@babel/core": "^7.9.0",
    "@babel/preset-env": "^7.9.5",
    "rollup-plugin-babel": "^4.4.0",
    "uglify-js": "^3.6.0"
  }
}


07、配置说明（.babelrc）
.babelrc 中的 rc 的意思是命令脚本（因为早期的 unix 中的 runcom 是命令脚本）
{
  "presets": [
    [
      "@babel/env",
      {
        "modules": false, // 不将 es6 module 转为 CommonJs
        "useBuiltIns": "usage", // 用到 es6 新 api 时，自动使用 babel-polyfill
        "corejs": "3" // 使用 core-js 3 版本，不加这个编译会有警告
      }
    ]
  ]
}


08、配置说明（babel.config.json）
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1",
          "ie": "11",
          "android": "4",
          "ios": "10",
        }, // 指定转换后的 js 可以支持各浏览器或系统的最低版本
        "useBuiltIns": "usage" // 用到 es6 新 api 时，自动使用 babel-polyfill
      }
    ]
  ]
}

09、配置说明（.editorconfig）
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
