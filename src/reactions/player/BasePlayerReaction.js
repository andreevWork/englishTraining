import {BaseReaction} from "reactions/BaseReaction";

/**
 * @abstract
 */
export class BasePlayerReaction extends BaseReaction {
    videoEl;

    constructor(stores, videoEl) {
        super(stores);

        this.videoEl = videoEl;
    }
}
