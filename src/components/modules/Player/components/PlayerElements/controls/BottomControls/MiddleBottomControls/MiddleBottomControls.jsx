import * as React from "react";
import autobind from "autobind-decorator";
import { inject, observer } from 'mobx-react/index';
import { SubtitlesIcon } from 'common/Icons/Subtitles/Subtitles';
import s from "./MiddleBottomControls.sass";
import { WithKey } from 'common/WithKey/WithKey';
import { SaveIcon } from 'common/Icons/Save/Save';

export class MiddleBottomControlsBase extends React.Component {
  
  @autobind
  save() {
    this.props.episodes.saveMoment({
      episode_id: this.props.episodes.currentId,
      sub_id: this.props.store.subtitles.index
    });
  }
  
  renderSave() {
    return this.props.store.subtitles.hasActiveSub() && <WithKey name="S" action={this.save}>
      <SaveIcon />
    </WithKey>;
  }
  
  renderContent() {
    return null;
  }
  
  render() {
    return <div className={s.container}>
      {this.renderSave()}
      {this.renderContent()}
    </div>;
  }
}

@inject('store', 'episodes')
@observer
export class MiddleBottomControls extends MiddleBottomControlsBase {
  renderStartGame() {
    return this.props.store.subtitles.hasActiveSub() && <WithKey name="Enter" action={this.props.store.startGame}>
      <SubtitlesIcon />
    </WithKey>;
  }
  
  renderContent() {
    return this.renderStartGame();
  }
}
