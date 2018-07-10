import React from 'react';
import autobind from 'autobind-decorator';
import cn from 'classnames';

import s from './LeftMenu.sass';
import { Thumb } from 'common/Thumb/Thumb';

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
    return <React.Fragment>
      <div className={cn(s.menu, this.state.isOpen && s.menuOpen)}>
        <div className={s.opener} onClick={this.toggle} />
        
        {this.props.episodes.map(episode => <Thumb key={episode.id} {...episode} />)}
      </div>
    </React.Fragment>;
  }
}
