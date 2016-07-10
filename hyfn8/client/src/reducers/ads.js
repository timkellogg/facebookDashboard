import { FETCH_DATA } from '../../src/actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_DATA:
      // TODO: clean up serverside namespacing on payload object
      return { ...state, data: action.payload.data.data };
  }

  return state;
}