import React from 'react';
import * as Dragula from 'dragula';
import {observer, inject} from "mobx-react";
import s from './RightOrder.sass';
import { shuffle } from 'utils/arrays/shuffle';
import { RepeatSubtitlesIcon } from 'common/Icons/RepeatSubtitles/RepeatSubtitles';
import { Scrollbars } from 'react-custom-scrollbars';

@inject('store', 'subtitles')
@observer
export class RightOrder extends React.Component {
  containersRefs = [];
  // Необходимо запоминать рандом, чтобы он не сбрасывался
  shuffleCache = {};
  dragulaInstance;
  
  state = {
    resolved: []
  };
  
  componentDidMount() {
    this.startDrag();
  }
  
  componentDidUpdate() {
    this.startDrag();
  }
  
  startDrag() {
    if (this.dragulaInstance) {
      this.dragulaInstance.destroy();
    }
    
    this.dragulaInstance = Dragula(this.containersRefs, {
      direction: 'horizontal',
      accepts(el, target, source) {
        return target === source;
      }
    });
  
    this.dragulaInstance.on('dragend', el => {
      const target = el.closest('[data-index-sub]');
      const subIndex = +target.dataset.indexSub;
      const templateText = this.getText(subIndex).replace(/\s+/g, '');
      let resultText = '';
      
      for (const node of target.childNodes) {
        resultText += node.textContent;
      }
  
      if (templateText === resultText) {
        this.dragulaInstance.destroy();
        this.setState({
          resolved: this.state.resolved.concat(subIndex)
        })
      }
    });
  }
  
  getRef(index) {
    if (this.containersRefs[index]) {
      return this.containersRefs[index]
    }
    
    return ref => this.containersRefs[index] = ref;
  }
  
  getText(index) {
    const {subtitles: subs} = this.props;
  
    return subs.getSub(index).text
      .replace(/[-,.!?]/g, '');
  }
  
  componentWillUpdate() {
    this.containersRefs = [];
  }
  
  renderDragContainer(subIndex) {
    const {subtitles: subs} = this.props;
    
    if (!this.shuffleCache[subIndex]) {
      this.shuffleCache[subIndex] = shuffle(this.getText(subIndex)
        .split(/\s+/)
        .filter(Boolean));
    }
  
    return <React.Fragment>
      <div
        className={s.drag}
        key={subIndex}
        ref={this.getRef(subIndex)}
        data-index-sub={subIndex}
      >
        {this.shuffleCache[subIndex].map((word, index) => <div key={`${word}__${index}`} className={s.word}>
          {word}
        </div>)}
      </div>
      {subs.endIndex - subs.startIndex > 0 && <RepeatSubtitlesIcon
        onClick={this.props.store.repeatSingeTime.bind(null, subIndex)}
        className={s.repeat}
      />}
    </React.Fragment>;
  }
  
  render() {
    const {subtitles: subs} = this.props;
    const subsIndexArray = Array(subs.endIndex - subs.startIndex + 1).fill(0).map((_, i) => i + subs.startIndex);
  
    return <Scrollbars
        style={{
          height: '100%'
        }}
        autoHide
      >
        {subsIndexArray.map(subIndex => <div key={subIndex} className={s.subContainer}>
          {this.state.resolved.includes(subIndex) ?
            <div className={s.text}>{this.getText(subIndex)}</div> :
            this.renderDragContainer(subIndex)
          }
        </div>)}
      </Scrollbars>;
  }
  
  componentWillUnmount() {
    this.dragulaInstance.destroy();
  }
}
