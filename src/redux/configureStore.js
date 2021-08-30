import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  missionsReducer, rocketsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunkMiddleware),
);

export default store;
