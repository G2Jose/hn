import { createStore } from 'redux';

import rootReducer from 'common/store/reducer';

const store = createStore(rootReducer);

export default store;
