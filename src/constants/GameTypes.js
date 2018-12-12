import { JustShowLazy } from 'modules/Player/components/Games/JustShow/JustShowLazy';
import { RightOrderLazy } from 'modules/Player/components/Games/RightOrder/RightOrderLazy';

export const GameTypesData = {
  JustShow: {
    name: 'Show subtitles',
    component: JustShowLazy,
    key: 'X',
    comingSoon: false
  },
  
  RightOrder: {
    name: 'Right order',
    component: RightOrderLazy,
    key: 'C',
    comingSoon: false
  },
  
  TypeWords: {
    name: 'Enter by spell',
    key: 'V',
    comingSoon: true
  }
};

export const GameTypes = Object.keys(GameTypesData);
