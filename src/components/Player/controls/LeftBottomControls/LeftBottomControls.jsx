import * as React from "react";

import s from "./LeftBottomControls.sass";

export class LeftBottomControls extends React.PureComponent {
    render() {
        return <div className={s.container}>
            <div>
                play / pause
            </div>
        </div>;
    }
}
