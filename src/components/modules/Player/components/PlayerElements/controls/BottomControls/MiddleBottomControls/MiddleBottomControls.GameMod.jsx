import * as React from "react";
import { inject, observer } from 'mobx-react/index';
import { RepeatSubtitlesIcon } from 'common/Icons/RepeatSubtitles/RepeatSubtitles';
import { RepeatFiveSecIcon } from 'common/Icons/RepeatFiveSec/RepeatFiveSec';
import { ExitSubtitles } from 'common/Icons/ExitSubtitles/ExitSubtitles';
import { WithKey } from 'common/WithKey/WithKey';
import { MiddleBottomControlsBase } from 'player/PlayerElements/controls/BottomControls/MiddleBottomControls/MiddleBottomControls';


@inject('store')
@observer
export class MiddleBottomControlsGameMod extends MiddleBottomControlsBase {
  renderLeftFive() {
    return <WithKey name="◄" action={this.props.store.leftFiveSec}>
      <RepeatFiveSecIcon />
    </WithKey>;
  }
  
  renderRepeat() {
    return <WithKey name="R" action={this.props.store.repeatCurrentSubs}>
      <RepeatSubtitlesIcon />
    </WithKey>;
  }
  
  renderContinue() {
    return <WithKey name="Enter" action={this.props.store.continueWatch}>
      <ExitSubtitles />
    </WithKey>;
  }
  
  renderContent() {
    return <React.Fragment>
      {this.renderLeftFive()}
      {this.renderRepeat()}
      {this.renderContinue()}
    </React.Fragment>;
  }
}
