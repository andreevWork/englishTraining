import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import './index.sass';
import { CommonStore } from './store';
import { RootRouter } from './router';

ReactDOM.render(
  <Provider episodes={CommonStore.episodes} serials={CommonStore.serials}>
    <RootRouter />
  </Provider>,
  document.body
);
