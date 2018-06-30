import { types, flow } from 'mobx-state-tree';

const EpisodeModel = types
  .model("Episode", {
    id: types.identifier(types.number),
    title: types.string,
    episode: types.number,
    season: types.number,
    previewImageSrc: types.string,
    videoSrc: types.string,
    subtitleSrc: types.string
  });

export const SerialsModel = types
  .model('Subtitles', {
    isPending: types.boolean,
    items: types.map(EpisodeModel)
  })
  .actions(self => {
    return {
      load: flow(function* () {
        self.isPending = true;
        
        self.items = yield fetch('http://127.0.0.1:5000/serials')
          .then(res => res.json())
          .then(serialsList => {
            return serialsList.reduce((acc, episode) => {
              acc[episode.id] = episode;
              
              return acc;
            }, {})
          });
        
        self.isPending = false;
      })
    };
  });

export const SerialsModelDefaultData = {
  isPending: true,
  items: {}
};
