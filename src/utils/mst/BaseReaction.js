import {autorun} from "mobx";

/**
 * @abstract
 */
export class BaseReaction {
    _store;
    _disposer;

    /**
     * @abstract
     */
    reaction() {}

    run() {
        this._disposer = autorun(this.reaction.bind(this));
        
        return this;
    }

    destroy() {
        this._disposer();
    }
}
