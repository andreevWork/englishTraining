import React from 'react';
import autobind from 'autobind-decorator';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import s from './LeftMenu.sass';
import { inject, observer } from 'mobx-react/index';
import { Thumb } from 'common/Thumb/Thumb';

@inject('common')
@observer
export class LeftMenu extends React.Component {
  state = {
    isOpen: false
  };
  
  @autobind
  open() {
    this.setState({
      isOpen: true
    });
  }
  
  render() {
    return <div>
      <div onClick={this.open}>erweqr</div>
  
      <TransitionGroup>
        {this.state.isOpen && <CSSTransition
          timeout={300}
          classNames="slide"
        >
          <div className={s.menu}>
            {this.props.serials.map(episode => <Thumb key={episode.id} {...episode} />)}
              </div>
        </CSSTransition>}
      </TransitionGroup>
      
      
    </div>;
  }
}
