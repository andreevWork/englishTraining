import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


import s from './Thumb.sass';
import { PlayIcon } from 'common/Icons/Play/Play';

export class Thumb extends React.PureComponent {
  
  static propTypes = {
    id: PropTypes.number.isRequired,
    serial: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired,
    title: PropTypes.string.isRequired,
    previewImageSrc: PropTypes.string.isRequired,
    episode: PropTypes.number,
    season: PropTypes.number,
    momentsCount: PropTypes.number
  };
  
  getColorForLabel(str) {
    let hash = 0;
  
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    const c = (hash & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();
  
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(`000000${c}`.substr(-6));
  
    return `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, .7)`;
  }
  
  
  render() {
    const { previewImageSrc, season, episode, title, id, serial, momentsCount } = this.props;
    
    return <Link to={`/episode/${id}`} className={s.thumb}>
      
      <div className={s.poster} style={{ backgroundImage: `url(${process.env.MEDIA_HOST}${previewImageSrc})` }} />
  
      <PlayIcon className={s.icon} />
      
      <div className={s.header}>
        <div
          className={s.serialName}
          style={{ backgroundColor: this.getColorForLabel(serial.title) }}
        >
          {serial.title}
        </div>
        {momentsCount && <div
          className={s.momentsCount}
        >
          {momentsCount} moment{momentsCount > 1 && 's'}
        </div>}
      </div>
      
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
