const KoaLogger = require('koa-logger');
const KoaCompose = require('koa-compose');

const middlewares = [];

middlewares.push(async function writeBody(ctx, next) {
  ctx.body = 'hello koa1';
  await next();
});

if (process.env.NODE_ENV === 'development') {
  middlewares.unshift(KoaLogger());
}

module.exports = KoaCompose(middlewares);
