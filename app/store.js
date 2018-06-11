import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { checkUserIP } from './actions';


const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export default store;

// Set the ip info at start
store.dispatch(checkUserIP());
