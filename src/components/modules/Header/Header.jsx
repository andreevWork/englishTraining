import React from 'react';
import autobind from 'autobind-decorator';

import s from './Header.sass';
import { Link } from 'react-router-dom';
import { MenuIcon } from 'common/Icons/Menu/Menu';
import { Bar } from 'modules/Header/Bar/Bar';
import { inject, observer } from 'mobx-react/index';
import { FullPlayerLazy } from 'modules/Player/indexLazy';

@inject('episodes')
@observer
export class Header extends React.Component {
  
  state = {
    isOpenBar: false
  };
  
  @autobind
  toggleBar() {
    this.setState({
      isOpenBar: !this.state.isOpenBar
    });
  }
  
  renderPlayer() {
    const episode = this.props.episodes.getCurrentEpisode();
  
    return <FullPlayerLazy
      key={episode.id}
      videoSrc={episode.videoSrc}
      subtitleSrc={episode.subtitleSrc}
    />
  }
  
  render() {
    return <React.Fragment>
      <div className={s.header}>
        {<Bar close={this.toggleBar} isOpen={this.state.isOpenBar} />}
        <Link to="/" className={s.logo} />
        <MenuIcon className={s.menu} onClick={this.toggleBar} />
      </div>
      
      {this.props.episodes.hasCurrentEpisode() && this.renderPlayer()}
    </React.Fragment>;
  }
}
