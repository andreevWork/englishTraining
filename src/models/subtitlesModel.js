import { types, flow } from 'mobx-state-tree';
import { Subtitles } from 'services/SubtitleService/SubtitleService';
import {binarySearch} from "utils/arrays/binarySearch";

const SubtitleModel = types.model("Subtitle", {
  startTime: types.number,
  endTime: types.number,
  text: types.string,
});

export const SubtitlesModel = types
  .model('Subtitles', {
    isPending: types.boolean,
    subs: types.array(SubtitleModel),
    index: types.number
  })
  .views(self => ({
    getSub() {
      return self.subs[self.index];
    },
    hasActiveSub() {
      return !!self.getSub();
    }
  }))
  .actions(self => {
    return {
      load: flow(function* (subsSrc) {
        self.isPending = true;
  
        self.subs = yield fetch(subsSrc)
          .then(res => res.text())
          .then(Subtitles.parser);

        self.isPending = false;
      }),
      
      setIndex(timeMs) {
        self.index = binarySearch(self.subs.peek(), timeMs, (sub, time) => {
          return time < sub.startTime ?
            1
            :
            time > sub.endTime ?
              -1
              :
              0;
        }, true);
      }
    };
  });
