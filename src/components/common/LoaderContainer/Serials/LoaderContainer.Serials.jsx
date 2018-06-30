import React from 'react';
import { LoaderContainer } from 'common/LoaderContainer/LoaderContainer';
import { inject, observer } from 'mobx-react';

@inject('serials')
@observer
export class SerialsLoaderContainer extends LoaderContainer {

  loadData() {
    this.props.serials.load();
  }

  hasData() {
    return this.props.serials.items.size > 0;
  }

  getData() {
    return this.props.serials;
  }
}

