import {BasePlayerReaction} from "reactions/player/BasePlayerReaction";
import autobind from 'autobind-decorator';

export default class ToggleFullScreenReaction extends BasePlayerReaction {

    constructor(...args) {
        super(...args);

        document.addEventListener("fullscreenchange",this.onFullSCreenChange);
        document.addEventListener("webkitfullscreenchange",this.onFullSCreenChange);
        document.addEventListener("mozfullscreenchange",this.onFullSCreenChange);
    }

    @autobind
    onFullSCreenChange() {
        this.stores.player.setFullScreen(this.isFullScreen());
    }

    isFullScreen() {
        return !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement);
    }

    reaction() {
        if (this.isFullScreen() ===  this.stores.player.isFullScreen) {
            return;
        }

        if(this.stores.player.isFullScreen) {
            if(this.videoEl.requestFullscreen)
                this.videoEl.requestFullscreen();
            else if(this.videoEl.mozRequestFullScreen)
                this.videoEl.mozRequestFullScreen();
            else if(this.videoEl.webkitRequestFullscreen)
                this.videoEl.webkitRequestFullscreen();
            else if(this.videoEl.msRequestFullscreen)
                this.videoEl.msRequestFullscreen();
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
