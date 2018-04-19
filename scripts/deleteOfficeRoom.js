const Gateway = require('./gateway');

const params = {
  url: 'http://official.api.feifengiot.com/iotx/datacenter/delete',
  apiVer: '1.0.4',
  params: {
    userContextDTO: {},
    dataDeleteJson: {
      mid: 9928577,
      expr: {
        op: 'and',
        filters: [{'col': 'id', 'comp': '=', 'val': ''}]
      }
    }
  }
};

Gateway(params)
  .then(res => console.log(res))
  .catch(res => console.log(res));
