import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


import s from './Thumb.sass';
import { PlayIcon } from 'common/Icons/Play/Play';

export class Thumb extends React.PureComponent {
  
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    previewImageSrc: PropTypes.string.isRequired,
    episode: PropTypes.number,
    season: PropTypes.number
    
  };
  
  render() {
    const { previewImageSrc, season, episode, title, id } = this.props;
    
    return <Link to={`/episode/${id}`} className={s.thumb}>
      
      <div className={s.poster} style={{ backgroundImage: `url(${previewImageSrc})` }} />
  
      <PlayIcon notHover className={s.icon} />
      
      <div className={s.info}>
        <div className={s.title}>{title}</div>
        
        <div className={s.seasonInfo}>
          <div className={s.subtitle}>
            {season && `Season ${season}`}
            ,&nbsp;&nbsp;
            {episode && `Episode ${episode}`}
          </div>
        </div>
      </div>
    </Link>;
  }
}
