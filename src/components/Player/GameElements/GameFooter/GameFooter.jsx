import React from 'react';
import {observer, inject} from "mobx-react";
import s from './GameFooter.sass';
import { Button } from 'common/Button/Button';
import { TogglePlay } from 'player/CommonElements/TogglePlay/TogglePlay';
import { RepeatSubtitlesIcon } from 'common/Icons/RepeatSubtitles/RepeatSubtitles';
import { RepeatFiveSecIcon } from 'common/Icons/RepeatFiveSec/RepeatFiveSec';

@inject('store')
@observer
export class GameFooter extends React.Component {
    
    render() {
        return <div className={s.footer}>
            <div onClick={this.props.store.repeatCurrentSubs}>
              <RepeatSubtitlesIcon />
            </div>
            <div onClick={this.props.store.leftFiveSec}>
              <RepeatFiveSecIcon />
            </div>
            <TogglePlay />
            <Button onClick={this.props.store.resetGameType}>
                выбор игры
            </Button>
            <Button onClick={this.props.store.continueWatch}>
                Продолжить
            </Button>
        </div>;
    }
}
