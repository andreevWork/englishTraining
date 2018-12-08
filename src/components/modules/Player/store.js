import { FullPlayerDefaultData, FullPlayerModel } from './models';
import { addMiddleware } from 'mobx-state-tree';
import { mstLogger } from 'utils/mst/logger';
import { persist } from 'utils/mst/persist';
import { DataModelDefaultData } from 'modules/Player/models/data';

const FullPlayerStore = FullPlayerModel.create(FullPlayerDefaultData);

addMiddleware(FullPlayerStore, mstLogger);

persist(FullPlayerStore.data, 'persist_data', ({ textForTranslateHistory, moments_sub }) => ({ ...DataModelDefaultData, moments_sub, textForTranslateHistory }));

export { FullPlayerStore };
