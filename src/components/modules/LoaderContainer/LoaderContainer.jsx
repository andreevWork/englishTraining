import React from 'react';

export class LoaderContainer extends React.Component {
  
  componentDidMount() {
    if (!this.hasData()) {
      this.loadData();
    }
  }
  
  /**
   * @abstract
   */
  loadData() {}
  
  /**
   * @abstract
   */
  hasData() {}
  
  /**
   * @abstract
   */
  getData() {}
  
  render() {
    return this.hasData() ? this.props.children(this.getData()) : null;
  }
}
