import React from 'react';
import {observer, inject} from "mobx-react";
import s from './GameNavBar.sass';
import { OptionsIcon } from 'common/Icons/Options/Options';
import { CrossIcon } from 'common/Icons/Cross/Cross';
import { WithKey } from 'common/WithKey/WithKey';

@inject('store')
@observer
export class GameNavBar extends React.Component {
  render() {
    return <div className={s.wrap}>
      <WithKey disabled={!this.props.store.gameType} name="Z"  action={this.props.store.resetGameType}>
        <OptionsIcon />
      </WithKey>
      
      <WithKey name="Esc" action={this.props.store.stopGame}>
        <CrossIcon />
      </WithKey>
    </div>
  }
}
