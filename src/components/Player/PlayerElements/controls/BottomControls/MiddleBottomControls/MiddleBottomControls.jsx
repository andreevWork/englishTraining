import * as React from "react";
import { inject, observer } from 'mobx-react/index';
import { SubtitlesIcon } from 'common/Icons/Subtitles/Subtitles';
import { RepeatSubtitlesIcon } from 'common/Icons/RepeatSubtitles/RepeatSubtitles';
import { RepeatFiveSecIcon } from 'common/Icons/RepeatFiveSec/RepeatFiveSec';
import { Button } from 'common/Button/Button';

@inject('store')
@observer
export class MiddleBottomControls extends React.Component {
  
  renderPlayerMode() {
    return this.props.store.subtitles.hasActiveSub() && <div onClick={this.props.store.startGame} >
      <SubtitlesIcon />
    </div>;
  }
  
  renderGameMod() {
    return <React.Fragment>
      <div onClick={this.props.store.repeatCurrentSubs}>
        <RepeatSubtitlesIcon />
      </div>
      <div onClick={this.props.store.leftFiveSec}>
        <RepeatFiveSecIcon />
      </div>
      <Button onClick={this.props.store.continueWatch}>
        Продолжить
      </Button>
    </React.Fragment>;
  }
  
  render() {
    return this.props.store.isGameMod ? this.renderGameMod() : this.renderPlayerMode();
  }
}
