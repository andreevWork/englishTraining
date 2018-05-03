import * as React from "react";

import s from "./LeftBottomControls.sass";
import {observer, inject} from "mobx-react";

@inject('store')
@observer
export class LeftBottomControls extends React.Component {
    render() {
        const {store} = this.props;
        
        return <div className={s.container}>
            <div onClick={store.player.tooglePlay}>
                {store.player.isPaused ? 'play' : 'pause'}
            </div>
            <div onClick={store.startGame}>
              show
            </div>
        </div>;
    }
}
