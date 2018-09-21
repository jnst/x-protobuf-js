'use strict';

const axios = require('axios');
const proto = require('protobufjs');

(async () => {
  const root = await proto.load('proto/rpc.proto');

  function rpcImpl(method, request, callback) {
    const buffer = GetProfileRequest.encode(request).finish();

    axios({
      method: 'post',
      url: 'http://localhost:3000/rpc',
      headers: {'Content-Type': 'application/octet-stream'},
      data: buffer,
      responseType: 'arraybuffer'
    }).then((response) => {
      const GetProfileResponse= root.lookupType('user.GetProfileResponse');
      const res = GetProfileResponse.decode(response.data);
      callback(null, res);
    }).catch(err => {
      callback(err);
    });
  }

  const Rpc = root.lookup('Rpc');
  const rpc = Rpc.create(rpcImpl, false, false);

  const GetProfileRequest = root.lookupType('user.GetProfileRequest');
  const request = GetProfileRequest.create({user_id: 1});

  const response = await rpc.getProfile(request);
  console.log(`GetProfile: ${JSON.stringify(response)}`);
})().catch(err => console.error(err));
