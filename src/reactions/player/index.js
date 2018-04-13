import { BaseReaction } from 'reactions/BaseReaction';
import { SeekMomentReaction } from 'reactions/player/SeekMomentReaction';
import { ToggleFullScreenReaction } from 'reactions/player/ToggleFullScreenReaction';
import { TogglePlayReaction } from 'reactions/player/TogglePlayReaction';

export function createAndRunPlayerReactions() {
  return BaseReaction.createAndRunReactions([
    SeekMomentReaction,
    ToggleFullScreenReaction,
    TogglePlayReaction,
  ])
}
