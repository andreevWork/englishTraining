import React from 'react';
import {inject} from "mobx-react";
import s from './GameChoice.sass';
import { Button } from 'common/Button/Button';
import { GameTypesData } from 'constants/GameTypes';

@inject('store')
export class GameChoice extends React.Component {
  render() {
    return <div className={s.wrap}>
      {Object.entries(GameTypesData).map(([gameType, gameData]) => <Button
          className={s.button}
          key={gameType}
          disabled={gameData.comingSoon}
          onClick={() => !gameData.comingSoon && this.props.store.setGameType(gameType)}
        >
          {gameData.name}
        </Button>)}
    </div>;
  }
}
