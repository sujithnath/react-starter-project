import React from "react";
import { Switch, Route } from "react-router-dom";

const Home = () => {
  return "HOME";
};

const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  );
};

export default Routes;
