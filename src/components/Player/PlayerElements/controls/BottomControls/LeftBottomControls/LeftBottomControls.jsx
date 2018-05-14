import * as React from "react";

import s from "./LeftBottomControls.sass";
import { TogglePlay } from 'player/CommonElements/TogglePlay/TogglePlay';

export class LeftBottomControls extends React.Component {
  render() {
    return <div className={s.container}>
        <TogglePlay />
    </div>;
  }
}
