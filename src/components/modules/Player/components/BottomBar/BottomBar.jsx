import React from 'react';
import { inject, observer } from 'mobx-react/index';
import { CSSTransitionGroup } from 'react-transition-group';
import s from './BottomBar.sass';
import { CrossIcon } from 'common/Icons/Cross/Cross';
import { Translation } from 'modules/Player/components/BottomBar/Translation/Translation';

@inject('data')
@observer
export class BottomBar extends React.Component {
  renderContent() {
    const {textForTranslate} = this.props.data;
    
    if (!textForTranslate) {
      return undefined;
    }
    
    return <div className={s.bottom}>
      <CrossIcon className={s.cross} onClick={() => this.props.data.setTextForTranslate('')}/>
      
      {textForTranslate && <Translation key={textForTranslate} textForTranslate={textForTranslate} />}
    </div>
  }
  
  render() {
    return <CSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={600}
      transitionLeaveTimeout={600}
    >
      {this.renderContent()}
    </CSSTransitionGroup>;
  }
}
