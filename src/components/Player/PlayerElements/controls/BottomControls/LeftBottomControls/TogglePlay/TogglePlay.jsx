import * as React from "react";
import autobind from "autobind-decorator";
import {observer, inject} from "mobx-react";
import { PlayIcon } from 'common/Icons/Play/Play';
import { PauseIcon } from 'common/Icons/Pause/Pause';
import { WithKey } from 'common/WithKey/WithKey';

export class TogglePlayBase extends React.Component {
  
  /**
   * @abstract
   */
  getIsDisabled() {}
  
  render() {
    const { player } = this.props.store;
  
    return <WithKey
      name="Space"
      disabled={this.getIsDisabled()}
      action={player.tooglePlay}
    >
      {player.isPaused ? <PlayIcon /> : <PauseIcon />}
    </WithKey>;
  }
}

@inject('store')
@observer
export class TogglePlay extends TogglePlayBase {
  getIsDisabled() {
    return false;
  }
}
