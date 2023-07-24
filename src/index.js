import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import GlobalStyles from "./globalStyles";

import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

//рендер проекта

root.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>
);
