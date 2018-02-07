import {BaseReactionsAgregator} from "reactions/BaseReactionsAgregator";

export class PlayerReactionsAgregator extends BaseReactionsAgregator {
    videoEl;

    constructor(stores, videoEl) {
        super(stores);

        this.videoEl = videoEl;
    }

    run() {
        super.run(require.context('./reactions/', false, /Reaction\.js$/));
    }

    getReactionParams() {
        return [
            ...super.getReactionParams(),
            this.videoEl
        ]
    }
}
