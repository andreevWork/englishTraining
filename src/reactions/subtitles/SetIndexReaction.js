import { BaseReaction } from 'reactions/BaseReaction';

export class SetIndexReaction extends BaseReaction {
  reaction() {
    if (!this._store.isGameMod) {
      this._store.subtitles.setIndex(this._store.player.currentTime);
    }
  }
}
