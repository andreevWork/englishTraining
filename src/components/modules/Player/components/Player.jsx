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

@inject('store', 'player', 'subtitles')
@observer
export class Player extends React.Component {
  
  static propTypes  = {
    videoSrc: PropTypes.string,
    autoPlay: PropTypes.string,
    className: PropTypes.string,
    subtitleSrc: PropTypes.string
  };
  
  static defaultProps = {
    autoPlay: true
  };
  
    _videoEl;
  
    componentWillMount() {
      const throttleMouseMove = throttle(1000, this.mouseMove.bind(this));
      
      this.mouseMoveThrottle = e => {
        e.persist();
        throttleMouseMove(e);
      }
    }

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
      if (e.target.classList.contains(s.elements)) {
        this.props.player.tooglePlay();
      }
    }
    
    mouseMove(e) {
      clearTimeout(this.mouseMoveTimer);
      
      this.props.player.setIsActive(true);
      
      if (!e.target.closest(".playerElements")) {
        this.mouseMoveTimer = setTimeout(() => {
          this.props.player.setIsActive(false);
        }, 2000);
      }
    }

    render() {
        return <div className={cn(this.props.className, s.container)}>
            <figure className={s.figure}>
                <video
                    autoPlay={this.props.autoPlay}
                    ref={el => this._videoEl = el}
                    onLoadedMetadata={this.onLoadedMetadata}
                    onTimeUpdate={this.onTimeUpdate}
                    preload="metadata"
                    className={s.video}
                >
                    <source
                        src={`${process.env.MEDIA_HOST}${this.props.videoSrc}`}
                        type="video/mp4"
                    />
                </video>
  
                <div
                  onMouseMove={this.props.store.isGameMod ? undefined : this.mouseMoveThrottle}
                  onClick={this.onClick}
                  className={cn(s.elements, this.props.player.isFullScreen && s.fullScreen)}
                >
                  <GameElements />
                  <div className="playerElements">
                    <PlayerElements />
                  </div>
                </div>
            </figure>
        </div>;
    }
}

