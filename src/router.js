const KoaRouter = require('koa-router');
const router = new KoaRouter();
const setCookies = require('./services/setCookiesService');

module.exports = function(app) {
    app.use(router.routes()).use(router.allowedMethods());

    router.get('/', async (ctx) => {
        ctx = setCookies(ctx);
        await ctx.render('index.html');
    });

    router.get('/get-background', async ctx => {
        let backgrounds = ["cali.jpg", "car.jpg", "grid.jpg", "mountain.jpg", "preikestolen.jpg"];
        let background = backgrounds[Math.floor(Math.random() * backgrounds.length - 1)];

        ctx.body = [
            {
                name: backgrounds[0],
                info: {
                    header: 'Los Angeles',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi minima tenetur dolore dolorum ab quia.',
                }
            },
            {
                name: backgrounds[1],
                info: {
                    header: 'Car',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi minima tenetur dolore dolorum ab quia.',
                }
            },
            {
                name: backgrounds[2],
                info: {
                    header: 'Cyberpunk',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi minima tenetur dolore dolorum ab quia.',
                }
            },
            {
                name: backgrounds[3],
                info: {
                    header: 'Yosemite, Colorado',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi minima tenetur dolore dolorum ab quia.',
                }
            },
            {
                name: backgrounds[4],
                info: {
                    header: 'Preikestolen, Jørpeland, Norway',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi minima tenetur dolore dolorum ab quia.',
                }
            },
        ];
    });

    router.get('/settings', async ctx => {
        await ctx.render('settings');
    });

    return router;
};