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
  
  render() {
    const { player } = this.props.store;
  
    return <div onClick={this.onClick}>
      {player.isPaused ? <PlayIcon /> : <PauseIcon />}
    </div>;
  }
}

@inject('store')
@observer
export class TogglePlay extends TogglePlayBase {}
