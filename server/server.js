const Koa = require('koa');

const middlewares = require('./middlewares');

const app = new Koa();

app.use(middlewares);

if (!module.parent) app.listen(3000);

module.exports = app;
