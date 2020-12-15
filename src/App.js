import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import routes from './Config/routes';

import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          {routes.map((route, index) => (
              <RouteWithSubRoutes key={index} {...route} />
            ))}
        </Switch>
      </Router>
    </>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route 
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={route.routes} {...props}/>}
    />
  ) 
}


export default App;


