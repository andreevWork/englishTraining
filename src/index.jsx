import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import {Player} from "./components/Player/Player";
import {PlayerModel} from "./models/player/player";

ReactDOM.render(<Provider player={PlayerModel.create()}>
    <Player />
</Provider>, document.body);
