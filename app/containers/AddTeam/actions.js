import {
  CHANGE_TEAMNAME,
  ADD_TEAMNAME,
  ADD_TEAMNAME_SUCCESS,
  ADD_TEAMNAME_ERROR,
  RESET_MESSAGES,
} from './constants';

/**
 * Changes the input field of the AddTeam form
 *
 * @param  {string} teamname The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_TEAMNAME, and the teamnname(string);
 */

export function changeTeamname(teamname) {
  return {
    type: CHANGE_TEAMNAME,
    teamname,
  };
}

/**
 * Adding teamname, triggers root saga
 *
 * @return {object} An action object with a type of ADD_TEAMNAME;
 */

export function addTeamname() {
  return {
    type: ADD_TEAMNAME,
  };
}

/**
 * Once the POST method in API call was successful, addTeamnameSuccess is triggered
 *
 * @param  {object} message The response you get from the post request.
 *
 * @return {object} An action object with a type of ADD_TEAMNAME_SUCCESS, and the message(object);
 */
export function addTeamnameSuccess(message) {
  return {
    type: ADD_TEAMNAME_SUCCESS,
    message,
  };
}

/**
 * If the POST method in API call was unsuccessful, addTeamnameError is triggered
 *
 * @param  {error} error.
 *
 * @return {error} An action object with a type of ADD_TEAMNAME_ERROR, and error;
 */
export function addTeamnameError(error) {
  return {
    type: ADD_TEAMNAME_ERROR,
    error,
  };
}

/**
 * Reseting alert messeages rendered after api calls;
 *
 * @return {object} An action object with a type of RESET_MESSAGES
 */
export function resetMessages() {
  return {
    type: RESET_MESSAGES,
  };
}
