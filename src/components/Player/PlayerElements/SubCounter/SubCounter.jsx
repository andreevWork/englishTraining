import React from 'react';
import {observer, inject} from "mobx-react";
import s from './SubCounter.sass';

@inject('subtitles')
@observer
export class SubCounter extends React.Component {
  render() {
    return this.props.subtitles.hasActiveSub() && <div className={s.counter}>
      {this.props.subtitles.index + 1} / {this.props.subtitles.subs.length}
    </div>;
  }
}
