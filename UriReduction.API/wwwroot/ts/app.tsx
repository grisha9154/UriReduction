import * as React from "react";
import * as ReactDOM from "react-dom";
import * as redux from "redux";
import { reduser } from "./redusers";
import {Provider} from "react-redux";
import AppContainer from "./components/containers/appContainer";
import {IProps} from "./components/props";


let store:any  =redux.createStore(reduser,{longUri:"",shortUri:"", fullSet:false});

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>
, document.getElementById("content"));