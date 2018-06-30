import { BasePlayerReaction } from '../BaseReaction';

export class StopCurrentSubReaction extends BasePlayerReaction {
  reaction() {
    if (this._store.isGameMod) {
      let endTime;
      
      if (this._store.subtitles.singleEndIndex > -1) {
        endTime = this._store.subtitles.getSub(this._store.subtitles.singleEndIndex).endTime;
        } else {
        endTime = this._store.subtitles.getSub(this._store.subtitles.endIndex).endTime;
      }
      
      if (endTime < this._store.player.currentTime) {
        this._store.subtitles.setSingleEndIndex(-1);
        this._store.player.pause();
      }
    }
  }
}
