import React from 'react';
import * as Dragula from 'dragula';
import {observer, inject} from "mobx-react";
import s from './RightOrder.sass';
import { shuffle } from 'utils/arrays/shuffle';

@inject('subtitles')
@observer
export class RightOrder extends React.Component {
  containersRefs = [];
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
  
  renderDragContainers() {
    const {subtitles: subs} = this.props;
    const dragContainers = [];
    
    this.containersRefs = [];
    
    for(let i = subs.startIndex; i <= subs.endIndex; i++) {
      const subsText = this.getText(i);
  
      if (this.state.resolved.includes(i)) {
        dragContainers.push(<div key={i} className={s.drag}>
          {subsText}
        </div>);
        continue;
      }
      const subsArray = subsText
        .split(/\s+/)
        .filter(Boolean);
      
      dragContainers.push(<div className={s.drag} key={i} ref={this.getRef(i)} data-index-sub={i}>
        {shuffle(subsArray).map((word, index) => <div key={`${word}__${index}`} className={s.word}>
            {word}
          </div>)
        }
      </div>)
    }
  
    return dragContainers;
  }
  
  render() {
    return <div className={s.container}>
      {this.renderDragContainers()}
    </div>;
  }
  
  componentWillUnmount() {
    this.dragulaInstance.destroy();
  }
}
