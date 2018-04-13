import { DiContainer } from 'DiContainer';
import { BaseReaction } from 'reactions/BaseReaction';

export class SeekMomentReaction extends BaseReaction {
    reaction() {
        const videoEl = DiContainer.get('videoEl');
        
        if (videoEl.currentTime ===  this._store.player.currentTime) {
            return;
        }

        videoEl.currentTime = this._store.player.currentTime;
    }
}
