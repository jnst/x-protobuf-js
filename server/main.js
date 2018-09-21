'use strict';

const Koa = require('koa');
const Router = require('koa-router');

const Handler = require('./handler');
const Middleware = require('./middleware');

const app = new Koa();
const router = new Router();

router
  .get('/', Handler.root)
  .post('/rpc', Handler.rpc);

app
  .use(Middleware.accessLog)
  .use(Middleware.deserializeRequest)
  .use(router.routes())
  .use(router.allowedMethods());

const main = app.listen(3000);
console.log(`Listening on port ${main.address().port}..`);
