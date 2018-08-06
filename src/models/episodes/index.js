import { types, flow } from 'mobx-state-tree';

const SerialModel = types
  .model("Serial", {
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
  .model('Episodes', {
    currentId: types.number,
    isPending: types.boolean,
    items: types.map(EpisodeModel),
    savedMoments: types.map(types.array(types.number))
  })
  .views(self => ({
    getCurrentSavedMoments() {
      const savedMoments = self.savedMoments.get(self.currentId);
      
      return savedMoments && savedMoments.peek() || null;
    }
  }))
  .actions(self => {
    return {
      load: flow(function* () {
        if (self.isPending) {
          return false;
        }
        
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
      },
  
      saveMoment({ episode_id, sub_id }) {
        let data = self.savedMoments.get(episode_id);
        
        if (data) {
          data = data.filter(id => id !== sub_id).concat(sub_id);
        } else {
          data = [sub_id];
        }
    
        self.savedMoments.set(episode_id, data);
      }
    };
  });

export const EpisodesModelDefaultData = {
  currentId: -1,
  isPending: false,
  items: {},
  savedMoments: {}
};
