<template>
  <div id="app">
    <navbar v-if="this.$root.$data.bNav"></navbar>
    <router-view></router-view>
    <footbar v-show="this.$root.$data.bFoot"></footbar>
    
  </div>
</template>

<script>
import navbar from './components/navbar.vue';
import footbar from './components/footbar.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  components:{
   navbar, footbar
  }
}
</script>

<style>
/*02全局CSS*/
</style>
