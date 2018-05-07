import {PlayerModel} from "./models/playerModel";
import { DiContainer } from 'DiContainer';
import { types } from 'mobx-state-tree';
import { SubtitlesModel } from './models/subtitlesModel';

const StoreModel = types
  .model("Store", {
    player: PlayerModel,
    subtitles: SubtitlesModel,
    isGameMod: types.boolean,
    gameType: types.string
  })
  .actions(self => {
    return {
      startGame() {
        self.isGameMod = true;
        self.subtitles.setStartIndex(self.subtitles.index);
        self.subtitles.setEndIndex(self.subtitles.index);
        self.repeatCurrentSubs();
      },
      
      repeatCurrentSubs() {
        const startSubTime = self.subtitles.getSub(self.subtitles.startIndex).startTime;
        self.player.playByTime(startSubTime);
      },
  
      continueWatch() {
        self.repeatCurrentSubs();
        self.isGameMod = false;
      }
    };
  });

const Store = StoreModel.create({
  isGameMod: false,
  gameType: 'JustShow',
  player: {
    videoSrc: '/assets/qwe.mp4',
    subsSrc: '/assets/qwe.srt',
    isPaused: true,
    isReady: false,
    isFullScreen: false,
    duration: 0,
    currentTime: 0
  },
  subtitles: {
    isPending: false,
    subs: [],
    startIndex: -1,
    index: -1,
    endIndex: -1
  }
});

DiContainer.register('store', Store);

export { Store };
