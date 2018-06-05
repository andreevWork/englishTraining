import * as React from "react";
import s from "./Player.sass";
import {inject} from "mobx-react";
import autobind from 'autobind-decorator';
import { PlayerElements } from './PlayerElements/PlayerElements';
import { DiContainer } from 'DiContainer';
import { createAndRunPlayerReactions } from 'reactions/player';
import { BaseReaction } from 'reactions/BaseReaction';
import { createAndRunSubtitlesReactions } from 'reactions/subtitles';
import { GameElements } from './GameElements/GameElements';
import { createAndRunGameReactions } from 'reactions/game';
import { HotKeysService } from 'services/HotKeysService/HotKeysService';

@inject('player', 'subtitles')
export class Player extends React.PureComponent {
    _videoEl;
    _reactions;

    componentDidMount() {
      DiContainer.register('videoEl', this._videoEl);
      
      this._reactions = [
        ...createAndRunPlayerReactions(),
        ...createAndRunSubtitlesReactions(),
        ...createAndRunGameReactions()
      ];
  
      this.hotKeyService = new HotKeysService();
      
      this.hotKeyService.run();
    
      this.props.subtitles.load(this.props.player.subsSrc);
    }

    componentWillUnmount() {
      DiContainer.remove('_videoEl');
      
      this.hotKeyService.destroy();
  
      BaseReaction.destroyReactions(this._reactions);
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
  
                <div onClick={this.onClick} className={s.elements}>
                  <GameElements />
                  <PlayerElements />
                </div>
            </figure>
        </div>;
    }
}

