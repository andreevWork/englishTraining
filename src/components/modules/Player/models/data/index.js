import { types } from 'mobx-state-tree';

export const DataModel = types
  .model('Player', {
    textForTranslate: types.string
  })
  .actions(self => {
    return {
      setTextForTranslate(text) {
        self.textForTranslate = text;
      }
    };
  });

export const DataModelDefaultData = {
  textForTranslate: ''
};
