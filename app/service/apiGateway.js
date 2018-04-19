import axios from 'axios';
import IoTGateway from '@bone/iot-gateway';

import config from '../config';

const { mockHost, isMock, hosts } = config;

function _getUrl (service, path, mock) {
  if (mock) {
    return mockHost + path;
  }

  return hosts[service] + path;
}

// 接口的切面
function _response (res) {
  if (res.code === 200) {
    return res.data;
  }
  return false;
}

class ApiGateway {
  get (service, path, apiVer, params, isMockApi) {
    const mock = isMockApi === undefined ? isMock : isMockApi;
    const url = _getUrl(service, path, mock);
    if (mock) {
      return axios
        .get(url, {params})
        .then(function (response) {
          return _response(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      const data = {
        url,
        apiVer,
        params
      };
      return IoTGateway
        .get(data)
        .then(res => _response(res))
        .catch(res => {
          console.error(res);
        });
    }
  }

  post (service, path, apiVer, params, isMockApi) {
    const mock = isMockApi === undefined ? isMock : isMockApi;
    const url = _getUrl(service, path, mock);
    if (mock) {
      return axios
        .post(url, params)
        .then(function (response) {
          return _response(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      const data = {
        url,
        apiVer,
        params
      };
      return IoTGateway
        .post(data)
        .then(res => _response(res))
        .catch(res => {
          console.error(res);
        });
    }
  }
}

const apiGateway = new ApiGateway();

export default apiGateway;
