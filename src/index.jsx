import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import {Player} from "./components/Player/Player";
import {store} from "./store";

ReactDOM.render(<Provider store={store}>
    <Player />
</Provider>, document.body);
