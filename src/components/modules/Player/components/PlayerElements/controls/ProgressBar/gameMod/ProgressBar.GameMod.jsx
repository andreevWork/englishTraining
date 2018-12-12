import * as React from "react";
import cn from "classnames";

import {observer, inject} from "mobx-react";
import s from './ProgressBar.GameMod.sass';
import { ProgressBarBase } from 'player/PlayerElements/controls/ProgressBar/ProgressBar';
import { DateService } from 'services/DateService/DateService';

@inject('store', 'player')
@observer
export class ProgressBarGameMod extends ProgressBarBase {
  getStartTime() {
    const startSubTime = this.props.store.subtitles.getSub(this.props.store.subtitles.startIndex).startTime;
  
    return startSubTime;
  }
  
  getEndTime() {
    const endSubTime = this.props.store.subtitles.getSub(this.props.store.subtitles.endIndex).endTime;
  
    return endSubTime;
  }
  
  getCurrentTime() {
    const endSubTime = this.props.store.subtitles.getSub(this.props.store.subtitles.endIndex).endTime;
  
    return this.props.player.currentTime > endSubTime ? endSubTime : this.props.player.currentTime;
  }
  
  renderCurrentTime(currentTime) {
    const subs = this.props.store.subtitles;
    const maxStartIndex = subs.endIndex;
    const timesEl = [];
    
    if (subs.startIndex !== 0) {
      const leftStartTime = this.getFormattedTime(subs.getSub(subs.startIndex - 1).startTime);
      
      timesEl.push(<div
        key="c1"
        onClick={this.props.store.reduceStartIndex}
        className={s.choiceTime}
      >
        {leftStartTime}
      </div>);
    }
  
    if (subs.startIndex < maxStartIndex) {
      const rightStartTime = this.getFormattedTime(subs.getSub(subs.startIndex + 1).startTime);
    
      timesEl.push(<div
        key="c3"
        onClick={this.props.store.increaseStartIndex}
        className={cn(s.choiceTime, s.rightChoice)}
      >
        {rightStartTime}
      </div>);
    }
    
    return <div className={s.timeWrapper}>
      {timesEl}
      <div className={s.time}>{currentTime}</div>
    </div>;
  }
  
  renderEndTime(endTime) {
    const subs = this.props.store.subtitles;
    const maxEndIndex = subs.startIndex;
    const timesEl = [];
  
    if (subs.endIndex > maxEndIndex) {
      const leftEndTime = this.getFormattedTime(subs.getSub(subs.endIndex - 1).endTime);
    
      timesEl.push(<div
        key="e1"
        onClick={this.props.store.reduceEndIndex}
        className={s.choiceTime}
      >
        {leftEndTime}
      </div>);
    }
  
    if (subs.endIndex < subs.maxIndex) {
      const rightEndTime = this.getFormattedTime(subs.getSub(subs.endIndex + 1).endTime);
    
      timesEl.push(<div
        key="e3"
        onClick={this.props.store.increaseEndIndex}
        className={cn(s.choiceTime, s.rightChoice)}
      >
        {rightEndTime}
      </div>);
    }
  
    return <div className={s.timeWrapper}>
      {timesEl}
      <div className={s.time}>{endTime}</div>
    </div>;
  }
}
