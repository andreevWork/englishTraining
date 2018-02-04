import * as React from "react";
import {LeftBottomControls} from "./controls/LeftBottomControls/LeftBottomControls";

import s from "./Player.sass";

export class Player extends React.PureComponent {
    render() {
        return <figure className={s.figure}>
            <video preload="metadata" className={s.video}>
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
