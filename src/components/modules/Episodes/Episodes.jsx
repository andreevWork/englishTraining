import React from 'react';
import { Thumb } from 'common/Thumb/Thumb';
import { EpisodesLoaderContainer } from 'common/LoaderContainer/Episodes/LoaderContainer.Episodes';
import autobind from 'autobind-decorator';

export class Episodes extends React.PureComponent {
  @autobind
  renderEpisodes({ items }) {
    return items.values().map(episode => <Thumb key={episode.id} {...episode} />);
  }
  
  render() {
    return <EpisodesLoaderContainer>
      {this.renderEpisodes}
    </EpisodesLoaderContainer>;
  }
}

