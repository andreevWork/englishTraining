import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import {PlayerModel} from "./models/player/playerModel";

import './index.sass';
import {Index} from "./components/pages/Index";


ReactDOM.render(
    <Provider player={PlayerModel.create()}>
        <Index />
    </Provider>,
    document.body
);
