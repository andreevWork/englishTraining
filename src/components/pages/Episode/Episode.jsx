import React from 'react';
import autobind from 'autobind-decorator';
import { FullPlayer } from '../../modules/Player';
import { EpisodesLoaderContainer } from 'common/LoaderContainer/Serials/LoaderContainer.Episodes';
import { LeftMenu } from './LeftMenu/LeftMenu';

export class Episode extends React.Component {
  
  @autobind
  renderPlayer({ items, currentId }) {
    const episode = items.get(currentId);
  
    return <div>
      <FullPlayer
        key={episode.id}
        videoSrc={episode.videoSrc}
        subtitleSrc={episode.subtitleSrc}
      />
      
      <div>
        {episode.title}
      </div>
  
      <LeftMenu episodes={items.values()} />
    </div>;
  }
  
  render() {
    return <EpisodesLoaderContainer>
      {this.renderPlayer}
    </EpisodesLoaderContainer>;
  }
}
