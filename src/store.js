import {PlayerModel} from "./models/player/playerModel";
import { DiContainer } from 'DiContainer';

const Store = {
  player: PlayerModel.create()
};

DiContainer.register('store', Store);

export { Store };
