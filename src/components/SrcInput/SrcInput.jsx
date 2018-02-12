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
            <div className={s.content}>
                <div>
                    <label>
                        Video:
                        <input onInput={this.onChange('videoSrc')} type="text"/>
                    </label>
                </div>
                <div>
                    <label>
                        Subs:
                        <input onInput={this.onChange('subsSrc')} type="text"/>
                    </label>
                </div>
                <button onClick={this.onClick}>
                    Go
                </button>
            </div>
        </div>;
    }
}
