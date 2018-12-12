import { types } from 'mobx-state-tree';

export const DataModel = types
  .model('Player', {
    textForTranslate: types.string,
    textForTranslateHistory: types.array(types.string),
    moments_sub: types.map(types.array(types.number)),
    currentIndexSavedMoment: types.number
  })
  .views(self => ({
    getMoments({ serial_id, episode_id }) {
      const key = getKey(serial_id, episode_id);
  
      return self.moments_sub.get(key);
    },
  
    hasSavedMoments(...args) {
      return Boolean(self.getMoments(...args));
    },
    
    getCurrentSavedMoment(...args) {
      return self.getMoments(...args)[self.currentIndexSavedMoment];
    }
  }))
  .actions(self => {
    return {
      setTextForTranslate(text) {
        text = text.trim();
        
        if (text) {
          self.textForTranslateHistory.push(text);
        }
        
        self.textForTranslate = text;
      },
      
      addMoment({ serial_id, episode_id, sub_id }) {
        const key = getKey(serial_id, episode_id);
        const data = self.moments_sub.get(key);
        
        if (!data) {
          self.moments_sub.set(key, [sub_id]);
        } else {
          self.moments_sub.set(key, data.concat(sub_id))
        }
      },
      
      setCurrentIndexSavedMoment(index) {
        self.currentIndexSavedMoment = index;
      }
    };
  });

export const DataModelDefaultData = {
  textForTranslate: '',
  currentIndexSavedMoment: 0,
  textForTranslateHistory: [],
  moments_sub: {}
};

function getKey(serial_id, episode_id) {
  return `${serial_id}__${episode_id}`;
}
