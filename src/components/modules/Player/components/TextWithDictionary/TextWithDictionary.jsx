import React from 'react';
import autobind from "autobind-decorator";
import { inject } from 'mobx-react/index';

@inject('data')
export class TextWithDictionary extends React.Component {
  @autobind
  showTranslate(e) {
    if (!e.target.classList || !e.target.classList.contains('translate')) {
      return;
    }
  
    this.props.data.setTextForTranslate(e.target.textContent);
  }
  
  render() {
    const {text} = this.props;
    
    const newText = text.replace(/(?:^|\s)(\w+?)(?=[$,!?.\s])/gi, word => `<span class="translate">${word}</span>`);
  
    return <div dangerouslySetInnerHTML={{ __html: newText }} onClick={this.showTranslate} />;
  }
}
