import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Reducer } from '../reducer/index.js';

const store = createStore(
    Reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;