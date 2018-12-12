import React from 'react';
import {observer, inject} from "mobx-react";
import autobind from "autobind-decorator";
import s from './PlayerPopup.sass';
import { CrossIcon } from 'common/Icons/Cross/Cross';
import { GameElementsLazy } from 'modules/Player/components/GameElements/GameElementsLazy';
import { SavedMomentsLazy } from 'modules/Player/components/SavedMoments/SavedMomentsLazy';

@inject('store')
@observer
export class PlayerPopup extends React.Component {
  renderContent() {
    switch (this.props.store.popupKey) {
    
    case 'game':
      return <GameElementsLazy />;
    
    case 'moments':
      return <SavedMomentsLazy />;
    }
  }
  
  @autobind
  onClose() {
    this.props.store.closePopup();
    this.props.store.player.play();
  }
  
  render() {
    return this.props.store.popupKey ? <div className={s.popup}>
      <CrossIcon className={s.cross} onClick={this.onClose} />
      
      <div className={s.content}>
        {this.renderContent()}
      </div>
    </div> : null;
  }
}
