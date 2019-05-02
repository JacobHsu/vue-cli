# Note

### vuex

`npm install vuex --save`  

src下建立`store`語系資料夾 
`main.js` 引入 `import store from './store'`  

將變數從 `Component` 的 data 改存到 `Store` 的 state，並且只能透過 Store 下 `muation` 的 method 才能修改變數  
使用 Vuex 的 state 時，都會改用 `computed`，如此 Store 的 state 只要一變動，Component 就會自動更新  

[Vuex Getting Started](https://vuex.vuejs.org/zh/guide/)  
[Vue CLI 快速建立使用 Vuex](https://oomusou.io/vue/vuex/basic/)  
[Vuex 學習筆記 (2) - Vuex 安裝方式](https://jeremysu0131.github.io/Vue-js-Vuex-學習筆記-2-Vuex-安裝方式/)  

[ Vuex 學習筆記 (4) - state 的核心概念](https://jeremysu0131.github.io/Vue-js-Vuex-學習筆記-4-state-的核心概念/)  

State 單一狀態樹 (Single State Tree)  

Vuex 使用單一狀態樹，這是一個物件包含了全部應用層的狀態與供應`單一數據來源 (Single source of truth)`，這代表通常你每個應用只會有一個 store 。單一狀態樹讓我們可以直接指定 state 其中的一項並讓我們能夠輕鬆的得到目前應用程式的狀態與快照 (snapshots)。  

**組件仍然可以有本地的狀態** 
使用 Vuex 並不代表要將所有狀態放入 Vuex ，如果有些狀態只有屬於某個組件，這樣的話我們就不需要將他放入 Vuex ，實際使用時我們還是要進行權衡和確認，不要把事情搞得太複雜。  


#### mapState 輔助函數

當一個組件需要獲取多個 state 的時候，如果每次都要宣告為 computed 會很麻煩，為了解決這個問題 Vuex 讓我們可以使用 mapState 輔助函數來幫助我們，將繁瑣的流程簡化。



#### vue-i18n

[Vue I18n](https://kazupon.github.io/vue-i18n/) is internationalization plugin for Vue.js
[如何让一个vue项目支持多语言](https://segmentfault.com/a/1190000015008808)  
[各國語言(語系)代碼表(zh-tw, zh-cn,en-us...) json 格式](https://adon988.logdown.com/posts/2207656-national-language-code-table-zh-tw-zh-cn-en-us-json-format)  

src下建立i18n語系資料夾 
main.js 引入i18n資料夾  `import i18n from './i18n'`
`new Vue({..i18n,..})`  new Vue 載入

[Getting started](http://kazupon.github.io/vue-i18n/started.html#html)  

利用 [filters](https://vuejs.org/v2/guide/filters.html) 自訂做語系檔 App.vue filters `i18n/my-TW.js`  

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
