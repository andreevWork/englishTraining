import React from 'react';
import { Provider } from "mobx-react";
import { DiContainer } from 'DiContainer';
import { FullPlayerStore } from './store';
import { Player } from './components/Player';
import { SetIndexReaction } from './reactions/subtitles/SetIndexReaction';
import { StopCurrentSubReaction } from './reactions/subtitles/StopCurrentSubReaction';
import { SeekMomentReaction } from './reactions/player/SeekMomentReaction';
import { ToggleFullScreenReaction } from './reactions/player/ToggleFullScreenReaction';
import { TogglePlayReaction } from './reactions/player/TogglePlayReaction';
import { reactionsManager } from 'utils/mst/reactionsManager';

DiContainer.register('FullPlayerStore', FullPlayerStore);

@reactionsManager([
  SetIndexReaction,
  StopCurrentSubReaction,
  SeekMomentReaction,
  ToggleFullScreenReaction,
  TogglePlayReaction
])
export default class FullPlayer extends React.PureComponent {
  
  static propTypes = Player.propTypes;
  
  render() {
    return <Provider
      store={FullPlayerStore}
      player={FullPlayerStore.player}
      subtitles={FullPlayerStore.subtitles}
    >
      <Player {...this.props} />
    </Provider>;
  }
}
