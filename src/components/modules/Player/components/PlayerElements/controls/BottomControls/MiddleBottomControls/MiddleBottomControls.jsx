import * as React from "react";
import autobind from "autobind-decorator";
import { inject, observer } from 'mobx-react/index';
import { SubtitlesIcon } from 'common/Icons/Subtitles/Subtitles';
import s from "./MiddleBottomControls.sass";
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
    return this.props.store.subtitles.hasActiveSub() && <SaveIcon onClick={this.save} />;
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
    return this.props.store.subtitles.hasActiveSub() && <SubtitlesIcon onClick={this.props.store.startGame} />;
  }
  
  renderContent() {
    return this.renderStartGame();
  }
}
