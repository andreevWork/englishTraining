import * as React from "react";
import { inject, observer } from 'mobx-react/index';
import { SubtitlesIcon } from 'common/Icons/Subtitles/Subtitles';

@inject('store')
@observer
export class MiddleBottomControls extends React.Component {
  render() {
    return this.props.store.subtitles.hasActiveSub() && <div onClick={this.props.store.startGame} >
      <SubtitlesIcon />
    </div>;
  }
}
