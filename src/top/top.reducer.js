import { handleActions } from 'redux-actions';

import { receivedTopStories } from 'top/top.actions';

export default handleActions(
  {
    [receivedTopStories().type](state, action) {
      return [...action.payload].map(item => ({
        ...item,
        _loaded: true,
        _loading: false,
      }));
    },
  },
  new Array(500).fill({
    _loaded: false,
    _loading: true,
  })
);
