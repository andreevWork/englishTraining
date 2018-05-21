import * as React from "react";

import autobind from 'autobind-decorator';
import s from './ProgressBar.sass';
import {observer, inject} from "mobx-react";
import {DateService} from "services/DateService/DateService";

export class ProgressBarBase extends React.Component {
    
    progressWrapRef = React.createRef();
    
    getCurrentTime() {
      return this.props.player.currentTime;
    }
    
    getDuration() {
      return this.props.player.duration;
    }
    
    getStartTime() {
      return 0;
    }
    
    @autobind
    onClick(e) {
        const el = e.currentTarget;
        const {left} = el.getBoundingClientRect();
        const pos = (e.pageX  - left) / el.offsetWidth;
        const time = this.getStartTime() + pos * this.getDuration();
        
        this.props.player.setCurrentTime(time);
    }
  
    getWidth() {
        if (!this.progressWrapRef.current) {
            return '';
        }
        
        return (this.getCurrentTime() / this.getDuration() * this.progressWrapRef.current.offsetWidth) + 'px';
    }

    render() {
        const timeFormat = DateService.getTimeFormatFromS(this.getDuration());

        const currentTime = DateService.getFormattedTimeFromS(this.getCurrentTime(), timeFormat);
        const duration = DateService.getFormattedTimeFromS(this.getDuration(), timeFormat);

        return <div className={s.container}>
            <div className={s.time}>
                {currentTime}
            </div>
            <div
                onClick={this.onClick}
                className={s.progress}
                ref={this.progressWrapRef}
            >
              <div className={s.value} style={{ width: this.getWidth() }} />
            </div>
            <div className={s.time}>
                {duration}
            </div>
        </div>;
    }
}

@inject('player')
@observer
export class ProgressBar extends ProgressBarBase {}
