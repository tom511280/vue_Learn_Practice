import Vue from 'vue'
import App from './App.vue'
//02  全局導入CSS
import './assets/css/base.css'
import './assets/js/font'

new Vue({
  el: '#app',
  render: h => h(App)
})
