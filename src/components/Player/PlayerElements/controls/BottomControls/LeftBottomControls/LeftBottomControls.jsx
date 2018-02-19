import * as React from "react";

import s from "./LeftBottomControls.sass";
import {observer, inject} from "mobx-react";

@inject('player')
@observer
export class LeftBottomControls extends React.Component {
    render() {
        const {player} = this.props;

        return <div className={s.container}>
            <div onClick={() => player.tooglePlay()}>
                {player.isPaused ? 'play' : 'pause'}
            </div>
        </div>;
    }
}
