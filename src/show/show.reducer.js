import { handleActions } from 'redux-actions';

import { fetchShowStories, receivedShowStory } from 'show/show.actions';

export default handleActions(
  {
    [receivedShowStory().type](state, action) {
      const { item, index } = action.payload;
      return state.map((_item, _index) => {
        if (_index !== index) return _item;
        return item;
      });
    },
    [fetchShowStories().type](state) {
      return state.map(() => ({ _loading: true, _loaded: false }));
    },
  },
  new Array(100).fill({
    _loaded: false,
    _loading: true,
  })
);
