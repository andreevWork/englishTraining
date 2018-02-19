import React from 'react';

import s from './Spinner.sass';

export class Spinner extends React.Component {
    render() {
        return <div className={s.container}>
          <div className={s.cube_1} />
          <div className={s.cube_2} />
          <div className={s.cube_3} />
          <div className={s.cube_4} />
          <div className={s.cube_5} />
          <div className={s.cube_6} />
          <div className={s.cube_7} />
          <div className={s.cube_8} />
          <div className={s.cube_9} />
        </div>;
    }
}
