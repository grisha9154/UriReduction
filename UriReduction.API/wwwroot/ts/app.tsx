import * as React from "react";
import * as ReactDOM from "react-dom";
import {combineReducers,createStore,applyMiddleware} from "redux";
import * as thunk from "redux-thunk";
import { uriReducer } from "./reducers/index";
import {Provider} from "react-redux";
import AppContainer from "./components/containers/appContainer";
import {IProps} from "./components/props";
import * as fileUploadReducer from "../node_modules/redux-file-upload/lib/index";

console.log(thunk["default"]);
let reducer:any = combineReducers({uriReducer,fileUpload:fileUploadReducer.reducer});
let store:any=createStore(reducer,applyMiddleware(thunk));
console.log("store",store.getState());

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>
, document.getElementById("content"));