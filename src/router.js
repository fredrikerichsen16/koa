const KoaRouter = require('koa-router');
const router = new KoaRouter();
const setCookies = require('./services/setCookiesService');
const backgrounds = require('./services/getBackgrounds');

module.exports = function(app) {
    app.use(router.routes()).use(router.allowedMethods());

    router.get('/', async (ctx) => {
        ctx = setCookies(ctx);
        await ctx.render('index.html');
    });

    router.get('/get-background', async ctx => {
        ctx.body = backgrounds;
    });

    router.get('/settings', async ctx => {
        await ctx.render('settings');
    });

    return router;
};