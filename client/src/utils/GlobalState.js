import { rootReducer } from './reducers';
import { createStore } from 'redux';

// redux global state

const store = createStore(rootReducer)

export default store;
