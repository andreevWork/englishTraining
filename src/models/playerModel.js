import { types } from 'mobx-state-tree';

export const PlayerModel = types
    .model('Player', {
        videoSrc: types.string,
        subsSrc: types.string,
        isPaused: types.boolean,
        isReady: types.boolean,
        isFullScreen: types.boolean,
        duration: types.number,
        currentTime: types.number
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
            setIsReady(isReady) {
                self.isReady = isReady;
            },
            setSrc({videoSrc, subsSrc}) {
                self.videoSrc = videoSrc;
                self.subsSrc = subsSrc;
            }
        };
    });
