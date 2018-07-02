import * as React from "react";
import * as ReactDOM from "react-dom";
import { history } from "react-router";
import { Router, Route } from "react-router-dom";
import { Provider } from "mobx-react";
import createBrowserHistory  from 'history/createBrowserHistory';

import './index.sass';
import {Index} from "./components/pages/Index";
import { CommonStore } from './store';
import { Episode } from './components/pages/Episode/Episode';
import { Header } from './components/modules/Header/Header';

const myHistory = createBrowserHistory();

function getEpisodeIdFromPath(path) {
  const matches = path.match(/^\/episode\/(\d)$/);
  
  return matches && +matches[1];
}

myHistory.listen(({ pathname }) => {
  const episodeId = getEpisodeIdFromPath(pathname);
  
  if (episodeId) {
    CommonStore.currentEpisode.setId(episodeId);
  }
});

const episodeId = getEpisodeIdFromPath(myHistory.location.pathname);

if (episodeId) {
  CommonStore.currentEpisode.setId(episodeId);
}

ReactDOM.render(
  <Provider common={CommonStore} serials={CommonStore.serials}>
    <Router history={myHistory}>
      <React.Fragment>
        <Header />
        
        <Route exact path="/" component={Index} />
        
        <Route path="/episode/:id" component={Episode} />
      </React.Fragment>
    </Router>
  </Provider>,
  document.body
);
