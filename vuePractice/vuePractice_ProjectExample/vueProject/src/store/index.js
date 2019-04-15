//引入 安裝 註冊 狀態管理
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'





// Vuex.Store({配置}); 返回一個狀態管理對象
export default new Vuex.Store({
    actions,
    mutations,
    getters,
    state
});
