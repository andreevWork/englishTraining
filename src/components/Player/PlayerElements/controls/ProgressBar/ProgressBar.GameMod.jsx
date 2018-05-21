import * as React from "react";

import {observer, inject} from "mobx-react";
import { ProgressBarBase } from 'player/PlayerElements/controls/ProgressBar/ProgressBar';

// TODO сделать прогресс по времени всего видео а не по сабам, тупо обрезать по сабу весь таймлайн

@inject('store', 'player')
@observer
export class ProgressBarGameMod extends ProgressBarBase {
  
  getCurrentTime() {
    const startSubTime = this.props.store.subtitles.getSub(this.props.store.subtitles.startIndex).startTime;

    return this.props.player.currentTime - startSubTime;
  }
  
  getDuration() {
    const startSubTime = this.props.store.subtitles.getSub(this.props.store.subtitles.startIndex).startTime;
    const endSubTime = this.props.store.subtitles.getSub(this.props.store.subtitles.endIndex).endTime;
  
    return endSubTime - startSubTime;
  }
  
  getStartTime() {
    const startSubTime = this.props.store.subtitles.getSub(this.props.store.subtitles.startIndex).startTime;
  
    return startSubTime;
  }
}
