import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.js";
import reportWebVitals from "./reportWebVitals.js";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware, compose, combineReducers } from "redux";
import { uiReducer } from "./reducers/uiReducer.js";
import thunk from "redux-thunk";
import { Map } from "immutable";
import { rootReducer, initialState } from "./reducers/rootReducer.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers(rootReducer), initialState, composeEnhancers(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
