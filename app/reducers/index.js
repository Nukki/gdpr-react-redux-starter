import { combineReducers } from 'redux';
import IPreducer from './reducer_check_ip';

const rootReducer = combineReducers({
  ip: IPreducer
});

export default rootReducer;
