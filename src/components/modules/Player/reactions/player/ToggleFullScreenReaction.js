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
        if (this.isFullScreen() === this._store.player.isFullScreen) {
            return;
        }
        
        const videoFullscreenEl = DiContainer.get('videoEl').closest('.fullscreen-container');

        if(this._store.player.isFullScreen) {
            
            if(videoFullscreenEl.requestFullscreen)
                videoFullscreenEl.requestFullscreen();
            else if(videoFullscreenEl.mozRequestFullScreen)
                videoFullscreenEl.mozRequestFullScreen();
            else if(videoFullscreenEl.webkitRequestFullscreen)
                videoFullscreenEl.webkitRequestFullscreen();
            else if(videoFullscreenEl.msRequestFullscreen)
                videoFullscreenEl.msRequestFullscreen();
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
        
        if (this._store.player.isFullScreen) {
          window.requestAnimationFrame(() => {
            typeof screen.orientation.lock === 'function' && screen.orientation.lock("landscape-primary");
            typeof screen.lockOrientation === 'function' && screen.lockOrientation("landscape-primary");
          });
        }
    }

    destroy() {
        document.removeEventListener("fullscreenchange",this.onFullSCreenChange);
        document.removeEventListener("webkitfullscreenchange",this.onFullSCreenChange);
        document.removeEventListener("mozfullscreenchange",this.onFullSCreenChange);

        super.destroy();
    }
}
