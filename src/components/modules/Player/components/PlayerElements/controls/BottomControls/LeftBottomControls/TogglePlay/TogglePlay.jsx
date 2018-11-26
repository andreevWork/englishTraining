import * as React from "react";
import {observer, inject} from "mobx-react";
import { PlayIcon } from 'common/Icons/Play/Play';
import { PauseIcon } from 'common/Icons/Pause/Pause';

export class TogglePlayBase extends React.Component {
  
  /**
   * @abstract
   */
  getIsDisabled() {}
  
  render() {
    const { player } = this.props.store;
  
    return player.isPaused ?
      <PlayIcon disabled={this.getIsDisabled()}
                onClick={player.tooglePlay} /> :
      <PauseIcon disabled={this.getIsDisabled()}
                 onClick={player.tooglePlay} />;
  }
}

@inject('store')
@observer
export class TogglePlay extends TogglePlayBase {
  getIsDisabled() {
    return false;
  }
}
