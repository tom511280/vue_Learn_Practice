<template>
  <div id="app">
    <navbar v-if="getNav"></navbar>
    <router-view></router-view>
    <footbar v-show="getFoot"></footbar>
    
  </div>
</template>

<script>
import navbar from './components/navbar.vue';
import footbar from './components/footbar.vue';
import {mapActions,mapGetters} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  components:{
   navbar, footbar
  },
  computed: mapGetters(["getNav", "getFoot"]),
  watch:{
    $route(to){
      //if()
    }
  }
}
</script>

<style>
/*02全局CSS*/
</style>
