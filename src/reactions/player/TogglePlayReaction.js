import { DiContainer } from 'DiContainer';
import { BaseReaction } from 'reactions/BaseReaction';

export class TogglePlayReaction extends BaseReaction {
    reaction() {
      const videoEl = DiContainer.get('videoEl');
        if(this._store.player.isPaused) {
            videoEl.pause();
        } else {
            videoEl.play();
        }
    }
}
