import {PlayerModel} from "./models/playerModel";
import { DiContainer } from 'DiContainer';
import { types } from 'mobx-state-tree';
import { SubtitlesModel } from './models/subtitlesModel';
import { GameTypes } from 'constants/GameTypes';

const StoreModel = types
  .model("Store", {
    player: PlayerModel,
    subtitles: SubtitlesModel,
    isGameMod: types.boolean,
    gameType: types.enumeration(GameTypes.concat(''))
  })
  .actions(self => {
    return {
      startGame() {
        self.isGameMod = true;
        self.subtitles.setStartIndex(self.subtitles.index);
        self.subtitles.setEndIndex(self.subtitles.index);
        if (self.gameType) {
          self.repeatCurrentSubs();
        }
      },
      
      setGameType(gameType) {
        self.gameType = gameType;
      },
      
      resetGameType() {
        self.setGameType('');
      },
      
      repeatCurrentSubs() {
        const startSubTime = self.subtitles.getSub(self.subtitles.startIndex).startTime;
        self.player.playByTime(startSubTime);
      },
  
      leftFiveSec() {
        const startSubTime = self.subtitles.getSub(self.subtitles.startIndex).startTime;
        const newTime = self.player.currentTime - 5;
        
        self.player.playByTime(newTime < startSubTime ? startSubTime : newTime);
      },
  
      continueWatch() {
        self.repeatCurrentSubs();
        self.isGameMod = false;
      }
    };
  });

const Store = StoreModel.create({
  isGameMod: false,
  gameType: '',
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

// todo
// cross to close game and choice
// disablde toggle playpause game mod
// middle buttons in muidle
// more icons
// media queries on player icons

