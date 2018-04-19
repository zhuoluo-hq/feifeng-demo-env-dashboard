const Gateway = require('./gateway');
const logger = require('./logger');

// 0a39f2c9-c3e0-469f-babf-14e739bed94a
const params = {
  url: 'http://f62926c32f394edba69828092743ecfd-cn-shanghai.alicloudapi.com/envDashboardData/query',
  apiVer: '0.1.0',
  params: {
    officeRoomId: '0a39f2c9-c3e0-469f-babf-14e739bed94a'
  }
};

Gateway(params)
  .then(res => logger.info(res))
  .catch(res => logger.error(res));
