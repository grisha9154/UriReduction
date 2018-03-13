import * as React from "react";
import * as ReactDOM from "react-dom";
<<<<<<< HEAD
import * as redux from "redux";
import { reduser } from "./redusers";
import { Provider } from "react-redux";
import AppContainer from "./components/containers/appContainer";
let store = redux.createStore(reduser, { longUri: "", shortUri: "", fullSet: false });
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(AppContainer, null)), document.getElementById("content"));
//# sourceMappingURL=app.js.map
=======
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
>>>>>>> 8c937d476960c0b1526b013489c05ec8b00811f9
