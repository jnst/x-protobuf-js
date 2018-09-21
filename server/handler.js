'use strict';

const Constant = require('./constant');

class Handler {
  static async root(ctx, next) {
    ctx.body = {code: 200, message: 'hello, world'};
    await next();
  }

  static async rpc(ctx, next) {
    if (ctx.req.rawBody) {
      ctx.type = Constant.CONTENT_TYPE;
      ctx.body = null; // await pb.load(ctx.req.rawBody);
    }
    await next();
  }
}

module.exports = Handler;
