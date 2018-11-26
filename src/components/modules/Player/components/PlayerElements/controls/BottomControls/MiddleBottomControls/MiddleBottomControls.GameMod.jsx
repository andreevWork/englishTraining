import * as React from "react";
import { inject, observer } from 'mobx-react/index';
import { RepeatSubtitlesIcon } from 'common/Icons/RepeatSubtitles/RepeatSubtitles';
import { MiddleBottomControlsBase } from 'player/PlayerElements/controls/BottomControls/MiddleBottomControls/MiddleBottomControls';


@inject('store')
@observer
export class MiddleBottomControlsGameMod extends MiddleBottomControlsBase {
  renderRepeat() {
    return <RepeatSubtitlesIcon onClick={this.props.store.repeatCurrentSubs} />;
  }
  
  renderContent() {
    return <React.Fragment>
      {this.renderRepeat()}
    </React.Fragment>;
  }
}
