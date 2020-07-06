/**
 * Home selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeTeamNamesSelector = () =>
  createSelector(
    selectHome,
    substate => substate.teamNames,
  );

export { selectHome, makeTeamNamesSelector };
