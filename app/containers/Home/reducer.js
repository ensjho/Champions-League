/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_TEAMNAMES,
  LOAD_TEAMNAMES_SUCCESS,
  LOAD_TEAMNAMES_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  teamNames: [],
  loading: false,
  error: true,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_TEAMNAMES:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_TEAMNAMES_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.teamNames = action.names;
        break;

      case LOAD_TEAMNAMES_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default homeReducer;
