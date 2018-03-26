import * as React from "react";
import { render } from "react-dom";
import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware, Middleware, Reducer, Store } from "redux";
import { uriReducer } from "./reducers/uriReducre";
import { Provider } from "react-redux";
import AppContainer from "./components/containers/appContainer";
import fileUploadReducer from "./reducers/fileUploadReducer";
import accountReducer from "./reducers/accountReducer";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import { createBrowserHistory, History } from "history";
import { ajax } from "jquery";

ajax({
        url: "/confirmloginin",
        method: "GET",
        contentType: "application/json",
        success: (result: {userName: string, loginIn: boolean}) => {
            const history: History = createBrowserHistory();

            const historyMiddleware: Middleware = routerMiddleware(history);

            let reducerRoot: Reducer<{}> = combineReducers({ uriReducer, 
                                                            fileUpload: fileUploadReducer, 
                                                            accountReducer, 
                                                            router: routerReducer});
            let store: Store<{}> = createStore(reducerRoot, {
                    uriReducer: {
                        longUri: "", 
                        shortUri: "", 
                        fullSet: false},
                    accountReducer: {
                        userName: result.userName, 
                        signIn: result.loginIn}},
                    applyMiddleware(thunk, historyMiddleware));

            render(
                    <Provider store={store}>
                        <ConnectedRouter history={history}>
                            <AppContainer />
                        </ConnectedRouter>
                    </Provider>
                , document.getElementById("content"));
                    }
    });