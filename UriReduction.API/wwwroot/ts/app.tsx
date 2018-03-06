import * as React from "react";
import * as ReactDOM from "react-dom";
import * as redux from "redux";
import {Provider} from "react-redux";
import { App } from "./components/performance/app";

let store:any  =redux.createStore((state: any)=> {
    return state;
});

class A extends React.Component {
    render(): any {
        return <div>eee boy</div>;
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App fullSet ={false} />
    </Provider>
, document.getElementById("content"));