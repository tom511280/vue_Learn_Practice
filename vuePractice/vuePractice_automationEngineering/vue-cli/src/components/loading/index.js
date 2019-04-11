import loading from './components/loading.vue'
export default {
    install:function(Vue){
        //Vue.component('組件名','組件變量名')
        Vue.component('loading',loading);
    }
}