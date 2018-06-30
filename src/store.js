import { types, addMiddleware } from 'mobx-state-tree';
import {actionLogger} from "mst-middlewares";
import { SerialsModel, SerialsModelDefaultData } from './models/serials';
import { CurrentEpisodeModel, CurrentEpisodeModelDefaultData } from './models/currentEpisode';

const CommonStoreModel = types
  .model("CommonStore", {
    serials: SerialsModel,
    currentEpisode: CurrentEpisodeModel
  });

const CommonStore = CommonStoreModel.create({
  serials: SerialsModelDefaultData,
  currentEpisode: CurrentEpisodeModelDefaultData
});

addMiddleware(CommonStore, actionLogger);

export { CommonStore };

