const cookiesConfig = {
    httpOnly: false,
    path: '/',
    overwrite: true
};

module.exports = function(ctx) {
    let user = ctx.cookies.get('user');

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

        ctx.cookies.set('user', JSON.stringify(user), cookiesConfig);
    }

    return ctx;
};