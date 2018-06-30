import { DiContainer } from 'DiContainer';
import { BasePlayerReaction } from '../BaseReaction';

export class TogglePlayReaction extends BasePlayerReaction {
    reaction() {
      const videoEl = DiContainer.get('videoEl');
        if(this._store.player.isPaused) {
            videoEl.pause();
        } else {
            videoEl.play();
        }
    }
}
