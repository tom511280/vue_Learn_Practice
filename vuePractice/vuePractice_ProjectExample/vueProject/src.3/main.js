import Vue from 'vue'
import App from './App.vue'
//02  全局導入CSS
import './assets/css/base.css'
import './assets/js/font'

//引入安装注册路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routes from './router.config';
const router=new VueRouter(routes)

//引入安裝註冊axios
import axios from 'axios'
//因為axios內沒有install方法 
//Vue.use(axios);
Vue.prototype.$http=axios;// this.$http

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  //axios this.$axios
})
