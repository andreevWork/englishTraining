import React from 'react';
import autobind from 'autobind-decorator';
import {observer, inject} from "mobx-react";
import s from './SavedMoments.sass';
import { Button } from 'common/Button/Button';
import { LeftArrow } from 'common/Icons/LeftArrow/LeftArrow';
import { RightArrow } from 'common/Icons/RightArrow/RightArrow';

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
    });
  }
  
  @autobind
  left() {
    this.setState({
      shouldShowText: false
    });
    
    this.props.data.leftCurrentIndexSavedMoment({
      serial_id: this.props.serials.currentId,
      episode_id: this.props.episodes.currentId
    });
  }
  
  @autobind
  right() {
    this.setState({
      shouldShowText: false
    });
    
    this.props.data.rightCurrentIndexSavedMoment({
      serial_id: this.props.serials.currentId,
      episode_id: this.props.episodes.currentId
    });
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
    const count = this.props.data.getMomentsCount({
      serial_id: this.props.serials.currentId,
      episode_id: this.props.episodes.currentId
    });
    const sub = this.props.subtitles.getSub(this.getSubId());
    
    return <div className={s.container}>
      {count > 1 && <React.Fragment>
        <LeftArrow onClick={this.left} className={s.left} />
        <RightArrow onClick={this.right} className={s.right} />
        <div className={s.counter}>
          {this.props.data.currentIndexSavedMoment + 1} of {count}
        </div>
      </React.Fragment>}
      
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
