import { types } from 'mobx-state-tree';

export const DataModel = types
  .model('Player', {
    textForTranslate: types.string,
    textForTranslateHistory: types.array(types.string),
    moments_sub: types.map(types.array(types.number)),
  })
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
        const key = `${serial_id}__${episode_id}`;
        const data = self.moments_sub.get(key);
        
        if (!data) {
          self.moments_sub.set(key, [sub_id]);
        } else {
          self.moments_sub.set(key, data.concat(sub_id))
        }
      }
    };
  });

export const DataModelDefaultData = {
  textForTranslate: '',
  textForTranslateHistory: [],
  moments_sub: {}
};
