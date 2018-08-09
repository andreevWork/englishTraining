import * as React from "react";
import { inject, observer } from 'mobx-react/index';
import { RepeatSubtitlesIcon } from 'common/Icons/RepeatSubtitles/RepeatSubtitles';
import { WithKey } from 'common/WithKey/WithKey';
import { MiddleBottomControlsBase } from 'player/PlayerElements/controls/BottomControls/MiddleBottomControls/MiddleBottomControls';


@inject('store')
@observer
export class MiddleBottomControlsGameMod extends MiddleBottomControlsBase {
  renderRepeat() {
    return <WithKey name="R" action={this.props.store.repeatCurrentSubs}>
      <RepeatSubtitlesIcon />
    </WithKey>;
  }
  
  renderContent() {
    return <React.Fragment>
      {this.renderRepeat()}
    </React.Fragment>;
  }
}
