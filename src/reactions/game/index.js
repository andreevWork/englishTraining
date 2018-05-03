import { BaseReaction } from 'reactions/BaseReaction';
import { StopCurrentSubReaction } from 'reactions/game/StopCurrentSubReaction';

export function createAndRunGameReactions() {
  return BaseReaction.createAndRunReactions([
    StopCurrentSubReaction
  ])
}
