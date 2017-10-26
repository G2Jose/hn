import { combineEpics } from 'redux-observable';
import topStoriesEpic from 'top/top.epic';
import showStoriesEpic from 'show/show.epic';

const rootEpic = combineEpics(topStoriesEpic, showStoriesEpic);
export default rootEpic;
