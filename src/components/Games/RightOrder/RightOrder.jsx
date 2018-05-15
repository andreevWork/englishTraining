import React from 'react';
import * as Dragula from 'dragula';
import {observer, inject} from "mobx-react";
import s from './RightOrder.sass';

@inject('subtitles')
@observer
export class RightOrder extends React.Component {
  containerRef = React.createRef();
  
  componentDidMount() {
    const dragulaInstance = Dragula([this.containerRef.current], {
      direction: 'horizontal'
    });
  }
  
  render() {
    const {subtitles: subs} = this.props;
    
    return <div ref={this.containerRef}>
      {subs.getSub().text
        .split(/\s+/)
        .map((word, index) => <div key={`${word}__${index}`} className={s.word}>
          {word}
        </div>)
      }
    </div>;
  }
}
