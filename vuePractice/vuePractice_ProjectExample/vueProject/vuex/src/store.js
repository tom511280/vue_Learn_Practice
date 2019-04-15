//引入 安裝 註冊 狀態管理
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';
Vue.use(Vuex);

const actions = {

    // jia:(obj, payload)=>{
    //只取需要的部分
    jia:({commit, state}, payload)=>{
        //處理業務邏輯
        // console.log(obj);
        // console.log(payload); //收到的數據
        commit('increment',1); // -> mutations
        //alert("+");

    },
    jian:({commit, state})=>{
        //處理業務邏輯
        // console.log(obj);
        // console.log(payload); //收到的數據
        commit('decrement'); // -> mutations
        //alert("-");

    },
    odd:({commit, state})=>{
        if(state.count%2===0){
            commit('increment',1);
        }
        
    },
    async:({commit, state})=>{
        // axios.then(res => commit('xxx',res.data)) //處理異步
        setTimeout(()=>{
            commit('increment',1);
        }, 1000)
        
    }
    
};
const mutations = {
    increment:(state, payload)=>{
        // console.log('state',state);
        //突變
        // state.count++;
        state.count+=payload;
        
    },
    decrement:(state)=>{
        // console.log('state',state);
        //突變
        // state.count++;
        state.count--;
        
    }
};
const getters = {
    getCount:(state)=>{
        return state.count;
    }
};
const state = {
    count:0
};

// Vuex.Store({配置}); 返回一個狀態管理對象
export default new Vuex.Store({
    actions,
    mutations,
    getters,
    state
});
