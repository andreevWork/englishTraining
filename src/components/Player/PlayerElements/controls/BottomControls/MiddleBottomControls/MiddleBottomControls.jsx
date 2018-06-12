import * as React from "react";
import { inject, observer } from 'mobx-react/index';
import { SubtitlesIcon } from 'common/Icons/Subtitles/Subtitles';
import { RepeatSubtitlesIcon } from 'common/Icons/RepeatSubtitles/RepeatSubtitles';
import { RepeatFiveSecIcon } from 'common/Icons/RepeatFiveSec/RepeatFiveSec';
import { ExitSubtitles } from 'common/Icons/ExitSubtitles/ExitSubtitles';
import s from "./MiddleBottomControls.sass";
import { WithKey } from 'common/WithKey/WithKey';


@inject('store')
@observer
export class MiddleBottomControls extends React.Component {
  
  renderPlayerMode() {
    return this.props.store.subtitles.hasActiveSub() && <WithKey name="Enter" action={this.props.store.startGame}>
      <SubtitlesIcon />
    </WithKey>;
  }
  
  renderGameMod() {
    return <div className={s.container}>
      <WithKey name="◄" action={this.props.store.leftFiveSec}>
        <RepeatFiveSecIcon />
      </WithKey>
  
      <WithKey name="R" action={this.props.store.repeatCurrentSubs}>
        <RepeatSubtitlesIcon />
      </WithKey>
  
      <WithKey name="Enter" action={this.props.store.continueWatch}>
        <ExitSubtitles />
      </WithKey>
    </div>;
  }
  
  render() {
    return this.props.store.isGameMod ? this.renderGameMod() : this.renderPlayerMode();
  }
}
