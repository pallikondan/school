import { call, put, takeLatest } from 'redux-saga/effects';
import {getSchoolListRequest, getSchoolListSuccess, getSchoolListFailure} from '../actions/schoolList';
import {fetchSchoolList} from '../services';
import { reducerTypes } from '../constants/index'

const {schoolList} = reducerTypes

export function* fetchSchoolUsersList(action) {
    const { payload } = action;
    const { response, error } = yield call(fetchSchoolList, payload);
    if (response) {
      const {
        data
      } = response;
  
      yield put(getSchoolListSuccess(data));
    } else if (error && error.messages) {
      yield put(getSchoolListFailure());
    } else {
      yield put(getSchoolListFailure());
    }
  }

  export function *schoolWatcher() {

    yield takeLatest(
        schoolList.GET_SCHOOL_LIST_REQUEST,
        fetchSchoolUsersList
    )

}


