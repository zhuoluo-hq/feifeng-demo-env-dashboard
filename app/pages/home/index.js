import React, { Component } from 'react';
// 以CSS Modules方式引入Home页样式
import style from './index.scss';

// 导出Home页组件
export default class Home extends Component {
  render () {
    return <div className={style.container}>
      <p className={style.welcome}>请选择办公室</p>
    </div>;
  }
}
