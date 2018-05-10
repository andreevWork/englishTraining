import React from 'react';
import {inject} from "mobx-react";
import s from './GameChoice.sass';
import { Button } from 'common/Button/Button';
import { GameTypes, GameTypesData } from 'constants/GameTypes';

@inject('store')
export class GameChoice extends React.Component {
  render() {
    return <div className={s.wrap}>
      {GameTypes.map(gameType => <Button key={gameType} onClick={() => this.props.store.setGameType(gameType)}>
        {GameTypesData[gameType].name}
      </Button>)}
    </div>;
  }
}
