var path = require('path')
var webpack = require('webpack')

var MODE = 'development';
var VUE_SRC = path.resolve(__dirname, 'vue');
var VUE_DIST = path.resolve(__dirname, 'static/vue-dist');

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: MODE,
    entry: {
        app: VUE_SRC + '/app.js',
    },
    output: {
        path: VUE_DIST,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: VUE_SRC,
                exclude: '/node_modules/',
                query: {
                    presets: [
                        '@babel/preset-env',
                        // '@babel/preset-es2015'
                    ],
                    plugins: [
                        // dynamic importing vue routes (lazy load)
                        '@babel/plugin-syntax-dynamic-import',
                        ['@babel/plugin-transform-runtime', {
                            'regenerator': true
                        }]
                    ]
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    // loaders: {
                    //     // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                    //     // the "scss" and "sass" values for the lang attribute to the right configs here.
                    //     // other preprocessors should work out of the box, no loader config like this necessary.
                    //     'scss': [
                    //         'vue-style-loader',
                    //         'css-loader',
                    //         'sass-loader',
                    //     ],
                    //     'sass': [
                    //         'vue-style-loader',
                    //         'css-loader',
                    //         'sass-loader?indentedSyntax',
                    //     ]
                    // }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
            test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['.js', '.vue', '.json']
    },
};
