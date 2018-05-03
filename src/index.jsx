import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import './index.sass';
import {Index} from "./components/pages/Index";
import {Store} from './store';


ReactDOM.render(
    <Provider
      store={Store}
      player={Store.player}
      subtitles={Store.subtitles}
    >
        <Index />
    </Provider>,
    document.body
);
