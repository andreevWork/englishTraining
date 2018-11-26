import React from 'react';
import { ThumbWrap } from 'common/Thumb/elems/Wrap/ThumbWrap';
import { ThumbInfo } from 'common/Thumb/elems/Info/ThumbInfo';

import s from './EpisodeThumb.sass';

export class EpisodeThumb extends React.PureComponent {
  render() {
    return <ThumbWrap {...this.props} href={`episode/${this.props.id}/`}>
      <div className={s.episodeInfo}>
        Season {this.props.season} - Episode {this.props.episode}
      </div>
      <ThumbInfo {...this.props} />
    </ThumbWrap>;
  }
}
