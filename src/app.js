const path = require('path');
const koa = require('koa');

const views = require('koa-views');
const static = require('koa-static');
const favicon = require('koa-favicon');

const app = new koa();

app.use(views(path.join(__dirname, '../views'), { extension: 'html' }));
app.use(static(path.join(__dirname, '../static')));
app.use(favicon(path.join(__dirname, '/favicon.ico')));

const router = require('./router')(app);

app.listen(3000, ctx => {
   console.log('Server started on port 3000');
});