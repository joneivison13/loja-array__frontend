import React from 'react';
import { Redirect, Route } from "react-router-dom"
import { isAuthenticated } from "./auth"

const PrivateRoute = (prop:any) => {
    const {...rest} = prop
    const Component = prop.component

    return (
        <Route
        {...rest}
        render={props =>
          isAuthenticated() ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/login", state: { message:'Faça o Login primeiro' } }} />
          )
        }
      />
    )
}

export default PrivateRoute