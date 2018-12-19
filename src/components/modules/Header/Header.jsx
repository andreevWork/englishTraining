import React from 'react';
import autobind from 'autobind-decorator';

import s from './Header.sass';
import { Link } from 'react-router-dom';
import { MenuIcon } from 'common/Icons/Menu/Menu';
import { Bar } from 'modules/Header/Bar/Bar';

export class Header extends React.PureComponent {
  
  state = {
    isOpenBar: false
  };
  
  @autobind
  toggleBar() {
    this.setState({
      isOpenBar: !this.state.isOpenBar
    });
  }
  
  render() {
    return <div className={s.header}>
      {<Bar close={this.toggleBar} isOpen={this.state.isOpenBar} />}
      <Link to="/" className={s.logo} />
      <MenuIcon className={s.menu} onClick={this.toggleBar} />
    </div>;
  }
}
