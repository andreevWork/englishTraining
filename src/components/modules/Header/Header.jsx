import React from 'react';

import s from './Header.sass';

export class Header extends React.PureComponent {
  render() {
    return <div className={s.headerWrap}>
      <div className={s.header} />
    </div>;
  }
}
