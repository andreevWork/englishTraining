import { types, addMiddleware } from 'mobx-state-tree';
import { mstLogger } from 'utils/mst/logger';
import { EpisodesModel, EpisodesModelDefaultData } from './models/episodes';
import { SaveModel, SaveModelDefaultData } from './models/saveData';
import { persist } from 'utils/mst/persist';

const CommonStoreModel = types
  .model("CommonStore", {
    episodes: EpisodesModel,
    saveData: SaveModel
  });

const CommonStore = CommonStoreModel.create({
  episodes: EpisodesModelDefaultData,
  saveData: SaveModelDefaultData
});

addMiddleware(CommonStore, mstLogger);

persist(CommonStore.saveData, 'saveData');

export { CommonStore };

