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

//引入安裝註冊過濾器
import filters from './filters'
/*
for(var key in filters){
  Vue.filter(key,filters[key])
} 
*/
Object.keys(filters).map(key=>Vue.filter(key,filters[key]));

//引入狀態管理  自動找底下index
import store from './store/index'

new Vue({
  el: '#app',
  data:{
    bNav:true,
    bFoot:true
  },
  render: h => h(App),
  router,
  store
  //axios this.$axios
})
