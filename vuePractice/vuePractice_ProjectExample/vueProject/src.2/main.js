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


new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
