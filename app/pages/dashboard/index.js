import React, { Component } from 'react';
import { Grid, Icon } from '@bone/bone-web-ui';
import EvnDataModel from '../../models/envData';
// 以CSS Modules方式引入Home页样式
import style from './index.scss';

const { Row, Col } = Grid;

function getIconType (dataKey) {
  let type;
  switch (dataKey) {
    case 'CurrentTemperature':
      type = 'wendu';
      break;
    case 'RelativeHumidity':
      type = 'shidu';
      break;
    case 'PM25Value':
      type = 'icon-pm';
      break;
    case 'LightLuxValue':
      type = 'guangzhao';
      break;
    case 'CO2Value':
      type = 'icon-co';
      break;
    case 'SoundDecibelValue':
      type = 'shengyin';
      break;
  }

  return type;
}

function formatData (data) {
  return data.map((item, index) => ({
    type: getIconType(item.key),
    bgCls: style[`bg${index % 5}`],
    ...item
  }));
}

// 导出Home页组件
export default class Home extends Component {
    static Model = EvnDataModel

    componentDidMount () {
      this.actions.getEnvData(this.location.params.officeRoomId);
    }

    render () {
      const data = formatData(this.props.data);

      return <Row type='wrap'>
        {
          data.map(item => (
            <Col key={item.key} span={8}>
              <div className={`${style.dataItem} ${item.bgCls}`}>
                <div className={style.title}>{item.name}</div>
                <div className={style.content}>
                  <i className={`env-icon env-icon-${item.type} ${style.icon}`} />
                  <span className={style.value}>{item.value}</span>
                  <span className={style.unit}>{item.unit}</span>
                </div>
              </div>
            </Col>
          ))
        }
      </Row>;
    }
}
