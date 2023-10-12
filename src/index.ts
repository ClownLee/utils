import { debounce, throttle } from './components/funs';
import { isNumber, thousandth, zeroFilling } from './components/number';
import { encode, decode, lazyLoading } from './components/html';
import {
  arrayToTree,
  treeToArray,
  findParentTree,
  findParentArr,
  deepClone,
  arrayMax,
  arrayMin,
} from './components/arrs';

import SM4 from './components/sm4/index';

export {
  isNumber,
  thousandth,
  zeroFilling,
  debounce,
  throttle,
  encode,
  decode,
  lazyLoading,
  arrayToTree,
  treeToArray,
  findParentTree,
  findParentArr,
  deepClone,
  arrayMax,
  arrayMin,
  SM4,
};
