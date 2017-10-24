import { handleActions } from 'redux-actions';

import { fetchTopStories } from 'top/top.actions';

export default handleActions(
  {
    [fetchTopStories().type](state) {
      return state;
    },
  },
  { stories: [] }
);
