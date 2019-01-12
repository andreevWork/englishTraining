import * as React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import s from "./Player.sass";
import {inject, observer} from "mobx-react";
import autobind from 'autobind-decorator';
import { PlayerElements } from './PlayerElements/PlayerElements';
import { DiContainer } from 'DiContainer';
import { BottomBarLazy } from 'modules/Player/components/BottomBar/BottomBarLazy';
import { PlayerPopup } from 'modules/Player/components/PlayerPopup/PlayerPopup';

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
  
      this.props.player.play();
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
  
      if (!this.props.player.isPaused && !this.props.store.isGameMod()) {
        this.isActiveTimer = setTimeout(() => {
          this.props.player.setIsActive(false);
        }, 3000);
      }
    }

    render() {
        return <div className={cn(this.props.className, s.container, 'fullscreen-container', this.props.player.isFullScreen && s.fullScreen)}>
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
                  className={cn(s.elements)}
                >
                  <PlayerPopup />
                  
                  <div className="playerElements">
                    <PlayerElements />
                  </div>
                </div>
            </figure>
  
            <BottomBarLazy />
        </div>;
    }
}

