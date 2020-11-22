import { call,put, takeLatest } from 'redux-saga/effects'
import {loginPending,loginSuccess,loginError} from "../actions/login";
import {setAuthToken} from '../../utils/Auth'
import {loginAPI} from "../services";
import { reducerTypes } from '../constants'
import { showLoading, hideLoading } from 'react-redux-loading-bar'



const { login } = reducerTypes;



function *loginSaga(action) {
       // yield put(showLoading());
       // yield put(loginPending(true));
        const res = yield call(
            loginAPI,
            action.payload.loginData
        );

        if(res){
            action.payload.props.history.push('listschool')
           // yield put(hideLoading());
            yield put(loginSuccess(res));
            localStorage.setItem('UserType', res.data.response.is_staff);
        }

    else{
        yield put(loginError(true));
        yield put(loginPending(false));
        yield put(hideLoading())

    }

}




export function *authWatcher() {

    yield takeLatest(
        login.LOGIN_PENDING,
        loginSaga
    )

}