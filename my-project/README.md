# Note


#### vue-i18n

[Vue I18n](https://kazupon.github.io/vue-i18n/) is internationalization plugin for Vue.js
[如何让一个vue项目支持多语言](https://segmentfault.com/a/1190000015008808)  
[各國語言(語系)代碼表(zh-tw, zh-cn,en-us...) json 格式](https://adon988.logdown.com/posts/2207656-national-language-code-table-zh-tw-zh-cn-en-us-json-format)  

src下建立i18n語系資料夾 
main.js 引入i18n資料夾  `import i18n from './i18n'`
`new Vue({..i18n,..})`  new Vue 載入

[Getting started](http://kazupon.github.io/vue-i18n/started.html#html)  

#### moment 

[moment](https://www.npmjs.com/package/moment) - npm
[momentjs](https://momentjs.com/)  
[在JavaScript 簡單取得unix timestamp - Js Tips](http://www.jstips.co/zh_tw/javascript/extract-unix-timestamp-easily/)  

#### lodash

lodash 是一個JavaScript 的實用工具庫, 表現一致性, 模塊化, 高性能, 以及可擴展. 

[lodash](https://www.npmjs.com/package/lodash) - npm
[Lodash Documentation](https://lodash.com/docs/)    
[lodash中文文档isNull](http://lodash.think2011.net/isNull)  

A modern JavaScript utility library delivering modularity, performance & extras. 
[充分利用 lodash 讓你的程式碼更易讀及維護](https://jigsawye.com/2017/09/04/make-good-use-of-lodash/)
避免將 lodash lib 全數引入  `import map from 'lodash/map';`  
`import { map, filter } from 'lodash';` (x)  
因為如果透過以上方式 import，你會將整個 lodash library 都 bundle 起來，若是分別 import，則只會 bundle 你所 import 的方法。

# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
