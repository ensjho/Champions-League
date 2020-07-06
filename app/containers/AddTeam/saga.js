/**
 * Adding new team name (string) to the databse.
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { makeSelectTeamname } from 'containers/AddTeam/selectors';
import { addTeamnameSuccess, addTeamnameError } from './actions';
import { ADD_TEAMNAME } from './constants';

/** Adding new teamname(string) to the database;
 */
export function* addTeamname() {
  // Select username from store

  const requestURL = `http://localhost:3000/api`;

  try {
    const name = yield select(makeSelectTeamname());
    const body = JSON.stringify({ name });

    const result = yield call(request, requestURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    });
    if (result) yield put(addTeamnameSuccess(result));
  } catch (err) {
    yield put(addTeamnameError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* teamnameData() {
  // Watches for ADD_TEAMNAME actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ADD_TEAMNAME, addTeamname);
}
