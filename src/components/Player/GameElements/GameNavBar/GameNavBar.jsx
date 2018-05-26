import React from 'react';
import {observer, inject} from "mobx-react";
import s from './GameNavBar.sass';
import { OptionsIcon } from 'common/Icons/Options/Options';
import { CrossIcon } from 'common/Icons/Cross/Cross';

@inject('store')
@observer
export class GameNavBar extends React.Component {
  render() {
    return <div className={s.wrap}>
      <div onClick={this.props.store.resetGameType}>
        <OptionsIcon disabled={!this.props.store.gameType} />
      </div>
      <div onClick={this.props.store.stopGame}>
        <CrossIcon />
      </div>
    </div>
  }
}
