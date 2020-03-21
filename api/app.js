const path = require('path');
const koa = require('koa');
const favicon = require('koa-favicon');
const dotenv = require('dotenv');
const cors = require('@koa/cors');
const app = new koa();

dotenv.config();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(favicon(path.join(__dirname, '/favicon.ico')));

let router = require('./router')(app);

app.listen(process.env.PORT, ctx => {
   console.log('Server started on port ' + process.env.PORT);
});