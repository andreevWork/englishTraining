import { types } from 'mobx-state-tree';

const SaveSubtitleModel = types
  .model("SaveSubtitle", {
    subs_ids: types.array(types.number)
  });

export const SaveModel = types
  .model("Save", {
    subs: types.map(SaveSubtitleModel)
  })
  .actions(self => {
    return {
      saveSub({ episode_id, sub_id }) {
        const data = self.subs.get(episode_id);
  
        self.subs.set(episode_id, {
          subs_ids: data ? data.subs_ids.concat(sub_id) : [sub_id]
        });
      }
    }
  });

export const SaveModelDefaultData = {
  subs: {}
};
