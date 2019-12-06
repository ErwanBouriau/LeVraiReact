import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Main';
import Home from './Home'


class Router extends React.Component {

  render () {
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/main' component={ Main } />
      </Switch>
    </BrowserRouter>
    );
  };


};

export default Router;