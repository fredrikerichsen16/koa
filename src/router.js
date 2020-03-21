const KoaRouter = require('koa-router');
const router = new KoaRouter();

module.exports = function(app) {
    app.use(router.routes()).use(router.allowedMethods());

    router.get('/', async ctx => {
        await ctx.render('index.html');
    });

    return router;
};