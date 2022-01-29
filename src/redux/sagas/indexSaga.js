import {all} from 'redux-saga/effects';
import authSaga from './authSaga'
import m_listSaga from './m_listSaga'
export default function* rootSaga(){
    yield all([
        authSaga(),
        m_listSaga(),
    ]);
}