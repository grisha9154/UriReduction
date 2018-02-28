var React = require("react");
var ReactDOM = require("react-dom");
var redux = require("redux");
var Provider = require("react-redux").Provider;
var reducer = require("./reducer.jsx");
var App = require("./containers/appContainer.jsx");
const Actions = require('./actions.jsx');
require('babel-core/register');
require('babel-polyfill');
 
var store = redux.createStore(reducer,{fullSet:false, longUri:'', shortUri:''});
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("content")
);