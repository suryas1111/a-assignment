import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from 'redux-thunk';
import Contacts from './containers/ContactListCard/ContactCardList';

import App from "./containers/App/App";
import reducers from "./redux/reducers/index";

import { Route, BrowserRouter as Router ,Switch} from 'react-router-dom'

ReactDOM.render(
  <Provider store={createStore(reducers,applyMiddleware(thunk))}>
    <Router>
      <Switch>
        <Route path="/contacts" component={Contacts} /> 
        <Route path="/" component={App} />
        
      </Switch>
  </Router>
  </Provider>,
  document.getElementById('root')
);
