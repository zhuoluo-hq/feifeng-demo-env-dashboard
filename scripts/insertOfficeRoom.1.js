const Client = require('aliyun-api-gateway').Client;
const UUID = require('uuid');

// 用appKey和appSecret初始化客户端
const client = new Client('24859823', 'b2e3e97d93e54599b74414efe6e23404');

const Gateway = async ({url, apiVer, params, iotToken}) => {

    return await client.post(url, {
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
        },
        timeout: 3000
    });

};

const params = {
    url: 'https://api.link.aliyun.com/datacenter/data/insert',
    apiVer: '1.1.0',
    params: {
      userContextDTO: {},
      dataInsertJson: {
        tableName: 'test',
        cols: ['id', 'name'],
        data: [
          [UUID.v4(), '开发部']
        ]
      }
    }
}

Gateway(params)
    .then(res => console.log(res))
    .catch(res => console.log(res));
