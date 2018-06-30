import {autorun} from "mobx";
import { DiContainer } from 'DiContainer';
import { BaseReaction } from 'reactions/BaseReaction';

/**
 * @abstract
 */
export class BasePlayerReaction extends BaseReaction {
    _store;
    _disposer;

    constructor() {
      super();
      
      this._store = DiContainer.get('FullPlayerStore');
    }

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
