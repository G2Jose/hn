import { combineReducers } from 'redux';
import topStories from 'top/top.reducer';

const rootReducer = combineReducers({
  topStories,
});

export default rootReducer;
