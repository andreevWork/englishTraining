import React from 'react';
import { FullPlayer } from '../../modules/Player';
import { LeftMenu } from './LeftMenu/LeftMenu';
import autobind from 'autobind-decorator';
import { EpisodesLoaderContainer } from 'common/LoaderContainer/Episodes/LoaderContainer.Episodes';

export class Episode extends React.Component {
  @autobind
  renderPlayer({ items, currentId }) {
    const episode = items.get(currentId);
  
    return <FullPlayer
      key={episode.id}
      videoSrc={episode.videoSrc}
      subtitleSrc={episode.subtitleSrc}
    />;
  }
  
  render() {
    return <React.Fragment>
      <EpisodesLoaderContainer>
        {this.renderPlayer}
      </EpisodesLoaderContainer>
      
      <LeftMenu />
    </React.Fragment>;
  }
}
