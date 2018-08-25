import React from 'react';
import s from './Episode.sass';
import { FullPlayer } from '../../modules/Player';
import { LeftMenu } from './LeftMenu/LeftMenu';
import autobind from 'autobind-decorator';
import { EpisodesLoaderContainer } from 'common/LoaderContainer/Episodes/LoaderContainer.Episodes';

export class Episode extends React.Component {
  @autobind
  renderPlayer({ items, currentId }) {
    const episode = items.get(currentId);
  
    return <div className={s.player}>
      <div>
        <FullPlayer
          key={episode.id}
          videoSrc={episode.videoSrc}
          subtitleSrc={episode.subtitleSrc}
        />
  
        <div className={s.info}>
          <div className={s.infoSerial}>
            {episode.serial.title}: Season {episode.season} Episode {episode.episode}
          </div>
          <div>
            {episode.title}
          </div>
        </div>
      </div>
    </div>;
  }
  
  render() {
    return <React.Fragment>
      <EpisodesLoaderContainer>
        {this.renderPlayer}
      </EpisodesLoaderContainer>
      
      <LeftMenu />
    </React.Fragment>;
  }
}
