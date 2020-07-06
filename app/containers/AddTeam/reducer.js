/*
 * AddTeam Reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  CHANGE_TEAMNAME,
  ADD_TEAMNAME,
  ADD_TEAMNAME_SUCCESS,
  ADD_TEAMNAME_ERROR,
  RESET_MESSAGES,
} from './constants';

// The initial state of the App
export const initialState = {
  teamname: '',
  loading: false,
  error: false,
  successmessage: '',
  errormessage: '',
};

/* eslint-disable default-case, no-param-reassign */
const addTeamnameReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_TEAMNAME:
        draft.teamname = action.teamname;
        break;

      case ADD_TEAMNAME:
        draft.loading = true;
        draft.error = false;
        break;

      case ADD_TEAMNAME_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.successmessage = action.message;
        break;

      case ADD_TEAMNAME_ERROR:
        draft.loading = false;
        draft.error = action.error;
        draft.errormessage = action.error.message;
        break;

      case RESET_MESSAGES:
        draft.errormessage = '';
        draft.successmessage = '';
        break;
    }
  });

export default addTeamnameReducer;
