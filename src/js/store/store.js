import configureStore from './configureStore';

const initialState = Object.assign(
  {},
  window.__INITIAL_STATE__,
);

export default configureStore(initialState);
