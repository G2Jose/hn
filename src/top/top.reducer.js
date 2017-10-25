import { handleActions } from 'redux-actions';

import { receivedTopStories, receivedTopStory } from 'top/top.actions';

export default handleActions(
  {
    [receivedTopStories().type](state, action) {
      return [...action.payload].map(item => ({
        ...item,
        _loaded: true,
        _loading: false,
      }));
    },
    [receivedTopStory().type](state, action) {
      const { item, index } = action.payload;
      return state.map((_item, _index) => {
        if (_index !== index) return _item;
        return item;
      });
    },
  },
  new Array(20).fill({
    _loaded: false,
    _loading: true,
  })
);
