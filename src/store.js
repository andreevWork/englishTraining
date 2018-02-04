import { types } from "mobx-state-tree"
import {PlayerModel} from "./models/player/player";

const Store = types.model("Store", {
    player: PlayerModel
});

export const store = Store.create();
