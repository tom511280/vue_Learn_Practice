<template>
  <div id="app">
    <navbar></navbar>
    <home></home>
    <footbar></footbar>
    
  </div>
</template>

<script>
import navbar from './components/navbar.vue';
import footbar from './components/footbar.vue';
import home from './components/home.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  components:{
   navbar, footbar, home
  }
}
</script>

<style>
</style>
