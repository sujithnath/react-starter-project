import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
const MOUNT_NODE = document.getElementById("app");
import { GlobalStyles } from "./globalStyle";

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
