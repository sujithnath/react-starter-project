import React from "react";
import App from "./containers/App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const Routes = () => (
  <Router>
    <Switch>
      <Provider store={store}>
        <Route path='/' component={App} />
      </Provider>
    </Switch>
  </Router>
);

export default Routes;
