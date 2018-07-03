import * as React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import s from "./Player.sass";
import {inject, observer} from "mobx-react";
import autobind from 'autobind-decorator';
import { PlayerElements } from './PlayerElements/PlayerElements';
import { DiContainer } from 'DiContainer';
import { GameElements } from './GameElements/GameElements';

@inject('store', 'player', 'subtitles')
@observer
export class Player extends React.Component {
  
  static propTypes  = {
    videoSrc: PropTypes.string,
    subtitleSrc: PropTypes.string
  };
  
    _videoEl;

    componentDidMount() {
      this.props.store.reset();
      
      DiContainer.register('videoEl', this._videoEl);
  
      this.props.subtitles.load(this.props.subtitleSrc);
    }

    componentWillUnmount() {
      DiContainer.remove('_videoEl');
    }

    @autobind
    onLoadedMetadata() {
      const {duration} = this._videoEl;
  
      this.props.player.setIsReady(true);
      this.props.player.setDuration(duration);
    }

    @autobind
    onTimeUpdate() {
      const {currentTime} = this._videoEl;

      this.props.player.setCurrentTime(currentTime);
    }
    
    @autobind
    onClick(e) {
      if (e.target.classList.contains(s.elements)) {
        this.props.player.tooglePlay();
      }
    }

    render() {
        return <div className={s.container}>
            <figure className={s.figure}>
                <video
                    autoPlay={true}
                    ref={el => this._videoEl = el}
                    onLoadedMetadata={this.onLoadedMetadata}
                    onTimeUpdate={this.onTimeUpdate}
                    preload="metadata"
                    className={s.video}
                >
                    <source
                        src={this.props.videoSrc}
                        type="video/mp4"
                    />
                </video>
  
                <div onClick={this.onClick} className={cn(s.elements, this.props.player.isFullScreen && s.fullScreen)}>
                  <GameElements />
                  <PlayerElements />
                </div>
            </figure>
        </div>;
    }
}

