import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import s from './ThumbWrap.sass';

export class ThumbWrap extends React.PureComponent {
  static propTypes = {
    posterSrc: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  };
  
  render() {
    const { posterSrc, href } = this.props;
    
    return <Link to={href} className={s.thumb}>
      
      <div className={s.poster} style={{ backgroundImage: `url(${posterSrc})` }} />
  
    </Link>;
  }
}
