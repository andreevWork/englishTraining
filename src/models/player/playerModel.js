import { types } from 'mobx-state-tree';

export const PlayerModel = types
    .model('Player', {
        videoSrc: '/assets/qwe.mp4',
        subsSrc: '/assets/qwe.srt',
        isPaused: true,
        isReady: false,
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
            setIsReady(isReady) {
                self.isReady = isReady;
            },
            setSrc({videoSrc, subsSrc}) {
                self.videoSrc = videoSrc;
                self.subsSrc = subsSrc;
            }
        };
    });
