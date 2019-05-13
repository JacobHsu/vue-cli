# components

Components [組件基礎研究](https://cn.vuejs.org/v2/guide/components.html)    
`$ cd components`    
`$ yarn serve`  


# components in main.js

main.js
```js
import MyApp from './components/MyApp'
Vue.component('MyComponentApp', MyApp );
```

App.vue
```js
<template>
    <MyComponentApp></MyComponentApp>
</template>
```

使用 `Vue.component` 定義的元件是**全域的**，意謂著元件的名稱不能重複。  

[Vue.js (10) - 單一元件檔(Single-file components)](http://blog.tonycube.com/2017/05/vuejs-10-single-file-components.html)  

## Dynamic Route Matching

[動態路由匹配](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#响应路由参数的变化)  

[安装](https://router.vuejs.org/zh/installation.html)  
`npm install vue-router`  


> [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build

[【bug】vue-cli 2.0 的解法](https://cli.vuejs.org/config/#lintonsave)

[Runtime + Compiler vs. Runtime-only](https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only)

webpack.base.conf.js
```js
module.exports = {
  // ...
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  }
```

[【bug】vue-cli 3.0报错的解决办法](https://www.520mwx.com/view/2226)  

添加 配置文件：
目的是修改在引入vue時，不要採用runtime形式的文件,而採用 dist/vue.esm.js形式文件
vue.config.js
```js
const path = require('path')
function resolve (dir) {
    return path.join(__dirname,dir)
  }
  
module.exports = {
  
    configureWebpack: config => {
        config.resolve = {
           extensions: ['.js', '.vue', '.json',".css"],
            alias: {
              'vue$': 'vue/dist/vue.esm.js',
              '@': resolve('src'),
            }
        }
    },
}
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
