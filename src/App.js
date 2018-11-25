import React from "react";
import { Provider } from "react-redux";
import Home from "./components/home";
import configureStore from "./config/store";

import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";

const initialState = window.__INITIAL_STATE__ || {
  firebase: { authError: null }
};
const store = configureStore(initialState);

export default () => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
);
