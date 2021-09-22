import { takeLatest, call, put, fork } from "redux-saga/effects";

import {
  getEnterpriseSuccess,
  getEnterpriseStarredSuccess,
  setEnterpriseOnDatabaseSuccess,
  toggleAlert,
  getEnterpriseFail,
  setEnterpriseOnDatabaseFail,
  getEnterpriseStarredFail,
  deleteEnterpriseOnDatabaseFail,
  deleteEnterpriseOnDatabaseSuccess,
  getEnterpriseFromDatabaseSuccess,
  getEnterpriseFromDatabaseFail
} from "../actions";

import { 
  ENTERPRISE_GET_DATA,
  ENTERPRISE_GET_DATA_STARRED,
  ENTERPRISE_GET_DATA_ON_DATABASE,
  DELETE_ENTERPRISE,
  ENTERPRISE_GET_DATA_DATABASE
} from "../actions/types";

import { 
  getEnterprise, setEnterpriseOnDatabase,
  getEnterpriseStarred,
  deleteEnterpriseOnDatabase,
  getEnterpriseOnDatabase
} from "../apis";

function* getEnterpriseSaga(obj) {
  try {
    const res = yield call(getEnterprise, obj.payload);
    if (!res) {
      yield put(getEnterpriseFail());
      yield put(
        toggleAlert(true, {
          message: "Erro ao buscar os dados",
        })
      );
    } else {
      yield put(
        getEnterpriseSuccess({
          payload: res,
        })
      );

      if (obj.resolve) obj.resolve(res);
    }
  } catch (error) {}
}

function* watchGetEnterpriseSaga() {
  yield takeLatest(ENTERPRISE_GET_DATA, getEnterpriseSaga);
}

function* setEnterpriseOnDatabaseSaga(obj) {
  try {
    const res = yield call(setEnterpriseOnDatabase, obj.payload);
    if (!res) {
      yield put(setEnterpriseOnDatabaseFail());
      yield put(
        toggleAlert(true, {
          message: "Erro ao buscar os dados dos repositórios",
        })
      );
    } else {
      yield put(
        setEnterpriseOnDatabaseSuccess({
          payload: res,
        })
      );

      if (obj.resolve) obj.resolve(res);
      return res;
    }
  } catch (error) {}
}

function* watchSetEnterpriseReposSaga() {
  yield takeLatest(ENTERPRISE_GET_DATA_ON_DATABASE, setEnterpriseOnDatabaseSaga);
}

function* getEnterpriseOnDatabaseSaga(obj) {
  try {
    const res = yield call(getEnterpriseOnDatabase);
    if (!res) {
      yield put(getEnterpriseFromDatabaseFail());
      yield put(
        toggleAlert(true, {
          message: "Erro ao buscar os dados dos repositórios",
        })
      );
    } else {
      yield put(
        getEnterpriseFromDatabaseSuccess({
          payload: res,
        })
      );

      if (obj.resolve) obj.resolve(res);
      return res;
    }
  } catch (error) {}
}

function* watchGetEnterpriseOnDatabaseSaga() {
  yield takeLatest(ENTERPRISE_GET_DATA_DATABASE, getEnterpriseOnDatabaseSaga);
}

function* deleteEnterpriseOnDatabaseSaga(obj) {
  try {
    const res = yield call(deleteEnterpriseOnDatabase, obj.payload);
    if (!res) {
      yield put(deleteEnterpriseOnDatabaseFail());
    } else {
      
      yield put(
        deleteEnterpriseOnDatabaseSuccess({
          payload: res,
        })
      );

      if (obj.resolve) obj.resolve(res);
      return res
    }
  } catch (error) {
    console.log(error)
  }
}

function* watchDeleteEnterpriseReposSaga() {
  yield takeLatest(DELETE_ENTERPRISE, deleteEnterpriseOnDatabaseSaga);
}

function* getEnterpriseStarredSaga(obj) {
  try {
    const res = yield call(getEnterpriseStarred, obj.payload);
    if (!res) {
      yield put(getEnterpriseStarredFail());
      yield put(
        toggleAlert(true, {
          message: "Erro ao buscar os dados de starreds",
        })
      );
    } else {
      yield put(
        getEnterpriseStarredSuccess({
          payload: res,
        })
      );

      if (obj.resolve) obj.resolve(res);
    }
  } catch (error) {}
}

function* watchGetEnterpriseStarredSaga() {
  yield takeLatest(ENTERPRISE_GET_DATA_STARRED, getEnterpriseStarredSaga);
}


const EnterpriseSagas = [
  fork(watchGetEnterpriseSaga),
  fork(watchSetEnterpriseReposSaga),
  fork(watchDeleteEnterpriseReposSaga),
  fork(watchGetEnterpriseOnDatabaseSaga),
];

export default EnterpriseSagas