import { call, put, takeLatest } from 'redux-saga/effects';
import {getSchoolListRequest, getSchoolListSuccess, getSchoolListFailure, getMemberSuccess,getMemberFailure} from '../actions/school';
import {fetchSchoolList,registerSchoolAPI,fetchMemberList} from '../services';
import { reducerTypes } from '../constants/index'

const {schoolConstants} = reducerTypes;

export  function*  fetchSchoolUsersList(action) {


    const { payload } = action;
    const {response} =  yield  call(fetchSchoolList, payload);
    if (response) {

        yield  put(getSchoolListSuccess(response));
    } else {
      yield put(getSchoolListFailure());
    }
  }

  export  function* fetchMembersList(action) {

    const { payload } = action;
    const response = []
    const result =  yield call(fetchMemberList, payload);
    console.log('fetchmemberlisttt', result);
    if (response) {

        yield put(getMemberSuccess(response));
    } else {
      yield put(getMemberFailure());
    }
  }



export  function*  registerSchool(action) {
    const { payload } = action;
    try{
        const { response, error } =  yield  call(registerSchoolAPI, payload);
        console.log('school register response',response)
        // success trigger here
        console.log('school register error',error)

    }catch (e) {
        console.log("error in api",e)
    }

}

  export function *schoolWatcher() {
    yield takeLatest(
      schoolConstants.GET_MEMBER_LIST_REQUEST,
      fetchMemberList
  );
    yield takeLatest(
        schoolConstants.GET_SCHOOL_LIST_REQUEST,
        fetchSchoolUsersList
    );
      yield takeLatest(
          schoolConstants.REGISTER_SCHOOL,
          registerSchool
      )
}


