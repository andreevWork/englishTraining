import { types, flow, getRoot } from 'mobx-state-tree';

const EpisodeModel = types
  .model("Episode", {
    id: types.identifier(types.number),
    title: types.string,
    episode: types.number,
    season: types.number,
  
    posterSrc: types.string,
    videoSrc: types.string,
    subtitleSrc: types.string
  });

export const EpisodesModel = types
  .model('Episodes', {
    currentId: types.number,
    isPending: types.boolean,
    items: types.map(EpisodeModel)
  })
  .views(self => ({
    getCurrentEpisode() {
      return self.items.get(self.currentId);
    }
  }))
  .actions(self => {
    return {
      load: flow(function* () {
        if (self.isPending) {
          return false;
        }
        
        self.isPending = true;
        
        const root = getRoot(self);
        
        self.items = yield fetch(`${process.env.API_HOST}/episodes/${root.serials.currentId}`)
          .then(res => res.json())
          .then(episodes => {
            return episodes.reduce((acc, episode) => {
              const { static_dirname } = root.serials.getCurrentSerial();
              
              acc[episode.id] = episode;
              acc[episode.id].posterSrc = `${process.env.MEDIA_HOST}/${static_dirname}/s${episode.season}/e${episode.episode}/frame.jpg`;
              acc[episode.id].videoSrc = `${process.env.MEDIA_HOST}/${static_dirname}/s${episode.season}/e${episode.episode}/movie.mp4`;
              acc[episode.id].subtitleSrc = `${process.env.MEDIA_HOST}/${static_dirname}/s${episode.season}/e${episode.episode}/subs.json`;
              
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
  isPending: false,
  items: {}
};
