import Vue from 'vue'
import App from './App.vue' 
//import 變量 from '...' 01 
//import {屬性} from '...' 02

new Vue({
  el: '#app',
  //兩種方式
  //手動渲染
  render: h => h(App)
  //匯入組件
  /*
  components:{
    App
  }
  */
})

//this == {}
