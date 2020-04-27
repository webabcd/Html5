1、安装 webstorm

2、安装nodejs会自动装好npm
https://nodejs.org/en/download/

3、
npm i rollup -g
npm install rollup-plugin-babel --save-dev
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill


rollup - 支持 es6 模块，支持 tree-shaking
babel-present-env 仅仅转换 新版的语法 如：箭头函数，并不转换新版 api 如：Array.include
转换新版api及抹平浏览器之间的差异（兼容ie）需要 babel-polyfill



uninstall 是卸载
i 是 install 的简写
-S 是 --save 的简写
-D 是 --save-dev 的简写
npm i module-name -save 自动把模块和版本号添加到 dependencies 部分
npm i module-name -save-dev 自动把模块和版本号添加到 devDependencies 部分
dependencies 是生产环境
devDependencies 是开发环境（像 webpack, babel 这种负责打包编译的，我们就应该装在开发环境）




npm i --save-dev postcss-cli
npm install


// https://www.cnblogs.com/tugenhua0707/p/8179686.html
// https://segmentfault.com/a/1190000010628352


-c 通过配置文件打包（config）
-w 监控文件的变化，实时打包（watch）
"build": "rollup -c -w"

// rc后缀来源于Unix系统的前辈CTSS，它其中有个叫做“runcom”的命令脚本功能。早期的Unix版本使用rc在操作系统启动脚本的文件名中，以尊重CTSS的成果。原链接：https://zhidao.baidu.com/question/621141437999706252.html









.babelrc
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


babel.config.json
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

{
  "name": "Html5",
  "version": "1.0.0",
  "scripts": {
    "build": "rollup -c -w" // npm run build
  },
  "dependencies": {
    "@babel/polyfill": "^7.8.7"
  },
  "devDependencies": {
    "@babel/cli": "^7.8.4",
    "@babel/core": "^7.9.0",
    "@babel/preset-env": "^7.9.5",
    "rollup-plugin-babel": "^4.4.0"
  }
}
