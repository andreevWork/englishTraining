import { types, flow } from 'mobx-state-tree';

const SerialModel = types
  .model("Episode", {
    id: types.identifier(types.number),
    title: types.string,
    description: types.union(types.string, types.null)
  });

const EpisodeModel = types
  .model("Episode", {
    id: types.identifier(types.number),
    title: types.string,
    episode: types.number,
    season: types.number,
    
    serial: SerialModel,
    
    previewImageSrc: types.string,
    videoSrc: types.string,
    subtitleSrc: types.string
  });

export const EpisodesModel = types
  .model('Subtitles', {
    currentId: types.number,
    isPending: types.boolean,
    items: types.map(EpisodeModel)
  })
  .actions(self => {
    return {
      load: flow(function* () {
        self.isPending = true;
        
        self.items = yield fetch(`${process.env.API_HOST}/episodes`)
          .then(res => res.json())
          .then(serialsList => {
            return serialsList.reduce((acc, episode) => {
              acc[episode.id] = episode;
              
              return acc;
            }, {})
          });
        
        self.isPending = false;
      }),
  
      setCurrentId(id) {
        self.currentId = id;
      }
    };
  });

export const EpisodesModelDefaultData = {
  currentId: -1,
  isPending: true,
  items: {}
};
