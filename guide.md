###　vue-cli-service

[CLI 服务](https://cli.vuejs.org/zh/guide/cli-service.html#%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4)

package.json
```js
{
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  }
}
```

`$ npm run serve` or `$ yarn serve`

`vue-cli-service serve` 命令会启动一个开发服务器 (基于[`webpack-dev-server`](https://github.com/webpack/webpack-dev-server)) 并附带开箱即用的模块热重载 (Hot-Module-Replacement)。

除了通过命令行参数，你也可以使用 `vue.config.js` 里的 devServer 字段配置开发服务器。

`vue-cli-service build` 会在 dist/ 目录产生一个可用于生产环境的包，带有 JS/CSS/HTML 的压缩，  