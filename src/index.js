import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
const MOUNT_NODE = document.getElementById("app");

if (module && module.hot) {
  module.hot.accept();
}

const Render = () => (
  <>
    HEADER
    <Router>
      <Routes />
    </Router>
  </>
);

ReactDOM.render(<Render />, MOUNT_NODE);
