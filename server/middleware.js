'use strict';

const getRawBody = require('raw-body');
const Constant = require('./constant');

class Middleware {
  static async accessLog(ctx, next) {
    const now = new Date().toISOString();
    console.log(`[${now}] ${ctx.method} ${ctx.url}`);
    await next();
  }

  static async deserializeRequest(ctx, next) {
    const contentType = ctx.req.headers['content-type'];
    if (contentType === Constant.CONTENT_TYPE) {
      ctx.req.rawBody = await getRawBody(ctx.req);
    }
    await next();
  }
}

module.exports = Middleware;
