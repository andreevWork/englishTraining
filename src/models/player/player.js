import { types } from 'mobx-state-tree';

export const PlayerModel = types
    .model('Player', {
        isPaused: true
    })
    .actions(self => {
        return {
            tooglePlay() {
                self.isPaused = !self.isPaused;
            }
        };
    });
