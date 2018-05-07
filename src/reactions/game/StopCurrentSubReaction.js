import { BaseReaction } from 'reactions/BaseReaction';

export class StopCurrentSubReaction extends BaseReaction {
  reaction() {
    if (this._store.isGameMod) {
      const { endTime } = this._store.subtitles.getSub(this._store.subtitles.endIndex);
      
      if (endTime < this._store.player.currentTime) {
        this._store.player.pause();
      }
    }
  }
}
