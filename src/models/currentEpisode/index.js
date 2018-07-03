import { types } from 'mobx-state-tree';

export const CurrentEpisodeModel = types
  .model("CurrentEpisode", {
    id: types.maybe(types.number)
  })
  .actions(self => {
    return {
      setId(id) {
        self.id = id
      }
    };
  });

export const CurrentEpisodeModelDefaultData = {
  id: null
};
