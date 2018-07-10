import React from 'react';
import { LoaderContainer } from 'common/LoaderContainer/LoaderContainer';
import { inject, observer } from 'mobx-react';

@inject('episodes')
@observer
export class EpisodesLoaderContainer extends LoaderContainer {

  loadData() {
    this.props.episodes.load();
  }

  hasData() {
    return this.props.episodes.items.size > 0;
  }

  getData() {
    return this.props.episodes;
  }
}

