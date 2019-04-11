/*
main.js 通常進行以下事項
1.輸入插件
2.安裝插件
3.註冊插件
*/


/*輸入*/
import Vue from 'vue'
import App from './App.vue' 
import VueRouter from 'vue-router'; //路由
import routes from './router.config' //路由設定
import loading from './components/loading' //不寫默認加載index
//css 全局引入
import 'animate.css'; //輸入animate.css

//全局插件


/*安裝*/
Vue.use(VueRouter)   
//Vue.use(xxx) 
//安裝路由 子組件可以使用vue-router
//內容的組件的router-link
Vue.use(loading)
//默認調用intall方法



/*註冊*/
let router = new VueRouter(routes)//創建路由
new Vue({
  el: '#app',
  render: h => h(App),
  router,//掛載 為了讓子組件可以透過this.$router取值
})
