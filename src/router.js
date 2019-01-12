import * as React from "react";
import { history } from "react-router";
import { Router, Route } from "react-router-dom";
import createBrowserHistory  from 'history/createBrowserHistory';

import {Index} from "./components/pages/Index/Index";
import { CommonStore } from './store';
import { Serial } from './components/pages/Serial/Serial';
import { Header } from './components/modules/Header/Header';
import Path from 'path-parser'
import { HistoryTranslate } from './components/pages/HistoryTranslate/HistoryTranslate';

const myHistory = createBrowserHistory();
const serialPath = "/serial/:id/";

const serialPathChecker = pathname => {
  const { id } = Path.createPath(serialPath).partialTest(pathname) || {};

  id && CommonStore.serials.setCurrentId(+id);
};

const routerChecker = () => {
  serialPathChecker(myHistory.location.pathname);
};

routerChecker();
myHistory.listen(routerChecker);

export const RootRouter = () => <Router history={myHistory}>
  <React.Fragment>
    <Header />
    
    <Route exact path="/" component={Index} />
    
    <Route exact path="/history/translate" component={HistoryTranslate} />
    
    <Route path={serialPath} exact component={Serial} />
  </React.Fragment>
</Router>;
