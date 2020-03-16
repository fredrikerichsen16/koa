import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from "js-cookie";

Vue.use(Vuex);

const modules = {};

const state = {
    user: {}
};

const mutations = {
    GET_USER: (state) => {
        let user = Cookies.getJSON('user');

        if (!user) {
            user = {
                id: 1,
                personal: {
                    name: 'Fredrik',
                    city: {
                        name: 'Stavanger, Norway',
                        timezone: 'UTC+1',
                    },
                },
                preferences: {
                    clockFormat: '12HR',
                    language: 'EN',
                },
                widgets: ['news-digest', 'todo', 'stocks']
            };

            Cookies.set('user', user);
        }

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