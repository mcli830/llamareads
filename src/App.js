import React from "react";
import { Provider } from "react-redux";
import configureStore from "./functions/configurations/store";
import Router from "./screens/router"

const initialState = window.__INITIAL_STATE__ || {
  firebase: { authError: null }
};
const store = configureStore(initialState);

export default () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
