import React from 'react';
import { EpisodesLoaderContainer } from 'modules/LoaderContainer/Episodes/LoaderContainer.Episodes';
import autobind from 'autobind-decorator';
import { EpisodeThumb } from 'common/Thumb/EpisodeThumb/EpisodeThumb';
import { SerialsLoaderContainer } from 'modules/LoaderContainer/Serials/LoaderContainer.Serials';

export class Serial extends React.PureComponent {
  
  @autobind
  renderEpisodes({ items }) {
    return items.values().map(episode => <EpisodeThumb key={episode.id} {...episode} />);
  }
  
  render() {
    return <SerialsLoaderContainer>
      <EpisodesLoaderContainer>
        {this.renderEpisodes}
      </EpisodesLoaderContainer>
    </SerialsLoaderContainer>;
  }
}
