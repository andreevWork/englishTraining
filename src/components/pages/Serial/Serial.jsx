import React from 'react';
import { EpisodesLoaderContainer } from 'modules/LoaderContainer/Episodes/LoaderContainer.Episodes';
import autobind from 'autobind-decorator';
import { EpisodeThumb } from 'common/Thumb/EpisodeThumb/EpisodeThumb';
import { SerialsLoaderContainer } from 'modules/LoaderContainer/Serials/LoaderContainer.Serials';
import { PageTitle } from 'common/PageTitle/PageTitle';
import { inject } from 'mobx-react';
import s from './Serial.sass';

@inject('serials')
export class Serial extends React.PureComponent {
  @autobind
  renderEpisodes({ items }) {
    return items.values().map(episode => <EpisodeThumb key={episode.id} {...episode} />);
  }
  
  @autobind
  renderContent() {
    const { title, description, posterSrc } = this.props.serials.getCurrentSerial();
    
    return <React.Fragment>
      <PageTitle>
        {title}
      </PageTitle>
      
      <div className={s.info}>
        <div className={s.poster} style={{ backgroundImage: `url(${posterSrc})` }} />
        <div>
          {description}
        </div>
      </div>
  
      <EpisodesLoaderContainer>
        {this.renderEpisodes}
      </EpisodesLoaderContainer>
    </React.Fragment>
  }
  
  render() {
    return <SerialsLoaderContainer>
      {this.renderContent}
    </SerialsLoaderContainer>;
  }
}
