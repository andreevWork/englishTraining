import * as React from "react";

import s from "./RightBottomControls.sass";
import {observer, inject} from "mobx-react";
import { FullScreenIcon } from 'common/Icons/FullScreen/FullScreen';
import { UnFullScreenIcon } from 'common/Icons/UnFullScreen/UnFullScreen';

@inject('player')
@observer
export class RightBottomControls extends React.Component {
    render() {
        return <div className={s.container}>
            {this.props.player.isFullScreen ?
              <UnFullScreenIcon onClick={this.props.player.toogleFullScreen} /> :
              <FullScreenIcon onClick={this.props.player.toogleFullScreen} />}
        </div>;
    }
}
