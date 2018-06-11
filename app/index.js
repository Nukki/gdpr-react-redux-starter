import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import store from './store';

import '../public/style/style.css';
import MainContainer from './components/MainContainer';
import Home from './components/RegularHome';
import EuropeanHome from './components/EuropeanHome';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
         <Route path="/home" component={EuropeanHome} />
         <Route path="/" component={MainContainer} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.querySelector('#root')
);


// <Switch>
//     <Route path="/orders" component={Orders} />
//     <Redirect from="/" to="/orders" />
//     <Route component={NotFound} />
//   </Switch>
