import { isFunction } from 'lodash';
import stampit from 'stampit';

import { bpChange } from '../actions';

const bps = [
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
];

export default stampit().init(function init() {
  const self = this;
  bps.forEach((mq, name) => {
    const mql = matchMedia(mq);
    mql.addListener(() => {
      if (isFunction(self.dispatch)) self.dispatch(bpChange(name));
    });
  });
});
