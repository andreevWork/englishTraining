import { DiContainer } from 'DiContainer';
import autobind from 'autobind-decorator';

export class HotKeysService {
  listeners = [];
  
  constructor() {
    this.store = DiContainer.get('store');
  }
  
  @autobind
  keyHandler({ keyCode }) {
    switch (keyCode) {
    case 32: // space
      this.store.player.tooglePlay();
      break;
      
    case 70: // f
      this.store.player.toogleFullScreen();
      break;
      
    case 37: // left arrow
      this.store.leftFiveSec();
      break;

    case 39: // right arrow
      this.store.rightFiveSec();
      break;
      
    case 27: // esc
      this.store.stopGame();
      break;
      
    case 83: // s
      if (!this.store.isGameMod) {
        this.store.startGame();
      } else {
        this.store.continueWatch();
       }
      break;
      
    case 90: // z
      this.store.resetGameType();
      break;
      
    case 88: // x
      this.store.setGameType('JustShow');
      break;
      
    case 67: // c
      this.store.setGameType('RightOrder');
      break;
      
    case 82: // r
      if (this.store.gameType) {
        this.store.repeatCurrentSubs();
      }
      break;
      
    }
  }
  
  run() {
    window.addEventListener('keydown', this.keyHandler);
  }
  
  destroy() {
    window.removeEventListener('keydown', this.keyHandler);
  }
}
