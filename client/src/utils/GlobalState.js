import { rootReducer } from './reducers';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

// redux global state

const composedEnhancer = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancer)

export default store;
