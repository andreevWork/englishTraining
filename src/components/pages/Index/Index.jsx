import React from 'react';
import s from './Index.sass';
import { Serials } from '../../modules/Serials/Serials';

export class Index extends React.Component {
  render() {
    return <React.Fragment>
      <div className={s.banner}>
        <div className={s.bannerTitle}>
          Смотрите сериалы. <br />
          Разбирайте не понятные фразы. <br />
          Улучшайте английский. <br />
        </div>
      </div>
      
      <div className={s.serials}>
        <Serials />
      </div>
    </React.Fragment>;
  }
}
