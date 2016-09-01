import { isFunction } from 'lodash';
import stampit from 'stampit';

import { bpChange } from '../actions';

const bps = new Map([
  [
    'xs',
    'screen and (min-width: 1px)',
  ],
  [
    'sm',
    'screen and (min-width: 768px)',
  ],
  [
    'md',
    'screen and (min-width: 992px)',
  ],
  [
    'lg',
    'screen and (min-width: 1200px)',
  ],
]);

export default stampit({
  init: ({ instance }) => {
    bps.forEach((mq, name) => {
      const mql = matchMedia(mq);
      mql.addListener(() => {
        if (isFunction(instance.dispatch)) instance.dispatch(bpChange(name));
      });
    });
  },
});
