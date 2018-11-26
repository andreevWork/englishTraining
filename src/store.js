import { types, addMiddleware } from 'mobx-state-tree';
import { mstLogger } from 'utils/mst/logger';
import { EpisodesModel, EpisodesModelDefaultData } from './models/episodes';
import { persist } from 'utils/mst/persist';
import { SerialsModel, SerialsModelDefaultData } from './models/serials';

const CommonStoreModel = types
  .model("CommonStore", {
    episodes: EpisodesModel,
    serials: SerialsModel
  });

const CommonStore = CommonStoreModel.create({
  episodes: EpisodesModelDefaultData,
  serials: SerialsModelDefaultData
});

addMiddleware(CommonStore, mstLogger);

//persist(CommonStore.episodes.savedMoments, 'savedMoments');

export { CommonStore };

