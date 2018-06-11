import React from 'react';
import {inject} from "mobx-react";
import s from './GameChoice.sass';
import { Button } from 'common/Button/Button';
import { GameTypesData } from 'constants/GameTypes';
import { WithKey } from 'common/WithKey/WithKey';

@inject('store')
export class GameChoice extends React.Component {
  render() {
    return <div className={s.wrap}>
      <div className={s.title}>
        Выберите формат субтитров
      </div>
      {Object.entries(GameTypesData).map(([gameType, gameData]) => <WithKey
        withMargin
        key={gameType}
        disabled={gameData.comingSoon}
        name={gameData.key}
        action={() => !gameData.comingSoon && this.props.store.setGameType(gameType)}
      >
        <Button className={s.button}>
          {gameData.name}
        </Button>
      </WithKey>)}
    </div>;
  }
}
