import * as React from "react";
import * as ReactDOM from "react-dom";
import thunk from "redux-thunk";
import {combineReducers,createStore,applyMiddleware} from "redux";
import { uriReducer } from "./reducers/index";
import {Provider} from "react-redux";
import AppContainer from "./components/containers/appContainer";
import {IProps} from "./components/props";
import {reducer} from "redux-file-upload";


let reducerRoot:any = combineReducers({uriReducer,fileUpload:reducer});
let store:any=createStore(reducerRoot,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>
, document.getElementById("content"));