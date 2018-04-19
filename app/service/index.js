import apiGateway from './apiGateway';

export function getEnvData (id) {
  return apiGateway.post('envDashboardData', '/envDashboardData/query', '0.1.0', {
    officeRoomId: id
  });
}
// import IoTGateway from '@bone/iot-gateway';

// export function getEnvData (id) {
//   return IoTGateway.post({
//     url: 'http://f62926c32f394edba69828092743ecfd-cn-shanghai.alicloudapi.com/envDashboardData/query',
//     apiVer: '0.1.0',
//     params: {
//       officeRoomId: id
//     }
//   });
// }
