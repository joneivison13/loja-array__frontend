import * as React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/products/:id" component={Product}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;