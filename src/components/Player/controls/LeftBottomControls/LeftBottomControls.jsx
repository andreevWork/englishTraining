import * as React from "react";

import s from "./LeftBottomControls.sass";
import {observer, inject} from "mobx-react";

@inject('player')
@observer
export class LeftBottomControls extends React.Component {
    render() {
        return <div className={s.container}>
            <div onClick={() => this.props.player.tooglePlay()}>
                {this.props.player.isPaused ? 'play' : 'pause'}
            </div>
        </div>;
    }
}
