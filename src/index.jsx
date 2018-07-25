import * as React from "react";
import * as ReactDOM from "react-dom";
import { history } from "react-router";
import { Router, Route } from "react-router-dom";
import { Provider } from "mobx-react";
import createBrowserHistory  from 'history/createBrowserHistory';

import './index.sass';
import { Scrollbars } from 'react-custom-scrollbars';
import {Index} from "./components/pages/Index";
import { CommonStore } from './store';
import { Episode } from './components/pages/Episode/Episode';
import { Header } from './components/modules/Header/Header';
import { RightMenu } from './components/modules/RightMenu/RightMenu';

const myHistory = createBrowserHistory();

function getEpisodeIdFromPath(path) {
  const matches = path.match(/^\/episode\/(\d)$/);
  
  return matches && +matches[1];
}

myHistory.listen(({ pathname }) => {
  const episodeId = getEpisodeIdFromPath(pathname);
  
  if (episodeId) {
    CommonStore.episodes.setCurrentId(episodeId);
  }
});

const episodeId = getEpisodeIdFromPath(myHistory.location.pathname);

if (episodeId) {
  CommonStore.episodes.setCurrentId(episodeId);
}

ReactDOM.render(
  <Provider episodes={CommonStore.episodes} saveData={CommonStore.saveData}>
    <Router history={myHistory}>
      <React.Fragment>
        <Header />
  
        <RightMenu />
  
        <Scrollbars
          style={{
            height: 'calc(100vh - 90px)'
          }}
          autoHide
        >
          <div style={{ padding: '0 40px 40px' }}>
            <Route exact path="/" component={Index} />
  
            <Route path="/episode/:id" component={Episode} />
          </div>
        </Scrollbars>
      </React.Fragment>
    </Router>
  </Provider>,
  document.body
);
