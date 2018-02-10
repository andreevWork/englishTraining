import * as React from "react";

import autobind from 'autobind-decorator';
import s from './ProgressBar.sass';
import {observer, inject} from "mobx-react";
import {DateService} from "services/DateService/DateService";

@inject('player')
@observer
export class ProgressBar extends React.Component {
    @autobind
    onClick(e) {
        const el = e.target;
        const pos = (e.pageX  - el.offsetLeft) / el.offsetWidth;

        this.props.player.setCurrentTime(pos * this.props.player.duration);
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
            <progress
                onClick={this.onClick}
                className={s.progress}
                value={player.currentTime}
                max={player.duration}
            />
            <div className={s.time}>
                {duration}
            </div>
        </div>;
    }
}
