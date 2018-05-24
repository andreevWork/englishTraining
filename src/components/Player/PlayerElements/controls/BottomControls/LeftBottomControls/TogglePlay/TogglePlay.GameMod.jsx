import * as React from "react";
import {observer, inject} from "mobx-react";
import { TogglePlayBase } from 'player/PlayerElements/controls/BottomControls/LeftBottomControls/TogglePlay/TogglePlay';
import autobind from 'autobind-decorator';

@inject('store')
@observer
export class TogglePlayGameMod extends TogglePlayBase {
  getIsDisabled() {
    const { player, subtitles } = this.props.store;
    
    return player.currentTime >= subtitles.getSub(subtitles.endIndex).endTime;
  }
}

