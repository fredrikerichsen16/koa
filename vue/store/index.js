import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
    modules: {},

    state: {
        user: {},

        magicSearchPosition: 0,
    },

    mutations: {
        SET_USER: (state) => {
            let user = Cookies.getJSON('user') || {};
            state.user = user;
        },

        CHANGE_MAGIC_SEARCH_POSITION: (state, pos) => {
            state.magicSearchPosition = pos;
        },
    },

    actions: {},
});

store.commit('SET_USER');

export default store;