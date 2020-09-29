import { call, put, takeLatest } from 'redux-saga/effects'

 import {  loginAPI } from '../../api/login'
import { reducerTypes } from '../constants'


import { loginError, loginPending, loginSuccess, setAccessToken } from '../actions/login'


const { login } = reducerTypes;



function *loginSaga(action) {

    try {

        yield put(loginPending(true))
        const res = yield call(
            loginAPI,
            action.payload
        )

        if (res.success) {
            yield put(setAccessToken(res.data.token))
            yield put(loginSuccess(res.data))

        } else {

            yield put(loginError())

        }

        yield put(loginPending(false))

    } catch (error) {
        console.log(error)
        yield put(loginError())
        yield put(loginPending(false))

    }

}




export function *authWatcher() {

    yield takeLatest(
        login.LOGIN,
        loginSaga
    )

}