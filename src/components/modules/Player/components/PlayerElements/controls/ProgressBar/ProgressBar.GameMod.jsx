import * as React from "react";

import {observer, inject} from "mobx-react";
import s from './ProgressBar.GameMod.sass';
import { ProgressBarBase } from 'player/PlayerElements/controls/ProgressBar/ProgressBar';
import { DateService } from 'services/DateService/DateService';

@inject('store', 'player')
@observer
export class ProgressBarGameMod extends ProgressBarBase {
  
  classChoiceTime = `${s.choiceTime} hover`;
  
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
      const leftStartTime = DateService.getFormattedTimeFromS(
        subs.getSub(subs.startIndex - 1).startTime,
        this.timeFormat
      );
      
      timesEl.push(<div
        key="c1"
        onClick={this.props.store.reduceStartIndex}
        className={this.classChoiceTime}
      >
        {leftStartTime}
      </div>);
    }
  
    timesEl.push(<div key="c2" className={s.time}>{currentTime}</div>);
  
    if (subs.startIndex < maxStartIndex) {
      const rightStartTime = DateService.getFormattedTimeFromS(
        subs.getSub(subs.startIndex + 1).startTime,
        this.timeFormat
      );
    
      timesEl.push(<div
        key="c3"
        onClick={this.props.store.increaseStartIndex}
        className={this.classChoiceTime}
      >
        {rightStartTime}
      </div>);
    }
    
    return <div className={s.timeWrapper}>
      {timesEl}
    </div>;
  }
  
  renderEndTime(endTime) {
    const subs = this.props.store.subtitles;
    const maxEndIndex = subs.startIndex;
    const timesEl = [];
  
    if (subs.endIndex > maxEndIndex) {
      const leftEndTime = DateService.getFormattedTimeFromS(
        subs.getSub(subs.endIndex - 1).endTime,
        this.timeFormat
      );
    
      timesEl.push(<div
        key="e1"
        onClick={this.props.store.reduceEndIndex}
        className={this.classChoiceTime}
      >
        {leftEndTime}
      </div>);
    }
  
    timesEl.push(<div key="e2" className={s.time}>{endTime}</div>);
  
    if (subs.endIndex < subs.maxIndex) {
      const rightEndTime = DateService.getFormattedTimeFromS(
        subs.getSub(subs.endIndex + 1).endTime,
        this.timeFormat
      );
    
      timesEl.push(<div
        key="e3"
        onClick={this.props.store.increaseEndIndex}
        className={this.classChoiceTime}
      >
        {rightEndTime}
      </div>);
    }
  
    return <div className={s.timeWrapper}>
      {timesEl}
    </div>;
  }
}
