import React from 'react';
import s from './Index.sass';
import { Episodes } from '../../modules/Episodes/Episodes';

export class Index extends React.Component {
  
  render() {
    return <React.Fragment>
      <div className={s.banner}>
        <div className={s.bannerTitle}>
          Просматривайте сериалы и улучшайте свой english
          
          <div className={s.bannerSubTitle}>
            <b>Цель проекта</b> — повысить ваш уровень английского, путем инновационного способа просмотра сериалов. <br />
            <b>Выбирайте серию</b> и начинайте <b>улучшать</b> свои навыки в английском.
          </div>
        </div>
      </div>
      
      <Episodes />
    </React.Fragment>;
  }
}
