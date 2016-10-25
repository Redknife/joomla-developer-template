import store from './store';

export default class ConnectStore {
  constructor() {
    this.getState = store.getState;
    this.dispatch = store.dispatch;
    this.subscribe = store.subscribe;
  }
}
