import { types } from 'mobx-state-tree';

export const PlayerModel = types
    .model('Player', {
        isPaused: true,
        isFullScreen: false
    })
    .actions(self => {
        return {
            tooglePlay() {
                self.isPaused = !self.isPaused;
            },
            toogleFullScreen() {
                self.isFullScreen = !self.isFullScreen;
            },
            setFullScreen(isFullScreen) {
                self.isFullScreen = isFullScreen;
            }
        };
    });
