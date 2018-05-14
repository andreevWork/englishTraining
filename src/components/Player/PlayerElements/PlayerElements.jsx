import React from 'react';
import {observer, inject} from "mobx-react";
import { ProgressBar } from './controls/ProgressBar/ProgressBar';
import { BottomControls } from './controls/BottomControls/BottomControls';
import { Spinner } from 'common/Spinner/Spinner';

@inject('player', 'subtitles')
@observer
export class PlayerElements extends React.Component {
    
    renderElements() {
        return <React.Fragment>
          <ProgressBar />
          <BottomControls />
        </React.Fragment>;
    }
    
    render() {
        return this.props.player.isReady ? this.renderElements() : <Spinner />;
    }
}
