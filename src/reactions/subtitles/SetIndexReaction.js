import { BaseReaction } from 'reactions/BaseReaction';

export class SetIndexReaction extends BaseReaction {
  reaction() {
    this._store.subtitles.setIndex(this._store.player.currentTime * 1000);
  }
}
