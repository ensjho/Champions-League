/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAddTeam = state => state.AddTeam || initialState;

const makeSelectTeamname = () =>
  createSelector(
    selectAddTeam,
    AddTeamState => AddTeamState.teamname,
  );

const makeSelectLoading = () =>
  createSelector(
    selectAddTeam,
    teamnameState => teamnameState.loading,
    teamnameState => teamnameState.successmessage,
  );

const makeSelectError = () =>
  createSelector(
    selectAddTeam,
    teamnameState => teamnameState.error,
    teamnameState => teamnameState.errormessage,
  );

export {
  selectAddTeam,
  makeSelectTeamname,
  makeSelectLoading,
  makeSelectError,
};
