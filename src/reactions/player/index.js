import { BaseReaction } from 'reactions/BaseReaction';
import { SeekMomentReaction } from 'reactions/player/reactions/SeekMomentReaction';
import { ToggleFullScreenReaction } from 'reactions/player/reactions/ToggleFullScreenReaction';
import { TogglePlayReaction } from 'reactions/player/reactions/TogglePlayReaction';

export function createAndRunPlayerReactions() {
  return BaseReaction.createAndRunReactions([
    SeekMomentReaction,
    ToggleFullScreenReaction,
    TogglePlayReaction,
  ])
}
