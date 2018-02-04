import { types } from 'mobx-state-tree';

export const PlayerModel = types
    .model('Player', {
        isPaused: types.boolean
    })
    .actions(self => {
        return {
            tooglePlay() {
                self.isPaused = !self.isPaused;
            }
        };
    });
