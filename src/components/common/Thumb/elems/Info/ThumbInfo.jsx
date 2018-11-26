import React from 'react';
import PropTypes from 'prop-types';

import s from './ThumbInfo.sass';

export class ThumbInfo extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired
  };
  
  render() {
    const { title } = this.props;
    
    return <div className={s.info}>
      {title}
    </div>;
  }
}
