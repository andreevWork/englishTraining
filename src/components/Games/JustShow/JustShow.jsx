import React from 'react';
import {observer, inject} from "mobx-react";
import s from './JustShow.sass';

@inject('subtitles')
@observer
export class JustShow extends React.Component {
  
  render() {
    return <div className={s.wrap}>
      {this.props.subtitles.getSub().text}
    </div>;
  }
}
