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

        console.log('ress', res);

        if(res){
           // yield put(hideLoading());
            yield put(loginSuccess(res));
            yield setAuthToken(res.response.token);
            window.location.href = "http://localhost:3005/listschool"
            //action.payload.props.history.push('listschool')
            localStorage.setItem('UserType', res.response.is_staff);
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