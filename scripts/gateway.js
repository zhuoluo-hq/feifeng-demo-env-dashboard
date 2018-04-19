const Client = require('aliyun-api-gateway').Client;
const UUID = require('uuid');

// 用appKey和appSecret初始化客户端
const client = new Client('24849036', 'dfd33ab90e79571c8a887caf2d90419f');
// const client = new Client('24859823', 'b2e3e97d93e54599b74414efe6e23404');

const Gateway = async ({ url, apiVer, params, iotToken }) => {
  const gateway = await client.post(url, {
    data: {
      id: UUID.v1(), // 请求唯一标识，必填
      version: '1.0', // 协议版本，固定值1.0
      request: {
        iotToken, // iottoken，选填
        apiVer // api版本，必填
      },
      params: params || {} // 业务参数，必填
    },
    headers: {
      accept: 'application/json'
    }
  });

  return gateway;
};

module.exports = Gateway;
