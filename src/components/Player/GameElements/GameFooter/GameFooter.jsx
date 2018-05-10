import React from 'react';
import {observer, inject} from "mobx-react";
import s from './GameFooter.sass';
import { Button } from 'common/Button/Button';

@inject('store')
@observer
export class GameFooter extends React.Component {
  
  render() {
    return <div className={s.footer}>
      <Button onClick={this.props.store.repeatCurrentSubs}>
        Повторить
      </Button>
      <Button onClick={this.props.store.leftFiveSec}>
        влево 5 сек
      </Button>
      <Button onClick={this.props.store.player.tooglePlay}>
        пайза
      </Button>
      <Button onClick={this.props.store.resetGameType}>
        выбор игры
      </Button>
      <Button onClick={this.props.store.continueWatch}>
        Продолжить
      </Button>
    </div>;
  }
}
