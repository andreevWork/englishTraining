import React from 'react';
import autobind from 'autobind-decorator';
import {inject} from "mobx-react";
import { FullPlayer } from '../../modules/Player';
import { SerialsLoaderContainer } from 'common/LoaderContainer/Serials/LoaderContainer.Serials';
import { LeftMenu } from './LeftMenu/LeftMenu';

@inject('common')
export class Episode extends React.Component {
  
  @autobind
  renderPlayer({ items }) {
    const episode = items.get(this.props.common.currentEpisode.id);
  
    return <div>
      <FullPlayer
        key={episode.id}
        videoSrc={episode.videoSrc}
        subtitleSrc={episode.subtitleSrc}
      />
      
      <div>
        {episode.title}
      </div>
  
      <LeftMenu serials={items.values()} />
    </div>;
  }
  
  render() {
    return <SerialsLoaderContainer>
      {this.renderPlayer}
    </SerialsLoaderContainer>;
  }
}
