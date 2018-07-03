import { types, addMiddleware } from 'mobx-state-tree';
import { SerialsModel, SerialsModelDefaultData } from './models/serials';
import { CurrentEpisodeModel, CurrentEpisodeModelDefaultData } from './models/currentEpisode';
import { mstLogger } from 'utils/mst/logger';

const CommonStoreModel = types
  .model("CommonStore", {
    serials: SerialsModel,
    currentEpisode: CurrentEpisodeModel
  });

const CommonStore = CommonStoreModel.create({
  serials: SerialsModelDefaultData,
  currentEpisode: CurrentEpisodeModelDefaultData
});

addMiddleware(CommonStore, mstLogger);

export { CommonStore };

