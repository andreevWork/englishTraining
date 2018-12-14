import React from 'react';
import s from "./PlayerElements.sass";
import cn from 'classnames';
import {observer, inject} from "mobx-react";
import { BottomControls } from './controls/BottomControls/BottomControls';
import { Spinner } from 'common/Spinner/Spinner';
import { GameOrPlayer } from 'player/GameOrPlayer/GameOrPlayer';
import { ProgressBarPlayer } from 'player/PlayerElements/controls/ProgressBar/player/ProgressBar.player';
import { ProgressBarGameMod } from 'player/PlayerElements/controls/ProgressBar/gameMod/ProgressBar.GameMod';
import { ProgressBarMoments } from 'modules/Player/components/PlayerElements/controls/ProgressBar/moments/ProgressBar.moments';

@inject('store')
@observer
export class PlayerElements extends React.Component {
  renderElements() {
    const className = cn(
      !this.props.store.popupKey && s.elements,
      !this.props.store.popupKey && s.shadow,
      !this.props.store.player.isActive && !this.props.store.popupKey && s.hide
    );
    
      return <div className={className}>
        <GameOrPlayer
          playerEl={ProgressBarPlayer}
          momentsEl={ProgressBarMoments}
          gameEl={ProgressBarGameMod}
        />
  
        <GameOrPlayer
          playerEl={BottomControls}
          momentsEl={() => <div className={s.bottomStub} />}
        />
      </div>;
  }
  
  render() {
      return this.props.store.player.isReady ? this.renderElements() : <Spinner />;
  }
}
