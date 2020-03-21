const KoaRouter = require('koa-router');
const router = new KoaRouter();
const backgrounds = require('./services/getBackgrounds');

module.exports = function(app) {
    app.use(router.routes()).use(router.allowedMethods());

    router.get('/api/login', async (ctx) => {
        ctx.body = 'HELLO THERE BISHHH';
    });

    router.get('/api/get-background', async ctx => {
        ctx.body = backgrounds;
    });

    return router;
}