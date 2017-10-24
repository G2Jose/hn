import { combineReducers } from 'redux';
import { default as top } from 'top/top.actions';

const rootReducer = combineReducers({
  top,
});

export default rootReducer;
