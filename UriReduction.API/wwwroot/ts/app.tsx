import * as React from "react";
import {render} from "react-dom";
import thunk from "redux-thunk";
import {combineReducers,createStore,applyMiddleware,Middleware} from "redux";
import { uriReducer } from "./reducers/index";
import {Provider} from "react-redux";
import AppContainer from "./components/containers/appContainer";
import fileUploadReducer from "./reducers/fileUploadReducer";
import accountReducer from "./reducers/accountReducer";
import { ConnectedRouter,routerReducer, routerMiddleware} from "react-router-redux";
import {createBrowserHistory, History} from "history";

const history:History = createBrowserHistory();

const historyMiddleware:Middleware = routerMiddleware(history);

let reducerRoot:any = combineReducers({uriReducer,fileUpload:fileUploadReducer,accountReducer,router:routerReducer});

let store:any=createStore(reducerRoot,{
    uriReducer:{longUri:"", shortUri:"", fullSet:false},
    accountReducer:{userName:"", signIn:false}},
    applyMiddleware(thunk,historyMiddleware));

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppContainer />
        </ConnectedRouter>
    </Provider>
, document.getElementById("content"));