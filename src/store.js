import {PlayerModel} from "./models/playerModel";
import { DiContainer } from 'DiContainer';
import { SubtitlesModel } from './models/subtitlesModel';

const Store = {
  player: PlayerModel.create({
    videoSrc: '/assets/qwe.mp4',
    subsSrc: '/assets/qwe.srt',
    isPaused: true,
    isReady: false,
    isFullScreen: false,
    duration: 0,
    currentTime: 0
  }),
  subtitles: SubtitlesModel.create({
    isPending: false,
    subs: [],
    index: 0
  })
};

DiContainer.register('store', Store);

export { Store };
