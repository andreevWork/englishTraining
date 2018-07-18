import React from 'react';

import s from './Header.sass';
import { Link } from 'react-router-dom';

export class Header extends React.PureComponent {
  render() {
    return <div className={s.header}>
      <Link to="/" className={s.logo} />
    </div>;
  }
}
