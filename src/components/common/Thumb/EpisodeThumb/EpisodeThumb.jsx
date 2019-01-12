import React from 'react';
import { ThumbWrap } from 'common/Thumb/elems/Wrap/ThumbWrap';

import s from './EpisodeThumb.sass';
import { CommonStore } from '../../../../store';
import { FullPlayerStore } from 'modules/Player/store';

export class EpisodeThumb extends React.PureComponent {
  render() {
    return <ThumbWrap className={s.wrap} onClick={() => {
      CommonStore.episodes.setCurrentId(this.props.id);
      setTimeout(() => {
        FullPlayerStore.player.setFullScreen(true);
      }, 1000)
    }} {...this.props}>
      <div className={s.episodeInfo}>
        Season {this.props.season} - Episode {this.props.episode}
        <div className={s.title}>
          {this.props.title}
        </div>
      </div>
    </ThumbWrap>;
  }
}
