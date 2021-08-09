import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Store from "./Store";


const Routes = () => {
  return (
    <HashRouter>
      <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/store" component={Store} />
      
      </Switch>
    </HashRouter>
  );
};

export default Routes;