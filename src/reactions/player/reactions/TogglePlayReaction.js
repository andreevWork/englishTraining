import {BasePlayerReaction} from "reactions/player/BasePlayerReaction";

export default class TogglePlayReaction extends BasePlayerReaction {
    reaction() {
        if(this.stores.player.isPaused) {
            this.videoEl.pause();
        } else {
            this.videoEl.play();
        }
    }
}
