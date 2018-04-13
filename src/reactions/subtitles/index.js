import { BaseReaction } from 'reactions/BaseReaction';
import { SetIndexReaction } from 'reactions/subtitles/SetIndexReaction';

export function createAndRunSubtitlesReactions() {
  return BaseReaction.createAndRunReactions([
    SetIndexReaction
  ])
}
