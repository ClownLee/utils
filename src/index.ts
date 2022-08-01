import { debounce, throttle } from './components/funs';
import { isNumber, thousandth, zeroFilling } from './components/number';
import { encode, decode } from './components/html';
import {
  arrayToTree,
  treeToArray,
  findParentTree,
  findParentArr,
  deepClone,
  arrayMax,
  arrayMin,
} from './components/arrs';

export {
  isNumber,
  thousandth,
  zeroFilling,
  debounce,
  throttle,
  encode,
  decode,
  arrayToTree,
  treeToArray,
  findParentTree,
  findParentArr,
  deepClone,
  arrayMax,
  arrayMin,
};
