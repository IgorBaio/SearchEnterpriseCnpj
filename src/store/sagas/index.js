import UserSaga from './enterprise'
import {all} from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        ...UserSaga,
    ])
}