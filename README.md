# vue-cli

`init`  Vue CLI 3
`init-webpack` Vue CLI 2

[Vue CLI 3](https://cli.vuejs.org/)  
vuejs/[vue-cli](https://github.com/vuejs/vue-cli)  

[installation](https://cli.vuejs.org/guide/installation.html) `npm install -g @vue/cli`  

`vue -V`  
`vue --version`  


[vue create](https://cli.vuejs.org/zh/guide/creating-a-project.html)  
創建一個項目 `vue create hello-world`  

# 2 vs 3

`build`沒了、`config`沒了、3.0的安裝項目時自動下載node-model。  
3.0 在根目錄下自己創建一個`vue.config.js`

老項目的 `static` 全部遷移到 `public` 文件夾中，`index.html` 遷移到 `public`
Vue CLI 3.x 將默認資源文件根路徑放到了 /public 目錄下，而默認精簡掉了 2.x 版本中的 /static 目錄。　
在Vue CLI 3 ，`public` 文件夾不會被 webpack 處理，並部署在網站根目錄


## projects router 
maually select features  

[mode-and-env](https://cli.vuejs.org/guide/mode-and-env.html#modes) restart `npm run serve`  

`vue list`  
  
Vue 模板安裝  
`vue init {‌{模板名稱}} {‌{資料夾名稱}} `  
Usage: init [options] <template> <app-name>  


Command vue init requires a global addon to be installed.
Please run `npm install -g @vue/cli-init` and try again.

 
`vue init webpack my-project`  

? Use ESLint to lint your code? (Y/n)  `n`    
? set up unit tests (Y/n)  `n`    
? Setup e2e tests with Nightwatch? (Y/n) `n`    


To get started:  
  `cd my-project`  
  `npm run dev`  

I  Your application is running here: http://localhost:8080

安裝所需套件 (在目標資料夾下，每個專案只有第一次需要執行)
`npm install` 

運行 Vue + Webpack  
`npm run dev` 

編譯 Production 版本  
`npm run build`   

# projects

Components [組件基礎研究](https://cn.vuejs.org/v2/guide/components.html)    
`$ cd components`  
`$ yarn serve`  

# npm 

使用Google Analytics？ [vue-analytics](https://www.npmjs.com/package/vue-analytics)  