import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { GlobalStyles } from "./globalStyle";
const MOUNT_NODE = document.getElementById("app");

if (module && module.hot) {
  module.hot.accept();
}

const Render = () => (
  <>
    <GlobalStyles />
    <Routes />
  </>
);

ReactDOM.render(<Render />, MOUNT_NODE);
