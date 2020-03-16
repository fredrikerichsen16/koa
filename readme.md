Basic setup for compiling Vue code to browser-readable JavaScript with webpack

From static/js/vue to static/js/vue-dist

This part solves the "can't render templates in runtime only mode" or something like that. Idk why
```
resolve: {
    alias: {
        'vue$': 'vue/dist/vue.esm.js'
    }
},
```

### package.json
I'm not 100% sure all the dependencies stated in package.json are actually used.
Most of them are. But maybe not all the babel-preset-... ones. (E.g. -env, -es2015, -state-3 idk bout these)
And not ts-loader or typescript if you don't choose to use typescript
