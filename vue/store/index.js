import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from "js-cookie";

Vue.use(Vuex);

const modules = {};

const state = {
    user: {}
};

const mutations = {
    SET_USER: (state) => {
        let user = Cookies.getJSON('user') || {};
        state.user = user;
    }
};

const actions = {};

export default new Vuex.Store({
    modules,
    state,
    mutations,
    actions,
});