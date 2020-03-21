const path = require('path');
const koa = require('koa');

const views = require('koa-views');
const static = require('koa-static');
const favicon = require('koa-favicon');

const app = new koa();

const dotenv = require('dotenv');
dotenv.config();

app.use(views(path.join(__dirname, '../views'), { extension: 'html' }));
app.use(static(path.join(__dirname, '../static')));
app.use(favicon(path.join(__dirname, '/favicon.ico')));

let router;

app.use(async (ctx, next) => {
   if(ctx.req.url.startsWith('/api')) {
      router = require('./apiRouter')(app);
   } else {
      router = require('./router')(app);
   }

   return await next();
});

app.listen(process.env.PORT, ctx => {
   console.log('Server started on port 3000');
});