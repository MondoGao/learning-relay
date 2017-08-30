const KoaLogger = require('koa-logger');
const KoaCompose = require('koa-compose');

const router = require('./router');

const middlewares = [];

middlewares.push(router.routes());
middlewares.push(router.allowedMethods());

if (process.env.NODE_ENV === 'development') {
  middlewares.unshift(KoaLogger());
}

module.exports = KoaCompose(middlewares);
