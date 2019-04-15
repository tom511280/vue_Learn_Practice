<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <input type="button" value="+" @click="jia">
    <!-- {{ count }} -->
    <!-- {{getCount}} -->
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: 'vuex 狀態管理'
    }
  },
  methods:mapActions([
    'jia'
  ])
  // methods:{
  //   jia(){
  //     // this.$store.dispatch({type:'jia',payload:'數據'}) --> actions
  //     this.$store.dispatch({type:'jia',payload:'數據'})
  //   }
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
