import dev from './dev';
import prod from './prod';

// 实际项目中根据打包命令参数或者运行环境判断
// const env = 'dev';
const env = 'prod';

const config = env === 'dev' ? dev : prod;

export default {
  mockHost: 'http://localhost:8000',
  hosts: {
    envDashboardData: 'http://f62926c32f394edba69828092743ecfd-cn-shanghai.alicloudapi.com'
  },
  ...config
};
