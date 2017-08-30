const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('/', async (ctx, next) => {
  ctx.body = 'hello koa';
  next();
});

module.exports = router;
