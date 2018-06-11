import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import promise from "redux-promise";
import { checkUserIP } from './actions';
import { createLogger } from 'redux-logger';


const store = createStore(reducer, applyMiddleware(thunkMiddleware,createLogger()));
export default store;

// Set the ip info at start
store.dispatch(checkUserIP());
