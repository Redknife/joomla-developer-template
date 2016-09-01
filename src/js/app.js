import 'babel-polyfill';
import 'matchmedia-polyfill';

import $ from 'jquery';
import 'modernizr';
import stampit from 'stampit';
import UAParser from 'ua-parser-js';

import configureStore from './configureStore';
import uaBodyClasses from './helpers/uaBodyClasses';
import initBreakpoints from './helpers/breakpoints';

// Prepare..
const ua = new UAParser();

const initialState = Object.assign(
  {},
  window.__INITIAL_STATE__,
  { ua: ua.getResult() }
);

const store = configureStore(initialState);

const connectStore = stampit().refs({
  getState: store.getState,
  dispatch: store.dispatch,
  subscribe: store.subscribe,
});

// Init all..
$(() => {
  uaBodyClasses.compose(connectStore)();
  initBreakpoints.compose(connectStore)();
});

