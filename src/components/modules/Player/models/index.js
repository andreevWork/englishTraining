import { PlayerModel } from "./player";
import { types } from 'mobx-state-tree';
import { SubtitlesModel } from './subtitles';
import { GameTypes } from 'constants/GameTypes';

export const FullPlayerModel = types
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
      
      stopGame() {
        self.isGameMod = false;
      },
      
      setGameType(gameType) {
        self.gameType = gameType;
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
      },
      
      leftFiveSec() {
        let newTime = self.player.currentTime - 5;
        
        if (self.isGameMod) {
          const startSubTime = self.subtitles.getSub(self.subtitles.startIndex).startTime;
          
          newTime = newTime < startSubTime ? startSubTime : newTime;
        }
        
        self.player.playByTime(newTime > 0 ? newTime : 0);
      },
      
      rightFiveSec() {
        let newTime = self.player.currentTime + 5;
        
        if (self.isGameMod) {
          const endSubTime = self.subtitles.getSub(self.subtitles.endIndex).endTime;
          
          newTime = newTime > endSubTime ? endSubTime : newTime;
        }
        
        self.player.playByTime(newTime > self.player.duration ? self.player.duration : newTime);
      },
      
      continueWatch() {
        self.repeatCurrentSubs();
        self.isGameMod = false;
      }
    };
  });
