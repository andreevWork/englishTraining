import * as React from "react";
import {LeftBottomControls} from "./LeftBottomControls/LeftBottomControls";
import {RightBottomControls} from "./RightBottomControls/RightBottomControls";
import s from "./BottomControls.sass";
import { MiddleBottomControls } from 'player/PlayerElements/controls/BottomControls/MiddleBottomControls/MiddleBottomControls';
import { GameOrPlayer } from 'player/GameOrPlayer/GameOrPlayer';
import { MiddleBottomControlsGameMod } from 'player/PlayerElements/controls/BottomControls/MiddleBottomControls/MiddleBottomControls.GameMod';

export class BottomControls extends React.Component {
    render() {
        return <div className={s.bottomControls}>
          <LeftBottomControls />
  
          <GameOrPlayer gameEl={MiddleBottomControlsGameMod} playerEl={MiddleBottomControls}  />
          
          <RightBottomControls />
        </div>;
    }
}
