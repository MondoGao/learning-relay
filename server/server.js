const Koa = require('koa');
const app = new Koa();

const middlewares = require('./middlewares');

app.use(middlewares);

if (!module.parent) app.listen(3000);

module.exports = app;
