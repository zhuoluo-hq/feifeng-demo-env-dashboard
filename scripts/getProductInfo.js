const Gateway = require('./gateway');
const logger = require('./logger');

// a1WLSfefNC9
const params = {
  url: 'http://official.api.feifengiot.com/thing/product/properties/get',
  apiVer: '1.0.0',
  params: {
    productKey: 'a1WLSfefNC9'
  }
};

Gateway(params)
  .then(res => logger.info(res))
  .catch(res => logger.error(res));
