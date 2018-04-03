import * as React from "react";
import s from "./Player.sass";
import {inject} from "mobx-react";
import autobind from 'autobind-decorator';
import { PlayerElements } from './PlayerElements/PlayerElements';
import { DiContainer } from 'DiContainer';
import { createAndRunPlayerReactions } from 'reactions/player';
import { BaseReaction } from 'reactions/BaseReaction';

@inject('player')
export class Player extends React.PureComponent {
    videoEl;
    _reactions;

    componentDidMount() {
      DiContainer.register('videoEl', this.videoEl);
      
      this._reactions = createAndRunPlayerReactions();
    }

    componentWillUnmount() {
      DiContainer.remove('videoEl');
  
      BaseReaction.destroyReactions(this._reactions);
    }

    @autobind
    onLoadedMetadata() {
      const {duration} = this.videoEl;
  
      this.props.player.setIsReady(true);
      this.props.player.setDuration(duration);
      
//      requestAnimationFrame(() => {
//        this.props.player.tooglePlay();
//      })
    }

    @autobind
    onTimeUpdate() {
      const {currentTime} = this.videoEl;

      this.props.player.setCurrentTime(currentTime);
    }

    render() {
        return <div className={s.container}>
            <figure className={s.figure}>
                <video
                    ref={el => this.videoEl = el}
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
                
                <PlayerElements />
            </figure>
        </div>;
    }
}
