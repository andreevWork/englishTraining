import * as React from "react";

import { observer, inject } from "mobx-react";
import s from './ProgressBar.player.sass';
import { ProgressBarBase } from 'player/PlayerElements/controls/ProgressBar/ProgressBar';

@inject('player', 'episodes', 'subtitles')
@observer
export class ProgressBarPlayer extends ProgressBarBase {
  renderOnTimeLine() {
    if (!this.props.subtitles.isReady || !this.progressWrapRef.current) {
      return null;
    }
    
    const savedMoments = this.props.episodes.getCurrentSavedMoments();
    
    if (savedMoments) {
      return savedMoments.map(sub_id => <div
        key={sub_id}
        style={this.getMomentStyle(sub_id)}
        className={s.moment}
      />)
    }
    
    return null;
  }
  
  getMomentStyle(sub_id) {
    const { endTime, startTime } = this.props.subtitles.getSub(sub_id);
    
    const width = Math.ceil((endTime - startTime) / this.getCurrentDuration() * this.progressWrapRef.current.offsetWidth);
    
    return {
      width: width + 1 + 'px',
      left: startTime / this.getCurrentDuration() * 100 + '%'
    }
  }
}
