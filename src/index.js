import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./static/css/index.css";
import App from "./components/App";
import createStore from "./store";

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
