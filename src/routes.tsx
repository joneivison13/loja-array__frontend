import * as React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login}/>
        <Route path="/" exact component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;