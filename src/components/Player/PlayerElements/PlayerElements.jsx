import React from 'react';
import {observer, inject} from "mobx-react";
import s from './PlayerElements.sass';
import { Spinner } from './Spinner/Spinner';
import { ProgressBar } from './controls/ProgressBar/ProgressBar';
import { BottomControls } from './controls/BottomControls/BottomControls';

@inject('player')
@observer
export class PlayerElements extends React.Component {
    render() {
        return <React.Fragment>
          {this.props.player.isReady && <div className={s.controls}>
            <ProgressBar />
            <BottomControls />
          </div>}
  
          {!this.props.player.isReady && <Spinner />}
        </React.Fragment>;
    }
}
