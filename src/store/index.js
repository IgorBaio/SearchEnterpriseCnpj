import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from 'redux-persist';
import createFilter from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';
import reducers from "./reducers";
import rootSaga from "./sagas";
import { loadState, saveState } from "./localStorage";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['alert'],
    transforms: [createFilter('user', ['user', 'isSignedIn'])],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const persistedState = loadState();

export const store = createStore(
    persistedReducer,
    persistedState,
    applyMiddleware(sagaMiddleware),
);

store.subscribe(() => {
    saveState({
        user: store.getState().user
    });
  });

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);