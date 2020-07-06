/**
 * Gets the array of strings from the fakeDb
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_TEAMNAMES } from './constants';
import { loadTeamNamesSucess, loadTeamNamesError } from './actions';

/**
 * API call to backend to fetch an array of strings r
 */
export function* getTeamNames() {
  const requestURL = `http://localhost:3000/api/`;

  try {
    const { allTeamNames } = yield call(request, requestURL);
    yield put(loadTeamNamesSucess(allTeamNames));
  } catch (err) {
    yield put(loadTeamNamesError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* teamNamesData() {
  // Watches for LOAD_TEAMNAMES actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_TEAMNAMES, getTeamNames);
}
