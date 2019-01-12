import React from 'react';
import PropTypes from 'prop-types';

import s from './ThumbInfo.sass';

export class ThumbInfo extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired
  };
  
  render() {
    const { title, description } = this.props;
    
    return <div className={s.info}>
      <div>
        {title}
      </div>
      <div className={s.desc}>
        {description}
      </div>
    </div>;
  }
}
