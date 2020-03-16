import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
});

// router.beforeEach((to, from, next) => {
//     /**
//      * Authenticate user before they enter sensitive routes (widgets) and load content
//      */
//     next();
// });

export default router;
