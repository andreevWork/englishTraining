import React from 'react';
import { Thumb } from 'common/Thumb/Thumb';
import s from './Index.sass';
import { EpisodesLoaderContainer } from 'common/LoaderContainer/Serials/LoaderContainer.Episodes';
import autobind from 'autobind-decorator';

export class Index extends React.Component {
  
  @autobind
  renderSerials({ items }) {
    return items.values().map(episode => <Thumb key={episode.id} {...episode} />);
  }
  
  render() {
    return <div className={s.index}>
      <EpisodesLoaderContainer>
        {this.renderSerials}
      </EpisodesLoaderContainer>
    </div>;
  }
}
