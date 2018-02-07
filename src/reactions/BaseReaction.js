import {autorun} from "mobx";

/**
 * @abstract
 */
export class BaseReaction {
    stores;

    disposer;

    constructor(stores) {
        this.stores = stores;
    }

    /**
     * @abstract
     */
    reaction() {}

    run() {
        this.disposer = autorun(() => {
            this.reaction();
        });
    }

    destroy() {
        this.disposer();
    }
}
