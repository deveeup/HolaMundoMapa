import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { PathRoutes } from './constants';
import Home from './pages/home';
import Places from './pages/places';
import NoFound from './pages/noFound';
import './assets/styles/normalize.css';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={PathRoutes.MAIN} component={Home} exact />
        <Route path={PathRoutes.PLACES} component={Places} exact/>
        <Route component={NoFound} />
      </Switch>
    </HashRouter>
      
  );
};

export default App;