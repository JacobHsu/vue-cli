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
