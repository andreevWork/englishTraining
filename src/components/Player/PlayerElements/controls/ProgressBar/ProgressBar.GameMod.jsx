import * as React from "react";

import {observer, inject} from "mobx-react";
import { ProgressBarBase } from 'player/PlayerElements/controls/ProgressBar/ProgressBar';

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
}
