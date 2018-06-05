import {autorun} from "mobx";
import { DiContainer } from 'DiContainer';

/**
 * @abstract
 */
export class BaseReaction {
    static createAndRunReactions(reactionsClasses) {
        return reactionsClasses
          .map(ReactionClass => new ReactionClass())
          .map(reactionInstance => reactionInstance.run());
    };
  
  static destroyReactions(reactionsInstances) {
     reactionsInstances
      .forEach(reactionInstance => reactionInstance.destroy());
    
  };
    
    _store;
    _disposer;

    constructor() {
        this._store = DiContainer.get('store');
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
