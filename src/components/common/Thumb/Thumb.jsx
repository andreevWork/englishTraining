import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


import s from './Thumb.sass';

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
      
      <div className={s.info}>
        {season && <div className={s.text}>Season - {season}</div>}
        
        {episode && <div className={s.text}>Episode - {episode}</div>}
  
        <div className={s.text}>{title}</div>
      </div>
    </Link>;
  }
}
