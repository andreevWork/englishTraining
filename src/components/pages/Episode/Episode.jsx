import React from 'react';
import { FullPlayer } from '../../modules/Player';
import autobind from 'autobind-decorator';
import { EpisodesLoaderContainer } from 'modules/LoaderContainer/Episodes/LoaderContainer.Episodes';
import { SerialsLoaderContainer } from 'modules/LoaderContainer/Serials/LoaderContainer.Serials';

export class Episode extends React.Component {
  @autobind
  renderPlayer(episodes) {
    const episode = episodes.getCurrentEpisode();
  
    return <FullPlayer
      key={episode.id}
      videoSrc={episode.videoSrc}
      subtitleSrc={episode.subtitleSrc}
    />;
//      <div className={s.player}>
//      <div>
//
//
//        {/*<div className={s.info}>*/}
//          {/*<div className={s.infoSerial}>*/}
//            {/*{episode.serial.title}: Season {episode.season} Episode {episode.episode}*/}
//          {/*</div>*/}
//          {/*<div>*/}
//            {/*{episode.title}*/}
//          {/*</div>*/}
//        {/*</div>*/}
//      </div>
//    </div>;
  }
  
  render() {
    return <SerialsLoaderContainer>
      <EpisodesLoaderContainer>
        {this.renderPlayer}
      </EpisodesLoaderContainer>
    </SerialsLoaderContainer>;
  }
}
