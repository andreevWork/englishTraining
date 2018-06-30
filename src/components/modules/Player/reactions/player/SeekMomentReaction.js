import { DiContainer } from 'DiContainer';
import { BasePlayerReaction } from '../BaseReaction';

export class SeekMomentReaction extends BasePlayerReaction {
    reaction() {
        const videoEl = DiContainer.get('videoEl');
        
        if (videoEl.currentTime ===  this._store.player.currentTime) {
            return;
        }

        videoEl.currentTime = this._store.player.currentTime;
    }
}
