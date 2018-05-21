import React from 'react';
import s from "./PlayerElements.sass";
import cn from 'classnames';
import {observer, inject} from "mobx-react";
import { ProgressBar } from './controls/ProgressBar/ProgressBar';
import { BottomControls } from './controls/BottomControls/BottomControls';
import { Spinner } from 'common/Spinner/Spinner';
import { GameOrPlayer } from 'player/GameOrPlayer/GameOrPlayer';
import { ProgressBarGameMod } from 'player/PlayerElements/controls/ProgressBar/ProgressBar.GameMod';

@inject('store')
@observer
export class PlayerElements extends React.Component {
    
    renderElements() {
      const className = cn(!this.props.store.isGameMod && s.shadow);
      
        return <div className={className}>
          <GameOrPlayer playerEl={ProgressBar} gameEl={ProgressBarGameMod} />
          <BottomControls />
        </div>;
    }
    
    render() {
        return this.props.store.player.isReady ? this.renderElements() : <Spinner />;
    }
}
