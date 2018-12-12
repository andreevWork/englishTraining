import * as React from "react";
import autobind from "autobind-decorator";
import { inject, observer } from 'mobx-react/index';
import { SubtitlesIcon } from 'common/Icons/Subtitles/Subtitles';
import s from "./MiddleBottomControls.sass";
import { SaveIcon } from 'common/Icons/Save/Save';
import { SavedDataIcon } from 'common/Icons/SavedData/SavedData';

export class MiddleBottomControlsBase extends React.Component {
  
  @autobind
  save() {
    this.props.data.addMoment({
      serial_id: this.props.serials.currentId,
      episode_id: this.props.episodes.currentId,
      sub_id: this.props.store.subtitles.index
    });
  }
  
  renderSave() {
    return this.props.store.subtitles.hasActiveSub() && <SaveIcon onClick={this.save} />;
  }
  
  renderSavedMoments() {
    return this.props.store.data.hasSavedMoments({
        serial_id: this.props.serials.currentId,
        episode_id: this.props.episodes.currentId
      }) &&
      <SavedDataIcon onClick={this.props.store.openSavedMoments} />;
  }
  
  renderContent() {
    return null;
  }
  
  render() {
    return <div className={s.container}>
      <div className={s.moments}>
        {this.renderSavedMoments()}
        {this.renderSave()}
      </div>
      {this.renderContent()}
    </div>;
  }
}

@inject('store', 'data', 'episodes', 'serials')
@observer
export class MiddleBottomControls extends MiddleBottomControlsBase {
  renderStartGame() {
    return this.props.store.subtitles.hasActiveSub() && <SubtitlesIcon onClick={this.props.store.startGame} />;
  }
  
  renderContent() {
    return this.renderStartGame();
  }
}
