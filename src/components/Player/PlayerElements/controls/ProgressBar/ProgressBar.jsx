import * as React from "react";

import autobind from 'autobind-decorator';
import s from './ProgressBar.sass';
import {observer, inject} from "mobx-react";
import {DateService} from "services/DateService/DateService";

export class ProgressBarBase extends React.Component {
    
    progressWrapRef = React.createRef();
    
    getStartTime() {
      return 0;
    }
    
    getEndTime() {
      return this.props.player.duration;
    }
    
    getCurrentTime() {
      return this.props.player.currentTime;
    }
    
    getCurrentDuration() {
      return this.getEndTime() - this.getStartTime();
    }
    
    @autobind
    onClick(e) {
        const el = e.currentTarget;
        const {left} = el.getBoundingClientRect();
        const pos = (e.pageX  - left) / el.offsetWidth;
        const time = this.getStartTime() + pos * this.getCurrentDuration();
        
        this.props.player.setCurrentTime(time);
        this.props.player.play();
    }
  
    getWidth() {
        if (!this.progressWrapRef.current) {
            return '';
        }
        
        const passedTime = this.getCurrentTime() - this.getStartTime();
        
        return (passedTime / this.getCurrentDuration() * this.progressWrapRef.current.offsetWidth) + 'px';
    }

    render() {
        // Формат времени счиатем по общей длительности видео, чтобы не прыгало когда смотришь часть видео
        const timeFormat = DateService.getTimeFormatFromS(this.props.player.duration);

        const currentTime = DateService.getFormattedTimeFromS(this.getCurrentTime(), timeFormat);
        const endTime = DateService.getFormattedTimeFromS(this.getEndTime(), timeFormat);

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
                {endTime}
            </div>
        </div>;
    }
}

@inject('player')
@observer
export class ProgressBar extends ProgressBarBase {}
