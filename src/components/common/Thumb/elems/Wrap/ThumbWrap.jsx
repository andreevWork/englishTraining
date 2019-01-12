import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import s from './ThumbWrap.sass';

export class ThumbWrap extends React.PureComponent {
  static propTypes = {
    posterSrc: PropTypes.string.isRequired
  };
  
  render() {
    const { posterSrc, href, children, className, onClick } = this.props;
    
    if (href) {
      return <Link to={href} className={cn(s.thumb, className)}>
  
        <div className="poster" style={{ backgroundImage: `url(${posterSrc})` }} />
  
        {children}
      </Link>;
    }
    
    return <div onClick={onClick} className={cn(s.thumb, className)}>
  
      <div className="poster" style={{ backgroundImage: `url(${posterSrc})` }} />
  
      {children}
  
    </div>;
  }
}
