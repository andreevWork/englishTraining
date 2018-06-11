import * as React from "react";

import s from "./RightBottomControls.sass";
import {observer, inject} from "mobx-react";
import { FullScreenIcon } from 'common/Icons/FullScreen/FullScreen';
import { UnFullScreenIcon } from 'common/Icons/UnFullScreen/UnFullScreen';
import { WithKey } from 'common/WithKey/WithKey';

@inject('player')
@observer
export class RightBottomControls extends React.Component {
    render() {
        return <div className={s.container}>
          <WithKey withMargin name="F" action={this.props.player.toogleFullScreen}>
            {this.props.player.isFullScreen ? <UnFullScreenIcon /> : <FullScreenIcon />}
          </WithKey>
        </div>;
    }
}
