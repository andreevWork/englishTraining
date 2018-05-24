import * as React from "react";
import autobind from "autobind-decorator";
import {observer, inject} from "mobx-react";
import { PlayIcon } from 'common/Icons/Play/Play';
import { PauseIcon } from 'common/Icons/Pause/Pause';

export class TogglePlayBase extends React.Component {
  @autobind
  onClick() {
    const { player } = this.props.store;
  
    player.tooglePlay();
  }
  
  getIsDisabled() {}
  
  render() {
    const { player } = this.props.store;
    
    const props = {
      onClick: this.onClick,
      disabled: this.getIsDisabled()
    };
  
    return player.isPaused ? <PlayIcon {...props} /> : <PauseIcon {...props} />;
  }
}

@inject('store')
@observer
export class TogglePlay extends TogglePlayBase {}
