import { types } from 'mobx-state-tree';

export const PlayerModel = types
    .model('Player', {
        videoSrc: types.maybe(types.string),
        subsSrc: types.maybe(types.string),
        isPaused: true,
        isFullScreen: false,
        duration: 0,
        currentTime: 0
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
            },
            setDuration(duration) {
                self.duration = duration;
            },
            setCurrentTime(currentTime) {
                self.currentTime = currentTime;
            },
            setSrc({videoSrc, subsSrc}) {
                self.videoSrc = videoSrc;
                self.subsSrc = subsSrc;
            }
        };
    });
