import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import './index.sass';
import {Index} from "./components/pages/Index";
import {Store} from './store';


ReactDOM.render(
    <Provider player={Store.player}>
        <Index />
    </Provider>,
    document.body
);
