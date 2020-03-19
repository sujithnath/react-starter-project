import { combineReducers } from 'redux';

import dummyReducer from './dummyReducer';

const rootReducer = combineReducers({
  DummyData: dummyReducer
});

export default rootReducer;
