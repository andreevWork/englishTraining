import * as React from "react";
import {LeftBottomControls} from "./LeftBottomControls/LeftBottomControls";
import {RightBottomControls} from "./RightBottomControls/RightBottomControls";

import s from "./BottomControls.sass";

export class BottomControls extends React.Component {
    render() {
        return <div className={s.bottomControls}>
            <LeftBottomControls />
            <RightBottomControls />
        </div>;
    }
}
