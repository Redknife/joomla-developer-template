import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducer';

const devtools = window.devToolsExtension || (() => noop => noop);

export default (initialState) => {
  const middlewares = [];

  const enhancers = [
    applyMiddleware(...middlewares),
    devtools(),
  ];

  const store = createStore(
    rootReducer,
    initialState,
    compose(...enhancers)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
