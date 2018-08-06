import React from 'react';
import autobind from 'autobind-decorator';
import cn from 'classnames';

import s from './RightMenu.sass';
import { Scrollbars } from 'react-custom-scrollbars';
import { PlayListIcon } from 'common/Icons/PlayList/PlayList';
import { EpisodesLoaderContainer } from 'common/LoaderContainer/Episodes/LoaderContainer.Episodes';
import { Thumb } from 'common/Thumb/Thumb';

export class RightMenu extends React.Component {
  state = {
    isOpen: false
  };
  
  @autobind
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  @autobind
  renderSaves({ items }) {
    return this.props.saveData.subs.entries().map(([ episode_id, data ]) =>
      <div>
        <Thumb key={episode_id} {...items.get(episode_id)} momentsCount={data.subs_ids.length} />
      </div>
    );
  }
  
  render() {
    return <div className={cn(s.menu, this.state.isOpen && s.menuOpen)}>
      <div className={s.opener} onClick={this.toggle}>
        <PlayListIcon className={s.icon} notHover />
      </div>
      
      <Scrollbars
        style={{
          width: '445px',
          height: 'calc(100vh - 110px)'
        }}
        autoHide
      >
        <EpisodesLoaderContainer>
          {this.renderSaves}
        </EpisodesLoaderContainer>
      </Scrollbars>
    </div>;
  }
}
