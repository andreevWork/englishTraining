import * as React from "react";
import { history } from "react-router";
import { Router, Route } from "react-router-dom";
import createBrowserHistory  from 'history/createBrowserHistory';

import {Index} from "./components/pages/Index/Index";
import { CommonStore } from './store';
import { Serial } from './components/pages/Serial/Serial';
import { Header } from './components/modules/Header/Header';
import Path from 'path-parser'
import { Episode } from './components/pages/Episode/Episode';

const myHistory = createBrowserHistory();
const serialPath = "/serial/:id/";
const episodePath = `${serialPath}episode/:id/`;

const serialPathChecker = pathname => {
  const { id } = Path.createPath(serialPath).partialTest(pathname) || {};
  
  id && CommonStore.serials.setCurrentId(+id);
};
const episodePathChecker = pathname => {
  const { id } = Path.createPath(episodePath).partialTest(pathname) || {};

  id && CommonStore.episodes.setCurrentId(+id);
};
const routerChecker = () => {
  serialPathChecker(myHistory.location.pathname);
  episodePathChecker(myHistory.location.pathname);
};

routerChecker();
myHistory.listen(routerChecker);

export const RootRouter = () => <Router history={myHistory}>
  <React.Fragment>
    <Header />
    
    <Route exact path="/" component={Index} />
    
    <Route path={serialPath} exact component={Serial} />
    
    <Route path={episodePath} component={Episode} />
  </React.Fragment>
</Router>;
