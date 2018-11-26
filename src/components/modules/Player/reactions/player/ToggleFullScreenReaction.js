import autobind from 'autobind-decorator';
import { DiContainer } from 'DiContainer';
import { BasePlayerReaction } from '../BaseReaction';

export class ToggleFullScreenReaction extends BasePlayerReaction {

    constructor() {
        super();

        document.addEventListener("fullscreenchange",this.onFullSCreenChange);
        document.addEventListener("webkitfullscreenchange",this.onFullSCreenChange);
        document.addEventListener("mozfullscreenchange",this.onFullSCreenChange);
    }

    @autobind
    onFullSCreenChange() {
        this._store.player.setFullScreen(this.isFullScreen());
    }

    isFullScreen() {
        return !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement);
    }

    reaction() {
        if (this.isFullScreen() ===  this._store.player.isFullScreen) {
            return;
        }
        
        const videoEl = DiContainer.get('videoEl').closest('div');

        if(this._store.player.isFullScreen) {
            
            if(videoEl.requestFullscreen)
                videoEl.requestFullscreen();
            else if(videoEl.mozRequestFullScreen)
                videoEl.mozRequestFullScreen();
            else if(videoEl.webkitRequestFullscreen)
                videoEl.webkitRequestFullscreen();
            else if(videoEl.msRequestFullscreen)
                videoEl.msRequestFullscreen();
  
          screen.orientation.lock('landscape-primary');
  
        } else {
            if(document.exitFullscreen)
                document.exitFullscreen();
            else if(document.mozCancelFullScreen)
                document.mozCancelFullScreen();
            else if(document.webkitExitFullscreen)
                document.webkitExitFullscreen();
            else if(document.msExitFullscreen)
                document.msExitFullscreen();
        }
    }

    destroy() {
        document.removeEventListener("fullscreenchange",this.onFullSCreenChange);
        document.removeEventListener("webkitfullscreenchange",this.onFullSCreenChange);
        document.removeEventListener("mozfullscreenchange",this.onFullSCreenChange);

        super.destroy();
    }
}
