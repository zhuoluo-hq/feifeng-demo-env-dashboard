const Gateway = require('./gateway');
const logger = require('./logger');

// 0a39f2c9-c3e0-469f-babf-14e739bed94a
const params = {
  url: 'http://official.api.feifengiot.com/iotx/datacenter/query',
  apiVer: '1.0.4',
  params: {
    userContextDTO: {},
    dataQueryJson: {
      mid: 9928577,
      cols: ['id', 'name', 'deviceIotId'],
      expr: {
        op: 'and',
        filters: [{'col': 'id', 'comp': '=', 'val': '0a39f2c9-c3e0-469f-babf-14e739bed94a'}]
      }
    }
  }
};

Gateway(params)
  .then(res => logger.info(res))
  .catch(res => logger.error(res));
