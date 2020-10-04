import { all, fork } from 'redux-saga/effects'
import {authWatcher} from './login';
import {schoolWatcher} from './school'




function *rootSaga() {
    yield fork(authWatcher);
    yield fork(schoolWatcher)
}

export default rootSaga
