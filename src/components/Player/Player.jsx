import * as React from "react";
import {LeftBottomControls} from "./controls/LeftBottomControls/LeftBottomControls";

import s from "./Player.sass";
import {inject} from "mobx-react";
import {PlayerReactionsAgregator} from "reactions/player/PlayerReactionsAgregator";
import {RightBottomControls} from "./controls/RightBottomControls/RightBottomControls";

@inject(stores => ({stores}))
export class Player extends React.PureComponent {
    videoEl;
    playerReactionsAgregator;

    componentDidMount() {
        this.playerReactionsAgregator = new PlayerReactionsAgregator(
            this.props.stores,
            this.videoEl
        );

        this.playerReactionsAgregator.run();
    }

    componentWillUnmount() {
        this.playerReactionsAgregator.destroy();
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
                <RightBottomControls />
            </div>
        </figure>;
    }
}
