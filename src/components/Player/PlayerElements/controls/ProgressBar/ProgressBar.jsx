import * as React from "react";

import autobind from 'autobind-decorator';
import s from './ProgressBar.sass';
import {observer, inject} from "mobx-react";
import {DateService} from "services/DateService/DateService";

@inject('player')
@observer
export class ProgressBar extends React.Component {
    
    progressWrapRef = React.createRef();
    
    @autobind
    onClick(e) {
        const el = e.currentTarget;
        const {left} = el.getBoundingClientRect();
        const pos = (e.pageX  - left) / el.offsetWidth;
        
        this.props.player.setCurrentTime(pos * this.props.player.duration);
    }
  
    getWidth() {
        if (!this.progressWrapRef.current) {
            return '';
        }
        
        const {player} = this.props;
        return (player.currentTime / player.duration * this.progressWrapRef.current.offsetWidth) + 'px';
    }

    render() {
        const {player} = this.props;

        const timeFormat = DateService.getTimeFormatFromS(player.duration);

        const currentTime = DateService.getFormattedTimeFromS(player.currentTime, timeFormat);
        const duration = DateService.getFormattedTimeFromS(player.duration, timeFormat);

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
