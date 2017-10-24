import { createAction } from 'redux-actions';

export const fetchTopStories = createAction('FETCH_TOP_STORIES');
export const receivedTopStories = createAction('RECEIVED_TOP_STORIES');
