import * as React from "react";

import s from "./Player.sass";
import {inject} from "mobx-react";
import autobind from 'autobind-decorator';
import {PlayerReactionsAgregator} from "reactions/player/PlayerReactionsAgregator";
import {ProgressBar} from "./controls/ProgressBar/ProgressBar";
import {BottomControls} from "./controls/BottomControls/BottomControls";

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

    @autobind
    onLoadedMetadata() {
        const {duration} = this.videoEl;

        this.props.stores.player.setDuration(duration);
    }

    @autobind
    onTimeUpdate() {
        const {currentTime} = this.videoEl;

        this.props.stores.player.setCurrentTime(currentTime);
    }

    render() {
        return <div className={s.container}>
            <figure className={s.figure}>
                <video
                    ref={el => this.videoEl = el}
                    onLoadedMetadata={this.onLoadedMetadata}
                    onTimeUpdate={this.onTimeUpdate}
                    preload="metadata"
                    className={s.video}
                >
                    <source
                        src={this.props.videoSrc}
                        type="video/mp4"
                    />
                </video>

                <div className={s.controls}>
                    <ProgressBar />
                    <BottomControls />
                </div>
            </figure>
        </div>;
    }
}
