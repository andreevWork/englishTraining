import * as React from "react";
import {observer, inject} from "mobx-react";
import { TogglePlayBase } from 'player/PlayerElements/controls/BottomControls/LeftBottomControls/TogglePlay/TogglePlay';
import autobind from 'autobind-decorator';

@inject('store')
@observer
export class TogglePlayGameMod extends TogglePlayBase {
  @autobind
  onClick() {
    console.log(423);
    
    super.onClick();
  }
}

