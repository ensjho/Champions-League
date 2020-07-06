import {
  LOAD_TEAMNAMES,
  LOAD_TEAMNAMES_SUCCESS,
  LOAD_TEAMNAMES_ERROR,
} from './constants';

/**
 * Load the team names(strings), triggers root_saga
 *
 * @return {object} An action object with a type of LOAD_TEAMNAMES
 */
export function loadTeamNames() {
  return {
    type: LOAD_TEAMNAMES,
  };
}

/**
 * When api call in getTeamNames is successful;
 *
 * @param  {string} names loaded data (array of strings) from API
 *
 * @return {object} An action object with a type of LOAD_TEAMNAMES_SUCCESS and names: [...strings];
 */

export function loadTeamNamesSucess(names) {
  return {
    type: LOAD_TEAMNAMES_SUCCESS,
    names,
  };
}

/**
 * When api call in getTeamNames is not successful and catches an error
 *
 * @param  {object} error
 *
 * @return {object} An action object with a type of LOAD_TEAMNAMES_ERROR, and error;
 */

export function loadTeamNamesError(error) {
  return {
    type: LOAD_TEAMNAMES_ERROR,
    error,
  };
}
