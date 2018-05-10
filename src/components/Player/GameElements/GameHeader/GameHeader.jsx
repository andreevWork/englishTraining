import React from 'react';
import {observer, inject} from "mobx-react";
import s from './GameHeader.sass';
import { Counter } from 'common/Counter/Counter';

@inject('store')
@observer
export class GameHeader extends React.Component {
  render() {
    let {startIndex, endIndex, setStartIndexFromHuman, setEndIndexFromHuman} = this.props.store.subtitles;
  
    // Сделано так, чтобы отображались индекс от 1, а не от нуля #humanIndex
    startIndex = startIndex + 1;
    endIndex = endIndex + 1;
  
    return <div className={s.header}>
      <Counter onChange={setStartIndexFromHuman} max={endIndex} value={startIndex}/>
      <Counter onChange={setEndIndexFromHuman} min={startIndex} value={endIndex} />
    </div>
  }
}