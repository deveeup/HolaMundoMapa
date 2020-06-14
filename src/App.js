import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Places from './pages/places';
import './assets/styles/normalize.css';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/places' component={Places} />
      </Switch>
    </HashRouter>
      
  );
};

export default App;