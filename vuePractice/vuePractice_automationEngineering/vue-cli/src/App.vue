<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <loading></loading>
    <!--路由的調用-->
    <router-link to="/home" active-class="active">首頁</router-link>
    <router-link to="/news" active-class="active">新聞</router-link>
    <router-link to="/user" active-class="active">用戶</router-link>
    <router-link to="/login" active-class="active">登入</router-link>
    <router-link to="/reg" active-class="active">註冊</router-link>
    <transition
          enter-active-class = "animated fadeIn"
    >
    <!--切換展示區-->
    <router-view></router-view>
    </transition>
    
    <!--<div class="box animated fadeIn infinite">box</div>-->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'vue-cli + vue-router'
    }
  }
}
</script>

<style>
.active{background:blue}
.box{background:red;width:100px;height: 100px;}
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
