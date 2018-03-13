import * as React from "react";
import * as ReactDOM from "react-dom";
import * as redux from "redux";
import { reduser } from "./redusers";
import { Provider } from "react-redux";
import AppContainer from "./components/containers/appContainer";
let store = redux.createStore(reduser, { longUri: "", shortUri: "", fullSet: false });
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(AppContainer, null)), document.getElementById("content"));
//# sourceMappingURL=app.js.map