import React from 'react';
import {observer, inject} from "mobx-react";

import {Player} from "../../Player/Player";
import {SrcInput} from "../../SrcInput/SrcInput";

@inject('player')
@observer
export class Index extends React.Component {
    render() {
        return this.props.player.videoSrc ?
            <Player videoSrc={this.props.player.videoSrc} />
            :
            <SrcInput />;
    }
}
