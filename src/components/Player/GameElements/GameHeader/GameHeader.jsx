import React from 'react';
import {observer, inject} from "mobx-react";
import s from './GameHeader.sass';
import { Counter } from 'common/Counter/Counter';
import { OptionsIcon } from 'common/Icons/Options/Options';

@inject('store')
@observer
export class GameHeader extends React.Component {
  render() {
    let {startIndex, endIndex, setStartIndexFromHuman, setEndIndexFromHuman} = this.props.store.subtitles;
  
    // Сделано так, чтобы отображались индекс от 1, а не от нуля #humanIndex
    startIndex = startIndex + 1;
    endIndex = endIndex + 1;
  
    return <div className={s.header}>
      <div className={s.changeGame} onClick={this.props.store.resetGameType}>
        <OptionsIcon />
      </div>
      <Counter onChange={setStartIndexFromHuman} max={endIndex} value={startIndex}/>
      <Counter onChange={setEndIndexFromHuman} min={startIndex} value={endIndex} />
    </div>
  }
}
