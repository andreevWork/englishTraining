import * as React from "react";
import { inject, observer } from 'mobx-react/index';
import { SubtitlesIcon } from 'common/Icons/Subtitles/Subtitles';
import { RepeatSubtitlesIcon } from 'common/Icons/RepeatSubtitles/RepeatSubtitles';
import { RepeatFiveSecIcon } from 'common/Icons/RepeatFiveSec/RepeatFiveSec';
import { ExitSubtitles } from 'common/Icons/ExitSubtitles/ExitSubtitles';
import s from "./MiddleBottomControls.sass";


@inject('store')
@observer
export class MiddleBottomControls extends React.Component {
  
  renderPlayerMode() {
    return this.props.store.subtitles.hasActiveSub() && <div onClick={this.props.store.startGame} >
      <SubtitlesIcon />
    </div>;
  }
  
  renderGameMod() {
    return <div className={s.container}>
      <RepeatFiveSecIcon onClick={this.props.store.leftFiveSec} />
      
      <RepeatSubtitlesIcon onClick={this.props.store.repeatCurrentSubs} />
      
      <ExitSubtitles onClick={this.props.store.continueWatch} />
    </div>;
  }
  
  render() {
    return this.props.store.isGameMod ? this.renderGameMod() : this.renderPlayerMode();
  }
}
