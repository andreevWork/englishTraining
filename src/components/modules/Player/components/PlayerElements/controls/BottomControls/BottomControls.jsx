import * as React from "react";
import {LeftBottomControls} from "./LeftBottomControls/LeftBottomControls";
import {RightBottomControls} from "./RightBottomControls/RightBottomControls";
import s from "./BottomControls.sass";
import { MiddleBottomControlsGameMod } from 'player/PlayerElements/controls/BottomControls/MiddleBottomControls/MiddleBottomControls.GameMod';
import { inject, observer } from 'mobx-react';
import { MiddleBottomControls } from 'modules/Player/components/PlayerElements/controls/BottomControls/MiddleBottomControls/MiddleBottomControls';
import { GameOrPlayer } from 'modules/Player/components/GameOrPlayer/GameOrPlayer';

@inject('player')
@observer
export class BottomControls extends React.Component {
    render() {
        return <div className={s.bottomControls}>
          <LeftBottomControls />
  
          {this.props.player.isFullScreen &&
            <GameOrPlayer gameEl={MiddleBottomControlsGameMod} playerEl={MiddleBottomControls}  />}
          
          <RightBottomControls />
        </div>;
    }
}
