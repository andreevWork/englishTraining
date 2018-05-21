import * as React from "react";
import { TogglePlay } from 'player/PlayerElements/controls/BottomControls/LeftBottomControls/TogglePlay/TogglePlay';
import { TogglePlayGameMod } from 'player/PlayerElements/controls/BottomControls/LeftBottomControls/TogglePlay/TogglePlay.GameMod';
import { GameOrPlayer } from 'player/GameOrPlayer/GameOrPlayer';

export class LeftBottomControls extends React.Component {
  render() {
    return <div>
      <GameOrPlayer playerEl={TogglePlay} gameEl={TogglePlayGameMod} />
    </div>;
  }
}
