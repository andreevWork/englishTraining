import { BaseReaction } from 'reactions/BaseReaction';

export class SetIndexReaction extends BaseReaction {
  reaction() {
    let index = this._store.subtitles.getIndexByTime(this._store.player.currentTime);
    
    if (this._store.isGameMod && (index > this._store.subtitles.endIndex || this._store.player.isPaused)) {
      return;
    }
    
    this._store.subtitles.setIndex(index)
  }
}
