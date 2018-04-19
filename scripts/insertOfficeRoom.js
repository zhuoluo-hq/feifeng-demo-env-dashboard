const UUID = require('uuid');
const Gateway = require('./gateway');

const params = {
  url: 'http://official.api.feifengiot.com/iotx/datacenter/insert',
  apiVer: '1.0.4',
  params: {
    userContextDTO: {},
    dataInsertJson: {
      mid: 9928577,
      cols: ['id', 'name', 'deviceIotId'],
      data: [
        [UUID.v4(), '开发部', 'lk53IdyWqucOnXVEHT0r0010b3d100']
      ]
    }
  }
};

Gateway(params)
  .then(res => console.log(res))
  .catch(res => console.log(res));
