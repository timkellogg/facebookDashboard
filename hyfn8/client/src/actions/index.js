import { FETCH_DATA } from './types';
import axios from 'axios';

export function fetchData() {
  // TODO: add error handling as a separate dispatch action
  // will requiring the redux-thunk middleware
  const response = axios.get('http://localhost:3090/facebook')
    .catch((err) => { console.warn(err); });

  return {
    type: FETCH_DATA,
    payload: response
  }
}
