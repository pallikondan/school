import { call, put, takeLatest } from 'redux-saga/effects';
import {getSchoolListRequest, getSchoolListSuccess, getSchoolListFailure} from '../actions/school';
import {fetchSchoolList,registerSchoolAPI} from '../services';
import { reducerTypes } from '../constants/index'

const {schoolConstants} = reducerTypes;

export  function*  fetchSchoolUsersList(action) {


    const { payload } = action;
    const { response, error } =  yield  call(fetchSchoolList, payload);
    if (response) {
      const {
        data
      } = response;

        yield  put(getSchoolListSuccess(data));
    } else if (error && error.messages) {

        yield put(getSchoolListFailure());
    } else {
      yield put(getSchoolListFailure());
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
        schoolConstants.GET_SCHOOL_LIST_REQUEST,
        fetchSchoolUsersList
    );
      yield takeLatest(
          schoolConstants.REGISTER_SCHOOL,
          registerSchool
      )
}


