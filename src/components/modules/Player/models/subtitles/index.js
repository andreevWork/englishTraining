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
    singleEndIndex: types.number,
    maxIndex: types.number,
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
        
        if (Subtitles.cache[subsSrc]) {
          self.subs = Subtitles.cache[subsSrc];
        } else {
          self.isPending = true;
          self.subs = yield fetch(`${process.env.MEDIA_HOST}${subsSrc}`)
            .then(res => res.text())
            .then(text => Subtitles.parser(subsSrc, text));
          self.isPending = false;
        }
        
        self.maxIndex = self.subs.length - 1;
      }),
      
      setStartIndex(startIndex) {
        self.startIndex = startIndex;
      },
      
      setEndIndex(endIndex) {
        self.endIndex = endIndex;
      },
      
      setIndex(index) {
        self.index = index;
      },
      
      setSingleEndIndex(singleEndIndex) {
        self.singleEndIndex = singleEndIndex;
      }
    };
  });

export const SubtitlesModelDefaultData = {
  isPending: false,
  subs: [],
  startIndex: -1,
  maxIndex: -1,
  singleEndIndex: -1,
  index: -1,
  endIndex: -1
};
