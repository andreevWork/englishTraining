import React from 'react';
import {observer, inject} from "mobx-react";
import s from './GameElements.sass';
import { GameChoice } from 'player/GameElements/GameChoice/GameChoice';
import { GameTypesData } from 'constants/GameTypes';
import { BackIcon } from 'common/Icons/Back/Back';

@inject('store')
@observer
export default class GameElements extends React.Component {
  render() {
    const Game = GameTypesData[this.props.store.gameType] && GameTypesData[this.props.store.gameType].component;
    
    return this.props.store.gameType ? <React.Fragment>
      <BackIcon className={s.backButton} onClick={this.props.store.resetGameType} />
      
      <Game />
     </React.Fragment> : <GameChoice />;
  }
}
