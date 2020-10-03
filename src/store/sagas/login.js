import { call,put, takeLatest } from 'redux-saga/effects'
import {loginPending,loginSuccess,loginError} from "../actions/login";
import {setAuthToken} from '../../utils/Auth'
import {loginAPI} from "../services";
import { reducerTypes } from '../constants'
import { push } from 'connected-react-router'




const { login } = reducerTypes;



function *loginSaga(action) {


    try {

        yield put(loginPending(true));
        const res = yield call(
            loginAPI,
            action.payload
        );

        if(res){
            yield put(loginSuccess(res));
            yield setAuthToken(res);
            yield put(loginPending(false));
            yield put(loginError(false));
            yield put(push('listschool'))
        }else{
            yield put(loginError(true));
            yield put(loginPending(false))
        }

    } catch (error) {
        yield put(loginError(true));
        yield put(loginPending(false))
    }

}




export function *authWatcher() {

    yield takeLatest(
        login.LOGIN,
        loginSaga
    )

}