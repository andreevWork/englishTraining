import { FullPlayerModel } from './models';
import { PlayerModelDefaultData } from './models/player';
import { SubtitlesModelDefaultData } from './models/subtitles';


const FullPlayerStore = FullPlayerModel.create({
  player: PlayerModelDefaultData,
  subtitles: SubtitlesModelDefaultData,
  
  isGameMod: false,
  gameType: '',
});

export { FullPlayerStore };
