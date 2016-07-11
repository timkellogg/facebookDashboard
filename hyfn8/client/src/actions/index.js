import { FETCH_DATA } from './types';
import axios from 'axios';

export function fetchData() {
  // TODO: add error handling as a separate dispatch action
  // will requiring the redux-thunk middleware
  const response = axios.get('https://sleepy-temple-18675.herokuapp.com/facebook')
    .catch((err) => { console.warn(err); });

  return {
    type: FETCH_DATA,
    payload: response
  }
}
