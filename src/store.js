import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import ReduxThunk from 'redux-thunk';

export const DEVELOPMENT = true

let store

if (DEVELOPMENT === true) {
  const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  const enhancer = compose(
    applyMiddleware(ReduxThunk),
    devtools
  )
  store = createStore(reducer, enhancer);
} else {
  const enhancer = compose(
    applyMiddleware(ReduxThunk),
  )
  store = createStore(reducer, enhancer);
}

export default store;