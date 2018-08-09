import React from 'react';
import {observer, inject} from "mobx-react";
import s from './GameNavBar.sass';
import { CrossIcon } from 'common/Icons/Cross/Cross';
import { WithKey } from 'common/WithKey/WithKey';
import { BackIcon } from 'common/Icons/Back/Back';

@inject('store')
@observer
export class GameNavBar extends React.Component {
  render() {
    return <div className={s.wrap}>
      {this.props.store.gameType ? <BackIcon onClick={this.props.store.resetGameType}/> : <div />}
  
      <WithKey name="Esc" action={this.props.store.stopGame}>
        <CrossIcon />
      </WithKey>
    </div>
  }
}
