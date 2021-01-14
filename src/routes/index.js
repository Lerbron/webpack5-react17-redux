import React from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie';

import {routes} from './routes'

function checkIsLogin() {
  return Cookies.get('token') ? true : false
}

const AppRoutes = () => 
  <BrowserRouter>
    <Switch>
      {
        routes.map(route => {
          const {path, exact, auth, component: Component} = route
          return <Route key={path + ''} exact={!!exact} path={path} render={(props) => {
            if (!auth) {
              return <Component {...props} />
            }

            if (checkIsLogin()) {
              return <Component {...props} />
            }
            return (<Redirect to='/login' />)
          }}/>
        })
      }
    </Switch>
  </BrowserRouter>

export default AppRoutes