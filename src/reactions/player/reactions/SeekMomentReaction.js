import {BasePlayerReaction} from "reactions/player/BasePlayerReaction";

export default class SeekMomentReaction extends BasePlayerReaction {
    reaction() {
        if (this.videoEl.currentTime ===  this.stores.player.currentTime) {
            return;
        }

        this.videoEl.currentTime = this.stores.player.currentTime;
    }
}
