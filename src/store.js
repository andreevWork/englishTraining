import { types, addMiddleware } from 'mobx-state-tree';
import { mstLogger } from 'utils/mst/logger';
import { EpisodesModel, EpisodesModelDefaultData } from './models/episodes';
import { persist } from 'utils/mst/persist';

const CommonStoreModel = types
  .model("CommonStore", {
    episodes: EpisodesModel
  });

const CommonStore = CommonStoreModel.create({
  episodes: EpisodesModelDefaultData
});

addMiddleware(CommonStore, mstLogger);

persist(CommonStore.episodes.savedMoments, 'savedMoments');

export { CommonStore };

