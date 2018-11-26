import { types, flow } from 'mobx-state-tree';
import {binarySearch} from "utils/arrays/binarySearch";

const SubtitleModel = types.model("Subtitle", {
  startTime: types.number,
  endTime: types.number,
  text: types.string,
});

const SubtitlesCache = {};

export const SubtitlesModel = types
  .model('Subtitles', {
    isPending: types.boolean,
    isReady: types.boolean,
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
        if (self.isPending) {
          return null;
        }
        
        if (SubtitlesCache[subsSrc]) {
          self.subs = SubtitlesCache[subsSrc];
        } else {
          self.isPending = true;
  
          self.subs = yield fetch(subsSrc)
            .then(res => res.json());
  
          SubtitlesCache[subsSrc] = self.subs.peek();
  
          self.isPending = false;
          self.isReady = true;
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
  isReady: false,
  subs: [],
  startIndex: -1,
  maxIndex: -1,
  singleEndIndex: -1,
  index: -1,
  endIndex: -1
};
