import * as React from "react";
import * as ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { uriReducer } from "./reducers/index";
import { Provider } from "react-redux";
import AppContainer from "./components/containers/appContainer";
import * as fileUploadReducer from "redux-file-upload";
let reducer = combineReducers({ uriReducer, fileUpload: fileUploadReducer.reducer });
let store = createStore(reducer);
console.log("store", store.getState());
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(AppContainer, null)), document.getElementById("content"));
