import { combineReducers } from 'redux';
import stories from 'stories/stories.reducer';

const rootReducer = combineReducers({
  stories,
});

export default rootReducer;
