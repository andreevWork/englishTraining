import React from 'react';
import {observer, inject} from "mobx-react";
import s from './GameElements.sass';
import { Button } from 'common/Button/Button';
import { JustShow } from 'games/JustShow/JustShow';

@inject('store')
@observer
export class GameElements extends React.Component {
  
  renderGame() {
    switch(this.props.store.gameType) {
      case 'JustShow':
        return <JustShow />
    }
  }
  
  render() {
    return <div className={s.gameElements}>
      <div className={s.game}>
        {this.renderGame()}
      </div>
      
      <div className={s.buttons}>
        <Button onClick={this.props.store.repeatCurrentSubs}>
          Повторить
        </Button>
        <Button onClick={this.props.store.continueWatch}>
          Продолжить
        </Button>
      </div>
    </div>;
  }
}
