import React from 'react';
import autobind from 'autobind-decorator';
import {observer, inject} from "mobx-react";

import s from './SrcInput.sass';

@inject('player')
@observer
export class SrcInput extends React.Component {
    state = {
        videoSrc: '',
        subsSrc: ''
    };

    @autobind
    onClick() {
        this.props.player.setSrc(this.state);
    }

    onChange(key) {
           return e => {
               this.setState({
                   [key]: e.target.value
               });
           }
    }

    render() {
        return <div className={s.container}>
          <div>
            <input placeholder="Type video src(mp4 only)..."
                   className={s.input} onInput={this.onChange('videoSrc')} type="text"/>
          </div>
          <div>
            <input placeholder="Type subtitles src ..."
                   className={s.input} onInput={this.onChange('subsSrc')} type="text"/>
          </div>
          <div className={s.btn} onClick={this.onClick}>
            WATCH
          </div>
        </div>;
    }
}
