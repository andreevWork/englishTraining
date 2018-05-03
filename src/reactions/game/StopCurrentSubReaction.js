import { BaseReaction } from 'reactions/BaseReaction';

export class StopCurrentSubReaction extends BaseReaction {
  reaction() {
    if (this._store.isGameMod) {
      const { endTime } = this._store.subtitles.getSub();
      
      if (endTime < this._store.player.currentTime) {
        this._store.player.pause();
      }
    }
  }
}
