import React from 'react';
import s from "./PlayerElements.sass";
import {observer, inject} from "mobx-react";
import { ProgressBar } from './controls/ProgressBar/ProgressBar';
import { BottomControls } from './controls/BottomControls/BottomControls';
import { Spinner } from 'common/Spinner/Spinner';

@inject('player', 'subtitles')
@observer
export class PlayerElements extends React.Component {
    
    renderElements() {
        return <div className={s.shadow}>
          <ProgressBar />
          <BottomControls />
        </div>;
    }
    
    render() {
        return this.props.player.isReady ? this.renderElements() : <Spinner />;
    }
}
