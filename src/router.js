const KoaRouter = require('koa-router');
const router = new KoaRouter();
const setCookies = require('./services/setCookiesService');

module.exports = function(app) {
    app.use(router.routes()).use(router.allowedMethods());

    router.get('/', async (ctx) => {
        // ctx = setCookies(ctx);
        await ctx.render('index.html');
    });

    router.get('/settings', async ctx => {
        await ctx.render('settings');
    });

    return router;
};