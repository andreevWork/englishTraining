import React from 'react';
import { inject } from 'mobx-react';
import s from "./HistoryTranslate.sass";


@inject('data')
export class HistoryTranslate extends React.PureComponent {
  render() {
    return <div>
      {this.props.data.textForTranslateHistory.map(word => <div className={s.container}>
        <div className={s.word}>
          {word}
        </div>
        <div className={s.links}>
          <a target="_blank" href={`https://www.babla.ru/английский-русский/${word}`}>babla.ru</a>
          <a target="_blank" href={`https://context.reverso.net/перевод/английский-русский/${word}`}>context.reverso.net</a>
          <a target="_blank" href={`https://en.oxforddictionaries.com/definition/${word}`}>oxforddictionaries.com</a>
        </div>
      </div>)}
    </div>;
  }
}
