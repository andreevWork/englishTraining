import { types, flow } from 'mobx-state-tree';

const SerialModel = types
  .model("Serial", {
    id: types.identifier(types.number),
    title: types.string,
    static_dirname: types.string,
    description: types.union(types.string, types.null),
    
    posterSrc: types.string
  });

export const SerialsModel = types
  .model('Serials', {
    currentId: types.number,
    isPending: types.boolean,
    items: types.map(SerialModel)
  })
  .actions(self => {
    return {
      load: flow(function* () {
        if (self.isPending) {
          return false;
        }
        
        self.isPending = true;
        
        self.items = yield fetch(`${process.env.API_HOST}/serials`)
          .then(res => res.json())
          .then(serialsList => {
            return serialsList.reduce((acc, serial) => {
              acc[serial.id] = serial;
              acc[serial.id].posterSrc = `${process.env.MEDIA_HOST}/${serial.static_dirname}/poster.jpg`;
              
              return acc;
            }, {})
          });
        
        self.isPending = false;
      }),
  
      setCurrentId(id) {
        self.currentId = id;
      },
    };
  });

export const SerialsModelDefaultData = {
  currentId: -1,
  isPending: false,
  items: {}
};
