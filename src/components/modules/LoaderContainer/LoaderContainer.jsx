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
  
  renderChildren() {
    const { children } = this.props;
    
    if (typeof children === 'function') {
      return children(this.getData());
    }
    
    return children;
  }
  
  render() {
    return this.hasData() ? this.renderChildren() : null;
  }
}
