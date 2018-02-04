import * as React from "react";
import {LeftBottomControls} from "./controls/LeftBottomControls/LeftBottomControls";

import s from "./Player.sass";
import {autorun} from "mobx";
import {inject} from "mobx-react";

@inject('player')
export class Player extends React.PureComponent {

    videoEl;

    componentDidMount() {
        autorun(() => {
            if(this.props.player.isPaused) {
                this.videoEl.pause();
            } else {
                this.videoEl.play();
            }
        });
    }

    render() {
        return <figure className={s.figure}>
            <video ref={el => this.videoEl = el} preload="metadata" className={s.video}>
                <source
                    src="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4"
                    type="video/mp4"
                />
            </video>
            <div className={s.bottomControls}>
                <LeftBottomControls />
            </div>
        </figure>;
    }
}
