import { throttle } from 'lodash';
import ConnectStore from '../store/connectStore';
import { bpChange } from '../actions';

export const getBreakpoint = (width) => {
  switch (true) {
    case (width >= 1200):
      return 'lg';
    case (width >= 992):
      return 'md';
    case (width >= 768):
      return 'sm';
    default:
      return 'xs';
  }
};

export class Breakpoints extends ConnectStore {
  init() {
    const self = this;
    self.$window = $(window);
    self.bp = getBreakpoint(self.$window.width());

    self.$window.on('resize', throttle(() => {
      const width = self.$window.width();
      const newBp = getBreakpoint(width);
      if (newBp !== self.bp) {
        self.bp = newBp;
        self.dispatch(bpChange(self.bp));
      }
    }, 350));
  }
}

export default new Breakpoints();
