import * as React from 'react';

import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import AddressData from './Pages/SignUp/AddressData';
import PersonalData from './Pages/SignUp/PersonalData';
// import { isAuthenticated } from './services/auth';

// import PrivateRoute from './services/pricateRoute';

const Routes = () => {
  const history = useHistory()
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/products/:id" component={Product}/>
        <Route path="/signup/personal-data" component={PersonalData}/>
        <Route path="/signup/address-data" component={AddressData}/>

        <Route path="/cart" component={Cart}/>
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;