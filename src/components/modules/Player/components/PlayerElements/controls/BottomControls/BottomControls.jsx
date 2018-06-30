import * as React from "react";
import {LeftBottomControls} from "./LeftBottomControls/LeftBottomControls";
import {RightBottomControls} from "./RightBottomControls/RightBottomControls";
import s from "./BottomControls.sass";
import { MiddleBottomControls } from 'player/PlayerElements/controls/BottomControls/MiddleBottomControls/MiddleBottomControls';

export class BottomControls extends React.Component {
    render() {
        return <div className={s.bottomControls}>
          <LeftBottomControls />
  
          <MiddleBottomControls />
          
          <RightBottomControls />
        </div>;
    }
}
