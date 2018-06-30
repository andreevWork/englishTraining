import { types } from 'mobx-state-tree';

export const PlayerModel = types
  .model('Player', {
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
      pause() {
        self.isPaused = true;
      },
      play() {
        self.isPaused = false;
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
      playByTime(time) {
        self.currentTime = time;
        self.isPaused = false;
      }
    };
  });

export const PlayerModelDefaultData = {
  isPaused: true,
  isReady: false,
  isFullScreen: false,
  duration: 0,
  currentTime: 0
};
