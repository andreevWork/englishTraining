import * as React from "react";
import s from "./Player.sass";
import {inject, observer} from "mobx-react";
import autobind from 'autobind-decorator';
import { PlayerElements } from './PlayerElements/PlayerElements';
import { DiContainer } from 'DiContainer';
import { createAndRunPlayerReactions } from 'reactions/player';
import { BaseReaction } from 'reactions/BaseReaction';
import { createAndRunSubtitlesReactions } from 'reactions/subtitles';
import { GameElements } from './GameElements/GameElements';
import { createAndRunGameReactions } from 'reactions/game';

@inject('player', 'subtitles')
export class Player extends React.PureComponent {
    _videoEl;
    _reactions;

    componentDidMount() {
      DiContainer.register('videoEl', this._videoEl);
      
      this._reactions = createAndRunPlayerReactions();
      createAndRunSubtitlesReactions();
      createAndRunGameReactions();
    
      this.props.subtitles.load(this.props.player.subsSrc);
    }

    componentWillUnmount() {
      DiContainer.remove('_videoEl');
  
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
  
                <div className={s.elements}>
                  <Elements />
                </div>
            </figure>
        </div>;
    }
}

@inject('store')
@observer
class Elements extends React.Component {
  render() {
    return this.props.store.isGameMod ? <GameElements /> : <PlayerElements />;
  }
}
