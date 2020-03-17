import Vue from 'vue';
import App from './App.vue';
import store from './store/index.js';
import router from './router';
import vueDebounce from 'vue-debounce';

Vue.use(vueDebounce);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#vue');