import React from 'react';
import s from './Index.sass';
import { Episodes } from '../../modules/Episodes/Episodes';
import autobind from 'autobind-decorator';
import { EpisodesLoaderContainer } from 'common/LoaderContainer/Episodes/LoaderContainer.Episodes';
import { FullPlayer } from '../../modules/Player';

export class Index extends React.Component {
  @autobind
  renderPlayer({ items }) {
    const episode = items.values()[0];
    
    return <FullPlayer
      className={s.bannerPlayer}
      autoPlay={false}
      videoSrc={episode.videoSrc}
      subtitleSrc={episode.subtitleSrc}
    />;
  }
  
  render() {
    return <React.Fragment>
      <div className={s.banner}>
        <div className={s.bannerTitle}>
          Смотрите сериалы. Улучшайте английский.
        </div>
        
        <div className={s.bannerContent}>
          
          <EpisodesLoaderContainer>
            {this.renderPlayer}
          </EpisodesLoaderContainer>
  
          <div className={s.bannerInfo}>
            <ul>
              <li>Смотрите любимые сериалы</li>
              <li>Слушайте английскую речь</li>
              <li>Старайтесь понимать отдельные слова и суть диалогов</li>
              <li>Разбирайте не понятные фразы различными способами</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={s.episodes}>
        <Episodes />
      </div>
    </React.Fragment>;
  }
}
