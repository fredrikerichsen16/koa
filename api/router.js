const KoaRouter = require('koa-router');
const router = new KoaRouter();
const backgrounds = require('./services/getBackgrounds');

module.exports = function(app) {
    router.get('/get-background', async ctx => {
        // request.header.cookie (get cookie - have to JSON.parse it)
        ctx.body = backgrounds;
    });

    app.use(router.routes()).use(router.allowedMethods());

    return router;
};