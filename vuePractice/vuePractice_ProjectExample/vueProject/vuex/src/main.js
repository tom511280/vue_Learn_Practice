import Vue from 'vue'
import App from './App.vue'


//引入狀態管理
import store from './store'

new Vue({
  el: '#app',
  render: h => h(App),
  store
})
