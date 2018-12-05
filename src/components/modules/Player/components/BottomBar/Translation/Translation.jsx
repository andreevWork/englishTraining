import React from 'react';
import autobind from 'autobind-decorator';
import s from './Translation.sass';
import { inject, observer } from 'mobx-react/index';

@inject('subtitles')
@observer
export class Translation extends React.Component {
  
  state = {
    isPending: true,
    result: null
  };
  
  componentDidMount() {
    const {textForTranslate} = this.props;
    
    fetch(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20181204T195530Z.2e595bc03e27d7d6.1c086169f5a002499d44f236cb487f14200d95c2&lang=en-ru&text=${textForTranslate}`)
      .then(result => result.json())
      .then(result => {
        this.setState({
          isPending: false,
          result: result.def
        });
      });
  }
  
  @autobind
  renderWord({ text, pos, tr }) {
    return <div className={s.word}>
      <div className={s.title}>
        <b>{text}</b> <i>{pos}</i>
      </div>
      
      <ul className={s.translationOptionsContent}>
        {tr.map(({ text, ex }) => <li>
          <b>{text}</b>
    
          {ex && <div className={s.examples}>
            {ex.map(({ text, tr }) => <div>
              {text} - {tr.map(({ text }) => text).join(';')}
            </div>)}
          </div>}
  
        </li>)}
      </ul>
    </div>
  }
  
  renderTranslate()  {
    const {result} = this.state;
    
    return <React.Fragment>
      <div className={s.sub} dangerouslySetInnerHTML={{ __html: this.props.subtitles.getSub().text.replace(this.props.textForTranslate, '<b>$&</b>') }} />
      {result.map(this.renderWord)}
    </React.Fragment>
  }
  
  render() {
    const {isPending} = this.state;
  
    return isPending ? null : <div className={s.container}>
      {this.renderTranslate()}
    </div>;
  }
}
