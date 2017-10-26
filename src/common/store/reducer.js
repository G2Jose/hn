import { combineReducers } from 'redux';
import topStories from 'top/top.reducer';
import showStories from 'show/show.reducer';

const rootReducer = combineReducers({
  topStories,
  showStories,
});

export default rootReducer;
