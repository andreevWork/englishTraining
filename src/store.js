import { types, addMiddleware } from 'mobx-state-tree';
import { mstLogger } from 'utils/mst/logger';
import { EpisodesModel, EpisodesModelDefaultData } from './models/episodes';
import { SerialsModel, SerialsModelDefaultData } from './models/serials';
import { DataModel, DataModelDefaultData } from './models/data';
import { onSnapshot } from 'mobx-state-tree';

const CommonStoreModel = types
  .model("CommonStore", {
    episodes: EpisodesModel,
    data: DataModel,
    serials: SerialsModel
  });

const CommonStore = CommonStoreModel.create({
  episodes: EpisodesModelDefaultData,
  data: DataModelDefaultData,
  serials: SerialsModelDefaultData
});

addMiddleware(CommonStore, mstLogger);

onSnapshot(CommonStore.data, newSnapshot => {
  localStorage.setItem('moments_sub', JSON.stringify(newSnapshot.moments_sub));
  localStorage.setItem('textForTranslateHistory', JSON.stringify(newSnapshot.textForTranslateHistory));
});

export { CommonStore };

