'use strict';

const proto = require('protobufjs');
const Constant = require('./constant');

class Handler {
  static async root(ctx, next) {
    ctx.body = {code: 200, message: 'hello, world'};
    await next();
  }

  static async rpc(ctx, next) {
    if (ctx.req.rawBody) {
      const root = await proto.load('./proto/rpc.proto');

      const GetProfileRequest = root.lookupType('user.GetProfileRequest');
      const request = GetProfileRequest.decode(ctx.req.rawBody);
      console.log(`  handling request here -> ${JSON.stringify(request)}`); // TODO: why empty?

      const GetProfileResponse = root.lookupType('user.GetProfileResponse');
      const City = root.lookupEnum('common.city.City');
      const Language = root.lookupEnum('common.lang.Language');
      const response = GetProfileResponse.create({
        name: 'taro',
        bio: 'He loves protobuf.',
        city: City.values.TOKYO,
        language: Language.values.JAPANESE,
      });

      ctx.type = Constant.CONTENT_TYPE;
      ctx.body = GetProfileResponse.encode(response).finish();
    }
    await next();
  }
}

module.exports = Handler;
