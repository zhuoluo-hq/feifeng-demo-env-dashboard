const Gateway = require('./gateway');
const logger = require('./logger');

// lk53IdyWqucOnXVEHT0r0010b3d100
const params = {
  url: 'http://official.api.feifengiot.com/iotx/datacenter/query',
  apiVer: '1.0.4',
  params: {
    userContextDTO: {},
    dataQueryJson: {
      mid: 9928574,
      cols: [
        'iotId', 'gmtCreate', 'productKey', 'CurrentTemperature', 'RelativeHumidity',
        'PM25Value', 'LightLuxValue', 'CO2Value', 'SoundDecibelValue'
      ],
      expr: {
        op: 'and',
        filters: [{'col': 'iotId', 'comp': '=', 'val': 'lk53IdyWqucOnXVEHT0r0010b3d100'}]
      },
      orderby: {
        col: 'gmtCreate',
        type: 'asc'
      },
      page: {
        to: 1,
        size: 2
      }
    }
  }
};

Gateway(params)
  .then(res => logger.info(res))
  .catch(res => logger.error(res));
