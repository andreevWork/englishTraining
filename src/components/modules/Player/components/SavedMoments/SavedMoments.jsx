import React from 'react';
import autobind from 'autobind-decorator';
import {observer, inject} from "mobx-react";
import s from './SavedMoments.sass';
import { Button } from 'common/Button/Button';

@inject('data', 'episodes', 'serials', 'subtitles', 'store')
@observer
export default class SavedMoments extends React.Component {
  
  state = {
    shouldShowText: false
  };
  
  @autobind
  showText() {
    this.setState({
      shouldShowText: true
    })
  }
  
  @autobind
  playSub() {
    this.props.store.openSavedMomentToPlay(this.getSubId());
  }
  
  getSubId() {
    return this.props.data.getCurrentSavedMoment({
      serial_id: this.props.serials.currentId,
      episode_id: this.props.episodes.currentId
    });
  }
  
  render() {
    const sub = this.props.subtitles.getSub(this.getSubId());
    
    return <div className={s.container}>
      {this.state.shouldShowText ? <div className={s.text}>
        {sub.text}
      </div> : <Button onClick={this.showText}>
        Show text of subtitle
      </Button>}
      
      <Button className={s.button} onClick={this.playSub}>
        Play subtitle
      </Button>
    </div>;
  }
}
