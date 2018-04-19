import { Model } from '@bone/web';
import {
  getEnvData
} from '../service';
class EnvDataModel extends Model {
    // 初始状态
    static initialState = {
      data: []
    }
    // 异步action
    async getEnvData (id) {
      return {
        data: await getEnvData(id)
      };
    }
    // action执行报错事件
    onError (e) {
      console.log(e);
    }
}

export default EnvDataModel;
