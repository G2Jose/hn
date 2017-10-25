import { combineEpics } from 'redux-observable';
import topStoriesEpic from 'top/top.epic';

const rootEpic = combineEpics(topStoriesEpic);
export default rootEpic;
