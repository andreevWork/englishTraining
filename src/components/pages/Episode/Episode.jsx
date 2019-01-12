import React from 'react';
import { FullPlayer } from '../../modules/Player';
import autobind from 'autobind-decorator';
import { EpisodesLoaderContainer } from 'modules/LoaderContainer/Episodes/LoaderContainer.Episodes';
import { SerialsLoaderContainer } from 'modules/LoaderContainer/Serials/LoaderContainer.Serials';
import { FullPlayerLazy } from 'modules/Player/indexLazy';
import { inject } from 'mobx-react';
import { PageTitle } from 'common/PageTitle/PageTitle';
import Path from 'path-parser/typings/Path';
import { CommonStore } from '../../../store';

@inject('episodes')
export class Episode extends React.Component {
  @autobind
  renderPlayer(episodes) {
  
    return <React.Fragment>
      <PageTitle>
        {this.props.episodes.getCurrentEpisode().title}
      </PageTitle>
      

    </React.Fragment>;
  }
  
  const episodePathChecker = pathname => {
    const { id } = Path.createPath(episodePath).partialTest(pathname) || {};
    
    id && CommonStore.episodes.setCurrentId(+id);
  };
  
  render() {
    return <SerialsLoaderContainer>
      <EpisodesLoaderContainer>
        {this.renderPlayer}
      </EpisodesLoaderContainer>
    </SerialsLoaderContainer>;
  }
}
