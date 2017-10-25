import { handleActions } from 'redux-actions';

import { receivedTopStories } from 'top/top.actions';

export default handleActions(
  {
    [receivedTopStories().type](state, action) {
      return [...state, ...action.payload];
    },
  },
  { topStories: [] }
);
