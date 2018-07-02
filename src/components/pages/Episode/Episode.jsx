import React from 'react';
import autobind from 'autobind-decorator';
import {inject} from "mobx-react";
import { FullPlayer } from '../../modules/Player';
import { SerialsLoaderContainer } from 'common/LoaderContainer/Serials/LoaderContainer.Serials';

@inject('common')
export class Episode extends React.Component {
  
  @autobind
  renderPlayer({ items }) {
    const episode = items.get(this.props.common.currentEpisode.id);
  
    return <div>
      <FullPlayer
        videoSrc={episode.videoSrc}
        subtitleSrc={episode.subtitleSrc}
      />
    </div>;
  }
  
  render() {
    return <SerialsLoaderContainer>
      {this.renderPlayer}
    </SerialsLoaderContainer>;
  }
}
