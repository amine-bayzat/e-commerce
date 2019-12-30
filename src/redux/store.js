import {createStore, compose, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import rootReducer from './root.reducer';

const middlewares = [logger];
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

