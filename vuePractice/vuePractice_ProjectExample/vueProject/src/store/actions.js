import * as types from './types';

const actions = {
    showNav:({commit, state})=>{
        commit(types.SHOW_NAV); // -> mutations

    },
    hideNav:({commit, state})=>{
        commit(types.HIDE_NAV); // -> mutations

    },
    showFoot:({commit, state})=>{
        commit(types.SHOW_FOOT); // -> mutations
    },
    hideFoot:({commit, state})=>{
        commit(types.HIDE_FOOT); // -> mutations
        
    }
    
};

export default actions;