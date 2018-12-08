import * as React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { throttle } from 'throttle-debounce';
import s from "./Player.sass";
import {inject, observer} from "mobx-react";
import autobind from 'autobind-decorator';
import { PlayerElements } from './PlayerElements/PlayerElements';
import { DiContainer } from 'DiContainer';
import { GameElements } from './GameElements/GameElements';
import { BottomBar } from 'modules/Player/components/BottomBar/BottomBar';

@inject('store', 'player', 'subtitles')
@observer
export class Player extends React.Component {
  
  static propTypes  = {
    videoSrc: PropTypes.string,
    className: PropTypes.string,
    subtitleSrc: PropTypes.string
  };
  
  static defaultProps = {
    autoPlay: true
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
      
      if (this.props.autoPlay) {
        this.props.player.play();
      } else {
        this.props.player.pause();
      }
    }

    @autobind
    onTimeUpdate() {
      const {currentTime} = this._videoEl;

      this.props.player.setCurrentTime(currentTime);
    }
    
    @autobind
    onClick(e) {
      if (this.props.player.isActive && e.target.classList.contains(s.elements)) {
        this.props.player.tooglePlay();
      }
  
      clearTimeout(this.isActiveTimer);
  
      if (!this.props.player.isActive) {
        this.props.player.setIsActive(true);
      }
  
      if (!this.props.player.isPaused && !this.props.store.isGameMod) {
        this.isActiveTimer = setTimeout(() => {
          this.props.player.setIsActive(false);
        }, 3000);
      }
    }

    render() {
        return <div className={cn(this.props.className, s.container, 'fullscreen-container')}>
            <figure className={s.figure}>
                <video
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
  
                <div
                  onClick={this.onClick}
                  className={cn(s.elements, this.props.player.isFullScreen && s.fullScreen)}
                >
                  <GameElements />
                  <div className="playerElements">
                    <PlayerElements />
                  </div>
                </div>
            </figure>
  
            <BottomBar />
        </div>;
    }
}

