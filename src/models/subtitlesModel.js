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
    startIndex: types.number,
    index: types.number,
    endIndex: types.number
  })
  .views(self => ({
    getSub(index = self.index) {
      return self.subs[index];
    },
    hasActiveSub() {
      return !!self.getSub();
    },
    getIndexByTime(timeMs) {
      return binarySearch(self.subs.peek(), timeMs, (sub, time) => {
        return time < sub.startTime ?
          1
          :
          time > sub.endTime ?
            -1
            :
            0;
      });
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
      
      setStartIndex(startIndex) {
        self.startIndex = startIndex;
      },
      
      setEndIndex(endIndex) {
        self.endIndex = endIndex;
      },
  
      // Сделано так, чтобы отображались индекс от 1, а не от нуля #humanIndex
      setStartIndexFromHuman(startIndex) {
        self.setStartIndex(startIndex - 1);
      },
  
      setEndIndexFromHuman(endIndex) {
        self.setEndIndex(endIndex - 1);
      },
      
      setIndex(index) {
        self.index = index;
      }
    };
  });
