import { combineReducers } from 'redux';

import testReducer from './test';

const reducers = {
  testState: testReducer,
};

export default combineReducers(reducers);
