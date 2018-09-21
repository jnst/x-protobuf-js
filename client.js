'use strict';

const proto = require('protobufjs');

(async () => {
  const root = await proto.load('proto/rpc.proto');

  function rpcImpl(method, request, callback) {
    const GetProfileResponse= root.lookupType('user.GetProfileResponse');
    const response = GetProfileResponse.create({
      name: 'taro',
      bio: 'He loves protocol buffers.',
    });
    callback(null, response);
  }

  const Rpc = root.lookup('Rpc');
  const rpc = Rpc.create(rpcImpl, false, false);

  const GetProfileRequest= root.lookupType('user.GetProfileRequest');
  const request = GetProfileRequest.create({user_id: 1});
  const response = await rpc.getProfile(request);

  console.log(`GetProfile: ${JSON.stringify(response)}`);
})();
