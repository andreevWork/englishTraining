import * as React from "react";

import { observer, inject } from "mobx-react";
import s from './ProgressBar.moments.sass';
import { ProgressBarBase } from 'player/PlayerElements/controls/ProgressBar/ProgressBar';

@inject('data', 'episodes', 'serials', 'subtitles', 'player')
@observer
export class ProgressBarMoments extends ProgressBarBase {
  renderOnTimeLine() {
    const subId = this.props.data.getCurrentSavedMoment({
      serial_id: this.props.serials.currentId,
      episode_id: this.props.episodes.currentId
    });
    const { startTime } = this.props.subtitles.getSub(subId);
  
    return <div
      style={{ left: startTime / this.getCurrentDuration() * 100 + '%' }}
      data-time={this.getFormattedTime(startTime)}
      className={s.moment}
    />;
  }
}
