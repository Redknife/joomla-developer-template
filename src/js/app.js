import 'babel-polyfill';
import 'matchmedia-polyfill';

// import $ from 'jquery';
import 'modernizr';
import stampit from 'stampit';

import configureStore from './configureStore';
import uaHtmlClasses from './helpers/uaHtmlClasses';
import initBreakpoints from './helpers/breakpoints';

// Prepare..
const initialState = Object.assign(
  {},
  window.__INITIAL_STATE__,
);

const store = configureStore(initialState);

const connectStore = stampit().props({
  getState: store.getState,
  dispatch: store.dispatch,
  subscribe: store.subscribe,
});

// Init all..
$(() => {
  uaHtmlClasses();
  initBreakpoints.compose(connectStore)();
});

