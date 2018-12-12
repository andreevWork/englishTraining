import React from 'react';
import { FullPlayer } from '../../modules/Player';
import autobind from 'autobind-decorator';
import { EpisodesLoaderContainer } from 'modules/LoaderContainer/Episodes/LoaderContainer.Episodes';
import { SerialsLoaderContainer } from 'modules/LoaderContainer/Serials/LoaderContainer.Serials';
import { FullPlayerLazy } from 'modules/Player/indexLazy';

export class Episode extends React.Component {
  @autobind
  renderPlayer(episodes) {
    const episode = episodes.getCurrentEpisode();
  
    return <FullPlayerLazy
      key={episode.id}
      videoSrc={episode.videoSrc}
      subtitleSrc={episode.subtitleSrc}
    />;
  }
  
  render() {
    return <SerialsLoaderContainer>
      <EpisodesLoaderContainer>
        {this.renderPlayer}
      </EpisodesLoaderContainer>
    </SerialsLoaderContainer>;
  }
}
