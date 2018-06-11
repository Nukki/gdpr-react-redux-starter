import axios from 'axios';

// action types
export const CHECK_IP = 'CHECK_IP';



// action creators
export function gotIP(ipData) {
  return {
    type: CHECK_IP,
    payload: ipData
  }
}

// thunks
export const checkUserIP = () => dispatch => {
   axios.get('/api')
   .then(res => dispatch(gotIP(res.data)))
   .catch( (err) => console.error(err));

};
