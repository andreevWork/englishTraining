import {getModulesFromDir} from "utils";

/**
 * Класс для создания агрегаторов реакций
 * @abstract
 */
export class BaseReactionsAgregator {
    stores;

    reactions = [];

    constructor(stores) {
        this.stores = stores;
    }

    getReactionParams() {
        return [
            this.stores
        ];
    }

    run(webpackContext) {
        getModulesFromDir(webpackContext)
            .forEach(({default: ReactionClass}) => {
                const reactionInstance = new ReactionClass(...this.getReactionParams());

                reactionInstance.run();

                this.reactions.push(reactionInstance);
            });
    }

    destroy() {
        this.reactions
            .forEach(reactionInstance => reactionInstance.destroy());
    }
}
