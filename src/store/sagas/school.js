import { call, put, takeLatest } from 'redux-saga/effects';
import {getSchoolListRequest, getSchoolListSuccess, getSchoolListFailure, getMemberSuccess,getMemberFailure} from '../actions/school';
import {fetchSchoolList,registerSchoolAPI,fetchMemberListService, registerMultipleSchoolAPI} from '../services';
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
    //const response = []
    const {response} =  yield call(fetchMemberListService, payload);
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
        // success trigger here

    }catch (e) {
        console.log("error in api",e)
    }

}

export  function*  registerMultipleSchool(action) {
  const { payload } = action;
  console.log('from sagaaaaa', action)
  try{
      const { response, error } =  yield  call(registerMultipleSchoolAPI, payload);
      // success trigger here

  }catch (e) {
      console.log("error in api",e)
  }

}

  export function *schoolWatcher() {
    yield takeLatest(
      schoolConstants.GET_MEMBER_LIST_REQUEST,
      fetchMembersList
  );
    yield takeLatest(
        schoolConstants.GET_SCHOOL_LIST_REQUEST,
        fetchSchoolUsersList
    );
      yield takeLatest(
          schoolConstants.REGISTER_SCHOOL,
          registerSchool
      );
      yield takeLatest(
        schoolConstants.REGISTER_MULTIPLE_SCHOOL_REQUEST,
        registerMultipleSchool
    )
}


