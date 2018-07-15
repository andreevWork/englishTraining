import React from 'react';
import autobind from 'autobind-decorator';
import cn from 'classnames';

import s from './LeftMenu.sass';
import { Episodes } from '../../../modules/Episodes/Episodes';
import { Scrollbars } from 'react-custom-scrollbars';
import { PlayListIcon } from 'common/Icons/PlayList/PlayList';

export class LeftMenu extends React.Component {
  state = {
    isOpen: false
  };
  
  @autobind
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return <div className={cn(s.menu, this.state.isOpen && s.menuOpen)}>
      <div className={s.opener} onClick={this.toggle}>
        <PlayListIcon className={s.icon} notHover />
      </div>
      
      <Scrollbars
        style={{
          width: '445px',
          height: 'calc(100vh - 110px)'
        }}
        autoHide
      >
        <Episodes />
      </Scrollbars>
    </div>;
  }
}
