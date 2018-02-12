import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import {PlayerModel} from "./models/player/playerModel";

import './index.sass';
import {Index} from "./components/pages/Index";


ReactDOM.render(<Provider player={PlayerModel.create()}>
    <Index />
</Provider>, document.body);

// http://88.150.178.202/video3/W1D1jaa-LnbRtn0XCmN86g/1518503160/rickandmorty/3/sienduk/302.mp4
