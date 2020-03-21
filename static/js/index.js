let $user = Cookies.get('user');

if (!$user || false) {
    $user = {
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

    Cookies.set('user', $user);
}