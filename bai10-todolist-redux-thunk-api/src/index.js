import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import reducers from './reducers';
import thunk from 'redux-thunk'
const store = createStore(reducers,applyMiddleware(thunk));
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

