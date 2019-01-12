import React from 'react';
import { LoaderContainer } from '../LoaderContainer';
import { inject, observer } from 'mobx-react';

@inject('episodes')
@observer
export class EpisodesLoaderContainer extends LoaderContainer {
  
  componentWillUnmount() {
    this.props.episodes.clear();
  }

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

