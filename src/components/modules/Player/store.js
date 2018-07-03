import { FullPlayerDefaultData, FullPlayerModel } from './models';
import { addMiddleware } from 'mobx-state-tree';
import { mstLogger } from 'utils/mst/logger';

const FullPlayerStore = FullPlayerModel.create(FullPlayerDefaultData);

addMiddleware(FullPlayerStore, mstLogger);

export { FullPlayerStore };
