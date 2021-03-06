import { PlayerModel, PlayerModelDefaultData } from "./player";
import { types, applySnapshot } from 'mobx-state-tree';
import { SubtitlesModel, SubtitlesModelDefaultData } from './subtitles';
import { GameTypes } from 'constants/GameTypes';

export const FullPlayerModel = types
  .model("Store", {
    player: PlayerModel,
    subtitles: SubtitlesModel,
    
    popupKey: types.string,
    gameType: types.enumeration(GameTypes.concat(''))
  })
  .views(self => ({
    isGameMod() {
      return self.popupKey === 'game';
    },
    
    isMomentsPopup() {
      return self.popupKey === 'moments';
    }
  }))
  .actions(self => {
    return {
      reset: () => {
        applySnapshot(self, FullPlayerDefaultData);
      },
      
      startGame() {
        self.popupKey = 'game';
        self.player.pause();
        self.subtitles.setStartIndex(self.subtitles.index);
        self.subtitles.setEndIndex(self.subtitles.index);
        
        if (self.gameType) {
          self.repeatCurrentSubs();
        }
      },
  
      closePopup() {
        self.popupKey = '';
      },
  
      hasPopup() {
        return Boolean(self.popupKey);
      },
  
      openSavedMoments() {
        self.player.pause();
        self.popupKey = 'moments';
      },
      
      openSavedMomentToPlay(sub_id) {
        self.subtitles.setIndex(sub_id);
        self.player.setCurrentTime(self.subtitles.getSub(sub_id).startTime);
        self.setGameType('');
        self.startGame();
      },
      
      setGameType(gameType) {
        self.gameType = gameType;
        self.player.play();
      },
      
      resetGameType() {
        self.setGameType('');
      },
      
      repeatSingeTime(singleIndex) {
        self.player.playByTime(self.subtitles.getSub(singleIndex).startTime);
        self.subtitles.setSingleEndIndex(singleIndex);
      },
      
      reduceStartIndex() {
        const newStartIndex = self.subtitles.startIndex - 1;
        
        self.subtitles.setStartIndex(newStartIndex);
        
        self.player.setCurrentTime(self.subtitles.getSub(newStartIndex).startTime);
      },
      
      increaseStartIndex() {
        const newStartIndex = self.subtitles.startIndex + 1;
        
        self.subtitles.setStartIndex(newStartIndex);
        
        self.player.setCurrentTime(self.subtitles.getSub(newStartIndex).startTime);
      },
      
      reduceEndIndex() {
        const newEndIndex = self.subtitles.endIndex - 1;
        
        self.subtitles.setEndIndex(newEndIndex);
      },
      
      increaseEndIndex() {
        const newEndIndex = self.subtitles.endIndex + 1;
        
        self.subtitles.setEndIndex(newEndIndex);
      },
      
      repeatCurrentSubs() {
        const startSubTime = self.subtitles.getSub(self.subtitles.startIndex).startTime;
        self.player.playByTime(startSubTime);
      }
      
//      leftFiveSec() {
//        let newTime = self.player.currentTime - 5;
//
//        if (self.popupKey === 'game') {
//          const startSubTime = self.subtitles.getSub(self.subtitles.startIndex).startTime;
//
//          newTime = newTime < startSubTime ? startSubTime : newTime;
//        }
//
//        self.player.playByTime(newTime > 0 ? newTime : 0);
//      },
//
//      rightFiveSec() {
//        let newTime = self.player.currentTime + 5;
//
//        if (self.isGameMod) {
//          const endSubTime = self.subtitles.getSub(self.subtitles.endIndex).endTime;
//
//          newTime = newTime > endSubTime ? endSubTime : newTime;
//        }
//
//        self.player.playByTime(newTime > self.player.duration ? self.player.duration : newTime);
//      }
    };
  });

export const FullPlayerDefaultData = {
  player: PlayerModelDefaultData,
  subtitles: SubtitlesModelDefaultData,
  
  popupKey: '',
  gameType: ''
};
