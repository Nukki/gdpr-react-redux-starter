import { CHECK_IP } from '../actions';

export default function(state = null, action) {
  switch(action.type) {
    case CHECK_IP:
      return action.payload;
    default:
      return state;
  }
}
