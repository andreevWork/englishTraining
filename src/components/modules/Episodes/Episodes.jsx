import React from 'react';
import { Thumb } from 'common/Thumb/Thumb';
import { EpisodesLoaderContainer } from 'modules/LoaderContainer/Episodes/LoaderContainer.Episodes';
import autobind from 'autobind-decorator';

export class Episodes extends React.PureComponent {
  @autobind
  renderEpisodes({ items, savedMoments }) {
    return items.values().map(episode => <Thumb
      key={episode.id}
      {...episode}
      momentsCount={savedMoments.get(episode.id) && savedMoments.get(episode.id).length}
    />);
  }
  
  render() {
    return <EpisodesLoaderContainer>
      {this.renderEpisodes}
    </EpisodesLoaderContainer>;
  }
}

