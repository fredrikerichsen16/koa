import Vue from 'vue';
import VueRouter from 'vue-router';
// import routes from './routes.js';

Vue.use(VueRouter);

const NewsImport = () => import('@/widgets/NewsDigest/NewsDigest');
const StocksImport = () => import('@/widgets/Stocks/Stocks');

const routes = [
    {
        path: '/news-digest',
        component: NewsImport,
        meta: {
            name: 'News Digest',
            slug: 'news-digest',
            icon: 'icons8-news-100.png'
        }
    },
    {
        path: '/stocks',
        component: StocksImport,
        meta: {
            name: 'Stocks',
            slug: 'stocks',
            icon: 'icons8-money-150.png',
        }
    },
];

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
